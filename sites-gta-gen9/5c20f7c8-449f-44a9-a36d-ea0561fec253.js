try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5c20f7c8-449f-44a9-a36d-ea0561fec253", e._sentryDebugIdIdentifier = "sentry-dbid-5c20f7c8-449f-44a9-a36d-ea0561fec253")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6132], {
    91: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Avatar: () => u,
        Content: () => f,
        PlatformTag: () => b,
        PlatformTagSizes: () => d.YT,
        Platforms: () => d.lv,
        RankContent: () => v,
        Root: () => g,
        RpCategory: () => _,
        TextContent: () => h,
        TopRow: () => p,
        UserName: () => k
      });
      var s = t(42295),
        n = t(62229),
        r = t(32067),
        i = t(75526),
        o = t(4572),
        c = t.n(o),
        d = t(22230),
        l = t(95386);
      const m = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804",
        g = (0, n.forwardRef)((function({
          children: e,
          className: a,
          testId: t,
          ...n
        }, r) {
          const o = (0, i.v6)(n, {
            "data-testid": t,
            className: c()("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", a)
          });
          return (0, s.jsx)("div", {
            ref: r,
            ...o,
            children: e
          })
        })),
        u = (0, n.forwardRef)((function({
          src: e,
          alt: a,
          testId: r,
          ...o
        }, c) {
          const [d, l] = (0, n.useState)(e), g = (0, i.v6)(o, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": r
          });
          return e ? (0, s.jsx)("div", {
            ref: c,
            ...g,
            children: (0, s.jsx)("img", {
              className: m,
              src: d,
              alt: a,
              onError: () => l(t(14804))
            })
          }) : (0, s.jsx)("div", {
            ref: c,
            ...g,
            children: (0, s.jsx)("img", {
              className: m,
              src: t(14804),
              alt: a
            })
          })
        })),
        f = (0, n.forwardRef)((function({
          asChild: e,
          testId: a,
          className: t,
          ...n
        }, o) {
          const d = e ? r.DX : "div",
            l = (0, i.v6)(n, {
              className: c()("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", t),
              "data-testid": a
            });
          return (0, s.jsx)(d, {
            ref: o,
            ...l
          })
        })),
        p = (0, n.forwardRef)((function({
          children: e,
          testId: a,
          ...t
        }, n) {
          const r = (0, i.v6)(t, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": a
          });
          return (0, s.jsx)("div", {
            ref: n,
            ...r,
            children: e
          })
        })),
        b = ({
          testId: e,
          ...a
        }) => {
          const t = (0, i.v6)(a, {
            "data-testid": e
          });
          return (0, s.jsx)(d.Ay, {
            ...t
          })
        },
        k = (0, n.forwardRef)((function({
          children: e,
          testId: a,
          ...t
        }, n) {
          const r = (0, i.v6)(t, {
            "data-testid": a
          });
          return (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...r,
            ref: n,
            children: e
          })
        })),
        v = (0, n.forwardRef)((function({
          testId: e,
          children: a,
          ...t
        }, n) {
          const r = (0, i.v6)(t, {
            "data-testid": e
          });
          return (0, s.jsx)("div", {
            ...r,
            ref: n,
            children: a
          })
        })),
        _ = ({
          testId: e,
          ...a
        }) => {
          const t = (0, i.v6)(a, {
            "data-testid": e
          });
          return (0, s.jsx)(l.RpCategory, {
            ...t
          })
        },
        h = (0, n.forwardRef)((function({
          asChild: e,
          children: a,
          testId: t,
          ...n
        }, o) {
          const c = e ? r.DX : "div",
            d = (0, i.v6)(n, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": t
            });
          return (0, s.jsx)(c, {
            ref: o,
            ...d,
            children: a
          })
        }))
    },
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
      var s = t(42783),
        n = t(45440);
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
          label: (0, n._e)(`${e?.name??e?.[s.Qw]?.content??"New"} [List Item]`)
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
    4407: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(42295),
        n = t(34725),
        r = t(95966);
      const i = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f",
        o = ({
          alt: e,
          className: a,
          src: n,
          style: i
        }) => {
          const [o, c] = (0, r.usePreloadImg)(n);
          let d = n;
          !1 === o && ("rockstargames-sites-gta-gen9a6a06e2d5c4f1811ea39d17312ca2e67" === a && (d = t(28839)), d = t(9333));
          const {
            width: l,
            height: m
          } = c, g = {
            "--aspect-ratio": Number.isNaN(l / m) ? "" : l / m,
            ...i
          };
          return (0, s.jsx)("img", {
            src: d,
            className: a ?? "",
            alt: e,
            style: g
          })
        },
        c = ({
          className: e,
          style: a = {},
          image: c = {},
          imageStyle: d = {}
        }) => {
          let {
            alt: l,
            src: m
          } = (0, n.S1)(c);
          const {
            isMobile: g
          } = (0, r.useWindowResize)();
          m.desktop || m.mobile || (l = "", m = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let u = c.frame ? `${c.frame} ${i}` : i;
          return (0, s.jsx)("div", {
            className: u,
            style: a,
            children: (0, s.jsx)(o, {
              style: {
                ...d,
                ...c?.style
              },
              src: g ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: l,
              className: e
            })
          })
        }
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
      }, n.resolve = r, e.exports = n, n.id = 8194
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
    10632: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(42295),
        n = t(62229),
        r = t(95966),
        i = t(4572),
        o = t.n(i),
        c = t(84927),
        d = t(4407);
      const l = ({
          hero: e,
          children: a
        }) => e ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: a
        }) : a,
        m = ({
          badge: e = null,
          badgeType: a,
          discountTxt: t,
          splitter: i,
          image: m,
          style: g,
          className: u = "",
          attributes: f = {},
          role: p,
          hero: b = !1
        }) => {
          const k = (0, n.useMemo)((() => {
            if (m?.badge || m?.discountTxt || e || t) return (0, s.jsx)(c.A, {
              badge: m?.discountTxt ?? m?.badge ?? e ?? t,
              badgeType: a,
              splitter: m?.splitter ?? i,
              role: m?.role ?? p
            })
          }), [e, a, t, m, p, i]);
          return (0, s.jsx)(l, {
            hero: b,
            children: (0, s.jsx)("figure", {
              children: (0, s.jsxs)("div", {
                className: o()("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", f?.hiddenMobile ? "hiddenMobile" : "", f?.hiddenLarge ? "hiddenLarge" : "", f?.className, u),
                style: (0, r.safeStyles)({
                  ...g,
                  ...f?.style
                }),
                ...f,
                children: [(0, s.jsx)(d.A, {
                  image: m,
                  className: u
                }), k, m?.caption && (0, s.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
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
        n = t(62229),
        r = t(95966),
        i = t(9623),
        o = t(51673),
        c = t.n(o),
        d = t(62665),
        l = t(2918),
        m = t(4572),
        g = t.n(m);
      const u = ({
          modal: e
        }) => {
          const {
            content: a,
            className: t,
            height: r,
            onClose: o,
            rect: m = {
              left: 0,
              top: 0
            },
            contentStyle: u = {},
            contentClassName: f = "",
            width: p,
            fadeIn: b = !0,
            cardIds: k,
            activeId: v,
            theme: _,
            title: h,
            gtm: x = {},
            aspectRatio: y = "default",
            cardDimensions: w
          } = e, {
            left: N,
            top: j
          } = m, S = k?.indexOf(v), [C, T] = (0, n.useState)(k?.length || 0), {
            track: E
          } = (0, l.useGtmTrack)(), M = null !== k && (k?.length || 0) > 1 && ("flag_bg" === _ || "fob" === w?.size), P = window.location.href.includes("cms5"), [L, A] = (0, i.useSearchParams)(), [I, z] = (0, n.useState)(!1), [D, $] = (0, n.useState)(!1), [B, V] = (0, n.useState)(), O = e => {
            "number" == typeof e && k && e < k.length && e > -1 && A({
              info: k[e].toString()
            })
          }, R = () => {
            const e = "number" == typeof S && S > -1 ? S - 1 : 0;
            O(e), E({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: h?.toLowerCase(),
              position: S
            })
          }, F = () => {
            const e = "number" == typeof S && S > -1 ? S + 1 : 0;
            O(e), E({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: h?.toLowerCase(),
              position: S
            })
          };
          (0, n.useEffect)((() => {
            T(k?.length || 0)
          }), [k?.length]), (0, n.useEffect)((() => {
            null !== S && null !== k && O(S)
          }), [S, k]), (0, n.useEffect)((() => {
            const e = k?.findIndex((e => e === v));
            "number" == typeof e && ($(e <= 0), z(e >= C - 1))
          }), [k, v, C, L]);
          const [G] = (0, n.useState)({
            y: j,
            x: N,
            top: 0,
            left: 0,
            width: p,
            height: r,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: M ? "0" : ""
          }), H = {
            opacity: 1
          }, U = (0, n.useRef)(null), W = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, q = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [K] = (0, n.useState)({
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
          }), [X, Y] = (0, n.useState)({
            initial: G,
            shown: K
          });
          (0, n.useEffect)((() => {
            Y({
              initial: G,
              shown: K
            })
          }), [G, K]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof o && "Escape" === e.key && (o(), E({
                event: "modal_close",
                element_placement: h?.toLowerCase(),
                ...x
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const Z = () => {
              "function" == typeof o && (o(), E({
                event: "modal_close",
                element_placement: h?.toLowerCase(),
                ...x
              }))
            },
            Q = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const n = Q(s, a - 1);
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
                      return B?.queried ? a = B.element : (a = Q(e, 2), V({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = b ? 0 : 1,
            ae = (0, n.useRef)(null),
            te = (0, s.jsx)(d.motion.button, {
              className: "rockstargames-sites-gta-gen9f462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: q,
              onClick: () => {
                Z()
              },
              onKeyDown: J,
              onKeyUp: J
            });
          let se = null;
          return se = P ? n.Fragment : c(), (0, n.useMemo)((() => (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9a1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": M,
            "data-aspect-ratio": y,
            children: (0, s.jsx)(se, {
              children: (0, s.jsxs)("div", {
                children: [(0, s.jsx)(d.motion.div, {
                  className: "rockstargames-sites-gta-gen9cf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: H,
                  transition: W,
                  onClick: () => Z()
                }), M && (0, s.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9d5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, s.jsxs)(d.motion.div, {
                    className: "rockstargames-sites-gta-gen9dbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: q,
                    children: [(0, s.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: R,
                      disabled: D,
                      onKeyDown: J,
                      onKeyUp: J
                    }), (0, s.jsxs)("div", {
                      className: "rockstargames-sites-gta-gen9e316695281c4c56337307741bda1371f",
                      "data-theme": _,
                      children: [" ", (S ?? 0) + 1, (0, s.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9c1ee424eae15f7b789c86e634df9e28d"
                      }), k?.length, " "]
                    }), (0, s.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: F,
                      disabled: I,
                      onKeyDown: J,
                      onKeyUp: J,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, s.jsx)(d.motion.div, {
                  className: "rockstargames-sites-gta-gen9e708da42918d8bbff9a8e1a36a2c4366",
                  ref: U,
                  initial: "initial",
                  animate: "shown",
                  variants: X,
                  transition: W,
                  style: u,
                  children: (0, s.jsxs)(d.motion.div, {
                    className: g()("rockstargames-sites-gta-gen9a7d77f83f629e9ae93f6934c8ba007b0", t),
                    id: "modal",
                    "data-testid": "modal",
                    role: "dialog",
                    children: [!M && te, (0, s.jsx)(d.motion.div, {
                      className: g()("rockstargames-sites-gta-gen9f26fc1babb8dd1284d4c03b3dabff714", f),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: q,
                      ref: ae,
                      children: a
                    }), (0, s.jsx)("button", {
                      className: "rockstargames-sites-gta-gen9ea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [a, S, u])
        },
        f = [null, () => null],
        p = (0, r.setContextItem)({
          context: (0, n.createContext)(f),
          key: "modalContext"
        }),
        b = () => (0, n.useContext)(p),
        k = ({
          children: e
        }) => {
          const [a, t] = (0, n.useState)(f), {
            setBodyIsLocked: i
          } = (0, r.useBodyScrollable)("ModalProvider"), o = (0, n.useMemo)((() => a?.content ? (0, s.jsx)(u, {
            modal: a
          }) : null), [a]), c = () => i(!1);
          return (0, n.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, n.useEffect)((() => {
            i(!!o)
          }), [o]), (0, s.jsx)(p.Provider, {
            value: [o, t],
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
    20517: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(42295),
        n = t(62229),
        r = t(81788),
        i = t(95966),
        o = t(61128),
        c = t(2918),
        d = t(14200),
        l = t(29315);
      const m = {
          rating: "rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-sites-gta-gen9b98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-gta-gen9b6339480b5fd086fb0c025930bfb7dcd"
        },
        g = (0, r.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var u = t(95520),
        f = t(19732);
      (0, i.importAll)(t(36672));
      const p = (0, l.A)((0, f.g)((({
        descriptors: e = null,
        footer: a = null,
        href: l,
        img: f = null,
        titleSlug: p = null,
        style: b = {},
        className: k
      }) => {
        const [v, _] = (0, n.useState)(!1), {
          inView: h
        } = (0, o.useInView)({
          threshold: .6
        }), [x, y] = (0, n.useState)({
          ratingDescriptors: e,
          ratingFooter: a,
          ratingImg: f,
          ratingUrl: l
        }), {
          track: w
        } = (0, c.useGtmTrack)(), N = (0, r.useIntl)(), {
          data: j
        } = (0, i.useQuery)(u.GameData, {
          variables: {
            titleSlug: p
          },
          skip: !p
        });
        if ((0, n.useEffect)((() => {
            j && y(j?.game)
          }), [j]), (0, n.useEffect)((() => {
            h && !v && x.img_rating && (w({
              event: "page_section_impression",
              element_placement: "rating"
            }), _(!0))
          }), [h]), !x.ratingImg) return null;
        const S = !!x.ratingDescriptors;
        return (0, s.jsxs)("div", {
          className: [m.rating, S ? m.withDescriptors : m.withOutDescriptors, k || ""].join(" "),
          style: (0, i.safeStyles)(b),
          "data-testid": "rating",
          children: [(0, s.jsx)(d.A, {
            to: x.ratingUrl,
            target: "_blank",
            children: (0, s.jsx)("img", {
              alt: N.formatMessage(g.components_ratings_link_alt, {
                rating: (C = x.ratingImg, C.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${x.ratingImg}`)
            })
          }), S && (0, s.jsxs)("div", {
            className: m.text,
            children: [(0, s.jsx)("p", {
              className: m.descriptors,
              dangerouslySetInnerHTML: {
                __html: x?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), x.ratingFooter && (0, s.jsx)("hr", {}), x.ratingFooter && (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: x.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var C
      })))
    },
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    22230: (e, a, t) => {
      "use strict";
      t.d(a, {
        YT: () => i,
        lv: () => o,
        Ay: () => c
      });
      var s = t(42295);
      var n = t(4572),
        r = t.n(n);
      var i = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        o = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const c = ({
        tagSize: e,
        platform: a,
        className: t = ""
      }) => {
        const {
          src: n,
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
        return (0, s.jsx)("img", {
          className: r()("rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1", t),
          "data-testid": "platform-tag",
          "data-platform": a,
          "data-tag-size": e,
          src: n,
          alt: i
        })
      }
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
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
    24769: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var s = t(42295),
        n = t(62229),
        r = t(24162),
        i = t(11206),
        o = t(4572),
        c = t.n(o);
      const d = {
        active: "rockstargames-sites-gta-gen9fdc2ec652cbb7469f602e73cd10ef997",
        deprecatedCarousel: "rockstargames-sites-gta-gen9a531264d5417d2198d4e14aa72335af1",
        dotsSlide: "rockstargames-sites-gta-gen9b8fd11776fba32f9663bbb6292a5c901",
        hideLarge: "rockstargames-sites-gta-gen9a6c9173aa5a8fe31a062251352a9d711",
        hideMobile: "rockstargames-sites-gta-gen9f3445a74a067bd92ff94b521cb0bdc07",
        imageAreaBg: "rockstargames-sites-gta-gen9dcb2b41007683141579697bb4a8658ba",
        img: "rockstargames-sites-gta-gen9d8e66128b4fef1ea164350cd535e2d68",
        infinite_false: "rockstargames-sites-gta-gen9b85758ee99a52896b94130d002e821c7",
        panorama: "rockstargames-sites-gta-gen9ff63f8addff8d036ca0b65fa495e1653",
        perico: "rockstargames-sites-gta-gen9aa50a9164fd0296b1196d441233cc348",
        renderedWithChildren: "rockstargames-sites-gta-gen9ad7696edafa3086969e7aaece4f09b4f",
        siblings: "rockstargames-sites-gta-gen9f4c50c0daadf81cd292587fcfea1339d",
        "swiper-horizontal": "rockstargames-sites-gta-gen9b823bbff86d38da8cb611a7c3367d8fe",
        "swiper-preloader-spin": "rockstargames-sites-gta-gen9c39b97f81c73d75dc4e013fde14aff18",
        "swiper-scrollbar-disabled": "rockstargames-sites-gta-gen9ee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-vertical": "rockstargames-sites-gta-gen9d29252354bbbfe413678daff5223169d",
        track: "rockstargames-sites-gta-gen9c7c21df4f7f83a73f79dd7913aa87832"
      };
      var l = t(26708),
        m = t(10632);
      const g = ({
          item: e
        }) => (0, s.jsxs)("div", {
          children: [(0, s.jsx)(m.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: c()(d.img, e?.className)
          }), (e?.title || e?.description) && (0, s.jsx)(l.A, {
            item: e
          })]
        }),
        u = ({
          current: e,
          total: a
        }) => (0, s.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": a
          },
          children: (0, s.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        f = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: o = !1,
          className: m = "",
          renderTemplate: f = "standard",
          text: p,
          customSpaceBetween: b = null,
          centerSlides: k = !0,
          centeredSlidesBounds: v = !1
        }) => {
          const [_, h] = (0, n.useState)(0), x = (0, n.useMemo)((() => e && Array.isArray(e) ? e.map((() => (0, i.A)())) : null), [e]);
          if (!(a && 0 !== a?.length || e)) return null;
          const y = {
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
          return (0, s.jsxs)("div", {
            className: c()(d.deprecatedCarousel, d[f], d[`infinite_${!o}`], e ? d.renderedWithChildren : "", m),
            style: t,
            children: [(0, s.jsxs)(r.RC, {
              loop: !o,
              grabCursor: !0,
              centeredSlides: k,
              centerInsufficientSlides: k,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: y,
              onUpdate: () => h(0),
              onActiveIndexChange: e => h(e?.realIndex ?? 0),
              centeredSlidesBounds: v,
              children: [(0, s.jsx)("div", {
                className: d.trackWrapper,
                children: (0, s.jsxs)("div", {
                  className: d.track,
                  children: [a?.map((e => (0, s.jsx)(r.qr, {
                    children: (0, s.jsx)(g, {
                      item: e
                    })
                  }, e.key))), e && e.map(((e, a) => e && (0, s.jsx)(r.qr, {
                    children: e
                  }, x && x[a])))]
                })
              }), (0, s.jsx)(u, {
                current: _,
                total: e ? e.length : a.length
              })]
            }), (p?.title || p?.description) && (0, s.jsx)(l.A, {
              item: p
            })]
          })
        }
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    24865: (e, a, t) => {
      var s = {
        "./VI/mobile.jpg": 92244
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
      }, n.resolve = r, e.exports = n, n.id = 24865
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    26708: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(42295),
        n = t(4572),
        r = t.n(n),
        i = t(4407),
        o = t(93935),
        c = t(79704);
      const d = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: a
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        m = ({
          item: e,
          className: a = ""
        }) => (0, s.jsxs)("div", {
          className: r()("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, s.jsx)(l, {
            to: e?.href ?? e?.to,
            children: (0, s.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map(((e, a) => e?.unorderedList ? (0, s.jsx)(o.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, s.jsx)(i.A, {
            image: e.image,
            className: e?.className
          }, a) : e?.separator ? (0, s.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, s.jsx)(c.A, {})
          }, a) : (0, s.jsx)("p", {
            children: (0, s.jsx)("span", {
              className: d,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, a))) : (0, s.jsx)("span", {
            className: d,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
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
    29625: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(42295),
        n = t(14200);
      const r = {
          button: "rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c"
        },
        i = ({
          className: e = "",
          children: a,
          context: t = "",
          to: i,
          onClick: o,
          target: c = "_self",
          ...d
        }) => {
          const l = [r.button, r[t], e].join(" ");
          return i ? (0, s.jsx)(n.A, {
            ...d,
            to: i,
            className: l,
            onClick: o,
            target: c,
            children: a
          }) : (0, s.jsx)("button", {
            ...d,
            type: "button",
            className: l,
            onClick: o,
            children: a
          })
        }
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
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
    34100: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(42295),
        n = t(62229),
        r = t(81788),
        i = t(14200),
        o = t(67050);
      const c = (0, r.defineMessages)({
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
          let d = e?.message ?? t(c.wasted_error_404_new);
          d = t(c.wasted_error_404_new);
          const l = e?.code ?? 398,
            m = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            m && m?.current && m.current.focus()
          }), [m]), (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, s.jsx)("h3", {
              tabIndex: -1,
              ref: m,
              children: `${d} (${l})`
            }), (0, s.jsx)(i.A, {
              to: "/",
              reloadDocument: !1,
              children: t(c.wasted_home)
            }), "clr" !== a && (0, s.jsx)(o.A, {})]
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
      }, n.resolve = r, e.exports = n, n.id = 36672
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
      }, n.resolve = r, e.exports = n, n.id = 39294
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
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
        n = t(62229),
        r = t(27785),
        i = t.n(r),
        o = t(95966),
        c = t(4572),
        d = t.n(c);
      const l = {
          blue: "rockstargames-sites-gta-gen9bffe0939bda9e26ad14f6b01669338a8",
          custom: "rockstargames-sites-gta-gen9cc2c26a3dd80cf9db62c4c7f389b7859",
          darkBlue: "rockstargames-sites-gta-gen9e2b6f722952b5d61d2a3b725166bfc9b",
          darkRed: "rockstargames-sites-gta-gen9d44e2fc53f269ccf2b8fbe032ef6cec9",
          goldenrod: "rockstargames-sites-gta-gen9a365c5895cfd6c9f94fc994d71ba402c",
          green: "rockstargames-sites-gta-gen9f9c1eebf59650cd8ee84191d8fc62874",
          grid: "rockstargames-sites-gta-gen9be627ae18a7bd3cff72d3f11aeed67df",
          gtao: "rockstargames-sites-gta-gen9ffaf58c543b36fd7fb4efec24b3564bc",
          gtaplus: "rockstargames-sites-gta-gen9fbf343ed03c1bd513ea4cadc9726af76",
          hotPink: "rockstargames-sites-gta-gen9edb9998d6516a5aa1aece9c07c1768be",
          itemList: "rockstargames-sites-gta-gen9d9620ae764026da5584e0f0a5886c992",
          noImg: "rockstargames-sites-gta-gen9bbb7247d5d7a836d755491e85639f1a3",
          pillBtn: "rockstargames-sites-gta-gen9c1ed14af6fceaba7c99728a81676dd92",
          purple: "rockstargames-sites-gta-gen9e61db4af0805bb4c9bf820c26ac8a85f",
          rdo: "rockstargames-sites-gta-gen9b2194fe129aa210950dcb07b88a28c13",
          red: "rockstargames-sites-gta-gen9f674d6037f10af1a1fe41a83c1e5da17",
          selected: "rockstargames-sites-gta-gen9e49b5a5fd4ab934ece172fffe9f6577e",
          skull: "rockstargames-sites-gta-gen9b2a1c0b367b250fe0606dffece9e1c02",
          teal: "rockstargames-sites-gta-gen9a379d41268f4f002d5ac257f67461f1d",
          turquoise: "rockstargames-sites-gta-gen9e211b0b8ae00897d696af259b3ddd837",
          yellow: "rockstargames-sites-gta-gen9ce372826eac3cc73094d69c0c5d9a530"
        },
        {
          sanitize: m
        } = i(),
        g = ({
          list: e,
          string: a,
          starColor: t,
          style: r,
          className: i,
          game: c,
          noImg: g,
          columns: u,
          mobileColumns: f
        }) => {
          const [p, b] = (0, n.useState)(null);
          if ((0, n.useEffect)((() => {
              b(e)
            }), [e]), !a && !e) return null;
          const k = {
            color: r?.color
          };
          return delete r?.color, u && p ? (0, s.jsx)("div", {
            className: l.grid,
            style: {
              "--ordered-list-grid-column": u,
              "--ordered-list-grid-column-mobile": f ?? u
            },
            children: (0, s.jsx)("ol", {
              className: d()(l.itemList, l.noImg, l[t], l[c]),
              style: (0, o.safeStyles)(r),
              children: p.map((e => (0, s.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: m(e.content)
                },
                style: k
              }, e.content)))
            })
          }) : (0, s.jsx)("ol", {
            style: (0, o.safeStyles)(r),
            className: d()(l.itemList, l.custom, g ? l.noImg : "", t ? l[t] : "", c ? l[c] : "", i ?? ""),
            children: e.map((e => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e?.content ?? e)
              }
            }, e?.content)))
          })
        }
    },
    43920: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => nn,
        componentsForTinaParserGuide: () => rn
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => ss,
        Link: () => ns
      });
      var n = {};
      t.r(n), t.d(n, {
        A: () => ga.A,
        AlertDialog: () => X,
        AudioPlayer: () => Ka,
        Badge: () => Te,
        Brands: () => L,
        Button: () => Na.A,
        ButtonGroup: () => I,
        CalloutSection: () => o.A,
        Carousel: () => c.A,
        CharacterCard: () => Xa,
        ConditionalBlock: () => k,
        CookieAB: () => at,
        CountryInputField: () => Ja,
        Cta: () => v.A,
        DescriptionArea: () => tt.A,
        DiscountsBadge: () => st.A,
        DotLoader: () => rt,
        Dropdown: () => dt,
        Embed: () => mt,
        ExpandingPlatformButton: () => _.A,
        FadeInContent: () => ut,
        Gen9Button: () => A.A,
        Gen9CoreCarousel: () => E.A,
        Grid: () => w,
        HTMLElement: () => O,
        Hero: () => $,
        HookStore: () => f,
        ImageWithBadge: () => pe.A,
        LayeredImage: () => bt,
        Lightbox: () => kt,
        LoadingAnimation: () => W.A,
        MultiSourceImage: () => xa.A,
        NewswireBlocks: () => Pt,
        NewswireCard: () => wt,
        NewswireList: () => Ct,
        NewswireRelated: () => Et,
        NewswireTag: () => xt,
        OrderedList: () => ie.A,
        Paging: () => It,
        ParallaxCacheBuster: () => me,
        ParallaxInnerLayer: () => ce,
        ParallaxOuterLayer: () => le,
        ParallaxWrapper: () => ue,
        PlatformTag: () => hs.Ay,
        PromoModule: () => ke,
        Rating: () => ve.A,
        ResponsiveFlexBox: () => Dt,
        ResponsiveFlexItem: () => Bt,
        ResponsiveGridBox: () => Ot,
        ResponsiveGridItem: () => Ft,
        ResponsiveImg: () => Ht,
        ResponsiveSection: () => Wt,
        RockstarLogo: () => U.A,
        RpCategory: () => _s,
        SafeHtml: () => Kt,
        ScrollSection: () => Xt.A,
        ScrollToTop: () => Yt,
        ScrollTracker: () => Ce,
        SearchBox: () => Zt.A,
        Separator: () => Qt.A,
        SrcsetImage: () => _t,
        StorybookWrapper: () => Jt,
        TextFit: () => es.A,
        ThumbsGallery: () => Aa,
        TinaModuleFetchNRender: () => ye.A,
        TinaWrapper: () => as,
        TrackList: () => ha,
        UnorderedList: () => fe.A,
        UserVote: () => xe,
        VideoCard: () => s,
        VideoCarousel: () => os,
        VideoList: () => fs,
        VisuallyHidden: () => ps,
        Wasted: () => bs.A,
        framer: () => we,
        useTinaModuleFetchByIds: () => ye.X,
        withSearchbarErrorBoundary: () => ks.A,
        withSimpleErrorBoundary: () => vs.A
      });
      var r = t(31879),
        i = t.n(r),
        o = t(46209),
        c = t(24769),
        d = t(42295),
        l = t(62229),
        m = t(9623),
        g = t(95966),
        u = t(2918);
      const f = (0, t(71282).FF)(),
        p = e => e.some((e => !e)),
        b = ({
          condition: e = null,
          children: a
        }) => {
          const [t, s] = (0, l.useState)(!1), n = (e => {
            const [a] = (0, m.useSearchParams)(), [t, s] = (0, l.useState)(null), n = (0, u.useRockstarUser)(), {
              loggedIn: r,
              data: i
            } = n, {
              hasGtaPlus: o
            } = i ?? {};
            return (0, l.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              f.applyFilters("preview_conditions", e);
              const n = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (n.push(!0), !0) : (n.push(!1), !1);
                if (p(n)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    n.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    n.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    n.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    n.push(!1 === o || void 0 === o);
                    break;
                  default:
                    n.push(!1)
                }
                return null
              })), s(!p(n)), () => {}
            }), [a, e, o, n, r]), t
          })(e);
          return (0, l.useEffect)((() => {
            s(n)
          }), [n]), (0, l.useMemo)((() => t ? a : null), [t])
        },
        k = (0, g.withTranslations)((({
          children: e
        }) => l.Children.map(l.Children.toArray(e), (e => (0, d.jsx)(b, {
          ...e?.props
        })))));
      var v = t(19913),
        _ = t(98357),
        h = t(34725),
        x = t(4572),
        y = t.n(x);
      const w = ({
        children: e,
        context: a = null,
        game: t,
        image: s = {},
        style: n = {},
        template: r = null,
        theme: i = null,
        reversedOnMobile: o = !1,
        className: c = "",
        id: l = null
      }) => {
        const m = (0, h.S1)(s ?? {}),
          u = {
            ...n
          };
        if (m?.src?.desktop) {
          const e = (s?.style && s?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (s?.style && s?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (u.background = `url(${m?.src?.desktop}) ${a} ${t}`, s?.style && s?.style["--linear-gradient"]) u.background = `linear-gradient(${s?.style["--linear-gradient"]}), url(${m?.src?.desktop}) ${a} ${t}`;
          else if (s?.style && s?.style["--gradient-height"]) {
            const e = s?.style["--gradient-height"] || "3",
              n = s?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              r = s?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            u.background = `linear-gradient(180deg, ${n}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${m?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, d.jsx)("div", {
          id: l,
          className: y()("rockstargames-sites-gta-gen9da87ead760b989fbe90a0b89c60b0653", o ? "rockstargames-sites-gta-gen9dfbda195073626bc6a7690dc73fba873" : "", c),
          "data-game": "community" === r ? null : t,
          style: (0, g.safeStyles)(u),
          "data-context": a,
          "data-template": r,
          "data-theme": i,
          children: e
        })
      };
      var N = t(62665),
        j = t(92440);
      const S = {
          background: "rockstargames-sites-gta-gen9c8c90210c344650ad11d2d97258dcaab",
          btnText: "rockstargames-sites-gta-gen9e8ca7c699fe44c30cf4e542ee8b22119",
          buttonGroup: "rockstargames-sites-gta-gen9b8a0dc337c7ea835340f88b0f6d14822",
          content: "rockstargames-sites-gta-gen9e4bb4024fb4b167423f58e02e471bf5e",
          ctaBlock: "rockstargames-sites-gta-gen9c3f1f785f5adb5cfcbf93195e21521e6",
          descriptions: "rockstargames-sites-gta-gen9a54e628f4898aed20e45ad8a5e39af7f",
          gradient: "rockstargames-sites-gta-gen9d074051a93eac66cd56c616c8ccd4c91",
          hero: "rockstargames-sites-gta-gen9dccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-sites-gta-gen9d5fdc650fc4f2f7441ce7c563ae9653e",
          layered: "rockstargames-sites-gta-gen9c58f0111e3765dc6116481764d0431d0",
          legalText: "rockstargames-sites-gta-gen9bdbadc8b5ef295a4122905fffdde18f6",
          pillBtn: "rockstargames-sites-gta-gen9b89f190ffa4d32a33304ffa4b5ff73df",
          primaryBtn: "rockstargames-sites-gta-gen9d273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-sites-gta-gen9af112e1264860cebe9be5f542d47ec27",
          selected: "rockstargames-sites-gta-gen9b5c12cc9810c7b3774102378f71714a1",
          shardsCarousel: "rockstargames-sites-gta-gen9cd8c6fbe5139a661c2e52e9df726ca78",
          verticalCtaBlock: "rockstargames-sites-gta-gen9de8ee9092175484396cd56d19aec7cbd"
        },
        C = {
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
        T = {
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
      var E = t(99803);
      const M = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const s = (0, j.useGetCdnSource)(a ?? null),
            n = (0, j.useGetCdnSource)(t ?? s);
          return (0, d.jsx)("div", {
            className: S.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${n})`
            },
            children: (0, d.jsx)("h5", {
              children: e
            })
          })
        },
        P = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [s, n] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            t && n(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: n,
                desktop: r
              } = s;
              return e.push((0, d.jsx)(M, {
                title: t,
                mobileImg: n?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, d.jsx)("div", {
            className: S.shardsCarousel,
            children: (0, d.jsx)(E.A, {
              title: e,
              name: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        L = ({
          brands: e = []
        }) => e.length ? (0, d.jsx)("div", {
          className: "rockstargames-sites-gta-gen9b53b6eca487387fc5c2057daf151691a",
          children: e.map((({
            brand: e
          }, a) => (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e8c3be7a76fd7e532e74a9fcf87bee09",
            "data-brand": e
          }, a)))
        }) : null;
      var A = t(26732);
      const I = ({
          buttons: e = [],
          className: a
        }) => e.length ? (0, d.jsx)("div", {
          className: y()("rockstargames-sites-gta-gen9bbd74dec556da7f5c06710c72c662f8a", a),
          children: e.map((({
            icon: e,
            title: a,
            to: t
          }, s) => a ? (0, d.jsx)(A.A, {
            icon: e,
            text: a,
            to: t
          }, s) : ""))
        }) : null,
        z = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [s, n] = (0, l.useState)([]), [r, i] = (0, l.useState)([]);
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
            n(e), i(t)
          }), [a]), s.length ? (0, d.jsx)(N.motion.div, {
            variants: e ? T : void 0,
            children: (0, d.jsx)(_.A, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: s,
              children: !!r.length && (0, d.jsx)(N.motion.div, {
                variants: T,
                children: (0, d.jsx)(I, {
                  buttons: r,
                  className: S.buttonGroup
                })
              })
            })
          }) : (0, d.jsx)(d.Fragment, {
            children: !!r.length && (0, d.jsx)(N.motion.div, {
              variants: T,
              children: (0, d.jsx)(I, {
                buttons: r,
                className: S.buttonGroup
              })
            })
          })
        },
        D = ({
          animated: e = !1,
          brands: a = [],
          cta: t = [],
          ctas: s = [],
          description: n = "",
          expandingButtonLabel: r = "Subscribe",
          legalText: i,
          stackButtons: o,
          title: c = ""
        }) => (0, d.jsxs)(N.motion.div, {
          className: S.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? C : void 0,
          children: [(0, d.jsx)(N.motion.div, {
            variants: e ? T : void 0,
            children: (0, d.jsx)(L, {
              brands: a
            })
          }), (c || n) && (0, d.jsxs)(N.motion.div, {
            className: S.descriptions,
            variants: e ? T : void 0,
            children: [c && (0, d.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: c
              }
            }), n && (0, d.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })]
          }), !!t.length && (0, d.jsx)("div", {
            className: o ? S.verticalCtaBlock : S.ctaBlock,
            children: (0, d.jsx)(j.TinaParser, {
              components: {
                Cta: v.A,
                ExpandingPlatformButton: _.A
              },
              tina: {
                payload: {
                  content: t
                }
              }
            })
          }), !!s.length && (0, d.jsx)("div", {
            className: S.ctaBlock,
            children: (0, d.jsx)(z, {
              animated: e,
              ctas: s,
              expandingButtonLabel: r
            })
          }), i && (0, d.jsx)(N.motion.div, {
            className: S.legalText,
            variants: e ? T : void 0,
            children: (0, d.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: i
              }
            })
          })]
        }),
        $ = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: s,
          ctas: n = [],
          cta: r,
          description: i = "",
          expandingButtonLabel: o = "Subscribe",
          layeredImage: c,
          layeredImageSettings: m,
          legalText: u,
          shardsSection: f = {},
          stackButtons: p = !1,
          theme: b = "gen9",
          title: k = ""
        }) => {
          const {
            breakpoints: v,
            windowWidth: _
          } = (0, g.useWindowResize)(), h = v.xxl.min, x = (e => {
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
          })(m), w = (0, j.useGetCdnSource)(a?.mobile?.full_src ?? null), T = (0, j.useGetCdnSource)(a?.desktop?.full_src ?? w), E = (0, j.useGetCdnSource)(c?.mobile?.full_src ?? null), M = (0, j.useGetCdnSource)(c?.desktop?.full_src ?? E), L = (0, l.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: s
            } = a ?? {};
            return {
              ...s,
              ..._ >= h ? (0, g.safeStyles)(t) : (0, g.safeStyles)(e)
            }
          }), [_, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, d.jsxs)(N.motion.div, {
            className: y()(S.hero, s),
            style: {
              "--background-image-desktop": `url(${T})`,
              "--background-image-mobile": `url(${w})`,
              "--layered-image-desktop": `url(${M})`,
              "--layered-image-mobile": `url(${E})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? C : void 0,
            "data-type": "hero",
            theme: b,
            children: [(0, d.jsxs)("div", {
              className: S.images,
              children: [T && w ? (0, d.jsx)("div", {
                className: S.background,
                style: L ?? {}
              }) : "", E && M ? (0, d.jsx)("div", {
                className: S.layered,
                style: m ? x : {}
              }) : "", (0, d.jsx)("div", {
                className: S.gradient
              })]
            }), (0, d.jsx)(D, {
              animated: e,
              brands: t,
              cta: r,
              ctas: n,
              description: i,
              expandingButtonLabel: o,
              legalText: u,
              stackButtons: p,
              title: k
            }), f?.shards && (0, d.jsx)(P, {
              ...f
            })]
          })
        };
      var B = t(16188),
        V = t.n(B);
      const O = ({
        attributes: e = {},
        children: a,
        className: t = "",
        id: s = "",
        style: n = {}
      }) => (0, d.jsx)("span", {
        className: y()(t, e?.className, "rockstargames-sites-gta-gen9c650a7a1e761d6a9f2d6ce1cd8d6f330"),
        id: s,
        style: (0, g.safeStyles)(n ?? e?.style ?? {}),
        dangerouslySetInnerHTML: {
          __html: V().unescape(a)
        }
      });
      var R = t(81788),
        F = t(79867),
        G = t(61128),
        H = t(327),
        U = t(96117),
        W = t(72408);
      const q = ({
          button: e,
          closeDialog: a,
          style: t = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: n,
            extraClasses: r,
            isDisabled: i,
            isLink: o,
            link: c,
            onClick: l,
            testId: m
          } = e;
          return o ? n && (0, d.jsx)(H.Button, {
            asChild: !0,
            appearance: t,
            size: "MD",
            children: (0, d.jsx)("a", {
              href: c,
              ...m && {
                "data-testid": m
              },
              children: n
            })
          }) : (0, d.jsx)(H.Button, {
            autoFocus: !0,
            iconRight: s,
            className: y()(r),
            isDisabled: i,
            onPress: e => (e => {
              l && l(), a && a(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: t,
            "aria-label": n,
            ...m && {
              "data-testid": m
            },
            children: n
          })
        },
        K = {
          actions: "rockstargames-sites-gta-gen9d35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-gta-gen9b63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-gta-gen9efe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-gta-gen9d2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-gta-gen9f654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-gta-gen9e30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-gta-gen9dab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-gta-gen9bc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-gta-gen9b120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-gta-gen9f7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-gta-gen9b403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-gta-gen9a6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-gta-gen9b2b3117a07a11b3ec5897e4718e24373"
        },
        X = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: s,
          showDialog: n,
          onClose: r = () => {},
          closeOnOutsideClick: i = !0,
          extraClasses: o
        }) => {
          const c = (0, l.useRef)(null),
            {
              setBodyIsLocked: m
            } = (0, g.useBodyScrollable)("AlertDialog");
          (0, l.useEffect)((() => {
            n && c?.current && (c.current?.showModal?.(), m(!0))
          }), [n]);
          const u = () => {
            m(!1), r(), c.current?.close?.()
          };
          if (n) return (0, d.jsxs)("dialog", {
            ref: c,
            className: K.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && i && (m(!1), r(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, d.jsx)("i", {
              className: [K.icon, K[e]].join(" ")
            }), (0, d.jsxs)("div", {
              className: [K.content, o?.content].join(" "),
              children: [(0, d.jsx)("h3", {
                className: [K.heading, o?.heading].join(" "),
                children: a
              }), t && (0, d.jsx)("div", {
                className: [K.message, o?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), s && (0, d.jsx)("div", {
              className: K.actions,
              children: s.slice(0, 2).map(((e, a) => (0, d.jsx)(q, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: u
              }, e.buttonText)))
            })]
          })
        },
        Y = (0, R.defineMessages)({
          ns_cta_title: {
            id: "ns_cta_title",
            description: "Newsletter Subscription - CTA title",
            defaultMessage: "Subscribe to the Rockstar Games Email List"
          },
          ns_cta_title_twitchdrops: {
            id: "ns_cta_title_twitchdrops",
            description: "Newsletter Subscription - CTA title",
            defaultMessage: "Don't miss the next free GTA Online gift"
          },
          ns_cta_text: {
            id: "ns_cta_text",
            description: "Newsletter Subscription - CTA text",
            defaultMessage: "Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates."
          },
          ns_cta_button_text: {
            id: "ns_cta_button_text",
            description: "Newsletter Subscription - CTA Button text",
            defaultMessage: "Subscribe Now"
          },
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            description: "Newsletter Subscription Alert - Successfully Subscribed title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details: {
            id: "ns_successfully_subscribed_details",
            description: "Newsletter Subscription Alert - Successfully Subscribed details",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            description: "Newsletter Subscription Alert - Error (Check Preferences) title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            description: "Newsletter Subscription Alert - Error (Check Preferences) details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            description: "Newsletter Subscription Alert - Error (Generic) title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            description: "Newsletter Subscription Alert - Error (Generic) details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            description: "Newsletter Subscription Alert - Already Subscribed title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details: {
            id: "ns_already_subbed_details",
            description: "Newsletter Subscription Alert - Already Subscribed details",
            defaultMessage: "You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            description: "Newsletter Subscription Alert - Check Email title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            description: "Newsletter Subscription Alert - Check Email details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            description: "Newsletter Subscription Alert - Confirm your subsciption title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            description: "Newsletter Subscription Alert - Confirm your subsciption details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            description: "Newsletter Subscription Alert - OK button text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            description: "Newsletter Subscription Alert - Manage Preferences button text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            description: "Newsletter Subscription Alert - Yes, Subscribe button text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            description: "Newsletter Subscription Alert - No, go back button text",
            defaultMessage: "No, Go Back"
          }
        }),
        Z = {
          banner: "rockstargames-sites-gta-gen9a031b97fa036ddae4bbadc6680558a2f",
          body: "rockstargames-sites-gta-gen9b47d60d510ae51d65a0f6fb1eb459c89",
          buttonLoader: "rockstargames-sites-gta-gen9f302edb669d15d02ca82b40e4abacebb",
          copy: "rockstargames-sites-gta-gen9fd7cac31d4bc18c4c27f90dfbb6f7f49",
          "fade-in": "rockstargames-sites-gta-gen9f96d40bc7df11b0cd20585fb7b275d60",
          fadeIn: "rockstargames-sites-gta-gen9d4657bdad910613ab1c913eac69cc03a",
          heading: "rockstargames-sites-gta-gen9ce3bcff18b4587d306e54fc607d1c872",
          inner: "rockstargames-sites-gta-gen9d5512a5e255d98ac193b89292a6f908e",
          isLoading: "rockstargames-sites-gta-gen9a365a6b8f3c57e3ff39bdfe300b076f4",
          newsletterSubscription: "rockstargames-sites-gta-gen9c06351d3974c9778756737586bbe2117",
          pillBtn: "rockstargames-sites-gta-gen9bcc802c8f4e672f115f1074115c966e4",
          selected: "rockstargames-sites-gta-gen9fccc728f8062fedd21dda9ff20af4447"
        },
        Q = ({
          loading: e,
          loggedIn: a,
          urls: t,
          handleSubscribeButton: s,
          isButtonLoading: n,
          showDialog: r,
          setShowDialog: i,
          dialog: o,
          isSubscribed: c,
          variant: g
        }) => {
          const [f, p] = (0, l.useState)(!1), b = (0, R.useIntl)(), {
            track: k
          } = (0, u.useGtmTrack)(), {
            ref: v,
            inView: _
          } = (0, G.useInView)({
            threshold: .6
          }), h = o?.buttons || [{
            buttonText: b.formatMessage(Y.ns_ok_button_text),
            onClick: () => {
              i(!1)
            },
            testId: "ok-btn",
            style: "secondary"
          }, {
            buttonText: o?.showManagePreferences ? b.formatMessage(Y.ns_manage_prefs_button_text) : "",
            isLink: !0,
            link: t.preferences,
            testId: "preferences-btn",
            style: "ghost"
          }];
          return (0, l.useEffect)((() => {
            _ && !f && (k({
              event: "page_section_impression",
              section_layout: a ? "signed in" : "signed out",
              element_placement: "newsletter subscribe"
            }), p(!0))
          }), [_]), (0, d.jsxs)(d.Fragment, {
            children: [!c && (0, d.jsx)("div", {
              className: y()(Z.newsletterSubscription),
              "data-testid": "news-sub-banner",
              ref: v,
              children: (0, d.jsx)("section", {
                className: Z.banner,
                children: (0, d.jsx)("div", {
                  className: Z.inner,
                  children: e ? (0, d.jsx)(W.A, {}) : (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(U.A, {
                      disableLink: !0,
                      className: Z.fadeIn
                    }), (0, d.jsxs)("div", {
                      className: Z.body,
                      children: [(0, d.jsx)(H.Heading, {
                        level: 5,
                        className: [Z.heading, Z.fadeIn].join(" "),
                        children: "twitchdrops" === g ? (0, d.jsx)(R.FormattedMessage, {
                          ...Y.ns_cta_title_twitchdrops
                        }) : (0, d.jsx)(R.FormattedMessage, {
                          ...Y.ns_cta_title
                        })
                      }), (0, d.jsx)(H.Body, {
                        className: [Z.copy, Z.fadeIn].join(" "),
                        children: (0, d.jsx)(R.FormattedMessage, {
                          ...Y.ns_cta_text
                        })
                      })]
                    }), a ? (0, d.jsxs)(H.Button, {
                      size: "MD",
                      appearance: "secondary",
                      onPress: s,
                      isDisabled: n,
                      "data-testid": "sub-btn",
                      children: [(0, d.jsx)(R.FormattedMessage, {
                        ...Y.ns_cta_button_text
                      }), n && (0, d.jsx)("div", {
                        className: Z.buttonLoader,
                        children: (0, d.jsx)(W.A, {})
                      })]
                    }) : t?.auth && (0, d.jsx)(m.Link, {
                      to: t.auth,
                      "data-testid": "sub-link",
                      onClick: () => {
                        k({
                          event: "cta_subscribe_news",
                          section_layout: "signed out",
                          element_placement: "newsletter subscribe",
                          text: "subscribe now",
                          link_url: t.auth
                        })
                      },
                      children: (0, d.jsx)(H.Button, {
                        size: "MD",
                        appearance: "secondary",
                        allCaps: !0,
                        onPress: s,
                        isDisabled: n,
                        "data-testid": "sub-btn",
                        children: (0, d.jsx)(R.FormattedMessage, {
                          ...Y.ns_cta_button_text
                        })
                      })
                    })]
                  })
                })
              })
            }), o && (0, d.jsx)(X, {
              icon: o.icon,
              title: b.formatMessage(o.heading),
              secondaryText: b.formatMessage(o.bodyText),
              closeOnOutsideClick: o.closeOnOutsideClick,
              buttons: [{
                ...h[0]
              }, {
                ...h[1]
              }],
              showDialog: r,
              onClose: () => i(!1)
            })]
          })
        },
        J = {
          SUCCESS: {
            icon: "check",
            heading: Y.ns_successfully_subscribed_title,
            bodyText: Y.ns_successfully_subscribed_details,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: Y.ns_check_email_title,
            bodyText: Y.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: Y.ns_error_preferences_title,
            bodyText: Y.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: Y.ns_error_generic_title,
            bodyText: Y.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: Y.ns_already_subbed_title,
            bodyText: Y.ns_already_subbed_details,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: Y.ns_confirm_after_register_title,
            bodyText: Y.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: Y.ns_confirm_title,
            bodyText: Y.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        ee = {
          0: J.ERROR_PREFERENCES,
          1: J.SUCCESS,
          2: J.ERROR_PREFERENCES,
          3: J.ERROR_PREFERENCES,
          4: J.ERROR_GENERIC
        },
        ae = (0, g.setMakeVarItem)({
          key: "subscriptionStatusReactive",
          value: (0, g.makeVar)(void 0)
        }),
        te = e => ae(e),
        se = (e, a) => {
          const [t, s] = (0, l.useState)(), [n, r] = (0, l.useState)(!1), [i, o] = (0, l.useState)(!1), [c, d] = (0, l.useState)(!1), [m, f] = (0, l.useState)(!1), p = (0, g.useReactiveVar)(ae), b = (0, R.useIntl)(), {
            track: k
          } = (0, u.useGtmTrack)(), v = {
            preferences: `https://${e.sc}.rockstargames.com/settings/email`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          }, _ = e => {
            s(e), o(!0), d(!1)
          }, h = {
            ...J.NEW_ACCOUNT,
            closeOnOutsideClick: !1,
            buttons: [{
              buttonText: b.formatMessage(Y.ns_yes_subscribe_text),
              style: "monochrome",
              onClick: () => {
                x()
              }
            }, {
              buttonText: b.formatMessage(Y.ns_go_back_text),
              onClick: () => {
                s(null), o(!1)
              }
            }]
          }, x = async () => (k({
            event: "cta_subscribe_news",
            section_layout: a.loggedIn ? "signed in" : "signed out",
            element_placement: "newsletter subscribe",
            text: "subscribe now"
          }), a.loggedIn || (window.location.href = v.auth), a.loggedIn && a.isAMinor ? (_(J.ERROR_GENERIC), f(!1), void k({
            event: "alert_error",
            text: "error message with no preferences link",
            element_placement: "newsletter subscribe"
          })) : a.loggedIn && !p || a.loggedIn && 3 == p ? void await y() : a.loggedIn && p ? (k({
            event: "alert_update",
            text: "alert - user already subscribed",
            element_placement: "newsletter subscribe"
          }), _(J.ALREADY_SUBSCRIBED), void f(!1)) : void 0), y = async () => {
            const {
              error: e = null,
              result: t
            } = await (0, g.coreScApiFetch)("marketing/update", {
              fetchOptions: {
                method: "POST"
              },
              pingBearer: a.pingBearer,
              query: {
                subscribe: !0
              }
            });
            if (e) te(0), _(J.ERROR_GENERIC), k({
              event: "alert_error",
              text: "error message with preferences link",
              element_placement: "newsletter subscribe"
            });
            else {
              const e = t.status;
              te(e), _(ee[e]), 1 === e ? (k({
                event: "subscribe_news_success",
                element_placement: "newsletter subscribe"
              }), k({
                event: "alert_update",
                text: "user subscribed successfully",
                element_placement: "newsletter subscribe"
              })) : k({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              })
            }
          };
          return (0, l.useEffect)((() => {
            r(1 === p)
          }), [p]), (0, l.useEffect)((() => {
            (async () => {
              await (async () => {
                a.loggedIn ? await (async () => {
                  if (-1 === p) return;
                  te(-1), d(!0);
                  const {
                    error: t = null,
                    result: s
                  } = await (0, g.coreScApiFetch)("marketing/status", {
                    pingBearer: a.pingBearer
                  });
                  if (t) te(0), d(!1);
                  else {
                    const t = s.status;
                    te(t), a.isFromAuth && (t => {
                      if (e.navigate(".", {
                          replace: !0
                        }), a.loggedIn) switch (t) {
                        case 1:
                          a.isNewAccount ? (k({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), k({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), _(J.SUCCESS)) : (k({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), _(J.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          k({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), _(J.ERROR_GENERIC);
                          break;
                        default:
                          a.isNewAccount ? (_(h), k({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : y()
                      }
                    })(t), d(!1)
                  }
                })() : !1 === a.loggedIn && d(!1)
              })()
            })()
          }), [a.loggedIn]), {
            dialog: t,
            handleSubscribeButton: x,
            isButtonLoading: m,
            isLoading: c,
            isSubscribed: n,
            setShowDialog: o,
            showDialog: i,
            subscriptionStatus: p,
            urls: v,
            setDialog: s
          }
        };
      var ne = t(19732);
      const re = (0, ne.g)((() => {
        const e = (0, g.useRockstarTokenPing)(),
          a = (0, F.A)(),
          [{
            iso: t
          }] = (0, R.getLocale)(),
          s = (0, g.toScLocaleString)(t),
          {
            login: n
          } = (0, g.getConfigForDomain)(),
          [r] = (0, m.useSearchParams)(),
          i = (0, m.useNavigate)(),
          o = (0, m.useLocation)(),
          {
            loggedIn: c,
            data: l,
            loading: f
          } = (0, u.useRockstarUser)(),
          p = "true" === r.get("marketing"),
          b = {
            lang: s,
            location: o.pathname,
            login: n,
            navigate: i,
            sc: a.sites.socialClub
          },
          k = {
            ...l,
            isFromAuth: p || !1,
            loggedIn: c,
            pingBearer: e,
            userLoading: f
          },
          v = se(b, k),
          {
            dialog: _,
            setDialog: h,
            handleSubscribeButton: x,
            isButtonLoading: y,
            isLoading: w,
            isSubscribed: N,
            setShowDialog: j,
            showDialog: S,
            urls: C
          } = v;
        return (0, d.jsx)(d.Fragment, {
          children: (0, d.jsx)(Q, {
            handleSubscribeButton: x,
            loggedIn: c || !1,
            loading: f || w,
            urls: C,
            isButtonLoading: y,
            setShowDialog: j,
            isSubscribed: N,
            showDialog: S,
            ...S && _ && {
              dialog: _
            }
          })
        })
      }));
      var ie = t(43582),
        oe = t(68484);
      const ce = ({
          layers: e = [],
          displayClass: a = "",
          style: t = {}
        }) => {
          const s = (0, j.useGenerateCdnSource)();
          if (!e || !e[0]?.image) return null;
          const n = e.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: s(e?.image ?? null)
          })));
          return (0, d.jsx)(oe.y, {
            className: y()("rockstargames-sites-gta-gen9c1c689cf47230fa80bccc9b20515d4fa", a),
            layers: n,
            style: t
          })
        },
        de = "rockstargames-sites-gta-gen9ae8bfc3f9a519606a95144e64ee454b5",
        le = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: s = "",
          style: n = {},
          children: r
        }) => "horizontal" === t ? (0, d.jsx)(oe.kQ, {
          x: [e, a],
          className: y()(de, s),
          styleOuter: n,
          children: r
        }) : (0, d.jsx)(oe.kQ, {
          y: [e, a],
          className: y()(de, s),
          styleOuter: n,
          children: r
        }),
        me = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, oe.as)();
          return (0, l.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), e
        },
        ge = {
          large: "rockstargames-sites-gta-gen9e15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-sites-gta-gen9dfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-sites-gta-gen9e30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-sites-gta-gen9c32a973dbc862a43cc5d4a2aac19ed9b"
        },
        ue = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: s
        }) => (0, d.jsx)(oe.zE, {
          scrollAxis: e,
          children: (0, d.jsx)(me, {
            children: (0, d.jsx)("div", {
              className: y()(ge.parallaxWrapper, ge[a]),
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
        });
      var fe = t(93935),
        pe = t(10632);
      const be = {
          gradient: "rockstargames-sites-gta-gen9b78d3c0bdc9668bb3d318825467177ab",
          left: "rockstargames-sites-gta-gen9f4448b69feb648b8b910230c6f873dbd",
          pillBtn: "rockstargames-sites-gta-gen9b12cdd53cc59cb42903d11d9fdceca7f",
          promoModule: "rockstargames-sites-gta-gen9eabbb5f24c40ef994b612515a0d0f356",
          promoModuleContentContainer: "rockstargames-sites-gta-gen9ef7d758b0d1515fcebe6cb22271a4688",
          promoModuleImage: "rockstargames-sites-gta-gen9b8584eedfbe5a91aaf72c40ec1d619a5",
          promoModuleTextContent: "rockstargames-sites-gta-gen9b590150a7ac01a01a493b85b7ea5cf90",
          promoModuleWrapper: "rockstargames-sites-gta-gen9de25220583bb9220882329a113f7a5e2",
          right: "rockstargames-sites-gta-gen9b69bb02f1c00007e9b4eab8217e2f08e",
          selected: "rockstargames-sites-gta-gen9e03b475da5ca3ded74e8c6dfd54fb476"
        },
        ke = ({
          backgroundColor: e,
          brands: a = [],
          description: t = "",
          ctaLabel: s,
          ctaLink: n = "https://rockstargames.com",
          gradient: r = !0,
          image: i,
          imageOrientation: o = "right",
          title: c = "",
          name: m = "",
          style: g,
          _memoq: f
        }) => {
          const [p, b] = (0, l.useState)(!1), {
            ref: k,
            inView: v
          } = (0, G.useInView)({
            threshold: .6
          }), {
            track: _
          } = (0, u.useGtmTrack)(), h = {
            ...g,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${(0,j.useGetCdnSource)(i)??"var(--promo-background)"})`,
            "--promo-order": "left" === o ? "row" : "row-reverse"
          };
          return (0, l.useEffect)((() => {
            v && !p && (_({
              event: "page_section_impression",
              element_placement: m?.toLowerCase()
            }), b(!0))
          }), [v]), (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)("div", {
              className: be.promoModuleWrapper,
              children: (0, d.jsxs)(N.motion.div, {
                className: be.promoModule,
                style: {
                  ...h
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
                ref: k,
                children: [(0, d.jsx)("div", {
                  className: [be.promoModuleImage, r ? be.gradient : "", "left" === o ? be.left : be.right].join(" ")
                }), (0, d.jsxs)("div", {
                  className: be.promoModuleContentContainer,
                  children: [(0, d.jsx)(L, {
                    brands: a,
                    className: be.promoModuleBrands
                  }), (0, d.jsxs)("div", {
                    className: be.promoModuleTextContent,
                    children: [c && (0, d.jsx)("h3", {
                      children: c
                    }), t && (0, d.jsx)("p", {
                      children: t
                    })]
                  }), s && (0, d.jsx)(A.A, {
                    to: n,
                    text: s,
                    onClick: () => {
                      _({
                        event: "cta_learn",
                        element_placement: "promo module",
                        link_url: n,
                        text: f?.ctaLabel.toLowerCase()
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var ve = t(20517),
        _e = t(48524);
      const he = {
          downVote: "rockstargames-sites-gta-gen9e23b13b0d0be49814d3770c10365c096",
          info: "rockstargames-sites-gta-gen9cee10f330f3ac6fba73fc06ac99bc951",
          loggedOutButtons: "rockstargames-sites-gta-gen9c393b8f2d3b5b3e9204881ae6ff0fdc5",
          pillBtn: "rockstargames-sites-gta-gen9a0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-sites-gta-gen9de6015fb35bdee07192c1656ba4893e3",
          upVote: "rockstargames-sites-gta-gen9b3be682e82659d45f93c2fe63ccd73ba",
          userVote: "rockstargames-sites-gta-gen9b32a59a8a63c53cc278266d726c9c5da",
          voteButtonActive: "rockstargames-sites-gta-gen9f9e46f58f97d2b391aaf715861654cd7",
          voteButtons: "rockstargames-sites-gta-gen9dda673f7473820d8884c017373c780f6",
          voteContent: "rockstargames-sites-gta-gen9aad01ad44bcc6161ad363910e931515f"
        },
        xe = ({
          description: e,
          foreign_id: a = document.location.pathname,
          foreign_type: t = "url",
          title: s
        }) => {
          const {
            track: n
          } = (0, u.useGtmTrack)(), {
            loggedIn: r
          } = (0, u.useRockstarUser)(), {
            refetch: i
          } = (0, g.useQuery)(_e.UserGetVote, {
            skip: !0
          }), [o] = (0, g.useMutation)(_e.UserCastVote), [c, m] = (0, l.useState)(null), f = (0, l.useCallback)((async e => {
            n({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${t} ${a}`
            });
            const s = {
                foreign_id: a,
                foreign_type: t,
                vote: e
              },
              r = await o({
                variables: s
              });
            m(r?.data?.userCastVote?.vote ?? null)
          }), [a, t]);
          return (0, l.useEffect)((() => {
            (async () => {
              if (!r || !a || !t) return;
              const e = await i({
                foreign_id: a,
                foreign_type: t
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t, r]), (0, d.jsx)("div", {
            className: he.userVote,
            children: (0, d.jsxs)("div", {
              className: he.voteContent,
              children: [(0, d.jsxs)("div", {
                className: he.info,
                children: [(0, d.jsx)("h3", {
                  children: s
                }), (0, d.jsx)("p", {
                  children: e
                })]
              }), (0, d.jsxs)("div", {
                className: [he.voteButtons, r ? "" : he.loggedOutButtons].join(" "),
                children: [(0, d.jsx)("button", {
                  onClick: () => f(!0),
                  className: [he.upVote, c ? he.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, d.jsx)("button", {
                  className: [he.downVote, !1 === c ? he.voteButtonActive : ""].join(" "),
                  onClick: () => f(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var ye = t(94848),
        we = t(95359),
        Ne = t(15310),
        je = t.n(Ne);
      const Se = (e = [], a, t) => {
          const s = (0, l.useRef)(null),
            n = (0, l.useRef)(new Set),
            r = (0, l.useRef)([]),
            i = (0, l.useRef)(0),
            o = (0, l.useRef)(0),
            c = (0, l.useRef)(!1),
            d = (0, l.useMemo)((() => Array.from(new Set(e.filter((e => e >= 0 && e <= 100)))).sort(((e, a) => e - a))), [e]);
          return (0, l.useEffect)((() => {
            n.current = new Set, r.current = d.slice()
          }), [d]), (0, l.useEffect)((() => {
            s.current = t ?? window
          }), [t]), (0, l.useEffect)((() => {
            const e = s.current;
            if (!e) return;
            const d = () => {
              c.current || (c.current = !0, requestAnimationFrame((() => {
                (() => {
                  const {
                    scrollTop: s,
                    scrollHeight: c,
                    percent: l
                  } = (() => {
                    const e = t,
                      a = document.documentElement,
                      s = document.body,
                      n = e ? e.scrollTop : a.scrollTop || s.scrollTop || window.scrollY || 0,
                      r = e ? e.scrollHeight : a.scrollHeight || s.scrollHeight || 0,
                      i = e ? e.clientHeight : a.clientHeight || window.innerHeight || 0,
                      o = Math.max(1, r - i);
                    return {
                      scrollTop: n,
                      scrollHeight: r,
                      percent: Math.max(0, Math.min(100, n / o * 100))
                    }
                  })();
                  i.current = l, o.current = s;
                  const m = r.current.find((e => l >= e));
                  if (!m) return;
                  if (n.current.has(m)) return;
                  n.current.add(m), r.current = r.current.filter((e => e !== m));
                  const g = c * (m / 100);
                  a?.({
                    scrollY: m,
                    scrollLength: g
                  }), 0 === r.current.length && e.removeEventListener("scroll", d, {
                    capture: !1
                  })
                })(), c.current = !1
              })))
            };
            return d(), e.addEventListener("scroll", d, {
              passive: !0
            }), () => {
              e.removeEventListener("scroll", d, {
                capture: !1
              })
            }
          }), [a, t, d.join(",")]), {
            scrollY: i.current,
            scrollLength: o.current
          }
        },
        Ce = ({
          threshold: e,
          trackRef: a,
          children: t
        }) => {
          const {
            track: s
          } = (0, u.useGtmTrack)();
          return Se(e, (({
            scrollY: e,
            scrollLength: a
          }) => {
            s({
              event: "page_scroll",
              scroll_depth: e,
              page_length: `${Math.round(a)}px`
            })
          }), a?.current ?? null), t
        },
        Te = ({
          text: e,
          style: a
        }) => (0, d.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c08a001134624b9ceb275eae413bfd3d",
          style: a,
          children: e
        }),
        Ee = ({
          hasTag: e = !1,
          tag: a = null,
          tagStyle: t = null,
          badges: s = []
        }) => e && a ? (0, d.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ceb75d3391774f84e920e955d7a6853f",
          "data-tag-style": t,
          children: a
        }) : e && s && s?.length > 0 ? (0, d.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f83b84453472e937d57011680a564ec6",
          children: s.map((e => (0, d.jsx)(Te, {
            ...e
          }, e?.text)))
        }) : null,
        Me = {
          content: "rockstargames-sites-gta-gen9f418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-sites-gta-gen9ca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: Pe,
          Animations: Le
        } = we,
        {
          variants: Ae,
          transitions: Ie
        } = Le,
        ze = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: s,
          description: n,
          fadesOut: r = !1,
          badges: i
        }) => (0, d.jsx)(Pe, {
          initial: Ae.fade.out.initial,
          animate: {
            opacity: r ? 0 : 1
          },
          transition: Ie.fade,
          className: Me.textOverlay,
          children: (0, d.jsxs)("div", {
            className: Me.content,
            children: [(0, d.jsx)(Ee, {
              hasTag: a,
              tag: t,
              badges: i?.filter((e => e?.isPrimary))
            }), (0, d.jsx)("h3", {
              children: e
            }), s && n && (0, d.jsx)("div", {
              className: Me.description,
              children: n
            })]
          })
        }),
        De = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          tag: s,
          tagStyle: n,
          discountPrice: r,
          originalPrice: i,
          setPricingContainerHeight: o = null
        }) => {
          const c = (0, l.createRef)();
          return (0, l.useEffect)((() => {
            const e = () => {
              c.current && null !== o && o(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, d.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e419c6cd31abd635e742e635dcfd8316",
            ref: c,
            "data-show-background": t,
            children: [a && (0, d.jsx)("span", {
              className: "rockstargames-sites-gta-gen9bf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d98da8fc9dce6d600db165351d3a3fed",
              children: [(0, d.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a5717338db21efc7eb765011d68ea73d",
                "data-tag-style": n || "free",
                children: s
              }), (0, d.jsx)("span", {
                className: "rockstargames-sites-gta-gen9cdaaa9655747e4d129d6c22080bdd33d",
                children: r
              }), (0, d.jsx)("span", {
                className: "rockstargames-sites-gta-gen9af3db4eb6d14c1f4ee5689b4e6386715",
                children: i
              })]
            })]
          })
        };
      var $e = t(80391),
        Be = t(28985),
        Ve = t(47240),
        Oe = t(81715),
        Re = t(49429),
        Fe = t(32903),
        Ge = t(85719),
        He = t(11008);
      const Ue = {
          ps5: Ve,
          ps4: Be,
          ps: $e,
          xboxone: Re,
          xbox: Fe,
          xboxseriesxs: Oe,
          nintendoswitch: He,
          pc: Ge,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        We = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          platformOptions: s,
          setPricingContainerHeight: n = () => {},
          expandedView: r
        }) => {
          const i = (0, l.createRef)();
          return (0, l.useEffect)((() => {
            const e = () => {
              i.current && null !== n && n(i.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [i]), (0, d.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ee81f54f31ab2cd10a67313b9689bf96",
            ref: i,
            "data-show-background": t,
            "data-show-platforms": !r,
            children: [a && (0, d.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d4ab460f0a204a588d4d4dd0a110ca36",
              children: e
            }), s?.platformsAndLinks && (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9afdc85bfd80cae52d4c1b422f1294962",
              children: [(0, d.jsx)(Ee, {
                hasTag: s?._memoq?.platformTag,
                tag: s?._memoq?.platformTag,
                tagStyle: s?._memoq?.platformTagStyle
              }), (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c252412353007d9f02f19a754430b14b",
                children: s.platformsAndLinks.map((({
                  platform: e,
                  buttonText: a
                }) => (0, d.jsx)("img", {
                  className: "rockstargames-sites-gta-gen9ff5cde8853312ffb892472d100c684cd",
                  alt: a,
                  src: Ue[e]
                }, e)))
              })]
            })]
          })
        },
        qe = ({
          textOverlayProps: e,
          title: a,
          size: t,
          expandedView: s = !1,
          children: n,
          pricingOptions: r,
          setPricingContainerHeight: i,
          isCoverCard: o = !1,
          platformOptions: c
        }) => {
          const [m] = (({
            hasTextOverlay: e,
            tag: a,
            collapsedHasTag: t,
            description: s,
            collapsedHasDescription: n,
            size: r,
            title: i,
            expandedView: o,
            badges: c
          }) => {
            const [m, g] = (0, l.useState)(null), u = (0, l.useMemo)((() => {
              if (!e) return null;
              const l = "sm" !== r && n;
              return (0, d.jsx)(ze, {
                title: i,
                hasTag: t,
                tag: a,
                hasDescription: l,
                description: s,
                fadesOut: o,
                badges: c
              })
            }), [e, a, t, s, n, r, i, o, c]);
            return (0, l.useEffect)((() => {
              g(u)
            }), [u]), [m, g]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: s
          }), g = void 0 !== r?.hasPricingOptions || null !== c;
          return (0, d.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9cab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": o,
            "data-expanded-view": s,
            children: [l.Children.map(n, (e => (0, l.cloneElement)(e, {
              title: a,
              size: t,
              expandedView: s
            }))), m, g && (0, d.jsxs)(d.Fragment, {
              children: [!0 === c?.hasPlatformOptions && (0, d.jsx)(We, {
                title: a,
                platformOptions: c,
                pricingOptions: r,
                setPricingContainerHeight: i,
                expandedView: s
              }), !0 === r?.hasPricingOptions && (0, d.jsx)(De, {
                title: a,
                tag: r?._memoq?.tag,
                tagStyle: r?._memoq?.tagStyle || "free",
                discountPrice: r?._memoq?.discountPrice,
                originalPrice: r?._memoq?.originalPrice,
                setPricingContainerHeight: i
              })]
            })]
          })
        },
        {
          LiteMotion: Ke,
          Animations: Xe
        } = we,
        {
          transitions: Ye
        } = Xe,
        Ze = ({
          components: e,
          payload: a,
          prod: t,
          size: s,
          title: n,
          initial: r = "initial",
          animate: i = "animate",
          variants: o,
          type: c = null,
          context: m = null,
          textOverlayProps: u,
          className: f,
          children: p,
          theme: b = "none",
          id: k,
          pricingOptions: v,
          pricingContainerHeight: _,
          isCoverCard: h,
          platformOptions: x,
          isProductCard: w = !1
        }) => {
          const N = (0, l.useRef)(null),
            S = (0, l.useRef)(null),
            {
              tag: C,
              expandedHasTag: T,
              badges: E
            } = u;
          V().set(a, "meta.prod", t);
          const M = p?.props?.images.length > 0;
          let P = (0, d.jsx)("h1", {
            children: n
          });
          return h && (P = null), (0, l.useEffect)((() => {
            const e = () => {
              N.current && N.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (N.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, d.jsx)(g.DataLayerProvider, {
            card_id: k,
            card_name: n?.toLowerCase(),
            children: (0, d.jsx)(Ce, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === c ? N : S,
              children: (0, d.jsxs)(Ke, {
                ref: N,
                initial: r,
                animate: i,
                variants: o.expanded,
                transition: Ye.cardOpen,
                className: y()("rockstargames-sites-gta-gen9c2289ce1bf0de6ad8a4a8ce7e90a4b66", f),
                "data-type": c,
                "data-size": s,
                "data-product": w,
                "data-covercard": h || !1,
                "data-context": m,
                style: {
                  "--product-card-pricing-info-height": `${_||0}px`
                },
                children: [M && (0, d.jsx)(qe, {
                  size: s,
                  title: n,
                  textOverlayProps: u,
                  expandedView: !0,
                  pricingOptions: v,
                  platformOptions: x,
                  isCoverCard: h,
                  children: p
                }), (0, d.jsxs)(Ke, {
                  ref: S,
                  className: "rockstargames-sites-gta-gen9e461568802b56e8c21b8b82d9c3a1fb4",
                  variants: o.expandedContents,
                  transition: Ye.afterCardOpen,
                  "data-theme": b,
                  children: [(0, d.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9c4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, d.jsx)(Ee, {
                      hasTag: T,
                      tag: C,
                      badges: E
                    }), P, w && (0, d.jsxs)(d.Fragment, {
                      children: [!0 === x?.hasPlatformOptions && (0, d.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9cd635452588eda421bdea19f00660efc",
                        children: (0, d.jsx)(Ee, {
                          hasTag: x?.hasPlatformOptions,
                          tag: x?._memoq?.platformTag,
                          tagStyle: x?._memoq?.platformTagStyle
                        })
                      }), !0 === v?.hasPricingOptions && (0, d.jsx)(De, {
                        title: n,
                        showTitle: !1,
                        showBackground: !1,
                        tag: v?._memoq?.tag,
                        tagStyle: v?.tagStyle || "free",
                        discountPrice: v?._memoq?.discountPrice,
                        originalPrice: v?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, d.jsx)(j.TinaParser, {
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
      var Qe = t(12294);
      const Je = (0, R.defineMessages)({
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
        ea = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第 {currentPage} 页（共 {totalPages} 页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        aa = (0, R.withIntl)((({
          id: e,
          position: a,
          title: t,
          size: s = "md",
          sectionTitle: n = "",
          expandedType: r = null,
          modalProps: i = {
            content: null,
            className: "",
            contentClassName: ""
          },
          className: o,
          children: c,
          isProductCard: g,
          cardIds: f = null,
          theme: p = "none",
          isCoverCard: b,
          platformOptions: k
        }) => {
          const {
            formatMessage: v,
            formatList: _
          } = (0, R.useIntl)(), [h, x] = (0, m.useSearchParams)(), y = (0, l.useRef)(null), [, w] = (0, Qe.h)(), {
            track: N
          } = (0, u.useGtmTrack)(), [j, S] = (0, l.useState)(!1), C = window.location.href.includes("cms5"), T = () => {
            S(!1), w(null), C || x({}), N({
              event: "trackPageview"
            })
          }, E = () => {
            if (!i?.content || !y.current || !r || "linkout" === r) return;
            const n = y.current,
              o = window.getComputedStyle(n),
              c = parseInt(o.getPropertyValue("width"), 10),
              d = parseInt(o.getPropertyValue("height"), 10),
              l = n.getBoundingClientRect(),
              {
                content: m,
                className: g,
                contentClassName: u
              } = i,
              b = "fob" === s ? "fob" : "default";
            w({
              content: m,
              onClose: T,
              rect: l,
              width: c,
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
            j && E()
          }), [j]), (0, l.useEffect)((() => {
            S(h.get("info") === e)
          }), [h.get("info"), e]);
          const M = (0, l.useMemo)((() => {
            const e = k?._memoq?.platformTag || "";
            if (k?.platformsAndLinks?.length > 0) {
              const a = k?.platformsAndLinks?.map((({
                  buttonText: e
                }) => e)),
                s = _(a, {
                  type: "conjunction"
                });
              return e ? v(Je.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: s
              }) : v(Je.card_label_platforms, {
                title: t,
                platformList: s
              })
            }
            return e ? v(Je.card_label_tag, {
              tag: e,
              title: t
            }) : t
          }), [k, t]);
          return b || "linkout" === r ? (0, d.jsx)("div", {
            ref: y,
            className: o,
            "data-size": s,
            "data-type": r,
            "data-product": g,
            role: "button",
            "aria-label": M,
            children: c
          }) : (0, d.jsx)("button", {
            ref: y,
            onClick: s => {
              s.preventDefault(), s.stopPropagation(), e ? x({
                info: e
              }) : E(), N({
                event: "card_click",
                element_placement: n?.toLowerCase(),
                position: a,
                card_id: e,
                card_name: t?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: o,
            "data-size": s,
            "data-type": r,
            "data-product": g,
            tabIndex: "linkout" !== r ? 0 : -1,
            "aria-label": M,
            type: "button",
            children: c
          })
        }), ea),
        ta = {
          card: "rockstargames-sites-gta-gen9c49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-sites-gta-gen9b41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-sites-gta-gen9dd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-sites-gta-gen9fea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-sites-gta-gen9d893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-sites-gta-gen9f3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-sites-gta-gen9a03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-sites-gta-gen9e961062768d06292ff6cb598ae1c5e69"
        },
        sa = ({
          payload: e,
          prod: a,
          images: t,
          size: s,
          title: n,
          initial: r,
          animate: i,
          variants: o,
          id: m,
          position: g,
          sectionTitle: u,
          expandedType: f,
          context: p,
          children: b,
          expandedCardContents: k,
          textOverlayProps: v = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          deckProps: _ = {},
          modalProps: h = [],
          theme: x,
          cardIds: y,
          pricingOptions: w,
          platformOptions: N = null,
          pricingContainerHeight: S,
          isCoverCard: C = !1,
          isProductCard: T = !1
        }) => {
          const E = (0, j.useTinaComponents)(),
            M = (0, l.useMemo)((() => ({
              ...E,
              HTMLElement: O,
              ImageWithBadge: pe.A,
              Carousel: c.A,
              GroupOfItems: je()
            })), [E]),
            P = (0, l.useMemo)((() => (0, d.jsx)(Ze, {
              type: f,
              components: M,
              payload: e,
              prod: a,
              images: t,
              size: s,
              title: n,
              context: p,
              textOverlayProps: v,
              initial: r,
              animate: i,
              variants: o,
              theme: x,
              cardIds: y,
              pricingOptions: w,
              id: m,
              pricingContainerHeight: S,
              isCoverCard: C,
              platformOptions: N,
              isProductCard: T,
              children: k
            })), [f, t, a, s, n, v, k, r, i, o, M, e, T]),
            L = [ta.card, C ? ta.coverCardWrapper : ""].join(" ");
          return (0, d.jsx)(aa, {
            id: m,
            position: g,
            sectionTitle: u,
            title: n,
            size: s,
            expandedType: f,
            images: t,
            deckProps: _,
            modalProps: {
              content: P,
              ...h
            },
            className: L,
            isProductCard: T,
            cardIds: y,
            theme: x,
            isCoverCard: C,
            platformOptions: N,
            children: b
          })
        },
        na = {
          foreground: "rockstargames-sites-gta-gen9d858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-sites-gta-gen9d656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-sites-gta-gen9a7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-sites-gta-gen9cfc6074d8b476125230142c79438a249",
          logo: "rockstargames-sites-gta-gen9ca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-sites-gta-gen9f5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: ra,
          Animations: ia
        } = we,
        {
          getVariant: oa,
          variants: ca,
          transitions: da
        } = ia,
        la = ({
          image: e,
          i: a,
          prod: t
        }) => {
          const {
            alt: s,
            src: n
          } = (0, h.S1)({
            ...e,
            prod: t
          });
          return (0, d.jsx)("img", {
            src: n.mobile,
            alt: s ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        ma = ({
          images: e = [],
          className: a = "",
          prod: t = !1,
          expandedView: s = !1,
          style: n = {}
        }) => {
          const [r, i] = (0, l.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, l.useEffect)((() => {
            function e() {
              i({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [r]);
          const o = (0, l.useMemo)((() => e?.length && 0 !== e.length ? e.map((e => (0, d.jsx)(ra, {
            className: y()(na[e?.specialClass] ?? na.imageMask, na[e?.sizeClass], e?.className),
            variants: oa(e?.specialClass ?? "imageMask", s ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: da.cardOpen,
            children: (0, d.jsx)(la, {
              image: e,
              prod: t
            })
          }, e.key))) : null), [e, r, s, t]);
          return (0, d.jsx)(ra, {
            className: y()(na.layeredImageFrame, e.length > 1 ? na.layered : na.flat, a),
            style: n,
            initial: ca.fade.in.initial,
            animate: ca.fade.in.animate,
            transition: da.instantFade,
            "data-expanded-view": s,
            children: o
          })
        };
      var ga = t(14200);
      const ua = ({
          expandedType: e,
          to: a,
          children: t,
          style: s,
          sectionTitle: n = "",
          id: r,
          cardTitle: i,
          position: o
        }) => {
          const {
            track: c
          } = (0, u.useGtmTrack)(), m = (0, l.useCallback)((() => {
            c({
              event: "card_click",
              link_url: a,
              card_id: r,
              card_name: i,
              element_placement: n.toLowerCase(),
              position: o
            })
          }), [n, a, r, i, n, o]);
          return "linkout" === e && a ? (0, d.jsx)(ga.A, {
            to: a,
            style: s,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: m,
            children: t
          }) : t
        },
        fa = {
          content: "rockstargames-sites-gta-gen9c65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-sites-gta-gen9fc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-sites-gta-gen9ddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-sites-gta-gen9b4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: pa
        } = we.Animations,
        ba = ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: n = "short",
          textOverlayProps: r = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: i = [],
          deckProps: o = {},
          to: c = null,
          tina: m = {},
          position: g = 0,
          sectionTitle: u = "",
          theme: f,
          pricingOptions: p,
          cardIds: b,
          platformOptions: k = null
        }) => {
          const v = (0, j.useTinaPayload)(),
            _ = m?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [h, x] = (0, l.useState)(o?.size ?? s),
            [y, w] = (0, l.useState)(0),
            N = void 0 !== p?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, l.useEffect)((() => {
            x(o?.size ?? s)
          }), [o?.size, s]), (0, d.jsx)(sa, {
            id: e,
            title: a,
            size: h,
            expandedType: n,
            images: i,
            deckProps: o,
            prod: _,
            payload: {
              content: t,
              meta: {}
            },
            variants: pa.plainCard,
            textOverlayProps: r,
            modalProps: {
              className: fa.customModal,
              contentClassName: fa.customModalContent
            },
            expandedCardContents: (0, d.jsx)(ma, {
              images: i,
              prod: _,
              expandedView: !0
            }),
            position: g,
            sectionTitle: u,
            theme: f,
            cardIds: b,
            pricingOptions: p,
            platformOptions: k,
            pricingContainerHeight: y,
            isProductCard: N,
            children: (0, d.jsx)(ua, {
              expandedType: n,
              to: c,
              sectionTitle: u,
              id: e,
              cardTitle: a,
              position: g,
              children: (0, d.jsx)("div", {
                className: fa.content,
                "data-product": N,
                children: (0, d.jsx)(qe, {
                  title: a,
                  size: h,
                  textOverlayProps: r,
                  pricingOptions: p,
                  platformOptions: k,
                  setPricingContainerHeight: w,
                  children: (0, d.jsx)(ma, {
                    images: i,
                    prod: _
                  })
                })
              })
            })
          })
        },
        ka = (0, R.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        va = {
          bodySmall: "rockstargames-sites-gta-gen9deed018133fca0148d0bf72fbe95bcd6"
        },
        _a = ({
          track: e,
          artist: a
        }) => (0, d.jsxs)("div", {
          className: va.track,
          children: [(0, d.jsx)("p", {
            children: e
          }), (0, d.jsx)("p", {
            className: va.bodySmall,
            children: a
          })]
        }),
        ha = (0, ne.g)((({
          content: e = []
        }) => (0, d.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9e2587587f57e43c9ca90d1e16e4a6ca6",
          children: [(0, d.jsx)("h4", {
            className: "rockstargames-sites-gta-gen9ef167f82b058360b2b6a3466ca73d7de",
            children: (0, d.jsx)(R.FormattedMessage, {
              ...ka.components_track_list_title
            })
          }), (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9beaa4a0a8d9f3a6ef20ee517f222a3c2",
            children: (0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c06a65e90847e8b44df20f2aceb57038",
              children: e?.map((e => (0, d.jsx)(_a, {
                track: e.track,
                artist: e.artist
              }, e.key)))
            })
          })]
        })));
      var xa = t(4407);
      const {
        variants: ya
      } = we.Animations;
      var wa = t(46823),
        Na = t(29625);
      const ja = {
          content: "rockstargames-sites-gta-gen9db8d475894c24c580268644776443fa6",
          customModalContent: "rockstargames-sites-gta-gen9c758020ea3f5943e5f8a7d89ade3da69",
          logo: "rockstargames-sites-gta-gen9f5649436402db0dddc6a55b41c5556cc",
          pillBtn: "rockstargames-sites-gta-gen9e810afee3cb66fbbb03c473e5aa2f5be",
          secondary: "rockstargames-sites-gta-gen9d761507b70662391f68f5018510655ea",
          selected: "rockstargames-sites-gta-gen9e4ad62c1f330692bdb75370f5bbe66eb"
        },
        {
          variants: Sa
        } = we.Animations,
        Ca = ({
          id: e,
          logoImage: a = null,
          logoImageHeight: t = "auto",
          name: s = null,
          title: n,
          titleSizeClass: r = null,
          content: i,
          ctaText: o,
          ctaURL: c,
          size: m = "md",
          expandedType: g = "short",
          textOverlayProps: u = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: f = [],
          deckProps: p = {},
          to: b = null,
          tina: k = {},
          cardIds: v,
          theme: _
        }) => {
          const h = (0, R.useIntl)(),
            x = (0, j.useTranslations)({
              payload: k?.payload,
              variables: k?.variables ?? {}
            }),
            [y, w] = (0, l.useState)(p?.size ?? m),
            N = (0, j.useGetCdnSource)(a ?? null),
            S = x?.content?.[0],
            C = S?.body ?? S?._memoq?.body;
          return (0, l.useEffect)((() => {
            w(p?.size ?? m)
          }), [p?.size, m]), (0, d.jsx)(sa, {
            id: e,
            title: n,
            sectionTitle: s || n,
            size: y,
            expandedType: g,
            images: f,
            deckProps: p,
            payload: {
              content: i,
              meta: {}
            },
            variants: Sa.plainCard,
            textOverlayProps: u,
            modalProps: {
              className: ja.customModal,
              contentClassName: ja.customModalContent
            },
            expandedCardContents: (0, d.jsx)(ma, {
              images: f,
              expandedView: !0
            }),
            theme: _,
            cardIds: v,
            isCoverCard: !0,
            children: (0, d.jsx)(ua, {
              expandedType: g,
              to: b,
              sectionTitle: s || n,
              children: (0, d.jsxs)("div", {
                className: ja.content,
                children: [a && (0, d.jsx)("img", {
                  className: ja.logo,
                  alt: "logo",
                  src: N,
                  style: {
                    height: `${t}`
                  }
                }), (0, d.jsx)("h2", {
                  className: r,
                  children: n
                }), C && (0, d.jsx)("p", {
                  children: C
                }), (0, d.jsx)(Na.A, {
                  target: "newtab" === g ? "_blank" : "_self",
                  to: c || void 0,
                  children: o || h.formatMessage(Je.card_learn_more)
                })]
              })
            })
          })
        };
      var Ta = t(24162),
        Ea = t(7545);
      const Ma = "rockstargames-sites-gta-gen9b7d3d1587271986440f5870d8d02eb3b",
        Pa = "rockstargames-sites-gta-gen9fcffcc6e594fbf9a4a6e9ab5a8d034c7",
        La = {
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
        Aa = ({
          title: e = "thumbnail gallery",
          thumbsPerView: a = 3,
          loop: t = !1,
          navigation: s = !1,
          slideChildren: n = [],
          variants: r = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          },
          transition: i = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          }
        }) => {
          const {
            track: o
          } = (0, u.useGtmTrack)(), [c, m] = (0, l.useState)([Ea.U1, Ea.WO, Ea.dK]), [g, f] = (0, l.useState)(null), [p, b] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            const e = [Ea.U1, Ea.WO, Ea.dK];
            s && e.push(Ea.Vx), m(e)
          }), [s]), (0, l.useEffect)((() => {
            if (!n) return;
            const e = n.map(((e, a) => (0, d.jsx)(Ta.qr, {
              children: e
            }, Symbol(a).toString())));
            b(e)
          }), [n]), p ? (0, d.jsxs)(N.motion.div, {
            className: "rockstargames-sites-gta-gen9f2d55de974817e455a162843125a8771",
            variants: r.parent,
            transition: i.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, d.jsx)(N.motion.div, {
              className: Ma,
              variants: r.main,
              transition: i.main,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(Ta.RC, {
                loop: t,
                navigation: s,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: c,
                breakpoints: La,
                className: Ma,
                onSlideNextTransitionEnd: () => {
                  o({
                    event: "carousel_next",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  o({
                    event: "carousel_previous",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  o({
                    event: "carousel_swipe",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                children: p
              })
            }), (0, d.jsx)(N.motion.div, {
              className: Pa,
              variants: r.thumbs,
              transition: i.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(Ta.RC, {
                threshold: 50,
                onSwiper: f,
                loop: t,
                breakpoints: La,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: c,
                className: Pa,
                children: p
              })
            })]
          }) : null
        },
        Ia = ({
          images: e,
          title: a,
          expandedView: t,
          variants: s,
          transition: n
        }) => {
          const r = (0, l.useMemo)((() => e && 0 !== e?.length ? e.map(((e, a) => e?.image?.sources ? (0, l.createElement)(pe.A, {
            ...e,
            key: a,
            style: {
              ...e?.style,
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [e]);
          return !r?.length || r?.length < 1 ? null : 1 === r.length ? r : (0, d.jsx)(Aa, {
            slideChildren: r,
            title: a,
            navigation: t,
            thumbsVisible: t,
            spaceBetween: 0,
            variants: s,
            transition: n
          })
        },
        za = {
          customModalContent: "rockstargames-sites-gta-gen9ecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-sites-gta-gen9cf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-sites-gta-gen9cbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: Da,
          variants: $a
        } = we.Animations,
        Ba = ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: n = "gallery",
          textOverlayProps: r = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: i = [],
          deckProps: o = {},
          tina: c = {},
          payload: m,
          position: g = 0,
          sectionTitle: u = "",
          cardIds: f
        }) => {
          const p = (0, j.useTinaPayload)(),
            b = m ?? p,
            k = c?.payload?.meta?.cdn ?? b?.meta?.prod ?? !1,
            v = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(i, k),
            [_, h] = (0, l.useState)(o?.size ?? s),
            {
              parent: x,
              main: y,
              thumbs: w
            } = $a?.cardWithImageGallery?.gallery ?? {};
          return (0, l.useEffect)((() => {
            h(o?.size ?? s)
          }), [o?.size, s]), (0, d.jsx)(sa, {
            id: e,
            position: g,
            sectionTitle: u,
            payload: {
              content: t,
              meta: {},
              payload: b
            },
            title: a,
            size: _,
            expandedType: n,
            images: v,
            deckProps: o,
            prod: k,
            variants: $a.cardWithImageGallery,
            textOverlayProps: r,
            modalProps: {
              className: za.customModal,
              contentClassName: za.customModalContent
            },
            expandedCardContents: (0, d.jsx)(Ia, {
              images: v,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: x,
                main: y,
                thumbs: w
              },
              transition: {
                parent: Da.cardOpen,
                main: Da.cardOpen,
                thumbs: Da.cardOpen
              }
            }),
            cardIds: f,
            children: (0, d.jsx)("div", {
              className: za.content,
              children: (0, d.jsx)(qe, {
                title: a,
                size: _,
                textOverlayProps: r,
                children: (0, d.jsx)(Ia, {
                  images: v,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var Va = t(3514);
      const Oa = ({
        title: e,
        content: a,
        size: t = "md",
        badgeText: s
      }) => {
        const n = {
          ...(0, j.useTinaComponents)(),
          HTMLElement: O,
          UnorderedList: fe.A,
          ListItem: Va.A
        };
        return (0, d.jsx)("div", {
          className: "rockstargames-sites-gta-gen9cfa8d259e6ae05cd5f97d50306be5ffe",
          "data-size": t,
          children: (0, d.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a4a39548fac12526e8721ffa8813e66a",
            children: [s && (0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9cf77e65e2af63ee114825607dde3d11e",
              children: s
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9f903ce7e605696e1bc18c4bc22274a6e",
              children: [e && (0, d.jsx)("h3", {
                children: e
              }), (0, d.jsx)(j.TinaParser, {
                components: n,
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
      var Ra = t(87731),
        Fa = t.n(Ra),
        Ga = t(65211);
      const Ha = {
          controls: "rockstargames-sites-gta-gen9add02ff2cfa9b26941d96126a31bc21f",
          controlsButtons: "rockstargames-sites-gta-gen9e77442300b4509fe7a0104b3fb4cecf5",
          controlsCurrentBg: "rockstargames-sites-gta-gen9cca0f086505f02983f345dfb64c2ca45",
          controlsCurrentBgVisible: "rockstargames-sites-gta-gen9b91004149be94449c7fbfee3d24bde58",
          controlsNextTrack: "rockstargames-sites-gta-gen9cd583d32f7692538f7f5d1181943c899",
          controlsPlayPause: "rockstargames-sites-gta-gen9c58746be839199f6102319efb7659a54",
          controlsPlayPausePlaying: "rockstargames-sites-gta-gen9cecadc2b92a0597a55ba5870b46706c9",
          controlsPrevTrack: "rockstargames-sites-gta-gen9d84e8c03d27a3038eb54cb7d12c8ac52",
          controlsScrub: "rockstargames-sites-gta-gen9f90cfd862377d31cb5ee1faf9249fd3c",
          controlsScrubTrack: "rockstargames-sites-gta-gen9f4bb886e9545730ccc323f43a1dfb45c",
          controlsTrack: "rockstargames-sites-gta-gen9ff717d7c9ac30041034f2c95fd3e3017",
          controlsTrackAnimating: "rockstargames-sites-gta-gen9f09973ae8e0457805bc0a1090d05e444",
          controlsTrackArtist: "rockstargames-sites-gta-gen9e0b6ffdc4c40a6992d70395cd98cb6c5",
          controlsTrackBurger: "rockstargames-sites-gta-gen9f3106c22742d7b08e577964a56789504",
          controlsTrackTitle: "rockstargames-sites-gta-gen9f47edf112978c82a9bbfb2476170007f",
          fixedToBottom: "rockstargames-sites-gta-gen9ea802f7f67d39cfdd9625cc8de62828f",
          iconBurger: "rockstargames-sites-gta-gen9a18e526e94dfd87e9b5696a21c1c7754",
          player: "rockstargames-sites-gta-gen9c7765dd7dbdff24d38ef3326bb8a938b",
          scrollText: "rockstargames-sites-gta-gen9b42c9e9ba3716121d34600c92fdf4398",
          trackActive: "rockstargames-sites-gta-gen9a74e95cb6296abf8ca92168db76fecb9",
          trackIndex: "rockstargames-sites-gta-gen9d0322571401b3a4dac22628533213ede",
          trackList: "rockstargames-sites-gta-gen9c7dfe95abfbec1cdef9dfb87d9fd1a1f",
          trackTitle: "rockstargames-sites-gta-gen9eceb3183ee9dc74e33d4184b307ba923",
          tracks: "rockstargames-sites-gta-gen9b4036f5fe1d1ab9674cc7c6e40f9a53c",
          tracksOpen: "rockstargames-sites-gta-gen9a9a553961300b8ee030d0c90ac613c4c"
        },
        Ua = ({
          src: e
        }) => (0, d.jsx)("div", {
          className: Ha.cover,
          style: {
            background: `url(${e}) center/cover`
          }
        }),
        Wa = ({
          timing: e = {
            current: 0,
            duration: 0
          },
          playing: a,
          audioRef: t,
          setPlaying: s,
          tracksOpen: n,
          setTracksOpen: r,
          trackData: i,
          setTrackId: o,
          trackBounds: c,
          setAutoNext: m
        }) => {
          const g = (0, l.useRef)(null),
            u = (0, l.useRef)(null),
            f = (0, l.useRef)(null),
            [p, b] = (0, l.useState)(null),
            [k, v] = (0, l.useState)(!1),
            _ = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, l.useEffect)((() => {
            if (!u.current || !f.current) return;
            const e = () => {
              f.current && u.current && b(f.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [f, u, e]), (0, l.useEffect)((() => {
            if (!g.current || !e?.duration) return;
            let a = null;
            const s = new(Fa())(g.current),
              n = a => {
                if (g.current) {
                  const s = g.current.clientWidth;
                  if (!g.current.contains(a.srcEvent.target)) return;
                  const n = Math.max(0, a.srcEvent.offsetX),
                    r = Number(n / s * e.duration);
                  t.currentTime = r
                }
              },
              r = () => {
                a ? t.pause() : t.play()
              },
              i = () => {
                a = t.paused, t.pause()
              };
            return s.on("panstart", i), s.on("panleft", n), s.on("panright", n), s.on("panend", r), s.on("tap", n), () => {
              s.off("panstart", i), s.off("panleft", n), s.off("panright", n), s.off("panend", r), s.off("tap", n)
            }
          }), [g.current, e.duration]), (0, l.useEffect)((() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && v(!0)
          }), [a, t?.currentTime]), (0, d.jsxs)("div", {
            className: Ha.controls,
            style: {
              "--track-color": i.color,
              "--track-mix-blend-mode": i.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, d.jsx)("div", {
              className: [Ha.controlsCurrentBg, k ? Ha.controlsCurrentBgVisible : ""].join(" ")
            }), (0, d.jsx)("div", {
              className: Ha.controlsTrack,
              ref: u,
              children: (0, d.jsx)("span", {
                className: [Ha.controlsTrackTitle, p ? Ha.controlsTrackAnimating : ""].join(" "),
                ref: f,
                children: i.title
              })
            }), (0, d.jsxs)("div", {
              className: Ha.controlsButtons,
              children: [(0, d.jsx)("div", {
                className: Ha.controlsPrevTrack,
                onClick: () => {
                  c && (o(c[0]), m(!0), s(!0))
                }
              }), (0, d.jsx)("div", {
                className: [Ha.controlsPlayPause, a ? Ha.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  s(!a)
                }
              }), (0, d.jsx)("div", {
                className: Ha.controlsNextTrack,
                onClick: () => {
                  c && (o(c[1]), m(!0), s(!0))
                }
              })]
            }), (0, d.jsx)("div", {
              active: n ? "" : null,
              className: Ha.controlsTrackBurger,
              children: (0, d.jsx)("div", {
                className: Ha.iconBurger,
                onClick: () => {
                  r(!n)
                }
              })
            }), (0, d.jsxs)("div", {
              className: Ha.controlsScrub,
              children: [(0, d.jsx)("span", {
                children: _(e.current)
              }), (0, d.jsx)("div", {
                className: Ha.controlsScrubTrack,
                ref: g
              }), (0, d.jsx)("span", {
                children: _(e.duration)
              })]
            })]
          })
        },
        qa = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: s,
          setTracksOpen: n,
          setPlaying: r,
          setAutoNext: i
        }) => (0, d.jsxs)("div", {
          className: Ha.tracks,
          children: [(0, d.jsx)("h4", {
            children: "Tracks"
          }), (0, d.jsx)("div", {
            className: Ha.trackBurger,
            onClick: () => {
              n(!s)
            }
          }), (0, d.jsx)("div", {
            className: Ha.trackList,
            children: e.map(((e, s) => (0, d.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? Ha.trackActive : "",
              onClick: () => {
                t(e.id), r(!0), i(!0)
              },
              children: [(0, d.jsx)("span", {
                className: Ha.trackIndex,
                children: String(s + 1).padStart(2, "0")
              }), (0, d.jsx)("span", {
                className: Ha.trackTitle,
                children: e.title
              }), (0, d.jsx)("span", {
                className: Ha.trackTime,
                children: e.duration
              })]
            }, e.id)))
          })]
        }),
        Ka = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, g.useQuery)(Ga.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [s, n] = (0, l.useState)(), [r, i] = (0, l.useState)(), [o, c] = (0, l.useState)(), [m, u] = (0, l.useState)(!1), [f, p] = (0, l.useState)(!1), [b, k] = (0, l.useState)(), [v, _] = (0, l.useState)({
            current: 0,
            duration: 0
          }), [h, x] = (0, l.useState)(!0);
          return (0, l.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (i(a.data.rockstarAudioPlayerPlayTrackId), x(!1), p(!0)), f && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && p(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [f]), (0, l.useEffect)((() => {
            if (!b) return;
            const e = () => {
                isNaN(b.duration) || _({
                  duration: b?.duration ?? 0,
                  current: b?.currentTime ?? 0
                })
              },
              a = () => {
                h && s && i(s[1])
              };
            return b.addEventListener("loadedmetadata", e), b.addEventListener("timeupdate", e), b.addEventListener("ended", a), () => {
              b.removeEventListener("loadedmetadata", e), b.removeEventListener("timeupdate", e), b.removeEventListener("ended", a)
            }
          }), [b, s, h]), (0, l.useEffect)((() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [f]), (0, l.useEffect)((() => {
            b && (f ? b.play() : b.pause(), u(!1))
          }), [f, b, o?.id]), (0, l.useEffect)((() => {
            if (!r) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === r));
            n([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), c(e[a])
          }), [r]), (0, l.useEffect)((() => {
            t && i(t.audioAlbum.tracks[0].id)
          }), [t]), o ? (0, d.jsxs)("div", {
            className: [Ha.player, Ha[a], m ? Ha.tracksOpen : ""].join(" "),
            children: [(0, d.jsx)("audio", {
              ref: e => {
                k(e)
              },
              src: o.mp3_src
            }), (0, d.jsx)(qa, {
              tracks: t.audioAlbum.tracks,
              setTrackId: i,
              trackId: r,
              tracksOpen: m,
              setTracksOpen: u,
              setPlaying: p,
              setAutoNext: x
            }), (0, d.jsx)(Ua, {
              src: o.cover_src
            }), (0, d.jsx)(Wa, {
              setTrackId: i,
              trackBounds: s,
              tracksOpen: m,
              setTracksOpen: u,
              playing: f,
              setPlaying: p,
              timing: v,
              trackData: o,
              audioRef: b,
              setAutoNext: x
            })]
          }) : null
        };
      var Xa = t(91),
        Ya = t(22691),
        Za = t(48303),
        Qa = t.n(Za);
      const Ja = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: s
      }) => {
        const [n, r] = (0, l.useState)(""), i = (0, l.useMemo)((() => Qa()().getData()), []);
        return (0, d.jsx)(Ya.Ay, {
          unstyled: !0,
          value: n,
          isMulti: e,
          allowSelectAll: a,
          options: i,
          placeholder: t,
          onChange: e => {
            return a = e?.target?.value, void r(a);
            var a
          },
          classNamePrefix: "country-select",
          ...s
        })
      };
      var et = t(12914);
      const at = ({
        cookieName: e,
        cookieValue: a,
        trueComponent: t,
        falseComponent: s
      }) => {
        const n = (e => {
            const a = document.cookie.split("; "),
              t = `${e}=`,
              s = a.find((e => e.startsWith(t)));
            return s?.substring(t.length, s.length)
          })(e),
          r = new URLSearchParams(window.location.search).get(e);
        return r && ((e, a) => {
          e && a && (document.cookie = `${e}=${a}; domain=${(0,et.F)()}; path=/;`)
        })(e, r), n === a || r === a ? t : s
      };
      var tt = t(26708),
        st = t(84927);
      const nt = "rockstargames-sites-gta-gen9a19bcd2b98d91e60c43b9de146e20f4e",
        rt = ({
          color: e
        }) => (0, d.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9e83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, d.jsx)("div", {
            className: nt
          }), (0, d.jsx)("div", {
            className: nt
          }), (0, d.jsx)("div", {
            className: nt
          })]
        });
      var it = t(51673),
        ot = t.n(it);
      const ct = {
          dropdownWrapper: "rockstargames-sites-gta-gen9bbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-sites-gta-gen9a9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-sites-gta-gen9df17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-sites-gta-gen9cb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-sites-gta-gen9fe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        dt = ({
          children: e,
          className: a,
          title: t
        }) => {
          const [s, n] = (0, l.useState)(!1);
          let r = null;
          return r = ot(), (0, d.jsx)(r, {
            active: s,
            focusTrapOptions: {
              onDeactivate: () => n(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, d.jsxs)("div", {
              className: [ct.dropdownWrapper, s ? ct.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, d.jsx)("button", {
                className: ct.opener,
                onClick: () => n(!s),
                children: t
              }), s && (0, d.jsx)("div", {
                className: ct.items,
                onClick: () => n(!1),
                children: e
              })]
            })
          })
        },
        lt = ({
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
        mt = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, d.jsx)("div", {
          className: "rockstargames-sites-gta-gen9aee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, d.jsxs)(w, {
            children: [e && (0, d.jsx)("h3", {
              children: e
            }), (0, d.jsx)(w, {
              className: "rockstargames-sites-gta-gen9dba17b5c55f8d40e2600765f1a60d6af",
              children: t.map(((e, a) => {
                return e?.embed ? (0, d.jsx)(lt, {
                  caption: e?.caption,
                  children: (0, d.jsx)("div", {
                    className: "rockstargames-sites-gta-gen9f0cd8278232673606f9c1715bd4950f6",
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
        gt = {
          animateBox: "rockstargames-sites-gta-gen9b07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-sites-gta-gen9f7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-sites-gta-gen9bbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-sites-gta-gen9e0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-sites-gta-gen9f47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-sites-gta-gen9c121e11e40215dc778fe8665eb38845d"
        },
        ut = ({
          children: e,
          style: a
        }) => {
          const t = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([gt.visible])
              }))
            })).observe(t?.current)
          }), []), (0, d.jsx)("div", {
            style: a,
            className: [gt.fadeArea].join(" "),
            ref: t,
            children: e
          })
        },
        ft = {
          "bg-img": "rockstargames-sites-gta-gen9ae25e5bf6793a5522c791028f396dedd",
          border: "rockstargames-sites-gta-gen9af6154339558ed7e6e46014575250492",
          "bottom-y": "rockstargames-sites-gta-gen9d66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-sites-gta-gen9cc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-sites-gta-gen9d6ce82f1bd5cbf6b4abe650a2738c723",
          contain: "rockstargames-sites-gta-gen9c409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-sites-gta-gen9a72cf62465acbddecc3a2cb256640fac",
          dual: "rockstargames-sites-gta-gen9b9c969b033c5016f95d5a70ceea22071",
          fill: "rockstargames-sites-gta-gen9c12eb7986b09f10158c48ad4a902f2ef",
          "hero-lg": "rockstargames-sites-gta-gen9b722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-sites-gta-gen9c6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-sites-gta-gen9e7b70cd5245ee850b5a2bfd048fa02c4",
          imageLayer: "rockstargames-sites-gta-gen9a63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-sites-gta-gen9a206e14a6e055900c30ee67826330173",
          "layer-lg-width": "rockstargames-sites-gta-gen9fb58e41629b31453b12d8bbcc525608f",
          "layer-md-height": "rockstargames-sites-gta-gen9e2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-md-width": "rockstargames-sites-gta-gen9f1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-height": "rockstargames-sites-gta-gen9c947fc08bb64674c4bf0429e7914507e",
          "layer-sm-width": "rockstargames-sites-gta-gen9a1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-height": "rockstargames-sites-gta-gen9a4d21457b55a0626d1cf5170845ba8d6",
          "layer-xl-width": "rockstargames-sites-gta-gen9e5ecbec181677eea6c9c72e02580c501",
          "layer-xs-height": "rockstargames-sites-gta-gen9d0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xs-width": "rockstargames-sites-gta-gen9c60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-height": "rockstargames-sites-gta-gen9d74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-xxl-width": "rockstargames-sites-gta-gen9ac03c56e2475aecafc08e873eed26566",
          layeredImage: "rockstargames-sites-gta-gen9fb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-sites-gta-gen9af169afca6f741daca0331a1b13fa5f1",
          "left-x": "rockstargames-sites-gta-gen9bb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-sites-gta-gen9d50c0c4bee9b09502dd611543223ed37",
          shards: "rockstargames-sites-gta-gen9a0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-sites-gta-gen9cf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-sites-gta-gen9f317b17c9b0f0a27ed95ec2844857f25",
          "top-y": "rockstargames-sites-gta-gen9a9cd0a03e7193a5b47c6e767e045a1ec"
        },
        pt = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            s = e["--border-image-source"],
            n = (0, j.useGetCdnSource)(s || null);
          return s && (t["--border-image-source"] = `url(${n})`), (0, d.jsx)("div", {
            className: y()(ft.border, a),
            style: {
              ...t
            }
          })
        },
        bt = e => e?.images ? (0, d.jsx)("div", {
          className: y()(ft.layeredImage, ft[e?.variantClass], ft[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, d.jsxs)("div", {
            className: ft.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: n,
                objectFitClass: r,
                positionClassX: i,
                positionClassY: o,
                zIndex: c,
                className: l,
                style: m,
                alt: g,
                displayClass: u
              } = e;
              return (0, d.jsx)(xa.A, {
                image: t,
                style: {
                  zIndex: c ?? a + 1
                },
                imageStyle: m,
                className: y()(l, u, ft.imageLayer, ft[s], ft[n], ft[r], ft[i], ft[o]),
                alt: g
              }, c ?? a + 1)
            })), e?.borderImage && (0, d.jsx)(pt, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        kt = e => {
          const {
            image: a,
            alt: t,
            thumbnail: s,
            caption: n,
            style: r,
            showOpenButtonMobile: i,
            showOpenButton: o,
            showDownloadButtonMobile: c,
            showDownloadButton: l,
            showZoomControls: m
          } = e, u = (0, g.useLocale)(), {
            isMobile: f
          } = (0, g.useWindowResize)(), p = a?.sources ?? {}, b = s?.image?.sources ?? {}, k = (0, h.C1)(p?.[u] ?? p?.en_us) ?? "", v = (0, h.C1)(b?.[u] ?? b?.en_us) ?? k, _ = f ? i : o, x = f ? c : l;
          return (0, d.jsx)("div", {
            style: r,
            className: "rockstargames-sites-gta-gen9adbaa0167219cd891249a29faec00e8f",
            children: (0, d.jsxs)(H.Lightbox.Root, {
              altText: t || "",
              children: [(0, d.jsxs)(H.Lightbox.Trigger, {
                style: {
                  aspectRatio: s?.thumbnailAspectRatio
                },
                children: [(0, d.jsx)(H.Lightbox.Thumbnail, {
                  src: v,
                  style: {
                    objectPosition: s?.thumbnailPosition
                  }
                }), _ && (0, d.jsx)(H.Lightbox.OpenIcon, {
                  style: {
                    boxSizing: "content-box"
                  }
                })]
              }), (0, d.jsxs)(H.Lightbox.Portal, {
                children: [(0, d.jsx)(H.Lightbox.Overlay, {}), (0, d.jsxs)(H.Lightbox.Content, {
                  children: [(0, d.jsx)(H.Lightbox.ZoomPan, {
                    children: (0, d.jsx)(H.Lightbox.Image, {
                      src: k
                    })
                  }), (0, d.jsxs)(H.Lightbox.Controls, {
                    children: [n && (0, d.jsx)(H.Lightbox.Caption, {
                      children: n
                    }), (0, d.jsx)(H.Lightbox.Close, {}), m && (0, d.jsx)(H.Lightbox.Zoom, {}), x && (0, d.jsx)(H.Lightbox.Download, {})]
                  })]
                })]
              })]
            })
          })
        },
        vt = {
          animatePlaceholder: "rockstargames-sites-gta-gen9f6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-sites-gta-gen9c3684b80c99c860036d9337843a7be58",
          multiSourceContainer: "rockstargames-sites-gta-gen9a99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-sites-gta-gen9bc42c525ec0bd93df46e1999e278e9fb",
          pillBtn: "rockstargames-sites-gta-gen9c79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-sites-gta-gen9c53675ad15e2ef662362850daab33791"
        },
        _t = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: s,
          lazy: n = !1,
          decoding: r = "auto",
          sizes: i = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [o, c] = (0, l.useState)(!1);
          return (0, d.jsxs)("div", {
            className: vt.multiSourceContainer,
            children: [!o && (0, d.jsx)("img", {
              className: [a, vt.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: s
            }), (0, d.jsx)("img", {
              className: [vt.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (m = e, i.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: s,
              onLoad: () => {
                c(!0)
              },
              loading: n ? "lazy" : "eager",
              decoding: r
            })]
          });
          var m
        },
        ht = {
          tag: "rockstargames-sites-gta-gen9b660bb706132d84852c02df01cc6ed5a"
        },
        xt = ({
          className: e,
          href: a,
          title: t,
          style: s
        }) => {
          const n = (0, d.jsxs)("div", {
            style: s,
            className: [ht.tag, e].join(" "),
            children: [(0, d.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, d.jsx)(ga.A, {
            to: a,
            children: n
          }) : n
        },
        yt = {
          info: "rockstargames-sites-gta-gen9ea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-sites-gta-gen9b394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-sites-gta-gen9c06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-gta-gen9ca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-gta-gen9b3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-sites-gta-gen9a56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-sites-gta-gen9f1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-sites-gta-gen9eee9c5d3b714a61ac265369800a6d4e0"
        },
        wt = ({
          section: e = "",
          index: a,
          post: t,
          noSpecialOrder: s = !1,
          focused: n
        }) => {
          const {
            track: r
          } = (0, u.useGtmTrack)(), [i] = (0, m.useSearchParams)(), o = t.preview_images_parsed.newswire_block, c = {
            default: 0 !== a || s ? o.square || o.d16x9 || o._fallback : o.d16x9 || o.square || o._fallback,
            mobile: o.square || o._fallback
          }, [f, p] = (0, g.usePreloadImg)(c.default), b = {
            default: {
              backgroundImage: `url(${c.default})`
            },
            mobile: {
              backgroundImage: `url(${c.mobile})`
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
          return (0, d.jsx)(ga.A, {
            to: t.url,
            className: [yt.newswireBlock, s ? yt.newswireBlockNoSpecialOrder : "", null !== f ? yt.startAnimation : ""].join(" "),
            focused: n,
            onClick: k,
            children: (0, d.jsxs)(d.Fragment, {
              children: [0 !== a || i.get("tag_id") ? (0, d.jsx)("div", {
                className: yt.preview,
                style: b.default
              }) : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)("div", {
                  className: yt.previewMobile,
                  style: b.mobile
                }), (0, d.jsx)("div", {
                  className: yt.preview,
                  style: b.default
                })]
              }), (0, d.jsxs)("div", {
                className: yt.info,
                children: [(0, d.jsxs)("div", {
                  className: yt.top,
                  children: [t.primary_tags.length ? (0, d.jsx)(xt, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, d.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, d.jsx)("h5", {
                  className: yt.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Nt = t(96566),
        jt = t(46368),
        St = t.n(jt);
      const Ct = (0, g.withTranslations)((({
          section: e = "",
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: s = "/newswire",
          t: n
        }) => {
          const r = (0, g.useLocale)(),
            {
              track: i
            } = (0, u.useGtmTrack)(),
            [o, c] = (0, m.useSearchParams)(),
            {
              tagId: f = null
            } = (0, m.useParams)(),
            [p, b] = (0, l.useState)(f ?? t ?? o.get("tag_id")),
            [k, v] = (0, l.useState)(1),
            [_, h] = (0, l.useState)(20),
            [x, y] = (0, l.useState)([]),
            [w, N] = (0, l.useState)(null),
            [j, {
              loading: S,
              data: C
            }] = (0, Nt._l)(St(), {
              variables: {
                tagId: Number(p),
                page: k,
                metaUrl: s,
                limit: _,
                locale: r
              }
            });
          return (0, l.useEffect)((() => {
            v(1), y([]), h(20), b(f ?? t ?? o.get("tag_id")), j()
          }), [o.get("tag_id"), f, t]), (0, l.useEffect)((() => {
            const e = x;
            C?.posts?.paging && N(C?.posts?.paging), C?.posts?.results && y(e.concat(C?.posts?.results))
          }), [C]), (0, l.useEffect)((() => {
            (() => {
              const e = o.get("page"),
                a = Number(e ?? 1);
              h(20 * a), j()
            })()
          }), []), x.length ? (0, d.jsxs)("div", {
            "data-testid": "newswire-list",
            children: [(0, d.jsx)(Pt, {
              section: e,
              posts: x,
              relativeTo: a,
              noSpecialOrder: null !== p
            }), null !== w && w.nextPage ? (0, d.jsx)(Na.A, {
              className: "rockstargames-sites-gta-gen9e125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: e => {
                const a = o.get("page"),
                  t = Number(a ?? k) + 1;
                v(t), 20 !== _ && h(20), j(), c({
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
              children: n("More Stories")
            }) : ""]
          }) : null
        })),
        Tt = {
          just1post: "rockstargames-sites-gta-gen9d46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-sites-gta-gen9f2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-sites-gta-gen9cfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-sites-gta-gen9b8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-sites-gta-gen9f94728c4a438800b9abab11a8b3e3c0a"
        },
        Et = (0, g.withTranslations)((({
          posts: e,
          t: a
        }) => (0, d.jsxs)("section", {
          className: Tt.related,
          children: [(0, d.jsx)("h2", {
            children: a("Related Stories")
          }), (0, d.jsx)("div", {
            className: [Tt.posts, 1 === e.length ? Tt.just1post : ""].join(" "),
            children: e.map((e => (0, d.jsx)(wt, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        }))),
        Mt = {
          newswireBlocks: "rockstargames-sites-gta-gen9ea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-gta-gen9d301334a72b626f8cc2f5b9733299e76"
        },
        Pt = (0, g.withGtmTracking)((({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: s,
          relativeTo: n
        }) => {
          const [r, i] = (0, l.useState)(null);
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
            })), s(a), i(t.length)
          }), [t.length]), (0, d.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Mt.newswireBlocks, a ? Mt.noSpecialOrder : "", Mt.contextHome].join(" "),
            children: t.map(((t, s) => (0, d.jsx)(wt, {
              section: e,
              index: s,
              noSpecialOrder: a,
              post: t,
              focused: s === r
            }, t.id)))
          })
        })),
        Lt = "rockstargames-sites-gta-gen9b013d77f453d7053bbcf06f173ff326c",
        At = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: s,
          className: n
        }) => (0, d.jsx)("a", {
          href: "#",
          className: s === a.page ? `rockstargames-sites-gta-gen9b577d5726806ec872ecdb8a46905734f ${n??""}` : "",
          onClick: e => {
            e.preventDefault(), t(s)
          },
          children: e
        }),
        It = ({
          data: e,
          onPageUpdate: a,
          className: t
        }) => {
          if (1 === e.pageCount) return null;
          const s = new Array(Math.min(e.pageCount, 8)),
            n = Math.max(e.pageCount - 8, 1),
            r = Math.max(2, e.page - 4),
            i = Array.from(s, ((e, a) => a + Math.min(n, r)));
          return (0, d.jsxs)("div", {
            className: `rockstargames-sites-gta-gen9e480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)(At, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, d.jsx)("div", {
                className: Lt,
                children: "..."
              }) : ""]
            }) : "", i.map((s => (0, d.jsx)(At, {
              data: e,
              onPageUpdate: a,
              page: s,
              className: t,
              children: s
            }, s))), e.pageCount > 8 ? (0, d.jsxs)(d.Fragment, {
              children: [i.slice(-1)[0] + 1 < e.pageCount ? (0, d.jsx)("div", {
                className: Lt,
                children: "..."
              }) : "", (0, d.jsx)(At, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        },
        zt = {
          responsiveFlexBox: "rockstargames-sites-gta-gen9fad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-sites-gta-gen9f5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-sites-gta-gen9d437a700a9b768227a114e70db78af03"
        },
        Dt = ({
          children: e,
          className: a,
          style: t
        }) => (0, d.jsx)("div", {
          className: [zt.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        $t = {
          responsiveFlexItem: "rockstargames-sites-gta-gen9e7371144db2e94a049204d4b178416ec"
        },
        Bt = ({
          children: e,
          className: a,
          style: t
        }) => (0, d.jsx)("div", {
          className: [$t.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Vt = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-sites-gta-gen9b0d14e4a5e63a903117e93a392cbfb53"
        },
        Ot = ({
          children: e,
          cols: a,
          className: t,
          rows: s,
          style: n
        }) => {
          const r = n ? {
            ...n
          } : {};
          return void 0 !== a && (r.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== s && (r.gridTemplateRows = `repeat(${s}, 1fr)`), (0, d.jsx)("div", {
            className: [Vt.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: r,
            children: e
          })
        },
        Rt = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-sites-gta-gen9a32d93b6ae982b5ad473f75cf86ff085"
        },
        Ft = ({
          children: e,
          className: a,
          style: t
        }) => (0, d.jsx)("div", {
          className: [Rt.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Gt = {
          responsiveImage: "rockstargames-sites-gta-gen9f642b754e0efd503262ab7ca0c7b9f5b"
        },
        Ht = ({
          src: e,
          className: a = "",
          animate: t,
          ariaLabel: s,
          style: n = {}
        }) => {
          const [r, i] = (0, g.usePreloadImg)(e);
          if (!r) return null;
          n.backgroundImage = `url(${e})`;
          const o = {
            ...n
          };
          return i && (o["--aspect-ratio"] = i.width / i.height), (0, d.jsx)("div", {
            role: "img",
            "aria-label": s ?? "R* Games",
            className: [Gt.responsiveImage, t ? Gt.animateBox : "", a].join(" "),
            style: o
          })
        },
        Ut = {
          maxWidth: "rockstargames-sites-gta-gen9b2c8f49e280c2e7c204b30a4af8c13b9",
          responsiveSection: "rockstargames-sites-gta-gen9bd7167fb3a3edaf4df4d9a576efb1170"
        },
        Wt = ({
          children: e,
          className: a,
          style: t,
          maxWidth: s
        }) => (0, d.jsx)("section", {
          className: [Ut.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: s ? (0, d.jsx)("div", {
            className: Ut.maxWidth,
            children: e
          }) : e
        });
      var qt = t(45881);
      const Kt = ({
        html: e
      }) => (0, d.jsx)("div", {
        children: (0, qt.Ay)(e)
      });
      var Xt = t(39252);
      const Yt = () => {
        const {
          pathname: e
        } = (0, m.useLocation)();
        return (0, l.useEffect)((() => {
          const e = document.scrollingElement || document.documentElement;
          setTimeout((() => {
            e.scrollTop = 0
          }), 0)
        }), [e]), null
      };
      var Zt = t(67050),
        Qt = t(79704);
      const Jt = ({
        children: e
      }) => (0, d.jsx)("div", {
        className: "rockstargames-sites-gta-gen9aae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, d.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var es = t(55322);
      const as = ({
          children: e,
          style: a,
          theme: t
        }) => {
          const [s, n] = (0, l.useState)(t);
          return (0, l.useEffect)((() => {
            t && n(t)
          }), [t]), (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e5e0faf6ab9871fd60b958c6f7dcf519",
            style: a,
            "data-theme": s,
            children: e
          })
        },
        ts = {
          card: "rockstargames-sites-gta-gen9f93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-sites-gta-gen9a1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-sites-gta-gen9dabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-sites-gta-gen9fd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-gta-gen9b8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-sites-gta-gen9fd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-sites-gta-gen9a626ad482ff0be0336e75929516654d5"
        },
        ss = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [s] = (0, g.usePreloadImg)(t());
          return (0, d.jsx)("div", {
            className: [ts.screencap, s ? ts.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        ns = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: s,
          toExplicit: n
        }) => {
          const r = n ?? `/videos/${t.id}`,
            i = {
              className: ts.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": r
            },
            o = (0, d.jsxs)("div", {
              className: ts.card,
              children: [(0, d.jsx)(ss, {
                video: t,
                size: s
              }), (0, d.jsxs)("div", {
                className: ts.info,
                children: [e ? (0, d.jsx)("div", {
                  className: ts.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, d.jsx)("h5", {
                  className: ts.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, d.jsx)("a", {
            href: r,
            target: "_blank",
            ...i,
            children: o
          }) : (0, d.jsx)(ga.A, {
            to: r,
            ...i,
            children: o
          })
        },
        rs = {
          active: "rockstargames-sites-gta-gen9e35688e0d87409e3aef95ffb624d94f4",
          carousel: "rockstargames-sites-gta-gen9bc3f1abaac4c17c0e9aaac5fccfc6f7e",
          cta: "rockstargames-sites-gta-gen9f40c40ed1bc4242a32bc0628eea34048",
          disableClick: "rockstargames-sites-gta-gen9fcd11cd5895147a9e08f8f4026d68d94",
          dots: "rockstargames-sites-gta-gen9e0ca3ed410818f0961345606a96f03ee",
          dragging: "rockstargames-sites-gta-gen9b335b03fce6834b86318f3d7cbf3fab6",
          gameTitle: "rockstargames-sites-gta-gen9b5d3df350466b14e4b419bdb479b4064",
          info: "rockstargames-sites-gta-gen9a4057ef942e10ebeedb1370b08c3c32b",
          items: "rockstargames-sites-gta-gen9d30be9a5f31ff7fabf20969eec3200f1",
          slidesContent: "rockstargames-sites-gta-gen9c4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-sites-gta-gen9cdb5c063bfc35cfbaaaefc68a77c1b07",
          title: "rockstargames-sites-gta-gen9e66c271fbbc8b6e431fc5d466c57479c",
          track: "rockstargames-sites-gta-gen9efe7112432da76c65f293853b4c942d1",
          videoTitle: "rockstargames-sites-gta-gen9ed4138b1e7fecd4b6d29f0e1bef1fdfd"
        },
        is = (0, R.defineMessages)({
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
        os = (0, ne.g)((({
          videos: e
        }) => {
          const a = (0, g.useLocale)(),
            {
              formatMessage: t
            } = (0, R.useIntl)(),
            {
              track: s
            } = (0, u.useGtmTrack)(),
            {
              setBodyIsLocked: n
            } = (0, g.useBodyScrollable)("VideoCarousel"),
            [r, i] = (0, l.useState)(0),
            [o, c] = (0, l.useState)(0),
            m = (0, l.useRef)(null),
            f = (0, l.useRef)(null);
          (0, l.useEffect)((() => {
            if (!m.current || !f.current) return;
            const a = new(Fa())(m.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                i(r - 1 < 0 ? 0 : r - 1), c(0)
              },
              o = () => {
                const a = r + 1 >= e.length - 1 ? e.length - 1 : r + 1;
                i(a), c(0)
              },
              d = e => {
                c(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !f.current?.classList.contains(rs.dragging) || t() && n(!0)
              },
              l = () => {
                t() && n(!1), c(0)
              },
              g = e => {
                "press" === e.type && m.current?.classList.add(`${rs.disableClick}`), "tap" === e.type && (m.current?.classList.remove(`${rs.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                t() && n(!1), m.current && m.current.classList.remove(`${rs.disableClick}`)
              },
              p = () => {
                t() && n(!1)
              };
            return f.current.addEventListener("transitionend", p), a.on("swiperight", s), a.on("swipeleft", o), a.on("pan", d), a.on("panend", l), a.on("press tap", g), a.on("pressup", u), () => {
              a.off("swiperight", s), a.off("swipeleft", o), a.off("pan", d), a.off("panend", l), a.off("press tap", g), a.off("pressup", u), f.current && f.current.removeEventListener("transitionend", p), c(0)
            }
          }), [m.current, r]);
          const p = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? is.learn_more : is.watch_more)]
          };
          return (0, d.jsxs)("section", {
            className: rs.carousel,
            children: [(0, d.jsx)("div", {
              className: rs.track,
              ref: m,
              children: (0, d.jsx)("div", {
                className: `${rs.items} ${0!==o?rs.dragging:""}`,
                ref: f,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${o}px))`
                },
                children: e.map(((e, a) => {
                  const [t, s, n] = p(e);
                  return (0, d.jsx)(ga.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": s,
                    to: s,
                    className: r === a ? rs.active : "",
                    role: "link",
                    title: t,
                    tabIndex: r === a ? 0 : -1,
                    target: n,
                    children: (0, d.jsx)(ss, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                }))
              })
            }), (0, d.jsxs)("div", {
              className: rs.slidesContent,
              children: [(0, d.jsx)("div", {
                className: rs.text,
                children: e.map(((e, t) => {
                  const [n, i, o, c] = p(e);
                  return (0, d.jsxs)(ga.A, {
                    className: [rs.info, t === r ? rs.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": i,
                    to: i,
                    role: "link",
                    title: n,
                    tabIndex: r === t ? 0 : -1,
                    target: o,
                    children: [(0, d.jsxs)("div", {
                      className: rs.title,
                      children: [(0, d.jsxs)("div", {
                        className: rs.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, d.jsx)("h2", {
                        className: rs.videoTitle,
                        children: n
                      })]
                    }), (0, d.jsx)(Na.A, {
                      className: rs.cta,
                      onClick: (l = i, () => {
                        s({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: l,
                          element_placement: "video carousel"
                        })
                      }),
                      children: c
                    })]
                  }, e.id);
                  var l
                }))
              }), (0, d.jsx)("section", {
                className: rs.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map(((e, a) => (0, d.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => i(a),
                  className: r === a ? rs.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        cs = (0, R.defineMessages)({
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
        ds = {
          img: "rockstargames-sites-gta-gen9d87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-sites-gta-gen9b9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-sites-gta-gen9dc444c089b89129c0a39bc61845d531f"
        };
      (0, g.importAll)(t(86751));
      const ls = ({
          isWideCard: e = !1,
          size: a = 640,
          title: s,
          titleSlug: n,
          inGlobalNav: r = !1
        }) => {
          const {
            isMobile: i
          } = (0, g.useWindowResize)(), o = (0, l.useMemo)((() => {
            let s = "";
            return e && (s = i ? t(24865)(`./${n}/mobile.jpg`) : t(53781)(`./${n}/desktop.jpg`)), s || (s = t(39294)(`./${n}.jpg`), s += `?im=Resize=${a}`), s
          }), [i, n]), [c] = (0, g.usePreloadImg)(o);
          let m = o;
          return (0, d.jsx)("div", {
            role: "img",
            "aria-label": s,
            style: {
              backgroundImage: `url(${m})`,
              borderRadius: r ? "unset" : ""
            },
            className: [ds.img, c ? ds.startAnimation : "", e ? ds.wide : ""].join(" ")
          })
        },
        ms = {
          fobLink: "rockstargames-sites-gta-gen9d30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-gta-gen9c9686ec502f78b05e47568667e90bd17"
        },
        gs = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: s = ""
          } = e, n = ["VI"].includes(t.toUpperCase());
          return (0, d.jsx)(ga.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? s,
            target: "_self",
            className: [ms.fobLink, n ? ms.wide : ""].join(" "),
            reloadDocument: n,
            children: (0, d.jsx)(ls, {
              title: e.title,
              titleSlug: t,
              isWideCard: n,
              size: n ? 1740 : 480
            })
          })
        },
        us = {
          arrow: "rockstargames-sites-gta-gen9cabb1073f7b7f75b799c87d74cfaf0ad",
          arrowNav: "rockstargames-sites-gta-gen9c9b73b78d75dd740e918208a9d615796",
          disabled: "rockstargames-sites-gta-gen9dbe1b06efadb349825f7b9b1b2778c68",
          items: "rockstargames-sites-gta-gen9ef63b0224f0cc9fa73a9c4549ad6c7e9",
          next: "rockstargames-sites-gta-gen9bfdf85a5867d26b52a0962be91170e36",
          partial: "rockstargames-sites-gta-gen9ab95829b388545f21071fd5bb97c25bb",
          previous: "rockstargames-sites-gta-gen9d7404262ef1f79bde0883b02110a4a5d",
          sectionHeader: "rockstargames-sites-gta-gen9ad695c18d6276297e78924feea3e6201",
          track: "rockstargames-sites-gta-gen9a4d3877b3cf6bff0abccdc561c0fe149",
          trackWrapper: "rockstargames-sites-gta-gen9bd79ab04bc93e3bcf79be808e0a06e9b",
          videoList: "rockstargames-sites-gta-gen9bacddb57787eca7b621a046e6f23aaf5"
        },
        fs = (0, ne.g)((({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: s
        }) => {
          const n = (0, R.useIntl)(),
            {
              track: r
            } = (0, u.useGtmTrack)(),
            i = void 0 !== a ? "games" : "videos",
            [o, c] = (0, l.useState)(),
            [m, g] = (0, l.useState)(),
            [f, p] = (0, l.useState)(0),
            b = (0, l.useRef)(null),
            k = (0, l.useRef)(null);
          (0, l.useEffect)((() => {
            g({
              nextEl: k.current,
              prevEl: b.current
            })
          }), [k, b]), (0, l.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), p(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [f]);
          const v = e => {
            o?.slideTo(e)
          };
          let _;
          return _ = "games" === i ? (0, d.jsx)(d.Fragment, {
            children: a.results.map(((e, a) => "775700as" !== e.id && (0, d.jsx)(Ta.qr, {
              className: us.slide,
              onFocus: () => v(a),
              children: (0, d.jsx)(gs, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, d.jsx)(d.Fragment, {
            children: e.map(((e, a) => (0, d.jsx)(Ta.qr, {
              className: us.slide,
              onFocus: () => v(a),
              children: (0, d.jsx)(ns, {
                video: e,
                gameTitleNecessary: s
              })
            }, e.id)))
          }), (0, d.jsxs)("section", {
            className: us.videoList,
            children: [(0, d.jsxs)("h3", {
              className: us.sectionHeader,
              children: [t, (0, d.jsxs)("div", {
                className: us.arrowNav,
                children: [(0, d.jsx)("button", {
                  className: [us.arrow, us.previous].join(" "),
                  type: "button",
                  ref: b,
                  "aria-label": n.formatMessage(cs.previous_button_label)
                }), (0, d.jsx)("button", {
                  className: [us.arrow, us.next].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": n.formatMessage(cs.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = o?.slides[o?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, d.jsx)("div", {
              className: [us.items, f % 1 != 0 ? us.partial : ""].join(" "),
              children: (0, d.jsx)("div", {
                className: us.trackWrapper,
                children: f && (0, d.jsx)(Ta.RC, {
                  className: us.track,
                  slidesPerView: f,
                  spaceBetween: 24,
                  onInit: e => {
                    c(e)
                  },
                  grabCursor: !0,
                  navigation: m,
                  modules: [Ea.Vx],
                  slideClass: y()("swiper-slide"),
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
                  children: _
                })
              })
            })]
          })
        })),
        ps = ({
          children: e,
          ...a
        }) => (0, d.jsx)("span", {
          ...a,
          className: "rockstargames-sites-gta-gen9acd86b7f5778381df8fac4a3f7489f60",
          children: e
        });
      var bs = t(34100),
        ks = t(57386),
        vs = t(29315),
        _s = t(95386),
        hs = t(22230);
      const {
        Gen9CoreCarousel: xs,
        framer: ys,
        useTinaModuleFetchByIds: ws,
        withSimpleErrorBoundary: Ns
      } = n, js = {
        Card: ba,
        CardWithImageGallery: Ba,
        TextCard: Oa,
        ...n
      }, Ss = ys.withFadeIn(Ns((({
        cards: e = [],
        size: a,
        name: t,
        title: s,
        description: n,
        disclaimer: r,
        customSlidesPerView: i = null,
        theme: o = "none",
        cardSizeBreakpoints: c = {},
        customAspectRatio: g = "3/1",
        titleBadge: u = null,
        id: f = ""
      }) => {
        const p = (0, l.useRef)(null),
          b = V().map(e, "id"),
          k = ws({
            ids: b
          }),
          [v, _] = (0, l.useState)(i),
          [h] = (0, m.useSearchParams)(),
          [x, y] = (0, l.useState)(!1);
        (0, l.useEffect)((() => {
          if ("fob" === a) {
            const e = h.get("section");
            if (e && "games" === e && !x && (y(!0), p.current)) {
              const e = 100;
              window.scrollTo(0, p.current.offsetTop - e)
            }
          }
        }), []), (0, l.useEffect)((() => {
          if (!p.current) return;
          const e = () => {
            const e = i || window.getComputedStyle(p.current).getPropertyValue("--slides-per-view");
            _(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const w = (0, l.useMemo)((() => {
          let e = 0;
          if (!k) return null;
          let t = "blank",
            n = !1;
          return k.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (n = e.tina.payload.content[0].excludeFromModal))
          })), k.reduce(((r, i) => {
            if (i) {
              const {
                id: c,
                tina: l
              } = i, m = V().clone(l);
              V().set(m, "payload.meta.id", c);
              const g = b.filter((e => e !== t || e === t && !n));
              r.push((0, d.jsx)(j.TinaParser, {
                components: js,
                tina: m,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: m,
                  id: c,
                  position: e,
                  sectionTitle: s,
                  theme: o,
                  cardIds: g
                }
              }, c)), e += 1
            }
            return r
          }), [])
        }), [k, a]);
        return (0, d.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9cf8eaaa96e41e0c9b5a5a1745ded9986",
          "data-theme": o,
          ref: p,
          id: f,
          children: [(0, d.jsx)(xs, {
            description: n,
            size: a,
            cardSizeBreakpoints: c,
            slideChildren: w,
            title: s,
            name: t,
            customSlidesPerView: v,
            customAspectRatio: g,
            titleBadge: u,
            theme: o
          }), r && (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d6d0f9d842469dec608825829148dff6",
            children: (0, d.jsx)("span", {
              className: "rockstargames-sites-gta-gen9e22c0580e1e1d2471b4ca2e60e6b900f",
              children: (0, d.jsx)(Kt, {
                html: r
              })
            })
          })]
        })
      })));
      var Cs = t(87330),
        Ts = t(9738),
        Es = t.n(Ts);
      const Ms = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        Ps = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Ls = e => e.scrollHeight > e.clientHeight;

      function As(e, a) {
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
          } else V().isObject(e) && !V().isArray(e) ? As(e, a) : V().isArray(e) && (t[s] = e.map((e => V().isObject(e) ? As(e, a) : e)))
        })), t
      }
      const Is = (0, g.withTranslations)((({
          active: e,
          styles: a,
          title: t,
          itemNumber: s,
          inModalMode: n,
          openModalMode: r,
          element: i,
          upNext: o,
          mobileMode: c,
          refDeck: m,
          components: g,
          tina: f,
          prevPage: p,
          nextPage: b,
          transitionStyle: k,
          selectedItemNumber: v,
          carouselTitle: _,
          sharedDraggingDelta: x,
          setSharedDraggingDelta: y,
          trapFocus: w
        }) => {
          const N = (0, R.useIntl)(),
            {
              track: S
            } = (0, u.useGtmTrack)(),
            C = (0, l.createRef)(),
            T = (0, l.createRef)(),
            E = (0, l.createRef)(),
            M = (0, l.createRef)(),
            P = (0, l.createRef)(),
            [L, A] = (0, l.useState)(!1),
            [I, z] = (0, l.useState)(0),
            [D, $] = (0, l.useState)(0),
            [B, V] = (0, l.useState)(0),
            [O, F] = (0, l.useState)(0),
            [G, H] = (0, l.useState)(0),
            [U, W] = (0, l.useState)(!1),
            [q, K] = (0, l.useState)(0),
            [X, Y] = (0, l.useState)(0),
            [Z, Q] = (0, l.useState)(0),
            [J, ee] = (0, l.useState)("700"),
            [ae, te] = (0, l.useState)(-1),
            [se, ne] = (0, l.useState)(0),
            [re, ie] = (0, l.useState)(0),
            [oe, ce] = (0, l.useState)(0),
            [de, le] = (0, l.useState)(!1),
            [me, ge] = (0, l.useState)(""),
            [ue, fe] = (0, l.useState)(null),
            [pe, be] = (0, l.useState)(!1),
            [ke, ve] = (0, l.useState)(null),
            [_e, he] = (0, l.useState)(!1),
            [xe, ye] = (0, l.useState)(!1),
            we = (0, j.useTinaPayload)(),
            Ne = f?.payload?.meta?.cdn ?? !1 ?? we?.meta?.prod ?? !1,
            je = (0, j.useTranslations)({
              payload: f?.payload,
              variables: f?.variables
            }),
            Se = je?.meta ?? {},
            Ce = As(je?.content?.[0], Ne),
            Ee = (0, l.useMemo)((() => Ce?.images?.[0]?.image?.badge), [Ce]),
            Me = (0, l.useMemo)((() => Ce.title ?? t ?? Se?.title), [t, Se?.title, Ce.title]),
            Pe = (0, h.S1)({
              alt: Ce?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Ce?.images?.[0]?.image?.alt ?? "",
              sources: Ce?.images?.[0]?.image?.sources ?? [],
              prod: Ne
            }),
            Le = Pe?.src?.mobile ?? Pe?.src?.desktop ?? !1,
            Ae = (0, l.useMemo)((() => Se?.foreignId), [Se]),
            Ie = (0, l.useMemo)((() => Se?.foreignTitle), [Se]),
            [ze, De] = (0, l.useState)(0),
            [$e, Be] = (0, l.useState)(0),
            [Ve, Oe] = (0, l.useState)(0),
            [Re, Fe] = (0, l.useState)(0),
            [Ge, He] = (0, l.useState)(!1),
            [Ue, We] = (0, l.useState)(0),
            [qe, Ke] = (0, l.useState)(20),
            [Xe, Ye] = (0, l.useState)(null),
            [Ze, Qe] = (0, l.useState)(!1);
          let ea = n ? -1 : 0;
          ea = n && !e ? -1 : 0;
          const aa = (0, l.useCallback)((e => {
              if (!0 === U || !n && !c || pe) return;
              const a = Ps(e);
              De(a.x), Be(a.y)
            }), [U, n]),
            ta = e => {
              aa(e)
            },
            sa = e => {
              if (!0 === U || 0 === ze || !n && !c || pe) return;
              const a = Ps(e),
                t = a.x > ze ? 1 : -1,
                s = Math.abs(ze - a.x);
              n && !c && s > qe ? (Qe(!0), ge(t > 0 ? "prev" : "next"), ra()) : (He(!0), We(s * t), y(s * t))
            },
            na = e => {
              if (!0 === U || !n && !c || pe) return;
              const a = Ps(e),
                t = a.x > ze ? 1 : -1,
                s = Math.abs(ze - a.x),
                r = Math.abs($e - a.y);
              n && !c ? (ra(), ge("")) : s > qe && r < 25 ? (Qe(!0), ge(t > 0 ? "prev" : "next"), ra()) : ra()
            },
            ra = () => {
              W(!0), De(0), Be(0), He(!1), We(0), y(0)
            },
            ia = e => {
              e ? (n || A(!0), n || c || (clearTimeout(ae), te(setTimeout((() => {
                S({
                  event: "card_title_hover",
                  card_name: Me,
                  card_id: s,
                  position: s,
                  view_name: `${Ae}/${Ie}`,
                  source_content_id: Ae,
                  source_content_name: Ie
                })
              }), 1e3)))) : (n || A(!1), n || c || clearTimeout(ae))
            };
          return (0, l.useEffect)((() => {
            let e = q;
            L ? e = 0 : n && !c && (e = q), z(e)
          }), [L, c, n, D, O, X, Z, B, q]), (0, l.useEffect)((() => {
            A(!(!n || !c))
          }), [n, c]), (0, l.useEffect)((() => {
            n && e && S({
              event: "virtualPageview",
              display_type: c ? "mobile" : "desktop",
              view_name: `${Ae}/${Me}`,
              source_content_id: Ae,
              source_content_name: Ie
            })
          }), [n, e]), (0, l.useEffect)((() => {
            const e = Es()(((e, a) => {
              let t = 18;
              if (e?.documentElement && (t = Ms(e?.documentElement, "--root-font-size")), re !== a.innerHeight && ie(a.innerHeight), m?.current) {
                Q(Ms(m.current, "--eventDeck-marginSm") * t);
                const e = t * Ms(m?.current, "--eventDeck-modalGutters"),
                  s = a?.innerWidth,
                  n = s - 2 * e;
                $(n), M.current && c && V(n), F(Ms(m.current, "--eventDeck-itemSize") * t), ce(Ms(m.current, "--eventDeck-phaseOneTransitionDuration"));
                const r = Ms(m?.current, "--eventDeck-itemImageTitleMargins") * t,
                  i = T?.current?.clientHeight,
                  o = i + r;
                Number.isNaN(o) || K(o), ne(Ms(m?.current, "--eventDeck-headerHeight") * t)
              }
              let s = Math.min(700, a.innerWidth);
              c || (s = 900), ee(`${s}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [m, c]), (0, l.useEffect)((() => {
            if (C.current) {
              const e = C.current.clientHeight;
              Number.isNaN(e) || Y(e)
            }
          }), [C]), (0, l.useEffect)((() => {
            if (n && c && M.current && (M.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !n && c && M.current) {
              const e = 228 / D;
              M.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!c && M.current && (M.current.style.transform = null)
          }), [n, c, D, B]), (0, l.useEffect)((() => {
            const e = .5 * D,
              a = re - se - 3 * Z;
            H(D - (e < a ? e : a))
          }), [D, Z, re]), (0, l.useEffect)((() => {
            "next" === me ? (b(null, !0), ge("")) : "prev" === me && (p(null, !0), ge(""))
          }), [me]), (0, l.useEffect)((() => {
            Oe(0), Fe(0)
          }), [c]), (0, l.useEffect)((() => {
            c ? Ke(n ? 35 : 20) : n && Ke(50)
          }), [n, c]), (0, l.useEffect)((() => {
            let e = [],
              t = 0,
              s = 0;
            if (null !== a?.transform) {
              e = a.transform.split(",");
              const n = e[0].split("(");
              t = Number(n[1].replace("px", "")), Oe(t), s = Number(e[1].replace("px", "")), Fe(s)
            }
          }), [a]), (0, l.useEffect)((() => {
            if (!U) return;
            clearTimeout(ue);
            const e = setTimeout((() => {
              W(!1), De(0)
            }), 200);
            fe(e)
          }), [U, 200]), (0, l.useEffect)((() => {
            if (!Ze) return;
            clearTimeout(Xe);
            const e = setTimeout((() => {
              Qe(!1)
            }), 1e3);
            Ye(e)
          }), [Ze]), (0, l.useEffect)((() => {
            n && clearTimeout(ae), setTimeout((() => {
              le(!de)
            }), oe)
          }), [n]), (0, l.useEffect)((() => (document.body.addEventListener("mouseleave", ra), () => {
            document.body.removeEventListener("mouseleave", ra)
          })), []), (0, l.useEffect)((() => {
            P.current ? he(Ls(P.current)) : he(!1), void 0 !== i && i.current ? ye(Ls(i.current)) : ye(!1)
          }), [i, P, e, n, de]), Ce ? (0, d.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c02ee363d47108460ab7916fc955cd9b",
            ref: i,
            "data-item-position": s,
            "data-modal-mode": n,
            "data-active-item": e,
            "data-up-next": o,
            "data-transition": Ge || 0 !== x ? "none" : k,
            "data-scrollable": xe,
            style: {
              ...a,
              transform: n && e && !c ? `translate3d(${Ve+Ue}px, ${Re}px, 0)` : c && !n ? `translate3d(${Ve+x}px, ${Re}px, 0)` : a?.transform
            },
            onClick: e => {
              Ze || (n ? n && !c && (s < v ? p(e, !0) : s > v && b(e, !0)) : r(e))
            },
            onMouseEnter: () => ia(!0),
            onMouseLeave: () => ia(!1),
            onFocus: () => ia(!0),
            onBlur: () => ia(!1),
            onTouchStart: ta,
            onTouchMove: sa,
            onTouchEnd: na,
            onMouseDown: ta,
            onMouseMove: sa,
            onMouseUp: na,
            onKeyUp: e => {
              "Enter" === e.key && (n || r(e))
            },
            onKeyDown: e => {
              "Tab" === e.key && e.shiftKey && n && (e.preventDefault(), w("backwards"))
            },
            tabIndex: ea,
            "aria-label": n ? N.formatMessage(Je.events_deck_modal_group_label) : Me,
            role: n ? "dialog" : "presentation",
            children: [(0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dee75b8e3614051c8f0fc97e373e78e5",
              "data-full-header": L,
              ref: E,
              style: {
                height: n && c ? `${D}px` : null,
                width: n && c ? `${D}px` : null
              },
              children: [Le && (0, d.jsx)("img", {
                ref: M,
                src: `${Pe?.src?.mobile??Pe?.src?.desktop}?im=Resize,width=${J}`,
                alt: Pe?.alt,
                style: {
                  width: 0 !== B && c ? `${B}px` : null,
                  height: 0 !== B && c ? `${B}px` : null
                }
              }), (0, d.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9dc279f97c134d6e7d30602288b8b10ae",
                "aria-hidden": "true",
                style: {
                  transform: !c || c && n ? `translate3d(0, ${I}px, 0)` : null
                },
                children: [Ee && (0, d.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cfe252d5613a21c1d308c98566cabd21",
                  ref: C,
                  children: (0, d.jsx)(Te, {
                    text: Ee
                  })
                }), (0, d.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9b311a78aea53383ab6bd5cbccb52ceeb",
                  ref: T,
                  "aria-hidden": "true",
                  children: Me
                })]
              })]
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d212586e74ea4b4fe934beed9e339f78",
              ref: P,
              "aria-hidden": !n,
              onScroll: () => {
                be(!0), ra(), clearTimeout(ke);
                const e = setTimeout((() => {
                  be(!1)
                }), 100);
                ve(e)
              },
              style: {
                top: n && c ? `${D}px` : null,
                width: n && !c && e ? `${G}px` : null,
                touchAction: _e || c ? "unset" : "none"
              },
              children: [Me && (0, d.jsx)("span", {
                className: "rockstargames-sites-gta-gen9da9ef865674c108ffd53cfab2ed2971a",
                children: Me
              }), (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9abad8b0c98a7216d91b672492397e6a6",
                children: (0, d.jsx)(j.TinaParser, {
                  components: g,
                  tina: {
                    meta: Se,
                    payload: {
                      content: Ce?.content
                    }
                  }
                })
              }), (0, d.jsx)("button", {
                className: "rockstargames-sites-gta-gen9a0b399d3bf191afcf00e7196639527d5",
                type: "button",
                onFocus: w,
                style: {
                  display: n ? "block" : "none"
                }
              })]
            })]
          }) : null
        })),
        zs = "rockstargames-sites-gta-gen9eff7810cc71a3b63bfc3e58cbe4a0279",
        Ds = ({
          prevPage: e,
          prevBtnDisabled: a,
          nextPage: t,
          nextBtnDisabled: s,
          selectedItemNumber: n,
          itemsData: r,
          closeModalMode: i,
          inModalMode: o,
          controlsHidden: c,
          focusTrapControl: m,
          focusTrapDirection: g,
          setTriggerFocusCard: u
        }) => {
          const f = (0, R.useIntl)(),
            p = (0, l.createRef)(),
            b = (0, l.createRef)(),
            k = (0, l.createRef)();
          return (0, l.useEffect)((() => {
            m && ("backwards" === g ? k?.current?.focus() : a ? b?.current?.focus() : p?.current?.focus())
          }), [m, a]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": c || "false",
              children: [(0, d.jsx)("button", {
                className: zs,
                ref: p,
                type: "button",
                onClick: e,
                disabled: a,
                "aria-label": o ? f.formatMessage(Je.events_deck_modal_previous_aria_label) : f.formatMessage(Je.events_deck_previous_aria_label),
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && o && (e.preventDefault(), u(!0))
                }
              }), (0, d.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !o,
                "aria-label": f.formatMessage(Je.events_deck_paging_label, {
                  currentPage: n + 1,
                  totalPages: r.length
                }),
                children: [n + 1, (0, d.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9aad28b229162f1d7494a2de3a3b6b547"
                }), r.length]
              }), (0, d.jsx)("button", {
                className: zs,
                ref: b,
                type: "button",
                onClick: t,
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && a && o && (e.preventDefault(), u(!0))
                },
                disabled: s,
                "aria-label": o ? f.formatMessage(Je.events_deck_modal_next_aria_label) : f.formatMessage(Je.events_deck_next_aria_label)
              })]
            }), (0, d.jsx)("button", {
              className: "rockstargames-sites-gta-gen9fb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: i,
              ref: k,
              onKeyDown: e => {
                "Tab" === e.key && !e.shiftKey && o && (e.preventDefault(), u(!0))
              },
              "aria-label": f.formatMessage(Je.events_deck_modal_close_label),
              "aria-hidden": !o,
              tabIndex: o ? 0 : -1
            })]
          })
        },
        $s = (0, R.withIntl)((e => {
          const {
            setBodyIsLocked: a
          } = (0, g.useBodyScrollable)("EventsDeck"), {
            title: t
          } = e, {
            track: s
          } = (0, u.useGtmTrack)(), [n, r] = (0, l.useState)(!1), i = (() => {
            const {
              data: e
            } = (0, g.useQuery)(wa.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), a = e?.tinaModulesList?.results, t = V().map(a, "id");
            return (0, ye.X)({
              ids: t
            })
          })(), [o, m] = (0, l.useState)([]), [f, p] = (0, l.useState)(null), [b, k] = (0, l.useState)(0), [v, _] = (0, l.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [h, x] = (0, l.useState)(!1), y = (0, l.createRef)(), [w, N] = (0, l.useState)(null), S = (0, l.createRef)(), C = (0, l.createRef)(), [T, E] = (0, l.useState)([]), [M, P] = (0, l.useState)(!0), [L, A] = (0, l.useState)(!1), [I, z] = (0, l.useState)(!1), [D, $] = (0, l.useState)([]), [B, R] = (0, l.useState)(404), [F, G] = (0, l.useState)(808), [H, U] = (0, l.useState)(672), [W, q] = (0, l.useState)(336), [K, X] = (0, l.useState)(0), [Y, Z] = (0, l.useState)(0), [Q, J] = (0, l.useState)(0), [ee, ae] = (0, l.useState)(0), [te, se] = (0, l.useState)(0), [ne, re] = (0, l.useState)(!1), ie = !!(0, g.usePrevious)(ne), [oe, ce] = (0, l.useState)(window.innerWidth), [de, le] = (0, l.useState)(0), [me, ge] = (0, l.useState)(0), [ue, be] = (0, l.useState)(0), [ke, ve] = (0, l.useState)(0), [_e, he] = (0, l.useState)(0), [xe, we] = (0, l.useState)(0), [Ne, Se] = (0, l.useState)(0), [Ce, Te] = (0, l.useState)(0), [Ee, Me] = (0, l.useState)(-1e3), [Pe, Le] = (0, l.useState)(0), [Ae, Ie] = (0, l.useState)(50), [ze, De] = (0, l.useState)(0), [$e, Be] = (0, l.useState)(!1), [Ve, Oe] = (0, l.useState)(768), [Re, Fe] = (0, l.useState)(!1), [Ge, He] = (0, l.useState)(!1), [Ue, We] = (0, l.useState)(!1), [qe, Ke] = (0, l.useState)(!1), [Xe, Ye] = (0, l.useState)(!1), [Ze, Qe] = (0, l.useState)(1e3), [Je, ea] = (0, l.useState)(1.2), [aa, ta] = (0, l.useState)(0), [sa, na] = (0, l.useState)(!1), [ra, ia] = (0, l.useState)(!1), [oa, ca] = (0, l.useState)(!0), [da, la] = (0, l.useState)(!1), [ma, ga] = (0, l.useState)(!1), [ua, fa] = (0, l.useState)(null), [pa, ba] = (0, l.useState)(100), [ka, va] = (0, l.useState)(!1), [_a, ha] = (0, l.useState)({}), [xa, ya] = (0, l.useState)(""), [Na, ja] = (0, l.useState)(0), [Sa, Ca] = (0, l.useState)(!1), [Ta, Ea] = (0, l.useState)(!1), [Ma, Pa] = (0, l.useState)(0), [La, Aa] = (0, l.useState)(0), [Ia, za] = (0, l.useState)(100), [Da, $a] = (0, l.useState)(!1), [Va, Oa] = (0, l.useState)(!1), [Ra, Fa] = (0, l.useState)(!1), [Ga, Ha] = (0, l.useState)(!1), [Ua, Wa] = (0, l.useState)("forward"), qa = () => oe * de + Ae, Ka = () => !1 === $e ? Je : 1, Xa = e => e === Ne - 1 || e === Ne + 1, Ya = () => {
            let e = -1 * xe;
            return e = -1 * xe - ke, e
          }, Za = (e, a = !0) => {
            if (!0 === $e) return 0;
            const t = e.itemNumber % 2 == 0,
              s = B * Je;
            if (!0 === t && 0 !== e.itemNumber) {
              const t = Ms(e?.element?.current, "top");
              let n = t - Q;
              return !1 === a && (n -= t), -1 * (.5 * s + n) + aa
            }
            return Q - .5 * s + aa
          }, Qa = (e, a, t = !0) => {
            let s = Ya();
            !1 === t && (s = 0);
            const n = oe * de,
              r = !1 === $e ? B * Ka() : n;
            return e.inModalMode && $e ? -1 === a ? qa() * (Ne - e.itemNumber) * -1 - e.styles.left : qa() * (e.itemNumber - Ne) - e.styles.left : -1 === a ? -1 * e.styles.left - r - Ae + s : n - e.styles.left + Ae + s
          }, Ja = (e, a, t) => {
            -1 === a && (A(!1), P(!0)), A(!1 === t && e >= a || !0 === t && e + 1 === a), P(e <= 0)
          }, et = (e, a = !1) => {
            if (ma || da) return;
            if (ga(!0), ne) return void((e = !1) => {
              if (Ne + 1 >= o.length) return;
              const a = T[Ne + 1]?.tina?.payload?.meta?.title ?? `card-${Ne+1}`;
              s({
                event: e ? "modal_swipe" : "modal_next",
                card_name: a,
                card_id: Ne + 1,
                position: Ne + 1,
                view_name: `${T[Ne+1].source_content_id}/${a}`,
                source_content_id: T[Ne + 1].source_content_id,
                source_content_name: T[Ne + 1].source_content_name
              }), Ja(Ne + 1, o.length, !0), $e ? $e && E(T.map((e => {
                e.itemNumber === Ne - 1 ? e.upNext = !1 : e.itemNumber === Ne + 2 ? e.upNext = !0 : e.itemNumber === Ne + 1 ? e.active = !0 : e.itemNumber === Ne && (e.upNext = !0, e.active = !1);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t -= qa();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              }))) : E(T.map((e => (e.itemNumber === Ne - 1 ? e.upNext = !1 : e.itemNumber === Ne + 2 ? e.upNext = !0 : e.itemNumber === Ne + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ya()}px, ${aa}px, 0) scale(1)`
              }) : e.itemNumber === Ne && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Qa(e,-1)}px, ${Za(e)}px, 0) scale(${Ka()})`
              }), e)))), Se(Ne + 1)
            })(a);
            const n = _e + 1;
            if (!(n > te))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_next",
                  element_placement: t?.toLowerCase() ?? ""
                }), Ja(n, te, !1), $e) {
                let e = n * W * -1;
                e < Ee && (e = Ee, A(!0), P(!1), he(te)), he(n), E(T.map((a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a))))
              } else {
                let e = xe - Y;
                he(n), e < Ee && (e = Ee, A(!0), P(!1), he(te)), we(e)
              }
          }, at = (e, a = !1) => {
            if (ma || da) return;
            if (ga(!0), !0 === ne) return void((e = !1) => {
              if (ma) return;
              if (Ne - 1 < 0) return;
              const a = T[Ne - 1]?.tina?.payload?.meta?.title ?? "card-" + (Ne - 1);
              s({
                event: e ? "modal_swipe" : "modal_previous",
                element_placement: t?.toLowerCase(),
                card_name: a,
                card_id: Ne - 1,
                position: Ne - 1,
                view_name: `${T[Ne-1].source_content_id}/${a}`,
                source_content_id: T[Ne - 1].source_content_id,
                source_content_name: T[Ne - 1].source_content_name
              }), Ja(Ne - 1, o.length, !0), $e || E(T.map((e => (e.itemNumber === Ne + 1 ? e.upNext = !1 : e.itemNumber === Ne - 2 ? e.upNext = !0 : e.itemNumber === Ne ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Qa(e,1)}px, ${Za(e)}px, 0) scale(${Ka()})`
              }) : e.itemNumber === Ne - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ya()}px, ${aa}px, 0) scale(1)`
              }), e)))), $e && E(T.map((e => {
                e.itemNumber === Ne + 1 ? e.upNext = !1 : e.itemNumber === Ne - 2 ? e.upNext = !0 : e.itemNumber === Ne ? (e.upNext = !0, e.active = !1) : e.itemNumber === Ne - 1 && (e.active = !0);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t += qa();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              }))), Se(Ne - 1)
            })(a);
            const n = _e - 1;
            if (!(n < 0))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_previous",
                  element_placement: t?.toLowerCase()
                }), Ja(n, te, !1), $e) {
                let e = n * W * -1;
                e > 0 && (e = 0, P(!0), A(!1), he(0)), he(n), E(T.map((a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a))))
              } else {
                let e = xe + Y;
                he(n), (e > 0 || 0 === e || -1 * e < F) && (e = 0, P(!0), A(!1), he(0)), we(e)
              }
          }, tt = e => {
            if (Sa || ne || $e) return;
            const a = Ps(e);
            ja(a.x)
          }, st = e => {
            if (Sa || 0 === Na || ne || $e) return;
            const a = Ps(e),
              t = a.x > Na ? 1 : -1;
            let s = Math.abs(Na - a.x) * t;
            (0 === _e && 1 === t || _e === te && -1 === t) && (s *= .35), Ea(!0), Pa(s)
          }, nt = e => {
            if (Sa || ne || $e) return;
            const a = Ps(e),
              t = a.x > Na ? 1 : -1,
              s = Math.abs(Na - a.x);
            ya(s > Ia ? t > 0 ? "prev" : "next" : ""), rt()
          }, rt = () => {
            Ca(!0), ja(0), Pa(0), Ea(!1)
          }, it = e => {
            Ta && (nt(e), Ea(!1))
          }, ot = (e, a, t = "") => e.map(((e, s) => {
            let n = s * W,
              r = s;
            !1 === $e && (r = Math.ceil(.5 * s) + 1, s > 0 && (n = 2 === r ? H : H + W * (r - 2)));
            const i = D[s];
            return i?.current && (i.current.scrollTop = 0), {
              ...e,
              mobileMode: $e,
              itemNumber: s,
              columnNumber: r,
              inModalMode: !1,
              upNext: !0,
              active: !1,
              openModalMode: dt,
              element: i,
              transitionStyle: a,
              styles: {
                left: n,
                transform: "" === t ? null : t,
                height: null,
                top: null
              },
              trapFocus: lt
            }
          })), ct = () => {
            const e = T[Ne]?.tina?.payload?.meta?.title ?? `card-${Ne}`;
            s({
              event: "modal_close",
              element_placement: t?.toLowerCase(),
              card_name: e,
              card_id: Ne,
              position: Ne,
              view_name: `${T[Ne].source_content_id}/${e}`,
              source_content_id: T[Ne].source_content_id,
              source_content_name: T[Ne].source_content_name
            });
            const a = T[Ne]?.element?.current;
            if ($e) {
              let e = Ne * W * -1;
              e < Ee && (e = Ee, A(!0), P(!1), he(te)), he(Ne), Ja(Ne, te, !1), E(ot(o, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else {
              E(ot(o, "cardClose"));
              const e = Math.ceil((T[Ne].columnNumber + 1) / K) - 1;
              he(e);
              let a = e * Y * -1;
              ze < me ? (a = 0, P(!0), A(!0), he(0)) : a < Ee ? (a = Ee, P(!1), A(!0), he(te)) : Ja(e, te, !1), we(a), Se(0)
            }
            S.current.style.transform = "translate(0px, 0px)", S.current.style.transition = "all var(--eventDeck-transitionCardClose)", na(!1), Ke(!1), re(!1), He(!1), Fe(!1), Ye(!1), setTimeout((() => {
              We(!0), a.focus()
            }), Ze)
          };
          (0, l.useEffect)((() => {
            !1 !== Ue && (We(!1), na(!1), w.style.zIndex = null, E(T.map((e => (e.transitionStyle = "", e)))))
          }), [Ue]);
          const dt = e => {
              setTimeout((() => {
                ha(e), va(!0)
              }), 1)
            },
            lt = e => {
              Ha(!0), Wa(e), setTimeout((() => {
                Ha(!1)
              }), 1e3)
            };
          (0, l.useEffect)((() => {
            Ra && (Fa(!1), T[Ne]?.element?.current?.focus())
          }), [Ra]), (0, l.useEffect)((() => {
            if (!ka) return;
            if (va(!1), ma) return;
            Se(Number(_a?.target?.dataset?.itemPosition)), He(!0), la(!0), oa && ca(!1);
            const e = T[_a?.target?.dataset?.itemPosition].source_content_id,
              a = T[_a?.target?.dataset?.itemPosition].source_content_name,
              n = T[_a?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
            s({
              event: "card_click",
              element_placement: t?.toLowerCase(),
              card_name: n ?? `card-${Ne}`,
              card_id: _a?.target?.dataset?.itemPosition,
              position: _a?.target?.dataset?.itemPosition,
              view_name: `${e}/${n}`,
              source_content_id: e,
              source_content_name: a
            })
          }), [ka]), (0, l.useEffect)((() => {
            if (!Ge || ne) return;
            He(!1);
            const e = (() => {
              const e = w?.getBoundingClientRect().top;
              return ta(-1 * (e - b)), -1 * (e - 140)
            })();
            $e && E(T.map((e => {
              const a = e.itemNumber > Ne + 3 || e.itemNumber < Ne - 3;
              return e.styles = {
                ...e.styles,
                display: a ? "none" : null,
                transition: a ? "none" : null
              }, e
            }))), w.style.zIndex = "var(--eventDeck-zIndexOverlay)", na(!0), S.current && (S.current.style.transition = "all var(--eventDeck-transitionCardOpen)", S.current.style.transform = `translate(${-1*ke}px, ${e}px)`), Ke(!0), setTimeout((() => {
              Fe(!0)
            }), 1)
          }), [Ge]);
          const mt = () => {
            E(T.map(((e, a) => {
              e.active = a === Ne, e.inModalMode = !0, e.transitionStyle = "cardOpen", $e && (e.upNext = Xa(e.itemNumber));
              const t = !$e;
              let s = 0;
              if ($e) {
                const e = Ce + 5 * b;
                s = window.innerHeight - e
              }
              return e.itemNumber < Ne ? e.styles = {
                ...e.styles,
                height: $e ? `${s}px` : null,
                transform: `translate3d(${Qa(e,-1,t)}px, ${aa}px, 0) scale(${Ka()})`
              } : e.itemNumber > Ne ? e.styles = {
                ...e.styles,
                height: $e ? `${s}px` : null,
                transform: `translate3d(${Qa(e,1,t)}px, ${aa}px, 0) scale(1)`
              } : e.itemNumber === Ne && (e.styles = $e ? {
                ...e.styles,
                height: `${s}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${aa}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${Ya()}px, ${aa}px, 0) scale(1)`
              }), e
            })))
          };
          (0, l.useEffect)((() => {
            !1 !== Re && !0 !== ne && (re(!0), Fe(!1), Ja(Ne, T.length, !0), S.current && (S.current.style.transition = "all var(--eventDeck-transitionCardOpen)", S.current.style.transform = `translate(${-1*ke}px, ${aa}px)`), mt(), $e ? (we(0), la(!1), ia(!0)) : Ye(!0))
          }), [Re]), (0, l.useEffect)((() => {
            ra && (ia(!1), E(T.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [ra]);
          const gt = (e = !1) => {
            E(T.map((a => {
              if (a.upNext = Xa(a.itemNumber), a.itemNumber !== Ne) {
                let e = Qa(a, 1);
                a.itemNumber < Ne && (e = Qa(a, -1)), a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, ${Za(a)}px, 0) scale(${Ka()})`
                }
              } else a.itemNumber === Ne && !$e && e && (a.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ya()}px, ${aa}px, 0) scale(1)`
              });
              return a
            })))
          };
          (0, l.useEffect)((() => {
            !1 !== Xe && !0 !== $e && (Ye(!1), setTimeout((() => {
              gt(), la(!1)
            }), 1))
          }), [Xe]), (0, l.useEffect)((() => {
            E(ot(o, ""))
          }), [H, W, o]), (0, l.useEffect)((() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            $a(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }), []), (0, l.useEffect)((() => {
            const e = ie !== ne;
            ne ? (e && a(!0), Da && Oa(!0)) : Ta || ne || (e && a(!1), Da && Va && Oa(!1))
          }), [ne, Ta]), (0, l.useEffect)((() => {
            if (!ma) return;
            clearTimeout(ua);
            const e = setTimeout((() => {
              ga(!1)
            }), pa);
            fa(e)
          }), [ma]), (0, l.useEffect)((() => {
            h && setTimeout((() => {
              x(!1)
            }), 3e3)
          }), [h]), (0, l.useEffect)((() => {
            x(!0), we(0), he(0);
            let e = Math.ceil(Math.ceil(ze / W) / K);
            $e && (e = T.length - 1), e < 0 && (e = 1), Ja(0, e, !1), ne && ct()
          }), [$e]), (0, l.useEffect)((() => {
            S.current && !ne && (S.current.style.transform = "")
          }), [S, $e, ne]), (0, l.useEffect)((() => {
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
            e.length > 10 && (e.length = 10), m(e)
          }), [i]), (0, l.useEffect)((() => {
            $(o.map((() => (0, l.createRef)())))
          }), [o]), (0, l.useEffect)((() => {
            const e = e => {
              const {
                key: a
              } = e;
              "ArrowLeft" === a ? at(0, !1) : "ArrowRight" === a ? et(0, !1) : "Escape" === a && ne && ct()
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [ma, da, ne, S]), (0, l.useEffect)((() => {
            if (S.current) {
              let e = 0;
              e = S?.current?.clientHeight, e += Ms(S?.current, "margin-top"), e += Ms(S?.current, "margin-bottom"), Te(e)
            }
          }), [S, C]), (0, l.useEffect)((() => {
            ne && (() => {
              const e = w?.getBoundingClientRect().top,
                a = -1 * (e - b);
              if (E(T.map((e => {
                  if (e.styles.transform) {
                    const t = e.styles.transform.split(","),
                      s = `${t[0]}, ${a}px,${t[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: s
                    }
                  }
                  return e
                }))), S.current) {
                const a = -1 * (e - b);
                S.current.style.transform = `translate(${-1*ke}px, ${a}px)`
              }
            })()
          }), [$e, ne, aa]), (0, l.useEffect)((() => {
            ne || (ze < de * oe && 0 === _e ? (we(0), A(!0), P(!0)) : xe < Ee ? (A(!0), P(!1), he(te), we(Ee)) : xe < 0 && (A(!1), he(te - 1)), ze > de * oe && L && A(!1))
          }), [Ee]), (0, l.useEffect)((() => {
            if (y.current) {
              N(y.current);
              const e = Ms(document.documentElement, "--root-font-size"),
                a = Ms(y.current, "--eventDeck-modalGutters") * e,
                t = Ms(y.current, "--eventDeck-collapsedMaxWidth");
              be(t);
              let s = oe - 2 * a;
              s > t && (s = t), ge(s), le(s / oe);
              const n = 2 * a + s;
              let r = 0;
              n < oe && (r = .5 * (oe - n)), ve(r);
              let i = Ms(y.current, "--eventDeck-modalBottomGutter");
              i *= e;
              const c = window.innerHeight - (Ce + i);
              J(.5 * s < c ? s / 4 : .5 * c);
              const d = Ms(y.current, "--eventDeck-mobileBreakpoint");
              Oe(d);
              let l = Ms(y.current, "--eventDeck-itemSize");
              l *= e, R(l);
              let m = Ms(y.current, "--eventDeck-modalGutterGap");
              m *= e, Ie(m);
              let g = Ms(y.current, "--eventDeck-insideMargin");
              g *= e;
              const u = !1 === $e ? 2 * l + g : l + g;
              G(u), U(u + g);
              const b = l + g;
              q(b);
              let v = Math.ceil(.5 * (o.length - 1)) * b + u;
              $e && (v = o.length * b), De(v), 0 !== ze && Me(-1 * ze + s);
              let _ = Math.ceil(Math.ceil(v / b) / K);
              ($e || ne) && (_ = T.length - 1), se(_);
              const h = Ms(y.current, "--eventDeck-itemScaleUpAmount");
              ea(h), Qe(Ms(y.current, "--eventDeck-cardCloseTransitionDuration")), k(Ms(y.current, "--eventDeck-itemImageTitleMargins") * e), null !== f && e !== f && (p(e), ne && gt()), null === f && p(e)
            }
          }), [y, o]), (0, l.useEffect)((() => {
            if (ne && !$e) {
              gt();
              const e = w?.getBoundingClientRect().top,
                a = -1 * (e - b);
              a !== aa && ta(a)
            }
          }), [v]), (0, l.useEffect)((() => {
            z(!(!M || !L || ne))
          }), [M, L]), (0, l.useEffect)((() => {
            const e = Es()((e => {
              ce(e), Be(e < Ve);
              const a = (1 - de) / 2;
              Le(e * a);
              const t = Math.floor(me / W);
              X(t);
              let s = t * W;
              s > ue && (s = ue), Z(s), ae(e - e * a);
              const n = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (n !== v && _(n), ne && n === v && !h) {
                const e = w?.getBoundingClientRect().top,
                  a = -1 * (e - b);
                a !== aa && ta(a)
              }
            }), 300);
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), window.addEventListener("scroll", (() => {
              ne && $e && e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [W, de, ne, $e]), (0, l.useEffect)((() => {
            !1 !== ne && !0 !== h && ($e ? mt() : gt(!0))
          }), [ee, Y, Ae, B, oe, Pe, Q, aa]), (0, l.useEffect)((() => {
            const e = () => {
              if (y.current && oa) {
                const e = y.current.getBoundingClientRect(),
                  a = .2 * window.innerHeight;
                window.innerHeight - e.top >= a && ca(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [y]);
          const ut = (0, l.useCallback)((() => {
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
          (0, l.useEffect)((() => (window.addEventListener("scroll", ut), () => {
            window.removeEventListener("scroll", ut)
          })), [ut, y]), (0, l.useEffect)((() => {
            "next" === xa ? (et(0, !0), ya("")) : "prev" === xa && (at(0, !0), ya(""))
          }), [xa]), (0, l.useEffect)((() => {
            y.current && y.current.addEventListener("mouseleave", (() => {
              Ta && rt()
            }))
          }), [y, Ta]), (0, l.useEffect)((() => (document.body.addEventListener("mouseleave", it), () => {
            document.body.removeEventListener("mouseleave", it)
          })), [Ta]), (0, l.useEffect)((() => {
            Sa && setTimeout((() => {
              Ca(!1), ja(0)
            }), pa)
          }), [Sa]), (0, l.useEffect)((() => {
            za($e ? 20 : 100)
          }), [$e]), (0, l.useEffect)((() => {
            ba(ne ? 500 : 100)
          }), [ne]);
          const ft = (0, j.useTinaComponents)(),
            pt = (0, l.useMemo)((() => ({
              ...ft,
              CardWithImageGallery: Ba,
              HTMLElement: O,
              ImageWithBadge: pe.A,
              Carousel: c.A,
              GroupOfItems: je(),
              UnorderedList: fe.A
            })), [ft]),
            bt = (0, l.useMemo)((() => T.map((e => (0, l.createElement)(Is, {
              ...e,
              refDeck: y,
              key: e?.id ?? e?.sync_hash,
              components: pt,
              prevPage: at,
              nextPage: et,
              loadCssRawValue: Ms,
              selectedItemNumber: Ne,
              carouselTitle: t,
              sharedDraggingDelta: La,
              setSharedDraggingDelta: Aa
            })))), [T, y, pt, at, et, Ne]);
          return !bt?.length || bt.length <= 0 ? null : (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b3206f796ddd61f3b6d1974ea73a4f22",
              "data-modal-mode": qe,
              "aria-hidden": "true"
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e623ea950c02afbb9d28949ca4701ca4",
              "data-modal-mode": ne,
              "data-faded": oa,
              ref: y,
              onTouchStart: tt,
              onTouchMove: st,
              onTouchEnd: nt,
              onMouseDown: tt,
              onMouseMove: st,
              onMouseUp: nt,
              tabIndex: -1,
              role: "presentation",
              children: [(0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b8d0a147dd4f1835ba5495bac02f4c11",
                "aria-hidden": "true"
              }), (0, d.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a758545d118b90def20e860fe541c26e",
                "data-modal-mode": ne,
                ref: S,
                "data-animating": sa,
                children: [(0, d.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9be12152c36226103d53925a82ba66452",
                  children: t
                }), (0, d.jsx)(Ds, {
                  prevPage: at,
                  prevBtnDisabled: M,
                  nextPage: et,
                  nextBtnDisabled: L,
                  selectedItemNumber: Ne,
                  itemsData: o,
                  closeModalMode: ct,
                  inModalMode: ne,
                  controlsHidden: I,
                  focusTrapControl: Ga,
                  setTriggerFocusCard: Fa,
                  focusTrapDirection: Ua
                }), (0, d.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c4f4d692febb9861a621596f22e32d93",
                  id: "eventsDeck-content",
                  role: "region",
                  "aria-live": "polite",
                  children: `${Ne+1}/${o.length} ${T[Ne]?.tina?.payload?.meta?.title}`
                })]
              }), (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f369e1390b3aa251df43bea9c55634f2",
                "data-modal-mode": ne,
                "data-is-dragging": Ta,
                style: {
                  transform: `translate3d(${xe+Ma}px, 0, 0)`,
                  width: `${ze}px`
                },
                ref: C,
                children: bt
              })]
            })]
          })
        }), ea);
      var Bs = t(70636),
        Vs = t.n(Bs),
        Os = t(20206),
        Rs = t.n(Os),
        Fs = t(5162),
        Gs = t.n(Fs),
        Hs = t(19570),
        Us = t.n(Hs),
        Ws = t(66603),
        qs = t(20920),
        Ks = t(61324),
        Xs = t(96911),
        Ys = t(48705),
        Zs = t(13924),
        Qs = t(86417),
        Js = t(32464),
        en = t(65057),
        an = t(34112),
        tn = t(25268),
        sn = t(17054);
      const nn = {
          CalloutSection: o.A,
          Card: ba,
          CardWithImageGallery: Ba,
          ConditionalBlock: k,
          CommunityChallenges: Gs(),
          CoverCard: Ca,
          Cta: v.A,
          DiscoveryCallout: qs.A,
          EventsDeck: $s,
          PageTemplate: Vs(),
          ExpandingPlatformButton: _.A,
          TextCard: Oa,
          Deck: Ss,
          Grid: w,
          Hero: $,
          HighlightsItem: Cs.HighlightsItem,
          HTMLElement: O,
          NewsletterSubscription: re,
          OrderedList: ie.A,
          ParallaxInnerLayer: ce,
          ParallaxOuterLayer: le,
          ParallaxWrapper: ue,
          UnorderedList: fe.A,
          ImageWithBadge: pe.A,
          Carousel: c.A,
          GroupOfItems: je(),
          Rating: ve.A,
          gen9: sn,
          TinaModuleFetchNRender: ye.A,
          TwitchDrops: Us(),
          PromoModule: ke,
          RockstarVideoPlayer: i(),
          Engagement: Rs()
        },
        rn = {
          CalloutSection: o.A,
          Card: ba,
          CardWithImageGallery: Ba,
          ConditionalBlock: k,
          CoverCard: Ca,
          Carousel: c.A,
          ExpandingPlatformButton: _.A,
          Hero: $,
          Grid: w,
          TextCard: Oa,
          Deck: Ss,
          GroupOfItems: je(),
          ParallaxInnerLayer: ce,
          ParallaxOuterLayer: le,
          ParallaxWrapper: ue,
          PromoModule: ke,
          Engagement: Rs(),
          NewsletterSubscription: re,
          gen9: {
            BuyNow: Ws.A,
            Disclaimer: Ks.A,
            FAQ: Xs.Ay,
            Guide: Ys.A,
            GuideGroup: Zs.A,
            GuideIntro: Qs.A,
            GuideSection: Js.A,
            Hero: $,
            ImageTextGroupGroup: en.A,
            LinkoutSection: an.A,
            TinaWrapper: tn.A,
            UserVote: () => null
          },
          HTMLElement: O,
          OrderedList: ie.A,
          UnorderedList: fe.A,
          ImageWithBadge: pe.A,
          Rating: ve.A,
          TinaModuleFetchNRender: ye.A,
          UserVote: xe
        }
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    45440: (e, a, t) => {
      "use strict";
      t.d(a, {
        OD: () => i,
        lv: () => o,
        wC: () => n,
        PE: () => x,
        rB: () => d,
        tC: () => b,
        yh: () => h,
        Ap: () => g,
        Xs: () => y,
        kx: () => w,
        rJ: () => j,
        pT: () => k,
        lV: () => N,
        PA: () => s,
        My: () => u,
        _e: () => v
      }), t(42295), t(16188);
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
        n = ({
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
      class i {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, a, t, s, n = null, r = null) {
          this.name = e, this.friendlyName = a, this.id = t, this.onlineService = s, this.aliasOnlineService = n, this.alias = r
        }
      }
      const o = Object.freeze({
          pc: new i("pc", "PC Legacy", 8, "sc"),
          ps: new i("ps", "PlayStation", 3, "np", "ps"),
          ps3: new i("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new i("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new i("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new i("xbox", "Xbox", 4, "xbl"),
          xbox360: new i("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new i("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new i("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new i("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new i("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new i("applestore", "App Store", 102, "applestore"),
          googleplay: new i("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new i("app_store", "App Store", 102, "applestore"),
          googlePlay: new i("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new i("pcalt", "PC Enhanced", 22, "sc")
        }),
        c = Object.freeze(Object.values(o));

      function d(e) {
        if (!e) return;
        if (e instanceof i) return e;
        const a = e.toString().toLowerCase();
        return c.find((e => a === e.name || a === e.id.toString() || a === e.friendlyName.toLowerCase() || a === e.onlineService?.toLowerCase() || a === e.aliasOnlineService?.toLowerCase() || a === e.alias?.toLowerCase()))
      }
      var l = t(6306),
        m = t(12914);
      const g = e => {
          const a = document.cookie.split("; "),
            t = `${e}=`,
            s = a.find((e => e.startsWith(t))),
            n = s?.substring(t.length, s.length);
          return n
        },
        u = (e, a) => {
          e && void 0 !== a && (0, l.canStoreCookie)(e) && g(e) !== a && (document.cookie = `${e}=${a}; domain=${(0,m.F)()}; path=/;`)
        };
      var f = t(81788),
        p = t(45547);
      const b = async ({
        service: e,
        returnUrl: a,
        pingBearer: t
      }) => {
        const [{
          iso: s
        }] = (0, f.getLocale)(), {
          authHost: n,
          clientId: r
        } = (0, p.A)(), i = await t(), o = new URL(`tpa/${e}/link`, `https://${n}.rockstargames.com`);
        return o.searchParams.append("cid", r), o.searchParams.append("lang", s), o.searchParams.append("returnUrl", a ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && o.searchParams.append("accessToken", i.bearerToken), o
      }, k = e => e.keys().forEach(e), v = e => e.replace(/(<([^>]+)>)/gi, ""), _ = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], h = (e = !0) => _.filter((a => a.key === (e ? "prod" : "dev")))[0]?.path ?? null, x = e => {
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
      }, y = () => [o.xbox360.name, o.xboxone.name, o.ps3.name, o.ps4.name, o.pc.name], w = () => [o.xboxsx.name, o.ps5.name, o.pcalt.name], N = e => w().includes(e), j = e => {
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
    46209: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(42295),
        n = t(62229),
        r = t(61128),
        i = t(95966),
        o = t(2918),
        c = t(50828),
        d = t(29625);
      const l = ({
          className: e
        }) => (0, s.jsxs)("svg", {
          className: e,
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("path", {
            d: "M3.33203 8.5H12.6654",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, s.jsx)("path", {
            d: "M8 3.83331L12.6667 8.49998L8 13.1666",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }),
        m = {
          actionBlock: "rockstargames-sites-gta-gen9b1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-sites-gta-gen9f713e165e153987c3855d93dc1614f4d",
          active: "rockstargames-sites-gta-gen9ec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutContainer: "rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539",
          calloutHeader: "rockstargames-sites-gta-gen9fb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutHeaderMargins: "rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296",
          calloutHeaders: "rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea",
          calloutLink: "rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-sites-gta-gen9db31e98c20de15e8d5983285bd6ec92e",
          calloutSection: "rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f",
          calloutSubheader: "rockstargames-sites-gta-gen9f5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8",
          downvote: "rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b",
          pillBtn: "rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-sites-gta-gen9dece7a2abb867cf09add3f7429e7383b",
          upvote: "rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93",
          voteButton: "rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0"
        },
        g = ({
          foreign_id: e,
          foreign_type: a
        }) => {
          const {
            track: t
          } = (0, o.useGtmTrack)(), {
            refetch: r
          } = (0, i.useQuery)(c.UserGetVote, {
            skip: !0
          }), [d] = (0, i.useMutation)(c.UserCastVote), [l, g] = (0, n.useState)(null), u = (0, n.useCallback)((s => {
            (async () => {
              if (s === l && null !== l) g(null);
              else {
                g(s), t({
                  event: "cta_" + (s ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const n = {
                  foreignId: e,
                  foreignType: a,
                  vote: s
                };
                await d({
                  variables: n
                })
              }
            })()
          }), [e, a, l]);
          return (0, n.useEffect)((() => {
            e && a && (async () => {
              const t = await r({
                foreignId: e,
                foreignType: a
              });
              g(t?.data?.userGetVote?.vote ?? null)
            })()
          }), [e, a]), (0, s.jsxs)("div", {
            className: m.calloutVoteForm,
            children: [(0, s.jsx)("button", {
              "aria-label": "upvote",
              className: [m.upvote, m.voteButton, l ? m.active : ""].join(" "),
              name: "upvote",
              onClick: () => u(!0),
              type: "button"
            }), (0, s.jsx)("button", {
              "aria-label": "downvote",
              className: [m.downvote, m.voteButton, !1 === l ? m.active : ""].join(" "),
              name: "downvote",
              onClick: () => u(!1),
              type: "button"
            })]
          })
        },
        u = ({
          action_text: e,
          link: a,
          trackingData: t
        }) => {
          const {
            track: n
          } = (0, o.useGtmTrack)();
          return (0, s.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, s.jsxs)("button", {
              className: m.calloutLink,
              type: "button",
              onClick: t ? () => n({
                ...t
              }) : () => {},
              children: [e, (0, s.jsx)(l, {
                className: m.calloutLinkIcon
              })]
            })
          })
        },
        f = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: n
        }) => {
          const {
            track: r
          } = (0, o.useGtmTrack)();
          return (0, s.jsxs)("div", {
            className: m.actionFooter,
            children: [e, a && " ", a && (0, s.jsx)("a", {
              href: t ?? "",
              onClick: () => r({
                ...n
              }),
              children: a
            })]
          })
        },
        p = (0, i.withTranslations)((({
          header: e,
          subheader: a,
          type: t,
          action_text: c,
          link: l,
          foreign_id: p = document.location.pathname,
          foreign_type: b = "url",
          className: k = "",
          actionFooterHelperText: v,
          actionFooterLinkText: _,
          actionFooterLink: h,
          trackingData: x = {},
          actionFooterLinkTrackingData: y = {},
          t: w,
          ...N
        }) => {
          const {
            loggedIn: j
          } = (0, o.useRockstarUser)(), {
            track: S
          } = (0, o.useGtmTrack)(), C = document.location.pathname, {
            signInUrl: T
          } = (0, i.useScAuthLinks)(C), {
            ref: E,
            inView: M
          } = (0, r.useInView)({
            threshold: .6
          }), [P, L] = (0, n.useState)(!1);
          let A;
          if ((0, n.useEffect)((() => {
              M && !P && (S({
                event: "page_section_impression",
                element_placement: `callout section - ${N?.sectionName??N?._memoq?.header}`
              }), L(!0))
            }), [M]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!j) {
                A = (0, s.jsx)(d.A, {
                  to: T,
                  className: m.calloutButton,
                  onClick: x ? () => S({
                    ...x
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              A = (0, s.jsx)(g, {
                foreign_id: p,
                foreign_type: b
              });
              break;
            case "button":
              c && l && (A = (0, s.jsx)(d.A, {
                to: l,
                className: m.calloutButton,
                onClick: x ? () => S({
                  ...x
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && l && (A = (0, s.jsx)(u, {
                action_text: c,
                link: l,
                trackingData: x
              }));
              break;
            default:
              A = null
          }
          return (0, s.jsx)("div", {
            className: `${m.calloutContainer} ${k||""}`,
            ref: E,
            children: (0, s.jsxs)("div", {
              className: m.calloutSection,
              children: [(0, s.jsxs)("div", {
                className: [m.calloutHeaders, A ? m.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, s.jsx)("h2", {
                  className: m.calloutHeader,
                  children: w(e)
                }), a && (0, s.jsx)("h3", {
                  className: m.calloutSubheader,
                  children: w(a)
                })]
              }), (0, s.jsxs)("div", {
                className: m.actionBlock,
                children: [A, v && (0, s.jsx)(f, {
                  helperText: v,
                  linkText: _,
                  link: h,
                  trackingData: y
                })]
              })]
            })
          })
        }))
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
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
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
      }, n.resolve = r, e.exports = n, n.id = 53781
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    57386: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(42295),
        n = t(62229),
        r = t(47942),
        i = t(34100);
      class o extends n.Component {
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
          return null !== this.state.error.code ? (0, s.jsx)(i.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = (e, a = null) => function(t) {
        return (0, s.jsx)(o, {
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
        return i.forEach((function(a) {
          var s = n(e, a);
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
      }, n.resolve = r, e.exports = n, n.id = 65287
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    67050: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(42295),
        n = t(62229),
        r = t(9623),
        i = t(95966);
      const o = (0, i.withTranslations)((({
        t: e
      }) => {
        const [a] = (0, n.useState)(""), t = (0, r.useNavigate)(), o = (0, i.useMutateState)();
        return (0, s.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-gta-gen9c9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), o({
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
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
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
    79704: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(42295);
      const n = {
          gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b"
        },
        r = ({
          style: e,
          className: a = "",
          type: t = ""
        }) => (0, s.jsx)("div", {
          style: e,
          className: [n.hr, n[t], a].join(" ")
        })
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    79867: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = n.findIndex((a => Object.entries(a.sites).findIndex((([a, s]) => s === t && (e = {
            site: a,
            subDomain: s
          }, !0))) >= 0)), r = n[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
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
    84927: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(42295),
        n = t(4407),
        r = t(55322);
      const i = {
          badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c"
        },
        o = ({
          wrapper: e,
          children: a,
          role: t,
          splitter: s
        }) => s || t ? e(a) : a,
        c = ({
          badge: e,
          badgeType: a,
          role: c,
          splitter: d
        }) => {
          const l = [];
          return d ? e.split(d).map(((e, a) => l.push(e))) : l.push(e), (0, s.jsxs)(o, {
            splitter: d,
            role: c,
            wrapper: e => (0, s.jsx)("div", {
              className: `${i.badge} ${a?i[a]:""} `,
              children: e
            }),
            children: [(0, s.jsx)(s.Fragment, {
              children: c && (0, s.jsx)(n.A, {
                image: {
                  alt: c,
                  desktop: t(65287)(`./${c}.png`)
                }
              })
            }), (0, s.jsx)(r.A, {
              className: `${d||c?"":i.badge} ${a?i[a]:""}`,
              min: 8,
              max: 1e3,
              mode: d || c ? "single" : "multi",
              children: l[0]
            }), (0, s.jsx)(s.Fragment, {
              children: l.shift() && d && l.length >= 1 && (0, s.jsx)(r.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: l.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
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
      }, n.resolve = r, e.exports = n, n.id = 86751
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
    94293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    95088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    95386: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        RpCategory: () => l,
        rpCategoryTestIds: () => d
      });
      var s = t(42295),
        n = t(62229),
        r = t(75526);
      var i = t(4572),
        o = t.n(i);
      const c = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        d = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        l = (0, n.forwardRef)((function({
          rank: e,
          size: a = "large",
          className: t,
          alt: n,
          testId: i,
          ...l
        }, m) {
          const g = c(e),
            u = (0, r.v6)(l, {
              className: o()("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", t),
              "data-testid": i
            });
          return (0, s.jsxs)("div", {
            "data-size": a,
            ref: m,
            ...u,
            children: [(0, s.jsx)("svg", {
              role: "svg",
              "aria-label": n,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": c(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: g
              })
            }), (0, s.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d9ea5cdf174033003a8670f31ae66a59",
              "data-testid": d.RANK_VALUE,
              children: e
            })]
          })
        }))
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
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
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
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96117: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(42295),
        n = t(14200);
      const r = ({
        disableLink: e,
        className: a,
        "data-testid": t
      }) => {
        const r = e ? "span" : n.A;
        return (0, s.jsx)(r, {
          className: [e ? "rockstargames-sites-gta-gen9b28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-gta-gen9a3d920a1139575706b914bc3a0100970", a || ""].join(" "),
          "data-testid": t,
          alt: "Rockstar Games Home",
          ...!e && {
            to: "/"
          }
        })
      }
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    96566: (e, a, t) => {
      "use strict";
      t.d(a, {
        _y: () => _,
        _l: () => c._,
        n_: () => x,
        IT: () => h
      });
      var s = t(42295),
        n = t(62229),
        r = t(19757),
        i = t(21643),
        o = t(80701),
        c = t(63886),
        d = t(46277),
        l = t(16188),
        m = t.n(l),
        g = t(56088);
      const u = (e, a) => {
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
              loading: i,
              error: o,
              ...c
            } = (0, d.IT)(e, s);
          return (0, n.useEffect)((() => {
            if (r && s.setTitleDataPath) {
              const e = m().get(r, s.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, n.useEffect)((() => (s.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: i
          }), () => {
            s.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [i]), (0, n.useEffect)((() => {
            if (s.autoSetError && o) throw new Error(String(o))
          }), [o]), {
            loading: i,
            error: o,
            data: r,
            ...c
          }
        },
        f = (0, n.createContext)((() => ({
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
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new i.R(b))
        }],
        v = (0, n.createContext)((() => k)),
        _ = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, s.jsx)(v.Provider, {
          value: o.n,
          children: (0, s.jsx)(f.Provider, {
            value: u,
            children: e
          })
        })),
        h = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, a) => (0, n.useContext)(f)(e, a)),
        x = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, n.useContext)(v)(e))
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