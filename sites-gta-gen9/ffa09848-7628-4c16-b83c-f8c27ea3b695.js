try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ffa09848-7628-4c16-b83c-f8c27ea3b695", e._sentryDebugIdIdentifier = "sentry-dbid-ffa09848-7628-4c16-b83c-f8c27ea3b695")
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
  [3059, 5225, 5841], {
    71554(e, t, a) {
      "use strict";

      function r(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var a = t.call(e, "string");
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function s(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), a.push.apply(a, r)
        }
        return a
      }

      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(a), !0).forEach(function(t) {
            var s, n, o;
            s = e, n = t, o = a[t], (n = r(n)) in s ? Object.defineProperty(s, n, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : s[n] = o
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          })
        }
        return e
      }

      function o(e, t) {
        var a = {};
        for (var r in e) a[r] = t(e[r], r);
        return a
      }
      a.d(t, {
        c: () => c
      });
      var i = (e, t, a) => {
          for (var r of Object.keys(e)) {
            var s;
            if (e[r] !== (null !== (s = t[r]) && void 0 !== s ? s : a[r])) return !1
          }
          return !0
        },
        c = e => {
          var t = t => {
            var a = e.defaultClassName,
              r = n(n({}, e.defaultVariants), t);
            for (var s in r) {
              var o, c = null !== (o = r[s]) && void 0 !== o ? o : e.defaultVariants[s];
              if (null != c) {
                var d = c;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var l = e.variantClassNames[s][d];
                l && (a += " " + l)
              }
            }
            for (var [m, f] of e.compoundVariants) i(m, r, e.defaultVariants) && (a += " " + f);
            return a
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return o(e.variantClassNames, e => o(e, e => e.split(" ")[0]))
            }
          }, t
        }
    },
    26237(e, t, a) {
      "use strict";
      a.d(t, {
        U: () => u,
        A: () => b
      });
      var r = a(39793),
        s = a(93082),
        n = a(99225),
        o = a(45266),
        i = a(79955),
        c = a.n(i),
        d = a(13331),
        l = a(81270),
        m = a(82199);
      const f = {
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
        g = {
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
        p = {
          applestore: "rockstargames-sites-gta-gen9e68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-gta-gen9c240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-gta-gen9ee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-gta-gen9fc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-gta-gen9b12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-gta-gen9e752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-gta-gen9bb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-gta-gen9d0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-gta-gen9ffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-gta-gen9a2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-gta-gen9ed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-gta-gen9fa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-gta-gen9e950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-gta-gen9dd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-gta-gen9ed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-gta-gen9f046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-gta-gen9e7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-gta-gen9e8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-gta-gen9eaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-gta-gen9e6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-gta-gen9c03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-gta-gen9dde1b553776bdd59373d22a43479de29"
        },
        u = ({
          buttonText: e = "",
          link: t = "",
          platform: s = "",
          target: o = null,
          onClick: i,
          tabIndex: c,
          className: d,
          ...l
        }) => {
          const m = o ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            f = [p.platformButton, p[s], d].join(" "),
            g = s ? a(5328)(`./${s}.svg`) : null,
            u = (0, r.jsxs)(r.Fragment, {
              children: [g ? (0, r.jsx)("img", {
                src: g,
                alt: e
              }) : "", !g && (0, r.jsx)("div", {
                className: p.buttonText,
                children: e
              })]
            });
          return t ? t.startsWith("http") ? (0, r.jsx)("a", {
            href: t,
            className: f,
            target: m,
            onClick: i,
            "aria-label": e,
            tabIndex: c,
            ...l,
            children: u
          }) : (0, r.jsx)(n.NavLink, {
            className: f,
            onClick: i,
            to: t,
            "aria-label": e,
            ...l,
            children: u
          }) : (0, r.jsx)("button", {
            className: f,
            onClick: i,
            "aria-label": e,
            tabIndex: c,
            ...l,
            children: u
          })
        },
        b = ({
          variant: e,
          buttonText: t = "Subscribe",
          buttonClassName: n,
          className: i,
          children: b,
          platformsAndLinks: v = [],
          trackingType: h = "buy",
          trackingParent: k,
          target: x = null,
          trackingOId: y = null,
          returnUrl: _ = null
        }) => {
          const w = (0, d.useRockstarTokenPing)(),
            [C, E] = (0, s.useState)(!1),
            [j, N] = (0, s.useState)(!1),
            [L, S] = (0, s.useState)(200),
            {
              track: M
            } = (0, m.useGtmTrack)(),
            T = (0, s.useRef)(null),
            O = (0, s.useRef)(null),
            R = (0, s.useRef)(null),
            P = (0, s.useRef)(null),
            [I, z] = (0, s.useState)(0),
            A = (0, s.useRef)(null),
            D = () => {
              R.current?.blur(), N(!0), E(!1), A.current = window.setTimeout(() => {
                O.current?.focus()
              }, 30)
            },
            B = (0, s.useCallback)(() => {
              M({
                element_placement: k?.toLowerCase(),
                event: "cta_other",
                text: "close expanding platform button"
              }), D()
            }, [M, k]);
          (0, s.useEffect)(() => () => {
            null !== A.current && window.clearTimeout(A.current)
          }, []), (0, s.useLayoutEffect)(() => {
            C && P.current ? z(P.current.scrollHeight) : z(0)
          }, [C]), (0, s.useEffect)(() => {
            if (!C) return;
            const e = e => {
              const t = e.target;
              T.current && !T.current.contains(t) && document.contains(t) && (D(), A?.current && (A.current = window.setTimeout(() => {
                O.current?.blur()
              }, 40)))
            };
            return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
              document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
            }
          }, [C]), (0, s.useEffect)(() => {
            const e = () => {
              C && (N(!0), E(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [C]), (0, s.useLayoutEffect)(() => {
            if (T?.current) {
              const e = getComputedStyle(T.current).getPropertyValue("--expandingPlatformButton-expandDuration"),
                t = parseFloat(e) * (e.includes("ms") ? 1 : 1e3);
              requestAnimationFrame(() => {
                S(isNaN(t) ? 200 : t)
              })
            }
          }, []), (0, s.useEffect)(() => {
            let e;
            return j && (e = window.setTimeout(() => {
              N(!1)
            }, L)), () => {
              e && window.clearTimeout(e)
            }
          }, [j, L]);
          const V = ({
            href: e,
            platform: t
          }) => async () => {
            if (e) M({
              element_placement: k?.toLowerCase(),
              event: "cta_store_link",
              link_url: e,
              text: t
            });
            else {
              const e = (0, d.findPlatform)(t)?.onlineService;
              if (e && "sc" !== e) {
                M({
                  element_placement: k?.toLowerCase(),
                  event: "cta_link_account",
                  text: `link ${e}`
                });
                const t = await (0, d.generateTpaLink)({
                  pingBearer: w,
                  returnUrl: _ || window.location.pathname,
                  service: e
                });
                window.location.assign(t.href)
              }
            }
          };
          return "string" != typeof t ? null : (0, r.jsxs)("div", {
            className: (0, l.default)(p.container, i),
            children: [(0, r.jsx)(o.motion.div, {
              className: p.content,
              animate: C ? "open" : "close",
              variants: f,
              "aria-hidden": !!C,
              children: b
            }), (0, r.jsxs)(o.motion.div, {
              "data-variant": e,
              "data-animating": j,
              className: (0, l.default)(C ? p.expandedButton : p.unexpandedButton),
              animate: C ? "open" : "closed",
              variants: g,
              initial: !1,
              ref: T,
              children: [(0, r.jsx)(o.motion.button, {
                className: (0, l.default)(p.buttonText, n),
                "aria-expanded": C,
                onClick: () => {
                  if (N(!0), E(!C), !C) switch (h) {
                    case "select_platform":
                      M({
                        element_placement: k?.toLowerCase(),
                        event: "select_platform",
                        text: t?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      M({
                        element_placement: k?.toLowerCase(),
                        event: "cta_link_account",
                        o_id: y,
                        text: t?.toLowerCase()
                      });
                      break;
                    case "buy":
                      M({
                        element_placement: k?.toLowerCase(),
                        event: "cta_buy",
                        text: t?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      M({
                        element_placement: k?.toLowerCase(),
                        event: "cta_store_link",
                        text: t?.toLowerCase()
                      });
                      break;
                    case "other":
                      M({
                        element_placement: k?.toLowerCase(),
                        event: "cta_other",
                        text: t?.toLowerCase()
                      })
                  }
                },
                ref: O,
                children: t
              }), (0, r.jsx)("div", {
                className: p.expandedArea,
                ref: P,
                "data-animate": C ? "open" : "closed",
                "aria-hidden": !C,
                style: {
                  height: I
                },
                children: (0, r.jsx)(c(), {
                  active: C,
                  focusTrapOptions: {
                    preventScroll: !0,
                    returnFocusOnDeactivate: !1,
                    escapeDeactivates: !0,
                    clickOutsideDeactivates: !0,
                    onDeactivate: D,
                    checkCanFocusTrap: e => new Promise(t => {
                      const a = setInterval(() => {
                        "hidden" !== getComputedStyle(e[0]).visibility && (t(), clearInterval(a))
                      }, 5)
                    })
                  },
                  children: (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("button", {
                      className: p.closeButton,
                      onClick: B,
                      "aria-label": "Close",
                      tabIndex: C ? 0 : -1,
                      ref: R,
                      children: (0, r.jsx)("img", {
                        src: a(66426),
                        alt: "Close"
                      })
                    }), (0, r.jsx)("div", {
                      className: p.platformButtons,
                      children: v.length ? v.map(e => (0, r.jsx)(u, {
                        buttonText: e.buttonText ?? (0, d.findPlatform)(e.platform)?.friendlyName ?? "",
                        link: e.href,
                        platform: e.platform,
                        onClick: V(e),
                        target: x,
                        tabIndex: C ? 0 : -1
                      }, `${e.key}-${e.href}-${e.platform}`)) : ""
                    })]
                  })
                })
              })]
            })]
          })
        }
    },
    86166(e, t, a) {
      "use strict";
      a.d(t, {
        YT: () => o,
        lv: () => i,
        Ay: () => c
      });
      var r = a(39793),
        s = a(61707);
      var n = a(81270);
      var o = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        i = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const c = ({
        tagSize: e,
        platform: t,
        className: a = ""
      }) => {
        const {
          src: o,
          alt: i
        } = ((e, t) => {
          const a = "small" === t;
          switch (e) {
            case "pc":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
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
        })(t, e);
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("img", {
            className: (0, n.default)("rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1", a),
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": e,
            src: o,
            alt: "",
            "aria-hidden": !0
          }), (0, r.jsx)(s.s6, {
            children: i
          })]
        })
      }
    },
    48634(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        RpCategory: () => d,
        rpCategoryTestIds: () => c
      });
      var r = a(39793),
        s = a(93082),
        n = a(56082);
      var o = a(81270);
      const i = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        c = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        d = (0, s.forwardRef)(function({
          rank: e,
          size: t = "large",
          className: a,
          alt: s,
          testId: d,
          ...l
        }, m) {
          const f = i(e),
            g = (0, n.mergeProps)(l, {
              className: (0, o.default)("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", a),
              "data-testid": d
            });
          return (0, r.jsxs)("div", {
            "data-size": t,
            ref: m,
            ...g,
            children: [(0, r.jsx)("svg", {
              role: "svg",
              "aria-label": s,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": i(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: f
              })
            }), (0, r.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d9ea5cdf174033003a8670f31ae66a59",
              "data-testid": c.RANK_VALUE,
              children: e
            })]
          })
        })
    },
    31620(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        Avatar: () => b,
        Content: () => v,
        PlatformTag: () => k,
        PlatformTagSizes: () => c.YT,
        Platforms: () => c.lv,
        RankContent: () => y,
        Root: () => u,
        RpCategory: () => _,
        TextContent: () => w,
        TopRow: () => h,
        UserName: () => x
      });
      var r = a(39793),
        s = a(93082),
        n = a(61707),
        o = a(56082),
        i = a(81270),
        c = a(86166),
        d = a(48634),
        l = a(95125),
        m = a(42909);
      const f = (0, m.defineMessages)({
          character_card_a11y_intro: {
            id: "character_card_a11y_intro",
            description: "The a11y intro for the charcter card.",
            defaultMessage: "Character Card:"
          },
          character_card_a11y_player: {
            id: "character_card_a11y_player",
            description: "The a11y player name for the charcter card.",
            defaultMessage: "Player {player}."
          },
          character_card_a11y_rank: {
            id: "character_card_a11y_rank",
            description: "The a11y rank for the charcter card.",
            defaultMessage: "Rank {rank}."
          }
        }),
        g = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804",
        p = (0, s.forwardRef)(function({
          children: e,
          className: t,
          testId: a,
          ...s
        }, c) {
          const {
            formatMessage: d
          } = (0, m.useIntl)(), l = (0, o.mergeProps)(s, {
            "data-testid": a,
            className: (0, i.default)("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", t)
          });
          return (0, r.jsxs)("div", {
            ref: c,
            ...l,
            children: [(0, r.jsx)(n.s6, {
              children: d(f.character_card_a11y_intro)
            }), e]
          })
        }),
        u = (0, l.g)(p),
        b = (0, s.forwardRef)(function({
          src: e,
          alt: t,
          testId: n,
          ...i
        }, c) {
          const [d, l] = (0, s.useState)(e), m = (0, o.mergeProps)(i, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": n
          });
          return e ? (0, r.jsx)("div", {
            ref: c,
            ...m,
            children: (0, r.jsx)("img", {
              className: g,
              src: d,
              alt: t ?? "",
              onError: () => l(a(14804)),
              "aria-hidden": !t
            })
          }) : (0, r.jsx)("div", {
            ref: c,
            ...m,
            children: (0, r.jsx)("img", {
              className: g,
              src: a(14804),
              alt: t ?? "",
              "aria-hidden": !t
            })
          })
        }),
        v = (0, s.forwardRef)(function({
          asChild: e,
          testId: t,
          className: a,
          ...s
        }, c) {
          const d = e ? n.DX : "div",
            l = (0, o.mergeProps)(s, {
              className: (0, i.default)("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", a),
              "data-testid": t
            });
          return (0, r.jsx)(d, {
            ref: c,
            ...l
          })
        }),
        h = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, o.mergeProps)(a, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": t
          });
          return (0, r.jsx)("div", {
            ref: s,
            ...n,
            children: e
          })
        }),
        k = ({
          testId: e,
          ...t
        }) => {
          const a = (0, o.mergeProps)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(c.Ay, {
            ...a
          })
        },
        x = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          userName: a,
          ...s
        }, i) {
          const {
            formatMessage: c
          } = (0, m.useIntl)(), d = (0, o.mergeProps)(s, {
            "data-testid": t
          });
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...d,
            ref: i,
            children: [(0, r.jsx)(n.s6, {
              children: c(f.character_card_a11y_player, {
                player: a
              })
            }), (0, r.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        y = (0, s.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, s) {
          const n = (0, o.mergeProps)(a, {
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            ...n,
            ref: s,
            children: t
          })
        }),
        _ = ({
          testId: e,
          ...t
        }) => {
          const {
            formatMessage: a
          } = (0, m.useIntl)(), s = (0, o.mergeProps)(t, {
            "data-testid": e
          });
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(n.s6, {
              children: a(f.character_card_a11y_rank, {
                rank: t.rank
              })
            }), (0, r.jsx)(d.RpCategory, {
              ...s,
              "aria-hidden": !0
            })]
          })
        },
        w = (0, s.forwardRef)(function({
          asChild: e,
          children: t,
          testId: a,
          ...s
        }, i) {
          const c = e ? n.DX : "div",
            d = (0, o.mergeProps)(s, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": a
            });
          return (0, r.jsx)(c, {
            ref: i,
            ...d,
            children: t
          })
        })
    },
    66302(e, t, a) {
      "use strict";
      var r = a(40283);
      const s = [{
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
      }];
      a.d(t, ["A", 0, () => {
        let e;
        const {
          location: t
        } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = s.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === a && (e = {
          site: t,
          subDomain: r
        }, !0)) >= 0), o = s[n >= 0 ? n : 0], i = s.find(e => e.id === o.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, r.omit)((0, r.merge)({}, i, {
          currentSite: e
        }, o), "fallbackEnvironment")
      }, "C", 0, {
        www: "www",
        socialClub: "socialClub",
        support: "support",
        store: "store",
        circoloco: "circoloco",
        supportNew: "support"
      }])
    },
    5328(e, t, a) {
      const r = {
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

      function s(e) {
        const t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(r, e)) {
          const t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = n, e.exports = s, s.id = 5328
    },
    49733(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    62749(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    84941(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    39821(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    29886(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg"
    },
    65437(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    33492(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    65115(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    23146(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    80304(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    22454(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    66426(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    59129(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    42659(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    36773(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    14804(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    61707(e, t, a) {
      "use strict";
      a.d(t, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => i
      });
      var r = a(17172),
        s = a(39793),
        n = a(93082),
        o = a(23482);
      const i = ({
        enabled: e = !0,
        ...t
      }) => {
        const a = e ? o.s6 : n.Fragment;
        return (0, s.jsx)(a, {
          ...t
        })
      }
    },
    64239(e, t, a) {
      "use strict";
      a.d(t, {
        s: () => n
      });
      var r = a(93082);

      function s(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function n(...e) {
        return r.useCallback(function(...e) {
          return t => {
            let a = !1;
            const r = e.map(e => {
              const r = s(e, t);
              return a || "function" != typeof r || (a = !0), r
            });
            if (a) return () => {
              for (let t = 0; t < r.length; t++) {
                const a = r[t];
                "function" == typeof a ? a() : s(e[t], null)
              }
            }
          }
        }(...e), e)
      }
    },
    94435(e, t, a) {
      "use strict";
      a.d(t, {
        hO: () => c,
        sG: () => i
      });
      var r = a(93082),
        s = a(84017),
        n = a(17172),
        o = a(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const a = (0, n.TL)(`Primitive.${t}`),
            s = r.forwardRef((e, r) => {
              const {
                asChild: s,
                ...n
              } = e, i = s ? a : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, o.jsx)(i, {
                ...n,
                ref: r
              })
            });
          return s.displayName = `Primitive.${t}`, {
            ...e,
            [t]: s
          }
        }, {});

      function c(e, t) {
        e && s.flushSync(() => e.dispatchEvent(t))
      }
    },
    17172(e, t, a) {
      "use strict";
      let r;
      a.d(t, {
        DX: () => i,
        Dc: () => d,
        TL: () => o,
        xV: () => l
      });
      var s = a(93082),
        n = a(64239);

      function o(e) {
        const t = s.forwardRef((t, a) => {
          let {
            children: r,
            ...o
          } = t, i = null, d = !1;
          const l = [];
          g(r) && "function" == typeof b && (r = b(r._payload)), s.Children.forEach(r, e => {
            if (t = e, s.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === c) {
              d = !0;
              const t = e;
              let a = "child" in t.props ? t.props.child : t.props.children;
              g(a) && "function" == typeof b && (a = b(a._payload)), i = m(t, a), l.push(i?.props?.children)
            } else l.push(e);
            var t
          }), i ? i = s.cloneElement(i, void 0, l) : !d && 1 === s.Children.count(r) && s.isValidElement(r) && (i = r);
          const f = i ? function(e) {
              let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                a = t && "isReactWarning" in t && t.isReactWarning;
              return a ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, a = t && "isReactWarning" in t && t.isReactWarning, a ? e.props.ref : e.props.ref || e.ref)
            }(i) : void 0,
            v = (0, n.s)(a, f);
          if (!i) {
            if (r || 0 === r) throw new Error(d ? u(e) : p(e));
            return r
          }
          const h = function(e, t) {
            const a = {
              ...t
            };
            for (const r in t) {
              const s = e[r],
                n = t[r];
              /^on[A-Z]/.test(r) ? s && n ? a[r] = (...e) => {
                const t = n(...e);
                return s(...e), t
              } : s && (a[r] = s) : "style" === r ? a[r] = {
                ...s,
                ...n
              } : "className" === r && (a[r] = [s, n].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...a
            }
          }(o, i.props ?? {});
          return i.type !== s.Fragment && (h.ref = a ? v : f), s.cloneElement(i, h)
        });
        return t.displayName = `${e}.Slot`, t
      }
      var i = o("Slot"),
        c = Symbol.for("radix.slottable");

      function d(e) {
        const t = e => "child" in e ? e.children(e.child) : e.children;
        return t.displayName = `${e}.Slottable`, t.__radixId = c, t
      }
      var l = d("Slottable"),
        m = (e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return s.isValidElement(t) ? s.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return s.isValidElement(t) ? t : null
        },
        f = Symbol.for("react.lazy");

      function g(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === f && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }
      var p = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        u = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        b = (r || (r = a.t(s, 2)))[" use ".trim().toString()]
    },
    23482(e, t, a) {
      "use strict";
      a.d(t, {
        Qg: () => o,
        bL: () => c,
        s6: () => i
      });
      var r = a(93082),
        s = a(94435),
        n = a(39793),
        o = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        i = r.forwardRef((e, t) => (0, n.jsx)(s.sG.span, {
          ...e,
          ref: t,
          style: {
            ...o,
            ...e.style
          }
        }));
      i.displayName = "VisuallyHidden";
      var c = i
    },
    73059(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var r = a(37015),
        s = a(20219),
        n = a(20212);

      function o(e) {
        let {
          swiper: t,
          extendParams: a,
          on: o
        } = e;
        a({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
            scrollOnFocus: !0
          }
        }), t.a11y = {
          clicked: !1
        };
        let i, c, d = null,
          l = (new Date).getTime();

        function m(e) {
          const t = d;
          0 !== t.length && (0, n.s)(t, e)
        }

        function f(e) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function g(e) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function p(e, t) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("role", t)
          })
        }

        function u(e, t) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", t)
          })
        }

        function b(e, t) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("aria-label", t)
          })
        }

        function v(e) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !0)
          })
        }

        function h(e) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !1)
          })
        }

        function k(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const a = t.params.a11y,
            r = e.target;
          if (!t.pagination || !t.pagination.el || r !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches((0, s.c)(t.params.pagination.bulletClass))) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = (0, n.m)(t.navigation.prevEl);
              (0, n.m)(t.navigation.nextEl).includes(r) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? m(a.lastSlideMessage) : m(a.nextSlideMessage)), e.includes(r) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? m(a.firstSlideMessage) : m(a.prevSlideMessage))
            }
            t.pagination && r.matches((0, s.c)(t.params.pagination.bulletClass)) && r.click()
          }
        }

        function x() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function y() {
          return x() && t.params.pagination.clickable
        }
        const _ = (e, t, a) => {
            f(e), "BUTTON" !== e.tagName && (p(e, "button"), e.addEventListener("keydown", k)), b(e, a),
              function(e, t) {
                (e = (0, n.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", t)
                })
              }(e, t)
          },
          w = e => {
            c && c !== e.target && !c.contains(e.target) && (i = !0), t.a11y.clicked = !0
          },
          C = () => {
            i = !1, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1)
              })
            })
          },
          E = e => {
            l = (new Date).getTime()
          },
          j = e => {
            if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - l < 100) return;
            const a = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!a || !t.slides.includes(a)) return;
            c = a;
            const r = t.slides.indexOf(a) === t.activeIndex,
              s = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(a);
            r || s || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
              i || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(a.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(a)), 0), i = !1)
            }))
          },
          N = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && u(t.slides, e.itemRoleDescriptionMessage), e.slideRole && p(t.slides, e.slideRole);
            const a = t.slides.length;
            e.slideLabelMessage && t.slides.forEach((r, s) => {
              const n = t.params.loop ? parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s;
              b(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, a))
            })
          };
        o("beforeInit", () => {
          d = (0, n.c)("span", t.params.a11y.notificationClass), d.setAttribute("aria-live", "assertive"), d.setAttribute("aria-atomic", "true")
        }), o("afterInit", () => {
          t.params.a11y.enabled && (() => {
            const e = t.params.a11y;
            t.el.append(d);
            const a = t.el;
            e.containerRoleDescriptionMessage && u(a, e.containerRoleDescriptionMessage), e.containerMessage && b(a, e.containerMessage), e.containerRole && p(a, e.containerRole);
            const s = t.wrapperEl,
              o = e.id || s.getAttribute("id") || `swiper-wrapper-${i=16,void 0===i&&(i=16),"x".repeat(i).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var i;
            const c = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var l, m;
            l = s, m = o, (l = (0, n.m)(l)).forEach(e => {
                e.setAttribute("id", m)
              }),
              function(e, t) {
                (e = (0, n.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", t)
                })
              }(s, c), N();
            let {
              nextEl: f,
              prevEl: g
            } = t.navigation ? t.navigation : {};
            f = (0, n.m)(f), g = (0, n.m)(g), f && f.forEach(t => _(t, o, e.nextSlideMessage)), g && g.forEach(t => _(t, o, e.prevSlideMessage)), y() && (0, n.m)(t.pagination.el).forEach(e => {
              e.addEventListener("keydown", k)
            }), (0, r.g)().addEventListener("visibilitychange", E), t.el.addEventListener("focus", j, !0), t.el.addEventListener("focus", j, !0), t.el.addEventListener("pointerdown", w, !0), t.el.addEventListener("pointerup", C, !0)
          })()
        }), o("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && N()
        }), o("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled && function() {
            if (t.params.loop || t.params.rewind || !t.navigation) return;
            const {
              nextEl: e,
              prevEl: a
            } = t.navigation;
            a && (t.isBeginning ? (v(a), g(a)) : (h(a), f(a))), e && (t.isEnd ? (v(e), g(e)) : (h(e), f(e)))
          }()
        }), o("paginationUpdate", () => {
          t.params.a11y.enabled && function() {
            const e = t.params.a11y;
            x() && t.pagination.bullets.forEach(a => {
              t.params.pagination.clickable && (f(a), t.params.pagination.renderBullet || (p(a, "button"), b(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, n.i)(a) + 1)))), a.matches((0, s.c)(t.params.pagination.bulletActiveClass)) ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")
            })
          }()
        }), o("destroy", () => {
          t.params.a11y.enabled && function() {
            d && d.remove();
            let {
              nextEl: e,
              prevEl: a
            } = t.navigation ? t.navigation : {};
            e = (0, n.m)(e), a = (0, n.m)(a), e && e.forEach(e => e.removeEventListener("keydown", k)), a && a.forEach(e => e.removeEventListener("keydown", k)), y() && (0, n.m)(t.pagination.el).forEach(e => {
              e.removeEventListener("keydown", k)
            }), (0, r.g)().removeEventListener("visibilitychange", E), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", j, !0), t.el.removeEventListener("pointerdown", w, !0), t.el.removeEventListener("pointerup", C, !0))
          }()
        })
      }
    }
  }
]);