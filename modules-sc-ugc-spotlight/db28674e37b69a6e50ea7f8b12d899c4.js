(self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [358], {
    9358: (e, a, s) => {
      "use strict";
      s.r(a);
      var c = s(6937),
        t = s(4219),
        r = s(4859),
        o = s(5269),
        m = s.n(o),
        i = s(1458),
        n = (s(7842), s(927)),
        d = s(8976),
        l = s(2324),
        g = s(6711),
        u = s(3657);
      const f = "rockstargames-modules-sc-ugc-spotlightcf89310edc4431306b703d1633b7ff72";
      var h = s(3705);
      const p = e => {
          let {
            username: a = "username",
            crewName: s = "crew",
            color: c = "#DF302C",
            rank: t = 1
          } = e;
          return (0, h.jsxs)("div", {
            className: "rockstargames-modules-sc-ugc-spotlighte5ae5a4787ce0beeba075ce0f74a1511",
            style: {
              "--crew-color": c,
              "--crew-rank": t
            },
            children: [(0, h.jsx)("div", {
              className: "rockstargames-modules-sc-ugc-spotlighteafc1c21eec2413e0ff33bb7bb5aae2c",
              children: a
            }), (0, h.jsx)("div", {
              className: "rockstargames-modules-sc-ugc-spotlightf1a2fc9ac1c66271672f953cb3f7f791",
              children: s
            })]
          })
        },
        k = e => {
          let {
            userInfo: a,
            crewInfo: s
          } = e;
          return (0, h.jsxs)("div", {
            children: [(0, h.jsx)("div", {
              className: "rockstargames-modules-sc-ugc-spotlighta23c5781366840256385ab404c402558",
              children: "Created By"
            }), (0, h.jsxs)("div", {
              className: "rockstargames-modules-sc-ugc-spotlightbbcb590c8273cdac6db3be81d72251c6",
              children: [(0, h.jsx)("img", {
                className: "rockstargames-modules-sc-ugc-spotlightc8804686fdc3f97a25f8e4f1ada94c7d",
                src: `https://a.rsg.sc/n/${a?.nickname?.toLowerCase()}/l`,
                alt: "Avatar"
              }), (0, h.jsx)(p, {
                username: a?.nickname,
                crewName: s?.tag,
                color: s?.color,
                rank: a?.crewRank
              })]
            })]
          })
        },
        b = e => {
          let {
            bookmarked: a = !1,
            contentId: c,
            title: t
          } = e;
          const [o, m] = (0, n.useState)(a), {
            login: i
          } = (0, g.useScConfig)(), d = (0, r.useRockstarToken)(), {
            _fetch: l
          } = (0, u.useScApi)("ugc/mission/bookmark", {
            host: "dev.scapi",
            autoFetch: !1
          }), p = async e => {
            try {
              const a = JSON.stringify({
                  contentId: c,
                  title: t,
                  bookmark: e
                }),
                {
                  status: s
                } = await l({
                  fetchOptions: {
                    body: a,
                    method: "POST"
                  }
                });
              s && m(e)
            } catch (e) {
              console.error(e)
            }
          };
          return (0, n.useEffect)((() => {
            m(a)
          }), [a]), null === d ? null : !1 === d ? (0, h.jsx)("a", {
            href: `${i}?returnUrl=${document.location.pathname}${document.location.search}`,
            children: (0, h.jsxs)("div", {
              className: f,
              children: [(0, h.jsx)("img", {
                alt: "bookmark",
                src: s(5258)
              }), "Sign In To Bookmark Job"]
            })
          }) : o ? (0, h.jsxs)("div", {
            className: f,
            onClick: () => p(!1),
            onKeyUp: () => p(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, h.jsx)("img", {
              alt: "bookmark",
              src: s(6533)
            }), "Remove Bookmark"]
          }) : (0, h.jsxs)("div", {
            className: f,
            onClick: () => p(!0),
            onKeyUp: () => p(!0),
            role: "button",
            tabIndex: 0,
            children: [(0, h.jsx)("img", {
              alt: "bookmark",
              src: s(5258)
            }), "Bookmark Job"]
          })
        },
        v = e => {
          let {
            missionType: a
          } = e;
          const c = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e) return "job";
            switch (e.replace(/P2P/gi, "")) {
              case "Mission":
              case "Heist":
              case "ContactMission":
              case "RandomMission":
              case "VersusMission":
              case "HeistPrep":
              case "AdversaryMode":
                return "mission";
              case "LastTeamStanding":
                return "last_team_standing";
              case "Capture":
                return "capture";
              case "AirRace":
                return "air_race";
              case "Race":
              case "LandRace":
              case "PursuitRace":
              case "StreetRace":
              case "HaoSpecialWorksRace":
                return "land_race";
              case "WaterRace":
                return "water_race";
              case "StuntRace":
              case "FootRace":
              case "TransformRace":
              case "Target":
              case "SpecialRace":
                return "stunt_race";
              case "Parachuting":
                return "parachuting";
              case "BikeRace":
                return "bike_race";
              case "OpenWheelRace":
                return "openwheel_race";
              case "Deathmatch":
                return "deathmatch";
              case "TeamDeathmatch":
                return "team_deathmatch";
              case "VehicleDeathmatch":
              case "ArenaDeathmatch":
              case "ArenaWar":
                return "vehicle_deathmatch";
              case "Survival":
                return "survival";
              case "KingOfTheHill":
                return "kingofthehill";
              case "TeamKingOfTheHill":
                return "team_kingofthehill";
              default:
                return "job"
            }
          }(a);
          return (0, h.jsx)("div", {
            className: "rockstargames-modules-sc-ugc-spotlightc3c7ca30587cc66e5bcb337769a80f45",
            children: (0, h.jsx)("img", {
              alt: c,
              src: s(2653)(`./${c}.svg`)
            })
          })
        },
        _ = (0, d.withSimpleErrorBoundary)((e => {
          let {
            contentId: a = "",
            title: s = "gtav",
            scApiEnv: c = "dev",
            className: t = "",
            style: r = {}
          } = e;
          const [o, m] = (0, n.useState)(null), [i, d] = (0, n.useState)(null), [g, f] = (0, n.useState)(null), [p, _] = (0, n.useState)(null), [x, j] = (0, n.useState)(null), [w, N] = (0, n.useState)({}), [S, y] = (0, n.useState)({}), {
            data: z,
            error: R
          } = (0, u.useScApi)("ugc/mission/details", {
            env: c,
            query: {
              contentId: a,
              title: s
            }
          });
          return (0, n.useEffect)((() => {
            if (!z) return;
            const {
              content: e,
              users: a,
              crews: s
            } = z;
            if (!e) return;
            const {
              userId: c,
              type: t,
              imgSrc: r,
              platform: o,
              name: i,
              bookmarked: n
            } = e, l = a[c], g = s[w?.crewId] ?? null;
            m(t), d(r), f(o), _(i), j(n), N(l), y(g)
          }), [z]), !z || R ? null : (0, h.jsxs)("div", {
            className: (0, l.classList)("rockstargames-modules-sc-ugc-spotlightb0c31ee888fae972ef7629b0d5beb0a0", t),
            style: r,
            children: [(0, h.jsxs)("div", {
              className: "rockstargames-modules-sc-ugc-spotlightc78d2b7e10bf30f99b064a57ea152825",
              children: [(0, h.jsx)("div", {
                className: "rockstargames-modules-sc-ugc-spotlightf1531178e305021254612d6427be10bf",
                children: (0, h.jsx)("img", {
                  alt: "Job",
                  className: "rockstargames-modules-sc-ugc-spotlightd7f7c07e6c8ef9a9045fa1ec6a8d6357",
                  src: i
                })
              }), (0, h.jsx)("div", {
                className: "rockstargames-modules-sc-ugc-spotlightdda65441b0354fe9ef041759cfca5080",
                children: g
              }), (0, h.jsx)(v, {
                missionType: o
              })]
            }), (0, h.jsxs)("div", {
              className: "rockstargames-modules-sc-ugc-spotlightf7ef99675dcebe84ce3ce185078c52e0",
              children: [(0, h.jsx)("h3", {
                className: "rockstargames-modules-sc-ugc-spotlightd8c2a7faa086f80b86922614a931fad0",
                children: p
              }), (0, h.jsx)(k, {
                userInfo: w,
                crewInfo: S
              }), (0, h.jsx)(b, {
                bookmarked: x,
                contentId: a,
                title: s
              })]
            })]
          })
        })),
        x = (0, r.withRockstarGraph)((e => {
          let {
            children: a
          } = e;
          return (0, h.jsx)(t.VK, {
            basename: "/",
            children: (0, h.jsx)(i.RockstarUserProvider, {
              children: a
            })
          })
        }), {
          env: "dev",
          typePolicies: {
            ...m()
          }
        });
      c.render((0, h.jsx)(x, {
        children: (0, h.jsx)(_, {
          contentId: "foo"
        })
      }), document.getElementById("main"))
    },
    2653: (e, a, s) => {
      var c = {
        "./air_race.svg": 3815,
        "./bike_race.svg": 4439,
        "./capture.svg": 7897,
        "./deathmatch.svg": 3231,
        "./job.svg": 1279,
        "./kingofthehill.svg": 2517,
        "./land_race.svg": 1044,
        "./last_team_standing.svg": 784,
        "./mission.svg": 3181,
        "./openwheel_race.svg": 493,
        "./parachuting.svg": 9815,
        "./stunt_race.svg": 3893,
        "./survival.svg": 663,
        "./team_deathmatch.svg": 2400,
        "./team_kingofthehill.svg": 387,
        "./vehicle_deathmatch.svg": 4825,
        "./water_race.svg": 8486
      };

      function t(e) {
        var a = r(e);
        return s(a)
      }

      function r(e) {
        if (!s.o(c, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return c[e]
      }
      t.keys = function() {
        return Object.keys(c)
      }, t.resolve = r, e.exports = t, t.id = 2653
    },
    5258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/486c5c9bf62ac8684feba24b5a102342.svg"
    },
    3815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e96dddb52200d11eec41a8effa9687aa.svg"
    },
    4439: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f09c3d44eb3c64a5d4c7f3286fcbd8bb.svg"
    },
    7897: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b3158cfc0174728c602ae1270f1e273.svg"
    },
    3231: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4694ac9e0842f3da463754fa25737c.svg"
    },
    1279: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d5fa6aaf00e2bbd9bd066a612c7c0775.svg"
    },
    2517: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56142b8019f6e8acfe8f1c28cf68c417.svg"
    },
    1044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d19ac309c943bde796afcad1119c4f24.svg"
    },
    784: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8031a61bf3e4fb110c35371cc8c222a.svg"
    },
    3181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d216574ebdd3ba1343b561201e27851c.svg"
    },
    493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b955ed9c298d8771c2e80a1caeb47b78.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4992b073af04718f200f095e8e18a5e9.svg"
    },
    3893: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c7c2834827e3d50cda1b6011747a759c.svg"
    },
    663: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6877675ae191a5f67cd4afe22f4ff41c.svg"
    },
    2400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccdfb602c2399f3c2885f68fbef2888f.svg"
    },
    387: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a12d7a81e977de95a7911bdb205ec594.svg"
    },
    4825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48530ab42d7cd43bdc8a21c3caa27133.svg"
    },
    8486: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f04363ba4196a3be7ce05e3b924ba5d4.svg"
    },
    6533: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edc95f15078a2e728b31581a7d599648.svg"
    }
  }
]);