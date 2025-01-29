! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e3933942-5a1a-48ec-9890-3641b72d7581", e._sentryDebugIdIdentifier = "sentry-dbid-e3933942-5a1a-48ec-9890-3641b72d7581")
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
  [9123], {
    3453: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var s = t(62229),
        r = t(9623),
        o = t(22557),
        i = t(75694),
        l = t.n(i),
        n = t(95966),
        d = t(93075);
      const c = {
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
        _ = {
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
      var m = t(98096);
      const p = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: o = "",
            target: i = null,
            onClick: l,
            tabIndex: n
          } = e;
          const d = i ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            c = [u.platformButton, u[o]].join(" "),
            _ = o ? t(5328)(`./${o}.svg`) : null,
            p = (0, m.jsxs)(m.Fragment, {
              children: [_ ? (0, m.jsx)("img", {
                src: _,
                alt: a
              }) : "", !_ && (0, m.jsx)("div", {
                className: u.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, m.jsx)("a", {
            href: s,
            className: c,
            target: d,
            onClick: l,
            "aria-label": a,
            tabIndex: n,
            children: p
          }) : (0, m.jsx)(r.NavLink, {
            className: c,
            onClick: l,
            to: s,
            "aria-label": a,
            children: p
          })
        },
        f = e => {
          let {
            variant: a,
            buttonText: r = "Subscribe",
            buttonClassName: i,
            className: f,
            children: g,
            platformsAndLinks: b = [],
            trackingType: h = "buy",
            trackingParent: k,
            target: y = null,
            trackingOId: v = null
          } = e;
          const [x, w] = (0, s.useState)(!1), [M, C] = (0, s.useState)(!1), [N, S] = (0, s.useState)(200), {
            track: T
          } = (0, d.h)(), A = (0, s.useRef)(null), E = (0, s.useRef)(x), B = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            E.current = x
          }), [x]), (0, s.useEffect)((() => {
            const e = e => {
              E && !A?.current?.contains(e.target) && w(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []), (0, s.useEffect)((() => {
            const e = () => {
              x && (C(!0), w(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [x]), (0, s.useEffect)((() => {
            if (A?.current) {
              const e = 1e3 * Number(getComputedStyle(A.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              S(isNaN(e) ? 200 : e)
            }
          }), []), (0, s.useEffect)((() => {
            M && setTimeout((() => {
              C(!1)
            }), N)
          }), [M]);
          const L = e => {
            let {
              href: a,
              platform: t
            } = e;
            return () => {
              T({
                element_placement: k,
                event: "cta_store_link",
                link_url: a,
                text: t
              })
            }
          };
          return (0, m.jsxs)("div", {
            className: (0, n.classList)(u.container, f),
            children: [(0, m.jsx)(o.P.div, {
              className: u.content,
              animate: x ? "open" : "close",
              variants: c,
              "aria-hidden": !!x,
              children: g
            }), (0, m.jsxs)(o.P.div, {
              "data-variant": a,
              "data-animating": M,
              className: l()(x ? u.expandedButton : u.unexpandedButton),
              animate: x ? "open" : "closed",
              variants: _,
              initial: !1,
              ref: A,
              children: [(0, m.jsx)(o.P.button, {
                className: l()(u.buttonText, i),
                "aria-expanded": x,
                onClick: () => {
                  if (C(!0), w(!x), !x) switch (h) {
                    case "select_platform":
                      T({
                        element_placement: k,
                        event: "select_platform",
                        text: r?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      T({
                        element_placement: k,
                        event: "cta_link_account",
                        o_id: v,
                        text: r?.toLowerCase()
                      });
                      break;
                    case "buy":
                      T({
                        element_placement: k,
                        event: "cta_buy",
                        text: r?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      T({
                        element_placement: k,
                        event: "cta_store_link",
                        text: r?.toLowerCase()
                      });
                      break;
                    case "other":
                      T({
                        element_placement: k,
                        event: "cta_other",
                        text: r?.toLowerCase()
                      })
                  }
                },
                tabIndex: x ? -1 : 0,
                children: "string" == typeof r ? r : "Subscribe"
              }), (0, m.jsx)("div", {
                className: u.expandedArea,
                ref: B,
                "data-animate": x ? "open" : "closed",
                "aria-hidden": !x,
                style: {
                  height: x ? B?.current?.scrollHeight : 0
                },
                children: (0, m.jsxs)("div", {
                  children: [(0, m.jsx)("button", {
                    className: u.closeButton,
                    onClick: () => {
                      w(!1), C(!0), T({
                        element_placement: k,
                        event: "cta_other",
                        text: "close expanding platform button"
                      })
                    },
                    "aria-label": "Close",
                    tabIndex: x ? 0 : -1,
                    children: (0, m.jsx)("img", {
                      src: t(66426),
                      alt: "Close"
                    })
                  }), (0, m.jsx)("div", {
                    className: u.platformButtons,
                    children: b.length ? b.map((e => (0, m.jsx)(p, {
                      buttonText: e.buttonText ?? (0, n.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: L(e),
                      target: y,
                      tabIndex: x ? 0 : -1
                    }, `${e.key}-${e.href}-${e.platform}`))) : ""
                  })]
                })
              })]
            })]
          })
        }
    },
    36671: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(14099),
        r = t.n(s);
      const o = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        i = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}');
      var l = t(98096);
      const n = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        d = e => {
          let a, {
            type: t = n.SPINNING
          } = e;
          switch (t) {
            case n.THREE_DOTS:
              a = i;
              break;
            case n.SPINNING:
            default:
              a = o
          }
          return (0, l.jsx)(r(), {
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
    14818: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(9623);
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
      var o = t(98096);
      const i = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r,
            ariaLabel: i
          } = e;
          return (0, o.jsx)("button", {
            className: t,
            onClick: s,
            style: r,
            type: "button",
            "aria-label": i,
            children: a
          })
        },
        l = e => {
          let {
            children: a,
            className: t,
            onClick: r,
            style: i,
            to: l,
            ariaLabel: n
          } = e;
          return (0, o.jsx)(s.NavLink, {
            className: t,
            onClick: r,
            style: i,
            to: l,
            "aria-label": n,
            children: a
          })
        },
        n = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: n = "",
            img: d,
            labelColor: c = "#000",
            onClick: _,
            secondText: u,
            size: m,
            text: p,
            to: f,
            type: g = "",
            ariaLabel: b
          } = e;
          const h = [r.plusButton, r[g] ?? "", r[m] ?? "", r[s] ?? "", t].join(" "),
            k = {
              "--hvr-color": a ?? c,
              "--hvr-bg-color": c ?? a,
              "--hvr-border-color": a ?? c
            },
            y = (0, o.jsxs)(o.Fragment, {
              children: [d ? (0, o.jsx)("img", {
                src: d,
                alt: ""
              }) : "", (0, o.jsxs)("div", {
                className: r.btnText,
                icon: n,
                children: [p, u ? (0, o.jsx)("span", {
                  children: u
                }) : ""]
              })]
            });
          if (f) {
            if (f.startsWith("http")) {
              const e = f.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, o.jsx)("span", {
                onClick: _,
                onKeyDown: _,
                className: h,
                role: "button",
                "aria-label": b,
                tabIndex: 0,
                children: (0, o.jsx)("a", {
                  href: f,
                  target: e,
                  children: y
                })
              })
            }
            return (0, o.jsx)(l, {
              className: h,
              onClick: _,
              style: {
                ...k
              },
              to: f,
              ariaLabel: b,
              children: y
            })
          }
          return (0, o.jsx)(i, {
            className: h,
            onClick: _,
            style: {
              ...k
            },
            ariaLabel: b,
            children: y
          })
        }
    },
    539: (e, a, t) => {
      "use strict";
      t.d(a, {
        Nr: () => r,
        oY: () => o
      });
      var s = t(81788);
      const r = (0, s.defineMessages)({
          card_learn_more: {
            id: "card_learn_more",
            defaultMessage: "Learn More"
          },
          events_deck_next_aria_label: {
            id: "events_deck_next_aria_label",
            defaultMessage: "Next Page of Events"
          },
          events_deck_previous_aria_label: {
            id: "events_deck_previous_aria_label",
            defaultMessage: "Previous Page of Events"
          },
          events_deck_modal_next_aria_label: {
            id: "events_deck_modal_next_aria_label",
            defaultMessage: "Next event"
          },
          events_deck_modal_previous_aria_label: {
            id: "events_deck_modal_previous_aria_label",
            defaultMessage: "Previous event"
          },
          events_deck_modal_close_label: {
            id: "events_deck_modal_close_label",
            defaultMessage: "Close"
          },
          events_deck_paging_label: {
            id: "events_deck_paging_label",
            defaultMessage: "On page {currentPage} of {totalPages}"
          },
          events_deck_modal_group_label: {
            id: "events_deck_modal_group_label",
            defaultMessage: "Event Details"
          }
        }),
        o = (0, s.defineMessages)({
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
      (0, s.defineMessages)({
        careers_home_msg: {
          id: "careers_home_msg",
          defaultMessage: "<p>Join a tight-knit team responsible for creating and publishing some of the most popular, innovative and critically acclaimed interactive entertainment in the world including the Grand Theft Auto series, the Red Dead series and many more.</p><p>Known for our dedication to quality and authenticity, a career at Rockstar Games is an opportunity to work on some of the most cutting edge, creatively rewarding and challenging projects available in any entertainment medium with some of the most talented people in the industry.</p><p>We offer successful candidates highly competitive salary and compensation packages, including a comprehensive benefits package for all eligible employees. Rockstar Games is an equal opportunity employer.</p>"
        }
      }), (0, s.defineMessages)({
        clr_nav_home: {
          id: "clr_nav_home",
          defaultMessage: "Home"
        },
        clr_nav_news: {
          id: "clr_nav_news",
          defaultMessage: "News"
        },
        clr_nav_releases: {
          id: "clr_nav_releases",
          defaultMessage: "Releases"
        },
        clr_nav_about: {
          id: "clr_nav_about",
          defaultMessage: "About"
        },
        clr_nav_store: {
          id: "clr_nav_store",
          defaultMessage: "Store"
        },
        clr_all_releases_link: {
          id: "clr_all_releases_link",
          defaultMessage: "See All Releases"
        },
        clr_all_store_link: {
          id: "clr_all_store_link",
          defaultMessage: "See All Store Items"
        },
        clr_news_header: {
          id: "clr_news_header",
          defaultMessage: "News"
        },
        clr_read_more: {
          id: "clr_read_more",
          defaultMessage: "Read More"
        },
        clr_show_more: {
          id: "clr_show_more",
          defaultMessage: "Show More"
        },
        clr_releases_header: {
          id: "clr_releases_header",
          defaultMessage: "Releases"
        },
        clr_about_us_header: {
          id: "clr_about_us_header",
          defaultMessage: "About Us"
        },
        clr_about_us_body: {
          id: "clr_about_us_body",
          defaultMessage: "CircoLoco Records is a partnership between CircoLoco, one of the most influential brands in global club culture and Rockstar Games, creators of some of the world's most popular and critically acclaimed video games, with a view to supporting underground dance music culture worldwide in the physical and digital worlds."
        },
        clr_about_us_body_2: {
          id: "clr_about_us_body_2",
          defaultMessage: "Representing house and techno for over 20 years through its parties at Ibiza's DC10 and around the world, CircoLoco's dancefloor has become a principal intersection between underground dance music and elements of fashion, art and wider culture. The launch of CircoLoco Records reinforces CircoLoco's commitment to championing forward-thinking dance music artists beyond the club."
        },
        clr_about_us_body_3: {
          id: "clr_about_us_body_3",
          defaultMessage: "Creators of some of the world's most popular video games including the Grand Theft Auto and Red Dead Redemption series, Rockstar Games' reputation for supporting music and club culture stretches back to the brand's inception in 1998. Whether through the meticulously curated radio stations found in the Grand Theft Auto series or the virtual dance clubs of Grand Theft Auto Online featuring some of the world's greatest DJ's, Rockstar Games has consistently championed artists and club culture."
        },
        clr_about_us_body_4: {
          id: "clr_about_us_body_4",
          defaultMessage: "CircoLoco Records will break new ground in an effort to support dance music culture and represents an opportunity to elevate the scene through the collective power of these two entertainment brands."
        },
        clr_legal_disclaimer: {
          id: "clr_legal_disclaimer",
          defaultMessage: "Rockstar Records LLC. All rights reserved. © 2023. R* is a trademark of Take-Two Interactive Software, Inc. The CircoLoco Records mark used under license from A&A Music Property, S.L. The CircoLoco Records Store is operated by Xsolla."
        },
        clr_press_footer_link_text: {
          id: "clr_press_footer_link_text",
          defaultMessage: "Press"
        },
        clr_submissions_footer_link_text: {
          id: "clr_submissions_footer_link_text",
          defaultMessage: "Submissions"
        },
        clr_terms_footer_link_text: {
          id: "clr_terms_footer_link_text",
          defaultMessage: "Terms & Conditions"
        },
        clr_privacy_footer_link_text: {
          id: "clr_privacy_footer_link_text",
          defaultMessage: "Privacy Policy"
        },
        clr_cookie_policy_footer_link_text: {
          id: "clr_cookie_policy_footer_link_text",
          defaultMessage: "Cookie Policy"
        },
        clr_cookie_settings_footer_link_text: {
          id: "clr_cookie_settings_footer_link_text",
          defaultMessage: "Cookie Settings"
        },
        clr_subscribe_header: {
          id: "clr_subscribe_header",
          defaultMessage: "Join the mailing list"
        },
        clr_subscribe_body: {
          id: "clr_subscribe_body",
          defaultMessage: "Get CircoLoco Records news – including release announcements, contests, special events, and more – delivered directly to your inbox."
        },
        clr_subscribe: {
          id: "clr_subscribe",
          defaultMessage: "Subscribe"
        },
        clr_subscribe_legal_text: {
          id: "clr_subscribe_legal_text",
          defaultMessage: "By subscribing to our newsletter, you agree to CircoLoco Records Privacy Policy and Terms of Use."
        },
        clr_subscribe_email: {
          id: "clr_subscribe_email",
          defaultMessage: "Email Address"
        },
        clr_subscribe_date_of_birth: {
          id: "clr_subscribe_date_of_birth",
          defaultMessage: "Date of Birth"
        },
        clr_subscribe_country: {
          id: "clr_subscribe_country",
          defaultMessage: "Country"
        }
      }), (0, s.defineMessages)({
        legacy_header_cta_label_reddeadredemption: {
          id: "legacy_header_cta_label_reddeadredemption",
          defaultMessage: "Buy Now"
        },
        highlights_title_std: {
          id: "highlights_title_std",
          defaultMessage: "Features"
        }
      }), (0, s.defineMessages)({
        rsg_total_results_message: {
          id: "rsg_total_results_message",
          defaultMessage: "Showing {Tab} filtered by {Query}"
        },
        rsg_no_results: {
          id: "rsg_no_results",
          defaultMessage: "Sorry, there were no results."
        },
        resources_tile_header: {
          id: "resources_tile_header",
          defaultMessage: "Explore Safety Resources"
        },
        resources_tile_description: {
          id: "resources_tile_description",
          defaultMessage: "Quickly find resources if you or someone you know is struggling and in need of help."
        },
        safety_learn_more_button: {
          id: "safety_learn_more_button",
          defaultMessage: "Learn More"
        },
        community_guidelines_tile_header: {
          id: "community_guidelines_tile_header",
          defaultMessage: "Explore Community Guidelines"
        },
        community_guidelines_tile_description: {
          id: "community_guidelines_tile_description",
          defaultMessage: "These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe."
        },
        support_tile_header: {
          id: "support_tile_header",
          defaultMessage: "Need account assistance?"
        },
        support_tile_description: {
          id: "support_tile_description",
          defaultMessage: "For additional assistance with managing your account or data and privacy settings, visit our Customer Support page."
        },
        safety_get_support_button: {
          id: "safety_get_support_button",
          defaultMessage: "Get Support"
        },
        community_guidelines_image_alt_text: {
          id: "community_guidelines_image_alt_text",
          defaultMessage: "Say Sorry, Be Nice"
        },
        handshake_icon_alt_text: {
          id: "handshake_icon_alt_text",
          defaultMessage: "Handshake icon"
        },
        heartbook_icon_alt_text: {
          id: "heartbook_icon_alt_text",
          defaultMessage: "Book with heart icon"
        },
        support_chat_icon_alt_text: {
          id: "support_chat_icon_alt_text",
          defaultMessage: "Support chat icon"
        },
        resources_last_updated_date: {
          id: "resources_last_updated_date",
          defaultMessage: "November 18, 2024"
        }
      }), (0, s.defineMessages)({
        videoplayer_playlist_active_badge: {
          id: "videoplayer_playlist_active_badge",
          defaultMessage: "Now Playing"
        },
        videoplayer_unmute_tap: {
          id: "videoplayer_unmute_tap",
          defaultMessage: "Tap anywhere to unmute."
        },
        videoplayer_unmute_click: {
          id: "videoplayer_unmute_click",
          defaultMessage: "Click anywhere to unmute."
        },
        videoplayer_share_title: {
          id: "videoplayer_share_title",
          defaultMessage: "Share"
        },
        videoplayer_share_copy: {
          id: "videoplayer_share_copy",
          defaultMessage: "Copy"
        },
        videoplayer_share_time_copied: {
          id: "videoplayer_share_copied",
          defaultMessage: "Link Copied"
        },
        videoplayer_share_time_copy: {
          id: "videoplayer_share_time_copy",
          defaultMessage: "Start shared video at"
        },
        videoplayer_airplay_option_label: {
          id: "videoplayer_airplay_option_label",
          defaultMessage: "AirPlay"
        },
        videoplayer_cast_to_tv_option_label: {
          id: "videoplayer_cast_to_tv_option_label",
          defaultMessage: "Cast to TV"
        },
        videoplayer_tv_code_option_label: {
          id: "videoplayer_tv_code_option_label",
          defaultMessage: "Link with TV Code"
        },
        videoplayer_error: {
          id: "videoplayer_error",
          defaultMessage: "Something went wrong with the video player."
        },
        videoplayer_airplay_not_supported_error: {
          id: "videoplayer_airplay_not_supported_error",
          defaultMessage: "AirPlay not supported in this browser."
        },
        videoplayer_video_not_found_error: {
          id: "videoplayer_video_not_found_error",
          defaultMessage: "Video element not found."
        },
        videoplayer_airplay_button_label: {
          id: "videoplayer_airplay_button_label",
          defaultMessage: "Screen Share"
        },
        videoplayer_captions_button_label: {
          id: "videoplayer_captions_button_label",
          defaultMessage: "Caption Settings Menu"
        },
        videoplayer_downloads_button_label: {
          id: "videoplayer_downloads_button_label",
          defaultMessage: "Download Options Menu"
        },
        videoplayer_fullscreen_button_label: {
          id: "videoplayer_fullscreen_button_label",
          defaultMessage: "Fullscreen Toggle"
        },
        videoplayer_play_pause_button_label: {
          id: "videoplayer_play_pause_button_label",
          defaultMessage: "Play/Pause Toggle"
        },
        videoplayer_progress_bar_label: {
          id: "videoplayer_progress_bar_label",
          defaultMessage: "Progress Bar"
        },
        videoplayer_quality_settings_button_label: {
          id: "videoplayer_quality_settings_button_label",
          defaultMessage: "Quality Settings Menu"
        },
        videoplayer_share_menu_button_label: {
          id: "videoplayer_share_menu_button_label",
          defaultMessage: "Share Menu"
        },
        videoplayer_share_link_button_label: {
          id: "videoplayer_share_link_button_label",
          defaultMessage: "Share to {name}"
        },
        videoplayer_volume_toggle_button_label: {
          id: "videoplayer_volume_toggle_button_label",
          defaultMessage: "Mute/Unmute Toggle"
        },
        videoplayer_captions_menu_header: {
          id: "videoplayer_captions_menu_header",
          defaultMessage: "Subtitles / CC"
        },
        videoplayer_downloads_menu_header: {
          id: "videoplayer_downloads_menu_header",
          defaultMessage: "Download"
        },
        videoplayer_airplay_menu_header: {
          id: "videoplayer_airplay_menu_header",
          defaultMessage: "Download"
        },
        videoplayer_quality_settings_menu_header: {
          id: "videoplayer_quality_settings_menu_header",
          defaultMessage: "Quality Settings"
        },
        videoplayer_share_menu_header: {
          id: "videoplayer_share_menu_header",
          defaultMessage: "Share"
        },
        videoplayer_captions_menu_off_label: {
          id: "videoplayer_captions_menu_off_label",
          defaultMessage: "Off"
        }
      })
    },
    5328: (e, a, t) => {
      var s = {
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
        var a = o(e);
        return t(a)
      }

      function o(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = o, e.exports = r, r.id = 5328
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