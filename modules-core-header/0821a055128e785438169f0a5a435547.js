/*! For license information please see 0821a055128e785438169f0a5a435547.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [926], {
    1787: (e, a, t) => {
      "use strict";
      t.d(a, {
        QS: () => n.QS,
        BS: () => N,
        M9: () => U,
        ZA: () => g.ZA,
        qs: () => C,
        Db: () => w,
        aM: () => y,
        lY: () => s.l,
        XW: () => I,
        cC: () => P,
        yx: () => A,
        eJ: () => M,
        dd: () => $
      });
      var n = t(9551),
        s = t(2997),
        r = t(279),
        i = t(5672),
        o = t(2213),
        l = t(895),
        _ = t(7605),
        c = t(5370),
        d = t.n(c),
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
            error: l,
            ...c
          } = (0, _.a)(e, n);
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
          if (n.autoSetError && l) throw new Error(String(l))
        }), [l]), {
          loading: o,
          error: l,
          data: i,
          ...c
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
        C = () => (0, r.useContext)(S);
      var T = t(588);
      const N = e => {
          const a = "__makevars__";
          return window?.[a] || (window[a] = {}), window?.[a]?.[e] || (window[a][e] = {}), ((e, a) => (t, s) => {
            const r = window?.[e]?.[a]?.[t] ?? (0, n.QS)(s);
            return window[e][a][t] = r, r
          })(a, e)
        },
        j = N("graph-token-provider"),
        z = (0, r.createContext)({
          token: j("token", null),
          tokenPing: "",
          tokenPingExpires: j("tokenPingExpires", null)
        }),
        E = e => {
          let {
            children: a,
            token: t,
            tokenPing: n,
            tokenPingExpires: s
          } = e;
          return (0, u.jsx)(z.Provider, {
            value: {
              token: t,
              tokenPing: n,
              tokenPingExpires: s
            },
            children: a
          })
        },
        A = () => {
          const {
            token: e,
            tokenPing: a,
            tokenPingExpires: t
          } = (0, r.useContext)(z);
          return [e, a, t]
        },
        I = () => {
          const [e] = A();
          return (0, s.l)(e)
        },
        P = () => {
          const [e, a, t] = A();
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
                  tokenExpiresTime: l = null
                } = o;
              return null !== l && n?.(l), t(o.bearerToken ?? null), o
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
              l = G.concat((e => {
                let {
                  token: a
                } = e;
                return (0, L.v)(((e, t) => {
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
              }).concat((e => (0, O.L)({
                ...e,
                fetch: R()
              }))({
                ...a,
                uri: n
              })));
            return new o.f({
              cache: s,
              link: l
            })
          })({
            graphOptions: t,
            typePolicies: n
          });
          return (0, u.jsx)(E, {
            token: t?.token,
            tokenPing: t?.tokenPing,
            tokenPingExpires: t?.tokenPingExpires,
            children: (0, u.jsx)(T.e, {
              client: s,
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
            typePolicies: n,
            token: s = q("token", null),
            tokenPingExpires: r = q("tokenPingExpires", null),
            tokenPing: i = null
          } = a;
          return function(a) {
            return (0, u.jsx)(F, {
              typePolicies: n,
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: s,
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
        SP: () => s,
        ZA: () => d
      });
      var n = t(9551);
      const s = (0, n.QS)(document.documentElement.lang),
        r = window?.env;
      (0, n.QS)({
        media: r?.cdn?.media,
        videos: r?.cdn?.videos
      });
      var i = t(2997);
      const o = document.currentScript,
        l = o?.src ? new URL(o.src).origin : "";
      let _ = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${l}/`;
      _.endsWith("/") || (_ = `${_}/`);
      const c = (0, n.QS)(_),
        d = () => (0, i.l)(c)
    },
    6420: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => Tu
      });
      var n = {};
      t.r(n), t.d(n, {
        beaterator: () => T_,
        bully: () => N_,
        careers: () => j_,
        gta: () => z_,
        gta2: () => E_,
        gta3: () => A_,
        gta4: () => I_,
        gta5: () => P_,
        gtaAdvance: () => L_,
        gtaCtw: () => O_,
        gtaIvEflc: () => D_,
        gtaLcs: () => R_,
        gtaLondon: () => V_,
        gtaOnline: () => B_,
        gtaPlus: () => G_,
        gtaSanAndreas: () => F_,
        gtaTrilogy: () => q_,
        gtaVc: () => $_,
        gtaVcs: () => U_,
        laNoire: () => H_,
        manhunt: () => W_,
        manhunt2: () => X_,
        maxPayne: () => Y_,
        maxPayne2: () => J_,
        maxPayne3: () => Z_,
        midnightclub: () => K_,
        midnightclub2: () => Q_,
        midnightclub3: () => ec,
        midnightclubStreetRacing: () => ac,
        oni: () => tc,
        readDeadOnline: () => nc,
        redDeadRedemption: () => sc,
        redDeadRedemption2: () => rc,
        redDeadRedemptionUndeadNightmare: () => ic,
        redDeadRevolver: () => oc,
        rsg: () => lc,
        skateAndDestroy: () => cc,
        smugglersRun: () => dc,
        smugglersRun2: () => gc,
        smugglersRunWarzones: () => mc,
        stateOfEmergency: () => _c,
        support: () => uc,
        tableTennis: () => vc,
        theItalianJob: () => pc,
        theWarriors: () => hc,
        wildMetal: () => fc
      });
      var s = {};
      t.r(s), t.d(s, {
        beaterator: () => gm,
        bully: () => um,
        careers: () => mm,
        gta: () => vm,
        gta2: () => pm,
        gta3: () => hm,
        gta4: () => fm,
        gta5: () => bm,
        gtaadvance: () => km,
        gtactw: () => ym,
        gtaiveflc: () => wm,
        gtalcs: () => xm,
        gtalondon: () => Mm,
        gtaonline: () => Sm,
        gtaplus: () => Cm,
        gtasanandreas: () => Tm,
        gtatrilogy: () => Nm,
        gtav: () => bm,
        gtavc: () => jm,
        gtavcs: () => zm,
        lanoire: () => Em,
        manhunt: () => Am,
        manhunt2: () => Im,
        manhunt3: () => Pm,
        maxpayne: () => Lm,
        maxpayne2: () => Om,
        maxpayne3: () => Dm,
        midnightclub2: () => Rm,
        midnightclub3dub: () => Vm,
        midnightclubla: () => Bm,
        midnightclubstreetracing: () => Gm,
        oni: () => Fm,
        reddeadonline: () => qm,
        reddeadredemption: () => $m,
        reddeadredemption2: () => Um,
        reddeadredemptionundeadnightmare: () => Hm,
        reddeadrevolver: () => Wm,
        rockstar: () => Xm,
        smugglersrun: () => Ym,
        smugglersrun2hostileterritory: () => Jm,
        smugglersrunwarzones: () => Zm,
        stateofemergency: () => Km,
        tabletennis: () => Qm,
        theitalianjob: () => eu,
        thewarriors: () => au,
        thrashersad: () => tu,
        wildmetal: () => nu
      });
      var r = t(3645),
        i = t(9089),
        o = t(2596),
        l = t(279),
        _ = t(9894),
        c = t(3705);
      const d = e => {
        let {
          locales: a,
          lang: t,
          children: n
        } = e;
        const s = (0, l.useMemo)((() => function(e) {
            let [a, t] = e.split(/[-_]/);
            return t = t.toLowerCase(), "cn" === t && (t = "hans"), [a, t]
          }(t)), [t]),
          r = (0, l.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, s[1])), [t, a]);
        return (0, c.jsx)(_.Z, {
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
              n = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== a.indexOf(t[n]) ? t[n] : null
          })(e), n = (e => {
            const a = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return a?.split("=")[1]
          })(e), s = u, [r, i] = function(e, a) {
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
          return o = a.currentSite?.site === v.z.www ? m.find((e => e.subdomaincom === n)) || m.find((e => e.subdomaincom === t)) || s : m.find((e => e.iso === r)) || s, [o, i]
        };
      var b = t(1787),
        k = t(6210),
        y = t(2620);
      const w = (0, b.BS)("@rockstargames/modules-core-sc-user"),
        x = w("navOpenReactive", !1),
        M = e => x(e),
        S = w("jumpScMenuFocusReactive", !1),
        C = e => S(e),
        T = w("hasNotificationsReactive", !1),
        N = e => T(e),
        j = w("currentCharIdReactive", null),
        z = e => j(e),
        E = w("selectedCharacterTupleReactive", null),
        A = e => E(e),
        I = w(null),
        P = w("charactersNeededReactive", null),
        L = e => P(e),
        O = w("userDataReactive", null),
        D = e => O(e),
        R = () => {
          const e = (0, b.lY)(P),
            a = (0, b.lY)(j),
            t = (0, b.lY)(x),
            n = (0, b.lY)(T),
            s = (0, b.lY)(E);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: n,
            navOpen: t,
            userData: (0, b.lY)(O),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, b.lY)(S),
            setCharactersNeeded: L,
            setCurrentCharId: z,
            setHasNotifications: N,
            setNavOpen: M,
            setSelectedCharacterTuple: A,
            setUserData: D,
            setJumpScMenuFocus: C
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
            [n, s] = (0, l.useState)(!0),
            [r, , i] = (0, b.yx)(),
            o = (0, b.cC)(),
            {
              refetch: _
            } = (0, b.aM)(y.userData, {
              skip: !0,
              context: {
                uri: $
              }
            }),
            [c, d] = (0, l.useState)(null),
            [g, m] = (0, l.useState)(!1),
            [u, v] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            (async () => {
              const n = null === e ? null : !!e;
              if (n && !g) {
                s(!0), m(!0);
                const e = await _(),
                  n = e?.data?.user?.id,
                  r = await (async e => {
                    let {
                      pingBearer: a,
                      rockstarId: t
                    } = e;
                    const {
                      crews: n
                    } = await (0, k.ZF)("crew/forMember", {
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
                      r = await (0, k.ZF)("profile/playedplatforms?game=gtav", {
                        pingBearer: a
                      });
                    if (await (r?.platforms?.reduce((async (e, t) => {
                        if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                        const n = await (0, k.ZF)(`games/gtao/characters?platform=${t}`, {
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
                    } = await (0, k.ZF)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
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
                        l = "";
                      r?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (l = e.userName), e))), s.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), s.map(((e, a) => (e.platformUsername = i, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = l || i), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || i), e)))
                    })), s) : s
                  })({
                    pingBearer: o,
                    nickname: e?.data?.user?.nickname,
                    rockstarId: n
                  }),
                  l = {
                    ...a,
                    ...e?.data?.user,
                    crews: r,
                    characters: {
                      gtao: i
                    }
                  };
                s(!1), t(l), d(!0), I(n)
              }
              if (!1 === n && !u) {
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
                        bearerToken: l,
                        tokenExpiresTime: _
                      } = await o.json();
                    return a(l), t(_), l
                  })({
                    token: r,
                    tokenPingExpires: i
                  })
                } catch (e) {}
                v(!0)
              }!1 === n && u && (m(!0), d(!1), s(!1)), null === e && o()
            })()
          }), [e, g, u]), {
            data: a,
            loading: n,
            loggedIn: c
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
        X = window?.[W] ?? (window[W] = (0, l.createContext)(H)),
        Y = e => {
          let {
            children: a
          } = e;
          const t = U(),
            n = (0, l.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, c.jsx)(X.Provider, {
            value: n,
            children: a
          })
        },
        J = () => (0, l.useContext)(X);
      t(7629);
      var Z = t(9360),
        K = t(398);
      const Q = (0, l.createContext)(void 0),
        ee = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const n = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, l.useState)([]), [n, s] = (0, l.useState)([]), [r, i] = (0, l.useState)(null), {
                data: o,
                loggedIn: _
              } = J(), c = (e, n) => {
                const s = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = n ?? {};
                    (0, Z.Z)({
                      ...e,
                      ...a
                    }), s.push(e)
                  }
                })), t([...a, ...s])
              };
              (0, l.useEffect)((() => {
                if (o && null !== _) {
                  const e = d(o);
                  n.length && e && c(n, e), i(e)
                } else e || n.length && c(n)
              }), [o, _, n]), (0, l.useEffect)((() => {
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
                  login_state: _ ?? !1,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: n.length ? n.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === _ || !o || !r) {
                    const a = [...n];
                    return a.push({
                      ...e
                    }), s(a)
                  }
                  return (0, Z.Z)({
                    ...e,
                    ...r
                  })
                }
              }
            }(a),
            s = (0, l.useMemo)((() => n), [n, a]);
          return (0, c.jsx)(Q.Provider, {
            value: s,
            children: t
          })
        },
        ae = {
          track: () => null
        },
        te = () => (0, l.useContext)(Q) ?? ae;
      var ne = t(3747);
      const se = e => {
        let {
          basename: a,
          children: t,
          history: n
        } = e;
        const [s, r] = (0, l.useState)({
          action: n.action,
          location: n.location
        });
        return (0, l.useLayoutEffect)((() => n.listen(((e, a) => {
          r({
            location: e,
            action: a
          })
        }))), [n]), (0, c.jsx)(ne.Router, {
          basename: a,
          location: s.location,
          navigationType: s.action,
          navigator: n,
          children: t
        })
      };
      var re = t(7199);
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
      var le = t(4319);
      let _e, ce, de, ge, me, ue, ve, pe, he, fe, be, ke = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        ye = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        we = 1e8,
        xe = 1e-8,
        Me = 2 * Math.PI,
        Se = Me / 4,
        Ce = 0,
        Te = Math.sqrt,
        Ne = Math.cos,
        je = Math.sin,
        ze = e => "string" == typeof e,
        Ee = e => "function" == typeof e,
        Ae = e => "number" == typeof e,
        Ie = e => void 0 === e,
        Pe = e => "object" == typeof e,
        Le = e => !1 !== e,
        Oe = () => "undefined" != typeof window,
        De = e => Ee(e) || ze(e),
        Re = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Ve = Array.isArray,
        Be = /(?:-?\.?\d|\.)+/gi,
        Ge = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Fe = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        qe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        $e = /[+-]=-?[.\d]+/,
        Ue = /[^,'"\[\]\s]+/gi,
        He = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        We = {},
        Xe = {},
        Ye = e => (Xe = Ma(e, We)) && Nn,
        Je = (e, a) => console.warn("Invalid property", e, "set to", a, "Missing plugin? gsap.registerPlugin()"),
        Ze = (e, a) => !a && console.warn(e),
        Ke = (e, a) => e && (We[e] = a) && Xe && (Xe[e] = a) || We,
        Qe = () => 0,
        ea = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        aa = {
          suppressEvents: !0,
          kill: !1
        },
        ta = {
          suppressEvents: !0
        },
        na = {},
        sa = [],
        ra = {},
        ia = {},
        oa = {},
        la = 30,
        _a = [],
        ca = "",
        da = e => {
          let a, t, n = e[0];
          if (Pe(n) || Ee(n) || (e = [e]), !(a = (n._gsap || {}).harness)) {
            for (t = _a.length; t-- && !_a[t].targetTest(n););
            a = _a[t]
          }
          for (t = e.length; t--;) e[t] && (e[t]._gsap || (e[t]._gsap = new Gt(e[t], a))) || e.splice(t, 1);
          return e
        },
        ga = e => e._gsap || da(at(e))[0]._gsap,
        ma = (e, a, t) => (t = e[a]) && Ee(t) ? e[a]() : Ie(t) && e.getAttribute && e.getAttribute(a) || t,
        ua = (e, a) => (e = e.split(",")).forEach(a) || e,
        va = e => Math.round(1e5 * e) / 1e5 || 0,
        pa = e => Math.round(1e7 * e) / 1e7 || 0,
        ha = (e, a) => {
          let t = a.charAt(0),
            n = parseFloat(a.substr(2));
          return e = parseFloat(e), "+" === t ? e + n : "-" === t ? e - n : "*" === t ? e * n : e / n
        },
        fa = (e, a) => {
          let t = a.length,
            n = 0;
          for (; e.indexOf(a[n]) < 0 && ++n < t;);
          return n < t
        },
        ba = () => {
          let e, a, t = sa.length,
            n = sa.slice(0);
          for (ra = {}, sa.length = 0, e = 0; e < t; e++) a = n[e], a && a._lazy && (a.render(a._lazy[0], a._lazy[1], !0)._lazy = 0)
        },
        ka = (e, a, t, n) => {
          sa.length && !ce && ba(), e.render(a, t, n || ce && a < 0 && (e._initted || e._startAt)), sa.length && !ce && ba()
        },
        ya = e => {
          let a = parseFloat(e);
          return (a || 0 === a) && (e + "").match(Ue).length < 2 ? a : ze(e) ? e.trim() : e
        },
        wa = e => e,
        xa = (e, a) => {
          for (let t in a) t in e || (e[t] = a[t]);
          return e
        },
        Ma = (e, a) => {
          for (let t in a) e[t] = a[t];
          return e
        },
        Sa = (e, a) => {
          for (let t in a) "__proto__" !== t && "constructor" !== t && "prototype" !== t && (e[t] = Pe(a[t]) ? Sa(e[t] || (e[t] = {}), a[t]) : a[t]);
          return e
        },
        Ca = (e, a) => {
          let t, n = {};
          for (t in e) t in a || (n[t] = e[t]);
          return n
        },
        Ta = e => {
          let a = e.parent || ge,
            t = e.keyframes ? (n = Ve(e.keyframes), (e, a) => {
              for (let t in a) t in e || "duration" === t && n || "ease" === t || (e[t] = a[t])
            }) : xa;
          var n;
          if (Le(e.inherit))
            for (; a;) t(e, a.vars.defaults), a = a.parent || a._dp;
          return e
        },
        Na = function(e, a) {
          let t, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            r = arguments.length > 4 ? arguments[4] : void 0,
            i = e[s];
          if (r)
            for (t = a[r]; i && i[r] > t;) i = i._prev;
          return i ? (a._next = i._next, i._next = a) : (a._next = e[n], e[n] = a), a._next ? a._next._prev = a : e[s] = a, a._prev = i, a.parent = a._dp = e, a
        },
        ja = function(e, a) {
          let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            s = a._prev,
            r = a._next;
          s ? s._next = r : e[t] === a && (e[t] = r), r ? r._prev = s : e[n] === a && (e[n] = s), a._next = a._prev = a.parent = null
        },
        za = (e, a) => {
          e.parent && (!a || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        Ea = (e, a) => {
          if (e && (!a || a._end > e._dur || a._start < 0)) {
            let a = e;
            for (; a;) a._dirty = 1, a = a.parent
          }
          return e
        },
        Aa = (e, a, t, n) => e._startAt && (ce ? e._startAt.revert(aa) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(a, !0, n)),
        Ia = e => !e || e._ts && Ia(e.parent),
        Pa = e => e._repeat ? La(e._tTime, e = e.duration() + e._rDelay) * e : 0,
        La = (e, a) => {
          let t = Math.floor(e /= a);
          return e && t === e ? t - 1 : t
        },
        Oa = (e, a) => (e - a._start) * a._ts + (a._ts >= 0 ? 0 : a._dirty ? a.totalDuration() : a._tDur),
        Da = e => e._end = pa(e._start + (e._tDur / Math.abs(e._ts || e._rts || xe) || 0)),
        Ra = (e, a) => {
          let t = e._dp;
          return t && t.smoothChildTiming && e._ts && (e._start = pa(t._time - (e._ts > 0 ? a / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - a) / -e._ts)), Da(e), t._dirty || Ea(t, e)), e
        },
        Va = (e, a) => {
          let t;
          if ((a._time || !a._dur && a._initted || a._start < e._time && (a._dur || !a.add)) && (t = Oa(e.rawTime(), a), (!a._dur || Za(0, a.totalDuration(), t) - a._tTime > xe) && a.render(t, !0)), Ea(e, a)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (t = e; t._dp;) t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
            e._zTime = -1e-8
          }
        },
        Ba = (e, a, t, n) => (a.parent && za(a), a._start = pa((Ae(t) ? t : t || e !== ge ? Xa(e, t, a) : e._time) + a._delay), a._end = pa(a._start + (a.totalDuration() / Math.abs(a.timeScale()) || 0)), Na(e, a, "_first", "_last", e._sort ? "_start" : 0), $a(a) || (e._recent = a), n || Va(e, a), e._ts < 0 && Ra(e, e._tTime), e),
        Ga = (e, a) => (We.ScrollTrigger || Je("scrollTrigger", a)) && We.ScrollTrigger.create(a, e),
        Fa = (e, a, t, n, s) => (Yt(e, a, s), e._initted ? !t && e._pt && !ce && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && he !== Nt.frame ? (sa.push(e), e._lazy = [s, n], 1) : void 0 : 1),
        qa = e => {
          let {
            parent: a
          } = e;
          return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || qa(a))
        },
        $a = e => {
          let {
            data: a
          } = e;
          return "isFromStart" === a || "isStart" === a
        },
        Ua = (e, a, t, n) => {
          let s = e._repeat,
            r = pa(a) || 0,
            i = e._tTime / e._tDur;
          return i && !n && (e._time *= r / e._dur), e._dur = r, e._tDur = s ? s < 0 ? 1e10 : pa(r * (s + 1) + e._rDelay * s) : r, i > 0 && !n && Ra(e, e._tTime = e._tDur * i), e.parent && Da(e), t || Ea(e.parent, e), e
        },
        Ha = e => e instanceof qt ? Ea(e) : Ua(e, e._dur),
        Wa = {
          _start: 0,
          endTime: Qe,
          totalDuration: Qe
        },
        Xa = (e, a, t) => {
          let n, s, r, i = e.labels,
            o = e._recent || Wa,
            l = e.duration() >= we ? o.endTime(!1) : e._dur;
          return ze(a) && (isNaN(a) || a in i) ? (s = a.charAt(0), r = "%" === a.substr(-1), n = a.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (a = a.replace(/=/, "")), ("<" === s ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(a.substr(1)) || 0) * (r ? (n < 0 ? o : t).totalDuration() / 100 : 1)) : n < 0 ? (a in i || (i[a] = l), i[a]) : (s = parseFloat(a.charAt(n - 1) + a.substr(n + 1)), r && t && (s = s / 100 * (Ve(t) ? t[0] : t).totalDuration()), n > 1 ? Xa(e, a.substr(0, n - 1), t) + s : l + s)) : null == a ? l : +a
        },
        Ya = (e, a, t) => {
          let n, s, r = Ae(a[1]),
            i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            o = a[i];
          if (r && (o.duration = a[1]), o.parent = t, e) {
            for (n = o, s = t; s && !("immediateRender" in n);) n = s.vars.defaults || {}, s = Le(s.vars.inherit) && s.parent;
            o.immediateRender = Le(n.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = a[i - 1]
          }
          return new en(a[0], o, a[i + 1])
        },
        Ja = (e, a) => e || 0 === e ? a(e) : a,
        Za = (e, a, t) => t < e ? e : t > a ? a : t,
        Ka = (e, a) => ze(e) && (a = He.exec(e)) ? a[1] : "",
        Qa = [].slice,
        et = (e, a) => e && Pe(e) && "length" in e && (!a && !e.length || e.length - 1 in e && Pe(e[0])) && !e.nodeType && e !== me,
        at = (e, a, t) => de && !a && de.selector ? de.selector(e) : !ze(e) || t || !ue && jt() ? Ve(e) ? function(e, a) {
          let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return e.forEach((e => ze(e) && !a || et(e, 1) ? t.push(...at(e)) : t.push(e))) || t
        }(e, t) : et(e) ? Qa.call(e, 0) : e ? [e] : [] : Qa.call((a || ve).querySelectorAll(e), 0),
        tt = e => (e = at(e)[0] || Ze("Invalid scope") || {}, a => {
          let t = e.current || e.nativeElement || e;
          return at(a, t.querySelectorAll ? t : t === e ? Ze("Invalid scope") || ve.createElement("div") : e)
        }),
        nt = e => e.sort((() => .5 - Math.random())),
        st = e => {
          if (Ee(e)) return e;
          let a = Pe(e) ? e : {
              each: e
            },
            t = Ot(a.ease),
            n = a.from || 0,
            s = parseFloat(a.base) || 0,
            r = {},
            i = n > 0 && n < 1,
            o = isNaN(n) || i,
            l = a.axis,
            _ = n,
            c = n;
          return ze(n) ? _ = c = {
            center: .5,
            edges: .5,
            end: 1
          } [n] || 0 : !i && o && (_ = n[0], c = n[1]), (e, i, d) => {
            let g, m, u, v, p, h, f, b, k, y = (d || a).length,
              w = r[y];
            if (!w) {
              if (k = "auto" === a.grid ? 0 : (a.grid || [1, we])[1], !k) {
                for (f = -we; f < (f = d[k++].getBoundingClientRect().left) && k < y;);
                k--
              }
              for (w = r[y] = [], g = o ? Math.min(k, y) * _ - .5 : n % k, m = k === we ? 0 : o ? y * c / k - .5 : n / k | 0, f = 0, b = we, h = 0; h < y; h++) u = h % k - g, v = m - (h / k | 0), w[h] = p = l ? Math.abs("y" === l ? v : u) : Te(u * u + v * v), p > f && (f = p), p < b && (b = p);
              "random" === n && nt(w), w.max = f - b, w.min = b, w.v = y = (parseFloat(a.amount) || parseFloat(a.each) * (k > y ? y - 1 : l ? "y" === l ? y / k : k : Math.max(k, y / k)) || 0) * ("edges" === n ? -1 : 1), w.b = y < 0 ? s - y : s, w.u = Ka(a.amount || a.each) || 0, t = t && y < 0 ? Pt(t) : t
            }
            return y = (w[e] - w.min) / w.max || 0, pa(w.b + (t ? t(y) : y) * w.v) + w.u
          }
        },
        rt = e => {
          let a = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return t => {
            let n = pa(Math.round(parseFloat(t) / e) * e * a);
            return (n - n % 1) / a + (Ae(t) ? 0 : Ka(t))
          }
        },
        it = (e, a) => {
          let t, n, s = Ve(e);
          return !s && Pe(e) && (t = s = e.radius || we, e.values ? (e = at(e.values), (n = !Ae(e[0])) && (t *= t)) : e = rt(e.increment)), Ja(a, s ? Ee(e) ? a => (n = e(a), Math.abs(n - a) <= t ? n : a) : a => {
            let s, r, i = parseFloat(n ? a.x : a),
              o = parseFloat(n ? a.y : 0),
              l = we,
              _ = 0,
              c = e.length;
            for (; c--;) n ? (s = e[c].x - i, r = e[c].y - o, s = s * s + r * r) : s = Math.abs(e[c] - i), s < l && (l = s, _ = c);
            return _ = !t || l <= t ? e[_] : a, n || _ === a || Ae(a) ? _ : _ + Ka(a)
          } : rt(e))
        },
        ot = (e, a, t, n) => Ja(Ve(e) ? !a : !0 === t ? !!(t = 0) : !n, (() => Ve(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (n = t < 1 ? 10 ** ((t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (a - e + .99 * t)) / t) * t * n) / n)),
        lt = (e, a, t) => Ja(t, (t => e[~~a(t)])),
        _t = function(e, a, t) {
          let n = a - e;
          return Ve(e) ? lt(e, _t(0, e.length), a) : Ja(t, (a => (n + (a - e) % n) % n + e))
        },
        ct = (e, a, t) => {
          let n = a - e,
            s = 2 * n;
          return Ve(e) ? lt(e, ct(0, e.length - 1), a) : Ja(t, (a => e + ((a = (s + (a - e) % s) % s || 0) > n ? s - a : a)))
        },
        dt = e => {
          let a, t, n, s, r = 0,
            i = "";
          for (; ~(a = e.indexOf("random(", r));) n = e.indexOf(")", a), s = "[" === e.charAt(a + 7), t = e.substr(a + 7, n - a - 7).match(s ? Ue : Be), i += e.substr(r, a - r) + ot(s ? t : +t[0], s ? 0 : +t[1], +t[2] || 1e-5), r = n + 1;
          return i + e.substr(r, e.length - r)
        },
        gt = (e, a, t, n, s) => {
          let r = a - e,
            i = n - t;
          return Ja(s, (a => t + ((a - e) / r * i || 0)))
        },
        mt = (e, a, t, n) => {
          let s = isNaN(e + a) ? 0 : t => (1 - t) * e + t * a;
          if (!s) {
            let r, i, o, l, _, c = ze(e),
              d = {};
            if (!0 === t && (n = 1) && (t = null), c) e = {
              p: e
            }, a = {
              p: a
            };
            else if (Ve(e) && !Ve(a)) {
              for (o = [], l = e.length, _ = l - 2, i = 1; i < l; i++) o.push(mt(e[i - 1], e[i]));
              l--, s = e => {
                e *= l;
                let a = Math.min(_, ~~e);
                return o[a](e - a)
              }, t = a
            } else n || (e = Ma(Ve(e) ? [] : {}, e));
            if (!o) {
              for (r in a) Wt.call(d, e, r, "get", a[r]);
              s = a => cn(a, d) || (c ? e.p : e)
            }
          }
          return Ja(t, s)
        },
        ut = (e, a, t) => {
          let n, s, r, i = e.labels,
            o = we;
          for (n in i) s = i[n] - a, s < 0 == !!t && s && o > (s = Math.abs(s)) && (r = n, o = s);
          return r
        },
        vt = (e, a, t) => {
          let n, s, r, i = e.vars,
            o = i[a],
            l = de,
            _ = e._ctx;
          if (o) return n = i[a + "Params"], s = i.callbackScope || e, t && sa.length && ba(), _ && (de = _), r = n ? o.apply(s, n) : o.call(s), de = l, r
        },
        pt = e => (za(e), e.scrollTrigger && e.scrollTrigger.kill(!!ce), e.progress() < 1 && vt(e, "onInterrupt"), e),
        ht = [],
        ft = e => {
          if (Oe() && e) {
            let a = (e = !e.name && e.default || e).name,
              t = Ee(e),
              n = a && !t && e.init ? function() {
                this._props = []
              } : e,
              s = {
                init: Qe,
                render: cn,
                add: Wt,
                kill: gn,
                modifier: dn,
                rawVars: 0
              },
              r = {
                targetTest: 0,
                get: 0,
                getSetter: rn,
                aliases: {},
                register: 0
              };
            if (jt(), e !== n) {
              if (ia[a]) return;
              xa(n, xa(Ca(e, s), r)), Ma(n.prototype, Ma(s, Ca(e, r))), ia[n.prop = a] = n, e.targetTest && (_a.push(n), na[a] = 1), a = ("css" === a ? "CSS" : a.charAt(0).toUpperCase() + a.substr(1)) + "Plugin"
            }
            Ke(a, n), e.register && e.register(Nn, n, vn)
          } else e && ht.push(e)
        },
        bt = 255,
        kt = {
          aqua: [0, bt, bt],
          lime: [0, bt, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, bt],
          navy: [0, 0, 128],
          white: [bt, bt, bt],
          olive: [128, 128, 0],
          yellow: [bt, bt, 0],
          orange: [bt, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [bt, 0, 0],
          pink: [bt, 192, 203],
          cyan: [0, bt, bt],
          transparent: [bt, bt, bt, 0]
        },
        yt = (e, a, t) => (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? a + (t - a) * e * 6 : e < .5 ? t : 3 * e < 2 ? a + (t - a) * (2 / 3 - e) * 6 : a) * bt + .5 | 0,
        wt = (e, a, t) => {
          let n, s, r, i, o, l, _, c, d, g, m = e ? Ae(e) ? [e >> 16, e >> 8 & bt, e & bt] : 0 : kt.black;
          if (!m) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), kt[e]) m = kt[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), r = e.charAt(3), e = "#" + n + n + s + s + r + r + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return m = parseInt(e.substr(1, 6), 16), [m >> 16, m >> 8 & bt, m & bt, parseInt(e.substr(7), 16) / 255];
              m = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & bt, e & bt]
            } else if ("hsl" === e.substr(0, 3))
              if (m = g = e.match(Be), a) {
                if (~e.indexOf("=")) return m = e.match(Ge), t && m.length < 4 && (m[3] = 1), m
              } else i = +m[0] % 360 / 360, o = +m[1] / 100, l = +m[2] / 100, s = l <= .5 ? l * (o + 1) : l + o - l * o, n = 2 * l - s, m.length > 3 && (m[3] *= 1), m[0] = yt(i + 1 / 3, n, s), m[1] = yt(i, n, s), m[2] = yt(i - 1 / 3, n, s);
            else m = e.match(Be) || kt.transparent;
            m = m.map(Number)
          }
          return a && !g && (n = m[0] / bt, s = m[1] / bt, r = m[2] / bt, _ = Math.max(n, s, r), c = Math.min(n, s, r), l = (_ + c) / 2, _ === c ? i = o = 0 : (d = _ - c, o = l > .5 ? d / (2 - _ - c) : d / (_ + c), i = _ === n ? (s - r) / d + (s < r ? 6 : 0) : _ === s ? (r - n) / d + 2 : (n - s) / d + 4, i *= 60), m[0] = ~~(i + .5), m[1] = ~~(100 * o + .5), m[2] = ~~(100 * l + .5)), t && m.length < 4 && (m[3] = 1), m
        },
        xt = e => {
          let a = [],
            t = [],
            n = -1;
          return e.split(St).forEach((e => {
            let s = e.match(Fe) || [];
            a.push(...s), t.push(n += s.length + 1)
          })), a.c = t, a
        },
        Mt = (e, a, t) => {
          let n, s, r, i, o = "",
            l = (e + o).match(St),
            _ = a ? "hsla(" : "rgba(",
            c = 0;
          if (!l) return e;
          if (l = l.map((e => (e = wt(e, a, 1)) && _ + (a ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), t && (r = xt(e), n = t.c, n.join(o) !== r.c.join(o)))
            for (s = e.replace(St, "1").split(Fe), i = s.length - 1; c < i; c++) o += s[c] + (~n.indexOf(c) ? l.shift() || _ + "0,0,0,0)" : (r.length ? r : l.length ? l : t).shift());
          if (!s)
            for (s = e.split(St), i = s.length - 1; c < i; c++) o += s[c] + l[c];
          return o + s[i]
        },
        St = function() {
          let e, a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in kt) a += "|" + e + "\\b";
          return new RegExp(a + ")", "gi")
        }(),
        Ct = /hsl[a]?\(/,
        Tt = e => {
          let a, t = e.join(" ");
          if (St.lastIndex = 0, St.test(t)) return a = Ct.test(t), e[1] = Mt(e[1], a), e[0] = Mt(e[0], a, xt(e[1])), !0
        },
        Nt = function() {
          let e, a, t, n, s, r, i = Date.now,
            o = 500,
            l = 33,
            _ = i(),
            c = _,
            d = 1e3 / 240,
            g = d,
            m = [],
            u = t => {
              let v, p, h, f, b = i() - c,
                k = !0 === t;
              if (b > o && (_ += b - l), c += b, h = c - _, v = h - g, (v > 0 || k) && (f = ++n.frame, s = h - 1e3 * n.time, n.time = h /= 1e3, g += v + (v >= d ? 4 : d - v), p = 1), k || (e = a(u)), p)
                for (r = 0; r < m.length; r++) m[r](h, s, f, t)
            };
          return n = {
            time: 0,
            frame: 0,
            tick() {
              u(!0)
            },
            deltaRatio: e => s / (1e3 / (e || 60)),
            wake() {
              pe && (!ue && Oe() && (me = ue = window, ve = me.document || {}, We.gsap = Nn, (me.gsapVersions || (me.gsapVersions = [])).push(Nn.version), Ye(Xe || me.GreenSockGlobals || !me.gsap && me || {}), t = me.requestAnimationFrame, ht.forEach(ft)), e && n.sleep(), a = t || (e => setTimeout(e, g - 1e3 * n.time + 1 | 0)), be = 1, u(2))
            },
            sleep() {
              (t ? me.cancelAnimationFrame : clearTimeout)(e), be = 0, a = Qe
            },
            lagSmoothing(e, a) {
              o = e || 1 / 0, l = Math.min(a || 33, o)
            },
            fps(e) {
              d = 1e3 / (e || 240), g = 1e3 * n.time + d
            },
            add(e, a, t) {
              let s = a ? (a, t, r, i) => {
                e(a, t, r, i), n.remove(s)
              } : e;
              return n.remove(e), m[t ? "unshift" : "push"](s), jt(), s
            },
            remove(e, a) {
              ~(a = m.indexOf(e)) && m.splice(a, 1) && r >= a && r--
            },
            _listeners: m
          }, n
        }(),
        jt = () => !be && Nt.wake(),
        zt = {},
        Et = /^[\d.\-M][\d.\-,\s]/,
        At = /["']/g,
        It = e => {
          let a, t, n, s = {},
            r = e.substr(1, e.length - 3).split(":"),
            i = r[0],
            o = 1,
            l = r.length;
          for (; o < l; o++) t = r[o], a = o !== l - 1 ? t.lastIndexOf(",") : t.length, n = t.substr(0, a), s[i] = isNaN(n) ? n.replace(At, "").trim() : +n, i = t.substr(a + 1).trim();
          return s
        },
        Pt = e => a => 1 - e(1 - a),
        Lt = (e, a) => {
          let t, n = e._first;
          for (; n;) n instanceof qt ? Lt(n, a) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === a || (n.timeline ? Lt(n.timeline, a) : (t = n._ease, n._ease = n._yEase, n._yEase = t, n._yoyo = a)), n = n._next
        },
        Ot = (e, a) => e && (Ee(e) ? e : zt[e] || (e => {
          let a = (e + "").split("("),
            t = zt[a[0]];
          return t && a.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [It(a[1])] : (e => {
            let a = e.indexOf("(") + 1,
              t = e.indexOf(")"),
              n = e.indexOf("(", a);
            return e.substring(a, ~n && n < t ? e.indexOf(")", t + 1) : t)
          })(e).split(",").map(ya)) : zt._CE && Et.test(e) ? zt._CE("", e) : t
        })(e)) || a,
        Dt = function(e, a) {
          let t, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => 1 - a(1 - e),
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e < .5 ? a(2 * e) / 2 : 1 - a(2 * (1 - e)) / 2,
            r = {
              easeIn: a,
              easeOut: n,
              easeInOut: s
            };
          return ua(e, (e => {
            zt[e] = We[e] = r, zt[t = e.toLowerCase()] = n;
            for (let a in r) zt[t + ("easeIn" === a ? ".in" : "easeOut" === a ? ".out" : ".inOut")] = zt[e + "." + a] = r[a]
          })), r
        },
        Rt = e => a => a < .5 ? (1 - e(1 - 2 * a)) / 2 : .5 + e(2 * (a - .5)) / 2,
        Vt = (e, a, t) => {
          let n = a >= 1 ? a : 1,
            s = (t || (e ? .3 : .45)) / (a < 1 ? a : 1),
            r = s / Me * (Math.asin(1 / n) || 0),
            i = e => 1 === e ? 1 : n * 2 ** (-10 * e) * je((e - r) * s) + 1,
            o = "out" === e ? i : "in" === e ? e => 1 - i(1 - e) : Rt(i);
          return s = Me / s, o.config = (a, t) => Vt(e, a, t), o
        },
        Bt = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            t = e => e ? --e * e * ((a + 1) * e + a) + 1 : 0,
            n = "out" === e ? t : "in" === e ? e => 1 - t(1 - e) : Rt(t);
          return n.config = a => Bt(e, a), n
        };
      ua("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, a) => {
        let t = a < 5 ? a + 1 : a;
        Dt(e + ",Power" + (t - 1), a ? e => e ** t : e => e, (e => 1 - (1 - e) ** t), (e => e < .5 ? (2 * e) ** t / 2 : 1 - (2 * (1 - e)) ** t / 2))
      })), zt.Linear.easeNone = zt.none = zt.Linear.easeIn, Dt("Elastic", Vt("in"), Vt("out"), Vt()), ((e, a) => {
        let t = t => t < .36363636363636365 ? e * t * t : t < .7272727272727273 ? e * (t - 1.5 / a) ** 2 + .75 : t < .9090909090909092 ? e * (t -= 2.25 / a) * t + .9375 : e * (t - 2.625 / a) ** 2 + .984375;
        Dt("Bounce", (e => 1 - t(1 - e)), t)
      })(7.5625, 2.75), Dt("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Dt("Circ", (e => -(Te(1 - e * e) - 1))), Dt("Sine", (e => 1 === e ? 1 : 1 - Ne(e * Se))), Dt("Back", Bt("in"), Bt("out"), Bt()), zt.SteppedEase = zt.steps = We.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            a = arguments.length > 1 ? arguments[1] : void 0,
            t = 1 / e,
            n = e + (a ? 0 : 1),
            s = a ? 1 : 0;
          return e => ((n * Za(0, .99999999, e) | 0) + s) * t
        }
      }, ye.ease = zt["quad.out"], ua("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => ca += e + "," + e + "Params,"));
      class Gt {
        constructor(e, a) {
          this.id = Ce++, e._gsap = this, this.target = e, this.harness = a, this.get = a ? a.get : ma, this.set = a ? a.getSetter : rn
        }
      }
      class Ft {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ua(this, +e.duration, 1, 1), this.data = e.data, de && (this._ctx = de, de.data.push(this)), be || Nt.wake()
        }
        delay(e) {
          return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
        }
        duration(e) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }
        totalDuration(e) {
          return arguments.length ? (this._dirty = 0, Ua(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        totalTime(e, a) {
          if (jt(), !arguments.length) return this._tTime;
          let t = this._dp;
          if (t && t.smoothChildTiming && this._ts) {
            for (Ra(this, e), !t._dp || t.parent || Va(t, this); t && t.parent;) t.parent._time !== t._start + (t._ts >= 0 ? t._tTime / t._ts : (t.totalDuration() - t._tTime) / -t._ts) && t.totalTime(t._tTime, !0), t = t.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Ba(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== e || !this._dur && !a || this._initted && Math.abs(this._zTime) === xe || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), ka(this, e, a)), this
        }
        time(e, a) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Pa(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), a) : this._time
        }
        totalProgress(e, a) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, a) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        progress(e, a) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Pa(this), a) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        iteration(e, a) {
          let t = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (e - 1) * t, a) : this._repeat ? La(this._tTime, t) + 1 : 1
        }
        timeScale(e) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === e) return this;
          let a = this.parent && this._ts ? Oa(this.parent._time, this) : this._tTime;
          return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Za(-Math.abs(this._delay), this._tDur, a), !0), Da(this), (e => {
            let a = e.parent;
            for (; a && a.parent;) a._dirty = 1, a.totalDuration(), a = a.parent;
            return e
          })(this)
        }
        paused(e) {
          return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (jt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== xe && (this._tTime -= xe)))), this) : this._ps
        }
        startTime(e) {
          if (arguments.length) {
            this._start = e;
            let a = this.parent || this._dp;
            return a && (a._sort || !this.parent) && Ba(a, this, e - this._delay), this
          }
          return this._start
        }
        endTime(e) {
          return this._start + (Le(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        rawTime(e) {
          let a = this.parent || this._dp;
          return a ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Oa(a.rawTime(e), this) : this._tTime : this._tTime
        }
        revert() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ta,
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
          return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Ha(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        repeatDelay(e) {
          if (arguments.length) {
            let a = this._time;
            return this._rDelay = e, Ha(this), a ? this.time(a) : this
          }
          return this._rDelay
        }
        yoyo(e) {
          return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }
        seek(e, a) {
          return this.totalTime(Xa(this, e), Le(a))
        }
        restart(e, a) {
          return this.play().totalTime(e ? -this._delay : 0, Le(a))
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
          return !(a && !(this._ts && this._initted && a.isActive() && (e = a.rawTime(!0)) >= t && e < this.endTime(!0) - xe))
        }
        eventCallback(e, a, t) {
          let n = this.vars;
          return arguments.length > 1 ? (a ? (n[e] = a, t && (n[e + "Params"] = t), "onUpdate" === e && (this._onUpdate = a)) : delete n[e], this) : n[e]
        }
        then(e) {
          let a = this;
          return new Promise((t => {
            let n = Ee(e) ? e : wa,
              s = () => {
                let e = a.then;
                a.then = null, Ee(n) && (n = n(a)) && (n.then || n === a) && (a.then = e), t(n), a.then = e
              };
            a._initted && 1 === a.totalProgress() && a._ts >= 0 || !a._tTime && a._ts < 0 ? s() : a._prom = s
          }))
        }
        kill() {
          pt(this)
        }
      }
      xa(Ft.prototype, {
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
      class qt extends Ft {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments.length > 1 ? arguments[1] : void 0;
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = Le(e.sortChildren), ge && Ba(e.parent || ge, this, a), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && Ga(this, e.scrollTrigger)
        }
        to(e, a, t) {
          return Ya(0, arguments, this), this
        }
        from(e, a, t) {
          return Ya(1, arguments, this), this
        }
        fromTo(e, a, t, n) {
          return Ya(2, arguments, this), this
        }
        set(e, a, t) {
          return a.duration = 0, a.parent = this, Ta(a).repeatDelay || (a.repeat = 0), a.immediateRender = !!a.immediateRender, new en(e, a, Xa(this, t), 1), this
        }
        call(e, a, t) {
          return Ba(this, en.delayedCall(0, e, a), t)
        }
        staggerTo(e, a, t, n, s, r, i) {
          return t.duration = a, t.stagger = t.stagger || n, t.onComplete = r, t.onCompleteParams = i, t.parent = this, new en(e, t, Xa(this, s)), this
        }
        staggerFrom(e, a, t, n, s, r, i) {
          return t.runBackwards = 1, Ta(t).immediateRender = Le(t.immediateRender), this.staggerTo(e, a, t, n, s, r, i)
        }
        staggerFromTo(e, a, t, n, s, r, i, o) {
          return n.startAt = t, Ta(n).immediateRender = Le(n.immediateRender), this.staggerTo(e, a, n, s, r, i, o)
        }
        render(e, a, t) {
          let n, s, r, i, o, l, _, c, d, g, m, u, v = this._time,
            p = this._dirty ? this.totalDuration() : this._tDur,
            h = this._dur,
            f = e <= 0 ? 0 : pa(e),
            b = this._zTime < 0 != e < 0 && (this._initted || !h);
          if (this !== ge && f > p && e >= 0 && (f = p), f !== this._tTime || t || b) {
            if (v !== this._time && h && (f += this._time - v, e += this._time - v), n = f, d = this._start, c = this._ts, l = !c, b && (h || (v = this._zTime), (e || !a) && (this._zTime = e)), this._repeat) {
              if (m = this._yoyo, o = h + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * o + e, a, t);
              if (n = pa(f % o), f === p ? (i = this._repeat, n = h) : (i = ~~(f / o), i && i === f / o && (n = h, i--), n > h && (n = h)), g = La(this._tTime, o), !v && this._tTime && g !== i && this._tTime - g * o - this._dur <= 0 && (g = i), m && 1 & i && (n = h - n, u = 1), i !== g && !this._lock) {
                let e = m && 1 & g,
                  t = e === (m && 1 & i);
                if (i < g && (e = !e), v = e ? 0 : f % h ? h : f, this._lock = 1, this.render(v || (u ? 0 : pa(i * o)), a, !h)._lock = 0, this._tTime = f, !a && this.parent && vt(this, "onRepeat"), this.vars.repeatRefresh && !u && (this.invalidate()._lock = 1), v && v !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (h = this._dur, p = this._tDur, t && (this._lock = 2, v = e ? h : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !u && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                Lt(this, u)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (_ = ((e, a, t) => {
                let n;
                if (t > a)
                  for (n = e._first; n && n._start <= t;) {
                    if ("isPause" === n.data && n._start > a) return n;
                    n = n._next
                  } else
                    for (n = e._last; n && n._start >= t;) {
                      if ("isPause" === n.data && n._start < a) return n;
                      n = n._prev
                    }
              })(this, pa(v), pa(n)), _ && (f -= n - (n = _._start))), this._tTime = f, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, v = 0), !v && n && !a && !i && (vt(this, "onStart"), this._tTime !== f)) return this;
            if (n >= v && e >= 0)
              for (s = this._first; s;) {
                if (r = s._next, (s._act || n >= s._start) && s._ts && _ !== s) {
                  if (s.parent !== this) return this.render(e, a, t);
                  if (s.render(s._ts > 0 ? (n - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts, a, t), n !== this._time || !this._ts && !l) {
                    _ = 0, r && (f += this._zTime = -1e-8);
                    break
                  }
                }
                s = r
              } else {
                s = this._last;
                let i = e < 0 ? e : n;
                for (; s;) {
                  if (r = s._prev, (s._act || i <= s._end) && s._ts && _ !== s) {
                    if (s.parent !== this) return this.render(e, a, t);
                    if (s.render(s._ts > 0 ? (i - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (i - s._start) * s._ts, a, t || ce && (s._initted || s._startAt)), n !== this._time || !this._ts && !l) {
                      _ = 0, r && (f += this._zTime = i ? -1e-8 : xe);
                      break
                    }
                  }
                  s = r
                }
              }
            if (_ && !a && (this.pause(), _.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1, this._ts)) return this._start = d, Da(this), this.render(e, a, t);
            this._onUpdate && !a && vt(this, "onUpdate", !0), (f === p && this._tTime >= this.totalDuration() || !f && v) && (d !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((e || !h) && (f === p && this._ts > 0 || !f && this._ts < 0) && za(this, 1), a || e < 0 && !v || !f && !v && p || (vt(this, f === p && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < p && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(e, a) {
          if (Ae(a) || (a = Xa(this, a, e)), !(e instanceof Ft)) {
            if (Ve(e)) return e.forEach((e => this.add(e, a))), this;
            if (ze(e)) return this.addLabel(e, a);
            if (!Ee(e)) return this;
            e = en.delayedCall(0, e)
          }
          return this !== e ? Ba(this, e, a) : this
        }
        getChildren() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -we,
            s = [],
            r = this._first;
          for (; r;) r._start >= n && (r instanceof en ? a && s.push(r) : (t && s.push(r), e && s.push(...r.getChildren(!0, a, t)))), r = r._next;
          return s
        }
        getById(e) {
          let a = this.getChildren(1, 1, 1),
            t = a.length;
          for (; t--;)
            if (a[t].vars.id === e) return a[t]
        }
        remove(e) {
          return ze(e) ? this.removeLabel(e) : Ee(e) ? this.killTweensOf(e) : (ja(this, e), e === this._recent && (this._recent = this._last), Ea(this))
        }
        totalTime(e, a) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = pa(Nt.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), super.totalTime(e, a), this._forcing = 0, this) : this._tTime
        }
        addLabel(e, a) {
          return this.labels[e] = Xa(this, a), this
        }
        removeLabel(e) {
          return delete this.labels[e], this
        }
        addPause(e, a, t) {
          let n = en.delayedCall(0, a || Qe, t);
          return n.data = "isPause", this._hasPause = 1, Ba(this, n, Xa(this, e))
        }
        removePause(e) {
          let a = this._first;
          for (e = Xa(this, e); a;) a._start === e && "isPause" === a.data && za(a), a = a._next
        }
        killTweensOf(e, a, t) {
          let n = this.getTweensOf(e, t),
            s = n.length;
          for (; s--;) $t !== n[s] && n[s].kill(e, a);
          return this
        }
        getTweensOf(e, a) {
          let t, n = [],
            s = at(e),
            r = this._first,
            i = Ae(a);
          for (; r;) r instanceof en ? fa(r._targets, s) && (i ? (!$t || r._initted && r._ts) && r.globalTime(0) <= a && r.globalTime(r.totalDuration()) > a : !a || r.isActive()) && n.push(r) : (t = r.getTweensOf(s, a)).length && n.push(...t), r = r._next;
          return n
        }
        tweenTo(e, a) {
          a = a || {};
          let t, n = this,
            s = Xa(n, e),
            {
              startAt: r,
              onStart: i,
              onStartParams: o,
              immediateRender: l
            } = a,
            _ = en.to(n, xa({
              ease: a.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: s,
              overwrite: "auto",
              duration: a.duration || Math.abs((s - (r && "time" in r ? r.time : n._time)) / n.timeScale()) || xe,
              onStart: () => {
                if (n.pause(), !t) {
                  let e = a.duration || Math.abs((s - (r && "time" in r ? r.time : n._time)) / n.timeScale());
                  _._dur !== e && Ua(_, e, 0, 1).render(_._time, !0, !0), t = 1
                }
                i && i.apply(_, o || [])
              }
            }, a));
          return l ? _.render(0) : _
        }
        tweenFromTo(e, a, t) {
          return this.tweenTo(a, xa({
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
          return ut(this, Xa(this, e))
        }
        previousLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return ut(this, Xa(this, e), 1)
        }
        currentLabel(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + xe)
        }
        shiftChildren(e, a) {
          let t, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            s = this._first,
            r = this.labels;
          for (; s;) s._start >= n && (s._start += e, s._end += e), s = s._next;
          if (a)
            for (t in r) r[t] >= n && (r[t] += e);
          return Ea(this)
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
          return this._dp && (this._time = this._tTime = this._pTime = 0), a && (this.labels = {}), Ea(this)
        }
        totalDuration(e) {
          let a, t, n, s = 0,
            r = this,
            i = r._last,
            o = we;
          if (arguments.length) return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -e : e));
          if (r._dirty) {
            for (n = r.parent; i;) a = i._prev, i._dirty && i.totalDuration(), t = i._start, t > o && r._sort && i._ts && !r._lock ? (r._lock = 1, Ba(r, i, t - i._delay, 1)._lock = 0) : o = t, t < 0 && i._ts && (s -= t, (!n && !r._dp || n && n.smoothChildTiming) && (r._start += t / r._ts, r._time -= t, r._tTime -= t), r.shiftChildren(-t, !1, -Infinity), o = 0), i._end > s && i._ts && (s = i._end), i = a;
            Ua(r, r === ge && r._time > s ? r._time : s, 1, 1), r._dirty = 0
          }
          return r._tDur
        }
        static updateRoot(e) {
          if (ge._ts && (ka(ge, Oa(e, ge)), he = Nt.frame), Nt.frame >= la) {
            la += ke.autoSleep || 120;
            let e = ge._first;
            if ((!e || !e._ts) && ke.autoSleep && Nt._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || Nt.sleep()
            }
          }
        }
      }
      xa(qt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let $t, Ut, Ht = function(e, a, t, n, s, r, i) {
          let o, l, _, c, d, g, m, u, v = new vn(this._pt, e, a, 0, 1, _n, null, s),
            p = 0,
            h = 0;
          for (v.b = t, v.e = n, t += "", (m = ~(n += "").indexOf("random(")) && (n = dt(n)), r && (u = [t, n], r(u, e, a), t = u[0], n = u[1]), l = t.match(qe) || []; o = qe.exec(n);) c = o[0], d = n.substring(p, o.index), _ ? _ = (_ + 1) % 5 : "rgba(" === d.substr(-5) && (_ = 1), c !== l[h++] && (g = parseFloat(l[h - 1]) || 0, v._pt = {
            _next: v._pt,
            p: d || 1 === h ? d : ",",
            s: g,
            c: "=" === c.charAt(1) ? ha(g, c) - g : parseFloat(c) - g,
            m: _ && _ < 4 ? Math.round : 0
          }, p = qe.lastIndex);
          return v.c = p < n.length ? n.substring(p, n.length) : "", v.fp = i, ($e.test(n) || m) && (v.e = 0), this._pt = v, v
        },
        Wt = function(e, a, t, n, s, r, i, o, l, _) {
          Ee(n) && (n = n(s || 0, e, r));
          let c, d = e[a],
            g = "get" !== t ? t : Ee(d) ? l ? e[a.indexOf("set") || !Ee(e["get" + a.substr(3)]) ? a : "get" + a.substr(3)](l) : e[a]() : d,
            m = Ee(d) ? l ? nn : tn : an;
          if (ze(n) && (~n.indexOf("random(") && (n = dt(n)), "=" === n.charAt(1) && (c = ha(g, n) + (Ka(g) || 0), (c || 0 === c) && (n = c))), !_ || g !== n || Ut) return isNaN(g * n) || "" === n ? (!d && !(a in e) && Je(a, n), Ht.call(this, e, a, g, n, m, o || ke.stringFilter, l)) : (c = new vn(this._pt, e, a, +g || 0, n - (g || 0), "boolean" == typeof d ? ln : on, 0, m), l && (c.fp = l), i && c.modifier(i, this, e), this._pt = c)
        },
        Xt = (e, a, t, n, s, r) => {
          let i, o, l, _;
          if (ia[e] && !1 !== (i = new ia[e]).init(s, i.rawVars ? a[e] : ((e, a, t, n, s) => {
              if (Ee(e) && (e = Zt(e, s, a, t, n)), !Pe(e) || e.style && e.nodeType || Ve(e) || Re(e)) return ze(e) ? Zt(e, s, a, t, n) : e;
              let r, i = {};
              for (r in e) i[r] = Zt(e[r], s, a, t, n);
              return i
            })(a[e], n, s, r, t), t, n, r) && (t._pt = o = new vn(t._pt, s, e, 0, 1, i.render, i, 0, i.priority), t !== fe))
            for (l = t._ptLookup[t._targets.indexOf(s)], _ = i._props.length; _--;) l[i._props[_]] = o;
          return i
        },
        Yt = (e, a, t) => {
          let n, s, r, i, o, l, _, c, d, g, m, u, v, p = e.vars,
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
              keyframes: C,
              autoRevert: T
            } = p,
            N = e._dur,
            j = e._startAt,
            z = e._targets,
            E = e.parent,
            A = E && "nested" === E.data ? E.vars.targets : z,
            I = "auto" === e._overwrite && !_e,
            P = e.timeline;
          if (P && (!C || !h) && (h = "none"), e._ease = Ot(h, ye.ease), e._yEase = S ? Pt(Ot(!0 === S ? h : S, ye.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), e._from = !P && !!p.runBackwards, !P || C && !p.stagger) {
            if (c = z[0] ? ga(z[0]).harness : 0, u = c && p[c.prop], n = Ca(p, na), j && (j._zTime < 0 && j.progress(1), a < 0 && M && b && !T ? j.render(-1, !0) : j.revert(M && N ? aa : ea), j._lazy = 0), f) {
              if (za(e._startAt = en.set(z, xa({
                  data: "isStart",
                  overwrite: !1,
                  parent: E,
                  immediateRender: !0,
                  lazy: !j && Le(k),
                  startAt: null,
                  delay: 0,
                  onUpdate: y,
                  onUpdateParams: w,
                  callbackScope: x,
                  stagger: 0
                }, f))), e._startAt._dp = 0, e._startAt._sat = e, a < 0 && (ce || !b && !T) && e._startAt.revert(aa), b && N && a <= 0 && t <= 0) return void(a && (e._zTime = a))
            } else if (M && N && !j)
              if (a && (b = !1), r = xa({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: b && !j && Le(k),
                  immediateRender: b,
                  stagger: 0,
                  parent: E
                }, n), u && (r[c.prop] = u), za(e._startAt = en.set(z, r)), e._startAt._dp = 0, e._startAt._sat = e, a < 0 && (ce ? e._startAt.revert(aa) : e._startAt.render(-1, !0)), e._zTime = a, b) {
                if (!a) return
              } else Yt(e._startAt, xe, xe);
            for (e._pt = e._ptCache = 0, k = N && Le(k) || k && !N, s = 0; s < z.length; s++) {
              if (o = z[s], _ = o._gsap || da(z)[s]._gsap, e._ptLookup[s] = g = {}, ra[_.id] && sa.length && ba(), m = A === z ? s : A.indexOf(o), c && !1 !== (d = new c).init(o, u || n, e, m, A) && (e._pt = i = new vn(e._pt, o, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach((e => {
                  g[e] = i
                })), d.priority && (l = 1)), !c || u)
                for (r in n) ia[r] && (d = Xt(r, n, e, m, o, A)) ? d.priority && (l = 1) : g[r] = i = Wt.call(e, o, r, "get", n[r], m, A, 0, p.stringFilter);
              e._op && e._op[s] && e.kill(o, e._op[s]), I && e._pt && ($t = e, ge.killTweensOf(o, g, e.globalTime(a)), v = !e.parent, $t = 0), e._pt && k && (ra[_.id] = 1)
            }
            l && un(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = y, e._initted = (!e._op || e._pt) && !v, C && a <= 0 && P.render(we, !0, !0)
        },
        Jt = (e, a, t, n) => {
          let s, r, i = a.ease || n || "power1.inOut";
          if (Ve(a)) r = t[e] || (t[e] = []), a.forEach(((e, t) => r.push({
            t: t / (a.length - 1) * 100,
            v: e,
            e: i
          })));
          else
            for (s in a) r = t[s] || (t[s] = []), "ease" === s || r.push({
              t: parseFloat(e),
              v: a[s],
              e: i
            })
        },
        Zt = (e, a, t, n, s) => Ee(e) ? e.call(a, t, n, s) : ze(e) && ~e.indexOf("random(") ? dt(e) : e,
        Kt = ca + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Qt = {};
      ua(Kt + ",id,stagger,delay,duration,paused,scrollTrigger", (e => Qt[e] = 1));
      class en extends Ft {
        constructor(e, a, t, n) {
          "number" == typeof a && (t.duration = a, a = t, t = null), super(n ? a : Ta(a));
          let s, r, i, o, l, _, c, d, {
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
            y = a.parent || ge,
            w = (Ve(e) || Re(e) ? Ae(e[0]) : "length" in a) ? [e] : at(e);
          if (this._targets = w.length ? da(w) : Ze("GSAP target " + e + " not found. https://greensock.com", !ke.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = p, h || v || De(g) || De(m)) {
            if (a = this.vars, s = this.timeline = new qt({
                data: "nested",
                defaults: f || {},
                targets: y && "nested" === y.data ? y.vars.targets : w
              }), s.kill(), s.parent = s._dp = this, s._start = 0, v || De(g) || De(m)) {
              if (o = w.length, c = v && st(v), Pe(v))
                for (l in v) ~Kt.indexOf(l) && (d || (d = {}), d[l] = v[l]);
              for (r = 0; r < o; r++) i = Ca(a, Qt), i.stagger = 0, k && (i.yoyoEase = k), d && Ma(i, d), _ = w[r], i.duration = +Zt(g, this, r, _, w), i.delay = (+Zt(m, this, r, _, w) || 0) - this._delay, !v && 1 === o && i.delay && (this._delay = m = i.delay, this._start += m, i.delay = 0), s.to(_, i, c ? c(r, _, w) : 0), s._ease = zt.none;
              s.duration() ? g = m = 0 : this.timeline = 0
            } else if (h) {
              Ta(xa(s.vars.defaults, {
                ease: "none"
              })), s._ease = Ot(h.ease || a.ease || "none");
              let e, t, n, o = 0;
              if (Ve(h)) h.forEach((e => s.to(w, e, ">"))), s.duration();
              else {
                for (l in i = {}, h) "ease" === l || "easeEach" === l || Jt(l, h[l], i, h.easeEach);
                for (l in i)
                  for (e = i[l].sort(((e, a) => e.t - a.t)), o = 0, r = 0; r < e.length; r++) t = e[r], n = {
                    ease: t.e,
                    duration: (t.t - (r ? e[r - 1].t : 0)) / 100 * g
                  }, n[l] = t.v, s.to(w, n, o), o += n.duration;
                s.duration() < g && s.to({}, {
                  duration: g - s.duration()
                })
              }
            }
            g || this.duration(g = s.duration())
          } else this.timeline = 0;
          !0 !== p || _e || ($t = this, ge.killTweensOf(w), $t = 0), Ba(y, this, t), a.reversed && this.reverse(), a.paused && this.paused(!0), (u || !g && !h && this._start === pa(y._time) && Le(u) && Ia(this) && "nested" !== y.data) && (this._tTime = -1e-8, this.render(Math.max(0, -m) || 0)), b && Ga(this, b)
        }
        render(e, a, t) {
          let n, s, r, i, o, l, _, c, d, g = this._time,
            m = this._tDur,
            u = this._dur,
            v = e < 0,
            p = e > m - xe && !v ? m : e < xe ? 0 : e;
          if (u) {
            if (p !== this._tTime || !e || t || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== v) {
              if (n = p, c = this.timeline, this._repeat) {
                if (i = u + this._rDelay, this._repeat < -1 && v) return this.totalTime(100 * i + e, a, t);
                if (n = pa(p % i), p === m ? (r = this._repeat, n = u) : (r = ~~(p / i), r && r === p / i && (n = u, r--), n > u && (n = u)), l = this._yoyo && 1 & r, l && (d = this._yEase, n = u - n), o = La(this._tTime, i), n === g && !t && this._initted) return this._tTime = p, this;
                r !== o && (c && this._yEase && Lt(c, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = t = 1, this.render(pa(i * r), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Fa(this, v ? e : n, t, a, p)) return this._tTime = 0, this;
                if (g !== this._time) return this;
                if (u !== this._dur) return this.render(e, a, t)
              }
              if (this._tTime = p, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = _ = (d || this._ease)(n / u), this._from && (this.ratio = _ = 1 - _), n && !g && !a && !r && (vt(this, "onStart"), this._tTime !== p)) return this;
              for (s = this._pt; s;) s.r(_, s.d), s = s._next;
              c && c.render(e < 0 ? e : !n && l ? -1e-8 : c._dur * c._ease(n / this._dur), a, t) || this._startAt && (this._zTime = e), this._onUpdate && !a && (v && Aa(this, e, 0, t), vt(this, "onUpdate")), this._repeat && r !== o && this.vars.onRepeat && !a && this.parent && vt(this, "onRepeat"), p !== this._tDur && p || this._tTime !== p || (v && !this._onUpdate && Aa(this, e, 0, !0), (e || !u) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && za(this, 1), a || v && !g || !(p || g || l) || (vt(this, p === m ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < m && this.timeScale() > 0) && this._prom()))
            }
          } else((e, a, t, n) => {
            let s, r, i, o = e.ratio,
              l = a < 0 || !a && (!e._start && qa(e) && (e._initted || !$a(e)) || (e._ts < 0 || e._dp._ts < 0) && !$a(e)) ? 0 : 1,
              _ = e._rDelay,
              c = 0;
            if (_ && e._repeat && (c = Za(0, e._tDur, a), r = La(c, _), e._yoyo && 1 & r && (l = 1 - l), r !== La(e._tTime, _) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || ce || n || e._zTime === xe || !a && e._zTime) {
              if (!e._initted && Fa(e, a, n, t, c)) return;
              for (i = e._zTime, e._zTime = a || (t ? xe : 0), t || (t = a && !i), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = c, s = e._pt; s;) s.r(l, s.d), s = s._next;
              a < 0 && Aa(e, a, 0, !0), e._onUpdate && !t && vt(e, "onUpdate"), c && e._repeat && !t && e.parent && vt(e, "onRepeat"), (a >= e._tDur || a < 0) && e.ratio === l && (l && za(e, 1), t || ce || (vt(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
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
        resetTo(e, a, t, n) {
          be || Nt.wake(), this._ts || this.play();
          let s, r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Yt(this, r), s = this._ease(r / this._dur), ((e, a, t, n, s, r, i) => {
            let o, l, _, c, d = (e._pt && e._ptCache || (e._ptCache = {}))[a];
            if (!d)
              for (d = e._ptCache[a] = [], _ = e._ptLookup, c = e._targets.length; c--;) {
                if (o = _[c][a], o && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== a && o.fp !== a;) o = o._next;
                if (!o) return Ut = 1, e.vars[a] = "+=0", Yt(e, i), Ut = 0, 1;
                d.push(o)
              }
            for (c = d.length; c--;) l = d[c], o = l._pt || l, o.s = !n && 0 !== n || s ? o.s + (n || 0) + r * o.c : n, o.c = t - o.s, l.e && (l.e = va(t) + Ka(l.e)), l.b && (l.b = o.s + Ka(l.b))
          })(this, e, a, t, n, s, r) ? this.resetTo(e, a, t, n) : (Ra(this, 0), this.parent || Na(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(e || a && "all" !== a)) return this._lazy = this._pt = 0, this.parent ? pt(this) : this;
          if (this.timeline) {
            let t = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, a, $t && !0 !== $t.vars.overwrite)._first || pt(this), this.parent && t !== this.timeline.totalDuration() && Ua(this, this._dur * this.timeline._tDur / t, 0, 1), this
          }
          let t, n, s, r, i, o, l, _ = this._targets,
            c = e ? at(e) : _,
            d = this._ptLookup,
            g = this._pt;
          if ((!a || "all" === a) && ((e, a) => {
              let t = e.length,
                n = t === a.length;
              for (; n && t-- && e[t] === a[t];);
              return t < 0
            })(_, c)) return "all" === a && (this._pt = 0), pt(this);
          for ((t = this._op = this._op || [], "all" !== a && (ze(a) && (i = {}, ua(a, (e => i[e] = 1)), a = i), a = ((e, a) => {
              let t, n, s, r, i = e[0] ? ga(e[0]).harness : 0,
                o = i && i.aliases;
              if (!o) return a;
              for (n in t = Ma({}, a), o)
                if (n in t)
                  for (r = o[n].split(","), s = r.length; s--;) t[r[s]] = t[n];
              return t
            })(_, a)), l = _.length); l--;)
            if (~c.indexOf(_[l]))
              for (i in n = d[l], "all" === a ? (t[l] = a, r = n, s = {}) : (s = t[l] = t[l] || {}, r = a), r) o = n && n[i], o && ("kill" in o.d && !0 !== o.d.kill(i) || ja(this, o, "_pt"), delete n[i]), "all" !== s && (s[i] = 1);
          return this._initted && !this._pt && g && pt(this), this
        }
        static to(e, a) {
          return new en(e, a, arguments[2])
        }
        static from(e, a) {
          return Ya(1, arguments)
        }
        static delayedCall(e, a, t, n) {
          return new en(a, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: a,
            onReverseComplete: a,
            onCompleteParams: t,
            onReverseCompleteParams: t,
            callbackScope: n
          })
        }
        static fromTo(e, a, t) {
          return Ya(2, arguments)
        }
        static set(e, a) {
          return a.duration = 0, a.repeatDelay || (a.repeat = 0), new en(e, a)
        }
        static killTweensOf(e, a, t) {
          return ge.killTweensOf(e, a, t)
        }
      }
      xa(en.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), ua("staggerTo,staggerFrom,staggerFromTo", (e => {
        en[e] = function() {
          let a = new qt,
            t = Qa.call(arguments, 0);
          return t.splice("staggerFromTo" === e ? 5 : 4, 0, 0), a[e].apply(a, t)
        }
      }));
      let an = (e, a, t) => e[a] = t,
        tn = (e, a, t) => e[a](t),
        nn = (e, a, t, n) => e[a](n.fp, t),
        sn = (e, a, t) => e.setAttribute(a, t),
        rn = (e, a) => Ee(e[a]) ? tn : Ie(e[a]) && e.setAttribute ? sn : an,
        on = (e, a) => a.set(a.t, a.p, Math.round(1e6 * (a.s + a.c * e)) / 1e6, a),
        ln = (e, a) => a.set(a.t, a.p, !!(a.s + a.c * e), a),
        _n = function(e, a) {
          let t = a._pt,
            n = "";
          if (!e && a.b) n = a.b;
          else if (1 === e && a.e) n = a.e;
          else {
            for (; t;) n = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round(1e4 * (t.s + t.c * e)) / 1e4) + n, t = t._next;
            n += a.c
          }
          a.set(a.t, a.p, n, a)
        },
        cn = function(e, a) {
          let t = a._pt;
          for (; t;) t.r(e, t.d), t = t._next
        },
        dn = function(e, a, t, n) {
          let s, r = this._pt;
          for (; r;) s = r._next, r.p === n && r.modifier(e, a, t), r = s
        },
        gn = function(e) {
          let a, t, n = this._pt;
          for (; n;) t = n._next, n.p === e && !n.op || n.op === e ? ja(this, n, "_pt") : n.dep || (a = 1), n = t;
          return !a
        },
        mn = (e, a, t, n) => {
          n.mSet(e, a, n.m.call(n.tween, t, n.mt), n)
        },
        un = e => {
          let a, t, n, s, r = e._pt;
          for (; r;) {
            for (a = r._next, t = n; t && t.pr > r.pr;) t = t._next;
            (r._prev = t ? t._prev : s) ? r._prev._next = r: n = r, (r._next = t) ? t._prev = r : s = r, r = a
          }
          e._pt = n
        };
      class vn {
        constructor(e, a, t, n, s, r, i, o, l) {
          this.t = a, this.s = n, this.c = s, this.p = t, this.r = r || on, this.d = i || this, this.set = o || an, this.pr = l || 0, this._next = e, e && (e._prev = this)
        }
        modifier(e, a, t) {
          this.mSet = this.mSet || this.set, this.set = mn, this.m = e, this.mt = t, this.tween = a
        }
      }
      ua(ca + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => na[e] = 1)), We.TweenMax = We.TweenLite = en, We.TimelineLite = We.TimelineMax = qt, ge = new qt({
        sortChildren: !1,
        defaults: ye,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), ke.stringFilter = Tt;
      let pn = [],
        hn = {},
        fn = [],
        bn = 0,
        kn = 0,
        yn = e => (hn[e] || fn).map((e => e())),
        wn = () => {
          let e = Date.now(),
            a = [];
          e - bn > 2 && (yn("matchMediaInit"), pn.forEach((e => {
            let t, n, s, r, i = e.queries,
              o = e.conditions;
            for (n in i) t = me.matchMedia(i[n]).matches, t && (s = 1), t !== o[n] && (o[n] = t, r = 1);
            r && (e.revert(), s && a.push(e))
          })), yn("matchMediaRevert"), a.forEach((e => e.onMatch(e))), bn = e, yn("matchMedia"))
        };
      class xn {
        constructor(e, a) {
          this.selector = a && tt(a), this.data = [], this._r = [], this.isReverted = !1, this.id = kn++, e && this.add(e)
        }
        add(e, a, t) {
          Ee(e) && (t = a, a = e, e = Ee);
          let n = this,
            s = function() {
              let e, s = de,
                r = n.selector;
              return s && s !== n && s.data.push(n), t && (n.selector = tt(t)), de = n, e = a.apply(n, arguments), Ee(e) && n._r.push(e), de = s, n.selector = r, n.isReverted = !1, e
            };
          return n.last = s, e === Ee ? s(n) : e ? n[e] = s : s
        }
        ignore(e) {
          let a = de;
          de = null, e(this), de = a
        }
        getTweens() {
          let e = [];
          return this.data.forEach((a => a instanceof xn ? e.push(...a.getTweens()) : a instanceof en && !(a.parent && "nested" === a.parent.data) && e.push(a))), e
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
            }))).sort(((e, a) => a.g - e.g || -1 / 0)).forEach((a => a.t.revert(e))), this.data.forEach((a => !(a instanceof en) && a.revert && a.revert(e))), this._r.forEach((a => a(e, this))), this.isReverted = !0
          } else this.data.forEach((e => e.kill && e.kill()));
          if (this.clear(), a) {
            let e = pn.length;
            for (; e--;) pn[e].id === this.id && pn.splice(e, 1)
          }
        }
        revert(e) {
          this.kill(e || {})
        }
      }
      class Mn {
        constructor(e) {
          this.contexts = [], this.scope = e
        }
        add(e, a, t) {
          Pe(e) || (e = {
            matches: e
          });
          let n, s, r, i = new xn(0, t || this.scope),
            o = i.conditions = {};
          for (s in de && !i.selector && (i.selector = de.selector), this.contexts.push(i), a = i.add("onMatch", a), i.queries = e, e) "all" === s ? r = 1 : (n = me.matchMedia(e[s]), n && (pn.indexOf(i) < 0 && pn.push(i), (o[s] = n.matches) && (r = 1), n.addListener ? n.addListener(wn) : n.addEventListener("change", wn)));
          return r && a(i), this
        }
        revert(e) {
          this.kill(e || {})
        }
        kill(e) {
          this.contexts.forEach((a => a.kill(e, !0)))
        }
      }
      const Sn = {
        registerPlugin() {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
          a.forEach((e => ft(e)))
        },
        timeline: e => new qt(e),
        getTweensOf: (e, a) => ge.getTweensOf(e, a),
        getProperty(e, a, t, n) {
          ze(e) && (e = at(e)[0]);
          let s = ga(e || {}).get,
            r = t ? wa : ya;
          return "native" === t && (t = ""), e ? a ? r((ia[a] && ia[a].get || s)(e, a, t, n)) : (a, t, n) => r((ia[a] && ia[a].get || s)(e, a, t, n)) : e
        },
        quickSetter(e, a, t) {
          if ((e = at(e)).length > 1) {
            let n = e.map((e => Nn.quickSetter(e, a, t))),
              s = n.length;
            return e => {
              let a = s;
              for (; a--;) n[a](e)
            }
          }
          e = e[0] || {};
          let n = ia[a],
            s = ga(e),
            r = s.harness && (s.harness.aliases || {})[a] || a,
            i = n ? a => {
              let s = new n;
              fe._pt = 0, s.init(e, t ? a + t : a, fe, 0, [e]), s.render(1, s), fe._pt && cn(1, fe)
            } : s.set(e, r);
          return n ? i : a => i(e, r, t ? a + t : a, s, 1)
        },
        quickTo(e, a, t) {
          let n = Nn.to(e, Ma({
              [a]: "+=0.1",
              paused: !0
            }, t || {})),
            s = (e, t, s) => n.resetTo(a, e, t, s);
          return s.tween = n, s
        },
        isTweening: e => ge.getTweensOf(e, !0).length > 0,
        defaults: e => (e && e.ease && (e.ease = Ot(e.ease, ye.ease)), Sa(ye, e || {})),
        config: e => Sa(ke, e || {}),
        registerEffect(e) {
          let {
            name: a,
            effect: t,
            plugins: n,
            defaults: s,
            extendTimeline: r
          } = e;
          (n || "").split(",").forEach((e => e && !ia[e] && !We[e] && Ze(a + " effect requires " + e + " plugin."))), oa[a] = (e, a, n) => t(at(e), xa(a || {}, s), n), r && (qt.prototype[a] = function(e, t, n) {
            return this.add(oa[a](e, Pe(t) ? t : (n = t) && {}, this), n)
          })
        },
        registerEase(e, a) {
          zt[e] = Ot(a)
        },
        parseEase(e, a) {
          return arguments.length ? Ot(e, a) : zt
        },
        getById: e => ge.getById(e),
        exportRoot() {
          let e, a, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0,
            s = new qt(t);
          for (s.smoothChildTiming = Le(t.smoothChildTiming), ge.remove(s), s._dp = 0, s._time = s._tTime = ge._time, e = ge._first; e;) a = e._next, !n && !e._dur && e instanceof en && e.vars.onComplete === e._targets[0] || Ba(s, e, e._start - e._delay), e = a;
          return Ba(ge, s, 0), s
        },
        context: (e, a) => e ? new xn(e, a) : de,
        matchMedia: e => new Mn(e),
        matchMediaRefresh: () => pn.forEach((e => {
          let a, t, n = e.conditions;
          for (t in n) n[t] && (n[t] = !1, a = 1);
          a && e.revert()
        })) || wn(),
        addEventListener(e, a) {
          let t = hn[e] || (hn[e] = []);
          ~t.indexOf(a) || t.push(a)
        },
        removeEventListener(e, a) {
          let t = hn[e],
            n = t && t.indexOf(a);
          n >= 0 && t.splice(n, 1)
        },
        utils: {
          wrap: _t,
          wrapYoyo: ct,
          distribute: st,
          random: ot,
          snap: it,
          normalize: (e, a, t) => gt(e, a, 0, 1, t),
          getUnit: Ka,
          clamp: (e, a, t) => Ja(t, (t => Za(e, a, t))),
          splitColor: wt,
          toArray: at,
          selector: tt,
          mapRange: gt,
          pipe: function() {
            for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
            return e => a.reduce(((e, a) => a(e)), e)
          },
          unitize: (e, a) => t => e(parseFloat(t)) + (a || Ka(t)),
          interpolate: mt,
          shuffle: nt
        },
        install: Ye,
        effects: oa,
        ticker: Nt,
        updateRoot: qt.updateRoot,
        plugins: ia,
        globalTimeline: ge,
        core: {
          PropTween: vn,
          globals: Ke,
          Tween: en,
          Timeline: qt,
          Animation: Ft,
          getCache: ga,
          _removeLinkedListItem: ja,
          reverting: () => ce,
          context: e => (e && de && (de.data.push(e), e._ctx = de), de),
          suppressOverwrites: e => _e = e
        }
      };
      ua("to,from,fromTo,delayedCall,set,killTweensOf", (e => Sn[e] = en[e])), Nt.add(qt.updateRoot), fe = Sn.to({}, {
        duration: 0
      });
      let Cn = (e, a) => {
          let t = e._pt;
          for (; t && t.p !== a && t.op !== a && t.fp !== a;) t = t._next;
          return t
        },
        Tn = (e, a) => ({
          name: e,
          rawVars: 1,
          init(e, t, n) {
            n._onInit = e => {
              let n, s;
              if (ze(t) && (n = {}, ua(t, (e => n[e] = 1)), t = n), a) {
                for (s in n = {}, t) n[s] = a(t[s]);
                t = n
              }((e, a) => {
                let t, n, s, r = e._targets;
                for (t in a)
                  for (n = r.length; n--;) s = e._ptLookup[n][t], s && (s = s.d) && (s._pt && (s = Cn(s, t)), s && s.modifier && s.modifier(a[t], e, r[n], t))
              })(e, t)
            }
          }
        });
      const Nn = Sn.registerPlugin({
        name: "attr",
        init(e, a, t, n, s) {
          let r, i, o;
          for (r in this.tween = t, a) o = e.getAttribute(r) || "", i = this.add(e, "setAttribute", (o || 0) + "", a[r], n, s, 0, 0, r), i.op = r, i.b = o, this._props.push(r)
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
      }, Tn("roundProps", rt), Tn("modifiers"), Tn("snap", it)) || Sn;
      en.version = qt.version = Nn.version = "3.12.2", pe = 1, Oe() && jt();
      const {
        Power0: jn,
        Power1: zn,
        Power2: En,
        Power3: An,
        Power4: In,
        Linear: Pn,
        Quad: Ln,
        Cubic: On,
        Quart: Dn,
        Quint: Rn,
        Strong: Vn,
        Elastic: Bn,
        Back: Gn,
        SteppedEase: Fn,
        Bounce: qn,
        Sine: $n,
        Expo: Un,
        Circ: Hn
      } = zt;
      let Wn, Xn, Yn, Jn, Zn, Kn, Qn, es, as, ts = {},
        ns = 180 / Math.PI,
        ss = Math.PI / 180,
        rs = Math.atan2,
        is = /([A-Z])/g,
        os = /(left|right|width|margin|padding|x)/i,
        ls = /[\s,\(]\S/,
        _s = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        cs = (e, a) => a.set(a.t, a.p, Math.round(1e4 * (a.s + a.c * e)) / 1e4 + a.u, a),
        ds = (e, a) => a.set(a.t, a.p, 1 === e ? a.e : Math.round(1e4 * (a.s + a.c * e)) / 1e4 + a.u, a),
        gs = (e, a) => a.set(a.t, a.p, e ? Math.round(1e4 * (a.s + a.c * e)) / 1e4 + a.u : a.b, a),
        ms = (e, a) => {
          let t = a.s + a.c * e;
          a.set(a.t, a.p, ~~(t + (t < 0 ? -.5 : .5)) + a.u, a)
        },
        us = (e, a) => a.set(a.t, a.p, e ? a.e : a.b, a),
        vs = (e, a) => a.set(a.t, a.p, 1 !== e ? a.b : a.e, a),
        ps = (e, a, t) => e.style[a] = t,
        hs = (e, a, t) => e.style.setProperty(a, t),
        fs = (e, a, t) => e._gsap[a] = t,
        bs = (e, a, t) => e._gsap.scaleX = e._gsap.scaleY = t,
        ks = (e, a, t, n, s) => {
          let r = e._gsap;
          r.scaleX = r.scaleY = t, r.renderTransform(s, r)
        },
        ys = (e, a, t, n, s) => {
          let r = e._gsap;
          r[a] = t, r.renderTransform(s, r)
        },
        ws = "transform",
        xs = ws + "Origin",
        Ms = function(e, a) {
          let t = this.target,
            n = t.style;
          if (e in ts && n) {
            if (this.tfm = this.tfm || {}, "transform" === e) return _s.transform.split(",").forEach((e => Ms.call(this, e, a)));
            if (~(e = _s[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = Fs(t, e))) : this.tfm[e] = t._gsap.x ? t._gsap[e] : Fs(t, e), this.props.indexOf(ws) >= 0) return;
            t._gsap.svg && (this.svgo = t.getAttribute("data-svg-origin"), this.props.push(xs, a, "")), e = ws
          }(n || a) && this.props.push(e, a, n[e])
        },
        Ss = e => {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        Cs = function() {
          let e, a, t = this.props,
            n = this.target,
            s = n.style,
            r = n._gsap;
          for (e = 0; e < t.length; e += 3) t[e + 1] ? n[t[e]] = t[e + 2] : t[e + 2] ? s[t[e]] = t[e + 2] : s.removeProperty("--" === t[e].substr(0, 2) ? t[e] : t[e].replace(is, "-$1").toLowerCase());
          if (this.tfm) {
            for (a in this.tfm) r[a] = this.tfm[a];
            r.svg && (r.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), e = es(), e && e.isStart || s[ws] || (Ss(s), r.uncache = 1)
          }
        },
        Ts = (e, a) => {
          let t = {
            target: e,
            props: [],
            revert: Cs,
            save: Ms
          };
          return e._gsap || Nn.core.getCache(e), a && a.split(",").forEach((e => t.save(e))), t
        },
        Ns = (e, a) => {
          let t = Xn.createElementNS ? Xn.createElementNS((a || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Xn.createElement(e);
          return t.style ? t : Xn.createElement(e)
        },
        js = (e, a, t) => {
          let n = getComputedStyle(e);
          return n[a] || n.getPropertyValue(a.replace(is, "-$1").toLowerCase()) || n.getPropertyValue(a) || !t && js(e, Es(a) || a, 1) || ""
        },
        zs = "O,Moz,ms,Ms,Webkit".split(","),
        Es = (e, a, t) => {
          let n = (a || Zn).style,
            s = 5;
          if (e in n && !t) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(zs[s] + e in n););
          return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? zs[s] : "") + e
        },
        As = () => {
          "undefined" != typeof window && window.document && (Wn = window, Xn = Wn.document, Yn = Xn.documentElement, Zn = Ns("div") || {
            style: {}
          }, Kn = Ns("div"), ws = Es(ws), xs = ws + "Origin", Zn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", as = !!Es("perspective"), es = Nn.core.reverting, Jn = 1)
        },
        Is = function(e) {
          let a, t = Ns("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode,
            s = this.nextSibling,
            r = this.style.cssText;
          if (Yn.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
            a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Is
          } catch (e) {} else this._gsapBBox && (a = this._gsapBBox());
          return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Yn.removeChild(t), this.style.cssText = r, a
        },
        Ps = (e, a) => {
          let t = a.length;
          for (; t--;)
            if (e.hasAttribute(a[t])) return e.getAttribute(a[t])
        },
        Ls = e => {
          let a;
          try {
            a = e.getBBox()
          } catch (t) {
            a = Is.call(e, !0)
          }
          return a && (a.width || a.height) || e.getBBox === Is || (a = Is.call(e, !0)), !a || a.width || a.x || a.y ? a : {
            x: +Ps(e, ["x", "cx", "x1"]) || 0,
            y: +Ps(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Os = e => !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Ls(e)),
        Ds = (e, a) => {
          if (a) {
            let t = e.style;
            a in ts && a !== xs && (a = ws), t.removeProperty ? ("ms" !== a.substr(0, 2) && "webkit" !== a.substr(0, 6) || (a = "-" + a), t.removeProperty(a.replace(is, "-$1").toLowerCase())) : t.removeAttribute(a)
          }
        },
        Rs = (e, a, t, n, s, r) => {
          let i = new vn(e._pt, a, t, 0, 1, r ? vs : us);
          return e._pt = i, i.b = n, i.e = s, e._props.push(t), i
        },
        Vs = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Bs = {
          grid: 1,
          flex: 1
        },
        Gs = (e, a, t, n) => {
          let s, r, i, o, l = parseFloat(t) || 0,
            _ = (t + "").trim().substr((l + "").length) || "px",
            c = Zn.style,
            d = os.test(a),
            g = "svg" === e.tagName.toLowerCase(),
            m = (g ? "client" : "offset") + (d ? "Width" : "Height"),
            u = 100,
            v = "px" === n,
            p = "%" === n;
          return n === _ || !l || Vs[n] || Vs[_] ? l : ("px" !== _ && !v && (l = Gs(e, a, t, "px")), o = e.getCTM && Os(e), !p && "%" !== _ || !ts[a] && !~a.indexOf("adius") ? (c[d ? "width" : "height"] = u + (v ? _ : n), r = ~a.indexOf("adius") || "em" === n && e.appendChild && !g ? e : e.parentNode, o && (r = (e.ownerSVGElement || {}).parentNode), r && r !== Xn && r.appendChild || (r = Xn.body), i = r._gsap, i && p && i.width && d && i.time === Nt.time && !i.uncache ? va(l / i.width * u) : ((p || "%" === _) && !Bs[js(r, "display")] && (c.position = js(e, "position")), r === e && (c.position = "static"), r.appendChild(Zn), s = Zn[m], r.removeChild(Zn), c.position = "absolute", d && p && (i = ga(r), i.time = Nt.time, i.width = r[m]), va(v ? s * l / u : s && l ? u / s * l : 0))) : (s = o ? e.getBBox()[d ? "width" : "height"] : e[m], va(p ? l / s * u : l / 100 * s)))
        },
        Fs = (e, a, t, n) => {
          let s;
          return Jn || As(), a in _s && "transform" !== a && ~(a = _s[a]).indexOf(",") && (a = a.split(",")[0]), ts[a] && "transform" !== a ? (s = er(e, n), s = "transformOrigin" !== a ? s[a] : s.svg ? s.origin : ar(js(e, xs)) + " " + s.zOrigin + "px") : (s = e.style[a], (!s || "auto" === s || n || ~(s + "").indexOf("calc(")) && (s = Ws[a] && Ws[a](e, a, t) || js(e, a) || ma(e, a) || ("opacity" === a ? 1 : 0))), t && !~(s + "").trim().indexOf(" ") ? Gs(e, a, s, t) + t : s
        },
        qs = function(e, a, t, n) {
          if (!t || "none" === t) {
            let n = Es(a, e, 1),
              s = n && js(e, n, 1);
            s && s !== t ? (a = n, t = s) : "borderColor" === a && (t = js(e, "borderTopColor"))
          }
          let s, r, i, o, l, _, c, d, g, m, u, v, p = new vn(this._pt, e.style, a, 0, 1, _n),
            h = 0,
            f = 0;
          if (p.b = t, p.e = n, t += "", "auto" == (n += "") && (e.style[a] = n, n = js(e, a) || n, e.style[a] = t), s = [t, n], Tt(s), n = s[1], i = (t = s[0]).match(Fe) || [], v = n.match(Fe) || [], v.length) {
            for (; r = Fe.exec(n);) c = r[0], g = n.substring(h, r.index), l ? l = (l + 1) % 5 : "rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5) || (l = 1), c !== (_ = i[f++] || "") && (o = parseFloat(_) || 0, u = _.substr((o + "").length), "=" === c.charAt(1) && (c = ha(o, c) + u), d = parseFloat(c), m = c.substr((d + "").length), h = Fe.lastIndex - m.length, m || (m = m || ke.units[a] || u, h === n.length && (n += m, p.e += m)), u !== m && (o = Gs(e, a, _, m) || 0), p._pt = {
              _next: p._pt,
              p: g || 1 === f ? g : ",",
              s: o,
              c: d - o,
              m: l && l < 4 || "zIndex" === a ? Math.round : 0
            });
            p.c = h < n.length ? n.substring(h, n.length) : ""
          } else p.r = "display" === a && "none" === n ? vs : us;
          return $e.test(n) && (p.e = 0), this._pt = p, p
        },
        $s = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Us = e => {
          let a = e.split(" "),
            t = a[0],
            n = a[1] || "50%";
          return "top" !== t && "bottom" !== t && "left" !== n && "right" !== n || (e = t, t = n, n = e), a[0] = $s[t] || t, a[1] = $s[n] || n, a.join(" ")
        },
        Hs = (e, a) => {
          if (a.tween && a.tween._time === a.tween._dur) {
            let e, t, n, s = a.t,
              r = s.style,
              i = a.u,
              o = s._gsap;
            if ("all" === i || !0 === i) r.cssText = "", t = 1;
            else
              for (i = i.split(","), n = i.length; --n > -1;) e = i[n], ts[e] && (t = 1, e = "transformOrigin" === e ? xs : ws), Ds(s, e);
            t && (Ds(s, ws), o && (o.svg && s.removeAttribute("transform"), er(s, 1), o.uncache = 1, Ss(r)))
          }
        },
        Ws = {
          clearProps(e, a, t, n, s) {
            if ("isFromStart" !== s.data) {
              let r = e._pt = new vn(e._pt, a, t, 0, 0, Hs);
              return r.u = n, r.pr = -10, r.tween = s, e._props.push(t), 1
            }
          }
        },
        Xs = [1, 0, 0, 1, 0, 0],
        Ys = {},
        Js = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        Zs = e => {
          let a = js(e, ws);
          return Js(a) ? Xs : a.substr(7).match(Ge).map(va)
        },
        Ks = (e, a) => {
          let t, n, s, r, i = e._gsap || ga(e),
            o = e.style,
            l = Zs(e);
          return i.svg && e.getAttribute("transform") ? (s = e.transform.baseVal.consolidate().matrix, l = [s.a, s.b, s.c, s.d, s.e, s.f], "1,0,0,1,0,0" === l.join(",") ? Xs : l) : (l !== Xs || e.offsetParent || e === Yn || i.svg || (s = o.display, o.display = "block", t = e.parentNode, t && e.offsetParent || (r = 1, n = e.nextElementSibling, Yn.appendChild(e)), l = Zs(e), s ? o.display = s : Ds(e, "display"), r && (n ? t.insertBefore(e, n) : t ? t.appendChild(e) : Yn.removeChild(e))), a && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        Qs = (e, a, t, n, s, r) => {
          let i, o, l, _, c = e._gsap,
            d = s || Ks(e, !0),
            g = c.xOrigin || 0,
            m = c.yOrigin || 0,
            u = c.xOffset || 0,
            v = c.yOffset || 0,
            p = d[0],
            h = d[1],
            f = d[2],
            b = d[3],
            k = d[4],
            y = d[5],
            w = a.split(" "),
            x = parseFloat(w[0]) || 0,
            M = parseFloat(w[1]) || 0;
          t ? d !== Xs && (o = p * b - h * f) && (l = x * (b / o) + M * (-f / o) + (f * y - b * k) / o, _ = x * (-h / o) + M * (p / o) - (p * y - h * k) / o, x = l, M = _) : (i = Ls(e), x = i.x + (~w[0].indexOf("%") ? x / 100 * i.width : x), M = i.y + (~(w[1] || w[0]).indexOf("%") ? M / 100 * i.height : M)), n || !1 !== n && c.smooth ? (k = x - g, y = M - m, c.xOffset = u + (k * p + y * f) - k, c.yOffset = v + (k * h + y * b) - y) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = M, c.smooth = !!n, c.origin = a, c.originIsAbsolute = !!t, e.style[xs] = "0px 0px", r && (Rs(r, c, "xOrigin", g, x), Rs(r, c, "yOrigin", m, M), Rs(r, c, "xOffset", u, c.xOffset), Rs(r, c, "yOffset", v, c.yOffset)), e.setAttribute("data-svg-origin", x + " " + M)
        },
        er = (e, a) => {
          let t = e._gsap || new Gt(e);
          if ("x" in t && !a && !t.uncache) return t;
          let n, s, r, i, o, l, _, c, d, g, m, u, v, p, h, f, b, k, y, w, x, M, S, C, T, N, j, z, E, A, I, P, L = e.style,
            O = t.scaleX < 0,
            D = "px",
            R = "deg",
            V = getComputedStyle(e),
            B = js(e, xs) || "0";
          return n = s = r = l = _ = c = d = g = m = 0, i = o = 1, t.svg = !(!e.getCTM || !Os(e)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (L[ws] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[ws] ? V[ws] : "")), L.scale = L.rotate = L.translate = "none"), p = Ks(e, t.svg), t.svg && (t.uncache ? (T = e.getBBox(), B = t.xOrigin - T.x + "px " + (t.yOrigin - T.y) + "px", C = "") : C = !a && e.getAttribute("data-svg-origin"), Qs(e, C || B, !!C || t.originIsAbsolute, !1 !== t.smooth, p)), u = t.xOrigin || 0, v = t.yOrigin || 0, p !== Xs && (k = p[0], y = p[1], w = p[2], x = p[3], n = M = p[4], s = S = p[5], 6 === p.length ? (i = Math.sqrt(k * k + y * y), o = Math.sqrt(x * x + w * w), l = k || y ? rs(y, k) * ns : 0, d = w || x ? rs(w, x) * ns + l : 0, d && (o *= Math.abs(Math.cos(d * ss))), t.svg && (n -= u - (u * k + v * w), s -= v - (u * y + v * x))) : (P = p[6], A = p[7], j = p[8], z = p[9], E = p[10], I = p[11], n = p[12], s = p[13], r = p[14], h = rs(P, E), _ = h * ns, h && (f = Math.cos(-h), b = Math.sin(-h), C = M * f + j * b, T = S * f + z * b, N = P * f + E * b, j = M * -b + j * f, z = S * -b + z * f, E = P * -b + E * f, I = A * -b + I * f, M = C, S = T, P = N), h = rs(-w, E), c = h * ns, h && (f = Math.cos(-h), b = Math.sin(-h), C = k * f - j * b, T = y * f - z * b, N = w * f - E * b, I = x * b + I * f, k = C, y = T, w = N), h = rs(y, k), l = h * ns, h && (f = Math.cos(h), b = Math.sin(h), C = k * f + y * b, T = M * f + S * b, y = y * f - k * b, S = S * f - M * b, k = C, M = T), _ && Math.abs(_) + Math.abs(l) > 359.9 && (_ = l = 0, c = 180 - c), i = va(Math.sqrt(k * k + y * y + w * w)), o = va(Math.sqrt(S * S + P * P)), h = rs(M, S), d = Math.abs(h) > 2e-4 ? h * ns : 0, m = I ? 1 / (I < 0 ? -I : I) : 0), t.svg && (C = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !Js(js(e, ws)), C && e.setAttribute("transform", C))), Math.abs(d) > 90 && Math.abs(d) < 270 && (O ? (i *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, d += d <= 0 ? 180 : -180)), a = a || t.uncache, t.x = n - ((t.xPercent = n && (!a && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + D, t.y = s - ((t.yPercent = s && (!a && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + D, t.z = r + D, t.scaleX = va(i), t.scaleY = va(o), t.rotation = va(l) + R, t.rotationX = va(_) + R, t.rotationY = va(c) + R, t.skewX = d + R, t.skewY = g + R, t.transformPerspective = m + D, (t.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (L[xs] = ar(B)), t.xOffset = t.yOffset = 0, t.force3D = ke.force3D, t.renderTransform = t.svg ? lr : as ? or : nr, t.uncache = 0, t
        },
        ar = e => (e = e.split(" "))[0] + " " + e[1],
        tr = (e, a, t) => {
          let n = Ka(a);
          return va(parseFloat(a) + parseFloat(Gs(e, "x", t + "px", n))) + n
        },
        nr = (e, a) => {
          a.z = "0px", a.rotationY = a.rotationX = "0deg", a.force3D = 0, or(e, a)
        },
        sr = "0deg",
        rr = "0px",
        ir = ") ",
        or = function(e, a) {
          let {
            xPercent: t,
            yPercent: n,
            x: s,
            y: r,
            z: i,
            rotation: o,
            rotationY: l,
            rotationX: _,
            skewX: c,
            skewY: d,
            scaleX: g,
            scaleY: m,
            transformPerspective: u,
            force3D: v,
            target: p,
            zOrigin: h
          } = a || this, f = "", b = "auto" === v && e && 1 !== e || !0 === v;
          if (h && (_ !== sr || l !== sr)) {
            let e, a = parseFloat(l) * ss,
              t = Math.sin(a),
              n = Math.cos(a);
            a = parseFloat(_) * ss, e = Math.cos(a), s = tr(p, s, t * e * -h), r = tr(p, r, -Math.sin(a) * -h), i = tr(p, i, n * e * -h + h)
          }
          u !== rr && (f += "perspective(" + u + ir), (t || n) && (f += "translate(" + t + "%, " + n + "%) "), (b || s !== rr || r !== rr || i !== rr) && (f += i !== rr || b ? "translate3d(" + s + ", " + r + ", " + i + ") " : "translate(" + s + ", " + r + ir), o !== sr && (f += "rotate(" + o + ir), l !== sr && (f += "rotateY(" + l + ir), _ !== sr && (f += "rotateX(" + _ + ir), c === sr && d === sr || (f += "skew(" + c + ", " + d + ir), 1 === g && 1 === m || (f += "scale(" + g + ", " + m + ir), p.style[ws] = f || "translate(0, 0)"
        },
        lr = function(e, a) {
          let t, n, s, r, i, {
              xPercent: o,
              yPercent: l,
              x: _,
              y: c,
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
            w = parseFloat(_),
            x = parseFloat(c);
          d = parseFloat(d), g = parseFloat(g), m = parseFloat(m), m && (m = parseFloat(m), g += m, d += m), d || g ? (d *= ss, g *= ss, t = Math.cos(d) * u, n = Math.sin(d) * u, s = Math.sin(d - g) * -v, r = Math.cos(d - g) * v, g && (m *= ss, i = Math.tan(g - m), i = Math.sqrt(1 + i * i), s *= i, r *= i, m && (i = Math.tan(m), i = Math.sqrt(1 + i * i), t *= i, n *= i)), t = va(t), n = va(n), s = va(s), r = va(r)) : (t = u, r = v, n = s = 0), (w && !~(_ + "").indexOf("px") || x && !~(c + "").indexOf("px")) && (w = Gs(p, "x", _, "px"), x = Gs(p, "y", c, "px")), (h || f || b || k) && (w = va(w + h - (h * t + f * s) + b), x = va(x + f - (h * n + f * r) + k)), (o || l) && (i = p.getBBox(), w = va(w + o / 100 * i.width), x = va(x + l / 100 * i.height)), i = "matrix(" + t + "," + n + "," + s + "," + r + "," + w + "," + x + ")", p.setAttribute("transform", i), y && (p.style[ws] = i)
        },
        _r = function(e, a, t, n, s) {
          let r, i, o = 360,
            l = ze(s),
            _ = parseFloat(s) * (l && ~s.indexOf("rad") ? ns : 1) - n,
            c = n + _ + "deg";
          return l && (r = s.split("_")[1], "short" === r && (_ %= o, _ !== _ % 180 && (_ += _ < 0 ? o : -360)), "cw" === r && _ < 0 ? _ = (_ + 36e9) % o - ~~(_ / o) * o : "ccw" === r && _ > 0 && (_ = (_ - 36e9) % o - ~~(_ / o) * o)), e._pt = i = new vn(e._pt, a, t, n, _, ds), i.e = c, i.u = "deg", e._props.push(t), i
        },
        cr = (e, a) => {
          for (let t in a) e[t] = a[t];
          return e
        },
        dr = (e, a, t) => {
          let n, s, r, i, o, l, _, c, d = cr({}, t._gsap),
            g = t.style;
          for (s in d.svg ? (r = t.getAttribute("transform"), t.setAttribute("transform", ""), g[ws] = a, n = er(t, 1), Ds(t, ws), t.setAttribute("transform", r)) : (r = getComputedStyle(t)[ws], g[ws] = a, n = er(t, 1), g[ws] = r), ts) r = d[s], i = n[s], r !== i && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (_ = Ka(r), c = Ka(i), o = _ !== c ? Gs(t, s, r, c) : parseFloat(r), l = parseFloat(i), e._pt = new vn(e._pt, n, s, o, l - o, cs), e._pt.u = c || 0, e._props.push(s));
          cr(n, d)
        };
      ua("padding,margin,Width,Radius", ((e, a) => {
        let t = "Top",
          n = "Right",
          s = "Bottom",
          r = "Left",
          i = (a < 3 ? [t, n, s, r] : [t + r, t + n, s + n, s + r]).map((t => a < 2 ? e + t : "border" + t + e));
        Ws[a > 1 ? "border" + e : e] = function(e, a, t, n, s) {
          let r, o;
          if (arguments.length < 4) return r = i.map((a => Fs(e, a, t))), o = r.join(" "), 5 === o.split(r[0]).length ? r[0] : o;
          r = (n + "").split(" "), o = {}, i.forEach(((e, a) => o[e] = r[a] = r[a] || r[(a - 1) / 2 | 0])), e.init(a, o, s)
        }
      }));
      const gr = {
        name: "css",
        register: As,
        targetTest: e => e.style && e.nodeType,
        init(e, a, t, n, s) {
          let r, i, o, l, _, c, d, g, m, u, v, p, h, f, b, k, y = this._props,
            w = e.style,
            x = t.vars.startAt;
          for (d in Jn || As(), this.styles = this.styles || Ts(e), k = this.styles.props, this.tween = t, a)
            if ("autoRound" !== d && (i = a[d], !ia[d] || !Xt(d, a, t, n, e, s)))
              if (_ = typeof i, c = Ws[d], "function" === _ && (i = i.call(t, n, e, s), _ = typeof i), "string" === _ && ~i.indexOf("random(") && (i = dt(i)), c) c(this, e, d, i, t) && (b = 1);
              else if ("--" === d.substr(0, 2)) r = (getComputedStyle(e).getPropertyValue(d) + "").trim(), i += "", St.lastIndex = 0, St.test(r) || (g = Ka(r), m = Ka(i)), m ? g !== m && (r = Gs(e, d, r, m) + m) : g && (i += g), this.add(w, "setProperty", r, i, n, s, 0, 0, d), y.push(d), k.push(d, 0, w[d]);
          else if ("undefined" !== _) {
            if (x && d in x ? (r = "function" == typeof x[d] ? x[d].call(t, n, e, s) : x[d], ze(r) && ~r.indexOf("random(") && (r = dt(r)), Ka(r + "") || (r += ke.units[d] || Ka(Fs(e, d)) || ""), "=" === (r + "").charAt(1) && (r = Fs(e, d))) : r = Fs(e, d), l = parseFloat(r), u = "string" === _ && "=" === i.charAt(1) && i.substr(0, 2), u && (i = i.substr(2)), o = parseFloat(i), d in _s && ("autoAlpha" === d && (1 === l && "hidden" === Fs(e, "visibility") && o && (l = 0), k.push("visibility", 0, w.visibility), Rs(this, w, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== d && "transform" !== d && (d = _s[d], ~d.indexOf(",") && (d = d.split(",")[0]))), v = d in ts, v)
              if (this.styles.save(d), p || (h = e._gsap, h.renderTransform && !a.parseTransform || er(e, a.parseTransform), f = !1 !== a.smoothOrigin && h.smooth, p = this._pt = new vn(this._pt, w, ws, 0, 1, h.renderTransform, h, 0, -1), p.dep = 1), "scale" === d) this._pt = new vn(this._pt, h, "scaleY", h.scaleY, (u ? ha(h.scaleY, u + o) : o) - h.scaleY || 0, cs), this._pt.u = 0, y.push("scaleY", d), d += "X";
              else {
                if ("transformOrigin" === d) {
                  k.push(xs, 0, w[xs]), i = Us(i), h.svg ? Qs(e, i, 0, f, 0, this) : (m = parseFloat(i.split(" ")[2]) || 0, m !== h.zOrigin && Rs(this, h, "zOrigin", h.zOrigin, m), Rs(this, w, d, ar(r), ar(i)));
                  continue
                }
                if ("svgOrigin" === d) {
                  Qs(e, i, 1, f, 0, this);
                  continue
                }
                if (d in Ys) {
                  _r(this, h, d, l, u ? ha(l, u + i) : i);
                  continue
                }
                if ("smoothOrigin" === d) {
                  Rs(this, h, "smooth", h.smooth, i);
                  continue
                }
                if ("force3D" === d) {
                  h[d] = i;
                  continue
                }
                if ("transform" === d) {
                  dr(this, i, e);
                  continue
                }
              }
            else d in w || (d = Es(d) || d);
            if (v || (o || 0 === o) && (l || 0 === l) && !ls.test(i) && d in w) g = (r + "").substr((l + "").length), o || (o = 0), m = Ka(i) || (d in ke.units ? ke.units[d] : g), g !== m && (l = Gs(e, d, r, m)), this._pt = new vn(this._pt, v ? h : w, d, l, (u ? ha(l, u + o) : o) - l, v || "px" !== m && "zIndex" !== d || !1 === a.autoRound ? cs : ms), this._pt.u = m || 0, g !== m && "%" !== m && (this._pt.b = r, this._pt.r = gs);
            else if (d in w) qs.call(this, e, d, r, u ? u + i : i);
            else if (d in e) this.add(e, d, r || e[d], u ? u + i : i, n, s);
            else if ("parseTransform" !== d) {
              Je(d, i);
              continue
            }
            v || (d in w ? k.push(d, 0, w[d]) : k.push(d, 1, r || e[d])), y.push(d)
          }
          b && un(this)
        },
        render(e, a) {
          if (a.tween._time || !es()) {
            let t = a._pt;
            for (; t;) t.r(e, t.d), t = t._next
          } else a.styles.revert()
        },
        get: Fs,
        aliases: _s,
        getSetter(e, a, t) {
          let n = _s[a];
          return n && n.indexOf(",") < 0 && (a = n), a in ts && a !== xs && (e._gsap.x || Fs(e, "x")) ? t && Qn === t ? "scale" === a ? bs : fs : (Qn = t || {}) && ("scale" === a ? ks : ys) : e.style && !Ie(e.style[a]) ? ps : ~a.indexOf("-") ? hs : rn(e, a)
        },
        core: {
          _removeProperty: Ds,
          _getMatrix: Ks
        }
      };
      Nn.utils.checkPrefix = Es, Nn.core.getStyleSaver = Ts,
        function(e, a, t, n) {
          let s = ua(e + "," + a + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            ts[e] = 1
          }));
          ua(a, (e => {
            ke.units[e] = "deg", Ys[e] = 1
          })), _s[s[13]] = e + "," + a, ua("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let a = e.split(":");
            _s[a[1]] = s[a[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), ua("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          ke.units[e] = "px"
        })), Nn.registerPlugin(gr);
      const mr = Nn.registerPlugin(gr) || Nn;
      mr.core.Tween;
      let ur, vr, pr, hr, fr, br, kr, yr, wr, xr, Mr, Sr, Cr, Tr, Nr = () => ur || "undefined" != typeof window && (ur = window.gsap) && ur.registerPlugin && ur,
        jr = 1,
        zr = [],
        Er = [],
        Ar = [],
        Ir = Date.now,
        Pr = (e, a) => a,
        Lr = (e, a) => ~Ar.indexOf(e) && Ar[Ar.indexOf(e) + 1][a],
        Or = e => !!~Mr.indexOf(e),
        Dr = (e, a, t, n, s) => e.addEventListener(a, t, {
          passive: !n,
          capture: !!s
        }),
        Rr = (e, a, t, n) => e.removeEventListener(a, t, !!n),
        Vr = "scrollLeft",
        Br = "scrollTop",
        Gr = () => Sr && Sr.isPressed || Er.cache++,
        Fr = (e, a) => {
          let t = n => {
            if (n || 0 === n) {
              jr && (hr.history.scrollRestoration = "manual");
              let a = Sr && Sr.isPressed;
              n = t.v = Math.round(n) || (Sr && Sr.iOS ? 1 : 0), e(n), t.cacheID = Er.cache, a && Pr("ss", n)
            } else(a || Er.cache !== t.cacheID || Pr("ref")) && (t.cacheID = Er.cache, t.v = e());
            return t.v + t.offset
          };
          return t.offset = 0, e && t
        },
        qr = {
          s: Vr,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: Fr((function(e) {
            return arguments.length ? hr.scrollTo(e, $r.sc()) : hr.pageXOffset || fr[Vr] || br[Vr] || kr[Vr] || 0
          }))
        },
        $r = {
          s: Br,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: qr,
          sc: Fr((function(e) {
            return arguments.length ? hr.scrollTo(qr.sc(), e) : hr.pageYOffset || fr[Br] || br[Br] || kr[Br] || 0
          }))
        },
        Ur = (e, a) => (a && a._ctx && a._ctx.selector || ur.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== ur.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        Hr = (e, a) => {
          let {
            s: t,
            sc: n
          } = a;
          Or(e) && (e = fr.scrollingElement || br);
          let s = Er.indexOf(e),
            r = n === $r.sc ? 1 : 2;
          !~s && (s = Er.push(e) - 1), Er[s + r] || Dr(e, "scroll", Gr);
          let i = Er[s + r],
            o = i || (Er[s + r] = Fr(Lr(e, t), !0) || (Or(e) ? n : Fr((function(a) {
              return arguments.length ? e[t] = a : e[t]
            }))));
          return o.target = e, i || (o.smooth = "smooth" === ur.getProperty(e, "scrollBehavior")), o
        },
        Wr = (e, a, t) => {
          let n = e,
            s = e,
            r = Ir(),
            i = r,
            o = a || 50,
            l = Math.max(500, 3 * o),
            _ = (e, a) => {
              let l = Ir();
              a || l - r > o ? (s = n, n = e, i = r, r = l) : t ? n += e : n = s + (e - s) / (l - i) * (r - i)
            };
          return {
            update: _,
            reset: () => {
              s = n = t ? 0 : n, i = r = 0
            },
            getVelocity: e => {
              let a = i,
                o = s,
                c = Ir();
              return (e || 0 === e) && e !== n && _(e), r === i || c - i > l ? 0 : (n + (t ? o : -o)) / ((t ? c : r) - a) * 1e3
            }
          }
        },
        Xr = (e, a) => (a && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        Yr = e => {
          let a = Math.max(...e),
            t = Math.min(...e);
          return Math.abs(a) >= Math.abs(t) ? a : t
        },
        Jr = () => {
          xr = ur.core.globals().ScrollTrigger, xr && xr.core && (() => {
            let e = xr.core,
              a = e.bridge || {},
              t = e._scrollers,
              n = e._proxies;
            t.push(...Er), n.push(...Ar), Er = t, Ar = n, Pr = (e, t) => a[e](t)
          })()
        },
        Zr = e => (ur = e || Nr(), ur && "undefined" != typeof document && document.body && (hr = window, fr = document, br = fr.documentElement, kr = fr.body, Mr = [hr, fr, br, kr], pr = ur.utils.clamp, Tr = ur.core.context || function() {}, wr = "onpointerenter" in kr ? "pointer" : "mouse", yr = Kr.isTouch = hr.matchMedia && hr.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in hr || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Cr = Kr.eventTypes = ("ontouchstart" in br ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in br ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => jr = 0), 500), Jr(), vr = 1), vr);
      qr.op = $r, Er.cache = 0;
      class Kr {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          vr || Zr(ur) || console.warn("Please gsap.registerPlugin(Observer)"), xr || Jr();
          let {
            tolerance: a,
            dragMinimum: t,
            type: n,
            target: s,
            lineHeight: r,
            debounce: i,
            preventDefault: o,
            onStop: l,
            onStopDelay: _,
            ignore: c,
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
            onToggleY: C,
            onHover: T,
            onHoverEnd: N,
            onMove: j,
            ignoreCheck: z,
            isNormalizer: E,
            onGestureStart: A,
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
          this.target = s = Ur(s) || br, this.vars = e, c && (c = ur.utils.toArray(c)), a = a || 1e-9, t = t || 0, d = d || 1, R = R || 1, n = n || "wheel,touch,pointer", i = !1 !== i, r || (r = parseFloat(hr.getComputedStyle(kr).lineHeight) || 22);
          let q, $, U, H, W, X, Y, J = this,
            Z = 0,
            K = 0,
            Q = Hr(s, qr),
            ee = Hr(s, $r),
            ae = Q(),
            te = ee(),
            ne = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === Cr[0],
            se = Or(s),
            re = s.ownerDocument || fr,
            ie = [0, 0, 0],
            oe = [0, 0, 0],
            le = 0,
            _e = () => le = Ir(),
            ce = (e, a) => (J.event = e) && c && ~c.indexOf(e.target) || a && ne && "touch" !== e.pointerType || z && z(e, a),
            de = () => {
              let e = J.deltaX = Yr(ie),
                t = J.deltaY = Yr(oe),
                n = Math.abs(e) >= a,
                s = Math.abs(t) >= a;
              M && (n || s) && M(J, e, t, ie, oe), n && (f && J.deltaX > 0 && f(J), b && J.deltaX < 0 && b(J), w && w(J), S && J.deltaX < 0 != Z < 0 && S(J), Z = J.deltaX, ie[0] = ie[1] = ie[2] = 0), s && (y && J.deltaY > 0 && y(J), k && J.deltaY < 0 && k(J), x && x(J), C && J.deltaY < 0 != K < 0 && C(J), K = J.deltaY, oe[0] = oe[1] = oe[2] = 0), (H || U) && (j && j(J), U && (v(J), U = !1), H = !1), X && !(X = !1) && F && F(J), W && (P(J), W = !1), q = 0
            },
            ge = (e, a, t) => {
              ie[t] += e, oe[t] += a, J._vx.update(e), J._vy.update(a), i ? q || (q = requestAnimationFrame(de)) : de()
            },
            me = (e, a) => {
              G && !Y && (J.axis = Y = Math.abs(e) > Math.abs(a) ? "x" : "y", X = !0), "y" !== Y && (ie[2] += e, J._vx.update(e, !0)), "x" !== Y && (oe[2] += a, J._vy.update(a, !0)), i ? q || (q = requestAnimationFrame(de)) : de()
            },
            ue = e => {
              if (ce(e, 1)) return;
              let a = (e = Xr(e, o)).clientX,
                n = e.clientY,
                s = a - J.x,
                r = n - J.y,
                i = J.isDragging;
              J.x = a, J.y = n, (i || Math.abs(J.startX - a) >= t || Math.abs(J.startY - n) >= t) && (v && (U = !0), i || (J.isDragging = !0), me(s, r), i || m && m(J))
            },
            ve = J.onPress = e => {
              ce(e, 1) || e && e.button || (J.axis = Y = null, $.pause(), J.isPressed = !0, e = Xr(e), Z = K = 0, J.startX = J.x = e.clientX, J.startY = J.y = e.clientY, J._vx.reset(), J._vy.reset(), Dr(E ? s : re, Cr[1], ue, o, !0), J.deltaX = J.deltaY = 0, p && p(J))
            },
            pe = J.onRelease = e => {
              if (ce(e, 1)) return;
              Rr(E ? s : re, Cr[1], ue, !0);
              let a = !isNaN(J.y - J.startY),
                t = J.isDragging && (Math.abs(J.x - J.startX) > 3 || Math.abs(J.y - J.startY) > 3),
                n = Xr(e);
              !t && a && (J._vx.reset(), J._vy.reset(), o && B && ur.delayedCall(.08, (() => {
                if (Ir() - le > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (re.createEvent) {
                  let a = re.createEvent("MouseEvents");
                  a.initMouseEvent("click", !0, !0, hr, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(a)
                }
              }))), J.isDragging = J.isGesturing = J.isPressed = !1, l && !E && $.restart(!0), u && t && u(J), h && h(J, t)
            },
            he = e => e.touches && e.touches.length > 1 && (J.isGesturing = !0) && A(e, J.isDragging),
            fe = () => (J.isGesturing = !1) || I(J),
            be = e => {
              if (ce(e)) return;
              let a = Q(),
                t = ee();
              ge((a - ae) * R, (t - te) * R, 1), ae = a, te = t, l && $.restart(!0)
            },
            ke = e => {
              if (ce(e)) return;
              e = Xr(e, o), P && (W = !0);
              let a = (1 === e.deltaMode ? r : 2 === e.deltaMode ? hr.innerHeight : 1) * d;
              ge(e.deltaX * a, e.deltaY * a, 0), l && !E && $.restart(!0)
            },
            ye = e => {
              if (ce(e)) return;
              let a = e.clientX,
                t = e.clientY,
                n = a - J.x,
                s = t - J.y;
              J.x = a, J.y = t, H = !0, (n || s) && me(n, s)
            },
            we = e => {
              J.event = e, T(J)
            },
            xe = e => {
              J.event = e, N(J)
            },
            Me = e => ce(e) || Xr(e, o) && D(J);
          $ = J._dc = ur.delayedCall(_ || .25, (() => {
            J._vx.reset(), J._vy.reset(), $.pause(), l && l(J)
          })).pause(), J.deltaX = J.deltaY = 0, J._vx = Wr(0, 50, !0), J._vy = Wr(0, 50, !0), J.scrollX = Q, J.scrollY = ee, J.isDragging = J.isGesturing = J.isPressed = !1, Tr(this), J.enable = e => (J.isEnabled || (Dr(se ? re : s, "scroll", Gr), n.indexOf("scroll") >= 0 && Dr(se ? re : s, "scroll", be, o, V), n.indexOf("wheel") >= 0 && Dr(s, "wheel", ke, o, V), (n.indexOf("touch") >= 0 && yr || n.indexOf("pointer") >= 0) && (Dr(s, Cr[0], ve, o, V), Dr(re, Cr[2], pe), Dr(re, Cr[3], pe), B && Dr(s, "click", _e, !1, !0), D && Dr(s, "click", Me), A && Dr(re, "gesturestart", he), I && Dr(re, "gestureend", fe), T && Dr(s, wr + "enter", we), N && Dr(s, wr + "leave", xe), j && Dr(s, wr + "move", ye)), J.isEnabled = !0, e && e.type && ve(e), L && L(J)), J), J.disable = () => {
            J.isEnabled && (zr.filter((e => e !== J && Or(e.target))).length || Rr(se ? re : s, "scroll", Gr), J.isPressed && (J._vx.reset(), J._vy.reset(), Rr(E ? s : re, Cr[1], ue, !0)), Rr(se ? re : s, "scroll", be, V), Rr(s, "wheel", ke, V), Rr(s, Cr[0], ve, V), Rr(re, Cr[2], pe), Rr(re, Cr[3], pe), Rr(s, "click", _e, !0), Rr(s, "click", Me), Rr(re, "gesturestart", he), Rr(re, "gestureend", fe), Rr(s, wr + "enter", we), Rr(s, wr + "leave", xe), Rr(s, wr + "move", ye), J.isEnabled = J.isPressed = J.isDragging = !1, O && O(J))
          }, J.kill = J.revert = () => {
            J.disable();
            let e = zr.indexOf(J);
            e >= 0 && zr.splice(e, 1), Sr === J && (Sr = 0)
          }, zr.push(J), E && Or(s) && (Sr = J), J.enable(g)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      Kr.version = "3.12.2", Kr.create = e => new Kr(e), Kr.register = Zr, Kr.getAll = () => zr.slice(), Kr.getById = e => zr.filter((a => a.vars.id === e))[0], Nr() && ur.registerPlugin(Kr);
      let Qr, ei, ai, ti, ni, si, ri, ii, oi, li, _i, ci, di, gi, mi, ui, vi, pi, hi, fi, bi, ki, yi, wi, xi, Mi, Si, Ci, Ti, Ni, ji, zi, Ei, Ai, Ii, Pi, Li = 1,
        Oi = Date.now,
        Di = Oi(),
        Ri = 0,
        Vi = 0,
        Bi = (e, a, t) => {
          let n = eo(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return t["_" + a + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        Gi = (e, a) => !a || eo(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Fi = () => Vi && requestAnimationFrame(Fi),
        qi = () => gi = 1,
        $i = () => gi = 0,
        Ui = e => e,
        Hi = e => Math.round(1e5 * e) / 1e5 || 0,
        Wi = () => "undefined" != typeof window,
        Xi = () => Qr || Wi() && (Qr = window.gsap) && Qr.registerPlugin && Qr,
        Yi = e => !!~ri.indexOf(e),
        Ji = e => ("Height" === e ? ji : ai["inner" + e]) || ni["client" + e] || si["client" + e],
        Zi = e => Lr(e, "getBoundingClientRect") || (Yi(e) ? () => (cl.width = ai.innerWidth, cl.height = ji, cl) : () => Mo(e)),
        Ki = (e, a) => {
          let {
            s: t,
            d2: n,
            d: s,
            a: r
          } = a;
          return Math.max(0, (t = "scroll" + n) && (r = Lr(e, t)) ? r() - Zi(e)()[s] : Yi(e) ? (ni[t] || si[t]) - Ji(n) : e[t] - e["offset" + n])
        },
        Qi = (e, a) => {
          for (let t = 0; t < hi.length; t += 3)(!a || ~a.indexOf(hi[t + 1])) && e(hi[t], hi[t + 1], hi[t + 2])
        },
        eo = e => "string" == typeof e,
        ao = e => "function" == typeof e,
        to = e => "number" == typeof e,
        no = e => "object" == typeof e,
        so = (e, a, t) => e && e.progress(a ? 0 : 1) && t && e.pause(),
        ro = (e, a) => {
          if (e.enabled) {
            let t = a(e);
            t && t.totalTime && (e.callbackAnimation = t)
          }
        },
        io = Math.abs,
        oo = "left",
        lo = "right",
        _o = "bottom",
        co = "width",
        go = "height",
        mo = "Right",
        uo = "Left",
        vo = "Top",
        po = "Bottom",
        ho = "padding",
        fo = "margin",
        bo = "Width",
        ko = "Height",
        yo = "px",
        wo = e => ai.getComputedStyle(e),
        xo = (e, a) => {
          for (let t in a) t in e || (e[t] = a[t]);
          return e
        },
        Mo = (e, a) => {
          let t = a && "matrix(1, 0, 0, 1, 0, 0)" !== wo(e)[mi] && Qr.to(e, {
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
            n = e.getBoundingClientRect();
          return t && t.progress(0).kill(), n
        },
        So = (e, a) => {
          let {
            d2: t
          } = a;
          return e["offset" + t] || e["client" + t] || 0
        },
        Co = e => {
          let a, t = [],
            n = e.labels,
            s = e.duration();
          for (a in n) t.push(n[a] / s);
          return t
        },
        To = e => {
          let a = Qr.utils.snap(e),
            t = Array.isArray(e) && e.slice(0).sort(((e, a) => e - a));
          return t ? function(e, n) {
            let s, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!n) return a(e);
            if (n > 0) {
              for (e -= r, s = 0; s < t.length; s++)
                if (t[s] >= e) return t[s];
              return t[s - 1]
            }
            for (s = t.length, e += r; s--;)
              if (t[s] <= e) return t[s];
            return t[0]
          } : function(t, n) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              r = a(t);
            return !n || Math.abs(r - t) < s || r - t < 0 == n < 0 ? r : a(n < 0 ? t - e : t + e)
          }
        },
        No = (e, a, t, n) => t.split(",").forEach((t => e(a, t, n))),
        jo = (e, a, t, n, s) => e.addEventListener(a, t, {
          passive: !n,
          capture: !!s
        }),
        zo = (e, a, t, n) => e.removeEventListener(a, t, !!n),
        Eo = (e, a, t) => {
          (t = t && t.wheelHandler) && (e(a, "wheel", t), e(a, "touchmove", t))
        },
        Ao = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        Io = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Po = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Lo = (e, a) => {
          if (eo(e)) {
            let t = e.indexOf("="),
              n = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (n *= a / 100), e = e.substr(0, t - 1)), e = n + (e in Po ? Po[e] * a : ~e.indexOf("%") ? parseFloat(e) * a / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Oo = (e, a, t, n, s, r, i, o) => {
          let {
            startColor: l,
            endColor: _,
            fontSize: c,
            indent: d,
            fontWeight: g
          } = s, m = ti.createElement("div"), u = Yi(t) || "fixed" === Lr(t, "pinType"), v = -1 !== e.indexOf("scroller"), p = u ? si : t, h = -1 !== e.indexOf("start"), f = h ? l : _, b = "border-color:" + f + ";font-size:" + c + ";color:" + f + ";font-weight:" + g + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((v || o) && u ? "fixed;" : "absolute;"), (v || o || !u) && (b += (n === $r ? lo : _o) + ":" + (r + parseFloat(d)) + "px;"), i && (b += "box-sizing:border-box;text-align:left;width:" + i.offsetWidth + "px;"), m._isStart = h, m.setAttribute("class", "gsap-marker-" + e + (a ? " marker-" + a : "")), m.style.cssText = b, m.innerText = a || 0 === a ? e + "-" + a : e, p.children[0] ? p.insertBefore(m, p.children[0]) : p.appendChild(m), m._offset = m["offset" + n.op.d2], Do(m, 0, n, h), m
        },
        Do = (e, a, t, n) => {
          let s = {
              display: "block"
            },
            r = t[n ? "os2" : "p2"],
            i = t[n ? "p2" : "os2"];
          e._isFlipped = n, s[t.a + "Percent"] = n ? -100 : 0, s[t.a] = n ? "1px" : 0, s["border" + r + bo] = 1, s["border" + i + bo] = 0, s[t.p] = a + "px", Qr.set(e, s)
        },
        Ro = [],
        Vo = {},
        Bo = () => Oi() - Ri > 34 && (Ei || (Ei = requestAnimationFrame(nl))),
        Go = () => {
          (!yi || !yi.isPressed || yi.startX > si.clientWidth) && (Er.cache++, yi ? Ei || (Ei = requestAnimationFrame(nl)) : nl(), Ri || Wo("scrollStart"), Ri = Oi())
        },
        Fo = () => {
          Mi = ai.innerWidth, xi = ai.innerHeight
        },
        qo = () => {
          Er.cache++, !di && !ki && !ti.fullscreenElement && !ti.webkitFullscreenElement && (!wi || Mi !== ai.innerWidth || Math.abs(ai.innerHeight - xi) > .25 * ai.innerHeight) && ii.restart(!0)
        },
        $o = {},
        Uo = [],
        Ho = () => zo(hl, "scrollEnd", Ho) || el(!0),
        Wo = e => $o[e] && $o[e].map((e => e())) || Uo,
        Xo = [],
        Yo = e => {
          for (let a = 0; a < Xo.length; a += 5)(!e || Xo[a + 4] && Xo[a + 4].query === e) && (Xo[a].style.cssText = Xo[a + 1], Xo[a].getBBox && Xo[a].setAttribute("transform", Xo[a + 2] || ""), Xo[a + 3].uncache = 1)
        },
        Jo = (e, a) => {
          let t;
          for (ui = 0; ui < Ro.length; ui++) t = Ro[ui], !t || a && t._ctx !== a || (e ? t.kill(1) : t.revert(!0, !0));
          a && Yo(a), a || Wo("revert")
        },
        Zo = (e, a) => {
          Er.cache++, (a || !Ai) && Er.forEach((e => ao(e) && e.cacheID++ && (e.rec = 0))), eo(e) && (ai.history.scrollRestoration = Ti = e)
        },
        Ko = 0,
        Qo = () => {
          si.appendChild(Ni), ji = Ni.offsetHeight || ai.innerHeight, si.removeChild(Ni)
        },
        el = (e, a) => {
          if (Ri && !e) return void jo(hl, "scrollEnd", Ho);
          Qo(), Ai = hl.isRefreshing = !0, Er.forEach((e => ao(e) && ++e.cacheID && (e.rec = e())));
          let t = Wo("refreshInit");
          fi && hl.sort(), a || Jo(), Er.forEach((e => {
            ao(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Ro.slice(0).forEach((e => e.refresh())), Ro.forEach(((e, a) => {
            if (e._subPinOffset && e.pin) {
              let a = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                t = e.pin[a];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[a] - t), e.refresh()
            }
          })), Ro.forEach((e => {
            let a = Ki(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > a) && e.setPositions(e.start, Math.max(e.start + 1, a), !0)
          })), t.forEach((e => e && e.render && e.render(-1))), Er.forEach((e => {
            ao(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), Zo(Ti, 1), ii.pause(), Ko++, Ai = 2, nl(2), Ro.forEach((e => ao(e.vars.onRefresh) && e.vars.onRefresh(e))), Ai = hl.isRefreshing = !1, Wo("refresh")
        },
        al = 0,
        tl = 1,
        nl = e => {
          if (!Ai || 2 === e) {
            hl.isUpdating = !0, Pi && Pi.update(0);
            let e = Ro.length,
              a = Oi(),
              t = a - Di >= 50,
              n = e && Ro[0].scroll();
            if (tl = al > n ? -1 : 1, Ai || (al = n), t && (Ri && !gi && a - Ri > 200 && (Ri = 0, Wo("scrollEnd")), _i = Di, Di = a), tl < 0) {
              for (ui = e; ui-- > 0;) Ro[ui] && Ro[ui].update(0, t);
              tl = 1
            } else
              for (ui = 0; ui < e; ui++) Ro[ui] && Ro[ui].update(0, t);
            hl.isUpdating = !1
          }
          Ei = 0
        },
        sl = [oo, "top", _o, lo, fo + po, fo + mo, fo + vo, fo + uo, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        rl = sl.concat([co, go, "boxSizing", "max" + bo, "max" + ko, "position", fo, ho, ho + vo, ho + mo, ho + po, ho + uo]),
        il = (e, a, t, n) => {
          if (!e._gsap.swappedIn) {
            let s, r = sl.length,
              i = a.style,
              o = e.style;
            for (; r--;) s = sl[r], i[s] = t[s];
            i.position = "absolute" === t.position ? "absolute" : "relative", "inline" === t.display && (i.display = "inline-block"), o[_o] = o[lo] = "auto", i.flexBasis = t.flexBasis || "auto", i.overflow = "visible", i.boxSizing = "border-box", i[co] = So(e, qr) + yo, i[go] = So(e, $r) + yo, i[ho] = o[fo] = o.top = o[oo] = "0", ll(n), o[co] = o["max" + bo] = t[co], o[go] = o["max" + ko] = t[go], o[ho] = t[ho], e.parentNode !== a && (e.parentNode.insertBefore(a, e), a.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        ol = /([A-Z])/g,
        ll = e => {
          if (e) {
            let a, t, n = e.t.style,
              s = e.length,
              r = 0;
            for ((e.t._gsap || Qr.core.getCache(e.t)).uncache = 1; r < s; r += 2) t = e[r + 1], a = e[r], t ? n[a] = t : n[a] && n.removeProperty(a.replace(ol, "-$1").toLowerCase())
          }
        },
        _l = e => {
          let a = rl.length,
            t = e.style,
            n = [],
            s = 0;
          for (; s < a; s++) n.push(rl[s], t[rl[s]]);
          return n.t = e, n
        },
        cl = {
          left: 0,
          top: 0
        },
        dl = (e, a, t, n, s, r, i, o, l, _, c, d, g, m) => {
          ao(e) && (e = e(o)), eo(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? Lo("0" + e.substr(3), t) : 0));
          let u, v, p, h = g ? g.time() : 0;
          if (g && g.seek(0), isNaN(e) || (e = +e), to(e)) g && (e = Qr.utils.mapRange(g.scrollTrigger.start, g.scrollTrigger.end, 0, d, e)), i && Do(i, t, n, !0);
          else {
            ao(a) && (a = a(o));
            let r, c, d, g, m = (e || "0").split(" ");
            p = Ur(a, o) || si, r = Mo(p) || {}, r && (r.left || r.top) || "none" !== wo(p).display || (g = p.style.display, p.style.display = "block", r = Mo(p), g ? p.style.display = g : p.style.removeProperty("display")), c = Lo(m[0], r[n.d]), d = Lo(m[1] || "0", t), e = r[n.p] - l[n.p] - _ + c + s - d, i && Do(i, d, n, t - d < 20 || i._isStart && d > 20), t -= t - d
          }
          if (m && (o[m] = e || -.001, e < 0 && (e = 0)), r) {
            let a = e + t,
              s = r._isStart;
            u = "scroll" + n.d2, Do(r, a, n, s && a > 20 || !s && (c ? Math.max(si[u], ni[u]) : r.parentNode[u]) <= a + 1), c && (l = Mo(i), c && (r.style[n.op.p] = l[n.op.p] - n.op.m - r._offset + yo))
          }
          return g && p && (u = Mo(p), g.seek(d), v = Mo(p), g._caScrollDist = u[n.p] - v[n.p], e = e / g._caScrollDist * d), g && g.seek(h), g ? e : Math.round(e)
        },
        gl = /(webkit|moz|length|cssText|inset)/i,
        ml = (e, a, t, n) => {
          if (e.parentNode !== a) {
            let s, r, i = e.style;
            if (a === si) {
              for (s in e._stOrig = i.cssText, r = wo(e), r) + s || gl.test(s) || !r[s] || "string" != typeof i[s] || "0" === s || (i[s] = r[s]);
              i.top = t, i.left = n
            } else i.cssText = e._stOrig;
            Qr.core.getCache(e).uncache = 1, a.appendChild(e)
          }
        },
        ul = (e, a, t) => {
          let n = a,
            s = n;
          return a => {
            let r = Math.round(e());
            return r !== n && r !== s && Math.abs(r - n) > 3 && Math.abs(r - s) > 3 && (a = r, t && t()), s = n, n = a, a
          }
        },
        vl = (e, a, t) => {
          let n = {};
          n[a.p] = "+=" + t, Qr.set(e, n)
        },
        pl = (e, a) => {
          let t = Hr(e, a),
            n = "_scroll" + a.p2,
            s = (a, r, i, o, l) => {
              let _ = s.tween,
                c = r.onComplete,
                d = {};
              i = i || t();
              let g = ul(t, i, (() => {
                _.kill(), s.tween = 0
              }));
              return l = o && l || 0, o = o || a - i, _ && _.kill(), r[n] = a, r.modifiers = d, d[n] = () => g(i + o * _.ratio + l * _.ratio * _.ratio), r.onUpdate = () => {
                Er.cache++, nl()
              }, r.onComplete = () => {
                s.tween = 0, c && c.call(_)
              }, _ = s.tween = Qr.to(e, r), _
            };
          return e[n] = t, t.wheelHandler = () => s.tween && s.tween.kill() && (s.tween = 0), jo(e, "wheel", t.wheelHandler), hl.isTouch && jo(e, "touchmove", t.wheelHandler), s
        };
      class hl {
        constructor(e, a) {
          ei || hl.register(Qr) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ci(this), this.init(e, a)
        }
        init(e, a) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Vi) return void(this.update = this.refresh = this.kill = Ui);
          e = xo(eo(e) || to(e) || e.nodeType ? {
            trigger: e
          } : e, Io);
          let t, n, s, r, i, o, l, _, c, d, g, m, u, v, p, h, f, b, k, y, w, x, M, S, C, T, N, j, z, E, A, I, P, L, O, D, R, V, B, {
              onUpdate: G,
              toggleClass: F,
              id: q,
              onToggle: $,
              onRefresh: U,
              scrub: H,
              trigger: W,
              pin: X,
              pinSpacing: Y,
              invalidateOnRefresh: J,
              anticipatePin: Z,
              onScrubComplete: K,
              onSnapComplete: Q,
              once: ee,
              snap: ae,
              pinReparent: te,
              pinSpacer: ne,
              containerAnimation: se,
              fastScrollEnd: re,
              preventOverlaps: ie
            } = e,
            oe = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? qr : $r,
            le = !H && 0 !== H,
            _e = Ur(e.scroller || ai),
            ce = Qr.core.getCache(_e),
            de = Yi(_e),
            ge = "fixed" === ("pinType" in e ? e.pinType : Lr(_e, "pinType") || de && "fixed"),
            me = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            ue = le && e.toggleActions.split(" "),
            ve = "markers" in e ? e.markers : Io.markers,
            pe = de ? 0 : parseFloat(wo(_e)["border" + oe.p2 + bo]) || 0,
            he = this,
            fe = e.onRefreshInit && (() => e.onRefreshInit(he)),
            be = ((e, a, t) => {
              let {
                d: n,
                d2: s,
                a: r
              } = t;
              return (r = Lr(e, "getBoundingClientRect")) ? () => r()[n] : () => (a ? Ji(s) : e["client" + s]) || 0
            })(_e, de, oe),
            ke = ((e, a) => !a || ~Ar.indexOf(e) ? Zi(e) : () => cl)(_e, de),
            ye = 0,
            we = 0,
            xe = 0,
            Me = Hr(_e, oe);
          var Se;
          if (he._startClamp = he._endClamp = !1, he._dir = oe, Z *= 45, he.scroller = _e, he.scroll = se ? se.time.bind(se) : Me, r = Me(), he.vars = e, a = a || e.animation, "refreshPriority" in e && (fi = 1, -9999 === e.refreshPriority && (Pi = he)), ce.tweenScroll = ce.tweenScroll || {
              top: pl(_e, $r),
              left: pl(_e, qr)
            }, he.tweenTo = t = ce.tweenScroll[oe.p], he.scrubDuration = e => {
              P = to(e) && e, P ? I ? I.duration(e) : I = Qr.to(a, {
                ease: "expo",
                totalProgress: "+=0",
                duration: P,
                paused: !0,
                onComplete: () => K && K(he)
              }) : (I && I.progress(1).kill(), I = 0)
            }, a && (a.vars.lazy = !1, a._initted && !he.isReverted || !1 !== a.vars.immediateRender && !1 !== e.immediateRender && a.duration() && a.render(0, !0, !0), he.animation = a.pause(), a.scrollTrigger = he, he.scrubDuration(H), E = 0, q || (q = a.vars.id)), ae && (no(ae) && !ae.push || (ae = {
              snapTo: ae
            }), "scrollBehavior" in si.style && Qr.set(de ? [si, ni] : _e, {
              scrollBehavior: "auto"
            }), Er.forEach((e => ao(e) && e.target === (de ? ti.scrollingElement || ni : _e) && (e.smooth = !1))), s = ao(ae.snapTo) ? ae.snapTo : "labels" === ae.snapTo ? (e => a => Qr.utils.snap(Co(e), a))(a) : "labelsDirectional" === ae.snapTo ? (Se = a, (e, a) => To(Co(Se))(e, a.direction)) : !1 !== ae.directional ? (e, a) => To(ae.snapTo)(e, Oi() - we < 500 ? 0 : a.direction) : Qr.utils.snap(ae.snapTo), L = ae.duration || {
              min: .1,
              max: 2
            }, L = no(L) ? li(L.min, L.max) : li(L, L), O = Qr.delayedCall(ae.delay || P / 2 || .1, (() => {
              let e = Me(),
                n = Oi() - we < 500,
                r = t.tween;
              if (!(n || Math.abs(he.getVelocity()) < 10) || r || gi || ye === e) he.isActive && ye !== e && O.restart(!0);
              else {
                let i = (e - o) / v,
                  _ = a && !le ? a.totalProgress() : i,
                  c = n ? 0 : (_ - A) / (Oi() - _i) * 1e3 || 0,
                  d = Qr.utils.clamp(-i, 1 - i, io(c / 2) * c / .185),
                  g = i + (!1 === ae.inertia ? 0 : d),
                  m = li(0, 1, s(g, he)),
                  u = Math.round(o + m * v),
                  {
                    onStart: p,
                    onInterrupt: h,
                    onComplete: f
                  } = ae;
                if (e <= l && e >= o && u !== e) {
                  if (r && !r._initted && r.data <= io(u - e)) return;
                  !1 === ae.inertia && (d = m - i), t(u, {
                    duration: L(io(.185 * Math.max(io(g - _), io(m - _)) / c / .05 || 0)),
                    ease: ae.ease || "power3",
                    data: io(u - e),
                    onInterrupt: () => O.restart(!0) && h && h(he),
                    onComplete: () => {
                      he.update(), ye = Me(), E = A = a && !le ? a.totalProgress() : he.progress, Q && Q(he), f && f(he)
                    }
                  }, e, d * v, u - e - d * v), p && p(he, t.tween)
                }
              }
            })).pause()), q && (Vo[q] = he), W = he.trigger = Ur(W || !0 !== X && X), B = W && W._gsap && W._gsap.stRevert, B && (B = B(he)), X = !0 === X ? W : Ur(X), eo(F) && (F = {
              targets: W,
              className: F
            }), X && (!1 === Y || Y === fo || (Y = !(!Y && X.parentNode && X.parentNode.style && "flex" === wo(X.parentNode).display) && ho), he.pin = X, n = Qr.core.getCache(X), n.spacer ? p = n.pinState : (ne && (ne = Ur(ne), ne && !ne.nodeType && (ne = ne.current || ne.nativeElement), n.spacerIsNative = !!ne, ne && (n.spacerState = _l(ne))), n.spacer = b = ne || ti.createElement("div"), b.classList.add("pin-spacer"), q && b.classList.add("pin-spacer-" + q), n.pinState = p = _l(X)), !1 !== e.force3D && Qr.set(X, {
              force3D: !0
            }), he.spacer = b = n.spacer, z = wo(X), S = z[Y + oe.os2], y = Qr.getProperty(X), w = Qr.quickSetter(X, oe.a, yo), il(X, b, z), f = _l(X)), ve) {
            m = no(ve) ? xo(ve, Ao) : Ao, d = Oo("scroller-start", q, _e, oe, m, 0), g = Oo("scroller-end", q, _e, oe, m, 0, d), k = d["offset" + oe.op.d2];
            let e = Ur(Lr(_e, "content") || _e);
            _ = this.markerStart = Oo("start", q, e, oe, m, k, 0, se), c = this.markerEnd = Oo("end", q, e, oe, m, k, 0, se), se && (V = Qr.quickSetter([_, c], oe.a, yo)), ge || Ar.length && !0 === Lr(_e, "fixedMarkers") || ((e => {
              let a = wo(e).position;
              e.style.position = "absolute" === a || "fixed" === a ? a : "relative"
            })(de ? si : _e), Qr.set([d, g], {
              force3D: !0
            }), T = Qr.quickSetter(d, oe.a, yo), j = Qr.quickSetter(g, oe.a, yo))
          }
          if (se) {
            let e = se.vars.onUpdate,
              a = se.vars.onUpdateParams;
            se.eventCallback("onUpdate", (() => {
              he.update(0, 0, 1), e && e.apply(se, a || [])
            }))
          }
          if (he.previous = () => Ro[Ro.indexOf(he) - 1], he.next = () => Ro[Ro.indexOf(he) + 1], he.revert = (e, t) => {
              if (!t) return he.kill(!0);
              let n = !1 !== e || !he.enabled,
                s = di;
              n !== he.isReverted && (n && (D = Math.max(Me(), he.scroll.rec || 0), xe = he.progress, R = a && a.progress()), _ && [_, c, d, g].forEach((e => e.style.display = n ? "none" : "block")), n && (di = he, he.update(n)), !X || te && he.isActive || (n ? ((e, a, t) => {
                ll(t);
                let n = e._gsap;
                if (n.spacerIsNative) ll(n.spacerState);
                else if (e._gsap.swappedIn) {
                  let t = a.parentNode;
                  t && (t.insertBefore(e, a), t.removeChild(a))
                }
                e._gsap.swappedIn = !1
              })(X, b, p) : il(X, b, wo(X), C)), n || he.update(n), di = s, he.isReverted = n)
            }, he.refresh = (n, s, m, k) => {
              if ((di || !he.enabled) && !s) return;
              if (X && n && Ri) return void jo(hl, "scrollEnd", Ho);
              !Ai && fe && fe(he), di = he, t.tween && !m && (t.tween.kill(), t.tween = 0), I && I.pause(), J && a && a.revert({
                kill: !1
              }).invalidate(), he.isReverted || he.revert(!0, !0), he._subPinOffset = !1;
              let w, S, T, j, z, E, A, P, L, V, B, G, F, q = be(),
                $ = ke(),
                H = se ? se.duration() : Ki(_e, oe),
                Z = v <= .01,
                K = 0,
                Q = k || 0,
                ee = no(m) ? m.end : e.end,
                ae = e.endTrigger || W,
                ne = no(m) ? m.start : e.start || (0 !== e.start && W ? X ? "0 0" : "0 100%" : 0),
                re = he.pinnedContainer = e.pinnedContainer && Ur(e.pinnedContainer, he),
                ie = W && Math.max(0, Ro.indexOf(he)) || 0,
                ce = ie;
              for (ve && no(m) && (G = Qr.getProperty(d, oe.p), F = Qr.getProperty(g, oe.p)); ce--;) E = Ro[ce], E.end || E.refresh(0, 1) || (di = he), A = E.pin, !A || A !== W && A !== X && A !== re || E.isReverted || (V || (V = []), V.unshift(E), E.revert(!0, !0)), E !== Ro[ce] && (ie--, ce--);
              for (ao(ne) && (ne = ne(he)), ne = Bi(ne, "start", he), o = dl(ne, W, q, oe, Me(), _, d, he, $, pe, ge, H, se, he._startClamp && "_startClamp") || (X ? -.001 : 0), ao(ee) && (ee = ee(he)), eo(ee) && !ee.indexOf("+=") && (~ee.indexOf(" ") ? ee = (eo(ne) ? ne.split(" ")[0] : "") + ee : (K = Lo(ee.substr(2), q), ee = eo(ne) ? ne : (se ? Qr.utils.mapRange(0, se.duration(), se.scrollTrigger.start, se.scrollTrigger.end, o) : o) + K, ae = W)), ee = Bi(ee, "end", he), l = Math.max(o, dl(ee || (ae ? "100% 0" : H), ae, q, oe, Me() + K, c, g, he, $, pe, ge, H, se, he._endClamp && "_endClamp")) || -.001, K = 0, ce = ie; ce--;) E = Ro[ce], A = E.pin, A && E.start - E._pinPush <= o && !se && E.end > 0 && (w = E.end - (he._startClamp ? Math.max(0, E.start) : E.start), (A === W && E.start - E._pinPush < o || A === re) && isNaN(ne) && (K += w * (1 - E.progress)), A === X && (Q += w));
              if (o += K, l += K, he._startClamp && (he._startClamp += K), he._endClamp && !Ai && (he._endClamp = l || -.001, l = Math.min(l, Ki(_e, oe))), v = l - o || (o -= .01) && .001, Z && (xe = Qr.utils.clamp(0, 1, Qr.utils.normalize(o, l, D))), he._pinPush = Q, _ && K && (w = {}, w[oe.a] = "+=" + K, re && (w[oe.p] = "-=" + Me()), Qr.set([_, c], w)), X) w = wo(X), j = oe === $r, T = Me(), x = parseFloat(y(oe.a)) + Q, !H && l > 1 && (B = (de ? ti.scrollingElement || ni : _e).style, B = {
                style: B,
                value: B["overflow" + oe.a.toUpperCase()]
              }, de && "scroll" !== wo(si)["overflow" + oe.a.toUpperCase()] && (B.style["overflow" + oe.a.toUpperCase()] = "scroll")), il(X, b, w), f = _l(X), S = Mo(X, !0), P = ge && Hr(_e, j ? qr : $r)(), Y && (C = [Y + oe.os2, v + Q + yo], C.t = b, ce = Y === ho ? So(X, oe) + v + Q : 0, ce && C.push(oe.d, ce + yo), ll(C), re && Ro.forEach((e => {
                e.pin === re && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), ge && Me(D)), ge && (z = {
                top: S.top + (j ? T - o : P) + yo,
                left: S.left + (j ? P : T - o) + yo,
                boxSizing: "border-box",
                position: "fixed"
              }, z[co] = z["max" + bo] = Math.ceil(S.width) + yo, z[go] = z["max" + ko] = Math.ceil(S.height) + yo, z[fo] = z[fo + vo] = z[fo + mo] = z[fo + po] = z[fo + uo] = "0", z[ho] = w[ho], z[ho + vo] = w[ho + vo], z[ho + mo] = w[ho + mo], z[ho + po] = w[ho + po], z[ho + uo] = w[ho + uo], h = ((e, a, t) => {
                let n, s = [],
                  r = e.length,
                  i = t ? 8 : 0;
                for (; i < r; i += 2) n = e[i], s.push(n, n in a ? a[n] : e[i + 1]);
                return s.t = e.t, s
              })(p, z, te), Ai && Me(0)), a ? (L = a._initted, bi(1), a.render(a.duration(), !0, !0), M = y(oe.a) - x + v + Q, N = Math.abs(v - M) > 1, ge && N && h.splice(h.length - 2, 2), a.render(0, !0, !0), L || a.invalidate(!0), a.parent || a.totalTime(a.totalTime()), bi(0)) : M = v, B && (B.value ? B.style["overflow" + oe.a.toUpperCase()] = B.value : B.style.removeProperty("overflow-" + oe.a));
              else if (W && Me() && !se)
                for (S = W.parentNode; S && S !== si;) S._pinOffset && (o -= S._pinOffset, l -= S._pinOffset), S = S.parentNode;
              V && V.forEach((e => e.revert(!1, !0))), he.start = o, he.end = l, r = i = Ai ? D : Me(), se || Ai || (r < D && Me(D), he.scroll.rec = 0), he.revert(!1, !0), we = Oi(), O && (ye = -1, O.restart(!0)), di = 0, a && le && (a._initted || R) && a.progress() !== R && a.progress(R || 0, !0).render(a.time(), !0, !0), (Z || xe !== he.progress || se) && (a && !le && a.totalProgress(se && o < -.001 && !xe ? Qr.utils.normalize(o, l, 0) : xe, !0), he.progress = Z || (r - o) / v === xe ? 0 : xe), X && Y && (b._pinOffset = Math.round(he.progress * M)), I && I.invalidate(), isNaN(G) || (G -= Qr.getProperty(d, oe.p), F -= Qr.getProperty(g, oe.p), vl(d, oe, G), vl(_, oe, G - (k || 0)), vl(g, oe, F), vl(c, oe, F - (k || 0))), Z && !Ai && he.update(), !U || Ai || u || (u = !0, U(he), u = !1)
            }, he.getVelocity = () => (Me() - i) / (Oi() - _i) * 1e3 || 0, he.endAnimation = () => {
              so(he.callbackAnimation), a && (I ? I.progress(1) : a.paused() ? le || so(a, he.direction < 0, 1) : so(a, a.reversed()))
            }, he.labelToScroll = e => a && a.labels && (o || he.refresh() || o) + a.labels[e] / a.duration() * v || 0, he.getTrailing = e => {
              let a = Ro.indexOf(he),
                t = he.direction > 0 ? Ro.slice(0, a).reverse() : Ro.slice(a + 1);
              return (eo(e) ? t.filter((a => a.vars.preventOverlaps === e)) : t).filter((e => he.direction > 0 ? e.end <= o : e.start >= l))
            }, he.update = (e, n, s) => {
              if (se && !s && !e) return;
              let _, c, g, m, u, p, k, y, C = !0 === Ai ? D : he.scroll(),
                z = e ? 0 : (C - o) / v,
                P = z < 0 ? 0 : z > 1 ? 1 : z || 0,
                L = he.progress;
              if (n && (i = r, r = se ? Me() : C, ae && (A = E, E = a && !le ? a.totalProgress() : P)), Z && !P && X && !di && !Li && Ri && o < C + (C - i) / (Oi() - _i) * Z && (P = 1e-4), P !== L && he.enabled) {
                if (_ = he.isActive = !!P && P < 1, c = !!L && L < 1, p = _ !== c, u = p || !!P != !!L, he.direction = P > L ? 1 : -1, he.progress = P, u && !di && (g = P && !L ? 0 : 1 === P ? 1 : 1 === L ? 2 : 3, le && (m = !p && "none" !== ue[g + 1] && ue[g + 1] || ue[g], y = a && ("complete" === m || "reset" === m || m in a))), ie && (p || y) && (y || H || !a) && (ao(ie) ? ie(he) : he.getTrailing(ie).forEach((e => e.endAnimation()))), le || (!I || di || Li ? a && a.totalProgress(P, !(!di || !we && !e)) : (I._dp._time - I._start !== I._time && I.render(I._dp._time - I._start), I.resetTo ? I.resetTo("totalProgress", P, a._tTime / a._tDur) : (I.vars.totalProgress = P, I.invalidate().restart()))), X)
                  if (e && Y && (b.style[Y + oe.os2] = S), ge) {
                    if (u) {
                      if (k = !e && P > L && l + 1 > C && C + 1 >= Ki(_e, oe), te)
                        if (e || !_ && !k) ml(X, b);
                        else {
                          let e = Mo(X, !0),
                            a = C - o;
                          ml(X, si, e.top + (oe === $r ? a : 0) + yo, e.left + (oe === $r ? 0 : a) + yo)
                        } ll(_ || k ? h : f), N && P < 1 && _ || w(x + (1 !== P || k ? 0 : M))
                    }
                  } else w(Hi(x + M * P));
                ae && !t.tween && !di && !Li && O.restart(!0), F && (p || ee && P && (P < 1 || !zi)) && oi(F.targets).forEach((e => e.classList[_ || ee ? "add" : "remove"](F.className))), G && !le && !e && G(he), u && !di ? (le && (y && ("complete" === m ? a.pause().totalProgress(1) : "reset" === m ? a.restart(!0).pause() : "restart" === m ? a.restart(!0) : a[m]()), G && G(he)), !p && zi || ($ && p && ro(he, $), me[g] && ro(he, me[g]), ee && (1 === P ? he.kill(!1, 1) : me[g] = 0), p || (g = 1 === P ? 1 : 3, me[g] && ro(he, me[g]))), re && !_ && Math.abs(he.getVelocity()) > (to(re) ? re : 2500) && (so(he.callbackAnimation), I ? I.progress(1) : so(a, "reverse" === m ? 1 : !P, 1))) : le && G && !di && G(he)
              }
              if (j) {
                let e = se ? C / se.duration() * (se._caScrollDist || 0) : C;
                T(e + (d._isFlipped ? 1 : 0)), j(e)
              }
              V && V(-C / se.duration() * (se._caScrollDist || 0))
            }, he.enable = (e, a) => {
              he.enabled || (he.enabled = !0, jo(_e, "resize", qo), de || jo(_e, "scroll", Go), fe && jo(hl, "refreshInit", fe), !1 !== e && (he.progress = xe = 0, r = i = ye = Me()), !1 !== a && he.refresh())
            }, he.getTween = e => e && t ? t.tween : I, he.setPositions = (e, a, t, n) => {
              if (se) {
                let t = se.scrollTrigger,
                  n = se.duration(),
                  s = t.end - t.start;
                e = t.start + s * e / n, a = t.start + s * a / n
              }
              he.refresh(!1, !1, {
                start: Gi(e, t && !!he._startClamp),
                end: Gi(a, t && !!he._endClamp)
              }, n), he.update()
            }, he.adjustPinSpacing = e => {
              if (C && e) {
                let a = C.indexOf(oe.d) + 1;
                C[a] = parseFloat(C[a]) + e + yo, C[1] = parseFloat(C[1]) + e + yo, ll(C)
              }
            }, he.disable = (e, a) => {
              if (he.enabled && (!1 !== e && he.revert(!0, !0), he.enabled = he.isActive = !1, a || I && I.pause(), D = 0, n && (n.uncache = 1), fe && zo(hl, "refreshInit", fe), O && (O.pause(), t.tween && t.tween.kill() && (t.tween = 0)), !de)) {
                let e = Ro.length;
                for (; e--;)
                  if (Ro[e].scroller === _e && Ro[e] !== he) return;
                zo(_e, "resize", qo), de || zo(_e, "scroll", Go)
              }
            }, he.kill = (t, s) => {
              he.disable(t, s), I && !s && I.kill(), q && delete Vo[q];
              let r = Ro.indexOf(he);
              r >= 0 && Ro.splice(r, 1), r === ui && tl > 0 && ui--, r = 0, Ro.forEach((e => e.scroller === he.scroller && (r = 1))), r || Ai || (he.scroll.rec = 0), a && (a.scrollTrigger = null, t && a.revert({
                kill: !1
              }), s || a.kill()), _ && [_, c, d, g].forEach((e => e.parentNode && e.parentNode.removeChild(e))), Pi === he && (Pi = 0), X && (n && (n.uncache = 1), r = 0, Ro.forEach((e => e.pin === X && r++)), r || (n.spacer = 0)), e.onKill && e.onKill(he)
            }, Ro.push(he), he.enable(!1, !1), B && B(he), a && a.add && !v) {
            let e = he.update;
            he.update = () => {
              he.update = e, o || l || he.refresh()
            }, Qr.delayedCall(.01, he.update), v = .01, o = l = 0
          } else he.refresh();
          X && (() => {
            if (Ii !== Ko) {
              let e = Ii = Ko;
              requestAnimationFrame((() => e === Ko && el(!0)))
            }
          })()
        }
        static register(e) {
          return ei || (Qr = e || Xi(), Wi() && window.document && hl.enable(), ei = Vi), ei
        }
        static defaults(e) {
          if (e)
            for (let a in e) Io[a] = e[a];
          return Io
        }
        static disable(e, a) {
          Vi = 0, Ro.forEach((t => t[a ? "kill" : "disable"](e))), zo(ai, "wheel", Go), zo(ti, "scroll", Go), clearInterval(ci), zo(ti, "touchcancel", Ui), zo(si, "touchstart", Ui), No(zo, ti, "pointerdown,touchstart,mousedown", qi), No(zo, ti, "pointerup,touchend,mouseup", $i), ii.kill(), Qi(zo);
          for (let e = 0; e < Er.length; e += 3) Eo(zo, Er[e], Er[e + 1]), Eo(zo, Er[e], Er[e + 2])
        }
        static enable() {
          if (ai = window, ti = document, ni = ti.documentElement, si = ti.body, Qr && (oi = Qr.utils.toArray, li = Qr.utils.clamp, Ci = Qr.core.context || Ui, bi = Qr.core.suppressOverwrites || Ui, Ti = ai.history.scrollRestoration || "auto", al = ai.pageYOffset, Qr.core.globals("ScrollTrigger", hl), si)) {
            Vi = 1, Ni = document.createElement("div"), Ni.style.height = "100vh", Ni.style.position = "absolute", Qo(), Fi(), Kr.register(Qr), hl.isTouch = Kr.isTouch, Si = Kr.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), jo(ai, "wheel", Go), ri = [ai, ti, ni, si], Qr.matchMedia ? (hl.matchMedia = e => {
              let a, t = Qr.matchMedia();
              for (a in e) t.add(a, e[a]);
              return t
            }, Qr.addEventListener("matchMediaInit", (() => Jo())), Qr.addEventListener("matchMediaRevert", (() => Yo())), Qr.addEventListener("matchMedia", (() => {
              el(0, 1), Wo("matchMedia")
            })), Qr.matchMedia("(orientation: portrait)", (() => (Fo(), Fo)))) : console.warn("Requires GSAP 3.11.0 or later"), Fo(), jo(ti, "scroll", Go);
            let e, a, t = si.style,
              n = t.borderTopStyle,
              s = Qr.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), t.borderTopStyle = "solid", e = Mo(si), $r.m = Math.round(e.top + $r.sc()) || 0, qr.m = Math.round(e.left + qr.sc()) || 0, n ? t.borderTopStyle = n : t.removeProperty("border-top-style"), ci = setInterval(Bo, 250), Qr.delayedCall(.5, (() => Li = 0)), jo(ti, "touchcancel", Ui), jo(si, "touchstart", Ui), No(jo, ti, "pointerdown,touchstart,mousedown", qi), No(jo, ti, "pointerup,touchend,mouseup", $i), mi = Qr.utils.checkPrefix("transform"), rl.push(mi), ei = Oi(), ii = Qr.delayedCall(.2, el).pause(), hi = [ti, "visibilitychange", () => {
                let e = ai.innerWidth,
                  a = ai.innerHeight;
                ti.hidden ? (vi = e, pi = a) : vi === e && pi === a || qo()
              }, ti, "DOMContentLoaded", el, ai, "load", el, ai, "resize", qo], Qi(jo), Ro.forEach((e => e.enable(0, 1))), a = 0; a < Er.length; a += 3) Eo(zo, Er[a], Er[a + 1]), Eo(zo, Er[a], Er[a + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (zi = !!e.limitCallbacks);
          let a = e.syncInterval;
          a && clearInterval(ci) || (ci = a) && setInterval(Bo, a), "ignoreMobileResize" in e && (wi = 1 === hl.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Qi(zo) || Qi(jo, e.autoRefreshEvents || "none"), ki = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, a) {
          let t = Ur(e),
            n = Er.indexOf(t),
            s = Yi(t);
          ~n && Er.splice(n, s ? 6 : 2), a && (s ? Ar.unshift(ai, a, si, a, ni, a) : Ar.unshift(t, a))
        }
        static clearMatchMedia(e) {
          Ro.forEach((a => a._ctx && a._ctx.query === e && a._ctx.kill(!0, !0)))
        }
        static isInViewport(e, a, t) {
          let n = (eo(e) ? Ur(e) : e).getBoundingClientRect(),
            s = n[t ? co : go] * a || 0;
          return t ? n.right - s > 0 && n.left + s < ai.innerWidth : n.bottom - s > 0 && n.top + s < ai.innerHeight
        }
        static positionInViewport(e, a, t) {
          eo(e) && (e = Ur(e));
          let n = e.getBoundingClientRect(),
            s = n[t ? co : go],
            r = null == a ? s / 2 : a in Po ? Po[a] * s : ~a.indexOf("%") ? parseFloat(a) * s / 100 : parseFloat(a) || 0;
          return t ? (n.left + r) / ai.innerWidth : (n.top + r) / ai.innerHeight
        }
        static killAll(e) {
          if (Ro.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = $o.killAll || [];
            $o = {}, e.forEach((e => e()))
          }
        }
      }
      hl.version = "3.12.2", hl.saveStyles = e => e ? oi(e).forEach((e => {
        if (e && e.style) {
          let a = Xo.indexOf(e);
          a >= 0 && Xo.splice(a, 5), Xo.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Qr.core.getCache(e), Ci())
        }
      })) : Xo, hl.revert = (e, a) => Jo(!e, a), hl.create = (e, a) => new hl(e, a), hl.refresh = e => e ? qo() : (ei || hl.register()) && el(!0), hl.update = e => ++Er.cache && nl(!0 === e ? 2 : 0), hl.clearScrollMemory = Zo, hl.maxScroll = (e, a) => Ki(e, a ? qr : $r), hl.getScrollFunc = (e, a) => Hr(Ur(e), a ? qr : $r), hl.getById = e => Vo[e], hl.getAll = () => Ro.filter((e => "ScrollSmoother" !== e.vars.id)), hl.isScrolling = () => !!Ri, hl.snapDirectional = To, hl.addEventListener = (e, a) => {
        let t = $o[e] || ($o[e] = []);
        ~t.indexOf(a) || t.push(a)
      }, hl.removeEventListener = (e, a) => {
        let t = $o[e],
          n = t && t.indexOf(a);
        n >= 0 && t.splice(n, 1)
      }, hl.batch = (e, a) => {
        let t, n = [],
          s = {},
          r = a.interval || .016,
          i = a.batchMax || 1e9,
          o = (e, a) => {
            let t = [],
              n = [],
              s = Qr.delayedCall(r, (() => {
                a(t, n), t = [], n = []
              })).pause();
            return e => {
              t.length || s.restart(!0), t.push(e.trigger), n.push(e), i <= t.length && s.progress(1)
            }
          };
        for (t in a) s[t] = "on" === t.substr(0, 2) && ao(a[t]) && "onRefreshInit" !== t ? o(0, a[t]) : a[t];
        return ao(i) && (i = i(), jo(hl, "refresh", (() => i = a.batchMax()))), oi(e).forEach((e => {
          let a = {};
          for (t in s) a[t] = s[t];
          a.trigger = e, n.push(hl.create(a))
        })), n
      };
      let fl, bl = (e, a, t, n) => (a > n ? e(n) : a < 0 && e(0), t > n ? (n - a) / (t - a) : t < 0 ? a / (a - t) : 1),
        kl = (e, a) => {
          !0 === a ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (Kr.isTouch ? " pinch-zoom" : "") : "none", e === ni && kl(si, a)
        },
        yl = {
          auto: 1,
          scroll: 1
        },
        wl = e => {
          let a, {
              event: t,
              target: n,
              axis: s
            } = e,
            r = (t.changedTouches ? t.changedTouches[0] : t).target,
            i = r._gsap || Qr.core.getCache(r),
            o = Oi();
          if (!i._isScrollT || o - i._isScrollT > 2e3) {
            for (; r && r !== si && (r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth || !yl[(a = wo(r)).overflowY] && !yl[a.overflowX]);) r = r.parentNode;
            i._isScroll = r && r !== n && !Yi(r) && (yl[(a = wo(r)).overflowY] || yl[a.overflowX]), i._isScrollT = o
          }(i._isScroll || "x" === s) && (t.stopPropagation(), t._gsapAllow = !0)
        },
        xl = (e, a, t, n) => Kr.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: a,
          onWheel: n = n && wl,
          onPress: n,
          onDrag: n,
          onScroll: n,
          onEnable: () => t && jo(ti, Kr.eventTypes[0], Sl, !1, !0),
          onDisable: () => zo(ti, Kr.eventTypes[0], Sl, !0)
        }),
        Ml = /(input|label|select|textarea)/i,
        Sl = e => {
          let a = Ml.test(e.target.tagName);
          (a || fl) && (e._gsapAllow = !0, fl = a)
        };
      hl.sort = e => Ro.sort(e || ((e, a) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (a.start + -1e6 * (a.vars.refreshPriority || 0)))), hl.observe = e => new Kr(e), hl.normalizeScroll = e => {
        if (void 0 === e) return yi;
        if (!0 === e && yi) return yi.enable();
        if (!1 === e) return yi && yi.kill();
        let a = e instanceof Kr ? e : (e => {
          no(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let a, t, n, s, r, i, o, l, {
              normalizeScrollX: _,
              momentum: c,
              allowNestedScroll: d,
              onRelease: g
            } = e,
            m = Ur(e.target) || ni,
            u = Qr.core.globals().ScrollSmoother,
            v = u && u.get(),
            p = Si && (e.content && Ur(e.content) || v && !1 !== e.content && !v.smooth() && v.content()),
            h = Hr(m, $r),
            f = Hr(m, qr),
            b = 1,
            k = (Kr.isTouch && ai.visualViewport ? ai.visualViewport.scale * ai.visualViewport.width : ai.outerWidth) / ai.innerWidth,
            y = 0,
            w = ao(c) ? () => c(a) : () => c || 2.8,
            x = xl(m, e.type, !0, d),
            M = () => s = !1,
            S = Ui,
            C = Ui,
            T = () => {
              t = Ki(m, $r), C = li(Si ? 1 : 0, t), _ && (S = li(0, Ki(m, qr))), n = Ko
            },
            N = () => {
              p._gsap.y = Hi(parseFloat(p._gsap.y) + h.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
            },
            j = () => {
              T(), r.isActive() && r.vars.scrollY > t && (h() > t ? r.progress(1) && h(t) : r.resetTo("scrollY", t))
            };
          return p && Qr.set(p, {
            y: "+=0"
          }), e.ignoreCheck = e => Si && "touchmove" === e.type && (() => {
            if (s) {
              requestAnimationFrame(M);
              let e = Hi(a.deltaY / 2),
                t = C(h.v - e);
              if (p && t !== h.v + h.offset) {
                h.offset = t - h.v;
                let e = Hi((parseFloat(p && p._gsap.y) || 0) - h.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", p._gsap.y = e + "px", h.cacheID = Er.cache, nl()
              }
              return !0
            }
            h.offset && N(), s = !0
          })() || b > 1.05 && "touchstart" !== e.type || a.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            s = !1;
            let e = b;
            b = Hi((ai.visualViewport && ai.visualViewport.scale || 1) / k), r.pause(), e !== b && kl(m, b > 1.01 || !_ && "x"), i = f(), o = h(), T(), n = Ko
          }, e.onRelease = e.onGestureStart = (e, a) => {
            if (h.offset && N(), a) {
              Er.cache++;
              let a, n, s = w();
              _ && (a = f(), n = a + .05 * s * -e.velocityX / .227, s *= bl(f, a, n, Ki(m, qr)), r.vars.scrollX = S(n)), a = h(), n = a + .05 * s * -e.velocityY / .227, s *= bl(h, a, n, Ki(m, $r)), r.vars.scrollY = C(n), r.invalidate().duration(s).play(.01), (Si && r.vars.scrollY >= t || a >= t - 1) && Qr.to({}, {
                onUpdate: j,
                duration: s
              })
            } else l.restart(!0);
            g && g(e)
          }, e.onWheel = () => {
            r._ts && r.pause(), Oi() - y > 1e3 && (n = 0, y = Oi())
          }, e.onChange = (e, a, t, s, r) => {
            if (Ko !== n && T(), a && _ && f(S(s[2] === a ? i + (e.startX - e.x) : f() + a - s[1])), t) {
              h.offset && N();
              let a = r[2] === t,
                n = a ? o + e.startY - e.y : h() + t - r[1],
                s = C(n);
              a && n !== s && (o += s - n), h(s)
            }(t || a) && nl()
          }, e.onEnable = () => {
            kl(m, !_ && "x"), hl.addEventListener("refresh", j), jo(ai, "resize", j), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = f.smooth = !1), x.enable()
          }, e.onDisable = () => {
            kl(m, !0), zo(ai, "resize", j), hl.removeEventListener("refresh", j), x.kill()
          }, e.lockAxis = !1 !== e.lockAxis, a = new Kr(e), a.iOS = Si, Si && !h() && h(1), Si && Qr.ticker.add(Ui), l = a._dc, r = Qr.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: _ ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: ul(h, h(), (() => r.pause()))
            },
            onUpdate: nl,
            onComplete: l.vars.onComplete
          }), a
        })(e);
        return yi && yi.target === a.target && yi.kill(), Yi(a.target) && (yi = a), a
      }, hl.core = {
        _getVelocityProp: Wr,
        _inputObserver: xl,
        _scrollers: Er,
        _proxies: Ar,
        bridge: {
          ss: () => {
            Ri || Wo("scrollStart"), Ri = Oi()
          },
          ref: () => di
        }
      }, Xi() && Qr.registerPlugin(hl);
      let Cl, Tl, Nl, jl, zl, El, Al, Il, Pl, Ll, Ol, Dl, Rl, Vl, Bl, Gl, Fl = () => "undefined" != typeof window,
        ql = () => Cl || Fl() && (Cl = window.gsap) && Cl.registerPlugin && Cl,
        $l = e => Ll.maxScroll(e || Nl);
      class Ul {
        constructor(e) {
          Tl || Ul.register(Cl) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, Ol && Ol.kill(), Ol = this, Bl(this);
          let a, t, n, s, r, i, o, l, _, c, d, g, m, u, v, {
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
            S = Ll.getScrollFunc(Nl),
            C = 1 === Ll.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8,
            T = C && +e.speed || 1,
            N = 0,
            j = 0,
            z = 1,
            E = Rl(0),
            A = () => E.update(-N),
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
              (e !== N && !c || t) && (w && (e = Math.round(e)), C && (a.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", a._gsap.y = e + "px"), j = e - N, N = e, Ll.isUpdating || Ul.isRefreshing || Ll.update())
            },
            D = function(e) {
              return arguments.length ? (e < 0 && (e = 0), I.y = -e, u = !0, c ? N = -e : O(-e), Ll.isRefreshing ? s.update() : S(e / T), this) : -N
            },
            R = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!Ll.isRefreshing) {
                let e = $l(t) * T;
                e < -N && D(e), Gl.restart(!0)
              }
            })),
            V = e => {
              t.scrollTop = 0, e.target.contains && e.target.contains(t) || k && !1 === k(this, e) || (Ll.isInViewport(e.target) || e.target === v || this.scrollTo(e.target, !1, "center center"), v = e.target)
            },
            B = (e, a) => {
              if (e < a.start) return e;
              let t = isNaN(a.ratio) ? 1 : a.ratio,
                n = a.end - a.start,
                s = e - a.start,
                r = a.offset || 0,
                i = a.pins || [],
                o = i.offset || 0,
                l = a._startClamp && a.start <= 0 || a.pins && a.pins.offset ? 0 : a._endClamp && a.end === $l() ? 1 : .5;
              return i.forEach((a => {
                n -= a.distance, a.nativeStart <= e && (s -= a.distance)
              })), o && (s *= (n - o / t) / n), e + (s - r * l) / t - s
            },
            G = (e, a, t) => {
              t || (e.pins.length = e.pins.offset = 0);
              let n, s, r, i, o, l, _, c, d = e.pins,
                g = e.markers;
              for (_ = 0; _ < a.length; _++)
                if (c = a[_], e.trigger && c.trigger && e !== c && (c.trigger === e.trigger || c.pinnedContainer === e.trigger || e.trigger.contains(c.trigger)) && (o = c._startNative || c._startClamp || c.start, l = c._endNative || c._endClamp || c.end, r = B(o, e), i = c.pin && l > 0 ? r + (l - o) : B(l, e), c.setPositions(r, i, !0, (c._startClamp ? Math.max(0, r) : r) - o), c.markerStart && g.push(Cl.quickSetter([c.markerStart, c.markerEnd], "y", "px")), c.pin && c.end > 0 && !t)) {
                  if (n = c.end - c.start, s = e._startClamp && c.start < 0, s) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void G(e, a);
                    n += c.start, d.offset = -c.start
                  }
                  d.push({
                    start: c.start,
                    nativeStart: o,
                    end: c.end,
                    distance: n,
                    trig: c
                  }), e.setPositions(e.start, e.end + (s ? -c.start : n), !0)
                }
            },
            F = (e, a) => {
              r.forEach((t => G(t, e, a)))
            },
            q = () => {
              P(), requestAnimationFrame(P), r && (Ll.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), r.forEach((e => {
                let a = e._startClamp || e.start,
                  t = e.autoSpeed ? Math.min($l(), e.end) : a + Math.abs((e.end - a) / e.ratio),
                  n = t - e.end;
                if (a -= n / 2, t -= n / 2, a > t) {
                  let e = a;
                  a = t, t = e
                }
                e._startClamp && a < 0 ? (t = e.ratio < 0 ? $l() : e.end / e.ratio, n = t - e.end, a = 0) : (e.ratio < 0 || e._endClamp && t >= $l()) && (t = $l(), a = e.ratio < 0 || e.ratio > 1 ? 0 : t - (t - e.start) / e.ratio, n = (t - a) * e.ratio - (e.end - e.start)), e.offset = n || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(a, t, !0)
              })), F(Ll.sort())), E.reset()
            },
            $ = () => Ll.addEventListener("refresh", q),
            U = () => r && r.forEach((e => e.vars.onRefresh(e))),
            H = () => (r && r.forEach((e => e.vars.onRefreshInit(e))), U),
            W = (e, a, t, n) => () => {
              let s = "function" == typeof a ? a(t, n) : a;
              s || 0 === s || (s = n.getAttribute("data-" + M + e) || ("speed" === e ? 1 : 0)), n.setAttribute("data-" + M + e, s);
              let r = "clamp(" === (s + "").substr(0, 6);
              return {
                clamp: r,
                value: r ? s.substr(6, s.length - 7) : s
              }
            },
            X = (e, a, n, s, i) => {
              i = ("function" == typeof i ? i(s, e) : i) || 0;
              let o, l, _, c, d, g, m = W("speed", a, s, e),
                u = W("lag", n, s, e),
                v = Cl.getProperty(e, "y"),
                p = e._gsap,
                h = [],
                f = () => {
                  a = m(), n = parseFloat(u().value), o = parseFloat(a.value) || 1, _ = "auto" === a.value, d = _ || l && l._startClamp && l.start <= 0 || h.offset ? 0 : l && l._endClamp && l.end === $l() ? 1 : .5, c && c.kill(), c = n && Cl.to(e, {
                    ease: Dl,
                    overwrite: !1,
                    y: "+=0",
                    duration: n
                  }), l && (l.ratio = o, l.autoSpeed = _)
                },
                b = () => {
                  p.y = v + "px", p.renderTransform(1), f()
                },
                k = [],
                y = 0,
                w = a => {
                  if (_) {
                    b();
                    let t = ((e, a) => {
                      let t, n, s = e.parentNode || zl,
                        r = e.getBoundingClientRect(),
                        i = s.getBoundingClientRect(),
                        o = i.top - r.top,
                        l = i.bottom - r.bottom,
                        _ = (Math.abs(o) > Math.abs(l) ? o : l) / (1 - a),
                        c = -_ * a;
                      return _ > 0 && (t = i.height / (Nl.innerHeight + i.height), n = .5 === t ? 2 * i.height : 2 * Math.min(i.height, Math.abs(-_ * t / (2 * t - 1))) * (a || 1), c += a ? -n * a : -n / 2, _ += n), {
                        change: _,
                        offset: c
                      }
                    })(e, Pl(0, 1, -a.start / (a.end - a.start)));
                    y = t.change, g = t.offset
                  } else g = h.offset || 0, y = (a.end - a.start - g) * (1 - o);
                  h.forEach((e => y -= e.distance * (1 - o))), a.offset = y || .001, a.vars.onUpdate(a), c && c.progress(1)
                };
              return f(), (1 !== o || _ || c) && (l = Ll.create({
                trigger: _ ? e.parentNode : e,
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
                  let a, t, n, s = v + y * (e.progress - d),
                    r = h.length,
                    i = 0;
                  if (e.offset) {
                    if (r) {
                      for (t = -N, n = e.end; r--;) {
                        if (a = h[r], a.trig.isActive || t >= a.start && t <= a.end) return void(c && (a.trig.progress += a.trig.direction < 0 ? .001 : -.001, a.trig.update(0, 0, 1), c.resetTo("y", parseFloat(p.y), -j, !0), z && c.progress(1)));
                        t > a.end && (i += a.distance), n -= a.distance
                      }
                      s = v + i + y * ((Cl.utils.clamp(e.start, e.end, t) - e.start - i) / (n - e.start) - d)
                    }
                    k.length && !_ && k.forEach((e => e(s - i))), o = s + g, s = Math.round(1e5 * o) / 1e5 || 0, c ? (c.resetTo("y", s, -j, !0), z && c.progress(1)) : (p.y = s + "px", p.renderTransform(1))
                  }
                  var o
                }
              }), w(l), Cl.core.getCache(l.trigger).stRevert = H, l.startY = v, l.pins = h, l.markers = k, l.ratio = o, l.autoSpeed = _, e.style.willChange = "transform"), l
            };

          function Y() {
            return n = a.clientHeight, a.style.overflow = "visible", El.style.height = Nl.innerHeight + (n - Nl.innerHeight) / T + "px", n - Nl.innerHeight
          }
          $(), Ll.addEventListener("killAll", $), Cl.delayedCall(.5, (() => z = 0)), this.scrollTop = D, this.scrollTo = (e, a, t) => {
            let n = Cl.utils.clamp(0, $l(), isNaN(e) ? this.offset(e, t) : +e);
            a ? c ? Cl.to(this, {
              duration: C,
              scrollTop: n,
              overwrite: "auto",
              ease: Dl
            }) : S(n) : D(n)
          }, this.offset = (e, a) => {
            let t, n = (e = Il(e)[0]).style.cssText,
              s = Ll.create({
                trigger: e,
                start: a || "top top"
              });
            return r && (z ? Ll.refresh() : F([s], !0)), t = s.start / T, s.kill(!1), e.style.cssText = n, Cl.core.getCache(e).uncache = 1, t
          }, this.content = function(e) {
            if (arguments.length) {
              let t = Il(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || El.children[0];
              return t !== a && (a = t, _ = a.getAttribute("style") || "", R && R.observe(a), Cl.set(a, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), C || Cl.set(a, {
                clearProps: "transform"
              })), this
            }
            return a
          }, this.wrapper = function(e) {
            return arguments.length ? (t = Il(e || "#smooth-wrapper")[0] || (e => {
              let a = jl.querySelector(".ScrollSmoother-wrapper");
              return a || (a = jl.createElement("div"), a.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(a, e), a.appendChild(e)), a
            })(a), l = t.getAttribute("style") || "", Y(), Cl.set(t, C ? {
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
            (e = Il(e)).forEach((e => {
              let a = r.length;
              for (; a--;) r[a].trigger === e && r[a].kill()
            })), a = a || {};
            let t, n, {
                speed: s,
                lag: i,
                effectsPadding: o
              } = a,
              l = [];
            for (t = 0; t < e.length; t++) n = X(e[t], s, i, t, o), n && l.push(n);
            return r.push(...l), l
          }, this.sections = (e, a) => {
            if (i || (i = []), !e) return i.slice(0);
            let t = Il(e).map((e => Ll.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: a => {
                e.style.opacity = a.isActive ? "1" : "0", e.style.pointerEvents = a.isActive ? "all" : "none"
              }
            })));
            return a && a.add ? i.push(...t) : i = t.slice(0), t
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => O(e || 0 === e ? e : N), this.getVelocity = () => E.getVelocity(-N), Ll.scrollerProxy(t, {
            scrollTop: D,
            scrollHeight: () => Y() && El.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!C,
            content: a,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: Nl.innerWidth,
              height: Nl.innerHeight
            })
          }), Ll.defaults({
            scroller: t
          });
          let J = Ll.getAll().filter((e => e.scroller === Nl || e.scroller === t));
          J.forEach((e => e.revert(!0, !0))), s = Ll.create({
            animation: Cl.fromTo(I, {
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
                  e && (L(s), I.y = N), O(I.y, e), A(), h && !c && h(x)
                }
              }
            }),
            onRefreshInit: e => {
              if (Ul.isRefreshing) return;
              if (Ul.isRefreshing = !0, r) {
                let e = Ll.getAll().filter((e => !!e.pin));
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
              m = a && a._end > a._dp._time, g = N, I.y = 0, C && (1 === Ll.isTouch && (t.style.position = "absolute"), t.scrollTop = 0, 1 === Ll.isTouch && (t.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, Y() / T), m || L(e), I.y = -S() * T, O(I.y), z || e.animation.progress(Cl.utils.clamp(0, 1, g / T / -e.end)), m && (e.progress -= .001, e.update()), Ul.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: Nl,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => Y() / T,
            onScrubComplete: () => {
              E.reset(), f && f(this)
            },
            scrub: C || !0
          }), this.smooth = function(a) {
            return arguments.length && (C = a || 0, T = C && +e.speed || 1, s.scrubDuration(a)), s.getTween() ? s.getTween().duration() : 0
          }, s.getTween() && (s.getTween().vars.ease = e.ease || Dl), this.scrollTrigger = s, e.effects && this.effects(!0 === e.effects ? "[data-" + M + "speed], [data-" + M + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), J.forEach((e => {
            e.vars.scroller = t, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, a) {
            return arguments.length ? (!!c !== e && (e ? (s.getTween() && s.getTween().pause(), S(-N / T), E.reset(), d = Ll.normalizeScroll(), d && d.disable(), c = Ll.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => D(-N)
            }), c.nested = Vl(zl, "wheel,touch,scroll", !0, !1 !== a)) : (c.nested.kill(), c.kill(), c = 0, d && d.enable(), s.progress = (-N / T - s.start) / (s.end - s.start), L(s))), this) : !!c
          }, this.kill = this.revert = () => {
            this.paused(!1), L(s), s.kill();
            let e = (r || []).concat(i || []),
              n = e.length;
            for (; n--;) e[n].kill();
            Ll.scrollerProxy(t), Ll.removeEventListener("killAll", $), Ll.removeEventListener("refresh", q), t.style.cssText = l, a.style.cssText = _;
            let c = Ll.defaults({});
            c && c.scroller === t && Ll.defaults({
              scroller: Nl
            }), this.normalizer && Ll.normalizeScroll(!1), clearInterval(o), Ol = null, R && R.disconnect(), El.style.removeProperty("height"), Nl.removeEventListener("focusin", V)
          }, this.refresh = (e, a) => s.refresh(e, a), y && (this.normalizer = Ll.normalizeScroll(!0 === y ? {
            debounce: !0,
            content: !C && a
          } : y)), Ll.config(e), "overscrollBehavior" in Nl.getComputedStyle(El) && Cl.set([El, zl], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in Nl.getComputedStyle(El) && Cl.set([El, zl], {
            scrollBehavior: "auto"
          }), Nl.addEventListener("focusin", V), o = setInterval(A, 250), "loading" === jl.readyState || requestAnimationFrame((() => Ll.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return Tl || (Cl = e || ql(), Fl() && window.document && (Nl = window, jl = document, zl = jl.documentElement, El = jl.body), Cl && (Il = Cl.utils.toArray, Pl = Cl.utils.clamp, Dl = Cl.parseEase("expo"), Bl = Cl.core.context || function() {}, Ll = Cl.core.globals().ScrollTrigger, Cl.core.globals("ScrollSmoother", Ul), El && Ll && (Gl = Cl.delayedCall(.2, (() => Ll.isRefreshing || Ol && Ol.refresh())).pause(), Al = [Nl, jl, zl, El], Rl = Ll.core._getVelocityProp, Vl = Ll.core._inputObserver, Ul.refresh = Ll.refresh, Tl = 1))), Tl
        }
      }
      Ul.version = "3.12.2", Ul.create = e => Ol && e && Ol.content() === Il(e.content)[0] ? Ol : new Ul(e), Ul.get = () => Ol, ql() && Cl.registerPlugin(Ul);
      const Hl = {
        banner_collapsed: ["/rockstar-games-launcher", "/notifications", /^\/careers$/, /^\/support$/, /^\/newswire$/, /^\/member$/, /^\/videos\/[0-9]+/],
        full_exclusion: [/^\/activate/, /^\/settings/, /^\/contact/, /agegate/, /^\/Error.htm/, /corpinfo/, /privacy/, /legal/, /ccpa/, /cookies/, /^\/(photo|video|job)\/(rdr2|gtav)\/.*/, /^\/gta-online\/license-plates/]
      };
      let Wl, Xl = null,
        Yl = null;
      Wl = "grtTKPExpanded", Xl = zn.easeInOut, Yl = 2.5;
      const Jl = {
          default: En.easeInOut,
          takeover: In.easeInOut,
          parallax: An.easeInOut,
          intro: Xl
        },
        Zl = 2.5,
        Kl = (0, l.createContext)(void 0),
        Ql = e => {
          let {
            children: a
          } = e;
          const {
            lsSettings: t
          } = (0, k.TG)(), [n, s] = (0, l.useState)({}), [r, i] = (0, l.useState)(t?.[Wl] ?? !0), o = (e, a) => {
            s((t => ({
              ...t,
              [e]: a
            })))
          }, _ = () => {
            for (const e in n) Object.hasOwn(n, e) && n[e].reverse()
          };
          (0, l.useEffect)((() => () => {
            _()
          }), [n]);
          const d = (0, l.useMemo)((() => ({
            timelines: n,
            addTimeline: o,
            reverseAllTimelines: _,
            isExpanded: r,
            setIsExpanded: i
          })), [n, o, _, r, i]);
          return (0, c.jsx)(Kl.Provider, {
            value: d,
            children: a
          })
        },
        e_ = () => {
          const e = (0, l.useContext)(Kl);
          if (void 0 === e) throw new Error("useGSAP must be used within a GSAPProvider");
          return e
        };
      var a_ = t(593);
      const t_ = "rockstargames-modules-core-headerd86c52bd1138a5ac64fbd953c221901f",
        n_ = (0, l.forwardRef)(((e, a) => {
          const n = (0, l.useRef)(null),
            s = (0, l.useRef)(null),
            r = (0, l.useRef)(null),
            i = (0, l.useRef)(null);
          (0, l.useImperativeHandle)(a, (() => ({
            heroImagesRef: n
          })), [n?.current]);
          const {
            timelines: o
          } = e_();
          (0, l.useLayoutEffect)((() => {
            o.introTimeline && o.introTimeline.from(s.current, {
              "--hero-image-height": "130%",
              "--hero-image-width": "130%"
            }, 0).from([r.current, i.current], {
              scale: 1.1,
              duration: 2.45
            }, 0).set([s.current, r.current, i.current], {
              clearProps: "all"
            })
          }), [o.introTimeline]);
          let _ = null;
          return _ = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("img", {
              ref: s,
              className: `${t_} rockstargames-modules-core-headera427465345d397804e53716fdd982acd`,
              src: t(2508),
              alt: ""
            }), (0, c.jsx)("div", {
              ref: r,
              className: `${t_} rockstargames-modules-core-headerb98fdd250431340c9df6a41b482c412a`
            }), (0, c.jsx)("div", {
              ref: i,
              className: `${t_} rockstargames-modules-core-headerb25e7e645ca94933b2bff6819d738186`
            })]
          }), (0, c.jsx)("div", {
            ref: n,
            className: "rockstargames-modules-core-headera5da7a9bfdd60a0a82e0c82f4a3129fe",
            children: _
          })
        })),
        s_ = "rockstargames-modules-core-headerbecd6a4b0d6fa8dfaffd1dcf5341b2c1",
        r_ = (0, l.forwardRef)(((e, a) => {
          let {} = e;
          const n = (0, l.useRef)(null),
            {
              timelines: s
            } = e_(),
            {
              data: r,
              loading: i
            } = (0, b.aM)(a_.abc123),
            o = e => r?.abc123?.find((a => a.key === e))?.value ?? "";
          (0, l.useImperativeHandle)(a, (() => n?.current), [n?.current]);
          let _ = null,
            d = null,
            g = null;
          _ = Zl, d = "0", g = An.easeIn, (0, l.useLayoutEffect)((() => {
            s?.introTimeline && s?.introTimeline?.fromTo(n.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              ease: g,
              duration: 2.5
            }, "0"), s?.introTimeline && s?.introTimeline?.fromTo(n.current, {
              scale: 1.1
            }, {
              scale: 1,
              ease: Jl.intro,
              duration: 2.45
            }, 0)
          }), [s.introTimeline]);
          let m = null;
          return m = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("div", {
              className: `${s_} rockstargames-modules-core-headerc0c44cd265a4a881ad9191e525e15af1`,
              children: i ? null : (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)("p", {
                  children: " "
                }), (0, c.jsx)("p", {
                  children: " "
                }), (0, c.jsx)("p", {
                  children: " "
                })]
              })
            }), (0, c.jsx)("img", {
              className: "rockstargames-modules-core-headerea1d40c9886687e94c0a0f78849504e8",
              src: t(2981),
              alt: "Rockstar Games Logo"
            }), (0, c.jsx)("div", {
              className: s_,
              children: i ? null : (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)("p", {
                  children: o("d1.tkoLine1")
                }), (0, c.jsx)("p", {
                  children: o("d1.tkoLine2")
                }), (0, c.jsx)("p", {
                  children: o("d1.tkoLine3")
                })]
              })
            })]
          }), (0, c.jsx)("div", {
            ref: n,
            className: "rockstargames-modules-core-headeraf3aa4959408bb5b9abba1c63eb3a501",
            children: m
          })
        })),
        i_ = r_,
        o_ = {
          hero: "rockstargames-modules-core-headerb2d1aec986f8e6b6f1968b6d148267fc"
        },
        l_ = (0, l.forwardRef)(((e, a) => (0, c.jsx)("div", {
          className: "rockstargames-modules-core-headerf97165da4f8c608a9b34b2cde37612ea",
          ref: a
        }))),
        __ = (0, l.forwardRef)(((e, a) => {
          let {
            className: t
          } = e;
          const n = (0, l.useRef)(null),
            s = (0, l.useRef)(null),
            r = (0, l.useRef)(null),
            i = (0, l.useRef)(null),
            {
              addTimeline: o,
              timelines: _
            } = e_(),
            {
              data: d,
              loading: g
            } = (0, b.aM)(a_.abc123);
          return (0, l.useImperativeHandle)(a, (() => ({
            heroRef: s,
            heroUIRef: r,
            heroImagesRefs: i
          })), [s?.current, r?.current, i?.current]), (0, l.useLayoutEffect)((() => {
            const e = mr.context((() => {
              const e = mr.timeline({
                paused: !0,
                defaults: {
                  duration: Zl,
                  ease: Jl.intro
                }
              }).to(n.current, {
                autoAlpha: 0
              });
              o("introTimeline", e)
            }));
            return () => e.revert()
          }), []), (0, l.useEffect)((() => {
            n?.current && _?.introTimeline && _?.introTimeline.play()
          }), [n?.current, _?.introTimeline]), (0, c.jsxs)("div", {
            ref: s,
            className: [o_.hero, t || ""].join(" "),
            children: [(0, c.jsx)(l_, {
              ref: n
            }), (0, c.jsx)(n_, {
              ref: i
            }), (0, c.jsx)(i_, {
              ref: r
            })]
          })
        })),
        c_ = {
          closeBtn: "rockstargames-modules-core-headera9aa57395fc590ff52d0ccf37e8ebdfc"
        },
        d_ = e => {
          let {
            className: a,
            onClick: t,
            closeRef: n
          } = e;
          return (0, c.jsx)("button", {
            ref: n,
            type: "button",
            className: [c_.closeBtn, a || ""].join(" "),
            onClick: t,
            "aria-label": "close",
            disabled: !1
          })
        };
      mr.registerPlugin(hl, Ul);
      const g_ = e => {
          let {
            color: a = "black",
            background: t = "#fcaf17"
          } = e;
          const {
            mutateLSSettings: n,
            lsSettings: s
          } = (0, k.TG)(), {
            pathname: r
          } = (0, le.useLocation)(), {
            track: i
          } = te(), o = "/gta-online/license-plates" === r;
          let _;
          _ = "promo_banner";
          const d = (0, l.useRef)(),
            g = (0, l.useRef)(null),
            m = ((0, l.useRef)(null), (0, l.useRef)(null)),
            u = (0, l.useRef)(null),
            p = (0, l.useRef)(null),
            h = (0, l.useRef)(null),
            f = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            [w, x] = (0, l.useState)(!1),
            [M, S] = (0, l.useState)(),
            [C, T] = (0, l.useState)(),
            [N, j] = (0, l.useState)(!1),
            {
              timelines: z,
              addTimeline: E,
              isExpanded: A,
              setIsExpanded: I
            } = e_(),
            {
              data: P,
              loading: L
            } = (0, b.aM)(a_.abc123),
            O = e => P?.abc123?.find((a => a.key === e))?.value ?? "",
            D = (0, l.useMemo)((() => ({
              "--promo-banner-background": t,
              "--promo-banner-text-color": a
            })), [t, a]),
            R = (0, l.useCallback)((e => {
              if (!o) {
                const a = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
                e.direction === y?.current || a || z?.bannerTimeline.isActive() ? a && e?.animation?.pause() : -1 === e.direction ? e.animation?.reverse() : e.animation?.play(), document.body.setAttribute("data-show-more-content", `${Boolean(1===e.direction)}`), y.current = e.direction
              }
            }), [A, z?.bannerTimeline, o]);
          return (0, l.useEffect)((() => {
            const e = mr.context((() => {
              p?.current && !o && mr.to(p.current, {
                yPercent: -100,
                paused: !0,
                duration: .4,
                scrollTrigger: {
                  start: "120px",
                  end: 99999,
                  onUpdate: e => {
                    R(e)
                  }
                }
              })
            }));
            return () => e.revert()
          }), [p?.current, o]), (0, l.useEffect)((() => {
            const e = s?.[Wl] ?? !0,
              a = Hl.banner_collapsed.some((e => "string" == typeof e ? r === e : e.test(r))),
              t = !Hl.full_exclusion.find((e => e.test(r)));
            S(e), T(a), x(t), document.documentElement.style.setProperty("--promo-banner-height", t ? "var(--header-height, 60px)" : "0px")
          }), [r, s]), (0, l.useEffect)((() => {
            (C || (!1 === A || null === A) && !1 === M) && j(!0)
          }), [M, A, C]), (0, l.useEffect)((() => {
            if (z?.bannerTimeline) {
              const e = !1 === A;
              !C && (M && !1 !== A || A) ? N ? z.bannerTimeline.play() : z.bannerTimeline.progress(1) : e && (z.bannerTimeline.reverse(), mr.set(document.body, {
                clearProps: "--body-overflow"
              }), n({
                key: Wl,
                value: !1
              }))
            }
            null !== A && n({
              key: Wl,
              value: A
            })
          }), [A, M, C, r, z?.bannerTimeline, N]), (0, l.useLayoutEffect)((() => {
            const e = e => {
                "Escape" === e.key && I(!1)
              },
              a = () => {
                d?.current?.invalidate()
              };
            return window.addEventListener("resize", a), window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e), window.removeEventListener("resize", a)
            }
          }), []), (0, l.useLayoutEffect)((() => {
            const {
              currentSite: e
            } = (0, v.Z)(), a = mr.context((() => {
              z?.bannerTimeline?.progress(0).kill(), w && (d.current = mr.timeline({
                paused: !0,
                defaults: {
                  duration: .8,
                  ease: Jl.takeover
                },
                onStart: () => {
                  v.z.socialClub, i({
                    event: "takeover_impression",
                    element_placement: _
                  }), mr.set(document.body, {
                    "--body-overflow": "hidden"
                  })
                }
              }).fromTo(p.current, {
                height: 60
              }, {
                height: "100vh"
              }).fromTo(m.current, {
                autoAlpha: 1
              }, {
                autoAlpha: 0,
                duration: .5,
                ease: Jl.default
              }, "<").fromTo(u.current, {
                autoAlpha: .01,
                pointerEvents: "none",
                scale: 1.075
              }, {
                autoAlpha: 1,
                pointerEvents: "auto",
                scale: 1
              }, "<").fromTo([h.current, f.current], {
                autoAlpha: 0
              }, {
                autoAlpha: 1
              }, "<"), E("bannerTimeline", d?.current))
            }));
            return () => a.revert()
          }), [w]), (0, l.useEffect)((() => {
            const e = p?.current?.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
            e?.forEach(((e, a) => {
              0 === a ? (e.setAttribute("aria-hidden", A ? "hidden" : ""), e.setAttribute("tabindex", A ? "-1" : "")) : (e.setAttribute("aria-hidden", A ? "" : "hidden"), e.setAttribute("tabindex", A ? "" : "-1"))
            }));
            const a = e?.length ? e[1] : null,
              t = e?.length ? e[(e?.length || 1) - 1] : null,
              n = e => {
                A && ("Tab" !== e.key && 9 !== e.keyCode || (e.shiftKey ? document.activeElement === a && (t?.focus(), e.preventDefault()) : document.activeElement === t && (a.focus(), e.preventDefault())))
              };
            return p?.current?.addEventListener("keydown", n), () => {
              p?.current?.removeEventListener("keydown", n)
            }
          }), [A, p?.current]), w ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("div", {
              className: "rockstargames-modules-core-headera27236a2c093c09bf8e0cd22216f7312",
              ref: p,
              style: {
                ...D
              },
              role: A ? "dialog" : "",
              "aria-modal": A ? "true" : "",
              children: [(0, c.jsxs)("button", {
                type: "button",
                className: "rockstargames-modules-core-headerb38008570ecacc2bb7ac50d24cab3422",
                ref: m,
                onClick: () => {
                  C && T(!1), I(!0), i({
                    event: "site_banner_click",
                    element_placement: _
                  })
                },
                children: [(0, c.jsx)("span", {
                  className: "rockstargames-modules-core-headerd8f9351b0f0d90e2566ccba3776913bd",
                  children: O("d1.tkoLine1")
                }), (0, c.jsx)("span", {
                  className: "rockstargames-modules-core-headere36fcc8db1fb879b62d55ca120a928e0",
                  children: O("d1.bannerMsg")
                }), O("d1.bannerL2") ? (0, c.jsx)("span", {
                  children: O("d1.bannerL2")
                }) : null]
              }), (0, c.jsx)("div", {
                className: "rockstargames-modules-core-headerf49f0d234f253bd30514d0259d46e97b",
                ref: u,
                children: (0, c.jsx)(__, {})
              }), (0, c.jsx)("div", {
                ref: f,
                className: "rockstargames-modules-core-headerf0318c768b7b58ca0fcc8035bd325f3a",
                children: (0, c.jsx)(d_, {
                  closeRef: g,
                  onClick: () => {
                    I(!1), document.getElementById("promo-banner-cta"), z.bannerTimeline.reverse(), z.bannerTimeline.eventCallback("onReverseComplete", (() => {
                      mr.set(document.body, {
                        clearProps: "--body-overflow"
                      }), m?.current?.focus()
                    })), i({
                      event: "takeover_close",
                      element_placement: _
                    })
                  }
                })
              })]
            }), (0, c.jsx)("div", {
              ref: h,
              className: "rockstargames-modules-core-headerd2999eb8c365669e42f23b86cbe755b6"
            })]
          }) : null
        },
        m_ = () => {
          const e = oe(),
            a = (0, b.ZA)(),
            {
              currentSite: t
            } = (0, v.Z)(),
            n = t?.site === v.z.socialClub ? "/" : a;
          let s = null;
          return s = (0, c.jsx)(g_, {
            background: "linear-gradient(90deg, #64759D 0%, #826092 40%, #E39986 100%)",
            color: "white"
          }), (0, c.jsx)(se, {
            history: e,
            basename: n,
            children: (0, c.jsx)(ee, {
              children: (0, c.jsx)(Ql, {
                children: s
              })
            })
          })
        },
        u_ = JSON.parse('{"us":{"accessibility_skip_button":"Skip to main content","games_menu_featured":"Featured Games","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"View All","language_selector_default":"Select a Language","nav_bully_accomplishments":"Accomplishments","nav_bully_cta_buy_now":"Buy Now","nav_bully_game_overview":"Discover","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Careers on LinkedIn","nav_careers_contact_us":"Contact us","nav_careers_home":"Home","nav_careers_openings":"Openings","nav_cta_get_launcher":"Get Launcher","nav_gta_trilogy_accomplishments":"Accomplishments","nav_gta_trilogy_cta_buy_now":"Buy Now","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Overview","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Buy Now","nav_gtaiv_accomplishments":"Accomplishments","nav_gtaiv_cta_buy_now":"Buy Now","nav_gtaiv_overview":"Discover","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Accomplishments","nav_gtaiveflc_overview":"Overview","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Accomplishments","nav_gtao_browse_crews":"Browse All Crews","nav_gtao_checklist":"Checklist","nav_gtao_community":"Community","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Create a Crew","nav_gtao_cta_buy_now":"Buy Now","nav_gtao_discover":"Discover","nav_gtao_emblem_editor":"Emblem Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Browse all jobs","nav_gtao_jobs_playlists":"Playlists","nav_gtao_license_plate_creator":"License Plate Creator","nav_gtao_missions":"Missions","nav_gtao_my_character":"My Character","nav_gtao_my_crews":"My Crews","nav_gtao_my_jobs":"My jobs","nav_gtao_overview":"Overview","nav_gtao_photos":"Photos","nav_gtao_stats":"Stats","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Buy Now","nav_gtav_accomplishments":"Accomplishments","nav_gtav_checklist":"Checklist","nav_gtav_community":"Community","nav_gtav_create_crew":"Create a Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Browse All Crews","nav_gtav_cta_buy_now":"Buy Now","nav_gtav_discover":"Discover","nav_gtav_emblem_editor":"Emblem Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Browse all jobs","nav_gtav_licence_plate_creator":"License Plate Creator","nav_gtav_missions":"Missions","nav_gtav_my_character":"My Character","nav_gtav_my_crews":"My Crews","nav_gtav_my_jobs":"My Jobs","nav_gtav_overview":"Overview","nav_gtav_photos":"Photos","nav_gtav_playlists":"Playlists","nav_gtav_stats":"Stats","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Buy Now","nav_gtavc_discover":"Discover","nav_gtavcs_discover":"Discover","nav_lanoire_accomplishments":"Accomplishments","nav_lanoire_badge_pursuit":"Badge Pursuit","nav_lanoire_case_tracker":"Case Tracker","nav_lanoire_checklist":"Checklist","nav_lanoire_cta_buy_now":"Buy Now","nav_lanoire_official_site":"Official Site","nav_lanoire_overview":"Overview","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progress","nav_lanoire_stats":"Stats","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Buy Now","nav_more_dropdown":"More","nav_mp3_accomplishments":"Accomplishments","nav_mp3_career":"Career","nav_mp3_chapters":"Chapters","nav_mp3_checklist":"Checklist","nav_mp3_checkpoint_challenge":"Checkpoint Challenge","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Buy Now","nav_mp3_featured":"Featured","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Leaderboards","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"News","nav_mp3_ny_minute":"New York Minute","nav_mp3_official_site":"Official Site","nav_mp3_overview":"Overview","nav_mp3_progress":"Progress","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Specifications","nav_mp3_support":"Support","nav_mp3_weapons":"Weapons","nav_opens_in_new_window":"{text} (Link opens in new window)","nav_quick_access_games":"Games","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Accomplishments","nav_rdo_awards":"Awards","nav_rdo_benefits":"Benefits","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Club Rewards","nav_rdo_community":"Community","nav_rdo_competitive_series":"Competitive Series","nav_rdo_cta_buy_now":"Buy Now","nav_rdo_customization":"Customization","nav_rdo_explore":"Explore","nav_rdo_getting_started":"Getting Started","nav_rdo_guides":"Guides","nav_rdo_my_character":"My Character","nav_rdo_overview":"Overview","nav_rdo_photos":"Photos","nav_rdo_posses":"Posses","nav_rdo_posses_free_roam":"Posses and Free Roam","nav_rdo_progress":"Progress","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Rank Unlocks","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Specialist Roles","nav_rdo_story_missions":"Story Missions","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Buy Now","nav_rdr2_accomplishments":"Accomplishments","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Challenges","nav_rdr2_chapters":"Chapters","nav_rdr2_character":"Character","nav_rdr2_compendium":"Compendium","nav_rdr2_cta_buy_now":"Buy Now","nav_rdr2_explore":"Explore","nav_rdr2_gallery":"Gallery","nav_rdr2_locations":"Locations","nav_rdr2_media":"Media","nav_rdr2_music":"Music","nav_rdr2_online":"Online","nav_rdr2_overview":"Overview","nav_rdr2_progress":"Progress","nav_rdr2_stats":"Stats","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"The Van der Linde Gang","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Weaponry","nav_rdr2_wildlife":"Wildlife","nav_rockstargames_home":"Rockstar Games Home","nav_rockstargames_logo":"Click to open menu","nav_rsg_downloads":"Downloads","nav_rsg_games":"Games","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Your search query is too short. Queries must be at least {count} characters long.","nav_search_error_too_short_invalid_chars":"Your search query contains invalid characters ({invalidChars}). Remove these and try again.","nav_support_dashboard":"My Dashboard","nav_support_home":"Home","nav_support_service_status":"Service Status","nav_support_submit_ticket":"Submit a Ticket","nav_tabletennis_cta_buy_now":"Buy Now","nav_undeadnightmare_buy_now":"Buy Now","nav_undeadnightmare_discover":"Discover","nav_undeadnightmare_gallery":"Gallery","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"News","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Specifications","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"View All","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","search_action":"Search","search_close_button":"Close Search","search_open_button":"Open Search","search_placeholder":"Search Rockstar Games...","search_target_aria_label":"Search {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Games","search_target_jobs":"Jobs","search_target_posts":"Posts","search_target_user_photos":"User Photos","search_target_user_videos":"User Videos","search_target_users":"Users","search_target_videos":"Videos"},"de":{"accessibility_skip_button":"Zum Hauptinhalt springen","games_menu_featured":"Ausgewählte Spiele","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Alle anzeigen","language_selector_default":"Sprache auswählen","nav_bully_accomplishments":"Erfolge","nav_bully_cta_buy_now":"Jetzt kaufen","nav_bully_game_overview":"Entdecken","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Stellenangebote auf LinkedIn","nav_careers_contact_us":"Kontaktiere uns","nav_careers_home":"Startseite","nav_careers_openings":"Stellenangebote","nav_cta_get_launcher":"Launcher herunterladen","nav_gta_trilogy_accomplishments":"Erfolge","nav_gta_trilogy_cta_buy_now":"Jetzt kaufen","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Überblick","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Jetzt kaufen","nav_gtaiv_accomplishments":"Erfolge","nav_gtaiv_cta_buy_now":"Jetzt kaufen","nav_gtaiv_overview":"Entdecken","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Erfolge","nav_gtaiveflc_overview":"Überblick","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Erfolge","nav_gtao_browse_crews":"Alle Crews ansehen","nav_gtao_checklist":"Checkliste","nav_gtao_community":"Community","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crew erstellen","nav_gtao_cta_buy_now":"Jetzt kaufen","nav_gtao_discover":"Entdecken","nav_gtao_emblem_editor":"Emblem-Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Alle Jobs ansehen","nav_gtao_jobs_playlists":"Spielelisten","nav_gtao_license_plate_creator":"Nummernschild-Editor","nav_gtao_missions":"Missionen","nav_gtao_my_character":"Mein Charakter","nav_gtao_my_crews":"Meine Crews","nav_gtao_my_jobs":"Meine Jobs","nav_gtao_overview":"Überblick","nav_gtao_photos":"Fotos","nav_gtao_stats":"Statistiken","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Jetzt kaufen","nav_gtav_accomplishments":"Erfolge","nav_gtav_checklist":"Checkliste","nav_gtav_community":"Community","nav_gtav_create_crew":"Crew erstellen","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Alle Crews ansehen","nav_gtav_cta_buy_now":"Jetzt kaufen","nav_gtav_discover":"Entdecken","nav_gtav_emblem_editor":"Emblem-Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Alle Jobs ansehen","nav_gtav_licence_plate_creator":"Nummernschild-Editor","nav_gtav_missions":"Missionen","nav_gtav_my_character":"Mein Charakter","nav_gtav_my_crews":"Meine Crews","nav_gtav_my_jobs":"Meine Jobs","nav_gtav_overview":"Überblick","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Spielelisten","nav_gtav_stats":"Statistiken","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Jetzt kaufen","nav_gtavc_discover":"Entdecken","nav_gtavcs_discover":"Entdecken","nav_lanoire_accomplishments":"Erfolge","nav_lanoire_badge_pursuit":"Jagd nach Abzeichen","nav_lanoire_case_tracker":"Ermittlungsakten","nav_lanoire_checklist":"Checkliste","nav_lanoire_cta_buy_now":"Jetzt kaufen","nav_lanoire_official_site":"Offizielle Seite","nav_lanoire_overview":"Überblick","nav_lanoire_pc_console":"PC/Konsole","nav_lanoire_progress":"Fortschritt","nav_lanoire_stats":"Statistiken","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Jetzt kaufen","nav_more_dropdown":"Mehr","nav_mp3_accomplishments":"Erfolge","nav_mp3_career":"Karriere","nav_mp3_chapters":"Kapitel","nav_mp3_checklist":"Checkliste","nav_mp3_checkpoint_challenge":"Kontrollpunkt-Herausforderung","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Jetzt kaufen","nav_mp3_featured":"Vorgestellt","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Bestenlisten","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Neuigkeiten","nav_mp3_ny_minute":"Eine Minute in New York","nav_mp3_official_site":"Offizielle Seite","nav_mp3_overview":"Überblick","nav_mp3_progress":"Fortschritt","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Spezifikationen","nav_mp3_support":"Support","nav_mp3_weapons":"Waffen","nav_opens_in_new_window":"{text} (Link öffnet ein neues Fenster)","nav_quick_access_games":"Spiele","nav_quick_access_home":"Startseite","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Erfolge","nav_rdo_awards":"Auszeichnungen","nav_rdo_benefits":"Vorteile","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Club-Belohnungen","nav_rdo_community":"Community","nav_rdo_competitive_series":"Wettkampf-Serie","nav_rdo_cta_buy_now":"Jetzt kaufen","nav_rdo_customization":"Individualisierung","nav_rdo_explore":"Entdecken","nav_rdo_getting_started":"Erste Schritte","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mein Charakter","nav_rdo_overview":"Überblick","nav_rdo_photos":"Fotos","nav_rdo_posses":"Trupps","nav_rdo_posses_free_roam":"Trupps und Free Roam","nav_rdo_progress":"Fortschritt","nav_rdo_progression":"Fortschritt","nav_rdo_rank_unlocks":"Rang-Freischaltungen","nav_rdo_roles":"Rollen","nav_rdo_specialist_roles":"Spezialrollen","nav_rdo_story_missions":"Storymissionen","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Jetzt kaufen","nav_rdr2_accomplishments":"Erfolge","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Herausforderungen","nav_rdr2_chapters":"Kapitel","nav_rdr2_character":"Charakter","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Jetzt kaufen","nav_rdr2_explore":"Entdecken","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Schauplätze","nav_rdr2_media":"Medien","nav_rdr2_music":"Musik","nav_rdr2_online":"Online","nav_rdr2_overview":"Überblick","nav_rdr2_progress":"Fortschritt","nav_rdr2_stats":"Statistiken","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"Die Van-der-Linde-Bande","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Waffen","nav_rdr2_wildlife":"Tierwelt","nav_rockstargames_home":"Rockstar-Games-Startseite","nav_rockstargames_logo":"Klicken, um das Menü zu öffnen","nav_rsg_downloads":"Downloads","nav_rsg_games":"Spiele","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Deine Suchanfrage ist zu kurz. Suchbegriffe müssen mindestens {count} Zeichen lang sein.","nav_search_error_too_short_invalid_chars":"Deine Suchanfrage beinhaltet ungültige Zeichen ({invalidChars}). Bitte entferne diese und versuche es erneut.","nav_support_dashboard":"Meine Übersicht","nav_support_home":"Startseite","nav_support_service_status":"Service-Status","nav_support_submit_ticket":"Eine Anfrage einreichen","nav_tabletennis_cta_buy_now":"Jetzt kaufen","nav_undeadnightmare_buy_now":"Jetzt kaufen","nav_undeadnightmare_discover":"Entdecken","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Medien","nav_undeadnightmare_news":"Neuigkeiten","nav_undeadnightmare_ps3_digital":"PS3 – Digital","nav_undeadnightmare_specs":"Spezifikationen","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 – Digital","nav_view_all_games":"Alle anzeigen","profile_selector_mugshot":"{userName} Verbrecherfoto","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","search_action":"Suchen","search_close_button":"Suche schließen","search_open_button":"Suche öffnen","search_placeholder":"Rockstar Games durchsuchen …","search_target_aria_label":"Durchsuche {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Spiele","search_target_jobs":"Jobs","search_target_posts":"Beiträge","search_target_user_photos":"Fotos von Nutzern","search_target_user_videos":"Videos von Nutzern","search_target_users":"Nutzer","search_target_videos":"Videos"},"es":{"accessibility_skip_button":"Pasar al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","language_selector_default":"Selecciona un idioma","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Asistencia técnica","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contacta con nosotros","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Asistencia técnica","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Asistencia técnica","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Asistencia técnica","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de partidas","nav_gtao_license_plate_creator":"Creador de matrículas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Asistencia técnica","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de matrículas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de partidas","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Asistencia técnica","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio web oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Asistencia técnica","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio web oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Asistencia técnica","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una nueva ventana)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Ventajas","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Cuadrillas","nav_rdo_posses_free_roam":"Cuadrillas y Modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles especializados","nav_rdo_story_missions":"Misiones de la historia","nav_rdo_support":"Asistencia técnica","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Asistencia técnica","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Asistencia técnica","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Tu búsqueda es demasiado corta. Las búsquedas deben contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres que no son válidos ({invalidChars}). Quítalos e inténtalo de nuevo.","nav_support_dashboard":"Mi panel","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Asistencia técnica","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Vídeos de usuarios","search_target_users":"Usuarios","search_target_videos":"Vídeos"},"mx":{"accessibility_skip_button":"Ir al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","language_selector_default":"Seleccionar un idioma","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Soporte","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contáctanos","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Soporte","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Soporte","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Soporte","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de juego","nav_gtao_license_plate_creator":"Creador de placas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Soporte","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de placas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de juego","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Soporte","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Soporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Soporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una ventana nueva)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Canal de noticias","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Beneficios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Clanes","nav_rdo_posses_free_roam":"Clanes y modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles de especialistas","nav_rdo_story_missions":"Misiones narrativas","nav_rdo_support":"Soporte","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Soporte","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Armamento","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Canal de noticias","nav_rsg_store":"Tienda","nav_rsg_support":"Soporte","nav_rsg_videos":"Videos","nav_search_error_too_short":"Tu búsqueda es muy corta, ya que debe contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres no válidos: {invalidChars}. Quítalos de la búsqueda y vuelve a intentarlo.","nav_support_dashboard":"Mi panel de control","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Soporte","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Videos de usuarios","search_target_users":"Usuarios","search_target_videos":"Videos"},"fr":{"accessibility_skip_button":"Passer au contenu principal","games_menu_featured":"Jeux à la une","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Voir tout","language_selector_default":"Sélectionner une langue","nav_bully_accomplishments":"Exploits","nav_bully_cta_buy_now":"Acheter maintenant","nav_bully_game_overview":"Découvrir","nav_bully_Overview":"Assistance","nav_bully_videos":"Vidéos","nav_careers_careers_on_linkedin":"Emplois sur LinkedIn","nav_careers_contact_us":"Nous contacter","nav_careers_home":"Accueil","nav_careers_openings":"Postes à pourvoir","nav_cta_get_launcher":"Obtenir le Launcher","nav_gta_trilogy_accomplishments":"Exploits","nav_gta_trilogy_cta_buy_now":"Acheter maintenant","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Vue d\'ensemble","nav_gta_trilogy_support":"Assistance","nav_gta3_cta_buy_now":"Acheter maintenant","nav_gtaiv_accomplishments":"Exploits","nav_gtaiv_cta_buy_now":"Acheter maintenant","nav_gtaiv_overview":"Découvrir","nav_gtaiv_support":"Assistance","nav_gtaiveflc_accomplishments":"Exploits","nav_gtaiveflc_overview":"Vue d\'ensemble","nav_gtaiveflc_support":"Assistance","nav_gtao_accomplishments":"Exploits","nav_gtao_browse_crews":"Parcourir tous les crews","nav_gtao_checklist":"Check-list","nav_gtao_community":"Communauté","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Créer un crew","nav_gtao_cta_buy_now":"Acheter maintenant","nav_gtao_discover":"Découvrir","nav_gtao_emblem_editor":"Éditeur d\'emblèmes","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Activités","nav_gtao_jobs_browse_all":"Parcourir toutes les activités","nav_gtao_jobs_playlists":"Listes","nav_gtao_license_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtao_missions":"Missions","nav_gtao_my_character":"Mon personnage","nav_gtao_my_crews":"Mes crews","nav_gtao_my_jobs":"Mes activités","nav_gtao_overview":"Vue d\'ensemble","nav_gtao_photos":"Photos","nav_gtao_stats":"Statistiques","nav_gtao_story":"Histoire","nav_gtao_support":"Assistance","nav_gtao_videos":"Vidéos","nav_gtasanandreas_cta_buy_now":"Acheter maintenant","nav_gtav_accomplishments":"Exploits","nav_gtav_checklist":"Check-list","nav_gtav_community":"Communauté","nav_gtav_create_crew":"Créer un crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Parcourir tous les crews","nav_gtav_cta_buy_now":"Acheter maintenant","nav_gtav_discover":"Découvrir","nav_gtav_emblem_editor":"Éditeur d\'emblèmes","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Activités","nav_gtav_jobs_browse_all":"Parcourir toutes les activités","nav_gtav_licence_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtav_missions":"Missions","nav_gtav_my_character":"Mon personnage","nav_gtav_my_crews":"Mes crews","nav_gtav_my_jobs":"Mes activités","nav_gtav_overview":"Vue d\'ensemble","nav_gtav_photos":"Photos","nav_gtav_playlists":"Listes","nav_gtav_stats":"Statistiques","nav_gtav_story":"Histoire","nav_gtav_support":"Assistance","nav_gtav_videos":"Vidéos","nav_gtavc_cta_buy_now":"Acheter maintenant","nav_gtavc_discover":"Découvrir","nav_gtavcs_discover":"Découvrir","nav_lanoire_accomplishments":"Exploits","nav_lanoire_badge_pursuit":"Défi Traque & plaque","nav_lanoire_case_tracker":"Suivi d\'affaires","nav_lanoire_checklist":"Check-list","nav_lanoire_cta_buy_now":"Acheter maintenant","nav_lanoire_official_site":"Site officiel","nav_lanoire_overview":"Vue d\'ensemble","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progression","nav_lanoire_stats":"Statistiques","nav_lanoire_support":"Assistance","nav_lanoire_vr_case_files":"Les enquêtes VR","nav_midnightclubla_buy_now":"Acheter maintenant","nav_more_dropdown":"Plus","nav_mp3_accomplishments":"Exploits","nav_mp3_career":"Carrière","nav_mp3_chapters":"Chapitres","nav_mp3_checklist":"Check-list","nav_mp3_checkpoint_challenge":"Défi points de passage","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Acheter maintenant","nav_mp3_featured":"À la une","nav_mp3_grinds":"Défis","nav_mp3_leaderboards":"Classements","nav_mp3_multiplayer":"Multijoueur","nav_mp3_news":"Actualités","nav_mp3_ny_minute":"Minute new-yorkaise","nav_mp3_official_site":"Site officiel","nav_mp3_overview":"Vue d\'ensemble","nav_mp3_progress":"Progression","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Solo","nav_mp3_specifications":"Configuration","nav_mp3_support":"Assistance","nav_mp3_weapons":"Armes","nav_opens_in_new_window":"{text} (Le lien s\'ouvrira dans une nouvelle fenêtre)","nav_quick_access_games":"Jeux","nav_quick_access_home":"Accueil","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Exploits","nav_rdo_awards":"Récompenses","nav_rdo_benefits":"Avantages","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Récompenses du club","nav_rdo_community":"Communauté","nav_rdo_competitive_series":"Séries compétitives","nav_rdo_cta_buy_now":"Acheter maintenant","nav_rdo_customization":"Personnalisation","nav_rdo_explore":"Explorer","nav_rdo_getting_started":"Bien démarrer","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mon personnage","nav_rdo_overview":"Vue d\'ensemble","nav_rdo_photos":"Photos","nav_rdo_posses":"Groupes","nav_rdo_posses_free_roam":"Groupes et mode exploration","nav_rdo_progress":"Progression","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Éléments à déverrouiller","nav_rdo_roles":"Rôles","nav_rdo_specialist_roles":"Rôles spécialisés","nav_rdo_story_missions":"Missions de l\'histoire","nav_rdo_support":"Assistance","nav_rdr_cta_buy_now":"Acheter maintenant","nav_rdr2_accomplishments":"Exploits","nav_rdr2_artwork":"Illustrations","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Défis","nav_rdr2_chapters":"Chapitres","nav_rdr2_character":"Personnage","nav_rdr2_compendium":"Encyclopédie","nav_rdr2_cta_buy_now":"Acheter maintenant","nav_rdr2_explore":"Explorer","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Lieux","nav_rdr2_media":"Média","nav_rdr2_music":"Musique","nav_rdr2_online":"En ligne","nav_rdr2_overview":"Vue d\'ensemble","nav_rdr2_progress":"Progression","nav_rdr2_stats":"Statistiques","nav_rdr2_support":"Assistance","nav_rdr2_van_der_linde_gang":"La bande de Van der Linde","nav_rdr2_videos":"Vidéos","nav_rdr2_weaponry":"Armes","nav_rdr2_wildlife":"Vie sauvage","nav_rockstargames_home":"Accueil Rockstar Games","nav_rockstargames_logo":"Cliquez pour ouvrir le menu","nav_rsg_downloads":"Téléchargements","nav_rsg_games":"Jeux","nav_rsg_newswire":"Newswire","nav_rsg_store":"Boutique","nav_rsg_support":"Assistance","nav_rsg_videos":"Vidéos","nav_search_error_too_short":"Requête trop courte. Votre requête doit comporter au moins {count} caractères.","nav_search_error_too_short_invalid_chars":"Votre requête contient des caractères non valides ({invalidChars}). Veuillez les supprimer et réessayer.  ","nav_support_dashboard":"Mon tableau de bord","nav_support_home":"Accueil","nav_support_service_status":"État du service","nav_support_submit_ticket":"Envoyer une demande d\'assistance","nav_tabletennis_cta_buy_now":"Acheter maintenant","nav_undeadnightmare_buy_now":"Acheter maintenant","nav_undeadnightmare_discover":"Découvrir","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Infos","nav_undeadnightmare_media":"Média","nav_undeadnightmare_news":"Actualités","nav_undeadnightmare_ps3_digital":"PS3 - Version numérique","nav_undeadnightmare_specs":"Configuration","nav_undeadnightmare_suport":"Assistance","nav_undeadnightmare_videos":"Vidéos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Version numérique","nav_view_all_games":"Voir tout","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","quick_access_title":"Rockstar Games","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"Inscription","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","search_action":"Rechercher","search_close_button":"Fermer la recherche","search_open_button":"Ouvrir la recherche","search_placeholder":"Recherche sur Rockstar Games...","search_target_aria_label":"Rechercher {target}","search_target_community":"Communauté","search_target_crews":"Crews","search_target_games":"Jeux","search_target_jobs":"Activités","search_target_posts":"Publications","search_target_user_photos":"Photos d\'utilisateurs","search_target_user_videos":"Vidéos d\'utilisateurs","search_target_users":"Utilisateurs","search_target_videos":"Vidéos"},"it":{"accessibility_skip_button":"Vai ai contenuti principali","games_menu_featured":"Giochi in evidenza","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Visualizza tutto","language_selector_default":"Seleziona una lingua","nav_bully_accomplishments":"Premi","nav_bully_cta_buy_now":"Acquista ora","nav_bully_game_overview":"Scopri","nav_bully_Overview":"Supporto","nav_bully_videos":"Video","nav_careers_careers_on_linkedin":"Carriere su LinkedIn","nav_careers_contact_us":"Contattaci","nav_careers_home":"Home","nav_careers_openings":"Possibilità di impiego","nav_cta_get_launcher":"Ottieni il launcher","nav_gta_trilogy_accomplishments":"Premi","nav_gta_trilogy_cta_buy_now":"Acquista ora","nav_gta_trilogy_gta3":"GTAIII","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Panoramica","nav_gta_trilogy_support":"Supporto","nav_gta3_cta_buy_now":"Acquista ora","nav_gtaiv_accomplishments":"Premi","nav_gtaiv_cta_buy_now":"Acquista ora","nav_gtaiv_overview":"Scopri","nav_gtaiv_support":"Supporto","nav_gtaiveflc_accomplishments":"Premi","nav_gtaiveflc_overview":"Panoramica","nav_gtaiveflc_support":"Supporto","nav_gtao_accomplishments":"Premi","nav_gtao_browse_crews":"Esplora le crew","nav_gtao_checklist":"Lista","nav_gtao_community":"Community","nav_gtao_crews":"Crew","nav_gtao_crews_create":"Crea una crew","nav_gtao_cta_buy_now":"Acquista ora","nav_gtao_discover":"Scopri","nav_gtao_emblem_editor":"Editor simboli","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guide","nav_gtao_jobs":"Attività","nav_gtao_jobs_browse_all":"Esplora le attività","nav_gtao_jobs_playlists":"Elenchi partite","nav_gtao_license_plate_creator":"Creatore di targhe","nav_gtao_missions":"Missioni","nav_gtao_my_character":"Il mio personaggio","nav_gtao_my_crews":"Le mie crew","nav_gtao_my_jobs":"Le mie attività","nav_gtao_overview":"Panoramica","nav_gtao_photos":"Foto","nav_gtao_stats":"Statistiche","nav_gtao_story":"Storia","nav_gtao_support":"Supporto","nav_gtao_videos":"Video","nav_gtasanandreas_cta_buy_now":"Acquista ora","nav_gtav_accomplishments":"Premi","nav_gtav_checklist":"Lista","nav_gtav_community":"Community","nav_gtav_create_crew":"Crea una crew","nav_gtav_crews":"Crew","nav_gtav_crews_browse_all":"Esplora le crew","nav_gtav_cta_buy_now":"Acquista ora","nav_gtav_discover":"Scopri","nav_gtav_emblem_editor":"Editor simboli","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guide","nav_gtav_jobs":"Attività","nav_gtav_jobs_browse_all":"Esplora le attività","nav_gtav_licence_plate_creator":"Creatore di targhe","nav_gtav_missions":"Missioni","nav_gtav_my_character":"Il mio personaggio","nav_gtav_my_crews":"Le mie crew","nav_gtav_my_jobs":"Le mie attività","nav_gtav_overview":"Panoramica","nav_gtav_photos":"Foto","nav_gtav_playlists":"Elenchi partite","nav_gtav_stats":"Statistiche","nav_gtav_story":"Storia","nav_gtav_support":"Supporto","nav_gtav_videos":"Video","nav_gtavc_cta_buy_now":"Acquista ora","nav_gtavc_discover":"Scopri","nav_gtavcs_discover":"Scopri","nav_lanoire_accomplishments":"Premi","nav_lanoire_badge_pursuit":"Ricerca dei distintivi","nav_lanoire_case_tracker":"Registro dei casi","nav_lanoire_checklist":"Lista","nav_lanoire_cta_buy_now":"Acquista ora","nav_lanoire_official_site":"Sito ufficiale","nav_lanoire_overview":"Panoramica","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Statistiche","nav_lanoire_support":"Supporto","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Acquista ora","nav_more_dropdown":"Altro","nav_mp3_accomplishments":"Premi","nav_mp3_career":"Carriera","nav_mp3_chapters":"Capitoli","nav_mp3_checklist":"Lista","nav_mp3_checkpoint_challenge":"Sfida a checkpoint","nav_mp3_crews":"Crew","nav_mp3_cta_buy_now":"Acquista ora","nav_mp3_featured":"In evidenza","nav_mp3_grinds":"Sgobbate","nav_mp3_leaderboards":"Classifiche","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Notizie","nav_mp3_ny_minute":"Ultimo respiro","nav_mp3_official_site":"Sito ufficiale","nav_mp3_overview":"Panoramica","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Sfida a punti","nav_mp3_singleplayer":"Giocatore singolo","nav_mp3_specifications":"Requisiti","nav_mp3_support":"Supporto","nav_mp3_weapons":"Armi","nav_opens_in_new_window":"{text} (Il link si apre in una nuova finestra)","nav_quick_access_games":"Giochi","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Premi","nav_rdo_awards":"Ricompense","nav_rdo_benefits":"Vantaggi","nav_rdo_catalogue":"Catalogo","nav_rdo_club_rewards":"Ricompense del club","nav_rdo_community":"Community","nav_rdo_competitive_series":"Serie competitive","nav_rdo_cta_buy_now":"Acquista ora","nav_rdo_customization":"Personalizzazione","nav_rdo_explore":"Esplora","nav_rdo_getting_started":"Come iniziare","nav_rdo_guides":"Guide","nav_rdo_my_character":"Il mio personaggio","nav_rdo_overview":"Panoramica","nav_rdo_photos":"Foto","nav_rdo_posses":"Posse","nav_rdo_posses_free_roam":"Posse e Free Roam","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressione","nav_rdo_rank_unlocks":"Sbloccabili con rango","nav_rdo_roles":"Ruoli","nav_rdo_specialist_roles":"Ruoli specializzati","nav_rdo_story_missions":"Missioni della storia","nav_rdo_support":"Supporto","nav_rdr_cta_buy_now":"Acquista ora","nav_rdr2_accomplishments":"Premi","nav_rdr2_artwork":"Illustrazioni","nav_rdr2_catalogue":"Catalogo","nav_rdr2_challenges":"Sfide","nav_rdr2_chapters":"Capitoli","nav_rdr2_character":"Personaggio","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Acquista ora","nav_rdr2_explore":"Esplora","nav_rdr2_gallery":"Galleria","nav_rdr2_locations":"Luoghi","nav_rdr2_media":"Media","nav_rdr2_music":"Musica","nav_rdr2_online":"Online","nav_rdr2_overview":"Panoramica","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Statistiche","nav_rdr2_support":"Supporto","nav_rdr2_van_der_linde_gang":"La banda di Van der Linde","nav_rdr2_videos":"Video","nav_rdr2_weaponry":"Arsenale","nav_rdr2_wildlife":"Fauna selvatica","nav_rockstargames_home":"Home Rockstar Games","nav_rockstargames_logo":"Clicca per aprire il menu","nav_rsg_downloads":"Download","nav_rsg_games":"Giochi","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Supporto","nav_rsg_videos":"Video","nav_search_error_too_short":"La tua ricerca è troppo corta. Le ricerce devono contenere almeno {count} caratteri.","nav_search_error_too_short_invalid_chars":"La tua ricerca contiene dei caratteri non validi ({invalidChars}). Rimuovili e riprova.","nav_support_dashboard":"La mia dashboard","nav_support_home":"Home","nav_support_service_status":"Stato del servizio","nav_support_submit_ticket":"Invia un ticket","nav_tabletennis_cta_buy_now":"Acquista ora","nav_undeadnightmare_buy_now":"Acquista ora","nav_undeadnightmare_discover":"Scopri","nav_undeadnightmare_gallery":"Galleria","nav_undeadnightmare_info":"Informazioni","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"Notizie","nav_undeadnightmare_ps3_digital":"PS3 - Digitale","nav_undeadnightmare_specs":"Requisiti","nav_undeadnightmare_suport":"Supporto","nav_undeadnightmare_videos":"Video","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digitale","nav_view_all_games":"Visualizza tutto","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_activity_feed":"Attività dei feed","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Aiuto","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","search_action":"Cerca","search_close_button":"Apri ricerca","search_open_button":"Chiudi ricerca","search_placeholder":"Cerca in Rockstar Games...","search_target_aria_label":"Cerca {target}","search_target_community":"Community","search_target_crews":"Crew","search_target_games":"Giochi","search_target_jobs":"Attività","search_target_posts":"Post","search_target_user_photos":"Foto utente","search_target_user_videos":"Video utente","search_target_users":"Utenti","search_target_videos":"Video"},"jp":{"accessibility_skip_button":"メインコンテンツまでスキップ","games_menu_featured":"注目のゲーム","games_menu_gta_online":"GTAオンライン","games_menu_gta_trilogy":"グランド・セフト・オート：トリロジー","games_menu_gta_v":"グランド・セフト・オートV","games_menu_rdr_2":"レッド・デッド・リデンプション2","games_menu_rdr_online":"レッド・デッド・オンライン","games_menu_view_all":"全て表示","language_selector_default":"言語を選択","nav_bully_accomplishments":"実績","nav_bully_cta_buy_now":"今すぐ購入","nav_bully_game_overview":"概要","nav_bully_Overview":"サポート","nav_bully_videos":"ビデオ","nav_careers_careers_on_linkedin":"LinkedInキャリア","nav_careers_contact_us":"お問い合せ","nav_careers_home":"ホーム","nav_careers_openings":"求人","nav_cta_get_launcher":"Launcherを入手","nav_gta_trilogy_accomplishments":"実績","nav_gta_trilogy_cta_buy_now":"今すぐ購入","nav_gta_trilogy_gta3":"グランド・セフト・オートIII","nav_gta_trilogy_gtasa":"グランド・セフト・オート：サンアンドレアス","nav_gta_trilogy_gtavc":"グランド・セフト・オート：バイスシティ","nav_gta_trilogy_overview":"概要","nav_gta_trilogy_support":"サポート","nav_gta3_cta_buy_now":"今すぐ購入","nav_gtaiv_accomplishments":"実績","nav_gtaiv_cta_buy_now":"今すぐ購入","nav_gtaiv_overview":"概要","nav_gtaiv_support":"サポート","nav_gtaiveflc_accomplishments":"実績","nav_gtaiveflc_overview":"概要","nav_gtaiveflc_support":"サポート","nav_gtao_accomplishments":"実績","nav_gtao_browse_crews":"全てのクルーを見る","nav_gtao_checklist":"チェックリスト","nav_gtao_community":"コミュニティ","nav_gtao_crews":"クルー","nav_gtao_crews_create":"クルーを作成","nav_gtao_cta_buy_now":"今すぐ購入","nav_gtao_discover":"概要","nav_gtao_emblem_editor":"エンブレム・エディター","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTAオンライン","nav_gtao_guides":"ガイド","nav_gtao_jobs":"ジョブ","nav_gtao_jobs_browse_all":"全てのジョブを見る","nav_gtao_jobs_playlists":"プレイリスト","nav_gtao_license_plate_creator":"ナンバープレートクリエイター","nav_gtao_missions":"ミッション","nav_gtao_my_character":"マイ・キャラクター","nav_gtao_my_crews":"自分のクルー","nav_gtao_my_jobs":"マイ・ジョブ","nav_gtao_overview":"概要","nav_gtao_photos":"写真","nav_gtao_stats":"データ","nav_gtao_story":"ストーリー","nav_gtao_support":"サポート","nav_gtao_videos":"ビデオ","nav_gtasanandreas_cta_buy_now":"今すぐ購入","nav_gtav_accomplishments":"実績","nav_gtav_checklist":"チェックリスト","nav_gtav_community":"コミュニティ","nav_gtav_create_crew":"クルーを作成","nav_gtav_crews":"クルー","nav_gtav_crews_browse_all":"全てのクルーを見る","nav_gtav_cta_buy_now":"今すぐ購入","nav_gtav_discover":"概要","nav_gtav_emblem_editor":"エンブレム・エディター","nav_gtav_gta_online":"GTAオンライン","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"ガイド","nav_gtav_jobs":"ジョブ","nav_gtav_jobs_browse_all":"全てのジョブを見る","nav_gtav_licence_plate_creator":"ナンバープレートクリエイター","nav_gtav_missions":"ミッション","nav_gtav_my_character":"マイ・キャラクター","nav_gtav_my_crews":"自分のクルー","nav_gtav_my_jobs":"マイ・ジョブ","nav_gtav_overview":"概要","nav_gtav_photos":"写真","nav_gtav_playlists":"プレイリスト","nav_gtav_stats":"データ","nav_gtav_story":"ストーリー","nav_gtav_support":"サポート","nav_gtav_videos":"ビデオ","nav_gtavc_cta_buy_now":"今すぐ購入","nav_gtavc_discover":"概要","nav_gtavcs_discover":"概要","nav_lanoire_accomplishments":"実績","nav_lanoire_badge_pursuit":"バッジ探索チャレンジ","nav_lanoire_case_tracker":"事件トラッカー","nav_lanoire_checklist":"チェックリスト","nav_lanoire_cta_buy_now":"今すぐ購入","nav_lanoire_official_site":"オフィシャルサイト","nav_lanoire_overview":"概要","nav_lanoire_pc_console":"PC/コンソール","nav_lanoire_progress":"進行状況","nav_lanoire_stats":"データ","nav_lanoire_support":"サポート","nav_lanoire_vr_case_files":"VR事件簿","nav_midnightclubla_buy_now":"今すぐ購入","nav_more_dropdown":"もっと見る","nav_mp3_accomplishments":"実績","nav_mp3_career":"キャリア","nav_mp3_chapters":"チャプター","nav_mp3_checklist":"チェックリスト","nav_mp3_checkpoint_challenge":"チェックポイントチャレンジ","nav_mp3_crews":"クルー","nav_mp3_cta_buy_now":"今すぐ購入","nav_mp3_featured":"ピックアップ","nav_mp3_grinds":"グラインド","nav_mp3_leaderboards":"ランキング","nav_mp3_multiplayer":"マルチプレイ","nav_mp3_news":"ニュース","nav_mp3_ny_minute":"ニューヨーク・ミニッツ","nav_mp3_official_site":"オフィシャルサイト","nav_mp3_overview":"概要","nav_mp3_progress":"進行状況","nav_mp3_score_attack":"スコアアタック","nav_mp3_singleplayer":"シングルプレイ","nav_mp3_specifications":"システム要件","nav_mp3_support":"サポート","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}(リンクは新しいウィンドウで開きます)","nav_quick_access_games":"ゲーム","nav_quick_access_home":"ホーム","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"実績","nav_rdo_awards":"アワード","nav_rdo_benefits":"特典","nav_rdo_catalogue":"カタログ","nav_rdo_club_rewards":"クラブ報酬","nav_rdo_community":"コミュニティ","nav_rdo_competitive_series":"対戦シリーズ","nav_rdo_cta_buy_now":"今すぐ購入","nav_rdo_customization":"カスタマイズ","nav_rdo_explore":"探索","nav_rdo_getting_started":"始めよう","nav_rdo_guides":"ガイド","nav_rdo_my_character":"マイ・キャラクター","nav_rdo_overview":"概要","nav_rdo_photos":"写真","nav_rdo_posses":"民警団","nav_rdo_posses_free_roam":"民警団＆放浪モード","nav_rdo_progress":"進行状況","nav_rdo_progression":"進行状況","nav_rdo_rank_unlocks":"ランク解除","nav_rdo_roles":"役割","nav_rdo_specialist_roles":"専門的な役割","nav_rdo_story_missions":"ストーリーミッション","nav_rdo_support":"サポート","nav_rdr_cta_buy_now":"今すぐ購入","nav_rdr2_accomplishments":"実績","nav_rdr2_artwork":"アートワーク","nav_rdr2_catalogue":"カタログ","nav_rdr2_challenges":"チャレンジ","nav_rdr2_chapters":"チャプター","nav_rdr2_character":"キャラクター","nav_rdr2_compendium":"図鑑","nav_rdr2_cta_buy_now":"今すぐ購入","nav_rdr2_explore":"探索","nav_rdr2_gallery":"ギャラリー","nav_rdr2_locations":"目的地","nav_rdr2_media":"メディア","nav_rdr2_music":"音楽","nav_rdr2_online":"オンライン","nav_rdr2_overview":"概要","nav_rdr2_progress":"進行状況","nav_rdr2_stats":"データ","nav_rdr2_support":"サポート","nav_rdr2_van_der_linde_gang":"ダッチギャング","nav_rdr2_videos":"ビデオ","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"ロックスター・ゲームスホーム","nav_rockstargames_logo":"クリックしてメニューを開く","nav_rsg_downloads":"ダウンロード","nav_rsg_games":"ゲーム","nav_rsg_newswire":"Newswire","nav_rsg_store":"ストア","nav_rsg_support":"サポート","nav_rsg_videos":"ビデオ","nav_search_error_too_short":"検索文字数が少なすぎます。{count}文字以上にしてください。","nav_search_error_too_short_invalid_chars":"検索文字に無効な文字({invalidChars})が含まれています。無効な文字を削除してもう一度お試しください。","nav_support_dashboard":"ダッシュボード","nav_support_home":"ホーム","nav_support_service_status":"サービス状況","nav_support_submit_ticket":"チケットを送信","nav_tabletennis_cta_buy_now":"今すぐ購入","nav_undeadnightmare_buy_now":"今すぐ購入","nav_undeadnightmare_discover":"概要","nav_undeadnightmare_gallery":"ギャラリー","nav_undeadnightmare_info":"情報","nav_undeadnightmare_media":"メディア","nav_undeadnightmare_news":"ニュース","nav_undeadnightmare_ps3_digital":"PS3 - ダウンロード版","nav_undeadnightmare_specs":"システム要件","nav_undeadnightmare_suport":"サポート","nav_undeadnightmare_videos":"ビデオ","nav_undeadnightmare_xbox360_digital":"Xbox 360 - ダウンロード版","nav_view_all_games":"全て表示","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリ","profile_selector_switch_character":"キャラクター変更","quick_access_title":"Rockstar Games","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"ドラッグメニューハンドル","sc_menu_toggle":"Social Clubメニューを切り替え","search_action":"検索","search_close_button":"検索を閉じる","search_open_button":"検索を開く","search_placeholder":"ロックスター・ゲームス内を検索…","search_target_aria_label":"{target}を検索","search_target_community":"コミュニティ","search_target_crews":"クルー","search_target_games":"ゲーム","search_target_jobs":"ジョブ","search_target_posts":"投稿","search_target_user_photos":"ユーザー写真","search_target_user_videos":"ユーザービデオ","search_target_users":"ユーザー","search_target_videos":"ビデオ"},"kr":{"accessibility_skip_button":"주 콘텐츠로 건너뛰기","games_menu_featured":"특선 게임","games_menu_gta_online":"Grand Theft Auto 온라인","games_menu_gta_trilogy":"Grand Theft Auto: 트릴로지","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 온라인","games_menu_view_all":"모두 보기","language_selector_default":"언어 선택","nav_bully_accomplishments":"업적","nav_bully_cta_buy_now":"지금 구입","nav_bully_game_overview":"탐색","nav_bully_Overview":"지원","nav_bully_videos":"동영상","nav_careers_careers_on_linkedin":"LinkedIn 채용","nav_careers_contact_us":"문의","nav_careers_home":"홈","nav_careers_openings":"진행 중 공고","nav_cta_get_launcher":"Launcher 다운로드","nav_gta_trilogy_accomplishments":"업적","nav_gta_trilogy_cta_buy_now":"지금 구입","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"소개","nav_gta_trilogy_support":"지원","nav_gta3_cta_buy_now":"지금 구입","nav_gtaiv_accomplishments":"업적","nav_gtaiv_cta_buy_now":"지금 구입","nav_gtaiv_overview":"탐색","nav_gtaiv_support":"지원","nav_gtaiveflc_accomplishments":"업적","nav_gtaiveflc_overview":"소개","nav_gtaiveflc_support":"지원","nav_gtao_accomplishments":"업적","nav_gtao_browse_crews":"모든 조직 둘러보기","nav_gtao_checklist":"체크리스트","nav_gtao_community":"커뮤니티","nav_gtao_crews":"조직","nav_gtao_crews_create":"조직 생성","nav_gtao_cta_buy_now":"지금 구입","nav_gtao_discover":"탐색","nav_gtao_emblem_editor":"상징 편집기","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 온라인","nav_gtao_guides":"가이드","nav_gtao_jobs":"작업","nav_gtao_jobs_browse_all":"모든 작업 둘러보기","nav_gtao_jobs_playlists":"플레이 목록","nav_gtao_license_plate_creator":"번호판 생성기","nav_gtao_missions":"임무","nav_gtao_my_character":"내 캐릭터","nav_gtao_my_crews":"내 조직","nav_gtao_my_jobs":"내 작업","nav_gtao_overview":"소개","nav_gtao_photos":"사진","nav_gtao_stats":"통계","nav_gtao_story":"스토리","nav_gtao_support":"지원","nav_gtao_videos":"동영상","nav_gtasanandreas_cta_buy_now":"지금 구입","nav_gtav_accomplishments":"업적","nav_gtav_checklist":"체크리스트","nav_gtav_community":"커뮤니티","nav_gtav_create_crew":"조직 생성","nav_gtav_crews":"조직","nav_gtav_crews_browse_all":"모든 조직 둘러보기","nav_gtav_cta_buy_now":"지금 구입","nav_gtav_discover":"탐색","nav_gtav_emblem_editor":"상징 편집기","nav_gtav_gta_online":"GTA 온라인","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"가이드","nav_gtav_jobs":"작업","nav_gtav_jobs_browse_all":"모든 작업 둘러보기","nav_gtav_licence_plate_creator":"번호판 생성기","nav_gtav_missions":"임무","nav_gtav_my_character":"내 캐릭터","nav_gtav_my_crews":"내 조직","nav_gtav_my_jobs":"내 작업","nav_gtav_overview":"소개","nav_gtav_photos":"사진","nav_gtav_playlists":"플레이 목록","nav_gtav_stats":"통계","nav_gtav_story":"스토리","nav_gtav_support":"지원","nav_gtav_videos":"동영상","nav_gtavc_cta_buy_now":"지금 구입","nav_gtavc_discover":"탐색","nav_gtavcs_discover":"탐색","nav_lanoire_accomplishments":"업적","nav_lanoire_badge_pursuit":"배지 수집","nav_lanoire_case_tracker":"사건 추적","nav_lanoire_checklist":"체크리스트","nav_lanoire_cta_buy_now":"지금 구입","nav_lanoire_official_site":"공식 사이트","nav_lanoire_overview":"소개","nav_lanoire_pc_console":"PC/콘솔","nav_lanoire_progress":"진행","nav_lanoire_stats":"통계","nav_lanoire_support":"지원","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"지금 구입","nav_more_dropdown":"그 외","nav_mp3_accomplishments":"업적","nav_mp3_career":"경력","nav_mp3_chapters":"챕터","nav_mp3_checklist":"체크리스트","nav_mp3_checkpoint_challenge":"체크포인트 도전","nav_mp3_crews":"조직","nav_mp3_cta_buy_now":"지금 구입","nav_mp3_featured":"주요 사항","nav_mp3_grinds":"시련","nav_mp3_leaderboards":"순위표","nav_mp3_multiplayer":"멀티 플레이","nav_mp3_news":"뉴스","nav_mp3_ny_minute":"뉴욕의 시간","nav_mp3_official_site":"공식 사이트","nav_mp3_overview":"소개","nav_mp3_progress":"진행","nav_mp3_score_attack":"스코어 어택","nav_mp3_singleplayer":"싱글 플레이","nav_mp3_specifications":"사양","nav_mp3_support":"지원","nav_mp3_weapons":"무기","nav_opens_in_new_window":"{text} (새 창에서 링크 열기)","nav_quick_access_games":"게임","nav_quick_access_home":"홈","nav_quick_access_newswire":"뉴스와이어","nav_rdo_accomplishments":"업적","nav_rdo_awards":"보상","nav_rdo_benefits":"혜택","nav_rdo_catalogue":"카탈로그","nav_rdo_club_rewards":"클럽 보상","nav_rdo_community":"커뮤니티","nav_rdo_competitive_series":"경쟁 시리즈","nav_rdo_cta_buy_now":"지금 구입","nav_rdo_customization":"커스텀","nav_rdo_explore":"탐험","nav_rdo_getting_started":"시작하기","nav_rdo_guides":"가이드","nav_rdo_my_character":"내 캐릭터","nav_rdo_overview":"소개","nav_rdo_photos":"사진","nav_rdo_posses":"갱단","nav_rdo_posses_free_roam":"갱단과 유랑 모드","nav_rdo_progress":"진행","nav_rdo_progression":"진행 상황","nav_rdo_rank_unlocks":"랭크 잠금 해제","nav_rdo_roles":"직업","nav_rdo_specialist_roles":"전문 직업","nav_rdo_story_missions":"스토리 임무","nav_rdo_support":"지원","nav_rdr_cta_buy_now":"지금 구입","nav_rdr2_accomplishments":"업적","nav_rdr2_artwork":"아트워크","nav_rdr2_catalogue":"카탈로그","nav_rdr2_challenges":"도전","nav_rdr2_chapters":"챕터","nav_rdr2_character":"캐릭터","nav_rdr2_compendium":"개요","nav_rdr2_cta_buy_now":"지금 구입","nav_rdr2_explore":"탐험","nav_rdr2_gallery":"갤러리","nav_rdr2_locations":"위치","nav_rdr2_media":"미디어","nav_rdr2_music":"음악","nav_rdr2_online":"온라인","nav_rdr2_overview":"소개","nav_rdr2_progress":"진행","nav_rdr2_stats":"통계","nav_rdr2_support":"지원","nav_rdr2_van_der_linde_gang":"반 더 린드 갱단","nav_rdr2_videos":"동영상","nav_rdr2_weaponry":"무기","nav_rdr2_wildlife":"야생 동물","nav_rockstargames_home":"Rockstar Games 홈","nav_rockstargames_logo":"클릭해서 메뉴 열기","nav_rsg_downloads":"다운로드","nav_rsg_games":"게임","nav_rsg_newswire":"뉴스와이어","nav_rsg_store":"스토어","nav_rsg_support":"지원","nav_rsg_videos":"동영상","nav_search_error_too_short":"검색어가 너무 짧습니다. 검색어는 최소 {count}글자여야 합니다.","nav_search_error_too_short_invalid_chars":"검색어에 유효하지 않은 문자({invalidChars})가 포함되어 있습니다. 제거하고 다시 시도하십시오.","nav_support_dashboard":"내 대시보드","nav_support_home":"홈","nav_support_service_status":"서비스 현황","nav_support_submit_ticket":"문서 제출","nav_tabletennis_cta_buy_now":"지금 구입","nav_undeadnightmare_buy_now":"지금 구입","nav_undeadnightmare_discover":"탐색","nav_undeadnightmare_gallery":"갤러리","nav_undeadnightmare_info":"정보","nav_undeadnightmare_media":"미디어","nav_undeadnightmare_news":"뉴스","nav_undeadnightmare_ps3_digital":"PS3 - 디지털","nav_undeadnightmare_specs":"사양","nav_undeadnightmare_suport":"지원","nav_undeadnightmare_videos":"동영상","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 디지털","nav_view_all_games":"모두 보기","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","quick_access_title":"Rockstar Games","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","search_action":"검색","search_close_button":"검색 닫기","search_open_button":"검색 열기","search_placeholder":"Rockstar Games 검색...","search_target_aria_label":"{target} 검색","search_target_community":"커뮤니티","search_target_crews":"조직","search_target_games":"게임","search_target_jobs":"작업","search_target_posts":"포스팅","search_target_user_photos":"유저 사진","search_target_user_videos":"유저 동영상","search_target_users":"유저","search_target_videos":"동영상"},"pl":{"accessibility_skip_button":"Przejdź do głównej treści","games_menu_featured":"Wyróżnione gry","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Pokaż wszystkie","language_selector_default":"Wybierz język","nav_bully_accomplishments":"Osiągnięcia","nav_bully_cta_buy_now":"Kup teraz","nav_bully_game_overview":"Odkryj","nav_bully_Overview":"Wsparcie","nav_bully_videos":"Filmy","nav_careers_careers_on_linkedin":"Oferty pracy w LinkedIn","nav_careers_contact_us":"Kontakt","nav_careers_home":"Strona główna","nav_careers_openings":"Wakaty","nav_cta_get_launcher":"Pobierz aplikację","nav_gta_trilogy_accomplishments":"Osiągnięcia","nav_gta_trilogy_cta_buy_now":"Kup teraz","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Ogólny zarys","nav_gta_trilogy_support":"Wsparcie","nav_gta3_cta_buy_now":"Kup teraz","nav_gtaiv_accomplishments":"Osiągnięcia","nav_gtaiv_cta_buy_now":"Kup teraz","nav_gtaiv_overview":"Odkryj","nav_gtaiv_support":"Wsparcie","nav_gtaiveflc_accomplishments":"Osiągnięcia","nav_gtaiveflc_overview":"Ogólny zarys","nav_gtaiveflc_support":"Wsparcie","nav_gtao_accomplishments":"Osiągnięcia","nav_gtao_browse_crews":"Przeglądaj ekipy","nav_gtao_checklist":"Lista zadań","nav_gtao_community":"Społeczność","nav_gtao_crews":"Ekipy","nav_gtao_crews_create":"Stwórz ekipę","nav_gtao_cta_buy_now":"Kup teraz","nav_gtao_discover":"Odkryj","nav_gtao_emblem_editor":"Edytor emblematów","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Przewodniki","nav_gtao_jobs":"Akcje","nav_gtao_jobs_browse_all":"Przeglądaj akcje","nav_gtao_jobs_playlists":"Listy gier","nav_gtao_license_plate_creator":"Kreator tablic rejestracyjnych","nav_gtao_missions":"Misje","nav_gtao_my_character":"Moja postać","nav_gtao_my_crews":"Moje ekipy","nav_gtao_my_jobs":"Moje akcje","nav_gtao_overview":"Ogólny zarys","nav_gtao_photos":"Zdjęcia","nav_gtao_stats":"Statystyki","nav_gtao_story":"Fabuła","nav_gtao_support":"Wsparcie","nav_gtao_videos":"Filmy","nav_gtasanandreas_cta_buy_now":"Kup teraz","nav_gtav_accomplishments":"Osiągnięcia","nav_gtav_checklist":"Lista zadań","nav_gtav_community":"Społeczność","nav_gtav_create_crew":"Stwórz ekipę","nav_gtav_crews":"Ekipy","nav_gtav_crews_browse_all":"Przeglądaj ekipy","nav_gtav_cta_buy_now":"Kup teraz","nav_gtav_discover":"Odkryj","nav_gtav_emblem_editor":"Edytor emblematów","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Przewodniki","nav_gtav_jobs":"Akcje","nav_gtav_jobs_browse_all":"Przeglądaj akcje","nav_gtav_licence_plate_creator":"Kreator tablic rejestracyjnych","nav_gtav_missions":"Misje","nav_gtav_my_character":"Moja postać","nav_gtav_my_crews":"Moje ekipy","nav_gtav_my_jobs":"Moje akcje","nav_gtav_overview":"Ogólny zarys","nav_gtav_photos":"Zdjęcia","nav_gtav_playlists":"Listy gier","nav_gtav_stats":"Statystyki","nav_gtav_story":"Fabuła","nav_gtav_support":"Wsparcie","nav_gtav_videos":"Filmy","nav_gtavc_cta_buy_now":"Kup teraz","nav_gtavc_discover":"Odkryj","nav_gtavcs_discover":"Odkryj","nav_lanoire_accomplishments":"Osiągnięcia","nav_lanoire_badge_pursuit":"Pościg za odznaką","nav_lanoire_case_tracker":"Wykaz spraw","nav_lanoire_checklist":"Lista zadań","nav_lanoire_cta_buy_now":"Kup teraz","nav_lanoire_official_site":"Oficjalna strona","nav_lanoire_overview":"Ogólny zarys","nav_lanoire_pc_console":"PC/konsola","nav_lanoire_progress":"Postępy","nav_lanoire_stats":"Statystyki","nav_lanoire_support":"Wsparcie","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Kup teraz","nav_more_dropdown":"Więcej","nav_mp3_accomplishments":"Osiągnięcia","nav_mp3_career":"Kariera","nav_mp3_chapters":"Rozdziały","nav_mp3_checklist":"Lista zadań","nav_mp3_checkpoint_challenge":"Wyzwanie punktów kontrolnych","nav_mp3_crews":"Ekipy","nav_mp3_cta_buy_now":"Kup teraz","nav_mp3_featured":"Wyróżnione","nav_mp3_grinds":"Zadania","nav_mp3_leaderboards":"Rankingi","nav_mp3_multiplayer":"Tryb wieloosobowy","nav_mp3_news":"Nowości","nav_mp3_ny_minute":"W mgnieniu oka","nav_mp3_official_site":"Oficjalna strona","nav_mp3_overview":"Ogólny zarys","nav_mp3_progress":"Postępy","nav_mp3_score_attack":"Atak na wynik","nav_mp3_singleplayer":"Gra jednoosobowa","nav_mp3_specifications":"Wymagania","nav_mp3_support":"Wsparcie","nav_mp3_weapons":"Broń","nav_opens_in_new_window":"{text} (Odnośnik otworzy nowe okno)","nav_quick_access_games":"Gry","nav_quick_access_home":"Strona główna","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Osiągnięcia","nav_rdo_awards":"Nagrody","nav_rdo_benefits":"Korzyści","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Nagrody klubowe","nav_rdo_community":"Społeczność","nav_rdo_competitive_series":"Seria rywalizacji","nav_rdo_cta_buy_now":"Kup teraz","nav_rdo_customization":"Personalizacja","nav_rdo_explore":"Eksploruj","nav_rdo_getting_started":"Pierwsze kroki","nav_rdo_guides":"Przewodniki","nav_rdo_my_character":"Moja postać","nav_rdo_overview":"Ogólny zarys","nav_rdo_photos":"Zdjęcia","nav_rdo_posses":"Bandy","nav_rdo_posses_free_roam":"Bandy i gra swobodna","nav_rdo_progress":"Postępy","nav_rdo_progression":"Postępy","nav_rdo_rank_unlocks":"Nagrody za rangi","nav_rdo_roles":"Role","nav_rdo_specialist_roles":"Role specjalistyczne","nav_rdo_story_missions":"Misje fabularne","nav_rdo_support":"Wsparcie","nav_rdr_cta_buy_now":"Kup teraz","nav_rdr2_accomplishments":"Osiągnięcia","nav_rdr2_artwork":"Grafiki","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Wyzwania","nav_rdr2_chapters":"Rozdziały","nav_rdr2_character":"Postać","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Kup teraz","nav_rdr2_explore":"Eksploruj","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Miejsca","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Muzyka","nav_rdr2_online":"Online","nav_rdr2_overview":"Ogólny zarys","nav_rdr2_progress":"Postępy","nav_rdr2_stats":"Statystyki","nav_rdr2_support":"Wsparcie","nav_rdr2_van_der_linde_gang":"Gang van der Lindego","nav_rdr2_videos":"Filmy","nav_rdr2_weaponry":"Broń","nav_rdr2_wildlife":"Zwierzęta","nav_rockstargames_home":"Strona główna Rockstar Games","nav_rockstargames_logo":"Kliknij, aby otworzyć menu","nav_rsg_downloads":"Do pobrania","nav_rsg_games":"Gry","nav_rsg_newswire":"Newswire","nav_rsg_store":"Sklep","nav_rsg_support":"Wsparcie","nav_rsg_videos":"Filmy","nav_search_error_too_short":"Wyszukiwana fraza jest za krótka. Musi ona składać się z co najmniej {count} znaków.","nav_search_error_too_short_invalid_chars":"Wyszukiwana fraza zawiera nieobsługiwane znaki ({invalidChars}). Usuń je i spróbuj ponownie.","nav_support_dashboard":"Panel użytkownika","nav_support_home":"Strona główna","nav_support_service_status":"Status usługi","nav_support_submit_ticket":"Wyślij zgłoszenie","nav_tabletennis_cta_buy_now":"Kup teraz","nav_undeadnightmare_buy_now":"Kup teraz","nav_undeadnightmare_discover":"Odkryj","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informacje","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Nowości","nav_undeadnightmare_ps3_digital":"PS3 – cyfrowa","nav_undeadnightmare_specs":"Wymagania","nav_undeadnightmare_suport":"Wsparcie","nav_undeadnightmare_videos":"Filmy","nav_undeadnightmare_xbox360_digital":"Xbox 360 – cyfrowa","nav_view_all_games":"Pokaż wszystkie","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","search_action":"Szukaj","search_close_button":"Zamknij wyszukiwanie","search_open_button":"Rozpocznij wyszukiwanie","search_placeholder":"Przeszukaj Rockstar Games...","search_target_aria_label":"Wyszukaj: {target}","search_target_community":"Społeczność","search_target_crews":"Ekipy","search_target_games":"Gry","search_target_jobs":"Akcje","search_target_posts":"Wpisy","search_target_user_photos":"Zdjęcia użytkowników","search_target_user_videos":"Filmy użytkowników","search_target_users":"Użytkownicy","search_target_videos":"Filmy"},"br":{"accessibility_skip_button":"Pular para o conteúdo principal","games_menu_featured":"Jogos em destaque","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver tudo","language_selector_default":"Selecione um idioma","nav_bully_accomplishments":"Conquistas","nav_bully_cta_buy_now":"Compre já","nav_bully_game_overview":"Descobrir","nav_bully_Overview":"Suporte","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Carreiras no LinkedIn","nav_careers_contact_us":"Entre em contato","nav_careers_home":"Início","nav_careers_openings":"Vagas","nav_cta_get_launcher":"Obter Launcher","nav_gta_trilogy_accomplishments":"Conquistas","nav_gta_trilogy_cta_buy_now":"Compre já","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Visão geral","nav_gta_trilogy_support":"Suporte","nav_gta3_cta_buy_now":"Compre já","nav_gtaiv_accomplishments":"Conquistas","nav_gtaiv_cta_buy_now":"Compre já","nav_gtaiv_overview":"Descobrir","nav_gtaiv_support":"Suporte","nav_gtaiveflc_accomplishments":"Conquistas","nav_gtaiveflc_overview":"Visão geral","nav_gtaiveflc_support":"Suporte","nav_gtao_accomplishments":"Conquistas","nav_gtao_browse_crews":"Ver todos os Comandos","nav_gtao_checklist":"Lista de progresso","nav_gtao_community":"Comunidade","nav_gtao_crews":"Comandos","nav_gtao_crews_create":"Criar um Comando","nav_gtao_cta_buy_now":"Compre já","nav_gtao_discover":"Descobrir","nav_gtao_emblem_editor":"Editor de Emblema","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guias","nav_gtao_jobs":"Serviços","nav_gtao_jobs_browse_all":"Ver todos os serviços","nav_gtao_jobs_playlists":"Listas de jogos","nav_gtao_license_plate_creator":"Criador de Placas","nav_gtao_missions":"Missões","nav_gtao_my_character":"Meu personagem","nav_gtao_my_crews":"Meus Comandos","nav_gtao_my_jobs":"Meus serviços","nav_gtao_overview":"Visão geral","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estatísticas","nav_gtao_story":"História","nav_gtao_support":"Suporte","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Compre já","nav_gtav_accomplishments":"Conquistas","nav_gtav_checklist":"Lista de progresso","nav_gtav_community":"Comunidade","nav_gtav_create_crew":"Criar um Comando","nav_gtav_crews":"Comandos","nav_gtav_crews_browse_all":"Ver todos os Comandos","nav_gtav_cta_buy_now":"Compre já","nav_gtav_discover":"Descobrir","nav_gtav_emblem_editor":"Editor de Emblema","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guias","nav_gtav_jobs":"Serviços","nav_gtav_jobs_browse_all":"Ver todos os serviços","nav_gtav_licence_plate_creator":"Criador de Placas","nav_gtav_missions":"Missões","nav_gtav_my_character":"Meu personagem","nav_gtav_my_crews":"Meus Comandos","nav_gtav_my_jobs":"Meus serviços","nav_gtav_overview":"Visão geral","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de jogos","nav_gtav_stats":"Estatísticas","nav_gtav_story":"História","nav_gtav_support":"Suporte","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Compre já","nav_gtavc_discover":"Descobrir","nav_gtavcs_discover":"Descobrir","nav_lanoire_accomplishments":"Conquistas","nav_lanoire_badge_pursuit":"Distintivos escondidos","nav_lanoire_case_tracker":"Rastreador de Casos","nav_lanoire_checklist":"Lista de progresso","nav_lanoire_cta_buy_now":"Compre já","nav_lanoire_official_site":"Site oficial","nav_lanoire_overview":"Visão geral","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Estatísticas","nav_lanoire_support":"Suporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Compre já","nav_more_dropdown":"Mais","nav_mp3_accomplishments":"Conquistas","nav_mp3_career":"Carreira","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progresso","nav_mp3_checkpoint_challenge":"Desafio Checkpoint","nav_mp3_crews":"Comandos","nav_mp3_cta_buy_now":"Compre já","nav_mp3_featured":"Em destaque","nav_mp3_grinds":"Desafios","nav_mp3_leaderboards":"Placares de líderes","nav_mp3_multiplayer":"Multijogador","nav_mp3_news":"Novidades","nav_mp3_ny_minute":"Um Minuto de Nova York","nav_mp3_official_site":"Site oficial","nav_mp3_overview":"Visão geral","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Modo de Pontuação","nav_mp3_singleplayer":"Jogo individual","nav_mp3_specifications":"Especificações","nav_mp3_support":"Suporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (O link abre em uma nova janela)","nav_quick_access_games":"Jogos","nav_quick_access_home":"Início","nav_quick_access_newswire":"Boletim","nav_rdo_accomplishments":"Conquistas","nav_rdo_awards":"Prêmios","nav_rdo_benefits":"Benefícios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Prêmios do Clube","nav_rdo_community":"Comunidade","nav_rdo_competitive_series":"Séries Competitivas","nav_rdo_cta_buy_now":"Compre já","nav_rdo_customization":"Personalização","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeiros passos","nav_rdo_guides":"Guias","nav_rdo_my_character":"Meu personagem","nav_rdo_overview":"Visão geral","nav_rdo_photos":"Fotos","nav_rdo_posses":"Bandos","nav_rdo_posses_free_roam":"Bandos e Modo Livre","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressão","nav_rdo_rank_unlocks":"Desbloqueios por Nível","nav_rdo_roles":"Ofícios","nav_rdo_specialist_roles":"Ofícios Especializados","nav_rdo_story_missions":"Missões de História","nav_rdo_support":"Suporte","nav_rdr_cta_buy_now":"Compre já","nav_rdr2_accomplishments":"Conquistas","nav_rdr2_artwork":"Arte","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafios","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personagem","nav_rdr2_compendium":"Compêndio","nav_rdr2_cta_buy_now":"Compre já","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Locais","nav_rdr2_media":"Mídia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Visão geral","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Estatísticas","nav_rdr2_support":"Suporte","nav_rdr2_van_der_linde_gang":"Gangue Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Vida Selvagem","nav_rockstargames_home":"Rockstar Games – Início","nav_rockstargames_logo":"Clique para abrir o menu","nav_rsg_downloads":"Downloads","nav_rsg_games":"Jogos","nav_rsg_newswire":"Boletim","nav_rsg_store":"Loja","nav_rsg_support":"Suporte","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Seu termo de busca é curto demais. Os termos devem ter, no mínimo, {count} caracteres.","nav_search_error_too_short_invalid_chars":"Seu termo de busca contém caracteres inválidos ({invalidChars}). Remova-os e tente novamente.","nav_support_dashboard":"Meu painel","nav_support_home":"Início","nav_support_service_status":"Status do serviço","nav_support_submit_ticket":"Enviar uma solicitação","nav_tabletennis_cta_buy_now":"Compre já","nav_undeadnightmare_buy_now":"Compre já","nav_undeadnightmare_discover":"Descobrir","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informações","nav_undeadnightmare_media":"Mídia","nav_undeadnightmare_news":"Novidades","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Especificações","nav_undeadnightmare_suport":"Suporte","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver tudo","profile_selector_mugshot":"foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","quick_access_title":"Rockstar Games","sc_link_account":"Conta","sc_link_activity_feed":"Feed de Atividade","sc_link_cookies_policy":"Política de Cookies","sc_link_cookies_settings":"Configurações de Cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","search_action":"Buscar","search_close_button":"Fechar busca","search_open_button":"Abrir busca","search_placeholder":"Buscar em Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidade","search_target_crews":"Comandos","search_target_games":"Jogos","search_target_jobs":"Serviços","search_target_posts":"Publicações","search_target_user_photos":"Fotos do usuário","search_target_user_videos":"Vídeos do usuário","search_target_users":"Usuários","search_target_videos":"Vídeos"},"ru":{"accessibility_skip_button":"Перейти к основному разделу","games_menu_featured":"Избранные игры","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Показать все","language_selector_default":"Выбрать язык","nav_bully_accomplishments":"Достижения","nav_bully_cta_buy_now":"Купить","nav_bully_game_overview":"Об игре","nav_bully_Overview":"Поддержка","nav_bully_videos":"Видеоролики","nav_careers_careers_on_linkedin":"Вакансии на LinkedIn","nav_careers_contact_us":"Свяжитесь с нами","nav_careers_home":"Главная страница","nav_careers_openings":"Вакансии","nav_cta_get_launcher":"Скачать Launcher","nav_gta_trilogy_accomplishments":"Достижения","nav_gta_trilogy_cta_buy_now":"Купить","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Описание","nav_gta_trilogy_support":"Поддержка","nav_gta3_cta_buy_now":"Купить","nav_gtaiv_accomplishments":"Достижения","nav_gtaiv_cta_buy_now":"Купить","nav_gtaiv_overview":"Об игре","nav_gtaiv_support":"Поддержка","nav_gtaiveflc_accomplishments":"Достижения","nav_gtaiveflc_overview":"Описание","nav_gtaiveflc_support":"Поддержка","nav_gtao_accomplishments":"Достижения","nav_gtao_browse_crews":"Посмотреть все банды","nav_gtao_checklist":"Трекер","nav_gtao_community":"Сообщество","nav_gtao_crews":"Банды","nav_gtao_crews_create":"Создать банду","nav_gtao_cta_buy_now":"Купить","nav_gtao_discover":"Об игре","nav_gtao_emblem_editor":"Редактор эмблем","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Руководства","nav_gtao_jobs":"Дела","nav_gtao_jobs_browse_all":"Посмотреть все дела","nav_gtao_jobs_playlists":"Плейлисты","nav_gtao_license_plate_creator":"Редактор номерных знаков","nav_gtao_missions":"Задания","nav_gtao_my_character":"Мой персонаж","nav_gtao_my_crews":"Мои банды","nav_gtao_my_jobs":"Мои дела","nav_gtao_overview":"Описание","nav_gtao_photos":"Фотографии","nav_gtao_stats":"Статистика","nav_gtao_story":"Сюжетный режим","nav_gtao_support":"Поддержка","nav_gtao_videos":"Видеоролики","nav_gtasanandreas_cta_buy_now":"Купить","nav_gtav_accomplishments":"Достижения","nav_gtav_checklist":"Трекер","nav_gtav_community":"Сообщество","nav_gtav_create_crew":"Создать банду","nav_gtav_crews":"Банды","nav_gtav_crews_browse_all":"Посмотреть все банды","nav_gtav_cta_buy_now":"Купить","nav_gtav_discover":"Об игре","nav_gtav_emblem_editor":"Редактор эмблем","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Руководства","nav_gtav_jobs":"Дела","nav_gtav_jobs_browse_all":"Посмотреть все дела","nav_gtav_licence_plate_creator":"Редактор номерных знаков","nav_gtav_missions":"Задания","nav_gtav_my_character":"Мой персонаж","nav_gtav_my_crews":"Мои банды","nav_gtav_my_jobs":"Мои дела","nav_gtav_overview":"Описание","nav_gtav_photos":"Фотографии","nav_gtav_playlists":"Плейлисты","nav_gtav_stats":"Статистика","nav_gtav_story":"Сюжетный режим","nav_gtav_support":"Поддержка","nav_gtav_videos":"Видеоролики","nav_gtavc_cta_buy_now":"Купить","nav_gtavc_discover":"Об игре","nav_gtavcs_discover":"Об игре","nav_lanoire_accomplishments":"Достижения","nav_lanoire_badge_pursuit":"Значки","nav_lanoire_case_tracker":"Прогресс","nav_lanoire_checklist":"Трекер","nav_lanoire_cta_buy_now":"Купить","nav_lanoire_official_site":"Официальный сайт","nav_lanoire_overview":"Описание","nav_lanoire_pc_console":"На PC и консолях","nav_lanoire_progress":"Прогресс","nav_lanoire_stats":"Статистика","nav_lanoire_support":"Поддержка","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Купить","nav_more_dropdown":"Дополнительно","nav_mp3_accomplishments":"Достижения","nav_mp3_career":"Карьера","nav_mp3_chapters":"Главы","nav_mp3_checklist":"Трекер","nav_mp3_checkpoint_challenge":"Контрольные точки","nav_mp3_crews":"Банды","nav_mp3_cta_buy_now":"Купить","nav_mp3_featured":"Избранные","nav_mp3_grinds":"Подвиги","nav_mp3_leaderboards":"Списки лидеров","nav_mp3_multiplayer":"Сетевая игра","nav_mp3_news":"Новости","nav_mp3_ny_minute":"Время не ждет","nav_mp3_official_site":"Официальный сайт","nav_mp3_overview":"Описание","nav_mp3_progress":"Прогресс","nav_mp3_score_attack":"Игра на очки","nav_mp3_singleplayer":"Одиночная игра","nav_mp3_specifications":"Системные требования","nav_mp3_support":"Поддержка","nav_mp3_weapons":"Оружие","nav_opens_in_new_window":"{text} (ссылка откроется в новом окне)","nav_quick_access_games":"Игры","nav_quick_access_home":"Главная страница","nav_quick_access_newswire":"Новостная лента","nav_rdo_accomplishments":"Достижения","nav_rdo_awards":"Награды","nav_rdo_benefits":"Бонусы","nav_rdo_catalogue":"Каталог","nav_rdo_club_rewards":"Награды клуба","nav_rdo_community":"Сообщество","nav_rdo_competitive_series":"Соревновательные серии","nav_rdo_cta_buy_now":"Купить","nav_rdo_customization":"Персонализация","nav_rdo_explore":"Об игре","nav_rdo_getting_started":"С чего начать","nav_rdo_guides":"Руководства","nav_rdo_my_character":"Мой персонаж","nav_rdo_overview":"Описание","nav_rdo_photos":"Фотографии","nav_rdo_posses":"Отряды","nav_rdo_posses_free_roam":"Отряды и свободный режим","nav_rdo_progress":"Прогресс","nav_rdo_progression":"Уровень и Богатство","nav_rdo_rank_unlocks":"Открываемые предметы","nav_rdo_roles":"Развитие вашей роли","nav_rdo_specialist_roles":"Роли","nav_rdo_story_missions":"Сюжетные задания","nav_rdo_support":"Поддержка","nav_rdr_cta_buy_now":"Купить","nav_rdr2_accomplishments":"Достижения","nav_rdr2_artwork":"Иллюстрации","nav_rdr2_catalogue":"Каталог","nav_rdr2_challenges":"Испытания","nav_rdr2_chapters":"Главы","nav_rdr2_character":"Игрок","nav_rdr2_compendium":"Справочник","nav_rdr2_cta_buy_now":"Купить","nav_rdr2_explore":"Об игре","nav_rdr2_gallery":"Галерея","nav_rdr2_locations":"Места на карте","nav_rdr2_media":"Медиаматериалы","nav_rdr2_music":"Музыка","nav_rdr2_online":"Сетевая игра","nav_rdr2_overview":"Описание","nav_rdr2_progress":"Прогресс","nav_rdr2_stats":"Статистика","nav_rdr2_support":"Поддержка","nav_rdr2_van_der_linde_gang":"Банда Ван дер Линде","nav_rdr2_videos":"Видеоролики","nav_rdr2_weaponry":"Оружие","nav_rdr2_wildlife":"Животные","nav_rockstargames_home":"Главная страница Rockstar Games","nav_rockstargames_logo":"Нажмите, чтобы раскрыть меню","nav_rsg_downloads":"Загрузки","nav_rsg_games":"Игры","nav_rsg_newswire":"Новостная лента","nav_rsg_store":"Магазин","nav_rsg_support":"Поддержка","nav_rsg_videos":"Видеоролики","nav_search_error_too_short":"Слишком короткий поисковый запрос. Длина запроса должна составлять не менее {count} символов.","nav_search_error_too_short_invalid_chars":"Поисковый запрос содержит некорректные символы ({invalidChars}). Удалите их и попробуйте еще раз.","nav_support_dashboard":"Панель управления","nav_support_home":"Главная страница","nav_support_service_status":"Состояние серверов","nav_support_submit_ticket":"Оставить запрос","nav_tabletennis_cta_buy_now":"Купить","nav_undeadnightmare_buy_now":"Купить","nav_undeadnightmare_discover":"Об игре","nav_undeadnightmare_gallery":"Галерея","nav_undeadnightmare_info":"Информация","nav_undeadnightmare_media":"Медиаматериалы","nav_undeadnightmare_news":"Новости","nav_undeadnightmare_ps3_digital":"PS3 - цифровая версия","nav_undeadnightmare_specs":"Системные требования","nav_undeadnightmare_suport":"Поддержка","nav_undeadnightmare_videos":"Видеоролики","nav_undeadnightmare_xbox360_digital":"Xbox 360 - цифровая версия","nav_view_all_games":"Показать все","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Профильная карта","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","quick_access_title":"Rockstar Games","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Изменить меню Social Club","search_action":"Поиск","search_close_button":"Закрыть поиск","search_open_button":"Открыть поиск","search_placeholder":"Искать в Rockstar Games...","search_target_aria_label":"Искать {target}","search_target_community":"Сообщество","search_target_crews":"Банды","search_target_games":"Игры","search_target_jobs":"Дела","search_target_posts":"Сообщения","search_target_user_photos":"Фотографии пользователей","search_target_user_videos":"Видеоролики пользователей","search_target_users":"Пользователи","search_target_videos":"Видеоролики"},"hans":{"accessibility_skip_button":"跳至主要内容","games_menu_featured":"精选游戏","games_menu_gta_online":"GTA 在线模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 在线模式","games_menu_view_all":"查看全部","language_selector_default":"选择语言","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"立即购买","nav_bully_game_overview":"发现","nav_bully_Overview":"支持","nav_bully_videos":"视频","nav_careers_careers_on_linkedin":"LinkedIn 职业","nav_careers_contact_us":"联系我们","nav_careers_home":"主页","nav_careers_openings":"空缺职位","nav_cta_get_launcher":"获取 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"立即购买","nav_gta_trilogy_gta3":"GTA 3","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"概况","nav_gta_trilogy_support":"支持","nav_gta3_cta_buy_now":"立即购买","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"立即购买","nav_gtaiv_overview":"发现","nav_gtaiv_support":"支持","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"概况","nav_gtaiveflc_support":"支持","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"浏览所有帮会","nav_gtao_checklist":"清单","nav_gtao_community":"社区","nav_gtao_crews":"帮会","nav_gtao_crews_create":"创建帮会","nav_gtao_cta_buy_now":"立即购买","nav_gtao_discover":"发现","nav_gtao_emblem_editor":"徽章编辑器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 在线模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"浏览所有差事","nav_gtao_jobs_playlists":"游玩清单","nav_gtao_license_plate_creator":"车牌制作器","nav_gtao_missions":"任务","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的帮会","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"概况","nav_gtao_photos":"照片","nav_gtao_stats":"统计数据","nav_gtao_story":"故事","nav_gtao_support":"支持","nav_gtao_videos":"视频","nav_gtasanandreas_cta_buy_now":"立即购买","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清单","nav_gtav_community":"社区","nav_gtav_create_crew":"创建帮会","nav_gtav_crews":"帮会","nav_gtav_crews_browse_all":"浏览所有帮会","nav_gtav_cta_buy_now":"立即购买","nav_gtav_discover":"发现","nav_gtav_emblem_editor":"徽章编辑器","nav_gtav_gta_online":"GTA 在线模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"浏览所有差事","nav_gtav_licence_plate_creator":"车牌制作器","nav_gtav_missions":"任务","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的帮会","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"概况","nav_gtav_photos":"照片","nav_gtav_playlists":"游玩清单","nav_gtav_stats":"统计数据","nav_gtav_story":"故事","nav_gtav_support":"支持","nav_gtav_videos":"视频","nav_gtavc_cta_buy_now":"立即购买","nav_gtavc_discover":"发现","nav_gtavcs_discover":"发现","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"收集警徽","nav_lanoire_case_tracker":"案件纪录","nav_lanoire_checklist":"清单","nav_lanoire_cta_buy_now":"立即购买","nav_lanoire_official_site":"官方网站","nav_lanoire_overview":"概况","nav_lanoire_pc_console":"PC/主机","nav_lanoire_progress":"进度","nav_lanoire_stats":"统计数据","nav_lanoire_support":"支持","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"立即购买","nav_more_dropdown":"更多内容","nav_mp3_accomplishments":"成就","nav_mp3_career":"职业生涯","nav_mp3_chapters":"章节","nav_mp3_checklist":"清单","nav_mp3_checkpoint_challenge":"检查点挑战","nav_mp3_crews":"帮会","nav_mp3_cta_buy_now":"立即购买","nav_mp3_featured":"精选","nav_mp3_grinds":"挑战","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人游戏","nav_mp3_news":"新闻","nav_mp3_ny_minute":"纽约一分钟","nav_mp3_official_site":"官方网站","nav_mp3_overview":"概况","nav_mp3_progress":"进度","nav_mp3_score_attack":"分数挑战","nav_mp3_singleplayer":"单人游戏","nav_mp3_specifications":"配置","nav_mp3_support":"支持","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新窗口中打开链接）","nav_quick_access_games":"游戏","nav_quick_access_home":"主页","nav_quick_access_newswire":"新闻专线","nav_rdo_accomplishments":"成就","nav_rdo_awards":"奖章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目录","nav_rdo_club_rewards":"俱乐部奖励","nav_rdo_community":"社区","nav_rdo_competitive_series":"竞技系列","nav_rdo_cta_buy_now":"立即购买","nav_rdo_customization":"自定义","nav_rdo_explore":"探索","nav_rdo_getting_started":"新手上路","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"概况","nav_rdo_photos":"照片","nav_rdo_posses":"团队","nav_rdo_posses_free_roam":"团队和自由模式","nav_rdo_progress":"进度","nav_rdo_progression":"进程","nav_rdo_rank_unlocks":"等级解锁","nav_rdo_roles":"职业","nav_rdo_specialist_roles":"专业经销商","nav_rdo_story_missions":"故事任务","nav_rdo_support":"支持","nav_rdr_cta_buy_now":"立即购买","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"艺术作品","nav_rdr2_catalogue":"目录","nav_rdr2_challenges":"挑战","nav_rdr2_chapters":"章节","nav_rdr2_character":"角色","nav_rdr2_compendium":"生涯","nav_rdr2_cta_buy_now":"立即购买","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相册","nav_rdr2_locations":"地点","nav_rdr2_media":"媒体","nav_rdr2_music":"音乐","nav_rdr2_online":"在线模式","nav_rdr2_overview":"概况","nav_rdr2_progress":"进度","nav_rdr2_stats":"统计数据","nav_rdr2_support":"支持","nav_rdr2_van_der_linde_gang":"范德林德帮","nav_rdr2_videos":"视频","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生动物","nav_rockstargames_home":"Rockstar Games 主页","nav_rockstargames_logo":"点击打开菜单","nav_rsg_downloads":"下载","nav_rsg_games":"游戏","nav_rsg_newswire":"新闻专线","nav_rsg_store":"商店","nav_rsg_support":"支持","nav_rsg_videos":"视频","nav_search_error_too_short":"您的搜索词条太短。词条长度必须至少为 {count} 个字符。","nav_search_error_too_short_invalid_chars":"您的搜索词条包含无效字符（{invalidChars}）。请删除这些无效字符并重试。","nav_support_dashboard":"个人中心","nav_support_home":"主页","nav_support_service_status":"服务状态","nav_support_submit_ticket":"提交请求","nav_tabletennis_cta_buy_now":"立即购买","nav_undeadnightmare_buy_now":"立即购买","nav_undeadnightmare_discover":"发现","nav_undeadnightmare_gallery":"相册","nav_undeadnightmare_info":"信息","nav_undeadnightmare_media":"媒体","nav_undeadnightmare_news":"新闻","nav_undeadnightmare_ps3_digital":"PS3 - 数码版","nav_undeadnightmare_specs":"配置","nav_undeadnightmare_suport":"支持","nav_undeadnightmare_videos":"视频","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 数码版","nav_view_all_games":"查看全部","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","quick_access_title":"Rockstar Games","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","search_action":"搜索","search_close_button":"关闭搜索","search_open_button":"打开搜索","search_placeholder":"搜索 Rockstar Games……","search_target_aria_label":"搜索 {target}","search_target_community":"社区","search_target_crews":"帮会","search_target_games":"游戏","search_target_jobs":"差事","search_target_posts":"帖子","search_target_user_photos":"用户照片","search_target_user_videos":"用户视频","search_target_users":"用户","search_target_videos":"视频"},"tw":{"accessibility_skip_button":"跳至主內容","games_menu_featured":"精選遊戲","games_menu_gta_online":"Grand Theft Auto 線上模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 線上模式","games_menu_view_all":"檢視全部","language_selector_default":"選擇語言","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"馬上購買","nav_bully_game_overview":"探索","nav_bully_Overview":"支援","nav_bully_videos":"影片","nav_careers_careers_on_linkedin":"LinkedIn 上的工作機會","nav_careers_contact_us":"聯絡我們","nav_careers_home":"首頁","nav_careers_openings":"工作機會","nav_cta_get_launcher":"取得 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"馬上購買","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"總覽","nav_gta_trilogy_support":"支援","nav_gta3_cta_buy_now":"馬上購買","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"馬上購買","nav_gtaiv_overview":"探索","nav_gtaiv_support":"支援","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"總覽","nav_gtaiveflc_support":"支援","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"瀏覽全部幫會","nav_gtao_checklist":"清單","nav_gtao_community":"社群","nav_gtao_crews":"幫會","nav_gtao_crews_create":"建立幫會","nav_gtao_cta_buy_now":"馬上購買","nav_gtao_discover":"探索","nav_gtao_emblem_editor":"徽記編輯器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 線上模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"瀏覽全部差事","nav_gtao_jobs_playlists":"遊玩清單","nav_gtao_license_plate_creator":"車牌製作器","nav_gtao_missions":"任務","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的幫會","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"總覽","nav_gtao_photos":"相片","nav_gtao_stats":"統計資料","nav_gtao_story":"故事","nav_gtao_support":"支援","nav_gtao_videos":"影片","nav_gtasanandreas_cta_buy_now":"馬上購買","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清單","nav_gtav_community":"社群","nav_gtav_create_crew":"建立幫會","nav_gtav_crews":"幫會","nav_gtav_crews_browse_all":"瀏覽全部幫會","nav_gtav_cta_buy_now":"馬上購買","nav_gtav_discover":"探索","nav_gtav_emblem_editor":"徽記編輯器","nav_gtav_gta_online":"GTA 線上模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"瀏覽全部差事","nav_gtav_licence_plate_creator":"車牌製作器","nav_gtav_missions":"任務","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的幫會","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"總覽","nav_gtav_photos":"相片","nav_gtav_playlists":"遊玩清單","nav_gtav_stats":"統計資料","nav_gtav_story":"故事","nav_gtav_support":"支援","nav_gtav_videos":"影片","nav_gtavc_cta_buy_now":"馬上購買","nav_gtavc_discover":"探索","nav_gtavcs_discover":"探索","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"尋找警徽","nav_lanoire_case_tracker":"案件追蹤器","nav_lanoire_checklist":"清單","nav_lanoire_cta_buy_now":"馬上購買","nav_lanoire_official_site":"官方網站","nav_lanoire_overview":"總覽","nav_lanoire_pc_console":"PC/遊戲主機","nav_lanoire_progress":"進度","nav_lanoire_stats":"統計資料","nav_lanoire_support":"支援","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"馬上購買","nav_more_dropdown":"更多","nav_mp3_accomplishments":"成就","nav_mp3_career":"生涯","nav_mp3_chapters":"章節","nav_mp3_checklist":"清單","nav_mp3_checkpoint_challenge":"檢查點挑戰","nav_mp3_crews":"幫會","nav_mp3_cta_buy_now":"馬上購買","nav_mp3_featured":"精選","nav_mp3_grinds":"挑戰","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人遊戲","nav_mp3_news":"新聞","nav_mp3_ny_minute":"分秒必爭","nav_mp3_official_site":"官方網站","nav_mp3_overview":"總覽","nav_mp3_progress":"進度","nav_mp3_score_attack":"奪取高分","nav_mp3_singleplayer":"單人遊戲","nav_mp3_specifications":"指定規格","nav_mp3_support":"支援","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（連結在新視窗開啟）","nav_quick_access_games":"遊戲","nav_quick_access_home":"首頁","nav_quick_access_newswire":"新聞放送","nav_rdo_accomplishments":"成就","nav_rdo_awards":"獎章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目錄","nav_rdo_club_rewards":"俱樂部獎勵","nav_rdo_community":"社群","nav_rdo_competitive_series":"競爭系列賽","nav_rdo_cta_buy_now":"馬上購買","nav_rdo_customization":"自訂","nav_rdo_explore":"探索","nav_rdo_getting_started":"準備開始","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"總覽","nav_rdo_photos":"相片","nav_rdo_posses":"武裝隊","nav_rdo_posses_free_roam":"武裝隊與浪跡模式","nav_rdo_progress":"進度","nav_rdo_progression":"發展","nav_rdo_rank_unlocks":"等級解鎖","nav_rdo_roles":"角色職業","nav_rdo_specialist_roles":"專家角色職業","nav_rdo_story_missions":"故事任務","nav_rdo_support":"支援","nav_rdr_cta_buy_now":"馬上購買","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"插畫","nav_rdr2_catalogue":"目錄","nav_rdr2_challenges":"挑戰","nav_rdr2_chapters":"章節","nav_rdr2_character":"角色","nav_rdr2_compendium":"圖鑑","nav_rdr2_cta_buy_now":"馬上購買","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相冊","nav_rdr2_locations":"地點","nav_rdr2_media":"媒體","nav_rdr2_music":"音樂","nav_rdr2_online":"線上模式","nav_rdr2_overview":"總覽","nav_rdr2_progress":"進度","nav_rdr2_stats":"統計資料","nav_rdr2_support":"支援","nav_rdr2_van_der_linde_gang":"范特林幫派","nav_rdr2_videos":"影片","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"Rockstar Games 首頁","nav_rockstargames_logo":"點擊以開啟選單","nav_rsg_downloads":"下載","nav_rsg_games":"遊戲","nav_rsg_newswire":"新聞放送","nav_rsg_store":"商店","nav_rsg_support":"支援","nav_rsg_videos":"影片","nav_search_error_too_short":"您的搜尋字詞太短。搜尋字詞必須至少有 {count} 個字元。","nav_search_error_too_short_invalid_chars":"您的搜尋字詞含有無效字元（{invalidChars}）。請移除後再試一次。","nav_support_dashboard":"我的設定畫面","nav_support_home":"首頁","nav_support_service_status":"服務狀態","nav_support_submit_ticket":"提交請求","nav_tabletennis_cta_buy_now":"馬上購買","nav_undeadnightmare_buy_now":"馬上購買","nav_undeadnightmare_discover":"探索","nav_undeadnightmare_gallery":"相冊","nav_undeadnightmare_info":"資訊","nav_undeadnightmare_media":"媒體","nav_undeadnightmare_news":"新聞","nav_undeadnightmare_ps3_digital":"PS3：數位版","nav_undeadnightmare_specs":"指定規格","nav_undeadnightmare_suport":"支援","nav_undeadnightmare_videos":"影片","nav_undeadnightmare_xbox360_digital":"Xbox 360：數位版","nav_view_all_games":"檢視全部","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"設定檔卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","quick_access_title":"Rockstar Games","sc_link_account":"帳號","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","search_action":"搜尋","search_close_button":"關閉搜尋","search_open_button":"開啟搜尋","search_placeholder":"搜尋 Rockstar Games……","search_target_aria_label":"搜尋{target}","search_target_community":"社群","search_target_crews":"幫會","search_target_games":"遊戲","search_target_jobs":"差事","search_target_posts":"貼文","search_target_user_photos":"使用者相片","search_target_user_videos":"使用者影片","search_target_users":"使用者","search_target_videos":"影片"}}'),
        v_ = (0, r.vU)({
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
        p_ = [{
          domain: v.z.www,
          path: "/search"
        }],
        h_ = (0, l.createContext)({
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
        f_ = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, l.useState)({
            navigation: ""
          }), [s, r] = (0, l.useState)(null), [i, o] = (0, l.useState)(!1), [_, d] = (0, l.useMemo)((() => f()), []), {
            hash: g,
            pathname: m
          } = (0, K.useLocation)(), {
            data: u
          } = J(), {
            location: p
          } = window, h = (0, v.Z)(), b = (0, l.useMemo)((() => ({
            navigationState: t,
            setNavigationState: n,
            environment: h,
            location: p,
            locale: _,
            rockstarUser: u,
            openedDropdown: s,
            setOpenedDropdown: r,
            isSearchPage: i
          })), [t, _, JSON.stringify(p), h, s, i, u]);
          return (0, l.useEffect)((() => {
            d(_.iso)
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
              a = p_.some((a => a.domain === e && m.startsWith(a.path)));
            o(a)
          }), [m]), (0, c.jsx)(h_.Provider, {
            value: b,
            children: a
          })
        },
        b_ = () => {
          const e = (0, l.useContext)(h_);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        k_ = () => {
          const e = (0, l.useContext)(h_);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        y_ = () => {
          const e = (0, l.useContext)(h_);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: a,
            setOpenedDropdown: t
          } = e;
          return [a, e => {
            t(e === a ? null : e)
          }]
        },
        w_ = () => {
          const e = (0, l.useContext)(h_);
          if (void 0 === e) throw new Error("useIsSearchPage must be used within a Navigation Provider");
          return e.isSearchPage
        },
        x_ = [{
          intlMessage: v_.games_menu_gta_v,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/V.jpg",
          location: {
            domain: v.z.www,
            path: "/gta-v"
          },
          dataTestId: "gtav"
        }, {
          intlMessage: v_.games_menu_gta_online,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/GTAOnline.jpg",
          location: {
            domain: v.z.www,
            path: "/gta-online"
          },
          dataTestId: "gtao"
        }, {
          intlMessage: v_.games_menu_gta_trilogy,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/GTATrilogy.jpg",
          location: {
            domain: v.z.www,
            path: "/GTATrilogy"
          },
          dataTestId: "gtaTrilogy"
        }, {
          intlMessage: v_.games_menu_rdr_2,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg",
          location: {
            domain: v.z.www,
            path: "/reddeadredemption2"
          },
          dataTestId: "rdr2"
        }, {
          intlMessage: v_.games_menu_rdr_online,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/reddeadonline.jpg",
          location: {
            domain: v.z.www,
            path: "/reddeadonline"
          },
          dataTestId: "rdo"
        }];
      var M_ = t(5370),
        S_ = t.n(M_);
      const C_ = {
          globalNavigationRoot: "rockstargames-modules-core-headera95a9e2c93190e6b0eb886211d3beb68",
          large: "rockstargames-modules-core-headere72b6798a0d8012bd8f16236087e7f7a",
          badge: "rockstargames-modules-core-headerea0b713e5b81a79d10265e5981b2d7cf",
          globalNavigationSpacer: "rockstargames-modules-core-headerfa88e95f42080c6adec74d487de431f5",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headerc04a845b0f1bbd7409cc61915a742a85"
        },
        T_ = {
          site: "beaterator",
          appearancePaths: {
            [v.z.www]: ["/games/beaterator/*"]
          },
          brand: "beaterator",
          links: []
        },
        N_ = {
          site: "bully",
          appearancePaths: {
            [v.z.www]: ["/games/bully/*"],
            [v.z.socialClub]: ["/games/bully/*"]
          },
          brand: "bully",
          links: [{
            text: v_.nav_bully_game_overview.defaultMessage,
            intlMessage: v_.nav_bully_game_overview,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/games/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: v_.nav_bully_accomplishments.defaultMessage,
            intlMessage: v_.nav_bully_accomplishments,
            type: "nav-internal",
            location: {
              domain: v.z.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: v_.nav_bully_support.defaultMessage,
            intlMessage: v_.nav_bully_support,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: v_.nav_bully_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_bully_cta_buy_now,
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-bully-scholarship-edition"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        },
        j_ = {
          site: "careers",
          appearancePaths: {
            [v.z.www]: ["/careers/*"]
          },
          brand: "careers",
          links: [{
            text: v_.nav_careers_home.defaultMessage,
            intlMessage: v_.nav_careers_home,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/careers"
            }
          }, {
            text: v_.nav_careers_openings.defaultMessage,
            intlMessage: v_.nav_careers_openings,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/careers/openings"
            }
          }, {
            text: v_.nav_careers_contact_us.defaultMessage,
            intlMessage: v_.nav_careers_contact_us,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/careers#contact-us"
            }
          }, {
            text: v_.nav_careers_careers_on_linkedin.defaultMessage,
            intlMessage: v_.nav_careers_careers_on_linkedin,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com/company/rockstar-games/",
              path: "/company/rockstar-games/"
            }
          }]
        },
        z_ = {
          site: "gta",
          appearancePaths: {
            [v.z.www]: ["/games/gta/*"]
          },
          brand: "gta",
          links: []
        },
        E_ = {
          site: "gta2",
          appearancePaths: {
            [v.z.www]: ["/games/gta2/*"]
          },
          brand: "gta2",
          links: []
        },
        A_ = {
          site: "grandtheftauto3",
          appearancePaths: {
            [v.z.www]: ["/games/grandtheftauto3/*"]
          },
          brand: "gta3",
          links: [],
          cta: {
            text: v_.nav_gta3_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_gta3_cta_buy_now,
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
        I_ = {
          site: "gta-iv",
          appearancePaths: {
            [v.z.www]: ["/games/IV/*"],
            [v.z.socialClub]: ["/games/gtaiv/*"]
          },
          brand: "gta4",
          links: [{
            text: v_.nav_gtaiv_overview.defaultMessage,
            intlMessage: v_.nav_gtaiv_overview,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: v_.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: v_.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: v.z.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: v_.nav_gtaiv_support.defaultMessage,
            intlMessage: v_.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: v_.nav_gtaiv_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_gtaiv_cta_buy_now,
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
        P_ = {
          site: "gta-v",
          appearancePaths: {
            [v.z.www]: ["/gta-v/*"],
            [v.z.socialClub]: ["/games/gtav/*"]
          },
          brand: "gta5",
          links: [{
            text: v_.nav_gtav_overview.defaultMessage,
            intlMessage: v_.nav_gtav_overview,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/gta-v"
            },
            dataTestId: "gtavLink"
          }, {
            text: v_.nav_gtav_gta_online.defaultMessage,
            intlMessage: v_.nav_gtav_gta_online,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: v_.nav_gtav_discover.defaultMessage,
              intlMessage: v_.nav_gtav_discover,
              type: "nav-internal",
              location: {
                domain: v.z.www,
                path: "/gta-online"
              },
              dataTestId: "gtaoLink"
            }, {
              text: v_.nav_gtav_my_character.defaultMessage,
              intlMessage: v_.nav_gtav_my_character,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              dataTestId: "gtaoButton"
            }, {
              text: v_.nav_gtav_guides.defaultMessage,
              intlMessage: v_.nav_gtav_guides,
              type: "nav-internal",
              location: {
                domain: v.z.www,
                path: "/gta-online/guides"
              },
              dataTestId: "gtaoGuidesLink"
            }, {
              text: v_.nav_gtav_licence_plate_creator.defaultMessage,
              intlMessage: v_.nav_gtav_licence_plate_creator,
              type: "nav-internal",
              location: {
                domain: v.z.www,
                path: "/gta-online/license-plates"
              },
              dataTestId: "gtaoLicensePlatesLink"
            }]
          }, {
            text: v_.nav_gtav_story.defaultMessage,
            intlMessage: v_.nav_gtav_story,
            type: "nav-dropdown",
            dataTestId: "gtavSpLink",
            children: [{
              text: v_.nav_gtav_stats.defaultMessage,
              intlMessage: v_.nav_gtav_stats,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/"
              },
              dataTestId: "gtavSpOverviewButton"
            }, {
              text: v_.nav_gtav_missions.defaultMessage,
              intlMessage: v_.nav_gtav_missions,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/missions/"
              },
              dataTestId: "gtavSpMissionsButton"
            }, {
              text: v_.nav_gtav_checklist.defaultMessage,
              intlMessage: v_.nav_gtav_checklist,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/checklist"
              },
              dataTestId: "gtavSpChecklistButton"
            }, {
              text: v_.nav_gtav_accomplishments.defaultMessage,
              intlMessage: v_.nav_gtav_accomplishments,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              dataTestId: "gtavSpAccomplishmentsButton"
            }]
          }, {
            text: v_.nav_gtav_gta_plus.defaultMessage,
            intlMessage: v_.nav_gtav_gta_plus,
            type: "nav-internal",
            location: {
              domain: v.z.www,
              path: "/gta-plus"
            },
            dataTestId: "gtav+Link"
          }, {
            text: v_.nav_gtav_community.defaultMessage,
            intlMessage: v_.nav_gtav_community,
            type: "nav-dropdown",
            dataTestId: "gtavCommunityDropdown",
            children: [{
              text: v_.nav_gtav_jobs.defaultMessage,
              intlMessage: v_.nav_gtav_jobs,
              type: "nav-dropdown",
              dataTestId: "gtavJobsDropdown",
              children: [{
                text: v_.nav_gtav_jobs_browse_all.defaultMessage,
                intlMessage: v_.nav_gtav_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavAllJobsButtons",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs"
                }
              }, {
                text: v_.nav_gtav_my_jobs.defaultMessage,
                intlMessage: v_.nav_gtav_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavMyJobsButtons",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs/?dateRange=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: v_.nav_gtav_playlists.defaultMessage,
                intlMessage: v_.nav_gtav_playlists,
                type: "nav-internal",
                dataTestId: "gtavPlaylistsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: v_.nav_gtav_crews.defaultMessage,
              intlMessage: v_.nav_gtav_crews,
              type: "nav-dropdown",
              dataTestId: "gtavCrewsDropdown",
              children: [{
                text: v_.nav_gtav_crews_browse_all.defaultMessage,
                intlMessage: v_.nav_gtav_crews_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavBrowseCrewsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews"
                }
              }, {
                text: v_.nav_gtav_my_crews.defaultMessage,
                intlMessage: v_.nav_gtav_my_crews,
                dataTestId: "gtavMyCrewsButton",
                type: "nav-internal",
                requiresAuth: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: v_.nav_gtav_create_crew.defaultMessage,
                intlMessage: v_.nav_gtav_create_crew,
                type: "nav-internal",
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: v_.nav_gtav_emblem_editor.defaultMessage,
                intlMessage: v_.nav_gtav_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/emblems"
                }
              }]
            }, {
              text: v_.nav_gtav_photos.defaultMessage,
              intlMessage: v_.nav_gtav_photos,
              type: "nav-internal",
              dataTestId: "gtaViewPhotosButton",
              location: {
                domain: v.z.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: v_.nav_gtav_videos.defaultMessage,
              intlMessage: v_.nav_gtav_videos,
              dataTestId: "gtaViewVideosButton",
              type: "nav-internal",
              location: {
                domain: v.z.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: v_.nav_gtav_support.defaultMessage,
            intlMessage: v_.nav_gtav_support,
            dataTestId: "gtaSupportLink",
            type: "nav-external",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: v_.nav_gtav_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_gtav_cta_buy_now,
            location: {
              domain: v.z.www,
              path: "/gta-v?info=order"
            },
            ga: "cta_buy",
            dataTestId: "gtavPurchaseLink"
          }
        },
        L_ = {
          site: "grandtheftauto-gba",
          appearancePaths: {
            [v.z.www]: ["/games/grandtheftauto-gba/*"]
          },
          brand: "gtaadvance",
          links: []
        },
        O_ = {
          site: "chinatownwars",
          appearancePaths: {
            [v.z.www]: ["/games/chinatownwars/*"]
          },
          brand: "gtactw",
          links: []
        },
        D_ = {
          site: "episodesfromlibertycity",
          appearancePaths: {
            [v.z.www]: ["/games/episodesfromlibertycity/*"]
          },
          brand: "gtaiveflc",
          links: [{
            text: v_.nav_gtaiv_overview.defaultMessage,
            intlMessage: v_.nav_gtaiv_overview,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: v.z.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: v_.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: v_.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: v.z.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: v_.nav_gtaiv_support.defaultMessage,
            intlMessage: v_.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/115001614848"
            }
          }]
        },
        R_ = {
          site: "libertycitystories",
          appearancePaths: {
            [v.z.www]: ["/games/libertycitystories/*"]
          },
          brand: "gtalcs",
          links: []
        },
        V_ = {
          site: "gtalondon",
          appearancePaths: {
            [v.z.www]: ["/games/gtalondon/*"]
          },
          brand: "gtalondon",
          links: []
        },
        B_ = {
          site: "gta-online",
          appearancePaths: {
            [v.z.www]: ["/gta-online/*"],
            [v.z.socialClub]: ["/member/:username/crews/*", "/crews/*", "/crew/*", "/jobs/*", "*/jobs/*", "/videos/*{titleOverride}", "/photos/*{titleOverride}", "/emblems/*", "/games/gtav/:platform/career/overview/gtaonline/*"]
          },
          brand: "gtaonline",
          links: [{
            text: v_.nav_gtao_overview.defaultMessage,
            intlMessage: v_.nav_gtao_overview,
            type: "nav-internal",
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: v.z.www,
              path: "/gta-v"
            }
          }, {
            text: v_.nav_gtao_gtao.defaultMessage,
            intlMessage: v_.nav_gtao_gtao,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: v_.nav_gtao_discover.defaultMessage,
              intlMessage: v_.nav_gtao_discover,
              type: "nav-internal",
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: v.z.www,
                path: "/gta-online"
              }
            }, {
              text: v_.nav_gtao_my_character.defaultMessage,
              intlMessage: v_.nav_gtao_my_character,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoOverviewButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              }
            }, {
              text: v_.nav_gtao_guides.defaultMessage,
              intlMessage: v_.nav_gtao_guides,
              type: "nav-internal",
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: v.z.www,
                path: "/gta-online/guides"
              }
            }, {
              text: v_.nav_gtao_license_plate_creator.defaultMessage,
              intlMessage: v_.nav_gtao_license_plate_creator,
              type: "nav-internal",
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: v.z.www,
                path: "/gta-online/license-plates"
              }
            }]
          }, {
            text: v_.nav_gtao_story.defaultMessage,
            intlMessage: v_.nav_gtao_story,
            dataTestId: "gtaoStoryDropdown",
            type: "nav-dropdown",
            children: [{
              text: v_.nav_gtao_stats.defaultMessage,
              intlMessage: v_.nav_gtao_stats,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoCareerButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/"
              }
            }, {
              text: v_.nav_gtao_missions.defaultMessage,
              intlMessage: v_.nav_gtao_missions,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoMissionsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/missions/"
              }
            }, {
              text: v_.nav_gtao_checklist.defaultMessage,
              intlMessage: v_.nav_gtao_checklist,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoChecklistButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/checklist"
              }
            }, {
              text: v_.nav_gtao_accomplishments.defaultMessage,
              intlMessage: v_.nav_gtao_accomplishments,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoSpAccomplishmentsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/accomplishments"
              }
            }]
          }, {
            text: v_.nav_gtao_gta_plus.defaultMessage,
            intlMessage: v_.nav_gtao_gta_plus,
            type: "nav-internal",
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: v.z.www,
              path: "/gta-plus"
            }
          }, {
            text: v_.nav_gtao_community.defaultMessage,
            intlMessage: v_.nav_gtao_community,
            type: "nav-dropdown",
            dataTestId: "gtaoCommunityDropdown",
            children: [{
              text: v_.nav_gtao_jobs.defaultMessage,
              intlMessage: v_.nav_gtao_jobs,
              type: "nav-dropdown",
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: v_.nav_gtao_jobs_browse_all.defaultMessage,
                intlMessage: v_.nav_gtao_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs"
                }
              }, {
                text: v_.nav_gtao_my_jobs.defaultMessage,
                intlMessage: v_.nav_gtao_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                requiresAuth: !0,
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs/?dateRange=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: v_.nav_gtao_jobs_playlists.defaultMessage,
                intlMessage: v_.nav_gtao_jobs_playlists,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: v_.nav_gtao_crews.defaultMessage,
              intlMessage: v_.nav_gtao_crews,
              type: "nav-dropdown",
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: v_.nav_gtao_browse_crews.defaultMessage,
                intlMessage: v_.nav_gtao_browse_crews,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews"
                }
              }, {
                text: v_.nav_gtao_my_crews.defaultMessage,
                intlMessage: v_.nav_gtao_my_crews,
                type: "nav-internal",
                dataTestId: "gtaoMyCrewsButton",
                requiresAuth: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: v_.nav_gtao_crews_create.defaultMessage,
                intlMessage: v_.nav_gtao_crews_create,
                type: "nav-internal",
                dataTestId: "gtaoCreateCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: v_.nav_gtao_emblem_editor.defaultMessage,
                intlMessage: v_.nav_gtao_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtaoCreateEmblemButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/emblems"
                }
              }]
            }, {
              text: v_.nav_gtao_photos.defaultMessage,
              intlMessage: v_.nav_gtao_photos,
              type: "nav-internal",
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: v.z.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: v_.nav_gtao_videos.defaultMessage,
              intlMessage: v_.nav_gtao_videos,
              type: "nav-internal",
              dataTestId: "gtaoVideosButton",
              location: {
                domain: v.z.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: v_.nav_gtao_support.defaultMessage,
            intlMessage: v_.nav_gtao_support,
            type: "nav-external",
            dataTestId: "gtaoSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: v_.nav_gtao_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_gtao_cta_buy_now,
            dataTestId: "gtaoPurchaseLink",
            location: {
              domain: v.z.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy"
          }
        },
        G_ = {
          site: "gta-plus",
          appearancePaths: {
            [v.z.www]: ["/gta-plus/*"],
            [v.z.socialClub]: ["*/crews/*", "*/jobs/*", "/emblems/*"]
          },
          brand: "gtaplus",
          links: [{
            text: v_.nav_gtao_overview.defaultMessage,
            intlMessage: v_.nav_gtao_overview,
            type: "nav-internal",
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: v.z.www,
              path: "/gta-v"
            }
          }, {
            text: v_.nav_gtao_gtao.defaultMessage,
            intlMessage: v_.nav_gtao_gtao,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: v_.nav_gtao_discover.defaultMessage,
              intlMessage: v_.nav_gtao_discover,
              type: "nav-internal",
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: v.z.www,
                path: "/gta-online"
              }
            }, {
              text: v_.nav_gtao_my_character.defaultMessage,
              intlMessage: v_.nav_gtao_my_character,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoOverviewButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              }
            }, {
              text: v_.nav_gtao_guides.defaultMessage,
              intlMessage: v_.nav_gtao_guides,
              type: "nav-internal",
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: v.z.www,
                path: "/gta-online/guides"
              }
            }, {
              text: v_.nav_gtao_license_plate_creator.defaultMessage,
              intlMessage: v_.nav_gtao_license_plate_creator,
              type: "nav-internal",
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: v.z.www,
                path: "/gta-online/license-plates"
              }
            }]
          }, {
            text: v_.nav_gtao_story.defaultMessage,
            intlMessage: v_.nav_gtao_story,
            dataTestId: "gtaoStoryDropdown",
            type: "nav-dropdown",
            children: [{
              text: v_.nav_gtao_stats.defaultMessage,
              intlMessage: v_.nav_gtao_stats,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoCareerButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/overview/"
              }
            }, {
              text: v_.nav_gtao_missions.defaultMessage,
              intlMessage: v_.nav_gtao_missions,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoMissionsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/missions/"
              }
            }, {
              text: v_.nav_gtao_checklist.defaultMessage,
              intlMessage: v_.nav_gtao_checklist,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoChecklistButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/checklist"
              }
            }, {
              text: v_.nav_gtao_accomplishments.defaultMessage,
              intlMessage: v_.nav_gtao_accomplishments,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoAccomplishmentsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtav/career/accomplishments"
              }
            }]
          }, {
            text: v_.nav_gtao_gta_plus.defaultMessage,
            intlMessage: v_.nav_gtao_gta_plus,
            type: "nav-internal",
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: v.z.www,
              path: "/gta-plus"
            }
          }, {
            text: v_.nav_gtao_community.defaultMessage,
            intlMessage: v_.nav_gtao_community,
            type: "nav-dropdown",
            dataTestId: "gtaoCommunityDropdown",
            children: [{
              text: v_.nav_gtao_jobs.defaultMessage,
              intlMessage: v_.nav_gtao_jobs,
              type: "nav-dropdown",
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: v_.nav_gtao_jobs_browse_all.defaultMessage,
                intlMessage: v_.nav_gtao_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/jobs"
                }
              }, {
                text: v_.nav_gtao_my_jobs.defaultMessage,
                intlMessage: v_.nav_gtao_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: v.z.socialClub,
                  path: " /jobs/?filter=me&sort=likes&title=gtav"
                }
              }, {
                text: v_.nav_gtao_jobs_playlists.defaultMessage,
                intlMessage: v_.nav_gtao_jobs_playlists,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: v_.nav_gtao_crews.defaultMessage,
              intlMessage: v_.nav_gtao_crews,
              type: "nav-dropdown",
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: v_.nav_gtao_browse_crews.defaultMessage,
                intlMessage: v_.nav_gtao_browse_crews,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews"
                }
              }, {
                text: v_.nav_gtao_my_crews.defaultMessage,
                intlMessage: v_.nav_gtao_my_crews,
                type: "nav-internal",
                dataTestId: "gtaoMyCrewsButton",
                requiresAuth: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: v_.nav_gtao_crews_create.defaultMessage,
                intlMessage: v_.nav_gtao_crews_create,
                type: "nav-internal",
                dataTestId: "gtaoCreateCrewButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: v_.nav_gtao_emblem_editor.defaultMessage,
                intlMessage: v_.nav_gtao_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtaoCreateEmblemButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/emblems/new"
                }
              }]
            }, {
              text: v_.nav_gtao_photos.defaultMessage,
              intlMessage: v_.nav_gtao_photos,
              type: "nav-internal",
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: v.z.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: v_.nav_gtao_videos.defaultMessage,
              intlMessage: v_.nav_gtao_videos,
              type: "nav-internal",
              dataTestId: "gtaoVideosButton",
              location: {
                domain: v.z.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: v_.nav_gtao_support.defaultMessage,
            intlMessage: v_.nav_gtao_support,
            type: "nav-external",
            dataTestId: "gtaoSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: v_.nav_gtao_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_gtao_cta_buy_now,
            dataTestId: "gtaoPurchaseLink",
            location: {
              domain: v.z.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy"
          }
        },
        F_ = {
          site: "sanandreas",
          appearancePaths: {
            [v.z.www]: ["/games/sanandreas/*"]
          },
          brand: "gtasanandreas",
          links: [],
          cta: {
            text: v_.nav_gtasanandreas_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_gtasanandreas_cta_buy_now,
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
        q_ = {
          site: "gta-trilogy",
          appearancePaths: {
            [v.z.www]: ["/GTATrilogy/*"],
            [v.z.socialClub]: ["/games/gtasa/*", "/games/gtavc/*", "/games/gta3/*"]
          },
          brand: "gtatrilogy",
          links: [{
            text: v_.nav_gta_trilogy_overview.defaultMessage,
            intlMessage: v_.nav_gta_trilogy_overview,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: v.z.www,
              path: "/GTATrilogy"
            }
          }, {
            text: v_.nav_gta_trilogy_accomplishments.defaultMessage,
            intlMessage: v_.nav_gta_trilogy_accomplishments,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: v_.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: v_.nav_gta_trilogy_gtasa,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: v_.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: v_.nav_gta_trilogy_gtavc,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: v_.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: v_.nav_gta_trilogy_gta3,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: v_.nav_gta_trilogy_support.defaultMessage,
            intlMessage: v_.nav_gta_trilogy_support,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: v_.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: v_.nav_gta_trilogy_gtasa,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: v.z.support,
                path: "/categories/115001620287"
              }
            }, {
              text: v_.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: v_.nav_gta_trilogy_gtavc,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: v.z.support,
                path: "/categories/115001619868"
              }
            }, {
              text: v_.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: v_.nav_gta_trilogy_gta3,
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
            text: v_.nav_gta_trilogy_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_gta_trilogy_cta_buy_now,
            dataTestId: "gtaTrilogyPurchaseLink",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        $_ = {
          site: "vicecity",
          appearancePaths: {
            [v.z.www]: ["/games/vicecity/*"]
          },
          brand: "gtavc",
          links: [],
          cta: {
            text: v_.nav_gtavc_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_gtavc_cta_buy_now,
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
        U_ = {
          site: "vicecitystories",
          appearancePaths: {
            [v.z.www]: ["/games/vicecitystories/*"]
          },
          brand: "gtavcs",
          links: []
        },
        H_ = {
          site: "la-noire",
          appearancePaths: {
            [v.z.www]: ["/lanoire/*", "/games/lanoire/*"],
            [v.z.socialClub]: ["/games/lanvr/*", "/games/lan/*"]
          },
          brand: "lanoire",
          links: [{
            text: v_.nav_lanoire_overview.defaultMessage,
            intlMessage: v_.nav_lanoire_overview,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: v.z.www,
              path: "/games/lanoire"
            }
          }, {
            text: v_.nav_lanoire_progress.defaultMessage,
            intlMessage: v_.nav_lanoire_progress,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: v_.nav_lanoire_pc_console.defaultMessage,
              intlMessage: v_.nav_lanoire_pc_console,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: v_.nav_lanoire_case_tracker.defaultMessage,
                intlMessage: v_.nav_lanoire_case_tracker,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: v_.nav_lanoire_checklist.defaultMessage,
                intlMessage: v_.nav_lanoire_checklist,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: v_.nav_lanoire_stats.defaultMessage,
                intlMessage: v_.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: v_.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: v_.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: v_.nav_lanoire_badge_pursuit.defaultMessage,
                intlMessage: v_.nav_lanoire_badge_pursuit,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: v_.nav_lanoire_vr_case_files.defaultMessage,
              intlMessage: v_.nav_lanoire_vr_case_files,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: v_.nav_lanoire_stats.defaultMessage,
                intlMessage: v_.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: v_.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: v_.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: v.z.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: v_.nav_lanoire_support.defaultMessage,
            intlMessage: v_.nav_lanoire_support,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: v_.nav_lanoire_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_lanoire_cta_buy_now,
            dataTestId: "lanoirePurchaseLink",
            location: {
              domain: v.z.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy"
          }
        },
        W_ = {
          site: "manhunt",
          appearancePaths: {
            [v.z.www]: ["/games/manhunt/*"]
          },
          brand: "manhunt",
          links: []
        },
        X_ = {
          site: "manhunt2",
          appearancePaths: {
            [v.z.www]: ["/games/manhunt2/*"]
          },
          brand: "manhunt2",
          links: []
        },
        Y_ = {
          site: "maxpayne",
          appearancePaths: {
            [v.z.www]: ["/games/maxpayne/*"]
          },
          brand: "maxpayne",
          links: []
        },
        J_ = {
          site: "maxpayne2",
          appearancePaths: {
            [v.z.www]: ["/games/maxpayne2/*"]
          },
          brand: "maxpayne2",
          links: []
        },
        Z_ = {
          site: "maxpayne3",
          appearancePaths: {
            [v.z.www]: ["/games/maxpayne3/*"],
            [v.z.socialClub]: ["/games/maxpayne3/*"]
          },
          brand: "maxpayne3",
          links: [{
            text: v_.nav_mp3_overview.defaultMessage,
            intlMessage: v_.nav_mp3_overview,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: v.z.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: v_.nav_mp3_progress.defaultMessage,
            intlMessage: v_.nav_mp3_progress,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: v_.nav_mp3_accomplishments.defaultMessage,
              intlMessage: v_.nav_mp3_accomplishments,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: v_.nav_mp3_singleplayer.defaultMessage,
              intlMessage: v_.nav_mp3_singleplayer,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: v_.nav_mp3_career.defaultMessage,
                intlMessage: v_.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: v_.nav_mp3_checklist.defaultMessage,
                intlMessage: v_.nav_mp3_checklist,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: v_.nav_mp3_grinds.defaultMessage,
                intlMessage: v_.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: v_.nav_mp3_chapters.defaultMessage,
                intlMessage: v_.nav_mp3_chapters,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: v_.nav_mp3_weapons.defaultMessage,
                intlMessage: v_.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: v_.nav_mp3_leaderboards.defaultMessage,
                intlMessage: v_.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: v_.nav_mp3_multiplayer.defaultMessage,
              intlMessage: v_.nav_mp3_multiplayer,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: v_.nav_mp3_career.defaultMessage,
                intlMessage: v_.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: v_.nav_mp3_grinds.defaultMessage,
                intlMessage: v_.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: v_.nav_mp3_weapons.defaultMessage,
                intlMessage: v_.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: v_.nav_mp3_leaderboards.defaultMessage,
                intlMessage: v_.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: v_.nav_mp3_crews.defaultMessage,
              intlMessage: v_.nav_mp3_crews,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: v_.nav_mp3_multiplayer.defaultMessage,
                intlMessage: v_.nav_mp3_multiplayer,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: v_.nav_mp3_score_attack.defaultMessage,
                intlMessage: v_.nav_mp3_score_attack,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: v_.nav_mp3_ny_minute.defaultMessage,
                intlMessage: v_.nav_mp3_ny_minute,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: v_.nav_mp3_checkpoint_challenge.defaultMessage,
                intlMessage: v_.nav_mp3_checkpoint_challenge,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.z.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: v_.nav_mp3_featured.defaultMessage,
                intlMessage: v_.nav_mp3_featured,
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
            text: v_.nav_mp3_support.defaultMessage,
            intlMessage: v_.nav_mp3_support,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: v_.nav_mp3_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_mp3_cta_buy_now,
            dataTestId: "mp3PurchaseLink",
            location: {
              domain: v.z.www,
              path: "/games/maxpayne3/order"
            },
            ga: "cta_buy"
          }
        },
        K_ = {
          site: "midnightclub",
          appearancePaths: {
            [v.z.www]: ["/games/midnightclub/*"]
          },
          brand: "midnightclubstreetracing",
          links: []
        },
        Q_ = {
          site: "midnightclub2",
          appearancePaths: {
            [v.z.www]: ["/games/midnightclub2/*"]
          },
          brand: "midnightclub2",
          links: []
        },
        ec = {
          site: "midnightclub3",
          appearancePaths: {
            [v.z.www]: ["/games/midnightclub3/*"]
          },
          brand: "midnightclub3dub",
          links: []
        },
        ac = {
          site: "midnightclubLA",
          appearancePaths: {
            [v.z.www]: ["/games/midnightclubLA/*"]
          },
          brand: "midnightclubla",
          links: [],
          cta: {
            text: v_.nav_midnightclubla_buy_now.defaultMessage,
            intlMessage: v_.nav_midnightclubla_buy_now,
            dataTestId: "midnightClubLaBuyNowCta",
            location: {
              domain: "https://marketplace.xbox.com",
              path: "/en-US/Product/Midnight-Club-LA/66acd000-77fe-1000-9115-d802545407f8"
            },
            ga: "cta_buy"
          }
        },
        tc = {
          site: "oni",
          appearancePaths: {
            [v.z.www]: ["/games/oni/*"]
          },
          brand: "oni",
          links: []
        },
        nc = {
          site: "rdo",
          appearancePaths: {
            [v.z.www]: ["/reddeadonline/*"],
            [v.z.socialClub]: ["/games/rdo/*"]
          },
          brand: "reddeadonline",
          links: [{
            text: v_.nav_rdo_overview.defaultMessage,
            intlMessage: v_.nav_rdo_overview,
            type: "nav-internal",
            dataTestId: "rdoLink",
            location: {
              domain: v.z.www,
              path: "/reddeadonline"
            }
          }, {
            text: v_.nav_rdo_explore.defaultMessage,
            intlMessage: v_.nav_rdo_explore,
            type: "nav-dropdown",
            dataTestId: "rdoExploreDropdown",
            children: [{
              text: v_.nav_rdo_getting_started.defaultMessage,
              intlMessage: v_.nav_rdo_getting_started,
              type: "nav-internal",
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/getting-started"
              }
            }, {
              text: v_.nav_rdo_specialist_roles.defaultMessage,
              intlMessage: v_.nav_rdo_specialist_roles,
              type: "nav-internal",
              dataTestId: "rdoRolesLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/roles"
              }
            }, {
              text: v_.nav_rdo_story_missions.defaultMessage,
              intlMessage: v_.nav_rdo_story_missions,
              type: "nav-internal",
              dataTestId: "rdoLOOLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              }
            }, {
              text: v_.nav_rdo_posses_free_roam.defaultMessage,
              intlMessage: v_.nav_rdo_posses_free_roam,
              type: "nav-internal",
              dataTestId: "rdoPossesLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              }
            }, {
              text: v_.nav_rdo_competitive_series.defaultMessage,
              intlMessage: v_.nav_rdo_competitive_series,
              type: "nav-internal",
              dataTestId: "rdoSAELink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              }
            }, {
              text: v_.nav_rdo_customization.defaultMessage,
              intlMessage: v_.nav_rdo_customization,
              type: "nav-internal",
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/customization"
              }
            }, {
              text: v_.nav_rdo_progression.defaultMessage,
              intlMessage: v_.nav_rdo_progression,
              type: "nav-internal",
              dataTestId: "rdoProgressLink",
              location: {
                domain: v.z.www,
                path: "/reddeadonline/features/rank-and-fortune"
              }
            }]
          }, {
            text: v_.nav_rdo_progress.defaultMessage,
            intlMessage: v_.nav_rdo_progress,
            type: "nav-dropdown",
            dataTestId: "rdoProgressDropdown",
            children: [{
              text: v_.nav_rdo_my_character.defaultMessage,
              intlMessage: v_.nav_rdo_my_character,
              type: "nav-internal",
              dataTestId: "rdoOverviewButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/overview"
              }
            }, {
              text: v_.nav_rdo_roles.defaultMessage,
              intlMessage: v_.nav_rdo_roles,
              type: "nav-internal",
              dataTestId: "rdoRolesButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/roles"
              }
            }, {
              text: v_.nav_rdo_club_rewards.defaultMessage,
              intlMessage: v_.nav_rdo_club_rewards,
              type: "nav-internal",
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/clubrewards"
              }
            }, {
              text: v_.nav_rdo_rank_unlocks.defaultMessage,
              intlMessage: v_.nav_rdo_rank_unlocks,
              type: "nav-internal",
              dataTestId: "rdoRankButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/rank"
              }
            }, {
              text: v_.nav_rdo_awards.defaultMessage,
              intlMessage: v_.nav_rdo_awards,
              type: "nav-internal",
              dataTestId: "rdoAwardsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/awards"
              }
            }, {
              text: v_.nav_rdo_accomplishments.defaultMessage,
              intlMessage: v_.nav_rdo_accomplishments,
              type: "nav-internal",
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/achievements"
              }
            }, {
              text: v_.nav_rdo_benefits.defaultMessage,
              intlMessage: v_.nav_rdo_benefits,
              type: "nav-internal",
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/benefits"
              }
            }]
          }, {
            text: v_.nav_rdo_community.defaultMessage,
            intlMessage: v_.nav_rdo_community,
            type: "nav-dropdown",
            dataTestId: "rdoCommunityDropdown",
            children: [{
              text: v_.nav_rdo_posses.defaultMessage,
              intlMessage: v_.nav_rdo_posses,
              type: "nav-internal",
              dataTestId: "rdoPosseButton",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdo/posse"
              }
            }, {
              text: v_.nav_rdo_photos.defaultMessage,
              intlMessage: v_.nav_rdo_photos,
              type: "nav-internal",
              dataTestId: "rdoPhotosButton",
              location: {
                domain: v.z.socialClub,
                path: "/photos/?title=rdr2"
              }
            }]
          }, {
            text: v_.nav_rdo_catalogue.defaultMessage,
            intlMessage: v_.nav_rdo_catalogue,
            type: "nav-external",
            dataTestId: "rdoCatalogueButton",
            target: "_blank",
            location: {
              domain: v.z.socialClub,
              path: "games/rdr2/catalogue/online/"
            }
          }, {
            text: v_.nav_rdo_support.defaultMessage,
            intlMessage: v_.nav_rdo_support,
            type: "nav-external",
            dataTestId: "rdoSupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: v_.nav_rdo_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_rdo_cta_buy_now,
            dataTestId: "rdoPurchaseLink",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        },
        sc = {
          site: "reddeadredemption",
          appearancePaths: {
            [v.z.www]: ["/reddeadredemption/*"]
          },
          brand: "reddeadredemption",
          links: [],
          cta: {
            text: v_.nav_rdr_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_rdr_cta_buy_now,
            dataTestId: "rsrBuyNowCta",
            location: {
              domain: v.z.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy"
          }
        },
        rc = {
          site: "rdr2",
          appearancePaths: {
            [v.z.www]: ["/reddeadredemption2/*", "/games/reddeadredemption2/*"],
            [v.z.socialClub]: ["/games/rdr2/*"]
          },
          brand: "reddeadredemption2",
          links: [{
            text: v_.nav_rdr2_overview.defaultMessage,
            intlMessage: v_.nav_rdr2_overview,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: v.z.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: v_.nav_rdr2_explore.defaultMessage,
            intlMessage: v_.nav_rdr2_explore,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: v_.nav_rdr2_van_der_linde_gang.defaultMessage,
              intlMessage: v_.nav_rdr2_van_der_linde_gang,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: v_.nav_rdr2_locations.defaultMessage,
              intlMessage: v_.nav_rdr2_locations,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: v_.nav_rdr2_wildlife.defaultMessage,
              intlMessage: v_.nav_rdr2_wildlife,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: v_.nav_rdr2_weaponry.defaultMessage,
              intlMessage: v_.nav_rdr2_weaponry,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: v_.nav_rdr2_progress.defaultMessage,
            intlMessage: v_.nav_rdr2_progress,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: v_.nav_rdr2_stats.defaultMessage,
              intlMessage: v_.nav_rdr2_stats,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: v_.nav_rdr2_chapters.defaultMessage,
              intlMessage: v_.nav_rdr2_chapters,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: v_.nav_rdr2_challenges.defaultMessage,
              intlMessage: v_.nav_rdr2_challenges,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: v_.nav_rdr2_character.defaultMessage,
              intlMessage: v_.nav_rdr2_character,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: v_.nav_rdr2_compendium.defaultMessage,
              intlMessage: v_.nav_rdr2_compendium,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: v_.nav_rdr2_accomplishments.defaultMessage,
              intlMessage: v_.nav_rdr2_accomplishments,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: v.z.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: v_.nav_rdr2_media.defaultMessage,
            intlMessage: v_.nav_rdr2_media,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: v_.nav_rdr2_gallery.defaultMessage,
              intlMessage: v_.nav_rdr2_gallery,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: v_.nav_rdr2_artwork.defaultMessage,
              intlMessage: v_.nav_rdr2_artwork,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: v_.nav_rdr2_videos.defaultMessage,
              intlMessage: v_.nav_rdr2_videos,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: v_.nav_rdr2_music.defaultMessage,
              intlMessage: v_.nav_rdr2_music,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: v.z.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: v_.nav_rdr2_online.defaultMessage,
            intlMessage: v_.nav_rdr2_online,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: v.z.www,
              path: "/reddeadonline"
            }
          }, {
            text: v_.nav_rdr2_catalogue.defaultMessage,
            intlMessage: v_.nav_rdr2_catalogue,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: v.z.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: v_.nav_rdr2_support.defaultMessage,
            intlMessage: v_.nav_rdr2_support,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: v_.nav_rdr2_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_rdr2_cta_buy_now,
            dataTestId: "rdr2StoreLink",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        },
        ic = {
          site: "undeadnightmare",
          appearancePaths: {
            [v.z.www]: ["/games/undeadnightmare/*"]
          },
          brand: "reddeadredemptionundeadnightmare",
          links: []
        },
        oc = {
          site: "reddeadrevolver",
          appearancePaths: {
            [v.z.www]: ["/games/reddeadrevolver/*"]
          },
          brand: "reddeadrevolver",
          links: []
        },
        lc = {
          site: "rsg",
          appearancePaths: {
            [v.z.www]: ["/*"],
            [v.z.socialClub]: ["/*"]
          },
          brand: null,
          links: [{
            text: v_.nav_rsg_games.defaultMessage,
            intlMessage: v_.nav_rsg_games,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: v_.nav_rsg_newswire.defaultMessage,
            intlMessage: v_.nav_rsg_newswire,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: v.z.www,
              path: "/newswire"
            }
          }, {
            text: v_.nav_rsg_videos.defaultMessage,
            intlMessage: v_.nav_rsg_videos,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: v.z.www,
              path: "/videos"
            }
          }, {
            text: v_.nav_rsg_downloads.defaultMessage,
            intlMessage: v_.nav_rsg_downloads,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: v.z.www,
              path: "/downloads"
            }
          }, {
            text: v_.nav_rsg_store.defaultMessage,
            intlMessage: v_.nav_rsg_store,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: v.z.store,
              path: null
            }
          }, {
            text: v_.nav_rsg_support.defaultMessage,
            intlMessage: v_.nav_rsg_support,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: v.z.support,
              path: null
            }
          }],
          cta: {
            text: v_.nav_rsg_cta_get_launcher.defaultMessage,
            intlMessage: v_.nav_rsg_cta_get_launcher,
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
        _c = {
          site: "stateofemergency",
          appearancePaths: {
            [v.z.www]: ["/games/stateofemergency/*"]
          },
          brand: "stateofemergency",
          links: []
        },
        cc = {
          site: "skateanddestroy",
          appearancePaths: {
            [v.z.www]: ["/games/skateanddestroy/*"]
          },
          brand: "thrashersad",
          links: []
        },
        dc = {
          site: "smugglersrun",
          appearancePaths: {
            [v.z.www]: ["/games/smugglersrun/*"]
          },
          brand: "smugglersrun",
          links: []
        },
        gc = {
          site: "smugglersrun2",
          appearancePaths: {
            [v.z.www]: ["/games/smugglersrun2/*"]
          },
          brand: "smugglersrun2hostileterritory",
          links: []
        },
        mc = {
          site: "smugglersrunwarzones",
          appearancePaths: {
            [v.z.www]: ["/games/smugglersrunwarzones/*"]
          },
          brand: "smugglersrunwarzones",
          links: []
        },
        uc = {
          site: "support",
          appearancePaths: {
            [v.z.support]: ["/*"]
          },
          brand: null,
          links: [{
            text: v_.nav_support_home.defaultMessage,
            intlMessage: v_.nav_support_home,
            type: "nav-internal",
            location: {
              domain: v.z.support,
              path: ""
            }
          }, {
            text: v_.nav_support_service_status.defaultMessage,
            intlMessage: v_.nav_support_service_status,
            type: "nav-internal",
            location: {
              domain: v.z.support,
              path: "/servicestatus"
            }
          }, {
            text: v_.nav_support_submit_ticket.defaultMessage,
            intlMessage: v_.nav_support_submit_ticket,
            type: "nav-internal",
            location: {
              domain: v.z.support,
              path: "/categories"
            }
          }],
          cta: {
            text: v_.nav_support_dashboard.defaultMessage,
            intlMessage: v_.nav_support_dashboard,
            variant: "highlight",
            location: {
              domain: v.z.support,
              path: "/dashboard"
            },
            ga: "cta_other"
          }
        },
        vc = {
          site: "tabletennis",
          appearancePaths: {
            [v.z.www]: ["/games/tabletennis/*"]
          },
          brand: "tabletennis",
          links: [],
          cta: {
            text: v_.nav_tabletennis_cta_buy_now.defaultMessage,
            intlMessage: v_.nav_tabletennis_cta_buy_now,
            variant: "highlight",
            dataTestId: "tableTennisCta",
            location: {
              domain: "https://www.xbox.com",
              path: "/en-US/games/store/rockstar-table-tennis/bvz4h08bmq3h"
            },
            ga: "cta_buy"
          }
        },
        pc = {
          site: "italianjob",
          appearancePaths: {
            [v.z.www]: ["/games/italianjob/*"]
          },
          brand: "theitalianjob",
          links: []
        },
        hc = {
          site: "thewarriors",
          appearancePaths: {
            [v.z.www]: ["/games/thewarriors/*"]
          },
          brand: "thewarriors",
          links: []
        },
        fc = {
          site: "wildmetal",
          appearancePaths: {
            [v.z.www]: ["/games/wildmetal/*"]
          },
          brand: "wildmetal",
          links: []
        },
        bc = (0, r.vU)({
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
        kc = (e, a) => {
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
        yc = t(2490),
        wc = t(8682),
        xc = () => {
          let e = !1;
          e = !0;
          const a = (0, o.Z)(),
            {
              data: t
            } = J(),
            {
              charactersNeeded: n,
              currentCharId: s,
              navOpen: r,
              setNavOpen: i
            } = R(),
            {
              track: _
            } = te(),
            [d, g] = (0, l.useState)(null),
            [m, u] = (0, l.useState)(!1),
            [v, p] = (0, l.useState)(null),
            [h, f] = (0, l.useState)(!1),
            [b, k] = (0, l.useState)([]),
            [, y] = y_();
          (0, l.useEffect)((() => {
            k(t.characters[n] ?? [])
          }), [t, n]);
          const w = (0, l.useCallback)((e => {
            e.stopPropagation(), i(!r), _({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: r ? "close" : "open"
            })
          }), [r]);
          return (0, l.useEffect)((() => {
            const e = t?.id ?? !1,
              a = e ? (b?.[s]?.mugshotUrl ?? t?.avatar) || yc : wc,
              n = kc(b?.[s]?.platform, "small") ?? null;
            p(n), g(a), u(e), f(!!b?.[s]?.mugshotUrl)
          }), [t, b, s, yc, wc]), (0, c.jsxs)("button", {
            className: "rockstargames-modules-core-headerf031d3c8e1a538f13046a93a66eec662",
            "data-img-set": h,
            "aria-label": a.formatMessage(bc.sc_menu_toggle),
            type: "button",
            onClick: e => w(e),
            "data-testid": "avaterMenuButton",
            children: [(0, c.jsx)("img", {
              className: "rockstargames-modules-core-headerd3b659042c82d09456f804b882c8dcd8",
              src: d || "",
              onError: () => {
                g(yc)
              },
              alt: t?.nickname || ""
            }), m && null !== v && (0, c.jsx)("img", {
              className: "rockstargames-modules-core-headerec40dc2247007d12658690f716323984",
              src: v.src,
              alt: v.alt
            }), m && (0, c.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-headerc414ae83ddce13aad3f194b1018bf58c",
              "data-platform": b?.[s]?.platform ?? null
            })]
          })
        },
        Mc = (0, b.BS)("@rockstargames/modules-core-header/profile-switcher"),
        Sc = Mc("languageSelectorOpenedReactive", !1),
        Cc = e => Sc(e),
        Tc = Mc("activeSubNavIdReactive", -1),
        Nc = e => Tc(e),
        jc = Mc("subNavExtraHeightReactive", -1),
        zc = e => jc(e),
        Ec = Mc("scNavOpenedReactive", !0),
        Ac = e => Ec(e),
        Ic = Mc("charListHiddenReactive", !0),
        Pc = e => Ic(e),
        Lc = () => {
          const e = (0, b.lY)(Sc),
            a = (0, b.lY)(Tc),
            t = (0, b.lY)(jc),
            n = (0, b.lY)(Ec),
            s = (0, b.lY)(Ic);
          return (0, l.useEffect)((() => {
            s || (e && Cc(!1), n && (Ac(!1), Nc(-1)))
          }), [s]), (0, l.useEffect)((() => {
            !e && s && (n || Ac(!0))
          }), [e, s]), (0, l.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Cc,
            activeSubNavId: a,
            setActiveSubNavId: Nc,
            subNavExtraHeight: t,
            setSubNavExtraHeight: zc,
            scNavOpened: n,
            setScNavOpened: Ac,
            charListHidden: s,
            setCharListHidden: Pc
          })), [e, a, t, n, s])
        },
        Oc = e => {
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
            return (0, c.jsx)("a", {
              title: n,
              href: t,
              onClick: e,
              ...i,
              children: a
            })
          }
          if (o) return (0, c.jsx)(K.NavLink, {
            title: n,
            to: t,
            onClick: e => r(e),
            ...i,
            children: a
          });
          const l = Object.keys(i).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
              ...e,
              [a]: i[a]
            })), {}),
            _ = i?.target ?? (s ? "_blank" : "_self");
          return "function" == typeof l?.className && delete l.className, (0, c.jsx)("a", {
            href: t,
            ...l,
            title: n,
            onClick: e => r(e),
            target: _,
            children: a
          })
        };
      var Dc = t(6588),
        Rc = t.n(Dc);
      t(2059);
      const Vc = {
          button: "rockstargames-modules-core-headerf5dc166ac5cc8fab506116c0da01dcc2",
          secondary: "rockstargames-modules-core-headerb139179467cbca2821a4f3ee8d2972a9"
        },
        Bc = e => {
          let {
            className: a = "",
            children: t,
            context: n = "",
            to: s,
            onClick: r,
            ...i
          } = e;
          const o = [Vc.button, Vc[n], a].join(" ");
          return s ? (0, c.jsx)(Oc, {
            ...i,
            to: s,
            className: o,
            onClick: r ? () => r() : () => {},
            children: t
          }) : (0, c.jsx)("button", {
            ...i,
            type: "button",
            className: o,
            onClick: r ? () => r() : () => {},
            children: t
          })
        },
        Gc = function() {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
          return [...a].filter(Boolean).join(" ")
        },
        Fc = (0, l.createContext)(),
        {
          Provider: qc
        } = Fc,
        $c = e => {
          let {
            children: a,
            payload: t
          } = e;
          return (0, c.jsx)(qc, {
            value: t,
            children: a
          })
        },
        Uc = (0, l.createContext)(),
        {
          Provider: Hc
        } = Uc,
        Wc = e => {
          let {
            children: a,
            components: t
          } = e;
          return (0, c.jsx)(Hc, {
            value: t,
            children: a
          })
        };
      var Xc = t(4947),
        Yc = t.n(Xc);
      t(5821), t(4675), t(3520);
      const Jc = "content";
      var Zc = t(8061);
      const Kc = e => {
          let {
            components: a,
            payload: t,
            componentProps: n = {}
          } = e;
          const s = (0, l.useMemo)((() => (S_().cloneDeepWith(t, ((e, n) => {
            "_template" !== n || Number.isInteger(Number(e)) || S_().get(a, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", a))
          })), (e => {
            let {
              components: a,
              payload: t,
              componentProps: n
            } = e;
            const s = e => {
              let r = "";
              if (r = Array.isArray(e?.[Jc]) ? e[Jc].map((e => s(e))) : e?.[Jc] ?? "", !e?._template) return r;
              let i = S_().get(a, e?._template) ?? null;
              "0" === e?._template && (console.warn(`The _template "${e?._template}" wasn't found in the available components. The _template "${e?._template}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(a),
                payload: e
              }), i = S_().get(a, "gen9.Hero") ?? null);
              const o = [...e?.translations ?? []].reverse(),
                _ = `componentProps_${(0,Zc.Z)()}`;
              return (0, l.createElement)(i, {
                ...t?.meta,
                ...e,
                ...n,
                t: e => o.find((a => a?._key === e))?.value ?? e,
                key: _
              }, r)
            };
            return t?.[Jc]?.length ? s(t) : null
          })({
            components: a,
            payload: t,
            componentProps: n
          }))), [JSON.stringify(t), JSON.stringify(a)]);
          return s
        },
        Qc = e => {
          let {
            tina: a,
            components: t = {},
            componentProps: n = {}
          } = e;
          const s = (0, l.useContext)(Fc),
            [r, i] = (0, l.useState)(null),
            [o, _] = (0, l.useState)(null);
          (0, l.useEffect)((() => {
            a?.payload && i(a.payload), a?.variables && _(a.variables)
          }), [a]);
          const [d] = (0, l.useState)({
            ...t,
            ...(0, l.useContext)(Uc) ?? {}
          }), g = (e => {
            let {
              payload: a
            } = e;
            const [t, n] = (0, l.useState)(a);
            return (0, l.useEffect)((() => {
              const e = S_().debounce((() => {
                const e = JSON.parse(JSON.stringify(a));
                S_().cloneDeepWith(e, ((e, a, t) => {
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
            const [n, s] = (0, l.useState)(a), [r, i] = (0, l.useState)(t);
            return (0, l.useEffect)((() => {
              const e = ((e, a) => {
                  const t = {};
                  return S_().cloneDeepWith(e, ((e, n, s) => {
                    n === a && e && (t[s.key] = e)
                  })), t
                })(a, "_memoq"),
                n = JSON.parse(JSON.stringify(S_().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(t?.keys ?? {})))));
              i(n)
            }), [JSON.stringify(a), t]), (0, l.useEffect)((() => {
              const e = JSON.parse(JSON.stringify(a)),
                t = JSON.parse(JSON.stringify(r));
              S_().cloneDeepWith(e, ((e, a, n) => {
                (e => {
                  let {
                    item: a,
                    variableKey: n
                  } = e;
                  if (!a || !S_().has(a, "key") || a.translated) return;
                  const s = t[a.key] ?? null;
                  if (!s) return;
                  const r = Yc()(s);
                  Object.keys(r).map((e => {
                    S_().set(a, e, r[e])
                  })), S_().set(a, "translated", !0), Object.freeze(a)
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
          return (0, l.useMemo)((() => {
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
            return (0, c.jsx)($c, {
              payload: i,
              children: (0, c.jsx)(Wc, {
                components: d,
                children: (0, c.jsx)(Kc, {
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
      var ed = t(2965);
      const ad = (0, t(3930).Hu)(),
        td = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [n, s] = (0, l.useState)(!1), r = (e => {
            const [a] = (0, K.useSearchParams)(), [t, n] = (0, l.useState)(null), s = J(), {
              loggedIn: r
            } = s, {
              currentCharId: i
            } = R(), o = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, l.useMemo)((() => {
                const n = e?.data?.characters?.[t];
                return "1" === (n?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(s, i);
            return (0, l.useEffect)((() => {
              n(null);
              const s = "true" === a.get("conditionPreview");
              if (!(!e?.length > 0)) return ad.applyFilters("preview_conditions", e), e.forEach((e => {
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
          return (0, l.useEffect)((() => {
            s(r)
          }), [r]), (0, l.useMemo)((() => n ? t : null), [n])
        };
      (0, k.zv)((e => {
        let {
          children: a
        } = e;
        return l.Children.map(l.Children.toArray(a), (e => (0, c.jsx)(td, {
          ...e?.props
        })))
      }));
      var nd = t(6809),
        sd = t(3483);
      const rd = e => {
          let {
            className: a
          } = e;
          return (0, c.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, c.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, c.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        id = {
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
        od = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: n
          } = te(), {
            refetch: s
          } = (0, b.aM)(sd.UserGetVote, {
            skip: !0
          }), [r] = (0, b.Db)(sd.UserCastVote), [i, o] = (0, l.useState)(null), _ = (0, l.useCallback)((e => {
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
          return (0, l.useEffect)((() => {
            a && t && (async () => {
              const e = await s({
                foreignId: a,
                foreignType: t
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, c.jsxs)("div", {
            className: id.calloutVoteForm,
            children: [(0, c.jsx)("button", {
              "aria-label": "upvote",
              className: [id.upvote, id.voteButton, i ? id.active : ""].join(" "),
              name: "upvote",
              onClick: () => _(!0),
              type: "button"
            }), (0, c.jsx)("button", {
              "aria-label": "downvote",
              className: [id.downvote, id.voteButton, !1 === i ? id.active : ""].join(" "),
              name: "downvote",
              onClick: () => _(!1),
              type: "button"
            })]
          })
        },
        ld = e => {
          let {
            action_text: a,
            link: t,
            trackingData: n
          } = e;
          const {
            track: s
          } = te();
          return (0, c.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, c.jsxs)("button", {
              className: id.calloutLink,
              type: "button",
              onClick: n ? () => s({
                ...n
              }) : () => {},
              children: [a, (0, c.jsx)(rd, {
                className: id.calloutLinkIcon
              })]
            })
          })
        },
        _d = e => {
          let {
            helperText: a,
            linkText: t,
            link: n,
            trackingData: s
          } = e;
          const {
            track: r
          } = te();
          return (0, c.jsxs)("div", {
            className: id.actionFooter,
            children: [a, t && " ", t && (0, c.jsx)("a", {
              href: n ?? "",
              onClick: () => r({
                ...s
              }),
              children: t
            })]
          })
        };
      (0, k.zv)((e => {
        let {
          header: a,
          subheader: t,
          type: n,
          action_text: s,
          link: r,
          foreign_id: i = document.location.pathname,
          foreign_type: o = "url",
          className: _ = "",
          actionFooterHelperText: d,
          actionFooterLinkText: g,
          actionFooterLink: m,
          trackingData: u = {},
          actionFooterLinkTrackingData: v = {},
          t: p
        } = e;
        const {
          loggedIn: h
        } = J(), {
          track: f
        } = te(), b = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
          ref: k,
          inView: y
        } = (0, nd.YD)({
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
        switch (n) {
          case "vote":
            if (!h) {
              M = (0, c.jsx)(Bc, {
                to: b,
                className: id.calloutButton,
                onClick: u ? () => f({
                  ...u
                }) : () => {},
                children: "Log In"
              });
              break
            }
            M = (0, c.jsx)(od, {
              foreign_id: i,
              foreign_type: o
            });
            break;
          case "button":
            s && r && (M = (0, c.jsx)(Bc, {
              to: r,
              className: id.calloutButton,
              onClick: u ? () => f({
                ...u
              }) : () => {},
              children: s
            }));
            break;
          case "link":
            s && r && (M = (0, c.jsx)(ld, {
              action_text: s,
              link: r,
              trackingData: u
            }));
            break;
          default:
            M = null
        }
        return (0, c.jsx)("div", {
          className: `${id.calloutContainer} ${_||""}`,
          ref: k,
          children: (0, c.jsxs)("div", {
            className: id.calloutSection,
            children: [(0, c.jsxs)("div", {
              className: [id.calloutHeaders, M ? id.calloutHeaderMargins : ""].join(" "),
              children: [a && (0, c.jsx)("h1", {
                className: id.calloutHeader,
                children: p(a)
              }), t && (0, c.jsx)("h2", {
                className: id.calloutSubheader,
                children: p(t)
              })]
            }), (0, c.jsxs)("div", {
              className: id.actionBlock,
              children: [M, d && (0, c.jsx)(_d, {
                helperText: d,
                linkText: g,
                link: m,
                trackingData: v
              })]
            })]
          })
        })
      })), t(2187);
      var cd = t(9885),
        dd = t.n(cd);
      const {
        sanitize: gd
      } = dd();
      t(8507);
      const md = {
          img: "rockstargames-modules-core-headerbf430847a4fc75f43c281b702cb67775",
          startAnimation: "rockstargames-modules-core-headerf937aa11d861c7446258df7cfd669940"
        },
        ud = e => {
          let {
            imgSrc: a,
            titleSlug: t
          } = e;
          const [n] = (0, k.TZ)(a);
          return (0, c.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [md.img, n ? md.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        vd = e => {
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
          return (0, c.jsx)(Oc, {
            "aria-label": a,
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: o,
            target: "_self",
            className: "rockstargames-modules-core-headerab00cee9c6ebfc9dde968ca69f3f8b52",
            children: (0, c.jsx)(ud, {
              imgSrc: n,
              titleSlug: r
            })
          })
        };
      var pd = t(3118);
      class hd extends l.Component {
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
          return this?.state?.error?.message ? (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headeracd7086fbe8edad6f39a19c8f493ad75",
            children: [(0, c.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, c.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const fd = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, c.jsx)(hd, {
              header: a,
              children: (0, c.jsx)(e, {
                ...t
              })
            })
          }
        },
        bd = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: n,
            onPrevClicked: s
          } = e;
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headere2ed16f199999059ee169ac09091ba51",
            children: [(0, c.jsx)("div", {
              className: "rockstargames-modules-core-headerc8f16b560066271b2342690cad248566",
              ref: a,
              onClick: s,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, c.jsx)("div", {
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
        kd = (fd((e => {
          let {
            description: a,
            slideChildren: t,
            size: n,
            title: s,
            customSlidesPerView: r = null,
            customSpaceBetween: i = null,
            slideClass: o,
            style: _,
            className: d,
            cardSizeBreakpoints: g = {},
            customAspectRatio: m,
            titleBadge: u
          } = e;
          const {
            track: v
          } = te(), p = (0, l.useRef)(null), h = (0, l.useRef)(null), f = (0, l.useRef)(null), [b, k] = (0, l.useState)(null), [y, w] = (0, l.useState)(!1), [x, M] = (0, l.useState)(null), [S, C] = (0, l.useState)({}), [T, N] = (0, l.useState)(), {
            ref: j,
            inView: z
          } = (0, nd.YD)({
            threshold: .6
          }), [E, A] = (0, l.useState)(!1), [I, P] = (0, l.useState)(null), [L, O] = (0, l.useState)(!1);
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
            })), A(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && L ? null : (0, c.jsx)(ed.o5, {
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
              event_label: `deck - ${s}`.toLowerCase(),
              element_placement: `deck - ${s}`.toLowerCase()
            }), w(!0))
          }), [z, t]);
          let R = "custom" === n ? {
            "--custom-aspect-ratio": m,
            ..._
          } : {
            ..._
          };
          return (0, c.jsxs)("div", {
            className: Gc("rockstargames-modules-core-headerb8efa928adc0e5c84563e8f9cf7f3a30", d),
            "data-size": n,
            "data-sm": g?.sm ? g?.sm : n,
            "data-md": g?.md ? g?.md : n,
            "data-lg": g?.lg ? g?.lg : n,
            "data-xl": g?.xl ? g?.xl : n,
            "data-xxl": g?.xxl ? g?.xxl : n,
            "data-has-covercard": E,
            ref: p,
            style: R,
            children: [(0, c.jsx)("div", {
              className: "rockstargames-modules-core-headerc9b615cce89d13b7bddc99e21c3c1f4c",
              ref: j
            }), E && L && (0, c.jsx)("div", {
              className: "rockstargames-modules-core-headere7026dae446389aca79ae8b0357e03ee",
              children: I
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-headerf80fd6d5582561660104adb89e12faaf",
              children: (0, c.jsxs)("div", {
                className: "rockstargames-modules-core-headerabff66535c2f133ee2fc7178d24baa37",
                children: [(0, c.jsxs)("div", {
                  className: "rockstargames-modules-core-headerdbff9f12e6751f7fc29390e76412845f",
                  children: [!E && s && (0, c.jsxs)("div", {
                    className: "rockstargames-modules-core-headerd8c745773c51e4c8fcee8c5ffa02f50a",
                    children: [(0, c.jsx)("h2", {
                      children: s
                    }), u && (0, c.jsx)("span", {
                      className: "rockstargames-modules-core-headerb73f00c53394c6282e0d22da20410913",
                      children: u
                    })]
                  }), (0, c.jsx)(bd, {
                    prevRef: h,
                    nextRef: f,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-headerbd954b7dc66b2e48e3aa7d4022bb288f",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), x ? (0, c.jsx)(ed.tq, {
              slidesPerView: x,
              onInit: e => {
                C(e)
              },
              grabCursor: !0,
              navigation: T,
              modules: [pd.W_],
              breakpoints: D,
              slideClass: Gc("swiper-slide", o),
              onSlideNextTransitionEnd: () => {
                v({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: s?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                v({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: s?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                v({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: s?.toLowerCase() ?? ""
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
        yd = "Select a Language";
      let wd;
      wd = e => {
        let {
          theme: a,
          languageSelectorOpened: t,
          setLanguageSelectorOpened: n,
          defaultMessage: s
        } = e;
        const r = (0, K.useLocation)(),
          _ = (0, o.Z)(),
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
            if (n && n(!1), d.subdomaincom === e || "none" === e) return void(n && n(!1));
            const a = m.find((a => a.subdomaincom === e));
            a && (g(a.iso), window.location.href = b(e))
          };
        return (0, l.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === u && p(!1)
        }), [t]), (0, l.useEffect)((() => {
          y.current && x(y.current.scrollHeight)
        }), [y]), (0, c.jsxs)("div", {
          className: [kd.languageSelector, u ? kd.open : ""].join(" "),
          "data-theme": a,
          children: [(0, c.jsxs)(c.Fragment, {
            children: [M && "sc-menu" === a && (0, c.jsx)("div", {
              className: kd.selectBoxWrapper,
              children: (0, c.jsxs)("select", {
                className: kd.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  S(e.currentTarget.value)
                },
                children: [(0, c.jsx)("option", {
                  className: kd.selectBoxOption,
                  value: "none",
                  children: s ? (0, c.jsx)(i.Z, {
                    ...s
                  }) : yd
                }), m.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, c.jsx)("option", {
                    className: kd.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!M || "sc-menu" !== a) && (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), n && n(!u), p(!u)
                },
                type: "button",
                "aria-label": s ? _.formatMessage(s) : yd,
                children: [(0, c.jsx)("i", {}), (0, c.jsx)("span", {
                  children: s ? (0, c.jsx)(i.Z, {
                    ...s
                  }) : yd
                })]
              }), (0, c.jsx)("div", {
                className: kd.linkWrapper,
                ref: y,
                style: {
                  "--ls-linkWrapper-opened-height": `${w}px`
                },
                children: (0, c.jsx)("div", {
                  className: kd.links,
                  children: m.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, c.jsx)(Oc, {
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
      const xd = wd,
        Md = {
          tag: "rockstargames-modules-core-headerf5978929e516a7f156d3d81ca93d966a"
        },
        Sd = e => {
          let {
            className: a,
            href: t,
            title: n,
            style: s
          } = e;
          const r = (0, c.jsxs)("div", {
            style: s,
            className: [Md.tag, a].join(" "),
            children: [(0, c.jsx)("i", {}), n]
          });
          return void 0 !== t ? (0, c.jsx)(Oc, {
            to: t,
            children: r
          }) : r
        },
        Cd = {
          newswireBlock: "rockstargames-modules-core-headerba2782b4444a519a060ddc4727f3fd79",
          info: "rockstargames-modules-core-headerb760fbda945b1aababe2df978bd27419",
          title: "rockstargames-modules-core-headerf23284941e0f8ffc13c9e4d77d2b7251",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-headerd5aec57fe2a8f93469a703100f272c64",
          preview: "rockstargames-modules-core-headerc78eec9cb8b10c5b29849794f5a58ea6",
          previewMobile: "rockstargames-modules-core-headeree92338af02ea3f31f362cb1804825ae",
          top: "rockstargames-modules-core-headera364218e924ffd9f280ad0b05495683b",
          startAnimation: "rockstargames-modules-core-headerc68720aaf32901f2a1946f596fd1f0a3"
        },
        Td = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: n = !1,
            style: s = {}
          } = e;
          const [r] = (0, K.useSearchParams)(), i = t.preview_images_parsed.newswire_block, o = {
            default: 0 !== a || n ? i.square || i.d16x9 || i._fallback : i.d16x9 || i.square || i._fallback,
            mobile: i.square || i._fallback
          }, [l, _] = (0, k.TZ)(o.default), [d, g] = (0, k.TZ)(o.mobile), m = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          };
          return (0, c.jsx)(Oc, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [Cd.newswireBlock, n ? Cd.newswireBlockNoSpecialOrder : "", null !== l ? Cd.startAnimation : ""].join(" "),
            children: (0, c.jsxs)(c.Fragment, {
              children: [0 !== a || r.get("tag_id") ? (0, c.jsx)("div", {
                className: Cd.preview,
                style: m.default
              }) : (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)("div", {
                  className: Cd.previewMobile,
                  style: m.mobile
                }), (0, c.jsx)("div", {
                  className: Cd.preview,
                  style: m.default
                })]
              }), (0, c.jsxs)("div", {
                className: Cd.info,
                children: [(0, c.jsxs)("div", {
                  className: Cd.top,
                  children: [t.primary_tags.length ? (0, c.jsx)(Sd, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, c.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, c.jsx)("h5", {
                  className: Cd.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Nd = t(8300),
        jd = t.n(Nd);
      (0, k.zv)((e => {
        let {
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: n = "/newswire",
          t: s
        } = e;
        const [r] = (0, K.useSearchParams)(), {
          tagId: i = null
        } = (0, K.useParams)(), [o, _] = (0, l.useState)(i ?? t ?? r.get("tag_id")), [d, g] = (0, l.useState)(1), [m, u] = (0, l.useState)([]), [v, p] = (0, l.useState)(null), {
          data: h
        } = (0, b.aM)(jd(), {
          variables: {
            tagId: Number(o),
            page: d,
            metaUrl: n
          },
          autoSetLoading: !0
        });
        return (0, l.useEffect)((() => {
          g(1), u([]), _(i ?? t ?? r.get("tag_id"))
        }), [r.get("tag_id")]), (0, l.useEffect)((() => {
          h && h.posts && h.posts.paging && p(h.posts.paging), h && h.posts && h.posts.results && u(m.concat(h.posts.results))
        }), [h]), m.length ? (0, c.jsxs)(c.Fragment, {
          children: [(0, c.jsx)(Ad, {
            posts: m,
            relativeTo: a,
            noSpecialOrder: null !== o
          }), null !== v && v.nextPage ? (0, c.jsx)(Bc, {
            onClick: () => g(d + 1),
            disabled: !1,
            context: "secondary",
            children: s("More Stories")
          }) : ""]
        }) : null
      }));
      const zd = {
          related: "rockstargames-modules-core-headerdf69a7aae85a9ec8b5ebd0a64496fb0e",
          posts: "rockstargames-modules-core-headera18a73cb511122aa4c3de9ffcb8363b2",
          just1post: "rockstargames-modules-core-headerf2c39530c1bf7492516d298384b1a3d2"
        },
        Ed = ((0, k.zv)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, c.jsxs)("section", {
            className: zd.related,
            children: [(0, c.jsx)("h2", {
              children: t("Related Stories")
            }), (0, c.jsx)("div", {
              className: [zd.posts, 1 === a.length ? zd.just1post : ""].join(" "),
              children: a.map((e => (0, c.jsx)(Td, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })), {
          newswireBlocks: "rockstargames-modules-core-headerdf082531ed434e4a44ea2c3474a07465",
          noSpecialOrder: "rockstargames-modules-core-headerf7a8b59f042399a20d9c74b1e2b76f4a"
        }),
        Ad = (0, k.zt)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: n,
            relativeTo: s
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
            })), n(e)
          }), [t.length]), (0, c.jsx)("div", {
            className: [Ed.newswireBlocks, a ? Ed.noSpecialOrder : "", Ed.contextHome].join(" "),
            children: t.map(((e, t) => (0, c.jsx)(Td, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        {
          sanitize: Id
        } = dd();
      t(6147);
      var Pd = t(7968);
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
      const Ld = (0, r.vU)({
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
        Od = ((0, r.vU)({
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
      (0, k.s8)(t(8948)), fd((e => {
        let {
          descriptors: a = null,
          footer: n = null,
          href: s,
          img: r = null,
          titleSlug: i = null,
          style: _ = {},
          className: d
        } = e;
        const [g, m] = (0, l.useState)(!1), {
          inView: u
        } = (0, nd.YD)({
          threshold: .6
        }), [v, p] = (0, l.useState)({
          img_rating: r,
          rating_descriptors: a,
          rating_footer: n,
          url_rating: s
        }), {
          track: h
        } = te(), f = (0, o.Z)(), {
          data: y
        } = (0, b.aM)(Pd.GameData, {
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
        return (0, c.jsxs)("div", {
          className: [Od.rating, w ? Od.withDescriptors : Od.withOutDescriptors, d || ""].join(" "),
          style: (0, k.IO)(_),
          children: [(0, c.jsx)(Oc, {
            to: v.url_rating,
            target: "_blank",
            children: (0, c.jsx)("img", {
              alt: f.formatMessage(Ld.components_ratings_link_alt, {
                rating: (x = v.img_rating, x.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8214)(`./${v.img_rating}`)
            })
          }), w && (0, c.jsxs)("div", {
            className: Od.text,
            children: [(0, c.jsx)("p", {
              className: Od.descriptors,
              dangerouslySetInnerHTML: {
                __html: v?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), v.rating_footer && (0, c.jsx)("hr", {}), v.rating_footer && (0, c.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: v.rating_footer.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var x
      }));
      const Dd = (0, k.zv)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, l.useState)(""), n = (0, K.useNavigate)(), s = (0, b.qs)();
          return (0, c.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-headerec0a1e5d53889c279673bb8884a7fefc",
            onSubmit: e => {
              e.preventDefault(), s({
                navOpen: !1
              }), document.activeElement?.blur(), n(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, c.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, c.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        Rd = {
          skeleton: "rockstargames-modules-core-headerc073586d2c66f4d535b12cc27e125167",
          pulse: "rockstargames-modules-core-headerdd37397ba93ec7045dbf175d34f4d0f3",
          gen9Hero: "rockstargames-modules-core-headerf0603e7614d1053bfa5d7691ad6926b6"
        },
        Vd = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, c.jsx)("div", {
            className: [Rd.skeleton, Rd[a]].join(" ")
          }) : null
        };
      var Bd = t(7790);
      fd((e => {
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
            } = (0, b.aM)(Bd.TinaModulesInfo, {
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
        if (!r) return (0, c.jsx)(Vd, {
          skeleton: s
        });
        const i = r?.[0]?.tina;
        return i ? (0, c.jsx)(c.Fragment, {
          children: r.map(((e, t) => {
            let {
              tina: n
            } = e;
            return (0, c.jsx)(Qc, {
              components: a,
              tina: n,
              componentProps: {
                tinaModulesInfo: r
              }
            }, t)
          }))
        }) : null
      })), t(3005);
      const Gd = {
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
        Fd = ((0, k.rE)((e => {
          let {
            locale: a,
            t,
            videos: n
          } = e;
          const {
            setBodyIsScrollable: s
          } = (0, k.Vg)(), [r, i] = (0, l.useState)(0), [o, _] = (0, l.useState)(0), d = (0, l.useRef)(null), g = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            if (!d.current || g.current) return;
            const e = new(Rc())(d.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                i(r - 1 < 0 ? 0 : r - 1), _(0)
              },
              o = () => {
                const e = r + 1 >= n.length - 1 ? n.length - 1 : r + 1;
                i(e), _(0)
              },
              l = e => {
                _(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !g.current?.classList.contains(Gd.dragging) || a() && s(!1)
              },
              c = () => {
                a() && s(!0), _(0)
              },
              m = e => {
                "press" === e.type && d.current?.classList.add(`${Gd.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${Gd.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && s(!0), d.current && d.current.classList.remove(`${Gd.disableClick}`)
              },
              v = () => {
                a() && s(!0)
              };
            return g.current.addEventListener("transitionend", v), e.on("swiperight", t), e.on("swipeleft", o), e.on("pan", l), e.on("panend", c), e.on("press tap", m), e.on("pressup", u), () => {
              e.off("swiperight", t), e.off("swipeleft", o), e.off("pan", l), e.off("panend", c), e.off("press tap", m), e.off("pressup", u), g.current && g.current.removeEventListener("transitionend", v), _(0)
            }
          }), [d.current, r]), (0, c.jsxs)("section", {
            className: Gd.carousel,
            children: [(0, c.jsx)("div", {
              className: Gd.track,
              ref: d,
              children: (0, c.jsx)("div", {
                className: `${Gd.items} ${0!==o?Gd.dragging:""}`,
                ref: g,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${o}px))`
                },
                children: n.map(((e, a) => (0, c.jsx)(Oc, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === a ? Gd.active : "",
                  role: "link",
                  title: e.title,
                  children: (0, c.jsx)(Ud, {
                    video: e,
                    active: r === a
                  })
                }, e.id)))
              })
            }), (0, c.jsxs)("footer", {
              children: [(0, c.jsx)("div", {
                className: Gd.text,
                children: n.map(((e, n) => (0, c.jsx)(Oc, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  children: (0, c.jsxs)("div", {
                    className: [Gd.info, n === r ? Gd.active : ""].join(" "),
                    children: [(0, c.jsxs)("div", {
                      className: Gd.title,
                      children: [(0, c.jsx)("div", {
                        className: Gd.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, c.jsx)("h2", {
                        className: Gd.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, c.jsx)(Bc, {
                      className: Gd.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, c.jsx)("div", {
                className: Gd.dots,
                children: n.map(((e, a) => (0, c.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => i(a),
                  className: r === a ? Gd.active : "",
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
        qd = ((0, k.zv)((e => {
          let {
            vids: a,
            games: t,
            title: n,
            gameTitleNecessary: s
          } = e;
          const r = void 0 !== t ? "games" : "videos",
            i = "videos" === r ? a : t.results,
            o = (0, l.useRef)(null),
            [_, d] = (0, l.useState)(0),
            [g, m] = (0, l.useState)(0),
            u = e => {
              const a = Math.ceil(i.length / _);
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
          }), [_]), (0, l.useEffect)((() => {
            if (o.current) {
              const e = new(Rc())(o.current),
                a = () => {
                  u(g - 1), p(0)
                },
                t = () => {
                  u(g + 1), p(0)
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
          }), [o.current, g]), h = "games" === r ? (0, c.jsx)(c.Fragment, {
            children: t.results.map((e => (0, c.jsx)(vd, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, c.jsx)(c.Fragment, {
            children: a.map((e => (0, c.jsx)(Hd, {
              video: e,
              gameTitleNecessary: s
            }, e.id)))
          }), (0, c.jsxs)("section", {
            className: Fd.videoList,
            children: [(0, c.jsxs)("h3", {
              className: Fd.sectionHeader,
              children: [n, (0, c.jsxs)("div", {
                className: Fd.arrowNav,
                children: [(0, c.jsx)("div", {
                  className: [Fd.arrow, Fd.previous, 0 === g ? Fd.disabled : ""].join(" "),
                  onClick: () => u(g - 1)
                }), (0, c.jsx)("div", {
                  className: [Fd.arrow, Fd.next, g === Math.ceil(i.length / _) - 1 ? Fd.disabled : ""].join(" "),
                  onClick: () => u(g + 1)
                })]
              })]
            }), (0, c.jsx)("div", {
              className: Fd.items,
              children: (0, c.jsx)("div", {
                className: Fd.trackWrapper,
                children: (0, c.jsx)("div", {
                  className: [Fd.track, 0 !== v ? Fd.dragging : ""].join(" "),
                  ref: o,
                  style: {
                    transform: `translateX(calc(-${100*g}% + ${v}px - (var(--standard-grid-gap) * ${g}))`,
                    gridAutoColumns: `calc(100 / ${_} * 1% - calc(var(--standard-grid-gap) * (${_-1}/${_}))`
                  },
                  children: h
                })
              })
            })]
          })
        })), "rockstargames-modules-core-headerdde12a3eeb657b92d78550534aad83a4"),
        $d = ((0, k.zv)((e => {
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
          return (0, c.jsxs)("div", {
            className: qd,
            children: [(0, c.jsx)("h3", {
              children: `${s} (${r})`
            }), (0, c.jsx)(Oc, {
              to: "/",
              children: t("Home")
            }), "clr" !== n && (0, c.jsx)(Dd, {})]
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
        Ud = e => {
          let {
            video: a
          } = e;
          const [t] = (0, k.TZ)(a.screencap);
          return (0, c.jsx)("div", {
            className: [$d.screencap, t ? $d.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${a.screencap}) center/cover`
            }
          })
        },
        Hd = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: n
          } = e;
          const s = `/videos/${n.id}`,
            r = {
              className: $d.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": s
            },
            i = (0, c.jsxs)("div", {
              className: $d.card,
              children: [(0, c.jsx)(Ud, {
                video: n
              }), (0, c.jsxs)("div", {
                className: $d.info,
                children: [a ? (0, c.jsx)("div", {
                  className: $d.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: n.game.title
                  }
                }) : "", (0, c.jsx)("h5", {
                  className: $d.title,
                  dangerouslySetInnerHTML: {
                    __html: n.title
                  }
                })]
              })]
            });
          return t ? (0, c.jsx)("a", {
            href: s,
            target: "_blank",
            ...r,
            children: i
          }) : (0, c.jsx)(Oc, {
            to: s,
            ...r,
            children: i
          })
        };
      t(400);
      const Wd = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Xd = (e, a, t, n) => ({
          text: e.formatMessage(a.sc_link_help),
          target: "_self",
          ga: {
            ...Wd,
            text: a.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(a.sc_link_support),
            href: "https://support.rockstargames.com/",
            target: "_self",
            ga: {
              ...Wd,
              text: a.sc_link_support.defaultMessage,
              link_url: "https://support.rockstargames.com/"
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(a.sc_link_legal),
            href: `https://${t.sites.www}.rockstargames.com/legal`,
            target: "_self",
            ga: {
              ...Wd,
              text: a.sc_link_legal.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/legal`
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(a.sc_link_privacy_policy),
            href: `https://${t.sites.www}.rockstargames.com/privacy`,
            target: "_self",
            ga: {
              ...Wd,
              text: a.sc_link_privacy_policy.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/privacy`
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(a.sc_link_cookies_policy),
            href: `https://${t.sites.www}.rockstargames.com/cookies`,
            target: "_self",
            ga: {
              ...Wd,
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
              ...Wd,
              text: a.sc_link_cookies_settings.defaultMessage,
              link_url: ""
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(a.sc_link_do_not_sell_my_information),
            href: `https://${t.sites.www}.rockstargames.com/ccpa`,
            target: "_self",
            ga: {
              ...Wd,
              text: a.sc_link_do_not_sell_my_information.defaultMessage,
              link_url: `https://${t.sites.www}.rockstargames.com/ccpa`
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Yd = e => {
          let {
            text: a,
            target: t,
            href: n,
            ga: s,
            dataTestId: r,
            isSubLink: i,
            hasNotifications: o = !1,
            onClickCallback: l = (() => {}),
            tabIndex: _
          } = e;
          const {
            track: d
          } = te();
          return (0, c.jsxs)("a", {
            className: i ? "rockstargames-modules-core-headere5f5a8b5af593a4ff89a050bee83855c" : "rockstargames-modules-core-headerc4b83eee740b9dae3772319e80be3951",
            "data-testid": r || "menuLink",
            title: a,
            href: n,
            target: t,
            rel: "noreferrer",
            tabIndex: _,
            onClick: e => {
              d(s), l(e)
            },
            children: [a, o && (0, c.jsx)("span", {
              className: "rockstargames-modules-core-headeraebdc1434e6a1921dee96f175cd36466"
            })]
          })
        },
        Jd = e => {
          let {
            id: a,
            text: t,
            target: n,
            href: s,
            ga: r,
            hasNotifications: i = !1,
            dataTestId: o,
            children: _ = [],
            activeSubNavId: d,
            setActiveSubNavId: g,
            setSubNavExtraHeight: m,
            onClickCallback: u = (() => {})
          } = e;
          const {
            track: v
          } = te(), {
            navOpen: p
          } = R(), h = (0, l.useRef)(null), [f, b] = (0, l.useState)(0), [k, y] = (0, l.useState)(0);
          (0, l.useEffect)((() => {
            d !== a && !1 === w && x(!0), d === a && x(!1)
          }), [d]), (0, l.useEffect)((() => {
            const e = () => {
              if (!h.current) return;
              b(h?.current?.scrollHeight);
              const e = window.getComputedStyle(h.current);
              if (e) {
                let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
                Number.isNaN(a) && (a = 0), y(a)
              }
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [h]);
          const [w, x] = (0, l.useState)(!0);
          return _.length > 0 ? (0, c.jsxs)("button", {
            className: "rockstargames-modules-core-headereffc0bdd4a4f25400c9c782c4b38ca2d",
            type: "button",
            "data-testid": o || "menuButton",
            title: t,
            tabIndex: p ? 0 : -1,
            "data-children-hidden": w,
            onClick: e => {
              e.stopPropagation(), v(r), d === a ? (g(-1), m(0)) : (g(a), m(f + k))
            },
            children: [(0, c.jsx)("span", {
              className: "rockstargames-modules-core-headerb19e4f2b353b2a7b3288352e38631abf",
              children: t
            }), (0, c.jsx)("span", {
              className: "rockstargames-modules-core-headerbaed71b46816995fc60770c8659fddc2"
            }), (0, c.jsx)("nav", {
              className: "rockstargames-modules-core-headerae2fdcd90abfd2f74b6dc6785e0e04eb",
              ref: h,
              "aria-hidden": w,
              style: {
                height: w ? null : `${f}px`
              },
              children: _.map((e => (0, c.jsx)(Yd, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: w || !p ? -1 : 0
              })))
            })]
          }, t) : (0, c.jsx)(Yd, {
            text: t,
            target: n,
            href: s,
            ga: r,
            hasNotifications: i,
            dataTestId: o,
            isSubLink: !1,
            onClickCallback: u,
            tabIndex: p ? 0 : -1
          })
        },
        Zd = e => {
          let {
            sc: a
          } = e;
          const t = (0, o.Z)(),
            {
              languageSelectorOpened: n,
              setLanguageSelectorOpened: s,
              activeSubNavId: r,
              setActiveSubNavId: i,
              subNavExtraHeight: _,
              setSubNavExtraHeight: d
            } = Lc(),
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
              }, Xd(a, e, s, r)])(bc, t, y, w, x, window?.OneTrust);
              return e
            }), [bc, t, y, w, x]);
          return (0, l.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            f(e)
          }), [b]), (0, l.useEffect)((() => {
            g(!1)
          }), []), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("nav", {
              className: "rockstargames-modules-core-headerd8b1c62c15cdaf546241e4b13b77a8e3",
              children: (0, c.jsx)("div", {
                className: "rockstargames-modules-core-headera6cf01f6b0073d44ace2657d11e30b92",
                "data-logged-in": "false",
                style: {
                  "--scNavWrap-max-height": `${_}px`
                },
                children: M.map((e => (0, l.createElement)(Jd, {
                  ...e,
                  activeSubNavId: r,
                  setActiveSubNavId: i,
                  setSubNavExtraHeight: d,
                  key: e.text
                })))
              })
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-headerc38508c13f75b99affdabef433c631ce",
              style: {
                visibility: m ? null : "hidden"
              },
              children: (0, c.jsx)(xd, {
                theme: "sc-menu",
                languageSelectorOpened: n,
                setLanguageSelectorOpened: e => {
                  i(-1), s(e)
                },
                defaultMessage: bc.language_selector_default
              })
            })]
          })
        },
        Kd = e => t(e < 100 ? 4655 : e > 99 && e < 500 ? 98 : e > 499 && e < 750 ? 3662 : 9533),
        Qd = "rockstargames-modules-core-headerc335fbb3ea8b49739cc397a7d53b5f8a",
        eg = e => {
          let {
            characterData: a,
            setMobileCardWidth: n,
            tabIndex: s
          } = e;
          const {
            currentCharId: r,
            setCurrentCharId: i
          } = R(), {
            track: _
          } = te(), d = (0, l.createRef)(), {
            platform: g,
            platformUsername: m,
            mugshotUrl: u,
            stats: v
          } = a, [p, h] = (0, l.useState)(u), [f] = (0, l.useState)(a.index), b = kc(g, "large"), k = r === a.index, y = (0, o.Z)(), w = () => {
            h(t(2490))
          };
          return (0, l.useEffect)((() => {
            d.current && n && n(d?.current?.offsetWidth)
          }), [d]), (0, c.jsxs)("button", {
            className: "rockstargames-modules-core-headera3f6abb9575af1327eb619be9d6b31e6",
            type: "button",
            "aria-hidden": k,
            onClick: e => {
              e.stopPropagation(), i(f);
              let a = "";
              "pc" === g ? a = "PC" : "ps4" === g ? a = "PS4" : "ps5" === g ? a = "PS5" : "xboxone" === g ? a = "Xbox One" : "xboxsx" === g && (a = "Xbox Series X|S"), _({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: f
              })
            },
            ref: d,
            tabIndex: s,
            children: [(0, c.jsxs)("div", {
              className: "rockstargames-modules-core-headercd6320c38823c444a47fd6c09d6f298c",
              "data-size": "small",
              children: [(0, c.jsx)("img", {
                src: p,
                alt: m,
                onError: w
              }), (0, c.jsx)("img", {
                src: p,
                alt: y.formatMessage(bc.profile_selector_mugshot, m),
                onError: w
              })]
            }), (0, c.jsxs)("div", {
              className: "rockstargames-modules-core-headerdd2a84ecdd78494709abe345815a932d",
              children: [(0, c.jsxs)("div", {
                className: "rockstargames-modules-core-headerc849eadf4ed0a2e71da76452dc9370f8",
                children: [(0, c.jsx)("img", {
                  src: b.src,
                  alt: b.alt
                }), (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-headerc0b83e9a208cf0867e846afc53997361",
                  "data-size": "small",
                  children: m
                })]
              }), (0, c.jsx)("div", {
                className: "rockstargames-modules-core-headerefbaf5497013bd0f2beeb5f6427735ae",
                children: (0, c.jsxs)("div", {
                  className: "rockstargames-modules-core-headerba6ead477fdd2f3147b4360899c2d68e",
                  children: [(0, c.jsx)("img", {
                    className: Qd,
                    src: Kd(v.overview.rank.value),
                    alt: "RP Category"
                  }), (0, c.jsx)("img", {
                    className: Qd,
                    src: Kd(v.overview.rank.value),
                    alt: y.formatMessage(bc.profile_selector_rp_icon)
                  }), (0, c.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        ag = {
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
        tg = e => {
          let {
            character: a,
            platformTag: n
          } = e;
          const {
            data: s
          } = J(), {
            track: r
          } = te(), i = (0, o.Z)(), [_, d] = (0, l.useState)([]), [g, m] = (0, l.useState)(null), [u, v] = (0, l.useState)(null), [p, h] = (0, l.useState)(!1), [f, b] = (0, l.useState)(-1), [k, y] = (0, l.useState)([]), [w, x] = (0, l.useState)(0), M = t(2490), [S, C] = (0, l.useState)("0"), [T, N] = (0, l.useState)("0"), j = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          });
          let z = () => {
            A((0, c.jsx)("img", {
              src: M,
              alt: s.nickname
            }))
          };
          z = () => {
            A((0, c.jsx)("img", {
              src: M,
              alt: i.formatMessage(bc.profile_selector_mugshot, {
                userName: s.nickname
              })
            }))
          };
          let [E, A] = (0, l.useState)((0, c.jsx)("img", {
            className: ag.scAvatarImg,
            src: a.mugshotUrl,
            alt: s.nickname,
            onError: z
          }));
          [E, A] = (0, l.useState)((0, c.jsx)("img", {
            className: ag.scAvatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(bc.profile_selector_mugshot, {
              userName: s.nickname
            }),
            onError: z
          })), (0, l.useEffect)((() => {
            d(s.crews ?? [])
          }), [s]), (0, l.useEffect)((() => {
            A((0, c.jsx)("img", {
              src: a.mugshotUrl,
              alt: s.nickname,
              onError: z
            })), C(j(a.stats.overview.bank.value)), N(j(a.stats.overview.cash.value)), x(a.stats.overview.rank.value)
          }), [a, s]), (0, l.useEffect)((() => {
            _ && _.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), v(e.crewColour), b(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [_]), (0, l.useEffect)((() => {
            const e = [];
            if (!p && f > -1)
              for (let a = 5; a > f; a -= 1) e.push((0, c.jsx)("div", {
                className: ag.scCrewRankBarItem,
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
              event_label: n.alt,
              link_url: void 0
            })
          };
          return (0, c.jsxs)("div", {
            className: ag.scProfileDetails,
            onClick: I,
            onKeyUp: I,
            role: "button",
            tabIndex: -1,
            children: [(0, c.jsxs)("div", {
              className: ag.scAvatar,
              children: [E, (0, c.jsx)("div", {
                className: ag.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, c.jsx)("img", {
                  src: n.src,
                  alt: n.alt
                })
              })]
            }), (0, c.jsxs)("div", {
              className: ag.scProfileStats,
              children: [(0, c.jsx)("div", {
                className: ag.scNames,
                children: (0, c.jsxs)("div", {
                  className: ag.scTagsNames,
                  children: [(0, c.jsx)("span", {
                    className: ag.scUserName,
                    children: a.platformUsername
                  }), g && (0, c.jsxs)("span", {
                    className: ag.scCrewName,
                    "data-arrow-tag": p,
                    children: [g, !p && (0, c.jsx)("div", {
                      className: ag.scCrewRankBar,
                      children: k
                    })]
                  })]
                })
              }), (0, c.jsxs)("div", {
                className: ag.scProgress,
                children: [(0, c.jsxs)("div", {
                  className: ag.scRpLevel,
                  children: [(0, c.jsx)("img", {
                    className: ag.scRpIcon,
                    src: Kd(w),
                    alt: i.formatMessage(bc.profile_selector_rp_icon)
                  }), (0, c.jsx)("img", {
                    className: ag.scRpIcon,
                    src: Kd(w),
                    alt: "RP Level Icon"
                  }), (0, c.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, c.jsxs)("div", {
                  className: ag.scMoney,
                  children: [(0, c.jsxs)("span", {
                    className: ag.scCash,
                    children: ["$", T]
                  }), (0, c.jsxs)("span", {
                    className: ag.scBank,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        ng = (e, a) => {
          const [t, n] = (0, l.useState)(0);
          return (0, l.useEffect)((() => {
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
        sg = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: n = 17,
            slideChangeCallback: s = null,
            slideClickCallback: r = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: _ = !1
          } = e;
          const d = (0, l.createRef)(),
            g = ng(d, !1),
            [m, u] = (0, l.useState)(!1),
            [v, p] = (0, l.useState)(0),
            [h, f] = (0, l.useState)(0),
            [b, k] = (0, l.useState)([n]),
            [y, w] = (0, l.useState)(b[0]),
            [x, M] = (0, l.useState)(252),
            [S, C] = (0, l.useState)(0),
            [T, N] = (0, l.useState)([]),
            [j, z] = (0, l.useState)([]),
            [E, A] = (0, l.useState)(!1),
            I = e => {
              if (!0 === m || !0 === _) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              f(a)
            },
            P = e => {
              if (!0 === m || 0 === h || !0 === _) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                n = t > h ? 1 : -1,
                r = Math.abs(h - t);
              r > a ? (n > 0 ? (() => {
                if (!0 === m) return;
                u(!0);
                const e = v - 1 < 0 ? 0 : v - 1;
                p(e), w(b[e]), s && s(e)
              })() : (() => {
                if (!0 === m) return;
                u(!0);
                let e = v + 1 >= b.length ? b.length - 1 : v + 1;
                e < 0 && (e = 0), p(e), w(b[e]), s && s(e)
              })(), f(0)) : w(b[v] + r * n)
            },
            L = () => {
              !0 !== m && !0 !== _ && (u(!0), !0 !== m && (w(b[v]), f(0)))
            };
          return (0, l.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, l.createRef)())
            })), N(e)
          }), [i]), (0, l.useEffect)((() => {
            if (T.length < 1) return;
            M(T[0]?.current?.clientWidth || 0);
            const e = T[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            C(t + a)
          }), [T]), (0, l.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              u(!1)
            }), t)
          }), [m, t]), (0, l.useEffect)((() => {
            k(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * g - .5 * x - 2 * n + S : (0 === e && (a = n - e * x), e === t - 1 && t > 1 && (a = t * x * -1 + (g - (n - S))), e > 0 && e < t - 1 && (a = e * x * -1 + (.5 * g - .5 * x + .5 * S)), a)
            })(a)))), 1 === i.length ? A(!0) : A(!1)
          }), [d.current, i, g]), (0, l.useEffect)((() => {
            const e = (a = v, i.map(((e, t) => {
              const n = {
                active: !1
              };
              return t === a && (n.active = !0), n
            })));
            var a;
            z(e)
          }), [i, v]), (0, l.useEffect)((() => {
            !0 !== o && !0 !== _ || w(b[0])
          }), [_, o, b]), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("div", {
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
              children: (0, c.jsx)("div", {
                className: "rockstargames-modules-core-headere88bab6974a3bc58871f01a4176d19cc",
                "data-interaction-blocked": m,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${y}px)`
                },
                children: i.map(((e, a) => (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-headerf6d2431960fd2437473fe390a1e22d0a",
                  ref: T[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), j.length > 1 && !1 === o && (0, c.jsx)("div", {
              className: "rockstargames-modules-core-headerf4140c4d02511e4a8bc533409e13cd87",
              children: j.map((e => (0, c.jsx)("div", {
                className: "rockstargames-modules-core-headerbaf9524c4580ae16f02f39fafbc4bf69",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        rg = {
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
        ig = (0, k.zv)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: n,
            refCharacterListDesktop: s,
            menuPadding: r,
            longCharList: _,
            setLongCharList: d,
            isMobileMode: g,
            setIsMobileMode: m
          } = e;
          const u = (0, o.Z)(),
            {
              languageSelectorOpened: p,
              setLanguageSelectorOpened: h,
              activeSubNavId: f,
              setActiveSubNavId: y,
              subNavExtraHeight: w,
              setSubNavExtraHeight: x,
              scNavOpened: M,
              setScNavOpened: S
            } = Lc(),
            [C, T] = (0, l.useState)(""),
            N = (0, K.useLocation)(),
            {
              lsSettings: j
            } = (0, k.TG)(),
            {
              track: z
            } = te(),
            E = (0, b.cC)(),
            {
              data: A,
              loggedIn: I
            } = J(),
            {
              charactersNeeded: P,
              currentCharId: L,
              hasNotifications: O,
              navOpen: D,
              setCurrentCharId: V,
              setHasNotifications: B,
              setSelectedCharacterTuple: G,
              setUserData: F
            } = R(),
            [q, $] = (0, l.useState)(null),
            [U, H] = (0, l.useState)(null),
            [W, X] = (0, l.useState)(!1),
            [Y, Z] = (0, l.useState)(!1),
            [Q, ee] = (0, l.useState)(0),
            [ae, ne] = (0, l.useState)(0),
            [se, re] = (0, l.useState)(0),
            ie = (0, l.createRef)(),
            oe = ng(ie, !1),
            le = (0, l.createRef)(),
            [_e, ce] = (0, l.useState)(0),
            [de, ge] = (0, l.useState)([]),
            [me, ue] = (0, l.useState)(244);
          let ve = !1;
          ve = !0;
          const {
            clientId: pe
          } = (0, k.E$)(), he = (0, l.useMemo)((() => (0, v.Z)()), []), fe = (0, l.useMemo)((() => {
            const e = ((e, a, t, n, s, r, i, o) => [{
              text: a.formatMessage(e.sc_link_activity_feed),
              href: `https://${t.host}.rockstargames.com/`,
              target: "_self",
              ga: {
                ...Wd,
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
                  ...Wd,
                  text: e.sc_link_view_my_profile.defaultMessage,
                  link_url: n.profile_link
                },
                dataTestId: "viewMyProfileLink"
              }, {
                text: a.formatMessage(e.sc_link_messages),
                href: `https://${t.host}.rockstargames.com/message`,
                target: "_self",
                ga: {
                  ...Wd,
                  text: e.sc_link_messages.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/message`
                },
                dataTestId: "messagesLink"
              }, {
                text: a.formatMessage(e.sc_link_game_activation),
                href: `https://${t.host}.rockstargames.com/activate`,
                target: "_self",
                ga: {
                  ...Wd,
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
                ...Wd,
                text: e.sc_link_notifications.defaultMessage,
                link_url: `https://${t.host}.rockstargames.com/notifications`
              },
              dataTestId: "notificationsLink"
            }, {
              text: a.formatMessage(e.sc_link_crews),
              href: `https://${t.host}.rockstargames.com/member/${n.nickname}/crews`,
              target: "_self",
              ga: {
                ...Wd,
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
                  ...Wd,
                  text: e.sc_link_my_friends.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/member/${n.nickname}/friends`
                },
                dataTestId: "myFriendsLink"
              }, {
                text: a.formatMessage(e.sc_link_import_friends),
                href: `https://${t.host}.rockstargames.com/friends/import`,
                target: "_self",
                ga: {
                  ...Wd,
                  text: e.sc_link_import_friends.defaultMessage,
                  link_url: `https://${t.host}.rockstargames.com/friends/import`
                },
                dataTestId: "importFriendsLink"
              }, {
                text: a.formatMessage(e.sc_link_find_friends),
                href: `https://${t.host}.rockstargames.com/members`,
                target: "_self",
                ga: {
                  ...Wd,
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
                ...Wd,
                text: e.sc_link_settings.defaultMessage,
                link_url: `https://${t.host}.rockstargames.com/settings`
              },
              dataTestId: "settingsLink"
            }, Xd(a, e, i, o), {
              text: a.formatMessage(e.sc_link_log_out),
              href: `${t.logout}?returnUrl=${r}`,
              target: "_self",
              ga: {
                ...Wd,
                text: e.sc_link_log_out.defaultMessage,
                link_url: `${t.logout}?returnUrl=${r}`
              },
              dataTestId: "logoutButton"
            }])(bc, u, a, A, O, C, he, window?.OneTrust);
            return e
          }), [bc, u, a, A, O, C, he]), be = () => {
            Z(r + me * Q < oe)
          }, ke = () => {
            if (le.current) {
              const {
                current: e
              } = le, a = e?.scrollHeight;
              ce(a)
            }
          };
          return (0, l.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            he.currentSite?.site === v.z.socialClub && (e = encodeURIComponent("/")), T(e)
          }), [N]), (0, l.useEffect)((() => {
            ge(A.characters[P] ?? [])
          }), [A, P]), (0, l.useEffect)((() => {
            A && F(A)
          }), [A]), (0, l.useEffect)((() => {
            const e = A?.characters.gtao;
            if (null !== I && !e.length) return void G(!1);
            if (null == L || !e.length) return;
            const a = e?.[L] ?? e?.[0] ?? null;
            G(!!a?.platform && [a.platform, a.characterSlot])
          }), [L, A, I]), (0, l.useEffect)((() => {
            (async () => {
              if (!A?.id) return;
              const e = await (0, k.ZF)("friends/getInvites", {
                pingBearer: E
              });
              if (e) {
                const {
                  rockstarAccountList: a
                } = e, {
                  count: t
                } = await (0, k.ZF)("notification/count", {
                  pingBearer: E
                });
                B(t > 0 || a.total > 0)
              }
            })()
          }), [A]), (0, l.useEffect)((() => {
            be()
          }), [me]), (0, l.useEffect)((() => {
            const e = () => {
              ne(window.innerWidth), re(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? m(!0) : m(!1), n(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, l.useEffect)((() => {
            let e = de.length - 1;
            e < 0 && (e = 0), ee(e);
            const a = de.length > 0 ? de[L] ?? de[0] : null;
            if (!a) return;
            const t = null !== a ? kc(a.platform, "large") : null;
            H(t), $(a), de.length > 1 ? X(!0) : X(!1), d(de.length - 1 > 3)
          }), [L, de]), (0, l.useEffect)((() => {
            be()
          }), [Q, g, ae, de]), (0, l.useEffect)((() => {
            ke(), setTimeout(ke, 1e3)
          }), [ae, se]), (0, l.useEffect)((() => {
            const e = j?.currentCharId ?? 0;
            V(Math.max(0, Math.min(e, de.length - 1)))
          }), [de, j]), (0, c.jsxs)(c.Fragment, {
            children: [null !== q && "gtao" === P && (0, c.jsxs)("div", {
              className: rg.scProfile,
              tabIndex: -1,
              "aria-label": u.formatMessage(bc.profile_selector_profile_card),
              children: [(0, c.jsx)(tg, {
                s: rg,
                character: q,
                platformTag: U
              }), !0 === W && (0, c.jsxs)("div", {
                className: rg.scCharacterSelector,
                children: [(0, c.jsx)("button", {
                  className: rg.scCharacterSelectBtn,
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
                  children: (0, c.jsx)("span", {
                    children: (0, c.jsx)(i.Z, {
                      ...bc.profile_selector_switch_character
                    })
                  })
                }), !1 === g && (0, c.jsx)("div", {
                  className: rg.scCharacterList,
                  "data-long-list": _,
                  "aria-hidden": t,
                  ref: s,
                  children: de.map((e => (0, c.jsx)(eg, {
                    tabIndex: t ? -1 : 0,
                    characterData: e
                  }, e.mugshotUrl)))
                }), !0 === g && (0, c.jsx)("div", {
                  className: rg.scCharacterList,
                  "data-single-item": 2 === de.length,
                  "data-swiper-disabled": Y,
                  "aria-hidden": t,
                  ref: ie,
                  children: (0, c.jsx)(sg, {
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
                    disablePager: Y,
                    disableSwiper: Y,
                    children: de.filter(((e, a) => a !== L)).map((e => (0, l.createElement)(eg, {
                      characterData: e,
                      setMobileCardWidth: ue,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, c.jsxs)("nav", {
              className: rg.scNav,
              "aria-hidden": !D,
              children: [(0, c.jsx)("button", {
                className: rg.scNavHeader,
                type: "button",
                "data-opened": M,
                "data-nav-opened": D,
                tabIndex: M ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), M || S(!0)
                },
                children: (0, c.jsx)("span", {
                  children: A.nickname
                })
              }), (0, c.jsx)("div", {
                className: rg.scNavWrap,
                "data-opened": M,
                "data-logged-in": "true",
                ref: le,
                "data-feat-g": !0,
                style: {
                  "--scNavWrap-max-height": `${_e+w}px`
                },
                children: fe.map(((e, a) => (0, l.createElement)(Jd, {
                  ...e,
                  id: a,
                  activeSubNavId: f,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: x,
                  key: e.text
                })))
              })]
            }), (0, c.jsx)("div", {
              className: rg.scLanguageSelector,
              style: {
                visibility: D ? null : "hidden"
              },
              children: (0, c.jsx)(xd, {
                theme: "sc-menu",
                languageSelectorOpened: p,
                setLanguageSelectorOpened: h,
                defaultMessage: bc.language_selector_default
              })
            })]
          })
        })),
        og = {
          scNavWrapper: "rockstargames-modules-core-headere838e44838fa7da64c336b852ea24768",
          rpLevel: "rockstargames-modules-core-headerb7db666a33c3691e5a8abdfc26fada5f",
          rpIcon: "rockstargames-modules-core-headerab2979bf0b93aeaa2e599785a1769750",
          scMenu: "rockstargames-modules-core-headerf026f7ffa165071bbd97c66c863ebd5b",
          navOpen: "rockstargames-modules-core-headerdac3bc9aaa59d80e4378b25b8ee51471",
          dragHandle: "rockstargames-modules-core-headereaae66d2f36e13f46856d826fc41d5dc",
          dragHandleBtn: "rockstargames-modules-core-headerdb7e8039eb4bbe26b77f3b269ba8a692",
          scOverlay: "rockstargames-modules-core-headerb1e1c10079e10528c1bcb20fea525546"
        },
        lg = () => {
          let e = !1;
          e = !0;
          const a = (0, o.Z)(),
            {
              languageSelectorOpened: n,
              setLanguageSelectorOpened: s,
              setActiveSubNavId: r,
              scNavOpened: i,
              setScNavOpened: _,
              charListHidden: d,
              setCharListHidden: g
            } = Lc(),
            [m, u] = (0, l.useState)(!1),
            {
              setBodyIsScrollable: v
            } = (0, k.Vg)(),
            {
              navHidden: p = !1
            } = (0, b.eJ)(),
            {
              loggedIn: h
            } = J(),
            {
              currentCharId: f,
              navOpen: y,
              setNavOpen: w,
              userData: x
            } = R(),
            {
              track: M
            } = te(),
            [S, C] = (0, l.useState)(!1),
            T = (0, b.lY)(F),
            N = (0, l.useRef)(),
            [j, z] = (0, l.useState)(0),
            E = (0, l.createRef)(),
            [A, I] = (0, l.useState)(!1),
            [P, L] = (0, l.useState)(0),
            [O, D] = (0, l.useState)(!1),
            {
              mutateLSSettings: V
            } = (0, k.TG)(),
            B = (0, l.useCallback)((e => {
              g(e), N.current && !0 === e && (N.current.scrollTop = 0)
            }), [N]);
          return (0, l.useEffect)((() => {
            null !== f && V({
              key: "currentCharId",
              value: f
            }), !1 === h ? V({
              key: "currentCharId",
              value: null
            }) : h && x && M({
              event: "account_synced"
            })
          }), [f, h]), (0, l.useEffect)((() => {
            N.current && (!1 === d && !1 === S && (N.current.style.height = `${N.current.scrollHeight}px`), !0 === d && (N.current.style.height = null))
          }), [d, N, S]), (0, l.useEffect)((() => {
            const e = () => {
                w(!1), B(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, l.useEffect)((() => {
            w(!1), B(!0)
          }), [p]), (0, l.useEffect)((() => {
            if (E.current) {
              const {
                current: e
              } = E, a = window.getComputedStyle(e);
              z(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [E]), (0, l.useEffect)((() => {
            v(!A || !y)
          }), [y, A]), (0, l.useEffect)((() => {
            D(window.navigator.userAgent.includes("Mac"))
          }), []), (0, l.useEffect)((() => {
            if (!E.current) return;
            const e = () => {
              u(E?.current?.scrollHeight >= window.innerHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [E]), (0, l.useEffect)((() => {
            y || (r(-1), s(!1))
          }), [y]), (0, l.useEffect)((() => {
            n && (d || B(!0), i && (_(!1), r(-1)))
          }), [n]), (0, l.useEffect)((() => {
            i && (n && s(!1), d || B(!0))
          }), [i]), null === h ? null : (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("div", {
              className: [og.scMenu, y ? og.navOpen : ""].join(" "),
              "data-logged-in": h,
              "data-mac-browser": O,
              "data-scroll-mode": m,
              ref: E,
              "aria-hidden": !y,
              children: [(0, c.jsx)("button", {
                className: og.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  L(a)
                },
                onTouchMove: e => {
                  if (0 === P) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(P - a) > 1 && (L(0), w(!1))
                },
                children: (0, c.jsx)("img", {
                  className: og.dragHandle,
                  src: t(9963),
                  alt: a.formatMessage(bc.sc_menu_drag_handle)
                })
              }), h ? (0, c.jsx)(ig, {
                sc: T,
                charListHidden: d,
                hideCharacterList: B,
                refCharacterListDesktop: N,
                menuPadding: j,
                longCharList: S,
                setLongCharList: C,
                isMobileMode: A,
                setIsMobileMode: I
              }) : (0, c.jsx)(Zd, {
                sc: T,
                navOpen: y
              })]
            }), (0, c.jsx)("div", {
              className: [og.scOverlay, y ? og.navOpen : ""].join(" "),
              "data-logged-in": h
            })]
          })
        },
        _g = (e, a, t, n) => ({
          event: e || "nav_click",
          link_url: a,
          text: t,
          element_placement: `Global Nav > ${n}`
        }),
        cg = "https",
        dg = "rockstargames.com",
        gg = () => {
          const e = b_(),
            a = (() => {
              const e = (0, l.useContext)(h_);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            t = k_();
          return n => {
            const s = ((e, a) => {
              const {
                sites: t,
                currentSite: n
              } = a;
              return t[e.domain] ? new URL(`${cg}://${t[e.domain]}.${dg}`) : 0 === e.domain.indexOf("http") ? new URL(e.domain) : new URL(`${cg}://${t[n?.subDomain||t.www]}.${dg}`)
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
                if (!a || a.iso === u.iso) return e;
                const t = a.subdomaincom;
                return "/" === e[0] ? t + e : `${t}/${e}`
              })(i, a) : i;
            return new URL(o, s)
          }
        },
        mg = "nav-external",
        ug = "nav-dropdown",
        vg = "games-menu",
        pg = e => {
          let {
            children: a,
            location: t,
            className: n,
            isLegacy: s,
            label: r,
            type: i,
            target: _,
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
            } = b_(),
            {
              track: b
            } = te(),
            k = gg(),
            y = (0, l.useMemo)((() => {
              const e = {};
              return "_blank" === _ && (e["aria-label"] = h.formatMessage(v_.nav_opens_in_new_window, {
                text: r
              }), e.rel = "noopener"), e
            }), [r, _]);
          if (!t) return null;
          const w = k(t),
            x = i === mg,
            M = x || f && f.site !== t.domain ? w.href : w.pathname + w.search + w.hash,
            S = Boolean(x || s || document.documentElement.classList.contains("legacyPage"));
          return (0, c.jsx)(K.Link, {
            className: n,
            target: _,
            to: M,
            onClick: () => (b(_g(d, w.toString(), g, m)), void v?.()),
            reloadDocument: S,
            "data-testid": u,
            ...p,
            ...y,
            children: a
          })
        },
        hg = {
          callToAction: "rockstargames-modules-core-headerc82c6509b58380dd464812d2c26863ba",
          highlight: "rockstargames-modules-core-headerf530a8cc3c7d4c9e1f119a6a76ebb853"
        },
        fg = e => {
          let {
            children: a,
            dataTestId: t,
            location: n,
            variant: s,
            gaEvent: r,
            gaText: i,
            target: o,
            onNavigate: l
          } = e;
          return (0, c.jsx)("div", {
            className: hg.callToActionContainer,
            children: (0, c.jsx)(pg, {
              className: [hg.callToAction, s ? hg[s] : ""].join(" "),
              dataTestId: t,
              location: n,
              gaEvent: r,
              gaText: i,
              gaBreadCrumb: i,
              onNavigate: l,
              target: o,
              children: a
            })
          })
        },
        bg = {
          targets: [{
            intlMessage: v_.search_target_games,
            tab: "games",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=games"
            }
          }, {
            intlMessage: v_.search_target_posts,
            tab: "posts",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=posts"
            }
          }, {
            intlMessage: v_.search_target_videos,
            tab: "videos",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=videos"
            }
          }, {
            intlMessage: v_.search_target_community,
            tab: "socialClub",
            type: "nav-dropdown",
            targets: [{
              intlMessage: v_.search_target_users,
              type: "",
              location: {
                domain: "socialClub",
                path: "/members/{query}"
              }
            }, {
              intlMessage: v_.search_target_crews,
              type: "",
              location: {
                domain: "socialClub",
                path: "/crews/{query}"
              }
            }, {
              intlMessage: v_.search_target_jobs,
              type: "",
              location: {
                domain: "socialClub",
                path: "/jobs/{query}"
              }
            }, {
              intlMessage: v_.search_target_user_photos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/photos/{query}"
              }
            }, {
              intlMessage: v_.search_target_user_videos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/videos/{query}"
              }
            }]
          }]
        };
      var kg = t(2430),
        yg = t(6567);
      const wg = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        xg = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        Mg = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        Sg = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        Cg = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        Tg = {
          pillButton: "rockstargames-modules-core-headerff69ac71bd625f2fffaa47c831767ea5",
          selected: "rockstargames-modules-core-headera0399789b5f8119314e2ee494274ef8a"
        },
        Ng = e => {
          let {
            children: a,
            selected: t,
            ...n
          } = e;
          return (0, c.jsx)("button", {
            type: "button",
            className: [Tg.pillButton, t ? Tg.selected : ""].join(" "),
            ...n,
            children: a
          })
        };
      var jg = t(9113);
      const zg = {
          subMenu: "rockstargames-modules-core-headere93b49b419838ee4e2be9f55b68de66d",
          fadeIn: "rockstargames-modules-core-headerae33d9922a0df7157a8ae8af16f46854"
        },
        Eg = {
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
        Ag = e => {
          let {
            openerRef: a,
            isOpen: t,
            isMobile: n,
            children: s
          } = e;
          const [r, i] = (0, l.useState)(null), {
            styles: o,
            attributes: _,
            forceUpdate: d
          } = (0, jg.D)(a, r, {
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
          return (0, l.useEffect)((() => {
            d && d()
          }), [a, t, n]), (0, c.jsx)(yg.E.div, {
            initial: "exit",
            animate: t ? "enter" : "exit",
            transition: {
              ease: "easeInOut",
              duration: .3
            },
            variants: Eg,
            className: [zg.subMenu].join(" "),
            style: {
              ...o.popper
            },
            ref: i,
            ..._.popper,
            children: s
          })
        },
        Ig = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, c.jsx)("button", {
            type: "button",
            className: "rockstargames-modules-core-headera769c575f71a9ed60454a354755b5b03",
            ...t,
            children: a
          })
        },
        Pg = {
          backgroundElevation: "rockstargames-modules-core-headerd803e72fb936c18155db46ae42dd74f0",
          backgroundOverlay: "rockstargames-modules-core-headeraf311f256f0989aaa668a6d60f37ab83",
          backgroundVisible: "rockstargames-modules-core-headere8da5672530e8e7e170953df4907a3cf"
        },
        Lg = e => {
          let {
            children: a,
            isOpen: t,
            onClose: n,
            visible: s
          } = e;
          return t ? (0, c.jsxs)("div", {
            className: [Pg.backgroundElevation].join(" "),
            onClick: n,
            children: [(0, c.jsx)("div", {
              className: [Pg.backgroundOverlay, s ? Pg.backgroundVisible : ""].join(" ")
            }), a]
          }) : null
        },
        Og = e => {
          let {
            target: a,
            selected: t,
            selectedTarget: n,
            onClick: s,
            isMobile: r,
            ...i
          } = e;
          const _ = (0, o.Z)(),
            [d, g] = (0, l.useState)(!1),
            [m, u] = (0, l.useState)(null);
          return a.type === ug ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("div", {
              ref: u,
              children: (0, c.jsxs)(Ng, {
                "aria-label": _.formatMessage(v_.search_target_aria_label, {
                  target: n && a?.targets?.indexOf(n) >= 0 ? _.formatMessage(n.intlMessage) : _.formatMessage(a.intlMessage)
                }),
                selected: t,
                onClick: () => g(!d),
                ...i,
                children: [n && a?.targets?.indexOf(n) >= 0 ? _.formatMessage(n.intlMessage) : _.formatMessage(a.intlMessage), (0, c.jsx)("img", {
                  src: Mg,
                  alt: ""
                })]
              }, a.intlMessage.defaultMessage)
            }), (0, c.jsx)(Lg, {
              isOpen: d,
              onClose: () => g(!1),
              children: (0, c.jsx)(Ag, {
                isOpen: d,
                openerRef: m,
                isMobile: r,
                children: a.targets?.map((e => (0, c.jsx)(Ig, {
                  "aria-label": _.formatMessage(v_.search_target_aria_label, {
                    target: _.formatMessage(e.intlMessage)
                  }),
                  onClick: () => s(e),
                  children: _.formatMessage(e.intlMessage)
                }, e.intlMessage.defaultMessage)))
              })
            })]
          }) : (0, c.jsx)(Ng, {
            "aria-label": _.formatMessage(v_.search_target_aria_label, {
              target: _.formatMessage(a.intlMessage)
            }),
            selected: t,
            onClick: () => s(a),
            ...i,
            children: _.formatMessage(a.intlMessage)
          }, a.tab)
        },
        Dg = {
          secondaryNavigationSlide: "rockstargames-modules-core-headerb17059127d33dc4c94ee131eb131fb19",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerc7e991fff98d1e6d8c35f5c74f6b5b95",
          open: "rockstargames-modules-core-headered23f58994f4b57468fdb9e4c40bb38c"
        },
        Rg = e => {
          let {
            children: a,
            isOpen: t,
            onMouseClick: n,
            onEscapeKey: s,
            onMouseAway: r,
            style: i
          } = e;
          const o = t ? [Dg.open] : [],
            _ = e => {
              "Escape" === e.key && s?.()
            };
          return (0, l.useEffect)((() => (t ? window.addEventListener("keyup", _) : window.removeEventListener("keyup", _), () => window.removeEventListener("keyup", _))), [_, t]), t ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("div", {
              className: [Dg.secondaryNavigationOverlay, ...o].join(" "),
              onClick: n,
              onMouseEnter: r,
              style: {
                ...i
              }
            }), a && (0, c.jsx)("div", {
              className: [Dg.secondaryNavigationSlide, ...o].join(" "),
              children: a
            })]
          }) : null
        },
        Vg = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: n,
            setIsSearchOpen: s,
            setSearchQuery: r,
            isSearchOpen: i,
            searchQuery: _,
            selectedTarget: d,
            selectedTargetIndex: g,
            isSearchPage: m,
            searchError: u,
            maxSearchLength: v
          } = e;
          const p = (0, o.Z)(),
            h = (0, l.useRef)(null),
            f = () => {
              s(), m || r(""), h?.current?.focus()
            },
            b = () => {
              m || s()
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
          }), [i]), (0, c.jsxs)("div", {
            children: [(0, c.jsx)("button", {
              className: "rockstargames-modules-core-headerfdf861825c948d1a7955d1cea7f9b60a",
              type: "button",
              onClick: f,
              children: (0, c.jsx)("img", {
                src: wg,
                alt: p.formatMessage(i ? v_.search_close_button : v_.search_open_button)
              })
            }), (0, c.jsx)(kg.M, {
              children: i && (0, c.jsxs)(yg.E.div, {
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
                children: [(0, c.jsx)(Rg, {
                  isOpen: !m,
                  onEscapeKey: b,
                  onMouseClick: b
                }), (0, c.jsxs)(yg.E.div, {
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
                  children: [(0, c.jsxs)("div", {
                    className: "rockstargames-modules-core-headerff5c561c57bce4e5e6e3c1b771286680",
                    children: [(0, c.jsx)("div", {
                      className: "rockstargames-modules-core-headerd0846246b7f8111a7c8dd61d8977f797",
                      children: (0, c.jsx)("button", {
                        type: "button",
                        onClick: a,
                        children: (0, c.jsx)("img", {
                          src: wg,
                          alt: p.formatMessage(v_.search_action)
                        })
                      })
                    }), (0, c.jsx)("div", {
                      className: "rockstargames-modules-core-headerd35c5f222e110578e123ed49f56bba40",
                      children: (0, c.jsx)("input", {
                        type: "textfield",
                        value: _,
                        onChange: e => r(e.target.value),
                        onKeyUp: t,
                        placeholder: p.formatMessage(v_.search_placeholder),
                        ref: h,
                        enterKeyHint: "search",
                        maxLength: v
                      })
                    }), (0, c.jsx)("div", {
                      className: "rockstargames-modules-core-headerc52c2aba0e44186a883c1f2955167cde",
                      children: bg.targets.map(((e, a) => (0, c.jsx)(Og, {
                        target: e,
                        onClick: e => n(e, a),
                        selected: g === a,
                        selectedTarget: d
                      }, e.tab)))
                    }), !m && (0, c.jsx)("div", {
                      className: "rockstargames-modules-core-headerf1451c6007fa33b27b2919fa85e91762",
                      children: (0, c.jsx)("button", {
                        type: "button",
                        onClick: f,
                        children: (0, c.jsx)("img", {
                          src: xg,
                          alt: p.formatMessage(v_.search_close_button)
                        })
                      })
                    })]
                  }), u && (0, c.jsx)("div", {
                    className: "rockstargames-modules-core-headeredb8eb6fc81c7f28d96c57cb45ccc40e",
                    "aria-live": "polite",
                    children: u
                  })]
                })]
              })
            })]
          })
        },
        Bg = {
          search: "rockstargames-modules-core-headerff2a3a5885c54cc839c3684a72ac24be",
          targetsOuter: "rockstargames-modules-core-headerb8edda6b9b58803aa76c1d591cb6c750",
          hasScroll: "rockstargames-modules-core-headerf4a1a19cd54b9fdacba83551d7b595fd",
          targets: "rockstargames-modules-core-headerb85e2ca642065ab25737f4335826185c",
          errorMessage: "rockstargames-modules-core-headere03104e3157e0392e02406c0b163e2b3"
        },
        Gg = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: n,
            setIsSearchOpen: s,
            setSearchQuery: r,
            isSearchOpen: i,
            searchQuery: _,
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
            const n = n => {
                h && h.current && (n.preventDefault(), t = !0, e = n.pageX - h.current.offsetLeft, a = h.current.scrollLeft)
              },
              s = () => {
                t = !1
              },
              r = n => {
                if (t && (n.preventDefault(), h && h.current)) {
                  const t = n.pageX - h.current.offsetLeft - e;
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
              e.addEventListener("mousedown", n), e.addEventListener("mouseup", s), e.addEventListener("mouseleave", s), e.addEventListener("mousemove", r), e.addEventListener("scroll", i)
            }
            return () => {
              h && h.current && (h.current.removeEventListener("mousedown", n), h.current.removeEventListener("mouseup", s), h.current.removeEventListener("mouseleave", s), h.current.removeEventListener("mousemove", r), h.current.removeEventListener("scroll", i))
            }
          })), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("div", {
              className: Bg.search,
              children: [(0, c.jsx)("button", {
                type: "button",
                onClick: () => i ? a() : s(!0),
                children: (0, c.jsx)("img", {
                  src: wg,
                  alt: p.formatMessage(v_.search_action)
                })
              }), (0, c.jsx)("input", {
                type: "text",
                value: _,
                onChange: e => r(e.target.value),
                onFocus: () => s(!0),
                onKeyUp: t,
                placeholder: p.formatMessage(v_.search_placeholder),
                enterKeyHint: "search",
                maxLength: v
              }), i && !m && (0, c.jsx)("button", {
                type: "button",
                onClick: () => s(!1),
                children: (0, c.jsx)("img", {
                  src: xg,
                  alt: p.formatMessage(v_.search_close_button)
                })
              })]
            }), i && (0, c.jsxs)("div", {
              className: [Bg.targetsOuter, f ? Bg.hasScroll : ""].join(" "),
              children: [(0, c.jsx)("div", {
                className: Bg.targets,
                ref: h,
                children: bg.targets.map(((e, a) => (0, c.jsx)(Og, {
                  target: e,
                  selected: g === a,
                  selectedTarget: d,
                  onClick: e => n(e, a),
                  isMobile: !0
                }, e.tab)))
              }), u && (0, c.jsx)("div", {
                className: Bg.errorMessage,
                "aria-live": "polite",
                children: u
              })]
            })]
          })
        },
        Fg = "global-nav-search",
        qg = e => {
          let {
            ...a
          } = e;
          const {
            pathname: t,
            search: n
          } = (0, K.useLocation)(), {
            currentSite: s
          } = b_(), [r] = (0, K.useSearchParams)(), [i, _] = (0, l.useState)(""), [d, g] = y_(), [m, u] = (0, l.useState)(!1), [p, h] = (0, l.useState)(0), [f, b] = (0, l.useState)(bg.targets[0]), [k, y] = (0, l.useState)(""), w = (() => {
            const e = (0, K.useNavigate)(),
              {
                currentSite: a
              } = b_(),
              t = gg();
            return (n, s) => {
              const r = s.domain !== a?.site,
                i = {
                  ...s,
                  path: s.path?.replace("{query}", n)
                },
                o = r ? t(i).href : i.path;
              return r ? window.location.href = o : e ? e(o) : window.history.pushState({}, "", o), []
            }
          })(), x = w_(), M = (0, o.Z)(), S = x || d === Fg, C = /[*?\\<>&%@:~]/g, T = e => {
            if ("" === i) return !1;
            e.length > 100 && _(e.substring(0, 100));
            const a = e.split(/\s+/),
              t = e.match(C) || !1;
            return a.every((e => e.length < 3)) ? (y(M.formatMessage(v_.nav_search_error_too_short, {
              count: 3
            })), !1) : t ? (y(M.formatMessage(v_.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (y(""), !0)
          }, N = () => {
            T(i) && w(i, f.location)
          };
          (0, l.useEffect)((() => {
            const e = () => {
              u(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, l.useEffect)((() => {
            const e = s?.site === v.z.www && x,
              a = s?.site === v.z.socialClub && x;
            if (x || (h(0), b(bg.targets[0])), e) {
              const e = r.get("q"),
                a = r.get("tab");
              if (e && (_(e), T(e)), a) {
                const e = bg.targets.findIndex((e => e.tab === a));
                h(e), b(bg.targets[e])
              }
            }
            if (a) {
              const e = bg.targets.findIndex((e => e.tab === v.z.socialClub)),
                a = bg.targets[e].targets,
                n = a?.find((e => e.location.path.startsWith(t))),
                s = t.split("/")[2];
              s && _(s), h(e), n && b(n)
            }
          }), [t, n, x]);
          const j = {
            handleSearch: N,
            handleSearchKeypress: e => {
              y(""), "Enter" === e.key && N()
            },
            handleSearchTargetSelect: (e, a) => {
              b(e), h(a), T(i) && w(i, e.location)
            },
            setIsSearchOpen: () => g(Fg),
            setSearchQuery: _,
            isSearchOpen: S,
            searchQuery: i,
            selectedTarget: f,
            selectedTargetIndex: p,
            isSearchPage: x,
            searchError: k,
            maxSearchLength: 100
          };
          return m ? (0, c.jsx)(Gg, {
            ...j,
            ...a
          }) : (0, c.jsx)(Vg, {
            ...j
          })
        },
        $g = e => {
          let {
            cta: a,
            search: t = !0,
            isMobile: n
          } = e;
          const s = (0, o.Z)();
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headerd755a8be16d6c9603965d6d61ce44387",
            children: [a && (0, c.jsx)("div", {
              children: (0, c.jsx)(fg, {
                variant: a.variant,
                location: a.location,
                dataTestId: a.dataTestId,
                gaEvent: a.ga,
                gaText: a.text,
                target: a.target,
                children: s.formatMessage(a.intlMessage)
              })
            }), t && (0, c.jsx)(qg, {}), (0, c.jsxs)("div", {
              children: [(0, c.jsx)(xc, {}), !n && (0, c.jsx)(lg, {})]
            })]
          })
        },
        Ug = {
          navigationItem: "rockstargames-modules-core-headere4791244cfb12101d21ef44f3e26ac97",
          active: "rockstargames-modules-core-headerbe8bcc6c46d70212d01dc83c68e67c0a"
        },
        Hg = ["pc", "ps4", "ps5", "xboxone", "xboxsx"],
        Wg = e => e.replace(/\?.*$/, ""),
        Xg = e => {
          const {
            pathname: a
          } = (0, K.useLocation)(), {
            currentSite: t
          } = b_(), {
            data: n,
            loggedIn: s
          } = J();
          return e && e.length ? e.map((e => {
            if (e?.domain !== t?.site) return null;
            let r;
            if (t?.site === v.z.socialClub) {
              const e = RegExp(`/(${Hg.join("|")})`);
              r = a.match(e) ? a.replace(e, "") : a
            } else r = a;
            let i = Wg(e?.path || "");
            return s && (i = i.replace("{username}", n.nickname)), (0, K.matchPath)({
              path: i,
              caseSensitive: !1,
              end: !1
            }, Wg(r))
          })) : []
        },
        Yg = e => {
          let {
            text: a,
            type: t,
            location: n,
            isLegacy: s,
            gaText: r,
            gaBreadCrumb: i,
            dataTestId: o,
            target: l,
            ..._
          } = e;
          const [d] = Xg([n]), g = t === mg;
          return (0, c.jsxs)(pg, {
            className: [Ug.navigationItem, d ? Ug.active : ""].join(" "),
            location: n,
            isLegacy: s,
            type: t,
            target: l,
            gaText: r,
            gaBreadCrumb: i,
            dataTestId: o,
            label: a,
            ..._,
            children: [a, g && (0, c.jsx)("img", {
              alt: "",
              src: Sg
            })]
          })
        },
        Jg = {
          navigationDropdownButton: "rockstargames-modules-core-headera3a570b3fc00ad9e0274623661e88c7a",
          open: "rockstargames-modules-core-headerdbc174ea06ad91b5938af1465fdd3696",
          active: "rockstargames-modules-core-headerdb65254f84c5afcf987b23948ce1cf64"
        },
        Zg = e => {
          let {
            text: a,
            isOpen: t,
            onClick: n,
            buttonRef: s,
            navChildren: r,
            gaText: i,
            gaBreadCrumb: o,
            dataTestId: _
          } = e;
          const {
            track: d
          } = te(), g = (0, l.useCallback)((() => {
            d(_g(void 0, "", i, o)), n()
          }), [i, o, t, n]), m = (0, l.useMemo)((() => {
            if (!r) return;
            const e = (a, t) => {
              let n;
              return n = t.children ? t.children.reduce(e, []) : [t.location], [...a, ...n]
            };
            return r.reduce(e, [])
          }), [r]), u = Xg(m), v = u?.some(Boolean);
          return (0, c.jsx)("div", {
            className: Jg.navigationDropdown,
            ref: s,
            children: (0, c.jsxs)("button", {
              className: [Jg.navigationDropdownButton, v ? Jg.active : "", t ? Jg.open : ""].join(" "),
              type: "button",
              "data-testid": _ || "navDropdown",
              onClick: g,
              children: [a, (0, c.jsx)("img", {
                src: Mg,
                alt: ""
              })]
            })
          })
        },
        Kg = e => {
          let {
            title: a,
            location: t,
            imgUrl: n,
            gaText: s,
            gaBreadCrumb: r,
            onNavigate: i,
            dataTestId: o,
            ...l
          } = e;
          return (0, c.jsx)("div", {
            className: "rockstargames-modules-core-headerc2b06d9afe0933250fc72b9117858265",
            children: (0, c.jsx)(pg, {
              location: t,
              gaText: s,
              gaBreadCrumb: r,
              onNavigate: i,
              dataTestId: o,
              ...l,
              children: (0, c.jsx)("img", {
                src: n,
                alt: a
              })
            })
          }, a)
        },
        Qg = {
          domain: v.z.www,
          path: "/games"
        },
        em = () => {
          const e = (0, o.Z)();
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headerf4a613c7c0cc9bef8df3ee832d883ead",
            "data-testid": "gamesMenu",
            children: [(0, c.jsxs)("div", {
              className: "rockstargames-modules-core-headera300918162cd4910c1033e1410cf7306",
              children: [(0, c.jsx)("div", {
                children: (0, c.jsx)("h2", {
                  className: "rockstargames-modules-core-headerc310b29b3e11394b5a0dde96dc2d8f9b",
                  children: e.formatMessage(v_.games_menu_featured)
                })
              }), (0, c.jsx)("div", {
                children: (0, c.jsxs)(pg, {
                  className: "rockstargames-modules-core-headera3a0b6b909900e4677b64d48a0f9192d",
                  gaText: v_.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${v_.games_menu_view_all.defaultMessage}`,
                  location: Qg,
                  children: [e.formatMessage(v_.games_menu_view_all), (0, c.jsx)("img", {
                    src: Cg,
                    alt: e.formatMessage(v_.nav_view_all_games)
                  })]
                })
              })]
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-headerbbf167776ba1b263a8376030db8c6f35",
              children: x_.map((a => (0, c.jsx)(Kg, {
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
        am = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerae2bc6580acf5b4362b457cc75833bb8",
          nested: "rockstargames-modules-core-headerd6f17c0b3966d498f9a2fc3a9f9de38d",
          subMenuDropdownButton: "rockstargames-modules-core-headerdab571ebee31eca114e2a074de69472c",
          open: "rockstargames-modules-core-headerf43750ae7653576a37e8243935a3feb1",
          openChevron: "rockstargames-modules-core-headerdb0c8d634787e7aaf33e858747e52b05",
          subMenuDropdownItems: "rockstargames-modules-core-headerde63d9fdafaf4995f8b95fdef3a8d551"
        },
        tm = {
          subMenuItem: "rockstargames-modules-core-headere7cf207577cfec29877f7387fa7cb412",
          nested: "rockstargames-modules-core-headerfb8268fb2131202c7ee66ce7f684012f"
        },
        nm = {
          navigationLink: "rockstargames-modules-core-headerc638ccc027700497fe811881feb02f1e",
          active: "rockstargames-modules-core-headerf53cd2bce32edf82c615316c826f8477"
        },
        sm = e => [nm.navigationLink, e ? nm.active : ""].join(" "),
        rm = e => {
          let {
            text: a,
            type: t,
            location: n,
            className: s,
            isLegacy: r,
            target: i,
            nested: o,
            gaText: l,
            gaBreadCrumb: _,
            dataTestId: d,
            ...g
          } = e;
          const m = t === mg,
            [u] = Xg(n ? [n] : void 0);
          return (0, c.jsxs)(pg, {
            className: [sm(Boolean(u)), tm.subMenuItem, o ? tm.nested : "", s].join(" "),
            location: n,
            isLegacy: r,
            type: t,
            target: i,
            gaText: l,
            gaBreadCrumb: _,
            dataTestId: d,
            label: a,
            "data-ui-name": "sub-menu-item",
            ...g,
            children: [a, m && (0, c.jsx)("img", {
              alt: "",
              src: Sg
            })]
          })
        },
        im = "nav-dropdown",
        om = e => {
          let {
            text: a,
            navChildren: t,
            gaText: n,
            gaBreadCrumb: s,
            nested: r,
            dataTestId: i,
            subMenuId: _,
            toggleOpen: d,
            isOpen: g,
            ...m
          } = e;
          const [u] = y_(), v = (0, o.Z)(), {
            track: p
          } = te(), h = (0, l.useRef)(null), [f, b] = (0, l.useState)(null), k = k_();
          (0, l.useEffect)((() => {
            null === u && d(null)
          }), [u]);
          const y = e => {
              p(_g(void 0, "", n, s)), d(e ? _ : null)
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
          return (0, c.jsxs)("div", {
            className: [am.subMenuDropdownContainer, r ? am.nested : ""].join(" "),
            ...m,
            "data-ui-name": "sub-menu-item",
            children: [(0, c.jsxs)("button", {
              type: "button",
              className: [am.subMenuDropdownButton, r ? am.nested : "", g ? am.open : ""].join(" "),
              onClick: () => y(!g),
              onKeyUp: e => {
                "Enter" === e.code && y(!0), "ArrowRight" === e.code && y(!0), "ArrowLeft" === e.code && y(!1)
              },
              ref: h,
              "data-testid": i,
              children: [a, (0, c.jsx)("img", {
                src: Mg,
                className: am.openChevron,
                alt: ""
              })]
            }), (0, c.jsx)(kg.M, {
              children: g && t && (0, c.jsx)(yg.E.div, {
                className: am.subMenuDropdownItems,
                variants: M,
                animate: "open",
                initial: "closed",
                exit: "closed",
                children: t.map((e => e?.requiresAuth && !k.nickname ? null : e.type === im ? (0, c.jsx)(om, {
                  text: v.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${s} > ${e.intlMessage.defaultMessage}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: f === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: b
                }, e.intlMessage.defaultMessage) : (0, c.jsx)(rm, {
                  text: v.formatMessage(e.intlMessage),
                  type: e.type,
                  location: e.location,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${s} > ${e.intlMessage.defaultMessage}`,
                  onKeyUp: w,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.intlMessage.defaultMessage)))
              })
            })]
          })
        },
        lm = om,
        _m = {
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
        cm = e => {
          let {
            intlMessage: a,
            type: t,
            location: n,
            navChildren: s,
            isLegacy: r,
            requiresAuth: i,
            target: _,
            gaBreadCrumb: d,
            navKey: g,
            isHidden: m,
            dataTestId: u,
            ...v
          } = e;
          const p = (0, o.Z)(),
            [h, f] = (0, l.useState)(null),
            b = (0, K.useLocation)(),
            [k, y] = y_(),
            w = k_(),
            [x, M] = (0, l.useState)(null),
            S = k === g,
            C = {
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
          const T = d ? `${d} > ${a.defaultMessage}` : a.defaultMessage;
          return t === ug ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(Zg, {
              text: p.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: T,
              onClick: () => y(g),
              isOpen: S,
              buttonRef: m ? void 0 : f,
              navChildren: s,
              dataTestId: u,
              ...v
            }), !m && (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(Rg, {
                isOpen: S,
                onMouseClick: () => y(null),
                onEscapeKey: () => y(null)
              }), (0, c.jsx)(Ag, {
                isOpen: S,
                openerRef: h,
                children: s?.map((e => e?.requiresAuth && !w.nickname ? null : e.type === ug ? (0, c.jsx)(lm, {
                  text: p.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${T} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: x === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: M
                }, `desktop-submenu-${e.intlMessage.defaultMessage}`) : (0, c.jsx)(rm, {
                  location: e.location,
                  text: p.formatMessage(e.intlMessage),
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${T} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId
                }, e.intlMessage.defaultMessage)))
              })]
            })]
          }) : t === vg ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(Zg, {
              text: p.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: d ? `${d} > ${a.defaultMessage}` : a.defaultMessage,
              onClick: () => y(g),
              isOpen: S,
              dataTestId: u,
              ...v
            }), !m && (0, c.jsx)(Rg, {
              isOpen: !0,
              onMouseClick: () => y(null),
              onEscapeKey: () => y(null),
              style: C,
              children: (0, c.jsx)(yg.E.div, {
                initial: "exit",
                animate: S ? "enter" : "exit",
                transition: {
                  ease: "easeInOut",
                  duration: .3
                },
                variants: _m,
                children: (0, c.jsx)(em, {})
              })
            })]
          }) : n ? i && !w.nickname ? null : (0, c.jsx)(Yg, {
            location: n,
            type: t,
            text: p.formatMessage(a),
            isLegacy: r,
            target: _,
            gaText: a.defaultMessage.toLowerCase(),
            gaBreadCrumb: d ? `${d} > ${a.defaultMessage}` : a.defaultMessage,
            dataTestId: u,
            ...v
          }) : null
        },
        dm = e => {
          let {
            links: a
          } = e;
          const [t, n] = (0, l.useState)(a), [s, r] = (0, l.useState)([]), i = (0, l.useRef)(null), o = (0, l.useRef)(null), _ = (0, l.useCallback)((() => {
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
              l = i.filter((e => e !== s)).length,
              _ = i.findIndex((e => e > s));
            let c = _;
            _ > 0 && (c = _ - 1), l ? (n(a.slice(0, c)), r(a.slice(c))) : (n(a), r([]))
          }), [a, o?.current]);
          (0, l.useEffect)((() => {
            const e = new ResizeObserver(_);
            return o?.current && e.observe(o.current), () => {
              o?.current && e.unobserve(o.current)
            }
          }), [a, o?.current]);
          const d = (0, l.useMemo)((() => (0, c.jsx)("ul", {
            ref: o,
            className: "rockstargames-modules-core-headerf3e86ba2e4808f8537da93ae608b41fd",
            "aria-hidden": "true",
            children: a.map((e => (0, c.jsx)("li", {
              children: (0, c.jsx)(cm, {
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
          return 0 === a.length ? null : (0, c.jsxs)("nav", {
            className: "rockstargames-modules-core-headerbf622cdec1ceb44e603e4e0ce93970e7",
            children: [(0, c.jsxs)("ul", {
              ref: i,
              children: [t.map((e => (0, c.jsx)("li", {
                children: (0, c.jsx)(cm, {
                  intlMessage: e.intlMessage,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, `desktop-nav-link-${e.text}`))), s.length > 0 && (0, c.jsx)("li", {
                children: (0, c.jsx)(cm, {
                  intlMessage: v_.nav_more_dropdown,
                  type: ug,
                  navChildren: s,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), d]
          })
        },
        gm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        mm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
        um = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
        vm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
        pm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
        hm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
        fm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
        bm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg",
        km = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
        ym = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
        wm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a7dfd2058127cb6f5adca6c9b1d91cc.png",
        xm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
        Mm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
        Sm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d2753ceddb2213d956d51d369985513.svg",
        Cm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
        Tm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
        Nm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ccc721c72fc5553108c7e70b0778dba.svg",
        jm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
        zm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
        Em = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63c149607e42c3f7a8988ef21d53ec97.svg",
        Am = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
        Im = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
        Pm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/790f72b723ee040bae9e43e3d2785c89.svg",
        Lm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
        Om = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
        Dm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
        Rm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
        Vm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
        Bm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
        Gm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
        Fm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
        qm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
        $m = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
        Um = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
        Hm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
        Wm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
        Xm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        Ym = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
        Jm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
        Zm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
        Km = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
        Qm = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
        eu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
        au = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
        tu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
        nu = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
        su = e => s[e] ? s[e] : null,
        ru = () => (0, c.jsx)("div", {
          className: "rockstargames-modules-core-headerc5182c35b0d08cbfd5c48a29103c987d"
        }),
        iu = {
          quickAccess: "rockstargames-modules-core-headerdd98ab26460bc8af09e869527e025790",
          link: "rockstargames-modules-core-headerb9254c00c41acd171bd25c1a6e49171e"
        },
        ou = () => {
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
          return (0, c.jsxs)("ul", {
            className: iu.quickAccess,
            children: [(0, c.jsx)("li", {
              children: (0, c.jsxs)(pg, {
                location: a.home,
                className: [sm(), iu.link].join(" "),
                gaText: v_.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${t} > ${v_.nav_quick_access_home.defaultMessage}`,
                children: [(0, c.jsx)("img", {
                  alt: "Rockstar Games",
                  src: Xm
                }), (0, c.jsx)(i.Z, {
                  ...v_.nav_quick_access_home
                })]
              })
            }), (0, c.jsx)("li", {
              children: (0, c.jsxs)(pg, {
                location: a.games,
                className: [sm(), iu.link].join(" "),
                gaText: v_.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${t} > ${v_.nav_quick_access_games.defaultMessage}`,
                children: [(0, c.jsx)("img", {
                  alt: e.formatMessage(v_.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, c.jsx)(i.Z, {
                  ...v_.nav_quick_access_games
                })]
              })
            }), (0, c.jsx)("li", {
              children: (0, c.jsxs)(pg, {
                location: a.newswire,
                className: [sm(), iu.link].join(" "),
                gaText: v_.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${t} > ${v_.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, c.jsx)("img", {
                  alt: e.formatMessage(v_.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, c.jsx)(i.Z, {
                  ...v_.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        lu = "quick-access-menu",
        _u = e => {
          let {
            site: a,
            brand: t,
            hideRockstarBrand: n,
            hideQuickAccess: s
          } = e;
          const r = (0, o.Z)(),
            [i, _] = (0, l.useState)(!1),
            [d, g] = (0, l.useState)(null),
            [m, u] = (0, l.useState)(null),
            [v, p] = y_(),
            h = v === lu,
            f = s ? v_.nav_rockstargames_home : v_.nav_rockstargames_logo;
          (0, l.useEffect)((() => {
            const e = () => {
              _(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const {
            styles: b,
            attributes: k,
            forceUpdate: y
          } = (0, jg.D)(d, m, {
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
            y?.()
          }), [d, h]), (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headeracf0fe31775e9e9f76e57a6356c3073d",
            children: [!n && (0, c.jsxs)("div", {
              className: "rockstargames-modules-core-headerae7adffe4295955d4ea126909f0f7027",
              children: [(i || s) && (0, c.jsx)(pg, {
                location: {
                  domain: "www",
                  path: "/"
                },
                gaText: v_.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: v_.nav_rockstargames_home.defaultMessage,
                children: (0, c.jsx)(ru, {})
              }), !i && !s && (0, c.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headerfe08980c15b4c9d647ad67b3e69df46c",
                onClick: () => p(lu),
                "aria-label": r.formatMessage(f),
                ref: g,
                children: (0, c.jsx)(ru, {})
              }), h && !s && (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)(Rg, {
                  isOpen: h,
                  onEscapeKey: () => p(null),
                  onMouseClick: () => p(null)
                }), (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-headerac0bb9bdb359f681853e0ab8386b966f",
                  style: {
                    ...b.popper
                  },
                  ref: u,
                  ...k.popper,
                  children: (0, c.jsx)(ou, {})
                })]
              })]
            }), t && (0, c.jsxs)(c.Fragment, {
              children: [!n && (0, c.jsx)("div", {
                className: "rockstargames-modules-core-headerbd9eb76eae4216a03e203f8277c0de1a"
              }), (0, c.jsx)("div", {
                className: "rockstargames-modules-core-headerce3b9d90001b3bba8f2e0ada2902041f",
                children: (0, c.jsx)("img", {
                  className: "rockstargames-modules-core-headerae86867dea4ec0a8cdea5642f4c291d3",
                  alt: a,
                  src: su(t)
                })
              })]
            })]
          })
        },
        cu = {
          header: "rockstargames-modules-core-headerd2dbf5efb1484f71a302d2b217900031",
          fluid: "rockstargames-modules-core-headercfa07fc8efab2e71f97a4b728dee6586",
          fixed: "rockstargames-modules-core-headerfcaaa17901eb60439448b4351d15f0b2",
          title: "rockstargames-modules-core-headere171ca1389a17285caa5dfa568adfac8",
          quickAccessWrapper: "rockstargames-modules-core-headera4ef54292d023f37220cb09dffe7c81a"
        },
        du = e => {
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
          return (0, c.jsxs)("header", {
            className: [cu.header, cu.fixed].join(" "),
            style: t,
            children: [(0, c.jsx)("div", {
              className: cu.title,
              children: (0, c.jsx)(_u, {
                site: a.site,
                brand: a.brand,
                hideQuickAccess: a.hideQuickAccess || !1
              })
            }), (0, c.jsx)("div", {
              className: cu.fluid,
              children: (0, c.jsx)(dm, {
                links: a.links
              })
            }), (0, c.jsx)("div", {
              className: cu.fixed,
              children: (0, c.jsx)($g, {
                cta: a.cta
              })
            })]
          })
        },
        gu = {
          hamburger: "rockstargames-modules-core-headerd45fd161655450522fd627346eda32f6",
          open: "rockstargames-modules-core-headerefcc59509afc394cff54203b433d510e"
        },
        mu = e => {
          let {
            toggle: a,
            isMenuOpen: t
          } = e;
          const {
            track: n
          } = te();
          return (0, c.jsx)("div", {
            className: [gu.hamburger, t ? gu.open : ""].join(" "),
            children: (0, c.jsxs)("button", {
              onClick: () => {
                n({
                  event: t ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), a?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, c.jsx)("span", {}), (0, c.jsx)("span", {}), (0, c.jsx)("span", {})]
            })
          })
        },
        uu = {
          header: "rockstargames-modules-core-headerc6c3d0fc75c97585f6ca0f5805999412",
          title: "rockstargames-modules-core-headeraa1441b47dbc6f5a653a59ed4d9f9433",
          nav: "rockstargames-modules-core-headere454c30b7535de52d50c84ba33bd6a10",
          fullMenuOpen: "rockstargames-modules-core-headerb95ceeff411265d1f48446f8b06510e5",
          paddingBottom: "rockstargames-modules-core-headerb1ca354e5212602a9ee0119c6e77096a",
          navContainer: "rockstargames-modules-core-headerbf0d2e00daa366e9d881eb1631eb799f",
          searchOpen: "rockstargames-modules-core-headerf9ef7f85a5d81d00b1d680003a076fa3"
        },
        vu = {
          domain: v.z.www,
          path: "/games"
        },
        pu = e => {
          let {
            text: a,
            onNavigate: t
          } = e;
          const n = (0, o.Z)(),
            s = (0, l.useRef)(),
            [r, _] = (0, l.useState)(2.5);
          return (0, l.useEffect)((() => {
            const e = () => {
              _(window.innerWidth < 768 ? 2.5 : 3.5)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headerffd42c843d5d69c9d594c92a30692e5d",
            "data-testid": "gamesMenu",
            children: [(0, c.jsxs)("div", {
              className: "rockstargames-modules-core-headerdc05e5d1b9cadf7aaf9ca6bf2115d812",
              children: [(0, c.jsx)("h2", {
                children: a
              }), (0, c.jsxs)(pg, {
                gaText: v_.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${v_.nav_view_all_games.defaultMessage}`,
                location: vu,
                onNavigate: t,
                className: nm.navigationLink,
                children: [(0, c.jsx)(i.Z, {
                  ...v_.nav_view_all_games
                }), (0, c.jsx)("img", {
                  src: Cg,
                  alt: n.formatMessage(v_.nav_view_all_games)
                })]
              })]
            }), (0, c.jsx)(ed.tq, {
              className: "rockstargames-modules-core-headera91f871c6f287f959df91085cef76f22",
              ref: s,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: r,
              speed: 700,
              children: x_.map((e => (0, c.jsx)(ed.o5, {
                className: "rockstargames-modules-core-headere094133e33c8cdf2873ff7e08c34dd0a",
                children: (0, c.jsx)(Kg, {
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
        hu = e => {
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
          return (0, c.jsx)(kg.M, {
            children: t && (0, c.jsx)(yg.E.div, {
              className: "rockstargames-modules-core-headerc69df84ab1249c0ea218884e3459e5cc",
              variants: s,
              animate: "open",
              initial: "closed",
              exit: "closed",
              children: a
            })
          })
        },
        fu = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerd4d2f7b0358d7c2b7c482bea7a243acd",
          subMenuDropdownButton: "rockstargames-modules-core-headerc09e65bd027917e0f29da9a6ef0e91f8",
          open: "rockstargames-modules-core-headerae62683c5e47c10b3260c7a63544e9d1",
          subMenuDropdownItems: "rockstargames-modules-core-headera015481239e04732ecf001df49c29311"
        },
        bu = {},
        ku = e => {
          let {
            text: a,
            dataTestId: t,
            type: n,
            target: s,
            location: r,
            className: i,
            gaText: o,
            gaBreadCrumb: l,
            isLegacy: _,
            onNavigate: d,
            ...g
          } = e;
          const [m] = Xg(r ? [r] : void 0), u = n === mg;
          return (0, c.jsxs)(pg, {
            className: [sm(Boolean(m)), bu.subMenuItem, i].join(" "),
            dataTestId: t,
            location: r,
            type: n,
            target: s,
            gaText: o,
            gaBreadCrumb: l,
            onNavigate: d,
            isLegacy: _,
            label: a,
            ...g,
            children: [a, u && (0, c.jsx)("img", {
              alt: "",
              src: Sg
            })]
          })
        },
        yu = e => {
          let {
            text: a,
            dataTestId: t,
            navChildren: n,
            gaText: s,
            gaBreadCrumb: r,
            onNavigate: i,
            isSubMenuOpen: l,
            toggleMenuOpen: _,
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
          return (0, c.jsxs)("div", {
            className: fu.subMenuDropdownContainer,
            ...d,
            children: [(0, c.jsxs)("button", {
              type: "button",
              "data-testid": t,
              className: [fu.subMenuDropdownButton, l ? fu.open : ""].join(" "),
              onClick: () => {
                m(_g(void 0, "", s, r)), _()
              },
              children: [a, (0, c.jsx)("img", {
                src: Mg,
                alt: ""
              })]
            }), (0, c.jsx)(kg.M, {
              children: l && (0, c.jsx)(yg.E.div, {
                className: fu.subMenuDropdownItems,
                variants: v,
                animate: "open",
                initial: "closed",
                exit: "closed",
                children: n.map((e => (0, c.jsx)(ku, {
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
        wu = e => {
          let {
            intlMessage: a,
            dataTestId: t,
            type: n,
            target: s,
            location: r,
            navChildren: i,
            gaBreadCrumb: _,
            onNavigate: d,
            isOpen: g,
            setIsOpen: m,
            ...u
          } = e;
          const v = (0, o.Z)(),
            [p, h] = (0, l.useState)(null),
            [f] = Xg(r ? [r] : void 0),
            b = _ ? `${_} > ${a.defaultMessage}` : a.defaultMessage;
          if (n === ug) return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(Zg, {
              text: v.formatMessage(a),
              dataTestId: t,
              gaText: a.defaultMessage,
              gaBreadCrumb: b,
              onClick: () => m(),
              isOpen: g,
              ...u
            }), (0, c.jsx)(hu, {
              isOpen: g,
              children: i?.map(((e, a) => e.type === ug ? (0, c.jsx)(yu, {
                text: v.formatMessage(e.intlMessage),
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.intlMessage.defaultMessage,
                gaBreadCrumb: `${b} > ${e.intlMessage.defaultMessage}`,
                onNavigate: d,
                isSubMenuOpen: p === a,
                toggleMenuOpen: () => h(p !== a ? a : null)
              }, e.intlMessage.defaultMessage) : (0, c.jsx)(ku, {
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
          if (n === vg) return (0, c.jsx)(pu, {
            text: v.formatMessage(a),
            onNavigate: d
          });
          const k = n === mg;
          return (0, c.jsxs)(pg, {
            location: r,
            dataTestId: t,
            type: n,
            target: s,
            gaText: a.defaultMessage,
            gaBreadCrumb: b,
            onNavigate: d,
            className: [sm(Boolean(f)), f ? "rockstargames-modules-core-headere316012f5bea2b6722ee4b7d7b466cf2" : ""].join(" "),
            label: v.formatMessage(a),
            ...u,
            children: [v.formatMessage(a), k && (0, c.jsx)("img", {
              alt: "",
              src: Sg
            })]
          })
        },
        xu = e => {
          let {
            links: a,
            cta: t,
            onNavigate: n
          } = e;
          const s = (0, o.Z)(),
            [r, i] = (0, l.useState)(null);
          return (0, c.jsx)("div", {
            className: "rockstargames-modules-core-headerb15d5468019b2ad71c74bc93146eeffe",
            children: (0, c.jsxs)("ul", {
              children: [a.map(((e, a) => (0, c.jsx)("li", {
                children: (0, c.jsx)(wu, {
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
              }, e.text))), t && (0, c.jsx)("li", {
                className: "rockstargames-modules-core-headerda158a2d181d8898c98800dfd9a76691",
                children: (0, c.jsx)(fg, {
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
        Mu = e => {
          let {
            data: a,
            isMobile: t
          } = e;
          const [n, s] = (0, l.useState)(!1), [r, i] = (0, l.useState)(!1), o = w_(), {
            pathname: _,
            hash: d,
            search: g
          } = (0, K.useLocation)(), m = {
            duration: .2,
            ease: "easeInOut",
            stiffness: 1e3,
            damping: 100,
            delay: 0
          }, u = {
            open: {
              opacity: 1,
              transition: m
            },
            closed: {
              opacity: 0,
              transition: m
            }
          };
          return (0, l.useEffect)((() => {
            n ? document.documentElement.setAttribute("data-disallow-body-scroll", "") : document.documentElement.removeAttribute("data-disallow-body-scroll")
          }), [n]), (0, l.useEffect)((() => {
            i(!1), s(!1)
          }), [_, d, g]), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              className: uu.header,
              children: [(0, c.jsx)(mu, {
                toggle: () => {
                  s(!n), i(!1)
                },
                isMenuOpen: n
              }), (0, c.jsx)("div", {
                className: uu.title,
                children: (0, c.jsx)(_u, {
                  site: a.site,
                  brand: a.brand,
                  hideRockstarBrand: !!a.brand
                })
              }), (0, c.jsx)("div", {
                children: (0, c.jsx)($g, {
                  search: !1,
                  isMobile: t
                })
              })]
            }), (0, c.jsx)(kg.M, {
              children: (n || r || o) && (0, c.jsxs)(yg.E.nav, {
                className: [uu.nav, n && a.brand ? uu.paddingBottom : "", n ? uu.fullMenuOpen : ""].join(" "),
                variants: u,
                animate: "open",
                initial: "closed",
                exit: "closed",
                children: [(0, c.jsx)(qg, {
                  isSearchOpen: r || o,
                  setIsSearchOpen: i
                }), n && (0, c.jsxs)("div", {
                  className: [uu.navContainer, r ? uu.searchOpen : ""].join(" "),
                  children: [(0, c.jsx)(xu, {
                    links: a.links,
                    cta: a.cta,
                    onNavigate: () => {
                      s(!1), i(!1)
                    }
                  }), a.brand && !a.hideQuickAccess && (0, c.jsx)(ou, {})]
                })]
              })
            }), t && (0, c.jsx)(lg, {})]
          })
        },
        Su = () => {
          const [e, a] = (0, l.useState)(!1), t = w_(), {
            currentSite: s
          } = b_(), [r] = (0, K.useSearchParams)(), {
            search: i
          } = (0, K.useLocation)();
          (0, l.useEffect)((() => {
            const e = () => {
              a(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const o = (0, l.useMemo)((() => Object.values(n).reduce(((a, t) => {
              const i = s?.site ? t.appearancePaths[s.site] : [];
              return i ? [...a, ...i.map((a => {
                const s = a.match(/{.*}/),
                  i = s?.[0],
                  o = i && (e => {
                    if (!e) return null;
                    if ("titleOverride" === e) {
                      const e = r.get("title");
                      if ("gtav" === e) return B_;
                      if ("rdr2" === e) return nc
                    }
                    return null
                  })(i.substring(1, i.length - 1)) || t,
                  l = i ? a.replace(i, "") : a;
                let _ = null;
                return o?.links?.length < 1 && (_ = S_().cloneDeep(o), _.links = n?.rsg?.links, _.hideQuickAccess = !0, _.cta && delete _.cta), {
                  path: l,
                  element: e ? (0, c.jsx)(Mu, {
                    isMobile: e,
                    data: _ ?? o
                  }) : (0, c.jsx)(du, {
                    data: o
                  })
                }
              }))] : a
            }), [])), [s?.site, e, i]),
            _ = (0, K.useRoutes)(o);
          return (0, c.jsxs)("div", {
            className: C_.globalNavigationRoot,
            children: [(0, c.jsx)("div", {
              className: [C_.globalNavigationSpacer, t ? C_.globalNavigationSearchSpacer : ""].join(" ")
            }), _]
          })
        },
        Cu = () => {
          const e = (0, l.useMemo)((() => (0, v.Z)()), []),
            [a, t] = (0, l.useState)("#main");
          return (0, l.useEffect)((() => {
            t("www" === e?.currentSite?.site ? window.location.pathname.startsWith("gta-online") ? "#main" : "#content" : "#app-root")
          }), [e]), (0, c.jsx)("a", {
            className: "rockstargames-modules-core-headercf7ea2d9c4f82e278e44b867b529e56e",
            href: a,
            children: (0, c.jsx)(i.Z, {
              ...v_.accessibility_skip_button
            })
          })
        },
        Tu = e => {
          let {
            baseName: a
          } = e;
          const t = oe(),
            {
              hasProvider: n
            } = J(),
            [{
              iso: s
            }] = f();
          let r = null;
          return r = (0, c.jsx)(m_, {}), n ? (0, c.jsxs)(c.Fragment, {
            children: [r, (0, c.jsx)(d, {
              locales: u_,
              lang: s,
              children: (0, c.jsx)(ee, {
                children: (0, c.jsx)(se, {
                  basename: a,
                  history: t,
                  children: (0, c.jsxs)(f_, {
                    children: [(0, c.jsx)(Cu, {}), (0, c.jsx)(Su, {})]
                  })
                })
              })
            })]
          }) : (0, c.jsxs)(c.Fragment, {
            children: [r, (0, c.jsx)(d, {
              locales: u_,
              lang: s,
              children: (0, c.jsx)(Y, {
                children: (0, c.jsx)(ee, {
                  children: (0, c.jsx)(se, {
                    basename: a,
                    history: t,
                    children: (0, c.jsxs)(f_, {
                      children: [(0, c.jsx)(Cu, {}), (0, c.jsx)(Su, {})]
                    })
                  })
                })
              })
            })]
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
        l = t(8383),
        _ = t(7349);
      const {
        apiHost: c
      } = (0, l.Z)(), d = (0, _.r)(document.documentElement.lang), g = {}, m = async function(e) {
        let {
          fetchOptions: a = {},
          finalFetchOptions: t = {},
          query: s = null,
          pingBearer: i,
          requireBearerToken: l = !0,
          useCache: _ = !0
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
        let v = `${c}/${e}`;
        if (null === s || o().isEmpty(s) || (v += `?${new URLSearchParams(s)}`), !m && l) return null;
        m && (u.Authorization = `Bearer ${m}`);
        const p = {
            headers: u
          },
          h = r().all([p, a, t]),
          f = JSON.stringify({
            ...h,
            url: v
          }),
          b = await (0, n.JQ)(f);
        if (_) {
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
        return _ && (g[b] = {
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
      const n = window?.env?.sc,
        s = window?.env?.marketing,
        r = e => {
          let {
            apiHost: a,
            authHost: t,
            clientId: r,
            graphEnv: i,
            scHost: o,
            hostname: l,
            cdnBase: _,
            key: c,
            marketingAuthTLD: d
          } = e;
          const g = n?.apiHost ?? a,
            m = n?.authHost ?? t,
            u = n?.cdnBase ?? _,
            v = n?.clientId ?? r,
            p = s?.marketingAuthTLD ?? d,
            h = n?.scHost ?? o;
          return {
            apiHost: `https://${g}.rockstargames.com`,
            graphEnv: n?.graphEnv ?? i,
            host: h,
            hostname: l,
            cdnBase: u,
            key: c,
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
        Z: () => l
      });
      var n = t(7629),
        s = t.n(n);
      const r = (0, t(668).Z)(),
        i = r?.id,
        o = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
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
        ZF: () => y.Z,
        kX: () => p,
        E$: () => w.Z,
        s8: () => u,
        IO: () => M,
        rz: () => x.r,
        Vg: () => k,
        bU: () => h.bU,
        TZ: () => h.TZ,
        TG: () => j,
        zt: () => r,
        rE: () => l,
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
      const l = e => a => ((e, a) => {
        const t = (0, i.lY)(o.SP);
        return (0, s.jsx)(e, {
          ...a,
          locale: t
        })
      })(e, a);
      var _ = t(279),
        c = t(5370),
        d = t.n(c),
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
          return (0, _.useEffect)((() => {
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
      let C;
      try {
        C = JSON.parse(window.localStorage.getItem(S) ?? null)
      } catch (e) {
        C = {}
      }
      const T = (0, i.QS)(C),
        N = e => {
          let {
            key: a,
            value: t
          } = e;
          if (null == a) throw Error("You have to specify a key and a value.");
          const n = {
            ...T() ?? {}
          };
          return n[a] = t, null === t && delete n[a], window.localStorage.setItem(S, JSON.stringify(n)), T(n), n
        },
        j = () => ({
          lsSettings: (0, i.lY)(T),
          settingsReactive: T,
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
        E = () => {
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
        A = (0, _.createContext)(E()),
        {
          Consumer: I
        } = A;
      (0, i.QS)(E()), t(9615)
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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

      function l(e, a) {
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
          definitions: [l(e, a)]
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
          var n = l(e, a);
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
    593: e => {
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
        body: "query abc123($locale: String!) {\n    abc123: abc123Aa73120ec29e42c87d5233b2f9a126277a5e3b8d9553ed992da0adf6a277bb2c(\n        locale: $locale\n    ) {\n        key\n        value\n    }\n}\n",
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
      })), e.exports = a, e.exports.abc123 = function(e, a) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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
    },
    2508: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cff62fb2b8dc824b667505750129bd4d.jpg"
    },
    2981: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52ba580606a589f4ac105866012722.svg"
    }
  }
]);