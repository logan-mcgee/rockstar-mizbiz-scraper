! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "05f1df56-c6a8-43ba-8c17-30e193883883", e._sentryDebugIdIdentifier = "sentry-dbid-05f1df56-c6a8-43ba-8c17-30e193883883")
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
  [2399], {
    39695: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var s = t(71403),
        r = t(89779),
        c = t(53980),
        o = t(72862),
        i = t.n(o),
        n = t(74401),
        l = t(42756),
        d = t(40207);
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
        u = {
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
        f = {
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
      var g = t(46632);
      const p = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: c = "",
            target: o = null,
            onClick: i,
            tabIndex: n
          } = e;
          const l = o ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            d = [f.platformButton, f[c]].join(" "),
            m = c ? t(52917)(`./${c}.svg`) : null,
            u = (0, g.jsxs)(g.Fragment, {
              children: [m ? (0, g.jsx)("img", {
                src: m,
                alt: a
              }) : "", !m && (0, g.jsx)("div", {
                className: f.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, g.jsx)("a", {
            href: s,
            className: d,
            target: l,
            onClick: i,
            "aria-label": a,
            tabIndex: n,
            children: u
          }) : (0, g.jsx)(r.NavLink, {
            className: d,
            onClick: i,
            to: s,
            "aria-label": a,
            children: u
          })
        },
        b = e => {
          let {
            variant: a,
            buttonText: r = "Subscribe",
            buttonClassName: o,
            className: b,
            children: k,
            platformsAndLinks: _ = [],
            trackingType: h = "buy",
            trackingParent: w,
            target: x = null,
            trackingOId: v = null
          } = e;
          const [N, S] = (0, s.useState)(!1), [y, C] = (0, s.useState)(!1), [M, j] = (0, s.useState)(200), {
            track: I
          } = (0, d.useGtmTrack)(), E = (0, s.useRef)(null), L = (0, s.useRef)(N), T = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            L.current = N
          }), [N]), (0, s.useEffect)((() => {
            const e = e => {
              L && !E?.current?.contains(e.target) && S(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []), (0, s.useEffect)((() => {
            if (E?.current) {
              const e = 1e3 * Number(getComputedStyle(E.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              j(isNaN(e) ? 200 : e)
            }
          }), []), (0, s.useEffect)((() => {
            y && setTimeout((() => {
              C(!1)
            }), M)
          }), [y]);
          const B = e => {
            let {
              href: a,
              platform: t
            } = e;
            return () => {
              I({
                element_placement: w,
                event: "cta_store_link",
                link_url: a,
                text: t
              })
            }
          };
          return (0, g.jsxs)("div", {
            className: (0, n.classList)(f.container, b),
            children: [(0, g.jsx)(c.P.div, {
              className: f.content,
              animate: N ? "open" : "close",
              variants: m,
              "aria-hidden": !!N,
              children: k
            }), (0, g.jsxs)(c.P.div, {
              "data-variant": a,
              "data-animating": y,
              className: i()(N ? f.expandedButton : f.unexpandedButton),
              animate: N ? "open" : "closed",
              variants: u,
              initial: !1,
              ref: E,
              children: [(0, g.jsx)(c.P.button, {
                className: i()(f.buttonText, o),
                "aria-expanded": N,
                onClick: () => {
                  if (C(!0), S(!N), !N) switch (h) {
                    case "select_platform":
                      I({
                        element_placement: w,
                        event: "select_platform",
                        text: r?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      I({
                        element_placement: w,
                        event: "cta_link_account",
                        o_id: v,
                        text: r?.toLowerCase()
                      });
                      break;
                    case "buy":
                      I({
                        element_placement: w,
                        event: "cta_buy",
                        text: r?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      I({
                        element_placement: w,
                        event: "cta_store_link",
                        text: r?.toLowerCase()
                      });
                      break;
                    case "other":
                      I({
                        element_placement: w,
                        event: "cta_other",
                        text: r?.toLowerCase()
                      })
                  }
                },
                tabIndex: N ? -1 : 0,
                children: "string" == typeof r ? r : "Subscribe"
              }), (0, g.jsx)("div", {
                className: f.expandedArea,
                ref: T,
                "data-animate": N ? "open" : "closed",
                "aria-hidden": !N,
                style: {
                  height: N ? T?.current?.scrollHeight : 0
                },
                children: (0, g.jsxs)("div", {
                  children: [(0, g.jsx)("button", {
                    className: f.closeButton,
                    onClick: () => {
                      S(!1), C(!0), I({
                        element_placement: w,
                        event: "cta_other",
                        text: "close expanding platform button"
                      })
                    },
                    "aria-label": "Close",
                    tabIndex: N ? 0 : -1,
                    children: (0, g.jsx)("img", {
                      src: t(45537),
                      alt: "Close"
                    })
                  }), (0, g.jsx)("div", {
                    className: f.platformButtons,
                    children: _.length ? _.map((e => (0, g.jsx)(p, {
                      buttonText: e.buttonText ?? (0, l.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: B(e),
                      target: x,
                      tabIndex: N ? 0 : -1
                    }, `${e.key}-${e.href}-${e.platform}`))) : ""
                  })]
                })
              })]
            })]
          })
        }
    },
    42341: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(96717),
        r = t(71403),
        c = t(40207),
        o = t(13963),
        i = t(20066);
      const n = (0, s.defineMessages)({
        language_selector_default: {
          id: "language_selector_default",
          defaultMessage: "Select a Language"
        }
      });
      var l = t(60285);
      const d = {
        pillBtn: "rockstargames-modules-core-newswire-articlecb792ef8796eaa09f8b5c1ee0230fcd7",
        selected: "rockstargames-modules-core-newswire-articlec951b9f5173e8a37be389854c40995ee",
        scMenuStyles: "rockstargames-modules-core-newswire-articlefa91a55e22ad688cba0bc1210eaf4726",
        languageSelector: "rockstargames-modules-core-newswire-articleb631f2ce92e4a89f8eddebd32e8ed30a",
        open: "rockstargames-modules-core-newswire-articleedc598921a872174190475d0ad016d15",
        linkWrapper: "rockstargames-modules-core-newswire-articlec4b7087d1fcbaad6967e61b84160ff79",
        links: "rockstargames-modules-core-newswire-articlec7d345d5c7e567e0ee75b792d5bdfb88",
        selectBoxWrapper: "rockstargames-modules-core-newswire-articlee3e55a10507405de05ae92006ec0d02b",
        selectBox: "rockstargames-modules-core-newswire-articlec646a2bff16ec3003b027857488cd612",
        selectBoxOption: "rockstargames-modules-core-newswire-articlebcccd1077d13d7fe1585655e5c5f8363"
      };
      var m = t(46632);
      const u = (0, s.withIntl)((e => {
        let {
          theme: a,
          languageSelectorOpened: t,
          setLanguageSelectorOpened: i,
          location: u,
          parent: f = "footer"
        } = e;
        const {
          track: g
        } = (0, c.useGtmTrack)(), p = (0, s.useIntl)(), [b, k] = (0, s.getLocale)(), [_, h] = (0, r.useState)(!1), w = (0, r.useMemo)((() => (0, o.A)()), []), x = (0, r.useCallback)((e => {
          let a = u.pathname;
          const t = a.split("/");
          return s.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), w.currentSite?.site === o.C.www ? "en" === e ? `${window.location.origin}${a}${u.search}` : `${window.location.origin}/${e}${a}${u.search}` : `${window.location.origin}${a}${u.search}`
        }), [u]), v = (0, r.useRef)(null), [N, S] = (0, r.useState)(0), y = matchMedia("(hover: none) and (pointer: coarse)").matches, C = e => {
          if (i && i(!1), b.subdomaincom === e || "none" === e) return void(i && i(!1));
          const a = s.locales.find((a => a.subdomaincom === e));
          if (a) {
            const t = x(e);
            g({
              event: "cta_other",
              link_url: t,
              text: e,
              element_placement: f
            }), k(a.iso), window.location.href = t
          }
        };
        return (0, r.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === _ && h(!1)
        }), [t]), (0, r.useEffect)((() => {
          v.current && S(v.current.scrollHeight)
        }), [v]), (0, m.jsxs)("div", {
          className: [d.languageSelector, _ ? d.open : ""].join(" "),
          "data-theme": a,
          children: [y && "sc-menu" === a && (0, m.jsx)("div", {
            className: d.selectBoxWrapper,
            children: (0, m.jsxs)("select", {
              className: d.selectBox,
              onClick: e => e.stopPropagation(),
              onChange: e => {
                const a = e.currentTarget.value;
                C(a)
              },
              "aria-label": p.formatMessage(n.language_selector_default),
              children: [(0, m.jsx)("option", {
                className: d.selectBoxOption,
                value: "none",
                children: (0, m.jsx)(s.FormattedMessage, {
                  ...n.language_selector_default
                })
              }), s.locales.map((e => {
                let {
                  label: a,
                  subdomaincom: t
                } = e;
                return (0, m.jsx)("option", {
                  className: d.selectBoxOption,
                  value: t,
                  children: a
                }, `mobile-${t}`)
              }))]
            })
          }), (!y || "sc-menu" !== a) && (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("button", {
              onClick: e => {
                e.stopPropagation(), i && i(!_), h(!_)
              },
              type: "button",
              "aria-label": p.formatMessage(n.language_selector_default),
              children: [(0, m.jsx)("i", {}), (0, m.jsx)("span", {
                children: (0, m.jsx)(s.FormattedMessage, {
                  ...n.language_selector_default
                })
              })]
            }), (0, m.jsx)("div", {
              className: d.linkWrapper,
              ref: v,
              style: {
                "--ls-linkWrapper-opened-height": `${N}px`
              },
              children: (0, m.jsx)("div", {
                className: d.links,
                children: s.locales.map((e => {
                  let {
                    subdomaincom: a,
                    label: t
                  } = e;
                  return (0, m.jsx)(l.A, {
                    to: x(a),
                    onClick: (s = a, () => {
                      C(s)
                    }),
                    tabIndex: _ ? 0 : -1,
                    children: t
                  }, `desktop-${a}`);
                  var s
                }))
              })
            })]
          })]
        })
      }), i)
    },
    26177: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(26855),
        r = t.n(s);
      const c = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        o = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}');
      var i = t(46632);
      const n = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        l = e => {
          let a, {
            type: t = n.SPINNING
          } = e;
          switch (t) {
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
            }
          })
        }
    },
    86503: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        CharacterCard: () => m,
        Menu: () => V,
        MenuButton: () => K
      });
      var s = t(71403),
        r = t(96717),
        c = t(20066);
      const o = (e, a) => {
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
        },
        i = e => t(e < 100 ? 36399 : e > 99 && e < 500 ? 92627 : e > 499 && e < 750 ? 43864 : 76425),
        n = (0, r.defineMessages)({
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
        }),
        l = {
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
      var d = t(46632);
      const m = (0, r.withIntl)((e => {
        let {
          characterData: a
        } = e;
        const c = (0, r.useIntl)(),
          {
            platform: m,
            platformUsername: u,
            mugshotUrl: f,
            stats: g
          } = a,
          [p, b] = (0, s.useState)(f),
          k = o(m, "large");
        return (0, d.jsxs)("div", {
          className: l.scCharacterCard,
          children: [(0, d.jsx)("div", {
            className: l.scAvatar,
            "data-size": "small",
            children: (0, d.jsx)("img", {
              src: p,
              alt: c.formatMessage(n.profile_selector_mugshot, {
                userName: u
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
                children: u
              }), (0, d.jsx)("div", {
                className: l.scRp,
                children: (0, d.jsxs)("div", {
                  className: l.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: l.scRpIcon,
                    src: i(g.overview.rank.value),
                    alt: c.formatMessage(n.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), c);
      var u = t(90250),
        f = t(42756),
        g = t(58407),
        p = t(40207);
      const b = (0, g.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        k = b("languageSelectorOpenedReactive", !1),
        _ = e => k(e),
        h = b("activeSubNavIdReactive", -1),
        w = e => h(e),
        x = b("subNavExtraHeightReactive", -1),
        v = e => x(e),
        N = b("scNavOpenedReactive", !0),
        S = e => N(e),
        y = b("charListHiddenReactive", !0),
        C = e => y(e),
        M = () => {
          const e = (0, g.useReactiveVar)(k),
            a = (0, g.useReactiveVar)(h),
            t = (0, g.useReactiveVar)(x),
            r = (0, g.useReactiveVar)(N),
            c = (0, g.useReactiveVar)(y);
          return (0, s.useEffect)((() => {
            c || (e && _(!1), r && (S(!1), w(-1)))
          }), [c]), (0, s.useEffect)((() => {
            !e && c && (r || S(!0))
          }), [e, c]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: _,
            activeSubNavId: a,
            setActiveSubNavId: w,
            subNavExtraHeight: t,
            setSubNavExtraHeight: v,
            scNavOpened: r,
            setScNavOpened: S,
            charListHidden: c,
            setCharListHidden: C
          })), [e, a, t, r, c])
        };
      var j = t(14963),
        I = t.n(j),
        E = t(42341),
        L = t(13963);
      const T = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        B = e => ({
          text: e.formatMessage(n.sc_link_help),
          target: "_self",
          ga: {
            ...T,
            text: n.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(n.sc_link_support),
            location: {
              domain: L.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...T,
              text: n.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(n.sc_link_legal),
            location: {
              domain: L.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...T,
              text: n.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(n.sc_link_privacy_policy),
            location: {
              domain: L.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...T,
              text: n.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(n.sc_link_cookies_policy),
            location: {
              domain: L.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...T,
              text: n.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(n.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...T,
              text: n.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(n.sc_link_do_not_sell_my_information),
            location: {
              domain: L.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...T,
              text: n.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        R = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: r,
            onClick: c,
            reloadDocument: o,
            children: i,
            ...n
          } = e;
          const l = a?.startsWith("http");
          return (0, d.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              c?.(e), l || o || (r ? (e.preventDefault(), r(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            ...n,
            children: i
          })
        },
        O = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: c,
            ga: o,
            dataTestId: i,
            isSubLink: l,
            hasNotifications: m = !1,
            onClickCallback: u = (() => {}),
            tabIndex: f,
            reloadDocument: g = !1,
            onNavigate: b
          } = e;
          const {
            track: k
          } = (0, p.useGtmTrack)(), _ = (0, L.A)(), h = (0, r.useIntl)();
          let w = s;
          c && (w = c.domain === _.currentSite?.site ? c.path : `https://${_.sites[c.domain]}.rockstargames.com${c.path}`);
          const x = {
            ...o,
            link_url: w
          };
          return (0, d.jsxs)(R, {
            className: l ? "rockstargames-modules-core-newswire-articlefdaa918acc06706cbe191dedd40974af" : "rockstargames-modules-core-newswire-articlecbc80932118c48d8ec14448d8913d068",
            "data-testid": i || "menuLink",
            title: a,
            to: w,
            target: t,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: f,
            onClick: e => {
              k(x), u(e)
            },
            onNavigate: b,
            children: [a, m && (0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea2d268c9fb03a7271b47de447d663da9",
              children: (0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlecf5a6b05c52c6c4faf3236055d4670c3",
                children: h.formatMessage(n.nofications_new)
              })
            })]
          })
        },
        P = e => {
          let {
            id: a,
            text: t,
            target: r,
            href: c,
            location: o,
            ga: i,
            hasNotifications: n = !1,
            dataTestId: l,
            children: m = [],
            activeSubNavId: u,
            setActiveSubNavId: g,
            setSubNavExtraHeight: b,
            reloadDocument: k = !1,
            onClickCallback: _ = (() => {}),
            onNavigate: h
          } = e;
          const {
            windowWidth: w,
            windowHeight: x
          } = (0, f.useWindowResize)(), {
            track: v
          } = (0, p.useGtmTrack)(), {
            navOpen: N
          } = (0, p.useRockstarUserState)(), S = (0, s.useRef)(null), [y, C] = (0, s.useState)(0), [M, j] = (0, s.useState)(0), [I, E] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            u !== a && !1 === I && E(!0), u === a && E(!1)
          }), [u]), (0, s.useEffect)((() => {
            if (!S.current) return;
            C(S?.current?.scrollHeight);
            const e = window.getComputedStyle(S.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [S, w, x]), m.length > 0 ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("button", {
              className: "rockstargames-modules-core-newswire-articleaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: N ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), v(i), u === a ? (g(-1), b(0)) : (g(a), b(y + M + M))
              },
              children: [(0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlefd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlebe674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, d.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articleff1911053a3515534dd825554a85909e",
              ref: S,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${y}px`
              },
              children: m.map((e => (0, s.createElement)(O, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !N ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, d.jsx)(O, {
            text: t,
            target: r,
            href: c,
            location: o,
            ga: i,
            hasNotifications: n,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: N ? 0 : -1,
            reloadDocument: k,
            onNavigate: h
          })
        },
        D = e => {
          let {
            sc: a,
            location: t,
            onNavigate: c
          } = e;
          const {
            windowWidth: o,
            windowHeight: i
          } = (0, f.useWindowResize)(), l = (0, r.useIntl)(), {
            languageSelectorOpened: m,
            setLanguageSelectorOpened: u,
            activeSubNavId: g,
            setActiveSubNavId: b,
            subNavExtraHeight: k,
            setSubNavExtraHeight: _
          } = M(), {
            setSelectedCharacterTuple: h,
            navOpen: w
          } = (0, p.useRockstarUserState)(), x = (0, f.useLocale)(), v = (0, f.toScLocaleString)(x), [N, S] = (0, s.useState)(""), y = `${a.login}?returnUrl=${N}&lang=${v}`, C = `${a.signup}&returnUrl=${N}&lang=${v}`, j = (0, s.useMemo)((() => (0, L.A)()), []), T = (0, s.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(n.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: n.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(n.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: n.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, B(e)])(l, y, C);
            return e
          }), [l, y, C, j]), [R, O] = (0, s.useState)(0), D = (0, s.createRef)(), A = () => {
            if (D.current) {
              const {
                current: e
              } = D, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), O(a + e)
              } else O(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            S(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            h(!1)
          }), []), (0, s.useEffect)((() => {
            A(), I()((() => {
              setTimeout(A, 0)
            }), 300)
          }), [o, i]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articleb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: D,
                style: {
                  "--scNavWrap-max-height": `${k+R}px`
                },
                children: T.map((e => (0, s.createElement)(P, {
                  ...e,
                  activeSubNavId: g,
                  setActiveSubNavId: b,
                  setSubNavExtraHeight: _,
                  onNavigate: c,
                  key: e.text
                })))
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: w ? null : "hidden"
              },
              children: (0, d.jsx)(E.A, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: m,
                setLanguageSelectorOpened: e => {
                  b(-1), u(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        },
        A = e => {
          let {
            characterData: a,
            setMobileCardWidth: c,
            tabIndex: l
          } = e;
          const m = (0, r.useIntl)(),
            {
              currentCharId: u,
              setCurrentCharId: f
            } = (0, p.useRockstarUserState)(),
            {
              track: g
            } = (0, p.useGtmTrack)(),
            b = (0, s.createRef)(),
            {
              platform: k,
              platformUsername: _,
              mugshotUrl: h,
              stats: w
            } = a,
            [x, v] = (0, s.useState)(h),
            [N] = (0, s.useState)(a.index),
            S = o(k, "large"),
            y = u === a.index;
          return (0, s.useEffect)((() => {
            b.current && c && c(b?.current?.offsetWidth)
          }), [b]), (0, d.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articled76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": y,
            onClick: e => {
              e.stopPropagation(), f(N);
              let a = "";
              "pc" === k ? a = "PC" : "ps4" === k ? a = "PS4" : "ps5" === k ? a = "PS5" : "xboxone" === k ? a = "Xbox One" : "xboxsx" === k && (a = "Xbox Series X|S"), g({
                event: "character_selector_select",
                text: a,
                position: N
              })
            },
            ref: b,
            tabIndex: l,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: x,
                alt: m.formatMessage(n.profile_selector_mugshot, {
                  userName: _
                }),
                onError: () => {
                  v(t(58989))
                }
              })
            }), (0, d.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlee9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, d.jsx)("img", {
                  src: S.src,
                  alt: S.alt
                }), (0, d.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: _
                })]
              }), (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlea5e3df42966a50f3dd88bbcb57536617",
                children: (0, d.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articlea6776312350028898320ba59145a39be",
                  children: [(0, d.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articleb266652910ad34c0e8e097b212a958f0",
                    src: i(w.overview.rank.value),
                    alt: m.formatMessage(n.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        $ = {
          pillBtn: "rockstargames-modules-core-newswire-articled9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-core-newswire-articlebc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-core-newswire-articleb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-core-newswire-articlec15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-core-newswire-articlea8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-core-newswire-articlec91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-core-newswire-articleda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-core-newswire-articled7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-core-newswire-articled5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-core-newswire-articleb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-core-newswire-articlea581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-core-newswire-articlebdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-core-newswire-articledc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-core-newswire-articleb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-core-newswire-articlef17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-core-newswire-articlef14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-core-newswire-articleb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-core-newswire-articleec696aafed90a7a4c69dc53da0a5bb36"
        },
        H = e => {
          let {
            character: a,
            platformTag: c
          } = e;
          const {
            data: o
          } = (0, p.useRockstarUser)(), {
            track: l
          } = (0, p.useGtmTrack)(), m = (0, r.useIntl)(), [u, f] = (0, s.useState)([]), [g, b] = (0, s.useState)(null), [k, _] = (0, s.useState)(null), [h, w] = (0, s.useState)(!1), [x, v] = (0, s.useState)(-1), [N, S] = (0, s.useState)([]), [y, C] = (0, s.useState)(0), M = t(58989), [j, I] = (0, s.useState)("0"), [E, L] = (0, s.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), B = () => {
            O((0, d.jsx)("img", {
              src: M,
              alt: m.formatMessage(n.profile_selector_mugshot, {
                userName: o.nickname
              })
            }))
          }, [R, O] = (0, s.useState)((0, d.jsx)("img", {
            className: $.scAvatarImg,
            src: a.mugshotUrl,
            alt: m.formatMessage(n.profile_selector_mugshot, {
              userName: o.nickname
            }),
            onError: B
          }));
          (0, s.useEffect)((() => {
            f(o.crews ?? [])
          }), [o]), (0, s.useEffect)((() => {
            O((0, d.jsx)("img", {
              src: a.mugshotUrl,
              alt: o.nickname,
              onError: B
            })), I(T(a.stats.overview.bank.value)), L(T(a.stats.overview.cash.value)), C(parseInt(a.stats.overview.rank.value))
          }), [a, o]), (0, s.useEffect)((() => {
            u && u.forEach((e => {
              !0 === e.isPrimary && (b(e.crewTag), _(e.crewColour), v(e.rankOrder), w(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && w(!0))
            }))
          }), [u]), (0, s.useEffect)((() => {
            const e = [];
            if (!h && x > -1)
              for (let a = 5; a > x; a -= 1) e.push((0, d.jsx)("div", {
                className: $.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== k ? k : ""
                }
              }, `crewrankbar-${a}`));
            S(e)
          }), [x, h, k]);
          const P = e => {
            e.stopPropagation(), l({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, d.jsxs)("div", {
            className: $.scProfileDetails,
            onClick: P,
            onKeyUp: P,
            role: "button",
            tabIndex: -1,
            children: [(0, d.jsxs)("div", {
              className: $.scAvatar,
              children: [R, (0, d.jsx)("div", {
                className: $.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, d.jsx)("img", {
                  src: c.src,
                  alt: c.alt
                })
              })]
            }), (0, d.jsxs)("div", {
              className: $.scProfileStats,
              children: [(0, d.jsx)("div", {
                className: $.scNames,
                children: (0, d.jsxs)("div", {
                  className: $.scTagsNames,
                  children: [(0, d.jsx)("span", {
                    className: $.scUserName,
                    children: a.platformUsername
                  }), g && (0, d.jsxs)("span", {
                    className: $.scCrewName,
                    "data-arrow-tag": h,
                    children: [g, !h && (0, d.jsx)("div", {
                      className: $.scCrewRankBar,
                      children: N
                    })]
                  })]
                })
              }), (0, d.jsxs)("div", {
                className: $.scProgress,
                children: [(0, d.jsxs)("div", {
                  className: $.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: $.scRpIcon,
                    src: i(y),
                    alt: m.formatMessage(n.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, d.jsxs)("div", {
                  className: $.scMoney,
                  children: [(0, d.jsxs)("span", {
                    className: $.scCash,
                    children: ["$", E]
                  }), (0, d.jsxs)("span", {
                    className: $.scBank,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        U = (e, a) => {
          const [t, r] = (0, s.useState)(0);
          return (0, s.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, s = t.getBoundingClientRect(), {
                width: c
              } = s;
              let o = c;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                o += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              r(o)
            }
          }), [e]), t
        },
        z = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: r = 17,
            slideChangeCallback: c = null,
            slideClickCallback: o = null,
            children: i = [],
            disablePager: n = !1,
            disableSwiper: l = !1
          } = e;
          const m = (0, s.createRef)(),
            u = U(m, !1),
            [f, g] = (0, s.useState)(!1),
            [p, b] = (0, s.useState)(0),
            [k, _] = (0, s.useState)(0),
            [h, w] = (0, s.useState)([r]),
            [x, v] = (0, s.useState)(h[0]),
            [N, S] = (0, s.useState)(252),
            [y, C] = (0, s.useState)(0),
            [M, j] = (0, s.useState)([]),
            [I, E] = (0, s.useState)([]),
            [L, T] = (0, s.useState)(!1),
            B = e => {
              if (!0 === f || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              _(a)
            },
            R = e => {
              if (!0 === f || 0 === k || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > k ? 1 : -1,
                r = Math.abs(k - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === f) return;
                g(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                b(e), v(h[e]), c && c(e)
              })() : (() => {
                if (!0 === f) return;
                g(!0);
                let e = p + 1 >= h.length ? h.length - 1 : p + 1;
                e < 0 && (e = 0), b(e), v(h[e]), c && c(e)
              })(), _(0)) : v(h[p] + r * s)
            },
            O = () => {
              !0 !== f && !0 !== l && (g(!0), !0 !== f && (v(h[p]), _(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, s.createRef)())
            })), j(e)
          }), [i]), (0, s.useEffect)((() => {
            if (M.length < 1) return;
            S(M[0]?.current?.clientWidth || 0);
            const e = M[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            C(t + a)
          }), [M]), (0, s.useEffect)((() => {
            !1 !== f && setTimeout((() => {
              g(!1)
            }), t)
          }), [f, t]), (0, s.useEffect)((() => {
            w(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * u - .5 * N - 2 * r + y : (0 === e && (a = r - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (u - (r - y))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * u - .5 * N + .5 * y)), a)
            })(a)))), 1 === i.length ? T(!0) : T(!1)
          }), [m.current, i, u]), (0, s.useEffect)((() => {
            const e = (a = p, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            E(e)
          }), [i, p]), (0, s.useEffect)((() => {
            !0 !== n && !0 !== l || v(h[0])
          }), [l, n, h]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleab70c3f9c67ecd69d19216a5f4de5049",
              ref: m,
              onTouchStart: B,
              onTouchMove: R,
              onTouchEnd: O,
              onMouseDown: B,
              onMouseMove: R,
              onMouseUp: O,
              onClick: () => {
                null !== o && o(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlea93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": f,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: i.map(((e, a) => (0, d.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlec013369a930e076d1729d086fb51903e",
                  ref: M[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === n && (0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleda8cfef07bf44e9a44839e2723ec61bb",
              children: I.map((e => (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlefe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        F = {
          pillBtn: "rockstargames-modules-core-newswire-articleaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-core-newswire-articled402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-core-newswire-articledde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-core-newswire-articlec47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-core-newswire-articlea4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-core-newswire-articleb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-core-newswire-articlea1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-core-newswire-articlea326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-core-newswire-articled19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-core-newswire-articlebb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-core-newswire-articlea7f1e2d78519eaf099bd43c6ad07abc9"
        },
        G = (0, f.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: c,
            refCharacterListDesktop: i,
            menuPadding: l,
            longCharList: m,
            setLongCharList: u,
            isMobileMode: b,
            setIsMobileMode: k,
            location: _,
            onNavigate: h
          } = e;
          const {
            windowWidth: w,
            windowHeight: x
          } = (0, f.useWindowResize)(), v = (0, r.useIntl)(), {
            languageSelectorOpened: N,
            setLanguageSelectorOpened: S,
            activeSubNavId: y,
            setActiveSubNavId: C,
            subNavExtraHeight: j,
            setSubNavExtraHeight: R,
            scNavOpened: O,
            setScNavOpened: D
          } = M(), [$, G] = (0, s.useState)(""), {
            lsSettings: W
          } = (0, f.useRockstarWebLSSettings)(), {
            track: V
          } = (0, p.useGtmTrack)(), X = (0, g.useRockstarTokenPing)(), {
            data: J,
            loggedIn: K
          } = (0, p.useRockstarUser)(), {
            charactersNeeded: Y,
            currentCharId: q,
            hasNotifications: Q,
            navOpen: Z,
            setCurrentCharId: ee,
            setHasNotifications: ae,
            setSelectedCharacterTuple: te,
            setUserData: se
          } = (0, p.useRockstarUserState)(), [re, ce] = (0, s.useState)(null), [oe, ie] = (0, s.useState)(null), [ne, le] = (0, s.useState)(!1), [de, me] = (0, s.useState)(!1), [ue, fe] = (0, s.useState)(0), ge = (0, s.createRef)(), pe = U(ge, !1), be = (0, s.createRef)(), [ke, _e] = (0, s.useState)(0), [he, we] = (0, s.useState)([]), [xe, ve] = (0, s.useState)(244), Ne = (0, s.useRef)(null), Se = (0, s.useMemo)((() => (0, L.A)()), []), ye = (0, s.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage(n.sc_link_activity_feed),
            location: {
              domain: L.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...T,
              text: n.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(n.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(n.sc_link_settings),
              location: {
                domain: L.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...T,
                text: n.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(n.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...T,
                text: n.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(n.sc_link_messages),
              location: {
                domain: L.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...T,
                text: n.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(n.sc_link_game_activation),
              location: {
                domain: L.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...T,
                text: n.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(n.sc_link_notifications),
            location: {
              domain: L.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...T,
              text: n.sc_link_notifications.defaultMessage,
              location: {
                domain: L.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(n.sc_link_crews),
            location: {
              domain: L.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...T,
              text: n.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(n.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(n.sc_link_my_friends),
              location: {
                domain: L.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...T,
                text: n.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(n.sc_link_import_friends),
              location: {
                domain: L.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...T,
                text: n.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(n.sc_link_find_friends),
              location: {
                domain: L.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...T,
                text: n.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, B(e), {
            text: e.formatMessage(n.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...T,
              text: n.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(v, a, J, Q, $, window)), [v, a, J, Q, $, Se]), Ce = () => {
            me(l + xe * ue < pe)
          }, Me = () => {
            if (be.current) {
              const {
                current: e
              } = be, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), _e(a + e)
              } else _e(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            Se.currentSite?.site === L.C.socialClub && (e = encodeURIComponent("/")), G(e)
          }), [_]), (0, s.useEffect)((() => {
            we(J.characters[Y] ?? [])
          }), [J, Y]), (0, s.useEffect)((() => {
            J && se(J)
          }), [J]), (0, s.useEffect)((() => {
            const e = J?.characters.gtao;
            if (null !== K && !e.length) return void te(!1);
            if (null == q || !e.length) return;
            const a = e?.[q] ?? e?.[0] ?? null;
            te(!!a?.platform && [a.platform, a.characterSlot])
          }), [q, J, K]), (0, s.useEffect)((() => {
            (async () => {
              if (!J?.id) return;
              const {
                count: e
              } = await (0, f.coreScApiFetch)("notification/count", {
                pingBearer: X
              });
              ae(e > 0)
            })()
          }), [J]), (0, s.useEffect)((() => {
            Ce()
          }), [xe]), (0, s.useEffect)((() => {
            c(!0), k(w < 768), k(w < 768 || x < 649)
          }), [w, x]), (0, s.useEffect)((() => {
            let e = he.length - 1;
            e < 0 && (e = 0), fe(e);
            const a = he.length > 0 ? he[q] ?? he[0] : null;
            if (!a) return;
            const t = null !== a ? o(a.platform, "large") : null;
            ie(t), ce(a), he.length > 1 ? le(!0) : le(!1), u(he.length - 1 > 3)
          }), [q, he]), (0, s.useEffect)((() => {
            Ce()
          }), [ue, b, w, he]), (0, s.useEffect)((() => {
            Me(), I()((() => {
              setTimeout(Me, 0)
            }), 300)
          }), [w, x]), (0, s.useEffect)((() => {
            const e = W?.currentCharId ?? 0;
            e !== q && ee(Math.max(0, Math.min(e, he.length - 1)))
          }), [he, W]), (0, d.jsxs)(d.Fragment, {
            children: [null !== re && "gtao" === Y && (0, d.jsxs)("div", {
              className: F.scProfile,
              ref: Ne,
              tabIndex: -1,
              "aria-label": v.formatMessage(n.profile_selector_profile_card),
              children: [(0, d.jsx)(H, {
                s: F,
                character: re,
                platformTag: oe
              }), !0 === ne && (0, d.jsxs)("div", {
                className: F.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: F.scCharacterSelectBtn,
                  "aria-hidden": !Z,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    c(a), V({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, d.jsx)("span", {
                    children: (0, d.jsx)(r.FormattedMessage, {
                      ...n.profile_selector_switch_character
                    })
                  })
                }), !1 === b && (0, d.jsx)("div", {
                  className: F.scCharacterList,
                  "data-long-list": m,
                  "aria-hidden": t,
                  ref: i,
                  children: he.map((e => (0, d.jsx)(A, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ve
                  }, e.mugshotUrl)))
                }), !0 === b && (0, d.jsx)("div", {
                  className: F.scCharacterList,
                  "data-single-item": 2 === he.length,
                  "data-swiper-disabled": de,
                  "aria-hidden": t,
                  ref: ge,
                  children: (0, d.jsx)(z, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      V({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: de,
                    disableSwiper: de,
                    children: he.filter(((e, a) => a !== q)).map((e => (0, s.createElement)(A, {
                      characterData: e,
                      setMobileCardWidth: ve,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, d.jsxs)("nav", {
              className: F.scNav,
              "aria-hidden": !Z,
              children: [(0, d.jsx)("button", {
                className: F.scNavHeader,
                type: "button",
                "data-opened": O,
                "data-nav-opened": Z,
                tabIndex: O ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), O || D(!0)
                },
                "data-testid": "playerButton",
                children: (0, d.jsx)("span", {
                  children: J.nickname
                })
              }), (0, d.jsx)("div", {
                className: F.scNavWrap,
                "data-opened": O,
                "data-logged-in": "true",
                ref: be,
                style: {
                  "--scNavWrap-max-height": `${ke+j}px`
                },
                children: ye.map(((e, a) => (0, s.createElement)(P, {
                  ...e,
                  id: a,
                  activeSubNavId: y,
                  setActiveSubNavId: C,
                  setSubNavExtraHeight: R,
                  onNavigate: h,
                  key: e.text
                })))
              })]
            }), (0, d.jsx)("div", {
              className: F.scLanguageSelector,
              style: {
                visibility: Z ? null : "hidden"
              },
              children: (0, d.jsx)(E.A, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: N,
                setLanguageSelectorOpened: S,
                location: _
              })
            })]
          })
        })),
        W = {
          scMenu: "rockstargames-modules-core-newswire-articleebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-core-newswire-articlef333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-core-newswire-articlee3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-core-newswire-articleff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-core-newswire-articleba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-core-newswire-articled362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-core-newswire-articled8e443f5d0d9171449f5f1042f80aa17"
        },
        V = (0, r.withIntl)((e => {
          let {
            location: a,
            onNavigate: c
          } = e;
          const {
            windowHeight: o
          } = (0, f.useWindowResize)(), i = (0, r.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: m,
            setActiveSubNavId: b,
            scNavOpened: k,
            setScNavOpened: _,
            charListHidden: h,
            setCharListHidden: w
          } = M(), [x, v] = (0, s.useState)(!1), {
            navHidden: N = !1
          } = (0, g.useState)(), {
            loggedIn: S
          } = (0, p.useRockstarUser)(), {
            currentCharId: y,
            navOpen: C,
            setNavOpen: j,
            userData: I
          } = (0, p.useRockstarUserState)(), {
            track: E
          } = (0, p.useGtmTrack)(), [L, T] = (0, s.useState)(!1), B = (0, g.useReactiveVar)(p.scConfig), R = (0, s.useRef)(), [O, P] = (0, s.useState)(0), A = (0, s.createRef)(), [$, H] = (0, s.useState)(!1), [U, z] = (0, s.useState)(0), [F, V] = (0, s.useState)(!1), {
            mutateLSSettings: X,
            lsSettings: J
          } = (0, f.useRockstarWebLSSettings)(), K = (0, s.useCallback)((e => {
            w(e), R.current && !0 === e && (R.current.scrollTop = 0)
          }), [R]);
          return (0, s.useEffect)((() => {
            null !== y && J.currentCharId !== y && X({
              key: "currentCharId",
              value: y
            }), !1 === S ? X({
              key: "currentCharId",
              value: null
            }) : S && !I && E({
              event: "account_synced"
            })
          }), [y, S]), (0, s.useEffect)((() => {
            R.current && (!1 === h && !1 === L && (R.current.style.height = `${R.current.scrollHeight}px`), !0 === h && (R.current.style.height = null))
          }), [h, R, L]), (0, s.useEffect)((() => {
            const e = () => {
                j(!1), K(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, s.useEffect)((() => {
            j(!1), K(!0)
          }), [N]), (0, s.useEffect)((() => {
            if (A.current) {
              const {
                current: e
              } = A, a = window.getComputedStyle(e);
              P(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [A]), (0, s.useEffect)((() => {
            V(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            A.current && v(A?.current?.scrollHeight >= o)
          }), [A, o]), (0, s.useEffect)((() => {
            C || (b(-1), m(!1))
          }), [C]), (0, s.useEffect)((() => {
            l && (h || K(!0), k && (_(!1), b(-1)))
          }), [l]), (0, s.useEffect)((() => {
            k && (l && m(!1), h || K(!0))
          }), [k]), null === S ? null : (0, d.jsxs)(u.A, {
            enabled: !!C,
            removeScrollBar: !1,
            children: [(0, d.jsxs)("div", {
              className: [W.scMenu, C ? W.navOpen : ""].join(" "),
              "data-logged-in": S,
              "data-mac-browser": F,
              "data-scroll-mode": x,
              ref: A,
              "aria-hidden": !C,
              children: [(0, d.jsx)("button", {
                className: W.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(a)
                },
                onTouchMove: e => {
                  if (0 === U) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(U - a) > 1 && (z(0), j(!1))
                },
                children: (0, d.jsx)("img", {
                  className: W.dragHandle,
                  src: t(68128),
                  alt: i.formatMessage(n.sc_menu_drag_handle)
                })
              }), S ? (0, d.jsx)(G, {
                sc: B,
                charListHidden: h,
                hideCharacterList: K,
                refCharacterListDesktop: R,
                menuPadding: O,
                longCharList: L,
                setLongCharList: T,
                isMobileMode: $,
                setIsMobileMode: H,
                location: a,
                onNavigate: c
              }) : (0, d.jsx)(D, {
                sc: B,
                navOpen: C,
                location: a,
                onNavigate: c
              })]
            }), (0, d.jsx)("div", {
              className: [W.scOverlay, C ? W.navOpen : ""].join(" "),
              "data-logged-in": S
            })]
          })
        }), c),
        X = t(58989),
        J = t(81764),
        K = (0, r.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, r.useIntl)(),
            {
              data: c
            } = (0, p.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: l,
              navOpen: m,
              setNavOpen: u
            } = (0, p.useRockstarUserState)(),
            {
              track: f
            } = (0, p.useGtmTrack)(),
            [g, b] = (0, s.useState)(null),
            [k, _] = (0, s.useState)(!1),
            [h, w] = (0, s.useState)(null),
            [x, v] = (0, s.useState)(!1),
            [N, S] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            S(c.characters[i] ?? [])
          }), [c, i]);
          const y = (0, s.useCallback)((e => {
            e.stopPropagation(), u(!m), 1 == !m && a(null), f({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: m ? "close" : "open"
            })
          }), [m]);
          return (0, s.useEffect)((() => {
            const e = c?.id ?? !1,
              a = e ? (N?.[l]?.mugshotUrl ?? c?.avatar) || X : J,
              t = o(N?.[l]?.platform, "small") ?? null;
            w(t), b(a), _(e), v(!!N?.[l]?.mugshotUrl)
          }), [c, N, l, X, J]), (0, d.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articledc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": x,
            "aria-label": t.formatMessage(m ? n.sc_menu_close : n.sc_menu_open),
            "aria-expanded": m,
            type: "button",
            onClick: y,
            "data-testid": "avaterMenuButton",
            "data-logged-in": Boolean(k),
            children: [(0, d.jsx)("img", {
              className: "rockstargames-modules-core-newswire-articlece75eaa6d65692d36b60d31f3f660ff0",
              src: g || "",
              onError: () => {
                b(X)
              },
              alt: c?.nickname || ""
            }), k && null !== h && (0, d.jsx)("img", {
              className: "rockstargames-modules-core-newswire-articleaaf21e74a659089f743bb160bdf95046",
              src: h.src,
              alt: h.alt
            }), k && (0, d.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-newswire-articlecf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": N?.[l]?.platform ?? null
            })]
          })
        }), c)
    },
    62811: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(89779);
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
      var c = t(46632);
      const o = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r,
            ariaLabel: o
          } = e;
          return (0, c.jsx)("button", {
            className: t,
            onClick: s,
            style: r,
            type: "button",
            "aria-label": o,
            children: a
          })
        },
        i = e => {
          let {
            children: a,
            className: t,
            onClick: r,
            style: o,
            to: i,
            ariaLabel: n
          } = e;
          return (0, c.jsx)(s.NavLink, {
            className: t,
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
            className: t = "",
            consoleBtn: s,
            icon: n = "",
            img: l,
            labelColor: d = "#000",
            onClick: m,
            secondText: u,
            size: f,
            text: g,
            to: p,
            type: b = "",
            ariaLabel: k
          } = e;
          const _ = [r.plusButton, r[b] ?? "", r[f] ?? "", r[s] ?? "", t].join(" "),
            h = {
              "--hvr-color": a ?? d,
              "--hvr-bg-color": d ?? a,
              "--hvr-border-color": a ?? d
            },
            w = (0, c.jsxs)(c.Fragment, {
              children: [l ? (0, c.jsx)("img", {
                src: l,
                alt: ""
              }) : "", (0, c.jsxs)("div", {
                className: r.btnText,
                icon: n,
                children: [g, u ? (0, c.jsx)("span", {
                  children: u
                }) : ""]
              })]
            });
          if (p) {
            if (p.startsWith("http")) {
              const e = p.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, c.jsx)("span", {
                onClick: m,
                onKeyDown: m,
                className: _,
                role: "button",
                "aria-label": k,
                tabIndex: 0,
                children: (0, c.jsx)("a", {
                  href: p,
                  target: e,
                  children: w
                })
              })
            }
            return (0, c.jsx)(i, {
              className: _,
              onClick: m,
              style: {
                ...h
              },
              to: p,
              ariaLabel: k,
              children: w
            })
          }
          return (0, c.jsx)(o, {
            className: _,
            onClick: m,
            style: {
              ...h
            },
            ariaLabel: k,
            children: w
          })
        }
    },
    13963: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        c = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = r.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, r] = a;
            return r === t && (e = {
              site: s,
              subDomain: r
            }, !0)
          })) >= 0)), c = r[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...c,
            currentSite: e
          }
        }
    },
    52917: (e, a, t) => {
      var s = {
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
        return t(a)
      }

      function c(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
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
    }
  }
]);