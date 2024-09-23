! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5b84f25d-4d69-47a0-a442-b8bf5423c0d0", e._sentryDebugIdIdentifier = "sentry-dbid-5b84f25d-4d69-47a0-a442-b8bf5423c0d0")
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
    60207: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => r
      });
      var s = a(55140),
        n = a(73379);
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
    93665: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => b,
        h: () => p
      });
      var s = a(71403),
        n = a(42756),
        r = a(64205),
        i = a(27926),
        o = a(74401),
        c = a(40207),
        l = a(89779);
      var d = a(46632);
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
            title: _,
            gtm: y = {},
            aspectRatio: j = "default",
            cardDimensions: N
          } = t, {
            left: w,
            top: S
          } = u, C = v?.indexOf(k), [T, A] = (0, s.useState)(v?.length || 0), {
            track: M
          } = (0, c.useGtmTrack)(), I = null !== v && (v?.length || 0) > 1 && ("flag_bg" === x || "fob" === N?.size), [E, L] = (0, l.useSearchParams)(), [P, B] = (0, s.useState)(!1), [$, V] = (0, s.useState)(!1), [D, H] = (0, s.useState)(), O = e => {
            "number" == typeof e && v && e < v.length && e > -1 && (console.log("navigating to: ", e), L({
              info: v[e].toString()
            }))
          }, G = () => {
            const e = C > -1 ? C - 1 : 0;
            O(e), M({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: _,
              position: C
            })
          }, R = () => {
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
            A(v?.length || 0)
          }), [v?.length]), (0, s.useEffect)((() => {
            null !== C && null !== v && O(C)
          }), [C, v]), (0, s.useEffect)((() => {
            const e = v?.findIndex((e => e === k));
            "number" == typeof e && (V(e <= 0), B(e >= T - 1))
          }), [v, k]);
          const [z] = (0, s.useState)({
            y: S,
            x: w,
            top: 0,
            left: 0,
            width: b,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: I ? "0" : ""
          }), F = {
            opacity: 1
          }, W = (0, s.useRef)(null), q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, U = {
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
            marginTop: I ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
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
          }), [Y, Q] = (0, s.useState)({
            initial: z,
            shown: X
          });
          (0, s.useEffect)((() => {
            Q({
              initial: z,
              shown: X
            })
          }), [z, X]), (0, s.useEffect)((() => {
            const e = e => {
              "function" == typeof g && "Escape" === e.key && (g(), M({
                event: "modal_close",
                element_placement: _,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const K = () => {
              "function" == typeof g && (g(), M({
                event: "modal_close",
                element_placement: _,
                ...y
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
                      return D?.queried ? t = D.element : (t = Z(e, 2), H({
                        queried: !0,
                        element: t
                      })), t
                    })(te.current), e.preventDefault(), t && (t.scrollTop += a)
                }
              }
            },
            ee = h ? 0 : 1,
            te = (0, s.useRef)(null),
            ae = (0, d.jsx)(i.motion.button, {
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
                K()
              },
              onKeyDown: J,
              onKeyUp: J
            });
          let se = null;
          return se = r.Ay, (0, s.useMemo)((() => (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": I,
            "data-aspect-ratio": j,
            children: (0, d.jsx)(se, {
              children: (0, d.jsxs)("div", {
                children: [(0, d.jsx)(i.motion.div, {
                  className: "rockstargames-sites-gta-gen9c8632c630878ad16e637fe2b8db2f02c",
                  initial: {
                    opacity: 0
                  },
                  animate: F,
                  transition: q,
                  onClick: () => K()
                }), I && (0, d.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9eeecb8dc782f382fc9d32d03ecc1a2a5",
                  children: [(0, d.jsxs)(i.motion.div, {
                    className: "rockstargames-sites-gta-gen9b6e3406cb9a52fc7583d5c74681e88bc",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: U,
                    children: [(0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: G,
                      disabled: $,
                      onKeyDown: J,
                      onKeyUp: J
                    }), (0, d.jsxs)("div", {
                      className: "rockstargames-sites-gta-gen9ff3c13d9dc1de9af609a1f99b4c47039",
                      "data-theme": x,
                      children: [" ", C + 1, (0, d.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9cd9c6033ad00894881fa5451acfe15da"
                      }), v?.length, " "]
                    }), (0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: R,
                      disabled: P,
                      onKeyDown: J,
                      onKeyUp: J,
                      "data-autofocus": !0
                    })]
                  }), ae]
                }), (0, d.jsx)(i.motion.div, {
                  className: "rockstargames-sites-gta-gen9fab99cc2e2ca2e2a2158f9d41e764558",
                  ref: W,
                  initial: "initial",
                  animate: "shown",
                  variants: Y,
                  transition: q,
                  style: f,
                  children: (0, d.jsxs)(i.motion.div, {
                    className: (0, o.classList)("rockstargames-sites-gta-gen9b6aa5ebf680af5d95d0e9c76ac36ed82", n),
                    children: [!I && ae, (0, d.jsx)(i.motion.div, {
                      className: (0, o.classList)("rockstargames-sites-gta-gen9d901631c0b9d817396c8352c027a2a0d", p),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: U,
                      ref: te,
                      children: a
                    }), (0, d.jsx)("button", {
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
          const [a, r] = (0, s.useState)(u), {
            setBodyIsLocked: i
          } = (0, n.useBodyScrollable)("ModalProvider"), o = (0, s.useMemo)((() => a?.content ? (0, d.jsx)(m, {
            modal: a
          }) : null), [a]), c = () => i(!1);
          return (0, s.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, s.useEffect)((() => {
            i(!!o)
          }), [o]), (0, d.jsx)(f.Provider, {
            value: [o, r],
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
        A: () => l
      });
      var s = a(89779),
        n = a(40207),
        r = a(35459),
        i = a(46632);
      const o = e => {
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
            to: o
          } = e;
          return (0, i.jsx)(s.NavLink, {
            className: a,
            onClick: n,
            style: r,
            to: o,
            children: t
          })
        },
        l = e => {
          let {
            altText: t = "",
            text: a,
            onClick: s,
            btnColor: l = "#fff",
            labelColor: d = "#000",
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
          } = (0, n.useGtmTrack)(), _ = [r.A.plusButton, r.A[m] ?? "", r.A[u] ?? "", r.A[p] ?? ""].join(" "), y = {
            "--hvr-color": l ?? d,
            "--hvr-bg-color": d ?? l,
            "--hvr-border-color": l ?? d
          }, j = (0, i.jsxs)(i.Fragment, {
            children: [b ? (0, i.jsx)("img", {
              src: b,
              alt: t || a
            }) : "", (0, i.jsxs)("div", {
              className: r.A.btnText,
              icon: g,
              children: [a, f ? (0, i.jsx)("span", {
                children: f
              }) : ""]
            })]
          }), N = e => {
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
              return (0, i.jsx)("span", {
                children: (0, i.jsx)("a", {
                  href: h,
                  className: _,
                  target: e,
                  onClick: N,
                  children: j
                })
              })
            }
            return (0, i.jsx)(c, {
              className: _,
              onClick: N,
              style: y,
              to: h,
              children: j
            })
          }
          return (0, i.jsx)(o, {
            className: _,
            onClick: N,
            style: y,
            innerRef: k,
            children: j
          })
        }
    },
    72877: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(74401),
        n = a(15186);
      var r = a(46632);
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
              title: i,
              gtm: o
            } = e;
            return i ? (0, r.jsx)(n.A, {
              className: "white",
              text: i,
              to: s,
              icon: a,
              gtm: o
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
        r = a(355),
        i = a(47252),
        o = a(40207),
        c = a(49948),
        l = a(74401),
        d = a(81902),
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
          const s = (0, l.useGetCdnSource)(a?.mobile?.full_src ?? null),
            n = (0, l.useGetCdnSource)(a?.desktop?.full_src ?? s);
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
            buynowbtn: r = null,
            description: i = null,
            images: c,
            links: l = [],
            title: m = null
          } = e;
          const {
            track: h
          } = (0, o.useGtmTrack)(), [v, k] = (0, s.useState)(!1), x = {
            type: "spring",
            stiffness: 425,
            damping: 40
          }, _ = {
            type: "spring",
            stiffness: 650,
            damping: 45
          }, y = {
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
              transition: y
            }
          }, N = {
            open: {
              opacity: 1,
              display: "grid",
              height: "auto",
              transition: {
                opacity: y,
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
                height: _
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
              transition: _,
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
                  images: c?.background
                }), (0, p.jsx)(b, {
                  className: u.foregroundImage,
                  images: c?.foreground
                })]
              }), (0, p.jsxs)("div", {
                className: u.content,
                children: [(0, p.jsxs)(n.motion.div, {
                  className: u.contentGrid,
                  animate: v ? "open" : "closed",
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
                    children: l.map(((e, t) => (0, p.jsx)("div", {
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
                  variants: j
                }) : "", r ? (0, p.jsxs)(n.motion.div, {
                  className: [u.ctaBtn, f.A.plusButton, v ? "" : u.closed].join(" "),
                  animate: v ? "open" : "closed",
                  variants: w,
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
                    children: r
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
                    variants: N,
                    initial: !1,
                    children: (0, p.jsx)("div", {
                      className: u.linkList,
                      children: l.length ? l.map(((e, t) => {
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
        k = r.withFadeIn((0, i.A)((e => {
          let {
            cards: t = [],
            bottomText: a,
            topText: n,
            ...r
          } = e;
          const {
            track: i
          } = (0, o.useGtmTrack)(), {
            ref: l,
            inView: g
          } = (0, c.useInView)({
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
            }), t?.length ? (0, p.jsx)(d.RC, {
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
        A: () => r
      });
      var s = a(74401);
      var n = a(46632);
      const r = e => {
        let {
          disclaimer: t,
          text: a = null,
          title: r,
          className: i = "",
          style: o = {}
        } = e;
        const c = a ?? t?.text ?? null,
          l = r ? `<h5>${r}</h5>${c}` : c;
        return c ? (0, n.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9fafe66500f74b5fda33cb7b70746a014", i),
          dangerouslySetInnerHTML: {
            __html: l
          },
          style: o
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
        r = a(47252),
        i = a(40207),
        o = a(49948),
        c = a(33588),
        l = a(94430),
        d = a.n(l);
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
            ...r
          } = e;
          return (0, g.jsx)(c.Header, {
            className: m.accordionHeader,
            children: (0, g.jsxs)(c.Trigger, {
              ref: t,
              className: d()(m.accordionTrigger, s),
              ...r,
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
          return (0, g.jsx)(c.Content, {
            className: d()(m.accordionContent, s),
            ...n,
            ref: t,
            children: (0, g.jsx)("div", {
              className: m.accordionContentText,
              children: a
            })
          })
        })),
        p = (0, r.A)((e => {
          let {
            buttonTxt: t,
            description: a,
            disclaimer: n,
            faqList: r = [],
            initialLength: l = 6,
            addedLength: d = 6,
            title: p,
            tinaModulesInfo: b
          } = e;
          const {
            track: h
          } = (0, i.useGtmTrack)(), [v, k] = (0, s.useState)(l), [x, _] = (0, s.useState)(void 0), [y, j] = (0, s.useState)(!1), N = (0, s.useRef)(null), w = (0, s.useRef)([]), {
            ref: S
          } = (0, o.useInView)({
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
            if (y) {
              const e = v - d;
              w.current[e] && w.current[e].focus(), j(!1)
            }
          }), [v]), (0, g.jsxs)("div", {
            ref: S,
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
              }), (0, g.jsx)(c.Root, {
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
                  }), _(e)
                },
                children: r.length ? r.slice(0, v).map(((e, t) => {
                  let {
                    question: a,
                    answer: s
                  } = e;
                  return (0, g.jsxs)(c.Item, {
                    className: m.accordionItem,
                    value: (t + 1).toString(),
                    children: [(0, g.jsx)(u, {
                      ref: e => w.current[t] = e,
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
              }), r.length > v && (0, g.jsx)("div", {
                className: m.viewMoreContent,
                children: (0, g.jsxs)("button", {
                  className: m.viewMore,
                  onClick: () => {
                    h({
                      event: "view_all",
                      text: "view more",
                      element_placement: "faqs"
                    }), k((e => e + d)), j(!0)
                  },
                  ref: N,
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
        A: () => r
      });
      var s = a(65046);
      var n = a(46632);
      const r = e => {
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
        r = a.n(n),
        i = a(60285),
        o = a(68340),
        c = a(25180),
        l = a(28089),
        d = a(40207);
      var m = a(46632);
      const g = e => {
          let {
            guide: t,
            parentTitle: a,
            index: s
          } = e;
          const {
            track: n
          } = (0, d.useGtmTrack)();
          let o = {
            hero: {}
          };
          r().cloneDeepWith(t, ((e, t) => {
            "images" === t && (o = e)
          }));
          const {
            src: c
          } = (0, l.useImageParser)(o?.thumb ?? {});
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b40f08dc1045d471f902655ea561c15e",
            children: (0, m.jsxs)(i.A, {
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
                  background: `url(${c?.mobile}) no-repeat center/cover`
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
          const i = r().map(t, "guide_id"),
            l = (0, c.X)({
              ids: i
            }),
            d = a?.[0]?.title ?? n,
            [u, f] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = l?.map(((e, t) => (0, m.jsx)(g, {
              guide: e,
              parentTitle: d,
              index: t
            }, e.id)));
            f(e)
          }), [l]), (0, m.jsx)(o.A, {
            size: "lg",
            slideChildren: u,
            title: d
          })
        }
    },
    2723: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var s = a(74401),
        n = a(89779),
        r = a(98436);
      var i = a(46632);
      const o = () => {
          const {
            guideId: e
          } = (0, n.useParams)(), t = (0, r.qj)(e, "<span></span>");
          return t ? (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9f1647fd28e5f0067e733c054be2c2424",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${t}`
            }
          }) : null
        },
        c = e => {
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
            children: [a ? (0, i.jsx)(c, {
              hero: a
            }) : "", (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b06267934a8fc8ac84e510f131df16ae",
              children: [(0, i.jsx)(o, {}), (0, i.jsx)("h1", {
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
    46585: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => v
      });
      var s = a(71403),
        n = a(89779),
        r = a(54252),
        i = a.n(r),
        o = a(48331),
        c = a(60285),
        l = a(40207),
        d = a(98436);
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
            query: r
          } = e;
          const {
            track: i
          } = (0, l.useGtmTrack)(), [o, u] = (0, s.useState)(n === r), {
            state: f
          } = (0, d.E_)(), {
            activeSection: p
          } = f;
          return (0, s.useEffect)((() => u(r !== p ? p === n : r === n)), [p]), (0, g.jsx)(c.A, {
            to: t,
            className: o ? m.activeSection : "",
            onClick: () => {
              i({
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
        h = e => {
          let {
            currentId: t,
            group: a
          } = e;
          const [n, r] = (0, s.useState)(null), [l, p] = (0, s.useState)(null), {
            state: h
          } = (0, d.E_)(), {
            activeSection: v
          } = h;
          return (0, s.useEffect)((() => {
            const e = i().findIndex(a?.children, (e => {
              let {
                id_hash: a
              } = e;
              return a === t
            }));
            p(e), r(-1 !== e)
          }), [t, v, a]), (0, g.jsxs)("div", {
            className: m.guideList,
            children: [(0, g.jsx)("button", {
              type: "button",
              onClick: () => r(!n),
              children: a.title
            }), (0, g.jsx)(o.motion.nav, {
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
                  children: [(0, g.jsx)(c.A, {
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
        v = e => {
          let {
            currentId: t
          } = e;
          const a = (0, d.hY)(),
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
        A: () => o
      });
      var s = a(71403),
        n = a(49948),
        r = a(98436);
      var i = a(46632);
      const o = e => {
        let {
          style: t,
          children: a,
          __anchor: o = null
        } = e;
        const {
          announcePresence: c
        } = (0, r.Yh)(), {
          ref: l,
          inView: d
        } = (0, n.useInView)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, s.useEffect)((() => {
          c(o)
        }), [o]), (0, s.useEffect)((() => {
          d && c(o)
        }), [d]), (0, i.jsx)("span", {
          style: t,
          className: "rockstargames-sites-gta-gen9e46af541dffc51dc338509484cffa659",
          name: o,
          ref: l,
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
        r = a(74401),
        i = a(40207),
        o = a(49948),
        c = a(72877),
        l = a(71864),
        d = a(5765);
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
        } = (0, i.useGtmTrack)(), {
          ref: _,
          inView: y
        } = (0, o.useInView)({
          threshold: .6
        }), [j, N] = (0, s.useState)(!1), w = (0, r.useGetCdnSource)(u?.full_src ?? null) ?? null;
        return (0, s.useEffect)((() => {
          y && !j && (x({
            event: "page_section_impression",
            element_placement: k?._memoq?.title?.toLowerCase()
          }), N(!0))
        }), [y]), (0, m.jsxs)("div", {
          className: (0, r.classList)("rockstargames-sites-gta-gen9f6868d96e7b25bdb74435d0559970e75", f ? "rockstargames-sites-gta-gen9c9ca8e3e22865d04f816a0923489b124" : "", b ? "rockstargames-sites-gta-gen9f044d09bcae5bc48eef278aa1c8600a2" : "", w ? "" : "rockstargames-sites-gta-gen9a6ec7a3705521eae985d53eb2769018c", v),
          style: h,
          ref: _,
          children: [w ? (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9aa09f1e58f180b91c4f1795f60448086",
            style: {
              background: `url(${w}) no-repeat center/cover`
            }
          }) : "", (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ed0a185c4fc5fc35cfe58c069276b698",
            children: [(0, m.jsx)(l.A, {
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
            }), (0, m.jsx)(c.A, {
              ctas: n
            }), (0, m.jsx)(d.A, {
              disclaimer: g
            })]
          })]
        })
      }))
    },
    50562: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(74401),
        n = a(33727);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9f117df17a34d1837a4e2bb599a71f88d",
        selected: "rockstargames-sites-gta-gen9e8b6740b3aded532dfefbf06edf500ca",
        imageTextGroupGroup: "rockstargames-sites-gta-gen9d51265e78cba56a6119978e898e2a967",
        bg: "rockstargames-sites-gta-gen9d9d65419cc79c4fa43a6bc2571c552c7",
        bgMobile: "rockstargames-sites-gta-gen9b52f9f638a05d06d1c573dded0810212",
        bgDesktop: "rockstargames-sites-gta-gen9d6c821fe070e5eb41f1fba6178bd3571"
      };
      var i = a(46632);
      const o = e => {
        let {
          bg: t,
          image_text_groups: a = [],
          style: o = {},
          className: c = ""
        } = e;
        const l = (0, s.useGetCdnSource)(t?.image?.mobile?.full_src ?? null),
          d = (0, s.useGetCdnSource)(t?.image?.desktop?.full_src ?? null) ?? l;
        return a.length ? (0, i.jsxs)("div", {
          className: (0, s.classList)(r.imageTextGroupGroup, c),
          style: {
            ...o
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
          }) : "", a.map(((e, t) => (0, i.jsx)(n.A, {
            ...e
          }, t)))]
        }) : null
      }
    },
    37281: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(60285),
        n = a(74401);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9a218c6efb11f05af742c35731abd7f0e",
        selected: "rockstargames-sites-gta-gen9c9f11c19d7943dec1c872d1d921cd364",
        linkoutSection: "rockstargames-sites-gta-gen9f62388243285f747f07ef5d1be84ceb8",
        cta: "rockstargames-sites-gta-gen9eec30b6a686a74885da49d3cf33c1795"
      };
      var i = a(46632);
      const o = e => {
        let {
          text: t,
          cta: o,
          to: c,
          className: l = "",
          style: d = {}
        } = e;
        return (0, i.jsxs)(s.A, {
          className: (0, n.classList)(r.linkoutSection, l),
          to: c,
          style: d,
          children: [t && (0, i.jsx)("div", {
            className: r.text,
            children: t
          }), o && (0, i.jsxs)("div", {
            className: r.cta,
            children: [o, " ", (0, i.jsx)("img", {
              src: a(56675)
            })]
          })]
        })
      }
    },
    21027: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(71403);
      var n = a(42756),
        r = a(46632);
      const i = e => {
        let {
          children: t,
          style: a,
          theme: i
        } = e;
        const [o, c] = (0, s.useState)(i);
        return (0, s.useEffect)((() => {
          i && c(i)
        }), [i]), (0, r.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a691fa72d9c1962b69090f47fbb6eadf",
          style: (0, n.safeStyles)(a),
          "data-theme": o,
          children: t
        })
      }
    },
    24347: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(31879),
        n = a.n(s);
      var r = a(46632);
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
    84690: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        BrandMessage: () => r,
        BuyNow: () => i.A,
        ClaimCountdown: () => c,
        Disclaimer: () => d.A,
        DiscoverCallout: () => l.A,
        ElevatorPitch: () => L,
        FAQ: () => m.Ay,
        Guide: () => g.A,
        GuideGroup: () => u.A,
        GuideIntro: () => f.A,
        GuideNavDesktop: () => p.A,
        GuideSection: () => b.A,
        Hero: () => w,
        HeroVideo: () => P.default,
        ImageTextGroup: () => te.A,
        ImageTextGroupGroup: () => ae.A,
        LinkoutSection: () => se.A,
        Logo: () => re,
        SectionTitle: () => ie,
        StickyColumn: () => F,
        Summary: () => U,
        SummaryCard: () => X,
        Tile: () => K,
        TinaWrapper: () => oe.A,
        TitleImage: () => D,
        ValueProp: () => ee,
        VideoPlayerWrapper: () => ce.A
      });
      var s = a(71864);
      var n = a(46632);
      const r = e => {
        let {
          brand: t,
          headline_left: a,
          headline_right: r,
          info: i
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
                children: r
              })]
            }), (0, n.jsx)("p", {
              children: i
            })]
          })]
        })
      };
      var i = a(99074),
        o = a(71403);
      const c = e => {
        let {
          left: t,
          right: a
        } = e;
        const [s, r] = (0, o.useState)(""), [i, c] = (0, o.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9b868510520ca3ebc97d9ce2ea9d2edf2",
          children: [(0, n.jsxs)("h2", {
            "aria-hidden": i,
            onMouseOver: () => {
              c(!0), r(`${t} ${a}`)
            },
            onMouseOut: () => {
              c(!1), r("")
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
      var l = a(37109),
        d = a(5765),
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
        _ = a(72877);
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
        j = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const r = (0, x.useGetCdnSource)(a ?? null),
            i = (0, x.useGetCdnSource)(s ?? r);
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
          const [s, r] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            a && r(a.map((e => {
              if (!e?.shardImg) return;
              const {
                title: t,
                shardImg: a
              } = e, {
                mobile: s,
                desktop: r
              } = a;
              return (0, n.jsx)(j, {
                title: t,
                mobileImg: s?.full_src,
                desktopImg: r?.full_src
              }, t)
            })))
          }), [a]), s ? (0, n.jsx)("div", {
            className: y.shardsCarousel,
            children: (0, n.jsx)(h.A, {
              title: t,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        w = e => {
          let {
            brands: t = [],
            backgroundImg: a,
            layeredImg: r,
            ctas: i = [],
            expandingButtonLabel: o = "Subscribe",
            platformsAndLinks: c = [],
            description: l,
            title: d,
            legalText: m,
            shardsSection: g = {},
            className: u
          } = e;
          const f = (0, x.useGetCdnSource)(a?.mobile?.full_src ?? null),
            p = (0, x.useGetCdnSource)(a?.desktop?.full_src ?? f),
            b = (0, x.useGetCdnSource)(r?.mobile?.full_src ?? null),
            h = (0, x.useGetCdnSource)(r?.desktop?.full_src ?? b),
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
          return (0, n.jsxs)(k.motion.div, {
            className: (0, x.classList)(y.hero, u),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${h})`,
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
              }) : "", b && h ? (0, n.jsx)("div", {
                className: y.layered
              }) : "", (0, n.jsx)("div", {
                className: y.gradient
              })]
            }), (0, n.jsxs)(k.motion.div, {
              className: y.content,
              initial: "hidden",
              animate: "visible",
              variants: j,
              children: [(0, n.jsx)(k.motion.div, {
                variants: w,
                children: (0, n.jsx)(s.A, {
                  brands: t
                })
              }), c.length ? (0, n.jsx)(k.motion.div, {
                variants: w,
                children: (0, n.jsx)(v.A, {
                  buttonText: o,
                  platformsAndLinks: c,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(k.motion.div, {
                      className: y.descriptions,
                      variants: w,
                      children: [(0, n.jsx)("h1", {
                        dangerouslySetInnerHTML: {
                          __html: d
                        }
                      }), (0, n.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: l
                        }
                      })]
                    }), i.length > 0 && (0, n.jsx)(k.motion.div, {
                      variants: w,
                      children: (0, n.jsx)(_.A, {
                        buttons: i,
                        className: y.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(k.motion.div, {
                  className: y.descriptions,
                  variants: w,
                  children: [(0, n.jsx)("h1", {
                    dangerouslySetInnerHTML: {
                      __html: d
                    }
                  }), (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: l
                    }
                  })]
                }), i.length > 0 && (0, n.jsx)(k.motion.div, {
                  variants: w,
                  children: (0, n.jsx)(_.A, {
                    buttons: i,
                    className: y.buttonGroup
                  })
                })]
              }), m && (0, n.jsx)(k.motion.div, {
                className: y.legalText,
                variants: w,
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
      var S = a(31090),
        C = a(62811),
        T = a(42756),
        A = a(96717),
        M = a(66940);
      const I = (0, A.defineMessages)({
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
        L = (0, T.withLocale)((e => {
          let {
            title: t,
            description: a,
            disclaimer: s,
            cta: r
          } = e;
          const {
            formatMessage: i
          } = (0, A.useIntl)();
          return (0, n.jsxs)("div", {
            className: E.elevatorPitch,
            "data-testid": "elevator-pitch",
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
                  children: r && (0, n.jsx)(x.TinaParser, {
                    components: {
                      Cta: S.A,
                      ExpandingPlatformButton: v.A,
                      Gen9Button: C.A
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
                    children: (0, n.jsx)(A.FormattedMessage, {
                      ...I.elevator_pitch_available_on
                    })
                  }), (0, n.jsxs)("div", {
                    className: E.platforms,
                    children: [(0, n.jsx)("img", {
                      className: E.platformIcon,
                      src: (0, M.A)("ps5") || "",
                      alt: i(I.elevator_pitch_available_on_ps5)
                    }), (0, n.jsx)("img", {
                      className: E.platformIcon,
                      src: (0, M.A)("xboxseriesxs") || "",
                      alt: i(I.elevator_pitch_available_on_xbox)
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
      var P = a(94028),
        B = a(62550),
        $ = a(94430),
        V = a.n($);
      const D = e => {
        let {
          imageSrc: t,
          imgTitle: a,
          description: s,
          cta: r
        } = e;
        const i = (0, x.useGetCdnSource)(t) ?? null,
          {
            isTablet: c
          } = (0, T.useWindowResize)(),
          [l, d] = (0, o.useState)(0);
        return (0, o.useEffect)((() => {
          d(c ? .5 * window.innerHeight : .25 * window.innerHeight)
        }), [c, window.innerHeight]), (0, n.jsxs)("figure", {
          className: "rockstargames-sites-gta-gen9ff6de3d17596f7d56f83302c8a3dd352",
          children: [(0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e887f05b18428646120596f3178947b0",
            style: {
              "--background-image": `url(${i})`
            },
            children: (0, n.jsx)("span", {
              className: V()("rockstargames-sites-gta-gen9b2b47e2d6ee2512546e0f91fb0fba7f0", "rockstargames-sites-gta-gen9ab16846895ba51a759f8c2df61943b0c"),
              children: (0, n.jsx)(B.A, {
                mode: "multi",
                className: "rockstargames-sites-gta-gen9c6d5d0140314e0df364f66b84fa159eb",
                forceSingleModeWidth: !0,
                max: l,
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
            }), r && (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f7479f40675e07f1aa36e35a177f5aa4",
              children: (0, n.jsx)(x.TinaParser, {
                components: {
                  Cta: S.A,
                  ExpandingPlatformButton: v.A
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
      var H = a(80256),
        O = a(40207),
        G = a(49948);
      const R = {
          pillBtn: "rockstargames-sites-gta-gen9b96747e091c0ce36b60886a907fbf847",
          selected: "rockstargames-sites-gta-gen9c1682f9aeffb507f4b2efdebc95b1cab",
          gridLayout: "rockstargames-sites-gta-gen9a1d8c35931e5c1a50473d927fbfe49f2",
          leftColumn: "rockstargames-sites-gta-gen9c7191c86cb1d962197259bf74f36a21b",
          rightColumn: "rockstargames-sites-gta-gen9fe170e2263d9d14a17c07110bd4bee3c",
          stickyBlock: "rockstargames-sites-gta-gen9a35c3b659af9f58cf4134bc30572c35e",
          shadow: "rockstargames-sites-gta-gen9ff71d0b79549193178ee720c73bd4384"
        },
        z = e => {
          const [t, a] = (0, o.useState)(void 0);
          return (0, o.useEffect)((() => {
            a(!!e)
          }), [e]), t
        },
        F = e => {
          let {
            title: t,
            leftColumn: a,
            rightColumn: s,
            disableStickyOnDesktop: r,
            disableStickyOnMobile: i
          } = e;
          const {
            track: c
          } = (0, O.useGtmTrack)(), {
            isTablet: l
          } = (0, T.useWindowResize)(), {
            ref: d
          } = (0, G.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && c({
                event: "page_section_impression",
                element_placement: t?.toLowerCase()
              })
            }
          }), m = (0, o.useRef)(null), g = (0, o.useRef)(null), u = z(r), f = z(i), p = (0, x.useTinaComponents)(), b = (0, o.useMemo)((() => ({
            ...p,
            HTMLElement
          })), [p]);
          return ((e, t, a) => {
            const s = (0, o.useCallback)((() => {
              if (e && t.current && a.current) {
                const e = t.current.getBoundingClientRect().bottom,
                  s = a.current.getBoundingClientRect().top;
                a.current.style.marginTop = s <= e ? "" + (e - s) : "0"
              }
            }), [e, t, a]);
            (0, o.useEffect)((() => (window.addEventListener("scroll", s), window.addEventListener("resize", s), () => {
              window.removeEventListener("scroll", s), window.removeEventListener("resize", s)
            })), [s])
          })(l, m, g), (0, n.jsx)(H.A, {
            thresholds: [.5, 1],
            onThresholdReached: e => {
              c({
                event: "page_section_scroll",
                element_placement: t?.toLowerCase(),
                scroll_depth: 100 * e + "%"
              })
            },
            children: (0, n.jsxs)("div", {
              className: V()(R.gridLayout),
              children: [(0, n.jsx)("div", {
                ref: m,
                className: R.leftColumn,
                style: {
                  "--desktop-position": u ? "relative" : "sticky",
                  "--mobile-position": f ? "relative" : "sticky"
                },
                children: (0, n.jsx)("div", {
                  ref: d,
                  className: R.stickyBlock,
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
                className: V()(R.rightColumn, l ? R.shadow : null, R.borderGrey),
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
          return t?.length ? (0, n.jsx)("section", {
            className: V()(q.scrollableBlock, q.benefitsWrapper),
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
        X = (0, T.withLocale)((e => {
          let {
            title: t,
            description: a,
            imgSrc: s,
            cta: r
          } = e;
          const i = (0, x.useGetCdnSource)(s?.mobile),
            o = (0, x.useGetCdnSource)(s?.desktop) || i;
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
                children: (0, n.jsx)(x.TinaParser, {
                  components: {
                    Cta: S.A,
                    ExpandingPlatformButton: v.A,
                    Gen9Button: C.A
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
                src: o,
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
        Q = e => {
          let {
            title: t,
            description: a,
            cta: s,
            imgSrc: r,
            imgPosition: i = "top",
            cardSize: o = "medium",
            enableFullBleed: c,
            background: l = "var(--foundry-alias-color-background-bold-layer-2)",
            backgroundSize: d = "cover",
            backgroundImage: m,
            backgroundPosition: g = "center",
            backgroundRepeat: u = "no-repeat",
            customStyles: f
          } = e;
          const p = (0, x.useGetCdnSource)(r?.mobile ?? null),
            b = (0, x.useGetCdnSource)(r?.desktop ?? p),
            h = (0, x.useGetCdnSource)(m ?? null),
            k = {
              background: l,
              backgroundSize: d,
              backgroundImage: m ? `url(${h})` : void 0,
              backgroundPosition: g,
              backgroundRepeat: u,
              ...f
            };
          return (0, n.jsxs)("article", {
            className: V()(Y.tile, [Y[`tile--${o}`]], [Y[c ? "fullBleed" : "contain"]], [Y[`tile--${i}`]]),
            style: {
              ...k
            },
            children: [r && (0, n.jsx)("div", {
              role: "img",
              className: Y.tile__image,
              "aria-label": r?.imgAlt || r?._memoq?.imgAlt,
              style: {
                "--background-image-desktop": `url(${b})`,
                "--background-image-mobile": `url(${p})`
              }
            }), (0, n.jsxs)("div", {
              className: V()(Y.tile__content),
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
                    Cta: S.A,
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
        K = (0, o.memo)(Q),
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
        J = (0, o.memo)(Z),
        ee = e => {
          let {
            name: t,
            valueProps: a,
            enableAnimation: s
          } = e;
          const {
            track: r
          } = (0, O.useGtmTrack)(), {
            ref: i
          } = (0, G.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && r({
                event: "page_section_impression",
                element_placement: t.toLowerCase()
              })
            }
          }), c = (0, o.useCallback)((e => () => {
            const a = e + 1;
            r({
              event: "card_click",
              card_id: a.toString(),
              card_name: `Card ${a}`,
              position: a,
              element_placement: t.toLowerCase()
            })
          }), [a]);
          return (0, n.jsx)("div", {
            ref: i,
            "data-animate": s,
            className: "rockstargames-sites-gta-gen9ac883cf395291a034c0c6065f9636504",
            children: a.map(((e, t) => (0, n.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9f47b785957378c295f893b75cf01623b",
              onClick: c(t),
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
        re = e => {
          let {
            brand: t
          } = e;
          return (0, n.jsx)("div", {
            className: ne[t]
          })
        },
        ie = () => (0, n.jsx)("h2", {
          children: "Section"
        });
      var oe = a(21027),
        ce = a(24347)
    },
    98436: (e, t, a) => {
      "use strict";
      a.d(t, {
        E_: () => r,
        Yh: () => i.Y,
        qj: () => g,
        hY: () => c,
        hI: () => d
      });
      var s = a(58407);
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
      var i = a(65046),
        o = a(41194);
      const c = () => {
        const {
          data: e
        } = (0, s.useQuery)(o.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var l = a(71403);
      a(54252), a(80232);
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
      a(40207);
      var m = a(30938);
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
    65046: (e, t, a) => {
      "use strict";
      a.d(t, {
        B: () => d,
        Y: () => l
      });
      var s = a(71403),
        n = a(89779),
        r = a(70396),
        i = a(98436),
        o = a(46632);
      const c = (0, s.createContext)(),
        l = () => (0, s.useContext)(c),
        d = e => {
          let {
            children: t
          } = e;
          const [a, l] = (0, s.useState)(null), [d] = (0, n.useSearchParams)(), {
            setActiveSection: m
          } = (0, i.E_)(), {
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
          return (0, o.jsx)(c.Provider, {
            value: f,
            children: t
          })
        }
    },
    80232: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        componentsForTinaParser: () => _t,
        componentsForTinaParserGuide: () => yt
      });
      var s = a(55430),
        n = a(21450),
        r = a(91318),
        i = a(31090),
        o = a(39695),
        c = a(28606),
        l = a(95137),
        d = a(87839),
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
        _ = a(71403),
        y = a(74401),
        j = a(355),
        N = a(74459),
        w = a.n(N),
        S = a(54252),
        C = a.n(S),
        T = a(61651),
        A = a(42756),
        M = a(71080);
      var I = a(46632);
      const E = e => {
          let {
            hasTag: t = !1,
            tag: a = null,
            tagStyle: s = null,
            badges: n = []
          } = e;
          return t && a ? (0, I.jsx)("div", {
            className: "rockstargames-sites-gta-gen9bc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": s,
            children: a
          }) : t && n && n?.length > 0 ? (0, I.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d4a1a1e4fc4c16138d3c879bc1864227",
            children: n.map((e => (0, I.jsx)(M.A, {
              ...e
            }, e?.text)))
          }) : null
        },
        L = {
          textOverlay: "rockstargames-sites-gta-gen9a9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-sites-gta-gen9d35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: P,
          Animations: B
        } = j,
        {
          variants: $,
          transitions: V
        } = B,
        D = e => {
          let {
            title: t,
            hasTag: a,
            tag: s,
            hasDescription: n,
            description: r,
            fadesOut: i = !1,
            badges: o
          } = e;
          return (0, I.jsx)(P, {
            initial: $.fade.out.initial,
            animate: {
              opacity: i ? 0 : 1
            },
            transition: V.fade,
            className: L.textOverlay,
            children: (0, I.jsxs)("div", {
              className: L.content,
              children: [(0, I.jsx)(E, {
                hasTag: a,
                tag: s,
                badges: o?.filter((e => e?.isPrimary))
              }), (0, I.jsx)("h3", {
                children: t
              }), n && r && (0, I.jsx)("div", {
                className: L.description,
                children: r
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
            tagStyle: r,
            discountPrice: i,
            originalPrice: o,
            setPricingContainerHeight: c = null
          } = e;
          const l = (0, _.createRef)();
          return (0, _.useEffect)((() => {
            const e = () => {
              l.current && null !== c && c(l.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, I.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f721d7192d3e29e64567a729fd8d5985",
            ref: l,
            "data-show-background": s,
            children: [a && (0, I.jsx)("span", {
              className: "rockstargames-sites-gta-gen9f390fe2c9338785ce412483a1bac624c",
              children: t
            }), (0, I.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9fc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, I.jsx)("span", {
                className: "rockstargames-sites-gta-gen9b7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": r || "free",
                children: n
              }), (0, I.jsx)("span", {
                className: "rockstargames-sites-gta-gen9d8c7408e6335e53326bc70a1a065f81b",
                children: i
              }), (0, I.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a3632910b63514f6b49539fe45bcccb6",
                children: o
              })]
            })]
          })
        };
      var O = a(90837),
        G = a(82275),
        R = a(44338),
        z = a(67245),
        F = a(47483),
        W = a(19169),
        q = a(96165),
        U = a(73870);
      const X = {
          ps5: R,
          ps4: G,
          ps: O,
          xboxone: F,
          xbox: W,
          xboxseriesxs: z,
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
            setPricingContainerHeight: r = (() => {}),
            expandedView: i
          } = e;
          const o = (0, _.createRef)();
          return (0, _.useEffect)((() => {
            const e = () => {
              o.current && null !== r && r(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, I.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e754e3afc303a114f9e28e09c5519a30",
            ref: o,
            "data-show-background": s,
            "data-show-platforms": !i,
            children: [a && (0, I.jsx)("span", {
              className: "rockstargames-sites-gta-gen9fd98e3d7af2a583d4338d802666901a5",
              children: t
            }), n?.platformsAndLinks && (0, I.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9cbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, I.jsx)(E, {
                hasTag: n?._memoq?.platformTag,
                tag: n?._memoq?.platformTag,
                tagStyle: n?._memoq?.platformTagStyle
              }), (0, I.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b7de0e1798d1a020191fbe44b67f34d2",
                children: n.platformsAndLinks.map((e => {
                  let {
                    platform: t,
                    buttonText: a
                  } = e;
                  return (0, I.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9aa5f852c8932dcf689a97496d437f13b",
                    alt: a,
                    src: X[t]
                  }, t)
                }))
              })]
            })]
          })
        },
        Q = e => {
          let {
            textOverlayProps: t,
            title: a,
            size: s,
            expandedView: n = !1,
            children: r,
            pricingOptions: i,
            setPricingContainerHeight: o,
            isCoverCard: c = !1,
            platformOptions: l
          } = e;
          const [d] = (e => {
            let {
              hasTextOverlay: t,
              tag: a,
              collapsedHasTag: s,
              description: n,
              collapsedHasDescription: r,
              size: i,
              title: o,
              expandedView: c,
              badges: l
            } = e;
            const [d, m] = (0, _.useState)(null), g = (0, _.useMemo)((() => {
              if (!t) return null;
              const e = "sm" !== i && r;
              return (0, I.jsx)(D, {
                title: o,
                hasTag: s,
                tag: a,
                hasDescription: e,
                description: n,
                fadesOut: c,
                badges: l
              })
            }), [t, a, s, n, r, i, o, c, l]);
            return (0, _.useEffect)((() => {
              m(g)
            }), [g]), [d, m]
          })({
            ...t,
            size: s,
            title: a,
            expandedView: n
          }), m = void 0 !== i?.hasPricingOptions || null !== l;
          return (0, I.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9c525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": c,
            "data-expanded-view": n,
            children: [_.Children.map(r, (e => (0, _.cloneElement)(e, {
              title: a,
              size: s,
              expandedView: n
            }))), d, m && (0, I.jsxs)(I.Fragment, {
              children: [!0 === l?.hasPlatformOptions && (0, I.jsx)(Y, {
                title: a,
                platformOptions: l,
                pricingOptions: i,
                setPricingContainerHeight: o,
                expandedView: n
              }), !0 === i?.hasPricingOptions && (0, I.jsx)(H, {
                title: a,
                tag: i?._memoq?.tag,
                tagStyle: i?._memoq?.tagStyle || "free",
                discountPrice: i?._memoq?.discountPrice,
                originalPrice: i?._memoq?.originalPrice,
                setPricingContainerHeight: o
              })]
            })]
          })
        },
        {
          LiteMotion: K,
          Animations: Z
        } = j,
        {
          transitions: J
        } = Z,
        ee = e => {
          let {
            components: t,
            payload: a,
            prod: s,
            size: n,
            title: r,
            initial: i = "initial",
            animate: o = "animate",
            variants: c,
            type: l = null,
            context: d = null,
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
          const j = (0, _.useRef)(),
            N = (0, _.useRef)(),
            {
              tag: w,
              expandedHasTag: S,
              badges: M
            } = m;
          C().set(a, "meta.prod", s);
          const L = u?.props?.images.length > 0;
          let P = (0, I.jsx)("h1", {
            children: r
          });
          return v && (P = null), (0, _.useEffect)((() => {
            const e = () => {
              j.current && j.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (j.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, I.jsx)(A.DataLayerProvider, {
            card_id: p,
            card_name: r?.toLowerCase(),
            children: (0, I.jsx)(T.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === l ? j : N,
              children: (0, I.jsxs)(K, {
                ref: j,
                initial: i,
                animate: o,
                variants: c.expanded,
                transition: J.cardOpen,
                className: (0, y.classList)("rockstargames-sites-gta-gen9dcb84dcfd34616fb0089133acf0c4669", g),
                "data-type": l,
                "data-size": n,
                "data-product": x,
                "data-covercard": v || !1,
                "data-context": d,
                style: {
                  "--product-card-pricing-info-height": `${h||0}px`
                },
                children: [L && (0, I.jsx)(Q, {
                  size: n,
                  title: r,
                  textOverlayProps: m,
                  expandedView: !0,
                  pricingOptions: b,
                  platformOptions: k,
                  isCoverCard: v,
                  children: u
                }), (0, I.jsxs)(K, {
                  ref: N,
                  className: "rockstargames-sites-gta-gen9eaf357a8d0bae1199142949cbf24e7b9",
                  variants: c.expandedContents,
                  transition: J.afterCardOpen,
                  "data-theme": f,
                  children: [(0, I.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9fc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, I.jsx)(E, {
                      hasTag: S,
                      tag: w,
                      badges: M
                    }), P, x && (0, I.jsxs)(I.Fragment, {
                      children: [!0 === k?.hasPlatformOptions && (0, I.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9b630c7c1f59f91f2ac304af525b6d081",
                        children: (0, I.jsx)(E, {
                          hasTag: k?.hasPlatformOptions,
                          tag: k?._memoq?.platformTag,
                          tagStyle: k?._memoq?.platformTagStyle
                        })
                      }), !0 === b?.hasPricingOptions && (0, I.jsx)(H, {
                        title: r,
                        showTitle: !1,
                        showBackground: !1,
                        tag: b?._memoq?.tag,
                        tagStyle: b?.tagStyle || "free",
                        discountPrice: b?._memoq?.discountPrice,
                        originalPrice: b?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, I.jsx)(y.TinaParser, {
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
      const re = JSON.parse('{"us":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}"},"de":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}"},"es":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"mx":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}"},"fr":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}"},"it":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}"},"jp":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}"},"kr":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}"},"pl":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}"},"br":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"ru":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})"},"hans":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"},"tw":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"}}'),
        ie = (0, te.defineMessages)({
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
        oe = (0, te.withIntl)((e => {
          let {
            id: t,
            position: a,
            title: s,
            size: n = "md",
            sectionTitle: r = "",
            expandedType: i = null,
            modalProps: o = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: c,
            children: l,
            isProductCard: d,
            cardIds: m = null,
            theme: g = "none",
            isCoverCard: u,
            platformOptions: f
          } = e;
          const {
            formatMessage: p,
            formatList: b
          } = (0, te.useIntl)(), [h, v] = (0, ae.useSearchParams)(), k = (0, _.useRef)(null), [, x] = (0, se.h)(), {
            track: y
          } = (0, ne.useGtmTrack)(), [j, N] = (0, _.useState)(!1), w = () => {
            N(!1), x(null), v({}), y({
              event: "trackPageview"
            })
          }, S = () => {
            if (!o?.content || !k.current || !i || "linkout" === i) return;
            const e = k.current,
              r = window.getComputedStyle(e),
              c = parseInt(r.getPropertyValue("width"), 10),
              l = parseInt(r.getPropertyValue("height"), 10),
              d = e.getBoundingClientRect(),
              {
                content: u,
                className: f,
                contentClassName: p
              } = o,
              b = "fob" === n ? "fob" : "default";
            x({
              content: u,
              onClose: w,
              rect: d,
              width: c,
              height: l,
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
                type: i
              }
            }), y({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: t,
              card_name: s?.toLowerCase(),
              position: a
            })
          };
          (0, _.useEffect)((() => {
            j && S()
          }), [j]), (0, _.useEffect)((() => {
            N(h.get("info") === t)
          }), [h.get("info"), t]);
          const C = (0, _.useMemo)((() => {
            const e = f?._memoq?.platformTag || "";
            if (f?.platformsAndLinks?.length > 0) {
              const t = f?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: t
                  } = e;
                  return t
                })),
                a = b(t, {
                  type: "conjunction"
                });
              return e ? p(ie.card_label_platforms_tag, {
                tag: e,
                title: s,
                platformList: a
              }) : p(ie.card_label_platforms, {
                title: s,
                platformList: a
              })
            }
            return e ? p(ie.card_label_tag, {
              tag: e,
              title: s
            }) : s
          }), [f, s]);
          return u || "linkout" === i ? (0, I.jsx)("div", {
            ref: k,
            className: c,
            "data-size": n,
            "data-type": i,
            "data-product": d,
            role: "button",
            "aria-label": C,
            children: l
          }) : (0, I.jsx)("button", {
            ref: k,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), t ? v({
                info: t
              }) : S(), y({
                event: "card_click",
                element_placement: r?.toLowerCase(),
                position: a,
                card_id: t,
                card_name: s?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: c,
            "data-size": n,
            "data-type": i,
            "data-product": d,
            tabIndex: "linkout" !== i ? 0 : -1,
            "aria-label": C,
            type: "button",
            children: l
          })
        }), re),
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
        le = e => {
          let {
            payload: t,
            prod: a,
            images: s,
            size: r,
            title: i,
            initial: o,
            animate: c,
            variants: l,
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
            modalProps: j = [],
            theme: N,
            cardIds: S,
            pricingOptions: C,
            platformOptions: T = null,
            pricingContainerHeight: A,
            isCoverCard: M = !1,
            isProductCard: E = !1
          } = e;
          const L = (0, y.useTinaComponents)(),
            P = (0, _.useMemo)((() => ({
              ...L,
              HTMLElement: d.A,
              ImageWithBadge: b.A,
              Carousel: n.A,
              GroupOfItems: w()
            })), [L]),
            B = (0, _.useMemo)((() => (0, I.jsx)(ee, {
              type: f,
              components: P,
              payload: t,
              prod: a,
              images: s,
              size: r,
              title: i,
              context: p,
              textOverlayProps: k,
              initial: o,
              animate: c,
              variants: l,
              theme: N,
              cardIds: S,
              pricingOptions: C,
              id: m,
              pricingContainerHeight: A,
              isCoverCard: M,
              platformOptions: T,
              isProductCard: E,
              children: v
            })), [f, s, a, r, i, k, v, o, c, l, P, t, E]),
            $ = [ce.card, M ? ce.coverCardWrapper : ""].join(" ");
          return (0, I.jsx)(oe, {
            id: m,
            position: g,
            sectionTitle: u,
            title: i,
            size: r,
            expandedType: f,
            images: s,
            deckProps: x,
            modalProps: {
              content: B,
              ...j
            },
            className: $,
            isProductCard: E,
            cardIds: S,
            theme: N,
            isCoverCard: M,
            platformOptions: T,
            children: h
          })
        };
      var de = a(28089);
      const me = {
          layeredImageFrame: "rockstargames-sites-gta-gen9f4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-sites-gta-gen9f48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-sites-gta-gen9b52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-sites-gta-gen9f55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-sites-gta-gen9fa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-sites-gta-gen9b496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: ge,
          Animations: ue
        } = j,
        {
          getVariant: fe,
          variants: pe,
          transitions: be
        } = ue,
        he = e => {
          let {
            image: t,
            i: a,
            prod: s
          } = e;
          const {
            alt: n,
            src: r
          } = (0, de.useImageParser)({
            ...t,
            prod: s
          });
          return (0, I.jsx)("img", {
            src: r.mobile,
            alt: n ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        ve = e => {
          let {
            images: t = [],
            className: a = "",
            prod: s = !1,
            expandedView: n = !1,
            style: r = {}
          } = e;
          const [i, o] = (0, _.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, _.useEffect)((() => {
            function e() {
              o({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [i]);
          const c = (0, _.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, I.jsx)(ge, {
            className: (0, y.classList)(me[e?.specialClass] ?? me.imageMask, me[e?.sizeClass], e?.className),
            variants: fe(e?.specialClass ?? "imageMask", n ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: be.cardOpen,
            children: (0, I.jsx)(he, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [t, i, n, s]);
          return (0, I.jsx)(ge, {
            className: (0, y.classList)(me.layeredImageFrame, t.length > 1 ? me.layered : me.flat, a),
            style: r,
            initial: pe.fade.in.initial,
            animate: pe.fade.in.animate,
            transition: be.instantFade,
            "data-expanded-view": n,
            children: c
          })
        };
      var ke = a(60285);
      const xe = e => {
          let {
            expandedType: t,
            to: a,
            children: s,
            style: n,
            sectionTitle: r = "",
            id: i,
            cardTitle: o,
            position: c
          } = e;
          const {
            track: l
          } = (0, ne.useGtmTrack)(), d = (0, _.useCallback)((() => {
            l({
              event: "card_click",
              link_url: a,
              card_id: i,
              card_name: o,
              element_placement: r.toLowerCase(),
              position: c
            })
          }), [r, a, i, o, r, c]);
          return "linkout" === t && a ? (0, I.jsx)(ke.A, {
            to: a,
            style: n,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: d,
            children: s
          }) : s
        },
        _e = {
          pillBtn: "rockstargames-sites-gta-gen9c484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-sites-gta-gen9d65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-sites-gta-gen9c0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-sites-gta-gen9cebbc72d1229514723b9d664281b472f"
        },
        {
          variants: ye
        } = j.Animations,
        je = e => {
          let {
            id: t,
            title: a,
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
            images: o = [],
            deckProps: c = {},
            to: l = null,
            tina: d = {},
            position: m = 0,
            sectionTitle: g = "",
            theme: u,
            pricingOptions: f,
            cardIds: p,
            platformOptions: b = null
          } = e;
          const h = (0, y.useTinaPayload)(),
            v = d?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            [k, x] = (0, _.useState)(c?.size ?? n),
            [j, N] = (0, _.useState)(0),
            w = void 0 !== f?.hasPricingOptions || void 0 !== b?.hasPlatformOptions;
          return (0, _.useEffect)((() => {
            x(c?.size ?? n)
          }), [c?.size, n]), (0, I.jsx)(le, {
            id: t,
            title: a,
            size: k,
            expandedType: r,
            images: o,
            deckProps: c,
            prod: v,
            payload: {
              content: s,
              meta: {}
            },
            variants: ye.plainCard,
            textOverlayProps: i,
            modalProps: {
              className: _e.customModal,
              contentClassName: _e.customModalContent
            },
            expandedCardContents: (0, I.jsx)(ve, {
              images: o,
              prod: v,
              expandedView: !0
            }),
            position: m,
            sectionTitle: g,
            theme: u,
            cardIds: p,
            pricingOptions: f,
            platformOptions: b,
            pricingContainerHeight: j,
            isProductCard: w,
            children: (0, I.jsx)(xe, {
              expandedType: r,
              to: l,
              sectionTitle: g,
              id: t,
              cardTitle: a,
              position: m,
              children: (0, I.jsx)("div", {
                className: _e.content,
                "data-product": w,
                children: (0, I.jsx)(Q, {
                  title: a,
                  size: k,
                  textOverlayProps: i,
                  pricingOptions: f,
                  platformOptions: b,
                  setPricingContainerHeight: N,
                  children: (0, I.jsx)(ve, {
                    images: o,
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
      } = j.Animations;
      var we = a(58407),
        Se = a(72752),
        Ce = a(94566),
        Te = a(22778);
      const Ae = {
          pillBtn: "rockstargames-sites-gta-gen9a50fca350d7dbc4340ad3c68f1da1960",
          selected: "rockstargames-sites-gta-gen9e6487295119cf4eafefadf26f76ed1f8",
          customModalContent: "rockstargames-sites-gta-gen9f17bd90d5d11d511cc583e09ef7ea01e",
          content: "rockstargames-sites-gta-gen9f11fa0818c5163565a0058b6a7aa2505",
          secondary: "rockstargames-sites-gta-gen9e8fd74f0c0a6e9b8855e4bd971e7bba8",
          logo: "rockstargames-sites-gta-gen9c1524e116e11607f62a2d93b0b2e32bc"
        },
        {
          variants: Me
        } = j.Animations,
        Ie = e => {
          let {
            id: t,
            logoImage: a = null,
            logoImageHeight: s = "auto",
            name: n = null,
            title: r,
            titleSizeClass: i = null,
            content: o,
            ctaText: c,
            ctaURL: l,
            size: d = "md",
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
            x = (0, y.useTranslations)({
              payload: b?.payload,
              variables: b?.variables ?? {}
            }),
            [j, N] = (0, _.useState)(f?.size ?? d),
            w = (0, y.useGetCdnSource)(a ?? null),
            S = x?.content?.[0],
            C = S?.body ?? S?._memoq?.body;
          return (0, _.useEffect)((() => {
            N(f?.size ?? d)
          }), [f?.size, d]), (0, I.jsx)(le, {
            id: t,
            title: r,
            sectionTitle: n || r,
            size: j,
            expandedType: m,
            images: u,
            deckProps: f,
            payload: {
              content: o,
              meta: {}
            },
            variants: Me.plainCard,
            textOverlayProps: g,
            modalProps: {
              className: Ae.customModal,
              contentClassName: Ae.customModalContent
            },
            expandedCardContents: (0, I.jsx)(ve, {
              images: u,
              expandedView: !0
            }),
            theme: v,
            cardIds: h,
            isCoverCard: !0,
            children: (0, I.jsx)(xe, {
              expandedType: m,
              to: p,
              sectionTitle: n || r,
              children: (0, I.jsxs)("div", {
                className: Ae.content,
                children: [a && (0, I.jsx)("img", {
                  className: Ae.logo,
                  alt: "logo",
                  src: w,
                  style: {
                    height: `${s}`
                  }
                }), (0, I.jsx)("h2", {
                  className: i,
                  children: r
                }), C && (0, I.jsx)("p", {
                  children: C
                }), (0, I.jsx)(Te.A, {
                  target: "newtab" === m ? "_blank" : "_self",
                  to: l || void 0,
                  children: c || k.formatMessage(Ce.card.card_learn_more)
                })]
              })
            })
          })
        };
      var Ee = a(22545);
      const Le = e => {
          let {
            images: t,
            title: a,
            expandedView: s,
            variants: n,
            transition: r
          } = e;
          const i = (0, _.useMemo)((() => t && 0 !== t?.length ? t.map((e => e?.image?.sources ? (0, I.jsx)(b.A, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [t]);
          return !i?.length || i?.length < 1 ? null : 1 === i.length ? i : (0, I.jsx)(Ee.A, {
            slideChildren: i,
            title: a,
            navigation: s,
            thumbsVisible: s,
            spaceBetween: 0,
            variants: n,
            transition: r
          })
        },
        Pe = {
          pillBtn: "rockstargames-sites-gta-gen9d13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-sites-gta-gen9bcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-sites-gta-gen9ceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: Be,
          variants: $e
        } = j.Animations,
        Ve = e => {
          let {
            id: t,
            title: a,
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
            images: o = [],
            deckProps: c = {},
            tina: l = {},
            payload: d,
            position: m = 0,
            sectionTitle: g = "",
            cardIds: u
          } = e;
          const f = (0, y.useTinaPayload)(),
            p = d ?? f,
            b = l?.payload?.meta?.cdn ?? p?.meta?.prod ?? !1,
            h = ((e, t) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: t
              }
            } : e)))(o, b),
            [v, k] = (0, _.useState)(c?.size ?? n),
            {
              parent: x,
              main: j,
              thumbs: N
            } = $e?.cardWithImageGallery?.gallery ?? {};
          return (0, _.useEffect)((() => {
            k(c?.size ?? n)
          }), [c?.size, n]), (0, I.jsx)(le, {
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
            expandedType: r,
            images: h,
            deckProps: c,
            prod: b,
            variants: $e.cardWithImageGallery,
            textOverlayProps: i,
            modalProps: {
              className: Pe.customModal,
              contentClassName: Pe.customModalContent
            },
            expandedCardContents: (0, I.jsx)(Le, {
              images: h,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: x,
                main: j,
                thumbs: N
              },
              transition: {
                parent: Be.cardOpen,
                main: Be.cardOpen,
                thumbs: Be.cardOpen
              }
            }),
            cardIds: u,
            children: (0, I.jsx)("div", {
              className: Pe.content,
              children: (0, I.jsx)(Q, {
                title: a,
                size: v,
                textOverlayProps: i,
                children: (0, I.jsx)(Le, {
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
      const He = e => {
        let {
          title: t,
          content: a,
          size: s = "md",
          badgeText: n
        } = e;
        const r = {
          ...(0, y.useTinaComponents)(),
          HTMLElement: d.A,
          UnorderedList: p.A,
          ListItem: De.A
        };
        return (0, I.jsx)("div", {
          className: "rockstargames-sites-gta-gen9d392587df58204b0910e721ef1f3c35c",
          "data-size": s,
          children: (0, I.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a002b98d034f1897c7e1f31327ff08dc",
            children: [n && (0, I.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d9901d1bb91e1fbc1e857964083fe496",
              children: n
            }), (0, I.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9bea322f6e3afa31355668ad164496730",
              children: [t && (0, I.jsx)("h3", {
                children: t
              }), (0, I.jsx)(y.TinaParser, {
                components: r,
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
      var Oe = a(20009);
      const {
        Gen9CoreCarousel: Ge,
        framer: Re,
        useTinaModuleFetchByIds: ze,
        withSimpleErrorBoundary: Fe
      } = Oe, We = {
        Card: je,
        CardWithImageGallery: Ve,
        TextCard: He,
        ...Oe
      }, qe = Re.withFadeIn(Fe((e => {
        let {
          cards: t = [],
          size: a,
          name: s,
          title: n,
          description: r,
          disclaimer: i,
          customSlidesPerView: o = null,
          theme: c = "none",
          cardSizeBreakpoints: l = {},
          customAspectRatio: d = "3/1",
          titleBadge: m = null
        } = e;
        const g = (0, _.useRef)(null),
          u = C().map(t, "id"),
          f = ze({
            ids: u
          }),
          [p, b] = (0, _.useState)(o),
          [h] = (0, ae.useSearchParams)(),
          [v, k] = (0, _.useState)(!1);
        (0, _.useEffect)((() => {
          if ("fob" === a) {
            const e = h.get("section");
            if (e && "games" === e && !v && (k(!0), g.current)) {
              const e = 100;
              window.scrollTo(0, g.current.offsetTop - e)
            }
          }
        }), []), (0, _.useEffect)((() => {
          if (!g.current) return;
          const e = () => {
            const e = o || window.getComputedStyle(g.current).getPropertyValue("--slides-per-view");
            b(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const x = (0, _.useMemo)((() => {
          let e = 0;
          if (!f) return null;
          let t = "blank";
          return f.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id)
          })), f.reduce(((s, r) => {
            if (r) {
              const {
                id: i,
                tina: o
              } = r, l = C().clone(o);
              C().set(l, "payload.meta.id", i), s.push((0, I.jsx)(y.TinaParser, {
                components: We,
                tina: l,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: l,
                  id: i,
                  position: e,
                  sectionTitle: n,
                  theme: c,
                  cardIds: u.filter((e => e !== t))
                }
              }, i)), e += 1
            }
            return s
          }), [])
        }), [f, a]);
        return (0, I.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9caf46db6464a84ad4990aed75ef74ff1",
          "data-theme": c,
          ref: g,
          children: [(0, I.jsx)(Ge, {
            description: r,
            size: a,
            cardSizeBreakpoints: l,
            slideChildren: x,
            title: n,
            name: s,
            customSlidesPerView: p,
            customAspectRatio: d,
            titleBadge: m,
            theme: c
          }), i && (0, I.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e90de79e6e215bde4beeb973696fcc11",
            children: (0, I.jsx)("span", {
              className: "rockstargames-sites-gta-gen9ceba411e9462491a4758858884a7a601",
              children: (0, I.jsx)(Oe.SafeHtml, {
                html: i
              })
            })
          })]
        })
      })));
      var Ue = a(17891),
        Xe = a(14963),
        Ye = a.n(Xe);
      const Qe = (e, t) => {
          let a = getComputedStyle(e).getPropertyValue(t);
          return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
        },
        Ke = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Ze = e => e.scrollHeight > e.clientHeight;

      function Je(e, t) {
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
          } else C().isObject(e) && !C().isArray(e) ? Je(e, t) : C().isArray(e) && (a[s] = e.map((e => C().isObject(e) ? Je(e, t) : e)))
        })), a
      }
      const et = (0, A.withTranslations)((e => {
          let {
            active: t,
            styles: a,
            title: s,
            itemNumber: n,
            inModalMode: r,
            openModalMode: i,
            element: o,
            upNext: c,
            mobileMode: l,
            refDeck: d,
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
              track: j
            } = (0, ne.useGtmTrack)(),
            N = (0, _.createRef)(),
            w = (0, _.createRef)(),
            S = (0, _.createRef)(),
            C = (0, _.createRef)(),
            T = (0, _.createRef)(),
            [A, E] = (0, _.useState)(!1),
            [L, P] = (0, _.useState)(0),
            [B, $] = (0, _.useState)(0),
            [V, D] = (0, _.useState)(0),
            [H, O] = (0, _.useState)(0),
            [G, R] = (0, _.useState)(0),
            [z, F] = (0, _.useState)(!1),
            [W, q] = (0, _.useState)(0),
            [U, X] = (0, _.useState)(0),
            [Y, Q] = (0, _.useState)(0),
            [K, Z] = (0, _.useState)("700"),
            [J, ee] = (0, _.useState)(-1),
            [ae, se] = (0, _.useState)(0),
            [re, ie] = (0, _.useState)(0),
            [oe, ce] = (0, _.useState)(0),
            [le, me] = (0, _.useState)(!1),
            [ge, ue] = (0, _.useState)(""),
            [fe, pe] = (0, _.useState)(null),
            [be, he] = (0, _.useState)(!1),
            [ve, ke] = (0, _.useState)(null),
            [xe, _e] = (0, _.useState)(!1),
            [ye, je] = (0, _.useState)(!1),
            Ne = (0, y.useTinaPayload)(),
            we = g?.payload?.meta?.cdn ?? !1 ?? Ne?.meta?.prod ?? !1,
            Se = (0, y.useTranslations)({
              payload: g?.payload,
              variables: g?.variables
            }),
            Te = Se?.meta ?? {},
            Ae = Je(Se?.content?.[0], we),
            Me = (0, _.useMemo)((() => Ae?.images?.[0]?.image?.badge), [Ae]),
            Ie = (0, _.useMemo)((() => Ae.title ?? s ?? Te?.title), [s, Te?.title, Ae.title]),
            Ee = (0, de.useImageParser)({
              alt: Ae?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Ae?.images?.[0]?.image?.alt ?? "",
              sources: Ae?.images?.[0]?.image?.sources ?? [],
              prod: we
            }),
            Le = Ee?.src?.mobile ?? Ee?.src?.desktop ?? !1,
            Pe = (0, _.useMemo)((() => Te?.foreignId), [Te]),
            Be = (0, _.useMemo)((() => Te?.foreignTitle), [Te]),
            [$e, Ve] = (0, _.useState)(0),
            [De, He] = (0, _.useState)(0),
            [Oe, Ge] = (0, _.useState)(0),
            [Re, ze] = (0, _.useState)(0),
            [Fe, We] = (0, _.useState)(!1),
            [qe, Ue] = (0, _.useState)(0),
            [Xe, et] = (0, _.useState)(20),
            [tt, at] = (0, _.useState)(null),
            [st, nt] = (0, _.useState)(!1),
            rt = (0, _.useCallback)((e => {
              if (!0 === z || !r && !l || be) return;
              const t = Ke(e);
              Ve(t.x), He(t.y)
            }), [z, r]),
            it = e => {
              rt(e)
            },
            ot = e => {
              if (!0 === z || 0 === $e || !r && !l || be) return;
              const t = Ke(e),
                a = t.x > $e ? 1 : -1,
                s = Math.abs($e - t.x);
              r && !l && s > Xe ? (nt(!0), ue(a > 0 ? "prev" : "next"), lt()) : (We(!0), Ue(s * a), k(s * a))
            },
            ct = e => {
              if (!0 === z || !r && !l || be) return;
              const t = Ke(e),
                a = t.x > $e ? 1 : -1,
                s = Math.abs($e - t.x),
                n = Math.abs(De - t.y);
              r && !l ? (lt(), ue("")) : s > Xe && n < 25 ? (nt(!0), ue(a > 0 ? "prev" : "next"), lt()) : lt()
            },
            lt = () => {
              F(!0), Ve(0), He(0), We(!1), Ue(0), k(0)
            };
          return (0, _.useEffect)((() => {
            let e = W;
            A ? e = 0 : r && !l && (e = W), P(e)
          }), [A, l, r, B, H, U, Y, V, W]), (0, _.useEffect)((() => {
            E(!(!r || !l))
          }), [r, l]), (0, _.useEffect)((() => {
            r && t && j({
              event: "virtualPageview",
              display_type: l ? "mobile" : "desktop",
              view_name: `${Pe}/${Ie}`,
              source_content_id: Pe,
              source_content_name: Be
            })
          }), [r, t]), (0, _.useEffect)((() => {
            const e = Ye()(((e, t) => {
              let a = 18;
              if (e?.documentElement && (a = Qe(e?.documentElement, "--root-font-size")), re !== t.innerHeight && ie(t.innerHeight), d?.current) {
                Q(Qe(d.current, "--eventDeck-marginSm") * a);
                const e = a * Qe(d?.current, "--eventDeck-modalGutters"),
                  s = t?.innerWidth,
                  n = s - 2 * e;
                $(n), C.current && l && D(n), O(Qe(d.current, "--eventDeck-itemSize") * a), ce(Qe(d.current, "--eventDeck-phaseOneTransitionDuration"));
                const r = Qe(d?.current, "--eventDeck-itemImageTitleMargins") * a,
                  i = w?.current?.clientHeight,
                  o = i + r;
                Number.isNaN(o) || q(o), se(Qe(d?.current, "--eventDeck-headerHeight") * a)
              }
              let s = Math.min(700, t.innerWidth);
              l || (s = 900), Z(`${s}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [d, l]), (0, _.useEffect)((() => {
            if (N.current) {
              const e = N.current.clientHeight;
              Number.isNaN(e) || X(e)
            }
          }), [N]), (0, _.useEffect)((() => {
            if (r && l && C.current && (C.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !r && l && C.current) {
              const e = 228 / B;
              C.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!l && C.current && (C.current.style.transform = null)
          }), [r, l, B, V]), (0, _.useEffect)((() => {
            const e = .5 * B,
              t = re - ae - 3 * Y;
            R(B - (e < t ? e : t))
          }), [B, Y, re]), (0, _.useEffect)((() => {
            "next" === ge ? (f(null, !0), ue("")) : "prev" === ge && (u(null, !0), ue(""))
          }), [ge]), (0, _.useEffect)((() => {
            Ge(0), ze(0)
          }), [l]), (0, _.useEffect)((() => {
            l ? et(r ? 35 : 20) : r && et(50)
          }), [r, l]), (0, _.useEffect)((() => {
            let e = [],
              t = 0,
              s = 0;
            if (null !== a?.transform) {
              e = a.transform.split(",");
              const n = e[0].split("(");
              t = Number(n[1].replace("px", "")), Ge(t), s = Number(e[1].replace("px", "")), ze(s)
            }
          }), [a]), (0, _.useEffect)((() => {
            if (!z) return;
            clearTimeout(fe);
            const e = setTimeout((() => {
              F(!1), Ve(0)
            }), 200);
            pe(e)
          }), [z, 200]), (0, _.useEffect)((() => {
            if (!st) return;
            clearTimeout(tt);
            const e = setTimeout((() => {
              nt(!1)
            }), 1e3);
            at(e)
          }), [st]), (0, _.useEffect)((() => {
            r && clearTimeout(J), setTimeout((() => {
              me(!le)
            }), oe)
          }), [r]), (0, _.useEffect)((() => (document.body.addEventListener("mouseleave", lt), () => {
            document.body.removeEventListener("mouseleave", lt)
          })), []), (0, _.useEffect)((() => {
            T.current ? _e(Ze(T.current)) : _e(!1), void 0 !== o && o.current ? je(Ze(o.current)) : je(!1)
          }), [o, T, t, r, le]), Ae ? (0, I.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4090652e3c0a4e1979bb0a36b22b7cd",
            ref: o,
            "data-item-position": n,
            "data-modal-mode": r,
            "data-active-item": t,
            "data-up-next": c,
            "data-transition": Fe || 0 !== v ? "none" : p,
            "data-scrollable": ye,
            style: {
              ...a,
              transform: r && t && !l ? `translate3d(${Oe+qe}px, ${Re}px, 0)` : l && !r ? `translate3d(${Oe+v}px, ${Re}px, 0)` : a?.transform
            },
            onClick: e => {
              st || (r ? r && !l && (n < b ? u(e, !0) : n > b && f(e, !0)) : i(e))
            },
            onMouseEnter: () => {
              r || E(!0), r || l || (clearTimeout(J), ee(setTimeout((() => {
                j({
                  event: "card_title_hover",
                  card_name: Ie,
                  card_id: n,
                  position: n,
                  view_name: `${Pe}/${Be}`,
                  source_content_id: Pe,
                  source_content_name: Be
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              r || E(!1), r || l || clearTimeout(J)
            },
            onTouchStart: it,
            onTouchMove: ot,
            onTouchEnd: ct,
            onMouseDown: it,
            onMouseMove: ot,
            onMouseUp: ct,
            onKeyUp: e => {
              "Enter" === e.key && (r || i(e))
            },
            tabIndex: r ? -1 : 0,
            "aria-label": r ? x.formatMessage(Ce.card.events_deck_modal_group_label) : "",
            role: r ? "dialog" : "presentation",
            children: [(0, I.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b9c878efb14d25c323e95f01b7a53460",
              "data-full-header": A,
              ref: S,
              style: {
                height: r && l ? `${B}px` : null,
                width: r && l ? `${B}px` : null
              },
              children: [Le && (0, I.jsx)("img", {
                ref: C,
                src: `${Ee?.src?.mobile??Ee?.src?.desktop}?im=Resize,width=${K}`,
                alt: Ee?.alt,
                style: {
                  width: 0 !== V && l ? `${V}px` : null,
                  height: 0 !== V && l ? `${V}px` : null
                }
              }), (0, I.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9ba8c09e500ea0845dc20d380e8ec11ca",
                style: {
                  transform: !l || l && r ? `translate3d(0, ${L}px, 0)` : null
                },
                children: [Me && (0, I.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cbbb0470197acdc4f0ec1f567f5c8a42",
                  ref: N,
                  children: (0, I.jsx)(M.A, {
                    text: Me
                  })
                }), (0, I.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9aca2b0fbf7c1dbcbf99e53812b9abc8e",
                  ref: w,
                  "aria-hidden": r,
                  children: Ie
                })]
              })]
            }), (0, I.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e7defd080518d58f00f72ccc94df53aa",
              ref: T,
              "aria-hidden": !r,
              onScroll: () => {
                he(!0), lt(), clearTimeout(ve);
                const e = setTimeout((() => {
                  he(!1)
                }), 100);
                ke(e)
              },
              style: {
                top: r && l ? `${B}px` : null,
                width: r && !l && t ? `${G}px` : null,
                touchAction: xe || l ? "unset" : "none"
              },
              children: [Ie && (0, I.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a8fbffe55d92fc2f04e5e6b8f9267206",
                children: Ie
              }), (0, I.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e20bd8af5d67954447804e0e21161d3b",
                children: (0, I.jsx)(y.TinaParser, {
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
        tt = "rockstargames-sites-gta-gen9bb65eb1ac15ed189c1a9f6700276efc0",
        at = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: s,
            nextBtnDisabled: n,
            selectedItemNumber: r,
            itemsData: i,
            closeModalMode: o,
            inModalMode: c,
            controlsHidden: l
          } = e;
          const d = (0, te.useIntl)();
          return (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dc99156537faf101b73515aaa7d6da2b",
              "aria-hidden": l || "false",
              children: [(0, I.jsx)("button", {
                className: tt,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": c ? d.formatMessage(Ce.card.events_deck_modal_previous_aria_label) : d.formatMessage(Ce.card.events_deck_previous_aria_label)
              }), (0, I.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a94a647e9943db9c97ae87c8c6a162cd",
                "aria-hidden": !c,
                "aria-label": d.formatMessage(Ce.card.events_deck_paging_label, {
                  currentPage: r + 1,
                  totalPages: i.length
                }),
                children: [r + 1, (0, I.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9fd027fcea9fd167b666599be78ab4f53"
                }), i.length]
              }), (0, I.jsx)("button", {
                className: tt,
                type: "button",
                onClick: s,
                disabled: n,
                "aria-label": c ? d.formatMessage(Ce.card.events_deck_modal_next_aria_label) : d.formatMessage(Ce.card.events_deck_next_aria_label)
              })]
            }), (0, I.jsx)("button", {
              className: "rockstargames-sites-gta-gen9d43b6cdcbcc07082edacd9a7cb1598c5",
              type: "button",
              onClick: o,
              "aria-label": d.formatMessage(Ce.card.events_deck_modal_close_label),
              "aria-hidden": !c,
              tabIndex: c ? 0 : -1
            })]
          })
        };
      var st = a(31879),
        nt = a.n(st),
        rt = a(205),
        it = a.n(rt),
        ot = a(32503),
        ct = a.n(ot),
        lt = a(99074),
        dt = a(37109),
        mt = a(5765),
        gt = a(47668),
        ut = a(52842),
        ft = a(57797),
        pt = a(2723),
        bt = a(1333),
        ht = a(50562),
        vt = a(37281),
        kt = a(21027),
        xt = a(84690);
      const _t = {
          CalloutSection: s.A,
          Card: je,
          CardWithImageGallery: Ve,
          ConditionalBlock: r.A,
          CoverCard: Ie,
          Cta: i.A,
          DiscoveryCallout: dt.A,
          EventsDeck: e => {
            const {
              setBodyIsLocked: t
            } = (0, A.useBodyScrollable)("EventsDeck"), {
              title: a
            } = e, {
              track: s
            } = (0, ne.useGtmTrack)(), [r, i] = (0, _.useState)(!1), o = (() => {
              const {
                data: e
              } = (0, we.useQuery)(Se.TinaModulesList, {
                variables: {
                  type: "gtao-event-card",
                  orderBy: "priority",
                  orderDirection: "desc"
                }
              }), t = e?.tinaModulesList?.results, a = C().map(t, "id");
              return (0, x.X)({
                ids: a
              })
            })(), [c, l] = (0, _.useState)([]), [m, g] = (0, _.useState)(null), [u, f] = (0, _.useState)(0), [h, v] = (0, _.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [k, j] = (0, _.useState)(!1), N = (0, _.createRef)(), [S, T] = (0, _.useState)(null), M = (0, _.createRef)(), E = (0, _.createRef)(), [L, P] = (0, _.useState)([]), [B, $] = (0, _.useState)(!0), [V, D] = (0, _.useState)(!1), [H, O] = (0, _.useState)(!1), [G, R] = (0, _.useState)([]), [z, F] = (0, _.useState)(404), [W, q] = (0, _.useState)(808), [U, X] = (0, _.useState)(672), [Y, Q] = (0, _.useState)(336), [K, Z] = (0, _.useState)(0), [J, ee] = (0, _.useState)(0), [te, ae] = (0, _.useState)(0), [se, re] = (0, _.useState)(0), [ie, oe] = (0, _.useState)(0), [ce, le] = (0, _.useState)(!1), de = !!(0, A.usePrevious)(ce), [me, ge] = (0, _.useState)(window.innerWidth), [ue, fe] = (0, _.useState)(0), [pe, be] = (0, _.useState)(0), [he, ve] = (0, _.useState)(0), [ke, xe] = (0, _.useState)(0), [_e, ye] = (0, _.useState)(0), [je, Ne] = (0, _.useState)(0), [Ce, Te] = (0, _.useState)(0), [Ae, Me] = (0, _.useState)(0), [Ie, Ee] = (0, _.useState)(-1e3), [Le, Pe] = (0, _.useState)(0), [Be, $e] = (0, _.useState)(50), [De, He] = (0, _.useState)(0), [Oe, Ge] = (0, _.useState)(!1), [Re, ze] = (0, _.useState)(768), [Fe, We] = (0, _.useState)(!1), [qe, Ue] = (0, _.useState)(!1), [Xe, Ze] = (0, _.useState)(!1), [Je, tt] = (0, _.useState)(!1), [st, nt] = (0, _.useState)(!1), [rt, it] = (0, _.useState)(1e3), [ot, ct] = (0, _.useState)(1.2), [lt, dt] = (0, _.useState)(0), [mt, gt] = (0, _.useState)(!1), [ut, ft] = (0, _.useState)(!1), [pt, bt] = (0, _.useState)(!0), [ht, vt] = (0, _.useState)(!1), [kt, xt] = (0, _.useState)(!1), [_t, yt] = (0, _.useState)(null), [jt, Nt] = (0, _.useState)(100), [wt, St] = (0, _.useState)(!1), [Ct, Tt] = (0, _.useState)({}), [At, Mt] = (0, _.useState)(""), [It, Et] = (0, _.useState)(0), [Lt, Pt] = (0, _.useState)(!1), [Bt, $t] = (0, _.useState)(!1), [Vt, Dt] = (0, _.useState)(0), [Ht, Ot] = (0, _.useState)(0), [Gt, Rt] = (0, _.useState)(100), [zt, Ft] = (0, _.useState)(!1), [Wt, qt] = (0, _.useState)(!1), Ut = () => me * ue + Be, Xt = () => !1 === Oe ? ot : 1, Yt = e => e === Ce - 1 || e === Ce + 1, Qt = () => {
              let e = -1 * je;
              return e = -1 * je - ke, e
            }, Kt = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === Oe) return 0;
              const a = e.itemNumber % 2 == 0,
                s = z * ot;
              if (!0 === a && 0 !== e.itemNumber) {
                const a = Qe(e?.element?.current, "top");
                let n = a - te;
                return !1 === t && (n -= a), -1 * (.5 * s + n) + lt
              }
              return te - .5 * s + lt
            }, Zt = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                s = Qt();
              !1 === a && (s = 0);
              const n = me * ue,
                r = !1 === Oe ? z * Xt() : n;
              return e.inModalMode && Oe ? -1 === t ? Ut() * (Ce - e.itemNumber) * -1 - e.styles.left : Ut() * (e.itemNumber - Ce) - e.styles.left : -1 === t ? -1 * e.styles.left - r - Be + s : n - e.styles.left + Be + s
            }, Jt = (e, t, a) => {
              -1 === t && (D(!1), $(!0)), D(!1 === a && e >= t || !0 === a && e + 1 === t), $(e <= 0)
            }, ea = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (kt || ht) return;
              if (xt(!0), ce) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (Ce + 1 >= c.length) return;
                const t = L[Ce + 1]?.tina?.payload?.meta?.title ?? `card-${Ce+1}`;
                s({
                  event: e ? "modal_swipe" : "modal_next",
                  card_name: t,
                  card_id: Ce + 1,
                  position: Ce + 1,
                  view_name: `${L[Ce+1].source_content_id}/${t}`,
                  source_content_id: L[Ce + 1].source_content_id,
                  source_content_name: L[Ce + 1].source_content_name
                }), Jt(Ce + 1, c.length, !0), Oe ? Oe && P(L.map((e => {
                  e.itemNumber === Ce - 1 ? e.upNext = !1 : e.itemNumber === Ce + 2 ? e.upNext = !0 : e.itemNumber === Ce + 1 ? e.active = !0 : e.itemNumber === Ce && (e.upNext = !0, e.active = !1);
                  const t = e.styles.transform.replace("translate3d(", "").split(",");
                  let a = Number(t[0].replace("px", ""));
                  a -= Ut();
                  const s = `translate3d(${a}px,${t[1]},${t[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))) : P(L.map((e => (e.itemNumber === Ce - 1 ? e.upNext = !1 : e.itemNumber === Ce + 2 ? e.upNext = !0 : e.itemNumber === Ce + 1 ? (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Qt()}px, ${lt}px, 0) scale(1)`
                }) : e.itemNumber === Ce && (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${Zt(e,-1)}px, ${Kt(e)}px, 0) scale(${Xt()})`
                }), e)))), Te(Ce + 1)
              }(t);
              const n = _e + 1;
              if (!(n > ie))
                if (s({
                    event: t ? "carousel_swipe" : "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  }), Jt(n, ie, !1), Oe) {
                  let e = n * Y * -1;
                  e < Ie && (e = Ie, D(!0), $(!1), ye(ie)), ye(n), P(L.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = je - J;
                  ye(n), e < Ie && (e = Ie, D(!0), $(!1), ye(ie)), Ne(e)
                }
            }, ta = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (kt || ht) return;
              if (xt(!0), !0 === ce) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (kt) return;
                if (Ce - 1 < 0) return;
                const t = L[Ce - 1]?.tina?.payload?.meta?.title ?? "card-" + (Ce - 1);
                s({
                  event: e ? "modal_swipe" : "modal_previous",
                  element_placement: a,
                  card_name: t,
                  card_id: Ce - 1,
                  position: Ce - 1,
                  view_name: `${L[Ce-1].source_content_id}/${t}`,
                  source_content_id: L[Ce - 1].source_content_id,
                  source_content_name: L[Ce - 1].source_content_name
                }), Jt(Ce - 1, c.length, !0), Oe || P(L.map((e => (e.itemNumber === Ce + 1 ? e.upNext = !1 : e.itemNumber === Ce - 2 ? e.upNext = !0 : e.itemNumber === Ce ? (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${Zt(e,1)}px, ${Kt(e)}px, 0) scale(${Xt()})`
                }) : e.itemNumber === Ce - 1 && (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Qt()}px, ${lt}px, 0) scale(1)`
                }), e)))), Oe && P(L.map((e => {
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
              const n = _e - 1;
              if (!(n < 0))
                if (s({
                    event: t ? "carousel_swipe" : "carousel_previous",
                    element_placement: a
                  }), Jt(n, ie, !1), Oe) {
                  let e = n * Y * -1;
                  e > 0 && (e = 0, $(!0), D(!1), ye(0)), ye(n), P(L.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = je + J;
                  ye(n), (e > 0 || 0 === e || -1 * e < W) && (e = 0, $(!0), D(!1), ye(0)), Ne(e)
                }
            }, aa = e => {
              if (Lt || ce || Oe) return;
              const t = Ke(e);
              Et(t.x)
            }, sa = e => {
              if (Lt || 0 === It || ce || Oe) return;
              const t = Ke(e),
                a = t.x > It ? 1 : -1;
              let s = Math.abs(It - t.x) * a;
              (0 === _e && 1 === a || _e === ie && -1 === a) && (s *= .35), $t(!0), Dt(s)
            }, na = e => {
              if (Lt || ce || Oe) return;
              const t = Ke(e),
                a = t.x > It ? 1 : -1,
                s = Math.abs(It - t.x);
              Mt(s > Gt ? a > 0 ? "prev" : "next" : ""), ra()
            }, ra = () => {
              Pt(!0), Et(0), Dt(0), $t(!1)
            }, ia = e => {
              Bt && (na(e), $t(!1))
            }, oa = function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return e.map(((e, s) => {
                let n = s * Y,
                  r = s;
                !1 === Oe && (r = Math.ceil(.5 * s) + 1, s > 0 && (n = 2 === r ? U : U + Y * (r - 2)));
                const i = G[s];
                return i?.current && (i.current.scrollTop = 0), {
                  ...e,
                  mobileMode: Oe,
                  itemNumber: s,
                  columnNumber: r,
                  inModalMode: !1,
                  upNext: !0,
                  active: !1,
                  openModalMode: la,
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
            }, ca = () => {
              const e = L[Ce]?.tina?.payload?.meta?.title ?? `card-${Ce}`;
              if (s({
                  event: "modal_close",
                  element_placement: a,
                  card_name: e,
                  card_id: Ce,
                  position: Ce,
                  view_name: `${L[Ce].source_content_id}/${e}`,
                  source_content_id: L[Ce].source_content_id,
                  source_content_name: L[Ce].source_content_name
                }), Oe) {
                let e = Ce * Y * -1;
                e < Ie && (e = Ie, D(!0), $(!1), ye(ie)), ye(Ce), Jt(Ce, ie, !1), P(oa(c, "cardClose", `translate3d(${e}px, 0, 0)`))
              } else {
                P(oa(c, "cardClose"));
                const e = Math.ceil((L[Ce].columnNumber + 1) / K) - 1;
                ye(e);
                let t = e * J * -1;
                De < pe ? (t = 0, $(!0), D(!0), ye(0)) : t < Ie ? (t = Ie, $(!1), D(!0), ye(ie)) : Jt(e, ie, !1), Ne(t), Te(0)
              }
              M.current.style.transform = "translate(0px, 0px)", M.current.style.transition = "all var(--eventDeck-transitionCardClose)", gt(!1), tt(!1), le(!1), Ue(!1), We(!1), nt(!1), setTimeout((() => {
                Ze(!0)
              }), rt)
            };
            (0, _.useEffect)((() => {
              !1 !== Xe && (Ze(!1), gt(!1), S.style.zIndex = null, P(L.map((e => (e.transitionStyle = "", e)))))
            }), [Xe]);
            const la = e => {
              setTimeout((() => {
                Tt(e), St(!0)
              }), 1)
            };
            (0, _.useEffect)((() => {
              if (!wt) return;
              if (St(!1), kt) return;
              Te(Number(Ct.target.dataset.itemPosition)), Ue(!0), vt(!0), pt && bt(!1);
              const e = L[Ct.target.dataset.itemPosition].source_content_id,
                t = L[Ct.target.dataset.itemPosition].source_content_name,
                n = L[Ct.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
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
            }), [wt]), (0, _.useEffect)((() => {
              if (!qe || ce) return;
              Ue(!1);
              const e = (() => {
                const e = S?.getBoundingClientRect().top;
                return dt(-1 * (e - u)), -1 * (e - 140)
              })();
              Oe && P(L.map((e => {
                const t = e.itemNumber > Ce + 3 || e.itemNumber < Ce - 3;
                return e.styles = {
                  ...e.styles,
                  display: t ? "none" : null,
                  transition: t ? "none" : null
                }, e
              }))), S.style.zIndex = "var(--eventDeck-zIndexOverlay)", gt(!0), M.current && (M.current.style.transition = "all var(--eventDeck-transitionCardOpen)", M.current.style.transform = `translate(${-1*ke}px, ${e}px)`), tt(!0), setTimeout((() => {
                We(!0)
              }), 1)
            }), [qe]);
            const da = () => {
              P(L.map(((e, t) => {
                e.active = t === Ce, e.inModalMode = !0, e.transitionStyle = "cardOpen", Oe && (e.upNext = Yt(e.itemNumber));
                const a = !Oe;
                let s = 0;
                if (Oe) {
                  const e = Ae + 5 * u;
                  s = window.innerHeight - e
                }
                return e.itemNumber < Ce ? e.styles = {
                  ...e.styles,
                  height: Oe ? `${s}px` : null,
                  transform: `translate3d(${Zt(e,-1,a)}px, ${lt}px, 0) scale(${Xt()})`
                } : e.itemNumber > Ce ? e.styles = {
                  ...e.styles,
                  height: Oe ? `${s}px` : null,
                  transform: `translate3d(${Zt(e,1,a)}px, ${lt}px, 0) scale(1)`
                } : e.itemNumber === Ce && (e.styles = Oe ? {
                  ...e.styles,
                  height: `${s}px`,
                  transform: `translate3d(${-1*e.styles.left}px, ${lt}px, 0) scale(1)`
                } : {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Qt()}px, ${lt}px, 0) scale(1)`
                }), e
              })))
            };
            (0, _.useEffect)((() => {
              !1 !== Fe && !0 !== ce && (le(!0), We(!1), Jt(Ce, L.length, !0), M.current && (M.current.style.transition = "all var(--eventDeck-transitionCardOpen)", M.current.style.transform = `translate(${-1*ke}px, ${lt}px)`), da(), Oe ? (Ne(0), vt(!1), ft(!0)) : nt(!0))
            }), [Fe]), (0, _.useEffect)((() => {
              ut && (ft(!1), P(L.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
            }), [ut]);
            const ma = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              P(L.map((t => {
                if (t.upNext = Yt(t.itemNumber), t.itemNumber !== Ce) {
                  let e = Zt(t, 1);
                  t.itemNumber < Ce && (e = Zt(t, -1)), t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, ${Kt(t)}px, 0) scale(${Xt()})`
                  }
                } else t.itemNumber === Ce && !Oe && e && (t.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Qt()}px, ${lt}px, 0) scale(1)`
                });
                return t
              })))
            };
            (0, _.useEffect)((() => {
              !1 !== st && !0 !== Oe && (nt(!1), setTimeout((() => {
                ma(), vt(!1)
              }), 1))
            }), [st]), (0, _.useEffect)((() => {
              P(oa(c, ""))
            }), [U, Y, c]), (0, _.useEffect)((() => {
              const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
              Ft(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
            }), []), (0, _.useEffect)((() => {
              const e = de !== ce;
              ce ? (e && t(!0), zt && qt(!0)) : Bt || ce || (e && t(!1), zt && Wt && qt(!1))
            }), [ce, Bt]), (0, _.useEffect)((() => {
              if (!kt) return;
              clearTimeout(_t);
              const e = setTimeout((() => {
                xt(!1)
              }), jt);
              yt(e)
            }), [kt]), (0, _.useEffect)((() => {
              k && setTimeout((() => {
                j(!1)
              }), 3e3)
            }), [k]), (0, _.useEffect)((() => {
              j(!0), Ne(0), ye(0);
              let e = Math.ceil(Math.ceil(De / Y) / K);
              Oe && (e = L.length - 1), e < 0 && (e = 1), Jt(0, e, !1), ce && ca()
            }), [Oe]), (0, _.useEffect)((() => {
              M.current && !ce && (M.current.style.transform = "")
            }), [M, Oe, ce]), (0, _.useEffect)((() => {
              const e = (o ?? []).map((e => {
                let t = null;
                return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (t = e?.tina?.variables?.keys?.meta?.title), {
                  ...e,
                  title: t,
                  source_content_id: e?.tina?.payload?.meta?.foreignId,
                  source_content_name: e?.tina?.payload?.meta?.foreignTitle,
                  view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
                }
              }));
              l(e)
            }), [o]), (0, _.useEffect)((() => {
              R(c.map((() => (0, _.createRef)())))
            }), [c]), (0, _.useEffect)((() => {
              const e = e => {
                const {
                  key: t
                } = e;
                "ArrowLeft" === t ? ta(null, !1) : "ArrowRight" === t && ea(null, !1)
              };
              return document.addEventListener("keydown", e), () => {
                document.removeEventListener("keydown", e)
              }
            }), [kt, ht, ce]), (0, _.useEffect)((() => {
              if (M.current) {
                let e = 0;
                e = M?.current?.clientHeight, e += Qe(M?.current, "margin-top"), e += Qe(M?.current, "margin-bottom"), Me(e)
              }
            }), [M, E]), (0, _.useEffect)((() => {
              ce && (() => {
                const e = S?.getBoundingClientRect().top,
                  t = -1 * (e - u);
                if (P(L.map((e => {
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
            }), [Oe, ce, lt]), (0, _.useEffect)((() => {
              ce || (De < ue * me && 0 === _e ? (Ne(0), D(!0), $(!0)) : je < Ie ? (D(!0), $(!1), ye(ie), Ne(Ie)) : je < 0 && (D(!1), ye(ie - 1)), De > ue * me && V && D(!1))
            }), [Ie]), (0, _.useEffect)((() => {
              if (N.current) {
                T(N.current);
                const e = Qe(document.documentElement, "--root-font-size"),
                  t = Qe(N.current, "--eventDeck-modalGutters") * e,
                  a = Qe(N.current, "--eventDeck-collapsedMaxWidth");
                ve(a);
                let s = me - 2 * t;
                s > a && (s = a), be(s), fe(s / me);
                const n = 2 * t + s;
                let r = 0;
                n < me && (r = .5 * (me - n)), xe(r);
                let i = Qe(N.current, "--eventDeck-modalBottomGutter");
                i *= e;
                const o = window.innerHeight - (Ae + i);
                ae(.5 * s < o ? s / 4 : .5 * o);
                const l = Qe(N.current, "--eventDeck-mobileBreakpoint");
                ze(l);
                let d = Qe(N.current, "--eventDeck-itemSize");
                d *= e, F(d);
                let u = Qe(N.current, "--eventDeck-modalGutterGap");
                u *= e, $e(u);
                let p = Qe(N.current, "--eventDeck-insideMargin");
                p *= e;
                const b = !1 === Oe ? 2 * d + p : d + p;
                q(b), X(b + p);
                const h = d + p;
                Q(h);
                let v = Math.ceil(.5 * (c.length - 1)) * h + b;
                Oe && (v = c.length * h), He(v), 0 !== De && Ee(-1 * De + s);
                let k = Math.ceil(Math.ceil(v / h) / K);
                (Oe || ce) && (k = L.length - 1), oe(k);
                const x = Qe(N.current, "--eventDeck-itemScaleUpAmount");
                ct(x), it(Qe(N.current, "--eventDeck-cardCloseTransitionDuration")), f(Qe(N.current, "--eventDeck-itemImageTitleMargins") * e), null !== m && e !== m && (g(e), ce && ma()), null === m && g(e)
              }
            }), [N, c]), (0, _.useEffect)((() => {
              if (ce && !Oe) {
                ma();
                const e = S?.getBoundingClientRect().top,
                  t = -1 * (e - u);
                t !== lt && dt(t)
              }
            }), [h]), (0, _.useEffect)((() => {
              O(!(!B || !V || ce))
            }), [B, V]), (0, _.useEffect)((() => {
              const e = Ye()((e => {
                ge(e), Ge(e < Re);
                const t = (1 - ue) / 2;
                Pe(e * t);
                const a = Math.floor(pe / Y);
                Z(a);
                let s = a * Y;
                s > he && (s = he), ee(s), re(e - e * t);
                const n = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
                if (n !== h && v(n), ce && n === h && !k) {
                  const e = S?.getBoundingClientRect().top,
                    t = -1 * (e - u);
                  t !== lt && dt(t)
                }
              }), 300);
              return window.addEventListener("resize", (() => {
                e(window.innerWidth)
              })), window.addEventListener("scroll", (() => {
                ce && Oe && e(window.innerWidth)
              })), e(window.innerWidth), () => {
                window.removeEventListener("resize", (() => {
                  e(window.innerWidth)
                }))
              }
            }), [Y, ue, ce, Oe]), (0, _.useEffect)((() => {
              !1 !== ce && !0 !== k && (Oe ? da() : ma(!0))
            }), [se, J, Be, z, me, Le, te, lt]), (0, _.useEffect)((() => {
              const e = () => {
                if (N.current && pt) {
                  const e = N.current.getBoundingClientRect(),
                    t = .2 * window.innerHeight;
                  window.innerHeight - e.top >= t && bt(!1)
                }
              };
              return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
            }), [N]);
            const ga = (0, _.useCallback)((() => {
              if (null !== N.current && !r) {
                const {
                  top: t
                } = N?.current?.getBoundingClientRect() || 0;
                t <= .6 * window.innerHeight && (s({
                  event: "page_section_impression",
                  element_placement: e?._memoq?.title?.toLowerCase()
                }), i(!0))
              }
            }), [N]);
            (0, _.useEffect)((() => (window.addEventListener("scroll", ga), () => {
              window.removeEventListener("scroll", ga)
            })), [ga, N]), (0, _.useEffect)((() => {
              "next" === At ? (ea(null, !0), Mt("")) : "prev" === At && (ta(null, !0), Mt(""))
            }), [At]), (0, _.useEffect)((() => {
              N.current && N.current.addEventListener("mouseleave", (() => {
                Bt && ra()
              }))
            }), [N, Bt]), (0, _.useEffect)((() => (document.body.addEventListener("mouseleave", ia), () => {
              document.body.removeEventListener("mouseleave", ia)
            })), [Bt]), (0, _.useEffect)((() => {
              Lt && setTimeout((() => {
                Pt(!1), Et(0)
              }), jt)
            }), [Lt]), (0, _.useEffect)((() => {
              Rt(Oe ? 20 : 100)
            }), [Oe]), (0, _.useEffect)((() => {
              Nt(ce ? 500 : 100)
            }), [ce]);
            const ua = (0, y.useTinaComponents)(),
              fa = (0, _.useMemo)((() => ({
                ...ua,
                CardWithImageGallery: Ve,
                HTMLElement: d.A,
                ImageWithBadge: b.A,
                Carousel: n.A,
                GroupOfItems: w(),
                UnorderedList: p.A
              })), [ua]),
              pa = (0, _.useMemo)((() => L.map((e => (0, _.createElement)(et, {
                ...e,
                refDeck: N,
                key: e?.id ?? e?.sync_hash,
                components: fa,
                prevPage: ta,
                nextPage: ea,
                loadCssRawValue: Qe,
                selectedItemNumber: Ce,
                carouselTitle: a,
                sharedDraggingDelta: Ht,
                setSharedDraggingDelta: Ot
              })))), [L, N, fa, ta, ea, Ce]);
            return !pa?.length || pa.length <= 0 ? null : (0, I.jsxs)(I.Fragment, {
              children: [(0, I.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d06937f0f31eadd8f2c6a7d4000c4028",
                "data-modal-mode": Je,
                "aria-hidden": "true"
              }), (0, I.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9bf13eb49657ff34f800ad89de65ad3b9",
                "data-modal-mode": ce,
                "data-faded": pt,
                ref: N,
                onTouchStart: aa,
                onTouchMove: sa,
                onTouchEnd: na,
                onMouseDown: aa,
                onMouseMove: sa,
                onMouseUp: na,
                tabIndex: -1,
                role: "presentation",
                children: [(0, I.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9dffe1905dcf86ef006304394794fcca7",
                  "aria-hidden": "true"
                }), (0, I.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9bc0660e650ef4aabf28e90cce99a05be",
                  "data-modal-mode": ce,
                  ref: M,
                  "data-animating": mt,
                  children: [(0, I.jsx)("h2", {
                    className: "rockstargames-sites-gta-gen9fdd9accd06b828c3c1007add9d32723d",
                    children: a
                  }), (0, I.jsx)(at, {
                    prevPage: ta,
                    prevBtnDisabled: B,
                    nextPage: ea,
                    nextBtnDisabled: V,
                    selectedItemNumber: Ce,
                    itemsData: c,
                    closeModalMode: ca,
                    inModalMode: ce,
                    controlsHidden: H
                  })]
                }), (0, I.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c54f31f5237995d05edfb79cc4e08a33",
                  "data-modal-mode": ce,
                  "data-is-dragging": Bt,
                  style: {
                    transform: `translate3d(${je+Vt}px, 0, 0)`,
                    width: `${De}px`
                  },
                  ref: E,
                  children: pa
                })]
              })]
            })
          },
          PageTemplate: it(),
          ExpandingPlatformButton: o.A,
          TextCard: He,
          Deck: qe,
          Grid: c.A,
          Hero: l.A,
          HighlightsItem: Ue.HighlightsItem,
          HTMLElement: d.A,
          OrderedList: m.A,
          ParallaxInnerLayer: g.A,
          ParallaxOuterLayer: u.A,
          ParallaxWrapper: f.A,
          UnorderedList: p.A,
          ImageWithBadge: b.A,
          Carousel: n.A,
          GroupOfItems: w(),
          Rating: v.A,
          gen9: xt,
          TinaModuleFetchNRender: x.A,
          PromoModule: h.A,
          RockstarVideoPlayer: nt(),
          Engagement: ct()
        },
        yt = {
          CalloutSection: s.A,
          Card: je,
          CardWithImageGallery: Ve,
          ConditionalBlock: r.A,
          CoverCard: Ie,
          Carousel: n.A,
          ExpandingPlatformButton: o.A,
          Hero: l.A,
          Grid: c.A,
          TextCard: He,
          Deck: qe,
          GroupOfItems: w(),
          ParallaxInnerLayer: g.A,
          ParallaxOuterLayer: u.A,
          ParallaxWrapper: f.A,
          PromoModule: h.A,
          Engagement: ct(),
          gen9: {
            BuyNow: lt.A,
            Disclaimer: mt.A,
            FAQ: gt.Ay,
            Guide: ut.A,
            GuideGroup: ft.A,
            GuideIntro: pt.A,
            GuideSection: bt.A,
            Hero: l.A,
            ImageTextGroupGroup: ht.A,
            LinkoutSection: vt.A,
            TinaWrapper: kt.A,
            UserVote: () => null
          },
          HTMLElement: d.A,
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
        r = a.n(n),
        i = a(75638),
        o = a(14781),
        c = a(96717),
        l = a(42756),
        d = a(62811),
        m = a(26177),
        g = a(40207),
        u = a(76394);
      const f = (0, c.defineMessages)({
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
      r().registerPlugin(o.u), r().registerPlugin(i.useGSAP);
      const h = (0, l.withLocale)((e => {
        let {
          backgroundColor: t,
          cardsOrientation: n = "left"
        } = e;
        const [r, i] = (0, s.useState)(""), [o, h] = (0, s.useState)(void 0), {
          currentCharId: v
        } = (0, g.useRockstarUserState)(), {
          data: k
        } = (0, g.useRockstarUser)(), {
          track: x
        } = (0, g.useGtmTrack)(), {
          windowWidth: _
        } = (0, l.useWindowResize)(), y = (0, c.useIntl)(), j = {
          "--promo-background": t ?? "var(--black-200)",
          "--promo-order": "left" === n ? "row" : "row-reverse"
        }, N = a(84465), w = () => {}, S = (0, u.A)().data, C = !!S?.length, T = (0, s.useMemo)((() => C ? ((e, t, a) => {
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
        }))) : []), [C, S]), A = (0, s.useMemo)((() => (0, b.jsx)("img", {
          alt: y.formatMessage(f.discover_callout_mugshot, {
            userName: k?.nickname
          }),
          className: "rockstargames-sites-gta-gen9ffb5453a30a8c5d68070ae563656efc0",
          src: r || N,
          onError: w
        })), [r, N, y, k]), M = {
          event: "cta_learn",
          text: "track progress",
          link_url: "/gta-online/career-progress",
          element_placement: "discover page"
        };
        return (0, s.useEffect)((() => {
          const e = document.querySelector(`.${p}`);
          e?.clientHeight && h(e.clientHeight)
        }), [_]), (0, s.useEffect)((() => {
          if (k) {
            const {
              characters: e
            } = k;
            i(e?.gtao[v]?.mugshotUrl || "")
          }
        }), [v, k]), (0, b.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ddfe915c931cd932df5cdbdc77fa3a47",
          children: (0, b.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a7a317939644ffb10f67ad27c198ba83",
            style: j,
            children: [(0, b.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a0ce8d90be7ee4a73259dbcc4708dd97",
              "aria-label": y.formatMessage(f.discover_callout_cards_aria),
              children: C ? (0, b.jsx)("div", {
                className: "rockstargames-sites-gta-gen9a647165450b083aab8e1dd57c2f45c96",
                children: C && T.map(((e, t) => (0, b.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9d79f85b800486e9c17109b2db723aa1f",
                  style: {
                    "--packCard-height": o ? `${o}px` : "100px"
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
          fill: r = "white",
          fillRule: i = "evenodd",
          height: o = "20",
          viewBox: c = "0 0 20 20",
          width: l = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: a,
          height: o,
          width: l,
          viewBox: c,
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
          fill: r = "white",
          fillRule: i = "evenodd",
          height: o = "20",
          viewBox: c = "0 0 20 20",
          width: l = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: a,
          height: o,
          width: l,
          viewBox: c,
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
    97101: () => {},
    69464: (e, t, a) => {
      "use strict";
      a.r(t);
      var s = a(52186),
        n = a(40207),
        r = a(74401),
        i = a(72902),
        o = a(29107),
        c = a(94028),
        l = a(46632);
      jest.mock("@rockstargames/locale-tools", (() => ({
        ...jest.requireActual("@rockstargames/locale-tools"),
        useIntl: () => ({
          formatMessage: e => {
            let {
              defaultMessage: t
            } = e;
            return t
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
          t = jest.fn(),
          a = jest.fn(),
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
          }), r.useGetCdnSource.mockImplementation(t), o.getVideoUrl.mockImplementation(a), i.isReducedMotionPreferred.mockImplementation(d), e.mockClear(), t.mockClear(), a.mockClear(), d.mockClear()
        })), test("it renders fallback image when variant is image", (() => {
          d.mockReturnValue(!1), a.mockReturnValue("mock-video-url.mp4"), t.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(c.default, {
            variant: "image",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByAltText("Fallback Image");
          expect(e).toBeInTheDocument(), expect(e).toHaveAttribute("src", "fallback.jpg")
        })), test("it renders video when variant is video and reduced notion is not preferred", (() => {
          d.mockReturnValue(!1), a.mockReturnValue("mock-video-url.mp4"), t.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(c.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByTestId("hero-video");
          expect(e).toBeInTheDocument()
        })), test("it toggles play/pause state when play/pause button is clicked", (() => {
          d.mockReturnValue(!1), a.mockReturnValue("mock-video-url.mp4"), t.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(c.default, {
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
          d.mockReturnValue(!1), a.mockReturnValue("mock-video-url.mp4"), t.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(c.default, {
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
          d.mockReturnValue(!1), a.mockReturnValue("mock-video-url.mp4");
          const {
            unmount: e
          } = (0, s.XX)((0, l.jsx)(c.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          })), t = s.nj.getByTestId("hero-video");
          expect(t.addEventListener).toHaveBeenCalledWith("play", expect.any(Function)), expect(t.addEventListener).toHaveBeenCalledWith("pause", expect.any(Function)), e(), expect(t.removeEventListener).toHaveBeenCalledWith("play", expect.any(Function)), expect(t.removeEventListener).toHaveBeenCalledWith("pause", expect.any(Function))
        })), test("it does not render video when reduced motion is preferred", (() => {
          d.mockReturnValue(!0), a.mockReturnValue("mock-video-url.mp4"), t.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(c.default, {
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
    94028: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => u
      });
      var s = a(71403),
        n = a(74401),
        r = a(40207),
        i = a(96717),
        o = a(42756),
        c = a(29107),
        l = a(72902),
        d = a(36901),
        m = a(82594),
        g = a(46632);
      const u = (0, o.withLocale)((e => {
        let {
          variant: t,
          videoSrc: o,
          fallbackImg: u,
          fallbackImgAlt: f,
          contentImgSrc: p,
          contentImgAlt: b,
          heading: h,
          subheading: v,
          ctaText: k,
          ctaLink: x,
          overlayColor: _
        } = e;
        const {
          track: y
        } = (0, r.useGtmTrack)(), j = (0, s.useRef)(null), [N, w] = (0, s.useState)(!1), S = (0, l.isReducedMotionPreferred)(), C = (0, n.useGetCdnSource)(p?.full_src ?? ""), T = (0, n.useGetCdnSource)(u), A = (0, c.getVideoUrl)(o), {
          formatMessage: M
        } = (0, i.useIntl)(), I = "image" === t || S;
        let E;
        (0, s.useEffect)((() => {
          const e = () => w(!0),
            t = () => w(!1),
            a = j.current;
          return a && (a.addEventListener("play", e), a.addEventListener("pause", t)), () => {
            a && (a.removeEventListener("play", e), a.removeEventListener("pause", t))
          }
        }), []);
        try {
          E = A ? a(43207)(`.${A}`) : "mock-video-url.mp4"
        } catch (e) {
          console.error("Error loading video: ", e)
        }
        return (0, g.jsxs)("div", {
          className: m.default.heroContainer,
          children: [(0, g.jsx)("div", {
            className: m.default.heroVideoWrapper,
            children: "image" === t || S ? (0, g.jsx)("img", {
              className: m.default.heroBackgroundImg,
              src: T,
              alt: f
            }) : (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsxs)("video", {
                ref: j,
                "data-testid": "hero-video",
                className: m.default.heroVideo,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                children: [(0, g.jsx)("source", {
                  src: E,
                  type: "video/mp4"
                }), M(l.messages.video_hero_support_message)]
              }), (0, g.jsx)("button", {
                role: "button",
                className: m.default.heroVideoPlayPauseBtn,
                onClick: () => {
                  if (!I && j.current) {
                    let e = "";
                    N ? (j.current.pause(), e = "toggle pause") : (j.current.play(), e = "toggle play"), y({
                      event: "cta_other",
                      text: e,
                      element_placement: "hero"
                    }), w(!N)
                  }
                },
                "aria-hidden": !0,
                children: N ? (0, g.jsx)(d.Pause, {
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
        default: () => o
      });
      var s = a(55140),
        n = a(28089);
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
        o = () => ({
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
        messages: () => r.default
      });
      var s = a(7230),
        n = a(16108),
        r = a(77936)
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
        var r = s[t] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
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
        var r = s[t] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
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
        var r = s[t] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
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
      }, n.resolve = r, e.exports = n, n.id = 22343
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
      }, n.resolve = r, e.exports = n, n.id = 43207
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