try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c6a7b2f4-97a4-4876-859f-aaab37c8cc2b", e._sentryDebugIdIdentifier = "sentry-dbid-c6a7b2f4-97a4-4876-859f-aaab37c8cc2b")
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
  [6148], {
    48863(e, t, a) {
      "use strict";
      a.d(t, {
        U: () => b,
        A: () => p
      });
      var s = a(39793),
        o = a(93082),
        r = a(99225),
        n = a(88447),
        c = a(79955),
        i = a.n(c),
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
        u = {
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
        b = ({
          buttonText: e = "",
          link: t = "",
          platform: o = "",
          target: n = null,
          onClick: c,
          tabIndex: i,
          className: d,
          ...l
        }) => {
          const m = n ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            f = [u.platformButton, u[o], d].join(" "),
            g = o ? a(5328)(`./${o}.svg`) : null,
            b = (0, s.jsxs)(s.Fragment, {
              children: [g ? (0, s.jsx)("img", {
                src: g,
                alt: e
              }) : "", !g && (0, s.jsx)("div", {
                className: u.buttonText,
                children: e
              })]
            });
          return t ? t.startsWith("http") ? (0, s.jsx)("a", {
            href: t,
            className: f,
            target: m,
            onClick: c,
            "aria-label": e,
            tabIndex: i,
            ...l,
            children: b
          }) : (0, s.jsx)(r.NavLink, {
            className: f,
            onClick: c,
            to: t,
            "aria-label": e,
            ...l,
            children: b
          }) : (0, s.jsx)("button", {
            className: f,
            onClick: c,
            "aria-label": e,
            tabIndex: i,
            ...l,
            children: b
          })
        },
        p = ({
          variant: e,
          buttonText: t = "Subscribe",
          buttonClassName: r,
          className: c,
          children: p,
          platformsAndLinks: k = [],
          trackingType: v = "buy",
          trackingParent: h,
          target: w = null,
          trackingOId: x = null,
          returnUrl: _ = null
        }) => {
          const y = (0, d.useRockstarTokenPing)(),
            [C, L] = (0, o.useState)(!1),
            [T, E] = (0, o.useState)(!1),
            [N, j] = (0, o.useState)(200),
            {
              track: z
            } = (0, m.useGtmTrack)(),
            B = (0, o.useRef)(null),
            I = (0, o.useRef)(null),
            D = (0, o.useRef)(null),
            O = (0, o.useRef)(null),
            [S, M] = (0, o.useState)(0),
            R = (0, o.useRef)(null),
            A = () => {
              D.current?.blur(), E(!0), L(!1), R.current = window.setTimeout(() => {
                I.current?.focus()
              }, 30)
            },
            P = (0, o.useCallback)(() => {
              z({
                element_placement: h?.toLowerCase(),
                event: "cta_other",
                text: "close expanding platform button"
              }), A()
            }, [z, h]);
          (0, o.useEffect)(() => () => {
            null !== R.current && window.clearTimeout(R.current)
          }, []), (0, o.useLayoutEffect)(() => {
            C && O.current ? M(O.current.scrollHeight) : M(0)
          }, [C]), (0, o.useEffect)(() => {
            if (!C) return;
            const e = e => {
              const t = e.target;
              B.current && !B.current.contains(t) && document.contains(t) && (A(), R?.current && (R.current = window.setTimeout(() => {
                I.current?.blur()
              }, 40)))
            };
            return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
              document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
            }
          }, [C]), (0, o.useEffect)(() => {
            const e = () => {
              C && (E(!0), L(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [C]), (0, o.useLayoutEffect)(() => {
            if (B?.current) {
              const e = getComputedStyle(B.current).getPropertyValue("--expandingPlatformButton-expandDuration"),
                t = parseFloat(e) * (e.includes("ms") ? 1 : 1e3);
              requestAnimationFrame(() => {
                j(isNaN(t) ? 200 : t)
              })
            }
          }, []), (0, o.useEffect)(() => {
            let e;
            return T && (e = window.setTimeout(() => {
              E(!1)
            }, N)), () => {
              e && window.clearTimeout(e)
            }
          }, [T, N]);
          const F = ({
            href: e,
            platform: t
          }) => async () => {
            if (e) z({
              element_placement: h?.toLowerCase(),
              event: "cta_store_link",
              link_url: e,
              text: t
            });
            else {
              const e = (0, d.findPlatform)(t)?.onlineService;
              if (e && "sc" !== e) {
                z({
                  element_placement: h?.toLowerCase(),
                  event: "cta_link_account",
                  text: `link ${e}`
                });
                const t = await (0, d.generateTpaLink)({
                  pingBearer: y,
                  returnUrl: _ || window.location.pathname,
                  service: e
                });
                window.location.assign(t.href)
              }
            }
          };
          return "string" != typeof t ? null : (0, s.jsxs)("div", {
            className: (0, l.default)(u.container, c),
            children: [(0, s.jsx)(n.motion.div, {
              className: u.content,
              animate: C ? "open" : "close",
              variants: f,
              "aria-hidden": !!C,
              children: p
            }), (0, s.jsxs)(n.motion.div, {
              "data-variant": e,
              "data-animating": T,
              className: (0, l.default)(C ? u.expandedButton : u.unexpandedButton),
              animate: C ? "open" : "closed",
              variants: g,
              initial: !1,
              ref: B,
              children: [(0, s.jsx)(n.motion.button, {
                className: (0, l.default)(u.buttonText, r),
                "aria-expanded": C,
                onClick: () => {
                  if (E(!0), L(!C), !C) switch (v) {
                    case "select_platform":
                      z({
                        element_placement: h?.toLowerCase(),
                        event: "select_platform",
                        text: t?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      z({
                        element_placement: h?.toLowerCase(),
                        event: "cta_link_account",
                        o_id: x,
                        text: t?.toLowerCase()
                      });
                      break;
                    case "buy":
                      z({
                        element_placement: h?.toLowerCase(),
                        event: "cta_buy",
                        text: t?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      z({
                        element_placement: h?.toLowerCase(),
                        event: "cta_store_link",
                        text: t?.toLowerCase()
                      });
                      break;
                    case "other":
                      z({
                        element_placement: h?.toLowerCase(),
                        event: "cta_other",
                        text: t?.toLowerCase()
                      })
                  }
                },
                ref: I,
                children: t
              }), (0, s.jsx)("div", {
                className: u.expandedArea,
                ref: O,
                "data-animate": C ? "open" : "closed",
                "aria-hidden": !C,
                style: {
                  height: S
                },
                children: (0, s.jsx)(i(), {
                  active: C,
                  focusTrapOptions: {
                    preventScroll: !0,
                    returnFocusOnDeactivate: !1,
                    escapeDeactivates: !0,
                    clickOutsideDeactivates: !0,
                    onDeactivate: A,
                    checkCanFocusTrap: e => new Promise(t => {
                      const a = setInterval(() => {
                        "hidden" !== getComputedStyle(e[0]).visibility && (t(), clearInterval(a))
                      }, 5)
                    })
                  },
                  children: (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("button", {
                      className: u.closeButton,
                      onClick: P,
                      "aria-label": "Close",
                      tabIndex: C ? 0 : -1,
                      ref: D,
                      children: (0, s.jsx)("img", {
                        src: a(66426),
                        alt: "Close"
                      })
                    }), (0, s.jsx)("div", {
                      className: u.platformButtons,
                      children: k.length ? k.map(e => (0, s.jsx)(b, {
                        buttonText: e.buttonText ?? (0, d.findPlatform)(e.platform)?.friendlyName ?? "",
                        link: e.href,
                        platform: e.platform,
                        onClick: F(e),
                        target: w,
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
    24834(e, t, a) {
      "use strict";
      var s = a(40283);
      const o = [{
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
        } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = o.findIndex(t => Object.entries(t.sites).findIndex(([t, s]) => s === a && (e = {
          site: t,
          subDomain: s
        }, !0)) >= 0), n = o[r >= 0 ? r : 0], c = o.find(e => e.id === n.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, s.omit)((0, s.merge)({}, c, {
          currentSite: e
        }, n), "fallbackEnvironment")
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
      const s = {
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

      function o(e) {
        const t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          const t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      o.keys = function() {
        return Object.keys(s)
      }, o.resolve = r, e.exports = o, o.id = 5328
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
    }
  }
]);