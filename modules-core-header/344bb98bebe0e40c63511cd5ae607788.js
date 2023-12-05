/*! For license information please see 344bb98bebe0e40c63511cd5ae607788.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [877], {
    1787: (e, a, t) => {
      "use strict";
      t.d(a, {
        QS: () => s.QS,
        BS: () => N,
        M9: () => U,
        ZA: () => g.ZA,
        qs: () => T,
        Db: () => w,
        aM: () => y,
        lY: () => n.l,
        XW: () => I,
        cC: () => P,
        yx: () => E,
        eJ: () => M,
        dd: () => $
      });
      var s = t(9551),
        n = t(2997),
        r = t(279),
        i = t(5672),
        o = t(2213),
        l = t(895),
        c = t(7605),
        _ = t(5370),
        d = t.n(_),
        g = t(3577);
      const m = (e, a) => {
        const t = (0, n.l)(g.SP),
          s = {
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
            error: l,
            ..._
          } = (0, c.a)(e, s);
        return (0, r.useEffect)((() => {
          if (i && s.setTitleDataPath) {
            const e = d().get(i, s.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [i]), (0, r.useEffect)((() => (s.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: o
        }), () => {
          s.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [o]), (0, r.useEffect)((() => {
          if (s.autoSetError && l) throw new Error(String(l))
        }), [l]), {
          loading: o,
          error: l,
          data: i,
          ..._
        }
      };
      var u = t(3705);
      const v = (0, r.createContext)((() => ({
          data: null
        }))),
        p = new Promise((e => {
          e()
        })),
        h = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new i.h)
        },
        f = [() => p, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new o.f(h))
        }],
        b = (0, r.createContext)((() => f)),
        k = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: a
          } = e;
          return (0, u.jsx)(b.Provider, {
            value: l.D,
            children: (0, u.jsx)(v.Provider, {
              value: m,
              children: a
            })
          })
        }),
        y = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, a) => (0, r.useContext)(v)(e, a)),
        w = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, r.useContext)(b)(e)),
        x = (0, r.createContext)({}),
        M = () => (0, r.useContext)(x),
        S = (0, r.createContext)({}),
        T = () => (0, r.useContext)(S);
      var C = t(588);
      const N = e => {
          const a = "__makevars__";
          return window?.[a] || (window[a] = {}), window?.[a]?.[e] || (window[a][e] = {}), ((e, a) => (t, n) => {
            const r = window?.[e]?.[a]?.[t] ?? (0, s.QS)(n);
            return window[e][a][t] = r, r
          })(a, e)
        },
        j = N("graph-token-provider"),
        z = (0, r.createContext)({
          token: j("token", null),
          tokenPing: "",
          tokenPingExpires: j("tokenPingExpires", null)
        }),
        A = e => {
          let {
            children: a,
            token: t,
            tokenPing: s,
            tokenPingExpires: n
          } = e;
          return (0, u.jsx)(z.Provider, {
            value: {
              token: t,
              tokenPing: s,
              tokenPingExpires: n
            },
            children: a
          })
        },
        E = () => {
          const {
            token: e,
            tokenPing: a,
            tokenPingExpires: t
          } = (0, r.useContext)(z);
          return [e, a, t]
        },
        I = () => {
          const [e] = E();
          return (0, n.l)(e)
        },
        P = () => {
          const [e, a, t] = E();
          return () => (async e => {
            let {
              url: a,
              token: t,
              tokenPingExpires: s
            } = e;
            try {
              const e = s?.() ?? 0,
                n = t?.() ?? null,
                r = (e => {
                  const a = Date.now() / 1e3;
                  return Math.ceil(e - a)
                })(e) > 0;
              if (!1 === n) return {
                bearerToken: n
              };
              if (r && n) return {
                bearerToken: n
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
                  tokenExpiresTime: l = null
                } = o;
              return null !== l && s?.(l), t(o.bearerToken ?? null), o
            } catch (e) {
              return t(!1), !1
            }
          })({
            url: a,
            token: e,
            tokenPingExpires: t
          })
        };
      var L = t(5767);
      var O = t(2495),
        D = t(3421),
        R = t.n(D);
      var V = t(3843),
        B = t(7056);
      const G = (0, V.Nq)({
          sha256: B.JQ
        }),
        F = e => {
          let {
            children: a,
            graphOptions: t,
            typePolicies: s
          } = e;
          const n = (e => {
            let {
              graphOptions: a,
              typePolicies: t = {}
            } = e;
            const s = a?.env ? U(a?.env) : a?.uri,
              [n] = (0, r.useState)(new i.h({
                typePolicies: t
              })),
              l = G.concat((e => {
                let {
                  token: a
                } = e;
                return (0, L.v)(((e, t) => {
                  let {
                    headers: s
                  } = t;
                  const n = a?.() ?? null;
                  return n ? {
                    headers: {
                      ...s,
                      authorization: `Bearer ${n}`
                    }
                  } : null
                }))
              })({
                token: a?.token
              }).concat((e => (0, O.L)({
                ...e,
                fetch: R()
              }))({
                ...a,
                uri: s
              })));
            return new o.f({
              cache: n,
              link: l
            })
          })({
            graphOptions: t,
            typePolicies: s
          });
          return (0, u.jsx)(A, {
            token: t?.token,
            tokenPing: t?.tokenPing,
            tokenPingExpires: t?.tokenPingExpires,
            children: (0, u.jsx)(C.e, {
              client: n,
              children: (0, u.jsx)(k, {
                children: a
              })
            })
          })
        },
        q = N("graph-with-rs-graph"),
        $ = (e, a) => {
          let {
            env: t = "prod",
            typePolicies: s,
            token: n = q("token", null),
            tokenPingExpires: r = q("tokenPingExpires", null),
            tokenPing: i = null
          } = a;
          return function(a) {
            return (0, u.jsx)(F, {
              typePolicies: s,
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n,
                tokenPing: i,
                tokenPingExpires: r
              },
              children: (0, u.jsx)(e, {
                ...a
              })
            })
          }
        },
        U = (N("graph-hoc"), e => {
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
        SP: () => n,
        ZA: () => d
      });
      var s = t(9551);
      const n = (0, s.QS)(document.documentElement.lang),
        r = window?.env;
      (0, s.QS)({
        media: r?.cdn?.media,
        videos: r?.cdn?.videos
      });
      var i = t(2997);
      const o = document.currentScript,
        l = o?.src ? new URL(o.src).origin : "";
      let c = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${l}/`;
      c.endsWith("/") || (c = `${c}/`);
      const _ = (0, s.QS)(c),
        d = () => (0, i.l)(_)
    },
    438: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => sv
      });
      var s = {};
      t.r(s), t.d(s, {
        beaterator: () => s_,
        bully: () => n_,
        careers: () => r_,
        gta: () => i_,
        gta2: () => o_,
        gta3: () => l_,
        gta4: () => c_,
        gta5: () => __,
        gtaAdvance: () => d_,
        gtaCtw: () => g_,
        gtaIvEflc: () => m_,
        gtaLcs: () => u_,
        gtaLondon: () => v_,
        gtaOnline: () => p_,
        gtaPlus: () => h_,
        gtaSanAndreas: () => f_,
        gtaTrilogy: () => b_,
        gtaVc: () => k_,
        gtaVcs: () => y_,
        laNoire: () => w_,
        manhunt: () => x_,
        manhunt2: () => M_,
        maxPayne: () => S_,
        maxPayne2: () => T_,
        maxPayne3: () => C_,
        midnightclub: () => N_,
        midnightclub2: () => j_,
        midnightclub3: () => z_,
        midnightclubStreetRacing: () => A_,
        oni: () => E_,
        readDeadOnline: () => I_,
        redDeadRedemption: () => P_,
        redDeadRedemption2: () => L_,
        redDeadRedemptionUndeadNightmare: () => O_,
        redDeadRevolver: () => D_,
        rsg: () => R_,
        skateAndDestroy: () => B_,
        smugglersRun: () => G_,
        smugglersRun2: () => F_,
        smugglersRunWarzones: () => q_,
        stateOfEmergency: () => V_,
        support: () => $_,
        tableTennis: () => U_,
        theItalianJob: () => H_,
        theWarriors: () => X_,
        wildMetal: () => W_
      });
      var n = {};
      t.r(n), t.d(n, {
        beaterator: () => Fm,
        bully: () => $m,
        careers: () => qm,
        gta: () => Um,
        gta2: () => Hm,
        gta3: () => Xm,
        gta4: () => Wm,
        gta5: () => Ym,
        gtaadvance: () => Zm,
        gtactw: () => Jm,
        gtaiveflc: () => Km,
        gtalcs: () => Qm,
        gtalondon: () => eu,
        gtaonline: () => au,
        gtaplus: () => tu,
        gtasanandreas: () => su,
        gtatrilogy: () => nu,
        gtav: () => Ym,
        gtavc: () => ru,
        gtavcs: () => iu,
        lanoire: () => ou,
        manhunt: () => lu,
        manhunt2: () => cu,
        manhunt3: () => _u,
        maxpayne: () => du,
        maxpayne2: () => gu,
        maxpayne3: () => mu,
        midnightclub2: () => uu,
        midnightclub3dub: () => vu,
        midnightclubla: () => pu,
        midnightclubstreetracing: () => hu,
        oni: () => fu,
        reddeadonline: () => bu,
        reddeadredemption: () => ku,
        reddeadredemption2: () => yu,
        reddeadredemptionundeadnightmare: () => wu,
        reddeadrevolver: () => xu,
        rockstar: () => Mu,
        smugglersrun: () => Su,
        smugglersrun2hostileterritory: () => Tu,
        smugglersrunwarzones: () => Cu,
        stateofemergency: () => Nu,
        tabletennis: () => ju,
        theitalianjob: () => zu,
        thewarriors: () => Au,
        thrashersad: () => Eu,
        wildmetal: () => Iu
      });
      var r = t(3645),
        i = t(9089),
        o = t(2596),
        l = t(279),
        c = t(9894),
        _ = t(3705);
      const d = e => {
        let {
          locales: a,
          lang: t,
          children: s
        } = e;
        const n = (0, l.useMemo)((() => function(e) {
            let [a, t] = e.split(/[-_]/);
            return t = t.toLowerCase(), "cn" === t && (t = "hans"), [a, t]
          }(t)), [t]),
          r = (0, l.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, n[1])), [t, a]);
        return (0, _.jsx)(c.Z, {
          messages: r,
          locale: n[0],
          defaultLocale: "en",
          children: s
        }, n[0])
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
        u = g[1];
      var v = t(668);
      const p = (e, a) => {
          e && a ? document.cookie = `${e}=${a}; domain=${h()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${a})`)
        },
        h = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        f = () => {
          const {
            location: e
          } = window, a = (0, v.Z)(), t = (e => {
            const a = m.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== a.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const a = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return a?.split("=")[1]
          })(e), n = u, [r, i] = function(e, a) {
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const s = document.cookie.split("; "),
              n = `${e}=`,
              r = s.find((e => e.startsWith(n))),
              i = r?.substring(n.length, r.length);
            return i && !t || p(e, a), [i, (o = e, e => {
              p(o, e)
            })];
            var o
          }(`rockstarweb_lang.${a.cookieIdentifier}`, t ?? void 0);
          let o = n;
          return o = a.currentSite?.site === v.z.www ? m.find((e => e.subdomaincom === s)) || m.find((e => e.subdomaincom === t)) || n : m.find((e => e.iso === r)) || n, [o, i]
        };
      var b = t(1787),
        k = t(6210),
        y = t(2620);
      const w = (0, b.BS)("@rockstargames/modules-core-sc-user"),
        x = w("navOpenReactive", !1),
        M = e => x(e),
        S = w("jumpScMenuFocusReactive", !1),
        T = e => S(e),
        C = w("hasNotificationsReactive", !1),
        N = e => C(e),
        j = w("currentCharIdReactive", (0, k.nT)()?.currentCharId),
        z = e => j(e),
        A = w("selectedCharacterTupleReactive", null),
        E = e => A(e),
        I = w("rockstarIdReactive", null),
        P = w("charactersNeededReactive", null),
        L = e => P(e),
        O = w("userDataReactive", null),
        D = e => O(e),
        R = () => {
          const e = (0, b.lY)(P),
            a = (0, b.lY)(j),
            t = (0, b.lY)(x),
            s = (0, b.lY)(C),
            n = (0, b.lY)(A);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: s,
            navOpen: t,
            userData: (0, b.lY)(O),
            selectedCharacterTuple: n,
            jumpScMenuFocus: (0, b.lY)(S),
            setCharactersNeeded: L,
            setCurrentCharId: z,
            setHasNotifications: N,
            setNavOpen: M,
            setSelectedCharacterTuple: E,
            setUserData: D,
            setJumpScMenuFocus: T
          }
        };
      var V = t(2348),
        B = t.n(V);
      const G = (0, k.E$)(),
        F = (0, b.QS)(G),
        {
          graphEnv: q
        } = (0, k.E$)(),
        $ = (0, b.M9)(q),
        U = () => {
          const e = (0, b.XW)(),
            [a, t] = (0, l.useState)({
              id: null,
              avatar: "",
              profile_link: "",
              nickname: "",
              crews: [],
              characters: {
                gtao: []
              }
            }),
            [s, n] = (0, l.useState)(!0),
            [r, , i] = (0, b.yx)(),
            o = (0, b.cC)(),
            {
              refetch: c
            } = (0, b.aM)(y.userData, {
              skip: !0,
              context: {
                uri: $
              }
            }),
            [_, d] = (0, l.useState)(null),
            [g, m] = (0, l.useState)(!1),
            [u, v] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            (async () => {
              const s = null === e ? null : !!e;
              if (s && !g) {
                n(!0), m(!0);
                const e = await c(),
                  s = e?.data?.user?.id,
                  r = await (async e => {
                    let {
                      pingBearer: a,
                      rockstarId: t
                    } = e;
                    const {
                      crews: s
                    } = await (0, k.ZF)("crew/forMember", {
                      pingBearer: a,
                      query: {
                        userId: t
                      }
                    });
                    return s
                  })({
                    pingBearer: o,
                    rockstarId: s
                  }),
                  i = await (async e => {
                    let {
                      pingBearer: a,
                      nickname: t,
                      rockstarId: s
                    } = e;
                    const n = [],
                      r = await (0, k.ZF)("profile/playedplatforms?game=gtav", {
                        pingBearer: a
                      });
                    if (await (r?.platforms?.reduce((async (e, t) => {
                        if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                        const s = await (0, k.ZF)(`games/gtao/characters?platform=${t}`, {
                          pingBearer: a
                        });
                        s?.status && s?.result?.map((e => {
                          const {
                            stats: a
                          } = e, {
                            overview: s
                          } = a, {
                            rank: r
                          } = s;
                          if ("0" === r.value) return;
                          const i = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                          return n.push({
                            ...e,
                            platform: t,
                            mugshotUrl: i
                          }), e
                        }))
                      }), Promise.resolve())), !n.length) return n;
                    const {
                      status: i,
                      accounts: o
                    } = await (0, k.ZF)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                      pingBearer: a
                    });
                    return i && o.length ? (o.forEach((e => {
                      const {
                        rockstarAccount: a,
                        linkedAccounts: r
                      } = e;
                      if (a?.rockstarId !== s) return;
                      const i = t;
                      let o = "",
                        l = "";
                      r?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (l = e.userName), e))), n.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), n.map(((e, a) => (e.platformUsername = i, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = l || i), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || i), e)))
                    })), n) : n
                  })({
                    pingBearer: o,
                    nickname: e?.data?.user?.nickname,
                    rockstarId: s
                  }),
                  l = {
                    ...a,
                    ...e?.data?.user,
                    crews: r,
                    characters: {
                      gtao: i
                    }
                  };
                n(!1), t(l), d(!0), I(s)
              }
              if (!1 === s && !u) {
                try {
                  await (async e => {
                    let {
                      token: a,
                      tokenPingExpires: t
                    } = e;
                    const s = {
                        method: "POST",
                        body: `fingerprint=${await B().get().then((e=>e))}`,
                        credentials: "include",
                        headers: {
                          "X-Requested-With": "XMLHttpRequest",
                          "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                        }
                      },
                      n = await fetch(F().silentCheck, s);
                    if (200 !== n.status) return void a(!1);
                    const r = await n.json(),
                      i = `${F().gateway}?code=${r}`,
                      o = await fetch(i, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: l,
                        tokenExpiresTime: c
                      } = await o.json();
                    return a(l), t(c), l
                  })({
                    token: r,
                    tokenPingExpires: i
                  })
                } catch (e) {}
                v(!0)
              }!1 === s && u && (m(!0), d(!1), n(!1)), null === e && o()
            })()
          }), [e, g, u]), {
            data: a,
            loading: s,
            loggedIn: _
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
        X = "user-context",
        W = window?.[X] ?? (window[X] = (0, l.createContext)(H)),
        Y = e => {
          let {
            children: a
          } = e;
          const t = U(),
            s = (0, l.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, _.jsx)(W.Provider, {
            value: s,
            children: a
          })
        },
        Z = () => (0, l.useContext)(W);
      t(7629);
      var J = t(9360),
        K = t(398);
      const Q = (0, l.createContext)(void 0),
        ee = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const s = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, l.useState)([]), [s, n] = (0, l.useState)([]), [r, i] = (0, l.useState)(null), {
                data: o,
                loggedIn: c
              } = Z(), _ = (e, s) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = s ?? {};
                    (0, J.Z)({
                      ...e,
                      ...a
                    }), n.push(e)
                  }
                })), t([...a, ...n])
              };
              (0, l.useEffect)((() => {
                if (o && null !== c) {
                  const e = d(o);
                  s.length && e && _(s, e), i(e)
                } else e || s.length && _(s)
              }), [o, c, s]), (0, l.useEffect)((() => {
                const e = s.filter((e => -1 === a.indexOf(e)));
                n(e)
              }), [a]);
              const d = e => {
                const a = [],
                  t = [],
                  s = [];
                return Object.keys(e.characters).forEach((n => {
                  e.characters[n].length && (t.push(n), e.characters[n].forEach((e => {
                    "gtao" === n && (s.includes(e.platform) || s.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: c ?? !1,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: s.length ? s.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === c || !o || !r) {
                    const a = [...s];
                    return a.push({
                      ...e
                    }), n(a)
                  }
                  return (0, J.Z)({
                    ...e,
                    ...r
                  })
                }
              }
            }(a),
            n = (0, l.useMemo)((() => s), [s, a]);
          return (0, _.jsx)(Q.Provider, {
            value: n,
            children: t
          })
        },
        ae = {
          track: () => null
        },
        te = () => (0, l.useContext)(Q) ?? ae;
      var se = t(3747);
      const ne = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [n, r] = (0, l.useState)({
          action: s.action,
          location: s.location
        });
        return (0, l.useLayoutEffect)((() => s.listen(((e, a) => {
          r({
            location: e,
            action: a
          })
        }))), [s]), (0, _.jsx)(se.Router, {
          basename: a,
          location: n.location,
          navigationType: n.action,
          navigator: s,
          children: t
        })
      };
      var re = t(3619);
      const ie = "__MFE_GLOBAL_HOOK__",
        oe = () => {
          const e = window;
          if (e[ie]?.history || (() => {
              const e = window;
              e[ie]?.history || (e[ie] = Object.assign(e[ie] || {}, {
                history: (0, re.lX)()
              }))
            })(), e[ie]?.history) return e[ie].history;
          throw new Error("Browser History has not been initialised")
        };
      let le, ce, _e, de, ge, me, ue, ve, pe, he, fe, be = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        ke = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        ye = 1e8,
        we = 1e-8,
        xe = 2 * Math.PI,
        Me = xe / 4,
        Se = 0,
        Te = Math.sqrt,
        Ce = Math.cos,
        Ne = Math.sin,
        je = e => "string" == typeof e,
        ze = e => "function" == typeof e,
        Ae = e => "number" == typeof e,
        Ee = e => void 0 === e,
        Ie = e => "object" == typeof e,
        Pe = e => !1 !== e,
        Le = () => "undefined" != typeof window,
        Oe = e => ze(e) || je(e),
        De = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Re = Array.isArray,
        Ve = /(?:-?\.?\d|\.)+/gi,
        Be = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Ge = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Fe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        qe = /[+-]=-?[.\d]+/,
        $e = /[^,'"\[\]\s]+/gi,
        Ue = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        He = {},
        Xe = {},
        We = e => (Xe = xa(e, He)) && Ts,
        Ye = (e, a) => console.warn("Invalid property", e, "set to", a, "Missing plugin? gsap.registerPlugin()"),
        Ze = (e, a) => !a && console.warn(e),
        Je = (e, a) => e && (He[e] = a) && Xe && (Xe[e] = a) || He,
        Ke = () => 0,
        Qe = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        ea = {
          suppressEvents: !0,
          kill: !1
        },
        aa = {
          suppressEvents: !0
        },
        ta = {},
        sa = [],
        na = {},
        ra = {},
        ia = {},
        oa = 30,
        la = [],
        ca = "",
        _a = e => {
          let a, t, s = e[0];
          if (Ie(s) || ze(s) || (e = [e]), !(a = (s._gsap || {}).harness)) {
            for (t = la.length; t-- && !la[t].targetTest(s););
            a = la[t]
          }
          for (t = e.length; t--;) e[t] && (e[t]._gsap || (e[t]._gsap = new Bt(e[t], a))) || e.splice(t, 1);
          return e
        },
        da = e => e._gsap || _a(et(e))[0]._gsap,
        ga = (e, a, t) => (t = e[a]) && ze(t) ? e[a]() : Ee(t) && e.getAttribute && e.getAttribute(a) || t,
        ma = (e, a) => (e = e.split(",")).forEach(a) || e,
        ua = e => Math.round(1e5 * e) / 1e5 || 0,
        va = e => Math.round(1e7 * e) / 1e7 || 0,
        pa = (e, a) => {
          let t = a.charAt(0),
            s = parseFloat(a.substr(2));
          return e = parseFloat(e), "+" === t ? e + s : "-" === t ? e - s : "*" === t ? e * s : e / s
        },
        ha = (e, a) => {
          let t = a.length,
            s = 0;
          for (; e.indexOf(a[s]) < 0 && ++s < t;);
          return s < t
        },
        fa = () => {
          let e, a, t = sa.length,
            s = sa.slice(0);
          for (na = {}, sa.length = 0, e = 0; e < t; e++) a = s[e], a && a._lazy && (a.render(a._lazy[0], a._lazy[1], !0)._lazy = 0)
        },
        ba = (e, a, t, s) => {
          sa.length && !ce && fa(), e.render(a, t, s || ce && a < 0 && (e._initted || e._startAt)), sa.length && !ce && fa()
        },
        ka = e => {
          let a = parseFloat(e);
          return (a || 0 === a) && (e + "").match($e).length < 2 ? a : je(e) ? e.trim() : e
        },
        ya = e => e,
        wa = (e, a) => {
          for (let t in a) t in e || (e[t] = a[t]);
          return e
        },
        xa = (e, a) => {
          for (let t in a) e[t] = a[t];
          return e
        },
        Ma = (e, a) => {
          for (let t in a) "__proto__" !== t && "constructor" !== t && "prototype" !== t && (e[t] = Ie(a[t]) ? Ma(e[t] || (e[t] = {}), a[t]) : a[t]);
          return e
        },
        Sa = (e, a) => {
          let t, s = {};
          for (t in e) t in a || (s[t] = e[t]);
          return s
        },
        Ta = e => {
          let a = e.parent || de,
            t = e.keyframes ? (s = Re(e.keyframes), (e, a) => {
              for (let t in a) t in e || "duration" === t && s || "ease" === t || (e[t] = a[t])
            }) : wa;
          var s;
          if (Pe(e.inherit))
            for (; a;) t(e, a.vars.defaults), a = a.parent || a._dp;
          return e
        },
        Ca = function(e, a) {
          let t, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            r = arguments.length > 4 ? arguments[4] : void 0,
            i = e[n];
          if (r)
            for (t = a[r]; i && i[r] > t;) i = i._prev;
          return i ? (a._next = i._next, i._next = a) : (a._next = e[s], e[s] = a), a._next ? a._next._prev = a : e[n] = a, a._prev = i, a.parent = a._dp = e, a
        },
        Na = function(e, a) {
          let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            n = a._prev,
            r = a._next;
          n ? n._next = r : e[t] === a && (e[t] = r), r ? r._prev = n : e[s] === a && (e[s] = n), a._next = a._prev = a.parent = null
        },
        ja = (e, a) => {
          e.parent && (!a || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        za = (e, a) => {
          if (e && (!a || a._end > e._dur || a._start < 0)) {
            let a = e;
            for (; a;) a._dirty = 1, a = a.parent
          }
          return e
        },
        Aa = (e, a, t, s) => e._startAt && (ce ? e._startAt.revert(ea) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(a, !0, s)),
        Ea = e => !e || e._ts && Ea(e.parent),
        Ia = e => e._repeat ? Pa(e._tTime, e = e.duration() + e._rDelay) * e : 0,
        Pa = (e, a) => {
          let t = Math.floor(e /= a);
          return e && t === e ? t - 1 : t
        },
        La = (e, a) => (e - a._start) * a._ts + (a._ts >= 0 ? 0 : a._dirty ? a.totalDuration() : a._tDur),
        Oa = e => e._end = va(e._start + (e._tDur / Math.abs(e._ts || e._rts || we) || 0)),
        Da = (e, a) => {
          let t = e._dp;
          return t && t.smoothChildTiming && e._ts && (e._start = va(t._time - (e._ts > 0 ? a / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - a) / -e._ts)), Oa(e), t._dirty || za(t, e)), e
        },
        Ra = (e, a) => {
          let t;
          if ((a._time || !a._dur && a._initted || a._start < e._time && (a._dur || !a.add)) && (t = La(e.rawTime(), a), (!a._dur || Za(0, a.totalDuration(), t) - a._tTime > we) && a.render(t, !0)), za(e, a)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (t = e; t._dp;) t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
            e._zTime = -1e-8
          }
        },
        Va = (e, a, t, s) => (a.parent && ja(a), a._start = va((Ae(t) ? t : t || e !== de ? Xa(e, t, a) : e._time) + a._delay), a._end = va(a._start + (a.totalDuration() / Math.abs(a.timeScale()) || 0)), Ca(e, a, "_first", "_last", e._sort ? "_start" : 0), qa(a) || (e._recent = a), s || Ra(e, a), e._ts < 0 && Da(e, e._tTime), e),
        Ba = (e, a) => (He.ScrollTrigger || Ye("scrollTrigger", a)) && He.ScrollTrigger.create(a, e),
        Ga = (e, a, t, s, n) => (Wt(e, a, n), e._initted ? !t && e._pt && !ce && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && pe !== Ct.frame ? (sa.push(e), e._lazy = [n, s], 1) : void 0 : 1),
        Fa = e => {
          let {
            parent: a
          } = e;
          return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || Fa(a))
        },
        qa = e => {
          let {
            data: a
          } = e;
          return "isFromStart" === a || "isStart" === a
        },
        $a = (e, a, t, s) => {
          let n = e._repeat,
            r = va(a) || 0,
            i = e._tTime / e._tDur;
          return i && !s && (e._time *= r / e._dur), e._dur = r, e._tDur = n ? n < 0 ? 1e10 : va(r * (n + 1) + e._rDelay * n) : r, i > 0 && !s && Da(e, e._tTime = e._tDur * i), e.parent && Oa(e), t || za(e.parent, e), e
        },
        Ua = e => e instanceof Ft ? za(e) : $a(e, e._dur),
        Ha = {
          _start: 0,
          endTime: Ke,
          totalDuration: Ke
        },
        Xa = (e, a, t) => {
          let s, n, r, i = e.labels,
            o = e._recent || Ha,
            l = e.duration() >= ye ? o.endTime(!1) : e._dur;
          return je(a) && (isNaN(a) || a in i) ? (n = a.charAt(0), r = "%" === a.substr(-1), s = a.indexOf("="), "<" === n || ">" === n ? (s >= 0 && (a = a.replace(/=/, "")), ("<" === n ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(a.substr(1)) || 0) * (r ? (s < 0 ? o : t).totalDuration() / 100 : 1)) : s < 0 ? (a in i || (i[a] = l), i[a]) : (n = parseFloat(a.charAt(s - 1) + a.substr(s + 1)), r && t && (n = n / 100 * (Re(t) ? t[0] : t).totalDuration()), s > 1 ? Xa(e, a.substr(0, s - 1), t) + n : l + n)) : null == a ? l : +a
        },
        Wa = (e, a, t) => {
          let s, n, r = Ae(a[1]),
            i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            o = a[i];
          if (r && (o.duration = a[1]), o.parent = t, e) {
            for (s = o, n = t; n && !("immediateRender" in s);) s = n.vars.defaults || {}, n = Pe(n.vars.inherit) && n.parent;
            o.immediateRender = Pe(s.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = a[i - 1]
          }
          return new Qt(a[0], o, a[i + 1])
        },
        Ya = (e, a) => e || 0 === e ? a(e) : a,
        Za = (e, a, t) => t < e ? e : t > a ? a : t,
        Ja = (e, a) => je(e) && (a = Ue.exec(e)) ? a[1] : "",
        Ka = [].slice,
        Qa = (e, a) => e && Ie(e) && "length" in e && (!a && !e.length || e.length - 1 in e && Ie(e[0])) && !e.nodeType && e !== ge,
        et = (e, a, t) => _e && !a && _e.selector ? _e.selector(e) : !je(e) || t || !me && Nt() ? Re(e) ? function(e, a) {
          let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return e.forEach((e => je(e) && !a || Qa(e, 1) ? t.push(...et(e)) : t.push(e))) || t
        }(e, t) : Qa(e) ? Ka.call(e, 0) : e ? [e] : [] : Ka.call((a || ue).querySelectorAll(e), 0),
        at = e => (e = et(e)[0] || Ze("Invalid scope") || {}, a => {
          let t = e.current || e.nativeElement || e;
          return et(a, t.querySelectorAll ? t : t === e ? Ze("Invalid scope") || ue.createElement("div") : e)
        }),
        tt = e => e.sort((() => .5 - Math.random())),
        st = e => {
          if (ze(e)) return e;
          let a = Ie(e) ? e : {
              each: e
            },
            t = Lt(a.ease),
            s = a.from || 0,
            n = parseFloat(a.base) || 0,
            r = {},
            i = s > 0 && s < 1,
            o = isNaN(s) || i,
            l = a.axis,
            c = s,
            _ = s;
          return je(s) ? c = _ = {
            center: .5,
            edges: .5,
            end: 1
          } [s] || 0 : !i && o && (c = s[0], _ = s[1]), (e, i, d) => {
            let g, m, u, v, p, h, f, b, k, y = (d || a).length,
              w = r[y];
            if (!w) {
              if (k = "auto" === a.grid ? 0 : (a.grid || [1, ye])[1], !k) {
                for (f = -ye; f < (f = d[k++].getBoundingClientRect().left) && k < y;);
                k--
              }
              for (w = r[y] = [], g = o ? Math.min(k, y) * c - .5 : s % k, m = k === ye ? 0 : o ? y * _ / k - .5 : s / k | 0, f = 0, b = ye, h = 0; h < y; h++) u = h % k - g, v = m - (h / k | 0), w[h] = p = l ? Math.abs("y" === l ? v : u) : Te(u * u + v * v), p > f && (f = p), p < b && (b = p);
              "random" === s && tt(w), w.max = f - b, w.min = b, w.v = y = (parseFloat(a.amount) || parseFloat(a.each) * (k > y ? y - 1 : l ? "y" === l ? y / k : k : Math.max(k, y / k)) || 0) * ("edges" === s ? -1 : 1), w.b = y < 0 ? n - y : n, w.u = Ja(a.amount || a.each) || 0, t = t && y < 0 ? It(t) : t
            }
            return y = (w[e] - w.min) / w.max || 0, va(w.b + (t ? t(y) : y) * w.v) + w.u
          }
        },
        nt = e => {
          let a = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return t => {
            let s = va(Math.round(parseFloat(t) / e) * e * a);
            return (s - s % 1) / a + (Ae(t) ? 0 : Ja(t))
          }
        },
        rt = (e, a) => {
          let t, s, n = Re(e);
          return !n && Ie(e) && (t = n = e.radius || ye, e.values ? (e = et(e.values), (s = !Ae(e[0])) && (t *= t)) : e = nt(e.increment)), Ya(a, n ? ze(e) ? a => (s = e(a), Math.abs(s - a) <= t ? s : a) : a => {
            let n, r, i = parseFloat(s ? a.x : a),
              o = parseFloat(s ? a.y : 0),
              l = ye,
              c = 0,
              _ = e.length;
            for (; _--;) s ? (n = e[_].x - i, r = e[_].y - o, n = n * n + r * r) : n = Math.abs(e[_] - i), n < l && (l = n, c = _);
            return c = !t || l <= t ? e[c] : a, s || c === a || Ae(a) ? c : c + Ja(a)
          } : nt(e))
        },
        it = (e, a, t, s) => Ya(Re(e) ? !a : !0 === t ? !!(t = 0) : !s, (() => Re(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (s = t < 1 ? 10 ** ((t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (a - e + .99 * t)) / t) * t * s) / s)),
        ot = (e, a, t) => Ya(t, (t => e[~~a(t)])),
        lt = function(e, a, t) {
          let s = a - e;
          return Re(e) ? ot(e, lt(0, e.length), a) : Ya(t, (a => (s + (a - e) % s) % s + e))
        },
        ct = (e, a, t) => {
          let s = a - e,
            n = 2 * s;
          return Re(e) ? ot(e, ct(0, e.length - 1), a) : Ya(t, (a => e + ((a = (n + (a - e) % n) % n || 0) > s ? n - a : a)))
        },
        _t = e => {
          let a, t, s, n, r = 0,
            i = "";
          for (; ~(a = e.indexOf("random(", r));) s = e.indexOf(")", a), n = "[" === e.charAt(a + 7), t = e.substr(a + 7, s - a - 7).match(n ? $e : Ve), i += e.substr(r, a - r) + it(n ? t : +t[0], n ? 0 : +t[1], +t[2] || 1e-5), r = s + 1;
          return i + e.substr(r, e.length - r)
        },
        dt = (e, a, t, s, n) => {
          let r = a - e,
            i = s - t;
          return Ya(n, (a => t + ((a - e) / r * i || 0)))
        },
        gt = (e, a, t, s) => {
          let n = isNaN(e + a) ? 0 : t => (1 - t) * e + t * a;
          if (!n) {
            let r, i, o, l, c, _ = je(e),
              d = {};
            if (!0 === t && (s = 1) && (t = null), _) e = {
              p: e
            }, a = {
              p: a
            };
            else if (Re(e) && !Re(a)) {
              for (o = [], l = e.length, c = l - 2, i = 1; i < l; i++) o.push(gt(e[i - 1], e[i]));
              l--, n = e => {
                e *= l;
                let a = Math.min(c, ~~e);
                return o[a](e - a)
              }, t = a
            } else s || (e = xa(Re(e) ? [] : {}, e));
            if (!o) {
              for (r in a) Ht.call(d, e, r, "get", a[r]);
              n = a => ls(a, d) || (_ ? e.p : e)
            }
          }
          return Ya(t, n)
        },
        mt = (e, a, t) => {
          let s, n, r, i = e.labels,
            o = ye;
          for (s in i) n = i[s] - a, n < 0 == !!t && n && o > (n = Math.abs(n)) && (r = s, o = n);
          return r
        },
        ut = (e, a, t) => {
          let s, n, r, i = e.vars,
            o = i[a],
            l = _e,
            c = e._ctx;
          if (o) return s = i[a + "Params"], n = i.callbackScope || e, t && sa.length && fa(), c && (_e = c), r = s ? o.apply(n, s) : o.call(n), _e = l, r
        },
        vt = e => (ja(e), e.scrollTrigger && e.scrollTrigger.kill(!!ce), e.progress() < 1 && ut(e, "onInterrupt"), e),
        pt = [],
        ht = e => {
          if (Le() && e) {
            let a = (e = !e.name && e.default || e).name,
              t = ze(e),
              s = a && !t && e.init ? function() {
                this._props = []
              } : e,
              n = {
                init: Ke,
                render: ls,
                add: Ht,
                kill: _s,
                modifier: cs,
                rawVars: 0
              },
              r = {
                targetTest: 0,
                get: 0,
                getSetter: ns,
                aliases: {},
                register: 0
              };
            if (Nt(), e !== s) {
              if (ra[a]) return;
              wa(s, wa(Sa(e, n), r)), xa(s.prototype, xa(n, Sa(e, r))), ra[s.prop = a] = s, e.targetTest && (la.push(s), ta[a] = 1), a = ("css" === a ? "CSS" : a.charAt(0).toUpperCase() + a.substr(1)) + "Plugin"
            }
            Je(a, s), e.register && e.register(Ts, s, ms)
          } else e && pt.push(e)
        },
        ft = 255,
        bt = {
          aqua: [0, ft, ft],
          lime: [0, ft, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ft],
          navy: [0, 0, 128],
          white: [ft, ft, ft],
          olive: [128, 128, 0],
          yellow: [ft, ft, 0],
          orange: [ft, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ft, 0, 0],
          pink: [ft, 192, 203],
          cyan: [0, ft, ft],
          transparent: [ft, ft, ft, 0]
        },
        kt = (e, a, t) => (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? a + (t - a) * e * 6 : e < .5 ? t : 3 * e < 2 ? a + (t - a) * (2 / 3 - e) * 6 : a) * ft + .5 | 0,
        yt = (e, a, t) => {
          let s, n, r, i, o, l, c, _, d, g, m = e ? Ae(e) ? [e >> 16, e >> 8 & ft, e & ft] : 0 : bt.black;
          if (!m) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), bt[e]) m = bt[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), n = e.charAt(2), r = e.charAt(3), e = "#" + s + s + n + n + r + r + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return m = parseInt(e.substr(1, 6), 16), [m >> 16, m >> 8 & ft, m & ft, parseInt(e.substr(7), 16) / 255];
              m = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ft, e & ft]
            } else if ("hsl" === e.substr(0, 3))
              if (m = g = e.match(Ve), a) {
                if (~e.indexOf("=")) return m = e.match(Be), t && m.length < 4 && (m[3] = 1), m
              } else i = +m[0] % 360 / 360, o = +m[1] / 100, l = +m[2] / 100, n = l <= .5 ? l * (o + 1) : l + o - l * o, s = 2 * l - n, m.length > 3 && (m[3] *= 1), m[0] = kt(i + 1 / 3, s, n), m[1] = kt(i, s, n), m[2] = kt(i - 1 / 3, s, n);
            else m = e.match(Ve) || bt.transparent;
            m = m.map(Number)
          }
          return a && !g && (s = m[0] / ft, n = m[1] / ft, r = m[2] / ft, c = Math.max(s, n, r), _ = Math.min(s, n, r), l = (c + _) / 2, c === _ ? i = o = 0 : (d = c - _, o = l > .5 ? d / (2 - c - _) : d / (c + _), i = c === s ? (n - r) / d + (n < r ? 6 : 0) : c === n ? (r - s) / d + 2 : (s - n) / d + 4, i *= 60), m[0] = ~~(i + .5), m[1] = ~~(100 * o + .5), m[2] = ~~(100 * l + .5)), t && m.length < 4 && (m[3] = 1), m
        },
        wt = e => {
          let a = [],
            t = [],
            s = -1;
          return e.split(Mt).forEach((e => {
            let n = e.match(Ge) || [];
            a.push(...n), t.push(s += n.length + 1)
          })), a.c = t, a
        },
        xt = (e, a, t) => {
          let s, n, r, i, o = "",
            l = (e + o).match(Mt),
            c = a ? "hsla(" : "rgba(",
            _ = 0;
          if (!l) return e;
          if (l = l.map((e => (e = yt(e, a, 1)) && c + (a ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), t && (r = wt(e), s = t.c, s.join(o) !== r.c.join(o)))
            for (n = e.replace(Mt, "1").split(Ge), i = n.length - 1; _ < i; _++) o += n[_] + (~s.indexOf(_) ? l.shift() || c + "0,0,0,0)" : (r.length ? r : l.length ? l : t).shift());
          if (!n)
            for (n = e.split(Mt), i = n.length - 1; _ < i; _++) o += n[_] + l[_];
          return o + n[i]
        },
        Mt = function() {
          let e, a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in bt) a += "|" + e + "\\b";
          return new RegExp(a + ")", "gi")
        }(),
        St = /hsl[a]?\(/,
        Tt = e => {
          let a, t = e.join(" ");
          if (Mt.lastIndex = 0, Mt.test(t)) return a = St.test(t), e[1] = xt(e[1], a), e[0] = xt(e[0], a, wt(e[1])), !0
        },
        Ct = function() {
          let e, a, t, s, n, r, i = Date.now,
            o = 500,
            l = 33,
            c = i(),
            _ = c,
            d = 1e3 / 240,
            g = d,
            m = [],
            u = t => {
              let v, p, h, f, b = i() - _,
                k = !0 === t;
              if (b > o && (c += b - l), _ += b, h = _ - c, v = h - g, (v > 0 || k) && (f = ++s.frame, n = h - 1e3 * s.time, s.time = h /= 1e3, g += v + (v >= d ? 4 : d - v), p = 1), k || (e = a(u)), p)
                for (r = 0; r < m.length; r++) m[r](h, n, f, t)
            };
          return s = {
            time: 0,
            frame: 0,
            tick() {
              u(!0)
            },
            deltaRatio: e => n / (1e3 / (e || 60)),
            wake() {
              ve && (!me && Le() && (ge = me = window, ue = ge.document || {}, He.gsap = Ts, (ge.gsapVersions || (ge.gsapVersions = [])).push(Ts.version), We(Xe || ge.GreenSockGlobals || !ge.gsap && ge || {}), t = ge.requestAnimationFrame, pt.forEach(ht)), e && s.sleep(), a = t || (e => setTimeout(e, g - 1e3 * s.time + 1 | 0)), fe = 1, u(2))
            },
            sleep() {
              (t ? ge.cancelAnimationFrame : clearTimeout)(e), fe = 0, a = Ke
            },
            lagSmoothing(e, a) {
              o = e || 1 / 0, l = Math.min(a || 33, o)
            },
            fps(e) {
              d = 1e3 / (e || 240), g = 1e3 * s.time + d
            },
            add(e, a, t) {
              let n = a ? (a, t, r, i) => {
                e(a, t, r, i), s.remove(n)
              } : e;
              return s.remove(e), m[t ? "unshift" : "push"](n), Nt(), n
            },
            remove(e, a) {
              ~(a = m.indexOf(e)) && m.splice(a, 1) && r >= a && r--
            },
            _listeners: m
          }, s
        }(),
        Nt = () => !fe && Ct.wake(),
        jt = {},
        zt = /^[\d.\-M][\d.\-,\s]/,
        At = /["']/g,
        Et = e => {
          let a, t, s, n = {},
            r = e.substr(1, e.length - 3).split(":"),
            i = r[0],
            o = 1,
            l = r.length;
          for (; o < l; o++) t = r[o], a = o !== l - 1 ? t.lastIndexOf(",") : t.length, s = t.substr(0, a), n[i] = isNaN(s) ? s.replace(At, "").trim() : +s, i = t.substr(a + 1).trim();
          return n
        },
        It = e => a => 1 - e(1 - a),
        Pt = (e, a) => {
          let t, s = e._first;
          for (; s;) s instanceof Ft ? Pt(s, a) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === a || (s.timeline ? Pt(s.timeline, a) : (t = s._ease, s._ease = s._yEase, s._yEase = t, s._yoyo = a)), s = s._next
        },
        Lt = (e, a) => e && (ze(e) ? e : jt[e] || (e => {
          let a = (e + "").split("("),
            t = jt[a[0]];
          return t && a.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [Et(a[1])] : (e => {
            let a = e.indexOf("(") + 1,
              t = e.indexOf(")"),
              s = e.indexOf("(", a);
            return e.substring(a, ~s && s < t ? e.indexOf(")", t + 1) : t)
          })(e).split(",").map(ka)) : jt._CE && zt.test(e) ? jt._CE("", e) : t
        })(e)) || a,
        Ot = function(e, a) {
          let t, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => 1 - a(1 - e),
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e < .5 ? a(2 * e) / 2 : 1 - a(2 * (1 - e)) / 2,
            r = {
              easeIn: a,
              easeOut: s,
              easeInOut: n
            };
          return ma(e, (e => {
            jt[e] = He[e] = r, jt[t = e.toLowerCase()] = s;
            for (let a in r) jt[t + ("easeIn" === a ? ".in" : "easeOut" === a ? ".out" : ".inOut")] = jt[e + "." + a] = r[a]
          })), r
        },
        Dt = e => a => a < .5 ? (1 - e(1 - 2 * a)) / 2 : .5 + e(2 * (a - .5)) / 2,
        Rt = (e, a, t) => {
          let s = a >= 1 ? a : 1,
            n = (t || (e ? .3 : .45)) / (a < 1 ? a : 1),
            r = n / xe * (Math.asin(1 / s) || 0),
            i = e => 1 === e ? 1 : s * 2 ** (-10 * e) * Ne((e - r) * n) + 1,
            o = "out" === e ? i : "in" === e ? e => 1 - i(1 - e) : Dt(i);
          return n = xe / n, o.config = (a, t) => Rt(e, a, t), o
        },
        Vt = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            t = e => e ? --e * e * ((a + 1) * e + a) + 1 : 0,
            s = "out" === e ? t : "in" === e ? e => 1 - t(1 - e) : Dt(t);
          return s.config = a => Vt(e, a), s
        };
      ma("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, a) => {
        let t = a < 5 ? a + 1 : a;
        Ot(e + ",Power" + (t - 1), a ? e => e ** t : e => e, (e => 1 - (1 - e) ** t), (e => e < .5 ? (2 * e) ** t / 2 : 1 - (2 * (1 - e)) ** t / 2))
      })), jt.Linear.easeNone = jt.none = jt.Linear.easeIn, Ot("Elastic", Rt("in"), Rt("out"), Rt()), ((e, a) => {
        let t = t => t < .36363636363636365 ? e * t * t : t < .7272727272727273 ? e * (t - 1.5 / a) ** 2 + .75 : t < .9090909090909092 ? e * (t -= 2.25 / a) * t + .9375 : e * (t - 2.625 / a) ** 2 + .984375;
        Ot("Bounce", (e => 1 - t(1 - e)), t)
      })(7.5625, 2.75), Ot("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Ot("Circ", (e => -(Te(1 - e * e) - 1))), Ot("Sine", (e => 1 === e ? 1 : 1 - Ce(e * Me))), Ot("Back", Vt("in"), Vt("out"), Vt()), jt.SteppedEase = jt.steps = He.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            a = arguments.length > 1 ? arguments[1] : void 0,
            t = 1 / e,
            s = e + (a ? 0 : 1),
            n = a ? 1 : 0;
          return e => ((s * Za(0, .99999999, e) | 0) + n) * t
        }
      }, ke.ease = jt["quad.out"], ma("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => ca += e + "," + e + "Params,"));
      class Bt {
        constructor(e, a) {
          this.id = Se++, e._gsap = this, this.target = e, this.harness = a, this.get = a ? a.get : ga, this.set = a ? a.getSetter : ns
        }
      }
      class Gt {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, $a(this, +e.duration, 1, 1), this.data = e.data, _e && (this._ctx = _e, _e.data.push(this)), fe || Ct.wake()
        }
        delay(e) {
          return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
        }
        duration(e) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }
        totalDuration(e) {
          return arguments.length ? (this._dirty = 0, $a(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        totalTime(e, a) {
          if (Nt(), !arguments.length) return this._tTime;
          let t = this._dp;
          if (t && t.smoothChildTiming && this._ts) {
            for (Da(this, e), !t._dp || t.parent || Ra(t, this); t && t.parent;) t.parent._time !== t._start + (t._ts >= 0 ? t._tTime / t._ts : (t.totalDuration() - t._tTime) / -t._ts) && t.totalTime(t._tTime, !0), t = t.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Va(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== e || !this._dur && !a || this._initted && Math.abs(this._zTime) === we || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), ba(this, e, a)), this
        }
        time(e, a) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ia(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), a) : this._time
        }
        totalProgress(e, a) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, a) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        progress(e, a) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ia(this), a) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        iteration(e, a) {
          let t = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (e - 1) * t, a) : this._repeat ? Pa(this._tTime, t) + 1 : 1
        }
        timeScale(e) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === e) return this;
          let a = this.parent && this._ts ? La(this.parent._time, this) : this._tTime;
          return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Za(-Math.abs(this._delay), this._tDur, a), !0), Oa(this), (e => {
            let a = e.parent;
            for (; a && a.parent;) a._dirty = 1, a.totalDuration(), a = a.parent;
            return e
          })(this)
        }
        paused(e) {
          return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Nt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== we && (this._tTime -= we)))), this) : this._ps
        }
        startTime(e) {
          if (arguments.length) {
            this._start = e;
            let a = this.parent || this._dp;
            return a && (a._sort || !this.parent) && Va(a, this, e - this._delay), this
          }
          return this._start
        }
        endTime(e) {
          return this._start + (Pe(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        rawTime(e) {
          let a = this.parent || this._dp;
          return a ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? La(a.rawTime(e), this) : this._tTime : this._tTime
        }
        revert() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aa,
            a = ce;
          return ce = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), ce = a, this
        }
        globalTime(e) {
          let a = this,
            t = arguments.length ? e : a.rawTime();
          for (; a;) t = a._start + t / (a._ts || 1), a = a._dp;
          return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(e) : t
        }
        repeat(e) {
          return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Ua(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        repeatDelay(e) {
          if (arguments.length) {
            let a = this._time;
            return this._rDelay = e, Ua(this), a ? this.time(a) : this
          }
          return this._rDelay
        }
        yoyo(e) {
          return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }
        seek(e, a) {
          return this.totalTime(Xa(this, e), Pe(a))
        }
        restart(e, a) {
          return this.play().totalTime(e ? -this._delay : 0, Pe(a))
        }
        play(e, a) {
          return null != e && this.seek(e, a), this.reversed(!1).paused(!1)
        }
        reverse(e, a) {
          return null != e && this.seek(e || this.totalDuration(), a), this.reversed(!0).paused(!1)
        }
        pause(e, a) {
          return null != e && this.seek(e, a), this.paused(!0)
        }
        resume() {
          return this.paused(!1)
        }
        reversed(e) {
          return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
        }
        invalidate() {
          return this._initted = this._act = 0, this._zTime = -1e-8, this
        }
        isActive() {
          let e, a = this.parent || this._dp,
            t = this._start;
          return !(a && !(this._ts && this._initted && a.isActive() && (e = a.rawTime(!0)) >= t && e < this.endTime(!0) - we))
        }
        eventCallback(e, a, t) {
          let s = this.vars;
          return arguments.length > 1 ? (a ? (s[e] = a, t && (s[e + "Params"] = t), "onUpdate" === e && (this._onUpdate = a)) : delete s[e], this) : s[e]
        }
        then(e) {
          let a = this;
          return new Promise((t => {
            let s = ze(e) ? e : ya,
              n = () => {
                let e = a.then;
                a.then = null, ze(s) && (s = s(a)) && (s.then || s === a) && (a.then = e), t(s), a.then = e
              };
            a._initted && 1 === a.totalProgress() && a._ts >= 0 || !a._tTime && a._ts < 0 ? n() : a._prom = n
          }))
        }
        kill() {
          vt(this)
        }
      }
      wa(Gt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      });
      class Ft extends Gt {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments.length > 1 ? arguments[1] : void 0;
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = Pe(e.sortChildren), de && Va(e.parent || de, this, a), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && Ba(this, e.scrollTrigger)
        }
        to(e, a, t) {
          return Wa(0, arguments, this), this
        }
        from(e, a, t) {
          return Wa(1, arguments, this), this
        }
        fromTo(e, a, t, s) {
          return Wa(2, arguments, this), this
        }
        set(e, a, t) {
          return a.duration = 0, a.parent = this, Ta(a).repeatDelay || (a.repeat = 0), a.immediateRender = !!a.immediateRender, new Qt(e, a, Xa(this, t), 1), this
        }
        call(e, a, t) {
          return Va(this, Qt.delayedCall(0, e, a), t)
        }
        staggerTo(e, a, t, s, n, r, i) {
          return t.duration = a, t.stagger = t.stagger || s, t.onComplete = r, t.onCompleteParams = i, t.parent = this, new Qt(e, t, Xa(this, n)), this
        }
        staggerFrom(e, a, t, s, n, r, i) {
          return t.runBackwards = 1, Ta(t).immediateRender = Pe(t.immediateRender), this.staggerTo(e, a, t, s, n, r, i)
        }
        staggerFromTo(e, a, t, s, n, r, i, o) {
          return s.startAt = t, Ta(s).immediateRender = Pe(s.immediateRender), this.staggerTo(e, a, s, n, r, i, o)
        }
        render(e, a, t) {
          let s, n, r, i, o, l, c, _, d, g, m, u, v = this._time,
            p = this._dirty ? this.totalDuration() : this._tDur,
            h = this._dur,
            f = e <= 0 ? 0 : va(e),
            b = this._zTime < 0 != e < 0 && (this._initted || !h);
          if (this !== de && f > p && e >= 0 && (f = p), f !== this._tTime || t || b) {
            if (v !== this._time && h && (f += this._time - v, e += this._time - v), s = f, d = this._start, _ = this._ts, l = !_, b && (h || (v = this._zTime), (e || !a) && (this._zTime = e)), this._repeat) {
              if (m = this._yoyo, o = h + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * o + e, a, t);
              if (s = va(f % o), f === p ? (i = this._repeat, s = h) : (i = ~~(f / o), i && i === f / o && (s = h, i--), s > h && (s = h)), g = Pa(this._tTime, o), !v && this._tTime && g !== i && this._tTime - g * o - this._dur <= 0 && (g = i), m && 1 & i && (s = h - s, u = 1), i !== g && !this._lock) {
                let e = m && 1 & g,
                  t = e === (m && 1 & i);
                if (i < g && (e = !e), v = e ? 0 : f % h ? h : f, this._lock = 1, this.render(v || (u ? 0 : va(i * o)), a, !h)._lock = 0, this._tTime = f, !a && this.parent && ut(this, "onRepeat"), this.vars.repeatRefresh && !u && (this.invalidate()._lock = 1), v && v !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (h = this._dur, p = this._tDur, t && (this._lock = 2, v = e ? h : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !u && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                Pt(this, u)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (c = ((e, a, t) => {
                let s;
                if (t > a)
                  for (s = e._first; s && s._start <= t;) {
                    if ("isPause" === s.data && s._start > a) return s;
                    s = s._next
                  } else
                    for (s = e._last; s && s._start >= t;) {
                      if ("isPause" === s.data && s._start < a) return s;
                      s = s._prev
                    }
              })(this, va(v), va(s)), c && (f -= s - (s = c._start))), this._tTime = f, this._time = s, this._act = !_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, v = 0), !v && s && !a && !i && (ut(this, "onStart"), this._tTime !== f)) return this;
            if (s >= v && e >= 0)
              for (n = this._first; n;) {
                if (r = n._next, (n._act || s >= n._start) && n._ts && c !== n) {
                  if (n.parent !== this) return this.render(e, a, t);
                  if (n.render(n._ts > 0 ? (s - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (s - n._start) * n._ts, a, t), s !== this._time || !this._ts && !l) {
                    c = 0, r && (f += this._zTime = -1e-8);
                    break
                  }
                }
                n = r
              } else {
                n = this._last;
                let i = e < 0 ? e : s;
                for (; n;) {
                  if (r = n._prev, (n._act || i <= n._end) && n._ts && c !== n) {
                    if (n.parent !== this) return this.render(e, a, t);
                    if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, a, t || ce && (n._initted || n._startAt)), s !== this._time || !this._ts && !l) {
                      c = 0, r && (f += this._zTime = i ? -1e-8 : we);
                      break
                    }
                  }
                  n = r
                }
              }
            if (c && !a && (this.pause(), c.render(s >= v ? 0 : -1e-8)._zTime = s >= v ? 1 : -1, this._ts)) return this._start = d, Oa(this), this.render(e, a, t);
            this._onUpdate && !a && ut(this, "onUpdate", !0), (f === p && this._tTime >= this.totalDuration() || !f && v) && (d !== this._start && Math.abs(_) === Math.abs(this._ts) || this._lock || ((e || !h) && (f === p && this._ts > 0 || !f && this._ts < 0) && ja(this, 1), a || e < 0 && !v || !f && !v && p || (ut(this, f === p && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < p && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(e, a) {
          if (Ae(a) || (a = Xa(this, a, e)), !(e instanceof Gt)) {
            if (Re(e)) return e.forEach((e => this.add(e, a))), this;
            if (je(e)) return this.addLabel(e, a);
            if (!ze(e)) return this;
            e = Qt.delayedCall(0, e)
          }
          return this !== e ? Va(this, e, a) : this
        }
        getChildren() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -ye,
            n = [],
            r = this._first;
          for (; r;) r._start >= s && (r instanceof Qt ? a && n.push(r) : (t && n.push(r), e && n.push(...r.getChildren(!0, a, t)))), r = r._next;
          return n
        }
        getById(e) {
          let a = this.getChildren(1, 1, 1),
            t = a.length;
          for (; t--;)
            if (a[t].vars.id === e) return a[t]
        }
        remove(e) {
          return je(e) ? this.removeLabel(e) : ze(e) ? this.killTweensOf(e) : (Na(this, e), e === this._recent && (this._recent = this._last), za(this))
        }
        totalTime(e, a) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = va(Ct.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), super.totalTime(e, a), this._forcing = 0, this) : this._tTime
        }
        addLabel(e, a) {
          return this.labels[e] = Xa(this, a), this
        }
        removeLabel(e) {
          return delete this.labels[e], this
        }
        addPause(e, a, t) {
          let s = Qt.delayedCall(0, a || Ke, t);
          return s.data = "isPause", this._hasPause = 1, Va(this, s, Xa(this, e))
        }
        removePause(e) {
          let a = this._first;
          for (e = Xa(this, e); a;) a._start === e && "isPause" === a.data && ja(a), a = a._next
        }
        killTweensOf(e, a, t) {
          let s = this.getTweensOf(e, t),
            n = s.length;
          for (; n--;) qt !== s[n] && s[n].kill(e, a);
          return this
        }
        getTweensOf(e, a) {
          let t, s = [],
            n = et(e),
            r = this._first,
            i = Ae(a);
          for (; r;) r instanceof Qt ? ha(r._targets, n) && (i ? (!qt || r._initted && r._ts) && r.globalTime(0) <= a && r.globalTime(r.totalDuration()) > a : !a || r.isActive()) && s.push(r) : (t = r.getTweensOf(n, a)).length && s.push(...t), r = r._next;
          return s
        }
        tweenTo(e, a) {
          a = a || {};
          let t, s = this,
            n = Xa(s, e),
            {
              startAt: r,
              onStart: i,
              onStartParams: o,
              immediateRender: l
            } = a,
            c = Qt.to(s, wa({
              ease: a.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: n,
              overwrite: "auto",
              duration: a.duration || Math.abs((n - (r && "time" in r ? r.time : s._time)) / s.timeScale()) || we,
              onStart: () => {
                if (s.pause(), !t) {
                  let e = a.duration || Math.abs((n - (r && "time" in r ? r.time : s._time)) / s.timeScale());
                  c._dur !== e && $a(c, e, 0, 1).render(c._time, !0, !0), t = 1
                }
                i && i.apply(c, o || [])
              }
            }, a));
          return l ? c.render(0) : c
        }
        tweenFromTo(e, a, t) {
          return this.tweenTo(a, wa({
            startAt: {
              time: Xa(this, e)
            }
          }, t))
        }
        recent() {
          return this._recent
        }
        nextLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return mt(this, Xa(this, e))
        }
        previousLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return mt(this, Xa(this, e), 1)
        }
        currentLabel(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + we)
        }
        shiftChildren(e, a) {
          let t, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = this._first,
            r = this.labels;
          for (; n;) n._start >= s && (n._start += e, n._end += e), n = n._next;
          if (a)
            for (t in r) r[t] >= s && (r[t] += e);
          return za(this)
        }
        invalidate(e) {
          let a = this._first;
          for (this._lock = 0; a;) a.invalidate(e), a = a._next;
          return super.invalidate(e)
        }
        clear() {
          let e, a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = this._first;
          for (; t;) e = t._next, this.remove(t), t = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), a && (this.labels = {}), za(this)
        }
        totalDuration(e) {
          let a, t, s, n = 0,
            r = this,
            i = r._last,
            o = ye;
          if (arguments.length) return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -e : e));
          if (r._dirty) {
            for (s = r.parent; i;) a = i._prev, i._dirty && i.totalDuration(), t = i._start, t > o && r._sort && i._ts && !r._lock ? (r._lock = 1, Va(r, i, t - i._delay, 1)._lock = 0) : o = t, t < 0 && i._ts && (n -= t, (!s && !r._dp || s && s.smoothChildTiming) && (r._start += t / r._ts, r._time -= t, r._tTime -= t), r.shiftChildren(-t, !1, -Infinity), o = 0), i._end > n && i._ts && (n = i._end), i = a;
            $a(r, r === de && r._time > n ? r._time : n, 1, 1), r._dirty = 0
          }
          return r._tDur
        }
        static updateRoot(e) {
          if (de._ts && (ba(de, La(e, de)), pe = Ct.frame), Ct.frame >= oa) {
            oa += be.autoSleep || 120;
            let e = de._first;
            if ((!e || !e._ts) && be.autoSleep && Ct._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || Ct.sleep()
            }
          }
        }
      }
      wa(Ft.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let qt, $t, Ut = function(e, a, t, s, n, r, i) {
          let o, l, c, _, d, g, m, u, v = new ms(this._pt, e, a, 0, 1, os, null, n),
            p = 0,
            h = 0;
          for (v.b = t, v.e = s, t += "", (m = ~(s += "").indexOf("random(")) && (s = _t(s)), r && (u = [t, s], r(u, e, a), t = u[0], s = u[1]), l = t.match(Fe) || []; o = Fe.exec(s);) _ = o[0], d = s.substring(p, o.index), c ? c = (c + 1) % 5 : "rgba(" === d.substr(-5) && (c = 1), _ !== l[h++] && (g = parseFloat(l[h - 1]) || 0, v._pt = {
            _next: v._pt,
            p: d || 1 === h ? d : ",",
            s: g,
            c: "=" === _.charAt(1) ? pa(g, _) - g : parseFloat(_) - g,
            m: c && c < 4 ? Math.round : 0
          }, p = Fe.lastIndex);
          return v.c = p < s.length ? s.substring(p, s.length) : "", v.fp = i, (qe.test(s) || m) && (v.e = 0), this._pt = v, v
        },
        Ht = function(e, a, t, s, n, r, i, o, l, c) {
          ze(s) && (s = s(n || 0, e, r));
          let _, d = e[a],
            g = "get" !== t ? t : ze(d) ? l ? e[a.indexOf("set") || !ze(e["get" + a.substr(3)]) ? a : "get" + a.substr(3)](l) : e[a]() : d,
            m = ze(d) ? l ? ts : as : es;
          if (je(s) && (~s.indexOf("random(") && (s = _t(s)), "=" === s.charAt(1) && (_ = pa(g, s) + (Ja(g) || 0), (_ || 0 === _) && (s = _))), !c || g !== s || $t) return isNaN(g * s) || "" === s ? (!d && !(a in e) && Ye(a, s), Ut.call(this, e, a, g, s, m, o || be.stringFilter, l)) : (_ = new ms(this._pt, e, a, +g || 0, s - (g || 0), "boolean" == typeof d ? is : rs, 0, m), l && (_.fp = l), i && _.modifier(i, this, e), this._pt = _)
        },
        Xt = (e, a, t, s, n, r) => {
          let i, o, l, c;
          if (ra[e] && !1 !== (i = new ra[e]).init(n, i.rawVars ? a[e] : ((e, a, t, s, n) => {
              if (ze(e) && (e = Zt(e, n, a, t, s)), !Ie(e) || e.style && e.nodeType || Re(e) || De(e)) return je(e) ? Zt(e, n, a, t, s) : e;
              let r, i = {};
              for (r in e) i[r] = Zt(e[r], n, a, t, s);
              return i
            })(a[e], s, n, r, t), t, s, r) && (t._pt = o = new ms(t._pt, n, e, 0, 1, i.render, i, 0, i.priority), t !== he))
            for (l = t._ptLookup[t._targets.indexOf(n)], c = i._props.length; c--;) l[i._props[c]] = o;
          return i
        },
        Wt = (e, a, t) => {
          let s, n, r, i, o, l, c, _, d, g, m, u, v, p = e.vars,
            {
              ease: h,
              startAt: f,
              immediateRender: b,
              lazy: k,
              onUpdate: y,
              onUpdateParams: w,
              callbackScope: x,
              runBackwards: M,
              yoyoEase: S,
              keyframes: T,
              autoRevert: C
            } = p,
            N = e._dur,
            j = e._startAt,
            z = e._targets,
            A = e.parent,
            E = A && "nested" === A.data ? A.vars.targets : z,
            I = "auto" === e._overwrite && !le,
            P = e.timeline;
          if (P && (!T || !h) && (h = "none"), e._ease = Lt(h, ke.ease), e._yEase = S ? It(Lt(!0 === S ? h : S, ke.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), e._from = !P && !!p.runBackwards, !P || T && !p.stagger) {
            if (_ = z[0] ? da(z[0]).harness : 0, u = _ && p[_.prop], s = Sa(p, ta), j && (j._zTime < 0 && j.progress(1), a < 0 && M && b && !C ? j.render(-1, !0) : j.revert(M && N ? ea : Qe), j._lazy = 0), f) {
              if (ja(e._startAt = Qt.set(z, wa({
                  data: "isStart",
                  overwrite: !1,
                  parent: A,
                  immediateRender: !0,
                  lazy: !j && Pe(k),
                  startAt: null,
                  delay: 0,
                  onUpdate: y,
                  onUpdateParams: w,
                  callbackScope: x,
                  stagger: 0
                }, f))), e._startAt._dp = 0, e._startAt._sat = e, a < 0 && (ce || !b && !C) && e._startAt.revert(ea), b && N && a <= 0 && t <= 0) return void(a && (e._zTime = a))
            } else if (M && N && !j)
              if (a && (b = !1), r = wa({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: b && !j && Pe(k),
                  immediateRender: b,
                  stagger: 0,
                  parent: A
                }, s), u && (r[_.prop] = u), ja(e._startAt = Qt.set(z, r)), e._startAt._dp = 0, e._startAt._sat = e, a < 0 && (ce ? e._startAt.revert(ea) : e._startAt.render(-1, !0)), e._zTime = a, b) {
                if (!a) return
              } else Wt(e._startAt, we, we);
            for (e._pt = e._ptCache = 0, k = N && Pe(k) || k && !N, n = 0; n < z.length; n++) {
              if (o = z[n], c = o._gsap || _a(z)[n]._gsap, e._ptLookup[n] = g = {}, na[c.id] && sa.length && fa(), m = E === z ? n : E.indexOf(o), _ && !1 !== (d = new _).init(o, u || s, e, m, E) && (e._pt = i = new ms(e._pt, o, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach((e => {
                  g[e] = i
                })), d.priority && (l = 1)), !_ || u)
                for (r in s) ra[r] && (d = Xt(r, s, e, m, o, E)) ? d.priority && (l = 1) : g[r] = i = Ht.call(e, o, r, "get", s[r], m, E, 0, p.stringFilter);
              e._op && e._op[n] && e.kill(o, e._op[n]), I && e._pt && (qt = e, de.killTweensOf(o, g, e.globalTime(a)), v = !e.parent, qt = 0), e._pt && k && (na[c.id] = 1)
            }
            l && gs(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = y, e._initted = (!e._op || e._pt) && !v, T && a <= 0 && P.render(ye, !0, !0)
        },
        Yt = (e, a, t, s) => {
          let n, r, i = a.ease || s || "power1.inOut";
          if (Re(a)) r = t[e] || (t[e] = []), a.forEach(((e, t) => r.push({
            t: t / (a.length - 1) * 100,
            v: e,
            e: i
          })));
          else
            for (n in a) r = t[n] || (t[n] = []), "ease" === n || r.push({
              t: parseFloat(e),
              v: a[n],
              e: i
            })
        },
        Zt = (e, a, t, s, n) => ze(e) ? e.call(a, t, s, n) : je(e) && ~e.indexOf("random(") ? _t(e) : e,
        Jt = ca + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Kt = {};
      ma(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", (e => Kt[e] = 1));
      class Qt extends Gt {
        constructor(e, a, t, s) {
          "number" == typeof a && (t.duration = a, a = t, t = null), super(s ? a : Ta(a));
          let n, r, i, o, l, c, _, d, {
              duration: g,
              delay: m,
              immediateRender: u,
              stagger: v,
              overwrite: p,
              keyframes: h,
              defaults: f,
              scrollTrigger: b,
              yoyoEase: k
            } = this.vars,
            y = a.parent || de,
            w = (Re(e) || De(e) ? Ae(e[0]) : "length" in a) ? [e] : et(e);
          if (this._targets = w.length ? _a(w) : Ze("GSAP target " + e + " not found. https://greensock.com", !be.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = p, h || v || Oe(g) || Oe(m)) {
            if (a = this.vars, n = this.timeline = new Ft({
                data: "nested",
                defaults: f || {},
                targets: y && "nested" === y.data ? y.vars.targets : w
              }), n.kill(), n.parent = n._dp = this, n._start = 0, v || Oe(g) || Oe(m)) {
              if (o = w.length, _ = v && st(v), Ie(v))
                for (l in v) ~Jt.indexOf(l) && (d || (d = {}), d[l] = v[l]);
              for (r = 0; r < o; r++) i = Sa(a, Kt), i.stagger = 0, k && (i.yoyoEase = k), d && xa(i, d), c = w[r], i.duration = +Zt(g, this, r, c, w), i.delay = (+Zt(m, this, r, c, w) || 0) - this._delay, !v && 1 === o && i.delay && (this._delay = m = i.delay, this._start += m, i.delay = 0), n.to(c, i, _ ? _(r, c, w) : 0), n._ease = jt.none;
              n.duration() ? g = m = 0 : this.timeline = 0
            } else if (h) {
              Ta(wa(n.vars.defaults, {
                ease: "none"
              })), n._ease = Lt(h.ease || a.ease || "none");
              let e, t, s, o = 0;
              if (Re(h)) h.forEach((e => n.to(w, e, ">"))), n.duration();
              else {
                for (l in i = {}, h) "ease" === l || "easeEach" === l || Yt(l, h[l], i, h.easeEach);
                for (l in i)
                  for (e = i[l].sort(((e, a) => e.t - a.t)), o = 0, r = 0; r < e.length; r++) t = e[r], s = {
                    ease: t.e,
                    duration: (t.t - (r ? e[r - 1].t : 0)) / 100 * g
                  }, s[l] = t.v, n.to(w, s, o), o += s.duration;
                n.duration() < g && n.to({}, {
                  duration: g - n.duration()
                })
              }
            }
            g || this.duration(g = n.duration())
          } else this.timeline = 0;
          !0 !== p || le || (qt = this, de.killTweensOf(w), qt = 0), Va(y, this, t), a.reversed && this.reverse(), a.paused && this.paused(!0), (u || !g && !h && this._start === va(y._time) && Pe(u) && Ea(this) && "nested" !== y.data) && (this._tTime = -1e-8, this.render(Math.max(0, -m) || 0)), b && Ba(this, b)
        }
        render(e, a, t) {
          let s, n, r, i, o, l, c, _, d, g = this._time,
            m = this._tDur,
            u = this._dur,
            v = e < 0,
            p = e > m - we && !v ? m : e < we ? 0 : e;
          if (u) {
            if (p !== this._tTime || !e || t || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== v) {
              if (s = p, _ = this.timeline, this._repeat) {
                if (i = u + this._rDelay, this._repeat < -1 && v) return this.totalTime(100 * i + e, a, t);
                if (s = va(p % i), p === m ? (r = this._repeat, s = u) : (r = ~~(p / i), r && r === p / i && (s = u, r--), s > u && (s = u)), l = this._yoyo && 1 & r, l && (d = this._yEase, s = u - s), o = Pa(this._tTime, i), s === g && !t && this._initted) return this._tTime = p, this;
                r !== o && (_ && this._yEase && Pt(_, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = t = 1, this.render(va(i * r), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Ga(this, v ? e : s, t, a, p)) return this._tTime = 0, this;
                if (g !== this._time) return this;
                if (u !== this._dur) return this.render(e, a, t)
              }
              if (this._tTime = p, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(s / u), this._from && (this.ratio = c = 1 - c), s && !g && !a && !r && (ut(this, "onStart"), this._tTime !== p)) return this;
              for (n = this._pt; n;) n.r(c, n.d), n = n._next;
              _ && _.render(e < 0 ? e : !s && l ? -1e-8 : _._dur * _._ease(s / this._dur), a, t) || this._startAt && (this._zTime = e), this._onUpdate && !a && (v && Aa(this, e, 0, t), ut(this, "onUpdate")), this._repeat && r !== o && this.vars.onRepeat && !a && this.parent && ut(this, "onRepeat"), p !== this._tDur && p || this._tTime !== p || (v && !this._onUpdate && Aa(this, e, 0, !0), (e || !u) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && ja(this, 1), a || v && !g || !(p || g || l) || (ut(this, p === m ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < m && this.timeScale() > 0) && this._prom()))
            }
          } else((e, a, t, s) => {
            let n, r, i, o = e.ratio,
              l = a < 0 || !a && (!e._start && Fa(e) && (e._initted || !qa(e)) || (e._ts < 0 || e._dp._ts < 0) && !qa(e)) ? 0 : 1,
              c = e._rDelay,
              _ = 0;
            if (c && e._repeat && (_ = Za(0, e._tDur, a), r = Pa(_, c), e._yoyo && 1 & r && (l = 1 - l), r !== Pa(e._tTime, c) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || ce || s || e._zTime === we || !a && e._zTime) {
              if (!e._initted && Ga(e, a, s, t, _)) return;
              for (i = e._zTime, e._zTime = a || (t ? we : 0), t || (t = a && !i), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = _, n = e._pt; n;) n.r(l, n.d), n = n._next;
              a < 0 && Aa(e, a, 0, !0), e._onUpdate && !t && ut(e, "onUpdate"), _ && e._repeat && !t && e.parent && ut(e, "onRepeat"), (a >= e._tDur || a < 0) && e.ratio === l && (l && ja(e, 1), t || ce || (ut(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = a)
          })(this, e, a, t);
          return this
        }
        targets() {
          return this._targets
        }
        invalidate(e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), super.invalidate(e)
        }
        resetTo(e, a, t, s) {
          fe || Ct.wake(), this._ts || this.play();
          let n, r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Wt(this, r), n = this._ease(r / this._dur), ((e, a, t, s, n, r, i) => {
            let o, l, c, _, d = (e._pt && e._ptCache || (e._ptCache = {}))[a];
            if (!d)
              for (d = e._ptCache[a] = [], c = e._ptLookup, _ = e._targets.length; _--;) {
                if (o = c[_][a], o && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== a && o.fp !== a;) o = o._next;
                if (!o) return $t = 1, e.vars[a] = "+=0", Wt(e, i), $t = 0, 1;
                d.push(o)
              }
            for (_ = d.length; _--;) l = d[_], o = l._pt || l, o.s = !s && 0 !== s || n ? o.s + (s || 0) + r * o.c : s, o.c = t - o.s, l.e && (l.e = ua(t) + Ja(l.e)), l.b && (l.b = o.s + Ja(l.b))
          })(this, e, a, t, s, n, r) ? this.resetTo(e, a, t, s) : (Da(this, 0), this.parent || Ca(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(e || a && "all" !== a)) return this._lazy = this._pt = 0, this.parent ? vt(this) : this;
          if (this.timeline) {
            let t = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, a, qt && !0 !== qt.vars.overwrite)._first || vt(this), this.parent && t !== this.timeline.totalDuration() && $a(this, this._dur * this.timeline._tDur / t, 0, 1), this
          }
          let t, s, n, r, i, o, l, c = this._targets,
            _ = e ? et(e) : c,
            d = this._ptLookup,
            g = this._pt;
          if ((!a || "all" === a) && ((e, a) => {
              let t = e.length,
                s = t === a.length;
              for (; s && t-- && e[t] === a[t];);
              return t < 0
            })(c, _)) return "all" === a && (this._pt = 0), vt(this);
          for ((t = this._op = this._op || [], "all" !== a && (je(a) && (i = {}, ma(a, (e => i[e] = 1)), a = i), a = ((e, a) => {
              let t, s, n, r, i = e[0] ? da(e[0]).harness : 0,
                o = i && i.aliases;
              if (!o) return a;
              for (s in t = xa({}, a), o)
                if (s in t)
                  for (r = o[s].split(","), n = r.length; n--;) t[r[n]] = t[s];
              return t
            })(c, a)), l = c.length); l--;)
            if (~_.indexOf(c[l]))
              for (i in s = d[l], "all" === a ? (t[l] = a, r = s, n = {}) : (n = t[l] = t[l] || {}, r = a), r) o = s && s[i], o && ("kill" in o.d && !0 !== o.d.kill(i) || Na(this, o, "_pt"), delete s[i]), "all" !== n && (n[i] = 1);
          return this._initted && !this._pt && g && vt(this), this
        }
        static to(e, a) {
          return new Qt(e, a, arguments[2])
        }
        static from(e, a) {
          return Wa(1, arguments)
        }
        static delayedCall(e, a, t, s) {
          return new Qt(a, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: a,
            onReverseComplete: a,
            onCompleteParams: t,
            onReverseCompleteParams: t,
            callbackScope: s
          })
        }
        static fromTo(e, a, t) {
          return Wa(2, arguments)
        }
        static set(e, a) {
          return a.duration = 0, a.repeatDelay || (a.repeat = 0), new Qt(e, a)
        }
        static killTweensOf(e, a, t) {
          return de.killTweensOf(e, a, t)
        }
      }
      wa(Qt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), ma("staggerTo,staggerFrom,staggerFromTo", (e => {
        Qt[e] = function() {
          let a = new Ft,
            t = Ka.call(arguments, 0);
          return t.splice("staggerFromTo" === e ? 5 : 4, 0, 0), a[e].apply(a, t)
        }
      }));
      let es = (e, a, t) => e[a] = t,
        as = (e, a, t) => e[a](t),
        ts = (e, a, t, s) => e[a](s.fp, t),
        ss = (e, a, t) => e.setAttribute(a, t),
        ns = (e, a) => ze(e[a]) ? as : Ee(e[a]) && e.setAttribute ? ss : es,
        rs = (e, a) => a.set(a.t, a.p, Math.round(1e6 * (a.s + a.c * e)) / 1e6, a),
        is = (e, a) => a.set(a.t, a.p, !!(a.s + a.c * e), a),
        os = function(e, a) {
          let t = a._pt,
            s = "";
          if (!e && a.b) s = a.b;
          else if (1 === e && a.e) s = a.e;
          else {
            for (; t;) s = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round(1e4 * (t.s + t.c * e)) / 1e4) + s, t = t._next;
            s += a.c
          }
          a.set(a.t, a.p, s, a)
        },
        ls = function(e, a) {
          let t = a._pt;
          for (; t;) t.r(e, t.d), t = t._next
        },
        cs = function(e, a, t, s) {
          let n, r = this._pt;
          for (; r;) n = r._next, r.p === s && r.modifier(e, a, t), r = n
        },
        _s = function(e) {
          let a, t, s = this._pt;
          for (; s;) t = s._next, s.p === e && !s.op || s.op === e ? Na(this, s, "_pt") : s.dep || (a = 1), s = t;
          return !a
        },
        ds = (e, a, t, s) => {
          s.mSet(e, a, s.m.call(s.tween, t, s.mt), s)
        },
        gs = e => {
          let a, t, s, n, r = e._pt;
          for (; r;) {
            for (a = r._next, t = s; t && t.pr > r.pr;) t = t._next;
            (r._prev = t ? t._prev : n) ? r._prev._next = r: s = r, (r._next = t) ? t._prev = r : n = r, r = a
          }
          e._pt = s
        };
      class ms {
        constructor(e, a, t, s, n, r, i, o, l) {
          this.t = a, this.s = s, this.c = n, this.p = t, this.r = r || rs, this.d = i || this, this.set = o || es, this.pr = l || 0, this._next = e, e && (e._prev = this)
        }
        modifier(e, a, t) {
          this.mSet = this.mSet || this.set, this.set = ds, this.m = e, this.mt = t, this.tween = a
        }
      }
      ma(ca + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => ta[e] = 1)), He.TweenMax = He.TweenLite = Qt, He.TimelineLite = He.TimelineMax = Ft, de = new Ft({
        sortChildren: !1,
        defaults: ke,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), be.stringFilter = Tt;
      let us = [],
        vs = {},
        ps = [],
        hs = 0,
        fs = 0,
        bs = e => (vs[e] || ps).map((e => e())),
        ks = () => {
          let e = Date.now(),
            a = [];
          e - hs > 2 && (bs("matchMediaInit"), us.forEach((e => {
            let t, s, n, r, i = e.queries,
              o = e.conditions;
            for (s in i) t = ge.matchMedia(i[s]).matches, t && (n = 1), t !== o[s] && (o[s] = t, r = 1);
            r && (e.revert(), n && a.push(e))
          })), bs("matchMediaRevert"), a.forEach((e => e.onMatch(e))), hs = e, bs("matchMedia"))
        };
      class ys {
        constructor(e, a) {
          this.selector = a && at(a), this.data = [], this._r = [], this.isReverted = !1, this.id = fs++, e && this.add(e)
        }
        add(e, a, t) {
          ze(e) && (t = a, a = e, e = ze);
          let s = this,
            n = function() {
              let e, n = _e,
                r = s.selector;
              return n && n !== s && n.data.push(s), t && (s.selector = at(t)), _e = s, e = a.apply(s, arguments), ze(e) && s._r.push(e), _e = n, s.selector = r, s.isReverted = !1, e
            };
          return s.last = n, e === ze ? n(s) : e ? s[e] = n : n
        }
        ignore(e) {
          let a = _e;
          _e = null, e(this), _e = a
        }
        getTweens() {
          let e = [];
          return this.data.forEach((a => a instanceof ys ? e.push(...a.getTweens()) : a instanceof Qt && !(a.parent && "nested" === a.parent.data) && e.push(a))), e
        }
        clear() {
          this._r.length = this.data.length = 0
        }
        kill(e, a) {
          if (e) {
            let a = this.getTweens();
            this.data.forEach((e => {
              "isFlip" === e.data && (e.revert(), e.getChildren(!0, !0, !1).forEach((e => a.splice(a.indexOf(e), 1))))
            })), a.map((e => ({
              g: e.globalTime(0),
              t: e
            }))).sort(((e, a) => a.g - e.g || -1 / 0)).forEach((a => a.t.revert(e))), this.data.forEach((a => !(a instanceof Qt) && a.revert && a.revert(e))), this._r.forEach((a => a(e, this))), this.isReverted = !0
          } else this.data.forEach((e => e.kill && e.kill()));
          if (this.clear(), a) {
            let e = us.length;
            for (; e--;) us[e].id === this.id && us.splice(e, 1)
          }
        }
        revert(e) {
          this.kill(e || {})
        }
      }
      class ws {
        constructor(e) {
          this.contexts = [], this.scope = e
        }
        add(e, a, t) {
          Ie(e) || (e = {
            matches: e
          });
          let s, n, r, i = new ys(0, t || this.scope),
            o = i.conditions = {};
          for (n in _e && !i.selector && (i.selector = _e.selector), this.contexts.push(i), a = i.add("onMatch", a), i.queries = e, e) "all" === n ? r = 1 : (s = ge.matchMedia(e[n]), s && (us.indexOf(i) < 0 && us.push(i), (o[n] = s.matches) && (r = 1), s.addListener ? s.addListener(ks) : s.addEventListener("change", ks)));
          return r && a(i), this
        }
        revert(e) {
          this.kill(e || {})
        }
        kill(e) {
          this.contexts.forEach((a => a.kill(e, !0)))
        }
      }
      const xs = {
        registerPlugin() {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
          a.forEach((e => ht(e)))
        },
        timeline: e => new Ft(e),
        getTweensOf: (e, a) => de.getTweensOf(e, a),
        getProperty(e, a, t, s) {
          je(e) && (e = et(e)[0]);
          let n = da(e || {}).get,
            r = t ? ya : ka;
          return "native" === t && (t = ""), e ? a ? r((ra[a] && ra[a].get || n)(e, a, t, s)) : (a, t, s) => r((ra[a] && ra[a].get || n)(e, a, t, s)) : e
        },
        quickSetter(e, a, t) {
          if ((e = et(e)).length > 1) {
            let s = e.map((e => Ts.quickSetter(e, a, t))),
              n = s.length;
            return e => {
              let a = n;
              for (; a--;) s[a](e)
            }
          }
          e = e[0] || {};
          let s = ra[a],
            n = da(e),
            r = n.harness && (n.harness.aliases || {})[a] || a,
            i = s ? a => {
              let n = new s;
              he._pt = 0, n.init(e, t ? a + t : a, he, 0, [e]), n.render(1, n), he._pt && ls(1, he)
            } : n.set(e, r);
          return s ? i : a => i(e, r, t ? a + t : a, n, 1)
        },
        quickTo(e, a, t) {
          let s = Ts.to(e, xa({
              [a]: "+=0.1",
              paused: !0
            }, t || {})),
            n = (e, t, n) => s.resetTo(a, e, t, n);
          return n.tween = s, n
        },
        isTweening: e => de.getTweensOf(e, !0).length > 0,
        defaults: e => (e && e.ease && (e.ease = Lt(e.ease, ke.ease)), Ma(ke, e || {})),
        config: e => Ma(be, e || {}),
        registerEffect(e) {
          let {
            name: a,
            effect: t,
            plugins: s,
            defaults: n,
            extendTimeline: r
          } = e;
          (s || "").split(",").forEach((e => e && !ra[e] && !He[e] && Ze(a + " effect requires " + e + " plugin."))), ia[a] = (e, a, s) => t(et(e), wa(a || {}, n), s), r && (Ft.prototype[a] = function(e, t, s) {
            return this.add(ia[a](e, Ie(t) ? t : (s = t) && {}, this), s)
          })
        },
        registerEase(e, a) {
          jt[e] = Lt(a)
        },
        parseEase(e, a) {
          return arguments.length ? Lt(e, a) : jt
        },
        getById: e => de.getById(e),
        exportRoot() {
          let e, a, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = arguments.length > 1 ? arguments[1] : void 0,
            n = new Ft(t);
          for (n.smoothChildTiming = Pe(t.smoothChildTiming), de.remove(n), n._dp = 0, n._time = n._tTime = de._time, e = de._first; e;) a = e._next, !s && !e._dur && e instanceof Qt && e.vars.onComplete === e._targets[0] || Va(n, e, e._start - e._delay), e = a;
          return Va(de, n, 0), n
        },
        context: (e, a) => e ? new ys(e, a) : _e,
        matchMedia: e => new ws(e),
        matchMediaRefresh: () => us.forEach((e => {
          let a, t, s = e.conditions;
          for (t in s) s[t] && (s[t] = !1, a = 1);
          a && e.revert()
        })) || ks(),
        addEventListener(e, a) {
          let t = vs[e] || (vs[e] = []);
          ~t.indexOf(a) || t.push(a)
        },
        removeEventListener(e, a) {
          let t = vs[e],
            s = t && t.indexOf(a);
          s >= 0 && t.splice(s, 1)
        },
        utils: {
          wrap: lt,
          wrapYoyo: ct,
          distribute: st,
          random: it,
          snap: rt,
          normalize: (e, a, t) => dt(e, a, 0, 1, t),
          getUnit: Ja,
          clamp: (e, a, t) => Ya(t, (t => Za(e, a, t))),
          splitColor: yt,
          toArray: et,
          selector: at,
          mapRange: dt,
          pipe: function() {
            for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
            return e => a.reduce(((e, a) => a(e)), e)
          },
          unitize: (e, a) => t => e(parseFloat(t)) + (a || Ja(t)),
          interpolate: gt,
          shuffle: tt
        },
        install: We,
        effects: ia,
        ticker: Ct,
        updateRoot: Ft.updateRoot,
        plugins: ra,
        globalTimeline: de,
        core: {
          PropTween: ms,
          globals: Je,
          Tween: Qt,
          Timeline: Ft,
          Animation: Gt,
          getCache: da,
          _removeLinkedListItem: Na,
          reverting: () => ce,
          context: e => (e && _e && (_e.data.push(e), e._ctx = _e), _e),
          suppressOverwrites: e => le = e
        }
      };
      ma("to,from,fromTo,delayedCall,set,killTweensOf", (e => xs[e] = Qt[e])), Ct.add(Ft.updateRoot), he = xs.to({}, {
        duration: 0
      });
      let Ms = (e, a) => {
          let t = e._pt;
          for (; t && t.p !== a && t.op !== a && t.fp !== a;) t = t._next;
          return t
        },
        Ss = (e, a) => ({
          name: e,
          rawVars: 1,
          init(e, t, s) {
            s._onInit = e => {
              let s, n;
              if (je(t) && (s = {}, ma(t, (e => s[e] = 1)), t = s), a) {
                for (n in s = {}, t) s[n] = a(t[n]);
                t = s
              }((e, a) => {
                let t, s, n, r = e._targets;
                for (t in a)
                  for (s = r.length; s--;) n = e._ptLookup[s][t], n && (n = n.d) && (n._pt && (n = Ms(n, t)), n && n.modifier && n.modifier(a[t], e, r[s], t))
              })(e, t)
            }
          }
        });
      const Ts = xs.registerPlugin({
        name: "attr",
        init(e, a, t, s, n) {
          let r, i, o;
          for (r in this.tween = t, a) o = e.getAttribute(r) || "", i = this.add(e, "setAttribute", (o || 0) + "", a[r], s, n, 0, 0, r), i.op = r, i.b = o, this._props.push(r)
        },
        render(e, a) {
          let t = a._pt;
          for (; t;) ce ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), t = t._next
        }
      }, {
        name: "endArray",
        init(e, a) {
          let t = a.length;
          for (; t--;) this.add(e, t, e[t] || 0, a[t], 0, 0, 0, 0, 0, 1)
        }
      }, Ss("roundProps", nt), Ss("modifiers"), Ss("snap", rt)) || xs;
      Qt.version = Ft.version = Ts.version = "3.12.2", ve = 1, Le() && Nt();
      const {
        Power0: Cs,
        Power1: Ns,
        Power2: js,
        Power3: zs,
        Power4: As,
        Linear: Es,
        Quad: Is,
        Cubic: Ps,
        Quart: Ls,
        Quint: Os,
        Strong: Ds,
        Elastic: Rs,
        Back: Vs,
        SteppedEase: Bs,
        Bounce: Gs,
        Sine: Fs,
        Expo: qs,
        Circ: $s
      } = jt;
      let Us, Hs, Xs, Ws, Ys, Zs, Js, Ks, Qs, en = {},
        an = 180 / Math.PI,
        tn = Math.PI / 180,
        sn = Math.atan2,
        nn = /([A-Z])/g,
        rn = /(left|right|width|margin|padding|x)/i,
        on = /[\s,\(]\S/,
        ln = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        cn = (e, a) => a.set(a.t, a.p, Math.round(1e4 * (a.s + a.c * e)) / 1e4 + a.u, a),
        _n = (e, a) => a.set(a.t, a.p, 1 === e ? a.e : Math.round(1e4 * (a.s + a.c * e)) / 1e4 + a.u, a),
        dn = (e, a) => a.set(a.t, a.p, e ? Math.round(1e4 * (a.s + a.c * e)) / 1e4 + a.u : a.b, a),
        gn = (e, a) => {
          let t = a.s + a.c * e;
          a.set(a.t, a.p, ~~(t + (t < 0 ? -.5 : .5)) + a.u, a)
        },
        mn = (e, a) => a.set(a.t, a.p, e ? a.e : a.b, a),
        un = (e, a) => a.set(a.t, a.p, 1 !== e ? a.b : a.e, a),
        vn = (e, a, t) => e.style[a] = t,
        pn = (e, a, t) => e.style.setProperty(a, t),
        hn = (e, a, t) => e._gsap[a] = t,
        fn = (e, a, t) => e._gsap.scaleX = e._gsap.scaleY = t,
        bn = (e, a, t, s, n) => {
          let r = e._gsap;
          r.scaleX = r.scaleY = t, r.renderTransform(n, r)
        },
        kn = (e, a, t, s, n) => {
          let r = e._gsap;
          r[a] = t, r.renderTransform(n, r)
        },
        yn = "transform",
        wn = yn + "Origin",
        xn = function(e, a) {
          let t = this.target,
            s = t.style;
          if (e in en && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return ln.transform.split(",").forEach((e => xn.call(this, e, a)));
            if (~(e = ln[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = Gn(t, e))) : this.tfm[e] = t._gsap.x ? t._gsap[e] : Gn(t, e), this.props.indexOf(yn) >= 0) return;
            t._gsap.svg && (this.svgo = t.getAttribute("data-svg-origin"), this.props.push(wn, a, "")), e = yn
          }(s || a) && this.props.push(e, a, s[e])
        },
        Mn = e => {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        Sn = function() {
          let e, a, t = this.props,
            s = this.target,
            n = s.style,
            r = s._gsap;
          for (e = 0; e < t.length; e += 3) t[e + 1] ? s[t[e]] = t[e + 2] : t[e + 2] ? n[t[e]] = t[e + 2] : n.removeProperty("--" === t[e].substr(0, 2) ? t[e] : t[e].replace(nn, "-$1").toLowerCase());
          if (this.tfm) {
            for (a in this.tfm) r[a] = this.tfm[a];
            r.svg && (r.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = Ks(), e && e.isStart || n[yn] || (Mn(n), r.uncache = 1)
          }
        },
        Tn = (e, a) => {
          let t = {
            target: e,
            props: [],
            revert: Sn,
            save: xn
          };
          return e._gsap || Ts.core.getCache(e), a && a.split(",").forEach((e => t.save(e))), t
        },
        Cn = (e, a) => {
          let t = Hs.createElementNS ? Hs.createElementNS((a || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Hs.createElement(e);
          return t.style ? t : Hs.createElement(e)
        },
        Nn = (e, a, t) => {
          let s = getComputedStyle(e);
          return s[a] || s.getPropertyValue(a.replace(nn, "-$1").toLowerCase()) || s.getPropertyValue(a) || !t && Nn(e, zn(a) || a, 1) || ""
        },
        jn = "O,Moz,ms,Ms,Webkit".split(","),
        zn = (e, a, t) => {
          let s = (a || Ys).style,
            n = 5;
          if (e in s && !t) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(jn[n] + e in s););
          return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? jn[n] : "") + e
        },
        An = () => {
          "undefined" != typeof window && window.document && (Us = window, Hs = Us.document, Xs = Hs.documentElement, Ys = Cn("div") || {
            style: {}
          }, Zs = Cn("div"), yn = zn(yn), wn = yn + "Origin", Ys.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Qs = !!zn("perspective"), Ks = Ts.core.reverting, Ws = 1)
        },
        En = function(e) {
          let a, t = Cn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = this.parentNode,
            n = this.nextSibling,
            r = this.style.cssText;
          if (Xs.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
            a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = En
          } catch (e) {} else this._gsapBBox && (a = this._gsapBBox());
          return s && (n ? s.insertBefore(this, n) : s.appendChild(this)), Xs.removeChild(t), this.style.cssText = r, a
        },
        In = (e, a) => {
          let t = a.length;
          for (; t--;)
            if (e.hasAttribute(a[t])) return e.getAttribute(a[t])
        },
        Pn = e => {
          let a;
          try {
            a = e.getBBox()
          } catch (t) {
            a = En.call(e, !0)
          }
          return a && (a.width || a.height) || e.getBBox === En || (a = En.call(e, !0)), !a || a.width || a.x || a.y ? a : {
            x: +In(e, ["x", "cx", "x1"]) || 0,
            y: +In(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Ln = e => !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Pn(e)),
        On = (e, a) => {
          if (a) {
            let t = e.style;
            a in en && a !== wn && (a = yn), t.removeProperty ? ("ms" !== a.substr(0, 2) && "webkit" !== a.substr(0, 6) || (a = "-" + a), t.removeProperty(a.replace(nn, "-$1").toLowerCase())) : t.removeAttribute(a)
          }
        },
        Dn = (e, a, t, s, n, r) => {
          let i = new ms(e._pt, a, t, 0, 1, r ? un : mn);
          return e._pt = i, i.b = s, i.e = n, e._props.push(t), i
        },
        Rn = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Vn = {
          grid: 1,
          flex: 1
        },
        Bn = (e, a, t, s) => {
          let n, r, i, o, l = parseFloat(t) || 0,
            c = (t + "").trim().substr((l + "").length) || "px",
            _ = Ys.style,
            d = rn.test(a),
            g = "svg" === e.tagName.toLowerCase(),
            m = (g ? "client" : "offset") + (d ? "Width" : "Height"),
            u = 100,
            v = "px" === s,
            p = "%" === s;
          return s === c || !l || Rn[s] || Rn[c] ? l : ("px" !== c && !v && (l = Bn(e, a, t, "px")), o = e.getCTM && Ln(e), !p && "%" !== c || !en[a] && !~a.indexOf("adius") ? (_[d ? "width" : "height"] = u + (v ? c : s), r = ~a.indexOf("adius") || "em" === s && e.appendChild && !g ? e : e.parentNode, o && (r = (e.ownerSVGElement || {}).parentNode), r && r !== Hs && r.appendChild || (r = Hs.body), i = r._gsap, i && p && i.width && d && i.time === Ct.time && !i.uncache ? ua(l / i.width * u) : ((p || "%" === c) && !Vn[Nn(r, "display")] && (_.position = Nn(e, "position")), r === e && (_.position = "static"), r.appendChild(Ys), n = Ys[m], r.removeChild(Ys), _.position = "absolute", d && p && (i = da(r), i.time = Ct.time, i.width = r[m]), ua(v ? n * l / u : n && l ? u / n * l : 0))) : (n = o ? e.getBBox()[d ? "width" : "height"] : e[m], ua(p ? l / n * u : l / 100 * n)))
        },
        Gn = (e, a, t, s) => {
          let n;
          return Ws || An(), a in ln && "transform" !== a && ~(a = ln[a]).indexOf(",") && (a = a.split(",")[0]), en[a] && "transform" !== a ? (n = Qn(e, s), n = "transformOrigin" !== a ? n[a] : n.svg ? n.origin : er(Nn(e, wn)) + " " + n.zOrigin + "px") : (n = e.style[a], (!n || "auto" === n || s || ~(n + "").indexOf("calc(")) && (n = Hn[a] && Hn[a](e, a, t) || Nn(e, a) || ga(e, a) || ("opacity" === a ? 1 : 0))), t && !~(n + "").trim().indexOf(" ") ? Bn(e, a, n, t) + t : n
        },
        Fn = function(e, a, t, s) {
          if (!t || "none" === t) {
            let s = zn(a, e, 1),
              n = s && Nn(e, s, 1);
            n && n !== t ? (a = s, t = n) : "borderColor" === a && (t = Nn(e, "borderTopColor"))
          }
          let n, r, i, o, l, c, _, d, g, m, u, v, p = new ms(this._pt, e.style, a, 0, 1, os),
            h = 0,
            f = 0;
          if (p.b = t, p.e = s, t += "", "auto" == (s += "") && (e.style[a] = s, s = Nn(e, a) || s, e.style[a] = t), n = [t, s], Tt(n), s = n[1], i = (t = n[0]).match(Ge) || [], v = s.match(Ge) || [], v.length) {
            for (; r = Ge.exec(s);) _ = r[0], g = s.substring(h, r.index), l ? l = (l + 1) % 5 : "rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5) || (l = 1), _ !== (c = i[f++] || "") && (o = parseFloat(c) || 0, u = c.substr((o + "").length), "=" === _.charAt(1) && (_ = pa(o, _) + u), d = parseFloat(_), m = _.substr((d + "").length), h = Ge.lastIndex - m.length, m || (m = m || be.units[a] || u, h === s.length && (s += m, p.e += m)), u !== m && (o = Bn(e, a, c, m) || 0), p._pt = {
              _next: p._pt,
              p: g || 1 === f ? g : ",",
              s: o,
              c: d - o,
              m: l && l < 4 || "zIndex" === a ? Math.round : 0
            });
            p.c = h < s.length ? s.substring(h, s.length) : ""
          } else p.r = "display" === a && "none" === s ? un : mn;
          return qe.test(s) && (p.e = 0), this._pt = p, p
        },
        qn = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        $n = e => {
          let a = e.split(" "),
            t = a[0],
            s = a[1] || "50%";
          return "top" !== t && "bottom" !== t && "left" !== s && "right" !== s || (e = t, t = s, s = e), a[0] = qn[t] || t, a[1] = qn[s] || s, a.join(" ")
        },
        Un = (e, a) => {
          if (a.tween && a.tween._time === a.tween._dur) {
            let e, t, s, n = a.t,
              r = n.style,
              i = a.u,
              o = n._gsap;
            if ("all" === i || !0 === i) r.cssText = "", t = 1;
            else
              for (i = i.split(","), s = i.length; --s > -1;) e = i[s], en[e] && (t = 1, e = "transformOrigin" === e ? wn : yn), On(n, e);
            t && (On(n, yn), o && (o.svg && n.removeAttribute("transform"), Qn(n, 1), o.uncache = 1, Mn(r)))
          }
        },
        Hn = {
          clearProps(e, a, t, s, n) {
            if ("isFromStart" !== n.data) {
              let r = e._pt = new ms(e._pt, a, t, 0, 0, Un);
              return r.u = s, r.pr = -10, r.tween = n, e._props.push(t), 1
            }
          }
        },
        Xn = [1, 0, 0, 1, 0, 0],
        Wn = {},
        Yn = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        Zn = e => {
          let a = Nn(e, yn);
          return Yn(a) ? Xn : a.substr(7).match(Be).map(ua)
        },
        Jn = (e, a) => {
          let t, s, n, r, i = e._gsap || da(e),
            o = e.style,
            l = Zn(e);
          return i.svg && e.getAttribute("transform") ? (n = e.transform.baseVal.consolidate().matrix, l = [n.a, n.b, n.c, n.d, n.e, n.f], "1,0,0,1,0,0" === l.join(",") ? Xn : l) : (l !== Xn || e.offsetParent || e === Xs || i.svg || (n = o.display, o.display = "block", t = e.parentNode, t && e.offsetParent || (r = 1, s = e.nextElementSibling, Xs.appendChild(e)), l = Zn(e), n ? o.display = n : On(e, "display"), r && (s ? t.insertBefore(e, s) : t ? t.appendChild(e) : Xs.removeChild(e))), a && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        Kn = (e, a, t, s, n, r) => {
          let i, o, l, c, _ = e._gsap,
            d = n || Jn(e, !0),
            g = _.xOrigin || 0,
            m = _.yOrigin || 0,
            u = _.xOffset || 0,
            v = _.yOffset || 0,
            p = d[0],
            h = d[1],
            f = d[2],
            b = d[3],
            k = d[4],
            y = d[5],
            w = a.split(" "),
            x = parseFloat(w[0]) || 0,
            M = parseFloat(w[1]) || 0;
          t ? d !== Xn && (o = p * b - h * f) && (l = x * (b / o) + M * (-f / o) + (f * y - b * k) / o, c = x * (-h / o) + M * (p / o) - (p * y - h * k) / o, x = l, M = c) : (i = Pn(e), x = i.x + (~w[0].indexOf("%") ? x / 100 * i.width : x), M = i.y + (~(w[1] || w[0]).indexOf("%") ? M / 100 * i.height : M)), s || !1 !== s && _.smooth ? (k = x - g, y = M - m, _.xOffset = u + (k * p + y * f) - k, _.yOffset = v + (k * h + y * b) - y) : _.xOffset = _.yOffset = 0, _.xOrigin = x, _.yOrigin = M, _.smooth = !!s, _.origin = a, _.originIsAbsolute = !!t, e.style[wn] = "0px 0px", r && (Dn(r, _, "xOrigin", g, x), Dn(r, _, "yOrigin", m, M), Dn(r, _, "xOffset", u, _.xOffset), Dn(r, _, "yOffset", v, _.yOffset)), e.setAttribute("data-svg-origin", x + " " + M)
        },
        Qn = (e, a) => {
          let t = e._gsap || new Bt(e);
          if ("x" in t && !a && !t.uncache) return t;
          let s, n, r, i, o, l, c, _, d, g, m, u, v, p, h, f, b, k, y, w, x, M, S, T, C, N, j, z, A, E, I, P, L = e.style,
            O = t.scaleX < 0,
            D = "px",
            R = "deg",
            V = getComputedStyle(e),
            B = Nn(e, wn) || "0";
          return s = n = r = l = c = _ = d = g = m = 0, i = o = 1, t.svg = !(!e.getCTM || !Ln(e)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (L[yn] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[yn] ? V[yn] : "")), L.scale = L.rotate = L.translate = "none"), p = Jn(e, t.svg), t.svg && (t.uncache ? (C = e.getBBox(), B = t.xOrigin - C.x + "px " + (t.yOrigin - C.y) + "px", T = "") : T = !a && e.getAttribute("data-svg-origin"), Kn(e, T || B, !!T || t.originIsAbsolute, !1 !== t.smooth, p)), u = t.xOrigin || 0, v = t.yOrigin || 0, p !== Xn && (k = p[0], y = p[1], w = p[2], x = p[3], s = M = p[4], n = S = p[5], 6 === p.length ? (i = Math.sqrt(k * k + y * y), o = Math.sqrt(x * x + w * w), l = k || y ? sn(y, k) * an : 0, d = w || x ? sn(w, x) * an + l : 0, d && (o *= Math.abs(Math.cos(d * tn))), t.svg && (s -= u - (u * k + v * w), n -= v - (u * y + v * x))) : (P = p[6], E = p[7], j = p[8], z = p[9], A = p[10], I = p[11], s = p[12], n = p[13], r = p[14], h = sn(P, A), c = h * an, h && (f = Math.cos(-h), b = Math.sin(-h), T = M * f + j * b, C = S * f + z * b, N = P * f + A * b, j = M * -b + j * f, z = S * -b + z * f, A = P * -b + A * f, I = E * -b + I * f, M = T, S = C, P = N), h = sn(-w, A), _ = h * an, h && (f = Math.cos(-h), b = Math.sin(-h), T = k * f - j * b, C = y * f - z * b, N = w * f - A * b, I = x * b + I * f, k = T, y = C, w = N), h = sn(y, k), l = h * an, h && (f = Math.cos(h), b = Math.sin(h), T = k * f + y * b, C = M * f + S * b, y = y * f - k * b, S = S * f - M * b, k = T, M = C), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, _ = 180 - _), i = ua(Math.sqrt(k * k + y * y + w * w)), o = ua(Math.sqrt(S * S + P * P)), h = sn(M, S), d = Math.abs(h) > 2e-4 ? h * an : 0, m = I ? 1 / (I < 0 ? -I : I) : 0), t.svg && (T = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !Yn(Nn(e, yn)), T && e.setAttribute("transform", T))), Math.abs(d) > 90 && Math.abs(d) < 270 && (O ? (i *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, d += d <= 0 ? 180 : -180)), a = a || t.uncache, t.x = s - ((t.xPercent = s && (!a && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + D, t.y = n - ((t.yPercent = n && (!a && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + D, t.z = r + D, t.scaleX = ua(i), t.scaleY = ua(o), t.rotation = ua(l) + R, t.rotationX = ua(c) + R, t.rotationY = ua(_) + R, t.skewX = d + R, t.skewY = g + R, t.transformPerspective = m + D, (t.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (L[wn] = er(B)), t.xOffset = t.yOffset = 0, t.force3D = be.force3D, t.renderTransform = t.svg ? or : Qs ? ir : tr, t.uncache = 0, t
        },
        er = e => (e = e.split(" "))[0] + " " + e[1],
        ar = (e, a, t) => {
          let s = Ja(a);
          return ua(parseFloat(a) + parseFloat(Bn(e, "x", t + "px", s))) + s
        },
        tr = (e, a) => {
          a.z = "0px", a.rotationY = a.rotationX = "0deg", a.force3D = 0, ir(e, a)
        },
        sr = "0deg",
        nr = "0px",
        rr = ") ",
        ir = function(e, a) {
          let {
            xPercent: t,
            yPercent: s,
            x: n,
            y: r,
            z: i,
            rotation: o,
            rotationY: l,
            rotationX: c,
            skewX: _,
            skewY: d,
            scaleX: g,
            scaleY: m,
            transformPerspective: u,
            force3D: v,
            target: p,
            zOrigin: h
          } = a || this, f = "", b = "auto" === v && e && 1 !== e || !0 === v;
          if (h && (c !== sr || l !== sr)) {
            let e, a = parseFloat(l) * tn,
              t = Math.sin(a),
              s = Math.cos(a);
            a = parseFloat(c) * tn, e = Math.cos(a), n = ar(p, n, t * e * -h), r = ar(p, r, -Math.sin(a) * -h), i = ar(p, i, s * e * -h + h)
          }
          u !== nr && (f += "perspective(" + u + rr), (t || s) && (f += "translate(" + t + "%, " + s + "%) "), (b || n !== nr || r !== nr || i !== nr) && (f += i !== nr || b ? "translate3d(" + n + ", " + r + ", " + i + ") " : "translate(" + n + ", " + r + rr), o !== sr && (f += "rotate(" + o + rr), l !== sr && (f += "rotateY(" + l + rr), c !== sr && (f += "rotateX(" + c + rr), _ === sr && d === sr || (f += "skew(" + _ + ", " + d + rr), 1 === g && 1 === m || (f += "scale(" + g + ", " + m + rr), p.style[yn] = f || "translate(0, 0)"
        },
        or = function(e, a) {
          let t, s, n, r, i, {
              xPercent: o,
              yPercent: l,
              x: c,
              y: _,
              rotation: d,
              skewX: g,
              skewY: m,
              scaleX: u,
              scaleY: v,
              target: p,
              xOrigin: h,
              yOrigin: f,
              xOffset: b,
              yOffset: k,
              forceCSS: y
            } = a || this,
            w = parseFloat(c),
            x = parseFloat(_);
          d = parseFloat(d), g = parseFloat(g), m = parseFloat(m), m && (m = parseFloat(m), g += m, d += m), d || g ? (d *= tn, g *= tn, t = Math.cos(d) * u, s = Math.sin(d) * u, n = Math.sin(d - g) * -v, r = Math.cos(d - g) * v, g && (m *= tn, i = Math.tan(g - m), i = Math.sqrt(1 + i * i), n *= i, r *= i, m && (i = Math.tan(m), i = Math.sqrt(1 + i * i), t *= i, s *= i)), t = ua(t), s = ua(s), n = ua(n), r = ua(r)) : (t = u, r = v, s = n = 0), (w && !~(c + "").indexOf("px") || x && !~(_ + "").indexOf("px")) && (w = Bn(p, "x", c, "px"), x = Bn(p, "y", _, "px")), (h || f || b || k) && (w = ua(w + h - (h * t + f * n) + b), x = ua(x + f - (h * s + f * r) + k)), (o || l) && (i = p.getBBox(), w = ua(w + o / 100 * i.width), x = ua(x + l / 100 * i.height)), i = "matrix(" + t + "," + s + "," + n + "," + r + "," + w + "," + x + ")", p.setAttribute("transform", i), y && (p.style[yn] = i)
        },
        lr = function(e, a, t, s, n) {
          let r, i, o = 360,
            l = je(n),
            c = parseFloat(n) * (l && ~n.indexOf("rad") ? an : 1) - s,
            _ = s + c + "deg";
          return l && (r = n.split("_")[1], "short" === r && (c %= o, c !== c % 180 && (c += c < 0 ? o : -360)), "cw" === r && c < 0 ? c = (c + 36e9) % o - ~~(c / o) * o : "ccw" === r && c > 0 && (c = (c - 36e9) % o - ~~(c / o) * o)), e._pt = i = new ms(e._pt, a, t, s, c, _n), i.e = _, i.u = "deg", e._props.push(t), i
        },
        cr = (e, a) => {
          for (let t in a) e[t] = a[t];
          return e
        },
        _r = (e, a, t) => {
          let s, n, r, i, o, l, c, _, d = cr({}, t._gsap),
            g = t.style;
          for (n in d.svg ? (r = t.getAttribute("transform"), t.setAttribute("transform", ""), g[yn] = a, s = Qn(t, 1), On(t, yn), t.setAttribute("transform", r)) : (r = getComputedStyle(t)[yn], g[yn] = a, s = Qn(t, 1), g[yn] = r), en) r = d[n], i = s[n], r !== i && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (c = Ja(r), _ = Ja(i), o = c !== _ ? Bn(t, n, r, _) : parseFloat(r), l = parseFloat(i), e._pt = new ms(e._pt, s, n, o, l - o, cn), e._pt.u = _ || 0, e._props.push(n));
          cr(s, d)
        };
      ma("padding,margin,Width,Radius", ((e, a) => {
        let t = "Top",
          s = "Right",
          n = "Bottom",
          r = "Left",
          i = (a < 3 ? [t, s, n, r] : [t + r, t + s, n + s, n + r]).map((t => a < 2 ? e + t : "border" + t + e));
        Hn[a > 1 ? "border" + e : e] = function(e, a, t, s, n) {
          let r, o;
          if (arguments.length < 4) return r = i.map((a => Gn(e, a, t))), o = r.join(" "), 5 === o.split(r[0]).length ? r[0] : o;
          r = (s + "").split(" "), o = {}, i.forEach(((e, a) => o[e] = r[a] = r[a] || r[(a - 1) / 2 | 0])), e.init(a, o, n)
        }
      }));
      const dr = {
        name: "css",
        register: An,
        targetTest: e => e.style && e.nodeType,
        init(e, a, t, s, n) {
          let r, i, o, l, c, _, d, g, m, u, v, p, h, f, b, k, y = this._props,
            w = e.style,
            x = t.vars.startAt;
          for (d in Ws || An(), this.styles = this.styles || Tn(e), k = this.styles.props, this.tween = t, a)
            if ("autoRound" !== d && (i = a[d], !ra[d] || !Xt(d, a, t, s, e, n)))
              if (c = typeof i, _ = Hn[d], "function" === c && (i = i.call(t, s, e, n), c = typeof i), "string" === c && ~i.indexOf("random(") && (i = _t(i)), _) _(this, e, d, i, t) && (b = 1);
              else if ("--" === d.substr(0, 2)) r = (getComputedStyle(e).getPropertyValue(d) + "").trim(), i += "", Mt.lastIndex = 0, Mt.test(r) || (g = Ja(r), m = Ja(i)), m ? g !== m && (r = Bn(e, d, r, m) + m) : g && (i += g), this.add(w, "setProperty", r, i, s, n, 0, 0, d), y.push(d), k.push(d, 0, w[d]);
          else if ("undefined" !== c) {
            if (x && d in x ? (r = "function" == typeof x[d] ? x[d].call(t, s, e, n) : x[d], je(r) && ~r.indexOf("random(") && (r = _t(r)), Ja(r + "") || (r += be.units[d] || Ja(Gn(e, d)) || ""), "=" === (r + "").charAt(1) && (r = Gn(e, d))) : r = Gn(e, d), l = parseFloat(r), u = "string" === c && "=" === i.charAt(1) && i.substr(0, 2), u && (i = i.substr(2)), o = parseFloat(i), d in ln && ("autoAlpha" === d && (1 === l && "hidden" === Gn(e, "visibility") && o && (l = 0), k.push("visibility", 0, w.visibility), Dn(this, w, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== d && "transform" !== d && (d = ln[d], ~d.indexOf(",") && (d = d.split(",")[0]))), v = d in en, v)
              if (this.styles.save(d), p || (h = e._gsap, h.renderTransform && !a.parseTransform || Qn(e, a.parseTransform), f = !1 !== a.smoothOrigin && h.smooth, p = this._pt = new ms(this._pt, w, yn, 0, 1, h.renderTransform, h, 0, -1), p.dep = 1), "scale" === d) this._pt = new ms(this._pt, h, "scaleY", h.scaleY, (u ? pa(h.scaleY, u + o) : o) - h.scaleY || 0, cn), this._pt.u = 0, y.push("scaleY", d), d += "X";
              else {
                if ("transformOrigin" === d) {
                  k.push(wn, 0, w[wn]), i = $n(i), h.svg ? Kn(e, i, 0, f, 0, this) : (m = parseFloat(i.split(" ")[2]) || 0, m !== h.zOrigin && Dn(this, h, "zOrigin", h.zOrigin, m), Dn(this, w, d, er(r), er(i)));
                  continue
                }
                if ("svgOrigin" === d) {
                  Kn(e, i, 1, f, 0, this);
                  continue
                }
                if (d in Wn) {
                  lr(this, h, d, l, u ? pa(l, u + i) : i);
                  continue
                }
                if ("smoothOrigin" === d) {
                  Dn(this, h, "smooth", h.smooth, i);
                  continue
                }
                if ("force3D" === d) {
                  h[d] = i;
                  continue
                }
                if ("transform" === d) {
                  _r(this, i, e);
                  continue
                }
              }
            else d in w || (d = zn(d) || d);
            if (v || (o || 0 === o) && (l || 0 === l) && !on.test(i) && d in w) g = (r + "").substr((l + "").length), o || (o = 0), m = Ja(i) || (d in be.units ? be.units[d] : g), g !== m && (l = Bn(e, d, r, m)), this._pt = new ms(this._pt, v ? h : w, d, l, (u ? pa(l, u + o) : o) - l, v || "px" !== m && "zIndex" !== d || !1 === a.autoRound ? cn : gn), this._pt.u = m || 0, g !== m && "%" !== m && (this._pt.b = r, this._pt.r = dn);
            else if (d in w) Fn.call(this, e, d, r, u ? u + i : i);
            else if (d in e) this.add(e, d, r || e[d], u ? u + i : i, s, n);
            else if ("parseTransform" !== d) {
              Ye(d, i);
              continue
            }
            v || (d in w ? k.push(d, 0, w[d]) : k.push(d, 1, r || e[d])), y.push(d)
          }
          b && gs(this)
        },
        render(e, a) {
          if (a.tween._time || !Ks()) {
            let t = a._pt;
            for (; t;) t.r(e, t.d), t = t._next
          } else a.styles.revert()
        },
        get: Gn,
        aliases: ln,
        getSetter(e, a, t) {
          let s = ln[a];
          return s && s.indexOf(",") < 0 && (a = s), a in en && a !== wn && (e._gsap.x || Gn(e, "x")) ? t && Js === t ? "scale" === a ? fn : hn : (Js = t || {}) && ("scale" === a ? bn : kn) : e.style && !Ee(e.style[a]) ? vn : ~a.indexOf("-") ? pn : ns(e, a)
        },
        core: {
          _removeProperty: On,
          _getMatrix: Jn
        }
      };
      Ts.utils.checkPrefix = zn, Ts.core.getStyleSaver = Tn,
        function(e, a, t, s) {
          let n = ma(e + "," + a + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            en[e] = 1
          }));
          ma(a, (e => {
            be.units[e] = "deg", Wn[e] = 1
          })), ln[n[13]] = e + "," + a, ma("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let a = e.split(":");
            ln[a[1]] = n[a[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), ma("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          be.units[e] = "px"
        })), Ts.registerPlugin(dr);
      const gr = Ts.registerPlugin(dr) || Ts;
      gr.core.Tween;
      let mr, ur, vr, pr, hr, fr, br, kr, yr, wr, xr, Mr, Sr, Tr, Cr, Nr, jr = () => "undefined" != typeof window,
        zr = () => mr || jr() && (mr = window.gsap) && mr.registerPlugin && mr,
        Ar = e => wr.maxScroll(e || vr);
      class Er {
        constructor(e) {
          ur || Er.register(mr) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, xr && xr.kill(), xr = this, Cr(this);
          let a, t, s, n, r, i, o, l, c, _, d, g, m, u, v, {
              smoothTouch: p,
              onUpdate: h,
              onStop: f,
              smooth: b,
              onFocusIn: k,
              normalizeScroll: y,
              wholePixels: w
            } = e,
            x = this,
            M = e.effectsPrefix || "",
            S = wr.getScrollFunc(vr),
            T = 1 === wr.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8,
            C = T && +e.speed || 1,
            N = 0,
            j = 0,
            z = 1,
            A = Sr(0),
            E = () => A.update(-N),
            I = {
              y: 0
            },
            P = () => a.style.overflow = "visible",
            L = e => {
              e.update();
              let a = e.getTween();
              a && (a.pause(), a._time = a._dur, a._tTime = a._tDur), u = !1, e.animation.progress(e.progress, !0)
            },
            O = (e, t) => {
              (e !== N && !_ || t) && (w && (e = Math.round(e)), T && (a.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", a._gsap.y = e + "px"), j = e - N, N = e, wr.isUpdating || Er.isRefreshing || wr.update())
            },
            D = function(e) {
              return arguments.length ? (e < 0 && (e = 0), I.y = -e, u = !0, _ ? N = -e : O(-e), wr.isRefreshing ? n.update() : S(e / C), this) : -N
            },
            R = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!wr.isRefreshing) {
                let e = Ar(t) * C;
                e < -N && D(e), Nr.restart(!0)
              }
            })),
            V = e => {
              t.scrollTop = 0, e.target.contains && e.target.contains(t) || k && !1 === k(this, e) || (wr.isInViewport(e.target) || e.target === v || this.scrollTo(e.target, !1, "center center"), v = e.target)
            },
            B = (e, a) => {
              if (e < a.start) return e;
              let t = isNaN(a.ratio) ? 1 : a.ratio,
                s = a.end - a.start,
                n = e - a.start,
                r = a.offset || 0,
                i = a.pins || [],
                o = i.offset || 0,
                l = a._startClamp && a.start <= 0 || a.pins && a.pins.offset ? 0 : a._endClamp && a.end === Ar() ? 1 : .5;
              return i.forEach((a => {
                s -= a.distance, a.nativeStart <= e && (n -= a.distance)
              })), o && (n *= (s - o / t) / s), e + (n - r * l) / t - n
            },
            G = (e, a, t) => {
              t || (e.pins.length = e.pins.offset = 0);
              let s, n, r, i, o, l, c, _, d = e.pins,
                g = e.markers;
              for (c = 0; c < a.length; c++)
                if (_ = a[c], e.trigger && _.trigger && e !== _ && (_.trigger === e.trigger || _.pinnedContainer === e.trigger || e.trigger.contains(_.trigger)) && (o = _._startNative || _._startClamp || _.start, l = _._endNative || _._endClamp || _.end, r = B(o, e), i = _.pin && l > 0 ? r + (l - o) : B(l, e), _.setPositions(r, i, !0, (_._startClamp ? Math.max(0, r) : r) - o), _.markerStart && g.push(mr.quickSetter([_.markerStart, _.markerEnd], "y", "px")), _.pin && _.end > 0 && !t)) {
                  if (s = _.end - _.start, n = e._startClamp && _.start < 0, n) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void G(e, a);
                    s += _.start, d.offset = -_.start
                  }
                  d.push({
                    start: _.start,
                    nativeStart: o,
                    end: _.end,
                    distance: s,
                    trig: _
                  }), e.setPositions(e.start, e.end + (n ? -_.start : s), !0)
                }
            },
            F = (e, a) => {
              r.forEach((t => G(t, e, a)))
            },
            q = () => {
              P(), requestAnimationFrame(P), r && (wr.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), r.forEach((e => {
                let a = e._startClamp || e.start,
                  t = e.autoSpeed ? Math.min(Ar(), e.end) : a + Math.abs((e.end - a) / e.ratio),
                  s = t - e.end;
                if (a -= s / 2, t -= s / 2, a > t) {
                  let e = a;
                  a = t, t = e
                }
                e._startClamp && a < 0 ? (t = e.ratio < 0 ? Ar() : e.end / e.ratio, s = t - e.end, a = 0) : (e.ratio < 0 || e._endClamp && t >= Ar()) && (t = Ar(), a = e.ratio < 0 || e.ratio > 1 ? 0 : t - (t - e.start) / e.ratio, s = (t - a) * e.ratio - (e.end - e.start)), e.offset = s || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(a, t, !0)
              })), F(wr.sort())), A.reset()
            },
            $ = () => wr.addEventListener("refresh", q),
            U = () => r && r.forEach((e => e.vars.onRefresh(e))),
            H = () => (r && r.forEach((e => e.vars.onRefreshInit(e))), U),
            X = (e, a, t, s) => () => {
              let n = "function" == typeof a ? a(t, s) : a;
              n || 0 === n || (n = s.getAttribute("data-" + M + e) || ("speed" === e ? 1 : 0)), s.setAttribute("data-" + M + e, n);
              let r = "clamp(" === (n + "").substr(0, 6);
              return {
                clamp: r,
                value: r ? n.substr(6, n.length - 7) : n
              }
            },
            W = (e, a, s, n, i) => {
              i = ("function" == typeof i ? i(n, e) : i) || 0;
              let o, l, c, _, d, g, m = X("speed", a, n, e),
                u = X("lag", s, n, e),
                v = mr.getProperty(e, "y"),
                p = e._gsap,
                h = [],
                f = () => {
                  a = m(), s = parseFloat(u().value), o = parseFloat(a.value) || 1, c = "auto" === a.value, d = c || l && l._startClamp && l.start <= 0 || h.offset ? 0 : l && l._endClamp && l.end === Ar() ? 1 : .5, _ && _.kill(), _ = s && mr.to(e, {
                    ease: Mr,
                    overwrite: !1,
                    y: "+=0",
                    duration: s
                  }), l && (l.ratio = o, l.autoSpeed = c)
                },
                b = () => {
                  p.y = v + "px", p.renderTransform(1), f()
                },
                k = [],
                y = 0,
                w = a => {
                  if (c) {
                    b();
                    let t = ((e, a) => {
                      let t, s, n = e.parentNode || hr,
                        r = e.getBoundingClientRect(),
                        i = n.getBoundingClientRect(),
                        o = i.top - r.top,
                        l = i.bottom - r.bottom,
                        c = (Math.abs(o) > Math.abs(l) ? o : l) / (1 - a),
                        _ = -c * a;
                      return c > 0 && (t = i.height / (vr.innerHeight + i.height), s = .5 === t ? 2 * i.height : 2 * Math.min(i.height, Math.abs(-c * t / (2 * t - 1))) * (a || 1), _ += a ? -s * a : -s / 2, c += s), {
                        change: c,
                        offset: _
                      }
                    })(e, yr(0, 1, -a.start / (a.end - a.start)));
                    y = t.change, g = t.offset
                  } else g = h.offset || 0, y = (a.end - a.start - g) * (1 - o);
                  h.forEach((e => y -= e.distance * (1 - o))), a.offset = y || .001, a.vars.onUpdate(a), _ && _.progress(1)
                };
              return f(), (1 !== o || c || _) && (l = wr.create({
                trigger: c ? e.parentNode : e,
                start: () => a.clamp ? "clamp(top bottom+=" + i + ")" : "top bottom+=" + i,
                end: () => a.value < 0 ? "max" : a.clamp ? "clamp(bottom top-=" + i + ")" : "bottom top-=" + i,
                scroller: t,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: b,
                onRefresh: w,
                onKill: e => {
                  let a = r.indexOf(e);
                  a >= 0 && r.splice(a, 1), b()
                },
                onUpdate: e => {
                  let a, t, s, n = v + y * (e.progress - d),
                    r = h.length,
                    i = 0;
                  if (e.offset) {
                    if (r) {
                      for (t = -N, s = e.end; r--;) {
                        if (a = h[r], a.trig.isActive || t >= a.start && t <= a.end) return void(_ && (a.trig.progress += a.trig.direction < 0 ? .001 : -.001, a.trig.update(0, 0, 1), _.resetTo("y", parseFloat(p.y), -j, !0), z && _.progress(1)));
                        t > a.end && (i += a.distance), s -= a.distance
                      }
                      n = v + i + y * ((mr.utils.clamp(e.start, e.end, t) - e.start - i) / (s - e.start) - d)
                    }
                    k.length && !c && k.forEach((e => e(n - i))), o = n + g, n = Math.round(1e5 * o) / 1e5 || 0, _ ? (_.resetTo("y", n, -j, !0), z && _.progress(1)) : (p.y = n + "px", p.renderTransform(1))
                  }
                  var o
                }
              }), w(l), mr.core.getCache(l.trigger).stRevert = H, l.startY = v, l.pins = h, l.markers = k, l.ratio = o, l.autoSpeed = c, e.style.willChange = "transform"), l
            };

          function Y() {
            return s = a.clientHeight, a.style.overflow = "visible", fr.style.height = vr.innerHeight + (s - vr.innerHeight) / C + "px", s - vr.innerHeight
          }
          $(), wr.addEventListener("killAll", $), mr.delayedCall(.5, (() => z = 0)), this.scrollTop = D, this.scrollTo = (e, a, t) => {
            let s = mr.utils.clamp(0, Ar(), isNaN(e) ? this.offset(e, t) : +e);
            a ? _ ? mr.to(this, {
              duration: T,
              scrollTop: s,
              overwrite: "auto",
              ease: Mr
            }) : S(s) : D(s)
          }, this.offset = (e, a) => {
            let t, s = (e = kr(e)[0]).style.cssText,
              n = wr.create({
                trigger: e,
                start: a || "top top"
              });
            return r && (z ? wr.refresh() : F([n], !0)), t = n.start / C, n.kill(!1), e.style.cssText = s, mr.core.getCache(e).uncache = 1, t
          }, this.content = function(e) {
            if (arguments.length) {
              let t = kr(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || fr.children[0];
              return t !== a && (a = t, c = a.getAttribute("style") || "", R && R.observe(a), mr.set(a, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), T || mr.set(a, {
                clearProps: "transform"
              })), this
            }
            return a
          }, this.wrapper = function(e) {
            return arguments.length ? (t = kr(e || "#smooth-wrapper")[0] || (e => {
              let a = pr.querySelector(".ScrollSmoother-wrapper");
              return a || (a = pr.createElement("div"), a.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(a, e), a.appendChild(e)), a
            })(a), l = t.getAttribute("style") || "", Y(), mr.set(t, T ? {
              overflow: "hidden",
              position: "fixed",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            } : {
              overflow: "visible",
              position: "relative",
              width: "100%",
              height: "auto",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto"
            }), this) : t
          }, this.effects = (e, a) => {
            if (r || (r = []), !e) return r.slice(0);
            (e = kr(e)).forEach((e => {
              let a = r.length;
              for (; a--;) r[a].trigger === e && r[a].kill()
            })), a = a || {};
            let t, s, {
                speed: n,
                lag: i,
                effectsPadding: o
              } = a,
              l = [];
            for (t = 0; t < e.length; t++) s = W(e[t], n, i, t, o), s && l.push(s);
            return r.push(...l), l
          }, this.sections = (e, a) => {
            if (i || (i = []), !e) return i.slice(0);
            let t = kr(e).map((e => wr.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: a => {
                e.style.opacity = a.isActive ? "1" : "0", e.style.pointerEvents = a.isActive ? "all" : "none"
              }
            })));
            return a && a.add ? i.push(...t) : i = t.slice(0), t
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => O(e || 0 === e ? e : N), this.getVelocity = () => A.getVelocity(-N), wr.scrollerProxy(t, {
            scrollTop: D,
            scrollHeight: () => Y() && fr.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!T,
            content: a,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: vr.innerWidth,
              height: vr.innerHeight
            })
          }), wr.defaults({
            scroller: t
          });
          let Z = wr.getAll().filter((e => e.scroller === vr || e.scroller === t));
          Z.forEach((e => e.revert(!0, !0))), n = wr.create({
            animation: mr.fromTo(I, {
              y: 0
            }, {
              y: () => -Y(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = u;
                  e && (L(n), I.y = N), O(I.y, e), E(), h && !_ && h(x)
                }
              }
            }),
            onRefreshInit: e => {
              if (Er.isRefreshing) return;
              if (Er.isRefreshing = !0, r) {
                let e = wr.getAll().filter((e => !!e.pin));
                r.forEach((a => {
                  a.vars.pinnedContainer || e.forEach((e => {
                    if (e.pin.contains(a.trigger)) {
                      let t = a.vars;
                      t.pinnedContainer = e.pin, a.vars = null, a.init(t, a.animation)
                    }
                  }))
                }))
              }
              let a = e.getTween();
              m = a && a._end > a._dp._time, g = N, I.y = 0, T && (1 === wr.isTouch && (t.style.position = "absolute"), t.scrollTop = 0, 1 === wr.isTouch && (t.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, Y() / C), m || L(e), I.y = -S() * C, O(I.y), z || e.animation.progress(mr.utils.clamp(0, 1, g / C / -e.end)), m && (e.progress -= .001, e.update()), Er.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: vr,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => Y() / C,
            onScrubComplete: () => {
              A.reset(), f && f(this)
            },
            scrub: T || !0
          }), this.smooth = function(a) {
            return arguments.length && (T = a || 0, C = T && +e.speed || 1, n.scrubDuration(a)), n.getTween() ? n.getTween().duration() : 0
          }, n.getTween() && (n.getTween().vars.ease = e.ease || Mr), this.scrollTrigger = n, e.effects && this.effects(!0 === e.effects ? "[data-" + M + "speed], [data-" + M + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), Z.forEach((e => {
            e.vars.scroller = t, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, a) {
            return arguments.length ? (!!_ !== e && (e ? (n.getTween() && n.getTween().pause(), S(-N / C), A.reset(), d = wr.normalizeScroll(), d && d.disable(), _ = wr.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => D(-N)
            }), _.nested = Tr(hr, "wheel,touch,scroll", !0, !1 !== a)) : (_.nested.kill(), _.kill(), _ = 0, d && d.enable(), n.progress = (-N / C - n.start) / (n.end - n.start), L(n))), this) : !!_
          }, this.kill = this.revert = () => {
            this.paused(!1), L(n), n.kill();
            let e = (r || []).concat(i || []),
              s = e.length;
            for (; s--;) e[s].kill();
            wr.scrollerProxy(t), wr.removeEventListener("killAll", $), wr.removeEventListener("refresh", q), t.style.cssText = l, a.style.cssText = c;
            let _ = wr.defaults({});
            _ && _.scroller === t && wr.defaults({
              scroller: vr
            }), this.normalizer && wr.normalizeScroll(!1), clearInterval(o), xr = null, R && R.disconnect(), fr.style.removeProperty("height"), vr.removeEventListener("focusin", V)
          }, this.refresh = (e, a) => n.refresh(e, a), y && (this.normalizer = wr.normalizeScroll(!0 === y ? {
            debounce: !0,
            content: !T && a
          } : y)), wr.config(e), "overscrollBehavior" in vr.getComputedStyle(fr) && mr.set([fr, hr], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in vr.getComputedStyle(fr) && mr.set([fr, hr], {
            scrollBehavior: "auto"
          }), vr.addEventListener("focusin", V), o = setInterval(E, 250), "loading" === pr.readyState || requestAnimationFrame((() => wr.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return ur || (mr = e || zr(), jr() && window.document && (vr = window, pr = document, hr = pr.documentElement, fr = pr.body), mr && (kr = mr.utils.toArray, yr = mr.utils.clamp, Mr = mr.parseEase("expo"), Cr = mr.core.context || function() {}, wr = mr.core.globals().ScrollTrigger, mr.core.globals("ScrollSmoother", Er), fr && wr && (Nr = mr.delayedCall(.2, (() => wr.isRefreshing || xr && xr.refresh())).pause(), br = [vr, pr, hr, fr], Sr = wr.core._getVelocityProp, Tr = wr.core._inputObserver, Er.refresh = wr.refresh, ur = 1))), ur
        }
      }
      Er.version = "3.12.2", Er.create = e => xr && e && xr.content() === kr(e.content)[0] ? xr : new Er(e), Er.get = () => xr, zr() && mr.registerPlugin(Er);
      let Ir, Pr, Lr, Or, Dr, Rr, Vr, Br, Gr = () => "undefined" != typeof window,
        Fr = () => Ir || Gr() && (Ir = window.gsap) && Ir.registerPlugin && Ir,
        qr = e => "string" == typeof e,
        $r = e => "function" == typeof e,
        Ur = (e, a) => {
          let t = "x" === a ? "Width" : "Height",
            s = "scroll" + t,
            n = "client" + t;
          return e === Lr || e === Or || e === Dr ? Math.max(Or[s], Dr[s]) - (Lr["inner" + t] || Or[n] || Dr[n]) : e[s] - e["offset" + t]
        },
        Hr = (e, a) => {
          let t = "scroll" + ("x" === a ? "Left" : "Top");
          return e === Lr && (null != e.pageXOffset ? t = "page" + a.toUpperCase() + "Offset" : e = null != Or[t] ? Or : Dr), () => e[t]
        },
        Xr = (e, a) => {
          if (!(e = Rr(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let t = e.getBoundingClientRect(),
            s = !a || a === Lr || a === Dr,
            n = s ? {
              top: Or.clientTop - (Lr.pageYOffset || Or.scrollTop || Dr.scrollTop || 0),
              left: Or.clientLeft - (Lr.pageXOffset || Or.scrollLeft || Dr.scrollLeft || 0)
            } : a.getBoundingClientRect(),
            r = {
              x: t.left - n.left,
              y: t.top - n.top
            };
          return !s && a && (r.x += Hr(a, "x")(), r.y += Hr(a, "y")()), r
        },
        Wr = (e, a, t, s, n) => isNaN(e) || "object" == typeof e ? qr(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + s - n : "max" === e ? Ur(a, t) - n : Math.min(Ur(a, t), Xr(e, a)[t] - n) : parseFloat(e) - n,
        Yr = () => {
          Ir = Fr(), Gr() && Ir && "undefined" != typeof document && document.body && (Lr = window, Dr = document.body, Or = document.documentElement, Rr = Ir.utils.toArray, Ir.config({
            autoKillThreshold: 7
          }), Vr = Ir.config(), Pr = 1)
        };
      const Zr = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          Ir = e, Yr()
        },
        init(e, a, t, s, n) {
          Pr || Yr();
          let r = this,
            i = Ir.getProperty(e, "scrollSnapType");
          r.isWin = e === Lr, r.target = e, r.tween = t, a = ((e, a, t, s) => {
            if ($r(e) && (e = e(a, t, s)), "object" != typeof e) return qr(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let n, r = {};
              for (n in e) r[n] = "onAutoKill" !== n && $r(e[n]) ? e[n](a, t, s) : e[n];
              return r
            }
          })(a, s, e, n), r.vars = a, r.autoKill = !!a.autoKill, r.getX = Hr(e, "x"), r.getY = Hr(e, "y"), r.x = r.xPrev = r.getX(), r.y = r.yPrev = r.getY(), Br || (Br = Ir.core.globals().ScrollTrigger), "smooth" === Ir.getProperty(e, "scrollBehavior") && Ir.set(e, {
            scrollBehavior: "auto"
          }), i && "none" !== i && (r.snap = 1, r.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != a.x ? (r.add(r, "x", r.x, Wr(a.x, e, "x", r.x, a.offsetX || 0), s, n), r._props.push("scrollTo_x")) : r.skipX = 1, null != a.y ? (r.add(r, "y", r.y, Wr(a.y, e, "y", r.y, a.offsetY || 0), s, n), r._props.push("scrollTo_y")) : r.skipY = 1
        },
        render(e, a) {
          let t, s, n, r, i, o = a._pt,
            {
              target: l,
              tween: c,
              autoKill: _,
              xPrev: d,
              yPrev: g,
              isWin: m,
              snap: u,
              snapInline: v
            } = a;
          for (; o;) o.r(e, o.d), o = o._next;
          t = m || !a.skipX ? a.getX() : d, s = m || !a.skipY ? a.getY() : g, n = s - g, r = t - d, i = Vr.autoKillThreshold, a.x < 0 && (a.x = 0), a.y < 0 && (a.y = 0), _ && (!a.skipX && (r > i || r < -i) && t < Ur(l, "x") && (a.skipX = 1), !a.skipY && (n > i || n < -i) && s < Ur(l, "y") && (a.skipY = 1), a.skipX && a.skipY && (c.kill(), a.vars.onAutoKill && a.vars.onAutoKill.apply(c, a.vars.onAutoKillParams || []))), m ? Lr.scrollTo(a.skipX ? t : a.x, a.skipY ? s : a.y) : (a.skipY || (l.scrollTop = a.y), a.skipX || (l.scrollLeft = a.x)), !u || 1 !== e && 0 !== e || (s = l.scrollTop, t = l.scrollLeft, v ? l.style.scrollSnapType = v : l.style.removeProperty("scroll-snap-type"), l.scrollTop = s + 1, l.scrollLeft = t + 1, l.scrollTop = s, l.scrollLeft = t), a.xPrev = a.x, a.yPrev = a.y, Br && Br.update()
        },
        kill(e) {
          let a = "scrollTo" === e;
          (a || "scrollTo_x" === e) && (this.skipX = 1), (a || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      Zr.max = Ur, Zr.getOffset = Xr, Zr.buildGetter = Hr, Fr() && Ir.registerPlugin(Zr);
      let Jr, Kr, Qr, ei, ai, ti, si, ni, ri, ii, oi, li, ci, _i, di = () => Jr || "undefined" != typeof window && (Jr = window.gsap) && Jr.registerPlugin && Jr,
        gi = 1,
        mi = [],
        ui = [],
        vi = [],
        pi = Date.now,
        hi = (e, a) => a,
        fi = (e, a) => ~vi.indexOf(e) && vi[vi.indexOf(e) + 1][a],
        bi = e => !!~oi.indexOf(e),
        ki = (e, a, t, s, n) => e.addEventListener(a, t, {
          passive: !s,
          capture: !!n
        }),
        yi = (e, a, t, s) => e.removeEventListener(a, t, !!s),
        wi = "scrollLeft",
        xi = "scrollTop",
        Mi = () => li && li.isPressed || ui.cache++,
        Si = (e, a) => {
          let t = s => {
            if (s || 0 === s) {
              gi && (ei.history.scrollRestoration = "manual");
              let a = li && li.isPressed;
              s = t.v = Math.round(s) || (li && li.iOS ? 1 : 0), e(s), t.cacheID = ui.cache, a && hi("ss", s)
            } else(a || ui.cache !== t.cacheID || hi("ref")) && (t.cacheID = ui.cache, t.v = e());
            return t.v + t.offset
          };
          return t.offset = 0, e && t
        },
        Ti = {
          s: wi,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: Si((function(e) {
            return arguments.length ? ei.scrollTo(e, Ci.sc()) : ei.pageXOffset || ai[wi] || ti[wi] || si[wi] || 0
          }))
        },
        Ci = {
          s: xi,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Ti,
          sc: Si((function(e) {
            return arguments.length ? ei.scrollTo(Ti.sc(), e) : ei.pageYOffset || ai[xi] || ti[xi] || si[xi] || 0
          }))
        },
        Ni = (e, a) => (a && a._ctx && a._ctx.selector || Jr.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Jr.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        ji = (e, a) => {
          let {
            s: t,
            sc: s
          } = a;
          bi(e) && (e = ai.scrollingElement || ti);
          let n = ui.indexOf(e),
            r = s === Ci.sc ? 1 : 2;
          !~n && (n = ui.push(e) - 1), ui[n + r] || ki(e, "scroll", Mi);
          let i = ui[n + r],
            o = i || (ui[n + r] = Si(fi(e, t), !0) || (bi(e) ? s : Si((function(a) {
              return arguments.length ? e[t] = a : e[t]
            }))));
          return o.target = e, i || (o.smooth = "smooth" === Jr.getProperty(e, "scrollBehavior")), o
        },
        zi = (e, a, t) => {
          let s = e,
            n = e,
            r = pi(),
            i = r,
            o = a || 50,
            l = Math.max(500, 3 * o),
            c = (e, a) => {
              let l = pi();
              a || l - r > o ? (n = s, s = e, i = r, r = l) : t ? s += e : s = n + (e - n) / (l - i) * (r - i)
            };
          return {
            update: c,
            reset: () => {
              n = s = t ? 0 : s, i = r = 0
            },
            getVelocity: e => {
              let a = i,
                o = n,
                _ = pi();
              return (e || 0 === e) && e !== s && c(e), r === i || _ - i > l ? 0 : (s + (t ? o : -o)) / ((t ? _ : r) - a) * 1e3
            }
          }
        },
        Ai = (e, a) => (a && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        Ei = e => {
          let a = Math.max(...e),
            t = Math.min(...e);
          return Math.abs(a) >= Math.abs(t) ? a : t
        },
        Ii = () => {
          ii = Jr.core.globals().ScrollTrigger, ii && ii.core && (() => {
            let e = ii.core,
              a = e.bridge || {},
              t = e._scrollers,
              s = e._proxies;
            t.push(...ui), s.push(...vi), ui = t, vi = s, hi = (e, t) => a[e](t)
          })()
        },
        Pi = e => (Jr = e || di(), Jr && "undefined" != typeof document && document.body && (ei = window, ai = document, ti = ai.documentElement, si = ai.body, oi = [ei, ai, ti, si], Qr = Jr.utils.clamp, _i = Jr.core.context || function() {}, ri = "onpointerenter" in si ? "pointer" : "mouse", ni = Li.isTouch = ei.matchMedia && ei.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ei || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, ci = Li.eventTypes = ("ontouchstart" in ti ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ti ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => gi = 0), 500), Ii(), Kr = 1), Kr);
      Ti.op = Ci, ui.cache = 0;
      class Li {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          Kr || Pi(Jr) || console.warn("Please gsap.registerPlugin(Observer)"), ii || Ii();
          let {
            tolerance: a,
            dragMinimum: t,
            type: s,
            target: n,
            lineHeight: r,
            debounce: i,
            preventDefault: o,
            onStop: l,
            onStopDelay: c,
            ignore: _,
            wheelSpeed: d,
            event: g,
            onDragStart: m,
            onDragEnd: u,
            onDrag: v,
            onPress: p,
            onRelease: h,
            onRight: f,
            onLeft: b,
            onUp: k,
            onDown: y,
            onChangeX: w,
            onChangeY: x,
            onChange: M,
            onToggleX: S,
            onToggleY: T,
            onHover: C,
            onHoverEnd: N,
            onMove: j,
            ignoreCheck: z,
            isNormalizer: A,
            onGestureStart: E,
            onGestureEnd: I,
            onWheel: P,
            onEnable: L,
            onDisable: O,
            onClick: D,
            scrollSpeed: R,
            capture: V,
            allowClicks: B,
            lockAxis: G,
            onLockAxis: F
          } = e;
          this.target = n = Ni(n) || ti, this.vars = e, _ && (_ = Jr.utils.toArray(_)), a = a || 1e-9, t = t || 0, d = d || 1, R = R || 1, s = s || "wheel,touch,pointer", i = !1 !== i, r || (r = parseFloat(ei.getComputedStyle(si).lineHeight) || 22);
          let q, $, U, H, X, W, Y, Z = this,
            J = 0,
            K = 0,
            Q = ji(n, Ti),
            ee = ji(n, Ci),
            ae = Q(),
            te = ee(),
            se = ~s.indexOf("touch") && !~s.indexOf("pointer") && "pointerdown" === ci[0],
            ne = bi(n),
            re = n.ownerDocument || ai,
            ie = [0, 0, 0],
            oe = [0, 0, 0],
            le = 0,
            ce = () => le = pi(),
            _e = (e, a) => (Z.event = e) && _ && ~_.indexOf(e.target) || a && se && "touch" !== e.pointerType || z && z(e, a),
            de = () => {
              let e = Z.deltaX = Ei(ie),
                t = Z.deltaY = Ei(oe),
                s = Math.abs(e) >= a,
                n = Math.abs(t) >= a;
              M && (s || n) && M(Z, e, t, ie, oe), s && (f && Z.deltaX > 0 && f(Z), b && Z.deltaX < 0 && b(Z), w && w(Z), S && Z.deltaX < 0 != J < 0 && S(Z), J = Z.deltaX, ie[0] = ie[1] = ie[2] = 0), n && (y && Z.deltaY > 0 && y(Z), k && Z.deltaY < 0 && k(Z), x && x(Z), T && Z.deltaY < 0 != K < 0 && T(Z), K = Z.deltaY, oe[0] = oe[1] = oe[2] = 0), (H || U) && (j && j(Z), U && (v(Z), U = !1), H = !1), W && !(W = !1) && F && F(Z), X && (P(Z), X = !1), q = 0
            },
            ge = (e, a, t) => {
              ie[t] += e, oe[t] += a, Z._vx.update(e), Z._vy.update(a), i ? q || (q = requestAnimationFrame(de)) : de()
            },
            me = (e, a) => {
              G && !Y && (Z.axis = Y = Math.abs(e) > Math.abs(a) ? "x" : "y", W = !0), "y" !== Y && (ie[2] += e, Z._vx.update(e, !0)), "x" !== Y && (oe[2] += a, Z._vy.update(a, !0)), i ? q || (q = requestAnimationFrame(de)) : de()
            },
            ue = e => {
              if (_e(e, 1)) return;
              let a = (e = Ai(e, o)).clientX,
                s = e.clientY,
                n = a - Z.x,
                r = s - Z.y,
                i = Z.isDragging;
              Z.x = a, Z.y = s, (i || Math.abs(Z.startX - a) >= t || Math.abs(Z.startY - s) >= t) && (v && (U = !0), i || (Z.isDragging = !0), me(n, r), i || m && m(Z))
            },
            ve = Z.onPress = e => {
              _e(e, 1) || e && e.button || (Z.axis = Y = null, $.pause(), Z.isPressed = !0, e = Ai(e), J = K = 0, Z.startX = Z.x = e.clientX, Z.startY = Z.y = e.clientY, Z._vx.reset(), Z._vy.reset(), ki(A ? n : re, ci[1], ue, o, !0), Z.deltaX = Z.deltaY = 0, p && p(Z))
            },
            pe = Z.onRelease = e => {
              if (_e(e, 1)) return;
              yi(A ? n : re, ci[1], ue, !0);
              let a = !isNaN(Z.y - Z.startY),
                t = Z.isDragging && (Math.abs(Z.x - Z.startX) > 3 || Math.abs(Z.y - Z.startY) > 3),
                s = Ai(e);
              !t && a && (Z._vx.reset(), Z._vy.reset(), o && B && Jr.delayedCall(.08, (() => {
                if (pi() - le > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (re.createEvent) {
                  let a = re.createEvent("MouseEvents");
                  a.initMouseEvent("click", !0, !0, ei, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(a)
                }
              }))), Z.isDragging = Z.isGesturing = Z.isPressed = !1, l && !A && $.restart(!0), u && t && u(Z), h && h(Z, t)
            },
            he = e => e.touches && e.touches.length > 1 && (Z.isGesturing = !0) && E(e, Z.isDragging),
            fe = () => (Z.isGesturing = !1) || I(Z),
            be = e => {
              if (_e(e)) return;
              let a = Q(),
                t = ee();
              ge((a - ae) * R, (t - te) * R, 1), ae = a, te = t, l && $.restart(!0)
            },
            ke = e => {
              if (_e(e)) return;
              e = Ai(e, o), P && (X = !0);
              let a = (1 === e.deltaMode ? r : 2 === e.deltaMode ? ei.innerHeight : 1) * d;
              ge(e.deltaX * a, e.deltaY * a, 0), l && !A && $.restart(!0)
            },
            ye = e => {
              if (_e(e)) return;
              let a = e.clientX,
                t = e.clientY,
                s = a - Z.x,
                n = t - Z.y;
              Z.x = a, Z.y = t, H = !0, (s || n) && me(s, n)
            },
            we = e => {
              Z.event = e, C(Z)
            },
            xe = e => {
              Z.event = e, N(Z)
            },
            Me = e => _e(e) || Ai(e, o) && D(Z);
          $ = Z._dc = Jr.delayedCall(c || .25, (() => {
            Z._vx.reset(), Z._vy.reset(), $.pause(), l && l(Z)
          })).pause(), Z.deltaX = Z.deltaY = 0, Z._vx = zi(0, 50, !0), Z._vy = zi(0, 50, !0), Z.scrollX = Q, Z.scrollY = ee, Z.isDragging = Z.isGesturing = Z.isPressed = !1, _i(this), Z.enable = e => (Z.isEnabled || (ki(ne ? re : n, "scroll", Mi), s.indexOf("scroll") >= 0 && ki(ne ? re : n, "scroll", be, o, V), s.indexOf("wheel") >= 0 && ki(n, "wheel", ke, o, V), (s.indexOf("touch") >= 0 && ni || s.indexOf("pointer") >= 0) && (ki(n, ci[0], ve, o, V), ki(re, ci[2], pe), ki(re, ci[3], pe), B && ki(n, "click", ce, !1, !0), D && ki(n, "click", Me), E && ki(re, "gesturestart", he), I && ki(re, "gestureend", fe), C && ki(n, ri + "enter", we), N && ki(n, ri + "leave", xe), j && ki(n, ri + "move", ye)), Z.isEnabled = !0, e && e.type && ve(e), L && L(Z)), Z), Z.disable = () => {
            Z.isEnabled && (mi.filter((e => e !== Z && bi(e.target))).length || yi(ne ? re : n, "scroll", Mi), Z.isPressed && (Z._vx.reset(), Z._vy.reset(), yi(A ? n : re, ci[1], ue, !0)), yi(ne ? re : n, "scroll", be, V), yi(n, "wheel", ke, V), yi(n, ci[0], ve, V), yi(re, ci[2], pe), yi(re, ci[3], pe), yi(n, "click", ce, !0), yi(n, "click", Me), yi(re, "gesturestart", he), yi(re, "gestureend", fe), yi(n, ri + "enter", we), yi(n, ri + "leave", xe), yi(n, ri + "move", ye), Z.isEnabled = Z.isPressed = Z.isDragging = !1, O && O(Z))
          }, Z.kill = Z.revert = () => {
            Z.disable();
            let e = mi.indexOf(Z);
            e >= 0 && mi.splice(e, 1), li === Z && (li = 0)
          }, mi.push(Z), A && bi(n) && (li = Z), Z.enable(g)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      Li.version = "3.12.2", Li.create = e => new Li(e), Li.register = Pi, Li.getAll = () => mi.slice(), Li.getById = e => mi.filter((a => a.vars.id === e))[0], di() && Jr.registerPlugin(Li);
      let Oi, Di, Ri, Vi, Bi, Gi, Fi, qi, $i, Ui, Hi, Xi, Wi, Yi, Zi, Ji, Ki, Qi, eo, ao, to, so, no, ro, io, oo, lo, co, _o, go, mo, uo, vo, po, ho, fo, bo = 1,
        ko = Date.now,
        yo = ko(),
        wo = 0,
        xo = 0,
        Mo = (e, a, t) => {
          let s = Ro(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return t["_" + a + "Clamp"] = s, s ? e.substr(6, e.length - 7) : e
        },
        So = (e, a) => !a || Ro(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        To = () => xo && requestAnimationFrame(To),
        Co = () => Yi = 1,
        No = () => Yi = 0,
        jo = e => e,
        zo = e => Math.round(1e5 * e) / 1e5 || 0,
        Ao = () => "undefined" != typeof window,
        Eo = () => Oi || Ao() && (Oi = window.gsap) && Oi.registerPlugin && Oi,
        Io = e => !!~Fi.indexOf(e),
        Po = e => ("Height" === e ? mo : Ri["inner" + e]) || Bi["client" + e] || Gi["client" + e],
        Lo = e => fi(e, "getBoundingClientRect") || (Io(e) ? () => (Xl.width = Ri.innerWidth, Xl.height = mo, Xl) : () => ol(e)),
        Oo = (e, a) => {
          let {
            s: t,
            d2: s,
            d: n,
            a: r
          } = a;
          return Math.max(0, (t = "scroll" + s) && (r = fi(e, t)) ? r() - Lo(e)()[n] : Io(e) ? (Bi[t] || Gi[t]) - Po(s) : e[t] - e["offset" + s])
        },
        Do = (e, a) => {
          for (let t = 0; t < eo.length; t += 3)(!a || ~a.indexOf(eo[t + 1])) && e(eo[t], eo[t + 1], eo[t + 2])
        },
        Ro = e => "string" == typeof e,
        Vo = e => "function" == typeof e,
        Bo = e => "number" == typeof e,
        Go = e => "object" == typeof e,
        Fo = (e, a, t) => e && e.progress(a ? 0 : 1) && t && e.pause(),
        qo = (e, a) => {
          if (e.enabled) {
            let t = a(e);
            t && t.totalTime && (e.callbackAnimation = t)
          }
        },
        $o = Math.abs,
        Uo = "left",
        Ho = "right",
        Xo = "bottom",
        Wo = "width",
        Yo = "height",
        Zo = "Right",
        Jo = "Left",
        Ko = "Top",
        Qo = "Bottom",
        el = "padding",
        al = "margin",
        tl = "Width",
        sl = "Height",
        nl = "px",
        rl = e => Ri.getComputedStyle(e),
        il = (e, a) => {
          for (let t in a) t in e || (e[t] = a[t]);
          return e
        },
        ol = (e, a) => {
          let t = a && "matrix(1, 0, 0, 1, 0, 0)" !== rl(e)[Zi] && Oi.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            s = e.getBoundingClientRect();
          return t && t.progress(0).kill(), s
        },
        ll = (e, a) => {
          let {
            d2: t
          } = a;
          return e["offset" + t] || e["client" + t] || 0
        },
        cl = e => {
          let a, t = [],
            s = e.labels,
            n = e.duration();
          for (a in s) t.push(s[a] / n);
          return t
        },
        _l = e => {
          let a = Oi.utils.snap(e),
            t = Array.isArray(e) && e.slice(0).sort(((e, a) => e - a));
          return t ? function(e, s) {
            let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!s) return a(e);
            if (s > 0) {
              for (e -= r, n = 0; n < t.length; n++)
                if (t[n] >= e) return t[n];
              return t[n - 1]
            }
            for (n = t.length, e += r; n--;)
              if (t[n] <= e) return t[n];
            return t[0]
          } : function(t, s) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              r = a(t);
            return !s || Math.abs(r - t) < n || r - t < 0 == s < 0 ? r : a(s < 0 ? t - e : t + e)
          }
        },
        dl = (e, a, t, s) => t.split(",").forEach((t => e(a, t, s))),
        gl = (e, a, t, s, n) => e.addEventListener(a, t, {
          passive: !s,
          capture: !!n
        }),
        ml = (e, a, t, s) => e.removeEventListener(a, t, !!s),
        ul = (e, a, t) => {
          (t = t && t.wheelHandler) && (e(a, "wheel", t), e(a, "touchmove", t))
        },
        vl = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        pl = {
          toggleActions: "play",
          anticipatePin: 0
        },
        hl = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        fl = (e, a) => {
          if (Ro(e)) {
            let t = e.indexOf("="),
              s = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (s *= a / 100), e = e.substr(0, t - 1)), e = s + (e in hl ? hl[e] * a : ~e.indexOf("%") ? parseFloat(e) * a / 100 : parseFloat(e) || 0)
          }
          return e
        },
        bl = (e, a, t, s, n, r, i, o) => {
          let {
            startColor: l,
            endColor: c,
            fontSize: _,
            indent: d,
            fontWeight: g
          } = n, m = Vi.createElement("div"), u = Io(t) || "fixed" === fi(t, "pinType"), v = -1 !== e.indexOf("scroller"), p = u ? Gi : t, h = -1 !== e.indexOf("start"), f = h ? l : c, b = "border-color:" + f + ";font-size:" + _ + ";color:" + f + ";font-weight:" + g + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((v || o) && u ? "fixed;" : "absolute;"), (v || o || !u) && (b += (s === Ci ? Ho : Xo) + ":" + (r + parseFloat(d)) + "px;"), i && (b += "box-sizing:border-box;text-align:left;width:" + i.offsetWidth + "px;"), m._isStart = h, m.setAttribute("class", "gsap-marker-" + e + (a ? " marker-" + a : "")), m.style.cssText = b, m.innerText = a || 0 === a ? e + "-" + a : e, p.children[0] ? p.insertBefore(m, p.children[0]) : p.appendChild(m), m._offset = m["offset" + s.op.d2], kl(m, 0, s, h), m
        },
        kl = (e, a, t, s) => {
          let n = {
              display: "block"
            },
            r = t[s ? "os2" : "p2"],
            i = t[s ? "p2" : "os2"];
          e._isFlipped = s, n[t.a + "Percent"] = s ? -100 : 0, n[t.a] = s ? "1px" : 0, n["border" + r + tl] = 1, n["border" + i + tl] = 0, n[t.p] = a + "px", Oi.set(e, n)
        },
        yl = [],
        wl = {},
        xl = () => ko() - wo > 34 && (vo || (vo = requestAnimationFrame(Bl))),
        Ml = () => {
          (!no || !no.isPressed || no.startX > Gi.clientWidth) && (ui.cache++, no ? vo || (vo = requestAnimationFrame(Bl)) : Bl(), wo || zl("scrollStart"), wo = ko())
        },
        Sl = () => {
          oo = Ri.innerWidth, io = Ri.innerHeight
        },
        Tl = () => {
          ui.cache++, !Wi && !so && !Vi.fullscreenElement && !Vi.webkitFullscreenElement && (!ro || oo !== Ri.innerWidth || Math.abs(Ri.innerHeight - io) > .25 * Ri.innerHeight) && qi.restart(!0)
        },
        Cl = {},
        Nl = [],
        jl = () => ml(ec, "scrollEnd", jl) || Dl(!0),
        zl = e => Cl[e] && Cl[e].map((e => e())) || Nl,
        Al = [],
        El = e => {
          for (let a = 0; a < Al.length; a += 5)(!e || Al[a + 4] && Al[a + 4].query === e) && (Al[a].style.cssText = Al[a + 1], Al[a].getBBox && Al[a].setAttribute("transform", Al[a + 2] || ""), Al[a + 3].uncache = 1)
        },
        Il = (e, a) => {
          let t;
          for (Ji = 0; Ji < yl.length; Ji++) t = yl[Ji], !t || a && t._ctx !== a || (e ? t.kill(1) : t.revert(!0, !0));
          a && El(a), a || zl("revert")
        },
        Pl = (e, a) => {
          ui.cache++, (a || !po) && ui.forEach((e => Vo(e) && e.cacheID++ && (e.rec = 0))), Ro(e) && (Ri.history.scrollRestoration = _o = e)
        },
        Ll = 0,
        Ol = () => {
          Gi.appendChild(go), mo = go.offsetHeight || Ri.innerHeight, Gi.removeChild(go)
        },
        Dl = (e, a) => {
          if (wo && !e) return void gl(ec, "scrollEnd", jl);
          Ol(), po = ec.isRefreshing = !0, ui.forEach((e => Vo(e) && ++e.cacheID && (e.rec = e())));
          let t = zl("refreshInit");
          ao && ec.sort(), a || Il(), ui.forEach((e => {
            Vo(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), yl.slice(0).forEach((e => e.refresh())), yl.forEach(((e, a) => {
            if (e._subPinOffset && e.pin) {
              let a = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                t = e.pin[a];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[a] - t), e.refresh()
            }
          })), yl.forEach((e => {
            let a = Oo(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > a) && e.setPositions(e.start, Math.max(e.start + 1, a), !0)
          })), t.forEach((e => e && e.render && e.render(-1))), ui.forEach((e => {
            Vo(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), Pl(_o, 1), qi.pause(), Ll++, po = 2, Bl(2), yl.forEach((e => Vo(e.vars.onRefresh) && e.vars.onRefresh(e))), po = ec.isRefreshing = !1, zl("refresh")
        },
        Rl = 0,
        Vl = 1,
        Bl = e => {
          if (!po || 2 === e) {
            ec.isUpdating = !0, fo && fo.update(0);
            let e = yl.length,
              a = ko(),
              t = a - yo >= 50,
              s = e && yl[0].scroll();
            if (Vl = Rl > s ? -1 : 1, po || (Rl = s), t && (wo && !Yi && a - wo > 200 && (wo = 0, zl("scrollEnd")), Hi = yo, yo = a), Vl < 0) {
              for (Ji = e; Ji-- > 0;) yl[Ji] && yl[Ji].update(0, t);
              Vl = 1
            } else
              for (Ji = 0; Ji < e; Ji++) yl[Ji] && yl[Ji].update(0, t);
            ec.isUpdating = !1
          }
          vo = 0
        },
        Gl = [Uo, "top", Xo, Ho, al + Qo, al + Zo, al + Ko, al + Jo, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Fl = Gl.concat([Wo, Yo, "boxSizing", "max" + tl, "max" + sl, "position", al, el, el + Ko, el + Zo, el + Qo, el + Jo]),
        ql = (e, a, t, s) => {
          if (!e._gsap.swappedIn) {
            let n, r = Gl.length,
              i = a.style,
              o = e.style;
            for (; r--;) n = Gl[r], i[n] = t[n];
            i.position = "absolute" === t.position ? "absolute" : "relative", "inline" === t.display && (i.display = "inline-block"), o[Xo] = o[Ho] = "auto", i.flexBasis = t.flexBasis || "auto", i.overflow = "visible", i.boxSizing = "border-box", i[Wo] = ll(e, Ti) + nl, i[Yo] = ll(e, Ci) + nl, i[el] = o[al] = o.top = o[Uo] = "0", Ul(s), o[Wo] = o["max" + tl] = t[Wo], o[Yo] = o["max" + sl] = t[Yo], o[el] = t[el], e.parentNode !== a && (e.parentNode.insertBefore(a, e), a.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        $l = /([A-Z])/g,
        Ul = e => {
          if (e) {
            let a, t, s = e.t.style,
              n = e.length,
              r = 0;
            for ((e.t._gsap || Oi.core.getCache(e.t)).uncache = 1; r < n; r += 2) t = e[r + 1], a = e[r], t ? s[a] = t : s[a] && s.removeProperty(a.replace($l, "-$1").toLowerCase())
          }
        },
        Hl = e => {
          let a = Fl.length,
            t = e.style,
            s = [],
            n = 0;
          for (; n < a; n++) s.push(Fl[n], t[Fl[n]]);
          return s.t = e, s
        },
        Xl = {
          left: 0,
          top: 0
        },
        Wl = (e, a, t, s, n, r, i, o, l, c, _, d, g, m) => {
          Vo(e) && (e = e(o)), Ro(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? fl("0" + e.substr(3), t) : 0));
          let u, v, p, h = g ? g.time() : 0;
          if (g && g.seek(0), isNaN(e) || (e = +e), Bo(e)) g && (e = Oi.utils.mapRange(g.scrollTrigger.start, g.scrollTrigger.end, 0, d, e)), i && kl(i, t, s, !0);
          else {
            Vo(a) && (a = a(o));
            let r, _, d, g, m = (e || "0").split(" ");
            p = Ni(a, o) || Gi, r = ol(p) || {}, r && (r.left || r.top) || "none" !== rl(p).display || (g = p.style.display, p.style.display = "block", r = ol(p), g ? p.style.display = g : p.style.removeProperty("display")), _ = fl(m[0], r[s.d]), d = fl(m[1] || "0", t), e = r[s.p] - l[s.p] - c + _ + n - d, i && kl(i, d, s, t - d < 20 || i._isStart && d > 20), t -= t - d
          }
          if (m && (o[m] = e || -.001, e < 0 && (e = 0)), r) {
            let a = e + t,
              n = r._isStart;
            u = "scroll" + s.d2, kl(r, a, s, n && a > 20 || !n && (_ ? Math.max(Gi[u], Bi[u]) : r.parentNode[u]) <= a + 1), _ && (l = ol(i), _ && (r.style[s.op.p] = l[s.op.p] - s.op.m - r._offset + nl))
          }
          return g && p && (u = ol(p), g.seek(d), v = ol(p), g._caScrollDist = u[s.p] - v[s.p], e = e / g._caScrollDist * d), g && g.seek(h), g ? e : Math.round(e)
        },
        Yl = /(webkit|moz|length|cssText|inset)/i,
        Zl = (e, a, t, s) => {
          if (e.parentNode !== a) {
            let n, r, i = e.style;
            if (a === Gi) {
              for (n in e._stOrig = i.cssText, r = rl(e), r) + n || Yl.test(n) || !r[n] || "string" != typeof i[n] || "0" === n || (i[n] = r[n]);
              i.top = t, i.left = s
            } else i.cssText = e._stOrig;
            Oi.core.getCache(e).uncache = 1, a.appendChild(e)
          }
        },
        Jl = (e, a, t) => {
          let s = a,
            n = s;
          return a => {
            let r = Math.round(e());
            return r !== s && r !== n && Math.abs(r - s) > 3 && Math.abs(r - n) > 3 && (a = r, t && t()), n = s, s = a, a
          }
        },
        Kl = (e, a, t) => {
          let s = {};
          s[a.p] = "+=" + t, Oi.set(e, s)
        },
        Ql = (e, a) => {
          let t = ji(e, a),
            s = "_scroll" + a.p2,
            n = (a, r, i, o, l) => {
              let c = n.tween,
                _ = r.onComplete,
                d = {};
              i = i || t();
              let g = Jl(t, i, (() => {
                c.kill(), n.tween = 0
              }));
              return l = o && l || 0, o = o || a - i, c && c.kill(), r[s] = a, r.modifiers = d, d[s] = () => g(i + o * c.ratio + l * c.ratio * c.ratio), r.onUpdate = () => {
                ui.cache++, Bl()
              }, r.onComplete = () => {
                n.tween = 0, _ && _.call(c)
              }, c = n.tween = Oi.to(e, r), c
            };
          return e[s] = t, t.wheelHandler = () => n.tween && n.tween.kill() && (n.tween = 0), gl(e, "wheel", t.wheelHandler), ec.isTouch && gl(e, "touchmove", t.wheelHandler), n
        };
      class ec {
        constructor(e, a) {
          Di || ec.register(Oi) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), co(this), this.init(e, a)
        }
        init(e, a) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !xo) return void(this.update = this.refresh = this.kill = jo);
          e = il(Ro(e) || Bo(e) || e.nodeType ? {
            trigger: e
          } : e, pl);
          let t, s, n, r, i, o, l, c, _, d, g, m, u, v, p, h, f, b, k, y, w, x, M, S, T, C, N, j, z, A, E, I, P, L, O, D, R, V, B, {
              onUpdate: G,
              toggleClass: F,
              id: q,
              onToggle: $,
              onRefresh: U,
              scrub: H,
              trigger: X,
              pin: W,
              pinSpacing: Y,
              invalidateOnRefresh: Z,
              anticipatePin: J,
              onScrubComplete: K,
              onSnapComplete: Q,
              once: ee,
              snap: ae,
              pinReparent: te,
              pinSpacer: se,
              containerAnimation: ne,
              fastScrollEnd: re,
              preventOverlaps: ie
            } = e,
            oe = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Ti : Ci,
            le = !H && 0 !== H,
            ce = Ni(e.scroller || Ri),
            _e = Oi.core.getCache(ce),
            de = Io(ce),
            ge = "fixed" === ("pinType" in e ? e.pinType : fi(ce, "pinType") || de && "fixed"),
            me = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            ue = le && e.toggleActions.split(" "),
            ve = "markers" in e ? e.markers : pl.markers,
            pe = de ? 0 : parseFloat(rl(ce)["border" + oe.p2 + tl]) || 0,
            he = this,
            fe = e.onRefreshInit && (() => e.onRefreshInit(he)),
            be = ((e, a, t) => {
              let {
                d: s,
                d2: n,
                a: r
              } = t;
              return (r = fi(e, "getBoundingClientRect")) ? () => r()[s] : () => (a ? Po(n) : e["client" + n]) || 0
            })(ce, de, oe),
            ke = ((e, a) => !a || ~vi.indexOf(e) ? Lo(e) : () => Xl)(ce, de),
            ye = 0,
            we = 0,
            xe = 0,
            Me = ji(ce, oe);
          var Se;
          if (he._startClamp = he._endClamp = !1, he._dir = oe, J *= 45, he.scroller = ce, he.scroll = ne ? ne.time.bind(ne) : Me, r = Me(), he.vars = e, a = a || e.animation, "refreshPriority" in e && (ao = 1, -9999 === e.refreshPriority && (fo = he)), _e.tweenScroll = _e.tweenScroll || {
              top: Ql(ce, Ci),
              left: Ql(ce, Ti)
            }, he.tweenTo = t = _e.tweenScroll[oe.p], he.scrubDuration = e => {
              P = Bo(e) && e, P ? I ? I.duration(e) : I = Oi.to(a, {
                ease: "expo",
                totalProgress: "+=0",
                duration: P,
                paused: !0,
                onComplete: () => K && K(he)
              }) : (I && I.progress(1).kill(), I = 0)
            }, a && (a.vars.lazy = !1, a._initted && !he.isReverted || !1 !== a.vars.immediateRender && !1 !== e.immediateRender && a.duration() && a.render(0, !0, !0), he.animation = a.pause(), a.scrollTrigger = he, he.scrubDuration(H), A = 0, q || (q = a.vars.id)), ae && (Go(ae) && !ae.push || (ae = {
              snapTo: ae
            }), "scrollBehavior" in Gi.style && Oi.set(de ? [Gi, Bi] : ce, {
              scrollBehavior: "auto"
            }), ui.forEach((e => Vo(e) && e.target === (de ? Vi.scrollingElement || Bi : ce) && (e.smooth = !1))), n = Vo(ae.snapTo) ? ae.snapTo : "labels" === ae.snapTo ? (e => a => Oi.utils.snap(cl(e), a))(a) : "labelsDirectional" === ae.snapTo ? (Se = a, (e, a) => _l(cl(Se))(e, a.direction)) : !1 !== ae.directional ? (e, a) => _l(ae.snapTo)(e, ko() - we < 500 ? 0 : a.direction) : Oi.utils.snap(ae.snapTo), L = ae.duration || {
              min: .1,
              max: 2
            }, L = Go(L) ? Ui(L.min, L.max) : Ui(L, L), O = Oi.delayedCall(ae.delay || P / 2 || .1, (() => {
              let e = Me(),
                s = ko() - we < 500,
                r = t.tween;
              if (!(s || Math.abs(he.getVelocity()) < 10) || r || Yi || ye === e) he.isActive && ye !== e && O.restart(!0);
              else {
                let i = (e - o) / v,
                  c = a && !le ? a.totalProgress() : i,
                  _ = s ? 0 : (c - E) / (ko() - Hi) * 1e3 || 0,
                  d = Oi.utils.clamp(-i, 1 - i, $o(_ / 2) * _ / .185),
                  g = i + (!1 === ae.inertia ? 0 : d),
                  m = Ui(0, 1, n(g, he)),
                  u = Math.round(o + m * v),
                  {
                    onStart: p,
                    onInterrupt: h,
                    onComplete: f
                  } = ae;
                if (e <= l && e >= o && u !== e) {
                  if (r && !r._initted && r.data <= $o(u - e)) return;
                  !1 === ae.inertia && (d = m - i), t(u, {
                    duration: L($o(.185 * Math.max($o(g - c), $o(m - c)) / _ / .05 || 0)),
                    ease: ae.ease || "power3",
                    data: $o(u - e),
                    onInterrupt: () => O.restart(!0) && h && h(he),
                    onComplete: () => {
                      he.update(), ye = Me(), A = E = a && !le ? a.totalProgress() : he.progress, Q && Q(he), f && f(he)
                    }
                  }, e, d * v, u - e - d * v), p && p(he, t.tween)
                }
              }
            })).pause()), q && (wl[q] = he), X = he.trigger = Ni(X || !0 !== W && W), B = X && X._gsap && X._gsap.stRevert, B && (B = B(he)), W = !0 === W ? X : Ni(W), Ro(F) && (F = {
              targets: X,
              className: F
            }), W && (!1 === Y || Y === al || (Y = !(!Y && W.parentNode && W.parentNode.style && "flex" === rl(W.parentNode).display) && el), he.pin = W, s = Oi.core.getCache(W), s.spacer ? p = s.pinState : (se && (se = Ni(se), se && !se.nodeType && (se = se.current || se.nativeElement), s.spacerIsNative = !!se, se && (s.spacerState = Hl(se))), s.spacer = b = se || Vi.createElement("div"), b.classList.add("pin-spacer"), q && b.classList.add("pin-spacer-" + q), s.pinState = p = Hl(W)), !1 !== e.force3D && Oi.set(W, {
              force3D: !0
            }), he.spacer = b = s.spacer, z = rl(W), S = z[Y + oe.os2], y = Oi.getProperty(W), w = Oi.quickSetter(W, oe.a, nl), ql(W, b, z), f = Hl(W)), ve) {
            m = Go(ve) ? il(ve, vl) : vl, d = bl("scroller-start", q, ce, oe, m, 0), g = bl("scroller-end", q, ce, oe, m, 0, d), k = d["offset" + oe.op.d2];
            let e = Ni(fi(ce, "content") || ce);
            c = this.markerStart = bl("start", q, e, oe, m, k, 0, ne), _ = this.markerEnd = bl("end", q, e, oe, m, k, 0, ne), ne && (V = Oi.quickSetter([c, _], oe.a, nl)), ge || vi.length && !0 === fi(ce, "fixedMarkers") || ((e => {
              let a = rl(e).position;
              e.style.position = "absolute" === a || "fixed" === a ? a : "relative"
            })(de ? Gi : ce), Oi.set([d, g], {
              force3D: !0
            }), C = Oi.quickSetter(d, oe.a, nl), j = Oi.quickSetter(g, oe.a, nl))
          }
          if (ne) {
            let e = ne.vars.onUpdate,
              a = ne.vars.onUpdateParams;
            ne.eventCallback("onUpdate", (() => {
              he.update(0, 0, 1), e && e.apply(ne, a || [])
            }))
          }
          if (he.previous = () => yl[yl.indexOf(he) - 1], he.next = () => yl[yl.indexOf(he) + 1], he.revert = (e, t) => {
              if (!t) return he.kill(!0);
              let s = !1 !== e || !he.enabled,
                n = Wi;
              s !== he.isReverted && (s && (D = Math.max(Me(), he.scroll.rec || 0), xe = he.progress, R = a && a.progress()), c && [c, _, d, g].forEach((e => e.style.display = s ? "none" : "block")), s && (Wi = he, he.update(s)), !W || te && he.isActive || (s ? ((e, a, t) => {
                Ul(t);
                let s = e._gsap;
                if (s.spacerIsNative) Ul(s.spacerState);
                else if (e._gsap.swappedIn) {
                  let t = a.parentNode;
                  t && (t.insertBefore(e, a), t.removeChild(a))
                }
                e._gsap.swappedIn = !1
              })(W, b, p) : ql(W, b, rl(W), T)), s || he.update(s), Wi = n, he.isReverted = s)
            }, he.refresh = (s, n, m, k) => {
              if ((Wi || !he.enabled) && !n) return;
              if (W && s && wo) return void gl(ec, "scrollEnd", jl);
              !po && fe && fe(he), Wi = he, t.tween && !m && (t.tween.kill(), t.tween = 0), I && I.pause(), Z && a && a.revert({
                kill: !1
              }).invalidate(), he.isReverted || he.revert(!0, !0), he._subPinOffset = !1;
              let w, S, C, j, z, A, E, P, L, V, B, G, F, q = be(),
                $ = ke(),
                H = ne ? ne.duration() : Oo(ce, oe),
                J = v <= .01,
                K = 0,
                Q = k || 0,
                ee = Go(m) ? m.end : e.end,
                ae = e.endTrigger || X,
                se = Go(m) ? m.start : e.start || (0 !== e.start && X ? W ? "0 0" : "0 100%" : 0),
                re = he.pinnedContainer = e.pinnedContainer && Ni(e.pinnedContainer, he),
                ie = X && Math.max(0, yl.indexOf(he)) || 0,
                _e = ie;
              for (ve && Go(m) && (G = Oi.getProperty(d, oe.p), F = Oi.getProperty(g, oe.p)); _e--;) A = yl[_e], A.end || A.refresh(0, 1) || (Wi = he), E = A.pin, !E || E !== X && E !== W && E !== re || A.isReverted || (V || (V = []), V.unshift(A), A.revert(!0, !0)), A !== yl[_e] && (ie--, _e--);
              for (Vo(se) && (se = se(he)), se = Mo(se, "start", he), o = Wl(se, X, q, oe, Me(), c, d, he, $, pe, ge, H, ne, he._startClamp && "_startClamp") || (W ? -.001 : 0), Vo(ee) && (ee = ee(he)), Ro(ee) && !ee.indexOf("+=") && (~ee.indexOf(" ") ? ee = (Ro(se) ? se.split(" ")[0] : "") + ee : (K = fl(ee.substr(2), q), ee = Ro(se) ? se : (ne ? Oi.utils.mapRange(0, ne.duration(), ne.scrollTrigger.start, ne.scrollTrigger.end, o) : o) + K, ae = X)), ee = Mo(ee, "end", he), l = Math.max(o, Wl(ee || (ae ? "100% 0" : H), ae, q, oe, Me() + K, _, g, he, $, pe, ge, H, ne, he._endClamp && "_endClamp")) || -.001, K = 0, _e = ie; _e--;) A = yl[_e], E = A.pin, E && A.start - A._pinPush <= o && !ne && A.end > 0 && (w = A.end - (he._startClamp ? Math.max(0, A.start) : A.start), (E === X && A.start - A._pinPush < o || E === re) && isNaN(se) && (K += w * (1 - A.progress)), E === W && (Q += w));
              if (o += K, l += K, he._startClamp && (he._startClamp += K), he._endClamp && !po && (he._endClamp = l || -.001, l = Math.min(l, Oo(ce, oe))), v = l - o || (o -= .01) && .001, J && (xe = Oi.utils.clamp(0, 1, Oi.utils.normalize(o, l, D))), he._pinPush = Q, c && K && (w = {}, w[oe.a] = "+=" + K, re && (w[oe.p] = "-=" + Me()), Oi.set([c, _], w)), W) w = rl(W), j = oe === Ci, C = Me(), x = parseFloat(y(oe.a)) + Q, !H && l > 1 && (B = (de ? Vi.scrollingElement || Bi : ce).style, B = {
                style: B,
                value: B["overflow" + oe.a.toUpperCase()]
              }, de && "scroll" !== rl(Gi)["overflow" + oe.a.toUpperCase()] && (B.style["overflow" + oe.a.toUpperCase()] = "scroll")), ql(W, b, w), f = Hl(W), S = ol(W, !0), P = ge && ji(ce, j ? Ti : Ci)(), Y && (T = [Y + oe.os2, v + Q + nl], T.t = b, _e = Y === el ? ll(W, oe) + v + Q : 0, _e && T.push(oe.d, _e + nl), Ul(T), re && yl.forEach((e => {
                e.pin === re && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), ge && Me(D)), ge && (z = {
                top: S.top + (j ? C - o : P) + nl,
                left: S.left + (j ? P : C - o) + nl,
                boxSizing: "border-box",
                position: "fixed"
              }, z[Wo] = z["max" + tl] = Math.ceil(S.width) + nl, z[Yo] = z["max" + sl] = Math.ceil(S.height) + nl, z[al] = z[al + Ko] = z[al + Zo] = z[al + Qo] = z[al + Jo] = "0", z[el] = w[el], z[el + Ko] = w[el + Ko], z[el + Zo] = w[el + Zo], z[el + Qo] = w[el + Qo], z[el + Jo] = w[el + Jo], h = ((e, a, t) => {
                let s, n = [],
                  r = e.length,
                  i = t ? 8 : 0;
                for (; i < r; i += 2) s = e[i], n.push(s, s in a ? a[s] : e[i + 1]);
                return n.t = e.t, n
              })(p, z, te), po && Me(0)), a ? (L = a._initted, to(1), a.render(a.duration(), !0, !0), M = y(oe.a) - x + v + Q, N = Math.abs(v - M) > 1, ge && N && h.splice(h.length - 2, 2), a.render(0, !0, !0), L || a.invalidate(!0), a.parent || a.totalTime(a.totalTime()), to(0)) : M = v, B && (B.value ? B.style["overflow" + oe.a.toUpperCase()] = B.value : B.style.removeProperty("overflow-" + oe.a));
              else if (X && Me() && !ne)
                for (S = X.parentNode; S && S !== Gi;) S._pinOffset && (o -= S._pinOffset, l -= S._pinOffset), S = S.parentNode;
              V && V.forEach((e => e.revert(!1, !0))), he.start = o, he.end = l, r = i = po ? D : Me(), ne || po || (r < D && Me(D), he.scroll.rec = 0), he.revert(!1, !0), we = ko(), O && (ye = -1, O.restart(!0)), Wi = 0, a && le && (a._initted || R) && a.progress() !== R && a.progress(R || 0, !0).render(a.time(), !0, !0), (J || xe !== he.progress || ne) && (a && !le && a.totalProgress(ne && o < -.001 && !xe ? Oi.utils.normalize(o, l, 0) : xe, !0), he.progress = J || (r - o) / v === xe ? 0 : xe), W && Y && (b._pinOffset = Math.round(he.progress * M)), I && I.invalidate(), isNaN(G) || (G -= Oi.getProperty(d, oe.p), F -= Oi.getProperty(g, oe.p), Kl(d, oe, G), Kl(c, oe, G - (k || 0)), Kl(g, oe, F), Kl(_, oe, F - (k || 0))), J && !po && he.update(), !U || po || u || (u = !0, U(he), u = !1)
            }, he.getVelocity = () => (Me() - i) / (ko() - Hi) * 1e3 || 0, he.endAnimation = () => {
              Fo(he.callbackAnimation), a && (I ? I.progress(1) : a.paused() ? le || Fo(a, he.direction < 0, 1) : Fo(a, a.reversed()))
            }, he.labelToScroll = e => a && a.labels && (o || he.refresh() || o) + a.labels[e] / a.duration() * v || 0, he.getTrailing = e => {
              let a = yl.indexOf(he),
                t = he.direction > 0 ? yl.slice(0, a).reverse() : yl.slice(a + 1);
              return (Ro(e) ? t.filter((a => a.vars.preventOverlaps === e)) : t).filter((e => he.direction > 0 ? e.end <= o : e.start >= l))
            }, he.update = (e, s, n) => {
              if (ne && !n && !e) return;
              let c, _, g, m, u, p, k, y, T = !0 === po ? D : he.scroll(),
                z = e ? 0 : (T - o) / v,
                P = z < 0 ? 0 : z > 1 ? 1 : z || 0,
                L = he.progress;
              if (s && (i = r, r = ne ? Me() : T, ae && (E = A, A = a && !le ? a.totalProgress() : P)), J && !P && W && !Wi && !bo && wo && o < T + (T - i) / (ko() - Hi) * J && (P = 1e-4), P !== L && he.enabled) {
                if (c = he.isActive = !!P && P < 1, _ = !!L && L < 1, p = c !== _, u = p || !!P != !!L, he.direction = P > L ? 1 : -1, he.progress = P, u && !Wi && (g = P && !L ? 0 : 1 === P ? 1 : 1 === L ? 2 : 3, le && (m = !p && "none" !== ue[g + 1] && ue[g + 1] || ue[g], y = a && ("complete" === m || "reset" === m || m in a))), ie && (p || y) && (y || H || !a) && (Vo(ie) ? ie(he) : he.getTrailing(ie).forEach((e => e.endAnimation()))), le || (!I || Wi || bo ? a && a.totalProgress(P, !(!Wi || !we && !e)) : (I._dp._time - I._start !== I._time && I.render(I._dp._time - I._start), I.resetTo ? I.resetTo("totalProgress", P, a._tTime / a._tDur) : (I.vars.totalProgress = P, I.invalidate().restart()))), W)
                  if (e && Y && (b.style[Y + oe.os2] = S), ge) {
                    if (u) {
                      if (k = !e && P > L && l + 1 > T && T + 1 >= Oo(ce, oe), te)
                        if (e || !c && !k) Zl(W, b);
                        else {
                          let e = ol(W, !0),
                            a = T - o;
                          Zl(W, Gi, e.top + (oe === Ci ? a : 0) + nl, e.left + (oe === Ci ? 0 : a) + nl)
                        } Ul(c || k ? h : f), N && P < 1 && c || w(x + (1 !== P || k ? 0 : M))
                    }
                  } else w(zo(x + M * P));
                ae && !t.tween && !Wi && !bo && O.restart(!0), F && (p || ee && P && (P < 1 || !uo)) && $i(F.targets).forEach((e => e.classList[c || ee ? "add" : "remove"](F.className))), G && !le && !e && G(he), u && !Wi ? (le && (y && ("complete" === m ? a.pause().totalProgress(1) : "reset" === m ? a.restart(!0).pause() : "restart" === m ? a.restart(!0) : a[m]()), G && G(he)), !p && uo || ($ && p && qo(he, $), me[g] && qo(he, me[g]), ee && (1 === P ? he.kill(!1, 1) : me[g] = 0), p || (g = 1 === P ? 1 : 3, me[g] && qo(he, me[g]))), re && !c && Math.abs(he.getVelocity()) > (Bo(re) ? re : 2500) && (Fo(he.callbackAnimation), I ? I.progress(1) : Fo(a, "reverse" === m ? 1 : !P, 1))) : le && G && !Wi && G(he)
              }
              if (j) {
                let e = ne ? T / ne.duration() * (ne._caScrollDist || 0) : T;
                C(e + (d._isFlipped ? 1 : 0)), j(e)
              }
              V && V(-T / ne.duration() * (ne._caScrollDist || 0))
            }, he.enable = (e, a) => {
              he.enabled || (he.enabled = !0, gl(ce, "resize", Tl), de || gl(ce, "scroll", Ml), fe && gl(ec, "refreshInit", fe), !1 !== e && (he.progress = xe = 0, r = i = ye = Me()), !1 !== a && he.refresh())
            }, he.getTween = e => e && t ? t.tween : I, he.setPositions = (e, a, t, s) => {
              if (ne) {
                let t = ne.scrollTrigger,
                  s = ne.duration(),
                  n = t.end - t.start;
                e = t.start + n * e / s, a = t.start + n * a / s
              }
              he.refresh(!1, !1, {
                start: So(e, t && !!he._startClamp),
                end: So(a, t && !!he._endClamp)
              }, s), he.update()
            }, he.adjustPinSpacing = e => {
              if (T && e) {
                let a = T.indexOf(oe.d) + 1;
                T[a] = parseFloat(T[a]) + e + nl, T[1] = parseFloat(T[1]) + e + nl, Ul(T)
              }
            }, he.disable = (e, a) => {
              if (he.enabled && (!1 !== e && he.revert(!0, !0), he.enabled = he.isActive = !1, a || I && I.pause(), D = 0, s && (s.uncache = 1), fe && ml(ec, "refreshInit", fe), O && (O.pause(), t.tween && t.tween.kill() && (t.tween = 0)), !de)) {
                let e = yl.length;
                for (; e--;)
                  if (yl[e].scroller === ce && yl[e] !== he) return;
                ml(ce, "resize", Tl), de || ml(ce, "scroll", Ml)
              }
            }, he.kill = (t, n) => {
              he.disable(t, n), I && !n && I.kill(), q && delete wl[q];
              let r = yl.indexOf(he);
              r >= 0 && yl.splice(r, 1), r === Ji && Vl > 0 && Ji--, r = 0, yl.forEach((e => e.scroller === he.scroller && (r = 1))), r || po || (he.scroll.rec = 0), a && (a.scrollTrigger = null, t && a.revert({
                kill: !1
              }), n || a.kill()), c && [c, _, d, g].forEach((e => e.parentNode && e.parentNode.removeChild(e))), fo === he && (fo = 0), W && (s && (s.uncache = 1), r = 0, yl.forEach((e => e.pin === W && r++)), r || (s.spacer = 0)), e.onKill && e.onKill(he)
            }, yl.push(he), he.enable(!1, !1), B && B(he), a && a.add && !v) {
            let e = he.update;
            he.update = () => {
              he.update = e, o || l || he.refresh()
            }, Oi.delayedCall(.01, he.update), v = .01, o = l = 0
          } else he.refresh();
          W && (() => {
            if (ho !== Ll) {
              let e = ho = Ll;
              requestAnimationFrame((() => e === Ll && Dl(!0)))
            }
          })()
        }
        static register(e) {
          return Di || (Oi = e || Eo(), Ao() && window.document && ec.enable(), Di = xo), Di
        }
        static defaults(e) {
          if (e)
            for (let a in e) pl[a] = e[a];
          return pl
        }
        static disable(e, a) {
          xo = 0, yl.forEach((t => t[a ? "kill" : "disable"](e))), ml(Ri, "wheel", Ml), ml(Vi, "scroll", Ml), clearInterval(Xi), ml(Vi, "touchcancel", jo), ml(Gi, "touchstart", jo), dl(ml, Vi, "pointerdown,touchstart,mousedown", Co), dl(ml, Vi, "pointerup,touchend,mouseup", No), qi.kill(), Do(ml);
          for (let e = 0; e < ui.length; e += 3) ul(ml, ui[e], ui[e + 1]), ul(ml, ui[e], ui[e + 2])
        }
        static enable() {
          if (Ri = window, Vi = document, Bi = Vi.documentElement, Gi = Vi.body, Oi && ($i = Oi.utils.toArray, Ui = Oi.utils.clamp, co = Oi.core.context || jo, to = Oi.core.suppressOverwrites || jo, _o = Ri.history.scrollRestoration || "auto", Rl = Ri.pageYOffset, Oi.core.globals("ScrollTrigger", ec), Gi)) {
            xo = 1, go = document.createElement("div"), go.style.height = "100vh", go.style.position = "absolute", Ol(), To(), Li.register(Oi), ec.isTouch = Li.isTouch, lo = Li.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), gl(Ri, "wheel", Ml), Fi = [Ri, Vi, Bi, Gi], Oi.matchMedia ? (ec.matchMedia = e => {
              let a, t = Oi.matchMedia();
              for (a in e) t.add(a, e[a]);
              return t
            }, Oi.addEventListener("matchMediaInit", (() => Il())), Oi.addEventListener("matchMediaRevert", (() => El())), Oi.addEventListener("matchMedia", (() => {
              Dl(0, 1), zl("matchMedia")
            })), Oi.matchMedia("(orientation: portrait)", (() => (Sl(), Sl)))) : console.warn("Requires GSAP 3.11.0 or later"), Sl(), gl(Vi, "scroll", Ml);
            let e, a, t = Gi.style,
              s = t.borderTopStyle,
              n = Oi.core.Animation.prototype;
            for (n.revert || Object.defineProperty(n, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), t.borderTopStyle = "solid", e = ol(Gi), Ci.m = Math.round(e.top + Ci.sc()) || 0, Ti.m = Math.round(e.left + Ti.sc()) || 0, s ? t.borderTopStyle = s : t.removeProperty("border-top-style"), Xi = setInterval(xl, 250), Oi.delayedCall(.5, (() => bo = 0)), gl(Vi, "touchcancel", jo), gl(Gi, "touchstart", jo), dl(gl, Vi, "pointerdown,touchstart,mousedown", Co), dl(gl, Vi, "pointerup,touchend,mouseup", No), Zi = Oi.utils.checkPrefix("transform"), Fl.push(Zi), Di = ko(), qi = Oi.delayedCall(.2, Dl).pause(), eo = [Vi, "visibilitychange", () => {
                let e = Ri.innerWidth,
                  a = Ri.innerHeight;
                Vi.hidden ? (Ki = e, Qi = a) : Ki === e && Qi === a || Tl()
              }, Vi, "DOMContentLoaded", Dl, Ri, "load", Dl, Ri, "resize", Tl], Do(gl), yl.forEach((e => e.enable(0, 1))), a = 0; a < ui.length; a += 3) ul(ml, ui[a], ui[a + 1]), ul(ml, ui[a], ui[a + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (uo = !!e.limitCallbacks);
          let a = e.syncInterval;
          a && clearInterval(Xi) || (Xi = a) && setInterval(xl, a), "ignoreMobileResize" in e && (ro = 1 === ec.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Do(ml) || Do(gl, e.autoRefreshEvents || "none"), so = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, a) {
          let t = Ni(e),
            s = ui.indexOf(t),
            n = Io(t);
          ~s && ui.splice(s, n ? 6 : 2), a && (n ? vi.unshift(Ri, a, Gi, a, Bi, a) : vi.unshift(t, a))
        }
        static clearMatchMedia(e) {
          yl.forEach((a => a._ctx && a._ctx.query === e && a._ctx.kill(!0, !0)))
        }
        static isInViewport(e, a, t) {
          let s = (Ro(e) ? Ni(e) : e).getBoundingClientRect(),
            n = s[t ? Wo : Yo] * a || 0;
          return t ? s.right - n > 0 && s.left + n < Ri.innerWidth : s.bottom - n > 0 && s.top + n < Ri.innerHeight
        }
        static positionInViewport(e, a, t) {
          Ro(e) && (e = Ni(e));
          let s = e.getBoundingClientRect(),
            n = s[t ? Wo : Yo],
            r = null == a ? n / 2 : a in hl ? hl[a] * n : ~a.indexOf("%") ? parseFloat(a) * n / 100 : parseFloat(a) || 0;
          return t ? (s.left + r) / Ri.innerWidth : (s.top + r) / Ri.innerHeight
        }
        static killAll(e) {
          if (yl.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = Cl.killAll || [];
            Cl = {}, e.forEach((e => e()))
          }
        }
      }
      ec.version = "3.12.2", ec.saveStyles = e => e ? $i(e).forEach((e => {
        if (e && e.style) {
          let a = Al.indexOf(e);
          a >= 0 && Al.splice(a, 5), Al.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Oi.core.getCache(e), co())
        }
      })) : Al, ec.revert = (e, a) => Il(!e, a), ec.create = (e, a) => new ec(e, a), ec.refresh = e => e ? Tl() : (Di || ec.register()) && Dl(!0), ec.update = e => ++ui.cache && Bl(!0 === e ? 2 : 0), ec.clearScrollMemory = Pl, ec.maxScroll = (e, a) => Oo(e, a ? Ti : Ci), ec.getScrollFunc = (e, a) => ji(Ni(e), a ? Ti : Ci), ec.getById = e => wl[e], ec.getAll = () => yl.filter((e => "ScrollSmoother" !== e.vars.id)), ec.isScrolling = () => !!wo, ec.snapDirectional = _l, ec.addEventListener = (e, a) => {
        let t = Cl[e] || (Cl[e] = []);
        ~t.indexOf(a) || t.push(a)
      }, ec.removeEventListener = (e, a) => {
        let t = Cl[e],
          s = t && t.indexOf(a);
        s >= 0 && t.splice(s, 1)
      }, ec.batch = (e, a) => {
        let t, s = [],
          n = {},
          r = a.interval || .016,
          i = a.batchMax || 1e9,
          o = (e, a) => {
            let t = [],
              s = [],
              n = Oi.delayedCall(r, (() => {
                a(t, s), t = [], s = []
              })).pause();
            return e => {
              t.length || n.restart(!0), t.push(e.trigger), s.push(e), i <= t.length && n.progress(1)
            }
          };
        for (t in a) n[t] = "on" === t.substr(0, 2) && Vo(a[t]) && "onRefreshInit" !== t ? o(0, a[t]) : a[t];
        return Vo(i) && (i = i(), gl(ec, "refresh", (() => i = a.batchMax()))), $i(e).forEach((e => {
          let a = {};
          for (t in n) a[t] = n[t];
          a.trigger = e, s.push(ec.create(a))
        })), s
      };
      let ac, tc = (e, a, t, s) => (a > s ? e(s) : a < 0 && e(0), t > s ? (s - a) / (t - a) : t < 0 ? a / (a - t) : 1),
        sc = (e, a) => {
          !0 === a ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (Li.isTouch ? " pinch-zoom" : "") : "none", e === Bi && sc(Gi, a)
        },
        nc = {
          auto: 1,
          scroll: 1
        },
        rc = e => {
          let a, {
              event: t,
              target: s,
              axis: n
            } = e,
            r = (t.changedTouches ? t.changedTouches[0] : t).target,
            i = r._gsap || Oi.core.getCache(r),
            o = ko();
          if (!i._isScrollT || o - i._isScrollT > 2e3) {
            for (; r && r !== Gi && (r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth || !nc[(a = rl(r)).overflowY] && !nc[a.overflowX]);) r = r.parentNode;
            i._isScroll = r && r !== s && !Io(r) && (nc[(a = rl(r)).overflowY] || nc[a.overflowX]), i._isScrollT = o
          }(i._isScroll || "x" === n) && (t.stopPropagation(), t._gsapAllow = !0)
        },
        ic = (e, a, t, s) => Li.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: a,
          onWheel: s = s && rc,
          onPress: s,
          onDrag: s,
          onScroll: s,
          onEnable: () => t && gl(Vi, Li.eventTypes[0], lc, !1, !0),
          onDisable: () => ml(Vi, Li.eventTypes[0], lc, !0)
        }),
        oc = /(input|label|select|textarea)/i,
        lc = e => {
          let a = oc.test(e.target.tagName);
          (a || ac) && (e._gsapAllow = !0, ac = a)
        };
      ec.sort = e => yl.sort(e || ((e, a) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (a.start + -1e6 * (a.vars.refreshPriority || 0)))), ec.observe = e => new Li(e), ec.normalizeScroll = e => {
        if (void 0 === e) return no;
        if (!0 === e && no) return no.enable();
        if (!1 === e) return no && no.kill();
        let a = e instanceof Li ? e : (e => {
          Go(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let a, t, s, n, r, i, o, l, {
              normalizeScrollX: c,
              momentum: _,
              allowNestedScroll: d,
              onRelease: g
            } = e,
            m = Ni(e.target) || Bi,
            u = Oi.core.globals().ScrollSmoother,
            v = u && u.get(),
            p = lo && (e.content && Ni(e.content) || v && !1 !== e.content && !v.smooth() && v.content()),
            h = ji(m, Ci),
            f = ji(m, Ti),
            b = 1,
            k = (Li.isTouch && Ri.visualViewport ? Ri.visualViewport.scale * Ri.visualViewport.width : Ri.outerWidth) / Ri.innerWidth,
            y = 0,
            w = Vo(_) ? () => _(a) : () => _ || 2.8,
            x = ic(m, e.type, !0, d),
            M = () => n = !1,
            S = jo,
            T = jo,
            C = () => {
              t = Oo(m, Ci), T = Ui(lo ? 1 : 0, t), c && (S = Ui(0, Oo(m, Ti))), s = Ll
            },
            N = () => {
              p._gsap.y = zo(parseFloat(p._gsap.y) + h.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
            },
            j = () => {
              C(), r.isActive() && r.vars.scrollY > t && (h() > t ? r.progress(1) && h(t) : r.resetTo("scrollY", t))
            };
          return p && Oi.set(p, {
            y: "+=0"
          }), e.ignoreCheck = e => lo && "touchmove" === e.type && (() => {
            if (n) {
              requestAnimationFrame(M);
              let e = zo(a.deltaY / 2),
                t = T(h.v - e);
              if (p && t !== h.v + h.offset) {
                h.offset = t - h.v;
                let e = zo((parseFloat(p && p._gsap.y) || 0) - h.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", p._gsap.y = e + "px", h.cacheID = ui.cache, Bl()
              }
              return !0
            }
            h.offset && N(), n = !0
          })() || b > 1.05 && "touchstart" !== e.type || a.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            n = !1;
            let e = b;
            b = zo((Ri.visualViewport && Ri.visualViewport.scale || 1) / k), r.pause(), e !== b && sc(m, b > 1.01 || !c && "x"), i = f(), o = h(), C(), s = Ll
          }, e.onRelease = e.onGestureStart = (e, a) => {
            if (h.offset && N(), a) {
              ui.cache++;
              let a, s, n = w();
              c && (a = f(), s = a + .05 * n * -e.velocityX / .227, n *= tc(f, a, s, Oo(m, Ti)), r.vars.scrollX = S(s)), a = h(), s = a + .05 * n * -e.velocityY / .227, n *= tc(h, a, s, Oo(m, Ci)), r.vars.scrollY = T(s), r.invalidate().duration(n).play(.01), (lo && r.vars.scrollY >= t || a >= t - 1) && Oi.to({}, {
                onUpdate: j,
                duration: n
              })
            } else l.restart(!0);
            g && g(e)
          }, e.onWheel = () => {
            r._ts && r.pause(), ko() - y > 1e3 && (s = 0, y = ko())
          }, e.onChange = (e, a, t, n, r) => {
            if (Ll !== s && C(), a && c && f(S(n[2] === a ? i + (e.startX - e.x) : f() + a - n[1])), t) {
              h.offset && N();
              let a = r[2] === t,
                s = a ? o + e.startY - e.y : h() + t - r[1],
                n = T(s);
              a && s !== n && (o += n - s), h(n)
            }(t || a) && Bl()
          }, e.onEnable = () => {
            sc(m, !c && "x"), ec.addEventListener("refresh", j), gl(Ri, "resize", j), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = f.smooth = !1), x.enable()
          }, e.onDisable = () => {
            sc(m, !0), ml(Ri, "resize", j), ec.removeEventListener("refresh", j), x.kill()
          }, e.lockAxis = !1 !== e.lockAxis, a = new Li(e), a.iOS = lo, lo && !h() && h(1), lo && Oi.ticker.add(jo), l = a._dc, r = Oi.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: Jl(h, h(), (() => r.pause()))
            },
            onUpdate: Bl,
            onComplete: l.vars.onComplete
          }), a
        })(e);
        return no && no.target === a.target && no.kill(), Io(a.target) && (no = a), a
      }, ec.core = {
        _getVelocityProp: zi,
        _inputObserver: ic,
        _scrollers: ui,
        _proxies: vi,
        bridge: {
          ss: () => {
            wo || zl("scrollStart"), wo = ko()
          },
          ref: () => Wi
        }
      }, Eo() && Oi.registerPlugin(ec);
      var cc = t(7421),
        _c = t(3509),
        dc = t(4319);
      var gc = t(2322);
      const mc = () => {
          const {
            data: e,
            loading: a
          } = (0, b.aM)(gc.abc123);
          return {
            data: e,
            loading: a,
            translation: a => e?.abc123?.find((e => e.key === a))?.value ?? ""
          }
        },
        uc = {
          banner_collapsed: [/^\/careers/, /^\/newswire(\/?)$/, /^\/videos\/[0-9]+/],
          full_exclusion: [/^\/contact/, /agegate/, /privacy/, /legal/, /ccpa/, /corpinfo/, /cookies/, /^\/gta-online\/license-plates/, /.*\?info=.*/]
        },
        vc = {
          banner_collapsed: [/\/rockstar-games-launcher/, /^\/notifications/, /^\/careers$/, /^\/support$/, /^\/member\//],
          full_exclusion: [/^\/activate/, /^\/settings/, /agegate/, /^\/Error.htm/, /^\/(photo|video|job)\/(rdr2|gtav)\/.*/, /^\/games\/maxpayne3/]
        };
      let pc, hc = null,
        fc = null;
      pc = "grtTKOExpanded", hc = qs.easeInOut, fc = 2;
      const bc = {
          default: js.easeInOut,
          takeover: As.easeInOut,
          parallax: zs.easeInOut,
          intro: hc,
          playVideo: {
            fadeOut: js.easeIn,
            fadeIn: js.easeIn,
            cta: Ns.easeOut
          }
        },
        kc = 2,
        yc = 1,
        wc = .3,
        xc = (0, l.createContext)(void 0),
        Mc = e => {
          let {
            children: a
          } = e;
          const [t, s] = (0, l.useState)(!1), [n, r] = (0, l.useState)(), {
            data: i,
            translation: o
          } = mc(), [c, d] = (0, l.useState)({}), [g, m] = (0, l.useState)(!1), u = (() => {
            const {
              lsSettings: e,
              mutateLSSettings: a
            } = (0, k.TG)(), {
              pathname: t,
              search: s
            } = (0, dc.useLocation)(), n = (0, l.useRef)((0, v.Z)().currentSite?.site === v.z.socialClub ? vc : uc), r = () => ((e, a, t) => !e.full_exclusion.find((e => e.test(a + t))))(n.current, t, s), i = a => a && !(window?.env?.responseStatusCode && 200 !== window?.env?.responseStatusCode) && !((e, a, t) => e.banner_collapsed.some((e => "string" == typeof e ? a === e : e.test(a + t))))(n.current, t, s) && (e?.[pc] ?? !0), [o, c] = (0, l.useState)(r()), [_, d] = (0, l.useState)(i(o)), [g, m] = (0, l.useState)(_ || !o);
            return (0, l.useEffect)((() => {
              const e = r(),
                a = i(e);
              d(a), c(e)
            }), [t, s, window.env]), (0, l.useEffect)((() => {
              !_ && o && m(!1)
            }), [_]), (0, l.useEffect)((() => {
              void 0 === e?.[pc] && a({
                key: pc,
                value: !0
              })
            }), [e]), (0, l.useEffect)((() => {
              e?.[pc] || a({
                key: pc,
                value: _
              })
            }), [_]), (0, l.useEffect)((() => {
              document.documentElement.style.setProperty("--promo-banner-height", o ? "var(--header-height, 60px)" : "0px")
            }), [o]), {
              isExpanded: _,
              setIsExpanded: d,
              isInitialExpansion: g,
              doesPageDisplayBanner: o
            }
          })(), p = (0, l.useRef)(null), h = (0, l.useRef)(null), f = (0, l.useRef)(null), b = (0, l.useRef)(null), y = {
            createYouTubePlayer: async function() {
              let {
                onVideoComplete: e
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              h.current = await (e => {
                let {
                  onStateChange: a,
                  playerVars: t = {},
                  target: s,
                  videoId: n
                } = e;
                return new Promise(((e, r) => {
                  const i = `youtube-player-${n}`,
                    o = document.createElement("div");
                  o.id = i, s.appendChild(o);
                  const l = () => new window.YT.Player(i, {
                    videoId: n,
                    width: "100%",
                    height: "100%",
                    playerVars: t,
                    events: {
                      onReady: async a => {
                        try {
                          const t = await a.target;
                          e(t)
                        } catch (e) {
                          r(e)
                        }
                      },
                      onStateChange: a
                    }
                  });
                  if (window.YT) l();
                  else {
                    const e = document.createElement("script");
                    e.src = "https://www.youtube.com/iframe_api", window.onYouTubeIframeAPIReady = () => {
                      l()
                    }, document.head.appendChild(e)
                  }
                }))
              })({
                onStateChange: async a => {
                  switch (a.data) {
                    case window.YT.PlayerState.UNSTARTED:
                      await h.current.mute(), await h.current.playVideo();
                      break;
                    case window.YT.PlayerState.ENDED:
                      e?.();
                    case window.YT.PlayerState.PLAYING:
                  }
                },
                playerVars: {
                  rel: 0,
                  autoplay: 1,
                  controls: 1
                },
                target: f.current,
                videoId: n
              })
            },
            playVideo: async () => {
              await (h?.current?.playVideo())
            },
            pauseVideo: async () => {
              await (h?.current?.pauseVideo())
            },
            stopVideo: async () => {
              await (h?.current?.stopVideo())
            },
            resetVideo: async () => {
              await (h?.current?.pauseVideo()), await (h?.current?.seekTo(0))
            }
          }, w = (e, a) => {
            d((t => ({
              ...t,
              [e]: a
            })))
          }, x = () => {
            for (const e in c) Object.hasOwn(c, e) && c[e].reverse()
          };
          (0, l.useEffect)((() => {
            r(o("youtubeId"))
          }), [i]), (0, l.useEffect)((() => () => {
            x()
          }), [c]);
          const M = (0, l.useMemo)((() => ({
            ctaButtonRef: p,
            timelines: c,
            addTimeline: w,
            reverseAllTimelines: x,
            isStandalone: t,
            setIsStandalone: s,
            ...u,
            isVideoPlayerActive: g,
            setIsVideoPlayerActive: m,
            youtubeRef: h,
            playerRef: f,
            playButtonRef: b,
            ...y,
            videoId: n
          })), [p, i, c, w, x, u, g, m, h, f, b, y, n]);
          return (0, _.jsx)(xc.Provider, {
            value: M,
            children: a
          })
        },
        Sc = () => {
          const e = (0, l.useContext)(xc);
          if (void 0 === e) throw new Error("useGTA must be used within a GTAProvider");
          return e
        },
        Tc = e => {
          let {
            onClick: a,
            ctaLabel: t
          } = e;
          const {
            ctaButtonRef: s
          } = Sc();
          return (0, _.jsxs)("button", {
            type: "button",
            className: "rockstargames-modules-core-headera3850612e3ec102a01cb9622d558e915",
            ref: s,
            onClick: a,
            "aria-label": "cta",
            children: [(0, _.jsx)("span", {
              className: "rockstargames-modules-core-headerf838cc7273e89e7d9a1cd6c5c078c795",
              children: t
            }), (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerca704725dd928e29a6d56b271843870d"
            })]
          })
        },
        Cc = {
          closeBtn: "rockstargames-modules-core-headera9aa57395fc590ff52d0ccf37e8ebdfc"
        },
        Nc = e => {
          let {
            className: a,
            onClick: t,
            closeRef: s
          } = e;
          return (0, l.useEffect)((() => {
            const e = e => {
              "Escape" === e.key && t && t()
            };
            return window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e)
            }
          }), [t]), (0, _.jsx)("button", {
            ref: s,
            type: "button",
            className: [Cc.closeBtn, a || ""].join(" "),
            onClick: t,
            "aria-label": "close",
            disabled: !1
          })
        },
        jc = e => {
          let {
            showCloseButton: a = !1
          } = e;
          const t = (0, l.useRef)(null),
            s = (0, l.useRef)(null),
            {
              track: n
            } = te(),
            {
              timelines: r,
              isVideoPlayerActive: i,
              youtubeRef: o,
              playerRef: c,
              resetVideo: d,
              playVideo: g
            } = Sc();
          let m;
          return m = "promo_banner2", (0, l.useLayoutEffect)((() => {
            r.playVideoTimeline?.fromTo(t.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              duration: yc,
              ease: bc.playVideo.fadeIn,
              onStart: () => g()
            }).fromTo(s.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1
            })
          }), [r.playVideoTimeline]), (0, l.useLayoutEffect)((() => () => {
            delete window.onYouTubeIframeAPIReady
          }), []), (0, l.useEffect)((() => {
            ec.refresh()
          }), [i]), (0, _.jsx)(_c.Z, {
            allowPinchZoom: !1,
            enabled: i,
            children: (0, _.jsxs)(cc.ZP, {
              disabled: !i,
              ref: t,
              className: "rockstargames-modules-core-headerd7d8c3a17347ea398fed90a796df02f3",
              children: [a && (0, _.jsx)(Nc, {
                className: "rockstargames-modules-core-headercf9febc2e5bb3d36a7afd1f115ac2a07",
                onClick: () => (o?.current && r.playVideoTimeline.timeScale(3).reverse(), d(), void n({
                  event: "takeover_close",
                  element_placement: "promo_banner2"
                })),
                closeRef: s
              }), (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerebef736066db14259826ab425227f754",
                ref: c
              })]
            })
          })
        },
        zc = (0, l.forwardRef)(((e, a) => {
          const s = (0, l.useRef)(null),
            n = (0, l.useRef)(null),
            r = ((0, l.useRef)(null), (0, l.useRef)(null), (0, l.useRef)(null)),
            {
              isMobile: i
            } = (0, k.w_)(),
            [o, c] = (0, l.useState)("");
          (0, l.useEffect)((() => {
            c(t(i ? 9906 : 1903))
          }), [i]), (0, l.useImperativeHandle)(a, (() => ({
            heroImagesRef: s,
            heroLogoRef: r
          })), [s?.current, r?.current]);
          const {
            timelines: d
          } = Sc();
          (0, l.useLayoutEffect)((() => {
            d?.playVideoTimeline && d?.playVideoTimeline?.fromTo([s.current], {
              autoAlpha: 1,
              scale: 1
            }, {
              autoAlpha: 0,
              scale: .98,
              duration: kc,
              ease: bc.playVideo.fadeOut
            })
          }), [d?.playVideoTimeline]), (0, l.useLayoutEffect)((() => {
            d.introTimeline && d.introTimeline.from(n.current, {
              "--hero-image-height": "200%",
              "--hero-image-width": "200%"
            }, 0).set([n.current], {
              clearProps: "all"
            })
          }), [d.introTimeline]);
          let g = null;
          return g = (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("img", {
              ref: n,
              className: "rockstargames-modules-core-headerd86c52bd1138a5ac64fbd953c221901f",
              src: o,
              alt: ""
            })
          }), (0, _.jsx)("div", {
            ref: s,
            className: "rockstargames-modules-core-headera5da7a9bfdd60a0a82e0c82f4a3129fe",
            children: g
          })
        })),
        Ac = "rockstargames-modules-core-headerb63fda50883376c0419efa4315ed7a3a",
        Ec = () => {
          const {
            ctaButtonRef: e,
            timelines: a,
            isExpanded: s,
            createYouTubePlayer: n,
            isStandalone: r,
            playButtonRef: i
          } = Sc(), {
            track: o
          } = te();
          return (0, _.jsx)("button", {
            type: "button",
            ref: i,
            className: "rockstargames-modules-core-headerf16853433be5273aa96ffecb53bffa6e",
            onMouseEnter: e => {
              let {
                currentTarget: a
              } = e;
              gr.to(a, {
                scale: 1.1,
                duration: .15,
                ease: Ns.easeOut
              })
            },
            onMouseLeave: e => {
              let {
                currentTarget: a
              } = e;
              gr.to(a, {
                scale: 1,
                duration: .15,
                ease: Ns.easeOut
              })
            },
            onClick: () => {
              const t = () => {
                s && gr.to(e.current, {
                  autoAlpha: 1,
                  duration: wc,
                  ease: bc.playVideo.cta
                })
              };
              a.playVideoTimeline?.play(), setTimeout((() => n({
                onVideoComplete: t
              })), 3e3), o({
                event: "video_play",
                event_category: "video",
                event_action: "play",
                element_placement: r ? "landing_page_hero" : "banner",
                event_label: "manual",
                video_id: "promo_video",
                video_title: "promo_video"
              })
            },
            "aria-label": "Play Button",
            tabIndex: s || r ? void 0 : -1,
            children: (0, _.jsx)("img", {
              src: t(7236),
              alt: "",
              "aria-hidden": !0
            })
          })
        },
        Ic = e => {
          let {
            className: a
          } = e;
          return (0, _.jsx)("svg", {
            className: a || "",
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "12",
            viewBox: "0 0 32 12",
            fill: "none",
            children: (0, _.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M31.7948 1.60281C32.2537 2.47697 31.9171 3.55765 31.0429 4.01658L15.9054 11.9638L0.948843 4.01224C0.0770835 3.54878 -0.253903 2.46636 0.209564 1.5946C0.673031 0.722843 1.75545 0.391857 2.62721 0.855324L15.9159 7.92018L29.381 0.850985C30.2552 0.392054 31.3358 0.728659 31.7948 1.60281Z",
              fill: "white"
            })
          })
        },
        Pc = {
          logo: "rockstargames-modules-core-headerd14fb370d3acc37659cd0f140c15e9f5"
        },
        Lc = (0, l.forwardRef)(((e, a) => {
          let {
            className: s,
            logoSource: n,
            text: r
          } = e;
          return (0, _.jsxs)("div", {
            className: [Pc.logo, s || ""].join(" "),
            ref: a,
            children: [(0, _.jsx)("img", {
              src: t(3093)(`./${n}`),
              alt: `${r} logo`
            }), (0, _.jsx)("p", {
              children: r
            })]
          })
        })),
        Oc = (0, l.forwardRef)(((e, a) => {
          let {
            secondPhase: t = !1
          } = e;
          const {
            loading: s,
            translation: n
          } = mc(), r = (0, l.useRef)(null), {
            timelines: i
          } = Sc();
          (0, l.useImperativeHandle)(a, (() => r?.current), [r?.current]);
          let o = null,
            c = null,
            d = null;
          o = 1, c = "<75%", d = "cubic-bezier(0.42, 0, 0.58, 1)", (0, l.useLayoutEffect)((() => {
            i?.introTimeline && i?.introTimeline?.fromTo(r.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              ease: "cubic-bezier(0.42, 0, 0.58, 1)",
              duration: 1,
              onComplete: () => {
                gr.set(r?.current?.children, {
                  pointerEvents: "auto"
                })
              }
            }, "<75%")
          }), [i.introTimeline]), (0, l.useLayoutEffect)((() => {
            i?.playVideoTimeline && i?.playVideoTimeline?.fromTo(r.current, {
              autoAlpha: 1
            }, {
              autoAlpha: 0,
              immediateRender: !1
            }, "<")
          }), [i.playVideoTimeline]);
          let g = null;
          return g = (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(Ec, {}), t ? (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(Lc, {
                className: Ac,
                text: n("d2.destLogoMSG"),
                logoSource: "logo_secondary_stroke.svg"
              }), (0, _.jsx)(Ic, {
                className: "rockstargames-modules-core-headerfaf2ae98d28d0eed449caa8caf4650e6"
              })]
            }) : (0, _.jsx)(Lc, {
              className: Ac,
              text: n("d2.tkoLogoMsg"),
              logoSource: "logo_secondary_stroke.svg"
            })]
          }), (0, _.jsx)("div", {
            ref: r,
            className: "rockstargames-modules-core-headeraf3aa4959408bb5b9abba1c63eb3a501",
            children: g
          })
        })),
        Dc = Oc,
        Rc = {
          hero: "rockstargames-modules-core-headerb2d1aec986f8e6b6f1968b6d148267fc"
        },
        Vc = (0, l.forwardRef)(((e, a) => (0, _.jsx)("div", {
          className: "rockstargames-modules-core-headerf97165da4f8c608a9b34b2cde37612ea",
          ref: a
        }))),
        Bc = (0, l.forwardRef)(((e, a) => {
          let {
            className: t,
            standalone: s = !1
          } = e;
          const n = (0, l.useRef)(null),
            r = (0, l.useRef)(null),
            i = (0, l.useRef)(null),
            o = (0, l.useRef)(null),
            {
              addTimeline: c,
              timelines: d,
              setIsVideoPlayerActive: g
            } = Sc();
          return (0, l.useImperativeHandle)(a, (() => ({
            heroRef: r,
            heroUIRef: i,
            heroImagesRefs: o
          })), [r?.current, i?.current, o?.current]), (0, l.useLayoutEffect)((() => {
            const e = gr.context((() => {
              const e = gr.timeline({
                  paused: !0,
                  defaults: {
                    duration: 2,
                    ease: bc.intro,
                    force3D: !0
                  }
                }).to(n.current, {
                  autoAlpha: 0
                }),
                a = gr.timeline({
                  paused: !0,
                  defaults: {
                    duration: .5,
                    ease: bc.default,
                    force3D: !0
                  }
                });
              c("introTimeline", e), c("playVideoTimeline", a)
            }));
            return () => e.revert()
          }), []), (0, l.useEffect)((() => {
            n?.current && d?.introTimeline && d?.introTimeline.play()
          }), [n?.current, d?.introTimeline, s]), (0, l.useLayoutEffect)((() => {
            s && d?.playVideoTimeline && r?.current && (d.playVideoTimeline.eventCallback("onStart", (() => {
              d?.playVideoTimeline.timeScale(1), g(!0), gr.set(r?.current, {
                background: "transparent"
              })
            })), d.playVideoTimeline.eventCallback("onReverseComplete", (() => {
              g(!1), gr.set(r?.current, {
                clearProps: "background"
              })
            })))
          }), [g, r?.current, d?.playVideoTimeline, s]), (0, _.jsxs)("div", {
            ref: r,
            className: [Rc.hero, t || ""].join(" "),
            children: [(0, _.jsx)(Vc, {
              ref: n
            }), (0, _.jsx)(zc, {
              ref: o
            }), (0, _.jsx)(Dc, {
              ref: i,
              secondPhase: s
            }), s ? null : (0, _.jsx)(jc, {})]
          })
        })),
        Gc = "rockstargames-modules-core-headerd8f9351b0f0d90e2566ccba3776913bd";
      gr.registerPlugin(ec, Er, Zr);
      const Fc = () => {
          const {
            loading: e,
            translation: a
          } = mc(), {
            windowWidth: t,
            windowHeight: s
          } = (0, k.w_)(), {
            mutateLSSettings: n
          } = (0, k.TG)(), {
            pathname: r
          } = (0, dc.useLocation)(), {
            track: i
          } = te(), {
            currentSite: o,
            sites: c
          } = (0, v.Z)(), d = (0, b.ZA)(), g = "/gta-online/license-plates" === r;
          let m;
          m = "promo_banner2";
          const u = (0, l.useRef)(),
            p = (0, l.useRef)(null),
            h = (0, l.useRef)(null),
            f = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            w = (0, l.useRef)(null),
            x = (0, l.useRef)(null),
            M = (0, l.useRef)(null),
            {
              ctaButtonRef: S,
              timelines: T,
              addTimeline: C,
              isExpanded: N,
              setIsExpanded: j,
              isInitialExpansion: z,
              doesPageDisplayBanner: A,
              resetVideo: E
            } = Sc();
          (0, l.useEffect)((() => {
            gr.set(window, {
              scrollTo: 0
            })
          }), []);
          const I = (0, l.useCallback)((e => {
            if (!g) {
              const a = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
              e.direction === M?.current || a || T?.bannerTimeline.isActive() ? a && e?.animation?.pause() : -1 === e.direction ? e.animation?.reverse() : e.animation?.play();
              const t = "data-show-more-content";
              1 === e.direction ? document.body.setAttribute(t, "") : document.body.removeAttribute(t), M.current = e.direction
            }
          }), [N, T?.bannerTimeline, g]);
          return (0, l.useEffect)((() => {
            const e = gr.context((() => {
              y?.current && !g && gr.to(y.current, {
                yPercent: -100,
                paused: !0,
                duration: .4,
                scrollTrigger: {
                  start: "120px",
                  end: 99999,
                  onUpdate: e => {
                    I(e)
                  }
                }
              })
            }));
            return () => e.revert()
          }), [y?.current, g]), (0, l.useEffect)((() => {
            T?.bannerTimeline && (N ? z ? T.bannerTimeline.progress(1) : T.bannerTimeline.play() : N || z || T.bannerTimeline.reverse())
          }), [N, T?.bannerTimeline]), (0, l.useLayoutEffect)((() => {
            u?.current?.invalidate()
          }), [t, s]), (0, l.useLayoutEffect)((() => {
            const e = gr.context((() => {
              T?.bannerTimeline?.progress(0).kill(), A && (u.current = gr.timeline({
                paused: !0,
                defaults: {
                  duration: .8,
                  ease: bc.takeover,
                  force3D: !0
                },
                onStart: () => {
                  i({
                    event: "takeover_impression",
                    element_placement: m
                  })
                }
              }).fromTo(y.current, {
                height: 60
              }, {
                height: "100vh"
              }).fromTo(h.current, {
                autoAlpha: 1
              }, {
                autoAlpha: 0,
                duration: .5,
                ease: bc.default
              }, "<").fromTo(f.current, {
                autoAlpha: .01,
                pointerEvents: "none",
                scale: 1.075
              }, {
                autoAlpha: 1,
                pointerEvents: "auto",
                scale: 1
              }, "<").fromTo([w.current, x.current], {
                autoAlpha: 0
              }, {
                autoAlpha: 1
              }, "<"), C("bannerTimeline", u?.current))
            }));
            return () => e.revert()
          }), [A]), A ? (0, _.jsx)(cc.ZP, {
            disabled: !N,
            children: (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)("div", {
                className: "rockstargames-modules-core-headera27236a2c093c09bf8e0cd22216f7312",
                ref: y,
                children: (0, _.jsxs)(_c.Z, {
                  allowPinchZoom: !1,
                  enabled: !!N,
                  children: [(0, _.jsxs)("button", {
                    type: "button",
                    className: "rockstargames-modules-core-headerb38008570ecacc2bb7ac50d24cab3422",
                    ref: h,
                    onClick: () => {
                      j(!0), i({
                        event: "site_banner_click",
                        element_placement: m
                      })
                    },
                    children: [(0, _.jsx)("p", {
                      className: "rockstargames-modules-core-headere36fcc8db1fb879b62d55ca120a928e0",
                      children: a("d2.bannerMsg")
                    }), (0, _.jsx)("p", {
                      className: Gc,
                      children: a("d2.bannerMob1")
                    }), (0, _.jsx)("p", {
                      className: Gc,
                      children: a("d2.bannerMob2")
                    })]
                  }), (0, _.jsx)("div", {
                    className: "rockstargames-modules-core-headerf49f0d234f253bd30514d0259d46e97b",
                    ref: f,
                    children: (0, _.jsx)(Bc, {})
                  }), (0, _.jsxs)("div", {
                    ref: x,
                    className: "rockstargames-modules-core-headerf0318c768b7b58ca0fcc8035bd325f3a",
                    children: [(0, _.jsx)(Tc, {
                      ctaLabel: e ? "" : a("d2.destCTA"),
                      onClick: () => {
                        i({
                          event: "cta_other",
                          element_placement: "banner"
                        }), o?.site === v.z.socialClub ? window.location.href = `https://${c.www}.rockstargames.com/VI` : window.location.href = `${d}VI`
                      }
                    }), (0, _.jsx)(Nc, {
                      closeRef: p,
                      onClick: () => {
                        j(!1), n({
                          key: pc,
                          value: !1
                        }), S.current && gr.to(S.current, {
                          autoAlpha: 0,
                          duration: wc,
                          ease: bc.playVideo.cta
                        }), T.bannerTimeline.reverse(), T.bannerTimeline.eventCallback("onReverseComplete", (() => {
                          u.current && T.playVideoTimeline && T.playVideoTimeline.progress(0).pause(), E()
                        })), i({
                          event: "takeover_close",
                          element_placement: m
                        })
                      }
                    })]
                  })]
                })
              }), (0, _.jsx)("div", {
                ref: w,
                className: "rockstargames-modules-core-headerd2999eb8c365669e42f23b86cbe755b6"
              })]
            })
          }) : null
        },
        qc = () => {
          const e = oe(),
            a = (0, b.ZA)(),
            {
              currentSite: t
            } = (0, v.Z)(),
            s = t?.site === v.z.socialClub ? "/" : a;
          return (0, _.jsx)(k.ph, {
            children: (0, _.jsx)(ne, {
              history: e,
              basename: s,
              children: (0, _.jsx)(Mc, {
                children: (0, _.jsx)(Fc, {})
              })
            })
          })
        },
        $c = JSON.parse('{"us":{"accessibility_skip_button":"Skip to main content","games_menu_featured":"Featured Games","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"View All","language_selector_default":"Select a Language","nav_bully_accomplishments":"Accomplishments","nav_bully_cta_buy_now":"Buy Now","nav_bully_game_overview":"Discover","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Careers on LinkedIn","nav_careers_contact_us":"Contact us","nav_careers_home":"Home","nav_careers_openings":"Openings","nav_cta_get_launcher":"Get Launcher","nav_gta_trilogy_accomplishments":"Accomplishments","nav_gta_trilogy_cta_buy_now":"Buy Now","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Overview","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Buy Now","nav_gtaiv_accomplishments":"Accomplishments","nav_gtaiv_cta_buy_now":"Buy Now","nav_gtaiv_overview":"Discover","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Accomplishments","nav_gtaiveflc_overview":"Overview","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Accomplishments","nav_gtao_browse_crews":"Browse All Crews","nav_gtao_checklist":"Checklist","nav_gtao_community":"Community","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Create a Crew","nav_gtao_cta_buy_now":"Buy Now","nav_gtao_discover":"Discover","nav_gtao_emblem_editor":"Emblem Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Browse all jobs","nav_gtao_jobs_playlists":"Playlists","nav_gtao_license_plate_creator":"License Plate Creator","nav_gtao_missions":"Missions","nav_gtao_my_character":"My Character","nav_gtao_my_crews":"My Crews","nav_gtao_my_jobs":"My jobs","nav_gtao_overview":"Overview","nav_gtao_photos":"Photos","nav_gtao_stats":"Stats","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Buy Now","nav_gtav_accomplishments":"Accomplishments","nav_gtav_checklist":"Checklist","nav_gtav_community":"Community","nav_gtav_create_crew":"Create a Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Browse All Crews","nav_gtav_cta_buy_now":"Buy Now","nav_gtav_discover":"Discover","nav_gtav_emblem_editor":"Emblem Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Browse all jobs","nav_gtav_licence_plate_creator":"License Plate Creator","nav_gtav_missions":"Missions","nav_gtav_my_character":"My Character","nav_gtav_my_crews":"My Crews","nav_gtav_my_jobs":"My Jobs","nav_gtav_overview":"Overview","nav_gtav_photos":"Photos","nav_gtav_playlists":"Playlists","nav_gtav_stats":"Stats","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Buy Now","nav_gtavc_discover":"Discover","nav_gtavcs_discover":"Discover","nav_lanoire_accomplishments":"Accomplishments","nav_lanoire_badge_pursuit":"Badge Pursuit","nav_lanoire_case_tracker":"Case Tracker","nav_lanoire_checklist":"Checklist","nav_lanoire_cta_buy_now":"Buy Now","nav_lanoire_official_site":"Official Site","nav_lanoire_overview":"Overview","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progress","nav_lanoire_stats":"Stats","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Buy Now","nav_more_dropdown":"More","nav_mp3_accomplishments":"Accomplishments","nav_mp3_career":"Career","nav_mp3_chapters":"Chapters","nav_mp3_checklist":"Checklist","nav_mp3_checkpoint_challenge":"Checkpoint Challenge","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Buy Now","nav_mp3_featured":"Featured","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Leaderboards","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"News","nav_mp3_ny_minute":"New York Minute","nav_mp3_official_site":"Official Site","nav_mp3_overview":"Overview","nav_mp3_progress":"Progress","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Specifications","nav_mp3_support":"Support","nav_mp3_weapons":"Weapons","nav_opens_in_new_window":"{text} (Link opens in new window)","nav_quick_access_games":"Games","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Accomplishments","nav_rdo_awards":"Awards","nav_rdo_benefits":"Benefits","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Club Rewards","nav_rdo_community":"Community","nav_rdo_competitive_series":"Competitive Series","nav_rdo_cta_buy_now":"Buy Now","nav_rdo_customization":"Customization","nav_rdo_explore":"Explore","nav_rdo_getting_started":"Getting Started","nav_rdo_guides":"Guides","nav_rdo_my_character":"My Character","nav_rdo_overview":"Overview","nav_rdo_photos":"Photos","nav_rdo_posses":"Posses","nav_rdo_posses_free_roam":"Posses and Free Roam","nav_rdo_progress":"Progress","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Rank Unlocks","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Specialist Roles","nav_rdo_story_missions":"Story Missions","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Buy Now","nav_rdr2_accomplishments":"Accomplishments","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Challenges","nav_rdr2_chapters":"Chapters","nav_rdr2_character":"Character","nav_rdr2_compendium":"Compendium","nav_rdr2_cta_buy_now":"Buy Now","nav_rdr2_explore":"Explore","nav_rdr2_gallery":"Gallery","nav_rdr2_locations":"Locations","nav_rdr2_media":"Media","nav_rdr2_music":"Music","nav_rdr2_online":"Online","nav_rdr2_overview":"Overview","nav_rdr2_progress":"Progress","nav_rdr2_stats":"Stats","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"The Van der Linde Gang","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Weaponry","nav_rdr2_wildlife":"Wildlife","nav_rockstargames_home":"Rockstar Games Home","nav_rockstargames_logo":"Click to open menu","nav_rsg_downloads":"Downloads","nav_rsg_games":"Games","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Your search query is too short. Queries must be at least {count} characters long.","nav_search_error_too_short_invalid_chars":"Your search query contains invalid characters ({invalidChars}). Remove these and try again.","nav_support_dashboard":"My Dashboard","nav_support_home":"Home","nav_support_service_status":"Service Status","nav_support_submit_ticket":"Submit a Ticket","nav_tabletennis_cta_buy_now":"Buy Now","nav_undeadnightmare_buy_now":"Buy Now","nav_undeadnightmare_discover":"Discover","nav_undeadnightmare_gallery":"Gallery","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"News","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Specifications","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"View All","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","search_action":"Search","search_close_button":"Close Search","search_open_button":"Open Search","search_placeholder":"Search Rockstar Games...","search_target_aria_label":"Search {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Games","search_target_jobs":"Jobs","search_target_posts":"Posts","search_target_user_photos":"User Photos","search_target_user_videos":"User Videos","search_target_users":"Users","search_target_videos":"Videos"},"de":{"accessibility_skip_button":"Zum Hauptinhalt springen","games_menu_featured":"Ausgewählte Spiele","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Alle anzeigen","language_selector_default":"Sprache auswählen","nav_bully_accomplishments":"Erfolge","nav_bully_cta_buy_now":"Jetzt kaufen","nav_bully_game_overview":"Entdecken","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Stellenangebote auf LinkedIn","nav_careers_contact_us":"Kontaktiere uns","nav_careers_home":"Startseite","nav_careers_openings":"Stellenangebote","nav_cta_get_launcher":"Launcher herunterladen","nav_gta_trilogy_accomplishments":"Erfolge","nav_gta_trilogy_cta_buy_now":"Jetzt kaufen","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Überblick","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Jetzt kaufen","nav_gtaiv_accomplishments":"Erfolge","nav_gtaiv_cta_buy_now":"Jetzt kaufen","nav_gtaiv_overview":"Entdecken","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Erfolge","nav_gtaiveflc_overview":"Überblick","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Erfolge","nav_gtao_browse_crews":"Alle Crews ansehen","nav_gtao_checklist":"Checkliste","nav_gtao_community":"Community","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crew erstellen","nav_gtao_cta_buy_now":"Jetzt kaufen","nav_gtao_discover":"Entdecken","nav_gtao_emblem_editor":"Emblem-Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Alle Jobs ansehen","nav_gtao_jobs_playlists":"Spielelisten","nav_gtao_license_plate_creator":"Nummernschild-Editor","nav_gtao_missions":"Missionen","nav_gtao_my_character":"Mein Charakter","nav_gtao_my_crews":"Meine Crews","nav_gtao_my_jobs":"Meine Jobs","nav_gtao_overview":"Überblick","nav_gtao_photos":"Fotos","nav_gtao_stats":"Statistiken","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Jetzt kaufen","nav_gtav_accomplishments":"Erfolge","nav_gtav_checklist":"Checkliste","nav_gtav_community":"Community","nav_gtav_create_crew":"Crew erstellen","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Alle Crews ansehen","nav_gtav_cta_buy_now":"Jetzt kaufen","nav_gtav_discover":"Entdecken","nav_gtav_emblem_editor":"Emblem-Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Alle Jobs ansehen","nav_gtav_licence_plate_creator":"Nummernschild-Editor","nav_gtav_missions":"Missionen","nav_gtav_my_character":"Mein Charakter","nav_gtav_my_crews":"Meine Crews","nav_gtav_my_jobs":"Meine Jobs","nav_gtav_overview":"Überblick","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Spielelisten","nav_gtav_stats":"Statistiken","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Jetzt kaufen","nav_gtavc_discover":"Entdecken","nav_gtavcs_discover":"Entdecken","nav_lanoire_accomplishments":"Erfolge","nav_lanoire_badge_pursuit":"Jagd nach Abzeichen","nav_lanoire_case_tracker":"Ermittlungsakten","nav_lanoire_checklist":"Checkliste","nav_lanoire_cta_buy_now":"Jetzt kaufen","nav_lanoire_official_site":"Offizielle Seite","nav_lanoire_overview":"Überblick","nav_lanoire_pc_console":"PC/Konsole","nav_lanoire_progress":"Fortschritt","nav_lanoire_stats":"Statistiken","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Jetzt kaufen","nav_more_dropdown":"Mehr","nav_mp3_accomplishments":"Erfolge","nav_mp3_career":"Karriere","nav_mp3_chapters":"Kapitel","nav_mp3_checklist":"Checkliste","nav_mp3_checkpoint_challenge":"Kontrollpunkt-Herausforderung","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Jetzt kaufen","nav_mp3_featured":"Vorgestellt","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Bestenlisten","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Neuigkeiten","nav_mp3_ny_minute":"Eine Minute in New York","nav_mp3_official_site":"Offizielle Seite","nav_mp3_overview":"Überblick","nav_mp3_progress":"Fortschritt","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Spezifikationen","nav_mp3_support":"Support","nav_mp3_weapons":"Waffen","nav_opens_in_new_window":"{text} (Link öffnet ein neues Fenster)","nav_quick_access_games":"Spiele","nav_quick_access_home":"Startseite","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Erfolge","nav_rdo_awards":"Auszeichnungen","nav_rdo_benefits":"Vorteile","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Club-Belohnungen","nav_rdo_community":"Community","nav_rdo_competitive_series":"Wettkampf-Serie","nav_rdo_cta_buy_now":"Jetzt kaufen","nav_rdo_customization":"Individualisierung","nav_rdo_explore":"Entdecken","nav_rdo_getting_started":"Erste Schritte","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mein Charakter","nav_rdo_overview":"Überblick","nav_rdo_photos":"Fotos","nav_rdo_posses":"Trupps","nav_rdo_posses_free_roam":"Trupps und Free Roam","nav_rdo_progress":"Fortschritt","nav_rdo_progression":"Fortschritt","nav_rdo_rank_unlocks":"Rang-Freischaltungen","nav_rdo_roles":"Rollen","nav_rdo_specialist_roles":"Spezialrollen","nav_rdo_story_missions":"Storymissionen","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Jetzt kaufen","nav_rdr2_accomplishments":"Erfolge","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Herausforderungen","nav_rdr2_chapters":"Kapitel","nav_rdr2_character":"Charakter","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Jetzt kaufen","nav_rdr2_explore":"Entdecken","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Schauplätze","nav_rdr2_media":"Medien","nav_rdr2_music":"Musik","nav_rdr2_online":"Online","nav_rdr2_overview":"Überblick","nav_rdr2_progress":"Fortschritt","nav_rdr2_stats":"Statistiken","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"Die Van-der-Linde-Bande","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Waffen","nav_rdr2_wildlife":"Tierwelt","nav_rockstargames_home":"Rockstar-Games-Startseite","nav_rockstargames_logo":"Klicken, um das Menü zu öffnen","nav_rsg_downloads":"Downloads","nav_rsg_games":"Spiele","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Deine Suchanfrage ist zu kurz. Suchbegriffe müssen mindestens {count} Zeichen lang sein.","nav_search_error_too_short_invalid_chars":"Deine Suchanfrage beinhaltet ungültige Zeichen ({invalidChars}). Bitte entferne diese und versuche es erneut.","nav_support_dashboard":"Meine Übersicht","nav_support_home":"Startseite","nav_support_service_status":"Service-Status","nav_support_submit_ticket":"Eine Anfrage einreichen","nav_tabletennis_cta_buy_now":"Jetzt kaufen","nav_undeadnightmare_buy_now":"Jetzt kaufen","nav_undeadnightmare_discover":"Entdecken","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Medien","nav_undeadnightmare_news":"Neuigkeiten","nav_undeadnightmare_ps3_digital":"PS3 – Digital","nav_undeadnightmare_specs":"Spezifikationen","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 – Digital","nav_view_all_games":"Alle anzeigen","profile_selector_mugshot":"{userName} Verbrecherfoto","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","search_action":"Suchen","search_close_button":"Suche schließen","search_open_button":"Suche öffnen","search_placeholder":"Rockstar Games durchsuchen …","search_target_aria_label":"Durchsuche {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Spiele","search_target_jobs":"Jobs","search_target_posts":"Beiträge","search_target_user_photos":"Fotos von Nutzern","search_target_user_videos":"Videos von Nutzern","search_target_users":"Nutzer","search_target_videos":"Videos"},"es":{"accessibility_skip_button":"Pasar al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","language_selector_default":"Selecciona un idioma","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Asistencia técnica","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contacta con nosotros","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Asistencia técnica","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Asistencia técnica","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Asistencia técnica","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de partidas","nav_gtao_license_plate_creator":"Creador de matrículas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Asistencia técnica","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de matrículas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de partidas","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Asistencia técnica","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio web oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Asistencia técnica","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio web oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Asistencia técnica","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una nueva ventana)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Ventajas","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Cuadrillas","nav_rdo_posses_free_roam":"Cuadrillas y Modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles especializados","nav_rdo_story_missions":"Misiones de la historia","nav_rdo_support":"Asistencia técnica","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Asistencia técnica","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Asistencia técnica","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Tu búsqueda es demasiado corta. Las búsquedas deben contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres que no son válidos ({invalidChars}). Quítalos e inténtalo de nuevo.","nav_support_dashboard":"Mi panel","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Asistencia técnica","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Vídeos de usuarios","search_target_users":"Usuarios","search_target_videos":"Vídeos"},"mx":{"accessibility_skip_button":"Ir al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","language_selector_default":"Seleccionar un idioma","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Soporte","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contáctanos","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Soporte","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Soporte","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Soporte","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de juego","nav_gtao_license_plate_creator":"Creador de placas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Soporte","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de placas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de juego","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Soporte","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Soporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Soporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una ventana nueva)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Canal de noticias","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Beneficios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Clanes","nav_rdo_posses_free_roam":"Clanes y modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles de especialistas","nav_rdo_story_missions":"Misiones narrativas","nav_rdo_support":"Soporte","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Soporte","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Armamento","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Canal de noticias","nav_rsg_store":"Tienda","nav_rsg_support":"Soporte","nav_rsg_videos":"Videos","nav_search_error_too_short":"Tu búsqueda es muy corta, ya que debe contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres no válidos: {invalidChars}. Quítalos de la búsqueda y vuelve a intentarlo.","nav_support_dashboard":"Mi panel de control","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Soporte","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Videos de usuarios","search_target_users":"Usuarios","search_target_videos":"Videos"},"fr":{"accessibility_skip_button":"Passer au contenu principal","games_menu_featured":"Jeux à la une","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Voir tout","language_selector_default":"Sélectionner une langue","nav_bully_accomplishments":"Exploits","nav_bully_cta_buy_now":"Acheter maintenant","nav_bully_game_overview":"Découvrir","nav_bully_Overview":"Assistance","nav_bully_videos":"Vidéos","nav_careers_careers_on_linkedin":"Emplois sur LinkedIn","nav_careers_contact_us":"Nous contacter","nav_careers_home":"Accueil","nav_careers_openings":"Postes à pourvoir","nav_cta_get_launcher":"Obtenir le Launcher","nav_gta_trilogy_accomplishments":"Exploits","nav_gta_trilogy_cta_buy_now":"Acheter maintenant","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Vue d\'ensemble","nav_gta_trilogy_support":"Assistance","nav_gta3_cta_buy_now":"Acheter maintenant","nav_gtaiv_accomplishments":"Exploits","nav_gtaiv_cta_buy_now":"Acheter maintenant","nav_gtaiv_overview":"Découvrir","nav_gtaiv_support":"Assistance","nav_gtaiveflc_accomplishments":"Exploits","nav_gtaiveflc_overview":"Vue d\'ensemble","nav_gtaiveflc_support":"Assistance","nav_gtao_accomplishments":"Exploits","nav_gtao_browse_crews":"Parcourir tous les crews","nav_gtao_checklist":"Check-list","nav_gtao_community":"Communauté","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Créer un crew","nav_gtao_cta_buy_now":"Acheter maintenant","nav_gtao_discover":"Découvrir","nav_gtao_emblem_editor":"Éditeur d\'emblèmes","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Activités","nav_gtao_jobs_browse_all":"Parcourir toutes les activités","nav_gtao_jobs_playlists":"Listes","nav_gtao_license_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtao_missions":"Missions","nav_gtao_my_character":"Mon personnage","nav_gtao_my_crews":"Mes crews","nav_gtao_my_jobs":"Mes activités","nav_gtao_overview":"Vue d\'ensemble","nav_gtao_photos":"Photos","nav_gtao_stats":"Statistiques","nav_gtao_story":"Histoire","nav_gtao_support":"Assistance","nav_gtao_videos":"Vidéos","nav_gtasanandreas_cta_buy_now":"Acheter maintenant","nav_gtav_accomplishments":"Exploits","nav_gtav_checklist":"Check-list","nav_gtav_community":"Communauté","nav_gtav_create_crew":"Créer un crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Parcourir tous les crews","nav_gtav_cta_buy_now":"Acheter maintenant","nav_gtav_discover":"Découvrir","nav_gtav_emblem_editor":"Éditeur d\'emblèmes","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Activités","nav_gtav_jobs_browse_all":"Parcourir toutes les activités","nav_gtav_licence_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtav_missions":"Missions","nav_gtav_my_character":"Mon personnage","nav_gtav_my_crews":"Mes crews","nav_gtav_my_jobs":"Mes activités","nav_gtav_overview":"Vue d\'ensemble","nav_gtav_photos":"Photos","nav_gtav_playlists":"Listes","nav_gtav_stats":"Statistiques","nav_gtav_story":"Histoire","nav_gtav_support":"Assistance","nav_gtav_videos":"Vidéos","nav_gtavc_cta_buy_now":"Acheter maintenant","nav_gtavc_discover":"Découvrir","nav_gtavcs_discover":"Découvrir","nav_lanoire_accomplishments":"Exploits","nav_lanoire_badge_pursuit":"Défi Traque & plaque","nav_lanoire_case_tracker":"Suivi d\'affaires","nav_lanoire_checklist":"Check-list","nav_lanoire_cta_buy_now":"Acheter maintenant","nav_lanoire_official_site":"Site officiel","nav_lanoire_overview":"Vue d\'ensemble","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progression","nav_lanoire_stats":"Statistiques","nav_lanoire_support":"Assistance","nav_lanoire_vr_case_files":"Les enquêtes VR","nav_midnightclubla_buy_now":"Acheter maintenant","nav_more_dropdown":"Plus","nav_mp3_accomplishments":"Exploits","nav_mp3_career":"Carrière","nav_mp3_chapters":"Chapitres","nav_mp3_checklist":"Check-list","nav_mp3_checkpoint_challenge":"Défi points de passage","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Acheter maintenant","nav_mp3_featured":"À la une","nav_mp3_grinds":"Défis","nav_mp3_leaderboards":"Classements","nav_mp3_multiplayer":"Multijoueur","nav_mp3_news":"Actualités","nav_mp3_ny_minute":"Minute new-yorkaise","nav_mp3_official_site":"Site officiel","nav_mp3_overview":"Vue d\'ensemble","nav_mp3_progress":"Progression","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Solo","nav_mp3_specifications":"Configuration","nav_mp3_support":"Assistance","nav_mp3_weapons":"Armes","nav_opens_in_new_window":"{text} (Le lien s\'ouvrira dans une nouvelle fenêtre)","nav_quick_access_games":"Jeux","nav_quick_access_home":"Accueil","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Exploits","nav_rdo_awards":"Récompenses","nav_rdo_benefits":"Avantages","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Récompenses du club","nav_rdo_community":"Communauté","nav_rdo_competitive_series":"Séries compétitives","nav_rdo_cta_buy_now":"Acheter maintenant","nav_rdo_customization":"Personnalisation","nav_rdo_explore":"Explorer","nav_rdo_getting_started":"Bien démarrer","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mon personnage","nav_rdo_overview":"Vue d\'ensemble","nav_rdo_photos":"Photos","nav_rdo_posses":"Groupes","nav_rdo_posses_free_roam":"Groupes et mode exploration","nav_rdo_progress":"Progression","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Éléments à déverrouiller","nav_rdo_roles":"Rôles","nav_rdo_specialist_roles":"Rôles spécialisés","nav_rdo_story_missions":"Missions de l\'histoire","nav_rdo_support":"Assistance","nav_rdr_cta_buy_now":"Acheter maintenant","nav_rdr2_accomplishments":"Exploits","nav_rdr2_artwork":"Illustrations","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Défis","nav_rdr2_chapters":"Chapitres","nav_rdr2_character":"Personnage","nav_rdr2_compendium":"Encyclopédie","nav_rdr2_cta_buy_now":"Acheter maintenant","nav_rdr2_explore":"Explorer","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Lieux","nav_rdr2_media":"Média","nav_rdr2_music":"Musique","nav_rdr2_online":"En ligne","nav_rdr2_overview":"Vue d\'ensemble","nav_rdr2_progress":"Progression","nav_rdr2_stats":"Statistiques","nav_rdr2_support":"Assistance","nav_rdr2_van_der_linde_gang":"La bande de Van der Linde","nav_rdr2_videos":"Vidéos","nav_rdr2_weaponry":"Armes","nav_rdr2_wildlife":"Vie sauvage","nav_rockstargames_home":"Accueil Rockstar Games","nav_rockstargames_logo":"Cliquez pour ouvrir le menu","nav_rsg_downloads":"Téléchargements","nav_rsg_games":"Jeux","nav_rsg_newswire":"Newswire","nav_rsg_store":"Boutique","nav_rsg_support":"Assistance","nav_rsg_videos":"Vidéos","nav_search_error_too_short":"Requête trop courte. Votre requête doit comporter au moins {count} caractères.","nav_search_error_too_short_invalid_chars":"Votre requête contient des caractères non valides ({invalidChars}). Veuillez les supprimer et réessayer.  ","nav_support_dashboard":"Mon tableau de bord","nav_support_home":"Accueil","nav_support_service_status":"État du service","nav_support_submit_ticket":"Envoyer une demande d\'assistance","nav_tabletennis_cta_buy_now":"Acheter maintenant","nav_undeadnightmare_buy_now":"Acheter maintenant","nav_undeadnightmare_discover":"Découvrir","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Infos","nav_undeadnightmare_media":"Média","nav_undeadnightmare_news":"Actualités","nav_undeadnightmare_ps3_digital":"PS3 - Version numérique","nav_undeadnightmare_specs":"Configuration","nav_undeadnightmare_suport":"Assistance","nav_undeadnightmare_videos":"Vidéos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Version numérique","nav_view_all_games":"Voir tout","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","quick_access_title":"Rockstar Games","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"Inscription","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","search_action":"Rechercher","search_close_button":"Fermer la recherche","search_open_button":"Ouvrir la recherche","search_placeholder":"Recherche sur Rockstar Games...","search_target_aria_label":"Rechercher {target}","search_target_community":"Communauté","search_target_crews":"Crews","search_target_games":"Jeux","search_target_jobs":"Activités","search_target_posts":"Publications","search_target_user_photos":"Photos d\'utilisateurs","search_target_user_videos":"Vidéos d\'utilisateurs","search_target_users":"Utilisateurs","search_target_videos":"Vidéos"},"it":{"accessibility_skip_button":"Vai ai contenuti principali","games_menu_featured":"Giochi in evidenza","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Visualizza tutto","language_selector_default":"Seleziona una lingua","nav_bully_accomplishments":"Premi","nav_bully_cta_buy_now":"Acquista ora","nav_bully_game_overview":"Scopri","nav_bully_Overview":"Supporto","nav_bully_videos":"Video","nav_careers_careers_on_linkedin":"Carriere su LinkedIn","nav_careers_contact_us":"Contattaci","nav_careers_home":"Home","nav_careers_openings":"Possibilità di impiego","nav_cta_get_launcher":"Ottieni il launcher","nav_gta_trilogy_accomplishments":"Premi","nav_gta_trilogy_cta_buy_now":"Acquista ora","nav_gta_trilogy_gta3":"GTAIII","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Panoramica","nav_gta_trilogy_support":"Supporto","nav_gta3_cta_buy_now":"Acquista ora","nav_gtaiv_accomplishments":"Premi","nav_gtaiv_cta_buy_now":"Acquista ora","nav_gtaiv_overview":"Scopri","nav_gtaiv_support":"Supporto","nav_gtaiveflc_accomplishments":"Premi","nav_gtaiveflc_overview":"Panoramica","nav_gtaiveflc_support":"Supporto","nav_gtao_accomplishments":"Premi","nav_gtao_browse_crews":"Esplora le crew","nav_gtao_checklist":"Lista","nav_gtao_community":"Community","nav_gtao_crews":"Crew","nav_gtao_crews_create":"Crea una crew","nav_gtao_cta_buy_now":"Acquista ora","nav_gtao_discover":"Scopri","nav_gtao_emblem_editor":"Editor simboli","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guide","nav_gtao_jobs":"Attività","nav_gtao_jobs_browse_all":"Esplora le attività","nav_gtao_jobs_playlists":"Elenchi partite","nav_gtao_license_plate_creator":"Creatore di targhe","nav_gtao_missions":"Missioni","nav_gtao_my_character":"Il mio personaggio","nav_gtao_my_crews":"Le mie crew","nav_gtao_my_jobs":"Le mie attività","nav_gtao_overview":"Panoramica","nav_gtao_photos":"Foto","nav_gtao_stats":"Statistiche","nav_gtao_story":"Storia","nav_gtao_support":"Supporto","nav_gtao_videos":"Video","nav_gtasanandreas_cta_buy_now":"Acquista ora","nav_gtav_accomplishments":"Premi","nav_gtav_checklist":"Lista","nav_gtav_community":"Community","nav_gtav_create_crew":"Crea una crew","nav_gtav_crews":"Crew","nav_gtav_crews_browse_all":"Esplora le crew","nav_gtav_cta_buy_now":"Acquista ora","nav_gtav_discover":"Scopri","nav_gtav_emblem_editor":"Editor simboli","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guide","nav_gtav_jobs":"Attività","nav_gtav_jobs_browse_all":"Esplora le attività","nav_gtav_licence_plate_creator":"Creatore di targhe","nav_gtav_missions":"Missioni","nav_gtav_my_character":"Il mio personaggio","nav_gtav_my_crews":"Le mie crew","nav_gtav_my_jobs":"Le mie attività","nav_gtav_overview":"Panoramica","nav_gtav_photos":"Foto","nav_gtav_playlists":"Elenchi partite","nav_gtav_stats":"Statistiche","nav_gtav_story":"Storia","nav_gtav_support":"Supporto","nav_gtav_videos":"Video","nav_gtavc_cta_buy_now":"Acquista ora","nav_gtavc_discover":"Scopri","nav_gtavcs_discover":"Scopri","nav_lanoire_accomplishments":"Premi","nav_lanoire_badge_pursuit":"Ricerca dei distintivi","nav_lanoire_case_tracker":"Registro dei casi","nav_lanoire_checklist":"Lista","nav_lanoire_cta_buy_now":"Acquista ora","nav_lanoire_official_site":"Sito ufficiale","nav_lanoire_overview":"Panoramica","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Statistiche","nav_lanoire_support":"Supporto","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Acquista ora","nav_more_dropdown":"Altro","nav_mp3_accomplishments":"Premi","nav_mp3_career":"Carriera","nav_mp3_chapters":"Capitoli","nav_mp3_checklist":"Lista","nav_mp3_checkpoint_challenge":"Sfida a checkpoint","nav_mp3_crews":"Crew","nav_mp3_cta_buy_now":"Acquista ora","nav_mp3_featured":"In evidenza","nav_mp3_grinds":"Sgobbate","nav_mp3_leaderboards":"Classifiche","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Notizie","nav_mp3_ny_minute":"Ultimo respiro","nav_mp3_official_site":"Sito ufficiale","nav_mp3_overview":"Panoramica","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Sfida a punti","nav_mp3_singleplayer":"Giocatore singolo","nav_mp3_specifications":"Requisiti","nav_mp3_support":"Supporto","nav_mp3_weapons":"Armi","nav_opens_in_new_window":"{text} (Il link si apre in una nuova finestra)","nav_quick_access_games":"Giochi","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Premi","nav_rdo_awards":"Ricompense","nav_rdo_benefits":"Vantaggi","nav_rdo_catalogue":"Catalogo","nav_rdo_club_rewards":"Ricompense del club","nav_rdo_community":"Community","nav_rdo_competitive_series":"Serie competitive","nav_rdo_cta_buy_now":"Acquista ora","nav_rdo_customization":"Personalizzazione","nav_rdo_explore":"Esplora","nav_rdo_getting_started":"Come iniziare","nav_rdo_guides":"Guide","nav_rdo_my_character":"Il mio personaggio","nav_rdo_overview":"Panoramica","nav_rdo_photos":"Foto","nav_rdo_posses":"Posse","nav_rdo_posses_free_roam":"Posse e Free Roam","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressione","nav_rdo_rank_unlocks":"Sbloccabili con rango","nav_rdo_roles":"Ruoli","nav_rdo_specialist_roles":"Ruoli specializzati","nav_rdo_story_missions":"Missioni della storia","nav_rdo_support":"Supporto","nav_rdr_cta_buy_now":"Acquista ora","nav_rdr2_accomplishments":"Premi","nav_rdr2_artwork":"Illustrazioni","nav_rdr2_catalogue":"Catalogo","nav_rdr2_challenges":"Sfide","nav_rdr2_chapters":"Capitoli","nav_rdr2_character":"Personaggio","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Acquista ora","nav_rdr2_explore":"Esplora","nav_rdr2_gallery":"Galleria","nav_rdr2_locations":"Luoghi","nav_rdr2_media":"Media","nav_rdr2_music":"Musica","nav_rdr2_online":"Online","nav_rdr2_overview":"Panoramica","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Statistiche","nav_rdr2_support":"Supporto","nav_rdr2_van_der_linde_gang":"La banda di Van der Linde","nav_rdr2_videos":"Video","nav_rdr2_weaponry":"Arsenale","nav_rdr2_wildlife":"Fauna selvatica","nav_rockstargames_home":"Home Rockstar Games","nav_rockstargames_logo":"Clicca per aprire il menu","nav_rsg_downloads":"Download","nav_rsg_games":"Giochi","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Supporto","nav_rsg_videos":"Video","nav_search_error_too_short":"La tua ricerca è troppo corta. Le ricerce devono contenere almeno {count} caratteri.","nav_search_error_too_short_invalid_chars":"La tua ricerca contiene dei caratteri non validi ({invalidChars}). Rimuovili e riprova.","nav_support_dashboard":"La mia dashboard","nav_support_home":"Home","nav_support_service_status":"Stato del servizio","nav_support_submit_ticket":"Invia un ticket","nav_tabletennis_cta_buy_now":"Acquista ora","nav_undeadnightmare_buy_now":"Acquista ora","nav_undeadnightmare_discover":"Scopri","nav_undeadnightmare_gallery":"Galleria","nav_undeadnightmare_info":"Informazioni","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"Notizie","nav_undeadnightmare_ps3_digital":"PS3 - Digitale","nav_undeadnightmare_specs":"Requisiti","nav_undeadnightmare_suport":"Supporto","nav_undeadnightmare_videos":"Video","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digitale","nav_view_all_games":"Visualizza tutto","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_activity_feed":"Attività dei feed","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Aiuto","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","search_action":"Cerca","search_close_button":"Apri ricerca","search_open_button":"Chiudi ricerca","search_placeholder":"Cerca in Rockstar Games...","search_target_aria_label":"Cerca {target}","search_target_community":"Community","search_target_crews":"Crew","search_target_games":"Giochi","search_target_jobs":"Attività","search_target_posts":"Post","search_target_user_photos":"Foto utente","search_target_user_videos":"Video utente","search_target_users":"Utenti","search_target_videos":"Video"},"jp":{"accessibility_skip_button":"メインコンテンツまでスキップ","games_menu_featured":"注目のゲーム","games_menu_gta_online":"GTAオンライン","games_menu_gta_trilogy":"グランド・セフト・オート：トリロジー","games_menu_gta_v":"グランド・セフト・オートV","games_menu_rdr_2":"レッド・デッド・リデンプション2","games_menu_rdr_online":"レッド・デッド・オンライン","games_menu_view_all":"全て表示","language_selector_default":"言語を選択","nav_bully_accomplishments":"実績","nav_bully_cta_buy_now":"今すぐ購入","nav_bully_game_overview":"概要","nav_bully_Overview":"サポート","nav_bully_videos":"ビデオ","nav_careers_careers_on_linkedin":"LinkedInキャリア","nav_careers_contact_us":"お問い合せ","nav_careers_home":"ホーム","nav_careers_openings":"求人","nav_cta_get_launcher":"Launcherを入手","nav_gta_trilogy_accomplishments":"実績","nav_gta_trilogy_cta_buy_now":"今すぐ購入","nav_gta_trilogy_gta3":"グランド・セフト・オートIII","nav_gta_trilogy_gtasa":"グランド・セフト・オート：サンアンドレアス","nav_gta_trilogy_gtavc":"グランド・セフト・オート：バイスシティ","nav_gta_trilogy_overview":"概要","nav_gta_trilogy_support":"サポート","nav_gta3_cta_buy_now":"今すぐ購入","nav_gtaiv_accomplishments":"実績","nav_gtaiv_cta_buy_now":"今すぐ購入","nav_gtaiv_overview":"概要","nav_gtaiv_support":"サポート","nav_gtaiveflc_accomplishments":"実績","nav_gtaiveflc_overview":"概要","nav_gtaiveflc_support":"サポート","nav_gtao_accomplishments":"実績","nav_gtao_browse_crews":"全てのクルーを見る","nav_gtao_checklist":"チェックリスト","nav_gtao_community":"コミュニティ","nav_gtao_crews":"クルー","nav_gtao_crews_create":"クルーを作成","nav_gtao_cta_buy_now":"今すぐ購入","nav_gtao_discover":"概要","nav_gtao_emblem_editor":"エンブレム・エディター","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTAオンライン","nav_gtao_guides":"ガイド","nav_gtao_jobs":"ジョブ","nav_gtao_jobs_browse_all":"全てのジョブを見る","nav_gtao_jobs_playlists":"プレイリスト","nav_gtao_license_plate_creator":"ナンバープレートクリエイター","nav_gtao_missions":"ミッション","nav_gtao_my_character":"マイ・キャラクター","nav_gtao_my_crews":"自分のクルー","nav_gtao_my_jobs":"マイ・ジョブ","nav_gtao_overview":"概要","nav_gtao_photos":"写真","nav_gtao_stats":"データ","nav_gtao_story":"ストーリー","nav_gtao_support":"サポート","nav_gtao_videos":"ビデオ","nav_gtasanandreas_cta_buy_now":"今すぐ購入","nav_gtav_accomplishments":"実績","nav_gtav_checklist":"チェックリスト","nav_gtav_community":"コミュニティ","nav_gtav_create_crew":"クルーを作成","nav_gtav_crews":"クルー","nav_gtav_crews_browse_all":"全てのクルーを見る","nav_gtav_cta_buy_now":"今すぐ購入","nav_gtav_discover":"概要","nav_gtav_emblem_editor":"エンブレム・エディター","nav_gtav_gta_online":"GTAオンライン","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"ガイド","nav_gtav_jobs":"ジョブ","nav_gtav_jobs_browse_all":"全てのジョブを見る","nav_gtav_licence_plate_creator":"ナンバープレートクリエイター","nav_gtav_missions":"ミッション","nav_gtav_my_character":"マイ・キャラクター","nav_gtav_my_crews":"自分のクルー","nav_gtav_my_jobs":"マイ・ジョブ","nav_gtav_overview":"概要","nav_gtav_photos":"写真","nav_gtav_playlists":"プレイリスト","nav_gtav_stats":"データ","nav_gtav_story":"ストーリー","nav_gtav_support":"サポート","nav_gtav_videos":"ビデオ","nav_gtavc_cta_buy_now":"今すぐ購入","nav_gtavc_discover":"概要","nav_gtavcs_discover":"概要","nav_lanoire_accomplishments":"実績","nav_lanoire_badge_pursuit":"バッジ探索チャレンジ","nav_lanoire_case_tracker":"事件トラッカー","nav_lanoire_checklist":"チェックリスト","nav_lanoire_cta_buy_now":"今すぐ購入","nav_lanoire_official_site":"オフィシャルサイト","nav_lanoire_overview":"概要","nav_lanoire_pc_console":"PC/コンソール","nav_lanoire_progress":"進行状況","nav_lanoire_stats":"データ","nav_lanoire_support":"サポート","nav_lanoire_vr_case_files":"VR事件簿","nav_midnightclubla_buy_now":"今すぐ購入","nav_more_dropdown":"もっと見る","nav_mp3_accomplishments":"実績","nav_mp3_career":"キャリア","nav_mp3_chapters":"チャプター","nav_mp3_checklist":"チェックリスト","nav_mp3_checkpoint_challenge":"チェックポイントチャレンジ","nav_mp3_crews":"クルー","nav_mp3_cta_buy_now":"今すぐ購入","nav_mp3_featured":"ピックアップ","nav_mp3_grinds":"グラインド","nav_mp3_leaderboards":"ランキング","nav_mp3_multiplayer":"マルチプレイ","nav_mp3_news":"ニュース","nav_mp3_ny_minute":"ニューヨーク・ミニッツ","nav_mp3_official_site":"オフィシャルサイト","nav_mp3_overview":"概要","nav_mp3_progress":"進行状況","nav_mp3_score_attack":"スコアアタック","nav_mp3_singleplayer":"シングルプレイ","nav_mp3_specifications":"システム要件","nav_mp3_support":"サポート","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}(リンクは新しいウィンドウで開きます)","nav_quick_access_games":"ゲーム","nav_quick_access_home":"ホーム","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"実績","nav_rdo_awards":"アワード","nav_rdo_benefits":"特典","nav_rdo_catalogue":"カタログ","nav_rdo_club_rewards":"クラブ報酬","nav_rdo_community":"コミュニティ","nav_rdo_competitive_series":"対戦シリーズ","nav_rdo_cta_buy_now":"今すぐ購入","nav_rdo_customization":"カスタマイズ","nav_rdo_explore":"探索","nav_rdo_getting_started":"始めよう","nav_rdo_guides":"ガイド","nav_rdo_my_character":"マイ・キャラクター","nav_rdo_overview":"概要","nav_rdo_photos":"写真","nav_rdo_posses":"民警団","nav_rdo_posses_free_roam":"民警団＆放浪モード","nav_rdo_progress":"進行状況","nav_rdo_progression":"進行状況","nav_rdo_rank_unlocks":"ランク解除","nav_rdo_roles":"役割","nav_rdo_specialist_roles":"専門的な役割","nav_rdo_story_missions":"ストーリーミッション","nav_rdo_support":"サポート","nav_rdr_cta_buy_now":"今すぐ購入","nav_rdr2_accomplishments":"実績","nav_rdr2_artwork":"アートワーク","nav_rdr2_catalogue":"カタログ","nav_rdr2_challenges":"チャレンジ","nav_rdr2_chapters":"チャプター","nav_rdr2_character":"キャラクター","nav_rdr2_compendium":"図鑑","nav_rdr2_cta_buy_now":"今すぐ購入","nav_rdr2_explore":"探索","nav_rdr2_gallery":"ギャラリー","nav_rdr2_locations":"目的地","nav_rdr2_media":"メディア","nav_rdr2_music":"音楽","nav_rdr2_online":"オンライン","nav_rdr2_overview":"概要","nav_rdr2_progress":"進行状況","nav_rdr2_stats":"データ","nav_rdr2_support":"サポート","nav_rdr2_van_der_linde_gang":"ダッチギャング","nav_rdr2_videos":"ビデオ","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"ロックスター・ゲームスホーム","nav_rockstargames_logo":"クリックしてメニューを開く","nav_rsg_downloads":"ダウンロード","nav_rsg_games":"ゲーム","nav_rsg_newswire":"Newswire","nav_rsg_store":"ストア","nav_rsg_support":"サポート","nav_rsg_videos":"ビデオ","nav_search_error_too_short":"検索文字数が少なすぎます。{count}文字以上にしてください。","nav_search_error_too_short_invalid_chars":"検索文字に無効な文字({invalidChars})が含まれています。無効な文字を削除してもう一度お試しください。","nav_support_dashboard":"ダッシュボード","nav_support_home":"ホーム","nav_support_service_status":"サービス状況","nav_support_submit_ticket":"チケットを送信","nav_tabletennis_cta_buy_now":"今すぐ購入","nav_undeadnightmare_buy_now":"今すぐ購入","nav_undeadnightmare_discover":"概要","nav_undeadnightmare_gallery":"ギャラリー","nav_undeadnightmare_info":"情報","nav_undeadnightmare_media":"メディア","nav_undeadnightmare_news":"ニュース","nav_undeadnightmare_ps3_digital":"PS3 - ダウンロード版","nav_undeadnightmare_specs":"システム要件","nav_undeadnightmare_suport":"サポート","nav_undeadnightmare_videos":"ビデオ","nav_undeadnightmare_xbox360_digital":"Xbox 360 - ダウンロード版","nav_view_all_games":"全て表示","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリ","profile_selector_switch_character":"キャラクター変更","quick_access_title":"Rockstar Games","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"ドラッグメニューハンドル","sc_menu_toggle":"Social Clubメニューを切り替え","search_action":"検索","search_close_button":"検索を閉じる","search_open_button":"検索を開く","search_placeholder":"ロックスター・ゲームス内を検索…","search_target_aria_label":"{target}を検索","search_target_community":"コミュニティ","search_target_crews":"クルー","search_target_games":"ゲーム","search_target_jobs":"ジョブ","search_target_posts":"投稿","search_target_user_photos":"ユーザー写真","search_target_user_videos":"ユーザービデオ","search_target_users":"ユーザー","search_target_videos":"ビデオ"},"kr":{"accessibility_skip_button":"주 콘텐츠로 건너뛰기","games_menu_featured":"특선 게임","games_menu_gta_online":"Grand Theft Auto 온라인","games_menu_gta_trilogy":"Grand Theft Auto: 트릴로지","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 온라인","games_menu_view_all":"모두 보기","language_selector_default":"언어 선택","nav_bully_accomplishments":"업적","nav_bully_cta_buy_now":"지금 구입","nav_bully_game_overview":"탐색","nav_bully_Overview":"지원","nav_bully_videos":"동영상","nav_careers_careers_on_linkedin":"LinkedIn 채용","nav_careers_contact_us":"문의","nav_careers_home":"홈","nav_careers_openings":"진행 중 공고","nav_cta_get_launcher":"Launcher 다운로드","nav_gta_trilogy_accomplishments":"업적","nav_gta_trilogy_cta_buy_now":"지금 구입","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"소개","nav_gta_trilogy_support":"지원","nav_gta3_cta_buy_now":"지금 구입","nav_gtaiv_accomplishments":"업적","nav_gtaiv_cta_buy_now":"지금 구입","nav_gtaiv_overview":"탐색","nav_gtaiv_support":"지원","nav_gtaiveflc_accomplishments":"업적","nav_gtaiveflc_overview":"소개","nav_gtaiveflc_support":"지원","nav_gtao_accomplishments":"업적","nav_gtao_browse_crews":"모든 조직 둘러보기","nav_gtao_checklist":"체크리스트","nav_gtao_community":"커뮤니티","nav_gtao_crews":"조직","nav_gtao_crews_create":"조직 생성","nav_gtao_cta_buy_now":"지금 구입","nav_gtao_discover":"탐색","nav_gtao_emblem_editor":"상징 편집기","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 온라인","nav_gtao_guides":"가이드","nav_gtao_jobs":"작업","nav_gtao_jobs_browse_all":"모든 작업 둘러보기","nav_gtao_jobs_playlists":"플레이 목록","nav_gtao_license_plate_creator":"번호판 생성기","nav_gtao_missions":"임무","nav_gtao_my_character":"내 캐릭터","nav_gtao_my_crews":"내 조직","nav_gtao_my_jobs":"내 작업","nav_gtao_overview":"소개","nav_gtao_photos":"사진","nav_gtao_stats":"통계","nav_gtao_story":"스토리","nav_gtao_support":"지원","nav_gtao_videos":"동영상","nav_gtasanandreas_cta_buy_now":"지금 구입","nav_gtav_accomplishments":"업적","nav_gtav_checklist":"체크리스트","nav_gtav_community":"커뮤니티","nav_gtav_create_crew":"조직 생성","nav_gtav_crews":"조직","nav_gtav_crews_browse_all":"모든 조직 둘러보기","nav_gtav_cta_buy_now":"지금 구입","nav_gtav_discover":"탐색","nav_gtav_emblem_editor":"상징 편집기","nav_gtav_gta_online":"GTA 온라인","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"가이드","nav_gtav_jobs":"작업","nav_gtav_jobs_browse_all":"모든 작업 둘러보기","nav_gtav_licence_plate_creator":"번호판 생성기","nav_gtav_missions":"임무","nav_gtav_my_character":"내 캐릭터","nav_gtav_my_crews":"내 조직","nav_gtav_my_jobs":"내 작업","nav_gtav_overview":"소개","nav_gtav_photos":"사진","nav_gtav_playlists":"플레이 목록","nav_gtav_stats":"통계","nav_gtav_story":"스토리","nav_gtav_support":"지원","nav_gtav_videos":"동영상","nav_gtavc_cta_buy_now":"지금 구입","nav_gtavc_discover":"탐색","nav_gtavcs_discover":"탐색","nav_lanoire_accomplishments":"업적","nav_lanoire_badge_pursuit":"배지 수집","nav_lanoire_case_tracker":"사건 추적","nav_lanoire_checklist":"체크리스트","nav_lanoire_cta_buy_now":"지금 구입","nav_lanoire_official_site":"공식 사이트","nav_lanoire_overview":"소개","nav_lanoire_pc_console":"PC/콘솔","nav_lanoire_progress":"진행","nav_lanoire_stats":"통계","nav_lanoire_support":"지원","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"지금 구입","nav_more_dropdown":"그 외","nav_mp3_accomplishments":"업적","nav_mp3_career":"경력","nav_mp3_chapters":"챕터","nav_mp3_checklist":"체크리스트","nav_mp3_checkpoint_challenge":"체크포인트 도전","nav_mp3_crews":"조직","nav_mp3_cta_buy_now":"지금 구입","nav_mp3_featured":"주요 사항","nav_mp3_grinds":"시련","nav_mp3_leaderboards":"순위표","nav_mp3_multiplayer":"멀티 플레이","nav_mp3_news":"뉴스","nav_mp3_ny_minute":"뉴욕의 시간","nav_mp3_official_site":"공식 사이트","nav_mp3_overview":"소개","nav_mp3_progress":"진행","nav_mp3_score_attack":"스코어 어택","nav_mp3_singleplayer":"싱글 플레이","nav_mp3_specifications":"사양","nav_mp3_support":"지원","nav_mp3_weapons":"무기","nav_opens_in_new_window":"{text} (새 창에서 링크 열기)","nav_quick_access_games":"게임","nav_quick_access_home":"홈","nav_quick_access_newswire":"뉴스와이어","nav_rdo_accomplishments":"업적","nav_rdo_awards":"보상","nav_rdo_benefits":"혜택","nav_rdo_catalogue":"카탈로그","nav_rdo_club_rewards":"클럽 보상","nav_rdo_community":"커뮤니티","nav_rdo_competitive_series":"경쟁 시리즈","nav_rdo_cta_buy_now":"지금 구입","nav_rdo_customization":"커스텀","nav_rdo_explore":"탐험","nav_rdo_getting_started":"시작하기","nav_rdo_guides":"가이드","nav_rdo_my_character":"내 캐릭터","nav_rdo_overview":"소개","nav_rdo_photos":"사진","nav_rdo_posses":"갱단","nav_rdo_posses_free_roam":"갱단과 유랑 모드","nav_rdo_progress":"진행","nav_rdo_progression":"진행 상황","nav_rdo_rank_unlocks":"랭크 잠금 해제","nav_rdo_roles":"직업","nav_rdo_specialist_roles":"전문 직업","nav_rdo_story_missions":"스토리 임무","nav_rdo_support":"지원","nav_rdr_cta_buy_now":"지금 구입","nav_rdr2_accomplishments":"업적","nav_rdr2_artwork":"아트워크","nav_rdr2_catalogue":"카탈로그","nav_rdr2_challenges":"도전","nav_rdr2_chapters":"챕터","nav_rdr2_character":"캐릭터","nav_rdr2_compendium":"개요","nav_rdr2_cta_buy_now":"지금 구입","nav_rdr2_explore":"탐험","nav_rdr2_gallery":"갤러리","nav_rdr2_locations":"위치","nav_rdr2_media":"미디어","nav_rdr2_music":"음악","nav_rdr2_online":"온라인","nav_rdr2_overview":"소개","nav_rdr2_progress":"진행","nav_rdr2_stats":"통계","nav_rdr2_support":"지원","nav_rdr2_van_der_linde_gang":"반 더 린드 갱단","nav_rdr2_videos":"동영상","nav_rdr2_weaponry":"무기","nav_rdr2_wildlife":"야생 동물","nav_rockstargames_home":"Rockstar Games 홈","nav_rockstargames_logo":"클릭해서 메뉴 열기","nav_rsg_downloads":"다운로드","nav_rsg_games":"게임","nav_rsg_newswire":"뉴스와이어","nav_rsg_store":"스토어","nav_rsg_support":"지원","nav_rsg_videos":"동영상","nav_search_error_too_short":"검색어가 너무 짧습니다. 검색어는 최소 {count}글자여야 합니다.","nav_search_error_too_short_invalid_chars":"검색어에 유효하지 않은 문자({invalidChars})가 포함되어 있습니다. 제거하고 다시 시도하십시오.","nav_support_dashboard":"내 대시보드","nav_support_home":"홈","nav_support_service_status":"서비스 현황","nav_support_submit_ticket":"문서 제출","nav_tabletennis_cta_buy_now":"지금 구입","nav_undeadnightmare_buy_now":"지금 구입","nav_undeadnightmare_discover":"탐색","nav_undeadnightmare_gallery":"갤러리","nav_undeadnightmare_info":"정보","nav_undeadnightmare_media":"미디어","nav_undeadnightmare_news":"뉴스","nav_undeadnightmare_ps3_digital":"PS3 - 디지털","nav_undeadnightmare_specs":"사양","nav_undeadnightmare_suport":"지원","nav_undeadnightmare_videos":"동영상","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 디지털","nav_view_all_games":"모두 보기","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","quick_access_title":"Rockstar Games","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","search_action":"검색","search_close_button":"검색 닫기","search_open_button":"검색 열기","search_placeholder":"Rockstar Games 검색...","search_target_aria_label":"{target} 검색","search_target_community":"커뮤니티","search_target_crews":"조직","search_target_games":"게임","search_target_jobs":"작업","search_target_posts":"포스팅","search_target_user_photos":"유저 사진","search_target_user_videos":"유저 동영상","search_target_users":"유저","search_target_videos":"동영상"},"pl":{"accessibility_skip_button":"Przejdź do głównej treści","games_menu_featured":"Wyróżnione gry","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Pokaż wszystkie","language_selector_default":"Wybierz język","nav_bully_accomplishments":"Osiągnięcia","nav_bully_cta_buy_now":"Kup teraz","nav_bully_game_overview":"Odkryj","nav_bully_Overview":"Wsparcie","nav_bully_videos":"Filmy","nav_careers_careers_on_linkedin":"Oferty pracy w LinkedIn","nav_careers_contact_us":"Kontakt","nav_careers_home":"Strona główna","nav_careers_openings":"Wakaty","nav_cta_get_launcher":"Pobierz aplikację","nav_gta_trilogy_accomplishments":"Osiągnięcia","nav_gta_trilogy_cta_buy_now":"Kup teraz","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Ogólny zarys","nav_gta_trilogy_support":"Wsparcie","nav_gta3_cta_buy_now":"Kup teraz","nav_gtaiv_accomplishments":"Osiągnięcia","nav_gtaiv_cta_buy_now":"Kup teraz","nav_gtaiv_overview":"Odkryj","nav_gtaiv_support":"Wsparcie","nav_gtaiveflc_accomplishments":"Osiągnięcia","nav_gtaiveflc_overview":"Ogólny zarys","nav_gtaiveflc_support":"Wsparcie","nav_gtao_accomplishments":"Osiągnięcia","nav_gtao_browse_crews":"Przeglądaj ekipy","nav_gtao_checklist":"Lista zadań","nav_gtao_community":"Społeczność","nav_gtao_crews":"Ekipy","nav_gtao_crews_create":"Stwórz ekipę","nav_gtao_cta_buy_now":"Kup teraz","nav_gtao_discover":"Odkryj","nav_gtao_emblem_editor":"Edytor emblematów","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Przewodniki","nav_gtao_jobs":"Akcje","nav_gtao_jobs_browse_all":"Przeglądaj akcje","nav_gtao_jobs_playlists":"Listy gier","nav_gtao_license_plate_creator":"Kreator tablic rejestracyjnych","nav_gtao_missions":"Misje","nav_gtao_my_character":"Moja postać","nav_gtao_my_crews":"Moje ekipy","nav_gtao_my_jobs":"Moje akcje","nav_gtao_overview":"Ogólny zarys","nav_gtao_photos":"Zdjęcia","nav_gtao_stats":"Statystyki","nav_gtao_story":"Fabuła","nav_gtao_support":"Wsparcie","nav_gtao_videos":"Filmy","nav_gtasanandreas_cta_buy_now":"Kup teraz","nav_gtav_accomplishments":"Osiągnięcia","nav_gtav_checklist":"Lista zadań","nav_gtav_community":"Społeczność","nav_gtav_create_crew":"Stwórz ekipę","nav_gtav_crews":"Ekipy","nav_gtav_crews_browse_all":"Przeglądaj ekipy","nav_gtav_cta_buy_now":"Kup teraz","nav_gtav_discover":"Odkryj","nav_gtav_emblem_editor":"Edytor emblematów","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Przewodniki","nav_gtav_jobs":"Akcje","nav_gtav_jobs_browse_all":"Przeglądaj akcje","nav_gtav_licence_plate_creator":"Kreator tablic rejestracyjnych","nav_gtav_missions":"Misje","nav_gtav_my_character":"Moja postać","nav_gtav_my_crews":"Moje ekipy","nav_gtav_my_jobs":"Moje akcje","nav_gtav_overview":"Ogólny zarys","nav_gtav_photos":"Zdjęcia","nav_gtav_playlists":"Listy gier","nav_gtav_stats":"Statystyki","nav_gtav_story":"Fabuła","nav_gtav_support":"Wsparcie","nav_gtav_videos":"Filmy","nav_gtavc_cta_buy_now":"Kup teraz","nav_gtavc_discover":"Odkryj","nav_gtavcs_discover":"Odkryj","nav_lanoire_accomplishments":"Osiągnięcia","nav_lanoire_badge_pursuit":"Pościg za odznaką","nav_lanoire_case_tracker":"Wykaz spraw","nav_lanoire_checklist":"Lista zadań","nav_lanoire_cta_buy_now":"Kup teraz","nav_lanoire_official_site":"Oficjalna strona","nav_lanoire_overview":"Ogólny zarys","nav_lanoire_pc_console":"PC/konsola","nav_lanoire_progress":"Postępy","nav_lanoire_stats":"Statystyki","nav_lanoire_support":"Wsparcie","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Kup teraz","nav_more_dropdown":"Więcej","nav_mp3_accomplishments":"Osiągnięcia","nav_mp3_career":"Kariera","nav_mp3_chapters":"Rozdziały","nav_mp3_checklist":"Lista zadań","nav_mp3_checkpoint_challenge":"Wyzwanie punktów kontrolnych","nav_mp3_crews":"Ekipy","nav_mp3_cta_buy_now":"Kup teraz","nav_mp3_featured":"Wyróżnione","nav_mp3_grinds":"Zadania","nav_mp3_leaderboards":"Rankingi","nav_mp3_multiplayer":"Tryb wieloosobowy","nav_mp3_news":"Nowości","nav_mp3_ny_minute":"W mgnieniu oka","nav_mp3_official_site":"Oficjalna strona","nav_mp3_overview":"Ogólny zarys","nav_mp3_progress":"Postępy","nav_mp3_score_attack":"Atak na wynik","nav_mp3_singleplayer":"Gra jednoosobowa","nav_mp3_specifications":"Wymagania","nav_mp3_support":"Wsparcie","nav_mp3_weapons":"Broń","nav_opens_in_new_window":"{text} (Odnośnik otworzy nowe okno)","nav_quick_access_games":"Gry","nav_quick_access_home":"Strona główna","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Osiągnięcia","nav_rdo_awards":"Nagrody","nav_rdo_benefits":"Korzyści","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Nagrody klubowe","nav_rdo_community":"Społeczność","nav_rdo_competitive_series":"Seria rywalizacji","nav_rdo_cta_buy_now":"Kup teraz","nav_rdo_customization":"Personalizacja","nav_rdo_explore":"Eksploruj","nav_rdo_getting_started":"Pierwsze kroki","nav_rdo_guides":"Przewodniki","nav_rdo_my_character":"Moja postać","nav_rdo_overview":"Ogólny zarys","nav_rdo_photos":"Zdjęcia","nav_rdo_posses":"Bandy","nav_rdo_posses_free_roam":"Bandy i gra swobodna","nav_rdo_progress":"Postępy","nav_rdo_progression":"Postępy","nav_rdo_rank_unlocks":"Nagrody za rangi","nav_rdo_roles":"Role","nav_rdo_specialist_roles":"Role specjalistyczne","nav_rdo_story_missions":"Misje fabularne","nav_rdo_support":"Wsparcie","nav_rdr_cta_buy_now":"Kup teraz","nav_rdr2_accomplishments":"Osiągnięcia","nav_rdr2_artwork":"Grafiki","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Wyzwania","nav_rdr2_chapters":"Rozdziały","nav_rdr2_character":"Postać","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Kup teraz","nav_rdr2_explore":"Eksploruj","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Miejsca","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Muzyka","nav_rdr2_online":"Online","nav_rdr2_overview":"Ogólny zarys","nav_rdr2_progress":"Postępy","nav_rdr2_stats":"Statystyki","nav_rdr2_support":"Wsparcie","nav_rdr2_van_der_linde_gang":"Gang van der Lindego","nav_rdr2_videos":"Filmy","nav_rdr2_weaponry":"Broń","nav_rdr2_wildlife":"Zwierzęta","nav_rockstargames_home":"Strona główna Rockstar Games","nav_rockstargames_logo":"Kliknij, aby otworzyć menu","nav_rsg_downloads":"Do pobrania","nav_rsg_games":"Gry","nav_rsg_newswire":"Newswire","nav_rsg_store":"Sklep","nav_rsg_support":"Wsparcie","nav_rsg_videos":"Filmy","nav_search_error_too_short":"Wyszukiwana fraza jest za krótka. Musi ona składać się z co najmniej {count} znaków.","nav_search_error_too_short_invalid_chars":"Wyszukiwana fraza zawiera nieobsługiwane znaki ({invalidChars}). Usuń je i spróbuj ponownie.","nav_support_dashboard":"Panel użytkownika","nav_support_home":"Strona główna","nav_support_service_status":"Status usługi","nav_support_submit_ticket":"Wyślij zgłoszenie","nav_tabletennis_cta_buy_now":"Kup teraz","nav_undeadnightmare_buy_now":"Kup teraz","nav_undeadnightmare_discover":"Odkryj","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informacje","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Nowości","nav_undeadnightmare_ps3_digital":"PS3 – cyfrowa","nav_undeadnightmare_specs":"Wymagania","nav_undeadnightmare_suport":"Wsparcie","nav_undeadnightmare_videos":"Filmy","nav_undeadnightmare_xbox360_digital":"Xbox 360 – cyfrowa","nav_view_all_games":"Pokaż wszystkie","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","search_action":"Szukaj","search_close_button":"Zamknij wyszukiwanie","search_open_button":"Rozpocznij wyszukiwanie","search_placeholder":"Przeszukaj Rockstar Games...","search_target_aria_label":"Wyszukaj: {target}","search_target_community":"Społeczność","search_target_crews":"Ekipy","search_target_games":"Gry","search_target_jobs":"Akcje","search_target_posts":"Wpisy","search_target_user_photos":"Zdjęcia użytkowników","search_target_user_videos":"Filmy użytkowników","search_target_users":"Użytkownicy","search_target_videos":"Filmy"},"br":{"accessibility_skip_button":"Pular para o conteúdo principal","games_menu_featured":"Jogos em destaque","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver tudo","language_selector_default":"Selecione um idioma","nav_bully_accomplishments":"Conquistas","nav_bully_cta_buy_now":"Compre já","nav_bully_game_overview":"Descobrir","nav_bully_Overview":"Suporte","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Carreiras no LinkedIn","nav_careers_contact_us":"Entre em contato","nav_careers_home":"Início","nav_careers_openings":"Vagas","nav_cta_get_launcher":"Obter Launcher","nav_gta_trilogy_accomplishments":"Conquistas","nav_gta_trilogy_cta_buy_now":"Compre já","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Visão geral","nav_gta_trilogy_support":"Suporte","nav_gta3_cta_buy_now":"Compre já","nav_gtaiv_accomplishments":"Conquistas","nav_gtaiv_cta_buy_now":"Compre já","nav_gtaiv_overview":"Descobrir","nav_gtaiv_support":"Suporte","nav_gtaiveflc_accomplishments":"Conquistas","nav_gtaiveflc_overview":"Visão geral","nav_gtaiveflc_support":"Suporte","nav_gtao_accomplishments":"Conquistas","nav_gtao_browse_crews":"Ver todos os Comandos","nav_gtao_checklist":"Lista de progresso","nav_gtao_community":"Comunidade","nav_gtao_crews":"Comandos","nav_gtao_crews_create":"Criar um Comando","nav_gtao_cta_buy_now":"Compre já","nav_gtao_discover":"Descobrir","nav_gtao_emblem_editor":"Editor de Emblema","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guias","nav_gtao_jobs":"Serviços","nav_gtao_jobs_browse_all":"Ver todos os serviços","nav_gtao_jobs_playlists":"Listas de jogos","nav_gtao_license_plate_creator":"Criador de Placas","nav_gtao_missions":"Missões","nav_gtao_my_character":"Meu personagem","nav_gtao_my_crews":"Meus Comandos","nav_gtao_my_jobs":"Meus serviços","nav_gtao_overview":"Visão geral","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estatísticas","nav_gtao_story":"História","nav_gtao_support":"Suporte","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Compre já","nav_gtav_accomplishments":"Conquistas","nav_gtav_checklist":"Lista de progresso","nav_gtav_community":"Comunidade","nav_gtav_create_crew":"Criar um Comando","nav_gtav_crews":"Comandos","nav_gtav_crews_browse_all":"Ver todos os Comandos","nav_gtav_cta_buy_now":"Compre já","nav_gtav_discover":"Descobrir","nav_gtav_emblem_editor":"Editor de Emblema","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guias","nav_gtav_jobs":"Serviços","nav_gtav_jobs_browse_all":"Ver todos os serviços","nav_gtav_licence_plate_creator":"Criador de Placas","nav_gtav_missions":"Missões","nav_gtav_my_character":"Meu personagem","nav_gtav_my_crews":"Meus Comandos","nav_gtav_my_jobs":"Meus serviços","nav_gtav_overview":"Visão geral","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de jogos","nav_gtav_stats":"Estatísticas","nav_gtav_story":"História","nav_gtav_support":"Suporte","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Compre já","nav_gtavc_discover":"Descobrir","nav_gtavcs_discover":"Descobrir","nav_lanoire_accomplishments":"Conquistas","nav_lanoire_badge_pursuit":"Distintivos escondidos","nav_lanoire_case_tracker":"Rastreador de Casos","nav_lanoire_checklist":"Lista de progresso","nav_lanoire_cta_buy_now":"Compre já","nav_lanoire_official_site":"Site oficial","nav_lanoire_overview":"Visão geral","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Estatísticas","nav_lanoire_support":"Suporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Compre já","nav_more_dropdown":"Mais","nav_mp3_accomplishments":"Conquistas","nav_mp3_career":"Carreira","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progresso","nav_mp3_checkpoint_challenge":"Desafio Checkpoint","nav_mp3_crews":"Comandos","nav_mp3_cta_buy_now":"Compre já","nav_mp3_featured":"Em destaque","nav_mp3_grinds":"Desafios","nav_mp3_leaderboards":"Placares de líderes","nav_mp3_multiplayer":"Multijogador","nav_mp3_news":"Novidades","nav_mp3_ny_minute":"Um Minuto de Nova York","nav_mp3_official_site":"Site oficial","nav_mp3_overview":"Visão geral","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Modo de Pontuação","nav_mp3_singleplayer":"Jogo individual","nav_mp3_specifications":"Especificações","nav_mp3_support":"Suporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (O link abre em uma nova janela)","nav_quick_access_games":"Jogos","nav_quick_access_home":"Início","nav_quick_access_newswire":"Boletim","nav_rdo_accomplishments":"Conquistas","nav_rdo_awards":"Prêmios","nav_rdo_benefits":"Benefícios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Prêmios do Clube","nav_rdo_community":"Comunidade","nav_rdo_competitive_series":"Séries Competitivas","nav_rdo_cta_buy_now":"Compre já","nav_rdo_customization":"Personalização","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeiros passos","nav_rdo_guides":"Guias","nav_rdo_my_character":"Meu personagem","nav_rdo_overview":"Visão geral","nav_rdo_photos":"Fotos","nav_rdo_posses":"Bandos","nav_rdo_posses_free_roam":"Bandos e Modo Livre","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressão","nav_rdo_rank_unlocks":"Desbloqueios por Nível","nav_rdo_roles":"Ofícios","nav_rdo_specialist_roles":"Ofícios Especializados","nav_rdo_story_missions":"Missões de História","nav_rdo_support":"Suporte","nav_rdr_cta_buy_now":"Compre já","nav_rdr2_accomplishments":"Conquistas","nav_rdr2_artwork":"Arte","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafios","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personagem","nav_rdr2_compendium":"Compêndio","nav_rdr2_cta_buy_now":"Compre já","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Locais","nav_rdr2_media":"Mídia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Visão geral","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Estatísticas","nav_rdr2_support":"Suporte","nav_rdr2_van_der_linde_gang":"Gangue Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Vida Selvagem","nav_rockstargames_home":"Rockstar Games – Início","nav_rockstargames_logo":"Clique para abrir o menu","nav_rsg_downloads":"Downloads","nav_rsg_games":"Jogos","nav_rsg_newswire":"Boletim","nav_rsg_store":"Loja","nav_rsg_support":"Suporte","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Seu termo de busca é curto demais. Os termos devem ter, no mínimo, {count} caracteres.","nav_search_error_too_short_invalid_chars":"Seu termo de busca contém caracteres inválidos ({invalidChars}). Remova-os e tente novamente.","nav_support_dashboard":"Meu painel","nav_support_home":"Início","nav_support_service_status":"Status do serviço","nav_support_submit_ticket":"Enviar uma solicitação","nav_tabletennis_cta_buy_now":"Compre já","nav_undeadnightmare_buy_now":"Compre já","nav_undeadnightmare_discover":"Descobrir","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informações","nav_undeadnightmare_media":"Mídia","nav_undeadnightmare_news":"Novidades","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Especificações","nav_undeadnightmare_suport":"Suporte","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver tudo","profile_selector_mugshot":"foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","quick_access_title":"Rockstar Games","sc_link_account":"Conta","sc_link_activity_feed":"Feed de Atividade","sc_link_cookies_policy":"Política de Cookies","sc_link_cookies_settings":"Configurações de Cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","search_action":"Buscar","search_close_button":"Fechar busca","search_open_button":"Abrir busca","search_placeholder":"Buscar em Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidade","search_target_crews":"Comandos","search_target_games":"Jogos","search_target_jobs":"Serviços","search_target_posts":"Publicações","search_target_user_photos":"Fotos do usuário","search_target_user_videos":"Vídeos do usuário","search_target_users":"Usuários","search_target_videos":"Vídeos"},"ru":{"accessibility_skip_button":"Перейти к основному разделу","games_menu_featured":"Избранные игры","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Показать все","language_selector_default":"Выбрать язык","nav_bully_accomplishments":"Достижения","nav_bully_cta_buy_now":"Купить","nav_bully_game_overview":"Об игре","nav_bully_Overview":"Поддержка","nav_bully_videos":"Видеоролики","nav_careers_careers_on_linkedin":"Вакансии на LinkedIn","nav_careers_contact_us":"Свяжитесь с нами","nav_careers_home":"Главная страница","nav_careers_openings":"Вакансии","nav_cta_get_launcher":"Скачать Launcher","nav_gta_trilogy_accomplishments":"Достижения","nav_gta_trilogy_cta_buy_now":"Купить","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Описание","nav_gta_trilogy_support":"Поддержка","nav_gta3_cta_buy_now":"Купить","nav_gtaiv_accomplishments":"Достижения","nav_gtaiv_cta_buy_now":"Купить","nav_gtaiv_overview":"Об игре","nav_gtaiv_support":"Поддержка","nav_gtaiveflc_accomplishments":"Достижения","nav_gtaiveflc_overview":"Описание","nav_gtaiveflc_support":"Поддержка","nav_gtao_accomplishments":"Достижения","nav_gtao_browse_crews":"Посмотреть все банды","nav_gtao_checklist":"Трекер","nav_gtao_community":"Сообщество","nav_gtao_crews":"Банды","nav_gtao_crews_create":"Создать банду","nav_gtao_cta_buy_now":"Купить","nav_gtao_discover":"Об игре","nav_gtao_emblem_editor":"Редактор эмблем","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Руководства","nav_gtao_jobs":"Дела","nav_gtao_jobs_browse_all":"Посмотреть все дела","nav_gtao_jobs_playlists":"Плейлисты","nav_gtao_license_plate_creator":"Редактор номерных знаков","nav_gtao_missions":"Задания","nav_gtao_my_character":"Мой персонаж","nav_gtao_my_crews":"Мои банды","nav_gtao_my_jobs":"Мои дела","nav_gtao_overview":"Описание","nav_gtao_photos":"Фотографии","nav_gtao_stats":"Статистика","nav_gtao_story":"Сюжетный режим","nav_gtao_support":"Поддержка","nav_gtao_videos":"Видеоролики","nav_gtasanandreas_cta_buy_now":"Купить","nav_gtav_accomplishments":"Достижения","nav_gtav_checklist":"Трекер","nav_gtav_community":"Сообщество","nav_gtav_create_crew":"Создать банду","nav_gtav_crews":"Банды","nav_gtav_crews_browse_all":"Посмотреть все банды","nav_gtav_cta_buy_now":"Купить","nav_gtav_discover":"Об игре","nav_gtav_emblem_editor":"Редактор эмблем","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Руководства","nav_gtav_jobs":"Дела","nav_gtav_jobs_browse_all":"Посмотреть все дела","nav_gtav_licence_plate_creator":"Редактор номерных знаков","nav_gtav_missions":"Задания","nav_gtav_my_character":"Мой персонаж","nav_gtav_my_crews":"Мои банды","nav_gtav_my_jobs":"Мои дела","nav_gtav_overview":"Описание","nav_gtav_photos":"Фотографии","nav_gtav_playlists":"Плейлисты","nav_gtav_stats":"Статистика","nav_gtav_story":"Сюжетный режим","nav_gtav_support":"Поддержка","nav_gtav_videos":"Видеоролики","nav_gtavc_cta_buy_now":"Купить","nav_gtavc_discover":"Об игре","nav_gtavcs_discover":"Об игре","nav_lanoire_accomplishments":"Достижения","nav_lanoire_badge_pursuit":"Значки","nav_lanoire_case_tracker":"Прогресс","nav_lanoire_checklist":"Трекер","nav_lanoire_cta_buy_now":"Купить","nav_lanoire_official_site":"Официальный сайт","nav_lanoire_overview":"Описание","nav_lanoire_pc_console":"На PC и консолях","nav_lanoire_progress":"Прогресс","nav_lanoire_stats":"Статистика","nav_lanoire_support":"Поддержка","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Купить","nav_more_dropdown":"Дополнительно","nav_mp3_accomplishments":"Достижения","nav_mp3_career":"Карьера","nav_mp3_chapters":"Главы","nav_mp3_checklist":"Трекер","nav_mp3_checkpoint_challenge":"Контрольные точки","nav_mp3_crews":"Банды","nav_mp3_cta_buy_now":"Купить","nav_mp3_featured":"Избранные","nav_mp3_grinds":"Подвиги","nav_mp3_leaderboards":"Списки лидеров","nav_mp3_multiplayer":"Сетевая игра","nav_mp3_news":"Новости","nav_mp3_ny_minute":"Время не ждет","nav_mp3_official_site":"Официальный сайт","nav_mp3_overview":"Описание","nav_mp3_progress":"Прогресс","nav_mp3_score_attack":"Игра на очки","nav_mp3_singleplayer":"Одиночная игра","nav_mp3_specifications":"Системные требования","nav_mp3_support":"Поддержка","nav_mp3_weapons":"Оружие","nav_opens_in_new_window":"{text} (ссылка откроется в новом окне)","nav_quick_access_games":"Игры","nav_quick_access_home":"Главная страница","nav_quick_access_newswire":"Новостная лента","nav_rdo_accomplishments":"Достижения","nav_rdo_awards":"Награды","nav_rdo_benefits":"Бонусы","nav_rdo_catalogue":"Каталог","nav_rdo_club_rewards":"Награды клуба","nav_rdo_community":"Сообщество","nav_rdo_competitive_series":"Соревновательные серии","nav_rdo_cta_buy_now":"Купить","nav_rdo_customization":"Персонализация","nav_rdo_explore":"Об игре","nav_rdo_getting_started":"С чего начать","nav_rdo_guides":"Руководства","nav_rdo_my_character":"Мой персонаж","nav_rdo_overview":"Описание","nav_rdo_photos":"Фотографии","nav_rdo_posses":"Отряды","nav_rdo_posses_free_roam":"Отряды и свободный режим","nav_rdo_progress":"Прогресс","nav_rdo_progression":"Уровень и Богатство","nav_rdo_rank_unlocks":"Открываемые предметы","nav_rdo_roles":"Развитие вашей роли","nav_rdo_specialist_roles":"Роли","nav_rdo_story_missions":"Сюжетные задания","nav_rdo_support":"Поддержка","nav_rdr_cta_buy_now":"Купить","nav_rdr2_accomplishments":"Достижения","nav_rdr2_artwork":"Иллюстрации","nav_rdr2_catalogue":"Каталог","nav_rdr2_challenges":"Испытания","nav_rdr2_chapters":"Главы","nav_rdr2_character":"Игрок","nav_rdr2_compendium":"Справочник","nav_rdr2_cta_buy_now":"Купить","nav_rdr2_explore":"Об игре","nav_rdr2_gallery":"Галерея","nav_rdr2_locations":"Места на карте","nav_rdr2_media":"Медиаматериалы","nav_rdr2_music":"Музыка","nav_rdr2_online":"Сетевая игра","nav_rdr2_overview":"Описание","nav_rdr2_progress":"Прогресс","nav_rdr2_stats":"Статистика","nav_rdr2_support":"Поддержка","nav_rdr2_van_der_linde_gang":"Банда Ван дер Линде","nav_rdr2_videos":"Видеоролики","nav_rdr2_weaponry":"Оружие","nav_rdr2_wildlife":"Животные","nav_rockstargames_home":"Главная страница Rockstar Games","nav_rockstargames_logo":"Нажмите, чтобы раскрыть меню","nav_rsg_downloads":"Загрузки","nav_rsg_games":"Игры","nav_rsg_newswire":"Новостная лента","nav_rsg_store":"Магазин","nav_rsg_support":"Поддержка","nav_rsg_videos":"Видеоролики","nav_search_error_too_short":"Слишком короткий поисковый запрос. Длина запроса должна составлять не менее {count} символов.","nav_search_error_too_short_invalid_chars":"Поисковый запрос содержит некорректные символы ({invalidChars}). Удалите их и попробуйте еще раз.","nav_support_dashboard":"Панель управления","nav_support_home":"Главная страница","nav_support_service_status":"Состояние серверов","nav_support_submit_ticket":"Оставить запрос","nav_tabletennis_cta_buy_now":"Купить","nav_undeadnightmare_buy_now":"Купить","nav_undeadnightmare_discover":"Об игре","nav_undeadnightmare_gallery":"Галерея","nav_undeadnightmare_info":"Информация","nav_undeadnightmare_media":"Медиаматериалы","nav_undeadnightmare_news":"Новости","nav_undeadnightmare_ps3_digital":"PS3 - цифровая версия","nav_undeadnightmare_specs":"Системные требования","nav_undeadnightmare_suport":"Поддержка","nav_undeadnightmare_videos":"Видеоролики","nav_undeadnightmare_xbox360_digital":"Xbox 360 - цифровая версия","nav_view_all_games":"Показать все","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Профильная карта","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","quick_access_title":"Rockstar Games","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Изменить меню Social Club","search_action":"Поиск","search_close_button":"Закрыть поиск","search_open_button":"Открыть поиск","search_placeholder":"Искать в Rockstar Games...","search_target_aria_label":"Искать {target}","search_target_community":"Сообщество","search_target_crews":"Банды","search_target_games":"Игры","search_target_jobs":"Дела","search_target_posts":"Сообщения","search_target_user_photos":"Фотографии пользователей","search_target_user_videos":"Видеоролики пользователей","search_target_users":"Пользователи","search_target_videos":"Видеоролики"},"hans":{"accessibility_skip_button":"跳至主要内容","games_menu_featured":"精选游戏","games_menu_gta_online":"GTA 在线模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 在线模式","games_menu_view_all":"查看全部","language_selector_default":"选择语言","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"立即购买","nav_bully_game_overview":"发现","nav_bully_Overview":"支持","nav_bully_videos":"视频","nav_careers_careers_on_linkedin":"LinkedIn 职业","nav_careers_contact_us":"联系我们","nav_careers_home":"主页","nav_careers_openings":"空缺职位","nav_cta_get_launcher":"获取 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"立即购买","nav_gta_trilogy_gta3":"GTA 3","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"概况","nav_gta_trilogy_support":"支持","nav_gta3_cta_buy_now":"立即购买","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"立即购买","nav_gtaiv_overview":"发现","nav_gtaiv_support":"支持","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"概况","nav_gtaiveflc_support":"支持","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"浏览所有帮会","nav_gtao_checklist":"清单","nav_gtao_community":"社区","nav_gtao_crews":"帮会","nav_gtao_crews_create":"创建帮会","nav_gtao_cta_buy_now":"立即购买","nav_gtao_discover":"发现","nav_gtao_emblem_editor":"徽章编辑器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 在线模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"浏览所有差事","nav_gtao_jobs_playlists":"游玩清单","nav_gtao_license_plate_creator":"车牌制作器","nav_gtao_missions":"任务","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的帮会","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"概况","nav_gtao_photos":"照片","nav_gtao_stats":"统计数据","nav_gtao_story":"故事","nav_gtao_support":"支持","nav_gtao_videos":"视频","nav_gtasanandreas_cta_buy_now":"立即购买","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清单","nav_gtav_community":"社区","nav_gtav_create_crew":"创建帮会","nav_gtav_crews":"帮会","nav_gtav_crews_browse_all":"浏览所有帮会","nav_gtav_cta_buy_now":"立即购买","nav_gtav_discover":"发现","nav_gtav_emblem_editor":"徽章编辑器","nav_gtav_gta_online":"GTA 在线模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"浏览所有差事","nav_gtav_licence_plate_creator":"车牌制作器","nav_gtav_missions":"任务","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的帮会","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"概况","nav_gtav_photos":"照片","nav_gtav_playlists":"游玩清单","nav_gtav_stats":"统计数据","nav_gtav_story":"故事","nav_gtav_support":"支持","nav_gtav_videos":"视频","nav_gtavc_cta_buy_now":"立即购买","nav_gtavc_discover":"发现","nav_gtavcs_discover":"发现","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"收集警徽","nav_lanoire_case_tracker":"案件纪录","nav_lanoire_checklist":"清单","nav_lanoire_cta_buy_now":"立即购买","nav_lanoire_official_site":"官方网站","nav_lanoire_overview":"概况","nav_lanoire_pc_console":"PC/主机","nav_lanoire_progress":"进度","nav_lanoire_stats":"统计数据","nav_lanoire_support":"支持","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"立即购买","nav_more_dropdown":"更多内容","nav_mp3_accomplishments":"成就","nav_mp3_career":"职业生涯","nav_mp3_chapters":"章节","nav_mp3_checklist":"清单","nav_mp3_checkpoint_challenge":"检查点挑战","nav_mp3_crews":"帮会","nav_mp3_cta_buy_now":"立即购买","nav_mp3_featured":"精选","nav_mp3_grinds":"挑战","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人游戏","nav_mp3_news":"新闻","nav_mp3_ny_minute":"纽约一分钟","nav_mp3_official_site":"官方网站","nav_mp3_overview":"概况","nav_mp3_progress":"进度","nav_mp3_score_attack":"分数挑战","nav_mp3_singleplayer":"单人游戏","nav_mp3_specifications":"配置","nav_mp3_support":"支持","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新窗口中打开链接）","nav_quick_access_games":"游戏","nav_quick_access_home":"主页","nav_quick_access_newswire":"新闻专线","nav_rdo_accomplishments":"成就","nav_rdo_awards":"奖章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目录","nav_rdo_club_rewards":"俱乐部奖励","nav_rdo_community":"社区","nav_rdo_competitive_series":"竞技系列","nav_rdo_cta_buy_now":"立即购买","nav_rdo_customization":"自定义","nav_rdo_explore":"探索","nav_rdo_getting_started":"新手上路","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"概况","nav_rdo_photos":"照片","nav_rdo_posses":"团队","nav_rdo_posses_free_roam":"团队和自由模式","nav_rdo_progress":"进度","nav_rdo_progression":"进程","nav_rdo_rank_unlocks":"等级解锁","nav_rdo_roles":"职业","nav_rdo_specialist_roles":"专业经销商","nav_rdo_story_missions":"故事任务","nav_rdo_support":"支持","nav_rdr_cta_buy_now":"立即购买","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"艺术作品","nav_rdr2_catalogue":"目录","nav_rdr2_challenges":"挑战","nav_rdr2_chapters":"章节","nav_rdr2_character":"角色","nav_rdr2_compendium":"生涯","nav_rdr2_cta_buy_now":"立即购买","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相册","nav_rdr2_locations":"地点","nav_rdr2_media":"媒体","nav_rdr2_music":"音乐","nav_rdr2_online":"在线模式","nav_rdr2_overview":"概况","nav_rdr2_progress":"进度","nav_rdr2_stats":"统计数据","nav_rdr2_support":"支持","nav_rdr2_van_der_linde_gang":"范德林德帮","nav_rdr2_videos":"视频","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生动物","nav_rockstargames_home":"Rockstar Games 主页","nav_rockstargames_logo":"点击打开菜单","nav_rsg_downloads":"下载","nav_rsg_games":"游戏","nav_rsg_newswire":"新闻专线","nav_rsg_store":"商店","nav_rsg_support":"支持","nav_rsg_videos":"视频","nav_search_error_too_short":"您的搜索词条太短。词条长度必须至少为 {count} 个字符。","nav_search_error_too_short_invalid_chars":"您的搜索词条包含无效字符（{invalidChars}）。请删除这些无效字符并重试。","nav_support_dashboard":"个人中心","nav_support_home":"主页","nav_support_service_status":"服务状态","nav_support_submit_ticket":"提交请求","nav_tabletennis_cta_buy_now":"立即购买","nav_undeadnightmare_buy_now":"立即购买","nav_undeadnightmare_discover":"发现","nav_undeadnightmare_gallery":"相册","nav_undeadnightmare_info":"信息","nav_undeadnightmare_media":"媒体","nav_undeadnightmare_news":"新闻","nav_undeadnightmare_ps3_digital":"PS3 - 数码版","nav_undeadnightmare_specs":"配置","nav_undeadnightmare_suport":"支持","nav_undeadnightmare_videos":"视频","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 数码版","nav_view_all_games":"查看全部","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","quick_access_title":"Rockstar Games","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","search_action":"搜索","search_close_button":"关闭搜索","search_open_button":"打开搜索","search_placeholder":"搜索 Rockstar Games……","search_target_aria_label":"搜索 {target}","search_target_community":"社区","search_target_crews":"帮会","search_target_games":"游戏","search_target_jobs":"差事","search_target_posts":"帖子","search_target_user_photos":"用户照片","search_target_user_videos":"用户视频","search_target_users":"用户","search_target_videos":"视频"},"tw":{"accessibility_skip_button":"跳至主內容","games_menu_featured":"精選遊戲","games_menu_gta_online":"Grand Theft Auto 線上模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 線上模式","games_menu_view_all":"檢視全部","language_selector_default":"選擇語言","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"馬上購買","nav_bully_game_overview":"探索","nav_bully_Overview":"支援","nav_bully_videos":"影片","nav_careers_careers_on_linkedin":"LinkedIn 上的工作機會","nav_careers_contact_us":"聯絡我們","nav_careers_home":"首頁","nav_careers_openings":"工作機會","nav_cta_get_launcher":"取得 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"馬上購買","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"總覽","nav_gta_trilogy_support":"支援","nav_gta3_cta_buy_now":"馬上購買","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"馬上購買","nav_gtaiv_overview":"探索","nav_gtaiv_support":"支援","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"總覽","nav_gtaiveflc_support":"支援","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"瀏覽全部幫會","nav_gtao_checklist":"清單","nav_gtao_community":"社群","nav_gtao_crews":"幫會","nav_gtao_crews_create":"建立幫會","nav_gtao_cta_buy_now":"馬上購買","nav_gtao_discover":"探索","nav_gtao_emblem_editor":"徽記編輯器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 線上模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"瀏覽全部差事","nav_gtao_jobs_playlists":"遊玩清單","nav_gtao_license_plate_creator":"車牌製作器","nav_gtao_missions":"任務","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的幫會","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"總覽","nav_gtao_photos":"相片","nav_gtao_stats":"統計資料","nav_gtao_story":"故事","nav_gtao_support":"支援","nav_gtao_videos":"影片","nav_gtasanandreas_cta_buy_now":"馬上購買","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清單","nav_gtav_community":"社群","nav_gtav_create_crew":"建立幫會","nav_gtav_crews":"幫會","nav_gtav_crews_browse_all":"瀏覽全部幫會","nav_gtav_cta_buy_now":"馬上購買","nav_gtav_discover":"探索","nav_gtav_emblem_editor":"徽記編輯器","nav_gtav_gta_online":"GTA 線上模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"瀏覽全部差事","nav_gtav_licence_plate_creator":"車牌製作器","nav_gtav_missions":"任務","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的幫會","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"總覽","nav_gtav_photos":"相片","nav_gtav_playlists":"遊玩清單","nav_gtav_stats":"統計資料","nav_gtav_story":"故事","nav_gtav_support":"支援","nav_gtav_videos":"影片","nav_gtavc_cta_buy_now":"馬上購買","nav_gtavc_discover":"探索","nav_gtavcs_discover":"探索","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"尋找警徽","nav_lanoire_case_tracker":"案件追蹤器","nav_lanoire_checklist":"清單","nav_lanoire_cta_buy_now":"馬上購買","nav_lanoire_official_site":"官方網站","nav_lanoire_overview":"總覽","nav_lanoire_pc_console":"PC/遊戲主機","nav_lanoire_progress":"進度","nav_lanoire_stats":"統計資料","nav_lanoire_support":"支援","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"馬上購買","nav_more_dropdown":"更多","nav_mp3_accomplishments":"成就","nav_mp3_career":"生涯","nav_mp3_chapters":"章節","nav_mp3_checklist":"清單","nav_mp3_checkpoint_challenge":"檢查點挑戰","nav_mp3_crews":"幫會","nav_mp3_cta_buy_now":"馬上購買","nav_mp3_featured":"精選","nav_mp3_grinds":"挑戰","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人遊戲","nav_mp3_news":"新聞","nav_mp3_ny_minute":"分秒必爭","nav_mp3_official_site":"官方網站","nav_mp3_overview":"總覽","nav_mp3_progress":"進度","nav_mp3_score_attack":"奪取高分","nav_mp3_singleplayer":"單人遊戲","nav_mp3_specifications":"指定規格","nav_mp3_support":"支援","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（連結在新視窗開啟）","nav_quick_access_games":"遊戲","nav_quick_access_home":"首頁","nav_quick_access_newswire":"新聞放送","nav_rdo_accomplishments":"成就","nav_rdo_awards":"獎章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目錄","nav_rdo_club_rewards":"俱樂部獎勵","nav_rdo_community":"社群","nav_rdo_competitive_series":"競爭系列賽","nav_rdo_cta_buy_now":"馬上購買","nav_rdo_customization":"自訂","nav_rdo_explore":"探索","nav_rdo_getting_started":"準備開始","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"總覽","nav_rdo_photos":"相片","nav_rdo_posses":"武裝隊","nav_rdo_posses_free_roam":"武裝隊與浪跡模式","nav_rdo_progress":"進度","nav_rdo_progression":"發展","nav_rdo_rank_unlocks":"等級解鎖","nav_rdo_roles":"角色職業","nav_rdo_specialist_roles":"專家角色職業","nav_rdo_story_missions":"故事任務","nav_rdo_support":"支援","nav_rdr_cta_buy_now":"馬上購買","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"插畫","nav_rdr2_catalogue":"目錄","nav_rdr2_challenges":"挑戰","nav_rdr2_chapters":"章節","nav_rdr2_character":"角色","nav_rdr2_compendium":"圖鑑","nav_rdr2_cta_buy_now":"馬上購買","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相冊","nav_rdr2_locations":"地點","nav_rdr2_media":"媒體","nav_rdr2_music":"音樂","nav_rdr2_online":"線上模式","nav_rdr2_overview":"總覽","nav_rdr2_progress":"進度","nav_rdr2_stats":"統計資料","nav_rdr2_support":"支援","nav_rdr2_van_der_linde_gang":"范特林幫派","nav_rdr2_videos":"影片","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"Rockstar Games 首頁","nav_rockstargames_logo":"點擊以開啟選單","nav_rsg_downloads":"下載","nav_rsg_games":"遊戲","nav_rsg_newswire":"新聞放送","nav_rsg_store":"商店","nav_rsg_support":"支援","nav_rsg_videos":"影片","nav_search_error_too_short":"您的搜尋字詞太短。搜尋字詞必須至少有 {count} 個字元。","nav_search_error_too_short_invalid_chars":"您的搜尋字詞含有無效字元（{invalidChars}）。請移除後再試一次。","nav_support_dashboard":"我的設定畫面","nav_support_home":"首頁","nav_support_service_status":"服務狀態","nav_support_submit_ticket":"提交請求","nav_tabletennis_cta_buy_now":"馬上購買","nav_undeadnightmare_buy_now":"馬上購買","nav_undeadnightmare_discover":"探索","nav_undeadnightmare_gallery":"相冊","nav_undeadnightmare_info":"資訊","nav_undeadnightmare_media":"媒體","nav_undeadnightmare_news":"新聞","nav_undeadnightmare_ps3_digital":"PS3：數位版","nav_undeadnightmare_specs":"指定規格","nav_undeadnightmare_suport":"支援","nav_undeadnightmare_videos":"影片","nav_undeadnightmare_xbox360_digital":"Xbox 360：數位版","nav_view_all_games":"檢視全部","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"設定檔卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","quick_access_title":"Rockstar Games","sc_link_account":"帳號","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","search_action":"搜尋","search_close_button":"關閉搜尋","search_open_button":"開啟搜尋","search_placeholder":"搜尋 Rockstar Games……","search_target_aria_label":"搜尋{target}","search_target_community":"社群","search_target_crews":"幫會","search_target_games":"遊戲","search_target_jobs":"差事","search_target_posts":"貼文","search_target_user_photos":"使用者相片","search_target_user_videos":"使用者影片","search_target_users":"使用者","search_target_videos":"影片"}}'),
        Uc = (0, r.vU)({
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
          nav_gtao_accomplishments: {
            id: "nav_gtao_accomplishments",
            defaultMessage: "Accomplishments"
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
          nav_gtav_accomplishments: {
            id: "nav_gtav_accomplishments",
            defaultMessage: "Accomplishments"
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
        Hc = [{
          domain: v.z.www,
          path: "/search"
        }],
        Xc = (0, l.createContext)({
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
              [v.z.www]: ["/*"],
              [v.z.socialClub]: ["/*"]
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
                domain: v.z.www,
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
        Wc = e => {
          let {
            children: a
          } = e;
          const [t, s] = (0, l.useState)({
            navigation: ""
          }), [n, r] = (0, l.useState)(null), [i, o] = (0, l.useState)(!1), [c, d] = (0, l.useMemo)((() => f()), []), {
            hash: g,
            pathname: m
          } = (0, K.useLocation)(), {
            data: u
          } = Z(), {
            location: p
          } = window, h = (0, v.Z)(), b = (0, l.useMemo)((() => ({
            navigationState: t,
            setNavigationState: s,
            environment: h,
            location: p,
            locale: c,
            rockstarUser: u,
            openedDropdown: n,
            setOpenedDropdown: r,
            isSearchPage: i
          })), [t, c, JSON.stringify(p), h, n, i, u]);
          return (0, l.useEffect)((() => {
            d(c.iso);
            const e = () => r(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, l.useEffect)((() => {
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
          }), [g]), (0, l.useEffect)((() => {
            const e = h.currentSite?.site,
              a = Hc.some((a => a.domain === e && m.startsWith(a.path)));
            o(a)
          }), [m]), (0, _.jsx)(Xc.Provider, {
            value: b,
            children: a
          })
        },
        Yc = () => {
          const e = (0, l.useContext)(Xc);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        Zc = () => {
          const e = (0, l.useContext)(Xc);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        Jc = () => {
          const e = (0, l.useContext)(Xc);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: a,
            setOpenedDropdown: t
          } = e;
          return [a, e => {
            t(e === a ? null : e)
          }]
        },
        Kc = () => {
          const e = (0, l.useContext)(Xc);
          if (void 0 === e) throw new Error("useIsSearchPage must be used within a Navigation Provider");
          return e.isSearchPage
        },
        Qc = [{
          intlMessage: Uc.games_menu_gta_v,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/V.jpg",
          location: {
            domain: v.z.www,
            path: "/gta-v"
          },
          dataTestId: "gtav"
        }, {
          intlMessage: Uc.games_menu_gta_online,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/GTAOnline.jpg",
          location: {
            domain: v.z.www,
            path: "/gta-online"
          },
          dataTestId: "gtao"
        }, {
          intlMessage: Uc.games_menu_gta_trilogy,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/GTATrilogy.jpg",
          location: {
            domain: v.z.www,
            path: "/GTATrilogy"
          },
          dataTestId: "gtaTrilogy"
        }, {
          intlMessage: Uc.games_menu_rdr_2,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg",
          location: {
            domain: v.z.www,
            path: "/reddeadredemption2"
          },
          dataTestId: "rdr2"
        }, {
          intlMessage: Uc.games_menu_rdr_online,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/reddeadonline.jpg",
          location: {
            domain: v.z.www,
            path: "/reddeadonline"
          },
          dataTestId: "rdo"
        }];
      var e_ = t(5370),
        a_ = t.n(e_);
      const t_ = {
          globalNavigationRoot: "rockstargames-modules-core-headera95a9e2c93190e6b0eb886211d3beb68",
          large: "rockstargames-modules-core-headere72b6798a0d8012bd8f16236087e7f7a",
          badge: "rockstargames-modules-core-headerea0b713e5b81a79d10265e5981b2d7cf",
          globalNavigationSpacer: "rockstargames-modules-core-headerfa88e95f42080c6adec74d487de431f5",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headerc04a845b0f1bbd7409cc61915a742a85"
        },
        s_ = {
          site: "beaterator",
          appearancePaths: {
            [v.z.www]: ["/games/beaterator/*"]
          },
          brand: "beaterator",
          links: []
        },
        n_ = {
          site: "bully",
          appearancePaths: {
            [v.z.www]: ["/games/bully/*"],
            [v.z.socialClub]: ["/games/bully/*"]
          },
          brand: "bully",
          links: [{
            text: Uc.nav_bully_game_overview.defaultMessage,
            intlMessage: Uc.nav_bully_game_overview,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/games/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: Uc.nav_bully_accomplishments.defaultMessage,
            intlMessage: Uc.nav_bully_accomplishments,
            type: "nav-internal",
            location: {
              domain: v.z.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: Uc.nav_bully_support.defaultMessage,
            intlMessage: Uc.nav_bully_support,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: Uc.nav_bully_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_bully_cta_buy_now,
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-bully-scholarship-edition"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        },
        r_ = {
          site: "careers",
          appearancePaths: {
            [v.z.www]: ["/careers/*"]
          },
          brand: "careers",
          links: [{
            text: Uc.nav_careers_home.defaultMessage,
            intlMessage: Uc.nav_careers_home,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/careers"
            }
          }, {
            text: Uc.nav_careers_openings.defaultMessage,
            intlMessage: Uc.nav_careers_openings,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/careers/openings"
            }
          }, {
            text: Uc.nav_careers_contact_us.defaultMessage,
            intlMessage: Uc.nav_careers_contact_us,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/careers#contact-us"
            }
          }, {
            text: Uc.nav_careers_careers_on_linkedin.defaultMessage,
            intlMessage: Uc.nav_careers_careers_on_linkedin,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com/company/rockstar-games/",
              path: "/company/rockstar-games/"
            }
          }]
        },
        i_ = {
          site: "gta",
          appearancePaths: {
            [v.z.www]: ["/games/gta/*"]
          },
          brand: "gta",
          links: []
        },
        o_ = {
          site: "gta2",
          appearancePaths: {
            [v.z.www]: ["/games/gta2/*"]
          },
          brand: "gta2",
          links: []
        },
        l_ = {
          site: "grandtheftauto3",
          appearancePaths: {
            [v.z.www]: ["/games/grandtheftauto3/*"]
          },
          brand: "gta3",
          links: [],
          cta: {
            text: Uc.nav_gta3_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_gta3_cta_buy_now,
            variant: "highlight",
            dataTestId: "gta3BuyNowCta",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        c_ = {
          site: "gta-iv",
          appearancePaths: {
            [v.z.www]: ["/games/IV/*"],
            [v.z.socialClub]: ["/games/gtaiv/*"]
          },
          brand: "gta4",
          links: [{
            text: Uc.nav_gtaiv_overview.defaultMessage,
            intlMessage: Uc.nav_gtaiv_overview,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: Uc.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: Uc.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: v.z.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: Uc.nav_gtaiv_support.defaultMessage,
            intlMessage: Uc.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: Uc.nav_gtaiv_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_gtaiv_cta_buy_now,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            dataTestId: "gtaivPurchaseLink"
          }
        },
        __ = {
          site: "gta-v",
          appearancePaths: {
            [v.z.www]: ["/gta-v/*"],
            [v.z.socialClub]: ["/games/gtav/*"]
          },
          brand: "gta5",
          links: [{
            text: Uc.nav_gtav_overview.defaultMessage,
            intlMessage: Uc.nav_gtav_overview,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/gta-v"
            },
            dataTestId: "gtavLink"
          }, {
            text: Uc.nav_gtav_gta_online.defaultMessage,
            intlMessage: Uc.nav_gtav_gta_online,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: Uc.nav_gtav_discover.defaultMessage,
              intlMessage: Uc.nav_gtav_discover,
              type: "nav-internal",
              location: {
                domain: v.z.www,
                path: "/gta-online"
              },
              dataTestId: "gtaoLink"
            }, {
              text: Uc.nav_gtav_my_character.defaultMessage,
              intlMessage: Uc.nav_gtav_my_character,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              dataTestId: "gtaoButton"
            }, {
              text: Uc.nav_gtav_guides.defaultMessage,
              intlMessage: Uc.nav_gtav_guides,
              type: "nav-internal",
              location: {
                domain: v.z.www,
                path: "/gta-online/guides"
              },
              dataTestId: "gtaoGuidesLink"
            }, {
              text: Uc.nav_gtav_licence_plate_creator.defaultMessage,
              intlMessage: Uc.nav_gtav_licence_plate_creator,
              type: "nav-internal",
              location: {
                domain: v.z.www,
                path: "/gta-online/license-plates"
              },
              dataTestId: "gtaoLicensePlatesLink"
            }]
          }, {
            text: Uc.nav_gtav_story.defaultMessage,
            intlMessage: Uc.nav_gtav_story,
            type: "nav-dropdown",
            dataTestId: "gtavSpLink",
            children: [{
              text: Uc.nav_gtav_stats.defaultMessage,
              intlMessage: Uc.nav_gtav_stats,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/"
              },
              dataTestId: "gtavSpOverviewButton"
            }, {
              text: Uc.nav_gtav_missions.defaultMessage,
              intlMessage: Uc.nav_gtav_missions,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/missions/"
              },
              dataTestId: "gtavSpMissionsButton"
            }, {
              text: Uc.nav_gtav_checklist.defaultMessage,
              intlMessage: Uc.nav_gtav_checklist,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/checklist"
              },
              dataTestId: "gtavSpChecklistButton"
            }, {
              text: Uc.nav_gtav_accomplishments.defaultMessage,
              intlMessage: Uc.nav_gtav_accomplishments,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              dataTestId: "gtavSpAccomplishmentsButton"
            }]
          }, {
            text: Uc.nav_gtav_gta_plus.defaultMessage,
            intlMessage: Uc.nav_gtav_gta_plus,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/gta-plus"
            },
            dataTestId: "gtav+Link"
          }, {
            text: Uc.nav_gtav_community.defaultMessage,
            intlMessage: Uc.nav_gtav_community,
            type: "nav-dropdown",
            dataTestId: "gtavCommunityDropdown",
            children: [{
              text: Uc.nav_gtav_jobs.defaultMessage,
              intlMessage: Uc.nav_gtav_jobs,
              type: "nav-dropdown",
              dataTestId: "gtavJobsDropdown",
              children: [{
                text: Uc.nav_gtav_jobs_browse_all.defaultMessage,
                intlMessage: Uc.nav_gtav_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavAllJobsButtons",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs"
                }
              }, {
                text: Uc.nav_gtav_my_jobs.defaultMessage,
                intlMessage: Uc.nav_gtav_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavMyJobsButtons",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs/?dateRange=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: Uc.nav_gtav_playlists.defaultMessage,
                intlMessage: Uc.nav_gtav_playlists,
                type: "nav-internal",
                dataTestId: "gtavPlaylistsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: Uc.nav_gtav_crews.defaultMessage,
              intlMessage: Uc.nav_gtav_crews,
              type: "nav-dropdown",
              dataTestId: "gtavCrewsDropdown",
              children: [{
                text: Uc.nav_gtav_crews_browse_all.defaultMessage,
                intlMessage: Uc.nav_gtav_crews_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavBrowseCrewsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews"
                }
              }, {
                text: Uc.nav_gtav_my_crews.defaultMessage,
                intlMessage: Uc.nav_gtav_my_crews,
                dataTestId: "gtavMyCrewsButton",
                type: "nav-internal",
                requiresAuth: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: Uc.nav_gtav_create_crew.defaultMessage,
                intlMessage: Uc.nav_gtav_create_crew,
                type: "nav-internal",
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: Uc.nav_gtav_emblem_editor.defaultMessage,
                intlMessage: Uc.nav_gtav_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/emblems"
                }
              }]
            }, {
              text: Uc.nav_gtav_photos.defaultMessage,
              intlMessage: Uc.nav_gtav_photos,
              type: "nav-internal",
              dataTestId: "gtaViewPhotosButton",
              location: {
                domain: v.z.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: Uc.nav_gtav_videos.defaultMessage,
              intlMessage: Uc.nav_gtav_videos,
              dataTestId: "gtaViewVideosButton",
              type: "nav-internal",
              location: {
                domain: v.z.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: Uc.nav_gtav_support.defaultMessage,
            intlMessage: Uc.nav_gtav_support,
            dataTestId: "gtaSupportLink",
            type: "nav-external",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: Uc.nav_gtav_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_gtav_cta_buy_now,
            location: {
              domain: v.z.www,
              path: "/gta-v?info=order"
            },
            ga: "cta_buy",
            dataTestId: "gtavPurchaseLink"
          }
        },
        d_ = {
          site: "grandtheftauto-gba",
          appearancePaths: {
            [v.z.www]: ["/games/grandtheftauto-gba/*"]
          },
          brand: "gtaadvance",
          links: []
        },
        g_ = {
          site: "chinatownwars",
          appearancePaths: {
            [v.z.www]: ["/games/chinatownwars/*"]
          },
          brand: "gtactw",
          links: []
        },
        m_ = {
          site: "episodesfromlibertycity",
          appearancePaths: {
            [v.z.www]: ["/games/episodesfromlibertycity/*"]
          },
          brand: "gtaiveflc",
          links: [{
            text: Uc.nav_gtaiv_overview.defaultMessage,
            intlMessage: Uc.nav_gtaiv_overview,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: v.z.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: Uc.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: Uc.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: v.z.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: Uc.nav_gtaiv_support.defaultMessage,
            intlMessage: Uc.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/115001614848"
            }
          }]
        },
        u_ = {
          site: "libertycitystories",
          appearancePaths: {
            [v.z.www]: ["/games/libertycitystories/*"]
          },
          brand: "gtalcs",
          links: []
        },
        v_ = {
          site: "gtalondon",
          appearancePaths: {
            [v.z.www]: ["/games/gtalondon/*"]
          },
          brand: "gtalondon",
          links: []
        },
        p_ = {
          site: "gta-online",
          appearancePaths: {
            [v.z.www]: ["/gta-online/*"],
            [v.z.socialClub]: ["/member/:username/crews/*", "/crews/*", "/crew/*", "/jobs/*", "*/jobs/*", "/videos/*{titleOverride}", "/photos/*{titleOverride}", "/emblems/*", "/games/gtav/:platform/career/overview/gtaonline/*"]
          },
          brand: "gtaonline",
          links: [{
            text: Uc.nav_gtao_overview.defaultMessage,
            intlMessage: Uc.nav_gtao_overview,
            type: "nav-internal",
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: v.z.www,
              path: "/gta-v"
            }
          }, {
            text: Uc.nav_gtao_gtao.defaultMessage,
            intlMessage: Uc.nav_gtao_gtao,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: Uc.nav_gtao_discover.defaultMessage,
              intlMessage: Uc.nav_gtao_discover,
              type: "nav-internal",
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: v.z.www,
                path: "/gta-online"
              }
            }, {
              text: Uc.nav_gtao_my_character.defaultMessage,
              intlMessage: Uc.nav_gtao_my_character,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoOverviewButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              }
            }, {
              text: Uc.nav_gtao_guides.defaultMessage,
              intlMessage: Uc.nav_gtao_guides,
              type: "nav-internal",
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: v.z.www,
                path: "/gta-online/guides"
              }
            }, {
              text: Uc.nav_gtao_license_plate_creator.defaultMessage,
              intlMessage: Uc.nav_gtao_license_plate_creator,
              type: "nav-internal",
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: v.z.www,
                path: "/gta-online/license-plates"
              }
            }]
          }, {
            text: Uc.nav_gtao_story.defaultMessage,
            intlMessage: Uc.nav_gtao_story,
            dataTestId: "gtaoStoryDropdown",
            type: "nav-dropdown",
            children: [{
              text: Uc.nav_gtao_stats.defaultMessage,
              intlMessage: Uc.nav_gtao_stats,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoCareerButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/"
              }
            }, {
              text: Uc.nav_gtao_missions.defaultMessage,
              intlMessage: Uc.nav_gtao_missions,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoMissionsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/missions/"
              }
            }, {
              text: Uc.nav_gtao_checklist.defaultMessage,
              intlMessage: Uc.nav_gtao_checklist,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoChecklistButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/checklist"
              }
            }, {
              text: Uc.nav_gtao_accomplishments.defaultMessage,
              intlMessage: Uc.nav_gtao_accomplishments,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoSpAccomplishmentsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/accomplishments"
              }
            }]
          }, {
            text: Uc.nav_gtao_gta_plus.defaultMessage,
            intlMessage: Uc.nav_gtao_gta_plus,
            type: "nav-internal",
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: v.z.www,
              path: "/gta-plus"
            }
          }, {
            text: Uc.nav_gtao_community.defaultMessage,
            intlMessage: Uc.nav_gtao_community,
            type: "nav-dropdown",
            dataTestId: "gtaoCommunityDropdown",
            children: [{
              text: Uc.nav_gtao_jobs.defaultMessage,
              intlMessage: Uc.nav_gtao_jobs,
              type: "nav-dropdown",
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: Uc.nav_gtao_jobs_browse_all.defaultMessage,
                intlMessage: Uc.nav_gtao_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs"
                }
              }, {
                text: Uc.nav_gtao_my_jobs.defaultMessage,
                intlMessage: Uc.nav_gtao_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                requiresAuth: !0,
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs/?dateRange=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: Uc.nav_gtao_jobs_playlists.defaultMessage,
                intlMessage: Uc.nav_gtao_jobs_playlists,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: Uc.nav_gtao_crews.defaultMessage,
              intlMessage: Uc.nav_gtao_crews,
              type: "nav-dropdown",
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: Uc.nav_gtao_browse_crews.defaultMessage,
                intlMessage: Uc.nav_gtao_browse_crews,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews"
                }
              }, {
                text: Uc.nav_gtao_my_crews.defaultMessage,
                intlMessage: Uc.nav_gtao_my_crews,
                type: "nav-internal",
                dataTestId: "gtaoMyCrewsButton",
                requiresAuth: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: Uc.nav_gtao_crews_create.defaultMessage,
                intlMessage: Uc.nav_gtao_crews_create,
                type: "nav-internal",
                dataTestId: "gtaoCreateCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: Uc.nav_gtao_emblem_editor.defaultMessage,
                intlMessage: Uc.nav_gtao_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtaoCreateEmblemButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/emblems"
                }
              }]
            }, {
              text: Uc.nav_gtao_photos.defaultMessage,
              intlMessage: Uc.nav_gtao_photos,
              type: "nav-internal",
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: v.z.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: Uc.nav_gtao_videos.defaultMessage,
              intlMessage: Uc.nav_gtao_videos,
              type: "nav-internal",
              dataTestId: "gtaoVideosButton",
              location: {
                domain: v.z.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: Uc.nav_gtao_support.defaultMessage,
            intlMessage: Uc.nav_gtao_support,
            type: "nav-external",
            dataTestId: "gtaoSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: Uc.nav_gtao_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_gtao_cta_buy_now,
            dataTestId: "gtaoPurchaseLink",
            location: {
              domain: v.z.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy"
          }
        },
        h_ = {
          site: "gta-plus",
          appearancePaths: {
            [v.z.www]: ["/gta-plus/*"],
            [v.z.socialClub]: ["*/crews/*", "*/jobs/*", "/emblems/*"]
          },
          brand: "gtaplus",
          links: [{
            text: Uc.nav_gtao_overview.defaultMessage,
            intlMessage: Uc.nav_gtao_overview,
            type: "nav-internal",
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: v.z.www,
              path: "/gta-v"
            }
          }, {
            text: Uc.nav_gtao_gtao.defaultMessage,
            intlMessage: Uc.nav_gtao_gtao,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: Uc.nav_gtao_discover.defaultMessage,
              intlMessage: Uc.nav_gtao_discover,
              type: "nav-internal",
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: v.z.www,
                path: "/gta-online"
              }
            }, {
              text: Uc.nav_gtao_my_character.defaultMessage,
              intlMessage: Uc.nav_gtao_my_character,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoOverviewButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              }
            }, {
              text: Uc.nav_gtao_guides.defaultMessage,
              intlMessage: Uc.nav_gtao_guides,
              type: "nav-internal",
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: v.z.www,
                path: "/gta-online/guides"
              }
            }, {
              text: Uc.nav_gtao_license_plate_creator.defaultMessage,
              intlMessage: Uc.nav_gtao_license_plate_creator,
              type: "nav-internal",
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: v.z.www,
                path: "/gta-online/license-plates"
              }
            }]
          }, {
            text: Uc.nav_gtao_story.defaultMessage,
            intlMessage: Uc.nav_gtao_story,
            dataTestId: "gtaoStoryDropdown",
            type: "nav-dropdown",
            children: [{
              text: Uc.nav_gtao_stats.defaultMessage,
              intlMessage: Uc.nav_gtao_stats,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoCareerButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/"
              }
            }, {
              text: Uc.nav_gtao_missions.defaultMessage,
              intlMessage: Uc.nav_gtao_missions,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoMissionsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/missions/"
              }
            }, {
              text: Uc.nav_gtao_checklist.defaultMessage,
              intlMessage: Uc.nav_gtao_checklist,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoChecklistButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/checklist"
              }
            }, {
              text: Uc.nav_gtao_accomplishments.defaultMessage,
              intlMessage: Uc.nav_gtao_accomplishments,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoAccomplishmentsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/accomplishments"
              }
            }]
          }, {
            text: Uc.nav_gtao_gta_plus.defaultMessage,
            intlMessage: Uc.nav_gtao_gta_plus,
            type: "nav-internal",
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: v.z.www,
              path: "/gta-plus"
            }
          }, {
            text: Uc.nav_gtao_community.defaultMessage,
            intlMessage: Uc.nav_gtao_community,
            type: "nav-dropdown",
            dataTestId: "gtaoCommunityDropdown",
            children: [{
              text: Uc.nav_gtao_jobs.defaultMessage,
              intlMessage: Uc.nav_gtao_jobs,
              type: "nav-dropdown",
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: Uc.nav_gtao_jobs_browse_all.defaultMessage,
                intlMessage: Uc.nav_gtao_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs"
                }
              }, {
                text: Uc.nav_gtao_my_jobs.defaultMessage,
                intlMessage: Uc.nav_gtao_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: v.z.socialClub,
                  path: " /jobs/?filter=me&sort=likes&title=gtav"
                }
              }, {
                text: Uc.nav_gtao_jobs_playlists.defaultMessage,
                intlMessage: Uc.nav_gtao_jobs_playlists,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: Uc.nav_gtao_crews.defaultMessage,
              intlMessage: Uc.nav_gtao_crews,
              type: "nav-dropdown",
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: Uc.nav_gtao_browse_crews.defaultMessage,
                intlMessage: Uc.nav_gtao_browse_crews,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews"
                }
              }, {
                text: Uc.nav_gtao_my_crews.defaultMessage,
                intlMessage: Uc.nav_gtao_my_crews,
                type: "nav-internal",
                dataTestId: "gtaoMyCrewsButton",
                requiresAuth: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: Uc.nav_gtao_crews_create.defaultMessage,
                intlMessage: Uc.nav_gtao_crews_create,
                type: "nav-internal",
                dataTestId: "gtaoCreateCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: Uc.nav_gtao_emblem_editor.defaultMessage,
                intlMessage: Uc.nav_gtao_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtaoCreateEmblemButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/emblems/new"
                }
              }]
            }, {
              text: Uc.nav_gtao_photos.defaultMessage,
              intlMessage: Uc.nav_gtao_photos,
              type: "nav-internal",
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: v.z.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: Uc.nav_gtao_videos.defaultMessage,
              intlMessage: Uc.nav_gtao_videos,
              type: "nav-internal",
              dataTestId: "gtaoVideosButton",
              location: {
                domain: v.z.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: Uc.nav_gtao_support.defaultMessage,
            intlMessage: Uc.nav_gtao_support,
            type: "nav-external",
            dataTestId: "gtaoSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: Uc.nav_gtao_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_gtao_cta_buy_now,
            dataTestId: "gtaoPurchaseLink",
            location: {
              domain: v.z.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy"
          }
        },
        f_ = {
          site: "sanandreas",
          appearancePaths: {
            [v.z.www]: ["/games/sanandreas/*"]
          },
          brand: "gtasanandreas",
          links: [],
          cta: {
            text: Uc.nav_gtasanandreas_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_gtasanandreas_cta_buy_now,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            dataTestId: "gtaSanAndreasPurchaseLink"
          }
        },
        b_ = {
          site: "gta-trilogy",
          appearancePaths: {
            [v.z.www]: ["/GTATrilogy/*"],
            [v.z.socialClub]: ["/games/gtasa/*", "/games/gtavc/*", "/games/gta3/*"]
          },
          brand: "gtatrilogy",
          links: [{
            text: Uc.nav_gta_trilogy_overview.defaultMessage,
            intlMessage: Uc.nav_gta_trilogy_overview,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: v.z.www,
              path: "/GTATrilogy"
            }
          }, {
            text: Uc.nav_gta_trilogy_accomplishments.defaultMessage,
            intlMessage: Uc.nav_gta_trilogy_accomplishments,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: Uc.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: Uc.nav_gta_trilogy_gtasa,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: Uc.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: Uc.nav_gta_trilogy_gtavc,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: Uc.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: Uc.nav_gta_trilogy_gta3,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: Uc.nav_gta_trilogy_support.defaultMessage,
            intlMessage: Uc.nav_gta_trilogy_support,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: Uc.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: Uc.nav_gta_trilogy_gtasa,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: v.z.support,
                path: "/categories/115001620287"
              }
            }, {
              text: Uc.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: Uc.nav_gta_trilogy_gtavc,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: v.z.support,
                path: "/categories/115001619868"
              }
            }, {
              text: Uc.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: Uc.nav_gta_trilogy_gta3,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: v.z.support,
                path: "/categories/115001619948"
              }
            }]
          }],
          cta: {
            text: Uc.nav_gta_trilogy_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_gta_trilogy_cta_buy_now,
            dataTestId: "gtaTrilogyPurchaseLink",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        k_ = {
          site: "vicecity",
          appearancePaths: {
            [v.z.www]: ["/games/vicecity/*"]
          },
          brand: "gtavc",
          links: [],
          cta: {
            text: Uc.nav_gtavc_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_gtavc_cta_buy_now,
            variant: "highlight",
            dataTestId: "gtaVcBuyNowLink",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        y_ = {
          site: "vicecitystories",
          appearancePaths: {
            [v.z.www]: ["/games/vicecitystories/*"]
          },
          brand: "gtavcs",
          links: []
        },
        w_ = {
          site: "la-noire",
          appearancePaths: {
            [v.z.www]: ["/lanoire/*", "/games/lanoire/*"],
            [v.z.socialClub]: ["/games/lanvr/*", "/games/lan/*"]
          },
          brand: "lanoire",
          links: [{
            text: Uc.nav_lanoire_overview.defaultMessage,
            intlMessage: Uc.nav_lanoire_overview,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: v.z.www,
              path: "/games/lanoire"
            }
          }, {
            text: Uc.nav_lanoire_progress.defaultMessage,
            intlMessage: Uc.nav_lanoire_progress,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: Uc.nav_lanoire_pc_console.defaultMessage,
              intlMessage: Uc.nav_lanoire_pc_console,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: Uc.nav_lanoire_case_tracker.defaultMessage,
                intlMessage: Uc.nav_lanoire_case_tracker,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: Uc.nav_lanoire_checklist.defaultMessage,
                intlMessage: Uc.nav_lanoire_checklist,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: Uc.nav_lanoire_stats.defaultMessage,
                intlMessage: Uc.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: Uc.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: Uc.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: Uc.nav_lanoire_badge_pursuit.defaultMessage,
                intlMessage: Uc.nav_lanoire_badge_pursuit,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: Uc.nav_lanoire_vr_case_files.defaultMessage,
              intlMessage: Uc.nav_lanoire_vr_case_files,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: Uc.nav_lanoire_stats.defaultMessage,
                intlMessage: Uc.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: Uc.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: Uc.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: Uc.nav_lanoire_support.defaultMessage,
            intlMessage: Uc.nav_lanoire_support,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: Uc.nav_lanoire_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_lanoire_cta_buy_now,
            dataTestId: "lanoirePurchaseLink",
            location: {
              domain: v.z.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy"
          }
        },
        x_ = {
          site: "manhunt",
          appearancePaths: {
            [v.z.www]: ["/games/manhunt/*"]
          },
          brand: "manhunt",
          links: []
        },
        M_ = {
          site: "manhunt2",
          appearancePaths: {
            [v.z.www]: ["/games/manhunt2/*"]
          },
          brand: "manhunt2",
          links: []
        },
        S_ = {
          site: "maxpayne",
          appearancePaths: {
            [v.z.www]: ["/games/maxpayne/*"]
          },
          brand: "maxpayne",
          links: []
        },
        T_ = {
          site: "maxpayne2",
          appearancePaths: {
            [v.z.www]: ["/games/maxpayne2/*"]
          },
          brand: "maxpayne2",
          links: []
        },
        C_ = {
          site: "maxpayne3",
          appearancePaths: {
            [v.z.www]: ["/games/maxpayne3/*"],
            [v.z.socialClub]: ["/games/maxpayne3/*"]
          },
          brand: "maxpayne3",
          links: [{
            text: Uc.nav_mp3_overview.defaultMessage,
            intlMessage: Uc.nav_mp3_overview,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: v.z.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: Uc.nav_mp3_progress.defaultMessage,
            intlMessage: Uc.nav_mp3_progress,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: Uc.nav_mp3_accomplishments.defaultMessage,
              intlMessage: Uc.nav_mp3_accomplishments,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: Uc.nav_mp3_singleplayer.defaultMessage,
              intlMessage: Uc.nav_mp3_singleplayer,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: Uc.nav_mp3_career.defaultMessage,
                intlMessage: Uc.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: Uc.nav_mp3_checklist.defaultMessage,
                intlMessage: Uc.nav_mp3_checklist,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: Uc.nav_mp3_grinds.defaultMessage,
                intlMessage: Uc.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: Uc.nav_mp3_chapters.defaultMessage,
                intlMessage: Uc.nav_mp3_chapters,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: Uc.nav_mp3_weapons.defaultMessage,
                intlMessage: Uc.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: Uc.nav_mp3_leaderboards.defaultMessage,
                intlMessage: Uc.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: Uc.nav_mp3_multiplayer.defaultMessage,
              intlMessage: Uc.nav_mp3_multiplayer,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: Uc.nav_mp3_career.defaultMessage,
                intlMessage: Uc.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: Uc.nav_mp3_grinds.defaultMessage,
                intlMessage: Uc.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: Uc.nav_mp3_weapons.defaultMessage,
                intlMessage: Uc.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: Uc.nav_mp3_leaderboards.defaultMessage,
                intlMessage: Uc.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: Uc.nav_mp3_crews.defaultMessage,
              intlMessage: Uc.nav_mp3_crews,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: Uc.nav_mp3_multiplayer.defaultMessage,
                intlMessage: Uc.nav_mp3_multiplayer,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: Uc.nav_mp3_score_attack.defaultMessage,
                intlMessage: Uc.nav_mp3_score_attack,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: Uc.nav_mp3_ny_minute.defaultMessage,
                intlMessage: Uc.nav_mp3_ny_minute,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: Uc.nav_mp3_checkpoint_challenge.defaultMessage,
                intlMessage: Uc.nav_mp3_checkpoint_challenge,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: Uc.nav_mp3_featured.defaultMessage,
                intlMessage: Uc.nav_mp3_featured,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/crews/rivalries"
                }
              }]
            }]
          }, {
            text: Uc.nav_mp3_support.defaultMessage,
            intlMessage: Uc.nav_mp3_support,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: Uc.nav_mp3_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_mp3_cta_buy_now,
            dataTestId: "mp3PurchaseLink",
            location: {
              domain: v.z.www,
              path: "/games/maxpayne3/order"
            },
            ga: "cta_buy"
          }
        },
        N_ = {
          site: "midnightclub",
          appearancePaths: {
            [v.z.www]: ["/games/midnightclub/*"]
          },
          brand: "midnightclubstreetracing",
          links: []
        },
        j_ = {
          site: "midnightclub2",
          appearancePaths: {
            [v.z.www]: ["/games/midnightclub2/*"]
          },
          brand: "midnightclub2",
          links: []
        },
        z_ = {
          site: "midnightclub3",
          appearancePaths: {
            [v.z.www]: ["/games/midnightclub3/*"]
          },
          brand: "midnightclub3dub",
          links: []
        },
        A_ = {
          site: "midnightclubLA",
          appearancePaths: {
            [v.z.www]: ["/games/midnightclubLA/*"]
          },
          brand: "midnightclubla",
          links: [],
          cta: {
            text: Uc.nav_midnightclubla_buy_now.defaultMessage,
            intlMessage: Uc.nav_midnightclubla_buy_now,
            dataTestId: "midnightClubLaBuyNowCta",
            location: {
              domain: "https://marketplace.xbox.com",
              path: "/en-US/Product/Midnight-Club-LA/66acd000-77fe-1000-9115-d802545407f8"
            },
            ga: "cta_buy"
          }
        },
        E_ = {
          site: "oni",
          appearancePaths: {
            [v.z.www]: ["/games/oni/*"]
          },
          brand: "oni",
          links: []
        },
        I_ = {
          site: "rdo",
          appearancePaths: {
            [v.z.www]: ["/reddeadonline/*"],
            [v.z.socialClub]: ["/games/rdo/*"]
          },
          brand: "reddeadonline",
          links: [{
            text: Uc.nav_rdo_overview.defaultMessage,
            intlMessage: Uc.nav_rdo_overview,
            type: "nav-internal",
            dataTestId: "rdoLink",
            location: {
              domain: v.z.www,
              path: "/reddeadonline"
            }
          }, {
            text: Uc.nav_rdo_explore.defaultMessage,
            intlMessage: Uc.nav_rdo_explore,
            type: "nav-dropdown",
            dataTestId: "rdoExploreDropdown",
            children: [{
              text: Uc.nav_rdo_getting_started.defaultMessage,
              intlMessage: Uc.nav_rdo_getting_started,
              type: "nav-internal",
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/getting-started"
              }
            }, {
              text: Uc.nav_rdo_specialist_roles.defaultMessage,
              intlMessage: Uc.nav_rdo_specialist_roles,
              type: "nav-internal",
              dataTestId: "rdoRolesLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/roles"
              }
            }, {
              text: Uc.nav_rdo_story_missions.defaultMessage,
              intlMessage: Uc.nav_rdo_story_missions,
              type: "nav-internal",
              dataTestId: "rdoLOOLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              }
            }, {
              text: Uc.nav_rdo_posses_free_roam.defaultMessage,
              intlMessage: Uc.nav_rdo_posses_free_roam,
              type: "nav-internal",
              dataTestId: "rdoPossesLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              }
            }, {
              text: Uc.nav_rdo_competitive_series.defaultMessage,
              intlMessage: Uc.nav_rdo_competitive_series,
              type: "nav-internal",
              dataTestId: "rdoSAELink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              }
            }, {
              text: Uc.nav_rdo_customization.defaultMessage,
              intlMessage: Uc.nav_rdo_customization,
              type: "nav-internal",
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/customization"
              }
            }, {
              text: Uc.nav_rdo_progression.defaultMessage,
              intlMessage: Uc.nav_rdo_progression,
              type: "nav-internal",
              dataTestId: "rdoProgressLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/rank-and-fortune"
              }
            }]
          }, {
            text: Uc.nav_rdo_progress.defaultMessage,
            intlMessage: Uc.nav_rdo_progress,
            type: "nav-dropdown",
            dataTestId: "rdoProgressDropdown",
            children: [{
              text: Uc.nav_rdo_my_character.defaultMessage,
              intlMessage: Uc.nav_rdo_my_character,
              type: "nav-internal",
              dataTestId: "rdoOverviewButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/overview"
              }
            }, {
              text: Uc.nav_rdo_roles.defaultMessage,
              intlMessage: Uc.nav_rdo_roles,
              type: "nav-internal",
              dataTestId: "rdoRolesButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/roles"
              }
            }, {
              text: Uc.nav_rdo_club_rewards.defaultMessage,
              intlMessage: Uc.nav_rdo_club_rewards,
              type: "nav-internal",
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/clubrewards"
              }
            }, {
              text: Uc.nav_rdo_rank_unlocks.defaultMessage,
              intlMessage: Uc.nav_rdo_rank_unlocks,
              type: "nav-internal",
              dataTestId: "rdoRankButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/rank"
              }
            }, {
              text: Uc.nav_rdo_awards.defaultMessage,
              intlMessage: Uc.nav_rdo_awards,
              type: "nav-internal",
              dataTestId: "rdoAwardsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/awards"
              }
            }, {
              text: Uc.nav_rdo_accomplishments.defaultMessage,
              intlMessage: Uc.nav_rdo_accomplishments,
              type: "nav-internal",
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/achievements"
              }
            }, {
              text: Uc.nav_rdo_benefits.defaultMessage,
              intlMessage: Uc.nav_rdo_benefits,
              type: "nav-internal",
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/benefits"
              }
            }]
          }, {
            text: Uc.nav_rdo_community.defaultMessage,
            intlMessage: Uc.nav_rdo_community,
            type: "nav-dropdown",
            dataTestId: "rdoCommunityDropdown",
            children: [{
              text: Uc.nav_rdo_posses.defaultMessage,
              intlMessage: Uc.nav_rdo_posses,
              type: "nav-internal",
              dataTestId: "rdoPosseButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/posse"
              }
            }, {
              text: Uc.nav_rdo_photos.defaultMessage,
              intlMessage: Uc.nav_rdo_photos,
              type: "nav-internal",
              dataTestId: "rdoPhotosButton",
              location: {
                domain: v.z.socialClub,
                path: "/photos/?title=rdr2"
              }
            }]
          }, {
            text: Uc.nav_rdo_catalogue.defaultMessage,
            intlMessage: Uc.nav_rdo_catalogue,
            type: "nav-external",
            dataTestId: "rdoCatalogueButton",
            target: "_blank",
            location: {
              domain: v.z.socialClub,
              path: "games/rdr2/catalogue/online/"
            }
          }, {
            text: Uc.nav_rdo_support.defaultMessage,
            intlMessage: Uc.nav_rdo_support,
            type: "nav-external",
            dataTestId: "rdoSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: Uc.nav_rdo_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_rdo_cta_buy_now,
            dataTestId: "rdoPurchaseLink",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        },
        P_ = {
          site: "reddeadredemption",
          appearancePaths: {
            [v.z.www]: ["/reddeadredemption/*"]
          },
          brand: "reddeadredemption",
          links: [],
          cta: {
            text: Uc.nav_rdr_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_rdr_cta_buy_now,
            dataTestId: "rsrBuyNowCta",
            location: {
              domain: v.z.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy"
          }
        },
        L_ = {
          site: "rdr2",
          appearancePaths: {
            [v.z.www]: ["/reddeadredemption2/*", "/games/reddeadredemption2/*"],
            [v.z.socialClub]: ["/games/rdr2/*"]
          },
          brand: "reddeadredemption2",
          links: [{
            text: Uc.nav_rdr2_overview.defaultMessage,
            intlMessage: Uc.nav_rdr2_overview,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: v.z.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: Uc.nav_rdr2_explore.defaultMessage,
            intlMessage: Uc.nav_rdr2_explore,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: Uc.nav_rdr2_van_der_linde_gang.defaultMessage,
              intlMessage: Uc.nav_rdr2_van_der_linde_gang,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: Uc.nav_rdr2_locations.defaultMessage,
              intlMessage: Uc.nav_rdr2_locations,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: Uc.nav_rdr2_wildlife.defaultMessage,
              intlMessage: Uc.nav_rdr2_wildlife,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: Uc.nav_rdr2_weaponry.defaultMessage,
              intlMessage: Uc.nav_rdr2_weaponry,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: Uc.nav_rdr2_progress.defaultMessage,
            intlMessage: Uc.nav_rdr2_progress,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: Uc.nav_rdr2_stats.defaultMessage,
              intlMessage: Uc.nav_rdr2_stats,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: Uc.nav_rdr2_chapters.defaultMessage,
              intlMessage: Uc.nav_rdr2_chapters,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: Uc.nav_rdr2_challenges.defaultMessage,
              intlMessage: Uc.nav_rdr2_challenges,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: Uc.nav_rdr2_character.defaultMessage,
              intlMessage: Uc.nav_rdr2_character,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: Uc.nav_rdr2_compendium.defaultMessage,
              intlMessage: Uc.nav_rdr2_compendium,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: Uc.nav_rdr2_accomplishments.defaultMessage,
              intlMessage: Uc.nav_rdr2_accomplishments,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: Uc.nav_rdr2_media.defaultMessage,
            intlMessage: Uc.nav_rdr2_media,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: Uc.nav_rdr2_gallery.defaultMessage,
              intlMessage: Uc.nav_rdr2_gallery,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: Uc.nav_rdr2_artwork.defaultMessage,
              intlMessage: Uc.nav_rdr2_artwork,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: Uc.nav_rdr2_videos.defaultMessage,
              intlMessage: Uc.nav_rdr2_videos,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: Uc.nav_rdr2_music.defaultMessage,
              intlMessage: Uc.nav_rdr2_music,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: Uc.nav_rdr2_online.defaultMessage,
            intlMessage: Uc.nav_rdr2_online,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: v.z.www,
              path: "/reddeadonline"
            }
          }, {
            text: Uc.nav_rdr2_catalogue.defaultMessage,
            intlMessage: Uc.nav_rdr2_catalogue,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: v.z.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: Uc.nav_rdr2_support.defaultMessage,
            intlMessage: Uc.nav_rdr2_support,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: Uc.nav_rdr2_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_rdr2_cta_buy_now,
            dataTestId: "rdr2StoreLink",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        },
        O_ = {
          site: "undeadnightmare",
          appearancePaths: {
            [v.z.www]: ["/games/undeadnightmare/*"]
          },
          brand: "reddeadredemptionundeadnightmare",
          links: []
        },
        D_ = {
          site: "reddeadrevolver",
          appearancePaths: {
            [v.z.www]: ["/games/reddeadrevolver/*"]
          },
          brand: "reddeadrevolver",
          links: []
        },
        R_ = {
          site: "rsg",
          appearancePaths: {
            [v.z.www]: ["/*"],
            [v.z.socialClub]: ["/*"]
          },
          brand: null,
          links: [{
            text: Uc.nav_rsg_games.defaultMessage,
            intlMessage: Uc.nav_rsg_games,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: Uc.nav_rsg_newswire.defaultMessage,
            intlMessage: Uc.nav_rsg_newswire,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: v.z.www,
              path: "/newswire"
            }
          }, {
            text: Uc.nav_rsg_videos.defaultMessage,
            intlMessage: Uc.nav_rsg_videos,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: v.z.www,
              path: "/videos"
            }
          }, {
            text: Uc.nav_rsg_downloads.defaultMessage,
            intlMessage: Uc.nav_rsg_downloads,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: v.z.www,
              path: "/downloads"
            }
          }, {
            text: Uc.nav_rsg_store.defaultMessage,
            intlMessage: Uc.nav_rsg_store,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: null
            }
          }, {
            text: Uc.nav_rsg_support.defaultMessage,
            intlMessage: Uc.nav_rsg_support,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: null
            }
          }],
          cta: {
            text: Uc.nav_rsg_cta_get_launcher.defaultMessage,
            intlMessage: Uc.nav_rsg_cta_get_launcher,
            variant: "highlight",
            dataTestId: "launcherLink",
            location: {
              domain: v.z.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download"
          },
          hideQuickAccess: !0
        },
        V_ = {
          site: "stateofemergency",
          appearancePaths: {
            [v.z.www]: ["/games/stateofemergency/*"]
          },
          brand: "stateofemergency",
          links: []
        },
        B_ = {
          site: "skateanddestroy",
          appearancePaths: {
            [v.z.www]: ["/games/skateanddestroy/*"]
          },
          brand: "thrashersad",
          links: []
        },
        G_ = {
          site: "smugglersrun",
          appearancePaths: {
            [v.z.www]: ["/games/smugglersrun/*"]
          },
          brand: "smugglersrun",
          links: []
        },
        F_ = {
          site: "smugglersrun2",
          appearancePaths: {
            [v.z.www]: ["/games/smugglersrun2/*"]
          },
          brand: "smugglersrun2hostileterritory",
          links: []
        },
        q_ = {
          site: "smugglersrunwarzones",
          appearancePaths: {
            [v.z.www]: ["/games/smugglersrunwarzones/*"]
          },
          brand: "smugglersrunwarzones",
          links: []
        },
        $_ = {
          site: "support",
          appearancePaths: {
            [v.z.support]: ["/*"]
          },
          brand: null,
          links: [{
            text: Uc.nav_support_home.defaultMessage,
            intlMessage: Uc.nav_support_home,
            type: "nav-internal",
            location: {
              domain: v.z.support,
              path: ""
            }
          }, {
            text: Uc.nav_support_service_status.defaultMessage,
            intlMessage: Uc.nav_support_service_status,
            type: "nav-internal",
            location: {
              domain: v.z.support,
              path: "/servicestatus"
            }
          }, {
            text: Uc.nav_support_submit_ticket.defaultMessage,
            intlMessage: Uc.nav_support_submit_ticket,
            type: "nav-internal",
            location: {
              domain: v.z.support,
              path: "/categories"
            }
          }],
          cta: {
            text: Uc.nav_support_dashboard.defaultMessage,
            intlMessage: Uc.nav_support_dashboard,
            variant: "highlight",
            location: {
              domain: v.z.support,
              path: "/dashboard"
            },
            ga: "cta_other"
          }
        },
        U_ = {
          site: "tabletennis",
          appearancePaths: {
            [v.z.www]: ["/games/tabletennis/*"]
          },
          brand: "tabletennis",
          links: [],
          cta: {
            text: Uc.nav_tabletennis_cta_buy_now.defaultMessage,
            intlMessage: Uc.nav_tabletennis_cta_buy_now,
            variant: "highlight",
            dataTestId: "tableTennisCta",
            location: {
              domain: "https://www.xbox.com",
              path: "/en-US/games/store/rockstar-table-tennis/bvz4h08bmq3h"
            },
            ga: "cta_buy"
          }
        },
        H_ = {
          site: "italianjob",
          appearancePaths: {
            [v.z.www]: ["/games/italianjob/*"]
          },
          brand: "theitalianjob",
          links: []
        },
        X_ = {
          site: "thewarriors",
          appearancePaths: {
            [v.z.www]: ["/games/thewarriors/*"]
          },
          brand: "thewarriors",
          links: []
        },
        W_ = {
          site: "wildmetal",
          appearancePaths: {
            [v.z.www]: ["/games/wildmetal/*"]
          },
          brand: "wildmetal",
          links: []
        },
        Y_ = (0, r.vU)({
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
          sc_menu_toggle: {
            id: "sc_menu_toggle",
            defaultMessage: "Toggle Social Club Menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        Z_ = (e, a) => {
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
        J_ = t(2490),
        K_ = t(8682),
        Q_ = () => {
          let e = !1;
          e = !0;
          const a = (0, o.Z)(),
            {
              data: t
            } = Z(),
            {
              charactersNeeded: s,
              currentCharId: n,
              navOpen: r,
              setNavOpen: i
            } = R(),
            {
              track: c
            } = te(),
            [d, g] = (0, l.useState)(null),
            [m, u] = (0, l.useState)(!1),
            [v, p] = (0, l.useState)(null),
            [h, f] = (0, l.useState)(!1),
            [b, k] = (0, l.useState)([]),
            [, y] = Jc();
          (0, l.useEffect)((() => {
            k(t.characters[s] ?? [])
          }), [t, s]);
          const w = (0, l.useCallback)((e => {
            e.stopPropagation(), i(!r), c({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: r ? "close" : "open"
            })
          }), [r]);
          return (0, l.useEffect)((() => {
            const e = t?.id ?? !1,
              a = e ? (b?.[n]?.mugshotUrl ?? t?.avatar) || J_ : K_,
              s = Z_(b?.[n]?.platform, "small") ?? null;
            p(s), g(a), u(e), f(!!b?.[n]?.mugshotUrl)
          }), [t, b, n, J_, K_]), (0, _.jsxs)("button", {
            className: "rockstargames-modules-core-headerf031d3c8e1a538f13046a93a66eec662",
            "data-img-set": h,
            "aria-label": a.formatMessage(Y_.sc_menu_toggle),
            type: "button",
            onClick: e => w(e),
            "data-testid": "avaterMenuButton",
            children: [(0, _.jsx)("img", {
              className: "rockstargames-modules-core-headerd3b659042c82d09456f804b882c8dcd8",
              src: d || "",
              onError: () => {
                g(J_)
              },
              alt: t?.nickname || ""
            }), m && null !== v && (0, _.jsx)("img", {
              className: "rockstargames-modules-core-headerec40dc2247007d12658690f716323984",
              src: v.src,
              alt: v.alt
            }), m && (0, _.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-headerc414ae83ddce13aad3f194b1018bf58c",
              "data-platform": b?.[n]?.platform ?? null
            })]
          })
        },
        ed = (0, b.BS)("@rockstargames/modules-core-header/profile-switcher"),
        ad = ed("languageSelectorOpenedReactive", !1),
        td = e => ad(e),
        sd = ed("activeSubNavIdReactive", -1),
        nd = e => sd(e),
        rd = ed("subNavExtraHeightReactive", -1),
        id = e => rd(e),
        od = ed("scNavOpenedReactive", !0),
        ld = e => od(e),
        cd = ed("charListHiddenReactive", !0),
        _d = e => cd(e),
        dd = () => {
          const e = (0, b.lY)(ad),
            a = (0, b.lY)(sd),
            t = (0, b.lY)(rd),
            s = (0, b.lY)(od),
            n = (0, b.lY)(cd);
          return (0, l.useEffect)((() => {
            n || (e && td(!1), s && (ld(!1), nd(-1)))
          }), [n]), (0, l.useEffect)((() => {
            !e && n && (s || ld(!0))
          }), [e, n]), (0, l.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: td,
            activeSubNavId: a,
            setActiveSubNavId: nd,
            subNavExtraHeight: t,
            setSubNavExtraHeight: id,
            scNavOpened: s,
            setScNavOpened: ld,
            charListHidden: n,
            setCharListHidden: _d
          })), [e, a, t, s, n])
        },
        gd = e => {
          let {
            children: a,
            to: t = "#",
            alt: s = "",
            autoBlank: n = !1,
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
            return (0, _.jsx)("a", {
              title: s,
              href: t,
              onClick: e,
              ...i,
              children: a
            })
          }
          if (o) return (0, _.jsx)(K.NavLink, {
            title: s,
            to: t,
            onClick: e => r(e),
            ...i,
            children: a
          });
          const l = Object.keys(i).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
              ...e,
              [a]: i[a]
            })), {}),
            c = i?.target ?? (n ? "_blank" : "_self");
          return "function" == typeof l?.className && delete l.className, (0, _.jsx)("a", {
            href: t,
            ...l,
            title: s,
            onClick: e => r(e),
            target: c,
            children: a
          })
        };
      var md = t(6588),
        ud = t.n(md);
      t(2059);
      const vd = {
          button: "rockstargames-modules-core-headerf5dc166ac5cc8fab506116c0da01dcc2",
          secondary: "rockstargames-modules-core-headerb139179467cbca2821a4f3ee8d2972a9"
        },
        pd = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: n,
            onClick: r,
            ...i
          } = e;
          const o = [vd.button, vd[s], a].join(" ");
          return n ? (0, _.jsx)(gd, {
            ...i,
            to: n,
            className: o,
            onClick: r ? () => r() : () => {},
            children: t
          }) : (0, _.jsx)("button", {
            ...i,
            type: "button",
            className: o,
            onClick: r ? () => r() : () => {},
            children: t
          })
        },
        hd = function() {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
          return [...a].filter(Boolean).join(" ")
        },
        fd = (0, l.createContext)(),
        {
          Provider: bd
        } = fd,
        kd = e => {
          let {
            children: a,
            payload: t
          } = e;
          return (0, _.jsx)(bd, {
            value: t,
            children: a
          })
        },
        yd = (0, l.createContext)(),
        {
          Provider: wd
        } = yd,
        xd = e => {
          let {
            children: a,
            components: t
          } = e;
          return (0, _.jsx)(wd, {
            value: t,
            children: a
          })
        };
      var Md = t(4947),
        Sd = t.n(Md);
      t(5821), t(4675), t(3520);
      const Td = "content";
      var Cd = t(8061);
      const Nd = e => {
          let {
            components: a,
            payload: t,
            componentProps: s = {}
          } = e;
          const n = (0, l.useMemo)((() => (a_().cloneDeepWith(t, ((e, s) => {
            "_template" !== s || Number.isInteger(Number(e)) || a_().get(a, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", a))
          })), (e => {
            let {
              components: a,
              payload: t,
              componentProps: s
            } = e;
            const n = e => {
              let r = "";
              if (r = Array.isArray(e?.[Td]) ? e[Td].map((e => n(e))) : e?.[Td] ?? "", !e?._template) return r;
              let i = a_().get(a, e?._template) ?? null;
              "0" === e?._template && (console.warn(`The _template "${e?._template}" wasn't found in the available components. The _template "${e?._template}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(a),
                payload: e
              }), i = a_().get(a, "gen9.Hero") ?? null);
              const o = [...e?.translations ?? []].reverse(),
                c = `componentProps_${(0,Cd.Z)()}`;
              return (0, l.createElement)(i, {
                ...t?.meta,
                ...e,
                ...s,
                t: e => o.find((a => a?._key === e))?.value ?? e,
                key: c
              }, r)
            };
            return t?.[Td]?.length ? n(t) : null
          })({
            components: a,
            payload: t,
            componentProps: s
          }))), [JSON.stringify(t), JSON.stringify(a)]);
          return n
        },
        jd = e => {
          let {
            tina: a,
            components: t = {},
            componentProps: s = {}
          } = e;
          const n = (0, l.useContext)(fd),
            [r, i] = (0, l.useState)(null),
            [o, c] = (0, l.useState)(null);
          (0, l.useEffect)((() => {
            a?.payload && i(a.payload), a?.variables && c(a.variables)
          }), [a]);
          const [d] = (0, l.useState)({
            ...t,
            ...(0, l.useContext)(yd) ?? {}
          }), g = (e => {
            let {
              payload: a
            } = e;
            const [t, s] = (0, l.useState)(a);
            return (0, l.useEffect)((() => {
              const e = a_().debounce((() => {
                const e = JSON.parse(JSON.stringify(a));
                a_().cloneDeepWith(e, ((e, a, t) => {
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
                })), s(e)
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
            const [s, n] = (0, l.useState)(a), [r, i] = (0, l.useState)(t);
            return (0, l.useEffect)((() => {
              const e = ((e, a) => {
                  const t = {};
                  return a_().cloneDeepWith(e, ((e, s, n) => {
                    s === a && e && (t[n.key] = e)
                  })), t
                })(a, "_memoq"),
                s = JSON.parse(JSON.stringify(a_().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(t?.keys ?? {})))));
              i(s)
            }), [JSON.stringify(a), t]), (0, l.useEffect)((() => {
              const e = JSON.parse(JSON.stringify(a)),
                t = JSON.parse(JSON.stringify(r));
              a_().cloneDeepWith(e, ((e, a, s) => {
                (e => {
                  let {
                    item: a,
                    variableKey: s
                  } = e;
                  if (!a || !a_().has(a, "key") || a.translated) return;
                  const n = t[a.key] ?? null;
                  if (!n) return;
                  const r = Sd()(n);
                  Object.keys(r).map((e => {
                    a_().set(a, e, r[e])
                  })), a_().set(a, "translated", !0), Object.freeze(a)
                })({
                  item: s,
                  variableKey: e
                })
              })), n(e)
            }), [JSON.stringify(a), JSON.stringify(r)]), s
          })({
            payload: r,
            variables: o
          });
          return (0, l.useMemo)((() => {
            if (!r) return null;
            const e = m,
              t = r?.meta?.prod ?? r?.meta?.cdn ?? n?.meta?.prod ?? n?.meta?.cdn ?? !1,
              i = {
                ...r,
                meta: {
                  ...r?.meta ?? {},
                  prod: t
                }
              };
            return (0, _.jsx)(kd, {
              payload: i,
              children: (0, _.jsx)(xd, {
                components: d,
                children: (0, _.jsx)(Nd, {
                  payload: e,
                  components: d,
                  componentProps: {
                    ...s,
                    tina: a
                  }
                })
              })
            })
          }), [n, r, JSON.stringify(g), JSON.stringify(m)])
        };
      var zd = t(2965);
      const Ad = (0, t(3930).Hu)(),
        Ed = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, n] = (0, l.useState)(!1), r = (e => {
            const [a] = (0, K.useSearchParams)(), [t, s] = (0, l.useState)(null), n = Z(), {
              loggedIn: r
            } = n, {
              currentCharId: i
            } = R(), o = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, l.useMemo)((() => {
                const s = e?.data?.characters?.[t];
                return "1" === (s?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(n, i);
            return (0, l.useEffect)((() => {
              s(null);
              const n = "true" === a.get("conditionPreview");
              if (!(!e?.length > 0)) return Ad.applyFilters("preview_conditions", e), e.forEach((e => {
                const {
                  value: i
                } = e;
                if (n) return "true" === a.get(i) ? (s(!0), !0) : (s(!1), !1);
                if (!1 === t) return !1;
                switch (i) {
                  case "user:is:loggedIn":
                    s(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    s(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    s(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    s(!1 === o);
                    break;
                  default:
                    s(!1)
                }
                return null
              })), () => {}
            }), [a, e, o, n, r]), t
          })(a);
          return (0, l.useEffect)((() => {
            n(r)
          }), [r]), (0, l.useMemo)((() => s ? t : null), [s])
        };
      (0, k.zv)((e => {
        let {
          children: a
        } = e;
        return l.Children.map(l.Children.toArray(a), (e => (0, _.jsx)(Ed, {
          ...e?.props
        })))
      }));
      var Id = t(6809),
        Pd = t(3483);
      const Ld = e => {
          let {
            className: a
          } = e;
          return (0, _.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, _.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, _.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        Od = {
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
        Dd = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = te(), {
            refetch: n
          } = (0, b.aM)(Pd.UserGetVote, {
            skip: !0
          }), [r] = (0, b.Db)(Pd.UserCastVote), [i, o] = (0, l.useState)(null), c = (0, l.useCallback)((e => {
            (async () => {
              if (e === i && null !== i) o(null);
              else {
                o(e), s({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const n = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await r({
                  variables: n
                })
              }
            })()
          }), [a, t, i]);
          return (0, l.useEffect)((() => {
            a && t && (async () => {
              const e = await n({
                foreignId: a,
                foreignType: t
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, _.jsxs)("div", {
            className: Od.calloutVoteForm,
            children: [(0, _.jsx)("button", {
              "aria-label": "upvote",
              className: [Od.upvote, Od.voteButton, i ? Od.active : ""].join(" "),
              name: "upvote",
              onClick: () => c(!0),
              type: "button"
            }), (0, _.jsx)("button", {
              "aria-label": "downvote",
              className: [Od.downvote, Od.voteButton, !1 === i ? Od.active : ""].join(" "),
              name: "downvote",
              onClick: () => c(!1),
              type: "button"
            })]
          })
        },
        Rd = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: n
          } = te();
          return (0, _.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, _.jsxs)("button", {
              className: Od.calloutLink,
              type: "button",
              onClick: s ? () => n({
                ...s
              }) : () => {},
              children: [a, (0, _.jsx)(Ld, {
                className: Od.calloutLinkIcon
              })]
            })
          })
        },
        Vd = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: n
          } = e;
          const {
            track: r
          } = te();
          return (0, _.jsxs)("div", {
            className: Od.actionFooter,
            children: [a, t && " ", t && (0, _.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...n
              }),
              children: t
            })]
          })
        };
      (0, k.zv)((e => {
        let {
          header: a,
          subheader: t,
          type: s,
          action_text: n,
          link: r,
          foreign_id: i = document.location.pathname,
          foreign_type: o = "url",
          className: c = "",
          actionFooterHelperText: d,
          actionFooterLinkText: g,
          actionFooterLink: m,
          trackingData: u = {},
          actionFooterLinkTrackingData: v = {},
          t: p
        } = e;
        const {
          loggedIn: h
        } = Z(), {
          track: f
        } = te(), b = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
          ref: k,
          inView: y
        } = (0, Id.YD)({
          threshold: .6
        }), [w, x] = (0, l.useState)(!1);
        let M;
        if ((0, l.useEffect)((() => {
            y && !w && (f({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "callout section",
              element_placement: "callout section"
            }), x(!0))
          }), [y]), !a && !t) return null;
        switch (s) {
          case "vote":
            if (!h) {
              M = (0, _.jsx)(pd, {
                to: b,
                className: Od.calloutButton,
                onClick: u ? () => f({
                  ...u
                }) : () => {},
                children: "Log In"
              });
              break
            }
            M = (0, _.jsx)(Dd, {
              foreign_id: i,
              foreign_type: o
            });
            break;
          case "button":
            n && r && (M = (0, _.jsx)(pd, {
              to: r,
              className: Od.calloutButton,
              onClick: u ? () => f({
                ...u
              }) : () => {},
              children: n
            }));
            break;
          case "link":
            n && r && (M = (0, _.jsx)(Rd, {
              action_text: n,
              link: r,
              trackingData: u
            }));
            break;
          default:
            M = null
        }
        return (0, _.jsx)("div", {
          className: `${Od.calloutContainer} ${c||""}`,
          ref: k,
          children: (0, _.jsxs)("div", {
            className: Od.calloutSection,
            children: [(0, _.jsxs)("div", {
              className: [Od.calloutHeaders, M ? Od.calloutHeaderMargins : ""].join(" "),
              children: [a && (0, _.jsx)("h1", {
                className: Od.calloutHeader,
                children: p(a)
              }), t && (0, _.jsx)("h2", {
                className: Od.calloutSubheader,
                children: p(t)
              })]
            }), (0, _.jsxs)("div", {
              className: Od.actionBlock,
              children: [M, d && (0, _.jsx)(Vd, {
                helperText: d,
                linkText: g,
                link: m,
                trackingData: v
              })]
            })]
          })
        })
      })), t(2187);
      var Bd = t(9885),
        Gd = t.n(Bd);
      const {
        sanitize: Fd
      } = Gd();
      t(8507);
      const qd = {
          img: "rockstargames-modules-core-headerbf430847a4fc75f43c281b702cb67775",
          startAnimation: "rockstargames-modules-core-headerf937aa11d861c7446258df7cfd669940"
        },
        $d = e => {
          let {
            imgSrc: a,
            titleSlug: t
          } = e;
          const [s] = (0, k.TZ)(a);
          return (0, _.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [qd.img, s ? qd.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        Ud = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: s,
            site_in_rockstar: n = !1,
            title_slug: r
          } = a;
          let i = r;
          "V" === r && (i = "gta-v"), "GTAOnline" === r && (i = "gta-online"), "undeadnightmare" === r && (i = "reddeadredemption");
          const o = t ?? `${n?"":"/games"}/${i}`;
          return (0, _.jsx)(gd, {
            "aria-label": a,
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: o,
            target: "_self",
            className: "rockstargames-modules-core-headerab00cee9c6ebfc9dde968ca69f3f8b52",
            children: (0, _.jsx)($d, {
              imgSrc: s,
              titleSlug: r
            })
          })
        };
      var Hd = t(3118);
      class Xd extends l.Component {
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
          return this?.state?.error?.message ? (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-headeracd7086fbe8edad6f39a19c8f493ad75",
            children: [(0, _.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, _.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const Wd = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, _.jsx)(Xd, {
              header: a,
              children: (0, _.jsx)(e, {
                ...t
              })
            })
          }
        },
        Yd = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: n
          } = e;
          return (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-headere2ed16f199999059ee169ac09091ba51",
            children: [(0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerc8f16b560066271b2342690cad248566",
              ref: a,
              onClick: n,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerc4f9525be24b39051c76ecaa04e73500",
              ref: t,
              onClick: s,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        Zd = (Wd((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: n,
            customSlidesPerView: r = null,
            customSpaceBetween: i = null,
            slideClass: o,
            style: c,
            className: d,
            cardSizeBreakpoints: g = {},
            customAspectRatio: m,
            titleBadge: u
          } = e;
          const {
            track: v
          } = te(), p = (0, l.useRef)(null), h = (0, l.useRef)(null), f = (0, l.useRef)(null), [b, k] = (0, l.useState)(null), [y, w] = (0, l.useState)(!1), [x, M] = (0, l.useState)(null), [S, T] = (0, l.useState)({}), [C, N] = (0, l.useState)(), {
            ref: j,
            inView: z
          } = (0, Id.YD)({
            threshold: .6
          }), [A, E] = (0, l.useState)(!1), [I, P] = (0, l.useState)(null), [L, O] = (0, l.useState)(!1);
          (0, l.useEffect)((() => {
            const e = () => {
              O(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const D = {
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
          (0, l.useEffect)((() => {
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
          }), [p, r]), (0, l.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, P(a))
            })), E(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && L ? null : (0, _.jsx)(zd.o5, {
              children: e
            }, Symbol(a).toString())));
            k(a)
          }), [t, L]), (0, l.useEffect)((() => {
            N({
              nextEl: f.current,
              prevEl: h.current
            })
          }), [f, h]), (0, l.useEffect)((() => {
            z && !y && t && (v({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${n}`.toLowerCase(),
              element_placement: `deck - ${n}`.toLowerCase()
            }), w(!0))
          }), [z, t]);
          let R = "custom" === s ? {
            "--custom-aspect-ratio": m,
            ...c
          } : {
            ...c
          };
          return (0, _.jsxs)("div", {
            className: hd("rockstargames-modules-core-headerb8efa928adc0e5c84563e8f9cf7f3a30", d),
            "data-size": s,
            "data-sm": g?.sm ? g?.sm : s,
            "data-md": g?.md ? g?.md : s,
            "data-lg": g?.lg ? g?.lg : s,
            "data-xl": g?.xl ? g?.xl : s,
            "data-xxl": g?.xxl ? g?.xxl : s,
            "data-has-covercard": A,
            ref: p,
            style: R,
            children: [(0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerc9b615cce89d13b7bddc99e21c3c1f4c",
              ref: j
            }), A && L && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headere7026dae446389aca79ae8b0357e03ee",
              children: I
            }), (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerf80fd6d5582561660104adb89e12faaf",
              children: (0, _.jsxs)("div", {
                className: "rockstargames-modules-core-headerabff66535c2f133ee2fc7178d24baa37",
                children: [(0, _.jsxs)("div", {
                  className: "rockstargames-modules-core-headerdbff9f12e6751f7fc29390e76412845f",
                  children: [!A && n && (0, _.jsxs)("div", {
                    className: "rockstargames-modules-core-headerd8c745773c51e4c8fcee8c5ffa02f50a",
                    children: [(0, _.jsx)("h2", {
                      children: n
                    }), u && (0, _.jsx)("span", {
                      className: "rockstargames-modules-core-headerb73f00c53394c6282e0d22da20410913",
                      children: u
                    })]
                  }), (0, _.jsx)(Yd, {
                    prevRef: h,
                    nextRef: f,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-headerbd954b7dc66b2e48e3aa7d4022bb288f",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), x ? (0, _.jsx)(zd.tq, {
              slidesPerView: x,
              onInit: e => {
                T(e)
              },
              grabCursor: !0,
              navigation: C,
              modules: [Hd.W_],
              breakpoints: D,
              slideClass: hd("swiper-slide", o),
              onSlideNextTransitionEnd: () => {
                v({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                v({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                v({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              children: b
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
        Jd = "Select a Language";
      let Kd;
      Kd = e => {
        let {
          theme: a,
          languageSelectorOpened: t,
          setLanguageSelectorOpened: s,
          defaultMessage: n
        } = e;
        const r = (0, K.useLocation)(),
          c = (0, o.Z)(),
          [d, g] = f(),
          [u, p] = (0, l.useState)(!1),
          h = (0, l.useMemo)((() => (0, v.Z)()), []),
          b = (0, l.useCallback)((e => {
            let a = r.pathname;
            const t = a.split("/");
            return m.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), h.currentSite?.site === v.z.www ? "en" === e ? `${window.location.origin}${a}${r.search}` : `${window.location.origin}/${e}${a}${r.search}` : `${window.location.origin}${a}${r.search}`
          }), [r]);
        let k = !1;
        k = !0;
        const y = (0, l.useRef)(null),
          [w, x] = (0, l.useState)(0),
          M = matchMedia("(hover: none) and (pointer: coarse)").matches,
          S = e => {
            if (s && s(!1), d.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = m.find((a => a.subdomaincom === e));
            a && (g(a.iso), window.location.href = b(e))
          };
        return (0, l.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === u && p(!1)
        }), [t]), (0, l.useEffect)((() => {
          y.current && x(y.current.scrollHeight)
        }), [y]), (0, _.jsxs)("div", {
          className: [Zd.languageSelector, u ? Zd.open : ""].join(" "),
          "data-theme": a,
          children: [(0, _.jsxs)(_.Fragment, {
            children: [M && "sc-menu" === a && (0, _.jsx)("div", {
              className: Zd.selectBoxWrapper,
              children: (0, _.jsxs)("select", {
                className: Zd.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  S(e.currentTarget.value)
                },
                children: [(0, _.jsx)("option", {
                  className: Zd.selectBoxOption,
                  value: "none",
                  children: n ? (0, _.jsx)(i.Z, {
                    ...n
                  }) : Jd
                }), m.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, _.jsx)("option", {
                    className: Zd.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!M || "sc-menu" !== a) && (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!u), p(!u)
                },
                type: "button",
                "aria-label": n ? c.formatMessage(n) : Jd,
                children: [(0, _.jsx)("i", {}), (0, _.jsx)("span", {
                  children: n ? (0, _.jsx)(i.Z, {
                    ...n
                  }) : Jd
                })]
              }), (0, _.jsx)("div", {
                className: Zd.linkWrapper,
                ref: y,
                style: {
                  "--ls-linkWrapper-opened-height": `${w}px`
                },
                children: (0, _.jsx)("div", {
                  className: Zd.links,
                  children: m.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, _.jsx)(gd, {
                      to: b(a),
                      onClick: () => {
                        S(a)
                      },
                      tabIndex: u ? 0 : -1,
                      children: t
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          }), !1]
        })
      };
      const Qd = Kd,
        eg = {
          tag: "rockstargames-modules-core-headerf5978929e516a7f156d3d81ca93d966a"
        },
        ag = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: n
          } = e;
          const r = (0, _.jsxs)("div", {
            style: n,
            className: [eg.tag, a].join(" "),
            children: [(0, _.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, _.jsx)(gd, {
            to: t,
            children: r
          }) : r
        },
        tg = {
          newswireBlock: "rockstargames-modules-core-headerba2782b4444a519a060ddc4727f3fd79",
          info: "rockstargames-modules-core-headerb760fbda945b1aababe2df978bd27419",
          title: "rockstargames-modules-core-headerf23284941e0f8ffc13c9e4d77d2b7251",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-headerd5aec57fe2a8f93469a703100f272c64",
          preview: "rockstargames-modules-core-headerc78eec9cb8b10c5b29849794f5a58ea6",
          previewMobile: "rockstargames-modules-core-headeree92338af02ea3f31f362cb1804825ae",
          top: "rockstargames-modules-core-headera364218e924ffd9f280ad0b05495683b",
          startAnimation: "rockstargames-modules-core-headerc68720aaf32901f2a1946f596fd1f0a3"
        },
        sg = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: s = !1,
            style: n = {}
          } = e;
          const [r] = (0, K.useSearchParams)(), i = t.preview_images_parsed.newswire_block, o = {
            default: 0 !== a || s ? i.square || i.d16x9 || i._fallback : i.d16x9 || i.square || i._fallback,
            mobile: i.square || i._fallback
          }, [l, c] = (0, k.TZ)(o.default), [d, g] = (0, k.TZ)(o.mobile), m = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          };
          return (0, _.jsx)(gd, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [tg.newswireBlock, s ? tg.newswireBlockNoSpecialOrder : "", null !== l ? tg.startAnimation : ""].join(" "),
            children: (0, _.jsxs)(_.Fragment, {
              children: [0 !== a || r.get("tag_id") ? (0, _.jsx)("div", {
                className: tg.preview,
                style: m.default
              }) : (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)("div", {
                  className: tg.previewMobile,
                  style: m.mobile
                }), (0, _.jsx)("div", {
                  className: tg.preview,
                  style: m.default
                })]
              }), (0, _.jsxs)("div", {
                className: tg.info,
                children: [(0, _.jsxs)("div", {
                  className: tg.top,
                  children: [t.primary_tags.length ? (0, _.jsx)(ag, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, _.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, _.jsx)("h5", {
                  className: tg.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var ng = t(8300),
        rg = t.n(ng);
      (0, k.zv)((e => {
        let {
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: s = "/newswire",
          t: n
        } = e;
        const [r] = (0, K.useSearchParams)(), {
          tagId: i = null
        } = (0, K.useParams)(), [o, c] = (0, l.useState)(i ?? t ?? r.get("tag_id")), [d, g] = (0, l.useState)(1), [m, u] = (0, l.useState)([]), [v, p] = (0, l.useState)(null), {
          data: h
        } = (0, b.aM)(rg(), {
          variables: {
            tagId: Number(o),
            page: d,
            metaUrl: s
          },
          autoSetLoading: !0
        });
        return (0, l.useEffect)((() => {
          g(1), u([]), c(i ?? t ?? r.get("tag_id"))
        }), [r.get("tag_id")]), (0, l.useEffect)((() => {
          h && h.posts && h.posts.paging && p(h.posts.paging), h && h.posts && h.posts.results && u(m.concat(h.posts.results))
        }), [h]), m.length ? (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)(lg, {
            posts: m,
            relativeTo: a,
            noSpecialOrder: null !== o
          }), null !== v && v.nextPage ? (0, _.jsx)(pd, {
            onClick: () => g(d + 1),
            disabled: !1,
            context: "secondary",
            children: n("More Stories")
          }) : ""]
        }) : null
      }));
      const ig = {
          related: "rockstargames-modules-core-headerdf69a7aae85a9ec8b5ebd0a64496fb0e",
          posts: "rockstargames-modules-core-headera18a73cb511122aa4c3de9ffcb8363b2",
          just1post: "rockstargames-modules-core-headerf2c39530c1bf7492516d298384b1a3d2"
        },
        og = ((0, k.zv)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, _.jsxs)("section", {
            className: ig.related,
            children: [(0, _.jsx)("h2", {
              children: t("Related Stories")
            }), (0, _.jsx)("div", {
              className: [ig.posts, 1 === a.length ? ig.just1post : ""].join(" "),
              children: a.map((e => (0, _.jsx)(sg, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })), {
          newswireBlocks: "rockstargames-modules-core-headerdf082531ed434e4a44ea2c3474a07465",
          noSpecialOrder: "rockstargames-modules-core-headerf7a8b59f042399a20d9c74b1e2b76f4a"
        }),
        lg = (0, k.zt)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: s,
            relativeTo: n
          } = e;
          return (0, l.useEffect)((() => {
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
            })), s(e)
          }), [t.length]), (0, _.jsx)("div", {
            className: [og.newswireBlocks, a ? og.noSpecialOrder : "", og.contextHome].join(" "),
            children: t.map(((e, t) => (0, _.jsx)(sg, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        {
          sanitize: cg
        } = Gd();
      t(6147);
      var _g = t(7968);
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
      const dg = (0, r.vU)({
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
        gg = ((0, r.vU)({
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
      (0, k.s8)(t(8948)), Wd((e => {
        let {
          descriptors: a = null,
          footer: s = null,
          href: n,
          img: r = null,
          titleSlug: i = null,
          style: c = {},
          className: d
        } = e;
        const [g, m] = (0, l.useState)(!1), {
          inView: u
        } = (0, Id.YD)({
          threshold: .6
        }), [v, p] = (0, l.useState)({
          img_rating: r,
          rating_descriptors: a,
          rating_footer: s,
          url_rating: n
        }), {
          track: h
        } = te(), f = (0, o.Z)(), {
          data: y
        } = (0, b.aM)(_g.GameData, {
          variables: {
            titleSlug: i
          },
          skip: !i
        });
        if ((0, l.useEffect)((() => {
            y && p(y?.game)
          }), [y]), (0, l.useEffect)((() => {
            u && !g && v.img_rating && (h({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "rating",
              element_placement: "rating"
            }), m(!0))
          }), [u]), !v.img_rating) return null;
        const w = !!v.rating_descriptors;
        return (0, _.jsxs)("div", {
          className: [gg.rating, w ? gg.withDescriptors : gg.withOutDescriptors, d || ""].join(" "),
          style: (0, k.IO)(c),
          children: [(0, _.jsx)(gd, {
            to: v.url_rating,
            target: "_blank",
            children: (0, _.jsx)("img", {
              alt: f.formatMessage(dg.components_ratings_link_alt, {
                rating: (x = v.img_rating, x.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8214)(`./${v.img_rating}`)
            })
          }), w && (0, _.jsxs)("div", {
            className: gg.text,
            children: [(0, _.jsx)("p", {
              className: gg.descriptors,
              dangerouslySetInnerHTML: {
                __html: v?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), v.rating_footer && (0, _.jsx)("hr", {}), v.rating_footer && (0, _.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: v.rating_footer.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var x
      }));
      const mg = (0, k.zv)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, l.useState)(""), s = (0, K.useNavigate)(), n = (0, b.qs)();
          return (0, _.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-headerec0a1e5d53889c279673bb8884a7fefc",
            onSubmit: e => {
              e.preventDefault(), n({
                navOpen: !1
              }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, _.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, _.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        ug = {
          skeleton: "rockstargames-modules-core-headerc073586d2c66f4d535b12cc27e125167",
          pulse: "rockstargames-modules-core-headerdd37397ba93ec7045dbf175d34f4d0f3",
          gen9Hero: "rockstargames-modules-core-headerf0603e7614d1053bfa5d7691ad6926b6"
        },
        vg = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, _.jsx)("div", {
            className: [ug.skeleton, ug[a]].join(" ")
          }) : null
        };
      var pg = t(7790);
      Wd((e => {
        let {
          components: a = {},
          id: t = null,
          ids: s = null,
          skeleton: n
        } = e;
        const r = (e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: n = !1
          } = e;
          const r = t ?? [a],
            {
              data: i
            } = (0, b.aM)(pg.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: n
              },
              setTitleDataPath: s,
              skip: !r.length
            });
          return i?.tinaModulesInfo ?? null
        })({
          id: t,
          ids: s
        });
        if (!r) return (0, _.jsx)(vg, {
          skeleton: n
        });
        const i = r?.[0]?.tina;
        return i ? (0, _.jsx)(_.Fragment, {
          children: r.map(((e, t) => {
            let {
              tina: s
            } = e;
            return (0, _.jsx)(jd, {
              components: a,
              tina: s,
              componentProps: {
                tinaModulesInfo: r
              }
            }, t)
          }))
        }) : null
      })), t(3005);
      const hg = {
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
        fg = ((0, k.rE)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: n
          } = (0, k.Vg)(), [r, i] = (0, l.useState)(0), [o, c] = (0, l.useState)(0), d = (0, l.useRef)(null), g = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            if (!d.current || g.current) return;
            const e = new(ud())(d.current);
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
                const e = r + 1 >= s.length - 1 ? s.length - 1 : r + 1;
                i(e), c(0)
              },
              l = e => {
                c(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !g.current?.classList.contains(hg.dragging) || a() && n(!1)
              },
              _ = () => {
                a() && n(!0), c(0)
              },
              m = e => {
                "press" === e.type && d.current?.classList.add(`${hg.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${hg.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && n(!0), d.current && d.current.classList.remove(`${hg.disableClick}`)
              },
              v = () => {
                a() && n(!0)
              };
            return g.current.addEventListener("transitionend", v), e.on("swiperight", t), e.on("swipeleft", o), e.on("pan", l), e.on("panend", _), e.on("press tap", m), e.on("pressup", u), () => {
              e.off("swiperight", t), e.off("swipeleft", o), e.off("pan", l), e.off("panend", _), e.off("press tap", m), e.off("pressup", u), g.current && g.current.removeEventListener("transitionend", v), c(0)
            }
          }), [d.current, r]), (0, _.jsxs)("section", {
            className: hg.carousel,
            children: [(0, _.jsx)("div", {
              className: hg.track,
              ref: d,
              children: (0, _.jsx)("div", {
                className: `${hg.items} ${0!==o?hg.dragging:""}`,
                ref: g,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${o}px))`
                },
                children: s.map(((e, a) => (0, _.jsx)(gd, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === a ? hg.active : "",
                  role: "link",
                  title: e.title,
                  children: (0, _.jsx)(yg, {
                    video: e,
                    active: r === a
                  })
                }, e.id)))
              })
            }), (0, _.jsxs)("footer", {
              children: [(0, _.jsx)("div", {
                className: hg.text,
                children: s.map(((e, s) => (0, _.jsx)(gd, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  children: (0, _.jsxs)("div", {
                    className: [hg.info, s === r ? hg.active : ""].join(" "),
                    children: [(0, _.jsxs)("div", {
                      className: hg.title,
                      children: [(0, _.jsx)("div", {
                        className: hg.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, _.jsx)("h2", {
                        className: hg.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, _.jsx)(pd, {
                      className: hg.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, _.jsx)("div", {
                className: hg.dots,
                children: s.map(((e, a) => (0, _.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => i(a),
                  className: r === a ? hg.active : "",
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
        bg = ((0, k.zv)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: n
          } = e;
          const r = void 0 !== t ? "games" : "videos",
            i = "videos" === r ? a : t.results,
            o = (0, l.useRef)(null),
            [c, d] = (0, l.useState)(0),
            [g, m] = (0, l.useState)(0),
            u = e => {
              const a = Math.ceil(i.length / c);
              e < 0 ? e = 0 : e >= a - 1 && (e = a - 1), m(e)
            },
            [v, p] = (0, l.useState)(0);
          let h;
          return (0, l.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches,
                a = e("768px") ? 1 : e("990px") || e("1440px") ? 2 : e("1920px") ? 3 : 4;
              d(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, l.useEffect)((() => {
            if (o.current) {
              const e = new(ud())(o.current),
                a = () => {
                  u(g - 1), p(0)
                },
                t = () => {
                  u(g + 1), p(0)
                },
                s = e => {
                  p(e.isFinal ? 0 : e.deltaX)
                },
                n = () => {
                  p(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", s), e.on("panend", n), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", s), e.off("panend", n), p(0)
              }
            }
          }), [o.current, g]), h = "games" === r ? (0, _.jsx)(_.Fragment, {
            children: t.results.map((e => (0, _.jsx)(Ud, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, _.jsx)(_.Fragment, {
            children: a.map((e => (0, _.jsx)(wg, {
              video: e,
              gameTitleNecessary: n
            }, e.id)))
          }), (0, _.jsxs)("section", {
            className: fg.videoList,
            children: [(0, _.jsxs)("h3", {
              className: fg.sectionHeader,
              children: [s, (0, _.jsxs)("div", {
                className: fg.arrowNav,
                children: [(0, _.jsx)("div", {
                  className: [fg.arrow, fg.previous, 0 === g ? fg.disabled : ""].join(" "),
                  onClick: () => u(g - 1)
                }), (0, _.jsx)("div", {
                  className: [fg.arrow, fg.next, g === Math.ceil(i.length / c) - 1 ? fg.disabled : ""].join(" "),
                  onClick: () => u(g + 1)
                })]
              })]
            }), (0, _.jsx)("div", {
              className: fg.items,
              children: (0, _.jsx)("div", {
                className: fg.trackWrapper,
                children: (0, _.jsx)("div", {
                  className: [fg.track, 0 !== v ? fg.dragging : ""].join(" "),
                  ref: o,
                  style: {
                    transform: `translateX(calc(-${100*g}% + ${v}px - (var(--standard-grid-gap) * ${g}))`,
                    gridAutoColumns: `calc(100 / ${c} * 1% - calc(var(--standard-grid-gap) * (${c-1}/${c}))`
                  },
                  children: h
                })
              })
            })]
          })
        })), "rockstargames-modules-core-headerdde12a3eeb657b92d78550534aad83a4"),
        kg = ((0, k.zv)((e => {
          let {
            error: a,
            t,
            domain: s = ""
          } = e;
          console.error({
            error: a
          });
          let n = a?.message ?? t("error-404-new");
          n = t("error-404-new");
          const r = a?.code ?? 398;
          return (0, _.jsxs)("div", {
            className: bg,
            children: [(0, _.jsx)("h3", {
              children: `${n} (${r})`
            }), (0, _.jsx)(gd, {
              to: "/",
              children: t("Home")
            }), "clr" !== s && (0, _.jsx)(mg, {})]
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
        yg = e => {
          let {
            video: a
          } = e;
          const [t] = (0, k.TZ)(a.screencap);
          return (0, _.jsx)("div", {
            className: [kg.screencap, t ? kg.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${a.screencap}) center/cover`
            }
          })
        },
        wg = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s
          } = e;
          const n = `/videos/${s.id}`,
            r = {
              className: kg.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            i = (0, _.jsxs)("div", {
              className: kg.card,
              children: [(0, _.jsx)(yg, {
                video: s
              }), (0, _.jsxs)("div", {
                className: kg.info,
                children: [a ? (0, _.jsx)("div", {
                  className: kg.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, _.jsx)("h5", {
                  className: kg.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, _.jsx)("a", {
            href: n,
            target: "_blank",
            ...r,
            children: i
          }) : (0, _.jsx)(gd, {
            to: n,
            ...r,
            children: i
          })
        };
      t(400);
      const xg = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Mg = (e, a, t, s) => ({
          text: e.formatMessage(a.sc_link_help),
          target: "_self",
          ga: {
            ...xg,
            text: a.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(a.sc_link_support),
            href: "https://support.rockstargames.com/",
            target: "_self",
            ga: {
              ...xg,
              text: a.sc_link_support.defaultMessage,
              link_url: "https://support.rockstargames.com/"
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(a.sc_link_legal),
            href: `https://${t.sites.www}.rockstargames.com/legal`,
            target: "_self",
            ga: {
              ...xg,
              text: a.sc_link_legal.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/legal`
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(a.sc_link_privacy_policy),
            href: `https://${t.sites.www}.rockstargames.com/privacy`,
            target: "_self",
            ga: {
              ...xg,
              text: a.sc_link_privacy_policy.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/privacy`
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(a.sc_link_cookies_policy),
            href: `https://${t.sites.www}.rockstargames.com/cookies`,
            target: "_self",
            ga: {
              ...xg,
              text: a.sc_link_cookies_policy.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/cookies`
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(a.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), s?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...xg,
              text: a.sc_link_cookies_settings.defaultMessage,
              link_url: ""
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(a.sc_link_do_not_sell_my_information),
            href: `https://${t.sites.www}.rockstargames.com/ccpa`,
            target: "_self",
            ga: {
              ...xg,
              text: a.sc_link_do_not_sell_my_information.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/ccpa`
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Sg = e => {
          let {
            text: a,
            target: t,
            href: s,
            ga: n,
            dataTestId: r,
            isSubLink: i,
            hasNotifications: o = !1,
            onClickCallback: l = (() => {}),
            tabIndex: c
          } = e;
          const {
            track: d
          } = te();
          return (0, _.jsxs)("a", {
            className: i ? "rockstargames-modules-core-headere5f5a8b5af593a4ff89a050bee83855c" : "rockstargames-modules-core-headerc4b83eee740b9dae3772319e80be3951",
            "data-testid": r || "menuLink",
            title: a,
            href: s,
            target: t,
            rel: "noreferrer",
            tabIndex: c,
            onClick: e => {
              d(n), l(e)
            },
            children: [a, o && (0, _.jsx)("span", {
              className: "rockstargames-modules-core-headeraebdc1434e6a1921dee96f175cd36466"
            })]
          })
        },
        Tg = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: n,
            ga: r,
            hasNotifications: i = !1,
            dataTestId: o,
            children: c = [],
            activeSubNavId: d,
            setActiveSubNavId: g,
            setSubNavExtraHeight: m,
            onClickCallback: u = (() => {})
          } = e;
          const {
            windowWidth: v,
            windowHeight: p
          } = (0, k.w_)(), {
            track: h
          } = te(), {
            navOpen: f
          } = R(), b = (0, l.useRef)(null), [y, w] = (0, l.useState)(0), [x, M] = (0, l.useState)(0);
          (0, l.useEffect)((() => {
            d !== a && !1 === S && T(!0), d === a && T(!1)
          }), [d]), (0, l.useEffect)((() => {
            if (!b.current) return;
            w(b?.current?.scrollHeight);
            const e = window.getComputedStyle(b.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), M(a)
            }
          }), [b, v, p]);
          const [S, T] = (0, l.useState)(!0);
          return c.length > 0 ? (0, _.jsxs)("button", {
            className: "rockstargames-modules-core-headereffc0bdd4a4f25400c9c782c4b38ca2d",
            type: "button",
            "data-testid": o || "menuButton",
            title: t,
            tabIndex: f ? 0 : -1,
            "data-children-hidden": S,
            onClick: e => {
              e.stopPropagation(), h(r), d === a ? (g(-1), m(0)) : (g(a), m(y + x))
            },
            children: [(0, _.jsx)("span", {
              className: "rockstargames-modules-core-headerb19e4f2b353b2a7b3288352e38631abf",
              children: t
            }), (0, _.jsx)("span", {
              className: "rockstargames-modules-core-headerbaed71b46816995fc60770c8659fddc2"
            }), (0, _.jsx)("nav", {
              className: "rockstargames-modules-core-headerae2fdcd90abfd2f74b6dc6785e0e04eb",
              ref: b,
              "aria-hidden": S,
              style: {
                height: S ? null : `${y}px`
              },
              children: c.map((e => (0, _.jsx)(Sg, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !f ? -1 : 0
              })))
            })]
          }, t) : (0, _.jsx)(Sg, {
            text: t,
            target: s,
            href: n,
            ga: r,
            hasNotifications: i,
            dataTestId: o,
            isSubLink: !1,
            onClickCallback: u,
            tabIndex: f ? 0 : -1
          })
        },
        Cg = e => {
          let {
            sc: a
          } = e;
          const t = (0, o.Z)(),
            {
              languageSelectorOpened: s,
              setLanguageSelectorOpened: n,
              activeSubNavId: r,
              setActiveSubNavId: i,
              subNavExtraHeight: c,
              setSubNavExtraHeight: d
            } = dd(),
            {
              setSelectedCharacterTuple: g,
              navOpen: m
            } = R(),
            u = (0, k.bU)(),
            p = (0, k.rz)(u),
            [h, f] = (0, l.useState)(""),
            b = (0, K.useLocation)(),
            y = `${a.login}?returnUrl=${h}&lang=${p}`,
            w = `${a.signup}&returnUrl=${h}&lang=${p}`,
            x = (0, l.useMemo)((() => (0, v.Z)()), []),
            M = (0, l.useMemo)((() => {
              const e = ((e, a, t, s, n, r) => [{
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
                href: s,
                ga: {
                  event: "account_menu_click",
                  text: e.defaultMessage,
                  link_url: s,
                  element_placement: "Account Menu"
                },
                dataTestId: "signUpLink"
              }, Mg(a, e, n, r)])(Y_, t, y, w, x, window?.OneTrust);
              return e
            }), [Y_, t, y, w, x]);
          return (0, l.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            f(e)
          }), [b]), (0, l.useEffect)((() => {
            g(!1)
          }), []), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("nav", {
              className: "rockstargames-modules-core-headerd8b1c62c15cdaf546241e4b13b77a8e3",
              children: (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headera6cf01f6b0073d44ace2657d11e30b92",
                "data-logged-in": "false",
                style: {
                  "--scNavWrap-max-height": `${c}px`
                },
                children: M.map((e => (0, l.createElement)(Tg, {
                  ...e,
                  activeSubNavId: r,
                  setActiveSubNavId: i,
                  setSubNavExtraHeight: d,
                  key: e.text
                })))
              })
            }), (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerc38508c13f75b99affdabef433c631ce",
              style: {
                visibility: m ? null : "hidden"
              },
              children: (0, _.jsx)(Qd, {
                theme: "sc-menu",
                languageSelectorOpened: s,
                setLanguageSelectorOpened: e => {
                  i(-1), n(e)
                },
                defaultMessage: Y_.language_selector_default
              })
            })]
          })
        },
        Ng = e => t(e < 100 ? 4655 : e > 99 && e < 500 ? 98 : e > 499 && e < 750 ? 3662 : 9533),
        jg = "rockstargames-modules-core-headerc335fbb3ea8b49739cc397a7d53b5f8a",
        zg = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: n
          } = e;
          const {
            currentCharId: r,
            setCurrentCharId: i
          } = R(), {
            track: c
          } = te(), d = (0, l.createRef)(), {
            platform: g,
            platformUsername: m,
            mugshotUrl: u,
            stats: v
          } = a, [p, h] = (0, l.useState)(u), [f] = (0, l.useState)(a.index), b = Z_(g, "large"), k = r === a.index, y = (0, o.Z)(), w = () => {
            h(t(2490))
          };
          return (0, l.useEffect)((() => {
            d.current && s && s(d?.current?.offsetWidth)
          }), [d]), (0, _.jsxs)("button", {
            className: "rockstargames-modules-core-headera3f6abb9575af1327eb619be9d6b31e6",
            type: "button",
            "aria-hidden": k,
            onClick: e => {
              e.stopPropagation(), i(f);
              let a = "";
              "pc" === g ? a = "PC" : "ps4" === g ? a = "PS4" : "ps5" === g ? a = "PS5" : "xboxone" === g ? a = "Xbox One" : "xboxsx" === g && (a = "Xbox Series X|S"), c({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: f
              })
            },
            ref: d,
            tabIndex: n,
            children: [(0, _.jsxs)("div", {
              className: "rockstargames-modules-core-headercd6320c38823c444a47fd6c09d6f298c",
              "data-size": "small",
              children: [(0, _.jsx)("img", {
                src: p,
                alt: m,
                onError: w
              }), (0, _.jsx)("img", {
                src: p,
                alt: y.formatMessage(Y_.profile_selector_mugshot, m),
                onError: w
              })]
            }), (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-headerdd2a84ecdd78494709abe345815a932d",
              children: [(0, _.jsxs)("div", {
                className: "rockstargames-modules-core-headerc849eadf4ed0a2e71da76452dc9370f8",
                children: [(0, _.jsx)("img", {
                  src: b.src,
                  alt: b.alt
                }), (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-headerc0b83e9a208cf0867e846afc53997361",
                  "data-size": "small",
                  children: m
                })]
              }), (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerefbaf5497013bd0f2beeb5f6427735ae",
                children: (0, _.jsxs)("div", {
                  className: "rockstargames-modules-core-headerba6ead477fdd2f3147b4360899c2d68e",
                  children: [(0, _.jsx)("img", {
                    className: jg,
                    src: Ng(v.overview.rank.value),
                    alt: "RP Category"
                  }), (0, _.jsx)("img", {
                    className: jg,
                    src: Ng(v.overview.rank.value),
                    alt: y.formatMessage(Y_.profile_selector_rp_icon)
                  }), (0, _.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Ag = {
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
        Eg = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: n
          } = Z(), {
            track: r
          } = te(), i = (0, o.Z)(), [c, d] = (0, l.useState)([]), [g, m] = (0, l.useState)(null), [u, v] = (0, l.useState)(null), [p, h] = (0, l.useState)(!1), [f, b] = (0, l.useState)(-1), [k, y] = (0, l.useState)([]), [w, x] = (0, l.useState)(0), M = t(2490), [S, T] = (0, l.useState)("0"), [C, N] = (0, l.useState)("0"), j = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          });
          let z = () => {
            E((0, _.jsx)("img", {
              src: M,
              alt: n.nickname
            }))
          };
          z = () => {
            E((0, _.jsx)("img", {
              src: M,
              alt: i.formatMessage(Y_.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          };
          let [A, E] = (0, l.useState)((0, _.jsx)("img", {
            className: Ag.scAvatarImg,
            src: a.mugshotUrl,
            alt: n.nickname,
            onError: z
          }));
          [A, E] = (0, l.useState)((0, _.jsx)("img", {
            className: Ag.scAvatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(Y_.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: z
          })), (0, l.useEffect)((() => {
            d(n.crews ?? [])
          }), [n]), (0, l.useEffect)((() => {
            E((0, _.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: z
            })), T(j(a.stats.overview.bank.value)), N(j(a.stats.overview.cash.value)), x(a.stats.overview.rank.value)
          }), [a, n]), (0, l.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), v(e.crewColour), b(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [c]), (0, l.useEffect)((() => {
            const e = [];
            if (!p && f > -1)
              for (let a = 5; a > f; a -= 1) e.push((0, _.jsx)("div", {
                className: Ag.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            y(e)
          }), [f, p, u]);
          const I = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, _.jsxs)("div", {
            className: Ag.scProfileDetails,
            onClick: I,
            onKeyUp: I,
            role: "button",
            tabIndex: -1,
            children: [(0, _.jsxs)("div", {
              className: Ag.scAvatar,
              children: [A, (0, _.jsx)("div", {
                className: Ag.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, _.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, _.jsxs)("div", {
              className: Ag.scProfileStats,
              children: [(0, _.jsx)("div", {
                className: Ag.scNames,
                children: (0, _.jsxs)("div", {
                  className: Ag.scTagsNames,
                  children: [(0, _.jsx)("span", {
                    className: Ag.scUserName,
                    children: a.platformUsername
                  }), g && (0, _.jsxs)("span", {
                    className: Ag.scCrewName,
                    "data-arrow-tag": p,
                    children: [g, !p && (0, _.jsx)("div", {
                      className: Ag.scCrewRankBar,
                      children: k
                    })]
                  })]
                })
              }), (0, _.jsxs)("div", {
                className: Ag.scProgress,
                children: [(0, _.jsxs)("div", {
                  className: Ag.scRpLevel,
                  children: [(0, _.jsx)("img", {
                    className: Ag.scRpIcon,
                    src: Ng(w),
                    alt: i.formatMessage(Y_.profile_selector_rp_icon)
                  }), (0, _.jsx)("img", {
                    className: Ag.scRpIcon,
                    src: Ng(w),
                    alt: "RP Level Icon"
                  }), (0, _.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, _.jsxs)("div", {
                  className: Ag.scMoney,
                  children: [(0, _.jsxs)("span", {
                    className: Ag.scCash,
                    children: ["$", C]
                  }), (0, _.jsxs)("span", {
                    className: Ag.scBank,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        Ig = (e, a) => {
          const [t, s] = (0, l.useState)(0);
          return (0, l.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, n = t.getBoundingClientRect(), {
                width: r
              } = n;
              let i = r;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                i += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(i)
            }
          }), [e]), t
        },
        Pg = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: n = null,
            slideClickCallback: r = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: c = !1
          } = e;
          const d = (0, l.createRef)(),
            g = Ig(d, !1),
            [m, u] = (0, l.useState)(!1),
            [v, p] = (0, l.useState)(0),
            [h, f] = (0, l.useState)(0),
            [b, k] = (0, l.useState)([s]),
            [y, w] = (0, l.useState)(b[0]),
            [x, M] = (0, l.useState)(252),
            [S, T] = (0, l.useState)(0),
            [C, N] = (0, l.useState)([]),
            [j, z] = (0, l.useState)([]),
            [A, E] = (0, l.useState)(!1),
            I = e => {
              if (!0 === m || !0 === c) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              f(a)
            },
            P = e => {
              if (!0 === m || 0 === h || !0 === c) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > h ? 1 : -1,
                r = Math.abs(h - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === m) return;
                u(!0);
                const e = v - 1 < 0 ? 0 : v - 1;
                p(e), w(b[e]), n && n(e)
              })() : (() => {
                if (!0 === m) return;
                u(!0);
                let e = v + 1 >= b.length ? b.length - 1 : v + 1;
                e < 0 && (e = 0), p(e), w(b[e]), n && n(e)
              })(), f(0)) : w(b[v] + r * s)
            },
            L = () => {
              !0 !== m && !0 !== c && (u(!0), !0 !== m && (w(b[v]), f(0)))
            };
          return (0, l.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, l.createRef)())
            })), N(e)
          }), [i]), (0, l.useEffect)((() => {
            if (C.length < 1) return;
            M(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            T(t + a)
          }), [C]), (0, l.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              u(!1)
            }), t)
          }), [m, t]), (0, l.useEffect)((() => {
            k(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * g - .5 * x - 2 * s + S : (0 === e && (a = s - e * x), e === t - 1 && t > 1 && (a = t * x * -1 + (g - (s - S))), e > 0 && e < t - 1 && (a = e * x * -1 + (.5 * g - .5 * x + .5 * S)), a)
            })(a)))), 1 === i.length ? E(!0) : E(!1)
          }), [d.current, i, g]), (0, l.useEffect)((() => {
            const e = (a = v, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            z(e)
          }), [i, v]), (0, l.useEffect)((() => {
            !0 !== o && !0 !== c || w(b[0])
          }), [c, o, b]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerc24cdb3b6cfd7aab91061f873ec6387f",
              ref: d,
              onTouchStart: I,
              onTouchMove: P,
              onTouchEnd: L,
              onMouseDown: I,
              onMouseMove: P,
              onMouseUp: L,
              onClick: () => {
                null !== r && r(v)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headere88bab6974a3bc58871f01a4176d19cc",
                "data-interaction-blocked": m,
                "data-single-item": A,
                style: {
                  transform: A ? null : `translateX(${y}px)`
                },
                children: i.map(((e, a) => (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-headerf6d2431960fd2437473fe390a1e22d0a",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), j.length > 1 && !1 === o && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerf4140c4d02511e4a8bc533409e13cd87",
              children: j.map((e => (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerbaf9524c4580ae16f02f39fafbc4bf69",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Lg = {
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
        Og = (0, k.zv)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: n,
            menuPadding: r,
            longCharList: c,
            setLongCharList: d,
            isMobileMode: g,
            setIsMobileMode: m
          } = e;
          const {
            windowWidth: u,
            windowHeight: p
          } = (0, k.w_)(), h = (0, o.Z)(), {
            languageSelectorOpened: f,
            setLanguageSelectorOpened: y,
            activeSubNavId: w,
            setActiveSubNavId: x,
            subNavExtraHeight: M,
            setSubNavExtraHeight: S,
            scNavOpened: T,
            setScNavOpened: C
          } = dd(), [N, j] = (0, l.useState)(""), z = (0, K.useLocation)(), {
            lsSettings: A
          } = (0, k.TG)(), {
            track: E
          } = te(), I = (0, b.cC)(), {
            data: P,
            loggedIn: L
          } = Z(), {
            charactersNeeded: O,
            currentCharId: D,
            hasNotifications: V,
            navOpen: B,
            setCurrentCharId: G,
            setHasNotifications: F,
            setSelectedCharacterTuple: q,
            setUserData: $
          } = R(), [U, H] = (0, l.useState)(null), [X, W] = (0, l.useState)(null), [Y, J] = (0, l.useState)(!1), [Q, ee] = (0, l.useState)(!1), [ae, se] = (0, l.useState)(0), ne = (0, l.createRef)(), re = Ig(ne, !1), ie = (0, l.createRef)(), [oe, le] = (0, l.useState)(0), [ce, _e] = (0, l.useState)([]), [de, ge] = (0, l.useState)(244);
          let me = !1;
          me = !0;
          const ue = (0, l.useMemo)((() => (0, v.Z)()), []),
            ve = (0, l.useMemo)((() => {
              const e = ((e, a, t, s, n, r, i, o) => [{
                text: a.formatMessage(e.sc_link_activity_feed),
                href: `https://${t.host}.rockstargames.com/`,
                target: "_self",
                ga: {
                  ...xg,
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
                  href: s.profile_link,
                  target: "_self",
                  ga: {
                    ...xg,
                    text: e.sc_link_view_my_profile.defaultMessage,
                    link_url: s.profile_link
                  },
                  dataTestId: "viewMyProfileLink"
                }, {
                  text: a.formatMessage(e.sc_link_messages),
                  href: `https://${t.host}.rockstargames.com/message`,
                  target: "_self",
                  ga: {
                    ...xg,
                    text: e.sc_link_messages.defaultMessage,
                    link_url: `https://${t.host}.rockstargames.com/message`
                  },
                  dataTestId: "messagesLink"
                }, {
                  text: a.formatMessage(e.sc_link_game_activation),
                  href: `https://${t.host}.rockstargames.com/activate`,
                  target: "_self",
                  ga: {
                    ...xg,
                    text: e.sc_link_game_activation.defaultMessage,
                    link_url: `https://${t.host}.rockstargames.com/activate`
                  },
                  dataTestId: "gameActivationLink"
                }]
              }, {
                text: a.formatMessage(e.sc_link_notifications),
                href: `https://${t.host}.rockstargames.com/notifications`,
                target: "_self",
                hasNotifications: n,
                ga: {
                  ...xg,
                  text: e.sc_link_notifications.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/notifications`
                },
                dataTestId: "notificationsLink"
              }, {
                text: a.formatMessage(e.sc_link_crews),
                href: `https://${t.host}.rockstargames.com/member/${s.nickname}/crews`,
                target: "_self",
                ga: {
                  ...xg,
                  text: e.sc_link_crews.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/member/${s.nickname}/crews`
                },
                dataTestId: "crewsLink"
              }, {
                text: a.formatMessage(e.sc_link_friends),
                target: "_self",
                dataTestId: "friendsButton",
                children: [{
                  text: a.formatMessage(e.sc_link_my_friends),
                  href: `https://${t.host}.rockstargames.com/member/${s.nickname}/friends`,
                  target: "_self",
                  ga: {
                    ...xg,
                    text: e.sc_link_my_friends.defaultMessage,
                    link_url: `https://${t.host}.rockstargames.com/member/${s.nickname}/friends`
                  },
                  dataTestId: "myFriendsLink"
                }, {
                  text: a.formatMessage(e.sc_link_import_friends),
                  href: `https://${t.host}.rockstargames.com/friends/import`,
                  target: "_self",
                  ga: {
                    ...xg,
                    text: e.sc_link_import_friends.defaultMessage,
                    link_url: `https://${t.host}.rockstargames.com/friends/import`
                  },
                  dataTestId: "importFriendsLink"
                }, {
                  text: a.formatMessage(e.sc_link_find_friends),
                  href: `https://${t.host}.rockstargames.com/members`,
                  target: "_self",
                  ga: {
                    ...xg,
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
                  ...xg,
                  text: e.sc_link_settings.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/settings`
                },
                dataTestId: "settingsLink"
              }, Mg(a, e, i, o), {
                text: a.formatMessage(e.sc_link_log_out),
                href: `${t.logout}?returnUrl=${r}`,
                target: "_self",
                ga: {
                  ...xg,
                  text: e.sc_link_log_out.defaultMessage,
                  link_url: `${t.logout}?returnUrl=${r}`
                },
                dataTestId: "logoutButton"
              }])(Y_, h, a, P, V, N, ue, window?.OneTrust);
              return e
            }), [Y_, h, a, P, V, N, ue]),
            pe = () => {
              ee(r + de * ae < re)
            },
            he = () => {
              if (ie.current) {
                const {
                  current: e
                } = ie, a = e?.scrollHeight;
                le(a)
              }
            };
          return (0, l.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ue.currentSite?.site === v.z.socialClub && (e = encodeURIComponent("/")), j(e)
          }), [z]), (0, l.useEffect)((() => {
            _e(P.characters[O] ?? [])
          }), [P, O]), (0, l.useEffect)((() => {
            P && $(P)
          }), [P]), (0, l.useEffect)((() => {
            const e = P?.characters.gtao;
            if (null !== L && !e.length) return void q(!1);
            if (null == D || !e.length) return;
            const a = e?.[D] ?? e?.[0] ?? null;
            q(!!a?.platform && [a.platform, a.characterSlot])
          }), [D, P, L]), (0, l.useEffect)((() => {
            (async () => {
              if (!P?.id) return;
              const e = await (0, k.ZF)("friends/getInvites", {
                pingBearer: I
              });
              if (e) {
                const {
                  rockstarAccountList: a
                } = e, {
                  count: t
                } = await (0, k.ZF)("notification/count", {
                  pingBearer: I
                });
                F(t > 0 || a.total > 0)
              }
            })()
          }), [P]), (0, l.useEffect)((() => {
            pe()
          }), [de]), (0, l.useEffect)((() => {
            s(!0), m(u < 768), m(u < 768 || p < 649)
          }), [u, p]), (0, l.useEffect)((() => {
            let e = ce.length - 1;
            e < 0 && (e = 0), se(e);
            const a = ce.length > 0 ? ce[D] ?? ce[0] : null;
            if (!a) return;
            const t = null !== a ? Z_(a.platform, "large") : null;
            W(t), H(a), ce.length > 1 ? J(!0) : J(!1), d(ce.length - 1 > 3)
          }), [D, ce]), (0, l.useEffect)((() => {
            pe()
          }), [ae, g, u, ce]), (0, l.useEffect)((() => {
            he(), setTimeout(he, 1e3)
          }), [u, p]), (0, l.useEffect)((() => {
            const e = A?.currentCharId ?? 0;
            e !== D && G(Math.max(0, Math.min(e, ce.length - 1)))
          }), [ce, A]), (0, _.jsxs)(_.Fragment, {
            children: [null !== U && "gtao" === O && (0, _.jsxs)("div", {
              className: Lg.scProfile,
              tabIndex: -1,
              "aria-label": h.formatMessage(Y_.profile_selector_profile_card),
              children: [(0, _.jsx)(Eg, {
                s: Lg,
                character: U,
                platformTag: X
              }), !0 === Y && (0, _.jsxs)("div", {
                className: Lg.scCharacterSelector,
                children: [(0, _.jsx)("button", {
                  className: Lg.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), E({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, _.jsx)("span", {
                    children: (0, _.jsx)(i.Z, {
                      ...Y_.profile_selector_switch_character
                    })
                  })
                }), !1 === g && (0, _.jsx)("div", {
                  className: Lg.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": t,
                  ref: n,
                  children: ce.map((e => (0, _.jsx)(zg, {
                    tabIndex: t ? -1 : 0,
                    characterData: e
                  }, e.mugshotUrl)))
                }), !0 === g && (0, _.jsx)("div", {
                  className: Lg.scCharacterList,
                  "data-single-item": 2 === ce.length,
                  "data-swiper-disabled": Q,
                  "aria-hidden": t,
                  ref: ne,
                  children: (0, _.jsx)(Pg, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      E({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: Q,
                    disableSwiper: Q,
                    children: ce.filter(((e, a) => a !== D)).map((e => (0, l.createElement)(zg, {
                      characterData: e,
                      setMobileCardWidth: ge,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, _.jsxs)("nav", {
              className: Lg.scNav,
              "aria-hidden": !B,
              children: [(0, _.jsx)("button", {
                className: Lg.scNavHeader,
                type: "button",
                "data-opened": T,
                "data-nav-opened": B,
                tabIndex: T ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), T || C(!0)
                },
                "data-testid": "playerButton",
                children: (0, _.jsx)("span", {
                  children: P.nickname
                })
              }), (0, _.jsx)("div", {
                className: Lg.scNavWrap,
                "data-opened": T,
                "data-logged-in": "true",
                ref: ie,
                "data-feat-g": !0,
                style: {
                  "--scNavWrap-max-height": `${oe+M}px`
                },
                children: ve.map(((e, a) => (0, l.createElement)(Tg, {
                  ...e,
                  id: a,
                  activeSubNavId: w,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: S,
                  key: e.text
                })))
              })]
            }), (0, _.jsx)("div", {
              className: Lg.scLanguageSelector,
              style: {
                visibility: B ? null : "hidden"
              },
              children: (0, _.jsx)(Qd, {
                theme: "sc-menu",
                languageSelectorOpened: f,
                setLanguageSelectorOpened: y,
                defaultMessage: Y_.language_selector_default
              })
            })]
          })
        })),
        Dg = {
          scNavWrapper: "rockstargames-modules-core-headere838e44838fa7da64c336b852ea24768",
          rpLevel: "rockstargames-modules-core-headerb7db666a33c3691e5a8abdfc26fada5f",
          rpIcon: "rockstargames-modules-core-headerab2979bf0b93aeaa2e599785a1769750",
          scMenu: "rockstargames-modules-core-headerf026f7ffa165071bbd97c66c863ebd5b",
          navOpen: "rockstargames-modules-core-headerdac3bc9aaa59d80e4378b25b8ee51471",
          dragHandle: "rockstargames-modules-core-headereaae66d2f36e13f46856d826fc41d5dc",
          dragHandleBtn: "rockstargames-modules-core-headerdb7e8039eb4bbe26b77f3b269ba8a692",
          scOverlay: "rockstargames-modules-core-headerb1e1c10079e10528c1bcb20fea525546"
        },
        Rg = () => {
          const {
            windowHeight: e
          } = (0, k.w_)();
          let a = !1;
          a = !0;
          const s = (0, o.Z)(),
            {
              languageSelectorOpened: n,
              setLanguageSelectorOpened: r,
              setActiveSubNavId: i,
              scNavOpened: c,
              setScNavOpened: d,
              charListHidden: g,
              setCharListHidden: m
            } = dd(),
            [u, v] = (0, l.useState)(!1),
            {
              setBodyIsScrollable: p
            } = (0, k.Vg)(),
            {
              navHidden: h = !1
            } = (0, b.eJ)(),
            {
              loggedIn: f
            } = Z(),
            {
              currentCharId: y,
              navOpen: w,
              setNavOpen: x,
              userData: M
            } = R(),
            {
              track: S
            } = te(),
            [T, C] = (0, l.useState)(!1),
            N = (0, b.lY)(F),
            j = (0, l.useRef)(),
            [z, A] = (0, l.useState)(0),
            E = (0, l.createRef)(),
            [I, P] = (0, l.useState)(!1),
            [L, O] = (0, l.useState)(0),
            [D, V] = (0, l.useState)(!1),
            {
              mutateLSSettings: B,
              lsSettings: G
            } = (0, k.TG)(),
            q = (0, l.useCallback)((e => {
              m(e), j.current && !0 === e && (j.current.scrollTop = 0)
            }), [j]);
          return (0, l.useEffect)((() => {
            null !== y && G.currentCharId !== y && B({
              key: "currentCharId",
              value: y
            }), !1 === f ? B({
              key: "currentCharId",
              value: null
            }) : f && M && S({
              event: "account_synced"
            })
          }), [y, f]), (0, l.useEffect)((() => {
            j.current && (!1 === g && !1 === T && (j.current.style.height = `${j.current.scrollHeight}px`), !0 === g && (j.current.style.height = null))
          }), [g, j, T]), (0, l.useEffect)((() => {
            const e = () => {
                x(!1), q(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, l.useEffect)((() => {
            x(!1), q(!0)
          }), [h]), (0, l.useEffect)((() => {
            if (E.current) {
              const {
                current: e
              } = E, a = window.getComputedStyle(e);
              A(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [E]), (0, l.useEffect)((() => {
            p(!I || !w)
          }), [w, I]), (0, l.useEffect)((() => {
            V(window.navigator.userAgent.includes("Mac"))
          }), []), (0, l.useEffect)((() => {
            E.current && v(E?.current?.scrollHeight >= e)
          }), [E, e]), (0, l.useEffect)((() => {
            w || (i(-1), r(!1))
          }), [w]), (0, l.useEffect)((() => {
            n && (g || q(!0), c && (d(!1), i(-1)))
          }), [n]), (0, l.useEffect)((() => {
            c && (n && r(!1), g || q(!0))
          }), [c]), null === f ? null : (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("div", {
              className: [Dg.scMenu, w ? Dg.navOpen : ""].join(" "),
              "data-logged-in": f,
              "data-mac-browser": D,
              "data-scroll-mode": u,
              ref: E,
              "aria-hidden": !w,
              children: [(0, _.jsx)("button", {
                className: Dg.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  O(a)
                },
                onTouchMove: e => {
                  if (0 === L) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(L - a) > 1 && (O(0), x(!1))
                },
                children: (0, _.jsx)("img", {
                  className: Dg.dragHandle,
                  src: t(9963),
                  alt: s.formatMessage(Y_.sc_menu_drag_handle)
                })
              }), f ? (0, _.jsx)(Og, {
                sc: N,
                charListHidden: g,
                hideCharacterList: q,
                refCharacterListDesktop: j,
                menuPadding: z,
                longCharList: T,
                setLongCharList: C,
                isMobileMode: I,
                setIsMobileMode: P
              }) : (0, _.jsx)(Cg, {
                sc: N,
                navOpen: w
              })]
            }), (0, _.jsx)("div", {
              className: [Dg.scOverlay, w ? Dg.navOpen : ""].join(" "),
              "data-logged-in": f
            })]
          })
        },
        Vg = (e, a, t, s) => ({
          event: e || "nav_click",
          link_url: a,
          text: t,
          element_placement: `Global Nav > ${s}`
        }),
        Bg = "https",
        Gg = "rockstargames.com",
        Fg = () => {
          const e = Yc(),
            a = (() => {
              const e = (0, l.useContext)(Xc);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            t = Zc();
          return s => {
            const n = ((e, a) => {
              const {
                sites: t,
                currentSite: s
              } = a;
              return t[e.domain] ? new URL(`${Bg}://${t[e.domain]}.${Gg}`) : 0 === e.domain.indexOf("http") ? new URL(e.domain) : new URL(`${Bg}://${t[s?.subDomain||t.www]}.${Gg}`)
            })(s, e);
            if (!s.path) return new URL(n);
            const r = [
                ["username", t.nickname]
              ],
              i = ((e, a) => a.reduce(((e, a) => {
                let [t, s] = a;
                return e.replaceAll(`{${t}}`, s)
              }), e))(s.path, r),
              o = "www" === s.domain && "www" !== e.currentSite.site ? ((e, a) => {
                if (!a || a.iso === u.iso) return e;
                const t = a.subdomaincom;
                return "/" === e[0] ? t + e : `${t}/${e}`
              })(i, a) : i;
            return new URL(o, n)
          }
        },
        qg = "nav-external",
        $g = "nav-dropdown",
        Ug = "games-menu",
        Hg = e => {
          let {
            children: a,
            location: t,
            className: s,
            isLegacy: n,
            label: r,
            type: i,
            target: c,
            gaEvent: d,
            gaText: g,
            gaBreadCrumb: m,
            dataTestId: u,
            onNavigate: v,
            ...p
          } = e;
          const h = (0, o.Z)(),
            {
              currentSite: f
            } = Yc(),
            {
              track: b
            } = te(),
            k = Fg(),
            y = (0, l.useMemo)((() => {
              const e = {};
              return "_blank" === c && (e["aria-label"] = h.formatMessage(Uc.nav_opens_in_new_window, {
                text: r
              }), e.rel = "noopener"), e
            }), [r, c]);
          if (!t) return null;
          const w = k(t),
            x = i === qg,
            M = x || f && f.site !== t.domain ? w.href : w.pathname + w.search + w.hash,
            S = Boolean(x || n || document.documentElement.classList.contains("legacyPage"));
          return (0, _.jsx)(K.Link, {
            className: s,
            target: c,
            to: M,
            onClick: () => (b(Vg(d, w.toString(), g, m)), void v?.()),
            reloadDocument: S,
            "data-testid": u,
            ...p,
            ...y,
            children: a
          })
        },
        Xg = {
          callToAction: "rockstargames-modules-core-headerc82c6509b58380dd464812d2c26863ba",
          highlight: "rockstargames-modules-core-headerf530a8cc3c7d4c9e1f119a6a76ebb853"
        },
        Wg = e => {
          let {
            children: a,
            dataTestId: t,
            location: s,
            variant: n,
            gaEvent: r,
            gaText: i,
            target: o,
            onNavigate: l
          } = e;
          return (0, _.jsx)("div", {
            className: Xg.callToActionContainer,
            children: (0, _.jsx)(Hg, {
              className: [Xg.callToAction, n ? Xg[n] : ""].join(" "),
              dataTestId: t,
              location: s,
              gaEvent: r,
              gaText: i,
              gaBreadCrumb: i,
              onNavigate: l,
              target: o,
              children: a
            })
          })
        },
        Yg = {
          targets: [{
            intlMessage: Uc.search_target_games,
            tab: "games",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=games"
            }
          }, {
            intlMessage: Uc.search_target_posts,
            tab: "posts",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=posts"
            }
          }, {
            intlMessage: Uc.search_target_videos,
            tab: "videos",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=videos"
            }
          }, {
            intlMessage: Uc.search_target_community,
            tab: "socialClub",
            type: "nav-dropdown",
            targets: [{
              intlMessage: Uc.search_target_users,
              type: "",
              location: {
                domain: "socialClub",
                path: "/members/{query}"
              }
            }, {
              intlMessage: Uc.search_target_crews,
              type: "",
              location: {
                domain: "socialClub",
                path: "/crews/{query}"
              }
            }, {
              intlMessage: Uc.search_target_jobs,
              type: "",
              location: {
                domain: "socialClub",
                path: "/jobs/{query}"
              }
            }, {
              intlMessage: Uc.search_target_user_photos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/photos/{query}"
              }
            }, {
              intlMessage: Uc.search_target_user_videos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/videos/{query}"
              }
            }]
          }]
        };
      var Zg = t(2430),
        Jg = t(6567);
      const Kg = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        Qg = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        em = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        am = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        tm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        sm = {
          pillButton: "rockstargames-modules-core-headerff69ac71bd625f2fffaa47c831767ea5",
          selected: "rockstargames-modules-core-headera0399789b5f8119314e2ee494274ef8a"
        },
        nm = e => {
          let {
            children: a,
            selected: t,
            ...s
          } = e;
          return (0, _.jsx)("button", {
            type: "button",
            className: [sm.pillButton, t ? sm.selected : ""].join(" "),
            ...s,
            children: a
          })
        };
      var rm = t(9113);
      const im = {
          subMenu: "rockstargames-modules-core-headere93b49b419838ee4e2be9f55b68de66d",
          fadeIn: "rockstargames-modules-core-headerae33d9922a0df7157a8ae8af16f46854"
        },
        om = {
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
        lm = e => {
          let {
            openerRef: a,
            isOpen: t,
            isMobile: s,
            children: n
          } = e;
          const [r, i] = (0, l.useState)(null), {
            styles: o,
            attributes: c,
            forceUpdate: d
          } = (0, rm.D)(a, r, {
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
                altAxis: !s
              }
            }]
          });
          return (0, l.useEffect)((() => {
            d && d()
          }), [a, t, s]), (0, _.jsx)(Jg.E.div, {
            initial: "exit",
            animate: t ? "enter" : "exit",
            transition: {
              ease: "easeInOut",
              duration: .3
            },
            variants: om,
            className: [im.subMenu].join(" "),
            style: {
              ...o.popper
            },
            ref: i,
            ...c.popper,
            children: n
          })
        },
        cm = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, _.jsx)("button", {
            type: "button",
            className: "rockstargames-modules-core-headera769c575f71a9ed60454a354755b5b03",
            ...t,
            children: a
          })
        },
        _m = {
          backgroundElevation: "rockstargames-modules-core-headerd803e72fb936c18155db46ae42dd74f0",
          backgroundOverlay: "rockstargames-modules-core-headeraf311f256f0989aaa668a6d60f37ab83",
          backgroundVisible: "rockstargames-modules-core-headere8da5672530e8e7e170953df4907a3cf"
        },
        dm = e => {
          let {
            children: a,
            isOpen: t,
            onClose: s,
            visible: n
          } = e;
          return t ? (0, _.jsxs)("div", {
            className: [_m.backgroundElevation].join(" "),
            onClick: s,
            children: [(0, _.jsx)("div", {
              className: [_m.backgroundOverlay, n ? _m.backgroundVisible : ""].join(" ")
            }), a]
          }) : null
        },
        gm = e => {
          let {
            target: a,
            selected: t,
            selectedTarget: s,
            onClick: n,
            isMobile: r,
            ...i
          } = e;
          const c = (0, o.Z)(),
            [d, g] = (0, l.useState)(!1),
            [m, u] = (0, l.useState)(null);
          return a.type === $g ? (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              ref: u,
              children: (0, _.jsxs)(nm, {
                "aria-label": c.formatMessage(Uc.search_target_aria_label, {
                  target: s && a?.targets?.indexOf(s) >= 0 ? c.formatMessage(s.intlMessage) : c.formatMessage(a.intlMessage)
                }),
                selected: t,
                onClick: () => g(!d),
                ...i,
                children: [s && a?.targets?.indexOf(s) >= 0 ? c.formatMessage(s.intlMessage) : c.formatMessage(a.intlMessage), (0, _.jsx)("img", {
                  src: em,
                  alt: ""
                })]
              }, a.intlMessage.defaultMessage)
            }), (0, _.jsx)(dm, {
              isOpen: d,
              onClose: () => g(!1),
              children: (0, _.jsx)(lm, {
                isOpen: d,
                openerRef: m,
                isMobile: r,
                children: a.targets?.map((e => (0, _.jsx)(cm, {
                  "aria-label": c.formatMessage(Uc.search_target_aria_label, {
                    target: c.formatMessage(e.intlMessage)
                  }),
                  onClick: () => n(e),
                  children: c.formatMessage(e.intlMessage)
                }, e.intlMessage.defaultMessage)))
              })
            })]
          }) : (0, _.jsx)(nm, {
            "aria-label": c.formatMessage(Uc.search_target_aria_label, {
              target: c.formatMessage(a.intlMessage)
            }),
            selected: t,
            onClick: () => n(a),
            ...i,
            children: c.formatMessage(a.intlMessage)
          }, a.tab)
        },
        mm = {
          secondaryNavigationSlide: "rockstargames-modules-core-headerb17059127d33dc4c94ee131eb131fb19",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerc7e991fff98d1e6d8c35f5c74f6b5b95",
          open: "rockstargames-modules-core-headered23f58994f4b57468fdb9e4c40bb38c"
        },
        um = e => {
          let {
            children: a,
            isOpen: t,
            onMouseClick: s,
            onEscapeKey: n,
            onMouseAway: r,
            style: i
          } = e;
          const o = t ? [mm.open] : [],
            c = e => {
              "Escape" === e.key && n?.()
            };
          return (0, l.useEffect)((() => (t ? window.addEventListener("keyup", c) : window.removeEventListener("keyup", c), () => window.removeEventListener("keyup", c))), [c, t]), t ? (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: [mm.secondaryNavigationOverlay, ...o].join(" "),
              onClick: s,
              onMouseEnter: r,
              style: {
                ...i
              }
            }), a && (0, _.jsx)("div", {
              className: [mm.secondaryNavigationSlide, ...o].join(" "),
              children: a
            })]
          }) : null
        },
        vm = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: s,
            setIsSearchOpen: n,
            setSearchQuery: r,
            isSearchOpen: i,
            searchQuery: c,
            selectedTarget: d,
            selectedTargetIndex: g,
            isSearchPage: m,
            searchError: u,
            maxSearchLength: v
          } = e;
          const p = (0, o.Z)(),
            h = (0, l.useRef)(null),
            f = () => {
              n(), m || r(""), h?.current?.focus()
            },
            b = () => {
              m || n()
            },
            k = {
              duration: .2,
              ease: "easeInOut",
              stiffness: 1e3,
              damping: 100,
              delay: 0
            };
          return (0, l.useEffect)((() => {
            i ? h?.current?.focus() : h?.current?.blur()
          }), [i]), (0, _.jsxs)("div", {
            children: [(0, _.jsx)("button", {
              className: "rockstargames-modules-core-headerfdf861825c948d1a7955d1cea7f9b60a",
              type: "button",
              onClick: f,
              children: (0, _.jsx)("img", {
                src: Kg,
                alt: p.formatMessage(i ? Uc.search_close_button : Uc.search_open_button)
              })
            }), (0, _.jsx)(Zg.M, {
              children: i && (0, _.jsxs)(Jg.E.div, {
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                exit: {
                  opacity: 0
                },
                transition: k,
                children: [(0, _.jsx)(um, {
                  isOpen: !m,
                  onEscapeKey: b,
                  onMouseClick: b
                }), (0, _.jsxs)(Jg.E.div, {
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
                  transition: k,
                  children: [(0, _.jsxs)("div", {
                    className: "rockstargames-modules-core-headerff5c561c57bce4e5e6e3c1b771286680",
                    children: [(0, _.jsx)("div", {
                      className: "rockstargames-modules-core-headerd0846246b7f8111a7c8dd61d8977f797",
                      children: (0, _.jsx)("button", {
                        type: "button",
                        onClick: a,
                        children: (0, _.jsx)("img", {
                          src: Kg,
                          alt: p.formatMessage(Uc.search_action)
                        })
                      })
                    }), (0, _.jsx)("div", {
                      className: "rockstargames-modules-core-headerd35c5f222e110578e123ed49f56bba40",
                      children: (0, _.jsx)("input", {
                        type: "textfield",
                        value: c,
                        onChange: e => r(e.target.value),
                        onKeyUp: t,
                        placeholder: p.formatMessage(Uc.search_placeholder),
                        ref: h,
                        enterKeyHint: "search",
                        maxLength: v
                      })
                    }), (0, _.jsx)("div", {
                      className: "rockstargames-modules-core-headerc52c2aba0e44186a883c1f2955167cde",
                      children: Yg.targets.map(((e, a) => (0, _.jsx)(gm, {
                        target: e,
                        onClick: e => s(e, a),
                        selected: g === a,
                        selectedTarget: d
                      }, e.tab)))
                    }), !m && (0, _.jsx)("div", {
                      className: "rockstargames-modules-core-headerf1451c6007fa33b27b2919fa85e91762",
                      children: (0, _.jsx)("button", {
                        type: "button",
                        onClick: f,
                        children: (0, _.jsx)("img", {
                          src: Qg,
                          alt: p.formatMessage(Uc.search_close_button)
                        })
                      })
                    })]
                  }), u && (0, _.jsx)("div", {
                    className: "rockstargames-modules-core-headeredb8eb6fc81c7f28d96c57cb45ccc40e",
                    "aria-live": "polite",
                    children: u
                  })]
                })]
              })
            })]
          })
        },
        pm = {
          search: "rockstargames-modules-core-headerff2a3a5885c54cc839c3684a72ac24be",
          targetsOuter: "rockstargames-modules-core-headerb8edda6b9b58803aa76c1d591cb6c750",
          hasScroll: "rockstargames-modules-core-headerf4a1a19cd54b9fdacba83551d7b595fd",
          targets: "rockstargames-modules-core-headerb85e2ca642065ab25737f4335826185c",
          errorMessage: "rockstargames-modules-core-headere03104e3157e0392e02406c0b163e2b3"
        },
        hm = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: s,
            setIsSearchOpen: n,
            setSearchQuery: r,
            isSearchOpen: i,
            searchQuery: c,
            selectedTarget: d,
            selectedTargetIndex: g,
            isSearchPage: m,
            searchError: u,
            maxSearchLength: v
          } = e;
          const p = (0, o.Z)(),
            h = (0, l.useRef)(null),
            [f, b] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            let e, a, t = !1;
            const s = s => {
                h && h.current && (s.preventDefault(), t = !0, e = s.pageX - h.current.offsetLeft, a = h.current.scrollLeft)
              },
              n = () => {
                t = !1
              },
              r = s => {
                if (t && (s.preventDefault(), h && h.current)) {
                  const t = s.pageX - h.current.offsetLeft - e;
                  h.current.scrollLeft = a - t
                }
              },
              i = () => {
                if (h && h.current) {
                  const e = h.current.scrollLeft;
                  b(e > 20)
                }
              };
            if (h && h.current) {
              const e = h.current;
              e.addEventListener("mousedown", s), e.addEventListener("mouseup", n), e.addEventListener("mouseleave", n), e.addEventListener("mousemove", r), e.addEventListener("scroll", i)
            }
            return () => {
              h && h.current && (h.current.removeEventListener("mousedown", s), h.current.removeEventListener("mouseup", n), h.current.removeEventListener("mouseleave", n), h.current.removeEventListener("mousemove", r), h.current.removeEventListener("scroll", i))
            }
          })), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("div", {
              className: pm.search,
              children: [(0, _.jsx)("button", {
                type: "button",
                onClick: () => i ? a() : n(!0),
                children: (0, _.jsx)("img", {
                  src: Kg,
                  alt: p.formatMessage(Uc.search_action)
                })
              }), (0, _.jsx)("input", {
                type: "text",
                value: c,
                onChange: e => r(e.target.value),
                onFocus: () => n(!0),
                onKeyUp: t,
                placeholder: p.formatMessage(Uc.search_placeholder),
                enterKeyHint: "search",
                maxLength: v
              }), i && !m && (0, _.jsx)("button", {
                type: "button",
                onClick: () => n(!1),
                children: (0, _.jsx)("img", {
                  src: Qg,
                  alt: p.formatMessage(Uc.search_close_button)
                })
              })]
            }), i && (0, _.jsxs)("div", {
              className: [pm.targetsOuter, f ? pm.hasScroll : ""].join(" "),
              children: [(0, _.jsx)("div", {
                className: pm.targets,
                ref: h,
                children: Yg.targets.map(((e, a) => (0, _.jsx)(gm, {
                  target: e,
                  selected: g === a,
                  selectedTarget: d,
                  onClick: e => s(e, a),
                  isMobile: !0
                }, e.tab)))
              }), u && (0, _.jsx)("div", {
                className: pm.errorMessage,
                "aria-live": "polite",
                children: u
              })]
            })]
          })
        },
        fm = "global-nav-search",
        bm = e => {
          let {
            ...a
          } = e;
          const {
            windowWidth: t
          } = (0, k.w_)(), {
            pathname: s,
            search: n
          } = (0, K.useLocation)(), {
            currentSite: r
          } = Yc(), [i] = (0, K.useSearchParams)(), [c, d] = (0, l.useState)(""), [g, m] = Jc(), [u, p] = (0, l.useState)(0), [h, f] = (0, l.useState)(Yg.targets[0]), [b, y] = (0, l.useState)(""), w = (() => {
            const e = (0, K.useNavigate)(),
              {
                currentSite: a
              } = Yc(),
              t = Fg();
            return (s, n) => {
              const r = n.domain !== a?.site,
                i = {
                  ...n,
                  path: n.path?.replace("{query}", s)
                },
                o = r ? t(i).href : i.path;
              return r ? window.location.href = o : e ? e(o) : window.history.pushState({}, "", o), []
            }
          })(), x = Kc(), M = (0, o.Z)(), S = t < 1024, T = x || g === fm, C = /[*?\\<>&%@:~]/g, N = e => {
            if ("" === c) return !1;
            e.length > 100 && d(e.substring(0, 100));
            const a = e.split(/\s+/),
              t = e.match(C) || !1;
            return a.every((e => e.length < 3)) ? (y(M.formatMessage(Uc.nav_search_error_too_short, {
              count: 3
            })), !1) : t ? (y(M.formatMessage(Uc.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (y(""), !0)
          }, j = () => {
            N(c) && w(c, h.location)
          };
          (0, l.useEffect)((() => {
            const e = r?.site === v.z.www && x,
              a = r?.site === v.z.socialClub && x;
            if (x || (p(0), f(Yg.targets[0])), e) {
              const e = i.get("q"),
                a = i.get("tab");
              if (e && (d(e), N(e)), a) {
                const e = Yg.targets.findIndex((e => e.tab === a));
                p(e), f(Yg.targets[e])
              }
            }
            if (a) {
              const e = Yg.targets.findIndex((e => e.tab === v.z.socialClub)),
                a = Yg.targets[e].targets,
                t = a?.find((e => e.location.path.startsWith(s))),
                n = s.split("/")[2];
              n && d(n), p(e), t && f(t)
            }
          }), [s, n, x]);
          const z = {
            handleSearch: j,
            handleSearchKeypress: e => {
              y(""), "Enter" === e.key && j()
            },
            handleSearchTargetSelect: (e, a) => {
              f(e), p(a), N(c) && w(c, e.location)
            },
            setIsSearchOpen: () => m(fm),
            setSearchQuery: d,
            isSearchOpen: T,
            searchQuery: c,
            selectedTarget: h,
            selectedTargetIndex: u,
            isSearchPage: x,
            searchError: b,
            maxSearchLength: 100
          };
          return S ? (0, _.jsx)(hm, {
            ...z,
            ...a
          }) : (0, _.jsx)(vm, {
            ...z
          })
        },
        km = e => {
          let {
            cta: a,
            search: t = !0,
            isMobile: s
          } = e;
          const n = (0, o.Z)();
          return (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-headerd755a8be16d6c9603965d6d61ce44387",
            children: [a && (0, _.jsx)("div", {
              children: (0, _.jsx)(Wg, {
                variant: a.variant,
                location: a.location,
                dataTestId: a.dataTestId,
                gaEvent: a.ga,
                gaText: a.text,
                target: a.target,
                children: n.formatMessage(a.intlMessage)
              })
            }), t && (0, _.jsx)(bm, {}), (0, _.jsxs)("div", {
              children: [(0, _.jsx)(Q_, {}), !s && (0, _.jsx)(Rg, {})]
            })]
          })
        },
        ym = {
          navigationItem: "rockstargames-modules-core-headere4791244cfb12101d21ef44f3e26ac97",
          active: "rockstargames-modules-core-headerbe8bcc6c46d70212d01dc83c68e67c0a"
        },
        wm = ["pc", "ps4", "ps5", "xboxone", "xboxsx"],
        xm = e => e.replace(/\?.*$/, ""),
        Mm = e => {
          const {
            pathname: a
          } = (0, K.useLocation)(), {
            currentSite: t
          } = Yc(), {
            data: s,
            loggedIn: n
          } = Z();
          return e && e.length ? e.map((e => {
            if (e?.domain !== t?.site) return null;
            let r;
            if (t?.site === v.z.socialClub) {
              const e = RegExp(`/(${wm.join("|")})`);
              r = a.match(e) ? a.replace(e, "") : a
            } else r = a;
            let i = xm(e?.path || "");
            return n && (i = i.replace("{username}", s.nickname)), (0, K.matchPath)({
              path: i,
              caseSensitive: !1,
              end: !1
            }, xm(r))
          })) : []
        },
        Sm = e => {
          let {
            text: a,
            type: t,
            location: s,
            isLegacy: n,
            gaText: r,
            gaBreadCrumb: i,
            dataTestId: o,
            target: l,
            ...c
          } = e;
          const [d] = Mm([s]), g = t === qg;
          return (0, _.jsxs)(Hg, {
            className: [ym.navigationItem, d ? ym.active : ""].join(" "),
            location: s,
            isLegacy: n,
            type: t,
            target: l,
            gaText: r,
            gaBreadCrumb: i,
            dataTestId: o,
            label: a,
            ...c,
            children: [a, g && (0, _.jsx)("img", {
              alt: "",
              src: am
            })]
          })
        },
        Tm = {
          navigationDropdownButton: "rockstargames-modules-core-headera3a570b3fc00ad9e0274623661e88c7a",
          open: "rockstargames-modules-core-headerdbc174ea06ad91b5938af1465fdd3696",
          active: "rockstargames-modules-core-headerdb65254f84c5afcf987b23948ce1cf64"
        },
        Cm = e => {
          let {
            text: a,
            isOpen: t,
            onClick: s,
            buttonRef: n,
            navChildren: r,
            gaText: i,
            gaBreadCrumb: o,
            dataTestId: c
          } = e;
          const {
            track: d
          } = te(), g = (0, l.useCallback)((() => {
            d(Vg(void 0, "", i, o)), s()
          }), [i, o, t, s]), m = (0, l.useMemo)((() => {
            if (!r) return;
            const e = (a, t) => {
              let s;
              return s = t.children ? t.children.reduce(e, []) : [t.location], [...a, ...s]
            };
            return r.reduce(e, [])
          }), [r]), u = Mm(m), v = u?.some(Boolean);
          return (0, _.jsx)("div", {
            className: Tm.navigationDropdown,
            ref: n,
            children: (0, _.jsxs)("button", {
              className: [Tm.navigationDropdownButton, v ? Tm.active : "", t ? Tm.open : ""].join(" "),
              type: "button",
              "data-testid": c || "navDropdown",
              onClick: g,
              children: [a, (0, _.jsx)("img", {
                src: em,
                alt: ""
              })]
            })
          })
        },
        Nm = e => {
          let {
            title: a,
            location: t,
            imgUrl: s,
            gaText: n,
            gaBreadCrumb: r,
            onNavigate: i,
            dataTestId: o,
            ...l
          } = e;
          return (0, _.jsx)("div", {
            className: "rockstargames-modules-core-headerc2b06d9afe0933250fc72b9117858265",
            children: (0, _.jsx)(Hg, {
              location: t,
              gaText: n,
              gaBreadCrumb: r,
              onNavigate: i,
              dataTestId: o,
              ...l,
              children: (0, _.jsx)("img", {
                src: s,
                alt: a
              })
            })
          }, a)
        },
        jm = {
          domain: v.z.www,
          path: "/games"
        },
        zm = () => {
          const e = (0, o.Z)();
          return (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-headerf4a613c7c0cc9bef8df3ee832d883ead",
            "data-testid": "gamesMenu",
            children: [(0, _.jsxs)("div", {
              className: "rockstargames-modules-core-headera300918162cd4910c1033e1410cf7306",
              children: [(0, _.jsx)("div", {
                children: (0, _.jsx)("h2", {
                  className: "rockstargames-modules-core-headerc310b29b3e11394b5a0dde96dc2d8f9b",
                  children: e.formatMessage(Uc.games_menu_featured)
                })
              }), (0, _.jsx)("div", {
                children: (0, _.jsxs)(Hg, {
                  className: "rockstargames-modules-core-headera3a0b6b909900e4677b64d48a0f9192d",
                  gaText: Uc.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${Uc.games_menu_view_all.defaultMessage}`,
                  location: jm,
                  children: [e.formatMessage(Uc.games_menu_view_all), (0, _.jsx)("img", {
                    src: tm,
                    alt: e.formatMessage(Uc.nav_view_all_games)
                  })]
                })
              })]
            }), (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerbbf167776ba1b263a8376030db8c6f35",
              children: Qc.map((a => (0, _.jsx)(Nm, {
                title: e.formatMessage(a.intlMessage),
                gaText: a.intlMessage.defaultMessage,
                gaBreadCrumb: `Games > ${a.intlMessage.defaultMessage}`,
                location: a.location,
                imgUrl: (0, k.kX)(!0) + a.imageSrc,
                dataTestId: a.dataTestId
              }, a.imageSrc)))
            })]
          })
        },
        Am = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerae2bc6580acf5b4362b457cc75833bb8",
          nested: "rockstargames-modules-core-headerd6f17c0b3966d498f9a2fc3a9f9de38d",
          subMenuDropdownButton: "rockstargames-modules-core-headerdab571ebee31eca114e2a074de69472c",
          open: "rockstargames-modules-core-headerf43750ae7653576a37e8243935a3feb1",
          openChevron: "rockstargames-modules-core-headerdb0c8d634787e7aaf33e858747e52b05",
          subMenuDropdownItems: "rockstargames-modules-core-headerde63d9fdafaf4995f8b95fdef3a8d551"
        },
        Em = {
          subMenuItem: "rockstargames-modules-core-headere7cf207577cfec29877f7387fa7cb412",
          nested: "rockstargames-modules-core-headerfb8268fb2131202c7ee66ce7f684012f"
        },
        Im = {
          navigationLink: "rockstargames-modules-core-headerc638ccc027700497fe811881feb02f1e",
          active: "rockstargames-modules-core-headerf53cd2bce32edf82c615316c826f8477"
        },
        Pm = e => [Im.navigationLink, e ? Im.active : ""].join(" "),
        Lm = e => {
          let {
            text: a,
            type: t,
            location: s,
            className: n,
            isLegacy: r,
            target: i,
            nested: o,
            gaText: l,
            gaBreadCrumb: c,
            dataTestId: d,
            ...g
          } = e;
          const m = t === qg,
            [u] = Mm(s ? [s] : void 0);
          return (0, _.jsxs)(Hg, {
            className: [Pm(Boolean(u)), Em.subMenuItem, o ? Em.nested : "", n].join(" "),
            location: s,
            isLegacy: r,
            type: t,
            target: i,
            gaText: l,
            gaBreadCrumb: c,
            dataTestId: d,
            label: a,
            "data-ui-name": "sub-menu-item",
            ...g,
            children: [a, m && (0, _.jsx)("img", {
              alt: "",
              src: am
            })]
          })
        },
        Om = "nav-dropdown",
        Dm = e => {
          let {
            text: a,
            navChildren: t,
            gaText: s,
            gaBreadCrumb: n,
            nested: r,
            dataTestId: i,
            subMenuId: c,
            toggleOpen: d,
            isOpen: g,
            ...m
          } = e;
          const [u] = Jc(), v = (0, o.Z)(), {
            track: p
          } = te(), h = (0, l.useRef)(null), [f, b] = (0, l.useState)(null), k = Zc();
          (0, l.useEffect)((() => {
            null === u && d(null)
          }), [u]);
          const y = e => {
              p(Vg(void 0, "", s, n)), d(e ? c : null)
            },
            w = e => {
              "ArrowLeft" === e.code && (y(!1), h?.current?.focus())
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
          return (0, _.jsxs)("div", {
            className: [Am.subMenuDropdownContainer, r ? Am.nested : ""].join(" "),
            ...m,
            "data-ui-name": "sub-menu-item",
            children: [(0, _.jsxs)("button", {
              type: "button",
              className: [Am.subMenuDropdownButton, r ? Am.nested : "", g ? Am.open : ""].join(" "),
              onClick: () => y(!g),
              onKeyUp: e => {
                "Enter" === e.code && y(!0), "ArrowRight" === e.code && y(!0), "ArrowLeft" === e.code && y(!1)
              },
              ref: h,
              "data-testid": i,
              children: [a, (0, _.jsx)("img", {
                src: em,
                className: Am.openChevron,
                alt: ""
              })]
            }), (0, _.jsx)(Zg.M, {
              children: g && t && (0, _.jsx)(Jg.E.div, {
                className: Am.subMenuDropdownItems,
                variants: M,
                animate: "open",
                initial: "closed",
                exit: "closed",
                children: t.map((e => e?.requiresAuth && !k.nickname ? null : e.type === Om ? (0, _.jsx)(Dm, {
                  text: v.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${n} > ${e.intlMessage.defaultMessage}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: f === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: b
                }, e.intlMessage.defaultMessage) : (0, _.jsx)(Lm, {
                  text: v.formatMessage(e.intlMessage),
                  type: e.type,
                  location: e.location,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${n} > ${e.intlMessage.defaultMessage}`,
                  onKeyUp: w,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.intlMessage.defaultMessage)))
              })
            })]
          })
        },
        Rm = Dm,
        Vm = {
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
        Bm = e => {
          let {
            intlMessage: a,
            type: t,
            location: s,
            navChildren: n,
            isLegacy: r,
            requiresAuth: i,
            target: c,
            gaBreadCrumb: d,
            navKey: g,
            isHidden: m,
            dataTestId: u,
            ...v
          } = e;
          const p = (0, o.Z)(),
            [h, f] = (0, l.useState)(null),
            b = (0, K.useLocation)(),
            [k, y] = Jc(),
            w = Zc(),
            [x, M] = (0, l.useState)(null),
            S = k === g,
            T = {
              ...S ? {
                visibility: "visible",
                display: "block"
              } : {
                visibility: "hidden",
                display: "none"
              }
            };
          (0, l.useEffect)((() => {
            y(null)
          }), [b.pathname, b.key]);
          const C = d ? `${d} > ${a.defaultMessage}` : a.defaultMessage;
          return t === $g ? (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(Cm, {
              text: p.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: C,
              onClick: () => y(g),
              isOpen: S,
              buttonRef: m ? void 0 : f,
              navChildren: n,
              dataTestId: u,
              ...v
            }), !m && (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(um, {
                isOpen: S,
                onMouseClick: () => y(null),
                onEscapeKey: () => y(null)
              }), (0, _.jsx)(lm, {
                isOpen: S,
                openerRef: h,
                children: n?.map((e => e?.requiresAuth && !w.nickname ? null : e.type === $g ? (0, _.jsx)(Rm, {
                  text: p.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${C} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: x === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: M
                }, `desktop-submenu-${e.intlMessage.defaultMessage}`) : (0, _.jsx)(Lm, {
                  location: e.location,
                  text: p.formatMessage(e.intlMessage),
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${C} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId
                }, e.intlMessage.defaultMessage)))
              })]
            })]
          }) : t === Ug ? (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(Cm, {
              text: p.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: d ? `${d} > ${a.defaultMessage}` : a.defaultMessage,
              onClick: () => y(g),
              isOpen: S,
              dataTestId: u,
              ...v
            }), !m && (0, _.jsx)(um, {
              isOpen: !0,
              onMouseClick: () => y(null),
              onEscapeKey: () => y(null),
              style: T,
              children: (0, _.jsx)(Jg.E.div, {
                initial: "exit",
                animate: S ? "enter" : "exit",
                transition: {
                  ease: "easeInOut",
                  duration: .3
                },
                variants: Vm,
                children: (0, _.jsx)(zm, {})
              })
            })]
          }) : s ? i && !w.nickname ? null : (0, _.jsx)(Sm, {
            location: s,
            type: t,
            text: p.formatMessage(a),
            isLegacy: r,
            target: c,
            gaText: a.defaultMessage.toLowerCase(),
            gaBreadCrumb: d ? `${d} > ${a.defaultMessage}` : a.defaultMessage,
            dataTestId: u,
            ...v
          }) : null
        },
        Gm = e => {
          let {
            links: a
          } = e;
          const [t, s] = (0, l.useState)(a), [n, r] = (0, l.useState)([]), i = (0, l.useRef)(null), o = (0, l.useRef)(null), c = (0, l.useCallback)((() => {
            const e = o.current;
            if (!e || !a.length) return;
            const {
              children: t
            } = e;
            let n = 0;
            const i = Array.from(t).map(((e, a) => {
                const t = e.getBoundingClientRect().top;
                return 0 === a && (n = t), t
              })),
              l = i.filter((e => e !== n)).length,
              c = i.findIndex((e => e > n));
            let _ = c;
            c > 0 && (_ = c - 1), l ? (s(a.slice(0, _)), r(a.slice(_))) : (s(a), r([]))
          }), [a, o?.current]);
          (0, l.useEffect)((() => {
            const e = new ResizeObserver(c);
            return o?.current && e.observe(o.current), () => {
              o?.current && e.unobserve(o.current)
            }
          }), [a, o?.current]);
          const d = (0, l.useMemo)((() => (0, _.jsx)("ul", {
            ref: o,
            className: "rockstargames-modules-core-headerf3e86ba2e4808f8537da93ae608b41fd",
            "aria-hidden": "true",
            children: a.map((e => (0, _.jsx)("li", {
              children: (0, _.jsx)(Bm, {
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
          return 0 === a.length ? null : (0, _.jsxs)("nav", {
            className: "rockstargames-modules-core-headerbf622cdec1ceb44e603e4e0ce93970e7",
            children: [(0, _.jsxs)("ul", {
              ref: i,
              children: [t.map((e => (0, _.jsx)("li", {
                children: (0, _.jsx)(Bm, {
                  intlMessage: e.intlMessage,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, `desktop-nav-link-${e.text}`))), n.length > 0 && (0, _.jsx)("li", {
                children: (0, _.jsx)(Bm, {
                  intlMessage: Uc.nav_more_dropdown,
                  type: $g,
                  navChildren: n,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), d]
          })
        },
        Fm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        qm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
        $m = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
        Um = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
        Hm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
        Xm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
        Wm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
        Ym = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg",
        Zm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
        Jm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
        Km = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a7dfd2058127cb6f5adca6c9b1d91cc.png",
        Qm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
        eu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
        au = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d2753ceddb2213d956d51d369985513.svg",
        tu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
        su = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
        nu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ccc721c72fc5553108c7e70b0778dba.svg",
        ru = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
        iu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
        ou = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63c149607e42c3f7a8988ef21d53ec97.svg",
        lu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
        cu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
        _u = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/790f72b723ee040bae9e43e3d2785c89.svg",
        du = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
        gu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
        mu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
        uu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
        vu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
        pu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
        hu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
        fu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
        bu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
        ku = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
        yu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
        wu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
        xu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
        Mu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        Su = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
        Tu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
        Cu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
        Nu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
        ju = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
        zu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
        Au = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
        Eu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
        Iu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
        Pu = e => n[e] ? n[e] : null,
        Lu = () => (0, _.jsx)("div", {
          className: "rockstargames-modules-core-headerc5182c35b0d08cbfd5c48a29103c987d"
        }),
        Ou = {
          quickAccess: "rockstargames-modules-core-headerdd98ab26460bc8af09e869527e025790",
          link: "rockstargames-modules-core-headerb9254c00c41acd171bd25c1a6e49171e"
        },
        Du = () => {
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
          return (0, _.jsxs)("ul", {
            className: Ou.quickAccess,
            children: [(0, _.jsx)("li", {
              children: (0, _.jsxs)(Hg, {
                location: a.home,
                className: [Pm(), Ou.link].join(" "),
                gaText: Uc.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${t} > ${Uc.nav_quick_access_home.defaultMessage}`,
                children: [(0, _.jsx)("img", {
                  alt: "Rockstar Games",
                  src: Mu
                }), (0, _.jsx)(i.Z, {
                  ...Uc.nav_quick_access_home
                })]
              })
            }), (0, _.jsx)("li", {
              children: (0, _.jsxs)(Hg, {
                location: a.games,
                className: [Pm(), Ou.link].join(" "),
                gaText: Uc.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${t} > ${Uc.nav_quick_access_games.defaultMessage}`,
                children: [(0, _.jsx)("img", {
                  alt: e.formatMessage(Uc.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, _.jsx)(i.Z, {
                  ...Uc.nav_quick_access_games
                })]
              })
            }), (0, _.jsx)("li", {
              children: (0, _.jsxs)(Hg, {
                location: a.newswire,
                className: [Pm(), Ou.link].join(" "),
                gaText: Uc.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${t} > ${Uc.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, _.jsx)("img", {
                  alt: e.formatMessage(Uc.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, _.jsx)(i.Z, {
                  ...Uc.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        Ru = "quick-access-menu",
        Vu = e => {
          let {
            site: a,
            brand: t,
            hideRockstarBrand: s,
            hideQuickAccess: n
          } = e;
          const r = (0, o.Z)(),
            {
              windowWidth: i
            } = (0, k.w_)(),
            [c, d] = (0, l.useState)(null),
            [g, m] = (0, l.useState)(null),
            [u, v] = Jc(),
            p = u === Ru,
            h = n ? Uc.nav_rockstargames_home : Uc.nav_rockstargames_logo,
            f = i < 1024,
            {
              styles: b,
              attributes: y,
              forceUpdate: w
            } = (0, rm.D)(c, g, {
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
          return (0, l.useEffect)((() => {
            w?.()
          }), [c, p]), (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-headeracf0fe31775e9e9f76e57a6356c3073d",
            children: [!s && (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-headerae7adffe4295955d4ea126909f0f7027",
              children: [(f || n) && (0, _.jsx)(Hg, {
                location: {
                  domain: "www",
                  path: "/"
                },
                gaText: Uc.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: Uc.nav_rockstargames_home.defaultMessage,
                children: (0, _.jsx)(Lu, {})
              }), !f && !n && (0, _.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headerfe08980c15b4c9d647ad67b3e69df46c",
                onClick: () => v(Ru),
                "aria-label": r.formatMessage(h),
                ref: d,
                children: (0, _.jsx)(Lu, {})
              }), p && !n && (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(um, {
                  isOpen: p,
                  onEscapeKey: () => v(null),
                  onMouseClick: () => v(null)
                }), (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-headerac0bb9bdb359f681853e0ab8386b966f",
                  style: {
                    ...b.popper
                  },
                  ref: m,
                  ...y.popper,
                  children: (0, _.jsx)(Du, {})
                })]
              })]
            }), t && (0, _.jsxs)(_.Fragment, {
              children: [!s && (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerbd9eb76eae4216a03e203f8277c0de1a"
              }), (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerce3b9d90001b3bba8f2e0ada2902041f",
                children: (0, _.jsx)("img", {
                  className: "rockstargames-modules-core-headerae86867dea4ec0a8cdea5642f4c291d3",
                  alt: a,
                  src: Pu(t)
                })
              })]
            })]
          })
        },
        Bu = {
          header: "rockstargames-modules-core-headerd2dbf5efb1484f71a302d2b217900031",
          fluid: "rockstargames-modules-core-headercfa07fc8efab2e71f97a4b728dee6586",
          fixed: "rockstargames-modules-core-headerfcaaa17901eb60439448b4351d15f0b2",
          title: "rockstargames-modules-core-headere171ca1389a17285caa5dfa568adfac8",
          quickAccessWrapper: "rockstargames-modules-core-headera4ef54292d023f37220cb09dffe7c81a"
        },
        Gu = e => {
          let {
            data: a
          } = e;
          const t = (0, l.useMemo)((() => {
            const {
              currentSite: e
            } = (0, v.Z)();
            if (e?.site === v.z.socialClub) return {
              zIndex: 8600
            }
          }), []);
          return (0, _.jsxs)("header", {
            className: [Bu.header, Bu.fixed].join(" "),
            style: t,
            children: [(0, _.jsx)("div", {
              className: Bu.title,
              children: (0, _.jsx)(Vu, {
                site: a.site,
                brand: a.brand,
                hideQuickAccess: a.hideQuickAccess || !1
              })
            }), (0, _.jsx)("div", {
              className: Bu.fluid,
              children: (0, _.jsx)(Gm, {
                links: a.links
              })
            }), (0, _.jsx)("div", {
              className: Bu.fixed,
              children: (0, _.jsx)(km, {
                cta: a.cta
              })
            })]
          })
        },
        Fu = {
          hamburger: "rockstargames-modules-core-headerd45fd161655450522fd627346eda32f6",
          open: "rockstargames-modules-core-headerefcc59509afc394cff54203b433d510e"
        },
        qu = e => {
          let {
            toggle: a,
            isMenuOpen: t
          } = e;
          const {
            track: s
          } = te();
          return (0, _.jsx)("div", {
            className: [Fu.hamburger, t ? Fu.open : ""].join(" "),
            children: (0, _.jsxs)("button", {
              onClick: () => {
                s({
                  event: t ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), a?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, _.jsx)("span", {}), (0, _.jsx)("span", {}), (0, _.jsx)("span", {})]
            })
          })
        },
        $u = {
          header: "rockstargames-modules-core-headerc6c3d0fc75c97585f6ca0f5805999412",
          title: "rockstargames-modules-core-headeraa1441b47dbc6f5a653a59ed4d9f9433",
          nav: "rockstargames-modules-core-headere454c30b7535de52d50c84ba33bd6a10",
          fullMenuOpen: "rockstargames-modules-core-headerb95ceeff411265d1f48446f8b06510e5",
          paddingBottom: "rockstargames-modules-core-headerb1ca354e5212602a9ee0119c6e77096a",
          navContainer: "rockstargames-modules-core-headerbf0d2e00daa366e9d881eb1631eb799f",
          searchOpen: "rockstargames-modules-core-headerf9ef7f85a5d81d00b1d680003a076fa3"
        },
        Uu = {
          domain: v.z.www,
          path: "/games"
        },
        Hu = e => {
          let {
            text: a,
            onNavigate: t
          } = e;
          const {
            isMobile: s
          } = (0, k.w_)(), n = (0, o.Z)(), r = (0, l.useRef)(), [c, d] = (0, l.useState)(2.5);
          return (0, l.useEffect)((() => {
            d(s ? 2.5 : 3.5)
          }), [s]), (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-headerffd42c843d5d69c9d594c92a30692e5d",
            "data-testid": "gamesMenu",
            children: [(0, _.jsxs)("div", {
              className: "rockstargames-modules-core-headerdc05e5d1b9cadf7aaf9ca6bf2115d812",
              children: [(0, _.jsx)("h2", {
                children: a
              }), (0, _.jsxs)(Hg, {
                gaText: Uc.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${Uc.nav_view_all_games.defaultMessage}`,
                location: Uu,
                onNavigate: t,
                className: Im.navigationLink,
                children: [(0, _.jsx)(i.Z, {
                  ...Uc.nav_view_all_games
                }), (0, _.jsx)("img", {
                  src: tm,
                  alt: n.formatMessage(Uc.nav_view_all_games)
                })]
              })]
            }), (0, _.jsx)(zd.tq, {
              className: "rockstargames-modules-core-headera91f871c6f287f959df91085cef76f22",
              ref: r,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: c,
              speed: 700,
              children: Qc.map((e => (0, _.jsx)(zd.o5, {
                className: "rockstargames-modules-core-headere094133e33c8cdf2873ff7e08c34dd0a",
                children: (0, _.jsx)(Nm, {
                  title: n.formatMessage(e.intlMessage),
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `Games > ${e.intlMessage.defaultMessage}`,
                  location: e.location,
                  imgUrl: (0, k.kX)(!0) + e.imageSrc,
                  onNavigate: t,
                  dataTestId: e.dataTestId
                })
              }, e.intlMessage.defaultMessage)))
            })]
          })
        },
        Xu = e => {
          let {
            children: a,
            isOpen: t
          } = e;
          const s = {
              duration: .2,
              ease: "easeInOut",
              stiffness: 1e3,
              damping: 100,
              delay: 0
            },
            n = {
              open: {
                maxHeight: "100vh",
                opacity: 1,
                transition: s
              },
              closed: {
                maxHeight: 0,
                opacity: 0,
                transition: s
              }
            };
          return (0, _.jsx)(Zg.M, {
            children: t && (0, _.jsx)(Jg.E.div, {
              className: "rockstargames-modules-core-headerc69df84ab1249c0ea218884e3459e5cc",
              variants: n,
              animate: "open",
              initial: "closed",
              exit: "closed",
              children: a
            })
          })
        },
        Wu = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerd4d2f7b0358d7c2b7c482bea7a243acd",
          subMenuDropdownButton: "rockstargames-modules-core-headerc09e65bd027917e0f29da9a6ef0e91f8",
          open: "rockstargames-modules-core-headerae62683c5e47c10b3260c7a63544e9d1",
          subMenuDropdownItems: "rockstargames-modules-core-headera015481239e04732ecf001df49c29311"
        },
        Yu = {},
        Zu = e => {
          let {
            text: a,
            dataTestId: t,
            type: s,
            target: n,
            location: r,
            className: i,
            gaText: o,
            gaBreadCrumb: l,
            isLegacy: c,
            onNavigate: d,
            ...g
          } = e;
          const [m] = Mm(r ? [r] : void 0), u = s === qg;
          return (0, _.jsxs)(Hg, {
            className: [Pm(Boolean(m)), Yu.subMenuItem, i].join(" "),
            dataTestId: t,
            location: r,
            type: s,
            target: n,
            gaText: o,
            gaBreadCrumb: l,
            onNavigate: d,
            isLegacy: c,
            label: a,
            ...g,
            children: [a, u && (0, _.jsx)("img", {
              alt: "",
              src: am
            })]
          })
        },
        Ju = e => {
          let {
            text: a,
            dataTestId: t,
            navChildren: s,
            gaText: n,
            gaBreadCrumb: r,
            onNavigate: i,
            isSubMenuOpen: l,
            toggleMenuOpen: c,
            ...d
          } = e;
          const g = (0, o.Z)(),
            {
              track: m
            } = te(),
            u = {
              duration: .2,
              ease: "easeInOut",
              stiffness: 1e3,
              damping: 100,
              delay: 0
            },
            v = {
              open: {
                maxHeight: "100vh",
                opacity: 1,
                transition: u
              },
              closed: {
                maxHeight: 0,
                opacity: 0,
                transition: u
              }
            };
          return (0, _.jsxs)("div", {
            className: Wu.subMenuDropdownContainer,
            ...d,
            children: [(0, _.jsxs)("button", {
              type: "button",
              "data-testid": t,
              className: [Wu.subMenuDropdownButton, l ? Wu.open : ""].join(" "),
              onClick: () => {
                m(Vg(void 0, "", n, r)), c()
              },
              children: [a, (0, _.jsx)("img", {
                src: em,
                alt: ""
              })]
            }), (0, _.jsx)(Zg.M, {
              children: l && (0, _.jsx)(Jg.E.div, {
                className: Wu.subMenuDropdownItems,
                variants: v,
                animate: "open",
                initial: "closed",
                exit: "closed",
                children: s.map((e => (0, _.jsx)(Zu, {
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
        Ku = e => {
          let {
            intlMessage: a,
            dataTestId: t,
            type: s,
            target: n,
            location: r,
            navChildren: i,
            gaBreadCrumb: c,
            onNavigate: d,
            isOpen: g,
            setIsOpen: m,
            ...u
          } = e;
          const v = (0, o.Z)(),
            [p, h] = (0, l.useState)(null),
            [f] = Mm(r ? [r] : void 0),
            b = c ? `${c} > ${a.defaultMessage}` : a.defaultMessage;
          if (s === $g) return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(Cm, {
              text: v.formatMessage(a),
              dataTestId: t,
              gaText: a.defaultMessage,
              gaBreadCrumb: b,
              onClick: () => m(),
              isOpen: g,
              ...u
            }), (0, _.jsx)(Xu, {
              isOpen: g,
              children: i?.map(((e, a) => e.type === $g ? (0, _.jsx)(Ju, {
                text: v.formatMessage(e.intlMessage),
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.intlMessage.defaultMessage,
                gaBreadCrumb: `${b} > ${e.intlMessage.defaultMessage}`,
                onNavigate: d,
                isSubMenuOpen: p === a,
                toggleMenuOpen: () => h(p !== a ? a : null)
              }, e.intlMessage.defaultMessage) : (0, _.jsx)(Zu, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: v.formatMessage(e.intlMessage),
                type: e.type,
                gaText: e.intlMessage.defaultMessage,
                gaBreadCrumb: `${b} > ${e.intlMessage.defaultMessage}`,
                onNavigate: d
              }, e.intlMessage.defaultMessage)))
            })]
          });
          if (s === Ug) return (0, _.jsx)(Hu, {
            text: v.formatMessage(a),
            onNavigate: d
          });
          const k = s === qg;
          return (0, _.jsxs)(Hg, {
            location: r,
            dataTestId: t,
            type: s,
            target: n,
            gaText: a.defaultMessage,
            gaBreadCrumb: b,
            onNavigate: d,
            className: [Pm(Boolean(f)), f ? "rockstargames-modules-core-headere316012f5bea2b6722ee4b7d7b466cf2" : ""].join(" "),
            label: v.formatMessage(a),
            ...u,
            children: [v.formatMessage(a), k && (0, _.jsx)("img", {
              alt: "",
              src: am
            })]
          })
        },
        Qu = e => {
          let {
            links: a,
            cta: t,
            onNavigate: s
          } = e;
          const n = (0, o.Z)(),
            [r, i] = (0, l.useState)(null);
          return (0, _.jsx)("div", {
            className: "rockstargames-modules-core-headerb15d5468019b2ad71c74bc93146eeffe",
            children: (0, _.jsxs)("ul", {
              children: [a.map(((e, a) => (0, _.jsx)("li", {
                children: (0, _.jsx)(Ku, {
                  intlMessage: e.intlMessage,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onNavigate: s,
                  isOpen: r === a,
                  setIsOpen: () => i(r !== a ? a : null)
                })
              }, e.text))), t && (0, _.jsx)("li", {
                className: "rockstargames-modules-core-headerda158a2d181d8898c98800dfd9a76691",
                children: (0, _.jsx)(Wg, {
                  variant: t.variant,
                  dataTestId: t.dataTestId,
                  location: t.location,
                  gaEvent: t.ga,
                  gaText: t.text,
                  onNavigate: s,
                  children: n.formatMessage(t.intlMessage)
                })
              })]
            })
          })
        },
        ev = e => {
          let {
            data: a
          } = e;
          const [t, s] = (0, l.useState)(!1), [n, r] = (0, l.useState)(!1), i = Kc(), {
            pathname: o,
            hash: c,
            search: d
          } = (0, K.useLocation)(), g = {
            duration: .2,
            ease: "easeInOut",
            stiffness: 1e3,
            damping: 100,
            delay: 0
          }, m = {
            open: {
              opacity: 1,
              transition: g
            },
            closed: {
              opacity: 0,
              transition: g
            }
          };
          return (0, l.useEffect)((() => {
            t ? document.documentElement.setAttribute("data-disallow-body-scroll", "") : document.documentElement.removeAttribute("data-disallow-body-scroll")
          }), [t]), (0, l.useEffect)((() => {
            r(!1), s(!1)
          }), [o, c, d]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("header", {
              className: $u.header,
              children: [(0, _.jsx)(qu, {
                toggle: () => {
                  s(!t), r(!1)
                },
                isMenuOpen: t
              }), (0, _.jsx)("div", {
                className: $u.title,
                children: (0, _.jsx)(Vu, {
                  site: a.site,
                  brand: a.brand,
                  hideRockstarBrand: !!a.brand
                })
              }), (0, _.jsx)("div", {
                children: (0, _.jsx)(km, {
                  search: !1,
                  isMobile: !0
                })
              })]
            }), (0, _.jsx)(Zg.M, {
              children: (t || n || i) && (0, _.jsxs)(Jg.E.nav, {
                className: [$u.nav, t && a.brand ? $u.paddingBottom : "", t ? $u.fullMenuOpen : ""].join(" "),
                variants: m,
                animate: "open",
                initial: "closed",
                exit: "closed",
                children: [(0, _.jsx)(bm, {
                  isSearchOpen: n || i,
                  setIsSearchOpen: r
                }), t && (0, _.jsxs)("div", {
                  className: [$u.navContainer, n ? $u.searchOpen : ""].join(" "),
                  children: [(0, _.jsx)(Qu, {
                    links: a.links,
                    cta: a.cta,
                    onNavigate: () => {
                      s(!1), r(!1)
                    }
                  }), a.brand && !a.hideQuickAccess && (0, _.jsx)(Du, {})]
                })]
              })
            }), (0, _.jsx)(Rg, {})]
          })
        },
        av = () => {
          const {
            windowWidth: e
          } = (0, k.w_)(), a = Kc(), {
            currentSite: t
          } = Yc(), [n] = (0, K.useSearchParams)(), {
            search: r
          } = (0, K.useLocation)(), i = e < 1024, [o, c] = (0, l.useState)(!1);
          (0, l.useEffect)((() => {
            c(!0)
          }), []);
          const d = (0, l.useMemo)((() => Object.values(s).reduce(((e, a) => {
              const r = t?.site ? a.appearancePaths[t.site] : [];
              return r ? [...e, ...r.map((e => {
                const t = e.match(/{.*}/),
                  r = t?.[0],
                  o = r && (e => {
                    if (!e) return null;
                    if ("titleOverride" === e) {
                      const e = n.get("title");
                      if ("gtav" === e) return p_;
                      if ("rdr2" === e) return I_
                    }
                    return null
                  })(r.substring(1, r.length - 1)) || a,
                  l = r ? e.replace(r, "") : e;
                let c = null;
                return o?.links?.length < 1 && (c = a_().cloneDeep(o), c.links = s?.rsg?.links, c.hideQuickAccess = !0, c.cta && delete c.cta), {
                  path: l,
                  element: i ? (0, _.jsx)(ev, {
                    data: c ?? o
                  }) : (0, _.jsx)(Gu, {
                    data: o
                  })
                }
              }))] : e
            }), [])), [t?.site, i, r]),
            g = (0, K.useRoutes)(d);
          return (0, _.jsxs)("div", {
            className: t_.globalNavigationRoot,
            "data-header-initialized": o,
            children: [(0, _.jsx)("div", {
              className: [t_.globalNavigationSpacer, a ? t_.globalNavigationSearchSpacer : ""].join(" ")
            }), g]
          })
        },
        tv = () => {
          const e = (0, l.useMemo)((() => (0, v.Z)()), []),
            [a, t] = (0, l.useState)("#main");
          return (0, l.useEffect)((() => {
            t("www" === e?.currentSite?.site ? window.location.pathname.startsWith("gta-online") ? "#main" : "#content" : "#app-root")
          }), [e]), (0, _.jsx)("a", {
            className: "rockstargames-modules-core-headercf7ea2d9c4f82e278e44b867b529e56e",
            href: a,
            children: (0, _.jsx)(i.Z, {
              ...Uc.accessibility_skip_button
            })
          })
        },
        sv = e => {
          let {
            baseName: a
          } = e;
          const t = oe(),
            {
              hasProvider: s
            } = Z(),
            [{
              iso: n
            }] = f();
          let r = null;
          return r = (0, _.jsx)(qc, {}), s ? (0, _.jsx)(k.ph, {
            children: (0, _.jsx)(d, {
              locales: $c,
              lang: n,
              children: (0, _.jsxs)(ee, {
                children: [r, (0, _.jsx)(ne, {
                  basename: a,
                  history: t,
                  children: (0, _.jsxs)(Wc, {
                    children: [(0, _.jsx)(tv, {}), (0, _.jsx)(av, {})]
                  })
                })]
              })
            })
          }) : (0, _.jsx)(k.ph, {
            children: (0, _.jsx)(d, {
              locales: $c,
              lang: n,
              children: (0, _.jsx)(Y, {
                children: (0, _.jsxs)(ee, {
                  children: [r, (0, _.jsx)(ne, {
                    basename: a,
                    history: t,
                    children: (0, _.jsxs)(Wc, {
                      children: [(0, _.jsx)(tv, {}), (0, _.jsx)(av, {})]
                    })
                  })]
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
      var s = t(7056),
        n = t(8184),
        r = t.n(n),
        i = t(5370),
        o = t.n(i),
        l = t(8383),
        c = t(7349);
      const {
        apiHost: _
      } = (0, l.Z)(), d = (0, c.r)(document.documentElement.lang), g = {}, m = async function(e) {
        let {
          fetchOptions: a = {},
          finalFetchOptions: t = {},
          query: n = null,
          pingBearer: i,
          requireBearerToken: l = !0,
          useCache: c = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          bearerToken: m = null
        } = await (i?.()) ?? {}, u = {
          "X-Requested-With": "XMLHttpRequest",
          "X-AMC": !0,
          "Content-Type": "application/json",
          ...d && {
            "X-lang": d
          }
        };
        let v = `${_}/${e}`;
        if (null === n || o().isEmpty(n) || (v += `?${new URLSearchParams(n)}`), !m && l) return null;
        m && (u.Authorization = `Bearer ${m}`);
        const p = {
            headers: u
          },
          h = r().all([p, a, t]),
          f = JSON.stringify({
            ...h,
            url: v
          }),
          b = await (0, s.JQ)(f);
        if (c) {
          if (g[b]?.response) return g[b].response;
          if (g[b]?.loading) return {
            error: null,
            result: null
          };
          g[b] = {
            loading: !0
          }
        }
        const k = await fetch(v, h),
          y = await k.json();
        return c && (g[b] = {
          response: y,
          loading: !1
        }), y
      }
    },
    8383: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => o
      });
      const s = window?.env?.sc,
        n = window?.env?.marketing,
        r = e => {
          let {
            apiHost: a,
            authHost: t,
            clientId: r,
            graphEnv: i,
            scHost: o,
            hostname: l,
            cdnBase: c,
            key: _,
            marketingAuthTLD: d
          } = e;
          const g = s?.apiHost ?? a,
            m = s?.authHost ?? t,
            u = s?.cdnBase ?? c,
            v = s?.clientId ?? r,
            p = n?.marketingAuthTLD ?? d,
            h = s?.scHost ?? o;
          return {
            apiHost: `https://${g}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? i,
            host: h,
            hostname: l,
            cdnBase: u,
            key: _,
            clientId: v,
            authHost: m,
            login: `https://${m}.rockstargames.com/connect/authorize/${v}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${v}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${v}`,
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
        r: () => s
      });
      const s = e => {
        const a = e.replace("_", "-");
        return "zh-hans" === a ? "zh-cn" : a
      }
    },
    9360: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => l
      });
      var s = t(7629),
        n = t.n(s);
      const r = (0, t(668).Z)(),
        i = r?.id,
        o = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const a = {
            ...e,
            environment: i,
            display_type: o
          };
          n().dataLayer({
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
      var s = t(1787),
        n = t(3577);
      const r = () => (0, s.lY)(n.SP);
      var i = t(279);
      const o = e => {
        const [a, t] = (0, i.useState)(null), [s, n] = (0, i.useState)(null), [r, o] = (0, i.useState)({});
        return (0, i.useLayoutEffect)((() => {
          let a = new Image,
            s = !1;
          return a.addEventListener("load", (() => {
            o({
              width: a.width,
              height: a.height
            }), a = null, s || t(!0)
          })), a.addEventListener("error", (() => {
            a = null, s || (t(!1), n(!0))
          })), a.src = e, () => {
            s = !0, null !== a && (a.src = "")
          }
        }), [e]), [a, r]
      };
      t(398), t(9560), t(6344), t(9615)
    },
    6210: (e, a, t) => {
      "use strict";
      t.d(a, {
        ph: () => L,
        ZF: () => y.Z,
        kX: () => p,
        E$: () => w.Z,
        s8: () => u,
        nT: () => C,
        IO: () => M,
        rz: () => x.r,
        Vg: () => k,
        bU: () => h.bU,
        TZ: () => h.TZ,
        TG: () => j,
        w_: () => O,
        zt: () => r,
        rE: () => l,
        zv: () => m
      });
      var s = t(9360),
        n = t(3705);
      const r = e => a => ((e, a) => (0, n.jsx)(e, {
        ...a,
        gtmTrack: e => {
          (0, s.Z)(e)
        }
      }))(e, a);
      var i = t(1787),
        o = t(3577);
      const l = e => a => ((e, a) => {
        const t = (0, i.lY)(o.SP);
        return (0, n.jsx)(e, {
          ...a,
          locale: t
        })
      })(e, a);
      var c = t(279),
        _ = t(5370),
        d = t.n(_),
        g = t(3791);
      const m = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return t => ((e, a, t) => {
            const s = function() {
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
            return s ? (0, n.jsx)(e, {
              ...a,
              t: s
            }) : null
          })(e, t, a)
        },
        u = e => e.keys().forEach(e),
        v = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        p = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return v.filter((a => a.key === (e ? "prod" : "dev")))[0]?.path ?? null
        };
      var h = t(4262);
      const f = (0, i.QS)(!0),
        b = "data-disallow-body-scroll",
        k = () => {
          const e = (0, i.lY)(f);
          return (0, c.useEffect)((() => {
            e ? document.documentElement.removeAttribute(b) : document.documentElement.setAttribute(b, "")
          }), [e]), {
            bodyIsScrollable: e,
            setBodyIsScrollable: f
          }
        };
      var y = t(9560),
        w = t(8383),
        x = t(7349);
      const M = e => {
          const a = d().clone(e);
          return a?.["margin-top"] && (a.marginTop = a["margin-top"]), a?.["margin-bottom"] && (a.marginBottom = a["margin-bottom"]), a?.["margin-left"] && (a.marginLeft = a["margin-left"]), a?.["margin-right"] && (a.marginRight = a["margin-right"]), a?.["object-fit"] && (a.objectFit = a["object-fit"]), delete a?.["margin-top"], delete a?.["margin-bottom"], delete a?.["margin-right"], delete a?.["margin-left"], delete a?.["object-fit"], a
        },
        S = "rockstar-games-web";
      let T;
      try {
        const e = window.localStorage.getItem(S);
        T = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        T = {}
      }
      const C = (0, i.QS)(T),
        N = e => {
          let {
            key: a,
            value: t
          } = e;
          if (null == a) throw Error("You have to specify a key and a value.");
          const s = {
            ...C() ?? {}
          };
          return s[a] = t, null === t && delete s[a], window.localStorage.setItem(S, JSON.stringify(s)), C(s), s
        },
        j = () => ({
          lsSettings: (0, i.lY)(C),
          settingsReactive: C,
          mutateLSSettings: N
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
        A = () => {
          const e = window.innerWidth,
            a = window.innerHeight,
            t = z;
          return Object.keys(z).map((a => {
            const {
              min: s,
              max: n
            } = z[a], r = e >= s && e <= n, i = e >= s;
            t[a] = {
              activeExact: r,
              activeMin: i,
              min: s,
              max: n
            }
          })), {
            isMobile: e <= z.sm.min,
            breakpoints: t,
            windowWidth: e,
            windowHeight: a
          }
        },
        E = (0, c.createContext)(A()),
        {
          Consumer: I
        } = E,
        P = (0, i.QS)(A()),
        L = e => {
          let {
            children: a
          } = e;
          const t = (0, i.lY)(P);
          return (0, c.useEffect)((() => {
            const e = () => {
              P(A())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, n.jsx)(E.Provider, {
            value: t,
            children: a
          })
        },
        O = () => (0, c.useContext)(E);
      t(9615)
    },
    6344: (e, a, t) => {
      "use strict";
      var s = t(279);
      t(3705);
      const n = (0, s.createContext)(),
        {
          Consumer: r
        } = n
    },
    9615: (e, a, t) => {
      "use strict";
      var s = t(1787);
      t(279), t(3705), (0, s.QS)(!1)
    },
    668: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r,
        z: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        n = [{
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
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = n.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, n] = a;
            return n === t && (e = {
              site: s,
              subDomain: n
            }, !0)
          })) >= 0));
          return {
            ...n[s >= 0 ? s : 0],
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
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
          end: 963
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    8300: (e, a, t) => {
      var s = {
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
      s.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function r(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !n[a] && (n[a] = !0, !0)
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
      s.definitions = s.definitions.concat(r(t(5101).definitions)), s.definitions = s.definitions.concat(r(t(2849).definitions));
      var o = {};

      function l(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), o[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = o[a] || new Set,
          n = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var i = r;
          r = new Set, i.forEach((function(e) {
            n.has(e) || (n.add(e), (o[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = l(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.paging = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.Meta = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.VideosList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.userData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "userData")
    },
    2322: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "abc123"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "abc123"
              },
              name: {
                kind: "Name",
                value: "abc123Aa73120ec29e42c87d5233b2f9a126277a5e3b8d9553ed992da0adf6a277bb2c"
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
          end: 183
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query abc123($locale: String!) {\n    abc123: abc123Aa73120ec29e42c87d5233b2f9a126277a5e3b8d9553ed992da0adf6a277bb2c(\n        locale: $locale\n    ) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.abc123 = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "abc123")
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TagList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.Translations = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "Translations")
    },
    7474: (e, a, t) => {
      var s = {
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

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 7474
    },
    8948: (e, a, t) => {
      var s = {
        "./cero_a.png": 676,
        "./cero_b.svg": 6504,
        "./cero_c.svg": 6702,
        "./cero_d.svg": 4858,
        "./cero_rp.png": 5794,
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
        "./pegi_rp.png": 9170,
        "./rars_0.svg": 1964,
        "./rars_12.svg": 5871,
        "./rars_16.svg": 9671,
        "./rars_18.svg": 9731,
        "./rars_6.svg": 3707,
        "./usk_0.svg": 5793,
        "./usk_12.svg": 1663,
        "./usk_16.svg": 5751,
        "./usk_18.svg": 3296,
        "./usk_6.svg": 24,
        "./usk_rp.svg": 2248,
        "./vaci_rp.png": 8666
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 8948
    },
    8214: (e, a, t) => {
      var s = {
        "./cero_a.png": 676,
        "./cero_b.svg": 6504,
        "./cero_c.svg": 6702,
        "./cero_d.svg": 4858,
        "./cero_rp.png": 5794,
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
        "./pegi_rp.png": 9170,
        "./rars_0.svg": 1964,
        "./rars_12.svg": 5871,
        "./rars_16.svg": 9671,
        "./rars_18.svg": 9731,
        "./rars_6.svg": 3707,
        "./usk_0.svg": 5793,
        "./usk_12.svg": 1663,
        "./usk_16.svg": 5751,
        "./usk_18.svg": 3296,
        "./usk_6.svg": 24,
        "./usk_rp.svg": 2248,
        "./vaci_rp.png": 8666
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 8214
    },
    6628: (e, a, t) => {
      var s = {
        "./bounty.png": 5583,
        "./collector.png": 2985,
        "./moonshiner.png": 8361,
        "./naturalist.png": 8884,
        "./trader.png": 7016
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 6628
    },
    3093: (e, a, t) => {
      var s = {
        "./hero-mobile.jpg": 9906,
        "./hero.jpg": 1903,
        "./hero_0.jpg": 3752,
        "./hero_00.jpg": 2508,
        "./hero_00_L.png": 8215,
        "./hero_00_R.png": 4493,
        "./hero_1.png": 2847,
        "./hero_2.png": 892,
        "./hero_3.png": 3416,
        "./hero_logo.png": 6700,
        "./logo_primary.svg": 615,
        "./logo_rockstar.svg": 2981,
        "./logo_rockstar_gold.svg": 7267,
        "./logo_secondary_color.png": 2785,
        "./logo_secondary_mask.svg": 8597,
        "./logo_secondary_stroke.svg": 5030,
        "./play.svg": 7236,
        "./playstation.svg": 9954,
        "./xbox.svg": 4401
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 3093
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
    5794: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
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
    9170: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
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
    2248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    8666: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
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
    },
    9906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
    },
    1903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f7eab33a4989ce5f0cd89c70723909b3.jpg"
    },
    3752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/309aa5a460fa7144f3633cf36159c417.jpg"
    },
    2508: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cff62fb2b8dc824b667505750129bd4d.jpg"
    },
    8215: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c762105ff73b658b9e0d5373b9f6a476.png"
    },
    4493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1fd72e459fc90381589af486ab6b029.png"
    },
    2847: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/530ffb0c42c0c18dcacbeb49c6587895.png"
    },
    892: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/52c0b621f342d970c1e7726a83094887.png"
    },
    3416: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4bc6cd678f5391e5108a0e7fc1828436.png"
    },
    6700: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b3f050fed97a2b5bd571123c1a302593.png"
    },
    615: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f37e3b93d105ed47dff3a5083ba21dd9.svg"
    },
    2981: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52ba580606a589f4ac105866012722.svg"
    },
    7267: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c151d539436aaf8c9460d25e88a9307a.svg"
    },
    2785: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d358ca0f4ef1b724361c30dd82547992.png"
    },
    8597: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa598c85c9406b0078e3db23e2b605a8.svg"
    },
    5030: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4933ca1111cda1074c52c3918dbfbaf2.svg"
    },
    7236: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46b63430f04ecee9ad59d197168370a0.svg"
    },
    9954: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e47fca9e280c162468fe51d577f6db1.svg"
    },
    4401: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb63e6e7c7df7dcec0a9e0908e8b5d2.svg"
    }
  }
]);