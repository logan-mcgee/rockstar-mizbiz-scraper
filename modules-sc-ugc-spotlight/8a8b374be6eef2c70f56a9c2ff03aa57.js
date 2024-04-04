! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d5439cff-663e-412a-a531-f9b98276c592", e._sentryDebugIdIdentifier = "sentry-dbid-d5439cff-663e-412a-a531-f9b98276c592")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-sc-ugc-spotlight",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [280], {
    92280: (e, a, s) => {
      "use strict";
      s.r(a);
      var t = s(2296),
        c = s.n(t),
        r = s(71960),
        o = s(33052),
        m = s(27864),
        d = s.n(m),
        n = s(42708),
        i = (s(31389), s(42664), s(34904), s(46368), s(58256), s(64932), s(87440), s(53128), s(18932), s(19520), s(24264), s(69224), s(58432), s(13144), s(77571), s(84084), s(86096), s(54012), s(38592), s(51664)),
        l = s(9860),
        g = s(95356),
        u = s(42836),
        f = s(3061);
      const h = "rockstargames-modules-sc-ugc-spotlightcf89310edc4431306b703d1633b7ff72";
      var p = s(95240);
      const b = e => {
          let {
            username: a = "username",
            crewName: s = "crew",
            color: t = "#DF302C",
            rank: c = 1
          } = e;
          return (0, p.jsxs)("div", {
            className: "rockstargames-modules-sc-ugc-spotlighte5ae5a4787ce0beeba075ce0f74a1511",
            style: {
              "--crew-color": t,
              "--crew-rank": c
            },
            children: [(0, p.jsx)("div", {
              className: "rockstargames-modules-sc-ugc-spotlighteafc1c21eec2413e0ff33bb7bb5aae2c",
              children: a
            }), (0, p.jsx)("div", {
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
          return (0, p.jsxs)("div", {
            children: [(0, p.jsx)("div", {
              className: "rockstargames-modules-sc-ugc-spotlighta23c5781366840256385ab404c402558",
              children: "Created By"
            }), (0, p.jsxs)("div", {
              className: "rockstargames-modules-sc-ugc-spotlightbbcb590c8273cdac6db3be81d72251c6",
              children: [(0, p.jsx)("img", {
                className: "rockstargames-modules-sc-ugc-spotlightc8804686fdc3f97a25f8e4f1ada94c7d",
                src: `https://a.rsg.sc/n/${a?.nickname?.toLowerCase()}/l`,
                alt: "Avatar"
              }), (0, p.jsx)(b, {
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
          const [r, m] = (0, i.useState)(a), {
            login: d
          } = (0, u.useScConfig)(), n = (0, o.useRockstarToken)(), {
            _fetch: l
          } = (0, f.useScApi)("ugc/mission/bookmark", {
            host: "dev.scapi",
            autoFetch: !1
          }), g = async e => {
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
              s && m(e)
            } catch (e) {
              console.error(e)
            }
          };
          return (0, i.useEffect)((() => {
            m(a)
          }), [a]), null === n ? null : !1 === n ? (0, p.jsx)("a", {
            href: `${d}?returnUrl=${document.location.pathname}${document.location.search}`,
            children: (0, p.jsxs)("div", {
              className: h,
              children: [(0, p.jsx)("img", {
                alt: "bookmark",
                src: s(67336)
              }), "Sign In To Bookmark Job"]
            })
          }) : r ? (0, p.jsxs)("div", {
            className: h,
            onClick: () => g(!1),
            onKeyUp: () => g(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, p.jsx)("img", {
              alt: "bookmark",
              src: s(58812)
            }), "Remove Bookmark"]
          }) : (0, p.jsxs)("div", {
            className: h,
            onClick: () => g(!0),
            onKeyUp: () => g(!0),
            role: "button",
            tabIndex: 0,
            children: [(0, p.jsx)("img", {
              alt: "bookmark",
              src: s(67336)
            }), "Bookmark Job"]
          })
        },
        v = e => {
          let {
            missionType: a
          } = e;
          const t = function() {
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
          return (0, p.jsx)("div", {
            className: "rockstargames-modules-sc-ugc-spotlightc3c7ca30587cc66e5bcb337769a80f45",
            children: (0, p.jsx)("img", {
              alt: t,
              src: s(80568)(`./${t}.svg`)
            })
          })
        },
        x = (0, l.withSimpleErrorBoundary)((e => {
          let {
            contentId: a = "",
            title: s = "gtav",
            scApiEnv: t = "dev",
            className: c = "",
            style: r = {}
          } = e;
          const [o, m] = (0, i.useState)(null), [d, n] = (0, i.useState)(null), [l, u] = (0, i.useState)(null), [h, b] = (0, i.useState)(null), [x, y] = (0, i.useState)(null), [w, j] = (0, i.useState)({}), [N, S] = (0, i.useState)({}), {
            data: R,
            error: I
          } = (0, f.useScApi)("ugc/mission/details", {
            env: t,
            query: {
              contentId: a,
              title: s
            }
          });
          return (0, i.useEffect)((() => {
            if (!R) return;
            const {
              content: e,
              users: a,
              crews: s
            } = R;
            if (!e) return;
            const {
              userId: t,
              type: c,
              imgSrc: r,
              platform: o,
              name: d,
              bookmarked: i
            } = e, l = a[t], g = s[w?.crewId] ?? null;
            m(c), n(r), u(o), b(d), y(i), j(l), S(g)
          }), [R]), !R || I ? null : (0, p.jsxs)("div", {
            className: (0, g.classList)("rockstargames-modules-sc-ugc-spotlightb0c31ee888fae972ef7629b0d5beb0a0", c),
            style: r,
            children: [(0, p.jsxs)("div", {
              className: "rockstargames-modules-sc-ugc-spotlightc78d2b7e10bf30f99b064a57ea152825",
              children: [(0, p.jsx)("div", {
                className: "rockstargames-modules-sc-ugc-spotlightf1531178e305021254612d6427be10bf",
                children: (0, p.jsx)("img", {
                  alt: "Job",
                  className: "rockstargames-modules-sc-ugc-spotlightd7f7c07e6c8ef9a9045fa1ec6a8d6357",
                  src: d
                })
              }), (0, p.jsx)("div", {
                className: "rockstargames-modules-sc-ugc-spotlightdda65441b0354fe9ef041759cfca5080",
                children: l
              }), (0, p.jsx)(v, {
                missionType: o
              })]
            }), (0, p.jsxs)("div", {
              className: "rockstargames-modules-sc-ugc-spotlightf7ef99675dcebe84ce3ce185078c52e0",
              children: [(0, p.jsx)("h3", {
                className: "rockstargames-modules-sc-ugc-spotlightd8c2a7faa086f80b86922614a931fad0",
                children: h
              }), (0, p.jsx)(k, {
                userInfo: w,
                crewInfo: N
              }), (0, p.jsx)(_, {
                bookmarked: x,
                contentId: a,
                title: s
              })]
            })]
          })
        })),
        y = (0, o.withRockstarGraph)((e => {
          let {
            children: a
          } = e;
          return (0, p.jsx)(r.BrowserRouter, {
            basename: "/",
            children: (0, p.jsx)(n.RockstarUserProvider, {
              children: a
            })
          })
        }), {
          env: "dev",
          typePolicies: {
            ...d()
          }
        });
      c().render((0, p.jsx)(y, {
        children: (0, p.jsx)(x, {
          contentId: "foo"
        })
      }), document.getElementById("main"))
    },
    80568: (e, a, s) => {
      var t = {
        "./air_race.svg": 83088,
        "./bike_race.svg": 38428,
        "./capture.svg": 22328,
        "./deathmatch.svg": 45556,
        "./job.svg": 33524,
        "./kingofthehill.svg": 14696,
        "./land_race.svg": 74920,
        "./last_team_standing.svg": 65236,
        "./mission.svg": 46508,
        "./openwheel_race.svg": 87312,
        "./parachuting.svg": 49160,
        "./stunt_race.svg": 64504,
        "./survival.svg": 22456,
        "./team_deathmatch.svg": 49495,
        "./team_kingofthehill.svg": 69400,
        "./vehicle_deathmatch.svg": 30400,
        "./water_race.svg": 448
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
      }, c.resolve = r, e.exports = c, c.id = 80568
    },
    67336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/486c5c9bf62ac8684feba24b5a102342.svg"
    },
    83088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e96dddb52200d11eec41a8effa9687aa.svg"
    },
    38428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f09c3d44eb3c64a5d4c7f3286fcbd8bb.svg"
    },
    22328: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b3158cfc0174728c602ae1270f1e273.svg"
    },
    45556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4694ac9e0842f3da463754fa25737c.svg"
    },
    33524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d5fa6aaf00e2bbd9bd066a612c7c0775.svg"
    },
    14696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56142b8019f6e8acfe8f1c28cf68c417.svg"
    },
    74920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d19ac309c943bde796afcad1119c4f24.svg"
    },
    65236: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8031a61bf3e4fb110c35371cc8c222a.svg"
    },
    46508: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d216574ebdd3ba1343b561201e27851c.svg"
    },
    87312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b955ed9c298d8771c2e80a1caeb47b78.svg"
    },
    49160: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4992b073af04718f200f095e8e18a5e9.svg"
    },
    64504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c7c2834827e3d50cda1b6011747a759c.svg"
    },
    22456: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6877675ae191a5f67cd4afe22f4ff41c.svg"
    },
    49495: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccdfb602c2399f3c2885f68fbef2888f.svg"
    },
    69400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a12d7a81e977de95a7911bdb205ec594.svg"
    },
    30400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48530ab42d7cd43bdc8a21c3caa27133.svg"
    },
    448: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f04363ba4196a3be7ce05e3b924ba5d4.svg"
    },
    58812: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edc95f15078a2e728b31581a7d599648.svg"
    }
  }
]);
//# sourceMappingURL=8a8b374be6eef2c70f56a9c2ff03aa57.js.map