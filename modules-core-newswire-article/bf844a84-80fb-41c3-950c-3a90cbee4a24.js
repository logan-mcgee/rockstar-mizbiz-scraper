! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bf844a84-80fb-41c3-950c-3a90cbee4a24", e._sentryDebugIdIdentifier = "sentry-dbid-bf844a84-80fb-41c3-950c-3a90cbee4a24")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9756], {
    39695: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => k
      });
      var t = s(71403),
        r = s(89779),
        c = s(53980),
        o = s(72862),
        i = s.n(o),
        n = s(74401),
        d = s(42756),
        l = s(40207);
      const m = {
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
        f = {
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
          pillBtn: "rockstargames-modules-core-newswire-articleba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-modules-core-newswire-articlec9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-modules-core-newswire-articlebfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-modules-core-newswire-articlea1cf623c9dd51dd05772a395d8311dac",
          expandedButton: "rockstargames-modules-core-newswire-articlef692df3414cf4d587df1739702e52732",
          unexpandedButton: "rockstargames-modules-core-newswire-articleba4683b82274b0f8ca98f97fd2b0a1c9",
          buttonText: "rockstargames-modules-core-newswire-articlec2fb2fb5ec39a5c3b3c14ee6c0505b53",
          expandedArea: "rockstargames-modules-core-newswire-articledd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-modules-core-newswire-articlec559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-modules-core-newswire-articled6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-modules-core-newswire-articleb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-modules-core-newswire-articlefe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-modules-core-newswire-articleb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlee23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-modules-core-newswire-articlee0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-modules-core-newswire-articledcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-modules-core-newswire-articlee047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-modules-core-newswire-articledaa32798c37b9055cd280b838972e63e",
          applestore: "rockstargames-modules-core-newswire-articledc4069c520d30eda3239cc1de09917ad",
          googleplay: "rockstargames-modules-core-newswire-articlee36f6e05f08b4bd9edef1950618493ca",
          switch: "rockstargames-modules-core-newswire-articleae7bc564778d8af6cf5f8a0491ef7dc8"
        };
      var u = s(46632);
      const g = e => {
          let {
            buttonText: a = "",
            link: t = "",
            platform: c = "",
            target: o = null,
            onClick: i,
            tabIndex: n
          } = e;
          const d = o ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [p.platformButton, p[c]].join(" "),
            m = c ? s(52917)(`./${c}.svg`) : null,
            f = (0, u.jsxs)(u.Fragment, {
              children: [m ? (0, u.jsx)("img", {
                src: m,
                alt: a
              }) : "", !m && (0, u.jsx)("div", {
                className: p.buttonText,
                children: a
              })]
            });
          return t.startsWith("http") ? (0, u.jsx)("a", {
            href: t,
            className: l,
            target: d,
            onClick: i,
            "aria-label": a,
            tabIndex: n,
            children: f
          }) : (0, u.jsx)(r.NavLink, {
            className: l,
            onClick: i,
            to: t,
            "aria-label": a,
            children: f
          })
        },
        k = e => {
          let {
            variant: a,
            buttonText: r = "Subscribe",
            buttonClassName: o,
            className: k,
            children: _,
            platformsAndLinks: b = [],
            trackingType: x = "buy",
            trackingParent: h,
            target: w = null,
            trackingOId: v = null
          } = e;
          const [y, N] = (0, t.useState)(!1), [M, C] = (0, t.useState)(!1), [j, S] = (0, t.useState)(200), {
            track: E
          } = (0, l.useGtmTrack)(), B = (0, t.useRef)(null), z = (0, t.useRef)(y), A = (0, t.useRef)(null);
          (0, t.useEffect)((() => {
            z.current = y
          }), [y]), (0, t.useEffect)((() => {
            const e = e => {
              z && !B?.current?.contains(e.target) && N(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []), (0, t.useEffect)((() => {
            const e = () => {
              y && (C(!0), N(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [y]), (0, t.useEffect)((() => {
            if (B?.current) {
              const e = 1e3 * Number(getComputedStyle(B.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              S(isNaN(e) ? 200 : e)
            }
          }), []), (0, t.useEffect)((() => {
            M && setTimeout((() => {
              C(!1)
            }), j)
          }), [M]);
          const D = e => {
            let {
              href: a,
              platform: s
            } = e;
            return () => {
              E({
                element_placement: h,
                event: "cta_store_link",
                link_url: a,
                text: s
              })
            }
          };
          return (0, u.jsxs)("div", {
            className: (0, n.classList)(p.container, k),
            children: [(0, u.jsx)(c.P.div, {
              className: p.content,
              animate: y ? "open" : "close",
              variants: m,
              "aria-hidden": !!y,
              children: _
            }), (0, u.jsxs)(c.P.div, {
              "data-variant": a,
              "data-animating": M,
              className: i()(y ? p.expandedButton : p.unexpandedButton),
              animate: y ? "open" : "closed",
              variants: f,
              initial: !1,
              ref: B,
              children: [(0, u.jsx)(c.P.button, {
                className: i()(p.buttonText, o),
                "aria-expanded": y,
                onClick: () => {
                  if (C(!0), N(!y), !y) switch (x) {
                    case "select_platform":
                      E({
                        element_placement: h,
                        event: "select_platform",
                        text: r?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      E({
                        element_placement: h,
                        event: "cta_link_account",
                        o_id: v,
                        text: r?.toLowerCase()
                      });
                      break;
                    case "buy":
                      E({
                        element_placement: h,
                        event: "cta_buy",
                        text: r?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      E({
                        element_placement: h,
                        event: "cta_store_link",
                        text: r?.toLowerCase()
                      });
                      break;
                    case "other":
                      E({
                        element_placement: h,
                        event: "cta_other",
                        text: r?.toLowerCase()
                      })
                  }
                },
                tabIndex: y ? -1 : 0,
                children: "string" == typeof r ? r : "Subscribe"
              }), (0, u.jsx)("div", {
                className: p.expandedArea,
                ref: A,
                "data-animate": y ? "open" : "closed",
                "aria-hidden": !y,
                style: {
                  height: y ? A?.current?.scrollHeight : 0
                },
                children: (0, u.jsxs)("div", {
                  children: [(0, u.jsx)("button", {
                    className: p.closeButton,
                    onClick: () => {
                      N(!1), C(!0), E({
                        element_placement: h,
                        event: "cta_other",
                        text: "close expanding platform button"
                      })
                    },
                    "aria-label": "Close",
                    tabIndex: y ? 0 : -1,
                    children: (0, u.jsx)("img", {
                      src: s(45537),
                      alt: "Close"
                    })
                  }), (0, u.jsx)("div", {
                    className: p.platformButtons,
                    children: b.length ? b.map((e => (0, u.jsx)(g, {
                      buttonText: e.buttonText ?? (0, d.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: D(e),
                      target: w,
                      tabIndex: y ? 0 : -1
                    }, `${e.key}-${e.href}-${e.platform}`))) : ""
                  })]
                })
              })]
            })]
          })
        }
    },
    26177: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => d
      });
      var t = s(26855),
        r = s.n(t);
      const c = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        o = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}');
      var i = s(46632);
      const n = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        d = e => {
          let a, {
            type: s = n.SPINNING
          } = e;
          switch (s) {
            case n.THREE_DOTS:
              a = o;
              break;
            case n.SPINNING:
            default:
              a = c
          }
          return (0, i.jsx)(r(), {
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
    67446: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => m
      });
      var t = s(71403),
        r = s(96717),
        c = s(20066),
        o = s(73167),
        i = s(98310),
        n = s(39493);
      const d = {
        pillBtn: "rockstargames-modules-core-newswire-articlee4a42eaa9bfb682035e61ac2e2a34515",
        selected: "rockstargames-modules-core-newswire-articleeb889d8958be54a67b790d7529530986",
        scCharacterCard: "rockstargames-modules-core-newswire-articledf279e92086c0d3c96905b3a91b369ed",
        scAvatar: "rockstargames-modules-core-newswire-articlec1890feda663c93b0f767890394cbdcf",
        scCharNames: "rockstargames-modules-core-newswire-articlee79d7f5515617d849d7d13cd4ff048ce",
        scCharacterStats: "rockstargames-modules-core-newswire-articlec721f3aeef9e5ae6b98adca1253e4709",
        scUserName: "rockstargames-modules-core-newswire-articleeabff0cc0139013f5a60fea6f48c56f6",
        scRpLevel: "rockstargames-modules-core-newswire-articleb1f87c58a800ad546200fbf17e029f35",
        scRpIcon: "rockstargames-modules-core-newswire-articlef1e0bcba6214698c490b8201bbd850b7"
      };
      var l = s(46632);
      const m = (0, r.withIntl)((e => {
        let {
          characterData: a
        } = e;
        const c = (0, r.useIntl)(),
          {
            platform: m,
            platformUsername: f,
            mugshotUrl: p,
            stats: u
          } = a,
          [g, k] = (0, t.useState)(p),
          _ = (0, o.A)(m, "large");
        return (0, l.jsxs)("div", {
          className: d.scCharacterCard,
          children: [(0, l.jsx)("div", {
            className: d.scAvatar,
            "data-size": "small",
            children: (0, l.jsx)("img", {
              src: g,
              alt: c.formatMessage(n.A.profile_selector_mugshot, {
                userName: f
              }),
              onError: () => {
                k(s(58989))
              }
            })
          }), (0, l.jsx)("div", {
            className: d.scCharacterStats,
            children: (0, l.jsxs)("div", {
              className: d.scCharNames,
              children: [(0, l.jsx)("img", {
                src: _.src,
                alt: _.alt
              }), (0, l.jsx)("div", {
                className: d.scUserName,
                "data-size": "small",
                children: f
              }), (0, l.jsx)("div", {
                className: d.scRp,
                children: (0, l.jsxs)("div", {
                  className: d.scRpLevel,
                  children: [(0, l.jsx)("img", {
                    className: d.scRpIcon,
                    src: (0, i.A)(u.overview.rank.value),
                    alt: c.formatMessage(n.A.profile_selector_rp_icon)
                  }), (0, l.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), c)
    },
    73167: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => t
      });
      const t = (e, a) => {
        switch (e) {
          case "pc":
            return "small" === a ? {
              src: s(89544),
              alt: "PC"
            } : {
              src: s(45710),
              alt: "PC"
            };
          case "ps4":
            return "small" === a ? {
              src: s(65636),
              alt: "PS4"
            } : {
              src: s(8318),
              alt: "PS4"
            };
          case "ps5":
            return "small" === a ? {
              src: s(20357),
              alt: "PS5"
            } : {
              src: s(52047),
              alt: "PS5"
            };
          case "xboxone":
            return "small" === a ? {
              src: s(17976),
              alt: "Xbox One"
            } : {
              src: s(60350),
              alt: "Xbox One"
            };
          case "xboxsx":
            return "small" === a ? {
              src: s(84923),
              alt: "Xbox Series X|S"
            } : {
              src: s(89825),
              alt: "Xbox Series X|S"
            };
          default:
            return {
              src: "", alt: ""
            }
        }
      }
    },
    98310: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => t
      });
      const t = e => s(e < 100 ? 36399 : e > 99 && e < 500 ? 92627 : e > 499 && e < 750 ? 43864 : 76425)
    },
    39493: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => t
      });
      const t = (0, s(96717).defineMessages)({
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
    62811: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => n
      });
      var t = s(89779);
      const r = {
        pillBtn: "rockstargames-modules-core-newswire-articleb59962d0e68ccd73b5ee2e571528d469",
        selected: "rockstargames-modules-core-newswire-articlef5c57dad202e0d6ff855d5a4aca2c804",
        plusButton: "rockstargames-modules-core-newswire-articlecffaf489342637258d28f9b3b718836a",
        small: "rockstargames-modules-core-newswire-articleb8abf927f0ba0af0d8ac0e9c77690d34",
        btnText: "rockstargames-modules-core-newswire-articlee6e56461bfc2e426c4abc5451cd17284",
        btnTexticon: "rockstargames-modules-core-newswire-articlecef9f9ce913d167a1fe2e7118a407cdd",
        whiteBtn: "rockstargames-modules-core-newswire-articleb257e0629b9f8e101791d7a948ed15be",
        blackBtn: "rockstargames-modules-core-newswire-articlecb03bccaee79394858682d2ce4d08253",
        transparentBtn: "rockstargames-modules-core-newswire-articled0460159a17533d4d23686d7dca76794",
        iconBtn: "rockstargames-modules-core-newswire-articleac61186c3c22346c9a4ee2cd2820d341",
        link: "rockstargames-modules-core-newswire-articlec5920e56149b82f20f4db2ad9d397495",
        xboxone: "rockstargames-modules-core-newswire-articlea7057f2e6d398341f57bc462716d0508",
        xboxseriesxs: "rockstargames-modules-core-newswire-articlea693ab5879f34d7dea1737d3172ed4e4",
        ps4: "rockstargames-modules-core-newswire-articlea029ff88fc9aef470aaeef8053f90436",
        ps5: "rockstargames-modules-core-newswire-articlee25638751cf3e7267db23c6a401fcc36",
        pc: "rockstargames-modules-core-newswire-articlee03d92653f19a7ae3c4b3d5137bc9909"
      };
      var c = s(46632);
      const o = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: r,
            ariaLabel: o
          } = e;
          return (0, c.jsx)("button", {
            className: s,
            onClick: t,
            style: r,
            type: "button",
            "aria-label": o,
            children: a
          })
        },
        i = e => {
          let {
            children: a,
            className: s,
            onClick: r,
            style: o,
            to: i,
            ariaLabel: n
          } = e;
          return (0, c.jsx)(t.NavLink, {
            className: s,
            onClick: r,
            style: o,
            to: i,
            "aria-label": n,
            children: a
          })
        },
        n = e => {
          let {
            btnColor: a = "#fff",
            className: s = "",
            consoleBtn: t,
            icon: n = "",
            img: d,
            labelColor: l = "#000",
            onClick: m,
            secondText: f,
            size: p,
            text: u,
            to: g,
            type: k = "",
            ariaLabel: _
          } = e;
          const b = [r.plusButton, r[k] ?? "", r[p] ?? "", r[t] ?? "", s].join(" "),
            x = {
              "--hvr-color": a ?? l,
              "--hvr-bg-color": l ?? a,
              "--hvr-border-color": a ?? l
            },
            h = (0, c.jsxs)(c.Fragment, {
              children: [d ? (0, c.jsx)("img", {
                src: d,
                alt: ""
              }) : "", (0, c.jsxs)("div", {
                className: r.btnText,
                icon: n,
                children: [u, f ? (0, c.jsx)("span", {
                  children: f
                }) : ""]
              })]
            });
          if (g) {
            if (g.startsWith("http")) {
              const e = g.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, c.jsx)("span", {
                onClick: m,
                onKeyDown: m,
                className: b,
                role: "button",
                "aria-label": _,
                tabIndex: 0,
                children: (0, c.jsx)("a", {
                  href: g,
                  target: e,
                  children: h
                })
              })
            }
            return (0, c.jsx)(i, {
              className: b,
              onClick: m,
              style: {
                ...x
              },
              to: g,
              ariaLabel: _,
              children: h
            })
          }
          return (0, c.jsx)(o, {
            className: b,
            onClick: m,
            style: {
              ...x
            },
            ariaLabel: _,
            children: h
          })
        }
    },
    52917: (e, a, s) => {
      var t = {
        "./applestore.svg": 4756,
        "./googleplay.svg": 12708,
        "./left.svg": 60900,
        "./pc.svg": 40648,
        "./ps.svg": 88504,
        "./ps3.svg": 38379,
        "./ps4.svg": 50052,
        "./ps5.svg": 1221,
        "./right.svg": 97195,
        "./switch.svg": 37551,
        "./x.svg": 45537,
        "./xbox.svg": 84484,
        "./xboxone.svg": 20920,
        "./xboxseriesxs.svg": 11128
      };

      function r(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = c, e.exports = r, r.id = 52917
    },
    4756: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    12708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    60900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    40648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    88504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    38379: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    50052: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    1221: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    97195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    37551: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    45537: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    84484: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    20920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    11128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
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
    }
  }
]);