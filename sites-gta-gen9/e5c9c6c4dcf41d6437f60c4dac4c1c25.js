! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8c9bed9b-a696-4296-88be-b344caa1ba32", e._sentryDebugIdIdentifier = "sentry-dbid-8c9bed9b-a696-4296-88be-b344caa1ba32")
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
  [352, 5240, 2860], {
    31580: (e, t, a) => {
      var s = a(36056).Symbol;
      e.exports = s
    },
    95992: (e, t, a) => {
      var s = a(31580),
        n = a(78584),
        i = a(49176),
        r = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : r && r in Object(e) ? n(e) : i(e)
      }
    },
    96096: (e, t, a) => {
      var s = a(57520),
        n = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, s(e) + 1).replace(n, "") : e
      }
    },
    81044: (e, t, a) => {
      var s = "object" == typeof a.g && a.g && a.g.Object === Object && a.g;
      e.exports = s
    },
    78584: (e, t, a) => {
      var s = a(31580),
        n = Object.prototype,
        i = n.hasOwnProperty,
        r = n.toString,
        o = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        var t = i.call(e, o),
          a = e[o];
        try {
          e[o] = void 0;
          var s = !0
        } catch (e) {}
        var n = r.call(e);
        return s && (t ? e[o] = a : delete e[o]), n
      }
    },
    49176: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    36056: (e, t, a) => {
      var s = a(81044),
        n = "object" == typeof self && self && self.Object === Object && self,
        i = s || n || Function("return this")();
      e.exports = i
    },
    57520: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var a = e.length; a-- && t.test(e.charAt(a)););
        return a
      }
    },
    69760: (e, t, a) => {
      var s = a(89048),
        n = a(12721),
        i = a(80088),
        r = Math.max,
        o = Math.min;
      e.exports = function(e, t, a) {
        var c, l, d, m, u, g, f = 0,
          p = !1,
          b = !1,
          v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(t) {
          var a = c,
            s = l;
          return c = l = void 0, f = t, m = e.apply(s, a)
        }

        function k(e) {
          var a = e - g;
          return void 0 === g || a >= t || a < 0 || b && e - f >= d
        }

        function x() {
          var e = n();
          if (k(e)) return y(e);
          u = setTimeout(x, function(e) {
            var a = t - (e - g);
            return b ? o(a, d - (e - f)) : a
          }(e))
        }

        function y(e) {
          return u = void 0, v && c ? h(e) : (c = l = void 0, m)
        }

        function _() {
          var e = n(),
            a = k(e);
          if (c = arguments, l = this, g = e, a) {
            if (void 0 === u) return function(e) {
              return f = e, u = setTimeout(x, t), p ? h(e) : m
            }(g);
            if (b) return clearTimeout(u), u = setTimeout(x, t), h(g)
          }
          return void 0 === u && (u = setTimeout(x, t)), m
        }
        return t = i(t) || 0, s(a) && (p = !!a.leading, d = (b = "maxWait" in a) ? r(i(a.maxWait) || 0, t) : d, v = "trailing" in a ? !!a.trailing : v), _.cancel = function() {
          void 0 !== u && clearTimeout(u), f = 0, c = g = l = u = void 0
        }, _.flush = function() {
          return void 0 === u ? m : y(n())
        }, _
      }
    },
    89048: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    72316: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    99464: (e, t, a) => {
      var s = a(95992),
        n = a(72316);
      e.exports = function(e) {
        return "symbol" == typeof e || n(e) && "[object Symbol]" == s(e)
      }
    },
    12721: (e, t, a) => {
      var s = a(36056);
      e.exports = function() {
        return s.Date.now()
      }
    },
    80088: (e, t, a) => {
      var s = a(96096),
        n = a(89048),
        i = a(99464),
        r = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (n(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = n(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = s(e);
        var a = o.test(e);
        return a || c.test(e) ? l(e.slice(2), a ? 2 : 8) : r.test(e) ? NaN : +e
      }
    },
    99576: (e, t, a) => {
      "use strict";
      var s = a(51664),
        n = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var s, i = {},
          l = null,
          d = null;
        for (s in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) r.call(t, s) && !c.hasOwnProperty(s) && (i[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === i[s] && (i[s] = t[s]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: d,
          props: i,
          _owner: o.current
        }
      }
      t.Fragment = i, t.jsx = l, t.jsxs = l
    },
    95240: (e, t, a) => {
      "use strict";
      e.exports = a(99576)
    },
    98e3: (e, t, a) => {
      "use strict";
      a.d(t, {
        j: () => p,
        i: () => f
      });
      var s = a(51664),
        n = a(94072),
        i = a(49696),
        r = a(1740),
        o = a(42836),
        c = a(57013);
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
          } = (0, o.useGtmTrack)(), E = null !== h && (h?.length || 0) > 1 && ("flag_bg" === k || "fob" === N?.size), [M, P] = (0, c.useSearchParams)(), [L, I] = (0, s.useState)(!1), [$, O] = (0, s.useState)(!1), [D, B] = (0, s.useState)(), H = () => {
            const e = w > -1 ? w - 1 : 0;
            T(e), O(e <= 0), I(e >= (h?.length || 0) - 1), C({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: w
            })
          }, z = () => {
            const e = w > -1 ? w + 1 : 0;
            T(e), O(e <= 0), I(e >= (h?.length || 0) - 1), C({
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
                t === e && (T(a), O(a <= 0), I(a >= (h?.length || 0) - 1))
              }))
            }
          }), [h, w]);
          const [G] = (0, s.useState)({
            y: j,
            x: S,
            top: 0,
            left: 0,
            width: b,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: E ? "0" : ""
          }), V = {
            opacity: 1
          }, F = (0, s.useRef)(null), A = {
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
              x: A,
              y: A,
              top: A,
              left: A,
              width: A,
              height: A,
              border: A,
              background: {
                delay: .3
              }
            }
          }), [q, U] = (0, s.useState)({
            initial: G,
            shown: W
          });
          (0, s.useEffect)((() => {
            U({
              initial: G,
              shown: W
            })
          }), [G, W]), (0, s.useEffect)((() => {
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
                      return D?.queried ? t = D.element : (t = Q(e, 2), B({
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
                animate: V,
                transition: A,
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
                    onClick: z,
                    disabled: L,
                    onKeyDown: Y,
                    onKeyUp: Y
                  })]
                }), Z]
              }), (0, l.jsx)(i.motion.div, {
                className: "rockstargames-sites-gta-gen9fab99cc2e2ca2e2a2158f9d41e764558",
                ref: F,
                initial: "initial",
                animate: "shown",
                variants: q,
                transition: A,
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
        c: () => c
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
        o = e => {
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
        c = e => {
          let {
            altText: t = "",
            text: a,
            onClick: s,
            btnColor: c = "#fff",
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
              "--hvr-color": c ?? l,
              "--hvr-bg-color": l ?? c,
              "--hvr-border-color": c ?? l
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
            return (0, i.jsx)(o, {
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
        o = a(31248),
        c = a(1740),
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
          const s = (0, c.useGetCdnSource)(a?.mobile?.full_src ?? null),
            n = (0, c.useGetCdnSource)(a?.desktop?.full_src ?? s);
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
            description: o = null,
            images: c,
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
                  images: c?.background
                }), (0, f.jsx)(p, {
                  className: u.foregroundImage,
                  images: c?.foreground
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
                        __html: o
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
            track: c
          } = (0, r.useGtmTrack)(), {
            ref: m,
            inView: g
          } = (0, o.useInView)({
            threshold: .6
          }), [p, h] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            g && !p && (c({
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
                c({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                c({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                c({
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
          style: o = {}
        } = e;
        const c = a ?? t?.text ?? null,
          l = i ? `<h5>${i}</h5>${c}` : c;
        return c ? (0, n.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9fafe66500f74b5fda33cb7b70746a014", r),
          dangerouslySetInnerHTML: {
            __html: l
          },
          style: o
        }) : null
      }
    },
    41136: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => o
      });
      var s = a(51664),
        n = a(9860),
        i = a(31252);
      var r = a(95240);
      const o = (0, n.withSimpleErrorBoundary)((e => {
        let {
          buttonTxt: t,
          description: a,
          disclaimer: n,
          faqList: o = [],
          initialLength: c = 6,
          addedLength: l = 6,
          title: d,
          tinaModulesInfo: m
        } = e;
        const [u, g] = (0, s.useState)(c);
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
              children: o.length ? o.slice(0, u).map(((e, t) => {
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
            }), o.length > u ? (0, r.jsx)(i.c, {
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
        o = a(45652),
        c = a(42836);
      var l = a(95240);
      const d = e => {
          let {
            guide: t,
            parentTitle: a,
            index: s
          } = e;
          const {
            track: n
          } = (0, c.useGtmTrack)();
          let d = {
            hero: {}
          };
          i().cloneDeepWith(t, ((e, t) => {
            "images" === t && (d = e)
          }));
          const {
            src: m
          } = (0, o.useImageParser)(d?.thumb ?? {});
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
          const o = i().map(t, "guide_id"),
            c = (0, r.useTinaModuleFetchByIds)({
              ids: o
            }),
            m = a?.[0]?.title ?? n,
            [u, g] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = c?.map(((e, t) => (0, l.jsx)(d, {
              guide: e,
              parentTitle: m,
              index: t
            }, e.id)));
            g(e)
          }), [c]), (0, l.jsx)(r.Gen9CoreCarousel, {
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
      const o = () => {
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
        c = e => {
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
            children: [a ? (0, r.jsx)(c, {
              hero: a
            }) : "", (0, r.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b06267934a8fc8ac84e510f131df16ae",
              children: [(0, r.jsx)(o, {}), (0, r.jsx)("h1", {
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
        o = a(6300),
        c = a(9860),
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
          } = (0, l.useGtmTrack)(), [o, g] = (0, s.useState)(n === i), {
            state: f
          } = (0, d.KM)(), {
            activeSection: p
          } = f;
          return (0, s.useEffect)((() => g(i !== p ? p === n : i === n)), [p]), (0, u.jsx)(c.A, {
            to: t,
            className: o ? m.activeSection : "",
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
            }), (0, u.jsx)(o.motion.nav, {
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
                  children: [(0, u.jsx)(c.A, {
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
        c: () => o
      });
      var s = a(51664),
        n = a(31248),
        i = a(75416);
      var r = a(95240);
      const o = e => {
        let {
          style: t,
          children: a,
          __anchor: o = null
        } = e;
        const {
          announcePresence: c
        } = (0, i.y_)(), {
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
        }), [d]), (0, r.jsx)("span", {
          style: t,
          className: "rockstargames-sites-gta-gen9e46af541dffc51dc338509484cffa659",
          name: o,
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
        o = a(31248),
        c = a(15388),
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
        } = (0, o.useInView)({
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
            }), (0, m.jsx)(c.c, {
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
        c: () => o
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
      const o = e => {
        let {
          bg: t,
          image_text_groups: a = [],
          style: o = {},
          className: c = ""
        } = e;
        const l = (0, s.useGetCdnSource)(t?.image?.mobile?.full_src ?? null),
          d = (0, s.useGetCdnSource)(t?.image?.desktop?.full_src ?? null) ?? l;
        return a.length ? (0, r.jsxs)("div", {
          className: (0, s.classList)(i.imageTextGroupGroup, c),
          style: {
            ...o
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
        c: () => o
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
      const o = e => {
        let {
          text: t,
          cta: o,
          to: c,
          className: l = "",
          style: d = {}
        } = e;
        return (0, r.jsxs)(s.A, {
          className: (0, n.classList)(i.linkoutSection, l),
          to: c,
          style: d,
          children: [t && (0, r.jsx)("div", {
            className: i.text,
            children: t
          }), o && (0, r.jsxs)("div", {
            className: i.cta,
            children: [o, " ", (0, r.jsx)("img", {
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
        const [r, o] = (0, s.useState)(i);
        return (0, s.useEffect)((() => {
          i && o(i)
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
        ClaimCountdown: () => c,
        Disclaimer: () => l.c,
        FAQ: () => d.c,
        Guide: () => m.c,
        GuideGroup: () => u.c,
        GuideIntro: () => g.c,
        GuideNavDesktop: () => f.c,
        GuideSection: () => p.c,
        Hero: () => N,
        ImageTextGroup: () => S.c,
        ImageTextGroupGroup: () => j.c,
        LinkoutSection: () => w.c,
        Logo: () => C,
        SectionTitle: () => E,
        TinaWrapper: () => M.c,
        VideoPlayerWrapper: () => P.c
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
        o = a(51664);
      const c = e => {
        let {
          left: t,
          right: a
        } = e;
        const [s, i] = (0, o.useState)(""), [r, c] = (0, o.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9b868510520ca3ebc97d9ce2ea9d2edf2",
          children: [(0, n.jsxs)("h2", {
            "aria-hidden": r,
            onMouseOver: () => {
              c(!0), i(`${t} ${a}`)
            },
            onMouseOut: () => {
              c(!1), i("")
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
      var l = a(71584),
        d = a(41136),
        m = a(23292),
        u = a(22904),
        g = a(72256),
        f = a(64552),
        p = a(25992),
        b = a(9860),
        v = a(6300),
        h = a(1740),
        k = a(15388);
      const x = {
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
        y = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const i = (0, h.useGetCdnSource)(a ?? null),
            r = (0, h.useGetCdnSource)(s ?? i);
          return (0, n.jsx)("div", {
            className: x.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, n.jsx)("h5", {
              children: t
            })
          })
        },
        _ = e => {
          let {
            title: t = "Membership Rewards",
            shards: a
          } = e;
          const [s, i] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            a && i(a.map((e => {
              if (!e?.shardImg) return;
              const {
                title: t,
                shardImg: a
              } = e, {
                mobile: s,
                desktop: i
              } = a;
              return (0, n.jsx)(y, {
                title: t,
                mobileImg: s?.full_src,
                desktopImg: i?.full_src
              }, t)
            })))
          }), [a]), s ? (0, n.jsx)("div", {
            className: x.shardsCarousel,
            children: (0, n.jsx)(b.Gen9CoreCarousel, {
              title: t,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        N = e => {
          let {
            brands: t = [],
            backgroundImg: a,
            layeredImg: i,
            ctas: r = [],
            expandingButtonLabel: o = "Subscribe",
            platformsAndLinks: c = [],
            description: l,
            title: d,
            legalText: m,
            shardsSection: u = {},
            className: g
          } = e;
          const f = (0, h.useGetCdnSource)(a?.mobile?.full_src ?? null),
            p = (0, h.useGetCdnSource)(a?.desktop?.full_src ?? f),
            y = (0, h.useGetCdnSource)(i?.mobile?.full_src ?? null),
            N = (0, h.useGetCdnSource)(i?.desktop?.full_src ?? y),
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
          return (0, n.jsxs)(v.motion.div, {
            className: (0, h.classList)(x.hero, g),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${N})`,
              "--layered-image-mobile": `url(${y})`
            },
            initial: "hidden",
            animate: "visible",
            variants: S,
            children: [(0, n.jsxs)("div", {
              className: x.images,
              children: [p && f ? (0, n.jsx)("div", {
                className: x.background,
                style: a?.style ?? {}
              }) : "", y && N ? (0, n.jsx)("div", {
                className: x.layered
              }) : "", (0, n.jsx)("div", {
                className: x.gradient
              })]
            }), (0, n.jsxs)(v.motion.div, {
              className: x.content,
              initial: "hidden",
              animate: "visible",
              variants: S,
              children: [(0, n.jsx)(v.motion.div, {
                variants: j,
                children: (0, n.jsx)(s.c, {
                  brands: t
                })
              }), c.length ? (0, n.jsx)(v.motion.div, {
                variants: j,
                children: (0, n.jsx)(b.ExpandingPlatformButton, {
                  buttonText: o,
                  platformsAndLinks: c,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(v.motion.div, {
                      className: x.descriptions,
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
                    }), r.length > 0 && (0, n.jsx)(v.motion.div, {
                      variants: j,
                      children: (0, n.jsx)(k.c, {
                        buttons: r,
                        className: x.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(v.motion.div, {
                  className: x.descriptions,
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
                }), r.length > 0 && (0, n.jsx)(v.motion.div, {
                  variants: j,
                  children: (0, n.jsx)(k.c, {
                    buttons: r,
                    className: x.buttonGroup
                  })
                })]
              }), m && (0, n.jsx)(v.motion.div, {
                className: x.legalText,
                variants: j,
                children: (0, n.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: m
                  }
                })
              })]
            }), u?.shards && (0, n.jsx)(_, {
              ...u
            })]
          })
        };
      var S = a(18500),
        j = a(3736),
        w = a(58960);
      const T = {},
        C = e => {
          let {
            brand: t
          } = e;
          return (0, n.jsx)("div", {
            className: T[t]
          })
        },
        E = () => (0, n.jsx)("h2", {
          children: "Section"
        });
      var M = a(47276),
        P = a(880)
    },
    75416: (e, t, a) => {
      "use strict";
      a.d(t, {
        KM: () => i,
        y_: () => r.y,
        uQ: () => u,
        ye: () => c,
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
        o = a(8872);
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
        o = a(95240);
      const c = (0, s.createContext)(),
        l = () => (0, s.useContext)(c),
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
          return (0, o.jsx)(c.Provider, {
            value: f,
            children: t
          })
        }
    },
    67284: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        componentsForTinaParser: () => Re,
        componentsForTinaParserGuide: () => We
      });
      var s = a(9860),
        n = a(51664),
        i = a(1740),
        r = a(45364),
        o = a.n(r),
        c = a(73660),
        l = a.n(c),
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
            badges: o
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
                badges: o?.filter((e => e?.isPrimary))
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
            discountPrice: o,
            originalPrice: c,
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
                children: o
              }), (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a3632910b63514f6b49539fe45bcccb6",
                children: c
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
          const o = (0, n.createRef)();
          return (0, n.useEffect)((() => {
            const e = () => {
              o.current && null !== r && r(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, u.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e754e3afc303a114f9e28e09c5519a30",
            ref: o,
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
            pricingOptions: o,
            setPricingContainerHeight: c,
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
              size: o,
              title: c,
              expandedView: l,
              badges: d
            } = e;
            const [m, g] = (0, n.useState)(null), f = (0, n.useMemo)((() => {
              if (!t) return null;
              const e = "sm" !== o && r;
              return (0, u.jsx)(k, {
                title: c,
                hasTag: s,
                tag: a,
                hasDescription: e,
                description: i,
                fadesOut: l,
                badges: d
              })
            }), [t, a, s, i, r, o, c, l, d]);
            return (0, n.useEffect)((() => {
              g(f)
            }), [f]), [m, g]
          })({
            ...t,
            size: s,
            title: a,
            expandedView: i
          }), g = void 0 !== o?.hasPricingOptions || null !== d;
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
                pricingOptions: o,
                setPricingContainerHeight: c
              }), !0 === o?.hasPricingOptions && (0, u.jsx)(x, {
                title: a,
                tag: o?._memoq?.tag,
                tagStyle: o?._memoq?.tagStyle || "free",
                discountPrice: o?._memoq?.discountPrice,
                originalPrice: o?._memoq?.originalPrice,
                setPricingContainerHeight: c
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
            size: o,
            title: c,
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
            O = (0, n.useRef)(),
            {
              tag: D,
              expandedHasTag: B,
              badges: H
            } = k;
          l().set(a, "meta.prod", r);
          const [, z] = (0, d.useSearchParams)(), [G, V] = (0, n.useState)(null), F = _?.props?.images.length > 0;
          let A = (0, u.jsx)("h1", {
            children: c
          });
          return C && (A = null), (0, n.useEffect)((() => {
            null !== G && G < S?.length && G > -1 && z({
              info: S[G]
            })
          }), [G, S]), (0, n.useEffect)((() => {
            S?.forEach(((e, t) => {
              e === j && V(t)
            }))
          }), [S, j]), (0, n.useEffect)((() => {
            const e = () => {
              $.current && $.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && ($.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, u.jsx)(m.DataLayerProvider, {
            card_id: j,
            card_name: c?.toLowerCase(),
            children: (0, u.jsx)(s.ScrollTracker, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === v ? $ : O,
              children: (0, u.jsxs)(P, {
                ref: $,
                initial: f,
                animate: p,
                variants: b.expanded,
                transition: I.cardOpen,
                className: (0, i.classList)("rockstargames-sites-gta-gen9dcb84dcfd34616fb0089133acf0c4669", y),
                "data-type": v,
                "data-size": o,
                "data-product": L,
                "data-covercard": C || !1,
                "data-context": h,
                style: {
                  "--product-card-pricing-info-height": `${T||0}px`
                },
                children: [F && (0, u.jsx)(M, {
                  size: o,
                  title: c,
                  textOverlayProps: k,
                  expandedView: !0,
                  pricingOptions: w,
                  platformOptions: E,
                  isCoverCard: C,
                  children: _
                }), (0, u.jsxs)(P, {
                  ref: O,
                  className: "rockstargames-sites-gta-gen9eaf357a8d0bae1199142949cbf24e7b9",
                  variants: b.expandedContents,
                  transition: I.afterCardOpen,
                  "data-theme": N,
                  children: [(0, u.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9fc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, u.jsx)(g, {
                      hasTag: B,
                      tag: D,
                      badges: H
                    }), A, L && (0, u.jsxs)(u.Fragment, {
                      children: [!0 === E?.hasPlatformOptions && (0, u.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9b630c7c1f59f91f2ac304af525b6d081",
                        children: (0, u.jsx)(g, {
                          hasTag: E?.hasPlatformOptions,
                          tag: E?._memoq?.platformTag,
                          tagStyle: E?._memoq?.platformTagStyle
                        })
                      }), !0 === w?.hasPricingOptions && (0, u.jsx)(x, {
                        title: c,
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
      var O = a(98e3),
        D = a(42836);
      const B = e => {
          let {
            id: t,
            position: a,
            title: s,
            size: i = "md",
            sectionTitle: r = "",
            expandedType: o = null,
            modalProps: c = {
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
          const [v, h] = (0, d.useSearchParams)(), k = (0, n.useRef)(null), [, x] = (0, O.i)(), {
            track: y
          } = (0, D.useGtmTrack)(), [_, N] = (0, n.useState)(!1), S = () => {
            N(!1), x(null), h({}), y({
              event: "trackPageview"
            })
          }, j = () => {
            if (!c?.content || !k.current || !o || "linkout" === o) return;
            const e = k.current,
              n = window.getComputedStyle(e),
              r = parseInt(n.getPropertyValue("width"), 10),
              l = parseInt(n.getPropertyValue("height"), 10),
              d = e.getBoundingClientRect(),
              {
                content: m,
                className: u,
                contentClassName: g
              } = c,
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
                type: o
              }
            }), y({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: t,
              card_name: s?.toLowerCase(),
              position: a
            })
          }, w = e => {
            b && "button" !== e.target.type || "linkout" !== o && (e.preventDefault(), e.stopPropagation(), t ? h({
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
            "data-type": o,
            "data-product": g,
            role: "button",
            tabIndex: "linkout" !== o ? 0 : -1,
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
        z = e => {
          let {
            payload: t,
            prod: a,
            images: r,
            size: c,
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
              GroupOfItems: o()
            })), [P]),
            I = (0, n.useMemo)((() => (0, u.jsx)($, {
              type: v,
              components: L,
              payload: t,
              prod: a,
              images: r,
              size: c,
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
            })), [v, r, a, c, l, y, x, d, m, g, L, t, M]),
            O = [H.card, E ? H.coverCardWrapper : ""].join(" ");
          return (0, u.jsx)(B, {
            id: f,
            position: p,
            sectionTitle: b,
            title: l,
            size: c,
            expandedType: v,
            images: r,
            deckProps: _,
            modalProps: {
              content: I,
              ...N
            },
            className: O,
            isProductCard: M,
            cardIds: j,
            theme: S,
            isCoverCard: E,
            children: k
          })
        };
      var G = a(45652);
      const V = {
          layeredImageFrame: "rockstargames-sites-gta-gen9f4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-sites-gta-gen9f48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-sites-gta-gen9b52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-sites-gta-gen9f55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-sites-gta-gen9fa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-sites-gta-gen9b496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: F,
          Animations: A
        } = s.framer,
        {
          getVariant: R,
          variants: W,
          transitions: q
        } = A,
        U = e => {
          let {
            image: t,
            i: a,
            prod: s
          } = e;
          const {
            alt: n,
            src: i
          } = (0, G.useImageParser)({
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
            style: o = {}
          } = e;
          const [c, l] = (0, n.useState)({
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
          }), [c]);
          const d = (0, n.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, u.jsx)(F, {
            className: (0, i.classList)(V[e?.specialClass] ?? V.imageMask, V[e?.sizeClass], e?.className),
            variants: R(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: q.cardOpen,
            children: (0, u.jsx)(U, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [t, c, r, s]);
          return (0, u.jsx)(F, {
            className: (0, i.classList)(V.layeredImageFrame, t.length > 1 ? V.layered : V.flat, a),
            style: o,
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
            id: o,
            cardTitle: c,
            position: l
          } = e;
          const {
            track: d
          } = (0, D.useGtmTrack)();
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
              card_id: o,
              card_name: c,
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
            expandedType: o = "short",
            textOverlayProps: c = {
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
          }), [d?.size, r]), (0, u.jsx)(z, {
            id: t,
            title: a,
            size: _,
            expandedType: o,
            images: l,
            deckProps: d,
            prod: y,
            payload: {
              content: s,
              meta: {}
            },
            variants: X.plainCard,
            textOverlayProps: c,
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
              expandedType: o,
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
                  textOverlayProps: c,
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
            content: o,
            size: c = "md",
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
            [x, y] = (0, n.useState)(g?.size ?? c),
            _ = (0, i.useGetCdnSource)(a ?? null);
          let N = null;
          return h.content && (N = h?.content[0]?._memoq ? h?.content[0]?._memoq?.body : null), (0, n.useEffect)((() => {
            y(g?.size ?? c)
          }), [g?.size, c]), (0, u.jsx)(z, {
            id: t,
            title: s,
            size: x,
            expandedType: l,
            images: m,
            deckProps: g,
            prod: k,
            payload: {
              content: o,
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
        oe = e => {
          let {
            images: t,
            title: a,
            expandedView: i,
            variants: r,
            transition: o
          } = e;
          const c = (0, n.useMemo)((() => t && 0 !== t?.length ? t.map((e => e?.image?.sources ? (0, u.jsx)(s.ImageWithBadge, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [t]);
          return !c?.length || c?.length < 1 ? null : 1 === c.length ? c : (0, u.jsx)(s.ThumbsGallery, {
            slideChildren: c,
            title: a,
            navigation: i,
            thumbsVisible: i,
            spaceBetween: 0,
            variants: r,
            transition: o
          })
        },
        ce = {
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
            expandedType: o = "gallery",
            textOverlayProps: c = {
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
          }), [d?.size, r]), (0, u.jsx)(z, {
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
            expandedType: o,
            images: x,
            deckProps: d,
            prod: k,
            variants: de.cardWithImageGallery,
            textOverlayProps: c,
            modalProps: {
              className: ce.customModal,
              contentClassName: ce.customModalContent
            },
            expandedCardContents: (0, u.jsx)(oe, {
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
              className: ce.content,
              children: (0, u.jsx)(M, {
                title: a,
                size: y,
                textOverlayProps: c,
                children: (0, u.jsx)(oe, {
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
          const o = {
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
                  components: o,
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
            customSlidesPerView: o = null,
            theme: c = "none",
            cardSizeBreakpoints: m = {},
            customAspectRatio: g = "3/1",
            titleBadge: f = null
          } = e;
          const p = (0, n.useRef)(null),
            b = l().map(t, "id"),
            v = pe({
              ids: b
            }),
            [h, k] = (0, n.useState)(o),
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
              const e = o || window.getComputedStyle(p.current).getPropertyValue("--slides-per-view");
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
                  tina: o
                } = n, d = l().clone(o);
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
                    theme: c,
                    cardIds: b
                  }
                }, r)), e += 1
              }
              return t
            }), []) : null
          }), [v, a]);
          return (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9caf46db6464a84ad4990aed75ef74ff1",
            "data-theme": c,
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
            itemNumber: o,
            inModalMode: c,
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
            } = (0, D.useGtmTrack)(),
            w = (0, n.createRef)(),
            T = (0, n.createRef)(),
            C = (0, n.createRef)(),
            E = (0, n.createRef)(),
            M = (0, n.createRef)(),
            [P, L] = (0, n.useState)(!1),
            [I, $] = (0, n.useState)(0),
            [O, B] = (0, n.useState)(0),
            [H, z] = (0, n.useState)(0),
            [V, F] = (0, n.useState)(0),
            [A, R] = (0, n.useState)(0),
            [W, q] = (0, n.useState)(!1),
            [U, K] = (0, n.useState)(0),
            [Q, Y] = (0, n.useState)(0),
            [X, J] = (0, n.useState)(0),
            [Z, ee] = (0, n.useState)("700"),
            [te, ne] = (0, n.useState)(-1),
            [ie, re] = (0, n.useState)(0),
            [oe, ce] = (0, n.useState)(0),
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
            Oe = (0, n.useMemo)((() => $e?.images?.[0]?.image?.badge), [$e]),
            De = (0, n.useMemo)((() => $e.title ?? r ?? Ie?.title), [r, Ie?.title, $e.title]),
            Be = (0, G.useImageParser)({
              alt: $e?.images?.[0]?.image?.alt ?? "",
              ariaLabel: $e?.images?.[0]?.image?.alt ?? "",
              sources: $e?.images?.[0]?.image?.sources ?? [],
              prod: Pe
            }),
            He = Be?.src?.mobile ?? Be?.src?.desktop ?? !1,
            ze = (0, n.useMemo)((() => Ie?.foreignId), [Ie]),
            Ge = (0, n.useMemo)((() => Ie?.foreignTitle), [Ie]),
            [Ve, Fe] = (0, n.useState)(0),
            [Ae, Re] = (0, n.useState)(0),
            [We, qe] = (0, n.useState)(0),
            [Ue, Ke] = (0, n.useState)(0),
            [Qe, Ye] = (0, n.useState)(!1),
            [Xe, Je] = (0, n.useState)(0),
            [Ze, et] = (0, n.useState)(20),
            [tt, at] = (0, n.useState)(null),
            [st, nt] = (0, n.useState)(!1),
            it = (0, n.useCallback)((e => {
              if (!0 === W || !c && !g || ve) return;
              const t = Ne(e);
              Fe(t.x), Re(t.y)
            }), [W, c]),
            rt = e => {
              it(e)
            },
            ot = e => {
              if (!0 === W || 0 === Ve || !c && !g || ve) return;
              const t = Ne(e),
                a = t.x > Ve ? 1 : -1,
                s = Math.abs(Ve - t.x);
              c && !g && s > Ze ? (nt(!0), fe(a > 0 ? "prev" : "next"), lt()) : (Ye(!0), Je(s * a), N(s * a))
            },
            ct = e => {
              if (!0 === W || !c && !g || ve) return;
              const t = Ne(e),
                a = t.x > Ve ? 1 : -1,
                s = Math.abs(Ve - t.x),
                n = Math.abs(Ae - t.y);
              c && !g ? (lt(), fe("")) : s > Ze && n < 25 ? (nt(!0), fe(a > 0 ? "prev" : "next"), lt()) : lt()
            },
            lt = () => {
              q(!0), Fe(0), Re(0), Ye(!1), Je(0), N(0)
            };
          return (0, n.useEffect)((() => {
            let e = U;
            P ? e = 0 : c && !g && (e = U), $(e)
          }), [P, g, c, O, V, Q, X, H, U]), (0, n.useEffect)((() => {
            L(!(!c || !g))
          }), [c, g]), (0, n.useEffect)((() => {
            c && t && j({
              event: "virtualPageview",
              display_type: g ? "mobile" : "desktop",
              view_name: `${ze}/${De}`,
              source_content_id: ze,
              source_content_name: Ge
            })
          }), [c, t]), (0, n.useEffect)((() => {
            const e = ye()(((e, t) => {
              let a = 18;
              if (e?.documentElement && (a = _e(e?.documentElement, "--root-font-size")), oe !== t.innerHeight && ce(t.innerHeight), f?.current) {
                J(_e(f.current, "--eventDeck-marginSm") * a);
                const e = a * _e(f?.current, "--eventDeck-modalGutters"),
                  s = t?.innerWidth,
                  n = s - 2 * e;
                B(n), E.current && g && z(n), F(_e(f.current, "--eventDeck-itemSize") * a), de(_e(f.current, "--eventDeck-phaseOneTransitionDuration"));
                const i = _e(f?.current, "--eventDeck-itemImageTitleMargins") * a,
                  r = T?.current?.clientHeight,
                  o = r + i;
                Number.isNaN(o) || K(o), re(_e(f?.current, "--eventDeck-headerHeight") * a)
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
            if (c && g && E.current && (E.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !c && g && E.current) {
              const e = 228 / O;
              E.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!g && E.current && (E.current.style.transform = null)
          }), [c, g, O, H]), (0, n.useEffect)((() => {
            const e = .5 * O,
              t = oe - ie - 3 * X;
            R(O - (e < t ? e : t))
          }), [O, X, oe]), (0, n.useEffect)((() => {
            "next" === ge ? (h(null, !0), fe("")) : "prev" === ge && (v(null, !0), fe(""))
          }), [ge]), (0, n.useEffect)((() => {
            qe(0), Ke(0)
          }), [g]), (0, n.useEffect)((() => {
            g ? et(c ? 35 : 20) : c && et(50)
          }), [c, g]), (0, n.useEffect)((() => {
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
              q(!1), Fe(0)
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
            c && clearTimeout(te), setTimeout((() => {
              ue(!me)
            }), le)
          }), [c]), (0, n.useEffect)((() => (document.body.addEventListener("mouseleave", lt), () => {
            document.body.removeEventListener("mouseleave", lt)
          })), []), (0, n.useEffect)((() => {
            M.current ? Te(Se(M.current)) : Te(!1), void 0 !== d && d.current ? Ee(Se(d.current)) : Ee(!1)
          }), [d, M, t, c, me]), $e ? (0, u.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4090652e3c0a4e1979bb0a36b22b7cd",
            ref: d,
            "data-item-position": o,
            "data-modal-mode": c,
            "data-active-item": t,
            "data-up-next": m,
            "data-transition": Qe || 0 !== _ ? "none" : k,
            "data-scrollable": Ce,
            style: {
              ...a,
              transform: c && t && !g ? `translate3d(${We+Xe}px, ${Ue}px, 0)` : g && !c ? `translate3d(${We+_}px, ${Ue}px, 0)` : a?.transform
            },
            onClick: e => {
              st || (c ? c && !g && (o < x ? v(e, !0) : o > x && h(e, !0)) : l(e))
            },
            onMouseEnter: () => {
              c || L(!0), c || g || (clearTimeout(te), ne(setTimeout((() => {
                j({
                  event: "card_title_hover",
                  event_category: "card",
                  event_action: "title_hover",
                  event_label: y,
                  card_name: De,
                  card_id: o,
                  position: o,
                  view_name: `${ze}/${Ge}`,
                  source_content_id: ze,
                  source_content_name: Ge
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              c || L(!1), c || g || clearTimeout(te)
            },
            onTouchStart: rt,
            onTouchMove: ot,
            onTouchEnd: ct,
            onMouseDown: rt,
            onMouseMove: ot,
            onMouseUp: ct,
            onKeyUp: e => {
              "Enter" === e.key && (c || l(e))
            },
            tabIndex: c ? -1 : 0,
            "aria-label": c ? S.formatMessage(se.card.events_deck_modal_group_label) : "",
            role: c ? "dialog" : "presentation",
            children: [(0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b9c878efb14d25c323e95f01b7a53460",
              "data-full-header": P,
              ref: C,
              style: {
                height: c && g ? `${O}px` : null,
                width: c && g ? `${O}px` : null
              },
              children: [He && (0, u.jsx)("img", {
                ref: E,
                src: `${Be?.src?.mobile??Be?.src?.desktop}?im=Resize,width=${Z}`,
                alt: Be?.alt,
                style: {
                  width: 0 !== H && g ? `${H}px` : null,
                  height: 0 !== H && g ? `${H}px` : null
                }
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9ba8c09e500ea0845dc20d380e8ec11ca",
                style: {
                  transform: !g || g && c ? `translate3d(0, ${I}px, 0)` : null
                },
                children: [Oe && (0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cbbb0470197acdc4f0ec1f567f5c8a42",
                  ref: w,
                  children: (0, u.jsx)(s.Badge, {
                    text: Oe
                  })
                }), (0, u.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9aca2b0fbf7c1dbcbf99e53812b9abc8e",
                  ref: T,
                  "aria-hidden": c,
                  children: De
                })]
              })]
            }), (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e7defd080518d58f00f72ccc94df53aa",
              ref: M,
              "aria-hidden": !c,
              onScroll: () => {
                he(!0), lt(), clearTimeout(ke);
                const e = setTimeout((() => {
                  he(!1)
                }), 100);
                xe(e)
              },
              style: {
                top: c && g ? `${O}px` : null,
                width: c && !g && t ? `${A}px` : null,
                touchAction: we || g ? "unset" : "none"
              },
              children: [De && (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a8fbffe55d92fc2f04e5e6b8f9267206",
                children: De
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
            closeModalMode: o,
            inModalMode: c,
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
                "aria-label": c ? d.formatMessage(se.card.events_deck_modal_previous_aria_label) : d.formatMessage(se.card.events_deck_previous_aria_label)
              }), (0, u.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a94a647e9943db9c97ae87c8c6a162cd",
                "aria-hidden": !c,
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
                "aria-label": c ? d.formatMessage(se.card.events_deck_modal_next_aria_label) : d.formatMessage(se.card.events_deck_next_aria_label)
              })]
            }), (0, u.jsx)("button", {
              className: "rockstargames-sites-gta-gen9d43b6cdcbcc07082edacd9a7cb1598c5",
              type: "button",
              onClick: o,
              "aria-label": d.formatMessage(se.card.events_deck_modal_close_label),
              "aria-hidden": !c,
              tabIndex: c ? 0 : -1
            })]
          })
        };
      var Ee = a(5800),
        Me = a.n(Ee),
        Pe = a(23397),
        Le = a.n(Pe),
        Ie = a(73300),
        $e = a(71584),
        Oe = a(41136),
        De = a(23292),
        Be = a(22904),
        He = a(72256),
        ze = a(25992),
        Ge = a(3736),
        Ve = a(58960),
        Fe = a(47276),
        Ae = a(42172);
      const Re = {
          CalloutSection: s.CalloutSection,
          Card: J,
          CardWithImageGallery: me,
          ConditionalBlock: s.ConditionalBlock,
          CoverCard: re,
          EventsDeck: e => {
            const {
              setBodyIsScrollable: t
            } = (0, m.useBodyScrollable)(), {
              title: a
            } = e, {
              track: r
            } = (0, D.useGtmTrack)(), [c, d] = (0, n.useState)(!1), g = (() => {
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
            })(), [f, p] = (0, n.useState)([]), [b, v] = (0, n.useState)(null), [h, k] = (0, n.useState)(0), [x, y] = (0, n.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [_, N] = (0, n.useState)(!1), S = (0, n.createRef)(), [j, w] = (0, n.useState)(null), T = (0, n.createRef)(), C = (0, n.createRef)(), [E, M] = (0, n.useState)([]), [P, L] = (0, n.useState)(!0), [I, $] = (0, n.useState)(!1), [O, B] = (0, n.useState)(!1), [H, z] = (0, n.useState)([]), [G, V] = (0, n.useState)(404), [F, A] = (0, n.useState)(808), [R, W] = (0, n.useState)(672), [q, U] = (0, n.useState)(336), [K, Q] = (0, n.useState)(0), [Y, X] = (0, n.useState)(0), [J, Z] = (0, n.useState)(0), [ae, se] = (0, n.useState)(0), [ne, ie] = (0, n.useState)(0), [re, oe] = (0, n.useState)(!1), [ce, le] = (0, n.useState)(window.innerWidth), [de, ue] = (0, n.useState)(0), [ge, fe] = (0, n.useState)(0), [pe, be] = (0, n.useState)(0), [ve, he] = (0, n.useState)(0), [ke, xe] = (0, n.useState)(0), [Se, je] = (0, n.useState)(0), [Te, Ee] = (0, n.useState)(-1e3), [Me, Pe] = (0, n.useState)(0), [Le, Ie] = (0, n.useState)(50), [$e, Oe] = (0, n.useState)(0), [De, Be] = (0, n.useState)(!1), [He, ze] = (0, n.useState)(768), [Ge, Ve] = (0, n.useState)(!1), [Fe, Ae] = (0, n.useState)(!1), [Re, We] = (0, n.useState)(!1), [qe, Ue] = (0, n.useState)(!1), [Ke, Qe] = (0, n.useState)(!1), [Ye, Xe] = (0, n.useState)(1e3), [Je, Ze] = (0, n.useState)(1.2), [et, tt] = (0, n.useState)(0), [at, st] = (0, n.useState)(!1), [nt, it] = (0, n.useState)(!1), [rt, ot] = (0, n.useState)(!0), [ct, lt] = (0, n.useState)(!1), [dt, mt] = (0, n.useState)(!1), [ut, gt] = (0, n.useState)(null), [ft, pt] = (0, n.useState)(100), [bt, vt] = (0, n.useState)(!1), [ht, kt] = (0, n.useState)({}), [xt, yt] = (0, n.useState)(""), [_t, Nt] = (0, n.useState)(0), [St, jt] = (0, n.useState)(!1), [wt, Tt] = (0, n.useState)(!1), [Ct, Et] = (0, n.useState)(0), [Mt, Pt] = (0, n.useState)(0), [Lt, It] = (0, n.useState)(100), [$t, Ot] = (0, n.useState)(!1), [Dt, Bt] = (0, n.useState)(!1), Ht = () => ce * de + Le, zt = () => !1 === De ? Je : 1, Gt = e => e === ke - 1 || e === ke + 1, Vt = () => -1 * ve, Ft = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === De) return 0;
              const a = e.itemNumber % 2 == 0,
                s = G * Je;
              if (!0 === a && 0 !== e.itemNumber) {
                const a = _e(e?.element?.current, "top");
                let n = a - J;
                return !1 === t && (n -= a), -1 * (.5 * s + n) + et
              }
              return J - .5 * s + et
            }, At = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                s = Vt();
              !1 === a && (s = 0);
              const n = ce * de,
                i = !1 === De ? G * zt() : n;
              return e.inModalMode && De ? -1 === t ? Ht() * (ke - e.itemNumber) * -1 - e.styles.left : Ht() * (e.itemNumber - ke) - e.styles.left : -1 === t ? -1 * e.styles.left - i - Le + s : n - e.styles.left + Le + s
            }, Rt = (e, t, a) => {
              -1 === t && ($(!1), L(!0)), $(!1 === a && e >= t || !0 === a && e + 1 === t), L(e <= 0)
            }, Wt = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (dt || ct) return;
              if (mt(!0), re) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (ke + 1 >= f.length) return;
                const t = E[ke + 1]?.tina?.payload?.meta?.title ?? `card-${ke+1}`;
                r({
                  event: e ? "modal_swipe" : "modal_next",
                  event_category: "modal",
                  event_action: e ? "swipe" : "next",
                  event_label: a,
                  card_name: t,
                  card_id: ke + 1,
                  position: ke + 1,
                  view_name: `${E[ke+1].source_content_id}/${t}`,
                  source_content_id: E[ke + 1].source_content_id,
                  source_content_name: E[ke + 1].source_content_name
                }), Rt(ke + 1, f.length, !0), De ? De && M(E.map((e => {
                  e.itemNumber === ke - 1 ? e.upNext = !1 : e.itemNumber === ke + 2 ? e.upNext = !0 : e.itemNumber === ke + 1 ? e.active = !0 : e.itemNumber === ke && (e.upNext = !0, e.active = !1);
                  const t = e.styles.transform.replace("translate3d(", "").split(",");
                  let a = Number(t[0].replace("px", ""));
                  a -= Ht();
                  const s = `translate3d(${a}px,${t[1]},${t[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))) : M(E.map((e => (e.itemNumber === ke - 1 ? e.upNext = !1 : e.itemNumber === ke + 2 ? e.upNext = !0 : e.itemNumber === ke + 1 ? (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Vt()}px, ${et}px, 0) scale(1)`
                }) : e.itemNumber === ke && (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${At(e,-1)}px, ${Ft(e)}px, 0) scale(${zt()})`
                }), e)))), xe(ke + 1)
              }(t);
              const s = pe + 1;
              if (!(s > ne))
                if (r({
                    event: t ? "carousel_swipe" : "carousel_next",
                    event_category: "carousel",
                    event_action: t ? "swipe" : "next",
                    event_label: a
                  }), Rt(s, ne, !1), De) {
                  let e = s * q * -1;
                  e < Te && (e = Te, $(!0), L(!1), be(ne)), be(s), M(E.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = ve - Y;
                  be(s), e < Te && (e = Te, $(!0), L(!1), be(ne)), he(e)
                }
            }, qt = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (dt || ct) return;
              if (mt(!0), !0 === re) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (dt) return;
                if (ke - 1 < 0) return;
                const t = E[ke - 1]?.tina?.payload?.meta?.title ?? "card-" + (ke - 1);
                r({
                  event: e ? "modal_swipe" : "modal_previous",
                  event_category: "modal",
                  event_action: e ? "swipe" : "previous",
                  event_label: a,
                  card_name: t,
                  card_id: ke - 1,
                  position: ke - 1,
                  view_name: `${E[ke-1].source_content_id}/${t}`,
                  source_content_id: E[ke - 1].source_content_id,
                  source_content_name: E[ke - 1].source_content_name
                }), Rt(ke - 1, f.length, !0), De || M(E.map((e => (e.itemNumber === ke + 1 ? e.upNext = !1 : e.itemNumber === ke - 2 ? e.upNext = !0 : e.itemNumber === ke ? (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${At(e,1)}px, ${Ft(e)}px, 0) scale(${zt()})`
                }) : e.itemNumber === ke - 1 && (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Vt()}px, ${et}px, 0) scale(1)`
                }), e)))), De && M(E.map((e => {
                  e.itemNumber === ke + 1 ? e.upNext = !1 : e.itemNumber === ke - 2 ? e.upNext = !0 : e.itemNumber === ke ? (e.upNext = !0, e.active = !1) : e.itemNumber === ke - 1 && (e.active = !0);
                  const t = e.styles.transform.replace("translate3d(", "").split(",");
                  let a = Number(t[0].replace("px", ""));
                  a += Ht();
                  const s = `translate3d(${a}px,${t[1]},${t[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))), xe(ke - 1)
              }(t);
              const s = pe - 1;
              if (!(s < 0))
                if (r({
                    event: t ? "carousel_swipe" : "carousel_previous",
                    event_category: "carousel",
                    event_action: t ? "swipe" : "previous",
                    event_label: a
                  }), Rt(s, ne, !1), De) {
                  let e = s * q * -1;
                  e > 0 && (e = 0, L(!0), $(!1), be(0)), be(s), M(E.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = ve + Y;
                  be(s), (e > 0 || 0 === e || -1 * e < F) && (e = 0, L(!0), $(!1), be(0)), he(e)
                }
            }, Ut = e => {
              if (St || re || De) return;
              const t = Ne(e);
              Nt(t.x)
            }, Kt = e => {
              if (St || 0 === _t || re || De) return;
              const t = Ne(e),
                a = t.x > _t ? 1 : -1;
              let s = Math.abs(_t - t.x) * a;
              (0 === pe && 1 === a || pe === ne && -1 === a) && (s *= .35), Tt(!0), Et(s)
            }, Qt = e => {
              if (St || re || De) return;
              const t = Ne(e),
                a = t.x > _t ? 1 : -1,
                s = Math.abs(_t - t.x);
              yt(s > Lt ? a > 0 ? "prev" : "next" : ""), Yt()
            }, Yt = () => {
              jt(!0), Nt(0), Et(0), Tt(!1)
            }, Xt = e => {
              wt && (Qt(e), Tt(!1))
            }, Jt = function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return e.map(((e, s) => {
                let n = s * q,
                  i = s;
                !1 === De && (i = Math.ceil(.5 * s) + 1, s > 0 && (n = 2 === i ? R : R + q * (i - 2)));
                const r = H[s];
                return r?.current && (r.current.scrollTop = 0), {
                  ...e,
                  mobileMode: De,
                  itemNumber: s,
                  columnNumber: i,
                  inModalMode: !1,
                  upNext: !0,
                  active: !1,
                  openModalMode: ea,
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
            }, Zt = () => {
              const e = E[ke]?.tina?.payload?.meta?.title ?? `card-${ke}`;
              if (r({
                  event: "modal_close",
                  event_category: "modal",
                  event_action: "close",
                  event_label: a,
                  card_name: e,
                  card_id: ke,
                  position: ke,
                  view_name: `${E[ke].source_content_id}/${e}`,
                  source_content_id: E[ke].source_content_id,
                  source_content_name: E[ke].source_content_name
                }), De) {
                let e = ke * q * -1;
                e < Te && (e = Te, $(!0), L(!1), be(ne)), be(ke), Rt(ke, ne, !1), M(Jt(f, "cardClose", `translate3d(${e}px, 0, 0)`))
              } else {
                M(Jt(f, "cardClose"));
                const e = Math.ceil((E[ke].columnNumber + 1) / K) - 1;
                be(e);
                let t = e * Y * -1;
                $e < ge ? (t = 0, L(!0), $(!0), be(0)) : t < Te ? (t = Te, L(!1), $(!0), be(ne)) : Rt(e, ne, !1), he(t), xe(0)
              }
              T.current.style.transform = "translate(0px, 0px)", T.current.style.transition = "all var(--eventDeck-transitionCardClose)", st(!1), Ue(!1), oe(!1), Ae(!1), Ve(!1), Qe(!1), setTimeout((() => {
                We(!0)
              }), Ye)
            };
            (0, n.useEffect)((() => {
              !1 !== Re && (We(!1), st(!1), j.style.zIndex = null, M(E.map((e => (e.transitionStyle = "", e)))))
            }), [Re]);
            const ea = e => {
              setTimeout((() => {
                kt(e), vt(!0)
              }), 1)
            };
            (0, n.useEffect)((() => {
              if (!bt) return;
              if (vt(!1), dt) return;
              xe(Number(ht.target.dataset.itemPosition)), Ae(!0), lt(!0), rt && ot(!1);
              const e = E[ht.target.dataset.itemPosition].source_content_id,
                t = E[ht.target.dataset.itemPosition].source_content_name,
                s = E[ht.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
              r({
                event: "card_click",
                event_category: "card",
                event_action: "click",
                event_label: a,
                card_name: s ?? `card-${ke}`,
                card_id: ht.target.dataset.itemPosition,
                position: ht.target.dataset.itemPosition,
                view_name: `${e}/${s}`,
                source_content_id: e,
                source_content_name: t
              })
            }), [bt]), (0, n.useEffect)((() => {
              if (!Fe || re) return;
              Ae(!1);
              const e = (() => {
                const e = j?.getBoundingClientRect().top;
                return tt(-1 * (e - h)), -1 * (e - 140)
              })();
              De && M(E.map((e => {
                const t = e.itemNumber > ke + 3 || e.itemNumber < ke - 3;
                return e.styles = {
                  ...e.styles,
                  display: t ? "none" : null,
                  transition: t ? "none" : null
                }, e
              }))), j.style.zIndex = "var(--eventDeck-zIndexOverlay)", st(!0), T.current && (T.current.style.transition = "all var(--eventDeck-transitionCardOpen)", T.current.style.transform = `translateY(${e}px)`), Ue(!0), setTimeout((() => {
                Ve(!0)
              }), 1)
            }), [Fe]);
            const ta = () => {
              M(E.map(((e, t) => {
                e.active = t === ke, e.inModalMode = !0, e.transitionStyle = "cardOpen", De && (e.upNext = Gt(e.itemNumber));
                const a = !De;
                let s = 0;
                if (De) {
                  const e = Se + 5 * h;
                  s = window.innerHeight - e
                }
                return e.itemNumber < ke ? e.styles = {
                  ...e.styles,
                  height: De ? `${s}px` : null,
                  transform: `translate3d(${At(e,-1,a)}px, ${et}px, 0) scale(${zt()})`
                } : e.itemNumber > ke ? e.styles = {
                  ...e.styles,
                  height: De ? `${s}px` : null,
                  transform: `translate3d(${At(e,1,a)}px, ${et}px, 0) scale(1)`
                } : e.itemNumber === ke && (e.styles = De ? {
                  ...e.styles,
                  height: `${s}px`,
                  transform: `translate3d(${-1*e.styles.left}px, ${et}px, 0) scale(1)`
                } : {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Vt()}px, ${et}px, 0) scale(1)`
                }), e
              })))
            };
            (0, n.useEffect)((() => {
              !1 !== Ge && !0 !== re && (oe(!0), Ve(!1), Rt(ke, E.length, !0), T.current && (T.current.style.transition = "all var(--eventDeck-transitionCardOpen)", T.current.style.transform = `translateY(${et}px)`), ta(), De ? (he(0), lt(!1), it(!0)) : Qe(!0))
            }), [Ge]), (0, n.useEffect)((() => {
              nt && (it(!1), M(E.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
            }), [nt]);
            const aa = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              M(E.map((t => {
                if (t.upNext = Gt(t.itemNumber), t.itemNumber !== ke) {
                  let e = At(t, 1);
                  t.itemNumber < ke && (e = At(t, -1)), t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, ${Ft(t)}px, 0) scale(${zt()})`
                  }
                } else t.itemNumber === ke && !De && e && (t.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${Vt()}px, ${et}px, 0) scale(1)`
                });
                return t
              })))
            };
            (0, n.useEffect)((() => {
              !1 !== Ke && !0 !== De && (Qe(!1), setTimeout((() => {
                aa(), lt(!1)
              }), 1))
            }), [Ke]), (0, n.useEffect)((() => {
              M(Jt(f, ""))
            }), [R, q, f]), (0, n.useEffect)((() => {
              const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
              Ot(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
            }), []), (0, n.useEffect)((() => {
              re ? (t(!1), $t && Bt(!0)) : wt || re || (t(!0), $t && Dt && Bt(!1))
            }), [re, wt]), (0, n.useEffect)((() => {
              if (!dt) return;
              clearTimeout(ut);
              const e = setTimeout((() => {
                mt(!1)
              }), ft);
              gt(e)
            }), [dt]), (0, n.useEffect)((() => {
              _ && setTimeout((() => {
                N(!1)
              }), 3e3)
            }), [_]), (0, n.useEffect)((() => {
              N(!0), he(0), be(0);
              let e = Math.ceil(Math.ceil($e / q) / K);
              De && (e = E.length - 1), e < 0 && (e = 1), Rt(0, e, !1), re && Zt()
            }), [De]), (0, n.useEffect)((() => {
              T.current && !re && (T.current.style.transform = "")
            }), [T, De, re]), (0, n.useEffect)((() => {
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
              z(f.map((() => (0, n.createRef)())))
            }), [f]), (0, n.useEffect)((() => {
              const e = e => {
                const {
                  key: t
                } = e;
                "ArrowLeft" === t ? qt(null, !1) : "ArrowRight" === t && Wt(null, !1)
              };
              return document.addEventListener("keydown", e), () => {
                document.removeEventListener("keydown", e)
              }
            }), [dt, ct, re]), (0, n.useEffect)((() => {
              if (T.current) {
                let e = 0;
                e = T?.current?.clientHeight, e += _e(T?.current, "margin-top"), e += _e(T?.current, "margin-bottom"), je(e)
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
                  T.current.style.transform = `translateY(${t}px)`
                }
              })()
            }), [De, re, et]), (0, n.useEffect)((() => {
              $e < de * ce && 0 === pe ? (he(0), $(!0), L(!0)) : ve < Te ? ($(!0), L(!1), be(ne), he(Te)) : ve < 0 && ($(!1), be(ne - 1)), $e > de * ce && I && $(!1)
            }), [Te]), (0, n.useEffect)((() => {
              if (S.current) {
                w(S.current);
                const e = _e(document.documentElement, "--root-font-size"),
                  t = _e(S.current, "--eventDeck-modalGutters") * e;
                let a = ce - 2 * t;
                fe(a), ue(a / ce);
                let s = _e(S.current, "--eventDeck-modalBottomGutter");
                s *= e;
                const n = window.innerHeight - (Se + s);
                Z(.5 * a < n ? a / 4 : .5 * n);
                const i = _e(S.current, "--eventDeck-mobileBreakpoint");
                ze(i);
                let r = _e(S.current, "--eventDeck-itemSize");
                r *= e, V(r);
                let o = _e(S.current, "--eventDeck-modalGutterGap");
                o *= e, Ie(o);
                let c = _e(S.current, "--eventDeck-insideMargin");
                c *= e;
                const l = !1 === De ? 2 * r + c : r + c;
                A(l), W(l + c);
                const d = r + c;
                U(d);
                let m = Math.ceil(.5 * (f.length - 1)) * d + l;
                De && (m = f.length * d), Oe(m), 0 !== $e && Ee(-1 * $e + a);
                let u = Math.ceil(Math.ceil(m / d) / K);
                (De || re) && (u = E.length - 1), ie(u);
                const g = _e(S.current, "--eventDeck-itemScaleUpAmount");
                Ze(g), Xe(_e(S.current, "--eventDeck-cardCloseTransitionDuration")), k(_e(S.current, "--eventDeck-itemImageTitleMargins") * e), null !== b && e !== b && (v(e), re && aa()), null === b && v(e)
              }
            }), [S, f]), (0, n.useEffect)((() => {
              if (re && !De) {
                aa();
                const e = j?.getBoundingClientRect().top,
                  t = -1 * (e - h);
                t !== et && tt(t)
              }
            }), [x]), (0, n.useEffect)((() => {
              B(!(!P || !I || re))
            }), [P, I]), (0, n.useEffect)((() => {
              const e = ye()((e => {
                le(e), Be(e < He);
                const t = (1 - de) / 2;
                Pe(e * t);
                const a = Math.floor(ge / q);
                Q(a), X(a * q), se(e - e * t);
                const s = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
                if (s !== x && y(s), re && s === x && !_) {
                  const e = j?.getBoundingClientRect().top,
                    t = -1 * (e - h);
                  t !== et && tt(t)
                }
              }), 300);
              return window.addEventListener("resize", (() => {
                e(window.innerWidth)
              })), window.addEventListener("scroll", (() => {
                re && De && e(window.innerWidth)
              })), e(window.innerWidth), () => {
                window.removeEventListener("resize", (() => {
                  e(window.innerWidth)
                }))
              }
            }), [q, de, re, De]), (0, n.useEffect)((() => {
              !1 !== re && !0 !== _ && (De ? ta() : aa(!0))
            }), [ae, Y, Le, G, ce, Me, J, et]), (0, n.useEffect)((() => {
              const e = () => {
                if (S.current && rt) {
                  const e = S.current.getBoundingClientRect(),
                    t = .2 * window.innerHeight;
                  window.innerHeight - e.top >= t && ot(!1)
                }
              };
              return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
            }), [S]);
            const sa = (0, n.useCallback)((() => {
              if (null !== S.current && !c) {
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
            (0, n.useEffect)((() => (window.addEventListener("scroll", sa), () => {
              window.removeEventListener("scroll", sa)
            })), [sa, S]), (0, n.useEffect)((() => {
              "next" === xt ? (Wt(null, !0), yt("")) : "prev" === xt && (qt(null, !0), yt(""))
            }), [xt]), (0, n.useEffect)((() => {
              S.current && S.current.addEventListener("mouseleave", (() => {
                wt && Yt()
              }))
            }), [S, wt]), (0, n.useEffect)((() => (document.body.addEventListener("mouseleave", Xt), () => {
              document.body.removeEventListener("mouseleave", Xt)
            })), [wt]), (0, n.useEffect)((() => {
              St && setTimeout((() => {
                jt(!1), Nt(0)
              }), ft)
            }), [St]), (0, n.useEffect)((() => {
              It(De ? 20 : 100)
            }), [De]), (0, n.useEffect)((() => {
              pt(re ? 500 : 100)
            }), [re]);
            const na = (0, i.useTinaComponents)(),
              ia = (0, n.useMemo)((() => ({
                ...na,
                CardWithImageGallery: me,
                HTMLElement: s.HTMLElement,
                ImageWithBadge: s.ImageWithBadge,
                Carousel: s.Carousel,
                GroupOfItems: o(),
                UnorderedList: s.UnorderedList
              })), [na]),
              ra = (0, n.useMemo)((() => E.map((e => (0, n.createElement)(we, {
                ...e,
                refDeck: S,
                key: e?.id ?? e?.sync_hash,
                components: ia,
                prevPage: qt,
                nextPage: Wt,
                loadCssRawValue: _e,
                selectedItemNumber: ke,
                carouselTitle: a,
                sharedDraggingDelta: Mt,
                setSharedDraggingDelta: Pt
              })))), [E, S, ia, qt, Wt, ke]);
            return !ra?.length || ra.length <= 0 ? null : (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d06937f0f31eadd8f2c6a7d4000c4028",
                "data-modal-mode": qe,
                "aria-hidden": "true"
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9bf13eb49657ff34f800ad89de65ad3b9",
                "data-modal-mode": re,
                "data-faded": rt,
                ref: S,
                onTouchStart: Ut,
                onTouchMove: Kt,
                onTouchEnd: Qt,
                onMouseDown: Ut,
                onMouseMove: Kt,
                onMouseUp: Qt,
                tabIndex: -1,
                role: "presentation",
                children: [(0, u.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9bc0660e650ef4aabf28e90cce99a05be",
                  "data-modal-mode": re,
                  ref: T,
                  "data-animating": at,
                  children: [(0, u.jsx)("h2", {
                    className: "rockstargames-sites-gta-gen9fdd9accd06b828c3c1007add9d32723d",
                    children: a
                  }), (0, u.jsx)(Ce, {
                    prevPage: qt,
                    prevBtnDisabled: P,
                    nextPage: Wt,
                    nextBtnDisabled: I,
                    selectedItemNumber: ke,
                    itemsData: f,
                    closeModalMode: Zt,
                    inModalMode: re,
                    controlsHidden: O
                  })]
                }), (0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c54f31f5237995d05edfb79cc4e08a33",
                  "data-modal-mode": re,
                  "data-is-dragging": wt,
                  style: {
                    transform: `translate3d(${ve+Ct}px, 0, 0)`,
                    width: `${$e}px`
                  },
                  ref: C,
                  children: ra
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
          GroupOfItems: o(),
          Rating: s.Rating,
          gen9: Ae,
          TinaModuleFetchNRender: s.TinaModuleFetchNRender,
          PromoModule: s.PromoModule,
          Engagement: Le()
        },
        We = {
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
          GroupOfItems: o(),
          ParallaxInnerLayer: s.ParallaxInnerLayer,
          ParallaxOuterLayer: s.ParallaxOuterLayer,
          ParallaxWrapper: s.ParallaxWrapper,
          PromoModule: s.PromoModule,
          Engagement: Le(),
          gen9: {
            BuyNow: Ie.c,
            Disclaimer: $e.c,
            FAQ: Oe.c,
            Guide: De.c,
            GuideGroup: Be.c,
            GuideIntro: He.c,
            GuideSection: ze.c,
            Hero: s.Hero,
            ImageTextGroupGroup: Ge.c,
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
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
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
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
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
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
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
    56644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    17104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    65388: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    39336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    91232: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    23124: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    96201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
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
    2140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e50aff7a4148673983e493ca815454e.svg"
    }
  }
]);