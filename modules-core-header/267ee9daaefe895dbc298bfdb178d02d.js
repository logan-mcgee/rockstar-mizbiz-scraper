/*! For license information please see 267ee9daaefe895dbc298bfdb178d02d.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "36b651d8-331a-4c93-b53f-abbae53c598e", e._sentryDebugIdIdentifier = "sentry-dbid-36b651d8-331a-4c93-b53f-abbae53c598e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [656], {
    73648: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => Q_
      });
      var n = {};
      t.r(n), t.d(n, {
        beaterator: () => zs,
        bully: () => Us,
        careers: () => Vs,
        gta: () => Bs,
        gta2: () => Rs,
        gta3: () => Gs,
        gta4: () => Fs,
        gta5: () => qs,
        gtaAdvance: () => $s,
        gtaCtw: () => Hs,
        gtaIvEflc: () => Ws,
        gtaLcs: () => Js,
        gtaLondon: () => Xs,
        gtaOnline: () => Ks,
        gtaPlus: () => Ys,
        gtaSanAndreas: () => Qs,
        gtaTrilogy: () => Zs,
        gtaVc: () => er,
        gtaVcs: () => ar,
        laNoire: () => tr,
        manhunt: () => nr,
        manhunt2: () => sr,
        maxPayne: () => rr,
        maxPayne2: () => ir,
        maxPayne3: () => or,
        midnightclub: () => lr,
        midnightclub2: () => _r,
        midnightclub3: () => cr,
        midnightclubStreetRacing: () => dr,
        oni: () => gr,
        readDeadOnline: () => mr,
        redDeadRedemption: () => vr,
        redDeadRedemption2: () => ur,
        redDeadRedemptionUndeadNightmare: () => pr,
        redDeadRevolver: () => fr,
        rsg: () => hr,
        skateAndDestroy: () => kr,
        smugglersRun: () => yr,
        smugglersRun2: () => wr,
        smugglersRunWarzones: () => xr,
        stateOfEmergency: () => br,
        support: () => Mr,
        tableTennis: () => Sr,
        theItalianJob: () => Cr,
        theWarriors: () => Nr,
        wildMetal: () => jr
      });
      var s = {};
      t.r(s), t.d(s, {
        Menu: () => lo,
        MenuButton: () => go
      });
      var r = {};
      t.r(r), t.d(r, {
        beaterator: () => Dl,
        bully: () => Ul,
        careers: () => zl,
        gta: () => Vl,
        gta2: () => Bl,
        gta3: () => Rl,
        gta4: () => Gl,
        gta5: () => Fl,
        gtaadvance: () => ql,
        gtactw: () => $l,
        gtaiveflc: () => Hl,
        gtalcs: () => Wl,
        gtalondon: () => Jl,
        gtaonline: () => Xl,
        gtaplus: () => Kl,
        gtasanandreas: () => Yl,
        gtatrilogy: () => Ql,
        gtav: () => Fl,
        gtavc: () => Zl,
        gtavcs: () => e_,
        lanoire: () => a_,
        manhunt: () => t_,
        manhunt2: () => n_,
        manhunt3: () => s_,
        maxpayne: () => r_,
        maxpayne2: () => i_,
        maxpayne3: () => o_,
        midnightclub2: () => l_,
        midnightclub3dub: () => __,
        midnightclubla: () => c_,
        midnightclubstreetracing: () => d_,
        oni: () => g_,
        reddeadonline: () => m_,
        reddeadredemption: () => v_,
        reddeadredemption2: () => u_,
        reddeadredemptionundeadnightmare: () => p_,
        reddeadrevolver: () => f_,
        rockstar: () => h_,
        smugglersrun: () => b_,
        smugglersrun2hostileterritory: () => k_,
        smugglersrunwarzones: () => y_,
        stateofemergency: () => w_,
        tabletennis: () => x_,
        theitalianjob: () => M_,
        thewarriors: () => S_,
        thrashersad: () => C_,
        wildmetal: () => N_
      });
      var i = t(80696),
        o = t(88200),
        l = t(14812),
        _ = t(10768),
        c = t(99628);
      const d = (0, l.C2)("@rockstargames/modules-core-sc-user"),
        g = d("navOpenReactive", !1),
        m = e => g(e),
        v = d("jumpScMenuFocusReactive", !1),
        u = e => v(e),
        p = d("hasNotificationsReactive", !1),
        f = e => p(e),
        h = d("currentCharIdReactive", (0, _.U$)()?.currentCharId),
        b = e => h(e),
        k = d("selectedCharacterTupleReactive", null),
        y = e => k(e),
        w = d("rockstarIdReactive", null),
        x = d("charactersNeededReactive", null),
        M = e => x(e),
        S = d("userDataReactive", null),
        C = e => S(e),
        N = () => {
          const e = (0, l.gh)(x),
            a = (0, l.gh)(h),
            t = (0, l.gh)(g),
            n = (0, l.gh)(p),
            s = (0, l.gh)(k);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: n,
            navOpen: t,
            userData: (0, l.gh)(S),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, l.gh)(v),
            setCharactersNeeded: M,
            setCurrentCharId: b,
            setHasNotifications: f,
            setNavOpen: m,
            setSelectedCharacterTuple: y,
            setUserData: C,
            setJumpScMenuFocus: u
          }
        };
      var j = t(78848),
        T = t.n(j);
      const I = (0, _.S_)(),
        E = (0, l.UT)(I),
        {
          graphEnv: A
        } = (0, _.S_)(),
        L = (0, l.mg)(A),
        P = () => {
          const e = (0, l.Wy)(),
            [a, t] = (0, o.useState)({
              id: null,
              avatar: "",
              profile_link: "",
              nickname: "",
              crews: [],
              characters: {
                gtao: []
              }
            }),
            [n, s] = (0, o.useState)(!0),
            [r, , i] = (0, l.vb)(),
            d = (0, l.aI)(),
            {
              refetch: g
            } = (0, l.UL)(c.userData, {
              skip: !0,
              context: {
                uri: L
              }
            }),
            [m, v] = (0, o.useState)(null),
            [u, p] = (0, o.useState)(!1),
            [f, h] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            (async () => {
              const n = null === e ? null : !!e;
              if (n && !u) {
                s(!0), p(!0);
                const e = await g(),
                  n = e?.data?.user?.id,
                  r = await (async e => {
                    let {
                      pingBearer: a,
                      rockstarId: t
                    } = e;
                    const {
                      crews: n
                    } = await (0, _.s9)("crew/forMember", {
                      pingBearer: a,
                      query: {
                        userId: t
                      }
                    });
                    return n
                  })({
                    pingBearer: d,
                    rockstarId: n
                  }),
                  i = await (async e => {
                    let {
                      pingBearer: a,
                      nickname: t,
                      rockstarId: n
                    } = e;
                    const s = [],
                      r = await (0, _.s9)("profile/playedplatforms?game=gtav", {
                        pingBearer: a
                      });
                    if (await (r?.platforms?.reduce((async (e, t) => {
                        if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                        const n = await (0, _.s9)(`games/gtao/characters?platform=${t}`, {
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
                    } = await (0, _.s9)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
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
                    pingBearer: d,
                    nickname: e?.data?.user?.nickname,
                    rockstarId: n
                  }),
                  o = {
                    ...a,
                    ...e?.data?.user,
                    crews: r,
                    characters: {
                      gtao: i
                    }
                  };
                s(!1), t(o), v(!0), w(n)
              }
              if (!1 === n && !f) {
                try {
                  await (async e => {
                    let {
                      token: a,
                      tokenPingExpires: t
                    } = e;
                    const n = {
                        method: "POST",
                        body: `fingerprint=${await T().get().then((e=>e))}`,
                        credentials: "include",
                        headers: {
                          "X-Requested-With": "XMLHttpRequest",
                          "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                        }
                      },
                      s = await fetch(E().silentCheck, n);
                    if (200 !== s.status) return void a(!1);
                    const r = await s.json(),
                      i = `${E().gateway}?code=${r}`,
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
                h(!0)
              }!1 === n && f && (p(!0), v(!1), s(!1)), null === e && d()
            })()
          }), [e, u, f]), {
            data: a,
            loading: n,
            loggedIn: m
          }
        };
      var O = t(63480);
      const D = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        z = "user-context",
        U = window?.[z] ?? (window[z] = (0, o.createContext)(D)),
        V = e => {
          let {
            children: a
          } = e;
          const t = P(),
            n = (0, o.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, O.jsx)(U.Provider, {
            value: n,
            children: a
          })
        },
        B = () => (0, o.useContext)(U);
      t(21408);
      var R = t(85720),
        G = t(13557);
      const F = (0, o.createContext)(void 0),
        q = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const n = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, o.useState)([]), [n, s] = (0, o.useState)([]), [r, i] = (0, o.useState)(null), {
                data: l,
                loggedIn: _
              } = B(), {
                currentCharId: c
              } = N(), d = function(e) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
                return (0, o.useMemo)((() => {
                  const n = e?.characters?.[t];
                  return "1" === (n?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
                }), [e, t, a])
              }(l, c), g = (e, n) => {
                const s = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = n ?? {};
                    (0, R.c)({
                      ...e,
                      ...a
                    }), s.push(e)
                  }
                })), t([...a, ...s])
              };
              (0, o.useEffect)((() => {
                if (l && null !== _) {
                  const e = m(l);
                  n.length && e && g(n, e), i(e)
                } else e || n.length && g(n)
              }), [l, _, n]), (0, o.useEffect)((() => {
                const e = n.filter((e => -1 === a.indexOf(e)));
                s(e)
              }), [a]);
              const m = e => {
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
                  gta_plus_active: Boolean(d),
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: n.length ? n.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === _ || !l || !r) {
                    const a = [...n];
                    return a.push({
                      ...e
                    }), s(a)
                  }
                  return (0, R.c)({
                    ...e,
                    ...r
                  })
                }
              }
            }(a),
            s = (0, o.useMemo)((() => n), [n, a]);
          return (0, O.jsx)(F.Provider, {
            value: s,
            children: t
          })
        },
        $ = {
          track: () => null
        },
        H = () => (0, o.useContext)(F) ?? $;
      var W = t(48860),
        J = t.n(W),
        X = t(61772);
      const K = "__MFE_GLOBAL_HOOK__",
        Y = () => {
          const e = window;
          if (e[K]?.history || (() => {
              const e = window;
              e[K]?.history || (e[K] = Object.assign(e[K] || {}, {
                history: (0, X.iU)()
              }))
            })(), e[K]?.history) return e[K].history;
          throw new Error("Browser History has not been initialised")
        };
      var Q = t(37019),
        Z = t(38712),
        ee = t.n(Z),
        ae = t(77328),
        te = t(56372);
      let ne, se, re, ie, oe, le, _e, ce, de, ge, me, ve, ue, pe, fe, he, be = () => "undefined" != typeof window,
        ke = () => ne || be() && (ne = window.gsap) && ne.registerPlugin && ne,
        ye = e => ge.maxScroll(e || re);
      class we {
        constructor(e) {
          se || we.register(ne) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, me && me.kill(), me = this, fe(this);
          let a, t, n, s, r, i, o, l, _, c, d, g, m, v, u, {
              smoothTouch: p,
              onUpdate: f,
              onStop: h,
              smooth: b,
              onFocusIn: k,
              normalizeScroll: y,
              wholePixels: w
            } = e,
            x = this,
            M = e.effectsPrefix || "",
            S = ge.getScrollFunc(re),
            C = 1 === ge.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8,
            N = C && +e.speed || 1,
            j = 0,
            T = 0,
            I = 1,
            E = ue(0),
            A = () => E.update(-j),
            L = {
              y: 0
            },
            P = () => a.style.overflow = "visible",
            O = e => {
              e.update();
              let a = e.getTween();
              a && (a.pause(), a._time = a._dur, a._tTime = a._tDur), v = !1, e.animation.progress(e.progress, !0)
            },
            D = (e, t) => {
              (e !== j && !c || t) && (w && (e = Math.round(e)), C && (a.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", a._gsap.y = e + "px"), T = e - j, j = e, ge.isUpdating || we.isRefreshing || ge.update())
            },
            z = function(e) {
              return arguments.length ? (e < 0 && (e = 0), L.y = -e, v = !0, c ? j = -e : D(-e), ge.isRefreshing ? s.update() : S(e / N), this) : -j
            },
            U = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!ge.isRefreshing) {
                let e = ye(t) * N;
                e < -j && z(e), he.restart(!0)
              }
            })),
            V = e => {
              t.scrollTop = 0, e.target.contains && e.target.contains(t) || k && !1 === k(this, e) || (ge.isInViewport(e.target) || e.target === u || this.scrollTo(e.target, !1, "center center"), u = e.target)
            },
            B = (e, a) => {
              if (e < a.start) return e;
              let t = isNaN(a.ratio) ? 1 : a.ratio,
                n = a.end - a.start,
                s = e - a.start,
                r = a.offset || 0,
                i = a.pins || [],
                o = i.offset || 0,
                l = a._startClamp && a.start <= 0 || a.pins && a.pins.offset ? 0 : a._endClamp && a.end === ye() ? 1 : .5;
              return i.forEach((a => {
                n -= a.distance, a.nativeStart <= e && (s -= a.distance)
              })), o && (s *= (n - o / t) / n), e + (s - r * l) / t - s
            },
            R = (e, a, t) => {
              t || (e.pins.length = e.pins.offset = 0);
              let n, s, r, i, o, l, _, c, d = e.pins,
                g = e.markers;
              for (_ = 0; _ < a.length; _++)
                if (c = a[_], e.trigger && c.trigger && e !== c && (c.trigger === e.trigger || c.pinnedContainer === e.trigger || e.trigger.contains(c.trigger)) && (o = c._startNative || c._startClamp || c.start, l = c._endNative || c._endClamp || c.end, r = B(o, e), i = c.pin && l > 0 ? r + (l - o) : B(l, e), c.setPositions(r, i, !0, (c._startClamp ? Math.max(0, r) : r) - o), c.markerStart && g.push(ne.quickSetter([c.markerStart, c.markerEnd], "y", "px")), c.pin && c.end > 0 && !t)) {
                  if (n = c.end - c.start, s = e._startClamp && c.start < 0, s) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void R(e, a);
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
            G = (e, a) => {
              r.forEach((t => R(t, e, a)))
            },
            F = () => {
              P(), requestAnimationFrame(P), r && (ge.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), r.forEach((e => {
                let a = e._startClamp || e.start,
                  t = e.autoSpeed ? Math.min(ye(), e.end) : a + Math.abs((e.end - a) / e.ratio),
                  n = t - e.end;
                if (a -= n / 2, t -= n / 2, a > t) {
                  let e = a;
                  a = t, t = e
                }
                e._startClamp && a < 0 ? (t = e.ratio < 0 ? ye() : e.end / e.ratio, n = t - e.end, a = 0) : (e.ratio < 0 || e._endClamp && t >= ye()) && (t = ye(), a = e.ratio < 0 || e.ratio > 1 ? 0 : t - (t - e.start) / e.ratio, n = (t - a) * e.ratio - (e.end - e.start)), e.offset = n || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(a, t, !0)
              })), G(ge.sort())), E.reset()
            },
            q = () => ge.addEventListener("refresh", F),
            $ = () => r && r.forEach((e => e.vars.onRefresh(e))),
            H = () => (r && r.forEach((e => e.vars.onRefreshInit(e))), $),
            W = (e, a, t, n) => () => {
              let s = "function" == typeof a ? a(t, n) : a;
              s || 0 === s || (s = n.getAttribute("data-" + M + e) || ("speed" === e ? 1 : 0)), n.setAttribute("data-" + M + e, s);
              let r = "clamp(" === (s + "").substr(0, 6);
              return {
                clamp: r,
                value: r ? s.substr(6, s.length - 7) : s
              }
            },
            J = (e, a, n, s, i) => {
              i = ("function" == typeof i ? i(s, e) : i) || 0;
              let o, l, _, c, d, g, m = W("speed", a, s, e),
                v = W("lag", n, s, e),
                u = ne.getProperty(e, "y"),
                p = e._gsap,
                f = [],
                h = () => {
                  a = m(), n = parseFloat(v().value), o = parseFloat(a.value) || 1, _ = "auto" === a.value, d = _ || l && l._startClamp && l.start <= 0 || f.offset ? 0 : l && l._endClamp && l.end === ye() ? 1 : .5, c && c.kill(), c = n && ne.to(e, {
                    ease: ve,
                    overwrite: !1,
                    y: "+=0",
                    duration: n
                  }), l && (l.ratio = o, l.autoSpeed = _)
                },
                b = () => {
                  p.y = u + "px", p.renderTransform(1), h()
                },
                k = [],
                y = 0,
                w = a => {
                  if (_) {
                    b();
                    let t = ((e, a) => {
                      let t, n, s = e.parentNode || oe,
                        r = e.getBoundingClientRect(),
                        i = s.getBoundingClientRect(),
                        o = i.top - r.top,
                        l = i.bottom - r.bottom,
                        _ = (Math.abs(o) > Math.abs(l) ? o : l) / (1 - a),
                        c = -_ * a;
                      return _ > 0 && (t = i.height / (re.innerHeight + i.height), n = .5 === t ? 2 * i.height : 2 * Math.min(i.height, Math.abs(-_ * t / (2 * t - 1))) * (a || 1), c += a ? -n * a : -n / 2, _ += n), {
                        change: _,
                        offset: c
                      }
                    })(e, de(0, 1, -a.start / (a.end - a.start)));
                    y = t.change, g = t.offset
                  } else g = f.offset || 0, y = (a.end - a.start - g) * (1 - o);
                  f.forEach((e => y -= e.distance * (1 - o))), a.offset = y || .001, a.vars.onUpdate(a), c && c.progress(1)
                };
              return h(), (1 !== o || _ || c) && (l = ge.create({
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
                  let a, t, n, s = u + y * (e.progress - d),
                    r = f.length,
                    i = 0;
                  if (e.offset) {
                    if (r) {
                      for (t = -j, n = e.end; r--;) {
                        if (a = f[r], a.trig.isActive || t >= a.start && t <= a.end) return void(c && (a.trig.progress += a.trig.direction < 0 ? .001 : -.001, a.trig.update(0, 0, 1), c.resetTo("y", parseFloat(p.y), -T, !0), I && c.progress(1)));
                        t > a.end && (i += a.distance), n -= a.distance
                      }
                      s = u + i + y * ((ne.utils.clamp(e.start, e.end, t) - e.start - i) / (n - e.start) - d)
                    }
                    k.length && !_ && k.forEach((e => e(s - i))), o = s + g, s = Math.round(1e5 * o) / 1e5 || 0, c ? (c.resetTo("y", s, -T, !0), I && c.progress(1)) : (p.y = s + "px", p.renderTransform(1))
                  }
                  var o
                }
              }), w(l), ne.core.getCache(l.trigger).stRevert = H, l.startY = u, l.pins = f, l.markers = k, l.ratio = o, l.autoSpeed = _, e.style.willChange = "transform"), l
            };

          function X() {
            return n = a.clientHeight, a.style.overflow = "visible", le.style.height = re.innerHeight + (n - re.innerHeight) / N + "px", n - re.innerHeight
          }
          q(), ge.addEventListener("killAll", q), ne.delayedCall(.5, (() => I = 0)), this.scrollTop = z, this.scrollTo = (e, a, t) => {
            let n = ne.utils.clamp(0, ye(), isNaN(e) ? this.offset(e, t) : +e);
            a ? c ? ne.to(this, {
              duration: C,
              scrollTop: n,
              overwrite: "auto",
              ease: ve
            }) : S(n) : z(n)
          }, this.offset = (e, a) => {
            let t, n = (e = ce(e)[0]).style.cssText,
              s = ge.create({
                trigger: e,
                start: a || "top top"
              });
            return r && (I ? ge.refresh() : G([s], !0)), t = s.start / N, s.kill(!1), e.style.cssText = n, ne.core.getCache(e).uncache = 1, t
          }, this.content = function(e) {
            if (arguments.length) {
              let t = ce(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || le.children[0];
              return t !== a && (a = t, _ = a.getAttribute("style") || "", U && U.observe(a), ne.set(a, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), C || ne.set(a, {
                clearProps: "transform"
              })), this
            }
            return a
          }, this.wrapper = function(e) {
            return arguments.length ? (t = ce(e || "#smooth-wrapper")[0] || (e => {
              let a = ie.querySelector(".ScrollSmoother-wrapper");
              return a || (a = ie.createElement("div"), a.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(a, e), a.appendChild(e)), a
            })(a), l = t.getAttribute("style") || "", X(), ne.set(t, C ? {
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
            (e = ce(e)).forEach((e => {
              let a = r.length;
              for (; a--;) r[a].trigger === e && r[a].kill()
            })), a = a || {};
            let t, n, {
                speed: s,
                lag: i,
                effectsPadding: o
              } = a,
              l = [];
            for (t = 0; t < e.length; t++) n = J(e[t], s, i, t, o), n && l.push(n);
            return r.push(...l), l
          }, this.sections = (e, a) => {
            if (i || (i = []), !e) return i.slice(0);
            let t = ce(e).map((e => ge.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: a => {
                e.style.opacity = a.isActive ? "1" : "0", e.style.pointerEvents = a.isActive ? "all" : "none"
              }
            })));
            return a && a.add ? i.push(...t) : i = t.slice(0), t
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => D(e || 0 === e ? e : j), this.getVelocity = () => E.getVelocity(-j), ge.scrollerProxy(t, {
            scrollTop: z,
            scrollHeight: () => X() && le.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!C,
            content: a,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: re.innerWidth,
              height: re.innerHeight
            })
          }), ge.defaults({
            scroller: t
          });
          let K = ge.getAll().filter((e => e.scroller === re || e.scroller === t));
          K.forEach((e => e.revert(!0, !0))), s = ge.create({
            animation: ne.fromTo(L, {
              y: 0
            }, {
              y: () => -X(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = v;
                  e && (O(s), L.y = j), D(L.y, e), A(), f && !c && f(x)
                }
              }
            }),
            onRefreshInit: e => {
              if (we.isRefreshing) return;
              if (we.isRefreshing = !0, r) {
                let e = ge.getAll().filter((e => !!e.pin));
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
              m = a && a._end > a._dp._time, g = j, L.y = 0, C && (1 === ge.isTouch && (t.style.position = "absolute"), t.scrollTop = 0, 1 === ge.isTouch && (t.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, X() / N), m || O(e), L.y = -S() * N, D(L.y), I || e.animation.progress(ne.utils.clamp(0, 1, g / N / -e.end)), m && (e.progress -= .001, e.update()), we.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: re,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => X() / N,
            onScrubComplete: () => {
              E.reset(), h && h(this)
            },
            scrub: C || !0
          }), this.smooth = function(a) {
            return arguments.length && (C = a || 0, N = C && +e.speed || 1, s.scrubDuration(a)), s.getTween() ? s.getTween().duration() : 0
          }, s.getTween() && (s.getTween().vars.ease = e.ease || ve), this.scrollTrigger = s, e.effects && this.effects(!0 === e.effects ? "[data-" + M + "speed], [data-" + M + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), K.forEach((e => {
            e.vars.scroller = t, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, a) {
            return arguments.length ? (!!c !== e && (e ? (s.getTween() && s.getTween().pause(), S(-j / N), E.reset(), d = ge.normalizeScroll(), d && d.disable(), c = ge.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => z(-j)
            }), c.nested = pe(oe, "wheel,touch,scroll", !0, !1 !== a)) : (c.nested.kill(), c.kill(), c = 0, d && d.enable(), s.progress = (-j / N - s.start) / (s.end - s.start), O(s))), this) : !!c
          }, this.kill = this.revert = () => {
            this.paused(!1), O(s), s.kill();
            let e = (r || []).concat(i || []),
              n = e.length;
            for (; n--;) e[n].kill();
            ge.scrollerProxy(t), ge.removeEventListener("killAll", q), ge.removeEventListener("refresh", F), t.style.cssText = l, a.style.cssText = _;
            let c = ge.defaults({});
            c && c.scroller === t && ge.defaults({
              scroller: re
            }), this.normalizer && ge.normalizeScroll(!1), clearInterval(o), me = null, U && U.disconnect(), le.style.removeProperty("height"), re.removeEventListener("focusin", V)
          }, this.refresh = (e, a) => s.refresh(e, a), y && (this.normalizer = ge.normalizeScroll(!0 === y ? {
            debounce: !0,
            content: !C && a
          } : y)), ge.config(e), "overscrollBehavior" in re.getComputedStyle(le) && ne.set([le, oe], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in re.getComputedStyle(le) && ne.set([le, oe], {
            scrollBehavior: "auto"
          }), re.addEventListener("focusin", V), o = setInterval(A, 250), "loading" === ie.readyState || requestAnimationFrame((() => ge.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return se || (ne = e || ke(), be() && window.document && (re = window, ie = document, oe = ie.documentElement, le = ie.body), ne && (ce = ne.utils.toArray, de = ne.utils.clamp, ve = ne.parseEase("expo"), fe = ne.core.context || function() {}, ge = ne.core.globals().ScrollTrigger, ne.core.globals("ScrollSmoother", we), le && ge && (he = ne.delayedCall(.2, (() => ge.isRefreshing || me && me.refresh())).pause(), _e = [re, ie, oe, le], ue = ge.core._getVelocityProp, pe = ge.core._inputObserver, we.refresh = ge.refresh, se = 1))), se
        }
      }
      we.version = "3.12.2", we.create = e => me && e && me.content() === ce(e.content)[0] ? me : new we(e), we.get = () => me, ke() && ne.registerPlugin(we);
      let xe, Me, Se, Ce, Ne, je, Te, Ie, Ee = () => "undefined" != typeof window,
        Ae = () => xe || Ee() && (xe = window.gsap) && xe.registerPlugin && xe,
        Le = e => "string" == typeof e,
        Pe = e => "function" == typeof e,
        Oe = (e, a) => {
          let t = "x" === a ? "Width" : "Height",
            n = "scroll" + t,
            s = "client" + t;
          return e === Se || e === Ce || e === Ne ? Math.max(Ce[n], Ne[n]) - (Se["inner" + t] || Ce[s] || Ne[s]) : e[n] - e["offset" + t]
        },
        De = (e, a) => {
          let t = "scroll" + ("x" === a ? "Left" : "Top");
          return e === Se && (null != e.pageXOffset ? t = "page" + a.toUpperCase() + "Offset" : e = null != Ce[t] ? Ce : Ne), () => e[t]
        },
        ze = (e, a) => {
          if (!(e = je(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let t = e.getBoundingClientRect(),
            n = !a || a === Se || a === Ne,
            s = n ? {
              top: Ce.clientTop - (Se.pageYOffset || Ce.scrollTop || Ne.scrollTop || 0),
              left: Ce.clientLeft - (Se.pageXOffset || Ce.scrollLeft || Ne.scrollLeft || 0)
            } : a.getBoundingClientRect(),
            r = {
              x: t.left - s.left,
              y: t.top - s.top
            };
          return !n && a && (r.x += De(a, "x")(), r.y += De(a, "y")()), r
        },
        Ue = (e, a, t, n, s) => isNaN(e) || "object" == typeof e ? Le(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + n - s : "max" === e ? Oe(a, t) - s : Math.min(Oe(a, t), ze(e, a)[t] - s) : parseFloat(e) - s,
        Ve = () => {
          xe = Ae(), Ee() && xe && "undefined" != typeof document && document.body && (Se = window, Ne = document.body, Ce = document.documentElement, je = xe.utils.toArray, xe.config({
            autoKillThreshold: 7
          }), Te = xe.config(), Me = 1)
        };
      const Be = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          xe = e, Ve()
        },
        init(e, a, t, n, s) {
          Me || Ve();
          let r = this,
            i = xe.getProperty(e, "scrollSnapType");
          r.isWin = e === Se, r.target = e, r.tween = t, a = ((e, a, t, n) => {
            if (Pe(e) && (e = e(a, t, n)), "object" != typeof e) return Le(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let s, r = {};
              for (s in e) r[s] = "onAutoKill" !== s && Pe(e[s]) ? e[s](a, t, n) : e[s];
              return r
            }
          })(a, n, e, s), r.vars = a, r.autoKill = !!a.autoKill, r.getX = De(e, "x"), r.getY = De(e, "y"), r.x = r.xPrev = r.getX(), r.y = r.yPrev = r.getY(), Ie || (Ie = xe.core.globals().ScrollTrigger), "smooth" === xe.getProperty(e, "scrollBehavior") && xe.set(e, {
            scrollBehavior: "auto"
          }), i && "none" !== i && (r.snap = 1, r.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != a.x ? (r.add(r, "x", r.x, Ue(a.x, e, "x", r.x, a.offsetX || 0), n, s), r._props.push("scrollTo_x")) : r.skipX = 1, null != a.y ? (r.add(r, "y", r.y, Ue(a.y, e, "y", r.y, a.offsetY || 0), n, s), r._props.push("scrollTo_y")) : r.skipY = 1
        },
        render(e, a) {
          let t, n, s, r, i, o = a._pt,
            {
              target: l,
              tween: _,
              autoKill: c,
              xPrev: d,
              yPrev: g,
              isWin: m,
              snap: v,
              snapInline: u
            } = a;
          for (; o;) o.r(e, o.d), o = o._next;
          t = m || !a.skipX ? a.getX() : d, n = m || !a.skipY ? a.getY() : g, s = n - g, r = t - d, i = Te.autoKillThreshold, a.x < 0 && (a.x = 0), a.y < 0 && (a.y = 0), c && (!a.skipX && (r > i || r < -i) && t < Oe(l, "x") && (a.skipX = 1), !a.skipY && (s > i || s < -i) && n < Oe(l, "y") && (a.skipY = 1), a.skipX && a.skipY && (_.kill(), a.vars.onAutoKill && a.vars.onAutoKill.apply(_, a.vars.onAutoKillParams || []))), m ? Se.scrollTo(a.skipX ? t : a.x, a.skipY ? n : a.y) : (a.skipY || (l.scrollTop = a.y), a.skipX || (l.scrollLeft = a.x)), !v || 1 !== e && 0 !== e || (n = l.scrollTop, t = l.scrollLeft, u ? l.style.scrollSnapType = u : l.style.removeProperty("scroll-snap-type"), l.scrollTop = n + 1, l.scrollLeft = t + 1, l.scrollTop = n, l.scrollLeft = t), a.xPrev = a.x, a.yPrev = a.y, Ie && Ie.update()
        },
        kill(e) {
          let a = "scrollTo" === e;
          (a || "scrollTo_x" === e) && (this.skipX = 1), (a || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      Be.max = Oe, Be.getOffset = ze, Be.buildGetter = De, Ae() && xe.registerPlugin(Be);
      let Re, Ge, Fe, qe, $e, He, We, Je, Xe, Ke, Ye, Qe, Ze, ea, aa = () => Re || "undefined" != typeof window && (Re = window.gsap) && Re.registerPlugin && Re,
        ta = 1,
        na = [],
        sa = [],
        ra = [],
        ia = Date.now,
        oa = (e, a) => a,
        la = (e, a) => ~ra.indexOf(e) && ra[ra.indexOf(e) + 1][a],
        _a = e => !!~Ye.indexOf(e),
        ca = (e, a, t, n, s) => e.addEventListener(a, t, {
          passive: !n,
          capture: !!s
        }),
        da = (e, a, t, n) => e.removeEventListener(a, t, !!n),
        ga = "scrollLeft",
        ma = "scrollTop",
        va = () => Qe && Qe.isPressed || sa.cache++,
        ua = (e, a) => {
          let t = n => {
            if (n || 0 === n) {
              ta && (qe.history.scrollRestoration = "manual");
              let a = Qe && Qe.isPressed;
              n = t.v = Math.round(n) || (Qe && Qe.iOS ? 1 : 0), e(n), t.cacheID = sa.cache, a && oa("ss", n)
            } else(a || sa.cache !== t.cacheID || oa("ref")) && (t.cacheID = sa.cache, t.v = e());
            return t.v + t.offset
          };
          return t.offset = 0, e && t
        },
        pa = {
          s: ga,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: ua((function(e) {
            return arguments.length ? qe.scrollTo(e, fa.sc()) : qe.pageXOffset || $e[ga] || He[ga] || We[ga] || 0
          }))
        },
        fa = {
          s: ma,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: pa,
          sc: ua((function(e) {
            return arguments.length ? qe.scrollTo(pa.sc(), e) : qe.pageYOffset || $e[ma] || He[ma] || We[ma] || 0
          }))
        },
        ha = (e, a) => (a && a._ctx && a._ctx.selector || Re.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Re.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        ba = (e, a) => {
          let {
            s: t,
            sc: n
          } = a;
          _a(e) && (e = $e.scrollingElement || He);
          let s = sa.indexOf(e),
            r = n === fa.sc ? 1 : 2;
          !~s && (s = sa.push(e) - 1), sa[s + r] || ca(e, "scroll", va);
          let i = sa[s + r],
            o = i || (sa[s + r] = ua(la(e, t), !0) || (_a(e) ? n : ua((function(a) {
              return arguments.length ? e[t] = a : e[t]
            }))));
          return o.target = e, i || (o.smooth = "smooth" === Re.getProperty(e, "scrollBehavior")), o
        },
        ka = (e, a, t) => {
          let n = e,
            s = e,
            r = ia(),
            i = r,
            o = a || 50,
            l = Math.max(500, 3 * o),
            _ = (e, a) => {
              let l = ia();
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
                c = ia();
              return (e || 0 === e) && e !== n && _(e), r === i || c - i > l ? 0 : (n + (t ? o : -o)) / ((t ? c : r) - a) * 1e3
            }
          }
        },
        ya = (e, a) => (a && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        wa = e => {
          let a = Math.max(...e),
            t = Math.min(...e);
          return Math.abs(a) >= Math.abs(t) ? a : t
        },
        xa = () => {
          Ke = Re.core.globals().ScrollTrigger, Ke && Ke.core && (() => {
            let e = Ke.core,
              a = e.bridge || {},
              t = e._scrollers,
              n = e._proxies;
            t.push(...sa), n.push(...ra), sa = t, ra = n, oa = (e, t) => a[e](t)
          })()
        },
        Ma = e => (Re = e || aa(), Re && "undefined" != typeof document && document.body && (qe = window, $e = document, He = $e.documentElement, We = $e.body, Ye = [qe, $e, He, We], Fe = Re.utils.clamp, ea = Re.core.context || function() {}, Xe = "onpointerenter" in We ? "pointer" : "mouse", Je = Sa.isTouch = qe.matchMedia && qe.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in qe || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ze = Sa.eventTypes = ("ontouchstart" in He ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in He ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => ta = 0), 500), xa(), Ge = 1), Ge);
      pa.op = fa, sa.cache = 0;
      class Sa {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          Ge || Ma(Re) || console.warn("Please gsap.registerPlugin(Observer)"), Ke || xa();
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
            onDragEnd: v,
            onDrag: u,
            onPress: p,
            onRelease: f,
            onRight: h,
            onLeft: b,
            onUp: k,
            onDown: y,
            onChangeX: w,
            onChangeY: x,
            onChange: M,
            onToggleX: S,
            onToggleY: C,
            onHover: N,
            onHoverEnd: j,
            onMove: T,
            ignoreCheck: I,
            isNormalizer: E,
            onGestureStart: A,
            onGestureEnd: L,
            onWheel: P,
            onEnable: O,
            onDisable: D,
            onClick: z,
            scrollSpeed: U,
            capture: V,
            allowClicks: B,
            lockAxis: R,
            onLockAxis: G
          } = e;
          this.target = s = ha(s) || He, this.vars = e, c && (c = Re.utils.toArray(c)), a = a || 1e-9, t = t || 0, d = d || 1, U = U || 1, n = n || "wheel,touch,pointer", i = !1 !== i, r || (r = parseFloat(qe.getComputedStyle(We).lineHeight) || 22);
          let F, q, $, H, W, J, X, K = this,
            Y = 0,
            Q = 0,
            Z = ba(s, pa),
            ee = ba(s, fa),
            ae = Z(),
            te = ee(),
            ne = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === Ze[0],
            se = _a(s),
            re = s.ownerDocument || $e,
            ie = [0, 0, 0],
            oe = [0, 0, 0],
            le = 0,
            _e = () => le = ia(),
            ce = (e, a) => (K.event = e) && c && ~c.indexOf(e.target) || a && ne && "touch" !== e.pointerType || I && I(e, a),
            de = () => {
              let e = K.deltaX = wa(ie),
                t = K.deltaY = wa(oe),
                n = Math.abs(e) >= a,
                s = Math.abs(t) >= a;
              M && (n || s) && M(K, e, t, ie, oe), n && (h && K.deltaX > 0 && h(K), b && K.deltaX < 0 && b(K), w && w(K), S && K.deltaX < 0 != Y < 0 && S(K), Y = K.deltaX, ie[0] = ie[1] = ie[2] = 0), s && (y && K.deltaY > 0 && y(K), k && K.deltaY < 0 && k(K), x && x(K), C && K.deltaY < 0 != Q < 0 && C(K), Q = K.deltaY, oe[0] = oe[1] = oe[2] = 0), (H || $) && (T && T(K), $ && (u(K), $ = !1), H = !1), J && !(J = !1) && G && G(K), W && (P(K), W = !1), F = 0
            },
            ge = (e, a, t) => {
              ie[t] += e, oe[t] += a, K._vx.update(e), K._vy.update(a), i ? F || (F = requestAnimationFrame(de)) : de()
            },
            me = (e, a) => {
              R && !X && (K.axis = X = Math.abs(e) > Math.abs(a) ? "x" : "y", J = !0), "y" !== X && (ie[2] += e, K._vx.update(e, !0)), "x" !== X && (oe[2] += a, K._vy.update(a, !0)), i ? F || (F = requestAnimationFrame(de)) : de()
            },
            ve = e => {
              if (ce(e, 1)) return;
              let a = (e = ya(e, o)).clientX,
                n = e.clientY,
                s = a - K.x,
                r = n - K.y,
                i = K.isDragging;
              K.x = a, K.y = n, (i || Math.abs(K.startX - a) >= t || Math.abs(K.startY - n) >= t) && (u && ($ = !0), i || (K.isDragging = !0), me(s, r), i || m && m(K))
            },
            ue = K.onPress = e => {
              ce(e, 1) || e && e.button || (K.axis = X = null, q.pause(), K.isPressed = !0, e = ya(e), Y = Q = 0, K.startX = K.x = e.clientX, K.startY = K.y = e.clientY, K._vx.reset(), K._vy.reset(), ca(E ? s : re, Ze[1], ve, o, !0), K.deltaX = K.deltaY = 0, p && p(K))
            },
            pe = K.onRelease = e => {
              if (ce(e, 1)) return;
              da(E ? s : re, Ze[1], ve, !0);
              let a = !isNaN(K.y - K.startY),
                t = K.isDragging && (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3),
                n = ya(e);
              !t && a && (K._vx.reset(), K._vy.reset(), o && B && Re.delayedCall(.08, (() => {
                if (ia() - le > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (re.createEvent) {
                  let a = re.createEvent("MouseEvents");
                  a.initMouseEvent("click", !0, !0, qe, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(a)
                }
              }))), K.isDragging = K.isGesturing = K.isPressed = !1, l && !E && q.restart(!0), v && t && v(K), f && f(K, t)
            },
            fe = e => e.touches && e.touches.length > 1 && (K.isGesturing = !0) && A(e, K.isDragging),
            he = () => (K.isGesturing = !1) || L(K),
            be = e => {
              if (ce(e)) return;
              let a = Z(),
                t = ee();
              ge((a - ae) * U, (t - te) * U, 1), ae = a, te = t, l && q.restart(!0)
            },
            ke = e => {
              if (ce(e)) return;
              e = ya(e, o), P && (W = !0);
              let a = (1 === e.deltaMode ? r : 2 === e.deltaMode ? qe.innerHeight : 1) * d;
              ge(e.deltaX * a, e.deltaY * a, 0), l && !E && q.restart(!0)
            },
            ye = e => {
              if (ce(e)) return;
              let a = e.clientX,
                t = e.clientY,
                n = a - K.x,
                s = t - K.y;
              K.x = a, K.y = t, H = !0, (n || s) && me(n, s)
            },
            we = e => {
              K.event = e, N(K)
            },
            xe = e => {
              K.event = e, j(K)
            },
            Me = e => ce(e) || ya(e, o) && z(K);
          q = K._dc = Re.delayedCall(_ || .25, (() => {
            K._vx.reset(), K._vy.reset(), q.pause(), l && l(K)
          })).pause(), K.deltaX = K.deltaY = 0, K._vx = ka(0, 50, !0), K._vy = ka(0, 50, !0), K.scrollX = Z, K.scrollY = ee, K.isDragging = K.isGesturing = K.isPressed = !1, ea(this), K.enable = e => (K.isEnabled || (ca(se ? re : s, "scroll", va), n.indexOf("scroll") >= 0 && ca(se ? re : s, "scroll", be, o, V), n.indexOf("wheel") >= 0 && ca(s, "wheel", ke, o, V), (n.indexOf("touch") >= 0 && Je || n.indexOf("pointer") >= 0) && (ca(s, Ze[0], ue, o, V), ca(re, Ze[2], pe), ca(re, Ze[3], pe), B && ca(s, "click", _e, !1, !0), z && ca(s, "click", Me), A && ca(re, "gesturestart", fe), L && ca(re, "gestureend", he), N && ca(s, Xe + "enter", we), j && ca(s, Xe + "leave", xe), T && ca(s, Xe + "move", ye)), K.isEnabled = !0, e && e.type && ue(e), O && O(K)), K), K.disable = () => {
            K.isEnabled && (na.filter((e => e !== K && _a(e.target))).length || da(se ? re : s, "scroll", va), K.isPressed && (K._vx.reset(), K._vy.reset(), da(E ? s : re, Ze[1], ve, !0)), da(se ? re : s, "scroll", be, V), da(s, "wheel", ke, V), da(s, Ze[0], ue, V), da(re, Ze[2], pe), da(re, Ze[3], pe), da(s, "click", _e, !0), da(s, "click", Me), da(re, "gesturestart", fe), da(re, "gestureend", he), da(s, Xe + "enter", we), da(s, Xe + "leave", xe), da(s, Xe + "move", ye), K.isEnabled = K.isPressed = K.isDragging = !1, D && D(K))
          }, K.kill = K.revert = () => {
            K.disable();
            let e = na.indexOf(K);
            e >= 0 && na.splice(e, 1), Qe === K && (Qe = 0)
          }, na.push(K), E && _a(s) && (Qe = K), K.enable(g)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      Sa.version = "3.12.2", Sa.create = e => new Sa(e), Sa.register = Ma, Sa.getAll = () => na.slice(), Sa.getById = e => na.filter((a => a.vars.id === e))[0], aa() && Re.registerPlugin(Sa);
      let Ca, Na, ja, Ta, Ia, Ea, Aa, La, Pa, Oa, Da, za, Ua, Va, Ba, Ra, Ga, Fa, qa, $a, Ha, Wa, Ja, Xa, Ka, Ya, Qa, Za, et, at, tt, nt, st, rt, it, ot, lt = 1,
        _t = Date.now,
        ct = _t(),
        dt = 0,
        gt = 0,
        mt = (e, a, t) => {
          let n = Nt(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return t["_" + a + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        vt = (e, a) => !a || Nt(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        ut = () => gt && requestAnimationFrame(ut),
        pt = () => Va = 1,
        ft = () => Va = 0,
        ht = e => e,
        bt = e => Math.round(1e5 * e) / 1e5 || 0,
        kt = () => "undefined" != typeof window,
        yt = () => Ca || kt() && (Ca = window.gsap) && Ca.registerPlugin && Ca,
        wt = e => !!~Aa.indexOf(e),
        xt = e => ("Height" === e ? tt : ja["inner" + e]) || Ia["client" + e] || Ea["client" + e],
        Mt = e => la(e, "getBoundingClientRect") || (wt(e) ? () => (zn.width = ja.innerWidth, zn.height = tt, zn) : () => Kt(e)),
        St = (e, a) => {
          let {
            s: t,
            d2: n,
            d: s,
            a: r
          } = a;
          return Math.max(0, (t = "scroll" + n) && (r = la(e, t)) ? r() - Mt(e)()[s] : wt(e) ? (Ia[t] || Ea[t]) - xt(n) : e[t] - e["offset" + n])
        },
        Ct = (e, a) => {
          for (let t = 0; t < qa.length; t += 3)(!a || ~a.indexOf(qa[t + 1])) && e(qa[t], qa[t + 1], qa[t + 2])
        },
        Nt = e => "string" == typeof e,
        jt = e => "function" == typeof e,
        Tt = e => "number" == typeof e,
        It = e => "object" == typeof e,
        Et = (e, a, t) => e && e.progress(a ? 0 : 1) && t && e.pause(),
        At = (e, a) => {
          if (e.enabled) {
            let t = a(e);
            t && t.totalTime && (e.callbackAnimation = t)
          }
        },
        Lt = Math.abs,
        Pt = "left",
        Ot = "right",
        Dt = "bottom",
        zt = "width",
        Ut = "height",
        Vt = "Right",
        Bt = "Left",
        Rt = "Top",
        Gt = "Bottom",
        Ft = "padding",
        qt = "margin",
        $t = "Width",
        Ht = "Height",
        Wt = "px",
        Jt = e => ja.getComputedStyle(e),
        Xt = (e, a) => {
          for (let t in a) t in e || (e[t] = a[t]);
          return e
        },
        Kt = (e, a) => {
          let t = a && "matrix(1, 0, 0, 1, 0, 0)" !== Jt(e)[Ba] && Ca.to(e, {
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
        Yt = (e, a) => {
          let {
            d2: t
          } = a;
          return e["offset" + t] || e["client" + t] || 0
        },
        Qt = e => {
          let a, t = [],
            n = e.labels,
            s = e.duration();
          for (a in n) t.push(n[a] / s);
          return t
        },
        Zt = e => {
          let a = Ca.utils.snap(e),
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
        en = (e, a, t, n) => t.split(",").forEach((t => e(a, t, n))),
        an = (e, a, t, n, s) => e.addEventListener(a, t, {
          passive: !n,
          capture: !!s
        }),
        tn = (e, a, t, n) => e.removeEventListener(a, t, !!n),
        nn = (e, a, t) => {
          (t = t && t.wheelHandler) && (e(a, "wheel", t), e(a, "touchmove", t))
        },
        sn = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        rn = {
          toggleActions: "play",
          anticipatePin: 0
        },
        on = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        ln = (e, a) => {
          if (Nt(e)) {
            let t = e.indexOf("="),
              n = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (n *= a / 100), e = e.substr(0, t - 1)), e = n + (e in on ? on[e] * a : ~e.indexOf("%") ? parseFloat(e) * a / 100 : parseFloat(e) || 0)
          }
          return e
        },
        _n = (e, a, t, n, s, r, i, o) => {
          let {
            startColor: l,
            endColor: _,
            fontSize: c,
            indent: d,
            fontWeight: g
          } = s, m = Ta.createElement("div"), v = wt(t) || "fixed" === la(t, "pinType"), u = -1 !== e.indexOf("scroller"), p = v ? Ea : t, f = -1 !== e.indexOf("start"), h = f ? l : _, b = "border-color:" + h + ";font-size:" + c + ";color:" + h + ";font-weight:" + g + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((u || o) && v ? "fixed;" : "absolute;"), (u || o || !v) && (b += (n === fa ? Ot : Dt) + ":" + (r + parseFloat(d)) + "px;"), i && (b += "box-sizing:border-box;text-align:left;width:" + i.offsetWidth + "px;"), m._isStart = f, m.setAttribute("class", "gsap-marker-" + e + (a ? " marker-" + a : "")), m.style.cssText = b, m.innerText = a || 0 === a ? e + "-" + a : e, p.children[0] ? p.insertBefore(m, p.children[0]) : p.appendChild(m), m._offset = m["offset" + n.op.d2], cn(m, 0, n, f), m
        },
        cn = (e, a, t, n) => {
          let s = {
              display: "block"
            },
            r = t[n ? "os2" : "p2"],
            i = t[n ? "p2" : "os2"];
          e._isFlipped = n, s[t.a + "Percent"] = n ? -100 : 0, s[t.a] = n ? "1px" : 0, s["border" + r + $t] = 1, s["border" + i + $t] = 0, s[t.p] = a + "px", Ca.set(e, s)
        },
        dn = [],
        gn = {},
        mn = () => _t() - dt > 34 && (st || (st = requestAnimationFrame(In))),
        vn = () => {
          (!Ja || !Ja.isPressed || Ja.startX > Ea.clientWidth) && (sa.cache++, Ja ? st || (st = requestAnimationFrame(In)) : In(), dt || kn("scrollStart"), dt = _t())
        },
        un = () => {
          Ya = ja.innerWidth, Ka = ja.innerHeight
        },
        pn = () => {
          sa.cache++, !Ua && !Wa && !Ta.fullscreenElement && !Ta.webkitFullscreenElement && (!Xa || Ya !== ja.innerWidth || Math.abs(ja.innerHeight - Ka) > .25 * ja.innerHeight) && La.restart(!0)
        },
        fn = {},
        hn = [],
        bn = () => tn(qn, "scrollEnd", bn) || Nn(!0),
        kn = e => fn[e] && fn[e].map((e => e())) || hn,
        yn = [],
        wn = e => {
          for (let a = 0; a < yn.length; a += 5)(!e || yn[a + 4] && yn[a + 4].query === e) && (yn[a].style.cssText = yn[a + 1], yn[a].getBBox && yn[a].setAttribute("transform", yn[a + 2] || ""), yn[a + 3].uncache = 1)
        },
        xn = (e, a) => {
          let t;
          for (Ra = 0; Ra < dn.length; Ra++) t = dn[Ra], !t || a && t._ctx !== a || (e ? t.kill(1) : t.revert(!0, !0));
          a && wn(a), a || kn("revert")
        },
        Mn = (e, a) => {
          sa.cache++, (a || !rt) && sa.forEach((e => jt(e) && e.cacheID++ && (e.rec = 0))), Nt(e) && (ja.history.scrollRestoration = et = e)
        },
        Sn = 0,
        Cn = () => {
          Ea.appendChild(at), tt = at.offsetHeight || ja.innerHeight, Ea.removeChild(at)
        },
        Nn = (e, a) => {
          if (dt && !e) return void an(qn, "scrollEnd", bn);
          Cn(), rt = qn.isRefreshing = !0, sa.forEach((e => jt(e) && ++e.cacheID && (e.rec = e())));
          let t = kn("refreshInit");
          $a && qn.sort(), a || xn(), sa.forEach((e => {
            jt(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), dn.slice(0).forEach((e => e.refresh())), dn.forEach(((e, a) => {
            if (e._subPinOffset && e.pin) {
              let a = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                t = e.pin[a];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[a] - t), e.refresh()
            }
          })), dn.forEach((e => {
            let a = St(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > a) && e.setPositions(e.start, Math.max(e.start + 1, a), !0)
          })), t.forEach((e => e && e.render && e.render(-1))), sa.forEach((e => {
            jt(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), Mn(et, 1), La.pause(), Sn++, rt = 2, In(2), dn.forEach((e => jt(e.vars.onRefresh) && e.vars.onRefresh(e))), rt = qn.isRefreshing = !1, kn("refresh")
        },
        jn = 0,
        Tn = 1,
        In = e => {
          if (!rt || 2 === e) {
            qn.isUpdating = !0, ot && ot.update(0);
            let e = dn.length,
              a = _t(),
              t = a - ct >= 50,
              n = e && dn[0].scroll();
            if (Tn = jn > n ? -1 : 1, rt || (jn = n), t && (dt && !Va && a - dt > 200 && (dt = 0, kn("scrollEnd")), Da = ct, ct = a), Tn < 0) {
              for (Ra = e; Ra-- > 0;) dn[Ra] && dn[Ra].update(0, t);
              Tn = 1
            } else
              for (Ra = 0; Ra < e; Ra++) dn[Ra] && dn[Ra].update(0, t);
            qn.isUpdating = !1
          }
          st = 0
        },
        En = [Pt, "top", Dt, Ot, qt + Gt, qt + Vt, qt + Rt, qt + Bt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        An = En.concat([zt, Ut, "boxSizing", "max" + $t, "max" + Ht, "position", qt, Ft, Ft + Rt, Ft + Vt, Ft + Gt, Ft + Bt]),
        Ln = (e, a, t, n) => {
          if (!e._gsap.swappedIn) {
            let s, r = En.length,
              i = a.style,
              o = e.style;
            for (; r--;) s = En[r], i[s] = t[s];
            i.position = "absolute" === t.position ? "absolute" : "relative", "inline" === t.display && (i.display = "inline-block"), o[Dt] = o[Ot] = "auto", i.flexBasis = t.flexBasis || "auto", i.overflow = "visible", i.boxSizing = "border-box", i[zt] = Yt(e, pa) + Wt, i[Ut] = Yt(e, fa) + Wt, i[Ft] = o[qt] = o.top = o[Pt] = "0", On(n), o[zt] = o["max" + $t] = t[zt], o[Ut] = o["max" + Ht] = t[Ut], o[Ft] = t[Ft], e.parentNode !== a && (e.parentNode.insertBefore(a, e), a.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Pn = /([A-Z])/g,
        On = e => {
          if (e) {
            let a, t, n = e.t.style,
              s = e.length,
              r = 0;
            for ((e.t._gsap || Ca.core.getCache(e.t)).uncache = 1; r < s; r += 2) t = e[r + 1], a = e[r], t ? n[a] = t : n[a] && n.removeProperty(a.replace(Pn, "-$1").toLowerCase())
          }
        },
        Dn = e => {
          let a = An.length,
            t = e.style,
            n = [],
            s = 0;
          for (; s < a; s++) n.push(An[s], t[An[s]]);
          return n.t = e, n
        },
        zn = {
          left: 0,
          top: 0
        },
        Un = (e, a, t, n, s, r, i, o, l, _, c, d, g, m) => {
          jt(e) && (e = e(o)), Nt(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? ln("0" + e.substr(3), t) : 0));
          let v, u, p, f = g ? g.time() : 0;
          if (g && g.seek(0), isNaN(e) || (e = +e), Tt(e)) g && (e = Ca.utils.mapRange(g.scrollTrigger.start, g.scrollTrigger.end, 0, d, e)), i && cn(i, t, n, !0);
          else {
            jt(a) && (a = a(o));
            let r, c, d, g, m = (e || "0").split(" ");
            p = ha(a, o) || Ea, r = Kt(p) || {}, r && (r.left || r.top) || "none" !== Jt(p).display || (g = p.style.display, p.style.display = "block", r = Kt(p), g ? p.style.display = g : p.style.removeProperty("display")), c = ln(m[0], r[n.d]), d = ln(m[1] || "0", t), e = r[n.p] - l[n.p] - _ + c + s - d, i && cn(i, d, n, t - d < 20 || i._isStart && d > 20), t -= t - d
          }
          if (m && (o[m] = e || -.001, e < 0 && (e = 0)), r) {
            let a = e + t,
              s = r._isStart;
            v = "scroll" + n.d2, cn(r, a, n, s && a > 20 || !s && (c ? Math.max(Ea[v], Ia[v]) : r.parentNode[v]) <= a + 1), c && (l = Kt(i), c && (r.style[n.op.p] = l[n.op.p] - n.op.m - r._offset + Wt))
          }
          return g && p && (v = Kt(p), g.seek(d), u = Kt(p), g._caScrollDist = v[n.p] - u[n.p], e = e / g._caScrollDist * d), g && g.seek(f), g ? e : Math.round(e)
        },
        Vn = /(webkit|moz|length|cssText|inset)/i,
        Bn = (e, a, t, n) => {
          if (e.parentNode !== a) {
            let s, r, i = e.style;
            if (a === Ea) {
              for (s in e._stOrig = i.cssText, r = Jt(e), r) + s || Vn.test(s) || !r[s] || "string" != typeof i[s] || "0" === s || (i[s] = r[s]);
              i.top = t, i.left = n
            } else i.cssText = e._stOrig;
            Ca.core.getCache(e).uncache = 1, a.appendChild(e)
          }
        },
        Rn = (e, a, t) => {
          let n = a,
            s = n;
          return a => {
            let r = Math.round(e());
            return r !== n && r !== s && Math.abs(r - n) > 3 && Math.abs(r - s) > 3 && (a = r, t && t()), s = n, n = a, a
          }
        },
        Gn = (e, a, t) => {
          let n = {};
          n[a.p] = "+=" + t, Ca.set(e, n)
        },
        Fn = (e, a) => {
          let t = ba(e, a),
            n = "_scroll" + a.p2,
            s = (a, r, i, o, l) => {
              let _ = s.tween,
                c = r.onComplete,
                d = {};
              i = i || t();
              let g = Rn(t, i, (() => {
                _.kill(), s.tween = 0
              }));
              return l = o && l || 0, o = o || a - i, _ && _.kill(), r[n] = a, r.modifiers = d, d[n] = () => g(i + o * _.ratio + l * _.ratio * _.ratio), r.onUpdate = () => {
                sa.cache++, In()
              }, r.onComplete = () => {
                s.tween = 0, c && c.call(_)
              }, _ = s.tween = Ca.to(e, r), _
            };
          return e[n] = t, t.wheelHandler = () => s.tween && s.tween.kill() && (s.tween = 0), an(e, "wheel", t.wheelHandler), qn.isTouch && an(e, "touchmove", t.wheelHandler), s
        };
      class qn {
        constructor(e, a) {
          Na || qn.register(Ca) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Za(this), this.init(e, a)
        }
        init(e, a) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !gt) return void(this.update = this.refresh = this.kill = ht);
          e = Xt(Nt(e) || Tt(e) || e.nodeType ? {
            trigger: e
          } : e, rn);
          let t, n, s, r, i, o, l, _, c, d, g, m, v, u, p, f, h, b, k, y, w, x, M, S, C, N, j, T, I, E, A, L, P, O, D, z, U, V, B, {
              onUpdate: R,
              toggleClass: G,
              id: F,
              onToggle: q,
              onRefresh: $,
              scrub: H,
              trigger: W,
              pin: J,
              pinSpacing: X,
              invalidateOnRefresh: K,
              anticipatePin: Y,
              onScrubComplete: Q,
              onSnapComplete: Z,
              once: ee,
              snap: ae,
              pinReparent: te,
              pinSpacer: ne,
              containerAnimation: se,
              fastScrollEnd: re,
              preventOverlaps: ie
            } = e,
            oe = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? pa : fa,
            le = !H && 0 !== H,
            _e = ha(e.scroller || ja),
            ce = Ca.core.getCache(_e),
            de = wt(_e),
            ge = "fixed" === ("pinType" in e ? e.pinType : la(_e, "pinType") || de && "fixed"),
            me = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            ve = le && e.toggleActions.split(" "),
            ue = "markers" in e ? e.markers : rn.markers,
            pe = de ? 0 : parseFloat(Jt(_e)["border" + oe.p2 + $t]) || 0,
            fe = this,
            he = e.onRefreshInit && (() => e.onRefreshInit(fe)),
            be = ((e, a, t) => {
              let {
                d: n,
                d2: s,
                a: r
              } = t;
              return (r = la(e, "getBoundingClientRect")) ? () => r()[n] : () => (a ? xt(s) : e["client" + s]) || 0
            })(_e, de, oe),
            ke = ((e, a) => !a || ~ra.indexOf(e) ? Mt(e) : () => zn)(_e, de),
            ye = 0,
            we = 0,
            xe = 0,
            Me = ba(_e, oe);
          var Se;
          if (fe._startClamp = fe._endClamp = !1, fe._dir = oe, Y *= 45, fe.scroller = _e, fe.scroll = se ? se.time.bind(se) : Me, r = Me(), fe.vars = e, a = a || e.animation, "refreshPriority" in e && ($a = 1, -9999 === e.refreshPriority && (ot = fe)), ce.tweenScroll = ce.tweenScroll || {
              top: Fn(_e, fa),
              left: Fn(_e, pa)
            }, fe.tweenTo = t = ce.tweenScroll[oe.p], fe.scrubDuration = e => {
              P = Tt(e) && e, P ? L ? L.duration(e) : L = Ca.to(a, {
                ease: "expo",
                totalProgress: "+=0",
                duration: P,
                paused: !0,
                onComplete: () => Q && Q(fe)
              }) : (L && L.progress(1).kill(), L = 0)
            }, a && (a.vars.lazy = !1, a._initted && !fe.isReverted || !1 !== a.vars.immediateRender && !1 !== e.immediateRender && a.duration() && a.render(0, !0, !0), fe.animation = a.pause(), a.scrollTrigger = fe, fe.scrubDuration(H), E = 0, F || (F = a.vars.id)), ae && (It(ae) && !ae.push || (ae = {
              snapTo: ae
            }), "scrollBehavior" in Ea.style && Ca.set(de ? [Ea, Ia] : _e, {
              scrollBehavior: "auto"
            }), sa.forEach((e => jt(e) && e.target === (de ? Ta.scrollingElement || Ia : _e) && (e.smooth = !1))), s = jt(ae.snapTo) ? ae.snapTo : "labels" === ae.snapTo ? (e => a => Ca.utils.snap(Qt(e), a))(a) : "labelsDirectional" === ae.snapTo ? (Se = a, (e, a) => Zt(Qt(Se))(e, a.direction)) : !1 !== ae.directional ? (e, a) => Zt(ae.snapTo)(e, _t() - we < 500 ? 0 : a.direction) : Ca.utils.snap(ae.snapTo), O = ae.duration || {
              min: .1,
              max: 2
            }, O = It(O) ? Oa(O.min, O.max) : Oa(O, O), D = Ca.delayedCall(ae.delay || P / 2 || .1, (() => {
              let e = Me(),
                n = _t() - we < 500,
                r = t.tween;
              if (!(n || Math.abs(fe.getVelocity()) < 10) || r || Va || ye === e) fe.isActive && ye !== e && D.restart(!0);
              else {
                let i = (e - o) / u,
                  _ = a && !le ? a.totalProgress() : i,
                  c = n ? 0 : (_ - A) / (_t() - Da) * 1e3 || 0,
                  d = Ca.utils.clamp(-i, 1 - i, Lt(c / 2) * c / .185),
                  g = i + (!1 === ae.inertia ? 0 : d),
                  m = Oa(0, 1, s(g, fe)),
                  v = Math.round(o + m * u),
                  {
                    onStart: p,
                    onInterrupt: f,
                    onComplete: h
                  } = ae;
                if (e <= l && e >= o && v !== e) {
                  if (r && !r._initted && r.data <= Lt(v - e)) return;
                  !1 === ae.inertia && (d = m - i), t(v, {
                    duration: O(Lt(.185 * Math.max(Lt(g - _), Lt(m - _)) / c / .05 || 0)),
                    ease: ae.ease || "power3",
                    data: Lt(v - e),
                    onInterrupt: () => D.restart(!0) && f && f(fe),
                    onComplete: () => {
                      fe.update(), ye = Me(), E = A = a && !le ? a.totalProgress() : fe.progress, Z && Z(fe), h && h(fe)
                    }
                  }, e, d * u, v - e - d * u), p && p(fe, t.tween)
                }
              }
            })).pause()), F && (gn[F] = fe), W = fe.trigger = ha(W || !0 !== J && J), B = W && W._gsap && W._gsap.stRevert, B && (B = B(fe)), J = !0 === J ? W : ha(J), Nt(G) && (G = {
              targets: W,
              className: G
            }), J && (!1 === X || X === qt || (X = !(!X && J.parentNode && J.parentNode.style && "flex" === Jt(J.parentNode).display) && Ft), fe.pin = J, n = Ca.core.getCache(J), n.spacer ? p = n.pinState : (ne && (ne = ha(ne), ne && !ne.nodeType && (ne = ne.current || ne.nativeElement), n.spacerIsNative = !!ne, ne && (n.spacerState = Dn(ne))), n.spacer = b = ne || Ta.createElement("div"), b.classList.add("pin-spacer"), F && b.classList.add("pin-spacer-" + F), n.pinState = p = Dn(J)), !1 !== e.force3D && Ca.set(J, {
              force3D: !0
            }), fe.spacer = b = n.spacer, I = Jt(J), S = I[X + oe.os2], y = Ca.getProperty(J), w = Ca.quickSetter(J, oe.a, Wt), Ln(J, b, I), h = Dn(J)), ue) {
            m = It(ue) ? Xt(ue, sn) : sn, d = _n("scroller-start", F, _e, oe, m, 0), g = _n("scroller-end", F, _e, oe, m, 0, d), k = d["offset" + oe.op.d2];
            let e = ha(la(_e, "content") || _e);
            _ = this.markerStart = _n("start", F, e, oe, m, k, 0, se), c = this.markerEnd = _n("end", F, e, oe, m, k, 0, se), se && (V = Ca.quickSetter([_, c], oe.a, Wt)), ge || ra.length && !0 === la(_e, "fixedMarkers") || ((e => {
              let a = Jt(e).position;
              e.style.position = "absolute" === a || "fixed" === a ? a : "relative"
            })(de ? Ea : _e), Ca.set([d, g], {
              force3D: !0
            }), N = Ca.quickSetter(d, oe.a, Wt), T = Ca.quickSetter(g, oe.a, Wt))
          }
          if (se) {
            let e = se.vars.onUpdate,
              a = se.vars.onUpdateParams;
            se.eventCallback("onUpdate", (() => {
              fe.update(0, 0, 1), e && e.apply(se, a || [])
            }))
          }
          if (fe.previous = () => dn[dn.indexOf(fe) - 1], fe.next = () => dn[dn.indexOf(fe) + 1], fe.revert = (e, t) => {
              if (!t) return fe.kill(!0);
              let n = !1 !== e || !fe.enabled,
                s = Ua;
              n !== fe.isReverted && (n && (z = Math.max(Me(), fe.scroll.rec || 0), xe = fe.progress, U = a && a.progress()), _ && [_, c, d, g].forEach((e => e.style.display = n ? "none" : "block")), n && (Ua = fe, fe.update(n)), !J || te && fe.isActive || (n ? ((e, a, t) => {
                On(t);
                let n = e._gsap;
                if (n.spacerIsNative) On(n.spacerState);
                else if (e._gsap.swappedIn) {
                  let t = a.parentNode;
                  t && (t.insertBefore(e, a), t.removeChild(a))
                }
                e._gsap.swappedIn = !1
              })(J, b, p) : Ln(J, b, Jt(J), C)), n || fe.update(n), Ua = s, fe.isReverted = n)
            }, fe.refresh = (n, s, m, k) => {
              if ((Ua || !fe.enabled) && !s) return;
              if (J && n && dt) return void an(qn, "scrollEnd", bn);
              !rt && he && he(fe), Ua = fe, t.tween && !m && (t.tween.kill(), t.tween = 0), L && L.pause(), K && a && a.revert({
                kill: !1
              }).invalidate(), fe.isReverted || fe.revert(!0, !0), fe._subPinOffset = !1;
              let w, S, N, T, I, E, A, P, O, V, B, R, G, F = be(),
                q = ke(),
                H = se ? se.duration() : St(_e, oe),
                Y = u <= .01,
                Q = 0,
                Z = k || 0,
                ee = It(m) ? m.end : e.end,
                ae = e.endTrigger || W,
                ne = It(m) ? m.start : e.start || (0 !== e.start && W ? J ? "0 0" : "0 100%" : 0),
                re = fe.pinnedContainer = e.pinnedContainer && ha(e.pinnedContainer, fe),
                ie = W && Math.max(0, dn.indexOf(fe)) || 0,
                ce = ie;
              for (ue && It(m) && (R = Ca.getProperty(d, oe.p), G = Ca.getProperty(g, oe.p)); ce--;) E = dn[ce], E.end || E.refresh(0, 1) || (Ua = fe), A = E.pin, !A || A !== W && A !== J && A !== re || E.isReverted || (V || (V = []), V.unshift(E), E.revert(!0, !0)), E !== dn[ce] && (ie--, ce--);
              for (jt(ne) && (ne = ne(fe)), ne = mt(ne, "start", fe), o = Un(ne, W, F, oe, Me(), _, d, fe, q, pe, ge, H, se, fe._startClamp && "_startClamp") || (J ? -.001 : 0), jt(ee) && (ee = ee(fe)), Nt(ee) && !ee.indexOf("+=") && (~ee.indexOf(" ") ? ee = (Nt(ne) ? ne.split(" ")[0] : "") + ee : (Q = ln(ee.substr(2), F), ee = Nt(ne) ? ne : (se ? Ca.utils.mapRange(0, se.duration(), se.scrollTrigger.start, se.scrollTrigger.end, o) : o) + Q, ae = W)), ee = mt(ee, "end", fe), l = Math.max(o, Un(ee || (ae ? "100% 0" : H), ae, F, oe, Me() + Q, c, g, fe, q, pe, ge, H, se, fe._endClamp && "_endClamp")) || -.001, Q = 0, ce = ie; ce--;) E = dn[ce], A = E.pin, A && E.start - E._pinPush <= o && !se && E.end > 0 && (w = E.end - (fe._startClamp ? Math.max(0, E.start) : E.start), (A === W && E.start - E._pinPush < o || A === re) && isNaN(ne) && (Q += w * (1 - E.progress)), A === J && (Z += w));
              if (o += Q, l += Q, fe._startClamp && (fe._startClamp += Q), fe._endClamp && !rt && (fe._endClamp = l || -.001, l = Math.min(l, St(_e, oe))), u = l - o || (o -= .01) && .001, Y && (xe = Ca.utils.clamp(0, 1, Ca.utils.normalize(o, l, z))), fe._pinPush = Z, _ && Q && (w = {}, w[oe.a] = "+=" + Q, re && (w[oe.p] = "-=" + Me()), Ca.set([_, c], w)), J) w = Jt(J), T = oe === fa, N = Me(), x = parseFloat(y(oe.a)) + Z, !H && l > 1 && (B = (de ? Ta.scrollingElement || Ia : _e).style, B = {
                style: B,
                value: B["overflow" + oe.a.toUpperCase()]
              }, de && "scroll" !== Jt(Ea)["overflow" + oe.a.toUpperCase()] && (B.style["overflow" + oe.a.toUpperCase()] = "scroll")), Ln(J, b, w), h = Dn(J), S = Kt(J, !0), P = ge && ba(_e, T ? pa : fa)(), X && (C = [X + oe.os2, u + Z + Wt], C.t = b, ce = X === Ft ? Yt(J, oe) + u + Z : 0, ce && C.push(oe.d, ce + Wt), On(C), re && dn.forEach((e => {
                e.pin === re && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), ge && Me(z)), ge && (I = {
                top: S.top + (T ? N - o : P) + Wt,
                left: S.left + (T ? P : N - o) + Wt,
                boxSizing: "border-box",
                position: "fixed"
              }, I[zt] = I["max" + $t] = Math.ceil(S.width) + Wt, I[Ut] = I["max" + Ht] = Math.ceil(S.height) + Wt, I[qt] = I[qt + Rt] = I[qt + Vt] = I[qt + Gt] = I[qt + Bt] = "0", I[Ft] = w[Ft], I[Ft + Rt] = w[Ft + Rt], I[Ft + Vt] = w[Ft + Vt], I[Ft + Gt] = w[Ft + Gt], I[Ft + Bt] = w[Ft + Bt], f = ((e, a, t) => {
                let n, s = [],
                  r = e.length,
                  i = t ? 8 : 0;
                for (; i < r; i += 2) n = e[i], s.push(n, n in a ? a[n] : e[i + 1]);
                return s.t = e.t, s
              })(p, I, te), rt && Me(0)), a ? (O = a._initted, Ha(1), a.render(a.duration(), !0, !0), M = y(oe.a) - x + u + Z, j = Math.abs(u - M) > 1, ge && j && f.splice(f.length - 2, 2), a.render(0, !0, !0), O || a.invalidate(!0), a.parent || a.totalTime(a.totalTime()), Ha(0)) : M = u, B && (B.value ? B.style["overflow" + oe.a.toUpperCase()] = B.value : B.style.removeProperty("overflow-" + oe.a));
              else if (W && Me() && !se)
                for (S = W.parentNode; S && S !== Ea;) S._pinOffset && (o -= S._pinOffset, l -= S._pinOffset), S = S.parentNode;
              V && V.forEach((e => e.revert(!1, !0))), fe.start = o, fe.end = l, r = i = rt ? z : Me(), se || rt || (r < z && Me(z), fe.scroll.rec = 0), fe.revert(!1, !0), we = _t(), D && (ye = -1, D.restart(!0)), Ua = 0, a && le && (a._initted || U) && a.progress() !== U && a.progress(U || 0, !0).render(a.time(), !0, !0), (Y || xe !== fe.progress || se) && (a && !le && a.totalProgress(se && o < -.001 && !xe ? Ca.utils.normalize(o, l, 0) : xe, !0), fe.progress = Y || (r - o) / u === xe ? 0 : xe), J && X && (b._pinOffset = Math.round(fe.progress * M)), L && L.invalidate(), isNaN(R) || (R -= Ca.getProperty(d, oe.p), G -= Ca.getProperty(g, oe.p), Gn(d, oe, R), Gn(_, oe, R - (k || 0)), Gn(g, oe, G), Gn(c, oe, G - (k || 0))), Y && !rt && fe.update(), !$ || rt || v || (v = !0, $(fe), v = !1)
            }, fe.getVelocity = () => (Me() - i) / (_t() - Da) * 1e3 || 0, fe.endAnimation = () => {
              Et(fe.callbackAnimation), a && (L ? L.progress(1) : a.paused() ? le || Et(a, fe.direction < 0, 1) : Et(a, a.reversed()))
            }, fe.labelToScroll = e => a && a.labels && (o || fe.refresh() || o) + a.labels[e] / a.duration() * u || 0, fe.getTrailing = e => {
              let a = dn.indexOf(fe),
                t = fe.direction > 0 ? dn.slice(0, a).reverse() : dn.slice(a + 1);
              return (Nt(e) ? t.filter((a => a.vars.preventOverlaps === e)) : t).filter((e => fe.direction > 0 ? e.end <= o : e.start >= l))
            }, fe.update = (e, n, s) => {
              if (se && !s && !e) return;
              let _, c, g, m, v, p, k, y, C = !0 === rt ? z : fe.scroll(),
                I = e ? 0 : (C - o) / u,
                P = I < 0 ? 0 : I > 1 ? 1 : I || 0,
                O = fe.progress;
              if (n && (i = r, r = se ? Me() : C, ae && (A = E, E = a && !le ? a.totalProgress() : P)), Y && !P && J && !Ua && !lt && dt && o < C + (C - i) / (_t() - Da) * Y && (P = 1e-4), P !== O && fe.enabled) {
                if (_ = fe.isActive = !!P && P < 1, c = !!O && O < 1, p = _ !== c, v = p || !!P != !!O, fe.direction = P > O ? 1 : -1, fe.progress = P, v && !Ua && (g = P && !O ? 0 : 1 === P ? 1 : 1 === O ? 2 : 3, le && (m = !p && "none" !== ve[g + 1] && ve[g + 1] || ve[g], y = a && ("complete" === m || "reset" === m || m in a))), ie && (p || y) && (y || H || !a) && (jt(ie) ? ie(fe) : fe.getTrailing(ie).forEach((e => e.endAnimation()))), le || (!L || Ua || lt ? a && a.totalProgress(P, !(!Ua || !we && !e)) : (L._dp._time - L._start !== L._time && L.render(L._dp._time - L._start), L.resetTo ? L.resetTo("totalProgress", P, a._tTime / a._tDur) : (L.vars.totalProgress = P, L.invalidate().restart()))), J)
                  if (e && X && (b.style[X + oe.os2] = S), ge) {
                    if (v) {
                      if (k = !e && P > O && l + 1 > C && C + 1 >= St(_e, oe), te)
                        if (e || !_ && !k) Bn(J, b);
                        else {
                          let e = Kt(J, !0),
                            a = C - o;
                          Bn(J, Ea, e.top + (oe === fa ? a : 0) + Wt, e.left + (oe === fa ? 0 : a) + Wt)
                        } On(_ || k ? f : h), j && P < 1 && _ || w(x + (1 !== P || k ? 0 : M))
                    }
                  } else w(bt(x + M * P));
                ae && !t.tween && !Ua && !lt && D.restart(!0), G && (p || ee && P && (P < 1 || !nt)) && Pa(G.targets).forEach((e => e.classList[_ || ee ? "add" : "remove"](G.className))), R && !le && !e && R(fe), v && !Ua ? (le && (y && ("complete" === m ? a.pause().totalProgress(1) : "reset" === m ? a.restart(!0).pause() : "restart" === m ? a.restart(!0) : a[m]()), R && R(fe)), !p && nt || (q && p && At(fe, q), me[g] && At(fe, me[g]), ee && (1 === P ? fe.kill(!1, 1) : me[g] = 0), p || (g = 1 === P ? 1 : 3, me[g] && At(fe, me[g]))), re && !_ && Math.abs(fe.getVelocity()) > (Tt(re) ? re : 2500) && (Et(fe.callbackAnimation), L ? L.progress(1) : Et(a, "reverse" === m ? 1 : !P, 1))) : le && R && !Ua && R(fe)
              }
              if (T) {
                let e = se ? C / se.duration() * (se._caScrollDist || 0) : C;
                N(e + (d._isFlipped ? 1 : 0)), T(e)
              }
              V && V(-C / se.duration() * (se._caScrollDist || 0))
            }, fe.enable = (e, a) => {
              fe.enabled || (fe.enabled = !0, an(_e, "resize", pn), de || an(_e, "scroll", vn), he && an(qn, "refreshInit", he), !1 !== e && (fe.progress = xe = 0, r = i = ye = Me()), !1 !== a && fe.refresh())
            }, fe.getTween = e => e && t ? t.tween : L, fe.setPositions = (e, a, t, n) => {
              if (se) {
                let t = se.scrollTrigger,
                  n = se.duration(),
                  s = t.end - t.start;
                e = t.start + s * e / n, a = t.start + s * a / n
              }
              fe.refresh(!1, !1, {
                start: vt(e, t && !!fe._startClamp),
                end: vt(a, t && !!fe._endClamp)
              }, n), fe.update()
            }, fe.adjustPinSpacing = e => {
              if (C && e) {
                let a = C.indexOf(oe.d) + 1;
                C[a] = parseFloat(C[a]) + e + Wt, C[1] = parseFloat(C[1]) + e + Wt, On(C)
              }
            }, fe.disable = (e, a) => {
              if (fe.enabled && (!1 !== e && fe.revert(!0, !0), fe.enabled = fe.isActive = !1, a || L && L.pause(), z = 0, n && (n.uncache = 1), he && tn(qn, "refreshInit", he), D && (D.pause(), t.tween && t.tween.kill() && (t.tween = 0)), !de)) {
                let e = dn.length;
                for (; e--;)
                  if (dn[e].scroller === _e && dn[e] !== fe) return;
                tn(_e, "resize", pn), de || tn(_e, "scroll", vn)
              }
            }, fe.kill = (t, s) => {
              fe.disable(t, s), L && !s && L.kill(), F && delete gn[F];
              let r = dn.indexOf(fe);
              r >= 0 && dn.splice(r, 1), r === Ra && Tn > 0 && Ra--, r = 0, dn.forEach((e => e.scroller === fe.scroller && (r = 1))), r || rt || (fe.scroll.rec = 0), a && (a.scrollTrigger = null, t && a.revert({
                kill: !1
              }), s || a.kill()), _ && [_, c, d, g].forEach((e => e.parentNode && e.parentNode.removeChild(e))), ot === fe && (ot = 0), J && (n && (n.uncache = 1), r = 0, dn.forEach((e => e.pin === J && r++)), r || (n.spacer = 0)), e.onKill && e.onKill(fe)
            }, dn.push(fe), fe.enable(!1, !1), B && B(fe), a && a.add && !u) {
            let e = fe.update;
            fe.update = () => {
              fe.update = e, o || l || fe.refresh()
            }, Ca.delayedCall(.01, fe.update), u = .01, o = l = 0
          } else fe.refresh();
          J && (() => {
            if (it !== Sn) {
              let e = it = Sn;
              requestAnimationFrame((() => e === Sn && Nn(!0)))
            }
          })()
        }
        static register(e) {
          return Na || (Ca = e || yt(), kt() && window.document && qn.enable(), Na = gt), Na
        }
        static defaults(e) {
          if (e)
            for (let a in e) rn[a] = e[a];
          return rn
        }
        static disable(e, a) {
          gt = 0, dn.forEach((t => t[a ? "kill" : "disable"](e))), tn(ja, "wheel", vn), tn(Ta, "scroll", vn), clearInterval(za), tn(Ta, "touchcancel", ht), tn(Ea, "touchstart", ht), en(tn, Ta, "pointerdown,touchstart,mousedown", pt), en(tn, Ta, "pointerup,touchend,mouseup", ft), La.kill(), Ct(tn);
          for (let e = 0; e < sa.length; e += 3) nn(tn, sa[e], sa[e + 1]), nn(tn, sa[e], sa[e + 2])
        }
        static enable() {
          if (ja = window, Ta = document, Ia = Ta.documentElement, Ea = Ta.body, Ca && (Pa = Ca.utils.toArray, Oa = Ca.utils.clamp, Za = Ca.core.context || ht, Ha = Ca.core.suppressOverwrites || ht, et = ja.history.scrollRestoration || "auto", jn = ja.pageYOffset, Ca.core.globals("ScrollTrigger", qn), Ea)) {
            gt = 1, at = document.createElement("div"), at.style.height = "100vh", at.style.position = "absolute", Cn(), ut(), Sa.register(Ca), qn.isTouch = Sa.isTouch, Qa = Sa.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), an(ja, "wheel", vn), Aa = [ja, Ta, Ia, Ea], Ca.matchMedia ? (qn.matchMedia = e => {
              let a, t = Ca.matchMedia();
              for (a in e) t.add(a, e[a]);
              return t
            }, Ca.addEventListener("matchMediaInit", (() => xn())), Ca.addEventListener("matchMediaRevert", (() => wn())), Ca.addEventListener("matchMedia", (() => {
              Nn(0, 1), kn("matchMedia")
            })), Ca.matchMedia("(orientation: portrait)", (() => (un(), un)))) : console.warn("Requires GSAP 3.11.0 or later"), un(), an(Ta, "scroll", vn);
            let e, a, t = Ea.style,
              n = t.borderTopStyle,
              s = Ca.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), t.borderTopStyle = "solid", e = Kt(Ea), fa.m = Math.round(e.top + fa.sc()) || 0, pa.m = Math.round(e.left + pa.sc()) || 0, n ? t.borderTopStyle = n : t.removeProperty("border-top-style"), za = setInterval(mn, 250), Ca.delayedCall(.5, (() => lt = 0)), an(Ta, "touchcancel", ht), an(Ea, "touchstart", ht), en(an, Ta, "pointerdown,touchstart,mousedown", pt), en(an, Ta, "pointerup,touchend,mouseup", ft), Ba = Ca.utils.checkPrefix("transform"), An.push(Ba), Na = _t(), La = Ca.delayedCall(.2, Nn).pause(), qa = [Ta, "visibilitychange", () => {
                let e = ja.innerWidth,
                  a = ja.innerHeight;
                Ta.hidden ? (Ga = e, Fa = a) : Ga === e && Fa === a || pn()
              }, Ta, "DOMContentLoaded", Nn, ja, "load", Nn, ja, "resize", pn], Ct(an), dn.forEach((e => e.enable(0, 1))), a = 0; a < sa.length; a += 3) nn(tn, sa[a], sa[a + 1]), nn(tn, sa[a], sa[a + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (nt = !!e.limitCallbacks);
          let a = e.syncInterval;
          a && clearInterval(za) || (za = a) && setInterval(mn, a), "ignoreMobileResize" in e && (Xa = 1 === qn.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ct(tn) || Ct(an, e.autoRefreshEvents || "none"), Wa = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, a) {
          let t = ha(e),
            n = sa.indexOf(t),
            s = wt(t);
          ~n && sa.splice(n, s ? 6 : 2), a && (s ? ra.unshift(ja, a, Ea, a, Ia, a) : ra.unshift(t, a))
        }
        static clearMatchMedia(e) {
          dn.forEach((a => a._ctx && a._ctx.query === e && a._ctx.kill(!0, !0)))
        }
        static isInViewport(e, a, t) {
          let n = (Nt(e) ? ha(e) : e).getBoundingClientRect(),
            s = n[t ? zt : Ut] * a || 0;
          return t ? n.right - s > 0 && n.left + s < ja.innerWidth : n.bottom - s > 0 && n.top + s < ja.innerHeight
        }
        static positionInViewport(e, a, t) {
          Nt(e) && (e = ha(e));
          let n = e.getBoundingClientRect(),
            s = n[t ? zt : Ut],
            r = null == a ? s / 2 : a in on ? on[a] * s : ~a.indexOf("%") ? parseFloat(a) * s / 100 : parseFloat(a) || 0;
          return t ? (n.left + r) / ja.innerWidth : (n.top + r) / ja.innerHeight
        }
        static killAll(e) {
          if (dn.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = fn.killAll || [];
            fn = {}, e.forEach((e => e()))
          }
        }
      }
      qn.version = "3.12.2", qn.saveStyles = e => e ? Pa(e).forEach((e => {
        if (e && e.style) {
          let a = yn.indexOf(e);
          a >= 0 && yn.splice(a, 5), yn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ca.core.getCache(e), Za())
        }
      })) : yn, qn.revert = (e, a) => xn(!e, a), qn.create = (e, a) => new qn(e, a), qn.refresh = e => e ? pn() : (Na || qn.register()) && Nn(!0), qn.update = e => ++sa.cache && In(!0 === e ? 2 : 0), qn.clearScrollMemory = Mn, qn.maxScroll = (e, a) => St(e, a ? pa : fa), qn.getScrollFunc = (e, a) => ba(ha(e), a ? pa : fa), qn.getById = e => gn[e], qn.getAll = () => dn.filter((e => "ScrollSmoother" !== e.vars.id)), qn.isScrolling = () => !!dt, qn.snapDirectional = Zt, qn.addEventListener = (e, a) => {
        let t = fn[e] || (fn[e] = []);
        ~t.indexOf(a) || t.push(a)
      }, qn.removeEventListener = (e, a) => {
        let t = fn[e],
          n = t && t.indexOf(a);
        n >= 0 && t.splice(n, 1)
      }, qn.batch = (e, a) => {
        let t, n = [],
          s = {},
          r = a.interval || .016,
          i = a.batchMax || 1e9,
          o = (e, a) => {
            let t = [],
              n = [],
              s = Ca.delayedCall(r, (() => {
                a(t, n), t = [], n = []
              })).pause();
            return e => {
              t.length || s.restart(!0), t.push(e.trigger), n.push(e), i <= t.length && s.progress(1)
            }
          };
        for (t in a) s[t] = "on" === t.substr(0, 2) && jt(a[t]) && "onRefreshInit" !== t ? o(0, a[t]) : a[t];
        return jt(i) && (i = i(), an(qn, "refresh", (() => i = a.batchMax()))), Pa(e).forEach((e => {
          let a = {};
          for (t in s) a[t] = s[t];
          a.trigger = e, n.push(qn.create(a))
        })), n
      };
      let $n, Hn = (e, a, t, n) => (a > n ? e(n) : a < 0 && e(0), t > n ? (n - a) / (t - a) : t < 0 ? a / (a - t) : 1),
        Wn = (e, a) => {
          !0 === a ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (Sa.isTouch ? " pinch-zoom" : "") : "none", e === Ia && Wn(Ea, a)
        },
        Jn = {
          auto: 1,
          scroll: 1
        },
        Xn = e => {
          let a, {
              event: t,
              target: n,
              axis: s
            } = e,
            r = (t.changedTouches ? t.changedTouches[0] : t).target,
            i = r._gsap || Ca.core.getCache(r),
            o = _t();
          if (!i._isScrollT || o - i._isScrollT > 2e3) {
            for (; r && r !== Ea && (r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth || !Jn[(a = Jt(r)).overflowY] && !Jn[a.overflowX]);) r = r.parentNode;
            i._isScroll = r && r !== n && !wt(r) && (Jn[(a = Jt(r)).overflowY] || Jn[a.overflowX]), i._isScrollT = o
          }(i._isScroll || "x" === s) && (t.stopPropagation(), t._gsapAllow = !0)
        },
        Kn = (e, a, t, n) => Sa.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: a,
          onWheel: n = n && Xn,
          onPress: n,
          onDrag: n,
          onScroll: n,
          onEnable: () => t && an(Ta, Sa.eventTypes[0], Qn, !1, !0),
          onDisable: () => tn(Ta, Sa.eventTypes[0], Qn, !0)
        }),
        Yn = /(input|label|select|textarea)/i,
        Qn = e => {
          let a = Yn.test(e.target.tagName);
          (a || $n) && (e._gsapAllow = !0, $n = a)
        };
      qn.sort = e => dn.sort(e || ((e, a) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (a.start + -1e6 * (a.vars.refreshPriority || 0)))), qn.observe = e => new Sa(e), qn.normalizeScroll = e => {
        if (void 0 === e) return Ja;
        if (!0 === e && Ja) return Ja.enable();
        if (!1 === e) return Ja && Ja.kill();
        let a = e instanceof Sa ? e : (e => {
          It(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let a, t, n, s, r, i, o, l, {
              normalizeScrollX: _,
              momentum: c,
              allowNestedScroll: d,
              onRelease: g
            } = e,
            m = ha(e.target) || Ia,
            v = Ca.core.globals().ScrollSmoother,
            u = v && v.get(),
            p = Qa && (e.content && ha(e.content) || u && !1 !== e.content && !u.smooth() && u.content()),
            f = ba(m, fa),
            h = ba(m, pa),
            b = 1,
            k = (Sa.isTouch && ja.visualViewport ? ja.visualViewport.scale * ja.visualViewport.width : ja.outerWidth) / ja.innerWidth,
            y = 0,
            w = jt(c) ? () => c(a) : () => c || 2.8,
            x = Kn(m, e.type, !0, d),
            M = () => s = !1,
            S = ht,
            C = ht,
            N = () => {
              t = St(m, fa), C = Oa(Qa ? 1 : 0, t), _ && (S = Oa(0, St(m, pa))), n = Sn
            },
            j = () => {
              p._gsap.y = bt(parseFloat(p._gsap.y) + f.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0
            },
            T = () => {
              N(), r.isActive() && r.vars.scrollY > t && (f() > t ? r.progress(1) && f(t) : r.resetTo("scrollY", t))
            };
          return p && Ca.set(p, {
            y: "+=0"
          }), e.ignoreCheck = e => Qa && "touchmove" === e.type && (() => {
            if (s) {
              requestAnimationFrame(M);
              let e = bt(a.deltaY / 2),
                t = C(f.v - e);
              if (p && t !== f.v + f.offset) {
                f.offset = t - f.v;
                let e = bt((parseFloat(p && p._gsap.y) || 0) - f.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", p._gsap.y = e + "px", f.cacheID = sa.cache, In()
              }
              return !0
            }
            f.offset && j(), s = !0
          })() || b > 1.05 && "touchstart" !== e.type || a.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            s = !1;
            let e = b;
            b = bt((ja.visualViewport && ja.visualViewport.scale || 1) / k), r.pause(), e !== b && Wn(m, b > 1.01 || !_ && "x"), i = h(), o = f(), N(), n = Sn
          }, e.onRelease = e.onGestureStart = (e, a) => {
            if (f.offset && j(), a) {
              sa.cache++;
              let a, n, s = w();
              _ && (a = h(), n = a + .05 * s * -e.velocityX / .227, s *= Hn(h, a, n, St(m, pa)), r.vars.scrollX = S(n)), a = f(), n = a + .05 * s * -e.velocityY / .227, s *= Hn(f, a, n, St(m, fa)), r.vars.scrollY = C(n), r.invalidate().duration(s).play(.01), (Qa && r.vars.scrollY >= t || a >= t - 1) && Ca.to({}, {
                onUpdate: T,
                duration: s
              })
            } else l.restart(!0);
            g && g(e)
          }, e.onWheel = () => {
            r._ts && r.pause(), _t() - y > 1e3 && (n = 0, y = _t())
          }, e.onChange = (e, a, t, s, r) => {
            if (Sn !== n && N(), a && _ && h(S(s[2] === a ? i + (e.startX - e.x) : h() + a - s[1])), t) {
              f.offset && j();
              let a = r[2] === t,
                n = a ? o + e.startY - e.y : f() + t - r[1],
                s = C(n);
              a && n !== s && (o += s - n), f(s)
            }(t || a) && In()
          }, e.onEnable = () => {
            Wn(m, !_ && "x"), qn.addEventListener("refresh", T), an(ja, "resize", T), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = h.smooth = !1), x.enable()
          }, e.onDisable = () => {
            Wn(m, !0), tn(ja, "resize", T), qn.removeEventListener("refresh", T), x.kill()
          }, e.lockAxis = !1 !== e.lockAxis, a = new Sa(e), a.iOS = Qa, Qa && !f() && f(1), Qa && Ca.ticker.add(ht), l = a._dc, r = Ca.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: _ ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: Rn(f, f(), (() => r.pause()))
            },
            onUpdate: In,
            onComplete: l.vars.onComplete
          }), a
        })(e);
        return Ja && Ja.target === a.target && Ja.kill(), wt(a.target) && (Ja = a), a
      }, qn.core = {
        _getVelocityProp: ka,
        _inputObserver: Kn,
        _scrollers: sa,
        _proxies: ra,
        bridge: {
          ss: () => {
            dt || kn("scrollStart"), dt = _t()
          },
          ref: () => Ua
        }
      }, yt() && Ca.registerPlugin(qn);
      let Zn = function(e) {
        return e[e.inclusion = 0] = "inclusion", e[e.exclusion = 1] = "exclusion", e
      }({});
      const es = {
          banner_collapsed: [/.*/],
          inclusion: [/gta-online/, /gta-v/, /gta-plus/, /newswire/],
          full_exclusion: [/^\/contact/, /agegate/, /privacy/, /legal/, /ccpa/, /corpinfo/, /cookies/, /^\/gta-online\/license-plates/, /.*\?info=.*/]
        },
        as = {
          banner_collapsed: [/.*/],
          full_exclusion: [/^\/activate/, /^\/settings/, /agegate/, /^\/Error.htm/, /^\/(photo|video|job)\/(rdr2|gtav)\/.*/, /^\/games\/maxpayne3/],
          inclusion: []
        },
        ts = "messaging_banner",
        ns = "grtTKOExpanded",
        ss = te.Expo.easeInOut,
        rs = {
          default: te.Power2.easeInOut,
          takeover: te.Power4.easeInOut,
          parallax: te.Power3.easeInOut,
          intro: ss
        },
        is = (0, i.defineMessages)({
          banner_rockstargames_collapsed_legal_cta_aria_label: {
            defaultMessage: "Collapsed Banner content",
            id: "banner_rockstargames_collapsed_legal_cta_aria_label"
          },
          banner_rockstargames_collapsed_legal_cta_label: {
            defaultMessage: "Learn More",
            id: "banner_rockstargames_collapsed_legal_cta_label"
          },
          banner_rockstargames_collapsed_legal_text: {
            defaultMessage: "Our legal terms are changing Feb. 28, 2024.",
            id: "banner_rockstargames_collapsed_legal_text"
          },
          banner_rockstargames_gift_cta: {
            defaultMessage: "Get a free Sports Car in GTA Online",
            id: "banner_rockstargames_gift_cta"
          },
          banner_rockstargames_gift_text: {
            defaultMessage: "Now until March 18, claim a free Obey 8F Drafter.",
            id: "banner_rockstargames_gift_text"
          }
        }),
        os = (0, o.createContext)(void 0),
        ls = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, o.useState)(!1), [s, r] = (0, o.useState)({}), i = (() => {
            const {
              lsSettings: e,
              mutateLSSettings: a
            } = (0, _.ym)(), {
              pathname: t,
              search: n
            } = (0, G.useLocation)(), s = (0, o.useRef)((0, Q.c)().currentSite?.site === Q.U.socialClub ? as : es), r = () => function(e, a, t) {
              if ((arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zn.exclusion) === Zn.inclusion) {
                if (e?.full_exclusion?.find((e => e.test(a + t)))) return !1;
                let n = !1;
                return e?.inclusion.forEach((e => {
                  e.test(a + t) && (n = !0)
                })), n
              }
              return !e?.full_exclusion?.find((e => e.test(a + t)))
            }(s.current, t, n, Zn.inclusion), i = a => a && !(window?.env?.responseStatusCode && 200 !== window?.env?.responseStatusCode) && !((e, a, t) => e?.banner_collapsed?.some((e => "string" == typeof e ? a === e : e.test(a + t))))(s.current, t, n) && (e?.[ns] ?? !0), [l, c] = (0, o.useState)(r()), [d, g] = (0, o.useState)(i(l)), [m, v] = (0, o.useState)(d || !l), [u, p] = (0, o.useState)(50);
            return (0, o.useEffect)((() => {
              const e = r(),
                a = i(e);
              g(a), c(e)
            }), [t, n, window.env]), (0, o.useEffect)((() => {
              !d && l && v(!1)
            }), [d]), (0, o.useEffect)((() => {
              void 0 === e?.[ns] && a({
                key: ns,
                value: !0
              })
            }), [e]), (0, o.useEffect)((() => {
              e?.[ns] || a({
                key: ns,
                value: d
              })
            }), [d]), (0, o.useEffect)((() => {
              document.documentElement.style.setProperty("--promo-banner-height", l ? `${u}px` : "0px")
            }), [l, u]), {
              doesPageDisplayBanner: l,
              dynPromoBannerHeight: u,
              isExpanded: d,
              isInitialExpansion: m,
              setDoesPageDisplayBanner: c,
              setDynPromoBannerHeight: p,
              setIsExpanded: g
            }
          })(), l = (e, a) => {
            r((t => ({
              ...t,
              [e]: a
            })))
          }, c = () => {
            for (const e in s) Object.hasOwn(s, e) && s[e].reverse()
          };
          (0, o.useEffect)((() => () => {
            c()
          }), [s]);
          const d = (0, o.useMemo)((() => ({
            addTimeline: l,
            isStandalone: t,
            reverseAllTimelines: c,
            setIsStandalone: n,
            timelines: s,
            ...i
          })), [s, l, c, i]);
          return (0, O.jsx)(os.Provider, {
            value: d,
            children: a
          })
        },
        _s = () => {
          const e = (0, o.useContext)(os);
          if (void 0 === e) throw new Error("useBannerContext must be used within a BannerProvider");
          return e
        },
        cs = {
          pillBtn: "rockstargames-modules-core-headeree59f170f61865dec644d9743a9f9827",
          selected: "rockstargames-modules-core-headerfcaa6c03ebc0df26618f5ac129cc54c8",
          collapsedContentBtn: "rockstargames-modules-core-headerff72659d0523b81e876b5e4ad970e70e"
        };
      var ds;

      function gs() {
        return gs = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }, gs.apply(this, arguments)
      }
      const ms = e => o.createElement("svg", gs({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), ds || (ds = o.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M18 6 6 18M6 6l12 12"
        }))),
        vs = (e, a) => {
          e && a ? document.cookie = `${e}=${a}; domain=${us()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${a})`)
        },
        us = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ps = e => {
          const a = `${e}=`,
            t = decodeURIComponent(document.cookie).split(";");
          for (let e = 0; e < t.length; e++) {
            const n = t[e].trim();
            if (0 === n.indexOf(a)) return n.substring(a.length, n.length)
          }
          return null
        },
        fs = {
          pillBtn: "rockstargames-modules-core-headere4a90815371b14f05de04fecb2d8c1eb",
          selected: "rockstargames-modules-core-headerade5c350c770640d033086f23af550c1",
          closeBtn: "rockstargames-modules-core-headerb588b218809238645975d6378a6ab127"
        },
        hs = {
          pillBtn: "rockstargames-modules-core-headerb3081dc159001004dd56029562fa4865",
          selected: "rockstargames-modules-core-headerfa6545582a457024eb45dbeacd0cd3d9",
          banner: "rockstargames-modules-core-headerda4affa10c416366f2e9774716571493",
          collapsedContent: "rockstargames-modules-core-headerc1b5ac79b8fc18c13df09ac526f403c5",
          mobile: "rockstargames-modules-core-headera8fbe40b6302369f465b13c8051cfd50",
          desktop: "rockstargames-modules-core-headerfbcf0c2dbe49fd153b29afb13da1a204",
          removeScroll: "rockstargames-modules-core-headera7a12a09fae265ba6650acfc98e1ed2a",
          expandedContent: "rockstargames-modules-core-headerbc9036ce38a2e76b2980a82ef71191da",
          closeBtn: "rockstargames-modules-core-headerf8794eecc67c703ab163dd997239e452",
          closeBannerBtn: "rockstargames-modules-core-headerf41fc41d12cefb15d277eca1afa9660b",
          actionButtons: "rockstargames-modules-core-headerf44025b61fd35eab18aa562a09f22414"
        };
      te.gsap.registerPlugin(qn, we, Be), te.gsap.config({
        nullTargetWarn: !1
      });
      const bs = e => {
        let {
          variant: a,
          bannerRef: t,
          collapsedContent: n,
          expandedContent: s,
          actionBar: r,
          bannerBgColor: i = "#02234c"
        } = e;
        const {
          pathname: l
        } = (0, G.useLocation)(), {
          windowWidth: c,
          windowHeight: d
        } = (0, _.bk)(), {
          track: g
        } = H(), {
          timelines: m,
          addTimeline: v,
          isExpanded: u,
          isInitialExpansion: p,
          doesPageDisplayBanner: f,
          dynPromoBannerHeight: h
        } = _s(), b = (0, o.useRef)(), k = (0, o.useRef)(null), y = (0, o.useRef)(null), w = (0, o.useRef)(null), x = (0, o.useRef)(null), M = (0, o.useRef)(null);
        (0, o.useEffect)((() => {
          m?.bannerTimeline && (u ? p ? m.bannerTimeline.progress(1) : m.bannerTimeline.play() : u || p || m.bannerTimeline.reverse())
        }), [u, m?.bannerTimeline]), (0, o.useLayoutEffect)((() => {
          b?.current?.invalidate()
        }), [c, d]), (0, o.useLayoutEffect)((() => {
          if ("takeover" !== a) return;
          const e = te.gsap.context((() => {
            m?.bannerTimeline?.progress(0).kill(), f && (b.current = te.gsap.timeline({
              defaults: {
                duration: .8,
                ease: rs.takeover,
                force3D: !0
              },
              onStart: () => {
                g({
                  element_placement: "takeover_banner",
                  event: "takeover_impression"
                })
              },
              paused: !0
            }).fromTo(t?.current, {
              height: h
            }, {
              height: "100vh"
            }).fromTo(k.current, {
              autoAlpha: 1
            }, {
              autoAlpha: 0,
              duration: .5,
              ease: rs.default
            }, "<").fromTo(y.current, {
              autoAlpha: .01,
              pointerEvents: "none",
              scale: 1.075
            }, {
              autoAlpha: 1,
              pointerEvents: "auto",
              scale: 1
            }, "<").fromTo([x.current, w.current], {
              autoAlpha: 0
            }, {
              autoAlpha: 1
            }, "<"), v("bannerTimeline", b?.current))
          }));
          return () => e?.revert()
        }), [f]);
        const S = (0, o.useCallback)((e => {
          const a = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
          e.direction === M?.current || a ? a && e?.animation?.pause() : -1 === e.direction ? e.animation?.reverse() : e.animation?.play();
          const t = "data-show-more-content";
          1 === e.direction ? document.body.setAttribute(t, "") : document.body.removeAttribute(t), M.current = e.direction
        }), [u, m?.bannerTimeline]);
        return (0, o.useEffect)((() => {
          const e = te.gsap.context((() => {
            t?.current && te.gsap.set(t.current, {
              paused: !0,
              scrollTrigger: {
                end: 99999,
                onUpdate: e => {
                  S(e)
                },
                start: "140px"
              }
            })
          }));
          return () => e.revert()
        }), [t?.current]), (0, O.jsx)(ee(), {
          disabled: !u,
          children: (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("div", {
              "data-testid": "banner-content",
              className: hs.banner,
              ref: t,
              style: {
                "--banner-background-color": i
              },
              children: (0, O.jsxs)(ae.RemoveScroll, {
                className: hs.removeScroll,
                allowPinchZoom: !1,
                enabled: !!u,
                children: [n, "takeover" === a && u ? s : null, "takeover" === a && u ? r : null]
              })
            }), (0, O.jsx)("div", {
              ref: x,
              className: hs.siteOverlay
            })]
          })
        })
      };
      bs.CollapsedContent = e => {
        let {
          variant: a,
          label: t,
          children: n
        } = e;
        const {
          track: s
        } = H(), {
          isExpanded: r,
          setIsExpanded: i,
          setDoesPageDisplayBanner: l,
          setDynPromoBannerHeight: _
        } = _s(), c = (0, o.useRef)(null);
        return (0, o.useEffect)((() => {
          _(c?.current?.scrollHeight || 0)
        }), [c?.current?.scrollHeight]), (0, o.useEffect)((() => {
          r ? (te.gsap.to(c?.current, {
            autoAlpha: 0,
            duration: .25
          }), c?.current && (c.current.style.display = "none")) : (te.gsap.to(c?.current, {
            autoAlpha: 1,
            duration: .25
          }), c?.current && (c.current.style.display = "flex")), n || l(!1)
        }), [r, c?.current, n]), "takeover" === a ? (0, O.jsx)("button", {
          "data-testid": "collapsed-content",
          ref: c,
          type: "button",
          className: cs.collapsedContentBtn,
          onClick: () => {
            i(!0), s({
              element_placement: "takeover_banner",
              event: "site_banner_click"
            })
          },
          tabIndex: 0,
          "aria-label": t,
          children: n
        }) : (0, O.jsx)("div", {
          ref: c,
          "data-testid": "collapsed-content",
          className: cs.collapsedContent,
          children: n
        })
      }, bs.ExpandedContent = e => {
        let {
          expandedContentRef: a,
          children: t
        } = e;
        const {
          isExpanded: n
        } = _s();
        return (0, O.jsx)(ee(), {
          disabled: !n,
          className: "rockstargames-modules-core-headerefb36a10a5213e15acec557812fcdde0",
          children: (0, O.jsx)("div", {
            ref: a,
            "data-testid": "expanded-content",
            className: "rockstargames-modules-core-headerfad2835e111ca7eac9b5cc1dc5131e1e",
            children: t
          })
        })
      }, bs.ActionBar = e => {
        let {
          actionBarRef: a,
          children: t
        } = e;
        return (0, O.jsx)("div", {
          ref: a,
          className: "rockstargames-modules-core-headerde481b069636af80c3c21010fc2c69a7",
          children: t
        })
      }, bs.CloseButton = e => {
        let {
          variant: a = "link",
          className: t,
          closeRef: n
        } = e;
        const s = "promo_banner",
          {
            mutateLSSettings: r
          } = (0, _.ym)(),
          {
            track: i
          } = H(),
          {
            timelines: l,
            setIsExpanded: c,
            setDoesPageDisplayBanner: d
          } = _s(),
          g = () => {
            "takeover" === a ? (c(!1), r({
              key: ns,
              value: !1
            }), l.bannerTimeline.reverse(), i({
              element_placement: s,
              event: "banner_close"
            })) : (d(!1), function(e, a) {
              let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              const n = document.cookie.split("; "),
                s = `${e}=`,
                r = n.find((e => e.startsWith(s))),
                i = r?.substring(s.length, r.length);
              return i && !t || vs(e, a), [i, (o = e, e => {
                vs(o, e)
              })];
              var o
            }(ts, "0"), i({
              element_placement: s,
              event: "banner_dismiss"
            }))
          };
        return (0, o.useEffect)((() => {
          const e = e => {
            "Escape" === e.key && g && g()
          };
          return window.addEventListener("keydown", e), () => {
            window.removeEventListener("keydown", e)
          }
        }), [g]), (0, O.jsx)("button", {
          ref: n,
          "data-testid": "close-btn",
          type: "button",
          className: [fs.closeBtn, t || ""].join(" "),
          onClick: g,
          tabIndex: 0,
          "aria-label": "close",
          disabled: !1,
          children: (0, O.jsx)(ms, {})
        })
      };
      const ks = e => {
          let {
            variant: a,
            collapsedContent: t,
            expandedContent: n,
            actionBar: s
          } = e;
          const r = (0, o.useRef)(null);
          return (0, O.jsx)(ls, {
            children: (0, O.jsx)(bs, {
              bannerRef: r,
              variant: a,
              collapsedContent: (0, O.jsxs)(bs.CollapsedContent, {
                variant: a,
                children: ["takeover" !== a ? (0, O.jsx)(bs.CloseButton, {
                  variant: a,
                  className: hs.closeBannerBtn
                }) : null, t]
              }),
              expandedContent: (0, O.jsx)(bs.ExpandedContent, {
                children: n
              }),
              actionBar: (0, O.jsx)(bs.ActionBar, {
                children: s || (0, O.jsx)(bs.CloseButton, {
                  variant: a
                })
              })
            })
          })
        },
        ys = () => {
          const e = (0, i.useIntl)(),
            {
              track: a
            } = H(),
            {
              doesPageDisplayBanner: t,
              setDoesPageDisplayBanner: n
            } = _s(),
            [s, r] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = ps(ts);
            r("0" !== e), n(s)
          }), [s]), (0, O.jsx)("div", {
            className: "rockstargames-modules-core-headerf4577aee7a7d8076cf015c7c41ece124",
            "data-display-banner": t,
            children: (0, O.jsx)("div", {
              className: "rockstargames-modules-core-headerdd989a32390115312a927d25c8275997",
              children: (0, O.jsx)("p", {
                children: (0, O.jsxs)("a", {
                  href: "/gta-online#drafter",
                  className: "rockstargames-modules-core-headerdeb7911bb615e98d9c9c23c9a989dec7",
                  onClick: () => {
                    a({
                      element_placement: "WOC",
                      event: "site_banner_click",
                      text: is.banner_rockstargames_gift_cta.defaultMessage
                    })
                  },
                  children: [e.formatMessage(is.banner_rockstargames_gift_cta), (0, O.jsxs)("svg", {
                    className: "rockstargames-modules-core-headerba26deb776bf1e61a9ff84c8648c2b73",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, O.jsx)("path", {
                      d: "M5 12H19",
                      stroke: "white",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }), (0, O.jsx)("path", {
                      d: "M12 5L19 12L12 19",
                      stroke: "white",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    })]
                  })]
                })
              })
            })
          })
        },
        ws = () => {
          const e = (0, i.useIntl)(),
            {
              doesPageDisplayBanner: a,
              setDoesPageDisplayBanner: t
            } = _s(),
            [n, s] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = ps(ts);
            s("0" !== e), t(n)
          }), [n]), (0, O.jsx)("div", {
            className: "rockstargames-modules-core-headerd093516e0b99523b6d684045015649d9",
            children: (0, O.jsx)("div", {
              className: "rockstargames-modules-core-headercc1270adf96bb0d6b45d871f60391dc3",
              children: (0, O.jsxs)("p", {
                children: [e.formatMessage(is.banner_rockstargames_collapsed_legal_text), (0, O.jsx)("a", {
                  href: "/legal",
                  className: "rockstargames-modules-core-headera1fc5ab96566399a28cbd104605071ce",
                  children: e.formatMessage(is.banner_rockstargames_collapsed_legal_cta_label)
                })]
              })
            })
          })
        },
        xs = e => {
          let {
            variant: a = "link"
          } = e;
          const t = (0, l.wH)(),
            {
              currentSite: n
            } = (0, Q.c)(),
            s = Y(),
            r = n?.site === Q.U.socialClub ? "/" : t;
          let i = (0, O.jsx)(ws, {});
          return i = (0, O.jsx)(ys, {}), (0, O.jsx)(_.a7, {
            children: (0, O.jsx)(J(), {
              basename: r,
              history: s,
              children: (0, O.jsx)(ks, {
                variant: a,
                collapsedContent: i
              })
            })
          })
        },
        Ms = JSON.parse('{"us":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Collapsed Banner content","banner_rockstargames_collapsed_legal_cta_label":"Learn More","banner_rockstargames_collapsed_legal_text":"Our legal terms are changing Feb. 28, 2024.","banner_rockstargames_gift_cta":"Get a free Sports Car in GTA Online","banner_rockstargames_gift_text":"Now until March 18, claim a free Obey 8F Drafter.","accessibility_skip_button":"Skip to main content","games_menu_featured":"Featured Games","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"View All","nav_bully_accomplishments":"Accomplishments","nav_bully_cta_buy_now":"Buy Now","nav_bully_game_overview":"Discover","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Careers on LinkedIn","nav_careers_contact_us":"Contact us","nav_careers_home":"Home","nav_careers_openings":"Openings","nav_cta_get_launcher":"Get Launcher","nav_gta_trilogy_accomplishments":"Accomplishments","nav_gta_trilogy_cta_buy_now":"Buy Now","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Overview","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Buy Now","nav_gtaiv_accomplishments":"Accomplishments","nav_gtaiv_cta_buy_now":"Buy Now","nav_gtaiv_overview":"Discover","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Accomplishments","nav_gtaiveflc_overview":"Overview","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Accomplishments","nav_gtao_browse_crews":"Browse All Crews","nav_gtao_checklist":"Checklist","nav_gtao_community":"Community","nav_gtao_community_series":"Community Series","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Create a Crew","nav_gtao_cta_buy_now":"Buy Now","nav_gtao_discover":"Discover","nav_gtao_emblem_editor":"Emblem Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Browse All Jobs","nav_gtao_jobs_playlists":"Playlists","nav_gtao_license_plate_creator":"License Plate Creator","nav_gtao_missions":"Missions","nav_gtao_my_character":"My Character","nav_gtao_my_crews":"My Crews","nav_gtao_my_jobs":"My Jobs","nav_gtao_overview":"Overview","nav_gtao_photos":"Photos","nav_gtao_stats":"Stats","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Buy Now","nav_gtav_accomplishments":"Accomplishments","nav_gtav_checklist":"Checklist","nav_gtav_community":"Community","nav_gtav_community_series":"Community Series","nav_gtav_create_crew":"Create a Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Browse All Crews","nav_gtav_cta_buy_now":"Buy Now","nav_gtav_discover":"Discover","nav_gtav_emblem_editor":"Emblem Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Browse All Jobs","nav_gtav_licence_plate_creator":"License Plate Creator","nav_gtav_missions":"Missions","nav_gtav_my_character":"My Character","nav_gtav_my_crews":"My Crews","nav_gtav_my_jobs":"My Jobs","nav_gtav_overview":"Overview","nav_gtav_photos":"Photos","nav_gtav_playlists":"Playlists","nav_gtav_stats":"Stats","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Buy Now","nav_gtavc_discover":"Discover","nav_gtavcs_discover":"Discover","nav_lanoire_accomplishments":"Accomplishments","nav_lanoire_badge_pursuit":"Badge Pursuit","nav_lanoire_case_tracker":"Case Tracker","nav_lanoire_checklist":"Checklist","nav_lanoire_cta_buy_now":"Buy Now","nav_lanoire_official_site":"Official Site","nav_lanoire_overview":"Overview","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progress","nav_lanoire_stats":"Stats","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Buy Now","nav_more_dropdown":"More","nav_mp3_accomplishments":"Accomplishments","nav_mp3_career":"Career","nav_mp3_chapters":"Chapters","nav_mp3_checklist":"Checklist","nav_mp3_checkpoint_challenge":"Checkpoint Challenge","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Buy Now","nav_mp3_featured":"Featured","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Leaderboards","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"News","nav_mp3_ny_minute":"New York Minute","nav_mp3_official_site":"Official Site","nav_mp3_overview":"Overview","nav_mp3_progress":"Progress","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Specifications","nav_mp3_support":"Support","nav_mp3_weapons":"Weapons","nav_opens_in_new_window":"{text} (Link opens in new window)","nav_quick_access_games":"Games","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Accomplishments","nav_rdo_awards":"Awards","nav_rdo_benefits":"Benefits","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Club Rewards","nav_rdo_community":"Community","nav_rdo_competitive_series":"Competitive Series","nav_rdo_cta_buy_now":"Buy Now","nav_rdo_customization":"Customization","nav_rdo_explore":"Explore","nav_rdo_getting_started":"Getting Started","nav_rdo_guides":"Guides","nav_rdo_my_character":"My Character","nav_rdo_overview":"Overview","nav_rdo_photos":"Photos","nav_rdo_posses":"Posses","nav_rdo_posses_free_roam":"Posses and Free Roam","nav_rdo_progress":"Progress","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Rank Unlocks","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Specialist Roles","nav_rdo_story_missions":"Story Missions","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Buy Now","nav_rdr2_accomplishments":"Accomplishments","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Challenges","nav_rdr2_chapters":"Chapters","nav_rdr2_character":"Character","nav_rdr2_compendium":"Compendium","nav_rdr2_cta_buy_now":"Buy Now","nav_rdr2_explore":"Explore","nav_rdr2_gallery":"Gallery","nav_rdr2_locations":"Locations","nav_rdr2_media":"Media","nav_rdr2_music":"Music","nav_rdr2_online":"Online","nav_rdr2_overview":"Overview","nav_rdr2_progress":"Progress","nav_rdr2_stats":"Stats","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"The Van der Linde Gang","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Weaponry","nav_rdr2_wildlife":"Wildlife","nav_rockstargames_home":"Rockstar Games Home","nav_rockstargames_logo":"Click to open menu","nav_rsg_downloads":"Downloads","nav_rsg_games":"Games","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Your search query is too short. Queries must be at least {count} characters long.","nav_search_error_too_short_invalid_chars":"Your search query contains invalid characters ({invalidChars}). Remove these and try again.","nav_support_dashboard":"My Dashboard","nav_support_home":"Home","nav_support_service_status":"Service Status","nav_support_submit_ticket":"Submit a Ticket","nav_tabletennis_cta_buy_now":"Buy Now","nav_undeadnightmare_buy_now":"Buy Now","nav_undeadnightmare_discover":"Discover","nav_undeadnightmare_gallery":"Gallery","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"News","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Specifications","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"View All","quick_access_title":"Rockstar Games","search_action":"Search","search_close_button":"Close Search","search_open_button":"Open Search","search_placeholder":"Search Rockstar Games...","search_target_aria_label":"Search {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Games","search_target_jobs":"Jobs","search_target_posts":"Posts","search_target_user_photos":"User Photos","search_target_user_videos":"User Videos","search_target_users":"Users","search_target_videos":"Videos"},"de":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Inhalt für eingeklapptes Banner","banner_rockstargames_collapsed_legal_cta_label":"Mehr erfahren","banner_rockstargames_collapsed_legal_text":"Unsere rechtlichen Bedingungen ändern sich am 28. Februar 2024.","banner_rockstargames_gift_cta":"Hol dir einen kostenlosen Sportwagen in GTA Online","banner_rockstargames_gift_text":"Hol dir ab sofort bis zum 18. März einen kostenlosen Obey 8F Drafter.","accessibility_skip_button":"Zum Hauptinhalt springen","games_menu_featured":"Ausgewählte Spiele","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Alle anzeigen","nav_bully_accomplishments":"Erfolge","nav_bully_cta_buy_now":"Jetzt kaufen","nav_bully_game_overview":"Entdecken","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Stellenangebote auf LinkedIn","nav_careers_contact_us":"Kontaktiere uns","nav_careers_home":"Startseite","nav_careers_openings":"Stellenangebote","nav_cta_get_launcher":"Launcher herunterladen","nav_gta_trilogy_accomplishments":"Erfolge","nav_gta_trilogy_cta_buy_now":"Jetzt kaufen","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Überblick","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Jetzt kaufen","nav_gtaiv_accomplishments":"Erfolge","nav_gtaiv_cta_buy_now":"Jetzt kaufen","nav_gtaiv_overview":"Entdecken","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Erfolge","nav_gtaiveflc_overview":"Überblick","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Erfolge","nav_gtao_browse_crews":"Alle Crews ansehen","nav_gtao_checklist":"Checkliste","nav_gtao_community":"Community","nav_gtao_community_series":"Community-Serie","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crew erstellen","nav_gtao_cta_buy_now":"Jetzt kaufen","nav_gtao_discover":"Entdecken","nav_gtao_emblem_editor":"Emblem-Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Alle Jobs ansehen","nav_gtao_jobs_playlists":"Spielelisten","nav_gtao_license_plate_creator":"Nummernschild-Editor","nav_gtao_missions":"Missionen","nav_gtao_my_character":"Mein Charakter","nav_gtao_my_crews":"Meine Crews","nav_gtao_my_jobs":"Meine Jobs","nav_gtao_overview":"Überblick","nav_gtao_photos":"Fotos","nav_gtao_stats":"Statistiken","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Jetzt kaufen","nav_gtav_accomplishments":"Erfolge","nav_gtav_checklist":"Checkliste","nav_gtav_community":"Community","nav_gtav_community_series":"Community-Serie","nav_gtav_create_crew":"Crew erstellen","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Alle Crews ansehen","nav_gtav_cta_buy_now":"Jetzt kaufen","nav_gtav_discover":"Entdecken","nav_gtav_emblem_editor":"Emblem-Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Alle Jobs ansehen","nav_gtav_licence_plate_creator":"Nummernschild-Editor","nav_gtav_missions":"Missionen","nav_gtav_my_character":"Mein Charakter","nav_gtav_my_crews":"Meine Crews","nav_gtav_my_jobs":"Meine Jobs","nav_gtav_overview":"Überblick","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Spielelisten","nav_gtav_stats":"Statistiken","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Jetzt kaufen","nav_gtavc_discover":"Entdecken","nav_gtavcs_discover":"Entdecken","nav_lanoire_accomplishments":"Erfolge","nav_lanoire_badge_pursuit":"Jagd nach Abzeichen","nav_lanoire_case_tracker":"Ermittlungsakten","nav_lanoire_checklist":"Checkliste","nav_lanoire_cta_buy_now":"Jetzt kaufen","nav_lanoire_official_site":"Offizielle Seite","nav_lanoire_overview":"Überblick","nav_lanoire_pc_console":"PC/Konsole","nav_lanoire_progress":"Fortschritt","nav_lanoire_stats":"Statistiken","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Jetzt kaufen","nav_more_dropdown":"Mehr","nav_mp3_accomplishments":"Erfolge","nav_mp3_career":"Karriere","nav_mp3_chapters":"Kapitel","nav_mp3_checklist":"Checkliste","nav_mp3_checkpoint_challenge":"Kontrollpunkt-Herausforderung","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Jetzt kaufen","nav_mp3_featured":"Vorgestellt","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Bestenlisten","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Neuigkeiten","nav_mp3_ny_minute":"Eine Minute in New York","nav_mp3_official_site":"Offizielle Seite","nav_mp3_overview":"Überblick","nav_mp3_progress":"Fortschritt","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Spezifikationen","nav_mp3_support":"Support","nav_mp3_weapons":"Waffen","nav_opens_in_new_window":"{text} (Link öffnet ein neues Fenster)","nav_quick_access_games":"Spiele","nav_quick_access_home":"Startseite","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Erfolge","nav_rdo_awards":"Auszeichnungen","nav_rdo_benefits":"Vorteile","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Club-Belohnungen","nav_rdo_community":"Community","nav_rdo_competitive_series":"Wettkampf-Serie","nav_rdo_cta_buy_now":"Jetzt kaufen","nav_rdo_customization":"Individualisierung","nav_rdo_explore":"Entdecken","nav_rdo_getting_started":"Erste Schritte","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mein Charakter","nav_rdo_overview":"Überblick","nav_rdo_photos":"Fotos","nav_rdo_posses":"Trupps","nav_rdo_posses_free_roam":"Trupps und Free Roam","nav_rdo_progress":"Fortschritt","nav_rdo_progression":"Fortschritt","nav_rdo_rank_unlocks":"Rang-Freischaltungen","nav_rdo_roles":"Rollen","nav_rdo_specialist_roles":"Spezialrollen","nav_rdo_story_missions":"Storymissionen","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Jetzt kaufen","nav_rdr2_accomplishments":"Erfolge","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Herausforderungen","nav_rdr2_chapters":"Kapitel","nav_rdr2_character":"Charakter","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Jetzt kaufen","nav_rdr2_explore":"Entdecken","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Schauplätze","nav_rdr2_media":"Medien","nav_rdr2_music":"Musik","nav_rdr2_online":"Online","nav_rdr2_overview":"Überblick","nav_rdr2_progress":"Fortschritt","nav_rdr2_stats":"Statistiken","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"Die Van-der-Linde-Bande","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Waffen","nav_rdr2_wildlife":"Tierwelt","nav_rockstargames_home":"Rockstar-Games-Startseite","nav_rockstargames_logo":"Klicken, um das Menü zu öffnen","nav_rsg_downloads":"Downloads","nav_rsg_games":"Spiele","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Deine Suchanfrage ist zu kurz. Suchbegriffe müssen mindestens {count} Zeichen lang sein.","nav_search_error_too_short_invalid_chars":"Deine Suchanfrage beinhaltet ungültige Zeichen ({invalidChars}). Bitte entferne diese und versuche es erneut.","nav_support_dashboard":"Meine Übersicht","nav_support_home":"Startseite","nav_support_service_status":"Service-Status","nav_support_submit_ticket":"Eine Anfrage einreichen","nav_tabletennis_cta_buy_now":"Jetzt kaufen","nav_undeadnightmare_buy_now":"Jetzt kaufen","nav_undeadnightmare_discover":"Entdecken","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Medien","nav_undeadnightmare_news":"Neuigkeiten","nav_undeadnightmare_ps3_digital":"PS3 – Digital","nav_undeadnightmare_specs":"Spezifikationen","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 – Digital","nav_view_all_games":"Alle anzeigen","quick_access_title":"Rockstar Games","search_action":"Suchen","search_close_button":"Suche schließen","search_open_button":"Suche öffnen","search_placeholder":"Rockstar Games durchsuchen …","search_target_aria_label":"Durchsuche {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Spiele","search_target_jobs":"Jobs","search_target_posts":"Beiträge","search_target_user_photos":"Fotos von Nutzern","search_target_user_videos":"Videos von Nutzern","search_target_users":"Nutzer","search_target_videos":"Videos"},"es":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Contenido de un banner colapsado","banner_rockstargames_collapsed_legal_cta_label":"Más información","banner_rockstargames_collapsed_legal_text":"Nuestras condiciones legales cambian el 28 de febrero de 2024.","banner_rockstargames_gift_cta":"Consigue un coche deportivo gratis en GTA Online","banner_rockstargames_gift_text":"Desde ahora hasta el 18 de marzo, consigue un Obey 8F Drafter.","accessibility_skip_button":"Pasar al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Asistencia técnica","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contacta con nosotros","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Asistencia técnica","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Asistencia técnica","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Asistencia técnica","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_community_series":"Series de la comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de partidas","nav_gtao_license_plate_creator":"Creador de matrículas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Asistencia técnica","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_community_series":"Series de la comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de matrículas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de partidas","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Asistencia técnica","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio web oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Asistencia técnica","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio web oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Asistencia técnica","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una nueva ventana)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Ventajas","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Cuadrillas","nav_rdo_posses_free_roam":"Cuadrillas y Modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles especializados","nav_rdo_story_missions":"Misiones de la historia","nav_rdo_support":"Asistencia técnica","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Asistencia técnica","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Newswire","nav_rsg_store":"Tienda","nav_rsg_support":"Asistencia técnica","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Tu búsqueda es demasiado corta. Las búsquedas deben contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres que no son válidos ({invalidChars}). Quítalos e inténtalo de nuevo.","nav_support_dashboard":"Mi panel","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Asistencia técnica","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","quick_access_title":"Rockstar Games","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Vídeos de usuarios","search_target_users":"Usuarios","search_target_videos":"Vídeos"},"mx":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Contenido de cartel colapsado","banner_rockstargames_collapsed_legal_cta_label":"Más información","banner_rockstargames_collapsed_legal_text":"Nuestros términos legales cambiarán el 28 de febrero de 2024.","banner_rockstargames_gift_cta":"Obtén un coche deportivo gratis en GTA Online","banner_rockstargames_gift_text":"Obtén un Obey 8F Drafter gratis hasta el 18 de marzo.","accessibility_skip_button":"Ir al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Soporte","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contáctanos","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Soporte","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Soporte","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Soporte","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_community_series":"Serie de la comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de juego","nav_gtao_license_plate_creator":"Creador de placas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Soporte","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_community_series":"Serie de la comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de placas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de juego","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Soporte","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Soporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Soporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una ventana nueva)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Canal de noticias","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Beneficios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Clanes","nav_rdo_posses_free_roam":"Clanes y modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles de especialistas","nav_rdo_story_missions":"Misiones narrativas","nav_rdo_support":"Soporte","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Soporte","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Armamento","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Canal de noticias","nav_rsg_store":"Tienda","nav_rsg_support":"Soporte","nav_rsg_videos":"Videos","nav_search_error_too_short":"Tu búsqueda es muy corta. La búsqueda debe contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres no válidos: {invalidChars}. Quítalos de la búsqueda y vuelve a intentarlo.","nav_support_dashboard":"Mi panel de control","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Soporte","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","quick_access_title":"Rockstar Games","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Videos de usuarios","search_target_users":"Usuarios","search_target_videos":"Videos"},"fr":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Contenu de la bannière réduite","banner_rockstargames_collapsed_legal_cta_label":"En savoir plus","banner_rockstargames_collapsed_legal_text":"Nos conditions générales changent le 28 février 2024.","banner_rockstargames_gift_cta":"Obtenez une sportive gratuite dans GTA Online","banner_rockstargames_gift_text":"Jusqu\'au 18 mars, récupérez gratuitement une Obey 8F Drafter.","accessibility_skip_button":"Passer au contenu principal","games_menu_featured":"Jeux à la une","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Voir tout","nav_bully_accomplishments":"Exploits","nav_bully_cta_buy_now":"Acheter maintenant","nav_bully_game_overview":"Découvrir","nav_bully_Overview":"Assistance","nav_bully_videos":"Vidéos","nav_careers_careers_on_linkedin":"Emplois sur LinkedIn","nav_careers_contact_us":"Nous contacter","nav_careers_home":"Accueil","nav_careers_openings":"Postes à pourvoir","nav_cta_get_launcher":"Obtenir le Launcher","nav_gta_trilogy_accomplishments":"Exploits","nav_gta_trilogy_cta_buy_now":"Acheter maintenant","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Vue d\'ensemble","nav_gta_trilogy_support":"Assistance","nav_gta3_cta_buy_now":"Acheter maintenant","nav_gtaiv_accomplishments":"Exploits","nav_gtaiv_cta_buy_now":"Acheter maintenant","nav_gtaiv_overview":"Découvrir","nav_gtaiv_support":"Assistance","nav_gtaiveflc_accomplishments":"Exploits","nav_gtaiveflc_overview":"Vue d\'ensemble","nav_gtaiveflc_support":"Assistance","nav_gtao_accomplishments":"Exploits","nav_gtao_browse_crews":"Parcourir tous les crews","nav_gtao_checklist":"Check-list","nav_gtao_community":"Communauté","nav_gtao_community_series":"Épreuves de la communauté","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Créer un crew","nav_gtao_cta_buy_now":"Acheter maintenant","nav_gtao_discover":"Découvrir","nav_gtao_emblem_editor":"Éditeur d\'emblèmes","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Activités","nav_gtao_jobs_browse_all":"Parcourir toutes les activités","nav_gtao_jobs_playlists":"Listes","nav_gtao_license_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtao_missions":"Missions","nav_gtao_my_character":"Mon personnage","nav_gtao_my_crews":"Mes crews","nav_gtao_my_jobs":"Mes activités","nav_gtao_overview":"Vue d\'ensemble","nav_gtao_photos":"Photos","nav_gtao_stats":"Statistiques","nav_gtao_story":"Histoire","nav_gtao_support":"Assistance","nav_gtao_videos":"Vidéos","nav_gtasanandreas_cta_buy_now":"Acheter maintenant","nav_gtav_accomplishments":"Exploits","nav_gtav_checklist":"Check-list","nav_gtav_community":"Communauté","nav_gtav_community_series":"Épreuves de la communauté","nav_gtav_create_crew":"Créer un crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Parcourir tous les crews","nav_gtav_cta_buy_now":"Acheter maintenant","nav_gtav_discover":"Découvrir","nav_gtav_emblem_editor":"Éditeur d\'emblèmes","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Activités","nav_gtav_jobs_browse_all":"Parcourir toutes les activités","nav_gtav_licence_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtav_missions":"Missions","nav_gtav_my_character":"Mon personnage","nav_gtav_my_crews":"Mes crews","nav_gtav_my_jobs":"Mes activités","nav_gtav_overview":"Vue d\'ensemble","nav_gtav_photos":"Photos","nav_gtav_playlists":"Listes","nav_gtav_stats":"Statistiques","nav_gtav_story":"Histoire","nav_gtav_support":"Assistance","nav_gtav_videos":"Vidéos","nav_gtavc_cta_buy_now":"Acheter maintenant","nav_gtavc_discover":"Découvrir","nav_gtavcs_discover":"Découvrir","nav_lanoire_accomplishments":"Exploits","nav_lanoire_badge_pursuit":"Défi Traque & plaque","nav_lanoire_case_tracker":"Suivi d\'affaires","nav_lanoire_checklist":"Check-list","nav_lanoire_cta_buy_now":"Acheter maintenant","nav_lanoire_official_site":"Site officiel","nav_lanoire_overview":"Vue d\'ensemble","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progression","nav_lanoire_stats":"Statistiques","nav_lanoire_support":"Assistance","nav_lanoire_vr_case_files":"Les enquêtes VR","nav_midnightclubla_buy_now":"Acheter maintenant","nav_more_dropdown":"Plus","nav_mp3_accomplishments":"Exploits","nav_mp3_career":"Carrière","nav_mp3_chapters":"Chapitres","nav_mp3_checklist":"Check-list","nav_mp3_checkpoint_challenge":"Défi points de passage","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Acheter maintenant","nav_mp3_featured":"À la une","nav_mp3_grinds":"Défis","nav_mp3_leaderboards":"Classements","nav_mp3_multiplayer":"Multijoueur","nav_mp3_news":"Actualités","nav_mp3_ny_minute":"Minute new-yorkaise","nav_mp3_official_site":"Site officiel","nav_mp3_overview":"Vue d\'ensemble","nav_mp3_progress":"Progression","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Solo","nav_mp3_specifications":"Configuration","nav_mp3_support":"Assistance","nav_mp3_weapons":"Armes","nav_opens_in_new_window":"{text} (le lien s\'ouvrira dans une nouvelle fenêtre)","nav_quick_access_games":"Jeux","nav_quick_access_home":"Accueil","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Exploits","nav_rdo_awards":"Récompenses","nav_rdo_benefits":"Avantages","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Récompenses du club","nav_rdo_community":"Communauté","nav_rdo_competitive_series":"Séries compétitives","nav_rdo_cta_buy_now":"Acheter maintenant","nav_rdo_customization":"Personnalisation","nav_rdo_explore":"Explorer","nav_rdo_getting_started":"Bien démarrer","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mon personnage","nav_rdo_overview":"Vue d\'ensemble","nav_rdo_photos":"Photos","nav_rdo_posses":"Groupes","nav_rdo_posses_free_roam":"Groupes et mode exploration","nav_rdo_progress":"Progression","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Éléments à déverrouiller","nav_rdo_roles":"Rôles","nav_rdo_specialist_roles":"Rôles spécialisés","nav_rdo_story_missions":"Missions de l\'histoire","nav_rdo_support":"Assistance","nav_rdr_cta_buy_now":"Acheter maintenant","nav_rdr2_accomplishments":"Exploits","nav_rdr2_artwork":"Illustrations","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Défis","nav_rdr2_chapters":"Chapitres","nav_rdr2_character":"Personnage","nav_rdr2_compendium":"Encyclopédie","nav_rdr2_cta_buy_now":"Acheter maintenant","nav_rdr2_explore":"Explorer","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Lieux","nav_rdr2_media":"Média","nav_rdr2_music":"Musique","nav_rdr2_online":"En ligne","nav_rdr2_overview":"Vue d\'ensemble","nav_rdr2_progress":"Progression","nav_rdr2_stats":"Statistiques","nav_rdr2_support":"Assistance","nav_rdr2_van_der_linde_gang":"La bande de Van der Linde","nav_rdr2_videos":"Vidéos","nav_rdr2_weaponry":"Armes","nav_rdr2_wildlife":"Vie sauvage","nav_rockstargames_home":"Accueil Rockstar Games","nav_rockstargames_logo":"Cliquez pour ouvrir le menu","nav_rsg_downloads":"Téléchargements","nav_rsg_games":"Jeux","nav_rsg_newswire":"Newswire","nav_rsg_store":"Boutique","nav_rsg_support":"Assistance","nav_rsg_videos":"Vidéos","nav_search_error_too_short":"Requête trop courte. Votre requête doit comporter au moins {count} caractères.","nav_search_error_too_short_invalid_chars":"Votre requête contient des caractères non valides ({invalidChars}). Veuillez les supprimer et réessayer.","nav_support_dashboard":"Mon tableau de bord","nav_support_home":"Accueil","nav_support_service_status":"État du service","nav_support_submit_ticket":"Envoyer une demande d\'assistance","nav_tabletennis_cta_buy_now":"Acheter maintenant","nav_undeadnightmare_buy_now":"Acheter maintenant","nav_undeadnightmare_discover":"Découvrir","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Infos","nav_undeadnightmare_media":"Média","nav_undeadnightmare_news":"Actualités","nav_undeadnightmare_ps3_digital":"PS3 - Version numérique","nav_undeadnightmare_specs":"Configuration","nav_undeadnightmare_suport":"Assistance","nav_undeadnightmare_videos":"Vidéos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Version numérique","nav_view_all_games":"Voir tout","quick_access_title":"Rockstar Games","search_action":"Rechercher","search_close_button":"Fermer la recherche","search_open_button":"Ouvrir la recherche","search_placeholder":"Rechercher sur Rockstar Games...","search_target_aria_label":"Rechercher {target}","search_target_community":"Communauté","search_target_crews":"Crews","search_target_games":"Jeux","search_target_jobs":"Activités","search_target_posts":"Publications","search_target_user_photos":"Photos d\'utilisateurs","search_target_user_videos":"Vidéos d\'utilisateurs","search_target_users":"Utilisateurs","search_target_videos":"Vidéos"},"it":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Contenuto del banner ridotto","banner_rockstargames_collapsed_legal_cta_label":"Altre informazioni","banner_rockstargames_collapsed_legal_text":"I nostri termini legali sono cambiati il 28 febbraio 2024.","banner_rockstargames_gift_cta":"Ottieni un’auto sportiva gratis in GTA Online","banner_rockstargames_gift_text":"Da ora e fino al 18 marzo, riscatta una Obey 8F Drafter gratis.","accessibility_skip_button":"Vai ai contenuti principali","games_menu_featured":"Giochi in evidenza","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Visualizza tutto","nav_bully_accomplishments":"Premi","nav_bully_cta_buy_now":"Acquista ora","nav_bully_game_overview":"Scopri","nav_bully_Overview":"Supporto","nav_bully_videos":"Video","nav_careers_careers_on_linkedin":"Carriere su LinkedIn","nav_careers_contact_us":"Contattaci","nav_careers_home":"Home","nav_careers_openings":"Possibilità di impiego","nav_cta_get_launcher":"Ottieni il launcher","nav_gta_trilogy_accomplishments":"Premi","nav_gta_trilogy_cta_buy_now":"Acquista ora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Panoramica","nav_gta_trilogy_support":"Supporto","nav_gta3_cta_buy_now":"Acquista ora","nav_gtaiv_accomplishments":"Premi","nav_gtaiv_cta_buy_now":"Acquista ora","nav_gtaiv_overview":"Scopri","nav_gtaiv_support":"Supporto","nav_gtaiveflc_accomplishments":"Premi","nav_gtaiveflc_overview":"Panoramica","nav_gtaiveflc_support":"Supporto","nav_gtao_accomplishments":"Premi","nav_gtao_browse_crews":"Esplora le crew","nav_gtao_checklist":"Elenco 100%","nav_gtao_community":"Comunità","nav_gtao_community_series":"Serie della comunità","nav_gtao_crews":"Crew","nav_gtao_crews_create":"Crea una crew","nav_gtao_cta_buy_now":"Acquista ora","nav_gtao_discover":"Scopri","nav_gtao_emblem_editor":"Editor simboli","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guide","nav_gtao_jobs":"Attività","nav_gtao_jobs_browse_all":"Esplora le attività","nav_gtao_jobs_playlists":"Elenchi partite","nav_gtao_license_plate_creator":"Creatore di targhe","nav_gtao_missions":"Missioni","nav_gtao_my_character":"Il mio personaggio","nav_gtao_my_crews":"Le mie crew","nav_gtao_my_jobs":"Le mie attività","nav_gtao_overview":"Panoramica","nav_gtao_photos":"Foto","nav_gtao_stats":"Statistiche","nav_gtao_story":"Storia","nav_gtao_support":"Supporto","nav_gtao_videos":"Video","nav_gtasanandreas_cta_buy_now":"Acquista ora","nav_gtav_accomplishments":"Premi","nav_gtav_checklist":"Elenco 100%","nav_gtav_community":"Comunità","nav_gtav_community_series":"Serie della comunità","nav_gtav_create_crew":"Crea una crew","nav_gtav_crews":"Crew","nav_gtav_crews_browse_all":"Esplora le crew","nav_gtav_cta_buy_now":"Acquista ora","nav_gtav_discover":"Scopri","nav_gtav_emblem_editor":"Editor simboli","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guide","nav_gtav_jobs":"Attività","nav_gtav_jobs_browse_all":"Esplora le attività","nav_gtav_licence_plate_creator":"Creatore di targhe","nav_gtav_missions":"Missioni","nav_gtav_my_character":"Il mio personaggio","nav_gtav_my_crews":"Le mie crew","nav_gtav_my_jobs":"Le mie attività","nav_gtav_overview":"Panoramica","nav_gtav_photos":"Foto","nav_gtav_playlists":"Elenchi partite","nav_gtav_stats":"Statistiche","nav_gtav_story":"Storia","nav_gtav_support":"Supporto","nav_gtav_videos":"Video","nav_gtavc_cta_buy_now":"Acquista ora","nav_gtavc_discover":"Scopri","nav_gtavcs_discover":"Scopri","nav_lanoire_accomplishments":"Premi","nav_lanoire_badge_pursuit":"Ricerca dei distintivi","nav_lanoire_case_tracker":"Registro dei casi","nav_lanoire_checklist":"Elenco 100%","nav_lanoire_cta_buy_now":"Acquista ora","nav_lanoire_official_site":"Sito ufficiale","nav_lanoire_overview":"Panoramica","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Statistiche","nav_lanoire_support":"Supporto","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Acquista ora","nav_more_dropdown":"Altro","nav_mp3_accomplishments":"Premi","nav_mp3_career":"Carriera","nav_mp3_chapters":"Capitoli","nav_mp3_checklist":"Elenco 100%","nav_mp3_checkpoint_challenge":"Sfida a checkpoint","nav_mp3_crews":"Crew","nav_mp3_cta_buy_now":"Acquista ora","nav_mp3_featured":"In evidenza","nav_mp3_grinds":"Sgobbate","nav_mp3_leaderboards":"Classifiche","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Novità","nav_mp3_ny_minute":"Ultimo respiro","nav_mp3_official_site":"Sito ufficiale","nav_mp3_overview":"Panoramica","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Sfida a punti","nav_mp3_singleplayer":"Giocatore singolo","nav_mp3_specifications":"Requisiti","nav_mp3_support":"Supporto","nav_mp3_weapons":"Armi","nav_opens_in_new_window":"{text} (Il link si apre in una nuova finestra)","nav_quick_access_games":"Giochi","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Premi","nav_rdo_awards":"Ricompense","nav_rdo_benefits":"Vantaggi","nav_rdo_catalogue":"Catalogo","nav_rdo_club_rewards":"Ricompense del club","nav_rdo_community":"Comunità","nav_rdo_competitive_series":"Serie competitive","nav_rdo_cta_buy_now":"Acquista ora","nav_rdo_customization":"Personalizzazione","nav_rdo_explore":"Esplora","nav_rdo_getting_started":"Come iniziare","nav_rdo_guides":"Guide","nav_rdo_my_character":"Il mio personaggio","nav_rdo_overview":"Panoramica","nav_rdo_photos":"Foto","nav_rdo_posses":"Posse","nav_rdo_posses_free_roam":"Posse e Free Roam","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressione","nav_rdo_rank_unlocks":"Sbloccabili con rango","nav_rdo_roles":"Ruoli","nav_rdo_specialist_roles":"Ruoli specializzati","nav_rdo_story_missions":"Missioni della storia","nav_rdo_support":"Supporto","nav_rdr_cta_buy_now":"Acquista ora","nav_rdr2_accomplishments":"Premi","nav_rdr2_artwork":"Illustrazioni","nav_rdr2_catalogue":"Catalogo","nav_rdr2_challenges":"Sfide","nav_rdr2_chapters":"Capitoli","nav_rdr2_character":"Personaggio","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Acquista ora","nav_rdr2_explore":"Esplora","nav_rdr2_gallery":"Galleria","nav_rdr2_locations":"Luoghi","nav_rdr2_media":"Contenuti multimediali","nav_rdr2_music":"Musica","nav_rdr2_online":"Online","nav_rdr2_overview":"Panoramica","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Statistiche","nav_rdr2_support":"Supporto","nav_rdr2_van_der_linde_gang":"La banda di Van der Linde","nav_rdr2_videos":"Video","nav_rdr2_weaponry":"Arsenale","nav_rdr2_wildlife":"Fauna selvatica","nav_rockstargames_home":"Home Rockstar Games","nav_rockstargames_logo":"Clicca per aprire il menu","nav_rsg_downloads":"Download","nav_rsg_games":"Giochi","nav_rsg_newswire":"Newswire","nav_rsg_store":"Negozio","nav_rsg_support":"Supporto","nav_rsg_videos":"Video","nav_search_error_too_short":"La tua ricerca è troppo corta. Le ricerche devono contenere almeno {count} caratteri.","nav_search_error_too_short_invalid_chars":"La tua ricerca contiene dei caratteri non validi ({invalidChars}). Rimuovili e riprova.","nav_support_dashboard":"La mia dashboard","nav_support_home":"Home","nav_support_service_status":"Stato del servizio","nav_support_submit_ticket":"Invia un ticket","nav_tabletennis_cta_buy_now":"Acquista ora","nav_undeadnightmare_buy_now":"Acquista ora","nav_undeadnightmare_discover":"Scopri","nav_undeadnightmare_gallery":"Galleria","nav_undeadnightmare_info":"Informazioni","nav_undeadnightmare_media":"Contenuti multimediali","nav_undeadnightmare_news":"Novità","nav_undeadnightmare_ps3_digital":"PS3 - Digitale","nav_undeadnightmare_specs":"Requisiti","nav_undeadnightmare_suport":"Supporto","nav_undeadnightmare_videos":"Video","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digitale","nav_view_all_games":"Visualizza tutto","quick_access_title":"Rockstar Games","search_action":"Cerca","search_close_button":"Chiudi ricerca","search_open_button":"Apri ricerca","search_placeholder":"Cerca in Rockstar Games...","search_target_aria_label":"Cerca {target}","search_target_community":"Comunità","search_target_crews":"Crew","search_target_games":"Giochi","search_target_jobs":"Attività","search_target_posts":"Post","search_target_user_photos":"Foto utente","search_target_user_videos":"Video utente","search_target_users":"Utenti","search_target_videos":"Video"},"jp":{"banner_rockstargames_collapsed_legal_cta_aria_label":"折りたたみ可能バナーコンテンツ","banner_rockstargames_collapsed_legal_cta_label":"詳細を閲覧","banner_rockstargames_collapsed_legal_text":"2024年2月28日に利用規約が変更されます","banner_rockstargames_gift_cta":"「GTAオンライン」でスポーツカーを無料で受け取ろう","banner_rockstargames_gift_text":"3月18日までオベイ 8Fドラフターが無料","accessibility_skip_button":"メインコンテンツまでスキップ","games_menu_featured":"注目のゲーム","games_menu_gta_online":"GTAオンライン","games_menu_gta_trilogy":"グランド・セフト・オート：トリロジー","games_menu_gta_v":"グランド・セフト・オートV","games_menu_rdr_2":"レッド・デッド・リデンプション2","games_menu_rdr_online":"レッド・デッド・オンライン","games_menu_view_all":"全て表示","nav_bully_accomplishments":"実績","nav_bully_cta_buy_now":"今すぐ購入","nav_bully_game_overview":"概要","nav_bully_Overview":"サポート","nav_bully_videos":"ビデオ","nav_careers_careers_on_linkedin":"LinkedInキャリア","nav_careers_contact_us":"お問い合せ","nav_careers_home":"ホーム","nav_careers_openings":"求人","nav_cta_get_launcher":"Launcherを入手","nav_gta_trilogy_accomplishments":"実績","nav_gta_trilogy_cta_buy_now":"今すぐ購入","nav_gta_trilogy_gta3":"グランド・セフト・オートIII","nav_gta_trilogy_gtasa":"グランド・セフト・オート：サンアンドレアス","nav_gta_trilogy_gtavc":"グランド・セフト・オート：バイスシティ","nav_gta_trilogy_overview":"概要","nav_gta_trilogy_support":"サポート","nav_gta3_cta_buy_now":"今すぐ購入","nav_gtaiv_accomplishments":"実績","nav_gtaiv_cta_buy_now":"今すぐ購入","nav_gtaiv_overview":"概要","nav_gtaiv_support":"サポート","nav_gtaiveflc_accomplishments":"実績","nav_gtaiveflc_overview":"概要","nav_gtaiveflc_support":"サポート","nav_gtao_accomplishments":"実績","nav_gtao_browse_crews":"全てのクルーを見る","nav_gtao_checklist":"チェックリスト","nav_gtao_community":"コミュニティ","nav_gtao_community_series":"コミュニティシリーズ","nav_gtao_crews":"クルー","nav_gtao_crews_create":"クルーを作成","nav_gtao_cta_buy_now":"今すぐ購入","nav_gtao_discover":"概要","nav_gtao_emblem_editor":"エンブレム・エディター","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTAオンライン","nav_gtao_guides":"ガイド","nav_gtao_jobs":"ジョブ","nav_gtao_jobs_browse_all":"全てのジョブを見る","nav_gtao_jobs_playlists":"プレイリスト","nav_gtao_license_plate_creator":"ナンバープレートクリエイター","nav_gtao_missions":"ミッション","nav_gtao_my_character":"自分のキャラクター","nav_gtao_my_crews":"自分のクルー","nav_gtao_my_jobs":"マイ・ジョブ","nav_gtao_overview":"概要","nav_gtao_photos":"写真","nav_gtao_stats":"ステータス","nav_gtao_story":"ストーリー","nav_gtao_support":"サポート","nav_gtao_videos":"ビデオ","nav_gtasanandreas_cta_buy_now":"今すぐ購入","nav_gtav_accomplishments":"実績","nav_gtav_checklist":"チェックリスト","nav_gtav_community":"コミュニティ","nav_gtav_community_series":"コミュニティシリーズ","nav_gtav_create_crew":"クルーを作成","nav_gtav_crews":"クルー","nav_gtav_crews_browse_all":"全てのクルーを見る","nav_gtav_cta_buy_now":"今すぐ購入","nav_gtav_discover":"概要","nav_gtav_emblem_editor":"エンブレム・エディター","nav_gtav_gta_online":"GTAオンライン","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"ガイド","nav_gtav_jobs":"ジョブ","nav_gtav_jobs_browse_all":"全てのジョブを見る","nav_gtav_licence_plate_creator":"ナンバープレートクリエイター","nav_gtav_missions":"ミッション","nav_gtav_my_character":"自分のキャラクター","nav_gtav_my_crews":"自分のクルー","nav_gtav_my_jobs":"マイ・ジョブ","nav_gtav_overview":"概要","nav_gtav_photos":"写真","nav_gtav_playlists":"プレイリスト","nav_gtav_stats":"ステータス","nav_gtav_story":"ストーリー","nav_gtav_support":"サポート","nav_gtav_videos":"ビデオ","nav_gtavc_cta_buy_now":"今すぐ購入","nav_gtavc_discover":"概要","nav_gtavcs_discover":"概要","nav_lanoire_accomplishments":"実績","nav_lanoire_badge_pursuit":"バッジ探索チャレンジ","nav_lanoire_case_tracker":"事件トラッカー","nav_lanoire_checklist":"チェックリスト","nav_lanoire_cta_buy_now":"今すぐ購入","nav_lanoire_official_site":"オフィシャルサイト","nav_lanoire_overview":"概要","nav_lanoire_pc_console":"PC/コンソール","nav_lanoire_progress":"進行状況","nav_lanoire_stats":"ステータス","nav_lanoire_support":"サポート","nav_lanoire_vr_case_files":"VR事件簿","nav_midnightclubla_buy_now":"今すぐ購入","nav_more_dropdown":"もっと見る","nav_mp3_accomplishments":"実績","nav_mp3_career":"キャリア","nav_mp3_chapters":"チャプター","nav_mp3_checklist":"チェックリスト","nav_mp3_checkpoint_challenge":"チェックポイントチャレンジ","nav_mp3_crews":"クルー","nav_mp3_cta_buy_now":"今すぐ購入","nav_mp3_featured":"ピックアップ","nav_mp3_grinds":"グラインド","nav_mp3_leaderboards":"ランキング","nav_mp3_multiplayer":"マルチプレイ","nav_mp3_news":"ニュース","nav_mp3_ny_minute":"ニューヨーク・ミニッツ","nav_mp3_official_site":"オフィシャルサイト","nav_mp3_overview":"概要","nav_mp3_progress":"進行状況","nav_mp3_score_attack":"スコアアタック","nav_mp3_singleplayer":"シングルプレイ","nav_mp3_specifications":"システム要件","nav_mp3_support":"サポート","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}(リンクは新しいウィンドウで開きます)","nav_quick_access_games":"ゲーム","nav_quick_access_home":"ホーム","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"実績","nav_rdo_awards":"アワード","nav_rdo_benefits":"特典","nav_rdo_catalogue":"カタログ","nav_rdo_club_rewards":"クラブ報酬","nav_rdo_community":"コミュニティ","nav_rdo_competitive_series":"対戦シリーズ","nav_rdo_cta_buy_now":"今すぐ購入","nav_rdo_customization":"カスタマイズ","nav_rdo_explore":"探索","nav_rdo_getting_started":"冒険の始まり","nav_rdo_guides":"ガイド","nav_rdo_my_character":"自分のキャラクター","nav_rdo_overview":"概要","nav_rdo_photos":"写真","nav_rdo_posses":"民警団","nav_rdo_posses_free_roam":"民警団＆放浪モード","nav_rdo_progress":"進行状況","nav_rdo_progression":"進行状況","nav_rdo_rank_unlocks":"ランク解除","nav_rdo_roles":"役割","nav_rdo_specialist_roles":"専門的な役割","nav_rdo_story_missions":"ストーリーミッション","nav_rdo_support":"サポート","nav_rdr_cta_buy_now":"今すぐ購入","nav_rdr2_accomplishments":"実績","nav_rdr2_artwork":"アートワーク","nav_rdr2_catalogue":"カタログ","nav_rdr2_challenges":"チャレンジ","nav_rdr2_chapters":"チャプター","nav_rdr2_character":"キャラクター","nav_rdr2_compendium":"図鑑","nav_rdr2_cta_buy_now":"今すぐ購入","nav_rdr2_explore":"探索","nav_rdr2_gallery":"ギャラリー","nav_rdr2_locations":"ロケーション","nav_rdr2_media":"メディア","nav_rdr2_music":"音楽","nav_rdr2_online":"オンライン","nav_rdr2_overview":"概要","nav_rdr2_progress":"進行状況","nav_rdr2_stats":"ステータス","nav_rdr2_support":"サポート","nav_rdr2_van_der_linde_gang":"ダッチギャング","nav_rdr2_videos":"ビデオ","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"ロックスター・ゲームスホーム","nav_rockstargames_logo":"クリックしてメニューを開く","nav_rsg_downloads":"ダウンロード","nav_rsg_games":"ゲーム","nav_rsg_newswire":"Newswire","nav_rsg_store":"ストア","nav_rsg_support":"サポート","nav_rsg_videos":"ビデオ","nav_search_error_too_short":"検索文字数が少なすぎます。{count}文字以上にしてください。","nav_search_error_too_short_invalid_chars":"検索文字に無効な文字({invalidChars})が含まれています。無効な文字を削除してもう一度お試しください。","nav_support_dashboard":"ダッシュボード","nav_support_home":"ホーム","nav_support_service_status":"サービス状況","nav_support_submit_ticket":"チケットを送信","nav_tabletennis_cta_buy_now":"今すぐ購入","nav_undeadnightmare_buy_now":"今すぐ購入","nav_undeadnightmare_discover":"概要","nav_undeadnightmare_gallery":"ギャラリー","nav_undeadnightmare_info":"情報","nav_undeadnightmare_media":"メディア","nav_undeadnightmare_news":"ニュース","nav_undeadnightmare_ps3_digital":"PS3 - ダウンロード版","nav_undeadnightmare_specs":"システム要件","nav_undeadnightmare_suport":"サポート","nav_undeadnightmare_videos":"ビデオ","nav_undeadnightmare_xbox360_digital":"Xbox 360 - ダウンロード版","nav_view_all_games":"全て表示","quick_access_title":"Rockstar Games","search_action":"検索","search_close_button":"検索を閉じる","search_open_button":"検索を開く","search_placeholder":"ロックスター・ゲームス内を検索…","search_target_aria_label":"{target}を検索","search_target_community":"コミュニティ","search_target_crews":"クルー","search_target_games":"ゲーム","search_target_jobs":"ジョブ","search_target_posts":"投稿","search_target_user_photos":"ユーザー写真","search_target_user_videos":"ユーザービデオ","search_target_users":"ユーザー","search_target_videos":"ビデオ"},"kr":{"banner_rockstargames_collapsed_legal_cta_aria_label":"접을 수 있는 배너 콘텐츠","banner_rockstargames_collapsed_legal_cta_label":"더 알아보기","banner_rockstargames_collapsed_legal_text":"2024년 2월 28일에 법률 약관이 변경되었습니다.","banner_rockstargames_gift_cta":"GTA 온라인에서 무료 스포츠카 획득","banner_rockstargames_gift_text":"지금부터 3월 18일까지 무료 오베이 8F 드래프터를 획득할 수 있습니다.","accessibility_skip_button":"주 콘텐츠로 건너뛰기","games_menu_featured":"특선 게임","games_menu_gta_online":"Grand Theft Auto 온라인","games_menu_gta_trilogy":"Grand Theft Auto: 트릴로지","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 온라인","games_menu_view_all":"모두 보기","nav_bully_accomplishments":"업적","nav_bully_cta_buy_now":"지금 구입","nav_bully_game_overview":"탐색","nav_bully_Overview":"지원","nav_bully_videos":"동영상","nav_careers_careers_on_linkedin":"LinkedIn 채용","nav_careers_contact_us":"문의","nav_careers_home":"홈","nav_careers_openings":"진행 중 공고","nav_cta_get_launcher":"Launcher 다운로드","nav_gta_trilogy_accomplishments":"업적","nav_gta_trilogy_cta_buy_now":"지금 구입","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"소개","nav_gta_trilogy_support":"지원","nav_gta3_cta_buy_now":"지금 구입","nav_gtaiv_accomplishments":"업적","nav_gtaiv_cta_buy_now":"지금 구입","nav_gtaiv_overview":"탐색","nav_gtaiv_support":"지원","nav_gtaiveflc_accomplishments":"업적","nav_gtaiveflc_overview":"소개","nav_gtaiveflc_support":"지원","nav_gtao_accomplishments":"업적","nav_gtao_browse_crews":"모든 조직 둘러보기","nav_gtao_checklist":"체크리스트","nav_gtao_community":"커뮤니티","nav_gtao_community_series":"커뮤니티 시리즈","nav_gtao_crews":"조직","nav_gtao_crews_create":"조직 생성","nav_gtao_cta_buy_now":"지금 구입","nav_gtao_discover":"탐색","nav_gtao_emblem_editor":"상징 편집기","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 온라인","nav_gtao_guides":"가이드","nav_gtao_jobs":"작업","nav_gtao_jobs_browse_all":"모든 작업 둘러보기","nav_gtao_jobs_playlists":"플레이 목록","nav_gtao_license_plate_creator":"번호판 생성기","nav_gtao_missions":"임무","nav_gtao_my_character":"내 캐릭터","nav_gtao_my_crews":"내 조직","nav_gtao_my_jobs":"내 작업","nav_gtao_overview":"소개","nav_gtao_photos":"사진","nav_gtao_stats":"통계","nav_gtao_story":"스토리","nav_gtao_support":"지원","nav_gtao_videos":"동영상","nav_gtasanandreas_cta_buy_now":"지금 구입","nav_gtav_accomplishments":"업적","nav_gtav_checklist":"체크리스트","nav_gtav_community":"커뮤니티","nav_gtav_community_series":"커뮤니티 시리즈","nav_gtav_create_crew":"조직 생성","nav_gtav_crews":"조직","nav_gtav_crews_browse_all":"모든 조직 둘러보기","nav_gtav_cta_buy_now":"지금 구입","nav_gtav_discover":"탐색","nav_gtav_emblem_editor":"상징 편집기","nav_gtav_gta_online":"GTA 온라인","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"가이드","nav_gtav_jobs":"작업","nav_gtav_jobs_browse_all":"모든 작업 둘러보기","nav_gtav_licence_plate_creator":"번호판 생성기","nav_gtav_missions":"임무","nav_gtav_my_character":"내 캐릭터","nav_gtav_my_crews":"내 조직","nav_gtav_my_jobs":"내 작업","nav_gtav_overview":"소개","nav_gtav_photos":"사진","nav_gtav_playlists":"플레이 목록","nav_gtav_stats":"통계","nav_gtav_story":"스토리","nav_gtav_support":"지원","nav_gtav_videos":"동영상","nav_gtavc_cta_buy_now":"지금 구입","nav_gtavc_discover":"탐색","nav_gtavcs_discover":"탐색","nav_lanoire_accomplishments":"업적","nav_lanoire_badge_pursuit":"배지 수집","nav_lanoire_case_tracker":"사건 추적 일지","nav_lanoire_checklist":"체크리스트","nav_lanoire_cta_buy_now":"지금 구입","nav_lanoire_official_site":"공식 사이트","nav_lanoire_overview":"소개","nav_lanoire_pc_console":"PC/콘솔","nav_lanoire_progress":"진행","nav_lanoire_stats":"통계","nav_lanoire_support":"지원","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"지금 구입","nav_more_dropdown":"그 외","nav_mp3_accomplishments":"업적","nav_mp3_career":"경력","nav_mp3_chapters":"챕터","nav_mp3_checklist":"체크리스트","nav_mp3_checkpoint_challenge":"체크포인트 도전","nav_mp3_crews":"조직","nav_mp3_cta_buy_now":"지금 구입","nav_mp3_featured":"주요 사항","nav_mp3_grinds":"시련","nav_mp3_leaderboards":"순위표","nav_mp3_multiplayer":"멀티 플레이","nav_mp3_news":"뉴스","nav_mp3_ny_minute":"뉴욕의 시간","nav_mp3_official_site":"공식 사이트","nav_mp3_overview":"소개","nav_mp3_progress":"진행","nav_mp3_score_attack":"스코어 어택","nav_mp3_singleplayer":"싱글 플레이","nav_mp3_specifications":"사양","nav_mp3_support":"지원","nav_mp3_weapons":"무기","nav_opens_in_new_window":"{text} (새 창에서 링크 열기)","nav_quick_access_games":"게임","nav_quick_access_home":"홈","nav_quick_access_newswire":"뉴스와이어","nav_rdo_accomplishments":"업적","nav_rdo_awards":"보상","nav_rdo_benefits":"혜택","nav_rdo_catalogue":"카탈로그","nav_rdo_club_rewards":"클럽 보상","nav_rdo_community":"커뮤니티","nav_rdo_competitive_series":"경쟁 시리즈","nav_rdo_cta_buy_now":"지금 구입","nav_rdo_customization":"커스텀","nav_rdo_explore":"탐험","nav_rdo_getting_started":"시작하기","nav_rdo_guides":"가이드","nav_rdo_my_character":"내 캐릭터","nav_rdo_overview":"소개","nav_rdo_photos":"사진","nav_rdo_posses":"갱단","nav_rdo_posses_free_roam":"갱단과 유랑 모드","nav_rdo_progress":"진행","nav_rdo_progression":"진행 상황","nav_rdo_rank_unlocks":"랭크 잠금 해제","nav_rdo_roles":"직업","nav_rdo_specialist_roles":"전문 직업","nav_rdo_story_missions":"스토리 임무","nav_rdo_support":"지원","nav_rdr_cta_buy_now":"지금 구입","nav_rdr2_accomplishments":"업적","nav_rdr2_artwork":"아트워크","nav_rdr2_catalogue":"카탈로그","nav_rdr2_challenges":"도전","nav_rdr2_chapters":"챕터","nav_rdr2_character":"캐릭터","nav_rdr2_compendium":"개요","nav_rdr2_cta_buy_now":"지금 구입","nav_rdr2_explore":"탐험","nav_rdr2_gallery":"갤러리","nav_rdr2_locations":"위치","nav_rdr2_media":"미디어","nav_rdr2_music":"음악","nav_rdr2_online":"온라인","nav_rdr2_overview":"소개","nav_rdr2_progress":"진행","nav_rdr2_stats":"통계","nav_rdr2_support":"지원","nav_rdr2_van_der_linde_gang":"반 더 린드 갱단","nav_rdr2_videos":"동영상","nav_rdr2_weaponry":"무기","nav_rdr2_wildlife":"야생 동물","nav_rockstargames_home":"Rockstar Games 홈","nav_rockstargames_logo":"클릭해서 메뉴 열기","nav_rsg_downloads":"다운로드","nav_rsg_games":"게임","nav_rsg_newswire":"뉴스와이어","nav_rsg_store":"스토어","nav_rsg_support":"지원","nav_rsg_videos":"동영상","nav_search_error_too_short":"검색어가 너무 짧습니다. 검색어는 최소 {count}글자여야 합니다.","nav_search_error_too_short_invalid_chars":"검색어에 유효하지 않은 문자({invalidChars})가 포함되어 있습니다. 제거하고 다시 시도하십시오.","nav_support_dashboard":"내 대시보드","nav_support_home":"홈","nav_support_service_status":"서비스 현황","nav_support_submit_ticket":"요청 제출","nav_tabletennis_cta_buy_now":"지금 구입","nav_undeadnightmare_buy_now":"지금 구입","nav_undeadnightmare_discover":"탐색","nav_undeadnightmare_gallery":"갤러리","nav_undeadnightmare_info":"정보","nav_undeadnightmare_media":"미디어","nav_undeadnightmare_news":"뉴스","nav_undeadnightmare_ps3_digital":"PS3 - 디지털","nav_undeadnightmare_specs":"사양","nav_undeadnightmare_suport":"지원","nav_undeadnightmare_videos":"동영상","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 디지털","nav_view_all_games":"모두 보기","quick_access_title":"Rockstar Games","search_action":"검색","search_close_button":"검색 닫기","search_open_button":"검색 열기","search_placeholder":"Rockstar Games 검색...","search_target_aria_label":"{target} 검색","search_target_community":"커뮤니티","search_target_crews":"조직","search_target_games":"게임","search_target_jobs":"작업","search_target_posts":"게시물","search_target_user_photos":"유저 사진","search_target_user_videos":"유저 동영상","search_target_users":"유저","search_target_videos":"동영상"},"pl":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Zwijany baner","banner_rockstargames_collapsed_legal_cta_label":"Dowiedz się więcej","banner_rockstargames_collapsed_legal_text":"Nasze zasady prawne ulegną zmianie 28 lutego 2024.","banner_rockstargames_gift_cta":"Zdobądź darmowy samochód sportowy w GTA Online","banner_rockstargames_gift_text":"Odbierz za darmo Obeya 8F Draftera do 18 marca.","accessibility_skip_button":"Przejdź do głównej treści","games_menu_featured":"Wyróżnione gry","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Pokaż wszystkie","nav_bully_accomplishments":"Osiągnięcia","nav_bully_cta_buy_now":"Kup teraz","nav_bully_game_overview":"Odkryj","nav_bully_Overview":"Wsparcie","nav_bully_videos":"Filmy","nav_careers_careers_on_linkedin":"Oferty pracy na LinkedIn","nav_careers_contact_us":"Kontakt","nav_careers_home":"Strona główna","nav_careers_openings":"Wakaty","nav_cta_get_launcher":"Pobierz aplikację","nav_gta_trilogy_accomplishments":"Osiągnięcia","nav_gta_trilogy_cta_buy_now":"Kup teraz","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Ogólny zarys","nav_gta_trilogy_support":"Wsparcie","nav_gta3_cta_buy_now":"Kup teraz","nav_gtaiv_accomplishments":"Osiągnięcia","nav_gtaiv_cta_buy_now":"Kup teraz","nav_gtaiv_overview":"Odkryj","nav_gtaiv_support":"Wsparcie","nav_gtaiveflc_accomplishments":"Osiągnięcia","nav_gtaiveflc_overview":"Ogólny zarys","nav_gtaiveflc_support":"Wsparcie","nav_gtao_accomplishments":"Osiągnięcia","nav_gtao_browse_crews":"Przeglądaj ekipy","nav_gtao_checklist":"Lista zadań","nav_gtao_community":"Społeczność","nav_gtao_community_series":"Seria społeczności","nav_gtao_crews":"Ekipy","nav_gtao_crews_create":"Stwórz ekipę","nav_gtao_cta_buy_now":"Kup teraz","nav_gtao_discover":"Odkryj","nav_gtao_emblem_editor":"Edytor emblematów","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Przewodniki","nav_gtao_jobs":"Akcje","nav_gtao_jobs_browse_all":"Przeglądaj akcje","nav_gtao_jobs_playlists":"Listy gier","nav_gtao_license_plate_creator":"Kreator tablic rejestracyjnych","nav_gtao_missions":"Misje","nav_gtao_my_character":"Moja postać","nav_gtao_my_crews":"Moje ekipy","nav_gtao_my_jobs":"Moje akcje","nav_gtao_overview":"Ogólny zarys","nav_gtao_photos":"Zdjęcia","nav_gtao_stats":"Statystyki","nav_gtao_story":"Fabuła","nav_gtao_support":"Wsparcie","nav_gtao_videos":"Filmy","nav_gtasanandreas_cta_buy_now":"Kup teraz","nav_gtav_accomplishments":"Osiągnięcia","nav_gtav_checklist":"Lista zadań","nav_gtav_community":"Społeczność","nav_gtav_community_series":"Seria społeczności","nav_gtav_create_crew":"Stwórz ekipę","nav_gtav_crews":"Ekipy","nav_gtav_crews_browse_all":"Przeglądaj ekipy","nav_gtav_cta_buy_now":"Kup teraz","nav_gtav_discover":"Odkryj","nav_gtav_emblem_editor":"Edytor emblematów","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Przewodniki","nav_gtav_jobs":"Akcje","nav_gtav_jobs_browse_all":"Przeglądaj akcje","nav_gtav_licence_plate_creator":"Kreator tablic rejestracyjnych","nav_gtav_missions":"Misje","nav_gtav_my_character":"Moja postać","nav_gtav_my_crews":"Moje ekipy","nav_gtav_my_jobs":"Moje akcje","nav_gtav_overview":"Ogólny zarys","nav_gtav_photos":"Zdjęcia","nav_gtav_playlists":"Listy gier","nav_gtav_stats":"Statystyki","nav_gtav_story":"Fabuła","nav_gtav_support":"Wsparcie","nav_gtav_videos":"Filmy","nav_gtavc_cta_buy_now":"Kup teraz","nav_gtavc_discover":"Odkryj","nav_gtavcs_discover":"Odkryj","nav_lanoire_accomplishments":"Osiągnięcia","nav_lanoire_badge_pursuit":"Pościg za odznaką","nav_lanoire_case_tracker":"Wykaz spraw","nav_lanoire_checklist":"Lista zadań","nav_lanoire_cta_buy_now":"Kup teraz","nav_lanoire_official_site":"Oficjalna strona","nav_lanoire_overview":"Ogólny zarys","nav_lanoire_pc_console":"PC/konsola","nav_lanoire_progress":"Postępy","nav_lanoire_stats":"Statystyki","nav_lanoire_support":"Wsparcie","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Kup teraz","nav_more_dropdown":"Więcej","nav_mp3_accomplishments":"Osiągnięcia","nav_mp3_career":"Kariera","nav_mp3_chapters":"Rozdziały","nav_mp3_checklist":"Lista zadań","nav_mp3_checkpoint_challenge":"Wyzwanie punktów kontrolnych","nav_mp3_crews":"Ekipy","nav_mp3_cta_buy_now":"Kup teraz","nav_mp3_featured":"Wyróżnione","nav_mp3_grinds":"Zadania","nav_mp3_leaderboards":"Rankingi","nav_mp3_multiplayer":"Tryb wieloosobowy","nav_mp3_news":"Nowości","nav_mp3_ny_minute":"W mgnieniu oka","nav_mp3_official_site":"Oficjalna strona","nav_mp3_overview":"Ogólny zarys","nav_mp3_progress":"Postępy","nav_mp3_score_attack":"Atak na wynik","nav_mp3_singleplayer":"Gra jednoosobowa","nav_mp3_specifications":"Wymagania","nav_mp3_support":"Wsparcie","nav_mp3_weapons":"Broń","nav_opens_in_new_window":"{text} (Odnośnik otworzy nowe okno)","nav_quick_access_games":"Gry","nav_quick_access_home":"Strona główna","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Osiągnięcia","nav_rdo_awards":"Nagrody","nav_rdo_benefits":"Korzyści","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Nagrody klubowe","nav_rdo_community":"Społeczność","nav_rdo_competitive_series":"Seria rywalizacji","nav_rdo_cta_buy_now":"Kup teraz","nav_rdo_customization":"Personalizacja","nav_rdo_explore":"Eksploruj","nav_rdo_getting_started":"Pierwsze kroki","nav_rdo_guides":"Przewodniki","nav_rdo_my_character":"Moja postać","nav_rdo_overview":"Ogólny zarys","nav_rdo_photos":"Zdjęcia","nav_rdo_posses":"Bandy","nav_rdo_posses_free_roam":"Bandy i gra swobodna","nav_rdo_progress":"Postępy","nav_rdo_progression":"Postępy","nav_rdo_rank_unlocks":"Nagrody za rangi","nav_rdo_roles":"Role","nav_rdo_specialist_roles":"Role specjalistyczne","nav_rdo_story_missions":"Misje fabularne","nav_rdo_support":"Wsparcie","nav_rdr_cta_buy_now":"Kup teraz","nav_rdr2_accomplishments":"Osiągnięcia","nav_rdr2_artwork":"Grafiki","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Wyzwania","nav_rdr2_chapters":"Rozdziały","nav_rdr2_character":"Postać","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Kup teraz","nav_rdr2_explore":"Eksploruj","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Miejsca","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Muzyka","nav_rdr2_online":"Online","nav_rdr2_overview":"Ogólny zarys","nav_rdr2_progress":"Postępy","nav_rdr2_stats":"Statystyki","nav_rdr2_support":"Wsparcie","nav_rdr2_van_der_linde_gang":"Gang van der Lindego","nav_rdr2_videos":"Filmy","nav_rdr2_weaponry":"Broń","nav_rdr2_wildlife":"Zwierzęta","nav_rockstargames_home":"Strona główna Rockstar Games","nav_rockstargames_logo":"Kliknij, aby otworzyć menu","nav_rsg_downloads":"Do pobrania","nav_rsg_games":"Gry","nav_rsg_newswire":"Newswire","nav_rsg_store":"Sklep","nav_rsg_support":"Wsparcie","nav_rsg_videos":"Filmy","nav_search_error_too_short":"Wyszukiwana fraza jest za krótka. Musi ona składać się z co najmniej {count} znaków.","nav_search_error_too_short_invalid_chars":"Wyszukiwana fraza zawiera nieobsługiwane znaki ({invalidChars}). Usuń je i spróbuj ponownie.","nav_support_dashboard":"Panel użytkownika","nav_support_home":"Strona główna","nav_support_service_status":"Status usługi","nav_support_submit_ticket":"Wyślij zgłoszenie","nav_tabletennis_cta_buy_now":"Kup teraz","nav_undeadnightmare_buy_now":"Kup teraz","nav_undeadnightmare_discover":"Odkryj","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informacje","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Nowości","nav_undeadnightmare_ps3_digital":"PS3 – wersja cyfrowa","nav_undeadnightmare_specs":"Wymagania","nav_undeadnightmare_suport":"Wsparcie","nav_undeadnightmare_videos":"Filmy","nav_undeadnightmare_xbox360_digital":"Xbox 360 – wersja cyfrowa","nav_view_all_games":"Pokaż wszystkie","quick_access_title":"Rockstar Games","search_action":"Szukaj","search_close_button":"Zamknij wyszukiwanie","search_open_button":"Rozpocznij wyszukiwanie","search_placeholder":"Przeszukaj Rockstar Games...","search_target_aria_label":"Wyszukaj: {target}","search_target_community":"Społeczność","search_target_crews":"Ekipy","search_target_games":"Gry","search_target_jobs":"Akcje","search_target_posts":"Wpisy","search_target_user_photos":"Zdjęcia użytkowników","search_target_user_videos":"Filmy użytkowników","search_target_users":"Użytkownicy","search_target_videos":"Filmy"},"br":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Conteúdo do banner recolhido","banner_rockstargames_collapsed_legal_cta_label":"Saiba mais","banner_rockstargames_collapsed_legal_text":"Nossos termos jurídicos mudaram em 28 de fevereiro de 2024.","banner_rockstargames_gift_cta":"Obtenha um carro esportivo de graça no GTA Online","banner_rockstargames_gift_text":"Até 18 de março, resgate um Obey 8F Drafter grátis.","accessibility_skip_button":"Pular para o conteúdo principal","games_menu_featured":"Jogos em destaque","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver tudo","nav_bully_accomplishments":"Conquistas","nav_bully_cta_buy_now":"Compre já","nav_bully_game_overview":"Descobrir","nav_bully_Overview":"Suporte","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Carreiras no LinkedIn","nav_careers_contact_us":"Entre em contato","nav_careers_home":"Início","nav_careers_openings":"Vagas","nav_cta_get_launcher":"Obter Launcher","nav_gta_trilogy_accomplishments":"Conquistas","nav_gta_trilogy_cta_buy_now":"Compre já","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Visão geral","nav_gta_trilogy_support":"Suporte","nav_gta3_cta_buy_now":"Compre já","nav_gtaiv_accomplishments":"Conquistas","nav_gtaiv_cta_buy_now":"Compre já","nav_gtaiv_overview":"Descobrir","nav_gtaiv_support":"Suporte","nav_gtaiveflc_accomplishments":"Conquistas","nav_gtaiveflc_overview":"Visão geral","nav_gtaiveflc_support":"Suporte","nav_gtao_accomplishments":"Conquistas","nav_gtao_browse_crews":"Ver todos os Comandos","nav_gtao_checklist":"Lista de progresso","nav_gtao_community":"Comunidade","nav_gtao_community_series":"Comunidade em Série","nav_gtao_crews":"Comandos","nav_gtao_crews_create":"Criar um Comando","nav_gtao_cta_buy_now":"Compre já","nav_gtao_discover":"Descobrir","nav_gtao_emblem_editor":"Editor de Emblema","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guias","nav_gtao_jobs":"Serviços","nav_gtao_jobs_browse_all":"Ver todos os serviços","nav_gtao_jobs_playlists":"Listas de jogos","nav_gtao_license_plate_creator":"Criador de Placas","nav_gtao_missions":"Missões","nav_gtao_my_character":"Meu personagem","nav_gtao_my_crews":"Meus Comandos","nav_gtao_my_jobs":"Meus serviços","nav_gtao_overview":"Visão geral","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estatísticas","nav_gtao_story":"História","nav_gtao_support":"Suporte","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Compre já","nav_gtav_accomplishments":"Conquistas","nav_gtav_checklist":"Lista de progresso","nav_gtav_community":"Comunidade","nav_gtav_community_series":"Comunidade em Série","nav_gtav_create_crew":"Criar um Comando","nav_gtav_crews":"Comandos","nav_gtav_crews_browse_all":"Ver todos os Comandos","nav_gtav_cta_buy_now":"Compre já","nav_gtav_discover":"Descobrir","nav_gtav_emblem_editor":"Editor de Emblema","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guias","nav_gtav_jobs":"Serviços","nav_gtav_jobs_browse_all":"Ver todos os serviços","nav_gtav_licence_plate_creator":"Criador de Placas","nav_gtav_missions":"Missões","nav_gtav_my_character":"Meu personagem","nav_gtav_my_crews":"Meus Comandos","nav_gtav_my_jobs":"Meus serviços","nav_gtav_overview":"Visão geral","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de jogos","nav_gtav_stats":"Estatísticas","nav_gtav_story":"História","nav_gtav_support":"Suporte","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Compre já","nav_gtavc_discover":"Descobrir","nav_gtavcs_discover":"Descobrir","nav_lanoire_accomplishments":"Conquistas","nav_lanoire_badge_pursuit":"Distintivos escondidos","nav_lanoire_case_tracker":"Rastreador de Casos","nav_lanoire_checklist":"Lista de progresso","nav_lanoire_cta_buy_now":"Compre já","nav_lanoire_official_site":"Site oficial","nav_lanoire_overview":"Visão geral","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Estatísticas","nav_lanoire_support":"Suporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Compre já","nav_more_dropdown":"Mais","nav_mp3_accomplishments":"Conquistas","nav_mp3_career":"Carreira","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progresso","nav_mp3_checkpoint_challenge":"Desafio Checkpoint","nav_mp3_crews":"Comandos","nav_mp3_cta_buy_now":"Compre já","nav_mp3_featured":"Em destaque","nav_mp3_grinds":"Desafios","nav_mp3_leaderboards":"Placares de líderes","nav_mp3_multiplayer":"Multijogador","nav_mp3_news":"Novidades","nav_mp3_ny_minute":"Um Minuto de Nova York","nav_mp3_official_site":"Site oficial","nav_mp3_overview":"Visão geral","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Modo de Pontuação","nav_mp3_singleplayer":"Jogo individual","nav_mp3_specifications":"Especificações","nav_mp3_support":"Suporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (O link abre em uma nova janela)","nav_quick_access_games":"Jogos","nav_quick_access_home":"Início","nav_quick_access_newswire":"Boletim","nav_rdo_accomplishments":"Conquistas","nav_rdo_awards":"Prêmios","nav_rdo_benefits":"Benefícios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Prêmios do Clube","nav_rdo_community":"Comunidade","nav_rdo_competitive_series":"Séries Competitivas","nav_rdo_cta_buy_now":"Compre já","nav_rdo_customization":"Personalização","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeiros passos","nav_rdo_guides":"Guias","nav_rdo_my_character":"Meu personagem","nav_rdo_overview":"Visão geral","nav_rdo_photos":"Fotos","nav_rdo_posses":"Bandos","nav_rdo_posses_free_roam":"Bandos e Modo Livre","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressão","nav_rdo_rank_unlocks":"Desbloqueios por Nível","nav_rdo_roles":"Ofícios","nav_rdo_specialist_roles":"Ofícios Especializados","nav_rdo_story_missions":"Missões de História","nav_rdo_support":"Suporte","nav_rdr_cta_buy_now":"Compre já","nav_rdr2_accomplishments":"Conquistas","nav_rdr2_artwork":"Arte","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafios","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personagem","nav_rdr2_compendium":"Compêndio","nav_rdr2_cta_buy_now":"Compre já","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Locais","nav_rdr2_media":"Mídia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Visão geral","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Estatísticas","nav_rdr2_support":"Suporte","nav_rdr2_van_der_linde_gang":"Gangue Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Vida Selvagem","nav_rockstargames_home":"Rockstar Games – Início","nav_rockstargames_logo":"Clique para abrir o menu","nav_rsg_downloads":"Downloads","nav_rsg_games":"Jogos","nav_rsg_newswire":"Boletim","nav_rsg_store":"Loja","nav_rsg_support":"Suporte","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Seu termo de busca é curto demais. Os termos de busca devem ter, no mínimo, {count} caracteres.","nav_search_error_too_short_invalid_chars":"Seu termo de busca contém caracteres inválidos ({invalidChars}). Remova-os e tente novamente.","nav_support_dashboard":"Meu painel","nav_support_home":"Início","nav_support_service_status":"Status do serviço","nav_support_submit_ticket":"Enviar uma solicitação","nav_tabletennis_cta_buy_now":"Compre já","nav_undeadnightmare_buy_now":"Compre já","nav_undeadnightmare_discover":"Descobrir","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informações","nav_undeadnightmare_media":"Mídia","nav_undeadnightmare_news":"Novidades","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Especificações","nav_undeadnightmare_suport":"Suporte","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver tudo","quick_access_title":"Rockstar Games","search_action":"Buscar","search_close_button":"Fechar busca","search_open_button":"Abrir busca","search_placeholder":"Buscar em Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidade","search_target_crews":"Comandos","search_target_games":"Jogos","search_target_jobs":"Serviços","search_target_posts":"Publicações","search_target_user_photos":"Fotos do usuário","search_target_user_videos":"Vídeos do usuário","search_target_users":"Usuários","search_target_videos":"Vídeos"},"ru":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Содержимое складывающегося баннера","banner_rockstargames_collapsed_legal_cta_label":"Подробности","banner_rockstargames_collapsed_legal_text":"Наши юридические условия изменились 28 февраля 2024 г.","banner_rockstargames_gift_cta":"Получите спорткар в GTA Online бесплатно.","banner_rockstargames_gift_text":"До 18 марта вы можете бесплатно получить Obey 8F Drafter.","accessibility_skip_button":"Перейти к основному разделу","games_menu_featured":"Избранные игры","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Показать все","nav_bully_accomplishments":"Достижения","nav_bully_cta_buy_now":"Купить","nav_bully_game_overview":"Об игре","nav_bully_Overview":"Поддержка","nav_bully_videos":"Видеоролики","nav_careers_careers_on_linkedin":"Вакансии на LinkedIn","nav_careers_contact_us":"Свяжитесь с нами","nav_careers_home":"Главная страница","nav_careers_openings":"Вакансии","nav_cta_get_launcher":"Скачать RGL","nav_gta_trilogy_accomplishments":"Достижения","nav_gta_trilogy_cta_buy_now":"Купить","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Описание","nav_gta_trilogy_support":"Поддержка","nav_gta3_cta_buy_now":"Купить","nav_gtaiv_accomplishments":"Достижения","nav_gtaiv_cta_buy_now":"Купить","nav_gtaiv_overview":"Об игре","nav_gtaiv_support":"Поддержка","nav_gtaiveflc_accomplishments":"Достижения","nav_gtaiveflc_overview":"Описание","nav_gtaiveflc_support":"Поддержка","nav_gtao_accomplishments":"Достижения","nav_gtao_browse_crews":"Посмотреть все банды","nav_gtao_checklist":"Трекер","nav_gtao_community":"Сообщество","nav_gtao_community_series":"Серия сообщества","nav_gtao_crews":"Банды","nav_gtao_crews_create":"Создать банду","nav_gtao_cta_buy_now":"Купить","nav_gtao_discover":"Об игре","nav_gtao_emblem_editor":"Редактор эмблем","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Руководства","nav_gtao_jobs":"Дела","nav_gtao_jobs_browse_all":"Посмотреть все дела","nav_gtao_jobs_playlists":"Плейлисты","nav_gtao_license_plate_creator":"Редактор номерных знаков","nav_gtao_missions":"Задания","nav_gtao_my_character":"Мой персонаж","nav_gtao_my_crews":"Мои банды","nav_gtao_my_jobs":"Мои дела","nav_gtao_overview":"Описание","nav_gtao_photos":"Фотографии","nav_gtao_stats":"Статистика","nav_gtao_story":"Сюжетный режим","nav_gtao_support":"Поддержка","nav_gtao_videos":"Видеоролики","nav_gtasanandreas_cta_buy_now":"Купить","nav_gtav_accomplishments":"Достижения","nav_gtav_checklist":"Трекер","nav_gtav_community":"Сообщество","nav_gtav_community_series":"Серия сообщества","nav_gtav_create_crew":"Создать банду","nav_gtav_crews":"Банды","nav_gtav_crews_browse_all":"Посмотреть все банды","nav_gtav_cta_buy_now":"Купить","nav_gtav_discover":"Об игре","nav_gtav_emblem_editor":"Редактор эмблем","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Руководства","nav_gtav_jobs":"Дела","nav_gtav_jobs_browse_all":"Посмотреть все дела","nav_gtav_licence_plate_creator":"Редактор номерных знаков","nav_gtav_missions":"Задания","nav_gtav_my_character":"Мой персонаж","nav_gtav_my_crews":"Мои банды","nav_gtav_my_jobs":"Мои дела","nav_gtav_overview":"Описание","nav_gtav_photos":"Фотографии","nav_gtav_playlists":"Плейлисты","nav_gtav_stats":"Статистика","nav_gtav_story":"Сюжетный режим","nav_gtav_support":"Поддержка","nav_gtav_videos":"Видеоролики","nav_gtavc_cta_buy_now":"Купить","nav_gtavc_discover":"Об игре","nav_gtavcs_discover":"Об игре","nav_lanoire_accomplishments":"Достижения","nav_lanoire_badge_pursuit":"Значки","nav_lanoire_case_tracker":"Прогресс","nav_lanoire_checklist":"Трекер","nav_lanoire_cta_buy_now":"Купить","nav_lanoire_official_site":"Официальный сайт","nav_lanoire_overview":"Описание","nav_lanoire_pc_console":"На PC и консолях","nav_lanoire_progress":"Прогресс","nav_lanoire_stats":"Статистика","nav_lanoire_support":"Поддержка","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Купить","nav_more_dropdown":"Дополнительно","nav_mp3_accomplishments":"Достижения","nav_mp3_career":"Карьера","nav_mp3_chapters":"Главы","nav_mp3_checklist":"Трекер","nav_mp3_checkpoint_challenge":"Контрольные точки","nav_mp3_crews":"Банды","nav_mp3_cta_buy_now":"Купить","nav_mp3_featured":"Избранные","nav_mp3_grinds":"Подвиги","nav_mp3_leaderboards":"Списки лидеров","nav_mp3_multiplayer":"Сетевая игра","nav_mp3_news":"Новости","nav_mp3_ny_minute":"Время не ждет","nav_mp3_official_site":"Официальный сайт","nav_mp3_overview":"Описание","nav_mp3_progress":"Прогресс","nav_mp3_score_attack":"Игра на очки","nav_mp3_singleplayer":"Одиночная игра","nav_mp3_specifications":"Системные требования","nav_mp3_support":"Поддержка","nav_mp3_weapons":"Оружие","nav_opens_in_new_window":"{text} (ссылка откроется в новом окне)","nav_quick_access_games":"Игры","nav_quick_access_home":"Главная страница","nav_quick_access_newswire":"Новостная лента","nav_rdo_accomplishments":"Достижения","nav_rdo_awards":"Награды","nav_rdo_benefits":"Бонусы","nav_rdo_catalogue":"Каталог","nav_rdo_club_rewards":"Награды клуба","nav_rdo_community":"Сообщество","nav_rdo_competitive_series":"Соревновательные серии","nav_rdo_cta_buy_now":"Купить","nav_rdo_customization":"Персонализация","nav_rdo_explore":"Об игре","nav_rdo_getting_started":"С чего начать","nav_rdo_guides":"Руководства","nav_rdo_my_character":"Мой персонаж","nav_rdo_overview":"Описание","nav_rdo_photos":"Фотографии","nav_rdo_posses":"Отряды","nav_rdo_posses_free_roam":"Отряды и свободный режим","nav_rdo_progress":"Прогресс","nav_rdo_progression":"Прогресс","nav_rdo_rank_unlocks":"Открываемые предметы","nav_rdo_roles":"Роли","nav_rdo_specialist_roles":"Роли","nav_rdo_story_missions":"Сюжетные задания","nav_rdo_support":"Поддержка","nav_rdr_cta_buy_now":"Купить","nav_rdr2_accomplishments":"Достижения","nav_rdr2_artwork":"Иллюстрации","nav_rdr2_catalogue":"Каталог","nav_rdr2_challenges":"Испытания","nav_rdr2_chapters":"Главы","nav_rdr2_character":"Игрок","nav_rdr2_compendium":"Справочник","nav_rdr2_cta_buy_now":"Купить","nav_rdr2_explore":"Об игре","nav_rdr2_gallery":"Галерея","nav_rdr2_locations":"Места на карте","nav_rdr2_media":"Медиаматериалы","nav_rdr2_music":"Музыка","nav_rdr2_online":"Сетевая игра","nav_rdr2_overview":"Описание","nav_rdr2_progress":"Прогресс","nav_rdr2_stats":"Статистика","nav_rdr2_support":"Поддержка","nav_rdr2_van_der_linde_gang":"Банда Ван дер Линде","nav_rdr2_videos":"Видеоролики","nav_rdr2_weaponry":"Оружие","nav_rdr2_wildlife":"Животные","nav_rockstargames_home":"Главная страница Rockstar Games","nav_rockstargames_logo":"Нажмите, чтобы раскрыть меню","nav_rsg_downloads":"Загрузки","nav_rsg_games":"Игры","nav_rsg_newswire":"Новостная лента","nav_rsg_store":"Магазин","nav_rsg_support":"Поддержка","nav_rsg_videos":"Видеоролики","nav_search_error_too_short":"Слишком короткий поисковый запрос. Минимальное число символов в запросе – {count}.","nav_search_error_too_short_invalid_chars":"Поисковый запрос содержит некорректные символы ({invalidChars}). Удалите их и попробуйте еще раз.","nav_support_dashboard":"Панель управления","nav_support_home":"Главная страница","nav_support_service_status":"Состояние серверов","nav_support_submit_ticket":"Оставить запрос","nav_tabletennis_cta_buy_now":"Купить","nav_undeadnightmare_buy_now":"Купить","nav_undeadnightmare_discover":"Об игре","nav_undeadnightmare_gallery":"Галерея","nav_undeadnightmare_info":"Информация","nav_undeadnightmare_media":"Медиаматериалы","nav_undeadnightmare_news":"Новости","nav_undeadnightmare_ps3_digital":"PS3 – цифровая версия","nav_undeadnightmare_specs":"Системные требования","nav_undeadnightmare_suport":"Поддержка","nav_undeadnightmare_videos":"Видеоролики","nav_undeadnightmare_xbox360_digital":"Xbox 360 – цифровая версия","nav_view_all_games":"Показать все","quick_access_title":"Rockstar Games","search_action":"Поиск","search_close_button":"Закрыть поиск","search_open_button":"Открыть поиск","search_placeholder":"Искать в Rockstar Games...","search_target_aria_label":"Искать в разделе: {target}","search_target_community":"Сообщество","search_target_crews":"Банды","search_target_games":"Игры","search_target_jobs":"Дела","search_target_posts":"Сообщения","search_target_user_photos":"Фотографии пользователей","search_target_user_videos":"Видеоролики пользователей","search_target_users":"Пользователи","search_target_videos":"Видеоролики"},"hans":{"banner_rockstargames_collapsed_legal_cta_aria_label":"折叠式横幅内容","banner_rockstargames_collapsed_legal_cta_label":"了解更多","banner_rockstargames_collapsed_legal_text":"我们的法律条款将于 2024 年 2 月 28 日变更。","banner_rockstargames_gift_cta":"在 GTA 在线模式中获取一辆免费跑车","banner_rockstargames_gift_text":"即日起至 3 月 18 日，可免费领取一辆奥北 8F 尾随者","accessibility_skip_button":"跳至主要内容","games_menu_featured":"精选游戏","games_menu_gta_online":"Grand Theft Auto 在线模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 在线模式","games_menu_view_all":"查看全部","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"马上购买","nav_bully_game_overview":"发现","nav_bully_Overview":"支持","nav_bully_videos":"视频","nav_careers_careers_on_linkedin":"通过 LinkedIn 应聘","nav_careers_contact_us":"联系我们","nav_careers_home":"主页","nav_careers_openings":"空缺职位","nav_cta_get_launcher":"获取 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"马上购买","nav_gta_trilogy_gta3":"GTA 3","nav_gta_trilogy_gtasa":"GTA:San Andreas","nav_gta_trilogy_gtavc":"GTA:Vice City","nav_gta_trilogy_overview":"概况","nav_gta_trilogy_support":"支持","nav_gta3_cta_buy_now":"马上购买","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"马上购买","nav_gtaiv_overview":"发现","nav_gtaiv_support":"支持","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"概况","nav_gtaiveflc_support":"支持","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"浏览所有帮会","nav_gtao_checklist":"清单","nav_gtao_community":"社区","nav_gtao_community_series":"社区系列","nav_gtao_crews":"帮会","nav_gtao_crews_create":"创建帮会","nav_gtao_cta_buy_now":"马上购买","nav_gtao_discover":"发现","nav_gtao_emblem_editor":"徽章编辑器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 在线模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"浏览所有差事","nav_gtao_jobs_playlists":"游玩清单","nav_gtao_license_plate_creator":"车牌制作器","nav_gtao_missions":"任务","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的帮会","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"概况","nav_gtao_photos":"照片","nav_gtao_stats":"统计数据","nav_gtao_story":"故事","nav_gtao_support":"支持","nav_gtao_videos":"视频","nav_gtasanandreas_cta_buy_now":"马上购买","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清单","nav_gtav_community":"社区","nav_gtav_community_series":"社区系列","nav_gtav_create_crew":"创建帮会","nav_gtav_crews":"帮会","nav_gtav_crews_browse_all":"浏览所有帮会","nav_gtav_cta_buy_now":"马上购买","nav_gtav_discover":"发现","nav_gtav_emblem_editor":"徽章编辑器","nav_gtav_gta_online":"GTA 在线模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"浏览所有差事","nav_gtav_licence_plate_creator":"车牌制作器","nav_gtav_missions":"任务","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的帮会","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"概况","nav_gtav_photos":"照片","nav_gtav_playlists":"游玩清单","nav_gtav_stats":"统计数据","nav_gtav_story":"故事","nav_gtav_support":"支持","nav_gtav_videos":"视频","nav_gtavc_cta_buy_now":"马上购买","nav_gtavc_discover":"发现","nav_gtavcs_discover":"发现","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"收集警徽","nav_lanoire_case_tracker":"案件纪录","nav_lanoire_checklist":"清单","nav_lanoire_cta_buy_now":"马上购买","nav_lanoire_official_site":"官方网站","nav_lanoire_overview":"概况","nav_lanoire_pc_console":"PC/主机","nav_lanoire_progress":"进度","nav_lanoire_stats":"统计数据","nav_lanoire_support":"支持","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"马上购买","nav_more_dropdown":"更多内容","nav_mp3_accomplishments":"成就","nav_mp3_career":"职业生涯","nav_mp3_chapters":"章节","nav_mp3_checklist":"清单","nav_mp3_checkpoint_challenge":"检查点挑战","nav_mp3_crews":"帮会","nav_mp3_cta_buy_now":"马上购买","nav_mp3_featured":"精选","nav_mp3_grinds":"挑战","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人游戏","nav_mp3_news":"新闻","nav_mp3_ny_minute":"纽约一分钟","nav_mp3_official_site":"官方网站","nav_mp3_overview":"概况","nav_mp3_progress":"进度","nav_mp3_score_attack":"分数挑战","nav_mp3_singleplayer":"单人游戏","nav_mp3_specifications":"配置","nav_mp3_support":"支持","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新窗口中打开链接）","nav_quick_access_games":"游戏","nav_quick_access_home":"主页","nav_quick_access_newswire":"新闻专线","nav_rdo_accomplishments":"成就","nav_rdo_awards":"奖章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目录","nav_rdo_club_rewards":"俱乐部奖励","nav_rdo_community":"社区","nav_rdo_competitive_series":"竞技系列","nav_rdo_cta_buy_now":"马上购买","nav_rdo_customization":"自定义","nav_rdo_explore":"探索","nav_rdo_getting_started":"新手上路","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"概况","nav_rdo_photos":"照片","nav_rdo_posses":"团队","nav_rdo_posses_free_roam":"团队和自由模式","nav_rdo_progress":"进度","nav_rdo_progression":"进程","nav_rdo_rank_unlocks":"等级解锁","nav_rdo_roles":"职业","nav_rdo_specialist_roles":"专家职业","nav_rdo_story_missions":"故事任务","nav_rdo_support":"支持","nav_rdr_cta_buy_now":"马上购买","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"艺术作品","nav_rdr2_catalogue":"目录","nav_rdr2_challenges":"挑战","nav_rdr2_chapters":"章节","nav_rdr2_character":"角色","nav_rdr2_compendium":"生涯","nav_rdr2_cta_buy_now":"马上购买","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相册","nav_rdr2_locations":"地点","nav_rdr2_media":"媒体","nav_rdr2_music":"音乐","nav_rdr2_online":"在线模式","nav_rdr2_overview":"概况","nav_rdr2_progress":"进度","nav_rdr2_stats":"统计数据","nav_rdr2_support":"支持","nav_rdr2_van_der_linde_gang":"范德林德帮","nav_rdr2_videos":"视频","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生动物","nav_rockstargames_home":"Rockstar Games 主页","nav_rockstargames_logo":"点击打开菜单","nav_rsg_downloads":"下载","nav_rsg_games":"游戏","nav_rsg_newswire":"新闻专线","nav_rsg_store":"商店","nav_rsg_support":"支持","nav_rsg_videos":"视频","nav_search_error_too_short":"您的搜索词条太短。词条长度必须至少为 {count} 个字符。","nav_search_error_too_short_invalid_chars":"您的搜索词条包含无效字符（{invalidChars}）。请删除这些无效字符并重试。","nav_support_dashboard":"个人中心","nav_support_home":"主页","nav_support_service_status":"服务状态","nav_support_submit_ticket":"提交请求","nav_tabletennis_cta_buy_now":"马上购买","nav_undeadnightmare_buy_now":"马上购买","nav_undeadnightmare_discover":"发现","nav_undeadnightmare_gallery":"相册","nav_undeadnightmare_info":"信息","nav_undeadnightmare_media":"媒体","nav_undeadnightmare_news":"新闻","nav_undeadnightmare_ps3_digital":"PS3 - 数字版","nav_undeadnightmare_specs":"配置","nav_undeadnightmare_suport":"支持","nav_undeadnightmare_videos":"视频","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 数字版","nav_view_all_games":"查看全部","quick_access_title":"Rockstar Games","search_action":"搜索","search_close_button":"关闭搜索","search_open_button":"打开搜索","search_placeholder":"搜索 Rockstar Games……","search_target_aria_label":"搜索 {target}","search_target_community":"社区","search_target_crews":"帮会","search_target_games":"游戏","search_target_jobs":"差事","search_target_posts":"帖子","search_target_user_photos":"用户照片","search_target_user_videos":"用户视频","search_target_users":"用户","search_target_videos":"视频"},"tw":{"banner_rockstargames_collapsed_legal_cta_aria_label":"關閉橫幅內容","banner_rockstargames_collapsed_legal_cta_label":"了解更多","banner_rockstargames_collapsed_legal_text":"我們的法律聲明條款於 2024 年 2 月 28 日進行變更。","banner_rockstargames_gift_cta":"在 GTA 線上模式免費取得一輛跑車","banner_rockstargames_gift_text":"即日起至 3 月 18 日止，免費領取一輛奧北 8F 尾流王者。","accessibility_skip_button":"跳過至主內容","games_menu_featured":"精選遊戲","games_menu_gta_online":"Grand Theft Auto 線上模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 線上模式","games_menu_view_all":"檢視全部","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"馬上購買","nav_bully_game_overview":"探索","nav_bully_Overview":"支援","nav_bully_videos":"影片","nav_careers_careers_on_linkedin":"LinkedIn 上的工作機會","nav_careers_contact_us":"聯絡我們","nav_careers_home":"首頁","nav_careers_openings":"工作機會","nav_cta_get_launcher":"取得 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"馬上購買","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA:San Andreas","nav_gta_trilogy_gtavc":"GTA:Vice City","nav_gta_trilogy_overview":"總覽","nav_gta_trilogy_support":"支援","nav_gta3_cta_buy_now":"馬上購買","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"馬上購買","nav_gtaiv_overview":"探索","nav_gtaiv_support":"支援","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"總覽","nav_gtaiveflc_support":"支援","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"瀏覽全部幫會","nav_gtao_checklist":"清單","nav_gtao_community":"社群","nav_gtao_community_series":"社群系列賽","nav_gtao_crews":"幫會","nav_gtao_crews_create":"建立幫會","nav_gtao_cta_buy_now":"馬上購買","nav_gtao_discover":"探索","nav_gtao_emblem_editor":"徽記編輯器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 線上模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"瀏覽全部差事","nav_gtao_jobs_playlists":"遊玩清單","nav_gtao_license_plate_creator":"車牌製作器","nav_gtao_missions":"任務","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的幫會","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"總覽","nav_gtao_photos":"相片","nav_gtao_stats":"統計資料","nav_gtao_story":"故事","nav_gtao_support":"支援","nav_gtao_videos":"影片","nav_gtasanandreas_cta_buy_now":"馬上購買","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清單","nav_gtav_community":"社群","nav_gtav_community_series":"社群系列賽","nav_gtav_create_crew":"建立幫會","nav_gtav_crews":"幫會","nav_gtav_crews_browse_all":"瀏覽全部幫會","nav_gtav_cta_buy_now":"馬上購買","nav_gtav_discover":"探索","nav_gtav_emblem_editor":"徽記編輯器","nav_gtav_gta_online":"GTA 線上模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"瀏覽全部差事","nav_gtav_licence_plate_creator":"車牌製作器","nav_gtav_missions":"任務","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的幫會","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"總覽","nav_gtav_photos":"相片","nav_gtav_playlists":"遊玩清單","nav_gtav_stats":"統計資料","nav_gtav_story":"故事","nav_gtav_support":"支援","nav_gtav_videos":"影片","nav_gtavc_cta_buy_now":"馬上購買","nav_gtavc_discover":"探索","nav_gtavcs_discover":"探索","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"尋找警徽","nav_lanoire_case_tracker":"案件追蹤器","nav_lanoire_checklist":"清單","nav_lanoire_cta_buy_now":"馬上購買","nav_lanoire_official_site":"官方網站","nav_lanoire_overview":"總覽","nav_lanoire_pc_console":"PC/遊戲主機","nav_lanoire_progress":"進度","nav_lanoire_stats":"統計資料","nav_lanoire_support":"支援","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"馬上購買","nav_more_dropdown":"更多","nav_mp3_accomplishments":"成就","nav_mp3_career":"生涯","nav_mp3_chapters":"章節","nav_mp3_checklist":"清單","nav_mp3_checkpoint_challenge":"檢查點挑戰","nav_mp3_crews":"幫會","nav_mp3_cta_buy_now":"馬上購買","nav_mp3_featured":"精選","nav_mp3_grinds":"挑戰","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人遊戲","nav_mp3_news":"新聞","nav_mp3_ny_minute":"分秒必爭","nav_mp3_official_site":"官方網站","nav_mp3_overview":"總覽","nav_mp3_progress":"進度","nav_mp3_score_attack":"奪取高分","nav_mp3_singleplayer":"單人遊戲","nav_mp3_specifications":"規格","nav_mp3_support":"支援","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新視窗開啟連結）","nav_quick_access_games":"遊戲","nav_quick_access_home":"首頁","nav_quick_access_newswire":"新聞放送","nav_rdo_accomplishments":"成就","nav_rdo_awards":"獎章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目錄","nav_rdo_club_rewards":"俱樂部獎勵","nav_rdo_community":"社群","nav_rdo_competitive_series":"競爭系列賽","nav_rdo_cta_buy_now":"馬上購買","nav_rdo_customization":"自訂","nav_rdo_explore":"探索","nav_rdo_getting_started":"準備開始","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"總覽","nav_rdo_photos":"相片","nav_rdo_posses":"武裝隊","nav_rdo_posses_free_roam":"武裝隊與浪跡模式","nav_rdo_progress":"進度","nav_rdo_progression":"發展","nav_rdo_rank_unlocks":"等級解鎖","nav_rdo_roles":"角色職業","nav_rdo_specialist_roles":"專家角色職業","nav_rdo_story_missions":"故事任務","nav_rdo_support":"支援","nav_rdr_cta_buy_now":"馬上購買","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"插圖","nav_rdr2_catalogue":"目錄","nav_rdr2_challenges":"挑戰","nav_rdr2_chapters":"章節","nav_rdr2_character":"角色","nav_rdr2_compendium":"圖鑑","nav_rdr2_cta_buy_now":"馬上購買","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相冊","nav_rdr2_locations":"地點","nav_rdr2_media":"媒體","nav_rdr2_music":"音樂","nav_rdr2_online":"線上模式","nav_rdr2_overview":"總覽","nav_rdr2_progress":"進度","nav_rdr2_stats":"統計資料","nav_rdr2_support":"支援","nav_rdr2_van_der_linde_gang":"范特林幫派","nav_rdr2_videos":"影片","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"Rockstar Games 首頁","nav_rockstargames_logo":"點擊以開啟選單","nav_rsg_downloads":"下載","nav_rsg_games":"遊戲","nav_rsg_newswire":"新聞放送","nav_rsg_store":"商店","nav_rsg_support":"支援","nav_rsg_videos":"影片","nav_search_error_too_short":"您的搜尋字詞太短。搜尋字詞必須至少有 {count} 個字元。","nav_search_error_too_short_invalid_chars":"您的搜尋字詞含有無效字元（{invalidChars}）。請移除後再試一次。","nav_support_dashboard":"我的設定畫面","nav_support_home":"首頁","nav_support_service_status":"服務狀態","nav_support_submit_ticket":"提交請求","nav_tabletennis_cta_buy_now":"馬上購買","nav_undeadnightmare_buy_now":"馬上購買","nav_undeadnightmare_discover":"探索","nav_undeadnightmare_gallery":"相冊","nav_undeadnightmare_info":"資訊","nav_undeadnightmare_media":"媒體","nav_undeadnightmare_news":"新聞","nav_undeadnightmare_ps3_digital":"PS3：數位版","nav_undeadnightmare_specs":"規格","nav_undeadnightmare_suport":"支援","nav_undeadnightmare_videos":"影片","nav_undeadnightmare_xbox360_digital":"Xbox 360：數位版","nav_view_all_games":"檢視全部","quick_access_title":"Rockstar Games","search_action":"搜尋","search_close_button":"關閉搜尋","search_open_button":"開啟搜尋","search_placeholder":"搜尋 Rockstar Games……","search_target_aria_label":"搜尋「{target}」","search_target_community":"社群","search_target_crews":"幫會","search_target_games":"遊戲","search_target_jobs":"差事","search_target_posts":"貼文","search_target_user_photos":"使用者相片","search_target_user_videos":"使用者影片","search_target_users":"使用者","search_target_videos":"影片"}}'),
        Ss = (0, i.defineMessages)({
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
          nav_gtao_community_series: {
            id: "nav_gtao_community_series",
            defaultMessage: "Community Series"
          },
          nav_gtao_my_jobs: {
            id: "nav_gtao_my_jobs",
            defaultMessage: "My Jobs"
          },
          nav_gtao_jobs_browse_all: {
            id: "nav_gtao_jobs_browse_all",
            defaultMessage: "Browse All Jobs"
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
          nav_gtav_community_series: {
            id: "nav_gtav_community_series",
            defaultMessage: "Community Series"
          },
          nav_gtav_jobs_browse_all: {
            id: "nav_gtav_jobs_browse_all",
            defaultMessage: "Browse All Jobs"
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
        Cs = [{
          domain: Q.U.www,
          path: "/search"
        }, {
          domain: Q.U.socialClub,
          path: "/crews"
        }, {
          domain: Q.U.socialClub,
          path: "/photos"
        }, {
          domain: Q.U.socialClub,
          path: "/jobs"
        }, {
          domain: Q.U.socialClub,
          path: "/photos"
        }, {
          domain: Q.U.socialClub,
          path: "/videos"
        }],
        Ns = (0, o.createContext)({
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
              [Q.U.www]: ["/*"],
              [Q.U.socialClub]: ["/*"]
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
                domain: Q.U.www,
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
        js = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, o.useState)({
            navigation: ""
          }), [s, r] = (0, o.useState)(null), [l, _] = (0, o.useState)(!1), [c, d] = (0, o.useMemo)((() => (0, i.getLocale)()), []), {
            hash: g,
            pathname: m
          } = (0, G.useLocation)(), {
            data: v
          } = B(), {
            location: u
          } = window, p = (0, Q.c)(), f = (0, o.useMemo)((() => ({
            navigationState: t,
            setNavigationState: n,
            environment: p,
            location: u,
            locale: c,
            rockstarUser: v,
            openedDropdown: s,
            setOpenedDropdown: r,
            isSearchPage: l
          })), [t, c, JSON.stringify(u), p, s, l, v]);
          return (0, o.useEffect)((() => {
            d(c.iso);
            const e = () => r(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, o.useEffect)((() => {
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
          }), [g]), (0, o.useEffect)((() => {
            const e = p.currentSite?.site,
              a = Cs.some((a => a.domain === e && m.startsWith(a.path)));
            _(a)
          }), [m]), (0, O.jsx)(Ns.Provider, {
            value: f,
            children: a
          })
        },
        Ts = () => {
          const e = (0, o.useContext)(Ns);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        Is = () => {
          const e = (0, o.useContext)(Ns);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        Es = () => {
          const e = (0, o.useContext)(Ns);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: a,
            setOpenedDropdown: t
          } = e;
          return [a, e => {
            t(e === a ? null : e)
          }]
        },
        As = () => {
          const e = (0, o.useContext)(Ns);
          if (void 0 === e) throw new Error("useIsSearchPage must be used within a Navigation Provider");
          return e.isSearchPage
        },
        Ls = [{
          intlMessage: Ss.games_menu_gta_v,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/V.jpg",
          location: {
            domain: Q.U.www,
            path: "/gta-v"
          },
          dataTestId: "gtav"
        }, {
          intlMessage: Ss.games_menu_gta_online,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/GTAOnline.jpg",
          location: {
            domain: Q.U.www,
            path: "/gta-online"
          },
          dataTestId: "gtao"
        }, {
          intlMessage: Ss.games_menu_gta_trilogy,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/GTATrilogy.jpg",
          location: {
            domain: Q.U.www,
            path: "/GTATrilogy"
          },
          dataTestId: "gtaTrilogy"
        }, {
          intlMessage: Ss.games_menu_rdr_2,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg",
          location: {
            domain: Q.U.www,
            path: "/reddeadredemption2"
          },
          dataTestId: "rdr2"
        }, {
          intlMessage: Ss.games_menu_rdr_online,
          imageSrc: "/rockstargames-newsite/img/global/games/fob/640/reddeadonline.jpg",
          location: {
            domain: Q.U.www,
            path: "/reddeadonline"
          },
          dataTestId: "rdo"
        }];
      var Ps = t(73660),
        Os = t.n(Ps);
      const Ds = {
          pillBtn: "rockstargames-modules-core-headera619f898cfc35c5031ced11524046999",
          selected: "rockstargames-modules-core-headerb2ba035b6a7450f1c936b821b68327c7",
          globalNavigationRoot: "rockstargames-modules-core-headera95a9e2c93190e6b0eb886211d3beb68",
          large: "rockstargames-modules-core-headere72b6798a0d8012bd8f16236087e7f7a",
          badge: "rockstargames-modules-core-headerea0b713e5b81a79d10265e5981b2d7cf",
          globalNavigationSpacer: "rockstargames-modules-core-headerfa88e95f42080c6adec74d487de431f5",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headerc04a845b0f1bbd7409cc61915a742a85"
        },
        zs = {
          site: "beaterator",
          appearancePaths: {
            [Q.U.www]: ["/games/beaterator/*"]
          },
          brand: "beaterator",
          links: []
        },
        Us = {
          site: "bully",
          appearancePaths: {
            [Q.U.www]: ["/games/bully/*"],
            [Q.U.socialClub]: ["/games/bully/*"]
          },
          brand: "bully",
          links: [{
            text: Ss.nav_bully_game_overview.defaultMessage,
            intlMessage: Ss.nav_bully_game_overview,
            type: "nav-internal",
            location: {
              domain: Q.U.www,
              path: "/games/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: Ss.nav_bully_accomplishments.defaultMessage,
            intlMessage: Ss.nav_bully_accomplishments,
            type: "nav-internal",
            location: {
              domain: Q.U.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: Ss.nav_bully_support.defaultMessage,
            intlMessage: Ss.nav_bully_support,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: Ss.nav_bully_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_bully_cta_buy_now,
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: "/game/buy-bully-scholarship-edition"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        },
        Vs = {
          site: "careers",
          appearancePaths: {
            [Q.U.www]: ["/careers/*"]
          },
          brand: "careers",
          links: [{
            text: Ss.nav_careers_home.defaultMessage,
            intlMessage: Ss.nav_careers_home,
            type: "nav-internal",
            location: {
              domain: Q.U.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: Ss.nav_careers_openings.defaultMessage,
            intlMessage: Ss.nav_careers_openings,
            type: "nav-internal",
            location: {
              domain: Q.U.www,
              path: "/careers/openings"
            },
            dataTestId: "careersOpeningsLink"
          }, {
            text: Ss.nav_careers_contact_us.defaultMessage,
            intlMessage: Ss.nav_careers_contact_us,
            type: "nav-no-link",
            dataTestId: "careersContactUsLink"
          }, {
            text: Ss.nav_careers_careers_on_linkedin.defaultMessage,
            intlMessage: Ss.nav_careers_careers_on_linkedin,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com/company/rockstar-games/",
              path: "/company/rockstar-games/"
            },
            dataTestId: "careersLinkedInLink"
          }]
        },
        Bs = {
          site: "gta",
          appearancePaths: {
            [Q.U.www]: ["/games/gta/*"]
          },
          brand: "gta",
          links: []
        },
        Rs = {
          site: "gta2",
          appearancePaths: {
            [Q.U.www]: ["/games/gta2/*"]
          },
          brand: "gta2",
          links: []
        },
        Gs = {
          site: "grandtheftauto3",
          appearancePaths: {
            [Q.U.www]: ["/games/grandtheftauto3/*"]
          },
          brand: "gta3",
          links: [],
          cta: {
            text: Ss.nav_gta3_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_gta3_cta_buy_now,
            variant: "highlight",
            dataTestId: "gta3BuyNowCta",
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        Fs = {
          site: "gta-iv",
          appearancePaths: {
            [Q.U.www]: ["/games/IV/*"],
            [Q.U.socialClub]: ["/games/gtaiv/*"]
          },
          brand: "gta4",
          links: [{
            text: Ss.nav_gtaiv_overview.defaultMessage,
            intlMessage: Ss.nav_gtaiv_overview,
            type: "nav-internal",
            location: {
              domain: Q.U.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: Ss.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: Ss.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: Q.U.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: Ss.nav_gtaiv_support.defaultMessage,
            intlMessage: Ss.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: Ss.nav_gtaiv_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_gtaiv_cta_buy_now,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            dataTestId: "gtaivPurchaseLink"
          }
        },
        qs = {
          site: "gta-v",
          appearancePaths: {
            [Q.U.www]: ["/gta-v/*"],
            [Q.U.socialClub]: ["/games/gtav/*"]
          },
          brand: "gta5",
          links: [{
            text: Ss.nav_gtav_overview.defaultMessage,
            intlMessage: Ss.nav_gtav_overview,
            type: "nav-internal",
            location: {
              domain: Q.U.www,
              path: "/gta-v"
            },
            dataTestId: "gtavLink"
          }, {
            text: Ss.nav_gtav_gta_online.defaultMessage,
            intlMessage: Ss.nav_gtav_gta_online,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: Ss.nav_gtav_discover.defaultMessage,
              intlMessage: Ss.nav_gtav_discover,
              type: "nav-internal",
              location: {
                domain: Q.U.www,
                path: "/gta-online"
              },
              dataTestId: "gtaoLink"
            }, {
              text: Ss.nav_gtav_my_character.defaultMessage,
              intlMessage: Ss.nav_gtav_my_character,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              dataTestId: "gtaoButton"
            }, {
              text: Ss.nav_gtav_jobs.defaultMessage,
              intlMessage: Ss.nav_gtav_jobs,
              type: "nav-internal",
              location: {
                domain: Q.U.socialClub,
                path: "/jobs/?dateRange=any&filter=community&sort=date&title=gtav"
              },
              dataTestId: "gtaoJobsLink"
            }, {
              text: Ss.nav_gtav_guides.defaultMessage,
              intlMessage: Ss.nav_gtav_guides,
              type: "nav-internal",
              location: {
                domain: Q.U.www,
                path: "/gta-online/guides"
              },
              dataTestId: "gtaoGuidesLink"
            }, {
              text: Ss.nav_gtav_licence_plate_creator.defaultMessage,
              intlMessage: Ss.nav_gtav_licence_plate_creator,
              type: "nav-internal",
              location: {
                domain: Q.U.www,
                path: "/gta-online/license-plates"
              },
              dataTestId: "gtaoLicensePlatesLink"
            }]
          }, {
            text: Ss.nav_gtav_story.defaultMessage,
            intlMessage: Ss.nav_gtav_story,
            type: "nav-dropdown",
            dataTestId: "gtavSpLink",
            children: [{
              text: Ss.nav_gtav_stats.defaultMessage,
              intlMessage: Ss.nav_gtav_stats,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/overview/"
              },
              dataTestId: "gtavSpOverviewButton"
            }, {
              text: Ss.nav_gtav_missions.defaultMessage,
              intlMessage: Ss.nav_gtav_missions,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/missions/"
              },
              dataTestId: "gtavSpMissionsButton"
            }, {
              text: Ss.nav_gtav_checklist.defaultMessage,
              intlMessage: Ss.nav_gtav_checklist,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/checklist"
              },
              dataTestId: "gtavSpChecklistButton"
            }, {
              text: Ss.nav_gtav_accomplishments.defaultMessage,
              intlMessage: Ss.nav_gtav_accomplishments,
              type: "nav-internal",
              isLegacy: !0,
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              dataTestId: "gtavSpAccomplishmentsButton"
            }]
          }, {
            text: Ss.nav_gtav_gta_plus.defaultMessage,
            intlMessage: Ss.nav_gtav_gta_plus,
            type: "nav-internal",
            location: {
              domain: Q.U.www,
              path: "/gta-plus"
            },
            dataTestId: "gtav+Link"
          }, {
            text: Ss.nav_gtav_community.defaultMessage,
            intlMessage: Ss.nav_gtav_community,
            type: "nav-dropdown",
            dataTestId: "gtavCommunityDropdown",
            children: [{
              text: Ss.nav_gtav_jobs.defaultMessage,
              intlMessage: Ss.nav_gtav_jobs,
              type: "nav-dropdown",
              dataTestId: "gtavJobsDropdown",
              children: [{
                text: Ss.nav_gtav_jobs_browse_all.defaultMessage,
                intlMessage: Ss.nav_gtav_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavAllJobsButtons",
                location: {
                  domain: Q.U.socialClub,
                  path: "/jobs"
                }
              }, {
                text: Ss.nav_gtav_community_series.defaultMessage,
                intlMessage: Ss.nav_gtav_community_series,
                type: "nav-internal",
                location: {
                  domain: Q.U.socialClub,
                  path: "/jobs/?dateRange=any&filter=community&sort=date&title=gtav"
                },
                dataTestId: "gtavCommunitySeriesLink"
              }, {
                text: Ss.nav_gtav_my_jobs.defaultMessage,
                intlMessage: Ss.nav_gtav_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavMyJobsButtons",
                location: {
                  domain: Q.U.socialClub,
                  path: "/jobs/?dateRange=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: Ss.nav_gtav_playlists.defaultMessage,
                intlMessage: Ss.nav_gtav_playlists,
                type: "nav-internal",
                dataTestId: "gtavPlaylistsButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: Ss.nav_gtav_crews.defaultMessage,
              intlMessage: Ss.nav_gtav_crews,
              type: "nav-dropdown",
              dataTestId: "gtavCrewsDropdown",
              children: [{
                text: Ss.nav_gtav_crews_browse_all.defaultMessage,
                intlMessage: Ss.nav_gtav_crews_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtavBrowseCrewsButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/crews"
                }
              }, {
                text: Ss.nav_gtav_my_crews.defaultMessage,
                intlMessage: Ss.nav_gtav_my_crews,
                dataTestId: "gtavMyCrewsButton",
                type: "nav-internal",
                requiresAuth: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: Ss.nav_gtav_create_crew.defaultMessage,
                intlMessage: Ss.nav_gtav_create_crew,
                type: "nav-internal",
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: Ss.nav_gtav_emblem_editor.defaultMessage,
                intlMessage: Ss.nav_gtav_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/emblems"
                }
              }]
            }, {
              text: Ss.nav_gtav_photos.defaultMessage,
              intlMessage: Ss.nav_gtav_photos,
              type: "nav-internal",
              dataTestId: "gtaViewPhotosButton",
              location: {
                domain: Q.U.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: Ss.nav_gtav_videos.defaultMessage,
              intlMessage: Ss.nav_gtav_videos,
              dataTestId: "gtaViewVideosButton",
              type: "nav-internal",
              location: {
                domain: Q.U.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: Ss.nav_gtav_support.defaultMessage,
            intlMessage: Ss.nav_gtav_support,
            dataTestId: "gtaSupportLink",
            type: "nav-external",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: Ss.nav_gtav_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_gtav_cta_buy_now,
            location: {
              domain: Q.U.www,
              path: "/gta-v?info=order"
            },
            ga: "cta_buy",
            dataTestId: "gtavPurchaseLink"
          }
        },
        $s = {
          site: "grandtheftauto-gba",
          appearancePaths: {
            [Q.U.www]: ["/games/grandtheftauto-gba/*"]
          },
          brand: "gtaadvance",
          links: []
        },
        Hs = {
          site: "chinatownwars",
          appearancePaths: {
            [Q.U.www]: ["/games/chinatownwars/*"]
          },
          brand: "gtactw",
          links: []
        },
        Ws = {
          site: "episodesfromlibertycity",
          appearancePaths: {
            [Q.U.www]: ["/games/episodesfromlibertycity/*"]
          },
          brand: "gtaiveflc",
          links: [{
            text: Ss.nav_gtaiv_overview.defaultMessage,
            intlMessage: Ss.nav_gtaiv_overview,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: Q.U.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: Ss.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: Ss.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: Q.U.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: Ss.nav_gtaiv_support.defaultMessage,
            intlMessage: Ss.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/115001614848"
            }
          }]
        },
        Js = {
          site: "libertycitystories",
          appearancePaths: {
            [Q.U.www]: ["/games/libertycitystories/*"]
          },
          brand: "gtalcs",
          links: []
        },
        Xs = {
          site: "gtalondon",
          appearancePaths: {
            [Q.U.www]: ["/games/gtalondon/*"]
          },
          brand: "gtalondon",
          links: []
        },
        Ks = {
          site: "gta-online",
          appearancePaths: {
            [Q.U.www]: ["/gta-online/*"],
            [Q.U.socialClub]: ["/member/:username/crews/*", "/crews/*", "/crew/*", "/jobs/*", "*/jobs/*", "/videos/*{titleOverride}", "/photos/*{titleOverride}", "/emblems/*", "/games/gtav/:platform/career/overview/gtaonline/*"]
          },
          brand: "gtaonline",
          links: [{
            text: Ss.nav_gtao_overview.defaultMessage,
            intlMessage: Ss.nav_gtao_overview,
            type: "nav-internal",
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: Q.U.www,
              path: "/gta-v"
            }
          }, {
            text: Ss.nav_gtao_gtao.defaultMessage,
            intlMessage: Ss.nav_gtao_gtao,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: Ss.nav_gtao_discover.defaultMessage,
              intlMessage: Ss.nav_gtao_discover,
              type: "nav-internal",
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: Q.U.www,
                path: "/gta-online"
              }
            }, {
              text: Ss.nav_gtao_my_character.defaultMessage,
              intlMessage: Ss.nav_gtao_my_character,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoOverviewButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              }
            }, {
              text: Ss.nav_gtao_jobs.defaultMessage,
              intlMessage: Ss.nav_gtao_jobs,
              type: "nav-internal",
              location: {
                domain: Q.U.socialClub,
                path: "/jobs/?dateRange=any&filter=community&sort=date&title=gtav"
              },
              dataTestId: "gtaoJobsLink"
            }, {
              text: Ss.nav_gtao_guides.defaultMessage,
              intlMessage: Ss.nav_gtao_guides,
              type: "nav-internal",
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: Q.U.www,
                path: "/gta-online/guides"
              }
            }, {
              text: Ss.nav_gtao_license_plate_creator.defaultMessage,
              intlMessage: Ss.nav_gtao_license_plate_creator,
              type: "nav-internal",
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: Q.U.www,
                path: "/gta-online/license-plates"
              }
            }]
          }, {
            text: Ss.nav_gtao_story.defaultMessage,
            intlMessage: Ss.nav_gtao_story,
            dataTestId: "gtaoStoryDropdown",
            type: "nav-dropdown",
            children: [{
              text: Ss.nav_gtao_stats.defaultMessage,
              intlMessage: Ss.nav_gtao_stats,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoCareerButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/overview/"
              }
            }, {
              text: Ss.nav_gtao_missions.defaultMessage,
              intlMessage: Ss.nav_gtao_missions,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoMissionsButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/missions/"
              }
            }, {
              text: Ss.nav_gtao_checklist.defaultMessage,
              intlMessage: Ss.nav_gtao_checklist,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoChecklistButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/checklist"
              }
            }, {
              text: Ss.nav_gtao_accomplishments.defaultMessage,
              intlMessage: Ss.nav_gtao_accomplishments,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoSpAccomplishmentsButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/accomplishments"
              }
            }]
          }, {
            text: Ss.nav_gtao_gta_plus.defaultMessage,
            intlMessage: Ss.nav_gtao_gta_plus,
            type: "nav-internal",
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: Q.U.www,
              path: "/gta-plus"
            }
          }, {
            text: Ss.nav_gtao_community.defaultMessage,
            intlMessage: Ss.nav_gtao_community,
            type: "nav-dropdown",
            dataTestId: "gtaoCommunityDropdown",
            children: [{
              text: Ss.nav_gtao_jobs.defaultMessage,
              intlMessage: Ss.nav_gtao_jobs,
              type: "nav-dropdown",
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: Ss.nav_gtao_jobs_browse_all.defaultMessage,
                intlMessage: Ss.nav_gtao_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/jobs"
                }
              }, {
                text: Ss.nav_gtao_community_series.defaultMessage,
                intlMessage: Ss.nav_gtao_community_series,
                type: "nav-internal",
                location: {
                  domain: Q.U.socialClub,
                  path: "/jobs/?dateRange=any&filter=community&sort=date&title=gtav"
                },
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: Ss.nav_gtao_my_jobs.defaultMessage,
                intlMessage: Ss.nav_gtao_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                requiresAuth: !0,
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/jobs/?dateRange=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: Ss.nav_gtao_jobs_playlists.defaultMessage,
                intlMessage: Ss.nav_gtao_jobs_playlists,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: Ss.nav_gtao_crews.defaultMessage,
              intlMessage: Ss.nav_gtao_crews,
              type: "nav-dropdown",
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: Ss.nav_gtao_browse_crews.defaultMessage,
                intlMessage: Ss.nav_gtao_browse_crews,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/crews"
                }
              }, {
                text: Ss.nav_gtao_my_crews.defaultMessage,
                intlMessage: Ss.nav_gtao_my_crews,
                type: "nav-internal",
                dataTestId: "gtaoMyCrewsButton",
                requiresAuth: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: Ss.nav_gtao_crews_create.defaultMessage,
                intlMessage: Ss.nav_gtao_crews_create,
                type: "nav-internal",
                dataTestId: "gtaoCreateCrewButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: Ss.nav_gtao_emblem_editor.defaultMessage,
                intlMessage: Ss.nav_gtao_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtaoCreateEmblemButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/emblems"
                }
              }]
            }, {
              text: Ss.nav_gtao_photos.defaultMessage,
              intlMessage: Ss.nav_gtao_photos,
              type: "nav-internal",
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: Q.U.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: Ss.nav_gtao_videos.defaultMessage,
              intlMessage: Ss.nav_gtao_videos,
              type: "nav-internal",
              dataTestId: "gtaoVideosButton",
              location: {
                domain: Q.U.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: Ss.nav_gtao_support.defaultMessage,
            intlMessage: Ss.nav_gtao_support,
            type: "nav-external",
            dataTestId: "gtaoSupportLink",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: Ss.nav_gtao_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_gtao_cta_buy_now,
            dataTestId: "gtaoPurchaseLink",
            location: {
              domain: Q.U.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy"
          }
        },
        Ys = {
          site: "gta-plus",
          appearancePaths: {
            [Q.U.www]: ["/gta-plus/*"],
            [Q.U.socialClub]: ["*/crews/*", "*/jobs/*", "/emblems/*"]
          },
          brand: "gtaplus",
          links: [{
            text: Ss.nav_gtao_overview.defaultMessage,
            intlMessage: Ss.nav_gtao_overview,
            type: "nav-internal",
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: Q.U.www,
              path: "/gta-v"
            }
          }, {
            text: Ss.nav_gtao_gtao.defaultMessage,
            intlMessage: Ss.nav_gtao_gtao,
            type: "nav-dropdown",
            dataTestId: "gtaoDropdown",
            children: [{
              text: Ss.nav_gtao_discover.defaultMessage,
              intlMessage: Ss.nav_gtao_discover,
              type: "nav-internal",
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: Q.U.www,
                path: "/gta-online"
              }
            }, {
              text: Ss.nav_gtao_my_character.defaultMessage,
              intlMessage: Ss.nav_gtao_my_character,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoOverviewButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              }
            }, {
              text: Ss.nav_gtao_jobs.defaultMessage,
              intlMessage: Ss.nav_gtao_jobs,
              type: "nav-internal",
              location: {
                domain: Q.U.socialClub,
                path: "/jobs/?dateRange=any&filter=community&sort=date&title=gtav"
              },
              dataTestId: "gtaoJobsLink"
            }, {
              text: Ss.nav_gtao_guides.defaultMessage,
              intlMessage: Ss.nav_gtao_guides,
              type: "nav-internal",
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: Q.U.www,
                path: "/gta-online/guides"
              }
            }, {
              text: Ss.nav_gtao_license_plate_creator.defaultMessage,
              intlMessage: Ss.nav_gtao_license_plate_creator,
              type: "nav-internal",
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: Q.U.www,
                path: "/gta-online/license-plates"
              }
            }]
          }, {
            text: Ss.nav_gtao_story.defaultMessage,
            intlMessage: Ss.nav_gtao_story,
            dataTestId: "gtaoStoryDropdown",
            type: "nav-dropdown",
            children: [{
              text: Ss.nav_gtao_stats.defaultMessage,
              intlMessage: Ss.nav_gtao_stats,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoCareerButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/overview/"
              }
            }, {
              text: Ss.nav_gtao_missions.defaultMessage,
              intlMessage: Ss.nav_gtao_missions,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoMissionsButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/missions/"
              }
            }, {
              text: Ss.nav_gtao_checklist.defaultMessage,
              intlMessage: Ss.nav_gtao_checklist,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoChecklistButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/checklist"
              }
            }, {
              text: Ss.nav_gtao_accomplishments.defaultMessage,
              intlMessage: Ss.nav_gtao_accomplishments,
              type: "nav-internal",
              isLegacy: !0,
              dataTestId: "gtaoAccomplishmentsButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtav/career/accomplishments"
              }
            }]
          }, {
            text: Ss.nav_gtao_gta_plus.defaultMessage,
            intlMessage: Ss.nav_gtao_gta_plus,
            type: "nav-internal",
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: Q.U.www,
              path: "/gta-plus"
            }
          }, {
            text: Ss.nav_gtao_community.defaultMessage,
            intlMessage: Ss.nav_gtao_community,
            type: "nav-dropdown",
            dataTestId: "gtaoCommunityDropdown",
            children: [{
              text: Ss.nav_gtao_jobs.defaultMessage,
              intlMessage: Ss.nav_gtao_jobs,
              type: "nav-dropdown",
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: Ss.nav_gtao_jobs_browse_all.defaultMessage,
                intlMessage: Ss.nav_gtao_jobs_browse_all,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/jobs"
                }
              }, {
                text: Ss.nav_gtao_community_series.defaultMessage,
                intlMessage: Ss.nav_gtao_community_series,
                type: "nav-internal",
                location: {
                  domain: Q.U.socialClub,
                  path: "/jobs/?dateRange=any&filter=community&sort=date&title=gtav"
                },
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: Ss.nav_gtao_my_jobs.defaultMessage,
                intlMessage: Ss.nav_gtao_my_jobs,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: Q.U.socialClub,
                  path: " /jobs/?filter=me&sort=likes&title=gtav"
                }
              }, {
                text: Ss.nav_gtao_jobs_playlists.defaultMessage,
                intlMessage: Ss.nav_gtao_jobs_playlists,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/gtav/playlists"
                }
              }]
            }, {
              text: Ss.nav_gtao_crews.defaultMessage,
              intlMessage: Ss.nav_gtao_crews,
              type: "nav-dropdown",
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: Ss.nav_gtao_browse_crews.defaultMessage,
                intlMessage: Ss.nav_gtao_browse_crews,
                type: "nav-internal",
                isLegacy: !0,
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/crews"
                }
              }, {
                text: Ss.nav_gtao_my_crews.defaultMessage,
                intlMessage: Ss.nav_gtao_my_crews,
                type: "nav-internal",
                dataTestId: "gtaoMyCrewsButton",
                requiresAuth: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/member/{username}/crews"
                }
              }, {
                text: Ss.nav_gtao_crews_create.defaultMessage,
                intlMessage: Ss.nav_gtao_crews_create,
                type: "nav-internal",
                dataTestId: "gtaoCreateCrewButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: Ss.nav_gtao_emblem_editor.defaultMessage,
                intlMessage: Ss.nav_gtao_emblem_editor,
                type: "nav-internal",
                dataTestId: "gtaoCreateEmblemButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/emblems/new"
                }
              }]
            }, {
              text: Ss.nav_gtao_photos.defaultMessage,
              intlMessage: Ss.nav_gtao_photos,
              type: "nav-internal",
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: Q.U.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              }
            }, {
              text: Ss.nav_gtao_videos.defaultMessage,
              intlMessage: Ss.nav_gtao_videos,
              type: "nav-internal",
              dataTestId: "gtaoVideosButton",
              location: {
                domain: Q.U.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              }
            }]
          }, {
            text: Ss.nav_gtao_support.defaultMessage,
            intlMessage: Ss.nav_gtao_support,
            type: "nav-external",
            dataTestId: "gtaoSupportLink",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/200013306"
            }
          }],
          cta: {
            text: Ss.nav_gtao_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_gtao_cta_buy_now,
            dataTestId: "gtaoPurchaseLink",
            location: {
              domain: Q.U.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy"
          }
        },
        Qs = {
          site: "sanandreas",
          appearancePaths: {
            [Q.U.www]: ["/games/sanandreas/*"]
          },
          brand: "gtasanandreas",
          links: [],
          cta: {
            text: Ss.nav_gtasanandreas_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_gtasanandreas_cta_buy_now,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            dataTestId: "gtaSanAndreasPurchaseLink"
          }
        },
        Zs = {
          site: "gta-trilogy",
          appearancePaths: {
            [Q.U.www]: ["/GTATrilogy/*"],
            [Q.U.socialClub]: ["/games/gtasa/*", "/games/gtavc/*", "/games/gta3/*"]
          },
          brand: "gtatrilogy",
          links: [{
            text: Ss.nav_gta_trilogy_overview.defaultMessage,
            intlMessage: Ss.nav_gta_trilogy_overview,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: Q.U.www,
              path: "/GTATrilogy"
            }
          }, {
            text: Ss.nav_gta_trilogy_accomplishments.defaultMessage,
            intlMessage: Ss.nav_gta_trilogy_accomplishments,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: Ss.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: Ss.nav_gta_trilogy_gtasa,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: Ss.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: Ss.nav_gta_trilogy_gtavc,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: Ss.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: Ss.nav_gta_trilogy_gta3,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: Ss.nav_gta_trilogy_support.defaultMessage,
            intlMessage: Ss.nav_gta_trilogy_support,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: Ss.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: Ss.nav_gta_trilogy_gtasa,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: Q.U.support,
                path: "/categories/115001620287"
              }
            }, {
              text: Ss.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: Ss.nav_gta_trilogy_gtavc,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: Q.U.support,
                path: "/categories/115001619868"
              }
            }, {
              text: Ss.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: Ss.nav_gta_trilogy_gta3,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: Q.U.support,
                path: "/categories/115001619948"
              }
            }]
          }],
          cta: {
            text: Ss.nav_gta_trilogy_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_gta_trilogy_cta_buy_now,
            dataTestId: "gtaTrilogyPurchaseLink",
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        er = {
          site: "vicecity",
          appearancePaths: {
            [Q.U.www]: ["/games/vicecity/*"]
          },
          brand: "gtavc",
          links: [],
          cta: {
            text: Ss.nav_gtavc_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_gtavc_cta_buy_now,
            variant: "highlight",
            dataTestId: "gtaVcBuyNowLink",
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        ar = {
          site: "vicecitystories",
          appearancePaths: {
            [Q.U.www]: ["/games/vicecitystories/*"]
          },
          brand: "gtavcs",
          links: []
        },
        tr = {
          site: "la-noire",
          appearancePaths: {
            [Q.U.www]: ["/lanoire/*", "/games/lanoire/*"],
            [Q.U.socialClub]: ["/games/lanvr/*", "/games/lan/*"]
          },
          brand: "lanoire",
          links: [{
            text: Ss.nav_lanoire_overview.defaultMessage,
            intlMessage: Ss.nav_lanoire_overview,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: Q.U.www,
              path: "/games/lanoire"
            }
          }, {
            text: Ss.nav_lanoire_progress.defaultMessage,
            intlMessage: Ss.nav_lanoire_progress,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: Ss.nav_lanoire_pc_console.defaultMessage,
              intlMessage: Ss.nav_lanoire_pc_console,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: Ss.nav_lanoire_case_tracker.defaultMessage,
                intlMessage: Ss.nav_lanoire_case_tracker,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: Ss.nav_lanoire_checklist.defaultMessage,
                intlMessage: Ss.nav_lanoire_checklist,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: Ss.nav_lanoire_stats.defaultMessage,
                intlMessage: Ss.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: Ss.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: Ss.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: Ss.nav_lanoire_badge_pursuit.defaultMessage,
                intlMessage: Ss.nav_lanoire_badge_pursuit,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: Ss.nav_lanoire_vr_case_files.defaultMessage,
              intlMessage: Ss.nav_lanoire_vr_case_files,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: Ss.nav_lanoire_stats.defaultMessage,
                intlMessage: Ss.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: Ss.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: Ss.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: Ss.nav_lanoire_support.defaultMessage,
            intlMessage: Ss.nav_lanoire_support,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: Ss.nav_lanoire_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_lanoire_cta_buy_now,
            dataTestId: "lanoirePurchaseLink",
            location: {
              domain: Q.U.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy"
          }
        },
        nr = {
          site: "manhunt",
          appearancePaths: {
            [Q.U.www]: ["/games/manhunt/*"]
          },
          brand: "manhunt",
          links: []
        },
        sr = {
          site: "manhunt2",
          appearancePaths: {
            [Q.U.www]: ["/games/manhunt2/*"]
          },
          brand: "manhunt2",
          links: []
        },
        rr = {
          site: "maxpayne",
          appearancePaths: {
            [Q.U.www]: ["/games/maxpayne/*"]
          },
          brand: "maxpayne",
          links: []
        },
        ir = {
          site: "maxpayne2",
          appearancePaths: {
            [Q.U.www]: ["/games/maxpayne2/*"]
          },
          brand: "maxpayne2",
          links: []
        },
        or = {
          site: "maxpayne3",
          appearancePaths: {
            [Q.U.www]: ["/games/maxpayne3/*"],
            [Q.U.socialClub]: ["/games/maxpayne3/*"]
          },
          brand: "maxpayne3",
          links: [{
            text: Ss.nav_mp3_overview.defaultMessage,
            intlMessage: Ss.nav_mp3_overview,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: Q.U.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: Ss.nav_mp3_progress.defaultMessage,
            intlMessage: Ss.nav_mp3_progress,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: Ss.nav_mp3_accomplishments.defaultMessage,
              intlMessage: Ss.nav_mp3_accomplishments,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: Ss.nav_mp3_singleplayer.defaultMessage,
              intlMessage: Ss.nav_mp3_singleplayer,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: Ss.nav_mp3_career.defaultMessage,
                intlMessage: Ss.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: Ss.nav_mp3_checklist.defaultMessage,
                intlMessage: Ss.nav_mp3_checklist,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: Ss.nav_mp3_grinds.defaultMessage,
                intlMessage: Ss.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: Ss.nav_mp3_chapters.defaultMessage,
                intlMessage: Ss.nav_mp3_chapters,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: Ss.nav_mp3_weapons.defaultMessage,
                intlMessage: Ss.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: Ss.nav_mp3_leaderboards.defaultMessage,
                intlMessage: Ss.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: Ss.nav_mp3_multiplayer.defaultMessage,
              intlMessage: Ss.nav_mp3_multiplayer,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: Ss.nav_mp3_career.defaultMessage,
                intlMessage: Ss.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: Ss.nav_mp3_grinds.defaultMessage,
                intlMessage: Ss.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: Ss.nav_mp3_weapons.defaultMessage,
                intlMessage: Ss.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: Ss.nav_mp3_leaderboards.defaultMessage,
                intlMessage: Ss.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: Ss.nav_mp3_crews.defaultMessage,
              intlMessage: Ss.nav_mp3_crews,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: Ss.nav_mp3_multiplayer.defaultMessage,
                intlMessage: Ss.nav_mp3_multiplayer,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: Ss.nav_mp3_score_attack.defaultMessage,
                intlMessage: Ss.nav_mp3_score_attack,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: Ss.nav_mp3_ny_minute.defaultMessage,
                intlMessage: Ss.nav_mp3_ny_minute,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: Ss.nav_mp3_checkpoint_challenge.defaultMessage,
                intlMessage: Ss.nav_mp3_checkpoint_challenge,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: Ss.nav_mp3_featured.defaultMessage,
                intlMessage: Ss.nav_mp3_featured,
                type: "nav-internal",
                dataTestId: "mp3CrewFeaturedLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Q.U.socialClub,
                  path: "/games/maxpayne3/crews/rivalries"
                }
              }]
            }]
          }, {
            text: Ss.nav_mp3_support.defaultMessage,
            intlMessage: Ss.nav_mp3_support,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: Ss.nav_mp3_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_mp3_cta_buy_now,
            dataTestId: "mp3PurchaseLink",
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy"
          }
        },
        lr = {
          site: "midnightclub",
          appearancePaths: {
            [Q.U.www]: ["/games/midnightclub/*"]
          },
          brand: "midnightclubstreetracing",
          links: []
        },
        _r = {
          site: "midnightclub2",
          appearancePaths: {
            [Q.U.www]: ["/games/midnightclub2/*"]
          },
          brand: "midnightclub2",
          links: []
        },
        cr = {
          site: "midnightclub3",
          appearancePaths: {
            [Q.U.www]: ["/games/midnightclub3/*"]
          },
          brand: "midnightclub3dub",
          links: []
        },
        dr = {
          site: "midnightclubLA",
          appearancePaths: {
            [Q.U.www]: ["/games/midnightclubLA/*"]
          },
          brand: "midnightclubla",
          links: [],
          cta: {
            text: Ss.nav_midnightclubla_buy_now.defaultMessage,
            intlMessage: Ss.nav_midnightclubla_buy_now,
            dataTestId: "midnightClubLaBuyNowCta",
            location: {
              domain: "https://marketplace.xbox.com",
              path: "/en-US/Product/Midnight-Club-LA/66acd000-77fe-1000-9115-d802545407f8"
            },
            ga: "cta_buy"
          }
        },
        gr = {
          site: "oni",
          appearancePaths: {
            [Q.U.www]: ["/games/oni/*"]
          },
          brand: "oni",
          links: []
        },
        mr = {
          site: "rdo",
          appearancePaths: {
            [Q.U.www]: ["/reddeadonline/*"],
            [Q.U.socialClub]: ["/games/rdo/*"]
          },
          brand: "reddeadonline",
          links: [{
            text: Ss.nav_rdo_overview.defaultMessage,
            intlMessage: Ss.nav_rdo_overview,
            type: "nav-internal",
            dataTestId: "rdoLink",
            location: {
              domain: Q.U.www,
              path: "/reddeadonline"
            }
          }, {
            text: Ss.nav_rdo_explore.defaultMessage,
            intlMessage: Ss.nav_rdo_explore,
            type: "nav-dropdown",
            dataTestId: "rdoExploreDropdown",
            children: [{
              text: Ss.nav_rdo_getting_started.defaultMessage,
              intlMessage: Ss.nav_rdo_getting_started,
              type: "nav-internal",
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadonline/features/getting-started"
              }
            }, {
              text: Ss.nav_rdo_specialist_roles.defaultMessage,
              intlMessage: Ss.nav_rdo_specialist_roles,
              type: "nav-internal",
              dataTestId: "rdoRolesLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadonline/features/roles"
              }
            }, {
              text: Ss.nav_rdo_story_missions.defaultMessage,
              intlMessage: Ss.nav_rdo_story_missions,
              type: "nav-internal",
              dataTestId: "rdoLOOLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              }
            }, {
              text: Ss.nav_rdo_posses_free_roam.defaultMessage,
              intlMessage: Ss.nav_rdo_posses_free_roam,
              type: "nav-internal",
              dataTestId: "rdoPossesLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              }
            }, {
              text: Ss.nav_rdo_competitive_series.defaultMessage,
              intlMessage: Ss.nav_rdo_competitive_series,
              type: "nav-internal",
              dataTestId: "rdoSAELink",
              location: {
                domain: Q.U.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              }
            }, {
              text: Ss.nav_rdo_customization.defaultMessage,
              intlMessage: Ss.nav_rdo_customization,
              type: "nav-internal",
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadonline/features/customization"
              }
            }, {
              text: Ss.nav_rdo_progression.defaultMessage,
              intlMessage: Ss.nav_rdo_progression,
              type: "nav-internal",
              dataTestId: "rdoProgressLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadonline/features/rank-and-fortune"
              }
            }]
          }, {
            text: Ss.nav_rdo_progress.defaultMessage,
            intlMessage: Ss.nav_rdo_progress,
            type: "nav-dropdown",
            dataTestId: "rdoProgressDropdown",
            children: [{
              text: Ss.nav_rdo_my_character.defaultMessage,
              intlMessage: Ss.nav_rdo_my_character,
              type: "nav-internal",
              dataTestId: "rdoOverviewButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdo/overview"
              }
            }, {
              text: Ss.nav_rdo_roles.defaultMessage,
              intlMessage: Ss.nav_rdo_roles,
              type: "nav-internal",
              dataTestId: "rdoRolesButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdo/roles"
              }
            }, {
              text: Ss.nav_rdo_club_rewards.defaultMessage,
              intlMessage: Ss.nav_rdo_club_rewards,
              type: "nav-internal",
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdo/clubrewards"
              }
            }, {
              text: Ss.nav_rdo_rank_unlocks.defaultMessage,
              intlMessage: Ss.nav_rdo_rank_unlocks,
              type: "nav-internal",
              dataTestId: "rdoRankButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdo/rank"
              }
            }, {
              text: Ss.nav_rdo_awards.defaultMessage,
              intlMessage: Ss.nav_rdo_awards,
              type: "nav-internal",
              dataTestId: "rdoAwardsButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdo/awards"
              }
            }, {
              text: Ss.nav_rdo_accomplishments.defaultMessage,
              intlMessage: Ss.nav_rdo_accomplishments,
              type: "nav-internal",
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdo/achievements"
              }
            }, {
              text: Ss.nav_rdo_benefits.defaultMessage,
              intlMessage: Ss.nav_rdo_benefits,
              type: "nav-internal",
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdo/benefits"
              }
            }]
          }, {
            text: Ss.nav_rdo_community.defaultMessage,
            intlMessage: Ss.nav_rdo_community,
            type: "nav-dropdown",
            dataTestId: "rdoCommunityDropdown",
            children: [{
              text: Ss.nav_rdo_posses.defaultMessage,
              intlMessage: Ss.nav_rdo_posses,
              type: "nav-internal",
              dataTestId: "rdoPosseButton",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdo/posse"
              }
            }, {
              text: Ss.nav_rdo_photos.defaultMessage,
              intlMessage: Ss.nav_rdo_photos,
              type: "nav-internal",
              dataTestId: "rdoPhotosButton",
              location: {
                domain: Q.U.socialClub,
                path: "/photos/?title=rdr2"
              }
            }]
          }, {
            text: Ss.nav_rdo_catalogue.defaultMessage,
            intlMessage: Ss.nav_rdo_catalogue,
            type: "nav-external",
            dataTestId: "rdoCatalogueButton",
            target: "_blank",
            location: {
              domain: Q.U.socialClub,
              path: "games/rdr2/catalogue/online/"
            }
          }, {
            text: Ss.nav_rdo_support.defaultMessage,
            intlMessage: Ss.nav_rdo_support,
            type: "nav-external",
            dataTestId: "rdoSupportLink",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: Ss.nav_rdo_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_rdo_cta_buy_now,
            dataTestId: "rdoPurchaseLink",
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        },
        vr = {
          site: "reddeadredemption",
          appearancePaths: {
            [Q.U.www]: ["/reddeadredemption/*"]
          },
          brand: "reddeadredemption",
          links: [],
          cta: {
            text: Ss.nav_rdr_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_rdr_cta_buy_now,
            dataTestId: "rsrBuyNowCta",
            location: {
              domain: Q.U.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy"
          }
        },
        ur = {
          site: "rdr2",
          appearancePaths: {
            [Q.U.www]: ["/reddeadredemption2/*", "/games/reddeadredemption2/*"],
            [Q.U.socialClub]: ["/games/rdr2/*"]
          },
          brand: "reddeadredemption2",
          links: [{
            text: Ss.nav_rdr2_overview.defaultMessage,
            intlMessage: Ss.nav_rdr2_overview,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: Q.U.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: Ss.nav_rdr2_explore.defaultMessage,
            intlMessage: Ss.nav_rdr2_explore,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: Ss.nav_rdr2_van_der_linde_gang.defaultMessage,
              intlMessage: Ss.nav_rdr2_van_der_linde_gang,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: Ss.nav_rdr2_locations.defaultMessage,
              intlMessage: Ss.nav_rdr2_locations,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: Ss.nav_rdr2_wildlife.defaultMessage,
              intlMessage: Ss.nav_rdr2_wildlife,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: Ss.nav_rdr2_weaponry.defaultMessage,
              intlMessage: Ss.nav_rdr2_weaponry,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: Ss.nav_rdr2_progress.defaultMessage,
            intlMessage: Ss.nav_rdr2_progress,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: Ss.nav_rdr2_stats.defaultMessage,
              intlMessage: Ss.nav_rdr2_stats,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: Ss.nav_rdr2_chapters.defaultMessage,
              intlMessage: Ss.nav_rdr2_chapters,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: Ss.nav_rdr2_challenges.defaultMessage,
              intlMessage: Ss.nav_rdr2_challenges,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: Ss.nav_rdr2_character.defaultMessage,
              intlMessage: Ss.nav_rdr2_character,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: Ss.nav_rdr2_compendium.defaultMessage,
              intlMessage: Ss.nav_rdr2_compendium,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: Ss.nav_rdr2_accomplishments.defaultMessage,
              intlMessage: Ss.nav_rdr2_accomplishments,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: Q.U.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: Ss.nav_rdr2_media.defaultMessage,
            intlMessage: Ss.nav_rdr2_media,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: Ss.nav_rdr2_gallery.defaultMessage,
              intlMessage: Ss.nav_rdr2_gallery,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: Ss.nav_rdr2_artwork.defaultMessage,
              intlMessage: Ss.nav_rdr2_artwork,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: Ss.nav_rdr2_videos.defaultMessage,
              intlMessage: Ss.nav_rdr2_videos,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: Ss.nav_rdr2_music.defaultMessage,
              intlMessage: Ss.nav_rdr2_music,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: Q.U.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: Ss.nav_rdr2_online.defaultMessage,
            intlMessage: Ss.nav_rdr2_online,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: Q.U.www,
              path: "/reddeadonline"
            }
          }, {
            text: Ss.nav_rdr2_catalogue.defaultMessage,
            intlMessage: Ss.nav_rdr2_catalogue,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: Q.U.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: Ss.nav_rdr2_support.defaultMessage,
            intlMessage: Ss.nav_rdr2_support,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: Ss.nav_rdr2_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_rdr2_cta_buy_now,
            dataTestId: "rdr2StoreLink",
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        },
        pr = {
          site: "undeadnightmare",
          appearancePaths: {
            [Q.U.www]: ["/games/undeadnightmare/*"]
          },
          brand: "reddeadredemptionundeadnightmare",
          links: []
        },
        fr = {
          site: "reddeadrevolver",
          appearancePaths: {
            [Q.U.www]: ["/games/reddeadrevolver/*"]
          },
          brand: "reddeadrevolver",
          links: []
        },
        hr = {
          site: "rsg",
          appearancePaths: {
            [Q.U.www]: ["/*"],
            [Q.U.socialClub]: ["/*"]
          },
          brand: null,
          links: [{
            text: Ss.nav_rsg_games.defaultMessage,
            intlMessage: Ss.nav_rsg_games,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: Ss.nav_rsg_newswire.defaultMessage,
            intlMessage: Ss.nav_rsg_newswire,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: Q.U.www,
              path: "/newswire"
            }
          }, {
            text: Ss.nav_rsg_videos.defaultMessage,
            intlMessage: Ss.nav_rsg_videos,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: Q.U.www,
              path: "/videos"
            }
          }, {
            text: Ss.nav_rsg_downloads.defaultMessage,
            intlMessage: Ss.nav_rsg_downloads,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: Q.U.www,
              path: "/downloads"
            }
          }, {
            text: Ss.nav_rsg_store.defaultMessage,
            intlMessage: Ss.nav_rsg_store,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: Q.U.store,
              path: null
            }
          }, {
            text: Ss.nav_rsg_support.defaultMessage,
            intlMessage: Ss.nav_rsg_support,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: Q.U.support,
              path: null
            }
          }],
          cta: {
            text: Ss.nav_rsg_cta_get_launcher.defaultMessage,
            intlMessage: Ss.nav_rsg_cta_get_launcher,
            variant: "highlight",
            dataTestId: "launcherLink",
            location: {
              domain: Q.U.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download"
          },
          hideQuickAccess: !0
        },
        br = {
          site: "stateofemergency",
          appearancePaths: {
            [Q.U.www]: ["/games/stateofemergency/*"]
          },
          brand: "stateofemergency",
          links: []
        },
        kr = {
          site: "skateanddestroy",
          appearancePaths: {
            [Q.U.www]: ["/games/skateanddestroy/*"]
          },
          brand: "thrashersad",
          links: []
        },
        yr = {
          site: "smugglersrun",
          appearancePaths: {
            [Q.U.www]: ["/games/smugglersrun/*"]
          },
          brand: "smugglersrun",
          links: []
        },
        wr = {
          site: "smugglersrun2",
          appearancePaths: {
            [Q.U.www]: ["/games/smugglersrun2/*"]
          },
          brand: "smugglersrun2hostileterritory",
          links: []
        },
        xr = {
          site: "smugglersrunwarzones",
          appearancePaths: {
            [Q.U.www]: ["/games/smugglersrunwarzones/*"]
          },
          brand: "smugglersrunwarzones",
          links: []
        },
        Mr = {
          site: "support",
          appearancePaths: {
            [Q.U.support]: ["/*"]
          },
          brand: null,
          links: [{
            text: Ss.nav_support_home.defaultMessage,
            intlMessage: Ss.nav_support_home,
            type: "nav-internal",
            location: {
              domain: Q.U.support,
              path: ""
            }
          }, {
            text: Ss.nav_support_service_status.defaultMessage,
            intlMessage: Ss.nav_support_service_status,
            type: "nav-internal",
            location: {
              domain: Q.U.support,
              path: "/servicestatus"
            }
          }, {
            text: Ss.nav_support_submit_ticket.defaultMessage,
            intlMessage: Ss.nav_support_submit_ticket,
            type: "nav-internal",
            location: {
              domain: Q.U.support,
              path: "/categories"
            }
          }],
          cta: {
            text: Ss.nav_support_dashboard.defaultMessage,
            intlMessage: Ss.nav_support_dashboard,
            variant: "highlight",
            location: {
              domain: Q.U.support,
              path: "/dashboard"
            },
            ga: "cta_other"
          }
        },
        Sr = {
          site: "tabletennis",
          appearancePaths: {
            [Q.U.www]: ["/games/tabletennis/*"]
          },
          brand: "tabletennis",
          links: [],
          cta: {
            text: Ss.nav_tabletennis_cta_buy_now.defaultMessage,
            intlMessage: Ss.nav_tabletennis_cta_buy_now,
            variant: "highlight",
            dataTestId: "tableTennisCta",
            location: {
              domain: "https://www.xbox.com",
              path: "/en-US/games/store/rockstar-table-tennis/bvz4h08bmq3h"
            },
            ga: "cta_buy"
          }
        },
        Cr = {
          site: "italianjob",
          appearancePaths: {
            [Q.U.www]: ["/games/italianjob/*"]
          },
          brand: "theitalianjob",
          links: []
        },
        Nr = {
          site: "thewarriors",
          appearancePaths: {
            [Q.U.www]: ["/games/thewarriors/*"]
          },
          brand: "thewarriors",
          links: []
        },
        jr = {
          site: "wildmetal",
          appearancePaths: {
            [Q.U.www]: ["/games/wildmetal/*"]
          },
          brand: "wildmetal",
          links: []
        },
        Tr = e => {
          const a = Is(),
            t = (e, n) => n?.requiresAuth && !a.nickname ? e : [...e, {
              ...n,
              ...n.children ? {
                children: n.children.reduce(t, [])
              } : []
            }];
          return (0, o.useMemo)((() => e.reduce(t, [])), [e, a.nickname])
        },
        Ir = e => {
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
            return (0, O.jsx)("a", {
              title: n,
              href: t,
              onClick: e,
              ...i,
              children: a
            })
          }
          if (o) return (0, O.jsx)(G.NavLink, {
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
          return "function" == typeof l?.className && delete l.className, (0, O.jsx)("a", {
            href: t,
            ...l,
            title: n,
            onClick: e => r(e),
            target: _,
            children: a
          })
        };
      var Er = t(66384),
        Ar = t.n(Er);
      t(50668);
      const Lr = {
          button: "rockstargames-modules-core-headerf5dc166ac5cc8fab506116c0da01dcc2",
          secondary: "rockstargames-modules-core-headerb139179467cbca2821a4f3ee8d2972a9"
        },
        Pr = e => {
          let {
            className: a = "",
            children: t,
            context: n = "",
            to: s,
            onClick: r,
            ...i
          } = e;
          const o = [Lr.button, Lr[n], a].join(" ");
          return s ? (0, O.jsx)(Ir, {
            ...i,
            to: s,
            className: o,
            onClick: r ? () => r() : () => {},
            children: t
          }) : (0, O.jsx)("button", {
            ...i,
            type: "button",
            className: o,
            onClick: r ? () => r() : () => {},
            children: t
          })
        },
        Or = function() {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
          return [...a].filter(Boolean).join(" ")
        },
        Dr = (0, o.createContext)(),
        {
          Provider: zr
        } = Dr,
        Ur = e => {
          let {
            children: a,
            payload: t
          } = e;
          return (0, O.jsx)(zr, {
            value: t,
            children: a
          })
        },
        Vr = (0, o.createContext)(),
        {
          Provider: Br
        } = Vr,
        Rr = e => {
          let {
            children: a,
            components: t
          } = e;
          return (0, O.jsx)(Br, {
            value: t,
            children: a
          })
        };
      var Gr = t(41188),
        Fr = t.n(Gr);
      t(81060), t(5780);
      const qr = "content";
      var $r = t(61656);
      const Hr = e => {
          let {
            components: a,
            payload: t,
            componentProps: n = {}
          } = e;
          const s = (0, o.useMemo)((() => (Os().cloneDeepWith(t, ((e, n) => {
            "_template" !== n || Number.isInteger(Number(e)) || Os().get(a, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", a))
          })), (e => {
            let {
              components: a,
              payload: t,
              componentProps: n
            } = e;
            const s = e => {
              let r = "";
              if (r = Array.isArray(e?.[qr]) ? e[qr].map((e => s(e))) : e?.[qr] ?? "", !e?._template) return r;
              let i, l = e._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(a),
                payload: e
              }), l = "gen9.Hero"), i = Os().get(a, l) ?? null;
              const _ = [...e?.translations ?? []].reverse(),
                c = `componentProps_${(0,$r.c)()}`;
              return (0, o.createElement)(i, {
                ...t?.meta,
                ...e,
                ...n,
                t: e => _.find((a => a?._key === e))?.value ?? e,
                key: c
              }, r)
            };
            return t?.[qr]?.length ? s(t) : null
          })({
            components: a,
            payload: t,
            componentProps: n
          }))), [JSON.stringify(t), JSON.stringify(a)]);
          return s
        },
        Wr = e => {
          let {
            tina: a,
            components: t = {},
            componentProps: n = {}
          } = e;
          const s = (0, o.useContext)(Dr),
            [r, i] = (0, o.useState)(null),
            [l, _] = (0, o.useState)(null);
          (0, o.useEffect)((() => {
            a?.payload && i(a.payload), a?.variables && _(a.variables)
          }), [a]);
          const [c] = (0, o.useState)({
            ...t,
            ...(0, o.useContext)(Vr) ?? {}
          }), d = (e => {
            let {
              payload: a
            } = e;
            const [t, n] = (0, o.useState)(a);
            return (0, o.useEffect)((() => {
              const e = Os().debounce((() => {
                const e = JSON.parse(JSON.stringify(a));
                Os().cloneDeepWith(e, ((e, a, t) => {
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
          }), g = (e => {
            let {
              payload: a,
              variables: t
            } = e;
            const [n, s] = (0, o.useState)(a), [r, i] = (0, o.useState)(t);
            return (0, o.useEffect)((() => {
              const e = ((e, a) => {
                  const t = {};
                  return Os().cloneDeepWith(e, ((e, n, s) => {
                    n === a && e && (t[s.key] = e)
                  })), t
                })(a, "_memoq"),
                n = JSON.parse(JSON.stringify(Os().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(t?.keys ?? {})))));
              i(n)
            }), [JSON.stringify(a), t]), (0, o.useEffect)((() => {
              const e = JSON.parse(JSON.stringify(a)),
                t = JSON.parse(JSON.stringify(r));
              Os().cloneDeepWith(e, ((e, a, n) => {
                (e => {
                  let {
                    item: a,
                    variableKey: n
                  } = e;
                  if (!a || !Os().has(a, "key") || a.translated) return;
                  const s = t[a.key] ?? null;
                  if (!s) return;
                  const r = Fr()(s);
                  Object.keys(r).map((e => {
                    Os().set(a, e, r[e])
                  })), Os().set(a, "translated", !0), Object.freeze(a)
                })({
                  item: n,
                  variableKey: e
                })
              })), s(e)
            }), [JSON.stringify(a), JSON.stringify(r)]), n
          })({
            payload: r,
            variables: l
          });
          return (0, o.useMemo)((() => {
            if (!r) return null;
            const e = g,
              t = r?.meta?.prod ?? r?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              i = {
                ...r,
                meta: {
                  ...r?.meta ?? {},
                  prod: t
                }
              };
            return (0, O.jsx)(Ur, {
              payload: i,
              children: (0, O.jsx)(Rr, {
                components: c,
                children: (0, O.jsx)(Hr, {
                  payload: e,
                  components: c,
                  componentProps: {
                    ...n,
                    tina: a
                  }
                })
              })
            })
          }), [s, r, JSON.stringify(d), JSON.stringify(g)])
        };
      var Jr = t(48111);
      const Xr = (0, t(62952).U1)(),
        Kr = e => e.some((e => !e)),
        Yr = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [n, s] = (0, o.useState)(!1), r = (e => {
            const [a] = (0, G.useSearchParams)(), [t, n] = (0, o.useState)(null), s = B(), {
              loggedIn: r
            } = s, {
              currentCharId: i
            } = N(), l = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, o.useMemo)((() => {
                const n = e?.data?.characters?.[t];
                return "1" === (n?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(s, i);
            return (0, o.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              Xr.applyFilters("preview_conditions", e);
              const s = [];
              return e.forEach((e => {
                const {
                  value: n
                } = e;
                if (t) return "true" === a.get(n) ? (s.push(!0), !0) : (s.push(!1), !1);
                if (Kr(s)) return !1;
                switch (n) {
                  case "user:is:loggedIn":
                    s.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    s.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    s.push(!0 === l);
                    break;
                  case "user:not:gtaPlus":
                    s.push(!1 === l);
                    break;
                  default:
                    s.push(!1)
                }
                return null
              })), n(!Kr(s)), () => {}
            }), [a, e, l, s, r]), t
          })(a);
          return (0, o.useEffect)((() => {
            s(r)
          }), [r]), (0, o.useMemo)((() => n ? t : null), [n])
        };
      (0, _.Ux)((e => {
        let {
          children: a
        } = e;
        return o.Children.map(o.Children.toArray(a), (e => (0, O.jsx)(Yr, {
          ...e?.props
        })))
      }));
      var Qr = t(8912),
        Zr = t(86764);
      const ei = e => {
          let {
            className: a
          } = e;
          return (0, O.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, O.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, O.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        ai = {
          pillBtn: "rockstargames-modules-core-headerebb497c1cbaf34ef6d319135bd0a3b1a",
          selected: "rockstargames-modules-core-headerb110e5671f28d1932a830b232bd10632",
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
        ti = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: n
          } = H(), {
            refetch: s
          } = (0, l.UL)(Zr.UserGetVote, {
            skip: !0
          }), [r] = (0, l.cQ)(Zr.UserCastVote), [i, _] = (0, o.useState)(null), c = (0, o.useCallback)((e => {
            (async () => {
              if (e === i && null !== i) _(null);
              else {
                _(e), n({
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
          return (0, o.useEffect)((() => {
            a && t && (async () => {
              const e = await s({
                foreignId: a,
                foreignType: t
              });
              _(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, O.jsxs)("div", {
            className: ai.calloutVoteForm,
            children: [(0, O.jsx)("button", {
              "aria-label": "upvote",
              className: [ai.upvote, ai.voteButton, i ? ai.active : ""].join(" "),
              name: "upvote",
              onClick: () => c(!0),
              type: "button"
            }), (0, O.jsx)("button", {
              "aria-label": "downvote",
              className: [ai.downvote, ai.voteButton, !1 === i ? ai.active : ""].join(" "),
              name: "downvote",
              onClick: () => c(!1),
              type: "button"
            })]
          })
        },
        ni = e => {
          let {
            action_text: a,
            link: t,
            trackingData: n
          } = e;
          const {
            track: s
          } = H();
          return (0, O.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, O.jsxs)("button", {
              className: ai.calloutLink,
              type: "button",
              onClick: n ? () => s({
                ...n
              }) : () => {},
              children: [a, (0, O.jsx)(ei, {
                className: ai.calloutLinkIcon
              })]
            })
          })
        },
        si = e => {
          let {
            helperText: a,
            linkText: t,
            link: n,
            trackingData: s
          } = e;
          const {
            track: r
          } = H();
          return (0, O.jsxs)("div", {
            className: ai.actionFooter,
            children: [a, t && " ", t && (0, O.jsx)("a", {
              href: n ?? "",
              onClick: () => r({
                ...s
              }),
              children: t
            })]
          })
        };
      (0, _.Ux)((e => {
        let {
          header: a,
          subheader: t,
          type: n,
          action_text: s,
          link: r,
          foreign_id: i = document.location.pathname,
          foreign_type: l = "url",
          className: _ = "",
          actionFooterHelperText: c,
          actionFooterLinkText: d,
          actionFooterLink: g,
          trackingData: m = {},
          actionFooterLinkTrackingData: v = {},
          t: u,
          ...p
        } = e;
        const {
          loggedIn: f
        } = B(), {
          track: h
        } = H(), b = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
          ref: k,
          inView: y
        } = (0, Qr.cD)({
          threshold: .6
        }), [w, x] = (0, o.useState)(!1);
        let M;
        if ((0, o.useEffect)((() => {
            y && !w && (h({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "callout section",
              element_placement: `callout section - ${p?.sectionName??p?._memoq?.header}`
            }), x(!0))
          }), [y]), !a && !t) return null;
        switch (n) {
          case "vote":
            if (!f) {
              M = (0, O.jsx)(Pr, {
                to: b,
                className: ai.calloutButton,
                onClick: m ? () => h({
                  ...m
                }) : () => {},
                children: "Log In"
              });
              break
            }
            M = (0, O.jsx)(ti, {
              foreign_id: i,
              foreign_type: l
            });
            break;
          case "button":
            s && r && (M = (0, O.jsx)(Pr, {
              to: r,
              className: ai.calloutButton,
              onClick: m ? () => h({
                ...m
              }) : () => {},
              children: s
            }));
            break;
          case "link":
            s && r && (M = (0, O.jsx)(ni, {
              action_text: s,
              link: r,
              trackingData: m
            }));
            break;
          default:
            M = null
        }
        return (0, O.jsx)("div", {
          className: `${ai.calloutContainer} ${_||""}`,
          ref: k,
          children: (0, O.jsxs)("div", {
            className: ai.calloutSection,
            children: [(0, O.jsxs)("div", {
              className: [ai.calloutHeaders, M ? ai.calloutHeaderMargins : ""].join(" "),
              children: [a && (0, O.jsx)("h2", {
                className: ai.calloutHeader,
                children: u(a)
              }), t && (0, O.jsx)("h3", {
                className: ai.calloutSubheader,
                children: u(t)
              })]
            }), (0, O.jsxs)("div", {
              className: ai.actionBlock,
              children: [M, c && (0, O.jsx)(si, {
                helperText: c,
                linkText: d,
                link: g,
                trackingData: v
              })]
            })]
          })
        })
      })), t(71456);
      var ri = t(77448),
        ii = t.n(ri);
      const {
        sanitize: oi
      } = ii();
      t(73824);
      var li = t(244);
      const _i = {
          img: "rockstargames-modules-core-headerbf430847a4fc75f43c281b702cb67775",
          startAnimation: "rockstargames-modules-core-headerf937aa11d861c7446258df7cfd669940"
        },
        ci = e => {
          let {
            imgSrc: a,
            title: t
          } = e;
          const [n] = (0, _.kJ)(a);
          return (0, O.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [_i.img, n ? _i.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        di = e => {
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
          return (0, O.jsx)(Ir, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: o,
            target: "_self",
            className: "rockstargames-modules-core-headerab00cee9c6ebfc9dde968ca69f3f8b52",
            children: (0, O.jsx)(ci, {
              imgSrc: n,
              title: a.title
            })
          })
        };
      var gi = t(28548);
      class mi extends o.Component {
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
          return this?.state?.error?.message ? (0, O.jsxs)("div", {
            className: "rockstargames-modules-core-headeracd7086fbe8edad6f39a19c8f493ad75",
            children: [(0, O.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, O.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const vi = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, O.jsx)(mi, {
              header: a,
              children: (0, O.jsx)(e, {
                ...t
              })
            })
          }
        },
        ui = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: n,
            onPrevClicked: s
          } = e;
          return (0, O.jsxs)("div", {
            className: "rockstargames-modules-core-headere2ed16f199999059ee169ac09091ba51",
            children: [(0, O.jsx)("div", {
              className: "rockstargames-modules-core-headerc8f16b560066271b2342690cad248566",
              ref: a,
              onClick: s,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, O.jsx)("div", {
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
        pi = (vi((e => {
          let {
            description: a,
            slideChildren: t,
            size: n,
            title: s,
            customSlidesPerView: r = null,
            customSpaceBetween: i = null,
            slideClass: l,
            style: _,
            className: c,
            cardSizeBreakpoints: d = {},
            customAspectRatio: g,
            titleBadge: m
          } = e;
          const {
            track: v
          } = H(), u = (0, o.useRef)(null), p = (0, o.useRef)(null), f = (0, o.useRef)(null), [h, b] = (0, o.useState)(null), [k, y] = (0, o.useState)(!1), [w, x] = (0, o.useState)(null), [M, S] = (0, o.useState)({}), [C, N] = (0, o.useState)(), {
            ref: j,
            inView: T
          } = (0, Qr.cD)({
            threshold: .6
          }), [I, E] = (0, o.useState)(!1), [A, L] = (0, o.useState)(null), [P, D] = (0, o.useState)(!1);
          (0, o.useEffect)((() => {
            const e = () => {
              D(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const z = {
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
          (0, o.useEffect)((() => {
            if (!u.current) return;
            const e = () => {
              if (u.current) {
                const e = r || Number(window.getComputedStyle(u.current).getPropertyValue("--slides-per-view")),
                  a = r ? 1 : Number(window.getComputedStyle(u.current).getPropertyValue("--slides-per-view-multiplier"));
                x(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [u, r]), (0, o.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, L(a))
            })), E(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && P ? null : (0, O.jsx)(Jr.Ky, {
              className: "rockstargames-modules-core-headerebab28121a6317a2b17e72d4abc7cd8a",
              onFocus: () => V(a),
              children: e
            }, Symbol(a).toString())));
            b(a)
          }), [t, P]), (0, o.useEffect)((() => {
            N({
              nextEl: f.current,
              prevEl: p.current
            })
          }), [f, p]), (0, o.useEffect)((() => {
            T && !k && t && (v({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${s}`.toLowerCase(),
              element_placement: `deck - ${s}`.toLowerCase()
            }), y(!0))
          }), [T, t]);
          let U = "custom" === n ? {
            "--custom-aspect-ratio": g,
            ..._
          } : {
            ..._
          };
          const V = e => {
            M.slideTo(e)
          };
          return (0, O.jsxs)("div", {
            className: Or("rockstargames-modules-core-headerb8efa928adc0e5c84563e8f9cf7f3a30", c),
            "data-size": n,
            "data-sm": d?.sm ? d?.sm : n,
            "data-md": d?.md ? d?.md : n,
            "data-lg": d?.lg ? d?.lg : n,
            "data-xl": d?.xl ? d?.xl : n,
            "data-xxl": d?.xxl ? d?.xxl : n,
            "data-has-covercard": I,
            ref: u,
            style: U,
            children: [(0, O.jsx)("div", {
              className: "rockstargames-modules-core-headerc9b615cce89d13b7bddc99e21c3c1f4c",
              ref: j
            }), I && P && (0, O.jsx)("div", {
              className: "rockstargames-modules-core-headere7026dae446389aca79ae8b0357e03ee",
              children: A
            }), (0, O.jsx)("div", {
              className: "rockstargames-modules-core-headerf80fd6d5582561660104adb89e12faaf",
              children: (0, O.jsxs)("div", {
                className: "rockstargames-modules-core-headerabff66535c2f133ee2fc7178d24baa37",
                children: [(0, O.jsxs)("div", {
                  className: "rockstargames-modules-core-headerdbff9f12e6751f7fc29390e76412845f",
                  children: [!I && s && (0, O.jsxs)("div", {
                    className: "rockstargames-modules-core-headerd8c745773c51e4c8fcee8c5ffa02f50a",
                    children: [(0, O.jsx)("h2", {
                      children: s
                    }), m && (0, O.jsx)("span", {
                      className: "rockstargames-modules-core-headerb73f00c53394c6282e0d22da20410913",
                      children: m
                    })]
                  }), (0, O.jsx)(ui, {
                    prevRef: p,
                    nextRef: f,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, O.jsx)("div", {
                  className: "rockstargames-modules-core-headerbd954b7dc66b2e48e3aa7d4022bb288f",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), w ? (0, O.jsx)(Jr.wx, {
              slidesPerView: w,
              onInit: e => {
                S(e)
              },
              grabCursor: !0,
              navigation: C,
              modules: [gi._2],
              breakpoints: z,
              slideClass: Or("swiper-slide", l),
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
              children: h
            }) : ""]
          })
        }), null), JSON.parse('{"us":{"plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}')),
        fi = (0, i.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        hi = {
          pillBtn: "rockstargames-modules-core-headerac877cedd2cbc9b6a0691022dd85d50c",
          selected: "rockstargames-modules-core-headereb9a4ff3bdbe316e9cd1462478307682",
          scMenuStyles: "rockstargames-modules-core-headerd888853317a81871ac70c869496c0525",
          languageSelector: "rockstargames-modules-core-headerbd873d56ac7ca44414ac5cb26381131a",
          open: "rockstargames-modules-core-headerd7b8ca3cd51951aab1075409f5dc23a6",
          linkWrapper: "rockstargames-modules-core-headerc2e6d274e985fac4c88e11dcc9a78c14",
          links: "rockstargames-modules-core-headerc2a9aa0b1fb7182744f8084dbafa7705",
          selectBoxWrapper: "rockstargames-modules-core-headerb843d644faa01d9ea25f1a2dd56ffab0",
          selectBox: "rockstargames-modules-core-headerfa5d93789da028ad988798450fe34680",
          selectBoxOption: "rockstargames-modules-core-headerfcc44b6cd14ec9c4f152d4318ce36bac"
        },
        bi = (0, i.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: n
          } = e;
          const s = (0, G.useLocation)(),
            r = (0, i.useIntl)(),
            [l, _] = (0, i.getLocale)(),
            [c, d] = (0, o.useState)(!1),
            g = (0, o.useMemo)((() => (0, Q.c)()), []),
            m = (0, o.useCallback)((e => {
              let a = s.pathname;
              const t = a.split("/");
              return i.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), g.currentSite?.site === Q.U.www ? "en" === e ? `${window.location.origin}${a}${s.search}` : `${window.location.origin}/${e}${a}${s.search}` : `${window.location.origin}${a}${s.search}`
            }), [s]),
            v = (0, o.useRef)(null),
            [u, p] = (0, o.useState)(0),
            f = matchMedia("(hover: none) and (pointer: coarse)").matches,
            h = e => {
              if (n && n(!1), l.subdomaincom === e || "none" === e) return void(n && n(!1));
              const a = i.locales.find((a => a.subdomaincom === e));
              a && (_(a.iso), window.location.href = m(e))
            };
          return (0, o.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === c && d(!1)
          }), [t]), (0, o.useEffect)((() => {
            v.current && p(v.current.scrollHeight)
          }), [v]), (0, O.jsxs)("div", {
            className: [hi.languageSelector, c ? hi.open : ""].join(" "),
            "data-theme": a,
            children: [f && "sc-menu" === a && (0, O.jsx)("div", {
              className: hi.selectBoxWrapper,
              children: (0, O.jsxs)("select", {
                className: hi.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  h(e.currentTarget.value)
                },
                children: [(0, O.jsx)("option", {
                  className: hi.selectBoxOption,
                  value: "none",
                  children: (0, O.jsx)(i.FormattedMessage, {
                    ...fi.language_selector_default
                  })
                }), i.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, O.jsx)("option", {
                    className: hi.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!f || "sc-menu" !== a) && (0, O.jsxs)(O.Fragment, {
              children: [(0, O.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), n && n(!c), d(!c)
                },
                type: "button",
                "aria-label": r.formatMessage(fi.language_selector_default),
                children: [(0, O.jsx)("i", {}), (0, O.jsx)("span", {
                  children: (0, O.jsx)(i.FormattedMessage, {
                    ...fi.language_selector_default
                  })
                })]
              }), (0, O.jsx)("div", {
                className: hi.linkWrapper,
                ref: v,
                style: {
                  "--ls-linkWrapper-opened-height": `${u}px`
                },
                children: (0, O.jsx)("div", {
                  className: hi.links,
                  children: i.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, O.jsx)(Ir, {
                      to: m(a),
                      onClick: () => {
                        h(a)
                      },
                      tabIndex: c ? 0 : -1,
                      children: t
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), pi),
        ki = {
          tag: "rockstargames-modules-core-headerf5978929e516a7f156d3d81ca93d966a"
        },
        yi = e => {
          let {
            className: a,
            href: t,
            title: n,
            style: s
          } = e;
          const r = (0, O.jsxs)("div", {
            style: s,
            className: [ki.tag, a].join(" "),
            children: [(0, O.jsx)("i", {}), n]
          });
          return void 0 !== t ? (0, O.jsx)(Ir, {
            to: t,
            children: r
          }) : r
        },
        wi = {
          newswireBlock: "rockstargames-modules-core-headerba2782b4444a519a060ddc4727f3fd79",
          info: "rockstargames-modules-core-headerb760fbda945b1aababe2df978bd27419",
          title: "rockstargames-modules-core-headerf23284941e0f8ffc13c9e4d77d2b7251",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-headerd5aec57fe2a8f93469a703100f272c64",
          preview: "rockstargames-modules-core-headerc78eec9cb8b10c5b29849794f5a58ea6",
          previewMobile: "rockstargames-modules-core-headeree92338af02ea3f31f362cb1804825ae",
          top: "rockstargames-modules-core-headera364218e924ffd9f280ad0b05495683b",
          startAnimation: "rockstargames-modules-core-headerc68720aaf32901f2a1946f596fd1f0a3"
        },
        xi = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: n = !1,
            style: s = {}
          } = e;
          const [r] = (0, G.useSearchParams)(), i = t.preview_images_parsed.newswire_block, o = {
            default: 0 !== a || n ? i.square || i.d16x9 || i._fallback : i.d16x9 || i.square || i._fallback,
            mobile: i.square || i._fallback
          }, [l, c] = (0, _.kJ)(o.default), [d, g] = (0, _.kJ)(o.mobile), m = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          };
          return (0, O.jsx)(Ir, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [wi.newswireBlock, n ? wi.newswireBlockNoSpecialOrder : "", null !== l ? wi.startAnimation : ""].join(" "),
            children: (0, O.jsxs)(O.Fragment, {
              children: [0 !== a || r.get("tag_id") ? (0, O.jsx)("div", {
                className: wi.preview,
                style: m.default
              }) : (0, O.jsxs)(O.Fragment, {
                children: [(0, O.jsx)("div", {
                  className: wi.previewMobile,
                  style: m.mobile
                }), (0, O.jsx)("div", {
                  className: wi.preview,
                  style: m.default
                })]
              }), (0, O.jsxs)("div", {
                className: wi.info,
                children: [(0, O.jsxs)("div", {
                  className: wi.top,
                  children: [t.primary_tags.length ? (0, O.jsx)(yi, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, O.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, O.jsx)("h5", {
                  className: wi.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Mi = t(63640),
        Si = t.n(Mi);
      (0, _.Ux)((e => {
        let {
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: n = "/newswire",
          t: s
        } = e;
        const [r] = (0, G.useSearchParams)(), {
          tagId: i = null
        } = (0, G.useParams)(), [_, c] = (0, o.useState)(i ?? t ?? r.get("tag_id")), [d, g] = (0, o.useState)(1), [m, v] = (0, o.useState)([]), [u, p] = (0, o.useState)(null), {
          data: f
        } = (0, l.UL)(Si(), {
          variables: {
            tagId: Number(_),
            page: d,
            metaUrl: n
          },
          autoSetLoading: !0
        });
        return (0, o.useEffect)((() => {
          g(1), v([]), c(i ?? t ?? r.get("tag_id"))
        }), [r.get("tag_id")]), (0, o.useEffect)((() => {
          f && f.posts && f.posts.paging && p(f.posts.paging), f && f.posts && f.posts.results && v(m.concat(f.posts.results))
        }), [f]), m.length ? (0, O.jsxs)(O.Fragment, {
          children: [(0, O.jsx)(ji, {
            posts: m,
            relativeTo: a,
            noSpecialOrder: null !== _
          }), null !== u && u.nextPage ? (0, O.jsx)(Pr, {
            onClick: () => g(d + 1),
            disabled: !1,
            context: "secondary",
            children: s("More Stories")
          }) : ""]
        }) : null
      }));
      const Ci = {
          pillBtn: "rockstargames-modules-core-headera3a893558754e504fa5efe9d1c81226b",
          selected: "rockstargames-modules-core-headerd5e2ea8b2be06af05d25ca48441c817d",
          related: "rockstargames-modules-core-headerdf69a7aae85a9ec8b5ebd0a64496fb0e",
          posts: "rockstargames-modules-core-headera18a73cb511122aa4c3de9ffcb8363b2",
          just1post: "rockstargames-modules-core-headerf2c39530c1bf7492516d298384b1a3d2"
        },
        Ni = ((0, _.Ux)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, O.jsxs)("section", {
            className: Ci.related,
            children: [(0, O.jsx)("h2", {
              children: t("Related Stories")
            }), (0, O.jsx)("div", {
              className: [Ci.posts, 1 === a.length ? Ci.just1post : ""].join(" "),
              children: a.map((e => (0, O.jsx)(xi, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })), {
          newswireBlocks: "rockstargames-modules-core-headerdf082531ed434e4a44ea2c3474a07465",
          noSpecialOrder: "rockstargames-modules-core-headerf7a8b59f042399a20d9c74b1e2b76f4a"
        }),
        ji = (0, _.S6)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: n,
            relativeTo: s
          } = e;
          return (0, o.useEffect)((() => {
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
          }), [t.length]), (0, O.jsx)("div", {
            className: [Ni.newswireBlocks, a ? Ni.noSpecialOrder : "", Ni.contextHome].join(" "),
            children: t.map(((e, t) => (0, O.jsx)(xi, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        {
          sanitize: Ti
        } = ii();
      (0, i.defineMessages)({
        plm_nav_scroll_left: {
          id: "plm_nav_scroll_left",
          defaultMessage: "Scroll Left"
        },
        plm_nav_scroll_right: {
          id: "plm_nav_scroll_right",
          defaultMessage: "Scroll Right"
        }
      }), t(25324);
      const Ii = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(16132),
                alt: "PC"
              } : {
                src: t(47556),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(55728),
                alt: "PS4"
              } : {
                src: t(50372),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(50516),
                alt: "PS5"
              } : {
                src: t(14520),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(62260),
                alt: "Xbox One"
              } : {
                src: t(52892),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(64680),
                alt: "Xbox Series X|S"
              } : {
                src: t(39028),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        Ei = e => t(e < 100 ? 99116 : e > 99 && e < 500 ? 63276 : e > 499 && e < 750 ? 75268 : 80136),
        Ai = (0, i.defineMessages)({
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
        Li = {
          pillBtn: "rockstargames-modules-core-headere8a1d2eb140c539e3e889acd5b8cf38d",
          selected: "rockstargames-modules-core-headerd943ca85db3cb44bd9b6f261ea64f0ad",
          scCharacterCard: "rockstargames-modules-core-headerf487ed8cf89592754338ae36512bdeea",
          scAvatar: "rockstargames-modules-core-headerdd53cc1b29f4888c81867109f7544724",
          scCharNames: "rockstargames-modules-core-headerf24abf052789535c86b76d71558ff073",
          scCharacterStats: "rockstargames-modules-core-headerf432b4ba86e45bfecd2cb6c09b05dbeb",
          scUserName: "rockstargames-modules-core-headerac4345f9ce0d86ffbd6a98527b4d1960",
          scRpLevel: "rockstargames-modules-core-headerac79c86f5c1a63d4256804dd627faf37",
          scRpIcon: "rockstargames-modules-core-headerea02be0d605beb956006afc770048c6c"
        },
        Pi = ((0, i.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const n = (0, i.useIntl)(),
            {
              platform: s,
              platformUsername: r,
              mugshotUrl: l,
              stats: _
            } = a,
            [c, d] = (0, o.useState)(l),
            g = Ii(s, "large");
          return (0, O.jsxs)("div", {
            className: Li.scCharacterCard,
            children: [(0, O.jsx)("div", {
              className: Li.scAvatar,
              "data-size": "small",
              children: (0, O.jsx)("img", {
                src: c,
                alt: n.formatMessage(Ai.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  d(t(59796))
                }
              })
            }), (0, O.jsx)("div", {
              className: Li.scCharacterStats,
              children: (0, O.jsxs)("div", {
                className: Li.scCharNames,
                children: [(0, O.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, O.jsx)("div", {
                  className: Li.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, O.jsx)("div", {
                  className: Li.scRp,
                  children: (0, O.jsxs)("div", {
                    className: Li.scRpLevel,
                    children: [(0, O.jsx)("img", {
                      className: Li.scRpIcon,
                      src: Ei(_.overview.rank.value),
                      alt: n.formatMessage(Ai.profile_selector_rp_icon)
                    }), (0, O.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), pi), (0, l.C2)("@rockstargames/components/profile-switcher")),
        Oi = Pi("languageSelectorOpenedReactive", !1),
        Di = e => Oi(e),
        zi = Pi("activeSubNavIdReactive", -1),
        Ui = e => zi(e),
        Vi = Pi("subNavExtraHeightReactive", -1),
        Bi = e => Vi(e),
        Ri = Pi("scNavOpenedReactive", !0),
        Gi = e => Ri(e),
        Fi = Pi("charListHiddenReactive", !0),
        qi = e => Fi(e),
        $i = () => {
          const e = (0, l.gh)(Oi),
            a = (0, l.gh)(zi),
            t = (0, l.gh)(Vi),
            n = (0, l.gh)(Ri),
            s = (0, l.gh)(Fi);
          return (0, o.useEffect)((() => {
            s || (e && Di(!1), n && (Gi(!1), Ui(-1)))
          }), [s]), (0, o.useEffect)((() => {
            !e && s && (n || Gi(!0))
          }), [e, s]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Di,
            activeSubNavId: a,
            setActiveSubNavId: Ui,
            subNavExtraHeight: t,
            setSubNavExtraHeight: Bi,
            scNavOpened: n,
            setScNavOpened: Gi,
            charListHidden: s,
            setCharListHidden: qi
          })), [e, a, t, n, s])
        };
      var Hi = t(88931),
        Wi = t.n(Hi);
      const Ji = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Xi = e => ({
          text: e.formatMessage(Ai.sc_link_help),
          target: "_self",
          ga: {
            ...Ji,
            text: Ai.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Ai.sc_link_support),
            location: {
              domain: Q.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Ji,
              text: Ai.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Ai.sc_link_legal),
            location: {
              domain: Q.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Ji,
              text: Ai.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Ai.sc_link_privacy_policy),
            location: {
              domain: Q.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Ji,
              text: Ai.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Ai.sc_link_cookies_policy),
            location: {
              domain: Q.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Ji,
              text: Ai.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Ai.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Ji,
              text: Ai.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Ai.sc_link_do_not_sell_my_information),
            location: {
              domain: Q.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Ji,
              text: Ai.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Ki = {
          pillBtn: "rockstargames-modules-core-headereec03511e3b2f43754842a7fc6a68aa5",
          selected: "rockstargames-modules-core-headere8b70b111ec1f0a695dbbf51e4dcf126",
          scSubLink: "rockstargames-modules-core-headere51887225d442bec792d42063c300c81",
          scLink: "rockstargames-modules-core-headere74536954b97f9ea202f79d6249f55dd"
        },
        Yi = e => {
          let {
            text: a,
            target: t,
            href: n,
            location: s,
            ga: r,
            dataTestId: i,
            isSubLink: o,
            hasNotifications: l = !1,
            onClickCallback: _ = (() => {}),
            tabIndex: c,
            reloadDocument: d = !1
          } = e;
          const {
            track: g
          } = H(), m = (0, Q.c)();
          let v = n;
          s && (v = s.domain === m.currentSite?.site ? s.path : `https://${m.sites[s.domain]}.rockstargames.com${s.path}`);
          const u = {
            ...r,
            link_url: v
          };
          return (0, O.jsxs)(G.Link, {
            className: o ? Ki.scSubLink : Ki.scLink,
            "data-testid": i || "menuLink",
            title: a,
            to: v,
            target: t,
            rel: "noreferrer",
            reloadDocument: d,
            tabIndex: c,
            onClick: e => {
              g(u), _(e)
            },
            children: [a, l && (0, O.jsx)("span", {
              className: Ki.scLinkNotification
            })]
          })
        },
        Qi = e => {
          let {
            id: a,
            text: t,
            target: n,
            href: s,
            location: r,
            ga: i,
            hasNotifications: l = !1,
            dataTestId: c,
            children: d = [],
            activeSubNavId: g,
            setActiveSubNavId: m,
            setSubNavExtraHeight: v,
            reloadDocument: u = !1,
            onClickCallback: p = (() => {})
          } = e;
          const {
            windowWidth: f,
            windowHeight: h
          } = (0, _.bk)(), {
            track: b
          } = H(), {
            navOpen: k
          } = N(), y = (0, o.useRef)(null), [w, x] = (0, o.useState)(0), [M, S] = (0, o.useState)(0), [C, j] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            g !== a && !1 === C && j(!0), g === a && j(!1)
          }), [g]), (0, o.useEffect)((() => {
            if (!y.current) return;
            x(y?.current?.scrollHeight);
            const e = window.getComputedStyle(y.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), S(a)
            }
          }), [y, f, h]), d.length > 0 ? (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsxs)("button", {
              className: "rockstargames-modules-core-headerf34eed7203bbb1e4af8f0c059bd5822f",
              type: "button",
              "data-testid": c || "menuButton",
              title: t,
              tabIndex: k ? 0 : -1,
              "data-children-hidden": C,
              onClick: e => {
                e.stopPropagation(), b(i), g === a ? (m(-1), v(0)) : (m(a), v(w + M + M))
              },
              children: [(0, O.jsx)("span", {
                className: "rockstargames-modules-core-headerf654bb2aaf5d8c4857470b3ac902b02d",
                children: t
              }), (0, O.jsx)("span", {
                className: "rockstargames-modules-core-headeree4353eb6a65792d6d5679865de99147"
              })]
            }, t), (0, O.jsx)("nav", {
              className: "rockstargames-modules-core-headerd65fae5292f55184870d65ab2d4fdb71",
              ref: y,
              "aria-hidden": C,
              style: {
                height: C ? 0 : `${w}px`
              },
              children: d.map((e => (0, O.jsx)(Yi, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: C || !k ? -1 : 0
              })))
            })]
          }) : (0, O.jsx)(Yi, {
            text: t,
            target: n,
            href: s,
            location: r,
            ga: i,
            hasNotifications: l,
            dataTestId: c,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: k ? 0 : -1,
            reloadDocument: u
          })
        },
        Zi = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: t,
            windowHeight: n
          } = (0, _.bk)(), s = (0, i.useIntl)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: l,
            activeSubNavId: c,
            setActiveSubNavId: d,
            subNavExtraHeight: g,
            setSubNavExtraHeight: m
          } = $i(), {
            setSelectedCharacterTuple: v,
            navOpen: u
          } = N(), p = (0, _.y_)(), f = (0, _._g)(p), [h, b] = (0, o.useState)(""), k = (0, G.useLocation)(), y = `${a.login}?returnUrl=${h}&lang=${f}`, w = `${a.signup}&returnUrl=${h}&lang=${f}`, x = (0, o.useMemo)((() => (0, Q.c)()), []), M = (0, o.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(Ai.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: Ai.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Ai.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: Ai.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Xi(e)])(s, y, w);
            return e
          }), [s, y, w, x]), [S, C] = (0, o.useState)(0), j = (0, o.createRef)(), T = () => {
            if (j.current) {
              const {
                current: e
              } = j, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(a + e)
              } else C(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            b(e)
          }), [k]), (0, o.useEffect)((() => {
            v(!1)
          }), []), (0, o.useEffect)((() => {
            T(), Wi()((() => {
              setTimeout(T, 0)
            }), 300)
          }), [t, n]), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("nav", {
              className: "rockstargames-modules-core-headerd47459f4844a43cea508a1feba82fd24",
              children: (0, O.jsx)("div", {
                className: "rockstargames-modules-core-headerdbed8f25e4877fd72b6ea880897265dc",
                "data-logged-in": "false",
                ref: j,
                style: {
                  "--scNavWrap-max-height": `${g+S}px`
                },
                children: M.map((e => (0, o.createElement)(Qi, {
                  ...e,
                  activeSubNavId: c,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: m,
                  key: e.text
                })))
              })
            }), (0, O.jsx)("div", {
              className: "rockstargames-modules-core-headere4a4ad421b8d8ce4248c443293f6d82f",
              style: {
                visibility: u ? null : "hidden"
              },
              children: (0, O.jsx)(bi, {
                theme: "sc-menu",
                languageSelectorOpened: r,
                setLanguageSelectorOpened: e => {
                  d(-1), l(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        eo = e => {
          let {
            characterData: a,
            setMobileCardWidth: n,
            tabIndex: s
          } = e;
          const r = (0, i.useIntl)(),
            {
              currentCharId: l,
              setCurrentCharId: _
            } = N(),
            {
              track: c
            } = H(),
            d = (0, o.createRef)(),
            {
              platform: g,
              platformUsername: m,
              mugshotUrl: v,
              stats: u
            } = a,
            [p, f] = (0, o.useState)(v),
            [h] = (0, o.useState)(a.index),
            b = Ii(g, "large"),
            k = l === a.index;
          return (0, o.useEffect)((() => {
            d.current && n && n(d?.current?.offsetWidth)
          }), [d]), (0, O.jsxs)("button", {
            className: "rockstargames-modules-core-headerbb2f79a567b9e51b7ac4c3cba796b2c6",
            type: "button",
            "aria-hidden": k,
            onClick: e => {
              e.stopPropagation(), _(h);
              let a = "";
              "pc" === g ? a = "PC" : "ps4" === g ? a = "PS4" : "ps5" === g ? a = "PS5" : "xboxone" === g ? a = "Xbox One" : "xboxsx" === g && (a = "Xbox Series X|S"), c({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: h
              })
            },
            ref: d,
            tabIndex: s,
            children: [(0, O.jsx)("div", {
              className: "rockstargames-modules-core-headera12394967e75306929d99400ecdc3776",
              "data-size": "small",
              children: (0, O.jsx)("img", {
                src: p,
                alt: r.formatMessage(Ai.profile_selector_mugshot, {
                  userName: m
                }),
                onError: () => {
                  f(t(59796))
                }
              })
            }), (0, O.jsxs)("div", {
              className: "rockstargames-modules-core-headere1ace38439aad6cbb5e00caf12f4aec9",
              children: [(0, O.jsxs)("div", {
                className: "rockstargames-modules-core-headerf8677baa11e816af3d78c1f339922c32",
                children: [(0, O.jsx)("img", {
                  src: b.src,
                  alt: b.alt
                }), (0, O.jsx)("div", {
                  className: "rockstargames-modules-core-headere08b1fb1effb6477260effc8995d686f",
                  "data-size": "small",
                  children: m
                })]
              }), (0, O.jsx)("div", {
                className: "rockstargames-modules-core-headerbc229127f6f5e32833c6f228090ab25f",
                children: (0, O.jsxs)("div", {
                  className: "rockstargames-modules-core-headerd5856bb2e497763b233746755f803bcc",
                  children: [(0, O.jsx)("img", {
                    className: "rockstargames-modules-core-headerdc4114817e4145e502f3b4c9cb8336aa",
                    src: Ei(u.overview.rank.value),
                    alt: r.formatMessage(Ai.profile_selector_rp_icon)
                  }), (0, O.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        ao = {
          pillBtn: "rockstargames-modules-core-headerf4b9d9221ae900b76733a7a654a2abd9",
          selected: "rockstargames-modules-core-headere2d9981abb1048731a24a1df43888e97",
          scProfileDetails: "rockstargames-modules-core-headere54d5f0aa9245e1b7dc2cb3f4cd22c42",
          scAvatar: "rockstargames-modules-core-headerfc778369a472c4ac30a040d0b2fa7c29",
          scAvatarPlatform: "rockstargames-modules-core-headeraa362536d71362ba797516a56c99336a",
          scProfileStats: "rockstargames-modules-core-headerb35bd75958548f5e56d33931d0763598",
          scNames: "rockstargames-modules-core-headerf618dfb84c4aba761f6970869cb0c185",
          scTagsNames: "rockstargames-modules-core-headerb14efd9b24cc7e9687f9a2dcb5f30179",
          scUserName: "rockstargames-modules-core-headerc95a7cee12bc747fd9eb9cef13173736",
          scCrewName: "rockstargames-modules-core-headerf0403c33e371537f5fcfae6ee45eab11",
          scCrewRankBar: "rockstargames-modules-core-headerdd7bb57550824dfc321af314fd6294b2",
          scCrewRankBarItem: "rockstargames-modules-core-headere30d04c711e390a1e3fb8a92f365c493",
          scProgress: "rockstargames-modules-core-headerfd81f0ce503cef610c880be3ab0cd5ea",
          scRpLevel: "rockstargames-modules-core-headeracc9616f55a8d0f8a0196781435cd3f4",
          scRpIcon: "rockstargames-modules-core-headeraf29cbb50d8cebdc945bbb51b4e86596",
          scMoney: "rockstargames-modules-core-headere42eee47800b68d29f593397442a11f0",
          scCash: "rockstargames-modules-core-headercec402e3cae881638ceae1e3f2d8cae7",
          scBank: "rockstargames-modules-core-headerefd971bbcf3883ae30fe8cbcbd64022b"
        },
        to = e => {
          let {
            character: a,
            platformTag: n
          } = e;
          const {
            data: s
          } = B(), {
            track: r
          } = H(), l = (0, i.useIntl)(), [_, c] = (0, o.useState)([]), [d, g] = (0, o.useState)(null), [m, v] = (0, o.useState)(null), [u, p] = (0, o.useState)(!1), [f, h] = (0, o.useState)(-1), [b, k] = (0, o.useState)([]), [y, w] = (0, o.useState)(0), x = t(59796), [M, S] = (0, o.useState)("0"), [C, N] = (0, o.useState)("0"), j = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            E((0, O.jsx)("img", {
              src: x,
              alt: l.formatMessage(Ai.profile_selector_mugshot, {
                userName: s.nickname
              })
            }))
          }, [I, E] = (0, o.useState)((0, O.jsx)("img", {
            className: ao.scAvatarImg,
            src: a.mugshotUrl,
            alt: l.formatMessage(Ai.profile_selector_mugshot, {
              userName: s.nickname
            }),
            onError: T
          }));
          (0, o.useEffect)((() => {
            c(s.crews ?? [])
          }), [s]), (0, o.useEffect)((() => {
            E((0, O.jsx)("img", {
              src: a.mugshotUrl,
              alt: s.nickname,
              onError: T
            })), S(j(a.stats.overview.bank.value)), N(j(a.stats.overview.cash.value)), w(a.stats.overview.rank.value)
          }), [a, s]), (0, o.useEffect)((() => {
            _ && _.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), v(e.crewColour), h(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [_]), (0, o.useEffect)((() => {
            const e = [];
            if (!u && f > -1)
              for (let a = 5; a > f; a -= 1) e.push((0, O.jsx)("div", {
                className: ao.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== m ? m : ""
                }
              }, `crewrankbar-${a}`));
            k(e)
          }), [f, u, m]);
          const A = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: n.alt,
              link_url: void 0
            })
          };
          return (0, O.jsxs)("div", {
            className: ao.scProfileDetails,
            onClick: A,
            onKeyUp: A,
            role: "button",
            tabIndex: -1,
            children: [(0, O.jsxs)("div", {
              className: ao.scAvatar,
              children: [I, (0, O.jsx)("div", {
                className: ao.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, O.jsx)("img", {
                  src: n.src,
                  alt: n.alt
                })
              })]
            }), (0, O.jsxs)("div", {
              className: ao.scProfileStats,
              children: [(0, O.jsx)("div", {
                className: ao.scNames,
                children: (0, O.jsxs)("div", {
                  className: ao.scTagsNames,
                  children: [(0, O.jsx)("span", {
                    className: ao.scUserName,
                    children: a.platformUsername
                  }), d && (0, O.jsxs)("span", {
                    className: ao.scCrewName,
                    "data-arrow-tag": u,
                    children: [d, !u && (0, O.jsx)("div", {
                      className: ao.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, O.jsxs)("div", {
                className: ao.scProgress,
                children: [(0, O.jsxs)("div", {
                  className: ao.scRpLevel,
                  children: [(0, O.jsx)("img", {
                    className: ao.scRpIcon,
                    src: Ei(y),
                    alt: l.formatMessage(Ai.profile_selector_rp_icon)
                  }), (0, O.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, O.jsxs)("div", {
                  className: ao.scMoney,
                  children: [(0, O.jsxs)("span", {
                    className: ao.scCash,
                    children: ["$", C]
                  }), (0, O.jsxs)("span", {
                    className: ao.scBank,
                    children: ["$", M]
                  })]
                })]
              })]
            })]
          })
        },
        no = (e, a) => {
          const [t, n] = (0, o.useState)(0);
          return (0, o.useEffect)((() => {
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
        so = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: n = 17,
            slideChangeCallback: s = null,
            slideClickCallback: r = null,
            children: i = [],
            disablePager: l = !1,
            disableSwiper: _ = !1
          } = e;
          const c = (0, o.createRef)(),
            d = no(c, !1),
            [g, m] = (0, o.useState)(!1),
            [v, u] = (0, o.useState)(0),
            [p, f] = (0, o.useState)(0),
            [h, b] = (0, o.useState)([n]),
            [k, y] = (0, o.useState)(h[0]),
            [w, x] = (0, o.useState)(252),
            [M, S] = (0, o.useState)(0),
            [C, N] = (0, o.useState)([]),
            [j, T] = (0, o.useState)([]),
            [I, E] = (0, o.useState)(!1),
            A = e => {
              if (!0 === g || !0 === _) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              f(a)
            },
            L = e => {
              if (!0 === g || 0 === p || !0 === _) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                n = t > p ? 1 : -1,
                r = Math.abs(p - t);
              r > a ? (n > 0 ? (() => {
                if (!0 === g) return;
                m(!0);
                const e = v - 1 < 0 ? 0 : v - 1;
                u(e), y(h[e]), s && s(e)
              })() : (() => {
                if (!0 === g) return;
                m(!0);
                let e = v + 1 >= h.length ? h.length - 1 : v + 1;
                e < 0 && (e = 0), u(e), y(h[e]), s && s(e)
              })(), f(0)) : y(h[v] + r * n)
            },
            P = () => {
              !0 !== g && !0 !== _ && (m(!0), !0 !== g && (y(h[v]), f(0)))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, o.createRef)())
            })), N(e)
          }), [i]), (0, o.useEffect)((() => {
            if (C.length < 1) return;
            x(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(t + a)
          }), [C]), (0, o.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              m(!1)
            }), t)
          }), [g, t]), (0, o.useEffect)((() => {
            b(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * d - .5 * w - 2 * n + M : (0 === e && (a = n - e * w), e === t - 1 && t > 1 && (a = t * w * -1 + (d - (n - M))), e > 0 && e < t - 1 && (a = e * w * -1 + (.5 * d - .5 * w + .5 * M)), a)
            })(a)))), 1 === i.length ? E(!0) : E(!1)
          }), [c.current, i, d]), (0, o.useEffect)((() => {
            const e = (a = v, i.map(((e, t) => {
              const n = {
                active: !1
              };
              return t === a && (n.active = !0), n
            })));
            var a;
            T(e)
          }), [i, v]), (0, o.useEffect)((() => {
            !0 !== l && !0 !== _ || y(h[0])
          }), [_, l, h]), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("div", {
              className: "rockstargames-modules-core-headerdc205c90bc46b40b247ce0f8fbef27ad",
              ref: c,
              onTouchStart: A,
              onTouchMove: L,
              onTouchEnd: P,
              onMouseDown: A,
              onMouseMove: L,
              onMouseUp: P,
              onClick: () => {
                null !== r && r(v)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, O.jsx)("div", {
                className: "rockstargames-modules-core-headere05256af0f6a900ecda3df354963b9cf",
                "data-interaction-blocked": g,
                "data-single-item": I,
                style: {
                  transform: I ? null : `translateX(${k}px)`
                },
                children: i.map(((e, a) => (0, O.jsx)("div", {
                  className: "rockstargames-modules-core-headerde57d60ababd795d61693a257ac1bf85",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), j.length > 1 && !1 === l && (0, O.jsx)("div", {
              className: "rockstargames-modules-core-headere5e3179a0ecbffc76fd6938b1d278725",
              children: j.map((e => (0, O.jsx)("div", {
                className: "rockstargames-modules-core-headerdd438dda82a8b0841eb6479e1a6cefa3",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ro = {
          pillBtn: "rockstargames-modules-core-headera82eeee038a1c0b2d854ea1af30e5306",
          selected: "rockstargames-modules-core-headerbce062b571a8767d4fc2082fa2bb09a5",
          scProfile: "rockstargames-modules-core-headera1cfd896dd7ead7ff10741658f2f4776",
          scCharacterSelector: "rockstargames-modules-core-headerad92a53d81f87e7f4206140cde9bd061",
          scCharacterSelectBtn: "rockstargames-modules-core-headerf2689f3824c4717f7fc20dc3cf946223",
          open: "rockstargames-modules-core-headerf737b430642f94acf2a55b4a6a12abf5",
          scCharacterList: "rockstargames-modules-core-headerb5a6227f5a3c04854c423e355c4c2c35",
          scNav: "rockstargames-modules-core-headere01dc8c88b5f1e7985f275be9b9a2807",
          scLanguageSelector: "rockstargames-modules-core-headerea39095f51cdc4fce48707776d6d649d",
          scNavHeader: "rockstargames-modules-core-headerd94cb9e7950b7938aaabf330133de211",
          scNavWrap: "rockstargames-modules-core-headere6d033160ec56f5f74760075d5e2e860"
        },
        io = (0, _.Ux)((e => {
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
          const {
            windowWidth: v,
            windowHeight: u
          } = (0, _.bk)(), p = (0, i.useIntl)(), {
            languageSelectorOpened: f,
            setLanguageSelectorOpened: h,
            activeSubNavId: b,
            setActiveSubNavId: k,
            subNavExtraHeight: y,
            setSubNavExtraHeight: w,
            scNavOpened: x,
            setScNavOpened: M
          } = $i(), [S, C] = (0, o.useState)(""), j = (0, G.useLocation)(), {
            lsSettings: T
          } = (0, _.ym)(), {
            track: I
          } = H(), E = (0, l.aI)(), {
            data: A,
            loggedIn: L
          } = B(), {
            charactersNeeded: P,
            currentCharId: D,
            hasNotifications: z,
            navOpen: U,
            setCurrentCharId: V,
            setHasNotifications: R,
            setSelectedCharacterTuple: F,
            setUserData: q
          } = N(), [$, W] = (0, o.useState)(null), [J, X] = (0, o.useState)(null), [K, Y] = (0, o.useState)(!1), [Z, ee] = (0, o.useState)(!1), [ae, te] = (0, o.useState)(0), ne = (0, o.createRef)(), se = no(ne, !1), re = (0, o.createRef)(), [ie, oe] = (0, o.useState)(0), [le, _e] = (0, o.useState)([]), [ce, de] = (0, o.useState)(244), ge = (0, o.useMemo)((() => (0, Q.c)()), []), me = (0, o.useMemo)((() => ((e, a, t, n, s) => [{
            text: e.formatMessage(Ai.sc_link_activity_feed),
            location: {
              domain: Q.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Ji,
              text: Ai.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Ai.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Ai.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...Ji,
                text: Ai.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Ai.sc_link_messages),
              location: {
                domain: Q.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Ji,
                text: Ai.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Ai.sc_link_game_activation),
              location: {
                domain: Q.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Ji,
                text: Ai.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Ai.sc_link_notifications),
            location: {
              domain: Q.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: n,
            ga: {
              ...Ji,
              text: Ai.sc_link_notifications.defaultMessage,
              location: {
                domain: Q.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Ai.sc_link_crews),
            location: {
              domain: Q.U.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Ji,
              text: Ai.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Ai.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Ai.sc_link_my_friends),
              location: {
                domain: Q.U.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Ji,
                text: Ai.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Ai.sc_link_import_friends),
              location: {
                domain: Q.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Ji,
                text: Ai.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Ai.sc_link_find_friends),
              location: {
                domain: Q.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Ji,
                text: Ai.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, {
            text: e.formatMessage(Ai.sc_link_settings),
            location: {
              domain: Q.U.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...Ji,
              text: Ai.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, Xi(e), {
            text: e.formatMessage(Ai.sc_link_log_out),
            href: `${a.logout}?returnUrl=${s}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Ji,
              text: Ai.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(p, a, A, z, S, window)), [p, a, A, z, S, ge]), ve = () => {
            ee(r + ce * ae < se)
          }, ue = () => {
            if (re.current) {
              const {
                current: e
              } = re, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), oe(a + e)
              } else oe(a)
            }
          };
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ge.currentSite?.site === Q.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [j]), (0, o.useEffect)((() => {
            _e(A.characters[P] ?? [])
          }), [A, P]), (0, o.useEffect)((() => {
            A && q(A)
          }), [A]), (0, o.useEffect)((() => {
            const e = A?.characters.gtao;
            if (null !== L && !e.length) return void F(!1);
            if (null == D || !e.length) return;
            const a = e?.[D] ?? e?.[0] ?? null;
            F(!!a?.platform && [a.platform, a.characterSlot])
          }), [D, A, L]), (0, o.useEffect)((() => {
            (async () => {
              if (!A?.id) return;
              const {
                count: e
              } = await (0, _.s9)("notification/count", {
                pingBearer: E
              });
              R(e > 0)
            })()
          }), [A]), (0, o.useEffect)((() => {
            ve()
          }), [ce]), (0, o.useEffect)((() => {
            n(!0), m(v < 768), m(v < 768 || u < 649)
          }), [v, u]), (0, o.useEffect)((() => {
            let e = le.length - 1;
            e < 0 && (e = 0), te(e);
            const a = le.length > 0 ? le[D] ?? le[0] : null;
            if (!a) return;
            const t = null !== a ? Ii(a.platform, "large") : null;
            X(t), W(a), le.length > 1 ? Y(!0) : Y(!1), d(le.length - 1 > 3)
          }), [D, le]), (0, o.useEffect)((() => {
            ve()
          }), [ae, g, v, le]), (0, o.useEffect)((() => {
            ue(), Wi()((() => {
              setTimeout(ue, 0)
            }), 300)
          }), [v, u]), (0, o.useEffect)((() => {
            const e = T?.currentCharId ?? 0;
            e !== D && V(Math.max(0, Math.min(e, le.length - 1)))
          }), [le, T]), (0, O.jsxs)(O.Fragment, {
            children: [null !== $ && "gtao" === P && (0, O.jsxs)("div", {
              className: ro.scProfile,
              tabIndex: -1,
              "aria-label": p.formatMessage(Ai.profile_selector_profile_card),
              children: [(0, O.jsx)(to, {
                s: ro,
                character: $,
                platformTag: J
              }), !0 === K && (0, O.jsxs)("div", {
                className: ro.scCharacterSelector,
                children: [(0, O.jsx)("button", {
                  className: ro.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    n(a), I({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, O.jsx)("span", {
                    children: (0, O.jsx)(i.FormattedMessage, {
                      ...Ai.profile_selector_switch_character
                    })
                  })
                }), !1 === g && (0, O.jsx)("div", {
                  className: ro.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": t,
                  ref: s,
                  children: le.map((e => (0, O.jsx)(eo, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: de
                  }, e.mugshotUrl)))
                }), !0 === g && (0, O.jsx)("div", {
                  className: ro.scCharacterList,
                  "data-single-item": 2 === le.length,
                  "data-swiper-disabled": Z,
                  "aria-hidden": t,
                  ref: ne,
                  children: (0, O.jsx)(so, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      I({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: Z,
                    disableSwiper: Z,
                    children: le.filter(((e, a) => a !== D)).map((e => (0, o.createElement)(eo, {
                      characterData: e,
                      setMobileCardWidth: de,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, O.jsxs)("nav", {
              className: ro.scNav,
              "aria-hidden": !U,
              children: [(0, O.jsx)("button", {
                className: ro.scNavHeader,
                type: "button",
                "data-opened": x,
                "data-nav-opened": U,
                tabIndex: x ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), x || M(!0)
                },
                "data-testid": "playerButton",
                children: (0, O.jsx)("span", {
                  children: A.nickname
                })
              }), (0, O.jsx)("div", {
                className: ro.scNavWrap,
                "data-opened": x,
                "data-logged-in": "true",
                ref: re,
                style: {
                  "--scNavWrap-max-height": `${ie+y}px`
                },
                children: me.map(((e, a) => (0, o.createElement)(Qi, {
                  ...e,
                  id: a,
                  activeSubNavId: b,
                  setActiveSubNavId: k,
                  setSubNavExtraHeight: w,
                  key: e.text
                })))
              })]
            }), (0, O.jsx)("div", {
              className: ro.scLanguageSelector,
              style: {
                visibility: U ? null : "hidden"
              },
              children: (0, O.jsx)(bi, {
                theme: "sc-menu",
                languageSelectorOpened: f,
                setLanguageSelectorOpened: h
              })
            })]
          })
        })),
        oo = {
          scMenu: "rockstargames-modules-core-headercb9852b0729837605c7f9ef3f52ba07d",
          pillBtn: "rockstargames-modules-core-headerba9f849d655b60bbe4f921da414ce6fc",
          selected: "rockstargames-modules-core-headerbfe0e8a54181a0015230d589003a04b8",
          navOpen: "rockstargames-modules-core-headerda429f74416a0ec3a70bd04d87ddbe43",
          dragHandle: "rockstargames-modules-core-headerd8332c28151910baaf68fa0004ae221a",
          dragHandleBtn: "rockstargames-modules-core-headera8120297d7e7ffe291d8410dfb59b42b",
          scOverlay: "rockstargames-modules-core-headerc6defd149103f32588a21ccb323d71cc"
        },
        lo = (0, i.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, _.bk)(), a = (0, i.useIntl)(), {
            languageSelectorOpened: n,
            setLanguageSelectorOpened: s,
            setActiveSubNavId: r,
            scNavOpened: c,
            setScNavOpened: d,
            charListHidden: g,
            setCharListHidden: m
          } = $i(), [v, u] = (0, o.useState)(!1), {
            setBodyIsScrollable: p
          } = (0, _.Qz)(), {
            navHidden: f = !1
          } = (0, l.oT)(), {
            loggedIn: h
          } = B(), {
            currentCharId: b,
            navOpen: k,
            setNavOpen: y,
            userData: w
          } = N(), {
            track: x
          } = H(), [M, S] = (0, o.useState)(!1), C = (0, l.gh)(E), j = (0, o.useRef)(), [T, I] = (0, o.useState)(0), A = (0, o.createRef)(), [L, P] = (0, o.useState)(!1), [D, z] = (0, o.useState)(0), [U, V] = (0, o.useState)(!1), {
            mutateLSSettings: R,
            lsSettings: G
          } = (0, _.ym)(), F = (0, o.useCallback)((e => {
            m(e), j.current && !0 === e && (j.current.scrollTop = 0)
          }), [j]);
          return (0, o.useEffect)((() => {
            null !== b && G.currentCharId !== b && R({
              key: "currentCharId",
              value: b
            }), !1 === h ? R({
              key: "currentCharId",
              value: null
            }) : h && !w && x({
              event: "account_synced"
            })
          }), [b, h]), (0, o.useEffect)((() => {
            j.current && (!1 === g && !1 === M && (j.current.style.height = `${j.current.scrollHeight}px`), !0 === g && (j.current.style.height = null))
          }), [g, j, M]), (0, o.useEffect)((() => {
            const e = () => {
                y(!1), F(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, o.useEffect)((() => {
            y(!1), F(!0)
          }), [f]), (0, o.useEffect)((() => {
            if (A.current) {
              const {
                current: e
              } = A, a = window.getComputedStyle(e);
              I(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [A]), (0, o.useEffect)((() => {
            p(!L || !k)
          }), [k, L]), (0, o.useEffect)((() => {
            V(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            A.current && u(A?.current?.scrollHeight >= e)
          }), [A, e]), (0, o.useEffect)((() => {
            k || (r(-1), s(!1))
          }), [k]), (0, o.useEffect)((() => {
            n && (g || F(!0), c && (d(!1), r(-1)))
          }), [n]), (0, o.useEffect)((() => {
            c && (n && s(!1), g || F(!0))
          }), [c]), null === h ? null : (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsxs)("div", {
              className: [oo.scMenu, k ? oo.navOpen : ""].join(" "),
              "data-logged-in": h,
              "data-mac-browser": U,
              "data-scroll-mode": v,
              ref: A,
              "aria-hidden": !k,
              children: [(0, O.jsx)("button", {
                className: oo.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(a)
                },
                onTouchMove: e => {
                  if (0 === D) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(D - a) > 1 && (z(0), y(!1))
                },
                children: (0, O.jsx)("img", {
                  className: oo.dragHandle,
                  src: t(65612),
                  alt: a.formatMessage(Ai.sc_menu_drag_handle)
                })
              }), h ? (0, O.jsx)(io, {
                sc: C,
                charListHidden: g,
                hideCharacterList: F,
                refCharacterListDesktop: j,
                menuPadding: T,
                longCharList: M,
                setLongCharList: S,
                isMobileMode: L,
                setIsMobileMode: P
              }) : (0, O.jsx)(Zi, {
                sc: C,
                navOpen: k
              })]
            }), (0, O.jsx)("div", {
              className: [oo.scOverlay, k ? oo.navOpen : ""].join(" "),
              "data-logged-in": h
            })]
          })
        }), pi),
        _o = t(59796),
        co = t(86992),
        go = (0, i.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, i.useIntl)(),
            {
              data: n
            } = B(),
            {
              charactersNeeded: s,
              currentCharId: r,
              navOpen: l,
              setNavOpen: _
            } = N(),
            {
              track: c
            } = H(),
            [d, g] = (0, o.useState)(null),
            [m, v] = (0, o.useState)(!1),
            [u, p] = (0, o.useState)(null),
            [f, h] = (0, o.useState)(!1),
            [b, k] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            k(n.characters[s] ?? [])
          }), [n, s]);
          const y = (0, o.useCallback)((e => {
            e.stopPropagation(), _(!l), c({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: l ? "close" : "open"
            })
          }), [l]);
          return (0, o.useEffect)((() => {
            const e = n?.id ?? !1,
              a = e ? (b?.[r]?.mugshotUrl ?? n?.avatar) || _o : co,
              t = Ii(b?.[r]?.platform, "small") ?? null;
            p(t), g(a), v(e), h(!!b?.[r]?.mugshotUrl)
          }), [n, b, r, _o, co]), (0, O.jsxs)("button", {
            className: "rockstargames-modules-core-headeraa39163b1a4e040d5dd92697026615ba",
            "data-img-set": f,
            "aria-label": t.formatMessage(Ai.sc_menu_toggle),
            type: "button",
            onClick: e => y(e),
            "data-testid": "avaterMenuButton",
            children: [(0, O.jsx)("img", {
              className: "rockstargames-modules-core-headerc516cda9467b592cab166d24ebb5fa3c",
              src: d || "",
              onError: () => {
                g(_o)
              },
              alt: n?.nickname || ""
            }), m && null !== u && (0, O.jsx)("img", {
              className: "rockstargames-modules-core-headerb2ee3d153a9db4206a8a4a685da18064",
              src: u.src,
              alt: u.alt
            }), m && (0, O.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-headerff1def0a0fc0dc9ce81adccd2b66c278",
              "data-platform": b?.[r]?.platform ?? null
            })]
          })
        }), pi);
      var mo = t(69468);
      t(92260), t(28596);
      const vo = {
          rating: "rockstargames-modules-core-headerb779524a07395da7e93e3f94b894760b",
          withDescriptors: "rockstargames-modules-core-headerf29967c2d943e6958c93f9ac98301530",
          withOutDescriptors: "rockstargames-modules-core-headere9b3aea7eb8a2525a70a3ba80f745751",
          text: "rockstargames-modules-core-headerc4698286c35a48702e43df24ba196769"
        },
        uo = (0, i.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, _.UN)(t(82224)), vi((0, i.withIntl)((e => {
        let {
          descriptors: a = null,
          footer: n = null,
          href: s,
          img: r = null,
          titleSlug: c = null,
          style: d = {},
          className: g
        } = e;
        const [m, v] = (0, o.useState)(!1), {
          inView: u
        } = (0, Qr.cD)({
          threshold: .6
        }), [p, f] = (0, o.useState)({
          img_rating: r,
          rating_descriptors: a,
          rating_footer: n,
          url_rating: s
        }), {
          track: h
        } = H(), b = (0, i.useIntl)(), {
          data: k
        } = (0, l.UL)(mo.GameData, {
          variables: {
            titleSlug: c
          },
          skip: !c
        });
        if ((0, o.useEffect)((() => {
            k && f(k?.game)
          }), [k]), (0, o.useEffect)((() => {
            u && !m && p.img_rating && (h({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "rating",
              element_placement: "rating"
            }), v(!0))
          }), [u]), !p.img_rating) return null;
        const y = !!p.rating_descriptors;
        return (0, O.jsxs)("div", {
          className: [vo.rating, y ? vo.withDescriptors : vo.withOutDescriptors, g || ""].join(" "),
          style: (0, _.G6)(d),
          children: [(0, O.jsx)(Ir, {
            to: p.url_rating,
            target: "_blank",
            children: (0, O.jsx)("img", {
              alt: b.formatMessage(uo.components_ratings_link_alt, {
                rating: (w = p.img_rating, w.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(1188)(`./${p.img_rating}`)
            })
          }), y && (0, O.jsxs)("div", {
            className: vo.text,
            children: [(0, O.jsx)("p", {
              className: vo.descriptors,
              dangerouslySetInnerHTML: {
                __html: p?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), p.rating_footer && (0, O.jsx)("hr", {}), p.rating_footer && (0, O.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: p.rating_footer.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var w
      }), pi));
      const po = (0, _.Ux)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, o.useState)(""), n = (0, G.useNavigate)(), s = (0, l.aU)();
          return (0, O.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-headerec0a1e5d53889c279673bb8884a7fefc",
            onSubmit: e => {
              e.preventDefault(), s({
                navOpen: !1
              }), document.activeElement?.blur(), n(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, O.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, O.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        fo = {
          skeleton: "rockstargames-modules-core-headerc073586d2c66f4d535b12cc27e125167",
          pulse: "rockstargames-modules-core-headerdd37397ba93ec7045dbf175d34f4d0f3",
          gen9Hero: "rockstargames-modules-core-headerf0603e7614d1053bfa5d7691ad6926b6"
        },
        ho = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, O.jsx)("div", {
            className: [fo.skeleton, fo[a]].join(" ")
          }) : null
        },
        bo = (0, i.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        ko = {
          bodySmall: "rockstargames-modules-core-headerb83d55d8f7d82123856d91466b6253cf"
        },
        yo = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, O.jsxs)("div", {
            className: ko.track,
            children: [(0, O.jsx)("p", {
              children: a
            }), (0, O.jsx)("p", {
              className: ko.bodySmall,
              children: t
            })]
          })
        };
      (0, i.withIntl)((e => {
        let {
          children: a
        } = e;
        return (0, O.jsxs)("div", {
          className: "rockstargames-modules-core-headerd69f2ea714c432cf526d9e6ddf7362c4",
          children: [(0, O.jsx)("h4", {
            className: "rockstargames-modules-core-headerbb1665388a543785e2a375434b5a29f3",
            children: (0, O.jsx)(i.FormattedMessage, {
              ...bo.components_track_list_title
            })
          }), (0, O.jsx)("div", {
            className: "rockstargames-modules-core-headere9c64f265eb5419a6917c010b81f338d",
            children: (0, O.jsx)("div", {
              className: "rockstargames-modules-core-headerb531520a06f88720add5be64d17574db",
              children: o.Children.map(o.Children.toArray(a), (e => (0, O.jsx)(yo, {
                ...e?.props
              })))
            })
          })]
        })
      }), pi);
      var wo = t(19276);
      vi((e => {
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
            } = (0, l.UL)(wo.TinaModulesInfo, {
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
        if (!r) return (0, O.jsx)(ho, {
          skeleton: s
        });
        const i = r?.[0]?.tina;
        return i ? (0, O.jsx)(O.Fragment, {
          children: r.map(((e, t) => {
            let {
              tina: n
            } = e;
            return (0, O.jsx)(Wr, {
              components: a,
              tina: n,
              componentProps: {
                tinaModulesInfo: r
              }
            }, t)
          }))
        }) : null
      })), t(78356);
      const xo = {
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
        Mo = ((0, _.au)((e => {
          let {
            locale: a,
            t,
            videos: n
          } = e;
          const {
            setBodyIsScrollable: s
          } = (0, _.Qz)(), [r, i] = (0, o.useState)(0), [l, c] = (0, o.useState)(0), d = (0, o.useRef)(null), g = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            if (!d.current || g.current) return;
            const e = new(Ar())(d.current);
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
              l = e => {
                c(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !g.current?.classList.contains(xo.dragging) || a() && s(!1)
              },
              _ = () => {
                a() && s(!0), c(0)
              },
              m = e => {
                "press" === e.type && d.current?.classList.add(`${xo.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${xo.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              v = () => {
                a() && s(!0), d.current && d.current.classList.remove(`${xo.disableClick}`)
              },
              u = () => {
                a() && s(!0)
              };
            return g.current.addEventListener("transitionend", u), e.on("swiperight", t), e.on("swipeleft", o), e.on("pan", l), e.on("panend", _), e.on("press tap", m), e.on("pressup", v), () => {
              e.off("swiperight", t), e.off("swipeleft", o), e.off("pan", l), e.off("panend", _), e.off("press tap", m), e.off("pressup", v), g.current && g.current.removeEventListener("transitionend", u), c(0)
            }
          }), [d.current, r]), (0, O.jsxs)("section", {
            className: xo.carousel,
            children: [(0, O.jsx)("div", {
              className: xo.track,
              ref: d,
              children: (0, O.jsx)("div", {
                className: `${xo.items} ${0!==l?xo.dragging:""}`,
                ref: g,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${l}px))`
                },
                children: n.map(((e, a) => (0, O.jsx)(Ir, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === a ? xo.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: r === a ? 0 : -1,
                  children: (0, O.jsx)(No, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, O.jsxs)("footer", {
              children: [(0, O.jsx)("div", {
                className: xo.text,
                children: n.map(((e, n) => (0, O.jsx)(Ir, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: r === n ? 0 : -1,
                  children: (0, O.jsxs)("div", {
                    className: [xo.info, n === r ? xo.active : ""].join(" "),
                    children: [(0, O.jsxs)("div", {
                      className: xo.title,
                      children: [(0, O.jsx)("div", {
                        className: xo.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, O.jsx)("h2", {
                        className: xo.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, O.jsx)(Pr, {
                      className: xo.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, O.jsx)("div", {
                className: xo.dots,
                children: n.map(((e, a) => (0, O.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => i(a),
                  className: r === a ? xo.active : "",
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
        So = ((0, _.Ux)((e => {
          let {
            vids: a,
            games: t,
            title: n,
            gameTitleNecessary: s
          } = e;
          const r = void 0 !== t ? "games" : "videos",
            i = "videos" === r ? a : t.results,
            l = (0, o.useRef)(null),
            [_, c] = (0, o.useState)(0),
            [d, g] = (0, o.useState)(0),
            m = e => {
              const a = Math.ceil(i.length / _);
              e < 0 ? e = 0 : e >= a - 1 && (e = a - 1), g(e)
            },
            [v, u] = (0, o.useState)(0);
          let p;
          return (0, o.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches,
                a = e("768px") ? 1 : e("990px") || e("1440px") ? 2 : e("1920px") ? 3 : 4;
              c(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [_]), (0, o.useEffect)((() => {
            if (l.current) {
              const e = new(Ar())(l.current),
                a = () => {
                  m(d - 1), u(0)
                },
                t = () => {
                  m(d + 1), u(0)
                },
                n = e => {
                  u(e.isFinal ? 0 : e.deltaX)
                },
                s = () => {
                  u(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", n), e.on("panend", s), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", n), e.off("panend", s), u(0)
              }
            }
          }), [l.current, d]), p = "games" === r ? (0, O.jsx)(O.Fragment, {
            children: t.results.map((e => (0, O.jsx)(di, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, O.jsx)(O.Fragment, {
            children: a.map((e => (0, O.jsx)(jo, {
              video: e,
              gameTitleNecessary: s
            }, e.id)))
          }), (0, O.jsxs)("section", {
            className: Mo.videoList,
            children: [(0, O.jsxs)("h3", {
              className: Mo.sectionHeader,
              children: [n, (0, O.jsxs)("div", {
                className: Mo.arrowNav,
                children: [(0, O.jsx)("div", {
                  className: [Mo.arrow, Mo.previous, 0 === d ? Mo.disabled : ""].join(" "),
                  onClick: () => m(d - 1)
                }), (0, O.jsx)("div", {
                  className: [Mo.arrow, Mo.next, d === Math.ceil(i.length / _) - 1 ? Mo.disabled : ""].join(" "),
                  onClick: () => m(d + 1)
                })]
              })]
            }), (0, O.jsx)("div", {
              className: Mo.items,
              children: (0, O.jsx)("div", {
                className: Mo.trackWrapper,
                children: (0, O.jsx)("div", {
                  className: [Mo.track, 0 !== v ? Mo.dragging : ""].join(" "),
                  ref: l,
                  style: {
                    transform: `translateX(calc(-${100*d}% + ${v}px - (var(--standard-grid-gap) * ${d}))`,
                    gridAutoColumns: `calc(100 / ${_} * 1% - calc(var(--standard-grid-gap) * (${_-1}/${_}))`
                  },
                  children: p
                })
              })
            })]
          })
        })), "rockstargames-modules-core-headerdde12a3eeb657b92d78550534aad83a4"),
        Co = ((0, _.Ux)((e => {
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
          const r = a?.code ?? 398,
            i = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            i && i?.current && i.current.focus()
          }), [i]), (0, O.jsxs)("div", {
            className: So,
            children: [(0, O.jsx)("h3", {
              tabIndex: -1,
              ref: i,
              children: `${s} (${r})`
            }), (0, O.jsx)(Ir, {
              to: "/",
              children: t("Home")
            }), "clr" !== n && (0, O.jsx)(po, {})]
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
        No = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const n = `${a.screencap}?im=Resize=${t}`,
            [s] = (0, _.kJ)(n);
          return (0, O.jsx)("div", {
            className: [Co.screencap, s ? Co.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${n}) center/cover`
            }
          })
        },
        jo = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: n,
            size: s,
            toExplicit: r
          } = e;
          const i = r ?? `/videos/${n.id}`,
            o = {
              className: Co.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            l = (0, O.jsxs)("div", {
              className: Co.card,
              children: [(0, O.jsx)(No, {
                video: n,
                size: s
              }), (0, O.jsxs)("div", {
                className: Co.info,
                children: [a ? (0, O.jsx)("div", {
                  className: Co.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: n.game.title
                  }
                }) : "", (0, O.jsx)("h5", {
                  className: Co.title,
                  dangerouslySetInnerHTML: {
                    __html: n.title
                  }
                })]
              })]
            });
          return t ? (0, O.jsx)("a", {
            href: i,
            target: "_blank",
            ...o,
            children: l
          }) : (0, O.jsx)(Ir, {
            to: i,
            ...o,
            children: l
          })
        };
      o.Component, t(96896);
      var To = t(6464);
      const Io = (e, a, t, n) => ({
          event: e || "nav_click",
          link_url: a,
          text: t,
          element_placement: `Global Nav > ${n}`
        }),
        Eo = "https",
        Ao = "rockstargames.com",
        Lo = () => {
          const e = Ts(),
            a = (() => {
              const e = (0, o.useContext)(Ns);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            t = Is();
          return n => {
            const s = ((e, a) => {
              const {
                sites: t,
                currentSite: n
              } = a;
              return t[e.domain] ? new URL(`${Eo}://${t[e.domain]}.${Ao}`) : 0 === e.domain.indexOf("http") ? new URL(e.domain) : new URL(`${Eo}://${t[n?.subDomain||t.www]}.${Ao}`)
            })(n, e);
            if (!n.path) return new URL(s);
            const r = [
                ["username", t.nickname]
              ],
              o = ((e, a) => a.reduce(((e, a) => {
                let [t, n] = a;
                return e.replaceAll(`{${t}}`, n)
              }), e))(n.path, r),
              l = "www" === n.domain && "www" !== e.currentSite.site ? ((e, a) => {
                if (!a || a.iso === i.englishLocale.iso) return e;
                const t = a.subdomaincom;
                return "/" === e[0] ? t + e : `${t}/${e}`
              })(o, a) : o;
            return new URL(l, s)
          }
        },
        Po = "nav-external",
        Oo = "nav-dropdown",
        Do = "nav-no-link",
        zo = "games-menu",
        Uo = e => {
          let {
            children: a,
            location: t,
            className: n,
            isLegacy: s,
            label: r,
            type: l,
            target: _,
            gaEvent: c,
            gaText: d,
            gaBreadCrumb: g,
            dataTestId: m,
            onNavigate: v,
            ...u
          } = e;
          const p = (0, i.useIntl)(),
            {
              currentSite: f
            } = Ts(),
            {
              track: h
            } = H(),
            b = Lo(),
            {
              dispatch: k
            } = (0, To.kj)(),
            y = (0, o.useMemo)((() => {
              const e = {};
              return "_blank" === _ && (e["aria-label"] = p.formatMessage(Ss.nav_opens_in_new_window, {
                text: r
              }), e.rel = "noopener"), e
            }), [r, _]);
          if (!t && l === Do && m) {
            const e = () => {
              h(Io(c, "", d, g)), v?.(), k(m)
            };
            return (0, O.jsx)("button", {
              type: "button",
              className: n,
              onClick: () => e(),
              "data-testid": m,
              ...u,
              ...y,
              children: a
            })
          }
          if (!t) return null;
          const w = b(t),
            x = l === Po,
            M = x || f && f.site !== t.domain ? w.href : w.pathname + w.search + w.hash,
            S = Boolean(x || s || document.documentElement.classList.contains("legacyPage"));
          return (0, O.jsx)(G.Link, {
            className: n,
            target: _,
            to: M,
            onClick: () => (h(Io(c, w.toString(), d, g)), void v?.()),
            reloadDocument: S,
            "data-testid": m,
            ...u,
            ...y,
            children: a
          })
        },
        Vo = {
          callToAction: "rockstargames-modules-core-headerc82c6509b58380dd464812d2c26863ba",
          highlight: "rockstargames-modules-core-headerf530a8cc3c7d4c9e1f119a6a76ebb853"
        },
        Bo = e => {
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
          return (0, O.jsx)("div", {
            className: Vo.callToActionContainer,
            children: (0, O.jsx)(Uo, {
              className: [Vo.callToAction, s ? Vo[s] : ""].join(" "),
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
        Ro = {
          targets: [{
            intlMessage: Ss.search_target_games,
            tab: "games",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=games"
            }
          }, {
            intlMessage: Ss.search_target_posts,
            tab: "posts",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=posts"
            }
          }, {
            intlMessage: Ss.search_target_videos,
            tab: "videos",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=videos"
            }
          }, {
            intlMessage: Ss.search_target_community,
            tab: "socialClub",
            type: "nav-dropdown",
            targets: [{
              intlMessage: Ss.search_target_users,
              type: "",
              location: {
                domain: "socialClub",
                path: "/members/{query}"
              }
            }, {
              intlMessage: Ss.search_target_crews,
              type: "",
              location: {
                domain: "socialClub",
                path: "/crews/{query}"
              }
            }, {
              intlMessage: Ss.search_target_jobs,
              type: "",
              location: {
                domain: "socialClub",
                path: "/jobs/{query}"
              }
            }, {
              intlMessage: Ss.search_target_user_photos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/photos/{query}"
              }
            }, {
              intlMessage: Ss.search_target_user_videos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/videos/{query}"
              }
            }]
          }]
        },
        Go = {
          quickFade: {
            duration: .1
          },
          staggerFade: {
            ease: "easeOut",
            duration: .4
          },
          springOpen: {
            type: "spring",
            stiffness: 300,
            damping: 35
          },
          springClose: {
            type: "spring",
            stiffness: 400,
            damping: 40
          },
          hamburgerOpen: {
            type: "spring",
            duration: .6,
            bounce: 0
          },
          hamburgerClose: {
            type: "spring",
            duration: .4,
            bounce: 0
          }
        },
        Fo = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        qo = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        $o = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        Ho = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        Wo = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        Jo = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        Xo = {
          pillBtn: "rockstargames-modules-core-headeradedf6558a70573f2775676f523426d1",
          selected: "rockstargames-modules-core-headera0399789b5f8119314e2ee494274ef8a",
          pillButton: "rockstargames-modules-core-headerff69ac71bd625f2fffaa47c831767ea5"
        },
        Ko = e => {
          let {
            children: a,
            selected: t,
            ...n
          } = e;
          return (0, O.jsx)("button", {
            type: "button",
            className: [Xo.pillButton, t ? Xo.selected : ""].join(" "),
            ...n,
            children: a
          })
        };
      var Yo = t(32004);
      const Qo = {
          pillBtn: "rockstargames-modules-core-headerb531c3f0e486224c39909c0b7fc28f54",
          selected: "rockstargames-modules-core-headerb60dce9e8bebf02fb357ab1d1cd3463b",
          subMenu: "rockstargames-modules-core-headere93b49b419838ee4e2be9f55b68de66d",
          fadeIn: "rockstargames-modules-core-headerae33d9922a0df7157a8ae8af16f46854"
        },
        Zo = {
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
        el = e => {
          let {
            openerRef: a,
            isOpen: t,
            isMobile: n,
            children: s
          } = e;
          const [r, i] = (0, o.useState)(null), {
            styles: l,
            attributes: _,
            forceUpdate: c
          } = (0, Yo.usePopper)(a, r, {
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
          return (0, o.useEffect)((() => {
            c && c()
          }), [a, t, n]), (0, O.jsx)(li.motion.div, {
            initial: "exit",
            animate: t ? "enter" : "exit",
            transition: Go.quickFade,
            variants: Zo,
            className: [Qo.subMenu].join(" "),
            style: {
              ...l.popper
            },
            ref: i,
            ..._.popper,
            children: s
          })
        },
        al = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, O.jsx)("button", {
            type: "button",
            className: "rockstargames-modules-core-headera769c575f71a9ed60454a354755b5b03",
            ...t,
            children: a
          })
        },
        tl = {
          backgroundElevation: "rockstargames-modules-core-headerd803e72fb936c18155db46ae42dd74f0",
          backgroundOverlay: "rockstargames-modules-core-headeraf311f256f0989aaa668a6d60f37ab83",
          backgroundVisible: "rockstargames-modules-core-headere8da5672530e8e7e170953df4907a3cf"
        },
        nl = e => {
          let {
            children: a,
            isOpen: t,
            onClose: n,
            visible: s
          } = e;
          return t ? (0, O.jsxs)("div", {
            className: [tl.backgroundElevation].join(" "),
            onClick: n,
            children: [(0, O.jsx)("div", {
              className: [tl.backgroundOverlay, s ? tl.backgroundVisible : ""].join(" ")
            }), a]
          }) : null
        },
        sl = e => {
          let {
            target: a,
            selected: t,
            selectedTarget: n,
            onClick: s,
            isMobile: r,
            ...l
          } = e;
          const _ = (0, i.useIntl)(),
            [c, d] = (0, o.useState)(!1),
            [g, m] = (0, o.useState)(null);
          return a.type === Oo ? (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("div", {
              ref: m,
              children: (0, O.jsxs)(Ko, {
                "aria-label": _.formatMessage(Ss.search_target_aria_label, {
                  target: n && a?.targets?.indexOf(n) >= 0 ? _.formatMessage(n.intlMessage) : _.formatMessage(a.intlMessage)
                }),
                selected: t,
                onClick: () => d(!c),
                ...l,
                children: [n && a?.targets?.indexOf(n) >= 0 ? _.formatMessage(n.intlMessage) : _.formatMessage(a.intlMessage), (0, O.jsx)("img", {
                  src: Ho,
                  alt: ""
                })]
              }, a.intlMessage.defaultMessage)
            }), (0, O.jsx)(nl, {
              isOpen: c,
              onClose: () => d(!1),
              children: (0, O.jsx)(el, {
                isOpen: c,
                openerRef: g,
                isMobile: r,
                children: a.targets?.map((e => (0, O.jsx)(al, {
                  "aria-label": _.formatMessage(Ss.search_target_aria_label, {
                    target: _.formatMessage(e.intlMessage)
                  }),
                  onClick: () => s(e),
                  children: _.formatMessage(e.intlMessage)
                }, e.intlMessage.defaultMessage)))
              })
            })]
          }) : (0, O.jsx)(Ko, {
            "aria-label": _.formatMessage(Ss.search_target_aria_label, {
              target: _.formatMessage(a.intlMessage)
            }),
            selected: t,
            onClick: () => s(a),
            ...l,
            children: _.formatMessage(a.intlMessage)
          }, a.tab)
        },
        rl = {
          secondaryNavigationSlide: "rockstargames-modules-core-headerb17059127d33dc4c94ee131eb131fb19",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerc7e991fff98d1e6d8c35f5c74f6b5b95",
          open: "rockstargames-modules-core-headered23f58994f4b57468fdb9e4c40bb38c"
        },
        il = e => {
          let {
            children: a,
            isOpen: t,
            onMouseClick: n,
            onEscapeKey: s,
            onMouseAway: r,
            style: i
          } = e;
          const l = t ? [rl.open] : [],
            _ = e => {
              "Escape" === e.key && s?.()
            };
          return (0, o.useEffect)((() => (t ? window.addEventListener("keyup", _) : window.removeEventListener("keyup", _), () => window.removeEventListener("keyup", _))), [_, t]), t ? (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("div", {
              className: [rl.secondaryNavigationOverlay, ...l].join(" "),
              onClick: n,
              onMouseEnter: r,
              style: {
                ...i
              }
            }), a && (0, O.jsx)("div", {
              className: [rl.secondaryNavigationSlide, ...l].join(" "),
              children: a
            })]
          }) : null
        },
        ol = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: n,
            setIsSearchOpen: s,
            setSearchQuery: r,
            isSearchOpen: l,
            searchQuery: _,
            selectedTarget: c,
            selectedTargetIndex: d,
            isSearchPage: g,
            searchError: m,
            maxSearchLength: v
          } = e;
          const u = (0, i.useIntl)(),
            p = (0, o.useRef)(null),
            f = () => {
              s(), g || r(""), p?.current?.focus()
            },
            h = () => {
              g || s()
            };
          return (0, o.useEffect)((() => {
            l ? p?.current?.focus() : p?.current?.blur()
          }), [l]), (0, O.jsxs)("div", {
            children: [(0, O.jsx)("button", {
              className: "rockstargames-modules-core-headerfdf861825c948d1a7955d1cea7f9b60a",
              type: "button",
              onClick: f,
              children: (0, O.jsx)("img", {
                src: qo,
                alt: u.formatMessage(l ? Ss.search_close_button : Ss.search_open_button)
              })
            }), (0, O.jsx)(li.AnimatePresence, {
              children: l && (0, O.jsxs)("div", {
                children: [(0, O.jsx)(il, {
                  isOpen: !g,
                  onEscapeKey: h,
                  onMouseClick: h
                }), (0, O.jsxs)(li.motion.div, {
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
                    overflow: "hidden",
                    transition: Go.springClose
                  },
                  transition: Go.springOpen,
                  children: [(0, O.jsxs)(li.motion.div, {
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    exit: {
                      opacity: 0,
                      transition: {
                        duration: .1,
                        ease: "easeOut"
                      }
                    },
                    transition: {
                      duration: .3,
                      ease: "easeIn",
                      delay: .1
                    },
                    className: "rockstargames-modules-core-headerff5c561c57bce4e5e6e3c1b771286680",
                    children: [(0, O.jsx)("div", {
                      className: "rockstargames-modules-core-headerd0846246b7f8111a7c8dd61d8977f797",
                      children: (0, O.jsx)("button", {
                        type: "button",
                        onClick: a,
                        children: (0, O.jsx)("img", {
                          src: qo,
                          alt: u.formatMessage(Ss.search_action)
                        })
                      })
                    }), (0, O.jsx)("div", {
                      className: "rockstargames-modules-core-headerd35c5f222e110578e123ed49f56bba40",
                      children: (0, O.jsx)("input", {
                        type: "textfield",
                        value: _,
                        onChange: e => r(e.target.value),
                        onKeyUp: t,
                        placeholder: u.formatMessage(Ss.search_placeholder),
                        ref: p,
                        enterKeyHint: "search",
                        maxLength: v
                      })
                    }), (0, O.jsx)("div", {
                      className: "rockstargames-modules-core-headerc52c2aba0e44186a883c1f2955167cde",
                      children: Ro.targets.map(((e, a) => (0, O.jsx)(sl, {
                        target: e,
                        onClick: e => n(e, a),
                        selected: d === a,
                        selectedTarget: c
                      }, e.tab)))
                    }), !g && (0, O.jsx)("div", {
                      className: "rockstargames-modules-core-headerf1451c6007fa33b27b2919fa85e91762",
                      children: (0, O.jsx)("button", {
                        type: "button",
                        onClick: f,
                        children: (0, O.jsx)("img", {
                          src: $o,
                          alt: u.formatMessage(Ss.search_close_button)
                        })
                      })
                    })]
                  }), m && (0, O.jsx)("div", {
                    className: "rockstargames-modules-core-headeredb8eb6fc81c7f28d96c57cb45ccc40e",
                    "aria-live": "polite",
                    children: m
                  })]
                })]
              })
            })]
          })
        },
        ll = {
          search: "rockstargames-modules-core-headerff2a3a5885c54cc839c3684a72ac24be",
          targetsOuter: "rockstargames-modules-core-headerb8edda6b9b58803aa76c1d591cb6c750",
          hasScroll: "rockstargames-modules-core-headerf4a1a19cd54b9fdacba83551d7b595fd",
          targets: "rockstargames-modules-core-headerb85e2ca642065ab25737f4335826185c",
          errorMessage: "rockstargames-modules-core-headere03104e3157e0392e02406c0b163e2b3"
        },
        _l = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: n,
            setIsSearchOpen: s,
            setSearchQuery: r,
            isSearchOpen: l,
            searchQuery: _,
            selectedTarget: c,
            selectedTargetIndex: d,
            isSearchPage: g,
            searchError: m,
            maxSearchLength: v
          } = e;
          const u = (0, i.useIntl)(),
            p = (0, o.useRef)(null),
            [f, h] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            let e, a, t = !1;
            const n = n => {
                p && p.current && (n.preventDefault(), t = !0, e = n.pageX - p.current.offsetLeft, a = p.current.scrollLeft)
              },
              s = () => {
                t = !1
              },
              r = n => {
                if (t && (n.preventDefault(), p && p.current)) {
                  const t = n.pageX - p.current.offsetLeft - e;
                  p.current.scrollLeft = a - t
                }
              },
              i = () => {
                if (p && p.current) {
                  const e = p.current.scrollLeft;
                  h(e > 20)
                }
              };
            if (p && p.current) {
              const e = p.current;
              e.addEventListener("mousedown", n), e.addEventListener("mouseup", s), e.addEventListener("mouseleave", s), e.addEventListener("mousemove", r), e.addEventListener("scroll", i)
            }
            return () => {
              p && p.current && (p.current.removeEventListener("mousedown", n), p.current.removeEventListener("mouseup", s), p.current.removeEventListener("mouseleave", s), p.current.removeEventListener("mousemove", r), p.current.removeEventListener("scroll", i))
            }
          })), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsxs)(li.motion.div, {
              className: ll.search,
              variants: Fo,
              transition: Go.staggerFade,
              children: [(0, O.jsx)("button", {
                type: "button",
                onClick: () => l ? a() : s(!0),
                children: (0, O.jsx)("img", {
                  src: qo,
                  alt: u.formatMessage(Ss.search_action)
                })
              }), (0, O.jsx)("input", {
                type: "text",
                value: _,
                onChange: e => r(e.target.value),
                onFocus: () => s(!0),
                onKeyUp: t,
                placeholder: u.formatMessage(Ss.search_placeholder),
                enterKeyHint: "search",
                maxLength: v
              }), l && !g && (0, O.jsx)("button", {
                type: "button",
                onClick: () => s(!1),
                children: (0, O.jsx)("img", {
                  src: $o,
                  alt: u.formatMessage(Ss.search_close_button)
                })
              })]
            }), l && (0, O.jsxs)("div", {
              className: [ll.targetsOuter, f ? ll.hasScroll : ""].join(" "),
              children: [(0, O.jsx)("div", {
                className: ll.targets,
                ref: p,
                children: Ro.targets.map(((e, a) => (0, O.jsx)(sl, {
                  target: e,
                  selected: d === a,
                  selectedTarget: c,
                  onClick: e => n(e, a),
                  isMobile: !0
                }, e.tab)))
              }), m && (0, O.jsx)("div", {
                className: ll.errorMessage,
                "aria-live": "polite",
                children: m
              })]
            })]
          })
        },
        cl = "global-nav-search",
        dl = e => {
          let {
            ...a
          } = e;
          const {
            windowWidth: t
          } = (0, _.bk)(), {
            pathname: n,
            search: s
          } = (0, G.useLocation)(), {
            currentSite: r
          } = Ts(), [l] = (0, G.useSearchParams)(), [c, d] = (0, o.useState)(""), [g, m] = Es(), [v, u] = (0, o.useState)(0), [p, f] = (0, o.useState)(Ro.targets[0]), [h, b] = (0, o.useState)(""), k = (() => {
            const e = (0, G.useNavigate)(),
              {
                currentSite: a
              } = Ts(),
              t = Lo();
            return (n, s) => {
              const r = s.domain !== a?.site,
                i = {
                  ...s,
                  path: s.path?.replace("{query}", n)
                },
                o = r ? t(i).href : i.path;
              return r ? window.location.href = o : e ? e(o) : window.history.pushState({}, "", o), []
            }
          })(), y = As(), w = (0, i.useIntl)(), x = t < 1024, M = r?.site === Q.U.www && y || g === cl, S = /[*?\\<>&%@:~]/g, C = e => {
            if ("" === c) return !1;
            e.length > 100 && d(e.substring(0, 100));
            const a = e.split(/\s+/),
              t = e.match(S) || !1;
            return a.every((e => e.length < 3)) ? (b(w.formatMessage(Ss.nav_search_error_too_short, {
              count: 3
            })), !1) : t ? (b(w.formatMessage(Ss.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (b(""), !0)
          }, N = () => {
            C(c) && k(c, p.location)
          };
          (0, o.useEffect)((() => {
            const e = r?.site === Q.U.www && y,
              a = r?.site === Q.U.socialClub && y;
            if (y || (u(0), f(Ro.targets[0])), e) {
              const e = l.get("q"),
                a = l.get("tab");
              if (e && (d(e), C(e)), a) {
                const e = Ro.targets.findIndex((e => e.tab === a));
                u(e), f(Ro.targets[e])
              }
            }
            if (a) {
              const e = Ro.targets.findIndex((e => e.tab === Q.U.socialClub)),
                a = Ro.targets[e].targets,
                t = a?.find((e => e.location.path.startsWith(n))),
                s = n.split("/")[2];
              s && d(s), u(e), t && f(t)
            }
          }), [n, s, y]);
          const j = {
            handleSearch: N,
            handleSearchKeypress: e => {
              b(""), "Enter" === e.key && N()
            },
            handleSearchTargetSelect: (e, a) => {
              f(e), u(a), C(c) && k(c, e.location)
            },
            setIsSearchOpen: () => m(cl),
            setSearchQuery: d,
            isSearchOpen: M,
            searchQuery: c,
            selectedTarget: p,
            selectedTargetIndex: v,
            isSearchPage: y,
            searchError: h,
            maxSearchLength: 100
          };
          return x ? (0, O.jsx)(_l, {
            ...j,
            ...a
          }) : (0, O.jsx)(ol, {
            ...j
          })
        },
        {
          Menu: gl,
          MenuButton: ml
        } = s,
        vl = e => {
          let {
            cta: a,
            search: t = !0,
            isMobile: n
          } = e;
          const s = (0, i.useIntl)(),
            [, r] = Es();
          return (0, O.jsxs)("div", {
            className: "rockstargames-modules-core-headerd755a8be16d6c9603965d6d61ce44387",
            children: [a && (0, O.jsx)("div", {
              children: (0, O.jsx)(Bo, {
                variant: a.variant,
                location: a.location,
                dataTestId: a.dataTestId,
                gaEvent: a.ga,
                gaText: a.text,
                target: a.target,
                children: s.formatMessage(a.intlMessage)
              })
            }), t && (0, O.jsx)(dl, {}), (0, O.jsxs)("div", {
              children: [(0, O.jsx)(ml, {
                setOtherHeaderDropdowns: r
              }), !n && (0, O.jsx)(gl, {})]
            })]
          })
        },
        ul = {
          navigationItem: "rockstargames-modules-core-headere4791244cfb12101d21ef44f3e26ac97",
          active: "rockstargames-modules-core-headerbe8bcc6c46d70212d01dc83c68e67c0a"
        },
        pl = ["pc", "ps4", "ps5", "xboxone", "xboxsx"],
        fl = e => e.replace(/\?.*$/, ""),
        hl = e => {
          const {
            pathname: a
          } = (0, G.useLocation)(), {
            currentSite: t
          } = Ts(), {
            data: n,
            loggedIn: s
          } = B();
          return e && e.length ? e.map((e => {
            let r, {
              domain: i,
              path: o,
              end: l = !1
            } = e;
            if (i !== t?.site) return null;
            if (t?.site === Q.U.socialClub) {
              const e = RegExp(`/(${pl.join("|")})`);
              r = a.match(e) ? a.replace(e, "") : a
            } else r = a;
            let _ = fl(o || "");
            return s && (_ = _.replace("{username}", n.nickname)), (0, G.matchPath)({
              path: _,
              caseSensitive: !1,
              end: l ?? !1
            }, fl(r))
          })) : []
        },
        bl = e => {
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
          const [c] = hl(n ? [{
            domain: n?.domain,
            path: n?.path,
            end: "nav-internal" === t
          }] : void 0), d = t === Po;
          return (0, O.jsxs)(Uo, {
            className: [ul.navigationItem, c ? ul.active : ""].join(" "),
            location: n,
            isLegacy: s,
            type: t,
            target: l,
            gaText: r,
            gaBreadCrumb: i,
            dataTestId: o,
            label: a,
            ..._,
            children: [a, d && (0, O.jsx)("img", {
              alt: "",
              src: Wo
            })]
          })
        },
        kl = {
          navigationDropdownButton: "rockstargames-modules-core-headera3a570b3fc00ad9e0274623661e88c7a",
          open: "rockstargames-modules-core-headerdbc174ea06ad91b5938af1465fdd3696",
          active: "rockstargames-modules-core-headerdb65254f84c5afcf987b23948ce1cf64"
        },
        yl = e => {
          let {
            text: a,
            isOpen: t,
            onClick: n,
            buttonRef: s,
            navChildren: r,
            gaText: i,
            gaBreadCrumb: l,
            dataTestId: _
          } = e;
          const {
            track: c
          } = H(), d = (0, o.useCallback)((() => {
            c(Io(void 0, "", i, l)), n()
          }), [i, l, t, n]), g = (0, o.useMemo)((() => {
            if (!r) return;
            const e = (a, t) => {
              let n;
              return n = t.children ? t.children.reduce(e, []) : [t.location], [...a, ...n]
            };
            return r.reduce(e, [])
          }), [r]), m = hl(g), v = m?.some(Boolean);
          return (0, O.jsx)("div", {
            className: kl.navigationDropdown,
            ref: s,
            children: (0, O.jsxs)("button", {
              className: [kl.navigationDropdownButton, v ? kl.active : "", t ? kl.open : ""].join(" "),
              type: "button",
              "data-testid": _ || "navDropdown",
              onClick: d,
              children: [a, (0, O.jsx)("img", {
                src: Ho,
                alt: ""
              })]
            })
          })
        },
        wl = e => {
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
          return (0, O.jsx)("div", {
            className: "rockstargames-modules-core-headerc2b06d9afe0933250fc72b9117858265",
            children: (0, O.jsx)(Uo, {
              location: t,
              gaText: s,
              gaBreadCrumb: r,
              onNavigate: i,
              dataTestId: o,
              ...l,
              children: (0, O.jsx)("img", {
                src: n,
                alt: a
              })
            })
          }, a)
        },
        xl = {
          domain: Q.U.www,
          path: "/games"
        },
        Ml = () => {
          const e = (0, i.useIntl)();
          return (0, O.jsxs)("div", {
            className: "rockstargames-modules-core-headerf4a613c7c0cc9bef8df3ee832d883ead",
            "data-testid": "gamesMenu",
            children: [(0, O.jsxs)("div", {
              className: "rockstargames-modules-core-headera300918162cd4910c1033e1410cf7306",
              children: [(0, O.jsx)("div", {
                children: (0, O.jsx)("h2", {
                  className: "rockstargames-modules-core-headerc310b29b3e11394b5a0dde96dc2d8f9b",
                  children: e.formatMessage(Ss.games_menu_featured)
                })
              }), (0, O.jsx)("div", {
                children: (0, O.jsxs)(Uo, {
                  className: "rockstargames-modules-core-headera3a0b6b909900e4677b64d48a0f9192d",
                  gaText: Ss.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${Ss.games_menu_view_all.defaultMessage}`,
                  location: xl,
                  children: [e.formatMessage(Ss.games_menu_view_all), (0, O.jsx)("img", {
                    src: Jo,
                    alt: e.formatMessage(Ss.nav_view_all_games)
                  })]
                })
              })]
            }), (0, O.jsx)("div", {
              className: "rockstargames-modules-core-headerbbf167776ba1b263a8376030db8c6f35",
              children: Ls.map((a => (0, O.jsx)(wl, {
                title: e.formatMessage(a.intlMessage),
                gaText: a.intlMessage.defaultMessage,
                gaBreadCrumb: `Games > ${a.intlMessage.defaultMessage}`,
                location: a.location,
                imgUrl: (0, _.kh)(!0) + a.imageSrc,
                dataTestId: a.dataTestId
              }, a.imageSrc)))
            })]
          })
        },
        Sl = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerae2bc6580acf5b4362b457cc75833bb8",
          nested: "rockstargames-modules-core-headerd6f17c0b3966d498f9a2fc3a9f9de38d",
          subMenuDropdownButton: "rockstargames-modules-core-headerdab571ebee31eca114e2a074de69472c",
          open: "rockstargames-modules-core-headerf43750ae7653576a37e8243935a3feb1",
          openChevron: "rockstargames-modules-core-headerdb0c8d634787e7aaf33e858747e52b05",
          subMenuDropdownItems: "rockstargames-modules-core-headerde63d9fdafaf4995f8b95fdef3a8d551"
        },
        Cl = {
          subMenuItem: "rockstargames-modules-core-headere7cf207577cfec29877f7387fa7cb412",
          nested: "rockstargames-modules-core-headerfb8268fb2131202c7ee66ce7f684012f"
        },
        Nl = {
          navigationLink: "rockstargames-modules-core-headerc638ccc027700497fe811881feb02f1e",
          active: "rockstargames-modules-core-headerf53cd2bce32edf82c615316c826f8477"
        },
        jl = e => [Nl.navigationLink, e ? Nl.active : ""].join(" "),
        Tl = e => {
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
            dataTestId: c,
            ...d
          } = e;
          const g = t === Po,
            [m] = hl(n ? [n] : void 0);
          return (0, O.jsxs)(Uo, {
            className: [jl(Boolean(m)), Cl.subMenuItem, o ? Cl.nested : "", s].join(" "),
            location: n,
            isLegacy: r,
            type: t,
            target: i,
            gaText: l,
            gaBreadCrumb: _,
            dataTestId: c,
            label: a,
            "data-ui-name": "sub-menu-item",
            ...d,
            children: [a, g && (0, O.jsx)("img", {
              alt: "",
              src: Wo
            })]
          })
        },
        Il = "nav-dropdown",
        El = e => {
          let {
            text: a,
            navChildren: t,
            gaText: n,
            gaBreadCrumb: s,
            nested: r,
            dataTestId: l,
            subMenuId: _,
            toggleOpen: c,
            isOpen: d,
            ...g
          } = e;
          const [m] = Es(), v = (0, i.useIntl)(), {
            track: u
          } = H(), p = (0, o.useRef)(null), [f, h] = (0, o.useState)(null);
          (0, o.useEffect)((() => {
            null === m && c(null)
          }), [m]);
          const b = e => {
              u(Io(void 0, "", n, s)), c(e ? _ : null)
            },
            k = e => {
              "ArrowLeft" === e.code && (b(!1), p?.current?.focus())
            };
          return (0, O.jsxs)("div", {
            className: [Sl.subMenuDropdownContainer, r ? Sl.nested : ""].join(" "),
            ...g,
            "data-ui-name": "sub-menu-item",
            children: [(0, O.jsxs)("button", {
              type: "button",
              className: [Sl.subMenuDropdownButton, r ? Sl.nested : "", d ? Sl.open : ""].join(" "),
              onClick: () => b(!d),
              onKeyUp: e => {
                "Enter" === e.code && b(!0), "ArrowRight" === e.code && b(!0), "ArrowLeft" === e.code && b(!1)
              },
              ref: p,
              "data-testid": l,
              children: [a, (0, O.jsx)("img", {
                src: Ho,
                className: Sl.openChevron,
                alt: ""
              })]
            }), (0, O.jsx)(li.AnimatePresence, {
              children: d && t && (0, O.jsx)(li.motion.div, {
                className: Sl.subMenuDropdownItems,
                variants: {
                  open: {
                    height: "auto",
                    opacity: 1,
                    marginBottom: "revert-layer"
                  },
                  closed: {
                    height: 0,
                    opacity: 0,
                    marginBottom: "auto"
                  }
                },
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Go.springOpen,
                children: t.map((e => e.type === Il ? (0, O.jsx)(El, {
                  text: v.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${s} > ${e.intlMessage.defaultMessage}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: f === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: h
                }, e.intlMessage.defaultMessage) : (0, O.jsx)(Tl, {
                  text: v.formatMessage(e.intlMessage),
                  type: e.type,
                  location: e.location,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${s} > ${e.intlMessage.defaultMessage}`,
                  onKeyUp: k,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.intlMessage.defaultMessage)))
              })
            })]
          })
        },
        Al = El,
        Ll = {
          show: {
            height: "auto",
            zIndex: 101,
            display: "block",
            visibility: "visible",
            transition: {
              ...Go.springOpen
            }
          },
          hidden: {
            height: 0,
            zIndex: 100,
            overflow: "hidden",
            transitionEnd: {
              visibility: "hidden",
              display: "none"
            },
            transition: {
              ...Go.springClose
            }
          }
        },
        Pl = e => {
          let {
            intlMessage: a,
            type: t,
            location: n,
            navChildren: s,
            isLegacy: r,
            target: l,
            gaBreadCrumb: _,
            navKey: c,
            isHidden: d,
            dataTestId: g,
            ...m
          } = e;
          const v = (0, i.useIntl)(),
            [u, p] = (0, o.useState)(null),
            f = (0, G.useLocation)(),
            [h, b] = Es(),
            [k, y] = (0, o.useState)(null),
            w = h === c,
            x = {
              ...w ? {
                visibility: "visible",
                display: "block"
              } : {
                visibility: "hidden",
                display: "none"
              }
            };
          (0, o.useEffect)((() => {
            b(null)
          }), [f.pathname, f.key]);
          const M = _ ? `${_} > ${a.defaultMessage}` : a.defaultMessage;
          return t === Oo ? (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(yl, {
              text: v.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: M,
              onClick: () => b(c),
              isOpen: w,
              buttonRef: d ? void 0 : p,
              navChildren: s,
              dataTestId: g,
              ...m
            }), !d && (0, O.jsxs)(O.Fragment, {
              children: [(0, O.jsx)(il, {
                isOpen: w,
                onMouseClick: () => b(null),
                onEscapeKey: () => b(null)
              }), (0, O.jsx)(el, {
                isOpen: w,
                openerRef: u,
                children: s?.map((e => e.type === Oo ? (0, O.jsx)(Al, {
                  text: v.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${M} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: k === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: y
                }, `desktop-submenu-${e.intlMessage.defaultMessage}`) : (0, O.jsx)(Tl, {
                  location: e.location,
                  text: v.formatMessage(e.intlMessage),
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${M} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId
                }, e.intlMessage.defaultMessage)))
              })]
            })]
          }) : t === zo ? (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(yl, {
              text: v.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: _ ? `${_} > ${a.defaultMessage}` : a.defaultMessage,
              onClick: () => b(c),
              isOpen: w,
              dataTestId: g,
              ...m
            }), !d && (0, O.jsx)(il, {
              isOpen: !0,
              onMouseClick: () => b(null),
              onEscapeKey: () => b(null),
              style: x,
              children: (0, O.jsx)(li.motion.div, {
                initial: "hidden",
                animate: w ? "show" : "hidden",
                variants: Ll,
                children: (0, O.jsx)(Ml, {})
              })
            })]
          }) : n || t === Do ? (0, O.jsx)(bl, {
            location: n,
            type: t,
            text: v.formatMessage(a),
            isLegacy: r,
            target: l,
            gaText: a.defaultMessage.toLowerCase(),
            gaBreadCrumb: _ ? `${_} > ${a.defaultMessage}` : a.defaultMessage,
            dataTestId: g,
            ...m
          }) : null
        },
        Ol = e => {
          let {
            links: a
          } = e;
          const [t, n] = (0, o.useState)(a), [s, r] = (0, o.useState)([]), i = (0, o.useRef)(null), l = (0, o.useRef)(null), _ = (0, o.useCallback)((() => {
            const e = l.current;
            if (!e || !a.length) return;
            const {
              children: t
            } = e;
            let s = 0;
            const i = Array.from(t).map(((e, a) => {
                const t = e.getBoundingClientRect().top;
                return 0 === a && (s = t), t
              })),
              o = i.filter((e => e !== s)).length,
              _ = i.findIndex((e => e > s));
            let c = _;
            _ > 0 && (c = _ - 1), o ? (n(a.slice(0, c)), r(a.slice(c))) : (n(a), r([]))
          }), [a, l?.current]);
          (0, o.useEffect)((() => {
            const e = new ResizeObserver(_);
            return l?.current && e.observe(l.current), () => {
              l?.current && e.unobserve(l.current)
            }
          }), [a, l?.current]);
          const c = (0, o.useMemo)((() => (0, O.jsx)("ul", {
            ref: l,
            className: "rockstargames-modules-core-headerf3e86ba2e4808f8537da93ae608b41fd",
            "aria-hidden": "true",
            children: a.map((e => (0, O.jsx)("li", {
              children: (0, O.jsx)(Pl, {
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
          return 0 === a.length ? null : (0, O.jsxs)("nav", {
            className: "rockstargames-modules-core-headerbf622cdec1ceb44e603e4e0ce93970e7",
            children: [(0, O.jsxs)("ul", {
              ref: i,
              children: [t.map((e => (0, O.jsx)("li", {
                children: (0, O.jsx)(Pl, {
                  intlMessage: e.intlMessage,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, `desktop-nav-link-${e.text}`))), s.length > 0 && (0, O.jsx)("li", {
                children: (0, O.jsx)(Pl, {
                  intlMessage: Ss.nav_more_dropdown,
                  type: Oo,
                  navChildren: s,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), c]
          })
        },
        Dl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        zl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
        Ul = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
        Vl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
        Bl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
        Rl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
        Gl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
        Fl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg",
        ql = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
        $l = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
        Hl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a7dfd2058127cb6f5adca6c9b1d91cc.png",
        Wl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
        Jl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
        Xl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d2753ceddb2213d956d51d369985513.svg",
        Kl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
        Yl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
        Ql = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ccc721c72fc5553108c7e70b0778dba.svg",
        Zl = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
        e_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
        a_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63c149607e42c3f7a8988ef21d53ec97.svg",
        t_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
        n_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
        s_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/790f72b723ee040bae9e43e3d2785c89.svg",
        r_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
        i_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
        o_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
        l_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
        __ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
        c_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
        d_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
        g_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
        m_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
        v_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
        u_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
        p_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
        f_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
        h_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        b_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
        k_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
        y_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
        w_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
        x_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
        M_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
        S_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
        C_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
        N_ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
        j_ = e => r[e] ? r[e] : null,
        T_ = () => (0, O.jsx)("div", {
          className: "rockstargames-modules-core-headerc5182c35b0d08cbfd5c48a29103c987d"
        }),
        I_ = {
          quickAccess: "rockstargames-modules-core-headerdd98ab26460bc8af09e869527e025790",
          link: "rockstargames-modules-core-headerb9254c00c41acd171bd25c1a6e49171e"
        },
        E_ = () => {
          const {
            windowWidth: e
          } = (0, _.bk)(), a = e < 1024, t = {
            hidden: {
              y: "100%",
              transition: Go.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ...Go.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * Go.hamburgerOpen.duration
              }
            }
          }, n = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: Go.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: Go.staggerFade
            }
          }, s = (0, i.useIntl)(), r = {
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
          }, o = "Quick Access";
          return (0, O.jsxs)(li.motion.ul, {
            className: I_.quickAccess,
            variants: a ? t : Fo,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: a ? null : Go.quickFade,
            children: [(0, O.jsx)(li.motion.li, {
              variants: a ? n : null,
              children: (0, O.jsxs)(Uo, {
                location: r.home,
                className: [jl(), I_.link].join(" "),
                gaText: Ss.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${o} > ${Ss.nav_quick_access_home.defaultMessage}`,
                children: [(0, O.jsx)("img", {
                  alt: "Rockstar Games",
                  src: h_
                }), (0, O.jsx)(i.FormattedMessage, {
                  ...Ss.nav_quick_access_home
                })]
              })
            }), (0, O.jsx)(li.motion.li, {
              variants: a ? n : null,
              children: (0, O.jsxs)(Uo, {
                location: r.games,
                className: [jl(), I_.link].join(" "),
                gaText: Ss.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${o} > ${Ss.nav_quick_access_games.defaultMessage}`,
                children: [(0, O.jsx)("img", {
                  alt: s.formatMessage(Ss.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, O.jsx)(i.FormattedMessage, {
                  ...Ss.nav_quick_access_games
                })]
              })
            }), (0, O.jsx)(li.motion.li, {
              variants: a ? n : null,
              children: (0, O.jsxs)(Uo, {
                location: r.newswire,
                className: [jl(), I_.link].join(" "),
                gaText: Ss.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${o} > ${Ss.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, O.jsx)("img", {
                  alt: s.formatMessage(Ss.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, O.jsx)(i.FormattedMessage, {
                  ...Ss.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        A_ = "quick-access-menu",
        L_ = e => {
          let {
            site: a,
            brand: t,
            hideRockstarBrand: n,
            hideQuickAccess: s
          } = e;
          const r = (0, i.useIntl)(),
            {
              windowWidth: l
            } = (0, _.bk)(),
            [c, d] = (0, o.useState)(null),
            [g, m] = (0, o.useState)(null),
            [v, u] = Es(),
            p = v === A_,
            f = s ? Ss.nav_rockstargames_home : Ss.nav_rockstargames_logo,
            h = l < 1024,
            {
              styles: b,
              attributes: k,
              forceUpdate: y
            } = (0, Yo.usePopper)(c, g, {
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
          return (0, o.useEffect)((() => {
            y?.()
          }), [c, p]), (0, O.jsxs)("div", {
            className: "rockstargames-modules-core-headeracf0fe31775e9e9f76e57a6356c3073d",
            children: [!n && (0, O.jsxs)("div", {
              className: "rockstargames-modules-core-headerae7adffe4295955d4ea126909f0f7027",
              children: [(h || s) && (0, O.jsx)(Uo, {
                location: {
                  domain: "www",
                  path: "/"
                },
                gaText: Ss.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: Ss.nav_rockstargames_home.defaultMessage,
                "aria-label": r.formatMessage(f),
                children: (0, O.jsx)(T_, {})
              }), !h && !s && (0, O.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headerfe08980c15b4c9d647ad67b3e69df46c",
                onClick: () => u(A_),
                "aria-label": r.formatMessage(f),
                ref: d,
                children: (0, O.jsx)(T_, {})
              }), p && !s && (0, O.jsxs)(O.Fragment, {
                children: [(0, O.jsx)(il, {
                  isOpen: p,
                  onEscapeKey: () => u(null),
                  onMouseClick: () => u(null)
                }), (0, O.jsx)("div", {
                  className: "rockstargames-modules-core-headerac0bb9bdb359f681853e0ab8386b966f",
                  style: {
                    ...b.popper
                  },
                  ref: m,
                  ...k.popper,
                  children: (0, O.jsx)(E_, {})
                })]
              })]
            }), t && (0, O.jsxs)(O.Fragment, {
              children: [!n && (0, O.jsx)("div", {
                className: "rockstargames-modules-core-headerbd9eb76eae4216a03e203f8277c0de1a"
              }), (0, O.jsx)("div", {
                className: "rockstargames-modules-core-headerce3b9d90001b3bba8f2e0ada2902041f",
                children: (0, O.jsx)("img", {
                  className: "rockstargames-modules-core-headerae86867dea4ec0a8cdea5642f4c291d3",
                  "data-brand": a,
                  alt: a,
                  src: j_(t)
                })
              })]
            })]
          })
        },
        P_ = {
          header: "rockstargames-modules-core-headerd2dbf5efb1484f71a302d2b217900031",
          fluid: "rockstargames-modules-core-headercfa07fc8efab2e71f97a4b728dee6586",
          fixed: "rockstargames-modules-core-headerfcaaa17901eb60439448b4351d15f0b2",
          title: "rockstargames-modules-core-headere171ca1389a17285caa5dfa568adfac8",
          quickAccessWrapper: "rockstargames-modules-core-headera4ef54292d023f37220cb09dffe7c81a"
        },
        O_ = e => {
          let {
            headerRef: a,
            data: t
          } = e;
          const n = (0, o.useMemo)((() => {
              const {
                currentSite: e
              } = (0, Q.c)();
              if (e?.site === Q.U.socialClub) return {
                zIndex: 8600
              }
            }), []),
            s = Tr(t.links);
          return (0, O.jsxs)("header", {
            ref: a,
            className: [P_.header, P_.fixed].join(" "),
            style: n,
            children: [(0, O.jsx)("div", {
              className: P_.title,
              children: (0, O.jsx)(L_, {
                site: t.site,
                brand: t.brand,
                hideQuickAccess: t.hideQuickAccess || !1
              })
            }), (0, O.jsx)("div", {
              className: P_.fluid,
              children: (0, O.jsx)(Ol, {
                links: s
              })
            }), (0, O.jsx)("div", {
              className: P_.fixed,
              children: (0, O.jsx)(vl, {
                cta: t.cta
              })
            })]
          })
        },
        D_ = {
          hamburger: "rockstargames-modules-core-headerd45fd161655450522fd627346eda32f6",
          open: "rockstargames-modules-core-headerefcc59509afc394cff54203b433d510e"
        },
        z_ = e => {
          let {
            toggle: a,
            isMenuOpen: t
          } = e;
          const {
            track: n
          } = H();
          return (0, O.jsx)("div", {
            className: [D_.hamburger, t ? D_.open : ""].join(" "),
            children: (0, O.jsxs)("button", {
              onClick: () => {
                n({
                  event: t ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), a?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, O.jsx)("span", {}), (0, O.jsx)("span", {}), (0, O.jsx)("span", {})]
            })
          })
        },
        U_ = {
          header: "rockstargames-modules-core-headerc6c3d0fc75c97585f6ca0f5805999412",
          title: "rockstargames-modules-core-headeraa1441b47dbc6f5a653a59ed4d9f9433",
          nav: "rockstargames-modules-core-headere454c30b7535de52d50c84ba33bd6a10",
          fullMenuOpen: "rockstargames-modules-core-headerb95ceeff411265d1f48446f8b06510e5",
          navContainer: "rockstargames-modules-core-headerbf0d2e00daa366e9d881eb1631eb799f",
          searchOpen: "rockstargames-modules-core-headerf9ef7f85a5d81d00b1d680003a076fa3",
          overlay: "rockstargames-modules-core-headerf10adb8724d0a3c71343650f34cfb941"
        },
        V_ = {
          domain: Q.U.www,
          path: "/games"
        },
        B_ = e => {
          let {
            text: a,
            onNavigate: t
          } = e;
          const {
            isMobile: n
          } = (0, _.bk)(), s = (0, i.useIntl)(), r = (0, o.useRef)(), [l, c] = (0, o.useState)(2.5);
          return (0, o.useEffect)((() => {
            c(n ? 2.5 : 3.5)
          }), [n]), (0, O.jsxs)("div", {
            className: "rockstargames-modules-core-headerffd42c843d5d69c9d594c92a30692e5d",
            "data-testid": "gamesMenu",
            children: [(0, O.jsxs)("div", {
              className: "rockstargames-modules-core-headerdc05e5d1b9cadf7aaf9ca6bf2115d812",
              children: [(0, O.jsx)("h2", {
                children: a
              }), (0, O.jsxs)(Uo, {
                gaText: Ss.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${Ss.nav_view_all_games.defaultMessage}`,
                location: V_,
                onNavigate: t,
                className: Nl.navigationLink,
                children: [(0, O.jsx)(i.FormattedMessage, {
                  ...Ss.nav_view_all_games
                }), (0, O.jsx)("img", {
                  src: Jo,
                  alt: s.formatMessage(Ss.nav_view_all_games)
                })]
              })]
            }), (0, O.jsx)(Jr.wx, {
              className: "rockstargames-modules-core-headera91f871c6f287f959df91085cef76f22",
              ref: r,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: l,
              speed: 700,
              children: Ls.map((e => (0, O.jsx)(Jr.Ky, {
                className: "rockstargames-modules-core-headere094133e33c8cdf2873ff7e08c34dd0a",
                children: (0, O.jsx)(wl, {
                  title: s.formatMessage(e.intlMessage),
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `Games > ${e.intlMessage.defaultMessage}`,
                  location: e.location,
                  imgUrl: (0, _.kh)(!0) + e.imageSrc,
                  onNavigate: t,
                  dataTestId: e.dataTestId
                })
              }, e.intlMessage.defaultMessage)))
            })]
          })
        },
        R_ = e => {
          let {
            children: a,
            isOpen: t
          } = e;
          return (0, O.jsx)(li.AnimatePresence, {
            children: t && (0, O.jsx)(li.motion.div, {
              className: "rockstargames-modules-core-headerc69df84ab1249c0ea218884e3459e5cc",
              variants: {
                open: {
                  height: "auto",
                  opacity: 1
                },
                closed: {
                  height: 0,
                  opacity: 0
                }
              },
              animate: "open",
              initial: "closed",
              exit: "closed",
              transition: Go.springOpen,
              children: a
            })
          })
        },
        G_ = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerd4d2f7b0358d7c2b7c482bea7a243acd",
          subMenuDropdownButton: "rockstargames-modules-core-headerc09e65bd027917e0f29da9a6ef0e91f8",
          open: "rockstargames-modules-core-headerae62683c5e47c10b3260c7a63544e9d1",
          subMenuDropdownItems: "rockstargames-modules-core-headera015481239e04732ecf001df49c29311"
        },
        F_ = {},
        q_ = e => {
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
            onNavigate: c,
            ...d
          } = e;
          const [g] = hl(r ? [r] : void 0), m = n === Po;
          return (0, O.jsxs)(Uo, {
            className: [jl(Boolean(g)), F_.subMenuItem, i].join(" "),
            dataTestId: t,
            location: r,
            type: n,
            target: s,
            gaText: o,
            gaBreadCrumb: l,
            onNavigate: c,
            isLegacy: _,
            label: a,
            ...d,
            children: [a, m && (0, O.jsx)("img", {
              alt: "",
              src: Wo
            })]
          })
        },
        $_ = e => {
          let {
            text: a,
            dataTestId: t,
            navChildren: n,
            gaText: s,
            gaBreadCrumb: r,
            onNavigate: o,
            isSubMenuOpen: l,
            toggleMenuOpen: _,
            ...c
          } = e;
          const d = (0, i.useIntl)(),
            {
              track: g
            } = H();
          return (0, O.jsxs)("div", {
            className: G_.subMenuDropdownContainer,
            ...c,
            children: [(0, O.jsxs)("button", {
              type: "button",
              "data-testid": t,
              className: [G_.subMenuDropdownButton, l ? G_.open : ""].join(" "),
              onClick: () => {
                g(Io(void 0, "", s, r)), _()
              },
              children: [a, (0, O.jsx)("img", {
                src: Ho,
                alt: ""
              })]
            }), (0, O.jsx)(li.AnimatePresence, {
              children: l && (0, O.jsx)(li.motion.div, {
                className: G_.subMenuDropdownItems,
                variants: {
                  open: {
                    height: "auto",
                    opacity: 1
                  },
                  closed: {
                    height: 0,
                    opacity: 0
                  }
                },
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Go.springOpen,
                children: n.map((e => (0, O.jsx)(q_, {
                  text: d.formatMessage(e.intlMessage),
                  dataTestId: e.dataTestId,
                  type: e.type,
                  location: e.location,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${r} > ${e.intlMessage.defaultMessage}`,
                  onNavigate: o,
                  isLegacy: e.isLegacy
                }, e.intlMessage.defaultMessage)))
              })
            })]
          })
        },
        H_ = e => {
          let {
            intlMessage: a,
            dataTestId: t,
            type: n,
            target: s,
            location: r,
            navChildren: l,
            gaBreadCrumb: _,
            onNavigate: c,
            isOpen: d,
            setIsOpen: g,
            ...m
          } = e;
          const v = (0, i.useIntl)(),
            [u, p] = (0, o.useState)(null),
            [f] = hl(r ? [r] : void 0),
            h = _ ? `${_} > ${a.defaultMessage}` : a.defaultMessage;
          if (n === Oo) return (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(yl, {
              text: v.formatMessage(a),
              dataTestId: t,
              gaText: a.defaultMessage,
              gaBreadCrumb: h,
              onClick: () => g(),
              isOpen: d,
              ...m
            }), (0, O.jsx)(R_, {
              isOpen: d,
              children: l?.map(((e, a) => e.type === Oo ? (0, O.jsx)($_, {
                text: v.formatMessage(e.intlMessage),
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.intlMessage.defaultMessage,
                gaBreadCrumb: `${h} > ${e.intlMessage.defaultMessage}`,
                onNavigate: c,
                isSubMenuOpen: u === a,
                toggleMenuOpen: () => p(u !== a ? a : null)
              }, e.intlMessage.defaultMessage) : (0, O.jsx)(q_, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: v.formatMessage(e.intlMessage),
                type: e.type,
                gaText: e.intlMessage.defaultMessage,
                gaBreadCrumb: `${h} > ${e.intlMessage.defaultMessage}`,
                onNavigate: c
              }, e.intlMessage.defaultMessage)))
            })]
          });
          if (n === zo) return (0, O.jsx)(B_, {
            text: v.formatMessage(a),
            onNavigate: c
          });
          const b = n === Po;
          return (0, O.jsxs)(Uo, {
            location: r,
            dataTestId: t,
            type: n,
            target: s,
            gaText: a.defaultMessage,
            gaBreadCrumb: h,
            onNavigate: c,
            className: [jl(Boolean(f)), f ? "rockstargames-modules-core-headere316012f5bea2b6722ee4b7d7b466cf2" : ""].join(" "),
            label: v.formatMessage(a),
            ...m,
            children: [v.formatMessage(a), b && (0, O.jsx)("img", {
              alt: "",
              src: Wo
            })]
          })
        },
        W_ = e => {
          let {
            links: a,
            cta: t,
            onNavigate: n
          } = e;
          const s = (0, i.useIntl)(),
            [r, l] = (0, o.useState)(null);
          return (0, O.jsx)("div", {
            className: "rockstargames-modules-core-headerb15d5468019b2ad71c74bc93146eeffe",
            children: (0, O.jsxs)("ul", {
              children: [a.map(((e, a) => (0, O.jsx)(li.motion.li, {
                variants: Fo,
                transition: Go.staggerFade,
                children: (0, O.jsx)(H_, {
                  intlMessage: e.intlMessage,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onNavigate: n,
                  isOpen: r === a,
                  setIsOpen: () => l(r !== a ? a : null)
                })
              }, e.text))), t && (0, O.jsx)(li.motion.li, {
                className: "rockstargames-modules-core-headerda158a2d181d8898c98800dfd9a76691",
                variants: Fo,
                transition: Go.staggerFade,
                children: (0, O.jsx)(Bo, {
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
        {
          Menu: J_
        } = s,
        X_ = e => {
          let {
            headerRef: a,
            data: t
          } = e;
          const [n, s] = (0, o.useState)(!1), [r, i] = (0, o.useState)(!1), l = As(), {
            pathname: _,
            hash: c,
            search: d
          } = (0, G.useLocation)(), {
            currentSite: g
          } = Ts(), m = Tr(t.links), v = {
            show: {
              height: "auto",
              paddingBottom: n && t.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ...Go.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: Go.hamburgerClose
            }
          };
          return (0, o.useEffect)((() => {
            n ? document.documentElement.setAttribute("data-disallow-body-scroll", "") : document.documentElement.removeAttribute("data-disallow-body-scroll")
          }), [n]), (0, o.useEffect)((() => {
            i(!1), s(!1)
          }), [_, c, d]), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsxs)("header", {
              ref: a,
              className: U_.header,
              children: [(0, O.jsx)(z_, {
                toggle: () => {
                  s(!n), i(!1)
                },
                isMenuOpen: n
              }), (0, O.jsx)("div", {
                className: U_.title,
                children: (0, O.jsx)(L_, {
                  site: t.site,
                  brand: t.brand,
                  hideRockstarBrand: !!t.brand
                })
              }), (0, O.jsx)("div", {
                children: (0, O.jsx)(vl, {
                  search: !1,
                  isMobile: !0
                })
              })]
            }), (0, O.jsx)(li.AnimatePresence, {
              children: (n || r || l && g?.site === Q.U.www) && (0, O.jsxs)(O.Fragment, {
                children: [(0, O.jsxs)(li.motion.nav, {
                  className: [U_.nav, n && t.brand ? U_.paddingBottom : "", n ? U_.fullMenuOpen : ""].join(" "),
                  variants: v,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [(0, O.jsx)(dl, {
                    isSearchOpen: r || l && g?.site === Q.U.www,
                    setIsSearchOpen: i
                  }), n && (0, O.jsx)("div", {
                    className: [U_.navContainer, r ? U_.searchOpen : ""].join(" "),
                    children: (0, O.jsx)(W_, {
                      links: m,
                      cta: t.cta,
                      onNavigate: () => {
                        s(!1), i(!1)
                      }
                    })
                  })]
                }), n && t.brand && !t.hideQuickAccess && (0, O.jsx)(E_, {}), !l && (0, O.jsx)(li.motion.div, {
                  className: U_.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: Go.hamburgerClose
                  },
                  transition: Go.hamburgerOpen
                })]
              })
            }), (0, O.jsx)(J_, {})]
          })
        };
      te.gsap.registerPlugin(qn, we, Be);
      const K_ = () => {
          const {
            windowWidth: e
          } = (0, _.bk)(), a = As(), {
            currentSite: t
          } = Ts(), [s] = (0, G.useSearchParams)(), {
            pathname: r,
            search: i
          } = (0, G.useLocation)(), l = e < 1024, [c, d] = (0, o.useState)(!1), g = (0, o.useRef)(null), m = (0, o.useRef)(null);
          (0, o.useEffect)((() => {
            d(!0)
          }), []);
          const v = (0, o.useCallback)((e => {
            const a = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            e.direction === g?.current || a ? a && e?.animation?.pause() : -1 === e.direction ? e.animation?.reverse() : e.animation?.play();
            const t = "data-show-more-content";
            1 === e.direction ? document.body.setAttribute(t, "") : document.body.removeAttribute(t), g.current = e.direction
          }), []);
          (0, o.useEffect)((() => {
            const e = te.gsap.context((() => {
              m?.current && te.gsap.set(m.current, {
                paused: !0,
                scrollTrigger: {
                  end: 99999,
                  onUpdate: e => {
                    v(e)
                  },
                  start: "140px"
                }
              })
            }));
            return () => e.revert()
          }), [m?.current]);
          const u = (0, o.useMemo)((() => Object.values(n).reduce(((e, a) => {
              const r = t?.site ? a.appearancePaths[t.site] : [];
              return r ? [...e, ...r.map((e => {
                const t = e.match(/{.*}/),
                  r = t?.[0],
                  i = r && (e => {
                    if (!e) return null;
                    if ("titleOverride" === e) {
                      const e = s.get("title");
                      if ("gtav" === e) return Ks;
                      if ("rdr2" === e) return mr
                    }
                    return null
                  })(r.substring(1, r.length - 1)) || a,
                  o = r ? e.replace(r, "") : e;
                let _ = null;
                return i?.links?.length < 1 && (_ = Os().cloneDeep(i), _.links = n?.rsg?.links, _.hideQuickAccess = !0, _.cta && delete _.cta), {
                  element: l ? (0, O.jsx)(X_, {
                    headerRef: m,
                    data: _ ?? i
                  }) : (0, O.jsx)(O_, {
                    headerRef: m,
                    data: i
                  }),
                  path: o
                }
              }))] : e
            }), [])), [t?.site, l, i]),
            p = (0, G.useRoutes)(u);
          return (0, O.jsxs)("div", {
            className: Ds.globalNavigationRoot,
            "data-header-initialized": c,
            children: [(0, O.jsx)("div", {
              className: [Ds.globalNavigationSpacer, a && t?.site === Q.U.www ? Ds.globalNavigationSearchSpacer : ""].join(" ")
            }), p]
          })
        },
        Y_ = () => {
          const e = (0, o.useMemo)((() => (0, Q.c)()), []),
            [a, t] = (0, o.useState)("#main");
          return (0, o.useEffect)((() => {
            t("www" === e?.currentSite?.site ? window.location.pathname.startsWith("gta-online") ? "#main" : "#content" : "#app-root")
          }), [e]), (0, O.jsx)("a", {
            className: "rockstargames-modules-core-headercf7ea2d9c4f82e278e44b867b529e56e",
            href: a,
            children: (0, O.jsx)(i.FormattedMessage, {
              ...Ss.accessibility_skip_button
            })
          })
        },
        Q_ = e => {
          let {
            baseName: a
          } = e;
          const t = Y(),
            {
              hasProvider: n
            } = B(),
            [{
              iso: s
            }] = (0, i.getLocale)();
          return n ? (0, O.jsx)(_.a7, {
            children: (0, O.jsx)(i.IntlProvider, {
              locales: Ms,
              lang: s,
              children: (0, O.jsxs)(q, {
                children: [(0, O.jsx)(xs, {
                  variant: "text"
                }), (0, O.jsx)(J(), {
                  basename: a,
                  history: t,
                  children: (0, O.jsxs)(js, {
                    children: [(0, O.jsx)(Y_, {}), (0, O.jsx)(K_, {})]
                  })
                })]
              })
            })
          }) : (0, O.jsx)(_.a7, {
            children: (0, O.jsx)(i.IntlProvider, {
              locales: Ms,
              lang: s,
              children: (0, O.jsx)(V, {
                children: (0, O.jsxs)(q, {
                  children: [(0, O.jsx)(xs, {
                    variant: "text"
                  }), (0, O.jsx)(J(), {
                    basename: a,
                    history: t,
                    children: (0, O.jsxs)(js, {
                      children: [(0, O.jsx)(Y_, {}), (0, O.jsx)(K_, {})]
                    })
                  })]
                })
              })
            })
          })
        }
    },
    85720: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => l
      });
      var n = t(21408),
        s = t.n(n);
      const r = (0, t(37019).c)(),
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
    10768: (e, a, t) => {
      "use strict";
      t.d(a, {
        a7: () => O,
        s9: () => y.c,
        kh: () => p,
        S_: () => w.c,
        UN: () => v,
        U$: () => N,
        G6: () => M,
        _g: () => x._,
        Qz: () => k,
        y_: () => f.y_,
        kJ: () => f.kJ,
        ym: () => T,
        bk: () => D,
        S6: () => r,
        au: () => l,
        Ux: () => m
      });
      var n = t(85720),
        s = t(63480);
      const r = e => a => ((e, a) => (0, s.jsx)(e, {
        ...a,
        gtmTrack: e => {
          (0, n.c)(e)
        }
      }))(e, a);
      var i = t(14812),
        o = t(34424);
      const l = e => a => ((e, a) => {
        const t = (0, i.gh)(o.EH);
        return (0, s.jsx)(e, {
          ...a,
          locale: t
        })
      })(e, a);
      var _ = t(88200),
        c = t(73660),
        d = t.n(c),
        g = t(70252);
      const m = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return t => ((e, a, t) => {
            const n = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const {
                data: a
              } = (0, i.UL)(g.Translations, {
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
      var f = t(6464);
      const h = (0, i.UT)(!0),
        b = "data-disallow-body-scroll",
        k = () => {
          const e = (0, i.gh)(h);
          return (0, _.useEffect)((() => {
            e ? document.documentElement.removeAttribute(b) : document.documentElement.setAttribute(b, "")
          }), [e]), {
            bodyIsScrollable: e,
            setBodyIsScrollable: h
          }
        };
      var y = t(81340),
        w = t(29452),
        x = t(16716);
      const M = e => {
          const a = d().clone(e);
          return a?.["margin-top"] && (a.marginTop = a["margin-top"]), a?.["margin-bottom"] && (a.marginBottom = a["margin-bottom"]), a?.["margin-left"] && (a.marginLeft = a["margin-left"]), a?.["margin-right"] && (a.marginRight = a["margin-right"]), a?.["object-fit"] && (a.objectFit = a["object-fit"]), delete a?.["margin-top"], delete a?.["margin-bottom"], delete a?.["margin-right"], delete a?.["margin-left"], delete a?.["object-fit"], a
        },
        S = "rockstar-games-web";
      let C;
      try {
        const e = window.localStorage.getItem(S);
        C = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        C = {}
      }
      const N = (0, i.UT)(C),
        j = e => {
          let {
            key: a,
            value: t
          } = e;
          if (null == a) throw Error("You have to specify a key and a value.");
          const n = {
            ...N() ?? {}
          };
          return n[a] = t, null === t && delete n[a], window.localStorage.setItem(S, JSON.stringify(n)), N(n), n
        },
        T = () => ({
          lsSettings: (0, i.gh)(N),
          settingsReactive: N,
          mutateLSSettings: j
        });
      t(87208);
      const I = {
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
            t = I;
          return Object.keys(I).map((a => {
            const {
              min: n,
              max: s
            } = I[a], r = e >= n && e <= s, i = e >= n;
            t[a] = {
              activeExact: r,
              activeMin: i,
              min: n,
              max: s
            }
          })), {
            isMobile: e <= I.sm.min,
            breakpoints: t,
            windowWidth: e,
            windowHeight: a
          }
        },
        A = (0, _.createContext)(E()),
        {
          Consumer: L
        } = A,
        P = (0, i.UT)(E()),
        O = e => {
          let {
            children: a
          } = e;
          const t = (0, i.gh)(P);
          return (0, _.useEffect)((() => {
            const e = () => {
              P(E())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.jsx)(A.Provider, {
            value: t,
            children: a
          })
        },
        D = () => (0, _.useContext)(A);
      t(94832)
    },
    50668: e => {
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
    86764: e => {
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
    19276: e => {
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
    78356: e => {
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
    63640: (e, a, t) => {
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
      n.definitions = n.definitions.concat(r(t(98888).definitions)), n.definitions = n.definitions.concat(r(t(14800).definitions));
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
    98888: e => {
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
    14800: e => {
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
    69468: e => {
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
    92260: e => {
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
    28596: e => {
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
    99628: e => {
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
    81060: e => {
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
    70252: e => {
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
    140: (e, a, t) => {
      var n = {
        "./left.svg": 78656,
        "./pc.svg": 63920,
        "./ps.svg": 31572,
        "./ps3.svg": 2656,
        "./ps4.svg": 51408,
        "./ps5.svg": 24400,
        "./right.svg": 87276,
        "./switch.svg": 61720,
        "./x.svg": 9240,
        "./xbox.svg": 90944,
        "./xboxone.svg": 71052,
        "./xboxseriesxs.svg": 6412
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
      }, s.resolve = r, e.exports = s, s.id = 140
    },
    82224: (e, a, t) => {
      var n = {
        "./cero_a.png": 57533,
        "./cero_b.svg": 80692,
        "./cero_c.svg": 12372,
        "./cero_d.svg": 76420,
        "./cero_rp.png": 13600,
        "./cero_z.svg": 27520,
        "./djctq_10.svg": 78328,
        "./djctq_12.svg": 74376,
        "./djctq_14.svg": 76695,
        "./djctq_16.svg": 38348,
        "./djctq_18.svg": 94348,
        "./djctq_er.svg": 9720,
        "./djctq_l.svg": 84960,
        "./esrb_ao.svg": 2336,
        "./esrb_e.svg": 86672,
        "./esrb_e10plus.svg": 89744,
        "./esrb_m.svg": 60900,
        "./esrb_m_ao.svg": 27360,
        "./esrb_rp.svg": 65299,
        "./esrb_rplm17.svg": 71608,
        "./esrb_t.svg": 89100,
        "./fpb_13.svg": 58560,
        "./fpb_16.svg": 30152,
        "./fpb_18.svg": 92,
        "./fpb_pg.svg": 51340,
        "./grac_12.svg": 40312,
        "./grac_15.svg": 15980,
        "./grac_18.svg": 49400,
        "./grac_a.svg": 26828,
        "./gsrr_0.svg": 47604,
        "./gsrr_12.svg": 62028,
        "./gsrr_15.svg": 75096,
        "./gsrr_18.svg": 98328,
        "./gsrr_6.svg": 60648,
        "./nmc_12.svg": 5468,
        "./nmc_16.svg": 58092,
        "./nmc_18.svg": 6500,
        "./nmc_21.svg": 98761,
        "./nmc_3.svg": 51556,
        "./nmc_7.svg": 74708,
        "./oflc_g.svg": 13212,
        "./oflc_m.svg": 13984,
        "./oflc_ma15.svg": 5936,
        "./oflc_pg.svg": 64948,
        "./oflc_r18.svg": 99252,
        "./pegi_12.svg": 33324,
        "./pegi_16.svg": 13140,
        "./pegi_18.svg": 39784,
        "./pegi_3.svg": 64160,
        "./pegi_4.svg": 492,
        "./pegi_6.svg": 15888,
        "./pegi_7.svg": 79932,
        "./pegi_rp.png": 33407,
        "./rars_0.svg": 1320,
        "./rars_12.svg": 47612,
        "./rars_16.svg": 1432,
        "./rars_18.svg": 85680,
        "./rars_6.svg": 78404,
        "./usk_0.svg": 60272,
        "./usk_12.svg": 76412,
        "./usk_16.svg": 12684,
        "./usk_18.svg": 31336,
        "./usk_6.svg": 62576,
        "./usk_rp.svg": 3468,
        "./vaci_rp.png": 56292
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
      }, s.resolve = r, e.exports = s, s.id = 82224
    },
    1188: (e, a, t) => {
      var n = {
        "./cero_a.png": 57533,
        "./cero_b.svg": 80692,
        "./cero_c.svg": 12372,
        "./cero_d.svg": 76420,
        "./cero_rp.png": 13600,
        "./cero_z.svg": 27520,
        "./djctq_10.svg": 78328,
        "./djctq_12.svg": 74376,
        "./djctq_14.svg": 76695,
        "./djctq_16.svg": 38348,
        "./djctq_18.svg": 94348,
        "./djctq_er.svg": 9720,
        "./djctq_l.svg": 84960,
        "./esrb_ao.svg": 2336,
        "./esrb_e.svg": 86672,
        "./esrb_e10plus.svg": 89744,
        "./esrb_m.svg": 60900,
        "./esrb_m_ao.svg": 27360,
        "./esrb_rp.svg": 65299,
        "./esrb_rplm17.svg": 71608,
        "./esrb_t.svg": 89100,
        "./fpb_13.svg": 58560,
        "./fpb_16.svg": 30152,
        "./fpb_18.svg": 92,
        "./fpb_pg.svg": 51340,
        "./grac_12.svg": 40312,
        "./grac_15.svg": 15980,
        "./grac_18.svg": 49400,
        "./grac_a.svg": 26828,
        "./gsrr_0.svg": 47604,
        "./gsrr_12.svg": 62028,
        "./gsrr_15.svg": 75096,
        "./gsrr_18.svg": 98328,
        "./gsrr_6.svg": 60648,
        "./nmc_12.svg": 5468,
        "./nmc_16.svg": 58092,
        "./nmc_18.svg": 6500,
        "./nmc_21.svg": 98761,
        "./nmc_3.svg": 51556,
        "./nmc_7.svg": 74708,
        "./oflc_g.svg": 13212,
        "./oflc_m.svg": 13984,
        "./oflc_ma15.svg": 5936,
        "./oflc_pg.svg": 64948,
        "./oflc_r18.svg": 99252,
        "./pegi_12.svg": 33324,
        "./pegi_16.svg": 13140,
        "./pegi_18.svg": 39784,
        "./pegi_3.svg": 64160,
        "./pegi_4.svg": 492,
        "./pegi_6.svg": 15888,
        "./pegi_7.svg": 79932,
        "./pegi_rp.png": 33407,
        "./rars_0.svg": 1320,
        "./rars_12.svg": 47612,
        "./rars_16.svg": 1432,
        "./rars_18.svg": 85680,
        "./rars_6.svg": 78404,
        "./usk_0.svg": 60272,
        "./usk_12.svg": 76412,
        "./usk_16.svg": 12684,
        "./usk_18.svg": 31336,
        "./usk_6.svg": 62576,
        "./usk_rp.svg": 3468,
        "./vaci_rp.png": 56292
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
      }, s.resolve = r, e.exports = s, s.id = 1188
    },
    76539: (e, a, t) => {
      var n = {
        "./bounty.png": 84264,
        "./collector.png": 27436,
        "./moonshiner.png": 18120,
        "./naturalist.png": 85548,
        "./trader.png": 48748
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
      }, s.resolve = r, e.exports = s, s.id = 76539
    },
    78656: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    63920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    31572: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    2656: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    51408: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    24400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    87276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    61720: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    9240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    90944: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    71052: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    6412: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    65612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    86992: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    59796: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    16132: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    55728: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    50516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    62260: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    64680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    47556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    50372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    14520: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    52892: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    39028: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    99116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    63276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    80136: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    75268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    57533: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    80692: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    12372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    76420: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    13600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    27520: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    78328: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    74376: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    76695: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    38348: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    94348: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    9720: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    84960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    2336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    86672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    89744: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    60900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    27360: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    65299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    71608: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    89100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    58560: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    30152: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    92: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    51340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    40312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    15980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    49400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c66a857ab4a5f8541cace25e15716b9e.svg"
    },
    26828: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    47604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    62028: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    75096: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    98328: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    60648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    5468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    58092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    6500: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    98761: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    51556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    74708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    13212: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    13984: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    5936: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    64948: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    99252: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    33324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    13140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    39784: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    64160: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    15888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    79932: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    33407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    1320: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    47612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    1432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    85680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    78404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    60272: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    76412: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    12684: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    31336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    62576: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    3468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    56292: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    84264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    27436: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    18120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    85548: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    48748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    64476: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    46444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    54604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    13620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    62264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);
//# sourceMappingURL=267ee9daaefe895dbc298bfdb178d02d.js.map