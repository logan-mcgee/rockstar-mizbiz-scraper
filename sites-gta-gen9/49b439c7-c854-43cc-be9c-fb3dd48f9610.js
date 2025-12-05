try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "49b439c7-c854-43cc-be9c-fb3dd48f9610", e._sentryDebugIdIdentifier = "sentry-dbid-49b439c7-c854-43cc-be9c-fb3dd48f9610")
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
  [9256], {
    93: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f3cd7bceb936bb313fbaa15e89098a8.jpg"
    },
    196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8d3469e461dfaf53704716cf0c00122b.jpg"
    },
    411: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0c1a2047eb6f0b36a6bf448c3f41da18.jpg"
    },
    688: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c7c1d299b6713247a8e0512441bcd02.jpg"
    },
    1117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    1303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab17ff9e69584963068de0d98e8fe15a.jpg"
    },
    1676: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc26b040f6c53b4212633bfc75c69b57.jpg"
    },
    1813: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8b4ac9af863cb3e25ec1776ddbd95303.jpg"
    },
    2388: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        PackPage: () => Pa,
        default: () => xa
      });
      var r = s(42295),
        t = s(62229),
        o = s(42828),
        c = s(12100),
        _ = s(46209),
        n = s(72408),
        i = s(20517),
        l = s(81788),
        d = s(95966),
        p = s(2918),
        g = s(87330),
        m = s(99047),
        h = s(61128),
        u = s(62665);
      const b = {
          bronze: "rockstargames-sites-gta-gen9ccc1ff688469913c14d7a32f53b6d5b9",
          check: "rockstargames-sites-gta-gen9a51a856a5761f57f47e43989c32152b0",
          completed: "rockstargames-sites-gta-gen9cde87dc6c509c53f2343048aea7e8596",
          gold: "rockstargames-sites-gta-gen9a08a56eda639bb720e0b882c1aa66461",
          platinum: "rockstargames-sites-gta-gen9ed260c1ec81569e5a3f81ae9f1447738",
          silver: "rockstargames-sites-gta-gen9c99094b4bae2f6c6b60467dad3f7f347"
        },
        f = "Check:container",
        R = ({
          alt: e,
          type: a,
          classes: s = ""
        }) => (0, r.jsx)("div", {
          className: [s, b.check, a ? b[a] : null].join(" "),
          "data-testid": f,
          children: (0, r.jsxs)("svg", {
            width: "6",
            height: "4",
            viewBox: "0 0 6 4",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            children: [(0, r.jsx)("title", {
              children: e
            }), (0, r.jsx)("path", {
              d: "M5 0.5L2.25 3.25L1 2",
              strokeWidth: "1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        });
      var E = s(28759);
      const k = {
          completed: "rockstargames-sites-gta-gen9f7afb0758101969b3610535a42699bae",
          locked: "rockstargames-sites-gta-gen9da8abe8790deaee529068d8430036530",
          metalLegend: "rockstargames-sites-gta-gen9ce7453c85a0f795abfa35bf632bc674b",
          single: "rockstargames-sites-gta-gen9b36e10830b35e97cd4a5f5596cc7bebd"
        },
        S = ({
          metals: e,
          currentLevel: a,
          currentLevelComplete: s,
          classes: t = ""
        }) => {
          const {
            formatMessage: o
          } = (0, l.useIntl)();
          return (0, r.jsx)("ul", {
            className: [k.metalLegend, t || "", 1 === e.length ? k.single : ""].join(" "),
            children: e.map((t, c) => {
              const _ = c < e.indexOf(a) || c === e.indexOf(a) && s;
              return (0, r.jsx)("li", {
                "data-unlocked": _,
                children: _ ? (0, r.jsx)(R, {
                  alt: o(E.D.cph_awards_metal_completed, {
                    metal: o(E.D[`cph_awards_${t}`])
                  }),
                  type: t,
                  classes: k.completed
                }) : (0, r.jsx)("div", {
                  className: [k.locked, k[t]].join(" "),
                  "aria-label": o(E.D.cph_awards_metal_not_unlocked, {
                    metal: o(E.D[`cph_awards_${t}`])
                  })
                })
              }, t)
            })
          })
        },
        v = {
          bronze: "rockstargames-sites-gta-gen9dba71965197e13a72039655484eb0773",
          collapsed: "rockstargames-sites-gta-gen9de06440607e887d2bc9996f2cdf2ff23",
          filler: "rockstargames-sites-gta-gen9b0cd6cffabce12d55ede5cc60f3ead00",
          gold: "rockstargames-sites-gta-gen9e7482493e1ed6b6643c2aee595fe98a3",
          pillBtn: "rockstargames-sites-gta-gen9fb165c6c996baceaba16a1fec132a7a0",
          platinum: "rockstargames-sites-gta-gen9ffa20ebff3c415b7cc084c79b088d8dc",
          progressBar: "rockstargames-sites-gta-gen9e7d8151984232726d6ec89cce703b447",
          selected: "rockstargames-sites-gta-gen9a59db1266274f5990b97b180bda67400",
          silver: "rockstargames-sites-gta-gen9a3f71d958b5902db53592989ef6ea69d",
          visuallyHidden: "rockstargames-sites-gta-gen9e528602d07c387723e1a60abb575b3c7"
        },
        j = "ProgressBar:barContainer",
        w = ({
          theme: e,
          percentage: a,
          isExpanded: s = !1,
          classes: t = ""
        }) => {
          const o = (0, l.useIntl)();
          return (0, r.jsx)("div", {
            className: `${t} ${[v.progressBar,e&&v[e],s?"":v.collapsed].join(" ")}`,
            role: "progressbar",
            "aria-label": o.formatMessage(E.D.cph_progress_bar_aria),
            "data-testid": j,
            children: (0, r.jsx)("div", {
              className: [v.filler, e && v[e]].join(" "),
              style: {
                width: `${a}%`
              },
              children: (0, r.jsx)("span", {
                className: v.visuallyHidden,
                children: `${a}%`
              })
            })
          })
        },
        A = (0, l.defineMessages)({
          cph_progres_counter_awards_label: {
            id: "cph_progres_counter_awards_label",
            description: "Progress counter label for screen readers",
            defaultMessage: "{total, plural, one {{value} out of 1 award completed} other {{value} out of # awards completed}}"
          },
          cph_progres_counter_challenges_label: {
            id: "cph_progres_counter_challenges_label",
            description: "Progress counter label for screen readers",
            defaultMessage: "{total, plural, one {{value} out of 1 challenge completed} other {{value} out of # challenges completed}}"
          }
        }),
        P = {
          bronze: "rockstargames-sites-gta-gen9d0cdd5d8047c579954d6f12112c53612",
          gold: "rockstargames-sites-gta-gen9d3ee7efd7776c6651d438c6a7e573019",
          light: "rockstargames-sites-gta-gen9c3a3363f7525a55fd302856299c8676e",
          pillBtn: "rockstargames-sites-gta-gen9ac060422b75e3919e40ea2e935c3e099",
          platinum: "rockstargames-sites-gta-gen9a6dbdcb32a9992c95d2e6c1d20ed0657",
          progressCounter: "rockstargames-sites-gta-gen9deaa160754445c204b787cf671caa3f2",
          selected: "rockstargames-sites-gta-gen9d320e21694c690ed68ae0754cc8a69d9",
          silver: "rockstargames-sites-gta-gen9b7ba8be09fc800fcbbf4319c58bd22ff",
          slash: "rockstargames-sites-gta-gen9a01f30b29ebe7e9cffd078c146375bfe",
          visuallyHidden: "rockstargames-sites-gta-gen9e0a675f35ea97975dd3a4e5af91cf643"
        };
      var x = function(e) {
        return e[e.Awards = 1] = "Awards", e[e.Challenges = 2] = "Challenges", e
      }({});
      const T = "ProgressCounter:currentValue",
        I = "ProgressCount:totalValue",
        C = ({
          type: e = 1,
          value: a,
          total: s,
          theme: t,
          classes: o
        }) => {
          const c = (0, l.useIntl)();
          let _ = null;
          switch (e) {
            case 1:
            default:
              _ = A.cph_progres_counter_awards_label;
              break;
            case 2:
              _ = A.cph_progres_counter_challenges_label
          }
          return (0, r.jsxs)("div", {
            className: [P.progressCounter, ...o ? [o] : []].join(" "),
            "data-testid": "progressCounter",
            children: [(0, r.jsx)("span", {
              "aria-hidden": !0,
              "data-testid": T,
              children: void 0 === a ? "--" : a
            }), (0, r.jsx)("span", {
              "aria-hidden": !0,
              className: P.slash
            }), (0, r.jsx)("span", {
              "aria-hidden": !0,
              className: t && P[t],
              "data-testid": I,
              children: s
            }), (0, r.jsx)("span", {
              className: P.visuallyHidden,
              children: c.formatMessage(_, {
                value: void 0 === a ? 0 : a,
                total: s
              })
            })]
          })
        },
        O = {
          award: "rockstargames-sites-gta-gen9a087ea2af965ea3fd8d248f3884e8279",
          awardContent: "rockstargames-sites-gta-gen9ef4f6fd4548cdad250a5dac7ed5dfd68",
          awardDetails: "rockstargames-sites-gta-gen9b57bcba2680bf8d324cb90adad326ee9",
          awardHint: "rockstargames-sites-gta-gen9c2068609c139124b3590906e83f4265b",
          awardImage: "rockstargames-sites-gta-gen9bb669dbbd3a563c11c671443b6f79d7d",
          awardInfo: "rockstargames-sites-gta-gen9b8c92925ef5d9e424949f7a55c522b2d",
          awardName: "rockstargames-sites-gta-gen9d50b7c32ef59e258543434f7de9d2cfd",
          completed: "rockstargames-sites-gta-gen9a08d3f454d1d60b71c7a4913e3eea114",
          expanded: "rockstargames-sites-gta-gen9a590bdddab2d5b767e510fb497df2f1d",
          fadeItemsIn: "rockstargames-sites-gta-gen9df04f2639d1ff6279d8b155631846f8d",
          hovered: "rockstargames-sites-gta-gen9e843e2fd499bf1e57aec13725392ba2c",
          metalLegendContainer: "rockstargames-sites-gta-gen9b1da8c32071659e9819118b52b0ffd98",
          pillBtn: "rockstargames-sites-gta-gen9d80153c10aee23a33172cb1e141d8e3d",
          progressBar: "rockstargames-sites-gta-gen9fee62eeecd2a74d37e4ba603f07c63b1",
          progressCounter: "rockstargames-sites-gta-gen9a4e9e903e789157f9da0530205f67913",
          selected: "rockstargames-sites-gta-gen9f343b89f95c4c289e48593070ab4cfb3",
          tooltip: "rockstargames-sites-gta-gen9fe7b7286342fe607c158d77310bd6dd9",
          tooltipInner: "rockstargames-sites-gta-gen9da390e5f246e32dc4a2c873b54bfe4f1"
        },
        N = {
          bonusList: "rockstargames-sites-gta-gen9fa753cb17199eb90caad571fcfdb2449",
          check: "rockstargames-sites-gta-gen9facf6c5125ab4d54376d8f43bf9da8cc",
          isComplete: "rockstargames-sites-gta-gen9d06f2089a4f52ff8d605a62d5111f506",
          pillBtn: "rockstargames-sites-gta-gen9c548371cc7922dcefd2874d69b857745",
          platinum: "rockstargames-sites-gta-gen9f57bcb9600428695290ce00173fd17b3",
          selected: "rockstargames-sites-gta-gen9ba9983b4bcabf3c7a32bf0f1f30ae86c",
          title: "rockstargames-sites-gta-gen9e77660ce7ed1d115c8a3448b6cf9b849"
        },
        G = ({
          bonuses: e,
          currentLevelComplete: a
        }) => {
          const s = (0, l.useIntl)();
          return (0, r.jsxs)("div", {
            className: N.bonuses,
            children: [(0, r.jsx)("h6", {
              className: N.title,
              children: s.formatMessage(E.D.cph_awards_bonuses_title)
            }), (0, r.jsx)("ul", {
              className: N.bonusList,
              children: e.map(e => (0, r.jsxs)("li", {
                children: [(0, r.jsx)(R, {
                  alt: e.title,
                  classes: [N.check, a ? N.isComplete : ""].join(" ")
                }), "TATTOO" === e.type ? s.formatMessage(E.D.cph_awards_bonuses_tattoo, {
                  tattooName: e.title
                }) : e.title, (0, r.jsx)("span", {
                  className: N.platinum,
                  children: `(${s.formatMessage(E.D.cph_awards_platinum)})`
                })]
              }, e.title))
            })]
          })
        },
        {
          cdnBase: W
        } = (0, d.getConfigForDomain)(),
        y = "bronze",
        z = "platinum",
        D = [y, "silver", "gold", z],
        V = ({
          award: e,
          isExpanded: a,
          isMobile: s,
          toggleModal: o,
          classes: c,
          position: _,
          hoverFn: n,
          setHoveredAwardId: i,
          isShowTooltip: l
        }) => {
          const d = ((e, a = []) => {
              const s = {
                currentLevel: a.length && a.length > 1 ? y : z,
                isComplete: !1,
                levelEnd: a.length > 0 ? a[0] : 1,
                metalLevel: 0,
                percent: 0,
                progress: void 0 === e ? void 0 : Number(e)
              };
              if (void 0 === s.progress || 0 === s.progress) return s;
              if (a.length > 1 && s.progress >= a[a.length - 1] || !a.length && s.progress >= 1) s.isComplete = !0, s.percent = 100, s.levelEnd = a.length ? a[a.length - 1] : 1, s.currentLevel = a.length ? D[a.length - 1] : s.currentLevel, s.progress = s.levelEnd;
              else if (1 === a.length) s.percent = s.progress > 0 ? s.progress / s.levelEnd * 100 : 0, s.isComplete = Boolean(s.progress >= s.levelEnd), s.progress = s.isComplete ? s.levelEnd : s.progress;
              else {
                let e = a.findIndex((e, r) => {
                  const t = 0 === r ? 0 : r - 1;
                  return void 0 !== s.progress && s.progress >= a[t] && s.progress < e
                });
                if (e < 0 && (e = 0), e >= 0) {
                  const c = 0 === e ? 0 : e - 1;
                  s.currentLevel = D[e], s.levelEnd = a[e], s.metalLevel = e, s.percent = (r = s.progress, t = c, o = s.levelEnd, Math.floor(100 * (r - t) / (o - t) + 0))
                }
              }
              var r, t, o;
              return s
            })(e.playerProgress, e.levels),
            g = s ? u.motion.button : "li",
            [h, b] = (0, t.useState)(null),
            [f, R] = (0, t.useState)(null),
            [E, k] = (0, t.useState)(null),
            {
              track: v
            } = (0, p.useGtmTrack)(),
            {
              styles: j,
              attributes: A
            } = (0, m.E)(h, f, {
              modifiers: [{
                name: "flip",
                options: {
                  allowedAutoPlacements: ["top"],
                  fallbackPlacements: ["bottom"]
                }
              }],
              placement: "auto"
            });

          function P(e) {
            s || (n(e), i(e ? _ : null))
          }(0, t.useEffect)(() => {
            if (!l && E) clearTimeout(E), k(null);
            else if (l && !E) {
              const e = setTimeout(() => {
                v({
                  element_placement: "awards",
                  event: "awards_hover",
                  position: _
                })
              }, 1e3);
              k(e)
            }
          }, [l, E]);
          const x = {
              collapsed: {
                maxHeight: "0",
                opacity: 0,
                overflow: "hidden",
                transition: {
                  damping: 100,
                  duration: .3,
                  ease: "easeIn",
                  stiffness: 1e3
                }
              },
              expanded: {
                maxHeight: "5rem",
                opacity: 1,
                transition: {
                  damping: 100,
                  duration: .3,
                  ease: "easeInOut",
                  stiffness: 1e3
                }
              }
            },
            T = (0, t.useRef)(null);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(g, {
              ..."li" !== g && {
                layout: "position"
              },
              className: [O.award, ...d.isComplete ? [O.completed] : [], ...a ? [O.expanded] : [], ...l ? [O.hovered] : [], ...c ? [c] : []].join(" "),
              ref: s ? T : b,
              tabIndex: 0,
              ...s && !a && {
                onClick: () => {
                  o(), v({
                    element_placement: "awards",
                    event: "awards_click",
                    position: _
                  })
                }
              },
              ...s && a && {
                disabled: !0
              },
              ...!s && {
                onBlur: () => P(!1),
                onFocus: () => P(!0),
                onMouseOut: () => P(!1),
                onMouseOver: () => P(!0)
              },
              "data-testid": "award",
              "aria-describedby": !s && l ? `tooltip-${e.imageName}` : null,
              role: "button",
              children: [(0, r.jsxs)(u.motion.div, {
                className: O.awardContent,
                children: [(0, r.jsxs)("div", {
                  className: O.awardInfo,
                  children: [(0, r.jsx)(u.motion.div, {
                    className: O.awardImage,
                    layout: "position",
                    children: (0, r.jsx)(u.motion.img, {
                      src: `${W}/images/games/GTAV/multiplayer/award/${d.currentLevel}/${e.imageName}.png`,
                      alt: e.name,
                      layout: "position"
                    })
                  }), (0, r.jsxs)(u.motion.div, {
                    className: O.awardDetails,
                    layout: !0,
                    children: [(0, r.jsx)("h3", {
                      className: O.awardName,
                      children: e.name
                    }), s && (0, r.jsx)(u.motion.div, {
                      className: O.awardHint,
                      initial: "collapsed",
                      variants: x,
                      animate: a ? "expanded" : "collapsed",
                      children: e.hint
                    }), (0, r.jsx)(C, {
                      theme: d.currentLevel,
                      value: d.progress,
                      total: d.levelEnd,
                      classes: O.progressCounter
                    }), e.bonuses && s && (0, r.jsx)(u.motion.div, {
                      initial: "collapsed",
                      variants: x,
                      animate: a ? "expanded" : "collapsed",
                      children: (0, r.jsx)(G, {
                        currentLevelComplete: d.isComplete,
                        bonuses: e.bonuses
                      })
                    })]
                  })]
                }), !d.isComplete && (0, r.jsx)(w, {
                  theme: d.currentLevel,
                  percentage: d.percent,
                  isExpanded: a,
                  classes: O.progressBar
                })]
              }), (0, r.jsx)("div", {
                className: O.metalLegendContainer,
                children: (0, r.jsx)(S, {
                  metals: e.levels && e.levels.length > 1 ? D : [z],
                  currentLevel: d.currentLevel,
                  currentLevelComplete: d.isComplete,
                  classes: O.metalLegend
                })
              })]
            }), !s && (0, r.jsx)("div", {
              id: `tooltip-${e.imageName}`,
              role: "tooltip",
              className: O.tooltip,
              style: j.popper,
              ref: R,
              ...A,
              children: (0, r.jsxs)("div", {
                className: O.tooltipInner,
                children: [e.hint, e.bonuses && (0, r.jsx)(G, {
                  currentLevelComplete: d.isComplete,
                  bonuses: e.bonuses
                })]
              })
            })]
          })
        },
        L = {
          award: "rockstargames-sites-gta-gen9f72683dea1363400165916b6ffb4dce7",
          awardCategory: "rockstargames-sites-gta-gen9a4b0927e59d85a3cdea4f8153878c0d1",
          awardCategoryContainer: "rockstargames-sites-gta-gen9b5b447e9043f3b3efb3dde4bb7946ad8",
          awardCategoryName: "rockstargames-sites-gta-gen9d7316087c7b5f0ae2acf871b9a438a41",
          awardCount: "rockstargames-sites-gta-gen9fc2f4ccdf4e7695b77e74c2bca63b7d7",
          awardsCategoryClose: "rockstargames-sites-gta-gen9a1ff8beda6a5ea82608a8c477f1119a4",
          awardsCategoryOpen: "rockstargames-sites-gta-gen9a6dbbe750df65eeaeb2e88a7f35ac246",
          awardsContainer: "rockstargames-sites-gta-gen9d7fbb31f80a9cd522709b0fcbe6c7d3f",
          awardsOuter: "rockstargames-sites-gta-gen9f0e19cfa3c9f7d04f6c0a0eb01dec96d",
          awardsTitle: "rockstargames-sites-gta-gen9d4fdb3f93d0b64e0268e55d85a3422c2",
          categoryWrapper: "rockstargames-sites-gta-gen9f7dc23384d4c28e10ae384a55bb1ae1c",
          expanded: "rockstargames-sites-gta-gen9e0e147656239991d4423915e82e7f34e",
          fadeIn: "rockstargames-sites-gta-gen9dee0ede3ac4182586e73ecb288823627",
          fadeInAwards: "rockstargames-sites-gta-gen9b0f79acec70f51aee77f476e6fd111c9",
          fadeOutAwards: "rockstargames-sites-gta-gen9fcb8d50b3cf527860f36af1f738b3789",
          hovered: "rockstargames-sites-gta-gen9ab0d53d2db1ff07c3436ea6f9ff0f177",
          isClosed: "rockstargames-sites-gta-gen9d472e83a3035aa3f32a1c9fe70274375",
          isClosing: "rockstargames-sites-gta-gen9a5c28eda221b966ad3b9237e561fda86",
          isOpen: "rockstargames-sites-gta-gen9ba24750fa5a67326d69262a7f7941521",
          modalOpen: "rockstargames-sites-gta-gen9fb43bceab36ad79ad916185fc1f633f0",
          peek: "rockstargames-sites-gta-gen9de29da8a30baee82fe974f26381e40fb",
          pillBtn: "rockstargames-sites-gta-gen9c0b8c07d0e12aa319afe7771ff94251d",
          rpBronze: "rockstargames-sites-gta-gen9d5d8e0567dce53fe012f279725274b76",
          rpGold: "rockstargames-sites-gta-gen9f29aaf447dfa6cde3af1feb9b54fe90f",
          rpGrid: "rockstargames-sites-gta-gen9b2025ba1bf4c463391b877baac9d34de",
          rpInfo: "rockstargames-sites-gta-gen9d7af3f4abfc8d437c083df8a631fb4ea",
          rpLevel: "rockstargames-sites-gta-gen9b068d4142517fea8276b2b8183d1be06",
          rpPlatinum: "rockstargames-sites-gta-gen9e8148b6e0c7805697c18108b2456541a",
          rpSilver: "rockstargames-sites-gta-gen9a732d2bd0458df0d24df054dba8a7220",
          selected: "rockstargames-sites-gta-gen9b1680a8e15d60d37d8a4e82c4ca1e1dc",
          showLess: "rockstargames-sites-gta-gen9e3bd6638cbde85ee9d059072dee9884e",
          showMore: "rockstargames-sites-gta-gen9c0591fb73c719e0919020a0fb898e1bf",
          slideBtnIn: "rockstargames-sites-gta-gen9c5ca9e85106111e76d6191769c38b5b9",
          tooltip: "rockstargames-sites-gta-gen9f3852e5810b82b25bff2b9309c96bee6",
          tooltipIcon: "rockstargames-sites-gta-gen9a42a8864e1cd192a28ace8756c4e4160",
          tooltipInner: "rockstargames-sites-gta-gen9e95b68b76d4ff6774cabaf4eae910508"
        },
        B = [{
          max: 767,
          min: 0,
          peek: 1,
          show: 6
        }, {
          max: 1279,
          min: 767,
          peek: 2,
          show: 8
        }, {
          max: 1919,
          min: 1280,
          peek: 3,
          show: 12
        }, {
          max: 0,
          min: 1920,
          peek: 4,
          show: 16
        }],
        M = [{
          value: 100,
          message: E.D.cph_awards_bronze,
          className: L.rpBronze
        }, {
          value: 200,
          message: E.D.cph_awards_silver,
          className: L.rpSilver
        }, {
          value: 400,
          message: E.D.cph_awards_gold,
          className: L.rpGold
        }, {
          value: 800,
          message: E.D.cph_awards_platinum,
          className: L.rpPlatinum
        }],
        U = "Awards:infoButton",
        H = "Awards:awardRpValue",
        F = ({
          awardsKey: e
        }) => {
          const a = (0, d.useRockstarTokenPing)(),
            {
              loggedIn: o
            } = (0, p.useRockstarUser)(),
            {
              selectedCharacterTuple: c
            } = (0, p.useRockstarUserState)(),
            {
              isMobile: _,
              windowWidth: n
            } = (0, d.useWindowResize)(),
            {
              ref: i,
              inView: g
            } = (0, h.useInView)({
              threshold: .6
            }),
            {
              setBodyIsLocked: b
            } = (0, d.useBodyScrollable)("Awards"),
            {
              track: f
            } = (0, p.useGtmTrack)(),
            [R, k] = (0, t.useState)(!1),
            [S, v] = (0, t.useState)(!1),
            [j, w] = (0, t.useState)(!1),
            [A, P] = (0, t.useState)(12),
            [x, T] = (0, t.useState)(4),
            [I, O] = (0, t.useState)(!1),
            [N, G] = (0, t.useState)(null),
            [W, y] = (0, t.useState)(null),
            [z, D] = (0, t.useState)([]),
            [F, q] = (0, t.useState)(null),
            Y = (0, t.useRef)(null),
            X = (0, t.useRef)(null),
            $ = z ? function(e = []) {
              let a = 0;
              return e && e.forEach(e => {
                const s = e.levels ? Number(e.levels[e.levels.length - 1]) : 1;
                e.playerProgress && e.playerProgress >= s && (a += 1)
              }), a
            }(z) : 0;
          (0, t.useEffect)(() => {
            B.forEach(e => {
              n > e.min && n < e.max && (P(e.show), T(e.peek))
            })
          }, [n]), (0, t.useEffect)(() => {
            R && !_ ? b(!1) : R && _ && k(!1)
          }, [_]), (0, t.useEffect)(() => {
            g && !I && (f({
              element_placement: "awards",
              event: "page_section_impression"
            }), O(!0))
          }, [g]);
          const K = (0, t.useCallback)(() => {
            const e = Y?.current;
            _ && b(!R), e && (R || f({
              element_placement: "awards",
              event: "view_all",
              text: "awards"
            })), R && (v(!0), f({
              element_placement: "awards",
              event: "nav_back",
              text: "awards"
            }), _ || window.scrollTo({
              behavior: "smooth",
              left: 0,
              top: e?.offsetTop
            })), setTimeout(() => {
              v(!1)
            }, 400), k(!R)
          }, [R, Y?.current, _]);
          (0, t.useEffect)(() => {
            (async () => {
              if (void 0 === o || null === c || !e) return;
              let s = {};
              if (o && !1 !== c) {
                const [e, a] = c;
                s = {
                  platform: e,
                  slot: a
                }
              }
              const r = await (async (e = {}) => {
                  const {
                    error: s = null,
                    result: r
                  } = await (0, d.coreScApiFetch)("games/gtao/awards", {
                    pingBearer: a,
                    useCache: !0,
                    ...o ? {} : {
                      requireBearerToken: !1
                    },
                    query: e
                  });
                  if (s) throw Object.assign(new Error(""), s);
                  return r?.categories ?? null
                })(s),
                t = function(e, a) {
                  const s = [];
                  return a.forEach(a => {
                    a.awards.forEach(a => {
                      a?.sections?.indexOf(e) >= 0 && s.push(a)
                    })
                  }), s
                }(e, r);
              D(t)
            })()
          }, [e, o, c]);
          const {
            styles: Z,
            attributes: J,
            update: Q
          } = (0, m.E)(N, W, {
            placement: "bottom-end"
          });
          if (!e || !z.length) return null;
          const ee = _ ? "div" : "ul",
            ae = _ ? u.motion.div : "div",
            se = _ ? {
              layout: !0
            } : {};
          return (0, r.jsx)("div", {
            className: L.awardsOuter,
            "data-testid": "careerAwardsContent",
            ref: i,
            children: (0, r.jsxs)(ae, {
              "data-open": R && _,
              transition: {
                damping: 100,
                duration: .2,
                ease: "easeInOut",
                stiffness: 1e3
              },
              className: [L.awardsContainer, R && _ ? L.modalOpen : "", R && !_ ? L.expanded : "", !R && S ? L.isClosed : "", j && !_ ? L.hovered : ""].join(" "),
              ref: Y,
              ...se,
              children: [(0, r.jsxs)(u.motion.div, {
                className: L.awardCategoryContainer,
                layout: !0,
                children: [(0, r.jsxs)(u.motion.div, {
                  className: L.awardsTitle,
                  children: [(0, r.jsxs)("h2", {
                    className: L.awardCategoryName,
                    children: [R && _ && (0, r.jsx)(u.motion.button, {
                      type: "button",
                      onClick: () => K(),
                      layout: !0,
                      variants: {
                        closed: {
                          opacity: 0,
                          transition: {
                            damping: 100,
                            duration: .5,
                            ease: "easeInOut",
                            stiffness: 1e3
                          },
                          x: -30
                        },
                        open: {
                          opacity: 1,
                          transition: {
                            damping: 100,
                            delay: 0,
                            duration: .5,
                            ease: "easeInOut",
                            stiffness: 1e3
                          },
                          x: 0
                        }
                      },
                      initial: "closed",
                      animate: R && _ ? "open" : "closed",
                      children: (0, r.jsx)(u.motion.img, {
                        src: s(36576),
                        alt: "Back"
                      })
                    }), (0, r.jsx)(l.FormattedMessage, {
                      ...E.D.cph_awards_title
                    })]
                  }), (0, r.jsxs)("div", {
                    className: L.rpInfo,
                    children: [(0, r.jsx)("button", {
                      className: L.tooltipIcon,
                      ref: G,
                      type: "button",
                      ...Q && {
                        onFocus: Q,
                        onMouseOver: Q
                      },
                      "aria-describedby": "awards-info",
                      "data-testid": U
                    }), (0, r.jsx)("div", {
                      id: "awards-info",
                      role: "tooltip",
                      className: L.tooltip,
                      style: Z.popper,
                      ref: y,
                      ...J,
                      children: (0, r.jsxs)("div", {
                        className: L.tooltipInner,
                        children: [(0, r.jsx)(l.FormattedMessage, {
                          ...E.D.cph_awards_rp_bonus_info
                        }), (0, r.jsx)("div", {
                          className: L.rpGrid,
                          children: M.map(({
                            value: e,
                            message: a,
                            className: s
                          }) => (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("div", {
                              className: L.rpGridItem,
                              children: (0, r.jsx)("span", {
                                className: [s, L.rpLevel].join(" "),
                                children: (0, r.jsx)(l.FormattedMessage, {
                                  ...a
                                })
                              })
                            }), (0, r.jsx)("div", {
                              className: L.rpGridItem,
                              "data-testid": H,
                              children: `+${e} RP`
                            })]
                          }, a.id))
                        })]
                      })
                    })]
                  })]
                }), (0, r.jsx)("span", {
                  children: (0, r.jsx)(C, {
                    value: $,
                    total: z.length,
                    theme: "platinum",
                    classes: L.awardCount
                  })
                })]
              }), (0, r.jsxs)(ae, {
                className: L.categoryWrapper,
                children: [(0, r.jsx)(ee, {
                  className: L.awardCategory,
                  ref: X,
                  children: z.map((e, a) => (0, r.jsx)(V, {
                    position: a,
                    award: e,
                    isExpanded: _ && R,
                    isMobile: _,
                    toggleModal: _ && K,
                    hoverFn: w,
                    setHoveredAwardId: q,
                    isShowTooltip: a === F,
                    classes: [L.award, a >= A + x ? L.fadeIn : "", a >= A && a < A + x ? L.peek : ""].join(" ")
                  }, e.imageName))
                }), z.length > A && (0, r.jsx)("div", {
                  className: R ? L.showLess : L.showMore,
                  children: (0, r.jsx)("button", {
                    type: "button",
                    onClick: () => K(),
                    children: R ? (0, r.jsx)(l.FormattedMessage, {
                      ...E.D.cph_progress_rewards_view_less
                    }) : (0, r.jsx)(l.FormattedMessage, {
                      ...E.D.cph_progress_rewards_view_all
                    })
                  })
                })]
              })]
            })
          })
        },
        q = {
          challenge: "rockstargames-sites-gta-gen9c65e3490f6eb8dab0668e8fe67d55b91",
          challengeInfo: "rockstargames-sites-gta-gen9da87d8cc57cf815a62265d6df5a8fb58",
          check: "rockstargames-sites-gta-gen9a1a3c5cbd2b9115541c7cb4e7c1673da",
          chevron: "rockstargames-sites-gta-gen9ca5efa6b5789c4955bfc09181b91ecfe",
          content: "rockstargames-sites-gta-gen9c98992f11494c52e9616c8549e0f170c",
          isComplete: "rockstargames-sites-gta-gen9cf2e0eec2b77fd77aceef1f9cd98178c",
          lock: "rockstargames-sites-gta-gen9ce804e2c74981638b373d781914c8840",
          open: "rockstargames-sites-gta-gen9de49efc050c322d0225293f6392486a9",
          pillBtn: "rockstargames-sites-gta-gen9eae395945dedf6368b534a04959fb1bc",
          progressBar: "rockstargames-sites-gta-gen9fe057158912b879d208d15537835c62a",
          progressCounter: "rockstargames-sites-gta-gen9ce7f93e41b0743998367e657d98ee6a8",
          progressCounterContainer: "rockstargames-sites-gta-gen9cca1a4e3dbc7b7f5f79119b71fbabb80",
          selected: "rockstargames-sites-gta-gen9a20a77f5d2ded38accee2eda74214073",
          status: "rockstargames-sites-gta-gen9a6ce89fd5b82d12fd70045f783ebb846",
          task: "rockstargames-sites-gta-gen9a6c18125bb5473451b114654a7fc31e2",
          taskComplete: "rockstargames-sites-gta-gen9dafd7d3da3581689b0c5516c591093b3",
          taskList: "rockstargames-sites-gta-gen9cb1d8ad2dda587b95579730f172e0476",
          title: "rockstargames-sites-gta-gen9f7fb81856986752e2a1d59cb5895c418"
        },
        Y = {
          lock: "rockstargames-sites-gta-gen9e47acdf708f51e390599fc24acc11b8e",
          pillBtn: "rockstargames-sites-gta-gen9ded7f176c61b68165ef06ea243c9f22e",
          selected: "rockstargames-sites-gta-gen9c06269d03e6a31c377462d27937e51fd"
        },
        X = "Lock:iconContainer",
        $ = ({
          alt: e,
          classes: a = ""
        }) => (0, r.jsx)("div", {
          className: [a, Y.lock].join(" "),
          "data-testid": X,
          children: (0, r.jsxs)("svg", {
            width: "22",
            height: "27",
            viewBox: "0 0 22 27",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, r.jsx)("title", {
              children: e
            }), (0, r.jsx)("path", {
              opacity: "0.9",
              d: "M20.6592 11.328H18.6515V7.62973C18.6176 3.4098 15.2065 0 11.0017 0C6.79679 0 3.38574 3.41105 3.35313 7.62973V11.328H1.34287C0.620527 11.328 0.0361328 11.9136 0.0361328 12.6347V25.6933C0.0361328 26.4156 0.621781 27 1.34287 27H20.658C21.3803 27 21.9647 26.4144 21.9647 25.6933V12.6347C21.9647 11.9124 21.379 11.328 20.658 11.328H20.6592ZM5.98541 7.62973C6.00924 4.86451 8.24524 2.62977 11.0004 2.62977C13.7556 2.62977 15.9928 4.86451 16.0154 7.62973V11.328H5.98541V7.62973ZM12.5881 20.0199V22.054C12.5881 22.9356 11.8732 23.6504 10.9916 23.6504C10.11 23.6504 9.39521 22.9356 9.39521 22.054V20.0073C8.60515 19.4856 8.08472 18.5902 8.08472 17.5732C8.08472 15.9617 9.3902 14.6562 11.0017 14.6562C12.6131 14.6562 13.9186 15.9617 13.9186 17.5732C13.9186 18.599 13.3894 19.4994 12.5881 20.0199Z",
              fill: "white",
              fillOpacity: "0.4"
            })]
          })
        }),
        K = ({
          challenge: e,
          isLocked: a,
          isOpen: s,
          onClick: t,
          activeTier: o,
          showUserProgress: c
        }) => {
          const {
            hint: _,
            playerProgress: n,
            totalProgress: i,
            tasks: l
          } = e;
          let d = "div";
          const {
            track: g
          } = (0, p.useGtmTrack)(), m = n >= i, h = o + 1;
          return d = l?.length ? u.motion.button : u.motion.div, (0, r.jsxs)(d, {
            className: [q.challenge, m && !a ? q.isComplete : "", s ? q.open : q.closed].join(" "),
            onClick: () => {
              t(), g({
                event: s ? "cta_collapse" : "cta_expand",
                text: _,
                element_placement: `Tier ${h} - Subchallenge`?.toLowerCase()
              })
            },
            children: [(0, r.jsxs)("div", {
              className: q.challengeInfo,
              children: [c && (0, r.jsx)("div", {
                className: q.status,
                children: a ? (0, r.jsx)($, {
                  alt: "Locked",
                  classes: q.lock
                }) : (0, r.jsx)(R, {
                  alt: m ? "Completed" : "In Progress",
                  classes: [q.check, m ? q.isComplete : ""].join(" ")
                })
              }), (0, r.jsxs)("div", {
                className: q.content,
                children: [(0, r.jsx)("h4", {
                  className: q.title,
                  children: _
                }), (0, r.jsxs)("div", {
                  className: q.progressCounterContainer,
                  children: [(0, r.jsx)(C, {
                    theme: "light",
                    value: c ? n : void 0,
                    total: i,
                    classes: q.progressCounter,
                    type: x.Challenges
                  }), l?.length && (0, r.jsx)("div", {
                    className: [q.chevron, q.expandedChevron].join(" ")
                  })]
                }), l?.length && (0, r.jsx)(u.motion.ul, {
                  className: q.taskList,
                  animate: s ? "open" : "closed",
                  variants: {
                    open: {
                      opacity: 1,
                      height: "auto",
                      paddingTop: "var(--padding-sm)"
                    },
                    closed: {
                      opacity: 0,
                      height: 0
                    }
                  },
                  transition: {
                    duration: .2
                  },
                  children: l.map(e => (0, r.jsxs)("li", {
                    className: q.task,
                    children: [(0, r.jsx)("div", {
                      className: q.status,
                      children: (0, r.jsx)(R, {
                        alt: e.isComplete ? "Completed" : "In Progress",
                        classes: [q.check, e.isComplete ? q.isComplete : ""].join(" ")
                      })
                    }), (0, r.jsx)("p", {
                      className: e.isComplete ? q.taskComplete : "",
                      children: e.hint
                    })]
                  }, e.hint))
                })]
              })]
            }), !m && !a && c && (0, r.jsx)(w, {
              percentage: n / i * 100,
              classes: q.progressBar
            })]
          })
        };
      var Z, J;

      function Q() {
        return Q = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s)({}).hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, Q.apply(null, arguments)
      }
      const ee = function(e) {
        return t.createElement("svg", Q({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 96 21"
        }, e), Z || (Z = t.createElement("g", {
          fill: "#fff",
          clipPath: "url(#ps5_svg__a)"
        }, t.createElement("path", {
          d: "M10.017 0v19.278l4.361 1.392V4.488c0-.749.337-1.265.883-1.093.748.202.853.898.853 1.654v6.47c2.723 1.31 4.862 0 4.862-3.47 0-3.472-1.257-5.132-4.952-6.404A53 53 0 0 0 10.017 0"
        }), t.createElement("path", {
          d: "m15.208 17.85 7.017-2.5c.793-.291.92-.695.27-.904a4.77 4.77 0 0 0-2.611.134l-4.676 1.646v-2.618l.27-.09a16 16 0 0 1 3.224-.688 13.8 13.8 0 0 1 6.052.748c2.064.65 2.289 1.608 1.773 2.244a5 5 0 0 1-1.81 1.137l-9.509 3.419zM2.012 17.58c-2.117-.591-2.469-1.833-1.496-2.544a10.5 10.5 0 0 1 2.401-1.16l6.254-2.244v2.581l-4.488 1.609c-.793.291-.92.695-.27.905.866.199 1.77.152 2.611-.135l2.162-.748v2.244l-.434.075a14.15 14.15 0 0 1-6.733-.546M61.59 17.655a3.433 3.433 0 0 0 3.426-3.441V8.319a2.07 2.07 0 0 1 2.072-2.065h6.65a.09.09 0 0 0 .09-.09V4.982a.09.09 0 0 0-.09-.09h-8.02a3.426 3.426 0 0 0-3.425 3.427v5.895a2.07 2.07 0 0 1-2.073 2.072h-6.56a.09.09 0 0 0-.09.09v1.182a.1.1 0 0 0 .09.09zM76.574 9.725V4.982a.09.09 0 0 1 .09-.09h18.118a.09.09 0 0 1 .097.09v1.182a.09.09 0 0 1-.097.09H79.394a.09.09 0 0 0-.098.09V9.41a.987.987 0 0 0 .988.98h11.46a3.636 3.636 0 0 1 0 7.264h-15.08a.1.1 0 0 1-.09-.09v-1.182a.09.09 0 0 1 .09-.09h13.712a2.27 2.27 0 1 0 0-4.54h-11.73a2.07 2.07 0 0 1-2.073-2.028M49.673 10.39a2.072 2.072 0 0 0 0-4.136h-13.9a.09.09 0 0 1-.097-.09V4.982a.09.09 0 0 1 .097-.09h15.261a3.434 3.434 0 0 1 0 6.86H40.471a2.065 2.065 0 0 0-2.065 2.065v3.74a.1.1 0 0 1-.09.09h-2.543a.097.097 0 0 1-.097-.09v-3.74a3.434 3.434 0 0 1 3.433-3.426z"
        }))), J || (J = t.createElement("defs", null, t.createElement("clipPath", {
          id: "ps5_svg__a"
        }, t.createElement("path", {
          fill: "#fff",
          d: "M0 0h95.755v20.946H0z"
        })))))
      };
      var ae, se;

      function re() {
        return re = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s)({}).hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, re.apply(null, arguments)
      }
      const te = function(e) {
        return t.createElement("svg", re({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 160 20"
        }, e), ae || (ae = t.createElement("g", {
          clipPath: "url(#xboxseriesxs_svg__a)"
        }, t.createElement("path", {
          fill: "#fff",
          d: "M10.17 8.02a.06.06 0 0 1 .034.017c3.041 2.274 8.249 7.901 6.661 9.49A10.27 10.27 0 0 1 10.17 20c-2.463 0-4.842-.878-6.696-2.472-1.587-1.59 3.62-7.217 6.661-9.491a.1.1 0 0 1 .035-.017m5.299-6.556C13.91.556 12.223 0 10.17 0 8.118 0 6.43.556 4.872 1.463a.038.038 0 0 0-.017.05.04.04 0 0 0 .05.017c1.969-.418 4.96 1.254 5.244 1.422a.034.034 0 0 0 .043 0c.282-.167 3.277-1.84 5.244-1.422a.04.04 0 0 0 .05-.017.04.04 0 0 0-.018-.05zM3.05 2.87a.2.2 0 0 0-.045.034A9.93 9.93 0 0 0 .024 9.31a9.88 9.88 0 0 0 2.056 6.75q.008.013.025.018.016.004.031-.003a.04.04 0 0 0 .012-.051C1.37 13.667 5.334 7.953 7.38 5.556a.05.05 0 0 0 .015-.03.04.04 0 0 0-.018-.033C4.276 2.461 3.221 2.783 3.051 2.87m9.912 2.625a.04.04 0 0 0-.018.034.05.05 0 0 0 .014.029c2.047 2.395 6.011 8.11 5.235 10.466a.04.04 0 0 0 .01.051.044.044 0 0 0 .057-.016 9.88 9.88 0 0 0 2.056-6.749 9.93 9.93 0 0 0-2.982-6.406.2.2 0 0 0-.045-.034c-.17-.086-1.225-.408-4.327 2.625m22.431 10.667h-2.082l-3.582-4.848-3.582 4.848H24.07l4.623-6.256-4.263-5.766h2.081l3.22 4.357 3.221-4.357h2.08L30.77 9.904zm10.802-3.418c0 1.055-.356 1.898-1.059 2.505-.703.606-1.723.913-3.033.913H36.37v-5.354h-2.724l1.133-1.534h1.59V4.14h5.493c1.232 0 2.19.29 2.846.863s.99 1.337.99 2.27c0 1.155-.533 2.032-1.582 2.605.678.259 1.2.638 1.547 1.13.357.51.542 1.116.531 1.735zm-7.958-3.47h3.503c.706 0 1.243-.155 1.594-.462.35-.308.529-.774.529-1.39 0-.53-.186-.95-.55-1.249-.366-.298-.893-.45-1.57-.45H38.24zm6.073 3.435c0-.63-.194-1.11-.576-1.426s-.966-.475-1.735-.475h-3.762v3.77H42c.746 0 1.324-.164 1.718-.485.395-.322.593-.786.593-1.384m14.443-2.559c0 .93-.137 1.783-.408 2.535a5.75 5.75 0 0 1-1.222 2.005 5.4 5.4 0 0 1-1.907 1.305c-.718.289-1.533.435-2.421.435-.9 0-1.72-.146-2.438-.435a5.2 5.2 0 0 1-1.89-1.304 5.7 5.7 0 0 1-1.236-1.997c-.273-.753-.412-1.61-.412-2.544 0-.932.139-1.783.412-2.539a5.8 5.8 0 0 1 1.236-2.017 5.2 5.2 0 0 1 1.89-1.292c.718-.286 1.538-.431 2.438-.431.888 0 1.703.145 2.42.43.724.29 1.375.73 1.907 1.292a5.8 5.8 0 0 1 1.223 2.02c.27.754.408 1.61.408 2.537m-10 0c0 1.415.372 2.55 1.108 3.373.724.833 1.71 1.256 2.931 1.256s2.208-.423 2.93-1.256c.725-.813 1.092-1.945 1.092-3.373 0-1.427-.367-2.565-1.091-3.388-.735-.823-1.721-1.24-2.931-1.24s-2.197.417-2.932 1.24c-.732.845-1.105 1.986-1.105 3.388zm15.896-.245 4.26-5.765h-2.08l-3.22 4.357-3.22-4.357h-2.08l4.26 5.765-4.622 6.256h2.081l3.583-4.848 3.581 4.848h2.082zm20.17-4.111v3.483h6.074v1.533h-6.07v3.702h6.866v1.651h-8.733V4.14h8.733V5.79zm-4.293 4.8c-.61-.55-1.624-.975-3.013-1.266l-1.062-.22c-1.008-.21-1.708-.47-2.081-.77q-.557-.418-.558-1.232c0-.53.21-.944.626-1.232.415-.287 1.03-.434 1.821-.434 1.017 0 1.766.183 2.224.543.457.36.715.93.772 1.696v.017h1.85v-.018c-.024-1.178-.443-2.117-1.248-2.79-.806-.675-2.02-1.015-3.617-1.015-1.321 0-2.385.299-3.16.89-.775.59-1.172 1.388-1.172 2.378s.325 1.774.965 2.336 1.598.97 2.85 1.216l1.045.22c1.03.221 1.751.479 2.15.762s.592.687.592 1.207c0 .641-.243 1.138-.72 1.475-.478.337-1.176.51-2.07.51-1.08 0-1.906-.225-2.454-.667-.548-.44-.832-1.118-.848-2.006v-.026h-1.867v.017c.012 1.38.472 2.445 1.368 3.162.896.716 2.163 1.081 3.769 1.081 1.48 0 2.656-.324 3.495-.963s1.265-1.528 1.265-2.64c0-.93-.31-1.682-.921-2.233zm22.396 4.085-.12-1.867c-.023-.663-.173-1.201-.448-1.6-.267-.39-.689-.67-1.255-.841.624-.205 1.119-.556 1.469-1.041.359-.5.543-1.124.543-1.854 0-1.033-.38-1.856-1.13-2.444-.751-.589-1.785-.89-3.085-.89h-5.342V16.16h1.868v-4.932h3.525c.7 0 1.214.16 1.526.474.312.315.492.864.526 1.63l.051 1.277c.012.697.134 1.215.363 1.542l.005.008h1.921l-.015-.027c-.209-.354-.345-.844-.401-1.456zm-7.497-8.956h3.371c.769 0 1.367.164 1.778.485s.62.803.62 1.434c0 .654-.202 1.167-.602 1.519s-.96.534-1.657.534h-3.509zM104.8 16.16h1.868V4.139H104.8zm12.468-10.37V4.14h-8.733V16.16h8.733v-1.652h-6.863v-3.701h6.073V9.273h-6.073V5.791zm9.953 4.801c-.61-.55-1.624-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.082-.772-.37-.277-.558-.69-.558-1.231 0-.53.211-.945.626-1.232s1.03-.434 1.821-.434c1.018 0 1.767.182 2.224.543.457.36.716.93.772 1.696v.017h1.849v-.019c-.023-1.177-.443-2.116-1.248-2.79s-2.021-1.014-3.616-1.014c-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.325 1.774.965 2.336 1.597.97 2.85 1.216l1.044.219c1.032.222 1.755.48 2.15.763q.593.427.592 1.206c0 .642-.242 1.139-.72 1.476s-1.176.51-2.07.51c-1.08 0-1.905-.226-2.453-.667-.549-.44-.833-1.118-.848-2.006v-.024h-1.867v.017c.011 1.38.471 2.445 1.368 3.162.896.716 2.162 1.081 3.769 1.081 1.481 0 2.655-.324 3.494-.963s1.266-1.528 1.266-2.64c0-.93-.31-1.682-.922-2.233m19.884-7.954h-.934v15.025h.933zm-8.55 7.267 4.259-5.765h-2.081l-3.22 4.357-3.221-4.357h-2.077l4.26 5.765-4.623 6.256h2.081l3.582-4.848 3.582 4.848h2.079zm20.523.687c-.61-.55-1.623-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.081-.772-.371-.277-.559-.69-.559-1.231 0-.53.211-.945.626-1.232s1.03-.434 1.822-.434c1.017 0 1.766.182 2.223.543.456.36.718.93.775 1.696v.017h1.85v-.019c-.023-1.177-.443-2.116-1.248-2.79s-2.02-1.014-3.616-1.014c-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.324 1.774.965 2.336c.64.562 1.597.97 2.85 1.216l1.044.219c1.031.222 1.755.48 2.15.763q.593.427.592 1.206c0 .642-.242 1.139-.72 1.476s-1.176.51-2.07.51c-1.08 0-1.906-.226-2.454-.667-.547-.44-.832-1.118-.847-2.006v-.024h-1.871v.017c.011 1.38.471 2.445 1.367 3.162.897.716 2.164 1.081 3.77 1.081 1.481 0 2.655-.324 3.495-.963S160 13.936 160 12.824c0-.93-.31-1.682-.922-2.233"
        }))), se || (se = t.createElement("defs", null, t.createElement("clipPath", {
          id: "xboxseriesxs_svg__a"
        }, t.createElement("path", {
          fill: "#fff",
          d: "M0 0h160v20H0z"
        })))))
      };
      var oe, ce;

      function _e() {
        return _e = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s)({}).hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, _e.apply(null, arguments)
      }
      const ne = function(e) {
          return t.createElement("svg", _e({
            xmlns: "http://www.w3.org/2000/svg",
            width: 28,
            height: 20,
            fill: "none"
          }, e), oe || (oe = t.createElement("g", {
            fill: "#fff",
            clipPath: "url(#pc_svg__a)"
          }, t.createElement("path", {
            d: "M6.161 9.614q.577.002 1.148-.075c.339-.04.668-.139.972-.29.276-.141.508-.352.671-.61q.255-.392.254-1.03 0-.636-.254-1.03a1.7 1.7 0 0 0-.671-.609 3 3 0 0 0-.972-.29 9 9 0 0 0-1.148-.075H3.467v4.01zm.95-6.295q1.478 0 2.517.365 1.04.365 1.69.965c.42.38.745.848.949 1.368a4.38 4.38 0 0 1 0 3.176 3.6 3.6 0 0 1-.95 1.377q-.652.6-1.69.965-1.037.366-2.516.365H3.467v4.797H0V3.319zM24.084 6.888a3.2 3.2 0 0 0-.773-.74 3.8 3.8 0 0 0-1.05-.496 4.2 4.2 0 0 0-1.223-.18q-1.172 0-1.988.384a3.6 3.6 0 0 0-1.325 1.03c-.343.44-.594.94-.74 1.471a6.3 6.3 0 0 0-.233 1.706c0 .554.078 1.106.233 1.64a4.1 4.1 0 0 0 .738 1.433c.353.435.807.785 1.325 1.02q.818.385 1.988.385 1.589 0 2.485-.825.897-.825 1.093-2.173h3.358a6 6 0 0 1-.689 2.27 5.6 5.6 0 0 1-1.457 1.724 6.5 6.5 0 0 1-2.12 1.087 9 9 0 0 1-2.672.376q-1.814 0-3.258-.535-1.444-.534-2.44-1.47a6.4 6.4 0 0 1-1.523-2.2 7 7 0 0 1-.527-2.732 7.2 7.2 0 0 1 .53-2.78 6.5 6.5 0 0 1 1.523-2.24q.997-.955 2.44-1.5T21.038 3a9.3 9.3 0 0 1 2.462.319c.74.198 1.44.511 2.075.927.605.4 1.12.913 1.513 1.509.406.625.663 1.329.75 2.061h-3.357a2.2 2.2 0 0 0-.398-.928"
          }))), ce || (ce = t.createElement("defs", null, t.createElement("clipPath", {
            id: "pc_svg__a"
          }, t.createElement("path", {
            fill: "#fff",
            d: "M0 0h27.97v20H0z"
          })))))
        },
        ie = "RewardsAdvisory:rewardsReadyHeader",
        le = "RewardsAdvisory:rewardsGen8Header",
        de = ({
          loggedIn: e,
          showUserProgress: a,
          rewardsReady: s,
          isMobile: o
        }) => {
          const {
            formatMessage: c
          } = (0, l.useIntl)(), [_, n] = (0, t.useState)(null), [i, d] = (0, t.useState)(null), {
            styles: p,
            attributes: g
          } = (0, m.E)(_, i, {
            placement: "top-end"
          });
          return e ? a && s && !o ? (0, r.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ebe276d07b233f80061bf235c973da57",
            "data-testid": ie,
            children: [(0, r.jsx)(l.FormattedMessage, {
              ...E.D.cph_reward_ready_to_claim
            }), (0, r.jsx)("button", {
              className: "rockstargames-sites-gta-gen9ec9e99e7c6c5f18be4b2189bc1c08b6c",
              ref: n,
              type: "button",
              "aria-label": c(E.D.cph_reward_ready_to_claim)
            }), (0, r.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d1f971587ef1c9054250c3b1dbdf258c",
              style: p.popper,
              ref: d,
              ...g,
              children: (0, r.jsx)("div", {
                className: "rockstargames-sites-gta-gen9be84169d0404ee125ed8bd149a0a6ee6",
                children: (0, r.jsx)(l.FormattedMessage, {
                  ...E.D.cph_reward_how_to_claim
                })
              })
            })]
          }) : null : (0, r.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f8d0ebf9bc9a030cd0f81c29af248cb0",
            children: [(0, r.jsx)("span", {
              "data-testid": le,
              children: (0, r.jsx)(l.FormattedMessage, {
                ...E.D.cph_progress_available_on
              })
            }), (0, r.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a74f309d9cf6190823f87e165e3c470d",
              children: [(0, r.jsx)(ee, {
                "aria-label": c(E.D.cph_progress_available_on_aria_ps5)
              }), (0, r.jsx)(te, {
                "aria-label": c(E.D.cph_progress_available_on_aria_xbox)
              }), (0, r.jsx)(ne, {
                "aria-label": c(E.D.cph_progress_available_on_aria_pc)
              })]
            })]
          })
        };
      var pe = s(24162),
        ge = s(51673),
        me = s.n(ge),
        he = s(85827);
      const ue = {
          badge: "rockstargames-sites-gta-gen9afa7402e43e3a68d68dc199b98cb0c51",
          check: "rockstargames-sites-gta-gen9b89ed6d71e08fd1fb6e2a9b1fb242ece",
          hiddenSpacer: "rockstargames-sites-gta-gen9d3c4ae9328f29b6c58cd2245bdb4349e",
          locked: "rockstargames-sites-gta-gen9d7a6b1df889dc64d611be39739442bc5",
          pillBtn: "rockstargames-sites-gta-gen9e99c5871efb75307643e31f0e8ce28c5",
          ready: "rockstargames-sites-gta-gen9b39e7be987ed421bfd7e0a196713826b",
          selected: "rockstargames-sites-gta-gen9d3a46d4088b002f8c4ebc77a67ac67c4"
        },
        be = ({
          variant: e
        }) => {
          const a = (0, l.useIntl)();
          if (!e) return null;
          const s = {
            claimed: a.formatMessage(E.D.cph_reward_claimed),
            ready: a.formatMessage(E.D.cph_reward_claimable)
          };
          return "locked" === e ? (0, r.jsx)("span", {
            className: ue.locked,
            "aria-label": a.formatMessage(E.D.cph_reward_locked_alt),
            "data-testid": "locked-reward"
          }) : "hidden" === e ? (0, r.jsx)("span", {
            className: ue.hiddenSpacer,
            "aria-hidden": "true"
          }) : (0, r.jsxs)("span", {
            className: [ue.badge, ue[e]].join(" "),
            children: ["claimed" === e && (0, r.jsx)(R, {
              alt: s.claimed,
              classes: ue.check
            }), s[e]]
          })
        },
        fe = ({
          reward: e,
          tierCompleted: a,
          tierLocked: o,
          showUserProgress: c,
          ..._
        }) => {
          const [n] = (0, t.useState)(`${(e=>{try{return s(56709)(`./${e}.jpg`)}catch(e){return s(688)}})(e.imageName)}?im=Resize=960`);
          return (0, r.jsx)(u.motion.div, {
            layout: !0,
            ..._,
            className: "rockstargames-sites-gta-gen9fdce20ababc3fc2c12cd9fe002de2ea2",
            children: (0, r.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9afd9385e038d6428315d07d3b2cac0a5",
              children: [(0, r.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e33a6846cce90018ac173c32113594ae",
                children: (0, r.jsx)("img", {
                  src: n,
                  alt: e.label,
                  "data-id": e.id
                })
              }), (0, r.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9e4586e44e36bc12f602e32dd90503aac",
                children: [(0, r.jsx)("h4", {
                  children: e.label
                }), o && c && (0, r.jsx)(be, {
                  variant: "locked"
                }), !o && a && c && (0, r.jsx)(be, {
                  variant: e.isCollected ? "claimed" : "ready"
                }), !o && !a && c && (0, r.jsx)(be, {
                  variant: "hidden"
                })]
              })]
            })
          })
        },
        Re = {
          btnBack: "rockstargames-sites-gta-gen9d38d8585f6b36e96ea94b7f146a28cf6",
          btnClose: "rockstargames-sites-gta-gen9f0e1c4d788aba002450f20db4e4e545d",
          btnCloseContainer: "rockstargames-sites-gta-gen9f6ecd3f033e1ecf423f180e52415fabd",
          btnViewAll: "rockstargames-sites-gta-gen9c5c7c54a77212c220c9ea259c70c880d",
          carousel: "rockstargames-sites-gta-gen9c9401b5c71644cb0f5167263e9311ea3",
          container: "rockstargames-sites-gta-gen9f1879f4fb3eafa9caee1c84aebde4baa",
          desktopRewardsGrow: "rockstargames-sites-gta-gen9bfcd9a0bc7c295dede3b0e5843818bab",
          desktopRewardsShrink: "rockstargames-sites-gta-gen9fc3feaafe0f9a5034c95c96fe2b635dc",
          desktopShrinkChallengeMargins: "rockstargames-sites-gta-gen9dcab05540a88f378da5f66a1a144e163",
          fadeItemsIn: "rockstargames-sites-gta-gen9b4134ff8e253dba8ea537e8fa441c2d3",
          fadeItemsOut: "rockstargames-sites-gta-gen9acf3ecb6c46d6b3db93d48b4174a00b7",
          fadeRewardsIn: "rockstargames-sites-gta-gen9bb50102e1c5c697ec6a9589af42cd259",
          header: "rockstargames-sites-gta-gen9d7a963fdbd4dc7ea43b7f938a396e078",
          howToClaimMobile: "rockstargames-sites-gta-gen9df08be60c9a9e09672249ed853157409",
          inactiveTier: "rockstargames-sites-gta-gen9fcbfc649dd541fa0a559b83a4f96d744",
          isModalClosed: "rockstargames-sites-gta-gen9ac7e7c5f7193f666deeabe73f24411af",
          isModalOpen: "rockstargames-sites-gta-gen9ff163439cd7acd3590e5343f8dc0ac54",
          mobileRewardsGrow: "rockstargames-sites-gta-gen9cf2bd3811c081b32f41bf9bca76bbc26",
          mobileRewardsShrink: "rockstargames-sites-gta-gen9eba15d1cd50eb4e7270f6a0dba9fd3c3",
          pillBtn: "rockstargames-sites-gta-gen9d2007afe984c1c5845de2639ea60669f",
          rewards: "rockstargames-sites-gta-gen9d235feb0391a5bb29b9f4fa3419944cb",
          selected: "rockstargames-sites-gta-gen9d69350c4695cc0aa285d16031a66a2a8",
          slideBtnIn: "rockstargames-sites-gta-gen9b877518d86268c78cc6862bfd04fd6a6",
          "swiper-horizontal": "rockstargames-sites-gta-gen9b39bc7e83e453dca4abd5d776011b612",
          "swiper-preloader-spin": "rockstargames-sites-gta-gen9f8aff1d499a2631798f4a663f5d2e4bc",
          "swiper-scrollbar-disabled": "rockstargames-sites-gta-gen9f1d38f7df03508b6f1e0fa42de464e7d",
          "swiper-vertical": "rockstargames-sites-gta-gen9d93977a184c373a8def4bace12e809da"
        },
        Ee = ({
          setIsModalOpen: e,
          isModalOpen: a,
          rewardsContainer: o,
          setHeight: c,
          setOffset: _,
          tiers: n,
          activeTier: i,
          lockAllRewards: g,
          showUserProgress: m
        }) => {
          const [h, b] = (0, t.useState)(window.innerWidth >= 1280), [f, R] = (0, t.useState)(1), [k, S] = (0, t.useState)("auto"), {
            track: v
          } = (0, p.useGtmTrack)(), {
            setBodyIsLocked: j
          } = (0, d.useBodyScrollable)("Rewards"), [w, A] = (0, t.useState)(!1), P = (0, t.useRef)(), x = h ? pe.RC : "div", T = h ? pe.qr : "li", I = (0, t.useRef)(null), C = (0, t.useRef)(null), O = n.some(e => e.isCompleted && e?.numClaimable > 0), N = (0, l.useIntl)(), G = (0, t.useMemo)(() => {
            const e = [];
            return n.forEach((a, s) => {
              a.rewards.forEach((a, r) => {
                e.push({
                  tier: s,
                  reward: a,
                  showTitle: 0 === r,
                  id: `reward-${s}-${r}`
                })
              })
            }), e
          }, [n]);

          function W() {
            b(window.innerWidth >= 1280);
            const e = I?.current?.clientHeight;
            if (c(h && G.length ? e : "auto"), !a) {
              const {
                current: e
              } = C && C, a = window.getComputedStyle(e), s = Number(a.width.replace("px", "")) - Number(a.paddingLeft.replace("px", "")) - Number(a.paddingRight.replace("px", ""));
              S(s)
            }
          }

          function y() {
            if (a && v({
                event: "nav_back",
                text: "rewards",
                element_placement: "rewards"
              }), h)
              if (a) P.current?.swiper.disable(), R(0), setTimeout(() => {
                P.current?.swiper.enable();
                const e = G.findIndex(e => e.id === `reward-${i}-0`);
                P.current?.swiper.slideTo(e), P.current?.swiper.disable(), A(!1), P.current?.swiper.enable(), P.current?.swiper.slideTo(0)
              }, 100), setTimeout(() => {
                e(!1), R(1)
              }, 250);
              else {
                const a = o.current,
                  s = a?.offsetTop;
                _(s), P.current?.swiper.disable(), A(!0);
                let r = G.findIndex(e => e.id === `reward-${i}-0`);
                1 === n[i].rewards.length && (r -= 1), P.current?.swiper.slideTo(r), setTimeout(() => {
                  P.current?.swiper.enable(), P.current?.swiper.slideTo(r), e(!0)
                }, 10)
              }
            else j(!a), e(!a), A(!a)
          }
          return (0, t.useEffect)(() => (window.addEventListener("resize", W), W(), () => {
            window.removeEventListener("resize", W)
          }), [n]), (0, t.useEffect)(() => {
            j(!h && a)
          }, [h]), (0, t.useEffect)(() => {
            const e = e => {
              const {
                key: s
              } = e;
              "Escape" === s && !0 === a && y()
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), (0, t.useMemo)(() => (0, r.jsx)(me(), {
            active: a && !h,
            focusTrapOptions: {
              setReturnFocus: "#viewAll"
            },
            children: (0, r.jsxs)(u.motion.div, {
              layout: "position",
              className: [Re.rewards, a ? Re.isModalOpen : Re.isModalClosed].join(" "),
              "data-testid": "careerRewardsContent",
              ref: I,
              children: [a && (0, r.jsx)("div", {
                className: Re.btnCloseContainer,
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: Re.btnClose,
                  onClick: () => y(),
                  children: (0, r.jsx)("img", {
                    src: s(82511),
                    alt: N.formatMessage(E.D.cph_progress_close)
                  })
                })
              }), (0, r.jsxs)("div", {
                className: Re.header,
                ref: C,
                children: [a && (0, r.jsx)("button", {
                  type: "button",
                  className: Re.btnBack,
                  onClick: () => y(),
                  children: (0, r.jsx)("img", {
                    src: s(74046),
                    alt: N.formatMessage(E.D.cph_progress_close)
                  })
                }), (0, r.jsx)("h3", {
                  children: (0, r.jsx)(l.FormattedMessage, {
                    ...E.D.cph_progress_rewards_title
                  })
                }), !a && (0, r.jsx)("button", {
                  type: "button",
                  className: Re.btnViewAll,
                  id: "viewAll",
                  onClick: () => {
                    v({
                      event: "view_all",
                      element_placement: "progress & rewards"
                    }), y()
                  },
                  children: (0, r.jsx)(l.FormattedMessage, {
                    ...E.D.cph_progress_rewards_view_all
                  })
                })]
              }), (0, r.jsx)("div", {
                className: Re.container,
                style: {
                  "--max-width-static-md": `${k}px`
                },
                children: (0, r.jsxs)(x, {
                  ref: P,
                  modules: [he.xI, he.Vx, he.Jq],
                  ...h && {
                    breakpoints: {
                      0: {
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
                    className: Re.carousel,
                    loop: !1,
                    grabCursor: !0,
                    centeredSlides: !1,
                    centerInsufficientSlides: !1,
                    slidesPerView: "auto",
                    speed: 700,
                    navigation: !0
                  },
                  children: [!h && O && (0, r.jsx)("div", {
                    className: Re.howToClaimMobile,
                    children: (0, r.jsx)(l.FormattedMessage, {
                      ...E.D.cph_reward_how_to_claim
                    })
                  }), G?.map(e => {
                    const s = e.tier === i;
                    return s || w ? (0, r.jsxs)(T, {
                      className: s ? void 0 : Re.inactiveTier,
                      tabIndex: 0,
                      children: [e.showTitle && a && (0, r.jsx)("h3", {
                        children: (0, r.jsx)(l.FormattedMessage, {
                          ...E.D.cph_progress_tracker_tier_label,
                          values: {
                            number: e.tier + 1
                          }
                        })
                      }), (0, r.jsx)(fe, {
                        reward: e.reward,
                        style: s ? {} : {
                          opacity: f
                        },
                        tierLocked: g || n[e.tier].isLocked,
                        tierCompleted: n[e.tier].isCompleted,
                        showUserProgress: m
                      })]
                    }, e.id) : null
                  }).filter(Boolean)]
                })
              })]
            })
          }), [i, n, G?.length, h, a, k, w, f])
        },
        ke = {
          active: "rockstargames-sites-gta-gen9d1b48b82ec9b79047d8977ff2ba11701",
          challengeList: "rockstargames-sites-gta-gen9a0643c2917d904c17bca426e196f0b97",
          challenges: "rockstargames-sites-gta-gen9dc75c591fe65efcc907990e4e326ed0b",
          challengesHeader: "rockstargames-sites-gta-gen9cd07b4ad9ae4b68a719cabe34242fc1a",
          challengesProgress: "rockstargames-sites-gta-gen9d04adc0e1e26fb154fa3ad1d8a3a8e94",
          check: "rockstargames-sites-gta-gen9dc5d341f10b06334dde83fdd8fdc1538",
          container: "rockstargames-sites-gta-gen9aa11ec463d04709dd302749fa1962a51",
          desktopRewardsGrow: "rockstargames-sites-gta-gen9fb97c0028262de32582dccecda42bac0",
          desktopRewardsShrink: "rockstargames-sites-gta-gen9a899d3fa8edd0fba1b896c02ff0c2216",
          desktopShrinkChallengeMargins: "rockstargames-sites-gta-gen9f1ac3b85f55e94ef8c1d9c85a34104bb",
          fadeItemsIn: "rockstargames-sites-gta-gen9a53a77e452d683077ca19dcd6aad254a",
          fadeItemsOut: "rockstargames-sites-gta-gen9e235584433548b2cdd5a889390c2ad2d",
          isComplete: "rockstargames-sites-gta-gen9fa34f7ff6373a95f671e968b7a1d4df4",
          isModalOpen: "rockstargames-sites-gta-gen9af95cfe8c6bff6c143aa1237be7c6292",
          mobileRewardsGrow: "rockstargames-sites-gta-gen9c3dedae0632d74f70889bf10048673e5",
          mobileRewardsShrink: "rockstargames-sites-gta-gen9b1eb951eeb833baf550e81cc6a6a7ba7",
          pillBtn: "rockstargames-sites-gta-gen9aaa12cbe2be78cbb52c2991470ca7d43",
          progressBar: "rockstargames-sites-gta-gen9e8ba13131af874eee42372b52e543d6e",
          progressTracker: "rockstargames-sites-gta-gen9fb97e1f0121150bccf975d52cd31f0dc",
          progressTrackerHeader: "rockstargames-sites-gta-gen9c851c46ab6a54670ae823031445ec96b",
          rewards: "rockstargames-sites-gta-gen9d9fb95c3dc0e19a21ea13e9a06d5e0c7",
          selected: "rockstargames-sites-gta-gen9b175fec71b5b5a52d6620676705e0885",
          tier: "rockstargames-sites-gta-gen9e2667106528af4b28dbbc487beb23752",
          tiers: "rockstargames-sites-gta-gen9a0c1212b4e0421746252bbd5b7418ba2"
        },
        Se = ({
          lockAllRewards: e,
          rewardsKey: a
        }) => {
          const {
            windowWidth: s
          } = (0, d.useWindowResize)(), o = s < 1280, c = a ? E.b[a] : null, [_, n] = (0, t.useState)(null), i = _ ? (e => {
            const a = [];
            let s = !1;
            return e.forEach(e => {
              const {
                challenges: r,
                rewards: t
              } = e, o = {
                challenges: r,
                rewards: t
              };
              o.numCompleted = r.filter(e => e.playerProgress >= e.totalProgress).length, o.isLocked = s, s = o.numCompleted < r.length, o.isCompleted = o.numCompleted >= r.length, o.isCompleted ? o.numClaimable = t.filter(e => !1 === e.isCollected).length : o.numClaimable = 0, a.push({
                ...e,
                ...o
              })
            }), a
          })(_.tiers) : null, [g, m] = (0, t.useState)(0), [b, f] = (0, t.useState)(!1), [k, S] = (0, t.useState)(!1), v = (0, t.useRef)([]), {
            ref: j,
            inView: A
          } = (0, h.useInView)({
            threshold: .6
          }), P = (0, d.useRockstarTokenPing)(), {
            loggedIn: T
          } = (0, p.useRockstarUser)(), {
            selectedCharacterTuple: I
          } = (0, p.useRockstarUserState)(), {
            formatMessage: O
          } = (0, l.useIntl)(), {
            track: N
          } = (0, p.useGtmTrack)(), G = i?.[g]?.numCompleted ?? 0, W = i?.[g]?.challenges?.length ?? 0, [y, z] = (0, t.useState)(null), [D, V] = (0, t.useState)(!1), [L, B] = (0, t.useState)("auto"), [M, U] = (0, t.useState)("auto"), H = (0, t.useRef)(null), F = (0, t.useRef)(null);
          (0, t.useEffect)(() => {
            A && !b && (N({
              event: "page_section_impression",
              element_placement: "progress & rewards"
            }), f(!0))
          }, [A]), (0, t.useEffect)(() => {
            if (void 0 === T || null === I || !c) return;
            let e = null,
              a = null;
            Array.isArray(I) && ([e, a] = I);
            const s = !!e && (0, d.isGen9Platform)(e);
            S(s && T), (async e => {
              (async () => {
                const {
                  error: a = null,
                  result: s
                } = await (0, d.coreScApiFetch)("games/gtao/career/progress/section", {
                  pingBearer: P,
                  useCache: !0,
                  ...T ? {} : {
                    requireBearerToken: !1
                  },
                  query: e
                });
                if (a) throw Object.assign(new Error(""), a);
                s && n(s)
              })()
            })({
              section: String(c),
              ...s && T && {
                platform: e?.toString(),
                slot: a?.toString()
              }
            })
          }, [T, I, c]);
          const q = (0, t.useCallback)(e => a => {
              let s = e;
              if ("ArrowDown" === a.code) s += 1;
              else {
                if ("ArrowUp" !== a.code) return;
                s -= 1
              }
              s > 3 || s < 0 || (a.preventDefault(), Q(s), v?.current[s]?.focus())
            }, []),
            Y = (0, t.useCallback)(e => () => {
              Q(e), N({
                event: "component_tab_click",
                text: `Tier ${e+1}`,
                link_url: void 0,
                element_placement: "progress tracker"
              })
            }, []);
          if (!i?.[g] || !c) return null;
          const {
            challenges: X,
            rewards: $,
            isLocked: Z
          } = i[g], J = i.some(e => e.isCompleted && (e?.numClaimable ?? 0) > 0);

          function Q(e) {
            z(null), m(e)
          }
          return (0, r.jsxs)("div", {
            className: ke.progressTracker,
            "data-testid": "careerProgressTrackerContent",
            style: {
              "--rewards-top-offset": "auto" === M ? "auto" : `${M}px`
            },
            ref: j,
            children: [(0, r.jsxs)("div", {
              className: ke.progressTrackerHeader,
              children: [(0, r.jsx)("div", {
                children: (0, r.jsx)("h2", {
                  children: (0, r.jsx)(l.FormattedMessage, {
                    ...E.D.cph_progress_tracker_title
                  })
                })
              }), (0, r.jsx)(de, {
                loggedIn: T,
                showUserProgress: k,
                rewardsReady: J,
                isMobile: o
              })]
            }), _ && (0, r.jsxs)("div", {
              className: [ke.container, D && ke.isModalOpen, !1 === D ? ke.isModalClosed : ""].join(" "),
              style: {
                ...!o && {
                  height: L
                }
              },
              ref: H,
              children: [(0, r.jsx)("div", {
                className: ke.tiers,
                children: (0, r.jsx)("ul", {
                  children: i && i.map((e, a) => {
                    const s = i[a]?.isCompleted;
                    return (0, r.jsx)("li", {
                      children: (0, r.jsxs)("button", {
                        type: "button",
                        className: [ke.tier, g === a ? ke.active : "", s ? ke.isComplete : ""].join(" "),
                        ref: e => v.current[a] = e,
                        onClick: Y(a),
                        onKeyDown: q(a),
                        children: [(0, r.jsx)(l.FormattedMessage, {
                          ...E.D.cph_progress_tracker_tier_label,
                          values: {
                            number: a + 1
                          }
                        }), s && k && (0, r.jsx)(R, {
                          classes: ke.check,
                          alt: O(E.D.cph_tier_complete)
                        })]
                      })
                    }, e.challenges[0].id)
                  })
                })
              }), (0, r.jsxs)(u.motion.div, {
                className: ke.challenges,
                children: [(0, r.jsxs)(u.motion.div, {
                  className: ke.challengesHeader,
                  children: [(0, r.jsx)("h3", {
                    children: (0, r.jsx)(l.FormattedMessage, {
                      ...E.D.cph_progress_challenges_title
                    })
                  }), (0, r.jsxs)("div", {
                    className: ke.challengesProgress,
                    children: [(0, r.jsx)(w, {
                      percentage: k ? G / W * 100 : 0,
                      classes: ke.progressBar
                    }), (0, r.jsx)(C, {
                      theme: "light",
                      value: k ? G : void 0,
                      total: W,
                      type: x.Challenges
                    })]
                  })]
                }), (0, r.jsx)(u.motion.div, {
                  className: ke.challengeList,
                  children: X && X.map(e => (0, r.jsx)(K, {
                    activeTier: g,
                    challenge: e,
                    isLocked: Z || !1,
                    isOpen: e.id === y,
                    showUserProgress: k,
                    onClick: () => {
                      z(e.id === y ? null : e.id)
                    }
                  }, e.id))
                })]
              }), (0, r.jsx)(u.motion.div, {
                className: ke.rewards,
                "data-open": D,
                layout: !0,
                transition: {
                  ease: "easeInOut",
                  stiffness: 1e3,
                  damping: 100,
                  duration: .3
                },
                ref: F,
                children: $ && (0, r.jsx)(Ee, {
                  tiers: i,
                  activeTier: g,
                  isModalOpen: D,
                  setIsModalOpen: e => {
                    V(e), z(null)
                  },
                  setHeight: B,
                  setOffset: U,
                  rewardsContainer: F,
                  lockAllRewards: e,
                  showUserProgress: k
                })
              })]
            })]
          })
        };
      var ve = s(9623),
        je = s(77053);
      const we = {
          dropdownArrow: "rockstargames-sites-gta-gen9a2ecf569225d0852b6abde995e6049d2",
          dropdownButton: "rockstargames-sites-gta-gen9d607cd311df1b8070cc00a8e553b556a",
          dropdownContainer: "rockstargames-sites-gta-gen9e734e4492b556c95c7483d80339752ee",
          dropdownContent: "rockstargames-sites-gta-gen9e922a365743f62564cb2a7abac14e6fd",
          dropdownImage: "rockstargames-sites-gta-gen9d3742c0b2a2dda4aa89cd0f6bcec24b0",
          dropdownTitle: "rockstargames-sites-gta-gen9c4e77ac1383ec1b7ea421e07b5030eb7",
          open: "rockstargames-sites-gta-gen9d3dab1d01f91085d62e50da57fcd0ab2"
        },
        Ae = ({
          imageUrl: e,
          onClick: a,
          isOpen: s
        }) => {
          const o = (0, l.useIntl)(),
            c = s ? E.D.cph_nav_close : E.D.cph_nav_open,
            _ = (0, t.useContext)(ra);
          return (0, r.jsx)("div", {
            className: we.dropdownContainer,
            "data-testid": "menu-dropdown",
            children: (0, r.jsx)("button", {
              type: "button",
              className: we.dropdownButton,
              onClick: a,
              "aria-label": o.formatMessage(c),
              "data-testid": "menu-dropdown-button",
              children: (0, r.jsxs)("div", {
                className: we.dropdownContent,
                children: [(0, r.jsx)("div", {
                  className: we.dropdownImage,
                  children: e && (0, r.jsx)("img", {
                    alt: "",
                    width: "32",
                    height: "32",
                    src: e
                  })
                }), (0, r.jsx)("div", {
                  className: we.dropdownTitle,
                  children: _
                }), (0, r.jsx)("div", {
                  className: [we.dropdownArrow, s ? we.open : ""].join(" "),
                  "data-testid": "chevron"
                })]
              })
            })
          })
        };
      var Pe = s(4572),
        xe = s.n(Pe);
      const Te = {
          chipButton: "rockstargames-sites-gta-gen9a0b50bacce3e1bd2de864b7cfcc7a385",
          pillBtn: "rockstargames-sites-gta-gen9ecd2e3ce864af88eec46525249651747",
          selected: "rockstargames-sites-gta-gen9d4a1595d79ff62b0334445125e593e15"
        },
        Ie = ({
          title: e,
          onClick: a,
          selected: s
        }) => (0, r.jsx)("button", {
          type: "button",
          onClick: a,
          tabIndex: 0,
          "aria-label": e,
          className: [Te.chipButton, s ? Te.selected : ""].join(" "),
          children: (0, r.jsx)("div", {
            children: e
          })
        });
      var Ce;

      function Oe() {
        return Oe = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s)({}).hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, Oe.apply(null, arguments)
      }
      const Ne = function(e) {
        return t.createElement("svg", Oe({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), Ce || (Ce = t.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m15 18-6-6 6-6"
        })))
      };
      var Ge;

      function We() {
        return We = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s)({}).hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, We.apply(null, arguments)
      }
      const ye = function(e) {
          return t.createElement("svg", We({
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none"
          }, e), Ge || (Ge = t.createElement("path", {
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "m9 18 6-6-6-6"
          })))
        },
        ze = {
          navScrollButton: "rockstargames-sites-gta-gen9f7f1dc0e0bb26278843281d453c44599",
          pillBtn: "rockstargames-sites-gta-gen9e2040b472239beb1af9ca565d40cfed1",
          selected: "rockstargames-sites-gta-gen9cda8046f6be023ceb36ec4b5a1a39e04"
        },
        De = ({
          direction: e,
          className: a,
          ...s
        }) => (0, r.jsxs)("button", {
          type: "button",
          className: [a, ze.navScrollButton].join(" "),
          ...s,
          children: ["left" === e && (0, r.jsx)(Ne, {}), "right" === e && (0, r.jsx)(ye, {})]
        }),
        Ve = (0, l.defineMessages)({
          pln_career_progress_unavailable: {
            id: "pln_career_progress_unavailable",
            description: "Career Progress pack cards description when unavailable",
            defaultMessage: "Sorry, career progress pack cards are currently unavailable."
          },
          pln_career_progress_all_chip_title: {
            id: "pln_career_progress_all_chip_title",
            description: "Career Progress all chip title",
            defaultMessage: "All"
          },
          pln_career_progress_header_signin_label: {
            id: "pln_career_progress_header_signin_label",
            description: "Career Progress signin_label",
            defaultMessage: "Sign In"
          },
          pln_career_progress_header_signup_label: {
            id: "pln_career_progress_header_signup_label",
            description: "Career Progress signup_label",
            defaultMessage: "Create An Account"
          },
          pln_career_progress_header_signup_account: {
            id: "pln_career_progress_header_signup_account",
            description: "Career Progress signup_account",
            defaultMessage: "Don't have an account?"
          },
          pln_career_progress_link_console_account: {
            id: "pln_career_progress_link_console_account",
            description: "Career Progress link console account",
            defaultMessage: "Link A Game Account"
          },
          pln_career_progress_link_console_account_title: {
            id: "pln_career_progress_link_console_account_title",
            description: "Career Progress link console account header title",
            defaultMessage: "Link a GTA Online Character"
          },
          pln_career_progress_link_console_account_description: {
            id: "pln_career_progress_link_console_account_description",
            description: "Career Progress link console account header description",
            defaultMessage: "We couldn't find a GTA Online character linked to your Rockstar Games account. Link one or switch to a different Rockstar Games account."
          },
          pln_career_progress_header_tooltip_aria_label: {
            id: "pln_career_progress_header_tooltip_aria_label",
            description: "Career Progress tooltip aria label",
            defaultMessage: "Tiers Info tooltip"
          },
          pln_career_progress_header_title: {
            id: "pln_career_progress_header_title",
            description: "Career Progress title",
            defaultMessage: "Career Progress"
          },
          pln_career_progress_header_body_with_pc: {
            id: "pln_career_progress_header_body_with_pc",
            description: "Career Progress body text content",
            defaultMessage: "Learn more about a huge range of Grand Theft Auto Online updates, and discover special challenges and rewards only available on PlayStation 5, Xbox Series X|S, and the upgraded version of GTAV on PC."
          },
          pln_career_progress_header_body_gen9: {
            id: "pln_career_progress_header_body_gen9",
            description: "Career Progress body text content",
            defaultMessage: "See all the challenges you've completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
          },
          pln_career_progress_percentage_chart_title: {
            id: "pln_career_progress_percentage_chart_title",
            description: "Career Progress percentage chart title",
            defaultMessage: "Complete"
          },
          pln_career_progress_percentage_chart_title_full: {
            id: "pln_career_progress_percentage_chart_title_full",
            description: "Career Progress percentage chart title full",
            defaultMessage: "Your career progress is {percentage}% completed."
          },
          pln_scroll_left: {
            id: "pln_scroll_left",
            description: "Label for scroll left buttons for the Career Progress Hub navigation",
            defaultMessage: "Scroll Left"
          },
          pln_scroll_right: {
            id: "pln_scroll_right",
            description: "Label for scroll right buttons for the Career Progress Hub navigation",
            defaultMessage: "Scroll Right"
          }
        }),
        Le = "rockstargames-sites-gta-gen9b71cb7066a0b5bcad20b069d53362c25",
        Be = ({
          navItems: e,
          category: a,
          setCategory: s,
          chipsContainerClass: o = "rockstargames-sites-gta-gen9d9a50b688982c69bb5286d7299fd2163",
          previousChipButtonClass: c = "",
          nextChipBtnClass: _ = ""
        }) => {
          const n = (0, l.useIntl)(),
            {
              track: i
            } = (0, p.useGtmTrack)(),
            {
              pathname: d
            } = (0, ve.useLocation)(),
            g = (0, t.useMemo)(() => Math.max(e.findIndex(e => e.name === a), 0), [e, d]),
            [m, h] = (0, t.useState)(g),
            [u, b] = (0, t.useState)(!1),
            [f, R] = (0, t.useState)(!1),
            [E, k] = (0, t.useState)(!1),
            S = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            j = (0, t.useRef)(null),
            w = (0, t.useCallback)((e, a) => {
              j.current && j.current.slideTo(e), h(e), A(`Career Progress Nav > ${a}`)
            }, [i]),
            A = (e, a) => {
              i({
                event: "component_tab_click",
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            };
          (0, t.useEffect)(() => {
            s(m)
          }, [m]);
          const P = e => {
            R(e.isEnd), k(e.isBeginning)
          };
          return (0, t.useEffect)(() => {
            j.current && ((j.current.wrapperEl.clientWidth || 0) > (j.current.el.clientWidth || 0) ? (b(!0), j.current.params.centeredSlides = !0, j.current.params.centeredSlidesBounds = !0) : (b(!1), j.current.params.centeredSlides = !1, j.current.params.centeredSlidesBounds = !1))
          }, [j.current?.wrapperEl?.clientWidth, j.current?.el?.clientWidth]), (0, r.jsxs)("div", {
            className: o,
            children: [!E && u && (0, r.jsx)("div", {
              ref: v,
              className: xe()("rockstargames-sites-gta-gen9fe4772c592a348377445574a92d41f1d", c),
              children: (0, r.jsx)(De, {
                direction: "left",
                className: "rockstargames-sites-gta-gen9b1491b8e4b273824fcccc2d715f83adb",
                onClick: () => {
                  j.current && (j.current?.slidePrev(), k(j.current.isBeginning), i({
                    event: "carousel_previous",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": n.formatMessage(Ve.pln_scroll_left)
              })
            }), (0, r.jsx)("div", {
              className: Le,
              children: (0, r.jsx)(pe.RC, {
                onBeforeInit: e => j.current = e,
                onInit: P,
                className: Le,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: m,
                onSlideChange: P,
                onResize: P,
                children: e.map(({
                  title: e
                }, a) => (0, r.jsx)(pe.qr, {
                  children: (0, r.jsx)(Ie, {
                    title: e,
                    onClick: () => w(a, e),
                    selected: m === a
                  })
                }, e))
              })
            }), !f && u && (0, r.jsx)("div", {
              ref: S,
              className: xe()("rockstargames-sites-gta-gen9e6ced53c9ffff37ab04f1296452924ba", _),
              children: (0, r.jsx)(De, {
                direction: "right",
                className: "rockstargames-sites-gta-gen9ee1706eea196911a58168a7a146b27a6",
                onClick: () => {
                  j.current && (j.current?.slideNext(), j.current.isEnd ? R(!0) : R(!1), i({
                    event: "carousel_next",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": n.formatMessage(Ve.pln_scroll_right)
              })
            })]
          })
        };
      var Me = s(27654);
      const Ue = (e, a) => {
          const s = e.tiers && e.tiers.every(e => e.isComplete),
            r = a.tiers && a.tiers.every(e => e.isComplete);
          return s && !r ? 1 : !s && r ? -1 : 0
        },
        He = (0, l.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            description: "Complete badge title",
            defaultMessage: "Complete"
          }
        }),
        Fe = {
          active: "rockstargames-sites-gta-gen9b2f5e07c33fba2d5cc494688e28080c7",
          packCardTierIndicator: "rockstargames-sites-gta-gen9d49e5a9675bd855da2f1caf1c1236e0a",
          pillBtn: "rockstargames-sites-gta-gen9ddd09c78990ec9fd9a85f72365d531f1",
          selected: "rockstargames-sites-gta-gen9df5e5c07c8eb197b621e8dc29cfa570d",
          tierIndicator: "rockstargames-sites-gta-gen9c9cd0512d2ecaf663280c8b5acd88652"
        },
        qe = "TierIndicator:checkList",
        Ye = ({
          tiers: e
        }) => (0, r.jsx)("div", {
          className: Fe.packCardTierIndicator,
          "data-testid": qe,
          children: e?.map((e, a) => (0, r.jsx)("div", {
            className: [Fe.tierIndicator, e.isComplete ? Fe.active : ""].join(" ")
          }, a))
        }),
        Xe = {
          badge: "rockstargames-sites-gta-gen9cbf5b6f0d07f4de713fb947e3d180531",
          icon: "rockstargames-sites-gta-gen9be2ca1beb93aec20b638770403d3bc66",
          label: "rockstargames-sites-gta-gen9a5201b0cdb500e7b2432a12b1e9d596c",
          packCard: "rockstargames-sites-gta-gen9e32752c29805c3a3f3e9833a637c0ab0",
          packCardImageBox: "rockstargames-sites-gta-gen9e35395b977585ba98995953f605303af",
          packCardTextBox: "rockstargames-sites-gta-gen9cc8806f6aa586993815af12612d50342",
          packCompleted: "rockstargames-sites-gta-gen9e287a4d7f3c9969b09164b6bcbed7d22",
          pillBtn: "rockstargames-sites-gta-gen9cb690b4e5783c73ee871a481173c5574",
          selected: "rockstargames-sites-gta-gen9e9208446fcc324c5085222d8dd7ae87a"
        },
        $e = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        Ke = "PackCard:backgroundImage",
        Ze = "PackCard:completeTag",
        Je = ({
          title: e,
          url: a,
          images: s,
          className: o,
          tiers: c,
          onClick: _,
          imageSize: n = 420,
          imageLoaded: i
        }) => {
          const {
            isMobile: g
          } = (0, d.useWindowResize)(), {
            loggedIn: m
          } = (0, p.useRockstarUser)(), {
            selectedCharacterTuple: h
          } = (0, p.useRockstarUserState)(), [u, b] = (0, t.useState)(!1), [f, R] = (0, t.useState)(!1), E = (0, l.useIntl)(), k = !!c?.length;
          (0, t.useEffect)(() => {
            if (Array.isArray(h)) {
              const e = h?.[0];
              R((0, d.getGen9Consoles)().includes(e))
            }
          }, [String(h)]), (0, t.useEffect)(() => {
            if (c && c.length > 0) {
              const e = c.some(e => !e.isComplete);
              b(!e)
            } else b(!1)
          }, [c]);
          const S = `${g?s?.mobile:s?.desktop}?im=Resize,height=${n}`;
          return (0, d.usePreloadImg)(S), (0, r.jsx)(ve.NavLink, {
            className: [Xe.packCard, o, u ? Xe.packCompleted : ""].join(" "),
            to: a,
            onClick: _,
            children: (0, r.jsxs)("div", {
              className: [Xe.packCardImageBox, i ? Xe.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${S})`
              },
              "data-testid": Ke,
              children: [u && (0, r.jsxs)("div", {
                className: Xe.badge,
                "data-testid": Ze,
                children: [(0, r.jsx)("div", {
                  className: Xe.icon
                }), (0, r.jsx)("div", {
                  className: Xe.label,
                  children: E.formatMessage(He.pl_card_badge_content_complete)
                })]
              }), (0, r.jsxs)("div", {
                className: Xe.packCardTextBox,
                children: [(0, r.jsx)("h4", {
                  children: e
                }), m && !u && f && (0, r.jsx)(Ye, {
                  tiers: k ? c : $e
                })]
              })]
            })
          })
        };
      o.gsap.registerPlugin(Me.useGSAP);
      const Qe = ({
          isHeaderVisible: e,
          packListItems: a,
          packCardClassName: s = "rockstargames-sites-gta-gen9b2b15e5307013253a5b8c42c2d1d366c",
          packListClassName: c = "rockstargames-sites-gta-gen9bc85d597c3b9d0bd8e7618e179a77a15",
          packGridClassName: _ = "rockstargames-sites-gta-gen9a850998e1d2d585d13d28cc726d1686a",
          selectPackCard: n,
          sortFunction: i = Ue
        }) => {
          const l = (0, t.useRef)(null),
            d = [...a].sort(i),
            [p, g] = (0, t.useState)(),
            [m, h] = (0, t.useState)(!1);
          return (0, t.useEffect)(() => {
            if (!0 === m) return;
            clearTimeout(p);
            const e = setTimeout(() => {
              h(!0)
            }, 1e3);
            g(e)
          }, []), (0, Me.useGSAP)(() => {
            if (!1 !== m && l?.current) {
              const e = l.current.children;
              o.gsap.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: o.Power2.easeInOut
              })
            }
          }, {
            dependencies: [m, a],
            scope: l,
            revertOnUpdate: !0
          }), (0, r.jsx)("div", {
            className: [c, e ? "rockstargames-sites-gta-gen9e1751af296f52250a9dc41804ec1a9cb" : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, r.jsx)("div", {
              ref: l,
              className: _,
              "data-testid": "pack-grid",
              children: d.map(({
                id: e,
                name: a,
                title: t,
                url: o,
                images: c,
                tiers: _
              }, i) => (0, r.jsx)(Je, {
                title: t,
                url: o,
                className: s,
                images: c,
                tiers: _,
                onClick: () => ((e, a, s, r, t) => {
                  n(e, a, s, r, t)
                })(a, t, o, e, i)
              }, t))
            })
          })
        },
        ea = ({
          navItems: e,
          onNavItemClick: a,
          isOpen: s,
          isHeaderVisible: o
        }) => {
          const {
            track: c
          } = (0, p.useGtmTrack)(), [_, n] = (0, t.useState)(0), i = (0, t.useCallback)((s, r) => {
            l(`Secondary Nav > ${e[_].title} > ${s}`, r), a()
          }, [e, a, _, c]), l = (e, a) => {
            c({
              event: "nav_click",
              text: e.split(">").pop()?.trim() || "",
              link_url: a,
              element_placement: e
            })
          };
          return (0, r.jsx)(u.motion.div, {
            className: "rockstargames-sites-gta-gen9b231869a25e13673e07194bd5576cf87",
            initial: {
              height: 0
            },
            animate: {
              height: s ? "100dvh" : 0
            },
            transition: {
              ease: "easeInOut",
              duration: .4
            },
            children: (0, r.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9ae3659e7058e960c8d8aea159f95c0e9",
              children: [(0, r.jsx)("div", {
                className: "rockstargames-sites-gta-gen9bc3be2f333b715361387d9d56ea2ee15",
                children: (0, r.jsx)(Be, {
                  navItems: e,
                  category: e[_]?.name,
                  setCategory: n,
                  nextChipBtnClass: "rockstargames-sites-gta-gen9b4cd755945e83186bb9f5524e2ba1580",
                  previousChipButtonClass: "rockstargames-sites-gta-gen9df387384dd1e96269ef7530017108cbf"
                })
              }), (0, r.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d7e9d072a1b28adaab42a8b6192d3025",
                children: (0, r.jsx)(Qe, {
                  isHeaderVisible: o,
                  packListItems: e[_]?.subNavItems ?? [],
                  selectPackCard: i
                })
              })]
            })
          })
        };
      var aa = s(17954);
      const sa = {
          headerVisible: "rockstargames-sites-gta-gen9a317edc27a90e50cf271b6bc3f7ed0f5",
          nav: "rockstargames-sites-gta-gen9cad30ee5f410411bc77f252a369582b4",
          navBar: "rockstargames-sites-gta-gen9c3f91f381c94a50ca45c799b9ece061c",
          navContainer: "rockstargames-sites-gta-gen9c57530fbdd2efaf5ef0921d74fb430ea",
          navOverlay: "rockstargames-sites-gta-gen9ca5c93752e500ad7dbc5a76a4f618187",
          pillBtn: "rockstargames-sites-gta-gen9eb3a886599716a2456c9456011d12071",
          selected: "rockstargames-sites-gta-gen9e7b09192a4e02d1ec8988b5bdc6d2d4f"
        },
        ra = (0, d.setContextItem)({
          context: (0, t.createContext)(null),
          key: "cphSecondaryTitle"
        }),
        ta = {
          initial: {
            opacity: 0
          },
          closed: {
            opacity: 0,
            transition: {
              ease: "linear",
              duration: .3
            },
            transitionEnd: {
              display: "none"
            }
          },
          open: {
            opacity: 1,
            display: "block",
            transition: {
              ease: "linear",
              duration: .3
            }
          }
        },
        oa = ({
          title: e
        }) => {
          const {
            pathname: a
          } = (0, ve.useLocation)(), s = (0, ve.useParams)(), {
            data: o,
            loading: c
          } = (0, aa.A)(), {
            setBodyIsLocked: _
          } = (0, d.useBodyScrollable)("SecondaryNavigation"), [n, i] = (0, t.useState)(!1), [l, g] = (0, t.useState)(!1), [m, h] = (0, t.useState)(!1), {
            pageYOffset: b
          } = (0, d.useScroll)(), {
            track: f
          } = (0, p.useGtmTrack)(), R = (0, t.useContext)(ra), E = !c && o?.length > 0, k = (0, t.useMemo)(() => s["*"]?.slice(0, s["*"].indexOf("/")), [o, a]), S = o?.find(e => e.name === k)?.subNavItems?.find(e => e.name.toLowerCase() === s.section);
          return (0, t.useEffect)(() => {
            const e = e => {
              "Escape" === e.key && i(!1)
            };
            return n ? (m || h(!0), g(!1), f({
              event: "nav_open",
              text: R,
              element_placement: "secondary nav"
            })) : n || !m || l || f({
              event: "nav_close",
              text: R,
              element_placement: "secondary nav"
            }), n ? (_(!0), document.addEventListener("keyup", e)) : _(!1), () => {
              _(!1), document.removeEventListener("keyup", e)
            }
          }, [n, l]), E ? (0, r.jsxs)(ra.Provider, {
            value: e,
            children: [(0, r.jsx)(u.motion.div, {
              className: sa.navOverlay,
              onClick: () => i(!1),
              variants: ta,
              initial: "initial",
              animate: n ? "open" : "closed"
            }), (0, r.jsx)(me(), {
              active: n,
              focusTrapOptions: {
                clickOutsideDeactivates: !0,
                onDeactivate: () => i(!1),
                checkCanFocusTrap: e => new Promise(a => {
                  const s = setInterval(() => {
                    "hidden" !== getComputedStyle(e[0]).visibility && (a(), clearInterval(s))
                  }, 5)
                })
              },
              children: (0, r.jsx)("div", {
                className: [sa.navContainer, b > 0 ? sa.headerVisible : ""].join(" "),
                style: {
                  "--game-header-height": je.LU.global.spacing.dimensions[1e3]
                },
                children: (0, r.jsxs)("nav", {
                  className: sa.nav,
                  children: [(0, r.jsx)("div", {
                    className: [sa.navBar].join(" "),
                    children: (0, r.jsx)(Ae, {
                      imageUrl: S?.images?.tinyThumb,
                      isOpen: n,
                      onClick: () => i(!n)
                    })
                  }), (0, r.jsx)(ea, {
                    navItems: o,
                    category: k,
                    isHeaderVisible: !0,
                    onNavItemClick: () => {
                      i(!1), g(!0)
                    },
                    isOpen: n
                  })]
                })
              })
            })]
          }) : null
        };
      var ca = s(19913),
        _a = s(92440);
      const na = {
          backgroundImage: "rockstargames-sites-gta-gen9e1716f4e892a59902f5269c2a0967f8a",
          brand: "rockstargames-sites-gta-gen9ddbbd72fa7b6278c34245af2b5134084",
          brandCtaSection: "rockstargames-sites-gta-gen9e79e0dfe09a86c5e351c079546b8e195",
          cta: "rockstargames-sites-gta-gen9c1611532521769c0ea5bae47e128fb6c",
          heroContainer: "rockstargames-sites-gta-gen9e9d7a9ae2d67411f694e6722a0b902ee",
          images: "rockstargames-sites-gta-gen9ca24deacc5eccc33f8e196b726e0a096",
          large: "rockstargames-sites-gta-gen9d599e6a824a7141a721860388ea72c5d",
          layeredImage: "rockstargames-sites-gta-gen9b950f9b6442a66fed65bad7b1beef971",
          medium: "rockstargames-sites-gta-gen9d22e8133a06f6d2c9fccc5ebb23bff73",
          pillBtn: "rockstargames-sites-gta-gen9e82517a6138104643916cef3e96a5ba4",
          selected: "rockstargames-sites-gta-gen9cc1f2690e35b283aa730109ff686bb8a",
          small: "rockstargames-sites-gta-gen9a875a0c96931453ff566f04ed4d794f7"
        },
        ia = ({
          brand: e,
          className: a,
          ctaFields: s,
          style: t,
          title: o = ""
        }) => (0, r.jsxs)("div", {
          className: na.brandCtaSection,
          "data-has-cta": !!s?.content,
          children: [e && (0, r.jsx)("img", {
            alt: o ? `${o} logo` : "",
            className: [na.brand, a ? na[a] : ""].join(" ").trim(),
            style: (0, d.safeStyles)(t),
            src: e
          }), s?.content && (0, r.jsx)(ca.A, {
            variant: "gen9",
            icon: "play",
            iconPosition: "left",
            className: na.cta,
            content: s?.content,
            href: s?.href,
            gtm: s?.gtm
          })]
        }),
        la = ({
          title: e,
          heroImages: a
        }) => {
          const s = (0, _a.useGetCdnSource)(a?.backgroundMobileImage ?? null),
            t = (0, _a.useGetCdnSource)(a?.backgroundDesktopImage ?? null),
            o = (0, _a.useGetCdnSource)(a?.layeredMobileImage ?? null),
            c = (0, _a.useGetCdnSource)(a?.layeredDesktopImage ?? null),
            _ = (0, _a.useGetCdnSource)(a?.brandImage ?? null);
          if (!a) return null;
          const {
            brandImageSettings: n,
            ctaFields: i
          } = a, l = {
            ...n?.style
          };
          return (0, r.jsxs)("div", {
            className: na.heroContainer,
            style: {
              "--background-image-desktop": `url(${t??""})`,
              "--background-image-mobile": `url(${s??t})`,
              "--layered-image-desktop": `url(${c??""})`,
              "--layered-image-mobile": `url(${o??""})`,
              "--custom-logo-height": `${n?.customLogoMaxHeight||"20vw"}`
            },
            children: [(0, r.jsxs)("div", {
              className: na.images,
              "aria-label": e,
              role: "img",
              children: [(0, r.jsx)("div", {
                className: na.layeredImage
              }), (0, r.jsx)("div", {
                className: na.backgroundImage
              })]
            }), (0, r.jsx)(ia, {
              brand: _,
              className: n?.optionalLogoSizeClassName,
              ctaFields: i,
              style: l,
              title: e
            })]
          })
        },
        da = ({
          className: e
        }) => (0, r.jsxs)("svg", {
          className: e,
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, r.jsx)("path", {
            d: "M3.33203 8.5H12.6654",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, r.jsx)("path", {
            d: "M8 3.83331L12.6667 8.49998L8 13.1666",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }),
        pa = {
          gettingStarted: "rockstargames-sites-gta-gen9b2d81466781942ae70f68cb0c454da2e",
          gettingStartedGuide: "rockstargames-sites-gta-gen9f8713fc4d9bc38040d37554b63b51dc3",
          gettingStartedSteps: "rockstargames-sites-gta-gen9bea37dbbb81eaaf4e79a1c8806f2b367",
          guideButton: "rockstargames-sites-gta-gen9bc34a5712182822fc7ddefd3084f969f",
          icon: "rockstargames-sites-gta-gen9d28273aa87032451ccff753d9cd84b68",
          intro: "rockstargames-sites-gta-gen9ff44031e4ea3a45afaf16ea77188ba05",
          pillBtn: "rockstargames-sites-gta-gen9e6e53dd9d8ad415807a8da04a465f3e9",
          rightSide: "rockstargames-sites-gta-gen9af35cb265704900942651f84edb6bc93",
          selected: "rockstargames-sites-gta-gen9dfa091821b5257638607fc80b9bf51f3",
          summary: "rockstargames-sites-gta-gen9aba08b7c7c254f68efbf7924581469b1"
        },
        ga = ({
          title: e,
          category: a,
          summary: s,
          steps: o = [],
          guideLink: c = ""
        }) => {
          const [_, n] = (0, t.useState)(!1), {
            track: i
          } = (0, p.useGtmTrack)(), {
            ref: d,
            inView: g
          } = (0, h.useInView)({
            threshold: .6
          }), m = (0, l.useIntl)();
          return (0, t.useEffect)(() => {
            g && !_ && (i({
              event: "page_section_impression",
              element_placement: "intro"
            }), n(!0))
          }, [g]), (0, r.jsxs)("div", {
            className: pa.intro,
            ref: d,
            children: [(0, r.jsxs)("div", {
              className: pa.summary,
              children: [(0, r.jsx)("h1", {
                children: a
              }), (0, r.jsx)("h2", {
                children: e
              }), (0, r.jsx)("p", {
                className: pa.summaryText,
                children: s
              })]
            }), (0, r.jsxs)("div", {
              className: pa.rightSide,
              children: [(0, r.jsxs)("div", {
                className: pa.gettingStarted,
                children: [(0, r.jsx)("h3", {
                  children: m.formatMessage(E.D.cph_intro_getting_started)
                }), (0, r.jsx)("ol", {
                  className: pa.gettingStartedSteps,
                  children: o.map(e => (0, r.jsx)("li", {
                    children: (0, r.jsx)("span", {
                      children: e
                    })
                  }, e))
                })]
              }), c && (0, r.jsxs)("div", {
                className: pa.gettingStartedGuide,
                children: [(0, r.jsx)("span", {
                  children: m.formatMessage(E.D.cph_intro_guide_instruction, {
                    title: e
                  })
                }), (0, r.jsxs)(ve.NavLink, {
                  type: "button",
                  to: c,
                  className: pa.guideButton,
                  children: [(0, r.jsx)("span", {
                    children: m.formatMessage(E.D.cph_intro_guide_learn_more)
                  }), " ", (0, r.jsx)(da, {
                    className: pa.icon
                  })]
                })]
              })]
            })]
          })
        },
        ma = {
          calloutLoginPrompt: "rockstargames-sites-gta-gen9fd977a66a0abecca53bbaaa6bb635672",
          calloutNoChar: "rockstargames-sites-gta-gen9b73334bd7be71d536a379d58591d6840",
          feedback: "rockstargames-sites-gta-gen9e2a6d64e7ac8c35c9df55ad315b1b6fc",
          gen8: "rockstargames-sites-gta-gen9d57a33395978d1bdefecfc523d6d7b86",
          gen9: "rockstargames-sites-gta-gen9dc4b364ca614f2496a3ecfb97dd198c2",
          highlights: "rockstargames-sites-gta-gen9c242ea18c5f0224e9b061342b0468f52",
          loadingScreen: "rockstargames-sites-gta-gen9ff584112752dcf5f2e0bc73322d9c262",
          loggedOut: "rockstargames-sites-gta-gen9cc27168b41158ef829d7d0a1db1d5ffa",
          notLinked: "rockstargames-sites-gta-gen9fdfd0b9333f79a20e728dfbd8c7109b8",
          pillBtn: "rockstargames-sites-gta-gen9c7d0dad9fb4cc87778f4f777049f68cc",
          rating: "rockstargames-sites-gta-gen9f2194cb368c02921ffc20b4efa819c8c",
          rewardsTracker: "rockstargames-sites-gta-gen9a04948b2d86b0b47df82b6883a31afdd",
          rewardsTrackerWithData: "rockstargames-sites-gta-gen9d68d00f6cc459b5501155543975b841e",
          selected: "rockstargames-sites-gta-gen9e896b5a6db99b19e0d5f967b6ea9ac17",
          unknown: "rockstargames-sites-gta-gen9bd688fdb222f65c4e463be2e62a7b715"
        },
        ha = JSON.parse('{"de-DE":{"cph_awards_bonuses_tattoo":"Tattoo: {tattooName}","cph_awards_bonuses_title":"Boni","cph_awards_bronze":"Bronze","cph_awards_gold":"Gold","cph_awards_metal_completed":"{metal}: Abgeschlossen.","cph_awards_metal_not_unlocked":"{metal}: Nicht freigeschaltet.","cph_awards_platinum":"Platin","cph_awards_rp_bonus_info":"Schließe einzigartige Herausforderungen ab, um GTA$, besondere Gegenstände und mehr zu erhalten, inklusive RP-Boni für jede Stufe:","cph_awards_silver":"Silber","cph_awards_title":"Auszeichnungen","cph_callout_feedback_body":"Wie gefällt dir GTA Online? Teile uns deine Eindrücke und Ideen mit und hilf uns dabei, die Zukunft des Spiels zu gestalten.","cph_callout_feedback_button":"Feedback geben","cph_callout_feedback_title":"Gib uns dein Feedback","cph_highlights_group_aria":"Markiertes Element {index} von {total}","cph_highlights_heading":"Markierte Elemente","cph_highlights_next":"Weiter","cph_highlights_previous":"Zurück","cph_intro_getting_started":"Erste Schritte","cph_intro_guide_instruction":"Für weitere Informationen sieh dir den Guide zu {title} an.","cph_intro_guide_learn_more":"Mehr erfahren","cph_loggedin_nochar_body":"Es wurde kein GTA-Online-Charakter gefunden, der mit deinem Konto verknüpft ist. Verknüpfe einen Charakter oder melde dich mit einem anderen Konto an.","cph_loggedin_nochar_button":"Spielkonto verknüpfen","cph_loggedin_nochar_title":"GTA-Online-Charakter verknüpfen","cph_login_prompt_body":"Melde dich mit deinem Konto an und sieh dir die Belohnungen an, die du freischalten kannst, die Auszeichnungen, die du schon verdient hast, sowie die Möglichkeiten, die noch vor dir liegen.","cph_login_prompt_button":"Anmelden","cph_login_prompt_button_helper":"Du hast noch kein Konto?","cph_login_prompt_button_helper_link":"Konto erstellen","cph_login_prompt_title":"Melde dich an, um deinen Fortschritt anzusehen","cph_nav_close":"Bereichsnavigation schließen","cph_nav_open":"Bereichsnavigation öffnen","cph_nav_scroll_left":"Links scrollen","cph_nav_scroll_right":"Rechts scrollen","cph_progres_counter_awards_label":"{total, plural, one {{value} von 1 Auszeichnung errungen} other {{value} von # Auszeichnungen errungen}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} von 1 Herausforderung abgeschlossen} other {{value} von # Herausforderungen abgeschlossen}}","cph_progress_available_on":"Nur auf","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Fortschrittsanzeige","cph_progress_challenges_title":"Herausforderungen","cph_progress_close":"Schließen","cph_progress_rewards_title":"Belohnungen","cph_progress_rewards_view_all":"Alle anzeigen","cph_progress_rewards_view_less":"Weniger anzeigen","cph_progress_tracker_tier_label":"Stufe {number}","cph_progress_tracker_title":"Karrierefortschritt","cph_reward_claimable":"Bereit zur Abholung","cph_reward_claimed":"Abgeholt","cph_reward_how_to_claim":"Belohnungen sind bereit zur Abholung. Besuche das Karrierefortschrittsmenü im Spiel, um sie abzuholen.","cph_reward_locked":"Belohnung gesperrt","cph_reward_ready_to_claim":"Belohnungen sind bereit zur Abholung","cph_tier_complete":"Stufe abgeschlossen","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","pln_career_progress_all_chip_title":"Alle","pln_career_progress_header_body_gen9":"Sieh dir die Herausforderungen an, die du im Rahmen deiner Karriere in GTA Online abgeschlossen hast. Natürlich kannst du auch neue entdecken und wertvolle Belohnungen verdienen, während du in den Reihen der Kriminellen aufsteigst.","pln_career_progress_header_body_with_pc":"Erfahre mehr über zahlreiche Updates für Grand Theft Auto Online und entdecke besondere Herausforderungen und Belohnungen, die nur auf PlayStation 5, Xbox Series X|S und der upgegradeten GTAV-Version auf PC verfügbar sind.","pln_career_progress_header_signin_label":"Anmelden","pln_career_progress_header_signup_account":"Du hast noch kein Konto?","pln_career_progress_header_signup_label":"Konto erstellen","pln_career_progress_header_title":"Karrierefortschritt","pln_career_progress_header_tooltip_aria_label":"Tooltip der Stufeninformationen","pln_career_progress_link_console_account":"Spielkonto verknüpfen","pln_career_progress_link_console_account_description":"Es wurde kein GTA-Online-Charakter gefunden, der mit deinem Rockstar-Games-Konto verknüpft ist. Verknüpfe einen oder melde dich mit einem anderen Rockstar-Games-Konto an.","pln_career_progress_link_console_account_title":"GTA-Online-Charakter verknüpfen","pln_career_progress_percentage_chart_title":"Abgeschlossen","pln_career_progress_percentage_chart_title_full":"Dein Karrierefortschritt ist zu {percentage} % abgeschlossen.","pln_career_progress_unavailable":"Es tut uns Leid, die Karrierefortschrittskarten sind momentan leider nicht verfügbar.","pln_scroll_left":"Links scrollen","pln_scroll_right":"Rechts scrollen"},"en-US":{"cph_awards_bonuses_tattoo":"{tattooName} Tattoo","cph_awards_bonuses_title":"Bonuses","cph_awards_bronze":"Bronze","cph_awards_gold":"Gold","cph_awards_metal_completed":"{metal}: Completed.","cph_awards_metal_not_unlocked":"{metal}: Not unlocked.","cph_awards_platinum":"Platinum","cph_awards_rp_bonus_info":"Complete unique challenges to earn GTA$, bonus items, and more including RP bonuses for each Level:","cph_awards_silver":"Silver","cph_awards_title":"Awards","cph_callout_feedback_body":"How are you enjoying GTA Online? Tell us your thoughts and ideas to help us shape the future of the game.","cph_callout_feedback_button":"Give feedback","cph_callout_feedback_title":"Share Your Feedback","cph_highlights_group_aria":"Highlight {index} of {total}","cph_highlights_heading":"Highlights","cph_highlights_next":"Next","cph_highlights_previous":"Previous","cph_intro_getting_started":"Getting Started","cph_intro_guide_instruction":"Read the {title} Guide to learn more.","cph_intro_guide_learn_more":"Learn more","cph_loggedin_nochar_body":"We couldn\'t find a GTA Online character linked to your account. Link one or switch to a different account.","cph_loggedin_nochar_button":"Link a game account","cph_loggedin_nochar_title":"Link a GTA Online Character","cph_login_prompt_body":"Sign in to your account to see all the rewards you can earn, the awards you\'ve won, and the possibilities still ahead of you.","cph_login_prompt_button":"Sign In","cph_login_prompt_button_helper":"Don\'t have an account?","cph_login_prompt_button_helper_link":"Create an Account","cph_login_prompt_title":"Sign In to Track Your Progress","cph_nav_close":"Close Section Navigation","cph_nav_open":"Open Section Navigation","cph_nav_scroll_left":"Scroll Left","cph_nav_scroll_right":"Scroll Right","cph_progres_counter_awards_label":"{total, plural, one {{value} out of 1 award completed} other {{value} out of # awards completed}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} out of 1 challenge completed} other {{value} out of # challenges completed}}","cph_progress_available_on":"Only available on","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Progress Bar","cph_progress_challenges_title":"Challenges","cph_progress_close":"Close","cph_progress_rewards_title":"Rewards","cph_progress_rewards_view_all":"View All","cph_progress_rewards_view_less":"View Less","cph_progress_tracker_tier_label":"Tier {number}","cph_progress_tracker_title":"Career Progress","cph_reward_claimable":"Ready to claim","cph_reward_claimed":"Claimed","cph_reward_how_to_claim":"Rewards ready to be claimed. Visit the Career Progress Menu in-game to claim.","cph_reward_locked":"Reward locked","cph_reward_ready_to_claim":"Rewards ready to be claimed","cph_tier_complete":"Tier Complete","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","pln_career_progress_all_chip_title":"All","pln_career_progress_header_body_gen9":"See all the challenges you\'ve completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks.","pln_career_progress_header_body_with_pc":"Learn more about a huge range of Grand Theft Auto Online updates, and discover special challenges and rewards only available on PlayStation 5, Xbox Series X|S, and the upgraded version of GTAV on PC.","pln_career_progress_header_signin_label":"Sign In","pln_career_progress_header_signup_account":"Don\'t have an account?","pln_career_progress_header_signup_label":"Create An Account","pln_career_progress_header_title":"Career Progress","pln_career_progress_header_tooltip_aria_label":"Tiers Info tooltip","pln_career_progress_link_console_account":"Link A Game Account","pln_career_progress_link_console_account_description":"We couldn\'t find a GTA Online character linked to your Rockstar Games account. Link one or switch to a different Rockstar Games account.","pln_career_progress_link_console_account_title":"Link a GTA Online Character","pln_career_progress_percentage_chart_title":"Complete","pln_career_progress_percentage_chart_title_full":"Your career progress is {percentage}% completed.","pln_career_progress_unavailable":"Sorry, career progress pack cards are currently unavailable.","pln_scroll_left":"Scroll Left","pln_scroll_right":"Scroll Right"},"es-ES":{"cph_awards_bonuses_tattoo":"Tatuaje {tattooName}","cph_awards_bonuses_title":"Bonificaciones","cph_awards_bronze":"Bronce","cph_awards_gold":"Oro","cph_awards_metal_completed":"{metal}: Completado","cph_awards_metal_not_unlocked":"{metal}: Bloqueado","cph_awards_platinum":"Platino","cph_awards_rp_bonus_info":"Completa desafíos únicos para ganar GTA$, artículos y mucho más, como bonificaciones de RP por cada nivel:","cph_awards_silver":"Plata","cph_awards_title":"Premios","cph_callout_feedback_body":"¿Te está gustando GTA Online? Comparte tus opiniones e ideas con nosotros para ayudarnos a mejorar el juego en el futuro.","cph_callout_feedback_button":"Danos tu opinión","cph_callout_feedback_title":"Comparte tus comentarios","cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior","cph_intro_getting_started":"Primeros pasos","cph_intro_guide_instruction":"Para obtener más información, lee la guía de {title}.","cph_intro_guide_learn_more":"Más información","cph_loggedin_nochar_body":"No hemos encontrado ningún personaje de GTA Online vinculado a tu cuenta. Vincula uno o cambia a una cuenta diferente.","cph_loggedin_nochar_button":"Vincula una cuenta del juego","cph_loggedin_nochar_title":"Vincular un personaje de GTA Online","cph_login_prompt_body":"Inicia sesión en tu cuenta para ver todas las recompensas que puedes conseguir, los premios que has ganado y todas las posibilidades que tienes por delante.","cph_login_prompt_button":"Iniciar sesión","cph_login_prompt_button_helper":"¿No tienes una cuenta?","cph_login_prompt_button_helper_link":"Crear una cuenta","cph_login_prompt_title":"Inicia sesión para ver tu progreso","cph_nav_close":"Cerrar la sección de navegación","cph_nav_open":"Abrir la sección de navegación","cph_nav_scroll_left":"Desplazar hacia la izquierda","cph_nav_scroll_right":"Desplazar hacia la derecha","cph_progres_counter_awards_label":"{total, plural, one {{value} de 1 premio conseguido} other {{value} de # premios conseguidos}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} de 1 desafío completado} other {{value} de # desafíos completados}}","cph_progress_available_on":"Solo disponible en","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra de progreso","cph_progress_challenges_title":"Desafíos","cph_progress_close":"Cerrar","cph_progress_rewards_title":"Recompensas","cph_progress_rewards_view_all":"Ver todas","cph_progress_rewards_view_less":"Ver menos","cph_progress_tracker_tier_label":"Nivel {number}","cph_progress_tracker_title":"Progreso en la trayectoria","cph_reward_claimable":"Solicítala","cph_reward_claimed":"Solicitada","cph_reward_how_to_claim":"¡Ya puedes solicitar las recompensas! Visita el menú de progreso en la trayectoria para solicitarla en el juego.","cph_reward_locked":"Recompensa bloqueada","cph_reward_ready_to_claim":"¡Ya puedes solicitar las recompensas!","cph_tier_complete":"Nivel completado","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","pln_career_progress_all_chip_title":"Todos","pln_career_progress_header_body_gen9":"Descubre todos los desafíos que has completado en tu trayectoria en GTA Online. También puedes descubrir nuevos desafíos y obtener valiosas recompensas a medida que subes de rango en el mundo del crimen.","pln_career_progress_header_body_with_pc":"Aprende más sobre el amplio abanico de actualizaciones de Grand Theft Auto Online, y descubre los desafíos y recompensas especiales disponibles solo en PS5, Xbox Series X|S y la versión mejorada de GTAV para PC.","pln_career_progress_header_signin_label":"Iniciar sesión","pln_career_progress_header_signup_account":"¿No tienes una cuenta?","pln_career_progress_header_signup_label":"Crear una cuenta","pln_career_progress_header_title":"Progreso en la trayectoria","pln_career_progress_header_tooltip_aria_label":"Descripción emergente sobre rangos","pln_career_progress_link_console_account":"Vincular una cuenta del juego","pln_career_progress_link_console_account_description":"No hemos encontrado un personaje de GTA Online vinculado a tu cuenta de Rockstar Games. Vincula uno o cambia a otra cuenta de Rockstar Games.","pln_career_progress_link_console_account_title":"Vincular un personaje de GTA Online","pln_career_progress_percentage_chart_title":"Completado","pln_career_progress_percentage_chart_title_full":"Tu progreso en la trayectoria está completado al {percentage}µ%.","pln_career_progress_unavailable":"Lo sentimos, las categorías de progreso en la trayectoria no están disponibles en este momento.","pln_scroll_left":"Desplazar hacia la izquierda","pln_scroll_right":"Desplazar hacia la derecha"},"es-MX":{"cph_awards_bonuses_tattoo":"Tatuaje {tattooName}","cph_awards_bonuses_title":"Bonificaciones","cph_awards_bronze":"Bronce","cph_awards_gold":"Oro","cph_awards_metal_completed":"{metal}: Completado","cph_awards_metal_not_unlocked":"{metal}: No desbloqueado","cph_awards_platinum":"Platino","cph_awards_rp_bonus_info":"Completa desafíos únicos para ganar GTA$, artículos de bonificación y más, aparte de bonificaciones de RP en cada nivel:","cph_awards_silver":"Plata","cph_awards_title":"Premios","cph_callout_feedback_body":"¿Estás disfrutando GTA Online? Cuéntanos lo que opinas para poder mejorar el juego en el futuro.","cph_callout_feedback_button":"Comenta aquí","cph_callout_feedback_title":"Comparte tus comentarios","cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior","cph_intro_getting_started":"Primeros pasos","cph_intro_guide_instruction":"Lee la guía de {title} para obtener más información.","cph_intro_guide_learn_more":"Más información","cph_loggedin_nochar_body":"Tu cuenta no está vinculada a ningún personaje de GTA Online. Vincula un personaje o usa una cuenta diferente.","cph_loggedin_nochar_button":"Vincula tu cuenta de juego","cph_loggedin_nochar_title":"Vincula una cuenta con un personaje de GTA Online","cph_login_prompt_body":"Inicia sesión con tu cuenta para ver todas las recompensas disponibles, los premios que has ganado y las sorpresas que te esperan.","cph_login_prompt_button":"Iniciar sesión","cph_login_prompt_button_helper":"¿Aún no tienes una cuenta?","cph_login_prompt_button_helper_link":"Crea una cuenta","cph_login_prompt_title":"Inicia sesión para seguir tu progreso","cph_nav_close":"Cerrar sección","cph_nav_open":"Abrir sección","cph_nav_scroll_left":"Desplazarse hacia la izquierda","cph_nav_scroll_right":"Desplazarse hacia la derecha","cph_progres_counter_awards_label":"{total, plural, one {{value} de 1 premio completado} other {{value} de # premios completados}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} de 1 desafío completado} other {{value} de # desafíos completados}}","cph_progress_available_on":"Disponible solamente en","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra de progreso","cph_progress_challenges_title":"Desafíos","cph_progress_close":"Cerrar","cph_progress_rewards_title":"Recompensas","cph_progress_rewards_view_all":"Ver todas","cph_progress_rewards_view_less":"Ver menos","cph_progress_tracker_tier_label":"Nivel {number}","cph_progress_tracker_title":"Progreso y trayectoria","cph_reward_claimable":"Ya la puedes obtener","cph_reward_claimed":"Ya la obtuviste","cph_reward_how_to_claim":"Ya puedes obtener las recompensas. Visita la sección \\"Progreso y trayectoria\\" del juego para obtenerlas.","cph_reward_locked":"Recompensa bloqueada","cph_reward_ready_to_claim":"Ya puedes obtener las recompensas","cph_tier_complete":"Nivel completado","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","pln_career_progress_all_chip_title":"Todos","pln_career_progress_header_body_gen9":"Consulta todos los desafíos que completaste en tu trayectoria en GTA Online. Además, descubre desafíos nuevos y obtén recompensas valiosas mientras avanzas en tu carrera criminal.","pln_career_progress_header_body_with_pc":"Obtén más información sobre una gran variedad de actualizaciones de Grand Theft Auto Online y descubre desafíos especiales y recompensas exclusivas para PlayStation®5, Xbox Series X|S y la versión mejorada de GTAV en PC.","pln_career_progress_header_signin_label":"Iniciar sesión","pln_career_progress_header_signup_account":"¿Aún no tienes una cuenta?","pln_career_progress_header_signup_label":"Crea una cuenta","pln_career_progress_header_title":"Progreso y trayectoria","pln_career_progress_header_tooltip_aria_label":"Consejos sobre niveles","pln_career_progress_link_console_account":"Vincula tu cuenta de juego","pln_career_progress_link_console_account_description":"Tu cuenta de Rockstar Games no está vinculada a ningún personaje de GTA Online. Vincula un personaje o usa una cuenta de Rockstar Games diferente.","pln_career_progress_link_console_account_title":"Vincula una cuenta con un personaje de GTA Online","pln_career_progress_percentage_chart_title":"Completado","pln_career_progress_percentage_chart_title_full":"Completaste el {percentage}% de Progreso y trayectoria.","pln_career_progress_unavailable":"Lo sentimos, las tarjetas de los contenidos descargables de \\"Progreso y trayectoria\\" no están disponibles en este momento.","pln_scroll_left":"Desplazarse hacia la izquierda","pln_scroll_right":"Desplazarse hacia la derecha"},"fr-FR":{"cph_awards_bonuses_tattoo":"Tatouage {tattooName}","cph_awards_bonuses_title":"Bonus","cph_awards_bronze":"Bronze","cph_awards_gold":"Or","cph_awards_metal_completed":"{metal} : Terminé.","cph_awards_metal_not_unlocked":"{metal} : Non déverrouillé.","cph_awards_platinum":"Platine","cph_awards_rp_bonus_info":"Relevez des défis uniques pour gagner des GTA$, des articles bonus, et plus, dont des RP bonus pour chaque niveau :","cph_awards_silver":"Argent","cph_awards_title":"Récompenses","cph_callout_feedback_body":"Vous appréciez GTA Online ? Faites-nous part de vos remarques et de vos idées pour nous aider à améliorer le jeu à l\'avenir.","cph_callout_feedback_button":"Commenter","cph_callout_feedback_title":"Partagez vos idées","cph_highlights_group_aria":"Résultat {index} sur {total}","cph_highlights_heading":"Résultats","cph_highlights_next":"Suivant","cph_highlights_previous":"Précédent","cph_intro_getting_started":"Bien démarrer","cph_intro_guide_instruction":"Lisez le guide \\"{title}\\" pour en savoir plus.","cph_intro_guide_learn_more":"En savoir plus","cph_loggedin_nochar_body":"Nous n\'avons pas trouvé de personnage de GTA Online associé à votre compte. Associez-en un ou utilisez un autre compte.","cph_loggedin_nochar_button":"Associer un compte de jeu","cph_loggedin_nochar_title":"Associer un personnage de GTA Online","cph_login_prompt_body":"Connectez-vous à votre compte pour consulter toutes les récompenses que vous pouvez gagner ou avez déjà gagnées, ainsi que les opportunités qui vous attendent.","cph_login_prompt_button":"Se connecter","cph_login_prompt_button_helper":"Vous n\'avez pas de compte ?","cph_login_prompt_button_helper_link":"Créer un compte","cph_login_prompt_title":"Connectez-vous pour suivre votre progression","cph_nav_close":"Fermer la navigation pour cette section","cph_nav_open":"Ouvrir la navigation pour cette section","cph_nav_scroll_left":"Faire défiler vers la gauche","cph_nav_scroll_right":"Faire défiler vers la droite","cph_progres_counter_awards_label":"{total, plural, one {{value} récompense sur 1 obtenue} other {{value} récompenses sur # obtenues}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} défi sur 1 terminé} other {{value} défis sur # terminés}}","cph_progress_available_on":"Uniquement disponible sur","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barre de progression","cph_progress_challenges_title":"Défis","cph_progress_close":"Fermer","cph_progress_rewards_title":"Récompenses","cph_progress_rewards_view_all":"Afficher tout","cph_progress_rewards_view_less":"Afficher moins","cph_progress_tracker_tier_label":"Palier {number}","cph_progress_tracker_title":"Suivi de carrière","cph_reward_claimable":"Prête à être récupérée","cph_reward_claimed":"Récupérée","cph_reward_how_to_claim":"Récompenses prêtes à être récupérées. Rendez-vous dans le menu Suivi de carrière en jeu pour les récupérer.","cph_reward_locked":"Récompense verrouillée","cph_reward_ready_to_claim":"Récompenses prêtes à être récupérées","cph_tier_complete":"Palier terminé","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","pln_career_progress_all_chip_title":"Tout","pln_career_progress_header_body_gen9":"Consultez tous les défis que vous avez terminés au cours de votre carrière dans GTA Online. Vous pouvez également en découvrir de nouveaux et gagner de belles récompenses en gravissant les échelons de la criminalité.","pln_career_progress_header_body_with_pc":"Apprenez-en davantage sur de nombreuses mises à jour de Grand Theft Auto Online, et découvrez des récompenses et des défis spéciaux seulement disponibles sur PlayStation 5, Xbox Series X|S, et sur PC dans la version améliorée de GTAV.","pln_career_progress_header_signin_label":"Se connecter","pln_career_progress_header_signup_account":"Vous n\'avez pas de compte ?","pln_career_progress_header_signup_label":"Créer un compte","pln_career_progress_header_title":"Suivi de carrière","pln_career_progress_header_tooltip_aria_label":"Informations sur le palier","pln_career_progress_link_console_account":"Associer un compte de jeu","pln_career_progress_link_console_account_description":"Nous n\'avons pas trouvé de personnage de GTA Online associé à votre compte Rockstar Games. Associez-en un ou utilisez un autre compte Rockstar Games.","pln_career_progress_link_console_account_title":"Associer un personnage de GTA Online","pln_career_progress_percentage_chart_title":"Terminé","pln_career_progress_percentage_chart_title_full":"Votre suivi de carrière est terminé à {percentage} %.","pln_career_progress_unavailable":"Désolé, les cartes de suivi de carrière ne sont actuellement pas disponibles.","pln_scroll_left":"Faire défiler vers la gauche","pln_scroll_right":"Faire défiler vers la droite"},"it-IT":{"cph_awards_bonuses_tattoo":"Tatuaggio {tattooName}","cph_awards_bonuses_title":"Bonus","cph_awards_bronze":"Bronzo","cph_awards_gold":"Oro","cph_awards_metal_completed":"{metal}: Sbloccato","cph_awards_metal_not_unlocked":"{metal}: Bloccato","cph_awards_platinum":"Platino","cph_awards_rp_bonus_info":"Completa sfide uniche per guadagnare GTA$, articoli omaggio e altro ancora, inclusi RP bonus per ogni livello:","cph_awards_silver":"Argento","cph_awards_title":"Ricompense","cph_callout_feedback_body":"Ti piace GTA Online? Dicci cosa ne pensi e aiutaci a plasmare il futuro del gioco.","cph_callout_feedback_button":"Invia feedback","cph_callout_feedback_title":"Condividi il tuo feedback","cph_highlights_group_aria":"Elemento evidenziato {index} di {total}","cph_highlights_heading":"Elementi evidenziati","cph_highlights_next":"Successivo","cph_highlights_previous":"Precedente","cph_intro_getting_started":"Come iniziare","cph_intro_guide_instruction":"Leggi la guida di {title} per saperne di più.","cph_intro_guide_learn_more":"Altre informazioni","cph_loggedin_nochar_body":"Non abbiamo trovato un personaggio di GTA Online collegato al tuo account. Collegane uno o prova con un altro account.","cph_loggedin_nochar_button":"Collega un account di gioco","cph_loggedin_nochar_title":"Collega un personaggio di GTA Online","cph_login_prompt_body":"Accedi al tuo account per vedere tutte le ricompense che puoi ottenere, quelle che hai vinto e tutte le possibilità a tua disposizione.","cph_login_prompt_button":"Accedi","cph_login_prompt_button_helper":"Non hai un account?","cph_login_prompt_button_helper_link":"Crea un account","cph_login_prompt_title":"Accedi per vedere i tuoi progressi","cph_nav_close":"Chiudi il menu","cph_nav_open":"Apri il menu","cph_nav_scroll_left":"Scorri a sinistra","cph_nav_scroll_right":"Scorri a destra","cph_progres_counter_awards_label":"{total, plural, one {{value} ricompensa completata su 1} other {{value} ricompense completate su #}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} sfida completata su 1} other {{value} sfide completate su #}}","cph_progress_available_on":"Disponibile solo su","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra dei progressi","cph_progress_challenges_title":"Sfide","cph_progress_close":"Chiudi","cph_progress_rewards_title":"Ricompense","cph_progress_rewards_view_all":"Visualizza tutto","cph_progress_rewards_view_less":"Riduci","cph_progress_tracker_tier_label":"Livello {number}","cph_progress_tracker_title":"Progressi della carriera","cph_reward_claimable":"Pronta per essere riscattata","cph_reward_claimed":"Riscattata","cph_reward_how_to_claim":"Ricompense pronte per essere riscattate. Visita il menu Progressi della carriera per riscattarla.","cph_reward_locked":"Ricompensa bloccata","cph_reward_ready_to_claim":"Ricompense pronte per essere riscattate","cph_tier_complete":"Livello completato","pl_card_badge_content_complete":"Completato","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","pln_career_progress_all_chip_title":"Tutto","pln_career_progress_header_body_gen9":"Vedi tutte le sfide che hai completato nella tua carriera di GTA Online. Puoi anche scoprirne di nuove e ottenere delle ricompense preziose mentre sali di rango nella tua carriera criminale.","pln_career_progress_header_body_with_pc":"Esplora l’enorme gamma di aggiornamenti di Grand Theft Auto Online e scopri le sfide e le ricompense speciali disponibili solo su PlayStation 5, Xbox Series X|S e per la versione migliorata di GTAV su PC.","pln_career_progress_header_signin_label":"Accedi","pln_career_progress_header_signup_account":"Non hai un account?","pln_career_progress_header_signup_label":"Crea un account","pln_career_progress_header_title":"Progressi della carriera","pln_career_progress_header_tooltip_aria_label":"Informazioni dei livelli","pln_career_progress_link_console_account":"Collega un account di gioco","pln_career_progress_link_console_account_description":"Non abbiamo trovato un personaggio di GTA Online collegato al tuo account di Rockstar Games. Collegane uno o prova con un altro account di Rockstar Games.","pln_career_progress_link_console_account_title":"Collega un personaggio di GTA Online","pln_career_progress_percentage_chart_title":"Completato","pln_career_progress_percentage_chart_title_full":"Percentuale di completamento del progresso della tua carriera: {percentage}%","pln_career_progress_unavailable":"Siamo spiacenti, le informazioni sui progressi della carriera nei vari pacchetti non sono al momento disponibili.","pln_scroll_left":"Scorri a sinistra","pln_scroll_right":"Scorri a destra"},"ja-JP":{"cph_awards_bonuses_tattoo":"{tattooName}タトゥー","cph_awards_bonuses_title":"ボーナス","cph_awards_bronze":"ブロンズ","cph_awards_gold":"ゴールド","cph_awards_metal_completed":"{metal}:完了。","cph_awards_metal_not_unlocked":"{metal}:未解除。","cph_awards_platinum":"プラチナ","cph_awards_rp_bonus_info":"チャレンジを達成して、GTAマネーやボーナスアイテム、RPボーナスなどの報酬を各レベルで獲得：","cph_awards_silver":"シルバー","cph_awards_title":"アワード","cph_callout_feedback_body":"「GTAオンライン」をお楽しみいただけていますか？感想を送り、このゲームの今後を作る手助けをしてください。","cph_callout_feedback_button":"フィードバックを送る","cph_callout_feedback_title":"フィードバックをシェア","cph_highlights_group_aria":"{Total}のうち{index}をハイライト","cph_highlights_heading":"ハイライト","cph_highlights_next":"次","cph_highlights_previous":"前","cph_intro_getting_started":"始めよう","cph_intro_guide_instruction":"詳細は「{title}」ガイドにて。","cph_intro_guide_learn_more":"詳細を見る","cph_loggedin_nochar_body":"アカウントにリンクされた「GTAオンライン」のキャラクターが見つかりませんでした。リンクするか別のアカウントに切り替えてください。","cph_loggedin_nochar_button":"ゲームアカウントをリンク","cph_loggedin_nochar_title":"「GTAオンライン」のキャラクターをリンク","cph_login_prompt_body":"アカウントにサインインして、獲得できる報酬、得たアワード、そしてこれからの可能性を確認しよう。","cph_login_prompt_button":"サインイン","cph_login_prompt_button_helper":"アカウントをお持ちではないですか？","cph_login_prompt_button_helper_link":"アカウントを作成する","cph_login_prompt_title":"進行状況を確認するにはサインインしてください","cph_nav_close":"セクションナビゲーションを閉じる","cph_nav_open":"セクションナビゲーションを開く","cph_nav_scroll_left":"左にスクロール","cph_nav_scroll_right":"右にスクロール","cph_progres_counter_awards_label":"{total, plural, one {{value}/1のアワードをクリア} other {{value}/#のアワードをクリア}}","cph_progres_counter_challenges_label":"{total, plural, one {{value}/1のチャレンジをクリア} other {{value}/#のチャレンジをクリア}}","cph_progress_available_on":"これらのプラットフォーム限定","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"進行度バー","cph_progress_challenges_title":"チャレンジ","cph_progress_close":"閉じる","cph_progress_rewards_title":"報酬","cph_progress_rewards_view_all":"全て表示","cph_progress_rewards_view_less":"表示件数を減らす","cph_progress_tracker_tier_label":"ティア{number}","cph_progress_tracker_title":"キャリア進行状況","cph_reward_claimable":"受け取り可能","cph_reward_claimed":"受け取り済み","cph_reward_how_to_claim":"報酬が受け取り可能です。ゲーム内のキャリア進行状況メニューからお受け取りください。","cph_reward_locked":"報酬ロック中","cph_reward_ready_to_claim":"報酬が受け取り可能です","cph_tier_complete":"ティア完了","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","pln_career_progress_all_chip_title":"全て","pln_career_progress_header_body_gen9":"「GTAオンライン」のキャリアで達成した全てのチャレンジを見ましょう。犯罪ランクを上っていくことで、新しいチャレンジを発見したり、貴重な報酬も獲得できます。","pln_career_progress_header_body_with_pc":"「GTAオンライン」の幅広いアップデートについての詳細を知り、PlayStation 5、Xbox Series X|S、そしてアップグレードバージョンのPC版『GTA V』でのみ利用可能なスペシャルチャレンジや報酬を発見しましょう。","pln_career_progress_header_signin_label":"サインイン","pln_career_progress_header_signup_account":"アカウントをお持ちではないですか？","pln_career_progress_header_signup_label":"アカウントを作成する","pln_career_progress_header_title":"キャリア進行状況","pln_career_progress_header_tooltip_aria_label":"ティア情報ツールチップ","pln_career_progress_link_console_account":"ゲームアカウントとリンクする","pln_career_progress_link_console_account_description":"あなたのロックスター・ゲームスアカウントにリンクされた「GTAオンライン」のキャラクターが見つかりませんでした。リンクするか別のロックスター・ゲームスアカウントに切り替えてください。","pln_career_progress_link_console_account_title":"「GTAオンライン」のキャラクターをリンク","pln_career_progress_percentage_chart_title":"完了","pln_career_progress_percentage_chart_title_full":"あなたのキャリア進行状況は{percentage}%達成されています。","pln_career_progress_unavailable":"申し訳ございません。キャリア進行状況パックカードは現在利用不可能です。","pln_scroll_left":"左にスクロール","pln_scroll_right":"右にスクロール"},"ko-KR":{"cph_awards_bonuses_tattoo":"{tattooName} 문신","cph_awards_bonuses_title":"보너스","cph_awards_bronze":"브론즈","cph_awards_gold":"골드","cph_awards_metal_completed":"{metal}: 완료함.","cph_awards_metal_not_unlocked":"{metal}: 잠금 해제되지 않음.","cph_awards_platinum":"플래티넘","cph_awards_rp_bonus_info":"특별한 도전을 완료하면 다음의 다양한 혜택이 지급됩니다. GTA 달러, 보너스 아이템 및 레벨별 RP 보너스 - 레벨:","cph_awards_silver":"실버","cph_awards_title":"보상","cph_callout_feedback_body":"GTA 온라인을 즐기고 계신가요? 계속해서 더 좋은 게임으로 거듭날 수 있도록 여러분의 의견과 아이디어를 보내주시길 바랍니다.","cph_callout_feedback_button":"피드백 보내기","cph_callout_feedback_title":"피드백 공유하기","cph_highlights_group_aria":"하이라이트: {index}/{total}","cph_highlights_heading":"하이라이트","cph_highlights_next":"다음","cph_highlights_previous":"이전","cph_intro_getting_started":"시작하기","cph_intro_guide_instruction":"자세한 사항은 {title} 가이드를 확인하십시오.","cph_intro_guide_learn_more":"더 알아보기","cph_loggedin_nochar_body":"계정과 연동된 GTA 온라인 캐릭터를 찾을 수 없습니다. 캐릭터를 연동하거나 다른 계정을 사용하십시오.","cph_loggedin_nochar_button":"게임 계정 연동하기","cph_loggedin_nochar_title":"GTA 온라인 캐릭터 연동하기","cph_login_prompt_body":"계정에 로그인하여 획득 가능한 모든 보상, 이미 획득한 보상, 그리고 여러분 앞에 펼쳐진 가능성을 확인해 보십시오.","cph_login_prompt_button":"로그인","cph_login_prompt_button_helper":"계정이 없으신가요?","cph_login_prompt_button_helper_link":"계정 생성하기","cph_login_prompt_title":"로그인하고 진행 상황 확인하기","cph_nav_close":"항목 이동 닫기","cph_nav_open":"항목 이동 열기","cph_nav_scroll_left":"왼쪽 스크롤","cph_nav_scroll_right":"오른쪽 스크롤","cph_progres_counter_awards_label":"{total, plural, one {보상 1개 중 {value}개 완료} other {보상 #개 중 {value}개 완료}}","cph_progres_counter_challenges_label":"{total, plural, one {도전 1개 중 {value}개 완료} other {도전 #개 중 {value}개 완료}}","cph_progress_available_on":"이용 가능한 플랫폼:","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"진행 상황","cph_progress_challenges_title":"도전","cph_progress_close":"닫기","cph_progress_rewards_title":"보상","cph_progress_rewards_view_all":"전체 보기","cph_progress_rewards_view_less":"간단하게 보기","cph_progress_tracker_tier_label":"{Number}단계","cph_progress_tracker_title":"경력 진행","cph_reward_claimable":"획득할 수 있음","cph_reward_claimed":"획득함","cph_reward_how_to_claim":"보상을 획득할 수 있습니다. 게임 내 경력 진행 메뉴를 방문해 획득하십시오.","cph_reward_locked":"잠긴 보상","cph_reward_ready_to_claim":"보상을 획득할 수 있습니다","cph_tier_complete":"단계 완료","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","pln_career_progress_all_chip_title":"전체","pln_career_progress_header_body_gen9":"GTA 온라인 경력에서 완료한 모든 도전을 확인해 보십시오. 새로운 도전을 발견하고 범죄 제왕의 자리에 올라가면서 귀중한 보상을 획득해 보십시오.","pln_career_progress_header_body_with_pc":"다양한 Grand Theft Auto 온라인 업데이트에 대해 알아보십시오. PlayStation 5, Xbox Series X|S, 그리고 PC용 GTAV 업그레이드 버전에서만 이용할 수 있는 특별 도전과 보상이 여러분을 기다리고 있습니다.","pln_career_progress_header_signin_label":"로그인","pln_career_progress_header_signup_account":"계정이 없으신가요?","pln_career_progress_header_signup_label":"계정 생성하기","pln_career_progress_header_title":"경력 진행","pln_career_progress_header_tooltip_aria_label":"단계 정보 툴팁","pln_career_progress_link_console_account":"게임 계정 연동하기","pln_career_progress_link_console_account_description":"Rockstar Games 계정과 연동된 GTA 온라인 캐릭터를 찾을 수 없습니다. 캐릭터를 연동하거나 다른 Rockstar Games 계정을 사용하십시오.","pln_career_progress_link_console_account_title":"GTA 온라인 캐릭터 연동하기","pln_career_progress_percentage_chart_title":"완료","pln_career_progress_percentage_chart_title_full":"경력 진행이 {percentage}% 완료되었습니다.","pln_career_progress_unavailable":"죄송합니다. 경력 진행 팩 카드를 지금 이용할 수 없습니다.","pln_scroll_left":"왼쪽 스크롤","pln_scroll_right":"오른쪽 스크롤"},"pl-PL":{"cph_awards_bonuses_tattoo":"Tatuaż – {tattooName}","cph_awards_bonuses_title":"Premie","cph_awards_bronze":"Brąz","cph_awards_gold":"Złoto","cph_awards_metal_completed":"{metal}: Ukończono.","cph_awards_metal_not_unlocked":"{metal}: Nie odblokowano.","cph_awards_platinum":"Platyna","cph_awards_rp_bonus_info":"Wykonuj wyjątkowe wyzwania, aby zdobyć GTA$, dodatkowe nagrody i więcej, w tym premie RP za każdy poziom wyzwań:","cph_awards_silver":"Srebro","cph_awards_title":"Nagrody","cph_callout_feedback_body":"Jak ci się podoba GTA Online? Podziel się z nami swoimi przemyśleniami i pomysłami, które pomogą nam kształtować przyszłość gry.","cph_callout_feedback_button":"Dodaj opinię","cph_callout_feedback_title":"Podziel się opinią","cph_highlights_group_aria":"Wyróżnione {index} z {total}","cph_highlights_heading":"Wyróżnione","cph_highlights_next":"Dalej","cph_highlights_previous":"Poprzednie","cph_intro_getting_started":"Pierwsze kroki","cph_intro_guide_instruction":"Przeczytaj poradnik „{title}”, aby dowiedzieć się więcej.","cph_intro_guide_learn_more":"Dowiedz się więcej","cph_loggedin_nochar_body":"Nie odnaleziono postaci GTA Online powiązanej z twoim kontem. Powiąż postać lub przełącz się na inne konto.","cph_loggedin_nochar_button":"Powiąż swoje konto","cph_loggedin_nochar_title":"Powiąż postać GTA Online","cph_login_prompt_body":"Zaloguj się, aby zobaczyć wszystkie nagrody, które możesz zdobyć, zdobyte nagrody i możliwości, które wciąż stoją przed tobą otworem.","cph_login_prompt_button":"Zaloguj się","cph_login_prompt_button_helper":"Nie posiadasz konta?","cph_login_prompt_button_helper_link":"Załóż konto","cph_login_prompt_title":"Zaloguj się, aby śledzić postępy","cph_nav_close":"Zamknij menu nawigacji","cph_nav_open":"Otwórz menu nawigacji","cph_nav_scroll_left":"Przesuń w lewo","cph_nav_scroll_right":"Przesuń w prawo","cph_progres_counter_awards_label":"{total, plural, one {Zdobyto {value} z 1 nagrody} other {Zdobyto {value} z # nagród}","cph_progres_counter_challenges_label":"{total, plural, one {Ukończono {value} z 1 wyzwania} other {Ukończono {value} z # wyzwań}}","cph_progress_available_on":"Dostępne wyłącznie na","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Pasek postępu","cph_progress_challenges_title":"Wyzwania","cph_progress_close":"Zamknij","cph_progress_rewards_title":"Nagrody","cph_progress_rewards_view_all":"Zobacz wszystkie","cph_progress_rewards_view_less":"Wyświetl mniej","cph_progress_tracker_tier_label":"Poziom {number}","cph_progress_tracker_title":"Postępy kariery","cph_reward_claimable":"Gotowe do odebrania","cph_reward_claimed":"Odebrano","cph_reward_how_to_claim":"Nagrody gotowe do odebrania Odwiedź menu postępów kariery w grze, aby odebrać.","cph_reward_locked":"Nagroda zablokowana","cph_reward_ready_to_claim":"Nagrody gotowe do odebrania","cph_tier_complete":"Poziom ukończony","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","pln_career_progress_all_chip_title":"Wszystko","pln_career_progress_header_body_gen9":"Zobacz wszystkie swoje ukończone wyzwania w ramach kariery GTA Online. Odkrywaj nowe wyzwania i zdobywaj wartościowe nagrody, wspinając się po szczeblach swojej przestępczej kariery.","pln_career_progress_header_body_with_pc":"Dowiedz się więcej o szerokiej gamie aktualizacji Grand Theft Auto Online i odkryj specjalne wyzwania i nagrody dostępne tylko na PlayStation 5, Xbox Series X|S oraz w ulepszonej wersji GTAV na PC.","pln_career_progress_header_signin_label":"Zaloguj się","pln_career_progress_header_signup_account":"Nie posiadasz konta?","pln_career_progress_header_signup_label":"Załóż konto","pln_career_progress_header_title":"Postępy kariery","pln_career_progress_header_tooltip_aria_label":"Informacje o poziomach","pln_career_progress_link_console_account":"Powiąż swoje konto","pln_career_progress_link_console_account_description":"Nie odnaleziono postaci GTA Online powiązanej z twoim kontem Rockstar Games. Powiąż postać lub przełącz się na inne konto Rockstar Games.","pln_career_progress_link_console_account_title":"Powiąż postać GTA Online","pln_career_progress_percentage_chart_title":"Ukończono","pln_career_progress_percentage_chart_title_full":"Postępy kariery: ukończono {percentage}%","pln_career_progress_unavailable":"Karty postępu kariery są obecnie niedostępne.","pln_scroll_left":"Przesuń w lewo","pln_scroll_right":"Przesuń w prawo"},"pt-BR":{"cph_awards_bonuses_tattoo":"Tatuagem: {tattooName}","cph_awards_bonuses_title":"Bônus","cph_awards_bronze":"Bronze","cph_awards_gold":"Ouro","cph_awards_metal_completed":"{metal}:  concluído.","cph_awards_metal_not_unlocked":"{metal}: não desbloqueado.","cph_awards_platinum":"Platina","cph_awards_rp_bonus_info":"Conclua desafios únicos para ganhar GTA$, itens bônus e mais, incluindo bônus de RP para cada nível:","cph_awards_silver":"Prata","cph_awards_title":"Prêmios","cph_callout_feedback_body":"Como está sendo a sua experiência no GTA Online? Envie suas ideias e opiniões e ajude a construir o futuro do jogo.","cph_callout_feedback_button":"Enviar feedback","cph_callout_feedback_title":"Compartilhe seu feedback","cph_highlights_group_aria":"Destaque {index} de {total}","cph_highlights_heading":"Destaques","cph_highlights_next":"Próximo","cph_highlights_previous":"Anterior","cph_intro_getting_started":"Primeiros passos","cph_intro_guide_instruction":"Leia o Guia de {title} para saber mais.","cph_intro_guide_learn_more":"Saiba mais","cph_loggedin_nochar_body":"Não achamos nenhum personagem do GTA Online vinculado à sua conta. Vincule um personagem ou use uma conta diferente.","cph_loggedin_nochar_button":"Vincular conta do jogo","cph_loggedin_nochar_title":"Vincule um personagem do GTA Online","cph_login_prompt_body":"Inicie sessão na sua conta para ver todas as recompensas que você pode ganhar, as recompensas que já ganhou e todas as possibilidades futuras.","cph_login_prompt_button":"Iniciar sessão","cph_login_prompt_button_helper":"Não tem uma conta?","cph_login_prompt_button_helper_link":"Crie uma conta","cph_login_prompt_title":"Inicie sessão para ver seu Progresso","cph_nav_close":"Fechar navegação entre seções","cph_nav_open":"Abrir navegação entre seções","cph_nav_scroll_left":"Rolar para a esquerda","cph_nav_scroll_right":"Rolar para a direita","cph_progres_counter_awards_label":"{total, plural, one {{value} de 1 prêmio concluído} other {{value} de # prêmios concluídos}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} de 1 desafio concluído} other {{value} de # desafios concluídos}}","cph_progress_available_on":"Disponível apenas para","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra de progresso","cph_progress_challenges_title":"Desafios","cph_progress_close":"Fechar","cph_progress_rewards_title":"Recompensas","cph_progress_rewards_view_all":"Ver tudo","cph_progress_rewards_view_less":"Ver menos","cph_progress_tracker_tier_label":"Nível {number}","cph_progress_tracker_title":"Progresso da Carreira","cph_reward_claimable":"Pronto para resgatar","cph_reward_claimed":"Resgatado","cph_reward_how_to_claim":"Recompensas disponíveis para resgatar. Acesse o Menu de Progresso da Carreira no jogo para resgatar.","cph_reward_locked":"Recompensa bloqueada","cph_reward_ready_to_claim":"Recompensas disponíveis para resgatar","cph_tier_complete":"Nível concluído","pl_card_badge_content_complete":"Concluído","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","pln_career_progress_all_chip_title":"Tudo","pln_career_progress_header_body_gen9":"Confira todos os desafios que você concluiu na sua carreira no GTA Online. Você também pode descobrir novos desafios e ganhar grandes recompensas conforme cresce na hierarquia do crime.","pln_career_progress_header_body_with_pc":"Saiba mais sobre as diversas atualizações de Grand Theft Auto Online e descubra desafios e recompensas especiais disponíveis apenas para PlayStation 5, Xbox Series X|S e na versão atualizada de GTAV para PC.","pln_career_progress_header_signin_label":"Iniciar sessão","pln_career_progress_header_signup_account":"Não tem uma conta?","pln_career_progress_header_signup_label":"Criar conta","pln_career_progress_header_title":"Progresso da Carreira","pln_career_progress_header_tooltip_aria_label":"Informação sobre níveis","pln_career_progress_link_console_account":"Vincular conta do jogo","pln_career_progress_link_console_account_description":"Não achamos nenhum personagem do GTA Online vinculado à sua conta da Rockstar Games. Vincule um personagem ou use uma conta da Rockstar Games diferente.","pln_career_progress_link_console_account_title":"Vincule um personagem do GTA Online","pln_career_progress_percentage_chart_title":"Concluído","pln_career_progress_percentage_chart_title_full":"O seu progresso da carreira está {percentage}% concluído.","pln_career_progress_unavailable":"No momento, os quadros do progresso da carreira não estão disponíveis.","pln_scroll_left":"Rolar para a esquerda","pln_scroll_right":"Rolar para a direita"},"ru-RU":{"cph_awards_bonuses_tattoo":"Татуировка {tattooName}","cph_awards_bonuses_title":"Бонусы","cph_awards_bronze":"Бронза","cph_awards_gold":"Золото","cph_awards_metal_completed":"{metal}: завершено.","cph_awards_metal_not_unlocked":"{metal}: не открыто.","cph_awards_platinum":"Платина","cph_awards_rp_bonus_info":"Выполняйте особые испытания и получайте GTA $, бонусные предметы и другие награды, включая дополнительные очки RP за каждый уровень:","cph_awards_silver":"Серебро","cph_awards_title":"Награды","cph_callout_feedback_body":"Как вам GTA Online? Поделитесь вашими мыслями и предложениями – это поможет нам определить будущее игры.","cph_callout_feedback_button":"Обратная связь","cph_callout_feedback_title":"Оставьте отзыв","cph_highlights_group_aria":"Элемент {index} из {total}","cph_highlights_heading":"Элементы","cph_highlights_next":"Далее","cph_highlights_previous":"Назад","cph_intro_getting_started":"С чего начать","cph_intro_guide_instruction":"Ознакомьтесь с руководством по данной теме, чтобы узнать больше.","cph_intro_guide_learn_more":"Узнать больше","cph_loggedin_nochar_body":"Мы не смогли найти персонажа GTA Online, связанного с вашей учетной записью. Привяжите его или переключитесь на другую учетную запись.","cph_loggedin_nochar_button":"Привязать учетную запись","cph_loggedin_nochar_title":"Привязка персонажа GTA Online","cph_login_prompt_body":"Войдите в свою учетную запись, чтобы увидеть все награды, которые вы можете получить и уже получили, а также все возможности, которые вас ждут впереди.","cph_login_prompt_button":"Войти","cph_login_prompt_button_helper":"У вас нет учетной записи?","cph_login_prompt_button_helper_link":"Создать учетную запись","cph_login_prompt_title":"Войдите, чтобы посмотреть свой прогресс","cph_nav_close":"Закрыть навигацию по разделам","cph_nav_open":"Открыть навигацию по разделам","cph_nav_scroll_left":"Пролистать влево","cph_nav_scroll_right":"Пролистать вправо","cph_progres_counter_awards_label":"{total, plural, one {Получена награда: {value} из 1} other {Получено наград: {value} из #}}","cph_progres_counter_challenges_label":"{total, plural, one {Выполнено испытание: {value} из 1} other {Выполнено испытаний: {value} из #}}","cph_progress_available_on":"Доступно только на","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Индикатор прогресса","cph_progress_challenges_title":"Испытания","cph_progress_close":"Закрыть","cph_progress_rewards_title":"Награды","cph_progress_rewards_view_all":"Все награды","cph_progress_rewards_view_less":"Свернуть","cph_progress_tracker_tier_label":"Уровень {number}","cph_progress_tracker_title":"Прогресс карьеры","cph_reward_claimable":"Готова к получению","cph_reward_claimed":"Получена","cph_reward_how_to_claim":"Награды готовы к получению. Зайдите в меню «Прогресс карьеры» в игре, чтобы их получить.","cph_reward_locked":"Награда заблокирована","cph_reward_ready_to_claim":"Награды готовы к получению","cph_tier_complete":"Уровень завершен","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","pln_career_progress_all_chip_title":"Все","pln_career_progress_header_body_gen9":"Просмотрите все испытания, которые вы прошли в своей карьере GTA Online. Вы также можете открывать для себя новые испытания и зарабатывать ценные награды по мере того, как продвигаетесь в своей криминальной карьере.","pln_career_progress_header_body_with_pc":"Узнайте больше о различных обновлениях Grand Theft Auto Online, а также откройте для себя особые испытания и награды, доступные только на PlayStation 5, Xbox Series X|S и в улучшенной версии GTAV для PC.","pln_career_progress_header_signin_label":"Войти","pln_career_progress_header_signup_account":"У вас нет учетной записи?","pln_career_progress_header_signup_label":"Создать учетную запись","pln_career_progress_header_title":"Прогресс карьеры","pln_career_progress_header_tooltip_aria_label":"Подсказка с информацией об уровнях","pln_career_progress_link_console_account":"Привязать учетную запись","pln_career_progress_link_console_account_description":"Мы не смогли найти персонажа GTA Online, связанного с вашей учетной записью Rockstar Games. Привяжите его или переключитесь на другую учетную запись Rockstar Games.","pln_career_progress_link_console_account_title":"Привязка персонажа GTA Online","pln_career_progress_percentage_chart_title":"Завершено","pln_career_progress_percentage_chart_title_full":"Прогресс вашей карьеры завершен на {percentage}%","pln_career_progress_unavailable":"Извините, просмотр обновлений в настоящее время недоступен.","pln_scroll_left":"Пролистать влево","pln_scroll_right":"Пролистать вправо"},"zh-CN":{"cph_awards_bonuses_tattoo":"{tattooName}纹身","cph_awards_bonuses_title":"奖励","cph_awards_bronze":"青铜","cph_awards_gold":"黄金","cph_awards_metal_completed":"{metal}：已完成。","cph_awards_metal_not_unlocked":"{metal}：未解锁。","cph_awards_platinum":"铂金","cph_awards_rp_bonus_info":"完成独特的挑战以赚取 GTA 游戏币、奖励物品及更多内容，包括每个等级的声望值奖励：","cph_awards_silver":"白银","cph_awards_title":"奖章","cph_callout_feedback_body":"您在 GTA 在线模式的体验如何？告诉我们您的感受和想法以帮助我们更好地塑造游戏。","cph_callout_feedback_button":"提供反馈","cph_callout_feedback_title":"分享您的反馈","cph_highlights_group_aria":"精彩内容 {index}（共 {total}）","cph_highlights_heading":"精彩内容","cph_highlights_next":"下一个","cph_highlights_previous":"上一个","cph_intro_getting_started":"现在开始","cph_intro_guide_instruction":"阅读 {title} 指南以了解详细信息。","cph_intro_guide_learn_more":"了解详细信息","cph_loggedin_nochar_body":"我们无法找到与您的账户绑定的 GTA 在线模式角色。绑定一个账户或更换一个不同的账户。","cph_loggedin_nochar_button":"绑定一个游戏账户","cph_loggedin_nochar_title":"绑定一个 GTA 在线模式角色","cph_login_prompt_body":"登录您的账户以查看您可以赚取的所有奖励、您已经拥有的奖励，及前方等待着的机遇。","cph_login_prompt_button":"登录","cph_login_prompt_button_helper":"没有账户？","cph_login_prompt_button_helper_link":"创建一个新账户","cph_login_prompt_title":"登录以追踪您的进度","cph_nav_close":"关闭章节导航","cph_nav_open":"打开章节导航","cph_nav_scroll_left":"向左滚动","cph_nav_scroll_right":"向右滚动","cph_progres_counter_awards_label":"{total, plural, one {{value} 个奖章已完成（共 1 个）} other {{value} 个奖章已完成（共 # 个）}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} 个挑战已完成（共 1 个）} other {{value} 个挑战已完成（共 # 个）}}","cph_progress_available_on":"仅限","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"进度条","cph_progress_challenges_title":"挑战","cph_progress_close":"关闭","cph_progress_rewards_title":"奖励","cph_progress_rewards_view_all":"查看全部","cph_progress_rewards_view_less":"查看较少","cph_progress_tracker_tier_label":"第 {number} 级","cph_progress_tracker_title":"职业进度","cph_reward_claimable":"现可领取","cph_reward_claimed":"已领取","cph_reward_how_to_claim":"现可领取奖励。前往游戏内的“职业进度菜单”以领取。","cph_reward_locked":"奖励已锁定","cph_reward_ready_to_claim":"现可领取奖励","cph_tier_complete":"等级已完成","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","pln_career_progress_all_chip_title":"全部","pln_career_progress_header_body_gen9":"查看您在 GTA 在线模式职业中完成的所有挑战。您还可在提升犯罪等级时发现新挑战并赚取价值不菲的奖励。","pln_career_progress_header_body_with_pc":"了解一大批 Grand Theft Auto 在线模式更新，并发掘 PS5、Xbox Series X|S 和 PC 上的升级版 GTA 5 专属的特殊挑战和奖励。","pln_career_progress_header_signin_label":"登录","pln_career_progress_header_signup_account":"没有账户？","pln_career_progress_header_signup_label":"创建一个新账户","pln_career_progress_header_title":"职业进度","pln_career_progress_header_tooltip_aria_label":"等级信息提示","pln_career_progress_link_console_account":"绑定一个游戏账户","pln_career_progress_link_console_account_description":"我们无法找到与您的 Rockstar Games 账户绑定的 GTA 在线模式角色。绑定一个账户或更换一个不同的 Rockstar Games 账户。","pln_career_progress_link_console_account_title":"绑定一个 GTA 在线模式角色","pln_career_progress_percentage_chart_title":"完成","pln_career_progress_percentage_chart_title_full":"您的职业进度已完成 {percentage}%。","pln_career_progress_unavailable":"对不起，职业进度内容包卡片当前不可用。","pln_scroll_left":"向左滚动","pln_scroll_right":"向右滚动"},"zh-TW":{"cph_awards_bonuses_tattoo":"{tattooName}刺青","cph_awards_bonuses_title":"獎勵","cph_awards_bronze":"銅牌","cph_awards_gold":"金牌","cph_awards_metal_completed":"{metal}：已完成。","cph_awards_metal_not_unlocked":"{metal}：未解鎖。","cph_awards_platinum":"白金","cph_awards_rp_bonus_info":"完成獨特挑戰賺取 GTA 遊戲幣、獎勵物品，以及更多，包括每個等級的聲望值獎勵：","cph_awards_silver":"銀牌","cph_awards_title":"獎章","cph_callout_feedback_body":"您遊玩 GTA 線上模式的感想如何？把您的想法和意見告訴我們，幫助我們塑造遊戲的未來。","cph_callout_feedback_button":"給予意見反應","cph_callout_feedback_title":"分享您的意見反應","cph_highlights_group_aria":"第 {index} 個精選內容（共 {total} 個）","cph_highlights_heading":"精選內容","cph_highlights_next":"下一個","cph_highlights_previous":"上一個","cph_intro_getting_started":"準備開始","cph_intro_guide_instruction":"閱讀「{title}」指南以了解詳情。","cph_intro_guide_learn_more":"了解詳情","cph_loggedin_nochar_body":"我們無法找到與您的帳戶連結的 GTA 線上模式角色。連結或切換至另一個帳戶。","cph_loggedin_nochar_button":"連結遊戲帳戶","cph_loggedin_nochar_title":"連結 GTA 線上模式角色","cph_login_prompt_body":"登入您的帳戶查看所有您能賺取的獎勵、您已獲得的獎章，展望您的可能性。","cph_login_prompt_button":"登入","cph_login_prompt_button_helper":"沒有帳戶？","cph_login_prompt_button_helper_link":"註冊帳戶","cph_login_prompt_title":"登入以追蹤您的進度","cph_nav_close":"關閉區段導覽","cph_nav_open":"開啟區段導覽","cph_nav_scroll_left":"向左捲動","cph_nav_scroll_right":"向右捲動","cph_progres_counter_awards_label":"{total, plural, one {已完成 {value} 個獎章（共 1 個）} other {已完成 {value} 個獎章（共 # 個）}}","cph_progres_counter_challenges_label":"{total, plural, one {已完成 {value} 個挑戰（共 1 個）} other {已完成 {value} 個挑戰（共 # 個）}}","cph_progress_available_on":"僅限於","cph_progress_available_on_aria_pc":"PC","cph_progress_available_on_aria_ps5":"PlayStation5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"進度值條","cph_progress_challenges_title":"挑戰","cph_progress_close":"關閉","cph_progress_rewards_title":"獎勵","cph_progress_rewards_view_all":"檢視全部","cph_progress_rewards_view_less":"檢視較少","cph_progress_tracker_tier_label":"第 {number} 級","cph_progress_tracker_title":"生涯進度","cph_reward_claimable":"可領取","cph_reward_claimed":"已領取","cph_reward_how_to_claim":"獎勵已可領取。前往遊戲內的「生涯進度」選單領取。","cph_reward_locked":"獎勵未解鎖","cph_reward_ready_to_claim":"獎勵已可領取","cph_tier_complete":"層級已完成","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","pln_career_progress_all_chip_title":"全部","pln_career_progress_header_body_gen9":"查看您在 GTA 線上模式生涯中已完成的所有挑戰。您也可以探索新挑戰，在您一步一步登上犯罪事業巔峰時賺取豐厚獎勵。","pln_career_progress_header_body_with_pc":"了解更多關於 Grand Theft Auto 線上模式的眾多更新內容，探索僅限於 PlayStation 5、Xbox Series X|S 以及在 PC 上 GTA 5 升級版本的特殊挑戰及獎勵。","pln_career_progress_header_signin_label":"登入","pln_career_progress_header_signup_account":"沒有帳戶？","pln_career_progress_header_signup_label":"註冊帳戶","pln_career_progress_header_title":"生涯進度","pln_career_progress_header_tooltip_aria_label":"層級資訊小提示","pln_career_progress_link_console_account":"連結遊戲帳戶","pln_career_progress_link_console_account_description":"我們無法找到與您的 Rockstar Games 帳戶連結的 GTA 線上模式角色。連結或切換至另一個 Rockstar Games 帳戶。","pln_career_progress_link_console_account_title":"連結 GTA 線上模式角色","pln_career_progress_percentage_chart_title":"完成","pln_career_progress_percentage_chart_title_full":"您的生涯進度已完成百分之 {percentage}。","pln_career_progress_unavailable":"抱歉，目前無法使用生涯進度內容包卡。","pln_scroll_left":"向左捲動","pln_scroll_right":"向右捲動"}}');
      o.gsap.registerPlugin(c.u);
      const {
        host: ua
      } = (0, d.getConfigForDomain)(), ba = (0, l.withIntl)(({
        heroImages: e,
        awardsKey: a,
        rewardsKey: s,
        title: c,
        category: m,
        summary: h,
        steps: u,
        guideLink: b,
        subtitle: f,
        highlights: R
      }) => {
        const {
          windowWidth: k
        } = (0, d.useWindowResize)(), {
          selectedCharacterTuple: S,
          userData: v
        } = (0, p.useRockstarUserState)(), {
          loading: j,
          loggedIn: w
        } = (0, p.useRockstarUser)(), [A, P] = (0, t.useState)("unknown"), x = (0, t.useRef)(null), T = (0, t.useRef)(null), {
          formatMessage: I
        } = (0, l.useIntl)(), {
          track: C
        } = (0, p.useGtmTrack)(), [O, N] = (0, t.useState)(!1), G = document.location.pathname, {
          signUpUrl: W,
          signInUrl: y
        } = (0, d.useScAuthLinks)(G), z = `https://${ua}.rockstargames.com/settings/linkedaccounts`;
        (0, t.useEffect)(() => {
          if (!1 === w && P("loggedOut"), w && Array.isArray(S)) {
            const e = (0, d.getGen9Consoles)().includes(S[0]),
              a = (0, d.getGen8Consoles)().includes(S[0]);
            e ? P("gen9") : a && P("gen8")
          } else w && !1 === S && P("notLinked")
        }, [w, S]), (0, t.useEffect)(() => {
          j || O || null === w || "unknown" === A || (C({
            event: "virtualPageview",
            view_name: `career progress hub: ${c.toLowerCase()}`,
            page_layout: A
          }), N(!0))
        }, [w, A, j]);
        const D = o.gsap.matchMedia();
        return (0, t.useLayoutEffect)(() => {
          if (!T.current) return;
          const e = T.current.getElementsByTagName("img")?.[5];
          e && D.add({
            isDesktop: "(min-width: 500px)",
            isMobile: "(max-width: 501px)",
            reduceMotion: "(prefers-reduced-motion: reduce)"
          }, a => {
            const {
              isDesktop: s,
              reduceMotion: r
            } = a.conditions;
            if (r) return;
            const t = {
                mobile: {
                  from: "-100vw",
                  to: "-275vw"
                },
                desktop: {
                  from: "0",
                  to: -1 * (e.offsetLeft + e.width - window.innerWidth)
                }
              },
              c = s ? t.desktop : t.mobile,
              _ = {
                trigger: T.current,
                scrub: !0
              };
            o.gsap.fromTo(T.current, {
              x: c.from,
              scrollTrigger: _
            }, {
              x: c.to,
              scrollTrigger: _,
              ease: "none"
            })
          })
        }, [j, A, T.current]), (0, t.useEffect)(() => {
          o.gsap.matchMediaRefresh()
        }, [k]), j ? (0, r.jsx)("div", {
          className: ma.loadingScreen,
          children: (0, r.jsx)(n.A, {
            type: "SPINNING"
          })
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(oa, {
            title: c
          }), (0, r.jsxs)("div", {
            className: ma[A],
            ref: x,
            children: [(0, r.jsx)(la, {
              title: c,
              heroImages: e ?? {}
            }), (0, r.jsx)(ga, {
              title: c,
              category: m,
              summary: h,
              steps: u,
              guideLink: b
            }), (0, r.jsx)("div", {
              className: ma.highlights,
              children: (0, r.jsx)(g.Highlights, {
                highlights: R,
                subtitle: f
              })
            }), !w && (0, r.jsx)(_.A, {
              header: I(E.D.cph_login_prompt_title),
              subheader: I(E.D.cph_login_prompt_body),
              type: "button",
              action_text: I(E.D.cph_login_prompt_button),
              actionFooterHelperText: I(E.D.cph_login_prompt_button_helper),
              actionFooterLinkText: I(E.D.cph_login_prompt_button_helper_link),
              actionFooterLink: W,
              actionFooterLinkTrackingData: {
                event: "cta_signup",
                text: E.D.cph_login_prompt_button_helper_link.defaultMessage.toLowerCase(),
                link_url: W
              },
              link: y,
              className: ma.calloutLoginPrompt,
              sectionName: E.D.cph_login_prompt_title.defaultMessage,
              trackingData: {
                event: "cta_login",
                text: E.D.cph_login_prompt_button_helper_link.defaultMessage.toLowerCase(),
                link_url: y,
                element_placement: `callout section - ${E.D.cph_login_prompt_title.defaultMessage?.toLowerCase()}`
              }
            }), w && !1 === S && (0, r.jsx)(_.A, {
              header: I(E.D.cph_loggedin_nochar_title),
              subheader: I(E.D.cph_loggedin_nochar_body),
              type: "button",
              action_text: I(E.D.cph_loggedin_nochar_button),
              link: z,
              className: ma.calloutNoChar,
              sectionName: E.D.cph_loggedin_nochar_title.defaultMessage,
              trackingData: {
                event: "cta_link_account",
                text: E.D.cph_loggedin_nochar_button.defaultMessage.toLowerCase(),
                link_url: z,
                element_placement: `callout section - ${E.D.cph_loggedin_nochar_title.defaultMessage?.toLowerCase()}`
              }
            }), (0, r.jsx)("div", {
              className: v ? ma.rewardsTrackerWithData : ma.rewardsTracker,
              children: (0, r.jsx)(Se, {
                lockAllRewards: "gen8" === A,
                rewardsKey: s
              })
            }), (0, r.jsx)(F, {
              awardsKey: a
            }), (0, r.jsx)(_.A, {
              header: I(E.D.cph_callout_feedback_title),
              subheader: I(E.D.cph_callout_feedback_body),
              type: "button",
              action_text: I(E.D.cph_callout_feedback_button),
              link: "/gta-online/feedback",
              className: ma.feedback,
              sectionName: E.D.cph_callout_feedback_title.defaultMessage
            }), (0, r.jsx)(i.A, {
              titleSlug: "gta-online",
              className: ma.rating
            })]
          })]
        })
      }, ha);
      var fa = s(14200),
        Ra = s(98357),
        Ea = s(29625);
      const ka = ({
          percentage: e
        }) => {
          const a = (0, l.useIntl)();
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cb6a4d34ffb9a2d0facedb1ee4a0e2e7",
            style: {
              "--percentage": e,
              "--fill": "#ffffff"
            },
            children: [(0, r.jsx)("h1", {
              "aria-hidden": !0,
              children: `${e}%`
            }), (0, r.jsx)("p", {
              "aria-hidden": !0,
              children: a.formatMessage(Ve.pln_career_progress_percentage_chart_title)
            }), (0, r.jsx)("span", {
              className: "rockstargames-sites-gta-gen9fa130ac8cc9f50bdd42805185cf97bfe",
              children: a.formatMessage(Ve.pln_career_progress_percentage_chart_title_full, {
                percentage: e
              })
            })]
          })
        },
        Sa = {
          completedByTiersWrapper: "rockstargames-sites-gta-gen9f2d33fbab684c7c85867023d3bd2ec56",
          completedCount: "rockstargames-sites-gta-gen9b5edbe52909b37d1f1938ef4a949909e",
          pillBtn: "rockstargames-sites-gta-gen9e894a1faa6584d48fcec850ae78cbca8",
          progressCount: "rockstargames-sites-gta-gen9d2a197df878940d4d17eb625c6584827",
          selected: "rockstargames-sites-gta-gen9b452c7dce2613262c6f49760396b10c3",
          tierProgress: "rockstargames-sites-gta-gen9b6aba5fb7483e8295fc14752f94b69cc",
          tierProgressBar: "rockstargames-sites-gta-gen9d1b941075661816e1578aeaf5d0ce3e1",
          total: "rockstargames-sites-gta-gen9b4f7f81472950f760698a2b7fab1b1ef"
        },
        va = ({
          totalByTiersArray: e,
          completedByTiersArray: a
        }) => (0, r.jsx)("div", {
          className: [Sa.tierProgress].join(" "),
          children: e?.map((e, s) => {
            const t = isNaN(a[s]) ? 0 : a[s];
            return (0, r.jsxs)("div", {
              children: [(0, r.jsx)("div", {
                children: `Tier ${s+1}`
              }), (0, r.jsxs)("div", {
                className: Sa.completedByTiersWrapper,
                children: [(0, r.jsx)(w, {
                  percentage: t / e * 100,
                  classes: Sa.progressBar
                }), (0, r.jsxs)("div", {
                  className: Sa.progressCount,
                  children: [(0, r.jsx)("span", {
                    className: Sa.completedCount,
                    children: t
                  }), "/", (0, r.jsx)("span", {
                    className: Sa.total,
                    children: e
                  })]
                })]
              })]
            }, s)
          })
        }),
        ja = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc67e6abd52f78e607ea6d25a07c3183.jpg",
        wa = {
          authContent: "rockstargames-sites-gta-gen9fc6402fad72390759f3cc94f598c9f89",
          close: "rockstargames-sites-gta-gen9af1a1d7ebe23b34a0e39421e528a5953",
          colLeft: "rockstargames-sites-gta-gen9d435b29ae0df9cf07443047b2a61c179",
          colRight: "rockstargames-sites-gta-gen9d9e28b20c4e7983f8f468fec9001eba0",
          collapsed: "rockstargames-sites-gta-gen9b93a7d949fc9ac9b9de6aca152a368ca",
          cppButton: "rockstargames-sites-gta-gen9ef8727af18cfcebc18e5ef7afc8b4e30",
          expanded: "rockstargames-sites-gta-gen9cbb9c94fc7f74dee87745dd35c09c2ec",
          gen8ColLeft: "rockstargames-sites-gta-gen9ff0e4d7106c21104573626420fce30bc",
          gen9PackHeader: "rockstargames-sites-gta-gen9e582837293eda807d4b316ffdcc24451",
          gen9PackPageBanner: "rockstargames-sites-gta-gen9a219d4f77fd630a94bb1ff83fb01dfe0",
          infoTooltip: "rockstargames-sites-gta-gen9db033769ed65588cbe1a87ce12892d3b",
          infoTooltipOverlay: "rockstargames-sites-gta-gen9a0aecdef9a28e093fe21c9f703da2612",
          linkAccountButton: "rockstargames-sites-gta-gen9cb91be79755b7ff057a5ea381e6ad1b4",
          loading: "rockstargames-sites-gta-gen9b5912930a1744033c2b71d3e7ec0be11",
          navMenuMain: "rockstargames-sites-gta-gen9a262e9568c9111e9f8903633bcb5e49e",
          open: "rockstargames-sites-gta-gen9fe870a2437a5e8157f2ed5b93f0b3d2d",
          packCard: "rockstargames-sites-gta-gen9d40fe6579d032219ad416bcaffb27266",
          packList: "rockstargames-sites-gta-gen9b1bc0e0b923b7cda27ea279674b95758",
          packListMenu: "rockstargames-sites-gta-gen9efdae37e4e55d8959164eb6f6ea789b3",
          packListing: "rockstargames-sites-gta-gen9de0d42f4e91706aa07d717431067c252",
          packPageBanner: "rockstargames-sites-gta-gen9f81355f350652824c8439327e71bc354",
          packPageCPH: "rockstargames-sites-gta-gen9e01d68c84226829d7eda0baf8dbb793d",
          packPageContent: "rockstargames-sites-gta-gen9ea743dc00a7001ecf2a2a03cad265c88",
          pillBtn: "rockstargames-sites-gta-gen9c845b560f1ca08f513605cba33288d05",
          progressBtn: "rockstargames-sites-gta-gen9a7365b4ee46d36befc477e29f20d95c5",
          progressBtnIcon: "rockstargames-sites-gta-gen9a3b02c7cd2af27aaad99224c7fdc3c51",
          selected: "rockstargames-sites-gta-gen9e21988d6264cae0ee4daf8dadfd9bdc5",
          signInButton: "rockstargames-sites-gta-gen9d5439dfeb908799ff1fbe18a0d200357",
          signInContent: "rockstargames-sites-gta-gen9c8c2ef69210c90cc5cea1d815271279d",
          signUpContent: "rockstargames-sites-gta-gen9c69331f8d75cbd117ee01f8bf5ce0ee5",
          signUpUrl: "rockstargames-sites-gta-gen9c7994a192c6472edd44a9559e2e24ae8",
          tiersCompletedContent: "rockstargames-sites-gta-gen9dc6878d45daa83cb5a58b6af41a4a58a",
          titleHeading: "rockstargames-sites-gta-gen9a7dbec7cdda75d4e40bf0dd698b18813",
          unavailable: "rockstargames-sites-gta-gen9f60398671ce71a7c5759c8f5bc1d2ab9"
        },
        Aa = ((0, d.setContextItem)({
          context: (0, t.createContext)(null),
          key: "cphTitle"
        }), {
          LOGGED_IN_WITH_CHARACTERS: "PackPage:logged-in-with-characters",
          HEADER_TITLE: "PackPage:headerTitle",
          HEADER_DESCRIPTION: "PackPage:headerDescription"
        }),
        Pa = (0, l.withIntl)(() => {
          const e = (0, l.useIntl)(),
            {
              track: a
            } = (0, p.useGtmTrack)(),
            {
              data: s,
              loggedIn: c
            } = (0, p.useRockstarUser)(),
            {
              selectedCharacterTuple: _
            } = (0, p.useRockstarUserState)(),
            {
              isTablet: i,
              isMobile: g
            } = (0, d.useWindowResize)(),
            {
              contextSafe: m
            } = (0, Me.useGSAP)(),
            {
              ref: u,
              inView: b
            } = (0, h.useInView)({
              threshold: .6
            }),
            [f, R] = (0, t.useState)([0, 0, 0, 0]),
            [E, k] = (0, t.useState)([0, 0, 0, 0]),
            [S, v] = (0, t.useState)(0),
            [j, w] = (0, t.useState)(null),
            [A, P] = (0, t.useState)(null),
            [x, T] = (0, t.useState)(!1),
            [I, C] = (0, t.useState)((s?.characters?.gtao?.length ?? 0) > 0),
            [O, N] = (0, t.useState)(!1),
            [G, W] = (0, t.useState)(0),
            [y, z] = (0, t.useState)([]),
            [D, V] = (0, t.useState)(!1),
            [L, B] = (0, t.useState)(!1),
            M = (0, t.useRef)(null),
            U = (0, t.useRef)(null),
            H = (0, t.useRef)(null),
            F = (0, t.useRef)(null),
            q = `${document.location.pathname}${document.location.search}`,
            {
              signUpUrl: Y,
              signInUrl: X
            } = (0, d.useScAuthLinks)(q),
            {
              data: $,
              allData: K,
              loading: Z
            } = (0, aa.A)(),
            J = !!$?.length,
            Q = {
              event: "cta_login",
              text: Ve.pln_career_progress_header_signin_label.defaultMessage,
              link_url: X,
              element_placement: "career progress page"
            },
            ee = {
              event: "cta_signup",
              text: Ve.pln_career_progress_header_signup_label.defaultMessage,
              link_url: Y,
              element_placement: "career progress page"
            },
            ae = {
              event: "tool_tip_hover",
              display_type: g ? "mobile" : "desktop",
              element_placement: "career progress page"
            },
            se = {
              event: "page_section_impression",
              element_placement: "career progress page module"
            },
            re = {
              event: D ? "cta_expand" : "cta_collapse",
              element_placement: "career progress page"
            };
          (0, t.useEffect)(() => {
            if (Array.isArray(_)) {
              const e = _?.[0];
              T((0, d.getGen9Consoles)().includes(e))
            }
          }, [String(_)]), (0, t.useEffect)(() => {
            let e = 0,
              a = 0;
            const s = [0, 0, 0, 0],
              r = [0, 0, 0, 0];
            if (K?.length > 0) {
              K[0].subNavItems.forEach(s => {
                e += s.tiers?.length ?? 0, a += s.tiers?.filter(e => e.isComplete).length ?? 0
              }), K[0].subNavItems.forEach(e => {
                e.tiers?.forEach((e, a) => {
                  s[a] += 1, e?.isComplete && (r[a] += 1)
                })
              });
              const t = a / e * 100,
                o = t < 1 && t > 0 ? Math.ceil(t) : Math.round(t);
              R(s), k(r), v(isNaN(o) ? 0 : o)
            }
          }, [K]), (0, t.useEffect)(() => {
            if (void 0 !== K && K.length > 0) {
              const a = [{
                title: e.formatMessage(Ve.pln_career_progress_all_chip_title),
                name: "all",
                subNavItems: K[0].subNavItems
              }, ...$];
              z(a)
            }
          }, [K]);
          const te = (0, t.useCallback)((e, s, r, t, o) => {
              ((e, s, r, t, o, c) => {
                a({
                  event: "card_click",
                  text: o?.toLowerCase() || "",
                  link_url: r,
                  element_placement: s?.toLowerCase(),
                  card_id: c?.toLowerCase(),
                  card_name: c?.toLowerCase(),
                  position: e + 1
                })
              })(o, `Card > ${$[G].title} > ${e}`, r, $[G].title, s, e)
            }, [y, G, a]),
            oe = m(() => {
              H?.current && !D ? (o.gsap.to(H?.current, {
                height: "auto",
                autoAlpha: 1,
                duration: .3,
                ease: o.Power2.easeInOut
              }), V(!D)) : (o.gsap.to(H?.current, {
                height: "0px",
                autoAlpha: 0,
                duration: .3,
                ease: o.Power2.easeInOut
              }), V(!D)), a({
                ...re
              })
            }),
            ce = e => {
              "Escape" === e.code && (ne(), M?.current?.focus())
            };
          (0, t.useEffect)(() => (L ? document.addEventListener("keydown", ce) : document.removeEventListener("keydown", ce), () => {
            document.removeEventListener("keydown", ce)
          }), [L]);
          const _e = (0, t.useCallback)(() => {
              B(!0)
            }, []),
            ne = (0, t.useCallback)(() => {
              B(!1)
            }, []);
          return (0, Me.useGSAP)(() => {
            U?.current && (L ? (o.gsap.to(U?.current, {
              visibility: "visible",
              autoAlpha: 1,
              y: 10,
              duration: .3,
              ease: o.Power2.easeInOut
            }), a({
              ...ae
            })) : o.gsap.to(U?.current, {
              visibility: "hidden",
              autoAlpha: 0,
              y: 0,
              duration: .3,
              ease: o.Power2.easeInOut
            }))
          }, {
            dependencies: [U?.current, L]
          }), (0, t.useEffect)(() => {
            if (c)
              if (C((s?.characters?.gtao ?? [])?.length > 0), I) {
                w(e.formatMessage(Ve.pln_career_progress_header_title));
                const a = Ve.pln_career_progress_header_body_with_pc;
                P(x ? e.formatMessage(Ve.pln_career_progress_header_body_gen9) : e.formatMessage(a))
              } else w(e.formatMessage(Ve.pln_career_progress_link_console_account_title)), P(e.formatMessage(Ve.pln_career_progress_link_console_account_description));
            else w(e.formatMessage(Ve.pln_career_progress_header_title)), P(e.formatMessage(Ve.pln_career_progress_header_body_gen9))
          }, [c, I, x, e.locale, s?.characters?.gtao?.length]), (0, t.useEffect)(() => {
            b && !O && (a({
              ...se
            }), N(!0))
          }, [b]), Z || void 0 === c ? (0, r.jsx)("div", {
            className: wa.loading,
            children: (0, r.jsx)(n.A, {
              type: "SPINNING"
            })
          }) : (0, r.jsxs)("div", {
            ref: u,
            "data-testid": "pack-page",
            className: [wa.packListing, wa.navContainer].join(" "),
            style: {
              "--background-image-desktop": `url(${ja})`,
              "--background-image-mobile": `url(${ja})`
            },
            children: [(0, r.jsx)("div", {
              className: xe()(wa.packPageBanner, x ? "" : wa.gen9PackPageBanner),
              children: (0, r.jsxs)("div", {
                className: wa.packPageContent,
                children: [(0, r.jsxs)("div", {
                  className: xe()(wa.packPageCPH, c && I && !x ? wa.gen9PackHeader : ""),
                  children: [(0, r.jsx)("div", {
                    className: xe()(wa.colLeft, c && !x ? wa.gen8ColLeft : ""),
                    children: (0, r.jsxs)("div", {
                      className: wa.titleHeading,
                      children: [(0, r.jsx)("h1", {
                        "data-testid": Aa.HEADER_TITLE,
                        children: j
                      }), (0, r.jsx)("p", {
                        "data-testid": Aa.HEADER_DESCRIPTION,
                        children: A
                      })]
                    })
                  }), c ? (0, r.jsxs)(r.Fragment, {
                    children: [I && (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsxs)("div", {
                        "data-testid": Aa.LOGGED_IN_WITH_CHARACTERS,
                        className: wa.colRight,
                        style: {
                          display: x ? "flex" : "none"
                        },
                        children: [(0, r.jsx)("div", {
                          ref: M,
                          className: wa.infoTooltip,
                          onMouseEnter: _e,
                          onMouseLeave: ne,
                          onFocus: _e,
                          onBlur: ne,
                          "aria-label": e.formatMessage(Ve.pln_career_progress_header_tooltip_aria_label),
                          tabIndex: 0
                        }), (0, r.jsx)("div", {
                          role: "tooltip",
                          ref: U,
                          className: wa.infoTooltipOverlay,
                          children: (0, r.jsx)(va, {
                            totalByTiersArray: f,
                            completedByTiersArray: E
                          })
                        }), (0, r.jsx)(ka, {
                          percentage: S
                        }), (0, r.jsx)("div", {
                          ref: H,
                          className: wa.tiersCompletedContent,
                          children: (0, r.jsx)(va, {
                            totalByTiersArray: f,
                            completedByTiersArray: E
                          })
                        })]
                      }), x && (0, r.jsx)("button", {
                        ref: F,
                        type: "button",
                        className: wa.progressBtn,
                        onClick: oe,
                        children: (0, r.jsx)("div", {
                          className: xe()(wa.progressBtnIcon, D ? wa.expanded : wa.collapsed)
                        })
                      })]
                    }), !I && (0, r.jsx)("div", {
                      "data-testid": "logged-in-no-characters",
                      className: xe()(wa.colRight, i ? wa.authContent : ""),
                      children: (0, r.jsx)("div", {
                        className: wa.signInContent,
                        children: (0, r.jsx)(Ra.A, {
                          variant: "gen9",
                          className: xe()([wa.linkAccountButton]),
                          buttonText: e.formatMessage(Ve.pln_career_progress_link_console_account),
                          platformsAndLinks: [{
                            key: "ps",
                            platform: "ps",
                            translated: !0
                          }, {
                            key: "xbox",
                            platform: "xbox",
                            translated: !0
                          }],
                          trackingType: "link_account",
                          trackingParent: "career progress",
                          target: "_self",
                          returnUrl: q
                        })
                      })
                    })]
                  }) : (0, r.jsx)("div", {
                    "data-testid": "logged-out-sign-in-required",
                    className: xe()(wa.colRight, i ? wa.authContent : ""),
                    children: (0, r.jsxs)("div", {
                      className: wa.signInContent,
                      children: [(0, r.jsx)(Ea.A, {
                        to: X,
                        onClick: Q && (() => a({
                          ...Q
                        })),
                        className: wa.cppButton,
                        children: e.formatMessage(Ve.pln_career_progress_header_signin_label)
                      }), (0, r.jsxs)("div", {
                        className: wa.signUpContent,
                        children: [(0, r.jsx)("p", {
                          children: e.formatMessage(Ve.pln_career_progress_header_signup_account)
                        }), (0, r.jsx)(fa.A, {
                          to: Y,
                          role: "button",
                          className: wa.signUpUrl,
                          onClick: ee && (() => a({
                            ...ee
                          })),
                          children: e.formatMessage(Ve.pln_career_progress_header_signup_label)
                        })]
                      })]
                    })
                  })]
                }), J && (0, r.jsx)(Be, {
                  navItems: y,
                  category: y[G]?.name,
                  setCategory: W
                })]
              })
            }), J ? (0, r.jsx)(Qe, {
              packCardClassName: wa.packCard,
              packListClassName: wa.packList,
              packGridClassName: wa.packListGrid,
              packListItems: y[G]?.subNavItems ?? [],
              selectPackCard: te
            }) : (0, r.jsx)("div", {
              className: wa.unavailable,
              children: (0, r.jsx)(n.A, {
                type: "SPINNING"
              })
            })]
          })
        }, ha),
        xa = ba
    },
    3114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9f141dcc88ad8f93e988fc7be7a115d6.jpg"
    },
    3140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    4052: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    4704: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e60904ee697a602c959024d456d842d8.jpg"
    },
    4766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8df45133877b2d2b6e8c8d89dcfc93c.jpg"
    },
    4853: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/db1933f6d65611f72d9524325f504f3e.jpg"
    },
    4941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c29bb59785a1c0f3d351d9c0ba968235.jpg"
    },
    6029: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/956f4cb0e9f776e992f8746d19e21d36.jpg"
    },
    6069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    6597: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28009d14aa0c5105aa7f0428fde05dff.jpg"
    },
    7788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    8136: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e9ffa532ef5016daad8493cd346628ae.jpg"
    },
    8783: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/953dcaaedefb500d80b5599fe891d649.jpg"
    },
    8914: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    9041: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b332167e59f22f23080b67f8112e82b1.jpg"
    },
    9434: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/69cf4dfeaa6b7259a19d11eb34b8ad12.jpg"
    },
    9887: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/738ff75ecbbd0b10f520008cf0ed55e4.jpg"
    },
    9987: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac19ba9d81b559aae33c79b248852edc.jpg"
    },
    10794: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    11441: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    11521: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d2f7159e42c4941f90cc07ef61f4bcb.jpg"
    },
    11966: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    12365: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    12851: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    13720: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/410f33763371922183d17770a4bbf045.jpg"
    },
    13857: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a18049e11e58c7b0f18e4df61398aa62.jpg"
    },
    13992: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    14176: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b332167e59f22f23080b67f8112e82b1.jpg"
    },
    14615: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/317683a193310bb03e30549f72ca70aa.jpg"
    },
    14995: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70fa0fecfc148d254c5d4a3d0597014a.jpg"
    },
    15509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    16960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48a63bb58e28239ac3cba6f9e3bf6895.jpg"
    },
    17484: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4ae3a45ad0be6ad0c5f52586d6b3206f.jpg"
    },
    17556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9cc957c5eadfb452622edb7bc7ce5555.jpg"
    },
    18265: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/235ef607bbc5f169e6166094fbbfef20.jpg"
    },
    19063: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f5cfd7d54ad7c2528b508e2b22a484a4.jpg"
    },
    19465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    19741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    20092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29b7ca2cb558db181179f586337f027f.jpg"
    },
    20345: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d680a00ae7fffa73f72b07db2a614f43.jpg"
    },
    21271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28e4fd8cc9739277d38720566cf02775.jpg"
    },
    21402: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    21718: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1640f11865a16ab8e9aa7c5bcd9ae17b.jpg"
    },
    21881: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f26193017bef03e33259bc6e8b6a301.jpg"
    },
    22540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    23650: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/873907cfb98d823251c060f38a0f94c1.jpg"
    },
    24164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    25139: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    25274: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    25513: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8bf8db232caaeeb346240890b5a16dd4.jpg"
    },
    26865: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    27712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36c8b2a88cd5c85a910409753193e082.jpg"
    },
    30185: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    30269: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f45f3594fe147f50d1192a2ac82fe409.jpg"
    },
    30575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa8273f4831d6c35bc8d2e436b0728f3.jpg"
    },
    30657: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a03972b42cd84b5ad248dac0c78aad48.jpg"
    },
    30875: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d7b04f2fd07d8df02ae13ff38f9bd014.jpg"
    },
    31219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/17ae05873860d112435453bd173d5bdb.jpg"
    },
    31308: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e1a329ec5db576dda1663bf4438ea155.jpg"
    },
    31388: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/225bcea92ddd1c9528699452b2f327f0.jpg"
    },
    31399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a0281a740158d6596585ac6de511af6.jpg"
    },
    31854: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    31889: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/06d481de52d0714190ca4395425c457d.jpg"
    },
    33420: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/53cd24ba391ab62571bcecfb9fcd9101.jpg"
    },
    33853: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/664e7d6817fada6320e966b12e2ad12d.jpg"
    },
    35486: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e8a66b52eaed1eb5e7063b0f92f65e6.jpg"
    },
    36576: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4f1388056b8ee74c87bc86b2107648b.svg"
    },
    36802: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0fe57a53f63a5052a1b61ebc2e2aa0c.jpg"
    },
    37608: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    37636: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bc0954f8adbca56f82b725bdc78299e8.jpg"
    },
    37998: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ce4e5f5c1e08e403a29056957315fc70.jpg"
    },
    39342: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/00bb0938efa404a0446c0390dfe904cf.jpg"
    },
    39788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d5c00db0a81daba487614068eb9314c.jpg"
    },
    40524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/119d114ce10c16621e545c2650b5912e.jpg"
    },
    40795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    41409: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cbb36284927e01e17bc4cebcb15f7a3b.jpg"
    },
    41724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0dfe28ebbe27256c508aba3625f1d05f.jpg"
    },
    42512: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9af6f453dad2c06a02167c55d70e2857.jpg"
    },
    43672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/88f0ba90613b3e92a247d156fdd96911.jpg"
    },
    44475: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/568a5ea8d40c934070ccb0d027415537.jpg"
    },
    45141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    45227: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    45259: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd75fc7fb83019e8c526dc521934be46.jpg"
    },
    45792: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    46278: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    46301: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9495626fd2e54c715b428ab5a084d67b.jpg"
    },
    46939: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    47272: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    47275: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e9e2850486fd9a90cd3f2c551c4a7ab.jpg"
    },
    47358: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/83821cbe9fbdd65c74fefff8b9e6b3a1.jpg"
    },
    47719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/363f2f912a6275812334148aadd6570e.jpg"
    },
    47902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/20986a8f9b5eff60740abbbcaf5763a1.jpg"
    },
    48144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d2f7159e42c4941f90cc07ef61f4bcb.jpg"
    },
    48351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    49203: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5fc7772067f8595434121b7270b0219b.jpg"
    },
    49211: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81ff30c53e70ab68713a91755a904448.jpg"
    },
    49287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c3abe3172b838ef4238c451e4f32169.jpg"
    },
    49390: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2105e961212bb2f553b78a8d98ca24f8.jpg"
    },
    50106: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fdafa37eedafeb1bae5be3fcb8eb2e28.jpg"
    },
    50719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/227c5c1fbddcdd8f547afb6029a60638.jpg"
    },
    50778: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4f2ee06e20eea5691910888a58c25c.jpg"
    },
    51175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a64e5693c9fd896ef4b44db42cdfb0a2.jpg"
    },
    51367: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8e9bfe51ea55e6427b0fff3576de1ee9.jpg"
    },
    51830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0dac3d506a6bbc45c1e69057116f090f.jpg"
    },
    52101: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbb9dd70f8930d047a63131d014ca99e.jpg"
    },
    52720: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d4b3b68e1d6ca4c183eef0ef06541e5e.jpg"
    },
    52754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/087f0a5089d563d4cd903fc31997adc3.jpg"
    },
    53900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04bea6c58ca9aa41fa8ea4b68326a24a.jpg"
    },
    54309: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f0266bf15e0340c0622f595b8b99cd80.jpg"
    },
    54323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    54364: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    54434: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2618797c7dc1e931867b1d8c4ae4be2.jpg"
    },
    54994: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e44c0719cc6c8fa967ae4411b9002429.jpg"
    },
    55284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    55662: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753435f901b1fc6a0e9a22a1998390b6.jpg"
    },
    56709: (e, a, s) => {
      var r = {
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T1.jpg": 19063,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T2.jpg": 8136,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T3.jpg": 52101,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4.jpg": 4766,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_CASH.jpg": 64882,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_RP.jpg": 19465,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T1.jpg": 64362,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T2.jpg": 4853,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T3.jpg": 43672,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T4.jpg": 47275,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T4_CASH.jpg": 15509,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T4_RP.jpg": 21402,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T1.jpg": 87695,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T2.jpg": 4704,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T3.jpg": 30269,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4.jpg": 89750,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_CASH.jpg": 25274,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_RP.jpg": 73057,
        "./PROGRESS_BUSINESSES_PREVIEW_BUSINESS_TYCOON_REWARD_T1.jpg": 16960,
        "./PROGRESS_BUSINESSES_PREVIEW_BUSINESS_TYCOON_REWARD_T2.jpg": 30575,
        "./PROGRESS_BUSINESSES_PREVIEW_BUSINESS_TYCOON_REWARD_T3.jpg": 62642,
        "./PROGRESS_BUSINESSES_PREVIEW_BUSINESS_TYCOON_REWARD_T4.jpg": 30657,
        "./PROGRESS_BUSINESSES_PREVIEW_BUSINESS_TYCOON_REWARD_T4_CASH.jpg": 59427,
        "./PROGRESS_BUSINESSES_PREVIEW_BUSINESS_TYCOON_REWARD_T4_RP.jpg": 7788,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T1.jpg": 9987,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T2.jpg": 63924,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T3.jpg": 78257,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4.jpg": 23650,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_CASH.jpg": 61862,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_RP.jpg": 85149,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T1.jpg": 41409,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T2.jpg": 51830,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T3.jpg": 14995,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4.jpg": 27712,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_CASH.jpg": 24164,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_RP.jpg": 48351,
        "./PROGRESS_BUSINESSES_PREVIEW_FACTORY_REWARD_T1.jpg": 50719,
        "./PROGRESS_BUSINESSES_PREVIEW_FACTORY_REWARD_T2.jpg": 52720,
        "./PROGRESS_BUSINESSES_PREVIEW_FACTORY_REWARD_T3.jpg": 4941,
        "./PROGRESS_BUSINESSES_PREVIEW_FACTORY_REWARD_T4.jpg": 85862,
        "./PROGRESS_BUSINESSES_PREVIEW_FACTORY_REWARD_T4_CASH.jpg": 10794,
        "./PROGRESS_BUSINESSES_PREVIEW_FACTORY_REWARD_T4_RP.jpg": 11441,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T1.jpg": 9887,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T2.jpg": 42512,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T3.jpg": 87405,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4.jpg": 87558,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_CASH.jpg": 96810,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_RP.jpg": 88529,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T1.jpg": 36802,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T2.jpg": 6029,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T3.jpg": 61136,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4.jpg": 79939,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_CASH.jpg": 1117,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_RP.jpg": 90354,
        "./PROGRESS_BUSINESSES_PREVIEW_HANGAR_REWARD_T1.jpg": 688,
        "./PROGRESS_BUSINESSES_PREVIEW_HANGAR_REWARD_T2.jpg": 68063,
        "./PROGRESS_BUSINESSES_PREVIEW_HANGAR_REWARD_T3.jpg": 76354,
        "./PROGRESS_BUSINESSES_PREVIEW_HANGAR_REWARD_T4.jpg": 61585,
        "./PROGRESS_BUSINESSES_PREVIEW_HANGAR_REWARD_T4_CASH.jpg": 25139,
        "./PROGRESS_BUSINESSES_PREVIEW_HANGAR_REWARD_T4_RP.jpg": 86140,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T1.jpg": 72236,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T2.jpg": 49211,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T3.jpg": 47902,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4.jpg": 95237,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_CASH.jpg": 78087,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_RP.jpg": 6e4,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T1.jpg": 1303,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T2.jpg": 62632,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T3.jpg": 6597,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4.jpg": 47358,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4_CASH.jpg": 8914,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4_RP.jpg": 30185,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T1.jpg": 3114,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T2.jpg": 70453,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T3.jpg": 63192,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4.jpg": 86027,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_CASH.jpg": 67509,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_RP.jpg": 58970,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T1.jpg": 55662,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T2.jpg": 62777,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T3.jpg": 41724,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T4.jpg": 47719,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T4_CASH.jpg": 81425,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T4_RP.jpg": 59494,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T1.jpg": 46301,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T2.jpg": 52754,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T3.jpg": 8783,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4.jpg": 196,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_CASH.jpg": 47272,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_RP.jpg": 67187,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T1.jpg": 37998,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T2.jpg": 18265,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T3.jpg": 31388,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4.jpg": 49287,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_CASH.jpg": 26865,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_RP.jpg": 46278,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T1.jpg": 30875,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T2.jpg": 53900,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T3.jpg": 25513,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4.jpg": 89050,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_CASH.jpg": 86830,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_RP.jpg": 6069,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T1.jpg": 71384,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T2.jpg": 51367,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T3.jpg": 83626,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4.jpg": 20345,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_CASH.jpg": 45227,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_RP.jpg": 81892,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T1.jpg": 31219,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T2.jpg": 88644,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T3.jpg": 78593,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4.jpg": 54994,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_CASH.jpg": 92758,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_RP.jpg": 12365,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T1.jpg": 45259,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T2.jpg": 20092,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T3.jpg": 64441,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4.jpg": 62346,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_CASH.jpg": 11966,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_RP.jpg": 79301,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T1.jpg": 21881,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T2.jpg": 49390,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T3.jpg": 75851,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4.jpg": 69368,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_CASH.jpg": 22540,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_RP.jpg": 64759,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T1.jpg": 13720,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T2.jpg": 51175,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T3.jpg": 95338,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4.jpg": 66233,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 75467,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_RP.jpg": 3140,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T1.jpg": 66661,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T2.jpg": 9434,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T3.jpg": 77719,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4.jpg": 17484,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_CASH.jpg": 73536,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_RP.jpg": 40795,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T1.jpg": 93,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T2.jpg": 90194,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T3.jpg": 62575,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4.jpg": 37636,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_CASH.jpg": 13992,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_RP.jpg": 54323,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T1.jpg": 11521,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T3.jpg": 85107,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T4.jpg": 14176,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T1.jpg": 48144,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T2.jpg": 62495,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T3.jpg": 54434,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4.jpg": 9041,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH.jpg": 12851,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_LARGE.jpg": 75415,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_SMALL.jpg": 76335,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP.jpg": 54364,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_LARGE.jpg": 37608,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_SMALL.jpg": 4052,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T1.jpg": 44475,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T2.jpg": 1676,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T3.jpg": 63401,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4.jpg": 61562,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_CASH.jpg": 31854,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_RP.jpg": 45141,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T1.jpg": 40524,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T2.jpg": 66971,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T3.jpg": 35486,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4.jpg": 80485,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_CASH.jpg": 55284,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_RP.jpg": 90496,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T1.jpg": 73381,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T2.jpg": 50778,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T3.jpg": 14615,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4.jpg": 33420,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_CASH.jpg": 45792,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_RP.jpg": 46939,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T1.jpg": 31399,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T2.jpg": 93944,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T3.jpg": 1813,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4.jpg": 39342,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_CASH.jpg": 65890,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_RP.jpg": 60249,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T1.jpg": 63619,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T2.jpg": 17556,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T3.jpg": 31889,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4.jpg": 93634,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_CASH.jpg": 80774,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_RP.jpg": 19741,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T1.jpg": 71396,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T2.jpg": 49203,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T3.jpg": 79094,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4.jpg": 33853,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_CASH.jpg": 57807,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_RP.jpg": 73432,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T1.jpg": 54309,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T2.jpg": 50106,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T3.jpg": 21271,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4.jpg": 31308,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_CASH.jpg": 78528,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_RP.jpg": 74907,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T1.jpg": 13857,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T2.jpg": 21718,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T3.jpg": 66483,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4.jpg": 76320,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 84164,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_RP.jpg": 75135,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T1.jpg": 411,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T2.jpg": 39788,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T3.jpg": 95049,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4.jpg": 58586,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_CASH.jpg": 99214,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_RP.jpg": 84885
      };

      function t(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      t.keys = function() {
        return Object.keys(r)
      }, t.resolve = o, e.exports = t, t.id = 56709
    },
    57807: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    58586: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5ef527fec88fb3e84bb737bf423e53e2.jpg"
    },
    58970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    59427: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    59494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    6e4: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    60249: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    61136: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c4c0606b30d7ceff30c20678f2f406d.jpg"
    },
    61562: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56b4a94be3120ac7de3432404984e52a.jpg"
    },
    61585: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/421ef40a06de853483b3faf4887a8651.jpg"
    },
    61862: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    62346: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9054e4a51b6f5edaed278f85849e87a.jpg"
    },
    62495: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8c3fcd27f71840154cd5e70cf58dfe87.jpg"
    },
    62575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d200b610eaff3bc9afb0e8a1a8bf742b.jpg"
    },
    62632: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/66bf9fc50889cf4565af70b2bd966736.jpg"
    },
    62642: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2736836e6c886dd07f6f0b5fc823c105.jpg"
    },
    62777: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d588977ea29e4de8310c999d6c538830.jpg"
    },
    63192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e4afb9735018b6ec08bccbaa8ca2ab1.jpg"
    },
    63401: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8c92e45735dea4bf0f824a0fc9700949.jpg"
    },
    63619: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a8e7b43b4c2a827ba86e81c6689db03.jpg"
    },
    63924: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceea26325917ceb21c0f696dda936d83.jpg"
    },
    64362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d004258651d4b28b1eb42c62ce46f5e0.jpg"
    },
    64441: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8421dda7574225355d6890559c56d703.jpg"
    },
    64759: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    64882: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    65890: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    66233: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0675692943c33185c823650fb2f7d59a.jpg"
    },
    66483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d9ddb3bff2a20c6e89674a9767ba324.jpg"
    },
    66661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/704ae57732ba4aeb39b14c2a62eb5833.jpg"
    },
    66971: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1db4f57aeface686dfd0d036908b341e.jpg"
    },
    67187: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    67509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    68063: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ecd1ff8ebaaaa3eb46df3a6cef37ce91.jpg"
    },
    69368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f8b819cc8bc440a40536052f10430e6.jpg"
    },
    70453: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/236ce971c6378875cf84505688107dc1.jpg"
    },
    71384: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e7cf9b504b6bcd0e383be9788dbc65b.jpg"
    },
    71396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/92fbe71bb5f4b82b5c670de1ad251bea.jpg"
    },
    72236: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/329ba3f5dd165e867e3bffb4a1313a4b.jpg"
    },
    73057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    73381: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42c9214da8b17b7f4cc9c05b2b511e3b.jpg"
    },
    73432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    73536: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    74046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4f1388056b8ee74c87bc86b2107648b.svg"
    },
    74907: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    75135: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    75415: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    75467: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    75851: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4e803de2820b2174e7d6b81c150aa9f7.jpg"
    },
    76320: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b6f7dce0838752eac6bc6a9d82c37ba0.jpg"
    },
    76335: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    76354: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/739973fac7eecba04691089425dc476e.jpg"
    },
    77719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d552466403ac9b72164dbbc7ea108d6d.jpg"
    },
    78087: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    78257: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36598cdddf8e4e48ea2088143218cb70.jpg"
    },
    78528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    78593: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c5c74e61cbc6654ab3bce73a44a1b807.jpg"
    },
    79094: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9503963789b50259c53761aba542ba72.jpg"
    },
    79301: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    79939: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0ea538130c115745d6c663e34235300e.jpg"
    },
    80485: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/567f38ce806bc29390ba84ea1bf4a1a1.jpg"
    },
    80774: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    81425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    81892: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    82511: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d22169f1fd464ac49f654e2e075ee17.svg"
    },
    83626: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7dc74b193ca7f10045ddea5c7d49e7c8.jpg"
    },
    84164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    84885: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    85107: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2618797c7dc1e931867b1d8c4ae4be2.jpg"
    },
    85149: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    85862: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/db7f05ada88af866fda96ed066729a03.jpg"
    },
    86027: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5139857e057cd137a1fcc80142c8e008.jpg"
    },
    86140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    86830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    87405: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56300c3ecd82257e0cc4daf401b68484.jpg"
    },
    87558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9dc75558f49b4294336d784804ebf33.jpg"
    },
    87695: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4b3d2387f39a68bb5f76eb71cea9d004.jpg"
    },
    88529: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    88644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/737e68b4d76af1eacc848e7c6a963bb3.jpg"
    },
    89050: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac7f847bf384a736ea24f7c3d8efcdfe.jpg"
    },
    89750: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5175a1a707b9727fdfe3b3004749afff.jpg"
    },
    90194: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/25b661f5c750aeb7fa588fafba90f1cc.jpg"
    },
    90354: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    90496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    92758: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    93634: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e83d4dfaa73d3ed72b788705437a431.jpg"
    },
    93944: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b6d8af1607180dc21ed96dd950dc0cb.jpg"
    },
    95049: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/884600c480f1c290be4e203718263556.jpg"
    },
    95237: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46fd71f9a71bbe6801ee02f2d831896a.jpg"
    },
    95338: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eb96774621ed85029a0dac88015f5623.jpg"
    },
    96810: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    99214: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    }
  }
]);