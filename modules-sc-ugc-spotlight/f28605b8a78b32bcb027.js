(self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [346], {
    3346: (e, a, s) => {
      "use strict";
      s.r(a);
      var t = s(7469),
        c = s(8893),
        r = s(4859),
        m = s(5269),
        i = s.n(m),
        o = s(1458),
        n = (s(7842), s(822)),
        d = s(8976),
        l = s(2324),
        u = s(6711),
        g = s(3657);
      const h = "d0b387d2e650443aadd2";
      var f = s(3322);
      const k = e => {
          let {
            username: a = "username",
            crewName: s = "crew",
            color: t = "#DF302C",
            rank: c = 1
          } = e;
          return (0, f.jsxs)("div", {
            className: "c38c141c91db89924b1e",
            style: {
              "--crew-color": t,
              "--crew-rank": c
            },
            children: [(0, f.jsx)("div", {
              className: "ac6ec278c0009ae8ebce",
              children: a
            }), (0, f.jsx)("div", {
              className: "abef1e8fb9e5f26ffda9",
              children: s
            })]
          })
        },
        v = e => {
          let {
            userInfo: a,
            crewInfo: s
          } = e;
          return (0, f.jsxs)("div", {
            children: [(0, f.jsx)("div", {
              className: "fc7f916f17a8f20de16b",
              children: "Created By"
            }), (0, f.jsxs)("div", {
              className: "b26e7342eed0484a1e21",
              children: [(0, f.jsx)("img", {
                className: "f3e40cb62e1821890e19",
                src: `https://a.rsg.sc/n/${a?.nickname?.toLowerCase()}/l`
              }), (0, f.jsx)(k, {
                username: a?.nickname,
                crewName: s?.tag,
                color: s?.color,
                rank: a?.crewRank
              })]
            })]
          })
        },
        _ = e => {
          let {
            bookmarked: a = !1,
            contentId: t,
            title: c
          } = e;
          const [m, i] = (0, n.useState)(a), {
            login: o
          } = (0, u.useScConfig)(), d = (0, r.useUserBearerToken)(), {
            _fetch: l
          } = (0, g.useScApi)("ugc/mission/bookmark", {
            host: "dev.scapi",
            autoFetch: !1
          }), k = async e => {
            try {
              const a = JSON.stringify({
                  contentId: t,
                  title: c,
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
              s && i(e)
            } catch (e) {
              console.error(e)
            }
          };
          return (0, n.useEffect)((() => {
            i(a)
          }), [a]), null === d ? null : !1 === d ? (0, f.jsx)("a", {
            href: `${o}?returnUrl=${document.location.pathname}${document.location.search}`,
            children: (0, f.jsxs)("div", {
              className: h,
              children: [(0, f.jsx)("img", {
                src: s(5258)
              }), "Sign In To Bookmark Job"]
            })
          }) : m ? (0, f.jsxs)("div", {
            className: h,
            onClick: () => k(!1),
            children: [(0, f.jsx)("img", {
              src: s(6533)
            }), "Remove Bookmark"]
          }) : (0, f.jsxs)("div", {
            className: h,
            onClick: () => k(!0),
            children: [(0, f.jsx)("img", {
              src: s(5258)
            }), "Bookmark Job"]
          })
        },
        p = e => {
          let {
            missionType: a
          } = e;
          const t = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e) return "job";
            switch (e = e.replace(/P2P/gi, ""), e) {
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
          return (0, f.jsx)("div", {
            className: "d9a3187c6e4bf2b26f9c",
            children: (0, f.jsx)("img", {
              src: s(2653)(`./${t}.svg`)
            })
          })
        },
        b = (0, d.withSimpleErrorBoundary)((e => {
          let {
            contentId: a = "",
            title: s = "gtav",
            scApiEnv: t = "dev",
            className: c = "",
            style: r = {}
          } = e;
          const [m, i] = (0, n.useState)(null), [o, d] = (0, n.useState)(null), [u, h] = (0, n.useState)(null), [k, b] = (0, n.useState)(null), [x, j] = (0, n.useState)(null), [w, N] = (0, n.useState)(null), [S, z] = (0, n.useState)({}), [y, R] = (0, n.useState)({}), {
            data: I,
            error: T
          } = (0, g.useScApi)("ugc/mission/details", {
            env: t,
            query: {
              contentId: a,
              title: s
            }
          });
          return (0, n.useEffect)((() => {
            if (!I) return;
            const {
              content: e,
              users: a,
              crews: s
            } = I;
            if (!e) return;
            const {
              userId: t,
              type: c,
              imgSrc: r,
              platform: m,
              name: o,
              bookmarked: n
            } = e, l = a[t], u = s[l?.crewId] ?? null;
            i(t), d(c), h(r), b(m), j(o), N(n), z(l), R(u)
          }), [I]), !I || T ? null : (0, f.jsxs)("div", {
            className: (0, l.classList)("f831abba98943ab530a4", c),
            style: r,
            children: [(0, f.jsxs)("div", {
              className: "b74026a5b3890de45ac2",
              children: [(0, f.jsx)("div", {
                className: "d05fbb21dca24af998e4",
                children: (0, f.jsx)("img", {
                  className: "bac9c68bfb3726e1f59d",
                  src: u
                })
              }), (0, f.jsx)("div", {
                className: "c40c15f961a8396c8d9f",
                children: k
              }), (0, f.jsx)(p, {
                missionType: o
              })]
            }), (0, f.jsxs)("div", {
              className: "f619adf04d065f025cfd",
              children: [(0, f.jsx)("h3", {
                className: "beeaec1b8a4df1fd3c3c",
                children: x
              }), (0, f.jsx)(v, {
                userInfo: S,
                crewInfo: y
              }), (0, f.jsx)(_, {
                bookmarked: w,
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
          return (0, f.jsx)(c.VK, {
            basename: "/",
            children: (0, f.jsx)(o.RockstarUserProvider, {
              children: a
            })
          })
        }), {
          env: "dev",
          typePolicies: {
            ...i()
          }
        });
      t.render((0, f.jsx)(x, {
        children: (0, f.jsx)(b, {
          contentId: "foo"
        })
      }), document.getElementById("main"))
    },
    2653: (e, a, s) => {
      var t = {
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

      function c(e) {
        var a = r(e);
        return s(a)
      }

      function r(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      c.keys = function() {
        return Object.keys(t)
      }, c.resolve = r, e.exports = c, c.id = 2653
    },
    5258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/bf01567657f764a6dc2d.svg"
    },
    3815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/40e0ec200461a20f0411.svg"
    },
    4439: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/7f37beaa768d6cbcf62e.svg"
    },
    7897: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/6e7dd5938a7f788a3ec2.svg"
    },
    3231: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/7d867a5c6d098def335a.svg"
    },
    1279: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/27515201f8b1b2595afc.svg"
    },
    2517: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/d752c4c924f60a8ef55b.svg"
    },
    1044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/92950f69283b46a2cec3.svg"
    },
    784: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/70aad2190eb9fbf23da8.svg"
    },
    3181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/bba332fd47e8dd2641c7.svg"
    },
    493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b1f63ebb0973d3d80232.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e5301430e68f7b12ce7d.svg"
    },
    3893: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/780859e7499a551d87d2.svg"
    },
    663: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/50363570d1dbb0ac0094.svg"
    },
    2400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/58b3b6649e814864d94b.svg"
    },
    387: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/7ccd23232cbc37c03e34.svg"
    },
    4825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3d263d3e6c8ef80d80b5.svg"
    },
    8486: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e7a4a5a26dd2056d86aa.svg"
    },
    6533: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/996c2b2ed1ac3daf3e74.svg"
    }
  }
]);