(self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [982], {
    8982: (e, s, a) => {
      "use strict";
      a.r(s);
      var t = a(6622),
        c = a(2490),
        r = a(4859),
        i = a(5269),
        n = a.n(i),
        o = a(1458),
        l = (a(7842), a(822)),
        d = a(8976),
        u = a(2324),
        m = a(6711),
        g = a(3657);
      const v = "d0b387d2e650443aadd2";
      var h = a(3563);
      const f = e => {
          let {
            username: s = "username",
            crewName: a = "crew",
            color: t = "#DF302C",
            rank: c = 1
          } = e;
          return (0, h.jsxs)("div", {
            className: "c38c141c91db89924b1e",
            style: {
              "--crew-color": t,
              "--crew-rank": c
            },
            children: [(0, h.jsx)("div", {
              className: "ac6ec278c0009ae8ebce",
              children: s
            }), (0, h.jsx)("div", {
              className: "abef1e8fb9e5f26ffda9",
              children: a
            })]
          })
        },
        p = e => {
          var s;
          let {
            userInfo: a,
            crewInfo: t
          } = e;
          return (0, h.jsxs)("div", {
            children: [(0, h.jsx)("div", {
              className: "fc7f916f17a8f20de16b",
              children: "Created By"
            }), (0, h.jsxs)("div", {
              className: "b26e7342eed0484a1e21",
              children: [(0, h.jsx)("img", {
                className: "f3e40cb62e1821890e19",
                src: `https://a.rsg.sc/n/${null==a||null===(s=a.nickname)||void 0===s?void 0:s.toLowerCase()}/l`
              }), (0, h.jsx)(f, {
                username: null == a ? void 0 : a.nickname,
                crewName: null == t ? void 0 : t.tag,
                color: null == t ? void 0 : t.color,
                rank: null == a ? void 0 : a.crewRank
              })]
            })]
          })
        },
        b = e => {
          let {
            bookmarked: s = !1,
            contentId: t,
            title: c
          } = e;
          const [i, n] = (0, l.useState)(s), {
            login: o
          } = (0, m.useScConfig)(), d = (0, r.useUserBearerToken)(), {
            _fetch: u
          } = (0, g.useScApi)("ugc/mission/bookmark", {
            host: "dev.scapi",
            autoFetch: !1
          }), f = async e => {
            try {
              const s = JSON.stringify({
                  contentId: t,
                  title: c,
                  bookmark: e
                }),
                {
                  status: a
                } = await u({
                  fetchOptions: {
                    body: s,
                    method: "POST"
                  }
                });
              a && n(e)
            } catch (e) {
              console.error(e)
            }
          };
          return (0, l.useEffect)((() => {
            n(s)
          }), [s]), null === d ? null : !1 === d ? (0, h.jsx)("a", {
            href: `${o}?returnUrl=${document.location.pathname}${document.location.search}`,
            children: (0, h.jsxs)("div", {
              className: v,
              children: [(0, h.jsx)("img", {
                src: a(5258)
              }), "Sign In To Bookmark Job"]
            })
          }) : i ? (0, h.jsxs)("div", {
            className: v,
            onClick: () => f(!1),
            children: [(0, h.jsx)("img", {
              src: a(6533)
            }), "Remove Bookmark"]
          }) : (0, h.jsxs)("div", {
            className: v,
            onClick: () => f(!0),
            children: [(0, h.jsx)("img", {
              src: a(5258)
            }), "Bookmark Job"]
          })
        },
        x = e => {
          let {
            missionType: s
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
          }(s);
          return (0, h.jsx)("div", {
            className: "d9a3187c6e4bf2b26f9c",
            children: (0, h.jsx)("img", {
              src: a(2653)(`./${t}.svg`)
            })
          })
        },
        k = (0, d.withSimpleErrorBoundary)((e => {
          let {
            contentId: s = "",
            title: a = "gtav",
            scApiEnv: t = "dev",
            className: c = "",
            style: r = {}
          } = e;
          const [i, n] = (0, l.useState)(null), [o, d] = (0, l.useState)(null), [m, v] = (0, l.useState)(null), [f, k] = (0, l.useState)(null), [j, _] = (0, l.useState)(null), [w, N] = (0, l.useState)(null), [S, y] = (0, l.useState)({}), [R, I] = (0, l.useState)({}), {
            data: T,
            error: C
          } = (0, g.useScApi)("ugc/mission/details", {
            env: t,
            query: {
              contentId: s,
              title: a
            }
          });
          return (0, l.useEffect)((() => {
            if (!T) return;
            const {
              content: e,
              users: s,
              crews: a
            } = T;
            if (!e) return;
            const {
              userId: t,
              type: c,
              imgSrc: r,
              platform: i,
              name: o,
              bookmarked: l
            } = e, u = s[t], m = a[null == u ? void 0 : u.crewId] ?? null;
            n(t), d(c), v(r), k(i), _(o), N(l), y(u), I(m)
          }), [T]), !T || C ? null : (0, h.jsxs)("div", {
            className: (0, u.classList)("f831abba98943ab530a4", c),
            style: r,
            children: [(0, h.jsxs)("div", {
              className: "b74026a5b3890de45ac2",
              children: [(0, h.jsx)("div", {
                className: "d05fbb21dca24af998e4",
                children: (0, h.jsx)("img", {
                  className: "bac9c68bfb3726e1f59d",
                  src: m
                })
              }), (0, h.jsx)("div", {
                className: "c40c15f961a8396c8d9f",
                children: f
              }), (0, h.jsx)(x, {
                missionType: o
              })]
            }), (0, h.jsxs)("div", {
              className: "f619adf04d065f025cfd",
              children: [(0, h.jsx)("h3", {
                className: "beeaec1b8a4df1fd3c3c",
                children: j
              }), (0, h.jsx)(p, {
                userInfo: S,
                crewInfo: R
              }), (0, h.jsx)(b, {
                bookmarked: w,
                contentId: s,
                title: a
              })]
            })]
          })
        })),
        j = (0, r.withRockstarGraph)((e => {
          let {
            children: s
          } = e;
          return (0, h.jsx)(c.VK, {
            basename: "/",
            children: (0, h.jsx)(o.RockstarUserProvider, {
              children: s
            })
          })
        }), {
          env: "dev",
          typePolicies: {
            ...n()
          }
        });
      t.render((0, h.jsx)(j, {
        children: (0, h.jsx)(k, {
          contentId: "foo"
        })
      }), document.getElementById("main"))
    },
    2653: (e, s, a) => {
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
        var s = r(e);
        return a(s)
      }

      function r(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      c.keys = function() {
        return Object.keys(t)
      }, c.resolve = r, e.exports = c, c.id = 2653
    },
    5258: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/bf01567657f764a6dc2d.svg"
    },
    3815: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/40e0ec200461a20f0411.svg"
    },
    4439: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/7f37beaa768d6cbcf62e.svg"
    },
    7897: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/6e7dd5938a7f788a3ec2.svg"
    },
    3231: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/7d867a5c6d098def335a.svg"
    },
    1279: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/27515201f8b1b2595afc.svg"
    },
    2517: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/d752c4c924f60a8ef55b.svg"
    },
    1044: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/92950f69283b46a2cec3.svg"
    },
    784: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/70aad2190eb9fbf23da8.svg"
    },
    3181: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/bba332fd47e8dd2641c7.svg"
    },
    493: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/b1f63ebb0973d3d80232.svg"
    },
    9815: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/e5301430e68f7b12ce7d.svg"
    },
    3893: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/780859e7499a551d87d2.svg"
    },
    663: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/50363570d1dbb0ac0094.svg"
    },
    2400: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/58b3b6649e814864d94b.svg"
    },
    387: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/7ccd23232cbc37c03e34.svg"
    },
    4825: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/3d263d3e6c8ef80d80b5.svg"
    },
    8486: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/e7a4a5a26dd2056d86aa.svg"
    },
    6533: (e, s, a) => {
      "use strict";
      e.exports = a.p + "img/996c2b2ed1ac3daf3e74.svg"
    }
  }
]);