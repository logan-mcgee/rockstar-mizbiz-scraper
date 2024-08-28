! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "afc96057-4d54-4940-97f8-9ba5fe52daf4", e._sentryDebugIdIdentifier = "sentry-dbid-afc96057-4d54-4940-97f8-9ba5fe52daf4")
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
  [9985], {
    60207: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(55140),
        n = a(73379);
      const i = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, s.NameField)(e), (0, s.translatedField)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, s.StyleField)(e)],
          defaultItem: () => (0, s.defaultItemUnique)({
            content: ""
          }),
          itemProps: e => (0, s.itemPropsWithKey)(e, {
            label: (0, n.stripHTML)(`${e?.name??e?.[s.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    93665: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => b,
        h: () => p
      });
      var s = a(71403),
        n = a(42756),
        i = a(64205),
        r = a(27926),
        c = a(74401),
        o = a(40207),
        d = a(89779);
      var l = a(46632);
      const m = e => {
          let {
            modal: t
          } = e;
          const {
            content: a,
            className: n,
            height: m,
            onClose: g,
            rect: u = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: p = "",
            width: b,
            fadeIn: h = !0,
            cardIds: v,
            activeId: k,
            theme: x,
            title: y,
            gtm: _ = {},
            aspectRatio: N = "default",
            cardDimensions: j
          } = t, {
            left: S,
            top: w
          } = u, C = v?.indexOf(k), [T, A] = (0, s.useState)(v?.length || 0), {
            track: M
          } = (0, o.useGtmTrack)(), E = null !== v && (v?.length || 0) > 1 && ("flag_bg" === x || "fob" === j?.size), [P, I] = (0, d.useSearchParams)(), [L, $] = (0, s.useState)(!1), [B, D] = (0, s.useState)(!1), [O, H] = (0, s.useState)(), G = e => {
            "number" == typeof e && v && e < v.length && e > -1 && (console.log("navigating to: ", e), I({
              info: v[e].toString()
            }))
          }, V = () => {
            const e = C > -1 ? C - 1 : 0;
            G(e), M({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: y,
              position: C
            })
          }, z = () => {
            const e = C > -1 ? C + 1 : 0;
            G(e), M({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: y,
              position: C
            })
          };
          (0, s.useEffect)((() => {
            A(v?.length || 0)
          }), [v?.length]), (0, s.useEffect)((() => {
            null !== C && null !== v && G(C)
          }), [C, v]), (0, s.useEffect)((() => {
            const e = v?.findIndex((e => e === k));
            "number" == typeof e && (D(e <= 0), $(e >= T - 1))
          }), [v, k]);
          const [R] = (0, s.useState)({
            y: w,
            x: S,
            top: 0,
            left: 0,
            width: b,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: E ? "0" : ""
          }), F = {
            opacity: 1
          }, W = (0, s.useRef)(null), q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, U = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [Q] = (0, s.useState)({
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
          }), [Y, K] = (0, s.useState)({
            initial: R,
            shown: Q
          });
          (0, s.useEffect)((() => {
            K({
              initial: R,
              shown: Q
            })
          }), [R, Q]), (0, s.useEffect)((() => {
            const e = e => {
              "function" == typeof g && "Escape" === e.key && (g(), M({
                event: "modal_close",
                element_placement: y,
                ..._
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const X = () => {
              "function" == typeof g && (g(), M({
                event: "modal_close",
                element_placement: y,
                ..._
              }))
            },
            Z = (e, t) => {
              if (!e || !e.children || t < 0) return null;
              for (let a = 0; a < e.children.length; a++) {
                const s = e.children[a];
                if (s.scrollHeight > s.clientHeight) return s;
                const n = Z(s, t - 1);
                if (n) return n
              }
              return null
            },
            J = e => {
              if (te?.current?.children) {
                let t = null;
                const a = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    t = (e => {
                      let t = null;
                      return O?.queried ? t = O.element : (t = Z(e, 2), H({
                        queried: !0,
                        element: t
                      })), t
                    })(te.current), e.preventDefault(), t && (t.scrollTop += a)
                }
              }
            },
            ee = h ? 0 : 1,
            te = (0, s.useRef)(null),
            ae = (0, l.jsx)(r.motion.button, {
              className: "rockstargames-sites-gta-gen9b0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: U,
              onClick: () => {
                X()
              },
              onKeyDown: J,
              onKeyUp: J
            });
          let se = null;
          return se = i.Ay, (0, s.useMemo)((() => (0, l.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": E,
            "data-aspect-ratio": N,
            children: (0, l.jsx)(se, {
              children: (0, l.jsxs)("div", {
                children: [(0, l.jsx)(r.motion.div, {
                  className: "rockstargames-sites-gta-gen9c8632c630878ad16e637fe2b8db2f02c",
                  initial: {
                    opacity: 0
                  },
                  animate: F,
                  transition: q,
                  onClick: () => X()
                }), E && (0, l.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9eeecb8dc782f382fc9d32d03ecc1a2a5",
                  children: [(0, l.jsxs)(r.motion.div, {
                    className: "rockstargames-sites-gta-gen9b6e3406cb9a52fc7583d5c74681e88bc",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: U,
                    children: [(0, l.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: V,
                      disabled: B,
                      onKeyDown: J,
                      onKeyUp: J
                    }), (0, l.jsxs)("div", {
                      className: "rockstargames-sites-gta-gen9ff3c13d9dc1de9af609a1f99b4c47039",
                      "data-theme": x,
                      children: [" ", C + 1, (0, l.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9cd9c6033ad00894881fa5451acfe15da"
                      }), v?.length, " "]
                    }), (0, l.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: z,
                      disabled: L,
                      onKeyDown: J,
                      onKeyUp: J,
                      "data-autofocus": !0
                    })]
                  }), ae]
                }), (0, l.jsx)(r.motion.div, {
                  className: "rockstargames-sites-gta-gen9fab99cc2e2ca2e2a2158f9d41e764558",
                  ref: W,
                  initial: "initial",
                  animate: "shown",
                  variants: Y,
                  transition: q,
                  style: f,
                  children: (0, l.jsxs)(r.motion.div, {
                    className: (0, c.classList)("rockstargames-sites-gta-gen9b6aa5ebf680af5d95d0e9c76ac36ed82", n),
                    children: [!E && ae, (0, l.jsx)(r.motion.div, {
                      className: (0, c.classList)("rockstargames-sites-gta-gen9d901631c0b9d817396c8352c027a2a0d", p),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: U,
                      ref: te,
                      children: a
                    }), (0, l.jsx)("button", {
                      className: "rockstargames-sites-gta-gen9f1ecf74036b2b7fdfda3613619af40cf",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [a, C, f])
        },
        g = "modal-context",
        u = [null, () => null],
        f = window?.[g] ?? (window[g] = (0, s.createContext)(u)),
        p = () => (0, s.useContext)(f),
        b = e => {
          let {
            children: t
          } = e;
          const [a, i] = (0, s.useState)(u), {
            setBodyIsLocked: r
          } = (0, n.useBodyScrollable)("ModalProvider"), c = (0, s.useMemo)((() => a?.content ? (0, l.jsx)(m, {
            modal: a
          }) : null), [a]);
          return (0, s.useEffect)((() => {
            r(!!c)
          }), [c]), (0, l.jsx)(f.Provider, {
            value: [c, i],
            children: t
          })
        }
    },
    71864: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var s = a(46632);
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
    15186: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var s = a(89779),
        n = a(40207),
        i = a(35459),
        r = a(46632);
      const c = e => {
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
        o = e => {
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
        d = e => {
          let {
            altText: t = "",
            text: a,
            onClick: s,
            btnColor: d = "#fff",
            labelColor: l = "#000",
            type: m = "",
            icon: g,
            size: u,
            secondText: f,
            consoleBtn: p = !1,
            img: b,
            to: h = !1,
            gtm: v,
            innerRef: k = null
          } = e;
          const {
            track: x
          } = (0, n.useGtmTrack)(), y = [i.A.plusButton, i.A[m] ?? "", i.A[u] ?? "", i.A[p] ?? ""].join(" "), _ = {
            "--hvr-color": d ?? l,
            "--hvr-bg-color": l ?? d,
            "--hvr-border-color": d ?? l
          }, N = (0, r.jsxs)(r.Fragment, {
            children: [b ? (0, r.jsx)("img", {
              src: b,
              alt: t || a
            }) : "", (0, r.jsxs)("div", {
              className: i.A.btnText,
              icon: g,
              children: [a, f ? (0, r.jsx)("span", {
                children: f
              }) : ""]
            })]
          }), j = e => {
            s && s(e), v && x({
              event: "cta_other",
              text: a,
              ...v,
              link_url: h || ""
            })
          };
          if (h) {
            if (h.startsWith("http")) {
              const e = h.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                children: (0, r.jsx)("a", {
                  href: h,
                  className: y,
                  target: e,
                  onClick: j,
                  children: N
                })
              })
            }
            return (0, r.jsx)(o, {
              className: y,
              onClick: j,
              style: _,
              to: h,
              children: N
            })
          }
          return (0, r.jsx)(c, {
            className: y,
            onClick: j,
            style: _,
            innerRef: k,
            children: N
          })
        }
    },
    72877: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => r
      });
      var s = a(74401),
        n = a(15186);
      var i = a(46632);
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
              title: r,
              gtm: c
            } = e;
            return r ? (0, i.jsx)(n.A, {
              className: "white",
              text: r,
              to: s,
              icon: a,
              gtm: c
            }, t) : ""
          }))
        }) : null
      }
    },
    99074: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => k
      });
      var s = a(71403),
        n = a(48331),
        i = a(355),
        r = a(47252),
        c = a(40207),
        o = a(49948),
        d = a(74401),
        l = a(81902),
        m = a(89269),
        g = a(15186);
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
        ctaBtnText: "rockstargames-sites-gta-gen9deccf7856a9b5d28892166a7a3ae82a1",
        closed: "rockstargames-sites-gta-gen9ad4d8219c6e2b254d7ef96f4e213e07b",
        linksArea: "rockstargames-sites-gta-gen9bee7cbf39adcd03dfdaf9fe9ec0c0737",
        closeBtn: "rockstargames-sites-gta-gen9f66ad127058a8800197f4d00b237ca06",
        linkList: "rockstargames-sites-gta-gen9cab38167a36e713966eea2a91eefe037",
        bottomText: "rockstargames-sites-gta-gen9abda7e924e80f3591a05c40cbc3e2be5",
        imageGroup: "rockstargames-sites-gta-gen9bfa874edb54bdf216d34890c44d12ea7",
        imgMobile: "rockstargames-sites-gta-gen9cc0ee47736a93f55af267e42e89785c1",
        imgDesktop: "rockstargames-sites-gta-gen9ff92e6d4ac04eae88fbc2146f4a10625",
        responsiveImages: "rockstargames-sites-gta-gen9ef1dd1e1e9814629b79f34363160af0a",
        backgroundImage: "rockstargames-sites-gta-gen9deb56fad2147026bac0b8973c69f0f33",
        foregroundImage: "rockstargames-sites-gta-gen9e2021af151c34f3f71856b9e909a7aa4"
      };
      var f = a(35459),
        p = a(46632);
      const b = e => {
          let {
            className: t,
            images: a
          } = e;
          const s = (0, d.useGetCdnSource)(a?.mobile?.full_src ?? null),
            n = (0, d.useGetCdnSource)(a?.desktop?.full_src ?? s);
          return (0, p.jsxs)("div", {
            className: [t, u.responsiveImages].join(" "),
            children: [s ? (0, p.jsx)("div", {
              className: u.imgMobile,
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : "", n ? (0, p.jsx)("div", {
              className: u.imgDesktop,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        h = e => {
          let {
            addedInfo: t = null,
            buynowbtn: i = null,
            description: r = null,
            images: o,
            links: d = [],
            title: m = null
          } = e;
          const {
            track: h
          } = (0, c.useGtmTrack)(), [v, k] = (0, s.useState)(!1), x = {
            type: "spring",
            stiffness: 425,
            damping: 40
          }, y = {
            type: "spring",
            stiffness: 650,
            damping: 45
          }, _ = {
            ease: "easeOut",
            duration: .9,
            delay: .3
          }, N = {
            open: {
              opacity: 0,
              transition: {
                ease: "easeOut",
                duration: .3
              }
            },
            closed: {
              opacity: 1,
              transition: _
            }
          }, j = {
            open: {
              opacity: 1,
              display: "grid",
              height: "auto",
              transition: {
                opacity: _,
                height: x
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
                height: y
              },
              transitionEnd: {
                display: "none"
              }
            }
          }, S = {
            open: {
              cursor: "default",
              "--cta-border-color": "var(--white-15)",
              "--cta-background-color": "rgba(255,255,255,.1)",
              "--cta-background-color-noBlur": "var(--black-100)",
              gridGap: "var(--grid-gap-sm)",
              transition: x,
              paddingBottom: "var(--card-padding)",
              "--btn-hover-bg-color": "rgba(255,255,255,.1)",
              "--btn-hover-bg-color-noBlur": "var(--black-100)",
              "--btn-hover-font-color": "none",
              "--btn-hover-border-color": "var(--white-15)"
            },
            closed: {
              "--cta-border-color": "var(--white-100)",
              "--cta-background-color": "inherit",
              "--cta-background-color-noBlur": "inherit",
              gridGap: 0,
              transition: y,
              transitionEnd: {
                "--btn-hover-bg-color": "inherit",
                "--btn-hover-bg-color-noBlur": "inherit",
                "--btn-hover-font-color": "inherit",
                "--btn-hover-border-color": "inherit"
              }
            }
          };
          return (0, p.jsx)(l.qr, {
            children: (0, p.jsxs)("div", {
              className: u.card,
              children: [(0, p.jsxs)("div", {
                className: u.imageGroup,
                children: [(0, p.jsx)(b, {
                  className: u.backgroundImage,
                  images: o?.background
                }), (0, p.jsx)(b, {
                  className: u.foregroundImage,
                  images: o?.foreground
                })]
              }), (0, p.jsxs)("div", {
                className: u.content,
                children: [(0, p.jsxs)(n.motion.div, {
                  className: u.contentGrid,
                  animate: v ? "open" : "closed",
                  variants: N,
                  children: [(0, p.jsxs)("div", {
                    className: u.titleArea,
                    children: [(0, p.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: m
                      }
                    }), (0, p.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: r
                      }
                    })]
                  }), d.length ? (0, p.jsx)("div", {
                    className: u.platforms,
                    children: d.map(((e, t) => (0, p.jsx)("div", {
                      className: u[e.platform],
                      children: e.platform ? (0, p.jsx)("img", {
                        src: a(22343)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+t}`)))
                  }) : ""]
                }), t ? (0, p.jsx)(n.motion.p, {
                  className: u.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: t
                  },
                  animate: v ? "open" : "closed",
                  variants: N
                }) : "", i ? (0, p.jsxs)(n.motion.div, {
                  className: [u.ctaBtn, f.A.plusButton, v ? "" : u.closed].join(" "),
                  animate: v ? "open" : "closed",
                  variants: S,
                  initial: !1,
                  children: [(0, p.jsx)(n.motion.button, {
                    className: [u.ctaBtnText, f.A.btnText].join(" "),
                    animate: v ? "open" : "closed",
                    variants: {
                      open: {
                        pointerEvents: "none",
                        cursor: "default",
                        paddingTop: "var(--card-padding)",
                        paddingBottom: "0",
                        paddingLeft: "var(--card-padding)",
                        paddingRight: "var(--card-padding)"
                      },
                      closed: {
                        cursor: "pointer",
                        paddingTop: "var(--padding-sm)",
                        paddingBottom: "var(--padding-sm)",
                        paddingLeft: "var(--padding-md)",
                        paddingRight: "var(--padding-md)"
                      }
                    },
                    initial: !1,
                    onClick: () => {
                      h({
                        event: "select_platform",
                        text: "select platform",
                        element_placement: `buy now > ${m}`
                      }), k(!v)
                    },
                    children: i
                  }), v && (0, p.jsx)("button", {
                    type: "button",
                    className: u.closeBtn,
                    onClick: () => {
                      h({
                        event: "cta_other",
                        text: "close",
                        element_placement: `buy now > ${m} > select platform`
                      }), k(!1)
                    },
                    "aria-hidden": !v,
                    children: (0, p.jsx)("img", {
                      src: a(737),
                      alt: "Close menu button"
                    })
                  }), (0, p.jsx)(n.motion.div, {
                    className: [u.linksArea, v ? u.showLinks : ""].join(" "),
                    animate: v ? "open" : "closed",
                    variants: j,
                    initial: !1,
                    children: (0, p.jsx)("div", {
                      className: u.linkList,
                      children: d.length ? d.map(((e, t) => {
                        return (0, p.jsx)(g.A, {
                          type: "blackBtn",
                          size: "large",
                          img: a(22343)(`./${e.platform}.svg`),
                          consoleBtn: e.platform,
                          to: e.href,
                          altText: e?.altText,
                          onClick: (s = e.platform, n = e.href, () => {
                            h({
                              event: "cta_store_link",
                              text: s,
                              link_url: n,
                              element_placement: `buy now > ${m} > select platform`
                            })
                          }),
                          "aria-hidden": !v
                        }, `${e.platform+t}`);
                        var s, n
                      })) : ""
                    })
                  })]
                }) : ""]
              })]
            })
          })
        };
      h.displayName = "SwiperSlide";
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
        k = i.withFadeIn((0, r.A)((e => {
          let {
            cards: t = [],
            bottomText: a,
            topText: n,
            ...i
          } = e;
          const {
            track: r
          } = (0, c.useGtmTrack)(), {
            ref: d,
            inView: g
          } = (0, o.useInView)({
            threshold: .6
          }), [f, b] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            g && !f && (r({
              event: "page_section_impression",
              element_placement: i?._memoq?.topText?.toLowerCase()
            }), b(!0))
          }), [g]), (0, p.jsxs)("div", {
            className: u.buyNowArea,
            ref: d,
            children: [(0, p.jsxs)("div", {
              className: u.topArea,
              children: [n ? (0, p.jsx)("h2", {
                children: n
              }) : "", (0, p.jsxs)("div", {
                className: u.btnArea,
                children: [(0, p.jsx)("div", {
                  className: u.prevBtn
                }), (0, p.jsx)("div", {
                  className: u.nextBtn
                })]
              })]
            }), t?.length ? (0, p.jsx)(l.RC, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${u.nextBtn}`,
                prevEl: `.${u.prevBtn}`
              },
              onSlideNextTransitionEnd: () => {
                r({
                  event: "carousel_next",
                  element_placement: n?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                r({
                  event: "carousel_previous",
                  element_placement: n?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                r({
                  event: "carousel_swipe",
                  element_placement: n?.toLowerCase() ?? ""
                })
              },
              modules: [m.Vx],
              breakpoints: v,
              children: t.map((e => (0, s.createElement)(h, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", a ? (0, p.jsx)("p", {
              className: u.bottomText,
              children: a
            }) : ""]
          })
        })))
    },
    5765: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(74401);
      var n = a(46632);
      const i = e => {
        let {
          disclaimer: t,
          text: a = null,
          title: i,
          className: r = "",
          style: c = {}
        } = e;
        const o = a ?? t?.text ?? null,
          d = i ? `<h5>${i}</h5>${o}` : o;
        return o ? (0, n.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9fafe66500f74b5fda33cb7b70746a014", r),
          dangerouslySetInnerHTML: {
            __html: d
          },
          style: c
        }) : null
      }
    },
    47668: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ay: () => p
      });
      var s = a(71403),
        n = a(32148),
        i = a(47252),
        r = a(40207),
        c = a(49948),
        o = a(33588),
        d = a(94430),
        l = a.n(d);
      const m = {
        pillBtn: "rockstargames-sites-gta-gen9b97c60a2d340e6db3952c7ae27a9b611",
        selected: "rockstargames-sites-gta-gen9db8c955ec560b358a7c1441d256959bc",
        faq: "rockstargames-sites-gta-gen9b98dca4969db7550b49d754ec2073908",
        faqArea: "rockstargames-sites-gta-gen9ed716cf574f33506740c9265064eeb55",
        accordionRoot: "rockstargames-sites-gta-gen9c88899efe7dcffe470e1cb4061c1c573",
        accordionItem: "rockstargames-sites-gta-gen9f655033dc433f9161105c8c329135f64",
        accordionTrigger: "rockstargames-sites-gta-gen9a6e60efab2e938aa8532d0e55e3eb315",
        accordionContent: "rockstargames-sites-gta-gen9eff014974955b9b02cc649832c97a8e4",
        slideDown: "rockstargames-sites-gta-gen9c5eb78c275bffe55d3289b14ffeb385c",
        slideUp: "rockstargames-sites-gta-gen9f4d849a374adcea8061e76a938f1c0c5",
        accordionContentText: "rockstargames-sites-gta-gen9cc28f66d8cb37794278c9f5b21ba2d21",
        accordionChevron: "rockstargames-sites-gta-gen9bf20e6733781f95b7d78c3578c656b98",
        disclaimer: "rockstargames-sites-gta-gen9f6ace97f5f337b05ad32ebe31dd2c285",
        viewMoreContent: "rockstargames-sites-gta-gen9ba28a813db3a21149946e2ce052b2bac",
        viewMore: "rockstargames-sites-gta-gen9c91ad0f82fc70dfb758fab7978a37f24"
      };
      var g = a(46632);
      const u = (0, s.forwardRef)(((e, t) => {
          let {
            children: a,
            className: s,
            ...i
          } = e;
          return (0, g.jsx)(o.Header, {
            className: m.accordionHeader,
            children: (0, g.jsxs)(o.Trigger, {
              ref: t,
              className: l()(m.accordionTrigger, s),
              ...i,
              children: [a, (0, g.jsx)(n.ChevronDownIcon, {
                className: m.accordionChevron,
                "aria-hidden": !0
              })]
            })
          })
        })),
        f = (0, s.forwardRef)(((e, t) => {
          let {
            children: a,
            className: s,
            ...n
          } = e;
          return (0, g.jsx)(o.Content, {
            className: l()(m.accordionContent, s),
            ...n,
            ref: t,
            children: (0, g.jsx)("div", {
              className: m.accordionContentText,
              children: a
            })
          })
        })),
        p = (0, i.A)((e => {
          let {
            buttonTxt: t,
            description: a,
            disclaimer: n,
            faqList: i = [],
            initialLength: d = 6,
            addedLength: l = 6,
            title: p,
            tinaModulesInfo: b
          } = e;
          const {
            track: h
          } = (0, r.useGtmTrack)(), [v, k] = (0, s.useState)(d), [x, y] = (0, s.useState)(void 0), [_, N] = (0, s.useState)(!1), j = (0, s.useRef)(null), S = (0, s.useRef)([]), {
            ref: w
          } = (0, c.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && h({
                event: "page_section_impression",
                element_placement: "faqs"
              })
            }
          });
          return (0, s.useEffect)((() => {
            if (_) {
              const e = v - l;
              S.current[e] && S.current[e].focus(), N(!1)
            }
          }), [v]), (0, g.jsxs)("div", {
            ref: w,
            className: m.faq,
            children: [(0, g.jsxs)("div", {
              className: m.faqArea,
              children: [p && (0, g.jsxs)("div", {
                children: [(0, g.jsx)("h3", {
                  children: b?.[0]?.title ?? p
                }), (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              }), (0, g.jsx)(o.Root, {
                className: m.accordionRoot,
                type: "single",
                collapsible: !0,
                value: x,
                onValueChange: e => {
                  let t = "",
                    a = null;
                  e ? (t = "cta_expand", a = parseInt(e, 10)) : (t = "cta_collapse", a = parseInt(x, 10)), h({
                    event: t,
                    text: `FAQ ${a}`,
                    position: a,
                    element_placement: "faqs"
                  }), y(e)
                },
                children: i.length ? i.slice(0, v).map(((e, t) => {
                  let {
                    question: a,
                    answer: s
                  } = e;
                  return (0, g.jsxs)(o.Item, {
                    className: m.accordionItem,
                    value: (t + 1).toString(),
                    children: [(0, g.jsx)(u, {
                      ref: e => S.current[t] = e,
                      children: a
                    }), (0, g.jsx)(f, {
                      children: (0, g.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: s
                        }
                      })
                    })]
                  }, t)
                })) : ""
              }), i.length > v && (0, g.jsx)("div", {
                className: m.viewMoreContent,
                children: (0, g.jsxs)("button", {
                  className: m.viewMore,
                  onClick: () => {
                    h({
                      event: "view_all",
                      text: "view more",
                      element_placement: "faqs"
                    }), k((e => e + l)), N(!0)
                  },
                  ref: j,
                  children: [(0, g.jsx)("span", {
                    children: t
                  }), (0, g.jsx)("img", {
                    src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd73beaf06cda8c7936703f23f90bd6f.svg",
                    alt: ""
                  })]
                })
              })]
            }), n && (0, g.jsx)("div", {
              className: m.disclaimer,
              dangerouslySetInnerHTML: {
                __html: n
              }
            })]
          })
        }))
    },
    52842: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(65046);
      var n = a(46632);
      const i = e => {
        let {
          children: t,
          style: a
        } = e;
        return (0, n.jsx)(s.B, {
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
    57797: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => u
      });
      var s = a(71403),
        n = a(54252),
        i = a.n(n),
        r = a(60285),
        c = a(68340),
        o = a(25180),
        d = a(28089),
        l = a(40207);
      var m = a(46632);
      const g = e => {
          let {
            guide: t,
            parentTitle: a,
            index: s
          } = e;
          const {
            track: n
          } = (0, l.useGtmTrack)();
          let c = {
            hero: {}
          };
          i().cloneDeepWith(t, ((e, t) => {
            "images" === t && (c = e)
          }));
          const {
            src: o
          } = (0, d.useImageParser)(c?.thumb ?? {});
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b40f08dc1045d471f902655ea561c15e",
            children: (0, m.jsxs)(r.A, {
              to: t.to,
              onClick: () => {
                n({
                  event: "card_click",
                  card_id: t.id,
                  card_name: t.title.toLowerCase(),
                  link_url: t.to,
                  position: s,
                  element_placement: a
                })
              },
              children: [(0, m.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${o?.mobile}) no-repeat center/cover`
                }
              }), (0, m.jsx)("h4", {
                children: t.title
              })]
            })
          })
        },
        u = e => {
          let {
            guides: t = {},
            tinaModulesInfo: a,
            title: n
          } = e;
          const r = i().map(t, "guide_id"),
            d = (0, o.X)({
              ids: r
            }),
            l = a?.[0]?.title ?? n,
            [u, f] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = d?.map(((e, t) => (0, m.jsx)(g, {
              guide: e,
              parentTitle: l,
              index: t
            }, e.id)));
            f(e)
          }), [d]), (0, m.jsx)(c.A, {
            size: "lg",
            slideChildren: u,
            title: l
          })
        }
    },
    2723: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var s = a(74401),
        n = a(89779),
        i = a(98436);
      var r = a(46632);
      const c = () => {
          const {
            guideId: e
          } = (0, n.useParams)(), t = (0, i.qj)(e, "<span></span>");
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
        d = e => {
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
    46585: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => v
      });
      var s = a(71403),
        n = a(89779),
        i = a(54252),
        r = a.n(i),
        c = a(48331),
        o = a(60285),
        d = a(40207),
        l = a(98436);
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
      var g = a(46632);
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
            query: i
          } = e;
          const {
            track: r
          } = (0, d.useGtmTrack)(), [c, u] = (0, s.useState)(n === i), {
            state: f
          } = (0, l.E_)(), {
            activeSection: p
          } = f;
          return (0, s.useEffect)((() => u(i !== p ? p === n : i === n)), [p]), (0, g.jsx)(o.A, {
            to: t,
            className: c ? m.activeSection : "",
            onClick: () => {
              r({
                event: "nav_click",
                element_placement: "guide nav"
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
                to: i
              } = e;
              return (0, g.jsx)(p, {
                id_hash: s,
                query: a,
                title: n,
                to: i
              }, t)
            }))
          })
        },
        h = e => {
          let {
            currentId: t,
            group: a
          } = e;
          const [n, i] = (0, s.useState)(null), [d, p] = (0, s.useState)(null), {
            state: h
          } = (0, l.E_)(), {
            activeSection: v
          } = h;
          return (0, s.useEffect)((() => {
            const e = r().findIndex(a?.children, (e => {
              let {
                id_hash: a
              } = e;
              return a === t
            }));
            p(e), i(-1 !== e)
          }), [t, v, a]), (0, g.jsxs)("div", {
            className: m.guideList,
            children: [(0, g.jsx)("button", {
              type: "button",
              onClick: () => i(!n),
              children: a.title
            }), (0, g.jsx)(c.motion.nav, {
              animate: n ? "open" : "closed",
              variants: f,
              transition: u,
              children: a?.children?.map(((e, a) => {
                let {
                  children: s,
                  id_hash: n,
                  title: i,
                  to: r
                } = e;
                return (0, g.jsxs)("div", {
                  className: m.guide,
                  children: [(0, g.jsx)(o.A, {
                    className: [m.guideLink, t === n ? m.guideLinkCurrent : ""].join(" "),
                    to: r,
                    children: i
                  }), a === d && s?.length ? (0, g.jsx)(b, {
                    sections: s
                  }) : ""]
                }, i)
              }))
            })]
          })
        },
        v = e => {
          let {
            currentId: t
          } = e;
          const a = (0, l.hY)(),
            {
              state: {
                headerHeight: s,
                headerHidden: n
              }
            } = (0, l.E_)();
          return (0, g.jsx)("div", {
            className: [m.guideNav, n ? m.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${s}px`
            },
            children: a?.map((e => (0, g.jsx)(h, {
              currentId: t,
              group: e
            }, e.id_hash)))
          })
        }
    },
    1333: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(71403),
        n = a(49948),
        i = a(98436);
      var r = a(46632);
      const c = e => {
        let {
          style: t,
          children: a,
          __anchor: c = null
        } = e;
        const {
          announcePresence: o
        } = (0, i.Yh)(), {
          ref: d,
          inView: l
        } = (0, n.useInView)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, s.useEffect)((() => {
          o(c)
        }), [c]), (0, s.useEffect)((() => {
          l && o(c)
        }), [l]), (0, r.jsx)("span", {
          style: t,
          className: "rockstargames-sites-gta-gen9e46af541dffc51dc338509484cffa659",
          name: c,
          ref: d,
          children: a
        })
      }
    },
    33727: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => g
      });
      var s = a(71403),
        n = a(355),
        i = a(74401),
        r = a(40207),
        c = a(49948),
        o = a(72877),
        d = a(71864),
        l = a(5765);
      var m = a(46632);
      const g = n.withFadeIn((e => {
        let {
          brands: t = [],
          content: a,
          ctas: n = [],
          disclaimer: g,
          image: u,
          large: f = !1,
          title: p,
          image_on_right: b = !1,
          style: h = {},
          className: v = "",
          ...k
        } = e;
        const {
          track: x
        } = (0, r.useGtmTrack)(), {
          ref: y,
          inView: _
        } = (0, c.useInView)({
          threshold: .6
        }), [N, j] = (0, s.useState)(!1), S = (0, i.useGetCdnSource)(u?.full_src ?? null) ?? null;
        return (0, s.useEffect)((() => {
          _ && !N && (x({
            event: "page_section_impression",
            element_placement: k?._memoq?.title?.toLowerCase()
          }), j(!0))
        }), [_]), (0, m.jsxs)("div", {
          className: (0, i.classList)("rockstargames-sites-gta-gen9f6868d96e7b25bdb74435d0559970e75", f ? "rockstargames-sites-gta-gen9c9ca8e3e22865d04f816a0923489b124" : "", b ? "rockstargames-sites-gta-gen9f044d09bcae5bc48eef278aa1c8600a2" : "", S ? "" : "rockstargames-sites-gta-gen9a6ec7a3705521eae985d53eb2769018c", v),
          style: h,
          ref: y,
          children: [S ? (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9aa09f1e58f180b91c4f1795f60448086",
            style: {
              background: `url(${S}) no-repeat center/cover`
            }
          }) : "", (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ed0a185c4fc5fc35cfe58c069276b698",
            children: [(0, m.jsx)(d.A, {
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
            }), (0, m.jsx)(o.A, {
              ctas: n
            }), (0, m.jsx)(l.A, {
              disclaimer: g
            })]
          })]
        })
      }))
    },
    50562: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(74401),
        n = a(33727);
      const i = {
        pillBtn: "rockstargames-sites-gta-gen9f117df17a34d1837a4e2bb599a71f88d",
        selected: "rockstargames-sites-gta-gen9e8b6740b3aded532dfefbf06edf500ca",
        imageTextGroupGroup: "rockstargames-sites-gta-gen9d51265e78cba56a6119978e898e2a967",
        bg: "rockstargames-sites-gta-gen9d9d65419cc79c4fa43a6bc2571c552c7",
        bgMobile: "rockstargames-sites-gta-gen9b52f9f638a05d06d1c573dded0810212",
        bgDesktop: "rockstargames-sites-gta-gen9d6c821fe070e5eb41f1fba6178bd3571"
      };
      var r = a(46632);
      const c = e => {
        let {
          bg: t,
          image_text_groups: a = [],
          style: c = {},
          className: o = ""
        } = e;
        const d = (0, s.useGetCdnSource)(t?.image?.mobile?.full_src ?? null),
          l = (0, s.useGetCdnSource)(t?.image?.desktop?.full_src ?? null) ?? d;
        return a.length ? (0, r.jsxs)("div", {
          className: (0, s.classList)(i.imageTextGroupGroup, o),
          style: {
            ...c
          },
          children: [d ? (0, r.jsx)("div", {
            className: [i.bgMobile, i.bg].join(" "),
            style: {
              background: `url(${d}) no-repeat center/cover`
            }
          }) : "", l ? (0, r.jsx)("div", {
            className: [i.bgDesktop, i.bg].join(" "),
            style: {
              background: `url(${l}) no-repeat center/cover`
            }
          }) : "", a.map(((e, t) => (0, r.jsx)(n.A, {
            ...e
          }, t)))]
        }) : null
      }
    },
    37281: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(60285),
        n = a(74401);
      const i = {
        pillBtn: "rockstargames-sites-gta-gen9a218c6efb11f05af742c35731abd7f0e",
        selected: "rockstargames-sites-gta-gen9c9f11c19d7943dec1c872d1d921cd364",
        linkoutSection: "rockstargames-sites-gta-gen9f62388243285f747f07ef5d1be84ceb8",
        cta: "rockstargames-sites-gta-gen9eec30b6a686a74885da49d3cf33c1795"
      };
      var r = a(46632);
      const c = e => {
        let {
          text: t,
          cta: c,
          to: o,
          className: d = "",
          style: l = {}
        } = e;
        return (0, r.jsxs)(s.A, {
          className: (0, n.classList)(i.linkoutSection, d),
          to: o,
          style: l,
          children: [t && (0, r.jsx)("div", {
            className: i.text,
            children: t
          }), c && (0, r.jsxs)("div", {
            className: i.cta,
            children: [c, " ", (0, r.jsx)("img", {
              src: a(56675)
            })]
          })]
        })
      }
    },
    21027: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => r
      });
      var s = a(71403);
      var n = a(42756),
        i = a(46632);
      const r = e => {
        let {
          children: t,
          style: a,
          theme: r
        } = e;
        const [c, o] = (0, s.useState)(r);
        return (0, s.useEffect)((() => {
          r && o(r)
        }), [r]), (0, i.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a691fa72d9c1962b69090f47fbb6eadf",
          style: (0, n.safeStyles)(a),
          "data-theme": c,
          children: t
        })
      }
    },
    24347: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => r
      });
      var s = a(31879),
        n = a.n(s);
      var i = a(46632);
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
            wrapper: !1,
            titleCrop: "2rem"
          })
        })
      }
    },
    84690: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        BrandMessage: () => i,
        BuyNow: () => r.A,
        ClaimCountdown: () => o,
        Disclaimer: () => l.A,
        DiscoverCallout: () => d.A,
        ElevatorPitch: () => I,
        FAQ: () => m.Ay,
        Guide: () => g.A,
        GuideGroup: () => u.A,
        GuideIntro: () => f.A,
        GuideNavDesktop: () => p.A,
        GuideSection: () => b.A,
        Hero: () => S,
        HeroVideo: () => L.default,
        ImageTextGroup: () => te.A,
        ImageTextGroupGroup: () => ae.A,
        LinkoutSection: () => se.A,
        Logo: () => ie,
        SectionTitle: () => re,
        StickyColumn: () => F,
        Summary: () => U,
        SummaryCard: () => Q,
        Tile: () => X,
        TinaWrapper: () => ce.A,
        TitleImage: () => O,
        ValueProp: () => ee,
        VideoPlayerWrapper: () => oe.A
      });
      var s = a(71864);
      var n = a(46632);
      const i = e => {
        let {
          brand: t,
          headline_left: a,
          headline_right: i,
          info: r
        } = e;
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9ebe7007f3b51b86e212449fb1dc61aec",
          children: [(0, n.jsx)(s.A, {
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
      var r = a(99074),
        c = a(71403);
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
      var d = a(37109),
        l = a(5765),
        m = a(47668),
        g = a(52842),
        u = a(57797),
        f = a(2723),
        p = a(46585),
        b = a(1333),
        h = a(68340),
        v = a(39695),
        k = a(48331),
        x = a(74401),
        y = a(72877);
      const _ = {
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
        N = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const i = (0, x.useGetCdnSource)(a ?? null),
            r = (0, x.useGetCdnSource)(s ?? i);
          return (0, n.jsx)("div", {
            className: _.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, n.jsx)("h5", {
              children: t
            })
          })
        },
        j = e => {
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
              return (0, n.jsx)(N, {
                title: t,
                mobileImg: s?.full_src,
                desktopImg: i?.full_src
              }, t)
            })))
          }), [a]), s ? (0, n.jsx)("div", {
            className: _.shardsCarousel,
            children: (0, n.jsx)(h.A, {
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
            description: d,
            title: l,
            legalText: m,
            shardsSection: g = {},
            className: u
          } = e;
          const f = (0, x.useGetCdnSource)(a?.mobile?.full_src ?? null),
            p = (0, x.useGetCdnSource)(a?.desktop?.full_src ?? f),
            b = (0, x.useGetCdnSource)(i?.mobile?.full_src ?? null),
            h = (0, x.useGetCdnSource)(i?.desktop?.full_src ?? b),
            N = {
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
          return (0, n.jsxs)(k.motion.div, {
            className: (0, x.classList)(_.hero, u),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: N,
            children: [(0, n.jsxs)("div", {
              className: _.images,
              children: [p && f ? (0, n.jsx)("div", {
                className: _.background,
                style: a?.style ?? {}
              }) : "", b && h ? (0, n.jsx)("div", {
                className: _.layered
              }) : "", (0, n.jsx)("div", {
                className: _.gradient
              })]
            }), (0, n.jsxs)(k.motion.div, {
              className: _.content,
              initial: "hidden",
              animate: "visible",
              variants: N,
              children: [(0, n.jsx)(k.motion.div, {
                variants: S,
                children: (0, n.jsx)(s.A, {
                  brands: t
                })
              }), o.length ? (0, n.jsx)(k.motion.div, {
                variants: S,
                children: (0, n.jsx)(v.A, {
                  buttonText: c,
                  platformsAndLinks: o,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(k.motion.div, {
                      className: _.descriptions,
                      variants: S,
                      children: [(0, n.jsx)("h1", {
                        dangerouslySetInnerHTML: {
                          __html: l
                        }
                      }), (0, n.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: d
                        }
                      })]
                    }), r.length > 0 && (0, n.jsx)(k.motion.div, {
                      variants: S,
                      children: (0, n.jsx)(y.A, {
                        buttons: r,
                        className: _.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(k.motion.div, {
                  className: _.descriptions,
                  variants: S,
                  children: [(0, n.jsx)("h1", {
                    dangerouslySetInnerHTML: {
                      __html: l
                    }
                  }), (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: d
                    }
                  })]
                }), r.length > 0 && (0, n.jsx)(k.motion.div, {
                  variants: S,
                  children: (0, n.jsx)(y.A, {
                    buttons: r,
                    className: _.buttonGroup
                  })
                })]
              }), m && (0, n.jsx)(k.motion.div, {
                className: _.legalText,
                variants: S,
                children: (0, n.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: m
                  }
                })
              })]
            }), g?.shards && (0, n.jsx)(j, {
              ...g
            })]
          })
        };
      var w = a(31090),
        C = a(62811),
        T = a(42756),
        A = a(96717),
        M = a(66940);
      const E = (0, A.defineMessages)({
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
        P = {
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
        I = (0, T.withLocale)((e => {
          let {
            title: t,
            description: a,
            disclaimer: s,
            cta: i
          } = e;
          const {
            formatMessage: r
          } = (0, A.useIntl)();
          return (0, n.jsxs)("div", {
            className: P.elevatorPitch,
            children: [(0, n.jsxs)("div", {
              className: P.pitch,
              children: [(0, n.jsx)("h2", {
                className: P.title,
                children: t
              }), (0, n.jsx)("p", {
                className: P.description,
                children: a
              })]
            }), (0, n.jsxs)("div", {
              className: P.ctaLinksContainer,
              children: [(0, n.jsxs)("div", {
                className: P.ctaLinks,
                children: [(0, n.jsx)("div", {
                  className: P.buttonGroup,
                  children: i && (0, n.jsx)(x.TinaParser, {
                    components: {
                      Cta: w.A,
                      ExpandingPlatformButton: v.A,
                      Gen9Button: C.A
                    },
                    tina: {
                      payload: {
                        content: i
                      }
                    }
                  })
                }), (0, n.jsxs)("div", {
                  className: P.platformGroup,
                  children: [(0, n.jsx)("div", {
                    className: P.text,
                    children: (0, n.jsx)(A.FormattedMessage, {
                      ...E.elevator_pitch_available_on
                    })
                  }), (0, n.jsxs)("div", {
                    className: P.platforms,
                    children: [(0, n.jsx)("img", {
                      className: P.platformIcon,
                      src: (0, M.A)("ps5") || "",
                      alt: r(E.elevator_pitch_available_on_ps5)
                    }), (0, n.jsx)("img", {
                      className: P.platformIcon,
                      src: (0, M.A)("xboxseriesxs") || "",
                      alt: r(E.elevator_pitch_available_on_xbox)
                    })]
                  })]
                })]
              }), s && (0, n.jsx)("div", {
                className: P.disclaimer,
                children: (0, n.jsx)("p", {
                  children: s
                })
              })]
            })]
          })
        }));
      var L = a(94028),
        $ = a(62550),
        B = a(94430),
        D = a.n(B);
      const O = e => {
        let {
          imageSrc: t,
          imgTitle: a,
          description: s,
          cta: i
        } = e;
        const r = (0, x.useGetCdnSource)(t) ?? null,
          {
            isTablet: o
          } = (0, T.useWindowResize)(),
          [d, l] = (0, c.useState)(0);
        return (0, c.useEffect)((() => {
          l(o ? .5 * window.innerHeight : .25 * window.innerHeight)
        }), [o, window.innerHeight]), (0, n.jsxs)("figure", {
          className: "rockstargames-sites-gta-gen9ff6de3d17596f7d56f83302c8a3dd352",
          children: [(0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e887f05b18428646120596f3178947b0",
            style: {
              "--background-image": `url(${r})`
            },
            children: (0, n.jsx)("span", {
              className: D()("rockstargames-sites-gta-gen9b2b47e2d6ee2512546e0f91fb0fba7f0", "rockstargames-sites-gta-gen9ab16846895ba51a759f8c2df61943b0c"),
              children: (0, n.jsx)($.A, {
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
            children: [s && (0, n.jsx)("p", {
              className: "rockstargames-sites-gta-gen9d6d3ea75c1096656de004b0606df465d",
              children: s
            }), i && (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f7479f40675e07f1aa36e35a177f5aa4",
              children: (0, n.jsx)(x.TinaParser, {
                components: {
                  Cta: w.A,
                  ExpandingPlatformButton: v.A
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
      var H = a(80256),
        G = a(40207),
        V = a(49948);
      const z = {
          pillBtn: "rockstargames-sites-gta-gen9b96747e091c0ce36b60886a907fbf847",
          selected: "rockstargames-sites-gta-gen9c1682f9aeffb507f4b2efdebc95b1cab",
          gridLayout: "rockstargames-sites-gta-gen9a1d8c35931e5c1a50473d927fbfe49f2",
          leftColumn: "rockstargames-sites-gta-gen9c7191c86cb1d962197259bf74f36a21b",
          rightColumn: "rockstargames-sites-gta-gen9fe170e2263d9d14a17c07110bd4bee3c",
          stickyBlock: "rockstargames-sites-gta-gen9a35c3b659af9f58cf4134bc30572c35e",
          shadow: "rockstargames-sites-gta-gen9ff71d0b79549193178ee720c73bd4384"
        },
        R = e => {
          const [t, a] = (0, c.useState)(void 0);
          return (0, c.useEffect)((() => {
            a(!!e)
          }), [e]), t
        },
        F = e => {
          let {
            title: t,
            leftColumn: a,
            rightColumn: s,
            disableStickyOnDesktop: i,
            disableStickyOnMobile: r
          } = e;
          const {
            track: o
          } = (0, G.useGtmTrack)(), {
            isTablet: d
          } = (0, T.useWindowResize)(), {
            ref: l
          } = (0, V.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && o({
                event: "page_section_impression",
                element_placement: t?.toLowerCase()
              })
            }
          }), m = (0, c.useRef)(null), g = (0, c.useRef)(null), u = R(i), f = R(r), p = (0, x.useTinaComponents)(), b = (0, c.useMemo)((() => ({
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
          })(d, m, g), (0, n.jsx)(H.A, {
            thresholds: [.5, 1],
            onThresholdReached: e => {
              o({
                event: "page_section_scroll",
                element_placement: t?.toLowerCase(),
                scroll_depth: 100 * e + "%"
              })
            },
            children: (0, n.jsxs)("div", {
              className: D()(z.gridLayout),
              children: [(0, n.jsx)("div", {
                ref: m,
                className: z.leftColumn,
                style: {
                  "--desktop-position": u ? "relative" : "sticky",
                  "--mobile-position": f ? "relative" : "sticky"
                },
                children: (0, n.jsx)("div", {
                  ref: l,
                  className: z.stickyBlock,
                  children: a && (0, n.jsx)(x.TinaParser, {
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
                className: D()(z.rightColumn, d ? z.shadow : null, z.borderGrey),
                children: s && (0, n.jsx)(x.TinaParser, {
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
        };
      var W = a(63672);
      const q = {
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
        U = e => {
          let {
            benefits: t
          } = e;
          return t ? (0, n.jsx)("section", {
            className: D()(q.scrollableBlock, q.benefitsWrapper),
            children: (0, n.jsx)("div", {
              className: q.benefitsGroup,
              children: t.map((e => (0, n.jsxs)("div", {
                className: q.benefitsContent,
                children: [(0, n.jsx)("h3", {
                  className: q.heading,
                  children: e.title
                }), (0, n.jsx)(W.A, {
                  columns: e.columns ?? null,
                  style: {
                    "--unordered-list-padding": "var(--foundry-global-spacing-gap-300)",
                    "--unordered-list-margin-bottom": "var(--foundry-global-spacing-gap-300)"
                  },
                  noImg: !0,
                  list: e.list
                })]
              }, e.title)))
            })
          }) : null
        },
        Q = (0, T.withLocale)((e => {
          let {
            title: t,
            description: a,
            imgSrc: s,
            cta: i
          } = e;
          const r = (0, x.useGetCdnSource)(s?.mobile),
            c = (0, x.useGetCdnSource)(s?.desktop) || r;
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
              }), i && (0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9fc4c0cfe6b642c7f34feb064c7ce1279",
                children: (0, n.jsx)(x.TinaParser, {
                  components: {
                    Cta: w.A,
                    ExpandingPlatformButton: v.A,
                    Gen9Button: C.A
                  },
                  tina: {
                    payload: {
                      content: i
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
        Y = {
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
        K = e => {
          let {
            title: t,
            description: a,
            cta: s,
            imgSrc: i,
            imgPosition: r = "top",
            cardSize: c = "medium",
            enableFullBleed: o,
            background: d = "var(--foundry-alias-color-background-bold-layer-2)",
            backgroundSize: l = "cover",
            backgroundImage: m,
            backgroundPosition: g = "center",
            backgroundRepeat: u = "no-repeat",
            customStyles: f
          } = e;
          const p = (0, x.useGetCdnSource)(i?.mobile ?? null),
            b = (0, x.useGetCdnSource)(i?.desktop ?? p),
            h = (0, x.useGetCdnSource)(m ?? null),
            k = {
              background: d,
              backgroundSize: l,
              backgroundImage: m ? `url(${h})` : void 0,
              backgroundPosition: g,
              backgroundRepeat: u,
              ...f
            };
          return (0, n.jsxs)("article", {
            className: D()(Y.tile, [Y[`tile--${c}`]], [Y[o ? "fullBleed" : "contain"]], [Y[`tile--${r}`]]),
            style: {
              ...k
            },
            children: [i && (0, n.jsx)("div", {
              role: "img",
              className: Y.tile__image,
              "aria-label": i?.imgAlt || i?._memoq?.imgAlt,
              style: {
                "--background-image-desktop": `url(${b})`,
                "--background-image-mobile": `url(${p})`
              }
            }), (0, n.jsxs)("div", {
              className: D()(Y.tile__content),
              children: [t && (0, n.jsx)("h2", {
                className: Y.tile__title,
                children: t
              }), a && (0, n.jsx)("p", {
                className: Y.tile__description,
                children: a
              }), s && (0, n.jsx)("div", {
                className: Y.ctaBlock,
                children: (0, n.jsx)(x.TinaParser, {
                  components: {
                    Cta: w.A,
                    ExpandingPlatformButton: v.A
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
        X = (0, c.memo)(K),
        Z = e => {
          let {
            src: t,
            alt: a
          } = e;
          const s = (0, x.useGetCdnSource)(t ?? null);
          return (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ba3f3d31b13fbc2a39aca4b2035670e9",
            children: (0, n.jsx)("img", {
              src: s,
              alt: a
            })
          })
        },
        J = (0, c.memo)(Z),
        ee = e => {
          let {
            name: t,
            valueProps: a,
            enableAnimation: s
          } = e;
          const {
            track: i
          } = (0, G.useGtmTrack)(), {
            ref: r
          } = (0, V.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && i({
                event: "page_section_impression",
                element_placement: t.toLowerCase()
              })
            }
          }), o = (0, c.useCallback)((e => () => {
            const a = e + 1;
            i({
              event: "card_click",
              card_id: a.toString(),
              card_name: `Card ${a}`,
              position: a,
              element_placement: t.toLowerCase()
            })
          }), [a]);
          return (0, n.jsx)("div", {
            ref: r,
            "data-animate": s,
            className: "rockstargames-sites-gta-gen9ac883cf395291a034c0c6065f9636504",
            children: a.map(((e, t) => (0, n.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9f47b785957378c295f893b75cf01623b",
              onClick: o(t),
              children: [e?.iconImgSrc && (0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d75773fe36fb02bf0770bd0ce4ae8692",
                children: (0, n.jsx)(J, {
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
      var te = a(33727),
        ae = a(50562),
        se = a(37281);
      const ne = {},
        ie = e => {
          let {
            brand: t
          } = e;
          return (0, n.jsx)("div", {
            className: ne[t]
          })
        },
        re = () => (0, n.jsx)("h2", {
          children: "Section"
        });
      var ce = a(21027),
        oe = a(24347)
    },
    98436: (e, t, a) => {
      "use strict";
      a.d(t, {
        E_: () => i,
        Yh: () => r.Y,
        qj: () => g,
        hY: () => o,
        hI: () => l
      });
      var s = a(58407);
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
      var r = a(65046),
        c = a(41194);
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
      var d = a(71403);
      a(54252), a(24919);
      const l = () => {
        const [e, t] = (0, d.useState)([{
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
      a(40207);
      var m = a(30938);
      const g = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
        const [a, n] = (0, d.useState)(null), {
          data: i
        } = (0, s.useQuery)(m.TinaModulesTree, {
          variables: {
            id: e
          },
          skip: !e
        });
        return (0, d.useEffect)((() => {
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
    65046: (e, t, a) => {
      "use strict";
      a.d(t, {
        B: () => l,
        Y: () => d
      });
      var s = a(71403),
        n = a(89779),
        i = a(70396),
        r = a(98436),
        c = a(46632);
      const o = (0, s.createContext)(),
        d = () => (0, s.useContext)(o),
        l = e => {
          let {
            children: t
          } = e;
          const [a, d] = (0, s.useState)(null), [l] = (0, n.useSearchParams)(), {
            setActiveSection: m
          } = (0, r.E_)(), {
            pauseUserShouldSeeMore: g
          } = (0, i.useScroll)(), u = (0, s.useCallback)((e => {
            if (e !== l.get("section")) return void m(e);
            const t = document.getElementsByName(l.get("section"))?.[0];
            t && (g(), m(l.get("section")), t.scrollIntoView({
              behavior: "auto"
            }))
          }), [l.get("section"), a]);
          (0, s.useEffect)((() => {
            l.get("section") && u(l.get("section"))
          }), [l.get("section")]);
          const f = (0, s.useMemo)((() => ({
            announcePresence: u,
            section: a,
            setSection: d
          })), [u, a, d]);
          return (0, c.jsx)(o.Provider, {
            value: f,
            children: t
          })
        }
    },
    24919: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        componentsForTinaParser: () => xt,
        componentsForTinaParserGuide: () => yt
      });
      var s = a(55430),
        n = a(21450),
        i = a(91318),
        r = a(31090),
        c = a(39695),
        o = a(28606),
        d = a(95137),
        l = a(87839),
        m = a(22941),
        g = a(70373),
        u = a(57300),
        f = a(28553),
        p = a(63672),
        b = a(8999),
        h = a(53623),
        v = a(84079),
        k = a(10931),
        x = a(25180),
        y = a(71403),
        _ = a(74401),
        N = a(355),
        j = a(74459),
        S = a.n(j),
        w = a(54252),
        C = a.n(w),
        T = a(61651),
        A = a(42756),
        M = a(71080);
      var E = a(46632);
      const P = e => {
          let {
            hasTag: t = !1,
            tag: a = null,
            tagStyle: s = null,
            badges: n = []
          } = e;
          return t && a ? (0, E.jsx)("div", {
            className: "rockstargames-sites-gta-gen9bc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": s,
            children: a
          }) : t && n && n?.length > 0 ? (0, E.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d4a1a1e4fc4c16138d3c879bc1864227",
            children: n.map((e => (0, E.jsx)(M.A, {
              ...e
            }, e?.text)))
          }) : null
        },
        I = {
          textOverlay: "rockstargames-sites-gta-gen9a9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-sites-gta-gen9d35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: L,
          Animations: $
        } = N,
        {
          variants: B,
          transitions: D
        } = $,
        O = e => {
          let {
            title: t,
            hasTag: a,
            tag: s,
            hasDescription: n,
            description: i,
            fadesOut: r = !1,
            badges: c
          } = e;
          return (0, E.jsx)(L, {
            initial: B.fade.out.initial,
            animate: {
              opacity: r ? 0 : 1
            },
            transition: D.fade,
            className: I.textOverlay,
            children: (0, E.jsxs)("div", {
              className: I.content,
              children: [(0, E.jsx)(P, {
                hasTag: a,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, E.jsx)("h3", {
                children: t
              }), n && i && (0, E.jsx)("div", {
                className: I.description,
                children: i
              })]
            })
          })
        },
        H = e => {
          let {
            title: t,
            showTitle: a = !0,
            showBackground: s = !0,
            tag: n,
            tagStyle: i,
            discountPrice: r,
            originalPrice: c,
            setPricingContainerHeight: o = null
          } = e;
          const d = (0, y.createRef)();
          return (0, y.useEffect)((() => {
            const e = () => {
              d.current && null !== o && o(d.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [d]), (0, E.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f721d7192d3e29e64567a729fd8d5985",
            ref: d,
            "data-show-background": s,
            children: [a && (0, E.jsx)("span", {
              className: "rockstargames-sites-gta-gen9f390fe2c9338785ce412483a1bac624c",
              children: t
            }), (0, E.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9fc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, E.jsx)("span", {
                className: "rockstargames-sites-gta-gen9b7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": i || "free",
                children: n
              }), (0, E.jsx)("span", {
                className: "rockstargames-sites-gta-gen9d8c7408e6335e53326bc70a1a065f81b",
                children: r
              }), (0, E.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a3632910b63514f6b49539fe45bcccb6",
                children: c
              })]
            })]
          })
        };
      var G = a(90837),
        V = a(82275),
        z = a(44338),
        R = a(67245),
        F = a(47483),
        W = a(19169),
        q = a(96165),
        U = a(73870);
      const Q = {
          ps5: z,
          ps4: V,
          ps: G,
          xboxone: F,
          xbox: W,
          xboxseriesxs: R,
          nintendoswitch: U,
          pc: q,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        Y = e => {
          let {
            title: t,
            showTitle: a = !0,
            showBackground: s = !0,
            platformOptions: n,
            setPricingContainerHeight: i = (() => {}),
            expandedView: r
          } = e;
          const c = (0, y.createRef)();
          return (0, y.useEffect)((() => {
            const e = () => {
              c.current && null !== i && i(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, E.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e754e3afc303a114f9e28e09c5519a30",
            ref: c,
            "data-show-background": s,
            "data-show-platforms": !r,
            children: [a && (0, E.jsx)("span", {
              className: "rockstargames-sites-gta-gen9fd98e3d7af2a583d4338d802666901a5",
              children: t
            }), n?.platformsAndLinks && (0, E.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9cbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, E.jsx)(P, {
                hasTag: n?._memoq?.platformTag,
                tag: n?._memoq?.platformTag,
                tagStyle: n?._memoq?.platformTagStyle
              }), (0, E.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b7de0e1798d1a020191fbe44b67f34d2",
                children: n.platformsAndLinks.map((e => {
                  let {
                    platform: t,
                    buttonText: a
                  } = e;
                  return (0, E.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9aa5f852c8932dcf689a97496d437f13b",
                    alt: a,
                    src: Q[t]
                  }, t)
                }))
              })]
            })]
          })
        },
        K = e => {
          let {
            textOverlayProps: t,
            title: a,
            size: s,
            expandedView: n = !1,
            children: i,
            pricingOptions: r,
            setPricingContainerHeight: c,
            isCoverCard: o = !1,
            platformOptions: d
          } = e;
          const [l] = (e => {
            let {
              hasTextOverlay: t,
              tag: a,
              collapsedHasTag: s,
              description: n,
              collapsedHasDescription: i,
              size: r,
              title: c,
              expandedView: o,
              badges: d
            } = e;
            const [l, m] = (0, y.useState)(null), g = (0, y.useMemo)((() => {
              if (!t) return null;
              const e = "sm" !== r && i;
              return (0, E.jsx)(O, {
                title: c,
                hasTag: s,
                tag: a,
                hasDescription: e,
                description: n,
                fadesOut: o,
                badges: d
              })
            }), [t, a, s, n, i, r, c, o, d]);
            return (0, y.useEffect)((() => {
              m(g)
            }), [g]), [l, m]
          })({
            ...t,
            size: s,
            title: a,
            expandedView: n
          }), m = void 0 !== r?.hasPricingOptions || null !== d;
          return (0, E.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9c525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": o,
            "data-expanded-view": n,
            children: [y.Children.map(i, (e => (0, y.cloneElement)(e, {
              title: a,
              size: s,
              expandedView: n
            }))), l, m && (0, E.jsxs)(E.Fragment, {
              children: [!0 === d?.hasPlatformOptions && (0, E.jsx)(Y, {
                title: a,
                platformOptions: d,
                pricingOptions: r,
                setPricingContainerHeight: c,
                expandedView: n
              }), !0 === r?.hasPricingOptions && (0, E.jsx)(H, {
                title: a,
                tag: r?._memoq?.tag,
                tagStyle: r?._memoq?.tagStyle || "free",
                discountPrice: r?._memoq?.discountPrice,
                originalPrice: r?._memoq?.originalPrice,
                setPricingContainerHeight: c
              })]
            })]
          })
        },
        {
          LiteMotion: X,
          Animations: Z
        } = N,
        {
          transitions: J
        } = Z,
        ee = e => {
          let {
            components: t,
            payload: a,
            prod: s,
            size: n,
            title: i,
            initial: r = "initial",
            animate: c = "animate",
            variants: o,
            type: d = null,
            context: l = null,
            textOverlayProps: m,
            className: g,
            children: u,
            theme: f = "none",
            id: p,
            pricingOptions: b,
            pricingContainerHeight: h,
            isCoverCard: v,
            platformOptions: k,
            isProductCard: x = !1
          } = e;
          const N = (0, y.useRef)(),
            j = (0, y.useRef)(),
            {
              tag: S,
              expandedHasTag: w,
              badges: M
            } = m;
          C().set(a, "meta.prod", s);
          const I = u?.props?.images.length > 0;
          let L = (0, E.jsx)("h1", {
            children: i
          });
          return v && (L = null), (0, y.useEffect)((() => {
            const e = () => {
              N.current && N.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (N.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, E.jsx)(A.DataLayerProvider, {
            card_id: p,
            card_name: i?.toLowerCase(),
            children: (0, E.jsx)(T.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === d ? N : j,
              children: (0, E.jsxs)(X, {
                ref: N,
                initial: r,
                animate: c,
                variants: o.expanded,
                transition: J.cardOpen,
                className: (0, _.classList)("rockstargames-sites-gta-gen9dcb84dcfd34616fb0089133acf0c4669", g),
                "data-type": d,
                "data-size": n,
                "data-product": x,
                "data-covercard": v || !1,
                "data-context": l,
                style: {
                  "--product-card-pricing-info-height": `${h||0}px`
                },
                children: [I && (0, E.jsx)(K, {
                  size: n,
                  title: i,
                  textOverlayProps: m,
                  expandedView: !0,
                  pricingOptions: b,
                  platformOptions: k,
                  isCoverCard: v,
                  children: u
                }), (0, E.jsxs)(X, {
                  ref: j,
                  className: "rockstargames-sites-gta-gen9eaf357a8d0bae1199142949cbf24e7b9",
                  variants: o.expandedContents,
                  transition: J.afterCardOpen,
                  "data-theme": f,
                  children: [(0, E.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9fc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, E.jsx)(P, {
                      hasTag: w,
                      tag: S,
                      badges: M
                    }), L, x && (0, E.jsxs)(E.Fragment, {
                      children: [!0 === k?.hasPlatformOptions && (0, E.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9b630c7c1f59f91f2ac304af525b6d081",
                        children: (0, E.jsx)(P, {
                          hasTag: k?.hasPlatformOptions,
                          tag: k?._memoq?.platformTag,
                          tagStyle: k?._memoq?.platformTagStyle
                        })
                      }), !0 === b?.hasPricingOptions && (0, E.jsx)(H, {
                        title: i,
                        showTitle: !1,
                        showBackground: !1,
                        tag: b?._memoq?.tag,
                        tagStyle: b?.tagStyle || "free",
                        discountPrice: b?._memoq?.discountPrice,
                        originalPrice: b?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, E.jsx)(_.TinaParser, {
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
      var te = a(96717),
        ae = a(89779),
        se = a(93665),
        ne = a(40207);
      const ie = (0, te.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            defaultMessage: "{title} on {platformList}"
          }
        }),
        re = e => {
          let {
            id: t,
            position: a,
            title: s,
            size: n = "md",
            sectionTitle: i = "",
            expandedType: r = null,
            modalProps: c = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: o,
            children: d,
            isProductCard: l,
            cardIds: m = null,
            theme: g = "none",
            isCoverCard: u,
            platformOptions: f
          } = e;
          const {
            formatMessage: p,
            formatList: b
          } = (0, te.useIntl)(), [h, v] = (0, ae.useSearchParams)(), k = (0, y.useRef)(null), [, x] = (0, se.h)(), {
            track: _
          } = (0, ne.useGtmTrack)(), [N, j] = (0, y.useState)(!1), S = () => {
            j(!1), x(null), v({}), _({
              event: "trackPageview"
            })
          }, w = () => {
            if (!c?.content || !k.current || !r || "linkout" === r) return;
            const e = k.current,
              i = window.getComputedStyle(e),
              o = parseInt(i.getPropertyValue("width"), 10),
              d = parseInt(i.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: u,
                className: f,
                contentClassName: p
              } = c,
              b = "fob" === n ? "fob" : "default";
            x({
              content: u,
              onClose: S,
              rect: l,
              width: o,
              height: d,
              className: f,
              contentClassName: p,
              fadeIn: !1,
              cardIds: m,
              theme: g,
              activeId: t,
              gtm: {
                card_id: t,
                card_name: s?.toLowerCase(),
                position: a
              },
              aspectRatio: b,
              cardDimensions: {
                size: n,
                type: r
              }
            }), _({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: t,
              card_name: s?.toLowerCase(),
              position: a
            })
          };
          (0, y.useEffect)((() => {
            N && w()
          }), [N]), (0, y.useEffect)((() => {
            j(h.get("info") === t)
          }), [h.get("info"), t]);
          const C = (0, y.useMemo)((() => {
            if (f?.platformsAndLinks?.length > 0) {
              const e = f?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: t
                  } = e;
                  return t
                })),
                t = b(e, {
                  type: "conjunction"
                });
              return p(ie.card_label_platforms, {
                title: s,
                platformList: t
              })
            }
            return s
          }), [f, s]);
          return u || "linkout" === r ? (0, E.jsx)("div", {
            ref: k,
            className: o,
            "data-size": n,
            "data-type": r,
            "data-product": l,
            role: "button",
            "aria-label": C,
            children: d
          }) : (0, E.jsx)("button", {
            ref: k,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), t ? v({
                info: t
              }) : w(), _({
                event: "card_click",
                element_placement: i?.toLowerCase(),
                position: a,
                card_id: t,
                card_name: s?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: o,
            "data-size": n,
            "data-type": r,
            "data-product": l,
            tabIndex: "linkout" !== r ? 0 : -1,
            "aria-label": C,
            type: "button",
            children: d
          })
        },
        ce = {
          pillBtn: "rockstargames-sites-gta-gen9ebdcdd73cdde7ce5626490066de01474",
          selected: "rockstargames-sites-gta-gen9d058244e6f29505e3c05558039370b54",
          card: "rockstargames-sites-gta-gen9c2685d1ff8cc088bfef4c336b1a9f8ae",
          content: "rockstargames-sites-gta-gen9e268650dd5a86c01be62eeb552b4e54b",
          expandedContent: "rockstargames-sites-gta-gen9d19c433e20935d6b1eebff53baa04bb1",
          text: "rockstargames-sites-gta-gen9beee7d7b941675acb2b6b9bf5caf4f33",
          imageHolder: "rockstargames-sites-gta-gen9c823ac57eab14be16dd87e168e610d4f",
          coverCardWrapper: "rockstargames-sites-gta-gen9ef72671ab95bb9290b80637cb3073d29"
        },
        oe = e => {
          let {
            payload: t,
            prod: a,
            images: s,
            size: i,
            title: r,
            initial: c,
            animate: o,
            variants: d,
            id: m,
            position: g,
            sectionTitle: u,
            expandedType: f,
            context: p,
            children: h,
            expandedCardContents: v,
            textOverlayProps: k = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: x = {},
            modalProps: N = [],
            theme: j,
            cardIds: w,
            pricingOptions: C,
            platformOptions: T = null,
            pricingContainerHeight: A,
            isCoverCard: M = !1,
            isProductCard: P = !1
          } = e;
          const I = (0, _.useTinaComponents)(),
            L = (0, y.useMemo)((() => ({
              ...I,
              HTMLElement: l.A,
              ImageWithBadge: b.A,
              Carousel: n.A,
              GroupOfItems: S()
            })), [I]),
            $ = (0, y.useMemo)((() => (0, E.jsx)(ee, {
              type: f,
              components: L,
              payload: t,
              prod: a,
              images: s,
              size: i,
              title: r,
              context: p,
              textOverlayProps: k,
              initial: c,
              animate: o,
              variants: d,
              theme: j,
              cardIds: w,
              pricingOptions: C,
              id: m,
              pricingContainerHeight: A,
              isCoverCard: M,
              platformOptions: T,
              isProductCard: P,
              children: v
            })), [f, s, a, i, r, k, v, c, o, d, L, t, P]),
            B = [ce.card, M ? ce.coverCardWrapper : ""].join(" ");
          return (0, E.jsx)(re, {
            id: m,
            position: g,
            sectionTitle: u,
            title: r,
            size: i,
            expandedType: f,
            images: s,
            deckProps: x,
            modalProps: {
              content: $,
              ...N
            },
            className: B,
            isProductCard: P,
            cardIds: w,
            theme: j,
            isCoverCard: M,
            platformOptions: T,
            children: h
          })
        };
      var de = a(28089);
      const le = {
          layeredImageFrame: "rockstargames-sites-gta-gen9f4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-sites-gta-gen9f48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-sites-gta-gen9b52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-sites-gta-gen9f55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-sites-gta-gen9fa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-sites-gta-gen9b496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: me,
          Animations: ge
        } = N,
        {
          getVariant: ue,
          variants: fe,
          transitions: pe
        } = ge,
        be = e => {
          let {
            image: t,
            i: a,
            prod: s
          } = e;
          const {
            alt: n,
            src: i
          } = (0, de.useImageParser)({
            ...t,
            prod: s
          });
          return (0, E.jsx)("img", {
            src: i.mobile,
            alt: n ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        he = e => {
          let {
            images: t = [],
            className: a = "",
            prod: s = !1,
            expandedView: n = !1,
            style: i = {}
          } = e;
          const [r, c] = (0, y.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, y.useEffect)((() => {
            function e() {
              c({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [r]);
          const o = (0, y.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, E.jsx)(me, {
            className: (0, _.classList)(le[e?.specialClass] ?? le.imageMask, le[e?.sizeClass], e?.className),
            variants: ue(e?.specialClass ?? "imageMask", n ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: pe.cardOpen,
            children: (0, E.jsx)(be, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [t, r, n, s]);
          return (0, E.jsx)(me, {
            className: (0, _.classList)(le.layeredImageFrame, t.length > 1 ? le.layered : le.flat, a),
            style: i,
            initial: fe.fade.in.initial,
            animate: fe.fade.in.animate,
            transition: pe.instantFade,
            "data-expanded-view": n,
            children: o
          })
        };
      var ve = a(60285);
      const ke = e => {
          let {
            expandedType: t,
            to: a,
            children: s,
            style: n,
            sectionTitle: i = "",
            id: r,
            cardTitle: c,
            position: o
          } = e;
          const {
            track: d
          } = (0, ne.useGtmTrack)(), l = (0, y.useCallback)((() => {
            d({
              event: "card_click",
              link_url: a,
              card_id: r,
              card_name: c,
              element_placement: i.toLowerCase(),
              position: o
            })
          }), [i, a, r, c, i, o]);
          return "linkout" === t && a ? (0, E.jsx)(ve.A, {
            to: a,
            style: n,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: l,
            children: s
          }) : s
        },
        xe = {
          pillBtn: "rockstargames-sites-gta-gen9c484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-sites-gta-gen9d65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-sites-gta-gen9c0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-sites-gta-gen9cebbc72d1229514723b9d664281b472f"
        },
        {
          variants: ye
        } = N.Animations,
        _e = e => {
          let {
            id: t,
            title: a,
            content: s,
            size: n = "md",
            expandedType: i = "short",
            textOverlayProps: r = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: c = [],
            deckProps: o = {},
            to: d = null,
            tina: l = {},
            position: m = 0,
            sectionTitle: g = "",
            theme: u,
            pricingOptions: f,
            cardIds: p,
            platformOptions: b = null
          } = e;
          const h = (0, _.useTinaPayload)(),
            v = l?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            [k, x] = (0, y.useState)(o?.size ?? n),
            [N, j] = (0, y.useState)(0),
            S = void 0 !== f?.hasPricingOptions || void 0 !== b?.hasPlatformOptions;
          return (0, y.useEffect)((() => {
            x(o?.size ?? n)
          }), [o?.size, n]), (0, E.jsx)(oe, {
            id: t,
            title: a,
            size: k,
            expandedType: i,
            images: c,
            deckProps: o,
            prod: v,
            payload: {
              content: s,
              meta: {}
            },
            variants: ye.plainCard,
            textOverlayProps: r,
            modalProps: {
              className: xe.customModal,
              contentClassName: xe.customModalContent
            },
            expandedCardContents: (0, E.jsx)(he, {
              images: c,
              prod: v,
              expandedView: !0
            }),
            position: m,
            sectionTitle: g,
            theme: u,
            cardIds: p,
            pricingOptions: f,
            platformOptions: b,
            pricingContainerHeight: N,
            isProductCard: S,
            children: (0, E.jsx)(ke, {
              expandedType: i,
              to: d,
              sectionTitle: g,
              id: t,
              cardTitle: a,
              position: m,
              children: (0, E.jsx)("div", {
                className: xe.content,
                "data-product": S,
                children: (0, E.jsx)(K, {
                  title: a,
                  size: k,
                  textOverlayProps: r,
                  pricingOptions: f,
                  platformOptions: b,
                  setPricingContainerHeight: j,
                  children: (0, E.jsx)(he, {
                    images: c,
                    prod: v
                  })
                })
              })
            })
          })
        };
      a(7607), a(2024);
      const {
        variants: Ne
      } = N.Animations;
      var je = a(58407),
        Se = a(72752),
        we = a(94566),
        Ce = a(22778);
      const Te = {
          pillBtn: "rockstargames-sites-gta-gen9a50fca350d7dbc4340ad3c68f1da1960",
          selected: "rockstargames-sites-gta-gen9e6487295119cf4eafefadf26f76ed1f8",
          customModalContent: "rockstargames-sites-gta-gen9f17bd90d5d11d511cc583e09ef7ea01e",
          content: "rockstargames-sites-gta-gen9f11fa0818c5163565a0058b6a7aa2505",
          secondary: "rockstargames-sites-gta-gen9e8fd74f0c0a6e9b8855e4bd971e7bba8",
          logo: "rockstargames-sites-gta-gen9c1524e116e11607f62a2d93b0b2e32bc"
        },
        {
          variants: Ae
        } = N.Animations,
        Me = e => {
          let {
            id: t,
            logoImage: a = null,
            logoImageHeight: s = "auto",
            name: n = null,
            title: i,
            titleSizeClass: r = null,
            content: c,
            ctaText: o,
            ctaURL: d,
            size: l = "md",
            expandedType: m = "short",
            textOverlayProps: g = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: u = [],
            deckProps: f = {},
            to: p = null,
            tina: b = {},
            cardIds: h,
            theme: v
          } = e;
          const k = (0, te.useIntl)(),
            x = (0, _.useTinaPayload)(),
            N = b?.payload?.meta?.cdn ?? x?.meta?.prod ?? !1,
            [j, S] = (0, y.useState)(f?.size ?? l),
            w = (0, _.useGetCdnSource)(a ?? null);
          let C = null;
          return x.content && (C = x?.content[0]?._memoq ? x?.content[0]?._memoq?.body : null), (0, y.useEffect)((() => {
            S(f?.size ?? l)
          }), [f?.size, l]), (0, E.jsx)(oe, {
            id: t,
            title: i,
            sectionTitle: n || i,
            size: j,
            expandedType: m,
            images: u,
            deckProps: f,
            prod: N,
            payload: {
              content: c,
              meta: {}
            },
            variants: Ae.plainCard,
            textOverlayProps: g,
            modalProps: {
              className: Te.customModal,
              contentClassName: Te.customModalContent
            },
            expandedCardContents: (0, E.jsx)(he, {
              images: u,
              prod: N,
              expandedView: !0
            }),
            theme: v,
            cardIds: h,
            isCoverCard: !0,
            children: (0, E.jsx)(ke, {
              expandedType: m,
              to: p,
              sectionTitle: n || i,
              children: (0, E.jsxs)("div", {
                className: Te.content,
                children: [a && (0, E.jsx)("img", {
                  className: Te.logo,
                  alt: "logo",
                  src: w,
                  style: {
                    height: `${s}`
                  }
                }), (0, E.jsx)("h2", {
                  className: r,
                  children: i
                }), null !== C && (0, E.jsx)("p", {
                  children: C
                }), (0, E.jsx)(Ce.A, {
                  target: "newtab" === m ? "_blank" : "_self",
                  to: d || void 0,
                  children: o || k.formatMessage(we.card.card_learn_more)
                })]
              })
            })
          })
        };
      var Ee = a(22545);
      const Pe = e => {
          let {
            images: t,
            title: a,
            expandedView: s,
            variants: n,
            transition: i
          } = e;
          const r = (0, y.useMemo)((() => t && 0 !== t?.length ? t.map((e => e?.image?.sources ? (0, E.jsx)(b.A, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [t]);
          return !r?.length || r?.length < 1 ? null : 1 === r.length ? r : (0, E.jsx)(Ee.A, {
            slideChildren: r,
            title: a,
            navigation: s,
            thumbsVisible: s,
            spaceBetween: 0,
            variants: n,
            transition: i
          })
        },
        Ie = {
          pillBtn: "rockstargames-sites-gta-gen9d13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-sites-gta-gen9bcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-sites-gta-gen9ceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: Le,
          variants: $e
        } = N.Animations,
        Be = e => {
          let {
            id: t,
            title: a,
            content: s,
            size: n = "md",
            expandedType: i = "gallery",
            textOverlayProps: r = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: c = [],
            deckProps: o = {},
            tina: d = {},
            payload: l,
            position: m = 0,
            sectionTitle: g = "",
            cardIds: u
          } = e;
          const f = (0, _.useTinaPayload)(),
            p = l ?? f,
            b = d?.payload?.meta?.cdn ?? p?.meta?.prod ?? !1,
            h = ((e, t) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: t
              }
            } : e)))(c, b),
            [v, k] = (0, y.useState)(o?.size ?? n),
            {
              parent: x,
              main: N,
              thumbs: j
            } = $e?.cardWithImageGallery?.gallery ?? {};
          return (0, y.useEffect)((() => {
            k(o?.size ?? n)
          }), [o?.size, n]), (0, E.jsx)(oe, {
            id: t,
            position: m,
            sectionTitle: g,
            payload: {
              content: s,
              meta: {},
              payload: p
            },
            title: a,
            size: v,
            expandedType: i,
            images: h,
            deckProps: o,
            prod: b,
            variants: $e.cardWithImageGallery,
            textOverlayProps: r,
            modalProps: {
              className: Ie.customModal,
              contentClassName: Ie.customModalContent
            },
            expandedCardContents: (0, E.jsx)(Pe, {
              images: h,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: x,
                main: N,
                thumbs: j
              },
              transition: {
                parent: Le.cardOpen,
                main: Le.cardOpen,
                thumbs: Le.cardOpen
              }
            }),
            cardIds: u,
            children: (0, E.jsx)("div", {
              className: Ie.content,
              children: (0, E.jsx)(K, {
                title: a,
                size: v,
                textOverlayProps: r,
                children: (0, E.jsx)(Pe, {
                  images: h,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var De = a(60207);
      const Oe = e => {
        let {
          title: t,
          content: a,
          size: s = "md",
          badgeText: n
        } = e;
        const i = {
          ...(0, _.useTinaComponents)(),
          HTMLElement: l.A,
          UnorderedList: p.A,
          ListItem: De.A
        };
        return (0, E.jsx)("div", {
          className: "rockstargames-sites-gta-gen9d392587df58204b0910e721ef1f3c35c",
          "data-size": s,
          children: (0, E.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a002b98d034f1897c7e1f31327ff08dc",
            children: [n && (0, E.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d9901d1bb91e1fbc1e857964083fe496",
              children: n
            }), (0, E.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9bea322f6e3afa31355668ad164496730",
              children: [t && (0, E.jsx)("h3", {
                children: t
              }), (0, E.jsx)(_.TinaParser, {
                components: i,
                tina: {
                  payload: {
                    content: a
                  }
                }
              })]
            })]
          })
        })
      };
      var He = a(20009);
      const {
        Gen9CoreCarousel: Ge,
        framer: Ve,
        useTinaModuleFetchByIds: ze,
        withSimpleErrorBoundary: Re
      } = He, Fe = {
        Card: _e,
        CardWithImageGallery: Be,
        TextCard: Oe,
        ...He
      }, We = Ve.withFadeIn(Re((e => {
        let {
          cards: t = [],
          size: a,
          name: s,
          title: n,
          description: i,
          disclaimer: r,
          customSlidesPerView: c = null,
          theme: o = "none",
          cardSizeBreakpoints: d = {},
          customAspectRatio: l = "3/1",
          titleBadge: m = null
        } = e;
        const g = (0, y.useRef)(null),
          u = C().map(t, "id"),
          f = ze({
            ids: u
          }),
          [p, b] = (0, y.useState)(c),
          [h] = (0, ae.useSearchParams)(),
          [v, k] = (0, y.useState)(!1);
        (0, y.useEffect)((() => {
          if ("fob" === a) {
            const e = h.get("section");
            if (e && "games" === e && !v && (k(!0), g.current)) {
              const e = 100;
              window.scrollTo(0, g.current.offsetTop - e)
            }
          }
        }), []), (0, y.useEffect)((() => {
          if (!g.current) return;
          const e = () => {
            const e = c || window.getComputedStyle(g.current).getPropertyValue("--slides-per-view");
            b(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const x = (0, y.useMemo)((() => {
          let e = 0;
          if (!f) return null;
          let t = "blank";
          return f.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id)
          })), f.reduce(((s, i) => {
            if (i) {
              const {
                id: r,
                tina: c
              } = i, d = C().clone(c);
              C().set(d, "payload.meta.id", r), s.push((0, E.jsx)(_.TinaParser, {
                components: Fe,
                tina: d,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: d,
                  id: r,
                  position: e,
                  sectionTitle: n,
                  theme: o,
                  cardIds: u.filter((e => e !== t))
                }
              }, r)), e += 1
            }
            return s
          }), [])
        }), [f, a]);
        return (0, E.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9caf46db6464a84ad4990aed75ef74ff1",
          "data-theme": o,
          ref: g,
          children: [(0, E.jsx)(Ge, {
            description: i,
            size: a,
            cardSizeBreakpoints: d,
            slideChildren: x,
            title: n,
            name: s,
            customSlidesPerView: p,
            customAspectRatio: l,
            titleBadge: m,
            theme: o
          }), r && (0, E.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e90de79e6e215bde4beeb973696fcc11",
            children: (0, E.jsx)("span", {
              className: "rockstargames-sites-gta-gen9ceba411e9462491a4758858884a7a601",
              children: (0, E.jsx)(He.SafeHtml, {
                html: r
              })
            })
          })]
        })
      })));
      var qe = a(17891),
        Ue = a(14963),
        Qe = a.n(Ue);
      const Ye = (e, t) => {
          let a = getComputedStyle(e).getPropertyValue(t);
          return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
        },
        Ke = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Xe = e => e.scrollHeight > e.clientHeight;

      function Ze(e, t) {
        const a = {
          ...e
        };
        return C().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = a[s];
            a[s] = {
              ...e,
              prod: t
            }
          } else C().isObject(e) && !C().isArray(e) ? Ze(e, t) : C().isArray(e) && (a[s] = e.map((e => C().isObject(e) ? Ze(e, t) : e)))
        })), a
      }
      const Je = (0, A.withTranslations)((e => {
          let {
            active: t,
            styles: a,
            title: s,
            itemNumber: n,
            inModalMode: i,
            openModalMode: r,
            element: c,
            upNext: o,
            mobileMode: d,
            refDeck: l,
            components: m,
            tina: g,
            prevPage: u,
            nextPage: f,
            transitionStyle: p,
            selectedItemNumber: b,
            carouselTitle: h,
            sharedDraggingDelta: v,
            setSharedDraggingDelta: k
          } = e;
          const x = (0, te.useIntl)(),
            {
              track: N
            } = (0, ne.useGtmTrack)(),
            j = (0, y.createRef)(),
            S = (0, y.createRef)(),
            w = (0, y.createRef)(),
            C = (0, y.createRef)(),
            T = (0, y.createRef)(),
            [A, P] = (0, y.useState)(!1),
            [I, L] = (0, y.useState)(0),
            [$, B] = (0, y.useState)(0),
            [D, O] = (0, y.useState)(0),
            [H, G] = (0, y.useState)(0),
            [V, z] = (0, y.useState)(0),
            [R, F] = (0, y.useState)(!1),
            [W, q] = (0, y.useState)(0),
            [U, Q] = (0, y.useState)(0),
            [Y, K] = (0, y.useState)(0),
            [X, Z] = (0, y.useState)("700"),
            [J, ee] = (0, y.useState)(-1),
            [ae, se] = (0, y.useState)(0),
            [ie, re] = (0, y.useState)(0),
            [ce, oe] = (0, y.useState)(0),
            [le, me] = (0, y.useState)(!1),
            [ge, ue] = (0, y.useState)(""),
            [fe, pe] = (0, y.useState)(null),
            [be, he] = (0, y.useState)(!1),
            [ve, ke] = (0, y.useState)(null),
            [xe, ye] = (0, y.useState)(!1),
            [_e, Ne] = (0, y.useState)(!1),
            je = (0, _.useTinaPayload)(),
            Se = g?.payload?.meta?.cdn ?? !1 ?? je?.meta?.prod ?? !1,
            Ce = (0, _.useTranslations)({
              payload: g?.payload,
              variables: g?.variables
            }),
            Te = Ce?.meta ?? {},
            Ae = Ze(Ce?.content?.[0], Se),
            Me = (0, y.useMemo)((() => Ae?.images?.[0]?.image?.badge), [Ae]),
            Ee = (0, y.useMemo)((() => Ae.title ?? s ?? Te?.title), [s, Te?.title, Ae.title]),
            Pe = (0, de.useImageParser)({
              alt: Ae?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Ae?.images?.[0]?.image?.alt ?? "",
              sources: Ae?.images?.[0]?.image?.sources ?? [],
              prod: Se
            }),
            Ie = Pe?.src?.mobile ?? Pe?.src?.desktop ?? !1,
            Le = (0, y.useMemo)((() => Te?.foreignId), [Te]),
            $e = (0, y.useMemo)((() => Te?.foreignTitle), [Te]),
            [Be, De] = (0, y.useState)(0),
            [Oe, He] = (0, y.useState)(0),
            [Ge, Ve] = (0, y.useState)(0),
            [ze, Re] = (0, y.useState)(0),
            [Fe, We] = (0, y.useState)(!1),
            [qe, Ue] = (0, y.useState)(0),
            [Je, et] = (0, y.useState)(20),
            [tt, at] = (0, y.useState)(null),
            [st, nt] = (0, y.useState)(!1),
            it = (0, y.useCallback)((e => {
              if (!0 === R || !i && !d || be) return;
              const t = Ke(e);
              De(t.x), He(t.y)
            }), [R, i]),
            rt = e => {
              it(e)
            },
            ct = e => {
              if (!0 === R || 0 === Be || !i && !d || be) return;
              const t = Ke(e),
                a = t.x > Be ? 1 : -1,
                s = Math.abs(Be - t.x);
              i && !d && s > Je ? (nt(!0), ue(a > 0 ? "prev" : "next"), dt()) : (We(!0), Ue(s * a), k(s * a))
            },
            ot = e => {
              if (!0 === R || !i && !d || be) return;
              const t = Ke(e),
                a = t.x > Be ? 1 : -1,
                s = Math.abs(Be - t.x),
                n = Math.abs(Oe - t.y);
              i && !d ? (dt(), ue("")) : s > Je && n < 25 ? (nt(!0), ue(a > 0 ? "prev" : "next"), dt()) : dt()
            },
            dt = () => {
              F(!0), De(0), He(0), We(!1), Ue(0), k(0)
            };
          return (0, y.useEffect)((() => {
            let e = W;
            A ? e = 0 : i && !d && (e = W), L(e)
          }), [A, d, i, $, H, U, Y, D, W]), (0, y.useEffect)((() => {
            P(!(!i || !d))
          }), [i, d]), (0, y.useEffect)((() => {
            i && t && N({
              event: "virtualPageview",
              display_type: d ? "mobile" : "desktop",
              view_name: `${Le}/${Ee}`,
              source_content_id: Le,
              source_content_name: $e
            })
          }), [i, t]), (0, y.useEffect)((() => {
            const e = Qe()(((e, t) => {
              let a = 18;
              if (e?.documentElement && (a = Ye(e?.documentElement, "--root-font-size")), ie !== t.innerHeight && re(t.innerHeight), l?.current) {
                K(Ye(l.current, "--eventDeck-marginSm") * a);
                const e = a * Ye(l?.current, "--eventDeck-modalGutters"),
                  s = t?.innerWidth,
                  n = s - 2 * e;
                B(n), C.current && d && O(n), G(Ye(l.current, "--eventDeck-itemSize") * a), oe(Ye(l.current, "--eventDeck-phaseOneTransitionDuration"));
                const i = Ye(l?.current, "--eventDeck-itemImageTitleMargins") * a,
                  r = S?.current?.clientHeight,
                  c = r + i;
                Number.isNaN(c) || q(c), se(Ye(l?.current, "--eventDeck-headerHeight") * a)
              }
              let s = Math.min(700, t.innerWidth);
              d || (s = 900), Z(`${s}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [l, d]), (0, y.useEffect)((() => {
            if (j.current) {
              const e = j.current.clientHeight;
              Number.isNaN(e) || Q(e)
            }
          }), [j]), (0, y.useEffect)((() => {
            if (i && d && C.current && (C.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !i && d && C.current) {
              const e = 228 / $;
              C.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!d && C.current && (C.current.style.transform = null)
          }), [i, d, $, D]), (0, y.useEffect)((() => {
            const e = .5 * $,
              t = ie - ae - 3 * Y;
            z($ - (e < t ? e : t))
          }), [$, Y, ie]), (0, y.useEffect)((() => {
            "next" === ge ? (f(null, !0), ue("")) : "prev" === ge && (u(null, !0), ue(""))
          }), [ge]), (0, y.useEffect)((() => {
            Ve(0), Re(0)
          }), [d]), (0, y.useEffect)((() => {
            d ? et(i ? 35 : 20) : i && et(50)
          }), [i, d]), (0, y.useEffect)((() => {
            let e = [],
              t = 0,
              s = 0;
            if (null !== a?.transform) {
              e = a.transform.split(",");
              const n = e[0].split("(");
              t = Number(n[1].replace("px", "")), Ve(t), s = Number(e[1].replace("px", "")), Re(s)
            }
          }), [a]), (0, y.useEffect)((() => {
            if (!R) return;
            clearTimeout(fe);
            const e = setTimeout((() => {
              F(!1), De(0)
            }), 200);
            pe(e)
          }), [R, 200]), (0, y.useEffect)((() => {
            if (!st) return;
            clearTimeout(tt);
            const e = setTimeout((() => {
              nt(!1)
            }), 1e3);
            at(e)
          }), [st]), (0, y.useEffect)((() => {
            i && clearTimeout(J), setTimeout((() => {
              me(!le)
            }), ce)
          }), [i]), (0, y.useEffect)((() => (document.body.addEventListener("mouseleave", dt), () => {
            document.body.removeEventListener("mouseleave", dt)
          })), []), (0, y.useEffect)((() => {
            T.current ? ye(Xe(T.current)) : ye(!1), void 0 !== c && c.current ? Ne(Xe(c.current)) : Ne(!1)
          }), [c, T, t, i, le]), Ae ? (0, E.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4090652e3c0a4e1979bb0a36b22b7cd",
            ref: c,
            "data-item-position": n,
            "data-modal-mode": i,
            "data-active-item": t,
            "data-up-next": o,
            "data-transition": Fe || 0 !== v ? "none" : p,
            "data-scrollable": _e,
            style: {
              ...a,
              transform: i && t && !d ? `translate3d(${Ge+qe}px, ${ze}px, 0)` : d && !i ? `translate3d(${Ge+v}px, ${ze}px, 0)` : a?.transform
            },
            onClick: e => {
              st || (i ? i && !d && (n < b ? u(e, !0) : n > b && f(e, !0)) : r(e))
            },
            onMouseEnter: () => {
              i || P(!0), i || d || (clearTimeout(J), ee(setTimeout((() => {
                N({
                  event: "card_title_hover",
                  card_name: Ee,
                  card_id: n,
                  position: n,
                  view_name: `${Le}/${$e}`,
                  source_content_id: Le,
                  source_content_name: $e
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              i || P(!1), i || d || clearTimeout(J)
            },
            onTouchStart: rt,
            onTouchMove: ct,
            onTouchEnd: ot,
            onMouseDown: rt,
            onMouseMove: ct,
            onMouseUp: ot,
            onKeyUp: e => {
              "Enter" === e.key && (i || r(e))
            },
            tabIndex: i ? -1 : 0,
            "aria-label": i ? x.formatMessage(we.card.events_deck_modal_group_label) : "",
            role: i ? "dialog" : "presentation",
            children: [(0, E.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b9c878efb14d25c323e95f01b7a53460",
              "data-full-header": A,
              ref: w,
              style: {
                height: i && d ? `${$}px` : null,
                width: i && d ? `${$}px` : null
              },
              children: [Ie && (0, E.jsx)("img", {
                ref: C,
                src: `${Pe?.src?.mobile??Pe?.src?.desktop}?im=Resize,width=${X}`,
                alt: Pe?.alt,
                style: {
                  width: 0 !== D && d ? `${D}px` : null,
                  height: 0 !== D && d ? `${D}px` : null
                }
              }), (0, E.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9ba8c09e500ea0845dc20d380e8ec11ca",
                style: {
                  transform: !d || d && i ? `translate3d(0, ${I}px, 0)` : null
                },
                children: [Me && (0, E.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cbbb0470197acdc4f0ec1f567f5c8a42",
                  ref: j,
                  children: (0, E.jsx)(M.A, {
                    text: Me
                  })
                }), (0, E.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9aca2b0fbf7c1dbcbf99e53812b9abc8e",
                  ref: S,
                  "aria-hidden": i,
                  children: Ee
                })]
              })]
            }), (0, E.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e7defd080518d58f00f72ccc94df53aa",
              ref: T,
              "aria-hidden": !i,
              onScroll: () => {
                he(!0), dt(), clearTimeout(ve);
                const e = setTimeout((() => {
                  he(!1)
                }), 100);
                ke(e)
              },
              style: {
                top: i && d ? `${$}px` : null,
                width: i && !d && t ? `${V}px` : null,
                touchAction: xe || d ? "unset" : "none"
              },
              children: [Ee && (0, E.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a8fbffe55d92fc2f04e5e6b8f9267206",
                children: Ee
              }), (0, E.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e20bd8af5d67954447804e0e21161d3b",
                children: (0, E.jsx)(_.TinaParser, {
                  components: m,
                  tina: {
                    meta: Te,
                    payload: {
                      content: Ae?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        et = "rockstargames-sites-gta-gen9bb65eb1ac15ed189c1a9f6700276efc0",
        tt = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: s,
            nextBtnDisabled: n,
            selectedItemNumber: i,
            itemsData: r,
            closeModalMode: c,
            inModalMode: o,
            controlsHidden: d
          } = e;
          const l = (0, te.useIntl)();
          return (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dc99156537faf101b73515aaa7d6da2b",
              "aria-hidden": d || "false",
              children: [(0, E.jsx)("button", {
                className: et,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": o ? l.formatMessage(we.card.events_deck_modal_previous_aria_label) : l.formatMessage(we.card.events_deck_previous_aria_label)
              }), (0, E.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a94a647e9943db9c97ae87c8c6a162cd",
                "aria-hidden": !o,
                "aria-label": l.formatMessage(we.card.events_deck_paging_label, {
                  currentPage: i + 1,
                  totalPages: r.length
                }),
                children: [i + 1, (0, E.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9fd027fcea9fd167b666599be78ab4f53"
                }), r.length]
              }), (0, E.jsx)("button", {
                className: et,
                type: "button",
                onClick: s,
                disabled: n,
                "aria-label": o ? l.formatMessage(we.card.events_deck_modal_next_aria_label) : l.formatMessage(we.card.events_deck_next_aria_label)
              })]
            }), (0, E.jsx)("button", {
              className: "rockstargames-sites-gta-gen9d43b6cdcbcc07082edacd9a7cb1598c5",
              type: "button",
              onClick: c,
              "aria-label": l.formatMessage(we.card.events_deck_modal_close_label),
              "aria-hidden": !o,
              tabIndex: o ? 0 : -1
            })]
          })
        };
      var at = a(31879),
        st = a.n(at),
        nt = a(205),
        it = a.n(nt),
        rt = a(32503),
        ct = a.n(rt),
        ot = a(99074),
        dt = a(37109),
        lt = a(5765),
        mt = a(47668),
        gt = a(52842),
        ut = a(57797),
        ft = a(2723),
        pt = a(1333),
        bt = a(50562),
        ht = a(37281),
        vt = a(21027),
        kt = a(84690);
      const xt = {
          CalloutSection: s.A,
          Card: _e,
          CardWithImageGallery: Be,
          ConditionalBlock: i.A,
          CoverCard: Me,
          Cta: r.A,
          DiscoveryCallout: dt.A,
          EventsDeck: e => {
            const {
              setBodyIsLocked: t
            } = (0, A.useBodyScrollable)("EventsDeck"), {
              title: a
            } = e, {
              track: s
            } = (0, ne.useGtmTrack)(), [i, r] = (0, y.useState)(!1), c = (() => {
              const {
                data: e
              } = (0, je.useQuery)(Se.TinaModulesList, {
                variables: {
                  type: "gtao-event-card",
                  orderBy: "priority",
                  orderDirection: "desc"
                }
              }), t = e?.tinaModulesList?.results, a = C().map(t, "id");
              return (0, x.X)({
                ids: a
              })
            })(), [o, d] = (0, y.useState)([]), [m, g] = (0, y.useState)(null), [u, f] = (0, y.useState)(0), [h, v] = (0, y.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [k, N] = (0, y.useState)(!1), j = (0, y.createRef)(), [w, T] = (0, y.useState)(null), M = (0, y.createRef)(), P = (0, y.createRef)(), [I, L] = (0, y.useState)([]), [$, B] = (0, y.useState)(!0), [D, O] = (0, y.useState)(!1), [H, G] = (0, y.useState)(!1), [V, z] = (0, y.useState)([]), [R, F] = (0, y.useState)(404), [W, q] = (0, y.useState)(808), [U, Q] = (0, y.useState)(672), [Y, K] = (0, y.useState)(336), [X, Z] = (0, y.useState)(0), [J, ee] = (0, y.useState)(0), [te, ae] = (0, y.useState)(0), [se, ie] = (0, y.useState)(0), [re, ce] = (0, y.useState)(0), [oe, de] = (0, y.useState)(!1), le = !!(0, A.usePrevious)(oe), [me, ge] = (0, y.useState)(window.innerWidth), [ue, fe] = (0, y.useState)(0), [pe, be] = (0, y.useState)(0), [he, ve] = (0, y.useState)(0), [ke, xe] = (0, y.useState)(0), [ye, _e] = (0, y.useState)(0), [Ne, we] = (0, y.useState)(0), [Ce, Te] = (0, y.useState)(0), [Ae, Me] = (0, y.useState)(0), [Ee, Pe] = (0, y.useState)(-1e3), [Ie, Le] = (0, y.useState)(0), [$e, De] = (0, y.useState)(50), [Oe, He] = (0, y.useState)(0), [Ge, Ve] = (0, y.useState)(!1), [ze, Re] = (0, y.useState)(768), [Fe, We] = (0, y.useState)(!1), [qe, Ue] = (0, y.useState)(!1), [Xe, Ze] = (0, y.useState)(!1), [et, at] = (0, y.useState)(!1), [st, nt] = (0, y.useState)(!1), [it, rt] = (0, y.useState)(1e3), [ct, ot] = (0, y.useState)(1.2), [dt, lt] = (0, y.useState)(0), [mt, gt] = (0, y.useState)(!1), [ut, ft] = (0, y.useState)(!1), [pt, bt] = (0, y.useState)(!0), [ht, vt] = (0, y.useState)(!1), [kt, xt] = (0, y.useState)(!1), [yt, _t] = (0, y.useState)(null), [Nt, jt] = (0, y.useState)(100), [St, wt] = (0, y.useState)(!1), [Ct, Tt] = (0, y.useState)({}), [At, Mt] = (0, y.useState)(""), [Et, Pt] = (0, y.useState)(0), [It, Lt] = (0, y.useState)(!1), [$t, Bt] = (0, y.useState)(!1), [Dt, Ot] = (0, y.useState)(0), [Ht, Gt] = (0, y.useState)(0), [Vt, zt] = (0, y.useState)(100), [Rt, Ft] = (0, y.useState)(!1), [Wt, qt] = (0, y.useState)(!1), Ut = () => me * ue + $e, Qt = () => !1 === Ge ? ct : 1, Yt = e => e === Ce - 1 || e === Ce + 1, Kt = () => {
              let e = -1 * Ne;
              return e = -1 * Ne - ke, e
            }, Xt = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === Ge) return 0;
              const a = e.itemNumber % 2 == 0,
                s = R * ct;
              if (!0 === a && 0 !== e.itemNumber) {
                const a = Ye(e?.element?.current, "top");
                let n = a - te;
                return !1 === t && (n -= a), -1 * (.5 * s + n) + dt
              }
              return te - .5 * s + dt
            }, Zt = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                s = Kt();
              !1 === a && (s = 0);
              const n = me * ue,
                i = !1 === Ge ? R * Qt() : n;
              return e.inModalMode && Ge ? -1 === t ? Ut() * (Ce - e.itemNumber) * -1 - e.styles.left : Ut() * (e.itemNumber - Ce) - e.styles.left : -1 === t ? -1 * e.styles.left - i - $e + s : n - e.styles.left + $e + s
            }, Jt = (e, t, a) => {
              -1 === t && (O(!1), B(!0)), O(!1 === a && e >= t || !0 === a && e + 1 === t), B(e <= 0)
            }, ea = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (kt || ht) return;
              if (xt(!0), oe) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (Ce + 1 >= o.length) return;
                const t = I[Ce + 1]?.tina?.payload?.meta?.title ?? `card-${Ce+1}`;
                s({
                  event: e ? "modal_swipe" : "modal_next",
                  card_name: t,
                  card_id: Ce + 1,
                  position: Ce + 1,
                  view_name: `${I[Ce+1].source_content_id}/${t}`,
                  source_content_id: I[Ce + 1].source_content_id,
                  source_content_name: I[Ce + 1].source_content_name
                }), Jt(Ce + 1, o.length, !0), Ge ? Ge && L(I.map((e => {
                  e.itemNumber === Ce - 1 ? e.upNext = !1 : e.itemNumber === Ce + 2 ? e.upNext = !0 : e.itemNumber === Ce + 1 ? e.active = !0 : e.itemNumber === Ce && (e.upNext = !0, e.active = !1);
                  const t = e.styles.transform.replace("translate3d(", "").split(",");
                  let a = Number(t[0].replace("px", ""));
                  a -= Ut();
                  const s = `translate3d(${a}px,${t[1]},${t[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))) : L(I.map((e => (e.itemNumber === Ce - 1 ? e.upNext = !1 : e.itemNumber === Ce + 2 ? e.upNext = !0 : e.itemNumber === Ce + 1 ? (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Kt()}px, ${dt}px, 0) scale(1)`
                }) : e.itemNumber === Ce && (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${Zt(e,-1)}px, ${Xt(e)}px, 0) scale(${Qt()})`
                }), e)))), Te(Ce + 1)
              }(t);
              const n = ye + 1;
              if (!(n > re))
                if (s({
                    event: t ? "carousel_swipe" : "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  }), Jt(n, re, !1), Ge) {
                  let e = n * Y * -1;
                  e < Ee && (e = Ee, O(!0), B(!1), _e(re)), _e(n), L(I.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = Ne - J;
                  _e(n), e < Ee && (e = Ee, O(!0), B(!1), _e(re)), we(e)
                }
            }, ta = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (kt || ht) return;
              if (xt(!0), !0 === oe) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (kt) return;
                if (Ce - 1 < 0) return;
                const t = I[Ce - 1]?.tina?.payload?.meta?.title ?? "card-" + (Ce - 1);
                s({
                  event: e ? "modal_swipe" : "modal_previous",
                  element_placement: a,
                  card_name: t,
                  card_id: Ce - 1,
                  position: Ce - 1,
                  view_name: `${I[Ce-1].source_content_id}/${t}`,
                  source_content_id: I[Ce - 1].source_content_id,
                  source_content_name: I[Ce - 1].source_content_name
                }), Jt(Ce - 1, o.length, !0), Ge || L(I.map((e => (e.itemNumber === Ce + 1 ? e.upNext = !1 : e.itemNumber === Ce - 2 ? e.upNext = !0 : e.itemNumber === Ce ? (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${Zt(e,1)}px, ${Xt(e)}px, 0) scale(${Qt()})`
                }) : e.itemNumber === Ce - 1 && (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Kt()}px, ${dt}px, 0) scale(1)`
                }), e)))), Ge && L(I.map((e => {
                  e.itemNumber === Ce + 1 ? e.upNext = !1 : e.itemNumber === Ce - 2 ? e.upNext = !0 : e.itemNumber === Ce ? (e.upNext = !0, e.active = !1) : e.itemNumber === Ce - 1 && (e.active = !0);
                  const t = e.styles.transform.replace("translate3d(", "").split(",");
                  let a = Number(t[0].replace("px", ""));
                  a += Ut();
                  const s = `translate3d(${a}px,${t[1]},${t[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))), Te(Ce - 1)
              }(t);
              const n = ye - 1;
              if (!(n < 0))
                if (s({
                    event: t ? "carousel_swipe" : "carousel_previous",
                    element_placement: a
                  }), Jt(n, re, !1), Ge) {
                  let e = n * Y * -1;
                  e > 0 && (e = 0, B(!0), O(!1), _e(0)), _e(n), L(I.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = Ne + J;
                  _e(n), (e > 0 || 0 === e || -1 * e < W) && (e = 0, B(!0), O(!1), _e(0)), we(e)
                }
            }, aa = e => {
              if (It || oe || Ge) return;
              const t = Ke(e);
              Pt(t.x)
            }, sa = e => {
              if (It || 0 === Et || oe || Ge) return;
              const t = Ke(e),
                a = t.x > Et ? 1 : -1;
              let s = Math.abs(Et - t.x) * a;
              (0 === ye && 1 === a || ye === re && -1 === a) && (s *= .35), Bt(!0), Ot(s)
            }, na = e => {
              if (It || oe || Ge) return;
              const t = Ke(e),
                a = t.x > Et ? 1 : -1,
                s = Math.abs(Et - t.x);
              Mt(s > Vt ? a > 0 ? "prev" : "next" : ""), ia()
            }, ia = () => {
              Lt(!0), Pt(0), Ot(0), Bt(!1)
            }, ra = e => {
              $t && (na(e), Bt(!1))
            }, ca = function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return e.map(((e, s) => {
                let n = s * Y,
                  i = s;
                !1 === Ge && (i = Math.ceil(.5 * s) + 1, s > 0 && (n = 2 === i ? U : U + Y * (i - 2)));
                const r = V[s];
                return r?.current && (r.current.scrollTop = 0), {
                  ...e,
                  mobileMode: Ge,
                  itemNumber: s,
                  columnNumber: i,
                  inModalMode: !1,
                  upNext: !0,
                  active: !1,
                  openModalMode: da,
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
            }, oa = () => {
              const e = I[Ce]?.tina?.payload?.meta?.title ?? `card-${Ce}`;
              if (s({
                  event: "modal_close",
                  element_placement: a,
                  card_name: e,
                  card_id: Ce,
                  position: Ce,
                  view_name: `${I[Ce].source_content_id}/${e}`,
                  source_content_id: I[Ce].source_content_id,
                  source_content_name: I[Ce].source_content_name
                }), Ge) {
                let e = Ce * Y * -1;
                e < Ee && (e = Ee, O(!0), B(!1), _e(re)), _e(Ce), Jt(Ce, re, !1), L(ca(o, "cardClose", `translate3d(${e}px, 0, 0)`))
              } else {
                L(ca(o, "cardClose"));
                const e = Math.ceil((I[Ce].columnNumber + 1) / X) - 1;
                _e(e);
                let t = e * J * -1;
                Oe < pe ? (t = 0, B(!0), O(!0), _e(0)) : t < Ee ? (t = Ee, B(!1), O(!0), _e(re)) : Jt(e, re, !1), we(t), Te(0)
              }
              M.current.style.transform = "translate(0px, 0px)", M.current.style.transition = "all var(--eventDeck-transitionCardClose)", gt(!1), at(!1), de(!1), Ue(!1), We(!1), nt(!1), setTimeout((() => {
                Ze(!0)
              }), it)
            };
            (0, y.useEffect)((() => {
              !1 !== Xe && (Ze(!1), gt(!1), w.style.zIndex = null, L(I.map((e => (e.transitionStyle = "", e)))))
            }), [Xe]);
            const da = e => {
              setTimeout((() => {
                Tt(e), wt(!0)
              }), 1)
            };
            (0, y.useEffect)((() => {
              if (!St) return;
              if (wt(!1), kt) return;
              Te(Number(Ct.target.dataset.itemPosition)), Ue(!0), vt(!0), pt && bt(!1);
              const e = I[Ct.target.dataset.itemPosition].source_content_id,
                t = I[Ct.target.dataset.itemPosition].source_content_name,
                n = I[Ct.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
              s({
                event: "card_click",
                element_placement: a,
                card_name: n ?? `card-${Ce}`,
                card_id: Ct.target.dataset.itemPosition,
                position: Ct.target.dataset.itemPosition,
                view_name: `${e}/${n}`,
                source_content_id: e,
                source_content_name: t
              })
            }), [St]), (0, y.useEffect)((() => {
              if (!qe || oe) return;
              Ue(!1);
              const e = (() => {
                const e = w?.getBoundingClientRect().top;
                return lt(-1 * (e - u)), -1 * (e - 140)
              })();
              Ge && L(I.map((e => {
                const t = e.itemNumber > Ce + 3 || e.itemNumber < Ce - 3;
                return e.styles = {
                  ...e.styles,
                  display: t ? "none" : null,
                  transition: t ? "none" : null
                }, e
              }))), w.style.zIndex = "var(--eventDeck-zIndexOverlay)", gt(!0), M.current && (M.current.style.transition = "all var(--eventDeck-transitionCardOpen)", M.current.style.transform = `translate(${-1*ke}px, ${e}px)`), at(!0), setTimeout((() => {
                We(!0)
              }), 1)
            }), [qe]);
            const la = () => {
              L(I.map(((e, t) => {
                e.active = t === Ce, e.inModalMode = !0, e.transitionStyle = "cardOpen", Ge && (e.upNext = Yt(e.itemNumber));
                const a = !Ge;
                let s = 0;
                if (Ge) {
                  const e = Ae + 5 * u;
                  s = window.innerHeight - e
                }
                return e.itemNumber < Ce ? e.styles = {
                  ...e.styles,
                  height: Ge ? `${s}px` : null,
                  transform: `translate3d(${Zt(e,-1,a)}px, ${dt}px, 0) scale(${Qt()})`
                } : e.itemNumber > Ce ? e.styles = {
                  ...e.styles,
                  height: Ge ? `${s}px` : null,
                  transform: `translate3d(${Zt(e,1,a)}px, ${dt}px, 0) scale(1)`
                } : e.itemNumber === Ce && (e.styles = Ge ? {
                  ...e.styles,
                  height: `${s}px`,
                  transform: `translate3d(${-1*e.styles.left}px, ${dt}px, 0) scale(1)`
                } : {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Kt()}px, ${dt}px, 0) scale(1)`
                }), e
              })))
            };
            (0, y.useEffect)((() => {
              !1 !== Fe && !0 !== oe && (de(!0), We(!1), Jt(Ce, I.length, !0), M.current && (M.current.style.transition = "all var(--eventDeck-transitionCardOpen)", M.current.style.transform = `translate(${-1*ke}px, ${dt}px)`), la(), Ge ? (we(0), vt(!1), ft(!0)) : nt(!0))
            }), [Fe]), (0, y.useEffect)((() => {
              ut && (ft(!1), L(I.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
            }), [ut]);
            const ma = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              L(I.map((t => {
                if (t.upNext = Yt(t.itemNumber), t.itemNumber !== Ce) {
                  let e = Zt(t, 1);
                  t.itemNumber < Ce && (e = Zt(t, -1)), t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, ${Xt(t)}px, 0) scale(${Qt()})`
                  }
                } else t.itemNumber === Ce && !Ge && e && (t.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Kt()}px, ${dt}px, 0) scale(1)`
                });
                return t
              })))
            };
            (0, y.useEffect)((() => {
              !1 !== st && !0 !== Ge && (nt(!1), setTimeout((() => {
                ma(), vt(!1)
              }), 1))
            }), [st]), (0, y.useEffect)((() => {
              L(ca(o, ""))
            }), [U, Y, o]), (0, y.useEffect)((() => {
              const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
              Ft(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
            }), []), (0, y.useEffect)((() => {
              const e = le !== oe;
              oe ? (e && t(!0), Rt && qt(!0)) : $t || oe || (e && t(!1), Rt && Wt && qt(!1))
            }), [oe, $t]), (0, y.useEffect)((() => {
              if (!kt) return;
              clearTimeout(yt);
              const e = setTimeout((() => {
                xt(!1)
              }), Nt);
              _t(e)
            }), [kt]), (0, y.useEffect)((() => {
              k && setTimeout((() => {
                N(!1)
              }), 3e3)
            }), [k]), (0, y.useEffect)((() => {
              N(!0), we(0), _e(0);
              let e = Math.ceil(Math.ceil(Oe / Y) / X);
              Ge && (e = I.length - 1), e < 0 && (e = 1), Jt(0, e, !1), oe && oa()
            }), [Ge]), (0, y.useEffect)((() => {
              M.current && !oe && (M.current.style.transform = "")
            }), [M, Ge, oe]), (0, y.useEffect)((() => {
              const e = (c ?? []).map((e => {
                let t = null;
                return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (t = e?.tina?.variables?.keys?.meta?.title), {
                  ...e,
                  title: t,
                  source_content_id: e?.tina?.payload?.meta?.foreignId,
                  source_content_name: e?.tina?.payload?.meta?.foreignTitle,
                  view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
                }
              }));
              d(e)
            }), [c]), (0, y.useEffect)((() => {
              z(o.map((() => (0, y.createRef)())))
            }), [o]), (0, y.useEffect)((() => {
              const e = e => {
                const {
                  key: t
                } = e;
                "ArrowLeft" === t ? ta(null, !1) : "ArrowRight" === t && ea(null, !1)
              };
              return document.addEventListener("keydown", e), () => {
                document.removeEventListener("keydown", e)
              }
            }), [kt, ht, oe]), (0, y.useEffect)((() => {
              if (M.current) {
                let e = 0;
                e = M?.current?.clientHeight, e += Ye(M?.current, "margin-top"), e += Ye(M?.current, "margin-bottom"), Me(e)
              }
            }), [M, P]), (0, y.useEffect)((() => {
              oe && (() => {
                const e = w?.getBoundingClientRect().top,
                  t = -1 * (e - u);
                if (L(I.map((e => {
                    if (e.styles.transform) {
                      const a = e.styles.transform.split(","),
                        s = `${a[0]}, ${t}px,${a[2]}`;
                      e.styles = {
                        ...e.styles,
                        transform: s
                      }
                    }
                    return e
                  }))), M.current) {
                  const t = -1 * (e - u);
                  M.current.style.transform = `translate(${-1*ke}px, ${t}px)`
                }
              })()
            }), [Ge, oe, dt]), (0, y.useEffect)((() => {
              oe || (Oe < ue * me && 0 === ye ? (we(0), O(!0), B(!0)) : Ne < Ee ? (O(!0), B(!1), _e(re), we(Ee)) : Ne < 0 && (O(!1), _e(re - 1)), Oe > ue * me && D && O(!1))
            }), [Ee]), (0, y.useEffect)((() => {
              if (j.current) {
                T(j.current);
                const e = Ye(document.documentElement, "--root-font-size"),
                  t = Ye(j.current, "--eventDeck-modalGutters") * e,
                  a = Ye(j.current, "--eventDeck-collapsedMaxWidth");
                ve(a);
                let s = me - 2 * t;
                s > a && (s = a), be(s), fe(s / me);
                const n = 2 * t + s;
                let i = 0;
                n < me && (i = .5 * (me - n)), xe(i);
                let r = Ye(j.current, "--eventDeck-modalBottomGutter");
                r *= e;
                const c = window.innerHeight - (Ae + r);
                ae(.5 * s < c ? s / 4 : .5 * c);
                const d = Ye(j.current, "--eventDeck-mobileBreakpoint");
                Re(d);
                let l = Ye(j.current, "--eventDeck-itemSize");
                l *= e, F(l);
                let u = Ye(j.current, "--eventDeck-modalGutterGap");
                u *= e, De(u);
                let p = Ye(j.current, "--eventDeck-insideMargin");
                p *= e;
                const b = !1 === Ge ? 2 * l + p : l + p;
                q(b), Q(b + p);
                const h = l + p;
                K(h);
                let v = Math.ceil(.5 * (o.length - 1)) * h + b;
                Ge && (v = o.length * h), He(v), 0 !== Oe && Pe(-1 * Oe + s);
                let k = Math.ceil(Math.ceil(v / h) / X);
                (Ge || oe) && (k = I.length - 1), ce(k);
                const x = Ye(j.current, "--eventDeck-itemScaleUpAmount");
                ot(x), rt(Ye(j.current, "--eventDeck-cardCloseTransitionDuration")), f(Ye(j.current, "--eventDeck-itemImageTitleMargins") * e), null !== m && e !== m && (g(e), oe && ma()), null === m && g(e)
              }
            }), [j, o]), (0, y.useEffect)((() => {
              if (oe && !Ge) {
                ma();
                const e = w?.getBoundingClientRect().top,
                  t = -1 * (e - u);
                t !== dt && lt(t)
              }
            }), [h]), (0, y.useEffect)((() => {
              G(!(!$ || !D || oe))
            }), [$, D]), (0, y.useEffect)((() => {
              const e = Qe()((e => {
                ge(e), Ve(e < ze);
                const t = (1 - ue) / 2;
                Le(e * t);
                const a = Math.floor(pe / Y);
                Z(a);
                let s = a * Y;
                s > he && (s = he), ee(s), ie(e - e * t);
                const n = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
                if (n !== h && v(n), oe && n === h && !k) {
                  const e = w?.getBoundingClientRect().top,
                    t = -1 * (e - u);
                  t !== dt && lt(t)
                }
              }), 300);
              return window.addEventListener("resize", (() => {
                e(window.innerWidth)
              })), window.addEventListener("scroll", (() => {
                oe && Ge && e(window.innerWidth)
              })), e(window.innerWidth), () => {
                window.removeEventListener("resize", (() => {
                  e(window.innerWidth)
                }))
              }
            }), [Y, ue, oe, Ge]), (0, y.useEffect)((() => {
              !1 !== oe && !0 !== k && (Ge ? la() : ma(!0))
            }), [se, J, $e, R, me, Ie, te, dt]), (0, y.useEffect)((() => {
              const e = () => {
                if (j.current && pt) {
                  const e = j.current.getBoundingClientRect(),
                    t = .2 * window.innerHeight;
                  window.innerHeight - e.top >= t && bt(!1)
                }
              };
              return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
            }), [j]);
            const ga = (0, y.useCallback)((() => {
              if (null !== j.current && !i) {
                const {
                  top: t
                } = j?.current?.getBoundingClientRect() || 0;
                t <= .6 * window.innerHeight && (s({
                  event: "page_section_impression",
                  element_placement: e?._memoq?.title?.toLowerCase()
                }), r(!0))
              }
            }), [j]);
            (0, y.useEffect)((() => (window.addEventListener("scroll", ga), () => {
              window.removeEventListener("scroll", ga)
            })), [ga, j]), (0, y.useEffect)((() => {
              "next" === At ? (ea(null, !0), Mt("")) : "prev" === At && (ta(null, !0), Mt(""))
            }), [At]), (0, y.useEffect)((() => {
              j.current && j.current.addEventListener("mouseleave", (() => {
                $t && ia()
              }))
            }), [j, $t]), (0, y.useEffect)((() => (document.body.addEventListener("mouseleave", ra), () => {
              document.body.removeEventListener("mouseleave", ra)
            })), [$t]), (0, y.useEffect)((() => {
              It && setTimeout((() => {
                Lt(!1), Pt(0)
              }), Nt)
            }), [It]), (0, y.useEffect)((() => {
              zt(Ge ? 20 : 100)
            }), [Ge]), (0, y.useEffect)((() => {
              jt(oe ? 500 : 100)
            }), [oe]);
            const ua = (0, _.useTinaComponents)(),
              fa = (0, y.useMemo)((() => ({
                ...ua,
                CardWithImageGallery: Be,
                HTMLElement: l.A,
                ImageWithBadge: b.A,
                Carousel: n.A,
                GroupOfItems: S(),
                UnorderedList: p.A
              })), [ua]),
              pa = (0, y.useMemo)((() => I.map((e => (0, y.createElement)(Je, {
                ...e,
                refDeck: j,
                key: e?.id ?? e?.sync_hash,
                components: fa,
                prevPage: ta,
                nextPage: ea,
                loadCssRawValue: Ye,
                selectedItemNumber: Ce,
                carouselTitle: a,
                sharedDraggingDelta: Ht,
                setSharedDraggingDelta: Gt
              })))), [I, j, fa, ta, ea, Ce]);
            return !pa?.length || pa.length <= 0 ? null : (0, E.jsxs)(E.Fragment, {
              children: [(0, E.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d06937f0f31eadd8f2c6a7d4000c4028",
                "data-modal-mode": et,
                "aria-hidden": "true"
              }), (0, E.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9bf13eb49657ff34f800ad89de65ad3b9",
                "data-modal-mode": oe,
                "data-faded": pt,
                ref: j,
                onTouchStart: aa,
                onTouchMove: sa,
                onTouchEnd: na,
                onMouseDown: aa,
                onMouseMove: sa,
                onMouseUp: na,
                tabIndex: -1,
                role: "presentation",
                children: [(0, E.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9dffe1905dcf86ef006304394794fcca7",
                  "aria-hidden": "true"
                }), (0, E.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9bc0660e650ef4aabf28e90cce99a05be",
                  "data-modal-mode": oe,
                  ref: M,
                  "data-animating": mt,
                  children: [(0, E.jsx)("h2", {
                    className: "rockstargames-sites-gta-gen9fdd9accd06b828c3c1007add9d32723d",
                    children: a
                  }), (0, E.jsx)(tt, {
                    prevPage: ta,
                    prevBtnDisabled: $,
                    nextPage: ea,
                    nextBtnDisabled: D,
                    selectedItemNumber: Ce,
                    itemsData: o,
                    closeModalMode: oa,
                    inModalMode: oe,
                    controlsHidden: H
                  })]
                }), (0, E.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c54f31f5237995d05edfb79cc4e08a33",
                  "data-modal-mode": oe,
                  "data-is-dragging": $t,
                  style: {
                    transform: `translate3d(${Ne+Dt}px, 0, 0)`,
                    width: `${Oe}px`
                  },
                  ref: P,
                  children: pa
                })]
              })]
            })
          },
          PageTemplate: it(),
          ExpandingPlatformButton: c.A,
          TextCard: Oe,
          Deck: We,
          Grid: o.A,
          Hero: d.A,
          HighlightsItem: qe.HighlightsItem,
          HTMLElement: l.A,
          OrderedList: m.A,
          ParallaxInnerLayer: g.A,
          ParallaxOuterLayer: u.A,
          ParallaxWrapper: f.A,
          UnorderedList: p.A,
          ImageWithBadge: b.A,
          Carousel: n.A,
          GroupOfItems: S(),
          Rating: v.A,
          gen9: kt,
          TinaModuleFetchNRender: x.A,
          PromoModule: h.A,
          RockstarVideoPlayer: st(),
          Engagement: ct()
        },
        yt = {
          CalloutSection: s.A,
          Card: _e,
          CardWithImageGallery: Be,
          ConditionalBlock: i.A,
          CoverCard: Me,
          Carousel: n.A,
          ExpandingPlatformButton: c.A,
          Hero: d.A,
          Grid: o.A,
          TextCard: Oe,
          Deck: We,
          GroupOfItems: S(),
          ParallaxInnerLayer: g.A,
          ParallaxOuterLayer: u.A,
          ParallaxWrapper: f.A,
          PromoModule: h.A,
          Engagement: ct(),
          gen9: {
            BuyNow: ot.A,
            Disclaimer: lt.A,
            FAQ: mt.Ay,
            Guide: gt.A,
            GuideGroup: ut.A,
            GuideIntro: ft.A,
            GuideSection: pt.A,
            Hero: d.A,
            ImageTextGroupGroup: bt.A,
            LinkoutSection: ht.A,
            TinaWrapper: vt.A,
            UserVote: () => null
          },
          HTMLElement: l.A,
          OrderedList: m.A,
          UnorderedList: p.A,
          ImageWithBadge: b.A,
          Rating: v.A,
          TinaModuleFetchNRender: x.A,
          UserVote: k.A
        }
    },
    37109: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => h
      });
      var s = a(71403),
        n = a(26040),
        i = a.n(n),
        r = a(75638),
        c = a(14781),
        o = a(96717),
        d = a(42756),
        l = a(62811),
        m = a(26177),
        g = a(40207),
        u = a(76394);
      const f = (0, o.defineMessages)({
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
        p = "rockstargames-sites-gta-gen9b506e23d940f40d5c37eaad601382f65";
      var b = a(46632);
      i().registerPlugin(c.u), i().registerPlugin(r.useGSAP);
      const h = (0, d.withLocale)((e => {
        let {
          backgroundColor: t,
          cardsOrientation: n = "left"
        } = e;
        const [i, r] = (0, s.useState)(""), [c, h] = (0, s.useState)(void 0), {
          currentCharId: v
        } = (0, g.useRockstarUserState)(), {
          data: k
        } = (0, g.useRockstarUser)(), {
          track: x
        } = (0, g.useGtmTrack)(), {
          windowWidth: y
        } = (0, d.useWindowResize)(), _ = (0, o.useIntl)(), N = {
          "--promo-background": t ?? "var(--black-200)",
          "--promo-order": "left" === n ? "row" : "row-reverse"
        }, j = a(84465), S = () => {}, w = (0, u.A)().data, C = !!w?.length, T = (0, s.useMemo)((() => C ? ((e, t, a) => {
          const s = [];
          let n = 0;
          for (let t = 0; t < e.length && n < 12; t++) {
            const a = t % 3;
            Array.isArray(s[a]) || (s[a] = []), s[a].push(e[t]), n++
          }
          return s
        })(w.reduce(((e, t) => e.concat(t.subNavItems.filter((e => e.discoverSafe)))), []).sort(((e, t) => {
          const a = new Date(e.createdAt),
            s = new Date(t.createdAt);
          return e.createdAt && t.createdAt ? s.getTime() - a.getTime() : e.createdAt ? -1 : t.createdAt ? 1 : 0
        }))) : []), [C, w]), A = (0, s.useMemo)((() => (0, b.jsx)("img", {
          alt: _.formatMessage(f.discover_callout_mugshot, {
            userName: k?.nickname
          }),
          className: "rockstargames-sites-gta-gen9ffb5453a30a8c5d68070ae563656efc0",
          src: i || j,
          onError: S
        })), [i, j, _, k]), M = {
          event: "cta_learn",
          text: "track progress",
          link_url: "/gta-online/career-progress",
          element_placement: "discover page"
        };
        return (0, s.useEffect)((() => {
          const e = document.querySelector(`.${p}`);
          e?.clientHeight && h(e.clientHeight)
        }), [y]), (0, s.useEffect)((() => {
          if (k) {
            const {
              characters: e
            } = k;
            r(e?.gtao[v]?.mugshotUrl || "")
          }
        }), [v, k]), (0, b.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ddfe915c931cd932df5cdbdc77fa3a47",
          children: (0, b.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a7a317939644ffb10f67ad27c198ba83",
            style: N,
            children: [(0, b.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a0ce8d90be7ee4a73259dbcc4708dd97",
              "aria-label": _.formatMessage(f.discover_callout_cards_aria),
              children: C ? (0, b.jsx)("div", {
                className: "rockstargames-sites-gta-gen9a647165450b083aab8e1dd57c2f45c96",
                children: C && T.map(((e, t) => (0, b.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9d79f85b800486e9c17109b2db723aa1f",
                  style: {
                    "--packCard-height": c ? `${c}px` : "100px"
                  },
                  tabIndex: -1,
                  children: [e.map((e => (0, b.jsx)("img", {
                    className: p,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title))), e.map((e => (0, b.jsx)("img", {
                    className: p,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title)))]
                }, t)))
              }) : (0, b.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e81b2ea273605bbeff903c1dfdf17e27",
                children: (0, b.jsx)(m.A, {
                  type: "SPINNING"
                })
              })
            }), (0, b.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e83f1bee1ad8f8032b3b40400dc671b1",
              children: [A, (0, b.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9b51c01f415ca1ebb13dd7e56d10c2f32",
                children: [(0, b.jsx)("h3", {
                  className: "rockstargames-sites-gta-gen9e772c5f94ffe76be1ea92887c88c4bb3",
                  children: _.formatMessage(f.discover_callout_heading)
                }), (0, b.jsx)("p", {
                  children: _.formatMessage(f.discover_callout_description)
                })]
              }), (0, b.jsx)(l.A, {
                to: "/gta-online/career-progress",
                text: _.formatMessage(f.discover_callout_cta_label),
                onClick: M && (() => x({
                  ...M
                }))
              })]
            })]
          })
        })
      }))
    },
    5588: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        vinewoodClub: () => s
      });
      var s = a(46332)
    },
    36901: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Pause: () => n.default,
        Play: () => s.default
      });
      var s = a(30284),
        n = a(96492)
    },
    96492: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => n
      });
      var s = a(46632);
      const n = e => {
        let {
          alt: t = "",
          className: a = "",
          clipRule: n = "evenodd",
          fill: i = "white",
          fillRule: r = "evenodd",
          height: c = "20",
          viewBox: o = "0 0 20 20",
          width: d = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: a,
          height: c,
          width: d,
          viewBox: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("title", {
            children: t
          }), (0, s.jsx)("path", {
            fillRule: r,
            clipRule: n,
            d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
            fill: i
          }), (0, s.jsx)("path", {
            fillRule: r,
            clipRule: n,
            d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
            fill: i
          })]
        })
      }
    },
    66573: () => {},
    30284: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => n
      });
      var s = a(46632);
      const n = e => {
        let {
          alt: t = "",
          className: a = "",
          clipRule: n = "evenodd",
          fill: i = "white",
          fillRule: r = "evenodd",
          height: c = "20",
          viewBox: o = "0 0 20 20",
          width: d = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: a,
          height: c,
          width: d,
          viewBox: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("title", {
            children: t
          }), (0, s.jsx)("path", {
            fillRule: r,
            clipRule: n,
            d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
            fill: i
          })]
        })
      }
    },
    97101: () => {},
    94028: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => u
      });
      var s = a(71403),
        n = a(74401),
        i = a(40207),
        r = a(96717),
        c = a(42756),
        o = a(29107),
        d = a(72902),
        l = a(36901),
        m = a(82594),
        g = a(46632);
      const u = (0, c.withLocale)((e => {
        let {
          variant: t,
          videoSrc: c,
          fallbackImg: u,
          fallbackImgAlt: f,
          contentImgSrc: p,
          contentImgAlt: b,
          heading: h,
          subheading: v,
          ctaText: k,
          ctaLink: x,
          overlayColor: y
        } = e;
        const {
          track: _
        } = (0, i.useGtmTrack)(), N = (0, s.useRef)(null), [j, S] = (0, s.useState)(!1), w = (0, d.isReducedMotionPreferred)(), C = (0, n.useGetCdnSource)(p?.full_src ?? ""), T = (0, n.useGetCdnSource)(u), A = (0, o.getVideoUrl)(c), {
          formatMessage: M
        } = (0, r.useIntl)(), E = "image" === t || w;
        let P;
        (0, s.useEffect)((() => {
          const e = () => S(!0),
            t = () => S(!1),
            a = N.current;
          return a && (a.addEventListener("play", e), a.addEventListener("pause", t)), () => {
            a && (a.removeEventListener("play", e), a.removeEventListener("pause", t))
          }
        }), []);
        try {
          P = a(43207)(`.${A}`)
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
                  src: P,
                  type: "video/mp4"
                }), M(d.messages.video_hero_support_message)]
              }), (0, g.jsx)("button", {
                role: "button",
                className: m.default.heroVideoPlayPauseBtn,
                onClick: () => {
                  if (!E && N.current) {
                    let e = "";
                    j ? (N.current.pause(), e = "toggle pause") : (N.current.play(), e = "toggle play"), _({
                      event: "cta_other",
                      text: e,
                      element_placement: "hero"
                    }), S(!j)
                  }
                },
                "aria-hidden": !0,
                children: j ? (0, g.jsx)(l.Pause, {
                  alt: M(d.messages.video_hero_pause_button_label),
                  height: "24",
                  width: "24"
                }) : (0, g.jsx)(l.Play, {
                  alt: M(d.messages.video_hero_play_button_label),
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
          }), (p || h || v || k) && (0, g.jsx)("div", {
            className: m.default.heroContentWrapper,
            children: (0, g.jsxs)("div", {
              className: m.default.heroContent,
              children: [p && (0, g.jsx)("img", {
                className: m.default.heroContentImg,
                src: C ?? p,
                alt: b
              }), h && (0, g.jsx)("h1", {
                children: h
              }), v && (0, g.jsx)("h2", {
                children: v
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
    29107: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    88996: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => c
      });
      var s = a(55140),
        n = a(28089);
      const i = e => {
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
        r = e => {
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
            options: i({
              label: "-- Select Variant --"
            })
          }, {
            label: "Video",
            name: "videoSrc",
            description: "Select video for the Hero",
            component: "select",
            options: r({
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
    16108: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    72902: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        getVideoUrl: () => n.getVideoUrl,
        isReducedMotionPreferred: () => s.isReducedMotionPreferred,
        messages: () => i.default
      });
      var s = a(7230),
        n = a(16108),
        i = a(77936)
    },
    7230: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        isReducedMotionPreferred: () => s
      });
      const s = () => !("undefined" == typeof window || !window.matchMedia) && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    },
    77936: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => s
      });
      const s = (0, a(96717).defineMessages)({
        video_hero_support_message: {
          id: "video_hero_support_message",
          defaultMessage: "Your browser does not support video reproduction."
        },
        video_hero_play_button_label: {
          id: "video_hero_play_button_label",
          defaultMessage: "Play button"
        },
        video_hero_pause_button_label: {
          id: "video_hero_pause_button_label",
          defaultMessage: "Pause button"
        }
      })
    },
    72752: e => {
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
    41194: e => {
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
    30938: e => {
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
    35459: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => s
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
    82594: (e, t, a) => {
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
    22343: (e, t, a) => {
      var s = {
        "./left.svg": 40836,
        "./pc.svg": 96136,
        "./ps4.svg": 52132,
        "./ps5.svg": 49381,
        "./right.svg": 81419,
        "./x.svg": 737,
        "./xboxone.svg": 88568,
        "./xboxseriesxs.svg": 73080
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
      }, n.resolve = i, e.exports = n, n.id = 22343
    },
    43207: (e, t, a) => {
      var s = {
        "./assets": 5588,
        "./assets/": 5588,
        "./assets/index": 5588,
        "./assets/index.ts": 5588,
        "./assets/videos/default.mp4": 98283,
        "./assets/videos/vinewood-club.mp4": 46332,
        "./components": 36901,
        "./components/": 36901,
        "./components/index": 36901,
        "./components/index.ts": 36901,
        "./components/pause": 96492,
        "./components/pause/": 96492,
        "./components/pause/index": 96492,
        "./components/pause/index.tsx": 96492,
        "./components/pause/types": 66573,
        "./components/pause/types.ts": 66573,
        "./components/play": 30284,
        "./components/play/": 30284,
        "./components/play/index": 30284,
        "./components/play/index.tsx": 30284,
        "./components/play/types": 97101,
        "./components/play/types.ts": 97101,
        "./hero-video": 94028,
        "./hero-video.less": 82594,
        "./hero-video.tsx": 94028,
        "./hero-video.utils": 29107,
        "./hero-video.utils.ts": 29107,
        "./tina": 88996,
        "./tina.ts": 88996,
        "./utils": 72902,
        "./utils/": 72902,
        "./utils/get-video-url": 16108,
        "./utils/get-video-url.ts": 16108,
        "./utils/index": 72902,
        "./utils/index.ts": 72902,
        "./utils/is-reduced-motion-preferred": 7230,
        "./utils/is-reduced-motion-preferred.ts": 7230,
        "./utils/video-hero.local-messages": 77936,
        "./utils/video-hero.local-messages.ts": 77936
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
      }, n.resolve = i, e.exports = n, n.id = 43207
    },
    40836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    96136: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    52132: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    49381: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    81419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    88568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    73080: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    84465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    98283: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/7cfb24053cf0c7ee3c6454923c53ac28.mp4"
    },
    46332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/f7da4ca1b248290693c7cdfc89b8c369.mp4"
    },
    56675: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e50aff7a4148673983e493ca815454e.svg"
    }
  }
]);