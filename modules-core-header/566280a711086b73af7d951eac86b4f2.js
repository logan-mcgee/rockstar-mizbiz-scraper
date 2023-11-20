(self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [168], {
    1787: (e, a, t) => {
      "use strict";
      t.d(a, {
        QS: () => n.QS,
        BS: () => j,
        M9: () => U,
        qs: () => N,
        Db: () => y,
        aM: () => w,
        lY: () => s.l,
        XW: () => A,
        cC: () => E,
        yx: () => L,
        eJ: () => M,
        dd: () => q
      });
      var n = t(9551),
        s = t(2997),
        r = t(279),
        i = t(5672),
        o = t(2213),
        _ = t(895),
        c = t(7605),
        l = t(5370),
        d = t.n(l),
        g = t(3577);
      const m = (e, a) => {
        const t = (0, s.l)(g.SP),
          n = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...a,
            variables: {
              locale: t,
              ...a?.variables
            }
          },
          {
            data: i,
            loading: o,
            error: _,
            ...l
          } = (0, c.a)(e, n);
        return (0, r.useEffect)((() => {
          if (i && n.setTitleDataPath) {
            const e = d().get(i, n.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [i]), (0, r.useEffect)((() => (n.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: o
        }), () => {
          n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [o]), (0, r.useEffect)((() => {
          if (n.autoSetError && _) throw new Error(String(_))
        }), [_]), {
          loading: o,
          error: _,
          data: i,
          ...l
        }
      };
      var v = t(3705);
      const u = (0, r.createContext)((() => ({
          data: null
        }))),
        p = new Promise((e => {
          e()
        })),
        f = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new i.h)
        },
        h = [() => p, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new o.f(f))
        }],
        k = (0, r.createContext)((() => h)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: a
          } = e;
          return (0, v.jsx)(k.Provider, {
            value: _.D,
            children: (0, v.jsx)(u.Provider, {
              value: m,
              children: a
            })
          })
        }),
        w = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, a) => (0, r.useContext)(u)(e, a)),
        y = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, r.useContext)(k)(e)),
        x = (0, r.createContext)({}),
        M = () => (0, r.useContext)(x),
        S = (0, r.createContext)({}),
        N = () => (0, r.useContext)(S);
      var C = t(588);
      const j = e => {
          const a = "__makevars__";
          return window?.[a] || (window[a] = {}), window?.[a]?.[e] || (window[a][e] = {}), ((e, a) => (t, s) => {
            const r = window?.[e]?.[a]?.[t] ?? (0, n.QS)(s);
            return window[e][a][t] = r, r
          })(a, e)
        },
        T = j("graph-token-provider"),
        z = (0, r.createContext)({
          token: T("token", null),
          tokenPing: "",
          tokenPingExpires: T("tokenPingExpires", null)
        }),
        I = e => {
          let {
            children: a,
            token: t,
            tokenPing: n,
            tokenPingExpires: s
          } = e;
          return (0, v.jsx)(z.Provider, {
            value: {
              token: t,
              tokenPing: n,
              tokenPingExpires: s
            },
            children: a
          })
        },
        L = () => {
          const {
            token: e,
            tokenPing: a,
            tokenPingExpires: t
          } = (0, r.useContext)(z);
          return [e, a, t]
        },
        A = () => {
          const [e] = L();
          return (0, s.l)(e)
        },
        E = () => {
          const [e, a, t] = L();
          return () => (async e => {
            let {
              url: a,
              token: t,
              tokenPingExpires: n
            } = e;
            try {
              const e = n?.() ?? 0,
                s = t?.() ?? null,
                r = (e => {
                  const a = Date.now() / 1e3;
                  return Math.ceil(e - a)
                })(e) > 0;
              if (!1 === s) return {
                bearerToken: s
              };
              if (r && s) return {
                bearerToken: s
              };
              const i = await fetch(a, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                o = await i.json(),
                {
                  tokenExpiresTime: _ = null
                } = o;
              return null !== _ && n?.(_), t(o.bearerToken ?? null), o
            } catch (e) {
              return t(!1), !1
            }
          })({
            url: a,
            token: e,
            tokenPingExpires: t
          })
        };
      var P = t(5767);
      var D = t(2495),
        V = t(3421),
        O = t.n(V);
      var G = t(3843),
        B = t(7056);
      const R = (0, G.Nq)({
          sha256: B.JQ
        }),
        F = e => {
          let {
            children: a,
            graphOptions: t,
            typePolicies: n
          } = e;
          const s = (e => {
            let {
              graphOptions: a,
              typePolicies: t = {}
            } = e;
            const n = a?.env ? U(a?.env) : a?.uri,
              [s] = (0, r.useState)(new i.h({
                typePolicies: t
              })),
              _ = R.concat((e => {
                let {
                  token: a
                } = e;
                return (0, P.v)(((e, t) => {
                  let {
                    headers: n
                  } = t;
                  const s = a?.() ?? null;
                  return s ? {
                    headers: {
                      ...n,
                      authorization: `Bearer ${s}`
                    }
                  } : null
                }))
              })({
                token: a?.token
              }).concat((e => (0, D.L)({
                ...e,
                fetch: O()
              }))({
                ...a,
                uri: n
              })));
            return new o.f({
              cache: s,
              link: _
            })
          })({
            graphOptions: t,
            typePolicies: n
          });
          return (0, v.jsx)(I, {
            token: t?.token,
            tokenPing: t?.tokenPing,
            tokenPingExpires: t?.tokenPingExpires,
            children: (0, v.jsx)(C.e, {
              client: s,
              children: (0, v.jsx)(b, {
                children: a
              })
            })
          })
        },
        $ = j("graph-with-rs-graph"),
        q = (e, a) => {
          let {
            env: t = "prod",
            typePolicies: n,
            token: s = $("token", null),
            tokenPingExpires: r = $("tokenPingExpires", null),
            tokenPing: i = null
          } = a;
          return function(a) {
            return (0, v.jsx)(F, {
              typePolicies: n,
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: s,
                tokenPing: i,
                tokenPingExpires: r
              },
              children: (0, v.jsx)(e, {
                ...a
              })
            })
          }
        },
        U = (j("graph-hoc"), e => {
          let a = "";
          switch (e) {
            case "prod":
              a = "graph";
              break;
            case "prod-int":
              a = "graph-int";
              break;
            default:
              a = `${e}-graph`
          }
          return `https://${a}.rockstargames.com?origin=${document.location.origin}`
        })
    },
    3577: (e, a, t) => {
      "use strict";
      t.d(a, {
        SP: () => s
      });
      var n = t(9551);
      const s = (0, n.QS)(document.documentElement.lang),
        r = window?.env,
        i = ((0, n.QS)({
          media: r?.cdn?.media,
          videos: r?.cdn?.videos
        }), document.currentScript),
        o = i?.src ? new URL(i.src).origin : "";
      let _ = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${o}/`;
      _.endsWith("/") || (_ = `${_}/`), (0, n.QS)(_)
    },
    2376: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => wr
      });
      var n = {};
      t.r(n), t.d(n, {
        beaterator: () => be,
        bully: () => we,
        careers: () => ye,
        gta: () => xe,
        gta2: () => Me,
        gta3: () => Se,
        gta4: () => Ne,
        gta5: () => Ce,
        gtaAdvance: () => je,
        gtaCtw: () => Te,
        gtaIvEflc: () => ze,
        gtaLcs: () => Ie,
        gtaLondon: () => Le,
        gtaOnline: () => Ae,
        gtaPlus: () => Ee,
        gtaSanAndreas: () => Pe,
        gtaTrilogy: () => De,
        gtaVc: () => Ve,
        gtaVcs: () => Oe,
        laNoire: () => Ge,
        manhunt: () => Be,
        manhunt2: () => Re,
        maxPayne: () => Fe,
        maxPayne2: () => $e,
        maxPayne3: () => qe,
        midnightclub: () => Ue,
        midnightclub2: () => He,
        midnightclub3: () => We,
        midnightclubStreetRacing: () => Je,
        oni: () => Ze,
        readDeadOnline: () => Xe,
        redDeadRedemption: () => Ke,
        redDeadRedemption2: () => Qe,
        redDeadRedemptionUndeadNightmare: () => Ye,
        redDeadRevolver: () => ea,
        rsg: () => aa,
        skateAndDestroy: () => na,
        smugglersRun: () => sa,
        smugglersRun2: () => ra,
        smugglersRunWarzones: () => ia,
        stateOfEmergency: () => ta,
        support: () => oa,
        tableTennis: () => _a,
        theItalianJob: () => ca,
        theWarriors: () => la,
        wildMetal: () => da
      });
      var s = {};
      t.r(s), t.d(s, {
        beaterator: () => is,
        bully: () => _s,
        careers: () => os,
        gta: () => cs,
        gta2: () => ls,
        gta3: () => ds,
        gta4: () => gs,
        gta5: () => ms,
        gtaadvance: () => vs,
        gtactw: () => us,
        gtaiveflc: () => ps,
        gtalcs: () => fs,
        gtalondon: () => hs,
        gtaonline: () => ks,
        gtaplus: () => bs,
        gtasanandreas: () => ws,
        gtatrilogy: () => ys,
        gtav: () => ms,
        gtavc: () => xs,
        gtavcs: () => Ms,
        lanoire: () => Ss,
        manhunt: () => Ns,
        manhunt2: () => Cs,
        manhunt3: () => js,
        maxpayne: () => Ts,
        maxpayne2: () => zs,
        maxpayne3: () => Is,
        midnightclub2: () => Ls,
        midnightclub3dub: () => As,
        midnightclubla: () => Es,
        midnightclubstreetracing: () => Ps,
        oni: () => Ds,
        reddeadonline: () => Vs,
        reddeadredemption: () => Os,
        reddeadredemption2: () => Gs,
        reddeadredemptionundeadnightmare: () => Bs,
        reddeadrevolver: () => Rs,
        rockstar: () => Fs,
        smugglersrun: () => $s,
        smugglersrun2hostileterritory: () => qs,
        smugglersrunwarzones: () => Us,
        stateofemergency: () => Hs,
        tabletennis: () => Ws,
        theitalianjob: () => Js,
        thewarriors: () => Zs,
        thrashersad: () => Xs,
        wildmetal: () => Ks
      });
      var r = t(3645),
        i = t(9089),
        o = t(2596),
        _ = t(279),
        c = t(9894),
        l = t(3705);
      const d = e => {
        let {
          locales: a,
          lang: t,
          children: n
        } = e;
        const s = (0, _.useMemo)((() => function(e) {
            let [a, t] = e.split(/[-_]/);
            return t = t.toLowerCase(), "cn" === t && (t = "hans"), [a, t]
          }(t)), [t]),
          r = (0, _.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, s[1])), [t, a]);
        return (0, l.jsx)(c.Z, {
          messages: r,
          locale: s[0],
          defaultLocale: "en",
          children: n
        }, s[0])
      };
      t(4262);
      const g = [{
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        m = g,
        v = g[1];
      var u = t(668);
      const p = (e, a) => {
          e && a ? document.cookie = `${e}=${a}; domain=${f()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${a})`)
        },
        f = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        h = () => {
          const {
            location: e
          } = window, a = (0, u.Z)(), t = (e => {
            const a = m.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              n = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== a.indexOf(t[n]) ? t[n] : null
          })(e), n = (e => {
            const a = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return a?.split("=")[1]
          })(e), s = v, [r, i] = function(e, a) {
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const n = document.cookie.split("; "),
              s = `${e}=`,
              r = n.find((e => e.startsWith(s))),
              i = r?.substring(s.length, r.length);
            return i && !t || p(e, a), [i, (o = e, e => {
              p(o, e)
            })];
            var o
          }(`rockstarweb_lang.${a.cookieIdentifier}`, t ?? void 0);
          let o = s;
          return o = a.currentSite?.site === u.z.www ? m.find((e => e.subdomaincom === n)) || m.find((e => e.subdomaincom === t)) || s : m.find((e => e.iso === r)) || s, [o, i]
        };
      var k = t(1787),
        b = t(6210),
        w = t(2620);
      const y = (0, k.BS)("@rockstargames/modules-core-sc-user"),
        x = y("navOpenReactive", !1),
        M = e => x(e),
        S = y("jumpScMenuFocusReactive", !1),
        N = e => S(e),
        C = y("hasNotificationsReactive", !1),
        j = e => C(e),
        T = y("currentCharIdReactive", null),
        z = e => T(e),
        I = y("selectedCharacterTupleReactive", null),
        L = e => I(e),
        A = y(null),
        E = y("charactersNeededReactive", null),
        P = e => E(e),
        D = y("userDataReactive", null),
        V = e => D(e),
        O = () => {
          const e = (0, k.lY)(E),
            a = (0, k.lY)(T),
            t = (0, k.lY)(x),
            n = (0, k.lY)(C),
            s = (0, k.lY)(I);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: n,
            navOpen: t,
            userData: (0, k.lY)(D),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, k.lY)(S),
            setCharactersNeeded: P,
            setCurrentCharId: z,
            setHasNotifications: j,
            setNavOpen: M,
            setSelectedCharacterTuple: L,
            setUserData: V,
            setJumpScMenuFocus: N
          }
        };
      var G = t(2348),
        B = t.n(G);
      const R = (0, b.E$)(),
        F = (0, k.QS)(R),
        {
          graphEnv: $
        } = (0, b.E$)(),
        q = (0, k.M9)($),
        U = () => {
          const e = (0, k.XW)(),
            [a, t] = (0, _.useState)({
              id: null,
              avatar: "",
              profile_link: "",
              nickname: "",
              crews: [],
              characters: {
                gtao: []
              }
            }),
            [n, s] = (0, _.useState)(!0),
            [r, , i] = (0, k.yx)(),
            o = (0, k.cC)(),
            {
              refetch: c
            } = (0, k.aM)(w.userData, {
              skip: !0,
              context: {
                uri: q
              }
            }),
            [l, d] = (0, _.useState)(null),
            [g, m] = (0, _.useState)(!1),
            [v, u] = (0, _.useState)(!1);
          return (0, _.useEffect)((() => {
            (async () => {
              const n = null === e ? null : !!e;
              if (n && !g) {
                s(!0), m(!0);
                const e = await c(),
                  n = e?.data?.user?.id,
                  r = await (async e => {
                    let {
                      pingBearer: a,
                      rockstarId: t
                    } = e;
                    const {
                      crews: n
                    } = await (0, b.ZF)("crew/forMember", {
                      pingBearer: a,
                      query: {
                        userId: t
                      }
                    });
                    return n
                  })({
                    pingBearer: o,
                    rockstarId: n
                  }),
                  i = await (async e => {
                    let {
                      pingBearer: a,
                      nickname: t,
                      rockstarId: n
                    } = e;
                    const s = [],
                      r = await (0, b.ZF)("profile/playedplatforms?game=gtav", {
                        pingBearer: a
                      });
                    if (await (r?.platforms?.reduce((async (e, t) => {
                        if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                        const n = await (0, b.ZF)(`games/gtao/characters?platform=${t}`, {
                          pingBearer: a
                        });
                        n?.status && n?.result?.map((e => {
                          const {
                            stats: a
                          } = e, {
                            overview: n
                          } = a, {
                            rank: r
                          } = n;
                          if ("0" === r.value) return;
                          const i = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                          return s.push({
                            ...e,
                            platform: t,
                            mugshotUrl: i
                          }), e
                        }))
                      }), Promise.resolve())), !s.length) return s;
                    const {
                      status: i,
                      accounts: o
                    } = await (0, b.ZF)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                      pingBearer: a
                    });
                    return i && o.length ? (o.forEach((e => {
                      const {
                        rockstarAccount: a,
                        linkedAccounts: r
                      } = e;
                      if (a?.rockstarId !== n) return;
                      const i = t;
                      let o = "",
                        _ = "";
                      r?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (_ = e.userName), e))), s.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), s.map(((e, a) => (e.platformUsername = i, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = _ || i), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || i), e)))
                    })), s) : s
                  })({
                    pingBearer: o,
                    nickname: e?.data?.user?.nickname,
                    rockstarId: n
                  }),
                  _ = {
                    ...a,
                    ...e?.data?.user,
                    crews: r,
                    characters: {
                      gtao: i
                    }
                  };
                s(!1), t(_), d(!0), A(n)
              }
              if (!1 === n && !v) {
                try {
                  await (async e => {
                    let {
                      token: a,
                      tokenPingExpires: t
                    } = e;
                    const n = {
                        method: "POST",
                        body: `fingerprint=${await B().get().then((e=>e))}`,
                        credentials: "include",
                        headers: {
                          "X-Requested-With": "XMLHttpRequest",
                          "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                        }
                      },
                      s = await fetch(F().silentCheck, n);
                    if (200 !== s.status) return void a(!1);
                    const r = await s.json(),
                      i = `${F().gateway}?code=${r}`,
                      o = await fetch(i, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: _,
                        tokenExpiresTime: c
                      } = await o.json();
                    return a(_), t(c), _
                  })({
                    token: r,
                    tokenPingExpires: i
                  })
                } catch (e) {}
                u(!0)
              }!1 === n && v && (m(!0), d(!1), s(!1)), null === e && o()
            })()
          }), [e, g, v]), {
            data: a,
            loading: n,
            loggedIn: l
          }
        },
        H = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        W = "user-context",
        J = window?.[W] ?? (window[W] = (0, _.createContext)(H)),
        Z = e => {
          let {
            children: a
          } = e;
          const t = U(),
            n = (0, _.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, l.jsx)(J.Provider, {
            value: n,
            children: a
          })
        },
        X = () => (0, _.useContext)(J);
      t(7629);
      var K = t(9360),
        Q = t(398);
      const Y = (0, _.createContext)(void 0),
        ee = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const n = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, _.useState)([]), [n, s] = (0, _.useState)([]), [r, i] = (0, _.useState)(null), {
                data: o,
                loggedIn: c
              } = X(), l = (e, n) => {
                const s = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = n ?? {};
                    (0, K.Z)({
                      ...e,
                      ...a
                    }), s.push(e)
                  }
                })), t([...a, ...s])
              };
              (0, _.useEffect)((() => {
                if (o && null !== c) {
                  const e = d(o);
                  n.length && e && l(n, e), i(e)
                } else e || n.length && l(n)
              }), [o, c, n]), (0, _.useEffect)((() => {
                const e = n.filter((e => -1 === a.indexOf(e)));
                s(e)
              }), [a]);
              const d = e => {
                const a = [],
                  t = [],
                  n = [];
                return Object.keys(e.characters).forEach((s => {
                  e.characters[s].length && (t.push(s), e.characters[s].forEach((e => {
                    "gtao" === s && (n.includes(e.platform) || n.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: c ?? !1,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: n.length ? n.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === c || !o || !r) {
                    const a = [...n];
                    return a.push({
                      ...e
                    }), s(a)
                  }
                  return (0, K.Z)({
                    ...e,
                    ...r
                  })
                }
              }
            }(a),
            s = (0, _.useMemo)((() => n), [n, a]);
          return (0, l.jsx)(Y.Provider, {
            value: s,
            children: t
          })
        },
        ae = {
          track: () => null
        },
        te = () => (0, _.useContext)(Y) ?? ae;
      var ne = t(3747);
      const se = e => {
        let {
          basename: a,
          children: t,
          history: n
        } = e;
        const [s, r] = (0, _.useState)({
          action: n.action,
          location: n.location
        });
        return (0, _.useLayoutEffect)((() => n.listen(((e, a) => {
          r({
            location: e,
            action: a
          })
        }))), [n]), (0, l.jsx)(ne.Router, {
          basename: a,
          location: s.location,
          navigationType: s.action,
          navigator: n,
          children: t
        })
      };
      var re = t(7199);
      const ie = "__MFE_GLOBAL_HOOK__",
        oe = JSON.parse('{"us":{"accessibility_skip_button":"Skip to main content","games_menu_featured":"Featured Games","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"View All","language_selector_default":"Select a Language","nav_bully_accomplishments":"Accomplishments","nav_bully_cta_buy_now":"Buy Now","nav_bully_game_overview":"Discover","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Careers on LinkedIn","nav_careers_contact_us":"Contact us","nav_careers_home":"Home","nav_careers_openings":"Openings","nav_cta_get_launcher":"Get Launcher","nav_gta_trilogy_accomplishments":"Accomplishments","nav_gta_trilogy_cta_buy_now":"Buy Now","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Overview","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Buy Now","nav_gtaiv_accomplishments":"Accomplishments","nav_gtaiv_cta_buy_now":"Buy Now","nav_gtaiv_overview":"Discover","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Accomplishments","nav_gtaiveflc_overview":"Overview","nav_gtaiveflc_support":"Support","nav_gtao_browse_crews":"Browse All Crews","nav_gtao_checklist":"Checklist","nav_gtao_community":"Community","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Create a Crew","nav_gtao_cta_buy_now":"Buy Now","nav_gtao_discover":"Discover","nav_gtao_emblem_editor":"Emblem Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Browse all jobs","nav_gtao_jobs_playlists":"Playlists","nav_gtao_license_plate_creator":"License Plate Creator","nav_gtao_missions":"Missions","nav_gtao_my_character":"My Character","nav_gtao_my_crews":"My Crews","nav_gtao_my_jobs":"My jobs","nav_gtao_overview":"Overview","nav_gtao_photos":"Photos","nav_gtao_stats":"Stats","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Buy Now","nav_gtav_checklist":"Checklist","nav_gtav_community":"Community","nav_gtav_create_crew":"Create a Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Browse All Crews","nav_gtav_cta_buy_now":"Buy Now","nav_gtav_discover":"Discover","nav_gtav_emblem_editor":"Emblem Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Browse all jobs","nav_gtav_licence_plate_creator":"License Plate Creator","nav_gtav_missions":"Missions","nav_gtav_my_character":"My Character","nav_gtav_my_crews":"My Crews","nav_gtav_my_jobs":"My Jobs","nav_gtav_overview":"Overview","nav_gtav_photos":"Photos","nav_gtav_playlists":"Playlists","nav_gtav_stats":"Stats","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Buy Now","nav_gtavc_discover":"Discover","nav_gtavcs_discover":"Discover","nav_lanoire_accomplishments":"Accomplishments","nav_lanoire_badge_pursuit":"Badge Pursuit","nav_lanoire_case_tracker":"Case Tracker","nav_lanoire_checklist":"Checklist","nav_lanoire_cta_buy_now":"Buy Now","nav_lanoire_official_site":"Official Site","nav_lanoire_overview":"Overview","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progress","nav_lanoire_stats":"Stats","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Buy Now","nav_more_dropdown":"More","nav_mp3_accomplishments":"Accomplishments","nav_mp3_career":"Career","nav_mp3_chapters":"Chapters","nav_mp3_checklist":"Checklist","nav_mp3_checkpoint_challenge":"Checkpoint Challenge","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Buy Now","nav_mp3_featured":"Featured","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Leaderboards","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"News","nav_mp3_ny_minute":"New York Minute","nav_mp3_official_site":"Official Site","nav_mp3_overview":"Overview","nav_mp3_progress":"Progress","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Specifications","nav_mp3_support":"Support","nav_mp3_weapons":"Weapons","nav_opens_in_new_window":"{text} (Link opens in new window)","nav_quick_access_games":"Games","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Accomplishments","nav_rdo_awards":"Awards","nav_rdo_benefits":"Benefits","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Club Rewards","nav_rdo_community":"Community","nav_rdo_competitive_series":"Competitive Series","nav_rdo_cta_buy_now":"Buy Now","nav_rdo_customization":"Customization","nav_rdo_explore":"Explore","nav_rdo_getting_started":"Getting Started","nav_rdo_guides":"Guides","nav_rdo_my_character":"My Character","nav_rdo_overview":"Overview","nav_rdo_photos":"Photos","nav_rdo_posses":"Posses","nav_rdo_posses_free_roam":"Posses and Free Roam","nav_rdo_progress":"Progress","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Rank Unlocks","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Specialist Roles","nav_rdo_story_missions":"Story Missions","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Buy Now","nav_rdr2_accomplishments":"Accomplishments","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Challenges","nav_rdr2_chapters":"Chapters","nav_rdr2_character":"Character","nav_rdr2_compendium":"Compendium","nav_rdr2_cta_buy_now":"Buy Now","nav_rdr2_explore":"Explore","nav_rdr2_gallery":"Gallery","nav_rdr2_locations":"Locations","nav_rdr2_media":"Media","nav_rdr2_music":"Music","nav_rdr2_online":"Online","nav_rdr2_overview":"Overview","nav_rdr2_progress":"Progress","nav_rdr2_stats":"Stats","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"The Van der Linde Gang","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Weaponry","nav_rdr2_wildlife":"Wildlife","nav_rockstargames_home":"Rockstar Games Home","nav_rockstargames_logo":"Click to open menu","nav_rsg_downloads":"Downloads","nav_rsg_games":"Games","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Your search query is too short. Queries must be at least {count} characters long.","nav_search_error_too_short_invalid_chars":"Your search query contains invalid characters ({invalidChars}). Remove these and try again.","nav_support_dashboard":"My Dashboard","nav_support_home":"Home","nav_support_service_status":"Service Status","nav_support_submit_ticket":"Submit a Ticket","nav_tabletennis_cta_buy_now":"Buy Now","nav_undeadnightmare_buy_now":"Buy Now","nav_undeadnightmare_discover":"Discover","nav_undeadnightmare_gallery":"Gallery","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"News","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Specifications","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"View All","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","search_action":"Search","search_close_button":"Close Search","search_open_button":"Open Search","search_placeholder":"Search Rockstar Games...","search_target_aria_label":"Search {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Games","search_target_jobs":"Jobs","search_target_posts":"Posts","search_target_user_photos":"User Photos","search_target_user_videos":"User Videos","search_target_users":"Users","search_target_videos":"Videos","social_club_text":"Social Club"},"de":{"accessibility_skip_button":"Zum Hauptinhalt springen","games_menu_featured":"Ausgewählte Spiele","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Alle anzeigen","language_selector_default":"Sprache auswählen","nav_bully_accomplishments":"Erfolge","nav_bully_cta_buy_now":"Jetzt kaufen","nav_bully_game_overview":"Entdecken","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Stellenangebote auf LinkedIn","nav_careers_contact_us":"Kontaktiere uns","nav_careers_home":"Startseite","nav_careers_openings":"Stellenangebote","nav_cta_get_launcher":"Launcher herunterladen","nav_gta_trilogy_accomplishments":"Erfolge","nav_gta_trilogy_cta_buy_now":"Jetzt kaufen","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Überblick","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Jetzt kaufen","nav_gtaiv_accomplishments":"Erfolge","nav_gtaiv_cta_buy_now":"Jetzt kaufen","nav_gtaiv_overview":"Entdecken","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Erfolge","nav_gtaiveflc_overview":"Überblick","nav_gtaiveflc_support":"Support","nav_gtao_browse_crews":"Alle Crews ansehen","nav_gtao_checklist":"Checkliste","nav_gtao_community":"Community","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crew erstellen","nav_gtao_cta_buy_now":"Jetzt kaufen","nav_gtao_discover":"Entdecken","nav_gtao_emblem_editor":"Emblem-Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Alle Jobs ansehen","nav_gtao_jobs_playlists":"Spielelisten","nav_gtao_license_plate_creator":"Nummernschild-Editor","nav_gtao_missions":"Missionen","nav_gtao_my_character":"Mein Charakter","nav_gtao_my_crews":"Meine Crews","nav_gtao_my_jobs":"Meine Jobs","nav_gtao_overview":"Überblick","nav_gtao_photos":"Fotos","nav_gtao_stats":"Statistiken","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Jetzt kaufen","nav_gtav_checklist":"Checkliste","nav_gtav_community":"Community","nav_gtav_create_crew":"Crew erstellen","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Alle Crews ansehen","nav_gtav_cta_buy_now":"Jetzt kaufen","nav_gtav_discover":"Entdecken","nav_gtav_emblem_editor":"Emblem-Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Alle Jobs ansehen","nav_gtav_licence_plate_creator":"Nummernschild-Editor","nav_gtav_missions":"Missionen","nav_gtav_my_character":"Mein Charakter","nav_gtav_my_crews":"Meine Crews","nav_gtav_my_jobs":"Meine Jobs","nav_gtav_overview":"Überblick","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Spielelisten","nav_gtav_stats":"Statistiken","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Jetzt kaufen","nav_gtavc_discover":"Entdecken","nav_gtavcs_discover":"Entdecken","nav_lanoire_accomplishments":"Erfolge","nav_lanoire_badge_pursuit":"Jagd nach Abzeichen","nav_lanoire_case_tracker":"Ermittlungsakten","nav_lanoire_checklist":"Checkliste","nav_lanoire_cta_buy_now":"Jetzt kaufen","nav_lanoire_official_site":"Offizielle Seite","nav_lanoire_overview":"Überblick","nav_lanoire_pc_console":"PC/Konsole","nav_lanoire_progress":"Fortschritt","nav_lanoire_stats":"Statistiken","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Jetzt kaufen","nav_more_dropdown":"Mehr","nav_mp3_accomplishments":"Erfolge","nav_mp3_career":"Karriere","nav_mp3_chapters":"Kapitel","nav_mp3_checklist":"Checkliste","nav_mp3_checkpoint_challenge":"Kontrollpunkt-Herausforderung","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Jetzt kaufen","nav_mp3_featured":"Vorgestellt","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Bestenlisten","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Neuigkeiten","nav_mp3_ny_minute":"Eine Minute in New York","nav_mp3_official_site":"Offizielle Seite","nav_mp3_overview":"Überblick","nav_mp3_progress":"Fortschritt","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Spezifikationen","nav_mp3_support":"Support","nav_mp3_weapons":"Waffen","nav_opens_in_new_window":"{text} (Link öffnet ein neues Fenster)","nav_quick_access_games":"Spiele","nav_quick_access_home":"Startseite","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Erfolge","nav_rdo_awards":"Auszeichnungen","nav_rdo_benefits":"Vorteile","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Club-Belohnungen","nav_rdo_community":"Community","nav_rdo_competitive_series":"Wettkampf-Serie","nav_rdo_cta_buy_now":"Jetzt kaufen","nav_rdo_customization":"Individualisierung","nav_rdo_explore":"Entdecken","nav_rdo_getting_started":"Erste Schritte","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mein Charakter","nav_rdo_overview":"Überblick","nav_rdo_photos":"Fotos","nav_rdo_posses":"Trupps","nav_rdo_posses_free_roam":"Trupps und Free Roam","nav_rdo_progress":"Fortschritt","nav_rdo_progression":"Fortschritt","nav_rdo_rank_unlocks":"Rang-Freischaltungen","nav_rdo_roles":"Rollen","nav_rdo_specialist_roles":"Spezialrollen","nav_rdo_story_missions":"Storymissionen","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Jetzt kaufen","nav_rdr2_accomplishments":"Erfolge","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Herausforderungen","nav_rdr2_chapters":"Kapitel","nav_rdr2_character":"Charakter","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Jetzt kaufen","nav_rdr2_explore":"Entdecken","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Schauplätze","nav_rdr2_media":"Medien","nav_rdr2_music":"Musik","nav_rdr2_online":"Online","nav_rdr2_overview":"Überblick","nav_rdr2_progress":"Fortschritt","nav_rdr2_stats":"Statistiken","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"Die Van-der-Linde-Bande","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Waffen","nav_rdr2_wildlife":"Tierwelt","nav_rockstargames_home":"Rockstar-Games-Startseite","nav_rockstargames_logo":"Klicken, um das Menü zu öffnen","nav_rsg_downloads":"Downloads","nav_rsg_games":"Spiele","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Deine Suchanfrage ist zu kurz. Suchbegriffe müssen mindestens {count} Zeichen lang sein.","nav_search_error_too_short_invalid_chars":"Deine Suchanfrage beinhaltet ungültige Zeichen ({invalidChars}). Bitte entferne diese und versuche es erneut.","nav_support_dashboard":"Meine Übersicht","nav_support_home":"Startseite","nav_support_service_status":"Service-Status","nav_support_submit_ticket":"Eine Anfrage einreichen","nav_tabletennis_cta_buy_now":"Jetzt kaufen","nav_undeadnightmare_buy_now":"Jetzt kaufen","nav_undeadnightmare_discover":"Entdecken","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Medien","nav_undeadnightmare_news":"Neuigkeiten","nav_undeadnightmare_ps3_digital":"PS3 – Digital","nav_undeadnightmare_specs":"Spezifikationen","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 – Digital","nav_view_all_games":"Alle anzeigen","profile_selector_mugshot":"{userName} Verbrecherfoto","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","search_action":"Suchen","search_close_button":"Suche schließen","search_open_button":"Suche öffnen","search_placeholder":"Rockstar Games durchsuchen …","search_target_aria_label":"Durchsuche {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Spiele","search_target_jobs":"Jobs","search_target_posts":"Beiträge","search_target_user_photos":"Fotos von Nutzern","search_target_user_videos":"Videos von Nutzern","search_target_users":"Nutzer","search_target_videos":"Videos","social_club_text":"Social Club"},"es":{"accessibility_skip_button":"Pasar al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","language_selector_default":"Selecciona un idioma","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Asistencia técnica","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contacta con nosotros","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Asistencia técnica","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Asistencia técnica","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Asistencia técnica","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de partidas","nav_gtao_license_plate_creator":"Creador de matrículas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Asistencia técnica","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de matrículas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de partidas","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Asistencia técnica","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio web oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Asistencia técnica","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio web oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Asistencia técnica","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una nueva ventana)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Ventajas","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Cuadrillas","nav_rdo_posses_free_roam":"Cuadrillas y Modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles especializados","nav_rdo_story_missions":"Misiones de la historia","nav_rdo_support":"Asistencia técnica","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Asistencia técnica","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Newswire","nav_rsg_store":"Tienda","nav_rsg_support":"Asistencia técnica","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Tu búsqueda es demasiado corta. Las búsquedas deben contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres que no son válidos ({invalidChars}). Quítalos e inténtalo de nuevo.","nav_support_dashboard":"Mi panel","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Asistencia técnica","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Vídeos de usuarios","search_target_users":"Usuarios","search_target_videos":"Vídeos","social_club_text":"Social Club"},"mx":{"accessibility_skip_button":"Ir al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","language_selector_default":"Seleccionar un idioma","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Soporte","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contáctanos","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Soporte","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Soporte","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Soporte","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de juego","nav_gtao_license_plate_creator":"Creador de placas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Soporte","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de placas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de juego","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Soporte","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Soporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Soporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una ventana nueva)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Canal de noticias","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Beneficios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Clanes","nav_rdo_posses_free_roam":"Clanes y modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles de especialistas","nav_rdo_story_missions":"Misiones narrativas","nav_rdo_support":"Soporte","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Soporte","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Armamento","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Canal de noticias","nav_rsg_store":"Tienda","nav_rsg_support":"Soporte","nav_rsg_videos":"Videos","nav_search_error_too_short":"Tu búsqueda es muy corta, ya que debe contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres no válidos: {invalidChars}. Quítalos de la búsqueda y vuelve a intentarlo.","nav_support_dashboard":"Mi panel de control","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Soporte","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Videos de usuarios","search_target_users":"Usuarios","search_target_videos":"Videos","social_club_text":"Social Club"},"fr":{"accessibility_skip_button":"Passer au contenu principal","games_menu_featured":"Jeux à la une","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Voir tout","language_selector_default":"Sélectionner une langue","nav_bully_accomplishments":"Exploits","nav_bully_cta_buy_now":"Acheter maintenant","nav_bully_game_overview":"Découvrir","nav_bully_Overview":"Assistance","nav_bully_videos":"Vidéos","nav_careers_careers_on_linkedin":"Emplois sur LinkedIn","nav_careers_contact_us":"Nous contacter","nav_careers_home":"Accueil","nav_careers_openings":"Postes à pourvoir","nav_cta_get_launcher":"Obtenir le Launcher","nav_gta_trilogy_accomplishments":"Exploits","nav_gta_trilogy_cta_buy_now":"Acheter maintenant","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Vue d\'ensemble","nav_gta_trilogy_support":"Assistance","nav_gta3_cta_buy_now":"Acheter maintenant","nav_gtaiv_accomplishments":"Exploits","nav_gtaiv_cta_buy_now":"Acheter maintenant","nav_gtaiv_overview":"Découvrir","nav_gtaiv_support":"Assistance","nav_gtaiveflc_accomplishments":"Exploits","nav_gtaiveflc_overview":"Vue d\'ensemble","nav_gtaiveflc_support":"Assistance","nav_gtao_browse_crews":"Parcourir tous les crews","nav_gtao_checklist":"Check-list","nav_gtao_community":"Communauté","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Créer un crew","nav_gtao_cta_buy_now":"Acheter maintenant","nav_gtao_discover":"Découvrir","nav_gtao_emblem_editor":"Éditeur d\'emblèmes","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Activités","nav_gtao_jobs_browse_all":"Parcourir toutes les activités","nav_gtao_jobs_playlists":"Listes","nav_gtao_license_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtao_missions":"Missions","nav_gtao_my_character":"Mon personnage","nav_gtao_my_crews":"Mes crews","nav_gtao_my_jobs":"Mes activités","nav_gtao_overview":"Vue d\'ensemble","nav_gtao_photos":"Photos","nav_gtao_stats":"Statistiques","nav_gtao_story":"Histoire","nav_gtao_support":"Assistance","nav_gtao_videos":"Vidéos","nav_gtasanandreas_cta_buy_now":"Acheter maintenant","nav_gtav_checklist":"Check-list","nav_gtav_community":"Communauté","nav_gtav_create_crew":"Créer un crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Parcourir tous les crews","nav_gtav_cta_buy_now":"Acheter maintenant","nav_gtav_discover":"Découvrir","nav_gtav_emblem_editor":"Éditeur d\'emblèmes","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Activités","nav_gtav_jobs_browse_all":"Parcourir toutes les activités","nav_gtav_licence_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtav_missions":"Missions","nav_gtav_my_character":"Mon personnage","nav_gtav_my_crews":"Mes crews","nav_gtav_my_jobs":"Mes activités","nav_gtav_overview":"Vue d\'ensemble","nav_gtav_photos":"Photos","nav_gtav_playlists":"Listes","nav_gtav_stats":"Statistiques","nav_gtav_story":"Histoire","nav_gtav_support":"Assistance","nav_gtav_videos":"Vidéos","nav_gtavc_cta_buy_now":"Acheter maintenant","nav_gtavc_discover":"Découvrir","nav_gtavcs_discover":"Découvrir","nav_lanoire_accomplishments":"Exploits","nav_lanoire_badge_pursuit":"Défi Traque & plaque","nav_lanoire_case_tracker":"Suivi d\'affaires","nav_lanoire_checklist":"Check-list","nav_lanoire_cta_buy_now":"Acheter maintenant","nav_lanoire_official_site":"Site officiel","nav_lanoire_overview":"Vue d\'ensemble","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progression","nav_lanoire_stats":"Statistiques","nav_lanoire_support":"Assistance","nav_lanoire_vr_case_files":"Les enquêtes VR","nav_midnightclubla_buy_now":"Acheter maintenant","nav_more_dropdown":"Plus","nav_mp3_accomplishments":"Exploits","nav_mp3_career":"Carrière","nav_mp3_chapters":"Chapitres","nav_mp3_checklist":"Check-list","nav_mp3_checkpoint_challenge":"Défi points de passage","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Acheter maintenant","nav_mp3_featured":"À la une","nav_mp3_grinds":"Défis","nav_mp3_leaderboards":"Classements","nav_mp3_multiplayer":"Multijoueur","nav_mp3_news":"Actualités","nav_mp3_ny_minute":"Minute new-yorkaise","nav_mp3_official_site":"Site officiel","nav_mp3_overview":"Vue d\'ensemble","nav_mp3_progress":"Progression","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Solo","nav_mp3_specifications":"Configuration","nav_mp3_support":"Assistance","nav_mp3_weapons":"Armes","nav_opens_in_new_window":"{text} (Le lien s\'ouvrira dans une nouvelle fenêtre)","nav_quick_access_games":"Jeux","nav_quick_access_home":"Accueil","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Exploits","nav_rdo_awards":"Récompenses","nav_rdo_benefits":"Avantages","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Récompenses du club","nav_rdo_community":"Communauté","nav_rdo_competitive_series":"Séries compétitives","nav_rdo_cta_buy_now":"Acheter maintenant","nav_rdo_customization":"Personnalisation","nav_rdo_explore":"Explorer","nav_rdo_getting_started":"Bien démarrer","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mon personnage","nav_rdo_overview":"Vue d\'ensemble","nav_rdo_photos":"Photos","nav_rdo_posses":"Groupes","nav_rdo_posses_free_roam":"Groupes et mode exploration","nav_rdo_progress":"Progression","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Éléments à déverrouiller","nav_rdo_roles":"Rôles","nav_rdo_specialist_roles":"Rôles spécialisés","nav_rdo_story_missions":"Missions de l\'histoire","nav_rdo_support":"Assistance","nav_rdr_cta_buy_now":"Acheter maintenant","nav_rdr2_accomplishments":"Exploits","nav_rdr2_artwork":"Illustrations","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Défis","nav_rdr2_chapters":"Chapitres","nav_rdr2_character":"Personnage","nav_rdr2_compendium":"Encyclopédie","nav_rdr2_cta_buy_now":"Acheter maintenant","nav_rdr2_explore":"Explorer","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Lieux","nav_rdr2_media":"Média","nav_rdr2_music":"Musique","nav_rdr2_online":"En ligne","nav_rdr2_overview":"Vue d\'ensemble","nav_rdr2_progress":"Progression","nav_rdr2_stats":"Statistiques","nav_rdr2_support":"Assistance","nav_rdr2_van_der_linde_gang":"La bande de Van der Linde","nav_rdr2_videos":"Vidéos","nav_rdr2_weaponry":"Armes","nav_rdr2_wildlife":"Vie sauvage","nav_rockstargames_home":"Accueil Rockstar Games","nav_rockstargames_logo":"Cliquez pour ouvrir le menu","nav_rsg_downloads":"Téléchargements","nav_rsg_games":"Jeux","nav_rsg_newswire":"Newswire","nav_rsg_store":"Boutique","nav_rsg_support":"Assistance","nav_rsg_videos":"Vidéos","nav_search_error_too_short":"Requête trop courte. Votre requête doit comporter au moins {count} caractères.","nav_search_error_too_short_invalid_chars":"Votre requête contient des caractères non valides ({invalidChars}). Veuillez les supprimer et réessayer.","nav_support_dashboard":"Mon tableau de bord","nav_support_home":"Accueil","nav_support_service_status":"État du service","nav_support_submit_ticket":"Envoyer une demande d\'assistance","nav_tabletennis_cta_buy_now":"Acheter maintenant","nav_undeadnightmare_buy_now":"Acheter maintenant","nav_undeadnightmare_discover":"Découvrir","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Infos","nav_undeadnightmare_media":"Média","nav_undeadnightmare_news":"Actualités","nav_undeadnightmare_ps3_digital":"PS3 - Version numérique","nav_undeadnightmare_specs":"Configuration","nav_undeadnightmare_suport":"Assistance","nav_undeadnightmare_videos":"Vidéos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Version numérique","nav_view_all_games":"Voir tout","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","quick_access_title":"Rockstar Games","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"Inscription","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","search_action":"Rechercher","search_close_button":"Fermer la recherche","search_open_button":"Ouvrir la recherche","search_placeholder":"Recherche sur Rockstar Games...","search_target_aria_label":"Rechercher {target}","search_target_community":"Communauté","search_target_crews":"Crews","search_target_games":"Jeux","search_target_jobs":"Activités","search_target_posts":"Publications","search_target_user_photos":"Photos d\'utilisateurs","search_target_user_videos":"Vidéos d\'utilisateurs","search_target_users":"Utilisateurs","search_target_videos":"Vidéos","social_club_text":"Social Club"},"it":{"accessibility_skip_button":"Vai ai contenuti principali","games_menu_featured":"Giochi in evidenza","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Visualizza tutto","language_selector_default":"Seleziona una lingua","nav_bully_accomplishments":"Premi","nav_bully_cta_buy_now":"Acquista ora","nav_bully_game_overview":"Scopri","nav_bully_Overview":"Supporto","nav_bully_videos":"Video","nav_careers_careers_on_linkedin":"Carriere su LinkedIn","nav_careers_contact_us":"Contattaci","nav_careers_home":"Home","nav_careers_openings":"Possibilità di impiego","nav_cta_get_launcher":"Ottieni il launcher","nav_gta_trilogy_accomplishments":"Premi","nav_gta_trilogy_cta_buy_now":"Acquista ora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Panoramica","nav_gta_trilogy_support":"Supporto","nav_gta3_cta_buy_now":"Acquista ora","nav_gtaiv_accomplishments":"Premi","nav_gtaiv_cta_buy_now":"Acquista ora","nav_gtaiv_overview":"Scopri","nav_gtaiv_support":"Supporto","nav_gtaiveflc_accomplishments":"Premi","nav_gtaiveflc_overview":"Panoramica","nav_gtaiveflc_support":"Supporto","nav_gtao_browse_crews":"Esplora le crew","nav_gtao_checklist":"Lista","nav_gtao_community":"Community","nav_gtao_crews":"Crew","nav_gtao_crews_create":"Crea una crew","nav_gtao_cta_buy_now":"Acquista ora","nav_gtao_discover":"Scopri","nav_gtao_emblem_editor":"Editor simboli","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guide","nav_gtao_jobs":"Attività","nav_gtao_jobs_browse_all":"Esplora le attività","nav_gtao_jobs_playlists":"Elenchi partite","nav_gtao_license_plate_creator":"Creatore di targhe","nav_gtao_missions":"Missioni","nav_gtao_my_character":"Il mio personaggio","nav_gtao_my_crews":"Le mie crew","nav_gtao_my_jobs":"Le mie attività","nav_gtao_overview":"Panoramica","nav_gtao_photos":"Foto","nav_gtao_stats":"Statistiche","nav_gtao_story":"Storia","nav_gtao_support":"Supporto","nav_gtao_videos":"Video","nav_gtasanandreas_cta_buy_now":"Acquista ora","nav_gtav_checklist":"Lista","nav_gtav_community":"Community","nav_gtav_create_crew":"Crea una crew","nav_gtav_crews":"Crew","nav_gtav_crews_browse_all":"Esplora le crew","nav_gtav_cta_buy_now":"Acquista ora","nav_gtav_discover":"Scopri","nav_gtav_emblem_editor":"Editor simboli","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guide","nav_gtav_jobs":"Attività","nav_gtav_jobs_browse_all":"Esplora le attività","nav_gtav_licence_plate_creator":"Creatore di targhe","nav_gtav_missions":"Missioni","nav_gtav_my_character":"Il mio personaggio","nav_gtav_my_crews":"Le mie crew","nav_gtav_my_jobs":"Le mie attività","nav_gtav_overview":"Panoramica","nav_gtav_photos":"Foto","nav_gtav_playlists":"Elenchi partite","nav_gtav_stats":"Statistiche","nav_gtav_story":"Storia","nav_gtav_support":"Supporto","nav_gtav_videos":"Video","nav_gtavc_cta_buy_now":"Acquista ora","nav_gtavc_discover":"Scopri","nav_gtavcs_discover":"Scopri","nav_lanoire_accomplishments":"Premi","nav_lanoire_badge_pursuit":"Ricerca dei distintivi","nav_lanoire_case_tracker":"Registro dei casi","nav_lanoire_checklist":"Lista","nav_lanoire_cta_buy_now":"Acquista ora","nav_lanoire_official_site":"Sito ufficiale","nav_lanoire_overview":"Panoramica","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Statistiche","nav_lanoire_support":"Supporto","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Acquista ora","nav_more_dropdown":"Altro","nav_mp3_accomplishments":"Premi","nav_mp3_career":"Carriera","nav_mp3_chapters":"Capitoli","nav_mp3_checklist":"Lista","nav_mp3_checkpoint_challenge":"Sfida a checkpoint","nav_mp3_crews":"Crew","nav_mp3_cta_buy_now":"Acquista ora","nav_mp3_featured":"In evidenza","nav_mp3_grinds":"Sgobbate","nav_mp3_leaderboards":"Classifiche","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Notizie","nav_mp3_ny_minute":"Ultimo respiro","nav_mp3_official_site":"Sito ufficiale","nav_mp3_overview":"Panoramica","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Sfida a punti","nav_mp3_singleplayer":"Giocatore singolo","nav_mp3_specifications":"Requisiti","nav_mp3_support":"Supporto","nav_mp3_weapons":"Armi","nav_opens_in_new_window":"{text} (Il link si apre in una nuova finestra)","nav_quick_access_games":"Giochi","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Premi","nav_rdo_awards":"Ricompense","nav_rdo_benefits":"Vantaggi","nav_rdo_catalogue":"Catalogo","nav_rdo_club_rewards":"Ricompense del club","nav_rdo_community":"Community","nav_rdo_competitive_series":"Serie competitive","nav_rdo_cta_buy_now":"Acquista ora","nav_rdo_customization":"Personalizzazione","nav_rdo_explore":"Esplora","nav_rdo_getting_started":"Come iniziare","nav_rdo_guides":"Guide","nav_rdo_my_character":"Il mio personaggio","nav_rdo_overview":"Panoramica","nav_rdo_photos":"Foto","nav_rdo_posses":"Posse","nav_rdo_posses_free_roam":"Posse e Free Roam","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressione","nav_rdo_rank_unlocks":"Sbloccabili con rango","nav_rdo_roles":"Ruoli","nav_rdo_specialist_roles":"Ruoli specializzati","nav_rdo_story_missions":"Missioni della storia","nav_rdo_support":"Supporto","nav_rdr_cta_buy_now":"Acquista ora","nav_rdr2_accomplishments":"Premi","nav_rdr2_artwork":"Illustrazioni","nav_rdr2_catalogue":"Catalogo","nav_rdr2_challenges":"Sfide","nav_rdr2_chapters":"Capitoli","nav_rdr2_character":"Personaggio","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Acquista ora","nav_rdr2_explore":"Esplora","nav_rdr2_gallery":"Galleria","nav_rdr2_locations":"Luoghi","nav_rdr2_media":"Media","nav_rdr2_music":"Musica","nav_rdr2_online":"Online","nav_rdr2_overview":"Panoramica","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Statistiche","nav_rdr2_support":"Supporto","nav_rdr2_van_der_linde_gang":"La banda di Van der Linde","nav_rdr2_videos":"Video","nav_rdr2_weaponry":"Arsenale","nav_rdr2_wildlife":"Fauna selvatica","nav_rockstargames_home":"Home Rockstar Games","nav_rockstargames_logo":"Clicca per aprire il menu","nav_rsg_downloads":"Download","nav_rsg_games":"Giochi","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Supporto","nav_rsg_videos":"Video","nav_search_error_too_short":"La tua ricerca è troppo corta. Le ricerce devono contenere almeno {count} caratteri.","nav_search_error_too_short_invalid_chars":"La tua ricerca contiene dei caratteri non validi ({invalidChars}). Rimuovili e riprova.","nav_support_dashboard":"La mia dashboard","nav_support_home":"Home","nav_support_service_status":"Stato del servizio","nav_support_submit_ticket":"Invia un ticket","nav_tabletennis_cta_buy_now":"Acquista ora","nav_undeadnightmare_buy_now":"Acquista ora","nav_undeadnightmare_discover":"Scopri","nav_undeadnightmare_gallery":"Galleria","nav_undeadnightmare_info":"Informazioni","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"Notizie","nav_undeadnightmare_ps3_digital":"PS3 - Digitale","nav_undeadnightmare_specs":"Requisiti","nav_undeadnightmare_suport":"Supporto","nav_undeadnightmare_videos":"Video","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digitale","nav_view_all_games":"Visualizza tutto","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_activity_feed":"Attività dei feed","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Aiuto","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","search_action":"Cerca","search_close_button":"Apri ricerca","search_open_button":"Chiudi ricerca","search_placeholder":"Cerca in Rockstar Games...","search_target_aria_label":"Cerca {target}","search_target_community":"Community","search_target_crews":"Crew","search_target_games":"Giochi","search_target_jobs":"Attività","search_target_posts":"Post","search_target_user_photos":"Foto utente","search_target_user_videos":"Video utente","search_target_users":"Utenti","search_target_videos":"Video","social_club_text":"Social Club"},"jp":{"accessibility_skip_button":"メインコンテンツまでスキップ","games_menu_featured":"注目のゲーム","games_menu_gta_online":"GTAオンライン","games_menu_gta_trilogy":"グランド・セフト・オート：トリロジー","games_menu_gta_v":"グランド・セフト・オートV","games_menu_rdr_2":"レッド・デッド・リデンプション2","games_menu_rdr_online":"レッド・デッド・オンライン","games_menu_view_all":"全て表示","language_selector_default":"言語を選択","nav_bully_accomplishments":"実績","nav_bully_cta_buy_now":"今すぐ購入","nav_bully_game_overview":"概要","nav_bully_Overview":"サポート","nav_bully_videos":"ビデオ","nav_careers_careers_on_linkedin":"LinkedInキャリア","nav_careers_contact_us":"お問い合せ","nav_careers_home":"ホーム","nav_careers_openings":"求人","nav_cta_get_launcher":"Launcherを入手","nav_gta_trilogy_accomplishments":"実績","nav_gta_trilogy_cta_buy_now":"今すぐ購入","nav_gta_trilogy_gta3":"グランド・セフト・オートIII","nav_gta_trilogy_gtasa":"グランド・セフト・オート：サンアンドレアス","nav_gta_trilogy_gtavc":"グランド・セフト・オート：バイスシティ","nav_gta_trilogy_overview":"概要","nav_gta_trilogy_support":"サポート","nav_gta3_cta_buy_now":"今すぐ購入","nav_gtaiv_accomplishments":"実績","nav_gtaiv_cta_buy_now":"今すぐ購入","nav_gtaiv_overview":"概要","nav_gtaiv_support":"サポート","nav_gtaiveflc_accomplishments":"実績","nav_gtaiveflc_overview":"概要","nav_gtaiveflc_support":"サポート","nav_gtao_browse_crews":"全てのクルーを見る","nav_gtao_checklist":"チェックリスト","nav_gtao_community":"コミュニティ","nav_gtao_crews":"クルー","nav_gtao_crews_create":"クルーを作成","nav_gtao_cta_buy_now":"今すぐ購入","nav_gtao_discover":"概要","nav_gtao_emblem_editor":"エンブレム・エディター","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTAオンライン","nav_gtao_guides":"ガイド","nav_gtao_jobs":"ジョブ","nav_gtao_jobs_browse_all":"全てのジョブを見る","nav_gtao_jobs_playlists":"プレイリスト","nav_gtao_license_plate_creator":"ナンバープレートクリエイター","nav_gtao_missions":"ミッション","nav_gtao_my_character":"マイ・キャラクター","nav_gtao_my_crews":"自分のクルー","nav_gtao_my_jobs":"マイ・ジョブ","nav_gtao_overview":"概要","nav_gtao_photos":"写真","nav_gtao_stats":"データ","nav_gtao_story":"ストーリー","nav_gtao_support":"サポート","nav_gtao_videos":"ビデオ","nav_gtasanandreas_cta_buy_now":"今すぐ購入","nav_gtav_checklist":"チェックリスト","nav_gtav_community":"コミュニティ","nav_gtav_create_crew":"クルーを作成","nav_gtav_crews":"クルー","nav_gtav_crews_browse_all":"全てのクルーを見る","nav_gtav_cta_buy_now":"今すぐ購入","nav_gtav_discover":"概要","nav_gtav_emblem_editor":"エンブレム・エディター","nav_gtav_gta_online":"GTAオンライン","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"ガイド","nav_gtav_jobs":"ジョブ","nav_gtav_jobs_browse_all":"全てのジョブを見る","nav_gtav_licence_plate_creator":"ナンバープレートクリエイター","nav_gtav_missions":"ミッション","nav_gtav_my_character":"マイ・キャラクター","nav_gtav_my_crews":"自分のクルー","nav_gtav_my_jobs":"マイ・ジョブ","nav_gtav_overview":"概要","nav_gtav_photos":"写真","nav_gtav_playlists":"プレイリスト","nav_gtav_stats":"データ","nav_gtav_story":"ストーリー","nav_gtav_support":"サポート","nav_gtav_videos":"ビデオ","nav_gtavc_cta_buy_now":"今すぐ購入","nav_gtavc_discover":"概要","nav_gtavcs_discover":"概要","nav_lanoire_accomplishments":"実績","nav_lanoire_badge_pursuit":"バッジ探索チャレンジ","nav_lanoire_case_tracker":"事件トラッカー","nav_lanoire_checklist":"チェックリスト","nav_lanoire_cta_buy_now":"今すぐ購入","nav_lanoire_official_site":"オフィシャルサイト","nav_lanoire_overview":"概要","nav_lanoire_pc_console":"PC/コンソール","nav_lanoire_progress":"進行状況","nav_lanoire_stats":"データ","nav_lanoire_support":"サポート","nav_lanoire_vr_case_files":"VR事件簿","nav_midnightclubla_buy_now":"今すぐ購入","nav_more_dropdown":"もっと見る","nav_mp3_accomplishments":"実績","nav_mp3_career":"キャリア","nav_mp3_chapters":"チャプター","nav_mp3_checklist":"チェックリスト","nav_mp3_checkpoint_challenge":"チェックポイントチャレンジ","nav_mp3_crews":"クルー","nav_mp3_cta_buy_now":"今すぐ購入","nav_mp3_featured":"ピックアップ","nav_mp3_grinds":"グラインド","nav_mp3_leaderboards":"ランキング","nav_mp3_multiplayer":"マルチプレイ","nav_mp3_news":"ニュース","nav_mp3_ny_minute":"ニューヨーク・ミニッツ","nav_mp3_official_site":"オフィシャルサイト","nav_mp3_overview":"概要","nav_mp3_progress":"進行状況","nav_mp3_score_attack":"スコアアタック","nav_mp3_singleplayer":"シングルプレイ","nav_mp3_specifications":"システム要件","nav_mp3_support":"サポート","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}(リンクは新しいウィンドウで開きます)","nav_quick_access_games":"ゲーム","nav_quick_access_home":"ホーム","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"実績","nav_rdo_awards":"アワード","nav_rdo_benefits":"特典","nav_rdo_catalogue":"カタログ","nav_rdo_club_rewards":"クラブ報酬","nav_rdo_community":"コミュニティ","nav_rdo_competitive_series":"対戦シリーズ","nav_rdo_cta_buy_now":"今すぐ購入","nav_rdo_customization":"カスタマイズ","nav_rdo_explore":"探索","nav_rdo_getting_started":"始めよう","nav_rdo_guides":"ガイド","nav_rdo_my_character":"マイ・キャラクター","nav_rdo_overview":"概要","nav_rdo_photos":"写真","nav_rdo_posses":"民警団","nav_rdo_posses_free_roam":"民警団＆放浪モード","nav_rdo_progress":"進行状況","nav_rdo_progression":"進行状況","nav_rdo_rank_unlocks":"ランク解除","nav_rdo_roles":"役割","nav_rdo_specialist_roles":"専門的な役割","nav_rdo_story_missions":"ストーリーミッション","nav_rdo_support":"サポート","nav_rdr_cta_buy_now":"今すぐ購入","nav_rdr2_accomplishments":"実績","nav_rdr2_artwork":"アートワーク","nav_rdr2_catalogue":"カタログ","nav_rdr2_challenges":"チャレンジ","nav_rdr2_chapters":"チャプター","nav_rdr2_character":"キャラクター","nav_rdr2_compendium":"図鑑","nav_rdr2_cta_buy_now":"今すぐ購入","nav_rdr2_explore":"探索","nav_rdr2_gallery":"ギャラリー","nav_rdr2_locations":"目的地","nav_rdr2_media":"メディア","nav_rdr2_music":"音楽","nav_rdr2_online":"オンライン","nav_rdr2_overview":"概要","nav_rdr2_progress":"進行状況","nav_rdr2_stats":"データ","nav_rdr2_support":"サポート","nav_rdr2_van_der_linde_gang":"ダッチギャング","nav_rdr2_videos":"ビデオ","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"ロックスター・ゲームスホーム","nav_rockstargames_logo":"クリックしてメニューを開く","nav_rsg_downloads":"ダウンロード","nav_rsg_games":"ゲーム","nav_rsg_newswire":"Newswire","nav_rsg_store":"ストア","nav_rsg_support":"サポート","nav_rsg_videos":"ビデオ","nav_search_error_too_short":"検索文字数が少なすぎます。{count}文字以上にしてください。","nav_search_error_too_short_invalid_chars":"検索文字に無効な文字({invalidChars})が含まれています。無効な文字を削除してもう一度お試しください。","nav_support_dashboard":"ダッシュボード","nav_support_home":"ホーム","nav_support_service_status":"サービス状況","nav_support_submit_ticket":"チケットを送信","nav_tabletennis_cta_buy_now":"今すぐ購入","nav_undeadnightmare_buy_now":"今すぐ購入","nav_undeadnightmare_discover":"概要","nav_undeadnightmare_gallery":"ギャラリー","nav_undeadnightmare_info":"情報","nav_undeadnightmare_media":"メディア","nav_undeadnightmare_news":"ニュース","nav_undeadnightmare_ps3_digital":"PS3 - ダウンロード版","nav_undeadnightmare_specs":"システム要件","nav_undeadnightmare_suport":"サポート","nav_undeadnightmare_videos":"ビデオ","nav_undeadnightmare_xbox360_digital":"Xbox 360 - ダウンロード版","nav_view_all_games":"全て表示","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリ","profile_selector_switch_character":"キャラクター変更","quick_access_title":"Rockstar Games","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"ドラッグメニューハンドル","sc_menu_toggle":"Social Clubメニューを切り替え","search_action":"検索","search_close_button":"検索を閉じる","search_open_button":"検索を開く","search_placeholder":"ロックスター・ゲームス内を検索…","search_target_aria_label":"{target}を検索","search_target_community":"コミュニティ","search_target_crews":"クルー","search_target_games":"ゲーム","search_target_jobs":"ジョブ","search_target_posts":"投稿","search_target_user_photos":"ユーザー写真","search_target_user_videos":"ユーザービデオ","search_target_users":"ユーザー","search_target_videos":"ビデオ","social_club_text":"Social Club"},"kr":{"accessibility_skip_button":"주 콘텐츠로 건너뛰기","games_menu_featured":"특선 게임","games_menu_gta_online":"Grand Theft Auto 온라인","games_menu_gta_trilogy":"Grand Theft Auto: 트릴로지","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 온라인","games_menu_view_all":"모두 보기","language_selector_default":"언어 선택","nav_bully_accomplishments":"업적","nav_bully_cta_buy_now":"지금 구입","nav_bully_game_overview":"탐색","nav_bully_Overview":"지원","nav_bully_videos":"동영상","nav_careers_careers_on_linkedin":"LinkedIn 채용","nav_careers_contact_us":"문의","nav_careers_home":"홈","nav_careers_openings":"진행 중 공고","nav_cta_get_launcher":"Launcher 다운로드","nav_gta_trilogy_accomplishments":"업적","nav_gta_trilogy_cta_buy_now":"지금 구입","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"소개","nav_gta_trilogy_support":"지원","nav_gta3_cta_buy_now":"지금 구입","nav_gtaiv_accomplishments":"업적","nav_gtaiv_cta_buy_now":"지금 구입","nav_gtaiv_overview":"탐색","nav_gtaiv_support":"지원","nav_gtaiveflc_accomplishments":"업적","nav_gtaiveflc_overview":"소개","nav_gtaiveflc_support":"지원","nav_gtao_browse_crews":"모든 조직 둘러보기","nav_gtao_checklist":"체크리스트","nav_gtao_community":"커뮤니티","nav_gtao_crews":"조직","nav_gtao_crews_create":"조직 생성","nav_gtao_cta_buy_now":"지금 구입","nav_gtao_discover":"탐색","nav_gtao_emblem_editor":"상징 편집기","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 온라인","nav_gtao_guides":"가이드","nav_gtao_jobs":"작업","nav_gtao_jobs_browse_all":"모든 작업 둘러보기","nav_gtao_jobs_playlists":"플레이 목록","nav_gtao_license_plate_creator":"번호판 생성기","nav_gtao_missions":"임무","nav_gtao_my_character":"내 캐릭터","nav_gtao_my_crews":"내 조직","nav_gtao_my_jobs":"내 작업","nav_gtao_overview":"소개","nav_gtao_photos":"사진","nav_gtao_stats":"통계","nav_gtao_story":"스토리","nav_gtao_support":"지원","nav_gtao_videos":"동영상","nav_gtasanandreas_cta_buy_now":"지금 구입","nav_gtav_checklist":"체크리스트","nav_gtav_community":"커뮤니티","nav_gtav_create_crew":"조직 생성","nav_gtav_crews":"조직","nav_gtav_crews_browse_all":"모든 조직 둘러보기","nav_gtav_cta_buy_now":"지금 구입","nav_gtav_discover":"탐색","nav_gtav_emblem_editor":"상징 편집기","nav_gtav_gta_online":"GTA 온라인","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"가이드","nav_gtav_jobs":"작업","nav_gtav_jobs_browse_all":"모든 작업 둘러보기","nav_gtav_licence_plate_creator":"번호판 생성기","nav_gtav_missions":"임무","nav_gtav_my_character":"내 캐릭터","nav_gtav_my_crews":"내 조직","nav_gtav_my_jobs":"내 작업","nav_gtav_overview":"소개","nav_gtav_photos":"사진","nav_gtav_playlists":"플레이 목록","nav_gtav_stats":"통계","nav_gtav_story":"스토리","nav_gtav_support":"지원","nav_gtav_videos":"동영상","nav_gtavc_cta_buy_now":"지금 구입","nav_gtavc_discover":"탐색","nav_gtavcs_discover":"탐색","nav_lanoire_accomplishments":"업적","nav_lanoire_badge_pursuit":"배지 수집","nav_lanoire_case_tracker":"사건 추적","nav_lanoire_checklist":"체크리스트","nav_lanoire_cta_buy_now":"지금 구입","nav_lanoire_official_site":"공식 사이트","nav_lanoire_overview":"소개","nav_lanoire_pc_console":"PC/콘솔","nav_lanoire_progress":"진행","nav_lanoire_stats":"통계","nav_lanoire_support":"지원","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"지금 구입","nav_more_dropdown":"그 외","nav_mp3_accomplishments":"업적","nav_mp3_career":"경력","nav_mp3_chapters":"챕터","nav_mp3_checklist":"체크리스트","nav_mp3_checkpoint_challenge":"체크포인트 도전","nav_mp3_crews":"조직","nav_mp3_cta_buy_now":"지금 구입","nav_mp3_featured":"주요 사항","nav_mp3_grinds":"시련","nav_mp3_leaderboards":"순위표","nav_mp3_multiplayer":"멀티 플레이","nav_mp3_news":"뉴스","nav_mp3_ny_minute":"뉴욕의 시간","nav_mp3_official_site":"공식 사이트","nav_mp3_overview":"소개","nav_mp3_progress":"진행","nav_mp3_score_attack":"스코어 어택","nav_mp3_singleplayer":"싱글 플레이","nav_mp3_specifications":"사양","nav_mp3_support":"지원","nav_mp3_weapons":"무기","nav_opens_in_new_window":"{text} (새 창에서 링크 열기)","nav_quick_access_games":"게임","nav_quick_access_home":"홈","nav_quick_access_newswire":"뉴스와이어","nav_rdo_accomplishments":"업적","nav_rdo_awards":"보상","nav_rdo_benefits":"혜택","nav_rdo_catalogue":"카탈로그","nav_rdo_club_rewards":"클럽 보상","nav_rdo_community":"커뮤니티","nav_rdo_competitive_series":"경쟁 시리즈","nav_rdo_cta_buy_now":"지금 구입","nav_rdo_customization":"커스텀","nav_rdo_explore":"탐험","nav_rdo_getting_started":"시작하기","nav_rdo_guides":"가이드","nav_rdo_my_character":"내 캐릭터","nav_rdo_overview":"소개","nav_rdo_photos":"사진","nav_rdo_posses":"갱단","nav_rdo_posses_free_roam":"갱단과 유랑 모드","nav_rdo_progress":"진행","nav_rdo_progression":"진행 상황","nav_rdo_rank_unlocks":"랭크 잠금 해제","nav_rdo_roles":"직업","nav_rdo_specialist_roles":"전문 직업","nav_rdo_story_missions":"스토리 임무","nav_rdo_support":"지원","nav_rdr_cta_buy_now":"지금 구입","nav_rdr2_accomplishments":"업적","nav_rdr2_artwork":"아트워크","nav_rdr2_catalogue":"카탈로그","nav_rdr2_challenges":"도전","nav_rdr2_chapters":"챕터","nav_rdr2_character":"캐릭터","nav_rdr2_compendium":"개요","nav_rdr2_cta_buy_now":"지금 구입","nav_rdr2_explore":"탐험","nav_rdr2_gallery":"갤러리","nav_rdr2_locations":"위치","nav_rdr2_media":"미디어","nav_rdr2_music":"음악","nav_rdr2_online":"온라인","nav_rdr2_overview":"소개","nav_rdr2_progress":"진행","nav_rdr2_stats":"통계","nav_rdr2_support":"지원","nav_rdr2_van_der_linde_gang":"반 더 린드 갱단","nav_rdr2_videos":"동영상","nav_rdr2_weaponry":"무기","nav_rdr2_wildlife":"야생 동물","nav_rockstargames_home":"Rockstar Games 홈","nav_rockstargames_logo":"클릭해서 메뉴 열기","nav_rsg_downloads":"다운로드","nav_rsg_games":"게임","nav_rsg_newswire":"뉴스와이어","nav_rsg_store":"스토어","nav_rsg_support":"지원","nav_rsg_videos":"동영상","nav_search_error_too_short":"검색어가 너무 짧습니다. 검색어는 최소 {count}글자여야 합니다.","nav_search_error_too_short_invalid_chars":"검색어에 유효하지 않은 문자({invalidChars})가 포함되어 있습니다. 제거하고 다시 시도하십시오.","nav_support_dashboard":"내 대시보드","nav_support_home":"홈","nav_support_service_status":"지원 가능한 서비스","nav_support_submit_ticket":"문서 제출","nav_tabletennis_cta_buy_now":"지금 구입","nav_undeadnightmare_buy_now":"지금 구입","nav_undeadnightmare_discover":"탐색","nav_undeadnightmare_gallery":"갤러리","nav_undeadnightmare_info":"정보","nav_undeadnightmare_media":"미디어","nav_undeadnightmare_news":"뉴스","nav_undeadnightmare_ps3_digital":"PS3 - 디지털","nav_undeadnightmare_specs":"사양","nav_undeadnightmare_suport":"지원","nav_undeadnightmare_videos":"동영상","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 디지털","nav_view_all_games":"모두 보기","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","quick_access_title":"Rockstar Games","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","search_action":"검색","search_close_button":"검색 닫기","search_open_button":"검색 열기","search_placeholder":"Rockstar Games 검색...","search_target_aria_label":"{target} 검색","search_target_community":"커뮤니티","search_target_crews":"조직","search_target_games":"게임","search_target_jobs":"작업","search_target_posts":"포스팅","search_target_user_photos":"유저 사진","search_target_user_videos":"유저 동영상","search_target_users":"유저","search_target_videos":"동영상","social_club_text":"Social Club"},"pl":{"accessibility_skip_button":"Przejdź do głównej treści","games_menu_featured":"Wyróżnione gry","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Pokaż wszystkie","language_selector_default":"Wybierz język","nav_bully_accomplishments":"Osiągnięcia","nav_bully_cta_buy_now":"Kup teraz","nav_bully_game_overview":"Odkryj","nav_bully_Overview":"Wsparcie","nav_bully_videos":"Filmy","nav_careers_careers_on_linkedin":"Oferty pracy w LinkedIn","nav_careers_contact_us":"Kontakt","nav_careers_home":"Strona główna","nav_careers_openings":"Wakaty","nav_cta_get_launcher":"Pobierz aplikację","nav_gta_trilogy_accomplishments":"Osiągnięcia","nav_gta_trilogy_cta_buy_now":"Kup teraz","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Ogólny zarys","nav_gta_trilogy_support":"Wsparcie","nav_gta3_cta_buy_now":"Kup teraz","nav_gtaiv_accomplishments":"Osiągnięcia","nav_gtaiv_cta_buy_now":"Kup teraz","nav_gtaiv_overview":"Odkryj","nav_gtaiv_support":"Wsparcie","nav_gtaiveflc_accomplishments":"Osiągnięcia","nav_gtaiveflc_overview":"Ogólny zarys","nav_gtaiveflc_support":"Wsparcie","nav_gtao_browse_crews":"Przeglądaj ekipy","nav_gtao_checklist":"Lista zadań","nav_gtao_community":"Społeczność","nav_gtao_crews":"Ekipy","nav_gtao_crews_create":"Stwórz ekipę","nav_gtao_cta_buy_now":"Kup teraz","nav_gtao_discover":"Odkryj","nav_gtao_emblem_editor":"Edytor emblematów","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Przewodniki","nav_gtao_jobs":"Akcje","nav_gtao_jobs_browse_all":"Przeglądaj akcje","nav_gtao_jobs_playlists":"Listy gier","nav_gtao_license_plate_creator":"Kreator tablic rejestracyjnych","nav_gtao_missions":"Misje","nav_gtao_my_character":"Moja postać","nav_gtao_my_crews":"Moje ekipy","nav_gtao_my_jobs":"Moje akcje","nav_gtao_overview":"Ogólny zarys","nav_gtao_photos":"Zdjęcia","nav_gtao_stats":"Statystyki","nav_gtao_story":"Fabuła","nav_gtao_support":"Wsparcie","nav_gtao_videos":"Filmy","nav_gtasanandreas_cta_buy_now":"Kup teraz","nav_gtav_checklist":"Lista zadań","nav_gtav_community":"Społeczność","nav_gtav_create_crew":"Stwórz ekipę","nav_gtav_crews":"Ekipy","nav_gtav_crews_browse_all":"Przeglądaj ekipy","nav_gtav_cta_buy_now":"Kup teraz","nav_gtav_discover":"Odkryj","nav_gtav_emblem_editor":"Edytor emblematów","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Przewodniki","nav_gtav_jobs":"Akcje","nav_gtav_jobs_browse_all":"Przeglądaj akcje","nav_gtav_licence_plate_creator":"Kreator tablic rejestracyjnych","nav_gtav_missions":"Misje","nav_gtav_my_character":"Moja postać","nav_gtav_my_crews":"Moje ekipy","nav_gtav_my_jobs":"Moje akcje","nav_gtav_overview":"Ogólny zarys","nav_gtav_photos":"Zdjęcia","nav_gtav_playlists":"Listy gier","nav_gtav_stats":"Statystyki","nav_gtav_story":"Fabuła","nav_gtav_support":"Wsparcie","nav_gtav_videos":"Filmy","nav_gtavc_cta_buy_now":"Kup teraz","nav_gtavc_discover":"Odkryj","nav_gtavcs_discover":"Odkryj","nav_lanoire_accomplishments":"Osiągnięcia","nav_lanoire_badge_pursuit":"Pościg za odznaką","nav_lanoire_case_tracker":"Wykaz spraw","nav_lanoire_checklist":"Lista zadań","nav_lanoire_cta_buy_now":"Kup teraz","nav_lanoire_official_site":"Oficjalna strona","nav_lanoire_overview":"Ogólny zarys","nav_lanoire_pc_console":"PC/konsola","nav_lanoire_progress":"Postępy","nav_lanoire_stats":"Statystyki","nav_lanoire_support":"Wsparcie","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Kup teraz","nav_more_dropdown":"Więcej","nav_mp3_accomplishments":"Osiągnięcia","nav_mp3_career":"Kariera","nav_mp3_chapters":"Rozdziały","nav_mp3_checklist":"Lista zadań","nav_mp3_checkpoint_challenge":"Wyzwanie punktów kontrolnych","nav_mp3_crews":"Ekipy","nav_mp3_cta_buy_now":"Kup teraz","nav_mp3_featured":"Wyróżnione","nav_mp3_grinds":"Zadania","nav_mp3_leaderboards":"Rankingi","nav_mp3_multiplayer":"Tryb wieloosobowy","nav_mp3_news":"Nowości","nav_mp3_ny_minute":"W mgnieniu oka","nav_mp3_official_site":"Oficjalna strona","nav_mp3_overview":"Ogólny zarys","nav_mp3_progress":"Postępy","nav_mp3_score_attack":"Atak na wynik","nav_mp3_singleplayer":"Gra jednoosobowa","nav_mp3_specifications":"Wymagania","nav_mp3_support":"Wsparcie","nav_mp3_weapons":"Broń","nav_opens_in_new_window":"{text} (Odnośnik otworzy nowe okno)","nav_quick_access_games":"Gry","nav_quick_access_home":"Strona główna","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Osiągnięcia","nav_rdo_awards":"Nagrody","nav_rdo_benefits":"Korzyści","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Nagrody klubowe","nav_rdo_community":"Społeczność","nav_rdo_competitive_series":"Seria rywalizacji","nav_rdo_cta_buy_now":"Kup teraz","nav_rdo_customization":"Personalizacja","nav_rdo_explore":"Eksploruj","nav_rdo_getting_started":"Pierwsze kroki","nav_rdo_guides":"Przewodniki","nav_rdo_my_character":"Moja postać","nav_rdo_overview":"Ogólny zarys","nav_rdo_photos":"Zdjęcia","nav_rdo_posses":"Bandy","nav_rdo_posses_free_roam":"Bandy i gra swobodna","nav_rdo_progress":"Postępy","nav_rdo_progression":"Postępy","nav_rdo_rank_unlocks":"Nagrody za rangi","nav_rdo_roles":"Role","nav_rdo_specialist_roles":"Role specjalistyczne","nav_rdo_story_missions":"Misje fabularne","nav_rdo_support":"Wsparcie","nav_rdr_cta_buy_now":"Kup teraz","nav_rdr2_accomplishments":"Osiągnięcia","nav_rdr2_artwork":"Grafiki","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Wyzwania","nav_rdr2_chapters":"Rozdziały","nav_rdr2_character":"Postać","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Kup teraz","nav_rdr2_explore":"Eksploruj","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Miejsca","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Muzyka","nav_rdr2_online":"Online","nav_rdr2_overview":"Ogólny zarys","nav_rdr2_progress":"Postępy","nav_rdr2_stats":"Statystyki","nav_rdr2_support":"Wsparcie","nav_rdr2_van_der_linde_gang":"Gang van der Lindego","nav_rdr2_videos":"Filmy","nav_rdr2_weaponry":"Broń","nav_rdr2_wildlife":"Zwierzęta","nav_rockstargames_home":"Strona główna Rockstar Games","nav_rockstargames_logo":"Kliknij, aby otworzyć menu","nav_rsg_downloads":"Do pobrania","nav_rsg_games":"Gry","nav_rsg_newswire":"Newswire","nav_rsg_store":"Sklep","nav_rsg_support":"Wsparcie","nav_rsg_videos":"Filmy","nav_search_error_too_short":"Wyszukiwana fraza jest za krótka. Musi ona składać się z co najmniej {count} znaków.","nav_search_error_too_short_invalid_chars":"Wyszukiwana fraza zawiera nieobsługiwane znaki ({invalidChars}). Usuń je i spróbuj ponownie.","nav_support_dashboard":"Panel użytkownika","nav_support_home":"Strona główna","nav_support_service_status":"Status usługi","nav_support_submit_ticket":"Wyślij zgłoszenie","nav_tabletennis_cta_buy_now":"Kup teraz","nav_undeadnightmare_buy_now":"Kup teraz","nav_undeadnightmare_discover":"Odkryj","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informacje","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Nowości","nav_undeadnightmare_ps3_digital":"PS3 – cyfrowa","nav_undeadnightmare_specs":"Wymagania","nav_undeadnightmare_suport":"Wsparcie","nav_undeadnightmare_videos":"Filmy","nav_undeadnightmare_xbox360_digital":"Xbox 360 – cyfrowa","nav_view_all_games":"Pokaż wszystkie","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","search_action":"Szukaj","search_close_button":"Zamknij wyszukiwanie","search_open_button":"Rozpocznij wyszukiwanie","search_placeholder":"Przeszukaj Rockstar Games...","search_target_aria_label":"Wyszukaj: {target}","search_target_community":"Społeczność","search_target_crews":"Ekipy","search_target_games":"Gry","search_target_jobs":"Akcje","search_target_posts":"Wpisy","search_target_user_photos":"Zdjęcia użytkowników","search_target_user_videos":"Filmy użytkowników","search_target_users":"Użytkownicy","search_target_videos":"Filmy","social_club_text":"Social Club"},"br":{"accessibility_skip_button":"Pular para o conteúdo principal","games_menu_featured":"Jogos em destaque","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver tudo","language_selector_default":"Selecione um idioma","nav_bully_accomplishments":"Conquistas","nav_bully_cta_buy_now":"Compre já","nav_bully_game_overview":"Descobrir","nav_bully_Overview":"Suporte","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Carreiras no LinkedIn","nav_careers_contact_us":"Entre em contato","nav_careers_home":"Início","nav_careers_openings":"Vagas","nav_cta_get_launcher":"Obter Launcher","nav_gta_trilogy_accomplishments":"Conquistas","nav_gta_trilogy_cta_buy_now":"Compre já","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Visão geral","nav_gta_trilogy_support":"Suporte","nav_gta3_cta_buy_now":"Compre já","nav_gtaiv_accomplishments":"Conquistas","nav_gtaiv_cta_buy_now":"Compre já","nav_gtaiv_overview":"Descobrir","nav_gtaiv_support":"Suporte","nav_gtaiveflc_accomplishments":"Conquistas","nav_gtaiveflc_overview":"Visão geral","nav_gtaiveflc_support":"Suporte","nav_gtao_browse_crews":"Ver todos os Comandos","nav_gtao_checklist":"Lista de progresso","nav_gtao_community":"Comunidade","nav_gtao_crews":"Comandos","nav_gtao_crews_create":"Criar um Comando","nav_gtao_cta_buy_now":"Compre já","nav_gtao_discover":"Descobrir","nav_gtao_emblem_editor":"Editor de Emblema","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guias","nav_gtao_jobs":"Serviços","nav_gtao_jobs_browse_all":"Ver todos os serviços","nav_gtao_jobs_playlists":"Listas de jogos","nav_gtao_license_plate_creator":"Criador de Placas","nav_gtao_missions":"Missões","nav_gtao_my_character":"Meu personagem","nav_gtao_my_crews":"Meus Comandos","nav_gtao_my_jobs":"Meus serviços","nav_gtao_overview":"Visão geral","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estatísticas","nav_gtao_story":"História","nav_gtao_support":"Suporte","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Compre já","nav_gtav_checklist":"Lista de progresso","nav_gtav_community":"Comunidade","nav_gtav_create_crew":"Criar um Comando","nav_gtav_crews":"Comandos","nav_gtav_crews_browse_all":"Ver todos os Comandos","nav_gtav_cta_buy_now":"Compre já","nav_gtav_discover":"Descobrir","nav_gtav_emblem_editor":"Editor de Emblema","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guias","nav_gtav_jobs":"Serviços","nav_gtav_jobs_browse_all":"Ver todos os serviços","nav_gtav_licence_plate_creator":"Criador de Placas","nav_gtav_missions":"Missões","nav_gtav_my_character":"Meu personagem","nav_gtav_my_crews":"Meus Comandos","nav_gtav_my_jobs":"Meus serviços","nav_gtav_overview":"Visão geral","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de jogos","nav_gtav_stats":"Estatísticas","nav_gtav_story":"História","nav_gtav_support":"Suporte","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Compre já","nav_gtavc_discover":"Descobrir","nav_gtavcs_discover":"Descobrir","nav_lanoire_accomplishments":"Conquistas","nav_lanoire_badge_pursuit":"Distintivos escondidos","nav_lanoire_case_tracker":"Rastreador de Casos","nav_lanoire_checklist":"Lista de progresso","nav_lanoire_cta_buy_now":"Compre já","nav_lanoire_official_site":"Site oficial","nav_lanoire_overview":"Visão geral","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Estatísticas","nav_lanoire_support":"Suporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Compre já","nav_more_dropdown":"Mais","nav_mp3_accomplishments":"Conquistas","nav_mp3_career":"Carreira","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progresso","nav_mp3_checkpoint_challenge":"Desafio Checkpoint","nav_mp3_crews":"Comandos","nav_mp3_cta_buy_now":"Compre já","nav_mp3_featured":"Em destaque","nav_mp3_grinds":"Desafios","nav_mp3_leaderboards":"Placares de líderes","nav_mp3_multiplayer":"Multijogador","nav_mp3_news":"Novidades","nav_mp3_ny_minute":"Um Minuto de Nova York","nav_mp3_official_site":"Site oficial","nav_mp3_overview":"Visão geral","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Modo de Pontuação","nav_mp3_singleplayer":"Jogo individual","nav_mp3_specifications":"Especificações","nav_mp3_support":"Suporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (O link abre em uma nova janela)","nav_quick_access_games":"Jogos","nav_quick_access_home":"Início","nav_quick_access_newswire":"Boletim","nav_rdo_accomplishments":"Conquistas","nav_rdo_awards":"Prêmios","nav_rdo_benefits":"Benefícios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Prêmios do Clube","nav_rdo_community":"Comunidade","nav_rdo_competitive_series":"Séries Competitivas","nav_rdo_cta_buy_now":"Compre já","nav_rdo_customization":"Personalização","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeiros passos","nav_rdo_guides":"Guias","nav_rdo_my_character":"Meu personagem","nav_rdo_overview":"Visão geral","nav_rdo_photos":"Fotos","nav_rdo_posses":"Bandos","nav_rdo_posses_free_roam":"Bandos e Modo Livre","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressão","nav_rdo_rank_unlocks":"Desbloqueios por Nível","nav_rdo_roles":"Ofícios","nav_rdo_specialist_roles":"Ofícios Especializados","nav_rdo_story_missions":"Missões de História","nav_rdo_support":"Suporte","nav_rdr_cta_buy_now":"Compre já","nav_rdr2_accomplishments":"Conquistas","nav_rdr2_artwork":"Arte","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafios","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personagem","nav_rdr2_compendium":"Compêndio","nav_rdr2_cta_buy_now":"Compre já","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Locais","nav_rdr2_media":"Mídia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Visão geral","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Estatísticas","nav_rdr2_support":"Suporte","nav_rdr2_van_der_linde_gang":"Gangue Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Vida Selvagem","nav_rockstargames_home":"Rockstar Games – Início","nav_rockstargames_logo":"Clique para abrir o menu","nav_rsg_downloads":"Downloads","nav_rsg_games":"Jogos","nav_rsg_newswire":"Boletim","nav_rsg_store":"Loja","nav_rsg_support":"Suporte","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Seu termo de busca é curto demais. Os termos devem ter, no mínimo, {count} caracteres.","nav_search_error_too_short_invalid_chars":"Seu termo de busca contém caracteres inválidos ({invalidChars}). Remova-os e tente novamente.","nav_support_dashboard":"Meu painel","nav_support_home":"Início","nav_support_service_status":"Status do serviço","nav_support_submit_ticket":"Enviar uma solicitação","nav_tabletennis_cta_buy_now":"Compre já","nav_undeadnightmare_buy_now":"Compre já","nav_undeadnightmare_discover":"Descobrir","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informações","nav_undeadnightmare_media":"Mídia","nav_undeadnightmare_news":"Novidades","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Especificações","nav_undeadnightmare_suport":"Suporte","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver tudo","profile_selector_mugshot":"foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","quick_access_title":"Rockstar Games","sc_link_account":"Conta","sc_link_activity_feed":"Feed de Atividade","sc_link_cookies_policy":"Política de Cookies","sc_link_cookies_settings":"Configurações de Cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","search_action":"Buscar","search_close_button":"Fechar busca","search_open_button":"Abrir busca","search_placeholder":"Buscar em Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidade","search_target_crews":"Comandos","search_target_games":"Jogos","search_target_jobs":"Serviços","search_target_posts":"Publicações","search_target_user_photos":"Fotos do usuário","search_target_user_videos":"Vídeos do usuário","search_target_users":"Usuários","search_target_videos":"Vídeos","social_club_text":"Social Club"},"ru":{"accessibility_skip_button":"Перейти к основному разделу","games_menu_featured":"Избранные игры","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Показать все","language_selector_default":"Выбрать язык","nav_bully_accomplishments":"Достижения","nav_bully_cta_buy_now":"Купить","nav_bully_game_overview":"Об игре","nav_bully_Overview":"Поддержка","nav_bully_videos":"Видеоролики","nav_careers_careers_on_linkedin":"Вакансии на LinkedIn","nav_careers_contact_us":"Свяжитесь с нами","nav_careers_home":"Главная страница","nav_careers_openings":"Вакансии","nav_cta_get_launcher":"Скачать Launcher","nav_gta_trilogy_accomplishments":"Достижения","nav_gta_trilogy_cta_buy_now":"Купить","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Описание","nav_gta_trilogy_support":"Поддержка","nav_gta3_cta_buy_now":"Купить","nav_gtaiv_accomplishments":"Достижения","nav_gtaiv_cta_buy_now":"Купить","nav_gtaiv_overview":"Об игре","nav_gtaiv_support":"Поддержка","nav_gtaiveflc_accomplishments":"Достижения","nav_gtaiveflc_overview":"Описание","nav_gtaiveflc_support":"Поддержка","nav_gtao_browse_crews":"Посмотреть все банды","nav_gtao_checklist":"Трекер","nav_gtao_community":"Сообщество","nav_gtao_crews":"Банды","nav_gtao_crews_create":"Создать банду","nav_gtao_cta_buy_now":"Купить","nav_gtao_discover":"Об игре","nav_gtao_emblem_editor":"Редактор эмблем","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Руководства","nav_gtao_jobs":"Дела","nav_gtao_jobs_browse_all":"Посмотреть все дела","nav_gtao_jobs_playlists":"Плейлисты","nav_gtao_license_plate_creator":"Редактор номерных знаков","nav_gtao_missions":"Задания","nav_gtao_my_character":"Мой персонаж","nav_gtao_my_crews":"Мои банды","nav_gtao_my_jobs":"Мои дела","nav_gtao_overview":"Описание","nav_gtao_photos":"Фотографии","nav_gtao_stats":"Статистика","nav_gtao_story":"Сюжетный режим","nav_gtao_support":"Поддержка","nav_gtao_videos":"Видеоролики","nav_gtasanandreas_cta_buy_now":"Купить","nav_gtav_checklist":"Трекер","nav_gtav_community":"Сообщество","nav_gtav_create_crew":"Создать банду","nav_gtav_crews":"Банды","nav_gtav_crews_browse_all":"Посмотреть все банды","nav_gtav_cta_buy_now":"Купить","nav_gtav_discover":"Об игре","nav_gtav_emblem_editor":"Редактор эмблем","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Руководства","nav_gtav_jobs":"Дела","nav_gtav_jobs_browse_all":"Посмотреть все дела","nav_gtav_licence_plate_creator":"Редактор номерных знаков","nav_gtav_missions":"Задания","nav_gtav_my_character":"Мой персонаж","nav_gtav_my_crews":"Мои банды","nav_gtav_my_jobs":"Мои дела","nav_gtav_overview":"Описание","nav_gtav_photos":"Фотографии","nav_gtav_playlists":"Плейлисты","nav_gtav_stats":"Статистика","nav_gtav_story":"Сюжетный режим","nav_gtav_support":"Поддержка","nav_gtav_videos":"Видеоролики","nav_gtavc_cta_buy_now":"Купить","nav_gtavc_discover":"Об игре","nav_gtavcs_discover":"Об игре","nav_lanoire_accomplishments":"Достижения","nav_lanoire_badge_pursuit":"Значки","nav_lanoire_case_tracker":"Прогресс","nav_lanoire_checklist":"Трекер","nav_lanoire_cta_buy_now":"Купить","nav_lanoire_official_site":"Официальный сайт","nav_lanoire_overview":"Описание","nav_lanoire_pc_console":"На PC и консолях","nav_lanoire_progress":"Прогресс","nav_lanoire_stats":"Статистика","nav_lanoire_support":"Поддержка","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Купить","nav_more_dropdown":"Дополнительно","nav_mp3_accomplishments":"Достижения","nav_mp3_career":"Карьера","nav_mp3_chapters":"Главы","nav_mp3_checklist":"Трекер","nav_mp3_checkpoint_challenge":"Контрольные точки","nav_mp3_crews":"Банды","nav_mp3_cta_buy_now":"Купить","nav_mp3_featured":"Избранные","nav_mp3_grinds":"Подвиги","nav_mp3_leaderboards":"Списки лидеров","nav_mp3_multiplayer":"Сетевая игра","nav_mp3_news":"Новости","nav_mp3_ny_minute":"Время не ждет","nav_mp3_official_site":"Официальный сайт","nav_mp3_overview":"Описание","nav_mp3_progress":"Прогресс","nav_mp3_score_attack":"Игра на очки","nav_mp3_singleplayer":"Одиночная игра","nav_mp3_specifications":"Системные требования","nav_mp3_support":"Поддержка","nav_mp3_weapons":"Оружие","nav_opens_in_new_window":"{text} (ссылка откроется в новом окне)","nav_quick_access_games":"Игры","nav_quick_access_home":"Главная страница","nav_quick_access_newswire":"Новостная лента","nav_rdo_accomplishments":"Достижения","nav_rdo_awards":"Награды","nav_rdo_benefits":"Бонусы","nav_rdo_catalogue":"Каталог","nav_rdo_club_rewards":"Награды клуба","nav_rdo_community":"Сообщество","nav_rdo_competitive_series":"Соревновательные серии","nav_rdo_cta_buy_now":"Купить","nav_rdo_customization":"Персонализация","nav_rdo_explore":"Об игре","nav_rdo_getting_started":"С чего начать","nav_rdo_guides":"Руководства","nav_rdo_my_character":"Мой персонаж","nav_rdo_overview":"Описание","nav_rdo_photos":"Фотографии","nav_rdo_posses":"Отряды","nav_rdo_posses_free_roam":"Отряды и свободный режим","nav_rdo_progress":"Прогресс","nav_rdo_progression":"Развитие персонажа","nav_rdo_rank_unlocks":"Открываемые предметы","nav_rdo_roles":"Развитие вашей роли","nav_rdo_specialist_roles":"Роли","nav_rdo_story_missions":"Сюжетные задания","nav_rdo_support":"Поддержка","nav_rdr_cta_buy_now":"Купить","nav_rdr2_accomplishments":"Достижения","nav_rdr2_artwork":"Иллюстрации","nav_rdr2_catalogue":"Каталог","nav_rdr2_challenges":"Испытания","nav_rdr2_chapters":"Главы","nav_rdr2_character":"Игрок","nav_rdr2_compendium":"Справочник","nav_rdr2_cta_buy_now":"Купить","nav_rdr2_explore":"Об игре","nav_rdr2_gallery":"Галерея","nav_rdr2_locations":"Места на карте","nav_rdr2_media":"Медиаматериалы","nav_rdr2_music":"Музыка","nav_rdr2_online":"Сетевая игра","nav_rdr2_overview":"Описание","nav_rdr2_progress":"Прогресс","nav_rdr2_stats":"Статистика","nav_rdr2_support":"Поддержка","nav_rdr2_van_der_linde_gang":"Банда Ван дер Линде","nav_rdr2_videos":"Видеоролики","nav_rdr2_weaponry":"Оружие","nav_rdr2_wildlife":"Животные","nav_rockstargames_home":"Главная страница Rockstar Games","nav_rockstargames_logo":"Нажмите, чтобы раскрыть меню","nav_rsg_downloads":"Загрузки","nav_rsg_games":"Игры","nav_rsg_newswire":"Новостная лента","nav_rsg_store":"Магазин","nav_rsg_support":"Поддержка","nav_rsg_videos":"Видеоролики","nav_search_error_too_short":"Слишком короткий поисковый запрос. Длина запроса должна составлять не менее {count} символов.","nav_search_error_too_short_invalid_chars":"Поисковый запрос содержит некорректные символы ({invalidChars}). Удалите их и попробуйте еще раз.","nav_support_dashboard":"Панель управления","nav_support_home":"Главная страница","nav_support_service_status":"Состояние серверов","nav_support_submit_ticket":"Оставить запрос","nav_tabletennis_cta_buy_now":"Купить","nav_undeadnightmare_buy_now":"Купить","nav_undeadnightmare_discover":"Об игре","nav_undeadnightmare_gallery":"Галерея","nav_undeadnightmare_info":"Информация","nav_undeadnightmare_media":"Медиаматериалы","nav_undeadnightmare_news":"Новости","nav_undeadnightmare_ps3_digital":"PS3 - цифровая версия","nav_undeadnightmare_specs":"Системные требования","nav_undeadnightmare_suport":"Поддержка","nav_undeadnightmare_videos":"Видеоролики","nav_undeadnightmare_xbox360_digital":"Xbox 360 - цифровая версия","nav_view_all_games":"Показать все","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Профильная карта","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","quick_access_title":"Rockstar Games","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Изменить меню Social Club","search_action":"Поиск","search_close_button":"Закрыть поиск","search_open_button":"Открыть поиск","search_placeholder":"Искать в Rockstar Games...","search_target_aria_label":"Искать {target}","search_target_community":"Сообщество","search_target_crews":"Банды","search_target_games":"Игры","search_target_jobs":"Дела","search_target_posts":"Сообщения","search_target_user_photos":"Фотографии пользователей","search_target_user_videos":"Видеоролики пользователей","search_target_users":"Пользователи","search_target_videos":"Видеоролики","social_club_text":"Social Club"},"hans":{"accessibility_skip_button":"跳至主要内容","games_menu_featured":"精选游戏","games_menu_gta_online":"GTA 在线模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 在线模式","games_menu_view_all":"查看全部","language_selector_default":"选择语言","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"立即购买","nav_bully_game_overview":"发现","nav_bully_Overview":"支持","nav_bully_videos":"视频","nav_careers_careers_on_linkedin":"LinkedIn 职业","nav_careers_contact_us":"联系我们","nav_careers_home":"主页","nav_careers_openings":"空缺职位","nav_cta_get_launcher":"获取 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"立即购买","nav_gta_trilogy_gta3":"GTA 3","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"概况","nav_gta_trilogy_support":"支持","nav_gta3_cta_buy_now":"立即购买","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"立即购买","nav_gtaiv_overview":"发现","nav_gtaiv_support":"支持","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"概况","nav_gtaiveflc_support":"支持","nav_gtao_browse_crews":"浏览所有帮会","nav_gtao_checklist":"清单","nav_gtao_community":"社区","nav_gtao_crews":"帮会","nav_gtao_crews_create":"创建帮会","nav_gtao_cta_buy_now":"立即购买","nav_gtao_discover":"发现","nav_gtao_emblem_editor":"徽章编辑器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 在线模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"浏览所有差事","nav_gtao_jobs_playlists":"游玩清单","nav_gtao_license_plate_creator":"车牌制作器","nav_gtao_missions":"任务","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的帮会","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"概况","nav_gtao_photos":"照片","nav_gtao_stats":"统计数据","nav_gtao_story":"故事","nav_gtao_support":"支持","nav_gtao_videos":"视频","nav_gtasanandreas_cta_buy_now":"立即购买","nav_gtav_checklist":"清单","nav_gtav_community":"社区","nav_gtav_create_crew":"创建帮会","nav_gtav_crews":"帮会","nav_gtav_crews_browse_all":"浏览所有帮会","nav_gtav_cta_buy_now":"立即购买","nav_gtav_discover":"发现","nav_gtav_emblem_editor":"徽章编辑器","nav_gtav_gta_online":"GTA 在线模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"浏览所有差事","nav_gtav_licence_plate_creator":"车牌制作器","nav_gtav_missions":"任务","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的帮会","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"概况","nav_gtav_photos":"照片","nav_gtav_playlists":"游玩清单","nav_gtav_stats":"统计数据","nav_gtav_story":"故事","nav_gtav_support":"支持","nav_gtav_videos":"视频","nav_gtavc_cta_buy_now":"立即购买","nav_gtavc_discover":"发现","nav_gtavcs_discover":"发现","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"收集警徽","nav_lanoire_case_tracker":"案件纪录","nav_lanoire_checklist":"清单","nav_lanoire_cta_buy_now":"立即购买","nav_lanoire_official_site":"官方网站","nav_lanoire_overview":"概况","nav_lanoire_pc_console":"PC/主机","nav_lanoire_progress":"进度","nav_lanoire_stats":"统计数据","nav_lanoire_support":"支持","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"立即购买","nav_more_dropdown":"更多内容","nav_mp3_accomplishments":"成就","nav_mp3_career":"职业生涯","nav_mp3_chapters":"章节","nav_mp3_checklist":"清单","nav_mp3_checkpoint_challenge":"检查点挑战","nav_mp3_crews":"帮会","nav_mp3_cta_buy_now":"立即购买","nav_mp3_featured":"精选","nav_mp3_grinds":"挑战","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人游戏","nav_mp3_news":"新闻","nav_mp3_ny_minute":"纽约一分钟","nav_mp3_official_site":"官方网站","nav_mp3_overview":"概况","nav_mp3_progress":"进度","nav_mp3_score_attack":"分数挑战","nav_mp3_singleplayer":"单人游戏","nav_mp3_specifications":"配置","nav_mp3_support":"支持","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新窗口中打开链接）","nav_quick_access_games":"游戏","nav_quick_access_home":"主页","nav_quick_access_newswire":"新闻专线","nav_rdo_accomplishments":"成就","nav_rdo_awards":"奖章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目录","nav_rdo_club_rewards":"俱乐部奖励","nav_rdo_community":"社区","nav_rdo_competitive_series":"竞技系列","nav_rdo_cta_buy_now":"立即购买","nav_rdo_customization":"自定义","nav_rdo_explore":"探索","nav_rdo_getting_started":"新手上路","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"概况","nav_rdo_photos":"照片","nav_rdo_posses":"团队","nav_rdo_posses_free_roam":"团队和自由模式","nav_rdo_progress":"进度","nav_rdo_progression":"进程","nav_rdo_rank_unlocks":"等级解锁","nav_rdo_roles":"职业","nav_rdo_specialist_roles":"专业经销商","nav_rdo_story_missions":"故事任务","nav_rdo_support":"支持","nav_rdr_cta_buy_now":"立即购买","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"艺术作品","nav_rdr2_catalogue":"目录","nav_rdr2_challenges":"挑战","nav_rdr2_chapters":"章节","nav_rdr2_character":"角色","nav_rdr2_compendium":"生涯","nav_rdr2_cta_buy_now":"立即购买","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相册","nav_rdr2_locations":"地点","nav_rdr2_media":"媒体","nav_rdr2_music":"音乐","nav_rdr2_online":"在线模式","nav_rdr2_overview":"概况","nav_rdr2_progress":"进度","nav_rdr2_stats":"统计数据","nav_rdr2_support":"支持","nav_rdr2_van_der_linde_gang":"范德林德帮","nav_rdr2_videos":"视频","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生动物","nav_rockstargames_home":"Rockstar Games 主页","nav_rockstargames_logo":"点击打开菜单","nav_rsg_downloads":"下载","nav_rsg_games":"游戏","nav_rsg_newswire":"新闻专线","nav_rsg_store":"商店","nav_rsg_support":"支持","nav_rsg_videos":"视频","nav_search_error_too_short":"您的搜索词条太短。词条长度必须至少为 {count} 个字符。","nav_search_error_too_short_invalid_chars":"您的搜索词条包含无效字符（{invalidChars}）。请删除这些无效字符并重试。","nav_support_dashboard":"个人中心","nav_support_home":"主页","nav_support_service_status":"服务状态","nav_support_submit_ticket":"提交请求","nav_tabletennis_cta_buy_now":"立即购买","nav_undeadnightmare_buy_now":"立即购买","nav_undeadnightmare_discover":"发现","nav_undeadnightmare_gallery":"相册","nav_undeadnightmare_info":"信息","nav_undeadnightmare_media":"媒体","nav_undeadnightmare_news":"新闻","nav_undeadnightmare_ps3_digital":"PS3 - 数码版","nav_undeadnightmare_specs":"配置","nav_undeadnightmare_suport":"支持","nav_undeadnightmare_videos":"视频","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 数码版","nav_view_all_games":"查看全部","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","quick_access_title":"Rockstar Games","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","search_action":"搜索","search_close_button":"关闭搜索","search_open_button":"打开搜索","search_placeholder":"搜索 Rockstar Games……","search_target_aria_label":"搜索 {target}","search_target_community":"社区","search_target_crews":"帮会","search_target_games":"游戏","search_target_jobs":"差事","search_target_posts":"帖子","search_target_user_photos":"用户照片","search_target_user_videos":"用户视频","search_target_users":"用户","search_target_videos":"视频","social_club_text":"Social Club"},"tw":{"accessibility_skip_button":"跳至主內容","games_menu_featured":"精選遊戲","games_menu_gta_online":"Grand Theft Auto 線上模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 線上模式","games_menu_view_all":"檢視全部","language_selector_default":"選擇語言","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"馬上購買","nav_bully_game_overview":"探索","nav_bully_Overview":"支援","nav_bully_videos":"影片","nav_careers_careers_on_linkedin":"LinkedIn 上的工作機會","nav_careers_contact_us":"聯絡我們","nav_careers_home":"首頁","nav_careers_openings":"工作機會","nav_cta_get_launcher":"取得 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"馬上購買","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"總覽","nav_gta_trilogy_support":"支援","nav_gta3_cta_buy_now":"馬上購買","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"馬上購買","nav_gtaiv_overview":"探索","nav_gtaiv_support":"支援","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"總覽","nav_gtaiveflc_support":"支援","nav_gtao_browse_crews":"瀏覽全部幫會","nav_gtao_checklist":"清單","nav_gtao_community":"社群","nav_gtao_crews":"幫會","nav_gtao_crews_create":"建立幫會","nav_gtao_cta_buy_now":"馬上購買","nav_gtao_discover":"探索","nav_gtao_emblem_editor":"徽記編輯器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 線上模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"瀏覽全部差事","nav_gtao_jobs_playlists":"遊玩清單","nav_gtao_license_plate_creator":"車牌製作器","nav_gtao_missions":"任務","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的幫會","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"總覽","nav_gtao_photos":"相片","nav_gtao_stats":"統計資料","nav_gtao_story":"故事","nav_gtao_support":"支援","nav_gtao_videos":"影片","nav_gtasanandreas_cta_buy_now":"馬上購買","nav_gtav_checklist":"清單","nav_gtav_community":"社群","nav_gtav_create_crew":"建立幫會","nav_gtav_crews":"幫會","nav_gtav_crews_browse_all":"瀏覽全部幫會","nav_gtav_cta_buy_now":"馬上購買","nav_gtav_discover":"探索","nav_gtav_emblem_editor":"徽記編輯器","nav_gtav_gta_online":"GTA 線上模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"瀏覽全部差事","nav_gtav_licence_plate_creator":"車牌製作器","nav_gtav_missions":"任務","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的幫會","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"總覽","nav_gtav_photos":"相片","nav_gtav_playlists":"遊玩清單","nav_gtav_stats":"統計資料","nav_gtav_story":"故事","nav_gtav_support":"支援","nav_gtav_videos":"影片","nav_gtavc_cta_buy_now":"馬上購買","nav_gtavc_discover":"探索","nav_gtavcs_discover":"探索","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"尋找警徽","nav_lanoire_case_tracker":"案件追蹤器","nav_lanoire_checklist":"清單","nav_lanoire_cta_buy_now":"馬上購買","nav_lanoire_official_site":"官方網站","nav_lanoire_overview":"總覽","nav_lanoire_pc_console":"PC/遊戲主機","nav_lanoire_progress":"進度","nav_lanoire_stats":"統計資料","nav_lanoire_support":"支援","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"馬上購買","nav_more_dropdown":"更多","nav_mp3_accomplishments":"成就","nav_mp3_career":"生涯","nav_mp3_chapters":"章節","nav_mp3_checklist":"清單","nav_mp3_checkpoint_challenge":"檢查點挑戰","nav_mp3_crews":"幫會","nav_mp3_cta_buy_now":"馬上購買","nav_mp3_featured":"精選","nav_mp3_grinds":"挑戰","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人遊戲","nav_mp3_news":"新聞","nav_mp3_ny_minute":"分秒必爭","nav_mp3_official_site":"官方網站","nav_mp3_overview":"總覽","nav_mp3_progress":"進度","nav_mp3_score_attack":"奪取高分","nav_mp3_singleplayer":"單人遊戲","nav_mp3_specifications":"指定規格","nav_mp3_support":"支援","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（連結在新視窗開啟）","nav_quick_access_games":"遊戲","nav_quick_access_home":"首頁","nav_quick_access_newswire":"新聞放送","nav_rdo_accomplishments":"成就","nav_rdo_awards":"獎章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目錄","nav_rdo_club_rewards":"俱樂部獎勵","nav_rdo_community":"社群","nav_rdo_competitive_series":"競爭系列賽","nav_rdo_cta_buy_now":"馬上購買","nav_rdo_customization":"自訂","nav_rdo_explore":"探索","nav_rdo_getting_started":"準備開始","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"總覽","nav_rdo_photos":"相片","nav_rdo_posses":"武裝隊","nav_rdo_posses_free_roam":"武裝隊與浪跡模式","nav_rdo_progress":"進度","nav_rdo_progression":"發展","nav_rdo_rank_unlocks":"等級解鎖","nav_rdo_roles":"角色職業","nav_rdo_specialist_roles":"專家角色職業","nav_rdo_story_missions":"故事任務","nav_rdo_support":"支援","nav_rdr_cta_buy_now":"馬上購買","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"插畫","nav_rdr2_catalogue":"目錄","nav_rdr2_challenges":"挑戰","nav_rdr2_chapters":"章節","nav_rdr2_character":"角色","nav_rdr2_compendium":"圖鑑","nav_rdr2_cta_buy_now":"馬上購買","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相冊","nav_rdr2_locations":"地點","nav_rdr2_media":"媒體","nav_rdr2_music":"音樂","nav_rdr2_online":"線上模式","nav_rdr2_overview":"總覽","nav_rdr2_progress":"進度","nav_rdr2_stats":"統計資料","nav_rdr2_support":"支援","nav_rdr2_van_der_linde_gang":"范特林幫派","nav_rdr2_videos":"影片","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"Rockstar Games 首頁","nav_rockstargames_logo":"點擊以開啟選單","nav_rsg_downloads":"下載","nav_rsg_games":"遊戲","nav_rsg_newswire":"新聞放送","nav_rsg_store":"商店","nav_rsg_support":"支援","nav_rsg_videos":"影片","nav_search_error_too_short":"您的搜尋字詞太短。搜尋字詞必須至少有 {count} 個字元。","nav_search_error_too_short_invalid_chars":"您的搜尋字詞含有無效字元（{invalidChars}）。請移除後再試一次。","nav_support_dashboard":"我的設定畫面","nav_support_home":"首頁","nav_support_service_status":"服務狀態","nav_support_submit_ticket":"提交請求","nav_tabletennis_cta_buy_now":"馬上購買","nav_undeadnightmare_buy_now":"馬上購買","nav_undeadnightmare_discover":"探索","nav_undeadnightmare_gallery":"相冊","nav_undeadnightmare_info":"資訊","nav_undeadnightmare_media":"媒體","nav_undeadnightmare_news":"新聞","nav_undeadnightmare_ps3_digital":"PS3：數位版","nav_undeadnightmare_specs":"指定規格","nav_undeadnightmare_suport":"支援","nav_undeadnightmare_videos":"影片","nav_undeadnightmare_xbox360_digital":"Xbox 360：數位版","nav_view_all_games":"檢視全部","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"設定檔卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","quick_access_title":"Rockstar Games","sc_link_account":"帳號","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","search_action":"搜尋","search_close_button":"關閉搜尋","search_open_button":"開啟搜尋","search_placeholder":"搜尋 Rockstar Games……","search_target_aria_label":"搜尋{target}","search_target_community":"社群","search_target_crews":"幫會","search_target_games":"遊戲","search_target_jobs":"差事","search_target_posts":"貼文","search_target_user_photos":"使用者相片","search_target_user_videos":"使用者影片","search_target_users":"使用者","search_target_videos":"影片","social_club_text":"Social Club"}}'),
        _e = (0, r.vU)({
          nav_rockstargames_home: {
            id: "nav_rockstargames_home",
            defaultMessage: "Rockstar Games Home"
          },
          nav_rockstargames_logo: {
            id: "nav_rockstargames_logo",
            defaultMessage: "Click to open menu"
          },
          nav_gtao_overview: {
            id: "nav_gtao_overview",
            defaultMessage: "Overview"
          },
          nav_gtao_gtao: {
            id: "nav_gtao_gtao",
            defaultMessage: "GTA Online"
          },
          nav_gtao_discover: {
            id: "nav_gtao_discover",
            defaultMessage: "Discover"
          },
          nav_gtao_my_character: {
            id: "nav_gtao_my_character",
            defaultMessage: "My Character"
          },
          nav_gtao_guides: {
            id: "nav_gtao_guides",
            defaultMessage: "Guides"
          },
          nav_gtao_license_plate_creator: {
            id: "nav_gtao_license_plate_creator",
            defaultMessage: "License Plate Creator"
          },
          nav_gtao_story: {
            id: "nav_gtao_story",
            defaultMessage: "Story"
          },
          nav_gtao_stats: {
            id: "nav_gtao_stats",
            defaultMessage: "Stats"
          },
          nav_gtao_missions: {
            id: "nav_gtao_missions",
            defaultMessage: "Missions"
          },
          nav_gtao_checklist: {
            id: "nav_gtao_checklist",
            defaultMessage: "Checklist"
          },
          nav_gtao_gta_plus: {
            id: "nav_gtao_gta_plus",
            defaultMessage: "GTA+"
          },
          nav_gtao_community: {
            id: "nav_gtao_community",
            defaultMessage: "Community"
          },
          nav_gtao_jobs: {
            id: "nav_gtao_jobs",
            defaultMessage: "Jobs"
          },
          nav_gtao_my_jobs: {
            id: "nav_gtao_my_jobs",
            defaultMessage: "My jobs"
          },
          nav_gtao_jobs_browse_all: {
            id: "nav_gtao_jobs_browse_all",
            defaultMessage: "Browse all jobs"
          },
          nav_gtao_crews: {
            id: "nav_gtao_crews",
            defaultMessage: "Crews"
          },
          nav_gtao_my_crews: {
            id: "nav_gtao_my_crews",
            defaultMessage: "My Crews"
          },
          nav_gtao_browse_crews: {
            id: "nav_gtao_browse_crews",
            defaultMessage: "Browse All Crews"
          },
          nav_gtao_crews_create: {
            id: "nav_gtao_crews_create",
            defaultMessage: "Create a Crew"
          },
          nav_gtao_emblem_editor: {
            id: "nav_gtao_emblem_editor",
            defaultMessage: "Emblem Editor"
          },
          nav_gtao_jobs_playlists: {
            id: "nav_gtao_jobs_playlists",
            defaultMessage: "Playlists"
          },
          nav_gtao_photos: {
            id: "nav_gtao_photos",
            defaultMessage: "Photos"
          },
          nav_gtao_videos: {
            id: "nav_gtao_videos",
            defaultMessage: "Videos"
          },
          nav_gtao_support: {
            id: "nav_gtao_support",
            defaultMessage: "Support"
          },
          nav_gtao_cta_buy_now: {
            id: "nav_gtao_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gta_trilogy_overview: {
            id: "nav_gta_trilogy_overview",
            defaultMessage: "Overview"
          },
          nav_gta_trilogy_accomplishments: {
            id: "nav_gta_trilogy_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gta_trilogy_gtasa: {
            id: "nav_gta_trilogy_gtasa",
            defaultMessage: "GTA: San Andreas"
          },
          nav_gta_trilogy_gtavc: {
            id: "nav_gta_trilogy_gtavc",
            defaultMessage: "GTA: Vice City"
          },
          nav_gta_trilogy_gta3: {
            id: "nav_gta_trilogy_gta3",
            defaultMessage: "GTA III"
          },
          nav_gta_trilogy_support: {
            id: "nav_gta_trilogy_support",
            defaultMessage: "Support"
          },
          nav_gta_trilogy_cta_buy_now: {
            id: "nav_gta_trilogy_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_bully_game_overview: {
            id: "nav_bully_game_overview",
            defaultMessage: "Discover"
          },
          nav_bully_videos: {
            id: "nav_bully_videos",
            defaultMessage: "Videos"
          },
          nav_bully_accomplishments: {
            id: "nav_bully_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_bully_support: {
            id: "nav_bully_Overview",
            defaultMessage: "Support"
          },
          nav_bully_cta_buy_now: {
            id: "nav_bully_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rsg_games: {
            id: "nav_rsg_games",
            defaultMessage: "Games"
          },
          nav_rsg_newswire: {
            id: "nav_rsg_newswire",
            defaultMessage: "Newswire"
          },
          nav_rsg_videos: {
            id: "nav_rsg_videos",
            defaultMessage: "Videos"
          },
          nav_rsg_downloads: {
            id: "nav_rsg_downloads",
            defaultMessage: "Downloads"
          },
          nav_rsg_store: {
            id: "nav_rsg_store",
            defaultMessage: "Store"
          },
          nav_rsg_support: {
            id: "nav_rsg_support",
            defaultMessage: "Support"
          },
          nav_rsg_cta_get_launcher: {
            id: "nav_cta_get_launcher",
            defaultMessage: "Get Launcher"
          },
          nav_careers_home: {
            id: "nav_careers_home",
            defaultMessage: "Home"
          },
          nav_careers_openings: {
            id: "nav_careers_openings",
            defaultMessage: "Openings"
          },
          nav_careers_contact_us: {
            id: "nav_careers_contact_us",
            defaultMessage: "Contact us"
          },
          nav_careers_careers_on_linkedin: {
            id: "nav_careers_careers_on_linkedin",
            defaultMessage: "Careers on LinkedIn"
          },
          nav_gta3_cta_buy_now: {
            id: "nav_gta3_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtaiv_overview: {
            id: "nav_gtaiv_overview",
            defaultMessage: "Discover"
          },
          nav_gtaiv_accomplishments: {
            id: "nav_gtaiv_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiv_support: {
            id: "nav_gtaiv_support",
            defaultMessage: "Support"
          },
          nav_gtaiv_cta_buy_now: {
            id: "nav_gtaiv_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtav_overview: {
            id: "nav_gtav_overview",
            defaultMessage: "Overview"
          },
          nav_gtav_gta_online: {
            id: "nav_gtav_gta_online",
            defaultMessage: "GTA Online"
          },
          nav_gtav_discover: {
            id: "nav_gtav_discover",
            defaultMessage: "Discover"
          },
          nav_gtav_my_character: {
            id: "nav_gtav_my_character",
            defaultMessage: "My Character"
          },
          nav_gtav_guides: {
            id: "nav_gtav_guides",
            defaultMessage: "Guides"
          },
          nav_gtav_licence_plate_creator: {
            id: "nav_gtav_licence_plate_creator",
            defaultMessage: "License Plate Creator"
          },
          nav_gtav_story: {
            id: "nav_gtav_story",
            defaultMessage: "Story"
          },
          nav_gtav_stats: {
            id: "nav_gtav_stats",
            defaultMessage: "Stats"
          },
          nav_gtav_missions: {
            id: "nav_gtav_missions",
            defaultMessage: "Missions"
          },
          nav_gtav_checklist: {
            id: "nav_gtav_checklist",
            defaultMessage: "Checklist"
          },
          nav_gtav_gta_plus: {
            id: "nav_gtav_gta_plus",
            defaultMessage: "GTA+"
          },
          nav_gtav_community: {
            id: "nav_gtav_community",
            defaultMessage: "Community"
          },
          nav_gtav_jobs: {
            id: "nav_gtav_jobs",
            defaultMessage: "Jobs"
          },
          nav_gtav_jobs_browse_all: {
            id: "nav_gtav_jobs_browse_all",
            defaultMessage: "Browse all jobs"
          },
          nav_gtav_my_jobs: {
            id: "nav_gtav_my_jobs",
            defaultMessage: "My Jobs"
          },
          nav_gtav_playlists: {
            id: "nav_gtav_playlists",
            defaultMessage: "Playlists"
          },
          nav_gtav_crews: {
            id: "nav_gtav_crews",
            defaultMessage: "Crews"
          },
          nav_gtav_crews_browse_all: {
            id: "nav_gtav_crews_browse_all",
            defaultMessage: "Browse All Crews"
          },
          nav_gtav_my_crews: {
            id: "nav_gtav_my_crews",
            defaultMessage: "My Crews"
          },
          nav_gtav_create_crew: {
            id: "nav_gtav_create_crew",
            defaultMessage: "Create a Crew"
          },
          nav_gtav_emblem_editor: {
            id: "nav_gtav_emblem_editor",
            defaultMessage: "Emblem Editor"
          },
          nav_gtav_photos: {
            id: "nav_gtav_photos",
            defaultMessage: "Photos"
          },
          nav_gtav_videos: {
            id: "nav_gtav_videos",
            defaultMessage: "Videos"
          },
          nav_gtav_support: {
            id: "nav_gtav_support",
            defaultMessage: "Support"
          },
          nav_gtav_cta_buy_now: {
            id: "nav_gtav_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtaiveflc_overview: {
            id: "nav_gtaiveflc_overview",
            defaultMessage: "Overview"
          },
          nav_gtaiveflc_accomplishments: {
            id: "nav_gtaiveflc_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiveflc_support: {
            id: "nav_gtaiveflc_support",
            defaultMessage: "Support"
          },
          nav_gtasanandreas_cta_buy_now: {
            id: "nav_gtasanandreas_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtavc_discover: {
            id: "nav_gtavc_discover",
            defaultMessage: "Discover"
          },
          nav_gtavc_cta_buy_now: {
            id: "nav_gtavc_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtavcs_discover: {
            id: "nav_gtavcs_discover",
            defaultMessage: "Discover"
          },
          nav_lanoire_overview: {
            id: "nav_lanoire_overview",
            defaultMessage: "Overview"
          },
          nav_lanoire_official_site: {
            id: "nav_lanoire_official_site",
            defaultMessage: "Official Site"
          },
          nav_lanoire_progress: {
            id: "nav_lanoire_progress",
            defaultMessage: "Progress"
          },
          nav_lanoire_pc_console: {
            id: "nav_lanoire_pc_console",
            defaultMessage: "PC/Console"
          },
          nav_lanoire_case_tracker: {
            id: "nav_lanoire_case_tracker",
            defaultMessage: "Case Tracker"
          },
          nav_lanoire_checklist: {
            id: "nav_lanoire_checklist",
            defaultMessage: "Checklist"
          },
          nav_lanoire_stats: {
            id: "nav_lanoire_stats",
            defaultMessage: "Stats"
          },
          nav_lanoire_accomplishments: {
            id: "nav_lanoire_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_lanoire_badge_pursuit: {
            id: "nav_lanoire_badge_pursuit",
            defaultMessage: "Badge Pursuit"
          },
          nav_lanoire_vr_case_files: {
            id: "nav_lanoire_vr_case_files",
            defaultMessage: "VR Case Files"
          },
          nav_lanoire_support: {
            id: "nav_lanoire_support",
            defaultMessage: "Support"
          },
          nav_lanoire_cta_buy_now: {
            id: "nav_lanoire_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_tabletennis_cta_buy_now: {
            id: "nav_tabletennis_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_mp3_overview: {
            id: "nav_mp3_overview",
            defaultMessage: "Overview"
          },
          nav_mp3_official_site: {
            id: "nav_mp3_official_site",
            defaultMessage: "Official Site"
          },
          nav_mp3_news: {
            id: "nav_mp3_news",
            defaultMessage: "News"
          },
          nav_mp3_progress: {
            id: "nav_mp3_progress",
            defaultMessage: "Progress"
          },
          nav_mp3_accomplishments: {
            id: "nav_mp3_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_mp3_singleplayer: {
            id: "nav_mp3_singleplayer",
            defaultMessage: "Singleplayer"
          },
          nav_mp3_multiplayer: {
            id: "nav_mp3_multiplayer",
            defaultMessage: "Multiplayer"
          },
          nav_mp3_career: {
            id: "nav_mp3_career",
            defaultMessage: "Career"
          },
          nav_mp3_checklist: {
            id: "nav_mp3_checklist",
            defaultMessage: "Checklist"
          },
          nav_mp3_grinds: {
            id: "nav_mp3_grinds",
            defaultMessage: "Grinds"
          },
          nav_mp3_weapons: {
            id: "nav_mp3_weapons",
            defaultMessage: "Weapons"
          },
          nav_mp3_chapters: {
            id: "nav_mp3_chapters",
            defaultMessage: "Chapters"
          },
          nav_mp3_leaderboards: {
            id: "nav_mp3_leaderboards",
            defaultMessage: "Leaderboards"
          },
          nav_mp3_crews: {
            id: "nav_mp3_crews",
            defaultMessage: "Crews"
          },
          nav_mp3_score_attack: {
            id: "nav_mp3_score_attack",
            defaultMessage: "Score Attack"
          },
          nav_mp3_ny_minute: {
            id: "nav_mp3_ny_minute",
            defaultMessage: "New York Minute"
          },
          nav_mp3_checkpoint_challenge: {
            id: "nav_mp3_checkpoint_challenge",
            defaultMessage: "Checkpoint Challenge"
          },
          nav_mp3_featured: {
            id: "nav_mp3_featured",
            defaultMessage: "Featured"
          },
          nav_mp3_specifications: {
            id: "nav_mp3_specifications",
            defaultMessage: "Specifications"
          },
          nav_mp3_support: {
            id: "nav_mp3_support",
            defaultMessage: "Support"
          },
          nav_mp3_cta_buy_now: {
            id: "nav_mp3_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_midnightclubla_buy_now: {
            id: "nav_midnightclubla_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdr_cta_buy_now: {
            id: "nav_rdr_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdo_overview: {
            id: "nav_rdo_overview",
            defaultMessage: "Overview"
          },
          nav_rdo_explore: {
            id: "nav_rdo_explore",
            defaultMessage: "Explore"
          },
          nav_rdo_getting_started: {
            id: "nav_rdo_getting_started",
            defaultMessage: "Getting Started"
          },
          nav_rdo_specialist_roles: {
            id: "nav_rdo_specialist_roles",
            defaultMessage: "Specialist Roles"
          },
          nav_rdo_story_missions: {
            id: "nav_rdo_story_missions",
            defaultMessage: "Story Missions"
          },
          nav_rdo_posses_free_roam: {
            id: "nav_rdo_posses_free_roam",
            defaultMessage: "Posses and Free Roam"
          },
          nav_rdo_competitive_series: {
            id: "nav_rdo_competitive_series",
            defaultMessage: "Competitive Series"
          },
          nav_rdo_customization: {
            id: "nav_rdo_customization",
            defaultMessage: "Customization"
          },
          nav_rdo_progression: {
            id: "nav_rdo_progression",
            defaultMessage: "Progression"
          },
          nav_rdo_progress: {
            id: "nav_rdo_progress",
            defaultMessage: "Progress"
          },
          nav_rdo_my_character: {
            id: "nav_rdo_my_character",
            defaultMessage: "My Character"
          },
          nav_rdo_roles: {
            id: "nav_rdo_roles",
            defaultMessage: "Roles"
          },
          nav_rdo_rank_unlocks: {
            id: "nav_rdo_rank_unlocks",
            defaultMessage: "Rank Unlocks"
          },
          nav_rdo_awards: {
            id: "nav_rdo_awards",
            defaultMessage: "Awards"
          },
          nav_rdo_accomplishments: {
            id: "nav_rdo_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_rdo_benefits: {
            id: "nav_rdo_benefits",
            defaultMessage: "Benefits"
          },
          nav_rdo_guides: {
            id: "nav_rdo_guides",
            defaultMessage: "Guides"
          },
          nav_rdo_club_rewards: {
            id: "nav_rdo_club_rewards",
            defaultMessage: "Club Rewards"
          },
          nav_rdo_community: {
            id: "nav_rdo_community",
            defaultMessage: "Community"
          },
          nav_rdo_posses: {
            id: "nav_rdo_posses",
            defaultMessage: "Posses"
          },
          nav_rdo_photos: {
            id: "nav_rdo_photos",
            defaultMessage: "Photos"
          },
          nav_rdo_catalogue: {
            id: "nav_rdo_catalogue",
            defaultMessage: "Catalogue"
          },
          nav_rdo_support: {
            id: "nav_rdo_support",
            defaultMessage: "Support"
          },
          nav_rdo_cta_buy_now: {
            id: "nav_rdo_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdr2_overview: {
            id: "nav_rdr2_overview",
            defaultMessage: "Overview"
          },
          nav_rdr2_explore: {
            id: "nav_rdr2_explore",
            defaultMessage: "Explore"
          },
          nav_rdr2_van_der_linde_gang: {
            id: "nav_rdr2_van_der_linde_gang",
            defaultMessage: "The Van der Linde Gang"
          },
          nav_rdr2_locations: {
            id: "nav_rdr2_locations",
            defaultMessage: "Locations"
          },
          nav_rdr2_wildlife: {
            id: "nav_rdr2_wildlife",
            defaultMessage: "Wildlife"
          },
          nav_rdr2_weaponry: {
            id: "nav_rdr2_weaponry",
            defaultMessage: "Weaponry"
          },
          nav_rdr2_progress: {
            id: "nav_rdr2_progress",
            defaultMessage: "Progress"
          },
          nav_rdr2_stats: {
            id: "nav_rdr2_stats",
            defaultMessage: "Stats"
          },
          nav_rdr2_chapters: {
            id: "nav_rdr2_chapters",
            defaultMessage: "Chapters"
          },
          nav_rdr2_challenges: {
            id: "nav_rdr2_challenges",
            defaultMessage: "Challenges"
          },
          nav_rdr2_character: {
            id: "nav_rdr2_character",
            defaultMessage: "Character"
          },
          nav_rdr2_compendium: {
            id: "nav_rdr2_compendium",
            defaultMessage: "Compendium"
          },
          nav_rdr2_accomplishments: {
            id: "nav_rdr2_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_rdr2_media: {
            id: "nav_rdr2_media",
            defaultMessage: "Media"
          },
          nav_rdr2_gallery: {
            id: "nav_rdr2_gallery",
            defaultMessage: "Gallery"
          },
          nav_rdr2_artwork: {
            id: "nav_rdr2_artwork",
            defaultMessage: "Artwork"
          },
          nav_rdr2_videos: {
            id: "nav_rdr2_videos",
            defaultMessage: "Videos"
          },
          nav_rdr2_music: {
            id: "nav_rdr2_music",
            defaultMessage: "Music"
          },
          nav_rdr2_online: {
            id: "nav_rdr2_online",
            defaultMessage: "Online"
          },
          nav_rdr2_catalogue: {
            id: "nav_rdr2_catalogue",
            defaultMessage: "Catalogue"
          },
          nav_rdr2_support: {
            id: "nav_rdr2_support",
            defaultMessage: "Support"
          },
          nav_rdr2_cta_buy_now: {
            id: "nav_rdr2_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_discover: {
            id: "nav_undeadnightmare_discover",
            defaultMessage: "Discover"
          },
          nav_undeadnightmare_info: {
            id: "nav_undeadnightmare_info",
            defaultMessage: "Info"
          },
          nav_undeadnightmare_media: {
            id: "nav_undeadnightmare_media",
            defaultMessage: "Media"
          },
          nav_undeadnightmare_videos: {
            id: "nav_undeadnightmare_videos",
            defaultMessage: "Videos"
          },
          nav_undeadnightmare_gallery: {
            id: "nav_undeadnightmare_gallery",
            defaultMessage: "Gallery"
          },
          nav_undeadnightmare_news: {
            id: "nav_undeadnightmare_news",
            defaultMessage: "News"
          },
          nav_undeadnightmare_specs: {
            id: "nav_undeadnightmare_specs",
            defaultMessage: "Specifications"
          },
          nav_undeadnightmare_suport: {
            id: "nav_undeadnightmare_suport",
            defaultMessage: "Support"
          },
          nav_undeadnightmare_buy_now: {
            id: "nav_undeadnightmare_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_ps3_digital: {
            id: "nav_undeadnightmare_ps3_digital",
            defaultMessage: "PS3 - Digital"
          },
          nav_undeadnightmare_xbox360_digital: {
            id: "nav_undeadnightmare_xbox360_digital",
            defaultMessage: "Xbox 360 - Digital"
          },
          nav_support_home: {
            id: "nav_support_home",
            defaultMessage: "Home"
          },
          nav_support_service_status: {
            id: "nav_support_service_status",
            defaultMessage: "Service Status"
          },
          nav_support_submit_ticket: {
            id: "nav_support_submit_ticket",
            defaultMessage: "Submit a Ticket"
          },
          nav_support_dashboard: {
            id: "nav_support_dashboard",
            defaultMessage: "My Dashboard"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            defaultMessage: "View All"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr_online: {
            id: "games_menu_rdr_online",
            defaultMessage: "Red Dead Online"
          },
          search_action: {
            id: "search_action",
            defaultMessage: "Search"
          },
          search_open_button: {
            id: "search_open_button",
            defaultMessage: "Open Search"
          },
          search_close_button: {
            id: "search_close_button",
            defaultMessage: "Close Search"
          },
          search_placeholder: {
            id: "search_placeholder",
            defaultMessage: "Search Rockstar Games..."
          },
          search_target_aria_label: {
            id: "search_target_aria_label",
            defaultMessage: "Search {target}"
          },
          search_target_games: {
            id: "search_target_games",
            defaultMessage: "Games"
          },
          search_target_posts: {
            id: "search_target_posts",
            defaultMessage: "Posts"
          },
          search_target_videos: {
            id: "search_target_videos",
            defaultMessage: "Videos"
          },
          search_target_community: {
            id: "search_target_community",
            defaultMessage: "Community"
          },
          search_target_users: {
            id: "search_target_users",
            defaultMessage: "Users"
          },
          search_target_crews: {
            id: "search_target_crews",
            defaultMessage: "Crews"
          },
          search_target_jobs: {
            id: "search_target_jobs",
            defaultMessage: "Jobs"
          },
          search_target_user_photos: {
            id: "search_target_user_photos",
            defaultMessage: "User Photos"
          },
          search_target_user_videos: {
            id: "search_target_user_videos",
            defaultMessage: "User Videos"
          },
          nav_view_all_games: {
            id: "nav_view_all_games",
            defaultMessage: "View All"
          },
          nav_quick_access_home: {
            id: "nav_quick_access_home",
            defaultMessage: "Home"
          },
          nav_quick_access_games: {
            id: "nav_quick_access_games",
            defaultMessage: "Games"
          },
          nav_quick_access_newswire: {
            id: "nav_quick_access_newswire",
            defaultMessage: "Newswire"
          },
          nav_more_dropdown: {
            id: "nav_more_dropdown",
            defaultMessage: "More"
          },
          quick_access_title: {
            id: "quick_access_title",
            defaultMessage: "Rockstar Games"
          },
          nav_search_error_too_short: {
            id: "nav_search_error_too_short",
            defaultMessage: "Your search query is too short. Queries must be at least {count} characters long."
          },
          nav_search_error_invalid_chars: {
            id: "nav_search_error_too_short_invalid_chars",
            defaultMessage: "Your search query contains invalid characters ({invalidChars}). Remove these and try again."
          },
          nav_opens_in_new_window: {
            id: "nav_opens_in_new_window",
            defaultMessage: "{text} (Link opens in new window)"
          },
          accessibility_skip_button: {
            id: "accessibility_skip_button",
            defaultMessage: "Skip to main content"
          }
        }),
        ce = [{
          domain: u.z.www,
          path: "/search"
        }],
        le = (0, _.createContext)({
          navigationState: {
            navigation: ""
          },
          setNavigationState: () => {},
          environment: {
            id: "",
            sites: {
              www: "",
              socialClub: "",
              support: "",
              store: ""
            },
            cookieIdentifier: ""
          },
          navigateAction: () => {},
          navigationData: {
            site: "",
            brand: "rockstar",
            links: [],
            appearancePaths: {
              [u.z.www]: ["/*"],
              [u.z.socialClub]: ["/*"]
            },
            cta: {
              text: "",
              intlMessage: {
                id: "id",
                description: "description",
                defaultMessage: "defaultMessage"
              },
              variant: "nav-internal",
              dataTestId: "not_set",
              location: {
                domain: u.z.www,
                path: ""
              },
              ga: "cta_buy"
            }
          },
          location: window.location,
          locale: "",
          rockstarUser: {
            id: 0,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          },
          openedDropdown: null,
          setOpenedDropdown: () => {},
          isSearchPage: !1
        }),
        de = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, _.useState)({
            navigation: ""
          }), [s, r] = (0, _.useState)(null), [i, o] = (0, _.useState)(!1), [c, d] = (0, _.useMemo)((() => h()), []), {
            hash: g,
            pathname: m
          } = (0, Q.useLocation)(), {
            data: v
          } = X(), {
            location: p
          } = window, f = (0, u.Z)(), k = (0, _.useMemo)((() => ({
            navigationState: t,
            setNavigationState: n,
            environment: f,
            location: p,
            locale: c,
            rockstarUser: v,
            openedDropdown: s,
            setOpenedDropdown: r,
            isSearchPage: i
          })), [t, c, JSON.stringify(p), f, s, i, v]);
          return (0, _.useEffect)((() => {
            d(c.iso)
          }), []), (0, _.useEffect)((() => {
            const e = g?.replace("#", "");
            if (!e) return () => {};
            const a = setInterval((() => {
                const t = document.getElementById(e);
                t && (clearInterval(a), window.scrollTo({
                  top: t.offsetTop,
                  behavior: "smooth"
                }))
              }), 200),
              t = setTimeout((() => clearInterval(a)), 1e4);
            return () => {
              clearTimeout(t), clearInterval(a)
            }
          }), [g]), (0, _.useEffect)((() => {
            const e = f.currentSite?.site,
              a = ce.some((a => a.domain === e && m.startsWith(a.path)));
            o(a)
          }), [m]), (0, l.jsx)(le.Provider, {
            value: k,
            children: a
          })
        },
        ge = () => {
          const e = (0, _.useContext)(le);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        me = () => {
          const e = (0, _.useContext)(le);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        ve = () => {
          const e = (0, _.useContext)(le);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: a,
            setOpenedDropdown: t
          } = e;
          return [a, e => {
            t(e === a ? null : e)
          }]
        },
        ue = () => {
          const e = (0, _.useContext)(le);
          if (void 0 === e) throw new Error("useIsSearchPage must be used within a Navigation Provider");
          return e.isSearchPage
        },
        pe = [{
          intlMessage: _e.games_menu_gta_v,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/V.jpg",
          location: {
            domain: u.z.www,
            path: "/gta-v"
          },
          dataTestId: "gtav"
        }, {
          intlMessage: _e.games_menu_gta_online,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/GTAOnline.jpg",
          location: {
            domain: u.z.www,
            path: "/gta-online"
          },
          dataTestId: "gtao"
        }, {
          intlMessage: _e.games_menu_gta_trilogy,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/GTATrilogy.jpg",
          location: {
            domain: u.z.www,
            path: "/GTATrilogy"
          },
          dataTestId: "gtaTrilogy"
        }, {
          intlMessage: _e.games_menu_rdr_2,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg",
          location: {
            domain: u.z.www,
            path: "/reddeadredemption2"
          },
          dataTestId: "rdr2"
        }, {
          intlMessage: _e.games_menu_rdr_online,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/reddeadonline.jpg",
          location: {
            domain: u.z.www,
            path: "/reddeadonline"
          },
          dataTestId: "rdo"
        }];
      var fe = t(5370),
        he = t.n(fe);
      const ke = {
          globalNavigationRoot: "rockstargames-modules-core-headera95a9e2c93190e6b0eb886211d3beb68",
          large: "rockstargames-modules-core-headere72b6798a0d8012bd8f16236087e7f7a",
          badge: "rockstargames-modules-core-headerea0b713e5b81a79d10265e5981b2d7cf",
          globalNavigationSpacer: "rockstargames-modules-core-headerfa88e95f42080c6adec74d487de431f5",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headerc04a845b0f1bbd7409cc61915a742a85"
        },
        be = {
          site: "beaterator",
          appearancePaths: {
            [u.z.www]: ["/games/beaterator/*"]
          },
          brand: "beaterator",
          links: []
        },
        we = {
          site: "bully",
          appearancePaths: {
            [u.z.www]: ["/games/bully/*"],
            [u.z.socialClub]: ["/games/bully/*"]
          },
          brand: "bully",
          links: [{
            text: _e.nav_bully_game_overview.defaultMessage,
            intlMessage: _e.nav_bully_game_overview,
            type: "nav-internal",
            location: {
              domain: u.z.www,
              path: "/games/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: _e.nav_bully_accomplishments.defaultMessage,
            intlMessage: _e.nav_bully_accomplishments,
            type: "nav-internal",
            location: {
              domain: u.z.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: _e.nav_bully_support.defaultMessage,
            intlMessage: _e.nav_bully_support,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: _e.nav_bully_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_bully_cta_buy_now,
            target: "_blank",
            location: {
              domain: u.z.store,
              path: "/game/buy-bully-scholarship-edition"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        },
        ye = {
          site: "careers",
          appearancePaths: {
            [u.z.www]: ["/careers/*"]
          },
          brand: "careers",
          links: [{
            text: _e.nav_careers_home.defaultMessage,
            intlMessage: _e.nav_careers_home,
            type: "nav-internal",
            location: {
              domain: u.z.www,
              path: "/careers"
            }
          }, {
            text: _e.nav_careers_openings.defaultMessage,
            intlMessage: _e.nav_careers_openings,
            type: "nav-internal",
            location: {
              domain: u.z.www,
              path: "/careers/openings"
            }
          }, {
            text: _e.nav_careers_contact_us.defaultMessage,
            intlMessage: _e.nav_careers_contact_us,
            type: "nav-internal",
            location: {
              domain: u.z.www,
              path: "/careers#contact-us"
            }
          }, {
            text: _e.nav_careers_careers_on_linkedin.defaultMessage,
            intlMessage: _e.nav_careers_careers_on_linkedin,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com/company/rockstar-games/",
              path: "/company/rockstar-games/"
            }
          }]
        },
        xe = {
          site: "gta",
          appearancePaths: {
            [u.z.www]: ["/games/gta/*"]
          },
          brand: "gta",
          links: []
        },
        Me = {
          site: "gta2",
          appearancePaths: {
            [u.z.www]: ["/games/gta2/*"]
          },
          brand: "gta2",
          links: []
        },
        Se = {
          site: "grandtheftauto3",
          appearancePaths: {
            [u.z.www]: ["/games/grandtheftauto3/*"]
          },
          brand: "gta3",
          links: [],
          cta: {
            text: _e.nav_gta3_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_gta3_cta_buy_now,
            variant: "highlight",
            dataTestId: "gta3BuyNowCta",
            target: "_blank",
            location: {
              domain: u.z.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        Ne = {
          site: "gta-iv",
          appearancePaths: {
            [u.z.www]: ["/games/IV/*"],
            [u.z.socialClub]: ["/games/gtaiv/*"]
          },
          brand: "gta4",
          links: [{
            text: _e.nav_gtaiv_overview.defaultMessage,
            intlMessage: _e.nav_gtaiv_overview,
            type: "nav-internal",
            location: {
              domain: u.z.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: _e.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: _e.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: u.z.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: _e.nav_gtaiv_support.defaultMessage,
            intlMessage: _e.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: _e.nav_gtaiv_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_gtaiv_cta_buy_now,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: u.z.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            dataTestId: "gtaivPurchaseLink"
          }
        },
        Ce = {
          site: "gta-v",
          appearancePaths: {
            [u.z.www]: ["/gta-v/*"],
            [u.z.socialClub]: ["/games/gtav/*"]
          },
          brand: "gta5",
          links: [{
            text: _e.nav_gtav_overview.defaultMessage,
            intlMessage: _e.nav_gtav_overview,
            type: "nav-internal",
            location: {
              domain: u.z.www,
              path: "/gta-v"
            },
            dataTestId: "gtavLink"
          }, {
            text: _e.nav_gtav_gta_online.defaultMessage,
            intlMessage: _e.nav_gtav_gta_online,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: _e.nav_gtav_discover.defaultMessage,
              intlMessage: _e.nav_gtav_discover,
              type: "nav-internal",
              location: {
                domain: u.z.www,
                path: "/gta-online"
              },
              dataTestId: "gtaoLink"
            }, {
              text: _e.nav_gtav_my_character.defaultMessage,
              intlMessage: _e.nav_gtav_my_character,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              dataTestId: "gtaoButton"
            }, {
              text: _e.nav_gtav_guides.defaultMessage,
              intlMessage: _e.nav_gtav_guides,
              type: "nav-internal",
              location: {
                domain: u.z.www,
                path: "/gta-online/guides"
              },
              dataTestId: "gtaoGuidesLink"
            }, {
              text: _e.nav_gtav_licence_plate_creator.defaultMessage,
              intlMessage: _e.nav_gtav_licence_plate_creator,
              type: "nav-internal",
              location: {
                domain: u.z.www,
                path: "/gta-online/license-plates"
              },
              dataTestId: "gtaoLicensePlatesLink"
            }]
          }, {
            text: _e.nav_gtav_story.defaultMessage,
            intlMessage: _e.nav_gtav_story,
            type: "nav-dropdown",
            dataTestId: "gtavSpLink",
            children: [{
              text: _e.nav_gtav_stats.defaultMessage,
              intlMessage: _e.nav_gtav_stats,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/overview/"
              },
              dataTestId: "gtavSpOverviewButton"
            }, {
              text: _e.nav_gtav_missions.defaultMessage,
              intlMessage: _e.nav_gtav_missions,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/missions/"
              },
              dataTestId: "gtavSpMissionsButton"
            }, {
              text: _e.nav_gtav_checklist.defaultMessage,
              intlMessage: _e.nav_gtav_checklist,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/checklist"
              },
              dataTestId: "gtavSpChecklistButton"
            }]
          }, {
            text: _e.nav_gtav_gta_plus.defaultMessage,
            intlMessage: _e.nav_gtav_gta_plus,
            type: "nav-internal",
            location: {
              domain: u.z.www,
              path: "/gta-plus"
            },
            dataTestId: "gtav+Link"
          }, {
            text: _e.nav_gtav_community.defaultMessage,
            intlMessage: _e.nav_gtav_community,
            type: "nav-dropdown",
            dataTestId: "gtavCommunityDropdown",
            children: [{
              text: _e.nav_gtav_jobs.defaultMessage,
              intlMessage: _e.nav_gtav_jobs,
              type: "nav-dropdown",
              dataTestId: "gtavJobsDropdown",
              children: [{
                text: _e.nav_gtav_jobs_browse_all.defaultMessage,
                intlMessage: _e.nav_gtav_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavAllJobsButtons",
                location: {
                  domain: u.z.socialClub,
                  path: "/jobs"
                }
              }, {
                text: _e.nav_gtav_my_jobs.defaultMessage,
                intlMessage: _e.nav_gtav_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavMyJobsButtons",
                location: {
                  domain: u.z.socialClub,
                  path: "/jobs/?dateRange=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: _e.nav_gtav_playlists.defaultMessage,
                intlMessage: _e.nav_gtav_playlists,
                type: "nav-internal",
                dataTestId: "gtavPlaylistsButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: _e.nav_gtav_crews.defaultMessage,
              intlMessage: _e.nav_gtav_crews,
              type: "nav-dropdown",
              dataTestId: "gtavCrewsDropdown",
              children: [{
                text: _e.nav_gtav_crews_browse_all.defaultMessage,
                intlMessage: _e.nav_gtav_crews_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavBrowseCrewsButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/crews"
                }
              }, {
                text: _e.nav_gtav_my_crews.defaultMessage,
                intlMessage: _e.nav_gtav_my_crews,
                dataTestId: "gtavMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: u.z.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: _e.nav_gtav_create_crew.defaultMessage,
                intlMessage: _e.nav_gtav_create_crew,
                type: "nav-internal",
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: _e.nav_gtav_emblem_editor.defaultMessage,
                intlMessage: _e.nav_gtav_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/emblems/new"
                }
              }]
            }, {
              text: _e.nav_gtav_photos.defaultMessage,
              intlMessage: _e.nav_gtav_photos,
              type: "nav-internal",
              dataTestId: "gtaViewPhotosButton",
              location: {
                domain: u.z.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: _e.nav_gtav_videos.defaultMessage,
              intlMessage: _e.nav_gtav_videos,
              dataTestId: "gtaViewVideosButton",
              type: "nav-internal",
              location: {
                domain: u.z.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: _e.nav_gtav_support.defaultMessage,
            intlMessage: _e.nav_gtav_support,
            dataTestId: "gtaSupportLink",
            type: "nav-external",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: _e.nav_gtav_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_gtav_cta_buy_now,
            location: {
              domain: u.z.www,
              path: "/gta-v?info=order"
            },
            ga: "cta_buy",
            dataTestId: "gtavPurchaseLink"
          }
        },
        je = {
          site: "grandtheftauto-gba",
          appearancePaths: {
            [u.z.www]: ["/games/grandtheftauto-gba/*"]
          },
          brand: "gtaadvance",
          links: []
        },
        Te = {
          site: "chinatownwars",
          appearancePaths: {
            [u.z.www]: ["/games/chinatownwars/*"]
          },
          brand: "gtactw",
          links: []
        },
        ze = {
          site: "episodesfromlibertycity",
          appearancePaths: {
            [u.z.www]: ["/games/episodesfromlibertycity/*"]
          },
          brand: "gtaiveflc",
          links: [{
            text: _e.nav_gtaiv_overview.defaultMessage,
            intlMessage: _e.nav_gtaiv_overview,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: u.z.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: _e.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: _e.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: u.z.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: _e.nav_gtaiv_support.defaultMessage,
            intlMessage: _e.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/115001614848"
            }
          }]
        },
        Ie = {
          site: "libertycitystories",
          appearancePaths: {
            [u.z.www]: ["/games/libertycitystories/*"]
          },
          brand: "gtalcs",
          links: []
        },
        Le = {
          site: "gtalondon",
          appearancePaths: {
            [u.z.www]: ["/games/gtalondon/*"]
          },
          brand: "gtalondon",
          links: []
        },
        Ae = {
          site: "gta-online",
          appearancePaths: {
            [u.z.www]: ["/gta-online/*"],
            [u.z.socialClub]: ["/member/:username/crews/*", "/crews/*", "/crew/*", "/jobs/*", "*/jobs/*", "/videos/*{titleOverride}", "/photos/*{titleOverride}", "/emblems/*", "/games/gtav/:platform/career/overview/gtaonline/*"]
          },
          brand: "gtaonline",
          links: [{
            text: _e.nav_gtao_overview.defaultMessage,
            intlMessage: _e.nav_gtao_overview,
            type: "nav-internal",
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: u.z.www,
              path: "/gta-v"
            }
          }, {
            text: _e.nav_gtao_gtao.defaultMessage,
            intlMessage: _e.nav_gtao_gtao,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: _e.nav_gtao_discover.defaultMessage,
              intlMessage: _e.nav_gtao_discover,
              type: "nav-internal",
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: u.z.www,
                path: "/gta-online"
              }
            }, {
              text: _e.nav_gtao_my_character.defaultMessage,
              intlMessage: _e.nav_gtao_my_character,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoOverviewButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              }
            }, {
              text: _e.nav_gtao_guides.defaultMessage,
              intlMessage: _e.nav_gtao_guides,
              type: "nav-internal",
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: u.z.www,
                path: "/gta-online/guides"
              }
            }, {
              text: _e.nav_gtao_license_plate_creator.defaultMessage,
              intlMessage: _e.nav_gtao_license_plate_creator,
              type: "nav-internal",
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: u.z.www,
                path: "/gta-online/license-plates"
              }
            }]
          }, {
            text: _e.nav_gtao_story.defaultMessage,
            intlMessage: _e.nav_gtao_story,
            dataTestId: "gtaoStoryDropdown",
            type: "nav-dropdown",
            children: [{
              text: _e.nav_gtao_stats.defaultMessage,
              intlMessage: _e.nav_gtao_stats,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoCareerButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/overview/"
              }
            }, {
              text: _e.nav_gtao_missions.defaultMessage,
              intlMessage: _e.nav_gtao_missions,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoMissionsButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/missions/"
              }
            }, {
              text: _e.nav_gtao_checklist.defaultMessage,
              intlMessage: _e.nav_gtao_checklist,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoChecklistButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/checklist"
              }
            }]
          }, {
            text: _e.nav_gtao_gta_plus.defaultMessage,
            intlMessage: _e.nav_gtao_gta_plus,
            type: "nav-internal",
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: u.z.www,
              path: "/gta-plus"
            }
          }, {
            text: _e.nav_gtao_community.defaultMessage,
            intlMessage: _e.nav_gtao_community,
            type: "nav-dropdown",
            dataTestId: "gtaoCommunityDropdown",
            children: [{
              text: _e.nav_gtao_jobs.defaultMessage,
              intlMessage: _e.nav_gtao_jobs,
              type: "nav-dropdown",
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: _e.nav_gtao_jobs_browse_all.defaultMessage,
                intlMessage: _e.nav_gtao_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/jobs"
                }
              }, {
                text: _e.nav_gtao_my_jobs.defaultMessage,
                intlMessage: _e.nav_gtao_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/jobs/?dateRange=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: _e.nav_gtao_jobs_playlists.defaultMessage,
                intlMessage: _e.nav_gtao_jobs_playlists,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: _e.nav_gtao_crews.defaultMessage,
              intlMessage: _e.nav_gtao_crews,
              type: "nav-dropdown",
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: _e.nav_gtao_browse_crews.defaultMessage,
                intlMessage: _e.nav_gtao_browse_crews,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/crews"
                }
              }, {
                text: _e.nav_gtao_my_crews.defaultMessage,
                intlMessage: _e.nav_gtao_my_crews,
                type: "nav-internal",
                dataTestId: "gtaoMyCrewsButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: _e.nav_gtao_crews_create.defaultMessage,
                intlMessage: _e.nav_gtao_crews_create,
                type: "nav-internal",
                dataTestId: "gtaoCreateCrewButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: _e.nav_gtao_emblem_editor.defaultMessage,
                intlMessage: _e.nav_gtao_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtaoCreateEmblemButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/emblems/new"
                }
              }]
            }, {
              text: _e.nav_gtao_photos.defaultMessage,
              intlMessage: _e.nav_gtao_photos,
              type: "nav-internal",
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: u.z.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: _e.nav_gtao_videos.defaultMessage,
              intlMessage: _e.nav_gtao_videos,
              type: "nav-internal",
              dataTestId: "gtaoVideosButton",
              location: {
                domain: u.z.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: _e.nav_gtao_support.defaultMessage,
            intlMessage: _e.nav_gtao_support,
            type: "nav-external",
            dataTestId: "gtaoSupportLink",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: _e.nav_gtao_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_gtao_cta_buy_now,
            dataTestId: "gtaoPurchaseLink",
            location: {
              domain: u.z.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy"
          }
        },
        Ee = {
          site: "gta-plus",
          appearancePaths: {
            [u.z.www]: ["/gta-plus/*"],
            [u.z.socialClub]: ["*/crews/*", "*/jobs/*", "/emblems/*"]
          },
          brand: "gtaplus",
          links: [{
            text: _e.nav_gtao_overview.defaultMessage,
            intlMessage: _e.nav_gtao_overview,
            type: "nav-internal",
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: u.z.www,
              path: "/gta-v"
            }
          }, {
            text: _e.nav_gtao_gtao.defaultMessage,
            intlMessage: _e.nav_gtao_gtao,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: _e.nav_gtao_discover.defaultMessage,
              intlMessage: _e.nav_gtao_discover,
              type: "nav-internal",
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: u.z.www,
                path: "/gta-online"
              }
            }, {
              text: _e.nav_gtao_my_character.defaultMessage,
              intlMessage: _e.nav_gtao_my_character,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoOverviewButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              }
            }, {
              text: _e.nav_gtao_guides.defaultMessage,
              intlMessage: _e.nav_gtao_guides,
              type: "nav-internal",
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: u.z.www,
                path: "/gta-online/guides"
              }
            }, {
              text: _e.nav_gtao_license_plate_creator.defaultMessage,
              intlMessage: _e.nav_gtao_license_plate_creator,
              type: "nav-internal",
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: u.z.www,
                path: "/gta-online/license-plates"
              }
            }]
          }, {
            text: _e.nav_gtao_story.defaultMessage,
            intlMessage: _e.nav_gtao_story,
            dataTestId: "gtaoStoryDropdown",
            type: "nav-dropdown",
            children: [{
              text: _e.nav_gtao_stats.defaultMessage,
              intlMessage: _e.nav_gtao_stats,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoCareerButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/overview/"
              }
            }, {
              text: _e.nav_gtao_missions.defaultMessage,
              intlMessage: _e.nav_gtao_missions,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoMissionsButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/missions/"
              }
            }, {
              text: _e.nav_gtao_checklist.defaultMessage,
              intlMessage: _e.nav_gtao_checklist,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoChecklistButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtav/career/checklist"
              }
            }]
          }, {
            text: _e.nav_gtao_gta_plus.defaultMessage,
            intlMessage: _e.nav_gtao_gta_plus,
            type: "nav-internal",
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: u.z.www,
              path: "/gta-plus"
            }
          }, {
            text: _e.nav_gtao_community.defaultMessage,
            intlMessage: _e.nav_gtao_community,
            type: "nav-dropdown",
            dataTestId: "gtaoCommunityDropdown",
            children: [{
              text: _e.nav_gtao_jobs.defaultMessage,
              intlMessage: _e.nav_gtao_jobs,
              type: "nav-dropdown",
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: _e.nav_gtao_jobs_browse_all.defaultMessage,
                intlMessage: _e.nav_gtao_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/jobs"
                }
              }, {
                text: _e.nav_gtao_my_jobs.defaultMessage,
                intlMessage: _e.nav_gtao_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: u.z.socialClub,
                  path: " /jobs/?filter=me&sort=likes&title=gtav"
                }
              }, {
                text: _e.nav_gtao_jobs_playlists.defaultMessage,
                intlMessage: _e.nav_gtao_jobs_playlists,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: _e.nav_gtao_crews.defaultMessage,
              intlMessage: _e.nav_gtao_crews,
              type: "nav-dropdown",
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: _e.nav_gtao_browse_crews.defaultMessage,
                intlMessage: _e.nav_gtao_browse_crews,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/crews"
                }
              }, {
                text: _e.nav_gtao_my_crews.defaultMessage,
                intlMessage: _e.nav_gtao_my_crews,
                type: "nav-internal",
                dataTestId: "gtaoMyCrewsButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: _e.nav_gtao_crews_create.defaultMessage,
                intlMessage: _e.nav_gtao_crews_create,
                type: "nav-internal",
                dataTestId: "gtaoCreateCrewButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: _e.nav_gtao_emblem_editor.defaultMessage,
                intlMessage: _e.nav_gtao_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtaoCreateEmblemButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/emblems/new"
                }
              }]
            }, {
              text: _e.nav_gtao_photos.defaultMessage,
              intlMessage: _e.nav_gtao_photos,
              type: "nav-internal",
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: u.z.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: _e.nav_gtao_videos.defaultMessage,
              intlMessage: _e.nav_gtao_videos,
              type: "nav-internal",
              dataTestId: "gtaoVideosButton",
              location: {
                domain: u.z.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: _e.nav_gtao_support.defaultMessage,
            intlMessage: _e.nav_gtao_support,
            type: "nav-external",
            dataTestId: "gtaoSupportLink",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: _e.nav_gtao_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_gtao_cta_buy_now,
            dataTestId: "gtaoPurchaseLink",
            location: {
              domain: u.z.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy"
          }
        },
        Pe = {
          site: "sanandreas",
          appearancePaths: {
            [u.z.www]: ["/games/sanandreas/*"]
          },
          brand: "gtasanandreas",
          links: [],
          cta: {
            text: _e.nav_gtasanandreas_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_gtasanandreas_cta_buy_now,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: u.z.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            dataTestId: "gtaSanAndreasPurchaseLink"
          }
        },
        De = {
          site: "gta-trilogy",
          appearancePaths: {
            [u.z.www]: ["/GTATrilogy/*"],
            [u.z.socialClub]: ["/games/gtasa/*", "/games/gtavc/*", "/games/gta3/*"]
          },
          brand: "gtatrilogy",
          links: [{
            text: _e.nav_gta_trilogy_overview.defaultMessage,
            intlMessage: _e.nav_gta_trilogy_overview,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: u.z.www,
              path: "/GTATrilogy"
            }
          }, {
            text: _e.nav_gta_trilogy_accomplishments.defaultMessage,
            intlMessage: _e.nav_gta_trilogy_accomplishments,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: _e.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: _e.nav_gta_trilogy_gtasa,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: _e.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: _e.nav_gta_trilogy_gtavc,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: _e.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: _e.nav_gta_trilogy_gta3,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: _e.nav_gta_trilogy_support.defaultMessage,
            intlMessage: _e.nav_gta_trilogy_support,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: _e.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: _e.nav_gta_trilogy_gtasa,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: u.z.support,
                path: "/categories/115001620287"
              }
            }, {
              text: _e.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: _e.nav_gta_trilogy_gtavc,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: u.z.support,
                path: "/categories/115001619868"
              }
            }, {
              text: _e.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: _e.nav_gta_trilogy_gta3,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: u.z.support,
                path: "/categories/115001619948"
              }
            }]
          }],
          cta: {
            text: _e.nav_gta_trilogy_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_gta_trilogy_cta_buy_now,
            dataTestId: "gtaTrilogyPurchaseLink",
            target: "_blank",
            location: {
              domain: u.z.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        Ve = {
          site: "vicecity",
          appearancePaths: {
            [u.z.www]: ["/games/vicecity/*"]
          },
          brand: "gtavc",
          links: [],
          cta: {
            text: _e.nav_gtavc_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_gtavc_cta_buy_now,
            variant: "highlight",
            dataTestId: "gtaVcBuyNowLink",
            target: "_blank",
            location: {
              domain: u.z.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        Oe = {
          site: "vicecitystories",
          appearancePaths: {
            [u.z.www]: ["/games/vicecitystories/*"]
          },
          brand: "gtavcs",
          links: []
        },
        Ge = {
          site: "la-noire",
          appearancePaths: {
            [u.z.www]: ["/lanoire/*", "/games/lanoire/*"],
            [u.z.socialClub]: ["/games/lanvr/*", "/games/lan/*"]
          },
          brand: "lanoire",
          links: [{
            text: _e.nav_lanoire_overview.defaultMessage,
            intlMessage: _e.nav_lanoire_overview,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: u.z.www,
              path: "/games/lanoire"
            }
          }, {
            text: _e.nav_lanoire_progress.defaultMessage,
            intlMessage: _e.nav_lanoire_progress,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: _e.nav_lanoire_pc_console.defaultMessage,
              intlMessage: _e.nav_lanoire_pc_console,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: _e.nav_lanoire_case_tracker.defaultMessage,
                intlMessage: _e.nav_lanoire_case_tracker,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: _e.nav_lanoire_checklist.defaultMessage,
                intlMessage: _e.nav_lanoire_checklist,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: _e.nav_lanoire_stats.defaultMessage,
                intlMessage: _e.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: _e.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: _e.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: u.z.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: _e.nav_lanoire_badge_pursuit.defaultMessage,
                intlMessage: _e.nav_lanoire_badge_pursuit,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: _e.nav_lanoire_vr_case_files.defaultMessage,
              intlMessage: _e.nav_lanoire_vr_case_files,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: _e.nav_lanoire_stats.defaultMessage,
                intlMessage: _e.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: _e.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: _e.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: u.z.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: _e.nav_lanoire_support.defaultMessage,
            intlMessage: _e.nav_lanoire_support,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: _e.nav_lanoire_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_lanoire_cta_buy_now,
            dataTestId: "lanoirePurchaseLink",
            location: {
              domain: u.z.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy"
          }
        },
        Be = {
          site: "manhunt",
          appearancePaths: {
            [u.z.www]: ["/games/manhunt/*"]
          },
          brand: "manhunt",
          links: []
        },
        Re = {
          site: "manhunt2",
          appearancePaths: {
            [u.z.www]: ["/games/manhunt2/*"]
          },
          brand: "manhunt2",
          links: []
        },
        Fe = {
          site: "maxpayne",
          appearancePaths: {
            [u.z.www]: ["/games/maxpayne/*"]
          },
          brand: "maxpayne",
          links: []
        },
        $e = {
          site: "maxpayne2",
          appearancePaths: {
            [u.z.www]: ["/games/maxpayne2/*"]
          },
          brand: "maxpayne2",
          links: []
        },
        qe = {
          site: "maxpayne3",
          appearancePaths: {
            [u.z.www]: ["/games/maxpayne3/*"],
            [u.z.socialClub]: ["/games/maxpayne3/*"]
          },
          brand: "maxpayne3",
          links: [{
            text: _e.nav_mp3_overview.defaultMessage,
            intlMessage: _e.nav_mp3_overview,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: u.z.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: _e.nav_mp3_progress.defaultMessage,
            intlMessage: _e.nav_mp3_progress,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: _e.nav_mp3_accomplishments.defaultMessage,
              intlMessage: _e.nav_mp3_accomplishments,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: _e.nav_mp3_singleplayer.defaultMessage,
              intlMessage: _e.nav_mp3_singleplayer,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: _e.nav_mp3_career.defaultMessage,
                intlMessage: _e.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: _e.nav_mp3_checklist.defaultMessage,
                intlMessage: _e.nav_mp3_checklist,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: _e.nav_mp3_grinds.defaultMessage,
                intlMessage: _e.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: _e.nav_mp3_chapters.defaultMessage,
                intlMessage: _e.nav_mp3_chapters,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: _e.nav_mp3_weapons.defaultMessage,
                intlMessage: _e.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: _e.nav_mp3_leaderboards.defaultMessage,
                intlMessage: _e.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: _e.nav_mp3_multiplayer.defaultMessage,
              intlMessage: _e.nav_mp3_multiplayer,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: _e.nav_mp3_career.defaultMessage,
                intlMessage: _e.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: _e.nav_mp3_grinds.defaultMessage,
                intlMessage: _e.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: _e.nav_mp3_weapons.defaultMessage,
                intlMessage: _e.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: _e.nav_mp3_leaderboards.defaultMessage,
                intlMessage: _e.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: _e.nav_mp3_crews.defaultMessage,
              intlMessage: _e.nav_mp3_crews,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: _e.nav_mp3_multiplayer.defaultMessage,
                intlMessage: _e.nav_mp3_multiplayer,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: _e.nav_mp3_score_attack.defaultMessage,
                intlMessage: _e.nav_mp3_score_attack,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: _e.nav_mp3_ny_minute.defaultMessage,
                intlMessage: _e.nav_mp3_ny_minute,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: _e.nav_mp3_checkpoint_challenge.defaultMessage,
                intlMessage: _e.nav_mp3_checkpoint_challenge,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: _e.nav_mp3_featured.defaultMessage,
                intlMessage: _e.nav_mp3_featured,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: u.z.socialClub,
                  path: "/games/maxpayne3/crews/rivalries"
                }
              }]
            }]
          }, {
            text: _e.nav_mp3_support.defaultMessage,
            intlMessage: _e.nav_mp3_support,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: _e.nav_mp3_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_mp3_cta_buy_now,
            dataTestId: "mp3PurchaseLink",
            location: {
              domain: u.z.www,
              path: "/games/maxpayne3/order"
            },
            ga: "cta_buy"
          }
        },
        Ue = {
          site: "midnightclub",
          appearancePaths: {
            [u.z.www]: ["/games/midnightclub/*"]
          },
          brand: "midnightclubstreetracing",
          links: []
        },
        He = {
          site: "midnightclub2",
          appearancePaths: {
            [u.z.www]: ["/games/midnightclub2/*"]
          },
          brand: "midnightclub2",
          links: []
        },
        We = {
          site: "midnightclub3",
          appearancePaths: {
            [u.z.www]: ["/games/midnightclub3/*"]
          },
          brand: "midnightclub3dub",
          links: []
        },
        Je = {
          site: "midnightclubLA",
          appearancePaths: {
            [u.z.www]: ["/games/midnightclubLA/*"]
          },
          brand: "midnightclubla",
          links: [],
          cta: {
            text: _e.nav_midnightclubla_buy_now.defaultMessage,
            intlMessage: _e.nav_midnightclubla_buy_now,
            dataTestId: "midnightClubLaBuyNowCta",
            location: {
              domain: "https://marketplace.xbox.com",
              path: "/en-US/Product/Midnight-Club-LA/66acd000-77fe-1000-9115-d802545407f8"
            },
            ga: "cta_buy"
          }
        },
        Ze = {
          site: "oni",
          appearancePaths: {
            [u.z.www]: ["/games/oni/*"]
          },
          brand: "oni",
          links: []
        },
        Xe = {
          site: "rdo",
          appearancePaths: {
            [u.z.www]: ["/reddeadonline/*"],
            [u.z.socialClub]: ["/games/rdo/*"]
          },
          brand: "reddeadonline",
          links: [{
            text: _e.nav_rdo_overview.defaultMessage,
            intlMessage: _e.nav_rdo_overview,
            type: "nav-internal",
            dataTestId: "rdoLink",
            location: {
              domain: u.z.www,
              path: "/reddeadonline"
            }
          }, {
            text: _e.nav_rdo_explore.defaultMessage,
            intlMessage: _e.nav_rdo_explore,
            type: "nav-dropdown",
            dataTestId: "rdoExploreDropdown",
            children: [{
              text: _e.nav_rdo_getting_started.defaultMessage,
              intlMessage: _e.nav_rdo_getting_started,
              type: "nav-internal",
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: u.z.www,
                path: "/reddeadonline/features/getting-started"
              }
            }, {
              text: _e.nav_rdo_specialist_roles.defaultMessage,
              intlMessage: _e.nav_rdo_specialist_roles,
              type: "nav-internal",
              dataTestId: "rdoRolesLink",
              location: {
                domain: u.z.www,
                path: "/reddeadonline/features/roles"
              }
            }, {
              text: _e.nav_rdo_story_missions.defaultMessage,
              intlMessage: _e.nav_rdo_story_missions,
              type: "nav-internal",
              dataTestId: "rdoLOOLink",
              location: {
                domain: u.z.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              }
            }, {
              text: _e.nav_rdo_posses_free_roam.defaultMessage,
              intlMessage: _e.nav_rdo_posses_free_roam,
              type: "nav-internal",
              dataTestId: "rdoPossesLink",
              location: {
                domain: u.z.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              }
            }, {
              text: _e.nav_rdo_competitive_series.defaultMessage,
              intlMessage: _e.nav_rdo_competitive_series,
              type: "nav-internal",
              dataTestId: "rdoSAELink",
              location: {
                domain: u.z.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              }
            }, {
              text: _e.nav_rdo_customization.defaultMessage,
              intlMessage: _e.nav_rdo_customization,
              type: "nav-internal",
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: u.z.www,
                path: "/reddeadonline/features/customization"
              }
            }, {
              text: _e.nav_rdo_progression.defaultMessage,
              intlMessage: _e.nav_rdo_progression,
              type: "nav-internal",
              dataTestId: "rdoProgressLink",
              location: {
                domain: u.z.www,
                path: "/reddeadonline/features/rank-and-fortune"
              }
            }]
          }, {
            text: _e.nav_rdo_progress.defaultMessage,
            intlMessage: _e.nav_rdo_progress,
            type: "nav-dropdown",
            dataTestId: "rdoProgressDropdown",
            children: [{
              text: _e.nav_rdo_my_character.defaultMessage,
              intlMessage: _e.nav_rdo_my_character,
              type: "nav-internal",
              dataTestId: "rdoOverviewButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdo/overview"
              }
            }, {
              text: _e.nav_rdo_roles.defaultMessage,
              intlMessage: _e.nav_rdo_roles,
              type: "nav-internal",
              dataTestId: "rdoRolesButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdo/roles"
              }
            }, {
              text: _e.nav_rdo_club_rewards.defaultMessage,
              intlMessage: _e.nav_rdo_club_rewards,
              type: "nav-internal",
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdo/clubrewards"
              }
            }, {
              text: _e.nav_rdo_rank_unlocks.defaultMessage,
              intlMessage: _e.nav_rdo_rank_unlocks,
              type: "nav-internal",
              dataTestId: "rdoRankButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdo/rank"
              }
            }, {
              text: _e.nav_rdo_awards.defaultMessage,
              intlMessage: _e.nav_rdo_awards,
              type: "nav-internal",
              dataTestId: "rdoAwardsButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdo/awards"
              }
            }, {
              text: _e.nav_rdo_accomplishments.defaultMessage,
              intlMessage: _e.nav_rdo_accomplishments,
              type: "nav-internal",
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdo/achievements"
              }
            }, {
              text: _e.nav_rdo_benefits.defaultMessage,
              intlMessage: _e.nav_rdo_benefits,
              type: "nav-internal",
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdo/benefits"
              }
            }]
          }, {
            text: _e.nav_rdo_community.defaultMessage,
            intlMessage: _e.nav_rdo_community,
            type: "nav-dropdown",
            dataTestId: "rdoCommunityDropdown",
            children: [{
              text: _e.nav_rdo_posses.defaultMessage,
              intlMessage: _e.nav_rdo_posses,
              type: "nav-internal",
              dataTestId: "rdoPosseButton",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdo/posse"
              }
            }, {
              text: _e.nav_rdo_photos.defaultMessage,
              intlMessage: _e.nav_rdo_photos,
              type: "nav-internal",
              dataTestId: "rdoPhotosButton",
              location: {
                domain: u.z.socialClub,
                path: "/photos/?title=rdr2"
              }
            }]
          }, {
            text: _e.nav_rdo_catalogue.defaultMessage,
            intlMessage: _e.nav_rdo_catalogue,
            type: "nav-external",
            dataTestId: "rdoCatalogueButton",
            target: "_blank",
            location: {
              domain: u.z.socialClub,
              path: "games/rdr2/catalogue/online/"
            }
          }, {
            text: _e.nav_rdo_support.defaultMessage,
            intlMessage: _e.nav_rdo_support,
            type: "nav-external",
            dataTestId: "rdoSupportLink",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: _e.nav_rdo_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_rdo_cta_buy_now,
            dataTestId: "rdoPurchaseLink",
            target: "_blank",
            location: {
              domain: u.z.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        },
        Ke = {
          site: "reddeadredemption",
          appearancePaths: {
            [u.z.www]: ["/reddeadredemption/*"]
          },
          brand: "reddeadredemption",
          links: [],
          cta: {
            text: _e.nav_rdr_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_rdr_cta_buy_now,
            dataTestId: "rsrBuyNowCta",
            location: {
              domain: u.z.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy"
          }
        },
        Qe = {
          site: "rdr2",
          appearancePaths: {
            [u.z.www]: ["/reddeadredemption2/*", "/games/reddeadredemption2/*"],
            [u.z.socialClub]: ["/games/rdr2/*"]
          },
          brand: "reddeadredemption2",
          links: [{
            text: _e.nav_rdr2_overview.defaultMessage,
            intlMessage: _e.nav_rdr2_overview,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: u.z.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: _e.nav_rdr2_explore.defaultMessage,
            intlMessage: _e.nav_rdr2_explore,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: _e.nav_rdr2_van_der_linde_gang.defaultMessage,
              intlMessage: _e.nav_rdr2_van_der_linde_gang,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: u.z.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: _e.nav_rdr2_locations.defaultMessage,
              intlMessage: _e.nav_rdr2_locations,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: u.z.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: _e.nav_rdr2_wildlife.defaultMessage,
              intlMessage: _e.nav_rdr2_wildlife,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: u.z.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: _e.nav_rdr2_weaponry.defaultMessage,
              intlMessage: _e.nav_rdr2_weaponry,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: u.z.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: _e.nav_rdr2_progress.defaultMessage,
            intlMessage: _e.nav_rdr2_progress,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: _e.nav_rdr2_stats.defaultMessage,
              intlMessage: _e.nav_rdr2_stats,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: _e.nav_rdr2_chapters.defaultMessage,
              intlMessage: _e.nav_rdr2_chapters,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: _e.nav_rdr2_challenges.defaultMessage,
              intlMessage: _e.nav_rdr2_challenges,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: _e.nav_rdr2_character.defaultMessage,
              intlMessage: _e.nav_rdr2_character,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: _e.nav_rdr2_compendium.defaultMessage,
              intlMessage: _e.nav_rdr2_compendium,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: _e.nav_rdr2_accomplishments.defaultMessage,
              intlMessage: _e.nav_rdr2_accomplishments,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: u.z.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: _e.nav_rdr2_media.defaultMessage,
            intlMessage: _e.nav_rdr2_media,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: _e.nav_rdr2_gallery.defaultMessage,
              intlMessage: _e.nav_rdr2_gallery,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: u.z.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: _e.nav_rdr2_artwork.defaultMessage,
              intlMessage: _e.nav_rdr2_artwork,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: u.z.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: _e.nav_rdr2_videos.defaultMessage,
              intlMessage: _e.nav_rdr2_videos,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: u.z.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: _e.nav_rdr2_music.defaultMessage,
              intlMessage: _e.nav_rdr2_music,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: u.z.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: _e.nav_rdr2_online.defaultMessage,
            intlMessage: _e.nav_rdr2_online,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: u.z.www,
              path: "/reddeadonline"
            }
          }, {
            text: _e.nav_rdr2_catalogue.defaultMessage,
            intlMessage: _e.nav_rdr2_catalogue,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: u.z.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: _e.nav_rdr2_support.defaultMessage,
            intlMessage: _e.nav_rdr2_support,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: _e.nav_rdr2_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_rdr2_cta_buy_now,
            dataTestId: "rdr2StoreLink",
            target: "_blank",
            location: {
              domain: u.z.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        },
        Ye = {
          site: "undeadnightmare",
          appearancePaths: {
            [u.z.www]: ["/games/undeadnightmare/*"]
          },
          brand: "reddeadredemptionundeadnightmare",
          links: []
        },
        ea = {
          site: "reddeadrevolver",
          appearancePaths: {
            [u.z.www]: ["/games/reddeadrevolver/*"]
          },
          brand: "reddeadrevolver",
          links: []
        },
        aa = {
          site: "rsg",
          appearancePaths: {
            [u.z.www]: ["/*"],
            [u.z.socialClub]: ["/*"]
          },
          brand: null,
          links: [{
            text: _e.nav_rsg_games.defaultMessage,
            intlMessage: _e.nav_rsg_games,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: _e.nav_rsg_newswire.defaultMessage,
            intlMessage: _e.nav_rsg_newswire,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: u.z.www,
              path: "/newswire"
            }
          }, {
            text: _e.nav_rsg_videos.defaultMessage,
            intlMessage: _e.nav_rsg_videos,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: u.z.www,
              path: "/videos"
            }
          }, {
            text: _e.nav_rsg_downloads.defaultMessage,
            intlMessage: _e.nav_rsg_downloads,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: u.z.www,
              path: "/downloads"
            }
          }, {
            text: _e.nav_rsg_store.defaultMessage,
            intlMessage: _e.nav_rsg_store,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: u.z.store,
              path: null
            }
          }, {
            text: _e.nav_rsg_support.defaultMessage,
            intlMessage: _e.nav_rsg_support,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: u.z.support,
              path: null
            }
          }],
          cta: {
            text: _e.nav_rsg_cta_get_launcher.defaultMessage,
            intlMessage: _e.nav_rsg_cta_get_launcher,
            variant: "highlight",
            dataTestId: "launcherLink",
            location: {
              domain: u.z.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download"
          }
        },
        ta = {
          site: "stateofemergency",
          appearancePaths: {
            [u.z.www]: ["/games/stateofemergency/*"]
          },
          brand: "stateofemergency",
          links: []
        },
        na = {
          site: "skateanddestroy",
          appearancePaths: {
            [u.z.www]: ["/games/skateanddestroy/*"]
          },
          brand: "thrashersad",
          links: []
        },
        sa = {
          site: "smugglersrun",
          appearancePaths: {
            [u.z.www]: ["/games/smugglersrun/*"]
          },
          brand: "smugglersrun",
          links: []
        },
        ra = {
          site: "smugglersrun2",
          appearancePaths: {
            [u.z.www]: ["/games/smugglersrun2/*"]
          },
          brand: "smugglersrun2hostileterritory",
          links: []
        },
        ia = {
          site: "smugglersrunwarzones",
          appearancePaths: {
            [u.z.www]: ["/games/smugglersrunwarzones/*"]
          },
          brand: "smugglersrunwarzones",
          links: []
        },
        oa = {
          site: "support",
          appearancePaths: {
            [u.z.support]: ["/*"]
          },
          brand: null,
          links: [{
            text: _e.nav_support_home.defaultMessage,
            intlMessage: _e.nav_support_home,
            type: "nav-internal",
            location: {
              domain: u.z.support,
              path: ""
            }
          }, {
            text: _e.nav_support_service_status.defaultMessage,
            intlMessage: _e.nav_support_service_status,
            type: "nav-internal",
            location: {
              domain: u.z.support,
              path: "/servicestatus"
            }
          }, {
            text: _e.nav_support_submit_ticket.defaultMessage,
            intlMessage: _e.nav_support_submit_ticket,
            type: "nav-internal",
            location: {
              domain: u.z.support,
              path: "/categories"
            }
          }],
          cta: {
            text: _e.nav_support_dashboard.defaultMessage,
            intlMessage: _e.nav_support_dashboard,
            variant: "highlight",
            location: {
              domain: u.z.support,
              path: "/dashboard"
            },
            ga: "cta_other"
          }
        },
        _a = {
          site: "tabletennis",
          appearancePaths: {
            [u.z.www]: ["/games/tabletennis/*"]
          },
          brand: "tabletennis",
          links: [],
          cta: {
            text: _e.nav_tabletennis_cta_buy_now.defaultMessage,
            intlMessage: _e.nav_tabletennis_cta_buy_now,
            variant: "highlight",
            dataTestId: "tableTennisCta",
            location: {
              domain: "https://www.xbox.com",
              path: "/en-US/games/store/rockstar-table-tennis/bvz4h08bmq3h"
            },
            ga: "cta_buy"
          }
        },
        ca = {
          site: "italianjob",
          appearancePaths: {
            [u.z.www]: ["/games/italianjob/*"]
          },
          brand: "theitalianjob",
          links: []
        },
        la = {
          site: "thewarriors",
          appearancePaths: {
            [u.z.www]: ["/games/thewarriors/*"]
          },
          brand: "thewarriors",
          links: []
        },
        da = {
          site: "wildmetal",
          appearancePaths: {
            [u.z.www]: ["/games/wildmetal/*"]
          },
          brand: "wildmetal",
          links: []
        },
        ga = (0, r.vU)({
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
          social_club_text: {
            id: "social_club_text",
            defaultMessage: "Social Club"
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
          sc_menu_toggle: {
            id: "sc_menu_toggle",
            defaultMessage: "Toggle Social Club Menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ma = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(2622),
                alt: "PC"
              } : {
                src: t(350),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(6029),
                alt: "PS4"
              } : {
                src: t(3642),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(8421),
                alt: "PS5"
              } : {
                src: t(6457),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(5743),
                alt: "Xbox One"
              } : {
                src: t(3396),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(3793),
                alt: "Xbox Series X|S"
              } : {
                src: t(6062),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        va = t(2490),
        ua = t(8682),
        pa = () => {
          let e = !1;
          e = !0;
          const a = (0, o.Z)(),
            {
              data: t
            } = X(),
            {
              charactersNeeded: n,
              currentCharId: s,
              navOpen: r,
              setNavOpen: i
            } = O(),
            {
              track: c
            } = te(),
            [d, g] = (0, _.useState)(null),
            [m, v] = (0, _.useState)(!1),
            [u, p] = (0, _.useState)(null),
            [f, h] = (0, _.useState)(!1),
            [k, b] = (0, _.useState)([]),
            [, w] = ve();
          (0, _.useEffect)((() => {
            b(t.characters[n] ?? [])
          }), [t, n]);
          const y = (0, _.useCallback)((e => {
            e.stopPropagation(), i(!r), c({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: r ? "close" : "open"
            })
          }), [r]);
          return (0, _.useEffect)((() => {
            const e = t?.id ?? !1,
              a = e ? (k?.[s]?.mugshotUrl ?? t?.avatar) || va : ua,
              n = ma(k?.[s]?.platform, "small") ?? null;
            p(n), g(a), v(e), h(!!k?.[s]?.mugshotUrl)
          }), [t, k, s, va, ua]), (0, l.jsxs)("button", {
            className: "rockstargames-modules-core-headerf031d3c8e1a538f13046a93a66eec662",
            "data-img-set": f,
            "aria-label": a.formatMessage(ga.sc_menu_toggle),
            type: "button",
            onClick: e => y(e),
            "data-testid": "avaterMenuButton",
            children: [(0, l.jsx)("img", {
              className: "rockstargames-modules-core-headerd3b659042c82d09456f804b882c8dcd8",
              src: d || "",
              onError: () => {
                g(va)
              },
              alt: t?.nickname || ""
            }), m && null !== u && (0, l.jsx)("img", {
              className: "rockstargames-modules-core-headerec40dc2247007d12658690f716323984",
              src: u.src,
              alt: u.alt
            }), m && (0, l.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-headerc414ae83ddce13aad3f194b1018bf58c",
              "data-platform": k?.[s]?.platform ?? null
            })]
          })
        },
        fa = (0, k.BS)("@rockstargames/modules-core-header/profile-switcher"),
        ha = fa("languageSelectorOpenedReactive", !1),
        ka = e => ha(e),
        ba = fa("activeSubNavIdReactive", -1),
        wa = e => ba(e),
        ya = fa("subNavExtraHeightReactive", -1),
        xa = e => ya(e),
        Ma = fa("scNavOpenedReactive", !0),
        Sa = e => Ma(e),
        Na = fa("charListHiddenReactive", !0),
        Ca = e => Na(e),
        ja = () => {
          const e = (0, k.lY)(ha),
            a = (0, k.lY)(ba),
            t = (0, k.lY)(ya),
            n = (0, k.lY)(Ma),
            s = (0, k.lY)(Na);
          return (0, _.useEffect)((() => {
            s || (e && ka(!1), n && (Sa(!1), wa(-1)))
          }), [s]), (0, _.useEffect)((() => {
            !e && s && (n || Sa(!0))
          }), [e, s]), (0, _.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: ka,
            activeSubNavId: a,
            setActiveSubNavId: wa,
            subNavExtraHeight: t,
            setSubNavExtraHeight: xa,
            scNavOpened: n,
            setScNavOpened: Sa,
            charListHidden: s,
            setCharListHidden: Ca
          })), [e, a, t, n, s])
        },
        Ta = e => {
          let {
            children: a,
            to: t = "#",
            alt: n = "",
            autoBlank: s = !1,
            onClick: r = (() => {}),
            ...i
          } = e;
          const o = !/^(https?|mailto):/i.test(t);
          if (/^#/.test(t)) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), r && r(e)
            };
            return (0, l.jsx)("a", {
              title: n,
              href: t,
              onClick: e,
              ...i,
              children: a
            })
          }
          if (o) return (0, l.jsx)(Q.NavLink, {
            title: n,
            to: t,
            onClick: e => r(e),
            ...i,
            children: a
          });
          const _ = Object.keys(i).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
              ...e,
              [a]: i[a]
            })), {}),
            c = i?.target ?? (s ? "_blank" : "_self");
          return "function" == typeof _?.className && delete _.className, (0, l.jsx)("a", {
            href: t,
            ..._,
            title: n,
            onClick: e => r(e),
            target: c,
            children: a
          })
        };
      var za = t(6588),
        Ia = t.n(za);
      t(2059);
      const La = {
          button: "rockstargames-modules-core-headerf5dc166ac5cc8fab506116c0da01dcc2",
          secondary: "rockstargames-modules-core-headerb139179467cbca2821a4f3ee8d2972a9"
        },
        Aa = e => {
          let {
            className: a = "",
            children: t,
            context: n = "",
            to: s,
            onClick: r,
            ...i
          } = e;
          const o = [La.button, La[n], a].join(" ");
          return s ? (0, l.jsx)(Ta, {
            ...i,
            to: s,
            className: o,
            onClick: r ? () => r() : () => {},
            children: t
          }) : (0, l.jsx)("button", {
            ...i,
            type: "button",
            className: o,
            onClick: r ? () => r() : () => {},
            children: t
          })
        },
        Ea = function() {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
          return [...a].filter(Boolean).join(" ")
        },
        Pa = (0, _.createContext)(),
        {
          Provider: Da
        } = Pa,
        Va = e => {
          let {
            children: a,
            payload: t
          } = e;
          return (0, l.jsx)(Da, {
            value: t,
            children: a
          })
        },
        Oa = (0, _.createContext)(),
        {
          Provider: Ga
        } = Oa,
        Ba = e => {
          let {
            children: a,
            components: t
          } = e;
          return (0, l.jsx)(Ga, {
            value: t,
            children: a
          })
        };
      var Ra = t(4947),
        Fa = t.n(Ra);
      t(5821), t(4675), t(3520);
      const $a = "content";
      var qa = t(8061);
      const Ua = e => {
          let {
            components: a,
            payload: t,
            componentProps: n = {}
          } = e;
          const s = (0, _.useMemo)((() => (he().cloneDeepWith(t, ((e, n) => {
            "_template" !== n || Number.isInteger(Number(e)) || he().get(a, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", a))
          })), (e => {
            let {
              components: a,
              payload: t,
              componentProps: n
            } = e;
            const s = e => {
              let r = "";
              if (r = Array.isArray(e?.[$a]) ? e[$a].map((e => s(e))) : e?.[$a] ?? "", !e?._template) return r;
              let i = he().get(a, e?._template) ?? null;
              "0" === e?._template && (console.warn(`The _template "${e?._template}" wasn't found in the available components. The _template "${e?._template}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(a),
                payload: e
              }), i = he().get(a, "gen9.Hero") ?? null);
              const o = [...e?.translations ?? []].reverse(),
                c = `componentProps_${(0,qa.Z)()}`;
              return (0, _.createElement)(i, {
                ...t?.meta,
                ...e,
                ...n,
                t: e => o.find((a => a?._key === e))?.value ?? e,
                key: c
              }, r)
            };
            return t?.[$a]?.length ? s(t) : null
          })({
            components: a,
            payload: t,
            componentProps: n
          }))), [JSON.stringify(t), JSON.stringify(a)]);
          return s
        },
        Ha = e => {
          let {
            tina: a,
            components: t = {},
            componentProps: n = {}
          } = e;
          const s = (0, _.useContext)(Pa),
            [r, i] = (0, _.useState)(null),
            [o, c] = (0, _.useState)(null);
          (0, _.useEffect)((() => {
            a?.payload && i(a.payload), a?.variables && c(a.variables)
          }), [a]);
          const [d] = (0, _.useState)({
            ...t,
            ...(0, _.useContext)(Oa) ?? {}
          }), g = (e => {
            let {
              payload: a
            } = e;
            const [t, n] = (0, _.useState)(a);
            return (0, _.useEffect)((() => {
              const e = he().debounce((() => {
                const e = JSON.parse(JSON.stringify(a));
                he().cloneDeepWith(e, ((e, a, t) => {
                  t?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const a = e.mediaQueryList.filter((e => {
                        let {
                          mediaQueryString: a
                        } = e;
                        return window.matchMedia(a).matches
                      })) ?? null,
                      t = Object.assign({}, ...a);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...t,
                      _template: e?._template
                    })
                  })(t)
                })), n(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [a]), t
          })({
            payload: r
          }), m = (e => {
            let {
              payload: a,
              variables: t
            } = e;
            const [n, s] = (0, _.useState)(a), [r, i] = (0, _.useState)(t);
            return (0, _.useEffect)((() => {
              const e = ((e, a) => {
                  const t = {};
                  return he().cloneDeepWith(e, ((e, n, s) => {
                    n === a && e && (t[s.key] = e)
                  })), t
                })(a, "_memoq"),
                n = JSON.parse(JSON.stringify(he().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(t?.keys ?? {})))));
              i(n)
            }), [JSON.stringify(a), t]), (0, _.useEffect)((() => {
              const e = JSON.parse(JSON.stringify(a)),
                t = JSON.parse(JSON.stringify(r));
              he().cloneDeepWith(e, ((e, a, n) => {
                (e => {
                  let {
                    item: a,
                    variableKey: n
                  } = e;
                  if (!a || !he().has(a, "key") || a.translated) return;
                  const s = t[a.key] ?? null;
                  if (!s) return;
                  const r = Fa()(s);
                  Object.keys(r).map((e => {
                    he().set(a, e, r[e])
                  })), he().set(a, "translated", !0), Object.freeze(a)
                })({
                  item: n,
                  variableKey: e
                })
              })), s(e)
            }), [JSON.stringify(a), JSON.stringify(r)]), n
          })({
            payload: r,
            variables: o
          });
          return (0, _.useMemo)((() => {
            if (!r) return null;
            const e = m,
              t = r?.meta?.prod ?? r?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              i = {
                ...r,
                meta: {
                  ...r?.meta ?? {},
                  prod: t
                }
              };
            return (0, l.jsx)(Va, {
              payload: i,
              children: (0, l.jsx)(Ba, {
                components: d,
                children: (0, l.jsx)(Ua, {
                  payload: e,
                  components: d,
                  componentProps: {
                    ...n,
                    tina: a
                  }
                })
              })
            })
          }), [s, r, JSON.stringify(g), JSON.stringify(m)])
        };
      var Wa = t(2965);
      const Ja = (0, t(2).Hu)(),
        Za = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [n, s] = (0, _.useState)(!1), r = (e => {
            const [a] = (0, Q.useSearchParams)(), [t, n] = (0, _.useState)(null), s = X(), {
              loggedIn: r
            } = s, {
              currentCharId: i
            } = O(), o = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, _.useMemo)((() => {
                const n = e?.data?.characters?.[t];
                return "1" === (n?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(s, i);
            return (0, _.useEffect)((() => {
              n(null);
              const s = "true" === a.get("conditionPreview");
              if (!(!e?.length > 0)) return Ja.applyFilters("preview_conditions", e), e.forEach((e => {
                const {
                  value: i
                } = e;
                if (s) return "true" === a.get(i) ? (n(!0), !0) : (n(!1), !1);
                if (!1 === t) return !1;
                switch (i) {
                  case "user:is:loggedIn":
                    n(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    n(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    n(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    n(!1 === o);
                    break;
                  default:
                    n(!1)
                }
                return null
              })), () => {}
            }), [a, e, o, s, r]), t
          })(a);
          return (0, _.useEffect)((() => {
            s(r)
          }), [r]), (0, _.useMemo)((() => n ? t : null), [n])
        };
      (0, b.zv)((e => {
        let {
          children: a
        } = e;
        return _.Children.map(_.Children.toArray(a), (e => (0, l.jsx)(Za, {
          ...e?.props
        })))
      }));
      var Xa = t(6809),
        Ka = t(3483);
      const Qa = e => {
          let {
            className: a
          } = e;
          return (0, l.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, l.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, l.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        Ya = {
          calloutContainer: "rockstargames-modules-core-headerb0a754f750081425a38defaa39b7506c",
          calloutSection: "rockstargames-modules-core-headerea4e5718129b5e8b6cffbe0f8697c797",
          calloutHeaders: "rockstargames-modules-core-headerdebc6790ede2093ac31e9c2afb4b1cdf",
          calloutHeaderMargins: "rockstargames-modules-core-headerec9dacb2944979c9949f192747ed331c",
          calloutHeader: "rockstargames-modules-core-headera34cf24813bd60520a15ecc6e115fc70",
          calloutSubheader: "rockstargames-modules-core-headerd3a5febe1fa06ce712fbf398b930d11c",
          calloutVoteForm: "rockstargames-modules-core-headerc09e7afa15466f8415210524680e1903",
          voteButton: "rockstargames-modules-core-headerce527bb824d6871c02cea13317362437",
          upvote: "rockstargames-modules-core-headercce35789564203c5c10613e95c2cf8e2",
          downvote: "rockstargames-modules-core-headera1ee77e7c3fa744bf18185d580c27771",
          active: "rockstargames-modules-core-headeracb9bcae3332c165e4eb72a446a5f626",
          calloutButton: "rockstargames-modules-core-headerdbc505f22dbf5136b4c1fbadae6a6df1",
          calloutLink: "rockstargames-modules-core-headerceb9ac3fdc03ff4b5052c61d398ce0ff",
          calloutLinkIcon: "rockstargames-modules-core-headere11cc6eda5b2164e2048c974df88a20a",
          actionBlock: "rockstargames-modules-core-headercf17898f2f47656cb7494a29c90dafd2",
          actionFooter: "rockstargames-modules-core-headerf9a6d7fd5eb72043ad7e89178325f09c"
        },
        et = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: n
          } = te(), {
            refetch: s
          } = (0, k.aM)(Ka.UserGetVote, {
            skip: !0
          }), [r] = (0, k.Db)(Ka.UserCastVote), [i, o] = (0, _.useState)(null), c = (0, _.useCallback)((e => {
            (async () => {
              if (e === i && null !== i) o(null);
              else {
                o(e), n({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const s = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await r({
                  variables: s
                })
              }
            })()
          }), [a, t, i]);
          return (0, _.useEffect)((() => {
            a && t && (async () => {
              const e = await s({
                foreignId: a,
                foreignType: t
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, l.jsxs)("div", {
            className: Ya.calloutVoteForm,
            children: [(0, l.jsx)("button", {
              "aria-label": "upvote",
              className: [Ya.upvote, Ya.voteButton, i ? Ya.active : ""].join(" "),
              name: "upvote",
              onClick: () => c(!0),
              type: "button"
            }), (0, l.jsx)("button", {
              "aria-label": "downvote",
              className: [Ya.downvote, Ya.voteButton, !1 === i ? Ya.active : ""].join(" "),
              name: "downvote",
              onClick: () => c(!1),
              type: "button"
            })]
          })
        },
        at = e => {
          let {
            action_text: a,
            link: t,
            trackingData: n
          } = e;
          const {
            track: s
          } = te();
          return (0, l.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, l.jsxs)("button", {
              className: Ya.calloutLink,
              type: "button",
              onClick: n ? () => s({
                ...n
              }) : () => {},
              children: [a, (0, l.jsx)(Qa, {
                className: Ya.calloutLinkIcon
              })]
            })
          })
        },
        tt = e => {
          let {
            helperText: a,
            linkText: t,
            link: n,
            trackingData: s
          } = e;
          const {
            track: r
          } = te();
          return (0, l.jsxs)("div", {
            className: Ya.actionFooter,
            children: [a, t && " ", t && (0, l.jsx)("a", {
              href: n ?? "",
              onClick: () => r({
                ...s
              }),
              children: t
            })]
          })
        };
      (0, b.zv)((e => {
        let {
          header: a,
          subheader: t,
          type: n,
          action_text: s,
          link: r,
          foreign_id: i = document.location.pathname,
          foreign_type: o = "url",
          className: c = "",
          actionFooterHelperText: d,
          actionFooterLinkText: g,
          actionFooterLink: m,
          trackingData: v = {},
          actionFooterLinkTrackingData: u = {},
          t: p
        } = e;
        const {
          loggedIn: f
        } = X(), {
          track: h
        } = te(), k = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
          ref: b,
          inView: w
        } = (0, Xa.YD)({
          threshold: .6
        }), [y, x] = (0, _.useState)(!1);
        let M;
        if ((0, _.useEffect)((() => {
            w && !y && (h({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "callout section",
              element_placement: "callout section"
            }), x(!0))
          }), [w]), !a && !t) return null;
        switch (n) {
          case "vote":
            if (!f) {
              M = (0, l.jsx)(Aa, {
                to: k,
                className: Ya.calloutButton,
                onClick: v ? () => h({
                  ...v
                }) : () => {},
                children: "Log In"
              });
              break
            }
            M = (0, l.jsx)(et, {
              foreign_id: i,
              foreign_type: o
            });
            break;
          case "button":
            s && r && (M = (0, l.jsx)(Aa, {
              to: r,
              className: Ya.calloutButton,
              onClick: v ? () => h({
                ...v
              }) : () => {},
              children: s
            }));
            break;
          case "link":
            s && r && (M = (0, l.jsx)(at, {
              action_text: s,
              link: r,
              trackingData: v
            }));
            break;
          default:
            M = null
        }
        return (0, l.jsx)("div", {
          className: `${Ya.calloutContainer} ${c||""}`,
          ref: b,
          children: (0, l.jsxs)("div", {
            className: Ya.calloutSection,
            children: [(0, l.jsxs)("div", {
              className: [Ya.calloutHeaders, M ? Ya.calloutHeaderMargins : ""].join(" "),
              children: [a && (0, l.jsx)("h1", {
                className: Ya.calloutHeader,
                children: p(a)
              }), t && (0, l.jsx)("h2", {
                className: Ya.calloutSubheader,
                children: p(t)
              })]
            }), (0, l.jsxs)("div", {
              className: Ya.actionBlock,
              children: [M, d && (0, l.jsx)(tt, {
                helperText: d,
                linkText: g,
                link: m,
                trackingData: u
              })]
            })]
          })
        })
      })), t(2187);
      var nt = t(9885),
        st = t.n(nt);
      const {
        sanitize: rt
      } = st();
      t(8507);
      const it = {
          img: "rockstargames-modules-core-headerbf430847a4fc75f43c281b702cb67775",
          startAnimation: "rockstargames-modules-core-headerf937aa11d861c7446258df7cfd669940"
        },
        ot = e => {
          let {
            imgSrc: a,
            titleSlug: t
          } = e;
          const [n] = (0, b.TZ)(a);
          return (0, l.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [it.img, n ? it.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        _t = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: n,
            site_in_rockstar: s = !1,
            title_slug: r
          } = a;
          let i = r;
          "V" === r && (i = "gta-v"), "GTAOnline" === r && (i = "gta-online"), "undeadnightmare" === r && (i = "reddeadredemption");
          const o = t ?? `${s?"":"/games"}/${i}`;
          return (0, l.jsx)(Ta, {
            "aria-label": a,
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: o,
            target: "_self",
            className: "rockstargames-modules-core-headerab00cee9c6ebfc9dde968ca69f3f8b52",
            children: (0, l.jsx)(ot, {
              imgSrc: n,
              titleSlug: r
            })
          })
        };
      var ct = t(3118);
      class lt extends _.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message ? (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headeracd7086fbe8edad6f39a19c8f493ad75",
            children: [(0, l.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, l.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const dt = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, l.jsx)(lt, {
              header: a,
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        },
        gt = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: n,
            onPrevClicked: s
          } = e;
          return (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headere2ed16f199999059ee169ac09091ba51",
            children: [(0, l.jsx)("div", {
              className: "rockstargames-modules-core-headerc8f16b560066271b2342690cad248566",
              ref: a,
              onClick: s,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, l.jsx)("div", {
              className: "rockstargames-modules-core-headerc4f9525be24b39051c76ecaa04e73500",
              ref: t,
              onClick: n,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        mt = (dt((e => {
          let {
            description: a,
            slideChildren: t,
            size: n,
            title: s,
            customSlidesPerView: r = null,
            customSpaceBetween: i = null,
            slideClass: o,
            style: c,
            className: d,
            cardSizeBreakpoints: g = {},
            customAspectRatio: m,
            titleBadge: v
          } = e;
          const {
            track: u
          } = te(), p = (0, _.useRef)(null), f = (0, _.useRef)(null), h = (0, _.useRef)(null), [k, b] = (0, _.useState)(null), [w, y] = (0, _.useState)(!1), [x, M] = (0, _.useState)(null), [S, N] = (0, _.useState)({}), [C, j] = (0, _.useState)(), {
            ref: T,
            inView: z
          } = (0, Xa.YD)({
            threshold: .6
          }), [I, L] = (0, _.useState)(!1), [A, E] = (0, _.useState)(null), [P, D] = (0, _.useState)(!1);
          (0, _.useEffect)((() => {
            const e = () => {
              D(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const V = {
            0: {
              spaceBetween: i ?? 16
            },
            1024: {
              spaceBetween: i ?? 18
            },
            1920: {
              spaceBetween: i ?? 20
            },
            2560: {
              spaceBetween: i ?? 22
            }
          };
          (0, _.useEffect)((() => {
            if (!p.current) return;
            const e = () => {
              if (p.current) {
                const e = r || Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view")),
                  a = r ? 1 : Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view-multiplier"));
                M(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p, r]), (0, _.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, E(a))
            })), L(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && P ? null : (0, l.jsx)(Wa.o5, {
              children: e
            }, Symbol(a).toString())));
            b(a)
          }), [t, P]), (0, _.useEffect)((() => {
            j({
              nextEl: h.current,
              prevEl: f.current
            })
          }), [h, f]), (0, _.useEffect)((() => {
            z && !w && t && (u({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${s}`.toLowerCase(),
              element_placement: `deck - ${s}`.toLowerCase()
            }), y(!0))
          }), [z, t]);
          let O = "custom" === n ? {
            "--custom-aspect-ratio": m,
            ...c
          } : {
            ...c
          };
          return (0, l.jsxs)("div", {
            className: Ea("rockstargames-modules-core-headerb8efa928adc0e5c84563e8f9cf7f3a30", d),
            "data-size": n,
            "data-sm": g?.sm ? g?.sm : n,
            "data-md": g?.md ? g?.md : n,
            "data-lg": g?.lg ? g?.lg : n,
            "data-xl": g?.xl ? g?.xl : n,
            "data-xxl": g?.xxl ? g?.xxl : n,
            "data-has-covercard": I,
            ref: p,
            style: O,
            children: [(0, l.jsx)("div", {
              className: "rockstargames-modules-core-headerc9b615cce89d13b7bddc99e21c3c1f4c",
              ref: T
            }), I && P && (0, l.jsx)("div", {
              className: "rockstargames-modules-core-headere7026dae446389aca79ae8b0357e03ee",
              children: A
            }), (0, l.jsx)("div", {
              className: "rockstargames-modules-core-headerf80fd6d5582561660104adb89e12faaf",
              children: (0, l.jsxs)("div", {
                className: "rockstargames-modules-core-headerabff66535c2f133ee2fc7178d24baa37",
                children: [(0, l.jsxs)("div", {
                  className: "rockstargames-modules-core-headerdbff9f12e6751f7fc29390e76412845f",
                  children: [!I && s && (0, l.jsxs)("div", {
                    className: "rockstargames-modules-core-headerd8c745773c51e4c8fcee8c5ffa02f50a",
                    children: [(0, l.jsx)("h2", {
                      children: s
                    }), v && (0, l.jsx)("span", {
                      className: "rockstargames-modules-core-headerb73f00c53394c6282e0d22da20410913",
                      children: v
                    })]
                  }), (0, l.jsx)(gt, {
                    prevRef: f,
                    nextRef: h,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, l.jsx)("div", {
                  className: "rockstargames-modules-core-headerbd954b7dc66b2e48e3aa7d4022bb288f",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), x ? (0, l.jsx)(Wa.tq, {
              slidesPerView: x,
              onInit: e => {
                N(e)
              },
              grabCursor: !0,
              navigation: C,
              modules: [ct.W_],
              breakpoints: V,
              slideClass: Ea("swiper-slide", o),
              onSlideNextTransitionEnd: () => {
                u({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: s?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                u({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: s?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                u({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: s?.toLowerCase() ?? ""
                })
              },
              children: k
            }) : ""]
          })
        }), null), {
          scMenuStyles: "rockstargames-modules-core-headerd888853317a81871ac70c869496c0525",
          languageSelector: "rockstargames-modules-core-headerbd873d56ac7ca44414ac5cb26381131a",
          open: "rockstargames-modules-core-headerd7b8ca3cd51951aab1075409f5dc23a6",
          linkWrapper: "rockstargames-modules-core-headerc2e6d274e985fac4c88e11dcc9a78c14",
          links: "rockstargames-modules-core-headerc2a9aa0b1fb7182744f8084dbafa7705",
          selectBoxWrapper: "rockstargames-modules-core-headerb843d644faa01d9ea25f1a2dd56ffab0",
          selectBox: "rockstargames-modules-core-headerfa5d93789da028ad988798450fe34680",
          selectBoxOption: "rockstargames-modules-core-headerfcc44b6cd14ec9c4f152d4318ce36bac"
        }),
        vt = "Select a Language";
      let ut;
      ut = e => {
        let {
          theme: a,
          languageSelectorOpened: t,
          setLanguageSelectorOpened: n,
          defaultMessage: s
        } = e;
        const r = (0, Q.useLocation)(),
          c = (0, o.Z)(),
          [d, g] = h(),
          [v, p] = (0, _.useState)(!1),
          f = (0, _.useMemo)((() => (0, u.Z)()), []),
          k = (0, _.useCallback)((e => {
            let a = r.pathname;
            const t = a.split("/");
            return m.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), f.currentSite?.site === u.z.www ? "en" === e ? `${window.location.origin}${a}${r.search}` : `${window.location.origin}/${e}${a}${r.search}` : `${window.location.origin}${a}${r.search}`
          }), [r]);
        let b = !1;
        b = !0;
        const w = (0, _.useRef)(null),
          [y, x] = (0, _.useState)(0),
          M = matchMedia("(hover: none) and (pointer: coarse)").matches,
          S = e => {
            if (n && n(!1), d.subdomaincom === e || "none" === e) return void(n && n(!1));
            const a = m.find((a => a.subdomaincom === e));
            a && (g(a.iso), window.location.href = k(e))
          };
        return (0, _.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === v && p(!1)
        }), [t]), (0, _.useEffect)((() => {
          w.current && x(w.current.scrollHeight)
        }), [w]), (0, l.jsxs)("div", {
          className: [mt.languageSelector, v ? mt.open : ""].join(" "),
          "data-theme": a,
          children: [(0, l.jsxs)(l.Fragment, {
            children: [M && "sc-menu" === a && (0, l.jsx)("div", {
              className: mt.selectBoxWrapper,
              children: (0, l.jsxs)("select", {
                className: mt.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  S(e.currentTarget.value)
                },
                children: [(0, l.jsx)("option", {
                  className: mt.selectBoxOption,
                  value: "none",
                  children: s ? (0, l.jsx)(i.Z, {
                    ...s
                  }) : vt
                }), m.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, l.jsx)("option", {
                    className: mt.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!M || "sc-menu" !== a) && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), n && n(!v), p(!v)
                },
                type: "button",
                "aria-label": s ? c.formatMessage(s) : vt,
                children: [(0, l.jsx)("i", {}), (0, l.jsx)("span", {
                  children: s ? (0, l.jsx)(i.Z, {
                    ...s
                  }) : vt
                })]
              }), (0, l.jsx)("div", {
                className: mt.linkWrapper,
                ref: w,
                style: {
                  "--ls-linkWrapper-opened-height": `${y}px`
                },
                children: (0, l.jsx)("div", {
                  className: mt.links,
                  children: m.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, l.jsx)(Ta, {
                      to: k(a),
                      onClick: () => {
                        S(a)
                      },
                      children: t
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          }), !1]
        })
      };
      const pt = ut,
        ft = {
          tag: "rockstargames-modules-core-headerf5978929e516a7f156d3d81ca93d966a"
        },
        ht = e => {
          let {
            className: a,
            href: t,
            title: n,
            style: s
          } = e;
          const r = (0, l.jsxs)("div", {
            style: s,
            className: [ft.tag, a].join(" "),
            children: [(0, l.jsx)("i", {}), n]
          });
          return void 0 !== t ? (0, l.jsx)(Ta, {
            to: t,
            children: r
          }) : r
        },
        kt = {
          newswireBlock: "rockstargames-modules-core-headerba2782b4444a519a060ddc4727f3fd79",
          info: "rockstargames-modules-core-headerb760fbda945b1aababe2df978bd27419",
          title: "rockstargames-modules-core-headerf23284941e0f8ffc13c9e4d77d2b7251",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-headerd5aec57fe2a8f93469a703100f272c64",
          preview: "rockstargames-modules-core-headerc78eec9cb8b10c5b29849794f5a58ea6",
          previewMobile: "rockstargames-modules-core-headeree92338af02ea3f31f362cb1804825ae",
          top: "rockstargames-modules-core-headera364218e924ffd9f280ad0b05495683b",
          startAnimation: "rockstargames-modules-core-headerc68720aaf32901f2a1946f596fd1f0a3"
        },
        bt = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: n = !1,
            style: s = {}
          } = e;
          const [r] = (0, Q.useSearchParams)(), i = t.preview_images_parsed.newswire_block, o = {
            default: 0 !== a || n ? i.square || i.d16x9 || i._fallback : i.d16x9 || i.square || i._fallback,
            mobile: i.square || i._fallback
          }, [_, c] = (0, b.TZ)(o.default), [d, g] = (0, b.TZ)(o.mobile), m = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          };
          return (0, l.jsx)(Ta, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [kt.newswireBlock, n ? kt.newswireBlockNoSpecialOrder : "", null !== _ ? kt.startAnimation : ""].join(" "),
            children: (0, l.jsxs)(l.Fragment, {
              children: [0 !== a || r.get("tag_id") ? (0, l.jsx)("div", {
                className: kt.preview,
                style: m.default
              }) : (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                  className: kt.previewMobile,
                  style: m.mobile
                }), (0, l.jsx)("div", {
                  className: kt.preview,
                  style: m.default
                })]
              }), (0, l.jsxs)("div", {
                className: kt.info,
                children: [(0, l.jsxs)("div", {
                  className: kt.top,
                  children: [t.primary_tags.length ? (0, l.jsx)(ht, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, l.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, l.jsx)("h5", {
                  className: kt.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var wt = t(8300),
        yt = t.n(wt);
      (0, b.zv)((e => {
        let {
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: n = "/newswire",
          t: s
        } = e;
        const [r] = (0, Q.useSearchParams)(), {
          tagId: i = null
        } = (0, Q.useParams)(), [o, c] = (0, _.useState)(i ?? t ?? r.get("tag_id")), [d, g] = (0, _.useState)(1), [m, v] = (0, _.useState)([]), [u, p] = (0, _.useState)(null), {
          data: f
        } = (0, k.aM)(yt(), {
          variables: {
            tagId: Number(o),
            page: d,
            metaUrl: n
          },
          autoSetLoading: !0
        });
        return (0, _.useEffect)((() => {
          g(1), v([]), c(i ?? t ?? r.get("tag_id"))
        }), [r.get("tag_id")]), (0, _.useEffect)((() => {
          f && f.posts && f.posts.paging && p(f.posts.paging), f && f.posts && f.posts.results && v(m.concat(f.posts.results))
        }), [f]), m.length ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(St, {
            posts: m,
            relativeTo: a,
            noSpecialOrder: null !== o
          }), null !== u && u.nextPage ? (0, l.jsx)(Aa, {
            onClick: () => g(d + 1),
            disabled: !1,
            context: "secondary",
            children: s("More Stories")
          }) : ""]
        }) : null
      }));
      const xt = {
          related: "rockstargames-modules-core-headerdf69a7aae85a9ec8b5ebd0a64496fb0e",
          posts: "rockstargames-modules-core-headera18a73cb511122aa4c3de9ffcb8363b2",
          just1post: "rockstargames-modules-core-headerf2c39530c1bf7492516d298384b1a3d2"
        },
        Mt = ((0, b.zv)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, l.jsxs)("section", {
            className: xt.related,
            children: [(0, l.jsx)("h2", {
              children: t("Related Stories")
            }), (0, l.jsx)("div", {
              className: [xt.posts, 1 === a.length ? xt.just1post : ""].join(" "),
              children: a.map((e => (0, l.jsx)(bt, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })), {
          newswireBlocks: "rockstargames-modules-core-headerdf082531ed434e4a44ea2c3474a07465",
          noSpecialOrder: "rockstargames-modules-core-headerf7a8b59f042399a20d9c74b1e2b76f4a"
        }),
        St = (0, b.zt)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: n,
            relativeTo: s
          } = e;
          return (0, _.useEffect)((() => {
            if (!t.length) return;
            const e = {
              event: "trackEvent",
              eventCategory: "Home",
              eventAction: "Newswire Impressions",
              ecommerce: {
                impressions: []
              }
            };
            t.map(((a, t) => {
              e.ecommerce.impressions.push({
                name: a.title,
                id: a.id,
                position: t + 1,
                list: "Home"
              })
            })), n(e)
          }), [t.length]), (0, l.jsx)("div", {
            className: [Mt.newswireBlocks, a ? Mt.noSpecialOrder : "", Mt.contextHome].join(" "),
            children: t.map(((e, t) => (0, l.jsx)(bt, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        {
          sanitize: Nt
        } = st();
      t(6147);
      var Ct = t(7968);
      t(7724), t(1785), (0, r.vU)({
        card_learn_more: {
          id: "card_learn_more",
          defaultMessage: "Learn More"
        }
      }), (0, r.vU)({
        cph_awards_title: {
          id: "cph_awards_title",
          defaultMessage: "Awards"
        },
        cph_awards_not_unlocked: {
          id: "cph_awards_not_unlocked",
          defaultMessage: "Not unlocked"
        },
        cph_progress_bar_aria: {
          id: "cph_progress_bar_aria",
          defaultMessage: "Progress Bar"
        },
        cph_progress_tracker_title: {
          id: "cph_progress_tracker_title",
          defaultMessage: "Career Progress"
        },
        cph_progress_tracker_tier_label: {
          id: "cph_progress_tracker_tier_label",
          defaultMessage: "Tier {number}"
        },
        cph_progress_challenges_title: {
          id: "cph_progress_challenges_title",
          defaultMessage: "Challenges"
        },
        cph_progress_rewards_title: {
          id: "cph_progress_rewards_title",
          defaultMessage: "Rewards"
        },
        cph_progress_rewards_view_all: {
          id: "cph_progress_rewards_view_all",
          defaultMessage: "View All"
        },
        cph_progress_rewards_view_less: {
          id: "cph_progress_rewards_view_less",
          defaultMessage: "View Less"
        },
        cph_progress_close: {
          id: "cph_progress_close",
          defaultMessage: "Close"
        },
        cph_nav_open: {
          id: "cph_nav_open",
          defaultMessage: "Open Section Navigation"
        },
        cph_nav_close: {
          id: "cph_nav_close",
          defaultMessage: "Close Section Navigation"
        },
        cph_nav_scroll_left: {
          id: "cph_nav_scroll_left",
          defaultMessage: "Scroll Left"
        },
        cph_nav_scroll_right: {
          id: "cph_nav_scroll_right",
          defaultMessage: "Scroll Right"
        },
        cph_intro_getting_started: {
          id: "cph_intro_getting_started",
          defaultMessage: "Getting Started"
        },
        cph_intro_guide_instruction: {
          id: "cph_intro_guide_instruction",
          defaultMessage: "Read the {title} Guide to learn more."
        },
        cph_intro_guide_learn_more: {
          id: "cph_intro_guide_learn_more",
          defaultMessage: "Learn more"
        },
        cph_progress_available_on: {
          id: "cph_progress_available_on",
          defaultMessage: "Only available on"
        },
        cph_progress_available_on_aria_ps5: {
          id: "cph_progress_available_on_aria_ps5",
          defaultMessage: "PlayStation®5"
        },
        cph_progress_available_on_aria_xbox: {
          id: "cph_progress_available_on_aria_xbox",
          defaultMessage: "Xbox Series X|S"
        },
        cph_login_prompt_title: {
          id: "cph_login_prompt_title",
          defaultMessage: "Sign In to Track Your Progress"
        },
        cph_login_prompt_body: {
          id: "cph_login_prompt_body",
          defaultMessage: "Sign in to Social Club to see all the rewards you can earn, the awards you've won, and the possibilities still ahead of you."
        },
        cph_login_prompt_button: {
          id: "cph_login_prompt_button",
          defaultMessage: "Sign In"
        },
        cph_login_prompt_button_helper: {
          id: "cph_login_prompt_button_helper",
          defaultMessage: "Don't have an account?"
        },
        cph_login_prompt_button_helper_link: {
          id: "cph_login_prompt_button_helper_link",
          defaultMessage: "Join Social Club"
        },
        cph_callout_feedback_title: {
          id: "cph_callout_feedback_title",
          defaultMessage: "Share Your Feedback"
        },
        cph_callout_feedback_body: {
          id: "cph_callout_feedback_body",
          defaultMessage: "How are you enjoying GTA Online? Tell us your thoughts and ideas to help us shape the future of the game."
        },
        cph_callout_feedback_button: {
          id: "cph_callout_feedback_button",
          defaultMessage: "Give feedback"
        },
        cph_loggedin_nochar_title: {
          id: "cph_loggedin_nochar_title",
          defaultMessage: "Link a GTA Online Character"
        },
        cph_loggedin_nochar_body: {
          id: "cph_loggedin_nochar_body",
          defaultMessage: "We couldn't find a GTA Online character linked to your Social Club account. Link one or switch to a different Social Club account."
        },
        cph_loggedin_nochar_button: {
          id: "cph_loggedin_nochar_button",
          defaultMessage: "Link a game account"
        },
        cph_reward_ready_to_claim: {
          id: "cph_reward_ready_to_claim",
          defaultMessage: "Rewards ready to be claimed"
        },
        cph_reward_how_to_claim: {
          id: "cph_reward_how_to_claim",
          defaultMessage: "Rewards ready to be claimed. Visit the Career Progress Menu in-game to claim."
        },
        cph_highlights_heading: {
          id: "cph_highlights_heading",
          defaultMessage: "Highlights"
        },
        cph_highlights_previous: {
          id: "cph_highlights_previous",
          defaultMessage: "Previous"
        },
        cph_highlights_next: {
          id: "cph_highlights_next",
          defaultMessage: "Next"
        },
        cph_highlights_group_aria: {
          id: "cph_highlights_group_aria",
          defaultMessage: "Highlight {index} of {total}"
        },
        cph_awards_bonuses_title: {
          id: "cph_awards_bonuses_title",
          defaultMessage: "Bonuses"
        },
        cph_awards_bronze: {
          id: "cph_awards_bronze",
          defaultMessage: "Bronze"
        },
        cph_awards_silver: {
          id: "cph_awards_silver",
          defaultMessage: "Silver"
        },
        cph_awards_gold: {
          id: "cph_awards_gold",
          defaultMessage: "Gold"
        },
        cph_awards_platinum: {
          id: "cph_awards_platinum",
          defaultMessage: "Platinum"
        },
        cph_awards_bonuses_tattoo: {
          id: "cph_awards_bonuses_tattoo",
          defaultMessage: "{tattooName} Tattoo"
        },
        cph_awards_rp_bonus_info: {
          id: "cph_awards_rp_bonus_info",
          defaultMessage: "Complete unique challenges to earn GTA$, bonus items, and more including RP bonuses for each Level:"
        }
      });
      const jt = (0, r.vU)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          },
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        Tt = ((0, r.vU)({
          engagement_title: {
            id: "engagement_title",
            defaultMessage: "Get an Extra GTA$300,000"
          },
          engagement_description: {
            id: "engagement_description",
            defaultMessage: "Now until October 9, GTA+ Members can claim a one-time GTA$300,000 bonus on top of their regular GTA+ benefits. Click “Claim Now” and sign in to the Rockstar Games account linked to your GTA+ Membership."
          },
          engagement_badge_text: {
            id: "engagement_badge_text",
            defaultMessage: "Exclusive Offer"
          },
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
          engagement_claim: {
            id: "engagement_claim",
            defaultMessage: "Claim Now"
          },
          engagement_login: {
            id: "engagement_login",
            defaultMessage: "Sign In and Claim Now"
          },
          engagement_error_alert_title: {
            id: "engagement_error_alert",
            defaultMessage: "No Qualifying Character Found"
          },
          engagement_error_alert_body: {
            id: "engagement_error_alert_body",
            defaultMessage: "To claim and redeem this offer, you must link your Rockstar Games account to at least one character for GTA Online on Xbox Series X|S or PlayStation 5 with an active GTA+ Membership. For more information on how to claim and redeem this offer, read our {FaqLink}."
          },
          engagement_success_alert_title: {
            id: "engagement_success_alert_title",
            defaultMessage: "Almost There!"
          },
          engagement_success_alert_body: {
            id: "engagement_success_alert_body",
            defaultMessage: "To redeem this offer, sign in to GTA Online with the game account linked to your active GTA+ Membership before November 8 at 11:59 p.m. ET and the GTA$300,000 will show in that character’s Maze Bank account within 72 hours."
          },
          engagement_error_alert_failure: {
            id: "engagement_error_alert_failure",
            defaultMessage: "Something went wrong on our end. Please try again in a few minutes."
          },
          engagement_link_account: {
            id: "engagement_link_account",
            defaultMessage: "Link Another Account"
          },
          engagement_link_console_account: {
            id: "engagement_link_console_account",
            defaultMessage: "Link Game Account"
          },
          engagement_cta_ok: {
            id: "engagement_cta_ok",
            defaultMessage: "Ok"
          }
        }), (0, r.vU)({
          cph_awards_title: {
            id: "cph_awards_title",
            defaultMessage: "Awards"
          },
          cph_awards_not_unlocked: {
            id: "cph_awards_not_unlocked",
            defaultMessage: "Not unlocked"
          },
          cph_progress_tracker_title: {
            id: "cph_progress_tracker_title",
            defaultMessage: "Career Progress"
          },
          cph_progress_tracker_tier_label: {
            id: "cph_progress_tracker_tier_label",
            defaultMessage: "Tier {number}"
          },
          cph_progress_challenges_title: {
            id: "cph_progress_challenges_title",
            defaultMessage: "Challenges"
          },
          cph_progress_rewards_title: {
            id: "cph_progress_rewards_title",
            defaultMessage: "Rewards"
          },
          cph_progress_rewards_view_all: {
            id: "cph_progress_rewards_view_all",
            defaultMessage: "View All"
          },
          cph_progress_rewards_view_less: {
            id: "cph_progress_rewards_view_less",
            defaultMessage: "View Less"
          },
          cph_progress_close: {
            id: "cph_progress_close",
            defaultMessage: "Close"
          },
          cph_nav_open: {
            id: "cph_nav_open",
            defaultMessage: "Open Section Navigation"
          },
          cph_nav_close: {
            id: "cph_nav_close",
            defaultMessage: "Close Section Navigation"
          },
          cph_nav_scroll_left: {
            id: "cph_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          cph_nav_scroll_right: {
            id: "cph_nav_scroll_right",
            defaultMessage: "Scroll Right"
          },
          cph_intro_getting_started: {
            id: "cph_intro_getting_started",
            defaultMessage: "Getting Started"
          },
          cph_intro_guide_instruction: {
            id: "cph_intro_guide_instruction",
            defaultMessage: "Read the {title} Guide to learn more."
          },
          cph_intro_guide_learn_more: {
            id: "cph_intro_guide_learn_more",
            defaultMessage: "Learn more"
          },
          cph_progress_available_on: {
            id: "cph_progress_available_on",
            defaultMessage: "Only available on"
          },
          cph_progress_available_on_aria_ps5: {
            id: "cph_progress_available_on_aria_ps5",
            defaultMessage: "PlayStation®5"
          },
          cph_progress_available_on_aria_xbox: {
            id: "cph_progress_available_on_aria_xbox",
            defaultMessage: "Xbox Series X|S"
          },
          cph_login_prompt_title: {
            id: "cph_login_prompt_title",
            defaultMessage: "Sign In to Track Your Progress"
          },
          cph_login_prompt_body: {
            id: "cph_login_prompt_body",
            defaultMessage: "Sign in to Social Club to see all the rewards you can earn, the awards you've won, and the possibilities still ahead of you."
          },
          cph_login_prompt_button: {
            id: "cph_login_prompt_button",
            defaultMessage: "Sign In"
          },
          cph_login_prompt_button_helper: {
            id: "cph_login_prompt_button_helper",
            defaultMessage: "Don't have an account?"
          },
          cph_login_prompt_button_helper_link: {
            id: "cph_login_prompt_button_helper_link",
            defaultMessage: "Join Social Club"
          },
          cph_callout_feedback_title: {
            id: "cph_callout_feedback_title",
            defaultMessage: "Share Your Feedback"
          },
          cph_callout_feedback_body: {
            id: "cph_callout_feedback_body",
            defaultMessage: "How are you enjoying GTA Online? Tell us your thoughts and ideas to help us shape the future of the game."
          },
          cph_callout_feedback_button: {
            id: "cph_callout_feedback_button",
            defaultMessage: "Give feedback"
          },
          cph_loggedin_nochar_title: {
            id: "cph_loggedin_nochar_title",
            defaultMessage: "Link a GTA Online Character"
          },
          cph_loggedin_nochar_body: {
            id: "cph_loggedin_nochar_body",
            defaultMessage: "We couldn't find a GTA Online character linked to your Social Club account. Link one or switch to a different Social Club account."
          },
          cph_loggedin_nochar_button: {
            id: "cph_loggedin_nochar_button",
            defaultMessage: "Link a game account"
          },
          cph_highlights_heading: {
            id: "cph_highlights_heading",
            defaultMessage: "Highlights"
          },
          cph_highlights_previous: {
            id: "cph_highlights_previous",
            defaultMessage: "Previous"
          },
          cph_highlights_next: {
            id: "cph_highlights_next",
            defaultMessage: "Next"
          },
          cph_highlights_group_aria: {
            id: "cph_highlights_group_aria",
            defaultMessage: "Highlight {index} of {total}"
          }
        }), (0, r.vU)({
          careers_home_msg: {
            id: "careers_home_msg",
            defaultMessage: "<p>Join a tight-knit team responsible for creating and publishing some of the most popular, innovative and critically acclaimed interactive entertainment in the world including the Grand Theft Auto series, the Red Dead series and many more.</p><p>Known for our dedication to quality and authenticity, a career at Rockstar Games is an opportunity to work on some of the most cutting edge, creatively rewarding and challenging projects available in any entertainment medium with some of the most talented people in the industry.</p><p>We offer successful candidates highly competitive salary and compensation packages, including a comprehensive benefits package for all eligible employees. Rockstar Games is an equal opportunity employer.</p>"
          }
        }), (0, r.vU)({
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
        }), (0, r.vU)({
          legacy_header_cta_label_reddeadredemption: {
            id: "legacy_header_cta_label_reddeadredemption",
            defaultMessage: "Buy Now"
          },
          highlights_title_std: {
            id: "highlights_title_std",
            defaultMessage: "Features"
          }
        }), (0, r.vU)({
          rsg_total_results_message: {
            id: "rsg_total_results_message",
            defaultMessage: "Showing {Tab} filtered by {Query}"
          },
          rsg_no_results: {
            id: "rsg_no_results",
            defaultMessage: "Sorry, there were no results."
          }
        }), (0, r.vU)({
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
          }
        }), {
          rating: "rockstargames-modules-core-headerb779524a07395da7e93e3f94b894760b",
          withDescriptors: "rockstargames-modules-core-headerf29967c2d943e6958c93f9ac98301530",
          withOutDescriptors: "rockstargames-modules-core-headere9b3aea7eb8a2525a70a3ba80f745751",
          text: "rockstargames-modules-core-headerc4698286c35a48702e43df24ba196769"
        });
      (0, b.s8)(t(8948)), dt((e => {
        let {
          descriptors: a = null,
          footer: n = null,
          href: s,
          img: r = null,
          titleSlug: i = null,
          style: c = {},
          className: d
        } = e;
        const [g, m] = (0, _.useState)(!1), {
          inView: v
        } = (0, Xa.YD)({
          threshold: .6
        }), [u, p] = (0, _.useState)({
          img_rating: r,
          rating_descriptors: a,
          rating_footer: n,
          url_rating: s
        }), {
          track: f
        } = te(), h = (0, o.Z)(), {
          data: w
        } = (0, k.aM)(Ct.GameData, {
          variables: {
            titleSlug: i
          },
          skip: !i
        });
        if ((0, _.useEffect)((() => {
            w && p(w?.game)
          }), [w]), (0, _.useEffect)((() => {
            v && !g && u.img_rating && (f({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "rating",
              element_placement: "rating"
            }), m(!0))
          }), [v]), !u.img_rating) return null;
        const y = !!u.rating_descriptors;
        return (0, l.jsxs)("div", {
          className: [Tt.rating, y ? Tt.withDescriptors : Tt.withOutDescriptors, d || ""].join(" "),
          style: (0, b.IO)(c),
          children: [(0, l.jsx)(Ta, {
            to: u.url_rating,
            target: "_blank",
            children: (0, l.jsx)("img", {
              alt: h.formatMessage(jt.components_ratings_link_alt, {
                rating: (x = u.img_rating, x.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8214)(`./${u.img_rating}`)
            })
          }), y && (0, l.jsxs)("div", {
            className: Tt.text,
            children: [(0, l.jsx)("p", {
              className: Tt.descriptors,
              dangerouslySetInnerHTML: {
                __html: u.rating_descriptors.replace(/<br>/g, ", ").substring(0, u.rating_descriptors.length - 2)
              }
            }), u.rating_footer && (0, l.jsx)("hr", {}), u.rating_footer && (0, l.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: u.rating_footer.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var x
      }));
      const zt = (0, b.zv)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, _.useState)(""), n = (0, Q.useNavigate)(), s = (0, k.qs)();
          return (0, l.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-headerec0a1e5d53889c279673bb8884a7fefc",
            onSubmit: e => {
              e.preventDefault(), s({
                navOpen: !1
              }), document.activeElement?.blur(), n(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, l.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, l.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        It = {
          skeleton: "rockstargames-modules-core-headerc073586d2c66f4d535b12cc27e125167",
          pulse: "rockstargames-modules-core-headerdd37397ba93ec7045dbf175d34f4d0f3",
          gen9Hero: "rockstargames-modules-core-headerf0603e7614d1053bfa5d7691ad6926b6"
        },
        Lt = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, l.jsx)("div", {
            className: [It.skeleton, It[a]].join(" ")
          }) : null
        };
      var At = t(7790);
      dt((e => {
        let {
          components: a = {},
          id: t = null,
          ids: n = null,
          skeleton: s
        } = e;
        const r = (e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: n = null,
            sync: s = !1
          } = e;
          const r = t ?? [a],
            {
              data: i
            } = (0, k.aM)(At.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: s
              },
              setTitleDataPath: n,
              skip: !r.length
            });
          return i?.tinaModulesInfo ?? null
        })({
          id: t,
          ids: n
        });
        if (!r) return (0, l.jsx)(Lt, {
          skeleton: s
        });
        const i = r?.[0]?.tina;
        return i ? (0, l.jsx)(l.Fragment, {
          children: r.map(((e, t) => {
            let {
              tina: n
            } = e;
            return (0, l.jsx)(Ha, {
              components: a,
              tina: n,
              componentProps: {
                tinaModulesInfo: r
              }
            }, t)
          }))
        }) : null
      })), t(3005);
      const Et = {
          carousel: "rockstargames-modules-core-headercf15fdf56f32c3f87bbc6de364ca6549",
          text: "rockstargames-modules-core-headeradd9c2e579e8b5fa1d63c815c3888fda",
          info: "rockstargames-modules-core-headera8ee3e01f327ae5fe07c9e0bfa86e688",
          active: "rockstargames-modules-core-headerb3818cc68f36a6cd2818f32c4dda9f54",
          title: "rockstargames-modules-core-headerfa767e6f7fd5873a22de13a22e37ca1f",
          gameTitle: "rockstargames-modules-core-headerc5187b7b0ae95da2d454086bbccd2830",
          videoTitle: "rockstargames-modules-core-headerb5fb79d618b88a391da36c9b6c77499e",
          cta: "rockstargames-modules-core-headera56d823b9aca828079e063457d1d5404",
          track: "rockstargames-modules-core-headeraddcd5665ea04ccb4ced23c035b6fb48",
          disableClick: "rockstargames-modules-core-headerb671fa8f68d53325e7ad92b0dcdf8d4f",
          items: "rockstargames-modules-core-headerc0109d4e50d4e02ad59bd87eaa0b664a",
          dragging: "rockstargames-modules-core-headercdaba64562ba35e1389ee1eef2958081",
          dots: "rockstargames-modules-core-headere0dacc69309c9d6fcb6b0b3147884d9a"
        },
        Pt = ((0, b.rE)((e => {
          let {
            locale: a,
            t,
            videos: n
          } = e;
          const {
            setBodyIsScrollable: s
          } = (0, b.Vg)(), [r, i] = (0, _.useState)(0), [o, c] = (0, _.useState)(0), d = (0, _.useRef)(null), g = (0, _.useRef)(null);
          return (0, _.useEffect)((() => {
            if (!d.current || g.current) return;
            const e = new(Ia())(d.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                i(r - 1 < 0 ? 0 : r - 1), c(0)
              },
              o = () => {
                const e = r + 1 >= n.length - 1 ? n.length - 1 : r + 1;
                i(e), c(0)
              },
              _ = e => {
                c(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !g.current?.classList.contains(Et.dragging) || a() && s(!1)
              },
              l = () => {
                a() && s(!0), c(0)
              },
              m = e => {
                "press" === e.type && d.current?.classList.add(`${Et.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${Et.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              v = () => {
                a() && s(!0), d.current && d.current.classList.remove(`${Et.disableClick}`)
              },
              u = () => {
                a() && s(!0)
              };
            return g.current.addEventListener("transitionend", u), e.on("swiperight", t), e.on("swipeleft", o), e.on("pan", _), e.on("panend", l), e.on("press tap", m), e.on("pressup", v), () => {
              e.off("swiperight", t), e.off("swipeleft", o), e.off("pan", _), e.off("panend", l), e.off("press tap", m), e.off("pressup", v), g.current && g.current.removeEventListener("transitionend", u), c(0)
            }
          }), [d.current, r]), (0, l.jsxs)("section", {
            className: Et.carousel,
            children: [(0, l.jsx)("div", {
              className: Et.track,
              ref: d,
              children: (0, l.jsx)("div", {
                className: `${Et.items} ${0!==o?Et.dragging:""}`,
                ref: g,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${o}px))`
                },
                children: n.map(((e, a) => (0, l.jsx)(Ta, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === a ? Et.active : "",
                  role: "link",
                  title: e.title,
                  children: (0, l.jsx)(Ot, {
                    video: e,
                    active: r === a
                  })
                }, e.id)))
              })
            }), (0, l.jsxs)("footer", {
              children: [(0, l.jsx)("div", {
                className: Et.text,
                children: n.map(((e, n) => (0, l.jsx)(Ta, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  children: (0, l.jsxs)("div", {
                    className: [Et.info, n === r ? Et.active : ""].join(" "),
                    children: [(0, l.jsxs)("div", {
                      className: Et.title,
                      children: [(0, l.jsx)("div", {
                        className: Et.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, l.jsx)("h2", {
                        className: Et.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, l.jsx)(Aa, {
                      className: Et.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, l.jsx)("div", {
                className: Et.dots,
                children: n.map(((e, a) => (0, l.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => i(a),
                  className: r === a ? Et.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })), {
          videoList: "rockstargames-modules-core-headerac4a3f3721c267cc6f83c02517c699ee",
          sectionHeader: "rockstargames-modules-core-headere04dc61ad8b2b615c9dfaf9ffb214ec9",
          arrowNav: "rockstargames-modules-core-headerfcd718f8e2ad2fd86c203388eb6d1311",
          items: "rockstargames-modules-core-headera67247dc7564cb44eb860f17a74f4d91",
          trackWrapper: "rockstargames-modules-core-headerd6275d12067759014acfc641c3b67c2e",
          track: "rockstargames-modules-core-headerf98f680dc320316a55ee0b652ffeadb6",
          dragging: "rockstargames-modules-core-headerb36ec1efe444ec64d8987b4970637bf6",
          arrow: "rockstargames-modules-core-headere2ef8fc068a872f3e064ab006554710b",
          previous: "rockstargames-modules-core-headerfd3c5cc44fa56f8ba5f902c7d49bd7f0",
          next: "rockstargames-modules-core-headerdbaec7d7e7c561a002be980a374474d6",
          disabled: "rockstargames-modules-core-headera9cd773a9e9cb799aaf655d52088af78"
        }),
        Dt = ((0, b.zv)((e => {
          let {
            vids: a,
            games: t,
            title: n,
            gameTitleNecessary: s
          } = e;
          const r = void 0 !== t ? "games" : "videos",
            i = "videos" === r ? a : t.results,
            o = (0, _.useRef)(null),
            [c, d] = (0, _.useState)(0),
            [g, m] = (0, _.useState)(0),
            v = e => {
              const a = Math.ceil(i.length / c);
              e < 0 ? e = 0 : e >= a - 1 && (e = a - 1), m(e)
            },
            [u, p] = (0, _.useState)(0);
          let f;
          return (0, _.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches,
                a = e("768px") ? 1 : e("990px") || e("1440px") ? 2 : e("1920px") ? 3 : 4;
              d(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, _.useEffect)((() => {
            if (o.current) {
              const e = new(Ia())(o.current),
                a = () => {
                  v(g - 1), p(0)
                },
                t = () => {
                  v(g + 1), p(0)
                },
                n = e => {
                  p(e.isFinal ? 0 : e.deltaX)
                },
                s = () => {
                  p(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", n), e.on("panend", s), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", n), e.off("panend", s), p(0)
              }
            }
          }), [o.current, g]), f = "games" === r ? (0, l.jsx)(l.Fragment, {
            children: t.results.map((e => (0, l.jsx)(_t, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, l.jsx)(l.Fragment, {
            children: a.map((e => (0, l.jsx)(Gt, {
              video: e,
              gameTitleNecessary: s
            }, e.id)))
          }), (0, l.jsxs)("section", {
            className: Pt.videoList,
            children: [(0, l.jsxs)("h3", {
              className: Pt.sectionHeader,
              children: [n, (0, l.jsxs)("div", {
                className: Pt.arrowNav,
                children: [(0, l.jsx)("div", {
                  className: [Pt.arrow, Pt.previous, 0 === g ? Pt.disabled : ""].join(" "),
                  onClick: () => v(g - 1)
                }), (0, l.jsx)("div", {
                  className: [Pt.arrow, Pt.next, g === Math.ceil(i.length / c) - 1 ? Pt.disabled : ""].join(" "),
                  onClick: () => v(g + 1)
                })]
              })]
            }), (0, l.jsx)("div", {
              className: Pt.items,
              children: (0, l.jsx)("div", {
                className: Pt.trackWrapper,
                children: (0, l.jsx)("div", {
                  className: [Pt.track, 0 !== u ? Pt.dragging : ""].join(" "),
                  ref: o,
                  style: {
                    transform: `translateX(calc(-${100*g}% + ${u}px - (var(--standard-grid-gap) * ${g}))`,
                    gridAutoColumns: `calc(100 / ${c} * 1% - calc(var(--standard-grid-gap) * (${c-1}/${c}))`
                  },
                  children: f
                })
              })
            })]
          })
        })), "rockstargames-modules-core-headerdde12a3eeb657b92d78550534aad83a4"),
        Vt = ((0, b.zv)((e => {
          let {
            error: a,
            t,
            domain: n = ""
          } = e;
          console.error({
            error: a
          });
          let s = a?.message ?? t("error-404-new");
          s = t("error-404-new");
          const r = a?.code ?? 398;
          return (0, l.jsxs)("div", {
            className: Dt,
            children: [(0, l.jsx)("h3", {
              children: `${s} (${r})`
            }), (0, l.jsx)(Ta, {
              to: "/",
              children: t("Home")
            }), "clr" !== n && (0, l.jsx)(zt, {})]
          })
        })), {
          videoPreview: "rockstargames-modules-core-headerfc0e81ebc632610b064bd79bae533a74",
          card: "rockstargames-modules-core-headerfc6828664c516027b5baee3792be77fc",
          info: "rockstargames-modules-core-headere148dbb5ca34e2d2402b5794f08564b6",
          title: "rockstargames-modules-core-headere0c7cede7f8e4c6dd3396f5902adc701",
          screencap: "rockstargames-modules-core-headera7f87f474160479bfc728d19f1adb08f",
          screencapLoaded: "rockstargames-modules-core-headerf5f152f73966c479dd7074174c910b5c",
          gameTitle: "rockstargames-modules-core-headerd25ff4ef3c29e0f22f716fbd7b790dcb"
        }),
        Ot = e => {
          let {
            video: a
          } = e;
          const [t] = (0, b.TZ)(a.screencap);
          return (0, l.jsx)("div", {
            className: [Vt.screencap, t ? Vt.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${a.screencap}) center/cover`
            }
          })
        },
        Gt = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: n
          } = e;
          const s = `/videos/${n.id}`,
            r = {
              className: Vt.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": s
            },
            i = (0, l.jsxs)("div", {
              className: Vt.card,
              children: [(0, l.jsx)(Ot, {
                video: n
              }), (0, l.jsxs)("div", {
                className: Vt.info,
                children: [a ? (0, l.jsx)("div", {
                  className: Vt.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: n.game.title
                  }
                }) : "", (0, l.jsx)("h5", {
                  className: Vt.title,
                  dangerouslySetInnerHTML: {
                    __html: n.title
                  }
                })]
              })]
            });
          return t ? (0, l.jsx)("a", {
            href: s,
            target: "_blank",
            ...r,
            children: i
          }) : (0, l.jsx)(Ta, {
            to: s,
            ...r,
            children: i
          })
        };
      t(400);
      const Bt = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Rt = (e, a, t, n) => ({
          text: e.formatMessage(a.sc_link_help),
          target: "_self",
          ga: {
            ...Bt,
            text: a.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(a.sc_link_support),
            href: "https://support.rockstargames.com/",
            target: "_self",
            ga: {
              ...Bt,
              text: a.sc_link_support.defaultMessage,
              link_url: "https://support.rockstargames.com/"
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(a.sc_link_legal),
            href: `https://${t.sites.www}.rockstargames.com/legal`,
            target: "_self",
            ga: {
              ...Bt,
              text: a.sc_link_legal.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/legal`
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(a.sc_link_privacy_policy),
            href: `https://${t.sites.www}.rockstargames.com/privacy`,
            target: "_self",
            ga: {
              ...Bt,
              text: a.sc_link_privacy_policy.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/privacy`
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(a.sc_link_cookies_policy),
            href: `https://${t.sites.www}.rockstargames.com/cookies`,
            target: "_self",
            ga: {
              ...Bt,
              text: a.sc_link_cookies_policy.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/cookies`
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(a.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), n?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Bt,
              text: a.sc_link_cookies_settings.defaultMessage,
              link_url: ""
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(a.sc_link_do_not_sell_my_information),
            href: `https://${t.sites.www}.rockstargames.com/ccpa`,
            target: "_self",
            ga: {
              ...Bt,
              text: a.sc_link_do_not_sell_my_information.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/ccpa`
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Ft = e => {
          let {
            text: a,
            target: t,
            href: n,
            ga: s,
            dataTestId: r,
            isSubLink: i,
            hasNotifications: o = !1,
            onClickCallback: _ = (() => {}),
            tabIndex: c
          } = e;
          const {
            track: d
          } = te();
          return (0, l.jsxs)("a", {
            className: i ? "rockstargames-modules-core-headere5f5a8b5af593a4ff89a050bee83855c" : "rockstargames-modules-core-headerc4b83eee740b9dae3772319e80be3951",
            "data-testid": r || "menuLink",
            title: a,
            href: n,
            target: t,
            rel: "noreferrer",
            tabIndex: c,
            onClick: e => {
              d(s), _(e)
            },
            children: [a, o && (0, l.jsx)("span", {
              className: "rockstargames-modules-core-headeraebdc1434e6a1921dee96f175cd36466"
            })]
          })
        },
        $t = e => {
          let {
            id: a,
            text: t,
            target: n,
            href: s,
            ga: r,
            hasNotifications: i = !1,
            dataTestId: o,
            children: c = [],
            activeSubNavId: d,
            setActiveSubNavId: g,
            setSubNavExtraHeight: m,
            onClickCallback: v = (() => {})
          } = e;
          const {
            track: u
          } = te(), {
            navOpen: p
          } = O(), f = (0, _.useRef)(null), [h, k] = (0, _.useState)(0), [b, w] = (0, _.useState)(0);
          (0, _.useEffect)((() => {
            d !== a && !1 === y && x(!0), d === a && x(!1)
          }), [d]), (0, _.useEffect)((() => {
            const e = () => {
              if (!f.current) return;
              k(f?.current?.scrollHeight);
              const e = window.getComputedStyle(f.current);
              if (e) {
                let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
                Number.isNaN(a) && (a = 0), w(a)
              }
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [f]);
          const [y, x] = (0, _.useState)(!0);
          return c.length > 0 ? (0, l.jsxs)("button", {
            className: "rockstargames-modules-core-headereffc0bdd4a4f25400c9c782c4b38ca2d",
            type: "button",
            "data-testid": o || "menuButton",
            tabIndex: p ? 0 : -1,
            "data-children-hidden": y,
            onClick: e => {
              e.stopPropagation(), u(r), d === a ? (g(-1), m(0)) : (g(a), m(h + b), f?.current?.children[0]?.focus())
            },
            children: [(0, l.jsx)("span", {
              className: "rockstargames-modules-core-headerb19e4f2b353b2a7b3288352e38631abf",
              children: t
            }), (0, l.jsx)("span", {
              className: "rockstargames-modules-core-headerbaed71b46816995fc60770c8659fddc2"
            }), (0, l.jsx)("nav", {
              className: "rockstargames-modules-core-headerae2fdcd90abfd2f74b6dc6785e0e04eb",
              ref: f,
              "aria-hidden": y,
              style: {
                height: y ? null : `${h}px`
              },
              children: c.map((e => (0, l.jsx)(Ft, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: y || !p ? -1 : 0
              })))
            })]
          }, t) : (0, l.jsx)(Ft, {
            text: t,
            target: n,
            href: s,
            ga: r,
            hasNotifications: i,
            dataTestId: o,
            isSubLink: !1,
            onClickCallback: v,
            tabIndex: p ? 0 : -1
          })
        },
        qt = e => {
          let {
            sc: a
          } = e, t = !1;
          t = !0;
          const n = (0, o.Z)(),
            {
              languageSelectorOpened: s,
              setLanguageSelectorOpened: r,
              activeSubNavId: i,
              setActiveSubNavId: c,
              subNavExtraHeight: d,
              setSubNavExtraHeight: g
            } = ja(),
            {
              setSelectedCharacterTuple: m
            } = O(),
            v = (0, b.bU)(),
            p = (0, b.rz)(v),
            [f, h] = (0, _.useState)(""),
            k = (0, Q.useLocation)(),
            w = `${a.login}?returnUrl=${f}&lang=${p}`,
            y = `${a.signup}&returnUrl=${f}&lang=${p}`,
            x = (0, _.useMemo)((() => (0, u.Z)()), []),
            M = (0, _.useMemo)((() => {
              const e = ((e, a, t, n, s, r) => [{
                text: a.formatMessage(e.sc_link_sign_in),
                href: t,
                ga: {
                  event: "account_menu_click",
                  text: e.defaultMessage,
                  link_url: t,
                  element_placement: "Account Menu"
                },
                dataTestId: "loginLink"
              }, {
                text: a.formatMessage(e.sc_link_join_social_club),
                href: n,
                ga: {
                  event: "account_menu_click",
                  text: e.defaultMessage,
                  link_url: n,
                  element_placement: "Account Menu"
                },
                dataTestId: "signUpLink"
              }, Rt(a, e, s, r)])(ga, n, w, y, x, window?.OneTrust);
              return e
            }), [ga, n, w, y, x]);
          return (0, _.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            h(e)
          }), [k]), (0, _.useEffect)((() => {
            m(!1)
          }), []), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("nav", {
              className: "rockstargames-modules-core-headerd8b1c62c15cdaf546241e4b13b77a8e3",
              "aria-label": n.formatMessage(ga.social_club_text),
              title: n.formatMessage(ga.social_club_text),
              children: (0, l.jsx)("div", {
                className: "rockstargames-modules-core-headera6cf01f6b0073d44ace2657d11e30b92",
                "data-logged-in": "false",
                style: {
                  "--scNavWrap-max-height": `${d}px`
                },
                children: M.map((e => (0, _.createElement)($t, {
                  ...e,
                  activeSubNavId: i,
                  setActiveSubNavId: c,
                  setSubNavExtraHeight: g,
                  key: e.text
                })))
              })
            }), (0, l.jsx)("div", {
              className: "rockstargames-modules-core-headerc38508c13f75b99affdabef433c631ce",
              children: (0, l.jsx)(pt, {
                theme: "sc-menu",
                languageSelectorOpened: s,
                setLanguageSelectorOpened: r,
                defaultMessage: ga.language_selector_default
              })
            })]
          })
        },
        Ut = e => t(e < 100 ? 4655 : e > 99 && e < 500 ? 98 : e > 499 && e < 750 ? 3662 : 9533),
        Ht = "rockstargames-modules-core-headerc335fbb3ea8b49739cc397a7d53b5f8a",
        Wt = e => {
          let {
            characterData: a,
            setMobileCardWidth: n,
            tabIndex: s
          } = e;
          const {
            currentCharId: r,
            setCurrentCharId: i
          } = O(), {
            track: c
          } = te(), d = (0, _.createRef)(), {
            platform: g,
            platformUsername: m,
            mugshotUrl: v,
            stats: u
          } = a, [p, f] = (0, _.useState)(v), [h] = (0, _.useState)(a.index), k = ma(g, "large"), b = r === a.index, w = (0, o.Z)(), y = () => {
            f(t(2490))
          };
          return (0, _.useEffect)((() => {
            d.current && n && n(d?.current?.offsetWidth)
          }), [d]), (0, l.jsxs)("button", {
            className: "rockstargames-modules-core-headera3f6abb9575af1327eb619be9d6b31e6",
            type: "button",
            "aria-hidden": b,
            onClick: e => {
              e.stopPropagation(), i(h);
              let a = "";
              "pc" === g ? a = "PC" : "ps4" === g ? a = "PS4" : "ps5" === g ? a = "PS5" : "xboxone" === g ? a = "Xbox One" : "xboxsx" === g && (a = "Xbox Series X|S"), c({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: h
              })
            },
            ref: d,
            tabIndex: s,
            children: [(0, l.jsxs)("div", {
              className: "rockstargames-modules-core-headercd6320c38823c444a47fd6c09d6f298c",
              "data-size": "small",
              children: [(0, l.jsx)("img", {
                src: p,
                alt: m,
                onError: y
              }), (0, l.jsx)("img", {
                src: p,
                alt: w.formatMessage(ga.profile_selector_mugshot, m),
                onError: y
              })]
            }), (0, l.jsxs)("div", {
              className: "rockstargames-modules-core-headerdd2a84ecdd78494709abe345815a932d",
              children: [(0, l.jsxs)("div", {
                className: "rockstargames-modules-core-headerc849eadf4ed0a2e71da76452dc9370f8",
                children: [(0, l.jsx)("img", {
                  src: k.src,
                  alt: k.alt
                }), (0, l.jsx)("div", {
                  className: "rockstargames-modules-core-headerc0b83e9a208cf0867e846afc53997361",
                  "data-size": "small",
                  children: m
                })]
              }), (0, l.jsx)("div", {
                className: "rockstargames-modules-core-headerefbaf5497013bd0f2beeb5f6427735ae",
                children: (0, l.jsxs)("div", {
                  className: "rockstargames-modules-core-headerba6ead477fdd2f3147b4360899c2d68e",
                  children: [(0, l.jsx)("img", {
                    className: Ht,
                    src: Ut(u.overview.rank.value),
                    alt: "RP Category"
                  }), (0, l.jsx)("img", {
                    className: Ht,
                    src: Ut(u.overview.rank.value),
                    alt: w.formatMessage(ga.profile_selector_rp_icon)
                  }), (0, l.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Jt = {
          scNavWrapper: "rockstargames-modules-core-headerfefba4e30506c0f8ecc093516c3b914b",
          rpLevel: "rockstargames-modules-core-headerbeb2be934b029558ef8e27e5673af2ac",
          rpIcon: "rockstargames-modules-core-headerdacab97f333174c4d84479bc1c9ae9c7",
          scProfileDetails: "rockstargames-modules-core-headerf8fb68c4b2e6843ec541af24d66e66f9",
          scAvatar: "rockstargames-modules-core-headerc514e0bfe38ebc8a2e1f182ab54606f2",
          scAvatarPlatform: "rockstargames-modules-core-headerd6849b8aebf42b35aa36ce465931b88e",
          scProfileStats: "rockstargames-modules-core-headera52e2beebfe4a1ed6a8f3b7d14a4bd86",
          scNames: "rockstargames-modules-core-headerb276a27956d4b0ee674f74ba3ca20e16",
          scTagsNames: "rockstargames-modules-core-headerc9d347c5b6b8f13e3ede634fdcc59f9f",
          scUserName: "rockstargames-modules-core-headerc2617e6474b2a136f5ddba22286c72fd",
          scCrewName: "rockstargames-modules-core-headerf7a2d6eb9e646b251050092cb443deda",
          scCrewRankBar: "rockstargames-modules-core-headerf813a344cf07a47169b0f74ca4e687f7",
          scCrewRankBarItem: "rockstargames-modules-core-headerbf70fbb6695ced1efc1f1882c6ec8673",
          scProgress: "rockstargames-modules-core-headera9413416c78f963f41432ab507d8f1ce",
          scRpLevel: "rockstargames-modules-core-headerc2c1a40b9a51a1a507dc9204a34115ac",
          scRpIcon: "rockstargames-modules-core-headera01ea9f7df514e63e530f6cab372883c",
          scMoney: "rockstargames-modules-core-headerdf39d1cd9eb13394a47ebbce84497f14",
          scCash: "rockstargames-modules-core-headera4c426e004158e68bb9fc089bfd6da2b",
          scBank: "rockstargames-modules-core-headerc38d10918e911b5a7f7f0253d0e4db6c"
        },
        Zt = e => {
          let {
            character: a,
            platformTag: n
          } = e;
          const {
            data: s
          } = X(), {
            track: r
          } = te(), i = (0, o.Z)(), [c, d] = (0, _.useState)([]), [g, m] = (0, _.useState)(null), [v, u] = (0, _.useState)(null), [p, f] = (0, _.useState)(!1), [h, k] = (0, _.useState)(-1), [b, w] = (0, _.useState)([]), [y, x] = (0, _.useState)(0), M = t(2490), [S, N] = (0, _.useState)("0"), [C, j] = (0, _.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          });
          let z = () => {
            L((0, l.jsx)("img", {
              src: M,
              alt: s.nickname
            }))
          };
          z = () => {
            L((0, l.jsx)("img", {
              src: M,
              alt: i.formatMessage(ga.profile_selector_mugshot, {
                userName: s.nickname
              })
            }))
          };
          let [I, L] = (0, _.useState)((0, l.jsx)("img", {
            className: Jt.scAvatarImg,
            src: a.mugshotUrl,
            alt: s.nickname,
            onError: z
          }));
          [I, L] = (0, _.useState)((0, l.jsx)("img", {
            className: Jt.scAvatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(ga.profile_selector_mugshot, {
              userName: s.nickname
            }),
            onError: z
          })), (0, _.useEffect)((() => {
            d(s.crews ?? [])
          }), [s]), (0, _.useEffect)((() => {
            L((0, l.jsx)("img", {
              src: a.mugshotUrl,
              alt: s.nickname,
              onError: z
            })), N(T(a.stats.overview.bank.value)), j(T(a.stats.overview.cash.value)), x(a.stats.overview.rank.value)
          }), [a, s]), (0, _.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), u(e.crewColour), k(e.rankOrder), f(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && f(!0))
            }))
          }), [c]), (0, _.useEffect)((() => {
            const e = [];
            if (!p && h > -1)
              for (let a = 5; a > h; a -= 1) e.push((0, l.jsx)("div", {
                className: Jt.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== v ? v : ""
                }
              }, `crewrankbar-${a}`));
            w(e)
          }), [h, p, v]);
          const A = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: n.alt,
              link_url: void 0
            })
          };
          return (0, l.jsxs)("div", {
            className: Jt.scProfileDetails,
            onClick: A,
            onKeyUp: A,
            role: "button",
            tabIndex: -1,
            children: [(0, l.jsxs)("div", {
              className: Jt.scAvatar,
              children: [I, (0, l.jsx)("div", {
                className: Jt.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, l.jsx)("img", {
                  src: n.src,
                  alt: n.alt
                })
              })]
            }), (0, l.jsxs)("div", {
              className: Jt.scProfileStats,
              children: [(0, l.jsx)("div", {
                className: Jt.scNames,
                children: (0, l.jsxs)("div", {
                  className: Jt.scTagsNames,
                  children: [(0, l.jsx)("span", {
                    className: Jt.scUserName,
                    children: a.platformUsername
                  }), g && (0, l.jsxs)("span", {
                    className: Jt.scCrewName,
                    "data-arrow-tag": p,
                    children: [g, !p && (0, l.jsx)("div", {
                      className: Jt.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, l.jsxs)("div", {
                className: Jt.scProgress,
                children: [(0, l.jsxs)("div", {
                  className: Jt.scRpLevel,
                  children: [(0, l.jsx)("img", {
                    className: Jt.scRpIcon,
                    src: Ut(y),
                    alt: i.formatMessage(ga.profile_selector_rp_icon)
                  }), (0, l.jsx)("img", {
                    className: Jt.scRpIcon,
                    src: Ut(y),
                    alt: "RP Level Icon"
                  }), (0, l.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, l.jsxs)("div", {
                  className: Jt.scMoney,
                  children: [(0, l.jsxs)("span", {
                    className: Jt.scCash,
                    children: ["$", C]
                  }), (0, l.jsxs)("span", {
                    className: Jt.scBank,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        Xt = (e, a) => {
          const [t, n] = (0, _.useState)(0);
          return (0, _.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, s = t.getBoundingClientRect(), {
                width: r
              } = s;
              let i = r;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                i += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              n(i)
            }
          }), [e]), t
        },
        Kt = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: n = 17,
            slideChangeCallback: s = null,
            slideClickCallback: r = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: c = !1
          } = e;
          const d = (0, _.createRef)(),
            g = Xt(d, !1),
            [m, v] = (0, _.useState)(!1),
            [u, p] = (0, _.useState)(0),
            [f, h] = (0, _.useState)(0),
            [k, b] = (0, _.useState)([n]),
            [w, y] = (0, _.useState)(k[0]),
            [x, M] = (0, _.useState)(252),
            [S, N] = (0, _.useState)(0),
            [C, j] = (0, _.useState)([]),
            [T, z] = (0, _.useState)([]),
            [I, L] = (0, _.useState)(!1),
            A = e => {
              if (!0 === m || !0 === c) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(a)
            },
            E = e => {
              if (!0 === m || 0 === f || !0 === c) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                n = t > f ? 1 : -1,
                r = Math.abs(f - t);
              r > a ? (n > 0 ? (() => {
                if (!0 === m) return;
                v(!0);
                const e = u - 1 < 0 ? 0 : u - 1;
                p(e), y(k[e]), s && s(e)
              })() : (() => {
                if (!0 === m) return;
                v(!0);
                let e = u + 1 >= k.length ? k.length - 1 : u + 1;
                e < 0 && (e = 0), p(e), y(k[e]), s && s(e)
              })(), h(0)) : y(k[u] + r * n)
            },
            P = () => {
              !0 !== m && !0 !== c && (v(!0), !0 !== m && (y(k[u]), h(0)))
            };
          return (0, _.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, _.createRef)())
            })), j(e)
          }), [i]), (0, _.useEffect)((() => {
            if (C.length < 1) return;
            M(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            N(t + a)
          }), [C]), (0, _.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              v(!1)
            }), t)
          }), [m, t]), (0, _.useEffect)((() => {
            b(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * g - .5 * x - 2 * n + S : (0 === e && (a = n - e * x), e === t - 1 && t > 1 && (a = t * x * -1 + (g - (n - S))), e > 0 && e < t - 1 && (a = e * x * -1 + (.5 * g - .5 * x + .5 * S)), a)
            })(a)))), 1 === i.length ? L(!0) : L(!1)
          }), [d.current, i, g]), (0, _.useEffect)((() => {
            const e = (a = u, i.map(((e, t) => {
              const n = {
                active: !1
              };
              return t === a && (n.active = !0), n
            })));
            var a;
            z(e)
          }), [i, u]), (0, _.useEffect)((() => {
            !0 !== o && !0 !== c || y(k[0])
          }), [c, o, k]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: "rockstargames-modules-core-headerc24cdb3b6cfd7aab91061f873ec6387f",
              ref: d,
              onTouchStart: A,
              onTouchMove: E,
              onTouchEnd: P,
              onMouseDown: A,
              onMouseMove: E,
              onMouseUp: P,
              onClick: () => {
                null !== r && r(u)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, l.jsx)("div", {
                className: "rockstargames-modules-core-headere88bab6974a3bc58871f01a4176d19cc",
                "data-interaction-blocked": m,
                "data-single-item": I,
                style: {
                  transform: I ? null : `translateX(${w}px)`
                },
                children: i.map(((e, a) => (0, l.jsx)("div", {
                  className: "rockstargames-modules-core-headerf6d2431960fd2437473fe390a1e22d0a",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === o && (0, l.jsx)("div", {
              className: "rockstargames-modules-core-headerf4140c4d02511e4a8bc533409e13cd87",
              children: T.map((e => (0, l.jsx)("div", {
                className: "rockstargames-modules-core-headerbaf9524c4580ae16f02f39fafbc4bf69",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Qt = {
          scNavWrapper: "rockstargames-modules-core-headerfa53f18852129e03ba8dc060b55b825f",
          rpLevel: "rockstargames-modules-core-headerba92fb9b79d8b55e93cf33d80ef256ec",
          rpIcon: "rockstargames-modules-core-headeree3f66d9e70ca49601c42bec7bcfe91e",
          scProfile: "rockstargames-modules-core-headerdcfb62af2dd924a9d9d84973a9b58636",
          scCharacterSelector: "rockstargames-modules-core-headerdf6e36240622236ddf3732eb9bf5c7d1",
          scCharacterSelectBtn: "rockstargames-modules-core-headerb03576d86b0d62a5d33072756de057e9",
          open: "rockstargames-modules-core-headera006d68ff7dfa9eb69cac9bc10a56b06",
          scCharacterList: "rockstargames-modules-core-headerc18bf531cb9f9d9e4e6bb774827b6acc",
          scNav: "rockstargames-modules-core-headerc23ac55d71661d4cfc3d82ddd18b4271",
          scLanguageSelector: "rockstargames-modules-core-headeraefbcdb6029354546f99928f36615f60",
          scNavHeader: "rockstargames-modules-core-headerf5c1e3c28f2ba35f04f4b8406ed50acc",
          scNavWrap: "rockstargames-modules-core-headerd4eccedfc49db199a17e889e285311f5"
        },
        Yt = (0, b.zv)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: n,
            refCharacterListDesktop: s,
            menuPadding: r,
            longCharList: c,
            setLongCharList: d,
            isMobileMode: g,
            setIsMobileMode: m
          } = e;
          const v = (0, o.Z)(),
            {
              languageSelectorOpened: p,
              setLanguageSelectorOpened: f,
              activeSubNavId: h,
              setActiveSubNavId: w,
              subNavExtraHeight: y,
              setSubNavExtraHeight: x,
              scNavOpened: M,
              setScNavOpened: S
            } = ja(),
            [N, C] = (0, _.useState)(""),
            j = (0, Q.useLocation)(),
            {
              lsSettings: T
            } = (0, b.TG)(),
            {
              track: z
            } = te(),
            I = (0, k.cC)(),
            {
              data: L,
              loggedIn: A
            } = X(),
            {
              charactersNeeded: E,
              currentCharId: P,
              hasNotifications: D,
              navOpen: V,
              setCurrentCharId: G,
              setHasNotifications: B,
              setSelectedCharacterTuple: R,
              setUserData: F
            } = O(),
            [$, q] = (0, _.useState)(null),
            [U, H] = (0, _.useState)(null),
            [W, J] = (0, _.useState)(!1),
            [Z, K] = (0, _.useState)(!1),
            [Y, ee] = (0, _.useState)(0),
            [ae, ne] = (0, _.useState)(0),
            [se, re] = (0, _.useState)(0),
            ie = (0, _.createRef)(),
            oe = Xt(ie, !1),
            _e = (0, _.createRef)(),
            [ce, le] = (0, _.useState)(0),
            [de, ge] = (0, _.useState)([]),
            [me, ve] = (0, _.useState)(244);
          let ue = !1;
          ue = !0;
          const {
            clientId: pe
          } = (0, b.E$)(), fe = (0, _.useMemo)((() => (0, u.Z)()), []), he = (0, _.useMemo)((() => {
            const e = ((e, a, t, n, s, r, i, o) => [{
              text: a.formatMessage(e.sc_link_activity_feed),
              href: `https://${t.host}.rockstargames.com/`,
              target: "_self",
              ga: {
                ...Bt,
                text: e.sc_link_activity_feed.defaultMessage,
                link_url: `https://${t.host}.rockstargames.com/`
              },
              dataTestId: "activityFeedLink"
            }, {
              text: a.formatMessage(e.sc_link_account),
              target: "_self",
              dataTestId: "accountButton",
              children: [{
                text: a.formatMessage(e.sc_link_view_my_profile),
                href: n.profile_link,
                target: "_self",
                ga: {
                  ...Bt,
                  text: e.sc_link_view_my_profile.defaultMessage,
                  link_url: n.profile_link
                },
                dataTestId: "viewMyProfileLink"
              }, {
                text: a.formatMessage(e.sc_link_messages),
                href: `https://${t.host}.rockstargames.com/message`,
                target: "_self",
                ga: {
                  ...Bt,
                  text: e.sc_link_messages.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/message`
                },
                dataTestId: "messagesLink"
              }, {
                text: a.formatMessage(e.sc_link_game_activation),
                href: `https://${t.host}.rockstargames.com/activate`,
                target: "_self",
                ga: {
                  ...Bt,
                  text: e.sc_link_game_activation.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/activate`
                },
                dataTestId: "gameActivationLink"
              }]
            }, {
              text: a.formatMessage(e.sc_link_notifications),
              href: `https://${t.host}.rockstargames.com/notifications`,
              target: "_self",
              hasNotifications: s,
              ga: {
                ...Bt,
                text: e.sc_link_notifications.defaultMessage,
                link_url: `https://${t.host}.rockstargames.com/notifications`
              },
              dataTestId: "notificationsLink"
            }, {
              text: a.formatMessage(e.sc_link_crews),
              href: `https://${t.host}.rockstargames.com/member/${n.nickname}/crews`,
              target: "_self",
              ga: {
                ...Bt,
                text: e.sc_link_crews.defaultMessage,
                link_url: `https://${t.host}.rockstargames.com/member/${n.nickname}/crews`
              },
              dataTestId: "crewsLink"
            }, {
              text: a.formatMessage(e.sc_link_friends),
              target: "_self",
              dataTestId: "friendsButton",
              children: [{
                text: a.formatMessage(e.sc_link_my_friends),
                href: `https://${t.host}.rockstargames.com/member/${n.nickname}/friends`,
                target: "_self",
                ga: {
                  ...Bt,
                  text: e.sc_link_my_friends.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/member/${n.nickname}/friends`
                },
                dataTestId: "myFriendsLink"
              }, {
                text: a.formatMessage(e.sc_link_import_friends),
                href: `https://${t.host}.rockstargames.com/friends/import`,
                target: "_self",
                ga: {
                  ...Bt,
                  text: e.sc_link_import_friends.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/friends/import`
                },
                dataTestId: "importFriendsLink"
              }, {
                text: a.formatMessage(e.sc_link_find_friends),
                href: `https://${t.host}.rockstargames.com/members`,
                target: "_self",
                ga: {
                  ...Bt,
                  text: e.sc_link_import_friends.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/members`
                },
                dataTestId: "findFriendsLink"
              }]
            }, {
              text: a.formatMessage(e.sc_link_settings),
              href: `https://${t.host}.rockstargames.com/settings`,
              target: "_self",
              ga: {
                ...Bt,
                text: e.sc_link_settings.defaultMessage,
                link_url: `https://${t.host}.rockstargames.com/settings`
              },
              dataTestId: "settingsLink"
            }, Rt(a, e, i, o), {
              text: a.formatMessage(e.sc_link_log_out),
              href: `${t.logout}?returnUrl=${r}`,
              target: "_self",
              ga: {
                ...Bt,
                text: e.sc_link_log_out.defaultMessage,
                link_url: `${t.logout}?returnUrl=${r}`
              },
              dataTestId: "logoutButton"
            }])(ga, v, a, L, D, N, fe, window?.OneTrust);
            return e
          }), [ga, v, a, L, D, N, fe]), ke = () => {
            K(r + me * Y < oe)
          }, be = () => {
            if (_e.current) {
              const {
                current: e
              } = _e, a = e?.scrollHeight;
              le(a)
            }
          };
          return (0, _.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            fe.currentSite?.site === u.z.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [j]), (0, _.useEffect)((() => {
            ge(L.characters[E] ?? [])
          }), [L, E]), (0, _.useEffect)((() => {
            L && F(L)
          }), [L]), (0, _.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== A && !e.length) return void R(!1);
            if (null == P || !e.length) return;
            const a = e?.[P] ?? e?.[0] ?? null;
            R(!!a?.platform && [a.platform, a.characterSlot])
          }), [P, L, A]), (0, _.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const e = await (0, b.ZF)("friends/getInvites", {
                pingBearer: I
              });
              if (e) {
                const {
                  rockstarAccountList: a
                } = e, {
                  count: t
                } = await (0, b.ZF)("notification/count", {
                  pingBearer: I
                });
                B(t > 0 || a.total > 0)
              }
            })()
          }), [L]), (0, _.useEffect)((() => {
            ke()
          }), [me]), (0, _.useEffect)((() => {
            const e = () => {
              ne(window.innerWidth), re(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? m(!0) : m(!1), n(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, _.useEffect)((() => {
            let e = de.length - 1;
            e < 0 && (e = 0), ee(e);
            const a = de.length > 0 ? de[P] ?? de[0] : null;
            if (!a) return;
            const t = null !== a ? ma(a.platform, "large") : null;
            H(t), q(a), de.length > 1 ? J(!0) : J(!1), d(de.length - 1 > 3)
          }), [P, de]), (0, _.useEffect)((() => {
            ke()
          }), [Y, g, ae, de]), (0, _.useEffect)((() => {
            be(), setTimeout(be, 1e3)
          }), [ae, se]), (0, _.useEffect)((() => {
            const e = T?.currentCharId ?? 0;
            G(Math.max(0, Math.min(e, de.length - 1)))
          }), [de, T]), (0, l.jsxs)(l.Fragment, {
            children: [null !== $ && "gtao" === E && (0, l.jsxs)("div", {
              className: Qt.scProfile,
              tabIndex: -1,
              "aria-label": v.formatMessage(ga.profile_selector_profile_card),
              children: [(0, l.jsx)(Zt, {
                s: Qt,
                character: $,
                platformTag: U
              }), !0 === W && (0, l.jsxs)("div", {
                className: Qt.scCharacterSelector,
                children: [(0, l.jsx)("button", {
                  className: Qt.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    n(a), z({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, l.jsx)("span", {
                    children: (0, l.jsx)(i.Z, {
                      ...ga.profile_selector_switch_character
                    })
                  })
                }), !1 === g && (0, l.jsx)("div", {
                  className: Qt.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": t,
                  ref: s,
                  children: de.map((e => (0, l.jsx)(Wt, {
                    tabIndex: t ? -1 : 0,
                    characterData: e
                  }, e.mugshotUrl)))
                }), !0 === g && (0, l.jsx)("div", {
                  className: Qt.scCharacterList,
                  "data-single-item": 2 === de.length,
                  "data-swiper-disabled": Z,
                  "aria-hidden": t,
                  ref: ie,
                  children: (0, l.jsx)(Kt, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      z({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: Z,
                    disableSwiper: Z,
                    children: de.filter(((e, a) => a !== P)).map((e => (0, _.createElement)(Wt, {
                      characterData: e,
                      setMobileCardWidth: ve,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, l.jsxs)("nav", {
              className: Qt.scNav,
              "aria-hidden": !V,
              children: [(0, l.jsx)("button", {
                className: Qt.scNavHeader,
                type: "button",
                "data-opened": M,
                "data-nav-opened": V,
                tabIndex: M ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), M || S(!0)
                },
                children: (0, l.jsx)("span", {
                  children: L.nickname
                })
              }), (0, l.jsx)("div", {
                className: Qt.scNavWrap,
                "data-opened": M,
                "data-logged-in": "true",
                ref: _e,
                "data-feat-g": !0,
                style: {
                  "--scNavWrap-max-height": `${ce+y}px`
                },
                children: he.map(((e, a) => (0, _.createElement)($t, {
                  ...e,
                  id: a,
                  activeSubNavId: h,
                  setActiveSubNavId: w,
                  setSubNavExtraHeight: x,
                  key: e.text
                })))
              })]
            }), (0, l.jsx)("div", {
              className: Qt.scLanguageSelector,
              tabIndex: -1,
              style: {
                visibility: V ? null : "hidden"
              },
              children: (0, l.jsx)(pt, {
                theme: "sc-menu",
                languageSelectorOpened: p,
                setLanguageSelectorOpened: f,
                defaultMessage: ga.language_selector_default
              })
            })]
          })
        })),
        en = {
          scNavWrapper: "rockstargames-modules-core-headere838e44838fa7da64c336b852ea24768",
          rpLevel: "rockstargames-modules-core-headerb7db666a33c3691e5a8abdfc26fada5f",
          rpIcon: "rockstargames-modules-core-headerab2979bf0b93aeaa2e599785a1769750",
          scMenu: "rockstargames-modules-core-headerf026f7ffa165071bbd97c66c863ebd5b",
          navOpen: "rockstargames-modules-core-headerdac3bc9aaa59d80e4378b25b8ee51471",
          dragHandle: "rockstargames-modules-core-headereaae66d2f36e13f46856d826fc41d5dc",
          dragHandleBtn: "rockstargames-modules-core-headerdb7e8039eb4bbe26b77f3b269ba8a692",
          scOverlay: "rockstargames-modules-core-headerb1e1c10079e10528c1bcb20fea525546"
        },
        an = () => {
          let e = !1;
          e = !0;
          const a = (0, o.Z)(),
            {
              languageSelectorOpened: n,
              setLanguageSelectorOpened: s,
              setActiveSubNavId: r,
              scNavOpened: i,
              setScNavOpened: c,
              charListHidden: d,
              setCharListHidden: g
            } = ja(),
            [m, v] = (0, _.useState)(!1),
            {
              setBodyIsScrollable: u
            } = (0, b.Vg)(),
            {
              navHidden: p = !1
            } = (0, k.eJ)(),
            {
              loggedIn: f
            } = X(),
            {
              currentCharId: h,
              navOpen: w,
              setNavOpen: y
            } = O(),
            [x, M] = (0, _.useState)(!1),
            S = (0, k.lY)(F),
            N = (0, _.useRef)(),
            [C, j] = (0, _.useState)(0),
            T = (0, _.createRef)(),
            [z, I] = (0, _.useState)(!1),
            [L, A] = (0, _.useState)(0),
            [E, P] = (0, _.useState)(!1),
            {
              mutateLSSettings: D
            } = (0, b.TG)(),
            V = (0, _.useCallback)((e => {
              g(e), N.current && !0 === e && (N.current.scrollTop = 0)
            }), [N]);
          return (0, _.useEffect)((() => {
            null !== h && D({
              key: "currentCharId",
              value: h
            }), !1 === f && D({
              key: "currentCharId",
              value: null
            })
          }), [h, f]), (0, _.useEffect)((() => {
            N.current && (!1 === d && !1 === x && (N.current.style.height = `${N.current.scrollHeight}px`), !0 === d && (N.current.style.height = null))
          }), [d, N, x]), (0, _.useEffect)((() => {
            const e = () => {
                y(!1), V(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, _.useEffect)((() => {
            y(!1), V(!0)
          }), [p]), (0, _.useEffect)((() => {
            if (T.current) {
              const {
                current: e
              } = T, a = window.getComputedStyle(e);
              j(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [T]), (0, _.useEffect)((() => {
            u(!z || !w)
          }), [w, z]), (0, _.useEffect)((() => {
            P(window.navigator.userAgent.includes("Mac"))
          }), []), (0, _.useEffect)((() => {
            if (!T.current) return;
            const e = () => {
              v(T?.current?.scrollHeight >= window.innerHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [T]), (0, _.useEffect)((() => {
            w || (r(-1), s(!1))
          }), [w]), (0, _.useEffect)((() => {
            n && (d || V(!0), i && (c(!1), r(-1)))
          }), [n]), (0, _.useEffect)((() => {
            i && (n && s(!1), d || V(!0))
          }), [i]), null === f ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("div", {
              className: [en.scMenu, w ? en.navOpen : ""].join(" "),
              "data-logged-in": f,
              "data-mac-browser": E,
              "data-scroll-mode": m,
              ref: T,
              "aria-hidden": !w,
              children: [(0, l.jsx)("button", {
                className: en.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  A(a)
                },
                onTouchMove: e => {
                  if (0 === L) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(L - a) > 1 && (A(0), y(!1))
                },
                children: (0, l.jsx)("img", {
                  className: en.dragHandle,
                  src: t(9963),
                  alt: a.formatMessage(ga.sc_menu_drag_handle)
                })
              }), f ? (0, l.jsx)(Yt, {
                sc: S,
                charListHidden: d,
                hideCharacterList: V,
                refCharacterListDesktop: N,
                menuPadding: C,
                longCharList: x,
                setLongCharList: M,
                isMobileMode: z,
                setIsMobileMode: I
              }) : (0, l.jsx)(qt, {
                sc: S,
                navOpen: w
              })]
            }), (0, l.jsx)("div", {
              className: [en.scOverlay, w ? en.navOpen : ""].join(" "),
              "data-logged-in": f
            })]
          })
        },
        tn = (e, a, t, n) => ({
          event: e || "nav_click",
          link_url: a,
          text: t,
          element_placement: `Global Nav > ${n}`
        }),
        nn = "https",
        sn = "rockstargames.com",
        rn = () => {
          const e = ge(),
            a = (() => {
              const e = (0, _.useContext)(le);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            t = me();
          return n => {
            const s = ((e, a) => {
              const {
                sites: t,
                currentSite: n
              } = a;
              return t[e.domain] ? new URL(`${nn}://${t[e.domain]}.${sn}`) : 0 === e.domain.indexOf("http") ? new URL(e.domain) : new URL(`${nn}://${t[n?.subDomain||t.www]}.${sn}`)
            })(n, e);
            if (!n.path) return new URL(s);
            const r = [
                ["username", t.nickname]
              ],
              i = ((e, a) => a.reduce(((e, a) => {
                let [t, n] = a;
                return e.replaceAll(`{${t}}`, n)
              }), e))(n.path, r),
              o = "www" === n.domain && "www" !== e.currentSite.site ? ((e, a) => {
                if (!a || a.iso === v.iso) return e;
                const t = a.subdomaincom;
                return "/" === e[0] ? t + e : `${t}/${e}`
              })(i, a) : i;
            return new URL(o, s)
          }
        },
        on = "nav-external",
        _n = "nav-dropdown",
        cn = "games-menu",
        ln = e => {
          let {
            children: a,
            location: t,
            className: n,
            isLegacy: s,
            label: r,
            type: i,
            target: c,
            gaEvent: d,
            gaText: g,
            gaBreadCrumb: m,
            dataTestId: v,
            onNavigate: u,
            ...p
          } = e;
          const f = (0, o.Z)(),
            {
              currentSite: h
            } = ge(),
            {
              track: k
            } = te(),
            b = rn(),
            w = (0, _.useMemo)((() => {
              const e = {};
              return "_blank" === c && (e["aria-label"] = f.formatMessage(_e.nav_opens_in_new_window, {
                text: r
              }), e.rel = "noopener"), e
            }), [r, c]);
          if (!t) return null;
          const y = b(t),
            x = i === on,
            M = x || h && h.site !== t.domain ? y.href : y.pathname + y.search + y.hash,
            S = Boolean(x || s || document.documentElement.classList.contains("legacyPage"));
          return (0, l.jsx)(Q.Link, {
            className: n,
            target: c,
            to: M,
            onClick: () => (k(tn(d, y.toString(), g, m)), void u?.()),
            reloadDocument: S,
            "data-testid": v,
            ...p,
            ...w,
            children: a
          })
        },
        dn = {
          callToAction: "rockstargames-modules-core-headerc82c6509b58380dd464812d2c26863ba",
          highlight: "rockstargames-modules-core-headerf530a8cc3c7d4c9e1f119a6a76ebb853"
        },
        gn = e => {
          let {
            children: a,
            dataTestId: t,
            location: n,
            variant: s,
            gaEvent: r,
            gaText: i,
            target: o,
            onNavigate: _
          } = e;
          return (0, l.jsx)("div", {
            className: dn.callToActionContainer,
            children: (0, l.jsx)(ln, {
              className: [dn.callToAction, s ? dn[s] : ""].join(" "),
              dataTestId: t,
              location: n,
              gaEvent: r,
              gaText: i,
              gaBreadCrumb: i,
              onNavigate: _,
              target: o,
              children: a
            })
          })
        },
        mn = {
          targets: [{
            intlMessage: _e.search_target_games,
            tab: "games",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=games"
            }
          }, {
            intlMessage: _e.search_target_posts,
            tab: "posts",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=posts"
            }
          }, {
            intlMessage: _e.search_target_videos,
            tab: "videos",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=videos"
            }
          }, {
            intlMessage: _e.search_target_community,
            tab: "socialClub",
            type: "nav-dropdown",
            targets: [{
              intlMessage: _e.search_target_users,
              type: "",
              location: {
                domain: "socialClub",
                path: "/members/{query}"
              }
            }, {
              intlMessage: _e.search_target_crews,
              type: "",
              location: {
                domain: "socialClub",
                path: "/crews/{query}"
              }
            }, {
              intlMessage: _e.search_target_jobs,
              type: "",
              location: {
                domain: "socialClub",
                path: "/jobs/{query}"
              }
            }, {
              intlMessage: _e.search_target_user_photos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/photos/{query}"
              }
            }, {
              intlMessage: _e.search_target_user_videos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/videos/{query}"
              }
            }]
          }]
        };
      var vn = t(2430),
        un = t(6567);
      const pn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        fn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        hn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        kn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        bn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        wn = {
          pillButton: "rockstargames-modules-core-headerff69ac71bd625f2fffaa47c831767ea5",
          selected: "rockstargames-modules-core-headera0399789b5f8119314e2ee494274ef8a"
        },
        yn = e => {
          let {
            children: a,
            selected: t,
            ...n
          } = e;
          return (0, l.jsx)("button", {
            type: "button",
            className: [wn.pillButton, t ? wn.selected : ""].join(" "),
            ...n,
            children: a
          })
        };
      var xn = t(9113);
      const Mn = {
          subMenu: "rockstargames-modules-core-headere93b49b419838ee4e2be9f55b68de66d",
          fadeIn: "rockstargames-modules-core-headerae33d9922a0df7157a8ae8af16f46854"
        },
        Sn = {
          enter: {
            opacity: 1,
            zIndex: 101,
            visibility: "visible"
          },
          exit: {
            opacity: 0,
            zIndex: 100,
            transitionEnd: {
              visibility: "hidden"
            }
          }
        },
        Nn = e => {
          let {
            openerRef: a,
            isOpen: t,
            isMobile: n,
            children: s
          } = e;
          const [r, i] = (0, _.useState)(null), {
            styles: o,
            attributes: c,
            forceUpdate: d
          } = (0, xn.D)(a, r, {
            placement: "bottom-start",
            modifiers: [{
              name: "offset",
              enabled: !0,
              options: {
                offset: [0, 4]
              }
            }, {
              name: "preventOverflow",
              options: {
                padding: 8,
                altAxis: !n
              }
            }]
          });
          return (0, _.useEffect)((() => {
            d && d()
          }), [a, t, n]), (0, l.jsx)(un.E.div, {
            initial: "exit",
            animate: t ? "enter" : "exit",
            transition: {
              ease: "easeInOut",
              duration: .3
            },
            variants: Sn,
            className: [Mn.subMenu].join(" "),
            style: {
              ...o.popper
            },
            ref: i,
            ...c.popper,
            children: s
          })
        },
        Cn = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, l.jsx)("button", {
            type: "button",
            className: "rockstargames-modules-core-headera769c575f71a9ed60454a354755b5b03",
            ...t,
            children: a
          })
        },
        jn = {
          backgroundElevation: "rockstargames-modules-core-headerd803e72fb936c18155db46ae42dd74f0",
          backgroundOverlay: "rockstargames-modules-core-headeraf311f256f0989aaa668a6d60f37ab83",
          backgroundVisible: "rockstargames-modules-core-headere8da5672530e8e7e170953df4907a3cf"
        },
        Tn = e => {
          let {
            children: a,
            isOpen: t,
            onClose: n,
            visible: s
          } = e;
          return t ? (0, l.jsxs)("div", {
            className: [jn.backgroundElevation].join(" "),
            onClick: n,
            children: [(0, l.jsx)("div", {
              className: [jn.backgroundOverlay, s ? jn.backgroundVisible : ""].join(" ")
            }), a]
          }) : null
        },
        zn = e => {
          let {
            target: a,
            selected: t,
            selectedTarget: n,
            onClick: s,
            isMobile: r,
            ...i
          } = e;
          const c = (0, o.Z)(),
            [d, g] = (0, _.useState)(!1),
            [m, v] = (0, _.useState)(null);
          return a.type === _n ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              ref: v,
              children: (0, l.jsxs)(yn, {
                "aria-label": c.formatMessage(_e.search_target_aria_label, {
                  target: n && a?.targets?.indexOf(n) >= 0 ? c.formatMessage(n.intlMessage) : c.formatMessage(a.intlMessage)
                }),
                selected: t,
                onClick: () => g(!d),
                ...i,
                children: [n && a?.targets?.indexOf(n) >= 0 ? c.formatMessage(n.intlMessage) : c.formatMessage(a.intlMessage), (0, l.jsx)("img", {
                  src: hn,
                  alt: ""
                })]
              }, a.intlMessage.defaultMessage)
            }), (0, l.jsx)(Tn, {
              isOpen: d,
              onClose: () => g(!1),
              children: (0, l.jsx)(Nn, {
                isOpen: d,
                openerRef: m,
                isMobile: r,
                children: a.targets?.map((e => (0, l.jsx)(Cn, {
                  "aria-label": c.formatMessage(_e.search_target_aria_label, {
                    target: c.formatMessage(e.intlMessage)
                  }),
                  onClick: () => s(e),
                  children: c.formatMessage(e.intlMessage)
                }, e.intlMessage.defaultMessage)))
              })
            })]
          }) : (0, l.jsx)(yn, {
            "aria-label": c.formatMessage(_e.search_target_aria_label, {
              target: c.formatMessage(a.intlMessage)
            }),
            selected: t,
            onClick: () => s(a),
            ...i,
            children: c.formatMessage(a.intlMessage)
          }, a.tab)
        },
        In = {
          secondaryNavigationSlide: "rockstargames-modules-core-headerb17059127d33dc4c94ee131eb131fb19",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerc7e991fff98d1e6d8c35f5c74f6b5b95",
          open: "rockstargames-modules-core-headered23f58994f4b57468fdb9e4c40bb38c"
        },
        Ln = e => {
          let {
            children: a,
            isOpen: t,
            onMouseClick: n,
            onEscapeKey: s,
            onMouseAway: r,
            style: i
          } = e;
          const o = t ? [In.open] : [],
            c = e => {
              "Escape" === e.key && s?.()
            };
          return (0, _.useEffect)((() => (t ? window.addEventListener("keyup", c) : window.removeEventListener("keyup", c), () => window.removeEventListener("keyup", c))), [c, t]), t ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: [In.secondaryNavigationOverlay, ...o].join(" "),
              onClick: n,
              onMouseEnter: r,
              style: {
                ...i
              }
            }), a && (0, l.jsx)("div", {
              className: [In.secondaryNavigationSlide, ...o].join(" "),
              children: a
            })]
          }) : null
        },
        An = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: n,
            setIsSearchOpen: s,
            setSearchQuery: r,
            isSearchOpen: i,
            searchQuery: c,
            selectedTarget: d,
            selectedTargetIndex: g,
            isSearchPage: m,
            searchError: v,
            maxSearchLength: u
          } = e;
          const p = (0, o.Z)(),
            f = (0, _.useRef)(null),
            h = () => {
              s(), m || r(""), f?.current?.focus()
            },
            k = () => {
              m || s()
            },
            b = {
              duration: .2,
              ease: "easeInOut",
              stiffness: 1e3,
              damping: 100,
              delay: 0
            };
          return (0, _.useEffect)((() => {
            i ? f?.current?.focus() : f?.current?.blur()
          }), [i]), (0, l.jsxs)("div", {
            children: [(0, l.jsx)("button", {
              className: "rockstargames-modules-core-headerfdf861825c948d1a7955d1cea7f9b60a",
              type: "button",
              onClick: h,
              children: (0, l.jsx)("img", {
                src: pn,
                alt: p.formatMessage(i ? _e.search_close_button : _e.search_open_button)
              })
            }), (0, l.jsx)(vn.M, {
              children: i && (0, l.jsxs)(un.E.div, {
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                exit: {
                  opacity: 0
                },
                transition: b,
                children: [(0, l.jsx)(Ln, {
                  isOpen: !m,
                  onEscapeKey: k,
                  onMouseClick: k
                }), (0, l.jsxs)(un.E.div, {
                  className: "rockstargames-modules-core-headerbcdd6908ee6f75b884724b42304c4fa0",
                  initial: {
                    height: 0,
                    overflow: "hidden"
                  },
                  animate: {
                    height: "auto",
                    overflow: "initial"
                  },
                  exit: {
                    height: 0,
                    overflow: "hidden"
                  },
                  transition: b,
                  children: [(0, l.jsxs)("div", {
                    className: "rockstargames-modules-core-headerff5c561c57bce4e5e6e3c1b771286680",
                    children: [(0, l.jsx)("div", {
                      className: "rockstargames-modules-core-headerd0846246b7f8111a7c8dd61d8977f797",
                      children: (0, l.jsx)("button", {
                        type: "button",
                        onClick: a,
                        children: (0, l.jsx)("img", {
                          src: pn,
                          alt: p.formatMessage(_e.search_action)
                        })
                      })
                    }), (0, l.jsx)("div", {
                      className: "rockstargames-modules-core-headerd35c5f222e110578e123ed49f56bba40",
                      children: (0, l.jsx)("input", {
                        type: "textfield",
                        value: c,
                        onChange: e => r(e.target.value),
                        onKeyUp: t,
                        placeholder: p.formatMessage(_e.search_placeholder),
                        ref: f,
                        enterKeyHint: "search",
                        maxLength: u
                      })
                    }), (0, l.jsx)("div", {
                      className: "rockstargames-modules-core-headerc52c2aba0e44186a883c1f2955167cde",
                      children: mn.targets.map(((e, a) => (0, l.jsx)(zn, {
                        target: e,
                        onClick: e => n(e, a),
                        selected: g === a,
                        selectedTarget: d
                      }, e.tab)))
                    }), !m && (0, l.jsx)("div", {
                      className: "rockstargames-modules-core-headerf1451c6007fa33b27b2919fa85e91762",
                      children: (0, l.jsx)("button", {
                        type: "button",
                        onClick: h,
                        children: (0, l.jsx)("img", {
                          src: fn,
                          alt: p.formatMessage(_e.search_close_button)
                        })
                      })
                    })]
                  }), v && (0, l.jsx)("div", {
                    className: "rockstargames-modules-core-headeredb8eb6fc81c7f28d96c57cb45ccc40e",
                    "aria-live": "polite",
                    children: v
                  })]
                })]
              })
            })]
          })
        },
        En = {
          search: "rockstargames-modules-core-headerff2a3a5885c54cc839c3684a72ac24be",
          targetsOuter: "rockstargames-modules-core-headerb8edda6b9b58803aa76c1d591cb6c750",
          hasScroll: "rockstargames-modules-core-headerf4a1a19cd54b9fdacba83551d7b595fd",
          targets: "rockstargames-modules-core-headerb85e2ca642065ab25737f4335826185c",
          errorMessage: "rockstargames-modules-core-headere03104e3157e0392e02406c0b163e2b3"
        },
        Pn = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: n,
            setIsSearchOpen: s,
            setSearchQuery: r,
            isSearchOpen: i,
            searchQuery: c,
            selectedTarget: d,
            selectedTargetIndex: g,
            isSearchPage: m,
            searchError: v,
            maxSearchLength: u
          } = e;
          const p = (0, o.Z)(),
            f = (0, _.useRef)(null),
            [h, k] = (0, _.useState)(!1);
          return (0, _.useEffect)((() => {
            let e, a, t = !1;
            const n = n => {
                f && f.current && (n.preventDefault(), t = !0, e = n.pageX - f.current.offsetLeft, a = f.current.scrollLeft)
              },
              s = () => {
                t = !1
              },
              r = n => {
                if (t && (n.preventDefault(), f && f.current)) {
                  const t = n.pageX - f.current.offsetLeft - e;
                  f.current.scrollLeft = a - t
                }
              },
              i = () => {
                if (f && f.current) {
                  const e = f.current.scrollLeft;
                  k(e > 20)
                }
              };
            if (f && f.current) {
              const e = f.current;
              e.addEventListener("mousedown", n), e.addEventListener("mouseup", s), e.addEventListener("mouseleave", s), e.addEventListener("mousemove", r), e.addEventListener("scroll", i)
            }
            return () => {
              f && f.current && (f.current.removeEventListener("mousedown", n), f.current.removeEventListener("mouseup", s), f.current.removeEventListener("mouseleave", s), f.current.removeEventListener("mousemove", r), f.current.removeEventListener("scroll", i))
            }
          })), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("div", {
              className: En.search,
              children: [(0, l.jsx)("button", {
                type: "button",
                onClick: () => i ? a() : s(!0),
                children: (0, l.jsx)("img", {
                  src: pn,
                  alt: p.formatMessage(_e.search_action)
                })
              }), (0, l.jsx)("input", {
                type: "text",
                value: c,
                onChange: e => r(e.target.value),
                onFocus: () => s(!0),
                onKeyUp: t,
                placeholder: p.formatMessage(_e.search_placeholder),
                enterKeyHint: "search",
                maxLength: u
              }), i && !m && (0, l.jsx)("button", {
                type: "button",
                onClick: () => s(!1),
                children: (0, l.jsx)("img", {
                  src: fn,
                  alt: p.formatMessage(_e.search_close_button)
                })
              })]
            }), i && (0, l.jsxs)("div", {
              className: [En.targetsOuter, h ? En.hasScroll : ""].join(" "),
              children: [(0, l.jsx)("div", {
                className: En.targets,
                ref: f,
                children: mn.targets.map(((e, a) => (0, l.jsx)(zn, {
                  target: e,
                  selected: g === a,
                  selectedTarget: d,
                  onClick: e => n(e, a),
                  isMobile: !0
                }, e.tab)))
              }), v && (0, l.jsx)("div", {
                className: En.errorMessage,
                "aria-live": "polite",
                children: v
              })]
            })]
          })
        },
        Dn = "global-nav-search",
        Vn = e => {
          let {
            ...a
          } = e;
          const {
            pathname: t,
            search: n
          } = (0, Q.useLocation)(), {
            currentSite: s
          } = ge(), [r] = (0, Q.useSearchParams)(), [i, c] = (0, _.useState)(""), [d, g] = ve(), [m, v] = (0, _.useState)(!1), [p, f] = (0, _.useState)(0), [h, k] = (0, _.useState)(mn.targets[0]), [b, w] = (0, _.useState)(""), y = (() => {
            const e = (0, Q.useNavigate)(),
              {
                currentSite: a
              } = ge(),
              t = rn();
            return (n, s) => {
              const r = s.domain !== a?.site,
                i = {
                  ...s,
                  path: s.path?.replace("{query}", n)
                },
                o = r ? t(i).href : i.path;
              return r ? window.location.href = o : e ? e(o) : window.history.pushState({}, "", o), []
            }
          })(), x = ue(), M = (0, o.Z)(), S = x || d === Dn, N = /[*?\\<>&%@:~]/g, C = e => {
            if ("" === i) return !1;
            e.length > 100 && c(e.substring(0, 100));
            const a = e.split(/\s+/),
              t = e.match(N) || !1;
            return a.every((e => e.length < 3)) ? (w(M.formatMessage(_e.nav_search_error_too_short, {
              count: 3
            })), !1) : t ? (w(M.formatMessage(_e.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (w(""), !0)
          }, j = () => {
            C(i) && y(i, h.location)
          };
          (0, _.useEffect)((() => {
            const e = () => {
              v(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, _.useEffect)((() => {
            const e = s?.site === u.z.www && x,
              a = s?.site === u.z.socialClub && x;
            if (x || (f(0), k(mn.targets[0])), e) {
              const e = r.get("q"),
                a = r.get("tab");
              if (e && (c(e), C(e)), a) {
                const e = mn.targets.findIndex((e => e.tab === a));
                f(e), k(mn.targets[e])
              }
            }
            if (a) {
              const e = mn.targets.findIndex((e => e.tab === u.z.socialClub)),
                a = mn.targets[e].targets,
                n = a?.find((e => e.location.path.startsWith(t))),
                s = t.split("/")[2];
              s && c(s), f(e), n && k(n)
            }
          }), [t, n, x]);
          const T = {
            handleSearch: j,
            handleSearchKeypress: e => {
              w(""), "Enter" === e.key && j()
            },
            handleSearchTargetSelect: (e, a) => {
              k(e), f(a), C(i) && y(i, e.location)
            },
            setIsSearchOpen: () => g(Dn),
            setSearchQuery: c,
            isSearchOpen: S,
            searchQuery: i,
            selectedTarget: h,
            selectedTargetIndex: p,
            isSearchPage: x,
            searchError: b,
            maxSearchLength: 100
          };
          return m ? (0, l.jsx)(Pn, {
            ...T,
            ...a
          }) : (0, l.jsx)(An, {
            ...T
          })
        },
        On = e => {
          let {
            cta: a,
            search: t = !0,
            isMobile: n
          } = e;
          const s = (0, o.Z)();
          return (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headerd755a8be16d6c9603965d6d61ce44387",
            children: [a && (0, l.jsx)("div", {
              children: (0, l.jsx)(gn, {
                variant: a.variant,
                location: a.location,
                dataTestId: a.dataTestId,
                gaEvent: a.ga,
                gaText: a.text,
                target: a.target,
                children: s.formatMessage(a.intlMessage)
              })
            }), t && (0, l.jsx)(Vn, {}), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(pa, {}), !n && (0, l.jsx)(an, {})]
            })]
          })
        },
        Gn = {
          navigationItem: "rockstargames-modules-core-headere4791244cfb12101d21ef44f3e26ac97",
          active: "rockstargames-modules-core-headerbe8bcc6c46d70212d01dc83c68e67c0a"
        },
        Bn = ["pc", "ps4", "ps5", "xboxone", "xboxsx"],
        Rn = e => {
          const {
            pathname: a
          } = (0, Q.useLocation)(), {
            currentSite: t
          } = ge();
          return e && e.length ? e.map((e => {
            if (e?.domain !== t?.site) return null;
            let n;
            if (t?.site === u.z.socialClub) {
              const e = RegExp(`/(${Bn.join("|")})`);
              n = a.match(e) ? a.replace(e, "") : a
            } else n = a;
            return (0, Q.matchPath)(e?.path || "", n)
          })) : []
        },
        Fn = e => {
          let {
            text: a,
            type: t,
            location: n,
            isLegacy: s,
            gaText: r,
            gaBreadCrumb: i,
            dataTestId: o,
            target: _,
            ...c
          } = e;
          const [d] = Rn([n]), g = t === on;
          return (0, l.jsxs)(ln, {
            className: [Gn.navigationItem, d ? Gn.active : ""].join(" "),
            location: n,
            isLegacy: s,
            type: t,
            target: _,
            gaText: r,
            gaBreadCrumb: i,
            dataTestId: o,
            label: a,
            ...c,
            children: [a, g && (0, l.jsx)("img", {
              alt: "",
              src: kn
            })]
          })
        },
        $n = {
          navigationDropdownButton: "rockstargames-modules-core-headera3a570b3fc00ad9e0274623661e88c7a",
          open: "rockstargames-modules-core-headerdbc174ea06ad91b5938af1465fdd3696",
          active: "rockstargames-modules-core-headerdb65254f84c5afcf987b23948ce1cf64"
        },
        qn = e => {
          let {
            text: a,
            isOpen: t,
            onClick: n,
            buttonRef: s,
            navChildren: r,
            gaText: i,
            gaBreadCrumb: o,
            dataTestId: c
          } = e;
          const {
            track: d
          } = te(), g = (0, _.useCallback)((() => {
            d(tn(void 0, "", i, o)), n()
          }), [i, o, t, n]), m = (0, _.useMemo)((() => {
            if (!r) return;
            const e = (a, t) => {
              let n;
              return n = t.children ? t.children.reduce(e, []) : [t.location], [...a, ...n]
            };
            return r.reduce(e, [])
          }), [r]), v = Rn(m), u = v?.some(Boolean);
          return (0, l.jsx)("div", {
            className: $n.navigationDropdown,
            ref: s,
            children: (0, l.jsxs)("button", {
              className: [$n.navigationDropdownButton, u ? $n.active : "", t ? $n.open : ""].join(" "),
              type: "button",
              "data-testid": c || "navDropdown",
              onClick: g,
              children: [a, (0, l.jsx)("img", {
                src: hn,
                alt: ""
              })]
            })
          })
        },
        Un = e => {
          let {
            title: a,
            location: t,
            imgUrl: n,
            gaText: s,
            gaBreadCrumb: r,
            onNavigate: i,
            dataTestId: o,
            ..._
          } = e;
          return (0, l.jsx)("div", {
            className: "rockstargames-modules-core-headerc2b06d9afe0933250fc72b9117858265",
            children: (0, l.jsx)(ln, {
              location: t,
              gaText: s,
              gaBreadCrumb: r,
              onNavigate: i,
              dataTestId: o,
              ..._,
              children: (0, l.jsx)("img", {
                src: n,
                alt: a
              })
            })
          }, a)
        },
        Hn = {
          domain: u.z.www,
          path: "/games"
        },
        Wn = () => {
          const e = (0, o.Z)();
          return (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headerf4a613c7c0cc9bef8df3ee832d883ead",
            "data-testid": "gamesMenu",
            children: [(0, l.jsxs)("div", {
              className: "rockstargames-modules-core-headera300918162cd4910c1033e1410cf7306",
              children: [(0, l.jsx)("div", {
                children: (0, l.jsx)("h2", {
                  className: "rockstargames-modules-core-headerc310b29b3e11394b5a0dde96dc2d8f9b",
                  children: e.formatMessage(_e.games_menu_featured)
                })
              }), (0, l.jsx)("div", {
                children: (0, l.jsxs)(ln, {
                  className: "rockstargames-modules-core-headera3a0b6b909900e4677b64d48a0f9192d",
                  gaText: _e.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${_e.games_menu_view_all.defaultMessage}`,
                  location: Hn,
                  children: [e.formatMessage(_e.games_menu_view_all), (0, l.jsx)("img", {
                    src: bn,
                    alt: e.formatMessage(_e.nav_view_all_games)
                  })]
                })
              })]
            }), (0, l.jsx)("div", {
              className: "rockstargames-modules-core-headerbbf167776ba1b263a8376030db8c6f35",
              children: pe.map((a => (0, l.jsx)(Un, {
                title: e.formatMessage(a.intlMessage),
                gaText: a.intlMessage.defaultMessage,
                gaBreadCrumb: `Games > ${a.intlMessage.defaultMessage}`,
                location: a.location,
                imgUrl: (0, b.kX)(!0) + a.imageSrc,
                dataTestId: a.dataTestId
              }, a.imageSrc)))
            })]
          })
        },
        Jn = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerae2bc6580acf5b4362b457cc75833bb8",
          nested: "rockstargames-modules-core-headerd6f17c0b3966d498f9a2fc3a9f9de38d",
          subMenuDropdownButton: "rockstargames-modules-core-headerdab571ebee31eca114e2a074de69472c",
          open: "rockstargames-modules-core-headerf43750ae7653576a37e8243935a3feb1",
          openChevron: "rockstargames-modules-core-headerdb0c8d634787e7aaf33e858747e52b05",
          subMenuDropdownItems: "rockstargames-modules-core-headerde63d9fdafaf4995f8b95fdef3a8d551"
        },
        Zn = {
          subMenuItem: "rockstargames-modules-core-headere7cf207577cfec29877f7387fa7cb412",
          nested: "rockstargames-modules-core-headerfb8268fb2131202c7ee66ce7f684012f"
        },
        Xn = {
          navigationLink: "rockstargames-modules-core-headerc638ccc027700497fe811881feb02f1e",
          active: "rockstargames-modules-core-headerf53cd2bce32edf82c615316c826f8477"
        },
        Kn = e => [Xn.navigationLink, e ? Xn.active : ""].join(" "),
        Qn = e => {
          let {
            text: a,
            type: t,
            location: n,
            className: s,
            isLegacy: r,
            target: i,
            nested: o,
            gaText: _,
            gaBreadCrumb: c,
            dataTestId: d,
            ...g
          } = e;
          const m = t === on,
            [v] = Rn(n ? [n] : void 0);
          return (0, l.jsxs)(ln, {
            className: [Kn(Boolean(v)), Zn.subMenuItem, o ? Zn.nested : "", s].join(" "),
            location: n,
            isLegacy: r,
            type: t,
            target: i,
            gaText: _,
            gaBreadCrumb: c,
            dataTestId: d,
            label: a,
            "data-ui-name": "sub-menu-item",
            ...g,
            children: [a, m && (0, l.jsx)("img", {
              alt: "",
              src: kn
            })]
          })
        },
        Yn = "nav-dropdown",
        es = (e, a) => !(!(e?.path && e.path.indexOf("{username}") >= 0) || a),
        as = e => {
          let {
            text: a,
            navChildren: t,
            gaText: n,
            gaBreadCrumb: s,
            nested: r,
            dataTestId: i,
            subMenuId: c,
            toggleOpen: d,
            isOpen: g,
            ...m
          } = e;
          const [v] = ve(), u = (0, o.Z)(), {
            track: p
          } = te(), f = (0, _.useRef)(null), [h, k] = (0, _.useState)(null), b = me();
          (0, _.useEffect)((() => {
            null === v && d(null)
          }), [v]);
          const w = e => {
              p(tn(void 0, "", n, s)), d(e ? c : null)
            },
            y = e => {
              "ArrowLeft" === e.code && (w(!1), f?.current?.focus())
            },
            x = {
              duration: .2,
              ease: "easeInOut",
              stiffness: 1e3,
              damping: 100,
              delay: 0
            },
            M = {
              open: {
                maxHeight: "100vh",
                opacity: 1,
                transition: x
              },
              closed: {
                maxHeight: 0,
                opacity: 0,
                transition: x
              }
            };
          return (0, l.jsxs)("div", {
            className: [Jn.subMenuDropdownContainer, r ? Jn.nested : ""].join(" "),
            ...m,
            "data-ui-name": "sub-menu-item",
            children: [(0, l.jsxs)("button", {
              type: "button",
              className: [Jn.subMenuDropdownButton, r ? Jn.nested : "", g ? Jn.open : ""].join(" "),
              onClick: () => w(!g),
              onKeyUp: e => {
                "Enter" === e.code && w(!0), "ArrowRight" === e.code && w(!0), "ArrowLeft" === e.code && w(!1)
              },
              ref: f,
              "data-testid": i,
              children: [a, (0, l.jsx)("img", {
                src: hn,
                className: Jn.openChevron,
                alt: ""
              })]
            }), (0, l.jsx)(vn.M, {
              children: g && t && (0, l.jsx)(un.E.div, {
                className: Jn.subMenuDropdownItems,
                variants: M,
                animate: "open",
                initial: "closed",
                exit: "closed",
                children: t.map((e => es(e.location, b.nickname) ? null : e.type === Yn ? (0, l.jsx)(as, {
                  text: u.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${s} > ${e.intlMessage.defaultMessage}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: h === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: k
                }, e.intlMessage.defaultMessage) : (0, l.jsx)(Qn, {
                  text: u.formatMessage(e.intlMessage),
                  type: e.type,
                  location: e.location,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${s} > ${e.intlMessage.defaultMessage}`,
                  onKeyUp: y,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.intlMessage.defaultMessage)))
              })
            })]
          })
        },
        ts = as,
        ns = {
          enter: {
            opacity: 1,
            zIndex: 101,
            display: "block",
            visibility: "visible"
          },
          exit: {
            opacity: 0,
            zIndex: 100,
            transitionEnd: {
              visibility: "hidden"
            }
          }
        },
        ss = e => {
          let {
            intlMessage: a,
            type: t,
            location: n,
            navChildren: s,
            isLegacy: r,
            target: i,
            gaBreadCrumb: c,
            navKey: d,
            isHidden: g,
            dataTestId: m,
            ...v
          } = e;
          const u = (0, o.Z)(),
            [p, f] = (0, _.useState)(null),
            h = (0, Q.useLocation)(),
            [k, b] = ve(),
            w = me(),
            [y, x] = (0, _.useState)(null),
            M = k === d,
            S = {
              ...M ? {
                visibility: "visible",
                display: "block"
              } : {
                visibility: "hidden",
                display: "none"
              }
            };
          (0, _.useEffect)((() => {
            b(null)
          }), [h.pathname, h.key]);
          const N = c ? `${c} > ${a.defaultMessage}` : a.defaultMessage;
          return t === _n ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(qn, {
              text: u.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: N,
              onClick: () => b(d),
              isOpen: M,
              buttonRef: g ? void 0 : f,
              navChildren: s,
              dataTestId: m,
              ...v
            }), !g && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(Ln, {
                isOpen: M,
                onMouseClick: () => b(null),
                onEscapeKey: () => b(null)
              }), (0, l.jsx)(Nn, {
                isOpen: M,
                openerRef: p,
                children: s?.map((e => es(e.location, w.nickname) ? null : e.type === _n ? (0, l.jsx)(ts, {
                  text: u.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${N} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: y === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: x
                }, `desktop-submenu-${e.intlMessage.defaultMessage}`) : (0, l.jsx)(Qn, {
                  location: e.location,
                  text: u.formatMessage(e.intlMessage),
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${N} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId
                }, e.intlMessage.defaultMessage)))
              })]
            })]
          }) : t === cn ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(qn, {
              text: u.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: c ? `${c} > ${a.defaultMessage}` : a.defaultMessage,
              onClick: () => b(d),
              isOpen: M,
              dataTestId: m,
              ...v
            }), !g && (0, l.jsx)(Ln, {
              isOpen: !0,
              onMouseClick: () => b(null),
              onEscapeKey: () => b(null),
              style: S,
              children: (0, l.jsx)(un.E.div, {
                initial: "exit",
                animate: M ? "enter" : "exit",
                transition: {
                  ease: "easeInOut",
                  duration: .3
                },
                variants: ns,
                children: (0, l.jsx)(Wn, {})
              })
            })]
          }) : n ? es(n, w.nickname) ? null : (0, l.jsx)(Fn, {
            location: n,
            type: t,
            text: u.formatMessage(a),
            isLegacy: r,
            target: i,
            gaText: a.defaultMessage.toLowerCase(),
            gaBreadCrumb: c ? `${c} > ${a.defaultMessage}` : a.defaultMessage,
            dataTestId: m,
            ...v
          }) : null
        },
        rs = e => {
          let {
            links: a
          } = e;
          const [t, n] = (0, _.useState)(a), [s, r] = (0, _.useState)([]), i = (0, _.useRef)(null), o = (0, _.useRef)(null), c = (0, _.useCallback)((() => {
            const e = o.current;
            if (!e || !a.length) return;
            const {
              children: t
            } = e;
            let s = 0;
            const i = Array.from(t).map(((e, a) => {
                const t = e.getBoundingClientRect().top;
                return 0 === a && (s = t), t
              })),
              _ = i.filter((e => e !== s)).length,
              c = i.findIndex((e => e > s));
            let l = c;
            c > 0 && (l = c - 1), _ ? (n(a.slice(0, l)), r(a.slice(l))) : (n(a), r([]))
          }), [a, o?.current]);
          (0, _.useEffect)((() => {
            const e = new ResizeObserver(c);
            return o?.current && e.observe(o.current), () => {
              o?.current && e.unobserve(o.current)
            }
          }), [a, o?.current]);
          const d = (0, _.useMemo)((() => (0, l.jsx)("ul", {
            ref: o,
            className: "rockstargames-modules-core-headerf3e86ba2e4808f8537da93ae608b41fd",
            "aria-hidden": "true",
            children: a.map((e => (0, l.jsx)("li", {
              children: (0, l.jsx)(ss, {
                intlMessage: e.intlMessage,
                type: e.type,
                target: e.target,
                location: e.location,
                navChildren: e.children,
                navKey: e.text,
                isHidden: !0
              })
            }, `desktop-main-dropdown-hidden-${e.text}`)))
          })), [a]);
          return 0 === a.length ? null : (0, l.jsxs)("nav", {
            className: "rockstargames-modules-core-headerbf622cdec1ceb44e603e4e0ce93970e7",
            children: [(0, l.jsxs)("ul", {
              ref: i,
              children: [t.map((e => (0, l.jsx)("li", {
                children: (0, l.jsx)(ss, {
                  intlMessage: e.intlMessage,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, `desktop-nav-link-${e.text}`))), s.length > 0 && (0, l.jsx)("li", {
                children: (0, l.jsx)(ss, {
                  intlMessage: _e.nav_more_dropdown,
                  type: _n,
                  navChildren: s,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), d]
          })
        },
        is = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        os = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
        _s = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
        cs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
        ls = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
        ds = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
        gs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
        ms = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg",
        vs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
        us = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
        ps = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a7dfd2058127cb6f5adca6c9b1d91cc.png",
        fs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
        hs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
        ks = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d2753ceddb2213d956d51d369985513.svg",
        bs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
        ws = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
        ys = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ccc721c72fc5553108c7e70b0778dba.svg",
        xs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
        Ms = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
        Ss = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63c149607e42c3f7a8988ef21d53ec97.svg",
        Ns = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
        Cs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
        js = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/790f72b723ee040bae9e43e3d2785c89.svg",
        Ts = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
        zs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
        Is = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
        Ls = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
        As = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
        Es = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
        Ps = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
        Ds = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
        Vs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
        Os = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
        Gs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
        Bs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
        Rs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
        Fs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        $s = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
        qs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
        Us = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
        Hs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
        Ws = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
        Js = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
        Zs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
        Xs = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
        Ks = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
        Qs = e => s[e] ? s[e] : null,
        Ys = () => (0, l.jsx)("div", {
          className: "rockstargames-modules-core-headerc5182c35b0d08cbfd5c48a29103c987d"
        }),
        er = {
          quickAccess: "rockstargames-modules-core-headerdd98ab26460bc8af09e869527e025790",
          link: "rockstargames-modules-core-headerb9254c00c41acd171bd25c1a6e49171e"
        },
        ar = () => {
          const e = (0, o.Z)(),
            a = {
              home: {
                domain: "www",
                path: "/"
              },
              games: {
                domain: "www",
                path: "/games"
              },
              newswire: {
                domain: "www",
                path: "/newswire"
              }
            },
            t = "Quick Access";
          return (0, l.jsxs)("ul", {
            className: er.quickAccess,
            children: [(0, l.jsx)("li", {
              children: (0, l.jsxs)(ln, {
                location: a.home,
                className: [Kn(), er.link].join(" "),
                gaText: _e.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${t} > ${_e.nav_quick_access_home.defaultMessage}`,
                children: [(0, l.jsx)("img", {
                  alt: "Rockstar Games",
                  src: Fs
                }), (0, l.jsx)(i.Z, {
                  ..._e.nav_quick_access_home
                })]
              })
            }), (0, l.jsx)("li", {
              children: (0, l.jsxs)(ln, {
                location: a.games,
                className: [Kn(), er.link].join(" "),
                gaText: _e.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${t} > ${_e.nav_quick_access_games.defaultMessage}`,
                children: [(0, l.jsx)("img", {
                  alt: e.formatMessage(_e.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, l.jsx)(i.Z, {
                  ..._e.nav_quick_access_games
                })]
              })
            }), (0, l.jsx)("li", {
              children: (0, l.jsxs)(ln, {
                location: a.newswire,
                className: [Kn(), er.link].join(" "),
                gaText: _e.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${t} > ${_e.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, l.jsx)("img", {
                  alt: e.formatMessage(_e.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, l.jsx)(i.Z, {
                  ..._e.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        tr = "quick-access-menu",
        nr = e => {
          let {
            site: a,
            brand: t,
            hideRockstarBrand: n
          } = e;
          const s = (0, o.Z)(),
            [r, i] = (0, _.useState)(!1),
            [c, d] = (0, _.useState)(null),
            [g, m] = (0, _.useState)(null),
            [v, u] = ve(),
            p = v === tr;
          (0, _.useEffect)((() => {
            const e = () => {
              i(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const {
            styles: f,
            attributes: h,
            forceUpdate: k
          } = (0, xn.D)(c, g, {
            placement: "bottom-start",
            modifiers: [{
              name: "offset",
              enabled: !0,
              options: {
                offset: [0, 30]
              }
            }, {
              name: "preventOverflow",
              options: {
                padding: 8,
                altAxis: !0
              }
            }]
          });
          return (0, _.useEffect)((() => {
            k && k()
          }), [c, p]), (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headeracf0fe31775e9e9f76e57a6356c3073d",
            children: [!n && (0, l.jsxs)("div", {
              className: "rockstargames-modules-core-headerae7adffe4295955d4ea126909f0f7027",
              children: [r && (0, l.jsx)(ln, {
                location: {
                  domain: "www",
                  path: "/"
                },
                gaText: _e.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: _e.nav_rockstargames_home.defaultMessage,
                children: (0, l.jsx)(Ys, {})
              }), !r && (0, l.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headerfe08980c15b4c9d647ad67b3e69df46c",
                onClick: () => u(tr),
                "aria-label": s.formatMessage(_e.nav_rockstargames_logo),
                ref: d,
                children: (0, l.jsx)(Ys, {})
              }), p && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(Ln, {
                  isOpen: p,
                  onEscapeKey: () => u(null),
                  onMouseClick: () => u(null)
                }), (0, l.jsx)("div", {
                  className: "rockstargames-modules-core-headerac0bb9bdb359f681853e0ab8386b966f",
                  style: {
                    ...f.popper
                  },
                  ref: m,
                  ...h.popper,
                  children: (0, l.jsx)(ar, {})
                })]
              })]
            }), t && (0, l.jsxs)(l.Fragment, {
              children: [!n && (0, l.jsx)("div", {
                className: "rockstargames-modules-core-headerbd9eb76eae4216a03e203f8277c0de1a"
              }), (0, l.jsx)("div", {
                className: "rockstargames-modules-core-headerce3b9d90001b3bba8f2e0ada2902041f",
                children: (0, l.jsx)("img", {
                  className: "rockstargames-modules-core-headerae86867dea4ec0a8cdea5642f4c291d3",
                  alt: a,
                  src: Qs(t)
                })
              })]
            })]
          })
        },
        sr = {
          header: "rockstargames-modules-core-headerd2dbf5efb1484f71a302d2b217900031",
          fluid: "rockstargames-modules-core-headercfa07fc8efab2e71f97a4b728dee6586",
          fixed: "rockstargames-modules-core-headerfcaaa17901eb60439448b4351d15f0b2",
          title: "rockstargames-modules-core-headere171ca1389a17285caa5dfa568adfac8",
          quickAccessWrapper: "rockstargames-modules-core-headera4ef54292d023f37220cb09dffe7c81a"
        },
        rr = e => {
          let {
            data: a
          } = e;
          const t = (0, _.useMemo)((() => {
            const {
              currentSite: e
            } = (0, u.Z)();
            if (e?.site === u.z.socialClub) return {
              zIndex: 8600
            }
          }), []);
          return (0, l.jsxs)("header", {
            className: [sr.header, sr.fixed].join(" "),
            style: t,
            children: [(0, l.jsx)("div", {
              className: sr.title,
              children: (0, l.jsx)(nr, {
                site: a.site,
                brand: a.brand
              })
            }), (0, l.jsx)("div", {
              className: sr.fluid,
              children: (0, l.jsx)(rs, {
                links: a.links
              })
            }), (0, l.jsx)("div", {
              className: sr.fixed,
              children: (0, l.jsx)(On, {
                cta: a.cta
              })
            })]
          })
        },
        ir = {
          hamburger: "rockstargames-modules-core-headerd45fd161655450522fd627346eda32f6",
          open: "rockstargames-modules-core-headerefcc59509afc394cff54203b433d510e"
        },
        or = e => {
          let {
            toggle: a,
            isMenuOpen: t
          } = e;
          const {
            track: n
          } = te();
          return (0, l.jsx)("div", {
            className: [ir.hamburger, t ? ir.open : ""].join(" "),
            children: (0, l.jsxs)("button", {
              onClick: () => {
                n({
                  event: t ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), a?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {})]
            })
          })
        },
        _r = {
          header: "rockstargames-modules-core-headerc6c3d0fc75c97585f6ca0f5805999412",
          title: "rockstargames-modules-core-headeraa1441b47dbc6f5a653a59ed4d9f9433",
          nav: "rockstargames-modules-core-headere454c30b7535de52d50c84ba33bd6a10",
          fullMenuOpen: "rockstargames-modules-core-headerb95ceeff411265d1f48446f8b06510e5",
          paddingBottom: "rockstargames-modules-core-headerb1ca354e5212602a9ee0119c6e77096a",
          navContainer: "rockstargames-modules-core-headerbf0d2e00daa366e9d881eb1631eb799f",
          searchOpen: "rockstargames-modules-core-headerf9ef7f85a5d81d00b1d680003a076fa3"
        },
        cr = {
          domain: u.z.www,
          path: "/games"
        },
        lr = e => {
          let {
            text: a,
            onNavigate: t
          } = e;
          const n = (0, o.Z)(),
            s = (0, _.useRef)(),
            [r, c] = (0, _.useState)(2.5);
          return (0, _.useEffect)((() => {
            const e = () => {
              c(window.innerWidth < 768 ? 2.5 : 3.5)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headerffd42c843d5d69c9d594c92a30692e5d",
            "data-testid": "gamesMenu",
            children: [(0, l.jsxs)("div", {
              className: "rockstargames-modules-core-headerdc05e5d1b9cadf7aaf9ca6bf2115d812",
              children: [(0, l.jsx)("h2", {
                children: a
              }), (0, l.jsxs)(ln, {
                gaText: _e.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${_e.nav_view_all_games.defaultMessage}`,
                location: cr,
                onNavigate: t,
                className: Xn.navigationLink,
                children: [(0, l.jsx)(i.Z, {
                  ..._e.nav_view_all_games
                }), (0, l.jsx)("img", {
                  src: bn,
                  alt: n.formatMessage(_e.nav_view_all_games)
                })]
              })]
            }), (0, l.jsx)(Wa.tq, {
              className: "rockstargames-modules-core-headera91f871c6f287f959df91085cef76f22",
              ref: s,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: r,
              speed: 700,
              children: pe.map((e => (0, l.jsx)(Wa.o5, {
                className: "rockstargames-modules-core-headere094133e33c8cdf2873ff7e08c34dd0a",
                children: (0, l.jsx)(Un, {
                  title: n.formatMessage(e.intlMessage),
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `Games > ${e.intlMessage.defaultMessage}`,
                  location: e.location,
                  imgUrl: (0, b.kX)(!0) + e.imageSrc,
                  onNavigate: t,
                  dataTestId: e.dataTestId
                })
              }, e.intlMessage.defaultMessage)))
            })]
          })
        },
        dr = e => {
          let {
            children: a,
            isOpen: t
          } = e;
          const n = {
              duration: .2,
              ease: "easeInOut",
              stiffness: 1e3,
              damping: 100,
              delay: 0
            },
            s = {
              open: {
                maxHeight: "100vh",
                opacity: 1,
                transition: n
              },
              closed: {
                maxHeight: 0,
                opacity: 0,
                transition: n
              }
            };
          return (0, l.jsx)(vn.M, {
            children: t && (0, l.jsx)(un.E.div, {
              className: "rockstargames-modules-core-headerc69df84ab1249c0ea218884e3459e5cc",
              variants: s,
              animate: "open",
              initial: "closed",
              exit: "closed",
              children: a
            })
          })
        },
        gr = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerd4d2f7b0358d7c2b7c482bea7a243acd",
          subMenuDropdownButton: "rockstargames-modules-core-headerc09e65bd027917e0f29da9a6ef0e91f8",
          open: "rockstargames-modules-core-headerae62683c5e47c10b3260c7a63544e9d1",
          subMenuDropdownItems: "rockstargames-modules-core-headera015481239e04732ecf001df49c29311"
        },
        mr = {},
        vr = e => {
          let {
            text: a,
            dataTestId: t,
            type: n,
            target: s,
            location: r,
            className: i,
            gaText: o,
            gaBreadCrumb: _,
            isLegacy: c,
            onNavigate: d,
            ...g
          } = e;
          const [m] = Rn(r ? [r] : void 0), v = n === on;
          return (0, l.jsxs)(ln, {
            className: [Kn(Boolean(m)), mr.subMenuItem, i].join(" "),
            dataTestId: t,
            location: r,
            type: n,
            target: s,
            gaText: o,
            gaBreadCrumb: _,
            onNavigate: d,
            isLegacy: c,
            label: a,
            ...g,
            children: [a, v && (0, l.jsx)("img", {
              alt: "",
              src: kn
            })]
          })
        },
        ur = e => {
          let {
            text: a,
            dataTestId: t,
            navChildren: n,
            gaText: s,
            gaBreadCrumb: r,
            onNavigate: i,
            isSubMenuOpen: _,
            toggleMenuOpen: c,
            ...d
          } = e;
          const g = (0, o.Z)(),
            {
              track: m
            } = te(),
            v = {
              duration: .2,
              ease: "easeInOut",
              stiffness: 1e3,
              damping: 100,
              delay: 0
            },
            u = {
              open: {
                maxHeight: "100vh",
                opacity: 1,
                transition: v
              },
              closed: {
                maxHeight: 0,
                opacity: 0,
                transition: v
              }
            };
          return (0, l.jsxs)("div", {
            className: gr.subMenuDropdownContainer,
            ...d,
            children: [(0, l.jsxs)("button", {
              type: "button",
              "data-testid": t,
              className: [gr.subMenuDropdownButton, _ ? gr.open : ""].join(" "),
              onClick: () => {
                m(tn(void 0, "", s, r)), c()
              },
              children: [a, (0, l.jsx)("img", {
                src: hn,
                alt: ""
              })]
            }), (0, l.jsx)(vn.M, {
              children: _ && (0, l.jsx)(un.E.div, {
                className: gr.subMenuDropdownItems,
                variants: u,
                animate: "open",
                initial: "closed",
                exit: "closed",
                children: n.map((e => (0, l.jsx)(vr, {
                  text: g.formatMessage(e.intlMessage),
                  dataTestId: e.dataTestId,
                  type: e.type,
                  location: e.location,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${r} > ${e.intlMessage.defaultMessage}`,
                  onNavigate: i,
                  isLegacy: e.isLegacy
                }, e.intlMessage.defaultMessage)))
              })
            })]
          })
        },
        pr = e => {
          let {
            intlMessage: a,
            dataTestId: t,
            type: n,
            target: s,
            location: r,
            navChildren: i,
            gaBreadCrumb: c,
            onNavigate: d,
            isOpen: g,
            setIsOpen: m,
            ...v
          } = e;
          const u = (0, o.Z)(),
            [p, f] = (0, _.useState)(null),
            [h] = Rn(r ? [r] : void 0),
            k = (0, Q.useLocation)();
          (0, _.useEffect)((() => {
            m()
          }), [k.pathname]);
          const b = c ? `${c} > ${a.defaultMessage}` : a.defaultMessage;
          if (n === _n) return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(qn, {
              text: u.formatMessage(a),
              dataTestId: t,
              gaText: a.defaultMessage,
              gaBreadCrumb: b,
              onClick: () => m(),
              isOpen: g,
              ...v
            }), (0, l.jsx)(dr, {
              isOpen: g,
              children: i?.map(((e, a) => e.type === _n ? (0, l.jsx)(ur, {
                text: u.formatMessage(e.intlMessage),
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.intlMessage.defaultMessage,
                gaBreadCrumb: `${b} > ${e.intlMessage.defaultMessage}`,
                onNavigate: d,
                isSubMenuOpen: p === a,
                toggleMenuOpen: () => f(p !== a ? a : null)
              }, e.intlMessage.defaultMessage) : (0, l.jsx)(vr, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: u.formatMessage(e.intlMessage),
                type: e.type,
                gaText: e.intlMessage.defaultMessage,
                gaBreadCrumb: `${b} > ${e.intlMessage.defaultMessage}`,
                onNavigate: d
              }, e.intlMessage.defaultMessage)))
            })]
          });
          if (n === cn) return (0, l.jsx)(lr, {
            text: u.formatMessage(a),
            onNavigate: d
          });
          const w = n === on;
          return (0, l.jsxs)(ln, {
            location: r,
            dataTestId: t,
            type: n,
            target: s,
            gaText: a.defaultMessage,
            gaBreadCrumb: b,
            onNavigate: d,
            className: [Kn(Boolean(h)), h ? "rockstargames-modules-core-headere316012f5bea2b6722ee4b7d7b466cf2" : ""].join(" "),
            label: u.formatMessage(a),
            ...v,
            children: [u.formatMessage(a), w && (0, l.jsx)("img", {
              alt: "",
              src: kn
            })]
          })
        },
        fr = e => {
          let {
            links: a,
            cta: t,
            onNavigate: n
          } = e;
          const s = (0, o.Z)(),
            [r, i] = (0, _.useState)(null);
          return (0, l.jsx)("div", {
            className: "rockstargames-modules-core-headerb15d5468019b2ad71c74bc93146eeffe",
            children: (0, l.jsxs)("ul", {
              children: [a.map(((e, a) => (0, l.jsx)("li", {
                children: (0, l.jsx)(pr, {
                  intlMessage: e.intlMessage,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onNavigate: n,
                  isOpen: r === a,
                  setIsOpen: () => i(r !== a ? a : null)
                })
              }, e.text))), t && (0, l.jsx)("li", {
                className: "rockstargames-modules-core-headerda158a2d181d8898c98800dfd9a76691",
                children: (0, l.jsx)(gn, {
                  variant: t.variant,
                  dataTestId: t.dataTestId,
                  location: t.location,
                  gaEvent: t.ga,
                  gaText: t.text,
                  onNavigate: n,
                  children: s.formatMessage(t.intlMessage)
                })
              })]
            })
          })
        },
        hr = e => {
          let {
            data: a,
            isMobile: t
          } = e;
          const [n, s] = (0, _.useState)(!1), [r, i] = (0, _.useState)(!1), o = ue(), {
            pathname: c,
            hash: d,
            search: g
          } = (0, Q.useLocation)(), m = {
            duration: .2,
            ease: "easeInOut",
            stiffness: 1e3,
            damping: 100,
            delay: 0
          }, v = {
            open: {
              opacity: 1,
              transition: m
            },
            closed: {
              opacity: 0,
              transition: m
            }
          };
          return (0, _.useEffect)((() => {
            n ? document.documentElement.setAttribute("data-disallow-body-scroll", "") : document.documentElement.removeAttribute("data-disallow-body-scroll")
          }), [n]), (0, _.useEffect)((() => {
            i(!1), s(!1)
          }), [c, d, g]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("header", {
              className: _r.header,
              children: [(0, l.jsx)(or, {
                toggle: () => {
                  s(!n), i(!1)
                },
                isMenuOpen: n
              }), (0, l.jsx)("div", {
                className: _r.title,
                children: (0, l.jsx)(nr, {
                  site: a.site,
                  brand: a.brand,
                  hideRockstarBrand: !!a.brand
                })
              }), (0, l.jsx)("div", {
                children: (0, l.jsx)(On, {
                  search: !1,
                  isMobile: t
                })
              })]
            }), (0, l.jsx)(vn.M, {
              children: (n || r || o) && (0, l.jsxs)(un.E.nav, {
                className: [_r.nav, n && a.brand ? _r.paddingBottom : "", n ? _r.fullMenuOpen : ""].join(" "),
                variants: v,
                animate: "open",
                initial: "closed",
                exit: "closed",
                children: [(0, l.jsx)(Vn, {
                  isSearchOpen: r || o,
                  setIsSearchOpen: i
                }), n && (0, l.jsxs)("div", {
                  className: [_r.navContainer, r ? _r.searchOpen : ""].join(" "),
                  children: [(0, l.jsx)(fr, {
                    links: a.links,
                    cta: a.cta,
                    onNavigate: () => {
                      s(!1), i(!1)
                    }
                  }), a.brand && !a.hideQuickAccess && (0, l.jsx)(ar, {})]
                })]
              })
            }), t && (0, l.jsx)(an, {})]
          })
        },
        kr = () => {
          const [e, a] = (0, _.useState)(!1), t = ue(), {
            currentSite: s
          } = ge(), [r] = (0, Q.useSearchParams)(), {
            search: i
          } = (0, Q.useLocation)();
          (0, _.useEffect)((() => {
            const e = () => {
              a(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const o = (0, _.useMemo)((() => Object.values(n).reduce(((a, t) => {
              const i = s?.site ? t.appearancePaths[s.site] : [];
              return i ? [...a, ...i.map((a => {
                const s = a.match(/{.*}/),
                  i = s?.[0],
                  o = i && (e => {
                    if (!e) return null;
                    if ("titleOverride" === e) {
                      const e = r.get("title");
                      if ("gtav" === e) return Ae;
                      if ("rdr2" === e) return Xe
                    }
                    return null
                  })(i.substring(1, i.length - 1)) || t,
                  _ = i ? a.replace(i, "") : a;
                let c = null;
                return o?.links?.length < 1 && (c = he().cloneDeep(o), c.links = n?.rsg?.links, c.hideQuickAccess = !0, c.cta && delete c.cta), {
                  path: _,
                  element: e ? (0, l.jsx)(hr, {
                    isMobile: e,
                    data: c ?? o
                  }) : (0, l.jsx)(rr, {
                    data: o
                  })
                }
              }))] : a
            }), [])), [s?.site, e, i]),
            c = (0, Q.useRoutes)(o);
          return (0, l.jsxs)("div", {
            className: ke.globalNavigationRoot,
            children: [(0, l.jsx)("div", {
              className: [ke.globalNavigationSpacer, t ? ke.globalNavigationSearchSpacer : ""].join(" ")
            }), c]
          })
        },
        br = () => {
          const e = (0, _.useMemo)((() => (0, u.Z)()), []),
            [a, t] = (0, _.useState)("#main");
          return (0, _.useEffect)((() => {
            t("www" === e?.currentSite?.site ? window.location.pathname.startsWith("gta-online") ? "#main" : "#content" : "#app-root")
          }), [e]), (0, l.jsx)("a", {
            className: "rockstargames-modules-core-headercf7ea2d9c4f82e278e44b867b529e56e",
            href: a,
            children: (0, l.jsx)(i.Z, {
              ..._e.accessibility_skip_button
            })
          })
        },
        wr = e => {
          let {
            baseName: a
          } = e;
          const t = (() => {
              const e = window;
              if (e[ie]?.history || (() => {
                  const e = window;
                  e[ie]?.history || (e[ie] = Object.assign(e[ie] || {}, {
                    history: (0, re.lX)()
                  }))
                })(), e[ie]?.history) return e[ie].history;
              throw new Error("Browser History has not been initialised")
            })(),
            {
              hasProvider: n
            } = X(),
            [{
              iso: s
            }] = h();
          return n ? (0, l.jsx)(d, {
            locales: oe,
            lang: s,
            children: (0, l.jsx)(ee, {
              children: (0, l.jsx)(se, {
                basename: a,
                history: t,
                children: (0, l.jsxs)(de, {
                  children: [(0, l.jsx)(br, {}), (0, l.jsx)(kr, {})]
                })
              })
            })
          }) : (0, l.jsx)(d, {
            locales: oe,
            lang: s,
            children: (0, l.jsx)(Z, {
              children: (0, l.jsx)(ee, {
                children: (0, l.jsx)(se, {
                  basename: a,
                  history: t,
                  children: (0, l.jsxs)(de, {
                    children: [(0, l.jsx)(br, {}), (0, l.jsx)(kr, {})]
                  })
                })
              })
            })
          })
        }
    },
    9560: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var n = t(7056),
        s = t(8184),
        r = t.n(s),
        i = t(5370),
        o = t.n(i),
        _ = t(8383),
        c = t(7349);
      const {
        apiHost: l
      } = (0, _.Z)(), d = (0, c.r)(document.documentElement.lang), g = {}, m = async function(e) {
        let {
          fetchOptions: a = {},
          finalFetchOptions: t = {},
          query: s = null,
          pingBearer: i,
          requireBearerToken: _ = !0,
          useCache: c = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          bearerToken: m = null
        } = await (i?.()) ?? {}, v = {
          "X-Requested-With": "XMLHttpRequest",
          "X-AMC": !0,
          "Content-Type": "application/json",
          ...d && {
            "X-lang": d
          }
        };
        let u = `${l}/${e}`;
        if (null === s || o().isEmpty(s) || (u += `?${new URLSearchParams(s)}`), !m && _) return null;
        m && (v.Authorization = `Bearer ${m}`);
        const p = {
            headers: v
          },
          f = r().all([p, a, t]),
          h = JSON.stringify({
            ...f,
            url: u
          }),
          k = await (0, n.JQ)(h);
        if (c) {
          if (g[k]?.response) return g[k].response;
          if (g[k]?.loading) return {
            error: null,
            result: null
          };
          g[k] = {
            loading: !0
          }
        }
        const b = await fetch(u, f),
          w = await b.json();
        return c && (g[k] = {
          response: w,
          loading: !1
        }), w
      }
    },
    8383: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => o
      });
      const n = window?.env?.sc,
        s = window?.env?.marketing,
        r = e => {
          let {
            apiHost: a,
            authHost: t,
            clientId: r,
            graphEnv: i,
            scHost: o,
            hostname: _,
            cdnBase: c,
            key: l,
            marketingAuthTLD: d
          } = e;
          const g = n?.apiHost ?? a,
            m = n?.authHost ?? t,
            v = n?.cdnBase ?? c,
            u = n?.clientId ?? r,
            p = s?.marketingAuthTLD ?? d,
            f = n?.scHost ?? o;
          return {
            apiHost: `https://${g}.rockstargames.com`,
            graphEnv: n?.graphEnv ?? i,
            host: f,
            hostname: _,
            cdnBase: v,
            key: l,
            clientId: u,
            authHost: m,
            login: `https://${m}.rockstargames.com/connect/authorize/${u}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${u}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${u}`,
            gateway: `https://${p}.rockstargames.com/auth/gateway.json`,
            logout: `https://${p}.rockstargames.com/auth/sc-auth-logout`,
            pingBearer: `https://${p}.rockstargames.com/auth/ping-bearer.json`
          }
        },
        i = [r({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www"
        }), r({
          key: "sc-prod",
          clientId: "socialclub",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www"
        })],
        o = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const a = i.find((a => {
              let {
                key: t
              } = a;
              return t === e
            })) ?? null;
            if (a) return a
          }
          return i.find((e => {
            let {
              hostname: a
            } = e;
            return a.test(document.location.hostname)
          })) || i[0]
        }
    },
    7349: (e, a, t) => {
      "use strict";
      t.d(a, {
        r: () => n
      });
      const n = e => {
        const a = e.replace("_", "-");
        return "zh-hans" === a ? "zh-cn" : a
      }
    },
    9360: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => _
      });
      var n = t(7629),
        s = t.n(n);
      const r = (0, t(668).Z)(),
        i = r?.id,
        o = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        _ = e => {
          const a = {
            ...e,
            environment: i,
            display_type: o
          };
          s().dataLayer({
            dataLayer: a
          })
        }
    },
    4262: (e, a, t) => {
      "use strict";
      t.d(a, {
        bU: () => r,
        TZ: () => o
      });
      var n = t(1787),
        s = t(3577);
      const r = () => (0, n.lY)(s.SP);
      var i = t(279);
      const o = e => {
        const [a, t] = (0, i.useState)(null), [n, s] = (0, i.useState)(null), [r, o] = (0, i.useState)({});
        return (0, i.useLayoutEffect)((() => {
          let a = new Image,
            n = !1;
          return a.addEventListener("load", (() => {
            o({
              width: a.width,
              height: a.height
            }), a = null, n || t(!0)
          })), a.addEventListener("error", (() => {
            a = null, n || (t(!1), s(!0))
          })), a.src = e, () => {
            n = !0, null !== a && (a.src = "")
          }
        }), [e]), [a, r]
      };
      t(398), t(9560), t(6344), t(9615)
    },
    6210: (e, a, t) => {
      "use strict";
      t.d(a, {
        ZF: () => w.Z,
        kX: () => p,
        E$: () => y.Z,
        s8: () => v,
        IO: () => M,
        rz: () => x.r,
        Vg: () => b,
        bU: () => f.bU,
        TZ: () => f.TZ,
        TG: () => T,
        zt: () => r,
        rE: () => _,
        zv: () => m
      });
      var n = t(9360),
        s = t(3705);
      const r = e => a => ((e, a) => (0, s.jsx)(e, {
        ...a,
        gtmTrack: e => {
          (0, n.Z)(e)
        }
      }))(e, a);
      var i = t(1787),
        o = t(3577);
      const _ = e => a => ((e, a) => {
        const t = (0, i.lY)(o.SP);
        return (0, s.jsx)(e, {
          ...a,
          locale: t
        })
      })(e, a);
      var c = t(279),
        l = t(5370),
        d = t.n(l),
        g = t(3791);
      const m = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return t => ((e, a, t) => {
            const n = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const {
                data: a
              } = (0, i.aM)(g.Translations, {
                variables: {
                  config: e
                }
              });
              return a ? e => a?.translations.find((a => a.key === e))?.value ?? e : null
            }(t);
            return n ? (0, s.jsx)(e, {
              ...a,
              t: n
            }) : null
          })(e, t, a)
        },
        v = e => e.keys().forEach(e),
        u = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        p = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return u.filter((a => a.key === (e ? "prod" : "dev")))[0]?.path ?? null
        };
      var f = t(4262);
      const h = (0, i.QS)(!0),
        k = "data-disallow-body-scroll",
        b = () => {
          const e = (0, i.lY)(h);
          return (0, c.useEffect)((() => {
            e ? document.documentElement.removeAttribute(k) : document.documentElement.setAttribute(k, "")
          }), [e]), {
            bodyIsScrollable: e,
            setBodyIsScrollable: h
          }
        };
      var w = t(9560),
        y = t(8383),
        x = t(7349);
      const M = e => {
          const a = d().clone(e);
          return a?.["margin-top"] && (a.marginTop = a["margin-top"]), a?.["margin-bottom"] && (a.marginBottom = a["margin-bottom"]), a?.["margin-left"] && (a.marginLeft = a["margin-left"]), a?.["margin-right"] && (a.marginRight = a["margin-right"]), a?.["object-fit"] && (a.objectFit = a["object-fit"]), delete a?.["margin-top"], delete a?.["margin-bottom"], delete a?.["margin-right"], delete a?.["margin-left"], delete a?.["object-fit"], a
        },
        S = "rockstar-games-web";
      let N;
      try {
        N = JSON.parse(window.localStorage.getItem(S) ?? null)
      } catch (e) {
        N = {}
      }
      const C = (0, i.QS)(N),
        j = async e => {
          let {
            key: a,
            value: t
          } = e;
          if (null == a) throw Error("You have to specify a key and a value.");
          const n = C() ?? {};
          return n[a] = t, null === t && delete n[a], await window.localStorage.setItem(S, JSON.stringify(n)), n
        }, T = () => ({
          lsSettings: (0, i.lY)(C),
          settingsReactive: C,
          mutateLSSettings: j
        });
      t(6344);
      const z = {
          xxs: {
            min: 0,
            max: 479
          },
          xs: {
            min: 480,
            max: 767
          },
          sm: {
            min: 768,
            max: 991
          },
          md: {
            min: 992,
            max: 1199
          },
          lg: {
            min: 1200,
            max: 1439
          },
          xl: {
            min: 1440,
            max: 1919
          },
          xxl: {
            min: 1920,
            max: 99999
          }
        },
        I = () => {
          const e = window.innerWidth,
            a = window.innerHeight,
            t = z;
          return Object.keys(z).map((a => {
            const {
              min: n,
              max: s
            } = z[a], r = e >= n && e <= s, i = e >= n;
            t[a] = {
              activeExact: r,
              activeMin: i,
              min: n,
              max: s
            }
          })), {
            isMobile: e <= z.sm.min,
            breakpoints: t,
            windowWidth: e,
            windowHeight: a
          }
        },
        L = (0, c.createContext)(I()),
        {
          Consumer: A
        } = L;
      (0, i.QS)(I()), t(9615)
    },
    6344: (e, a, t) => {
      "use strict";
      var n = t(279);
      t(3705);
      const s = (0, n.createContext)(),
        {
          Consumer: r
        } = s
    },
    9615: (e, a, t) => {
      "use strict";
      var n = t(1787);
      t(279), t(3705), (0, n.QS)(!1)
    },
    668: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r,
        z: () => n
      });
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), n = s.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [n, s] = a;
            return s === t && (e = {
              site: n,
              subDomain: s
            }, !0)
          })) >= 0));
          return {
            ...s[n >= 0 ? n : 0],
            currentSite: e
          }
        }
    },
    2059: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GetAudioAlbum"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "audioAlbum"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracks"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "cover_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mp3_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "color"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mix_blend_mode"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "duration"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "artist"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "name"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 340
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "GetAudioAlbum")
    },
    3483: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 386
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    7790: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "types"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
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
                value: "sync"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
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
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
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
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina_uploads"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "directory"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "filename"
                      },
                      name: {
                        kind: "Name",
                        value: "input_filename"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "hashed_filename"
                      },
                      name: {
                        kind: "Name",
                        value: "filename"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "previewSrc"
                      },
                      name: {
                        kind: "Name",
                        value: "preview_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "full_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "prod"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "created_by"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
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
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1222
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina_uploads {\n            id\n            type\n            directory\n            filename: input_filename\n            hashed_filename: filename\n            previewSrc: preview_src\n            full_src\n            prod\n            created_by\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
    },
    3005: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    8300: (e, a, t) => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
          },
          variableDefinitions: [{
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
                value: "page"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
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
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
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
                    value: "metaUrl"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
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
          end: 537
        }
      };
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !s[a] && (s[a] = !0, !0)
        }))
      }

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      n.definitions = n.definitions.concat(r(t(5101).definitions)), n.definitions = n.definitions.concat(r(t(2849).definitions));
      var o = {};

      function _(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), o[e.name.value] = a
        }
      })), e.exports = n, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [_(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = o[a] || new Set,
          s = new Set,
          r = new Set;
        for (n.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var i = r;
          r = new Set, i.forEach((function(e) {
            s.has(e) || (s.add(e), (o[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = _(e, a);
          n && t.definitions.push(n)
        })), t
      }(n, "NewswireList")
    },
    5101: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "id"
              },
              name: {
                kind: "Name",
                value: "id_hash"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "url"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "title"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
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
          end: 380
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "postFields")
    },
    2849: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }],
        loc: {
          start: 0,
          end: 133
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "fragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.paging = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "paging")
    },
    7968: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
                value: "withMetaTitle"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
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
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withMetaTitle"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "img_rating"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "rating_descriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "rating_footer"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "url_rating"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 398
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        img_rating\n        rating_descriptors\n        rating_footer\n        url_rating\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "GameData")
    },
    7724: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Meta"
          },
          variableDefinitions: [{
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
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
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
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 155
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query Meta($locale: String!, $url: String!, $cache: Boolean = true) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $url) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.Meta = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "Meta")
    },
    1785: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "VideosList"
          },
          variableDefinitions: [{
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
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "limit"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
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
                value: "videos"
              },
              arguments: [{
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
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 243
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query VideosList($locale: String!, $cache: Boolean = true, $limit: Int) {\n    videos(locale: $locale, limit: $limit) {\n        results {\n            id\n            title\n            game {\n                title\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.VideosList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "VideosList")
    },
    2620: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "userData"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "user"
              },
              name: {
                kind: "Name",
                value: "userData"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "avatar"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "nickname"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "profile_link"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "isAMinor"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "bearer_token_expired"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "agegate_pass"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "logged_in"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "subscribed"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 230
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        isAMinor\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n        subscribed\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.userData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "userData")
    },
    4675: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MemoqXmlDownload"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "table"
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
                value: "id"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "memoqXmlDownload"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "table"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "table"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                    value: "xml"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "translation_status"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "MemoqXmlUpload"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "table"
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
                value: "id"
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
                value: "xml"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "memoqXmlUpload"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "table"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "table"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "xml"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "xml"
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
                    value: "translation_status"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 314
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query MemoqXmlDownload($table: String!, $id: String!) {\n    memoqXmlDownload(table: $table, id: $id) {\n        xml\n        translation_status\n    }\n}\n\nmutation MemoqXmlUpload($table: String!, $id: String!, $xml: String!) {\n    memoqXmlUpload(table: $table, id: $id, xml: $xml) {\n        translation_status\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.MemoqXmlDownload = r(a, "MemoqXmlDownload"), e.exports.MemoqXmlUpload = r(a, "MemoqXmlUpload")
    },
    3520: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
          },
          variableDefinitions: [{
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
                value: "context"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
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
                value: "tagList"
              },
              arguments: [{
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
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 131
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.TagList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "TagList")
    },
    3791: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Translations"
          },
          variableDefinitions: [{
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
                value: "config"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "translations"
              },
              arguments: [{
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
                  value: "config"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "config"
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
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 144
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query Translations($locale: String!, $config: String!) {\n    translations(locale: $locale, config: $config) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.Translations = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var _ = o;
          o = new Set, _.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "Translations")
    },
    7474: (e, a, t) => {
      var n = {
        "./left.svg": 623,
        "./pc.svg": 1797,
        "./ps3.svg": 2215,
        "./ps4.svg": 5971,
        "./ps5.svg": 3767,
        "./right.svg": 2328,
        "./switch.svg": 9108,
        "./x.svg": 8879,
        "./xbox.svg": 8126,
        "./xboxone.svg": 7772,
        "./xboxseriesxs.svg": 1957
      };

      function s(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = r, e.exports = s, s.id = 7474
    },
    8948: (e, a, t) => {
      var n = {
        "./cero_a.png": 676,
        "./cero_b.svg": 6504,
        "./cero_c.svg": 6702,
        "./cero_d.svg": 4858,
        "./cero_z.svg": 170,
        "./djctq_10.svg": 3819,
        "./djctq_12.svg": 673,
        "./djctq_14.svg": 9662,
        "./djctq_16.svg": 3984,
        "./djctq_18.svg": 8434,
        "./djctq_er.svg": 4619,
        "./djctq_l.svg": 3638,
        "./esrb_ao.svg": 189,
        "./esrb_e.svg": 6679,
        "./esrb_e10plus.svg": 2442,
        "./esrb_m.svg": 3438,
        "./esrb_m_ao.svg": 2155,
        "./esrb_rp.svg": 8362,
        "./esrb_rplm17.svg": 2386,
        "./esrb_t.svg": 5631,
        "./fpb_13.svg": 4331,
        "./fpb_16.svg": 5669,
        "./fpb_18.svg": 4732,
        "./fpb_pg.svg": 9698,
        "./grac_12.svg": 8985,
        "./grac_15.svg": 4894,
        "./grac_18.svg": 2424,
        "./grac_a.svg": 4266,
        "./gsrr_0.svg": 175,
        "./gsrr_12.svg": 1214,
        "./gsrr_15.svg": 8768,
        "./gsrr_18.svg": 7233,
        "./gsrr_6.svg": 4620,
        "./nmc_12.svg": 2288,
        "./nmc_16.svg": 9928,
        "./nmc_18.svg": 7458,
        "./nmc_21.svg": 3105,
        "./nmc_3.svg": 33,
        "./nmc_7.svg": 2308,
        "./oflc_g.svg": 6543,
        "./oflc_m.svg": 4922,
        "./oflc_ma15.svg": 4370,
        "./oflc_pg.svg": 2902,
        "./oflc_r18.svg": 8458,
        "./pegi_12.svg": 3403,
        "./pegi_16.svg": 885,
        "./pegi_18.svg": 3792,
        "./pegi_3.svg": 7514,
        "./pegi_4.svg": 1941,
        "./pegi_6.svg": 8669,
        "./pegi_7.svg": 6272,
        "./rars_0.svg": 1964,
        "./rars_12.svg": 5871,
        "./rars_16.svg": 9671,
        "./rars_18.svg": 9731,
        "./rars_6.svg": 3707,
        "./usk_0.svg": 5793,
        "./usk_12.svg": 1663,
        "./usk_16.svg": 5751,
        "./usk_18.svg": 3296,
        "./usk_6.svg": 24
      };

      function s(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = r, e.exports = s, s.id = 8948
    },
    8214: (e, a, t) => {
      var n = {
        "./cero_a.png": 676,
        "./cero_b.svg": 6504,
        "./cero_c.svg": 6702,
        "./cero_d.svg": 4858,
        "./cero_z.svg": 170,
        "./djctq_10.svg": 3819,
        "./djctq_12.svg": 673,
        "./djctq_14.svg": 9662,
        "./djctq_16.svg": 3984,
        "./djctq_18.svg": 8434,
        "./djctq_er.svg": 4619,
        "./djctq_l.svg": 3638,
        "./esrb_ao.svg": 189,
        "./esrb_e.svg": 6679,
        "./esrb_e10plus.svg": 2442,
        "./esrb_m.svg": 3438,
        "./esrb_m_ao.svg": 2155,
        "./esrb_rp.svg": 8362,
        "./esrb_rplm17.svg": 2386,
        "./esrb_t.svg": 5631,
        "./fpb_13.svg": 4331,
        "./fpb_16.svg": 5669,
        "./fpb_18.svg": 4732,
        "./fpb_pg.svg": 9698,
        "./grac_12.svg": 8985,
        "./grac_15.svg": 4894,
        "./grac_18.svg": 2424,
        "./grac_a.svg": 4266,
        "./gsrr_0.svg": 175,
        "./gsrr_12.svg": 1214,
        "./gsrr_15.svg": 8768,
        "./gsrr_18.svg": 7233,
        "./gsrr_6.svg": 4620,
        "./nmc_12.svg": 2288,
        "./nmc_16.svg": 9928,
        "./nmc_18.svg": 7458,
        "./nmc_21.svg": 3105,
        "./nmc_3.svg": 33,
        "./nmc_7.svg": 2308,
        "./oflc_g.svg": 6543,
        "./oflc_m.svg": 4922,
        "./oflc_ma15.svg": 4370,
        "./oflc_pg.svg": 2902,
        "./oflc_r18.svg": 8458,
        "./pegi_12.svg": 3403,
        "./pegi_16.svg": 885,
        "./pegi_18.svg": 3792,
        "./pegi_3.svg": 7514,
        "./pegi_4.svg": 1941,
        "./pegi_6.svg": 8669,
        "./pegi_7.svg": 6272,
        "./rars_0.svg": 1964,
        "./rars_12.svg": 5871,
        "./rars_16.svg": 9671,
        "./rars_18.svg": 9731,
        "./rars_6.svg": 3707,
        "./usk_0.svg": 5793,
        "./usk_12.svg": 1663,
        "./usk_16.svg": 5751,
        "./usk_18.svg": 3296,
        "./usk_6.svg": 24
      };

      function s(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = r, e.exports = s, s.id = 8214
    },
    6628: (e, a, t) => {
      var n = {
        "./bounty.png": 5583,
        "./collector.png": 2985,
        "./moonshiner.png": 8361,
        "./naturalist.png": 8884,
        "./trader.png": 7016
      };

      function s(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = r, e.exports = s, s.id = 6628
    },
    623: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    1797: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    2215: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    5971: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    3767: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    2328: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    9108: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    8879: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    8126: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    7772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    1957: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    676: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    6504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/62cd2c266d677467735bd0e7c35fc07d.svg"
    },
    6702: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/96e2f780356b81450e02ec721e3c7f57.svg"
    },
    4858: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16ba95f97d23ba2c8c73b59495f90cdf.svg"
    },
    170: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1f0055474ca057f3fab93aab4a63325.svg"
    },
    3819: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab6153e374b885a02f2cc1380dcca146.svg"
    },
    673: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/073e7a413a027ccd5b0700d8903df35c.svg"
    },
    9662: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccfd53e1d7346a0677e0653a8e97f3e4.svg"
    },
    3984: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f08b80d1a42d97fbdff2c2db9a6de1a2.svg"
    },
    8434: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a6aed34c22e1f8ef61f38c808f081ebc.svg"
    },
    4619: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0166b43466735de342f0dac5295cd193.svg"
    },
    3638: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b3c5e193228e689548c438c8fa57dea.svg"
    },
    189: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    6679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    2442: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    3438: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    2155: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc9154a7d22161125d95101e255dc09a.svg"
    },
    8362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    2386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f24a9d7cc8c3c42955fd17e4c47b8c.svg"
    },
    5631: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    4331: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9e1c49497350c48ef4a42a38e9006fd.svg"
    },
    5669: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc265fc3d2a6d902b080bd9ed6d5cc00.svg"
    },
    4732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/db100c679bd0d5fb670900bc5492486d.svg"
    },
    9698: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c16ca9475385093710a51ace101b0273.svg"
    },
    8985: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1f1d86acb2f6722f9bb4d16a563e4bd3.svg"
    },
    4894: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/478d3a3012984f6a58eeea7f33f5f7e8.svg"
    },
    2424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d5cd0f82f6694431a580a25537946b2c.svg"
    },
    4266: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/229675cb3b6d359b68a24b0d863f65fa.svg"
    },
    175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c44630695e1bdc8e41e1e812f6124b2.svg"
    },
    1214: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/09e0c200ba4d0a1afdd1436b67bcae8f.svg"
    },
    8768: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64b8f5d5e0ebf1b373d428ddb9662abb.svg"
    },
    7233: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e3ab94ec8c45ca9037b7dc72a7332f29.svg"
    },
    4620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/58358c92b8a55353b5c0b4386d95e572.svg"
    },
    2288: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9bc7a0f78693c9813b1c67e6f38fab08.svg"
    },
    9928: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44f3c56a373f1be85bb063e147294978.svg"
    },
    7458: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1128a526bdba2bf29a6b58c728c064f5.svg"
    },
    3105: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8fc35d81a776bc0b4e704adbdef9faad.svg"
    },
    33: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/faf5ad053cd5ecab7a21decee2dc9771.svg"
    },
    2308: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d93b217bee965a06071dc2cd5a7ff33.svg"
    },
    6543: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b09d24a1274365100f8393f5dff81e48.svg"
    },
    4922: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0bc6aed32521309143e498e13c635fd7.svg"
    },
    4370: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/310e473666419388ba34e89291de6512.svg"
    },
    2902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbeb819f9d25d687062aab0f8c18b16f.svg"
    },
    8458: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59a6ba7ed2027da5635a7cfec40b78ff.svg"
    },
    3403: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198f755ceae880fb88646111acc8ed16.svg"
    },
    885: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f07578e729bf968a70116b0c3974889.svg"
    },
    3792: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dec923748ffd047a6e98576bd2af9bd9.svg"
    },
    7514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/39c7fd5b50ae8512366ce78228f4d447.svg"
    },
    1941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e38552fd53e9840e863eea6787551c9.svg"
    },
    8669: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ce6a057fb760840b4f5d8654ef28550c.svg"
    },
    6272: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/caec52daa668bf39bce12bbef32290fa.svg"
    },
    1964: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2583ed174e341e7d325ef2abe3c9a9a1.svg"
    },
    5871: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/119d27e33ea983bdc14570b776f59241.svg"
    },
    9671: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/138e36d0438f03eb742a570366c56ddc.svg"
    },
    9731: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aff6ebf2baed2547f9b2c30ae00a1c2f.svg"
    },
    3707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aff09306fc421ea8bf1b4058f1588177.svg"
    },
    5793: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7f637f93e9513c015e2c8ec7a8ed10eb.svg"
    },
    1663: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38b3e9ccc5a4d27023aa0d8f6d5f8300.svg"
    },
    5751: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a98a745c1c28a12c21ff45784dd0670c.svg"
    },
    3296: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1d3ba96bf0a5ef26489b077fdfb447a.svg"
    },
    24: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4b48a64eff8f222f63d75eb75fb5aba.svg"
    },
    5583: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    2985: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    8361: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    8884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    7016: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    7111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    6499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    9963: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    8682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    2490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    2622: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    6029: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    8421: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    5743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    3793: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    350: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    3642: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    6457: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    3396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    6062: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    4655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    98: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    9533: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    3662: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);