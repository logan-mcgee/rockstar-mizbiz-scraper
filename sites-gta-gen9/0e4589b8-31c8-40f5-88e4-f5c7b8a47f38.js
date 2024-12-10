! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0e4589b8-31c8-40f5-88e4-f5c7b8a47f38", e._sentryDebugIdIdentifier = "sentry-dbid-0e4589b8-31c8-40f5-88e4-f5c7b8a47f38")
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
  [4825], {
    60207: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(55140),
        n = t(73379);
      const r = function() {
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
    93665: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => b,
        h: () => p
      });
      var s = t(71403),
        n = t(42756),
        r = t(64205),
        i = t(27926),
        c = t(74401),
        o = t(40207),
        l = t(89779);
      var d = t(46632);
      const m = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
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
            fadeIn: k = !0,
            cardIds: h,
            activeId: v,
            theme: x,
            title: _,
            gtm: y = {},
            aspectRatio: N = "default",
            cardDimensions: j
          } = a, {
            left: S,
            top: w
          } = u, C = h?.indexOf(v), [T, I] = (0, s.useState)(h?.length || 0), {
            track: M
          } = (0, o.useGtmTrack)(), E = null !== h && (h?.length || 0) > 1 && ("flag_bg" === x || "fob" === j?.size), [A, L] = (0, l.useSearchParams)(), [P, B] = (0, s.useState)(!1), [$, V] = (0, s.useState)(!1), [R, D] = (0, s.useState)(), O = e => {
            "number" == typeof e && h && e < h.length && e > -1 && (console.log("navigating to: ", e), L({
              info: h[e].toString()
            }))
          }, z = () => {
            const e = C > -1 ? C - 1 : 0;
            O(e), M({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: _,
              position: C
            })
          }, F = () => {
            const e = C > -1 ? C + 1 : 0;
            O(e), M({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: _,
              position: C
            })
          };
          (0, s.useEffect)((() => {
            I(h?.length || 0)
          }), [h?.length]), (0, s.useEffect)((() => {
            null !== C && null !== h && O(C)
          }), [C, h]), (0, s.useEffect)((() => {
            const e = h?.findIndex((e => e === v));
            "number" == typeof e && (V(e <= 0), B(e >= T - 1))
          }), [h, v]);
          const [H] = (0, s.useState)({
            y: w,
            x: S,
            top: 0,
            left: 0,
            width: b,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: E ? "0" : ""
          }), G = {
            opacity: 1
          }, W = (0, s.useRef)(null), U = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, q = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [X] = (0, s.useState)({
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
              x: U,
              y: U,
              top: U,
              left: U,
              width: U,
              height: U,
              border: U,
              background: {
                delay: .3
              }
            }
          }), [Y, K] = (0, s.useState)({
            initial: H,
            shown: X
          });
          (0, s.useEffect)((() => {
            K({
              initial: H,
              shown: X
            })
          }), [H, X]), (0, s.useEffect)((() => {
            const e = e => {
              "function" == typeof g && "Escape" === e.key && (g(), M({
                event: "modal_close",
                element_placement: _,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const Q = () => {
              "function" == typeof g && (g(), M({
                event: "modal_close",
                element_placement: _,
                ...y
              }))
            },
            Z = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const n = Z(s, a - 1);
                if (n) return n
              }
              return null
            },
            J = e => {
              if (ae?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return R?.queried ? a = R.element : (a = Z(e, 2), D({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = k ? 0 : 1,
            ae = (0, s.useRef)(null),
            te = (0, d.jsx)(i.motion.button, {
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
                Q()
              },
              onKeyDown: J,
              onKeyUp: J
            });
          let se = null;
          return se = r.Ay, (0, s.useMemo)((() => (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": E,
            "data-aspect-ratio": N,
            children: (0, d.jsx)(se, {
              children: (0, d.jsxs)("div", {
                children: [(0, d.jsx)(i.motion.div, {
                  className: "rockstargames-sites-gta-gen9c8632c630878ad16e637fe2b8db2f02c",
                  initial: {
                    opacity: 0
                  },
                  animate: G,
                  transition: U,
                  onClick: () => Q()
                }), E && (0, d.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9eeecb8dc782f382fc9d32d03ecc1a2a5",
                  children: [(0, d.jsxs)(i.motion.div, {
                    className: "rockstargames-sites-gta-gen9b6e3406cb9a52fc7583d5c74681e88bc",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: q,
                    children: [(0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: z,
                      disabled: $,
                      onKeyDown: J,
                      onKeyUp: J
                    }), (0, d.jsxs)("div", {
                      className: "rockstargames-sites-gta-gen9ff3c13d9dc1de9af609a1f99b4c47039",
                      "data-theme": x,
                      children: [" ", C + 1, (0, d.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9cd9c6033ad00894881fa5451acfe15da"
                      }), h?.length, " "]
                    }), (0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: F,
                      disabled: P,
                      onKeyDown: J,
                      onKeyUp: J,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, d.jsx)(i.motion.div, {
                  className: "rockstargames-sites-gta-gen9fab99cc2e2ca2e2a2158f9d41e764558",
                  ref: W,
                  initial: "initial",
                  animate: "shown",
                  variants: Y,
                  transition: U,
                  style: f,
                  children: (0, d.jsxs)(i.motion.div, {
                    className: (0, c.classList)("rockstargames-sites-gta-gen9b6aa5ebf680af5d95d0e9c76ac36ed82", n),
                    children: [!E && te, (0, d.jsx)(i.motion.div, {
                      className: (0, c.classList)("rockstargames-sites-gta-gen9d901631c0b9d817396c8352c027a2a0d", p),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: q,
                      ref: ae,
                      children: t
                    }), (0, d.jsx)("button", {
                      className: "rockstargames-sites-gta-gen9f1ecf74036b2b7fdfda3613619af40cf",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [t, C, f])
        },
        g = "modal-context",
        u = [null, () => null],
        f = window?.[g] ?? (window[g] = (0, s.createContext)(u)),
        p = () => (0, s.useContext)(f),
        b = e => {
          let {
            children: a
          } = e;
          const [t, r] = (0, s.useState)(u), {
            setBodyIsLocked: i
          } = (0, n.useBodyScrollable)("ModalProvider"), c = (0, s.useMemo)((() => t?.content ? (0, d.jsx)(m, {
            modal: t
          }) : null), [t]), o = () => i(!1);
          return (0, s.useEffect)((() => (window.addEventListener("popstate", o), () => {
            window.removeEventListener("popstate", o)
          })), []), (0, s.useEffect)((() => {
            i(!!c)
          }), [c]), (0, d.jsx)(f.Provider, {
            value: [c, r],
            children: a
          })
        }
    },
    71864: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(46632);
      const n = e => {
        let {
          brands: a = []
        } = e;
        return a.length ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c971935f2d1b31df55e6271635ef922a",
          children: a.map(((e, a) => {
            let {
              brand: t
            } = e;
            return (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c84499c22a2583d233091c60456f0287",
              "data-brand": t
            }, a)
          }))
        }) : null
      }
    },
    15186: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(89779),
        n = t(40207),
        r = t(35459),
        i = t(46632);
      const c = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: n,
            innerRef: r = null
          } = e;
          return (0, i.jsx)("button", {
            className: t,
            onClick: s,
            style: n,
            type: "button",
            ref: r,
            children: a
          })
        },
        o = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: r,
            to: c
          } = e;
          return (0, i.jsx)(s.NavLink, {
            className: t,
            onClick: n,
            style: r,
            to: c,
            children: a
          })
        },
        l = e => {
          let {
            altText: a = "",
            text: t,
            onClick: s,
            btnColor: l = "#fff",
            labelColor: d = "#000",
            type: m = "",
            icon: g,
            size: u,
            secondText: f,
            consoleBtn: p = !1,
            img: b,
            to: k = !1,
            gtm: h,
            innerRef: v = null
          } = e;
          const {
            track: x
          } = (0, n.useGtmTrack)(), _ = [r.A.plusButton, r.A[m] ?? "", r.A[u] ?? "", r.A[p] ?? ""].join(" "), y = {
            "--hvr-color": l ?? d,
            "--hvr-bg-color": d ?? l,
            "--hvr-border-color": l ?? d
          }, N = (0, i.jsxs)(i.Fragment, {
            children: [b ? (0, i.jsx)("img", {
              src: b,
              alt: a || t
            }) : "", (0, i.jsxs)("div", {
              className: r.A.btnText,
              icon: g,
              children: [t, f ? (0, i.jsx)("span", {
                children: f
              }) : ""]
            })]
          }), j = e => {
            s && s(e), h && x({
              event: "cta_other",
              text: t,
              ...h,
              link_url: k || ""
            })
          };
          if (k) {
            if (k.startsWith("http")) {
              const e = k.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, i.jsx)("span", {
                children: (0, i.jsx)("a", {
                  href: k,
                  className: _,
                  target: e,
                  onClick: j,
                  children: N
                })
              })
            }
            return (0, i.jsx)(o, {
              className: _,
              onClick: j,
              style: y,
              to: k,
              children: N
            })
          }
          return (0, i.jsx)(c, {
            className: _,
            onClick: j,
            style: y,
            innerRef: v,
            children: N
          })
        }
    },
    72877: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(74401),
        n = t(15186);
      var r = t(46632);
      const i = e => {
        let {
          buttons: a = [],
          className: t
        } = e;
        return a.length ? (0, r.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9a649ab228e5a522f6e9e981a54036652", t),
          children: a.map(((e, a) => {
            let {
              icon: t,
              to: s,
              title: i,
              gtm: c
            } = e;
            return i ? (0, r.jsx)(n.A, {
              className: "white",
              text: i,
              to: s,
              icon: t,
              gtm: c
            }, a) : ""
          }))
        }) : null
      }
    },
    99074: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => v
      });
      var s = t(71403),
        n = t(48331),
        r = t(355),
        i = t(47252),
        c = t(40207),
        o = t(49948),
        l = t(74401),
        d = t(81902),
        m = t(89269),
        g = t(15186);
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
      var f = t(35459),
        p = t(46632);
      const b = e => {
          let {
            className: a,
            images: t
          } = e;
          const s = (0, l.useGetCdnSource)(t?.mobile?.full_src ?? null),
            n = (0, l.useGetCdnSource)(t?.desktop?.full_src ?? s);
          return (0, p.jsxs)("div", {
            className: [a, u.responsiveImages].join(" "),
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
        k = e => {
          let {
            addedInfo: a = null,
            buynowbtn: r = null,
            description: i = null,
            images: o,
            links: l = [],
            title: m = null
          } = e;
          const {
            track: k
          } = (0, c.useGtmTrack)(), [h, v] = (0, s.useState)(!1), x = (0, s.useRef)(null), _ = {
            type: "spring",
            stiffness: 425,
            damping: 40
          }, y = {
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
                height: _
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
          }, w = {
            open: {
              cursor: "default",
              "--cta-border-color": "var(--white-15)",
              "--cta-background-color": "rgba(255,255,255,.1)",
              "--cta-background-color-noBlur": "var(--black-100)",
              gridGap: "var(--grid-gap-sm)",
              transition: _,
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
          return (0, p.jsx)(d.qr, {
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
                  animate: h ? "open" : "closed",
                  variants: j,
                  children: [(0, p.jsxs)("div", {
                    className: u.titleArea,
                    children: [(0, p.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: m
                      }
                    }), (0, p.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: i
                      }
                    })]
                  }), l.length ? (0, p.jsx)("div", {
                    className: u.platforms,
                    children: l.map(((e, a) => (0, p.jsx)("div", {
                      className: u[e.platform],
                      children: e.platform ? (0, p.jsx)("img", {
                        src: t(22343)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+a}`)))
                  }) : ""]
                }), a ? (0, p.jsx)(n.motion.p, {
                  className: u.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: a
                  },
                  animate: h ? "open" : "closed",
                  variants: j
                }) : "", r ? (0, p.jsxs)(n.motion.div, {
                  className: [u.ctaBtn, f.A.plusButton, h ? "" : u.closed].join(" "),
                  animate: h ? "open" : "closed",
                  variants: w,
                  initial: !1,
                  children: [(0, p.jsx)(n.motion.button, {
                    className: [u.ctaBtnText, f.A.btnText].join(" "),
                    animate: h ? "open" : "closed",
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
                      k({
                        event: "select_platform",
                        text: "select platform",
                        element_placement: `buy now > ${m}`
                      }), v(!h)
                    },
                    onAnimationComplete: () => {
                      x?.current?.focus()
                    },
                    children: r
                  }), h && (0, p.jsx)("button", {
                    type: "button",
                    className: u.closeBtn,
                    onClick: () => {
                      k({
                        event: "cta_other",
                        text: "close",
                        element_placement: `buy now > ${m} > select platform`
                      }), v(!1)
                    },
                    "aria-hidden": !h,
                    ref: x,
                    children: (0, p.jsx)("img", {
                      src: t(737),
                      alt: "Close menu button"
                    })
                  }), (0, p.jsx)(n.motion.div, {
                    className: [u.linksArea, h ? u.showLinks : ""].join(" "),
                    animate: h ? "open" : "closed",
                    variants: S,
                    initial: !1,
                    children: (0, p.jsx)("div", {
                      className: u.linkList,
                      children: l.length ? l.map(((e, a) => {
                        return (0, p.jsx)(g.A, {
                          type: "blackBtn",
                          size: "large",
                          img: t(22343)(`./${e.platform}.svg`),
                          consoleBtn: e.platform,
                          to: e.href,
                          altText: e?.altText,
                          onClick: (s = e.platform, n = e.href, () => {
                            k({
                              event: "cta_store_link",
                              text: s,
                              link_url: n,
                              element_placement: `buy now > ${m} > select platform`
                            })
                          }),
                          "aria-hidden": !h
                        }, `${e.platform+a}`);
                        var s, n
                      })) : ""
                    })
                  })]
                }) : ""]
              })]
            })
          })
        };
      k.displayName = "SwiperSlide";
      const h = {
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
        v = r.withFadeIn((0, i.A)((e => {
          let {
            cards: a = [],
            bottomText: t,
            topText: n,
            ...r
          } = e;
          const {
            track: i
          } = (0, c.useGtmTrack)(), {
            ref: l,
            inView: g
          } = (0, o.useInView)({
            threshold: .6
          }), [f, b] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            g && !f && (i({
              event: "page_section_impression",
              element_placement: r?._memoq?.topText?.toLowerCase()
            }), b(!0))
          }), [g]), (0, p.jsxs)("div", {
            className: u.buyNowArea,
            ref: l,
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
            }), a?.length ? (0, p.jsx)(d.RC, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${u.nextBtn}`,
                prevEl: `.${u.prevBtn}`
              },
              onSlideNextTransitionEnd: () => {
                i({
                  event: "carousel_next",
                  element_placement: n?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                i({
                  event: "carousel_previous",
                  element_placement: n?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                i({
                  event: "carousel_swipe",
                  element_placement: n?.toLowerCase() ?? ""
                })
              },
              modules: [m.Vx],
              breakpoints: h,
              children: a.map((e => (0, s.createElement)(k, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", t ? (0, p.jsx)("p", {
              className: u.bottomText,
              children: t
            }) : ""]
          })
        })))
    },
    5765: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(74401);
      var n = t(46632);
      const r = e => {
        let {
          disclaimer: a,
          text: t = null,
          title: r,
          className: i = "",
          style: c = {}
        } = e;
        const o = t ?? a?.text ?? null,
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
    47668: (e, a, t) => {
      "use strict";
      t.d(a, {
        Ay: () => p
      });
      var s = t(71403),
        n = t(32148),
        r = t(47252),
        i = t(40207),
        c = t(49948),
        o = t(33588),
        l = t(94430),
        d = t.n(l);
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
      var g = t(46632);
      const u = (0, s.forwardRef)(((e, a) => {
          let {
            children: t,
            className: s,
            ...r
          } = e;
          return (0, g.jsx)(o.Header, {
            className: m.accordionHeader,
            children: (0, g.jsxs)(o.Trigger, {
              ref: a,
              className: d()(m.accordionTrigger, s),
              ...r,
              children: [t, (0, g.jsx)(n.ChevronDownIcon, {
                className: m.accordionChevron,
                "aria-hidden": !0
              })]
            })
          })
        })),
        f = (0, s.forwardRef)(((e, a) => {
          let {
            children: t,
            className: s,
            ...n
          } = e;
          return (0, g.jsx)(o.Content, {
            className: d()(m.accordionContent, s),
            ...n,
            ref: a,
            children: (0, g.jsx)("div", {
              className: m.accordionContentText,
              children: t
            })
          })
        })),
        p = (0, r.A)((e => {
          let {
            buttonTxt: a,
            description: t,
            disclaimer: n,
            faqList: r = [],
            initialLength: l = 6,
            addedLength: d = 6,
            title: p,
            tinaModulesInfo: b
          } = e;
          const {
            track: k
          } = (0, i.useGtmTrack)(), [h, v] = (0, s.useState)(l), [x, _] = (0, s.useState)(void 0), [y, N] = (0, s.useState)(!1), j = (0, s.useRef)(null), S = (0, s.useRef)([]), {
            ref: w
          } = (0, c.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && k({
                event: "page_section_impression",
                element_placement: "faqs"
              })
            }
          });
          return (0, s.useEffect)((() => {
            if (y) {
              const e = h - d;
              S.current[e] && S.current[e].focus(), N(!1)
            }
          }), [h]), (0, g.jsxs)("div", {
            ref: w,
            className: m.faq,
            children: [(0, g.jsxs)("div", {
              className: m.faqArea,
              children: [p && (0, g.jsxs)("div", {
                children: [(0, g.jsx)("h3", {
                  children: b?.[0]?.title ?? p
                }), (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              }), (0, g.jsx)(o.Root, {
                className: m.accordionRoot,
                type: "single",
                collapsible: !0,
                value: x,
                onValueChange: e => {
                  let a = "",
                    t = null;
                  e ? (a = "cta_expand", t = parseInt(e, 10)) : (a = "cta_collapse", t = parseInt(x, 10)), k({
                    event: a,
                    text: `FAQ ${t}`,
                    position: t,
                    element_placement: "faqs"
                  }), _(e)
                },
                children: r.length ? r.slice(0, h).map(((e, a) => {
                  let {
                    question: t,
                    answer: s
                  } = e;
                  return (0, g.jsxs)(o.Item, {
                    className: m.accordionItem,
                    value: (a + 1).toString(),
                    children: [(0, g.jsx)(u, {
                      ref: e => S.current[a] = e,
                      children: t
                    }), (0, g.jsx)(f, {
                      children: (0, g.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: s
                        }
                      })
                    })]
                  }, a)
                })) : ""
              }), r.length > h && (0, g.jsx)("div", {
                className: m.viewMoreContent,
                children: (0, g.jsxs)("button", {
                  className: m.viewMore,
                  onClick: () => {
                    k({
                      event: "view_all",
                      text: "view more",
                      element_placement: "faqs"
                    }), v((e => e + d)), N(!0)
                  },
                  ref: j,
                  children: [(0, g.jsx)("span", {
                    children: a
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
    52842: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(65046);
      var n = t(46632);
      const r = e => {
        let {
          children: a,
          style: t
        } = e;
        return (0, n.jsx)(s.B, {
          children: (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9c0b74f4dbb581a79bf33d81b457bef59",
            style: t,
            "data-type": "guide",
            children: (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a72ddbbafc8a92f08cb4a174b5ebf4ca",
              children: a
            })
          })
        })
      }
    },
    57797: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(71403),
        n = t(54252),
        r = t.n(n),
        i = t(60285),
        c = t(68340),
        o = t(25180),
        l = t(28089),
        d = t(40207);
      var m = t(46632);
      const g = e => {
          let {
            guide: a,
            parentTitle: t,
            index: s
          } = e;
          const {
            track: n
          } = (0, d.useGtmTrack)();
          let c = {
            hero: {}
          };
          r().cloneDeepWith(a, ((e, a) => {
            "images" === a && (c = e)
          }));
          const {
            src: o
          } = (0, l.useImageParser)(c?.thumb ?? {});
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b40f08dc1045d471f902655ea561c15e",
            children: (0, m.jsxs)(i.A, {
              to: a.to,
              onClick: () => {
                n({
                  event: "card_click",
                  card_id: a.id,
                  card_name: a.title.toLowerCase(),
                  link_url: a.to,
                  position: s,
                  element_placement: t
                })
              },
              children: [(0, m.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${o?.mobile}) no-repeat center/cover`
                }
              }), (0, m.jsx)("h4", {
                children: a.title
              })]
            })
          })
        },
        u = e => {
          let {
            guides: a = {},
            tinaModulesInfo: t,
            title: n
          } = e;
          const i = r().map(a, "guide_id"),
            l = (0, o.X)({
              ids: i
            }),
            d = t?.[0]?.title ?? n,
            [u, f] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = l?.map(((e, a) => (0, m.jsx)(g, {
              guide: e,
              parentTitle: d,
              index: a
            }, e.id)));
            f(e)
          }), [l]), (0, m.jsx)(c.A, {
            size: "lg",
            slideChildren: u,
            title: d
          })
        }
    },
    2723: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(74401),
        n = t(89779),
        r = t(98436);
      var i = t(46632);
      const c = () => {
          const {
            guideId: e
          } = (0, n.useParams)(), a = (0, r.qj)(e, "<span></span>");
          return a ? (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9f1647fd28e5f0067e733c054be2c2424",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${a}`
            }
          }) : null
        },
        o = e => {
          let {
            hero: a
          } = e;
          const {
            alt: t,
            src: n = {}
          } = (0, s.useImageParser)(a) ?? {}, {
            mobile: r
          } = n;
          if (r) return (0, i.jsx)("div", {
            "aria-label": t,
            className: "rockstargames-sites-gta-gen9ddf4fadc9ce6250ad1864fa1dd63780c",
            role: "img",
            style: {
              background: `url(${r}) no-repeat center/contain`
            }
          })
        },
        l = e => {
          let {
            blurb: a,
            hero: t,
            title: s
          } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [t ? (0, i.jsx)(o, {
              hero: t
            }) : "", (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b06267934a8fc8ac84e510f131df16ae",
              children: [(0, i.jsx)(c, {}), (0, i.jsx)("h1", {
                children: s
              }), a && (0, i.jsx)("span", {
                className: "rockstargames-sites-gta-gen9f9e4e76ad2623c28b29786ba7af5ac87",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            })]
          })
        }
    },
    46585: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var s = t(71403),
        n = t(89779),
        r = t(54252),
        i = t.n(r),
        c = t(48331),
        o = t(60285),
        l = t(40207),
        d = t(98436);
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
      var g = t(46632);
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
            to: a,
            title: t,
            id_hash: n,
            query: r
          } = e;
          const {
            track: i
          } = (0, l.useGtmTrack)(), [c, u] = (0, s.useState)(n === r), {
            state: f
          } = (0, d.E_)(), {
            activeSection: p
          } = f;
          return (0, s.useEffect)((() => u(r !== p ? p === n : r === n)), [p]), (0, g.jsx)(o.A, {
            to: a,
            className: c ? m.activeSection : "",
            onClick: () => {
              i({
                event: "nav_click",
                element_placement: "guide nav"
              })
            },
            children: t
          }, a)
        },
        b = e => {
          let {
            sections: a
          } = e;
          const [t] = (0, n.useSearchParams)();
          return (0, g.jsx)("div", {
            className: m.sections,
            children: a?.map(((e, a) => {
              let {
                id_hash: s,
                title: n,
                to: r
              } = e;
              return (0, g.jsx)(p, {
                id_hash: s,
                query: t,
                title: n,
                to: r
              }, a)
            }))
          })
        },
        k = e => {
          let {
            currentId: a,
            group: t
          } = e;
          const [n, r] = (0, s.useState)(null), [l, p] = (0, s.useState)(null), {
            state: k
          } = (0, d.E_)(), {
            activeSection: h
          } = k;
          return (0, s.useEffect)((() => {
            const e = i().findIndex(t?.children, (e => {
              let {
                id_hash: t
              } = e;
              return t === a
            }));
            p(e), r(-1 !== e)
          }), [a, h, t]), (0, g.jsxs)("div", {
            className: m.guideList,
            children: [(0, g.jsx)("button", {
              type: "button",
              onClick: () => r(!n),
              children: t.title
            }), (0, g.jsx)(c.motion.nav, {
              animate: n ? "open" : "closed",
              variants: f,
              transition: u,
              children: t?.children?.map(((e, t) => {
                let {
                  children: s,
                  id_hash: n,
                  title: r,
                  to: i
                } = e;
                return (0, g.jsxs)("div", {
                  className: m.guide,
                  children: [(0, g.jsx)(o.A, {
                    className: [m.guideLink, a === n ? m.guideLinkCurrent : ""].join(" "),
                    to: i,
                    children: r
                  }), t === l && s?.length ? (0, g.jsx)(b, {
                    sections: s
                  }) : ""]
                }, r)
              }))
            })]
          })
        },
        h = e => {
          let {
            currentId: a
          } = e;
          const t = (0, d.hY)(),
            {
              state: {
                headerHeight: s,
                headerHidden: n
              }
            } = (0, d.E_)();
          return (0, g.jsx)("div", {
            className: [m.guideNav, n ? m.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${s}px`
            },
            children: t?.map((e => (0, g.jsx)(k, {
              currentId: a,
              group: e
            }, e.id_hash)))
          })
        }
    },
    1333: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(71403),
        n = t(49948),
        r = t(98436);
      var i = t(46632);
      const c = e => {
        let {
          style: a,
          children: t,
          __anchor: c = null
        } = e;
        const {
          announcePresence: o
        } = (0, r.Yh)(), {
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
          style: a,
          className: "rockstargames-sites-gta-gen9e46af541dffc51dc338509484cffa659",
          name: c,
          ref: l,
          children: t
        })
      }
    },
    33727: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(71403),
        n = t(355),
        r = t(74401),
        i = t(40207),
        c = t(49948),
        o = t(72877),
        l = t(71864),
        d = t(5765);
      var m = t(46632);
      const g = n.withFadeIn((e => {
        let {
          brands: a = [],
          content: t,
          ctas: n = [],
          disclaimer: g,
          image: u,
          large: f = !1,
          title: p,
          image_on_right: b = !1,
          style: k = {},
          className: h = "",
          ...v
        } = e;
        const {
          track: x
        } = (0, i.useGtmTrack)(), {
          ref: _,
          inView: y
        } = (0, c.useInView)({
          threshold: .6
        }), [N, j] = (0, s.useState)(!1), S = (0, r.useGetCdnSource)(u?.full_src ?? null) ?? null;
        return (0, s.useEffect)((() => {
          y && !N && (x({
            event: "page_section_impression",
            element_placement: v?._memoq?.title?.toLowerCase()
          }), j(!0))
        }), [y]), (0, m.jsxs)("div", {
          className: (0, r.classList)("rockstargames-sites-gta-gen9f6868d96e7b25bdb74435d0559970e75", f ? "rockstargames-sites-gta-gen9c9ca8e3e22865d04f816a0923489b124" : "", b ? "rockstargames-sites-gta-gen9f044d09bcae5bc48eef278aa1c8600a2" : "", S ? "" : "rockstargames-sites-gta-gen9a6ec7a3705521eae985d53eb2769018c", h),
          style: k,
          ref: _,
          children: [S ? (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9aa09f1e58f180b91c4f1795f60448086",
            style: {
              background: `url(${S}) no-repeat center/cover`
            }
          }) : "", (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ed0a185c4fc5fc35cfe58c069276b698",
            children: [(0, m.jsx)(l.A, {
              brands: a
            }), (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a459c55933f25ddf49dcacd16528b5c3",
              children: [(0, m.jsx)("h2", {
                className: "rockstargames-sites-gta-gen9cd300722ac259ea94696805dc5731984",
                children: p
              }), t ? (0, m.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c16cfdde0a10fcb97b4d20ffc8f09d71",
                dangerouslySetInnerHTML: {
                  __html: t
                }
              }) : ""]
            }), (0, m.jsx)(o.A, {
              ctas: n
            }), (0, m.jsx)(d.A, {
              disclaimer: g
            })]
          })]
        })
      }))
    },
    50562: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(74401),
        n = t(33727);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9f117df17a34d1837a4e2bb599a71f88d",
        selected: "rockstargames-sites-gta-gen9e8b6740b3aded532dfefbf06edf500ca",
        imageTextGroupGroup: "rockstargames-sites-gta-gen9d51265e78cba56a6119978e898e2a967",
        bg: "rockstargames-sites-gta-gen9d9d65419cc79c4fa43a6bc2571c552c7",
        bgMobile: "rockstargames-sites-gta-gen9b52f9f638a05d06d1c573dded0810212",
        bgDesktop: "rockstargames-sites-gta-gen9d6c821fe070e5eb41f1fba6178bd3571"
      };
      var i = t(46632);
      const c = e => {
        let {
          bg: a,
          image_text_groups: t = [],
          style: c = {},
          className: o = ""
        } = e;
        const l = (0, s.useGetCdnSource)(a?.image?.mobile?.full_src ?? null),
          d = (0, s.useGetCdnSource)(a?.image?.desktop?.full_src ?? null) ?? l;
        return t.length ? (0, i.jsxs)("div", {
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
          }) : "", t.map(((e, a) => (0, i.jsx)(n.A, {
            ...e
          }, a)))]
        }) : null
      }
    },
    37281: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(60285),
        n = t(74401);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9a218c6efb11f05af742c35731abd7f0e",
        selected: "rockstargames-sites-gta-gen9c9f11c19d7943dec1c872d1d921cd364",
        linkoutSection: "rockstargames-sites-gta-gen9f62388243285f747f07ef5d1be84ceb8",
        cta: "rockstargames-sites-gta-gen9eec30b6a686a74885da49d3cf33c1795"
      };
      var i = t(46632);
      const c = e => {
        let {
          text: a,
          cta: c,
          to: o,
          className: l = "",
          style: d = {}
        } = e;
        return (0, i.jsxs)(s.A, {
          className: (0, n.classList)(r.linkoutSection, l),
          to: o,
          style: d,
          children: [a && (0, i.jsx)("div", {
            className: r.text,
            children: a
          }), c && (0, i.jsxs)("div", {
            className: r.cta,
            children: [c, " ", (0, i.jsx)("img", {
              src: t(56675)
            })]
          })]
        })
      }
    },
    21027: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(71403);
      var n = t(42756),
        r = t(46632);
      const i = e => {
        let {
          children: a,
          style: t,
          theme: i
        } = e;
        const [c, o] = (0, s.useState)(i);
        return (0, s.useEffect)((() => {
          i && o(i)
        }), [i]), (0, r.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a691fa72d9c1962b69090f47fbb6eadf",
          style: (0, n.safeStyles)(t),
          "data-theme": c,
          children: a
        })
      }
    },
    24347: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(31879),
        n = t.n(s);
      var r = t(46632);
      const i = e => {
        let {
          id: a
        } = e;
        return (0, r.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f6130392c70daec4b6c7b3fb89ad8369",
          children: (0, r.jsx)(n(), {
            autoplay: !0,
            context: "embed",
            id: a,
            endBehavior: "stillframe",
            wrapper: !1,
            titleCrop: "2rem"
          })
        })
      }
    },
    84690: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        BrandMessage: () => r,
        BuyNow: () => i.A,
        ClaimCountdown: () => o,
        CommunityChallenges: () => d(),
        Disclaimer: () => g.A,
        DiscoverCallout: () => m.A,
        ElevatorPitch: () => B,
        FAQ: () => u.Ay,
        Guide: () => f.A,
        GuideGroup: () => p.A,
        GuideIntro: () => b.A,
        GuideNavDesktop: () => k.A,
        GuideSection: () => h.A,
        Hero: () => C,
        HeroVideo: () => $.default,
        ImageTextGroup: () => se.A,
        ImageTextGroupGroup: () => ne.A,
        LinkoutSection: () => re.A,
        Logo: () => ce,
        SectionTitle: () => oe,
        StickyColumn: () => U,
        Summary: () => Y,
        SummaryCard: () => K,
        Tile: () => J,
        TinaWrapper: () => le.A,
        TitleImage: () => O,
        ValueProp: () => te,
        VideoPlayerWrapper: () => de.A
      });
      var s = t(71864);
      var n = t(46632);
      const r = e => {
        let {
          brand: a,
          headline_left: t,
          headline_right: r,
          info: i
        } = e;
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9ebe7007f3b51b86e212449fb1dc61aec",
          children: [(0, n.jsx)(s.A, {
            brands: [{
              brand: a
            }]
          }), (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ae37f727f57beae0bd72b3e764cda36d",
            children: [(0, n.jsxs)("h2", {
              children: [t, " ", (0, n.jsx)("span", {
                children: r
              })]
            }), (0, n.jsx)("p", {
              children: i
            })]
          })]
        })
      };
      var i = t(99074),
        c = t(71403);
      const o = e => {
        let {
          left: a,
          right: t
        } = e;
        const [s, r] = (0, c.useState)(""), [i, o] = (0, c.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9b868510520ca3ebc97d9ce2ea9d2edf2",
          children: [(0, n.jsxs)("h2", {
            "aria-hidden": i,
            onMouseOver: () => {
              o(!0), r(`${a} ${t}`)
            },
            onMouseOut: () => {
              o(!1), r("")
            },
            onFocus: () => {},
            onBlur: () => {},
            tabIndex: 0,
            children: [a, " ", (0, n.jsx)("span", {
              children: t
            })]
          }), (0, n.jsx)("h2", {
            role: "status",
            "aria-live": "polite",
            className: "rockstargames-sites-gta-gen9abbffb6bf72ec54bb65fb37351644300",
            children: s
          })]
        })
      };
      var l = t(56123),
        d = t.n(l),
        m = t(37109),
        g = t(5765),
        u = t(47668),
        f = t(52842),
        p = t(57797),
        b = t(2723),
        k = t(46585),
        h = t(1333),
        v = t(68340),
        x = t(39695),
        _ = t(48331),
        y = t(74401),
        N = t(72877);
      const j = {
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
        S = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const r = (0, y.useGetCdnSource)(t ?? null),
            i = (0, y.useGetCdnSource)(s ?? r);
          return (0, n.jsx)("div", {
            className: j.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, n.jsx)("h5", {
              children: a
            })
          })
        },
        w = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [s, r] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            t && r(t.map((e => {
              if (!e?.shardImg) return;
              const {
                title: a,
                shardImg: t
              } = e, {
                mobile: s,
                desktop: r
              } = t;
              return (0, n.jsx)(S, {
                title: a,
                mobileImg: s?.full_src,
                desktopImg: r?.full_src
              }, a)
            })))
          }), [t]), s ? (0, n.jsx)("div", {
            className: j.shardsCarousel,
            children: (0, n.jsx)(v.A, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        C = e => {
          let {
            brands: a = [],
            backgroundImg: t,
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
          const f = (0, y.useGetCdnSource)(t?.mobile?.full_src ?? null),
            p = (0, y.useGetCdnSource)(t?.desktop?.full_src ?? f),
            b = (0, y.useGetCdnSource)(r?.mobile?.full_src ?? null),
            k = (0, y.useGetCdnSource)(r?.desktop?.full_src ?? b),
            h = {
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
            v = {
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
          return (0, n.jsxs)(_.motion.div, {
            className: (0, y.classList)(j.hero, u),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${k})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: h,
            children: [(0, n.jsxs)("div", {
              "data-testid": "hero",
              className: j.images,
              children: [p && f ? (0, n.jsx)("div", {
                className: j.background,
                style: t?.style ?? {}
              }) : "", b && k ? (0, n.jsx)("div", {
                className: j.layered
              }) : "", (0, n.jsx)("div", {
                className: j.gradient
              })]
            }), (0, n.jsxs)(_.motion.div, {
              className: j.content,
              initial: "hidden",
              animate: "visible",
              variants: h,
              children: [(0, n.jsx)(_.motion.div, {
                variants: v,
                children: (0, n.jsx)(s.A, {
                  brands: a
                })
              }), o.length ? (0, n.jsx)(_.motion.div, {
                variants: v,
                children: (0, n.jsx)(x.A, {
                  buttonText: c,
                  platformsAndLinks: o,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(_.motion.div, {
                      className: j.descriptions,
                      variants: v,
                      children: [(0, n.jsx)("h1", {
                        dangerouslySetInnerHTML: {
                          __html: d
                        }
                      }), (0, n.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: l
                        }
                      })]
                    }), i.length > 0 && (0, n.jsx)(_.motion.div, {
                      variants: v,
                      children: (0, n.jsx)(N.A, {
                        buttons: i,
                        className: j.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(_.motion.div, {
                  className: j.descriptions,
                  variants: v,
                  children: [(0, n.jsx)("h1", {
                    dangerouslySetInnerHTML: {
                      __html: d
                    }
                  }), (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: l
                    }
                  })]
                }), i.length > 0 && (0, n.jsx)(_.motion.div, {
                  variants: v,
                  children: (0, n.jsx)(N.A, {
                    buttons: i,
                    className: j.buttonGroup
                  })
                })]
              }), m && (0, n.jsx)(_.motion.div, {
                className: j.legalText,
                variants: v,
                children: (0, n.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: m
                  }
                })
              })]
            }), g?.shards && (0, n.jsx)(w, {
              ...g
            })]
          })
        };
      var T = t(31090),
        I = t(62811),
        M = t(42756),
        E = t(96717),
        A = t(66940);
      const L = (0, E.defineMessages)({
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
        B = (0, M.withLocale)((e => {
          let {
            title: a,
            description: t,
            disclaimer: s,
            cta: r
          } = e;
          const {
            formatMessage: i
          } = (0, E.useIntl)();
          return (0, n.jsxs)("div", {
            className: P.elevatorPitch,
            "data-testid": "elevator-pitch",
            children: [(0, n.jsxs)("div", {
              className: P.pitch,
              children: [(0, n.jsx)("h2", {
                className: P.title,
                children: a
              }), (0, n.jsx)("p", {
                className: P.description,
                children: t
              })]
            }), (0, n.jsxs)("div", {
              className: P.ctaLinksContainer,
              children: [(0, n.jsxs)("div", {
                className: P.ctaLinks,
                children: [(0, n.jsx)("div", {
                  className: P.buttonGroup,
                  children: r && (0, n.jsx)(y.TinaParser, {
                    components: {
                      Cta: T.A,
                      ExpandingPlatformButton: x.A,
                      Gen9Button: I.A
                    },
                    tina: {
                      payload: {
                        content: r
                      }
                    }
                  })
                }), (0, n.jsxs)("div", {
                  className: P.platformGroup,
                  children: [(0, n.jsx)("div", {
                    className: P.text,
                    children: (0, n.jsx)(E.FormattedMessage, {
                      ...L.elevator_pitch_available_on
                    })
                  }), (0, n.jsxs)("div", {
                    className: P.platforms,
                    children: [(0, n.jsx)("img", {
                      className: P.platformIcon,
                      src: (0, A.A)("ps5") || "",
                      alt: i(L.elevator_pitch_available_on_ps5)
                    }), (0, n.jsx)("img", {
                      className: P.platformIcon,
                      src: (0, A.A)("xboxseriesxs") || "",
                      alt: i(L.elevator_pitch_available_on_xbox)
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
      var $ = t(94028),
        V = t(62550),
        R = t(94430),
        D = t.n(R);
      const O = e => {
        let {
          imageSrc: a,
          imgTitle: t,
          description: s,
          cta: r
        } = e;
        const i = (0, y.useGetCdnSource)(a) ?? null,
          {
            isTablet: o
          } = (0, M.useWindowResize)(),
          [l, d] = (0, c.useState)(0);
        return (0, c.useEffect)((() => {
          d(o ? .5 * window.innerHeight : .25 * window.innerHeight)
        }), [o, window.innerHeight]), (0, n.jsxs)("figure", {
          className: "rockstargames-sites-gta-gen9ff6de3d17596f7d56f83302c8a3dd352",
          children: [(0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e887f05b18428646120596f3178947b0",
            style: {
              "--background-image": `url(${i})`
            },
            children: (0, n.jsx)("span", {
              className: D()("rockstargames-sites-gta-gen9b2b47e2d6ee2512546e0f91fb0fba7f0", "rockstargames-sites-gta-gen9ab16846895ba51a759f8c2df61943b0c"),
              children: (0, n.jsx)(V.A, {
                mode: "multi",
                className: "rockstargames-sites-gta-gen9c6d5d0140314e0df364f66b84fa159eb",
                forceSingleModeWidth: !0,
                max: l,
                children: (0, n.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9ed84de2e05da52ebe3360e86317be440",
                  dangerouslySetInnerHTML: t ? {
                    __html: t
                  } : void 0
                })
              })
            })
          }), (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9acbe4ededc81471065a3f292c2e1bb4a",
            children: [s && (0, n.jsx)("p", {
              className: "rockstargames-sites-gta-gen9d6d3ea75c1096656de004b0606df465d",
              children: s
            }), r && (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f7479f40675e07f1aa36e35a177f5aa4",
              children: (0, n.jsx)(y.TinaParser, {
                components: {
                  Cta: T.A,
                  ExpandingPlatformButton: x.A
                },
                tina: {
                  payload: {
                    content: r
                  }
                }
              })
            })]
          })]
        })
      };
      var z = t(80256),
        F = t(40207),
        H = t(49948);
      const G = {
          pillBtn: "rockstargames-sites-gta-gen9b96747e091c0ce36b60886a907fbf847",
          selected: "rockstargames-sites-gta-gen9c1682f9aeffb507f4b2efdebc95b1cab",
          gridLayout: "rockstargames-sites-gta-gen9a1d8c35931e5c1a50473d927fbfe49f2",
          leftColumn: "rockstargames-sites-gta-gen9c7191c86cb1d962197259bf74f36a21b",
          rightColumn: "rockstargames-sites-gta-gen9fe170e2263d9d14a17c07110bd4bee3c",
          stickyBlock: "rockstargames-sites-gta-gen9a35c3b659af9f58cf4134bc30572c35e",
          shadow: "rockstargames-sites-gta-gen9ff71d0b79549193178ee720c73bd4384"
        },
        W = e => {
          const [a, t] = (0, c.useState)(void 0);
          return (0, c.useEffect)((() => {
            t(!!e)
          }), [e]), a
        },
        U = e => {
          let {
            title: a,
            leftColumn: t,
            rightColumn: s,
            disableStickyOnDesktop: r,
            disableStickyOnMobile: i,
            id: o = ""
          } = e;
          const {
            track: l
          } = (0, F.useGtmTrack)(), {
            isTablet: d
          } = (0, M.useWindowResize)(), {
            ref: m
          } = (0, H.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && l({
                event: "page_section_impression",
                element_placement: a?.toLowerCase()
              })
            }
          }), g = (0, c.useRef)(null), u = (0, c.useRef)(null), f = W(r), p = W(i), b = (0, y.useTinaComponents)(), k = (0, c.useMemo)((() => ({
            ...b,
            HTMLElement
          })), [b]);
          return ((e, a, t) => {
            const s = (0, c.useCallback)((() => {
              if (e && a.current && t.current) {
                const e = a.current.getBoundingClientRect().bottom,
                  s = t.current.getBoundingClientRect().top;
                t.current.style.marginTop = s <= e ? "" + (e - s) : "0"
              }
            }), [e, a, t]);
            (0, c.useEffect)((() => (window.addEventListener("scroll", s), window.addEventListener("resize", s), () => {
              window.removeEventListener("scroll", s), window.removeEventListener("resize", s)
            })), [s])
          })(d, g, u), (0, n.jsx)(z.A, {
            thresholds: [.5, 1],
            onThresholdReached: e => {
              l({
                event: "page_section_scroll",
                element_placement: a?.toLowerCase(),
                scroll_depth: 100 * e + "%"
              })
            },
            children: (0, n.jsxs)("div", {
              className: D()(G.gridLayout),
              id: o,
              children: [(0, n.jsx)("div", {
                ref: g,
                className: G.leftColumn,
                style: {
                  "--desktop-position": f ? "relative" : "sticky",
                  "--mobile-position": p ? "relative" : "sticky"
                },
                children: (0, n.jsx)("div", {
                  ref: m,
                  className: G.stickyBlock,
                  children: t && (0, n.jsx)(y.TinaParser, {
                    components: k,
                    tina: {
                      payload: {
                        content: t
                      }
                    }
                  })
                })
              }), (0, n.jsx)("div", {
                ref: u,
                className: D()(G.rightColumn, d ? G.shadow : null, G.borderGrey),
                children: s && (0, n.jsx)(y.TinaParser, {
                  components: k,
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
      var q = t(63672);
      const X = {
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
        Y = e => {
          let {
            benefits: a
          } = e;
          return a?.length ? (0, n.jsx)("section", {
            className: D()(X.scrollableBlock, X.benefitsWrapper),
            children: (0, n.jsx)("div", {
              className: X.benefitsGroup,
              children: a.map((e => (0, n.jsxs)("div", {
                className: X.benefitsContent,
                children: [(0, n.jsx)("h3", {
                  className: X.heading,
                  children: e.title
                }), (0, n.jsx)(q.A, {
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
        K = (0, M.withLocale)((e => {
          let {
            title: a,
            description: t,
            imgSrc: s,
            cta: r
          } = e;
          const i = (0, y.useGetCdnSource)(s?.mobile),
            c = (0, y.useGetCdnSource)(s?.desktop) || i;
          return (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9bb445cecf9072d887768043c0ed55717",
            role: "article",
            children: [(0, n.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b01f3789df5f2bed586fa272fe5b55df",
              children: [(0, n.jsxs)("header", {
                className: "rockstargames-sites-gta-gen9ada2570443c81077d3c8dd1a9904e3b5",
                children: [a && (0, n.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9f797342d73dca9e769c698ef7ee3fefa",
                  children: a
                }), t && (0, n.jsx)("p", {
                  className: "rockstargames-sites-gta-gen9fd5b43e0287d1396697e60c426362164",
                  children: t
                })]
              }), r && (0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9fc4c0cfe6b642c7f34feb064c7ce1279",
                children: (0, n.jsx)(y.TinaParser, {
                  components: {
                    Cta: T.A,
                    ExpandingPlatformButton: x.A,
                    Gen9Button: I.A
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
                alt: a
              })
            })]
          })
        })),
        Q = {
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
        Z = e => {
          let {
            title: a,
            description: t,
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
          const p = (0, y.useGetCdnSource)(r?.mobile ?? null),
            b = (0, y.useGetCdnSource)(r?.desktop ?? p),
            k = (0, y.useGetCdnSource)(m ?? null),
            h = {
              background: l,
              backgroundSize: d,
              backgroundImage: m ? `url(${k})` : void 0,
              backgroundPosition: g,
              backgroundRepeat: u,
              ...f
            };
          return (0, n.jsxs)("article", {
            className: D()(Q.tile, [Q[`tile--${c}`]], [Q[o ? "fullBleed" : "contain"]], [Q[`tile--${i}`]]),
            style: {
              ...h
            },
            children: [r && (0, n.jsx)("div", {
              role: "img",
              className: Q.tile__image,
              "aria-label": r?.imgAlt || r?._memoq?.imgAlt,
              style: {
                "--background-image-desktop": `url(${b})`,
                "--background-image-mobile": `url(${p})`
              }
            }), (0, n.jsxs)("div", {
              className: D()(Q.tile__content),
              children: [a && (0, n.jsx)("h2", {
                className: Q.tile__title,
                children: a
              }), t && (0, n.jsx)("p", {
                className: Q.tile__description,
                children: t
              }), s && (0, n.jsx)("div", {
                className: Q.ctaBlock,
                children: (0, n.jsx)(y.TinaParser, {
                  components: {
                    Cta: T.A,
                    ExpandingPlatformButton: x.A
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
        J = (0, c.memo)(Z),
        ee = e => {
          let {
            src: a,
            alt: t
          } = e;
          const s = (0, y.useGetCdnSource)(a ?? null);
          return (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ba3f3d31b13fbc2a39aca4b2035670e9",
            children: (0, n.jsx)("img", {
              src: s,
              alt: t
            })
          })
        },
        ae = (0, c.memo)(ee),
        te = e => {
          let {
            name: a,
            valueProps: t,
            enableAnimation: s
          } = e;
          const {
            track: r
          } = (0, F.useGtmTrack)(), {
            ref: i
          } = (0, H.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && r({
                event: "page_section_impression",
                element_placement: a.toLowerCase()
              })
            }
          }), [o, l] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            l(t.map((e => {
              let {
                jumpToSectionId: a = ""
              } = e;
              return a
            })))
          }), [t]);
          const d = (0, c.useCallback)((e => {
            const t = e + 1;
            r({
              event: "card_click",
              card_id: t.toString(),
              card_name: `Card ${t}`,
              position: t,
              element_placement: a.toLowerCase()
            });
            const s = document?.getElementById(o[e] || "") || null;
            if (s) {
              const e = 20;
              window?.scrollTo({
                top: s?.getBoundingClientRect()?.top + window?.scrollY - e,
                behavior: "smooth"
              })
            }
          }), [t, o]);
          let m = "div";
          return m = "button", (0, n.jsx)("div", {
            ref: i,
            "data-animate": s,
            className: "rockstargames-sites-gta-gen9ac883cf395291a034c0c6065f9636504",
            children: t.map(((e, a) => (0, n.jsxs)("button", {
              className: "rockstargames-sites-gta-gen9f47b785957378c295f893b75cf01623b",
              onClick: () => d(a),
              children: [e?.iconImgSrc && (0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d75773fe36fb02bf0770bd0ce4ae8692",
                children: (0, n.jsx)(ae, {
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
      var se = t(33727),
        ne = t(50562),
        re = t(37281);
      const ie = {},
        ce = e => {
          let {
            brand: a
          } = e;
          return (0, n.jsx)("div", {
            className: ie[a]
          })
        },
        oe = () => (0, n.jsx)("h2", {
          children: "Section"
        });
      var le = t(21027),
        de = t(24347)
    },
    98436: (e, a, t) => {
      "use strict";
      t.d(a, {
        E_: () => r,
        Yh: () => i.Y,
        qj: () => g,
        hY: () => o,
        hI: () => d
      });
      var s = t(58407);
      const n = (0, s.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        r = () => {
          const e = (0, s.useReactiveVar)(n),
            a = e => {
              const a = {
                ...n(),
                ...e
              };
              n(a)
            };
          return {
            state: e,
            setBrand: e => {
              a({
                brand: e
              })
            },
            setHeaderHeight: e => {
              a({
                headerHeight: e
              })
            },
            setHeaderHidden: e => {
              a({
                headerHidden: e
              })
            },
            setMobileNavOpen: e => {
              a({
                mobileNavOpen: e
              })
            },
            setActiveSection: e => {
              a({
                activeSection: e
              })
            }
          }
        };
      var i = t(65046),
        c = t(41194);
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
      var l = t(71403);
      t(54252), t(6951);
      const d = () => {
        const [e, a] = (0, l.useState)([{
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
      t(40207);
      var m = t(30938);
      const g = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
        const [t, n] = (0, l.useState)(null), {
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
              title: a
            } = e;
            return a
          })).join(a))
        }), [r, a, e]), t
      }
    },
    65046: (e, a, t) => {
      "use strict";
      t.d(a, {
        B: () => d,
        Y: () => l
      });
      var s = t(71403),
        n = t(89779),
        r = t(70396),
        i = t(98436),
        c = t(46632);
      const o = (0, s.createContext)(),
        l = () => (0, s.useContext)(o),
        d = e => {
          let {
            children: a
          } = e;
          const [t, l] = (0, s.useState)(null), [d] = (0, n.useSearchParams)(), {
            setActiveSection: m
          } = (0, i.E_)(), {
            pauseUserShouldSeeMore: g
          } = (0, r.useScroll)(), u = (0, s.useCallback)((e => {
            if (e !== d.get("section")) return void m(e);
            const a = document.getElementsByName(d.get("section"))?.[0];
            a && (g(), m(d.get("section")), a.scrollIntoView({
              behavior: "auto"
            }))
          }), [d.get("section"), t]);
          (0, s.useEffect)((() => {
            d.get("section") && u(d.get("section"))
          }), [d.get("section")]);
          const f = (0, s.useMemo)((() => ({
            announcePresence: u,
            section: t,
            setSection: l
          })), [u, t, l]);
          return (0, c.jsx)(o.Provider, {
            value: f,
            children: a
          })
        }
    },
    6951: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => sr,
        componentsForTinaParserGuide: () => nr
      });
      var s = {};
      t.r(s), t.d(s, {
        CharacterCard: () => Gt.A,
        Menu: () => Ls,
        MenuButton: () => $s
      });
      var n = {};
      t.r(n), t.d(n, {
        Art: () => cn,
        Link: () => on
      });
      var r = {};
      t.r(r), t.d(r, {
        A: () => U.A,
        AlertDialog: () => Z,
        AudioPlayer: () => Ja,
        Badge: () => Le,
        Brands: () => M,
        Button: () => Ia.A,
        ButtonGroup: () => A,
        CalloutSection: () => i.A,
        Carousel: () => c.A,
        ConditionalBlock: () => b,
        CookieAB: () => nt,
        CountryInputField: () => st,
        Cta: () => k.A,
        DescriptionArea: () => rt.A,
        DiscountsBadge: () => it.A,
        DotLoader: () => ot,
        Dropdown: () => mt,
        Embed: () => ut,
        ExpandingPlatformButton: () => h.A,
        FadeInContent: () => pt,
        GameSiteHeader: () => kt,
        Gen9Button: () => E.A,
        Gen9CoreCarousel: () => C.A,
        Grid: () => _,
        HTMLElement: () => R,
        Hero: () => B,
        HookStore: () => g,
        ImageWithBadge: () => xe.A,
        InViewTracker: () => Ct.H,
        LanguageSelector: () => xt,
        LayeredImage: () => Nt,
        Lightbox: () => jt,
        LoadingAnimation: () => X.A,
        MultiSourceImage: () => Sa.A,
        NewswireBlocks: () => Rt,
        NewswireCard: () => Et,
        NewswireList: () => Pt,
        NewswireRelated: () => $t,
        NewswireTag: () => It,
        OrderedList: () => me.A,
        PackList: () => Dt.A,
        PackListMenu: () => Ot.A,
        Paging: () => Ht,
        ParallaxCacheBuster: () => be,
        ParallaxInnerLayer: () => ue,
        ParallaxOuterLayer: () => pe,
        ParallaxWrapper: () => he,
        ProfileSwitcher: () => s,
        PromoModule: () => ye,
        Rating: () => Ne.A,
        ResponsiveFlexBox: () => Rs,
        ResponsiveFlexItem: () => Os,
        ResponsiveGridBox: () => Fs,
        ResponsiveGridItem: () => Gs,
        ResponsiveImg: () => Us,
        ResponsiveSection: () => Xs,
        RockstarLogo: () => q,
        SafeHtml: () => Ks,
        ScrollSection: () => Qs.A,
        ScrollToTop: () => Zs,
        ScrollTracker: () => Ae,
        SearchBox: () => Js.A,
        Separator: () => en.A,
        Skeleton: () => an.A,
        SrcsetImage: () => wt,
        StorybookWrapper: () => tn,
        TextFit: () => sn.A,
        ThumbsGallery: () => Ra,
        TinaModuleFetchNRender: () => Ce.A,
        TinaWrapper: () => nn,
        TrackList: () => ja,
        UnorderedList: () => ve.A,
        UserVote: () => we,
        VideoCard: () => n,
        VideoCarousel: () => dn,
        VideoList: () => kn,
        VisuallyHidden: () => hn,
        Wasted: () => vn.A,
        framer: () => Te,
        useTinaModuleFetchByIds: () => Ce.X,
        withInViewTracker: () => Ct.r,
        withSearchbarErrorBoundary: () => xn.A,
        withSimpleErrorBoundary: () => _n.A
      });
      var i = t(55430),
        c = t(21450),
        o = t(71403),
        l = t(89779),
        d = t(42756),
        m = t(40207);
      const g = (0, t(86975).FF)();
      var u = t(46632);
      const f = e => e.some((e => !e)),
        p = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, n] = (0, o.useState)(!1), r = (e => {
            const [a] = (0, l.useSearchParams)(), [t, s] = (0, o.useState)(null), n = (0, m.useRockstarUser)(), {
              loggedIn: r
            } = n, {
              currentCharId: i
            } = (0, m.useRockstarUserState)(), c = (0, m.useIsUserGtaPlus)(n?.data, i);
            return (0, o.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              g.applyFilters("preview_conditions", e);
              const n = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (n.push(!0), !0) : (n.push(!1), !1);
                if (f(n)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    n.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    n.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    n.push(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    n.push(!1 === c);
                    break;
                  default:
                    n.push(!1)
                }
                return null
              })), s(!f(n)), () => {}
            }), [a, e, c, n, r]), t
          })(a);
          return (0, o.useEffect)((() => {
            n(r)
          }), [r]), (0, o.useMemo)((() => s ? t : null), [s])
        },
        b = (0, d.withTranslations)((e => {
          let {
            children: a
          } = e;
          return o.Children.map(o.Children.toArray(a), (e => (0, u.jsx)(p, {
            ...e?.props
          })))
        }));
      var k = t(31090),
        h = t(39695),
        v = t(26398),
        x = t(28089);
      const _ = e => {
        let {
          children: a,
          context: t = null,
          game: s,
          image: n = {},
          style: r = {},
          template: i = null,
          theme: c = null,
          reversedOnMobile: o = !1,
          className: l = "",
          id: m = null
        } = e;
        const g = (0, x.useImageParser)(n ?? {}),
          f = {
            ...r
          };
        if (g?.src?.desktop) {
          const e = (n?.style && n?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (n?.style && n?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (f.background = `url(${g?.src?.desktop}) ${a} ${t}`, n?.style && n?.style["--linear-gradient"]) f.background = `linear-gradient(${n?.style["--linear-gradient"]}), url(${g?.src?.desktop}) ${a} ${t}`;
          else if (n?.style && n?.style["--gradient-height"]) {
            const e = n?.style["--gradient-height"] || "3",
              s = n?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              r = n?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            f.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${g?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, u.jsx)("div", {
          id: m,
          className: (0, v.classList)("rockstargames-sites-gta-gen9f42b4606ed4a5b16b7647ad7b7eb229d", o ? "rockstargames-sites-gta-gen9b00444166ce6346d7ca364a75a335ecc" : "", l),
          "data-game": "community" === i ? null : s,
          style: (0, d.safeStyles)(f),
          "data-context": t,
          "data-template": i,
          "data-theme": c,
          children: a
        })
      };
      var y = t(27926),
        N = t(74401);
      const j = {
          pillBtn: "rockstargames-sites-gta-gen9d008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-gta-gen9be9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-gta-gen9d1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-gta-gen9c9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-gta-gen9a271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-gta-gen9ae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-gta-gen9f663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-gta-gen9f9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-gta-gen9d1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-gta-gen9fb373367ffd03ba01edaf671175244ab",
          ctaBlock: "rockstargames-sites-gta-gen9d4e5e627f7968400413c3b578b1b3143",
          verticalCtaBlock: "rockstargames-sites-gta-gen9a92d2eedbf7a04ac945877a52970eb9c",
          primaryBtn: "rockstargames-sites-gta-gen9ff921058c7bbf6660b52da746e719577",
          secondaryBtn: "rockstargames-sites-gta-gen9a0c587b1487e33b081dc394dfd017fab",
          btnText: "rockstargames-sites-gta-gen9be305ab9e2c27b1458d3e7bb6a9f12e0",
          legalText: "rockstargames-sites-gta-gen9f625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-gta-gen9e999b9cecfe233bcee8cab8682fb96bf"
        },
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
        w = {
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
      var C = t(68340);
      const T = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const n = (0, N.useGetCdnSource)(t ?? null),
            r = (0, N.useGetCdnSource)(s ?? n);
          return (0, u.jsx)("div", {
            className: j.shard,
            style: {
              "--background-image-mobile": `url(${n})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, u.jsx)("h5", {
              children: a
            })
          })
        },
        I = e => {
          let {
            title: a = "Membership Rewards",
            name: t = "Membership Rewards",
            shards: s
          } = e;
          const [n, r] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            s && r(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: n,
                desktop: r
              } = s;
              return e.push((0, u.jsx)(T, {
                title: t,
                mobileImg: n?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [s]), n ? (0, u.jsx)("div", {
            className: j.shardsCarousel,
            children: (0, u.jsx)(C.A, {
              title: a,
              name: t,
              slideChildren: n,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        M = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c894fe869384587702b5370da072be86",
                "data-brand": t
              }, a)
            }))
          }) : null
        };
      var E = t(62811);
      const A = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, u.jsx)("div", {
            className: (0, N.classList)("rockstargames-sites-gta-gen9b411a36e7fd12ab75861fe560b31b206", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: n
              } = e;
              return s ? (0, u.jsx)(E.A, {
                icon: t,
                text: s,
                to: n
              }, a) : ""
            }))
          }) : null
        },
        L = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [n, r] = (0, o.useState)([]), [i, c] = (0, o.useState)([]);
          return (0, o.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: a
            } = t.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }) : e.plainButtonsArray.push({
              icon: a.platform ?? "",
              title: a.buttonText,
              to: a.href
            }), e)), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            r(e), c(a)
          }), [t]), n.length ? (0, u.jsx)(y.motion.div, {
            variants: a ? w : void 0,
            children: (0, u.jsx)(h.A, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: n,
              children: !!i.length && (0, u.jsx)(y.motion.div, {
                variants: w,
                children: (0, u.jsx)(A, {
                  buttons: i,
                  className: j.buttonGroup
                })
              })
            })
          }) : (0, u.jsx)(u.Fragment, {
            children: !!i.length && (0, u.jsx)(y.motion.div, {
              variants: w,
              children: (0, u.jsx)(A, {
                buttons: i,
                className: j.buttonGroup
              })
            })
          })
        },
        P = e => {
          let {
            animated: a = !1,
            brands: t = [],
            cta: s = [],
            ctas: n = [],
            description: r = "",
            expandingButtonLabel: i = "Subscribe",
            legalText: c,
            stackButtons: o,
            title: l = ""
          } = e;
          return (0, u.jsxs)(y.motion.div, {
            className: j.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? S : void 0,
            children: [(0, u.jsx)(y.motion.div, {
              variants: a ? w : void 0,
              children: (0, u.jsx)(M, {
                brands: t
              })
            }), (l || r) && (0, u.jsxs)(y.motion.div, {
              className: j.descriptions,
              variants: a ? w : void 0,
              children: [l && (0, u.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: l
                }
              }), r && (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              })]
            }), !!s.length && (0, u.jsx)("div", {
              className: o ? j.verticalCtaBlock : j.ctaBlock,
              children: (0, u.jsx)(N.TinaParser, {
                components: {
                  Cta: k.A,
                  ExpandingPlatformButton: h.A
                },
                tina: {
                  payload: {
                    content: s
                  }
                }
              })
            }), !!n.length && (0, u.jsx)("div", {
              className: j.ctaBlock,
              children: (0, u.jsx)(L, {
                animated: a,
                ctas: n,
                expandingButtonLabel: i
              })
            }), c && (0, u.jsx)(y.motion.div, {
              className: j.legalText,
              variants: a ? w : void 0,
              children: (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              })
            })]
          })
        },
        B = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: n,
            ctas: r = [],
            cta: i,
            description: c = "",
            expandingButtonLabel: l = "Subscribe",
            layeredImage: m,
            layeredImageSettings: g,
            legalText: f,
            shardsSection: p = {},
            stackButtons: b = !1,
            theme: k = "gen9",
            title: h = ""
          } = e;
          const {
            breakpoints: v,
            windowWidth: x
          } = (0, d.useWindowResize)(), _ = v.xxl.min, w = (e => {
            if (!e) return null;
            const a = {},
              t = new Map([
                ["xsmall", "xs"],
                ["small", "sm"],
                ["medium", "md"],
                ["large", "lg"],
                ["xlarge", "xl"],
                ["horizontal", "--layered-horizontal-offset-"],
                ["vertical", "--layered-vertical-offset-"],
                ["imageWidth", "--layered-image-width-"]
              ]);
            return Object.entries(e).forEach((e => {
              const [s, n] = e;
              if (t.has(s)) {
                const e = t.get(s);
                Object.entries(n).forEach((n => {
                  const [r, i] = n;
                  if (t.has(s) && t.has(r)) {
                    const s = `${t.get(r)}${e}`;
                    a[s] = "imageWidth" !== r ? i ? `${i}px` : "0px" : i ? `${i}vw` : "100vw"
                  }
                }))
              }
            })), a
          })(g), C = (0, N.useGetCdnSource)(t?.mobile?.full_src ?? null), T = (0, N.useGetCdnSource)(t?.desktop?.full_src ?? C), M = (0, N.useGetCdnSource)(m?.mobile?.full_src ?? null), E = (0, N.useGetCdnSource)(m?.desktop?.full_src ?? M), A = (0, o.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: a,
              style: s
            } = t ?? {};
            return {
              ...s,
              ...x >= _ ? a : e
            }
          }), [x, t?.style, t?.mobileStyle, t?.desktopStyle]);
          return (0, u.jsxs)(y.motion.div, {
            className: (0, N.classList)(j.hero, n),
            style: {
              "--background-image-desktop": `url(${T})`,
              "--background-image-mobile": `url(${C})`,
              "--layered-image-desktop": `url(${E})`,
              "--layered-image-mobile": `url(${M})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? S : void 0,
            "data-type": "hero",
            theme: k,
            children: [(0, u.jsxs)("div", {
              className: j.images,
              children: [T && C ? (0, u.jsx)("div", {
                className: j.background,
                style: A ?? {}
              }) : "", M && E ? (0, u.jsx)("div", {
                className: j.layered,
                style: g ? w : {}
              }) : "", (0, u.jsx)("div", {
                className: j.gradient
              })]
            }), (0, u.jsx)(P, {
              animated: a,
              brands: s,
              cta: i,
              ctas: r,
              description: c,
              expandingButtonLabel: l,
              legalText: f,
              stackButtons: b,
              title: h
            }), p?.shards && (0, u.jsx)(I, {
              ...p
            })]
          })
        };
      var $ = t(54252),
        V = t.n($);
      const R = e => {
        let {
          attributes: a = {},
          children: t,
          className: s = "",
          id: n = "",
          style: r = {}
        } = e;
        return (0, u.jsx)("span", {
          className: (0, N.classList)(s, a?.className, "rockstargames-sites-gta-gen9a7f106a8036d74ed9282a741476c6b5a"),
          id: n,
          style: (0, d.safeStyles)(r ?? a?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: V().unescape(t)
          }
        })
      };
      var D = t(58407),
        O = t(96717),
        z = t(13963),
        F = t(11669),
        H = t(20066),
        G = t(49948),
        W = t(99096),
        U = t(60285);
      const q = e => {
        let {
          disableLink: a,
          className: t
        } = e;
        const s = a ? "span" : U.A;
        return (0, u.jsx)(s, {
          className: [a ? "rockstargames-sites-gta-gen9ba0c20f78999975dfb8d9cff0de44b34" : "rockstargames-sites-gta-gen9e5e749488d1daa3beceb8931e09f14e5", t || ""].join(" "),
          alt: "Rockstar Games Home",
          ...!a && {
            to: "/"
          }
        })
      };
      var X = t(26177);
      const Y = {
          pillBtn: "rockstargames-sites-gta-gen9c9f730df1672c23262c63f94855e2c1f",
          selected: "rockstargames-sites-gta-gen9bd235351695ea49ca8a40a734be762f3",
          dialogButton: "rockstargames-sites-gta-gen9e3f58ed639bd7c31165cb9e56fb67a3b",
          primary: "rockstargames-sites-gta-gen9ff6f35f6658334275d17af3aadc230e9",
          secondary: "rockstargames-sites-gta-gen9a6e0c90773658027b6dfc0f5be87b91f"
        },
        K = e => {
          let {
            button: a,
            closeDialog: t,
            style: s = "primary"
          } = e;
          const {
            buttonIcon: n,
            buttonText: r,
            extraClasses: i,
            isDisabled: c,
            isLink: o,
            link: l,
            onClick: d,
            testId: m
          } = a;
          return o ? r && (0, u.jsx)("a", {
            className: [Y.dialogButton, Y.link, Y[s], i].join(" "),
            href: l,
            ...m && {
              "data-testid": m
            },
            children: r
          }) : (0, u.jsx)("button", {
            className: [Y.dialogButton, Y[s], i].join(" "),
            disabled: c,
            onClick: e => (e => {
              d && d(), t && t(), e.stopPropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": r,
            ...m && {
              "data-testid": m
            },
            children: (0, u.jsxs)("span", {
              children: [r, n && (0, u.jsx)("div", {
                className: Y.ctaIcon
              })]
            })
          })
        },
        Q = {
          pillBtn: "rockstargames-sites-gta-gen9a6596047538a8c7840c9b519e55d4b4c",
          selected: "rockstargames-sites-gta-gen9c23a38d9820d9c6f6ffc8cf494cca67b",
          dialog: "rockstargames-sites-gta-gen9a0524e2689bf1ac5eb313d6f39b15e49",
          "slide-up": "rockstargames-sites-gta-gen9faf82701babd6fd15f45b869930ce6d5",
          "fade-in": "rockstargames-sites-gta-gen9a203c39ccc49f119b1904803946daeb5",
          heading: "rockstargames-sites-gta-gen9ea50c6a81d2a6c75a340cf9a5034f325",
          message: "rockstargames-sites-gta-gen9f6957cb9bdbc99eedd86a736458efee1",
          icon: "rockstargames-sites-gta-gen9c3cc73e6852a0d0dd82680cfd5bb93bf",
          check: "rockstargames-sites-gta-gen9ebed32283c454e37e020357dd0abb7f3",
          error: "rockstargames-sites-gta-gen9c8e61f39248404819185359c324e35c8",
          mail: "rockstargames-sites-gta-gen9e670856605362c02bdd8110f5b382ff8",
          content: "rockstargames-sites-gta-gen9cd8f41fce68356058aaff9164d1b6665",
          actions: "rockstargames-sites-gta-gen9d46819e82811cd9791bb9ecb9790acc7"
        },
        Z = e => {
          let {
            icon: a,
            title: t,
            secondaryText: s,
            buttons: n,
            showDialog: r,
            onClose: i = (() => {}),
            closeOnOutsideClick: c = !0,
            extraClasses: l
          } = e;
          const m = (0, o.useRef)(null),
            {
              setBodyIsLocked: g
            } = (0, d.useBodyScrollable)("AlertDialog");
          (0, o.useEffect)((() => {
            r && m?.current && (m.current?.showModal?.(), g(!0))
          }), [r]);
          const f = () => {
            g(!1), i(), m.current?.close?.()
          };
          if (r) return (0, u.jsxs)("dialog", {
            ref: m,
            className: Q.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && c && (g(!1), i(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [a && (0, u.jsx)("i", {
              className: [Q.icon, Q[a]].join(" ")
            }), (0, u.jsxs)("div", {
              className: [Q.content, l?.content].join(" "),
              children: [(0, u.jsx)("h3", {
                className: [Q.heading, l?.heading].join(" "),
                children: t
              }), s && (0, u.jsx)("div", {
                className: [Q.message, l?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), n && (0, u.jsx)("div", {
              className: Q.actions,
              children: n.slice(0, 2).map(((e, a) => (0, u.jsx)(K, {
                style: 0 === a ? "primary" : "secondary",
                button: e,
                closeDialog: f
              }, e.buttonText)))
            })]
          })
        },
        J = (0, O.defineMessages)({
          ns_cta_title: {
            id: "ns_cta_title",
            defaultMessage: "Subscribe to the Rockstar Games Email List"
          },
          ns_cta_text: {
            id: "ns_cta_text",
            defaultMessage: "Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates."
          },
          ns_cta_button_text: {
            id: "ns_cta_button_text",
            defaultMessage: "Subscribe Now"
          },
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details: {
            id: "ns_successfully_subscribed_details",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details: {
            id: "ns_already_subbed_details",
            defaultMessage: "You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            defaultMessage: "No, Go Back"
          }
        });
      var ee = t(94430),
        ae = t.n(ee);
      const te = {
          pillBtn: "rockstargames-sites-gta-gen9fe1e19d4715e46d1219834aa6f5c02ba",
          selected: "rockstargames-sites-gta-gen9d85172a9e6bcf26db05bceb98600f6da",
          fadeIn: "rockstargames-sites-gta-gen9b62cff472069854b3094179cb07a5cc7",
          subBtn: "rockstargames-sites-gta-gen9cae493601251b989e238df13fb653466",
          "fade-in": "rockstargames-sites-gta-gen9e600b9ff8fe4666a28f2a6586bb02897",
          primaryBtn: "rockstargames-sites-gta-gen9be68b638d8970788b83af533acaa76ef",
          newsletterSubscription: "rockstargames-sites-gta-gen9cf5a054ffdbd07e67f67a15ebfd7fcbf",
          banner: "rockstargames-sites-gta-gen9b9c9f4201c6d0d96eb7221644dad832e",
          heading: "rockstargames-sites-gta-gen9cedde09fdf5a35e01ac05eb623ff12d6",
          copy: "rockstargames-sites-gta-gen9d8a4a570962f3580ab7988e8319a8916",
          newsletterSubBtn: "rockstargames-sites-gta-gen9e56c8ebff47c22c23a4c748fd745041e",
          inner: "rockstargames-sites-gta-gen9ba75064526f5890568343ee1fea65e25",
          body: "rockstargames-sites-gta-gen9b6ca37303d3ca5171301ae03290b3ddf",
          isLoading: "rockstargames-sites-gta-gen9d287edd2d80932028db61b19d9ed9075",
          buttonLoader: "rockstargames-sites-gta-gen9c2e0c4c65d7fd72c8093b6b77ae86f7f"
        },
        se = e => {
          let {
            loading: a,
            loggedIn: t,
            urls: s,
            handleSubscribeButton: n,
            isButtonLoading: r,
            showDialog: i,
            setShowDialog: c,
            dialog: d,
            isSubscribed: g
          } = e;
          const [f, p] = (0, o.useState)(!1), b = (0, O.useIntl)(), {
            track: k
          } = (0, m.useGtmTrack)(), {
            ref: h,
            inView: v
          } = (0, G.useInView)({
            threshold: .6
          }), x = d?.buttons || [{
            buttonText: b.formatMessage(J.ns_ok_button_text),
            onClick: () => {
              c(!1)
            },
            extraClasses: te.alertBtnClass,
            ctaClasses: te.ctaText,
            testId: "ok-btn"
          }, {
            buttonText: d?.showManagePreferences ? b.formatMessage(J.ns_manage_prefs_button_text) : "",
            isLink: !0,
            link: s.preferences,
            extraClasses: te.alertLinkClass,
            testId: "preferences-btn"
          }];
          return (0, o.useEffect)((() => {
            v && !f && (k({
              event: "page_section_impression",
              section_layout: t ? "signed in" : "signed out",
              element_placement: "newsletter subscribe"
            }), p(!0))
          }), [v]), (0, u.jsxs)(u.Fragment, {
            children: [!g && (0, u.jsx)("div", {
              className: ae()(te.newsletterSubscription),
              "data-testid": "news-sub-banner",
              ref: h,
              children: (0, u.jsx)("section", {
                className: te.banner,
                children: (0, u.jsx)("div", {
                  className: te.inner,
                  children: a ? (0, u.jsx)(X.A, {}) : (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(q, {
                      disableLink: !0,
                      className: te.fadeIn
                    }), (0, u.jsxs)("div", {
                      className: te.body,
                      children: [(0, u.jsx)(W.Heading, {
                        level: 4,
                        className: [te.heading, te.fadeIn].join(" "),
                        children: (0, u.jsx)(O.FormattedMessage, {
                          ...J.ns_cta_title
                        })
                      }), (0, u.jsx)(W.Paragraph, {
                        className: [te.copy, te.fadeIn].join(" "),
                        children: (0, u.jsx)(O.FormattedMessage, {
                          ...J.ns_cta_text
                        })
                      })]
                    }), t ? (0, u.jsxs)(W.Button, {
                      size: "MD",
                      appearance: "secondary",
                      allCaps: !0,
                      onPress: n,
                      className: te.newsletterSubBtn,
                      isDisabled: r,
                      "data-testid": "sub-btn",
                      children: [(0, u.jsx)(O.FormattedMessage, {
                        ...J.ns_cta_button_text
                      }), r && (0, u.jsx)("div", {
                        className: te.buttonLoader,
                        children: (0, u.jsx)(X.A, {})
                      })]
                    }) : s?.auth && (0, u.jsx)(l.Link, {
                      className: ae()(te.btnPrimary, te.newsletterSubBtn),
                      to: s.auth,
                      "data-testid": "sub-link",
                      onClick: () => {
                        k({
                          event: "cta_subscribe_news",
                          section_layout: "signed out",
                          element_placement: "newsletter subscribe",
                          text: "subscribe now",
                          link_url: s.auth
                        })
                      },
                      children: (0, u.jsx)(O.FormattedMessage, {
                        ...J.ns_cta_button_text
                      })
                    })]
                  })
                })
              })
            }), d && (0, u.jsx)(Z, {
              icon: d.icon,
              title: b.formatMessage(d.heading),
              secondaryText: b.formatMessage(d.bodyText),
              closeOnOutsideClick: d.closeOnOutsideClick,
              buttons: [{
                ...x[0]
              }, {
                ...x[1]
              }],
              showDialog: i,
              onClose: () => c(!1),
              extraClasses: {
                dialog: te.dialog,
                title: te.title,
                content: te.content
              }
            })]
          })
        };
      var ne = t(84847);
      const re = {
          SUCCESS: {
            icon: "check",
            heading: J.ns_successfully_subscribed_title,
            bodyText: J.ns_successfully_subscribed_details,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: J.ns_check_email_title,
            bodyText: J.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: J.ns_error_preferences_title,
            bodyText: J.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: J.ns_error_generic_title,
            bodyText: J.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: J.ns_already_subbed_title,
            bodyText: J.ns_already_subbed_details,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: J.ns_confirm_after_register_title,
            bodyText: J.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: J.ns_confirm_title,
            bodyText: J.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        ie = {
          0: re.ERROR_PREFERENCES,
          1: re.SUCCESS,
          2: re.ERROR_PREFERENCES,
          3: re.ERROR_PREFERENCES,
          4: re.ERROR_GENERIC
        },
        ce = (0, D.makeVarNamespace)("@rockstargames/buildtime/newslettersubscription")("subscriptionStatusReactive", null),
        oe = e => ce(e),
        le = (e, a, t) => {
          const [s, n] = (0, o.useState)(), [r, i] = (0, o.useState)(!1), [c, l] = (0, o.useState)(!1), [g, u] = (0, o.useState)(!1), [f, p] = (0, o.useState)(!1), b = (0, D.useReactiveVar)(ce), k = (0, O.useIntl)(), {
            track: h
          } = (0, m.useGtmTrack)(), v = {
            preferences: `https://${e.sc}.rockstargames.com/settings/email`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          }, x = e => {
            n(e), l(!0)
          }, _ = {
            ...re.NEW_ACCOUNT,
            closeOnOutsideClick: !1,
            buttons: [{
              buttonText: k.formatMessage(J.ns_yes_subscribe_text),
              onClick: () => {
                y()
              }
            }, {
              buttonText: k.formatMessage(J.ns_go_back_text),
              onClick: () => {
                n(null), l(!1)
              }
            }]
          }, y = async () => (h({
            event: "cta_subscribe_news",
            section_layout: a.loggedIn ? "signed in" : "signed out",
            element_placement: "newsletter subscribe",
            text: "subscribe now"
          }), a.loggedIn || (window.location.href = v.auth), a.loggedIn && a.isAMinor ? (x(re.ERROR_GENERIC), p(!1), void h({
            event: "alert_error",
            text: "error message with no preferences link",
            element_placement: "newsletter subscribe"
          })) : a.loggedIn && !b || a.loggedIn && 3 == b ? void await j() : a.loggedIn && b ? (h({
            event: "alert_update",
            text: "alert - user already subscribed",
            element_placement: "newsletter subscribe"
          }), x(re.ALREADY_SUBSCRIBED), void p(!1)) : void 0), N = async () => {
            if (-1 === b) return;
            oe(-1), u(!0);
            const {
              error: s = null,
              result: n
            } = await (0, d.coreScApiFetch)("marketing/status", {
              pingBearer: a.pingBearer
            });
            if (s) oe(0);
            else {
              const s = n.status;
              oe(s), a.isFromAuth && (s => {
                if (e.navigate(".", {
                    replace: !0
                  }), !a.loggedIn) return;
                const n = (() => {
                  if (!t) return !1;
                  const e = new Date(t["scAuth.MemberSince"]),
                    a = new Date;
                  return (0, ne.M)(a, e) < 12
                })();
                switch (s) {
                  case 1:
                    n ? (h({
                      event: "subscribe_news_success",
                      element_placement: "newsletter subscribe"
                    }), h({
                      event: "alert_update",
                      text: "new user subscribed during account creation",
                      element_placement: "newsletter subscribe"
                    }), x(re.SUCCESS)) : (h({
                      event: "alert_update",
                      text: "alert - user already subscribed",
                      element_placement: "newsletter subscribe"
                    }), x(re.ALREADY_SUBSCRIBED));
                    break;
                  case 4:
                    h({
                      event: "alert_error",
                      text: "error message with no preferences link",
                      element_placement: "newsletter subscribe"
                    }), x(re.ERROR_GENERIC);
                    break;
                  default:
                    n ? (x(_), h({
                      event: "alert_update",
                      text: "newly registered user - would you still like to subscribe?",
                      element_placement: "newsletter subscribe"
                    })) : j()
                }
              })(s), u(!1)
            }
          }, j = async () => {
            const {
              error: e = null,
              result: t
            } = await (0, d.coreScApiFetch)("marketing/update", {
              fetchOptions: {
                method: "POST"
              },
              pingBearer: a.pingBearer,
              query: {
                subscribe: !0
              }
            });
            if (e) oe(0), x(re.ERROR_GENERIC), h({
              event: "alert_error",
              text: "error message with preferences link",
              element_placement: "newsletter subscribe"
            });
            else {
              const e = t.status;
              oe(e), x(ie[e]), 1 === e ? (h({
                event: "subscribe_news_success",
                element_placement: "newsletter subscribe"
              }), h({
                event: "alert_update",
                text: "user subscribed successfully",
                element_placement: "newsletter subscribe"
              })) : h({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              })
            }
          };
          return (0, o.useEffect)((() => {
            i(1 === b)
          }), [b]), (0, o.useEffect)((() => {
            (async () => {
              await (async () => {
                a.loggedIn ? await N() : !1 === a.loggedIn && u(!1)
              })()
            })()
          }), [a.loggedIn]), {
            dialog: s,
            handleSubscribeButton: y,
            isButtonLoading: f,
            isLoading: g,
            isSubscribed: r,
            setShowDialog: l,
            showDialog: c,
            subscriptionStatus: b,
            urls: v,
            setDialog: n
          }
        },
        de = (0, O.withIntl)((() => {
          const e = (0, D.useRockstarToken)(),
            a = e && "string" == typeof e ? (0, F.s)(e) : null,
            t = (0, D.useRockstarTokenPing)(),
            s = (0, z.A)(),
            [{
              iso: n
            }] = (0, O.getLocale)(),
            r = (0, d.toScLocaleString)(n),
            i = (0, D.useReactiveVar)(m.scConfig),
            [c] = (0, l.useSearchParams)(),
            o = (0, l.useNavigate)(),
            g = (0, l.useLocation)(),
            {
              loggedIn: f,
              data: p,
              loading: b
            } = (0, m.useRockstarUser)(),
            k = "true" === c.get("marketing"),
            h = {
              lang: r,
              location: g.pathname,
              login: i.login,
              navigate: o,
              sc: s.sites.socialClub
            },
            v = le(h, {
              isAMinor: p?.isAMinor,
              isFromAuth: k || !1,
              loggedIn: f,
              pingBearer: t,
              userLoading: b
            }, a),
            {
              dialog: x,
              setDialog: _,
              handleSubscribeButton: y,
              isButtonLoading: N,
              isLoading: j,
              isSubscribed: S,
              setShowDialog: w,
              showDialog: C,
              urls: T
            } = v;
          return (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)(se, {
              handleSubscribeButton: y,
              loggedIn: f || !1,
              loading: b || j,
              urls: T,
              isButtonLoading: N,
              setShowDialog: w,
              isSubscribed: S,
              showDialog: C,
              ...C && x && {
                dialog: x
              }
            })
          })
        }), H);
      var me = t(22941),
        ge = t(31805);
      const ue = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const n = (0, N.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const r = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: n(e?.image ?? null)
          })));
          return (0, u.jsx)(ge.y, {
            className: (0, N.classList)("rockstargames-sites-gta-gen9b8c85703a3c76902e49a61a6afcb81bc", t),
            layers: r,
            style: s
          })
        },
        fe = "rockstargames-sites-gta-gen9c4aa8e5d29b433c400796d0c493a9a4d",
        pe = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: n = "",
            style: r = {},
            children: i
          } = e;
          return "horizontal" === s ? (0, u.jsx)(ge.kQ, {
            x: [a, t],
            className: (0, N.classList)(fe, n),
            styleOuter: r,
            children: i
          }) : (0, u.jsx)(ge.kQ, {
            y: [a, t],
            className: (0, N.classList)(fe, n),
            styleOuter: r,
            children: i
          })
        },
        be = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, ge.as)();
          return (0, o.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        ke = {
          parallaxWrapper: "rockstargames-sites-gta-gen9db1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-gta-gen9d520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-gta-gen9f008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-gta-gen9cb5937d1a102ac4a66c4e373e6253946"
        },
        he = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: n
          } = e;
          return (0, u.jsx)(ge.zE, {
            scrollAxis: a,
            children: (0, u.jsx)(be, {
              children: (0, u.jsx)("div", {
                className: (0, N.classList)(ke.parallaxWrapper, ke[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: n ? n.map(((e, t) => (0, o.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, u.jsx)("div", {})
              })
            })
          })
        };
      var ve = t(63672),
        xe = t(8999);
      const _e = {
          pillBtn: "rockstargames-sites-gta-gen9b03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-sites-gta-gen9fbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-sites-gta-gen9a586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-sites-gta-gen9ccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-sites-gta-gen9e4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-sites-gta-gen9d8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-sites-gta-gen9e56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-sites-gta-gen9c84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-sites-gta-gen9bf34746d222495ab8e30cede8de42d71",
          promoModuleWrapper: "rockstargames-sites-gta-gen9f6d46a24b050aad98fc3aae387b75586"
        },
        ye = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: n,
            ctaLink: r = "https://rockstargames.com",
            gradient: i = !0,
            image: c,
            imageOrientation: l = "right",
            title: d = "",
            name: g = ""
          } = e;
          const [f, p] = (0, o.useState)(!1), {
            ref: b,
            inView: k
          } = (0, G.useInView)({
            threshold: .6
          }), {
            track: h
          } = (0, m.useGtmTrack)(), v = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,N.useGetCdnSource)(c)??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, o.useEffect)((() => {
            k && !f && (h({
              event: "page_section_impression",
              element_placement: g
            }), p(!0))
          }), [k]), (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)("div", {
              className: _e.promoModuleWrapper,
              children: (0, u.jsxs)(y.motion.div, {
                className: _e.promoModule,
                style: {
                  ...v
                },
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  ease: "easeIn",
                  duration: .4
                },
                ref: b,
                children: [(0, u.jsx)("div", {
                  className: [_e.promoModuleImage, i ? _e.gradient : "", "left" === l ? _e.left : _e.right].join(" ")
                }), (0, u.jsxs)("div", {
                  className: _e.promoModuleContentContainer,
                  children: [(0, u.jsx)(M, {
                    brands: t,
                    className: _e.promoModuleBrands
                  }), (0, u.jsxs)("div", {
                    className: _e.promoModuleTextContent,
                    children: [d && (0, u.jsx)("h3", {
                      children: d
                    }), s && (0, u.jsx)("p", {
                      children: s
                    })]
                  }), n && (0, u.jsx)(E.A, {
                    to: r,
                    text: n,
                    onClick: () => {
                      h({
                        event: "cta_other",
                        element_placement: "promo module",
                        link_url: r,
                        text: n
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var Ne = t(84079),
        je = t(94869);
      const Se = {
          pillBtn: "rockstargames-sites-gta-gen9ae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-sites-gta-gen9d7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-sites-gta-gen9fd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-sites-gta-gen9dd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-sites-gta-gen9eb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-sites-gta-gen9d00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-sites-gta-gen9fdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-sites-gta-gen9abdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-sites-gta-gen9ea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-sites-gta-gen9c31731d09d8118c6a82fe6edb193dc50"
        },
        we = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: n
          } = e;
          const {
            track: r
          } = (0, m.useGtmTrack)(), {
            loggedIn: i
          } = (0, m.useRockstarUser)(), {
            refetch: c
          } = (0, D.useQuery)(je.UserGetVote, {
            skip: !0
          }), [l] = (0, D.useMutation)(je.UserCastVote), [d, g] = (0, o.useState)(null), f = (0, o.useCallback)((async e => {
            r({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${s} ${t}`
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              n = await l({
                variables: a
              });
            g(n?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, o.useEffect)((() => {
            (async () => {
              if (!i || !t || !s) return;
              const e = await c({
                foreign_id: t,
                foreign_type: s
              });
              g(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, i]), (0, u.jsx)("div", {
            className: Se.userVote,
            children: (0, u.jsxs)("div", {
              className: Se.voteContent,
              children: [(0, u.jsxs)("div", {
                className: Se.info,
                children: [(0, u.jsx)("h3", {
                  children: n
                }), (0, u.jsx)("p", {
                  children: a
                })]
              }), (0, u.jsxs)("div", {
                className: [Se.voteButtons, i ? "" : Se.loggedOutButtons].join(" "),
                children: [(0, u.jsx)("button", {
                  onClick: () => f(!0),
                  className: [Se.upVote, d ? Se.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, u.jsx)("button", {
                  className: [Se.downVote, !1 === d ? Se.voteButtonActive : ""].join(" "),
                  onClick: () => f(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var Ce = t(25180),
        Te = t(355),
        Ie = t(5217),
        Me = t.n(Ie);
      const Ee = (0, o.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: s,
          children: n,
          requireUser: r
        } = e, {
          track: i
        } = (0, m.useGtmTrack)(r), [c, l] = (0, o.useState)(a?.current);
        return (0, o.useEffect)((() => {
          a?.current && l(a.current)
        }), [a]), ((e, a, t) => {
          const [s, n] = (0, o.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: r,
            scrollY: i
          } = s;
          (0, o.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && n((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, o.useEffect)((() => {
            n({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const c = (0, o.useCallback)((() => {
            const e = document.documentElement,
              i = document.body,
              o = t?.scrollTop || e.scrollTop || i.scrollTop,
              l = t?.scrollHeight || e.scrollHeight || i.scrollHeight,
              {
                clientHeight: d
              } = e,
              m = o / (l - d) * 100;
            if (r) {
              const e = Math.min(...r, l);
              if (m >= e) {
                const s = r.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", c), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: s
                }), n({
                  scrollY: e,
                  scrollDepths: s
                })
              }
            } else n({
              ...s,
              scrollY: m
            })
          }), [r, t, a]);
          (0, o.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
          }), [c])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          i({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof s && s(a)
        }), c), n
      }));
      Ee.displayName = "ScrollTracker";
      const Ae = Ee,
        Le = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b61bd7f274fd6d93c4bf33a9284b6b67",
            style: t,
            children: a
          })
        },
        Pe = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: n = []
          } = e;
          return a && t ? (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9bc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": s,
            children: t
          }) : a && n && n?.length > 0 ? (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d4a1a1e4fc4c16138d3c879bc1864227",
            children: n.map((e => (0, u.jsx)(Le, {
              ...e
            }, e?.text)))
          }) : null
        },
        Be = {
          textOverlay: "rockstargames-sites-gta-gen9a9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-sites-gta-gen9d35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: $e,
          Animations: Ve
        } = Te,
        {
          variants: Re,
          transitions: De
        } = Ve,
        Oe = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: n,
            description: r,
            fadesOut: i = !1,
            badges: c
          } = e;
          return (0, u.jsx)($e, {
            initial: Re.fade.out.initial,
            animate: {
              opacity: i ? 0 : 1
            },
            transition: De.fade,
            className: Be.textOverlay,
            children: (0, u.jsxs)("div", {
              className: Be.content,
              children: [(0, u.jsx)(Pe, {
                hasTag: t,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, u.jsx)("h3", {
                children: a
              }), n && r && (0, u.jsx)("div", {
                className: Be.description,
                children: r
              })]
            })
          })
        },
        ze = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            tag: n,
            tagStyle: r,
            discountPrice: i,
            originalPrice: c,
            setPricingContainerHeight: l = null
          } = e;
          const d = (0, o.createRef)();
          return (0, o.useEffect)((() => {
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
            children: [t && (0, u.jsx)("span", {
              className: "rockstargames-sites-gta-gen9f390fe2c9338785ce412483a1bac624c",
              children: a
            }), (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9fc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9b7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": r || "free",
                children: n
              }), (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9d8c7408e6335e53326bc70a1a065f81b",
                children: i
              }), (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a3632910b63514f6b49539fe45bcccb6",
                children: c
              })]
            })]
          })
        };
      var Fe = t(90837),
        He = t(82275),
        Ge = t(44338),
        We = t(67245),
        Ue = t(47483),
        qe = t(19169),
        Xe = t(96165),
        Ye = t(73870);
      const Ke = {
          ps5: Ge,
          ps4: He,
          ps: Fe,
          xboxone: Ue,
          xbox: qe,
          xboxseriesxs: We,
          nintendoswitch: Ye,
          pc: Xe,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        Qe = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            platformOptions: n,
            setPricingContainerHeight: r = (() => {}),
            expandedView: i
          } = e;
          const c = (0, o.createRef)();
          return (0, o.useEffect)((() => {
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
            "data-show-platforms": !i,
            children: [t && (0, u.jsx)("span", {
              className: "rockstargames-sites-gta-gen9fd98e3d7af2a583d4338d802666901a5",
              children: a
            }), n?.platformsAndLinks && (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9cbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, u.jsx)(Pe, {
                hasTag: n?._memoq?.platformTag,
                tag: n?._memoq?.platformTag,
                tagStyle: n?._memoq?.platformTagStyle
              }), (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b7de0e1798d1a020191fbe44b67f34d2",
                children: n.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, u.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9aa5f852c8932dcf689a97496d437f13b",
                    alt: t,
                    src: Ke[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        Ze = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: s,
            expandedView: n = !1,
            children: r,
            pricingOptions: i,
            setPricingContainerHeight: c,
            isCoverCard: l = !1,
            platformOptions: d
          } = e;
          const [m] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: s,
              description: n,
              collapsedHasDescription: r,
              size: i,
              title: c,
              expandedView: l,
              badges: d
            } = e;
            const [m, g] = (0, o.useState)(null), f = (0, o.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== i && r;
              return (0, u.jsx)(Oe, {
                title: c,
                hasTag: s,
                tag: t,
                hasDescription: e,
                description: n,
                fadesOut: l,
                badges: d
              })
            }), [a, t, s, n, r, i, c, l, d]);
            return (0, o.useEffect)((() => {
              g(f)
            }), [f]), [m, g]
          })({
            ...a,
            size: s,
            title: t,
            expandedView: n
          }), g = void 0 !== i?.hasPricingOptions || null !== d;
          return (0, u.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9c525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": l,
            "data-expanded-view": n,
            children: [o.Children.map(r, (e => (0, o.cloneElement)(e, {
              title: t,
              size: s,
              expandedView: n
            }))), m, g && (0, u.jsxs)(u.Fragment, {
              children: [!0 === d?.hasPlatformOptions && (0, u.jsx)(Qe, {
                title: t,
                platformOptions: d,
                pricingOptions: i,
                setPricingContainerHeight: c,
                expandedView: n
              }), !0 === i?.hasPricingOptions && (0, u.jsx)(ze, {
                title: t,
                tag: i?._memoq?.tag,
                tagStyle: i?._memoq?.tagStyle || "free",
                discountPrice: i?._memoq?.discountPrice,
                originalPrice: i?._memoq?.originalPrice,
                setPricingContainerHeight: c
              })]
            })]
          })
        },
        {
          LiteMotion: Je,
          Animations: ea
        } = Te,
        {
          transitions: aa
        } = ea,
        ta = e => {
          let {
            components: a,
            payload: t,
            prod: s,
            size: n,
            title: r,
            initial: i = "initial",
            animate: c = "animate",
            variants: l,
            type: m = null,
            context: g = null,
            textOverlayProps: f,
            className: p,
            children: b,
            theme: k = "none",
            id: h,
            pricingOptions: v,
            pricingContainerHeight: x,
            isCoverCard: _,
            platformOptions: y,
            isProductCard: j = !1
          } = e;
          const S = (0, o.useRef)(),
            w = (0, o.useRef)(),
            {
              tag: C,
              expandedHasTag: T,
              badges: I
            } = f;
          V().set(t, "meta.prod", s);
          const M = b?.props?.images.length > 0;
          let E = (0, u.jsx)("h1", {
            children: r
          });
          return _ && (E = null), (0, o.useEffect)((() => {
            const e = () => {
              S.current && S.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (S.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, u.jsx)(d.DataLayerProvider, {
            card_id: h,
            card_name: r?.toLowerCase(),
            children: (0, u.jsx)(Ae, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === m ? S : w,
              children: (0, u.jsxs)(Je, {
                ref: S,
                initial: i,
                animate: c,
                variants: l.expanded,
                transition: aa.cardOpen,
                className: (0, N.classList)("rockstargames-sites-gta-gen9dcb84dcfd34616fb0089133acf0c4669", p),
                "data-type": m,
                "data-size": n,
                "data-product": j,
                "data-covercard": _ || !1,
                "data-context": g,
                style: {
                  "--product-card-pricing-info-height": `${x||0}px`
                },
                children: [M && (0, u.jsx)(Ze, {
                  size: n,
                  title: r,
                  textOverlayProps: f,
                  expandedView: !0,
                  pricingOptions: v,
                  platformOptions: y,
                  isCoverCard: _,
                  children: b
                }), (0, u.jsxs)(Je, {
                  ref: w,
                  className: "rockstargames-sites-gta-gen9eaf357a8d0bae1199142949cbf24e7b9",
                  variants: l.expandedContents,
                  transition: aa.afterCardOpen,
                  "data-theme": k,
                  children: [(0, u.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9fc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, u.jsx)(Pe, {
                      hasTag: T,
                      tag: C,
                      badges: I
                    }), E, j && (0, u.jsxs)(u.Fragment, {
                      children: [!0 === y?.hasPlatformOptions && (0, u.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9b630c7c1f59f91f2ac304af525b6d081",
                        children: (0, u.jsx)(Pe, {
                          hasTag: y?.hasPlatformOptions,
                          tag: y?._memoq?.platformTag,
                          tagStyle: y?._memoq?.platformTagStyle
                        })
                      }), !0 === v?.hasPricingOptions && (0, u.jsx)(ze, {
                        title: r,
                        showTitle: !1,
                        showBackground: !1,
                        tag: v?._memoq?.tag,
                        tagStyle: v?.tagStyle || "free",
                        discountPrice: v?._memoq?.discountPrice,
                        originalPrice: v?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, u.jsx)(N.TinaParser, {
                    components: a,
                    tina: {
                      payload: t
                    }
                  })]
                })]
              })
            })
          })
        };
      var sa = t(93665);
      const na = JSON.parse('{"us":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}"},"de":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}"},"es":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"mx":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}"},"fr":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}"},"it":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}"},"jp":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}"},"kr":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}"},"pl":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}"},"br":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"ru":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})"},"hans":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"},"tw":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"}}'),
        ra = (0, O.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            defaultMessage: "{tag} {title} on {platformList}"
          }
        }),
        ia = (0, O.withIntl)((e => {
          let {
            id: a,
            position: t,
            title: s,
            size: n = "md",
            sectionTitle: r = "",
            expandedType: i = null,
            modalProps: c = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: d,
            children: g,
            isProductCard: f,
            cardIds: p = null,
            theme: b = "none",
            isCoverCard: k,
            platformOptions: h
          } = e;
          const {
            formatMessage: v,
            formatList: x
          } = (0, O.useIntl)(), [_, y] = (0, l.useSearchParams)(), N = (0, o.useRef)(null), [, j] = (0, sa.h)(), {
            track: S
          } = (0, m.useGtmTrack)(), [w, C] = (0, o.useState)(!1), T = () => {
            C(!1), j(null), y({}), S({
              event: "trackPageview"
            })
          }, I = () => {
            if (!c?.content || !N.current || !i || "linkout" === i) return;
            const e = N.current,
              r = window.getComputedStyle(e),
              o = parseInt(r.getPropertyValue("width"), 10),
              l = parseInt(r.getPropertyValue("height"), 10),
              d = e.getBoundingClientRect(),
              {
                content: m,
                className: g,
                contentClassName: u
              } = c,
              f = "fob" === n ? "fob" : "default";
            j({
              content: m,
              onClose: T,
              rect: d,
              width: o,
              height: l,
              className: g,
              contentClassName: u,
              fadeIn: !1,
              cardIds: p,
              theme: b,
              activeId: a,
              gtm: {
                card_id: a,
                card_name: s?.toLowerCase(),
                position: t
              },
              aspectRatio: f,
              cardDimensions: {
                size: n,
                type: i
              }
            }), S({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: s?.toLowerCase(),
              position: t
            })
          };
          (0, o.useEffect)((() => {
            w && I()
          }), [w]), (0, o.useEffect)((() => {
            C(_.get("info") === a)
          }), [_.get("info"), a]);
          const M = (0, o.useMemo)((() => {
            const e = h?._memoq?.platformTag || "";
            if (h?.platformsAndLinks?.length > 0) {
              const a = h?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: a
                  } = e;
                  return a
                })),
                t = x(a, {
                  type: "conjunction"
                });
              return e ? v(ra.card_label_platforms_tag, {
                tag: e,
                title: s,
                platformList: t
              }) : v(ra.card_label_platforms, {
                title: s,
                platformList: t
              })
            }
            return e ? v(ra.card_label_tag, {
              tag: e,
              title: s
            }) : s
          }), [h, s]);
          return k || "linkout" === i ? (0, u.jsx)("div", {
            ref: N,
            className: d,
            "data-size": n,
            "data-type": i,
            "data-product": f,
            role: "button",
            "aria-label": M,
            children: g
          }) : (0, u.jsx)("button", {
            ref: N,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), a ? y({
                info: a
              }) : I(), S({
                event: "card_click",
                element_placement: r?.toLowerCase(),
                position: t,
                card_id: a,
                card_name: s?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: d,
            "data-size": n,
            "data-type": i,
            "data-product": f,
            tabIndex: "linkout" !== i ? 0 : -1,
            "aria-label": M,
            type: "button",
            children: g
          })
        }), na),
        ca = {
          pillBtn: "rockstargames-sites-gta-gen9ebdcdd73cdde7ce5626490066de01474",
          selected: "rockstargames-sites-gta-gen9d058244e6f29505e3c05558039370b54",
          card: "rockstargames-sites-gta-gen9c2685d1ff8cc088bfef4c336b1a9f8ae",
          content: "rockstargames-sites-gta-gen9e268650dd5a86c01be62eeb552b4e54b",
          expandedContent: "rockstargames-sites-gta-gen9d19c433e20935d6b1eebff53baa04bb1",
          text: "rockstargames-sites-gta-gen9beee7d7b941675acb2b6b9bf5caf4f33",
          imageHolder: "rockstargames-sites-gta-gen9c823ac57eab14be16dd87e168e610d4f",
          coverCardWrapper: "rockstargames-sites-gta-gen9ef72671ab95bb9290b80637cb3073d29"
        },
        oa = e => {
          let {
            payload: a,
            prod: t,
            images: s,
            size: n,
            title: r,
            initial: i,
            animate: l,
            variants: d,
            id: m,
            position: g,
            sectionTitle: f,
            expandedType: p,
            context: b,
            children: k,
            expandedCardContents: h,
            textOverlayProps: v = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: x = {},
            modalProps: _ = [],
            theme: y,
            cardIds: j,
            pricingOptions: S,
            platformOptions: w = null,
            pricingContainerHeight: C,
            isCoverCard: T = !1,
            isProductCard: I = !1
          } = e;
          const M = (0, N.useTinaComponents)(),
            E = (0, o.useMemo)((() => ({
              ...M,
              HTMLElement: R,
              ImageWithBadge: xe.A,
              Carousel: c.A,
              GroupOfItems: Me()
            })), [M]),
            A = (0, o.useMemo)((() => (0, u.jsx)(ta, {
              type: p,
              components: E,
              payload: a,
              prod: t,
              images: s,
              size: n,
              title: r,
              context: b,
              textOverlayProps: v,
              initial: i,
              animate: l,
              variants: d,
              theme: y,
              cardIds: j,
              pricingOptions: S,
              id: m,
              pricingContainerHeight: C,
              isCoverCard: T,
              platformOptions: w,
              isProductCard: I,
              children: h
            })), [p, s, t, n, r, v, h, i, l, d, E, a, I]),
            L = [ca.card, T ? ca.coverCardWrapper : ""].join(" ");
          return (0, u.jsx)(ia, {
            id: m,
            position: g,
            sectionTitle: f,
            title: r,
            size: n,
            expandedType: p,
            images: s,
            deckProps: x,
            modalProps: {
              content: A,
              ..._
            },
            className: L,
            isProductCard: I,
            cardIds: j,
            theme: y,
            isCoverCard: T,
            platformOptions: w,
            children: k
          })
        },
        la = {
          layeredImageFrame: "rockstargames-sites-gta-gen9f4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-sites-gta-gen9f48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-sites-gta-gen9b52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-sites-gta-gen9f55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-sites-gta-gen9fa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-sites-gta-gen9b496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: da,
          Animations: ma
        } = Te,
        {
          getVariant: ga,
          variants: ua,
          transitions: fa
        } = ma,
        pa = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: n,
            src: r
          } = (0, x.useImageParser)({
            ...a,
            prod: s
          });
          return (0, u.jsx)("img", {
            src: r.mobile,
            alt: n ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        ba = e => {
          let {
            images: a = [],
            className: t = "",
            prod: s = !1,
            expandedView: n = !1,
            style: r = {}
          } = e;
          const [i, c] = (0, o.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, o.useEffect)((() => {
            function e() {
              c({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [i]);
          const l = (0, o.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, u.jsx)(da, {
            className: (0, N.classList)(la[e?.specialClass] ?? la.imageMask, la[e?.sizeClass], e?.className),
            variants: ga(e?.specialClass ?? "imageMask", n ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: fa.cardOpen,
            children: (0, u.jsx)(pa, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [a, i, n, s]);
          return (0, u.jsx)(da, {
            className: (0, N.classList)(la.layeredImageFrame, a.length > 1 ? la.layered : la.flat, t),
            style: r,
            initial: ua.fade.in.initial,
            animate: ua.fade.in.animate,
            transition: fa.instantFade,
            "data-expanded-view": n,
            children: l
          })
        },
        ka = e => {
          let {
            expandedType: a,
            to: t,
            children: s,
            style: n,
            sectionTitle: r = "",
            id: i,
            cardTitle: c,
            position: l
          } = e;
          const {
            track: d
          } = (0, m.useGtmTrack)(), g = (0, o.useCallback)((() => {
            d({
              event: "card_click",
              link_url: t,
              card_id: i,
              card_name: c,
              element_placement: r.toLowerCase(),
              position: l
            })
          }), [r, t, i, c, r, l]);
          return "linkout" === a && t ? (0, u.jsx)(U.A, {
            to: t,
            style: n,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: g,
            children: s
          }) : s
        },
        ha = {
          pillBtn: "rockstargames-sites-gta-gen9c484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-sites-gta-gen9d65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-sites-gta-gen9c0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-sites-gta-gen9cebbc72d1229514723b9d664281b472f"
        },
        {
          variants: va
        } = Te.Animations,
        xa = e => {
          let {
            id: a,
            title: t,
            content: s,
            size: n = "md",
            expandedType: r = "short",
            textOverlayProps: i = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: c = [],
            deckProps: l = {},
            to: d = null,
            tina: m = {},
            position: g = 0,
            sectionTitle: f = "",
            theme: p,
            pricingOptions: b,
            cardIds: k,
            platformOptions: h = null
          } = e;
          const v = (0, N.useTinaPayload)(),
            x = m?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [_, y] = (0, o.useState)(l?.size ?? n),
            [j, S] = (0, o.useState)(0),
            w = void 0 !== b?.hasPricingOptions || void 0 !== h?.hasPlatformOptions;
          return (0, o.useEffect)((() => {
            y(l?.size ?? n)
          }), [l?.size, n]), (0, u.jsx)(oa, {
            id: a,
            title: t,
            size: _,
            expandedType: r,
            images: c,
            deckProps: l,
            prod: x,
            payload: {
              content: s,
              meta: {}
            },
            variants: va.plainCard,
            textOverlayProps: i,
            modalProps: {
              className: ha.customModal,
              contentClassName: ha.customModalContent
            },
            expandedCardContents: (0, u.jsx)(ba, {
              images: c,
              prod: x,
              expandedView: !0
            }),
            position: g,
            sectionTitle: f,
            theme: p,
            cardIds: k,
            pricingOptions: b,
            platformOptions: h,
            pricingContainerHeight: j,
            isProductCard: w,
            children: (0, u.jsx)(ka, {
              expandedType: r,
              to: d,
              sectionTitle: f,
              id: a,
              cardTitle: t,
              position: g,
              children: (0, u.jsx)("div", {
                className: ha.content,
                "data-product": w,
                children: (0, u.jsx)(Ze, {
                  title: t,
                  size: _,
                  textOverlayProps: i,
                  pricingOptions: b,
                  platformOptions: h,
                  setPricingContainerHeight: S,
                  children: (0, u.jsx)(ba, {
                    images: c,
                    prod: x
                  })
                })
              })
            })
          })
        },
        _a = (0, O.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        ya = {
          bodySmall: "rockstargames-sites-gta-gen9c048aacaedc7fb642f38c7f163c193e3"
        },
        Na = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, u.jsxs)("div", {
            className: ya.track,
            children: [(0, u.jsx)("p", {
              children: a
            }), (0, u.jsx)("p", {
              className: ya.bodySmall,
              children: t
            })]
          })
        },
        ja = (0, O.withIntl)((e => {
          let {
            content: a = []
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, u.jsx)("h4", {
              className: "rockstargames-sites-gta-gen9cd3895fbae93ba04f1401487f6e6eddf",
              children: (0, u.jsx)(O.FormattedMessage, {
                ..._a.components_track_list_title
              })
            }), (0, u.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ef0cde8b15ded961605237d0e8328a9b",
              children: (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9bdd54186db17d27b3daebc4b9d58e09a",
                children: a?.map((e => (0, u.jsx)(Na, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), H);
      var Sa = t(2024);
      const {
        variants: wa
      } = Te.Animations;
      var Ca = t(72752),
        Ta = t(94566),
        Ia = t(22778);
      const Ma = {
          pillBtn: "rockstargames-sites-gta-gen9a50fca350d7dbc4340ad3c68f1da1960",
          selected: "rockstargames-sites-gta-gen9e6487295119cf4eafefadf26f76ed1f8",
          customModalContent: "rockstargames-sites-gta-gen9f17bd90d5d11d511cc583e09ef7ea01e",
          content: "rockstargames-sites-gta-gen9f11fa0818c5163565a0058b6a7aa2505",
          secondary: "rockstargames-sites-gta-gen9e8fd74f0c0a6e9b8855e4bd971e7bba8",
          logo: "rockstargames-sites-gta-gen9c1524e116e11607f62a2d93b0b2e32bc"
        },
        {
          variants: Ea
        } = Te.Animations,
        Aa = e => {
          let {
            id: a,
            logoImage: t = null,
            logoImageHeight: s = "auto",
            name: n = null,
            title: r,
            titleSizeClass: i = null,
            content: c,
            ctaText: l,
            ctaURL: d,
            size: m = "md",
            expandedType: g = "short",
            textOverlayProps: f = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: p = [],
            deckProps: b = {},
            to: k = null,
            tina: h = {},
            cardIds: v,
            theme: x
          } = e;
          const _ = (0, O.useIntl)(),
            y = (0, N.useTranslations)({
              payload: h?.payload,
              variables: h?.variables ?? {}
            }),
            [j, S] = (0, o.useState)(b?.size ?? m),
            w = (0, N.useGetCdnSource)(t ?? null),
            C = y?.content?.[0],
            T = C?.body ?? C?._memoq?.body;
          return (0, o.useEffect)((() => {
            S(b?.size ?? m)
          }), [b?.size, m]), (0, u.jsx)(oa, {
            id: a,
            title: r,
            sectionTitle: n || r,
            size: j,
            expandedType: g,
            images: p,
            deckProps: b,
            payload: {
              content: c,
              meta: {}
            },
            variants: Ea.plainCard,
            textOverlayProps: f,
            modalProps: {
              className: Ma.customModal,
              contentClassName: Ma.customModalContent
            },
            expandedCardContents: (0, u.jsx)(ba, {
              images: p,
              expandedView: !0
            }),
            theme: x,
            cardIds: v,
            isCoverCard: !0,
            children: (0, u.jsx)(ka, {
              expandedType: g,
              to: k,
              sectionTitle: n || r,
              children: (0, u.jsxs)("div", {
                className: Ma.content,
                children: [t && (0, u.jsx)("img", {
                  className: Ma.logo,
                  alt: "logo",
                  src: w,
                  style: {
                    height: `${s}`
                  }
                }), (0, u.jsx)("h2", {
                  className: i,
                  children: r
                }), T && (0, u.jsx)("p", {
                  children: T
                }), (0, u.jsx)(Ia.A, {
                  target: "newtab" === g ? "_blank" : "_self",
                  to: d || void 0,
                  children: l || _.formatMessage(Ta.card.card_learn_more)
                })]
              })
            })
          })
        };
      var La = t(81902),
        Pa = t(89269);
      const Ba = "rockstargames-sites-gta-gen9eca98eb0b5b84a0c9a2e6d952545a2d5",
        $a = "rockstargames-sites-gta-gen9d3d0b4ecd3bddba96c73f49fcca34ed8",
        Va = {
          0: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 18
          },
          1920: {
            spaceBetween: 20
          },
          2560: {
            spaceBetween: 22
          }
        },
        Ra = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: n = !1,
            slideChildren: r = [],
            variants: i = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: c = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, m.useGtmTrack)(), [d, g] = (0, o.useState)([Pa.U1, Pa.WO, Pa.dK]), [f, p] = (0, o.useState)(null), [b, k] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            const e = [Pa.U1, Pa.WO, Pa.dK];
            n && e.push(Pa.Vx), g(e)
          }), [n]), (0, o.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, a) => (0, u.jsx)(La.qr, {
              children: e
            }, Symbol(a).toString())));
            k(e)
          }), [r]), b ? (0, u.jsxs)(y.motion.div, {
            className: "rockstargames-sites-gta-gen9d4f245838b94234f21463a08a8112910",
            variants: i.parent,
            transition: c.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, u.jsx)(y.motion.div, {
              className: Ba,
              variants: i.main,
              transition: c.main,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(La.RC, {
                loop: s,
                navigation: n,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: f
                },
                modules: d,
                breakpoints: Va,
                className: Ba,
                onSlideNextTransitionEnd: () => {
                  l({
                    event: "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  l({
                    event: "carousel_previous",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  l({
                    event: "carousel_swipe",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                children: b
              })
            }), (0, u.jsx)(y.motion.div, {
              className: $a,
              variants: i.thumbs,
              transition: c.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(La.RC, {
                threshold: 50,
                onSwiper: p,
                loop: s,
                breakpoints: Va,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: $a,
                children: b
              })
            })]
          }) : null
        },
        Da = e => {
          let {
            images: a,
            title: t,
            expandedView: s,
            variants: n,
            transition: r
          } = e;
          const i = (0, o.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, u.jsx)(xe.A, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [a]);
          return !i?.length || i?.length < 1 ? null : 1 === i.length ? i : (0, u.jsx)(Ra, {
            slideChildren: i,
            title: t,
            navigation: s,
            thumbsVisible: s,
            spaceBetween: 0,
            variants: n,
            transition: r
          })
        },
        Oa = {
          pillBtn: "rockstargames-sites-gta-gen9d13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-sites-gta-gen9bcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-sites-gta-gen9ceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: za,
          variants: Fa
        } = Te.Animations,
        Ha = e => {
          let {
            id: a,
            title: t,
            content: s,
            size: n = "md",
            expandedType: r = "gallery",
            textOverlayProps: i = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: c = [],
            deckProps: l = {},
            tina: d = {},
            payload: m,
            position: g = 0,
            sectionTitle: f = "",
            cardIds: p
          } = e;
          const b = (0, N.useTinaPayload)(),
            k = m ?? b,
            h = d?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            v = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(c, h),
            [x, _] = (0, o.useState)(l?.size ?? n),
            {
              parent: y,
              main: j,
              thumbs: S
            } = Fa?.cardWithImageGallery?.gallery ?? {};
          return (0, o.useEffect)((() => {
            _(l?.size ?? n)
          }), [l?.size, n]), (0, u.jsx)(oa, {
            id: a,
            position: g,
            sectionTitle: f,
            payload: {
              content: s,
              meta: {},
              payload: k
            },
            title: t,
            size: x,
            expandedType: r,
            images: v,
            deckProps: l,
            prod: h,
            variants: Fa.cardWithImageGallery,
            textOverlayProps: i,
            modalProps: {
              className: Oa.customModal,
              contentClassName: Oa.customModalContent
            },
            expandedCardContents: (0, u.jsx)(Da, {
              images: v,
              title: t,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: y,
                main: j,
                thumbs: S
              },
              transition: {
                parent: za.cardOpen,
                main: za.cardOpen,
                thumbs: za.cardOpen
              }
            }),
            cardIds: p,
            children: (0, u.jsx)("div", {
              className: Oa.content,
              children: (0, u.jsx)(Ze, {
                title: t,
                size: x,
                textOverlayProps: i,
                children: (0, u.jsx)(Da, {
                  images: v,
                  title: t,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var Ga = t(60207);
      const Wa = e => {
        let {
          title: a,
          content: t,
          size: s = "md",
          badgeText: n
        } = e;
        const r = {
          ...(0, N.useTinaComponents)(),
          HTMLElement: R,
          UnorderedList: ve.A,
          ListItem: Ga.A
        };
        return (0, u.jsx)("div", {
          className: "rockstargames-sites-gta-gen9d392587df58204b0910e721ef1f3c35c",
          "data-size": s,
          children: (0, u.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a002b98d034f1897c7e1f31327ff08dc",
            children: [n && (0, u.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d9901d1bb91e1fbc1e857964083fe496",
              children: n
            }), (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9bea322f6e3afa31355668ad164496730",
              children: [a && (0, u.jsx)("h3", {
                children: a
              }), (0, u.jsx)(N.TinaParser, {
                components: r,
                tina: {
                  payload: {
                    content: t
                  }
                }
              })]
            })]
          })
        })
      };
      var Ua = t(59028),
        qa = t.n(Ua),
        Xa = t(83178);
      const Ya = {
          player: "rockstargames-sites-gta-gen9bb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-sites-gta-gen9e1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-sites-gta-gen9e8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-sites-gta-gen9ea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-sites-gta-gen9b91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-sites-gta-gen9c44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-sites-gta-gen9ac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-sites-gta-gen9aafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-sites-gta-gen9b880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-sites-gta-gen9ff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-sites-gta-gen9a81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-sites-gta-gen9c87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-sites-gta-gen9c23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-sites-gta-gen9e4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-sites-gta-gen9ba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-sites-gta-gen9fd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-sites-gta-gen9c93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-sites-gta-gen9b4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-sites-gta-gen9d136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-sites-gta-gen9d3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-sites-gta-gen9f5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-sites-gta-gen9efb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-sites-gta-gen9f286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-sites-gta-gen9a56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-sites-gta-gen9b8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        Ka = e => {
          let {
            src: a
          } = e;
          return (0, u.jsx)("div", {
            className: Ya.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        Qa = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: s,
            setPlaying: n,
            tracksOpen: r,
            setTracksOpen: i,
            trackData: c,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, o.useRef)(null),
            f = (0, o.useRef)(null),
            p = (0, o.useRef)(null),
            [b, k] = (0, o.useState)(null),
            [h, v] = (0, o.useState)(!1),
            x = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, o.useEffect)((() => {
            if (!f.current || !p.current) return;
            const e = () => {
              p.current && f.current && k(p.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [p, f, a]), (0, o.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const t = new(qa())(g.current),
              n = e => {
                if (g.current) {
                  const t = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const n = Math.max(0, e.srcEvent.offsetX),
                    r = Number(n / t * a.duration);
                  s.currentTime = r
                }
              },
              r = () => {
                e ? s.pause() : s.play()
              },
              i = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", i), t.on("panleft", n), t.on("panright", n), t.on("panend", r), t.on("tap", n), () => {
              t.off("panstart", i), t.off("panleft", n), t.off("panright", n), t.off("panend", r), t.off("tap", n)
            }
          }), [g.current, a.duration]), (0, o.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && v(!0)
          }), [t, s?.currentTime]), (0, u.jsxs)("div", {
            className: Ya.controls,
            style: {
              "--track-color": c.color,
              "--track-mix-blend-mode": c.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, u.jsx)("div", {
              className: [Ya.controlsCurrentBg, h ? Ya.controlsCurrentBgVisible : ""].join(" ")
            }), (0, u.jsx)("div", {
              className: Ya.controlsTrack,
              ref: f,
              children: (0, u.jsx)("span", {
                className: [Ya.controlsTrackTitle, b ? Ya.controlsTrackAnimating : ""].join(" "),
                ref: p,
                children: c.title
              })
            }), (0, u.jsxs)("div", {
              className: Ya.controlsButtons,
              children: [(0, u.jsx)("div", {
                className: Ya.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), n(!0))
                }
              }), (0, u.jsx)("div", {
                className: [Ya.controlsPlayPause, t ? Ya.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!t)
                }
              }), (0, u.jsx)("div", {
                className: Ya.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), n(!0))
                }
              })]
            }), (0, u.jsx)("div", {
              active: r ? "" : null,
              className: Ya.controlsTrackBurger,
              children: (0, u.jsx)("div", {
                className: Ya.iconBurger,
                onClick: () => {
                  i(!r)
                }
              })
            }), (0, u.jsxs)("div", {
              className: Ya.controlsScrub,
              children: [(0, u.jsx)("span", {
                children: x(a.current)
              }), (0, u.jsx)("div", {
                className: Ya.controlsScrubTrack,
                ref: g
              }), (0, u.jsx)("span", {
                children: x(a.duration)
              })]
            })]
          })
        },
        Za = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: n,
            setTracksOpen: r,
            setPlaying: i,
            setAutoNext: c
          } = e;
          return (0, u.jsxs)("div", {
            className: Ya.tracks,
            children: [(0, u.jsx)("h4", {
              children: "Tracks"
            }), (0, u.jsx)("div", {
              className: Ya.trackBurger,
              onClick: () => {
                r(!n)
              }
            }), (0, u.jsx)("div", {
              className: Ya.trackList,
              children: a.map(((e, a) => (0, u.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? Ya.trackActive : "",
                onClick: () => {
                  s(e.id), i(!0), c(!0)
                },
                children: [(0, u.jsx)("span", {
                  className: Ya.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, u.jsx)("span", {
                  className: Ya.trackTitle,
                  children: e.title
                }), (0, u.jsx)("span", {
                  className: Ya.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        Ja = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, D.useQuery)(Xa.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [n, r] = (0, o.useState)(), [i, c] = (0, o.useState)(), [l, d] = (0, o.useState)(), [m, g] = (0, o.useState)(!1), [f, p] = (0, o.useState)(!1), [b, k] = (0, o.useState)(new HTMLAudioElement), [h, v] = (0, o.useState)({
            current: 0,
            duration: 0
          }), [x, _] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (c(a.data.rockstarAudioPlayerPlayTrackId), _(!1), p(!0)), f && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && p(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [f]), (0, o.useEffect)((() => {
            if (!b) return;
            const e = () => {
                isNaN(b.duration) || v({
                  duration: b?.duration ?? 0,
                  current: b?.currentTime ?? 0
                })
              },
              a = () => {
                x && n && c(n[1])
              };
            return b.addEventListener("loadedmetadata", e), b.addEventListener("timeupdate", e), b.addEventListener("ended", a), () => {
              b.removeEventListener("loadedmetadata", e), b.removeEventListener("timeupdate", e), b.removeEventListener("ended", a)
            }
          }), [b, n, x]), (0, o.useEffect)((() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [f]), (0, o.useEffect)((() => {
            b && (f ? b.play() : b.pause(), g(!1))
          }), [f, b, l?.id]), (0, o.useEffect)((() => {
            if (!i) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === i));
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), d(e[a])
          }), [i]), (0, o.useEffect)((() => {
            s && c(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, u.jsxs)("div", {
            className: [Ya.player, Ya[t], m ? Ya.tracksOpen : ""].join(" "),
            children: [(0, u.jsx)("audio", {
              ref: e => {
                k(e)
              },
              src: l.mp3_src
            }), (0, u.jsx)(Za, {
              tracks: s.audioAlbum.tracks,
              setTrackId: c,
              trackId: i,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: p,
              setAutoNext: _
            }), (0, u.jsx)(Ka, {
              src: l.cover_src
            }), (0, u.jsx)(Qa, {
              setTrackId: c,
              trackBounds: n,
              tracksOpen: m,
              setTracksOpen: g,
              playing: f,
              setPlaying: p,
              timing: h,
              trackData: l,
              audioRef: b,
              setAutoNext: _
            })]
          }) : null
        };
      var et = t(46825),
        at = t(86634),
        tt = t.n(at);
      const st = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: n
          } = e;
          const [r, i] = (0, o.useState)(""), c = (0, o.useMemo)((() => tt()().getData()), []);
          return (0, u.jsx)(et.Ay, {
            unstyled: !0,
            value: r,
            isMulti: a,
            allowSelectAll: t,
            options: c,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void i(a);
              var a
            },
            classNamePrefix: "country-select",
            ...n
          })
        },
        nt = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: n
          } = e;
          const r = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            i = new URLSearchParams(window.location.search).get(a);
          return i && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, i), r === t || i === t ? s : n
        };
      var rt = t(26371),
        it = t(52328);
      const ct = "rockstargames-sites-gta-gen9c63cfb461217f059c8c25eec09602b30",
        ot = e => {
          let {
            color: a
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, u.jsx)("div", {
              className: ct
            }), (0, u.jsx)("div", {
              className: ct
            }), (0, u.jsx)("div", {
              className: ct
            })]
          })
        };
      var lt = t(64205);
      const dt = {
          dropdownWrapper: "rockstargames-sites-gta-gen9b951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-gta-gen9b0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-gta-gen9f5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-gta-gen9ecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-gta-gen9b64c3515fcd91f6b84410bd14640da81"
        },
        mt = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [n, r] = (0, o.useState)(!1);
          let i = null;
          return i = lt.Ay, (0, u.jsx)(i, {
            disabled: !n,
            children: (0, u.jsxs)("div", {
              className: [dt.dropdownWrapper, n ? dt.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, u.jsx)("button", {
                className: dt.opener,
                onClick: () => r(!n),
                children: s
              }), n && (0, u.jsx)("div", {
                className: dt.items,
                onClick: () => r(!1),
                children: a
              })]
            })
          })
        },
        gt = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, u.jsxs)("figure", {
            ...s,
            children: [t, (0, u.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        ut = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d393ab6eb68d416b116b6281abdb5e14",
            type: t,
            children: (0, u.jsxs)(_, {
              children: [a && (0, u.jsx)("h3", {
                children: a
              }), (0, u.jsx)(_, {
                className: "rockstargames-sites-gta-gen9ed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, u.jsx)(gt, {
                    caption: e?.caption,
                    children: (0, u.jsx)("div", {
                      className: "rockstargames-sites-gta-gen9dcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, u.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var t
                }))
              })]
            })
          }) : null
        },
        ft = {
          animateBox: "rockstargames-sites-gta-gen9e9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-gta-gen9a63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-gta-gen9d7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-gta-gen9b0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-gta-gen9a4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-gta-gen9f9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        pt = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([ft.visible])
              }))
            })).observe(s?.current)
          }), []), (0, u.jsx)("div", {
            style: t,
            className: [ft.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        bt = {
          gameSiteHeader: "rockstargames-sites-gta-gen9cb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-gta-gen9aa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-gta-gen9ac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-gta-gen9e5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-gta-gen9b98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-gta-gen9e666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-gta-gen9cfc6fd456ca2f3e9db06f780f412660f"
        },
        kt = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: n = "",
            game: r
          } = e;
          const [i, c] = (0, o.useState)(!1), l = (0, D.useMutateState)(), {
            navHidden: d
          } = (0, D.useState)();
          return (0, o.useEffect)((() => {
            l({
              gameSiteNavOpen: i
            })
          }), [i]), (0, o.useEffect)((() => {
            const e = () => {
              c(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, u.jsxs)("header", {
            "data-game": r,
            className: [bt.gameSiteHeader, i ? bt.headerNavOpen : "", d ? bt.navHidden : "", t.gameSiteHeader, i ? t.headerNavOpen : ""].join(" "),
            children: [(0, u.jsx)("button", {
              className: [bt.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                c(!i), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, u.jsx)("div", {
              className: bt.bg
            }), (0, u.jsx)("nav", {
              children: (0, u.jsx)("div", {
                className: bt.navContent,
                children: s
              })
            }), n]
          })
        },
        ht = (0, O.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        vt = {
          pillBtn: "rockstargames-sites-gta-gen9cb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-sites-gta-gen9c951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-sites-gta-gen9fa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-sites-gta-gen9b631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-sites-gta-gen9edc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-sites-gta-gen9c4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-sites-gta-gen9c7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-sites-gta-gen9e3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-sites-gta-gen9c646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-sites-gta-gen9bcccd1077d13d7fe1585655e5c5f8363"
        },
        xt = (0, O.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s,
            location: n,
            parent: r = "footer"
          } = e;
          const {
            track: i
          } = (0, m.useGtmTrack)(), c = (0, O.useIntl)(), [l, d] = (0, O.getLocale)(), [g, f] = (0, o.useState)(!1), p = (0, o.useMemo)((() => (0, z.A)()), []), b = (0, o.useCallback)((e => {
            let a = n.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return O.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), p.currentSite?.site === z.C.www ? "en" === e ? `${window.location.origin}/${a}${n.search}` : `${window.location.origin}/${e}/${a}${n.search}` : `${window.location.origin}/${a}${n.search}`
          }), [n]), k = (0, o.useRef)(null), [h, v] = (0, o.useState)(0), x = matchMedia("(hover: none) and (pointer: coarse)").matches, _ = e => {
            if (s && s(!1), l.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = O.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = b(e);
              i({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: r
              }), d(a.iso), window.location.href = t
            }
          };
          return (0, o.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === g && f(!1)
          }), [t]), (0, o.useEffect)((() => {
            k.current && v(k.current.scrollHeight)
          }), [k]), (0, u.jsxs)("div", {
            className: [vt.languageSelector, g ? vt.open : ""].join(" "),
            "data-theme": a,
            children: [x && "sc-menu" === a && (0, u.jsx)("div", {
              className: vt.selectBoxWrapper,
              children: (0, u.jsxs)("select", {
                className: vt.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  _(a)
                },
                "aria-label": c.formatMessage(ht.language_selector_default),
                children: [(0, u.jsx)("option", {
                  className: vt.selectBoxOption,
                  value: "none",
                  children: (0, u.jsx)(O.FormattedMessage, {
                    ...ht.language_selector_default
                  })
                }), O.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, u.jsx)("option", {
                    className: vt.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!x || "sc-menu" !== a) && (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!g), f(!g)
                },
                type: "button",
                "aria-label": c.formatMessage(ht.language_selector_default),
                children: [(0, u.jsx)("i", {}), (0, u.jsx)("span", {
                  children: (0, u.jsx)(O.FormattedMessage, {
                    ...ht.language_selector_default
                  })
                })]
              }), (0, u.jsx)("div", {
                className: vt.linkWrapper,
                ref: k,
                style: {
                  "--ls-linkWrapper-opened-height": `${h}px`
                },
                children: (0, u.jsx)("div", {
                  className: vt.links,
                  children: O.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, u.jsx)(U.A, {
                      to: b(a),
                      onClick: (s = a, () => {
                        _(s)
                      }),
                      tabIndex: g ? 0 : -1,
                      children: t
                    }, `desktop-${a}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), H),
        _t = {
          layeredImage: "rockstargames-sites-gta-gen9a29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-gta-gen9aabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-gta-gen9ca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-gta-gen9f0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-gta-gen9e03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-gta-gen9c4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-gta-gen9b283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-gta-gen9e9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-gta-gen9e45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-gta-gen9ed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-gta-gen9faf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-gta-gen9b41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-gta-gen9ba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-gta-gen9ec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-gta-gen9a6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-gta-gen9d7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-gta-gen9ca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-gta-gen9bd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-gta-gen9fe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-gta-gen9bde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-gta-gen9b87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-gta-gen9ac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-gta-gen9d63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-gta-gen9d248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-gta-gen9a8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-gta-gen9dcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-gta-gen9b656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-gta-gen9adaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-gta-gen9c73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-gta-gen9e650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-gta-gen9b0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-gta-gen9e41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-gta-gen9db575e1d021e69ebb4265a29484e2888"
        },
        yt = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            n = a["--border-image-source"],
            r = (0, N.useGetCdnSource)(n || null);
          return n && (s["--border-image-source"] = `url(${r})`), (0, u.jsx)("div", {
            className: (0, N.classList)(_t.border, t),
            style: {
              ...s
            }
          })
        },
        Nt = e => e?.images ? (0, u.jsx)("div", {
          className: (0, N.classList)(_t.layeredImage, _t[e?.variantClass], _t[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, u.jsxs)("div", {
            className: _t.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: n,
                objectFitClass: r,
                positionClassX: i,
                positionClassY: c,
                zIndex: o,
                className: l,
                style: d,
                alt: m,
                displayClass: g
              } = e;
              return (0, u.jsx)(Sa.A, {
                image: t,
                style: {
                  zIndex: o ?? a + 1
                },
                imageStyle: d,
                className: (0, N.classList)(l, g, _t.imageLayer, _t[s], _t[n], _t[r], _t[i], _t[c]),
                alt: m
              }, o ?? a + 1)
            })), e?.borderImage && (0, u.jsx)(yt, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        jt = e => {
          const {
            src: a,
            thumbnail: t,
            style: s
          } = e, n = (0, x.useGetCdnSource)(a), r = (0, x.useGetCdnSource)(t?.thumbnail ?? ""), i = {
            ...t,
            ...e,
            src: n,
            thumbnail: r
          };
          return (0, u.jsx)("div", {
            style: s,
            className: "rockstargames-sites-gta-gen9ba57806be35d331458382a4c3554ae11",
            children: (0, u.jsx)(W.Lightbox, {
              ...i
            })
          })
        },
        St = {
          pillBtn: "rockstargames-sites-gta-gen9eea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-gta-gen9d1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-gta-gen9dc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-gta-gen9ee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-gta-gen9fbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-gta-gen9f6040b2ae96a9b0dcdb2d283c9caff59"
        },
        wt = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: n,
            lazy: r = !1,
            decoding: i = "auto",
            sizes: c = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, o.useState)(!1);
          return (0, u.jsxs)("div", {
            className: St.multiSourceContainer,
            children: [!l && (0, u.jsx)("img", {
              className: [t, St.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: n
            }), (0, u.jsx)("img", {
              className: [St.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, c.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: n,
              onLoad: () => {
                d(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: i
            })]
          });
          var m
        };
      var Ct = t(14522);
      const Tt = {
          tag: "rockstargames-sites-gta-gen9ed77774d2704bc0ebc0ac156542ae053"
        },
        It = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: n
          } = e;
          const r = (0, u.jsxs)("div", {
            style: n,
            className: [Tt.tag, a].join(" "),
            children: [(0, u.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, u.jsx)(U.A, {
            to: t,
            children: r
          }) : r
        },
        Mt = {
          newswireBlock: "rockstargames-sites-gta-gen9a793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-gta-gen9d50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-gta-gen9cc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-gta-gen9ffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-gta-gen9bbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-gta-gen9f88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-gta-gen9fa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-gta-gen9e380e8c67066df6f33fc018341ea96e5"
        },
        Et = e => {
          let {
            section: a = "",
            index: t,
            post: s,
            noSpecialOrder: n = !1,
            focused: r
          } = e;
          const {
            track: i
          } = (0, m.useGtmTrack)(), [c] = (0, l.useSearchParams)(), g = s.preview_images_parsed.newswire_block, f = {
            default: 0 !== t || n ? g.square || g.d16x9 || g._fallback : g.d16x9 || g.square || g._fallback,
            mobile: g.square || g._fallback
          }, [p, b] = (0, d.usePreloadImg)(f.default), k = {
            default: {
              backgroundImage: `url(${f.default})`
            },
            mobile: {
              backgroundImage: `url(${f.mobile})`
            }
          }, h = (0, o.useCallback)((() => {
            i({
              event: "card_click",
              card_id: s.id,
              card_name: s.name_slug.replace(/-/g, " "),
              link_url: s.url,
              position: t,
              element_placement: a
            })
          }), [s]);
          return (0, u.jsx)(U.A, {
            to: s.url,
            className: [Mt.newswireBlock, n ? Mt.newswireBlockNoSpecialOrder : "", null !== p ? Mt.startAnimation : ""].join(" "),
            focused: r,
            onClick: h,
            children: (0, u.jsxs)(u.Fragment, {
              children: [0 !== t || c.get("tag_id") ? (0, u.jsx)("div", {
                className: Mt.preview,
                style: k.default
              }) : (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: Mt.previewMobile,
                  style: k.mobile
                }), (0, u.jsx)("div", {
                  className: Mt.preview,
                  style: k.default
                })]
              }), (0, u.jsxs)("div", {
                className: Mt.info,
                children: [(0, u.jsxs)("div", {
                  className: Mt.top,
                  children: [s.primary_tags.length ? (0, u.jsx)(It, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, u.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, u.jsx)("h5", {
                  className: Mt.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var At = t(31955),
        Lt = t.n(At);
      const Pt = (0, d.withTranslations)((e => {
          let {
            section: a = "",
            relativeTo: t = "",
            tagId: s = null,
            metaUrl: n = "/newswire",
            t: r
          } = e;
          const {
            track: i
          } = (0, m.useGtmTrack)(), [c, d] = (0, l.useSearchParams)(), {
            tagId: g = null
          } = (0, l.useParams)(), [f, p] = (0, o.useState)(g ?? s ?? c.get("tag_id")), [b, k] = (0, o.useState)(1), [h, v] = (0, o.useState)(20), [x, _] = (0, o.useState)([]), [y, N] = (0, o.useState)(null), [j, {
            loading: S,
            data: w
          }] = (0, D.useLazyQuery)(Lt(), {
            variables: {
              tagId: Number(f),
              page: b,
              metaUrl: n,
              limit: h,
              locale: "en_us"
            }
          });
          return (0, o.useEffect)((() => {
            k(1), _([]), v(20), p(g ?? s ?? c.get("tag_id")), j()
          }), [c.get("tag_id"), g, s]), (0, o.useEffect)((() => {
            const e = x;
            w?.posts?.paging && N(w?.posts?.paging), w?.posts?.results && _(e.concat(w?.posts?.results))
          }), [w]), (0, o.useEffect)((() => {
            (() => {
              const e = c.get("page"),
                a = Number(e ?? 1);
              v(20 * a), j()
            })()
          }), []), x.length ? (0, u.jsxs)("div", {
            "data-testid": "newswire-list",
            children: [(0, u.jsx)(Rt, {
              section: a,
              posts: x,
              relativeTo: t,
              noSpecialOrder: null !== f
            }), null !== y && y.nextPage ? (0, u.jsx)(Ia.A, {
              "data-testid": "more-stories",
              onClick: e => {
                const a = c.get("page"),
                  t = Number(a ?? b) + 1;
                k(t), 20 !== h && v(20), j(), d({
                  page: String(t)
                }, {
                  replace: !0
                }), i({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: S,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        Bt = {
          pillBtn: "rockstargames-sites-gta-gen9afd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-gta-gen9bcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-gta-gen9a748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-gta-gen9c0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-gta-gen9b1a31ddf7fd4458ee860d354a6a0ac92"
        },
        $t = (0, d.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, u.jsxs)("section", {
            className: Bt.related,
            children: [(0, u.jsx)("h2", {
              children: t("Related Stories")
            }), (0, u.jsx)("div", {
              className: [Bt.posts, 1 === a.length ? Bt.just1post : ""].join(" "),
              children: a.map((e => (0, u.jsx)(Et, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Vt = {
          newswireBlocks: "rockstargames-sites-gta-gen9c2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-gta-gen9c0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Rt = (0, d.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: s,
            gtmTrack: n,
            relativeTo: r
          } = e;
          const [i, c] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((t, s) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: a
              })
            })), n(e), c(s.length)
          }), [s.length]), (0, u.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Vt.newswireBlocks, t ? Vt.noSpecialOrder : "", Vt.contextHome].join(" "),
            children: s.map(((e, s) => (0, u.jsx)(Et, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === i
            }, e.id)))
          })
        }));
      var Dt = t(26889),
        Ot = t(83082);
      const zt = "rockstargames-sites-gta-gen9c54c374409e11d1429ce99457cbf7441",
        Ft = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: n,
            className: r
          } = e;
          return (0, u.jsx)("a", {
            href: "#",
            className: n === t.page ? `rockstargames-sites-gta-gen9c0eebf4f915ff9f5cc362e22d6d7d976 ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(n)
            },
            children: a
          })
        },
        Ht = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const n = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, u.jsxs)("div", {
            className: `rockstargames-sites-gta-gen9a626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [a.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(Ft, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, u.jsx)("div", {
                className: zt,
                children: "..."
              }) : ""]
            }) : "", n.map((e => (0, u.jsx)(Ft, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [n.slice(-1)[0] + 1 < a.pageCount ? (0, u.jsx)("div", {
                className: zt,
                children: "..."
              }) : "", (0, u.jsx)(Ft, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var Gt = t(67446),
        Wt = t(90250);
      const Ut = (0, D.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        qt = Ut("languageSelectorOpenedReactive", !1),
        Xt = e => qt(e),
        Yt = Ut("activeSubNavIdReactive", -1),
        Kt = e => Yt(e),
        Qt = Ut("subNavExtraHeightReactive", -1),
        Zt = e => Qt(e),
        Jt = Ut("scNavOpenedReactive", !0),
        es = e => Jt(e),
        as = Ut("charListHiddenReactive", !0),
        ts = e => as(e),
        ss = () => {
          const e = (0, D.useReactiveVar)(qt),
            a = (0, D.useReactiveVar)(Yt),
            t = (0, D.useReactiveVar)(Qt),
            s = (0, D.useReactiveVar)(Jt),
            n = (0, D.useReactiveVar)(as);
          return (0, o.useEffect)((() => {
            n || (e && Xt(!1), s && (es(!1), Kt(-1)))
          }), [n]), (0, o.useEffect)((() => {
            !e && n && (s || es(!0))
          }), [e, n]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Xt,
            activeSubNavId: a,
            setActiveSubNavId: Kt,
            subNavExtraHeight: t,
            setSubNavExtraHeight: Zt,
            scNavOpened: s,
            setScNavOpened: es,
            charListHidden: n,
            setCharListHidden: ts
          })), [e, a, t, s, n])
        };
      var ns = t(39493),
        rs = t(14963),
        is = t.n(rs);
      const cs = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        os = e => ({
          text: e.formatMessage(ns.A.sc_link_help),
          target: "_self",
          ga: {
            ...cs,
            text: ns.A.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(ns.A.sc_link_support),
            location: {
              domain: z.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...cs,
              text: ns.A.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(ns.A.sc_link_legal),
            location: {
              domain: z.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...cs,
              text: ns.A.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(ns.A.sc_link_privacy_policy),
            location: {
              domain: z.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...cs,
              text: ns.A.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(ns.A.sc_link_cookies_policy),
            location: {
              domain: z.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...cs,
              text: ns.A.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(ns.A.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...cs,
              text: ns.A.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(ns.A.sc_link_do_not_sell_my_information),
            location: {
              domain: z.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...cs,
              text: ns.A.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        ls = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: n,
            onClick: r,
            reloadDocument: i,
            children: c,
            ...o
          } = e;
          const l = a?.startsWith("http");
          return (0, u.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              r?.(e), l || i || (n ? (e.preventDefault(), n(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...o,
            children: c
          })
        },
        ds = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: n,
            ga: r,
            dataTestId: i,
            isSubLink: c,
            hasNotifications: o = !1,
            onClickCallback: l = (() => {}),
            tabIndex: d,
            reloadDocument: g = !1,
            onNavigate: f
          } = e;
          const {
            track: p
          } = (0, m.useGtmTrack)(), b = (0, z.A)(), k = (0, O.useIntl)();
          let h = s;
          n && (h = n.domain === b.currentSite?.site ? n.path : `https://${b.sites[n.domain]}.rockstargames.com${n.path}`);
          const v = {
            ...r,
            link_url: h
          };
          return (0, u.jsxs)(ls, {
            className: c ? "rockstargames-sites-gta-gen9fdaa918acc06706cbe191dedd40974af" : "rockstargames-sites-gta-gen9cbc80932118c48d8ec14448d8913d068",
            "data-testid": i || "menuLink",
            title: a,
            to: h,
            target: t,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: d,
            onClick: e => {
              p(v), l(e)
            },
            onNavigate: f,
            children: [a, o && (0, u.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a2d268c9fb03a7271b47de447d663da9",
              children: (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9cf5a6b05c52c6c4faf3236055d4670c3",
                children: k.formatMessage(ns.A.nofications_new)
              })
            })]
          })
        },
        ms = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: n,
            location: r,
            ga: i,
            hasNotifications: c = !1,
            dataTestId: l,
            children: g = [],
            activeSubNavId: f,
            setActiveSubNavId: p,
            setSubNavExtraHeight: b,
            reloadDocument: k = !1,
            onClickCallback: h = (() => {}),
            onNavigate: v
          } = e;
          const {
            windowWidth: x,
            windowHeight: _
          } = (0, d.useWindowResize)(), {
            track: y
          } = (0, m.useGtmTrack)(), {
            navOpen: N
          } = (0, m.useRockstarUserState)(), j = (0, o.useRef)(null), [S, w] = (0, o.useState)(0), [C, T] = (0, o.useState)(0), [I, M] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            f !== a && !1 === I && M(!0), f === a && M(!1)
          }), [f]), (0, o.useEffect)((() => {
            if (!j.current) return;
            w(j?.current?.scrollHeight);
            const e = window.getComputedStyle(j.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), T(a)
            }
          }), [j, x, _]), g.length > 0 ? (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("button", {
              className: "rockstargames-sites-gta-gen9af10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: N ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), y(i), f === a ? (p(-1), b(0)) : (p(a), b(S + C + C))
              },
              children: [(0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9fd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9be674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, u.jsx)("nav", {
              className: "rockstargames-sites-gta-gen9ff1911053a3515534dd825554a85909e",
              ref: j,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${S}px`
              },
              children: g.map((e => (0, o.createElement)(ds, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !N ? -1 : 0,
                onNavigate: v
              })))
            })]
          }) : (0, u.jsx)(ds, {
            text: t,
            target: s,
            href: n,
            location: r,
            ga: i,
            hasNotifications: c,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: N ? 0 : -1,
            reloadDocument: k,
            onNavigate: v
          })
        },
        gs = e => {
          let {
            sc: a,
            location: t,
            onNavigate: s
          } = e;
          const {
            windowWidth: n,
            windowHeight: r
          } = (0, d.useWindowResize)(), i = (0, O.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: l,
            activeSubNavId: g,
            setActiveSubNavId: f,
            subNavExtraHeight: p,
            setSubNavExtraHeight: b
          } = ss(), {
            setSelectedCharacterTuple: k,
            navOpen: h
          } = (0, m.useRockstarUserState)(), v = (0, d.useLocale)(), x = (0, d.toScLocaleString)(v), [_, y] = (0, o.useState)(""), N = `${a.login}?returnUrl=${_}&lang=${x}`, j = `${a.signup}&returnUrl=${_}&lang=${x}`, S = (0, o.useMemo)((() => (0, z.A)()), []), w = (0, o.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(ns.A.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: ns.A.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(ns.A.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: ns.A.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, os(e)])(i, N, j);
            return e
          }), [i, N, j, S]), [C, T] = (0, o.useState)(0), I = (0, o.createRef)(), M = () => {
            if (I.current) {
              const {
                current: e
              } = I, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), T(a + e)
              } else T(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            y(e)
          }), [JSON.stringify(t)]), (0, o.useEffect)((() => {
            k(!1)
          }), []), (0, o.useEffect)((() => {
            M(), is()((() => {
              setTimeout(M, 0)
            }), 300)
          }), [n, r]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("nav", {
              className: "rockstargames-sites-gta-gen9b1552e1f97b08ee4337f78fa4486ffac",
              children: (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${p+C}px`
                },
                children: w.map((e => (0, o.createElement)(ms, {
                  ...e,
                  activeSubNavId: g,
                  setActiveSubNavId: f,
                  setSubNavExtraHeight: b,
                  onNavigate: s,
                  key: e.text
                })))
              })
            }), (0, u.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, u.jsx)(xt, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: c,
                setLanguageSelectorOpened: e => {
                  f(-1), l(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        };
      var us = t(98310),
        fs = t(73167);
      const ps = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        bs = "CharacterButton:characterName",
        ks = "CharacterButton:platform",
        hs = "CharacterButton:avatar",
        vs = "CharacterButton:rankValue",
        xs = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: n
          } = e;
          const r = (0, O.useIntl)(),
            {
              currentCharId: i,
              setCurrentCharId: c
            } = (0, m.useRockstarUserState)(),
            {
              track: l
            } = (0, m.useGtmTrack)(),
            d = (0, o.createRef)(),
            {
              platform: g,
              platformUsername: f,
              mugshotUrl: p,
              stats: b
            } = a,
            [k, h] = (0, o.useState)(p),
            [v] = (0, o.useState)(a.index),
            x = (0, fs.A)(g, "large"),
            _ = i === a.index;
          return (0, o.useEffect)((() => {
            d.current && s && s(d?.current?.offsetWidth)
          }), [d]), (0, u.jsxs)("button", {
            className: "rockstargames-sites-gta-gen9d76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": _,
            onClick: e => {
              e.stopPropagation(), c(v), l({
                event: "character_selector_select",
                text: ps[g] ?? "",
                position: v
              })
            },
            ref: d,
            tabIndex: n,
            children: [(0, u.jsx)("div", {
              className: "rockstargames-sites-gta-gen9bbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, u.jsx)("img", {
                src: k,
                alt: r.formatMessage(ns.A.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  h(t(58989))
                },
                "data-testid": hs
              })
            }), (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, u.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9e9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, u.jsx)("img", {
                  src: x.src,
                  alt: x.alt,
                  "data-testid": ks
                }), (0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9b3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  "data-testid": bs,
                  children: f
                })]
              }), (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9a5e3df42966a50f3dd88bbcb57536617",
                children: (0, u.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9a6776312350028898320ba59145a39be",
                  children: [(0, u.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9b266652910ad34c0e8e097b212a958f0",
                    src: (0, us.A)(parseInt(b.overview.rank.value)),
                    alt: r.formatMessage(ns.A.profile_selector_rp_icon)
                  }), (0, u.jsx)("span", {
                    "data-testid": vs,
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        _s = {
          pillBtn: "rockstargames-sites-gta-gen9d9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-gta-gen9bc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-gta-gen9b954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-gta-gen9c15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-gta-gen9a8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-gta-gen9c91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-gta-gen9da83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-gta-gen9d7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-gta-gen9d5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-gta-gen9b7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-gta-gen9a581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-gta-gen9bdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-gta-gen9dc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-gta-gen9b2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-gta-gen9f17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-gta-gen9f14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-gta-gen9b3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-gta-gen9ec696aafed90a7a4c69dc53da0a5bb36"
        },
        ys = "ProfileCard:characterName",
        Ns = "ProfileCard:avatar",
        js = "ProfileCard:bankValue",
        Ss = "ProfileCard:cashValue",
        ws = "ProfileCard:rankValue",
        Cs = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: n
          } = (0, m.useRockstarUser)(), {
            track: r
          } = (0, m.useGtmTrack)(), i = (0, O.useIntl)(), [c, l] = (0, o.useState)([]), [d, g] = (0, o.useState)(null), [f, p] = (0, o.useState)(null), [b, k] = (0, o.useState)(!1), [h, v] = (0, o.useState)(-1), [x, _] = (0, o.useState)([]), [y, N] = (0, o.useState)(0), j = t(58989), [S, w] = (0, o.useState)("0"), [C, T] = (0, o.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            A((0, u.jsx)("img", {
              src: j,
              alt: i.formatMessage(ns.A.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          }, [E, A] = (0, o.useState)((0, u.jsx)("img", {
            className: _s.scAvatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(ns.A.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: M,
            "data-testid": Ns
          }));
          (0, o.useEffect)((() => {
            l(n.crews ?? [])
          }), [n.crews]), (0, o.useEffect)((() => {
            A((0, u.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: M,
              "data-testid": Ns
            })), w(I(a.stats.overview.bank.value)), T(I(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, n.nickname]), (0, o.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), p(e.crewColour), v(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [c]), (0, o.useEffect)((() => {
            const e = [];
            if (!b && h > -1)
              for (let a = 5; a > h; a -= 1) e.push((0, u.jsx)("div", {
                className: _s.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            _(e)
          }), [h, b, f]);
          const L = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, u.jsxs)("div", {
            className: _s.scProfileDetails,
            onClick: L,
            onKeyUp: L,
            role: "button",
            tabIndex: -1,
            children: [(0, u.jsxs)("div", {
              className: _s.scAvatar,
              children: [E, (0, u.jsx)("div", {
                className: _s.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, u.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, u.jsxs)("div", {
              className: _s.scProfileStats,
              children: [(0, u.jsx)("div", {
                className: _s.scNames,
                children: (0, u.jsxs)("div", {
                  className: _s.scTagsNames,
                  children: [(0, u.jsx)("span", {
                    className: _s.scUserName,
                    "data-testid": ys,
                    children: a.platformUsername
                  }), d && (0, u.jsxs)("span", {
                    className: _s.scCrewName,
                    "data-arrow-tag": b,
                    children: [d, !b && (0, u.jsx)("div", {
                      className: _s.scCrewRankBar,
                      children: x
                    })]
                  })]
                })
              }), (0, u.jsxs)("div", {
                className: _s.scProgress,
                children: [(0, u.jsxs)("div", {
                  className: _s.scRpLevel,
                  children: [(0, u.jsx)("img", {
                    className: _s.scRpIcon,
                    src: (0, us.A)(y),
                    alt: i.formatMessage(ns.A.profile_selector_rp_icon)
                  }), (0, u.jsx)("span", {
                    "data-testid": ws,
                    children: a.stats.overview.rank.value
                  })]
                }), (0, u.jsxs)("div", {
                  className: _s.scMoney,
                  children: [(0, u.jsxs)("span", {
                    className: _s.scCash,
                    "data-testid": Ss,
                    children: ["$", C]
                  }), (0, u.jsxs)("span", {
                    className: _s.scBank,
                    "data-testid": js,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        Ts = (e, a) => {
          const [t, s] = (0, o.useState)(0);
          return (0, o.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, n = t.getBoundingClientRect(), {
                width: r
              } = n;
              let i = r;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                i += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(i)
            }
          }), [e]), t
        },
        Is = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: n = null,
            slideClickCallback: r = null,
            children: i = [],
            disablePager: c = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, o.createRef)(),
            m = Ts(d, !1),
            [g, f] = (0, o.useState)(!1),
            [p, b] = (0, o.useState)(0),
            [k, h] = (0, o.useState)(0),
            [v, x] = (0, o.useState)([s]),
            [_, y] = (0, o.useState)(v[0]),
            [N, j] = (0, o.useState)(252),
            [S, w] = (0, o.useState)(0),
            [C, T] = (0, o.useState)([]),
            [I, M] = (0, o.useState)([]),
            [E, A] = (0, o.useState)(!1),
            L = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(a)
            },
            P = e => {
              if (!0 === g || 0 === k || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > k ? 1 : -1,
                r = Math.abs(k - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                b(e), y(v[e]), n && n(e)
              })() : (() => {
                if (!0 === g) return;
                f(!0);
                let e = p + 1 >= v.length ? v.length - 1 : p + 1;
                e < 0 && (e = 0), b(e), y(v[e]), n && n(e)
              })(), h(0)) : y(v[p] + r * s)
            },
            B = () => {
              !0 !== g && !0 !== l && (f(!0), !0 !== g && (y(v[p]), h(0)))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, o.createRef)())
            })), T(e)
          }), [i]), (0, o.useEffect)((() => {
            if (C.length < 1) return;
            j(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            w(t + a)
          }), [C]), (0, o.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              f(!1)
            }), t)
          }), [g, t]), (0, o.useEffect)((() => {
            x(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * m - .5 * N - 2 * s + S : (0 === e && (a = s - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (m - (s - S))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * m - .5 * N + .5 * S)), a)
            })(a)))), 1 === i.length ? A(!0) : A(!1)
          }), [d.current, i, m]), (0, o.useEffect)((() => {
            const e = (a = p, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            M(e)
          }), [i, p]), (0, o.useEffect)((() => {
            !0 !== c && !0 !== l || y(v[0])
          }), [l, c, v]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: L,
              onTouchMove: P,
              onTouchEnd: B,
              onMouseDown: L,
              onMouseMove: P,
              onMouseUp: B,
              onClick: () => {
                null !== r && r(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9a93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${_}px)`
                },
                children: i.map(((e, a) => (0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === c && (0, u.jsx)("div", {
              className: "rockstargames-sites-gta-gen9da8cfef07bf44e9a44839e2723ec61bb",
              children: I.map((e => (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9fe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Ms = {
          pillBtn: "rockstargames-sites-gta-gen9aa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-gta-gen9d402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-gta-gen9dde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-gta-gen9c47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-gta-gen9a4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-gta-gen9b1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-gta-gen9a1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-gta-gen9a326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-gta-gen9d19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-gta-gen9bb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-gta-gen9a7f1e2d78519eaf099bd43c6ad07abc9"
        },
        Es = (0, d.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: n,
            menuPadding: r,
            longCharList: i,
            setLongCharList: c,
            isMobileMode: l,
            setIsMobileMode: g,
            location: f,
            onNavigate: p
          } = e;
          const {
            windowWidth: b,
            windowHeight: k
          } = (0, d.useWindowResize)(), h = (0, O.useIntl)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: x,
            activeSubNavId: _,
            setActiveSubNavId: y,
            subNavExtraHeight: N,
            setSubNavExtraHeight: j,
            scNavOpened: S,
            setScNavOpened: w
          } = ss(), [C, T] = (0, o.useState)(""), {
            lsSettings: I
          } = (0, d.useRockstarWebLSSettings)(), {
            track: M
          } = (0, m.useGtmTrack)(), E = (0, D.useRockstarTokenPing)(), {
            data: A,
            loggedIn: L
          } = (0, m.useRockstarUser)(), {
            charactersNeeded: P,
            currentCharId: B,
            hasNotifications: $,
            navOpen: V,
            setCurrentCharId: R,
            setHasNotifications: F,
            setSelectedCharacterTuple: H,
            setUserData: G
          } = (0, m.useRockstarUserState)(), [W, U] = (0, o.useState)(null), [q, X] = (0, o.useState)(null), [Y, K] = (0, o.useState)(!1), [Q, Z] = (0, o.useState)(!1), [J, ee] = (0, o.useState)(0), ae = (0, o.createRef)(), te = Ts(ae, !1), se = (0, o.createRef)(), [ne, re] = (0, o.useState)(0), [ie, ce] = (0, o.useState)([]), [oe, le] = (0, o.useState)(244), de = (0, o.useRef)(null), me = (0, o.useMemo)((() => (0, z.A)()), []), ge = (0, o.useMemo)((() => ((e, a, t, s, n) => [{
            text: e.formatMessage(ns.A.sc_link_activity_feed),
            location: {
              domain: z.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...cs,
              text: ns.A.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(ns.A.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(ns.A.sc_link_settings),
              location: {
                domain: z.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...cs,
                text: ns.A.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(ns.A.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...cs,
                text: ns.A.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(ns.A.sc_link_messages),
              location: {
                domain: z.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...cs,
                text: ns.A.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(ns.A.sc_link_game_activation),
              location: {
                domain: z.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...cs,
                text: ns.A.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(ns.A.sc_link_notifications),
            location: {
              domain: z.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...cs,
              text: ns.A.sc_link_notifications.defaultMessage,
              location: {
                domain: z.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(ns.A.sc_link_crews),
            location: {
              domain: z.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...cs,
              text: ns.A.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(ns.A.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(ns.A.sc_link_my_friends),
              location: {
                domain: z.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...cs,
                text: ns.A.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(ns.A.sc_link_import_friends),
              location: {
                domain: z.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...cs,
                text: ns.A.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(ns.A.sc_link_find_friends),
              location: {
                domain: z.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...cs,
                text: ns.A.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, os(e), {
            text: e.formatMessage(ns.A.sc_link_log_out),
            href: `${a.logout}?returnUrl=${n}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...cs,
              text: ns.A.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(h, a, A, $, C, window)), [h, a, A, $, C, me]), ue = () => {
            Z(r + oe * J < te)
          }, fe = () => {
            if (se.current) {
              const {
                current: e
              } = se, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), re(a + e)
              } else re(a)
            }
          };
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            me.currentSite?.site === z.C.socialClub && (e = encodeURIComponent("/")), T(e)
          }), [f]), (0, o.useEffect)((() => {
            ce(A.characters[P] ?? [])
          }), [A, P]), (0, o.useEffect)((() => {
            A && G(A)
          }), [A]), (0, o.useEffect)((() => {
            const e = A?.characters.gtao;
            if (null !== L && !e.length) return void H(!1);
            if (null == B || !e.length) return;
            const a = e?.[B] ?? e?.[0] ?? null;
            H(!!a?.platform && [a.platform, a.characterSlot])
          }), [B, A, L]), (0, o.useEffect)((() => {
            (async () => {
              if (!A?.id) return;
              const {
                count: e
              } = await (0, d.coreScApiFetch)("notification/count", {
                pingBearer: E
              });
              F(e > 0)
            })()
          }), [A]), (0, o.useEffect)((() => {
            ue()
          }), [oe]), (0, o.useEffect)((() => {
            s(!0), g(b < 768), g(b < 768 || k < 649)
          }), [b, k]), (0, o.useEffect)((() => {
            let e = ie.length - 1;
            e < 0 && (e = 0), ee(e);
            const a = ie.length > 0 ? ie[B] ?? ie[0] : null;
            if (!a) return;
            const t = null !== a ? (0, fs.A)(a.platform, "large") : null;
            X(t), U(a), ie.length > 1 ? K(!0) : K(!1), c(ie.length - 1 > 3)
          }), [B, ie]), (0, o.useEffect)((() => {
            ue()
          }), [J, l, b, ie]), (0, o.useEffect)((() => {
            fe(), is()((() => {
              setTimeout(fe, 0)
            }), 300)
          }), [b, k]), (0, o.useEffect)((() => {
            const e = I?.currentCharId ?? 0;
            e !== B && R(Math.max(0, Math.min(e, ie.length - 1)))
          }), [ie, I]), (0, u.jsxs)(u.Fragment, {
            children: [null !== W && "gtao" === P && (0, u.jsxs)("div", {
              className: Ms.scProfile,
              ref: de,
              tabIndex: -1,
              "aria-label": h.formatMessage(ns.A.profile_selector_profile_card),
              children: [(0, u.jsx)(Cs, {
                s: Ms,
                character: W,
                platformTag: q
              }), !0 === Y && (0, u.jsxs)("div", {
                className: Ms.scCharacterSelector,
                children: [(0, u.jsx)("button", {
                  className: Ms.scCharacterSelectBtn,
                  "aria-hidden": !V,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), M({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, u.jsx)("span", {
                    children: (0, u.jsx)(O.FormattedMessage, {
                      ...ns.A.profile_selector_switch_character
                    })
                  })
                }), !1 === l && (0, u.jsx)("div", {
                  className: Ms.scCharacterList,
                  "data-long-list": i,
                  "aria-hidden": t,
                  ref: n,
                  children: ie.map((e => (0, u.jsx)(xs, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: le
                  }, e.mugshotUrl)))
                }), !0 === l && (0, u.jsx)("div", {
                  className: Ms.scCharacterList,
                  "data-single-item": 2 === ie.length,
                  "data-swiper-disabled": Q,
                  "aria-hidden": t,
                  ref: ae,
                  children: (0, u.jsx)(Is, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      M({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: Q,
                    disableSwiper: Q,
                    children: ie.filter(((e, a) => a !== B)).map((e => (0, o.createElement)(xs, {
                      characterData: e,
                      setMobileCardWidth: le,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, u.jsxs)("nav", {
              className: Ms.scNav,
              "aria-hidden": !V,
              children: [(0, u.jsx)("button", {
                className: Ms.scNavHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": V,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || w(!0)
                },
                "data-testid": "playerButton",
                children: (0, u.jsx)("span", {
                  children: A.nickname
                })
              }), (0, u.jsx)("div", {
                className: Ms.scNavWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: se,
                style: {
                  "--scNavWrap-max-height": `${ne+N}px`
                },
                children: ge.map(((e, a) => (0, o.createElement)(ms, {
                  ...e,
                  id: a,
                  activeSubNavId: _,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: j,
                  onNavigate: p,
                  key: e.text
                })))
              })]
            }), (0, u.jsx)("div", {
              className: Ms.scLanguageSelector,
              style: {
                visibility: V ? null : "hidden"
              },
              children: (0, u.jsx)(xt, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: x,
                location: f
              })
            })]
          })
        })),
        As = {
          scMenu: "rockstargames-sites-gta-gen9ebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-gta-gen9f333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-gta-gen9e3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-gta-gen9ff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-gta-gen9ba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-gta-gen9d362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-gta-gen9d8e443f5d0d9171449f5f1042f80aa17"
        },
        Ls = (0, O.withIntl)((e => {
          let {
            location: a,
            onNavigate: s
          } = e;
          const {
            windowHeight: n
          } = (0, d.useWindowResize)(), r = (0, O.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: c,
            setActiveSubNavId: l,
            scNavOpened: g,
            setScNavOpened: f,
            charListHidden: p,
            setCharListHidden: b
          } = ss(), [k, h] = (0, o.useState)(!1), {
            navHidden: v = !1
          } = (0, D.useState)(), {
            loggedIn: x
          } = (0, m.useRockstarUser)(), {
            currentCharId: _,
            navOpen: y,
            setNavOpen: N,
            userData: j
          } = (0, m.useRockstarUserState)(), {
            track: S
          } = (0, m.useGtmTrack)(), [w, C] = (0, o.useState)(!1), T = (0, D.useReactiveVar)(m.scConfig), I = (0, o.useRef)(), [M, E] = (0, o.useState)(0), A = (0, o.createRef)(), [L, P] = (0, o.useState)(!1), [B, $] = (0, o.useState)(0), [V, R] = (0, o.useState)(!1), {
            mutateLSSettings: z,
            lsSettings: F
          } = (0, d.useRockstarWebLSSettings)(), H = (0, o.useCallback)((e => {
            b(e), I.current && !0 === e && (I.current.scrollTop = 0)
          }), [I]);
          return (0, o.useEffect)((() => {
            null !== _ && F.currentCharId !== _ && z({
              key: "currentCharId",
              value: _
            }), !1 === x ? z({
              key: "currentCharId",
              value: null
            }) : x && !j && S({
              event: "account_synced"
            })
          }), [_, x]), (0, o.useEffect)((() => {
            I.current && (!1 === p && !1 === w && (I.current.style.height = `${I.current.scrollHeight}px`), !0 === p && (I.current.style.height = null))
          }), [p, I, w]), (0, o.useEffect)((() => {
            const e = () => {
                N(!1), H(!0)
              },
              a = a => {
                const t = A?.current && a?.composedPath().includes(A.current);
                y && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [A]), (0, o.useEffect)((() => {
            N(!1), H(!0)
          }), [v]), (0, o.useEffect)((() => {
            if (A.current) {
              const {
                current: e
              } = A, a = window.getComputedStyle(e);
              E(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [A]), (0, o.useEffect)((() => {
            R(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            A.current && h(A?.current?.scrollHeight >= n)
          }), [A, n]), (0, o.useEffect)((() => {
            y || (l(-1), c(!1))
          }), [y]), (0, o.useEffect)((() => {
            i && (p || H(!0), g && (f(!1), l(-1)))
          }), [i]), (0, o.useEffect)((() => {
            g && (i && c(!1), p || H(!0))
          }), [g]), null === x ? null : (0, u.jsxs)(Wt.A, {
            enabled: !!y,
            removeScrollBar: !1,
            children: [(0, u.jsxs)("div", {
              className: [As.scMenu, y ? As.navOpen : ""].join(" "),
              "data-logged-in": x,
              "data-mac-browser": V,
              "data-scroll-mode": k,
              ref: A,
              "aria-hidden": !y,
              children: [(0, u.jsx)("button", {
                className: As.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  $(a)
                },
                onTouchMove: e => {
                  if (0 === B) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(B - a) > 1 && ($(0), N(!1))
                },
                children: (0, u.jsx)("img", {
                  className: As.dragHandle,
                  src: t(68128),
                  alt: r.formatMessage(ns.A.sc_menu_drag_handle)
                })
              }), x ? (0, u.jsx)(Es, {
                sc: T,
                charListHidden: p,
                hideCharacterList: H,
                refCharacterListDesktop: I,
                menuPadding: M,
                longCharList: w,
                setLongCharList: C,
                isMobileMode: L,
                setIsMobileMode: P,
                location: a,
                onNavigate: s
              }) : (0, u.jsx)(gs, {
                sc: T,
                navOpen: y,
                location: a,
                onNavigate: s
              })]
            }), (0, u.jsx)("div", {
              className: [As.scOverlay, y ? As.navOpen : ""].join(" "),
              "data-logged-in": x
            })]
          })
        }), H),
        Ps = t(58989),
        Bs = t(81764),
        $s = (0, O.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, O.useIntl)(),
            {
              data: s
            } = (0, m.useRockstarUser)(),
            {
              charactersNeeded: n,
              currentCharId: r,
              navOpen: i,
              setNavOpen: c
            } = (0, m.useRockstarUserState)(),
            {
              track: l
            } = (0, m.useGtmTrack)(),
            [d, g] = (0, o.useState)(null),
            [f, p] = (0, o.useState)(!1),
            [b, k] = (0, o.useState)(null),
            [h, v] = (0, o.useState)(!1),
            [x, _] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            _(s.characters[n] ?? [])
          }), [s, n]);
          const y = (0, o.useCallback)((e => {
            e.stopPropagation(), c(!i), 1 == !i && a(null), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: i ? "close" : "open"
            })
          }), [i]);
          return (0, o.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (x?.[r]?.mugshotUrl ?? s?.avatar) || Ps : Bs,
              t = (0, fs.A)(x?.[r]?.platform, "small") ?? null;
            k(t), g(a), p(e), v(!!x?.[r]?.mugshotUrl)
          }), [s, x, r, Ps, Bs]), (0, u.jsxs)("button", {
            className: "rockstargames-sites-gta-gen9dc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": h,
            "aria-label": t.formatMessage(i ? ns.A.sc_menu_close : ns.A.sc_menu_open),
            "aria-expanded": i,
            type: "button",
            onClick: y,
            "data-testid": "avaterMenuButton",
            "data-logged-in": Boolean(f),
            children: [(0, u.jsx)("img", {
              className: "rockstargames-sites-gta-gen9ce75eaa6d65692d36b60d31f3f660ff0",
              src: d || "",
              onError: () => {
                g(Ps)
              },
              alt: s?.nickname || ""
            }), f && null !== b && (0, u.jsx)("img", {
              className: "rockstargames-sites-gta-gen9aaf21e74a659089f743bb160bdf95046",
              src: b.src,
              alt: b.alt
            }), f && (0, u.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-gta-gen9cf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": x?.[r]?.platform ?? null
            })]
          })
        }), H),
        Vs = {
          responsiveFlexBox: "rockstargames-sites-gta-gen9cef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-gta-gen9a8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-gta-gen9bee8268780b292e5bc0da0b497e2c28f"
        },
        Rs = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [Vs.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Ds = {
          responsiveFlexItem: "rockstargames-sites-gta-gen9ae579f6183cf73c897e68c8aae5c9d9d"
        },
        Os = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [Ds.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        zs = {
          responsiveGridBox: "rockstargames-sites-gta-gen9a28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-gta-gen9beddf36313a28976090b5a8b04d2594a"
        },
        Fs = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: n,
            style: r
          } = e;
          const i = r ? {
            ...r
          } : {};
          return void 0 !== t && (i.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== n && (i.gridTemplateRows = `repeat(${n}, 1fr)`), (0, u.jsx)("div", {
            className: [zs.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: i,
            children: a
          })
        },
        Hs = {
          responsiveGridBox: "rockstargames-sites-gta-gen9a39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-gta-gen9be7a0966e2f0457c1172ac9da99020c6"
        },
        Gs = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [Hs.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Ws = {
          responsiveImage: "rockstargames-sites-gta-gen9e31b43dce2e720669fb90bf539d22197"
        },
        Us = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: n,
            style: r = {}
          } = e;
          const [i, c] = (0, d.usePreloadImg)(a);
          return i ? (r.backgroundImage = `url(${a})`, (0, u.jsx)("div", {
            role: "img",
            "aria-label": n ?? "R* Games",
            className: [Ws.responsiveImage, s ? Ws.animateBox : "", t].join(" "),
            style: {
              ...r,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        qs = {
          responsiveSection: "rockstargames-sites-gta-gen9fb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-gta-gen9bdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Xs = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: n
          } = e;
          return (0, u.jsx)("section", {
            className: [qs.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: n ? (0, u.jsx)("div", {
              className: qs.maxWidth,
              children: a
            }) : a
          })
        };
      var Ys = t(55636);
      const Ks = e => {
        let {
          html: a
        } = e;
        return (0, u.jsx)("div", {
          children: (0, Ys.Ay)(a)
        })
      };
      var Qs = t(80256);
      const Zs = () => {
        const {
          pathname: e
        } = (0, l.useLocation)();
        return (0, o.useEffect)((() => {
          const e = document.scrollingElement || document.documentElement;
          setTimeout((() => {
            e.scrollTop = 0
          }), 0)
        }), [e]), null
      };
      var Js = t(37017),
        en = t(63303),
        an = t(52983);
      const tn = e => {
        let {
          children: a
        } = e;
        return (0, u.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ecd6dfa85759d767ab1c7c18f4cfbda7",
          children: (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9fffab0d3ace375c65ad804002a45f219",
            children: a
          })
        })
      };
      var sn = t(62550);
      const nn = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [n, r] = (0, o.useState)(s);
          return (0, o.useEffect)((() => {
            s && r(s)
          }), [s]), (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9a3cc68ab0d512c3d8835ee9abb7a51c4",
            style: t,
            "data-theme": n,
            children: a
          })
        },
        rn = {
          videoPreview: "rockstargames-sites-gta-gen9c6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-gta-gen9ec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-gta-gen9ab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-gta-gen9e84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-gta-gen9a322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-gta-gen9f68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-gta-gen9debff452a4923aded7de826c081bab5d"
        },
        cn = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [n] = (0, d.usePreloadImg)(s());
          return (0, u.jsx)("div", {
            className: [rn.screencap, n ? rn.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        on = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: n,
            toExplicit: r
          } = e;
          const i = r ?? `/videos/${s.id}`,
            c = {
              className: rn.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            o = (0, u.jsxs)("div", {
              className: rn.card,
              children: [(0, u.jsx)(cn, {
                video: s,
                size: n
              }), (0, u.jsxs)("div", {
                className: rn.info,
                children: [a ? (0, u.jsx)("div", {
                  className: rn.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, u.jsx)("h5", {
                  className: rn.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, u.jsx)("a", {
            href: i,
            target: "_blank",
            ...c,
            children: o
          }) : (0, u.jsx)(U.A, {
            to: i,
            ...c,
            children: o
          })
        },
        ln = {
          carousel: "rockstargames-sites-gta-gen9d8e71d378f6d4a968e8ac7d621e5f32a",
          slidesContent: "rockstargames-sites-gta-gen9fb10242b3a108773d6775a7f2a0d9846",
          text: "rockstargames-sites-gta-gen9a3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-sites-gta-gen9f46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-sites-gta-gen9d26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-sites-gta-gen9a879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-sites-gta-gen9b42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-sites-gta-gen9c5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-sites-gta-gen9e25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-sites-gta-gen9dd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-sites-gta-gen9b169e1b67f64de28605dd5056a740584",
          items: "rockstargames-sites-gta-gen9dddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-sites-gta-gen9a7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-sites-gta-gen9e1d7433489996eb9fa890d452ebcb042"
        },
        dn = (0, d.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            track: n
          } = (0, m.useGtmTrack)(), {
            setBodyIsLocked: r
          } = (0, d.useBodyScrollable)("VideoCarousel"), [i, c] = (0, o.useState)(0), [l, g] = (0, o.useState)(0), f = (0, o.useRef)(null), p = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            if (!f.current || !p.current) return;
            const e = new(qa())(f.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                c(i - 1 < 0 ? 0 : i - 1), g(0)
              },
              n = () => {
                const e = i + 1 >= s.length - 1 ? s.length - 1 : i + 1;
                c(e), g(0)
              },
              o = e => {
                g(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !p.current?.classList.contains(ln.dragging) || a() && r(!0)
              },
              l = () => {
                a() && r(!1), g(0)
              },
              d = e => {
                "press" === e.type && f.current?.classList.add(`${ln.disableClick}`), "tap" === e.type && (f.current?.classList.remove(`${ln.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              m = () => {
                a() && r(!1), f.current && f.current.classList.remove(`${ln.disableClick}`)
              },
              u = () => {
                a() && r(!1)
              };
            return p.current.addEventListener("transitionend", u), e.on("swiperight", t), e.on("swipeleft", n), e.on("pan", o), e.on("panend", l), e.on("press tap", d), e.on("pressup", m), () => {
              e.off("swiperight", t), e.off("swipeleft", n), e.off("pan", o), e.off("panend", l), e.off("press tap", d), e.off("pressup", m), p.current && p.current.removeEventListener("transitionend", u), g(0)
            }
          }), [f.current, i]), (0, u.jsxs)("section", {
            className: ln.carousel,
            children: [(0, u.jsx)("div", {
              className: ln.track,
              ref: f,
              children: (0, u.jsx)("div", {
                className: `${ln.items} ${0!==l?ln.dragging:""}`,
                ref: p,
                style: {
                  transform: `translateX(calc(-${100*i}% + ${l}px))`
                },
                children: s.map(((e, a) => (0, u.jsx)(U.A, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: i === a ? ln.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: i === a ? 0 : -1,
                  children: (0, u.jsx)(cn, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, u.jsxs)("div", {
              className: ln.slidesContent,
              children: [(0, u.jsx)("div", {
                className: ln.text,
                children: s.map(((e, s) => {
                  return (0, u.jsxs)(U.A, {
                    className: [ln.info, s === i ? ln.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: i === s ? 0 : -1,
                    children: [(0, u.jsxs)("div", {
                      className: ln.title,
                      children: [(0, u.jsxs)("div", {
                        className: ln.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, u.jsx)("h2", {
                        className: ln.videoTitle,
                        children: e.title
                      })]
                    }), (0, u.jsx)(Ia.A, {
                      className: ln.cta,
                      onClick: (r = `/videos/${e.id}`, () => {
                        n({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: r,
                          element_placement: "video carousel"
                        })
                      }),
                      children: t("Watch Now")
                    })]
                  }, e.id);
                  var r
                }))
              }), (0, u.jsx)("section", {
                className: ln.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: s.map(((e, a) => (0, u.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => c(a),
                  className: i === a ? ln.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        mn = (0, O.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        gn = {
          img: "rockstargames-sites-gta-gen9e3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-sites-gta-gen9c3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, d.importAll)(t(43202));
      const un = e => {
          let {
            isWideCard: a = !1,
            size: s = 640,
            title: n,
            titleSlug: r
          } = e;
          const {
            isMobile: i
          } = (0, d.useWindowResize)(), c = (0, o.useMemo)((() => {
            let e = "";
            return a && (e = i ? t(17426)(`./${r}/mobile.png`) : t(65392)(`./${r}/desktop.png`)), e || (e = t(32781)(`./${r}.jpg`), e += `?im=Resize=${s}`), e
          }), [i, r]), [l] = (0, d.usePreloadImg)(c);
          return (0, u.jsx)("div", {
            role: "img",
            "aria-label": n,
            className: [gn.img, l ? gn.startAnimation : "", a ? gn.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${c})`
            }
          })
        },
        fn = {
          fobLink: "rockstargames-sites-gta-gen9fded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-sites-gta-gen9a9b41f96042bda8a8c77b7b7b10f84d5"
        },
        pn = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            titleSlug: s,
            urlOfficial: n = ""
          } = a, r = ["VI"].includes(s);
          return (0, u.jsx)(U.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: t ?? n,
            target: "_self",
            className: [fn.fobLink, r ? fn.wide : ""].join(" "),
            reloadDocument: r,
            children: (0, u.jsx)(un, {
              title: a.title,
              titleSlug: s,
              isWideCard: r
            })
          })
        },
        bn = {
          videoList: "rockstargames-sites-gta-gen9a77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-gta-gen9ed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-gta-gen9ffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-gta-gen9ffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-gta-gen9cbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-sites-gta-gen9b33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-sites-gta-gen9f3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-sites-gta-gen9c8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-gta-gen9f30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-gta-gen9d9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-gta-gen9c806076a1e3e23c77528ee12e32771a3"
        },
        kn = (0, O.withIntl)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: n
          } = e;
          const r = (0, O.useIntl)(),
            {
              track: i
            } = (0, m.useGtmTrack)(),
            c = void 0 !== t ? "games" : "videos",
            [l, d] = (0, o.useState)(),
            [g, f] = (0, o.useState)(),
            [p, b] = (0, o.useState)(0),
            k = (0, o.useRef)(null),
            h = (0, o.useRef)(null);
          (0, o.useEffect)((() => {
            f({
              nextEl: h.current,
              prevEl: k.current
            })
          }), [h, k]), (0, o.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), b(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p]);
          const v = e => {
            l?.slideTo(e)
          };
          let x;
          return x = "games" === c ? (0, u.jsx)(u.Fragment, {
            children: t.results.map(((e, a) => "775700as" !== e.id && (0, u.jsx)(La.qr, {
              className: bn.slide,
              onFocus: () => v(a),
              children: (0, u.jsx)(pn, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, u.jsx)(u.Fragment, {
            children: a.map(((e, a) => (0, u.jsx)(La.qr, {
              className: bn.slide,
              onFocus: () => v(a),
              children: (0, u.jsx)(on, {
                video: e,
                gameTitleNecessary: n
              })
            }, e.id)))
          }), (0, u.jsxs)("section", {
            className: bn.videoList,
            children: [(0, u.jsxs)("h3", {
              className: bn.sectionHeader,
              children: [s, (0, u.jsxs)("div", {
                className: bn.arrowNav,
                children: [(0, u.jsx)("button", {
                  className: [bn.arrow, bn.previous].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": r.formatMessage(mn.previous_button_label)
                }), (0, u.jsx)("button", {
                  className: [bn.arrow, bn.next].join(" "),
                  type: "button",
                  ref: h,
                  "aria-label": r.formatMessage(mn.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = l?.slides[l?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, u.jsx)("div", {
              className: [bn.items, p % 1 != 0 ? bn.partial : ""].join(" "),
              children: (0, u.jsx)("div", {
                className: bn.trackWrapper,
                children: p && (0, u.jsx)(La.RC, {
                  className: bn.track,
                  slidesPerView: p,
                  spaceBetween: 24,
                  onInit: e => {
                    d(e)
                  },
                  grabCursor: !0,
                  navigation: g,
                  modules: [Pa.Vx],
                  slideClass: (0, N.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    i({
                      event: "carousel_next",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    i({
                      event: "carousel_previous",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    i({
                      event: "carousel_swipe",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: x
                })
              })
            })]
          })
        }), H),
        hn = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, u.jsx)("span", {
            ...t,
            className: "rockstargames-sites-gta-gen9f7f61ab4bc6dd2a49f80662ead7d8a51",
            children: a
          })
        };
      var vn = t(88038),
        xn = t(99718),
        _n = t(47252);
      const {
        Gen9CoreCarousel: yn,
        framer: Nn,
        useTinaModuleFetchByIds: jn,
        withSimpleErrorBoundary: Sn
      } = r, wn = {
        Card: xa,
        CardWithImageGallery: Ha,
        TextCard: Wa,
        ...r
      };
      var Cn = function(e) {
        return e.extraSmall = "xs", e.small = "sm", e.medium = "md", e.large = "lg", e.extraLarge = "xl", e.frontOfBox = "fob", e.custom = "custom", e
      }(Cn || {});
      const Tn = Nn.withFadeIn(Sn((e => {
        let {
          cards: a = [],
          size: t,
          name: s,
          title: n,
          description: r,
          disclaimer: i,
          customSlidesPerView: c = null,
          theme: d = "none",
          cardSizeBreakpoints: m = {},
          customAspectRatio: g = "3/1",
          titleBadge: f = null,
          id: p = ""
        } = e;
        const b = (0, o.useRef)(null),
          k = V().map(a, "id"),
          h = jn({
            ids: k
          }),
          [v, x] = (0, o.useState)(c),
          [_] = (0, l.useSearchParams)(),
          [y, j] = (0, o.useState)(!1);
        (0, o.useEffect)((() => {
          let e;
          if (e = Cn.frontOfBox, t === e) {
            const e = _.get("section");
            if (e && "games" === e && !y && (j(!0), b.current)) {
              const e = 100;
              window.scrollTo(0, b.current.offsetTop - e)
            }
          }
        }), []), (0, o.useEffect)((() => {
          if (!b.current) return;
          const e = () => {
            const e = c || window.getComputedStyle(b.current).getPropertyValue("--slides-per-view");
            x(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const S = (0, o.useMemo)((() => {
          let e = 0;
          if (!h) return null;
          let a = "blank",
            s = !1;
          return h.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (a = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
          })), h.reduce(((r, i) => {
            if (i) {
              const {
                id: c,
                tina: o
              } = i, l = V().clone(o);
              V().set(l, "payload.meta.id", c);
              let m = k;
              m = k.filter((e => e !== a || e === a && !s)), r.push((0, u.jsx)(N.TinaParser, {
                components: wn,
                tina: l,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: l,
                  id: c,
                  position: e,
                  sectionTitle: n,
                  theme: d,
                  cardIds: m
                }
              }, c)), e += 1
            }
            return r
          }), [])
        }), [h, t]);
        return (0, u.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9caf46db6464a84ad4990aed75ef74ff1",
          "data-theme": d,
          ref: b,
          id: p,
          children: [(0, u.jsx)(yn, {
            description: r,
            size: t,
            cardSizeBreakpoints: m,
            slideChildren: S,
            title: n,
            name: s,
            customSlidesPerView: v,
            customAspectRatio: g,
            titleBadge: f,
            theme: d
          }), i && (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e90de79e6e215bde4beeb973696fcc11",
            children: (0, u.jsx)("span", {
              className: "rockstargames-sites-gta-gen9ceba411e9462491a4758858884a7a601",
              children: (0, u.jsx)(Ks, {
                html: i
              })
            })
          })]
        })
      })));
      var In = t(17891);
      const Mn = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        En = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        An = e => e.scrollHeight > e.clientHeight;

      function Ln(e, a) {
        const t = {
          ...e
        };
        return V().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else V().isObject(e) && !V().isArray(e) ? Ln(e, a) : V().isArray(e) && (t[s] = e.map((e => V().isObject(e) ? Ln(e, a) : e)))
        })), t
      }
      const Pn = (0, d.withTranslations)((e => {
          let {
            active: a,
            styles: t,
            title: s,
            itemNumber: n,
            inModalMode: r,
            openModalMode: i,
            element: c,
            upNext: l,
            mobileMode: d,
            refDeck: g,
            components: f,
            tina: p,
            prevPage: b,
            nextPage: k,
            transitionStyle: h,
            selectedItemNumber: v,
            carouselTitle: _,
            sharedDraggingDelta: y,
            setSharedDraggingDelta: j
          } = e;
          const S = (0, O.useIntl)(),
            {
              track: w
            } = (0, m.useGtmTrack)(),
            C = (0, o.createRef)(),
            T = (0, o.createRef)(),
            I = (0, o.createRef)(),
            M = (0, o.createRef)(),
            E = (0, o.createRef)(),
            [A, L] = (0, o.useState)(!1),
            [P, B] = (0, o.useState)(0),
            [$, V] = (0, o.useState)(0),
            [R, D] = (0, o.useState)(0),
            [z, F] = (0, o.useState)(0),
            [H, G] = (0, o.useState)(0),
            [W, U] = (0, o.useState)(!1),
            [q, X] = (0, o.useState)(0),
            [Y, K] = (0, o.useState)(0),
            [Q, Z] = (0, o.useState)(0),
            [J, ee] = (0, o.useState)("700"),
            [ae, te] = (0, o.useState)(-1),
            [se, ne] = (0, o.useState)(0),
            [re, ie] = (0, o.useState)(0),
            [ce, oe] = (0, o.useState)(0),
            [le, de] = (0, o.useState)(!1),
            [me, ge] = (0, o.useState)(""),
            [ue, fe] = (0, o.useState)(null),
            [pe, be] = (0, o.useState)(!1),
            [ke, he] = (0, o.useState)(null),
            [ve, xe] = (0, o.useState)(!1),
            [_e, ye] = (0, o.useState)(!1),
            Ne = (0, N.useTinaPayload)(),
            je = p?.payload?.meta?.cdn ?? !1 ?? Ne?.meta?.prod ?? !1,
            Se = (0, N.useTranslations)({
              payload: p?.payload,
              variables: p?.variables
            }),
            we = Se?.meta ?? {},
            Ce = Ln(Se?.content?.[0], je),
            Te = (0, o.useMemo)((() => Ce?.images?.[0]?.image?.badge), [Ce]),
            Ie = (0, o.useMemo)((() => Ce.title ?? s ?? we?.title), [s, we?.title, Ce.title]),
            Me = (0, x.useImageParser)({
              alt: Ce?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Ce?.images?.[0]?.image?.alt ?? "",
              sources: Ce?.images?.[0]?.image?.sources ?? [],
              prod: je
            }),
            Ee = Me?.src?.mobile ?? Me?.src?.desktop ?? !1,
            Ae = (0, o.useMemo)((() => we?.foreignId), [we]),
            Pe = (0, o.useMemo)((() => we?.foreignTitle), [we]),
            [Be, $e] = (0, o.useState)(0),
            [Ve, Re] = (0, o.useState)(0),
            [De, Oe] = (0, o.useState)(0),
            [ze, Fe] = (0, o.useState)(0),
            [He, Ge] = (0, o.useState)(!1),
            [We, Ue] = (0, o.useState)(0),
            [qe, Xe] = (0, o.useState)(20),
            [Ye, Ke] = (0, o.useState)(null),
            [Qe, Ze] = (0, o.useState)(!1);
          let Je = r ? -1 : 0;
          const ea = (0, o.useCallback)((e => {
              if (!0 === W || !r && !d || pe) return;
              const a = En(e);
              $e(a.x), Re(a.y)
            }), [W, r]),
            aa = e => {
              ea(e)
            },
            ta = e => {
              if (!0 === W || 0 === Be || !r && !d || pe) return;
              const a = En(e),
                t = a.x > Be ? 1 : -1,
                s = Math.abs(Be - a.x);
              r && !d && s > qe ? (Ze(!0), ge(t > 0 ? "prev" : "next"), na()) : (Ge(!0), Ue(s * t), j(s * t))
            },
            sa = e => {
              if (!0 === W || !r && !d || pe) return;
              const a = En(e),
                t = a.x > Be ? 1 : -1,
                s = Math.abs(Be - a.x),
                n = Math.abs(Ve - a.y);
              r && !d ? (na(), ge("")) : s > qe && n < 25 ? (Ze(!0), ge(t > 0 ? "prev" : "next"), na()) : na()
            },
            na = () => {
              U(!0), $e(0), Re(0), Ge(!1), Ue(0), j(0)
            },
            ra = e => {
              e ? (r || L(!0), r || d || (clearTimeout(ae), te(setTimeout((() => {
                w({
                  event: "card_title_hover",
                  card_name: Ie,
                  card_id: n,
                  position: n,
                  view_name: `${Ae}/${Pe}`,
                  source_content_id: Ae,
                  source_content_name: Pe
                })
              }), 1e3)))) : (r || L(!1), r || d || clearTimeout(ae))
            };
          return (0, o.useEffect)((() => {
            let e = q;
            A ? e = 0 : r && !d && (e = q), B(e)
          }), [A, d, r, $, z, Y, Q, R, q]), (0, o.useEffect)((() => {
            L(!(!r || !d))
          }), [r, d]), (0, o.useEffect)((() => {
            r && a && w({
              event: "virtualPageview",
              display_type: d ? "mobile" : "desktop",
              view_name: `${Ae}/${Ie}`,
              source_content_id: Ae,
              source_content_name: Pe
            })
          }), [r, a]), (0, o.useEffect)((() => {
            const e = is()(((e, a) => {
              let t = 18;
              if (e?.documentElement && (t = Mn(e?.documentElement, "--root-font-size")), re !== a.innerHeight && ie(a.innerHeight), g?.current) {
                Z(Mn(g.current, "--eventDeck-marginSm") * t);
                const e = t * Mn(g?.current, "--eventDeck-modalGutters"),
                  s = a?.innerWidth,
                  n = s - 2 * e;
                V(n), M.current && d && D(n), F(Mn(g.current, "--eventDeck-itemSize") * t), oe(Mn(g.current, "--eventDeck-phaseOneTransitionDuration"));
                const r = Mn(g?.current, "--eventDeck-itemImageTitleMargins") * t,
                  i = T?.current?.clientHeight,
                  c = i + r;
                Number.isNaN(c) || X(c), ne(Mn(g?.current, "--eventDeck-headerHeight") * t)
              }
              let s = Math.min(700, a.innerWidth);
              d || (s = 900), ee(`${s}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [g, d]), (0, o.useEffect)((() => {
            if (C.current) {
              const e = C.current.clientHeight;
              Number.isNaN(e) || K(e)
            }
          }), [C]), (0, o.useEffect)((() => {
            if (r && d && M.current && (M.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !r && d && M.current) {
              const e = 228 / $;
              M.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!d && M.current && (M.current.style.transform = null)
          }), [r, d, $, R]), (0, o.useEffect)((() => {
            const e = .5 * $,
              a = re - se - 3 * Q;
            G($ - (e < a ? e : a))
          }), [$, Q, re]), (0, o.useEffect)((() => {
            "next" === me ? (k(null, !0), ge("")) : "prev" === me && (b(null, !0), ge(""))
          }), [me]), (0, o.useEffect)((() => {
            Oe(0), Fe(0)
          }), [d]), (0, o.useEffect)((() => {
            d ? Xe(r ? 35 : 20) : r && Xe(50)
          }), [r, d]), (0, o.useEffect)((() => {
            let e = [],
              a = 0,
              s = 0;
            if (null !== t?.transform) {
              e = t.transform.split(",");
              const n = e[0].split("(");
              a = Number(n[1].replace("px", "")), Oe(a), s = Number(e[1].replace("px", "")), Fe(s)
            }
          }), [t]), (0, o.useEffect)((() => {
            if (!W) return;
            clearTimeout(ue);
            const e = setTimeout((() => {
              U(!1), $e(0)
            }), 200);
            fe(e)
          }), [W, 200]), (0, o.useEffect)((() => {
            if (!Qe) return;
            clearTimeout(Ye);
            const e = setTimeout((() => {
              Ze(!1)
            }), 1e3);
            Ke(e)
          }), [Qe]), (0, o.useEffect)((() => {
            r && clearTimeout(ae), setTimeout((() => {
              de(!le)
            }), ce)
          }), [r]), (0, o.useEffect)((() => (document.body.addEventListener("mouseleave", na), () => {
            document.body.removeEventListener("mouseleave", na)
          })), []), (0, o.useEffect)((() => {
            E.current ? xe(An(E.current)) : xe(!1), void 0 !== c && c.current ? ye(An(c.current)) : ye(!1)
          }), [c, E, a, r, le]), Ce ? (0, u.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4090652e3c0a4e1979bb0a36b22b7cd",
            ref: c,
            "data-item-position": n,
            "data-modal-mode": r,
            "data-active-item": a,
            "data-up-next": l,
            "data-transition": He || 0 !== y ? "none" : h,
            "data-scrollable": _e,
            style: {
              ...t,
              transform: r && a && !d ? `translate3d(${De+We}px, ${ze}px, 0)` : d && !r ? `translate3d(${De+y}px, ${ze}px, 0)` : t?.transform
            },
            onClick: e => {
              Qe || (r ? r && !d && (n < v ? b(e, !0) : n > v && k(e, !0)) : i(e))
            },
            onMouseEnter: () => ra(!0),
            onMouseLeave: () => ra(!1),
            onTouchStart: aa,
            onTouchMove: ta,
            onTouchEnd: sa,
            onMouseDown: aa,
            onMouseMove: ta,
            onMouseUp: sa,
            onKeyUp: e => {
              "Enter" === e.key && (r || i(e))
            },
            tabIndex: Je,
            "aria-label": r ? S.formatMessage(Ta.card.events_deck_modal_group_label) : Ie,
            role: r ? "dialog" : "presentation",
            children: [(0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b9c878efb14d25c323e95f01b7a53460",
              "data-full-header": A,
              ref: I,
              style: {
                height: r && d ? `${$}px` : null,
                width: r && d ? `${$}px` : null
              },
              children: [Ee && (0, u.jsx)("img", {
                ref: M,
                src: `${Me?.src?.mobile??Me?.src?.desktop}?im=Resize,width=${J}`,
                alt: Me?.alt,
                style: {
                  width: 0 !== R && d ? `${R}px` : null,
                  height: 0 !== R && d ? `${R}px` : null
                }
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9ba8c09e500ea0845dc20d380e8ec11ca",
                "aria-hidden": "true",
                style: {
                  transform: !d || d && r ? `translate3d(0, ${P}px, 0)` : null
                },
                children: [Te && (0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cbbb0470197acdc4f0ec1f567f5c8a42",
                  ref: C,
                  children: (0, u.jsx)(Le, {
                    text: Te
                  })
                }), (0, u.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9aca2b0fbf7c1dbcbf99e53812b9abc8e",
                  ref: T,
                  "aria-hidden": "true",
                  children: Ie
                })]
              })]
            }), (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e7defd080518d58f00f72ccc94df53aa",
              ref: E,
              "aria-hidden": !r,
              onScroll: () => {
                be(!0), na(), clearTimeout(ke);
                const e = setTimeout((() => {
                  be(!1)
                }), 100);
                he(e)
              },
              style: {
                top: r && d ? `${$}px` : null,
                width: r && !d && a ? `${H}px` : null,
                touchAction: ve || d ? "unset" : "none"
              },
              children: [Ie && (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a8fbffe55d92fc2f04e5e6b8f9267206",
                children: Ie
              }), (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e20bd8af5d67954447804e0e21161d3b",
                children: (0, u.jsx)(N.TinaParser, {
                  components: f,
                  tina: {
                    meta: we,
                    payload: {
                      content: Ce?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        Bn = "rockstargames-sites-gta-gen9bb65eb1ac15ed189c1a9f6700276efc0",
        $n = e => {
          let {
            prevPage: a,
            prevBtnDisabled: t,
            nextPage: s,
            nextBtnDisabled: n,
            selectedItemNumber: r,
            itemsData: i,
            closeModalMode: c,
            inModalMode: o,
            controlsHidden: l
          } = e;
          const d = (0, O.useIntl)();
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dc99156537faf101b73515aaa7d6da2b",
              "aria-hidden": l || "false",
              children: [(0, u.jsx)("button", {
                className: Bn,
                type: "button",
                onClick: a,
                disabled: t,
                "aria-label": o ? d.formatMessage(Ta.card.events_deck_modal_previous_aria_label) : d.formatMessage(Ta.card.events_deck_previous_aria_label)
              }), (0, u.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a94a647e9943db9c97ae87c8c6a162cd",
                "aria-hidden": !o,
                "aria-label": d.formatMessage(Ta.card.events_deck_paging_label, {
                  currentPage: r + 1,
                  totalPages: i.length
                }),
                children: [r + 1, (0, u.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9fd027fcea9fd167b666599be78ab4f53"
                }), i.length]
              }), (0, u.jsx)("button", {
                className: Bn,
                type: "button",
                onClick: s,
                disabled: n,
                "aria-label": o ? d.formatMessage(Ta.card.events_deck_modal_next_aria_label) : d.formatMessage(Ta.card.events_deck_next_aria_label)
              })]
            }), (0, u.jsx)("button", {
              className: "rockstargames-sites-gta-gen9d43b6cdcbcc07082edacd9a7cb1598c5",
              type: "button",
              onClick: c,
              "aria-label": d.formatMessage(Ta.card.events_deck_modal_close_label),
              "aria-hidden": !o,
              tabIndex: o ? 0 : -1
            })]
          })
        };
      var Vn = t(31879),
        Rn = t.n(Vn),
        Dn = t(205),
        On = t.n(Dn),
        zn = t(32503),
        Fn = t.n(zn),
        Hn = t(99074),
        Gn = t(56123),
        Wn = t.n(Gn),
        Un = t(37109),
        qn = t(5765),
        Xn = t(47668),
        Yn = t(52842),
        Kn = t(57797),
        Qn = t(2723),
        Zn = t(1333),
        Jn = t(50562),
        er = t(37281),
        ar = t(21027),
        tr = t(84690);
      const sr = {
          CalloutSection: i.A,
          Card: xa,
          CardWithImageGallery: Ha,
          ConditionalBlock: b,
          CommunityChallenges: Wn(),
          CoverCard: Aa,
          Cta: k.A,
          DiscoveryCallout: Un.A,
          EventsDeck: e => {
            const {
              setBodyIsLocked: a
            } = (0, d.useBodyScrollable)("EventsDeck"), {
              title: t
            } = e, {
              track: s
            } = (0, m.useGtmTrack)(), [n, r] = (0, o.useState)(!1), i = (() => {
              const {
                data: e
              } = (0, D.useQuery)(Ca.TinaModulesList, {
                variables: {
                  type: "gtao-event-card",
                  orderBy: "priority",
                  orderDirection: "desc"
                }
              }), a = e?.tinaModulesList?.results, t = V().map(a, "id");
              return (0, Ce.X)({
                ids: t
              })
            })(), [l, g] = (0, o.useState)([]), [f, p] = (0, o.useState)(null), [b, k] = (0, o.useState)(0), [h, v] = (0, o.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [x, _] = (0, o.useState)(!1), y = (0, o.createRef)(), [j, S] = (0, o.useState)(null), w = (0, o.createRef)(), C = (0, o.createRef)(), [T, I] = (0, o.useState)([]), [M, E] = (0, o.useState)(!0), [A, L] = (0, o.useState)(!1), [P, B] = (0, o.useState)(!1), [$, O] = (0, o.useState)([]), [z, F] = (0, o.useState)(404), [H, G] = (0, o.useState)(808), [W, U] = (0, o.useState)(672), [q, X] = (0, o.useState)(336), [Y, K] = (0, o.useState)(0), [Q, Z] = (0, o.useState)(0), [J, ee] = (0, o.useState)(0), [ae, te] = (0, o.useState)(0), [se, ne] = (0, o.useState)(0), [re, ie] = (0, o.useState)(!1), ce = !!(0, d.usePrevious)(re), [oe, le] = (0, o.useState)(window.innerWidth), [de, me] = (0, o.useState)(0), [ge, ue] = (0, o.useState)(0), [fe, pe] = (0, o.useState)(0), [be, ke] = (0, o.useState)(0), [he, _e] = (0, o.useState)(0), [ye, Ne] = (0, o.useState)(0), [je, Se] = (0, o.useState)(0), [we, Te] = (0, o.useState)(0), [Ie, Ee] = (0, o.useState)(-1e3), [Ae, Le] = (0, o.useState)(0), [Pe, Be] = (0, o.useState)(50), [$e, Ve] = (0, o.useState)(0), [Re, De] = (0, o.useState)(!1), [Oe, ze] = (0, o.useState)(768), [Fe, He] = (0, o.useState)(!1), [Ge, We] = (0, o.useState)(!1), [Ue, qe] = (0, o.useState)(!1), [Xe, Ye] = (0, o.useState)(!1), [Ke, Qe] = (0, o.useState)(!1), [Ze, Je] = (0, o.useState)(1e3), [ea, aa] = (0, o.useState)(1.2), [ta, sa] = (0, o.useState)(0), [na, ra] = (0, o.useState)(!1), [ia, ca] = (0, o.useState)(!1), [oa, la] = (0, o.useState)(!0), [da, ma] = (0, o.useState)(!1), [ga, ua] = (0, o.useState)(!1), [fa, pa] = (0, o.useState)(null), [ba, ka] = (0, o.useState)(100), [ha, va] = (0, o.useState)(!1), [xa, _a] = (0, o.useState)({}), [ya, Na] = (0, o.useState)(""), [ja, Sa] = (0, o.useState)(0), [wa, Ta] = (0, o.useState)(!1), [Ia, Ma] = (0, o.useState)(!1), [Ea, Aa] = (0, o.useState)(0), [La, Pa] = (0, o.useState)(0), [Ba, $a] = (0, o.useState)(100), [Va, Ra] = (0, o.useState)(!1), [Da, Oa] = (0, o.useState)(!1), za = () => oe * de + Pe, Fa = () => !1 === Re ? ea : 1, Ga = e => e === je - 1 || e === je + 1, Wa = () => {
              let e = -1 * ye;
              return e = -1 * ye - be, e
            }, Ua = function(e) {
              let a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === Re) return 0;
              const t = e.itemNumber % 2 == 0,
                s = z * ea;
              if (!0 === t && 0 !== e.itemNumber) {
                const t = Mn(e?.element?.current, "top");
                let n = t - J;
                return !1 === a && (n -= t), -1 * (.5 * s + n) + ta
              }
              return J - .5 * s + ta
            }, qa = function(e, a) {
              let t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                s = Wa();
              !1 === t && (s = 0);
              const n = oe * de,
                r = !1 === Re ? z * Fa() : n;
              return e.inModalMode && Re ? -1 === a ? za() * (je - e.itemNumber) * -1 - e.styles.left : za() * (e.itemNumber - je) - e.styles.left : -1 === a ? -1 * e.styles.left - r - Pe + s : n - e.styles.left + Pe + s
            }, Xa = (e, a, t) => {
              -1 === a && (L(!1), E(!0)), L(!1 === t && e >= a || !0 === t && e + 1 === a), E(e <= 0)
            }, Ya = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (ga || da) return;
              if (ua(!0), re) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (je + 1 >= l.length) return;
                const a = T[je + 1]?.tina?.payload?.meta?.title ?? `card-${je+1}`;
                s({
                  event: e ? "modal_swipe" : "modal_next",
                  card_name: a,
                  card_id: je + 1,
                  position: je + 1,
                  view_name: `${T[je+1].source_content_id}/${a}`,
                  source_content_id: T[je + 1].source_content_id,
                  source_content_name: T[je + 1].source_content_name
                }), Xa(je + 1, l.length, !0), Re ? Re && I(T.map((e => {
                  e.itemNumber === je - 1 ? e.upNext = !1 : e.itemNumber === je + 2 ? e.upNext = !0 : e.itemNumber === je + 1 ? e.active = !0 : e.itemNumber === je && (e.upNext = !0, e.active = !1);
                  const a = e.styles.transform.replace("translate3d(", "").split(",");
                  let t = Number(a[0].replace("px", ""));
                  t -= za();
                  const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))) : I(T.map((e => (e.itemNumber === je - 1 ? e.upNext = !1 : e.itemNumber === je + 2 ? e.upNext = !0 : e.itemNumber === je + 1 ? (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Wa()}px, ${ta}px, 0) scale(1)`
                }) : e.itemNumber === je && (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${qa(e,-1)}px, ${Ua(e)}px, 0) scale(${Fa()})`
                }), e)))), Se(je + 1)
              }(a);
              const n = he + 1;
              if (!(n > se))
                if (s({
                    event: a ? "carousel_swipe" : "carousel_next",
                    element_placement: t?.toLowerCase() ?? ""
                  }), Xa(n, se, !1), Re) {
                  let e = n * q * -1;
                  e < Ie && (e = Ie, L(!0), E(!1), _e(se)), _e(n), I(T.map((a => (a.styles = {
                    ...a.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, a))))
                } else {
                  let e = ye - Q;
                  _e(n), e < Ie && (e = Ie, L(!0), E(!1), _e(se)), Ne(e)
                }
            }, Ka = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (ga || da) return;
              if (ua(!0), !0 === re) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (ga) return;
                if (je - 1 < 0) return;
                const a = T[je - 1]?.tina?.payload?.meta?.title ?? "card-" + (je - 1);
                s({
                  event: e ? "modal_swipe" : "modal_previous",
                  element_placement: t,
                  card_name: a,
                  card_id: je - 1,
                  position: je - 1,
                  view_name: `${T[je-1].source_content_id}/${a}`,
                  source_content_id: T[je - 1].source_content_id,
                  source_content_name: T[je - 1].source_content_name
                }), Xa(je - 1, l.length, !0), Re || I(T.map((e => (e.itemNumber === je + 1 ? e.upNext = !1 : e.itemNumber === je - 2 ? e.upNext = !0 : e.itemNumber === je ? (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${qa(e,1)}px, ${Ua(e)}px, 0) scale(${Fa()})`
                }) : e.itemNumber === je - 1 && (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Wa()}px, ${ta}px, 0) scale(1)`
                }), e)))), Re && I(T.map((e => {
                  e.itemNumber === je + 1 ? e.upNext = !1 : e.itemNumber === je - 2 ? e.upNext = !0 : e.itemNumber === je ? (e.upNext = !0, e.active = !1) : e.itemNumber === je - 1 && (e.active = !0);
                  const a = e.styles.transform.replace("translate3d(", "").split(",");
                  let t = Number(a[0].replace("px", ""));
                  t += za();
                  const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))), Se(je - 1)
              }(a);
              const n = he - 1;
              if (!(n < 0))
                if (s({
                    event: a ? "carousel_swipe" : "carousel_previous",
                    element_placement: t
                  }), Xa(n, se, !1), Re) {
                  let e = n * q * -1;
                  e > 0 && (e = 0, E(!0), L(!1), _e(0)), _e(n), I(T.map((a => (a.styles = {
                    ...a.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, a))))
                } else {
                  let e = ye + Q;
                  _e(n), (e > 0 || 0 === e || -1 * e < H) && (e = 0, E(!0), L(!1), _e(0)), Ne(e)
                }
            }, Qa = e => {
              if (wa || re || Re) return;
              const a = En(e);
              Sa(a.x)
            }, Za = e => {
              if (wa || 0 === ja || re || Re) return;
              const a = En(e),
                t = a.x > ja ? 1 : -1;
              let s = Math.abs(ja - a.x) * t;
              (0 === he && 1 === t || he === se && -1 === t) && (s *= .35), Ma(!0), Aa(s)
            }, Ja = e => {
              if (wa || re || Re) return;
              const a = En(e),
                t = a.x > ja ? 1 : -1,
                s = Math.abs(ja - a.x);
              Na(s > Ba ? t > 0 ? "prev" : "next" : ""), et()
            }, et = () => {
              Ta(!0), Sa(0), Aa(0), Ma(!1)
            }, at = e => {
              Ia && (Ja(e), Ma(!1))
            }, tt = function(e, a) {
              let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return e.map(((e, s) => {
                let n = s * q,
                  r = s;
                !1 === Re && (r = Math.ceil(.5 * s) + 1, s > 0 && (n = 2 === r ? W : W + q * (r - 2)));
                const i = $[s];
                return i?.current && (i.current.scrollTop = 0), {
                  ...e,
                  mobileMode: Re,
                  itemNumber: s,
                  columnNumber: r,
                  inModalMode: !1,
                  upNext: !0,
                  active: !1,
                  openModalMode: nt,
                  element: i,
                  transitionStyle: a,
                  styles: {
                    left: n,
                    transform: "" === t ? null : t,
                    height: null,
                    top: null
                  }
                }
              }))
            }, st = () => {
              const e = T[je]?.tina?.payload?.meta?.title ?? `card-${je}`;
              if (s({
                  event: "modal_close",
                  element_placement: t,
                  card_name: e,
                  card_id: je,
                  position: je,
                  view_name: `${T[je].source_content_id}/${e}`,
                  source_content_id: T[je].source_content_id,
                  source_content_name: T[je].source_content_name
                }), Re) {
                let e = je * q * -1;
                e < Ie && (e = Ie, L(!0), E(!1), _e(se)), _e(je), Xa(je, se, !1), I(tt(l, "cardClose", `translate3d(${e}px, 0, 0)`))
              } else {
                I(tt(l, "cardClose"));
                const e = Math.ceil((T[je].columnNumber + 1) / Y) - 1;
                _e(e);
                let a = e * Q * -1;
                $e < ge ? (a = 0, E(!0), L(!0), _e(0)) : a < Ie ? (a = Ie, E(!1), L(!0), _e(se)) : Xa(e, se, !1), Ne(a), Se(0)
              }
              w.current.style.transform = "translate(0px, 0px)", w.current.style.transition = "all var(--eventDeck-transitionCardClose)", ra(!1), Ye(!1), ie(!1), We(!1), He(!1), Qe(!1), setTimeout((() => {
                qe(!0)
              }), Ze)
            };
            (0, o.useEffect)((() => {
              !1 !== Ue && (qe(!1), ra(!1), j.style.zIndex = null, I(T.map((e => (e.transitionStyle = "", e)))))
            }), [Ue]);
            const nt = e => {
              setTimeout((() => {
                _a(e), va(!0)
              }), 1)
            };
            (0, o.useEffect)((() => {
              if (!ha) return;
              if (va(!1), ga) return;
              Se(Number(xa?.target?.dataset?.itemPosition)), We(!0), ma(!0), oa && la(!1);
              const e = T[xa?.target?.dataset?.itemPosition].source_content_id,
                a = T[xa?.target?.dataset?.itemPosition].source_content_name,
                n = T[xa?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
              s({
                event: "card_click",
                element_placement: t,
                card_name: n ?? `card-${je}`,
                card_id: xa?.target?.dataset?.itemPosition,
                position: xa?.target?.dataset?.itemPosition,
                view_name: `${e}/${n}`,
                source_content_id: e,
                source_content_name: a
              })
            }), [ha]), (0, o.useEffect)((() => {
              if (!Ge || re) return;
              We(!1);
              const e = (() => {
                const e = j?.getBoundingClientRect().top;
                return sa(-1 * (e - b)), -1 * (e - 140)
              })();
              Re && I(T.map((e => {
                const a = e.itemNumber > je + 3 || e.itemNumber < je - 3;
                return e.styles = {
                  ...e.styles,
                  display: a ? "none" : null,
                  transition: a ? "none" : null
                }, e
              }))), j.style.zIndex = "var(--eventDeck-zIndexOverlay)", ra(!0), w.current && (w.current.style.transition = "all var(--eventDeck-transitionCardOpen)", w.current.style.transform = `translate(${-1*be}px, ${e}px)`), Ye(!0), setTimeout((() => {
                He(!0)
              }), 1)
            }), [Ge]);
            const rt = () => {
              I(T.map(((e, a) => {
                e.active = a === je, e.inModalMode = !0, e.transitionStyle = "cardOpen", Re && (e.upNext = Ga(e.itemNumber));
                const t = !Re;
                let s = 0;
                if (Re) {
                  const e = we + 5 * b;
                  s = window.innerHeight - e
                }
                return e.itemNumber < je ? e.styles = {
                  ...e.styles,
                  height: Re ? `${s}px` : null,
                  transform: `translate3d(${qa(e,-1,t)}px, ${ta}px, 0) scale(${Fa()})`
                } : e.itemNumber > je ? e.styles = {
                  ...e.styles,
                  height: Re ? `${s}px` : null,
                  transform: `translate3d(${qa(e,1,t)}px, ${ta}px, 0) scale(1)`
                } : e.itemNumber === je && (e.styles = Re ? {
                  ...e.styles,
                  height: `${s}px`,
                  transform: `translate3d(${-1*e.styles.left}px, ${ta}px, 0) scale(1)`
                } : {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Wa()}px, ${ta}px, 0) scale(1)`
                }), e
              })))
            };
            (0, o.useEffect)((() => {
              !1 !== Fe && !0 !== re && (ie(!0), He(!1), Xa(je, T.length, !0), w.current && (w.current.style.transition = "all var(--eventDeck-transitionCardOpen)", w.current.style.transform = `translate(${-1*be}px, ${ta}px)`), rt(), Re ? (Ne(0), ma(!1), ca(!0)) : Qe(!0))
            }), [Fe]), (0, o.useEffect)((() => {
              ia && (ca(!1), I(T.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
            }), [ia]);
            const it = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              I(T.map((a => {
                if (a.upNext = Ga(a.itemNumber), a.itemNumber !== je) {
                  let e = qa(a, 1);
                  a.itemNumber < je && (e = qa(a, -1)), a.styles = {
                    ...a.styles,
                    transform: `translate3d(${e}px, ${Ua(a)}px, 0) scale(${Fa()})`
                  }
                } else a.itemNumber === je && !Re && e && (a.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Wa()}px, ${ta}px, 0) scale(1)`
                });
                return a
              })))
            };
            (0, o.useEffect)((() => {
              !1 !== Ke && !0 !== Re && (Qe(!1), setTimeout((() => {
                it(), ma(!1)
              }), 1))
            }), [Ke]), (0, o.useEffect)((() => {
              I(tt(l, ""))
            }), [W, q, l]), (0, o.useEffect)((() => {
              const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
              Ra(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
            }), []), (0, o.useEffect)((() => {
              const e = ce !== re;
              re ? (e && a(!0), Va && Oa(!0)) : Ia || re || (e && a(!1), Va && Da && Oa(!1))
            }), [re, Ia]), (0, o.useEffect)((() => {
              if (!ga) return;
              clearTimeout(fa);
              const e = setTimeout((() => {
                ua(!1)
              }), ba);
              pa(e)
            }), [ga]), (0, o.useEffect)((() => {
              x && setTimeout((() => {
                _(!1)
              }), 3e3)
            }), [x]), (0, o.useEffect)((() => {
              _(!0), Ne(0), _e(0);
              let e = Math.ceil(Math.ceil($e / q) / Y);
              Re && (e = T.length - 1), e < 0 && (e = 1), Xa(0, e, !1), re && st()
            }), [Re]), (0, o.useEffect)((() => {
              w.current && !re && (w.current.style.transform = "")
            }), [w, Re, re]), (0, o.useEffect)((() => {
              const e = (i ?? []).map((e => {
                let a = null;
                return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (a = e?.tina?.variables?.keys?.meta?.title), {
                  ...e,
                  title: a,
                  source_content_id: e?.tina?.payload?.meta?.foreignId,
                  source_content_name: e?.tina?.payload?.meta?.foreignTitle,
                  view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
                }
              }));
              g(e)
            }), [i]), (0, o.useEffect)((() => {
              O(l.map((() => (0, o.createRef)())))
            }), [l]), (0, o.useEffect)((() => {
              const e = e => {
                const {
                  key: a
                } = e;
                "ArrowLeft" === a ? Ka(null, !1) : "ArrowRight" === a ? Ya(null, !1) : "Escape" === a && re && st()
              };
              return document.addEventListener("keydown", e), () => {
                document.removeEventListener("keydown", e)
              }
            }), [ga, da, re, w]), (0, o.useEffect)((() => {
              if (w.current) {
                let e = 0;
                e = w?.current?.clientHeight, e += Mn(w?.current, "margin-top"), e += Mn(w?.current, "margin-bottom"), Te(e)
              }
            }), [w, C]), (0, o.useEffect)((() => {
              re && (() => {
                const e = j?.getBoundingClientRect().top,
                  a = -1 * (e - b);
                if (I(T.map((e => {
                    if (e.styles.transform) {
                      const t = e.styles.transform.split(","),
                        s = `${t[0]}, ${a}px,${t[2]}`;
                      e.styles = {
                        ...e.styles,
                        transform: s
                      }
                    }
                    return e
                  }))), w.current) {
                  const a = -1 * (e - b);
                  w.current.style.transform = `translate(${-1*be}px, ${a}px)`
                }
              })()
            }), [Re, re, ta]), (0, o.useEffect)((() => {
              re || ($e < de * oe && 0 === he ? (Ne(0), L(!0), E(!0)) : ye < Ie ? (L(!0), E(!1), _e(se), Ne(Ie)) : ye < 0 && (L(!1), _e(se - 1)), $e > de * oe && A && L(!1))
            }), [Ie]), (0, o.useEffect)((() => {
              if (y.current) {
                S(y.current);
                const e = Mn(document.documentElement, "--root-font-size"),
                  a = Mn(y.current, "--eventDeck-modalGutters") * e,
                  t = Mn(y.current, "--eventDeck-collapsedMaxWidth");
                pe(t);
                let s = oe - 2 * a;
                s > t && (s = t), ue(s), me(s / oe);
                const n = 2 * a + s;
                let r = 0;
                n < oe && (r = .5 * (oe - n)), ke(r);
                let i = Mn(y.current, "--eventDeck-modalBottomGutter");
                i *= e;
                const c = window.innerHeight - (we + i);
                ee(.5 * s < c ? s / 4 : .5 * c);
                const o = Mn(y.current, "--eventDeck-mobileBreakpoint");
                ze(o);
                let d = Mn(y.current, "--eventDeck-itemSize");
                d *= e, F(d);
                let m = Mn(y.current, "--eventDeck-modalGutterGap");
                m *= e, Be(m);
                let g = Mn(y.current, "--eventDeck-insideMargin");
                g *= e;
                const u = !1 === Re ? 2 * d + g : d + g;
                G(u), U(u + g);
                const b = d + g;
                X(b);
                let h = Math.ceil(.5 * (l.length - 1)) * b + u;
                Re && (h = l.length * b), Ve(h), 0 !== $e && Ee(-1 * $e + s);
                let v = Math.ceil(Math.ceil(h / b) / Y);
                (Re || re) && (v = T.length - 1), ne(v);
                const x = Mn(y.current, "--eventDeck-itemScaleUpAmount");
                aa(x), Je(Mn(y.current, "--eventDeck-cardCloseTransitionDuration")), k(Mn(y.current, "--eventDeck-itemImageTitleMargins") * e), null !== f && e !== f && (p(e), re && it()), null === f && p(e)
              }
            }), [y, l]), (0, o.useEffect)((() => {
              if (re && !Re) {
                it();
                const e = j?.getBoundingClientRect().top,
                  a = -1 * (e - b);
                a !== ta && sa(a)
              }
            }), [h]), (0, o.useEffect)((() => {
              B(!(!M || !A || re))
            }), [M, A]), (0, o.useEffect)((() => {
              const e = is()((e => {
                le(e), De(e < Oe);
                const a = (1 - de) / 2;
                Le(e * a);
                const t = Math.floor(ge / q);
                K(t);
                let s = t * q;
                s > fe && (s = fe), Z(s), te(e - e * a);
                const n = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
                if (n !== h && v(n), re && n === h && !x) {
                  const e = j?.getBoundingClientRect().top,
                    a = -1 * (e - b);
                  a !== ta && sa(a)
                }
              }), 300);
              return window.addEventListener("resize", (() => {
                e(window.innerWidth)
              })), window.addEventListener("scroll", (() => {
                re && Re && e(window.innerWidth)
              })), e(window.innerWidth), () => {
                window.removeEventListener("resize", (() => {
                  e(window.innerWidth)
                }))
              }
            }), [q, de, re, Re]), (0, o.useEffect)((() => {
              !1 !== re && !0 !== x && (Re ? rt() : it(!0))
            }), [ae, Q, Pe, z, oe, Ae, J, ta]), (0, o.useEffect)((() => {
              const e = () => {
                if (y.current && oa) {
                  const e = y.current.getBoundingClientRect(),
                    a = .2 * window.innerHeight;
                  window.innerHeight - e.top >= a && la(!1)
                }
              };
              return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
            }), [y]);
            const ct = (0, o.useCallback)((() => {
              if (null !== y.current && !n) {
                const {
                  top: a
                } = y?.current?.getBoundingClientRect() || 0;
                a <= .6 * window.innerHeight && (s({
                  event: "page_section_impression",
                  element_placement: e?._memoq?.title?.toLowerCase()
                }), r(!0))
              }
            }), [y]);
            (0, o.useEffect)((() => (window.addEventListener("scroll", ct), () => {
              window.removeEventListener("scroll", ct)
            })), [ct, y]), (0, o.useEffect)((() => {
              "next" === ya ? (Ya(null, !0), Na("")) : "prev" === ya && (Ka(null, !0), Na(""))
            }), [ya]), (0, o.useEffect)((() => {
              y.current && y.current.addEventListener("mouseleave", (() => {
                Ia && et()
              }))
            }), [y, Ia]), (0, o.useEffect)((() => (document.body.addEventListener("mouseleave", at), () => {
              document.body.removeEventListener("mouseleave", at)
            })), [Ia]), (0, o.useEffect)((() => {
              wa && setTimeout((() => {
                Ta(!1), Sa(0)
              }), ba)
            }), [wa]), (0, o.useEffect)((() => {
              $a(Re ? 20 : 100)
            }), [Re]), (0, o.useEffect)((() => {
              ka(re ? 500 : 100)
            }), [re]);
            const ot = (0, N.useTinaComponents)(),
              lt = (0, o.useMemo)((() => ({
                ...ot,
                CardWithImageGallery: Ha,
                HTMLElement: R,
                ImageWithBadge: xe.A,
                Carousel: c.A,
                GroupOfItems: Me(),
                UnorderedList: ve.A
              })), [ot]),
              dt = (0, o.useMemo)((() => T.map((e => (0, o.createElement)(Pn, {
                ...e,
                refDeck: y,
                key: e?.id ?? e?.sync_hash,
                components: lt,
                prevPage: Ka,
                nextPage: Ya,
                loadCssRawValue: Mn,
                selectedItemNumber: je,
                carouselTitle: t,
                sharedDraggingDelta: La,
                setSharedDraggingDelta: Pa
              })))), [T, y, lt, Ka, Ya, je]);
            return !dt?.length || dt.length <= 0 ? null : (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d06937f0f31eadd8f2c6a7d4000c4028",
                "data-modal-mode": Xe,
                "aria-hidden": "true"
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9bf13eb49657ff34f800ad89de65ad3b9",
                "data-modal-mode": re,
                "data-faded": oa,
                ref: y,
                onTouchStart: Qa,
                onTouchMove: Za,
                onTouchEnd: Ja,
                onMouseDown: Qa,
                onMouseMove: Za,
                onMouseUp: Ja,
                tabIndex: -1,
                role: "presentation",
                children: [(0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9dffe1905dcf86ef006304394794fcca7",
                  "aria-hidden": "true"
                }), (0, u.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9bc0660e650ef4aabf28e90cce99a05be",
                  "data-modal-mode": re,
                  ref: w,
                  "data-animating": na,
                  children: [(0, u.jsx)("h2", {
                    className: "rockstargames-sites-gta-gen9fdd9accd06b828c3c1007add9d32723d",
                    children: t
                  }), (0, u.jsx)($n, {
                    prevPage: Ka,
                    prevBtnDisabled: M,
                    nextPage: Ya,
                    nextBtnDisabled: A,
                    selectedItemNumber: je,
                    itemsData: l,
                    closeModalMode: st,
                    inModalMode: re,
                    controlsHidden: P
                  })]
                }), (0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c54f31f5237995d05edfb79cc4e08a33",
                  "data-modal-mode": re,
                  "data-is-dragging": Ia,
                  style: {
                    transform: `translate3d(${ye+Ea}px, 0, 0)`,
                    width: `${$e}px`
                  },
                  ref: C,
                  children: dt
                })]
              })]
            })
          },
          PageTemplate: On(),
          ExpandingPlatformButton: h.A,
          TextCard: Wa,
          Deck: Tn,
          Grid: _,
          Hero: B,
          HighlightsItem: In.HighlightsItem,
          HTMLElement: R,
          NewsletterSubscription: de,
          OrderedList: me.A,
          ParallaxInnerLayer: ue,
          ParallaxOuterLayer: pe,
          ParallaxWrapper: he,
          UnorderedList: ve.A,
          ImageWithBadge: xe.A,
          Carousel: c.A,
          GroupOfItems: Me(),
          Rating: Ne.A,
          gen9: tr,
          TinaModuleFetchNRender: Ce.A,
          PromoModule: ye,
          RockstarVideoPlayer: Rn(),
          Engagement: Fn()
        },
        nr = {
          CalloutSection: i.A,
          Card: xa,
          CardWithImageGallery: Ha,
          ConditionalBlock: b,
          CoverCard: Aa,
          Carousel: c.A,
          ExpandingPlatformButton: h.A,
          Hero: B,
          Grid: _,
          TextCard: Wa,
          Deck: Tn,
          GroupOfItems: Me(),
          ParallaxInnerLayer: ue,
          ParallaxOuterLayer: pe,
          ParallaxWrapper: he,
          PromoModule: ye,
          Engagement: Fn(),
          NewsletterSubscription: de,
          gen9: {
            BuyNow: Hn.A,
            Disclaimer: qn.A,
            FAQ: Xn.Ay,
            Guide: Yn.A,
            GuideGroup: Kn.A,
            GuideIntro: Qn.A,
            GuideSection: Zn.A,
            Hero: B,
            ImageTextGroupGroup: Jn.A,
            LinkoutSection: er.A,
            TinaWrapper: ar.A,
            UserVote: () => null
          },
          HTMLElement: R,
          OrderedList: me.A,
          UnorderedList: ve.A,
          ImageWithBadge: xe.A,
          Rating: Ne.A,
          TinaModuleFetchNRender: Ce.A,
          UserVote: we
        }
    },
    68340: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(71403),
        n = t(89269),
        r = t(54252),
        i = t(40207),
        c = t(49948),
        o = t(74401),
        l = t(81902),
        d = t(47252);
      var m = t(46632);
      const g = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: n,
            onNextKeyDown: r
          } = e;
          return (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d98f432655f19a842390597c4434db06",
            children: [(0, m.jsx)("button", {
              className: "rockstargames-sites-gta-gen9c06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: n,
              "aria-label": "Previous",
              role: "button"
            }), (0, m.jsx)("button", {
              className: "rockstargames-sites-gta-gen9a4f98606cdef508fbd2e69c5564a92d8",
              ref: t,
              onClick: s,
              onKeyDown: r,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        u = (0, d.A)((e => {
          let {
            description: a,
            slideChildren: t,
            size: d,
            title: u,
            name: f,
            customSlidesPerView: p = null,
            customSpaceBetween: b = null,
            slideClass: k,
            style: h,
            className: v,
            cardSizeBreakpoints: x,
            customAspectRatio: _,
            titleBadge: y,
            theme: N
          } = e;
          const {
            track: j
          } = (0, i.useGtmTrack)(), S = (0, s.useRef)(null), w = (0, s.useRef)(null), C = (0, s.useRef)(null), [T, I] = (0, s.useState)(null), [M, E] = (0, s.useState)(!1), [A, L] = (0, s.useState)(null), [P, B] = (0, s.useState)(), [$, V] = (0, s.useState)(), {
            ref: R,
            inView: D
          } = (0, c.useInView)({
            threshold: .6
          }), [O, z] = (0, s.useState)(!1), [F, H] = (0, s.useState)(null), [G, W] = (0, s.useState)(!1), [U, q] = (0, s.useState)(0), [X, Y] = (0, s.useState)(0);
          (0, s.useEffect)((() => {
            const e = () => {
              W(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.useEffect)((() => {
            const e = () => {
              P && !(0, r.isEmpty)(P) && P?.height > 0 && P?.height !== U && q(P?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [P]);
          const K = {
            0: {
              spaceBetween: b ?? 16
            },
            1024: {
              spaceBetween: b ?? 18
            },
            1920: {
              spaceBetween: b ?? 20
            },
            2560: {
              spaceBetween: b ?? 22
            }
          };
          (0, s.useEffect)((() => {
            if (!S.current) return;
            const e = () => {
              if (S.current) {
                const e = p || Number(window.getComputedStyle(S.current).getPropertyValue("--slides-per-view")),
                  a = p ? 1 : Number(window.getComputedStyle(S.current).getPropertyValue("--slides-per-view-multiplier"));
                L(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [S, p]), (0, s.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, H(a))
            })), z(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && G ? null : (0, m.jsx)(l.qr, {
              className: "rockstargames-sites-gta-gen9f58e79e329504e170dc9cb4595ea011b",
              onFocus: () => J(a),
              children: e
            }, Symbol(a).toString())));
            I(a)
          }), [t, G]), (0, s.useEffect)((() => {
            V({
              nextEl: C.current,
              prevEl: w.current
            })
          }), [C, w]), (0, s.useEffect)((() => {
            D && !M && t && (j({
              event: "page_section_impression",
              element_placement: (f || u).toLowerCase()
            }), E(!0))
          }), [D, t]);
          let Q = "custom" === d ? {
            "--custom-aspect-ratio": _,
            ...h
          } : {
            ...h
          };
          const Z = 0 !== U ? `${U}px` : "100%";
          Q = {
            ...Q,
            "--carousel-cards-height": Z,
            "--carousel-nav-opacity": X
          };
          const J = e => {
            P?.slideTo(e)
          };
          return (0, m.jsxs)("div", {
            className: (0, o.classList)("rockstargames-sites-gta-gen9d0c3d91603036c852633939015a6cb48", v),
            "data-size": d,
            "data-sm": x?.sm ? x?.sm : d,
            "data-md": x?.md ? x?.md : d,
            "data-lg": x?.lg ? x?.lg : d,
            "data-xl": x?.xl ? x?.xl : d,
            "data-xxl": x?.xxl ? x?.xxl : d,
            "data-has-covercard": O,
            "data-new-carousel-nav": !0,
            "data-theme": N,
            ref: S,
            style: Q,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ddeb75a59ed783554b94e8298897a1fa",
              ref: R
            }), O && G && (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d5f00d41fdd2c864a0eb9e069cf08db0",
              children: F
            }), (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9cdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fb8e207418c783fc2f53b44c19faedca",
                children: [(0, m.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9b779ba2045a88302079083935c90f7b3",
                  children: [!O && u && (0, m.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9edf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, m.jsx)("h2", {
                      children: u
                    }), y && (0, m.jsx)("span", {
                      className: "rockstargames-sites-gta-gen9d7a4aaeb70d68fdee39312192efb990b",
                      children: y
                    })]
                  }), (0, m.jsx)(g, {
                    prevRef: w,
                    nextRef: C,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = P?.slides[P?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    theme: N
                  })]
                }), a && (0, m.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9a1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), A ? (0, m.jsx)(l.RC, {
              slidesPerView: A,
              onInit: e => {
                B(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (q(t), Y(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: $,
              modules: [n.Vx],
              breakpoints: K,
              slideClass: (0, o.classList)("swiper-slide", k),
              onSlideNextTransitionEnd: () => {
                j({
                  event: "carousel_next",
                  element_placement: u?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                j({
                  event: "carousel_previous",
                  element_placement: u?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                j({
                  event: "carousel_swipe",
                  element_placement: u?.toLowerCase() ?? ""
                })
              },
              children: T
            }) : ""]
          })
        }), null)
    },
    67446: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(71403),
        n = t(96717),
        r = t(20066),
        i = t(73167),
        c = t(98310),
        o = t(39493);
      const l = {
        pillBtn: "rockstargames-sites-gta-gen9e4a42eaa9bfb682035e61ac2e2a34515",
        selected: "rockstargames-sites-gta-gen9eb889d8958be54a67b790d7529530986",
        scCharacterCard: "rockstargames-sites-gta-gen9df279e92086c0d3c96905b3a91b369ed",
        scAvatar: "rockstargames-sites-gta-gen9c1890feda663c93b0f767890394cbdcf",
        scCharNames: "rockstargames-sites-gta-gen9e79d7f5515617d849d7d13cd4ff048ce",
        scCharacterStats: "rockstargames-sites-gta-gen9c721f3aeef9e5ae6b98adca1253e4709",
        scUserName: "rockstargames-sites-gta-gen9eabff0cc0139013f5a60fea6f48c56f6",
        scRpLevel: "rockstargames-sites-gta-gen9b1f87c58a800ad546200fbf17e029f35",
        scRpIcon: "rockstargames-sites-gta-gen9f1e0bcba6214698c490b8201bbd850b7"
      };
      var d = t(46632);
      const m = (0, n.withIntl)((e => {
        let {
          characterData: a
        } = e;
        const r = (0, n.useIntl)(),
          {
            platform: m,
            platformUsername: g,
            mugshotUrl: u,
            stats: f
          } = a,
          [p, b] = (0, s.useState)(u),
          k = (0, i.A)(m, "large");
        return (0, d.jsxs)("div", {
          className: l.scCharacterCard,
          children: [(0, d.jsx)("div", {
            className: l.scAvatar,
            "data-size": "small",
            children: (0, d.jsx)("img", {
              src: p,
              alt: r.formatMessage(o.A.profile_selector_mugshot, {
                userName: g
              }),
              onError: () => {
                b(t(58989))
              }
            })
          }), (0, d.jsx)("div", {
            className: l.scCharacterStats,
            children: (0, d.jsxs)("div", {
              className: l.scCharNames,
              children: [(0, d.jsx)("img", {
                src: k.src,
                alt: k.alt
              }), (0, d.jsx)("div", {
                className: l.scUserName,
                "data-size": "small",
                children: g
              }), (0, d.jsx)("div", {
                className: l.scRp,
                children: (0, d.jsxs)("div", {
                  className: l.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: l.scRpIcon,
                    src: (0, c.A)(f.overview.rank.value),
                    alt: r.formatMessage(o.A.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), r)
    },
    73167: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      const s = (e, a) => {
        switch (e) {
          case "pc":
            return "small" === a ? {
              src: t(89544),
              alt: "PC"
            } : {
              src: t(45710),
              alt: "PC"
            };
          case "ps4":
            return "small" === a ? {
              src: t(65636),
              alt: "PS4"
            } : {
              src: t(8318),
              alt: "PS4"
            };
          case "ps5":
            return "small" === a ? {
              src: t(20357),
              alt: "PS5"
            } : {
              src: t(52047),
              alt: "PS5"
            };
          case "xboxone":
            return "small" === a ? {
              src: t(17976),
              alt: "Xbox One"
            } : {
              src: t(60350),
              alt: "Xbox One"
            };
          case "xboxsx":
            return "small" === a ? {
              src: t(84923),
              alt: "Xbox Series X|S"
            } : {
              src: t(89825),
              alt: "Xbox Series X|S"
            };
          default:
            return {
              src: "", alt: ""
            }
        }
      }
    },
    98310: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      const s = e => t(e < 100 ? 36399 : e > 99 && e < 500 ? 92627 : e > 499 && e < 750 ? 43864 : 76425)
    },
    39493: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      const s = (0, t(96717).defineMessages)({
        sc_link_activity_feed: {
          id: "sc_link_activity_feed",
          defaultMessage: "Activity Feed"
        },
        sc_link_account: {
          id: "sc_link_account",
          defaultMessage: "Account"
        },
        sc_link_view_my_profile: {
          id: "sc_link_view_my_profile",
          defaultMessage: "View My Profile"
        },
        sc_link_messages: {
          id: "sc_link_messages",
          defaultMessage: "Messages"
        },
        sc_link_game_activation: {
          id: "sc_link_game_activation",
          defaultMessage: "Game Activation"
        },
        sc_link_notifications: {
          id: "sc_link_notifications",
          defaultMessage: "Notifications"
        },
        sc_link_crews: {
          id: "sc_link_crews",
          defaultMessage: "Crews"
        },
        sc_link_friends: {
          id: "sc_link_friends",
          defaultMessage: "Friends"
        },
        sc_link_my_friends: {
          id: "sc_link_my_friends",
          defaultMessage: "My Friends"
        },
        sc_link_import_friends: {
          id: "sc_link_import_friends",
          defaultMessage: "Import Friends"
        },
        sc_link_find_friends: {
          id: "sc_link_find_friends",
          defaultMessage: "Find Friends"
        },
        sc_link_settings: {
          id: "sc_link_settings",
          defaultMessage: "Settings"
        },
        sc_link_help: {
          id: "sc_link_help",
          defaultMessage: "Help"
        },
        sc_link_support: {
          id: "sc_link_support",
          defaultMessage: "Support"
        },
        sc_link_legal: {
          id: "sc_link_legal",
          defaultMessage: "Legal"
        },
        sc_link_privacy_policy: {
          id: "sc_link_privacy_policy",
          defaultMessage: "Privacy Policy"
        },
        sc_link_cookies_policy: {
          id: "sc_link_cookies_policy",
          defaultMessage: "Cookies Policy"
        },
        sc_link_cookies_settings: {
          id: "sc_link_cookies_settings",
          defaultMessage: "Cookies Settings"
        },
        sc_link_do_not_sell_my_information: {
          id: "sc_link_do_not_sell_my_information",
          defaultMessage: "Do Not Sell My Information"
        },
        sc_link_log_out: {
          id: "sc_link_log_out",
          defaultMessage: "Log Out"
        },
        sc_link_sign_in: {
          id: "sc_link_sign_in",
          defaultMessage: "Sign In"
        },
        sc_link_join_social_club: {
          id: "sc_link_join_social_club",
          defaultMessage: "Sign Up"
        },
        profile_selector_switch_character: {
          id: "profile_selector_switch_character",
          defaultMessage: "Switch Character"
        },
        profile_selector_profile_card: {
          id: "profile_selector_profile_card",
          defaultMessage: "Profile Card"
        },
        profile_selector_mugshot: {
          id: "profile_selector_mugshot",
          defaultMessage: "{userName} mugshot"
        },
        profile_selector_rp_icon: {
          id: "profile_selector_rp_icon",
          defaultMessage: "RP Category"
        },
        sc_menu_drag_handle: {
          id: "sc_menu_drag_handle",
          defaultMessage: "Drag Menu Handle"
        },
        sc_menu_open: {
          id: "sc_menu_open",
          defaultMessage: "Open player menu"
        },
        sc_menu_close: {
          id: "sc_menu_close",
          defaultMessage: "Close player menu"
        },
        language_selector_default: {
          id: "language_selector_default",
          defaultMessage: "Select a Language"
        },
        nofications_new: {
          id: "nofications_new",
          defaultMessage: "New notifications"
        }
      })
    },
    80256: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(71403),
        n = t(49948),
        r = t(46632);
      const i = e => {
        let {
          thresholds: a,
          onThresholdReached: t,
          children: i
        } = e;
        const [c, o] = (0, s.useState)([]), [l, d] = (0, s.useState)(new Set);
        return (0, s.useEffect)((() => {
          const e = Array.from(new Set(a));
          e.sort(((e, a) => e - a)), o(e)
        }), [a]), (0, r.jsxs)("div", {
          style: {
            position: "relative"
          },
          children: [c.map((e => (0, r.jsx)(n.InView, {
            threshold: e,
            onChange: a => ((e, a) => {
              e && !l.has(a) && d((e => {
                const s = new Set(e);
                return c.forEach((e => {
                  e <= a && !s.has(e) && (s.add(e), t(e))
                })), s
              }))
            })(a, e),
            triggerOnce: !0,
            children: a => {
              let {
                ref: t
              } = a;
              return (0, r.jsx)("div", {
                ref: t,
                style: {
                  height: "1px",
                  position: "absolute",
                  top: 100 * e + "%"
                }
              })
            }
          }, e))), i]
        })
      }
    },
    37017: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(71403),
        n = t(89779),
        r = t(58407),
        i = t(42756);
      var c = t(46632);
      const o = (0, i.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, s.useState)(""), i = (0, n.useNavigate)(), o = (0, r.useMutateState)();
        return (0, c.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-gta-gen9b82052ce07e004075e77261c373bfc50",
          onSubmit: e => {
            e.preventDefault(), o({
              navOpen: !1
            }), document.activeElement?.blur(), i(`/search?q=${e.target.q.value}`)
          },
          role: "search",
          children: [(0, c.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, c.jsx)("input", {
            autoComplete: "off",
            defaultValue: t,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    52983: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      const s = {
        skeleton: "rockstargames-sites-gta-gen9f963a1ae95f7f5ac2c5192c3f357b6dc",
        pulse: "rockstargames-sites-gta-gen9e00ed88d692bbfc1a301dcfc61a077a9",
        gen9Hero: "rockstargames-sites-gta-gen9db0b80177710d337d93bddb97b8a7dea"
      };
      var n = t(46632);
      const r = e => {
        let {
          skeleton: a
        } = e;
        return a ? (0, n.jsx)("div", {
          className: [s.skeleton, s[a]].join(" ")
        }) : null
      }
    },
    25180: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d,
        X: () => l
      });
      var s = t(58407),
        n = t(74401),
        r = t(47252),
        i = t(52983),
        c = t(50048),
        o = t(46632);
      const l = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: n = null,
            sync: r = !1
          } = e;
          const i = t ?? [a],
            {
              data: o
            } = (0, s.useQuery)(c.TinaModulesInfo, {
              variables: {
                ids: i,
                sync: r
              },
              setTitleDataPath: n,
              skip: !i.length
            });
          return o?.tinaModulesInfo ?? null
        },
        d = (0, r.A)((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: r
          } = e;
          const c = l({
            id: t,
            ids: s
          });
          if (!c) return (0, o.jsx)(i.A, {
            skeleton: r
          });
          const d = c?.[0]?.tina;
          return d ? (0, o.jsx)(o.Fragment, {
            children: c.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, o.jsx)(n.TinaParser, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: c
                }
              }, t)
            }))
          }) : null
        }))
    },
    62811: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(89779);
      const n = {
        pillBtn: "rockstargames-sites-gta-gen9b59962d0e68ccd73b5ee2e571528d469",
        selected: "rockstargames-sites-gta-gen9f5c57dad202e0d6ff855d5a4aca2c804",
        plusButton: "rockstargames-sites-gta-gen9cffaf489342637258d28f9b3b718836a",
        small: "rockstargames-sites-gta-gen9b8abf927f0ba0af0d8ac0e9c77690d34",
        btnText: "rockstargames-sites-gta-gen9e6e56461bfc2e426c4abc5451cd17284",
        btnTexticon: "rockstargames-sites-gta-gen9cef9f9ce913d167a1fe2e7118a407cdd",
        whiteBtn: "rockstargames-sites-gta-gen9b257e0629b9f8e101791d7a948ed15be",
        blackBtn: "rockstargames-sites-gta-gen9cb03bccaee79394858682d2ce4d08253",
        transparentBtn: "rockstargames-sites-gta-gen9d0460159a17533d4d23686d7dca76794",
        iconBtn: "rockstargames-sites-gta-gen9ac61186c3c22346c9a4ee2cd2820d341",
        link: "rockstargames-sites-gta-gen9c5920e56149b82f20f4db2ad9d397495",
        xboxone: "rockstargames-sites-gta-gen9a7057f2e6d398341f57bc462716d0508",
        xboxseriesxs: "rockstargames-sites-gta-gen9a693ab5879f34d7dea1737d3172ed4e4",
        ps4: "rockstargames-sites-gta-gen9a029ff88fc9aef470aaeef8053f90436",
        ps5: "rockstargames-sites-gta-gen9e25638751cf3e7267db23c6a401fcc36",
        pc: "rockstargames-sites-gta-gen9e03d92653f19a7ae3c4b3d5137bc9909"
      };
      var r = t(46632);
      const i = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: n,
            ariaLabel: i
          } = e;
          return (0, r.jsx)("button", {
            className: t,
            onClick: s,
            style: n,
            type: "button",
            "aria-label": i,
            children: a
          })
        },
        c = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: i,
            to: c,
            ariaLabel: o
          } = e;
          return (0, r.jsx)(s.NavLink, {
            className: t,
            onClick: n,
            style: i,
            to: c,
            "aria-label": o,
            children: a
          })
        },
        o = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: o = "",
            img: l,
            labelColor: d = "#000",
            onClick: m,
            secondText: g,
            size: u,
            text: f,
            to: p,
            type: b = "",
            ariaLabel: k
          } = e;
          const h = [n.plusButton, n[b] ?? "", n[u] ?? "", n[s] ?? "", t].join(" "),
            v = {
              "--hvr-color": a ?? d,
              "--hvr-bg-color": d ?? a,
              "--hvr-border-color": a ?? d
            },
            x = (0, r.jsxs)(r.Fragment, {
              children: [l ? (0, r.jsx)("img", {
                src: l,
                alt: ""
              }) : "", (0, r.jsxs)("div", {
                className: n.btnText,
                icon: o,
                children: [f, g ? (0, r.jsx)("span", {
                  children: g
                }) : ""]
              })]
            });
          if (p) {
            if (p.startsWith("http")) {
              const e = p.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                onClick: m,
                onKeyDown: m,
                className: h,
                role: "button",
                "aria-label": k,
                tabIndex: 0,
                children: (0, r.jsx)("a", {
                  href: p,
                  target: e,
                  children: x
                })
              })
            }
            return (0, r.jsx)(c, {
              className: h,
              onClick: m,
              style: {
                ...v
              },
              to: p,
              ariaLabel: k,
              children: x
            })
          }
          return (0, r.jsx)(i, {
            className: h,
            onClick: m,
            style: {
              ...v
            },
            ariaLabel: k,
            children: x
          })
        }
    },
    22941: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(71403),
        n = t(72956),
        r = t.n(n),
        i = t(74401),
        c = t(42756);
      const o = {
        pillBtn: "rockstargames-sites-gta-gen9f87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-sites-gta-gen9a8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-sites-gta-gen9a57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-sites-gta-gen9daec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-sites-gta-gen9bd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-sites-gta-gen9a6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-sites-gta-gen9e88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-sites-gta-gen9ab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-sites-gta-gen9c20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-sites-gta-gen9b16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-sites-gta-gen9d0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-sites-gta-gen9d1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-sites-gta-gen9d6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-sites-gta-gen9f3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-sites-gta-gen9a6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-sites-gta-gen9eade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-sites-gta-gen9a82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-sites-gta-gen9d394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-sites-gta-gen9f1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-sites-gta-gen9cdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-sites-gta-gen9ba4bd16bff2fbc40616457007b4a7442"
      };
      var l = t(46632);
      const {
        sanitize: d
      } = r(), m = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: r,
          className: m,
          game: g,
          noImg: u,
          columns: f,
          mobileColumns: p
        } = e;
        const [b, k] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          k(a)
        }), [a]), t || a ? f && b ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--ordered-list-grid-column": f,
            "--ordered-list-grid-column-mobile": p ?? f
          },
          children: (0, l.jsx)("ol", {
            style: (0, c.safeStyles)(r),
            className: (0, i.classList)(o.itemList, o.noImg, o[n], o[g]),
            children: b.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ol", {
          style: (0, c.safeStyles)(r),
          className: (0, i.classList)(o.itemList, o.custom, u ? o.noImg : "", n ? o[n] : "", g ? o[g] : "", m ?? ""),
          children: a.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    99718: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(71403),
        n = t(88038),
        r = t(46632);
      class i extends s.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e?.message ? e.toString() : "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        render() {
          return null !== this.state.error.code ? (0, r.jsx)(n.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, r.jsx)(i, {
            header: a,
            children: (0, r.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    88038: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(71403),
        n = t(42756),
        r = t(60285),
        i = t(37017);
      var c = t(46632);
      const o = (0, n.withTranslations)((e => {
        let {
          error: a,
          t,
          domain: n = ""
        } = e;
        console.error({
          error: a
        });
        let o = a?.message ?? t("error-404-new");
        o = t("error-404-new");
        const l = a?.code ?? 398,
          d = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          d && d?.current && d.current.focus()
        }), [d]), (0, c.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9d988ce20c420c26fc5e455279bf94cb9",
          children: [(0, c.jsx)("h3", {
            tabIndex: -1,
            ref: d,
            children: `${o} (${l})`
          }), (0, c.jsx)(r.A, {
            to: "/",
            children: t("Home")
          }), "clr" !== n && (0, c.jsx)(i.A, {})]
        })
      }))
    },
    355: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => s,
        LiteMotion: () => o,
        withFadeIn: () => g,
        withFadeUp: () => b
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => v,
        transitions: () => k,
        variants: () => h
      });
      var n = t(71403),
        r = t(27926),
        i = t(46632);
      const c = (0, n.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, n = r.m[s];
        return (0, i.jsx)(r.LazyMotion, {
          features: r.domAnimation,
          children: (0, i.jsx)(n, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      c.displayName = "LiteMotion";
      const o = c,
        l = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        d = {
          ease: "easeIn",
          duration: .4
        },
        m = e => {
          let {
            children: a
          } = e;
          return (0, i.jsx)(r.motion.div, Object.assign({
            className: "rockstargames-sites-gta-gen9f0ee4e641f1ac92151be887c9ebb8392",
            variants: l,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: d
          }, {
            children: a
          }))
        },
        g = e => a => (0, i.jsx)(m, {
          children: (0, i.jsx)(e, Object.assign({}, a))
        }),
        u = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        f = {
          ease: "easeIn",
          duration: .75
        },
        p = e => {
          let {
            children: a
          } = e;
          return (0, i.jsx)(r.motion.div, {
            className: "rockstargames-sites-gta-gen9a479a10c5475b17a0564b60fecf98c8b",
            variants: u,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: f,
            children: a
          })
        },
        b = e => a => (0, i.jsx)(p, {
          children: (0, i.jsx)(e, {
            ...a
          })
        }),
        k = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        h = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        v = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return h[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        }
    },
    13963: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = n.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, n] = a;
            return n === t && (e = {
              site: s,
              subDomain: n
            }, !0)
          })) >= 0)), r = n[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    37109: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => k
      });
      var s = t(71403),
        n = t(26040),
        r = t.n(n),
        i = t(75638),
        c = t(14781),
        o = t(96717),
        l = t(42756),
        d = t(62811),
        m = t(26177),
        g = t(40207),
        u = t(76394);
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
      var b = t(46632);
      r().registerPlugin(c.u), r().registerPlugin(i.useGSAP);
      const k = (0, l.withLocale)((e => {
        let {
          backgroundColor: a,
          cardsOrientation: n = "left"
        } = e;
        const [r, i] = (0, s.useState)(""), [c, k] = (0, s.useState)(void 0), {
          currentCharId: h
        } = (0, g.useRockstarUserState)(), {
          data: v
        } = (0, g.useRockstarUser)(), {
          track: x
        } = (0, g.useGtmTrack)(), {
          windowWidth: _
        } = (0, l.useWindowResize)(), y = (0, o.useIntl)(), N = {
          "--promo-background": a ?? "var(--black-200)",
          "--promo-order": "left" === n ? "row" : "row-reverse"
        }, j = t(84465), S = () => {}, w = (0, u.A)().data, C = !!w?.length, T = (0, s.useMemo)((() => C ? ((e, a, t) => {
          const s = [];
          let n = 0;
          for (let a = 0; a < e.length && n < 12; a++) {
            const t = a % 3;
            Array.isArray(s[t]) || (s[t] = []), s[t].push(e[a]), n++
          }
          return s
        })(w.reduce(((e, a) => e.concat(a.subNavItems.filter((e => e.discoverSafe)))), []).sort(((e, a) => {
          const t = new Date(e.createdAt),
            s = new Date(a.createdAt);
          return e.createdAt && a.createdAt ? s.getTime() - t.getTime() : e.createdAt ? -1 : a.createdAt ? 1 : 0
        }))) : []), [C, w]), I = (0, s.useMemo)((() => (0, b.jsx)("img", {
          alt: y.formatMessage(f.discover_callout_mugshot, {
            userName: v?.nickname
          }),
          className: "rockstargames-sites-gta-gen9ffb5453a30a8c5d68070ae563656efc0",
          src: r || j,
          onError: S
        })), [r, j, y, v]), M = {
          event: "cta_learn",
          text: "track progress",
          link_url: "/gta-online/career-progress",
          element_placement: "discover page"
        };
        return (0, s.useEffect)((() => {
          const e = document.querySelector(`.${p}`);
          e?.clientHeight && k(e.clientHeight)
        }), [_]), (0, s.useEffect)((() => {
          if (v) {
            const {
              characters: e
            } = v;
            i(e?.gtao[h]?.mugshotUrl || "")
          }
        }), [h, v]), (0, b.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ddfe915c931cd932df5cdbdc77fa3a47",
          children: (0, b.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a7a317939644ffb10f67ad27c198ba83",
            style: N,
            children: [(0, b.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a0ce8d90be7ee4a73259dbcc4708dd97",
              "aria-label": y.formatMessage(f.discover_callout_cards_aria),
              children: C ? (0, b.jsx)("div", {
                className: "rockstargames-sites-gta-gen9a647165450b083aab8e1dd57c2f45c96",
                children: C && T.map(((e, a) => (0, b.jsxs)("div", {
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
                }, a)))
              }) : (0, b.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e81b2ea273605bbeff903c1dfdf17e27",
                children: (0, b.jsx)(m.A, {
                  type: "SPINNING"
                })
              })
            }), (0, b.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e83f1bee1ad8f8032b3b40400dc671b1",
              children: [I, (0, b.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9b51c01f415ca1ebb13dd7e56d10c2f32",
                children: [(0, b.jsx)("h3", {
                  className: "rockstargames-sites-gta-gen9e772c5f94ffe76be1ea92887c88c4bb3",
                  children: y.formatMessage(f.discover_callout_heading)
                }), (0, b.jsx)("p", {
                  children: y.formatMessage(f.discover_callout_description)
                })]
              }), (0, b.jsx)(d.A, {
                to: "/gta-online/career-progress",
                text: y.formatMessage(f.discover_callout_cta_label),
                onClick: M && (() => x({
                  ...M
                }))
              })]
            })]
          })
        })
      }))
    },
    5588: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        vinewoodClub: () => s
      });
      var s = t(46332)
    },
    36901: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Pause: () => n.default,
        Play: () => s.default
      });
      var s = t(30284),
        n = t(96492)
    },
    96492: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => n
      });
      var s = t(46632);
      const n = e => {
        let {
          alt: a = "",
          className: t = "",
          clipRule: n = "evenodd",
          fill: r = "white",
          fillRule: i = "evenodd",
          height: c = "20",
          viewBox: o = "0 0 20 20",
          width: l = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: t,
          height: c,
          width: l,
          viewBox: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("title", {
            children: a
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
    66573: () => {},
    30284: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => n
      });
      var s = t(46632);
      const n = e => {
        let {
          alt: a = "",
          className: t = "",
          clipRule: n = "evenodd",
          fill: r = "white",
          fillRule: i = "evenodd",
          height: c = "20",
          viewBox: o = "0 0 20 20",
          width: l = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: t,
          height: c,
          width: l,
          viewBox: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("title", {
            children: a
          }), (0, s.jsx)("path", {
            fillRule: i,
            clipRule: n,
            d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
            fill: r
          })]
        })
      }
    },
    97101: () => {},
    69464: (e, a, t) => {
      "use strict";
      t.r(a);
      var s = t(52186),
        n = t(40207),
        r = t(74401),
        i = t(72902),
        c = t(29107),
        o = t(94028),
        l = t(46632);
      jest.mock("@rockstargames/locale-tools", (() => ({
        ...jest.requireActual("@rockstargames/locale-tools"),
        useIntl: () => ({
          formatMessage: e => {
            let {
              defaultMessage: a
            } = e;
            return a
          }
        })
      }))), jest.mock("@rockstargames/modules-core-sc-user/index", (() => ({
        useGtmTrack: jest.fn()
      }))), jest.mock("@rockstargames/tina/index", (() => ({
        useGetCdnSource: jest.fn()
      }))), jest.mock("./hero-video.utils", (() => ({
        getVideoUrl: jest.fn()
      }))), jest.mock("./utils", (() => ({
        isReducedMotionPreferred: jest.fn(),
        messages: {
          video_hero_support_message: {
            defaultMessage: "Your browser does not support the video tag"
          },
          video_hero_play_button_label: {
            defaultMessage: "Play Video"
          },
          video_hero_pause_button_label: {
            defaultMessage: "Pause Video"
          }
        }
      }))), jest.mock("./elevator-pitch.less", (() => ({
        heroContainer: "heroContainer",
        herovideoWrapper: "herovideoWrapper",
        heroBackgroundImg: "heroBackgroundImg",
        heroVideo: "heroVideo",
        heroVideoPlayPauseBtn: "heroVideoPlayPauseBtn",
        heroOverlay: "heroOverlay",
        heroContentWrapper: "heroContentWrapper",
        heroContent: "heroContent",
        heroContentImg: "heroContentImg",
        heroCTA: "heroCTA"
      }))), describe("HeroVideo", (() => {
        const e = jest.fn(),
          a = jest.fn(),
          t = jest.fn(),
          d = jest.fn();
        beforeAll((() => {
          Object.defineProperty(HTMLMediaElement.prototype, "play", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          }), Object.defineProperty(HTMLMediaElement.prototype, "pause", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          }), Object.defineProperty(HTMLMediaElement.prototype, "addEventListener", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          }), Object.defineProperty(HTMLMediaElement.prototype, "removeEventListener", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          })
        })), beforeEach((() => {
          n.useGtmTrack.mockReturnValue({
            track: e
          }), r.useGetCdnSource.mockImplementation(a), c.getVideoUrl.mockImplementation(t), i.isReducedMotionPreferred.mockImplementation(d), e.mockClear(), a.mockClear(), t.mockClear(), d.mockClear()
        })), test("it renders fallback image when variant is image", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "image",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByAltText("Fallback Image");
          expect(e).toBeInTheDocument(), expect(e).toHaveAttribute("src", "fallback.jpg")
        })), test("it renders video when variant is video and reduced notion is not preferred", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByTestId("hero-video");
          expect(e).toBeInTheDocument()
        })), test("it toggles play/pause state when play/pause button is clicked", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const n = s.nj.getByRole("button", {
              hidden: !0
            }),
            r = s.nj.getByTestId("hero-video");
          s.rC.click(n), expect(r.play).toHaveBeenCalled(), expect(e).toHaveBeenCalledWith(expect.objectContaining({
            text: "toggle play"
          })), s.rC.click(n), expect(r.pause).toHaveBeenCalled(), expect(e).toHaveBeenCalledWith(expect.objectContaining({
            text: "toggle pause"
          }))
        })), test("it renders video play/pause button with correct icon", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByRole("button", {
            hidden: !0
          });
          expect(s.nj.getByTitle("Play Video")).toBeInTheDocument(), s.rC.click(e), expect(s.nj.getByTitle("Pause Video")).toBeInTheDocument(), s.rC.click(e), expect(s.nj.getByTitle("Play Video")).toBeInTheDocument()
        })), test("it attaches and remove event listeners correctly", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4");
          const {
            unmount: e
          } = (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          })), a = s.nj.getByTestId("hero-video");
          expect(a.addEventListener).toHaveBeenCalledWith("play", expect.any(Function)), expect(a.addEventListener).toHaveBeenCalledWith("pause", expect.any(Function)), e(), expect(a.removeEventListener).toHaveBeenCalledWith("play", expect.any(Function)), expect(a.removeEventListener).toHaveBeenCalledWith("pause", expect.any(Function))
        })), test("it does not render video when reduced motion is preferred", (() => {
          d.mockReturnValue(!0), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByAltText("Fallback Image");
          expect(e).toBeInTheDocument(), expect(s.nj.queryByTestId("hero-video")).toBeNull()
        }))
      }))
    },
    94028: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => u
      });
      var s = t(71403),
        n = t(74401),
        r = t(40207),
        i = t(96717),
        c = t(42756),
        o = t(29107),
        l = t(72902),
        d = t(36901),
        m = t(82594),
        g = t(46632);
      const u = (0, c.withLocale)((e => {
        let {
          variant: a,
          videoSrc: c,
          fallbackImg: u,
          fallbackImgAlt: f,
          contentImgSrc: p,
          contentImgAlt: b,
          heading: k,
          subheading: h,
          ctaText: v,
          ctaLink: x,
          overlayColor: _
        } = e;
        const {
          track: y
        } = (0, r.useGtmTrack)(), N = (0, s.useRef)(null), [j, S] = (0, s.useState)(!1), w = (0, l.isReducedMotionPreferred)(), C = (0, n.useGetCdnSource)(p?.full_src ?? ""), T = (0, n.useGetCdnSource)(u), I = (0, o.getVideoUrl)(c), {
          formatMessage: M
        } = (0, i.useIntl)(), E = "image" === a || w;
        let A;
        (0, s.useEffect)((() => {
          const e = () => S(!0),
            a = () => S(!1),
            t = N.current;
          return t && (t.addEventListener("play", e), t.addEventListener("pause", a)), () => {
            t && (t.removeEventListener("play", e), t.removeEventListener("pause", a))
          }
        }), []);
        try {
          A = I ? t(43207)(`.${I}`) : "mock-video-url.mp4"
        } catch (e) {
          console.error("Error loading video: ", e)
        }
        return (0, g.jsxs)("div", {
          className: m.default.heroContainer,
          children: [(0, g.jsx)("div", {
            className: m.default.heroVideoWrapper,
            children: "image" === a || w ? (0, g.jsx)("img", {
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
                  src: A,
                  type: "video/mp4"
                }), M(l.messages.video_hero_support_message)]
              }), (0, g.jsx)("button", {
                role: "button",
                className: m.default.heroVideoPlayPauseBtn,
                onClick: () => {
                  if (!E && N.current) {
                    let e = "";
                    j ? (N.current.pause(), e = "toggle pause") : (N.current.play(), e = "toggle play"), y({
                      event: "cta_other",
                      text: e,
                      element_placement: "hero"
                    }), S(!j)
                  }
                },
                "aria-hidden": !0,
                children: j ? (0, g.jsx)(d.Pause, {
                  alt: M(l.messages.video_hero_pause_button_label),
                  height: "24",
                  width: "24"
                }) : (0, g.jsx)(d.Play, {
                  alt: M(l.messages.video_hero_play_button_label),
                  height: "24",
                  width: "24"
                })
              })]
            })
          }), (0, g.jsx)("div", {
            className: m.default.heroOverlay,
            style: {
              "--overlay-bg": _ ?? "var(--gradient-black-200-bottom, linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%))"
            }
          }), (p || k || h || v) && (0, g.jsx)("div", {
            className: m.default.heroContentWrapper,
            children: (0, g.jsxs)("div", {
              className: m.default.heroContent,
              children: [p && (0, g.jsx)("img", {
                className: m.default.heroContentImg,
                src: C ?? p,
                alt: b
              }), k && (0, g.jsx)("h1", {
                children: k
              }), h && (0, g.jsx)("h2", {
                children: h
              }), x && (0, g.jsx)("a", {
                href: x,
                className: m.default.heroCTA,
                children: v
              })]
            })
          })]
        })
      }))
    },
    29107: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    88996: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => c
      });
      var s = t(55140),
        n = t(28089);
      const r = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
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
            label: a
          } = e;
          return [{
            value: "",
            label: a
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
    16108: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    72902: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        getVideoUrl: () => n.getVideoUrl,
        isReducedMotionPreferred: () => s.isReducedMotionPreferred,
        messages: () => r.default
      });
      var s = t(7230),
        n = t(16108),
        r = t(77936)
    },
    7230: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        isReducedMotionPreferred: () => s
      });
      const s = () => !("undefined" == typeof window || !window.matchMedia) && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    },
    77936: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => s
      });
      const s = (0, t(96717).defineMessages)({
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
    83178: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GetAudioAlbum"
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
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
                }
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
                value: "audioAlbum"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracks"
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
                        value: "cover_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mp3_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
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
                        value: "color"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mix_blend_mode"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "duration"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "artist"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "name"
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
          end: 340
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
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
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    50048: e => {
      var a = {
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
                value: "types"
              }
            },
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
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
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
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
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
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
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
                }
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "sync"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
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
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
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
                    value: "sync_hash"
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
                    value: "visible"
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
                        value: "id_hash"
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
                            value: "id"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }]
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
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
          end: 1002
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
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
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
    },
    94869: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_type"
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
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_type"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
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
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    31955: (e, a, t) => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
          },
          variableDefinitions: [{
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "page"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "limit"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
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
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 568
        }
      };
      s.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function r(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !n[a] && (n[a] = !0, !0)
        }))
      }

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      s.definitions = s.definitions.concat(r(t(90588).definitions)), s.definitions = s.definitions.concat(r(t(78417).definitions));
      var c = {};

      function o(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), c[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = c[a] || new Set,
          n = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var i = r;
          r = new Set, i.forEach((function(e) {
            n.has(e) || (n.add(e), (c[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = o(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    72752: e => {
      var a = {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
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
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    41194: e => {
      var a = {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesTree($type: String, $locale: String!) {\n    tinaModulesTree(type: $type, locale: $locale) {\n        title\n        id_hash\n        children {\n            title\n            to\n            id_hash\n            children {\n                title\n                to\n                id_hash\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
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
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesTree")
    },
    30938: e => {
      var a = {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesTree($id: String, $locale: String!) {\n    tinaModulesTree(id: $id, locale: $locale) {\n        tree {\n            title\n            children {\n                title\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
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
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesTree")
    },
    35459: (e, a, t) => {
      "use strict";
      t.d(a, {
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
    82594: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
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
    43202: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./VI/desktop.png": 94699,
        "./VI/mobile.png": 17821,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 43202
    },
    32781: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 32781
    },
    65392: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 94699
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 65392
    },
    17426: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 17821
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 17426
    },
    22343: (e, a, t) => {
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
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 22343
    },
    43207: (e, a, t) => {
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
        "./hero-video.test": 69464,
        "./hero-video.test.tsx": 69464,
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
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 43207
    },
    68128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    81764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    58989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    89544: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    65636: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    20357: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    17976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    84923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    45710: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    8318: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    52047: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    60350: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    89825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    36399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    92627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    76425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    43864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    10046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    58679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    60104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    15007: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    94699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    65682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    45024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    38910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    58205: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    48057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    97955: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    99826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    23686: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    34747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    44342: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    32217: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    63201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    27976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    57743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    61451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    67680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    76766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    61490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    85010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    85006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    77126: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    15651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    57741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    85171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    22006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    89550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    56204: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    94417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    56647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    31271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    51789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    7891: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    73195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    61748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    40499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    7737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    39528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    55582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    20724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14786: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    74540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    80173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    81919: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    31527: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    43048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    51652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
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
    },
    96425: () => {}
  }
]);