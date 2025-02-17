! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "aa2bc22b-1a83-4b33-800f-27756b94b256", e._sentryDebugIdIdentifier = "sentry-dbid-aa2bc22b-1a83-4b33-800f-27756b94b256")
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
  [9384], {
    56666: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var n = t(62229),
        r = t(9623),
        s = t(97762),
        o = t(65485),
        c = t.n(o),
        i = t(95966),
        l = t(97652);
      const d = {
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
        m = {
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
          pillBtn: "rockstargames-modules-core-newswire-articleed7115facef4ace39e8c7486e9066fe1",
          selected: "rockstargames-modules-core-newswire-articlee7705468e2dbcfc45d23ef5047671698",
          container: "rockstargames-modules-core-newswire-articlefc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-modules-core-newswire-articleb12c469ae4536819db4253c10b2cd11d",
          expandedButton: "rockstargames-modules-core-newswire-articlebb945d977a4db6fdd9206dbfe8581304",
          unexpandedButton: "rockstargames-modules-core-newswire-articleeaa10e0601812da4ea334974165d92ec",
          buttonText: "rockstargames-modules-core-newswire-articlec240c5768c5acdd2bc6022568ef877f0",
          expandedArea: "rockstargames-modules-core-newswire-articlee752e3ffffce454f84c993a62a279f87",
          closeButton: "rockstargames-modules-core-newswire-articleee432a5defea7b8181973d3a9ad3190b",
          platformButtons: "rockstargames-modules-core-newswire-articlee950c05307f67ce36d561a09027fd844",
          platformButton: "rockstargames-modules-core-newswire-articlefa40c93ee13fdec88bb8dc08ce36353a",
          xbox: "rockstargames-modules-core-newswire-articlee6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-modules-core-newswire-articlec03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-modules-core-newswire-articledde1b553776bdd59373d22a43479de29",
          ps: "rockstargames-modules-core-newswire-articledd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-modules-core-newswire-articleed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-modules-core-newswire-articlef046700558956d566323b32d87c4a54f",
          pc: "rockstargames-modules-core-newswire-articleffc20241c500599d4ee134fcffd66961",
          applestore: "rockstargames-modules-core-newswire-articlee68d88a0e9f24a2f0bcf7da8a0e1b388",
          googleplay: "rockstargames-modules-core-newswire-articled0d623dce429f6ae2fd898e1d551257e",
          switch: "rockstargames-modules-core-newswire-articlee8e3ea0f1d334667f3928f696308060e"
        };
      var g = t(91029);
      const f = e => {
          let {
            buttonText: a = "",
            link: n = "",
            platform: s = "",
            target: o = null,
            onClick: c,
            tabIndex: i
          } = e;
          const l = o ?? (n.startsWith(document.location.origin) ? "_self" : "_blank"),
            d = [u.platformButton, u[s]].join(" "),
            m = s ? t(5328)(`./${s}.svg`) : null,
            f = (0, g.jsxs)(g.Fragment, {
              children: [m ? (0, g.jsx)("img", {
                src: m,
                alt: a
              }) : "", !m && (0, g.jsx)("div", {
                className: u.buttonText,
                children: a
              })]
            });
          return n.startsWith("http") ? (0, g.jsx)("a", {
            href: n,
            className: d,
            target: l,
            onClick: c,
            "aria-label": a,
            tabIndex: i,
            children: f
          }) : (0, g.jsx)(r.NavLink, {
            className: d,
            onClick: c,
            to: n,
            "aria-label": a,
            children: f
          })
        },
        b = e => {
          let {
            variant: a,
            buttonText: r = "Subscribe",
            buttonClassName: o,
            className: b,
            children: k,
            platformsAndLinks: p = [],
            trackingType: x = "buy",
            trackingParent: h,
            target: _ = null,
            trackingOId: w = null
          } = e;
          const [v, T] = (0, n.useState)(!1), [A, y] = (0, n.useState)(!1), [S, j] = (0, n.useState)(200), {
            track: N
          } = (0, l.h)(), E = (0, n.useRef)(null), G = (0, n.useRef)(v), C = (0, n.useRef)(null);
          (0, n.useEffect)((() => {
            G.current = v
          }), [v]), (0, n.useEffect)((() => {
            const e = e => {
              G && !E?.current?.contains(e.target) && T(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []), (0, n.useEffect)((() => {
            const e = () => {
              v && (y(!0), T(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [v]), (0, n.useEffect)((() => {
            if (E?.current) {
              const e = 1e3 * Number(getComputedStyle(E.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              j(isNaN(e) ? 200 : e)
            }
          }), []), (0, n.useEffect)((() => {
            A && setTimeout((() => {
              y(!1)
            }), S)
          }), [A]);
          const L = e => {
            let {
              href: a,
              platform: t
            } = e;
            return () => {
              N({
                element_placement: h,
                event: "cta_store_link",
                link_url: a,
                text: t
              })
            }
          };
          return (0, g.jsxs)("div", {
            className: (0, i.classList)(u.container, b),
            children: [(0, g.jsx)(s.P.div, {
              className: u.content,
              animate: v ? "open" : "close",
              variants: d,
              "aria-hidden": !!v,
              children: k
            }), (0, g.jsxs)(s.P.div, {
              "data-variant": a,
              "data-animating": A,
              className: c()(v ? u.expandedButton : u.unexpandedButton),
              animate: v ? "open" : "closed",
              variants: m,
              initial: !1,
              ref: E,
              children: [(0, g.jsx)(s.P.button, {
                className: c()(u.buttonText, o),
                "aria-expanded": v,
                onClick: () => {
                  if (y(!0), T(!v), !v) switch (x) {
                    case "select_platform":
                      N({
                        element_placement: h,
                        event: "select_platform",
                        text: r?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      N({
                        element_placement: h,
                        event: "cta_link_account",
                        o_id: w,
                        text: r?.toLowerCase()
                      });
                      break;
                    case "buy":
                      N({
                        element_placement: h,
                        event: "cta_buy",
                        text: r?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      N({
                        element_placement: h,
                        event: "cta_store_link",
                        text: r?.toLowerCase()
                      });
                      break;
                    case "other":
                      N({
                        element_placement: h,
                        event: "cta_other",
                        text: r?.toLowerCase()
                      })
                  }
                },
                tabIndex: v ? -1 : 0,
                children: "string" == typeof r ? r : "Subscribe"
              }), (0, g.jsx)("div", {
                className: u.expandedArea,
                ref: C,
                "data-animate": v ? "open" : "closed",
                "aria-hidden": !v,
                style: {
                  height: v ? C?.current?.scrollHeight : 0
                },
                children: (0, g.jsxs)("div", {
                  children: [(0, g.jsx)("button", {
                    className: u.closeButton,
                    onClick: () => {
                      T(!1), y(!0), N({
                        element_placement: h,
                        event: "cta_other",
                        text: "close expanding platform button"
                      })
                    },
                    "aria-label": "Close",
                    tabIndex: v ? 0 : -1,
                    children: (0, g.jsx)("img", {
                      src: t(66426),
                      alt: "Close"
                    })
                  }), (0, g.jsx)("div", {
                    className: u.platformButtons,
                    children: p.length ? p.map((e => (0, g.jsx)(f, {
                      buttonText: e.buttonText ?? (0, i.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: L(e),
                      target: _,
                      tabIndex: v ? 0 : -1
                    }, `${e.key}-${e.href}-${e.platform}`))) : ""
                  })]
                })
              })]
            })]
          })
        }
    },
    9137: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var n = t(23112),
        r = t.n(n);
      const s = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        o = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}');
      var c = t(91029);
      const i = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        l = e => {
          let a, {
            type: t = i.SPINNING
          } = e;
          switch (t) {
            case i.THREE_DOTS:
              a = o;
              break;
            case i.SPINNING:
            default:
              a = s
          }
          return (0, c.jsx)(r(), {
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
    79512: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var n = t(9623);
      const r = {
        pillBtn: "rockstargames-modules-core-newswire-articlea76545929bba4f1522661c9f297ea3c5",
        selected: "rockstargames-modules-core-newswire-articlee5b12527bec7eae7fce9642c9827cc3b",
        plusButton: "rockstargames-modules-core-newswire-articleb35e9ba36ecaabe08c02c44808110761",
        small: "rockstargames-modules-core-newswire-articleb3ba679464048120f8440e7ae0d14086",
        btnText: "rockstargames-modules-core-newswire-articlee146813e6b911567a15379239351bb9f",
        btnTexticon: "rockstargames-modules-core-newswire-articleadd785fa73d6a7f8cdf490add2819974",
        whiteBtn: "rockstargames-modules-core-newswire-articled94aba4fb4bae812e14f8715816752c2",
        blackBtn: "rockstargames-modules-core-newswire-articled3207a3907ff5e6cc1498c67d5562087",
        transparentBtn: "rockstargames-modules-core-newswire-articled4515b6bf9a4c714239cac9e27932235",
        iconBtn: "rockstargames-modules-core-newswire-articlea305be36306fd7f0977b052ccab54910",
        link: "rockstargames-modules-core-newswire-articlea73b743df91203999c432aceb1093e62",
        xboxone: "rockstargames-modules-core-newswire-articlecadebea37980f01b56560143374013b3",
        xboxseriesxs: "rockstargames-modules-core-newswire-articlec28e2bcbd4ed4fc95b67860cb7033999",
        ps4: "rockstargames-modules-core-newswire-articleaf1b302b53e77d0da20f92de2973fd29",
        ps5: "rockstargames-modules-core-newswire-articleb5164622a2b180ed2b04eab4d489763b",
        pc: "rockstargames-modules-core-newswire-articlec4a7b17bb99afb02a9f9b9b133be7844"
      };
      var s = t(91029);
      const o = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: r,
            ariaLabel: o
          } = e;
          return (0, s.jsx)("button", {
            className: t,
            onClick: n,
            style: r,
            type: "button",
            "aria-label": o,
            children: a
          })
        },
        c = e => {
          let {
            children: a,
            className: t,
            onClick: r,
            style: o,
            to: c,
            ariaLabel: i
          } = e;
          return (0, s.jsx)(n.NavLink, {
            className: t,
            onClick: r,
            style: o,
            to: c,
            "aria-label": i,
            children: a
          })
        },
        i = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: n,
            icon: i = "",
            img: l,
            labelColor: d = "#000",
            onClick: m,
            secondText: u,
            size: g,
            text: f,
            to: b,
            type: k = "",
            ariaLabel: p
          } = e;
          const x = [r.plusButton, r[k] ?? "", r[g] ?? "", r[n] ?? "", t].join(" "),
            h = {
              "--hvr-color": a ?? d,
              "--hvr-bg-color": d ?? a,
              "--hvr-border-color": a ?? d
            },
            _ = (0, s.jsxs)(s.Fragment, {
              children: [l ? (0, s.jsx)("img", {
                src: l,
                alt: ""
              }) : "", (0, s.jsxs)("div", {
                className: r.btnText,
                icon: i,
                children: [f, u ? (0, s.jsx)("span", {
                  children: u
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                onClick: m,
                onKeyDown: m,
                className: x,
                role: "button",
                "aria-label": p,
                tabIndex: 0,
                children: (0, s.jsx)("a", {
                  href: b,
                  target: e,
                  children: _
                })
              })
            }
            return (0, s.jsx)(c, {
              className: x,
              onClick: m,
              style: {
                ...h
              },
              to: b,
              ariaLabel: p,
              children: _
            })
          }
          return (0, s.jsx)(o, {
            className: x,
            onClick: m,
            style: {
              ...h
            },
            ariaLabel: p,
            children: _
          })
        }
    },
    29216: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => O
      });
      var n = t(62229),
        r = t(9623),
        s = t(97762),
        o = t(42457),
        c = t(95966),
        i = t(97652),
        l = t(9137),
        d = t(81788);
      const m = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        u = (0, d.defineMessages)({
          engagement_legal_text: {
            id: "engagement_legal_text",
            defaultMessage: "Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms."
          },
          engagement_faq: {
            id: "engagement_faq",
            defaultMessage: "FAQ"
          },
          engagement_faqs: {
            id: "engagement_faqs",
            defaultMessage: "FAQs"
          },
          engagement_link_account: {
            id: "engagement_link_account",
            defaultMessage: "Link Another Account"
          },
          engagement_link_console_account: {
            id: "engagement_link_console_account",
            defaultMessage: "Link Game Account"
          }
        });
      var g = t(92440),
        f = t(79512),
        b = t(91029);
      const k = e => {
          let {
            legalText: a
          } = e;
          return (0, b.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: a
            }
          })
        },
        p = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        x = e => {
          let {
            s: a,
            content: t,
            refLanding: n,
            loggedIn: r,
            addClaim: s,
            signin: o,
            landingSlide: c
          } = e;
          return (0, b.jsxs)("div", {
            className: [a.contentContainer, a[c], a.landingSlide].join(" "),
            ref: n,
            children: [(0, b.jsx)("img", {
              src: t.introScreen.image.sources.mobile || p,
              className: a.moduleImageMobile,
              alt: t.introScreen.image.alt
            }), (0, b.jsxs)("div", {
              className: a.topContent,
              children: [(0, b.jsx)("div", {
                className: a.textContent,
                children: (0, b.jsxs)("div", {
                  className: a.alert,
                  children: [(0, b.jsx)("div", {
                    className: a.badge,
                    children: t.introScreen.tag
                  }), (0, b.jsxs)("div", {
                    className: a.alertText,
                    children: [(0, b.jsx)("h2", {
                      children: t.introScreen.headline
                    }), (0, b.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: t.introScreen.body
                      }
                    })]
                  })]
                })
              }), (0, b.jsx)("div", {
                className: a.btnContainer,
                children: (0, b.jsx)(f.A, {
                  text: r ? t.introScreen.btnText.loggedIn : t.introScreen.btnText.loggedOut,
                  onClick: r ? s : o
                })
              })]
            }), (0, b.jsx)("div", {
              className: a.bottomContent,
              children: (0, b.jsx)("div", {
                className: a.legal,
                children: (0, b.jsx)(k, {
                  legalText: t.legalText
                })
              })
            })]
          })
        };
      var h = t(80725),
        _ = t(50216),
        w = t(20270),
        v = t(12363);
      const T = e => {
        let {
          s: a,
          content: t,
          refSuccess: r,
          successSlide: s,
          characterList: o,
          linkAccountUrl: c,
          linkMoreAccounts: i,
          linkAccountBtn: l
        } = e;
        const d = (0, n.createRef)(),
          m = (0, n.createRef)(),
          u = (0, n.createRef)(),
          [g, f] = (0, n.useState)(),
          [p, x] = (0, n.useState)(!1),
          [T, A] = (0, n.useState)(),
          [y, S] = (0, n.useState)(!1),
          [j, N] = (0, n.useState)(!0);
        return (0, n.useEffect)((() => {
          const e = () => {
            d?.current && x(d?.current?.scrollWidth > d?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [d]), (0, n.useEffect)((() => {
          f({
            nextEl: m?.current,
            prevEl: u?.current
          })
        }), [u?.current, m?.current]), (0, b.jsxs)("div", {
          className: [a.contentContainer, a[s], a.successSlide].join(" "),
          "data-type": "long",
          ref: r,
          children: [(0, b.jsxs)("div", {
            className: a.topContent,
            children: [(0, b.jsxs)("div", {
              className: a.alert,
              children: [(0, b.jsx)("div", {
                className: a.successAlert
              }), (0, b.jsxs)("div", {
                className: a.alertText,
                children: [(0, b.jsx)("h3", {
                  children: t.successScreen.headline
                }), (0, b.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: t.successScreen.body
                  }
                })]
              })]
            }), (0, b.jsxs)("div", {
              className: a.swiperWrap,
              children: [(0, b.jsx)("div", {
                className: a.swiperContainer,
                ref: d,
                children: (0, b.jsxs)(h.RC, {
                  mousewheel: {
                    releaseOnEdges: !0
                  },
                  touchReleaseOnEdges: !0,
                  loop: !1,
                  grabCursor: p,
                  slidesPerView: "auto",
                  speed: 700,
                  slidesOffsetAfter: 100,
                  navigation: g,
                  modules: [_.Vx, _.Jq],
                  onInit: e => {
                    A(e)
                  },
                  onSlideChange: e => {
                    S(e?.isEnd), N(e?.isBeginning)
                  },
                  children: [o.map((e => (0, b.jsx)(h.qr, {
                    tabIndex: "0",
                    children: (0, n.createElement)(w.CharacterCard, {
                      characterData: e,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`
                    })
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))), (0, b.jsx)(h.qr, {
                    children: (0, b.jsx)(v.A, {
                      className: [a.linkMore, o.length > 0 ? a.withIcon : ""].join(" "),
                      to: c,
                      onClick: i,
                      children: (0, b.jsx)("div", {
                        className: a.btnText,
                        children: l
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, b.jsx)("button", {
                className: a.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: u,
                onClick: () => {
                  T?.slidePrev()
                },
                disabled: j,
                "data-hidden": !p
              }), (0, b.jsx)("button", {
                className: a.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: m,
                onClick: () => {
                  T?.slideNext()
                },
                disabled: y,
                "data-hidden": !p
              })]
            })]
          }), (0, b.jsx)("div", {
            className: a.legal,
            children: (0, b.jsx)(k, {
              legalText: t.legalText
            })
          })]
        })
      };
      var A = t(56666);
      const y = e => {
          let {
            s: a,
            content: t,
            unlinkedSlide: n,
            refUnlinked: r,
            linkConsoleText: s,
            platformLogin: o,
            giftId: c
          } = e;
          return (0, b.jsxs)("div", {
            className: [a.contentContainer, a[n], a.unlinkedSlide, a.textContent].join(" "),
            ref: r,
            children: [(0, b.jsx)("div", {
              className: a.textContent,
              children: (0, b.jsxs)("div", {
                className: a.platformButtonContainer,
                children: [(0, b.jsx)("div", {
                  className: a.errorAlert
                }), (0, b.jsx)("h3", {
                  children: t.unlinkedScreen.headline
                }), (0, b.jsx)(A.A, {
                  variant: "secondary",
                  buttonText: s,
                  platformsAndLinks: [{
                    href: o("np"),
                    key: "ps",
                    platform: "ps",
                    translated: !0
                  }, {
                    href: o("xbox"),
                    key: "xbox",
                    platform: "xbox",
                    translated: !0
                  }],
                  trackingType: "link_account",
                  trackingParent: "WOC",
                  target: "_self",
                  trackingOId: c,
                  children: (0, b.jsx)("div", {
                    className: a.alert,
                    children: (0, b.jsx)("div", {
                      className: a.alertText,
                      children: (0, b.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: t.unlinkedScreen.body
                        }
                      })
                    })
                  })
                })]
              })
            }), (0, b.jsx)("div", {
              className: a.legal,
              children: (0, b.jsx)(k, {
                legalText: t.legalText
              })
            })]
          })
        },
        S = e => {
          let {
            s: a,
            errorSlide: t,
            content: n,
            refError: r
          } = e;
          return (0, b.jsxs)("div", {
            className: [a.contentContainer, a[t], a.errorSlide, a.textContent].join(" "),
            ref: r,
            children: [(0, b.jsxs)("div", {
              className: a.textContent,
              children: [(0, b.jsxs)("div", {
                className: a.alert,
                children: [(0, b.jsx)("div", {
                  className: a.errorAlert
                }), (0, b.jsx)("div", {
                  className: a.alertText,
                  children: (0, b.jsx)("h3", {
                    children: n.errorScreen.headline
                  })
                })]
              }), (0, b.jsx)(f.A, {
                text: n.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, b.jsx)("div", {
              className: a.legal,
              children: (0, b.jsx)(k, {
                legalText: n.legalText
              })
            })]
          })
        };
      var j = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e.disabled = "disabled", e
      }(j || {});
      const N = {
          pillBtn: "rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d",
          selected: "rockstargames-modules-core-newswire-articleb58430ad013dcff6fef7da7166cc691f",
          interestTrackerWrapper: "rockstargames-modules-core-newswire-articled2b8c4d79af33709f68b37001ab7be39",
          interestTracker: "rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f",
          loader: "rockstargames-modules-core-newswire-articled8c578c46f36662f7652cc76eac7da9b",
          moduleImage: "rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844",
          mobileImgContainer: "rockstargames-modules-core-newswire-articlec0fc20e5997ec0175e466407b77f13ea",
          moduleImageMobile: "rockstargames-modules-core-newswire-articlebe574bc57f2a974b9acfab41bf011e87",
          slideContainer: "rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c",
          contentContainer: "rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d",
          landingSlide: "rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177",
          textContent: "rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e",
          successSlide: "rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284",
          unlinkedSlide: "rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d",
          platformButtonContainer: "rockstargames-modules-core-newswire-articlecac0eb7158ec985ab3ee6372a2bd7672",
          errorSlide: "rockstargames-modules-core-newswire-articlec55d286bddb7bc024ba481baa3f25282",
          btnContainer: "rockstargames-modules-core-newswire-articlef4b714d7985247039d190db0652b8ceb",
          topContent: "rockstargames-modules-core-newswire-articlede05099174e82770aeae6cd301329294",
          bottomContent: "rockstargames-modules-core-newswire-articlea01ac7c10f297d8150a9b802bedb72af",
          legal: "rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54",
          faq: "rockstargames-modules-core-newswire-articlef56f546a21ace49c216e9a67228efb66",
          faqLink: "rockstargames-modules-core-newswire-articlef11c7041488926e7c7f25fc224f98947",
          badge: "rockstargames-modules-core-newswire-articlebcac1dcfa5b088eab1e65fc68e8c85a3",
          hidden: "rockstargames-modules-core-newswire-articlede0d2e1871164ef762659167bbd6529a",
          visible: "rockstargames-modules-core-newswire-articleb344d81cd5eafc49a6b22f62e6e7f76f",
          onScreen: "rockstargames-modules-core-newswire-articleae620b51e3ff54bcb035a20296ee980c",
          offScreen: "rockstargames-modules-core-newswire-articlec5da19bfed6924ef3a54c7b6950850dd",
          alert: "rockstargames-modules-core-newswire-articled18a7942f6ffe1c595090c27db4ed3cf",
          alertText: "rockstargames-modules-core-newswire-articlecbddf3c3597e3da9c2cb9388de7ea8f8",
          errorAlert: "rockstargames-modules-core-newswire-articled3d7cc42ef277206a733e4cb57942870",
          successAlert: "rockstargames-modules-core-newswire-articled0d2bcc799b1f77be3797b44c90a217d",
          linkMore: "rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a",
          withIcon: "rockstargames-modules-core-newswire-articleb1c731df00d3a0b945adcfb95b5e026e",
          btnText: "rockstargames-modules-core-newswire-articleea24dcc72092b2111a1bc9b420d3595e",
          swiperContainer: "rockstargames-modules-core-newswire-articleba3a5dd56ead99e725ea9031a0105852",
          swiperWrap: "rockstargames-modules-core-newswire-articlece299e602293eb072f2aa29f92ade94d",
          swiperButton: "rockstargames-modules-core-newswire-articlebecae27bc56d3d7ce5e33da63b298355",
          swiperBtnPrev: "rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b",
          swiperBtnNext: "rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf",
          spinner: "rockstargames-modules-core-newswire-articlec596ce72795db40bd64a752fcff020f2"
        },
        {
          host: E,
          login: G,
          authHost: C,
          clientId: L
        } = (0, c.getConfigForDomain)(),
        O = (0, d.withIntl)((e => {
          let {
            giftId: a,
            location: t = "gtaplus_site",
            introScreen: m,
            errorScreen: f,
            unlinkedScreen: k,
            successScreen: h,
            jumpLinkId: _,
            legalText: w
          } = e;
          const v = (0, c.useLocale)(),
            A = {
              errorScreen: {
                btnText: f?.errorButton || "",
                headline: f?.errorHeadline || ""
              },
              introScreen: {
                body: m?.introContent || "",
                btnText: {
                  loggedIn: m?.btnTextLoggedIn || "",
                  loggedOut: m?.btnTextLoggedOut || ""
                },
                headline: m?.introHeadline || "",
                image: {
                  alt: m?.image?.alt || m?.introHeadline || "",
                  sources: {
                    desktop: (0, g.useGetCdnSource)(m?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, g.useGetCdnSource)(m?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: m?.tag || ""
              },
              legalText: w,
              successScreen: {
                body: h?.successContent || "",
                headline: h?.successHeadline || ""
              },
              unlinkedScreen: {
                body: k?.unlinkedContent || "",
                btnText: k?.unlinkedButtonText || "",
                headline: k?.unlinkedHeadline || ""
              }
            },
            [O] = (0, r.useSearchParams)(),
            I = (0, c.useRockstarToken)(),
            {
              data: q,
              loggedIn: B
            } = (0, i.Wx)(),
            z = (0, c.useRockstarTokenPing)(),
            F = `https://${E}.rockstargames.com/settings/linkedaccounts`,
            P = (0, c.toScLocaleString)(v),
            M = (0, d.useIntl)(),
            {
              track: R
            } = (0, i.h)(),
            {
              ref: D,
              inView: U
            } = (0, o.Wx)({
              threshold: .6
            }),
            $ = 1280,
            W = (0, n.createRef)(),
            V = (0, n.createRef)(),
            H = (0, n.createRef)(),
            Q = (0, n.createRef)(),
            J = (0, n.createRef)(),
            [Y, K] = (0, n.useState)(),
            [X, Z] = (0, n.useState)([]),
            [ee, ae] = (0, n.useState)(!1),
            [te, ne] = (0, n.useState)(),
            [re, se] = (0, n.useState)("hidden"),
            [oe, ce] = (0, n.useState)("hidden"),
            [ie, le] = (0, n.useState)("hidden"),
            [de, me] = (0, n.useState)("hidden"),
            [ue, ge] = (0, n.useState)(!1),
            [fe, be] = (0, n.useState)(j.disabled),
            [ke, pe] = (0, n.useState)(j.landing),
            [xe, he] = (0, n.useState)(0),
            [_e, we] = (0, n.useState)(0),
            [ve, Te] = (0, n.useState)(0),
            [Ae, ye] = (0, n.useState)(0),
            [Se, je] = (0, n.useState)(0),
            [Ne, Ee] = (0, n.useState)(!1),
            [Ge, Ce] = (0, n.useState)(A.introScreen.image.sources.mobile || p),
            [Le, Oe] = (0, n.useState)(!1),
            Ie = `${document.location.pathname}${document.location.search}#${_}`,
            qe = (0, c.usePrevious)(te),
            Be = (0, c.usePrevious)(B),
            ze = () => {
              W.current && we(W?.current?.scrollHeight), V.current && Te(V?.current?.scrollHeight), H.current && ye(H?.current?.scrollHeight), Q.current && je(Q?.current?.scrollHeight)
            },
            Fe = (e, a) => {
              e === j.landing && (e => {
                pe(j.landing), e && he(_e), ce("onScreen"), se("hidden"), me("hidden"), le("hidden")
              })(a), e === j.success && (e => {
                pe(j.success), e && he(ve), ce("offScreen"), se("visible"), setTimeout((() => {
                  ce("hidden"), me("hidden")
                }), 300), setTimeout((() => {
                  se("onScreen")
                }), 100)
              })(a), e === j.error && (e => {
                pe(j.error), e && he(Ae), ce("offScreen"), setTimeout((() => {
                  ce("hidden")
                }), 300), setTimeout((() => {
                  me("onScreen")
                }), 100)
              })(a), e === j.unlinked && (e => {
                pe(j.unlinked), e && he(Se), ce("offScreen"), le("visible"), setTimeout((() => {
                  ce("hidden"), me("hidden")
                }), 300), setTimeout((() => {
                  le("onScreen")
                }), 100)
              })(a)
            },
            Pe = () => {
              "disabled" === fe ? (async () => {
                const e = {
                  giftUId: a,
                  location: t,
                  utmCampaign: O.get("utm_campaign"),
                  utmContent: O.get("utm_content"),
                  utmMedium: O.get("utm_medium"),
                  utmSource: O.get("utm_source")
                };
                if (X.length > 0) {
                  const {
                    status: a
                  } = await (0, c.coreScApiFetch)("marketing/engagement/claim/create", {
                    fetchOptions: {
                      method: "POST"
                    },
                    pingBearer: z,
                    query: e
                  }) ?? [];
                  Fe(a ? j.success : j.error, !1)
                } else Fe(Y ? j.unlinked : j.landing, !1)
              })() : "success" === fe ? Fe(j.success, !1) : "error" === fe ? Fe(j.error, !1) : "unlinked" === fe && Fe(j.unlinked, !1)
            };
          return (0, n.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== t ? Ce(A.introScreen.image.sources.mobile || p) : Ce(A.introScreen.image.sources.desktop || p)
              },
              a = () => {
                ze(), window.innerWidth <= $ && !ee && (ae(!0), Fe(ke, !0)), window.innerWidth > $ && ee && ae(!1), e()
              };
            return ae(window.innerWidth <= $), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), [ke, ee, W, Q, H, V]), (0, n.useEffect)((() => {
            ke === j.success && xe !== ve ? he(ve) : ke === j.error && xe !== Ae ? he(Ae) : ke === j.landing && xe !== _e ? he(_e) : ke === j.unlinked && xe !== Se && he(Se)
          }), [Ae, ve, xe, Se, _e]), (0, n.useEffect)((() => {
            Le || (Oe(!0), ze(), Ne && ke === j.success && he(V?.current?.scrollHeight || 0))
          }), [W, Q, H, V]), (0, n.useEffect)((() => {
            const e = q?.characters?.gtao;
            Z(e || [])
          }), [q]), (0, n.useEffect)((() => {
            "boolean" != typeof qe && "boolean" != typeof Be || !a || te && B && (async () => {
              const {
                result: e
              } = await (0, c.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: z,
                query: {
                  giftUId: a
                }
              });
              K(e), ne(!1)
            })()
          }), [te, B, a]), (0, n.useEffect)((() => {
            "boolean" == typeof B ? B ? ne(!0) : (ne(!1), ce("onScreen")) : ne(!0)
          }), [B]), (0, n.useEffect)((() => {
            Y && X.length > 0 ? (Ee(!0), Fe(j.success, !0)) : Y && 0 === X.length ? Fe(j.unlinked, !0) : "boolean" != typeof Y && Y || Fe(j.landing, !0)
          }), [Y]), (0, n.useEffect)((() => {
            if (U && !ue) {
              if (void 0 === B) return;
              R({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: B ? "signed in" : "signed out"
              }), ge(!0)
            }
          }), [U, B]), (0, n.useEffect)((() => {
            "onScreen" === re && R({
              element_placement: "WOC",
              event: "alert_update",
              o_id: a,
              text: "Almost there!"
            })
          }), [re]), (0, n.useEffect)((() => {
            "onScreen" === ie && R({
              element_placement: "WOC",
              event: "alert_error",
              o_id: a,
              text: "No Qualifying Character Found"
            })
          }), [ie]), (0, n.useEffect)((() => {
            "onScreen" === de && R({
              element_placement: "event_label",
              event: "alert_error",
              o_id: a,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [de]), (0, n.useEffect)((() => {
            Pe()
          }), [fe]), (0, b.jsxs)(b.Fragment, {
            children: [!1, (0, b.jsx)("div", {
              className: N.interestTrackerWrapper,
              children: (0, b.jsxs)(s.P.div, {
                className: [N.interestTracker, te && N.loader].join(" "),
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
                  duration: .4,
                  ease: "easeIn"
                },
                "data-context": "interestTracker",
                ref: D,
                id: _ || "",
                children: [(0, b.jsx)("div", {
                  className: N.moduleImage,
                  style: {
                    "--engagement-image": `url(${Ge})`
                  }
                }), (0, b.jsx)("div", {
                  className: [N.slideContainer, te ? N.loader : ""].join(" "),
                  ref: J,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === xe ? "200%" : `${xe}px`,
                    height: 0 !== xe && ee ? `${xe}px` : "auto"
                  },
                  children: te ? (0, b.jsx)("div", {
                    className: N.spinner,
                    children: (0, b.jsx)(l.A, {
                      type: "SPINNING"
                    })
                  }) : (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(x, {
                      s: N,
                      content: A,
                      refLanding: W,
                      loggedIn: B,
                      addClaim: async () => {
                        R({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: a,
                          text: "claim now",
                          section_layout: B ? "signed in" : "signed out"
                        }), Pe()
                      },
                      signin: () => {
                        const e = `${G}?returnUrl=${encodeURIComponent(Ie)}&lang=${P}`;
                        R({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: e,
                          text: "claim now",
                          section_layout: B ? "signed in" : "signed out"
                        }), window.location.href = e
                      },
                      landingSlide: oe
                    }), (0, b.jsx)(T, {
                      s: N,
                      content: A,
                      refSuccess: V,
                      successSlide: re,
                      characterList: X,
                      linkAccountUrl: F,
                      linkMoreAccounts: () => {
                        R({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: F,
                          text: u.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: M.formatMessage(u.engagement_link_account)
                    }), (0, b.jsx)(y, {
                      s: N,
                      content: A,
                      unlinkedSlide: ie,
                      refUnlinked: Q,
                      linkConsoleText: M.formatMessage(u.engagement_link_console_account),
                      platformLogin: e => `https://${C}.rockstargames.com/tpa/${e}/link/?cid=${L}&lang=${P}&returnUrl=${encodeURIComponent(Ie)}&accessToken=${I}`,
                      giftId: a
                    }), (0, b.jsx)(S, {
                      s: N,
                      errorSlide: de,
                      content: A,
                      refError: H
                    })]
                  })
                })]
              })
            })]
          })
        }), m)
    },
    5328: (e, a, t) => {
      var n = {
        "./applestore.svg": 49733,
        "./googleplay.svg": 62749,
        "./left.svg": 84941,
        "./pc.svg": 39821,
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

      function r(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      r.keys = function() {
        return Object.keys(n)
      }, r.resolve = s, e.exports = r, r.id = 5328
    },
    49733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    62749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    84941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    39821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    65437: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    33492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    65115: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    23146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    80304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    22454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    66426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    59129: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    42659: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    36773: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    }
  }
]);