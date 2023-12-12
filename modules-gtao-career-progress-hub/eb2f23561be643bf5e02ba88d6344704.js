(self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [387], {
    1387: (e, a, s) => {
      "use strict";
      s.d(a, {
        Z: () => Me
      });
      var r = s(927),
        t = s(6527),
        o = s(749),
        c = s(8976),
        d = s(9089),
        m = s(2204),
        i = s(3705);
      s(3657);
      var n = s(9929),
        g = s(6711),
        l = s(6573),
        p = s(4859),
        _ = s(9113),
        b = s(4751),
        u = s(6864);
      const f = {
          check: "rockstargames-modules-gtao-career-progress-hubc622fd82e3ed025021f058613d9881f0",
          bronze: "rockstargames-modules-gtao-career-progress-hube53ba4714998619cf49789c1563d094e",
          silver: "rockstargames-modules-gtao-career-progress-hube8f36b96a23a013d7dc4eca95b5c7e4e",
          gold: "rockstargames-modules-gtao-career-progress-huba15ec57237c3f4bcf13000bd9386a395",
          platinum: "rockstargames-modules-gtao-career-progress-hubb6390df3bae907c831e238412eb377d4",
          completed: "rockstargames-modules-gtao-career-progress-hubd72a40f1b8269cb14f337b303f6cda1d"
        },
        R = e => {
          let {
            alt: a,
            type: s,
            classes: r = ""
          } = e;
          return (0, i.jsx)("div", {
            className: [r, f.check, s ? f[s] : null].join(" "),
            children: (0, i.jsxs)("svg", {
              width: "6",
              height: "4",
              viewBox: "0 0 6 4",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              role: "img",
              children: [(0, i.jsx)("title", {
                children: a
              }), (0, i.jsx)("path", {
                d: "M5 0.5L2.25 3.25L1 2",
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })]
            })
          })
        };
      var E = s(3111);
      const S = {
          GUNRUNNING: 1471810592,
          LSDRUGWARS: -1859518261,
          CONTRACT: -392727791,
          AFTERHOURS: -1815199872,
          SMUGGLERSRUN: 1164011531,
          IMPORTEXPORT: -647547292,
          BIKERS: 315075481,
          FAIFAF: -1374101462,
          CAYOPERICOHEIST: -995532639,
          DIAMONDCASINOHEIST: 98960286,
          DOOMSDAY: 1942893817,
          HEISTS: -2044559582,
          PROJECTOVERTHROW: 1445486638,
          PAPERTRAIL: -961870614,
          SUPERYACHTLIFE: -431626303,
          GERALDSLASTPLAY: -192008291,
          PREMIUMDELUXREPO: 75069984,
          MADRAZODISPATCH: -2012307449,
          LOWRIDERS: -501692796,
          LSTUNERS: 320230760,
          DIAMONDCASINO: 1009355195,
          RACING: -344405389,
          SURVIVALS: 350693912,
          ADVERSARYMODE: -789968707,
          DEATHMATCHES: -1232781894,
          VEHICLE: -584819812,
          WEAPONS: -2143405780,
          ARENAWAR: -57043721,
          CHOPSHOP: -4750723
        },
        h = (0, p.makeVar)({
          awardsKey: null,
          rewardsKey: null
        }),
        k = e => h({
          ...h(),
          awardsKey: e
        }),
        j = e => h({
          ...h(),
          rewardsKey: e
        }),
        P = () => {
          const e = (0, p.useReactiveVar)(h);
          return {
            setAwardsKey: k,
            setRewardsKey: j,
            state: e
          }
        },
        I = {
          metalLegend: "rockstargames-modules-gtao-career-progress-hubf755ed57783b2c3fd926e10c92bd4b4b",
          single: "rockstargames-modules-gtao-career-progress-hube3fe35a81b2de9bcd6ac59e694cd1da7",
          completed: "rockstargames-modules-gtao-career-progress-huba8ea6fc19c62c1938a518d7bccab0c1f",
          locked: "rockstargames-modules-gtao-career-progress-hubbb34c746882ca6f5b0ca4f6421d59239"
        },
        v = e => {
          let {
            metals: a,
            currentLevel: s,
            currentLevelComplete: r,
            classes: t = ""
          } = e;
          const {
            formatMessage: o
          } = (0, m.Z)();
          return (0, i.jsx)("ul", {
            className: [I.metalLegend, t || "", 1 === a.length ? I.single : ""].join(" "),
            children: a.map(((e, t) => {
              const c = t < a.indexOf(s) || t === a.indexOf(s) && r;
              return (0, i.jsx)("li", {
                "data-unlocked": c,
                children: c ? (0, i.jsx)(R, {
                  alt: e,
                  type: e,
                  classes: I.completed
                }) : (0, i.jsx)("div", {
                  className: [I.locked, I[e]].join(" "),
                  "aria-label": o(E.careerProgressHub.cph_awards_not_unlocked),
                  role: "img"
                })
              }, e)
            }))
          })
        },
        x = {
          progressBar: "rockstargames-modules-gtao-career-progress-hubd9a25aac53d91f8f27d4e34ff478192b",
          bronze: "rockstargames-modules-gtao-career-progress-hubbcdf522653a2ad75b910d1ffaa26eaee",
          silver: "rockstargames-modules-gtao-career-progress-hubf300b5171a8f02e33767f3be902b1c42",
          gold: "rockstargames-modules-gtao-career-progress-hube3bab1f0857c700e6fe11547713b6a1e",
          platinum: "rockstargames-modules-gtao-career-progress-hubc169d4e08437c7ed487ffb28a6f8948c",
          filler: "rockstargames-modules-gtao-career-progress-hubf25df04b21bb7f966c2f3d747ca90a14",
          collapsed: "rockstargames-modules-gtao-career-progress-hube40dcafd178e17cc46f3861b7bf6584b",
          visuallyHidden: "rockstargames-modules-gtao-career-progress-hube337f4ecc1da229364db15f3e92b2669"
        },
        A = e => {
          let {
            theme: a,
            percentage: s,
            isExpanded: r = !1,
            classes: t = ""
          } = e;
          const o = (0, m.Z)();
          return (0, i.jsx)("div", {
            className: `${t} ${[x.progressBar,a&&x[a],r?"":x.collapsed].join(" ")}`,
            role: "progressbar",
            "aria-label": o.formatMessage(E.careerProgressHub.cph_progress_bar_aria),
            children: (0, i.jsx)("div", {
              className: [x.filler, a && x[a]].join(" "),
              style: {
                width: `${s}%`
              },
              children: (0, i.jsx)("span", {
                className: x.visuallyHidden,
                children: `${s}%`
              })
            })
          })
        },
        T = {
          progressCounter: "rockstargames-modules-gtao-career-progress-hubcf064d357c5807bbf02c498b0ccea29d",
          slash: "rockstargames-modules-gtao-career-progress-hubb328e1767737df6d8446386ebb97bd1f",
          bronze: "rockstargames-modules-gtao-career-progress-hubdd5dc90ce0c66689e04a00cf159d6001",
          silver: "rockstargames-modules-gtao-career-progress-hubaada5bb3f550c8a26053e47ba516cc26",
          gold: "rockstargames-modules-gtao-career-progress-hubc3088302e6ffa6faaa30b324090c1e54",
          platinum: "rockstargames-modules-gtao-career-progress-hubfdb611341b63c7205ea2345e2e211158",
          light: "rockstargames-modules-gtao-career-progress-hube7c1b78aacf918fd702e16d3db42b27f"
        },
        N = e => {
          let {
            value: a,
            total: s,
            theme: r,
            classes: t
          } = e;
          return (0, i.jsxs)("div", {
            className: [T.progressCounter, ...t ? [t] : []].join(" "),
            "aria-label": `${a}/${s}`,
            "data-testid": "progressCounter",
            children: [(0, i.jsx)("span", {
              children: void 0 === a ? "--" : a
            }), (0, i.jsx)("span", {
              className: T.slash
            }), (0, i.jsx)("span", {
              className: r && T[r],
              children: s
            })]
          })
        },
        O = {
          award: "rockstargames-modules-gtao-career-progress-hubc10ebc2c1fba20aba1307818ff452ecd",
          completed: "rockstargames-modules-gtao-career-progress-hubc72a2991a4212040445fb62654655d59",
          awardName: "rockstargames-modules-gtao-career-progress-hubcaccb9485f92320e02ce2afb73e9d99f",
          awardHint: "rockstargames-modules-gtao-career-progress-huba7be209070b16302bba36cc3379d874f",
          tooltip: "rockstargames-modules-gtao-career-progress-hubd3ed4967776fee4b41bd39c9700d7539",
          fadeItemsIn: "rockstargames-modules-gtao-career-progress-huba34b17542b75566602f9fc627cebdf3c",
          hovered: "rockstargames-modules-gtao-career-progress-hubfa3692e2e203d2563b67cff0a9a10e6b",
          awardInfo: "rockstargames-modules-gtao-career-progress-hubb229ce6de765ce3e8b6a49edd8f6e750",
          awardContent: "rockstargames-modules-gtao-career-progress-hubd535a86d18b22bd1aa5cc49dfc9917d0",
          metalLegendContainer: "rockstargames-modules-gtao-career-progress-hubf92032f94146789d4c4e487da4a2d216",
          progressBar: "rockstargames-modules-gtao-career-progress-hubc7e4199c1b8409b6173efb346572dfba",
          awardDetails: "rockstargames-modules-gtao-career-progress-hubd28d7d5d4323ee40e303790a560d4172",
          awardImage: "rockstargames-modules-gtao-career-progress-hubfff0d980134e4a2b395ff1b00728f93f",
          expanded: "rockstargames-modules-gtao-career-progress-hubb45448c551dc8315732ccdcb96c6fbf1",
          tooltipInner: "rockstargames-modules-gtao-career-progress-hubc3b10ba545ad1f815277f55a302a97e1",
          progressCounter: "rockstargames-modules-gtao-career-progress-hubcf08c8ac5d19e66a57cb436514116cfa"
        },
        W = {
          title: "rockstargames-modules-gtao-career-progress-hubad48e58a2dc3106dc694151f02e2597f",
          bonusList: "rockstargames-modules-gtao-career-progress-hubbae7bd12162bcfaa1c3c1a268637e3d6",
          platinum: "rockstargames-modules-gtao-career-progress-hubb0954d33a610798e8d5daa2c22eb0c8e",
          check: "rockstargames-modules-gtao-career-progress-hubb978e60b8909c59eca38bfaaa31d5fc8",
          isComplete: "rockstargames-modules-gtao-career-progress-hubcc717a8be35838a59d0197f7e35c6f88"
        },
        C = e => {
          let {
            bonuses: a,
            currentLevelComplete: s
          } = e;
          const r = (0, m.Z)();
          return (0, i.jsxs)("div", {
            className: W.bonuses,
            children: [(0, i.jsx)("h6", {
              className: W.title,
              children: r.formatMessage(E.careerProgressHub.cph_awards_bonuses_title)
            }), (0, i.jsx)("ul", {
              className: W.bonusList,
              children: a.map((e => (0, i.jsxs)("li", {
                children: [(0, i.jsx)(R, {
                  alt: e.title,
                  classes: [W.check, s ? W.isComplete : ""].join(" ")
                }), "TATTOO" === e.type ? r.formatMessage(E.careerProgressHub.cph_awards_bonuses_tattoo, {
                  tattooName: e.title
                }) : e.title, (0, i.jsx)("span", {
                  className: W.platinum,
                  children: `(${r.formatMessage(E.careerProgressHub.cph_awards_platinum)})`
                })]
              }, e.title)))
            })]
          })
        },
        {
          cdnBase: w
        } = (0, n.getScConfigForOrigin)(),
        G = "bronze",
        D = "platinum",
        V = [G, "silver", "gold", D],
        y = e => {
          let {
            award: a,
            isExpanded: s,
            isMobile: t,
            toggleModal: o,
            classes: c,
            position: d,
            hoverFn: m,
            setHoveredAwardId: n,
            isShowTooltip: l
          } = e;
          const p = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const s = {
                progress: void 0 === e ? void 0 : Number(e),
                currentLevel: a.length && a.length > 1 ? G : D,
                levelEnd: a.length > 0 ? a[0] : 1,
                isComplete: !1,
                percent: 0,
                metalLevel: 0
              };
              if (void 0 === s.progress || 0 === s.progress) return s;
              if (a.length > 1 && s.progress >= a[a.length - 1] || !a.length && s.progress >= 1) s.isComplete = !0, s.percent = 100, s.levelEnd = a.length ? a[a.length - 1] : 1, s.currentLevel = a.length ? V[a.length - 1] : s.currentLevel, s.progress = s.levelEnd;
              else if (1 === a.length) s.percent = s.progress > 0 ? s.progress / s.levelEnd * 100 : 0, s.isComplete = Boolean(s.progress >= s.levelEnd), s.progress = s.isComplete ? s.levelEnd : s.progress;
              else {
                let e = a.findIndex(((e, r) => {
                  const t = 0 === r ? 0 : r - 1;
                  return void 0 !== s.progress && s.progress >= a[t] && s.progress < e
                }));
                if (e < 0 && (e = 0), e >= 0) {
                  const c = 0 === e ? 0 : e - 1;
                  s.currentLevel = V[e], s.levelEnd = a[e], s.metalLevel = e, s.percent = (r = s.progress, t = c, o = s.levelEnd, Math.floor(100 * (r - t) / (o - t) + 0))
                }
              }
              var r, t, o;
              return s
            }(a.playerProgress, a.levels),
            b = t ? u.E.button : "li",
            [f, R] = (0, r.useState)(null),
            [E, S] = (0, r.useState)(null),
            [h, k] = (0, r.useState)(null),
            {
              track: j
            } = (0, g.useGtmTrack)(),
            {
              styles: P,
              attributes: I
            } = (0, _.D)(f, E, {
              placement: "auto",
              modifiers: [{
                name: "flip",
                options: {
                  allowedAutoPlacements: ["top"],
                  fallbackPlacements: ["bottom"]
                }
              }]
            });

          function x(e) {
            t || (m(e), n(d))
          }(0, r.useEffect)((() => {
            if (!l && h) clearTimeout(h), k(null);
            else if (l && !h) {
              const e = setTimeout((() => {
                j({
                  event: "awards_hover",
                  event_category: "awards",
                  event_action: "hover",
                  event_label: "awards",
                  element_placement: "awards",
                  position: d
                })
              }), 1e3);
              k(e)
            }
          }), [l, h]);
          const T = {
              collapsed: {
                maxHeight: "0",
                overflow: "hidden",
                opacity: 0,
                transition: {
                  duration: .3,
                  ease: "easeIn",
                  stiffness: 1e3,
                  damping: 100
                }
              },
              expanded: {
                maxHeight: "5rem",
                opacity: 1,
                transition: {
                  duration: .3,
                  ease: "easeInOut",
                  stiffness: 1e3,
                  damping: 100
                }
              }
            },
            W = (0, r.useRef)(null);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(b, {
              ..."li" !== b && {
                layout: "position"
              },
              className: [O.award, ...p.isComplete ? [O.completed] : [], ...s ? [O.expanded] : [], ...l ? [O.hovered] : [], ...c ? [c] : []].join(" "),
              ref: t ? W : R,
              tabIndex: 0,
              ...t && !s && {
                onClick: () => {
                  o(), j({
                    event: "awards_click",
                    event_category: "awards",
                    event_action: "click",
                    event_label: "awards",
                    element_placement: "awards",
                    position: d
                  })
                }
              },
              ...t && s && {
                disabled: !0
              },
              ...!t && {
                onMouseOver: () => x(!0),
                onMouseOut: () => x(!1),
                onFocus: () => x(!0),
                onBlur: () => x(!1)
              },
              "data-testid": "award",
              children: [(0, i.jsxs)(u.E.div, {
                className: O.awardContent,
                children: [(0, i.jsxs)("div", {
                  className: O.awardInfo,
                  children: [(0, i.jsx)(u.E.div, {
                    className: O.awardImage,
                    layout: "position",
                    children: (0, i.jsx)(u.E.img, {
                      src: `${w}/images/games/GTAV/multiplayer/award/${p.currentLevel}/${a.imageName}.png`,
                      alt: a.name,
                      layout: "position"
                    })
                  }), (0, i.jsxs)(u.E.div, {
                    className: O.awardDetails,
                    layout: !0,
                    children: [(0, i.jsx)("h3", {
                      className: O.awardName,
                      children: a.name
                    }), t && (0, i.jsx)(u.E.div, {
                      className: O.awardHint,
                      initial: "collapsed",
                      variants: T,
                      animate: s ? "expanded" : "collapsed",
                      children: a.hint
                    }), (0, i.jsx)(N, {
                      theme: p.currentLevel,
                      value: p.progress,
                      total: p.levelEnd,
                      classes: O.progressCounter
                    }), a.bonuses && t && (0, i.jsx)(u.E.div, {
                      initial: "collapsed",
                      variants: T,
                      animate: s ? "expanded" : "collapsed",
                      children: (0, i.jsx)(C, {
                        currentLevelComplete: p.isComplete,
                        bonuses: a.bonuses
                      })
                    })]
                  })]
                }), !p.isComplete && (0, i.jsx)(A, {
                  theme: p.currentLevel,
                  percentage: p.percent,
                  isExpanded: s,
                  classes: O.progressBar
                })]
              }), (0, i.jsx)("div", {
                className: O.metalLegendContainer,
                children: (0, i.jsx)(v, {
                  metals: a.levels && a.levels.length > 1 ? V : [D],
                  currentLevel: p.currentLevel,
                  currentLevelComplete: p.isComplete,
                  classes: O.metalLegend
                })
              })]
            }), !t && l && (0, i.jsx)("div", {
              className: O.tooltip,
              style: P.popper,
              ref: S,
              ...I,
              children: (0, i.jsxs)("div", {
                className: O.tooltipInner,
                children: [a.hint, a.bonuses && (0, i.jsx)(C, {
                  currentLevelComplete: p.isComplete,
                  bonuses: a.bonuses
                })]
              })
            })]
          })
        },
        z = {
          awardsOuter: "rockstargames-modules-gtao-career-progress-hubb6f4f525b44d92258f0b6f22c6f2ce9f",
          isClosing: "rockstargames-modules-gtao-career-progress-hubca718b5dc17015d0d238544c7871b206",
          isOpen: "rockstargames-modules-gtao-career-progress-hubd1e04563d75f1a6c0906ba4ac12647c0",
          awardsContainer: "rockstargames-modules-gtao-career-progress-huba70d817aad6d7dfaf6a5946754bad58d",
          awardCategoryName: "rockstargames-modules-gtao-career-progress-hubf473d3928ee158b1772f542ed9a29dd4",
          modalOpen: "rockstargames-modules-gtao-career-progress-hube3d0e962743b38e28ebddce143e25ad8",
          categoryWrapper: "rockstargames-modules-gtao-career-progress-hube3ab9d493d33bb94d95faba87d6d2947",
          awardsCategoryOpen: "rockstargames-modules-gtao-career-progress-hubcc8e2cfad6b5e7c3c0137aebd78533d1",
          awardCategoryContainer: "rockstargames-modules-gtao-career-progress-hubb313519506366601f9fa4a76b184921c",
          awardCategory: "rockstargames-modules-gtao-career-progress-hube89c6924deae38d9504d906fe05b056a",
          award: "rockstargames-modules-gtao-career-progress-hubf5ee1d7777d3f7c1bf3ed7fa2bab343e",
          fadeIn: "rockstargames-modules-gtao-career-progress-hubfc5d942eab3174ce8095dbbbd9586c36",
          peek: "rockstargames-modules-gtao-career-progress-hubce851169b3b88750f51be89b07d8ed0b",
          awardCount: "rockstargames-modules-gtao-career-progress-hubf4831c34b1baabb6fdedad7e8b9bfafd",
          expanded: "rockstargames-modules-gtao-career-progress-hube3b231d8899f4f31056c0e630125442d",
          fadeInAwards: "rockstargames-modules-gtao-career-progress-hubaea5832b0069da79afbd436e6dcbb763",
          slideBtnIn: "rockstargames-modules-gtao-career-progress-hubcaa6ef0e32b1699c9c6aa40f10917a81",
          hovered: "rockstargames-modules-gtao-career-progress-hubbf1d869b891ad0473820a5c0b609c2c3",
          isClosed: "rockstargames-modules-gtao-career-progress-hubef55086e14b6d134e959962021b8b90d",
          fadeOutAwards: "rockstargames-modules-gtao-career-progress-hubd3d1cc2fd69a4c20ef789dffc656c3bd",
          awardsCategoryClose: "rockstargames-modules-gtao-career-progress-hubb1444ca6edec60bd22b618dff494fc28",
          showLess: "rockstargames-modules-gtao-career-progress-hubdf7edb4651681312854dc4e53a598a25",
          showMore: "rockstargames-modules-gtao-career-progress-hubc7f84ea669095cb2c23d773bd0474ac3",
          awardsTitle: "rockstargames-modules-gtao-career-progress-hubf6acd712ca1aff64a3472965b9f9e424",
          rpInfo: "rockstargames-modules-gtao-career-progress-hubeaceac3aed7550112eff6a983ecd6944",
          rpBronze: "rockstargames-modules-gtao-career-progress-hubfeaf2251ac03e5c3c6553066b5458f40",
          rpSilver: "rockstargames-modules-gtao-career-progress-huba2e3c5663683f4f87779ee6deffd2a35",
          rpGold: "rockstargames-modules-gtao-career-progress-hubb7a35c6c57d90e5041e9384a11cb941b",
          rpPlatinum: "rockstargames-modules-gtao-career-progress-hubd1882c31c660af1d1cb2455767a4a052",
          rpGrid: "rockstargames-modules-gtao-career-progress-hubf5736ec7f5876726294c4d9403952d99",
          rpLevel: "rockstargames-modules-gtao-career-progress-huba45eceb3ebf314729b14d6653c39597e",
          tooltip: "rockstargames-modules-gtao-career-progress-hubd1f1b5e63ba43711ae8f2862f6fbe8ef",
          tooltipInner: "rockstargames-modules-gtao-career-progress-hube6d20188fe54dec4fd00c8dc5dbeb260",
          tooltipIcon: "rockstargames-modules-gtao-career-progress-huba359c5d9306d0c6727ffc0e84213a306"
        },
        H = [{
          min: 0,
          max: 767,
          show: 6,
          peek: 1
        }, {
          min: 767,
          max: 1279,
          show: 8,
          peek: 2
        }, {
          min: 1280,
          max: 1919,
          show: 12,
          peek: 3
        }, {
          min: 1920,
          max: 0,
          show: 16,
          peek: 4
        }],
        L = () => {
          const {
            isMobile: e,
            windowWidth: a
          } = (0, n.useWindowResize)(), {
            state: t
          } = P(), {
            awardsKey: o
          } = t, [c, l] = (0, r.useState)([]), f = (0, p.useRockstarTokenPing)(), {
            loggedIn: R
          } = (0, g.useRockstarUser)(), {
            selectedCharacterTuple: S
          } = (0, g.useRockstarUserState)(), h = c ? function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              a = 0;
            return e && e.forEach((e => {
              const s = e.levels ? Number(e.levels[e.levels.length - 1]) : 1;
              e.playerProgress && e.playerProgress >= s && (a += 1)
            })), a
          }(c) : 0, [k, j] = (0, r.useState)(!1), [I, v] = (0, r.useState)(!1), [x, A] = (0, r.useState)(!1), {
            setBodyIsScrollable: T
          } = (0, n.useBodyScrollable)(), {
            track: O
          } = (0, g.useGtmTrack)(), [W, C] = (0, r.useState)(12), [w, G] = (0, r.useState)(4), D = (0, r.useRef)(null), V = (0, r.useRef)(null), [L, M] = (0, r.useState)(!1), {
            inView: U
          } = (0, b.YD)({
            threshold: .6
          }), [B, Z] = (0, r.useState)(null), [$, F] = (0, r.useState)(null), [Y, K] = (0, r.useState)(0), {
            formatMessage: q
          } = (0, m.Z)();
          (0, r.useEffect)((() => {
            H.forEach((e => {
              a > e.min && a < e.max && (C(e.show), G(e.peek))
            }))
          }), [a]), (0, r.useEffect)((() => {
            k && !e ? T(!0) : k && e && j(!1)
          }), [e]), (0, r.useEffect)((() => {
            U && !L && (O({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "awards",
              element_placement: "awards"
            }), M(!0))
          }), [U]);
          const X = (0, r.useCallback)((() => {
            const a = D.current;
            e && T(k), a && (k || O({
              event: "view_all",
              event_action: "view_all",
              event_category: "click",
              event_label: "awards",
              text: "awards",
              element_placement: "awards"
            })), k && (v(!0), O({
              event: "nav_back",
              event_action: "back",
              event_category: "nav",
              event_label: "awards",
              text: "awards",
              element_placement: "awards"
            }), e || window.scrollTo({
              top: a?.offsetTop,
              left: 0,
              behavior: "smooth"
            })), setTimeout((() => {
              v(!1)
            }), 400), j(!k)
          }), [k, D?.current, e]);
          (0, r.useEffect)((() => {
            (async () => {
              if (null === R || null === S || !o) return;
              let e = {};
              if (R && !1 !== S) {
                const [a, s] = S;
                e = {
                  platform: a,
                  slot: s
                }
              }
              const a = await async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const {
                  error: a = null,
                  result: s
                } = await (0, n.coreScApiFetch)("games/gtao/awards", {
                  pingBearer: f,
                  useCache: !0,
                  ...R ? {} : {
                    requireBearerToken: !1
                  },
                  query: e
                });
                if (a) throw Object.assign(new Error(""), a);
                return s?.categories ?? null
              }(e), s = function(e, a) {
                const s = [];
                return a.forEach((a => {
                  a.awards.forEach((a => {
                    a?.sections?.indexOf(e) >= 0 && s.push(a)
                  }))
                })), s
              }(o, a);
              l(s)
            })()
          }), [o, R, S]);
          const {
            styles: Q,
            attributes: J,
            update: ee
          } = (0, _.D)(B, $, {
            placement: "bottom-end"
          });
          if (!o || !c.length) return null;
          const ae = e ? "div" : "ul",
            se = e ? u.E.div : "div";
          return (0, i.jsx)("div", {
            className: z.awardsOuter,
            children: (0, i.jsxs)(se, {
              "data-open": k && e,
              transition: {
                ease: "easeInOut",
                stiffness: 1e3,
                damping: 100,
                duration: .2
              },
              className: [z.awardsContainer, k && e ? z.modalOpen : "", k && !e ? z.expanded : "", !k && I ? z.isClosed : "", x && !e ? z.hovered : ""].join(" "),
              ref: D,
              layout: !0,
              children: [(0, i.jsxs)(u.E.div, {
                className: z.awardCategoryContainer,
                layout: !0,
                children: [(0, i.jsxs)(u.E.div, {
                  className: z.awardsTitle,
                  children: [(0, i.jsxs)("h2", {
                    className: z.awardCategoryName,
                    children: [k && e && (0, i.jsx)(u.E.button, {
                      type: "button",
                      onClick: () => X(),
                      layout: !0,
                      variants: {
                        open: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: .5,
                            ease: "easeInOut",
                            stiffness: 1e3,
                            damping: 100,
                            delay: 0
                          }
                        },
                        closed: {
                          opacity: 0,
                          x: -30,
                          transition: {
                            duration: .5,
                            ease: "easeInOut",
                            stiffness: 1e3,
                            damping: 100
                          }
                        }
                      },
                      initial: "closed",
                      animate: k && e ? "open" : "closed",
                      children: (0, i.jsx)(u.E.img, {
                        src: s(9806),
                        alt: "Back"
                      })
                    }), (0, i.jsx)(d.Z, {
                      ...E.careerProgressHub.cph_awards_title
                    })]
                  }), (0, i.jsxs)("div", {
                    className: z.rpInfo,
                    children: [(0, i.jsx)("button", {
                      className: z.tooltipIcon,
                      ref: Z,
                      type: "button",
                      ...ee && {
                        onMouseOver: ee,
                        onFocus: ee
                      },
                      "aria-label": q(E.careerProgressHub.cph_reward_ready_to_claim)
                    }), (0, i.jsx)("div", {
                      className: z.tooltip,
                      style: Q.popper,
                      ref: F,
                      ...J,
                      children: (0, i.jsxs)("div", {
                        className: z.tooltipInner,
                        children: [(0, i.jsx)(d.Z, {
                          ...E.careerProgressHub.cph_awards_rp_bonus_info
                        }), (0, i.jsxs)("div", {
                          className: z.rpGrid,
                          children: [(0, i.jsx)("div", {
                            className: z.rpGridItem,
                            children: (0, i.jsx)("span", {
                              className: [z.rpBronze, z.rpLevel].join(" "),
                              children: (0, i.jsx)(d.Z, {
                                ...E.careerProgressHub.cph_awards_bronze
                              })
                            })
                          }), (0, i.jsx)("div", {
                            className: z.rpGridItem,
                            children: "+100 RP"
                          }), (0, i.jsx)("div", {
                            className: z.rpGridItem,
                            children: (0, i.jsx)("span", {
                              className: [z.rpSilver, z.rpLevel].join(" "),
                              children: (0, i.jsx)(d.Z, {
                                ...E.careerProgressHub.cph_awards_silver
                              })
                            })
                          }), (0, i.jsx)("div", {
                            className: z.rpGridItem,
                            children: "+200 RP"
                          }), (0, i.jsx)("div", {
                            className: z.rpGridItem,
                            children: (0, i.jsx)("span", {
                              className: [z.rpGold, z.rpLevel].join(" "),
                              children: (0, i.jsx)(d.Z, {
                                ...E.careerProgressHub.cph_awards_gold
                              })
                            })
                          }), (0, i.jsx)("div", {
                            className: z.rpGridItem,
                            children: "+400 RP"
                          }), (0, i.jsx)("div", {
                            className: z.rpGridItem,
                            children: (0, i.jsx)("span", {
                              className: [z.rpPlatinum, z.rpLevel].join(" "),
                              children: (0, i.jsx)(d.Z, {
                                ...E.careerProgressHub.cph_awards_platinum
                              })
                            })
                          }), (0, i.jsx)("div", {
                            className: z.rpGridItem,
                            children: "+800 RP"
                          })]
                        })]
                      })
                    })]
                  })]
                }), (0, i.jsx)("span", {
                  children: (0, i.jsx)(N, {
                    value: h,
                    total: c.length,
                    theme: "platinum",
                    classes: z.awardCount
                  })
                })]
              }), (0, i.jsxs)(se, {
                className: z.categoryWrapper,
                children: [(0, i.jsx)(ae, {
                  className: z.awardCategory,
                  ref: V,
                  children: c.map(((a, s) => (0, i.jsx)(y, {
                    position: s,
                    award: a,
                    isExpanded: e && k,
                    isMobile: e,
                    toggleModal: e && X,
                    hoverFn: A,
                    setHoveredAwardId: K,
                    isShowTooltip: s === Y,
                    classes: [z.award, s >= W + w ? z.fadeIn : "", s >= W && s < W + w ? z.peek : ""].join(" ")
                  }, a.imageName)))
                }), c.length > W && (0, i.jsx)("div", {
                  className: k ? z.showLess : z.showMore,
                  children: (0, i.jsx)("button", {
                    type: "button",
                    onClick: () => X(),
                    children: k ? (0, i.jsx)(d.Z, {
                      ...E.careerProgressHub.cph_progress_rewards_view_less
                    }) : (0, i.jsx)(d.Z, {
                      ...E.careerProgressHub.cph_progress_rewards_view_all
                    })
                  })
                })]
              })]
            })
          })
        };
      var M, U;

      function B() {
        return B = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, B.apply(this, arguments)
      }
      const Z = e => r.createElement("svg", B({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 96 21"
      }, e), M || (M = r.createElement("g", {
        fill: "#fff",
        clipPath: "url(#ps5_svg__a)"
      }, r.createElement("path", {
        d: "M10.017 0v19.278l4.361 1.392V4.488c0-.749.337-1.265.883-1.093.748.202.853.898.853 1.654v6.47c2.723 1.31 4.862 0 4.862-3.47 0-3.472-1.257-5.132-4.952-6.404A52.984 52.984 0 0 0 10.017 0Z"
      }), r.createElement("path", {
        d: "m15.208 17.85 7.017-2.5c.793-.291.92-.695.27-.904a4.773 4.773 0 0 0-2.611.134l-4.676 1.646v-2.618l.27-.09a15.875 15.875 0 0 1 3.224-.688 13.81 13.81 0 0 1 6.052.748c2.064.65 2.289 1.608 1.773 2.244a4.982 4.982 0 0 1-1.81 1.137l-9.509 3.419v-2.529ZM2.012 17.58c-2.117-.591-2.469-1.833-1.496-2.544a10.475 10.475 0 0 1 2.401-1.16l6.254-2.244v2.581l-4.488 1.609c-.793.291-.92.695-.27.905.866.199 1.77.152 2.611-.135l2.162-.748v2.244l-.434.075a14.154 14.154 0 0 1-6.733-.546M61.59 17.655a3.433 3.433 0 0 0 3.426-3.441V8.319a2.072 2.072 0 0 1 2.072-2.065h6.65a.09.09 0 0 0 .09-.09V4.982a.09.09 0 0 0-.09-.09h-8.02a3.426 3.426 0 0 0-3.425 3.427v5.895a2.072 2.072 0 0 1-2.073 2.072h-6.56a.09.09 0 0 0-.09.09v1.182a.098.098 0 0 0 .09.09l7.93.007ZM76.573 9.725V4.982a.09.09 0 0 1 .09-.09h18.119a.09.09 0 0 1 .097.09v1.182a.09.09 0 0 1-.097.09H79.394a.09.09 0 0 0-.098.09V9.41a.987.987 0 0 0 .988.98h11.46a3.636 3.636 0 0 1 0 7.264h-15.08a.097.097 0 0 1-.09-.09v-1.182a.09.09 0 0 1 .09-.09h13.712a2.27 2.27 0 1 0 0-4.54h-11.73a2.072 2.072 0 0 1-2.073-2.028ZM49.672 10.39a2.072 2.072 0 0 0 0-4.136H35.773a.09.09 0 0 1-.097-.09V4.982a.09.09 0 0 1 .097-.09h15.261a3.434 3.434 0 0 1 0 6.86H40.471a2.065 2.065 0 0 0-2.065 2.065v3.74a.097.097 0 0 1-.09.09h-2.543a.097.097 0 0 1-.097-.09v-3.74a3.434 3.434 0 0 1 3.433-3.426h10.563Z"
      }))), U || (U = r.createElement("defs", null, r.createElement("clipPath", {
        id: "ps5_svg__a"
      }, r.createElement("path", {
        fill: "#fff",
        d: "M0 0h95.755v20.946H0z"
      })))));
      var $, F;

      function Y() {
        return Y = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, Y.apply(this, arguments)
      }
      const K = e => r.createElement("svg", Y({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 160 20"
        }, e), $ || ($ = r.createElement("g", {
          clipPath: "url(#xboxseriesxs_svg__a)"
        }, r.createElement("path", {
          fill: "#fff",
          d: "M10.17 8.02a.063.063 0 0 1 .034.017c3.041 2.274 8.249 7.901 6.661 9.49A10.272 10.272 0 0 1 10.17 20c-2.463 0-4.842-.878-6.696-2.472-1.587-1.59 3.62-7.217 6.661-9.491a.067.067 0 0 1 .035-.017Zm5.299-6.556C13.91.556 12.223 0 10.17 0 8.118 0 6.43.556 4.872 1.463a.038.038 0 0 0-.017.05.04.04 0 0 0 .05.017c1.969-.418 4.96 1.254 5.244 1.422a.034.034 0 0 0 .043 0c.282-.167 3.277-1.84 5.244-1.422a.04.04 0 0 0 .05-.017.038.038 0 0 0-.018-.05v.001ZM3.05 2.87a.178.178 0 0 0-.045.034A9.925 9.925 0 0 0 .024 9.31a9.88 9.88 0 0 0 2.056 6.75c.005.008.014.015.025.018.01.003.022.002.031-.003a.04.04 0 0 0 .012-.051C1.37 13.667 5.334 7.953 7.38 5.556a.046.046 0 0 0 .015-.03.043.043 0 0 0-.018-.033C4.275 2.461 3.221 2.783 3.051 2.87Zm9.912 2.625a.043.043 0 0 0-.018.034.045.045 0 0 0 .014.029c2.047 2.395 6.011 8.11 5.235 10.466a.04.04 0 0 0 .01.051.044.044 0 0 0 .057-.016 9.88 9.88 0 0 0 2.056-6.749 9.925 9.925 0 0 0-2.982-6.406.178.178 0 0 0-.045-.034c-.17-.086-1.225-.408-4.327 2.625Zm22.431 10.667h-2.082l-3.582-4.848-3.582 4.848H24.07l4.623-6.256-4.263-5.766h2.081l3.22 4.357 3.221-4.357h2.08L30.77 9.904l4.623 6.257Zm10.802-3.418c0 1.055-.356 1.898-1.059 2.505-.703.606-1.723.913-3.033.913H36.37v-5.354h-2.724l1.133-1.534h1.59V4.14h5.493c1.232 0 2.19.29 2.846.863.656.573.99 1.337.99 2.27 0 1.155-.533 2.032-1.582 2.605.678.259 1.2.638 1.547 1.13.357.51.542 1.116.531 1.735h.001Zm-7.958-3.47h3.503c.706 0 1.243-.155 1.594-.462.35-.308.529-.774.529-1.39 0-.53-.186-.95-.55-1.249-.366-.298-.893-.45-1.57-.45H38.24l-.002 3.551Zm6.073 3.435c0-.63-.194-1.11-.576-1.426-.382-.315-.966-.475-1.735-.475h-3.762v3.77H42c.746 0 1.324-.164 1.718-.485.395-.322.593-.786.593-1.384Zm14.443-2.559c0 .93-.137 1.783-.408 2.535a5.748 5.748 0 0 1-1.222 2.005 5.377 5.377 0 0 1-1.907 1.305c-.718.289-1.533.435-2.421.435-.9 0-1.72-.146-2.438-.435a5.217 5.217 0 0 1-1.89-1.304 5.663 5.663 0 0 1-1.236-1.997c-.273-.753-.412-1.61-.412-2.544 0-.932.139-1.783.412-2.539a5.819 5.819 0 0 1 1.236-2.017 5.213 5.213 0 0 1 1.89-1.292c.718-.286 1.538-.431 2.438-.431.888 0 1.703.145 2.42.43.724.29 1.375.73 1.907 1.292a5.837 5.837 0 0 1 1.223 2.02c.27.754.408 1.61.408 2.537Zm-10 0c0 1.415.372 2.55 1.108 3.373.724.833 1.71 1.256 2.931 1.256 1.222 0 2.208-.423 2.93-1.256.725-.813 1.092-1.945 1.092-3.373 0-1.427-.367-2.565-1.091-3.388-.735-.823-1.721-1.24-2.931-1.24s-2.197.417-2.932 1.24c-.732.845-1.105 1.986-1.105 3.388h-.003Zm15.896-.245 4.26-5.765h-2.08l-3.22 4.357-3.22-4.357h-2.08l4.26 5.765-4.622 6.256h2.081l3.583-4.848 3.581 4.848h2.082l-4.626-6.256Zm20.17-4.111v3.483h6.074v1.533h-6.07v3.702h6.866v1.651h-8.733V4.14h8.733V5.79l-6.87.002Zm-4.293 4.8c-.61-.55-1.624-.975-3.013-1.266l-1.062-.22c-1.008-.21-1.708-.47-2.081-.77-.37-.278-.558-.69-.558-1.232 0-.53.21-.944.626-1.232.415-.287 1.03-.434 1.821-.434 1.017 0 1.766.183 2.224.543.457.36.715.93.772 1.696v.017h1.85v-.018c-.024-1.178-.443-2.117-1.248-2.79-.806-.675-2.02-1.015-3.617-1.015-1.321 0-2.385.299-3.16.89-.775.59-1.172 1.388-1.172 2.378 0 .99.325 1.774.965 2.336.64.562 1.598.97 2.85 1.216l1.045.22c1.03.221 1.751.479 2.15.762.399.284.592.687.592 1.207 0 .641-.243 1.138-.72 1.475-.478.337-1.176.51-2.07.51-1.08 0-1.906-.225-2.454-.667-.548-.44-.832-1.118-.848-2.006v-.026h-1.867v.017c.012 1.38.472 2.445 1.368 3.162.896.716 2.163 1.081 3.769 1.081 1.48 0 2.656-.324 3.495-.963s1.265-1.528 1.265-2.64c0-.93-.31-1.682-.921-2.233l-.001.002Zm22.396 4.085-.12-1.867c-.023-.663-.173-1.201-.448-1.6-.267-.39-.689-.67-1.255-.841.624-.205 1.119-.556 1.469-1.041.359-.5.543-1.124.543-1.854 0-1.033-.38-1.856-1.13-2.444-.751-.589-1.785-.89-3.085-.89h-5.342V16.16h1.868v-4.932h3.525c.7 0 1.214.16 1.526.474.312.315.492.864.526 1.63l.051 1.277c.012.697.134 1.215.363 1.542l.005.008h1.921l-.015-.027c-.209-.354-.345-.844-.401-1.456l-.001.002Zm-7.497-8.956h3.371c.769 0 1.367.164 1.778.485.412.32.62.803.62 1.434 0 .654-.202 1.167-.602 1.519-.399.352-.96.534-1.657.534h-3.509l-.001-3.972ZM104.8 16.16h1.868V4.139H104.8V16.16Zm12.468-10.37V4.14h-8.733V16.16h8.733v-1.652h-6.863v-3.701h6.073V9.273h-6.073V5.791h6.863Zm9.953 4.801c-.61-.55-1.624-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.082-.772-.37-.277-.558-.69-.558-1.231 0-.53.211-.945.626-1.232.415-.287 1.03-.434 1.821-.434 1.018 0 1.767.182 2.224.543.457.36.716.93.772 1.696v.017h1.849v-.019c-.023-1.177-.443-2.116-1.248-2.79-.804-.674-2.021-1.014-3.616-1.014-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.325 1.774.965 2.336c.64.562 1.597.97 2.85 1.216l1.044.219c1.032.222 1.755.48 2.15.763.396.284.592.687.592 1.206 0 .642-.242 1.139-.72 1.476-.478.337-1.176.51-2.07.51-1.08 0-1.905-.226-2.453-.667-.549-.44-.833-1.118-.848-2.006v-.024h-1.867v.017c.011 1.38.471 2.445 1.368 3.162.896.716 2.162 1.081 3.769 1.081 1.481 0 2.655-.324 3.494-.963.839-.639 1.266-1.528 1.266-2.64 0-.93-.31-1.682-.922-2.233Zm19.884-7.954h-.934v15.025h.933l.001-15.025Zm-8.55 7.267 4.259-5.765h-2.081l-3.22 4.357-3.221-4.357h-2.077l4.26 5.765-4.623 6.256h2.081l3.582-4.848 3.582 4.848h2.079l-4.621-6.256Zm20.523.687c-.61-.55-1.623-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.081-.772-.371-.277-.559-.69-.559-1.231 0-.53.211-.945.626-1.232.416-.287 1.03-.434 1.822-.434 1.017 0 1.766.182 2.223.543.456.36.718.93.775 1.696v.017h1.85v-.019c-.023-1.177-.443-2.116-1.248-2.79-.805-.674-2.02-1.014-3.616-1.014-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.324 1.774.965 2.336c.64.562 1.597.97 2.85 1.216l1.044.219c1.031.222 1.755.48 2.15.763.396.284.592.687.592 1.206 0 .642-.242 1.139-.72 1.476-.478.337-1.176.51-2.07.51-1.08 0-1.906-.226-2.454-.667-.547-.44-.832-1.118-.847-2.006v-.024h-1.871v.017c.011 1.38.471 2.445 1.367 3.162.897.716 2.164 1.081 3.77 1.081 1.481 0 2.655-.324 3.495-.963.84-.639 1.265-1.528 1.265-2.64 0-.93-.31-1.682-.922-2.233Z"
        }))), F || (F = r.createElement("defs", null, r.createElement("clipPath", {
          id: "xboxseriesxs_svg__a"
        }, r.createElement("path", {
          fill: "#fff",
          d: "M0 0h160v20H0z"
        }))))),
        q = {
          challenge: "rockstargames-modules-gtao-career-progress-hubf0fe7ab67089ae7aced936b917b1717b",
          content: "rockstargames-modules-gtao-career-progress-hubc5e12803cde586cef24094e08e97e3ab",
          title: "rockstargames-modules-gtao-career-progress-huba5944b6c1dd5293c276f5a9919eeb866",
          isComplete: "rockstargames-modules-gtao-career-progress-hubaa3783ddbfc7fcc44f5008eb80b7b8f4",
          progressCounter: "rockstargames-modules-gtao-career-progress-hube078709f464a55b1ab8655a33e2969d9",
          challengeInfo: "rockstargames-modules-gtao-career-progress-hubcd846f1008374eac9287842bbc247bda",
          status: "rockstargames-modules-gtao-career-progress-hubc38220fc9af63adec001a57ceaf3524c",
          check: "rockstargames-modules-gtao-career-progress-hubef811a81a6ea22dd08a296ee0f0d0add",
          lock: "rockstargames-modules-gtao-career-progress-hubaab1d2b6b3aabace91ce937206a0ed1a",
          progressCounterContainer: "rockstargames-modules-gtao-career-progress-hubb612c346fa9f072293da44b4646b0415",
          chevron: "rockstargames-modules-gtao-career-progress-hubfaaa2263321f924bc0788b544999f75c",
          taskList: "rockstargames-modules-gtao-career-progress-hubf46e96175131fd59c9423e1f07006a27",
          task: "rockstargames-modules-gtao-career-progress-hubaa93b7e5206feb972c21d898ab8dab0a",
          taskComplete: "rockstargames-modules-gtao-career-progress-hubf40e7fba91753254713531cd302d185e",
          open: "rockstargames-modules-gtao-career-progress-hube22f4ba2c52eb984131cf0e3c069ae1d",
          progressBar: "rockstargames-modules-gtao-career-progress-hubc8cdc26a8e3853b165eb9b67c4c650c3"
        },
        X = {
          lock: "rockstargames-modules-gtao-career-progress-hubb381ebb83ac0e680c3ef3212f37c6e7e"
        },
        Q = e => {
          let {
            alt: a,
            classes: s = ""
          } = e;
          return (0, i.jsx)("div", {
            className: [s, X.lock].join(" "),
            children: (0, i.jsxs)("svg", {
              width: "22",
              height: "27",
              viewBox: "0 0 22 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [(0, i.jsx)("title", {
                children: a
              }), (0, i.jsx)("path", {
                opacity: "0.9",
                d: "M20.6592 11.328H18.6515V7.62973C18.6176 3.4098 15.2065 0 11.0017 0C6.79679 0 3.38574 3.41105 3.35313 7.62973V11.328H1.34287C0.620527 11.328 0.0361328 11.9136 0.0361328 12.6347V25.6933C0.0361328 26.4156 0.621781 27 1.34287 27H20.658C21.3803 27 21.9647 26.4144 21.9647 25.6933V12.6347C21.9647 11.9124 21.379 11.328 20.658 11.328H20.6592ZM5.98541 7.62973C6.00924 4.86451 8.24524 2.62977 11.0004 2.62977C13.7556 2.62977 15.9928 4.86451 16.0154 7.62973V11.328H5.98541V7.62973ZM12.5881 20.0199V22.054C12.5881 22.9356 11.8732 23.6504 10.9916 23.6504C10.11 23.6504 9.39521 22.9356 9.39521 22.054V20.0073C8.60515 19.4856 8.08472 18.5902 8.08472 17.5732C8.08472 15.9617 9.3902 14.6562 11.0017 14.6562C12.6131 14.6562 13.9186 15.9617 13.9186 17.5732C13.9186 18.599 13.3894 19.4994 12.5881 20.0199Z",
                fill: "white",
                fillOpacity: "0.4"
              })]
            })
          })
        },
        J = e => {
          let {
            challenge: a,
            isLocked: s,
            isOpen: r,
            onClick: t,
            activeTier: o
          } = e;
          const {
            hint: c,
            playerProgress: d,
            totalProgress: m,
            tasks: n
          } = a;
          let l = "div";
          const {
            track: p
          } = (0, g.useGtmTrack)(), _ = d >= m, {
            loggedIn: b
          } = (0, g.useRockstarUser)(), f = o + 1;
          return l = n?.length ? u.E.button : u.E.div, (0, i.jsxs)(l, {
            className: [q.challenge, _ && !s ? q.isComplete : "", r ? q.open : q.closed].join(" "),
            onClick: () => {
              t(), p({
                event: r ? "cta_collapse" : "cta_expand",
                text: c,
                element_placement: `Tier ${f} - Subchallenge`
              })
            },
            children: [(0, i.jsxs)("div", {
              className: q.challengeInfo,
              children: [b && (0, i.jsx)("div", {
                className: q.status,
                children: s ? (0, i.jsx)(Q, {
                  alt: "Locked",
                  classes: q.lock
                }) : (0, i.jsx)(R, {
                  alt: _ ? "Completed" : "In Progress",
                  classes: [q.check, _ ? q.isComplete : ""].join(" ")
                })
              }), (0, i.jsxs)("div", {
                className: q.content,
                children: [(0, i.jsx)("h4", {
                  className: q.title,
                  children: c
                }), (0, i.jsxs)("div", {
                  className: q.progressCounterContainer,
                  children: [(0, i.jsx)(N, {
                    theme: "light",
                    value: b ? d : void 0,
                    total: m,
                    classes: q.progressCounter
                  }), n?.length && (0, i.jsx)("div", {
                    className: [q.chevron, q.expandedChevron].join(" ")
                  })]
                }), n?.length && (0, i.jsx)(u.E.ul, {
                  className: q.taskList,
                  animate: r ? "open" : "closed",
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
                  children: n.map((e => (0, i.jsxs)("li", {
                    className: q.task,
                    children: [(0, i.jsx)("div", {
                      className: q.status,
                      children: (0, i.jsx)(R, {
                        alt: e.isComplete ? "Completed" : "In Progress",
                        classes: [q.check, e.isComplete ? q.isComplete : ""].join(" ")
                      })
                    }), (0, i.jsx)("p", {
                      className: e.isComplete ? q.taskComplete : "",
                      children: e.hint
                    })]
                  }, e.hint)))
                })]
              })]
            }), !_ && !s && b && (0, i.jsx)(A, {
              percentage: d / m * 100,
              classes: q.progressBar
            })]
          })
        };
      var ee = s(2965),
        ae = s(3118);
      const se = {
          badge: "rockstargames-modules-gtao-career-progress-hubc5458a0524d6b7a215ebe2ef6a03f6a9",
          ready: "rockstargames-modules-gtao-career-progress-hubd2cc9bc0109626d8d405696cb1d9b08e",
          check: "rockstargames-modules-gtao-career-progress-hubc630e44a20c92566f5fc37ddb37b9f09",
          locked: "rockstargames-modules-gtao-career-progress-hubfdfd92e0937de9af0ba7c24c1bf624f7",
          hiddenSpacer: "rockstargames-modules-gtao-career-progress-hubd16ebe5d8ac91ce11e0b7cbd2e91f018"
        },
        re = e => {
          let {
            variant: a
          } = e;
          const s = (0, m.Z)();
          if (!a) return null;
          const r = {
            claimed: s.formatMessage(E.careerProgressHub.cph_reward_claimed),
            ready: s.formatMessage(E.careerProgressHub.cph_reward_claimable)
          };
          return "locked" === a ? (0, i.jsx)("span", {
            className: se.locked,
            "aria-label": s.formatMessage(E.careerProgressHub.cph_reward_locked_alt)
          }) : "hidden" === a ? (0, i.jsx)("span", {
            className: se.hiddenSpacer,
            "aria-hidden": "true"
          }) : (0, i.jsxs)("span", {
            className: [se.badge, se[a]].join(" "),
            children: ["claimed" === a && (0, i.jsx)(R, {
              alt: r.claimed,
              classes: se.check
            }), r[a]]
          })
        },
        te = e => {
          let {
            reward: a,
            tierCompleted: t,
            tierLocked: o,
            ...c
          } = e;
          const [d] = (0, r.useState)(`${(e=>{try{return s(1782)(`./${e}.jpg`)}catch(e){return s(5287)}})(a.imageName)}?im=Resize=960`), {
            loggedIn: m
          } = (0, g.useRockstarUser)();
          return (0, i.jsx)(u.E.div, {
            layout: !0,
            ...c,
            className: "rockstargames-modules-gtao-career-progress-huba20a19e8c4630691e4d79cd1f2fb8a63",
            children: (0, i.jsxs)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubd09755f70fab803f46567d4b3af1b5b7",
              children: [(0, i.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubdbe370d1c2a217e3cba7d09cbaa7d12b",
                children: (0, i.jsx)("img", {
                  src: d,
                  alt: a.label
                })
              }), (0, i.jsxs)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubd20738fb38f98c1862571727e5e19cd2",
                children: [(0, i.jsx)("h4", {
                  children: a.label
                }), o && m && (0, i.jsx)(re, {
                  variant: "locked"
                }), !o && t && m && (0, i.jsx)(re, {
                  variant: a.isCollected ? "claimed" : "ready"
                }), !o && !t && m && (0, i.jsx)(re, {
                  variant: "hidden"
                })]
              })]
            })
          })
        },
        oe = {
          rewards: "rockstargames-modules-gtao-career-progress-hubb1c15408258db6833d086dfeb21d4ca2",
          carousel: "rockstargames-modules-gtao-career-progress-hubb44292207463b5af6d6ee7a4c31b61fa",
          "swiper-scrollbar-disabled": "rockstargames-modules-gtao-career-progress-hubb071b10d31e08ed83572a519bedb19ed",
          "swiper-horizontal": "rockstargames-modules-gtao-career-progress-hubdefa473a7e04f63da60482b4b44d3e77",
          "swiper-vertical": "rockstargames-modules-gtao-career-progress-huba8f27470cd5cbb89342973c4cde61eb1",
          header: "rockstargames-modules-gtao-career-progress-hubbad5a58893e81b530ce47b6b1f72ae65",
          btnViewAll: "rockstargames-modules-gtao-career-progress-hube08db8b876a89477cca5fddbeca65ce3",
          container: "rockstargames-modules-gtao-career-progress-hubfa86271da7df38622a732fbae80f560a",
          inactiveTier: "rockstargames-modules-gtao-career-progress-hubabc7173c3cf9ebe18c8e268059cd0cf2",
          isModalOpen: "rockstargames-modules-gtao-career-progress-hubf1a95e2ec7bc689441919b5e2be694c8",
          btnBack: "rockstargames-modules-gtao-career-progress-hubacdf74efcc3afba9408b2166be0855cd",
          slideBtnIn: "rockstargames-modules-gtao-career-progress-hube043c0984e8853c4d8f4be9ffabbb420",
          fadeItemsOut: "rockstargames-modules-gtao-career-progress-hubdd69fc3c574c413cb3eda9dbe0a8e121",
          fadeItemsIn: "rockstargames-modules-gtao-career-progress-huba4b4d25ec7b657458bb9dcb3964efcf7",
          btnCloseContainer: "rockstargames-modules-gtao-career-progress-hubccd0ba1e4c94e35688d6c3f2290a9ded",
          btnClose: "rockstargames-modules-gtao-career-progress-hubc15cfbe7980962999aae25bfe7a81566",
          isModalClosed: "rockstargames-modules-gtao-career-progress-hubb0b620bfa0230a2cae788aba65cc5736",
          howToClaimMobile: "rockstargames-modules-gtao-career-progress-hube785594af3aa6bc9c87519f26dd2ec6f",
          desktopRewardsGrow: "rockstargames-modules-gtao-career-progress-hubb9c00b4bb89b213b85fa4ef5f413de03",
          mobileRewardsGrow: "rockstargames-modules-gtao-career-progress-hubac0a89df9b00c55b95f41b6f698bd8bc",
          mobileRewardsShrink: "rockstargames-modules-gtao-career-progress-hube34f4ba9aa22ea53813a02b341b3f4fd",
          desktopRewardsShrink: "rockstargames-modules-gtao-career-progress-hubad77475a3d355e330b3f5f677cbec11d",
          desktopShrinkChallengeMargins: "rockstargames-modules-gtao-career-progress-hubd382d87a49bc372155f8479f5211f270",
          fadeRewardsIn: "rockstargames-modules-gtao-career-progress-hubf8f125c111c1834c868a70e354423f97"
        },
        ce = e => {
          let {
            activeTier: a,
            tiers: t,
            setHeight: o,
            setOffset: c,
            isModalOpen: l,
            setIsModalOpen: p,
            rewardsContainer: _
          } = e;
          const [b, f] = (0, r.useState)(window.innerWidth >= 1280), [R, S] = (0, r.useState)(1), [h, k] = (0, r.useState)("auto"), {
            track: j
          } = (0, g.useGtmTrack)(), {
            setBodyIsScrollable: P
          } = (0, n.useBodyScrollable)(), [I, v] = (0, r.useState)(!1), x = (0, r.useRef)(), A = b ? ee.tq : "div", T = b ? ee.o5 : "li", N = (0, r.useRef)(null), O = (0, r.useRef)(null), W = t.some((e => e.isCompleted && e?.numClaimable > 0)), C = (0, m.Z)(), w = (0, r.useMemo)((() => {
            const e = [];
            return t.forEach(((a, s) => {
              a.rewards.forEach(((a, r) => {
                e.push({
                  tier: s,
                  reward: a,
                  showTitle: 0 === r,
                  id: `reward-${s}-${r}`
                })
              }))
            })), e
          }), [t]);

          function G() {
            f(window.innerWidth >= 1280);
            const e = N?.current?.clientHeight;
            if (o(b && w.length ? e : "auto"), !l) {
              const {
                current: e
              } = O && O, a = window.getComputedStyle(e), s = Number(a.width.replace("px", "")) - Number(a.paddingLeft.replace("px", "")) - Number(a.paddingRight.replace("px", ""));
              k(s)
            }
          }

          function D() {
            if (l && j({
                event: "nav_back",
                event_action: "back",
                event_category: "nav",
                event_label: "rewards",
                text: "rewards",
                element_placement: "rewards"
              }), b)
              if (l) x.current?.swiper.disable(), S(0), setTimeout((() => {
                x.current?.swiper.enable();
                const e = w.findIndex((e => e.id === `reward-${a}-0`));
                x.current?.swiper.slideTo(e), x.current?.swiper.disable(), v(!1), x.current?.swiper.enable(), x.current?.swiper.slideTo(0)
              }), 100), setTimeout((() => {
                p(!1), S(1)
              }), 250);
              else {
                const e = _.current,
                  s = e?.offsetTop;
                c(s), x.current?.swiper.disable(), v(!0);
                let r = w.findIndex((e => e.id === `reward-${a}-0`));
                1 === t[a].rewards.length && (r -= 1), x.current?.swiper.slideTo(r), setTimeout((() => {
                  x.current?.swiper.enable(), x.current?.swiper.slideTo(r), p(!0)
                }), 10)
              }
            else P(l), p(!l), v(!l)
          }
          return (0, r.useEffect)((() => (window.addEventListener("resize", G), G(), () => {
            window.removeEventListener("resize", G)
          })), [t]), (0, r.useEffect)((() => {
            P(!!b || !l)
          }), [b]), (0, r.useMemo)((() => (0, i.jsxs)(u.E.div, {
            layout: "position",
            className: [oe.rewards, l ? oe.isModalOpen : oe.isModalClosed].join(" "),
            ref: N,
            children: [l && (0, i.jsx)("div", {
              className: oe.btnCloseContainer,
              children: (0, i.jsx)("button", {
                type: "button",
                "aria-label": C.formatMessage(E.careerProgressHub.cph_progress_close),
                className: oe.btnClose,
                onClick: () => D()
              })
            }), (0, i.jsxs)("div", {
              className: oe.header,
              ref: O,
              children: [l && (0, i.jsx)("button", {
                type: "button",
                className: oe.btnBack,
                onClick: () => D(),
                children: (0, i.jsx)("img", {
                  src: s(5481),
                  alt: C.formatMessage(E.careerProgressHub.cph_progress_close)
                })
              }), (0, i.jsx)("h3", {
                children: (0, i.jsx)(d.Z, {
                  ...E.careerProgressHub.cph_progress_rewards_title
                })
              }), !l && (0, i.jsx)("button", {
                type: "button",
                className: oe.btnViewAll,
                onClick: () => {
                  j({
                    event: "view_all",
                    event_action: "click",
                    event_category: "view_all",
                    event_label: "progress & rewards",
                    element_placement: "progress & rewards"
                  }), D()
                },
                children: (0, i.jsx)(d.Z, {
                  ...E.careerProgressHub.cph_progress_rewards_view_all
                })
              })]
            }), (0, i.jsx)("div", {
              className: oe.container,
              style: {
                "--max-width-static-md": `${h}px`
              },
              children: (0, i.jsxs)(A, {
                ref: x,
                modules: [ae.Qr, ae.W_],
                ...b && {
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
                  className: oe.carousel,
                  loop: !1,
                  grabCursor: !0,
                  centeredSlides: !1,
                  centerInsufficientSlides: !1,
                  slidesPerView: "auto",
                  speed: 700,
                  navigation: !0
                },
                children: [!b && W && (0, i.jsx)("div", {
                  className: oe.howToClaimMobile,
                  children: (0, i.jsx)(d.Z, {
                    ...E.careerProgressHub.cph_reward_how_to_claim
                  })
                }), w?.map((e => {
                  const s = e.tier === a;
                  return s || I ? (0, i.jsxs)(T, {
                    className: s ? void 0 : oe.inactiveTier,
                    children: [e.showTitle && l && (0, i.jsx)("h3", {
                      children: (0, i.jsx)(d.Z, {
                        ...E.careerProgressHub.cph_progress_tracker_tier_label,
                        values: {
                          number: e.tier + 1
                        }
                      })
                    }), (0, i.jsx)(te, {
                      reward: e.reward,
                      style: s ? {} : {
                        opacity: R
                      },
                      tierLocked: t[e.tier].isLocked,
                      tierCompleted: t[e.tier].isCompleted
                    })]
                  }, e.id) : null
                })).filter(Boolean)]
              })
            })]
          })), [a, t, w?.length, b, l, h, I, R])
        },
        de = {
          progressTracker: "rockstargames-modules-gtao-career-progress-hubab257c9adc2371bf125eb63452e12633",
          progressTrackerHeader: "rockstargames-modules-gtao-career-progress-huba7384834722e192013197e744dc8a813",
          platformAvailability: "rockstargames-modules-gtao-career-progress-hubdba45fe56871e3702251029f1850bb86",
          platformIcons: "rockstargames-modules-gtao-career-progress-hube72d8c544f022f3958601ab4ea09db3b",
          container: "rockstargames-modules-gtao-career-progress-hubab8b5ab2d40036cdfbb8a7abad99640e",
          tiers: "rockstargames-modules-gtao-career-progress-hubae6b3ef4ed1e29eaf35999a0dd1b4096",
          active: "rockstargames-modules-gtao-career-progress-hubf3bb0bf8761d0b1fe71eb5ffce7b13c1",
          tier: "rockstargames-modules-gtao-career-progress-huba6cf93b80ac3abc2271df9b0457b823b",
          check: "rockstargames-modules-gtao-career-progress-hube698b18415ea1f00641566da54f42414",
          isComplete: "rockstargames-modules-gtao-career-progress-hube265577ee467ad5f32e48812511c4e97",
          challenges: "rockstargames-modules-gtao-career-progress-hubd4ff2b713fd354814b02ee3f7b20c3f0",
          challengesHeader: "rockstargames-modules-gtao-career-progress-hubcf28ec71fe208e657945aa0e79e8d8b1",
          challengesProgress: "rockstargames-modules-gtao-career-progress-hubd18bd57f6954cf71af71d518072d2fb9",
          progressBar: "rockstargames-modules-gtao-career-progress-huba35918eb9893a6bddbbeb054ecb4889f",
          challengeList: "rockstargames-modules-gtao-career-progress-hubeb38cec2b0f953e333a1bf12e5377d64",
          rewards: "rockstargames-modules-gtao-career-progress-hubfeef086dcf8141f49780375eb25c0d0a",
          isModalOpen: "rockstargames-modules-gtao-career-progress-hubc8e6032d607226cfed94721a980e2093",
          readyToClaim: "rockstargames-modules-gtao-career-progress-hubc39e7f11f34f93554582cb0bc9932d4c",
          tooltip: "rockstargames-modules-gtao-career-progress-hube545033b541537d37a6cc2dbbc3d4f81",
          tooltipInner: "rockstargames-modules-gtao-career-progress-hubc442b4a0c7c5df3b75885c488d3a1b81",
          tooltipIcon: "rockstargames-modules-gtao-career-progress-hubd0616ef24f7c418d608af8a2e0634a9a",
          fadeItemsIn: "rockstargames-modules-gtao-career-progress-hubf9bb780edb60623d2afd83508c2b4045",
          fadeItemsOut: "rockstargames-modules-gtao-career-progress-huba8f51ab04fd225f90176ea175599588b",
          desktopRewardsGrow: "rockstargames-modules-gtao-career-progress-hubc50c17f1e4cba4307d669cce1c967499",
          mobileRewardsGrow: "rockstargames-modules-gtao-career-progress-hubc34ee7bcecd6460869b03dc8dd8fc3bf",
          mobileRewardsShrink: "rockstargames-modules-gtao-career-progress-hubc0e03a830df50e21326bb0ea630f4258",
          desktopRewardsShrink: "rockstargames-modules-gtao-career-progress-hubcccdc3523b42f301b5635de7e8453256",
          desktopShrinkChallengeMargins: "rockstargames-modules-gtao-career-progress-hubd40fe5f00a9bd22a2e4e6975f744f5f2"
        },
        me = () => {
          const {
            windowWidth: e
          } = (0, n.useWindowResize)(), a = e < 1280, {
            state: s
          } = P(), {
            rewardsKey: t
          } = s, o = t ? S[t] : null, [c, l] = (0, r.useState)(null), f = c ? (e => {
            const a = [];
            let s = !1;
            return e.forEach((e => {
              const {
                challenges: r,
                rewards: t
              } = e, o = {
                challenges: r,
                rewards: t
              };
              o.numCompleted = r.filter((e => e.playerProgress >= e.totalProgress)).length, o.isLocked = s, s = o.numCompleted < r.length, o.isCompleted = o.numCompleted >= r.length, o.isCompleted ? o.numClaimable = t.filter((e => !1 === e.isCollected)).length : o.numClaimable = 0, a.push({
                ...e,
                ...o
              })
            })), a
          })(c.tiers) : null, [h, k] = (0, r.useState)(0), [j, I] = (0, r.useState)(!1), {
            ref: v,
            inView: x
          } = (0, b.YD)({
            threshold: .6
          }), T = (0, p.useRockstarTokenPing)(), {
            loggedIn: O
          } = (0, g.useRockstarUser)(), {
            selectedCharacterTuple: W
          } = (0, g.useRockstarUserState)(), {
            formatMessage: C
          } = (0, m.Z)(), {
            track: w
          } = (0, g.useGtmTrack)(), G = f ? f[h].numCompleted : 0, D = f ? f[h].challenges.length : 0, [V, y] = (0, r.useState)(null), [z, H] = (0, r.useState)(null), [L, M] = (0, r.useState)(null), [U, B] = (0, r.useState)(!1), [$, F] = (0, r.useState)("auto"), [Y, q] = (0, r.useState)("auto"), X = (0, r.useRef)(null), Q = (0, r.useRef)();
          (0, r.useEffect)((() => {
            x && !j && (w({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "progress & rewards",
              element_placement: "progress & rewards"
            }), I(!0))
          }), [x]), (0, r.useEffect)((() => {
            null !== O && null !== W && o && (async e => {
              (async () => {
                const {
                  error: a = null,
                  result: s
                } = await (0, n.coreScApiFetch)("games/gtao/career/progress/section", {
                  pingBearer: T,
                  useCache: !0,
                  ...O ? {} : {
                    requireBearerToken: !1
                  },
                  query: e
                });
                if (a) throw Object.assign(new Error(""), a);
                s && l(s)
              })()
            })({
              section: String(o),
              platform: W?.[0],
              slot: W?.[1]
            })
          }), [O, W, o]);
          const {
            styles: ee,
            attributes: ae
          } = (0, _.D)(L, z, {
            placement: "top-end"
          });
          if (!f?.[h] || !o) return null;
          const {
            challenges: se,
            rewards: re,
            isLocked: te
          } = f[h], oe = f.some((e => e.isCompleted && e?.numClaimable > 0));
          return (0, i.jsxs)("div", {
            className: de.progressTracker,
            style: {
              "--rewards-top-offset": "auto" === Y ? "auto" : `${Y}px`
            },
            ref: v,
            children: [(0, i.jsxs)("div", {
              className: de.progressTrackerHeader,
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)("h2", {
                  children: (0, i.jsx)(d.Z, {
                    ...E.careerProgressHub.cph_progress_tracker_title
                  })
                })
              }), !a && oe ? (0, i.jsxs)("div", {
                className: de.readyToClaim,
                children: [(0, i.jsx)(d.Z, {
                  ...E.careerProgressHub.cph_reward_ready_to_claim
                }), (0, i.jsx)("button", {
                  className: de.tooltipIcon,
                  ref: M,
                  type: "button",
                  "aria-label": C(E.careerProgressHub.cph_reward_ready_to_claim)
                }), (0, i.jsx)("div", {
                  className: de.tooltip,
                  style: ee.popper,
                  ref: H,
                  ...ae,
                  children: (0, i.jsx)("div", {
                    className: de.tooltipInner,
                    children: (0, i.jsx)(d.Z, {
                      ...E.careerProgressHub.cph_reward_how_to_claim
                    })
                  })
                })]
              }) : (0, i.jsxs)("div", {
                className: de.platformAvailability,
                children: [(0, i.jsx)("span", {
                  children: (0, i.jsx)(d.Z, {
                    ...E.careerProgressHub.cph_progress_available_on
                  })
                }), (0, i.jsxs)("div", {
                  className: de.platformIcons,
                  children: [(0, i.jsx)(Z, {
                    "aria-label": C(E.careerProgressHub.cph_progress_available_on_aria_ps5)
                  }), (0, i.jsx)(K, {
                    "aria-label": C(E.careerProgressHub.cph_progress_available_on_aria_xbox)
                  })]
                })]
              })]
            }), c && (0, i.jsxs)("div", {
              className: [de.container, U && de.isModalOpen, !1 === U ? de.isModalClosed : ""].join(" "),
              style: {
                ...!a && {
                  height: $
                }
              },
              ref: X,
              children: [(0, i.jsx)("div", {
                className: de.tiers,
                children: (0, i.jsx)("ul", {
                  children: f && f.map(((e, a) => {
                    const s = f[a]?.isCompleted;
                    return (0, i.jsx)("li", {
                      children: (0, i.jsxs)("button", {
                        type: "button",
                        className: [de.tier, h === a ? de.active : "", s ? de.isComplete : ""].join(" "),
                        onClick: () => {
                          ! function(e) {
                            y(null), k(e)
                          }(a), w({
                            event: "component_tab_click",
                            event_action: "tab_click",
                            event_category: "component",
                            event_label: `${C(E.careerProgressHub.cph_progress_tracker_tier_label,{number:a+1})}`,
                            text: `${C(E.careerProgressHub.cph_progress_tracker_tier_label,{number:a+1})}`,
                            link_url: void 0,
                            element_placement: "progress tracker"
                          })
                        },
                        children: [(0, i.jsx)(d.Z, {
                          ...E.careerProgressHub.cph_progress_tracker_tier_label,
                          values: {
                            number: a + 1
                          }
                        }), s && (0, i.jsx)(R, {
                          classes: de.check,
                          alt: C(E.careerProgressHub.cph_tier_complete)
                        })]
                      })
                    }, e.challenges[0].id)
                  }))
                })
              }), (0, i.jsxs)(u.E.div, {
                className: de.challenges,
                children: [(0, i.jsxs)(u.E.div, {
                  className: de.challengesHeader,
                  children: [(0, i.jsx)("h3", {
                    children: (0, i.jsx)(d.Z, {
                      ...E.careerProgressHub.cph_progress_challenges_title
                    })
                  }), (0, i.jsxs)("div", {
                    className: de.challengesProgress,
                    children: [(0, i.jsx)(A, {
                      percentage: O ? G / D * 100 : 0,
                      classes: de.progressBar
                    }), (0, i.jsx)(N, {
                      theme: "light",
                      value: O ? G : void 0,
                      total: D
                    })]
                  })]
                }), (0, i.jsx)(u.E.div, {
                  className: de.challengeList,
                  children: se && se.map((e => (0, i.jsx)(J, {
                    activeTier: h,
                    challenge: e,
                    isLocked: te || !1,
                    isOpen: e.id === V,
                    onClick: () => {
                      y(e.id === V ? null : e.id)
                    }
                  }, e.id)))
                })]
              }), (0, i.jsx)(u.E.div, {
                className: de.rewards,
                "data-open": U,
                layout: !0,
                transition: {
                  ease: "easeInOut",
                  stiffness: 1e3,
                  damping: 100,
                  duration: .3
                },
                ref: Q,
                children: re && (0, i.jsx)(ce, {
                  tiers: f,
                  activeTier: h,
                  isModalOpen: U,
                  setIsModalOpen: e => {
                    B(e), y(null)
                  },
                  setHeight: F,
                  setOffset: q,
                  rewardsContainer: Q
                })
              })]
            })]
          })
        };
      var ie = s(4175),
        ne = s(9542),
        ge = s(1643);
      const le = ["1"],
        pe = {
          dropdownContainer: "rockstargames-modules-gtao-career-progress-hubac0cba78345de240f86c6805a2d6cb8b",
          dropdownButton: "rockstargames-modules-gtao-career-progress-hube6d0d113433cbcf636e7797512e1f3ea",
          dropdownContent: "rockstargames-modules-gtao-career-progress-hube5bf0846190b652f80b077819284c7ea",
          dropdownImage: "rockstargames-modules-gtao-career-progress-hubb72c3c01fe045dcec793d3ec76b75115",
          dropdownTitle: "rockstargames-modules-gtao-career-progress-hubc8accc90e6de04b96c3b6995017821a3",
          dropdownArrow: "rockstargames-modules-gtao-career-progress-hubec3be424b550630ebaa9cac6677965c9",
          open: "rockstargames-modules-gtao-career-progress-hubf734858df19469b6830aa802cf323096"
        },
        _e = e => {
          let {
            imageUrl: a,
            onClick: s,
            isOpen: t
          } = e;
          const o = (0, m.Z)(),
            c = t ? E.careerProgressHub.cph_nav_close : E.careerProgressHub.cph_nav_open,
            d = (0, r.useContext)(Oe);
          return (0, i.jsx)("div", {
            className: pe.dropdownContainer,
            "data-testid": "menu-dropdown",
            children: (0, i.jsx)("button", {
              type: "button",
              className: pe.dropdownButton,
              onClick: s,
              "aria-label": o.formatMessage(c),
              "data-testid": "menu-dropdown-button",
              children: (0, i.jsxs)("div", {
                className: pe.dropdownContent,
                children: [(0, i.jsx)("div", {
                  className: pe.dropdownImage,
                  children: (0, i.jsx)("img", {
                    alt: "",
                    width: "32",
                    height: "32",
                    src: a
                  })
                }), (0, i.jsx)("div", {
                  className: pe.dropdownTitle,
                  children: d
                }), (0, i.jsx)("div", {
                  className: [pe.dropdownArrow, t ? pe.open : ""].join(" "),
                  "data-testid": "chevron"
                })]
              })
            })
          })
        },
        be = {
          navPill: "rockstargames-modules-gtao-career-progress-huba38cedc6576c778d3a050461bb5d5d45",
          selected: "rockstargames-modules-gtao-career-progress-hubb6a947fd83d4a7f564fa71c09fb9e519"
        },
        ue = e => {
          let {
            title: a,
            onClick: s,
            selected: r
          } = e;
          return (0, i.jsx)("button", {
            type: "button",
            onClick: s,
            className: [be.navPill, r ? be.selected : ""].join(" "),
            children: (0, i.jsx)("div", {
              children: a
            })
          })
        },
        fe = {
          navCard: "rockstargames-modules-gtao-career-progress-hubf48d7e19a6fc4228ea08e7a1e944595a",
          navCardImageBox: "rockstargames-modules-gtao-career-progress-huba4b28fe0095b750bdf529f4a40fb9d8b",
          navCardTextBox: "rockstargames-modules-gtao-career-progress-hubc653d7b910fbe53c31fda89b9b68a394"
        },
        Re = e => {
          let {
            title: a,
            url: s,
            imageUrl: r,
            onClick: t
          } = e;
          const o = `${r}?im=Resize,height=420`,
            [c] = (0, n.usePreloadImg)(o);
          return (0, i.jsx)(ie.NavLink, {
            className: fe.navCard,
            to: s,
            onClick: t,
            children: (0, i.jsx)("div", {
              className: [fe.navCardImageBox, c ? fe.navCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${o}")`
              },
              children: (0, i.jsx)("div", {
                className: fe.navCardTextBox,
                children: a
              })
            })
          })
        },
        Ee = {
          navMenu: "rockstargames-modules-gtao-career-progress-hubbe9cb7eab382797bc899a493ffd111cc",
          navMenuMain: "rockstargames-modules-gtao-career-progress-hube2905da1935500625ad93f0fcaf3fb50",
          sectionMenu: "rockstargames-modules-gtao-career-progress-hubd3c146ecbf25e513809e7a6f813e76ee",
          sectionItems: "rockstargames-modules-gtao-career-progress-huba62061ef8479a265a21fcf8dc0712fcb",
          nextSectionNavButton: "rockstargames-modules-gtao-career-progress-hubc22e3d55672b7c2031ee9c98cbd4c341",
          previousSectionNavButton: "rockstargames-modules-gtao-career-progress-hubad93b3c3b89c72a508ee3acbd39a1fcf",
          previousNavButton: "rockstargames-modules-gtao-career-progress-hubc7780c57dfb9846c822573695b07134d",
          nextNavButton: "rockstargames-modules-gtao-career-progress-hubfdbe1a20e7d51c73bf0f74271fb313ca",
          navMenuScroll: "rockstargames-modules-gtao-career-progress-hubbf3e0ea18e65a05506d7e1c28d1137c2",
          headerVisible: "rockstargames-modules-gtao-career-progress-hubb692fd6b3e03dc92073cea71582affa0",
          navMenuGrid: "rockstargames-modules-gtao-career-progress-hubbfe706da7304ceaf33e985c6ff0a38cc",
          navFeaturedItems: "rockstargames-modules-gtao-career-progress-hubfffae80c751cd9b81e84498e5c501cd7"
        };
      var Se;

      function he() {
        return he = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, he.apply(this, arguments)
      }
      const ke = e => r.createElement("svg", he({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), Se || (Se = r.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var je;

      function Pe() {
        return Pe = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, Pe.apply(this, arguments)
      }
      const Ie = e => r.createElement("svg", Pe({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), je || (je = r.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        ve = {
          navScrollButton: "rockstargames-modules-gtao-career-progress-hubab179586d67697b5a2031b1d39f614a8"
        },
        xe = e => {
          let {
            direction: a,
            className: s,
            ...r
          } = e;
          return (0, i.jsxs)("button", {
            type: "button",
            className: [s, ve.navScrollButton].join(" "),
            ...r,
            children: ["left" === a && (0, i.jsx)(ke, {}), "right" === a && (0, i.jsx)(Ie, {})]
          })
        },
        Ae = {
          initial: {
            height: "0dvh"
          },
          open: {
            height: "100dvh",
            transition: {
              ease: "easeInOut",
              duration: .4
            }
          },
          closed: {
            height: "0dvh",
            transition: {
              ease: "easeInOut",
              duration: .4
            }
          }
        },
        Te = e => {
          let {
            navItems: a,
            category: s,
            onNavItemClick: t,
            isOpen: o,
            isHeaderVisible: c
          } = e;
          const d = (0, m.Z)(),
            {
              pathname: n
            } = (0, ie.useLocation)(),
            l = (0, r.useMemo)((() => Math.max(a.findIndex((e => e.name === s)), 0)), [a, n]),
            [p, _] = (0, r.useState)(l),
            [b, f] = (0, r.useState)(!1),
            [R, S] = (0, r.useState)(!1),
            [h, k] = (0, r.useState)(!1),
            j = (0, r.useRef)(null),
            {
              track: P
            } = (0, g.useGtmTrack)(),
            I = [...a],
            v = I[p],
            x = e => {
              e.isEnd ? S(!0) : S(!1), e.isBeginning ? k(!0) : k(!1)
            };
          return (0, r.useEffect)((() => {
            j.current && ((j.current?.wrapperEl.clientWidth || 0) > (j.current?.el.clientWidth || 0) ? (f(!0), j.current.params.centeredSlides = !0, j.current.params.centeredSlidesBounds = !0) : (f(!1), j.current.params.centeredSlides = !1, j.current.params.centeredSlidesBounds = !1))
          }), [j.current?.wrapperEl.clientWidth, j.current?.el.clientWidth]), (0, i.jsx)(u.E.div, {
            className: Ee.navMenu,
            variants: Ae,
            initial: "initial",
            animate: o ? "open" : "closed",
            children: (0, i.jsxs)("div", {
              className: Ee.navMenuMain,
              children: [(0, i.jsxs)("div", {
                className: Ee.sectionMenu,
                children: [!h && b && (0, i.jsx)("div", {
                  className: Ee.previousSectionNavButton,
                  children: (0, i.jsx)(xe, {
                    direction: "left",
                    className: Ee.previousNavButton,
                    onClick: () => j.current?.slidePrev(),
                    "aria-label": d.formatMessage(E.careerProgressHub.cph_nav_scroll_left)
                  })
                }), (0, i.jsx)("div", {
                  className: Ee.sectionItems,
                  children: (0, i.jsx)(ee.tq, {
                    onBeforeInit: e => {
                      j.current = e
                    },
                    onInit: x,
                    className: Ee.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: p,
                    onSlideChange: x,
                    onResize: x,
                    onReachEnd: () => S(!0),
                    onReachBeginning: () => k(!0),
                    children: I.map(((e, a) => {
                      let {
                        title: s
                      } = e;
                      return (0, i.jsx)(ee.o5, {
                        children: (0, i.jsx)(ue, {
                          title: s,
                          onClick: () => ((e, a) => {
                            j.current?.slideTo(e), _(e), P({
                              event: "nav_click",
                              event_action: "click",
                              event_category: "nav",
                              event_label: `Secondary Nav > ${a}`,
                              text: `${a}`,
                              link_url: void 0,
                              element_placement: `Secondary Nav > ${a}`
                            })
                          })(a, s),
                          ...p === a ? {
                            selected: !0
                          } : {}
                        }, s)
                      }, s)
                    }))
                  })
                }), !R && b && (0, i.jsx)("div", {
                  className: Ee.nextSectionNavButton,
                  children: (0, i.jsx)(xe, {
                    direction: "right",
                    className: Ee.nextNavButton,
                    onClick: () => j.current?.slideNext(),
                    "aria-label": d.formatMessage(E.careerProgressHub.cph_nav_scroll_right)
                  })
                })]
              }), (0, i.jsx)("div", {
                className: [Ee.navMenuScroll, c ? Ee.headerVisible : ""].join(" "),
                children: (0, i.jsx)("div", {
                  className: Ee.navMenuGrid,
                  "data-testid": "menu-items",
                  children: v.subNavItems.map((e => {
                    let {
                      title: a,
                      url: s,
                      imageUrl: r
                    } = e;
                    return (0, i.jsx)(Re, {
                      title: a,
                      url: s,
                      imageUrl: r,
                      onClick: () => ((e, a) => {
                        P({
                          event: "nav_click",
                          event_action: "click",
                          event_category: "nav",
                          event_label: `Secondary Nav > ${v.title} > ${e}`,
                          text: `${e}`,
                          link_url: a,
                          element_placement: `Secondary Nav > ${v.title} > ${e}`
                        }), t()
                      })(a, s)
                    }, a)
                  }))
                })
              })]
            })
          })
        },
        Ne = {
          navContainer: "rockstargames-modules-gtao-career-progress-huba5c0b2001c6e04949692655b09b951b6",
          navOverlay: "rockstargames-modules-gtao-career-progress-hubc74d6d10fe36dff21b60af40c89f7f20",
          headerVisible: "rockstargames-modules-gtao-career-progress-hubea84e2bcf7090e4fc7199c3526bf6ce9",
          nav: "rockstargames-modules-gtao-career-progress-huba1cad8d2506106f3ae1c28bf03d3dada",
          navBar: "rockstargames-modules-gtao-career-progress-hubea536a60f8859ce0c810f152fa847e85",
          navBarVisible: "rockstargames-modules-gtao-career-progress-hubf30383967d8d968e19bd0db559e5c546"
        },
        Oe = (0, r.createContext)(null),
        We = {
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
        Ce = e => {
          let {
            title: a
          } = e;
          const {
            pathname: s
          } = (0, ie.useLocation)(), t = (0, ie.useParams)(), {
            data: o,
            loading: c
          } = (() => {
            const e = (0, ne.useGenerateCdnSource)(),
              a = (0, p.useQuery)(ge.SecondaryNavContent, {
                variables: {
                  url: "/gta-online",
                  branchTags: le
                }
              }),
              s = a => {
                const s = a.images?.find((e => "cphsubnav" === e.context)) || a.images?.[0];
                return {
                  title: a.title,
                  name: a.name,
                  url: a.link && `${a.link.replace("./","../")}`,
                  imageUrl: s && e(s?.src)
                }
              },
              t = e => ({
                title: e.title,
                name: e.name,
                subNavItems: e.children.map(s)
              }),
              o = a?.data?.metaUrlInfo?.tina?.payloadRepresentedAsTree?.tree,
              c = (0, r.useMemo)((() => o?.map(t)), [JSON.stringify(o)]);
            return {
              ...a,
              data: c
            }
          })(), {
            setBodyIsScrollable: d
          } = (0, n.useBodyScrollable)(), {
            state: m
          } = (0, n.useRockstarLocalState)(), [l, _] = (0, r.useState)(!1), [b, f] = (0, r.useState)(!1), [R, E] = (0, r.useState)(!1), {
            pageYOffset: S
          } = (0, n.useScroll)(), {
            track: h
          } = (0, g.useGtmTrack)(), k = (0, r.useContext)(Oe), j = !m.navHidden, P = !c && o?.length > 0, I = (0, r.useMemo)((() => t["*"]?.slice(0, t["*"].indexOf("/"))), [o, s]), v = (0, r.useMemo)((() => {
            if (!P) return null;
            const e = o.find((e => e.name === I))?.subNavItems?.find((e => e.name.toLowerCase() === t.section)),
              a = e?.imageUrl;
            return a ? `${a}?im=Resize,height=32,width=32` : null
          }), [a, P]);
          return (0, r.useEffect)((() => {
            const e = e => {
              "Escape" === e.key && _(!1)
            };
            return l ? (R || E(!0), f(!1), h({
              event: "nav_open",
              event_action: "open",
              event_category: "nav",
              event_label: "Secondary Nav",
              text: k,
              link_url: void 0,
              element_placement: "Secondary Nav"
            })) : l || !R || b || h({
              event: "nav_close",
              event_action: "close",
              event_category: "nav",
              event_label: "Secondary Nav",
              text: k,
              link_url: void 0,
              element_placement: "Secondary Nav"
            }), l ? (d(!1), document.addEventListener("keyup", e)) : d(!0), () => {
              d(!0), document.removeEventListener("keyup", e)
            }
          }), [l, b]), P ? (0, i.jsxs)(Oe.Provider, {
            value: a,
            children: [(0, i.jsx)(u.E.div, {
              className: Ne.navOverlay,
              onClick: () => _(!1),
              variants: We,
              initial: "initial",
              animate: l ? "open" : "closed"
            }), (0, i.jsx)("div", {
              className: [Ne.navContainer, j ? Ne.headerVisible : ""].join(" "),
              children: (0, i.jsxs)("nav", {
                className: Ne.nav,
                children: [(0, i.jsx)("div", {
                  className: [Ne.navBar, S > 0 ? Ne.navBarVisible : ""].join(" "),
                  children: (0, i.jsx)(_e, {
                    imageUrl: v,
                    isOpen: l,
                    onClick: () => _(!l)
                  })
                }), (0, i.jsx)(Te, {
                  navItems: o,
                  category: I,
                  isHeaderVisible: j,
                  onNavItemClick: () => {
                    _(!1), f(!0)
                  },
                  isOpen: l
                })]
              })
            })]
          }) : null
        },
        we = e => {
          let {
            brand: a,
            ctaFields: s,
            title: r = ""
          } = e;
          return (0, i.jsxs)("div", {
            className: "rockstargames-modules-gtao-career-progress-huba1fb8ef8aa1c8016ecb3a047fa54b1ad",
            children: [a && (0, i.jsx)("img", {
              alt: r ? `${r} logo` : "",
              className: "rockstargames-modules-gtao-career-progress-hubfd08d81b98e294fb92f04c336656f777",
              src: a
            }), s?.content && (0, i.jsx)(c.Cta, {
              variant: "gen9",
              icon: "play",
              iconPosition: "left",
              ...s
            })]
          })
        },
        Ge = e => {
          let {
            title: a,
            heroImages: s
          } = e;
          const r = (0, ne.useGetCdnSource)(s?.backgroundMobileImage ?? null),
            t = (0, ne.useGetCdnSource)(s?.backgroundDesktopImage ?? null),
            o = (0, ne.useGetCdnSource)(s?.layeredMobileImage ?? null),
            c = (0, ne.useGetCdnSource)(s?.layeredDesktopImage ?? null),
            d = (0, ne.useGetCdnSource)(s?.brandImage ?? null);
          if (!s) return null;
          const m = s?.ctaFields;
          return (0, i.jsxs)("div", {
            className: "rockstargames-modules-gtao-career-progress-hubc6a34f440f166b60d325d87d27fd65ef",
            style: {
              "--background-image-desktop": `url(${t??""})`,
              "--background-image-mobile": `url(${r??t})`,
              "--layered-image-desktop": `url(${c??""})`,
              "--layered-image-mobile": `url(${o??""})`
            },
            children: [(0, i.jsxs)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubbd1b0cfb695730d783de70846f42bb25",
              "aria-label": a,
              role: "img",
              children: [(0, i.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hube2f4e7d8d718b9ffb537877fa5b68fc9"
              }), (0, i.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubd092ea848e1f2006308b052048ed8246"
              })]
            }), (0, i.jsx)(we, {
              brand: d,
              ctaFields: m,
              title: a
            })]
          })
        },
        De = e => {
          let {
            className: a
          } = e;
          return (0, i.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, i.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        Ve = {
          intro: "rockstargames-modules-gtao-career-progress-hube555a1e31776e222bd9002e89c7dd97e",
          summary: "rockstargames-modules-gtao-career-progress-huba0971e2e6003c4af00e53c25ca412d94",
          gettingStarted: "rockstargames-modules-gtao-career-progress-hubef0ec8c49b346d56ffa5022260f01000",
          rightSide: "rockstargames-modules-gtao-career-progress-hubb49af7d384ad9cd23cf7552e064fbc70",
          gettingStartedSteps: "rockstargames-modules-gtao-career-progress-huba033a9494ec8cb3858a6009a60c6626e",
          gettingStartedGuide: "rockstargames-modules-gtao-career-progress-hubdfe2466db84426044019603b7902a007",
          guideButton: "rockstargames-modules-gtao-career-progress-hubcd40fb12378e1d77c842e50ab19f933b",
          icon: "rockstargames-modules-gtao-career-progress-hubb2dbb6676031a8cd1113f369434c10a9"
        },
        ye = e => {
          let {
            title: a,
            category: s,
            summary: t,
            steps: o = [],
            guideLink: c = ""
          } = e;
          const [d, n] = (0, r.useState)(!1), {
            track: l
          } = (0, g.useGtmTrack)(), {
            ref: p,
            inView: _
          } = (0, b.YD)({
            threshold: .6
          }), u = (0, m.Z)();
          return (0, r.useEffect)((() => {
            _ && !d && (l({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "intro",
              element_placement: "intro"
            }), n(!0))
          }), [_]), (0, i.jsxs)("div", {
            className: Ve.intro,
            ref: p,
            children: [(0, i.jsxs)("div", {
              className: Ve.summary,
              children: [(0, i.jsx)("h1", {
                children: s
              }), (0, i.jsx)("h2", {
                children: a
              }), (0, i.jsx)("p", {
                className: Ve.summaryText,
                children: t
              })]
            }), (0, i.jsxs)("div", {
              className: Ve.rightSide,
              children: [(0, i.jsxs)("div", {
                className: Ve.gettingStarted,
                children: [(0, i.jsx)("h3", {
                  children: u.formatMessage(E.careerProgressHub.cph_intro_getting_started)
                }), (0, i.jsx)("ol", {
                  className: Ve.gettingStartedSteps,
                  children: o.map((e => (0, i.jsx)("li", {
                    children: (0, i.jsx)("span", {
                      children: e
                    })
                  }, e)))
                })]
              }), c && (0, i.jsxs)("div", {
                className: Ve.gettingStartedGuide,
                children: [(0, i.jsx)("span", {
                  children: u.formatMessage(E.careerProgressHub.cph_intro_guide_instruction, {
                    title: a
                  })
                }), (0, i.jsxs)(ie.NavLink, {
                  type: "button",
                  to: c,
                  className: Ve.guideButton,
                  children: [(0, i.jsx)("span", {
                    children: u.formatMessage(E.careerProgressHub.cph_intro_guide_learn_more)
                  }), " ", (0, i.jsx)(De, {
                    className: Ve.icon
                  })]
                })]
              })]
            })]
          })
        },
        ze = {
          gen8: "rockstargames-modules-gtao-career-progress-hubcb293e23ff93c9a4b565f50c3c63bfc5",
          gen9: "rockstargames-modules-gtao-career-progress-hubfae98cedf44568e468931cc288fbacda",
          loggedOut: "rockstargames-modules-gtao-career-progress-hube78616d73fca3bbeedb1301c28edf31f",
          notLinked: "rockstargames-modules-gtao-career-progress-huba229bafc8e2f24d945e84015e974bc94",
          unknown: "rockstargames-modules-gtao-career-progress-hubcf2f42c0c4cebbc7890f77059fbb25cc",
          loadingScreen: "rockstargames-modules-gtao-career-progress-hubf5e273312bf03b5d1f3ec60c76680bce",
          highlights: "rockstargames-modules-gtao-career-progress-hube705defcd445c5a6cbab7d893a75a218",
          rewardsTrackerWithData: "rockstargames-modules-gtao-career-progress-hube44cb85da4bea31cd95a4f74f9216236",
          rewardsTracker: "rockstargames-modules-gtao-career-progress-hubd966d2c323f6727fcd564f56ce0e79f7",
          calloutLoginPrompt: "rockstargames-modules-gtao-career-progress-hube42d8251acc1634604baaeeeff7ef4f1",
          calloutNoChar: "rockstargames-modules-gtao-career-progress-hubce73ad2c77aef48644ed10bb553bc001",
          feedback: "rockstargames-modules-gtao-career-progress-hubc2bb063a2001c46c1e157b72c41cfc41",
          rating: "rockstargames-modules-gtao-career-progress-hubc586f98b4f77d43625afb2cbceed95b5"
        };
      t.p8.registerPlugin(o.i);
      const {
        host: He,
        signup: Le
      } = (0, n.getScConfigForOrigin)(), Me = e => {
        let {
          heroImages: a,
          awardsKey: s,
          title: o,
          category: d,
          summary: p,
          steps: _,
          guideLink: b,
          rewardsKey: u,
          images: f,
          subtitle: R,
          highlights: S
        } = e;
        const {
          windowWidth: h
        } = (0, n.useWindowResize)(), {
          selectedCharacterTuple: k,
          userData: j
        } = (0, g.useRockstarUserState)(), {
          loading: I,
          loggedIn: v
        } = (0, g.useRockstarUser)(), {
          setAwardsKey: x,
          setRewardsKey: A
        } = P(), [T, N] = (0, r.useState)("unknown"), O = (0, r.useRef)(null), W = (0, r.useRef)(null), {
          formatMessage: C
        } = (0, m.Z)(), {
          track: w
        } = (0, g.useGtmTrack)(), G = (0, n.useLocale)(), D = (0, n.toScLocaleString)(G), [V, y] = (0, r.useState)(!1), z = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, H = `${Le}&returnUrl=${window.location.pathname}&lang=${D}`, M = `https://${He}.rockstargames.com/settings/linkedaccounts`;
        (0, r.useEffect)((() => {
          s && x(s)
        }), [s]), (0, r.useEffect)((() => {
          u && A(u)
        }), [u]), (0, r.useEffect)((() => () => {
          x(null), A(null)
        }), []), (0, r.useEffect)((() => {
          if (!1 === v && N("loggedOut"), v && Array.isArray(k)) {
            const e = (0, n.getGen9Consoles)().includes(k[0]),
              a = (0, n.getGen8Consoles)().includes(k[0]);
            e ? N("gen9") : a && N("gen8")
          } else v && !1 === k && N("notLinked")
        }), [v, k]), (0, r.useEffect)((() => {
          I || V || null === v || "unknown" === T || (w({
            event: "virtualPageview",
            view_name: `career progress hub: ${o.toLowerCase()}`,
            page_layout: T
          }), y(!0))
        }), [v, T, I]);
        const U = t.p8.matchMedia();
        if ((0, r.useLayoutEffect)((() => {
            if (!W.current) return;
            const e = W.current.getElementsByTagName("img")?.[5];
            e && U.add({
              isDesktop: "(min-width: 500px)",
              isMobile: "(max-width: 501px)",
              reduceMotion: "(prefers-reduced-motion: reduce)"
            }, (a => {
              const {
                isDesktop: s,
                reduceMotion: r
              } = a.conditions;
              if (r) return;
              const o = {
                  mobile: {
                    from: "-100vw",
                    to: "-275vw"
                  },
                  desktop: {
                    from: "0",
                    to: -1 * (e.offsetLeft + e.width - window.innerWidth)
                  }
                },
                c = s ? o.desktop : o.mobile,
                d = {
                  trigger: W.current,
                  scrub: !0
                };
              t.p8.fromTo(W.current, {
                x: c.from,
                scrollTrigger: d
              }, {
                x: c.to,
                scrollTrigger: d,
                ease: "none"
              })
            }))
          }), [I, T, W.current]), (0, r.useEffect)((() => {
            t.p8.matchMediaRefresh()
          }), [h]), I) return (0, i.jsx)("div", {
          className: ze.loadingScreen,
          children: (0, i.jsx)(c.LoadingAnimation, {
            type: "SPINNING"
          })
        });
        let B = null;
        return B = (0, i.jsx)(l.Highlights, {
          highlights: S,
          subtitle: R
        }), (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(Ce, {
            title: o
          }), (0, i.jsxs)("div", {
            className: ze[T],
            ref: O,
            children: [(0, i.jsx)(Ge, {
              title: o,
              heroImages: a ?? {}
            }), (0, i.jsx)(ye, {
              title: o,
              category: d,
              summary: p,
              steps: _,
              guideLink: b
            }), (0, i.jsx)(L, {}), null, (0, i.jsx)("div", {
              className: ze.highlights,
              children: B
            }), !v && (0, i.jsx)(c.CalloutSection, {
              header: C(E.careerProgressHub.cph_login_prompt_title),
              subheader: C(E.careerProgressHub.cph_login_prompt_body),
              type: "button",
              action_text: C(E.careerProgressHub.cph_login_prompt_button),
              actionFooterHelperText: C(E.careerProgressHub.cph_login_prompt_button_helper),
              actionFooterLinkText: C(E.careerProgressHub.cph_login_prompt_button_helper_link),
              actionFooterLink: H,
              actionFooterLinkTrackingData: {
                event: "cta_signup",
                event_category: "cta",
                event_action: "register",
                event_label: "callout section",
                text: C(E.careerProgressHub.cph_login_prompt_button_helper_link).toLowerCase(),
                link_url: H
              },
              link: z,
              className: ze.calloutLoginPrompt,
              trackingData: {
                event: "cta_login",
                event_category: "cta",
                event_action: "login",
                event_label: "callout section",
                text: C(E.careerProgressHub.cph_login_prompt_button_helper_link).toLowerCase(),
                link_url: z,
                element_placement: `callout section - ${E.careerProgressHub.cph_login_prompt_title.defaultMessage}`
              }
            }), v && !1 === k && (0, i.jsx)(c.CalloutSection, {
              header: C(E.careerProgressHub.cph_loggedin_nochar_title),
              subheader: C(E.careerProgressHub.cph_loggedin_nochar_body),
              type: "button",
              action_text: C(E.careerProgressHub.cph_loggedin_nochar_button),
              link: M,
              className: ze.calloutNoChar,
              trackingData: {
                event: "cta_link_account",
                event_category: "cta",
                event_action: "link_account",
                event_label: "callout section",
                text: C(E.careerProgressHub.cph_loggedin_nochar_button).toLowerCase(),
                link_url: M,
                element_placement: `callout section - ${E.careerProgressHub.cph_loggedin_nochar_title.defaultMessage}`
              }
            }), (0, i.jsx)("div", {
              className: j ? ze.rewardsTrackerWithData : ze.rewardsTracker,
              children: (0, i.jsx)(me, {})
            }), (0, i.jsx)(c.CalloutSection, {
              header: C(E.careerProgressHub.cph_callout_feedback_title),
              subheader: C(E.careerProgressHub.cph_callout_feedback_body),
              type: "button",
              action_text: C(E.careerProgressHub.cph_callout_feedback_button),
              link: "/gta-online/feedback",
              className: ze.feedback
            }), (0, i.jsx)(c.Rating, {
              titleSlug: "GTAOnline",
              className: ze.rating
            })]
          })]
        })
      }
    },
    1643: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "SecondaryNavContent"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
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
                value: "branchTags"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "metaUrlInfo"
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
                    value: "url"
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
                  value: "branchTags"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "branchTags"
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
                        value: "payloadRepresentedAsTree"
                      },
                      arguments: [],
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
          end: 225
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query SecondaryNavContent($url: String!, $locale: String!, $branchTags: [String]) {\n    metaUrlInfo(url: $url, locale: $locale, branchTags: $branchTags) {\n        tina {\n            payloadRepresentedAsTree\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function t(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var r = e.definitions[s];
          if (r.name && r.name.value == a) return r
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), r[e.name.value] = a
        }
      })), e.exports = a, e.exports.SecondaryNavContent = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = r[a] || new Set,
          c = new Set,
          d = new Set;
        for (o.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var m = d;
          d = new Set, m.forEach((function(e) {
            c.has(e) || (c.add(e), (r[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var r = t(e, a);
          r && s.definitions.push(r)
        })), s
      }(a, "SecondaryNavContent")
    },
    1782: (e, a, s) => {
      var r = {
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T1.jpg": 5287,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T2.jpg": 5740,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T3.jpg": 8151,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4.jpg": 446,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_CASH.jpg": 31,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_RP.jpg": 8945,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T1.jpg": 6784,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T2.jpg": 4242,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T3.jpg": 6713,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4.jpg": 1628,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_CASH.jpg": 8825,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_RP.jpg": 1853,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T1.jpg": 5966,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T2.jpg": 7473,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T3.jpg": 7206,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4.jpg": 2492,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_CASH.jpg": 4535,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_RP.jpg": 8643,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T1.jpg": 1124,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T2.jpg": 5604,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T3.jpg": 3080,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4.jpg": 435,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_CASH.jpg": 9487,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_RP.jpg": 176,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T1.jpg": 5674,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T2.jpg": 6736,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T3.jpg": 516,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4.jpg": 9043,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_CASH.jpg": 9920,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_RP.jpg": 6144,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T1.jpg": 6859,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T2.jpg": 8395,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T3.jpg": 5136,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4.jpg": 5906,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_CASH.jpg": 1060,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_RP.jpg": 5840,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T1.jpg": 4721,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T2.jpg": 1033,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T3.jpg": 6524,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4.jpg": 2407,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_CASH.jpg": 5876,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_RP.jpg": 6716,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T1.jpg": 8336,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T2.jpg": 7551,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T3.jpg": 3050,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4.jpg": 504,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4_CASH.jpg": 1088,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4_RP.jpg": 4685,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T1.jpg": 3215,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T2.jpg": 1433,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T3.jpg": 9382,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4.jpg": 3214,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_CASH.jpg": 5616,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_RP.jpg": 8581,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T1.jpg": 9583,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T2.jpg": 2341,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T3.jpg": 7326,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4.jpg": 967,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_CASH.jpg": 5378,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_RP.jpg": 2064,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T1.jpg": 6161,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T2.jpg": 4474,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T3.jpg": 2550,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4.jpg": 1009,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_CASH.jpg": 583,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_RP.jpg": 8118,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T1.jpg": 7958,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T2.jpg": 9521,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T3.jpg": 5835,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4.jpg": 6724,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_CASH.jpg": 1881,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_RP.jpg": 1980,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T1.jpg": 1629,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T2.jpg": 2608,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T3.jpg": 5564,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4.jpg": 8001,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_CASH.jpg": 1763,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_RP.jpg": 9924,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T1.jpg": 3519,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T2.jpg": 2610,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T3.jpg": 7420,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4.jpg": 5760,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_CASH.jpg": 987,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_RP.jpg": 5408,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T1.jpg": 570,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T2.jpg": 6044,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T3.jpg": 6978,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4.jpg": 7852,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_CASH.jpg": 9552,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_RP.jpg": 1393,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T1.jpg": 5244,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T2.jpg": 2209,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T3.jpg": 2598,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4.jpg": 7780,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_CASH.jpg": 1230,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_RP.jpg": 4503,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T1.jpg": 7841,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T2.jpg": 193,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T3.jpg": 9277,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4.jpg": 752,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 36,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_RP.jpg": 4322,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T1.jpg": 2630,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T2.jpg": 6569,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T3.jpg": 6302,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4.jpg": 2096,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_CASH.jpg": 2573,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_RP.jpg": 6684,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T1.jpg": 7766,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T2.jpg": 599,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T3.jpg": 1085,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4.jpg": 7509,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_CASH.jpg": 1347,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_RP.jpg": 397,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T1.jpg": 3888,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T3.jpg": 6972,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T4.jpg": 7434,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T1.jpg": 4906,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T2.jpg": 3051,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T3.jpg": 7310,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4.jpg": 3918,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH.jpg": 7800,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_LARGE.jpg": 627,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_SMALL.jpg": 9255,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP.jpg": 703,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_LARGE.jpg": 1026,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_SMALL.jpg": 426,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T1.jpg": 4493,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T2.jpg": 1279,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T3.jpg": 8453,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4.jpg": 8262,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_CASH.jpg": 2553,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_RP.jpg": 595,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T1.jpg": 5643,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T2.jpg": 9644,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T3.jpg": 385,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4.jpg": 1858,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_CASH.jpg": 8208,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_RP.jpg": 6372,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T1.jpg": 5890,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T2.jpg": 3906,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T3.jpg": 4257,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4.jpg": 9232,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_CASH.jpg": 1549,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_RP.jpg": 4049,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T1.jpg": 9041,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T2.jpg": 6620,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T3.jpg": 7196,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4.jpg": 9781,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_CASH.jpg": 8109,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_RP.jpg": 8306,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T1.jpg": 7231,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T2.jpg": 339,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T3.jpg": 2237,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4.jpg": 9346,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_CASH.jpg": 9405,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_RP.jpg": 7066,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T1.jpg": 9146,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T2.jpg": 3958,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T3.jpg": 7859,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4.jpg": 4879,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_CASH.jpg": 9810,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_RP.jpg": 237,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T1.jpg": 68,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T2.jpg": 7774,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T3.jpg": 825,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4.jpg": 8765,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_CASH.jpg": 9777,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_RP.jpg": 872,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T1.jpg": 9948,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T2.jpg": 4705,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T3.jpg": 8816,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4.jpg": 7421,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 7330,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_RP.jpg": 2471,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T1.jpg": 1037,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T2.jpg": 4802,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T3.jpg": 6607,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4.jpg": 7545,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_CASH.jpg": 2393,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_RP.jpg": 3719
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
      }, t.resolve = o, e.exports = t, t.id = 1782
    },
    9806: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4f1388056b8ee74c87bc86b2107648b.svg"
    },
    5287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f5cfd7d54ad7c2528b508e2b22a484a4.jpg"
    },
    5740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e9ffa532ef5016daad8493cd346628ae.jpg"
    },
    8151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbb9dd70f8930d047a63131d014ca99e.jpg"
    },
    446: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8df45133877b2d2b6e8c8d89dcfc93c.jpg"
    },
    31: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    8945: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    6784: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4b3d2387f39a68bb5f76eb71cea9d004.jpg"
    },
    4242: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e60904ee697a602c959024d456d842d8.jpg"
    },
    6713: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f45f3594fe147f50d1192a2ac82fe409.jpg"
    },
    1628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5175a1a707b9727fdfe3b3004749afff.jpg"
    },
    8825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    1853: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    5966: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac19ba9d81b559aae33c79b248852edc.jpg"
    },
    7473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceea26325917ceb21c0f696dda936d83.jpg"
    },
    7206: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36598cdddf8e4e48ea2088143218cb70.jpg"
    },
    2492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/873907cfb98d823251c060f38a0f94c1.jpg"
    },
    4535: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    8643: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    1124: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cbb36284927e01e17bc4cebcb15f7a3b.jpg"
    },
    5604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0dac3d506a6bbc45c1e69057116f090f.jpg"
    },
    3080: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70fa0fecfc148d254c5d4a3d0597014a.jpg"
    },
    435: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36c8b2a88cd5c85a910409753193e082.jpg"
    },
    9487: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    176: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    5674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/738ff75ecbbd0b10f520008cf0ed55e4.jpg"
    },
    6736: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9af6f453dad2c06a02167c55d70e2857.jpg"
    },
    516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56300c3ecd82257e0cc4daf401b68484.jpg"
    },
    9043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9dc75558f49b4294336d784804ebf33.jpg"
    },
    9920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    6144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    6859: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0fe57a53f63a5052a1b61ebc2e2aa0c.jpg"
    },
    8395: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/956f4cb0e9f776e992f8746d19e21d36.jpg"
    },
    5136: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c4c0606b30d7ceff30c20678f2f406d.jpg"
    },
    5906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0ea538130c115745d6c663e34235300e.jpg"
    },
    1060: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    5840: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    4721: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/329ba3f5dd165e867e3bffb4a1313a4b.jpg"
    },
    1033: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81ff30c53e70ab68713a91755a904448.jpg"
    },
    6524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/20986a8f9b5eff60740abbbcaf5763a1.jpg"
    },
    2407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46fd71f9a71bbe6801ee02f2d831896a.jpg"
    },
    5876: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    6716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    8336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab17ff9e69584963068de0d98e8fe15a.jpg"
    },
    7551: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/66bf9fc50889cf4565af70b2bd966736.jpg"
    },
    3050: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28009d14aa0c5105aa7f0428fde05dff.jpg"
    },
    504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/83821cbe9fbdd65c74fefff8b9e6b3a1.jpg"
    },
    1088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    4685: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    3215: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9f141dcc88ad8f93e988fc7be7a115d6.jpg"
    },
    1433: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/236ce971c6378875cf84505688107dc1.jpg"
    },
    9382: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e4afb9735018b6ec08bccbaa8ca2ab1.jpg"
    },
    3214: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5139857e057cd137a1fcc80142c8e008.jpg"
    },
    5616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    8581: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    9583: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9495626fd2e54c715b428ab5a084d67b.jpg"
    },
    2341: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/087f0a5089d563d4cd903fc31997adc3.jpg"
    },
    7326: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/953dcaaedefb500d80b5599fe891d649.jpg"
    },
    967: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8d3469e461dfaf53704716cf0c00122b.jpg"
    },
    5378: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    2064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    6161: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ce4e5f5c1e08e403a29056957315fc70.jpg"
    },
    4474: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/235ef607bbc5f169e6166094fbbfef20.jpg"
    },
    2550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/225bcea92ddd1c9528699452b2f327f0.jpg"
    },
    1009: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c3abe3172b838ef4238c451e4f32169.jpg"
    },
    583: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    8118: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    7958: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d7b04f2fd07d8df02ae13ff38f9bd014.jpg"
    },
    9521: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04bea6c58ca9aa41fa8ea4b68326a24a.jpg"
    },
    5835: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8bf8db232caaeeb346240890b5a16dd4.jpg"
    },
    6724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac7f847bf384a736ea24f7c3d8efcdfe.jpg"
    },
    1881: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    1980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    1629: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e7cf9b504b6bcd0e383be9788dbc65b.jpg"
    },
    2608: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8e9bfe51ea55e6427b0fff3576de1ee9.jpg"
    },
    5564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7dc74b193ca7f10045ddea5c7d49e7c8.jpg"
    },
    8001: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d680a00ae7fffa73f72b07db2a614f43.jpg"
    },
    1763: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    9924: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    3519: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/17ae05873860d112435453bd173d5bdb.jpg"
    },
    2610: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/737e68b4d76af1eacc848e7c6a963bb3.jpg"
    },
    7420: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c5c74e61cbc6654ab3bce73a44a1b807.jpg"
    },
    5760: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e44c0719cc6c8fa967ae4411b9002429.jpg"
    },
    987: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    5408: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    570: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd75fc7fb83019e8c526dc521934be46.jpg"
    },
    6044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29b7ca2cb558db181179f586337f027f.jpg"
    },
    6978: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8421dda7574225355d6890559c56d703.jpg"
    },
    7852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9054e4a51b6f5edaed278f85849e87a.jpg"
    },
    9552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    1393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    5244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f26193017bef03e33259bc6e8b6a301.jpg"
    },
    2209: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2105e961212bb2f553b78a8d98ca24f8.jpg"
    },
    2598: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4e803de2820b2174e7d6b81c150aa9f7.jpg"
    },
    7780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f8b819cc8bc440a40536052f10430e6.jpg"
    },
    1230: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    4503: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    7841: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/410f33763371922183d17770a4bbf045.jpg"
    },
    193: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a64e5693c9fd896ef4b44db42cdfb0a2.jpg"
    },
    9277: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eb96774621ed85029a0dac88015f5623.jpg"
    },
    752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0675692943c33185c823650fb2f7d59a.jpg"
    },
    36: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    4322: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    2630: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/704ae57732ba4aeb39b14c2a62eb5833.jpg"
    },
    6569: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/69cf4dfeaa6b7259a19d11eb34b8ad12.jpg"
    },
    6302: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d552466403ac9b72164dbbc7ea108d6d.jpg"
    },
    2096: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4ae3a45ad0be6ad0c5f52586d6b3206f.jpg"
    },
    2573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    6684: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    7766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f3cd7bceb936bb313fbaa15e89098a8.jpg"
    },
    599: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/25b661f5c750aeb7fa588fafba90f1cc.jpg"
    },
    1085: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d200b610eaff3bc9afb0e8a1a8bf742b.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bc0954f8adbca56f82b725bdc78299e8.jpg"
    },
    1347: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    397: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    3888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d2f7159e42c4941f90cc07ef61f4bcb.jpg"
    },
    6972: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2618797c7dc1e931867b1d8c4ae4be2.jpg"
    },
    7434: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b332167e59f22f23080b67f8112e82b1.jpg"
    },
    4906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d2f7159e42c4941f90cc07ef61f4bcb.jpg"
    },
    3051: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8c3fcd27f71840154cd5e70cf58dfe87.jpg"
    },
    7310: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2618797c7dc1e931867b1d8c4ae4be2.jpg"
    },
    3918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b332167e59f22f23080b67f8112e82b1.jpg"
    },
    7800: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    9255: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    703: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    1026: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    4493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/568a5ea8d40c934070ccb0d027415537.jpg"
    },
    1279: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc26b040f6c53b4212633bfc75c69b57.jpg"
    },
    8453: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8c92e45735dea4bf0f824a0fc9700949.jpg"
    },
    8262: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56b4a94be3120ac7de3432404984e52a.jpg"
    },
    2553: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    5643: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/119d114ce10c16621e545c2650b5912e.jpg"
    },
    9644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1db4f57aeface686dfd0d036908b341e.jpg"
    },
    385: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e8a66b52eaed1eb5e7063b0f92f65e6.jpg"
    },
    1858: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/567f38ce806bc29390ba84ea1bf4a1a1.jpg"
    },
    8208: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    6372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    5890: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42c9214da8b17b7f4cc9c05b2b511e3b.jpg"
    },
    3906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4f2ee06e20eea5691910888a58c25c.jpg"
    },
    4257: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/317683a193310bb03e30549f72ca70aa.jpg"
    },
    9232: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/53cd24ba391ab62571bcecfb9fcd9101.jpg"
    },
    1549: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    4049: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    9041: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a0281a740158d6596585ac6de511af6.jpg"
    },
    6620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b6d8af1607180dc21ed96dd950dc0cb.jpg"
    },
    7196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8b4ac9af863cb3e25ec1776ddbd95303.jpg"
    },
    9781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/00bb0938efa404a0446c0390dfe904cf.jpg"
    },
    8109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    8306: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    7231: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a8e7b43b4c2a827ba86e81c6689db03.jpg"
    },
    339: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9cc957c5eadfb452622edb7bc7ce5555.jpg"
    },
    2237: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/06d481de52d0714190ca4395425c457d.jpg"
    },
    9346: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e83d4dfaa73d3ed72b788705437a431.jpg"
    },
    9405: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    7066: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    9146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/92fbe71bb5f4b82b5c670de1ad251bea.jpg"
    },
    3958: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5fc7772067f8595434121b7270b0219b.jpg"
    },
    7859: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9503963789b50259c53761aba542ba72.jpg"
    },
    4879: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/664e7d6817fada6320e966b12e2ad12d.jpg"
    },
    9810: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    237: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    68: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f0266bf15e0340c0622f595b8b99cd80.jpg"
    },
    7774: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fdafa37eedafeb1bae5be3fcb8eb2e28.jpg"
    },
    825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28e4fd8cc9739277d38720566cf02775.jpg"
    },
    8765: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e1a329ec5db576dda1663bf4438ea155.jpg"
    },
    9777: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    872: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    9948: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a18049e11e58c7b0f18e4df61398aa62.jpg"
    },
    4705: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1640f11865a16ab8e9aa7c5bcd9ae17b.jpg"
    },
    8816: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d9ddb3bff2a20c6e89674a9767ba324.jpg"
    },
    7421: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b6f7dce0838752eac6bc6a9d82c37ba0.jpg"
    },
    7330: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    2471: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    1037: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0c1a2047eb6f0b36a6bf448c3f41da18.jpg"
    },
    4802: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d5c00db0a81daba487614068eb9314c.jpg"
    },
    6607: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/884600c480f1c290be4e203718263556.jpg"
    },
    7545: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5ef527fec88fb3e84bb737bf423e53e2.jpg"
    },
    2393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    3719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    5481: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4f1388056b8ee74c87bc86b2107648b.svg"
    }
  }
]);