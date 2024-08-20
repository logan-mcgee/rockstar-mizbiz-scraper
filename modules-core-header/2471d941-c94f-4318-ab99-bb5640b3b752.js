! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2471d941-c94f-4318-ab99-bb5640b3b752", e._sentryDebugIdIdentifier = "sentry-dbid-2471d941-c94f-4318-ab99-bb5640b3b752")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [344], {
    7573: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => C_
      });
      var s = {};
      t.r(s), t.d(s, {
        beaterator: () => _n,
        bully: () => vn,
        careers: () => mn,
        gta: () => un,
        gta2: () => pn,
        gta3: () => hn,
        gta4: () => fn,
        gta5: () => bn,
        gtaAdvance: () => wn,
        gtaCtw: () => yn,
        gtaIvEflc: () => kn,
        gtaLcs: () => Mn,
        gtaLondon: () => xn,
        gtaOnline: () => Cn,
        gtaPlus: () => jn,
        gtaSanAndreas: () => Sn,
        gtaTrilogy: () => Tn,
        gtaVc: () => In,
        gtaVcs: () => An,
        laNoire: () => Nn,
        manhunt: () => Pn,
        manhunt2: () => Ln,
        maxPayne: () => zn,
        maxPayne2: () => En,
        maxPayne3: () => On,
        midnightclub: () => Rn,
        midnightclub2: () => Gn,
        midnightclub3: () => Bn,
        midnightclubStreetRacing: () => Dn,
        oni: () => Vn,
        readDeadOnline: () => qn,
        redDeadRedemption: () => Fn,
        redDeadRedemption2: () => Un,
        redDeadRedemptionUndeadNightmare: () => Hn,
        redDeadRevolver: () => $n,
        rsg: () => Wn,
        skateAndDestroy: () => Jn,
        smugglersRun: () => Kn,
        smugglersRun2: () => Yn,
        smugglersRunWarzones: () => Zn,
        stateOfEmergency: () => Xn,
        support: () => er,
        tableTennis: () => ar,
        theItalianJob: () => tr,
        theWarriors: () => sr,
        wildMetal: () => nr
      });
      var n = {};
      t.r(n), t.d(n, {
        W1: () => $r,
        IU: () => Jr
      });
      var r = {};
      t.r(r), t.d(r, {
        beaterator: () => _i,
        bully: () => li,
        careers: () => ci,
        gta: () => di,
        gta2: () => gi,
        gta3: () => vi,
        gta4: () => mi,
        gta5: () => ui,
        gtaadvance: () => pi,
        gtactw: () => hi,
        gtaiveflc: () => fi,
        gtalcs: () => bi,
        gtalondon: () => wi,
        gtaonline: () => yi,
        gtaplus: () => ki,
        gtasanandreas: () => Mi,
        gtatrilogy: () => xi,
        gtav: () => ui,
        gtavc: () => Ci,
        gtavcs: () => ji,
        lanoire: () => Si,
        manhunt: () => Ti,
        manhunt2: () => Ii,
        manhunt3: () => Ai,
        maxpayne: () => Ni,
        maxpayne2: () => Pi,
        maxpayne3: () => Li,
        midnightclub2: () => zi,
        midnightclub3dub: () => Ei,
        midnightclubla: () => Oi,
        midnightclubstreetracing: () => Ri,
        oni: () => Gi,
        reddeadonline: () => Bi,
        reddeadredemption: () => Di,
        reddeadredemption2: () => Vi,
        reddeadredemptionundeadnightmare: () => qi,
        reddeadrevolver: () => Fi,
        rockstar: () => Ui,
        smugglersrun: () => Hi,
        smugglersrun2hostileterritory: () => $i,
        smugglersrunwarzones: () => Wi,
        stateofemergency: () => Xi,
        tabletennis: () => Ji,
        theitalianjob: () => Ki,
        thewarriors: () => Yi,
        thrashersad: () => Zi,
        wildmetal: () => Qi
      });
      var o = t(6717),
        i = t(1403),
        _ = t(9807),
        c = t(4277),
        l = t(4255);
      const d = (0, _.hp)("@rockstargames/modules-core-sc-user"),
        g = d("navOpenReactive", !1),
        v = e => g(e),
        m = d("jumpScMenuFocusReactive", !1),
        u = e => m(e),
        p = d("hasNotificationsReactive", !1),
        h = e => p(e),
        f = d("currentCharIdReactive", (0, c._h)()?.currentCharId),
        b = e => f(e),
        w = d("selectedCharacterTupleReactive", null),
        y = e => w(e),
        k = d("rockstarIdReactive", null),
        M = d("charactersNeededReactive", null),
        x = e => M(e),
        C = d("userDataReactive", null),
        j = e => C(e),
        S = () => {
          const e = (0, _.qs)(M),
            a = (0, _.qs)(f),
            t = (0, _.qs)(g),
            s = (0, _.qs)(p),
            n = (0, _.qs)(w);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: s,
            navOpen: t,
            userData: (0, _.qs)(C),
            selectedCharacterTuple: n,
            jumpScMenuFocus: (0, _.qs)(m),
            setCharactersNeeded: x,
            setCurrentCharId: b,
            setHasNotifications: h,
            setNavOpen: v,
            setSelectedCharacterTuple: y,
            setUserData: j,
            setJumpScMenuFocus: u
          }
        };
      var T = t(6377),
        I = t.n(T);
      const A = (0, c.S0)(),
        N = (0, _.UT)(A),
        {
          graphEnv: P
        } = (0, c.S0)(),
        L = (0, _.RX)(P),
        z = () => {
          const e = (0, _.e9)(),
            [a, t] = (0, i.useState)({
              id: null,
              avatar: "",
              profile_link: "",
              nickname: "",
              crews: [],
              characters: {
                gtao: []
              }
            }),
            [s, n] = (0, i.useState)(!0),
            [r, , o] = (0, _.bD)(),
            d = (0, _.Es)(),
            {
              refetch: g
            } = (0, _.IT)(l.userData, {
              skip: !0,
              context: {
                uri: L
              }
            }),
            [v, m] = (0, i.useState)(null),
            [u, p] = (0, i.useState)(!1),
            [h, f] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            (async () => {
              const s = null === e ? null : !!e;
              if (s && !u) {
                n(!0), p(!0);
                const e = await g(),
                  s = e?.data?.user?.id,
                  r = await (async e => {
                    let {
                      pingBearer: a,
                      rockstarId: t
                    } = e;
                    const {
                      crews: s
                    } = await (0, c.Ax)("crew/forMember", {
                      pingBearer: a,
                      query: {
                        userId: t
                      }
                    });
                    return s
                  })({
                    pingBearer: d,
                    rockstarId: s
                  }),
                  o = await (async e => {
                    let {
                      pingBearer: a,
                      nickname: t,
                      rockstarId: s
                    } = e;
                    const n = [],
                      r = await (0, c.Ax)("profile/playedplatforms?game=gtav", {
                        pingBearer: a
                      });
                    if (await (r?.platforms?.reduce((async (e, t) => {
                        if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                        const s = await (0, c.Ax)(`games/gtao/characters?platform=${t}`, {
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
                          const o = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                          return n.push({
                            ...e,
                            mugshotUrl: o,
                            platform: t
                          }), e
                        }))
                      }), Promise.resolve())), !n.length) return n;
                    const {
                      status: o,
                      accounts: i
                    } = await (0, c.Ax)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                      pingBearer: a
                    });
                    return o && i.length ? (i.forEach((e => {
                      const {
                        rockstarAccount: a,
                        linkedAccounts: r
                      } = e;
                      if (a?.rockstarId !== s) return;
                      const o = t;
                      let i = "",
                        _ = "";
                      r?.map((e => ("xbl" === e?.onlineService ? i = e.userName : "np" === e?.onlineService && (_ = e.userName), e))), n.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), n.map(((e, a) => (e.platformUsername = o, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = _ || o), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = i || o), e)))
                    })), n) : n
                  })({
                    pingBearer: d,
                    nickname: e?.data?.user?.nickname,
                    rockstarId: s
                  }),
                  i = {
                    ...a,
                    ...e?.data?.user,
                    crews: r,
                    characters: {
                      gtao: o
                    }
                  };
                n(!1), t(i), m(!0), k(s)
              }
              if (!1 === s && !h) {
                try {
                  await (async e => {
                    let {
                      token: a,
                      tokenPingExpires: t
                    } = e;
                    const s = {
                        method: "POST",
                        body: `fingerprint=${await I().get().then((e=>e))}`,
                        credentials: "include",
                        headers: {
                          "X-Requested-With": "XMLHttpRequest",
                          "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                        }
                      },
                      n = await fetch(N().silentCheck, s);
                    if (200 !== n.status) return void a(!1);
                    const r = await n.json(),
                      o = `${N().gateway}?code=${r}`,
                      i = await fetch(o, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: _,
                        tokenExpiresTime: c
                      } = await i.json();
                    return a(_), t(c), _
                  })({
                    token: r,
                    tokenPingExpires: o
                  })
                } catch (e) {}
                f(!0)
              }!1 === s && h && (p(!0), m(!1), n(!1)), null === e && d()
            })()
          }), [e, u, h]), {
            data: a,
            loading: s,
            loggedIn: v
          }
        };
      var E = t(6632);
      const O = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        R = "user-context",
        G = window?.[R] ?? (window[R] = (0, i.createContext)(O)),
        B = e => {
          let {
            children: a
          } = e;
          const t = z(),
            s = (0, i.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, E.jsx)(G.Provider, {
            value: s,
            children: a
          })
        },
        D = () => (0, i.useContext)(G);
      t(714);
      var V = t(6279),
        q = t(9779);
      const F = (0, i.createContext)(void 0),
        U = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const s = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, i.useState)([]), [s, n] = (0, i.useState)([]), [r, o] = (0, i.useState)(null), {
                data: _,
                loggedIn: c
              } = D(), {
                currentCharId: l
              } = S(), d = function(e) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
                return (0, i.useMemo)((() => {
                  const s = e?.characters?.[t];
                  return "1" === (s?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
                }), [e, t, a])
              }(_, l), g = (e, s) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = s ?? {};
                    (0, V.A)({
                      ...e,
                      ...a
                    }), n.push(e)
                  }
                })), t([...a, ...n])
              };
              (0, i.useEffect)((() => {
                if (_ && null !== c) {
                  const e = v(_);
                  s.length && e && g(s, e), o(e)
                } else e || s.length && g(s)
              }), [_, c, s]), (0, i.useEffect)((() => {
                const e = s.filter((e => -1 === a.indexOf(e)));
                n(e)
              }), [a]);
              const v = e => {
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
                  gta_plus_active: c ? Boolean(d) : void 0,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: s.length ? s.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === c || !_ || !r) {
                    const a = [...s];
                    return a.push({
                      ...e
                    }), n(a)
                  }
                  return (0, V.A)({
                    ...e,
                    ...r
                  })
                }
              }
            }(a),
            n = (0, i.useMemo)((() => s), [s, a]);
          return (0, E.jsx)(F.Provider, {
            value: n,
            children: t
          })
        },
        H = {
          track: () => null
        },
        $ = () => (0, i.useContext)(F) ?? H;
      var W = t(5301),
        X = t.n(W),
        J = t(5869);
      const K = "__MFE_GLOBAL_HOOK__",
        Y = JSON.parse('{"us":{"nav_bully_accomplishments":"Accomplishments","nav_bully_cta_buy_now":"Buy Now","nav_bully_game_overview":"Discover","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Careers on LinkedIn","nav_careers_contact_us":"Contact us","nav_careers_home":"Home","nav_careers_openings":"Openings","nav_cta_get_launcher":"Get Launcher","nav_gta_trilogy_accomplishments":"Accomplishments","nav_gta_trilogy_cta_buy_now":"Buy Now","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Overview","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Buy Now","nav_gtaiv_accomplishments":"Accomplishments","nav_gtaiv_cta_buy_now":"Buy Now","nav_gtaiv_overview":"Discover","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Accomplishments","nav_gtaiveflc_overview":"Overview","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Accomplishments","nav_gtao_browse_crews":"Browse All Crews","nav_gtao_career_progress":"Career Progress","nav_gtao_checklist":"Checklist","nav_gtao_community":"Community","nav_gtao_community_series":"Community Series","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Create a Crew","nav_gtao_cta_buy_now":"Buy Now","nav_gtao_discover":"Discover","nav_gtao_emblem_editor":"Emblem Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Browse All Jobs","nav_gtao_jobs_playlists":"Playlists","nav_gtao_license_plate_creator":"License Plate Creator","nav_gtao_missions":"Missions","nav_gtao_my_character":"My Character","nav_gtao_my_crews":"My Crews","nav_gtao_my_jobs":"My Jobs","nav_gtao_overview":"Overview","nav_gtao_photos":"Photos","nav_gtao_stats":"Stats","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Buy Now","nav_gtav_accomplishments":"Accomplishments","nav_gtav_checklist":"Checklist","nav_gtav_community":"Community","nav_gtav_community_series":"Community Series","nav_gtav_create_crew":"Create a Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Browse All Crews","nav_gtav_cta_buy_now":"Buy Now","nav_gtav_discover":"Discover","nav_gtav_emblem_editor":"Emblem Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Browse All Jobs","nav_gtav_licence_plate_creator":"License Plate Creator","nav_gtav_missions":"Missions","nav_gtav_my_character":"My Character","nav_gtav_my_crews":"My Crews","nav_gtav_my_jobs":"My Jobs","nav_gtav_overview":"Overview","nav_gtav_photos":"Photos","nav_gtav_playlists":"Playlists","nav_gtav_stats":"Stats","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Buy Now","nav_gtavc_discover":"Discover","nav_gtavcs_discover":"Discover","nav_lanoire_accomplishments":"Accomplishments","nav_lanoire_badge_pursuit":"Badge Pursuit","nav_lanoire_case_tracker":"Case Tracker","nav_lanoire_checklist":"Checklist","nav_lanoire_cta_buy_now":"Buy Now","nav_lanoire_official_site":"Official Site","nav_lanoire_overview":"Overview","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progress","nav_lanoire_stats":"Stats","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Buy Now","nav_mp3_accomplishments":"Accomplishments","nav_mp3_career":"Career","nav_mp3_chapters":"Chapters","nav_mp3_checklist":"Checklist","nav_mp3_checkpoint_challenge":"Checkpoint Challenge","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Buy Now","nav_mp3_featured":"Featured","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Leaderboards","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"News","nav_mp3_ny_minute":"New York Minute","nav_mp3_official_site":"Official Site","nav_mp3_overview":"Overview","nav_mp3_progress":"Progress","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Specifications","nav_mp3_support":"Support","nav_mp3_weapons":"Weapons","nav_rdo_accomplishments":"Accomplishments","nav_rdo_awards":"Awards","nav_rdo_benefits":"Benefits","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Club Rewards","nav_rdo_community":"Community","nav_rdo_competitive_series":"Competitive Series","nav_rdo_cta_buy_now":"Buy Now","nav_rdo_customization":"Customization","nav_rdo_explore":"Explore","nav_rdo_getting_started":"Getting Started","nav_rdo_guides":"Guides","nav_rdo_my_character":"My Character","nav_rdo_overview":"Overview","nav_rdo_photos":"Photos","nav_rdo_posses":"Posses","nav_rdo_posses_free_roam":"Posses and Free Roam","nav_rdo_progress":"Progress","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Rank Unlocks","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Specialist Roles","nav_rdo_story_missions":"Story Missions","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Buy Now","nav_rdr2_accomplishments":"Accomplishments","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Challenges","nav_rdr2_chapters":"Chapters","nav_rdr2_character":"Character","nav_rdr2_compendium":"Compendium","nav_rdr2_cta_buy_now":"Buy Now","nav_rdr2_explore":"Explore","nav_rdr2_gallery":"Gallery","nav_rdr2_locations":"Locations","nav_rdr2_media":"Media","nav_rdr2_music":"Music","nav_rdr2_online":"Online","nav_rdr2_overview":"Overview","nav_rdr2_progress":"Progress","nav_rdr2_stats":"Stats","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"The Van der Linde Gang","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Weaponry","nav_rdr2_wildlife":"Wildlife","nav_rsg_community_guidelines":"Community Guidelines","nav_rsg_downloads":"Downloads","nav_rsg_games":"Games","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_support_dashboard":"My Dashboard","nav_support_home":"Home","nav_support_service_status":"Service Status","nav_support_submit_ticket":"Submit a Ticket","nav_tabletennis_cta_buy_now":"Buy Now","nav_undeadnightmare_buy_now":"Buy Now","nav_undeadnightmare_discover":"Discover","nav_undeadnightmare_gallery":"Gallery","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"News","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Specifications","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Games","search_target_jobs":"Jobs","search_target_posts":"Posts","search_target_user_photos":"User Photos","search_target_user_videos":"User Videos","search_target_users":"Users","search_target_videos":"Videos","banner_rockstargames_collapsed_legal_cta_aria_label":"Collapsed Banner content","banner_rockstargames_collapsed_legal_cta_label":"Learn More","banner_rockstargames_collapsed_legal_text":"Our legal terms are changing Feb. 28, 2024.","banner_rockstargames_gift_cta":"Get a free Sports Car in GTA Online","banner_rockstargames_gift_text":"Now until March 18, claim a free Obey 8F Drafter.","accessibility_skip_button":"Skip to main content","games_menu_featured":"Featured Games","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"View All","nav_more_dropdown":"More","nav_opens_in_new_window":"{text} (Link opens in new window)","nav_quick_access_games":"Games","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rockstargames_home":"Rockstar Games Home","nav_rockstargames_logo":"Click to open menu","nav_search_error_too_short":"Your search query is too short. Queries must be at least {count} characters long.","nav_search_error_too_short_invalid_chars":"Your search query contains invalid characters ({invalidChars}). Remove these and try again.","nav_view_all_games":"View All","quick_access_title":"Rockstar Games","search_action":"Search","search_close_button":"Close Search","search_open_button":"Open Search","search_placeholder":"Search Rockstar Games...","search_target_aria_label":"Search {target}"},"de":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Inhalt für eingeklapptes Banner","banner_rockstargames_collapsed_legal_cta_label":"Mehr erfahren","banner_rockstargames_collapsed_legal_text":"Unsere rechtlichen Bedingungen ändern sich am 28. Februar 2024.","banner_rockstargames_gift_cta":"Hol dir einen kostenlosen Sportwagen in GTA Online","banner_rockstargames_gift_text":"Hol dir ab sofort bis zum 18. März einen kostenlosen Obey 8F Drafter.","accessibility_skip_button":"Zum Hauptinhalt springen","games_menu_featured":"Ausgewählte Spiele","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Alle anzeigen","nav_bully_accomplishments":"Erfolge","nav_bully_cta_buy_now":"Jetzt kaufen","nav_bully_game_overview":"Entdecken","nav_bully_Overview":"Support","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Stellenangebote auf LinkedIn","nav_careers_contact_us":"Kontaktiere uns","nav_careers_home":"Startseite","nav_careers_openings":"Stellenangebote","nav_cta_get_launcher":"Launcher herunterladen","nav_gta_trilogy_accomplishments":"Erfolge","nav_gta_trilogy_cta_buy_now":"Jetzt kaufen","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Überblick","nav_gta_trilogy_support":"Support","nav_gta3_cta_buy_now":"Jetzt kaufen","nav_gtaiv_accomplishments":"Erfolge","nav_gtaiv_cta_buy_now":"Jetzt kaufen","nav_gtaiv_overview":"Entdecken","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Erfolge","nav_gtaiveflc_overview":"Überblick","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Erfolge","nav_gtao_browse_crews":"Alle Crews ansehen","nav_gtao_career_progress":"Karrierefortschritt","nav_gtao_checklist":"Checkliste","nav_gtao_community":"Community","nav_gtao_community_series":"Community-Serie","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crew erstellen","nav_gtao_cta_buy_now":"Jetzt kaufen","nav_gtao_discover":"Entdecken","nav_gtao_emblem_editor":"Emblem-Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Alle Jobs ansehen","nav_gtao_jobs_playlists":"Spielelisten","nav_gtao_license_plate_creator":"Nummernschild-Editor","nav_gtao_missions":"Missionen","nav_gtao_my_character":"Mein Charakter","nav_gtao_my_crews":"Meine Crews","nav_gtao_my_jobs":"Meine Jobs","nav_gtao_overview":"Überblick","nav_gtao_photos":"Fotos","nav_gtao_stats":"Statistiken","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Jetzt kaufen","nav_gtav_accomplishments":"Erfolge","nav_gtav_checklist":"Checkliste","nav_gtav_community":"Community","nav_gtav_community_series":"Community-Serie","nav_gtav_create_crew":"Crew erstellen","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Alle Crews ansehen","nav_gtav_cta_buy_now":"Jetzt kaufen","nav_gtav_discover":"Entdecken","nav_gtav_emblem_editor":"Emblem-Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Alle Jobs ansehen","nav_gtav_licence_plate_creator":"Nummernschild-Editor","nav_gtav_missions":"Missionen","nav_gtav_my_character":"Mein Charakter","nav_gtav_my_crews":"Meine Crews","nav_gtav_my_jobs":"Meine Jobs","nav_gtav_overview":"Überblick","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Spielelisten","nav_gtav_stats":"Statistiken","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Jetzt kaufen","nav_gtavc_discover":"Entdecken","nav_gtavcs_discover":"Entdecken","nav_lanoire_accomplishments":"Erfolge","nav_lanoire_badge_pursuit":"Jagd nach Abzeichen","nav_lanoire_case_tracker":"Ermittlungsakten","nav_lanoire_checklist":"Checkliste","nav_lanoire_cta_buy_now":"Jetzt kaufen","nav_lanoire_official_site":"Offizielle Seite","nav_lanoire_overview":"Überblick","nav_lanoire_pc_console":"PC/Konsole","nav_lanoire_progress":"Fortschritt","nav_lanoire_stats":"Statistiken","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Jetzt kaufen","nav_more_dropdown":"Mehr","nav_mp3_accomplishments":"Erfolge","nav_mp3_career":"Karriere","nav_mp3_chapters":"Kapitel","nav_mp3_checklist":"Checkliste","nav_mp3_checkpoint_challenge":"Kontrollpunkt-Herausforderung","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Jetzt kaufen","nav_mp3_featured":"Vorgestellt","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Bestenlisten","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Neuigkeiten","nav_mp3_ny_minute":"Eine Minute in New York","nav_mp3_official_site":"Offizielle Seite","nav_mp3_overview":"Überblick","nav_mp3_progress":"Fortschritt","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Spezifikationen","nav_mp3_support":"Support","nav_mp3_weapons":"Waffen","nav_opens_in_new_window":"{text} (Link öffnet ein neues Fenster)","nav_quick_access_games":"Spiele","nav_quick_access_home":"Startseite","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Erfolge","nav_rdo_awards":"Auszeichnungen","nav_rdo_benefits":"Vorteile","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Club-Belohnungen","nav_rdo_community":"Community","nav_rdo_competitive_series":"Wettkampf-Serie","nav_rdo_cta_buy_now":"Jetzt kaufen","nav_rdo_customization":"Individualisierung","nav_rdo_explore":"Entdecken","nav_rdo_getting_started":"Erste Schritte","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mein Charakter","nav_rdo_overview":"Überblick","nav_rdo_photos":"Fotos","nav_rdo_posses":"Trupps","nav_rdo_posses_free_roam":"Trupps und Free Roam","nav_rdo_progress":"Fortschritt","nav_rdo_progression":"Fortschritt","nav_rdo_rank_unlocks":"Rang-Freischaltungen","nav_rdo_roles":"Rollen","nav_rdo_specialist_roles":"Spezialrollen","nav_rdo_story_missions":"Storymissionen","nav_rdo_support":"Support","nav_rdr_cta_buy_now":"Jetzt kaufen","nav_rdr2_accomplishments":"Erfolge","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Herausforderungen","nav_rdr2_chapters":"Kapitel","nav_rdr2_character":"Charakter","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Jetzt kaufen","nav_rdr2_explore":"Entdecken","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Schauplätze","nav_rdr2_media":"Medien","nav_rdr2_music":"Musik","nav_rdr2_online":"Online","nav_rdr2_overview":"Überblick","nav_rdr2_progress":"Fortschritt","nav_rdr2_stats":"Statistiken","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"Die Van-der-Linde-Bande","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Waffen","nav_rdr2_wildlife":"Tierwelt","nav_rockstargames_home":"Rockstar-Games-Startseite","nav_rockstargames_logo":"Klicken, um das Menü zu öffnen","nav_rsg_community_guidelines":"Community-Richtlinien","nav_rsg_downloads":"Downloads","nav_rsg_games":"Spiele","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Deine Suchanfrage ist zu kurz. Suchbegriffe müssen mindestens {count} Zeichen lang sein.","nav_search_error_too_short_invalid_chars":"Deine Suchanfrage beinhaltet ungültige Zeichen ({invalidChars}). Bitte entferne diese und versuche es erneut.","nav_support_dashboard":"Meine Übersicht","nav_support_home":"Startseite","nav_support_service_status":"Service-Status","nav_support_submit_ticket":"Eine Anfrage einreichen","nav_tabletennis_cta_buy_now":"Jetzt kaufen","nav_undeadnightmare_buy_now":"Jetzt kaufen","nav_undeadnightmare_discover":"Entdecken","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Medien","nav_undeadnightmare_news":"Neuigkeiten","nav_undeadnightmare_ps3_digital":"PS3 – Digital","nav_undeadnightmare_specs":"Spezifikationen","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 – Digital","nav_view_all_games":"Alle anzeigen","quick_access_title":"Rockstar Games","search_action":"Suchen","search_close_button":"Suche schließen","search_open_button":"Suche öffnen","search_placeholder":"Rockstar Games durchsuchen …","search_target_aria_label":"Durchsuche {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Spiele","search_target_jobs":"Jobs","search_target_posts":"Beiträge","search_target_user_photos":"Fotos von Nutzern","search_target_user_videos":"Videos von Nutzern","search_target_users":"Nutzer","search_target_videos":"Videos"},"es":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Contenido de un banner colapsado","banner_rockstargames_collapsed_legal_cta_label":"Más información","banner_rockstargames_collapsed_legal_text":"Nuestras condiciones legales cambian el 28 de febrero de 2024.","banner_rockstargames_gift_cta":"Consigue un coche deportivo gratis en GTA Online","banner_rockstargames_gift_text":"Desde ahora hasta el 18 de marzo, consigue un Obey 8F Drafter.","accessibility_skip_button":"Pasar al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Asistencia técnica","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contacta con nosotros","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Asistencia técnica","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Asistencia técnica","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Asistencia técnica","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_career_progress":"Progreso en la trayectoria","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_community_series":"Series de la comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de partidas","nav_gtao_license_plate_creator":"Creador de matrículas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Asistencia técnica","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_community_series":"Series de la comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de matrículas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de partidas","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Asistencia técnica","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio web oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Asistencia técnica","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio web oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Asistencia técnica","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una nueva ventana)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Ventajas","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Cuadrillas","nav_rdo_posses_free_roam":"Cuadrillas y Modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles especializados","nav_rdo_story_missions":"Misiones de la historia","nav_rdo_support":"Asistencia técnica","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Asistencia técnica","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_community_guidelines":"Directrices de la comunidad","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Newswire","nav_rsg_store":"Tienda","nav_rsg_support":"Asistencia técnica","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Tu búsqueda es demasiado corta. Las búsquedas deben contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres que no son válidos ({invalidChars}). Quítalos e inténtalo de nuevo.","nav_support_dashboard":"Mi panel","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Asistencia técnica","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","quick_access_title":"Rockstar Games","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Vídeos de usuarios","search_target_users":"Usuarios","search_target_videos":"Vídeos"},"mx":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Contenido de cartel colapsado","banner_rockstargames_collapsed_legal_cta_label":"Más información","banner_rockstargames_collapsed_legal_text":"Nuestros términos legales cambiarán el 28 de febrero de 2024.","banner_rockstargames_gift_cta":"Obtén un coche deportivo gratis en GTA Online","banner_rockstargames_gift_text":"Obtén un Obey 8F Drafter gratis hasta el 18 de marzo.","accessibility_skip_button":"Ir al contenido principal","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver todos","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_Overview":"Soporte","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contáctanos","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Soporte","nav_gta3_cta_buy_now":"Comprar ahora","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Soporte","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Soporte","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_career_progress":"Progreso y trayectoria","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_community_series":"Serie de la comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de juego","nav_gtao_license_plate_creator":"Creador de placas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Soporte","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_community_series":"Serie de la comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de placas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de juego","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Soporte","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Soporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Comprar ahora","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Soporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una ventana nueva)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Canal de noticias","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Beneficios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Clanes","nav_rdo_posses_free_roam":"Clanes y modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles de especialistas","nav_rdo_story_missions":"Misiones narrativas","nav_rdo_support":"Soporte","nav_rdr_cta_buy_now":"Comprar ahora","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Soporte","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Armamento","nav_rdr2_wildlife":"Fauna","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_community_guidelines":"Directrices de la comunidad","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Canal de noticias","nav_rsg_store":"Tienda","nav_rsg_support":"Soporte","nav_rsg_videos":"Videos","nav_search_error_too_short":"Tu búsqueda es muy corta. La búsqueda debe contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres no válidos: {invalidChars}. Quítalos de la búsqueda y vuelve a intentarlo.","nav_support_dashboard":"Mi panel de control","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_tabletennis_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Soporte","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","quick_access_title":"Rockstar Games","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_user_photos":"Fotos de usuarios","search_target_user_videos":"Videos de usuarios","search_target_users":"Usuarios","search_target_videos":"Videos"},"fr":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Contenu de la bannière réduite","banner_rockstargames_collapsed_legal_cta_label":"En savoir plus","banner_rockstargames_collapsed_legal_text":"Nos conditions générales changent le 28 février 2024.","banner_rockstargames_gift_cta":"Obtenez une sportive gratuite dans GTA Online","banner_rockstargames_gift_text":"Jusqu\'au 18 mars, récupérez gratuitement une Obey 8F Drafter.","accessibility_skip_button":"Passer au contenu principal","games_menu_featured":"Jeux à la une","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Voir tout","nav_bully_accomplishments":"Exploits","nav_bully_cta_buy_now":"Acheter maintenant","nav_bully_game_overview":"Découvrir","nav_bully_Overview":"Assistance","nav_bully_videos":"Vidéos","nav_careers_careers_on_linkedin":"Emplois sur LinkedIn","nav_careers_contact_us":"Nous contacter","nav_careers_home":"Accueil","nav_careers_openings":"Postes à pourvoir","nav_cta_get_launcher":"Obtenir le Launcher","nav_gta_trilogy_accomplishments":"Exploits","nav_gta_trilogy_cta_buy_now":"Acheter maintenant","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Vue d\'ensemble","nav_gta_trilogy_support":"Assistance","nav_gta3_cta_buy_now":"Acheter maintenant","nav_gtaiv_accomplishments":"Exploits","nav_gtaiv_cta_buy_now":"Acheter maintenant","nav_gtaiv_overview":"Découvrir","nav_gtaiv_support":"Assistance","nav_gtaiveflc_accomplishments":"Exploits","nav_gtaiveflc_overview":"Vue d\'ensemble","nav_gtaiveflc_support":"Assistance","nav_gtao_accomplishments":"Exploits","nav_gtao_browse_crews":"Parcourir tous les crews","nav_gtao_career_progress":"Suivi de carrière","nav_gtao_checklist":"Check-list","nav_gtao_community":"Communauté","nav_gtao_community_series":"Épreuves de la communauté","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Créer un crew","nav_gtao_cta_buy_now":"Acheter maintenant","nav_gtao_discover":"Découvrir","nav_gtao_emblem_editor":"Éditeur d\'emblèmes","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Activités","nav_gtao_jobs_browse_all":"Parcourir toutes les activités","nav_gtao_jobs_playlists":"Listes","nav_gtao_license_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtao_missions":"Missions","nav_gtao_my_character":"Mon personnage","nav_gtao_my_crews":"Mes crews","nav_gtao_my_jobs":"Mes activités","nav_gtao_overview":"Vue d\'ensemble","nav_gtao_photos":"Photos","nav_gtao_stats":"Statistiques","nav_gtao_story":"Histoire","nav_gtao_support":"Assistance","nav_gtao_videos":"Vidéos","nav_gtasanandreas_cta_buy_now":"Acheter maintenant","nav_gtav_accomplishments":"Exploits","nav_gtav_checklist":"Check-list","nav_gtav_community":"Communauté","nav_gtav_community_series":"Épreuves de la communauté","nav_gtav_create_crew":"Créer un crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Parcourir tous les crews","nav_gtav_cta_buy_now":"Acheter maintenant","nav_gtav_discover":"Découvrir","nav_gtav_emblem_editor":"Éditeur d\'emblèmes","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Activités","nav_gtav_jobs_browse_all":"Parcourir toutes les activités","nav_gtav_licence_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtav_missions":"Missions","nav_gtav_my_character":"Mon personnage","nav_gtav_my_crews":"Mes crews","nav_gtav_my_jobs":"Mes activités","nav_gtav_overview":"Vue d\'ensemble","nav_gtav_photos":"Photos","nav_gtav_playlists":"Listes","nav_gtav_stats":"Statistiques","nav_gtav_story":"Histoire","nav_gtav_support":"Assistance","nav_gtav_videos":"Vidéos","nav_gtavc_cta_buy_now":"Acheter maintenant","nav_gtavc_discover":"Découvrir","nav_gtavcs_discover":"Découvrir","nav_lanoire_accomplishments":"Exploits","nav_lanoire_badge_pursuit":"Défi Traque & plaque","nav_lanoire_case_tracker":"Suivi d\'affaires","nav_lanoire_checklist":"Check-list","nav_lanoire_cta_buy_now":"Acheter maintenant","nav_lanoire_official_site":"Site officiel","nav_lanoire_overview":"Vue d\'ensemble","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progression","nav_lanoire_stats":"Statistiques","nav_lanoire_support":"Assistance","nav_lanoire_vr_case_files":"Les enquêtes VR","nav_midnightclubla_buy_now":"Acheter maintenant","nav_more_dropdown":"Plus","nav_mp3_accomplishments":"Exploits","nav_mp3_career":"Carrière","nav_mp3_chapters":"Chapitres","nav_mp3_checklist":"Check-list","nav_mp3_checkpoint_challenge":"Défi points de passage","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Acheter maintenant","nav_mp3_featured":"À la une","nav_mp3_grinds":"Défis","nav_mp3_leaderboards":"Classements","nav_mp3_multiplayer":"Multijoueur","nav_mp3_news":"Actualités","nav_mp3_ny_minute":"Minute new-yorkaise","nav_mp3_official_site":"Site officiel","nav_mp3_overview":"Vue d\'ensemble","nav_mp3_progress":"Progression","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Solo","nav_mp3_specifications":"Configuration","nav_mp3_support":"Assistance","nav_mp3_weapons":"Armes","nav_opens_in_new_window":"{text} (le lien s\'ouvrira dans une nouvelle fenêtre)","nav_quick_access_games":"Jeux","nav_quick_access_home":"Accueil","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Exploits","nav_rdo_awards":"Récompenses","nav_rdo_benefits":"Avantages","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Récompenses du club","nav_rdo_community":"Communauté","nav_rdo_competitive_series":"Séries compétitives","nav_rdo_cta_buy_now":"Acheter maintenant","nav_rdo_customization":"Personnalisation","nav_rdo_explore":"Explorer","nav_rdo_getting_started":"Bien démarrer","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mon personnage","nav_rdo_overview":"Vue d\'ensemble","nav_rdo_photos":"Photos","nav_rdo_posses":"Groupes","nav_rdo_posses_free_roam":"Groupes et mode exploration","nav_rdo_progress":"Progression","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Éléments à déverrouiller","nav_rdo_roles":"Rôles","nav_rdo_specialist_roles":"Rôles spécialisés","nav_rdo_story_missions":"Missions de l\'histoire","nav_rdo_support":"Assistance","nav_rdr_cta_buy_now":"Acheter maintenant","nav_rdr2_accomplishments":"Exploits","nav_rdr2_artwork":"Illustrations","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Défis","nav_rdr2_chapters":"Chapitres","nav_rdr2_character":"Personnage","nav_rdr2_compendium":"Encyclopédie","nav_rdr2_cta_buy_now":"Acheter maintenant","nav_rdr2_explore":"Explorer","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Lieux","nav_rdr2_media":"Média","nav_rdr2_music":"Musique","nav_rdr2_online":"En ligne","nav_rdr2_overview":"Vue d\'ensemble","nav_rdr2_progress":"Progression","nav_rdr2_stats":"Statistiques","nav_rdr2_support":"Assistance","nav_rdr2_van_der_linde_gang":"La bande de Van der Linde","nav_rdr2_videos":"Vidéos","nav_rdr2_weaponry":"Armes","nav_rdr2_wildlife":"Vie sauvage","nav_rockstargames_home":"Accueil Rockstar Games","nav_rockstargames_logo":"Cliquez pour ouvrir le menu","nav_rsg_community_guidelines":"Règles de la communauté","nav_rsg_downloads":"Téléchargements","nav_rsg_games":"Jeux","nav_rsg_newswire":"Newswire","nav_rsg_store":"Boutique","nav_rsg_support":"Assistance","nav_rsg_videos":"Vidéos","nav_search_error_too_short":"Requête trop courte. Votre requête doit comporter au moins {count} caractères.","nav_search_error_too_short_invalid_chars":"Votre requête contient des caractères non valides ({invalidChars}). Veuillez les supprimer et réessayer.","nav_support_dashboard":"Mon tableau de bord","nav_support_home":"Accueil","nav_support_service_status":"État du service","nav_support_submit_ticket":"Envoyer une demande d\'assistance","nav_tabletennis_cta_buy_now":"Acheter maintenant","nav_undeadnightmare_buy_now":"Acheter maintenant","nav_undeadnightmare_discover":"Découvrir","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Infos","nav_undeadnightmare_media":"Média","nav_undeadnightmare_news":"Actualités","nav_undeadnightmare_ps3_digital":"PS3 - Version numérique","nav_undeadnightmare_specs":"Configuration","nav_undeadnightmare_suport":"Assistance","nav_undeadnightmare_videos":"Vidéos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Version numérique","nav_view_all_games":"Voir tout","quick_access_title":"Rockstar Games","search_action":"Rechercher","search_close_button":"Fermer la recherche","search_open_button":"Ouvrir la recherche","search_placeholder":"Rechercher sur Rockstar Games...","search_target_aria_label":"Rechercher {target}","search_target_community":"Communauté","search_target_crews":"Crews","search_target_games":"Jeux","search_target_jobs":"Activités","search_target_posts":"Publications","search_target_user_photos":"Photos d\'utilisateurs","search_target_user_videos":"Vidéos d\'utilisateurs","search_target_users":"Utilisateurs","search_target_videos":"Vidéos"},"it":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Contenuto del banner ridotto","banner_rockstargames_collapsed_legal_cta_label":"Altre informazioni","banner_rockstargames_collapsed_legal_text":"I nostri termini legali sono cambiati il 28 febbraio 2024.","banner_rockstargames_gift_cta":"Ottieni un’auto sportiva gratis in GTA Online","banner_rockstargames_gift_text":"Da ora e fino al 18 marzo, riscatta una Obey 8F Drafter gratis.","accessibility_skip_button":"Vai ai contenuti principali","games_menu_featured":"Giochi in evidenza","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Visualizza tutto","nav_bully_accomplishments":"Premi","nav_bully_cta_buy_now":"Acquista ora","nav_bully_game_overview":"Scopri","nav_bully_Overview":"Supporto","nav_bully_videos":"Video","nav_careers_careers_on_linkedin":"Carriere su LinkedIn","nav_careers_contact_us":"Contattaci","nav_careers_home":"Home","nav_careers_openings":"Possibilità di impiego","nav_cta_get_launcher":"Ottieni il launcher","nav_gta_trilogy_accomplishments":"Premi","nav_gta_trilogy_cta_buy_now":"Acquista ora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Panoramica","nav_gta_trilogy_support":"Supporto","nav_gta3_cta_buy_now":"Acquista ora","nav_gtaiv_accomplishments":"Premi","nav_gtaiv_cta_buy_now":"Acquista ora","nav_gtaiv_overview":"Scopri","nav_gtaiv_support":"Supporto","nav_gtaiveflc_accomplishments":"Premi","nav_gtaiveflc_overview":"Panoramica","nav_gtaiveflc_support":"Supporto","nav_gtao_accomplishments":"Premi","nav_gtao_browse_crews":"Esplora le crew","nav_gtao_career_progress":"Progressi della carriera","nav_gtao_checklist":"Elenco 100%","nav_gtao_community":"Comunità","nav_gtao_community_series":"Serie della comunità","nav_gtao_crews":"Crew","nav_gtao_crews_create":"Crea una crew","nav_gtao_cta_buy_now":"Acquista ora","nav_gtao_discover":"Scopri","nav_gtao_emblem_editor":"Editor simboli","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guide","nav_gtao_jobs":"Attività","nav_gtao_jobs_browse_all":"Esplora le attività","nav_gtao_jobs_playlists":"Elenchi partite","nav_gtao_license_plate_creator":"Creatore di targhe","nav_gtao_missions":"Missioni","nav_gtao_my_character":"Il mio personaggio","nav_gtao_my_crews":"Le mie crew","nav_gtao_my_jobs":"Le mie attività","nav_gtao_overview":"Panoramica","nav_gtao_photos":"Foto","nav_gtao_stats":"Statistiche","nav_gtao_story":"Storia","nav_gtao_support":"Supporto","nav_gtao_videos":"Video","nav_gtasanandreas_cta_buy_now":"Acquista ora","nav_gtav_accomplishments":"Premi","nav_gtav_checklist":"Elenco 100%","nav_gtav_community":"Comunità","nav_gtav_community_series":"Serie della comunità","nav_gtav_create_crew":"Crea una crew","nav_gtav_crews":"Crew","nav_gtav_crews_browse_all":"Esplora le crew","nav_gtav_cta_buy_now":"Acquista ora","nav_gtav_discover":"Scopri","nav_gtav_emblem_editor":"Editor simboli","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guide","nav_gtav_jobs":"Attività","nav_gtav_jobs_browse_all":"Esplora le attività","nav_gtav_licence_plate_creator":"Creatore di targhe","nav_gtav_missions":"Missioni","nav_gtav_my_character":"Il mio personaggio","nav_gtav_my_crews":"Le mie crew","nav_gtav_my_jobs":"Le mie attività","nav_gtav_overview":"Panoramica","nav_gtav_photos":"Foto","nav_gtav_playlists":"Elenchi partite","nav_gtav_stats":"Statistiche","nav_gtav_story":"Storia","nav_gtav_support":"Supporto","nav_gtav_videos":"Video","nav_gtavc_cta_buy_now":"Acquista ora","nav_gtavc_discover":"Scopri","nav_gtavcs_discover":"Scopri","nav_lanoire_accomplishments":"Premi","nav_lanoire_badge_pursuit":"Ricerca dei distintivi","nav_lanoire_case_tracker":"Registro dei casi","nav_lanoire_checklist":"Elenco 100%","nav_lanoire_cta_buy_now":"Acquista ora","nav_lanoire_official_site":"Sito ufficiale","nav_lanoire_overview":"Panoramica","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Statistiche","nav_lanoire_support":"Supporto","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Acquista ora","nav_more_dropdown":"Altro","nav_mp3_accomplishments":"Premi","nav_mp3_career":"Carriera","nav_mp3_chapters":"Capitoli","nav_mp3_checklist":"Elenco 100%","nav_mp3_checkpoint_challenge":"Sfida a checkpoint","nav_mp3_crews":"Crew","nav_mp3_cta_buy_now":"Acquista ora","nav_mp3_featured":"In evidenza","nav_mp3_grinds":"Sgobbate","nav_mp3_leaderboards":"Classifiche","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Novità","nav_mp3_ny_minute":"Ultimo respiro","nav_mp3_official_site":"Sito ufficiale","nav_mp3_overview":"Panoramica","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Sfida a punti","nav_mp3_singleplayer":"Giocatore singolo","nav_mp3_specifications":"Requisiti","nav_mp3_support":"Supporto","nav_mp3_weapons":"Armi","nav_opens_in_new_window":"{text} (Il link si apre in una nuova finestra)","nav_quick_access_games":"Giochi","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Premi","nav_rdo_awards":"Ricompense","nav_rdo_benefits":"Vantaggi","nav_rdo_catalogue":"Catalogo","nav_rdo_club_rewards":"Ricompense del club","nav_rdo_community":"Comunità","nav_rdo_competitive_series":"Serie competitive","nav_rdo_cta_buy_now":"Acquista ora","nav_rdo_customization":"Personalizzazione","nav_rdo_explore":"Esplora","nav_rdo_getting_started":"Come iniziare","nav_rdo_guides":"Guide","nav_rdo_my_character":"Il mio personaggio","nav_rdo_overview":"Panoramica","nav_rdo_photos":"Foto","nav_rdo_posses":"Posse","nav_rdo_posses_free_roam":"Posse e Free Roam","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressione","nav_rdo_rank_unlocks":"Sbloccabili con rango","nav_rdo_roles":"Ruoli","nav_rdo_specialist_roles":"Ruoli specializzati","nav_rdo_story_missions":"Missioni della storia","nav_rdo_support":"Supporto","nav_rdr_cta_buy_now":"Acquista ora","nav_rdr2_accomplishments":"Premi","nav_rdr2_artwork":"Illustrazioni","nav_rdr2_catalogue":"Catalogo","nav_rdr2_challenges":"Sfide","nav_rdr2_chapters":"Capitoli","nav_rdr2_character":"Personaggio","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Acquista ora","nav_rdr2_explore":"Esplora","nav_rdr2_gallery":"Galleria","nav_rdr2_locations":"Luoghi","nav_rdr2_media":"Contenuti multimediali","nav_rdr2_music":"Musica","nav_rdr2_online":"Online","nav_rdr2_overview":"Panoramica","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Statistiche","nav_rdr2_support":"Supporto","nav_rdr2_van_der_linde_gang":"La banda di Van der Linde","nav_rdr2_videos":"Video","nav_rdr2_weaponry":"Arsenale","nav_rdr2_wildlife":"Fauna selvatica","nav_rockstargames_home":"Home Rockstar Games","nav_rockstargames_logo":"Clicca per aprire il menu","nav_rsg_community_guidelines":"Linee guida della comunità","nav_rsg_downloads":"Download","nav_rsg_games":"Giochi","nav_rsg_newswire":"Newswire","nav_rsg_store":"Negozio","nav_rsg_support":"Supporto","nav_rsg_videos":"Video","nav_search_error_too_short":"La tua ricerca è troppo corta. Le ricerche devono contenere almeno {count} caratteri.","nav_search_error_too_short_invalid_chars":"La tua ricerca contiene dei caratteri non validi ({invalidChars}). Rimuovili e riprova.","nav_support_dashboard":"La mia dashboard","nav_support_home":"Home","nav_support_service_status":"Stato del servizio","nav_support_submit_ticket":"Invia un ticket","nav_tabletennis_cta_buy_now":"Acquista ora","nav_undeadnightmare_buy_now":"Acquista ora","nav_undeadnightmare_discover":"Scopri","nav_undeadnightmare_gallery":"Galleria","nav_undeadnightmare_info":"Informazioni","nav_undeadnightmare_media":"Contenuti multimediali","nav_undeadnightmare_news":"Novità","nav_undeadnightmare_ps3_digital":"PS3 - Digitale","nav_undeadnightmare_specs":"Requisiti","nav_undeadnightmare_suport":"Supporto","nav_undeadnightmare_videos":"Video","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digitale","nav_view_all_games":"Visualizza tutto","quick_access_title":"Rockstar Games","search_action":"Cerca","search_close_button":"Chiudi ricerca","search_open_button":"Apri ricerca","search_placeholder":"Cerca in Rockstar Games...","search_target_aria_label":"Cerca {target}","search_target_community":"Comunità","search_target_crews":"Crew","search_target_games":"Giochi","search_target_jobs":"Attività","search_target_posts":"Post","search_target_user_photos":"Foto utente","search_target_user_videos":"Video utente","search_target_users":"Utenti","search_target_videos":"Video"},"jp":{"banner_rockstargames_collapsed_legal_cta_aria_label":"折りたたみ可能バナーコンテンツ","banner_rockstargames_collapsed_legal_cta_label":"詳細を閲覧","banner_rockstargames_collapsed_legal_text":"2024年2月28日に利用規約が変更されます","banner_rockstargames_gift_cta":"「GTAオンライン」でスポーツカーを無料で受け取ろう","banner_rockstargames_gift_text":"3月18日までオベイ 8Fドラフターが無料","accessibility_skip_button":"メインコンテンツまでスキップ","games_menu_featured":"注目のゲーム","games_menu_gta_online":"GTAオンライン","games_menu_gta_trilogy":"グランド・セフト・オート：トリロジー","games_menu_gta_v":"グランド・セフト・オートV","games_menu_rdr_2":"レッド・デッド・リデンプション2","games_menu_rdr_online":"レッド・デッド・オンライン","games_menu_view_all":"全て表示","nav_bully_accomplishments":"実績","nav_bully_cta_buy_now":"今すぐ購入","nav_bully_game_overview":"概要","nav_bully_Overview":"サポート","nav_bully_videos":"ビデオ","nav_careers_careers_on_linkedin":"LinkedInキャリア","nav_careers_contact_us":"お問い合せ","nav_careers_home":"ホーム","nav_careers_openings":"求人","nav_cta_get_launcher":"Launcherを入手","nav_gta_trilogy_accomplishments":"実績","nav_gta_trilogy_cta_buy_now":"今すぐ購入","nav_gta_trilogy_gta3":"グランド・セフト・オートIII","nav_gta_trilogy_gtasa":"グランド・セフト・オート：サンアンドレアス","nav_gta_trilogy_gtavc":"グランド・セフト・オート：バイスシティ","nav_gta_trilogy_overview":"概要","nav_gta_trilogy_support":"サポート","nav_gta3_cta_buy_now":"今すぐ購入","nav_gtaiv_accomplishments":"実績","nav_gtaiv_cta_buy_now":"今すぐ購入","nav_gtaiv_overview":"概要","nav_gtaiv_support":"サポート","nav_gtaiveflc_accomplishments":"実績","nav_gtaiveflc_overview":"概要","nav_gtaiveflc_support":"サポート","nav_gtao_accomplishments":"実績","nav_gtao_browse_crews":"全てのクルーを見る","nav_gtao_career_progress":"キャリア進行状況","nav_gtao_checklist":"チェックリスト","nav_gtao_community":"コミュニティ","nav_gtao_community_series":"コミュニティシリーズ","nav_gtao_crews":"クルー","nav_gtao_crews_create":"クルーを作成","nav_gtao_cta_buy_now":"今すぐ購入","nav_gtao_discover":"概要","nav_gtao_emblem_editor":"エンブレム・エディター","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTAオンライン","nav_gtao_guides":"ガイド","nav_gtao_jobs":"ジョブ","nav_gtao_jobs_browse_all":"全てのジョブを見る","nav_gtao_jobs_playlists":"プレイリスト","nav_gtao_license_plate_creator":"ナンバープレートクリエイター","nav_gtao_missions":"ミッション","nav_gtao_my_character":"自分のキャラクター","nav_gtao_my_crews":"自分のクルー","nav_gtao_my_jobs":"マイ・ジョブ","nav_gtao_overview":"概要","nav_gtao_photos":"写真","nav_gtao_stats":"ステータス","nav_gtao_story":"ストーリー","nav_gtao_support":"サポート","nav_gtao_videos":"ビデオ","nav_gtasanandreas_cta_buy_now":"今すぐ購入","nav_gtav_accomplishments":"実績","nav_gtav_checklist":"チェックリスト","nav_gtav_community":"コミュニティ","nav_gtav_community_series":"コミュニティシリーズ","nav_gtav_create_crew":"クルーを作成","nav_gtav_crews":"クルー","nav_gtav_crews_browse_all":"全てのクルーを見る","nav_gtav_cta_buy_now":"今すぐ購入","nav_gtav_discover":"概要","nav_gtav_emblem_editor":"エンブレム・エディター","nav_gtav_gta_online":"GTAオンライン","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"ガイド","nav_gtav_jobs":"ジョブ","nav_gtav_jobs_browse_all":"全てのジョブを見る","nav_gtav_licence_plate_creator":"ナンバープレートクリエイター","nav_gtav_missions":"ミッション","nav_gtav_my_character":"自分のキャラクター","nav_gtav_my_crews":"自分のクルー","nav_gtav_my_jobs":"マイ・ジョブ","nav_gtav_overview":"概要","nav_gtav_photos":"写真","nav_gtav_playlists":"プレイリスト","nav_gtav_stats":"ステータス","nav_gtav_story":"ストーリー","nav_gtav_support":"サポート","nav_gtav_videos":"ビデオ","nav_gtavc_cta_buy_now":"今すぐ購入","nav_gtavc_discover":"概要","nav_gtavcs_discover":"概要","nav_lanoire_accomplishments":"実績","nav_lanoire_badge_pursuit":"バッジ探索チャレンジ","nav_lanoire_case_tracker":"事件トラッカー","nav_lanoire_checklist":"チェックリスト","nav_lanoire_cta_buy_now":"今すぐ購入","nav_lanoire_official_site":"オフィシャルサイト","nav_lanoire_overview":"概要","nav_lanoire_pc_console":"PC/コンソール","nav_lanoire_progress":"進行状況","nav_lanoire_stats":"ステータス","nav_lanoire_support":"サポート","nav_lanoire_vr_case_files":"VR事件簿","nav_midnightclubla_buy_now":"今すぐ購入","nav_more_dropdown":"もっと見る","nav_mp3_accomplishments":"実績","nav_mp3_career":"キャリア","nav_mp3_chapters":"チャプター","nav_mp3_checklist":"チェックリスト","nav_mp3_checkpoint_challenge":"チェックポイントチャレンジ","nav_mp3_crews":"クルー","nav_mp3_cta_buy_now":"今すぐ購入","nav_mp3_featured":"ピックアップ","nav_mp3_grinds":"グラインド","nav_mp3_leaderboards":"ランキング","nav_mp3_multiplayer":"マルチプレイ","nav_mp3_news":"ニュース","nav_mp3_ny_minute":"ニューヨーク・ミニッツ","nav_mp3_official_site":"オフィシャルサイト","nav_mp3_overview":"概要","nav_mp3_progress":"進行状況","nav_mp3_score_attack":"スコアアタック","nav_mp3_singleplayer":"シングルプレイ","nav_mp3_specifications":"システム要件","nav_mp3_support":"サポート","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}(リンクは新しいウィンドウで開きます)","nav_quick_access_games":"ゲーム","nav_quick_access_home":"ホーム","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"実績","nav_rdo_awards":"アワード","nav_rdo_benefits":"特典","nav_rdo_catalogue":"カタログ","nav_rdo_club_rewards":"クラブ報酬","nav_rdo_community":"コミュニティ","nav_rdo_competitive_series":"対戦シリーズ","nav_rdo_cta_buy_now":"今すぐ購入","nav_rdo_customization":"カスタマイズ","nav_rdo_explore":"探索","nav_rdo_getting_started":"冒険の始まり","nav_rdo_guides":"ガイド","nav_rdo_my_character":"自分のキャラクター","nav_rdo_overview":"概要","nav_rdo_photos":"写真","nav_rdo_posses":"民警団","nav_rdo_posses_free_roam":"民警団＆放浪モード","nav_rdo_progress":"進行状況","nav_rdo_progression":"進行状況","nav_rdo_rank_unlocks":"ランク解除","nav_rdo_roles":"役割","nav_rdo_specialist_roles":"専門的な役割","nav_rdo_story_missions":"ストーリーミッション","nav_rdo_support":"サポート","nav_rdr_cta_buy_now":"今すぐ購入","nav_rdr2_accomplishments":"実績","nav_rdr2_artwork":"アートワーク","nav_rdr2_catalogue":"カタログ","nav_rdr2_challenges":"チャレンジ","nav_rdr2_chapters":"チャプター","nav_rdr2_character":"キャラクター","nav_rdr2_compendium":"図鑑","nav_rdr2_cta_buy_now":"今すぐ購入","nav_rdr2_explore":"探索","nav_rdr2_gallery":"ギャラリー","nav_rdr2_locations":"ロケーション","nav_rdr2_media":"メディア","nav_rdr2_music":"音楽","nav_rdr2_online":"オンライン","nav_rdr2_overview":"概要","nav_rdr2_progress":"進行状況","nav_rdr2_stats":"ステータス","nav_rdr2_support":"サポート","nav_rdr2_van_der_linde_gang":"ダッチギャング","nav_rdr2_videos":"ビデオ","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"ロックスター・ゲームスホーム","nav_rockstargames_logo":"クリックしてメニューを開く","nav_rsg_community_guidelines":"コミュニティガイドライン","nav_rsg_downloads":"ダウンロード","nav_rsg_games":"ゲーム","nav_rsg_newswire":"Newswire","nav_rsg_store":"ストア","nav_rsg_support":"サポート","nav_rsg_videos":"ビデオ","nav_search_error_too_short":"検索文字数が少なすぎます。{count}文字以上にしてください。","nav_search_error_too_short_invalid_chars":"検索文字に無効な文字({invalidChars})が含まれています。無効な文字を削除してもう一度お試しください。","nav_support_dashboard":"ダッシュボード","nav_support_home":"ホーム","nav_support_service_status":"サービス状況","nav_support_submit_ticket":"チケットを送信","nav_tabletennis_cta_buy_now":"今すぐ購入","nav_undeadnightmare_buy_now":"今すぐ購入","nav_undeadnightmare_discover":"概要","nav_undeadnightmare_gallery":"ギャラリー","nav_undeadnightmare_info":"情報","nav_undeadnightmare_media":"メディア","nav_undeadnightmare_news":"ニュース","nav_undeadnightmare_ps3_digital":"PS3 - ダウンロード版","nav_undeadnightmare_specs":"システム要件","nav_undeadnightmare_suport":"サポート","nav_undeadnightmare_videos":"ビデオ","nav_undeadnightmare_xbox360_digital":"Xbox 360 - ダウンロード版","nav_view_all_games":"全て表示","quick_access_title":"Rockstar Games","search_action":"検索","search_close_button":"検索を閉じる","search_open_button":"検索を開く","search_placeholder":"ロックスター・ゲームス内を検索…","search_target_aria_label":"{target}を検索","search_target_community":"コミュニティ","search_target_crews":"クルー","search_target_games":"ゲーム","search_target_jobs":"ジョブ","search_target_posts":"投稿","search_target_user_photos":"ユーザー写真","search_target_user_videos":"ユーザービデオ","search_target_users":"ユーザー","search_target_videos":"ビデオ"},"kr":{"banner_rockstargames_collapsed_legal_cta_aria_label":"접을 수 있는 배너 콘텐츠","banner_rockstargames_collapsed_legal_cta_label":"더 알아보기","banner_rockstargames_collapsed_legal_text":"2024년 2월 28일에 법률 약관이 변경되었습니다.","banner_rockstargames_gift_cta":"GTA 온라인에서 무료 스포츠카 획득","banner_rockstargames_gift_text":"지금부터 3월 18일까지 무료 오베이 8F 드래프터를 획득할 수 있습니다.","accessibility_skip_button":"주 콘텐츠로 건너뛰기","games_menu_featured":"특선 게임","games_menu_gta_online":"Grand Theft Auto 온라인","games_menu_gta_trilogy":"Grand Theft Auto: 트릴로지","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 온라인","games_menu_view_all":"모두 보기","nav_bully_accomplishments":"업적","nav_bully_cta_buy_now":"지금 구입","nav_bully_game_overview":"탐색","nav_bully_Overview":"지원","nav_bully_videos":"동영상","nav_careers_careers_on_linkedin":"LinkedIn 채용","nav_careers_contact_us":"문의","nav_careers_home":"홈","nav_careers_openings":"진행 중 공고","nav_cta_get_launcher":"Launcher 다운로드","nav_gta_trilogy_accomplishments":"업적","nav_gta_trilogy_cta_buy_now":"지금 구입","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"소개","nav_gta_trilogy_support":"지원","nav_gta3_cta_buy_now":"지금 구입","nav_gtaiv_accomplishments":"업적","nav_gtaiv_cta_buy_now":"지금 구입","nav_gtaiv_overview":"탐색","nav_gtaiv_support":"지원","nav_gtaiveflc_accomplishments":"업적","nav_gtaiveflc_overview":"소개","nav_gtaiveflc_support":"지원","nav_gtao_accomplishments":"업적","nav_gtao_browse_crews":"모든 조직 둘러보기","nav_gtao_career_progress":"경력 진행","nav_gtao_checklist":"체크리스트","nav_gtao_community":"커뮤니티","nav_gtao_community_series":"커뮤니티 시리즈","nav_gtao_crews":"조직","nav_gtao_crews_create":"조직 생성","nav_gtao_cta_buy_now":"지금 구입","nav_gtao_discover":"탐색","nav_gtao_emblem_editor":"상징 편집기","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 온라인","nav_gtao_guides":"가이드","nav_gtao_jobs":"작업","nav_gtao_jobs_browse_all":"모든 작업 둘러보기","nav_gtao_jobs_playlists":"플레이 목록","nav_gtao_license_plate_creator":"번호판 생성기","nav_gtao_missions":"임무","nav_gtao_my_character":"내 캐릭터","nav_gtao_my_crews":"내 조직","nav_gtao_my_jobs":"내 작업","nav_gtao_overview":"소개","nav_gtao_photos":"사진","nav_gtao_stats":"통계","nav_gtao_story":"스토리","nav_gtao_support":"지원","nav_gtao_videos":"동영상","nav_gtasanandreas_cta_buy_now":"지금 구입","nav_gtav_accomplishments":"업적","nav_gtav_checklist":"체크리스트","nav_gtav_community":"커뮤니티","nav_gtav_community_series":"커뮤니티 시리즈","nav_gtav_create_crew":"조직 생성","nav_gtav_crews":"조직","nav_gtav_crews_browse_all":"모든 조직 둘러보기","nav_gtav_cta_buy_now":"지금 구입","nav_gtav_discover":"탐색","nav_gtav_emblem_editor":"상징 편집기","nav_gtav_gta_online":"GTA 온라인","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"가이드","nav_gtav_jobs":"작업","nav_gtav_jobs_browse_all":"모든 작업 둘러보기","nav_gtav_licence_plate_creator":"번호판 생성기","nav_gtav_missions":"임무","nav_gtav_my_character":"내 캐릭터","nav_gtav_my_crews":"내 조직","nav_gtav_my_jobs":"내 작업","nav_gtav_overview":"소개","nav_gtav_photos":"사진","nav_gtav_playlists":"플레이 목록","nav_gtav_stats":"통계","nav_gtav_story":"스토리","nav_gtav_support":"지원","nav_gtav_videos":"동영상","nav_gtavc_cta_buy_now":"지금 구입","nav_gtavc_discover":"탐색","nav_gtavcs_discover":"탐색","nav_lanoire_accomplishments":"업적","nav_lanoire_badge_pursuit":"배지 수집","nav_lanoire_case_tracker":"사건 추적 일지","nav_lanoire_checklist":"체크리스트","nav_lanoire_cta_buy_now":"지금 구입","nav_lanoire_official_site":"공식 사이트","nav_lanoire_overview":"소개","nav_lanoire_pc_console":"PC/콘솔","nav_lanoire_progress":"진행","nav_lanoire_stats":"통계","nav_lanoire_support":"지원","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"지금 구입","nav_more_dropdown":"그 외","nav_mp3_accomplishments":"업적","nav_mp3_career":"경력","nav_mp3_chapters":"챕터","nav_mp3_checklist":"체크리스트","nav_mp3_checkpoint_challenge":"체크포인트 도전","nav_mp3_crews":"조직","nav_mp3_cta_buy_now":"지금 구입","nav_mp3_featured":"주요 사항","nav_mp3_grinds":"시련","nav_mp3_leaderboards":"순위표","nav_mp3_multiplayer":"멀티 플레이","nav_mp3_news":"뉴스","nav_mp3_ny_minute":"뉴욕의 시간","nav_mp3_official_site":"공식 사이트","nav_mp3_overview":"소개","nav_mp3_progress":"진행","nav_mp3_score_attack":"스코어 어택","nav_mp3_singleplayer":"싱글 플레이","nav_mp3_specifications":"사양","nav_mp3_support":"지원","nav_mp3_weapons":"무기","nav_opens_in_new_window":"{text} (새 창에서 링크 열기)","nav_quick_access_games":"게임","nav_quick_access_home":"홈","nav_quick_access_newswire":"뉴스와이어","nav_rdo_accomplishments":"업적","nav_rdo_awards":"보상","nav_rdo_benefits":"혜택","nav_rdo_catalogue":"카탈로그","nav_rdo_club_rewards":"클럽 보상","nav_rdo_community":"커뮤니티","nav_rdo_competitive_series":"경쟁 시리즈","nav_rdo_cta_buy_now":"지금 구입","nav_rdo_customization":"커스텀","nav_rdo_explore":"탐험","nav_rdo_getting_started":"시작하기","nav_rdo_guides":"가이드","nav_rdo_my_character":"내 캐릭터","nav_rdo_overview":"소개","nav_rdo_photos":"사진","nav_rdo_posses":"갱단","nav_rdo_posses_free_roam":"갱단과 유랑 모드","nav_rdo_progress":"진행","nav_rdo_progression":"진행 상황","nav_rdo_rank_unlocks":"랭크 잠금 해제","nav_rdo_roles":"직업","nav_rdo_specialist_roles":"전문 직업","nav_rdo_story_missions":"스토리 임무","nav_rdo_support":"지원","nav_rdr_cta_buy_now":"지금 구입","nav_rdr2_accomplishments":"업적","nav_rdr2_artwork":"아트워크","nav_rdr2_catalogue":"카탈로그","nav_rdr2_challenges":"도전","nav_rdr2_chapters":"챕터","nav_rdr2_character":"캐릭터","nav_rdr2_compendium":"개요","nav_rdr2_cta_buy_now":"지금 구입","nav_rdr2_explore":"탐험","nav_rdr2_gallery":"갤러리","nav_rdr2_locations":"위치","nav_rdr2_media":"미디어","nav_rdr2_music":"음악","nav_rdr2_online":"온라인","nav_rdr2_overview":"소개","nav_rdr2_progress":"진행","nav_rdr2_stats":"통계","nav_rdr2_support":"지원","nav_rdr2_van_der_linde_gang":"반 더 린드 갱단","nav_rdr2_videos":"동영상","nav_rdr2_weaponry":"무기","nav_rdr2_wildlife":"야생 동물","nav_rockstargames_home":"Rockstar Games 홈","nav_rockstargames_logo":"클릭해서 메뉴 열기","nav_rsg_community_guidelines":"커뮤니티 가이드라인","nav_rsg_downloads":"다운로드","nav_rsg_games":"게임","nav_rsg_newswire":"뉴스와이어","nav_rsg_store":"스토어","nav_rsg_support":"지원","nav_rsg_videos":"동영상","nav_search_error_too_short":"검색어가 너무 짧습니다. 검색어는 최소 {count}글자여야 합니다.","nav_search_error_too_short_invalid_chars":"검색어에 유효하지 않은 문자({invalidChars})가 포함되어 있습니다. 제거하고 다시 시도하십시오.","nav_support_dashboard":"내 대시보드","nav_support_home":"홈","nav_support_service_status":"서비스 현황","nav_support_submit_ticket":"요청 제출","nav_tabletennis_cta_buy_now":"지금 구입","nav_undeadnightmare_buy_now":"지금 구입","nav_undeadnightmare_discover":"탐색","nav_undeadnightmare_gallery":"갤러리","nav_undeadnightmare_info":"정보","nav_undeadnightmare_media":"미디어","nav_undeadnightmare_news":"뉴스","nav_undeadnightmare_ps3_digital":"PS3 - 디지털","nav_undeadnightmare_specs":"사양","nav_undeadnightmare_suport":"지원","nav_undeadnightmare_videos":"동영상","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 디지털","nav_view_all_games":"모두 보기","quick_access_title":"Rockstar Games","search_action":"검색","search_close_button":"검색 닫기","search_open_button":"검색 열기","search_placeholder":"Rockstar Games 검색...","search_target_aria_label":"{target} 검색","search_target_community":"커뮤니티","search_target_crews":"조직","search_target_games":"게임","search_target_jobs":"작업","search_target_posts":"게시물","search_target_user_photos":"유저 사진","search_target_user_videos":"유저 동영상","search_target_users":"유저","search_target_videos":"동영상"},"pl":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Zwijany baner","banner_rockstargames_collapsed_legal_cta_label":"Dowiedz się więcej","banner_rockstargames_collapsed_legal_text":"Nasze zasady prawne ulegną zmianie 28 lutego 2024.","banner_rockstargames_gift_cta":"Zdobądź darmowy samochód sportowy w GTA Online","banner_rockstargames_gift_text":"Odbierz za darmo Obeya 8F Draftera do 18 marca.","accessibility_skip_button":"Przejdź do głównej treści","games_menu_featured":"Wyróżnione gry","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Pokaż wszystkie","nav_bully_accomplishments":"Osiągnięcia","nav_bully_cta_buy_now":"Kup teraz","nav_bully_game_overview":"Odkryj","nav_bully_Overview":"Wsparcie","nav_bully_videos":"Filmy","nav_careers_careers_on_linkedin":"Oferty pracy na LinkedIn","nav_careers_contact_us":"Kontakt","nav_careers_home":"Strona główna","nav_careers_openings":"Wakaty","nav_cta_get_launcher":"Pobierz aplikację","nav_gta_trilogy_accomplishments":"Osiągnięcia","nav_gta_trilogy_cta_buy_now":"Kup teraz","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Ogólny zarys","nav_gta_trilogy_support":"Wsparcie","nav_gta3_cta_buy_now":"Kup teraz","nav_gtaiv_accomplishments":"Osiągnięcia","nav_gtaiv_cta_buy_now":"Kup teraz","nav_gtaiv_overview":"Odkryj","nav_gtaiv_support":"Wsparcie","nav_gtaiveflc_accomplishments":"Osiągnięcia","nav_gtaiveflc_overview":"Ogólny zarys","nav_gtaiveflc_support":"Wsparcie","nav_gtao_accomplishments":"Osiągnięcia","nav_gtao_browse_crews":"Przeglądaj ekipy","nav_gtao_career_progress":"Postępy kariery","nav_gtao_checklist":"Lista zadań","nav_gtao_community":"Społeczność","nav_gtao_community_series":"Seria społeczności","nav_gtao_crews":"Ekipy","nav_gtao_crews_create":"Stwórz ekipę","nav_gtao_cta_buy_now":"Kup teraz","nav_gtao_discover":"Odkryj","nav_gtao_emblem_editor":"Edytor emblematów","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Przewodniki","nav_gtao_jobs":"Akcje","nav_gtao_jobs_browse_all":"Przeglądaj akcje","nav_gtao_jobs_playlists":"Listy gier","nav_gtao_license_plate_creator":"Kreator tablic rejestracyjnych","nav_gtao_missions":"Misje","nav_gtao_my_character":"Moja postać","nav_gtao_my_crews":"Moje ekipy","nav_gtao_my_jobs":"Moje akcje","nav_gtao_overview":"Ogólny zarys","nav_gtao_photos":"Zdjęcia","nav_gtao_stats":"Statystyki","nav_gtao_story":"Fabuła","nav_gtao_support":"Wsparcie","nav_gtao_videos":"Filmy","nav_gtasanandreas_cta_buy_now":"Kup teraz","nav_gtav_accomplishments":"Osiągnięcia","nav_gtav_checklist":"Lista zadań","nav_gtav_community":"Społeczność","nav_gtav_community_series":"Seria społeczności","nav_gtav_create_crew":"Stwórz ekipę","nav_gtav_crews":"Ekipy","nav_gtav_crews_browse_all":"Przeglądaj ekipy","nav_gtav_cta_buy_now":"Kup teraz","nav_gtav_discover":"Odkryj","nav_gtav_emblem_editor":"Edytor emblematów","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Przewodniki","nav_gtav_jobs":"Akcje","nav_gtav_jobs_browse_all":"Przeglądaj akcje","nav_gtav_licence_plate_creator":"Kreator tablic rejestracyjnych","nav_gtav_missions":"Misje","nav_gtav_my_character":"Moja postać","nav_gtav_my_crews":"Moje ekipy","nav_gtav_my_jobs":"Moje akcje","nav_gtav_overview":"Ogólny zarys","nav_gtav_photos":"Zdjęcia","nav_gtav_playlists":"Listy gier","nav_gtav_stats":"Statystyki","nav_gtav_story":"Fabuła","nav_gtav_support":"Wsparcie","nav_gtav_videos":"Filmy","nav_gtavc_cta_buy_now":"Kup teraz","nav_gtavc_discover":"Odkryj","nav_gtavcs_discover":"Odkryj","nav_lanoire_accomplishments":"Osiągnięcia","nav_lanoire_badge_pursuit":"Pościg za odznaką","nav_lanoire_case_tracker":"Wykaz spraw","nav_lanoire_checklist":"Lista zadań","nav_lanoire_cta_buy_now":"Kup teraz","nav_lanoire_official_site":"Oficjalna strona","nav_lanoire_overview":"Ogólny zarys","nav_lanoire_pc_console":"PC/konsola","nav_lanoire_progress":"Postępy","nav_lanoire_stats":"Statystyki","nav_lanoire_support":"Wsparcie","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Kup teraz","nav_more_dropdown":"Więcej","nav_mp3_accomplishments":"Osiągnięcia","nav_mp3_career":"Kariera","nav_mp3_chapters":"Rozdziały","nav_mp3_checklist":"Lista zadań","nav_mp3_checkpoint_challenge":"Wyzwanie punktów kontrolnych","nav_mp3_crews":"Ekipy","nav_mp3_cta_buy_now":"Kup teraz","nav_mp3_featured":"Wyróżnione","nav_mp3_grinds":"Zadania","nav_mp3_leaderboards":"Rankingi","nav_mp3_multiplayer":"Tryb wieloosobowy","nav_mp3_news":"Nowości","nav_mp3_ny_minute":"W mgnieniu oka","nav_mp3_official_site":"Oficjalna strona","nav_mp3_overview":"Ogólny zarys","nav_mp3_progress":"Postępy","nav_mp3_score_attack":"Atak na wynik","nav_mp3_singleplayer":"Gra jednoosobowa","nav_mp3_specifications":"Wymagania","nav_mp3_support":"Wsparcie","nav_mp3_weapons":"Broń","nav_opens_in_new_window":"{text} (Odnośnik otworzy nowe okno)","nav_quick_access_games":"Gry","nav_quick_access_home":"Strona główna","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Osiągnięcia","nav_rdo_awards":"Nagrody","nav_rdo_benefits":"Korzyści","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Nagrody klubowe","nav_rdo_community":"Społeczność","nav_rdo_competitive_series":"Seria rywalizacji","nav_rdo_cta_buy_now":"Kup teraz","nav_rdo_customization":"Personalizacja","nav_rdo_explore":"Eksploruj","nav_rdo_getting_started":"Pierwsze kroki","nav_rdo_guides":"Przewodniki","nav_rdo_my_character":"Moja postać","nav_rdo_overview":"Ogólny zarys","nav_rdo_photos":"Zdjęcia","nav_rdo_posses":"Bandy","nav_rdo_posses_free_roam":"Bandy i gra swobodna","nav_rdo_progress":"Postępy","nav_rdo_progression":"Postępy","nav_rdo_rank_unlocks":"Nagrody za rangi","nav_rdo_roles":"Role","nav_rdo_specialist_roles":"Role specjalistyczne","nav_rdo_story_missions":"Misje fabularne","nav_rdo_support":"Wsparcie","nav_rdr_cta_buy_now":"Kup teraz","nav_rdr2_accomplishments":"Osiągnięcia","nav_rdr2_artwork":"Grafiki","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Wyzwania","nav_rdr2_chapters":"Rozdziały","nav_rdr2_character":"Postać","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Kup teraz","nav_rdr2_explore":"Eksploruj","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Miejsca","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Muzyka","nav_rdr2_online":"Online","nav_rdr2_overview":"Ogólny zarys","nav_rdr2_progress":"Postępy","nav_rdr2_stats":"Statystyki","nav_rdr2_support":"Wsparcie","nav_rdr2_van_der_linde_gang":"Gang van der Lindego","nav_rdr2_videos":"Filmy","nav_rdr2_weaponry":"Broń","nav_rdr2_wildlife":"Zwierzęta","nav_rockstargames_home":"Strona główna Rockstar Games","nav_rockstargames_logo":"Kliknij, aby otworzyć menu","nav_rsg_community_guidelines":"Wskazówki społeczności","nav_rsg_downloads":"Do pobrania","nav_rsg_games":"Gry","nav_rsg_newswire":"Newswire","nav_rsg_store":"Sklep","nav_rsg_support":"Wsparcie","nav_rsg_videos":"Filmy","nav_search_error_too_short":"Wyszukiwana fraza jest za krótka. Musi ona składać się z co najmniej {count} znaków.","nav_search_error_too_short_invalid_chars":"Wyszukiwana fraza zawiera nieobsługiwane znaki ({invalidChars}). Usuń je i spróbuj ponownie.","nav_support_dashboard":"Panel użytkownika","nav_support_home":"Strona główna","nav_support_service_status":"Status usługi","nav_support_submit_ticket":"Wyślij zgłoszenie","nav_tabletennis_cta_buy_now":"Kup teraz","nav_undeadnightmare_buy_now":"Kup teraz","nav_undeadnightmare_discover":"Odkryj","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informacje","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Nowości","nav_undeadnightmare_ps3_digital":"PS3 – wersja cyfrowa","nav_undeadnightmare_specs":"Wymagania","nav_undeadnightmare_suport":"Wsparcie","nav_undeadnightmare_videos":"Filmy","nav_undeadnightmare_xbox360_digital":"Xbox 360 – wersja cyfrowa","nav_view_all_games":"Pokaż wszystkie","quick_access_title":"Rockstar Games","search_action":"Szukaj","search_close_button":"Zamknij wyszukiwanie","search_open_button":"Rozpocznij wyszukiwanie","search_placeholder":"Przeszukaj Rockstar Games...","search_target_aria_label":"Wyszukaj: {target}","search_target_community":"Społeczność","search_target_crews":"Ekipy","search_target_games":"Gry","search_target_jobs":"Akcje","search_target_posts":"Wpisy","search_target_user_photos":"Zdjęcia użytkowników","search_target_user_videos":"Filmy użytkowników","search_target_users":"Użytkownicy","search_target_videos":"Filmy"},"br":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Conteúdo do banner recolhido","banner_rockstargames_collapsed_legal_cta_label":"Saiba mais","banner_rockstargames_collapsed_legal_text":"Nossos termos jurídicos mudaram em 28 de fevereiro de 2024.","banner_rockstargames_gift_cta":"Obtenha um carro esportivo de graça no GTA Online","banner_rockstargames_gift_text":"Até 18 de março, resgate um Obey 8F Drafter grátis.","accessibility_skip_button":"Pular para o conteúdo principal","games_menu_featured":"Jogos em destaque","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Ver tudo","nav_bully_accomplishments":"Conquistas","nav_bully_cta_buy_now":"Compre já","nav_bully_game_overview":"Descobrir","nav_bully_Overview":"Suporte","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Carreiras no LinkedIn","nav_careers_contact_us":"Entre em contato","nav_careers_home":"Início","nav_careers_openings":"Vagas","nav_cta_get_launcher":"Obter Launcher","nav_gta_trilogy_accomplishments":"Conquistas","nav_gta_trilogy_cta_buy_now":"Compre já","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Visão geral","nav_gta_trilogy_support":"Suporte","nav_gta3_cta_buy_now":"Compre já","nav_gtaiv_accomplishments":"Conquistas","nav_gtaiv_cta_buy_now":"Compre já","nav_gtaiv_overview":"Descobrir","nav_gtaiv_support":"Suporte","nav_gtaiveflc_accomplishments":"Conquistas","nav_gtaiveflc_overview":"Visão geral","nav_gtaiveflc_support":"Suporte","nav_gtao_accomplishments":"Conquistas","nav_gtao_browse_crews":"Ver todos os Comandos","nav_gtao_career_progress":"Progresso da Carreira","nav_gtao_checklist":"Lista de progresso","nav_gtao_community":"Comunidade","nav_gtao_community_series":"Comunidade em Série","nav_gtao_crews":"Comandos","nav_gtao_crews_create":"Criar um Comando","nav_gtao_cta_buy_now":"Compre já","nav_gtao_discover":"Descobrir","nav_gtao_emblem_editor":"Editor de Emblema","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guias","nav_gtao_jobs":"Serviços","nav_gtao_jobs_browse_all":"Ver todos os serviços","nav_gtao_jobs_playlists":"Listas de jogos","nav_gtao_license_plate_creator":"Criador de Placas","nav_gtao_missions":"Missões","nav_gtao_my_character":"Meu personagem","nav_gtao_my_crews":"Meus Comandos","nav_gtao_my_jobs":"Meus serviços","nav_gtao_overview":"Visão geral","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estatísticas","nav_gtao_story":"História","nav_gtao_support":"Suporte","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Compre já","nav_gtav_accomplishments":"Conquistas","nav_gtav_checklist":"Lista de progresso","nav_gtav_community":"Comunidade","nav_gtav_community_series":"Comunidade em Série","nav_gtav_create_crew":"Criar um Comando","nav_gtav_crews":"Comandos","nav_gtav_crews_browse_all":"Ver todos os Comandos","nav_gtav_cta_buy_now":"Compre já","nav_gtav_discover":"Descobrir","nav_gtav_emblem_editor":"Editor de Emblema","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guias","nav_gtav_jobs":"Serviços","nav_gtav_jobs_browse_all":"Ver todos os serviços","nav_gtav_licence_plate_creator":"Criador de Placas","nav_gtav_missions":"Missões","nav_gtav_my_character":"Meu personagem","nav_gtav_my_crews":"Meus Comandos","nav_gtav_my_jobs":"Meus serviços","nav_gtav_overview":"Visão geral","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de jogos","nav_gtav_stats":"Estatísticas","nav_gtav_story":"História","nav_gtav_support":"Suporte","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Compre já","nav_gtavc_discover":"Descobrir","nav_gtavcs_discover":"Descobrir","nav_lanoire_accomplishments":"Conquistas","nav_lanoire_badge_pursuit":"Distintivos escondidos","nav_lanoire_case_tracker":"Rastreador de Casos","nav_lanoire_checklist":"Lista de progresso","nav_lanoire_cta_buy_now":"Compre já","nav_lanoire_official_site":"Site oficial","nav_lanoire_overview":"Visão geral","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Estatísticas","nav_lanoire_support":"Suporte","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Compre já","nav_more_dropdown":"Mais","nav_mp3_accomplishments":"Conquistas","nav_mp3_career":"Carreira","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progresso","nav_mp3_checkpoint_challenge":"Desafio Checkpoint","nav_mp3_crews":"Comandos","nav_mp3_cta_buy_now":"Compre já","nav_mp3_featured":"Em destaque","nav_mp3_grinds":"Desafios","nav_mp3_leaderboards":"Placares de líderes","nav_mp3_multiplayer":"Multijogador","nav_mp3_news":"Novidades","nav_mp3_ny_minute":"Um Minuto de Nova York","nav_mp3_official_site":"Site oficial","nav_mp3_overview":"Visão geral","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Modo de Pontuação","nav_mp3_singleplayer":"Jogo individual","nav_mp3_specifications":"Especificações","nav_mp3_support":"Suporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (O link abre em uma nova janela)","nav_quick_access_games":"Jogos","nav_quick_access_home":"Início","nav_quick_access_newswire":"Boletim","nav_rdo_accomplishments":"Conquistas","nav_rdo_awards":"Prêmios","nav_rdo_benefits":"Benefícios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Prêmios do Clube","nav_rdo_community":"Comunidade","nav_rdo_competitive_series":"Séries Competitivas","nav_rdo_cta_buy_now":"Compre já","nav_rdo_customization":"Personalização","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeiros passos","nav_rdo_guides":"Guias","nav_rdo_my_character":"Meu personagem","nav_rdo_overview":"Visão geral","nav_rdo_photos":"Fotos","nav_rdo_posses":"Bandos","nav_rdo_posses_free_roam":"Bandos e Modo Livre","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressão","nav_rdo_rank_unlocks":"Desbloqueios por Nível","nav_rdo_roles":"Ofícios","nav_rdo_specialist_roles":"Ofícios Especializados","nav_rdo_story_missions":"Missões de História","nav_rdo_support":"Suporte","nav_rdr_cta_buy_now":"Compre já","nav_rdr2_accomplishments":"Conquistas","nav_rdr2_artwork":"Arte","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafios","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personagem","nav_rdr2_compendium":"Compêndio","nav_rdr2_cta_buy_now":"Compre já","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Locais","nav_rdr2_media":"Mídia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Visão geral","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Estatísticas","nav_rdr2_support":"Suporte","nav_rdr2_van_der_linde_gang":"Gangue Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Vida Selvagem","nav_rockstargames_home":"Rockstar Games – Início","nav_rockstargames_logo":"Clique para abrir o menu","nav_rsg_community_guidelines":"Diretrizes da Comunidade","nav_rsg_downloads":"Downloads","nav_rsg_games":"Jogos","nav_rsg_newswire":"Boletim","nav_rsg_store":"Loja","nav_rsg_support":"Suporte","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Seu termo de busca é curto demais. Os termos de busca devem ter, no mínimo, {count} caracteres.","nav_search_error_too_short_invalid_chars":"Seu termo de busca contém caracteres inválidos ({invalidChars}). Remova-os e tente novamente.","nav_support_dashboard":"Meu painel","nav_support_home":"Início","nav_support_service_status":"Status do serviço","nav_support_submit_ticket":"Enviar uma solicitação","nav_tabletennis_cta_buy_now":"Compre já","nav_undeadnightmare_buy_now":"Compre já","nav_undeadnightmare_discover":"Descobrir","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informações","nav_undeadnightmare_media":"Mídia","nav_undeadnightmare_news":"Novidades","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Especificações","nav_undeadnightmare_suport":"Suporte","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver tudo","quick_access_title":"Rockstar Games","search_action":"Buscar","search_close_button":"Fechar busca","search_open_button":"Abrir busca","search_placeholder":"Buscar em Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidade","search_target_crews":"Comandos","search_target_games":"Jogos","search_target_jobs":"Serviços","search_target_posts":"Publicações","search_target_user_photos":"Fotos do usuário","search_target_user_videos":"Vídeos do usuário","search_target_users":"Usuários","search_target_videos":"Vídeos"},"ru":{"banner_rockstargames_collapsed_legal_cta_aria_label":"Содержимое складывающегося баннера","banner_rockstargames_collapsed_legal_cta_label":"Подробности","banner_rockstargames_collapsed_legal_text":"Наши юридические условия изменились 28 февраля 2024 г.","banner_rockstargames_gift_cta":"Получите спорткар в GTA Online бесплатно.","banner_rockstargames_gift_text":"До 18 марта вы можете бесплатно получить Obey 8F Drafter.","accessibility_skip_button":"Перейти к основному разделу","games_menu_featured":"Избранные игры","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_view_all":"Показать все","nav_bully_accomplishments":"Достижения","nav_bully_cta_buy_now":"Купить","nav_bully_game_overview":"Об игре","nav_bully_Overview":"Поддержка","nav_bully_videos":"Видеоролики","nav_careers_careers_on_linkedin":"Вакансии на LinkedIn","nav_careers_contact_us":"Свяжитесь с нами","nav_careers_home":"Главная страница","nav_careers_openings":"Вакансии","nav_cta_get_launcher":"Скачать RGL","nav_gta_trilogy_accomplishments":"Достижения","nav_gta_trilogy_cta_buy_now":"Купить","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Описание","nav_gta_trilogy_support":"Поддержка","nav_gta3_cta_buy_now":"Купить","nav_gtaiv_accomplishments":"Достижения","nav_gtaiv_cta_buy_now":"Купить","nav_gtaiv_overview":"Об игре","nav_gtaiv_support":"Поддержка","nav_gtaiveflc_accomplishments":"Достижения","nav_gtaiveflc_overview":"Описание","nav_gtaiveflc_support":"Поддержка","nav_gtao_accomplishments":"Достижения","nav_gtao_browse_crews":"Посмотреть все банды","nav_gtao_career_progress":"Прогресс карьеры","nav_gtao_checklist":"Трекер","nav_gtao_community":"Сообщество","nav_gtao_community_series":"Серия сообщества","nav_gtao_crews":"Банды","nav_gtao_crews_create":"Создать банду","nav_gtao_cta_buy_now":"Купить","nav_gtao_discover":"Об игре","nav_gtao_emblem_editor":"Редактор эмблем","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Руководства","nav_gtao_jobs":"Дела","nav_gtao_jobs_browse_all":"Посмотреть все дела","nav_gtao_jobs_playlists":"Плейлисты","nav_gtao_license_plate_creator":"Редактор номерных знаков","nav_gtao_missions":"Задания","nav_gtao_my_character":"Мой персонаж","nav_gtao_my_crews":"Мои банды","nav_gtao_my_jobs":"Мои дела","nav_gtao_overview":"Описание","nav_gtao_photos":"Фотографии","nav_gtao_stats":"Статистика","nav_gtao_story":"Сюжетный режим","nav_gtao_support":"Поддержка","nav_gtao_videos":"Видеоролики","nav_gtasanandreas_cta_buy_now":"Купить","nav_gtav_accomplishments":"Достижения","nav_gtav_checklist":"Трекер","nav_gtav_community":"Сообщество","nav_gtav_community_series":"Серия сообщества","nav_gtav_create_crew":"Создать банду","nav_gtav_crews":"Банды","nav_gtav_crews_browse_all":"Посмотреть все банды","nav_gtav_cta_buy_now":"Купить","nav_gtav_discover":"Об игре","nav_gtav_emblem_editor":"Редактор эмблем","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Руководства","nav_gtav_jobs":"Дела","nav_gtav_jobs_browse_all":"Посмотреть все дела","nav_gtav_licence_plate_creator":"Редактор номерных знаков","nav_gtav_missions":"Задания","nav_gtav_my_character":"Мой персонаж","nav_gtav_my_crews":"Мои банды","nav_gtav_my_jobs":"Мои дела","nav_gtav_overview":"Описание","nav_gtav_photos":"Фотографии","nav_gtav_playlists":"Плейлисты","nav_gtav_stats":"Статистика","nav_gtav_story":"Сюжетный режим","nav_gtav_support":"Поддержка","nav_gtav_videos":"Видеоролики","nav_gtavc_cta_buy_now":"Купить","nav_gtavc_discover":"Об игре","nav_gtavcs_discover":"Об игре","nav_lanoire_accomplishments":"Достижения","nav_lanoire_badge_pursuit":"Значки","nav_lanoire_case_tracker":"Прогресс","nav_lanoire_checklist":"Трекер","nav_lanoire_cta_buy_now":"Купить","nav_lanoire_official_site":"Официальный сайт","nav_lanoire_overview":"Описание","nav_lanoire_pc_console":"На PC и консолях","nav_lanoire_progress":"Прогресс","nav_lanoire_stats":"Статистика","nav_lanoire_support":"Поддержка","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"Купить","nav_more_dropdown":"Дополнительно","nav_mp3_accomplishments":"Достижения","nav_mp3_career":"Карьера","nav_mp3_chapters":"Главы","nav_mp3_checklist":"Трекер","nav_mp3_checkpoint_challenge":"Контрольные точки","nav_mp3_crews":"Банды","nav_mp3_cta_buy_now":"Купить","nav_mp3_featured":"Избранные","nav_mp3_grinds":"Подвиги","nav_mp3_leaderboards":"Списки лидеров","nav_mp3_multiplayer":"Сетевая игра","nav_mp3_news":"Новости","nav_mp3_ny_minute":"Время не ждет","nav_mp3_official_site":"Официальный сайт","nav_mp3_overview":"Описание","nav_mp3_progress":"Прогресс","nav_mp3_score_attack":"Игра на очки","nav_mp3_singleplayer":"Одиночная игра","nav_mp3_specifications":"Системные требования","nav_mp3_support":"Поддержка","nav_mp3_weapons":"Оружие","nav_opens_in_new_window":"{text} (ссылка откроется в новом окне)","nav_quick_access_games":"Игры","nav_quick_access_home":"Главная страница","nav_quick_access_newswire":"Новостная лента","nav_rdo_accomplishments":"Достижения","nav_rdo_awards":"Награды","nav_rdo_benefits":"Бонусы","nav_rdo_catalogue":"Каталог","nav_rdo_club_rewards":"Награды клуба","nav_rdo_community":"Сообщество","nav_rdo_competitive_series":"Соревновательные серии","nav_rdo_cta_buy_now":"Купить","nav_rdo_customization":"Персонализация","nav_rdo_explore":"Об игре","nav_rdo_getting_started":"С чего начать","nav_rdo_guides":"Руководства","nav_rdo_my_character":"Мой персонаж","nav_rdo_overview":"Описание","nav_rdo_photos":"Фотографии","nav_rdo_posses":"Отряды","nav_rdo_posses_free_roam":"Отряды и свободный режим","nav_rdo_progress":"Прогресс","nav_rdo_progression":"Прогресс","nav_rdo_rank_unlocks":"Открываемые предметы","nav_rdo_roles":"Роли","nav_rdo_specialist_roles":"Роли","nav_rdo_story_missions":"Сюжетные задания","nav_rdo_support":"Поддержка","nav_rdr_cta_buy_now":"Купить","nav_rdr2_accomplishments":"Достижения","nav_rdr2_artwork":"Иллюстрации","nav_rdr2_catalogue":"Каталог","nav_rdr2_challenges":"Испытания","nav_rdr2_chapters":"Главы","nav_rdr2_character":"Игрок","nav_rdr2_compendium":"Справочник","nav_rdr2_cta_buy_now":"Купить","nav_rdr2_explore":"Об игре","nav_rdr2_gallery":"Галерея","nav_rdr2_locations":"Места на карте","nav_rdr2_media":"Медиаматериалы","nav_rdr2_music":"Музыка","nav_rdr2_online":"Сетевая игра","nav_rdr2_overview":"Описание","nav_rdr2_progress":"Прогресс","nav_rdr2_stats":"Статистика","nav_rdr2_support":"Поддержка","nav_rdr2_van_der_linde_gang":"Банда Ван дер Линде","nav_rdr2_videos":"Видеоролики","nav_rdr2_weaponry":"Оружие","nav_rdr2_wildlife":"Животные","nav_rockstargames_home":"Главная страница Rockstar Games","nav_rockstargames_logo":"Нажмите, чтобы раскрыть меню","nav_rsg_community_guidelines":"Правила сообщества","nav_rsg_downloads":"Загрузки","nav_rsg_games":"Игры","nav_rsg_newswire":"Новостная лента","nav_rsg_store":"Магазин","nav_rsg_support":"Поддержка","nav_rsg_videos":"Видеоролики","nav_search_error_too_short":"Слишком короткий поисковый запрос. Минимальное число символов в запросе – {count}.","nav_search_error_too_short_invalid_chars":"Поисковый запрос содержит некорректные символы ({invalidChars}). Удалите их и попробуйте еще раз.","nav_support_dashboard":"Панель управления","nav_support_home":"Главная страница","nav_support_service_status":"Состояние серверов","nav_support_submit_ticket":"Оставить запрос","nav_tabletennis_cta_buy_now":"Купить","nav_undeadnightmare_buy_now":"Купить","nav_undeadnightmare_discover":"Об игре","nav_undeadnightmare_gallery":"Галерея","nav_undeadnightmare_info":"Информация","nav_undeadnightmare_media":"Медиаматериалы","nav_undeadnightmare_news":"Новости","nav_undeadnightmare_ps3_digital":"PS3 – цифровая версия","nav_undeadnightmare_specs":"Системные требования","nav_undeadnightmare_suport":"Поддержка","nav_undeadnightmare_videos":"Видеоролики","nav_undeadnightmare_xbox360_digital":"Xbox 360 – цифровая версия","nav_view_all_games":"Показать все","quick_access_title":"Rockstar Games","search_action":"Поиск","search_close_button":"Закрыть поиск","search_open_button":"Открыть поиск","search_placeholder":"Искать в Rockstar Games...","search_target_aria_label":"Искать в разделе: {target}","search_target_community":"Сообщество","search_target_crews":"Банды","search_target_games":"Игры","search_target_jobs":"Дела","search_target_posts":"Сообщения","search_target_user_photos":"Фотографии пользователей","search_target_user_videos":"Видеоролики пользователей","search_target_users":"Пользователи","search_target_videos":"Видеоролики"},"hans":{"banner_rockstargames_collapsed_legal_cta_aria_label":"折叠式横幅内容","banner_rockstargames_collapsed_legal_cta_label":"了解更多","banner_rockstargames_collapsed_legal_text":"我们的法律条款将于 2024 年 2 月 28 日变更。","banner_rockstargames_gift_cta":"在 GTA 在线模式中获取一辆免费跑车","banner_rockstargames_gift_text":"即日起至 3 月 18 日，可免费领取一辆奥北 8F 尾随者","accessibility_skip_button":"跳至主要内容","games_menu_featured":"精选游戏","games_menu_gta_online":"Grand Theft Auto 在线模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 在线模式","games_menu_view_all":"查看全部","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"马上购买","nav_bully_game_overview":"发现","nav_bully_Overview":"支持","nav_bully_videos":"视频","nav_careers_careers_on_linkedin":"通过 LinkedIn 应聘","nav_careers_contact_us":"联系我们","nav_careers_home":"主页","nav_careers_openings":"空缺职位","nav_cta_get_launcher":"获取 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"马上购买","nav_gta_trilogy_gta3":"GTA 3","nav_gta_trilogy_gtasa":"GTA:San Andreas","nav_gta_trilogy_gtavc":"GTA:Vice City","nav_gta_trilogy_overview":"概况","nav_gta_trilogy_support":"支持","nav_gta3_cta_buy_now":"马上购买","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"马上购买","nav_gtaiv_overview":"发现","nav_gtaiv_support":"支持","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"概况","nav_gtaiveflc_support":"支持","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"浏览所有帮会","nav_gtao_career_progress":"职业进度","nav_gtao_checklist":"清单","nav_gtao_community":"社区","nav_gtao_community_series":"社区系列","nav_gtao_crews":"帮会","nav_gtao_crews_create":"创建帮会","nav_gtao_cta_buy_now":"马上购买","nav_gtao_discover":"发现","nav_gtao_emblem_editor":"徽章编辑器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 在线模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"浏览所有差事","nav_gtao_jobs_playlists":"游玩清单","nav_gtao_license_plate_creator":"车牌制作器","nav_gtao_missions":"任务","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的帮会","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"概况","nav_gtao_photos":"照片","nav_gtao_stats":"统计数据","nav_gtao_story":"故事","nav_gtao_support":"支持","nav_gtao_videos":"视频","nav_gtasanandreas_cta_buy_now":"马上购买","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清单","nav_gtav_community":"社区","nav_gtav_community_series":"社区系列","nav_gtav_create_crew":"创建帮会","nav_gtav_crews":"帮会","nav_gtav_crews_browse_all":"浏览所有帮会","nav_gtav_cta_buy_now":"马上购买","nav_gtav_discover":"发现","nav_gtav_emblem_editor":"徽章编辑器","nav_gtav_gta_online":"GTA 在线模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"浏览所有差事","nav_gtav_licence_plate_creator":"车牌制作器","nav_gtav_missions":"任务","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的帮会","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"概况","nav_gtav_photos":"照片","nav_gtav_playlists":"游玩清单","nav_gtav_stats":"统计数据","nav_gtav_story":"故事","nav_gtav_support":"支持","nav_gtav_videos":"视频","nav_gtavc_cta_buy_now":"马上购买","nav_gtavc_discover":"发现","nav_gtavcs_discover":"发现","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"收集警徽","nav_lanoire_case_tracker":"案件纪录","nav_lanoire_checklist":"清单","nav_lanoire_cta_buy_now":"马上购买","nav_lanoire_official_site":"官方网站","nav_lanoire_overview":"概况","nav_lanoire_pc_console":"PC/主机","nav_lanoire_progress":"进度","nav_lanoire_stats":"统计数据","nav_lanoire_support":"支持","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"马上购买","nav_more_dropdown":"更多内容","nav_mp3_accomplishments":"成就","nav_mp3_career":"职业生涯","nav_mp3_chapters":"章节","nav_mp3_checklist":"清单","nav_mp3_checkpoint_challenge":"检查点挑战","nav_mp3_crews":"帮会","nav_mp3_cta_buy_now":"马上购买","nav_mp3_featured":"精选","nav_mp3_grinds":"挑战","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人游戏","nav_mp3_news":"新闻","nav_mp3_ny_minute":"纽约一分钟","nav_mp3_official_site":"官方网站","nav_mp3_overview":"概况","nav_mp3_progress":"进度","nav_mp3_score_attack":"分数挑战","nav_mp3_singleplayer":"单人游戏","nav_mp3_specifications":"配置","nav_mp3_support":"支持","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新窗口中打开链接）","nav_quick_access_games":"游戏","nav_quick_access_home":"主页","nav_quick_access_newswire":"新闻专线","nav_rdo_accomplishments":"成就","nav_rdo_awards":"奖章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目录","nav_rdo_club_rewards":"俱乐部奖励","nav_rdo_community":"社区","nav_rdo_competitive_series":"竞技系列","nav_rdo_cta_buy_now":"马上购买","nav_rdo_customization":"自定义","nav_rdo_explore":"探索","nav_rdo_getting_started":"新手上路","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"概况","nav_rdo_photos":"照片","nav_rdo_posses":"团队","nav_rdo_posses_free_roam":"团队和自由模式","nav_rdo_progress":"进度","nav_rdo_progression":"进程","nav_rdo_rank_unlocks":"等级解锁","nav_rdo_roles":"职业","nav_rdo_specialist_roles":"专家职业","nav_rdo_story_missions":"故事任务","nav_rdo_support":"支持","nav_rdr_cta_buy_now":"马上购买","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"艺术作品","nav_rdr2_catalogue":"目录","nav_rdr2_challenges":"挑战","nav_rdr2_chapters":"章节","nav_rdr2_character":"角色","nav_rdr2_compendium":"生涯","nav_rdr2_cta_buy_now":"马上购买","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相册","nav_rdr2_locations":"地点","nav_rdr2_media":"媒体","nav_rdr2_music":"音乐","nav_rdr2_online":"在线模式","nav_rdr2_overview":"概况","nav_rdr2_progress":"进度","nav_rdr2_stats":"统计数据","nav_rdr2_support":"支持","nav_rdr2_van_der_linde_gang":"范德林德帮","nav_rdr2_videos":"视频","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生动物","nav_rockstargames_home":"Rockstar Games 主页","nav_rockstargames_logo":"点击打开菜单","nav_rsg_community_guidelines":"社区准则","nav_rsg_downloads":"下载","nav_rsg_games":"游戏","nav_rsg_newswire":"新闻专线","nav_rsg_store":"商店","nav_rsg_support":"支持","nav_rsg_videos":"视频","nav_search_error_too_short":"您的搜索词条太短。词条长度必须至少为 {count} 个字符。","nav_search_error_too_short_invalid_chars":"您的搜索词条包含无效字符（{invalidChars}）。请删除这些无效字符并重试。","nav_support_dashboard":"个人中心","nav_support_home":"主页","nav_support_service_status":"服务状态","nav_support_submit_ticket":"提交请求","nav_tabletennis_cta_buy_now":"马上购买","nav_undeadnightmare_buy_now":"马上购买","nav_undeadnightmare_discover":"发现","nav_undeadnightmare_gallery":"相册","nav_undeadnightmare_info":"信息","nav_undeadnightmare_media":"媒体","nav_undeadnightmare_news":"新闻","nav_undeadnightmare_ps3_digital":"PS3 - 数字版","nav_undeadnightmare_specs":"配置","nav_undeadnightmare_suport":"支持","nav_undeadnightmare_videos":"视频","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 数字版","nav_view_all_games":"查看全部","quick_access_title":"Rockstar Games","search_action":"搜索","search_close_button":"关闭搜索","search_open_button":"打开搜索","search_placeholder":"搜索 Rockstar Games……","search_target_aria_label":"搜索 {target}","search_target_community":"社区","search_target_crews":"帮会","search_target_games":"游戏","search_target_jobs":"差事","search_target_posts":"帖子","search_target_user_photos":"用户照片","search_target_user_videos":"用户视频","search_target_users":"用户","search_target_videos":"视频"},"tw":{"banner_rockstargames_collapsed_legal_cta_aria_label":"關閉橫幅內容","banner_rockstargames_collapsed_legal_cta_label":"了解更多","banner_rockstargames_collapsed_legal_text":"我們的法律聲明條款於 2024 年 2 月 28 日進行變更。","banner_rockstargames_gift_cta":"在 GTA 線上模式免費取得一輛跑車","banner_rockstargames_gift_text":"即日起至 3 月 18 日止，免費領取一輛奧北 8F 尾流王者。","accessibility_skip_button":"跳過至主內容","games_menu_featured":"精選遊戲","games_menu_gta_online":"Grand Theft Auto 線上模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 線上模式","games_menu_view_all":"檢視全部","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"馬上購買","nav_bully_game_overview":"探索","nav_bully_Overview":"支援","nav_bully_videos":"影片","nav_careers_careers_on_linkedin":"LinkedIn 上的工作機會","nav_careers_contact_us":"聯絡我們","nav_careers_home":"首頁","nav_careers_openings":"工作機會","nav_cta_get_launcher":"取得 Launcher","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"馬上購買","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA:San Andreas","nav_gta_trilogy_gtavc":"GTA:Vice City","nav_gta_trilogy_overview":"總覽","nav_gta_trilogy_support":"支援","nav_gta3_cta_buy_now":"馬上購買","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"馬上購買","nav_gtaiv_overview":"探索","nav_gtaiv_support":"支援","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_overview":"總覽","nav_gtaiveflc_support":"支援","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"瀏覽全部幫會","nav_gtao_career_progress":"生涯進度","nav_gtao_checklist":"清單","nav_gtao_community":"社群","nav_gtao_community_series":"社群系列賽","nav_gtao_crews":"幫會","nav_gtao_crews_create":"建立幫會","nav_gtao_cta_buy_now":"馬上購買","nav_gtao_discover":"探索","nav_gtao_emblem_editor":"徽記編輯器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 線上模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"瀏覽全部差事","nav_gtao_jobs_playlists":"遊玩清單","nav_gtao_license_plate_creator":"車牌製作器","nav_gtao_missions":"任務","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的幫會","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"總覽","nav_gtao_photos":"相片","nav_gtao_stats":"統計資料","nav_gtao_story":"故事","nav_gtao_support":"支援","nav_gtao_videos":"影片","nav_gtasanandreas_cta_buy_now":"馬上購買","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清單","nav_gtav_community":"社群","nav_gtav_community_series":"社群系列賽","nav_gtav_create_crew":"建立幫會","nav_gtav_crews":"幫會","nav_gtav_crews_browse_all":"瀏覽全部幫會","nav_gtav_cta_buy_now":"馬上購買","nav_gtav_discover":"探索","nav_gtav_emblem_editor":"徽記編輯器","nav_gtav_gta_online":"GTA 線上模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"瀏覽全部差事","nav_gtav_licence_plate_creator":"車牌製作器","nav_gtav_missions":"任務","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的幫會","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"總覽","nav_gtav_photos":"相片","nav_gtav_playlists":"遊玩清單","nav_gtav_stats":"統計資料","nav_gtav_story":"故事","nav_gtav_support":"支援","nav_gtav_videos":"影片","nav_gtavc_cta_buy_now":"馬上購買","nav_gtavc_discover":"探索","nav_gtavcs_discover":"探索","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"尋找警徽","nav_lanoire_case_tracker":"案件追蹤器","nav_lanoire_checklist":"清單","nav_lanoire_cta_buy_now":"馬上購買","nav_lanoire_official_site":"官方網站","nav_lanoire_overview":"總覽","nav_lanoire_pc_console":"PC/遊戲主機","nav_lanoire_progress":"進度","nav_lanoire_stats":"統計資料","nav_lanoire_support":"支援","nav_lanoire_vr_case_files":"VR Case Files","nav_midnightclubla_buy_now":"馬上購買","nav_more_dropdown":"更多","nav_mp3_accomplishments":"成就","nav_mp3_career":"生涯","nav_mp3_chapters":"章節","nav_mp3_checklist":"清單","nav_mp3_checkpoint_challenge":"檢查點挑戰","nav_mp3_crews":"幫會","nav_mp3_cta_buy_now":"馬上購買","nav_mp3_featured":"精選","nav_mp3_grinds":"挑戰","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人遊戲","nav_mp3_news":"新聞","nav_mp3_ny_minute":"分秒必爭","nav_mp3_official_site":"官方網站","nav_mp3_overview":"總覽","nav_mp3_progress":"進度","nav_mp3_score_attack":"奪取高分","nav_mp3_singleplayer":"單人遊戲","nav_mp3_specifications":"規格","nav_mp3_support":"支援","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新視窗開啟連結）","nav_quick_access_games":"遊戲","nav_quick_access_home":"首頁","nav_quick_access_newswire":"新聞放送","nav_rdo_accomplishments":"成就","nav_rdo_awards":"獎章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目錄","nav_rdo_club_rewards":"俱樂部獎勵","nav_rdo_community":"社群","nav_rdo_competitive_series":"競爭系列賽","nav_rdo_cta_buy_now":"馬上購買","nav_rdo_customization":"自訂","nav_rdo_explore":"探索","nav_rdo_getting_started":"準備開始","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"總覽","nav_rdo_photos":"相片","nav_rdo_posses":"武裝隊","nav_rdo_posses_free_roam":"武裝隊與浪跡模式","nav_rdo_progress":"進度","nav_rdo_progression":"發展","nav_rdo_rank_unlocks":"等級解鎖","nav_rdo_roles":"角色職業","nav_rdo_specialist_roles":"專家角色職業","nav_rdo_story_missions":"故事任務","nav_rdo_support":"支援","nav_rdr_cta_buy_now":"馬上購買","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"插圖","nav_rdr2_catalogue":"目錄","nav_rdr2_challenges":"挑戰","nav_rdr2_chapters":"章節","nav_rdr2_character":"角色","nav_rdr2_compendium":"圖鑑","nav_rdr2_cta_buy_now":"馬上購買","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相冊","nav_rdr2_locations":"地點","nav_rdr2_media":"媒體","nav_rdr2_music":"音樂","nav_rdr2_online":"線上模式","nav_rdr2_overview":"總覽","nav_rdr2_progress":"進度","nav_rdr2_stats":"統計資料","nav_rdr2_support":"支援","nav_rdr2_van_der_linde_gang":"范特林幫派","nav_rdr2_videos":"影片","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rockstargames_home":"Rockstar Games 首頁","nav_rockstargames_logo":"點擊以開啟選單","nav_rsg_community_guidelines":"社群規範","nav_rsg_downloads":"下載","nav_rsg_games":"遊戲","nav_rsg_newswire":"新聞放送","nav_rsg_store":"商店","nav_rsg_support":"支援","nav_rsg_videos":"影片","nav_search_error_too_short":"您的搜尋字詞太短。搜尋字詞必須至少有 {count} 個字元。","nav_search_error_too_short_invalid_chars":"您的搜尋字詞含有無效字元（{invalidChars}）。請移除後再試一次。","nav_support_dashboard":"我的設定畫面","nav_support_home":"首頁","nav_support_service_status":"服務狀態","nav_support_submit_ticket":"提交請求","nav_tabletennis_cta_buy_now":"馬上購買","nav_undeadnightmare_buy_now":"馬上購買","nav_undeadnightmare_discover":"探索","nav_undeadnightmare_gallery":"相冊","nav_undeadnightmare_info":"資訊","nav_undeadnightmare_media":"媒體","nav_undeadnightmare_news":"新聞","nav_undeadnightmare_ps3_digital":"PS3：數位版","nav_undeadnightmare_specs":"規格","nav_undeadnightmare_suport":"支援","nav_undeadnightmare_videos":"影片","nav_undeadnightmare_xbox360_digital":"Xbox 360：數位版","nav_view_all_games":"檢視全部","quick_access_title":"Rockstar Games","search_action":"搜尋","search_close_button":"關閉搜尋","search_open_button":"開啟搜尋","search_placeholder":"搜尋 Rockstar Games……","search_target_aria_label":"搜尋「{target}」","search_target_community":"社群","search_target_crews":"幫會","search_target_games":"遊戲","search_target_jobs":"差事","search_target_posts":"貼文","search_target_user_photos":"使用者相片","search_target_user_videos":"使用者影片","search_target_users":"使用者","search_target_videos":"影片"}}');
      var Z = t(3963);
      const Q = (0, o.defineMessages)({
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
          nav_gtao_career_progress: {
            id: "nav_gtao_career_progress",
            defaultMessage: "Career Progress"
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
          nav_rsg_community_guidelines: {
            id: "nav_rsg_community_guidelines",
            defaultMessage: "Community Guidelines"
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
        ee = [{
          domain: Z.C.www,
          path: "/search"
        }, {
          domain: Z.C.socialClub,
          path: "/crews"
        }, {
          domain: Z.C.socialClub,
          path: "/photos"
        }, {
          domain: Z.C.socialClub,
          path: "/jobs"
        }, {
          domain: Z.C.socialClub,
          path: "/photos"
        }, {
          domain: Z.C.socialClub,
          path: "/videos"
        }],
        ae = (0, i.createContext)({
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
              [Z.C.www]: ["/*"],
              [Z.C.socialClub]: ["/*"]
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
                domain: Z.C.www,
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
        te = e => {
          let {
            children: a
          } = e;
          const [t, s] = (0, i.useState)({
            navigation: ""
          }), [n, r] = (0, i.useState)(null), [_, c] = (0, i.useState)(!1), [l, d] = (0, i.useMemo)((() => (0, o.getLocale)()), []), {
            hash: g,
            pathname: v
          } = (0, q.useLocation)(), {
            data: m
          } = D(), {
            location: u
          } = window, p = (0, Z.A)(), h = (0, i.useMemo)((() => ({
            navigationState: t,
            setNavigationState: s,
            environment: p,
            location: u,
            locale: l,
            rockstarUser: m,
            openedDropdown: n,
            setOpenedDropdown: r,
            isSearchPage: _
          })), [t, l, JSON.stringify(u), p, n, _, m]);
          return (0, i.useEffect)((() => {
            d(l.iso);
            const e = () => r(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, i.useEffect)((() => {
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
          }), [g]), (0, i.useEffect)((() => {
            const e = p.currentSite?.site,
              a = ee.some((a => a.domain === e && v.startsWith(a.path)));
            c(a)
          }), [v]), (0, E.jsx)(ae.Provider, {
            value: h,
            children: a
          })
        },
        se = () => {
          const e = (0, i.useContext)(ae);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        ne = () => {
          const e = (0, i.useContext)(ae);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        re = () => {
          const e = (0, i.useContext)(ae);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: a,
            setOpenedDropdown: t
          } = e;
          return [a, e => {
            t(e === a ? null : e)
          }]
        },
        oe = () => {
          const e = (0, i.useContext)(ae);
          if (void 0 === e) throw new Error("useIsSearchPage must be used within a Navigation Provider");
          return e.isSearchPage
        },
        ie = [{
          titleSlug: "gta-v",
          intlMessage: Q.games_menu_gta_v,
          location: {
            domain: Z.C.www,
            path: "/gta-v"
          },
          dataTestId: "gtav"
        }, {
          titleSlug: "gta-online",
          intlMessage: Q.games_menu_gta_online,
          location: {
            domain: Z.C.www,
            path: "/gta-online"
          },
          dataTestId: "gtao"
        }, {
          titleSlug: "GTATrilogy",
          intlMessage: Q.games_menu_gta_trilogy,
          location: {
            domain: Z.C.www,
            path: "/GTATrilogy"
          },
          dataTestId: "gtaTrilogy"
        }, {
          titleSlug: "reddeadredemption2",
          intlMessage: Q.games_menu_rdr_2,
          location: {
            domain: Z.C.www,
            path: "/reddeadredemption2"
          },
          dataTestId: "rdr2"
        }, {
          titleSlug: "reddeadonline",
          intlMessage: Q.games_menu_rdr_online,
          location: {
            domain: Z.C.www,
            path: "/reddeadonline"
          },
          dataTestId: "rdo"
        }];
      var _e = t(4252),
        ce = t.n(_e),
        le = t(6040);
      let de, ge, ve, me, ue, pe, he, fe, be, we, ye, ke, Me, xe, Ce = () => de || "undefined" != typeof window && (de = window.gsap) && de.registerPlugin && de,
        je = 1,
        Se = [],
        Te = [],
        Ie = [],
        Ae = Date.now,
        Ne = (e, a) => a,
        Pe = (e, a) => ~Ie.indexOf(e) && Ie[Ie.indexOf(e) + 1][a],
        Le = e => !!~ye.indexOf(e),
        ze = (e, a, t, s, n) => e.addEventListener(a, t, {
          passive: !s,
          capture: !!n
        }),
        Ee = (e, a, t, s) => e.removeEventListener(a, t, !!s),
        Oe = "scrollLeft",
        Re = "scrollTop",
        Ge = () => ke && ke.isPressed || Te.cache++,
        Be = (e, a) => {
          let t = s => {
            if (s || 0 === s) {
              je && (me.history.scrollRestoration = "manual");
              let a = ke && ke.isPressed;
              s = t.v = Math.round(s) || (ke && ke.iOS ? 1 : 0), e(s), t.cacheID = Te.cache, a && Ne("ss", s)
            } else(a || Te.cache !== t.cacheID || Ne("ref")) && (t.cacheID = Te.cache, t.v = e());
            return t.v + t.offset
          };
          return t.offset = 0, e && t
        },
        De = {
          s: Oe,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: Be((function(e) {
            return arguments.length ? me.scrollTo(e, Ve.sc()) : me.pageXOffset || ue[Oe] || pe[Oe] || he[Oe] || 0
          }))
        },
        Ve = {
          s: Re,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: De,
          sc: Be((function(e) {
            return arguments.length ? me.scrollTo(De.sc(), e) : me.pageYOffset || ue[Re] || pe[Re] || he[Re] || 0
          }))
        },
        qe = (e, a) => (a && a._ctx && a._ctx.selector || de.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== de.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        Fe = (e, a) => {
          let {
            s: t,
            sc: s
          } = a;
          Le(e) && (e = ue.scrollingElement || pe);
          let n = Te.indexOf(e),
            r = s === Ve.sc ? 1 : 2;
          !~n && (n = Te.push(e) - 1), Te[n + r] || ze(e, "scroll", Ge);
          let o = Te[n + r],
            i = o || (Te[n + r] = Be(Pe(e, t), !0) || (Le(e) ? s : Be((function(a) {
              return arguments.length ? e[t] = a : e[t]
            }))));
          return i.target = e, o || (i.smooth = "smooth" === de.getProperty(e, "scrollBehavior")), i
        },
        Ue = (e, a, t) => {
          let s = e,
            n = e,
            r = Ae(),
            o = r,
            i = a || 50,
            _ = Math.max(500, 3 * i),
            c = (e, a) => {
              let _ = Ae();
              a || _ - r > i ? (n = s, s = e, o = r, r = _) : t ? s += e : s = n + (e - n) / (_ - o) * (r - o)
            };
          return {
            update: c,
            reset: () => {
              n = s = t ? 0 : s, o = r = 0
            },
            getVelocity: e => {
              let a = o,
                i = n,
                l = Ae();
              return (e || 0 === e) && e !== s && c(e), r === o || l - o > _ ? 0 : (s + (t ? i : -i)) / ((t ? l : r) - a) * 1e3
            }
          }
        },
        He = (e, a) => (a && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        $e = e => {
          let a = Math.max(...e),
            t = Math.min(...e);
          return Math.abs(a) >= Math.abs(t) ? a : t
        },
        We = () => {
          we = de.core.globals().ScrollTrigger, we && we.core && (() => {
            let e = we.core,
              a = e.bridge || {},
              t = e._scrollers,
              s = e._proxies;
            t.push(...Te), s.push(...Ie), Te = t, Ie = s, Ne = (e, t) => a[e](t)
          })()
        },
        Xe = e => (de = e || Ce(), de && "undefined" != typeof document && document.body && (me = window, ue = document, pe = ue.documentElement, he = ue.body, ye = [me, ue, pe, he], ve = de.utils.clamp, xe = de.core.context || function() {}, be = "onpointerenter" in he ? "pointer" : "mouse", fe = Je.isTouch = me.matchMedia && me.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in me || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Me = Je.eventTypes = ("ontouchstart" in pe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in pe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => je = 0), 500), We(), ge = 1), ge);
      De.op = Ve, Te.cache = 0;
      class Je {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          ge || Xe(de) || console.warn("Please gsap.registerPlugin(Observer)"), we || We();
          let {
            tolerance: a,
            dragMinimum: t,
            type: s,
            target: n,
            lineHeight: r,
            debounce: o,
            preventDefault: i,
            onStop: _,
            onStopDelay: c,
            ignore: l,
            wheelSpeed: d,
            event: g,
            onDragStart: v,
            onDragEnd: m,
            onDrag: u,
            onPress: p,
            onRelease: h,
            onRight: f,
            onLeft: b,
            onUp: w,
            onDown: y,
            onChangeX: k,
            onChangeY: M,
            onChange: x,
            onToggleX: C,
            onToggleY: j,
            onHover: S,
            onHoverEnd: T,
            onMove: I,
            ignoreCheck: A,
            isNormalizer: N,
            onGestureStart: P,
            onGestureEnd: L,
            onWheel: z,
            onEnable: E,
            onDisable: O,
            onClick: R,
            scrollSpeed: G,
            capture: B,
            allowClicks: D,
            lockAxis: V,
            onLockAxis: q
          } = e;
          this.target = n = qe(n) || pe, this.vars = e, l && (l = de.utils.toArray(l)), a = a || 1e-9, t = t || 0, d = d || 1, G = G || 1, s = s || "wheel,touch,pointer", o = !1 !== o, r || (r = parseFloat(me.getComputedStyle(he).lineHeight) || 22);
          let F, U, H, $, W, X, J, K = this,
            Y = 0,
            Z = 0,
            Q = Fe(n, De),
            ee = Fe(n, Ve),
            ae = Q(),
            te = ee(),
            se = ~s.indexOf("touch") && !~s.indexOf("pointer") && "pointerdown" === Me[0],
            ne = Le(n),
            re = n.ownerDocument || ue,
            oe = [0, 0, 0],
            ie = [0, 0, 0],
            _e = 0,
            ce = () => _e = Ae(),
            le = (e, a) => (K.event = e) && l && ~l.indexOf(e.target) || a && se && "touch" !== e.pointerType || A && A(e, a),
            ve = () => {
              let e = K.deltaX = $e(oe),
                t = K.deltaY = $e(ie),
                s = Math.abs(e) >= a,
                n = Math.abs(t) >= a;
              x && (s || n) && x(K, e, t, oe, ie), s && (f && K.deltaX > 0 && f(K), b && K.deltaX < 0 && b(K), k && k(K), C && K.deltaX < 0 != Y < 0 && C(K), Y = K.deltaX, oe[0] = oe[1] = oe[2] = 0), n && (y && K.deltaY > 0 && y(K), w && K.deltaY < 0 && w(K), M && M(K), j && K.deltaY < 0 != Z < 0 && j(K), Z = K.deltaY, ie[0] = ie[1] = ie[2] = 0), ($ || H) && (I && I(K), H && (u(K), H = !1), $ = !1), X && !(X = !1) && q && q(K), W && (z(K), W = !1), F = 0
            },
            ye = (e, a, t) => {
              oe[t] += e, ie[t] += a, K._vx.update(e), K._vy.update(a), o ? F || (F = requestAnimationFrame(ve)) : ve()
            },
            Ce = (e, a) => {
              V && !J && (K.axis = J = Math.abs(e) > Math.abs(a) ? "x" : "y", X = !0), "y" !== J && (oe[2] += e, K._vx.update(e, !0)), "x" !== J && (ie[2] += a, K._vy.update(a, !0)), o ? F || (F = requestAnimationFrame(ve)) : ve()
            },
            je = e => {
              if (le(e, 1)) return;
              let a = (e = He(e, i)).clientX,
                s = e.clientY,
                n = a - K.x,
                r = s - K.y,
                o = K.isDragging;
              K.x = a, K.y = s, (o || Math.abs(K.startX - a) >= t || Math.abs(K.startY - s) >= t) && (u && (H = !0), o || (K.isDragging = !0), Ce(n, r), o || v && v(K))
            },
            Te = K.onPress = e => {
              le(e, 1) || e && e.button || (K.axis = J = null, U.pause(), K.isPressed = !0, e = He(e), Y = Z = 0, K.startX = K.x = e.clientX, K.startY = K.y = e.clientY, K._vx.reset(), K._vy.reset(), ze(N ? n : re, Me[1], je, i, !0), K.deltaX = K.deltaY = 0, p && p(K))
            },
            Ie = K.onRelease = e => {
              if (le(e, 1)) return;
              Ee(N ? n : re, Me[1], je, !0);
              let a = !isNaN(K.y - K.startY),
                t = K.isDragging && (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3),
                s = He(e);
              !t && a && (K._vx.reset(), K._vy.reset(), i && D && de.delayedCall(.08, (() => {
                if (Ae() - _e > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (re.createEvent) {
                  let a = re.createEvent("MouseEvents");
                  a.initMouseEvent("click", !0, !0, me, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(a)
                }
              }))), K.isDragging = K.isGesturing = K.isPressed = !1, _ && !N && U.restart(!0), m && t && m(K), h && h(K, t)
            },
            Ne = e => e.touches && e.touches.length > 1 && (K.isGesturing = !0) && P(e, K.isDragging),
            Pe = () => (K.isGesturing = !1) || L(K),
            Oe = e => {
              if (le(e)) return;
              let a = Q(),
                t = ee();
              ye((a - ae) * G, (t - te) * G, 1), ae = a, te = t, _ && U.restart(!0)
            },
            Re = e => {
              if (le(e)) return;
              e = He(e, i), z && (W = !0);
              let a = (1 === e.deltaMode ? r : 2 === e.deltaMode ? me.innerHeight : 1) * d;
              ye(e.deltaX * a, e.deltaY * a, 0), _ && !N && U.restart(!0)
            },
            Be = e => {
              if (le(e)) return;
              let a = e.clientX,
                t = e.clientY,
                s = a - K.x,
                n = t - K.y;
              K.x = a, K.y = t, $ = !0, (s || n) && Ce(s, n)
            },
            Je = e => {
              K.event = e, S(K)
            },
            Ke = e => {
              K.event = e, T(K)
            },
            Ye = e => le(e) || He(e, i) && R(K);
          U = K._dc = de.delayedCall(c || .25, (() => {
            K._vx.reset(), K._vy.reset(), U.pause(), _ && _(K)
          })).pause(), K.deltaX = K.deltaY = 0, K._vx = Ue(0, 50, !0), K._vy = Ue(0, 50, !0), K.scrollX = Q, K.scrollY = ee, K.isDragging = K.isGesturing = K.isPressed = !1, xe(this), K.enable = e => (K.isEnabled || (ze(ne ? re : n, "scroll", Ge), s.indexOf("scroll") >= 0 && ze(ne ? re : n, "scroll", Oe, i, B), s.indexOf("wheel") >= 0 && ze(n, "wheel", Re, i, B), (s.indexOf("touch") >= 0 && fe || s.indexOf("pointer") >= 0) && (ze(n, Me[0], Te, i, B), ze(re, Me[2], Ie), ze(re, Me[3], Ie), D && ze(n, "click", ce, !1, !0), R && ze(n, "click", Ye), P && ze(re, "gesturestart", Ne), L && ze(re, "gestureend", Pe), S && ze(n, be + "enter", Je), T && ze(n, be + "leave", Ke), I && ze(n, be + "move", Be)), K.isEnabled = !0, e && e.type && Te(e), E && E(K)), K), K.disable = () => {
            K.isEnabled && (Se.filter((e => e !== K && Le(e.target))).length || Ee(ne ? re : n, "scroll", Ge), K.isPressed && (K._vx.reset(), K._vy.reset(), Ee(N ? n : re, Me[1], je, !0)), Ee(ne ? re : n, "scroll", Oe, B), Ee(n, "wheel", Re, B), Ee(n, Me[0], Te, B), Ee(re, Me[2], Ie), Ee(re, Me[3], Ie), Ee(n, "click", ce, !0), Ee(n, "click", Ye), Ee(re, "gesturestart", Ne), Ee(re, "gestureend", Pe), Ee(n, be + "enter", Je), Ee(n, be + "leave", Ke), Ee(n, be + "move", Be), K.isEnabled = K.isPressed = K.isDragging = !1, O && O(K))
          }, K.kill = K.revert = () => {
            K.disable();
            let e = Se.indexOf(K);
            e >= 0 && Se.splice(e, 1), ke === K && (ke = 0)
          }, Se.push(K), N && Le(n) && (ke = K), K.enable(g)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      Je.version = "3.12.2", Je.create = e => new Je(e), Je.register = Xe, Je.getAll = () => Se.slice(), Je.getById = e => Se.filter((a => a.vars.id === e))[0], Ce() && de.registerPlugin(Je);
      let Ke, Ye, Ze, Qe, ea, aa, ta, sa, na, ra, oa, ia, _a, ca, la, da, ga, va, ma, ua, pa, ha, fa, ba, wa, ya, ka, Ma, xa, Ca, ja, Sa, Ta, Ia, Aa, Na, Pa = 1,
        La = Date.now,
        za = La(),
        Ea = 0,
        Oa = 0,
        Ra = (e, a, t) => {
          let s = Ya(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return t["_" + a + "Clamp"] = s, s ? e.substr(6, e.length - 7) : e
        },
        Ga = (e, a) => !a || Ya(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Ba = () => Oa && requestAnimationFrame(Ba),
        Da = () => ca = 1,
        Va = () => ca = 0,
        qa = e => e,
        Fa = e => Math.round(1e5 * e) / 1e5 || 0,
        Ua = () => "undefined" != typeof window,
        Ha = () => Ke || Ua() && (Ke = window.gsap) && Ke.registerPlugin && Ke,
        $a = e => !!~ta.indexOf(e),
        Wa = e => ("Height" === e ? ja : Ze["inner" + e]) || ea["client" + e] || aa["client" + e],
        Xa = e => Pe(e, "getBoundingClientRect") || ($a(e) ? () => (os.width = Ze.innerWidth, os.height = ja, os) : () => wt(e)),
        Ja = (e, a) => {
          let {
            s: t,
            d2: s,
            d: n,
            a: r
          } = a;
          return Math.max(0, (t = "scroll" + s) && (r = Pe(e, t)) ? r() - Xa(e)()[n] : $a(e) ? (ea[t] || aa[t]) - Wa(s) : e[t] - e["offset" + s])
        },
        Ka = (e, a) => {
          for (let t = 0; t < ma.length; t += 3)(!a || ~a.indexOf(ma[t + 1])) && e(ma[t], ma[t + 1], ma[t + 2])
        },
        Ya = e => "string" == typeof e,
        Za = e => "function" == typeof e,
        Qa = e => "number" == typeof e,
        et = e => "object" == typeof e,
        at = (e, a, t) => e && e.progress(a ? 0 : 1) && t && e.pause(),
        tt = (e, a) => {
          if (e.enabled) {
            let t = a(e);
            t && t.totalTime && (e.callbackAnimation = t)
          }
        },
        st = Math.abs,
        nt = "left",
        rt = "right",
        ot = "bottom",
        it = "width",
        _t = "height",
        ct = "Right",
        lt = "Left",
        dt = "Top",
        gt = "Bottom",
        vt = "padding",
        mt = "margin",
        ut = "Width",
        pt = "Height",
        ht = "px",
        ft = e => Ze.getComputedStyle(e),
        bt = (e, a) => {
          for (let t in a) t in e || (e[t] = a[t]);
          return e
        },
        wt = (e, a) => {
          let t = a && "matrix(1, 0, 0, 1, 0, 0)" !== ft(e)[la] && Ke.to(e, {
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
        yt = (e, a) => {
          let {
            d2: t
          } = a;
          return e["offset" + t] || e["client" + t] || 0
        },
        kt = e => {
          let a, t = [],
            s = e.labels,
            n = e.duration();
          for (a in s) t.push(s[a] / n);
          return t
        },
        Mt = e => {
          let a = Ke.utils.snap(e),
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
        xt = (e, a, t, s) => t.split(",").forEach((t => e(a, t, s))),
        Ct = (e, a, t, s, n) => e.addEventListener(a, t, {
          passive: !s,
          capture: !!n
        }),
        jt = (e, a, t, s) => e.removeEventListener(a, t, !!s),
        St = (e, a, t) => {
          (t = t && t.wheelHandler) && (e(a, "wheel", t), e(a, "touchmove", t))
        },
        Tt = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        It = {
          toggleActions: "play",
          anticipatePin: 0
        },
        At = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Nt = (e, a) => {
          if (Ya(e)) {
            let t = e.indexOf("="),
              s = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (s *= a / 100), e = e.substr(0, t - 1)), e = s + (e in At ? At[e] * a : ~e.indexOf("%") ? parseFloat(e) * a / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Pt = (e, a, t, s, n, r, o, i) => {
          let {
            startColor: _,
            endColor: c,
            fontSize: l,
            indent: d,
            fontWeight: g
          } = n, v = Qe.createElement("div"), m = $a(t) || "fixed" === Pe(t, "pinType"), u = -1 !== e.indexOf("scroller"), p = m ? aa : t, h = -1 !== e.indexOf("start"), f = h ? _ : c, b = "border-color:" + f + ";font-size:" + l + ";color:" + f + ";font-weight:" + g + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((u || i) && m ? "fixed;" : "absolute;"), (u || i || !m) && (b += (s === Ve ? rt : ot) + ":" + (r + parseFloat(d)) + "px;"), o && (b += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), v._isStart = h, v.setAttribute("class", "gsap-marker-" + e + (a ? " marker-" + a : "")), v.style.cssText = b, v.innerText = a || 0 === a ? e + "-" + a : e, p.children[0] ? p.insertBefore(v, p.children[0]) : p.appendChild(v), v._offset = v["offset" + s.op.d2], Lt(v, 0, s, h), v
        },
        Lt = (e, a, t, s) => {
          let n = {
              display: "block"
            },
            r = t[s ? "os2" : "p2"],
            o = t[s ? "p2" : "os2"];
          e._isFlipped = s, n[t.a + "Percent"] = s ? -100 : 0, n[t.a] = s ? "1px" : 0, n["border" + r + ut] = 1, n["border" + o + ut] = 0, n[t.p] = a + "px", Ke.set(e, n)
        },
        zt = [],
        Et = {},
        Ot = () => La() - Ea > 34 && (Ta || (Ta = requestAnimationFrame(Qt))),
        Rt = () => {
          (!fa || !fa.isPressed || fa.startX > aa.clientWidth) && (Te.cache++, fa ? Ta || (Ta = requestAnimationFrame(Qt)) : Qt(), Ea || Ft("scrollStart"), Ea = La())
        },
        Gt = () => {
          ya = Ze.innerWidth, wa = Ze.innerHeight
        },
        Bt = () => {
          Te.cache++, !_a && !ha && !Qe.fullscreenElement && !Qe.webkitFullscreenElement && (!ba || ya !== Ze.innerWidth || Math.abs(Ze.innerHeight - wa) > .25 * Ze.innerHeight) && sa.restart(!0)
        },
        Dt = {},
        Vt = [],
        qt = () => jt(vs, "scrollEnd", qt) || Kt(!0),
        Ft = e => Dt[e] && Dt[e].map((e => e())) || Vt,
        Ut = [],
        Ht = e => {
          for (let a = 0; a < Ut.length; a += 5)(!e || Ut[a + 4] && Ut[a + 4].query === e) && (Ut[a].style.cssText = Ut[a + 1], Ut[a].getBBox && Ut[a].setAttribute("transform", Ut[a + 2] || ""), Ut[a + 3].uncache = 1)
        },
        $t = (e, a) => {
          let t;
          for (da = 0; da < zt.length; da++) t = zt[da], !t || a && t._ctx !== a || (e ? t.kill(1) : t.revert(!0, !0));
          a && Ht(a), a || Ft("revert")
        },
        Wt = (e, a) => {
          Te.cache++, (a || !Ia) && Te.forEach((e => Za(e) && e.cacheID++ && (e.rec = 0))), Ya(e) && (Ze.history.scrollRestoration = xa = e)
        },
        Xt = 0,
        Jt = () => {
          aa.appendChild(Ca), ja = Ca.offsetHeight || Ze.innerHeight, aa.removeChild(Ca)
        },
        Kt = (e, a) => {
          if (Ea && !e) return void Ct(vs, "scrollEnd", qt);
          Jt(), Ia = vs.isRefreshing = !0, Te.forEach((e => Za(e) && ++e.cacheID && (e.rec = e())));
          let t = Ft("refreshInit");
          ua && vs.sort(), a || $t(), Te.forEach((e => {
            Za(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), zt.slice(0).forEach((e => e.refresh())), zt.forEach(((e, a) => {
            if (e._subPinOffset && e.pin) {
              let a = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                t = e.pin[a];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[a] - t), e.refresh()
            }
          })), zt.forEach((e => {
            let a = Ja(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > a) && e.setPositions(e.start, Math.max(e.start + 1, a), !0)
          })), t.forEach((e => e && e.render && e.render(-1))), Te.forEach((e => {
            Za(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), Wt(xa, 1), sa.pause(), Xt++, Ia = 2, Qt(2), zt.forEach((e => Za(e.vars.onRefresh) && e.vars.onRefresh(e))), Ia = vs.isRefreshing = !1, Ft("refresh")
        },
        Yt = 0,
        Zt = 1,
        Qt = e => {
          if (!Ia || 2 === e) {
            vs.isUpdating = !0, Na && Na.update(0);
            let e = zt.length,
              a = La(),
              t = a - za >= 50,
              s = e && zt[0].scroll();
            if (Zt = Yt > s ? -1 : 1, Ia || (Yt = s), t && (Ea && !ca && a - Ea > 200 && (Ea = 0, Ft("scrollEnd")), oa = za, za = a), Zt < 0) {
              for (da = e; da-- > 0;) zt[da] && zt[da].update(0, t);
              Zt = 1
            } else
              for (da = 0; da < e; da++) zt[da] && zt[da].update(0, t);
            vs.isUpdating = !1
          }
          Ta = 0
        },
        es = [nt, "top", ot, rt, mt + gt, mt + ct, mt + dt, mt + lt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        as = es.concat([it, _t, "boxSizing", "max" + ut, "max" + pt, "position", mt, vt, vt + dt, vt + ct, vt + gt, vt + lt]),
        ts = (e, a, t, s) => {
          if (!e._gsap.swappedIn) {
            let n, r = es.length,
              o = a.style,
              i = e.style;
            for (; r--;) n = es[r], o[n] = t[n];
            o.position = "absolute" === t.position ? "absolute" : "relative", "inline" === t.display && (o.display = "inline-block"), i[ot] = i[rt] = "auto", o.flexBasis = t.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[it] = yt(e, De) + ht, o[_t] = yt(e, Ve) + ht, o[vt] = i[mt] = i.top = i[nt] = "0", ns(s), i[it] = i["max" + ut] = t[it], i[_t] = i["max" + pt] = t[_t], i[vt] = t[vt], e.parentNode !== a && (e.parentNode.insertBefore(a, e), a.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        ss = /([A-Z])/g,
        ns = e => {
          if (e) {
            let a, t, s = e.t.style,
              n = e.length,
              r = 0;
            for ((e.t._gsap || Ke.core.getCache(e.t)).uncache = 1; r < n; r += 2) t = e[r + 1], a = e[r], t ? s[a] = t : s[a] && s.removeProperty(a.replace(ss, "-$1").toLowerCase())
          }
        },
        rs = e => {
          let a = as.length,
            t = e.style,
            s = [],
            n = 0;
          for (; n < a; n++) s.push(as[n], t[as[n]]);
          return s.t = e, s
        },
        os = {
          left: 0,
          top: 0
        },
        is = (e, a, t, s, n, r, o, i, _, c, l, d, g, v) => {
          Za(e) && (e = e(i)), Ya(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? Nt("0" + e.substr(3), t) : 0));
          let m, u, p, h = g ? g.time() : 0;
          if (g && g.seek(0), isNaN(e) || (e = +e), Qa(e)) g && (e = Ke.utils.mapRange(g.scrollTrigger.start, g.scrollTrigger.end, 0, d, e)), o && Lt(o, t, s, !0);
          else {
            Za(a) && (a = a(i));
            let r, l, d, g, v = (e || "0").split(" ");
            p = qe(a, i) || aa, r = wt(p) || {}, r && (r.left || r.top) || "none" !== ft(p).display || (g = p.style.display, p.style.display = "block", r = wt(p), g ? p.style.display = g : p.style.removeProperty("display")), l = Nt(v[0], r[s.d]), d = Nt(v[1] || "0", t), e = r[s.p] - _[s.p] - c + l + n - d, o && Lt(o, d, s, t - d < 20 || o._isStart && d > 20), t -= t - d
          }
          if (v && (i[v] = e || -.001, e < 0 && (e = 0)), r) {
            let a = e + t,
              n = r._isStart;
            m = "scroll" + s.d2, Lt(r, a, s, n && a > 20 || !n && (l ? Math.max(aa[m], ea[m]) : r.parentNode[m]) <= a + 1), l && (_ = wt(o), l && (r.style[s.op.p] = _[s.op.p] - s.op.m - r._offset + ht))
          }
          return g && p && (m = wt(p), g.seek(d), u = wt(p), g._caScrollDist = m[s.p] - u[s.p], e = e / g._caScrollDist * d), g && g.seek(h), g ? e : Math.round(e)
        },
        _s = /(webkit|moz|length|cssText|inset)/i,
        cs = (e, a, t, s) => {
          if (e.parentNode !== a) {
            let n, r, o = e.style;
            if (a === aa) {
              for (n in e._stOrig = o.cssText, r = ft(e), r) + n || _s.test(n) || !r[n] || "string" != typeof o[n] || "0" === n || (o[n] = r[n]);
              o.top = t, o.left = s
            } else o.cssText = e._stOrig;
            Ke.core.getCache(e).uncache = 1, a.appendChild(e)
          }
        },
        ls = (e, a, t) => {
          let s = a,
            n = s;
          return a => {
            let r = Math.round(e());
            return r !== s && r !== n && Math.abs(r - s) > 3 && Math.abs(r - n) > 3 && (a = r, t && t()), n = s, s = a, a
          }
        },
        ds = (e, a, t) => {
          let s = {};
          s[a.p] = "+=" + t, Ke.set(e, s)
        },
        gs = (e, a) => {
          let t = Fe(e, a),
            s = "_scroll" + a.p2,
            n = (a, r, o, i, _) => {
              let c = n.tween,
                l = r.onComplete,
                d = {};
              o = o || t();
              let g = ls(t, o, (() => {
                c.kill(), n.tween = 0
              }));
              return _ = i && _ || 0, i = i || a - o, c && c.kill(), r[s] = a, r.modifiers = d, d[s] = () => g(o + i * c.ratio + _ * c.ratio * c.ratio), r.onUpdate = () => {
                Te.cache++, Qt()
              }, r.onComplete = () => {
                n.tween = 0, l && l.call(c)
              }, c = n.tween = Ke.to(e, r), c
            };
          return e[s] = t, t.wheelHandler = () => n.tween && n.tween.kill() && (n.tween = 0), Ct(e, "wheel", t.wheelHandler), vs.isTouch && Ct(e, "touchmove", t.wheelHandler), n
        };
      class vs {
        constructor(e, a) {
          Ye || vs.register(Ke) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ma(this), this.init(e, a)
        }
        init(e, a) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Oa) return void(this.update = this.refresh = this.kill = qa);
          e = bt(Ya(e) || Qa(e) || e.nodeType ? {
            trigger: e
          } : e, It);
          let t, s, n, r, o, i, _, c, l, d, g, v, m, u, p, h, f, b, w, y, k, M, x, C, j, S, T, I, A, N, P, L, z, E, O, R, G, B, D, {
              onUpdate: V,
              toggleClass: q,
              id: F,
              onToggle: U,
              onRefresh: H,
              scrub: $,
              trigger: W,
              pin: X,
              pinSpacing: J,
              invalidateOnRefresh: K,
              anticipatePin: Y,
              onScrubComplete: Z,
              onSnapComplete: Q,
              once: ee,
              snap: ae,
              pinReparent: te,
              pinSpacer: se,
              containerAnimation: ne,
              fastScrollEnd: re,
              preventOverlaps: oe
            } = e,
            ie = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? De : Ve,
            _e = !$ && 0 !== $,
            ce = qe(e.scroller || Ze),
            le = Ke.core.getCache(ce),
            de = $a(ce),
            ge = "fixed" === ("pinType" in e ? e.pinType : Pe(ce, "pinType") || de && "fixed"),
            ve = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            me = _e && e.toggleActions.split(" "),
            ue = "markers" in e ? e.markers : It.markers,
            pe = de ? 0 : parseFloat(ft(ce)["border" + ie.p2 + ut]) || 0,
            he = this,
            fe = e.onRefreshInit && (() => e.onRefreshInit(he)),
            be = ((e, a, t) => {
              let {
                d: s,
                d2: n,
                a: r
              } = t;
              return (r = Pe(e, "getBoundingClientRect")) ? () => r()[s] : () => (a ? Wa(n) : e["client" + n]) || 0
            })(ce, de, ie),
            we = ((e, a) => !a || ~Ie.indexOf(e) ? Xa(e) : () => os)(ce, de),
            ye = 0,
            ke = 0,
            Me = 0,
            xe = Fe(ce, ie);
          var Ce;
          if (he._startClamp = he._endClamp = !1, he._dir = ie, Y *= 45, he.scroller = ce, he.scroll = ne ? ne.time.bind(ne) : xe, r = xe(), he.vars = e, a = a || e.animation, "refreshPriority" in e && (ua = 1, -9999 === e.refreshPriority && (Na = he)), le.tweenScroll = le.tweenScroll || {
              top: gs(ce, Ve),
              left: gs(ce, De)
            }, he.tweenTo = t = le.tweenScroll[ie.p], he.scrubDuration = e => {
              z = Qa(e) && e, z ? L ? L.duration(e) : L = Ke.to(a, {
                ease: "expo",
                totalProgress: "+=0",
                duration: z,
                paused: !0,
                onComplete: () => Z && Z(he)
              }) : (L && L.progress(1).kill(), L = 0)
            }, a && (a.vars.lazy = !1, a._initted && !he.isReverted || !1 !== a.vars.immediateRender && !1 !== e.immediateRender && a.duration() && a.render(0, !0, !0), he.animation = a.pause(), a.scrollTrigger = he, he.scrubDuration($), N = 0, F || (F = a.vars.id)), ae && (et(ae) && !ae.push || (ae = {
              snapTo: ae
            }), "scrollBehavior" in aa.style && Ke.set(de ? [aa, ea] : ce, {
              scrollBehavior: "auto"
            }), Te.forEach((e => Za(e) && e.target === (de ? Qe.scrollingElement || ea : ce) && (e.smooth = !1))), n = Za(ae.snapTo) ? ae.snapTo : "labels" === ae.snapTo ? (e => a => Ke.utils.snap(kt(e), a))(a) : "labelsDirectional" === ae.snapTo ? (Ce = a, (e, a) => Mt(kt(Ce))(e, a.direction)) : !1 !== ae.directional ? (e, a) => Mt(ae.snapTo)(e, La() - ke < 500 ? 0 : a.direction) : Ke.utils.snap(ae.snapTo), E = ae.duration || {
              min: .1,
              max: 2
            }, E = et(E) ? ra(E.min, E.max) : ra(E, E), O = Ke.delayedCall(ae.delay || z / 2 || .1, (() => {
              let e = xe(),
                s = La() - ke < 500,
                r = t.tween;
              if (!(s || Math.abs(he.getVelocity()) < 10) || r || ca || ye === e) he.isActive && ye !== e && O.restart(!0);
              else {
                let o = (e - i) / u,
                  c = a && !_e ? a.totalProgress() : o,
                  l = s ? 0 : (c - P) / (La() - oa) * 1e3 || 0,
                  d = Ke.utils.clamp(-o, 1 - o, st(l / 2) * l / .185),
                  g = o + (!1 === ae.inertia ? 0 : d),
                  v = ra(0, 1, n(g, he)),
                  m = Math.round(i + v * u),
                  {
                    onStart: p,
                    onInterrupt: h,
                    onComplete: f
                  } = ae;
                if (e <= _ && e >= i && m !== e) {
                  if (r && !r._initted && r.data <= st(m - e)) return;
                  !1 === ae.inertia && (d = v - o), t(m, {
                    duration: E(st(.185 * Math.max(st(g - c), st(v - c)) / l / .05 || 0)),
                    ease: ae.ease || "power3",
                    data: st(m - e),
                    onInterrupt: () => O.restart(!0) && h && h(he),
                    onComplete: () => {
                      he.update(), ye = xe(), N = P = a && !_e ? a.totalProgress() : he.progress, Q && Q(he), f && f(he)
                    }
                  }, e, d * u, m - e - d * u), p && p(he, t.tween)
                }
              }
            })).pause()), F && (Et[F] = he), W = he.trigger = qe(W || !0 !== X && X), D = W && W._gsap && W._gsap.stRevert, D && (D = D(he)), X = !0 === X ? W : qe(X), Ya(q) && (q = {
              targets: W,
              className: q
            }), X && (!1 === J || J === mt || (J = !(!J && X.parentNode && X.parentNode.style && "flex" === ft(X.parentNode).display) && vt), he.pin = X, s = Ke.core.getCache(X), s.spacer ? p = s.pinState : (se && (se = qe(se), se && !se.nodeType && (se = se.current || se.nativeElement), s.spacerIsNative = !!se, se && (s.spacerState = rs(se))), s.spacer = b = se || Qe.createElement("div"), b.classList.add("pin-spacer"), F && b.classList.add("pin-spacer-" + F), s.pinState = p = rs(X)), !1 !== e.force3D && Ke.set(X, {
              force3D: !0
            }), he.spacer = b = s.spacer, A = ft(X), C = A[J + ie.os2], y = Ke.getProperty(X), k = Ke.quickSetter(X, ie.a, ht), ts(X, b, A), f = rs(X)), ue) {
            v = et(ue) ? bt(ue, Tt) : Tt, d = Pt("scroller-start", F, ce, ie, v, 0), g = Pt("scroller-end", F, ce, ie, v, 0, d), w = d["offset" + ie.op.d2];
            let e = qe(Pe(ce, "content") || ce);
            c = this.markerStart = Pt("start", F, e, ie, v, w, 0, ne), l = this.markerEnd = Pt("end", F, e, ie, v, w, 0, ne), ne && (B = Ke.quickSetter([c, l], ie.a, ht)), ge || Ie.length && !0 === Pe(ce, "fixedMarkers") || ((e => {
              let a = ft(e).position;
              e.style.position = "absolute" === a || "fixed" === a ? a : "relative"
            })(de ? aa : ce), Ke.set([d, g], {
              force3D: !0
            }), S = Ke.quickSetter(d, ie.a, ht), I = Ke.quickSetter(g, ie.a, ht))
          }
          if (ne) {
            let e = ne.vars.onUpdate,
              a = ne.vars.onUpdateParams;
            ne.eventCallback("onUpdate", (() => {
              he.update(0, 0, 1), e && e.apply(ne, a || [])
            }))
          }
          if (he.previous = () => zt[zt.indexOf(he) - 1], he.next = () => zt[zt.indexOf(he) + 1], he.revert = (e, t) => {
              if (!t) return he.kill(!0);
              let s = !1 !== e || !he.enabled,
                n = _a;
              s !== he.isReverted && (s && (R = Math.max(xe(), he.scroll.rec || 0), Me = he.progress, G = a && a.progress()), c && [c, l, d, g].forEach((e => e.style.display = s ? "none" : "block")), s && (_a = he, he.update(s)), !X || te && he.isActive || (s ? ((e, a, t) => {
                ns(t);
                let s = e._gsap;
                if (s.spacerIsNative) ns(s.spacerState);
                else if (e._gsap.swappedIn) {
                  let t = a.parentNode;
                  t && (t.insertBefore(e, a), t.removeChild(a))
                }
                e._gsap.swappedIn = !1
              })(X, b, p) : ts(X, b, ft(X), j)), s || he.update(s), _a = n, he.isReverted = s)
            }, he.refresh = (s, n, v, w) => {
              if ((_a || !he.enabled) && !n) return;
              if (X && s && Ea) return void Ct(vs, "scrollEnd", qt);
              !Ia && fe && fe(he), _a = he, t.tween && !v && (t.tween.kill(), t.tween = 0), L && L.pause(), K && a && a.revert({
                kill: !1
              }).invalidate(), he.isReverted || he.revert(!0, !0), he._subPinOffset = !1;
              let k, C, S, I, A, N, P, z, E, B, D, V, q, F = be(),
                U = we(),
                $ = ne ? ne.duration() : Ja(ce, ie),
                Y = u <= .01,
                Z = 0,
                Q = w || 0,
                ee = et(v) ? v.end : e.end,
                ae = e.endTrigger || W,
                se = et(v) ? v.start : e.start || (0 !== e.start && W ? X ? "0 0" : "0 100%" : 0),
                re = he.pinnedContainer = e.pinnedContainer && qe(e.pinnedContainer, he),
                oe = W && Math.max(0, zt.indexOf(he)) || 0,
                le = oe;
              for (ue && et(v) && (V = Ke.getProperty(d, ie.p), q = Ke.getProperty(g, ie.p)); le--;) N = zt[le], N.end || N.refresh(0, 1) || (_a = he), P = N.pin, !P || P !== W && P !== X && P !== re || N.isReverted || (B || (B = []), B.unshift(N), N.revert(!0, !0)), N !== zt[le] && (oe--, le--);
              for (Za(se) && (se = se(he)), se = Ra(se, "start", he), i = is(se, W, F, ie, xe(), c, d, he, U, pe, ge, $, ne, he._startClamp && "_startClamp") || (X ? -.001 : 0), Za(ee) && (ee = ee(he)), Ya(ee) && !ee.indexOf("+=") && (~ee.indexOf(" ") ? ee = (Ya(se) ? se.split(" ")[0] : "") + ee : (Z = Nt(ee.substr(2), F), ee = Ya(se) ? se : (ne ? Ke.utils.mapRange(0, ne.duration(), ne.scrollTrigger.start, ne.scrollTrigger.end, i) : i) + Z, ae = W)), ee = Ra(ee, "end", he), _ = Math.max(i, is(ee || (ae ? "100% 0" : $), ae, F, ie, xe() + Z, l, g, he, U, pe, ge, $, ne, he._endClamp && "_endClamp")) || -.001, Z = 0, le = oe; le--;) N = zt[le], P = N.pin, P && N.start - N._pinPush <= i && !ne && N.end > 0 && (k = N.end - (he._startClamp ? Math.max(0, N.start) : N.start), (P === W && N.start - N._pinPush < i || P === re) && isNaN(se) && (Z += k * (1 - N.progress)), P === X && (Q += k));
              if (i += Z, _ += Z, he._startClamp && (he._startClamp += Z), he._endClamp && !Ia && (he._endClamp = _ || -.001, _ = Math.min(_, Ja(ce, ie))), u = _ - i || (i -= .01) && .001, Y && (Me = Ke.utils.clamp(0, 1, Ke.utils.normalize(i, _, R))), he._pinPush = Q, c && Z && (k = {}, k[ie.a] = "+=" + Z, re && (k[ie.p] = "-=" + xe()), Ke.set([c, l], k)), X) k = ft(X), I = ie === Ve, S = xe(), M = parseFloat(y(ie.a)) + Q, !$ && _ > 1 && (D = (de ? Qe.scrollingElement || ea : ce).style, D = {
                style: D,
                value: D["overflow" + ie.a.toUpperCase()]
              }, de && "scroll" !== ft(aa)["overflow" + ie.a.toUpperCase()] && (D.style["overflow" + ie.a.toUpperCase()] = "scroll")), ts(X, b, k), f = rs(X), C = wt(X, !0), z = ge && Fe(ce, I ? De : Ve)(), J && (j = [J + ie.os2, u + Q + ht], j.t = b, le = J === vt ? yt(X, ie) + u + Q : 0, le && j.push(ie.d, le + ht), ns(j), re && zt.forEach((e => {
                e.pin === re && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), ge && xe(R)), ge && (A = {
                top: C.top + (I ? S - i : z) + ht,
                left: C.left + (I ? z : S - i) + ht,
                boxSizing: "border-box",
                position: "fixed"
              }, A[it] = A["max" + ut] = Math.ceil(C.width) + ht, A[_t] = A["max" + pt] = Math.ceil(C.height) + ht, A[mt] = A[mt + dt] = A[mt + ct] = A[mt + gt] = A[mt + lt] = "0", A[vt] = k[vt], A[vt + dt] = k[vt + dt], A[vt + ct] = k[vt + ct], A[vt + gt] = k[vt + gt], A[vt + lt] = k[vt + lt], h = ((e, a, t) => {
                let s, n = [],
                  r = e.length,
                  o = t ? 8 : 0;
                for (; o < r; o += 2) s = e[o], n.push(s, s in a ? a[s] : e[o + 1]);
                return n.t = e.t, n
              })(p, A, te), Ia && xe(0)), a ? (E = a._initted, pa(1), a.render(a.duration(), !0, !0), x = y(ie.a) - M + u + Q, T = Math.abs(u - x) > 1, ge && T && h.splice(h.length - 2, 2), a.render(0, !0, !0), E || a.invalidate(!0), a.parent || a.totalTime(a.totalTime()), pa(0)) : x = u, D && (D.value ? D.style["overflow" + ie.a.toUpperCase()] = D.value : D.style.removeProperty("overflow-" + ie.a));
              else if (W && xe() && !ne)
                for (C = W.parentNode; C && C !== aa;) C._pinOffset && (i -= C._pinOffset, _ -= C._pinOffset), C = C.parentNode;
              B && B.forEach((e => e.revert(!1, !0))), he.start = i, he.end = _, r = o = Ia ? R : xe(), ne || Ia || (r < R && xe(R), he.scroll.rec = 0), he.revert(!1, !0), ke = La(), O && (ye = -1, O.restart(!0)), _a = 0, a && _e && (a._initted || G) && a.progress() !== G && a.progress(G || 0, !0).render(a.time(), !0, !0), (Y || Me !== he.progress || ne) && (a && !_e && a.totalProgress(ne && i < -.001 && !Me ? Ke.utils.normalize(i, _, 0) : Me, !0), he.progress = Y || (r - i) / u === Me ? 0 : Me), X && J && (b._pinOffset = Math.round(he.progress * x)), L && L.invalidate(), isNaN(V) || (V -= Ke.getProperty(d, ie.p), q -= Ke.getProperty(g, ie.p), ds(d, ie, V), ds(c, ie, V - (w || 0)), ds(g, ie, q), ds(l, ie, q - (w || 0))), Y && !Ia && he.update(), !H || Ia || m || (m = !0, H(he), m = !1)
            }, he.getVelocity = () => (xe() - o) / (La() - oa) * 1e3 || 0, he.endAnimation = () => {
              at(he.callbackAnimation), a && (L ? L.progress(1) : a.paused() ? _e || at(a, he.direction < 0, 1) : at(a, a.reversed()))
            }, he.labelToScroll = e => a && a.labels && (i || he.refresh() || i) + a.labels[e] / a.duration() * u || 0, he.getTrailing = e => {
              let a = zt.indexOf(he),
                t = he.direction > 0 ? zt.slice(0, a).reverse() : zt.slice(a + 1);
              return (Ya(e) ? t.filter((a => a.vars.preventOverlaps === e)) : t).filter((e => he.direction > 0 ? e.end <= i : e.start >= _))
            }, he.update = (e, s, n) => {
              if (ne && !n && !e) return;
              let c, l, g, v, m, p, w, y, j = !0 === Ia ? R : he.scroll(),
                A = e ? 0 : (j - i) / u,
                z = A < 0 ? 0 : A > 1 ? 1 : A || 0,
                E = he.progress;
              if (s && (o = r, r = ne ? xe() : j, ae && (P = N, N = a && !_e ? a.totalProgress() : z)), Y && !z && X && !_a && !Pa && Ea && i < j + (j - o) / (La() - oa) * Y && (z = 1e-4), z !== E && he.enabled) {
                if (c = he.isActive = !!z && z < 1, l = !!E && E < 1, p = c !== l, m = p || !!z != !!E, he.direction = z > E ? 1 : -1, he.progress = z, m && !_a && (g = z && !E ? 0 : 1 === z ? 1 : 1 === E ? 2 : 3, _e && (v = !p && "none" !== me[g + 1] && me[g + 1] || me[g], y = a && ("complete" === v || "reset" === v || v in a))), oe && (p || y) && (y || $ || !a) && (Za(oe) ? oe(he) : he.getTrailing(oe).forEach((e => e.endAnimation()))), _e || (!L || _a || Pa ? a && a.totalProgress(z, !(!_a || !ke && !e)) : (L._dp._time - L._start !== L._time && L.render(L._dp._time - L._start), L.resetTo ? L.resetTo("totalProgress", z, a._tTime / a._tDur) : (L.vars.totalProgress = z, L.invalidate().restart()))), X)
                  if (e && J && (b.style[J + ie.os2] = C), ge) {
                    if (m) {
                      if (w = !e && z > E && _ + 1 > j && j + 1 >= Ja(ce, ie), te)
                        if (e || !c && !w) cs(X, b);
                        else {
                          let e = wt(X, !0),
                            a = j - i;
                          cs(X, aa, e.top + (ie === Ve ? a : 0) + ht, e.left + (ie === Ve ? 0 : a) + ht)
                        } ns(c || w ? h : f), T && z < 1 && c || k(M + (1 !== z || w ? 0 : x))
                    }
                  } else k(Fa(M + x * z));
                ae && !t.tween && !_a && !Pa && O.restart(!0), q && (p || ee && z && (z < 1 || !Sa)) && na(q.targets).forEach((e => e.classList[c || ee ? "add" : "remove"](q.className))), V && !_e && !e && V(he), m && !_a ? (_e && (y && ("complete" === v ? a.pause().totalProgress(1) : "reset" === v ? a.restart(!0).pause() : "restart" === v ? a.restart(!0) : a[v]()), V && V(he)), !p && Sa || (U && p && tt(he, U), ve[g] && tt(he, ve[g]), ee && (1 === z ? he.kill(!1, 1) : ve[g] = 0), p || (g = 1 === z ? 1 : 3, ve[g] && tt(he, ve[g]))), re && !c && Math.abs(he.getVelocity()) > (Qa(re) ? re : 2500) && (at(he.callbackAnimation), L ? L.progress(1) : at(a, "reverse" === v ? 1 : !z, 1))) : _e && V && !_a && V(he)
              }
              if (I) {
                let e = ne ? j / ne.duration() * (ne._caScrollDist || 0) : j;
                S(e + (d._isFlipped ? 1 : 0)), I(e)
              }
              B && B(-j / ne.duration() * (ne._caScrollDist || 0))
            }, he.enable = (e, a) => {
              he.enabled || (he.enabled = !0, Ct(ce, "resize", Bt), de || Ct(ce, "scroll", Rt), fe && Ct(vs, "refreshInit", fe), !1 !== e && (he.progress = Me = 0, r = o = ye = xe()), !1 !== a && he.refresh())
            }, he.getTween = e => e && t ? t.tween : L, he.setPositions = (e, a, t, s) => {
              if (ne) {
                let t = ne.scrollTrigger,
                  s = ne.duration(),
                  n = t.end - t.start;
                e = t.start + n * e / s, a = t.start + n * a / s
              }
              he.refresh(!1, !1, {
                start: Ga(e, t && !!he._startClamp),
                end: Ga(a, t && !!he._endClamp)
              }, s), he.update()
            }, he.adjustPinSpacing = e => {
              if (j && e) {
                let a = j.indexOf(ie.d) + 1;
                j[a] = parseFloat(j[a]) + e + ht, j[1] = parseFloat(j[1]) + e + ht, ns(j)
              }
            }, he.disable = (e, a) => {
              if (he.enabled && (!1 !== e && he.revert(!0, !0), he.enabled = he.isActive = !1, a || L && L.pause(), R = 0, s && (s.uncache = 1), fe && jt(vs, "refreshInit", fe), O && (O.pause(), t.tween && t.tween.kill() && (t.tween = 0)), !de)) {
                let e = zt.length;
                for (; e--;)
                  if (zt[e].scroller === ce && zt[e] !== he) return;
                jt(ce, "resize", Bt), de || jt(ce, "scroll", Rt)
              }
            }, he.kill = (t, n) => {
              he.disable(t, n), L && !n && L.kill(), F && delete Et[F];
              let r = zt.indexOf(he);
              r >= 0 && zt.splice(r, 1), r === da && Zt > 0 && da--, r = 0, zt.forEach((e => e.scroller === he.scroller && (r = 1))), r || Ia || (he.scroll.rec = 0), a && (a.scrollTrigger = null, t && a.revert({
                kill: !1
              }), n || a.kill()), c && [c, l, d, g].forEach((e => e.parentNode && e.parentNode.removeChild(e))), Na === he && (Na = 0), X && (s && (s.uncache = 1), r = 0, zt.forEach((e => e.pin === X && r++)), r || (s.spacer = 0)), e.onKill && e.onKill(he)
            }, zt.push(he), he.enable(!1, !1), D && D(he), a && a.add && !u) {
            let e = he.update;
            he.update = () => {
              he.update = e, i || _ || he.refresh()
            }, Ke.delayedCall(.01, he.update), u = .01, i = _ = 0
          } else he.refresh();
          X && (() => {
            if (Aa !== Xt) {
              let e = Aa = Xt;
              requestAnimationFrame((() => e === Xt && Kt(!0)))
            }
          })()
        }
        static register(e) {
          return Ye || (Ke = e || Ha(), Ua() && window.document && vs.enable(), Ye = Oa), Ye
        }
        static defaults(e) {
          if (e)
            for (let a in e) It[a] = e[a];
          return It
        }
        static disable(e, a) {
          Oa = 0, zt.forEach((t => t[a ? "kill" : "disable"](e))), jt(Ze, "wheel", Rt), jt(Qe, "scroll", Rt), clearInterval(ia), jt(Qe, "touchcancel", qa), jt(aa, "touchstart", qa), xt(jt, Qe, "pointerdown,touchstart,mousedown", Da), xt(jt, Qe, "pointerup,touchend,mouseup", Va), sa.kill(), Ka(jt);
          for (let e = 0; e < Te.length; e += 3) St(jt, Te[e], Te[e + 1]), St(jt, Te[e], Te[e + 2])
        }
        static enable() {
          if (Ze = window, Qe = document, ea = Qe.documentElement, aa = Qe.body, Ke && (na = Ke.utils.toArray, ra = Ke.utils.clamp, Ma = Ke.core.context || qa, pa = Ke.core.suppressOverwrites || qa, xa = Ze.history.scrollRestoration || "auto", Yt = Ze.pageYOffset, Ke.core.globals("ScrollTrigger", vs), aa)) {
            Oa = 1, Ca = document.createElement("div"), Ca.style.height = "100vh", Ca.style.position = "absolute", Jt(), Ba(), Je.register(Ke), vs.isTouch = Je.isTouch, ka = Je.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ct(Ze, "wheel", Rt), ta = [Ze, Qe, ea, aa], Ke.matchMedia ? (vs.matchMedia = e => {
              let a, t = Ke.matchMedia();
              for (a in e) t.add(a, e[a]);
              return t
            }, Ke.addEventListener("matchMediaInit", (() => $t())), Ke.addEventListener("matchMediaRevert", (() => Ht())), Ke.addEventListener("matchMedia", (() => {
              Kt(0, 1), Ft("matchMedia")
            })), Ke.matchMedia("(orientation: portrait)", (() => (Gt(), Gt)))) : console.warn("Requires GSAP 3.11.0 or later"), Gt(), Ct(Qe, "scroll", Rt);
            let e, a, t = aa.style,
              s = t.borderTopStyle,
              n = Ke.core.Animation.prototype;
            for (n.revert || Object.defineProperty(n, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), t.borderTopStyle = "solid", e = wt(aa), Ve.m = Math.round(e.top + Ve.sc()) || 0, De.m = Math.round(e.left + De.sc()) || 0, s ? t.borderTopStyle = s : t.removeProperty("border-top-style"), ia = setInterval(Ot, 250), Ke.delayedCall(.5, (() => Pa = 0)), Ct(Qe, "touchcancel", qa), Ct(aa, "touchstart", qa), xt(Ct, Qe, "pointerdown,touchstart,mousedown", Da), xt(Ct, Qe, "pointerup,touchend,mouseup", Va), la = Ke.utils.checkPrefix("transform"), as.push(la), Ye = La(), sa = Ke.delayedCall(.2, Kt).pause(), ma = [Qe, "visibilitychange", () => {
                let e = Ze.innerWidth,
                  a = Ze.innerHeight;
                Qe.hidden ? (ga = e, va = a) : ga === e && va === a || Bt()
              }, Qe, "DOMContentLoaded", Kt, Ze, "load", Kt, Ze, "resize", Bt], Ka(Ct), zt.forEach((e => e.enable(0, 1))), a = 0; a < Te.length; a += 3) St(jt, Te[a], Te[a + 1]), St(jt, Te[a], Te[a + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (Sa = !!e.limitCallbacks);
          let a = e.syncInterval;
          a && clearInterval(ia) || (ia = a) && setInterval(Ot, a), "ignoreMobileResize" in e && (ba = 1 === vs.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ka(jt) || Ka(Ct, e.autoRefreshEvents || "none"), ha = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, a) {
          let t = qe(e),
            s = Te.indexOf(t),
            n = $a(t);
          ~s && Te.splice(s, n ? 6 : 2), a && (n ? Ie.unshift(Ze, a, aa, a, ea, a) : Ie.unshift(t, a))
        }
        static clearMatchMedia(e) {
          zt.forEach((a => a._ctx && a._ctx.query === e && a._ctx.kill(!0, !0)))
        }
        static isInViewport(e, a, t) {
          let s = (Ya(e) ? qe(e) : e).getBoundingClientRect(),
            n = s[t ? it : _t] * a || 0;
          return t ? s.right - n > 0 && s.left + n < Ze.innerWidth : s.bottom - n > 0 && s.top + n < Ze.innerHeight
        }
        static positionInViewport(e, a, t) {
          Ya(e) && (e = qe(e));
          let s = e.getBoundingClientRect(),
            n = s[t ? it : _t],
            r = null == a ? n / 2 : a in At ? At[a] * n : ~a.indexOf("%") ? parseFloat(a) * n / 100 : parseFloat(a) || 0;
          return t ? (s.left + r) / Ze.innerWidth : (s.top + r) / Ze.innerHeight
        }
        static killAll(e) {
          if (zt.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = Dt.killAll || [];
            Dt = {}, e.forEach((e => e()))
          }
        }
      }
      vs.version = "3.12.2", vs.saveStyles = e => e ? na(e).forEach((e => {
        if (e && e.style) {
          let a = Ut.indexOf(e);
          a >= 0 && Ut.splice(a, 5), Ut.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ke.core.getCache(e), Ma())
        }
      })) : Ut, vs.revert = (e, a) => $t(!e, a), vs.create = (e, a) => new vs(e, a), vs.refresh = e => e ? Bt() : (Ye || vs.register()) && Kt(!0), vs.update = e => ++Te.cache && Qt(!0 === e ? 2 : 0), vs.clearScrollMemory = Wt, vs.maxScroll = (e, a) => Ja(e, a ? De : Ve), vs.getScrollFunc = (e, a) => Fe(qe(e), a ? De : Ve), vs.getById = e => Et[e], vs.getAll = () => zt.filter((e => "ScrollSmoother" !== e.vars.id)), vs.isScrolling = () => !!Ea, vs.snapDirectional = Mt, vs.addEventListener = (e, a) => {
        let t = Dt[e] || (Dt[e] = []);
        ~t.indexOf(a) || t.push(a)
      }, vs.removeEventListener = (e, a) => {
        let t = Dt[e],
          s = t && t.indexOf(a);
        s >= 0 && t.splice(s, 1)
      }, vs.batch = (e, a) => {
        let t, s = [],
          n = {},
          r = a.interval || .016,
          o = a.batchMax || 1e9,
          i = (e, a) => {
            let t = [],
              s = [],
              n = Ke.delayedCall(r, (() => {
                a(t, s), t = [], s = []
              })).pause();
            return e => {
              t.length || n.restart(!0), t.push(e.trigger), s.push(e), o <= t.length && n.progress(1)
            }
          };
        for (t in a) n[t] = "on" === t.substr(0, 2) && Za(a[t]) && "onRefreshInit" !== t ? i(0, a[t]) : a[t];
        return Za(o) && (o = o(), Ct(vs, "refresh", (() => o = a.batchMax()))), na(e).forEach((e => {
          let a = {};
          for (t in n) a[t] = n[t];
          a.trigger = e, s.push(vs.create(a))
        })), s
      };
      let ms, us = (e, a, t, s) => (a > s ? e(s) : a < 0 && e(0), t > s ? (s - a) / (t - a) : t < 0 ? a / (a - t) : 1),
        ps = (e, a) => {
          !0 === a ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (Je.isTouch ? " pinch-zoom" : "") : "none", e === ea && ps(aa, a)
        },
        hs = {
          auto: 1,
          scroll: 1
        },
        fs = e => {
          let a, {
              event: t,
              target: s,
              axis: n
            } = e,
            r = (t.changedTouches ? t.changedTouches[0] : t).target,
            o = r._gsap || Ke.core.getCache(r),
            i = La();
          if (!o._isScrollT || i - o._isScrollT > 2e3) {
            for (; r && r !== aa && (r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth || !hs[(a = ft(r)).overflowY] && !hs[a.overflowX]);) r = r.parentNode;
            o._isScroll = r && r !== s && !$a(r) && (hs[(a = ft(r)).overflowY] || hs[a.overflowX]), o._isScrollT = i
          }(o._isScroll || "x" === n) && (t.stopPropagation(), t._gsapAllow = !0)
        },
        bs = (e, a, t, s) => Je.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: a,
          onWheel: s = s && fs,
          onPress: s,
          onDrag: s,
          onScroll: s,
          onEnable: () => t && Ct(Qe, Je.eventTypes[0], ys, !1, !0),
          onDisable: () => jt(Qe, Je.eventTypes[0], ys, !0)
        }),
        ws = /(input|label|select|textarea)/i,
        ys = e => {
          let a = ws.test(e.target.tagName);
          (a || ms) && (e._gsapAllow = !0, ms = a)
        };
      vs.sort = e => zt.sort(e || ((e, a) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (a.start + -1e6 * (a.vars.refreshPriority || 0)))), vs.observe = e => new Je(e), vs.normalizeScroll = e => {
        if (void 0 === e) return fa;
        if (!0 === e && fa) return fa.enable();
        if (!1 === e) return fa && fa.kill();
        let a = e instanceof Je ? e : (e => {
          et(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let a, t, s, n, r, o, i, _, {
              normalizeScrollX: c,
              momentum: l,
              allowNestedScroll: d,
              onRelease: g
            } = e,
            v = qe(e.target) || ea,
            m = Ke.core.globals().ScrollSmoother,
            u = m && m.get(),
            p = ka && (e.content && qe(e.content) || u && !1 !== e.content && !u.smooth() && u.content()),
            h = Fe(v, Ve),
            f = Fe(v, De),
            b = 1,
            w = (Je.isTouch && Ze.visualViewport ? Ze.visualViewport.scale * Ze.visualViewport.width : Ze.outerWidth) / Ze.innerWidth,
            y = 0,
            k = Za(l) ? () => l(a) : () => l || 2.8,
            M = bs(v, e.type, !0, d),
            x = () => n = !1,
            C = qa,
            j = qa,
            S = () => {
              t = Ja(v, Ve), j = ra(ka ? 1 : 0, t), c && (C = ra(0, Ja(v, De))), s = Xt
            },
            T = () => {
              p._gsap.y = Fa(parseFloat(p._gsap.y) + h.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
            },
            I = () => {
              S(), r.isActive() && r.vars.scrollY > t && (h() > t ? r.progress(1) && h(t) : r.resetTo("scrollY", t))
            };
          return p && Ke.set(p, {
            y: "+=0"
          }), e.ignoreCheck = e => ka && "touchmove" === e.type && (() => {
            if (n) {
              requestAnimationFrame(x);
              let e = Fa(a.deltaY / 2),
                t = j(h.v - e);
              if (p && t !== h.v + h.offset) {
                h.offset = t - h.v;
                let e = Fa((parseFloat(p && p._gsap.y) || 0) - h.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", p._gsap.y = e + "px", h.cacheID = Te.cache, Qt()
              }
              return !0
            }
            h.offset && T(), n = !0
          })() || b > 1.05 && "touchstart" !== e.type || a.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            n = !1;
            let e = b;
            b = Fa((Ze.visualViewport && Ze.visualViewport.scale || 1) / w), r.pause(), e !== b && ps(v, b > 1.01 || !c && "x"), o = f(), i = h(), S(), s = Xt
          }, e.onRelease = e.onGestureStart = (e, a) => {
            if (h.offset && T(), a) {
              Te.cache++;
              let a, s, n = k();
              c && (a = f(), s = a + .05 * n * -e.velocityX / .227, n *= us(f, a, s, Ja(v, De)), r.vars.scrollX = C(s)), a = h(), s = a + .05 * n * -e.velocityY / .227, n *= us(h, a, s, Ja(v, Ve)), r.vars.scrollY = j(s), r.invalidate().duration(n).play(.01), (ka && r.vars.scrollY >= t || a >= t - 1) && Ke.to({}, {
                onUpdate: I,
                duration: n
              })
            } else _.restart(!0);
            g && g(e)
          }, e.onWheel = () => {
            r._ts && r.pause(), La() - y > 1e3 && (s = 0, y = La())
          }, e.onChange = (e, a, t, n, r) => {
            if (Xt !== s && S(), a && c && f(C(n[2] === a ? o + (e.startX - e.x) : f() + a - n[1])), t) {
              h.offset && T();
              let a = r[2] === t,
                s = a ? i + e.startY - e.y : h() + t - r[1],
                n = j(s);
              a && s !== n && (i += n - s), h(n)
            }(t || a) && Qt()
          }, e.onEnable = () => {
            ps(v, !c && "x"), vs.addEventListener("refresh", I), Ct(Ze, "resize", I), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = f.smooth = !1), M.enable()
          }, e.onDisable = () => {
            ps(v, !0), jt(Ze, "resize", I), vs.removeEventListener("refresh", I), M.kill()
          }, e.lockAxis = !1 !== e.lockAxis, a = new Je(e), a.iOS = ka, ka && !h() && h(1), ka && Ke.ticker.add(qa), _ = a._dc, r = Ke.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: ls(h, h(), (() => r.pause()))
            },
            onUpdate: Qt,
            onComplete: _.vars.onComplete
          }), a
        })(e);
        return fa && fa.target === a.target && fa.kill(), $a(a.target) && (fa = a), a
      }, vs.core = {
        _getVelocityProp: Ue,
        _inputObserver: bs,
        _scrollers: Te,
        _proxies: Ie,
        bridge: {
          ss: () => {
            Ea || Ft("scrollStart"), Ea = La()
          },
          ref: () => _a
        }
      }, Ha() && Ke.registerPlugin(vs);
      let ks, Ms, xs, Cs, js, Ss, Ts, Is, As, Ns, Ps, Ls, zs, Es, Os, Rs, Gs = () => "undefined" != typeof window,
        Bs = () => ks || Gs() && (ks = window.gsap) && ks.registerPlugin && ks,
        Ds = e => Ns.maxScroll(e || xs);
      class Vs {
        constructor(e) {
          Ms || Vs.register(ks) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, Ps && Ps.kill(), Ps = this, Os(this);
          let a, t, s, n, r, o, i, _, c, l, d, g, v, m, u, {
              smoothTouch: p,
              onUpdate: h,
              onStop: f,
              smooth: b,
              onFocusIn: w,
              normalizeScroll: y,
              wholePixels: k
            } = e,
            M = this,
            x = e.effectsPrefix || "",
            C = Ns.getScrollFunc(xs),
            j = 1 === Ns.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8,
            S = j && +e.speed || 1,
            T = 0,
            I = 0,
            A = 1,
            N = zs(0),
            P = () => N.update(-T),
            L = {
              y: 0
            },
            z = () => a.style.overflow = "visible",
            E = e => {
              e.update();
              let a = e.getTween();
              a && (a.pause(), a._time = a._dur, a._tTime = a._tDur), m = !1, e.animation.progress(e.progress, !0)
            },
            O = (e, t) => {
              (e !== T && !l || t) && (k && (e = Math.round(e)), j && (a.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", a._gsap.y = e + "px"), I = e - T, T = e, Ns.isUpdating || Vs.isRefreshing || Ns.update())
            },
            R = function(e) {
              return arguments.length ? (e < 0 && (e = 0), L.y = -e, m = !0, l ? T = -e : O(-e), Ns.isRefreshing ? n.update() : C(e / S), this) : -T
            },
            G = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!Ns.isRefreshing) {
                let e = Ds(t) * S;
                e < -T && R(e), Rs.restart(!0)
              }
            })),
            B = e => {
              t.scrollTop = 0, e.target.contains && e.target.contains(t) || w && !1 === w(this, e) || (Ns.isInViewport(e.target) || e.target === u || this.scrollTo(e.target, !1, "center center"), u = e.target)
            },
            D = (e, a) => {
              if (e < a.start) return e;
              let t = isNaN(a.ratio) ? 1 : a.ratio,
                s = a.end - a.start,
                n = e - a.start,
                r = a.offset || 0,
                o = a.pins || [],
                i = o.offset || 0,
                _ = a._startClamp && a.start <= 0 || a.pins && a.pins.offset ? 0 : a._endClamp && a.end === Ds() ? 1 : .5;
              return o.forEach((a => {
                s -= a.distance, a.nativeStart <= e && (n -= a.distance)
              })), i && (n *= (s - i / t) / s), e + (n - r * _) / t - n
            },
            V = (e, a, t) => {
              t || (e.pins.length = e.pins.offset = 0);
              let s, n, r, o, i, _, c, l, d = e.pins,
                g = e.markers;
              for (c = 0; c < a.length; c++)
                if (l = a[c], e.trigger && l.trigger && e !== l && (l.trigger === e.trigger || l.pinnedContainer === e.trigger || e.trigger.contains(l.trigger)) && (i = l._startNative || l._startClamp || l.start, _ = l._endNative || l._endClamp || l.end, r = D(i, e), o = l.pin && _ > 0 ? r + (_ - i) : D(_, e), l.setPositions(r, o, !0, (l._startClamp ? Math.max(0, r) : r) - i), l.markerStart && g.push(ks.quickSetter([l.markerStart, l.markerEnd], "y", "px")), l.pin && l.end > 0 && !t)) {
                  if (s = l.end - l.start, n = e._startClamp && l.start < 0, n) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void V(e, a);
                    s += l.start, d.offset = -l.start
                  }
                  d.push({
                    start: l.start,
                    nativeStart: i,
                    end: l.end,
                    distance: s,
                    trig: l
                  }), e.setPositions(e.start, e.end + (n ? -l.start : s), !0)
                }
            },
            q = (e, a) => {
              r.forEach((t => V(t, e, a)))
            },
            F = () => {
              z(), requestAnimationFrame(z), r && (Ns.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), r.forEach((e => {
                let a = e._startClamp || e.start,
                  t = e.autoSpeed ? Math.min(Ds(), e.end) : a + Math.abs((e.end - a) / e.ratio),
                  s = t - e.end;
                if (a -= s / 2, t -= s / 2, a > t) {
                  let e = a;
                  a = t, t = e
                }
                e._startClamp && a < 0 ? (t = e.ratio < 0 ? Ds() : e.end / e.ratio, s = t - e.end, a = 0) : (e.ratio < 0 || e._endClamp && t >= Ds()) && (t = Ds(), a = e.ratio < 0 || e.ratio > 1 ? 0 : t - (t - e.start) / e.ratio, s = (t - a) * e.ratio - (e.end - e.start)), e.offset = s || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(a, t, !0)
              })), q(Ns.sort())), N.reset()
            },
            U = () => Ns.addEventListener("refresh", F),
            H = () => r && r.forEach((e => e.vars.onRefresh(e))),
            $ = () => (r && r.forEach((e => e.vars.onRefreshInit(e))), H),
            W = (e, a, t, s) => () => {
              let n = "function" == typeof a ? a(t, s) : a;
              n || 0 === n || (n = s.getAttribute("data-" + x + e) || ("speed" === e ? 1 : 0)), s.setAttribute("data-" + x + e, n);
              let r = "clamp(" === (n + "").substr(0, 6);
              return {
                clamp: r,
                value: r ? n.substr(6, n.length - 7) : n
              }
            },
            X = (e, a, s, n, o) => {
              o = ("function" == typeof o ? o(n, e) : o) || 0;
              let i, _, c, l, d, g, v = W("speed", a, n, e),
                m = W("lag", s, n, e),
                u = ks.getProperty(e, "y"),
                p = e._gsap,
                h = [],
                f = () => {
                  a = v(), s = parseFloat(m().value), i = parseFloat(a.value) || 1, c = "auto" === a.value, d = c || _ && _._startClamp && _.start <= 0 || h.offset ? 0 : _ && _._endClamp && _.end === Ds() ? 1 : .5, l && l.kill(), l = s && ks.to(e, {
                    ease: Ls,
                    overwrite: !1,
                    y: "+=0",
                    duration: s
                  }), _ && (_.ratio = i, _.autoSpeed = c)
                },
                b = () => {
                  p.y = u + "px", p.renderTransform(1), f()
                },
                w = [],
                y = 0,
                k = a => {
                  if (c) {
                    b();
                    let t = ((e, a) => {
                      let t, s, n = e.parentNode || js,
                        r = e.getBoundingClientRect(),
                        o = n.getBoundingClientRect(),
                        i = o.top - r.top,
                        _ = o.bottom - r.bottom,
                        c = (Math.abs(i) > Math.abs(_) ? i : _) / (1 - a),
                        l = -c * a;
                      return c > 0 && (t = o.height / (xs.innerHeight + o.height), s = .5 === t ? 2 * o.height : 2 * Math.min(o.height, Math.abs(-c * t / (2 * t - 1))) * (a || 1), l += a ? -s * a : -s / 2, c += s), {
                        change: c,
                        offset: l
                      }
                    })(e, As(0, 1, -a.start / (a.end - a.start)));
                    y = t.change, g = t.offset
                  } else g = h.offset || 0, y = (a.end - a.start - g) * (1 - i);
                  h.forEach((e => y -= e.distance * (1 - i))), a.offset = y || .001, a.vars.onUpdate(a), l && l.progress(1)
                };
              return f(), (1 !== i || c || l) && (_ = Ns.create({
                trigger: c ? e.parentNode : e,
                start: () => a.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o,
                end: () => a.value < 0 ? "max" : a.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o,
                scroller: t,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: b,
                onRefresh: k,
                onKill: e => {
                  let a = r.indexOf(e);
                  a >= 0 && r.splice(a, 1), b()
                },
                onUpdate: e => {
                  let a, t, s, n = u + y * (e.progress - d),
                    r = h.length,
                    o = 0;
                  if (e.offset) {
                    if (r) {
                      for (t = -T, s = e.end; r--;) {
                        if (a = h[r], a.trig.isActive || t >= a.start && t <= a.end) return void(l && (a.trig.progress += a.trig.direction < 0 ? .001 : -.001, a.trig.update(0, 0, 1), l.resetTo("y", parseFloat(p.y), -I, !0), A && l.progress(1)));
                        t > a.end && (o += a.distance), s -= a.distance
                      }
                      n = u + o + y * ((ks.utils.clamp(e.start, e.end, t) - e.start - o) / (s - e.start) - d)
                    }
                    w.length && !c && w.forEach((e => e(n - o))), i = n + g, n = Math.round(1e5 * i) / 1e5 || 0, l ? (l.resetTo("y", n, -I, !0), A && l.progress(1)) : (p.y = n + "px", p.renderTransform(1))
                  }
                  var i
                }
              }), k(_), ks.core.getCache(_.trigger).stRevert = $, _.startY = u, _.pins = h, _.markers = w, _.ratio = i, _.autoSpeed = c, e.style.willChange = "transform"), _
            };

          function J() {
            return s = a.clientHeight, a.style.overflow = "visible", Ss.style.height = xs.innerHeight + (s - xs.innerHeight) / S + "px", s - xs.innerHeight
          }
          U(), Ns.addEventListener("killAll", U), ks.delayedCall(.5, (() => A = 0)), this.scrollTop = R, this.scrollTo = (e, a, t) => {
            let s = ks.utils.clamp(0, Ds(), isNaN(e) ? this.offset(e, t) : +e);
            a ? l ? ks.to(this, {
              duration: j,
              scrollTop: s,
              overwrite: "auto",
              ease: Ls
            }) : C(s) : R(s)
          }, this.offset = (e, a) => {
            let t, s = (e = Is(e)[0]).style.cssText,
              n = Ns.create({
                trigger: e,
                start: a || "top top"
              });
            return r && (A ? Ns.refresh() : q([n], !0)), t = n.start / S, n.kill(!1), e.style.cssText = s, ks.core.getCache(e).uncache = 1, t
          }, this.content = function(e) {
            if (arguments.length) {
              let t = Is(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Ss.children[0];
              return t !== a && (a = t, c = a.getAttribute("style") || "", G && G.observe(a), ks.set(a, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), j || ks.set(a, {
                clearProps: "transform"
              })), this
            }
            return a
          }, this.wrapper = function(e) {
            return arguments.length ? (t = Is(e || "#smooth-wrapper")[0] || (e => {
              let a = Cs.querySelector(".ScrollSmoother-wrapper");
              return a || (a = Cs.createElement("div"), a.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(a, e), a.appendChild(e)), a
            })(a), _ = t.getAttribute("style") || "", J(), ks.set(t, j ? {
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
            (e = Is(e)).forEach((e => {
              let a = r.length;
              for (; a--;) r[a].trigger === e && r[a].kill()
            })), a = a || {};
            let t, s, {
                speed: n,
                lag: o,
                effectsPadding: i
              } = a,
              _ = [];
            for (t = 0; t < e.length; t++) s = X(e[t], n, o, t, i), s && _.push(s);
            return r.push(..._), _
          }, this.sections = (e, a) => {
            if (o || (o = []), !e) return o.slice(0);
            let t = Is(e).map((e => Ns.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: a => {
                e.style.opacity = a.isActive ? "1" : "0", e.style.pointerEvents = a.isActive ? "all" : "none"
              }
            })));
            return a && a.add ? o.push(...t) : o = t.slice(0), t
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => O(e || 0 === e ? e : T), this.getVelocity = () => N.getVelocity(-T), Ns.scrollerProxy(t, {
            scrollTop: R,
            scrollHeight: () => J() && Ss.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!j,
            content: a,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: xs.innerWidth,
              height: xs.innerHeight
            })
          }), Ns.defaults({
            scroller: t
          });
          let K = Ns.getAll().filter((e => e.scroller === xs || e.scroller === t));
          K.forEach((e => e.revert(!0, !0))), n = Ns.create({
            animation: ks.fromTo(L, {
              y: 0
            }, {
              y: () => -J(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = m;
                  e && (E(n), L.y = T), O(L.y, e), P(), h && !l && h(M)
                }
              }
            }),
            onRefreshInit: e => {
              if (Vs.isRefreshing) return;
              if (Vs.isRefreshing = !0, r) {
                let e = Ns.getAll().filter((e => !!e.pin));
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
              v = a && a._end > a._dp._time, g = T, L.y = 0, j && (1 === Ns.isTouch && (t.style.position = "absolute"), t.scrollTop = 0, 1 === Ns.isTouch && (t.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, J() / S), v || E(e), L.y = -C() * S, O(L.y), A || e.animation.progress(ks.utils.clamp(0, 1, g / S / -e.end)), v && (e.progress -= .001, e.update()), Vs.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: xs,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => J() / S,
            onScrubComplete: () => {
              N.reset(), f && f(this)
            },
            scrub: j || !0
          }), this.smooth = function(a) {
            return arguments.length && (j = a || 0, S = j && +e.speed || 1, n.scrubDuration(a)), n.getTween() ? n.getTween().duration() : 0
          }, n.getTween() && (n.getTween().vars.ease = e.ease || Ls), this.scrollTrigger = n, e.effects && this.effects(!0 === e.effects ? "[data-" + x + "speed], [data-" + x + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), K.forEach((e => {
            e.vars.scroller = t, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, a) {
            return arguments.length ? (!!l !== e && (e ? (n.getTween() && n.getTween().pause(), C(-T / S), N.reset(), d = Ns.normalizeScroll(), d && d.disable(), l = Ns.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => R(-T)
            }), l.nested = Es(js, "wheel,touch,scroll", !0, !1 !== a)) : (l.nested.kill(), l.kill(), l = 0, d && d.enable(), n.progress = (-T / S - n.start) / (n.end - n.start), E(n))), this) : !!l
          }, this.kill = this.revert = () => {
            this.paused(!1), E(n), n.kill();
            let e = (r || []).concat(o || []),
              s = e.length;
            for (; s--;) e[s].kill();
            Ns.scrollerProxy(t), Ns.removeEventListener("killAll", U), Ns.removeEventListener("refresh", F), t.style.cssText = _, a.style.cssText = c;
            let l = Ns.defaults({});
            l && l.scroller === t && Ns.defaults({
              scroller: xs
            }), this.normalizer && Ns.normalizeScroll(!1), clearInterval(i), Ps = null, G && G.disconnect(), Ss.style.removeProperty("height"), xs.removeEventListener("focusin", B)
          }, this.refresh = (e, a) => n.refresh(e, a), y && (this.normalizer = Ns.normalizeScroll(!0 === y ? {
            debounce: !0,
            content: !j && a
          } : y)), Ns.config(e), "overscrollBehavior" in xs.getComputedStyle(Ss) && ks.set([Ss, js], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in xs.getComputedStyle(Ss) && ks.set([Ss, js], {
            scrollBehavior: "auto"
          }), xs.addEventListener("focusin", B), i = setInterval(P, 250), "loading" === Cs.readyState || requestAnimationFrame((() => Ns.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return Ms || (ks = e || Bs(), Gs() && window.document && (xs = window, Cs = document, js = Cs.documentElement, Ss = Cs.body), ks && (Is = ks.utils.toArray, As = ks.utils.clamp, Ls = ks.parseEase("expo"), Os = ks.core.context || function() {}, Ns = ks.core.globals().ScrollTrigger, ks.core.globals("ScrollSmoother", Vs), Ss && Ns && (Rs = ks.delayedCall(.2, (() => Ns.isRefreshing || Ps && Ps.refresh())).pause(), Ts = [xs, Cs, js, Ss], zs = Ns.core._getVelocityProp, Es = Ns.core._inputObserver, Vs.refresh = Ns.refresh, Ms = 1))), Ms
        }
      }
      Vs.version = "3.12.2", Vs.create = e => Ps && e && Ps.content() === Is(e.content)[0] ? Ps : new Vs(e), Vs.get = () => Ps, Bs() && ks.registerPlugin(Vs);
      let qs, Fs, Us, Hs, $s, Ws, Xs, Js, Ks = () => "undefined" != typeof window,
        Ys = () => qs || Ks() && (qs = window.gsap) && qs.registerPlugin && qs,
        Zs = e => "string" == typeof e,
        Qs = e => "function" == typeof e,
        en = (e, a) => {
          let t = "x" === a ? "Width" : "Height",
            s = "scroll" + t,
            n = "client" + t;
          return e === Us || e === Hs || e === $s ? Math.max(Hs[s], $s[s]) - (Us["inner" + t] || Hs[n] || $s[n]) : e[s] - e["offset" + t]
        },
        an = (e, a) => {
          let t = "scroll" + ("x" === a ? "Left" : "Top");
          return e === Us && (null != e.pageXOffset ? t = "page" + a.toUpperCase() + "Offset" : e = null != Hs[t] ? Hs : $s), () => e[t]
        },
        tn = (e, a) => {
          if (!(e = Ws(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let t = e.getBoundingClientRect(),
            s = !a || a === Us || a === $s,
            n = s ? {
              top: Hs.clientTop - (Us.pageYOffset || Hs.scrollTop || $s.scrollTop || 0),
              left: Hs.clientLeft - (Us.pageXOffset || Hs.scrollLeft || $s.scrollLeft || 0)
            } : a.getBoundingClientRect(),
            r = {
              x: t.left - n.left,
              y: t.top - n.top
            };
          return !s && a && (r.x += an(a, "x")(), r.y += an(a, "y")()), r
        },
        sn = (e, a, t, s, n) => isNaN(e) || "object" == typeof e ? Zs(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + s - n : "max" === e ? en(a, t) - n : Math.min(en(a, t), tn(e, a)[t] - n) : parseFloat(e) - n,
        nn = () => {
          qs = Ys(), Ks() && qs && "undefined" != typeof document && document.body && (Us = window, $s = document.body, Hs = document.documentElement, Ws = qs.utils.toArray, qs.config({
            autoKillThreshold: 7
          }), Xs = qs.config(), Fs = 1)
        };
      const rn = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          qs = e, nn()
        },
        init(e, a, t, s, n) {
          Fs || nn();
          let r = this,
            o = qs.getProperty(e, "scrollSnapType");
          r.isWin = e === Us, r.target = e, r.tween = t, a = ((e, a, t, s) => {
            if (Qs(e) && (e = e(a, t, s)), "object" != typeof e) return Zs(e) && "max" !== e && "=" !== e.charAt(1) ? {
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
              for (n in e) r[n] = "onAutoKill" !== n && Qs(e[n]) ? e[n](a, t, s) : e[n];
              return r
            }
          })(a, s, e, n), r.vars = a, r.autoKill = !!a.autoKill, r.getX = an(e, "x"), r.getY = an(e, "y"), r.x = r.xPrev = r.getX(), r.y = r.yPrev = r.getY(), Js || (Js = qs.core.globals().ScrollTrigger), "smooth" === qs.getProperty(e, "scrollBehavior") && qs.set(e, {
            scrollBehavior: "auto"
          }), o && "none" !== o && (r.snap = 1, r.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != a.x ? (r.add(r, "x", r.x, sn(a.x, e, "x", r.x, a.offsetX || 0), s, n), r._props.push("scrollTo_x")) : r.skipX = 1, null != a.y ? (r.add(r, "y", r.y, sn(a.y, e, "y", r.y, a.offsetY || 0), s, n), r._props.push("scrollTo_y")) : r.skipY = 1
        },
        render(e, a) {
          let t, s, n, r, o, i = a._pt,
            {
              target: _,
              tween: c,
              autoKill: l,
              xPrev: d,
              yPrev: g,
              isWin: v,
              snap: m,
              snapInline: u
            } = a;
          for (; i;) i.r(e, i.d), i = i._next;
          t = v || !a.skipX ? a.getX() : d, s = v || !a.skipY ? a.getY() : g, n = s - g, r = t - d, o = Xs.autoKillThreshold, a.x < 0 && (a.x = 0), a.y < 0 && (a.y = 0), l && (!a.skipX && (r > o || r < -o) && t < en(_, "x") && (a.skipX = 1), !a.skipY && (n > o || n < -o) && s < en(_, "y") && (a.skipY = 1), a.skipX && a.skipY && (c.kill(), a.vars.onAutoKill && a.vars.onAutoKill.apply(c, a.vars.onAutoKillParams || []))), v ? Us.scrollTo(a.skipX ? t : a.x, a.skipY ? s : a.y) : (a.skipY || (_.scrollTop = a.y), a.skipX || (_.scrollLeft = a.x)), !m || 1 !== e && 0 !== e || (s = _.scrollTop, t = _.scrollLeft, u ? _.style.scrollSnapType = u : _.style.removeProperty("scroll-snap-type"), _.scrollTop = s + 1, _.scrollLeft = t + 1, _.scrollTop = s, _.scrollLeft = t), a.xPrev = a.x, a.yPrev = a.y, Js && Js.update()
        },
        kill(e) {
          let a = "scrollTo" === e;
          (a || "scrollTo_x" === e) && (this.skipX = 1), (a || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      rn.max = en, rn.getOffset = tn, rn.buildGetter = an, Ys() && qs.registerPlugin(rn);
      const on = {
          pillBtn: "rockstargames-modules-core-headerbee05d76935ef42459a883964c362f71",
          selected: "rockstargames-modules-core-headerae3d42001bedd7798013fcf346da8a64",
          globalNavigationRoot: "rockstargames-modules-core-headeraeb5bb58a8caf443248f047a5d82d7e4",
          large: "rockstargames-modules-core-headercffd2f2ba9bbd7fb2b17d13bbcbc1aaa",
          badge: "rockstargames-modules-core-headerda7b554019cae4c1fbb4e03fab6d1615",
          globalNavigationSpacer: "rockstargames-modules-core-headerddb99137eb43e09acb45ae1fbe7b2435",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headerb57964f50ac7a60e7e71b877451e785f"
        },
        _n = {
          site: "beaterator",
          appearancePaths: {
            [Z.C.www]: ["/games/beaterator/*"]
          },
          brand: "beaterator",
          links: []
        };
      let cn, ln, dn, gn;
      cn = "/bully/*", ln = "/bully", dn = "/bully/?section=order", gn = Z.C.www;
      const vn = {
          site: "bully",
          appearancePaths: {
            [Z.C.www]: ["/bully/*"],
            [Z.C.socialClub]: ["/games/bully/*"]
          },
          brand: "bully",
          links: [{
            text: Q.nav_bully_game_overview.defaultMessage,
            intlMessage: Q.nav_bully_game_overview,
            type: "nav-internal",
            location: {
              domain: Z.C.www,
              path: "/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: Q.nav_bully_accomplishments.defaultMessage,
            intlMessage: Q.nav_bully_accomplishments,
            type: "nav-internal",
            location: {
              domain: Z.C.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: Q.nav_bully_support.defaultMessage,
            intlMessage: Q.nav_bully_support,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: Z.C.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: Q.nav_bully_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_bully_cta_buy_now,
            location: {
              domain: gn,
              path: "/bully/?section=order"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        },
        mn = {
          site: "careers",
          appearancePaths: {
            [Z.C.www]: ["/careers/*"]
          },
          brand: "careers",
          hideSearch: !0,
          links: [{
            text: Q.nav_careers_home.defaultMessage,
            intlMessage: Q.nav_careers_home,
            type: "nav-internal",
            location: {
              domain: Z.C.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: Q.nav_careers_openings.defaultMessage,
            intlMessage: Q.nav_careers_openings,
            type: "nav-internal",
            location: {
              domain: Z.C.www,
              path: "/careers/openings"
            },
            dataTestId: "careersOpeningsLink"
          }, {
            text: Q.nav_careers_contact_us.defaultMessage,
            intlMessage: Q.nav_careers_contact_us,
            type: "nav-no-link",
            dataTestId: "careersContactUsLink"
          }, {
            text: Q.nav_careers_careers_on_linkedin.defaultMessage,
            intlMessage: Q.nav_careers_careers_on_linkedin,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com/company/rockstar-games/",
              path: "/company/rockstar-games/"
            },
            dataTestId: "careersLinkedInLink"
          }]
        },
        un = {
          site: "gta",
          appearancePaths: {
            [Z.C.www]: ["/games/gta/*"]
          },
          brand: "gta",
          links: []
        },
        pn = {
          site: "gta2",
          appearancePaths: {
            [Z.C.www]: ["/games/gta2/*"]
          },
          brand: "gta2",
          links: []
        },
        hn = {
          site: "grandtheftauto3",
          appearancePaths: {
            [Z.C.www]: ["/games/grandtheftauto3/*"]
          },
          brand: "gta3",
          links: [],
          cta: {
            text: Q.nav_gta3_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_gta3_cta_buy_now,
            variant: "highlight",
            dataTestId: "gta3BuyNowCta",
            target: "_blank",
            location: {
              domain: Z.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        fn = {
          site: "gta-iv",
          appearancePaths: {
            [Z.C.www]: ["/games/IV/*"],
            [Z.C.socialClub]: ["/games/gtaiv/*"]
          },
          brand: "gta4",
          links: [{
            text: Q.nav_gtaiv_overview.defaultMessage,
            intlMessage: Q.nav_gtaiv_overview,
            type: "nav-internal",
            location: {
              domain: Z.C.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: Q.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: Q.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: Z.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: Q.nav_gtaiv_support.defaultMessage,
            intlMessage: Q.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: Z.C.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: Q.nav_gtaiv_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_gtaiv_cta_buy_now,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: Z.C.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            dataTestId: "gtaivPurchaseLink"
          }
        },
        bn = {
          appearancePaths: {
            [Z.C.www]: ["/gta-v/*"],
            [Z.C.socialClub]: ["/games/gtav/*"]
          },
          brand: "gta5",
          cta: {
            dataTestId: "gtavPurchaseLink",
            ga: "cta_buy",
            intlMessage: Q.nav_gtav_cta_buy_now,
            location: {
              domain: Z.C.www,
              path: "/gta-v?info=order"
            },
            text: Q.nav_gtav_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtavLink",
            intlMessage: Q.nav_gtav_overview,
            location: {
              domain: Z.C.www,
              path: "/gta-v"
            },
            text: Q.nav_gtav_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoLink",
              intlMessage: Q.nav_gtav_discover,
              location: {
                domain: Z.C.www,
                path: "/gta-online"
              },
              text: Q.nav_gtav_discover.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_career_progress,
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: Z.C.www,
                path: "/gta-online/career-progress"
              },
              text: Q.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoButton",
              intlMessage: Q.nav_gtav_my_character,
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: Q.nav_gtav_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              intlMessage: Q.nav_gtav_jobs,
              location: {
                domain: Z.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: Q.nav_gtav_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              intlMessage: Q.nav_gtav_guides,
              location: {
                domain: Z.C.www,
                path: "/gta-online/guides"
              },
              text: Q.nav_gtav_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlatesLink",
              intlMessage: Q.nav_gtav_licence_plate_creator,
              location: {
                domain: Z.C.www,
                path: "/gta-online/license-plates"
              },
              text: Q.nav_gtav_licence_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            intlMessage: Q.nav_gtav_gta_online,
            text: Q.nav_gtav_gta_online.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtavSpOverviewButton",
              intlMessage: Q.nav_gtav_stats,
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: Q.nav_gtav_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpMissionsButton",
              intlMessage: Q.nav_gtav_missions,
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: Q.nav_gtav_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpChecklistButton",
              intlMessage: Q.nav_gtav_checklist,
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: Q.nav_gtav_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpAccomplishmentsButton",
              intlMessage: Q.nav_gtav_accomplishments,
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: Q.nav_gtav_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavSpLink",
            intlMessage: Q.nav_gtav_story,
            text: Q.nav_gtav_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtav+Link",
            intlMessage: Q.nav_gtav_gta_plus,
            location: {
              domain: Z.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: Q.nav_gtav_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              children: [{
                dataTestId: "gtavAllJobsButtons",
                intlMessage: Q.nav_gtav_jobs_browse_all,
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                },
                text: Q.nav_gtav_jobs_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCommunitySeriesLink",
                intlMessage: Q.nav_gtav_community_series,
                location: {
                  domain: Z.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                text: Q.nav_gtav_community_series.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyJobsButtons",
                intlMessage: Q.nav_gtav_my_jobs,
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                },
                text: Q.nav_gtav_my_jobs.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavPlaylistsButton",
                intlMessage: Q.nav_gtav_playlists,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/gtav/playlists"
                },
                text: Q.nav_gtav_playlists.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavJobsDropdown",
              intlMessage: Q.nav_gtav_jobs,
              text: Q.nav_gtav_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              children: [{
                dataTestId: "gtavBrowseCrewsButton",
                intlMessage: Q.nav_gtav_crews_browse_all,
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/crews"
                },
                text: Q.nav_gtav_crews_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyCrewsButton",
                intlMessage: Q.nav_gtav_my_crews,
                location: {
                  domain: Z.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0,
                text: Q.nav_gtav_my_crews.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateCrewButton",
                intlMessage: Q.nav_gtav_create_crew,
                location: {
                  domain: Z.C.socialClub,
                  path: "/crews/create"
                },
                text: Q.nav_gtav_create_crew.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateEmblemButton",
                intlMessage: Q.nav_gtav_emblem_editor,
                location: {
                  domain: Z.C.socialClub,
                  path: "/emblems"
                },
                text: Q.nav_gtav_emblem_editor.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavCrewsDropdown",
              intlMessage: Q.nav_gtav_crews,
              text: Q.nav_gtav_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaViewPhotosButton",
              intlMessage: Q.nav_gtav_photos,
              location: {
                domain: Z.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: Q.nav_gtav_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaViewVideosButton",
              intlMessage: Q.nav_gtav_videos,
              location: {
                domain: Z.C.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              },
              text: Q.nav_gtav_videos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              intlMessage: Q.nav_rsg_community_guidelines,
              location: {
                domain: Z.C.www,
                path: "/community-guidelines"
              },
              text: Q.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavCommunityDropdown",
            intlMessage: Q.nav_gtav_community,
            text: Q.nav_gtav_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaSupportLink",
            intlMessage: Q.nav_gtav_support,
            location: {
              domain: Z.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: Q.nav_gtav_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-v"
        },
        wn = {
          site: "grandtheftauto-gba",
          appearancePaths: {
            [Z.C.www]: ["/games/grandtheftauto-gba/*"]
          },
          brand: "gtaadvance",
          links: []
        },
        yn = {
          site: "chinatownwars",
          appearancePaths: {
            [Z.C.www]: ["/games/chinatownwars/*"]
          },
          brand: "gtactw",
          links: []
        },
        kn = {
          site: "episodesfromlibertycity",
          appearancePaths: {
            [Z.C.www]: ["/games/episodesfromlibertycity/*"]
          },
          brand: "gtaiveflc",
          links: [{
            text: Q.nav_gtaiv_overview.defaultMessage,
            intlMessage: Q.nav_gtaiv_overview,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: Z.C.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: Q.nav_gtaiv_accomplishments.defaultMessage,
            intlMessage: Q.nav_gtaiv_accomplishments,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: Z.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: Q.nav_gtaiv_support.defaultMessage,
            intlMessage: Q.nav_gtaiv_support,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: Z.C.support,
              path: "/categories/115001614848"
            }
          }]
        },
        Mn = {
          site: "libertycitystories",
          appearancePaths: {
            [Z.C.www]: ["/games/libertycitystories/*"]
          },
          brand: "gtalcs",
          links: []
        },
        xn = {
          site: "gtalondon",
          appearancePaths: {
            [Z.C.www]: ["/games/gtalondon/*"]
          },
          brand: "gtalondon",
          links: []
        },
        Cn = {
          appearancePaths: {
            [Z.C.www]: ["/gta-online/*"],
            [Z.C.socialClub]: ["/member/:username/crews/*", "/crews/*", "/crew/*", "/jobs/*", "*/jobs/*", "/videos/*{titleOverride}", "/photos/*{titleOverride}", "/emblems/*", "/games/gtav/:platform/career/overview/gtaonline/*"]
          },
          brand: "gtaonline",
          cta: {
            dataTestId: "gtaoPurchaseLink",
            ga: "cta_buy",
            intlMessage: Q.nav_gtao_cta_buy_now,
            location: {
              domain: Z.C.www,
              path: "/gta-online?info=order"
            },
            text: Q.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            intlMessage: Q.nav_gtao_overview,
            location: {
              domain: Z.C.www,
              path: "/gta-v"
            },
            text: Q.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              intlMessage: Q.nav_gtao_discover,
              location: {
                domain: Z.C.www,
                path: "/gta-online"
              },
              text: Q.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_career_progress,
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: Z.C.www,
                path: "/gta-online/career-progress"
              },
              text: Q.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_my_character,
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: Q.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_jobs,
              dataTestId: "gtaoJobsLink",
              location: {
                domain: Z.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: Q.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              intlMessage: Q.nav_gtao_guides,
              location: {
                domain: Z.C.www,
                path: "/gta-online/guides"
              },
              text: Q.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              intlMessage: Q.nav_gtao_license_plate_creator,
              location: {
                domain: Z.C.www,
                path: "/gta-online/license-plates"
              },
              text: Q.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            intlMessage: Q.nav_gtao_gtao,
            text: Q.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              intlMessage: Q.nav_gtao_stats,
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: Q.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_missions,
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: Q.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_checklist,
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: Q.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_accomplishments,
              dataTestId: "gtaoSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: Q.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            intlMessage: Q.nav_gtao_story,
            text: Q.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            intlMessage: Q.nav_gtao_gta_plus,
            location: {
              domain: Z.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: Q.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                intlMessage: Q.nav_gtao_jobs_browse_all,
                text: Q.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: Z.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                intlMessage: Q.nav_gtao_community_series,
                text: Q.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: Z.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                intlMessage: Q.nav_gtao_my_jobs,
                text: Q.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                requiresAuth: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                intlMessage: Q.nav_gtao_jobs_playlists,
                text: Q.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              intlMessage: Q.nav_gtao_jobs,
              text: Q.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                intlMessage: Q.nav_gtao_browse_crews,
                text: Q.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: Z.C.socialClub,
                  path: "/crews"
                }
              }, {
                intlMessage: Q.nav_gtao_my_crews,
                text: Q.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: Z.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                intlMessage: Q.nav_gtao_crews_create,
                text: Q.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: Z.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                intlMessage: Q.nav_gtao_emblem_editor,
                text: Q.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: Z.C.socialClub,
                  path: "/emblems"
                }
              }],
              intlMessage: Q.nav_gtao_crews,
              text: Q.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoPhotosButton",
              intlMessage: Q.nav_gtao_photos,
              location: {
                domain: Z.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: Q.nav_gtao_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoVideosButton",
              intlMessage: Q.nav_gtao_videos,
              location: {
                domain: Z.C.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              },
              text: Q.nav_gtao_videos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              intlMessage: Q.nav_rsg_community_guidelines,
              location: {
                domain: Z.C.www,
                path: "/community-guidelines"
              },
              text: Q.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            intlMessage: Q.nav_gtao_community,
            text: Q.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            intlMessage: Q.nav_gtao_support,
            location: {
              domain: Z.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: Q.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-online"
        },
        jn = {
          appearancePaths: {
            [Z.C.www]: ["/gta-plus/*"],
            [Z.C.socialClub]: ["*/crews/*", "*/jobs/*", "/emblems/*"]
          },
          brand: "gtaplus",
          cta: {
            dataTestId: "gtaoPurchaseLink",
            ga: "cta_buy",
            intlMessage: Q.nav_gtao_cta_buy_now,
            location: {
              domain: Z.C.www,
              path: "/gta-online?info=order"
            },
            text: Q.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            intlMessage: Q.nav_gtao_overview,
            location: {
              domain: Z.C.www,
              path: "/gta-v"
            },
            text: Q.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              intlMessage: Q.nav_gtao_discover,
              location: {
                domain: Z.C.www,
                path: "/gta-online"
              },
              text: Q.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_career_progress,
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: Z.C.www,
                path: "/gta-online/career-progress"
              },
              text: Q.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_my_character,
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: Q.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_jobs,
              dataTestId: "gtaoJobsLink",
              location: {
                domain: Z.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: Q.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              intlMessage: Q.nav_gtao_guides,
              location: {
                domain: Z.C.www,
                path: "/gta-online/guides"
              },
              text: Q.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              intlMessage: Q.nav_gtao_license_plate_creator,
              location: {
                domain: Z.C.www,
                path: "/gta-online/license-plates"
              },
              text: Q.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            intlMessage: Q.nav_gtao_gtao,
            text: Q.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              intlMessage: Q.nav_gtao_stats,
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: Q.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_missions,
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: Q.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_checklist,
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: Q.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              intlMessage: Q.nav_gtao_accomplishments,
              dataTestId: "gtaoAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: Q.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            intlMessage: Q.nav_gtao_story,
            text: Q.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            intlMessage: Q.nav_gtao_gta_plus,
            location: {
              domain: Z.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: Q.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                intlMessage: Q.nav_gtao_jobs_browse_all,
                text: Q.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: Z.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                intlMessage: Q.nav_gtao_community_series,
                text: Q.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: Z.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                intlMessage: Q.nav_gtao_my_jobs,
                text: Q.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: Z.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                intlMessage: Q.nav_gtao_jobs_playlists,
                text: Q.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              intlMessage: Q.nav_gtao_jobs,
              text: Q.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                intlMessage: Q.nav_gtao_browse_crews,
                text: Q.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: Z.C.socialClub,
                  path: "/crews"
                }
              }, {
                intlMessage: Q.nav_gtao_my_crews,
                text: Q.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: Z.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                intlMessage: Q.nav_gtao_crews_create,
                text: Q.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: Z.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                intlMessage: Q.nav_gtao_emblem_editor,
                text: Q.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: Z.C.socialClub,
                  path: "/emblems/new"
                }
              }],
              intlMessage: Q.nav_gtao_crews,
              text: Q.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoPhotosButton",
              intlMessage: Q.nav_gtao_photos,
              location: {
                domain: Z.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: Q.nav_gtao_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoVideosButton",
              intlMessage: Q.nav_gtao_videos,
              location: {
                domain: Z.C.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              },
              text: Q.nav_gtao_videos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              intlMessage: Q.nav_rsg_community_guidelines,
              location: {
                domain: Z.C.www,
                path: "/community-guidelines"
              },
              text: Q.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            intlMessage: Q.nav_gtao_community,
            text: Q.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            intlMessage: Q.nav_gtao_support,
            location: {
              domain: Z.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: Q.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-plus"
        },
        Sn = {
          site: "sanandreas",
          appearancePaths: {
            [Z.C.www]: ["/games/sanandreas/*"]
          },
          brand: "gtasanandreas",
          links: [],
          cta: {
            text: Q.nav_gtasanandreas_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_gtasanandreas_cta_buy_now,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: Z.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            dataTestId: "gtaSanAndreasPurchaseLink"
          }
        },
        Tn = {
          site: "gta-trilogy",
          appearancePaths: {
            [Z.C.www]: ["/GTATrilogy/*"],
            [Z.C.socialClub]: ["/games/gtasa/*", "/games/gtavc/*", "/games/gta3/*"]
          },
          brand: "gtatrilogy",
          links: [{
            text: Q.nav_gta_trilogy_overview.defaultMessage,
            intlMessage: Q.nav_gta_trilogy_overview,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: Z.C.www,
              path: "/GTATrilogy"
            }
          }, {
            text: Q.nav_gta_trilogy_accomplishments.defaultMessage,
            intlMessage: Q.nav_gta_trilogy_accomplishments,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: Q.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: Q.nav_gta_trilogy_gtasa,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: Q.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: Q.nav_gta_trilogy_gtavc,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: Z.C.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: Q.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: Q.nav_gta_trilogy_gta3,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: Z.C.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: Q.nav_gta_trilogy_support.defaultMessage,
            intlMessage: Q.nav_gta_trilogy_support,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: Q.nav_gta_trilogy_gtasa.defaultMessage,
              intlMessage: Q.nav_gta_trilogy_gtasa,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: Z.C.support,
                path: "/categories/115001620287"
              }
            }, {
              text: Q.nav_gta_trilogy_gtavc.defaultMessage,
              intlMessage: Q.nav_gta_trilogy_gtavc,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: Z.C.support,
                path: "/categories/115001619868"
              }
            }, {
              text: Q.nav_gta_trilogy_gta3.defaultMessage,
              intlMessage: Q.nav_gta_trilogy_gta3,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: Z.C.support,
                path: "/categories/115001619948"
              }
            }]
          }],
          cta: {
            text: Q.nav_gta_trilogy_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_gta_trilogy_cta_buy_now,
            dataTestId: "gtaTrilogyPurchaseLink",
            target: "_blank",
            location: {
              domain: Z.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        In = {
          site: "vicecity",
          appearancePaths: {
            [Z.C.www]: ["/games/vicecity/*"]
          },
          brand: "gtavc",
          links: [],
          cta: {
            text: Q.nav_gtavc_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_gtavc_cta_buy_now,
            variant: "highlight",
            dataTestId: "gtaVcBuyNowLink",
            target: "_blank",
            location: {
              domain: Z.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        },
        An = {
          site: "vicecitystories",
          appearancePaths: {
            [Z.C.www]: ["/games/vicecitystories/*"]
          },
          brand: "gtavcs",
          links: []
        },
        Nn = {
          site: "la-noire",
          appearancePaths: {
            [Z.C.www]: ["/lanoire/*", "/games/lanoire/*"],
            [Z.C.socialClub]: ["/games/lanvr/*", "/games/lan/*"]
          },
          brand: "lanoire",
          links: [{
            text: Q.nav_lanoire_overview.defaultMessage,
            intlMessage: Q.nav_lanoire_overview,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: Z.C.www,
              path: "/games/lanoire"
            }
          }, {
            text: Q.nav_lanoire_progress.defaultMessage,
            intlMessage: Q.nav_lanoire_progress,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: Q.nav_lanoire_pc_console.defaultMessage,
              intlMessage: Q.nav_lanoire_pc_console,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: Q.nav_lanoire_case_tracker.defaultMessage,
                intlMessage: Q.nav_lanoire_case_tracker,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: Q.nav_lanoire_checklist.defaultMessage,
                intlMessage: Q.nav_lanoire_checklist,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: Q.nav_lanoire_stats.defaultMessage,
                intlMessage: Q.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: Q.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: Q.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: Q.nav_lanoire_badge_pursuit.defaultMessage,
                intlMessage: Q.nav_lanoire_badge_pursuit,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: Q.nav_lanoire_vr_case_files.defaultMessage,
              intlMessage: Q.nav_lanoire_vr_case_files,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: Q.nav_lanoire_stats.defaultMessage,
                intlMessage: Q.nav_lanoire_stats,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: Q.nav_lanoire_accomplishments.defaultMessage,
                intlMessage: Q.nav_lanoire_accomplishments,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: Q.nav_lanoire_support.defaultMessage,
            intlMessage: Q.nav_lanoire_support,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: Z.C.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: Q.nav_lanoire_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_lanoire_cta_buy_now,
            dataTestId: "lanoirePurchaseLink",
            location: {
              domain: Z.C.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy"
          }
        },
        Pn = {
          site: "manhunt",
          appearancePaths: {
            [Z.C.www]: ["/games/manhunt/*"]
          },
          brand: "manhunt",
          links: []
        },
        Ln = {
          site: "manhunt2",
          appearancePaths: {
            [Z.C.www]: ["/games/manhunt2/*"]
          },
          brand: "manhunt2",
          links: []
        },
        zn = {
          site: "maxpayne",
          appearancePaths: {
            [Z.C.www]: ["/games/maxpayne/*"]
          },
          brand: "maxpayne",
          links: []
        },
        En = {
          site: "maxpayne2",
          appearancePaths: {
            [Z.C.www]: ["/games/maxpayne2/*"]
          },
          brand: "maxpayne2",
          links: []
        },
        On = {
          site: "maxpayne3",
          appearancePaths: {
            [Z.C.www]: ["/games/maxpayne3/*"],
            [Z.C.socialClub]: ["/games/maxpayne3/*"]
          },
          brand: "maxpayne3",
          links: [{
            text: Q.nav_mp3_overview.defaultMessage,
            intlMessage: Q.nav_mp3_overview,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: Z.C.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: Q.nav_mp3_progress.defaultMessage,
            intlMessage: Q.nav_mp3_progress,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: Q.nav_mp3_accomplishments.defaultMessage,
              intlMessage: Q.nav_mp3_accomplishments,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: Z.C.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: Q.nav_mp3_singleplayer.defaultMessage,
              intlMessage: Q.nav_mp3_singleplayer,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: Q.nav_mp3_career.defaultMessage,
                intlMessage: Q.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: Q.nav_mp3_checklist.defaultMessage,
                intlMessage: Q.nav_mp3_checklist,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: Q.nav_mp3_grinds.defaultMessage,
                intlMessage: Q.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: Q.nav_mp3_chapters.defaultMessage,
                intlMessage: Q.nav_mp3_chapters,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: Q.nav_mp3_weapons.defaultMessage,
                intlMessage: Q.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: Q.nav_mp3_leaderboards.defaultMessage,
                intlMessage: Q.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: Q.nav_mp3_multiplayer.defaultMessage,
              intlMessage: Q.nav_mp3_multiplayer,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: Q.nav_mp3_career.defaultMessage,
                intlMessage: Q.nav_mp3_career,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: Q.nav_mp3_grinds.defaultMessage,
                intlMessage: Q.nav_mp3_grinds,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: Q.nav_mp3_weapons.defaultMessage,
                intlMessage: Q.nav_mp3_weapons,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: Q.nav_mp3_leaderboards.defaultMessage,
                intlMessage: Q.nav_mp3_leaderboards,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: Q.nav_mp3_crews.defaultMessage,
              intlMessage: Q.nav_mp3_crews,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: Q.nav_mp3_multiplayer.defaultMessage,
                intlMessage: Q.nav_mp3_multiplayer,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: Q.nav_mp3_score_attack.defaultMessage,
                intlMessage: Q.nav_mp3_score_attack,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: Q.nav_mp3_ny_minute.defaultMessage,
                intlMessage: Q.nav_mp3_ny_minute,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: Q.nav_mp3_checkpoint_challenge.defaultMessage,
                intlMessage: Q.nav_mp3_checkpoint_challenge,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: Q.nav_mp3_featured.defaultMessage,
                intlMessage: Q.nav_mp3_featured,
                type: "nav-internal",
                dataTestId: "mp3CrewFeaturedLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: Z.C.socialClub,
                  path: "/games/maxpayne3/crews/rivalries"
                }
              }]
            }]
          }, {
            text: Q.nav_mp3_support.defaultMessage,
            intlMessage: Q.nav_mp3_support,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: Z.C.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: Q.nav_mp3_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_mp3_cta_buy_now,
            dataTestId: "mp3PurchaseLink",
            target: "_blank",
            location: {
              domain: Z.C.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy"
          }
        },
        Rn = {
          site: "midnightclub",
          appearancePaths: {
            [Z.C.www]: ["/games/midnightclub/*"]
          },
          brand: "midnightclubstreetracing",
          links: []
        },
        Gn = {
          site: "midnightclub2",
          appearancePaths: {
            [Z.C.www]: ["/games/midnightclub2/*"]
          },
          brand: "midnightclub2",
          links: []
        },
        Bn = {
          site: "midnightclub3",
          appearancePaths: {
            [Z.C.www]: ["/games/midnightclub3/*"]
          },
          brand: "midnightclub3dub",
          links: []
        },
        Dn = {
          site: "midnightclubLA",
          appearancePaths: {
            [Z.C.www]: ["/games/midnightclubLA/*"]
          },
          brand: "midnightclubla",
          links: [],
          cta: {
            text: Q.nav_midnightclubla_buy_now.defaultMessage,
            intlMessage: Q.nav_midnightclubla_buy_now,
            dataTestId: "midnightClubLaBuyNowCta",
            location: {
              domain: "https://marketplace.xbox.com",
              path: "/en-US/Product/Midnight-Club-LA/66acd000-77fe-1000-9115-d802545407f8"
            },
            ga: "cta_buy"
          }
        },
        Vn = {
          site: "oni",
          appearancePaths: {
            [Z.C.www]: ["/games/oni/*"]
          },
          brand: "oni",
          links: []
        },
        qn = {
          appearancePaths: {
            [Z.C.www]: ["/reddeadonline/*"],
            [Z.C.socialClub]: ["/games/rdo/*"]
          },
          brand: "reddeadonline",
          cta: {
            dataTestId: "rdoPurchaseLink",
            ga: "cta_buy",
            intlMessage: Q.nav_rdo_cta_buy_now,
            location: {
              domain: Z.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            target: "_blank",
            text: Q.nav_rdo_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "rdoLink",
            intlMessage: Q.nav_rdo_overview,
            location: {
              domain: Z.C.www,
              path: "/reddeadonline"
            },
            text: Q.nav_rdo_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "rdoGettingStartedLink",
              intlMessage: Q.nav_rdo_getting_started,
              location: {
                domain: Z.C.www,
                path: "/reddeadonline/features/getting-started"
              },
              text: Q.nav_rdo_getting_started.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesLink",
              intlMessage: Q.nav_rdo_specialist_roles,
              location: {
                domain: Z.C.www,
                path: "/reddeadonline/features/roles"
              },
              text: Q.nav_rdo_specialist_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoLOOLink",
              intlMessage: Q.nav_rdo_story_missions,
              location: {
                domain: Z.C.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              },
              text: Q.nav_rdo_story_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPossesLink",
              intlMessage: Q.nav_rdo_posses_free_roam,
              location: {
                domain: Z.C.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              },
              text: Q.nav_rdo_posses_free_roam.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoSAELink",
              intlMessage: Q.nav_rdo_competitive_series,
              location: {
                domain: Z.C.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              },
              text: Q.nav_rdo_competitive_series.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCustomizationLink",
              intlMessage: Q.nav_rdo_customization,
              location: {
                domain: Z.C.www,
                path: "/reddeadonline/features/customization"
              },
              text: Q.nav_rdo_customization.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoProgressLink",
              intlMessage: Q.nav_rdo_progression,
              location: {
                domain: Z.C.www,
                path: "/reddeadonline/features/rank-and-fortune"
              },
              text: Q.nav_rdo_progression.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoExploreDropdown",
            intlMessage: Q.nav_rdo_explore,
            text: Q.nav_rdo_explore.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoOverviewButton",
              intlMessage: Q.nav_rdo_my_character,
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdo/overview"
              },
              text: Q.nav_rdo_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesButton",
              intlMessage: Q.nav_rdo_roles,
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdo/roles"
              },
              text: Q.nav_rdo_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoClubRewardsButton",
              intlMessage: Q.nav_rdo_club_rewards,
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdo/clubrewards"
              },
              text: Q.nav_rdo_club_rewards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRankButton",
              intlMessage: Q.nav_rdo_rank_unlocks,
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdo/rank"
              },
              text: Q.nav_rdo_rank_unlocks.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAwardsButton",
              intlMessage: Q.nav_rdo_awards,
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdo/awards"
              },
              text: Q.nav_rdo_awards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAchievementsButton",
              intlMessage: Q.nav_rdo_accomplishments,
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdo/achievements"
              },
              text: Q.nav_rdo_accomplishments.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoFeaturesLink",
              intlMessage: Q.nav_rdo_benefits,
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdo/benefits"
              },
              text: Q.nav_rdo_benefits.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoProgressDropdown",
            intlMessage: Q.nav_rdo_progress,
            text: Q.nav_rdo_progress.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoPosseButton",
              intlMessage: Q.nav_rdo_posses,
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdo/posse"
              },
              text: Q.nav_rdo_posses.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPhotosButton",
              intlMessage: Q.nav_rdo_photos,
              location: {
                domain: Z.C.socialClub,
                path: "/photos/?title=rdr2"
              },
              text: Q.nav_rdo_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCommunityGuidelinesButton",
              intlMessage: Q.nav_rsg_community_guidelines,
              location: {
                domain: Z.C.www,
                path: "/community-guidelines"
              },
              text: Q.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoCommunityDropdown",
            intlMessage: Q.nav_rdo_community,
            text: Q.nav_rdo_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "rdoCatalogueButton",
            intlMessage: Q.nav_rdo_catalogue,
            location: {
              domain: Z.C.socialClub,
              path: "games/rdr2/catalogue/online/"
            },
            target: "_blank",
            text: Q.nav_rdo_catalogue.defaultMessage,
            type: "nav-external"
          }, {
            dataTestId: "rdoSupportLink",
            intlMessage: Q.nav_rdo_support,
            location: {
              domain: Z.C.support,
              path: "/categories/115001624507"
            },
            target: "_blank",
            text: Q.nav_rdo_support.defaultMessage,
            type: "nav-external"
          }],
          site: "rdo"
        },
        Fn = {
          site: "reddeadredemption",
          appearancePaths: {
            [Z.C.www]: ["/reddeadredemption/*"]
          },
          brand: "reddeadredemption",
          links: [],
          cta: {
            text: Q.nav_rdr_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_rdr_cta_buy_now,
            dataTestId: "rsrBuyNowCta",
            location: {
              domain: Z.C.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy"
          }
        },
        Un = {
          site: "rdr2",
          appearancePaths: {
            [Z.C.www]: ["/reddeadredemption2/*", "/games/reddeadredemption2/*"],
            [Z.C.socialClub]: ["/games/rdr2/*"]
          },
          brand: "reddeadredemption2",
          links: [{
            text: Q.nav_rdr2_overview.defaultMessage,
            intlMessage: Q.nav_rdr2_overview,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: Z.C.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: Q.nav_rdr2_explore.defaultMessage,
            intlMessage: Q.nav_rdr2_explore,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: Q.nav_rdr2_van_der_linde_gang.defaultMessage,
              intlMessage: Q.nav_rdr2_van_der_linde_gang,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: Z.C.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: Q.nav_rdr2_locations.defaultMessage,
              intlMessage: Q.nav_rdr2_locations,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: Z.C.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: Q.nav_rdr2_wildlife.defaultMessage,
              intlMessage: Q.nav_rdr2_wildlife,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: Z.C.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: Q.nav_rdr2_weaponry.defaultMessage,
              intlMessage: Q.nav_rdr2_weaponry,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: Z.C.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: Q.nav_rdr2_progress.defaultMessage,
            intlMessage: Q.nav_rdr2_progress,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: Q.nav_rdr2_stats.defaultMessage,
              intlMessage: Q.nav_rdr2_stats,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: Q.nav_rdr2_chapters.defaultMessage,
              intlMessage: Q.nav_rdr2_chapters,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: Q.nav_rdr2_challenges.defaultMessage,
              intlMessage: Q.nav_rdr2_challenges,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: Q.nav_rdr2_character.defaultMessage,
              intlMessage: Q.nav_rdr2_character,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: Q.nav_rdr2_compendium.defaultMessage,
              intlMessage: Q.nav_rdr2_compendium,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: Q.nav_rdr2_accomplishments.defaultMessage,
              intlMessage: Q.nav_rdr2_accomplishments,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: Z.C.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: Q.nav_rdr2_media.defaultMessage,
            intlMessage: Q.nav_rdr2_media,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: Q.nav_rdr2_gallery.defaultMessage,
              intlMessage: Q.nav_rdr2_gallery,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: Z.C.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: Q.nav_rdr2_artwork.defaultMessage,
              intlMessage: Q.nav_rdr2_artwork,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: Z.C.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: Q.nav_rdr2_videos.defaultMessage,
              intlMessage: Q.nav_rdr2_videos,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: Z.C.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: Q.nav_rdr2_music.defaultMessage,
              intlMessage: Q.nav_rdr2_music,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: Z.C.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: Q.nav_rdr2_online.defaultMessage,
            intlMessage: Q.nav_rdr2_online,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: Z.C.www,
              path: "/reddeadonline"
            }
          }, {
            text: Q.nav_rdr2_catalogue.defaultMessage,
            intlMessage: Q.nav_rdr2_catalogue,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: Z.C.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: Q.nav_rdr2_support.defaultMessage,
            intlMessage: Q.nav_rdr2_support,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: Z.C.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: Q.nav_rdr2_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_rdr2_cta_buy_now,
            dataTestId: "rdr2StoreLink",
            target: "_blank",
            location: {
              domain: Z.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        },
        Hn = {
          site: "undeadnightmare",
          appearancePaths: {
            [Z.C.www]: ["/games/undeadnightmare/*"]
          },
          brand: "reddeadredemptionundeadnightmare",
          links: []
        },
        $n = {
          site: "reddeadrevolver",
          appearancePaths: {
            [Z.C.www]: ["/games/reddeadrevolver/*"]
          },
          brand: "reddeadrevolver",
          links: []
        },
        Wn = {
          site: "rsg",
          appearancePaths: {
            [Z.C.www]: ["/*"],
            [Z.C.socialClub]: ["/*"]
          },
          brand: null,
          links: [{
            text: Q.nav_rsg_games.defaultMessage,
            intlMessage: Q.nav_rsg_games,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: Q.nav_rsg_newswire.defaultMessage,
            intlMessage: Q.nav_rsg_newswire,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: Z.C.www,
              path: "/newswire"
            }
          }, {
            text: Q.nav_rsg_videos.defaultMessage,
            intlMessage: Q.nav_rsg_videos,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: Z.C.www,
              path: "/videos"
            }
          }, {
            text: Q.nav_rsg_downloads.defaultMessage,
            intlMessage: Q.nav_rsg_downloads,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: Z.C.www,
              path: "/downloads"
            }
          }, {
            text: Q.nav_rsg_store.defaultMessage,
            intlMessage: Q.nav_rsg_store,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: Z.C.store,
              path: null
            }
          }, {
            text: Q.nav_rsg_support.defaultMessage,
            intlMessage: Q.nav_rsg_support,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: Z.C.support,
              path: null
            }
          }],
          cta: {
            text: Q.nav_rsg_cta_get_launcher.defaultMessage,
            intlMessage: Q.nav_rsg_cta_get_launcher,
            variant: "highlight",
            dataTestId: "launcherLink",
            location: {
              domain: Z.C.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download"
          },
          hideQuickAccess: !0
        },
        Xn = {
          site: "stateofemergency",
          appearancePaths: {
            [Z.C.www]: ["/games/stateofemergency/*"]
          },
          brand: "stateofemergency",
          links: []
        },
        Jn = {
          site: "skateanddestroy",
          appearancePaths: {
            [Z.C.www]: ["/games/skateanddestroy/*"]
          },
          brand: "thrashersad",
          links: []
        },
        Kn = {
          site: "smugglersrun",
          appearancePaths: {
            [Z.C.www]: ["/games/smugglersrun/*"]
          },
          brand: "smugglersrun",
          links: []
        },
        Yn = {
          site: "smugglersrun2",
          appearancePaths: {
            [Z.C.www]: ["/games/smugglersrun2/*"]
          },
          brand: "smugglersrun2hostileterritory",
          links: []
        },
        Zn = {
          site: "smugglersrunwarzones",
          appearancePaths: {
            [Z.C.www]: ["/games/smugglersrunwarzones/*"]
          },
          brand: "smugglersrunwarzones",
          links: []
        };
      let Qn = Z.C.support;
      const er = {
          site: "support",
          hideSearch: !0,
          appearancePaths: {
            [Qn]: ["/*"]
          },
          brand: null,
          links: [{
            text: Q.nav_support_home.defaultMessage,
            intlMessage: Q.nav_support_home,
            type: "nav-internal",
            location: {
              domain: Qn,
              path: ""
            }
          }, {
            text: Q.nav_support_service_status.defaultMessage,
            intlMessage: Q.nav_support_service_status,
            type: "nav-internal",
            location: {
              domain: Qn,
              path: "/servicestatus"
            }
          }, {
            text: Q.nav_support_submit_ticket.defaultMessage,
            intlMessage: Q.nav_support_submit_ticket,
            type: "nav-internal",
            location: {
              domain: Qn,
              path: "/categories"
            }
          }],
          cta: {
            text: Q.nav_support_dashboard.defaultMessage,
            intlMessage: Q.nav_support_dashboard,
            variant: "highlight",
            location: {
              domain: Qn,
              path: "/dashboard"
            },
            ga: "cta_other"
          }
        },
        ar = {
          site: "tabletennis",
          appearancePaths: {
            [Z.C.www]: ["/games/tabletennis/*"]
          },
          brand: "tabletennis",
          links: [],
          cta: {
            text: Q.nav_tabletennis_cta_buy_now.defaultMessage,
            intlMessage: Q.nav_tabletennis_cta_buy_now,
            variant: "highlight",
            dataTestId: "tableTennisCta",
            location: {
              domain: "https://www.xbox.com",
              path: "/en-US/games/store/rockstar-table-tennis/bvz4h08bmq3h"
            },
            ga: "cta_buy"
          }
        },
        tr = {
          site: "italianjob",
          appearancePaths: {
            [Z.C.www]: ["/games/italianjob/*"]
          },
          brand: "theitalianjob",
          links: []
        },
        sr = {
          site: "thewarriors",
          appearancePaths: {
            [Z.C.www]: ["/games/thewarriors/*"]
          },
          brand: "thewarriors",
          links: []
        },
        nr = {
          site: "wildmetal",
          appearancePaths: {
            [Z.C.www]: ["/games/wildmetal/*"]
          },
          brand: "wildmetal",
          links: []
        },
        rr = e => {
          const a = ne(),
            t = (e, s) => s?.requiresAuth && !a.nickname ? e : [...e, {
              ...s,
              ...s.children ? {
                children: s.children.reduce(t, [])
              } : []
            }];
          return (0, i.useMemo)((() => e.reduce(t, [])), [e, a.nickname])
        },
        or = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング:{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        ir = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(9544),
                alt: "PC"
              } : {
                src: t(5710),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(5636),
                alt: "PS4"
              } : {
                src: t(8318),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(357),
                alt: "PS5"
              } : {
                src: t(2047),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(7976),
                alt: "Xbox One"
              } : {
                src: t(350),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(4923),
                alt: "Xbox Series X|S"
              } : {
                src: t(9825),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        _r = e => t(e < 100 ? 6399 : e > 99 && e < 500 ? 2627 : e > 499 && e < 750 ? 3864 : 6425),
        cr = (0, o.defineMessages)({
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
          sc_menu_open: {
            id: "sc_menu_open",
            defaultMessage: "Open player menu"
          },
          sc_menu_close: {
            id: "sc_menu_close",
            defaultMessage: "Close player menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          },
          nofications_new: {
            id: "nofications_new",
            defaultMessage: "New notifications"
          }
        }),
        lr = {
          pillBtn: "rockstargames-modules-core-headere4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-modules-core-headereb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-modules-core-headerdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-modules-core-headerc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-modules-core-headere79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-modules-core-headerc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-modules-core-headereabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-modules-core-headerb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-modules-core-headerf1e0bcba6214698c490b8201bbd850b7"
        };
      (0, o.withIntl)((e => {
        let {
          characterData: a
        } = e;
        const s = (0, o.useIntl)(),
          {
            platform: n,
            platformUsername: r,
            mugshotUrl: _,
            stats: c
          } = a,
          [l, d] = (0, i.useState)(_),
          g = ir(n, "large");
        return (0, E.jsxs)("div", {
          className: lr.scCharacterCard,
          children: [(0, E.jsx)("div", {
            className: lr.scAvatar,
            "data-size": "small",
            children: (0, E.jsx)("img", {
              src: l,
              alt: s.formatMessage(cr.profile_selector_mugshot, {
                userName: r
              }),
              onError: () => {
                d(t(8989))
              }
            })
          }), (0, E.jsx)("div", {
            className: lr.scCharacterStats,
            children: (0, E.jsxs)("div", {
              className: lr.scCharNames,
              children: [(0, E.jsx)("img", {
                src: g.src,
                alt: g.alt
              }), (0, E.jsx)("div", {
                className: lr.scUserName,
                "data-size": "small",
                children: r
              }), (0, E.jsx)("div", {
                className: lr.scRp,
                children: (0, E.jsxs)("div", {
                  className: lr.scRpLevel,
                  children: [(0, E.jsx)("img", {
                    className: lr.scRpIcon,
                    src: _r(c.overview.rank.value),
                    alt: s.formatMessage(cr.profile_selector_rp_icon)
                  }), (0, E.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), or);
      var dr = t(7460);
      const gr = (0, _.hp)("@rockstargames/components/profile-switcher"),
        vr = gr("languageSelectorOpenedReactive", !1),
        mr = e => vr(e),
        ur = gr("activeSubNavIdReactive", -1),
        pr = e => ur(e),
        hr = gr("subNavExtraHeightReactive", -1),
        fr = e => hr(e),
        br = gr("scNavOpenedReactive", !0),
        wr = e => br(e),
        yr = gr("charListHiddenReactive", !0),
        kr = e => yr(e),
        Mr = () => {
          const e = (0, _.qs)(vr),
            a = (0, _.qs)(ur),
            t = (0, _.qs)(hr),
            s = (0, _.qs)(br),
            n = (0, _.qs)(yr);
          return (0, i.useEffect)((() => {
            n || (e && mr(!1), s && (wr(!1), pr(-1)))
          }), [n]), (0, i.useEffect)((() => {
            !e && n && (s || wr(!0))
          }), [e, n]), (0, i.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: mr,
            activeSubNavId: a,
            setActiveSubNavId: pr,
            subNavExtraHeight: t,
            setSubNavExtraHeight: fr,
            scNavOpened: s,
            setScNavOpened: wr,
            charListHidden: n,
            setCharListHidden: kr
          })), [e, a, t, s, n])
        };
      var xr = t(4963),
        Cr = t.n(xr);
      const jr = (0, o.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        Sr = (0, o.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        Tr = "rockstargames-modules-core-headerff481c537a56a6fcdb1be85dfbc8944e",
        Ir = (0, o.withIntl)((e => {
          let {
            children: a,
            to: t = "#",
            alt: s = "",
            autoBlank: n = !1,
            onClick: r = (() => {}),
            focused: _ = !1,
            ...c
          } = e;
          const l = (0, i.useRef)(null),
            d = (0, o.useIntl)(),
            g = !/^(https?|mailto):/i.test(t),
            v = /^#/.test(t),
            m = c?.target ?? (n ? "_blank" : "_self");
          let {
            ...u
          } = c, p = "";
          if ("aria-label" in u && u["aria-label"] && (p = "_blank" === m ? `${u["aria-label"]} ${d.formatMessage(Sr.aria_label_open_new_window)}` : u["aria-label"]), (0, i.useEffect)((() => {
              _ && l?.current && l.current.focus()
            }), [l?.current, _]), v) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), r && r(e)
            };
            return (0, E.jsxs)("a", {
              title: s,
              href: t,
              onClick: e,
              ...u,
              "aria-label": p,
              ref: l,
              children: [a, "_blank" === m && !p && (0, E.jsx)("span", {
                className: Tr,
                children: d.formatMessage(Sr.aria_label_open_new_window)
              })]
            })
          }
          if (g) return (0, E.jsxs)(q.NavLink, {
            title: s,
            to: t,
            onClick: r,
            ...u,
            "aria-label": p,
            ref: l,
            children: [a, "_blank" === m && !p && (0, E.jsx)("span", {
              className: Tr,
              children: d.formatMessage(Sr.aria_label_open_new_window)
            })]
          });
          const h = Object.keys(u).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: c[a]
          })), {});
          return "function" == typeof h?.className && delete h.className, (0, E.jsxs)("a", {
            href: t,
            title: s,
            onClick: r,
            target: m,
            ...h,
            "aria-label": p,
            ref: l,
            children: [a, "_blank" === m && !p && (0, E.jsx)("span", {
              className: Tr,
              children: d.formatMessage(Sr.aria_label_open_new_window)
            })]
          })
        }), or),
        Ar = {
          pillBtn: "rockstargames-modules-core-headercb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-core-headerc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-core-headerfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-core-headerb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-core-headeredc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-core-headerc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-core-headerc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-core-headere3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-core-headerc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-core-headerbcccd1077d13d7fe1585655e5c5f8363"
        },
        Nr = (0, o.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s,
            location: n,
            parent: r = "footer"
          } = e;
          const {
            track: _
          } = $(), c = (0, o.useIntl)(), [l, d] = (0, o.getLocale)(), [g, v] = (0, i.useState)(!1), m = (0, i.useMemo)((() => (0, Z.A)()), []), u = (0, i.useCallback)((e => {
            let a = n.pathname;
            const t = a.split("/");
            return o.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), m.currentSite?.site === Z.C.www ? "en" === e ? `${window.location.origin}${a}${n.search}` : `${window.location.origin}/${e}${a}${n.search}` : `${window.location.origin}${a}${n.search}`
          }), [n]), p = (0, i.useRef)(null), [h, f] = (0, i.useState)(0), b = matchMedia("(hover: none) and (pointer: coarse)").matches, w = e => {
            if (s && s(!1), l.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = o.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = u(e);
              _({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: r
              }), d(a.iso), window.location.href = t
            }
          };
          return (0, i.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === g && v(!1)
          }), [t]), (0, i.useEffect)((() => {
            p.current && f(p.current.scrollHeight)
          }), [p]), (0, E.jsxs)("div", {
            className: [Ar.languageSelector, g ? Ar.open : ""].join(" "),
            "data-theme": a,
            children: [b && "sc-menu" === a && (0, E.jsx)("div", {
              className: Ar.selectBoxWrapper,
              children: (0, E.jsxs)("select", {
                className: Ar.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  w(a)
                },
                "aria-label": c.formatMessage(jr.language_selector_default),
                children: [(0, E.jsx)("option", {
                  className: Ar.selectBoxOption,
                  value: "none",
                  children: (0, E.jsx)(o.FormattedMessage, {
                    ...jr.language_selector_default
                  })
                }), o.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, E.jsx)("option", {
                    className: Ar.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!b || "sc-menu" !== a) && (0, E.jsxs)(E.Fragment, {
              children: [(0, E.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!g), v(!g)
                },
                type: "button",
                "aria-label": c.formatMessage(jr.language_selector_default),
                children: [(0, E.jsx)("i", {}), (0, E.jsx)("span", {
                  children: (0, E.jsx)(o.FormattedMessage, {
                    ...jr.language_selector_default
                  })
                })]
              }), (0, E.jsx)("div", {
                className: Ar.linkWrapper,
                ref: p,
                style: {
                  "--ls-linkWrapper-opened-height": `${h}px`
                },
                children: (0, E.jsx)("div", {
                  className: Ar.links,
                  children: o.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, E.jsx)(Ir, {
                      to: u(a),
                      onClick: (s = a, () => {
                        w(s)
                      }),
                      tabIndex: g ? 0 : -1,
                      children: t
                    }, `desktop-${a}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), or),
        Pr = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Lr = e => ({
          text: e.formatMessage(cr.sc_link_help),
          target: "_self",
          ga: {
            ...Pr,
            text: cr.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(cr.sc_link_support),
            location: {
              domain: Z.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Pr,
              text: cr.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(cr.sc_link_legal),
            location: {
              domain: Z.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Pr,
              text: cr.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(cr.sc_link_privacy_policy),
            location: {
              domain: Z.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Pr,
              text: cr.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(cr.sc_link_cookies_policy),
            location: {
              domain: Z.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Pr,
              text: cr.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(cr.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Pr,
              text: cr.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(cr.sc_link_do_not_sell_my_information),
            location: {
              domain: Z.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Pr,
              text: cr.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        zr = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: n,
            onClick: r,
            reloadDocument: o,
            children: i,
            ..._
          } = e;
          const c = a?.startsWith("http");
          return (0, E.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              r?.(e), c || o || (n ? (e.preventDefault(), n(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            ..._,
            children: i
          })
        },
        Er = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: n,
            ga: r,
            dataTestId: i,
            isSubLink: _,
            hasNotifications: c = !1,
            onClickCallback: l = (() => {}),
            tabIndex: d,
            reloadDocument: g = !1,
            onNavigate: v
          } = e;
          const {
            track: m
          } = $(), u = (0, Z.A)(), p = (0, o.useIntl)();
          let h = s;
          n && (h = n.domain === u.currentSite?.site ? n.path : `https://${u.sites[n.domain]}.rockstargames.com${n.path}`);
          const f = {
            ...r,
            link_url: h
          };
          return (0, E.jsxs)(zr, {
            className: _ ? "rockstargames-modules-core-headerfdaa918acc06706cbe191dedd40974af" : "rockstargames-modules-core-headercbc80932118c48d8ec14448d8913d068",
            "data-testid": i || "menuLink",
            title: a,
            to: h,
            target: t,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: d,
            onClick: e => {
              m(f), l(e)
            },
            onNavigate: v,
            children: [a, c && (0, E.jsx)("div", {
              className: "rockstargames-modules-core-headera2d268c9fb03a7271b47de447d663da9",
              children: (0, E.jsx)("span", {
                className: "rockstargames-modules-core-headercf5a6b05c52c6c4faf3236055d4670c3",
                children: p.formatMessage(cr.nofications_new)
              })
            })]
          })
        },
        Or = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: n,
            location: r,
            ga: o,
            hasNotifications: _ = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: g,
            setActiveSubNavId: v,
            setSubNavExtraHeight: m,
            reloadDocument: u = !1,
            onClickCallback: p = (() => {}),
            onNavigate: h
          } = e;
          const {
            windowWidth: f,
            windowHeight: b
          } = (0, c.G4)(), {
            track: w
          } = $(), {
            navOpen: y
          } = S(), k = (0, i.useRef)(null), [M, x] = (0, i.useState)(0), [C, j] = (0, i.useState)(0), [T, I] = (0, i.useState)(!0);
          return (0, i.useEffect)((() => {
            g !== a && !1 === T && I(!0), g === a && I(!1)
          }), [g]), (0, i.useEffect)((() => {
            if (!k.current) return;
            x(k?.current?.scrollHeight);
            const e = window.getComputedStyle(k.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [k, f, b]), d.length > 0 ? (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsxs)("button", {
              className: "rockstargames-modules-core-headeraf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": T,
              onClick: e => {
                e.stopPropagation(), w(o), g === a ? (v(-1), m(0)) : (v(a), m(M + C + C))
              },
              children: [(0, E.jsx)("span", {
                className: "rockstargames-modules-core-headerfd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, E.jsx)("span", {
                className: "rockstargames-modules-core-headerbe674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, E.jsx)("nav", {
              className: "rockstargames-modules-core-headerff1911053a3515534dd825554a85909e",
              ref: k,
              "aria-hidden": T,
              style: {
                height: T ? 0 : `${M}px`
              },
              children: d.map((e => (0, i.createElement)(Er, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: T || !y ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, E.jsx)(Er, {
            text: t,
            target: s,
            href: n,
            location: r,
            ga: o,
            hasNotifications: _,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: y ? 0 : -1,
            reloadDocument: u,
            onNavigate: h
          })
        },
        Rr = e => {
          let {
            sc: a,
            location: t,
            onNavigate: s
          } = e;
          const {
            windowWidth: n,
            windowHeight: r
          } = (0, c.G4)(), _ = (0, o.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            activeSubNavId: g,
            setActiveSubNavId: v,
            subNavExtraHeight: m,
            setSubNavExtraHeight: u
          } = Mr(), {
            setSelectedCharacterTuple: p,
            navOpen: h
          } = S(), f = (0, c.Ym)(), b = (0, c.tI)(f), [w, y] = (0, i.useState)(""), k = `${a.login}?returnUrl=${w}&lang=${b}`, M = `${a.signup}&returnUrl=${w}&lang=${b}`, x = (0, i.useMemo)((() => (0, Z.A)()), []), C = (0, i.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(cr.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: cr.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(cr.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: cr.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Lr(e)])(_, k, M);
            return e
          }), [_, k, M, x]), [j, T] = (0, i.useState)(0), I = (0, i.createRef)(), A = () => {
            if (I.current) {
              const {
                current: e
              } = I, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), T(a + e)
              } else T(a)
            }
          };
          return (0, i.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            y(e)
          }), [JSON.stringify(t)]), (0, i.useEffect)((() => {
            p(!1)
          }), []), (0, i.useEffect)((() => {
            A(), Cr()((() => {
              setTimeout(A, 0)
            }), 300)
          }), [n, r]), (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)("nav", {
              className: "rockstargames-modules-core-headerb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, E.jsx)("div", {
                className: "rockstargames-modules-core-headerc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${m+j}px`
                },
                children: C.map((e => (0, i.createElement)(Or, {
                  ...e,
                  activeSubNavId: g,
                  setActiveSubNavId: v,
                  setSubNavExtraHeight: u,
                  onNavigate: s,
                  key: e.text
                })))
              })
            }), (0, E.jsx)("div", {
              className: "rockstargames-modules-core-headera6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, E.jsx)(Nr, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: l,
                setLanguageSelectorOpened: e => {
                  v(-1), d(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        },
        Gr = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: n
          } = e;
          const r = (0, o.useIntl)(),
            {
              currentCharId: _,
              setCurrentCharId: c
            } = S(),
            {
              track: l
            } = $(),
            d = (0, i.createRef)(),
            {
              platform: g,
              platformUsername: v,
              mugshotUrl: m,
              stats: u
            } = a,
            [p, h] = (0, i.useState)(m),
            [f] = (0, i.useState)(a.index),
            b = ir(g, "large"),
            w = _ === a.index;
          return (0, i.useEffect)((() => {
            d.current && s && s(d?.current?.offsetWidth)
          }), [d]), (0, E.jsxs)("button", {
            className: "rockstargames-modules-core-headerd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": w,
            onClick: e => {
              e.stopPropagation(), c(f);
              let a = "";
              "pc" === g ? a = "PC" : "ps4" === g ? a = "PS4" : "ps5" === g ? a = "PS5" : "xboxone" === g ? a = "Xbox One" : "xboxsx" === g && (a = "Xbox Series X|S"), l({
                event: "character_selector_select",
                text: a,
                position: f
              })
            },
            ref: d,
            tabIndex: n,
            children: [(0, E.jsx)("div", {
              className: "rockstargames-modules-core-headerbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, E.jsx)("img", {
                src: p,
                alt: r.formatMessage(cr.profile_selector_mugshot, {
                  userName: v
                }),
                onError: () => {
                  h(t(8989))
                }
              })
            }), (0, E.jsxs)("div", {
              className: "rockstargames-modules-core-headerc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, E.jsxs)("div", {
                className: "rockstargames-modules-core-headere9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, E.jsx)("img", {
                  src: b.src,
                  alt: b.alt
                }), (0, E.jsx)("div", {
                  className: "rockstargames-modules-core-headerb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: v
                })]
              }), (0, E.jsx)("div", {
                className: "rockstargames-modules-core-headera5e3df42966a50f3dd88bbcb57536617",
                children: (0, E.jsxs)("div", {
                  className: "rockstargames-modules-core-headera6776312350028898320ba59145a39be",
                  children: [(0, E.jsx)("img", {
                    className: "rockstargames-modules-core-headerb266652910ad34c0e8e097b212a958f0",
                    src: _r(u.overview.rank.value),
                    alt: r.formatMessage(cr.profile_selector_rp_icon)
                  }), (0, E.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Br = {
          pillBtn: "rockstargames-modules-core-headerd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-core-headerbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-core-headerb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-core-headerc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-core-headera8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-core-headerc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-core-headerda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-core-headerd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-core-headerd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-core-headerb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-core-headera581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-core-headerbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-core-headerdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-core-headerb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-core-headerf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-core-headerf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-core-headerb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-core-headerec696aafed90a7a4c69dc53da0a5bb36"
        },
        Dr = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: n
          } = D(), {
            track: r
          } = $(), _ = (0, o.useIntl)(), [c, l] = (0, i.useState)([]), [d, g] = (0, i.useState)(null), [v, m] = (0, i.useState)(null), [u, p] = (0, i.useState)(!1), [h, f] = (0, i.useState)(-1), [b, w] = (0, i.useState)([]), [y, k] = (0, i.useState)(0), M = t(8989), [x, C] = (0, i.useState)("0"), [j, S] = (0, i.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), I = () => {
            N((0, E.jsx)("img", {
              src: M,
              alt: _.formatMessage(cr.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          }, [A, N] = (0, i.useState)((0, E.jsx)("img", {
            className: Br.scAvatarImg,
            src: a.mugshotUrl,
            alt: _.formatMessage(cr.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: I
          }));
          (0, i.useEffect)((() => {
            l(n.crews ?? [])
          }), [n]), (0, i.useEffect)((() => {
            N((0, E.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: I
            })), C(T(a.stats.overview.bank.value)), S(T(a.stats.overview.cash.value)), k(parseInt(a.stats.overview.rank.value))
          }), [a, n]), (0, i.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), m(e.crewColour), f(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [c]), (0, i.useEffect)((() => {
            const e = [];
            if (!u && h > -1)
              for (let a = 5; a > h; a -= 1) e.push((0, E.jsx)("div", {
                className: Br.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== v ? v : ""
                }
              }, `crewrankbar-${a}`));
            w(e)
          }), [h, u, v]);
          const P = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, E.jsxs)("div", {
            className: Br.scProfileDetails,
            onClick: P,
            onKeyUp: P,
            role: "button",
            tabIndex: -1,
            children: [(0, E.jsxs)("div", {
              className: Br.scAvatar,
              children: [A, (0, E.jsx)("div", {
                className: Br.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, E.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, E.jsxs)("div", {
              className: Br.scProfileStats,
              children: [(0, E.jsx)("div", {
                className: Br.scNames,
                children: (0, E.jsxs)("div", {
                  className: Br.scTagsNames,
                  children: [(0, E.jsx)("span", {
                    className: Br.scUserName,
                    children: a.platformUsername
                  }), d && (0, E.jsxs)("span", {
                    className: Br.scCrewName,
                    "data-arrow-tag": u,
                    children: [d, !u && (0, E.jsx)("div", {
                      className: Br.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, E.jsxs)("div", {
                className: Br.scProgress,
                children: [(0, E.jsxs)("div", {
                  className: Br.scRpLevel,
                  children: [(0, E.jsx)("img", {
                    className: Br.scRpIcon,
                    src: _r(y),
                    alt: _.formatMessage(cr.profile_selector_rp_icon)
                  }), (0, E.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, E.jsxs)("div", {
                  className: Br.scMoney,
                  children: [(0, E.jsxs)("span", {
                    className: Br.scCash,
                    children: ["$", j]
                  }), (0, E.jsxs)("span", {
                    className: Br.scBank,
                    children: ["$", x]
                  })]
                })]
              })]
            })]
          })
        },
        Vr = (e, a) => {
          const [t, s] = (0, i.useState)(0);
          return (0, i.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, n = t.getBoundingClientRect(), {
                width: r
              } = n;
              let o = r;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                o += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(o)
            }
          }), [e]), t
        },
        qr = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: n = null,
            slideClickCallback: r = null,
            children: o = [],
            disablePager: _ = !1,
            disableSwiper: c = !1
          } = e;
          const l = (0, i.createRef)(),
            d = Vr(l, !1),
            [g, v] = (0, i.useState)(!1),
            [m, u] = (0, i.useState)(0),
            [p, h] = (0, i.useState)(0),
            [f, b] = (0, i.useState)([s]),
            [w, y] = (0, i.useState)(f[0]),
            [k, M] = (0, i.useState)(252),
            [x, C] = (0, i.useState)(0),
            [j, S] = (0, i.useState)([]),
            [T, I] = (0, i.useState)([]),
            [A, N] = (0, i.useState)(!1),
            P = e => {
              if (!0 === g || !0 === c) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(a)
            },
            L = e => {
              if (!0 === g || 0 === p || !0 === c) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > p ? 1 : -1,
                r = Math.abs(p - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                v(!0);
                const e = m - 1 < 0 ? 0 : m - 1;
                u(e), y(f[e]), n && n(e)
              })() : (() => {
                if (!0 === g) return;
                v(!0);
                let e = m + 1 >= f.length ? f.length - 1 : m + 1;
                e < 0 && (e = 0), u(e), y(f[e]), n && n(e)
              })(), h(0)) : y(f[m] + r * s)
            },
            z = () => {
              !0 !== g && !0 !== c && (v(!0), !0 !== g && (y(f[m]), h(0)))
            };
          return (0, i.useEffect)((() => {
            const e = [];
            o.forEach((() => {
              e.push((0, i.createRef)())
            })), S(e)
          }), [o]), (0, i.useEffect)((() => {
            if (j.length < 1) return;
            M(j[0]?.current?.clientWidth || 0);
            const e = j[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            C(t + a)
          }), [j]), (0, i.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              v(!1)
            }), t)
          }), [g, t]), (0, i.useEffect)((() => {
            b(o.map(((e, a) => (e => {
              let a = 0;
              const t = o.length;
              return 1 === t ? .5 * d - .5 * k - 2 * s + x : (0 === e && (a = s - e * k), e === t - 1 && t > 1 && (a = t * k * -1 + (d - (s - x))), e > 0 && e < t - 1 && (a = e * k * -1 + (.5 * d - .5 * k + .5 * x)), a)
            })(a)))), 1 === o.length ? N(!0) : N(!1)
          }), [l.current, o, d]), (0, i.useEffect)((() => {
            const e = (a = m, o.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            I(e)
          }), [o, m]), (0, i.useEffect)((() => {
            !0 !== _ && !0 !== c || y(f[0])
          }), [c, _, f]), (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)("div", {
              className: "rockstargames-modules-core-headerab70c3f9c67ecd69d19216a5f4de5049",
              ref: l,
              onTouchStart: P,
              onTouchMove: L,
              onTouchEnd: z,
              onMouseDown: P,
              onMouseMove: L,
              onMouseUp: z,
              onClick: () => {
                null !== r && r(m)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, E.jsx)("div", {
                className: "rockstargames-modules-core-headera93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": A,
                style: {
                  transform: A ? null : `translateX(${w}px)`
                },
                children: o.map(((e, a) => (0, E.jsx)("div", {
                  className: "rockstargames-modules-core-headerc013369a930e076d1729d086fb51903e",
                  ref: j[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === _ && (0, E.jsx)("div", {
              className: "rockstargames-modules-core-headerda8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, E.jsx)("div", {
                className: "rockstargames-modules-core-headerfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Fr = {
          pillBtn: "rockstargames-modules-core-headeraa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-core-headerd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-core-headerdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-core-headerc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-core-headera4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-core-headerb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-core-headera1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-core-headera326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-core-headerd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-core-headerbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-core-headera7f1e2d78519eaf099bd43c6ad07abc9"
        },
        Ur = (0, c.JG)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: n,
            menuPadding: r,
            longCharList: l,
            setLongCharList: d,
            isMobileMode: g,
            setIsMobileMode: v,
            location: m,
            onNavigate: u
          } = e;
          const {
            windowWidth: p,
            windowHeight: h
          } = (0, c.G4)(), f = (0, o.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: w,
            activeSubNavId: y,
            setActiveSubNavId: k,
            subNavExtraHeight: M,
            setSubNavExtraHeight: x,
            scNavOpened: C,
            setScNavOpened: j
          } = Mr(), [T, I] = (0, i.useState)(""), {
            lsSettings: A
          } = (0, c.L$)(), {
            track: N
          } = $(), P = (0, _.Es)(), {
            data: L,
            loggedIn: z
          } = D(), {
            charactersNeeded: O,
            currentCharId: R,
            hasNotifications: G,
            navOpen: B,
            setCurrentCharId: V,
            setHasNotifications: q,
            setSelectedCharacterTuple: F,
            setUserData: U
          } = S(), [H, W] = (0, i.useState)(null), [X, J] = (0, i.useState)(null), [K, Y] = (0, i.useState)(!1), [Q, ee] = (0, i.useState)(!1), [ae, te] = (0, i.useState)(0), se = (0, i.createRef)(), ne = Vr(se, !1), re = (0, i.createRef)(), [oe, ie] = (0, i.useState)(0), [_e, ce] = (0, i.useState)([]), [le, de] = (0, i.useState)(244), ge = (0, i.useRef)(null), ve = (0, i.useMemo)((() => (0, Z.A)()), []), me = (0, i.useMemo)((() => ((e, a, t, s, n) => [{
            text: e.formatMessage(cr.sc_link_activity_feed),
            location: {
              domain: Z.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Pr,
              text: cr.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(cr.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(cr.sc_link_settings),
              location: {
                domain: Z.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...Pr,
                text: cr.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(cr.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...Pr,
                text: cr.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(cr.sc_link_messages),
              location: {
                domain: Z.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Pr,
                text: cr.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(cr.sc_link_game_activation),
              location: {
                domain: Z.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Pr,
                text: cr.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(cr.sc_link_notifications),
            location: {
              domain: Z.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...Pr,
              text: cr.sc_link_notifications.defaultMessage,
              location: {
                domain: Z.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(cr.sc_link_crews),
            location: {
              domain: Z.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Pr,
              text: cr.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(cr.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(cr.sc_link_my_friends),
              location: {
                domain: Z.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Pr,
                text: cr.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(cr.sc_link_import_friends),
              location: {
                domain: Z.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Pr,
                text: cr.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(cr.sc_link_find_friends),
              location: {
                domain: Z.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Pr,
                text: cr.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, Lr(e), {
            text: e.formatMessage(cr.sc_link_log_out),
            href: `${a.logout}?returnUrl=${n}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Pr,
              text: cr.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(f, a, L, G, T, window)), [f, a, L, G, T, ve]), ue = () => {
            ee(r + le * ae < ne)
          }, pe = () => {
            if (re.current) {
              const {
                current: e
              } = re, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ie(a + e)
              } else ie(a)
            }
          };
          return (0, i.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ve.currentSite?.site === Z.C.socialClub && (e = encodeURIComponent("/")), I(e)
          }), [m]), (0, i.useEffect)((() => {
            ce(L.characters[O] ?? [])
          }), [L, O]), (0, i.useEffect)((() => {
            L && U(L)
          }), [L]), (0, i.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== z && !e.length) return void F(!1);
            if (null == R || !e.length) return;
            const a = e?.[R] ?? e?.[0] ?? null;
            F(!!a?.platform && [a.platform, a.characterSlot])
          }), [R, L, z]), (0, i.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const {
                count: e
              } = await (0, c.Ax)("notification/count", {
                pingBearer: P
              });
              q(e > 0)
            })()
          }), [L]), (0, i.useEffect)((() => {
            ue()
          }), [le]), (0, i.useEffect)((() => {
            s(!0), v(p < 768), v(p < 768 || h < 649)
          }), [p, h]), (0, i.useEffect)((() => {
            let e = _e.length - 1;
            e < 0 && (e = 0), te(e);
            const a = _e.length > 0 ? _e[R] ?? _e[0] : null;
            if (!a) return;
            const t = null !== a ? ir(a.platform, "large") : null;
            J(t), W(a), _e.length > 1 ? Y(!0) : Y(!1), d(_e.length - 1 > 3)
          }), [R, _e]), (0, i.useEffect)((() => {
            ue()
          }), [ae, g, p, _e]), (0, i.useEffect)((() => {
            pe(), Cr()((() => {
              setTimeout(pe, 0)
            }), 300)
          }), [p, h]), (0, i.useEffect)((() => {
            const e = A?.currentCharId ?? 0;
            e !== R && V(Math.max(0, Math.min(e, _e.length - 1)))
          }), [_e, A]), (0, E.jsxs)(E.Fragment, {
            children: [null !== H && "gtao" === O && (0, E.jsxs)("div", {
              className: Fr.scProfile,
              ref: ge,
              tabIndex: -1,
              "aria-label": f.formatMessage(cr.profile_selector_profile_card),
              children: [(0, E.jsx)(Dr, {
                s: Fr,
                character: H,
                platformTag: X
              }), !0 === K && (0, E.jsxs)("div", {
                className: Fr.scCharacterSelector,
                children: [(0, E.jsx)("button", {
                  className: Fr.scCharacterSelectBtn,
                  "aria-hidden": !B,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), N({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, E.jsx)("span", {
                    children: (0, E.jsx)(o.FormattedMessage, {
                      ...cr.profile_selector_switch_character
                    })
                  })
                }), !1 === g && (0, E.jsx)("div", {
                  className: Fr.scCharacterList,
                  "data-long-list": l,
                  "aria-hidden": t,
                  ref: n,
                  children: _e.map((e => (0, E.jsx)(Gr, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: de
                  }, e.mugshotUrl)))
                }), !0 === g && (0, E.jsx)("div", {
                  className: Fr.scCharacterList,
                  "data-single-item": 2 === _e.length,
                  "data-swiper-disabled": Q,
                  "aria-hidden": t,
                  ref: se,
                  children: (0, E.jsx)(qr, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      N({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: Q,
                    disableSwiper: Q,
                    children: _e.filter(((e, a) => a !== R)).map((e => (0, i.createElement)(Gr, {
                      characterData: e,
                      setMobileCardWidth: de,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, E.jsxs)("nav", {
              className: Fr.scNav,
              "aria-hidden": !B,
              children: [(0, E.jsx)("button", {
                className: Fr.scNavHeader,
                type: "button",
                "data-opened": C,
                "data-nav-opened": B,
                tabIndex: C ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), C || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, E.jsx)("span", {
                  children: L.nickname
                })
              }), (0, E.jsx)("div", {
                className: Fr.scNavWrap,
                "data-opened": C,
                "data-logged-in": "true",
                ref: re,
                style: {
                  "--scNavWrap-max-height": `${oe+M}px`
                },
                children: me.map(((e, a) => (0, i.createElement)(Or, {
                  ...e,
                  id: a,
                  activeSubNavId: y,
                  setActiveSubNavId: k,
                  setSubNavExtraHeight: x,
                  onNavigate: u,
                  key: e.text
                })))
              })]
            }), (0, E.jsx)("div", {
              className: Fr.scLanguageSelector,
              style: {
                visibility: B ? null : "hidden"
              },
              children: (0, E.jsx)(Nr, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: w,
                location: m
              })
            })]
          })
        })),
        Hr = {
          scMenu: "rockstargames-modules-core-headerebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-core-headerf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-core-headere3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-core-headerff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-core-headerba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-core-headerd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-core-headerd8e443f5d0d9171449f5f1042f80aa17"
        },
        $r = (0, o.withIntl)((e => {
          let {
            location: a,
            onNavigate: s
          } = e;
          const {
            windowHeight: n
          } = (0, c.G4)(), r = (0, o.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: g,
            scNavOpened: v,
            setScNavOpened: m,
            charListHidden: u,
            setCharListHidden: p
          } = Mr(), [h, f] = (0, i.useState)(!1), {
            navHidden: b = !1
          } = (0, _.J0)(), {
            loggedIn: w
          } = D(), {
            currentCharId: y,
            navOpen: k,
            setNavOpen: M,
            userData: x
          } = S(), {
            track: C
          } = $(), [j, T] = (0, i.useState)(!1), I = (0, _.qs)(N), A = (0, i.useRef)(), [P, L] = (0, i.useState)(0), z = (0, i.createRef)(), [O, R] = (0, i.useState)(!1), [G, B] = (0, i.useState)(0), [V, q] = (0, i.useState)(!1), {
            mutateLSSettings: F,
            lsSettings: U
          } = (0, c.L$)(), H = (0, i.useCallback)((e => {
            p(e), A.current && !0 === e && (A.current.scrollTop = 0)
          }), [A]);
          return (0, i.useEffect)((() => {
            null !== y && U.currentCharId !== y && F({
              key: "currentCharId",
              value: y
            }), !1 === w ? F({
              key: "currentCharId",
              value: null
            }) : w && !x && C({
              event: "account_synced"
            })
          }), [y, w]), (0, i.useEffect)((() => {
            A.current && (!1 === u && !1 === j && (A.current.style.height = `${A.current.scrollHeight}px`), !0 === u && (A.current.style.height = null))
          }), [u, A, j]), (0, i.useEffect)((() => {
            const e = () => {
                M(!1), H(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, i.useEffect)((() => {
            M(!1), H(!0)
          }), [b]), (0, i.useEffect)((() => {
            if (z.current) {
              const {
                current: e
              } = z, a = window.getComputedStyle(e);
              L(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [z]), (0, i.useEffect)((() => {
            q(window.navigator.userAgent.includes("Mac"))
          }), []), (0, i.useEffect)((() => {
            z.current && f(z?.current?.scrollHeight >= n)
          }), [z, n]), (0, i.useEffect)((() => {
            k || (g(-1), d(!1))
          }), [k]), (0, i.useEffect)((() => {
            l && (u || H(!0), v && (m(!1), g(-1)))
          }), [l]), (0, i.useEffect)((() => {
            v && (l && d(!1), u || H(!0))
          }), [v]), null === w ? null : (0, E.jsxs)(dr.RemoveScroll, {
            enabled: !!k,
            removeScrollBar: !1,
            children: [(0, E.jsxs)("div", {
              className: [Hr.scMenu, k ? Hr.navOpen : ""].join(" "),
              "data-logged-in": w,
              "data-mac-browser": V,
              "data-scroll-mode": h,
              ref: z,
              "aria-hidden": !k,
              children: [(0, E.jsx)("button", {
                className: Hr.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  B(a)
                },
                onTouchMove: e => {
                  if (0 === G) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(G - a) > 1 && (B(0), M(!1))
                },
                children: (0, E.jsx)("img", {
                  className: Hr.dragHandle,
                  src: t(8128),
                  alt: r.formatMessage(cr.sc_menu_drag_handle)
                })
              }), w ? (0, E.jsx)(Ur, {
                sc: I,
                charListHidden: u,
                hideCharacterList: H,
                refCharacterListDesktop: A,
                menuPadding: P,
                longCharList: j,
                setLongCharList: T,
                isMobileMode: O,
                setIsMobileMode: R,
                location: a,
                onNavigate: s
              }) : (0, E.jsx)(Rr, {
                sc: I,
                navOpen: k,
                location: a,
                onNavigate: s
              })]
            }), (0, E.jsx)("div", {
              className: [Hr.scOverlay, k ? Hr.navOpen : ""].join(" "),
              "data-logged-in": w
            })]
          })
        }), or),
        Wr = t(8989),
        Xr = t(1764),
        Jr = (0, o.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, o.useIntl)(),
            {
              data: s
            } = D(),
            {
              charactersNeeded: n,
              currentCharId: r,
              navOpen: _,
              setNavOpen: c
            } = S(),
            {
              track: l
            } = $(),
            [d, g] = (0, i.useState)(null),
            [v, m] = (0, i.useState)(!1),
            [u, p] = (0, i.useState)(null),
            [h, f] = (0, i.useState)(!1),
            [b, w] = (0, i.useState)([]);
          (0, i.useEffect)((() => {
            w(s.characters[n] ?? [])
          }), [s, n]);
          const y = (0, i.useCallback)((e => {
            e.stopPropagation(), c(!_), 1 == !_ && a(null), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: _ ? "close" : "open"
            })
          }), [_]);
          return (0, i.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (b?.[r]?.mugshotUrl ?? s?.avatar) || Wr : Xr,
              t = ir(b?.[r]?.platform, "small") ?? null;
            p(t), g(a), m(e), f(!!b?.[r]?.mugshotUrl)
          }), [s, b, r, Wr, Xr]), (0, E.jsxs)("button", {
            className: "rockstargames-modules-core-headerdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": h,
            "aria-label": t.formatMessage(_ ? cr.sc_menu_close : cr.sc_menu_open),
            "aria-expanded": _,
            type: "button",
            onClick: y,
            "data-testid": "avaterMenuButton",
            children: [(0, E.jsx)("img", {
              className: "rockstargames-modules-core-headerce75eaa6d65692d36b60d31f3f660ff0",
              src: d || "",
              onError: () => {
                g(Wr)
              },
              alt: s?.nickname || ""
            }), v && null !== u && (0, E.jsx)("img", {
              className: "rockstargames-modules-core-headeraaf21e74a659089f743bb160bdf95046",
              src: u.src,
              alt: u.alt
            }), v && (0, E.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-headercf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": b?.[r]?.platform ?? null
            })]
          })
        }), or);
      var Kr = t(922);
      const Yr = (e, a, t, s) => ({
          event: e || "nav_click",
          link_url: a,
          text: t,
          element_placement: `Global Nav > ${s}`
        }),
        Zr = "https",
        Qr = "rockstargames.com",
        eo = () => {
          const e = se(),
            a = (() => {
              const e = (0, i.useContext)(ae);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            t = ne();
          return s => {
            const n = ((e, a) => {
              const {
                sites: t,
                currentSite: s
              } = a;
              return t[e.domain] ? new URL(`${Zr}://${t[e.domain]}.${Qr}`) : 0 === e.domain.indexOf("http") ? new URL(e.domain) : new URL(`${Zr}://${t[s?.subDomain||t.www]}.${Qr}`)
            })(s, e);
            if (!s.path) return new URL(n);
            const r = [
                ["username", t.nickname]
              ],
              i = ((e, a) => a.reduce(((e, a) => {
                let [t, s] = a;
                return e.replaceAll(`{${t}}`, s)
              }), e))(s.path, r),
              _ = "www" === s.domain && "www" !== e.currentSite.site ? ((e, a) => {
                if (!a || a.iso === o.englishLocale.iso) return e;
                const t = a.subdomaincom;
                return "/" === e[0] ? t + e : `${t}/${e}`
              })(i, a) : i;
            return new URL(_, n)
          }
        },
        ao = "nav-internal",
        to = "nav-external",
        so = "nav-dropdown",
        no = "nav-no-link",
        ro = "games-menu",
        oo = e => {
          let {
            children: a,
            location: t,
            className: s,
            isLegacy: n,
            label: r,
            type: _,
            target: c,
            gaEvent: l,
            gaText: d,
            gaBreadCrumb: g,
            dataTestId: v,
            onNavigate: m,
            ...u
          } = e;
          const p = (0, o.useIntl)(),
            {
              currentSite: h
            } = se(),
            {
              track: f
            } = $(),
            b = eo(),
            {
              dispatch: w
            } = (0, Kr.OH)(),
            y = (0, i.useMemo)((() => {
              const e = {};
              return "_blank" === c && (e["aria-label"] = p.formatMessage(Q.nav_opens_in_new_window, {
                text: r
              }), e.rel = "noopener"), e
            }), [r, c]);
          if (!t && _ === no && v) {
            const e = () => {
              f(Yr(l, "", d, g)), m?.(), w(v)
            };
            return (0, E.jsx)("button", {
              type: "button",
              className: s,
              onClick: () => e(),
              "data-testid": v,
              ...u,
              ...y,
              children: a
            })
          }
          if (!t) return null;
          const k = b(t),
            M = _ === to,
            x = M || h && h.site !== t.domain ? k.href : k.pathname + k.search + k.hash,
            C = Boolean(M || n || document.documentElement.classList.contains("legacyPage"));
          return (0, E.jsx)(q.Link, {
            className: s,
            target: c,
            to: x,
            onClick: () => (f(Yr(l, k.toString(), d, g)), void m?.()),
            reloadDocument: C,
            "data-testid": v,
            ...u,
            ...y,
            children: a
          })
        },
        io = {
          callToAction: "rockstargames-modules-core-headerecf742d361a6b5efa6e0408f2eabbc6a",
          highlight: "rockstargames-modules-core-headerf90edcc7ef61b82929857e6f05865cb9"
        },
        _o = e => {
          let {
            children: a,
            dataTestId: t,
            location: s,
            variant: n,
            gaEvent: r,
            gaText: o,
            target: i,
            onNavigate: _
          } = e;
          return (0, E.jsx)("div", {
            className: io.callToActionContainer,
            children: (0, E.jsx)(oo, {
              className: [io.callToAction, n ? io[n] : ""].join(" "),
              dataTestId: t,
              location: s,
              gaEvent: r,
              gaText: o,
              gaBreadCrumb: o,
              onNavigate: _,
              target: i,
              children: a
            })
          })
        },
        co = {
          targets: [{
            intlMessage: Q.search_target_games,
            tab: "games",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=games"
            }
          }, {
            intlMessage: Q.search_target_posts,
            tab: "posts",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=posts"
            }
          }, {
            intlMessage: Q.search_target_videos,
            tab: "videos",
            type: "",
            location: {
              domain: "www",
              path: "/search?q={query}&tab=videos"
            }
          }, {
            intlMessage: Q.search_target_community,
            tab: "socialClub",
            type: "nav-dropdown",
            targets: [{
              intlMessage: Q.search_target_users,
              type: "",
              location: {
                domain: "socialClub",
                path: "/members/{query}/"
              }
            }, {
              intlMessage: Q.search_target_crews,
              type: "",
              location: {
                domain: "socialClub",
                path: "/crews/{query}/"
              }
            }, {
              intlMessage: Q.search_target_jobs,
              type: "",
              location: {
                domain: "socialClub",
                path: "/jobs/{query}/"
              }
            }, {
              intlMessage: Q.search_target_user_photos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/photos/{query}/"
              }
            }, {
              intlMessage: Q.search_target_user_videos,
              type: "",
              location: {
                domain: "socialClub",
                path: "/videos/{query}/"
              }
            }]
          }]
        };
      var lo = t(3181);
      const go = {
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
        vo = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        mo = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        uo = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        po = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        ho = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        fo = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        bo = {
          pillBtn: "rockstargames-modules-core-headerd40bd9ca9e3bec29789402cc3d27e5ab",
          selected: "rockstargames-modules-core-headerf0d83df74574a40bd51b2498af9b27ed",
          pillButton: "rockstargames-modules-core-headercc62a16113d08de62c31d63561496f9d"
        },
        wo = e => {
          let {
            children: a,
            selected: t,
            ...s
          } = e;
          return (0, E.jsx)("button", {
            type: "button",
            className: [bo.pillButton, t ? bo.selected : ""].join(" "),
            ...s,
            children: a
          })
        };
      var yo = t(8588);
      const ko = {
          pillBtn: "rockstargames-modules-core-headera6b8422f9fc716439aa56b93f93652f0",
          selected: "rockstargames-modules-core-headerf52755050e003d486a6f8d76d99dfe99",
          subMenu: "rockstargames-modules-core-headerb1620ea4113a55160edd05134ef0ece0",
          fadeIn: "rockstargames-modules-core-headerf4532dc81267624cab8e8ffefb64bda0"
        },
        Mo = {
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
        xo = e => {
          let {
            openerRef: a,
            isOpen: t,
            isMobile: s,
            children: n
          } = e;
          const [r, o] = (0, i.useState)(null), {
            styles: _,
            attributes: c,
            forceUpdate: l
          } = (0, yo.usePopper)(a, r, {
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
          return (0, i.useEffect)((() => {
            l && l()
          }), [a, t, s]), (0, E.jsx)(lo.motion.div, {
            initial: "exit",
            animate: t ? "enter" : "exit",
            transition: go.quickFade,
            variants: Mo,
            className: [ko.subMenu].join(" "),
            style: {
              ..._.popper
            },
            ref: o,
            ...c.popper,
            children: n
          })
        },
        Co = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, E.jsx)("button", {
            type: "button",
            className: "rockstargames-modules-core-headerb33ba4e0df5612fe7208be0776f25f36",
            ...t,
            children: a
          })
        },
        jo = {
          backgroundElevation: "rockstargames-modules-core-headerd800b546fa3494304bc962ed09e22416",
          backgroundOverlay: "rockstargames-modules-core-headera688e4d2410812b50f0f850de70eceaa",
          backgroundVisible: "rockstargames-modules-core-headerba5c9db6ce25e4a08a698ce7bdf5c57d"
        },
        So = e => {
          let {
            children: a,
            isOpen: t,
            onClose: s,
            visible: n
          } = e;
          return t ? (0, E.jsxs)("div", {
            className: [jo.backgroundElevation].join(" "),
            onClick: s,
            children: [(0, E.jsx)("div", {
              className: [jo.backgroundOverlay, n ? jo.backgroundVisible : ""].join(" ")
            }), a]
          }) : null
        },
        To = e => {
          let {
            target: a,
            selected: t,
            selectedTarget: s,
            onClick: n,
            isMobile: r,
            ..._
          } = e;
          const c = (0, o.useIntl)(),
            [l, d] = (0, i.useState)(!1),
            [g, v] = (0, i.useState)(null);
          return a.type === so ? (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)("div", {
              ref: v,
              children: (0, E.jsxs)(wo, {
                "aria-label": c.formatMessage(Q.search_target_aria_label, {
                  target: s && a?.targets?.indexOf(s) >= 0 ? c.formatMessage(s.intlMessage) : c.formatMessage(a.intlMessage)
                }),
                selected: t,
                onClick: () => d(!l),
                ..._,
                children: [s && a?.targets?.indexOf(s) >= 0 ? c.formatMessage(s.intlMessage) : c.formatMessage(a.intlMessage), (0, E.jsx)("img", {
                  src: po,
                  alt: ""
                })]
              }, a.intlMessage.defaultMessage)
            }), (0, E.jsx)(So, {
              isOpen: l,
              onClose: () => d(!1),
              children: (0, E.jsx)(xo, {
                isOpen: l,
                openerRef: g,
                isMobile: r,
                children: a.targets?.map((e => (0, E.jsx)(Co, {
                  "aria-label": c.formatMessage(Q.search_target_aria_label, {
                    target: c.formatMessage(e.intlMessage)
                  }),
                  onClick: () => n(e),
                  children: c.formatMessage(e.intlMessage)
                }, e.intlMessage.defaultMessage)))
              })
            })]
          }) : (0, E.jsx)(wo, {
            "aria-label": c.formatMessage(Q.search_target_aria_label, {
              target: c.formatMessage(a.intlMessage)
            }),
            selected: t,
            onClick: () => n(a),
            ..._,
            children: c.formatMessage(a.intlMessage)
          }, a.tab)
        },
        Io = {
          secondaryNavigationSlide: "rockstargames-modules-core-headerc4dfb9ead12cfac67a6226d27bab760d",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerd55662a9b83549c6e6e5343df6a41cef",
          open: "rockstargames-modules-core-headerb972f916c7df71df6558067b10be5fc7"
        },
        Ao = e => {
          let {
            children: a,
            isOpen: t,
            onMouseClick: s,
            onEscapeKey: n,
            onMouseAway: r,
            style: o
          } = e;
          const _ = t ? [Io.open] : [],
            c = e => {
              "Escape" === e.key && n?.()
            };
          return (0, i.useEffect)((() => (t ? window.addEventListener("keyup", c) : window.removeEventListener("keyup", c), () => window.removeEventListener("keyup", c))), [c, t]), t ? (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)("div", {
              className: [Io.secondaryNavigationOverlay, ..._].join(" "),
              onClick: s,
              onMouseEnter: r,
              style: {
                ...o
              }
            }), a && (0, E.jsx)("div", {
              className: [Io.secondaryNavigationSlide, ..._].join(" "),
              children: a
            })]
          }) : null
        },
        No = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: s,
            setIsSearchOpen: n,
            setSearchQuery: r,
            isSearchOpen: _,
            searchQuery: c,
            selectedTarget: l,
            selectedTargetIndex: d,
            isSearchPage: g,
            searchError: v,
            maxSearchLength: m
          } = e;
          const u = (0, o.useIntl)(),
            p = (0, i.useRef)(null),
            h = () => {
              n(), g || r(""), p?.current?.focus()
            },
            f = () => {
              g || n()
            };
          return (0, i.useEffect)((() => {
            _ ? p?.current?.focus() : p?.current?.blur()
          }), [_]), (0, E.jsxs)("div", {
            children: [(0, E.jsx)("button", {
              className: "rockstargames-modules-core-headerd226f3a8e00dc78d0caa67c204873df4",
              type: "button",
              onClick: h,
              "data-testid": "searchToggle",
              children: (0, E.jsx)("img", {
                src: mo,
                alt: u.formatMessage(_ ? Q.search_close_button : Q.search_open_button)
              })
            }), (0, E.jsx)(lo.AnimatePresence, {
              children: _ && (0, E.jsxs)("div", {
                children: [(0, E.jsx)(Ao, {
                  isOpen: !g,
                  onEscapeKey: f,
                  onMouseClick: f
                }), (0, E.jsxs)(lo.motion.div, {
                  className: "rockstargames-modules-core-headerfb4f6f6837739b01f2c3798a5a4e3d02",
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
                    transition: go.springClose
                  },
                  transition: go.springOpen,
                  "data-testid": "searchBar",
                  children: [(0, E.jsxs)(lo.motion.div, {
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
                    className: "rockstargames-modules-core-headerd38a8863c7cab6a55bfe8b43d289cae9",
                    children: [(0, E.jsx)("div", {
                      className: "rockstargames-modules-core-headerfa57c35a28db99ec0fe1c58d7170795f",
                      children: (0, E.jsx)("button", {
                        type: "button",
                        onClick: a,
                        children: (0, E.jsx)("img", {
                          src: mo,
                          alt: u.formatMessage(Q.search_action)
                        })
                      })
                    }), (0, E.jsx)("div", {
                      className: "rockstargames-modules-core-headerbf19d6467e0bc416538de1be055f4735",
                      children: (0, E.jsx)("input", {
                        type: "textfield",
                        value: c,
                        onChange: e => r(e.target.value),
                        onKeyUp: t,
                        placeholder: u.formatMessage(Q.search_placeholder),
                        ref: p,
                        enterKeyHint: "search",
                        maxLength: m
                      })
                    }), (0, E.jsx)("div", {
                      className: "rockstargames-modules-core-headerae0e7e751af9776cbd6073eeb13e0017",
                      children: co.targets.map(((e, a) => (0, E.jsx)(To, {
                        target: e,
                        onClick: e => s(e, a),
                        selected: d === a,
                        selectedTarget: l
                      }, e.tab)))
                    }), !g && (0, E.jsx)("div", {
                      className: "rockstargames-modules-core-headercb404ff377fab9349976f49052d5fe0a",
                      children: (0, E.jsx)("button", {
                        type: "button",
                        onClick: h,
                        children: (0, E.jsx)("img", {
                          src: uo,
                          alt: u.formatMessage(Q.search_close_button)
                        })
                      })
                    })]
                  }), v && (0, E.jsx)("div", {
                    className: "rockstargames-modules-core-headerf8f7fe79059fec4251df0d552d355b49",
                    "aria-live": "polite",
                    children: v
                  })]
                })]
              })
            })]
          })
        },
        Po = {
          search: "rockstargames-modules-core-headerae9a265dd23ff7067e04fb71d8ec62a7",
          targetsOuter: "rockstargames-modules-core-headerc3ca0e82d05ea1ef06d46fa7664221a9",
          hasScroll: "rockstargames-modules-core-headerecac7b9d5cd36fa0150e7550b0d59733",
          targets: "rockstargames-modules-core-headercdf787db5533c58e645d2f75cb318b9b",
          errorMessage: "rockstargames-modules-core-headerf89a9a2478becd89284b87aefdfff682"
        },
        Lo = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: t,
            handleSearchTargetSelect: s,
            setIsSearchOpen: n,
            setSearchQuery: r,
            isSearchOpen: _,
            searchQuery: c,
            selectedTarget: l,
            selectedTargetIndex: d,
            isSearchPage: g,
            searchError: v,
            maxSearchLength: m
          } = e;
          const u = (0, o.useIntl)(),
            p = (0, i.useRef)(null),
            [h, f] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            let e, a, t = !1;
            const s = s => {
                p && p.current && (s.preventDefault(), t = !0, e = s.pageX - p.current.offsetLeft, a = p.current.scrollLeft)
              },
              n = () => {
                t = !1
              },
              r = s => {
                if (t && (s.preventDefault(), p && p.current)) {
                  const t = s.pageX - p.current.offsetLeft - e;
                  p.current.scrollLeft = a - t
                }
              },
              o = () => {
                if (p && p.current) {
                  const e = p.current.scrollLeft;
                  f(e > 20)
                }
              };
            if (p && p.current) {
              const e = p.current;
              e.addEventListener("mousedown", s), e.addEventListener("mouseup", n), e.addEventListener("mouseleave", n), e.addEventListener("mousemove", r), e.addEventListener("scroll", o)
            }
            return () => {
              p && p.current && (p.current.removeEventListener("mousedown", s), p.current.removeEventListener("mouseup", n), p.current.removeEventListener("mouseleave", n), p.current.removeEventListener("mousemove", r), p.current.removeEventListener("scroll", o))
            }
          })), (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsxs)(lo.motion.div, {
              className: Po.search,
              variants: vo,
              transition: go.staggerFade,
              "data-testid": "searchBar",
              children: [(0, E.jsx)("button", {
                type: "button",
                onClick: () => _ ? a() : n(!0),
                children: (0, E.jsx)("img", {
                  src: mo,
                  alt: u.formatMessage(Q.search_action)
                })
              }), (0, E.jsx)("input", {
                type: "text",
                value: c,
                onChange: e => r(e.target.value),
                onFocus: () => n(!0),
                onKeyUp: t,
                placeholder: u.formatMessage(Q.search_placeholder),
                enterKeyHint: "search",
                maxLength: m
              }), _ && !g && (0, E.jsx)("button", {
                type: "button",
                onClick: () => n(!1),
                children: (0, E.jsx)("img", {
                  src: uo,
                  alt: u.formatMessage(Q.search_close_button)
                })
              })]
            }), _ && (0, E.jsxs)("div", {
              className: [Po.targetsOuter, h ? Po.hasScroll : ""].join(" "),
              children: [(0, E.jsx)("div", {
                className: Po.targets,
                ref: p,
                children: co.targets.map(((e, a) => (0, E.jsx)(To, {
                  target: e,
                  selected: d === a,
                  selectedTarget: l,
                  onClick: e => s(e, a),
                  isMobile: !0
                }, e.tab)))
              }), v && (0, E.jsx)("div", {
                className: Po.errorMessage,
                "aria-live": "polite",
                children: v
              })]
            })]
          })
        },
        zo = "global-nav-search",
        Eo = e => {
          let {
            ...a
          } = e;
          const {
            windowWidth: t
          } = (0, c.G4)(), {
            pathname: s,
            search: n
          } = (0, q.useLocation)(), {
            currentSite: r
          } = se(), [_] = (0, q.useSearchParams)(), [l, d] = (0, i.useState)(""), [g, v] = re(), [m, u] = (0, i.useState)(0), [p, h] = (0, i.useState)(co.targets[0]), [f, b] = (0, i.useState)(""), w = (() => {
            const e = (0, q.useNavigate)(),
              {
                currentSite: a
              } = se(),
              t = eo();
            return (s, n) => {
              const r = n.domain !== a?.site,
                o = {
                  ...n,
                  path: n.path?.replace("{query}", s)
                },
                i = r ? t(o).href : o.path;
              return r ? window.location.href = i : e ? e(i) : window.history.pushState({}, "", i), []
            }
          })(), y = oe(), k = (0, o.useIntl)(), M = t < 1024, x = r?.site === Z.C.www && y || g === zo, C = /[*?\\<>&%@:~]/g, j = e => {
            if ("" === l) return !1;
            e.length > 100 && d(e.substring(0, 100));
            const a = e.split(/\s+/),
              t = e.match(C) || !1;
            return a.every((e => e.length < 3)) ? (b(k.formatMessage(Q.nav_search_error_too_short, {
              count: 3
            })), !1) : t ? (b(k.formatMessage(Q.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (b(""), !0)
          }, S = () => {
            j(l) && w(l, p.location)
          };
          (0, i.useEffect)((() => {
            const e = r?.site === Z.C.www && y,
              a = r?.site === Z.C.socialClub && y;
            if (y || (u(0), h(co.targets[0])), e) {
              const e = _.get("q"),
                a = _.get("tab");
              if (e && (d(e), j(e)), a) {
                const e = co.targets.findIndex((e => e.tab === a));
                u(e), h(co.targets[e])
              }
            }
            if (a) {
              const e = co.targets.findIndex((e => e.tab === Z.C.socialClub)),
                a = co.targets[e].targets,
                t = a?.find((e => e.location.path.startsWith(s))),
                n = s.split("/")[2];
              n && d(n), u(e), t && h(t)
            }
          }), [s, n, y]);
          const T = {
            handleSearch: S,
            handleSearchKeypress: e => {
              b(""), "Enter" === e.key && S()
            },
            handleSearchTargetSelect: (e, a) => {
              h(e), u(a), j(l) && w(l, e.location)
            },
            setIsSearchOpen: () => v(zo),
            setSearchQuery: d,
            isSearchOpen: x,
            searchQuery: l,
            selectedTarget: p,
            selectedTargetIndex: m,
            isSearchPage: y,
            searchError: f,
            maxSearchLength: 100
          };
          return M ? (0, E.jsx)(Lo, {
            ...T,
            ...a
          }) : (0, E.jsx)(No, {
            ...T
          })
        },
        {
          W1: Oo,
          IU: Ro
        } = n,
        Go = e => {
          let {
            cta: a,
            includeSearch: t = !0,
            isMobile: s
          } = e;
          const n = (0, o.useIntl)(),
            r = (0, q.useLocation)(),
            i = (0, q.useNavigate)(),
            [, _] = re();
          return (0, E.jsxs)("div", {
            className: "rockstargames-modules-core-headerc1450353981f399895c68b230b47ea1d",
            "data-testid": "actions",
            children: [a && (0, E.jsx)("div", {
              children: (0, E.jsx)(_o, {
                variant: a.variant,
                location: a.location,
                dataTestId: a.dataTestId,
                gaEvent: a.ga,
                gaText: a.text,
                target: a.target,
                children: n.formatMessage(a.intlMessage)
              })
            }), t && (0, E.jsx)(Eo, {}), (0, E.jsxs)("div", {
              children: [(0, E.jsx)(Ro, {
                setOtherHeaderDropdowns: _
              }), !s && (0, E.jsx)(Oo, {
                location: r,
                onNavigate: i
              })]
            })]
          })
        },
        Bo = {
          navigationItem: "rockstargames-modules-core-headere50667e94e6d02233206aace6657cf5e",
          active: "rockstargames-modules-core-headeree0fb39055c8a14e1a7eea7c275a8a6a"
        },
        Do = ["pc", "ps4", "ps5", "xboxone", "xboxsx"],
        Vo = e => e.replace(/\?.*$/, ""),
        qo = e => {
          const {
            pathname: a
          } = (0, q.useLocation)(), {
            currentSite: t
          } = se(), {
            data: s,
            loggedIn: n
          } = D();
          if (!e || !e.length) return [];
          const r = e.map((e => {
            let r, {
              domain: o,
              path: i,
              end: _ = !1,
              additionalPathMatches: c
            } = e;
            if (o !== t?.site) return null;
            if (t?.site === Z.C.socialClub) {
              const e = RegExp(`/(${Do.join("|")})`);
              r = a.match(e) ? a.replace(e, "") : a
            } else r = a;
            let l = Vo(i || "");
            n && (l = l.replace("{username}", s.nickname));
            const d = (0, q.matchPath)({
              caseSensitive: !1,
              end: _ ?? !1,
              path: l
            }, Vo(r));
            let g;
            return c && (g = (0, q.matchPath)({
              caseSensitive: !1,
              end: _ ?? !1,
              path: c
            }, Vo(r))), d || g
          }));
          return r
        },
        Fo = e => {
          let {
            text: a,
            type: t,
            location: s,
            isLegacy: n,
            gaText: r,
            gaBreadCrumb: o,
            dataTestId: i,
            target: _,
            ...c
          } = e;
          const [l] = qo(s ? [{
            domain: s?.domain,
            path: s?.path,
            end: "nav-internal" === t,
            additionalPathMatches: s?.additionalPathMatches
          }] : []), d = t === to;
          return (0, E.jsxs)(oo, {
            className: [Bo.navigationItem, l ? Bo.active : ""].join(" "),
            location: s,
            isLegacy: n,
            type: t,
            target: _,
            gaText: r,
            gaBreadCrumb: o,
            dataTestId: i,
            label: a,
            ...c,
            children: [a, d && (0, E.jsx)("img", {
              alt: "",
              src: ho
            })]
          })
        },
        Uo = {
          navigationDropdownButton: "rockstargames-modules-core-headerdc26a42cb8f2a04a5d6deb4fd0a9b7e9",
          open: "rockstargames-modules-core-headerc051410e79c406e32579e218a95cef4f",
          active: "rockstargames-modules-core-headerf683165f46a5fe92a34ea1d21d3f74de"
        },
        Ho = e => {
          let {
            text: a,
            isOpen: t,
            onClick: s,
            buttonRef: n,
            navChildren: r,
            gaText: o,
            gaBreadCrumb: _,
            dataTestId: c
          } = e;
          const {
            track: l
          } = $(), d = (0, i.useCallback)((() => {
            l(Yr(void 0, "", o, _)), s()
          }), [o, _, t, s]), g = (0, i.useMemo)((() => {
            if (!r) return;
            const e = (a, t) => {
              let s;
              return s = t.children ? t.children.reduce(e, []) : t?.location ? [t.location] : [], [...a, ...s]
            };
            return r.reduce(e, [])
          }), [r]), v = qo(g), m = v?.some(Boolean);
          return (0, E.jsx)("div", {
            className: Uo.navigationDropdown,
            ref: n,
            children: (0, E.jsxs)("button", {
              className: [Uo.navigationDropdownButton, m ? Uo.active : "", t ? Uo.open : ""].join(" "),
              type: "button",
              "data-testid": c || "navDropdown",
              onClick: d,
              children: [a, (0, E.jsx)("img", {
                src: po,
                alt: ""
              })]
            })
          })
        },
        $o = {
          img: "rockstargames-modules-core-headere3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-modules-core-headerc3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, c.pT)(t(3202));
      const Wo = e => {
          let {
            isWideCard: a = !1,
            size: s = 640,
            title: n,
            titleSlug: r
          } = e;
          const {
            isMobile: o
          } = (0, c.G4)(), _ = (0, i.useMemo)((() => {
            let e = "";
            return a && (e = o ? t(7426)(`./${r}/mobile.png`) : t(5392)(`./${r}/desktop.png`)), e || (e = t(2781)(`./${r}.jpg`), e += `?im=Resize=${s}`), e
          }), [o, r]), [l] = (0, c.OG)(_);
          return (0, E.jsx)("div", {
            role: "img",
            "aria-label": n,
            className: [$o.img, l ? $o.startAnimation : "", a ? $o.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${_})`
            }
          })
        },
        Xo = e => {
          let {
            title: a,
            titleSlug: t,
            location: s,
            gaText: n,
            gaBreadCrumb: r,
            onNavigate: o,
            dataTestId: i,
            ..._
          } = e;
          return (0, E.jsx)("div", {
            className: "rockstargames-modules-core-headerf8e63c7068ace24336f7b48c9d6cd2e6",
            children: (0, E.jsx)(oo, {
              location: s,
              gaText: n,
              gaBreadCrumb: r,
              onNavigate: o,
              dataTestId: i,
              ..._,
              children: (0, E.jsx)(Wo, {
                title: a,
                titleSlug: t
              })
            })
          }, a)
        },
        Jo = {
          domain: Z.C.www,
          path: "/games"
        },
        Ko = () => {
          const e = (0, o.useIntl)();
          return (0, E.jsxs)("div", {
            className: "rockstargames-modules-core-headerd5dcdd7274b08c65a7c69b07573338b2",
            "data-testid": "gamesMenu",
            children: [(0, E.jsxs)("div", {
              className: "rockstargames-modules-core-headerb3f15c0996b9765ffe67b7d303549606",
              children: [(0, E.jsx)("div", {
                children: (0, E.jsx)("h2", {
                  className: "rockstargames-modules-core-headerd69ae3bdbb3c75b98c4864d0d647da03",
                  children: e.formatMessage(Q.games_menu_featured)
                })
              }), (0, E.jsx)("div", {
                children: (0, E.jsxs)(oo, {
                  className: "rockstargames-modules-core-headerf1c885f72a2db68593fadb8420f4dd6a",
                  gaText: Q.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${Q.games_menu_view_all.defaultMessage}`,
                  location: Jo,
                  children: [e.formatMessage(Q.games_menu_view_all), (0, E.jsx)("img", {
                    src: fo,
                    alt: e.formatMessage(Q.nav_view_all_games)
                  })]
                })
              })]
            }), (0, E.jsx)("div", {
              className: "rockstargames-modules-core-headerbe4818c660976d73fe8738e900a44374",
              children: ie.map((a => (0, E.jsx)(Xo, {
                title: e.formatMessage(a.intlMessage),
                titleSlug: a.titleSlug,
                gaText: a.intlMessage.defaultMessage,
                gaBreadCrumb: `Games > ${a.intlMessage.defaultMessage}`,
                location: a.location,
                dataTestId: a.dataTestId
              }, a.titleSlug)))
            })]
          })
        },
        Yo = {
          subMenuDropdownContainer: "rockstargames-modules-core-headeraa54cc869e1f97baf8249ee72961e756",
          nested: "rockstargames-modules-core-headere25c50dd00a903bcf5d62dd737de9427",
          subMenuDropdownButton: "rockstargames-modules-core-headerfbd8e3437f72749418b1be14ac1cb56d",
          open: "rockstargames-modules-core-headercde677558948e26d5b42358b4c4e875b",
          openChevron: "rockstargames-modules-core-headerb5946a4a553aa1e7f8892ba041e82b86",
          subMenuDropdownItems: "rockstargames-modules-core-headerf61380f4f154a2a66dabf46e45b5416f"
        },
        Zo = {
          subMenuItem: "rockstargames-modules-core-headerf8b372224fa93e29ef79b8d06ae47b26",
          nested: "rockstargames-modules-core-headera683f12d9b638e8165a593338ff1e44a"
        },
        Qo = {
          navigationLink: "rockstargames-modules-core-headerc3ea8a712b2ab6324131811e7dbb7e3f",
          active: "rockstargames-modules-core-headerd770bae213bc018bda451f39b87a1893"
        },
        ei = e => [Qo.navigationLink, e ? Qo.active : ""].join(" "),
        ai = e => {
          let {
            text: a,
            type: t,
            location: s,
            className: n,
            isLegacy: r,
            target: o,
            nested: i,
            gaText: _,
            gaBreadCrumb: c,
            dataTestId: l,
            ...d
          } = e;
          const g = t === to,
            v = s ? [{
              ...s,
              end: t === ao
            }] : [],
            [m] = qo(v);
          return (0, E.jsxs)(oo, {
            className: [ei(Boolean(m)), Zo.subMenuItem, i ? Zo.nested : "", n].join(" "),
            location: s,
            isLegacy: r,
            type: t,
            target: o,
            gaText: _,
            gaBreadCrumb: c,
            dataTestId: l,
            label: a,
            "data-ui-name": "sub-menu-item",
            ...d,
            children: [a, g && (0, E.jsx)("img", {
              alt: "",
              src: ho
            })]
          })
        },
        ti = "nav-dropdown",
        si = e => {
          let {
            text: a,
            navChildren: t,
            gaText: s,
            gaBreadCrumb: n,
            nested: r,
            dataTestId: _,
            subMenuId: c,
            toggleOpen: l,
            isOpen: d,
            ...g
          } = e;
          const [v] = re(), m = (0, o.useIntl)(), {
            track: u
          } = $(), p = (0, i.useRef)(null), [h, f] = (0, i.useState)(null);
          (0, i.useEffect)((() => {
            null === v && l(null)
          }), [v]);
          const b = e => {
              u(Yr(void 0, "", s, n)), l(e ? c : null)
            },
            w = e => {
              "ArrowLeft" === e.code && (b(!1), p?.current?.focus())
            };
          return (0, E.jsxs)("div", {
            className: [Yo.subMenuDropdownContainer, r ? Yo.nested : ""].join(" "),
            ...g,
            "data-ui-name": "sub-menu-item",
            children: [(0, E.jsxs)("button", {
              type: "button",
              className: [Yo.subMenuDropdownButton, r ? Yo.nested : "", d ? Yo.open : ""].join(" "),
              onClick: () => b(!d),
              onKeyUp: e => {
                "Enter" === e.code && b(!0), "ArrowRight" === e.code && b(!0), "ArrowLeft" === e.code && b(!1)
              },
              ref: p,
              "data-testid": _,
              children: [a, (0, E.jsx)("img", {
                src: po,
                className: Yo.openChevron,
                alt: ""
              })]
            }), (0, E.jsx)(lo.AnimatePresence, {
              children: d && t && (0, E.jsx)(lo.motion.div, {
                className: Yo.subMenuDropdownItems,
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
                transition: go.springOpen,
                children: t.map((e => e.type === ti ? (0, E.jsx)(si, {
                  text: m.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${n} > ${e.intlMessage.defaultMessage}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: h === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: f
                }, e.intlMessage.defaultMessage) : (0, E.jsx)(ai, {
                  text: m.formatMessage(e.intlMessage),
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
        ni = si,
        ri = {
          show: {
            height: "auto",
            zIndex: 101,
            display: "block",
            visibility: "visible",
            transition: {
              ...go.springOpen
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
              ...go.springClose
            }
          }
        },
        oi = e => {
          let {
            intlMessage: a,
            type: t,
            location: s,
            navChildren: n,
            isLegacy: r,
            target: _,
            gaBreadCrumb: c,
            navKey: l,
            isHidden: d,
            dataTestId: g,
            ...v
          } = e;
          const m = (0, o.useIntl)(),
            [u, p] = (0, i.useState)(null),
            h = (0, q.useLocation)(),
            [f, b] = re(),
            [w, y] = (0, i.useState)(null),
            k = f === l,
            M = {
              ...k ? {
                visibility: "visible",
                display: "block"
              } : {
                visibility: "hidden",
                display: "none"
              }
            };
          (0, i.useEffect)((() => {
            b(null)
          }), [h.pathname, h.key]);
          const x = c ? `${c} > ${a.defaultMessage}` : a.defaultMessage;
          return t === so ? (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(Ho, {
              text: m.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: x,
              onClick: () => b(l),
              isOpen: k,
              buttonRef: d ? void 0 : p,
              navChildren: n,
              dataTestId: g,
              ...v
            }), !d && (0, E.jsxs)(E.Fragment, {
              children: [(0, E.jsx)(Ao, {
                isOpen: k,
                onMouseClick: () => b(null),
                onEscapeKey: () => b(null)
              }), (0, E.jsx)(xo, {
                isOpen: k,
                openerRef: u,
                children: n?.map((e => e.type === so ? (0, E.jsx)(ni, {
                  text: m.formatMessage(e.intlMessage),
                  navChildren: e.children,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${x} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  isOpen: w === `desktop-submenu-${e.intlMessage.defaultMessage}`,
                  toggleOpen: y
                }, `desktop-submenu-${e.intlMessage.defaultMessage}`) : (0, E.jsx)(ai, {
                  location: e.location,
                  text: m.formatMessage(e.intlMessage),
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `${x} > ${e.intlMessage.defaultMessage}`,
                  dataTestId: e.dataTestId
                }, e.intlMessage.defaultMessage)))
              })]
            })]
          }) : t === ro ? (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(Ho, {
              text: m.formatMessage(a),
              gaText: a.defaultMessage,
              gaBreadCrumb: c ? `${c} > ${a.defaultMessage}` : a.defaultMessage,
              onClick: () => b(l),
              isOpen: k,
              dataTestId: g,
              ...v
            }), !d && (0, E.jsx)(Ao, {
              isOpen: !0,
              onMouseClick: () => b(null),
              onEscapeKey: () => b(null),
              style: M,
              children: (0, E.jsx)(lo.motion.div, {
                initial: "hidden",
                animate: k ? "show" : "hidden",
                variants: ri,
                children: (0, E.jsx)(Ko, {})
              })
            })]
          }) : s || t === no ? (0, E.jsx)(Fo, {
            location: s,
            type: t,
            text: m.formatMessage(a),
            isLegacy: r,
            target: _,
            gaText: a.defaultMessage.toLowerCase(),
            gaBreadCrumb: c ? `${c} > ${a.defaultMessage}` : a.defaultMessage,
            dataTestId: g,
            ...v
          }) : null
        },
        ii = e => {
          let {
            links: a
          } = e;
          const [t, s] = (0, i.useState)(a), [n, r] = (0, i.useState)([]), o = (0, i.useRef)(null), _ = (0, i.useRef)(null), c = (0, i.useCallback)((() => {
            const e = _.current;
            if (!e || !a.length) return;
            const {
              children: t
            } = e;
            let n = 0;
            const o = Array.from(t).map(((e, a) => {
                const t = e.getBoundingClientRect().top;
                return 0 === a && (n = t), t
              })),
              i = o.filter((e => e !== n)).length,
              c = o.findIndex((e => e > n));
            let l = c;
            c > 0 && (l = c - 1), i ? (s(a.slice(0, l)), r(a.slice(l))) : (s(a), r([]))
          }), [a, _?.current]);
          (0, i.useEffect)((() => {
            const e = new ResizeObserver(c);
            return _?.current && e.observe(_.current), () => {
              _?.current && e.unobserve(_.current)
            }
          }), [a, _?.current]);
          const l = (0, i.useMemo)((() => (0, E.jsx)("ul", {
            ref: _,
            className: "rockstargames-modules-core-headered1144ed29240db18797c0a55e9d9068",
            "aria-hidden": "true",
            children: a.map((e => (0, E.jsx)("li", {
              children: (0, E.jsx)(oi, {
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
          return 0 === a.length ? null : (0, E.jsxs)("nav", {
            className: "rockstargames-modules-core-headerdf816207ab84caa47e24b7e68b62a8c1",
            children: [(0, E.jsxs)("ul", {
              ref: o,
              children: [t.map((e => (0, E.jsx)("li", {
                children: (0, E.jsx)(oi, {
                  intlMessage: e.intlMessage,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, `desktop-nav-link-${e.text}`))), n.length > 0 && (0, E.jsx)("li", {
                children: (0, E.jsx)(oi, {
                  intlMessage: Q.nav_more_dropdown,
                  type: so,
                  navChildren: n,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), l]
          })
        },
        _i = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        ci = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
        li = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
        di = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
        gi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
        vi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
        mi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
        ui = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg",
        pi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
        hi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
        fi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a7dfd2058127cb6f5adca6c9b1d91cc.png",
        bi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
        wi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
        yi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d2753ceddb2213d956d51d369985513.svg",
        ki = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
        Mi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
        xi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ccc721c72fc5553108c7e70b0778dba.svg",
        Ci = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
        ji = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
        Si = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63c149607e42c3f7a8988ef21d53ec97.svg",
        Ti = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
        Ii = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
        Ai = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/790f72b723ee040bae9e43e3d2785c89.svg",
        Ni = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
        Pi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
        Li = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
        zi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
        Ei = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
        Oi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
        Ri = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
        Gi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
        Bi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
        Di = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
        Vi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
        qi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
        Fi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
        Ui = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        Hi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
        $i = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
        Wi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
        Xi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
        Ji = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
        Ki = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
        Yi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
        Zi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
        Qi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
        e_ = e => r[e] ? r[e] : null,
        a_ = () => (0, E.jsx)("div", {
          className: "rockstargames-modules-core-headerf15e21b60f6e58c4f63eca7d1cab0451"
        }),
        t_ = {
          quickAccess: "rockstargames-modules-core-headere10da506585d46755afe459c835eaafe",
          link: "rockstargames-modules-core-headerb212c9ace7945abdb95fcd256bb30ffb"
        },
        s_ = () => {
          const {
            windowWidth: e
          } = (0, c.G4)(), a = e < 1024, t = {
            hidden: {
              y: "100%",
              transition: go.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ...go.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * go.hamburgerOpen.duration
              }
            }
          }, s = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: go.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: go.staggerFade
            }
          }, n = (0, o.useIntl)(), r = {
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
          }, i = "Quick Access";
          return (0, E.jsxs)(lo.motion.ul, {
            className: t_.quickAccess,
            variants: a ? t : vo,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: a ? null : go.quickFade,
            children: [(0, E.jsx)(lo.motion.li, {
              variants: a ? s : null,
              children: (0, E.jsxs)(oo, {
                location: r.home,
                className: [ei(), t_.link].join(" "),
                gaText: Q.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${i} > ${Q.nav_quick_access_home.defaultMessage}`,
                children: [(0, E.jsx)("img", {
                  alt: "Rockstar Games",
                  src: Ui
                }), (0, E.jsx)(o.FormattedMessage, {
                  ...Q.nav_quick_access_home
                })]
              })
            }), (0, E.jsx)(lo.motion.li, {
              variants: a ? s : null,
              children: (0, E.jsxs)(oo, {
                location: r.games,
                className: [ei(), t_.link].join(" "),
                gaText: Q.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${i} > ${Q.nav_quick_access_games.defaultMessage}`,
                children: [(0, E.jsx)("img", {
                  alt: n.formatMessage(Q.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, E.jsx)(o.FormattedMessage, {
                  ...Q.nav_quick_access_games
                })]
              })
            }), (0, E.jsx)(lo.motion.li, {
              variants: a ? s : null,
              children: (0, E.jsxs)(oo, {
                location: r.newswire,
                className: [ei(), t_.link].join(" "),
                gaText: Q.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${i} > ${Q.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, E.jsx)("img", {
                  alt: n.formatMessage(Q.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, E.jsx)(o.FormattedMessage, {
                  ...Q.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        n_ = "quick-access-menu",
        r_ = e => {
          let {
            site: a,
            brand: t,
            hideRockstarBrand: s,
            hideQuickAccess: n
          } = e;
          const r = (0, o.useIntl)(),
            {
              windowWidth: _
            } = (0, c.G4)(),
            [l, d] = (0, i.useState)(null),
            [g, v] = (0, i.useState)(null),
            [m, u] = re(),
            p = m === n_,
            h = n ? Q.nav_rockstargames_home : Q.nav_rockstargames_logo,
            f = _ < 1024,
            {
              styles: b,
              attributes: w,
              forceUpdate: y
            } = (0, yo.usePopper)(l, g, {
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
          return (0, i.useEffect)((() => {
            y?.()
          }), [l, p]), (0, E.jsxs)("div", {
            className: "rockstargames-modules-core-headerfce8a05cdd77e8b33cca9a518ece5aec",
            children: [!s && (0, E.jsxs)("div", {
              className: "rockstargames-modules-core-headerceabc44289e14972333f66749165cd72",
              children: [(f || n) && (0, E.jsx)(oo, {
                location: {
                  domain: "www",
                  path: "/"
                },
                gaText: Q.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: Q.nav_rockstargames_home.defaultMessage,
                "aria-label": r.formatMessage(h),
                children: (0, E.jsx)(a_, {})
              }), !f && !n && (0, E.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headerdb633ee24731ecefa31fe73e3f289bb3",
                onClick: () => u(n_),
                "aria-label": r.formatMessage(h),
                ref: d,
                children: (0, E.jsx)(a_, {})
              }), p && !n && (0, E.jsxs)(E.Fragment, {
                children: [(0, E.jsx)(Ao, {
                  isOpen: p,
                  onEscapeKey: () => u(null),
                  onMouseClick: () => u(null)
                }), (0, E.jsx)("div", {
                  className: "rockstargames-modules-core-headerf46ca1feb1a75b60741ea5a615b7c9e1",
                  style: {
                    ...b.popper
                  },
                  ref: v,
                  ...w.popper,
                  children: (0, E.jsx)(s_, {})
                })]
              })]
            }), t && (0, E.jsxs)(E.Fragment, {
              children: [!s && (0, E.jsx)("div", {
                className: "rockstargames-modules-core-headerc8b040d96549e8374b289e1303fc45a3"
              }), (0, E.jsx)("div", {
                className: "rockstargames-modules-core-headerc1e1bf789b40364f71ec35ca49735c22",
                children: (0, E.jsx)("img", {
                  className: "rockstargames-modules-core-headerf3a7d56bc3499db5cf274507b53554d4",
                  "data-brand": a,
                  alt: a,
                  src: e_(t)
                })
              })]
            })]
          })
        },
        o_ = {
          header: "rockstargames-modules-core-headerd60998ee5f012533d42a89e559f2e182",
          fluid: "rockstargames-modules-core-headerb8d49fff36920ca525b5305835b52c36",
          fixed: "rockstargames-modules-core-headerb2d310bb51037a6b2c43a37f53206fbe",
          title: "rockstargames-modules-core-headercbbd88537091068c08752343905a56ef",
          quickAccessWrapper: "rockstargames-modules-core-headerf4ea6eea27744b1e94def2b4d8be2d69"
        },
        i_ = e => {
          let {
            headerRef: a,
            data: t
          } = e;
          const s = (0, i.useMemo)((() => {
              const {
                currentSite: e
              } = (0, Z.A)();
              if (e?.site === Z.C.socialClub) return {
                zIndex: 8600
              }
            }), []),
            n = rr(t.links);
          return (0, E.jsxs)("header", {
            ref: a,
            className: [o_.header, o_.fixed].join(" "),
            style: s,
            children: [(0, E.jsx)("div", {
              className: o_.title,
              children: (0, E.jsx)(r_, {
                site: t.site,
                brand: t.brand,
                hideQuickAccess: t.hideQuickAccess || !1
              })
            }), (0, E.jsx)("div", {
              className: o_.fluid,
              children: (0, E.jsx)(ii, {
                links: n
              })
            }), (0, E.jsx)("div", {
              className: o_.fixed,
              children: (0, E.jsx)(Go, {
                cta: t.cta,
                includeSearch: !t.hideSearch
              })
            })]
          })
        },
        __ = {
          hamburger: "rockstargames-modules-core-headerf2f0c766c85d865a89db27f9ed66bd1c",
          open: "rockstargames-modules-core-headerb3a6a24fecf38a6bc6a374ac754d9c44"
        },
        c_ = e => {
          let {
            toggle: a,
            isMenuOpen: t
          } = e;
          const {
            track: s
          } = $();
          return (0, E.jsx)("div", {
            className: [__.hamburger, t ? __.open : ""].join(" "),
            children: (0, E.jsxs)("button", {
              onClick: () => {
                s({
                  event: t ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), a?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, E.jsx)("span", {}), (0, E.jsx)("span", {}), (0, E.jsx)("span", {})]
            })
          })
        },
        l_ = {
          header: "rockstargames-modules-core-headere0662a86745a18f67d0a284cadc318ed",
          title: "rockstargames-modules-core-headerbfe782c7e6aa8d919118610754aa6e90",
          nav: "rockstargames-modules-core-headera47486e25581afc2dde764a8b9de283c",
          fullMenuOpen: "rockstargames-modules-core-headerb8603f8dd68cacbc50bb096cc11d03b4",
          navContainer: "rockstargames-modules-core-headere3d18addab93aa3dc71abd8bce694df8",
          searchOpen: "rockstargames-modules-core-headercda83e04d8925a765afd49f3a155e706",
          overlay: "rockstargames-modules-core-headere9b65754106783b838e3e1193b019dae"
        };
      var d_ = t(821);
      const g_ = {
          domain: Z.C.www,
          path: "/games"
        },
        v_ = e => {
          let {
            text: a,
            onNavigate: t
          } = e;
          const {
            isMobile: s
          } = (0, c.G4)(), n = (0, o.useIntl)(), r = (0, i.useRef)(), [_, l] = (0, i.useState)(2.5);
          return (0, i.useEffect)((() => {
            l(s ? 2.5 : 3.5)
          }), [s]), (0, E.jsxs)("div", {
            className: "rockstargames-modules-core-headerb58d10782ca5708364661899455821bd",
            "data-testid": "gamesMenu",
            children: [(0, E.jsxs)("div", {
              className: "rockstargames-modules-core-headere863c966bc58adf9a9a6f4b0274b56ad",
              children: [(0, E.jsx)("h2", {
                children: a
              }), (0, E.jsxs)(oo, {
                gaText: Q.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${Q.nav_view_all_games.defaultMessage}`,
                location: g_,
                onNavigate: t,
                className: Qo.navigationLink,
                children: [(0, E.jsx)(o.FormattedMessage, {
                  ...Q.nav_view_all_games
                }), (0, E.jsx)("img", {
                  src: fo,
                  alt: n.formatMessage(Q.nav_view_all_games)
                })]
              })]
            }), (0, E.jsx)(d_.RC, {
              className: "rockstargames-modules-core-headerc4b1d1e665306159c2ce2d9b1c7b0684",
              ref: r,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: _,
              speed: 700,
              children: ie.map((e => (0, E.jsx)(d_.qr, {
                className: "rockstargames-modules-core-headerc4a93de84e888b3f4bae6714c0332b0f",
                children: (0, E.jsx)(Xo, {
                  titleSlug: e.titleSlug,
                  title: n.formatMessage(e.intlMessage),
                  gaText: e.intlMessage.defaultMessage,
                  gaBreadCrumb: `Games > ${e.intlMessage.defaultMessage}`,
                  location: e.location,
                  onNavigate: t,
                  dataTestId: e.dataTestId
                })
              }, e.intlMessage.defaultMessage)))
            })]
          })
        },
        m_ = e => {
          let {
            children: a,
            isOpen: t
          } = e;
          return (0, E.jsx)(lo.AnimatePresence, {
            children: t && (0, E.jsx)(lo.motion.div, {
              className: "rockstargames-modules-core-headerc417ed9b84a8c4cdb90a5138b634745c",
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
              transition: go.springOpen,
              children: a
            })
          })
        },
        u_ = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerbb1941e308b3468ace500f50b67ee37f",
          subMenuDropdownButton: "rockstargames-modules-core-headerb6cd1be94feeca867d4d0bb71150b2bf",
          open: "rockstargames-modules-core-headerd9ed4fbd5864de4a0baad0fb3d21b6da",
          subMenuDropdownItems: "rockstargames-modules-core-headere001283d991ce0e4f77f51717c1828b2"
        },
        p_ = {},
        h_ = e => {
          let {
            text: a,
            dataTestId: t,
            type: s,
            target: n,
            location: r,
            className: o,
            gaText: i,
            gaBreadCrumb: _,
            isLegacy: c,
            onNavigate: l,
            ...d
          } = e;
          const [g] = qo(r ? [r] : []), v = s === to;
          return (0, E.jsxs)(oo, {
            className: [ei(Boolean(g)), p_.subMenuItem, o].join(" "),
            dataTestId: t,
            location: r,
            type: s,
            target: n,
            gaText: i,
            gaBreadCrumb: _,
            onNavigate: l,
            isLegacy: c,
            label: a,
            ...d,
            children: [a, v && (0, E.jsx)("img", {
              alt: "",
              src: ho
            })]
          })
        },
        f_ = e => {
          let {
            text: a,
            dataTestId: t,
            navChildren: s,
            gaText: n,
            gaBreadCrumb: r,
            onNavigate: i,
            isSubMenuOpen: _,
            toggleMenuOpen: c,
            ...l
          } = e;
          const d = (0, o.useIntl)(),
            {
              track: g
            } = $();
          return (0, E.jsxs)("div", {
            className: u_.subMenuDropdownContainer,
            ...l,
            children: [(0, E.jsxs)("button", {
              type: "button",
              "data-testid": t,
              className: [u_.subMenuDropdownButton, _ ? u_.open : ""].join(" "),
              onClick: () => {
                g(Yr(void 0, "", n, r)), c()
              },
              children: [a, (0, E.jsx)("img", {
                src: po,
                alt: ""
              })]
            }), (0, E.jsx)(lo.AnimatePresence, {
              children: _ && (0, E.jsx)(lo.motion.div, {
                className: u_.subMenuDropdownItems,
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
                transition: go.springOpen,
                children: s.map((e => (0, E.jsx)(h_, {
                  text: d.formatMessage(e.intlMessage),
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
        b_ = e => {
          let {
            intlMessage: a,
            dataTestId: t,
            type: s,
            target: n,
            location: r,
            navChildren: _,
            gaBreadCrumb: c,
            onNavigate: l,
            isOpen: d,
            setIsOpen: g,
            ...v
          } = e;
          const m = (0, o.useIntl)(),
            [u, p] = (0, i.useState)(null),
            [h] = qo(r ? [r] : []),
            f = c ? `${c} > ${a.defaultMessage}` : a.defaultMessage;
          if (s === so) return (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(Ho, {
              text: m.formatMessage(a),
              dataTestId: t,
              gaText: a.defaultMessage,
              gaBreadCrumb: f,
              onClick: () => g(),
              isOpen: d,
              ...v
            }), (0, E.jsx)(m_, {
              isOpen: d,
              children: _?.map(((e, a) => e.type === so ? (0, E.jsx)(f_, {
                text: m.formatMessage(e.intlMessage),
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.intlMessage.defaultMessage,
                gaBreadCrumb: `${f} > ${e.intlMessage.defaultMessage}`,
                onNavigate: l,
                isSubMenuOpen: u === a,
                toggleMenuOpen: () => p(u !== a ? a : null)
              }, e.intlMessage.defaultMessage) : (0, E.jsx)(h_, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: m.formatMessage(e.intlMessage),
                type: e.type,
                gaText: e.intlMessage.defaultMessage,
                gaBreadCrumb: `${f} > ${e.intlMessage.defaultMessage}`,
                onNavigate: l
              }, e.intlMessage.defaultMessage)))
            })]
          });
          if (s === ro) return (0, E.jsx)(v_, {
            text: m.formatMessage(a),
            onNavigate: l
          });
          const b = s === to;
          return (0, E.jsxs)(oo, {
            location: r,
            dataTestId: t,
            type: s,
            target: n,
            gaText: a.defaultMessage,
            gaBreadCrumb: f,
            onNavigate: l,
            className: [ei(Boolean(h)), h ? "rockstargames-modules-core-headerea0f10ace532252f6b6984ab1066b3fd" : ""].join(" "),
            label: m.formatMessage(a),
            ...v,
            children: [m.formatMessage(a), b && (0, E.jsx)("img", {
              alt: "",
              src: ho
            })]
          })
        },
        w_ = e => {
          let {
            links: a,
            cta: t,
            onNavigate: s
          } = e;
          const n = (0, o.useIntl)(),
            [r, _] = (0, i.useState)(null);
          return (0, E.jsx)("div", {
            className: "rockstargames-modules-core-headerba7c7fd661e29acc27183bdea27ab7da",
            children: (0, E.jsxs)("ul", {
              children: [a.map(((e, a) => (0, E.jsx)(lo.motion.li, {
                variants: vo,
                transition: go.staggerFade,
                children: (0, E.jsx)(b_, {
                  intlMessage: e.intlMessage,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onNavigate: s,
                  isOpen: r === a,
                  setIsOpen: () => _(r !== a ? a : null)
                })
              }, e.text))), t && (0, E.jsx)(lo.motion.li, {
                className: "rockstargames-modules-core-headera8fb936abfcc7393c1d19220a40849a4",
                variants: vo,
                transition: go.staggerFade,
                children: (0, E.jsx)(_o, {
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
        {
          W1: y_
        } = n,
        k_ = e => {
          let {
            headerRef: a,
            data: t
          } = e;
          const [s, n] = (0, i.useState)(!1), [r, o] = ((0, c.ZC)(s), (0, i.useState)(!1)), _ = oe(), l = (0, q.useLocation)(), d = (0, q.useNavigate)(), {
            currentSite: g
          } = se(), v = rr(t.links), {
            setBodyIsLocked: m
          } = (0, c.bJ)("HeaderMobile"), u = {
            show: {
              height: "auto",
              paddingBottom: s && t.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ...go.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: go.hamburgerClose
            }
          };
          return (0, i.useEffect)((() => {
            m(!!s)
          }), [s]), (0, i.useEffect)((() => {
            o(!1), n(!1)
          }), [l.pathname, l.hash, l.search]), (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsxs)("header", {
              ref: a,
              className: l_.header,
              children: [(0, E.jsx)(c_, {
                toggle: () => {
                  n(!s), o(!1)
                },
                isMenuOpen: s
              }), (0, E.jsx)("div", {
                className: l_.title,
                children: (0, E.jsx)(r_, {
                  site: t.site,
                  brand: t.brand,
                  hideRockstarBrand: !!t.brand
                })
              }), (0, E.jsx)("div", {
                children: (0, E.jsx)(Go, {
                  includeSearch: !1,
                  isMobile: !0
                })
              })]
            }), (0, E.jsx)(lo.AnimatePresence, {
              children: (s || r || _ && g?.site === Z.C.www) && (0, E.jsxs)(E.Fragment, {
                children: [(0, E.jsxs)(lo.motion.nav, {
                  className: [l_.nav, s && t.brand ? l_.paddingBottom : "", s ? l_.fullMenuOpen : ""].join(" "),
                  variants: u,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [!t.hideSearch && (0, E.jsx)(Eo, {
                    isSearchOpen: r || _ && g?.site === Z.C.www,
                    setIsSearchOpen: o
                  }), s && (0, E.jsx)("div", {
                    className: [l_.navContainer, r ? l_.searchOpen : ""].join(" "),
                    children: (0, E.jsx)(w_, {
                      links: v,
                      cta: t.cta,
                      onNavigate: () => {
                        n(!1), o(!1)
                      }
                    })
                  })]
                }), s && t.brand && !t.hideQuickAccess && (0, E.jsx)(s_, {}), !_ && (0, E.jsx)(lo.motion.div, {
                  className: l_.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: go.hamburgerClose
                  },
                  transition: go.hamburgerOpen
                })]
              })
            }), (0, E.jsx)(y_, {
              location: l,
              onNavigate: d
            })]
          })
        };
      t(6649);
      const M_ = () => {
        const e = (0, i.useRef)(null),
          a = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
        return (0, i.useEffect)((() => {
          a && a.enableExperimentalAPIs(!0)
        }), []), (0, E.jsx)("button", {
          ref: e,
          className: "rockstargames-modules-core-headereaa11d7a405c4943bd674b22067a3f62",
          onClick: () => {
            const t = document.querySelector("header");
            if (a && t) {
              let s = a.findCandidates(t).filter((a => !t.contains(a) && e.current !== a));
              s.length > 0 && s[0].focus()
            }
          },
          children: (0, E.jsx)(o.FormattedMessage, {
            ...Q.accessibility_skip_button
          })
        })
      };
      le.gsap.registerPlugin(vs, Vs, rn);
      const x_ = () => {
          const {
            windowWidth: e
          } = (0, c.G4)(), a = oe(), {
            currentSite: t
          } = se(), [n] = (0, q.useSearchParams)(), {
            pathname: r,
            search: o
          } = (0, q.useLocation)(), _ = e < 1024, [l, d] = (0, i.useState)(!1), g = (0, i.useRef)(null), v = (0, i.useRef)(null);
          (0, i.useEffect)((() => {
            d(!0)
          }), []);
          const m = (0, i.useCallback)((e => {
            const a = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            e.direction === g?.current || a ? a && e?.animation?.pause() : -1 === e.direction ? e.animation?.reverse() : e.animation?.play();
            const t = "data-show-more-content";
            1 === e.direction ? document.body.setAttribute(t, "") : document.body.removeAttribute(t), g.current = e.direction
          }), []);
          (0, i.useEffect)((() => {
            const e = le.gsap.context((() => {
              v?.current && le.gsap.set(v.current, {
                paused: !0,
                scrollTrigger: {
                  onUpdate: e => {
                    m(e)
                  },
                  start: "140px",
                  end: 999999999
                }
              })
            }));
            return () => e.revert()
          }), [v?.current]);
          const u = (0, i.useMemo)((() => Object.values(s).reduce(((e, a) => {
              const r = t?.site ? a.appearancePaths[t.site] : [];
              return r ? [...e, ...r.map((e => {
                const t = e.match(/{.*}/),
                  r = t?.[0],
                  o = r && (e => {
                    if (!e) return null;
                    if ("titleOverride" === e) {
                      const e = n.get("title");
                      if ("gtav" === e) return Cn;
                      if ("rdr2" === e) return qn
                    }
                    return null
                  })(r.substring(1, r.length - 1)) || a,
                  i = r ? e.replace(r, "") : e;
                let c = null;
                return o?.links?.length < 1 && (c = ce().cloneDeep(o), c.links = s?.rsg?.links, c.hideQuickAccess = !1, c.cta && delete c.cta), {
                  element: _ ? (0, E.jsx)(k_, {
                    headerRef: v,
                    data: c ?? o
                  }) : (0, E.jsx)(i_, {
                    headerRef: v,
                    data: o
                  }),
                  path: i
                }
              }))] : e
            }), [])), [t?.site, _, o]),
            p = (0, q.useRoutes)(u);
          return (0, E.jsxs)("div", {
            className: on.globalNavigationRoot,
            "data-header-initialized": l,
            children: [(0, E.jsx)(M_, {}), (0, E.jsx)("div", {
              className: [on.globalNavigationSpacer, a && t?.site === Z.C.www ? on.globalNavigationSearchSpacer : ""].join(" ")
            }), p]
          })
        },
        C_ = e => {
          let {
            baseName: a
          } = e;
          const t = (() => {
              const e = window;
              if (e[K]?.history || (() => {
                  const e = window;
                  e[K]?.history || (e[K] = Object.assign(e[K] || {}, {
                    history: (0, J.zR)()
                  }))
                })(), e[K]?.history) return e[K].history;
              throw new Error("Browser History has not been initialised")
            })(),
            {
              hasProvider: s
            } = D(),
            [{
              iso: n
            }] = (0, o.getLocale)();
          return s ? (0, E.jsx)(c.uU, {
            children: (0, E.jsx)(o.IntlProvider, {
              locales: Y,
              lang: n,
              children: (0, E.jsx)(U, {
                children: (0, E.jsx)(X(), {
                  basename: a,
                  history: t,
                  children: (0, E.jsx)(te, {
                    children: (0, E.jsx)(x_, {})
                  })
                })
              })
            })
          }) : (0, E.jsx)(c.uU, {
            children: (0, E.jsx)(o.IntlProvider, {
              locales: Y,
              lang: n,
              children: (0, E.jsx)(B, {
                children: (0, E.jsx)(U, {
                  children: (0, E.jsx)(X(), {
                    basename: a,
                    history: t,
                    children: (0, E.jsx)(te, {
                      children: (0, E.jsx)(x_, {})
                    })
                  })
                })
              })
            })
          })
        }
    },
    4255: e => {
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
          o = new Set,
          i = new Set;
        for (r.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var _ = i;
          i = new Set, _.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "userData")
    },
    3202: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 46,
        "./GTATrilogy.jpg": 8679,
        "./IV.jpg": 7723,
        "./V.jpg": 5007,
        "./VI/desktop.png": 4699,
        "./VI/mobile.png": 7821,
        "./agent.jpg": 5682,
        "./beaterator.jpg": 5024,
        "./bully-scholarshipedition.jpg": 8910,
        "./bully.jpg": 8205,
        "./chinatownwars.jpg": 8057,
        "./episodesfromlibertycity.jpg": 7955,
        "./grandtheftauto-gba.jpg": 9826,
        "./grandtheftauto3.jpg": 3686,
        "./gta-online.jpg": 4747,
        "./gta-v.jpg": 4342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 2217,
        "./gtacomplete.jpg": 3970,
        "./gtalondon.jpg": 3201,
        "./italianjob.jpg": 5595,
        "./lanoire-vr-case-files.jpg": 7743,
        "./lanoire.jpg": 1451,
        "./lanoire_2.jpg": 7680,
        "./libertycitystories.jpg": 6766,
        "./manhunt.jpg": 1490,
        "./manhunt2.jpg": 5010,
        "./maxpayne.jpg": 5006,
        "./maxpayne2.jpg": 7126,
        "./maxpayne3.jpg": 5651,
        "./midnightclub.jpg": 7741,
        "./midnightclub2.jpg": 5171,
        "./midnightclub3.jpg": 2006,
        "./midnightclubLA-complete.jpg": 9550,
        "./midnightclubLA.jpg": 6204,
        "./oni.jpg": 4417,
        "./rdr-goty.jpg": 6647,
        "./reddeadonline.jpg": 1271,
        "./reddeadredemption.jpg": 1789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 3195,
        "./rockstar-games-collection-edition-1.jpg": 3564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 1748,
        "./smugglersrun.jpg": 499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 9528,
        "./stateofemergency.jpg": 5582,
        "./tabletennis.jpg": 724,
        "./theballadofgaytony.jpg": 4786,
        "./thelostanddamned.jpg": 4540,
        "./thewarriors.jpg": 173,
        "./undeadnightmare.jpg": 1919,
        "./vicecity.jpg": 1527,
        "./vicecitystories.jpg": 3048,
        "./wildmetal.jpg": 1652
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
      }, n.resolve = r, e.exports = n, n.id = 3202
    },
    2781: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 46,
        "./GTATrilogy.jpg": 8679,
        "./IV.jpg": 7723,
        "./V.jpg": 5007,
        "./agent.jpg": 5682,
        "./beaterator.jpg": 5024,
        "./bully-scholarshipedition.jpg": 8910,
        "./bully.jpg": 8205,
        "./chinatownwars.jpg": 8057,
        "./episodesfromlibertycity.jpg": 7955,
        "./grandtheftauto-gba.jpg": 9826,
        "./grandtheftauto3.jpg": 3686,
        "./gta-online.jpg": 4747,
        "./gta-v.jpg": 4342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 2217,
        "./gtacomplete.jpg": 3970,
        "./gtalondon.jpg": 3201,
        "./italianjob.jpg": 5595,
        "./lanoire-vr-case-files.jpg": 7743,
        "./lanoire.jpg": 1451,
        "./lanoire_2.jpg": 7680,
        "./libertycitystories.jpg": 6766,
        "./manhunt.jpg": 1490,
        "./manhunt2.jpg": 5010,
        "./maxpayne.jpg": 5006,
        "./maxpayne2.jpg": 7126,
        "./maxpayne3.jpg": 5651,
        "./midnightclub.jpg": 7741,
        "./midnightclub2.jpg": 5171,
        "./midnightclub3.jpg": 2006,
        "./midnightclubLA-complete.jpg": 9550,
        "./midnightclubLA.jpg": 6204,
        "./oni.jpg": 4417,
        "./rdr-goty.jpg": 6647,
        "./reddeadonline.jpg": 1271,
        "./reddeadredemption.jpg": 1789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 3195,
        "./rockstar-games-collection-edition-1.jpg": 3564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 1748,
        "./smugglersrun.jpg": 499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 9528,
        "./stateofemergency.jpg": 5582,
        "./tabletennis.jpg": 724,
        "./theballadofgaytony.jpg": 4786,
        "./thelostanddamned.jpg": 4540,
        "./thewarriors.jpg": 173,
        "./undeadnightmare.jpg": 1919,
        "./vicecity.jpg": 1527,
        "./vicecitystories.jpg": 3048,
        "./wildmetal.jpg": 1652
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
      }, n.resolve = r, e.exports = n, n.id = 2781
    },
    5392: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 4699
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
      }, n.resolve = r, e.exports = n, n.id = 5392
    },
    7426: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 7821
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
      }, n.resolve = r, e.exports = n, n.id = 7426
    },
    8128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    1764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    8989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    9544: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    5636: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    357: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    7976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    4923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    5710: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    8318: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    2047: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    350: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    9825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    6399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    2627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    6425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    3864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    46: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    8679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    7723: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    5007: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    7821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    5682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    5024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    8910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    8205: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    8057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    7955: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    9826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    3686: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    4747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    4342: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    2217: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    3970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    3201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    5595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    7743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    1451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    7680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    6766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    1490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    5010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    5006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    7126: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    5651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    7741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    5171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    2006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    9550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    6204: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    4417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    6647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    1271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    1789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    7891: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    3195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    3564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    1748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    7737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    9528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    5582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    4786: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    4540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    1919: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    1527: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    3048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    1652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    8269: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    2759: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    8882: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);