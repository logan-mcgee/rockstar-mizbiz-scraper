try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "017fa2f8-42f0-453d-a6b7-26288aa90cbc", e._sentryDebugIdIdentifier = "sentry-dbid-017fa2f8-42f0-453d-a6b7-26288aa90cbc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [1946, 2169], {
    32169(e, t, r) {
      r.r(t), r.d(t, {
        GtmProvider: () => f,
        RockstarUserProvider: () => B,
        fetchUnreadNotificationCount: () => T,
        useGtmTrack: () => d,
        useRockstarUser: () => F,
        useRockstarUserState: () => I
      });
      var n = r(42295),
        a = r(71127),
        o = r(13331),
        c = r(57301);
      const s = e => "pcalt" === e ? "pc" : e.toString(),
        i = {
          pcalt: "PC",
          pc: "PC",
          ps: "PS",
          ps3: "PS3",
          ps4: "PS4",
          ps5: "PS5",
          xbox: "XBOX",
          xbox360: "XBOX 360",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S",
          switch: "NINTENDO SWITCH",
          nintendoswitch: "NINTENDO SWITCH",
          applestore: "APPLE STORE",
          app_store: "APPLE STORE",
          googleplay: "GOOGLE PLAY",
          ggle_play: "GOOGLE PLAY"
        },
        u = e => e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, "string" == typeof t ? t.toLowerCase() : t])) : e,
        l = (0, o.setContextItem)({
          context: (0, a.createContext)(void 0),
          key: "gtmContext22"
        }),
        f = ({
          checkUser: e,
          children: t
        }) => {
          const r = ((e = !0) => {
              const [t, r] = (0, a.useState)([]), [n, l] = (0, a.useState)(null), {
                data: f,
                loggedIn: p
              } = F(), d = (0, c.bn)(), y = (e, t) => {
                const n = e.length;
                e.forEach(e => {
                  const r = t ?? {};
                  (0, o.track)({
                    ...e,
                    ...r
                  })
                }), r(e => e.slice(n))
              };
              return (0, a.useEffect)(() => {
                if (f && null !== p) {
                  const e = ((e, t) => {
                    const r = [],
                      n = [],
                      a = [...new Set(e.gtaPlusPlatforms.map(e => s(e)))],
                      o = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const a = s(t.platform);
                        if ("gtao" === e) {
                          n.includes(a) || n.push(a);
                          const r = `${e}_${t.platform}`;
                          o.includes(r) || o.push(r)
                        }
                        r.includes(a) || r.push(a)
                      })
                    }), Object.entries(e?.gamesPlayed ?? []).forEach(([e, t]) => {
                      o.push(`${e}_${t}`), r.includes(t) || r.push(t)
                    }), {
                      member_id: e.id ?? void 0,
                      login_state: t ?? !1,
                      platforms_played: r.length ? r.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: o.length ? o.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: n.length ? n.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: a.length ? a.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_active: a.length > 0,
                      use_enhanced_browser_features: d,
                      section_layout: t ? "signed in" : "signed out"
                    }
                  })(f, p);
                  t.length && e && y([...t], e), l(e)
                } else e || t.length && y([...t])
              }, [f, p, t, e]), {
                track: e => (Boolean(f && n), (0, o.track)({
                  ...u(e),
                  ...n
                }))
              }
            })(e),
            f = (0, a.useMemo)(() => r, [r, e]);
          return (0, n.jsx)(l.Provider, {
            value: f,
            children: t
          })
        },
        p = {
          track: () => null
        },
        d = () => (0, a.useContext)(l) ?? p,
        y = (0, o.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, o.makeVar)(null)
        }),
        h = e => y(e),
        _ = (0, o.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, o.makeVar)(!1)
        }),
        m = e => _(e),
        v = (0, o.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, o.makeVar)((0, o.webSettingsReactive)()?.currentCharId)
        }),
        g = e => v(e),
        b = (0, o.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, o.makeVar)(null)
        }),
        w = e => b(e),
        k = (0, o.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, o.makeVar)(null)
        }),
        S = (0, o.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, o.makeVar)(!1)
        }),
        P = e => S(e),
        O = (0, o.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, o.makeVar)(!1)
        }),
        E = e => O(e),
        x = (0, o.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, o.makeVar)(null)
        }),
        j = e => x(e),
        I = () => {
          const e = (0, o.useReactiveVar)(S),
            t = (0, o.useReactiveVar)(O),
            r = (0, o.useReactiveVar)(v),
            n = (0, o.useReactiveVar)(y),
            a = (0, o.useReactiveVar)(b);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: r,
            navOpen: n,
            userData: (0, o.useReactiveVar)(x),
            selectedCharacterTuple: a,
            jumpScMenuFocus: (0, o.useReactiveVar)(_),
            setCharactersNeeded: P,
            setCrewsNeeded: E,
            setCurrentCharId: g,
            setNavOpen: h,
            setSelectedCharacterTuple: w,
            setUserData: j,
            setJumpScMenuFocus: m
          }
        },
        T = async ({
          pingBearer: e
        }) => await (0, o.coreScApiFetch)("notification/count", {
          pingBearer: e
        });
      var C = r(39763),
        R = r.n(C);
      var A = r(58128),
        N = r(25130);
      const M = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: r
          } = I(), n = (0, o.useRockstarToken)(), [c, s] = (0, a.useState)({
            id: 0,
            avatar: "",
            bearer_token_expired: !0,
            isAMinor: void 0,
            isNewAccount: !1,
            nickname: "",
            nonExpiredToken: !1,
            profile_link: "https://",
            accountSynced: !1,
            hasGtaPlus: !1,
            gtaPlusPlatforms: []
          }), [i] = (0, o.useRockstarTokenReactive)(), u = (0, o.useRockstarTokenPing)(), [l, f] = (0, a.useState)(), [p, d] = (0, a.useState)(!1), y = void 0 === l, [h, _] = (0, a.useState)(1);
          return (0, a.useEffect)(() => {
            "gtao" !== t || c?.characters?.gtao || (s(e => ({
              ...e,
              accountSynced: !1
            })), _(e => e + 1))
          }, [t, c?.characters?.gtao]), (0, a.useEffect)(() => {
            r && !c?.crews && (s(e => ({
              ...e,
              accountSynced: !1
            })), _(e => e + 1))
          }, [r, c?.crews]), (0, a.useEffect)(() => {
            0 === h && s(e => ({
              ...e,
              accountSynced: !0
            }))
          }, [h]), (0, a.useEffect)(() => {
            e && i(e)
          }, [e]), (0, a.useEffect)(() => {
            "" !== n || u()
          }, [n]), (0, a.useEffect)(() => {
            if ("" === n) return;
            const e = !!n;
            if (e || p || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: t,
                      silentCheck: r
                    } = (0, o.getConfigForDomain)(), n = {
                      method: "POST",
                      body: `fingerprint=${await R().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, a = await fetch(r, n);
                    if (200 !== a.status) return void e(!1);
                    const c = `${t}?code=${await a.json()}`,
                      s = await fetch(c, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: i
                      } = await s.json();
                    return e(i), i
                  })({
                    token: i
                  })
                } catch (e) {}
              })(), d(!0)), !e && p && f(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const t = (0, A.s)(e),
                  {
                    host: r
                  } = (0, o.getConfigForDomain)(),
                  n = parseInt(t.nameid),
                  a = t["scAuth.Nickname"],
                  c = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  s = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, N.M)(i, s) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: n,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: a,
                  profile_link: `https://${r}.rockstargames.com/member/${a}?id=${n}`
                }
              })({
                bearerToken: n
              });
              s(t => ({
                ...t,
                ...e
              }))
            }
          }, [n, p]), (0, a.useEffect)(() => {
            (async () => {
              if (l && c && r && !c?.crews && c?.characters) {
                const e = await (async ({
                  pingBearer: e,
                  rockstarId: t
                }) => {
                  const {
                    crews: r
                  } = await (0, o.coreScApiFetch)("crew/forMember", {
                    pingBearer: e,
                    query: {
                      userId: t
                    }
                  });
                  return r
                })({
                  pingBearer: u,
                  rockstarId: c.id
                });
                s(t => ({
                  ...t,
                  crews: e
                })), _(e => e - 1)
              }
            })()
          }, [c?.nickname, r, l, c?.characters]), (0, a.useEffect)(() => {
            (async () => {
              if (!l || !c || null != c?.hasNotification) return;
              const e = await T({
                pingBearer: u
              });
              let t = !1;
              e?.count && (t = e.count > 0), s(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [l, c?.hasNotification]), (0, a.useEffect)(() => {
            (async () => {
              if (!l || !c || c?.gamesPlayed || !1 === t || !1 === r) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const {
                  all: t
                } = await (0, o.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return t
              })({
                pingBearer: u
              });
              s(t => ({
                ...t,
                gamesPlayed: e
              })), _(e => e - 1)
            })()
          }, [c?.nickname, l]), (0, a.useEffect)(() => {
            (async () => {
              if (l && c && "gtao" === t && !c?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async ({
                  pingBearer: e,
                  nickname: t,
                  rockstarId: r
                }) => {
                  const n = await (0, o.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: e
                    }),
                    a = n?.platforms?.map(async t => {
                      if (["ps3", "xbox", "xbox360"].includes(t)) return;
                      const r = await (0, o.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: e
                      });
                      return r?.status ? r?.result?.map(e => {
                        const {
                          stats: r
                        } = e, {
                          overview: n
                        } = r, {
                          rank: a
                        } = n;
                        if ("0" === a.value) return;
                        const o = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return {
                          ...e,
                          mugshotUrl: o,
                          platform: t
                        }
                      }) : void 0
                    }),
                    c = (await Promise.all(a)).flat().filter(e => void 0 !== e),
                    {
                      status: s,
                      accounts: i
                    } = await (0, o.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                      pingBearer: e
                    });
                  if (!s || !i.length) return {
                    gtaoCharacters: c,
                    linkedAccounts: []
                  };
                  const u = i[0],
                    {
                      rockstarAccount: l,
                      linkedAccounts: f
                    } = u;
                  if (l?.rockstarId !== r) return {
                    gtaoCharacters: c,
                    linkedAccounts: []
                  };
                  if (!c.length) return {
                    gtaoCharacters: c,
                    linkedAccounts: u.linkedAccounts
                  };
                  const p = t;
                  let d = "",
                    y = "";
                  return f?.map(e => ("xbl" === e?.onlineService ? d = e.userName : "np" === e?.onlineService && (y = e.userName), e)), c.sort((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter)), c.map((e, t) => (e.platformUsername = p, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = y || p), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = d || p), e)), {
                    gtaoCharacters: c,
                    linkedAccounts: f
                  }
                })({
                  pingBearer: u,
                  nickname: c.nickname,
                  rockstarId: c.id
                }), r = [];
                e.forEach(e => {
                  const t = e.platform;
                  r.includes(t) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(t)
                }), s(n => ({
                  ...n,
                  characters: {
                    ...n.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: r.length > 0,
                  gtaPlusPlatforms: r
                })), _(e => e - 1)
              }
            })()
          }, [t, c?.nickname, l]), (0, a.useEffect)(() => {
            c?.id && c?.nonExpiredToken && (f(!0), k(c.id))
          }, [JSON.stringify(c)]), {
            data: c,
            setData: s,
            loggedIn: l,
            loading: y
          }
        },
        D = {},
        V = (0, o.setContextItem)({
          context: (0, a.createContext)(D),
          key: "userContext"
        }),
        B = ({
          children: e,
          privateToken: t
        }) => {
          const r = M({
              privateToken: t
            }),
            o = (0, a.useMemo)(() => ({
              ...r,
              privateToken: t,
              hasProvider: !0
            }), [r]);
          return (0, n.jsx)(V.Provider, {
            value: o,
            children: e
          })
        },
        F = () => (0, a.useContext)(V)
    },
    78322(e, t, r) {
      r.r(t), r.d(t, {
        __addDisposableResource: () => M,
        __assign: () => o,
        __asyncDelegator: () => O,
        __asyncGenerator: () => P,
        __asyncValues: () => E,
        __await: () => S,
        __awaiter: () => y,
        __classPrivateFieldGet: () => R,
        __classPrivateFieldIn: () => N,
        __classPrivateFieldSet: () => A,
        __createBinding: () => _,
        __decorate: () => s,
        __disposeResources: () => V,
        __esDecorate: () => u,
        __exportStar: () => m,
        __extends: () => a,
        __generator: () => h,
        __importDefault: () => C,
        __importStar: () => T,
        __makeTemplateObject: () => x,
        __metadata: () => d,
        __param: () => i,
        __propKey: () => f,
        __read: () => g,
        __rest: () => c,
        __rewriteRelativeImportExtension: () => B,
        __runInitializers: () => l,
        __setFunctionName: () => p,
        __spread: () => b,
        __spreadArray: () => k,
        __spreadArrays: () => w,
        __values: () => v,
        default: () => F
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e
        }, o.apply(this, arguments)
      };

      function c(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
        }
        return r
      }

      function s(e, t, r, n) {
        var a, o = arguments.length,
          c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (c = (o < 3 ? a(c) : o > 3 ? a(t, r, c) : a(t, r)) || c);
        return o > 3 && c && Object.defineProperty(t, r, c), c
      }

      function i(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function u(e, t, r, n, a, o) {
        function c(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, i = n.kind, u = "getter" === i ? "get" : "setter" === i ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var y = {};
          for (var h in n) y[h] = "access" === h ? {} : n[h];
          for (var h in n.access) y.access[h] = n.access[h];
          y.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(c(e || null))
          };
          var _ = (0, r[d])("accessor" === i ? {
            get: f.get,
            set: f.set
          } : f[u], y);
          if ("accessor" === i) {
            if (void 0 === _) continue;
            if (null === _ || "object" != typeof _) throw new TypeError("Object expected");
            (s = c(_.get)) && (f.get = s), (s = c(_.set)) && (f.set = s), (s = c(_.init)) && a.unshift(s)
          } else(s = c(_)) && ("field" === i ? a.unshift(s) : f[u] = s)
        }
        l && Object.defineProperty(l, n.name, f), p = !0
      }

      function l(e, t, r) {
        for (var n = arguments.length > 2, a = 0; a < t.length; a++) r = n ? t[a].call(e, r) : t[a].call(e);
        return n ? r : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function p(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function d(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function y(e, t, r, n) {
        return new(r || (r = Promise))(function(a, o) {
          function c(e) {
            try {
              i(n.next(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            try {
              i(n.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function i(e) {
            var t;
            e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(c, s)
          }
          i((n = n.apply(e, t || [])).next())
        })
      }

      function h(e, t) {
        var r, n, a, o = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          c = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return c.next = s(0), c.throw = s(1), c.return = s(2), "function" == typeof Symbol && (c[Symbol.iterator] = function() {
          return this
        }), c;

        function s(s) {
          return function(i) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; c && (c = 0, s[0] && (o = 0)), o;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return o.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    o.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      o.label = s[1];
                      break
                    }
                    if (6 === s[0] && o.label < a[1]) {
                      o.label = a[1], a = s;
                      break
                    }
                    if (a && o.label < a[2]) {
                      o.label = a[2], o.ops.push(s);
                      break
                    }
                    a[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                s = t.call(e, o)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, i])
          }
        }
      }
      var _ = Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r);
        var a = Object.getOwnPropertyDescriptor(t, r);
        a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, n, a)
      } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
      };

      function m(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || _(t, e, r)
      }

      function v(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, a, o = r.call(e),
          c = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = o.next()).done;) c.push(n.value)
        } catch (e) {
          a = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o)
          } finally {
            if (a) throw a.error
          }
        }
        return c
      }

      function b() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e
      }

      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          a = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], c = 0, s = o.length; c < s; c++, a++) n[a] = o[c];
        return n
      }

      function k(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, a = 0, o = t.length; a < o; a++) !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function S(e) {
        return this instanceof S ? (this.v = e, this) : new S(e)
      }

      function P(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, a = r.apply(e, t || []),
          o = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
          }
        }), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function c(e, t) {
          a[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
              o.push([e, t, r, n]) > 1 || s(e, t)
            })
          }, t && (n[e] = t(n[e])))
        }

        function s(e, t) {
          try {
            (r = a[e](t)).value instanceof S ? Promise.resolve(r.value.v).then(i, u) : l(o[0][2], r)
          } catch (e) {
            l(o[0][3], e)
          }
          var r
        }

        function i(e) {
          s("next", e)
        }

        function u(e) {
          s("throw", e)
        }

        function l(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1])
        }
      }

      function O(e) {
        var t, r;
        return t = {}, n("next"), n("throw", function(e) {
          throw e
        }), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, a) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: S(e[n](t)),
              done: !1
            } : a ? a(t) : t
          } : a
        }
      }

      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = v(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function n(r) {
          t[r] = e[r] && function(t) {
            return new Promise(function(n, a) {
              ! function(e, t, r, n) {
                Promise.resolve(n).then(function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }, t)
              }(n, a, (t = e[r](t)).done, t.value)
            })
          }
        }
      }

      function x(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var j = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        I = function(e) {
          return I = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, I(e)
        };

      function T(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = I(e), n = 0; n < r.length; n++) "default" !== r[n] && _(t, e, r[n]);
        return j(t, e), t
      }

      function C(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function R(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function A(e, t, r, n, a) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !a) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? a.call(e, r) : a ? a.value = r : t.set(e, r), r
      }

      function N(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function M(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n, a;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (a = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          a && (n = function() {
            try {
              a.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: n,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var D = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function V(e) {
        function t(t) {
          e.error = e.hasError ? new D(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, n = 0;
        return function a() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(a);
            if (r.dispose) {
              var o = r.dispose.call(r.value);
              if (r.async) return n |= 2, Promise.resolve(o).then(a, function(e) {
                return t(e), a()
              })
            } else n |= 1
          } catch (e) {
            t(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function B(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, a, o) {
          return r ? t ? ".jsx" : ".js" : !n || a && o ? n + a + "." + o.toLowerCase() + "js" : e
        }) : e
      }
      const F = {
        __extends: a,
        __assign: o,
        __rest: c,
        __decorate: s,
        __param: i,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: f,
        __setFunctionName: p,
        __metadata: d,
        __awaiter: y,
        __generator: h,
        __createBinding: _,
        __exportStar: m,
        __values: v,
        __read: g,
        __spread: b,
        __spreadArrays: w,
        __spreadArray: k,
        __await: S,
        __asyncGenerator: P,
        __asyncDelegator: O,
        __asyncValues: E,
        __makeTemplateObject: x,
        __importStar: T,
        __importDefault: C,
        __classPrivateFieldGet: R,
        __classPrivateFieldSet: A,
        __classPrivateFieldIn: N,
        __addDisposableResource: M,
        __disposeResources: V,
        __rewriteRelativeImportExtension: B
      }
    }
  }
]);