try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8fdb468a-f4e2-4521-9aa1-719551001434", e._sentryDebugIdIdentifier = "sentry-dbid-8fdb468a-f4e2-4521-9aa1-719551001434")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [275], {
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    3514: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(12323),
        i = t(45440);
      const r = (e = {
        parent: "",
        post: null
      }) => ({
        name: "listItem",
        label: "List Item",
        component: "group",
        fields: [(0, s.om)(e), (0, s.z9)({
          name: "content",
          label: "Content",
          component: "text",
          initialValues: ""
        }), (0, s.sE)(e)],
        defaultItem: () => (0, s.Q)({
          content: ""
        }),
        itemProps: e => (0, s.Rv)(e, {
          label: (0, i._e)(`${e?.name??e?.[s.Qw]?.content??"New"} [List Item]`)
        })
      })
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    5328: (e, a, t) => {
      var s = {
        "./applestore.svg": 49733,
        "./googleplay.svg": 62749,
        "./left.svg": 84941,
        "./pc.svg": 39821,
        "./pcalt.svg": 29886,
        "./ps.svg": 65437,
        "./ps3.svg": 33492,
        "./ps4.svg": 65115,
        "./ps5.svg": 23146,
        "./right.svg": 80304,
        "./switch.svg": 22454,
        "./x.svg": 66426,
        "./xbox.svg": 59129,
        "./xboxone.svg": 42659,
        "./xboxseriesxs.svg": 36773
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 5328
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    7502: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    8194: (e, a, t) => {
      var s = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 8194
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    10419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    10826: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(42295),
        i = t(62229);
      const r = ({
        children: e,
        style: a,
        theme: t
      }) => {
        const [r, n] = (0, i.useState)(t);
        return (0, i.useEffect)((() => {
          t && n(t)
        }), [t]), (0, s.jsx)("div", {
          className: "rockstargames-sites-legacye5e0faf6ab9871fd60b958c6f7dcf519",
          style: a,
          "data-theme": r,
          children: e
        })
      }
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    12294: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => k,
        h: () => b
      });
      var s = t(42295),
        i = t(62229),
        r = t(95966),
        n = t(9623),
        c = t(2765),
        o = t.n(c),
        d = t(90660),
        l = t(2918),
        m = t(4572),
        g = t.n(m);
      const f = ({
          modal: e
        }) => {
          const {
            content: a,
            className: t,
            height: r,
            onClose: c,
            rect: m = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: u = "",
            width: p,
            fadeIn: b = !0,
            cardIds: k,
            activeId: v,
            theme: h,
            title: y,
            gtm: _ = {},
            aspectRatio: x = "default",
            cardDimensions: j
          } = e, {
            left: N,
            top: w
          } = m, S = k?.indexOf(v), [C, T] = (0, i.useState)(k?.length || 0), {
            track: I
          } = (0, l.useGtmTrack)(), L = null !== k && (k?.length || 0) > 1 && ("flag_bg" === h || "fob" === j?.size), P = window.location.href.includes("cms5"), [E, z] = (0, n.useSearchParams)(), [V, B] = (0, i.useState)(!1), [M, D] = (0, i.useState)(!1), [A, $] = (0, i.useState)(), F = e => {
            "number" == typeof e && k && e < k.length && e > -1 && z({
              info: k[e].toString()
            })
          }, O = () => {
            const e = "number" == typeof S && S > -1 ? S - 1 : 0;
            F(e), I({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: y?.toLowerCase(),
              position: S
            })
          }, G = () => {
            const e = "number" == typeof S && S > -1 ? S + 1 : 0;
            F(e), I({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: y?.toLowerCase(),
              position: S
            })
          };
          (0, i.useEffect)((() => {
            T(k?.length || 0)
          }), [k?.length]), (0, i.useEffect)((() => {
            null !== S && null !== k && F(S)
          }), [S, k]), (0, i.useEffect)((() => {
            const e = k?.findIndex((e => e === v));
            "number" == typeof e && (D(e <= 0), B(e >= C - 1))
          }), [k, v, C, E]);
          const [R] = (0, i.useState)({
            y: w,
            x: N,
            top: 0,
            left: 0,
            width: p,
            height: r,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: L ? "0" : ""
          }), H = {
            opacity: 1
          }, U = (0, i.useRef)(null), q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, W = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [X] = (0, i.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: L ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
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
          }), [K, Y] = (0, i.useState)({
            initial: R,
            shown: X
          });
          (0, i.useEffect)((() => {
            Y({
              initial: R,
              shown: X
            })
          }), [R, X]), (0, i.useEffect)((() => {
            const e = e => {
              "function" == typeof c && "Escape" === e.key && (c(), I({
                event: "modal_close",
                element_placement: y?.toLowerCase(),
                ..._
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const Q = () => {
              "function" == typeof c && (c(), I({
                event: "modal_close",
                element_placement: y?.toLowerCase(),
                ..._
              }))
            },
            Z = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const i = Z(s, a - 1);
                if (i) return i
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
                      return A?.queried ? a = A.element : (a = Z(e, 2), $({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = b ? 0 : 1,
            ae = (0, i.useRef)(null),
            te = (0, s.jsx)(d.motion.button, {
              className: "rockstargames-sites-legacyf462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: W,
              onClick: () => {
                Q()
              },
              onKeyDown: J,
              onKeyUp: J
            });
          let se = null;
          return se = P ? i.Fragment : o(), (0, i.useMemo)((() => (0, s.jsx)("div", {
            className: "rockstargames-sites-legacya1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": L,
            "data-aspect-ratio": x,
            children: (0, s.jsx)(se, {
              children: (0, s.jsxs)("div", {
                children: [(0, s.jsx)(d.motion.div, {
                  className: "rockstargames-sites-legacycf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: H,
                  transition: q,
                  onClick: () => Q()
                }), L && (0, s.jsxs)("div", {
                  className: "rockstargames-sites-legacyd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, s.jsxs)(d.motion.div, {
                    className: "rockstargames-sites-legacydbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: W,
                    children: [(0, s.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: O,
                      disabled: M,
                      onKeyDown: J,
                      onKeyUp: J
                    }), (0, s.jsxs)("div", {
                      className: "rockstargames-sites-legacye316695281c4c56337307741bda1371f",
                      "data-theme": h,
                      children: [" ", (S ?? 0) + 1, (0, s.jsx)("div", {
                        className: "rockstargames-sites-legacyc1ee424eae15f7b789c86e634df9e28d"
                      }), k?.length, " "]
                    }), (0, s.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: G,
                      disabled: V,
                      onKeyDown: J,
                      onKeyUp: J,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, s.jsx)(d.motion.div, {
                  className: "rockstargames-sites-legacye708da42918d8bbff9a8e1a36a2c4366",
                  ref: U,
                  initial: "initial",
                  animate: "shown",
                  variants: K,
                  transition: q,
                  style: f,
                  children: (0, s.jsxs)(d.motion.div, {
                    className: g()("rockstargames-sites-legacya7d77f83f629e9ae93f6934c8ba007b0", t),
                    id: "modal",
                    "data-testid": "modal",
                    role: "dialog",
                    children: [!L && te, (0, s.jsx)(d.motion.div, {
                      className: g()("rockstargames-sites-legacyf26fc1babb8dd1284d4c03b3dabff714", u),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: W,
                      ref: ae,
                      children: a
                    }), (0, s.jsx)("button", {
                      className: "rockstargames-sites-legacyea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [a, S, f])
        },
        u = [null, () => null],
        p = (0, r.setContextItem)({
          context: (0, i.createContext)(u),
          key: "modalContext"
        }),
        b = () => (0, i.useContext)(p),
        k = ({
          children: e
        }) => {
          const [a, t] = (0, i.useState)(u), {
            setBodyIsLocked: n
          } = (0, r.useBodyScrollable)("ModalProvider"), c = (0, i.useMemo)((() => a?.content ? (0, s.jsx)(f, {
            modal: a
          }) : null), [a]), o = () => n(!1);
          return (0, i.useEffect)((() => (window.addEventListener("popstate", o), () => {
            window.removeEventListener("popstate", o)
          })), []), (0, i.useEffect)((() => {
            n(!!c)
          }), [c]), (0, s.jsx)(p.Provider, {
            value: [c, t],
            children: e
          })
        }
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    12914: (e, a, t) => {
      "use strict";
      t.d(a, {
        F: () => s
      });
      const s = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    13897: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229),
        i = t(2918);
      const r = (0, s.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: r,
          children: n,
          requireUser: c
        } = e, {
          track: o
        } = (0, i.useGtmTrack)(c), [d, l] = (0, s.useState)(a?.current);
        return (0, s.useEffect)((() => {
          a?.current && l(a.current)
        }), [a]), ((e, a, t) => {
          const [i, r] = (0, s.useState)({
            scrollDepths: e,
            scrollY: 0,
            scrollLength: 0
          }), {
            scrollDepths: n,
            scrollY: c,
            scrollLength: o
          } = i;
          (0, s.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, s.useEffect)((() => {
            r({
              scrollDepths: e,
              scrollY: 0,
              scrollLength: 0
            })
          }), [window.location.pathname]);
          const d = (0, s.useCallback)((() => {
            const e = document.documentElement,
              s = document.body,
              c = t?.scrollTop || e.scrollTop || s.scrollTop,
              o = t?.scrollHeight || e.scrollHeight || s.scrollHeight,
              {
                clientHeight: l
              } = e,
              m = c / (o - l) * 100;
            if (n) {
              const e = Math.min(...n, o);
              if (m >= e) {
                const s = n.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", d), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  scrollLength: o * (.01 * e),
                  remainingDepths: s
                }), r({
                  scrollY: e,
                  scrollDepths: s,
                  scrollLength: o * (.01 * e)
                })
              }
            } else r({
              ...i,
              scrollY: m
            })
          }), [n, t, a]);
          (0, s.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", d), () => e.removeEventListener("scroll", d)
          }), [d])
        })(t, (({
          scrollY: e,
          scrollLength: a
        }) => {
          o({
            event: "page_scroll",
            scroll_depth: e,
            page_length: `${a}px`
          }), "function" == typeof r && r(e)
        }), d), n
      }));
      r.displayName = "ScrollTracker";
      const n = r
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    14804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    18177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    18712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    19612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    22454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    23146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    23781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    24256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    24611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    24865: (e, a, t) => {
      var s = {
        "./VI/mobile.jpg": 92244
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 24865
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    29886: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg"
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    31445: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var s = t(85719),
        i = t(80391),
        r = t(45302),
        n = t(28985),
        c = t(32903),
        o = t(49429),
        d = t(11008),
        l = t(49564),
        m = t(66787),
        g = t(55815),
        f = t(93221),
        u = t(47240);
      const p = {
          pc: s,
          ps: i,
          ps3: r,
          ps4: n,
          xbox: c,
          xboxone: o,
          switch: d,
          xbox360: l,
          googleplay: m,
          applestore: g,
          questionMark: f,
          default: "",
          xboxseriesxs: t(81715),
          ps5: u
        },
        b = e => p[e] || null
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    33492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    34100: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(42295),
        i = t(62229),
        r = t(81788),
        n = t(14200),
        c = t(67050);
      const o = (0, r.defineMessages)({
          wasted_error_404_new: {
            id: "wasted_error_404_new",
            description: "Message prompting user that page doesn't exist or another error occurred",
            defaultMessage: "The page you're looking for doesn't exist or another error occurred."
          },
          wasted_home: {
            id: "wasted_home",
            description: "Message prompting user that the home page doesn't exist or another error occurred",
            defaultMessage: "Home"
          }
        }),
        d = ({
          error: e,
          domain: a = ""
        }) => {
          console.error({
            error: e
          });
          const {
            formatMessage: t
          } = (0, r.useIntl)();
          let d = e?.message ?? t(o.wasted_error_404_new);
          d = t(o.wasted_error_404_new);
          const l = e?.code ?? 398,
            m = (0, i.useRef)(null);
          return (0, i.useEffect)((() => {
            m && m?.current && m.current.focus()
          }), [m]), (0, s.jsxs)("div", {
            className: "rockstargames-sites-legacyd0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, s.jsx)("h3", {
              tabIndex: -1,
              ref: m,
              children: `${d} (${l})`
            }), (0, s.jsx)(n.A, {
              to: "/",
              reloadDocument: !1,
              children: t(o.wasted_home)
            }), "clr" !== a && (0, s.jsx)(c.A, {})]
          })
        }
    },
    36672: (e, a, t) => {
      var s = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 36672
    },
    36773: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    39294: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 39294
    },
    39821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    42659: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    43582: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(42295),
        i = t(62229),
        r = t(27785),
        n = t.n(r),
        c = t(95966),
        o = t(4572),
        d = t.n(o);
      const l = {
          blue: "rockstargames-sites-legacybffe0939bda9e26ad14f6b01669338a8",
          custom: "rockstargames-sites-legacycc2c26a3dd80cf9db62c4c7f389b7859",
          darkBlue: "rockstargames-sites-legacye2b6f722952b5d61d2a3b725166bfc9b",
          darkRed: "rockstargames-sites-legacyd44e2fc53f269ccf2b8fbe032ef6cec9",
          goldenrod: "rockstargames-sites-legacya365c5895cfd6c9f94fc994d71ba402c",
          green: "rockstargames-sites-legacyf9c1eebf59650cd8ee84191d8fc62874",
          grid: "rockstargames-sites-legacybe627ae18a7bd3cff72d3f11aeed67df",
          gtao: "rockstargames-sites-legacyffaf58c543b36fd7fb4efec24b3564bc",
          gtaplus: "rockstargames-sites-legacyfbf343ed03c1bd513ea4cadc9726af76",
          hotPink: "rockstargames-sites-legacyedb9998d6516a5aa1aece9c07c1768be",
          itemList: "rockstargames-sites-legacyd9620ae764026da5584e0f0a5886c992",
          noImg: "rockstargames-sites-legacybbb7247d5d7a836d755491e85639f1a3",
          pillBtn: "rockstargames-sites-legacyc1ed14af6fceaba7c99728a81676dd92",
          purple: "rockstargames-sites-legacye61db4af0805bb4c9bf820c26ac8a85f",
          rdo: "rockstargames-sites-legacyb2194fe129aa210950dcb07b88a28c13",
          red: "rockstargames-sites-legacyf674d6037f10af1a1fe41a83c1e5da17",
          selected: "rockstargames-sites-legacye49b5a5fd4ab934ece172fffe9f6577e",
          skull: "rockstargames-sites-legacyb2a1c0b367b250fe0606dffece9e1c02",
          teal: "rockstargames-sites-legacya379d41268f4f002d5ac257f67461f1d",
          turquoise: "rockstargames-sites-legacye211b0b8ae00897d696af259b3ddd837",
          yellow: "rockstargames-sites-legacyce372826eac3cc73094d69c0c5d9a530"
        },
        {
          sanitize: m
        } = n(),
        g = ({
          list: e,
          string: a,
          starColor: t,
          style: r,
          className: n,
          game: o,
          noImg: g,
          columns: f,
          mobileColumns: u
        }) => {
          const [p, b] = (0, i.useState)(null);
          if ((0, i.useEffect)((() => {
              b(e)
            }), [e]), !a && !e) return null;
          const k = {
            color: r?.color
          };
          return delete r?.color, f && p ? (0, s.jsx)("div", {
            className: l.grid,
            style: {
              "--ordered-list-grid-column": f,
              "--ordered-list-grid-column-mobile": u ?? f
            },
            children: (0, s.jsx)("ol", {
              className: d()(l.itemList, l.noImg, l[t], l[o]),
              style: (0, c.safeStyles)(r),
              children: p.map((e => (0, s.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: m(e.content)
                },
                style: k
              }, e.content)))
            })
          }) : (0, s.jsx)("ol", {
            style: (0, c.safeStyles)(r),
            className: d()(l.itemList, l.custom, g ? l.noImg : "", t ? l[t] : "", o ? l[o] : "", n ?? ""),
            children: e.map((e => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e?.content ?? e)
              }
            }, e?.content)))
          })
        }
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    45440: (e, a, t) => {
      "use strict";
      t.d(a, {
        OD: () => n,
        lv: () => c,
        wC: () => i,
        PE: () => _,
        rB: () => d,
        tC: () => b,
        yh: () => y,
        Ap: () => g,
        Xs: () => x,
        kx: () => j,
        rJ: () => w,
        pT: () => k,
        lV: () => N,
        PA: () => s,
        My: () => f,
        _e: () => v
      }), t(42295), t(15076);
      const s = ({
          element: e
        }) => {
          const a = setInterval((() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            t = e => {
              e.target === document && (clearInterval(a), document.removeEventListener("scroll", t))
            };
          document.addEventListener("scroll", t)
        },
        i = ({
          paramName: e = "section"
        } = {}) => {
          const a = new URLSearchParams(document.location.search),
            t = document.getElementById(a.get(e) || e);
          t && (s({
            element: t
          }), r(t))
        },
        r = e => {
          const a = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (a.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const t = e?.querySelectorAll(a.join(", "));
            if (t?.length) {
              const e = [...t].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class n {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, a, t, s, i = null, r = null) {
          this.name = e, this.friendlyName = a, this.id = t, this.onlineService = s, this.aliasOnlineService = i, this.alias = r
        }
      }
      const c = Object.freeze({
          pc: new n("pc", "PC Legacy", 8, "sc"),
          ps: new n("ps", "PlayStation", 3, "np", "ps"),
          ps3: new n("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new n("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new n("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new n("xbox", "Xbox", 4, "xbl"),
          xbox360: new n("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new n("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new n("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new n("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new n("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new n("applestore", "App Store", 102, "applestore"),
          googleplay: new n("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new n("app_store", "App Store", 102, "applestore"),
          googlePlay: new n("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new n("pcalt", "PC Enhanced", 22, "sc")
        }),
        o = Object.freeze(Object.values(c));

      function d(e) {
        if (!e) return;
        if (e instanceof n) return e;
        const a = e.toString().toLowerCase();
        return o.find((e => a === e.name || a === e.id.toString() || a === e.friendlyName.toLowerCase() || a === e.onlineService?.toLowerCase() || a === e.aliasOnlineService?.toLowerCase() || a === e.alias?.toLowerCase()))
      }
      var l = t(6306),
        m = t(12914);
      const g = e => {
          const a = document.cookie.split("; "),
            t = `${e}=`,
            s = a.find((e => e.startsWith(t))),
            i = s?.substring(t.length, s.length);
          return i
        },
        f = (e, a) => {
          e && void 0 !== a && (0, l.canStoreCookie)(e) && g(e) !== a && (document.cookie = `${e}=${a}; domain=${(0,m.F)()}; path=/;`)
        };
      var u = t(81788),
        p = t(45547);
      const b = async ({
        service: e,
        returnUrl: a,
        pingBearer: t
      }) => {
        const [{
          iso: s
        }] = (0, u.getLocale)(), {
          authHost: i,
          clientId: r
        } = (0, p.A)(), n = await t(), c = new URL(`tpa/${e}/link`, `https://${i}.rockstargames.com`);
        return c.searchParams.append("cid", r), c.searchParams.append("lang", s), c.searchParams.append("returnUrl", a ?? window.location.pathname), n && "boolean" != typeof n && "string" == typeof n.bearerToken && c.searchParams.append("accessToken", n.bearerToken), c
      }, k = e => e.keys().forEach(e), v = e => e.replace(/(<([^>]+)>)/gi, ""), h = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], y = (e = !0) => h.filter((a => a.key === (e ? "prod" : "dev")))[0]?.path ?? null, _ = e => {
        e.preventDefault();
        const a = e.currentTarget.href,
          t = (e => {
            const a = new URL(e).pathname.split("/"),
              t = a[a.length - 1];
            return decodeURIComponent(t)
          })(a);
        fetch(a, {
          method: "GET",
          headers: {}
        }).then((e => e.arrayBuffer())).then((e => {
          const a = window.URL.createObjectURL(new Blob([e])),
            s = document.createElement("a");
          s.href = a, s.setAttribute("download", t), document.body.appendChild(s), s.click(), document.body.removeChild(s)
        })).catch((e => {
          console.log(e)
        }))
      }, x = () => [c.xbox360.name, c.xboxone.name, c.ps3.name, c.ps4.name, c.pc.name], j = () => [c.xboxsx.name, c.ps5.name, c.pcalt.name], N = e => j().includes(e), w = e => {
        const a = new Map([
          ["en-us", "English (United States)"],
          ["de-de", "Deutsch (Deutschland)"],
          ["fr-fr", "Français (France)"],
          ["fr-ca", "Français (Canada)"],
          ["it-it", "Italiano (Italia)"],
          ["ja-jp", "日本語"],
          ["ru-ru", "Pусский"],
          ["es-es", "Español (España)"],
          ["es-mx", "Español (México)"],
          ["pt-br", "Português (Brasil)"],
          ["ko-kr", "한국어"],
          ["zh-hans", "中文（简体）"],
          ["zh-hant", "中文（繁體）"],
          ["pl-pl", "Polski"]
        ]);
        return a.has(e) ? a.get(e) : e
      }
    },
    46368: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
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
                value: "url"
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
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
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
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }, {
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
          end: 926
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
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = r(a, "postFields"), e.exports.paging = r(a, "paging"), e.exports.NewswireList = r(a, "NewswireList")
    },
    46554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    46618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    46823: e => {
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    47240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    47580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    48524: e => {
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

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
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
    49733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    49980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    50324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    50828: e => {
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
                value: "foreignId"
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
                value: "foreignType"
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
                    value: "foreignId"
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
                    value: "foreignType"
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
                value: "foreignId"
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
                value: "foreignType"
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
                    value: "foreignId"
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
                    value: "foreignType"
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
          end: 386
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
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
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
    51392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    51575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    51913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    53781: (e, a, t) => {
      var s = {
        "./VI/desktop.jpg": 67496
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 53781
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    55815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    57386: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(42295),
        i = t(62229),
        r = t(47942),
        n = t(34100);
      class c extends i.Component {
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
        componentDidCatch(e, a) {
          (0, r.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "E399 triggered",
            data: {
              error: e,
              errorInfo: a
            }
          }), (0, r.captureMessage)("ErrorBoundary", r.Severity.Error)
        }
        render() {
          return null !== this.state.error.code ? (0, s.jsx)(n.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const o = (e, a = null) => function(t) {
        return (0, s.jsx)(c, {
          header: a,
          children: (0, s.jsx)(e, {
            ...t
          })
        })
      }
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    59129: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    62749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    65115: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    65211: e => {
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    65287: (e, a, t) => {
      var s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 65287
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    65437: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    66426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    66787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    67050: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(42295),
        i = t(62229),
        r = t(9623),
        n = t(95966);
      const c = (0, n.withTranslations)((({
        t: e
      }) => {
        const [a] = (0, i.useState)(""), t = (0, r.useNavigate)(), c = (0, n.useMutateState)();
        return (0, s.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-legacyc9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), c({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            t(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, s.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, s.jsx)("input", {
            autoComplete: "off",
            defaultValue: a,
            enterKeyHint: "search",
            name: "q",
            placeholder: e("Search Rockstar Games")
          })]
        })
      }))
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    67496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/372e91ece1e13eda3ec63d6dfc06f7ce.jpg"
    },
    67990: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => Cr
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => X,
        transitions: () => q,
        variants: () => W
      });
      var i = {};
      t.r(i), t.d(i, {
        Animations: () => s,
        LiteMotion: () => D,
        withFadeIn: () => O,
        withFadeUp: () => U
      });
      var r = {};
      t.r(r), t.d(r, {
        RpCategory: () => ds,
        rpCategoryTestIds: () => os
      });
      var n = {};
      t.r(n), t.d(n, {
        Avatar: () => gs,
        Content: () => fs,
        PlatformTag: () => ps,
        PlatformTagSizes: () => is,
        Platforms: () => rs,
        RankContent: () => ks,
        Root: () => ms,
        RpCategory: () => vs,
        TextContent: () => hs,
        TopRow: () => us,
        UserName: () => bs
      });
      var c = {};
      t.r(c), t.d(c, {
        Art: () => tr,
        Link: () => sr
      });
      var o = {};
      t.r(o), t.d(o, {
        A: () => p.A,
        AlertDialog: () => ni,
        AudioPlayer: () => Kt,
        Badge: () => ha,
        Brands: () => Yt.A,
        Button: () => kt,
        ButtonGroup: () => as,
        CalloutSection: () => jt,
        Carousel: () => da,
        CharacterCard: () => n,
        ConditionalBlock: () => js,
        CookieAB: () => Is,
        CountryInputField: () => Cs,
        Cta: () => ft,
        DescriptionArea: () => na,
        DiscountsBadge: () => Ye,
        DotLoader: () => Ps,
        Dropdown: () => zs,
        Embed: () => Bs,
        ExpandingPlatformButton: () => Fs,
        FadeInContent: () => Gs,
        Gen9Button: () => es,
        Gen9CoreCarousel: () => Hs,
        Grid: () => ut,
        HTMLElement: () => Ue,
        Hero: () => Zs,
        HookStore: () => ys,
        ImageWithBadge: () => Ze,
        LayeredImage: () => ai,
        Lightbox: () => si,
        LoadingAnimation: () => kr.A,
        MultiSourceImage: () => V,
        NewswireBlocks: () => vi,
        NewswireCard: () => li,
        NewswireList: () => ui,
        NewswireRelated: () => bi,
        NewswireTag: () => oi,
        OrderedList: () => hi.A,
        Paging: () => xi,
        ParallaxCacheBuster: () => Ni,
        ParallaxInnerLayer: () => Ci,
        ParallaxOuterLayer: () => Ii,
        ParallaxWrapper: () => Si,
        PlatformTag: () => ns,
        PromoModule: () => Pi,
        Rating: () => x,
        ResponsiveFlexBox: () => zi,
        ResponsiveFlexItem: () => Bi,
        ResponsiveGridBox: () => Di,
        ResponsiveGridItem: () => $i,
        ResponsiveImg: () => Oi,
        ResponsiveSection: () => Ri,
        RockstarLogo: () => Hi,
        RpCategory: () => r,
        SafeHtml: () => qi,
        ScrollSection: () => Wi,
        ScrollToTop: () => Xi,
        ScrollTracker: () => va.A,
        SearchBox: () => Ki.A,
        Separator: () => sa,
        SrcsetImage: () => je,
        StorybookWrapper: () => Yi,
        TextFit: () => We,
        ThumbsGallery: () => Mt,
        TinaModuleFetchNRender: () => Ge,
        TinaWrapper: () => Qi.A,
        TrackList: () => Ct,
        UnorderedList: () => aa.A,
        UserVote: () => er,
        VideoCard: () => c,
        VideoCarousel: () => nr,
        VideoList: () => fr,
        VisuallyHidden: () => ur,
        Wasted: () => pr.A,
        framer: () => i,
        useTinaModuleFetchByIds: () => Oe,
        withSearchbarErrorBoundary: () => br.A,
        withSimpleErrorBoundary: () => k
      });
      var d = t(42295),
        l = t(62229),
        m = t(81788),
        g = t(95966),
        f = t(61128),
        u = t(2918),
        p = t(14200);
      class b extends l.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, d.jsxs)("div", {
            className: "rockstargames-sites-legacyd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, d.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, d.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const k = (e, a = null, t = !1) => function(s) {
          return (0, d.jsx)(b, {
            header: a,
            hidden: t,
            children: (0, d.jsx)(e, {
              ...s
            })
          })
        },
        v = {
          rating: "rockstargames-sites-legacyc3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-sites-legacybabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-sites-legacyb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-legacyb6339480b5fd086fb0c025930bfb7dcd"
        },
        h = (0, m.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var y = t(95520),
        _ = t(19732);
      (0, g.importAll)(t(36672));
      const x = k((0, _.g)((({
        descriptors: e = null,
        footer: a = null,
        href: s,
        img: i = null,
        titleSlug: r = null,
        style: n = {},
        className: c
      }) => {
        const [o, b] = (0, l.useState)(!1), {
          inView: k
        } = (0, f.useInView)({
          threshold: .6
        }), [_, x] = (0, l.useState)({
          ratingDescriptors: e,
          ratingFooter: a,
          ratingImg: i,
          ratingUrl: s
        }), {
          track: j
        } = (0, u.useGtmTrack)(), N = (0, m.useIntl)(), {
          data: w
        } = (0, g.useQuery)(y.GameData, {
          variables: {
            titleSlug: r
          },
          skip: !r
        });
        if ((0, l.useEffect)((() => {
            w && x(w?.game)
          }), [w]), (0, l.useEffect)((() => {
            k && !o && _.img_rating && (j({
              event: "page_section_impression",
              element_placement: "rating"
            }), b(!0))
          }), [k]), !_.ratingImg) return null;
        const S = !!_.ratingDescriptors;
        return (0, d.jsxs)("div", {
          className: [v.rating, S ? v.withDescriptors : v.withOutDescriptors, c || ""].join(" "),
          style: (0, g.safeStyles)(n),
          "data-testid": "rating",
          children: [(0, d.jsx)(p.A, {
            to: _.ratingUrl,
            target: "_blank",
            children: (0, d.jsx)("img", {
              alt: N.formatMessage(h.components_ratings_link_alt, {
                rating: (C = _.ratingImg, C.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${_.ratingImg}`)
            })
          }), S && (0, d.jsxs)("div", {
            className: v.text,
            children: [(0, d.jsx)("p", {
              className: v.descriptors,
              dangerouslySetInnerHTML: {
                __html: _?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), _.ratingFooter && (0, d.jsx)("hr", {}), _.ratingFooter && (0, d.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: _.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var C
      })));
      var j = t(84590),
        N = t.n(j),
        w = t(87330);
      const S = (0, g.setContextItem)({
          context: (0, l.createContext)(void 0),
          key: "imageGallery"
        }),
        C = ({
          children: e
        }) => {
          const [a, t] = (0, l.useState)([]), s = e => {
            t(e)
          }, i = (0, l.useMemo)((() => ({
            collections: a,
            updateGalleryCollections: s
          })), [a]);
          return (0, d.jsx)(S.Provider, {
            value: i,
            children: e
          })
        };
      var T = t(92440),
        I = t(31879),
        L = t.n(I),
        P = t(34725);
      const E = "rockstargames-sites-legacyc8dc03880ce2e12f3fdea5b5b587f27f",
        z = ({
          alt: e,
          className: a,
          src: s,
          style: i
        }) => {
          const [r, n] = (0, g.usePreloadImg)(s);
          let c = s;
          !1 === r && ("rockstargames-sites-legacya6a06e2d5c4f1811ea39d17312ca2e67" === a && (c = t(28839)), c = t(9333));
          const {
            width: o,
            height: l
          } = n, m = {
            "--aspect-ratio": Number.isNaN(o / l) ? "" : o / l,
            ...i
          };
          return (0, d.jsx)("img", {
            src: c,
            className: a ?? "",
            alt: e,
            style: m
          })
        },
        V = ({
          className: e,
          style: a = {},
          image: s = {},
          imageStyle: i = {}
        }) => {
          let {
            alt: r,
            src: n
          } = (0, P.S1)(s);
          const {
            isMobile: c
          } = (0, g.useWindowResize)();
          n.desktop || n.mobile || (r = "", n = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let o = s.frame ? `${s.frame} ${E}` : E;
          return (0, d.jsx)("div", {
            className: o,
            style: a,
            children: (0, d.jsx)(z, {
              style: {
                ...i,
                ...s?.style
              },
              src: c ? n.mobile || n.desktop : n?.desktop || n?.mobile,
              alt: r,
              className: e
            })
          })
        };
      var B = t(90660);
      const M = (0, l.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, i = B.m[s];
        return (0, d.jsx)(B.LazyMotion, {
          features: B.domAnimation,
          children: (0, d.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      M.displayName = "LiteMotion";
      const D = M,
        A = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        $ = {
          ease: "easeIn",
          duration: .4
        },
        F = ({
          children: e
        }) => (0, d.jsx)(B.motion.div, Object.assign({
          className: "rockstargames-sites-legacyf38982805188b64825a72d2c5fac938c",
          variants: A,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: $
        }, {
          children: e
        })),
        O = e => a => (0, d.jsx)(F, {
          children: (0, d.jsx)(e, Object.assign({}, a))
        }),
        G = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        R = {
          ease: "easeIn",
          duration: .75
        },
        H = ({
          children: e
        }) => (0, d.jsx)(B.motion.div, {
          className: "rockstargames-sites-legacyc1ad787ad6429786650325edac0ffe42",
          variants: G,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: R,
          children: e
        }),
        U = e => a => (0, d.jsx)(H, {
          children: (0, d.jsx)(e, {
            ...a
          })
        }),
        q = {
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
        W = {
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
        X = (e = "imageMask", a = "collapsed") => W[e][a];
      var K = t(4572),
        Y = t.n(K);
      const Q = {
          blurb: "rockstargames-sites-legacyab450ba2efac19aec7dc231239e316b1",
          container: "rockstargames-sites-legacyc2560c6b045ae73dbeeeef12570be8ba",
          content: "rockstargames-sites-legacyd4940f1b1576161b5eb78d28d88a5e1f",
          flipped: "rockstargames-sites-legacyc5be20966c373ac52583632312d5a32e",
          footnote: "rockstargames-sites-legacyc4186c5734b0a77bd017894a762275de",
          headerLogo: "rockstargames-sites-legacycfde78e6f54601e7fbd20572c7dbcfb8",
          imgVideo: "rockstargames-sites-legacycf1510a0614ebf32fdf98ca33ae6214f",
          large: "rockstargames-sites-legacya9e947863ed858f3047127a45c80a8d3",
          pillBtn: "rockstargames-sites-legacyc2b2a000c57ab19cace8cb18ef25ed90",
          rdrUltra: "rockstargames-sites-legacydacbe935b88136482bbc2da111638540",
          selected: "rockstargames-sites-legacya0bae35fdcc72e1af72b07cc494f20bf",
          singleColumn: "rockstargames-sites-legacyc5ba7a9fc78332b803f78e404685dea8",
          text: "rockstargames-sites-legacyefc80457bc220013f1f5e28c4d68271c",
          title: "rockstargames-sites-legacycf71441c9c65230a6a161085b73b97cb",
          universalCyrillic: "rockstargames-sites-legacye7fcab0d0e3c2654185559b59883e8e8"
        },
        Z = O((({
          title: e = "",
          headerLogo: a,
          body: t,
          footnote: s,
          image: i,
          videoId: r,
          customHeaderFont: n,
          setVideoAsDefault: c,
          large: o = !1,
          image_on_right: m = !1,
          style: g = {},
          className: p = "",
          ...b
        }) => {
          const {
            track: k
          } = (0, u.useGtmTrack)(), {
            ref: v,
            inView: h
          } = (0, f.useInView)({
            threshold: .6
          }), [y, _] = (0, l.useState)(!1), [x, j] = (0, l.useState)(!1), N = n ? Q[n] : "", w = a?._memoq?.maxHeight || "auto", S = a?._memoq?.maxWidth || "auto";
          return (0, l.useEffect)((() => {
            j(a?.setLogoAsDefault || !1)
          }), []), (0, l.useEffect)((() => {
            h && !y && (k({
              event: "page_section_impression",
              element_placement: b?._memoq?.title?.toLowerCase()
            }), _(!0))
          }), [h]), (0, d.jsxs)("div", {
            className: Y()(Q.container, o ? Q.large : "", m ? Q.flipped : "", i ? "" : Q.singleColumn, p),
            style: g,
            ref: v,
            "data-testid": "imageVideoGroupContainer",
            children: [c && r ? (0, d.jsx)(L(), {
              className: Q.imgVideo,
              autoplay: !1,
              id: r
            }) : i ? (i.alt = i?.alt ?? i?._memoq?.alt ?? "", (0, d.jsx)(V, {
              className: Q.imgVideo,
              image: i
            })) : null, (0, d.jsx)("div", {
              className: Q.content,
              children: (0, d.jsxs)("div", {
                className: Q.text,
                children: [(() => {
                  const t = a?.image,
                    s = a?.image?.alt ?? a?.image?._memoq?.alt,
                    i = e.replace(/\s+/g, "-").toLowerCase();
                  return a && (a.image.alt = s), x && t ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(V, {
                      className: Q.headerLogo,
                      image: t,
                      imageStyle: {
                        maxHeight: w,
                        maxWidth: S,
                        margin: 0
                      }
                    }), (0, d.jsx)("h2", {
                      id: `${i}-section`,
                      style: {
                        display: "none"
                      },
                      children: e
                    })]
                  }) : e && (0, d.jsx)("h2", {
                    className: [Q.title, N].join(" "),
                    children: e
                  })
                })(), t ? (0, d.jsxs)(d.Fragment, {
                  children: [(0, d.jsx)("div", {
                    className: Q.blurb,
                    dangerouslySetInnerHTML: {
                      __html: (C = t, C ? C.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), s && (0, d.jsx)("small", {
                    className: Q.footnote,
                    dangerouslySetInnerHTML: {
                      __html: s
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var C
        })),
        J = {
          featureBlock: "rockstargames-sites-legacyf89ddcf04ab19186bc3f7f66bf91fda5",
          featuresContainer: "rockstargames-sites-legacyf7529c017b3481439bcc4b72b758d930",
          pillBtn: "rockstargames-sites-legacya81e3ad6cfbe33efbd18b786a09e71fd",
          selected: "rockstargames-sites-legacya3aefd91e661c1e6dc8bbff4fd17248f"
        },
        ee = ({
          className: e,
          id: a,
          features: t,
          backgroundImageGroup: s
        }) => {
          const i = (0, T.useGetCdnSource)(s?.desktop?.image),
            r = (0, T.useGetCdnSource)(s?.topMask?.mask),
            n = (0, T.useGetCdnSource)(s?.bottomMask?.mask),
            c = !!n,
            o = {
              "--fb-bg-image": `url(${i})`,
              "--fb-top-mask": `url(${r})`,
              "--fb-bottom-mask": `url(${n})`
            };
          return t.length ? (0, d.jsx)("section", {
            style: o,
            className: [J.featureBlock, e ?? ""].filter((e => e)).join(" "),
            id: a ?? "",
            "data-has-mask": c,
            children: (0, d.jsx)("div", {
              className: J.featuresContainer,
              children: t.map((e => (0, d.jsx)(Z, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var ae = t(9623);

      function te(e) {
        return e ? {
          "--gradient-start-color": ie(se(e?.startColor), e?.startOpacity),
          "--gradient-end-color": ie(se(e?.endColor), e?.endOpacity)
        } : {}
      }

      function se(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function ie(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function re(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const ne = {
          button: "rockstargames-sites-legacyf39fa3b1b065c2d54b2567b48a1bd6e2",
          cardArtworkIcon: "rockstargames-sites-legacyd6a600e1e3076a3eb04defd26746e0de",
          cardDownloadIcon: "rockstargames-sites-legacyd684744e5cd28e0fec26d728ba122ca8",
          cardIcon: "rockstargames-sites-legacya4df7cd077698e962c24736e36a45ddf",
          cardPlayIcon: "rockstargames-sites-legacyfd96249683f88970f0ca7231a1174193",
          cardShopIcon: "rockstargames-sites-legacyfcc1990039d0a53b7820dca2077a5d3e",
          heading: "rockstargames-sites-legacyfa2e0d743022e096961c5300754105b1",
          imageBackground: "rockstargames-sites-legacyc148e1365d5c651547931ef13f8628df",
          pillBtn: "rockstargames-sites-legacyddc407185e425f0139d10689a4a7f2a4",
          selected: "rockstargames-sites-legacybd967bb2d2679a7fb51e1044fba5bb4e",
          textContainer: "rockstargames-sites-legacyb4c8ad1b23c07afac25f31d46e2b3d24"
        },
        ce = ({
          title: e,
          subtitle: a,
          cardType: t,
          textColor: s,
          link: i,
          images: r,
          justifyContentHorizontally: n,
          justifyContentVertically: c,
          gradient: o
        }) => {
          const {
            track: l
          } = (0, u.useGtmTrack)(), m = (0, T.useGetCdnSource)(r?.mobile?.image?.full_src ?? r?.mobile?.image), g = (0, T.useGetCdnSource)(r?.desktop?.image?.full_src ?? m), f = {
            "--aspect-ratio-mobile": r?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": r?.desktop?.aspectRatio ?? "",
            justifyContent: n ?? ""
          }, p = {
            justifyContent: c ?? ""
          }, b = {
            color: s ?? "",
            fontWeight: 700
          }, k = {
            ...te(o),
            "--gradient-end-percentage": `${re(o?.endPercentage)}%`,
            "--gradient-angle": `${re(o?.angle)}deg`
          }, v = {
            mobile: m,
            desktop: g,
            alt: e
          };
          return (0, d.jsxs)(ae.NavLink, {
            to: i ?? "",
            className: ne.button,
            style: {
              ...f,
              ...k
            },
            onClick: () => {
              l({
                event: "card_click",
                element_placement: e?.toLowerCase()
              })
            },
            children: [("audio" === t || "video" === t) && (0, d.jsx)("div", {
              className: ne.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, d.jsx)("div", {
                    role: "button",
                    className: ne.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, d.jsx)("div", {
                    role: "button",
                    className: ne.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, d.jsx)("div", {
                    role: "button",
                    className: ne.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, d.jsx)("div", {
                    role: "button",
                    className: ne.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, d.jsx)("div", {
                    role: "button",
                    className: ne.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(t), (0, d.jsx)(V, {
              className: ne.imageBackground,
              image: v
            }), (0, d.jsxs)("div", {
              className: ne.textContainer,
              style: p,
              children: [(0, d.jsx)("p", {
                className: ne.text,
                style: b,
                children: (0, d.jsx)("span", {
                  children: a
                })
              }), (0, d.jsx)("h3", {
                className: ne.heading,
                style: b,
                children: (0, d.jsx)("span", {
                  children: e
                })
              })]
            })]
          })
        },
        oe = {
          buttonContainer: "rockstargames-sites-legacyed6e24a327462775002b2ef7f4bd4118",
          pillBtn: "rockstargames-sites-legacycda40abc6388540c6d56ec9033e94b61",
          relatedLinksContainer: "rockstargames-sites-legacyaea1edd882fdb86e7e58bb7cb1fee3b9",
          selected: "rockstargames-sites-legacycded5ac956b3489cbb0ad417df09e1e0"
        },
        de = ({
          title: e,
          id: a,
          buttons: t = [],
          className: s,
          ...i
        }) => {
          const {
            track: r
          } = (0, u.useGtmTrack)(), {
            ref: n,
            inView: c
          } = (0, f.useInView)({
            threshold: .6
          }), [o, m] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            c && !o && (r({
              event: "page_section_impression",
              element_placement: `related links group - ${i?._memoq?.title}`.toLowerCase()
            }), m(!0))
          }), [c]), t?.length ? (0, d.jsxs)("section", {
            className: [oe.relatedLinksContainer, s ?? ""].filter((e => e)).join(" "),
            id: a ?? "",
            ref: n,
            children: [(0, d.jsx)("h2", {
              children: e
            }), (0, d.jsx)("div", {
              className: oe.buttonContainer,
              children: t.map((e => (0, d.jsx)(ce, {
                title: e?.title,
                subtitle: e?.subtitle,
                cardType: e?.cardType,
                textColor: e?.textColor,
                link: e?.link,
                images: e?.images,
                justifyContentHorizontally: e?.justifyContentHorizontally,
                justifyContentVertically: e?.justifyContentVertically,
                gradient: e?.gradient
              }, e.key)))
            })]
          }) : null
        };
      var le, me = t(82849),
        ge = t(24162),
        fe = t(31445);

      function ue() {
        return ue = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t)({}).hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, ue.apply(null, arguments)
      }
      const pe = function(e) {
        return l.createElement("svg", ue({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), le || (le = l.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m15 18-6-6 6-6"
        })))
      };
      var be;

      function ke() {
        return ke = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t)({}).hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, ke.apply(null, arguments)
      }
      const ve = function(e) {
          return l.createElement("svg", ke({
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none"
          }, e), be || (be = l.createElement("path", {
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "m9 18 6-6-6-6"
          })))
        },
        he = {
          nextPillButton: "rockstargames-sites-legacyfecde23bcee84bcc1471dd17cb489f26",
          nextPillIcon: "rockstargames-sites-legacyc17181cca295443a8eb5c7a6a779138d",
          pillBtn: "rockstargames-sites-legacye3cda31f111d353a778c88ed66f1c544",
          pillButton: "rockstargames-sites-legacycf1b66cb6098d0c193d07128ad96918d",
          pills: "rockstargames-sites-legacya2f784e987ffe758b0f578d5ec371a36",
          previousPillButton: "rockstargames-sites-legacya0f3ef7b5df6c3bec46feadcb1222379",
          previousPillIcon: "rockstargames-sites-legacye44f1ced35c7806fa8592b93edf3cd14",
          selected: "rockstargames-sites-legacyc4f1c72a3d7b674638e6de1586cbb3d0",
          tabBackground: "rockstargames-sites-legacya090bf0d15f90245f6718deb2aa6dd16",
          tabButton: "rockstargames-sites-legacyf94782e892ce25e196e32e7b99a9266d",
          tabControl: "rockstargames-sites-legacyee2f948c8cdbaa179e237743a7fed85b",
          tabControlContainer: "rockstargames-sites-legacyd29afdb37670407698a75f676bd09ac8",
          tabIcon: "rockstargames-sites-legacyc7a9346aef47e925c8207d4c29dd62cf",
          tabIconActive: "rockstargames-sites-legacyc1e80852d004d7874de4d4d292a8ac35",
          tabIconWrapper: "rockstargames-sites-legacyc6b99457503c7d9222883634bcebc6b8",
          tabLabel: "rockstargames-sites-legacycb2ce3c45e864cc9dd006ade09d1c177",
          tabLabelActive: "rockstargames-sites-legacya0585b1b5b2432645dbe7206096ea963",
          withScroll: "rockstargames-sites-legacye1e4eea5783d71759acd15ccabe9f479"
        },
        ye = ({
          data: e,
          onClick: a,
          activeTab: t
        }) => {
          const {
            track: s
          } = (0, u.useGtmTrack)(), i = (0, l.useRef)(null), [r, n] = (0, l.useState)(!1), [c, o] = (0, l.useState)(!1), [m, g] = (0, l.useState)(!1), f = t => () => {
            s({
              event: "component_tab_click",
              text: e[t]?._memoq?.name?.toLowerCase() ?? void 0,
              element_placement: "image gallery"
            }), i.current && i.current.slideTo(t), a && a(t)
          }, p = e => {
            n(e.isEnd), o(e.isBeginning)
          };
          return (0, l.useEffect)((() => {
            const e = () => {
              i.current && ((i.current.wrapperEl.clientWidth || 0) > (i.current.el.clientWidth || 0) ? (g(!0), i.current.params.centeredSlides = !0, i.current.params.centeredSlidesBounds = !0) : (g(!1), i.current.params.centeredSlides = !1, i.current.params.centeredSlidesBounds = !1), p(i.current))
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, d.jsxs)("div", {
            className: he.tabControlContainer,
            children: [!c && m && (0, d.jsx)("div", {
              className: he.previousPillButton,
              children: (0, d.jsx)("button", {
                type: "button",
                className: [he.previousPillIcon, he.pillButton].join(" "),
                onClick: () => {
                  i.current && (i.current?.slidePrev(), o(i.current.isBeginning), s({
                    event: "carousel_previous",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, d.jsx)(pe, {})
              })
            }), (0, d.jsx)("div", {
              className: [he.tabControl, m ? he.withScroll : ""].join(" "),
              children: (0, d.jsx)(ge.RC, {
                onBeforeInit: e => i.current = e,
                onInit: p,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                onSlideChange: p,
                onResize: p,
                className: he.pills,
                children: e?.filter((({
                  isHidden: e
                }) => 1 !== e))?.map(((e, a) => (0, d.jsx)(ge.qr, {
                  children: (0, d.jsxs)(me.motion.button, {
                    type: "button",
                    className: [he.tabButton, m ? he.withScroll : ""].join(" "),
                    onClick: f(a),
                    "aria-label": e?.name,
                    "data-testid": "pill-button",
                    children: [e?.platform ? (0, d.jsx)("span", {
                      className: he.tabIconWrapper,
                      children: (0, d.jsx)("img", {
                        className: [he.tabIcon, a === t ? he.tabIconActive : ""].join(" "),
                        src: (0, fe.A)(e?.platform?.toLowerCase()) || "",
                        alt: e?.platform
                      })
                    }) : (0, d.jsx)("span", {
                      className: [he.tabLabel, a === t ? he.tabLabelActive : ""].join(" "),
                      children: e?.name?.toUpperCase()
                    }), a === t ? (0, d.jsx)(me.motion.div, {
                      className: he.tabBackground,
                      layoutId: "tabBackground"
                    }) : null]
                  }, `pill-tab-${e?.name}-${e?.key}`)
                }, `pill-tab-${e?.name}-${e?.key}`)))
              })
            }), !r && m && (0, d.jsx)("div", {
              className: he.nextPillButton,
              children: (0, d.jsx)("button", {
                type: "button",
                className: [he.nextPillIcon, he.pillButton].join(" "),
                onClick: () => {
                  i.current && (i.current?.slideNext(), n(i.current.isEnd), s({
                    event: "carousel_next",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, d.jsx)(ve, {})
              })
            })]
          })
        };
      var _e = t(44853);
      const xe = {
          animatePlaceholder: "rockstargames-sites-legacyf6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-sites-legacyc3684b80c99c860036d9337843a7be58",
          multiSourceContainer: "rockstargames-sites-legacya99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-sites-legacybc42c525ec0bd93df46e1999e278e9fb",
          pillBtn: "rockstargames-sites-legacyc79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-sites-legacyc53675ad15e2ef662362850daab33791"
        },
        je = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: s,
          lazy: i = !1,
          decoding: r = "auto",
          sizes: n = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [c, o] = (0, l.useState)(!1);
          return (0, d.jsxs)("div", {
            className: xe.multiSourceContainer,
            children: [!c && (0, d.jsx)("img", {
              className: [a, xe.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: s
            }), (0, d.jsx)("img", {
              className: [xe.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (m = e, n.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: s,
              onLoad: () => {
                o(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: r
            })]
          });
          var m
        };
      var Ne = t(2765),
        we = t.n(Ne);
      const Se = {
          closeBtn: "rockstargames-sites-legacyafe327a6bfea9e55c59f7f40787276bb",
          controlsWrapper: "rockstargames-sites-legacyee763bff685c3b26102c7657cfd1bfaf",
          galleryImage: "rockstargames-sites-legacye60d2674013c95e6bc812e00e7258e24",
          masonryDialog: "rockstargames-sites-legacya1ae3e7de41be7198c2ad68c8d4222f0",
          masonryDialogWrapper: "rockstargames-sites-legacya3094271b8486273139e380499406927",
          modal: "rockstargames-sites-legacya8fbf62ce23c1a65032bce5184d63baf",
          modalContainer: "rockstargames-sites-legacyc41f4294c7fde242d7cf078564d2e69a",
          modalControls: "rockstargames-sites-legacydd94cbb5e29c5998406db96640b0ab76",
          modalItem: "rockstargames-sites-legacya240109bff7b1baa2d388d154ed1934c",
          modalMultisourceImage: "rockstargames-sites-legacyf3e623b328218262f00707bcf285804a",
          modalNext: "rockstargames-sites-legacye3a70831b760b5fcb0b9343c62f210d3",
          modalPrevious: "rockstargames-sites-legacyf52bccecbb1a53b1c956a6e8f254dee0",
          modalSection: "rockstargames-sites-legacyf478d357c8b6b75ca8b5b48286d1e12a",
          overlay: "rockstargames-sites-legacyfd8515db7e49499bd602844e7b726ccf",
          pillBtn: "rockstargames-sites-legacye25ca7cdd8392458e825f214ab689988",
          selected: "rockstargames-sites-legacyf18da5c3982ac6dd52f034c76b4c18fc"
        },
        Ce = ({
          navigatePrevious: e,
          navigateNext: a,
          prevDisabled: t,
          nextDisabled: s
        }) => (0, d.jsxs)("div", {
          className: Se.modalControls,
          children: [(0, d.jsx)("button", {
            type: "button",
            "aria-label": "Previous",
            className: Se.modalPrevious,
            onClick: e,
            disabled: t
          }), (0, d.jsx)("button", {
            type: "button",
            "aria-label": "Next",
            className: Se.modalNext,
            onClick: a,
            disabled: s
          })]
        }),
        Te = ({
          images: e,
          selectedImage: a,
          onClose: t
        }) => {
          const [s, i] = (0, l.useState)(e.findIndex((e => e?.image?.sources === a?.image?.sources))), [r, n] = (0, l.useState)(0 === s), [c, o] = (0, l.useState)(s + 1 >= e?.length), {
            track: m
          } = (0, u.useGtmTrack)(), g = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, f = (0, l.useCallback)((() => {
            const a = (s + 1) % e.length;
            a !== s && s !== e.length - 1 && (i(a), n(!1)), o(a === e.length - 1), m({
              event: "modal_next",
              element_placement: "image gallery modal",
              card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: e[s]?.key,
              position: s,
              view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [s, e.length]), p = (0, l.useCallback)((() => {
            const a = (s - 1 + e.length) % e.length;
            a !== s && 0 !== s && (i(a), o(!1)), n(0 === a), m({
              event: "modal_previous",
              element_placement: "image gallery modal",
              card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: e[s]?.key,
              position: s,
              view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [s, e.length]), b = e[s];
          return (0, l.useEffect)((() => {
            m({
              event: "trackPageview",
              view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [s]), (0, l.useEffect)((() => {
            const a = a => {
              "ArrowLeft" === a.key ? p() : "ArrowRight" === a.key ? f() : "Escape" === a.key && (m({
                event: "modal_close",
                element_placement: "image gallery modal",
                card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
                card_id: e[s]?.key,
                position: s,
                view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
              }), t())
            };
            return window.addEventListener("keydown", a), () => {
              window.removeEventListener("keydown", a)
            }
          }), [s, p, f, t]), (0, d.jsx)(me.AnimatePresence, {
            children: (0, d.jsx)(me.motion.div, {
              role: "presentation",
              className: Se.overlay,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: g,
              children: (0, d.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: Se.masonryDialog,
                onClick: a => (a => {
                  if (!a.currentTarget) return;
                  const i = a.currentTarget.getBoundingClientRect();
                  (i.left > a.clientX || i.right < a.clientX || i.top > a.clientY || i.bottom < a.clientY) && (m({
                    event: "modal_close",
                    element_placement: "image gallery modal",
                    card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
                    card_id: e[s]?.key,
                    position: s,
                    view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
                  }), t()), a.preventDefault(), a.stopPropagation(), a.nativeEvent.stopImmediatePropagation()
                })(a),
                children: (0, d.jsx)(we(), {
                  active: !0,
                  focusTrapOptions: {
                    allowOutsideClick: !0
                  },
                  children: (0, d.jsxs)("div", {
                    className: Se.masonryDialogWrapper,
                    children: [(0, d.jsxs)(me.motion.div, {
                      className: Se.controlsWrapper,
                      initial: {
                        opacity: 0
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: {
                        ease: "easeIn",
                        duration: .3,
                        delay: .5
                      },
                      "aria-controls": "legacyImageGallery-liveRegion",
                      children: [(0, d.jsx)(Ce, {
                        navigatePrevious: p,
                        navigateNext: f,
                        prevDisabled: r,
                        nextDisabled: c
                      }), (0, d.jsx)("button", {
                        type: "button",
                        id: "close",
                        "aria-label": "close",
                        className: Se.closeBtn,
                        onClick: () => {
                          m({
                            event: "modal_close",
                            element_placement: "image gallery modal",
                            card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
                            card_id: e[s]?.key,
                            position: s,
                            view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
                          }), t()
                        }
                      })]
                    }), (0, d.jsx)(me.motion.div, {
                      className: Se.modal,
                      initial: {
                        opacity: 0,
                        scale: .5
                      },
                      animate: {
                        opacity: 1,
                        scale: 1
                      },
                      transition: g,
                      id: "legacyImageGallery-liveRegion",
                      "aria-live": "polite",
                      role: "region",
                      children: (0, d.jsx)(V, {
                        className: [Se.modalMultisourceImage, Se.galleryImage].join(" "),
                        style: {
                          width: "100%",
                          height: "100%",
                          margin: 0
                        },
                        image: {
                          alt: b?.image?._memoq?.alt || "",
                          ...b?.image
                        }
                      })
                    })]
                  })
                })
              })
            })
          })
        },
        Ie = ({
          image: e,
          item: a,
          handleImageClick: t
        }) => {
          const s = (0, T.useImageParser)(e?.image),
            i = e?.image.alt ?? e?.image._memoq?.alt;
          return (0, d.jsx)(me.motion.button, {
            className: "rockstargames-sites-legacyb7d22978314d8fd37226d991a0323771",
            onClick: () => t(e),
            variants: a,
            children: (0, d.jsx)(je, {
              imageUrl: s?.src?.desktop,
              className: "rockstargames-sites-legacyee0f0e1390a1b77a0f1b3629dc9d700a",
              alt: i,
              sizes: [320, 480, 768, 1024, 1440],
              style: {
                width: "100%",
                height: "auto"
              }
            })
          }, `grid-item-${e?.key}`)
        },
        Le = ({
          images: e = [],
          gallery: a = []
        }) => {
          const [t, s] = (0, l.useState)(null), {
            track: i
          } = (0, u.useGtmTrack)(), r = a.flat(2), {
            setBodyIsLocked: n
          } = (0, g.useBodyScrollable)("LegacyScreensModule"), c = e => {
            i({
              event: "card_click",
              element_placement: e?.image?.name ? e?.image?.name.toLowerCase() : void 0
            }), s(e), n(!0)
          }, o = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1
            }
          };
          return (0, d.jsx)("div", {
            className: "rockstargames-sites-legacye44f82d5b88e4f740c7ce9abff68ce32",
            children: (0, d.jsxs)(me.motion.div, {
              id: "rockstargames-sites-legacya0e51de80aa05abedb46d92d84d5aee3",
              className: "rockstargames-sites-legacye33a756146e1a476184e83e6cd65d218",
              variants: {
                hidden: {
                  opacity: 0
                },
                show: {
                  opacity: 1,
                  transition: {
                    duration: .75
                  }
                }
              },
              initial: "hidden",
              animate: "show",
              children: [e?.map((e => (0, d.jsx)(Ie, {
                image: e,
                item: o,
                handleImageClick: c
              }, e?.key))), t && (0, _e.createPortal)((0, d.jsx)(Te, {
                images: r,
                selectedImage: t,
                onClose: () => {
                  s(null), n(!1)
                }
              }), document.body)]
            }, `gridItemContainer_${e?.key}`)
          })
        },
        Pe = ({
          image: e,
          item: a,
          handleImageClick: t
        }) => {
          const s = (0, T.useImageParser)(e?.image),
            i = e?.image.alt ?? e?.image._memoq?.alt;
          return (0, d.jsx)(me.motion.button, {
            className: "rockstargames-sites-legacye3831406d3ed43e91ffdc761abd48baf",
            onClick: () => t(e),
            variants: a,
            initial: "hidden",
            animate: "show",
            children: (0, d.jsx)(je, {
              imageUrl: s?.src?.desktop,
              className: "rockstargames-sites-legacyb63c76769804a6445d5c61da08906d1d",
              alt: i,
              sizes: [320, 480, 768, 1024, 1440]
            })
          }, `single-item-${e.key}`)
        },
        Ee = ({
          images: e = [],
          gallery: a = []
        }) => {
          const [t, s] = (0, l.useState)(null), {
            track: i
          } = (0, u.useGtmTrack)(), r = a.flat(2), {
            setBodyIsLocked: n
          } = (0, g.useBodyScrollable)("LegacyScreensModule"), c = e => {
            i({
              event: "card_click",
              card_name: t?.image?.name.toLowerCase() ? t?.image?.name.toLowerCase() : void 0,
              card_id: e.key,
              link_url: void 0,
              element_placement: "image gallery"
            }), s(e), n(!0)
          }, o = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1,
              transition: {
                duration: .75
              }
            }
          };
          return (0, d.jsxs)("div", {
            className: "rockstargames-sites-legacyfd374db27ae0eab70581821b83cbfaee",
            children: [e?.map((e => (0, d.jsx)(Pe, {
              image: e,
              item: o,
              handleImageClick: c
            }, e?.key))), t && (0, _e.createPortal)((0, d.jsx)(Te, {
              images: r,
              selectedImage: t,
              onClose: () => {
                s(null), n(!1)
              }
            }), document.body)]
          })
        },
        ze = "rockstargames-sites-legacyd0b8474d6f8f230f681db9fd3b2c723e",
        Ve = ({
          sectionsPerPage: e,
          totalSections: a,
          currentPage: t,
          previousPage: s,
          nextPage: i,
          paginationPosition: r
        }) => {
          const n = [],
            c = Math.ceil(a / e),
            o = {
              "--pagination-position": `${r}`
            };
          for (let t = 1; t <= Math.ceil(a / e); t++) n.push(t);
          return c > 1 && (0, d.jsx)("div", {
            className: "rockstargames-sites-legacyc82112cdf0749d6ddbca1e8af8933ba5",
            style: o,
            children: (0, d.jsxs)("div", {
              className: "rockstargames-sites-legacycc27e700cde982e01f186d64a5b69ce0",
              style: {
                padding: 0
              },
              children: [(0, d.jsx)("div", {
                className: ze,
                children: (0, d.jsx)("div", {
                  role: "button",
                  onClick: s,
                  className: "rockstargames-sites-legacyfe520f32a0a3fb0a4a7199f7353a3dc7",
                  "aria-label": "Previous Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              }), (0, d.jsxs)("div", {
                className: "rockstargames-sites-legacydac90e667536b6e75d83f19985d38c02",
                children: [(0, d.jsx)("span", {
                  children: t
                }), (0, d.jsx)("span", {
                  className: "rockstargames-sites-legacyeedf8db50f0cec80ea4adc7215579bbc"
                }), (0, d.jsx)("span", {
                  children: c
                })]
              }), (0, d.jsx)("div", {
                className: ze,
                children: (0, d.jsx)("div", {
                  role: "button",
                  onClick: i,
                  className: "rockstargames-sites-legacyf855de663e5b3990846c34b41b6314b5",
                  "aria-label": "Next Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              })]
            })
          })
        },
        Be = {
          galleryWrapper: "rockstargames-sites-legacyb3a45082739d104c5a97b65997334b5d",
          gridItemWrapper: "rockstargames-sites-legacyd5d1166080466c13c398548f61a1dfac",
          heading: "rockstargames-sites-legacyb5491476c815e5726e194b60dc8c95eb",
          noImages: "rockstargames-sites-legacyc770869dc00e35d56a8e50efe3abd4aa",
          noImagesContainer: "rockstargames-sites-legacyc8f32e7cc9d0f30be6ecff9b076cca9a",
          pillBtn: "rockstargames-sites-legacye2bf9ba86281f6148e2f9af8ea2b88a5",
          selected: "rockstargames-sites-legacybccc0cb9fc037e7151fd6ebd3f490f4e",
          tabControl: "rockstargames-sites-legacyc8b979b8dc1ff190926fc1450d4f7812",
          unsupportedSection: "rockstargames-sites-legacyf425b5f74300c8aa17539840bfe17b0f"
        },
        Me = () => (0, d.jsx)("div", {
          className: Be.noImagesContainer,
          children: (0, d.jsx)("div", {
            className: Be.noImages,
            children: (0, d.jsx)("div", {
              className: Be.heading,
              children: (0, d.jsxs)("span", {
                className: Be.text,
                children: [(0, d.jsx)("h3", {
                  children: "Unsupported Section Type"
                }), (0, d.jsx)("p", {
                  children: "This section type is not supported."
                })]
              })
            })
          })
        }),
        De = ({
          sections: e = [],
          paginationSettings: a
        }) => {
          const t = [],
            [s] = (0, l.useState)(a?.sectionsPerPage || 4),
            [i, r] = (0, l.useState)(1),
            n = i * s,
            c = n - s,
            o = e.slice(c, n);
          return 0 === e?.length ? (0, d.jsx)("div", {
            className: Be.gallerWrapper,
            children: (0, d.jsx)("div", {
              className: Be.noImages,
              children: (0, d.jsx)("div", {
                className: Be.heading,
                children: (0, d.jsx)("span", {
                  className: Be.text,
                  children: "No images available"
                })
              })
            })
          }) : (e?.map((e => t.push(e?.images))), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(me.motion.div, {
              className: Be.galleryWrapper,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                ease: "easeIn",
                duration: .5
              },
              style: {
                "--sections-per-page": s
              },
              children: o?.map(((e, a) => {
                let s;
                if ("1x1" === e?.type) s = Le;
                else {
                  if ("2x2" !== e?.type) return (0, d.jsx)(Me, {}, `unsupported-section-${a}`);
                  s = Ee
                }
                return (0, d.jsx)(s, {
                  images: e?.images,
                  gallery: t
                }, `grid-section-${e?.type}-${a})}`)
              }))
            }), a?.paginationEnabled && (0, d.jsx)(Ve, {
              sectionsPerPage: s,
              totalSections: e.length,
              currentPage: i,
              previousPage: () => {
                r(1 !== i ? i - 1 : Math.ceil(e.length / s))
              },
              nextPage: () => {
                i !== Math.ceil(e.length / s) ? r(i + 1) : r(1)
              },
              paginationPosition: a?.paginationPosition || "center"
            })]
          }))
        },
        Ae = {
          actionBar: "rockstargames-sites-legacyc683d51d8e7b2e1fea91f6ac62e44f18",
          activeTabButton: "rockstargames-sites-legacydef94dba3dac9a256bbbff14fc6dcaba",
          heading: "rockstargames-sites-legacyc66aef69aceb354b7b240000f5791d16",
          helveticaNow: "rockstargames-sites-legacyeeac47e8240894c3a79ec83059a78d75",
          pillBtn: "rockstargames-sites-legacyfa4067f7c212b9182e66f2bc93c65cfd",
          rdrUltra: "rockstargames-sites-legacydc3d525a4168030c7699333ec998ac0b",
          sectionContent: "rockstargames-sites-legacyf4bfa37ad49decc3c7198d5a7e2572e9",
          sectionWrapper: "rockstargames-sites-legacyd12e654d94bea17fc29f0b0bd5c8fe71",
          selected: "rockstargames-sites-legacycba40dadb6c47b405d64798809682d81",
          tabBackground: "rockstargames-sites-legacydca40305530289c575e9c4749fde11e0",
          tabButton: "rockstargames-sites-legacye4eeeda9b426784c1091e4caa7a5f3e2",
          tabControl: "rockstargames-sites-legacyab100837ebbe0709a8d81fc9b0d61ff9",
          tabLabel: "rockstargames-sites-legacya5ba429588b87c0b99c160c6c7fcc3a0",
          universalCyrillic: "rockstargames-sites-legacyfedf88ffb43e3f74d211214ca8fa4f80"
        },
        $e = O((({
          imageGallery: e
        }) => {
          const {
            track: a
          } = (0, u.useGtmTrack)(), {
            ref: t,
            inView: s
          } = (0, f.useInView)({
            threshold: .6
          }), [i, r] = (0, l.useState)(!1), [n, c] = (0, l.useState)(0), o = e?.customHeaderFont ? Ae[e?.customHeaderFont] : "", {
            collections: m,
            updateGalleryCollections: g
          } = (() => {
            const e = (0, l.useContext)(S);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          (0, l.useEffect)((() => {
            g(e?.collections)
          }), [e]), (0, l.useEffect)((() => {
            s && !i && (a({
              event: "page_section_impression",
              element_placement: `image gallery - ${m[n]?._memoq?.name}`.toLowerCase()
            }), r(!0))
          }), [s]);
          const p = m?.length > 0 && m.some((e => e?.name || e?.platform));
          return (0, d.jsx)("section", {
            className: Ae.sectionWrapper,
            ref: t,
            children: (0, d.jsxs)("div", {
              className: Ae.sectionContent,
              children: [(0, d.jsxs)("div", {
                className: Ae.actionBar,
                children: [(0, d.jsx)("h2", {
                  className: [Ae.heading, o].join(" "),
                  children: e?.title
                }), p && (0, d.jsx)(ye, {
                  data: m,
                  onClick: e => {
                    c(e)
                  },
                  activeTab: n
                })]
              }), m[n]?.sections && (0, d.jsx)(De, {
                sections: m[n]?.sections,
                paginationSettings: e?.paginationSettings
              }, m[n]?.name)]
            })
          })
        }));
      var Fe = t(84343);
      const Oe = ({
          id: e = null,
          ids: a = null,
          setTitleDataPath: t = null,
          sync: s = !1
        }) => {
          const i = a ?? [e],
            {
              data: r
            } = (0, g.useQuery)(Fe.TinaModulesInfo, {
              variables: {
                ids: i,
                sync: s
              },
              setTitleDataPath: t,
              skip: !i.length
            });
          return r?.tinaModulesInfo ?? null
        },
        Ge = k((({
          components: e = {},
          id: a = null,
          ids: t = null
        }) => {
          const s = Oe({
              id: a,
              ids: t
            }),
            i = s?.[0]?.tina;
          return i ? (0, d.jsx)(d.Fragment, {
            children: s.map((({
              tina: a
            }, t) => (0, d.jsx)(T.TinaParser, {
              components: e,
              tina: a,
              componentProps: {
                tinaModulesInfo: s
              }
            }, t)))
          }) : null
        }), {
          header: null
        });
      var Re = t(15076),
        He = t.n(Re);
      const Ue = ({
        attributes: e = {},
        children: a,
        className: t = "",
        id: s = "",
        style: i = {}
      }) => (0, d.jsx)("span", {
        className: Y()(t, e?.className, "rockstargames-sites-legacyc650a7a1e761d6a9f2d6ce1cd8d6f330"),
        id: s,
        style: (0, g.safeStyles)(i ?? e?.style ?? {}),
        dangerouslySetInnerHTML: {
          __html: He().unescape(a)
        }
      });
      var qe = t(64740);
      const We = ({
          children: e,
          ...a
        }) => {
          const [t, s] = (0, l.useState)(!1);
          return (0, d.jsx)(qe.zb, {
            ...a,
            onReady: () => {
              document.fonts.ready.then((() => {
                s(!0)
              }))
            },
            children: e
          })
        },
        Xe = {
          badge: "rockstargames-sites-legacyb7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-legacyd08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-legacyc7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-legacyce8632d7464b556158a1d549f653498c"
        },
        Ke = ({
          wrapper: e,
          children: a,
          role: t,
          splitter: s
        }) => s || t ? e(a) : a,
        Ye = ({
          badge: e,
          badgeType: a,
          role: s,
          splitter: i
        }) => {
          const r = [];
          return i ? e.split(i).map(((e, a) => r.push(e))) : r.push(e), (0, d.jsxs)(Ke, {
            splitter: i,
            role: s,
            wrapper: e => (0, d.jsx)("div", {
              className: `${Xe.badge} ${a?Xe[a]:""} `,
              children: e
            }),
            children: [(0, d.jsx)(d.Fragment, {
              children: s && (0, d.jsx)(V, {
                image: {
                  alt: s,
                  desktop: t(65287)(`./${s}.png`)
                }
              })
            }), (0, d.jsx)(We, {
              className: `${i||s?"":Xe.badge} ${a?Xe[a]:""}`,
              min: 8,
              max: 1e3,
              mode: i || s ? "single" : "multi",
              children: r[0]
            }), (0, d.jsx)(d.Fragment, {
              children: r.shift() && i && r.length >= 1 && (0, d.jsx)(We, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: r.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Qe = ({
          hero: e,
          children: a
        }) => e ? (0, d.jsx)("div", {
          className: "rockstargames-sites-legacya429886d721550d02521f7f5c9de7f5b",
          children: a
        }) : a,
        Ze = ({
          badge: e = null,
          badgeType: a,
          discountTxt: t,
          splitter: s,
          image: i,
          style: r,
          className: n = "",
          attributes: c = {},
          role: o,
          hero: m = !1
        }) => {
          const f = (0, l.useMemo)((() => {
            if (i?.badge || i?.discountTxt || e || t) return (0, d.jsx)(Ye, {
              badge: i?.discountTxt ?? i?.badge ?? e ?? t,
              badgeType: a,
              splitter: i?.splitter ?? s,
              role: i?.role ?? o
            })
          }), [e, a, t, i, o, s]);
          return (0, d.jsx)(Qe, {
            hero: m,
            children: (0, d.jsx)("figure", {
              children: (0, d.jsxs)("div", {
                className: Y()("rockstargames-sites-legacyd9ac792281efe15bcd4589b028d1c27b", m ? "rockstargames-sites-legacye430c4662cd185f58259d4a8d8b322de" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, n),
                style: (0, g.safeStyles)({
                  ...r,
                  ...c?.style
                }),
                ...c,
                children: [(0, d.jsx)(V, {
                  image: i,
                  className: n
                }), f, i?.caption && (0, d.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: i.caption
                  }
                })]
              })
            })
          })
        };
      var Je = t(11206);
      const ea = {
        active: "rockstargames-sites-legacyfdc2ec652cbb7469f602e73cd10ef997",
        deprecatedCarousel: "rockstargames-sites-legacya531264d5417d2198d4e14aa72335af1",
        dotsSlide: "rockstargames-sites-legacyb8fd11776fba32f9663bbb6292a5c901",
        hideLarge: "rockstargames-sites-legacya6c9173aa5a8fe31a062251352a9d711",
        hideMobile: "rockstargames-sites-legacyf3445a74a067bd92ff94b521cb0bdc07",
        imageAreaBg: "rockstargames-sites-legacydcb2b41007683141579697bb4a8658ba",
        img: "rockstargames-sites-legacyd8e66128b4fef1ea164350cd535e2d68",
        infinite_false: "rockstargames-sites-legacyb85758ee99a52896b94130d002e821c7",
        panorama: "rockstargames-sites-legacyff63f8addff8d036ca0b65fa495e1653",
        perico: "rockstargames-sites-legacyaa50a9164fd0296b1196d441233cc348",
        renderedWithChildren: "rockstargames-sites-legacyad7696edafa3086969e7aaece4f09b4f",
        siblings: "rockstargames-sites-legacyf4c50c0daadf81cd292587fcfea1339d",
        "swiper-horizontal": "rockstargames-sites-legacyb823bbff86d38da8cb611a7c3367d8fe",
        "swiper-preloader-spin": "rockstargames-sites-legacyc39b97f81c73d75dc4e013fde14aff18",
        "swiper-scrollbar-disabled": "rockstargames-sites-legacyee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-vertical": "rockstargames-sites-legacyd29252354bbbfe413678daff5223169d",
        track: "rockstargames-sites-legacyc7c21df4f7f83a73f79dd7913aa87832"
      };
      var aa = t(93935);
      const ta = {
          gtao: "rockstargames-sites-legacyf66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-legacydc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-legacyd4d968b41ef87926b0b6318e8647738b"
        },
        sa = ({
          style: e,
          className: a = "",
          type: t = ""
        }) => (0, d.jsx)("div", {
          style: e,
          className: [ta.hr, ta[t], a].join(" ")
        }),
        ia = "rockstargames-sites-legacyacd27eff2209196752622710f7b27558",
        ra = ({
          to: e,
          children: a
        }) => e ? (0, d.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        na = ({
          item: e,
          className: a = ""
        }) => (0, d.jsxs)("div", {
          className: Y()("rockstargames-sites-legacyf8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, d.jsx)(ra, {
            to: e?.href ?? e?.to,
            children: (0, d.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map(((e, a) => e?.unorderedList ? (0, d.jsx)(aa.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, d.jsx)(V, {
            image: e.image,
            className: e?.className
          }, a) : e?.separator ? (0, d.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, d.jsx)(sa, {})
          }, a) : (0, d.jsx)("p", {
            children: (0, d.jsx)("span", {
              className: ia,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, a))) : (0, d.jsx)("span", {
            className: ia,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        }),
        ca = ({
          item: e
        }) => (0, d.jsxs)("div", {
          children: [(0, d.jsx)(Ze, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: Y()(ea.img, e?.className)
          }), (e?.title || e?.description) && (0, d.jsx)(na, {
            item: e
          })]
        }),
        oa = ({
          current: e,
          total: a
        }) => (0, d.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": a
          },
          children: (0, d.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        da = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: s = !1,
          className: i = "",
          renderTemplate: r = "standard",
          text: n,
          customSpaceBetween: c = null,
          centerSlides: o = !0,
          centeredSlidesBounds: m = !1
        }) => {
          const [g, f] = (0, l.useState)(0), u = (0, l.useMemo)((() => e && Array.isArray(e) ? e.map((() => (0, Je.A)())) : null), [e]);
          if (!(a && 0 !== a?.length || e)) return null;
          const p = {
            0: {
              spaceBetween: c ?? 16
            },
            1024: {
              spaceBetween: c ?? 18
            },
            1920: {
              spaceBetween: c ?? 20
            },
            2560: {
              spaceBetween: c ?? 22
            }
          };
          return (0, d.jsxs)("div", {
            className: Y()(ea.deprecatedCarousel, ea[r], ea[`infinite_${!s}`], e ? ea.renderedWithChildren : "", i),
            style: t,
            children: [(0, d.jsxs)(ge.RC, {
              loop: !s,
              grabCursor: !0,
              centeredSlides: o,
              centerInsufficientSlides: o,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: p,
              onUpdate: () => f(0),
              onActiveIndexChange: e => f(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, d.jsx)("div", {
                className: ea.trackWrapper,
                children: (0, d.jsxs)("div", {
                  className: ea.track,
                  children: [a?.map((e => (0, d.jsx)(ge.qr, {
                    children: (0, d.jsx)(ca, {
                      item: e
                    })
                  }, e.key))), e && e.map(((e, a) => e && (0, d.jsx)(ge.qr, {
                    children: e
                  }, u && u[a])))]
                })
              }), (0, d.jsx)(oa, {
                current: g,
                total: e ? e.length : a.length
              })]
            }), (n?.title || n?.description) && (0, d.jsx)(na, {
              item: n
            })]
          })
        },
        la = {
          carouselTitle: "rockstargames-sites-legacye9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-legacyfabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-legacyac767e959939b4d56b2358cb263d07ad"
        },
        ma = ({
          to: e,
          children: a
        }) => e ? (0, d.jsx)("a", {
          href: e,
          target: "_blank",
          children: a
        }) : a,
        ga = ({
          items: e = [],
          text: a = {},
          style: t,
          className: s = "",
          id: i = null
        }) => e?.length ? (0, d.jsxs)("div", {
          id: i,
          "data-testid": `carousel${s&&`-${s}`}-group-of-items`,
          children: [(0, d.jsx)(da, {
            style: t,
            className: [s, la.carouselWrapper].join(" "),
            children: e.map((e => (0, d.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, d.jsx)(Ze, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [la.img, e?.className].join(" ")
              }), e.title && (0, d.jsx)(ma, {
                to: e?.to,
                children: (0, d.jsx)("h4", {
                  className: la.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, d.jsx)("span", {
                className: la.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title)))
          }), a?.title || a?.description ? (0, d.jsx)("div", {
            className: la.padding,
            style: a?.style ?? {},
            children: (0, d.jsx)(na, {
              item: a
            })
          }) : ""]
        }) : null,
        fa = ({
          impressionTracking: e,
          gtm: a = {},
          children: t
        }) => e?.shouldTrack ? (0, d.jsx)(T.InViewTracker, {
          threshold: e?.threshold,
          gtm: a,
          children: t
        }) : t,
        ua = ({
          to: e,
          children: a
        }) => e ? (0, d.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        pa = ({
          item: e
        }) => e?.videoId ? (0, d.jsx)(L(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, d.jsx)(Ze, {
          image: e?.image,
          badge: e?.badge ?? e?.image?.badge,
          badgeType: "badge3",
          role: e?.role ?? e?.image?.role,
          splitter: e?.splitter ?? e?.image?.splitter,
          ariaLabel: e?.image?.ariaLabel,
          style: e?.style,
          className: e?.className
        }),
        ba = ({
          items: e,
          style: a = {},
          className: t = "",
          id: s = null
        }) => (0, d.jsx)("div", {
          style: a,
          className: Y()("rockstargames-sites-legacyd38af92e8657708abd3dc5295e62476c", t),
          id: s,
          "data-testid": "standard-group-of-items",
          children: e.map((e => (0, d.jsx)(fa, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, d.jsx)(ua, {
              to: e?.to,
              children: (0, d.jsxs)("div", {
                className: Y()("rockstargames-sites-legacya9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, d.jsx)(pa, {
                  item: e
                }) : "", e.title || e.description ? (0, d.jsx)(na, {
                  item: e,
                  className: "rockstargames-sites-legacybc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key)))
        }),
        ka = ({
          children: e = null,
          text: a = {},
          items: t = [],
          renderTemplate: s = "",
          style: i = {},
          id: r = null,
          ...n
        }) => {
          if (!t.length) return null;
          switch (s) {
            case "carousel":
              return (0, d.jsx)(ga, {
                text: a,
                items: t,
                style: i,
                id: r,
                children: e
              });
            case "carousel-panorama":
              return (0, d.jsx)(ga, {
                text: a,
                items: t,
                style: i,
                className: "panorama",
                id: r,
                children: e
              });
            default:
              return (0, d.jsx)(ba, {
                items: t,
                style: i,
                id: r,
                ...n,
                children: e
              })
          }
        };
      var va = t(13897);
      const ha = ({
          text: e,
          style: a
        }) => (0, d.jsx)("div", {
          className: "rockstargames-sites-legacyc08a001134624b9ceb275eae413bfd3d",
          style: a,
          children: e
        }),
        ya = ({
          hasTag: e = !1,
          tag: a = null,
          tagStyle: t = null,
          badges: s = []
        }) => e && a ? (0, d.jsx)("div", {
          className: "rockstargames-sites-legacyceb75d3391774f84e920e955d7a6853f",
          "data-tag-style": t,
          children: a
        }) : e && s && s?.length > 0 ? (0, d.jsx)("div", {
          className: "rockstargames-sites-legacyf83b84453472e937d57011680a564ec6",
          children: s.map((e => (0, d.jsx)(ha, {
            ...e
          }, e?.text)))
        }) : null,
        _a = {
          content: "rockstargames-sites-legacyf418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-sites-legacyca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: xa,
          Animations: ja
        } = i,
        {
          variants: Na,
          transitions: wa
        } = ja,
        Sa = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: s,
          description: i,
          fadesOut: r = !1,
          badges: n
        }) => (0, d.jsx)(xa, {
          initial: Na.fade.out.initial,
          animate: {
            opacity: r ? 0 : 1
          },
          transition: wa.fade,
          className: _a.textOverlay,
          children: (0, d.jsxs)("div", {
            className: _a.content,
            children: [(0, d.jsx)(ya, {
              hasTag: a,
              tag: t,
              badges: n?.filter((e => e?.isPrimary))
            }), (0, d.jsx)("h3", {
              children: e
            }), s && i && (0, d.jsx)("div", {
              className: _a.description,
              children: i
            })]
          })
        }),
        Ca = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          tag: s,
          tagStyle: i,
          discountPrice: r,
          originalPrice: n,
          setPricingContainerHeight: c = null
        }) => {
          const o = (0, l.createRef)();
          return (0, l.useEffect)((() => {
            const e = () => {
              o.current && null !== c && c(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, d.jsxs)("div", {
            className: "rockstargames-sites-legacye419c6cd31abd635e742e635dcfd8316",
            ref: o,
            "data-show-background": t,
            children: [a && (0, d.jsx)("span", {
              className: "rockstargames-sites-legacybf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-legacyd98da8fc9dce6d600db165351d3a3fed",
              children: [(0, d.jsx)("span", {
                className: "rockstargames-sites-legacya5717338db21efc7eb765011d68ea73d",
                "data-tag-style": i || "free",
                children: s
              }), (0, d.jsx)("span", {
                className: "rockstargames-sites-legacycdaaa9655747e4d129d6c22080bdd33d",
                children: r
              }), (0, d.jsx)("span", {
                className: "rockstargames-sites-legacyaf3db4eb6d14c1f4ee5689b4e6386715",
                children: n
              })]
            })]
          })
        };
      var Ta = t(80391),
        Ia = t(28985),
        La = t(47240),
        Pa = t(81715),
        Ea = t(49429),
        za = t(32903),
        Va = t(85719),
        Ba = t(55815),
        Ma = t(66787),
        Da = t(11008);
      const Aa = {
          ps5: La,
          ps4: Ia,
          ps: Ta,
          xboxone: Ea,
          xbox: za,
          xboxseriesxs: Pa,
          nintendoswitch: Da,
          pc: Va,
          googleplay: Ma,
          applestore: Ba
        },
        $a = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          platformOptions: s,
          setPricingContainerHeight: i = () => {},
          expandedView: r
        }) => {
          const n = (0, l.createRef)();
          return (0, l.useEffect)((() => {
            const e = () => {
              n.current && null !== i && i(n.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [n]), (0, d.jsxs)("div", {
            className: "rockstargames-sites-legacyee81f54f31ab2cd10a67313b9689bf96",
            ref: n,
            "data-show-background": t,
            "data-show-platforms": !r,
            children: [a && (0, d.jsx)("span", {
              className: "rockstargames-sites-legacyd4ab460f0a204a588d4d4dd0a110ca36",
              children: e
            }), s?.platformsAndLinks && (0, d.jsxs)("div", {
              className: "rockstargames-sites-legacyafdc85bfd80cae52d4c1b422f1294962",
              children: [(0, d.jsx)(ya, {
                hasTag: s?._memoq?.platformTag,
                tag: s?._memoq?.platformTag,
                tagStyle: s?._memoq?.platformTagStyle
              }), (0, d.jsx)("div", {
                className: "rockstargames-sites-legacyc252412353007d9f02f19a754430b14b",
                children: s.platformsAndLinks.map((({
                  platform: e,
                  buttonText: a
                }) => (0, d.jsx)("img", {
                  className: "rockstargames-sites-legacyff5cde8853312ffb892472d100c684cd",
                  alt: a,
                  src: Aa[e]
                }, e)))
              })]
            })]
          })
        },
        Fa = ({
          textOverlayProps: e,
          title: a,
          size: t,
          expandedView: s = !1,
          children: i,
          pricingOptions: r,
          setPricingContainerHeight: n,
          isCoverCard: c = !1,
          platformOptions: o
        }) => {
          const [m] = (({
            hasTextOverlay: e,
            tag: a,
            collapsedHasTag: t,
            description: s,
            collapsedHasDescription: i,
            size: r,
            title: n,
            expandedView: c,
            badges: o
          }) => {
            const [m, g] = (0, l.useState)(null), f = (0, l.useMemo)((() => {
              if (!e) return null;
              const l = "sm" !== r && i;
              return (0, d.jsx)(Sa, {
                title: n,
                hasTag: t,
                tag: a,
                hasDescription: l,
                description: s,
                fadesOut: c,
                badges: o
              })
            }), [e, a, t, s, i, r, n, c, o]);
            return (0, l.useEffect)((() => {
              g(f)
            }), [f]), [m, g]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: s
          }), g = void 0 !== r?.hasPricingOptions || null !== o;
          return (0, d.jsxs)("header", {
            className: "rockstargames-sites-legacycab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": c,
            "data-expanded-view": s,
            children: [l.Children.map(i, (e => (0, l.cloneElement)(e, {
              title: a,
              size: t,
              expandedView: s
            }))), m, g && (0, d.jsxs)(d.Fragment, {
              children: [!0 === o?.hasPlatformOptions && (0, d.jsx)($a, {
                title: a,
                platformOptions: o,
                pricingOptions: r,
                setPricingContainerHeight: n,
                expandedView: s
              }), !0 === r?.hasPricingOptions && (0, d.jsx)(Ca, {
                title: a,
                tag: r?._memoq?.tag,
                tagStyle: r?._memoq?.tagStyle || "free",
                discountPrice: r?._memoq?.discountPrice,
                originalPrice: r?._memoq?.originalPrice,
                setPricingContainerHeight: n
              })]
            })]
          })
        },
        {
          LiteMotion: Oa,
          Animations: Ga
        } = i,
        {
          transitions: Ra
        } = Ga,
        Ha = ({
          components: e,
          payload: a,
          prod: t,
          size: s,
          title: i,
          initial: r = "initial",
          animate: n = "animate",
          variants: c,
          type: o = null,
          context: m = null,
          textOverlayProps: f,
          className: u,
          children: p,
          theme: b = "none",
          id: k,
          pricingOptions: v,
          pricingContainerHeight: h,
          isCoverCard: y,
          platformOptions: _,
          isProductCard: x = !1
        }) => {
          const j = (0, l.useRef)(),
            N = (0, l.useRef)(),
            {
              tag: w,
              expandedHasTag: S,
              badges: C
            } = f;
          He().set(a, "meta.prod", t);
          const I = p?.props?.images.length > 0;
          let L = (0, d.jsx)("h1", {
            children: i
          });
          return y && (L = null), (0, l.useEffect)((() => {
            const e = () => {
              j.current && j.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (j.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, d.jsx)(g.DataLayerProvider, {
            card_id: k,
            card_name: i?.toLowerCase(),
            children: (0, d.jsx)(va.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === o ? j : N,
              children: (0, d.jsxs)(Oa, {
                ref: j,
                initial: r,
                animate: n,
                variants: c.expanded,
                transition: Ra.cardOpen,
                className: Y()("rockstargames-sites-legacyc2289ce1bf0de6ad8a4a8ce7e90a4b66", u),
                "data-type": o,
                "data-size": s,
                "data-product": x,
                "data-covercard": y || !1,
                "data-context": m,
                style: {
                  "--product-card-pricing-info-height": `${h||0}px`
                },
                children: [I && (0, d.jsx)(Fa, {
                  size: s,
                  title: i,
                  textOverlayProps: f,
                  expandedView: !0,
                  pricingOptions: v,
                  platformOptions: _,
                  isCoverCard: y,
                  children: p
                }), (0, d.jsxs)(Oa, {
                  ref: N,
                  className: "rockstargames-sites-legacye461568802b56e8c21b8b82d9c3a1fb4",
                  variants: c.expandedContents,
                  transition: Ra.afterCardOpen,
                  "data-theme": b,
                  children: [(0, d.jsxs)("div", {
                    className: "rockstargames-sites-legacyc4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, d.jsx)(ya, {
                      hasTag: S,
                      tag: w,
                      badges: C
                    }), L, x && (0, d.jsxs)(d.Fragment, {
                      children: [!0 === _?.hasPlatformOptions && (0, d.jsx)("div", {
                        className: "rockstargames-sites-legacycd635452588eda421bdea19f00660efc",
                        children: (0, d.jsx)(ya, {
                          hasTag: _?.hasPlatformOptions,
                          tag: _?._memoq?.platformTag,
                          tagStyle: _?._memoq?.platformTagStyle
                        })
                      }), !0 === v?.hasPricingOptions && (0, d.jsx)(Ca, {
                        title: i,
                        showTitle: !1,
                        showBackground: !1,
                        tag: v?._memoq?.tag,
                        tagStyle: v?.tagStyle || "free",
                        discountPrice: v?._memoq?.discountPrice,
                        originalPrice: v?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, d.jsx)(T.TinaParser, {
                    components: e,
                    tina: {
                      payload: a
                    }
                  })]
                })]
              })
            })
          })
        };
      var Ua = t(12294);
      const qa = (0, m.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            description: "The aria label used for cards when they have platforms.",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            description: "The aria label used for cards when they have a tag.",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            description: "The aria label used for cards when they have platforms and a tag.",
            defaultMessage: "{tag} {title} on {platformList}"
          },
          card_learn_more: {
            id: "card_learn_more",
            description: "Label for learn more buttons.",
            defaultMessage: "Learn More"
          },
          events_deck_next_aria_label: {
            id: "events_deck_next_aria_label",
            description: "Aria label for the next button on the events deck (modal closed - multiple slides visible at a time)",
            defaultMessage: "Next Page of Events"
          },
          events_deck_previous_aria_label: {
            id: "events_deck_previous_aria_label",
            description: "Aria label for the previous button on the events deck (modal closed - multiple slides visible at a time)",
            defaultMessage: "Previous Page of Events"
          },
          events_deck_modal_next_aria_label: {
            id: "events_deck_modal_next_aria_label",
            description: "Aria label for the next button on the events deck (modal open - one event slide visible at a time)",
            defaultMessage: "Next event"
          },
          events_deck_modal_previous_aria_label: {
            id: "events_deck_modal_previous_aria_label",
            description: "Aria label for the previous button on the events deck (modal open - one event slide visible at a time)",
            defaultMessage: "Previous event"
          },
          events_deck_modal_close_label: {
            id: "events_deck_modal_close_label",
            description: "Aria label for the close button on the modal",
            defaultMessage: "Close"
          },
          events_deck_paging_label: {
            id: "events_deck_paging_label",
            description: "Aria label for which page the user is on in the deck",
            defaultMessage: "On page {currentPage} of {totalPages}"
          },
          events_deck_modal_group_label: {
            id: "events_deck_modal_group_label",
            description: "Aria label for the group/modal which contains the event details",
            defaultMessage: "Event Details"
          }
        }),
        Wa = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第 {currentPage} 页（共 {totalPages} 页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        Xa = (0, m.withIntl)((({
          id: e,
          position: a,
          title: t,
          size: s = "md",
          sectionTitle: i = "",
          expandedType: r = null,
          modalProps: n = {
            content: null,
            className: "",
            contentClassName: ""
          },
          className: c,
          children: o,
          isProductCard: g,
          cardIds: f = null,
          theme: p = "none",
          isCoverCard: b,
          platformOptions: k
        }) => {
          const {
            formatMessage: v,
            formatList: h
          } = (0, m.useIntl)(), [y, _] = (0, ae.useSearchParams)(), x = (0, l.useRef)(null), [, j] = (0, Ua.h)(), {
            track: N
          } = (0, u.useGtmTrack)(), [w, S] = (0, l.useState)(!1), C = window.location.href.includes("cms5"), T = () => {
            S(!1), j(null), C || _({}), N({
              event: "trackPageview"
            })
          }, I = () => {
            if (!n?.content || !x.current || !r || "linkout" === r) return;
            const i = x.current,
              c = window.getComputedStyle(i),
              o = parseInt(c.getPropertyValue("width"), 10),
              d = parseInt(c.getPropertyValue("height"), 10),
              l = i.getBoundingClientRect(),
              {
                content: m,
                className: g,
                contentClassName: u
              } = n,
              b = "fob" === s ? "fob" : "default";
            j({
              content: m,
              onClose: T,
              rect: l,
              width: o,
              height: d,
              className: g,
              contentClassName: u,
              fadeIn: !1,
              cardIds: f,
              theme: p,
              activeId: e,
              gtm: {
                card_id: e,
                card_name: t?.toLowerCase(),
                position: a
              },
              aspectRatio: b,
              cardDimensions: {
                size: s,
                type: r
              }
            }), N({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: e,
              card_name: t?.toLowerCase(),
              position: a
            })
          };
          (0, l.useEffect)((() => {
            w && I()
          }), [w]), (0, l.useEffect)((() => {
            S(y.get("info") === e)
          }), [y.get("info"), e]);
          const L = (0, l.useMemo)((() => {
            const e = k?._memoq?.platformTag || "";
            if (k?.platformsAndLinks?.length > 0) {
              const a = k?.platformsAndLinks?.map((({
                  buttonText: e
                }) => e)),
                s = h(a, {
                  type: "conjunction"
                });
              return e ? v(qa.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: s
              }) : v(qa.card_label_platforms, {
                title: t,
                platformList: s
              })
            }
            return e ? v(qa.card_label_tag, {
              tag: e,
              title: t
            }) : t
          }), [k, t]);
          return b || "linkout" === r ? (0, d.jsx)("div", {
            ref: x,
            className: c,
            "data-size": s,
            "data-type": r,
            "data-product": g,
            role: "button",
            "aria-label": L,
            children: o
          }) : (0, d.jsx)("button", {
            ref: x,
            onClick: s => {
              s.preventDefault(), s.stopPropagation(), e ? _({
                info: e
              }) : I(), N({
                event: "card_click",
                element_placement: i?.toLowerCase(),
                position: a,
                card_id: e,
                card_name: t?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: c,
            "data-size": s,
            "data-type": r,
            "data-product": g,
            tabIndex: "linkout" !== r ? 0 : -1,
            "aria-label": L,
            type: "button",
            children: o
          })
        }), Wa),
        Ka = {
          card: "rockstargames-sites-legacyc49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-sites-legacyb41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-sites-legacydd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-sites-legacyfea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-sites-legacyd893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-sites-legacyf3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-sites-legacya03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-sites-legacye961062768d06292ff6cb598ae1c5e69"
        },
        Ya = ({
          payload: e,
          prod: a,
          images: t,
          size: s,
          title: i,
          initial: r,
          animate: n,
          variants: c,
          id: o,
          position: m,
          sectionTitle: g,
          expandedType: f,
          context: u,
          children: p,
          expandedCardContents: b,
          textOverlayProps: k = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          deckProps: v = {},
          modalProps: h = [],
          theme: y,
          cardIds: _,
          pricingOptions: x,
          platformOptions: j = null,
          pricingContainerHeight: N,
          isCoverCard: w = !1,
          isProductCard: S = !1
        }) => {
          const C = (0, T.useTinaComponents)(),
            I = (0, l.useMemo)((() => ({
              ...C,
              HTMLElement: Ue,
              ImageWithBadge: Ze,
              Carousel: da,
              GroupOfItems: ka
            })), [C]),
            L = (0, l.useMemo)((() => (0, d.jsx)(Ha, {
              type: f,
              components: I,
              payload: e,
              prod: a,
              images: t,
              size: s,
              title: i,
              context: u,
              textOverlayProps: k,
              initial: r,
              animate: n,
              variants: c,
              theme: y,
              cardIds: _,
              pricingOptions: x,
              id: o,
              pricingContainerHeight: N,
              isCoverCard: w,
              platformOptions: j,
              isProductCard: S,
              children: b
            })), [f, t, a, s, i, k, b, r, n, c, I, e, S]),
            P = [Ka.card, w ? Ka.coverCardWrapper : ""].join(" ");
          return (0, d.jsx)(Xa, {
            id: o,
            position: m,
            sectionTitle: g,
            title: i,
            size: s,
            expandedType: f,
            images: t,
            deckProps: v,
            modalProps: {
              content: L,
              ...h
            },
            className: P,
            isProductCard: S,
            cardIds: _,
            theme: y,
            isCoverCard: w,
            platformOptions: j,
            children: p
          })
        },
        Qa = {
          foreground: "rockstargames-sites-legacyd858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-sites-legacyd656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-sites-legacya7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-sites-legacycfc6074d8b476125230142c79438a249",
          logo: "rockstargames-sites-legacyca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-sites-legacyf5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: Za,
          Animations: Ja
        } = i,
        {
          getVariant: et,
          variants: at,
          transitions: tt
        } = Ja,
        st = ({
          image: e,
          i: a,
          prod: t
        }) => {
          const {
            alt: s,
            src: i
          } = (0, P.S1)({
            ...e,
            prod: t
          });
          return (0, d.jsx)("img", {
            src: i.mobile,
            alt: s ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        it = ({
          images: e = [],
          className: a = "",
          prod: t = !1,
          expandedView: s = !1,
          style: i = {}
        }) => {
          const [r, n] = (0, l.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, l.useEffect)((() => {
            function e() {
              n({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [r]);
          const c = (0, l.useMemo)((() => e?.length && 0 !== e.length ? e.map((e => (0, d.jsx)(Za, {
            className: Y()(Qa[e?.specialClass] ?? Qa.imageMask, Qa[e?.sizeClass], e?.className),
            variants: et(e?.specialClass ?? "imageMask", s ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: tt.cardOpen,
            children: (0, d.jsx)(st, {
              image: e,
              prod: t
            })
          }, e.key))) : null), [e, r, s, t]);
          return (0, d.jsx)(Za, {
            className: Y()(Qa.layeredImageFrame, e.length > 1 ? Qa.layered : Qa.flat, a),
            style: i,
            initial: at.fade.in.initial,
            animate: at.fade.in.animate,
            transition: tt.instantFade,
            "data-expanded-view": s,
            children: c
          })
        },
        rt = ({
          expandedType: e,
          to: a,
          children: t,
          style: s,
          sectionTitle: i = "",
          id: r,
          cardTitle: n,
          position: c
        }) => {
          const {
            track: o
          } = (0, u.useGtmTrack)(), m = (0, l.useCallback)((() => {
            o({
              event: "card_click",
              link_url: a,
              card_id: r,
              card_name: n,
              element_placement: i.toLowerCase(),
              position: c
            })
          }), [i, a, r, n, i, c]);
          return "linkout" === e && a ? (0, d.jsx)(p.A, {
            to: a,
            style: s,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: m,
            children: t
          }) : t
        },
        nt = {
          content: "rockstargames-sites-legacyc65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-sites-legacyfc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-sites-legacyddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-sites-legacyb4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: ct
        } = s,
        ot = ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: i = "short",
          textOverlayProps: r = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: n = [],
          deckProps: c = {},
          to: o = null,
          tina: m = {},
          position: g = 0,
          sectionTitle: f = "",
          theme: u,
          pricingOptions: p,
          cardIds: b,
          platformOptions: k = null
        }) => {
          const v = (0, T.useTinaPayload)(),
            h = m?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [y, _] = (0, l.useState)(c?.size ?? s),
            [x, j] = (0, l.useState)(0),
            N = void 0 !== p?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, l.useEffect)((() => {
            _(c?.size ?? s)
          }), [c?.size, s]), (0, d.jsx)(Ya, {
            id: e,
            title: a,
            size: y,
            expandedType: i,
            images: n,
            deckProps: c,
            prod: h,
            payload: {
              content: t,
              meta: {}
            },
            variants: ct.plainCard,
            textOverlayProps: r,
            modalProps: {
              className: nt.customModal,
              contentClassName: nt.customModalContent
            },
            expandedCardContents: (0, d.jsx)(it, {
              images: n,
              prod: h,
              expandedView: !0
            }),
            position: g,
            sectionTitle: f,
            theme: u,
            cardIds: b,
            pricingOptions: p,
            platformOptions: k,
            pricingContainerHeight: x,
            isProductCard: N,
            children: (0, d.jsx)(rt, {
              expandedType: i,
              to: o,
              sectionTitle: f,
              id: e,
              cardTitle: a,
              position: g,
              children: (0, d.jsx)("div", {
                className: nt.content,
                "data-product": N,
                children: (0, d.jsx)(Fa, {
                  title: a,
                  size: y,
                  textOverlayProps: r,
                  pricingOptions: p,
                  platformOptions: k,
                  setPricingContainerHeight: j,
                  children: (0, d.jsx)(it, {
                    images: n,
                    prod: h
                  })
                })
              })
            })
          })
        },
        dt = {
          ps: Ta,
          ps3: t(45302),
          ps4: Ia,
          ps5: La,
          switch: Da,
          nintendoswitch: Da,
          xbox: za,
          xboxone: Ea,
          xboxseriesxs: Pa,
          xbox360: t(49564),
          pc: Va,
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: t(93221),
          default: ""
        },
        lt = e => dt[e] || null,
        mt = {
          applestore: "rockstargames-sites-legacye97115f479fca9697b140bfbfa6534f2",
          border: "rockstargames-sites-legacyaab360f8b5cf6965c56e5f86813b8620",
          borderless: "rockstargames-sites-legacycad0684072c4a89cb09b9f79ddda6f38",
          btnContent: "rockstargames-sites-legacyd4df564f6143ae5909e2bbc95b4a7ebc",
          btnIcon: "rockstargames-sites-legacyf7afeacf3abab7856caca9ea1fad81ad",
          "clr-button": "rockstargames-sites-legacyd4ec60c769b079ac712ea0264480d480",
          cta: "rockstargames-sites-legacya8f295907e9b244767bb48cfc469b480",
          disabled: "rockstargames-sites-legacyd7a212b6e993966a3773c335359586d5",
          googleplay: "rockstargames-sites-legacyad074b742a5ce23c053880b289c2bbe6",
          icon: "rockstargames-sites-legacyc394fea7e071f1213a5d44f5b569bd1a",
          "icon-left": "rockstargames-sites-legacyc73b838b4f69aff2241b814ad1547c48",
          "icon-right": "rockstargames-sites-legacyf0de4560b8a1190f63a65ad1e9fd4e03",
          label: "rockstargames-sites-legacyd75a0e2af2bf8502f8647015e04e10e1",
          lgMax: "rockstargames-sites-legacydf956d5fc70d2129beb1406170402148",
          lgMin: "rockstargames-sites-legacye974b6c740bfac2959d5170bd2d9f3ca",
          nintendoswitch: "rockstargames-sites-legacye646f30d1a0c9990c5178e67be93f75e",
          pc: "rockstargames-sites-legacya1b9c83f518722f01ecb3ece3681c117",
          pillBtn: "rockstargames-sites-legacyf39c827be0d560f2cc376d83e3988fbc",
          platformIcon: "rockstargames-sites-legacyf25581474e97714bc974f3ab51136511",
          primary: "rockstargames-sites-legacya857266233e524e3bb96d327a2095642",
          ps: "rockstargames-sites-legacyd439373e74d36689bc159e9a585db184",
          ps4: "rockstargames-sites-legacye49e2b4d44ce7bab7966fbd9fdfb0760",
          ps5: "rockstargames-sites-legacybaa2b83edce86fda2d9dffb2682092f7",
          selected: "rockstargames-sites-legacya63fd127fc0aab231f6740340658d647",
          smMax: "rockstargames-sites-legacyfce12fc6343fbf09a5bb418bb8107f0b",
          xbox: "rockstargames-sites-legacycf162a09fdf0c180f3f5091077493d98",
          xboxone: "rockstargames-sites-legacye34e2c7fd3dd88f7e7d46f495c15a98d",
          xboxseriesxs: "rockstargames-sites-legacyf5b0bc5e5a291a3ecab7447d33a76e55"
        },
        gt = ({
          platform: e = "",
          altText: a
        }) => {
          const t = e ? lt(e) : null,
            s = t ? (0, d.jsx)("img", {
              className: mt.platformIcon,
              src: t,
              alt: a
            }) : null;
          return (0, d.jsx)("span", {
            className: [mt.btnContent, mt.platformButton].join(" "),
            children: s
          })
        },
        ft = ({
          children: e,
          href: a,
          style: t,
          content: s,
          variant: i = null,
          size: r = "medium",
          icon: n,
          iconPosition: c = "none",
          iconStyle: o,
          badge: m,
          badgeStyle: f,
          platformItem: p,
          platformStyle: b = "border",
          gtm: k = {},
          disabled: v,
          reloadDocument: h = !1,
          className: y,
          role: _ = ""
        }) => {
          const {
            track: x
          } = (0, u.useGtmTrack)(), j = (0, g.useDataLayer)(), N = s ?? e, w = (0, g.findPlatform)(p)?.friendlyName, S = (0, l.useMemo)((() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch (a) {
              t = e
            }
            return e === t
          }), [a]), C = (0, l.useCallback)((() => {
            v || x({
              event: "cta_other",
              text: s?.toLowerCase() ?? e ?? void 0,
              ...j,
              ...k,
              link_url: a ?? void 0
            })
          }), [k, a, j]), T = () => n ? (0, d.jsx)("span", {
            className: [mt.icon, `icon-${c}`].join(" "),
            style: o,
            children: (0, d.jsx)("img", {
              className: mt.btnIcon,
              src: lt(n) || "",
              alt: `${n} icon`
            })
          }) : null;
          return (0, d.jsx)(ae.Link, {
            to: a,
            target: S ? "_self" : "_blank",
            className: Y()(mt.cta, "platform" === i && p ? mt[p] : "", b && mt[b], v ? mt.disabled : "", y),
            style: t,
            "data-variant": i,
            "data-size": r,
            onClick: C,
            "aria-label": N,
            reloadDocument: h,
            role: _,
            children: "platform" === i && p ? (0, d.jsx)(gt, {
              platform: p,
              altText: w || N
            }) : (0, d.jsxs)("div", {
              className: mt.btnContent,
              children: ["left" === c && T(), (0, d.jsx)("span", {
                className: mt.label,
                children: N
              }), "right" === c && T(), m ? (0, d.jsx)("span", {
                className: mt.badge,
                style: f,
                children: m
              }) : null]
            })
          })
        },
        ut = ({
          children: e,
          context: a = null,
          game: t,
          image: s = {},
          style: i = {},
          template: r = null,
          theme: n = null,
          reversedOnMobile: c = !1,
          className: o = "",
          id: l = null
        }) => {
          const m = (0, P.S1)(s ?? {}),
            f = {
              ...i
            };
          if (m?.src?.desktop) {
            const e = (s?.style && s?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              a = (s?.style && s?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              t = `var(--grid-background-position, center)/${e??"cover"}`;
            if (f.background = `url(${m?.src?.desktop}) ${a} ${t}`, s?.style && s?.style["--linear-gradient"]) f.background = `linear-gradient(${s?.style["--linear-gradient"]}), url(${m?.src?.desktop}) ${a} ${t}`;
            else if (s?.style && s?.style["--gradient-height"]) {
              const e = s?.style["--gradient-height"] || "3",
                i = s?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                r = s?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              f.background = `linear-gradient(180deg, ${i}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${m?.src?.desktop}) ${a} ${t}`
            }
          }
          return (0, d.jsx)("div", {
            id: l,
            className: Y()("rockstargames-sites-legacyda87ead760b989fbe90a0b89c60b0653", c ? "rockstargames-sites-legacydfbda195073626bc6a7690dc73fba873" : "", o),
            "data-game": "community" === r ? null : t,
            style: (0, g.safeStyles)(f),
            "data-context": a,
            "data-template": r,
            "data-theme": n,
            children: e
          })
        };
      var pt = t(50828);
      const bt = {
          button: "rockstargames-sites-legacybc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-legacya3e6439dcaa4870840298d683db4831c"
        },
        kt = ({
          className: e = "",
          children: a,
          context: t = "",
          to: s,
          onClick: i,
          target: r = "_self",
          ...n
        }) => {
          const c = [bt.button, bt[t], e].join(" ");
          return s ? (0, d.jsx)(p.A, {
            ...n,
            to: s,
            className: c,
            onClick: i,
            target: r,
            children: a
          }) : (0, d.jsx)("button", {
            ...n,
            type: "button",
            className: c,
            onClick: i,
            children: a
          })
        },
        vt = ({
          className: e
        }) => (0, d.jsxs)("svg", {
          className: e,
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, d.jsx)("path", {
            d: "M3.33203 8.5H12.6654",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, d.jsx)("path", {
            d: "M8 3.83331L12.6667 8.49998L8 13.1666",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }),
        ht = {
          actionBlock: "rockstargames-sites-legacyb1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-sites-legacyf713e165e153987c3855d93dc1614f4d",
          active: "rockstargames-sites-legacyec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-sites-legacyb8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutContainer: "rockstargames-sites-legacye8b19ed9af6aedef68997370cd508539",
          calloutHeader: "rockstargames-sites-legacyfb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutHeaderMargins: "rockstargames-sites-legacyd7d4d815f9e36b62ef54befcc89ca296",
          calloutHeaders: "rockstargames-sites-legacye86d59dd2e0ab3c594c33eccde3e8fea",
          calloutLink: "rockstargames-sites-legacybc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-sites-legacydb31e98c20de15e8d5983285bd6ec92e",
          calloutSection: "rockstargames-sites-legacyab742f2f5b6947ec0b2facff923a076f",
          calloutSubheader: "rockstargames-sites-legacyf5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-sites-legacyb5e2fa8800d39c78682d9ce8ce5e53f8",
          downvote: "rockstargames-sites-legacyb1953057e462cdf6c79a4b8e6f2fe91b",
          pillBtn: "rockstargames-sites-legacyc881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-sites-legacydece7a2abb867cf09add3f7429e7383b",
          upvote: "rockstargames-sites-legacyf8d6a685395153161827b5cf8c6ddb93",
          voteButton: "rockstargames-sites-legacyecdf609ed8d6c4039be969205b7e3ac0"
        },
        yt = ({
          foreign_id: e,
          foreign_type: a
        }) => {
          const {
            track: t
          } = (0, u.useGtmTrack)(), {
            refetch: s
          } = (0, g.useQuery)(pt.UserGetVote, {
            skip: !0
          }), [i] = (0, g.useMutation)(pt.UserCastVote), [r, n] = (0, l.useState)(null), c = (0, l.useCallback)((s => {
            (async () => {
              if (s === r && null !== r) n(null);
              else {
                n(s), t({
                  event: "cta_" + (s ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const r = {
                  foreignId: e,
                  foreignType: a,
                  vote: s
                };
                await i({
                  variables: r
                })
              }
            })()
          }), [e, a, r]);
          return (0, l.useEffect)((() => {
            e && a && (async () => {
              const t = await s({
                foreignId: e,
                foreignType: a
              });
              n(t?.data?.userGetVote?.vote ?? null)
            })()
          }), [e, a]), (0, d.jsxs)("div", {
            className: ht.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [ht.upvote, ht.voteButton, r ? ht.active : ""].join(" "),
              name: "upvote",
              onClick: () => c(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [ht.downvote, ht.voteButton, !1 === r ? ht.active : ""].join(" "),
              name: "downvote",
              onClick: () => c(!1),
              type: "button"
            })]
          })
        },
        _t = ({
          action_text: e,
          link: a,
          trackingData: t
        }) => {
          const {
            track: s
          } = (0, u.useGtmTrack)();
          return (0, d.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: ht.calloutLink,
              type: "button",
              onClick: t ? () => s({
                ...t
              }) : () => {},
              children: [e, (0, d.jsx)(vt, {
                className: ht.calloutLinkIcon
              })]
            })
          })
        },
        xt = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: s
        }) => {
          const {
            track: i
          } = (0, u.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: ht.actionFooter,
            children: [e, a && " ", a && (0, d.jsx)("a", {
              href: t ?? "",
              onClick: () => i({
                ...s
              }),
              children: a
            })]
          })
        },
        jt = (0, g.withTranslations)((({
          header: e,
          subheader: a,
          type: t,
          action_text: s,
          link: i,
          foreign_id: r = document.location.pathname,
          foreign_type: n = "url",
          className: c = "",
          actionFooterHelperText: o,
          actionFooterLinkText: m,
          actionFooterLink: p,
          trackingData: b = {},
          actionFooterLinkTrackingData: k = {},
          t: v,
          ...h
        }) => {
          const {
            loggedIn: y
          } = (0, u.useRockstarUser)(), {
            track: _
          } = (0, u.useGtmTrack)(), x = document.location.pathname, {
            signInUrl: j
          } = (0, g.useScAuthLinks)(x), {
            ref: N,
            inView: w
          } = (0, f.useInView)({
            threshold: .6
          }), [S, C] = (0, l.useState)(!1);
          let T;
          if ((0, l.useEffect)((() => {
              w && !S && (_({
                event: "page_section_impression",
                element_placement: `callout section - ${h?.sectionName??h?._memoq?.header}`
              }), C(!0))
            }), [w]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!y) {
                T = (0, d.jsx)(kt, {
                  to: j,
                  className: ht.calloutButton,
                  onClick: b ? () => _({
                    ...b
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              T = (0, d.jsx)(yt, {
                foreign_id: r,
                foreign_type: n
              });
              break;
            case "button":
              s && i && (T = (0, d.jsx)(kt, {
                to: i,
                className: ht.calloutButton,
                onClick: b ? () => _({
                  ...b
                }) : () => {},
                children: s
              }));
              break;
            case "link":
              s && i && (T = (0, d.jsx)(_t, {
                action_text: s,
                link: i,
                trackingData: b
              }));
              break;
            default:
              T = null
          }
          return (0, d.jsx)("div", {
            className: `${ht.calloutContainer} ${c||""}`,
            ref: N,
            children: (0, d.jsxs)("div", {
              className: ht.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [ht.calloutHeaders, T ? ht.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, d.jsx)("h2", {
                  className: ht.calloutHeader,
                  children: v(e)
                }), a && (0, d.jsx)("h3", {
                  className: ht.calloutSubheader,
                  children: v(a)
                })]
              }), (0, d.jsxs)("div", {
                className: ht.actionBlock,
                children: [T, o && (0, d.jsx)(xt, {
                  helperText: o,
                  linkText: m,
                  link: p,
                  trackingData: k
                })]
              })]
            })
          })
        })),
        Nt = (0, m.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        wt = {
          bodySmall: "rockstargames-sites-legacydeed018133fca0148d0bf72fbe95bcd6"
        },
        St = ({
          track: e,
          artist: a
        }) => (0, d.jsxs)("div", {
          className: wt.track,
          children: [(0, d.jsx)("p", {
            children: e
          }), (0, d.jsx)("p", {
            className: wt.bodySmall,
            children: a
          })]
        }),
        Ct = (0, _.g)((({
          content: e = []
        }) => (0, d.jsxs)("div", {
          className: "rockstargames-sites-legacye2587587f57e43c9ca90d1e16e4a6ca6",
          children: [(0, d.jsx)("h4", {
            className: "rockstargames-sites-legacyef167f82b058360b2b6a3466ca73d7de",
            children: (0, d.jsx)(m.FormattedMessage, {
              ...Nt.components_track_list_title
            })
          }), (0, d.jsx)("div", {
            className: "rockstargames-sites-legacybeaa4a0a8d9f3a6ef20ee517f222a3c2",
            children: (0, d.jsx)("div", {
              className: "rockstargames-sites-legacyc06a65e90847e8b44df20f2aceb57038",
              children: e?.map((e => (0, d.jsx)(St, {
                track: e.track,
                artist: e.artist
              }, e.key)))
            })
          })]
        }))),
        {
          variants: Tt
        } = s;
      t(46823);
      const It = {
          content: "rockstargames-sites-legacydb8d475894c24c580268644776443fa6",
          customModalContent: "rockstargames-sites-legacyc758020ea3f5943e5f8a7d89ade3da69",
          logo: "rockstargames-sites-legacyf5649436402db0dddc6a55b41c5556cc",
          pillBtn: "rockstargames-sites-legacye810afee3cb66fbbb03c473e5aa2f5be",
          secondary: "rockstargames-sites-legacyd761507b70662391f68f5018510655ea",
          selected: "rockstargames-sites-legacye4ad62c1f330692bdb75370f5bbe66eb"
        },
        {
          variants: Lt
        } = s,
        Pt = ({
          id: e,
          logoImage: a = null,
          logoImageHeight: t = "auto",
          name: s = null,
          title: i,
          titleSizeClass: r = null,
          content: n,
          ctaText: c,
          ctaURL: o,
          size: g = "md",
          expandedType: f = "short",
          textOverlayProps: u = {
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
          tina: v = {},
          cardIds: h,
          theme: y
        }) => {
          const _ = (0, m.useIntl)(),
            x = (0, T.useTranslations)({
              payload: v?.payload,
              variables: v?.variables ?? {}
            }),
            [j, N] = (0, l.useState)(b?.size ?? g),
            w = (0, T.useGetCdnSource)(a ?? null),
            S = x?.content?.[0],
            C = S?.body ?? S?._memoq?.body;
          return (0, l.useEffect)((() => {
            N(b?.size ?? g)
          }), [b?.size, g]), (0, d.jsx)(Ya, {
            id: e,
            title: i,
            sectionTitle: s || i,
            size: j,
            expandedType: f,
            images: p,
            deckProps: b,
            payload: {
              content: n,
              meta: {}
            },
            variants: Lt.plainCard,
            textOverlayProps: u,
            modalProps: {
              className: It.customModal,
              contentClassName: It.customModalContent
            },
            expandedCardContents: (0, d.jsx)(it, {
              images: p,
              expandedView: !0
            }),
            theme: y,
            cardIds: h,
            isCoverCard: !0,
            children: (0, d.jsx)(rt, {
              expandedType: f,
              to: k,
              sectionTitle: s || i,
              children: (0, d.jsxs)("div", {
                className: It.content,
                children: [a && (0, d.jsx)("img", {
                  className: It.logo,
                  alt: "logo",
                  src: w,
                  style: {
                    height: `${t}`
                  }
                }), (0, d.jsx)("h2", {
                  className: r,
                  children: i
                }), C && (0, d.jsx)("p", {
                  children: C
                }), (0, d.jsx)(kt, {
                  target: "newtab" === f ? "_blank" : "_self",
                  to: o || void 0,
                  children: c || _.formatMessage(qa.card_learn_more)
                })]
              })
            })
          })
        };
      var Et = t(7545);
      const zt = "rockstargames-sites-legacyb7d3d1587271986440f5870d8d02eb3b",
        Vt = "rockstargames-sites-legacyfcffcc6e594fbf9a4a6e9ab5a8d034c7",
        Bt = {
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
        Mt = ({
          title: e = "thumbnail gallery",
          thumbsPerView: a = 3,
          loop: t = !1,
          navigation: s = !1,
          slideChildren: i = [],
          variants: r = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          },
          transition: n = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          }
        }) => {
          const {
            track: c
          } = (0, u.useGtmTrack)(), [o, m] = (0, l.useState)([Et.U1, Et.WO, Et.dK]), [g, f] = (0, l.useState)(null), [p, b] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            const e = [Et.U1, Et.WO, Et.dK];
            s && e.push(Et.Vx), m(e)
          }), [s]), (0, l.useEffect)((() => {
            if (!i) return;
            const e = i.map(((e, a) => (0, d.jsx)(ge.qr, {
              children: e
            }, Symbol(a).toString())));
            b(e)
          }), [i]), p ? (0, d.jsxs)(B.motion.div, {
            className: "rockstargames-sites-legacyf2d55de974817e455a162843125a8771",
            variants: r.parent,
            transition: n.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, d.jsx)(B.motion.div, {
              className: zt,
              variants: r.main,
              transition: n.main,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(ge.RC, {
                loop: t,
                navigation: s,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: o,
                breakpoints: Bt,
                className: zt,
                onSlideNextTransitionEnd: () => {
                  c({
                    event: "carousel_next",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  c({
                    event: "carousel_previous",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  c({
                    event: "carousel_swipe",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                children: p
              })
            }), (0, d.jsx)(B.motion.div, {
              className: Vt,
              variants: r.thumbs,
              transition: n.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(ge.RC, {
                threshold: 50,
                onSwiper: f,
                loop: t,
                breakpoints: Bt,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: o,
                className: Vt,
                children: p
              })
            })]
          }) : null
        },
        Dt = ({
          images: e,
          title: a,
          expandedView: t,
          variants: s,
          transition: i
        }) => {
          const r = (0, l.useMemo)((() => e && 0 !== e?.length ? e.map(((e, a) => e?.image?.sources ? (0, l.createElement)(Ze, {
            ...e,
            key: a,
            style: {
              ...e?.style,
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [e]);
          return !r?.length || r?.length < 1 ? null : 1 === r.length ? r : (0, d.jsx)(Mt, {
            slideChildren: r,
            title: a,
            navigation: t,
            thumbsVisible: t,
            spaceBetween: 0,
            variants: s,
            transition: i
          })
        },
        At = {
          customModalContent: "rockstargames-sites-legacyecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-sites-legacycf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-sites-legacycbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: $t,
          variants: Ft
        } = s;
      var Ot = t(3514);
      var Gt = t(87731),
        Rt = t.n(Gt),
        Ht = t(65211);
      const Ut = {
          controls: "rockstargames-sites-legacyadd02ff2cfa9b26941d96126a31bc21f",
          controlsButtons: "rockstargames-sites-legacye77442300b4509fe7a0104b3fb4cecf5",
          controlsCurrentBg: "rockstargames-sites-legacycca0f086505f02983f345dfb64c2ca45",
          controlsCurrentBgVisible: "rockstargames-sites-legacyb91004149be94449c7fbfee3d24bde58",
          controlsNextTrack: "rockstargames-sites-legacycd583d32f7692538f7f5d1181943c899",
          controlsPlayPause: "rockstargames-sites-legacyc58746be839199f6102319efb7659a54",
          controlsPlayPausePlaying: "rockstargames-sites-legacycecadc2b92a0597a55ba5870b46706c9",
          controlsPrevTrack: "rockstargames-sites-legacyd84e8c03d27a3038eb54cb7d12c8ac52",
          controlsScrub: "rockstargames-sites-legacyf90cfd862377d31cb5ee1faf9249fd3c",
          controlsScrubTrack: "rockstargames-sites-legacyf4bb886e9545730ccc323f43a1dfb45c",
          controlsTrack: "rockstargames-sites-legacyff717d7c9ac30041034f2c95fd3e3017",
          controlsTrackAnimating: "rockstargames-sites-legacyf09973ae8e0457805bc0a1090d05e444",
          controlsTrackArtist: "rockstargames-sites-legacye0b6ffdc4c40a6992d70395cd98cb6c5",
          controlsTrackBurger: "rockstargames-sites-legacyf3106c22742d7b08e577964a56789504",
          controlsTrackTitle: "rockstargames-sites-legacyf47edf112978c82a9bbfb2476170007f",
          fixedToBottom: "rockstargames-sites-legacyea802f7f67d39cfdd9625cc8de62828f",
          iconBurger: "rockstargames-sites-legacya18e526e94dfd87e9b5696a21c1c7754",
          player: "rockstargames-sites-legacyc7765dd7dbdff24d38ef3326bb8a938b",
          scrollText: "rockstargames-sites-legacyb42c9e9ba3716121d34600c92fdf4398",
          trackActive: "rockstargames-sites-legacya74e95cb6296abf8ca92168db76fecb9",
          trackIndex: "rockstargames-sites-legacyd0322571401b3a4dac22628533213ede",
          trackList: "rockstargames-sites-legacyc7dfe95abfbec1cdef9dfb87d9fd1a1f",
          trackTitle: "rockstargames-sites-legacyeceb3183ee9dc74e33d4184b307ba923",
          tracks: "rockstargames-sites-legacyb4036f5fe1d1ab9674cc7c6e40f9a53c",
          tracksOpen: "rockstargames-sites-legacya9a553961300b8ee030d0c90ac613c4c"
        },
        qt = ({
          src: e
        }) => (0, d.jsx)("div", {
          className: Ut.cover,
          style: {
            background: `url(${e}) center/cover`
          }
        }),
        Wt = ({
          timing: e = {
            current: 0,
            duration: 0
          },
          playing: a,
          audioRef: t,
          setPlaying: s,
          tracksOpen: i,
          setTracksOpen: r,
          trackData: n,
          setTrackId: c,
          trackBounds: o,
          setAutoNext: m
        }) => {
          const g = (0, l.useRef)(null),
            f = (0, l.useRef)(null),
            u = (0, l.useRef)(null),
            [p, b] = (0, l.useState)(null),
            [k, v] = (0, l.useState)(!1),
            h = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, l.useEffect)((() => {
            if (!f.current || !u.current) return;
            const e = () => {
              u.current && f.current && b(u.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [u, f, e]), (0, l.useEffect)((() => {
            if (!g.current || !e?.duration) return;
            let a = null;
            const s = new(Rt())(g.current),
              i = a => {
                if (g.current) {
                  const s = g.current.clientWidth;
                  if (!g.current.contains(a.srcEvent.target)) return;
                  const i = Math.max(0, a.srcEvent.offsetX),
                    r = Number(i / s * e.duration);
                  t.currentTime = r
                }
              },
              r = () => {
                a ? t.pause() : t.play()
              },
              n = () => {
                a = t.paused, t.pause()
              };
            return s.on("panstart", n), s.on("panleft", i), s.on("panright", i), s.on("panend", r), s.on("tap", i), () => {
              s.off("panstart", n), s.off("panleft", i), s.off("panright", i), s.off("panend", r), s.off("tap", i)
            }
          }), [g.current, e.duration]), (0, l.useEffect)((() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && v(!0)
          }), [a, t?.currentTime]), (0, d.jsxs)("div", {
            className: Ut.controls,
            style: {
              "--track-color": n.color,
              "--track-mix-blend-mode": n.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, d.jsx)("div", {
              className: [Ut.controlsCurrentBg, k ? Ut.controlsCurrentBgVisible : ""].join(" ")
            }), (0, d.jsx)("div", {
              className: Ut.controlsTrack,
              ref: f,
              children: (0, d.jsx)("span", {
                className: [Ut.controlsTrackTitle, p ? Ut.controlsTrackAnimating : ""].join(" "),
                ref: u,
                children: n.title
              })
            }), (0, d.jsxs)("div", {
              className: Ut.controlsButtons,
              children: [(0, d.jsx)("div", {
                className: Ut.controlsPrevTrack,
                onClick: () => {
                  o && (c(o[0]), m(!0), s(!0))
                }
              }), (0, d.jsx)("div", {
                className: [Ut.controlsPlayPause, a ? Ut.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  s(!a)
                }
              }), (0, d.jsx)("div", {
                className: Ut.controlsNextTrack,
                onClick: () => {
                  o && (c(o[1]), m(!0), s(!0))
                }
              })]
            }), (0, d.jsx)("div", {
              active: i ? "" : null,
              className: Ut.controlsTrackBurger,
              children: (0, d.jsx)("div", {
                className: Ut.iconBurger,
                onClick: () => {
                  r(!i)
                }
              })
            }), (0, d.jsxs)("div", {
              className: Ut.controlsScrub,
              children: [(0, d.jsx)("span", {
                children: h(e.current)
              }), (0, d.jsx)("div", {
                className: Ut.controlsScrubTrack,
                ref: g
              }), (0, d.jsx)("span", {
                children: h(e.duration)
              })]
            })]
          })
        },
        Xt = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: s,
          setTracksOpen: i,
          setPlaying: r,
          setAutoNext: n
        }) => (0, d.jsxs)("div", {
          className: Ut.tracks,
          children: [(0, d.jsx)("h4", {
            children: "Tracks"
          }), (0, d.jsx)("div", {
            className: Ut.trackBurger,
            onClick: () => {
              i(!s)
            }
          }), (0, d.jsx)("div", {
            className: Ut.trackList,
            children: e.map(((e, s) => (0, d.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? Ut.trackActive : "",
              onClick: () => {
                t(e.id), r(!0), n(!0)
              },
              children: [(0, d.jsx)("span", {
                className: Ut.trackIndex,
                children: String(s + 1).padStart(2, "0")
              }), (0, d.jsx)("span", {
                className: Ut.trackTitle,
                children: e.title
              }), (0, d.jsx)("span", {
                className: Ut.trackTime,
                children: e.duration
              })]
            }, e.id)))
          })]
        }),
        Kt = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, g.useQuery)(Ht.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [s, i] = (0, l.useState)(), [r, n] = (0, l.useState)(), [c, o] = (0, l.useState)(), [m, f] = (0, l.useState)(!1), [u, p] = (0, l.useState)(!1), [b, k] = (0, l.useState)(), [v, h] = (0, l.useState)({
            current: 0,
            duration: 0
          }), [y, _] = (0, l.useState)(!0);
          return (0, l.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (n(a.data.rockstarAudioPlayerPlayTrackId), _(!1), p(!0)), u && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && p(!1)
              };
            return u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [u]), (0, l.useEffect)((() => {
            if (!b) return;
            const e = () => {
                isNaN(b.duration) || h({
                  duration: b?.duration ?? 0,
                  current: b?.currentTime ?? 0
                })
              },
              a = () => {
                y && s && n(s[1])
              };
            return b.addEventListener("loadedmetadata", e), b.addEventListener("timeupdate", e), b.addEventListener("ended", a), () => {
              b.removeEventListener("loadedmetadata", e), b.removeEventListener("timeupdate", e), b.removeEventListener("ended", a)
            }
          }), [b, s, y]), (0, l.useEffect)((() => {
            u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [u]), (0, l.useEffect)((() => {
            b && (u ? b.play() : b.pause(), f(!1))
          }), [u, b, c?.id]), (0, l.useEffect)((() => {
            if (!r) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === r));
            i([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), o(e[a])
          }), [r]), (0, l.useEffect)((() => {
            t && n(t.audioAlbum.tracks[0].id)
          }), [t]), c ? (0, d.jsxs)("div", {
            className: [Ut.player, Ut[a], m ? Ut.tracksOpen : ""].join(" "),
            children: [(0, d.jsx)("audio", {
              ref: e => {
                k(e)
              },
              src: c.mp3_src
            }), (0, d.jsx)(Xt, {
              tracks: t.audioAlbum.tracks,
              setTrackId: n,
              trackId: r,
              tracksOpen: m,
              setTracksOpen: f,
              setPlaying: p,
              setAutoNext: _
            }), (0, d.jsx)(qt, {
              src: c.cover_src
            }), (0, d.jsx)(Wt, {
              setTrackId: n,
              trackBounds: s,
              tracksOpen: m,
              setTracksOpen: f,
              playing: u,
              setPlaying: p,
              timing: v,
              trackData: c,
              audioRef: b,
              setAutoNext: _
            })]
          }) : null
        };
      var Yt = t(98273);
      const Qt = {
          blackBtn: "rockstargames-sites-legacyd3207a3907ff5e6cc1498c67d5562087",
          btnText: "rockstargames-sites-legacye146813e6b911567a15379239351bb9f",
          btnTexticon: "rockstargames-sites-legacyadd785fa73d6a7f8cdf490add2819974",
          iconBtn: "rockstargames-sites-legacya305be36306fd7f0977b052ccab54910",
          link: "rockstargames-sites-legacya73b743df91203999c432aceb1093e62",
          pc: "rockstargames-sites-legacyc4a7b17bb99afb02a9f9b9b133be7844",
          pillBtn: "rockstargames-sites-legacya76545929bba4f1522661c9f297ea3c5",
          plusButton: "rockstargames-sites-legacyb35e9ba36ecaabe08c02c44808110761",
          ps4: "rockstargames-sites-legacyaf1b302b53e77d0da20f92de2973fd29",
          ps5: "rockstargames-sites-legacyb5164622a2b180ed2b04eab4d489763b",
          selected: "rockstargames-sites-legacye5b12527bec7eae7fce9642c9827cc3b",
          small: "rockstargames-sites-legacyb3ba679464048120f8440e7ae0d14086",
          transparentBtn: "rockstargames-sites-legacyd4515b6bf9a4c714239cac9e27932235",
          whiteBtn: "rockstargames-sites-legacyd94aba4fb4bae812e14f8715816752c2",
          xboxone: "rockstargames-sites-legacycadebea37980f01b56560143374013b3",
          xboxseriesxs: "rockstargames-sites-legacyc28e2bcbd4ed4fc95b67860cb7033999"
        },
        Zt = ({
          children: e,
          className: a,
          onClick: t,
          style: s,
          ariaLabel: i
        }) => (0, d.jsx)("button", {
          className: a,
          onClick: t,
          style: s,
          type: "button",
          "aria-label": i,
          children: e
        }),
        Jt = ({
          children: e,
          className: a,
          onClick: t,
          style: s,
          to: i,
          ariaLabel: r
        }) => (0, d.jsx)(ae.NavLink, {
          className: a,
          onClick: t,
          style: s,
          to: i,
          "aria-label": r,
          children: e
        }),
        es = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: t,
          icon: s = "",
          img: i,
          labelColor: r = "#000",
          onClick: n,
          secondText: c,
          size: o,
          text: l,
          to: m,
          type: g = "",
          ariaLabel: f
        }) => {
          const u = [Qt.plusButton, Qt[g] ?? "", Qt[o] ?? "", Qt[t] ?? "", a].join(" "),
            p = {
              "--hvr-color": e ?? r,
              "--hvr-bg-color": r ?? e,
              "--hvr-border-color": e ?? r
            },
            b = (0, d.jsxs)(d.Fragment, {
              children: [i ? (0, d.jsx)("img", {
                src: i,
                alt: ""
              }) : "", (0, d.jsxs)("div", {
                className: Qt.btnText,
                icon: s,
                children: [l, c ? (0, d.jsx)("span", {
                  children: c
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, d.jsx)("span", {
                onClick: n,
                onKeyDown: n,
                className: u,
                role: "button",
                "aria-label": f,
                tabIndex: 0,
                children: (0, d.jsx)("a", {
                  href: m,
                  target: e,
                  children: b
                })
              })
            }
            return (0, d.jsx)(Jt, {
              className: u,
              onClick: n,
              style: {
                ...p
              },
              to: m,
              ariaLabel: f,
              children: b
            })
          }
          return (0, d.jsx)(Zt, {
            className: u,
            onClick: n,
            style: {
              ...p
            },
            ariaLabel: f,
            children: b
          })
        },
        as = ({
          buttons: e = [],
          className: a
        }) => e.length ? (0, d.jsx)("div", {
          className: Y()("rockstargames-sites-legacybbd74dec556da7f5c06710c72c662f8a", a),
          children: e.map((({
            icon: e,
            title: a,
            to: t
          }, s) => a ? (0, d.jsx)(es, {
            icon: e,
            text: a,
            to: t
          }, s) : ""))
        }) : null;
      var ts = t(32067),
        ss = t(973);
      var is = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        rs = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const ns = ({
          tagSize: e,
          platform: a,
          className: t = ""
        }) => {
          const {
            src: s,
            alt: i
          } = ((e, a) => {
            const t = "small" === a;
            switch (e) {
              case "pc":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
                };
              case "pcalt":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
                };
              case "ps4":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
                };
              case "ps5":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
                };
              case "xboxone":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
                };
              case "xboxsx":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
                };
              case "ps":
              case "np":
                return {
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
                };
              case "xbl":
                return {
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
                };
              default:
                return {
                  src: "", alt: ""
                }
            }
          })(a, e);
          return (0, d.jsx)("img", {
            className: Y()("rockstargames-sites-legacyb0ff0045ed0326a46ca1e0867d2050c1", t),
            "data-testid": "platform-tag",
            "data-platform": a,
            "data-tag-size": e,
            src: s,
            alt: i
          })
        },
        cs = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        os = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        ds = (0, l.forwardRef)((function({
          rank: e,
          size: a = "large",
          className: t,
          alt: s,
          testId: i,
          ...r
        }, n) {
          const c = cs(e),
            o = (0, ss.v6)(r, {
              className: Y()("rockstargames-sites-legacyf54750ef62f8600000c94f0caba85986", t),
              "data-testid": i
            });
          return (0, d.jsxs)("div", {
            "data-size": a,
            ref: n,
            ...o,
            children: [(0, d.jsx)("svg", {
              role: "svg",
              "aria-label": s,
              className: "rockstargames-sites-legacya3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": cs(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, d.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: c
              })
            }), (0, d.jsx)("span", {
              className: "rockstargames-sites-legacyd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": os.RANK_VALUE,
              children: e
            })]
          })
        })),
        ls = "rockstargames-sites-legacyb2d75ee6d468c7fde9ad28ba90ca2804",
        ms = (0, l.forwardRef)((function({
          children: e,
          className: a,
          testId: t,
          ...s
        }, i) {
          const r = (0, ss.v6)(s, {
            "data-testid": t,
            className: Y()("rockstargames-sites-legacyd738b88fa09e0960678501900af6dae1", a)
          });
          return (0, d.jsx)("div", {
            ref: i,
            ...r,
            children: e
          })
        })),
        gs = (0, l.forwardRef)((function({
          src: e,
          alt: a,
          testId: s,
          ...i
        }, r) {
          const [n, c] = (0, l.useState)(e), o = (0, ss.v6)(i, {
            className: "rockstargames-sites-legacya0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": s
          });
          return e ? (0, d.jsx)("div", {
            ref: r,
            ...o,
            children: (0, d.jsx)("img", {
              className: ls,
              src: n,
              alt: a,
              onError: () => c(t(14804))
            })
          }) : (0, d.jsx)("div", {
            ref: r,
            ...o,
            children: (0, d.jsx)("img", {
              className: ls,
              src: t(14804),
              alt: a
            })
          })
        })),
        fs = (0, l.forwardRef)((function({
          asChild: e,
          testId: a,
          className: t,
          ...s
        }, i) {
          const r = e ? ts.DX : "div",
            n = (0, ss.v6)(s, {
              className: Y()("rockstargames-sites-legacyfbe57172570573357e040787d9307835", t),
              "data-testid": a
            });
          return (0, d.jsx)(r, {
            ref: i,
            ...n
          })
        })),
        us = (0, l.forwardRef)((function({
          children: e,
          testId: a,
          ...t
        }, s) {
          const i = (0, ss.v6)(t, {
            className: "rockstargames-sites-legacyd9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": a
          });
          return (0, d.jsx)("div", {
            ref: s,
            ...i,
            children: e
          })
        })),
        ps = ({
          testId: e,
          ...a
        }) => {
          const t = (0, ss.v6)(a, {
            "data-testid": e
          });
          return (0, d.jsx)(ns, {
            ...t
          })
        },
        bs = (0, l.forwardRef)((function({
          children: e,
          testId: a,
          ...t
        }, s) {
          const i = (0, ss.v6)(t, {
            "data-testid": a
          });
          return (0, d.jsx)("div", {
            className: "rockstargames-sites-legacycd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...i,
            ref: s,
            children: e
          })
        })),
        ks = (0, l.forwardRef)((function({
          testId: e,
          children: a,
          ...t
        }, s) {
          const i = (0, ss.v6)(t, {
            "data-testid": e
          });
          return (0, d.jsx)("div", {
            ...i,
            ref: s,
            children: a
          })
        })),
        vs = ({
          testId: e,
          ...a
        }) => {
          const t = (0, ss.v6)(a, {
            "data-testid": e
          });
          return (0, d.jsx)(ds, {
            ...t
          })
        },
        hs = (0, l.forwardRef)((function({
          asChild: e,
          children: a,
          testId: t,
          ...s
        }, i) {
          const r = e ? ts.DX : "div",
            n = (0, ss.v6)(s, {
              className: "rockstargames-sites-legacye8daa457f5b09f3a79915a1355aa3332",
              "data-testid": t
            });
          return (0, d.jsx)(r, {
            ref: i,
            ...n,
            children: a
          })
        })),
        ys = (0, t(71282).FF)(),
        _s = e => e.some((e => !e)),
        xs = ({
          condition: e = null,
          children: a
        }) => {
          const [t, s] = (0, l.useState)(!1), i = (e => {
            const [a] = (0, ae.useSearchParams)(), [t, s] = (0, l.useState)(null), i = (0, u.useRockstarUser)(), {
              loggedIn: r,
              data: n
            } = i, {
              hasGtaPlus: c
            } = n ?? {};
            return (0, l.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              ys.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (_s(i)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    i.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    i.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    i.push(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    i.push(!1 === c || void 0 === c);
                    break;
                  default:
                    i.push(!1)
                }
                return null
              })), s(!_s(i)), () => {}
            }), [a, e, c, i, r]), t
          })(e);
          return (0, l.useEffect)((() => {
            s(i)
          }), [i]), (0, l.useMemo)((() => t ? a : null), [t])
        },
        js = (0, g.withTranslations)((({
          children: e
        }) => l.Children.map(l.Children.toArray(e), (e => (0, d.jsx)(xs, {
          ...e?.props
        })))));
      var Ns = t(22691),
        ws = t(48303),
        Ss = t.n(ws);
      const Cs = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: s
      }) => {
        const [i, r] = (0, l.useState)(""), n = (0, l.useMemo)((() => Ss()().getData()), []);
        return (0, d.jsx)(Ns.Ay, {
          unstyled: !0,
          value: i,
          isMulti: e,
          allowSelectAll: a,
          options: n,
          placeholder: t,
          onChange: e => {
            return a = e?.target?.value, void r(a);
            var a
          },
          classNamePrefix: "country-select",
          ...s
        })
      };
      var Ts = t(12914);
      const Is = ({
          cookieName: e,
          cookieValue: a,
          trueComponent: t,
          falseComponent: s
        }) => {
          const i = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(e),
            r = new URLSearchParams(window.location.search).get(e);
          return r && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(0,Ts.F)()}; path=/;`)
          })(e, r), i === a || r === a ? t : s
        },
        Ls = "rockstargames-sites-legacya19bcd2b98d91e60c43b9de146e20f4e",
        Ps = ({
          color: e
        }) => (0, d.jsxs)("div", {
          className: "rockstargames-sites-legacye83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, d.jsx)("div", {
            className: Ls
          }), (0, d.jsx)("div", {
            className: Ls
          }), (0, d.jsx)("div", {
            className: Ls
          })]
        }),
        Es = {
          dropdownWrapper: "rockstargames-sites-legacybbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-sites-legacya9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-sites-legacydf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-sites-legacycb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-sites-legacyfe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        zs = ({
          children: e,
          className: a,
          title: t
        }) => {
          const [s, i] = (0, l.useState)(!1);
          let r = null;
          return r = we(), (0, d.jsx)(r, {
            active: s,
            focusTrapOptions: {
              onDeactivate: () => i(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, d.jsxs)("div", {
              className: [Es.dropdownWrapper, s ? Es.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, d.jsx)("button", {
                className: Es.opener,
                onClick: () => i(!s),
                children: t
              }), s && (0, d.jsx)("div", {
                className: Es.items,
                onClick: () => i(!1),
                children: e
              })]
            })
          })
        },
        Vs = ({
          caption: e,
          children: a,
          ...t
        }) => e ? (0, d.jsxs)("figure", {
          ...t,
          children: [a, (0, d.jsx)("figcaption", {
            dangerouslySetInnerHTML: {
              __html: e
            }
          })]
        }) : a,
        Bs = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, d.jsx)("div", {
          className: "rockstargames-sites-legacyaee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, d.jsxs)(ut, {
            children: [e && (0, d.jsx)("h3", {
              children: e
            }), (0, d.jsx)(ut, {
              className: "rockstargames-sites-legacydba17b5c55f8d40e2600765f1a60d6af",
              children: t.map(((e, a) => {
                return e?.embed ? (0, d.jsx)(Vs, {
                  caption: e?.caption,
                  children: (0, d.jsx)("div", {
                    className: "rockstargames-sites-legacyf0cd8278232673606f9c1715bd4950f6",
                    dangerouslySetInnerHTML: {
                      __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                    }
                  }, `${e?.key??a}_div`)
                }, e?.key ?? a) : e?.text ? (0, d.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: e.text
                  }
                }, e?.key ?? a) : void 0;
                var t
              }))
            })]
          })
        }) : null,
        Ms = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: .9,
              delay: .3
            }
          }
        },
        Ds = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            gridGap: 0,
            transition: {
              type: "spring",
              stiffness: 650,
              damping: 45
            },
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        As = {
          applestore: "rockstargames-sites-legacye68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-legacyc240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-legacyee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-legacyfc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-legacyb12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-legacye752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-legacybb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-legacyd0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-legacyffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-legacya2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-legacyed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-legacyfa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-legacye950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-legacydd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-legacyed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-legacyf046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-legacye7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-legacye8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-legacyeaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-legacye6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-legacyc03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-legacydde1b553776bdd59373d22a43479de29"
        },
        $s = ({
          buttonText: e = "",
          link: a = "",
          platform: s = "",
          target: i = null,
          onClick: r,
          tabIndex: n,
          ...c
        }) => {
          const o = i ?? (a.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [As.platformButton, As[s]].join(" "),
            m = s ? t(5328)(`./${s}.svg`) : null,
            g = (0, d.jsxs)(d.Fragment, {
              children: [m ? (0, d.jsx)("img", {
                src: m,
                alt: e
              }) : "", !m && (0, d.jsx)("div", {
                className: As.buttonText,
                children: e
              })]
            });
          return a ? a.startsWith("http") ? (0, d.jsx)("a", {
            href: a,
            className: l,
            target: o,
            onClick: r,
            "aria-label": e,
            tabIndex: n,
            ...c,
            children: g
          }) : (0, d.jsx)(ae.NavLink, {
            className: l,
            onClick: r,
            to: a,
            "aria-label": e,
            ...c,
            children: g
          }) : (0, d.jsx)("button", {
            className: l,
            onClick: r,
            "aria-label": e,
            tabIndex: n,
            ...c,
            children: g
          })
        },
        Fs = ({
          variant: e,
          buttonText: a = "Subscribe",
          buttonClassName: s,
          className: i,
          children: r,
          platformsAndLinks: n = [],
          trackingType: c = "buy",
          trackingParent: o,
          target: m = null,
          trackingOId: f = null,
          returnUrl: p = null
        }) => {
          const b = (0, g.useRockstarTokenPing)(),
            [k, v] = (0, l.useState)(!1),
            [h, y] = (0, l.useState)(!1),
            [_, x] = (0, l.useState)(200),
            {
              track: j
            } = (0, u.useGtmTrack)(),
            N = (0, l.useRef)(null),
            w = (0, l.useRef)(k),
            S = (0, l.useRef)(null);
          (0, l.useEffect)((() => {
            w.current = k
          }), [k]), (0, l.useEffect)((() => {
            const e = e => {
              w && !N?.current?.contains(e.target) && v(!1)
            };
            document.addEventListener("click", e);
            const a = e => {
              w && "Escape" == e.code && v(!1)
            };
            return document.addEventListener("keydown", a, !1), () => {
              document.removeEventListener("click", e), document.removeEventListener("keydown", a, !1)
            }
          }), []), (0, l.useEffect)((() => {
            const e = () => {
              k && (y(!0), v(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [k]), (0, l.useEffect)((() => {
            if (N?.current) {
              const e = 1e3 * Number(getComputedStyle(N.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              x(isNaN(e) ? 200 : e)
            }
          }), []), (0, l.useEffect)((() => {
            h && setTimeout((() => {
              y(!1)
            }), _)
          }), [h]);
          const C = ({
            href: e,
            platform: a
          }) => async () => {
            if (e) j({
              element_placement: o?.toLowerCase(),
              event: "cta_store_link",
              link_url: e,
              text: a
            });
            else {
              const e = (0, g.findPlatform)(a)?.onlineService;
              if (e && "sc" !== e) {
                j({
                  element_placement: o?.toLowerCase(),
                  event: "cta_link_account",
                  text: `link ${e}`
                });
                const a = await (0, g.generateTpaLink)({
                  pingBearer: b,
                  returnUrl: p || window.location.pathname,
                  service: e
                });
                window.location.href = a.href
              }
            }
          };
          return (0, d.jsxs)("div", {
            className: Y()(As.container, i),
            children: [(0, d.jsx)(B.motion.div, {
              className: As.content,
              animate: k ? "open" : "close",
              variants: Ms,
              "aria-hidden": !!k,
              children: r
            }), (0, d.jsxs)(B.motion.div, {
              "data-variant": e,
              "data-animating": h,
              className: Y()(k ? As.expandedButton : As.unexpandedButton),
              animate: k ? "open" : "closed",
              variants: Ds,
              initial: !1,
              ref: N,
              children: [(0, d.jsx)(B.motion.button, {
                className: Y()(As.buttonText, s),
                "aria-expanded": k,
                onClick: () => {
                  if (y(!0), v(!k), !k) switch (c) {
                    case "select_platform":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "select_platform",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "cta_link_account",
                        o_id: f,
                        text: a?.toLowerCase()
                      });
                      break;
                    case "buy":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "cta_buy",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "cta_store_link",
                        text: a?.toLowerCase()
                      });
                      break;
                    case "other":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "cta_other",
                        text: a?.toLowerCase()
                      })
                  }
                },
                tabIndex: k ? -1 : 0,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, d.jsx)("div", {
                className: As.expandedArea,
                ref: S,
                "data-animate": k ? "open" : "closed",
                "aria-hidden": !k,
                style: {
                  height: k ? S?.current?.scrollHeight : 0
                },
                children: (0, d.jsx)(we(), {
                  active: k,
                  focusTrapOptions: {
                    allowOutsideClick: !0,
                    preventScroll: !0,
                    checkCanFocusTrap: e => new Promise((a => {
                      const t = setInterval((() => {
                        "hidden" !== getComputedStyle(e[0]).visibility && (a(), clearInterval(t))
                      }), 5)
                    }))
                  },
                  children: (0, d.jsxs)("div", {
                    children: [(0, d.jsx)("button", {
                      className: As.closeButton,
                      onClick: () => {
                        v(!1), y(!0), j({
                          element_placement: o?.toLowerCase(),
                          event: "cta_other",
                          text: "close expanding platform button"
                        })
                      },
                      "aria-label": "Close",
                      tabIndex: k ? 0 : -1,
                      children: (0, d.jsx)("img", {
                        src: t(66426),
                        alt: "Close"
                      })
                    }), (0, d.jsx)("div", {
                      className: As.platformButtons,
                      children: n.length ? n.map((e => (0, d.jsx)($s, {
                        buttonText: e.buttonText ?? (0, g.findPlatform)(e.platform)?.friendlyName ?? "",
                        link: e.href,
                        platform: e.platform,
                        onClick: C(e),
                        target: m,
                        tabIndex: k ? 0 : -1
                      }, `${e.key}-${e.href}-${e.platform}`))) : ""
                    })]
                  })
                })
              })]
            })]
          })
        },
        Os = {
          animateBox: "rockstargames-sites-legacyb07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-sites-legacyf7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-sites-legacybbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-sites-legacye0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-sites-legacyf47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-sites-legacyc121e11e40215dc778fe8665eb38845d"
        },
        Gs = ({
          children: e,
          style: a
        }) => {
          const t = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Os.visible])
              }))
            })).observe(t?.current)
          }), []), (0, d.jsx)("div", {
            style: a,
            className: [Os.fadeArea].join(" "),
            ref: t,
            children: e
          })
        },
        Rs = ({
          prevRef: e,
          nextRef: a,
          onNextClicked: t,
          onPrevClicked: s,
          onNextKeyDown: i,
          title: r,
          testId: n
        }) => (0, d.jsxs)("div", {
          "aria-controls": `${r}-carousel`,
          "aria-label": `${r} carousel buttons`,
          className: "rockstargames-sites-legacyb8d5ef10008331a9f6d3a6bdf1690d01",
          role: "group",
          "data-testid": `${n}-controls`,
          children: [(0, d.jsx)("button", {
            className: "rockstargames-sites-legacyc38cd500d52d07bd012e288dc0b4f635",
            ref: e,
            onClick: s,
            "aria-label": "Previous"
          }), (0, d.jsx)("button", {
            className: "rockstargames-sites-legacyb24ada0f7959966c6d950567eaaafce2",
            ref: a,
            onClick: t,
            onKeyDown: i,
            "aria-label": "Next"
          })]
        }),
        Hs = k((({
          description: e,
          slideChildren: a,
          size: t,
          title: s,
          name: i,
          customSlidesPerView: r = null,
          customSpaceBetween: n = null,
          slideClass: c,
          style: o,
          className: m,
          cardSizeBreakpoints: g,
          customAspectRatio: p,
          titleBadge: b,
          theme: k
        }) => {
          const {
            track: v
          } = (0, u.useGtmTrack)(), h = (0, l.useRef)(null), y = (0, l.useRef)(null), _ = (0, l.useRef)(null), [x, j] = (0, l.useState)(null), [N, w] = (0, l.useState)(!1), [S, C] = (0, l.useState)(null), [T, I] = (0, l.useState)(), [L, P] = (0, l.useState)(), {
            ref: E,
            inView: z
          } = (0, f.useInView)({
            threshold: .6
          }), [V, B] = (0, l.useState)(!1), [M, D] = (0, l.useState)(null), [A, $] = (0, l.useState)(!1), [F, O] = (0, l.useState)(0), [G, R] = (0, l.useState)(0);
          (0, l.useEffect)((() => {
            const e = () => {
              $(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, l.useEffect)((() => {
            const e = () => {
              T && !(0, Re.isEmpty)(T) && T?.height > 0 && T?.height !== F && O(T?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [T]);
          const H = {
            0: {
              spaceBetween: n ?? 16
            },
            1024: {
              spaceBetween: n ?? 18
            },
            1920: {
              spaceBetween: n ?? 20
            },
            2560: {
              spaceBetween: n ?? 22
            }
          };
          (0, l.useEffect)((() => {
            if (!h.current) return;
            const e = () => {
              if (h.current) {
                const e = r || Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view")),
                  a = r ? 1 : Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view-multiplier"));
                C(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [h, r]), (0, l.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, D(a))
            })), B(e);
            const t = a.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && A ? null : (0, d.jsx)(ge.qr, {
              className: "rockstargames-sites-legacyad67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => W(a),
              role: "button",
              children: e
            }, e.key)));
            j(t)
          }), [a, A]), (0, l.useEffect)((() => {
            P({
              nextEl: _.current,
              prevEl: y.current
            })
          }), [_, y]), (0, l.useEffect)((() => {
            z && !N && a && (v({
              event: "page_section_impression",
              element_placement: (i || s).toLowerCase()
            }), w(!0))
          }), [z, a]);
          let U = "custom" === t ? {
            "--custom-aspect-ratio": p,
            ...o
          } : {
            ...o
          };
          const q = 0 !== F ? `${F}px` : "100%";
          U = {
            ...U,
            "--carousel-cards-height": q,
            "--carousel-nav-opacity": G
          };
          const W = e => {
              T?.slideTo(e)
            },
            X = `${s.trim().toLowerCase().replace(/\s+/g,"-")}-deck`;
          return (0, d.jsxs)("section", {
            "aria-label": s,
            className: Y()("rockstargames-sites-legacyf20b52f7c3f9003cd00811a47a04bf10", m),
            "data-size": t,
            "data-testid": X,
            "data-sm": g?.sm ? g?.sm : t,
            "data-md": g?.md ? g?.md : t,
            "data-lg": g?.lg ? g?.lg : t,
            "data-xl": g?.xl ? g?.xl : t,
            "data-xxl": g?.xxl ? g?.xxl : t,
            "data-has-covercard": V,
            "data-new-carousel-nav": !0,
            id: `${s}-carousel`,
            "data-theme": k,
            ref: h,
            style: U,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-sites-legacyaeafe767d91d07fab61f307b5bbffeef",
              ref: E
            }), V && A && (0, d.jsx)("div", {
              className: "rockstargames-sites-legacydef6705cfe82c4e562f3c71c78bc5248",
              children: M
            }), (0, d.jsx)("div", {
              className: "rockstargames-sites-legacyb093fac5b0d056a4a00f34d0418c6577",
              children: (0, d.jsxs)("div", {
                className: "rockstargames-sites-legacydcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, d.jsxs)("div", {
                  className: "rockstargames-sites-legacyb83b41754b7e9ac95c806264014db990",
                  children: [!V && s && (0, d.jsxs)("div", {
                    className: "rockstargames-sites-legacyc8e04a547988dacbae8960776862f15f",
                    children: [(0, d.jsx)("h2", {
                      children: s
                    }), b && (0, d.jsx)("span", {
                      className: "rockstargames-sites-legacyc3de2db74771fdba023cc2b11b216955",
                      children: b
                    })]
                  }), (0, d.jsx)(Rs, {
                    prevRef: y,
                    nextRef: _,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = T?.slides[T?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: s,
                    theme: k
                  })]
                }), e && (0, d.jsx)("div", {
                  className: "rockstargames-sites-legacya1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                })]
              })
            }), S ? (0, d.jsx)(ge.RC, {
              slidesPerView: S,
              onInit: e => {
                I(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (O(t), R(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: L,
              modules: [Et.Vx],
              breakpoints: H,
              slideClass: Y()("swiper-slide", c),
              onSlideNextTransitionEnd: () => {
                v({
                  event: "carousel_next",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                v({
                  event: "carousel_previous",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                v({
                  event: "carousel_swipe",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              children: x
            }) : ""]
          })
        }), null),
        Us = {
          background: "rockstargames-sites-legacyc8c90210c344650ad11d2d97258dcaab",
          btnText: "rockstargames-sites-legacye8ca7c699fe44c30cf4e542ee8b22119",
          buttonGroup: "rockstargames-sites-legacyb8a0dc337c7ea835340f88b0f6d14822",
          content: "rockstargames-sites-legacye4bb4024fb4b167423f58e02e471bf5e",
          ctaBlock: "rockstargames-sites-legacyc3f1f785f5adb5cfcbf93195e21521e6",
          descriptions: "rockstargames-sites-legacya54e628f4898aed20e45ad8a5e39af7f",
          gradient: "rockstargames-sites-legacyd074051a93eac66cd56c616c8ccd4c91",
          hero: "rockstargames-sites-legacydccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-sites-legacyd5fdc650fc4f2f7441ce7c563ae9653e",
          layered: "rockstargames-sites-legacyc58f0111e3765dc6116481764d0431d0",
          legalText: "rockstargames-sites-legacybdbadc8b5ef295a4122905fffdde18f6",
          pillBtn: "rockstargames-sites-legacyb89f190ffa4d32a33304ffa4b5ff73df",
          primaryBtn: "rockstargames-sites-legacyd273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-sites-legacyaf112e1264860cebe9be5f542d47ec27",
          selected: "rockstargames-sites-legacyb5c12cc9810c7b3774102378f71714a1",
          shardsCarousel: "rockstargames-sites-legacycd8c6fbe5139a661c2e52e9df726ca78",
          verticalCtaBlock: "rockstargames-sites-legacyde8ee9092175484396cd56d19aec7cbd"
        },
        qs = {
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
        Ws = {
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
        },
        Xs = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const s = (0, T.useGetCdnSource)(a ?? null),
            i = (0, T.useGetCdnSource)(t ?? s);
          return (0, d.jsx)("div", {
            className: Us.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, d.jsx)("h5", {
              children: e
            })
          })
        },
        Ks = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [s, i] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            t && i(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: i,
                desktop: r
              } = s;
              return e.push((0, d.jsx)(Xs, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, d.jsx)("div", {
            className: Us.shardsCarousel,
            children: (0, d.jsx)(Hs, {
              title: e,
              name: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Ys = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [s, i] = (0, l.useState)([]), [r, n] = (0, l.useState)([]);
          return (0, l.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: t
            } = a.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
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
            i(e), n(t)
          }), [a]), s.length ? (0, d.jsx)(B.motion.div, {
            variants: e ? Ws : void 0,
            children: (0, d.jsx)(Fs, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: s,
              children: !!r.length && (0, d.jsx)(B.motion.div, {
                variants: Ws,
                children: (0, d.jsx)(as, {
                  buttons: r,
                  className: Us.buttonGroup
                })
              })
            })
          }) : (0, d.jsx)(d.Fragment, {
            children: !!r.length && (0, d.jsx)(B.motion.div, {
              variants: Ws,
              children: (0, d.jsx)(as, {
                buttons: r,
                className: Us.buttonGroup
              })
            })
          })
        },
        Qs = ({
          animated: e = !1,
          brands: a = [],
          cta: t = [],
          ctas: s = [],
          description: i = "",
          expandingButtonLabel: r = "Subscribe",
          legalText: n,
          stackButtons: c,
          title: o = ""
        }) => (0, d.jsxs)(B.motion.div, {
          className: Us.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? qs : void 0,
          children: [(0, d.jsx)(B.motion.div, {
            variants: e ? Ws : void 0,
            children: (0, d.jsx)(Yt.A, {
              brands: a
            })
          }), (o || i) && (0, d.jsxs)(B.motion.div, {
            className: Us.descriptions,
            variants: e ? Ws : void 0,
            children: [o && (0, d.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: o
              }
            }), i && (0, d.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: i
              }
            })]
          }), !!t.length && (0, d.jsx)("div", {
            className: c ? Us.verticalCtaBlock : Us.ctaBlock,
            children: (0, d.jsx)(T.TinaParser, {
              components: {
                Cta: ft,
                ExpandingPlatformButton: Fs
              },
              tina: {
                payload: {
                  content: t
                }
              }
            })
          }), !!s.length && (0, d.jsx)("div", {
            className: Us.ctaBlock,
            children: (0, d.jsx)(Ys, {
              animated: e,
              ctas: s,
              expandingButtonLabel: r
            })
          }), n && (0, d.jsx)(B.motion.div, {
            className: Us.legalText,
            variants: e ? Ws : void 0,
            children: (0, d.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })
          })]
        }),
        Zs = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: s,
          ctas: i = [],
          cta: r,
          description: n = "",
          expandingButtonLabel: c = "Subscribe",
          layeredImage: o,
          layeredImageSettings: m,
          legalText: f,
          shardsSection: u = {},
          stackButtons: p = !1,
          theme: b = "gen9",
          title: k = ""
        }) => {
          const {
            breakpoints: v,
            windowWidth: h
          } = (0, g.useWindowResize)(), y = v.xxl.min, _ = (e => {
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
              const [s, i] = e;
              if (t.has(s)) {
                const e = t.get(s);
                Object.entries(i).forEach((i => {
                  const [r, n] = i;
                  if (t.has(s) && t.has(r)) {
                    const s = `${t.get(r)}${e}`;
                    a[s] = "imageWidth" !== r ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                  }
                }))
              }
            })), a
          })(m), x = (0, T.useGetCdnSource)(a?.mobile?.full_src ?? null), j = (0, T.useGetCdnSource)(a?.desktop?.full_src ?? x), N = (0, T.useGetCdnSource)(o?.mobile?.full_src ?? null), w = (0, T.useGetCdnSource)(o?.desktop?.full_src ?? N), S = (0, l.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: s
            } = a ?? {};
            return {
              ...s,
              ...h >= y ? (0, g.safeStyles)(t) : (0, g.safeStyles)(e)
            }
          }), [h, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, d.jsxs)(B.motion.div, {
            className: Y()(Us.hero, s),
            style: {
              "--background-image-desktop": `url(${j})`,
              "--background-image-mobile": `url(${x})`,
              "--layered-image-desktop": `url(${w})`,
              "--layered-image-mobile": `url(${N})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? qs : void 0,
            "data-type": "hero",
            theme: b,
            children: [(0, d.jsxs)("div", {
              className: Us.images,
              children: [j && x ? (0, d.jsx)("div", {
                className: Us.background,
                style: S ?? {}
              }) : "", N && w ? (0, d.jsx)("div", {
                className: Us.layered,
                style: m ? _ : {}
              }) : "", (0, d.jsx)("div", {
                className: Us.gradient
              })]
            }), (0, d.jsx)(Qs, {
              animated: e,
              brands: t,
              cta: r,
              ctas: i,
              description: n,
              expandingButtonLabel: c,
              legalText: f,
              stackButtons: p,
              title: k
            }), u?.shards && (0, d.jsx)(Ks, {
              ...u
            })]
          })
        },
        Js = {
          "bg-img": "rockstargames-sites-legacyae25e5bf6793a5522c791028f396dedd",
          border: "rockstargames-sites-legacyaf6154339558ed7e6e46014575250492",
          "bottom-y": "rockstargames-sites-legacyd66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-sites-legacycc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-sites-legacyd6ce82f1bd5cbf6b4abe650a2738c723",
          contain: "rockstargames-sites-legacyc409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-sites-legacya72cf62465acbddecc3a2cb256640fac",
          dual: "rockstargames-sites-legacyb9c969b033c5016f95d5a70ceea22071",
          fill: "rockstargames-sites-legacyc12eb7986b09f10158c48ad4a902f2ef",
          "hero-lg": "rockstargames-sites-legacyb722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-sites-legacyc6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-sites-legacye7b70cd5245ee850b5a2bfd048fa02c4",
          imageLayer: "rockstargames-sites-legacya63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-sites-legacya206e14a6e055900c30ee67826330173",
          "layer-lg-width": "rockstargames-sites-legacyfb58e41629b31453b12d8bbcc525608f",
          "layer-md-height": "rockstargames-sites-legacye2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-md-width": "rockstargames-sites-legacyf1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-height": "rockstargames-sites-legacyc947fc08bb64674c4bf0429e7914507e",
          "layer-sm-width": "rockstargames-sites-legacya1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-height": "rockstargames-sites-legacya4d21457b55a0626d1cf5170845ba8d6",
          "layer-xl-width": "rockstargames-sites-legacye5ecbec181677eea6c9c72e02580c501",
          "layer-xs-height": "rockstargames-sites-legacyd0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xs-width": "rockstargames-sites-legacyc60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-height": "rockstargames-sites-legacyd74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-xxl-width": "rockstargames-sites-legacyac03c56e2475aecafc08e873eed26566",
          layeredImage: "rockstargames-sites-legacyfb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-sites-legacyaf169afca6f741daca0331a1b13fa5f1",
          "left-x": "rockstargames-sites-legacybb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-sites-legacyd50c0c4bee9b09502dd611543223ed37",
          shards: "rockstargames-sites-legacya0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-sites-legacycf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-sites-legacyf317b17c9b0f0a27ed95ec2844857f25",
          "top-y": "rockstargames-sites-legacya9cd0a03e7193a5b47c6e767e045a1ec"
        },
        ei = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            s = e["--border-image-source"],
            i = (0, T.useGetCdnSource)(s || null);
          return s && (t["--border-image-source"] = `url(${i})`), (0, d.jsx)("div", {
            className: Y()(Js.border, a),
            style: {
              ...t
            }
          })
        },
        ai = e => e?.images ? (0, d.jsx)("div", {
          className: Y()(Js.layeredImage, Js[e?.variantClass], Js[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, d.jsxs)("div", {
            className: Js.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: i,
                objectFitClass: r,
                positionClassX: n,
                positionClassY: c,
                zIndex: o,
                className: l,
                style: m,
                alt: g,
                displayClass: f
              } = e;
              return (0, d.jsx)(V, {
                image: t,
                style: {
                  zIndex: o ?? a + 1
                },
                imageStyle: m,
                className: Y()(l, f, Js.imageLayer, Js[s], Js[i], Js[r], Js[n], Js[c]),
                alt: g
              }, o ?? a + 1)
            })), e?.borderImage && (0, d.jsx)(ei, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var ti = t(36716);
      const si = e => {
          const {
            image: a,
            thumbnail: t,
            style: s,
            showOpenButtonMobile: i,
            showOpenButton: r,
            showDownloadButtonMobile: n,
            showDownloadButton: c
          } = e, o = (0, g.useLocale)(), {
            isMobile: l
          } = (0, g.useWindowResize)(), m = a?.sources ?? {}, f = t?.image?.sources ?? {}, u = (0, P.C1)(m?.[o] ?? m?.en_us) ?? "", p = (0, P.C1)(f?.[o] ?? f?.en_us) ?? u, b = {
            ...t,
            ...e,
            src: u,
            thumbnail: p,
            showOpenButton: l ? i : r,
            showDownloadButton: l ? n : c
          };
          return (0, d.jsx)("div", {
            style: s,
            className: "rockstargames-sites-legacyadbaa0167219cd891249a29faec00e8f",
            children: (0, d.jsx)(ti.Yf, {
              ...b
            })
          })
        },
        ii = ({
          button: e,
          closeDialog: a,
          style: t = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: i,
            extraClasses: r,
            isDisabled: n,
            isLink: c,
            link: o,
            onClick: l,
            testId: m
          } = e;
          return c ? i && (0, d.jsx)(ti.$n, {
            asChild: !0,
            appearance: t,
            size: "MD",
            children: (0, d.jsx)("a", {
              href: o,
              ...m && {
                "data-testid": m
              },
              children: i
            })
          }) : (0, d.jsx)(ti.$n, {
            autoFocus: !0,
            iconRight: s,
            className: Y()(r),
            isDisabled: n,
            onPress: e => (e => {
              l && l(), a && a(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: t,
            "aria-label": i,
            ...m && {
              "data-testid": m
            },
            children: i
          })
        },
        ri = {
          actions: "rockstargames-sites-legacyd35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-legacyb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-legacyefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-legacyd2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-legacyf654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-legacye30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-legacydab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-legacybc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-legacyb120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-legacyf7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-legacyb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-legacya6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-legacyb2b3117a07a11b3ec5897e4718e24373"
        },
        ni = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: s,
          showDialog: i,
          onClose: r = () => {},
          closeOnOutsideClick: n = !0,
          extraClasses: c
        }) => {
          const o = (0, l.useRef)(null),
            {
              setBodyIsLocked: m
            } = (0, g.useBodyScrollable)("AlertDialog");
          (0, l.useEffect)((() => {
            i && o?.current && (o.current?.showModal?.(), m(!0))
          }), [i]);
          const f = () => {
            m(!1), r(), o.current?.close?.()
          };
          if (i) return (0, d.jsxs)("dialog", {
            ref: o,
            className: ri.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && n && (m(!1), r(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, d.jsx)("i", {
              className: [ri.icon, ri[e]].join(" ")
            }), (0, d.jsxs)("div", {
              className: [ri.content, c?.content].join(" "),
              children: [(0, d.jsx)("h3", {
                className: [ri.heading, c?.heading].join(" "),
                children: a
              }), t && (0, d.jsx)("div", {
                className: [ri.message, c?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), s && (0, d.jsx)("div", {
              className: ri.actions,
              children: s.slice(0, 2).map(((e, a) => (0, d.jsx)(ii, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: f
              }, e.buttonText)))
            })]
          })
        },
        ci = {
          tag: "rockstargames-sites-legacyb660bb706132d84852c02df01cc6ed5a"
        },
        oi = ({
          className: e,
          href: a,
          title: t,
          style: s
        }) => {
          const i = (0, d.jsxs)("div", {
            style: s,
            className: [ci.tag, e].join(" "),
            children: [(0, d.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, d.jsx)(p.A, {
            to: a,
            children: i
          }) : i
        },
        di = {
          info: "rockstargames-sites-legacyea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-sites-legacyb394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-sites-legacyc06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-legacyca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-legacyb3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-sites-legacya56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-sites-legacyf1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-sites-legacyeee9c5d3b714a61ac265369800a6d4e0"
        },
        li = ({
          section: e = "",
          index: a,
          post: t,
          noSpecialOrder: s = !1,
          focused: i
        }) => {
          const {
            track: r
          } = (0, u.useGtmTrack)(), [n] = (0, ae.useSearchParams)(), c = t.preview_images_parsed.newswire_block, o = {
            default: 0 !== a || s ? c.square || c.d16x9 || c._fallback : c.d16x9 || c.square || c._fallback,
            mobile: c.square || c._fallback
          }, [m, f] = (0, g.usePreloadImg)(o.default), b = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          }, k = (0, l.useCallback)((() => {
            r({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }), [t]);
          return (0, d.jsx)(p.A, {
            to: t.url,
            className: [di.newswireBlock, s ? di.newswireBlockNoSpecialOrder : "", null !== m ? di.startAnimation : ""].join(" "),
            focused: i,
            onClick: k,
            children: (0, d.jsxs)(d.Fragment, {
              children: [0 !== a || n.get("tag_id") ? (0, d.jsx)("div", {
                className: di.preview,
                style: b.default
              }) : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)("div", {
                  className: di.previewMobile,
                  style: b.mobile
                }), (0, d.jsx)("div", {
                  className: di.preview,
                  style: b.default
                })]
              }), (0, d.jsxs)("div", {
                className: di.info,
                children: [(0, d.jsxs)("div", {
                  className: di.top,
                  children: [t.primary_tags.length ? (0, d.jsx)(oi, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, d.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, d.jsx)("h5", {
                  className: di.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var mi = t(96566),
        gi = t(46368),
        fi = t.n(gi);
      const ui = (0, g.withTranslations)((({
          section: e = "",
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: s = "/newswire",
          t: i
        }) => {
          const r = (0, g.useLocale)(),
            {
              track: n
            } = (0, u.useGtmTrack)(),
            [c, o] = (0, ae.useSearchParams)(),
            {
              tagId: m = null
            } = (0, ae.useParams)(),
            [f, p] = (0, l.useState)(m ?? t ?? c.get("tag_id")),
            [b, k] = (0, l.useState)(1),
            [v, h] = (0, l.useState)(20),
            [y, _] = (0, l.useState)([]),
            [x, j] = (0, l.useState)(null),
            [N, {
              loading: w,
              data: S
            }] = (0, mi._l)(fi(), {
              variables: {
                tagId: Number(f),
                page: b,
                metaUrl: s,
                limit: v,
                locale: r
              }
            });
          return (0, l.useEffect)((() => {
            k(1), _([]), h(20), p(m ?? t ?? c.get("tag_id")), N()
          }), [c.get("tag_id"), m, t]), (0, l.useEffect)((() => {
            const e = y;
            S?.posts?.paging && j(S?.posts?.paging), S?.posts?.results && _(e.concat(S?.posts?.results))
          }), [S]), (0, l.useEffect)((() => {
            (() => {
              const e = c.get("page"),
                a = Number(e ?? 1);
              h(20 * a), N()
            })()
          }), []), y.length ? (0, d.jsxs)("div", {
            "data-testid": "newswire-list",
            children: [(0, d.jsx)(vi, {
              section: e,
              posts: y,
              relativeTo: a,
              noSpecialOrder: null !== f
            }), null !== x && x.nextPage ? (0, d.jsx)(kt, {
              className: "rockstargames-sites-legacye125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: e => {
                const a = c.get("page"),
                  t = Number(a ?? b) + 1;
                k(t), 20 !== v && h(20), N(), o({
                  page: String(t)
                }, {
                  replace: !0
                }), n({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: w,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        pi = {
          just1post: "rockstargames-sites-legacyd46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-sites-legacyf2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-sites-legacycfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-sites-legacyb8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-sites-legacyf94728c4a438800b9abab11a8b3e3c0a"
        },
        bi = (0, g.withTranslations)((({
          posts: e,
          t: a
        }) => (0, d.jsxs)("section", {
          className: pi.related,
          children: [(0, d.jsx)("h2", {
            children: a("Related Stories")
          }), (0, d.jsx)("div", {
            className: [pi.posts, 1 === e.length ? pi.just1post : ""].join(" "),
            children: e.map((e => (0, d.jsx)(li, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        }))),
        ki = {
          newswireBlocks: "rockstargames-sites-legacyea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-legacyd301334a72b626f8cc2f5b9733299e76"
        },
        vi = (0, g.withGtmTracking)((({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: s,
          relativeTo: i
        }) => {
          const [r, n] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            if (!t.length) return;
            const a = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            t.map(((t, s) => {
              a.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: e
              })
            })), s(a), n(t.length)
          }), [t.length]), (0, d.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [ki.newswireBlocks, a ? ki.noSpecialOrder : "", ki.contextHome].join(" "),
            children: t.map(((t, s) => (0, d.jsx)(li, {
              section: e,
              index: s,
              noSpecialOrder: a,
              post: t,
              focused: s === r
            }, t.id)))
          })
        }));
      var hi = t(43582);
      const yi = "rockstargames-sites-legacyb013d77f453d7053bbcf06f173ff326c",
        _i = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: s,
          className: i
        }) => (0, d.jsx)("a", {
          href: "#",
          className: s === a.page ? `rockstargames-sites-legacyb577d5726806ec872ecdb8a46905734f ${i??""}` : "",
          onClick: e => {
            e.preventDefault(), t(s)
          },
          children: e
        }),
        xi = ({
          data: e,
          onPageUpdate: a,
          className: t
        }) => {
          if (1 === e.pageCount) return null;
          const s = new Array(Math.min(e.pageCount, 8)),
            i = Math.max(e.pageCount - 8, 1),
            r = Math.max(2, e.page - 4),
            n = Array.from(s, ((e, a) => a + Math.min(i, r)));
          return (0, d.jsxs)("div", {
            className: `rockstargames-sites-legacye480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)(_i, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, d.jsx)("div", {
                className: yi,
                children: "..."
              }) : ""]
            }) : "", n.map((s => (0, d.jsx)(_i, {
              data: e,
              onPageUpdate: a,
              page: s,
              className: t,
              children: s
            }, s))), e.pageCount > 8 ? (0, d.jsxs)(d.Fragment, {
              children: [n.slice(-1)[0] + 1 < e.pageCount ? (0, d.jsx)("div", {
                className: yi,
                children: "..."
              }) : "", (0, d.jsx)(_i, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        };
      var ji = t(68484);
      const Ni = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, ji.as)();
          return (0, l.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), e
        },
        wi = {
          large: "rockstargames-sites-legacye15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-sites-legacydfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-sites-legacye30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-sites-legacyc32a973dbc862a43cc5d4a2aac19ed9b"
        },
        Si = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: s
        }) => (0, d.jsx)(ji.zE, {
          scrollAxis: e,
          children: (0, d.jsx)(Ni, {
            children: (0, d.jsx)("div", {
              className: Y()(wi.parallaxWrapper, wi[a]),
              style: t,
              "data-context": "parallax-wrapper",
              children: s ? s.map(((a, t) => (0, l.cloneElement)(a, {
                scrollAxis: e,
                style: {
                  ...a?.props?.style,
                  zIndex: t
                }
              }))) : (0, d.jsx)("div", {})
            })
          })
        }),
        Ci = ({
          layers: e = [],
          displayClass: a = "",
          style: t = {}
        }) => {
          const s = (0, T.useGenerateCdnSource)();
          if (!e || !e[0]?.image) return null;
          const i = e.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: s(e?.image ?? null)
          })));
          return (0, d.jsx)(ji.y, {
            className: Y()("rockstargames-sites-legacyc1c689cf47230fa80bccc9b20515d4fa", a),
            layers: i,
            style: t
          })
        },
        Ti = "rockstargames-sites-legacyae8bfc3f9a519606a95144e64ee454b5",
        Ii = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: s = "",
          style: i = {},
          children: r
        }) => "horizontal" === t ? (0, d.jsx)(ji.kQ, {
          x: [e, a],
          className: Y()(Ti, s),
          styleOuter: i,
          children: r
        }) : (0, d.jsx)(ji.kQ, {
          y: [e, a],
          className: Y()(Ti, s),
          styleOuter: i,
          children: r
        }),
        Li = {
          gradient: "rockstargames-sites-legacyb78d3c0bdc9668bb3d318825467177ab",
          left: "rockstargames-sites-legacyf4448b69feb648b8b910230c6f873dbd",
          pillBtn: "rockstargames-sites-legacyb12cdd53cc59cb42903d11d9fdceca7f",
          promoModule: "rockstargames-sites-legacyeabbb5f24c40ef994b612515a0d0f356",
          promoModuleContentContainer: "rockstargames-sites-legacyef7d758b0d1515fcebe6cb22271a4688",
          promoModuleImage: "rockstargames-sites-legacyb8584eedfbe5a91aaf72c40ec1d619a5",
          promoModuleTextContent: "rockstargames-sites-legacyb590150a7ac01a01a493b85b7ea5cf90",
          promoModuleWrapper: "rockstargames-sites-legacyde25220583bb9220882329a113f7a5e2",
          right: "rockstargames-sites-legacyb69bb02f1c00007e9b4eab8217e2f08e",
          selected: "rockstargames-sites-legacye03b475da5ca3ded74e8c6dfd54fb476"
        },
        Pi = ({
          backgroundColor: e,
          brands: a = [],
          description: t = "",
          ctaLabel: s,
          ctaLink: i = "https://rockstargames.com",
          gradient: r = !0,
          image: n,
          imageOrientation: c = "right",
          title: o = "",
          name: m = "",
          style: g,
          _memoq: p
        }) => {
          const [b, k] = (0, l.useState)(!1), {
            ref: v,
            inView: h
          } = (0, f.useInView)({
            threshold: .6
          }), {
            track: y
          } = (0, u.useGtmTrack)(), _ = {
            ...g,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${(0,T.useGetCdnSource)(n)??"var(--promo-background)"})`,
            "--promo-order": "left" === c ? "row" : "row-reverse"
          };
          return (0, l.useEffect)((() => {
            h && !b && (y({
              event: "page_section_impression",
              element_placement: m?.toLowerCase()
            }), k(!0))
          }), [h]), (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)("div", {
              className: Li.promoModuleWrapper,
              children: (0, d.jsxs)(B.motion.div, {
                className: Li.promoModule,
                style: {
                  ..._
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
                ref: v,
                children: [(0, d.jsx)("div", {
                  className: [Li.promoModuleImage, r ? Li.gradient : "", "left" === c ? Li.left : Li.right].join(" ")
                }), (0, d.jsxs)("div", {
                  className: Li.promoModuleContentContainer,
                  children: [(0, d.jsx)(Yt.A, {
                    brands: a,
                    className: Li.promoModuleBrands
                  }), (0, d.jsxs)("div", {
                    className: Li.promoModuleTextContent,
                    children: [o && (0, d.jsx)("h3", {
                      children: o
                    }), t && (0, d.jsx)("p", {
                      children: t
                    })]
                  }), s && (0, d.jsx)(es, {
                    to: i,
                    text: s,
                    onClick: () => {
                      y({
                        event: "cta_learn",
                        element_placement: "promo module",
                        link_url: i,
                        text: p?.ctaLabel.toLowerCase()
                      })
                    }
                  })]
                })]
              })
            })
          })
        },
        Ei = {
          responsiveFlexBox: "rockstargames-sites-legacyfad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-sites-legacyf5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-sites-legacyd437a700a9b768227a114e70db78af03"
        },
        zi = ({
          children: e,
          className: a,
          style: t
        }) => (0, d.jsx)("div", {
          className: [Ei.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Vi = {
          responsiveFlexItem: "rockstargames-sites-legacye7371144db2e94a049204d4b178416ec"
        },
        Bi = ({
          children: e,
          className: a,
          style: t
        }) => (0, d.jsx)("div", {
          className: [Vi.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Mi = {
          responsiveGridBox: "rockstargames-sites-legacye9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-sites-legacyb0d14e4a5e63a903117e93a392cbfb53"
        },
        Di = ({
          children: e,
          cols: a,
          className: t,
          rows: s,
          style: i
        }) => {
          const r = i ? {
            ...i
          } : {};
          return void 0 !== a && (r.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== s && (r.gridTemplateRows = `repeat(${s}, 1fr)`), (0, d.jsx)("div", {
            className: [Mi.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: r,
            children: e
          })
        },
        Ai = {
          responsiveGridBox: "rockstargames-sites-legacye721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-sites-legacya32d93b6ae982b5ad473f75cf86ff085"
        },
        $i = ({
          children: e,
          className: a,
          style: t
        }) => (0, d.jsx)("div", {
          className: [Ai.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Fi = {
          responsiveImage: "rockstargames-sites-legacyf642b754e0efd503262ab7ca0c7b9f5b"
        },
        Oi = ({
          src: e,
          className: a = "",
          animate: t,
          ariaLabel: s,
          style: i = {}
        }) => {
          const [r, n] = (0, g.usePreloadImg)(e);
          if (!r) return null;
          i.backgroundImage = `url(${e})`;
          const c = {
            ...i
          };
          return n && (c["--aspect-ratio"] = n.width / n.height), (0, d.jsx)("div", {
            role: "img",
            "aria-label": s ?? "R* Games",
            className: [Fi.responsiveImage, t ? Fi.animateBox : "", a].join(" "),
            style: c
          })
        },
        Gi = {
          maxWidth: "rockstargames-sites-legacyb2c8f49e280c2e7c204b30a4af8c13b9",
          responsiveSection: "rockstargames-sites-legacybd7167fb3a3edaf4df4d9a576efb1170"
        },
        Ri = ({
          children: e,
          className: a,
          style: t,
          maxWidth: s
        }) => (0, d.jsx)("section", {
          className: [Gi.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: s ? (0, d.jsx)("div", {
            className: Gi.maxWidth,
            children: e
          }) : e
        }),
        Hi = ({
          disableLink: e,
          className: a,
          "data-testid": t
        }) => {
          const s = e ? "span" : p.A;
          return (0, d.jsx)(s, {
            className: [e ? "rockstargames-sites-legacyb28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-legacya3d920a1139575706b914bc3a0100970", a || ""].join(" "),
            "data-testid": t,
            alt: "Rockstar Games Home",
            ...!e && {
              to: "/"
            }
          })
        };
      var Ui = t(45881);
      const qi = ({
          html: e
        }) => (0, d.jsx)("div", {
          children: (0, Ui.Ay)(e)
        }),
        Wi = ({
          thresholds: e,
          onThresholdReached: a,
          children: t
        }) => {
          const [s, i] = (0, l.useState)([]), [r, n] = (0, l.useState)(new Set);
          return (0, l.useEffect)((() => {
            const a = Array.from(new Set(e));
            a.sort(((e, a) => e - a)), i(a)
          }), [e]), (0, d.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [s.map((e => (0, d.jsx)(f.InView, {
              threshold: e,
              onChange: t => ((e, t) => {
                e && !r.has(t) && n((e => {
                  const i = new Set(e);
                  return s.forEach((e => {
                    e <= t && !i.has(e) && (i.add(e), a(e))
                  })), i
                }))
              })(t, e),
              triggerOnce: !0,
              children: ({
                ref: a
              }) => (0, d.jsx)("div", {
                ref: a,
                style: {
                  height: "1px",
                  position: "absolute",
                  top: 100 * e + "%"
                }
              })
            }, e))), t]
          })
        },
        Xi = () => {
          const {
            pathname: e
          } = (0, ae.useLocation)();
          return (0, l.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var Ki = t(67050);
      const Yi = ({
        children: e
      }) => (0, d.jsx)("div", {
        className: "rockstargames-sites-legacyaae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, d.jsx)("div", {
          className: "rockstargames-sites-legacyc573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var Qi = t(10826),
        Zi = t(48524);
      const Ji = {
          downVote: "rockstargames-sites-legacye23b13b0d0be49814d3770c10365c096",
          info: "rockstargames-sites-legacycee10f330f3ac6fba73fc06ac99bc951",
          loggedOutButtons: "rockstargames-sites-legacyc393b8f2d3b5b3e9204881ae6ff0fdc5",
          pillBtn: "rockstargames-sites-legacya0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-sites-legacyde6015fb35bdee07192c1656ba4893e3",
          upVote: "rockstargames-sites-legacyb3be682e82659d45f93c2fe63ccd73ba",
          userVote: "rockstargames-sites-legacyb32a59a8a63c53cc278266d726c9c5da",
          voteButtonActive: "rockstargames-sites-legacyf9e46f58f97d2b391aaf715861654cd7",
          voteButtons: "rockstargames-sites-legacydda673f7473820d8884c017373c780f6",
          voteContent: "rockstargames-sites-legacyaad01ad44bcc6161ad363910e931515f"
        },
        er = ({
          description: e,
          foreign_id: a = document.location.pathname,
          foreign_type: t = "url",
          title: s
        }) => {
          const {
            track: i
          } = (0, u.useGtmTrack)(), {
            loggedIn: r
          } = (0, u.useRockstarUser)(), {
            refetch: n
          } = (0, g.useQuery)(Zi.UserGetVote, {
            skip: !0
          }), [c] = (0, g.useMutation)(Zi.UserCastVote), [o, m] = (0, l.useState)(null), f = (0, l.useCallback)((async e => {
            i({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${t} ${a}`
            });
            const s = {
                foreign_id: a,
                foreign_type: t,
                vote: e
              },
              r = await c({
                variables: s
              });
            m(r?.data?.userCastVote?.vote ?? null)
          }), [a, t]);
          return (0, l.useEffect)((() => {
            (async () => {
              if (!r || !a || !t) return;
              const e = await n({
                foreign_id: a,
                foreign_type: t
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t, r]), (0, d.jsx)("div", {
            className: Ji.userVote,
            children: (0, d.jsxs)("div", {
              className: Ji.voteContent,
              children: [(0, d.jsxs)("div", {
                className: Ji.info,
                children: [(0, d.jsx)("h3", {
                  children: s
                }), (0, d.jsx)("p", {
                  children: e
                })]
              }), (0, d.jsxs)("div", {
                className: [Ji.voteButtons, r ? "" : Ji.loggedOutButtons].join(" "),
                children: [(0, d.jsx)("button", {
                  onClick: () => f(!0),
                  className: [Ji.upVote, o ? Ji.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, d.jsx)("button", {
                  className: [Ji.downVote, !1 === o ? Ji.voteButtonActive : ""].join(" "),
                  onClick: () => f(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        ar = {
          card: "rockstargames-sites-legacyf93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-sites-legacya1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-sites-legacydabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-sites-legacyfd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-legacyb8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-sites-legacyfd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-sites-legacya626ad482ff0be0336e75929516654d5"
        },
        tr = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [s] = (0, g.usePreloadImg)(t());
          return (0, d.jsx)("div", {
            className: [ar.screencap, s ? ar.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        sr = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: s,
          toExplicit: i
        }) => {
          const r = i ?? `/videos/${t.id}`,
            n = {
              className: ar.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": r
            },
            c = (0, d.jsxs)("div", {
              className: ar.card,
              children: [(0, d.jsx)(tr, {
                video: t,
                size: s
              }), (0, d.jsxs)("div", {
                className: ar.info,
                children: [e ? (0, d.jsx)("div", {
                  className: ar.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, d.jsx)("h5", {
                  className: ar.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, d.jsx)("a", {
            href: r,
            target: "_blank",
            ...n,
            children: c
          }) : (0, d.jsx)(p.A, {
            to: r,
            ...n,
            children: c
          })
        },
        ir = {
          active: "rockstargames-sites-legacye35688e0d87409e3aef95ffb624d94f4",
          carousel: "rockstargames-sites-legacybc3f1abaac4c17c0e9aaac5fccfc6f7e",
          cta: "rockstargames-sites-legacyf40c40ed1bc4242a32bc0628eea34048",
          disableClick: "rockstargames-sites-legacyfcd11cd5895147a9e08f8f4026d68d94",
          dots: "rockstargames-sites-legacye0ca3ed410818f0961345606a96f03ee",
          dragging: "rockstargames-sites-legacyb335b03fce6834b86318f3d7cbf3fab6",
          gameTitle: "rockstargames-sites-legacyb5d3df350466b14e4b419bdb479b4064",
          info: "rockstargames-sites-legacya4057ef942e10ebeedb1370b08c3c32b",
          items: "rockstargames-sites-legacyd30be9a5f31ff7fabf20969eec3200f1",
          slidesContent: "rockstargames-sites-legacyc4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-sites-legacycdb5c063bfc35cfbaaaefc68a77c1b07",
          title: "rockstargames-sites-legacye66c271fbbc8b6e431fc5d466c57479c",
          track: "rockstargames-sites-legacyefe7112432da76c65f293853b4c942d1",
          videoTitle: "rockstargames-sites-legacyed4138b1e7fecd4b6d29f0e1bef1fdfd"
        },
        rr = (0, m.defineMessages)({
          learn_more: {
            id: "carousel_learn_more",
            description: "Carousel learn more button text",
            defaultMessage: "Learn More"
          },
          watch_more: {
            id: "carousel_watch_more",
            description: "Carousel watch more button text",
            defaultMessage: "Watch Now"
          }
        }),
        nr = (0, _.g)((({
          videos: e
        }) => {
          const a = (0, g.useLocale)(),
            {
              formatMessage: t
            } = (0, m.useIntl)(),
            {
              track: s
            } = (0, u.useGtmTrack)(),
            {
              setBodyIsLocked: i
            } = (0, g.useBodyScrollable)("VideoCarousel"),
            [r, n] = (0, l.useState)(0),
            [c, o] = (0, l.useState)(0),
            f = (0, l.useRef)(null),
            b = (0, l.useRef)(null);
          (0, l.useEffect)((() => {
            if (!f.current || !b.current) return;
            const a = new(Rt())(f.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                n(r - 1 < 0 ? 0 : r - 1), o(0)
              },
              c = () => {
                const a = r + 1 >= e.length - 1 ? e.length - 1 : r + 1;
                n(a), o(0)
              },
              d = e => {
                o(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !b.current?.classList.contains(ir.dragging) || t() && i(!0)
              },
              l = () => {
                t() && i(!1), o(0)
              },
              m = e => {
                "press" === e.type && f.current?.classList.add(`${ir.disableClick}`), "tap" === e.type && (f.current?.classList.remove(`${ir.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                t() && i(!1), f.current && f.current.classList.remove(`${ir.disableClick}`)
              },
              u = () => {
                t() && i(!1)
              };
            return b.current.addEventListener("transitionend", u), a.on("swiperight", s), a.on("swipeleft", c), a.on("pan", d), a.on("panend", l), a.on("press tap", m), a.on("pressup", g), () => {
              a.off("swiperight", s), a.off("swipeleft", c), a.off("pan", d), a.off("panend", l), a.off("press tap", m), a.off("pressup", g), b.current && b.current.removeEventListener("transitionend", u), o(0)
            }
          }), [f.current, r]);
          const k = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? rr.learn_more : rr.watch_more)]
          };
          return (0, d.jsxs)("section", {
            className: ir.carousel,
            children: [(0, d.jsx)("div", {
              className: ir.track,
              ref: f,
              children: (0, d.jsx)("div", {
                className: `${ir.items} ${0!==c?ir.dragging:""}`,
                ref: b,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${c}px))`
                },
                children: e.map(((e, a) => {
                  const [t, s, i] = k(e);
                  return (0, d.jsx)(p.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": s,
                    to: s,
                    className: r === a ? ir.active : "",
                    role: "link",
                    title: t,
                    tabIndex: r === a ? 0 : -1,
                    target: i,
                    children: (0, d.jsx)(tr, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                }))
              })
            }), (0, d.jsxs)("div", {
              className: ir.slidesContent,
              children: [(0, d.jsx)("div", {
                className: ir.text,
                children: e.map(((e, t) => {
                  const [i, n, c, o] = k(e);
                  return (0, d.jsxs)(p.A, {
                    className: [ir.info, t === r ? ir.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": n,
                    to: n,
                    role: "link",
                    title: i,
                    tabIndex: r === t ? 0 : -1,
                    target: c,
                    children: [(0, d.jsxs)("div", {
                      className: ir.title,
                      children: [(0, d.jsxs)("div", {
                        className: ir.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, d.jsx)("h2", {
                        className: ir.videoTitle,
                        children: i
                      })]
                    }), (0, d.jsx)(kt, {
                      className: ir.cta,
                      onClick: (l = n, () => {
                        s({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: l,
                          element_placement: "video carousel"
                        })
                      }),
                      children: o
                    })]
                  }, e.id);
                  var l
                }))
              }), (0, d.jsx)("section", {
                className: ir.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map(((e, a) => (0, d.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => n(a),
                  className: r === a ? ir.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        cr = (0, m.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            description: "Aria label to indicate going to the next page of videos",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            description: "Aria label to indicate going to the previous page of videos",
            defaultMessage: "Previous video page"
          }
        }),
        or = {
          img: "rockstargames-sites-legacyd87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-sites-legacyb9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-sites-legacydc444c089b89129c0a39bc61845d531f"
        };
      (0, g.importAll)(t(86751));
      const dr = ({
          isWideCard: e = !1,
          size: a = 640,
          title: s,
          titleSlug: i
        }) => {
          const {
            isMobile: r
          } = (0, g.useWindowResize)(), n = (0, l.useMemo)((() => {
            let s = "";
            return e && (s = r ? t(24865)(`./${i}/mobile.jpg`) : t(53781)(`./${i}/desktop.jpg`)), s || (s = t(39294)(`./${i}.jpg`), s += `?im=Resize=${a}`), s
          }), [r, i]), [c] = (0, g.usePreloadImg)(n);
          let o = n;
          return (0, d.jsx)("div", {
            role: "img",
            "aria-label": s,
            style: {
              backgroundImage: `url(${o})`
            },
            className: [or.img, c ? or.startAnimation : "", e ? or.wide : ""].join(" ")
          })
        },
        lr = {
          fobLink: "rockstargames-sites-legacyd30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-legacyc9686ec502f78b05e47568667e90bd17"
        },
        mr = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: s = ""
          } = e, i = ["VI"].includes(t.toUpperCase());
          return (0, d.jsx)(p.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? s,
            target: "_self",
            className: [lr.fobLink, i ? lr.wide : ""].join(" "),
            reloadDocument: i,
            children: (0, d.jsx)(dr, {
              title: e.title,
              titleSlug: t,
              isWideCard: i,
              size: i ? 1740 : 480
            })
          })
        },
        gr = {
          arrow: "rockstargames-sites-legacycabb1073f7b7f75b799c87d74cfaf0ad",
          arrowNav: "rockstargames-sites-legacyc9b73b78d75dd740e918208a9d615796",
          disabled: "rockstargames-sites-legacydbe1b06efadb349825f7b9b1b2778c68",
          items: "rockstargames-sites-legacyef63b0224f0cc9fa73a9c4549ad6c7e9",
          next: "rockstargames-sites-legacybfdf85a5867d26b52a0962be91170e36",
          partial: "rockstargames-sites-legacyab95829b388545f21071fd5bb97c25bb",
          previous: "rockstargames-sites-legacyd7404262ef1f79bde0883b02110a4a5d",
          sectionHeader: "rockstargames-sites-legacyad695c18d6276297e78924feea3e6201",
          track: "rockstargames-sites-legacya4d3877b3cf6bff0abccdc561c0fe149",
          trackWrapper: "rockstargames-sites-legacybd79ab04bc93e3bcf79be808e0a06e9b",
          videoList: "rockstargames-sites-legacybacddb57787eca7b621a046e6f23aaf5"
        },
        fr = (0, _.g)((({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: s
        }) => {
          const i = (0, m.useIntl)(),
            {
              track: r
            } = (0, u.useGtmTrack)(),
            n = void 0 !== a ? "games" : "videos",
            [c, o] = (0, l.useState)(),
            [g, f] = (0, l.useState)(),
            [p, b] = (0, l.useState)(0),
            k = (0, l.useRef)(null),
            v = (0, l.useRef)(null);
          (0, l.useEffect)((() => {
            f({
              nextEl: v.current,
              prevEl: k.current
            })
          }), [v, k]), (0, l.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), b(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p]);
          const h = e => {
            c?.slideTo(e)
          };
          let y;
          return y = "games" === n ? (0, d.jsx)(d.Fragment, {
            children: a.results.map(((e, a) => "775700as" !== e.id && (0, d.jsx)(ge.qr, {
              className: gr.slide,
              onFocus: () => h(a),
              children: (0, d.jsx)(mr, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, d.jsx)(d.Fragment, {
            children: e.map(((e, a) => (0, d.jsx)(ge.qr, {
              className: gr.slide,
              onFocus: () => h(a),
              children: (0, d.jsx)(sr, {
                video: e,
                gameTitleNecessary: s
              })
            }, e.id)))
          }), (0, d.jsxs)("section", {
            className: gr.videoList,
            children: [(0, d.jsxs)("h3", {
              className: gr.sectionHeader,
              children: [t, (0, d.jsxs)("div", {
                className: gr.arrowNav,
                children: [(0, d.jsx)("button", {
                  className: [gr.arrow, gr.previous].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": i.formatMessage(cr.previous_button_label)
                }), (0, d.jsx)("button", {
                  className: [gr.arrow, gr.next].join(" "),
                  type: "button",
                  ref: v,
                  "aria-label": i.formatMessage(cr.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = c?.slides[c?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, d.jsx)("div", {
              className: [gr.items, p % 1 != 0 ? gr.partial : ""].join(" "),
              children: (0, d.jsx)("div", {
                className: gr.trackWrapper,
                children: p && (0, d.jsx)(ge.RC, {
                  className: gr.track,
                  slidesPerView: p,
                  spaceBetween: 24,
                  onInit: e => {
                    o(e)
                  },
                  grabCursor: !0,
                  navigation: g,
                  modules: [Et.Vx],
                  slideClass: Y()("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    r({
                      event: "carousel_next",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    r({
                      event: "carousel_previous",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    r({
                      event: "carousel_swipe",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  children: y
                })
              })
            })]
          })
        })),
        ur = ({
          children: e,
          ...a
        }) => (0, d.jsx)("span", {
          ...a,
          className: "rockstargames-sites-legacyacd86b7f5778381df8fac4a3f7489f60",
          children: e
        });
      var pr = t(34100),
        br = t(57386),
        kr = t(72408);
      const {
        Gen9CoreCarousel: vr,
        framer: hr,
        useTinaModuleFetchByIds: yr,
        withSimpleErrorBoundary: _r
      } = o, xr = {
        Card: ot,
        CardWithImageGallery: ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: i = "gallery",
          textOverlayProps: r = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: n = [],
          deckProps: c = {},
          tina: o = {},
          payload: m,
          position: g = 0,
          sectionTitle: f = "",
          cardIds: u
        }) => {
          const p = (0, T.useTinaPayload)(),
            b = m ?? p,
            k = o?.payload?.meta?.cdn ?? b?.meta?.prod ?? !1,
            v = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(n, k),
            [h, y] = (0, l.useState)(c?.size ?? s),
            {
              parent: _,
              main: x,
              thumbs: j
            } = Ft?.cardWithImageGallery?.gallery ?? {};
          return (0, l.useEffect)((() => {
            y(c?.size ?? s)
          }), [c?.size, s]), (0, d.jsx)(Ya, {
            id: e,
            position: g,
            sectionTitle: f,
            payload: {
              content: t,
              meta: {},
              payload: b
            },
            title: a,
            size: h,
            expandedType: i,
            images: v,
            deckProps: c,
            prod: k,
            variants: Ft.cardWithImageGallery,
            textOverlayProps: r,
            modalProps: {
              className: At.customModal,
              contentClassName: At.customModalContent
            },
            expandedCardContents: (0, d.jsx)(Dt, {
              images: v,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: _,
                main: x,
                thumbs: j
              },
              transition: {
                parent: $t.cardOpen,
                main: $t.cardOpen,
                thumbs: $t.cardOpen
              }
            }),
            cardIds: u,
            children: (0, d.jsx)("div", {
              className: At.content,
              children: (0, d.jsx)(Fa, {
                title: a,
                size: h,
                textOverlayProps: r,
                children: (0, d.jsx)(Dt, {
                  images: v,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        },
        TextCard: ({
          title: e,
          content: a,
          size: t = "md",
          badgeText: s
        }) => {
          const i = {
            ...(0, T.useTinaComponents)(),
            HTMLElement: Ue,
            UnorderedList: aa.A,
            ListItem: Ot.A
          };
          return (0, d.jsx)("div", {
            className: "rockstargames-sites-legacycfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": t,
            children: (0, d.jsxs)("div", {
              className: "rockstargames-sites-legacya4a39548fac12526e8721ffa8813e66a",
              children: [s && (0, d.jsx)("div", {
                className: "rockstargames-sites-legacycf77e65e2af63ee114825607dde3d11e",
                children: s
              }), (0, d.jsxs)("div", {
                className: "rockstargames-sites-legacyf903ce7e605696e1bc18c4bc22274a6e",
                children: [e && (0, d.jsx)("h3", {
                  children: e
                }), (0, d.jsx)(T.TinaParser, {
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
        },
        ...o
      }, jr = hr.withFadeIn(_r((({
        cards: e = [],
        size: a,
        name: t,
        title: s,
        description: i,
        disclaimer: r,
        customSlidesPerView: n = null,
        theme: c = "none",
        cardSizeBreakpoints: o = {},
        customAspectRatio: m = "3/1",
        titleBadge: g = null,
        id: f = ""
      }) => {
        const u = (0, l.useRef)(null),
          p = He().map(e, "id"),
          b = yr({
            ids: p
          }),
          [k, v] = (0, l.useState)(n),
          [h] = (0, ae.useSearchParams)(),
          [y, _] = (0, l.useState)(!1);
        (0, l.useEffect)((() => {
          if ("fob" === a) {
            const e = h.get("section");
            if (e && "games" === e && !y && (_(!0), u.current)) {
              const e = 100;
              window.scrollTo(0, u.current.offsetTop - e)
            }
          }
        }), []), (0, l.useEffect)((() => {
          if (!u.current) return;
          const e = () => {
            const e = n || window.getComputedStyle(u.current).getPropertyValue("--slides-per-view");
            v(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const x = (0, l.useMemo)((() => {
          let e = 0;
          if (!b) return null;
          let t = "blank",
            i = !1;
          return b.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (i = e.tina.payload.content[0].excludeFromModal))
          })), b.reduce(((r, n) => {
            if (n) {
              const {
                id: o,
                tina: l
              } = n, m = He().clone(l);
              He().set(m, "payload.meta.id", o);
              const g = p.filter((e => e !== t || e === t && !i));
              r.push((0, d.jsx)(T.TinaParser, {
                components: xr,
                tina: m,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: m,
                  id: o,
                  position: e,
                  sectionTitle: s,
                  theme: c,
                  cardIds: g
                }
              }, o)), e += 1
            }
            return r
          }), [])
        }), [b, a]);
        return (0, d.jsxs)("div", {
          className: "rockstargames-sites-legacycf8eaaa96e41e0c9b5a5a1745ded9986",
          "data-theme": c,
          ref: u,
          id: f,
          children: [(0, d.jsx)(vr, {
            description: i,
            size: a,
            cardSizeBreakpoints: o,
            slideChildren: x,
            title: s,
            name: t,
            customSlidesPerView: k,
            customAspectRatio: m,
            titleBadge: g,
            theme: c
          }), r && (0, d.jsx)("div", {
            className: "rockstargames-sites-legacyd6d0f9d842469dec608825829148dff6",
            children: (0, d.jsx)("span", {
              className: "rockstargames-sites-legacye22c0580e1e1d2471b4ca2e60e6b900f",
              children: (0, d.jsx)(qi, {
                html: r
              })
            })
          })]
        })
      }))), Nr = ({
        buttonStyle: e = "borderless",
        platformsAndLinks: a = [],
        label: t = ""
      }) => (0, d.jsxs)("div", {
        className: "rockstargames-sites-legacyd68369e5750fd5a6745b7f55ecdfb95a",
        children: [t && (0, d.jsx)("div", {
          className: "rockstargames-sites-legacyb38a559f97761aa5d5f14f3048c79409",
          children: t
        }), (0, d.jsx)("div", {
          className: "rockstargames-sites-legacye81ac885e47451ab08344f0c1fa13b7c",
          children: a?.length ? a.map((a => (0, d.jsx)(ft, {
            platformItem: a.platform,
            href: a.href,
            variant: "platform",
            platformStyle: e,
            gtm: a.gtm
          }, `${a.key}-${a.href}-${a.platform}`))) : ""
        })]
      }), wr = ({
        id: e,
        title: a,
        body: t,
        backgroundImageAndMask: s,
        expandingButton: i,
        image: r,
        buttonCollections: n,
        ...c
      }) => {
        const [o] = (0, ae.useSearchParams)(), {
          key: m
        } = (0, ae.useLocation)(), p = (0, g.useLocale)(), b = r?.sources?.[p] ?? r?.sources?.en_us, k = b?.mobile ?? b?.desktop, {
          track: v
        } = (0, u.useGtmTrack)(), {
          ref: h,
          inView: y,
          entry: _
        } = (0, f.useInView)({
          threshold: .6
        }), [x, j] = (0, l.useState)(!1), N = (0, T.useGetCdnSource)(k ?? null), w = (0, T.useGetCdnSource)(s?.backgroundImage?.mobile), S = (0, T.useGetCdnSource)(s?.backgroundImage?.desktop ?? w), C = (0, T.useGetCdnSource)(s?.backgroundImageMask?.mobile), I = (0, T.useGetCdnSource)(s?.backgroundImageMask?.desktop ?? C), L = !(!I && !C), P = {
          "--background-image-desktop": `url(${S})`,
          "--background-image-mobile": `url(${w})`,
          "--image-mask-desktop": `url(${I})`,
          "--image-mask-mobile": `url(${C})`,
          "--background-attachment": s?.backgroundImage?._memoq?.backgroundAttachment || "",
          "--background-clip": s?.backgroundImage?._memoq?.backgroundClip || "",
          "--background-color": s?.backgroundImage?._memoq?.backgroundColor || "",
          "--background-origin": s?.backgroundImage?._memoq?.backgroundOrigin || "",
          "--background-position": s?.backgroundImage?._memoq?.backgroundPosition || "",
          "--background-repeat": s?.backgroundImage?._memoq?.backgroundRepeat || "",
          "--background-size": s?.backgroundImage?._memoq?.backgroundSize || ""
        };
        (0, l.useEffect)((() => {
          _?.target && o.get("section") && (0, g.detectIfWeShouldAnchorSomewhere)()
        }), [m, _?.target]), (0, l.useEffect)((() => {
          y && !x && (v({
            event: "page_section_impression",
            element_placement: c?._memoq?.title?.toLowerCase()
          }), j(!0))
        }), [y]), L || (P.background = `url(${S}) center / cover no-repeat`);
        const E = (0, d.jsxs)("div", {
          className: "rockstargames-sites-legacyadcd8d241981100755a742c74e7bd94f",
          id: e ?? "",
          ref: h,
          children: [(0, d.jsxs)("div", {
            className: "rockstargames-sites-legacybda7a52557d65b5b77591cb72cd816cd",
            children: [(0, d.jsxs)("div", {
              className: "rockstargames-sites-legacyac76b38d897113817fe23bc213c15e78",
              children: [(0, d.jsx)("h2", {
                className: "rockstargames-sites-legacyf3a2443fd11c6b4985040c0c8b8626dd",
                children: a
              }), t && (0, d.jsx)("div", {
                className: "rockstargames-sites-legacydbc11e7a1290bf63806e68015190226e",
                dangerouslySetInnerHTML: {
                  __html: (z = t, z ? z.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                }
              })]
            }), n?.length && n.map((e => (0, d.jsx)(Nr, {
              ...e
            }, `${e.key}-${e.label}`)))]
          }), (0, d.jsx)("div", {
            className: "rockstargames-sites-legacydeba9959998ba6d23ac352b4e9ecc4f6",
            children: N && (0, d.jsx)("img", {
              src: N,
              alt: "Red Dead Redemption"
            })
          })]
        });
        var z;
        return (0, d.jsx)(me.motion.div, {
          className: "rockstargames-sites-legacycac3b31dae278727a39f512006bda9e5",
          initial: "hidden",
          animate: "visible",
          variants: {
            visible: {
              opacity: 1,
              width: "100%",
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
          style: P,
          "data-has-mask": L,
          children: E
        })
      }, Sr = {
        contentWrapper: "rockstargames-sites-legacyef5fd586a3a3d71a6b742534583a024c",
        legacyPageTemplate: "rockstargames-sites-legacyee87a30aaa5f73108a19c7f2e825c468",
        maxWidthContainer: "rockstargames-sites-legacyfefeb2c2da5d3a02fe39fd2219a4b3b7",
        pillBtn: "rockstargames-sites-legacyddd61c57b98274deba1ff3133021c385",
        rdrUltra: "rockstargames-sites-legacye92ae324b26f8bcac90fd4e5fd37615c",
        selected: "rockstargames-sites-legacyfaeeb24b4865af92a9d379b83295e3f7",
        universalCyrillic: "rockstargames-sites-legacya759b2acd24574b2ee2c6bfd7eec2630",
        videoPlayerContainer: "rockstargames-sites-legacyff18d36d928ea542eeef6bb5d05262d5",
        videosContainer: "rockstargames-sites-legacyf8000eec4a4f435f367d27b1d20a53de"
      }, Cr = ({
        headerFont: e,
        hero: a,
        featureBlockBackgroundImageGroup: t,
        features: s,
        fob: i,
        highlightCollection: r,
        imageGallery: n,
        relatedLinks: c,
        titleSlug: o,
        backgroundFields: l,
        tinaModuleId: m,
        videoProps: f
      }) => {
        const u = e ? Sr[e] : "",
          p = {},
          b = {
            Deck: jr,
            CoverCard: Pt,
            Card: ot
          },
          k = f?.id || "",
          v = (0, g.useLocale)(),
          h = l?.style["--legacy-custom-background"] || l?.style["--legacy-background-color"] || "#161616";
        return p["--playlist-background-color"] = f?.["--playlist-background-color"], p["--template-bg-color"] = h, (0, d.jsx)(C, {
          children: (0, d.jsxs)("div", {
            className: [Sr.legacyPageTemplate, u].join(" "),
            "data-brand": o,
            style: p,
            children: [a && (0, d.jsx)(N(), {
              animated: a.animated,
              content: a.content,
              id: "hero",
              images: a.images,
              shardsSection: a.shardsSection,
              subHero: a.subHero,
              type: a.type
            }), s?.length && (0, d.jsx)(ee, {
              id: "features",
              features: s,
              backgroundImageGroup: t
            }), (0, d.jsxs)("div", {
              className: Sr.maxWidthContainer,
              children: [n?.collections?.length && (0, d.jsx)($e, {
                id: "imageGallery",
                imageGallery: n
              }), r?.highlights && (0, d.jsx)("div", {
                className: Sr.contentWrapper,
                children: (0, d.jsx)(w.Highlights, {
                  highlights: r?.highlights,
                  subtitle: r?.subtitle ?? r?._memoq?.subtitle
                })
              }), (0, d.jsx)(d.Fragment, {
                children: f && k && (0, d.jsxs)("div", {
                  className: Sr.videosContainer,
                  children: [(0, d.jsx)("h2", {
                    children: f.sectionLabel
                  }), (0, d.jsx)("div", {
                    className: Sr.videoPlayerContainer,
                    children: (0, d.jsx)(I.VideoWithPlaylist, {
                      tagIds: [Number(f.videoTag ?? 0)],
                      className: Sr.legacyVideoStyles,
                      autoplay: !1,
                      locale: v,
                      playlistTitle: f.playlistTitle,
                      currentVideoId: k
                    })
                  })]
                })
              }), i && (0, d.jsx)(wr, {
                id: "order",
                ...i
              }), c && (0, d.jsx)(de, {
                id: "relatedLinks",
                title: c?.title,
                buttons: c?.buttons
              })]
            }), (0, d.jsx)("div", {
              className: Sr.tinaModuleContainer,
              children: (0, d.jsx)(Ge, {
                components: b,
                id: m
              })
            }), (0, d.jsx)("div", {
              className: Sr.maxWidthContainer,
              children: o && (0, d.jsx)(x, {
                id: "rating",
                titleSlug: o
              })
            })]
          })
        })
      }
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    72408: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(42295),
        i = t(4346),
        r = t.n(i);
      const n = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        c = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        o = ({
          type: e = "spinning"
        }) => {
          let a;
          return a = "threeDots" === e ? c : n, (0, s.jsx)(r(), {
            loop: !0,
            autoplay: !0,
            animationData: a,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    80304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    80391: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    81715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    81864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    84141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    84343: e => {
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

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
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
    84406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    84941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    85613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    85719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    86595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    86751: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 86751
    },
    86929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    87256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    87707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    89069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    89235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    89303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    89836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    90717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    92244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f086bb17e0de94d33c4031f30fff704.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    93935: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(42295),
        i = t(62229),
        r = t(27785),
        n = t.n(r),
        c = t(95966),
        o = t(4572),
        d = t.n(o);
      const l = {
          blue: "rockstargames-sites-legacydf5c0d39e32be4e6977bb1d638ed2340",
          custom: "rockstargames-sites-legacyef5369875ddc5d9d7ad36eadc8afab2e",
          darkBlue: "rockstargames-sites-legacyaa460ec14f75c93c2ba386a115ea407c",
          darkRed: "rockstargames-sites-legacya6a078bd68ef39e719c21e5db6329642",
          goldenrod: "rockstargames-sites-legacya55d762df7035a2394c9ffbfcbf1a0db",
          green: "rockstargames-sites-legacyea2d0d0e1e32d8e48d79a0ad80a4c8ac",
          grid: "rockstargames-sites-legacyc157d94760f0476ea06aa04da4e86727",
          gtao: "rockstargames-sites-legacyf4bc90102d24f73cb2d45d3821bfd32e",
          gtaplus: "rockstargames-sites-legacyc5d92b0365dc60e6b93d321e9139e9f3",
          hotPink: "rockstargames-sites-legacyfa9be84c85fca4e66b2489e1e52a2e6a",
          itemList: "rockstargames-sites-legacya1ccd04246730848111c4868ccba6294",
          noImg: "rockstargames-sites-legacyb239e263450a84fffba43a94c194d606",
          pillBtn: "rockstargames-sites-legacyd45dcc8e4008f8620987ea3033e4373d",
          purple: "rockstargames-sites-legacyf14d63f28dd73c05cf950a08d8b8f501",
          rdo: "rockstargames-sites-legacycc490e805fe55ab86a3ec5df2a5131e3",
          red: "rockstargames-sites-legacyc446b758dbe82ad97444174f4d0b4abe",
          selected: "rockstargames-sites-legacyde1852cf9b8b4b71bcc67f8e66552c46",
          skull: "rockstargames-sites-legacya034e7482e8f28c66ec657f72bb93749",
          teal: "rockstargames-sites-legacya0aaa124176430b6ad4f959cf136e7a3",
          turquoise: "rockstargames-sites-legacyb03c0798d8655dd98518b2f0dc002f06",
          yellow: "rockstargames-sites-legacybdb57ca410954012dfd4711c67fc2a18"
        },
        {
          sanitize: m
        } = n(),
        g = ({
          list: e,
          string: a,
          starColor: t,
          style: r,
          className: n,
          game: o,
          noImg: g,
          columns: f,
          mobileColumns: u
        }) => {
          const [p, b] = (0, i.useState)(null), k = a ? a.split("_#_") : e;
          if ((0, i.useEffect)((() => {
              b(e)
            }), [e]), !a && !e) return null;
          const v = {
            color: r?.color
          };
          return delete r?.color, f && p ? (0, s.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": f,
              "--unordered-list-grid-column-mobile": u ?? f
            },
            children: (0, s.jsx)("ul", {
              className: d()(l.itemList, l.noImg, l[t], l[o]),
              style: (0, c.safeStyles)(r),
              children: p.map(((e, a) => (0, s.jsx)("li", {
                style: v,
                dangerouslySetInnerHTML: {
                  __html: m(e.content)
                }
              }, a)))
            })
          }) : (0, s.jsx)("ul", {
            style: (0, c.safeStyles)(r),
            className: d()(l.itemList, l.custom, g ? l.noImg : "", t ? l[t] : "", o ? l[o] : "", n ?? ""),
            children: k.map(((e, a) => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e?.content ?? e)
              }
            }, a)))
          })
        }
    },
    94293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    95088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    95520: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
                value: "withMetaTitle"
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
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
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
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
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
                      value: "withMetaTitle"
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
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
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
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
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
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    96566: (e, a, t) => {
      "use strict";
      t.d(a, {
        _y: () => h,
        _l: () => o._,
        n_: () => _,
        IT: () => y
      });
      var s = t(42295),
        i = t(62229),
        r = t(19757),
        n = t(21643),
        c = t(80701),
        o = t(63886),
        d = t(46277),
        l = t(15076),
        m = t.n(l),
        g = t(72148);
      const f = (e, a) => {
          const t = (0, g.Ym)(),
            s = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...a,
              variables: {
                locale: t,
                ...a?.variables
              }
            },
            {
              data: r,
              loading: n,
              error: c,
              ...o
            } = (0, d.IT)(e, s);
          return (0, i.useEffect)((() => {
            if (r && s.setTitleDataPath) {
              const e = m().get(r, s.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, i.useEffect)((() => (s.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: n
          }), () => {
            s.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [n]), (0, i.useEffect)((() => {
            if (s.autoSetError && c) throw new Error(String(c))
          }), [c]), {
            loading: n,
            error: c,
            data: r,
            ...o
          }
        },
        u = (0, i.createContext)((() => ({
          data: null
        }))),
        p = new Promise((e => {
          e()
        })),
        b = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.D)
        },
        k = [() => p, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new n.R(b))
        }],
        v = (0, i.createContext)((() => k)),
        h = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, s.jsx)(v.Provider, {
          value: c.n,
          children: (0, s.jsx)(u.Provider, {
            value: f,
            children: e
          })
        })),
        y = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, a) => (0, i.useContext)(u)(e, a)),
        _ = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, i.useContext)(v)(e))
    },
    97558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    98952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    }
  }
]);