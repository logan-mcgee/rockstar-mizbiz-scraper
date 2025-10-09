try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "8aa7fe81-2d56-4aff-ad5b-da8dc54842a7", t._sentryDebugIdIdentifier = "sentry-dbid-8aa7fe81-2d56-4aff-ad5b-da8dc54842a7")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [930, 9016], {
    91: (t, e, a) => {
      a.r(e), a.d(e, {
        Avatar: () => p,
        Content: () => h,
        PlatformTag: () => f,
        PlatformTagSizes: () => s.YT,
        Platforms: () => s.lv,
        RankContent: () => g,
        Root: () => l,
        RpCategory: () => m,
        TextContent: () => b,
        TopRow: () => u,
        UserName: () => w
      });
      var r = a(42295),
        i = a(62229),
        o = a(32067),
        c = a(973),
        n = a(4572),
        _ = a.n(n),
        s = a(22230),
        d = a(95386);
      const A = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804",
        l = (0, i.forwardRef)((function({
          children: t,
          className: e,
          testId: a,
          ...i
        }, o) {
          const n = (0, c.v6)(i, {
            "data-testid": a,
            className: _()("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", e)
          });
          return (0, r.jsx)("div", {
            ref: o,
            ...n,
            children: t
          })
        })),
        p = (0, i.forwardRef)((function({
          src: t,
          alt: e,
          testId: o,
          ...n
        }, _) {
          const [s, d] = (0, i.useState)(t), l = (0, c.v6)(n, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": o
          });
          return t ? (0, r.jsx)("div", {
            ref: _,
            ...l,
            children: (0, r.jsx)("img", {
              className: A,
              src: s,
              alt: e,
              onError: () => d(a(14804))
            })
          }) : (0, r.jsx)("div", {
            ref: _,
            ...l,
            children: (0, r.jsx)("img", {
              className: A,
              src: a(14804),
              alt: e
            })
          })
        })),
        h = (0, i.forwardRef)((function({
          asChild: t,
          testId: e,
          className: a,
          ...i
        }, n) {
          const s = t ? o.DX : "div",
            d = (0, c.v6)(i, {
              className: _()("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", a),
              "data-testid": e
            });
          return (0, r.jsx)(s, {
            ref: n,
            ...d
          })
        })),
        u = (0, i.forwardRef)((function({
          children: t,
          testId: e,
          ...a
        }, i) {
          const o = (0, c.v6)(a, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            ref: i,
            ...o,
            children: t
          })
        })),
        f = ({
          testId: t,
          ...e
        }) => {
          const a = (0, c.v6)(e, {
            "data-testid": t
          });
          return (0, r.jsx)(s.Ay, {
            ...a
          })
        },
        w = (0, i.forwardRef)((function({
          children: t,
          testId: e,
          ...a
        }, i) {
          const o = (0, c.v6)(a, {
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...o,
            ref: i,
            children: t
          })
        })),
        g = (0, i.forwardRef)((function({
          testId: t,
          children: e,
          ...a
        }, i) {
          const o = (0, c.v6)(a, {
            "data-testid": t
          });
          return (0, r.jsx)("div", {
            ...o,
            ref: i,
            children: e
          })
        })),
        m = ({
          testId: t,
          ...e
        }) => {
          const a = (0, c.v6)(e, {
            "data-testid": t
          });
          return (0, r.jsx)(d.RpCategory, {
            ...a
          })
        },
        b = (0, i.forwardRef)((function({
          asChild: t,
          children: e,
          testId: a,
          ...i
        }, n) {
          const _ = t ? o.DX : "div",
            s = (0, c.v6)(i, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": a
            });
          return (0, r.jsx)(_, {
            ref: n,
            ...s,
            children: e
          })
        }))
    },
    11008: t => {
      t.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    14804: t => {
      t.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    22230: (t, e, a) => {
      a.d(e, {
        YT: () => c,
        lv: () => n,
        Ay: () => _
      });
      var r = a(42295);
      var i = a(4572),
        o = a.n(i);
      var c = function(t) {
          return t.small = "small", t.large = "large", t
        }({}),
        n = function(t) {
          return t.pc = "pc", t.pcAlt = "pcalt", t.ps4 = "ps4", t.ps5 = "ps5", t.ps = "ps", t.np = "np", t.xboxOne = "xboxone", t.xboxSeries = "xboxsx", t.xbox = "xbl", t
        }({});
      const _ = ({
        tagSize: t,
        platform: e,
        className: a = ""
      }) => {
        const {
          src: i,
          alt: c
        } = ((t, e) => {
          const a = "small" === e;
          switch (t) {
            case "pc":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case "ps":
            case "np":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case "xbl":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(e, t);
        return (0, r.jsx)("img", {
          className: o()("rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1", a),
          "data-testid": "platform-tag",
          "data-platform": e,
          "data-tag-size": t,
          src: i,
          alt: c
        })
      }
    },
    28985: t => {
      t.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    32067: (t, e, a) => {
      a.d(e, {
        DX: () => r.DX,
        xV: () => r.xV
      });
      var r = a(39447);
      a(42295), a(62229)
    },
    32903: t => {
      t.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    47240: t => {
      t.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    49429: t => {
      t.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    71635: (t, e, a) => {
      a.r(e), a.d(e, {
        default: () => ot
      });
      var r = a(42295),
        i = a(81788);
      const o = JSON.parse('{"de-DE":{"twitch_drops_action_card_sign_in_button":"Anmelden","twitch_drops_auth_state_action_card_cta_label":"Anmelden","twitch_drops_auth_state_action_card_title":"Melde dich bei deinem Rockstar-Games-Konto an, um mit der Einrichtung zu beginnen","twitch_drops_body":"Verknüpfe deine Spielkonten und sieh dir teilnehmende Twitch-Kanäle an, um exklusive Geschenke und Belohnungen in Grand Theft Auto Online zu erhalten.","twitch_drops_body_get_started_body":"Melde dich bei deinem Rockstar-Games-Konto an, um mit der Einrichtung zu beginnen","twitch_drops_can_claim_body":"Schau dir die teilnehmenden Twitch-Kanäle an, um die Belohnung im Spiel zu erhalten.","twitch_drops_can_claim_title":"Du bist bereit","twitch_drops_character_card_error_message":"Erstelle einen Charakter in Grand Theft Auto Online und schließe das Tutorial im Spiel ab, um Drops zu erhalten.","twitch_drops_character_card_icon_label":"Warnung","twitch_drops_check_icon_label":"Check","twitch_drops_create_your_character_for_future_rewards_body_active":"Erstelle einen Charakter in Grand Theft Auto Online und schließe das Tutorial im Spiel ab, um Drops zu erhalten.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"Momentan gibt es keine Twitch Drops, aber bleib dran. Erstelle einen Charakter in Grand Theft Auto Online und schließe das Tutorial im Spiel ab, um Drops zu erhalten.","twitch_drops_create_your_character_for_future_rewards_header_active":"Erstelle einen Charakter, um Drops zu erhalten","twitch_drops_create_your_character_for_future_rewards_header_inactive":"Erstelle einen Charakter, um zukünftige Belohnungen zu erhalten","twitch_drops_dialog_no_character_found_description":"Erstelle einen Charakter in Grand Theft Auto Online und schließe das Tutorial im Spiel ab, um Drops zu erhalten.","twitch_drops_dialog_no_character_found_title":"Kein Charakter gefunden","twitch_drops_dialog_no_data_found_title":"Keine Daten gefunden","twitch_drops_find_stream_title":"Streams finden","twitch_drops_gaming_state_action_card_link_valid_character_account":"Gültiges Charakter-Konto verknüpfen","twitch_drops_gaming_state_action_card_linked_manage_account_label":"Verknüpfte Konten verwalten","twitch_drops_gaming_state_action_card_linked_title":"Spielkonto verknüpft","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Mit Twitch verknüpfen","twitch_drops_gaming_state_action_card_unlinked_title":"Spielkonto verknüpfen","twitch_drops_gaming_state_action_card_verified":"Verifiziert","twitch_drops_gaming_state_action_card_warning":"Verifiziert","twitch_drops_inactive_streams_body":"Momentan gibt es keine Twitch Drops. Bleib dran für die nächste Runde. In der Zwischenzeit kannst du dein Inventar verwalten und deine verfügbaren Belohnungen abholen.","twitch_drops_link_another_account_title":"Weitere Konten verknüpfen","twitch_drops_linked_account_title":"Verknüpfte Konten","twitch_drops_no_gaming_account_linked":"Kein Spielkonto verknüpft","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"Abbrechen","twitch_drops_platform_dialog_close_btn_label":"Schließen","twitch_drops_platform_dialog_ok_btn_label":"Okay","twitch_drops_platform_options_description":"Wähle deine Spielplattform.","twitch_drops_platform_options_title":"Einen Charakter hinzufügen","twitch_drops_title":"Richte deine Twitch Drops ein","twitch_drops_twitch_state_action_card_linked_title":"Twitch-Konto verknüpft","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Mit Twitch verknüpfen","twitch_drops_twitch_state_action_card_unlinked_title":"Kein Twitch-Konto verknüpft","twitch_drops_view_drops_title":"Drops-Inventar ansehen","twitch_drops_with_characters_title":"Richte deine Twitch Drops für zukünftige Belohnungen ein","twitch_icon":"Twitch-Logo"},"en-US":{"twitch_drops_action_card_sign_in_button":"Sign In","twitch_drops_auth_state_action_card_cta_label":"Sign In","twitch_drops_auth_state_action_card_title":"Sign in to your Rockstar Games account to start setup","twitch_drops_body":"For special gifts and rewards in Grand Theft Auto Online, link your gaming accounts and watch participating Twitch channels.","twitch_drops_body_get_started_body":"Sign in to Rockstar Games account to start setup","twitch_drops_can_claim_body":"To claim the free in-game reward, watch participating Twitch channels.","twitch_drops_can_claim_title":"You\'re All Set","twitch_drops_character_card_error_message":"Create a Grand Theft Auto Online character and complete the in-game tutorial to receive drops.","twitch_drops_character_card_icon_label":"Alert","twitch_drops_check_icon_label":"Check","twitch_drops_create_your_character_for_future_rewards_body_active":"Create a Grand Theft Auto Online character and complete the in-game tutorial to receive Drops.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"There are no Twitch Drops available right now, but stay tuned. Create a Grand Theft Auto Online character and complete the in-game tutorial to receive Drops.","twitch_drops_create_your_character_for_future_rewards_header_active":"Create your Character to get Drops","twitch_drops_create_your_character_for_future_rewards_header_inactive":"Create Your Character for Future Rewards","twitch_drops_dialog_no_character_found_description":"Create a Grand Theft Auto Online character and complete the in-game tutorial to receive drops.","twitch_drops_dialog_no_character_found_title":"No Character Found","twitch_drops_dialog_no_data_found_title":"No Data Found","twitch_drops_find_stream_title":"Find Streams","twitch_drops_gaming_state_action_card_link_valid_character_account":"Link a valid character account","twitch_drops_gaming_state_action_card_linked_manage_account_label":"Manage Linked Accounts","twitch_drops_gaming_state_action_card_linked_title":"Gaming account linked","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Link Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"Link gaming account","twitch_drops_gaming_state_action_card_verified":"Verified","twitch_drops_gaming_state_action_card_warning":"Verified","twitch_drops_inactive_streams_body":"There are no Twitch Drops available right now, but stay tuned for the next round. In the meantime, manage your inventory and claim your available rewards.","twitch_drops_link_another_account_title":"Link Another Account","twitch_drops_linked_account_title":"Linked Accounts","twitch_drops_no_gaming_account_linked":"No gaming account linked","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"Cancel","twitch_drops_platform_dialog_close_btn_label":"Close","twitch_drops_platform_dialog_ok_btn_label":"Ok","twitch_drops_platform_options_description":"Select your gaming platform.","twitch_drops_platform_options_title":"Add a Character","twitch_drops_title":"Set Up Your Twitch Drops","twitch_drops_twitch_state_action_card_linked_title":"Twitch account linked","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Link Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"No Twitch account linked","twitch_drops_view_drops_title":"View Drops Inventory","twitch_drops_with_characters_title":"Set Up Your Twitch Drops for Future Rewards","twitch_icon":"Twitch Logo"},"es-ES":{"twitch_drops_action_card_sign_in_button":"Iniciar sesión","twitch_drops_auth_state_action_card_cta_label":"Iniciar sesión","twitch_drops_auth_state_action_card_title":"Inicia sesión con tu cuenta de Rockstar Games para empezar","twitch_drops_body":"Vincula tus cuentas de juego para recibir regalos y recompensas especiales en Grand Theft Auto Online por ver canales de Twitch participantes.","twitch_drops_body_get_started_body":"Inicia sesión en tu cuenta de Rockstar Games para empezar.","twitch_drops_can_claim_body":"Para solicitar la recompensa gratuita en el juego, sigue los canales de Twitch participantes.","twitch_drops_can_claim_title":"Todo listo","twitch_drops_character_card_error_message":"Crea un personaje de Grand Theft Auto Online y completa el tutorial del juego para recibir Drops.","twitch_drops_character_card_icon_label":"Alerta","twitch_drops_check_icon_label":"Comprobar","twitch_drops_create_your_character_for_future_rewards_body_active":"Crea un personaje de Grand Theft Auto Online y completa el tutorial del juego para recibir Drops.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"No hay Drops de Twitch disponibles en este momento, vuelve más tarde. Crea un personaje de Grand Theft Auto Online y completa el tutorial del juego para recibir Drops.","twitch_drops_create_your_character_for_future_rewards_header_active":"Crea un personaje para recibir Drops","twitch_drops_create_your_character_for_future_rewards_header_inactive":"Crea un personaje para obtener recompensas en el futuro","twitch_drops_dialog_no_character_found_description":"Crea un personaje de Grand Theft Auto Online y completa el tutorial del juego para recibir Drops.","twitch_drops_dialog_no_character_found_title":"No se ha encontrado ningún personaje compatible","twitch_drops_dialog_no_data_found_title":"No se han encontrado datos","twitch_drops_find_stream_title":"Buscar streams","twitch_drops_gaming_state_action_card_link_valid_character_account":"Vincula una cuenta de personaje válida","twitch_drops_gaming_state_action_card_linked_manage_account_label":"Gestionar cuentas vinculadas","twitch_drops_gaming_state_action_card_linked_title":"Cuenta de juego vinculada","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Vincular Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"Vincular una cuenta de juego","twitch_drops_gaming_state_action_card_verified":"Verificada","twitch_drops_gaming_state_action_card_warning":"Verificada","twitch_drops_inactive_streams_body":"No hay Drops de Twitch disponibles en este momento, pero presta atención a la próxima ronda. Mientras tanto, gestiona tu inventario y solicita tus recompensas disponibles.","twitch_drops_link_another_account_title":"Vincular otra cuenta","twitch_drops_linked_account_title":"Cuentas vinculadas","twitch_drops_no_gaming_account_linked":"No has vinculado ninguna cuenta de juego","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"Cancelar","twitch_drops_platform_dialog_close_btn_label":"Cerrar","twitch_drops_platform_dialog_ok_btn_label":"Vale","twitch_drops_platform_options_description":"Elige una plataforma.","twitch_drops_platform_options_title":"Añadir personaje","twitch_drops_title":"Activa los Drops de Twitch","twitch_drops_twitch_state_action_card_linked_title":"Cuenta de Twitch vinculada","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Vincular Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"No has vinculado ninguna cuenta de Twitch","twitch_drops_view_drops_title":"Ver el inventario de Drops","twitch_drops_with_characters_title":"Activa los Drops de Twitch para obtener recompensas en el futuro","twitch_icon":"Logotipo de Twitch"},"es-MX":{"twitch_drops_action_card_sign_in_button":"Iniciar sesión","twitch_drops_auth_state_action_card_cta_label":"Iniciar sesión","twitch_drops_auth_state_action_card_title":"Inicia sesión con tu cuenta de Rockstar Games para comenzar","twitch_drops_body":"Vincula tus cuentas y mira canales de Twitch participantes para recibir regalos y recompensas especiales en Grand Theft Auto Online.","twitch_drops_body_get_started_body":"Inicia sesión con tu cuenta de Rockstar Games para comenzar","twitch_drops_can_claim_body":"Para recibir la recompensa en el juego, mira los canales de Twitch participantes.","twitch_drops_can_claim_title":"Todo listo","twitch_drops_character_card_error_message":"Crea un personaje de Grand Theft Auto Online y completa el tutorial del juego para recibir Drops.","twitch_drops_character_card_icon_label":"Alerta","twitch_drops_check_icon_label":"Consultar","twitch_drops_create_your_character_for_future_rewards_body_active":"Crea un personaje de Grand Theft Auto Online y completa el tutorial del juego para recibir Drops.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"En este momento, no hay Drops de Twitch disponibles, pero presta atención. Crea un personaje de Grand Theft Auto Online y completa el tutorial del juego para recibir Drops.","twitch_drops_create_your_character_for_future_rewards_header_active":"Crea un personaje para recibir Drops","twitch_drops_create_your_character_for_future_rewards_header_inactive":"Crea un personaje para recompensas futuras","twitch_drops_dialog_no_character_found_description":"Crea un personaje de Grand Theft Auto Online y completa el tutorial del juego para recibir Drops.","twitch_drops_dialog_no_character_found_title":"No se encontró ningún personaje","twitch_drops_dialog_no_data_found_title":"No se encontró información","twitch_drops_find_stream_title":"Buscar streams","twitch_drops_gaming_state_action_card_link_valid_character_account":"Vincular cuenta de personaje válida","twitch_drops_gaming_state_action_card_linked_manage_account_label":"Gestionar cuentas vinculadas","twitch_drops_gaming_state_action_card_linked_title":"Cuenta de juego vinculada","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Vincular cuenta de Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"Vincular cuenta de juego","twitch_drops_gaming_state_action_card_verified":"Verificada","twitch_drops_gaming_state_action_card_warning":"Verificada","twitch_drops_inactive_streams_body":"No hay Drops de Twitch disponibles en este momento, pero no te pierdas la próxima ronda. Mientras tanto, gestiona tu inventario y obtén las recompensas disponibles.","twitch_drops_link_another_account_title":"Vincular otra cuenta","twitch_drops_linked_account_title":"Cuentas vinculadas","twitch_drops_no_gaming_account_linked":"No vinculaste ninguna cuenta de juego","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBox","twitch_drops_platform_dialog_cancel_btn_label":"Cancelar","twitch_drops_platform_dialog_close_btn_label":"Cerrar","twitch_drops_platform_dialog_ok_btn_label":"Aceptar","twitch_drops_platform_options_description":"Selecciona tu plataforma.","twitch_drops_platform_options_title":"Añadir personaje","twitch_drops_title":"Configura Drops de Twitch","twitch_drops_twitch_state_action_card_linked_title":"Vinculaste una cuenta de Twitch","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Vincular cuenta de Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"No vinculaste ninguna cuenta de Twitch","twitch_drops_view_drops_title":"Ver inventario de Drops","twitch_drops_with_characters_title":"Configura Drops de Twitch para recibir recompensas futuras","twitch_icon":"Logo de Twitch"},"fr-FR":{"twitch_drops_action_card_sign_in_button":"Se connecter","twitch_drops_auth_state_action_card_cta_label":"Se connecter","twitch_drops_auth_state_action_card_title":"Connectez-vous à votre compte Rockstar Games pour vous lancer","twitch_drops_body":"Pour recevoir des récompenses et des cadeaux spéciaux dans Grand Theft Auto Online, associez vos comptes de jeu et regardez les chaînes Twitch participant.","twitch_drops_body_get_started_body":"Connectez-vous à votre compte Rockstar Games pour commencer la configuration.","twitch_drops_can_claim_body":"Pour récupérer la récompense gratuite en jeu, regardez les chaînes Twitch participantes.","twitch_drops_can_claim_title":"Tout est prêt.","twitch_drops_character_card_error_message":"Créez un personnage dans Grand Theft Auto Online et terminez l\'introduction en jeu pour recevoir des drops.","twitch_drops_character_card_icon_label":"Alerte","twitch_drops_check_icon_label":"Vérifier","twitch_drops_create_your_character_for_future_rewards_body_active":"Créez un personnage dans Grand Theft Auto Online et terminez l\'introduction pour recevoir des drops.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"Il n\'y a pas de drop Twitch disponible actuellement, mais restez à l\'écoute. Créez un personnage dans Grand Theft Auto Online et terminez l\'introduction pour recevoir des drops.","twitch_drops_create_your_character_for_future_rewards_header_active":"Créez votre personnage pour obtenir des drops","twitch_drops_create_your_character_for_future_rewards_header_inactive":"Créez votre personnage pour profiter de futures récompenses","twitch_drops_dialog_no_character_found_description":"Créez un personnage dans Grand Theft Auto Online et terminez l\'introduction en jeu pour recevoir des drops.","twitch_drops_dialog_no_character_found_title":"Aucun personnage trouvé","twitch_drops_dialog_no_data_found_title":"Aucune donnée trouvée","twitch_drops_find_stream_title":"Trouver des streams","twitch_drops_gaming_state_action_card_link_valid_character_account":"Associer un compte de personnage valide","twitch_drops_gaming_state_action_card_linked_manage_account_label":"Gérer les comptes associés","twitch_drops_gaming_state_action_card_linked_title":"Compte de jeu associé","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Associer Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"Associer un compte de jeu","twitch_drops_gaming_state_action_card_verified":"Vérifié","twitch_drops_gaming_state_action_card_warning":"Vérifié","twitch_drops_inactive_streams_body":"Il n\'y a pas de drop Twitch disponible actuellement, mais gardez un œil sur les prochains. En attendant, gérez votre inventaire et récupérez vos récompenses disponibles.","twitch_drops_link_another_account_title":"Associer un autre compte","twitch_drops_linked_account_title":"Comptes associés","twitch_drops_no_gaming_account_linked":"Aucun compte de jeu associé","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"Annuler","twitch_drops_platform_dialog_close_btn_label":"Fermer","twitch_drops_platform_dialog_ok_btn_label":"OK","twitch_drops_platform_options_description":"Sélectionnez votre plateforme de jeu.","twitch_drops_platform_options_title":"Ajouter un personnage","twitch_drops_title":"Configurez vos drops Twitch","twitch_drops_twitch_state_action_card_linked_title":"Compte Twitch associé","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Associer Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"Aucun compte Twitch associé","twitch_drops_view_drops_title":"Voir l\'inventaire de drops","twitch_drops_with_characters_title":"Paramétrez vos drops Twitch pour les prochaines récompenses","twitch_icon":"Logo Twitch"},"it-IT":{"twitch_drops_action_card_sign_in_button":"Accedi","twitch_drops_auth_state_action_card_cta_label":"Accedi","twitch_drops_auth_state_action_card_title":"Accedi al tuo account di Rockstar Games per cominciare","twitch_drops_body":"Per ricevere regali e ricompense speciali in Grand Theft Auto Online, collega i tuoi account di gioco e guarda i canali Twitch che partecipano.","twitch_drops_body_get_started_body":"Accedi al tuo account di Rockstar Games per cominciare","twitch_drops_can_claim_body":"Per riscattare le ricompense gratuite in gioco, guarda i canali Twitch che partecipano all’iniziativa.","twitch_drops_can_claim_title":"Tutto pronto","twitch_drops_character_card_error_message":"Crea un personaggio di Grand Theft Auto Online e completa il tutorial in gioco per ricevere i Drop.","twitch_drops_character_card_icon_label":"Avviso","twitch_drops_check_icon_label":"Verifica","twitch_drops_create_your_character_for_future_rewards_body_active":"Crea un personaggio di Grand Theft Auto Online e completa il tutorial in gioco per ricevere i Drop.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"Al momento non ci sono Twitch Drop disponibili, ma continua a seguirci. Crea un personaggio di Grand Theft Auto Online e completa il tutorial in gioco per ricevere i Drop.","twitch_drops_create_your_character_for_future_rewards_header_active":"Crea un personaggio per ricevere i Drop","twitch_drops_create_your_character_for_future_rewards_header_inactive":"Crea un personaggio per le ricompense future","twitch_drops_dialog_no_character_found_description":"Crea un personaggio di Grand Theft Auto Online e completa il tutorial in gioco per ricevere i Drop.","twitch_drops_dialog_no_character_found_title":"Nessun personaggio trovato","twitch_drops_dialog_no_data_found_title":"Dati non trovati","twitch_drops_find_stream_title":"Trova streaming","twitch_drops_gaming_state_action_card_link_valid_character_account":"Collega un account personaggio valido","twitch_drops_gaming_state_action_card_linked_manage_account_label":"Gestisci gli account collegati","twitch_drops_gaming_state_action_card_linked_title":"Account di gioco collegato","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Collega Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"Collega un account di gioco","twitch_drops_gaming_state_action_card_verified":"Verificato","twitch_drops_gaming_state_action_card_warning":"Verificato","twitch_drops_inactive_streams_body":"Non ci sono Twitch Drop disponibili ora, ma non perderti il prossimo round. Intanto, gestisci il tuo inventario e riscatta le ricompense disponibili.","twitch_drops_link_another_account_title":"Collega un altro account","twitch_drops_linked_account_title":"Account collegati","twitch_drops_no_gaming_account_linked":"Nessun account di gioco collegato","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"Annulla","twitch_drops_platform_dialog_close_btn_label":"Chiudi","twitch_drops_platform_dialog_ok_btn_label":"OK","twitch_drops_platform_options_description":"Seleziona la tua piattaforma di gioco.","twitch_drops_platform_options_title":"Aggiungi un personaggio","twitch_drops_title":"Imposta i tuoi Twitch Drop","twitch_drops_twitch_state_action_card_linked_title":"Account di Twitch collegato","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Collega Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"Nessun account di Twitch collegato","twitch_drops_view_drops_title":"Visualizza inventario Drop","twitch_drops_with_characters_title":"Imposta i Twitch Drop per ricevere le ricompense future","twitch_icon":"Logo di Twitch"},"ja-JP":{"twitch_drops_action_card_sign_in_button":"サインイン","twitch_drops_auth_state_action_card_cta_label":"サインイン","twitch_drops_auth_state_action_card_title":"ロックスター・ゲームスアカウントにサインインして設定する","twitch_drops_body":"「GTAオンライン」で特別なギフトや報酬を受け取るには、ゲームアカウントをリンクして、対象のTwitchチャンネルを視聴してください。","twitch_drops_body_get_started_body":"ロックスター・ゲームスアカウントにサインインして設定する","twitch_drops_can_claim_body":"無料インゲーム報酬を受け取るには、対象のTwitchチャンネルを視聴してください。","twitch_drops_can_claim_title":"準備完了","twitch_drops_character_card_error_message":"Dropsを受け取るには、「GTAオンライン」のキャラクターを作成して、ゲームのチュートリアルをクリアしてください。","twitch_drops_character_card_icon_label":"警告","twitch_drops_check_icon_label":"チェック","twitch_drops_create_your_character_for_future_rewards_body_active":"Dropsを受け取るには、「GTAオンライン」のキャラクターを作成して、ゲームのチュートリアルをクリアしてください。","twitch_drops_create_your_character_for_future_rewards_body_inactive":"現在、利用可能なTwitch Dropsがありません。Dropsを受け取るには、「GTAオンライン」のキャラクターを作成して、ゲームのチュートリアルをクリアしてください。","twitch_drops_create_your_character_for_future_rewards_header_active":"キャラクターを作成してDropsをゲットしよう","twitch_drops_create_your_character_for_future_rewards_header_inactive":"キャラクターを作成して今後の報酬に備えよう","twitch_drops_dialog_no_character_found_description":"Dropsを受け取るには、「GTAオンライン」のキャラクターを作成して、ゲームのチュートリアルをクリアしてください。","twitch_drops_dialog_no_character_found_title":"キャラクターが見つかりません","twitch_drops_dialog_no_data_found_title":"データが見つかりません","twitch_drops_find_stream_title":"Streamを検索","twitch_drops_gaming_state_action_card_link_valid_character_account":"有効なキャラクターアカウントをリンクする","twitch_drops_gaming_state_action_card_linked_manage_account_label":"リンク済みアカウントの管理","twitch_drops_gaming_state_action_card_linked_title":"ゲームアカウントがリンクされました","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Twitchとリンクする","twitch_drops_gaming_state_action_card_unlinked_title":"ゲームアカウントをリンクする","twitch_drops_gaming_state_action_card_verified":"認証","twitch_drops_gaming_state_action_card_warning":"認証","twitch_drops_inactive_streams_body":"現在、利用可能なTwitch Dropsがありません。次回をお楽しみに。お待ちの間に、インベントリを確認して利用可能な報酬を受け取りましょう。","twitch_drops_link_another_account_title":"他のアカウントをリンクする","twitch_drops_linked_account_title":"リンク済みアカウント","twitch_drops_no_gaming_account_linked":"ゲームアカウントがリンクされていません","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"キャンセル","twitch_drops_platform_dialog_close_btn_label":"閉じる","twitch_drops_platform_dialog_ok_btn_label":"OK","twitch_drops_platform_options_description":"ゲームのプラットフォームを選択","twitch_drops_platform_options_title":"キャラクターを追加","twitch_drops_title":"Twitch Dropsを設定する","twitch_drops_twitch_state_action_card_linked_title":"Twitchアカウントがリンクされました","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Twitchとリンクする","twitch_drops_twitch_state_action_card_unlinked_title":"Twitchアカウントがリンクされていません","twitch_drops_view_drops_title":"Dropsインベントリを見る","twitch_drops_with_characters_title":"Twitch Dropsをセットアップして今後の報酬に備えましょう","twitch_icon":"Twitchロゴ"},"ko-KR":{"twitch_drops_action_card_sign_in_button":"로그인","twitch_drops_auth_state_action_card_cta_label":"로그인","twitch_drops_auth_state_action_card_title":"설정을 시작하려면 Rockstar Games 계정에 로그인하십시오.","twitch_drops_body":"Grand Theft Auto 온라인에서 스페셜 선물과 보상을 받으려면 게이밍 계정을 연동하고 해당되는 Twitch 채널을 시청하십시오.","twitch_drops_body_get_started_body":"설정을 시작하려면 Rockstar Games 계정에 로그인하십시오.","twitch_drops_can_claim_body":"해당되는 Twitch 채널을 시청하고 무료 게임 내 보상을 수령하십시오.","twitch_drops_can_claim_title":"준비 완료!","twitch_drops_character_card_error_message":"드롭스를 수령하려면 Grand Theft Auto 온라인 캐릭터를 생성하고 게임 내 튜토리얼을 완료하십시오.","twitch_drops_character_card_icon_label":"알림","twitch_drops_check_icon_label":"확인","twitch_drops_create_your_character_for_future_rewards_body_active":"드롭스를 수령하려면 Grand Theft Auto 온라인 캐릭터를 생성하고 게임 내 튜토리얼을 완료하십시오.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"지금은 진행 중인 Twitch 드롭스 스트리밍이 없습니다. 다음을 기대해 주십시오. 드롭스를 수령하려면 Grand Theft Auto 온라인 캐릭터를 생성하고 게임 내 튜토리얼을 완료하십시오.","twitch_drops_create_your_character_for_future_rewards_header_active":"캐릭터를 생성하고 드롭스 수령하기","twitch_drops_create_your_character_for_future_rewards_header_inactive":"향후 보상을 받을 캐릭터 생성하기","twitch_drops_dialog_no_character_found_description":"드롭스를 수령하려면 Grand Theft Auto 온라인 캐릭터를 생성하고 게임 내 튜토리얼을 완료하십시오.","twitch_drops_dialog_no_character_found_title":"캐릭터 없음","twitch_drops_dialog_no_data_found_title":"데이터를 찾을 수 없음","twitch_drops_find_stream_title":"스트리밍 찾기","twitch_drops_gaming_state_action_card_link_valid_character_account":"유효한 캐릭터 계정 연동하기","twitch_drops_gaming_state_action_card_linked_manage_account_label":"연동된 계정 관리하기","twitch_drops_gaming_state_action_card_linked_title":"게이밍 계정 연동됨","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Twitch 연동하기","twitch_drops_gaming_state_action_card_unlinked_title":"게임 계정 연동하기","twitch_drops_gaming_state_action_card_verified":"인증됨","twitch_drops_gaming_state_action_card_warning":"인증됨","twitch_drops_inactive_streams_body":"지금은 진행 중인 Twitch 드롭스 스트리밍이 없습니다. 다음 스트리밍을 기대해 주십시오. 그동안 인벤토리를 관리하고 수령 가능한 보상을 획득해 보십시오.","twitch_drops_link_another_account_title":"다른 계정 연동하기","twitch_drops_linked_account_title":"연동된 계정","twitch_drops_no_gaming_account_linked":"연동된 게이밍 계정 없음","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"취소","twitch_drops_platform_dialog_close_btn_label":"닫기","twitch_drops_platform_dialog_ok_btn_label":"예","twitch_drops_platform_options_description":"게이밍 플랫폼을 선택하십시오.","twitch_drops_platform_options_title":"캐릭터 추가","twitch_drops_title":"Twitch 드롭스 설정","twitch_drops_twitch_state_action_card_linked_title":"Twitch 계정 연동됨","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Twitch 연동하기","twitch_drops_twitch_state_action_card_unlinked_title":"연동된 Twitch 계정 없음","twitch_drops_view_drops_title":"드롭스 인벤토리 보기","twitch_drops_with_characters_title":"향후 보상을 위해 Twitch 드롭스 설정하기","twitch_icon":"Twitch 로고"},"pl-PL":{"twitch_drops_action_card_sign_in_button":"Zaloguj się","twitch_drops_auth_state_action_card_cta_label":"Zaloguj się","twitch_drops_auth_state_action_card_title":"Zaloguj się na konto Rockstar Games, aby rozpocząć przygotowanie","twitch_drops_body":"Aby otrzymywać wyjątkowe prezenty i nagrody w Grand Theft Auto Online, powiąż swoje konta do gier i oglądaj zaangażowane kanały Twitch.","twitch_drops_body_get_started_body":"Zaloguj się na konto Rockstar Games, aby rozpocząć przygotowanie","twitch_drops_can_claim_body":"Oglądaj kanały Twitch, które biorą udział, aby otrzymywać darmowe nagrody w grach.","twitch_drops_can_claim_title":"Wszystko gotowe","twitch_drops_character_card_error_message":"Stwórz postać Grand Theft Auto Online i ukończ samouczek, aby otrzymywać dropy.","twitch_drops_character_card_icon_label":"Uwaga","twitch_drops_check_icon_label":"Sprawdź","twitch_drops_create_your_character_for_future_rewards_body_active":"Stwórz postać Grand Theft Auto Online i ukończ samouczek, aby otrzymywać dropy.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"Aktualnie nie ma dostępnych dropów na Twitchu. Zapraszamy na kolejną rundę. Stwórz postać Grand Theft Auto Online i ukończ samouczek, aby otrzymywać dropy.","twitch_drops_create_your_character_for_future_rewards_header_active":"Stwórz postać, aby otrzymać dropy","twitch_drops_create_your_character_for_future_rewards_header_inactive":"Stwórz postać, aby otrzymywać nagrody w przyszłości","twitch_drops_dialog_no_character_found_description":"Stwórz postać Grand Theft Auto Online i ukończ samouczek, aby otrzymywać dropy.","twitch_drops_dialog_no_character_found_title":"Nie znaleziono postaci","twitch_drops_dialog_no_data_found_title":"Nie znaleziono danych","twitch_drops_find_stream_title":"Znajdź transmisje","twitch_drops_gaming_state_action_card_link_valid_character_account":"Powiąż odpowiednie konto postaci","twitch_drops_gaming_state_action_card_linked_manage_account_label":"Zarządzaj powiązanymi kontami","twitch_drops_gaming_state_action_card_linked_title":"Powiązano konto","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Powiąż konto Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"Powiąż konto gracza","twitch_drops_gaming_state_action_card_verified":"Zweryfikowano","twitch_drops_gaming_state_action_card_warning":"Zweryfikowano","twitch_drops_inactive_streams_body":"Aktualnie nie ma dostępnych dropów na Twitchu. Zapraszamy na kolejną rundę. Czekając, możesz przejrzeć swój ekwipunek i odebrać dostępne nagrody.","twitch_drops_link_another_account_title":"Powiąż kolejne konto","twitch_drops_linked_account_title":"Powiązane konta","twitch_drops_no_gaming_account_linked":"Brak powiązanego konta","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"Anuluj","twitch_drops_platform_dialog_close_btn_label":"Zamknij","twitch_drops_platform_dialog_ok_btn_label":"Ok","twitch_drops_platform_options_description":"Wybierz platformę","twitch_drops_platform_options_title":"Dodaj postać","twitch_drops_title":"Ustaw dropy na Twitchu","twitch_drops_twitch_state_action_card_linked_title":"Powiązano konto Twitch","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Powiąż konto Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"Brak powiązanego konta Twitch","twitch_drops_view_drops_title":"Przeglądaj swoje dropy","twitch_drops_with_characters_title":"Ustaw dropy na Twitchu, aby otrzymywać nagrody w przyszłości","twitch_icon":"Logo Twitch"},"pt-BR":{"twitch_drops_action_card_sign_in_button":"Iniciar sessão","twitch_drops_auth_state_action_card_cta_label":"Iniciar sessão","twitch_drops_auth_state_action_card_title":"Inicie sessão na sua conta da Rockstar Games para configurar.","twitch_drops_body":"Para receber recompensas e presentes especiais no Grand Theft Auto Online, vincule suas contas de jogo e assista aos canais da Twitch participantes.","twitch_drops_body_get_started_body":"Inicie sessão na sua conta da Rockstar Games para configurar.","twitch_drops_can_claim_body":"Para resgatar uma recompensa grátis no jogo, assista aos canais da Twitch participantes.","twitch_drops_can_claim_title":"Tudo pronto","twitch_drops_character_card_error_message":"Crie um personagem do Grand Theft Auto Online e conclua o tutorial no jogo para receber Drops.","twitch_drops_character_card_icon_label":"Alerta","twitch_drops_check_icon_label":"Verificar","twitch_drops_create_your_character_for_future_rewards_body_active":"Crie um personagem do Grand Theft Auto Online e conclua o tutorial no jogo para receber Drops.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"Não há Drops da Twitch disponíveis no momento, mas fique de olho. Crie um personagem do Grand Theft Auto Online e conclua o tutorial no jogo para receber Drops.","twitch_drops_create_your_character_for_future_rewards_header_active":"Crie seu personagem para receber Drops","twitch_drops_create_your_character_for_future_rewards_header_inactive":"Crie seu personagem para obter recompensas futuras","twitch_drops_dialog_no_character_found_description":"Crie um personagem do Grand Theft Auto Online e conclua o tutorial no jogo para receber Drops.","twitch_drops_dialog_no_character_found_title":"Nenhum personagem encontrado","twitch_drops_dialog_no_data_found_title":"Nenhum dado encontrado","twitch_drops_find_stream_title":"Encontrar transmissões","twitch_drops_gaming_state_action_card_link_valid_character_account":"Vincule uma conta de personagem válida","twitch_drops_gaming_state_action_card_linked_manage_account_label":"Gerenciar contas vinculadas","twitch_drops_gaming_state_action_card_linked_title":"Conta de jogo vinculada.","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Vincular Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"Vincular conta de jogo","twitch_drops_gaming_state_action_card_verified":"Verificado","twitch_drops_gaming_state_action_card_warning":"Verificado","twitch_drops_inactive_streams_body":"Não há Drops da Twitch disponíveis no momento, mas fique de olho na próxima rodada. Enquanto isso, gerencie seu inventário e resgate suas recompensas disponíveis.","twitch_drops_link_another_account_title":"Vincular outra conta","twitch_drops_linked_account_title":"Contas vinculadas","twitch_drops_no_gaming_account_linked":"Nenhuma conta de jogo vinculada.","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"Cancelar","twitch_drops_platform_dialog_close_btn_label":"Fechar","twitch_drops_platform_dialog_ok_btn_label":"Ok","twitch_drops_platform_options_description":"Selecione sua plataforma de jogo.","twitch_drops_platform_options_title":"Adicionar um personagem","twitch_drops_title":"Habilite seus Drops da Twitch","twitch_drops_twitch_state_action_card_linked_title":"Conta da Twitch vinculada.","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Vincular Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"Nenhuma conta da Twitch vinculada.","twitch_drops_view_drops_title":"Ver inventário de Drops","twitch_drops_with_characters_title":"Habilite seus Drops da Twitch para obter recompensas futuras","twitch_icon":"Logotipo da Twitch"},"ru-RU":{"twitch_drops_action_card_sign_in_button":"Войти","twitch_drops_auth_state_action_card_cta_label":"Войти","twitch_drops_auth_state_action_card_title":"Войдите в свою учетную запись Rockstar Games, чтобы начать настройку","twitch_drops_body":"Привяжите свою учетную запись и смотрите трансляции на каналах Twitch, участвующих в кампании, чтобы разблокировать особые награды и бонусы в Grand Theft Auto Online.","twitch_drops_body_get_started_body":"Войдите в учетную запись Rockstar Games, чтобы начать настройку","twitch_drops_can_claim_body":"Чтобы получить внутриигровую награду, смотрите трансляции на каналах Twitch, участвующих в кампании.","twitch_drops_can_claim_title":"Все готово!","twitch_drops_character_card_error_message":"Чтобы получить Drops, создайте персонажа Grand Theft Auto Online и пройдите обучающие задания в игре.","twitch_drops_character_card_icon_label":"Логотип «Внимание»","twitch_drops_check_icon_label":"Логотип с галочкой","twitch_drops_create_your_character_for_future_rewards_body_active":"Чтобы получить Drops, создайте персонажа Grand Theft Auto Online и пройдите обучающие задания в игре.","twitch_drops_create_your_character_for_future_rewards_body_inactive":"Twitch Drops пока что нет – они появятся позже. Чтобы получить Drops, создайте персонажа Grand Theft Auto Online и пройдите обучающие задания в игре.","twitch_drops_create_your_character_for_future_rewards_header_active":"Создайте персонажа, чтобы получить Drops","twitch_drops_create_your_character_for_future_rewards_header_inactive":"Создайте персонажа, чтобы получать будущие награды","twitch_drops_dialog_no_character_found_description":"Чтобы получить Drops, создайте персонажа Grand Theft Auto Online и пройдите обучающие задания в игре.","twitch_drops_dialog_no_character_found_title":"Персонаж не найден","twitch_drops_dialog_no_data_found_title":"Данные не найдены","twitch_drops_find_stream_title":"Поиск трансляций","twitch_drops_gaming_state_action_card_link_valid_character_account":"Привяжите учетную запись с действительным персонажем","twitch_drops_gaming_state_action_card_linked_manage_account_label":"Изменить привязанные учетные записи","twitch_drops_gaming_state_action_card_linked_title":"Игровая учетная запись привязана","twitch_drops_gaming_state_action_card_unlinked_cta_label":"Привязать учетную запись Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"Привязать игровую учетную запись","twitch_drops_gaming_state_action_card_verified":"Проверено","twitch_drops_gaming_state_action_card_warning":"Проверено","twitch_drops_inactive_streams_body":"Twitch Drops пока что нет – они появятся позже. А пока вы ожидаете, вы можете просмотреть свой инвентарь и забрать доступные награды.","twitch_drops_link_another_account_title":"Привязать другую учетную запись","twitch_drops_linked_account_title":"Привязанные учетные записи","twitch_drops_no_gaming_account_linked":"Игровая учетная запись не привязана","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"Отменить","twitch_drops_platform_dialog_close_btn_label":"Закрыть","twitch_drops_platform_dialog_ok_btn_label":"OК","twitch_drops_platform_options_description":"Выберите вашу игровую платформу.","twitch_drops_platform_options_title":"Добавить персонажа","twitch_drops_title":"Настройте Twitch Drops","twitch_drops_twitch_state_action_card_linked_title":"Учетная запись Twitch привязана","twitch_drops_twitch_state_action_card_unlinked_cta_label":"Привязать учетную запись Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"Учетная запись Twitch не привязана","twitch_drops_view_drops_title":"Просмотр инвентаря Drops","twitch_drops_with_characters_title":"Настройте Twitch Drops, чтобы получать будущие награды","twitch_icon":"Логотип Twitch"},"zh-CN":{"twitch_drops_action_card_sign_in_button":"登录","twitch_drops_auth_state_action_card_cta_label":"登录","twitch_drops_auth_state_action_card_title":"登录您的 Rockstar Games 账户以开始设置","twitch_drops_body":"若想在 Grand Theft Auto 在线模式中获得特殊礼物和奖励，请绑定您的游戏账户并观看参与的 Twitch 频道。","twitch_drops_body_get_started_body":"登录 Rockstar Games 账户以开始设置","twitch_drops_can_claim_body":"观看参与的 Twitch 频道，领取免费的游戏内奖励。","twitch_drops_can_claim_title":"设置完成","twitch_drops_character_card_error_message":"创建一个 Grand Theft Auto 在线模式角色，完成游戏内教程后即可收到 drops。","twitch_drops_character_card_icon_label":"注意","twitch_drops_check_icon_label":"检查","twitch_drops_create_your_character_for_future_rewards_body_active":"创建一个 Grand Theft Auto 在线模式角色，完成游戏内教程后即可收到 Drops。","twitch_drops_create_your_character_for_future_rewards_body_inactive":"目前没有可用的 Twitch Drops，敬请期待。创建一个 Grand Theft Auto 在线模式角色，完成游戏内教程后即可收到 Drops。","twitch_drops_create_your_character_for_future_rewards_header_active":"创建您的角色来领取 Drops","twitch_drops_create_your_character_for_future_rewards_header_inactive":"创建您的角色，以获得未来奖励","twitch_drops_dialog_no_character_found_description":"创建一个 Grand Theft Auto 在线模式角色，完成游戏内教程后即可收到 drops。","twitch_drops_dialog_no_character_found_title":"未找到角色","twitch_drops_dialog_no_data_found_title":"未找到数据","twitch_drops_find_stream_title":"寻找直播","twitch_drops_gaming_state_action_card_link_valid_character_account":"绑定一个有效的角色账户","twitch_drops_gaming_state_action_card_linked_manage_account_label":"管理已绑定的账户","twitch_drops_gaming_state_action_card_linked_title":"已绑定游戏账户","twitch_drops_gaming_state_action_card_unlinked_cta_label":"绑定 Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"绑定游戏账户","twitch_drops_gaming_state_action_card_verified":"已验证","twitch_drops_gaming_state_action_card_warning":"已验证","twitch_drops_inactive_streams_body":"现在没有可用的 Twitch Drops，请关注下一轮。与此同时，您可以管理您的库存，并领取可用的奖励。","twitch_drops_link_another_account_title":"绑定另一个账户","twitch_drops_linked_account_title":"已绑定的账户","twitch_drops_no_gaming_account_linked":"无绑定的游戏账户","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"取消","twitch_drops_platform_dialog_close_btn_label":"关闭","twitch_drops_platform_dialog_ok_btn_label":"确定","twitch_drops_platform_options_description":"选择您的游戏平台。","twitch_drops_platform_options_title":"添加一个角色","twitch_drops_title":"设置您的 Twitch Drops","twitch_drops_twitch_state_action_card_linked_title":"已绑定 Twitch 账户","twitch_drops_twitch_state_action_card_unlinked_cta_label":"绑定 Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"没有已绑定的 Twitch 账户","twitch_drops_view_drops_title":"查看 Drops 库存","twitch_drops_with_characters_title":"设置您的 Twitch Drops，在未来获得奖励","twitch_icon":"Twitch 徽标"},"zh-TW":{"twitch_drops_action_card_sign_in_button":"登入","twitch_drops_auth_state_action_card_cta_label":"登入","twitch_drops_auth_state_action_card_title":"登入您的 Rockstar Games 帳戶以開始設置","twitch_drops_body":"連結您的遊戲帳戶並觀看參與的 Twitch 頻道，以獲得 Grand Theft Auto 線上模式中的特殊禮物和獎勵。","twitch_drops_body_get_started_body":"登入您的 Rockstar Games 帳戶以開始設置","twitch_drops_can_claim_body":"觀看參與的 Twitch 頻道，以領取遊戲內獎勵。","twitch_drops_can_claim_title":"一切就緒","twitch_drops_character_card_error_message":"創建一個 Grand Theft Auto 線上模式角色並完成遊戲內的教學，以獲得掉寶。","twitch_drops_character_card_icon_label":"警告","twitch_drops_check_icon_label":"確認","twitch_drops_create_your_character_for_future_rewards_body_active":"創建一個 Grand Theft Auto 線上模式角色並完成遊戲內的教學，以獲得掉寶。","twitch_drops_create_your_character_for_future_rewards_body_inactive":"目前並沒有 Twitch 掉寶，敬請期待。創建一個 Grand Theft Auto 線上模式角色並完成遊戲內的教學，以獲得掉寶。","twitch_drops_create_your_character_for_future_rewards_header_active":"創建您的角色以獲得掉寶","twitch_drops_create_your_character_for_future_rewards_header_inactive":"創建您的角色，方便取得未來的獎勵","twitch_drops_dialog_no_character_found_description":"創建一個 Grand Theft Auto 線上模式角色並完成遊戲內的教學，以獲得掉寶。","twitch_drops_dialog_no_character_found_title":"找不到角色","twitch_drops_dialog_no_data_found_title":"找不到資料","twitch_drops_find_stream_title":"尋找實況","twitch_drops_gaming_state_action_card_link_valid_character_account":"連結一個有效角色的帳戶","twitch_drops_gaming_state_action_card_linked_manage_account_label":"管理已連結的帳戶","twitch_drops_gaming_state_action_card_linked_title":"已連結遊戲帳戶","twitch_drops_gaming_state_action_card_unlinked_cta_label":"連結 Twitch","twitch_drops_gaming_state_action_card_unlinked_title":"連結遊戲帳戶","twitch_drops_gaming_state_action_card_verified":"已驗證","twitch_drops_gaming_state_action_card_warning":"已驗證","twitch_drops_inactive_streams_body":"目前並沒有 Twitch 掉寶，敬請期待下一次機會。在此期間，您可以管理您的庫存並領取您可用的獎勵。","twitch_drops_link_another_account_title":"連結另一個帳戶","twitch_drops_linked_account_title":"已連結的帳戶","twitch_drops_no_gaming_account_linked":"無已連結的遊戲帳戶","twitch_drops_platform_alt_tag_pc":"PC","twitch_drops_platform_alt_tag_ps":"PlayStation","twitch_drops_platform_alt_tag_xbox":"XBOX","twitch_drops_platform_dialog_cancel_btn_label":"取消","twitch_drops_platform_dialog_close_btn_label":"關閉","twitch_drops_platform_dialog_ok_btn_label":"好的","twitch_drops_platform_options_description":"選擇您的遊戲平台。","twitch_drops_platform_options_title":"添加一個角色","twitch_drops_title":"設置您的 Twitch 掉寶","twitch_drops_twitch_state_action_card_linked_title":"已連結 Twitch 帳戶","twitch_drops_twitch_state_action_card_unlinked_cta_label":"連結 Twitch","twitch_drops_twitch_state_action_card_unlinked_title":"無已連結的 Twitch 帳戶","twitch_drops_view_drops_title":"查看掉寶庫存","twitch_drops_with_characters_title":"設置您的 Twitch 掉寶，方便取得未來的獎勵","twitch_icon":"Twitch 標誌"}}');
      var c = a(62229),
        n = a(95966),
        _ = a(2918);
      const s = (0, n.setContextItem)({
          context: (0, c.createContext)(null),
          key: "twitchDrops"
        }),
        d = ({
          children: t
        }) => {
          const {
            loggedIn: e,
            data: a,
            loading: i
          } = (0, _.useRockstarUser)(), [o, d] = (0, c.useState)(!1), [A, l] = (0, c.useState)(!1), [p, h] = (0, c.useState)(), [u, f] = (0, c.useState)(), [w, g] = (0, c.useState)(), [m, b] = (0, c.useState)(), [v, y] = (0, c.useState)({}), k = a?.linkedAccounts?.some((t => "twitch" === t?.onlineService)) ?? !1, x = (0, n.useRockstarTokenPing)(), j = a?.characters?.gtao || [], T = new Set(["xbl", "ps", "np"]), D = new Set(j.map((t => (0, n.findPlatform)(t.platform))).flatMap((t => [t?.onlineService, t?.aliasOnlineService].filter(Boolean))).filter((t => t && T.has(t)))), P = {
            activeStreams: p,
            canClaim: w,
            characters: j,
            hasValidGamingAccount: u,
            hasFetchFailed: A,
            isFetching: o,
            isLoggedIn: e,
            isTwitchLinked: k,
            linkedAccounts: a?.linkedAccounts,
            tutorialCompletion: v,
            filteredLinkedAccounts: a?.linkedAccounts?.filter((t => T.has(t.onlineService) && !D.has(t.onlineService))),
            setActiveStreams: h,
            setShowCharacterCards: b,
            showCharacterCards: m,
            trackingParent: "twitch drops"
          };
          return (0, c.useEffect)((() => {
            (async () => {
              if (e && (a?.characters?.gtao ?? []).length > 0) {
                d(!0);
                try {
                  const t = [...new Set(a.characters?.gtao.map((t => t.platform)) || [])],
                    e = await (async t => {
                      try {
                        const e = 33,
                          a = t.map((t => `platforms=${encodeURIComponent(t)}`)).join("&");
                        return await (0, n.coreScApiFetch)(`/achievements/hasAchievement?title=gtav&achievementId=${e}&${a}`, {
                          pingBearer: x
                        })
                      } catch (t) {
                        return console.error("Failed to fetch tutorial completion:", t), {
                          status: !1,
                          platforms: {}
                        }
                      }
                    })(t);
                  if (e.status) {
                    const t = Object.entries(e.platforms).some((([, t]) => t)) ?? !1;
                    f(t), y(e.platforms), d(!1)
                  } else l(!0)
                } catch (t) {
                  console.error("Error fetching data:", t), l(!0)
                }
              } else !i && a?.characters?.gtao && 0 === a.characters.gtao.length && (f(!1), d(!1))
            })()
          }), [e, a?.characters?.gtao, i]), (0, c.useEffect)((() => {
            void 0 !== k && void 0 !== u && g(k && u || k && a?.characters?.gtao && a?.characters?.gtao.length > 0 || k && P.filteredLinkedAccounts && P.filteredLinkedAccounts.length > 0)
          }), [w, u, k]), A ? null : (0, r.jsx)(s.Provider, {
            value: P,
            children: t
          })
        },
        A = () => {
          const t = (0, c.useContext)(s);
          if (void 0 === t) throw new Error("useTwitchDrops must be used within a TwitchDropsProvider");
          return t
        };
      var l = a(9623),
        p = a(61128),
        h = a(72408),
        u = a(4572),
        f = a.n(u),
        w = a(32067),
        g = a(973),
        m = a(69190),
        b = a(96117),
        v = a(96311);
      const y = (0, c.forwardRef)((function({
          testId: t,
          state: e = "default",
          asChild: a,
          children: i,
          ...o
        }, c) {
          const n = a ? w.DX : "div",
            _ = (0, g.v6)(o, {
              className: "rockstargames-sites-gta-gen9a9cebeeb3af7469d45a5139a0606b21e",
              "data-testid": t,
              "data-state": e
            });
          return (0, r.jsx)(n, {
            ref: c,
            ..._,
            children: (0, r.jsx)(r.Fragment, {
              children: i
            })
          })
        })),
        k = (0, c.forwardRef)((function({
          asChild: t,
          testId: e,
          ...a
        }, i) {
          const o = t ? w.DX : "div",
            c = (0, g.v6)(a, {
              className: "rockstargames-sites-gta-gen9b1fe23bea3f2fba242edd0a1fc405b03",
              "data-testid": e
            });
          return (0, r.jsx)(o, {
            ref: i,
            ...c
          })
        })),
        x = (0, c.forwardRef)((function({
          testId: t,
          icon: e,
          ...a
        }, i) {
          const o = (0, g.v6)(a, {
            className: "rockstargames-sites-gta-gen9b0bba94052845aef23c56859a95b5c24",
            "data-testid": t
          });
          if (e && "Rockstar" === e) return (0, r.jsx)(b.A, {
            ...o,
            disableLink: !0,
            "aria-label": "Rockstar Games"
          });
          const c = e && v[e];
          return (0, r.jsx)(c, {
            ref: i,
            ...o
          })
        })),
        j = (0, c.forwardRef)((function({
          testId: t,
          asChild: e,
          ...a
        }, i) {
          const o = e ? w.DX : "div",
            c = (0, g.v6)(a, {
              className: "rockstargames-sites-gta-gen9c1b4445e027468d78369dd46b19839ba",
              "data-testid": t
            });
          return (0, r.jsx)(o, {
            ref: i,
            ...c
          })
        })),
        T = (0, c.forwardRef)((function({
          testId: t,
          appearance: e = "monochrome",
          asChild: a,
          children: i,
          className: o,
          ...c
        }, n) {
          const _ = (0, g.v6)(c, {
            appearance: e,
            className: f()("rockstargames-sites-gta-gen9c054ca052ed2ce9a96787dea8065b008", o),
            "data-testid": t,
            ref: n,
            allCaps: !0,
            size: "MD",
            asChild: a
          });
          return (0, r.jsx)(m.Button, {
            ..._,
            children: i
          })
        })),
        D = (0, i.defineMessages)({
          twitch_drops_auth_state_action_card_title: {
            id: "twitch_drops_auth_state_action_card_title",
            description: "Twitch Drops Auth Action Card title.",
            defaultMessage: "Sign in to your Rockstar Games account to start setup"
          },
          twitch_drops_auth_state_action_card_cta_label: {
            id: "twitch_drops_auth_state_action_card_cta_label",
            description: "Twitch Drops Auth Action Card CTA Label.",
            defaultMessage: "Sign In"
          },
          twitch_drops_twitch_state_action_card_linked_title: {
            id: "twitch_drops_twitch_state_action_card_linked_title",
            description: "Twitch Drops Twitch Action Card linked title.",
            defaultMessage: "Twitch account linked"
          },
          twitch_drops_twitch_state_action_card_unlinked_title: {
            id: "twitch_drops_twitch_state_action_card_unlinked_title",
            description: "Twitch Drops Twitch Action Card unlinked title.",
            defaultMessage: "No Twitch account linked"
          },
          twitch_drops_twitch_state_action_card_unlinked_cta_label: {
            id: "twitch_drops_twitch_state_action_card_unlinked_cta_label",
            description: "Twitch Drops Twitch Action Card unlinked CTA Label.",
            defaultMessage: "Link Twitch"
          },
          twitch_drops_gaming_state_action_card_linked_title: {
            id: "twitch_drops_gaming_state_action_card_linked_title",
            description: "Twitch Drops Gaming Account Action Card linked title.",
            defaultMessage: "Gaming account linked"
          },
          twitch_drops_gaming_state_action_card_linked_manage_account_label: {
            id: "twitch_drops_gaming_state_action_card_linked_manage_account_label",
            description: "Twitch Drops Gaming Account Action Card Manage Account Label.",
            defaultMessage: "Manage Linked Accounts"
          },
          twitch_drops_gaming_state_action_card_verified: {
            id: "twitch_drops_gaming_state_action_card_verified",
            description: "Twitch Drops Gaming Account Action Card Verified Label.",
            defaultMessage: "Verified"
          },
          twitch_drops_gaming_state_action_card_warning: {
            id: "twitch_drops_gaming_state_action_card_warning",
            description: "Twitch Drops Gaming Account Action Card Warning Label.",
            defaultMessage: "Verified"
          },
          twitch_drops_gaming_state_action_card_link_valid_character_account: {
            id: "twitch_drops_gaming_state_action_card_link_valid_character_account",
            description: "Twitch Drops Action Card Description for valid character account",
            defaultMessage: "Link a valid character account"
          },
          twitch_drops_gaming_state_action_card_unlinked_title: {
            id: "twitch_drops_gaming_state_action_card_unlinked_title",
            description: "Twitch Drops Gaming Account Action Card unlinked title.",
            defaultMessage: "Link gaming account"
          },
          twitch_drops_gaming_state_action_card_unlinked_cta_label: {
            id: "twitch_drops_gaming_state_action_card_unlinked_cta_label",
            description: "Twitch Drops Gaming Account Action Card unlinked CTA Label.",
            defaultMessage: "Link Twitch"
          },
          twitch_drops_platform_options_title: {
            id: "twitch_drops_platform_options_title",
            description: "Title for the Twitch Drops platform selector dialog.",
            defaultMessage: "Add a Character"
          },
          twitch_drops_platform_options_description: {
            id: "twitch_drops_platform_options_description",
            description: "Description for the Twitch Drops platform selector dialog.",
            defaultMessage: "Select your gaming platform."
          },
          twitch_drops_platform_options_cancel: {
            id: "twitch_drops_platform_dialog_cancel_btn_label",
            description: "Twitch Drops dialog cancel button label.",
            defaultMessage: "Cancel"
          },
          twitch_drops_check_icon_label: {
            id: "twitch_drops_check_icon_label",
            description: "Twitch Drops check icon label.",
            defaultMessage: "Check"
          },
          twitch_drops_dialog_no_character_found_title: {
            id: "twitch_drops_dialog_no_character_found_title",
            description: "Twitch Drops platform no character found dialog title.",
            defaultMessage: "No Character Found"
          },
          twitch_drops_dialog_no_data_found_title: {
            id: "twitch_drops_dialog_no_data_found_title",
            description: "Twitch Drops platform no data found dialog title.",
            defaultMessage: "No Data Found"
          },
          twitch_drops_dialog_no_character_found_description: {
            id: "twitch_drops_dialog_no_character_found_description",
            description: "Twitch Drops platform no character found dialog description.",
            defaultMessage: "Create a Grand Theft Auto Online character and complete the in-game tutorial to receive drops."
          },
          twitch_drops_find_stream_title: {
            id: "twitch_drops_find_stream_title",
            description: "Title for the Twitch Drops Find Streams CTA.",
            defaultMessage: "Find Streams"
          },
          twitch_drops_create_your_character_for_future_rewards_header_active: {
            id: "twitch_drops_create_your_character_for_future_rewards_header_active",
            description: "Title for the Create Your Character for Future Rewards Active.",
            defaultMessage: "Create your Character to get Drops"
          },
          twitch_drops_create_your_character_for_future_rewards_header_inactive: {
            id: "twitch_drops_create_your_character_for_future_rewards_header_inactive",
            description: "Title for the Create Your Character for Future Rewards Inactive.",
            defaultMessage: "Create Your Character for Future Rewards"
          },
          twitch_drops_create_your_character_for_future_rewards_body_active: {
            id: "twitch_drops_create_your_character_for_future_rewards_body_active",
            description: "Title for the Create Your Character for Future Rewards Active.",
            defaultMessage: "Create a Grand Theft Auto Online character and complete the in-game tutorial to receive Drops."
          },
          twitch_drops_create_your_character_for_future_rewards_body_inactive: {
            id: "twitch_drops_create_your_character_for_future_rewards_body_inactive",
            description: "Title for the Create Your Character for Future Rewards Inactive.",
            defaultMessage: "There are no Twitch Drops available right now, but stay tuned. Create a Grand Theft Auto Online character and complete the in-game tutorial to receive Drops."
          },
          twitch_drops_view_drops_title: {
            id: "twitch_drops_view_drops_title",
            description: "Title for the Twitch Drops View Drops Inventory CTA.",
            defaultMessage: "View Drops Inventory"
          },
          twitch_drops_platform_dialog_close_btn_label: {
            id: "twitch_drops_platform_dialog_close_btn_label",
            description: "Twitch Drops dialog close button label.",
            defaultMessage: "Close"
          },
          twitch_drops_platform_dialog_cancel_btn_label: {
            id: "twitch_drops_platform_dialog_cancel_btn_label",
            description: "Twitch Drops dialog cancel button label.",
            defaultMessage: "Cancel"
          },
          twitch_drops_platform_dialog_ok_btn_label: {
            id: "twitch_drops_platform_dialog_ok_btn_label",
            description: "Twitch Drops dialog ok button label.",
            defaultMessage: "Ok"
          },
          twitch_drops_platform_alt_tag_ps: {
            id: "twitch_drops_platform_alt_tag_ps",
            description: "Twitch Drops platform selector dialog alt tag for playstation platform.",
            defaultMessage: "PlayStation"
          },
          twitch_drops_platform_alt_tag_xbox: {
            id: "twitch_drops_platform_alt_tag_xbox",
            description: "Twitch Drops platform selector dialog alt tag for xbox platform.",
            defaultMessage: "XBOX"
          },
          twitch_drops_platform_alt_tag_pc: {
            id: "twitch_drops_platform_alt_tag_pc",
            description: "Twitch Drops platform selector dialog alt tag for pc platform.",
            defaultMessage: "PC"
          },
          twitch_drops_title: {
            id: "twitch_drops_title",
            description: "Twitch Drops header title ",
            defaultMessage: "Set Up Your Twitch Drops"
          },
          twitch_drops_linked_account_title: {
            id: "twitch_drops_linked_account_title",
            description: "Twitch Drops Linked Account title.",
            defaultMessage: "Linked Accounts"
          },
          twitch_drops_no_gaming_account_linked: {
            id: "twitch_drops_no_gaming_account_linked",
            description: "No gaming account linked.",
            defaultMessage: "No gaming account linked"
          },
          twitch_drops_character_card_error_message: {
            id: "twitch_drops_character_card_error_message",
            description: "Twitch Drops Character Card error message.",
            defaultMessage: "Create a Grand Theft Auto Online character and complete the in-game tutorial to receive drops."
          },
          twitch_drops_character_card_icon_label: {
            id: "twitch_drops_character_card_icon_label",
            description: "Label for Alert Icon",
            defaultMessage: "Alert"
          },
          twitch_drops_link_another_account_title: {
            id: "twitch_drops_link_another_account_title",
            description: "Twitch Drops Link Another Account title.",
            defaultMessage: "Link Another Account"
          },
          twitch_drops_can_claim_title: {
            id: "twitch_drops_can_claim_title",
            description: "Twitch Drops header can claim title ",
            defaultMessage: "You're All Set"
          },
          twitch_drops_can_claim_body: {
            id: "twitch_drops_can_claim_body",
            description: "Twitch Drops header can claim body ",
            defaultMessage: "To claim the free in-game reward, watch participating Twitch channels."
          },
          twitch_drops_inactive_streams_body: {
            id: "twitch_drops_inactive_streams_body",
            description: "Twitch Drops body text for inactive streams ",
            defaultMessage: "There are no Twitch Drops available right now, but stay tuned for the next round. In the meantime, manage your inventory and claim your available rewards."
          },
          twitch_drops_with_characters_title: {
            id: "twitch_drops_with_characters_title",
            description: "Twitch Drops header title ",
            defaultMessage: "Set Up Your Twitch Drops for Future Rewards"
          },
          twitch_drops_body: {
            id: "twitch_drops_body",
            description: "For special gifts and rewards in Grand Theft Auto Online, link your gaming accounts and watch participating Twitch channels.",
            defaultMessage: "For special gifts and rewards in Grand Theft Auto Online, link your gaming accounts and watch participating Twitch channels."
          },
          twitch_drops_body_sign_in_body: {
            id: "twitch_drops_body_get_started_body",
            description: "Sign in to Rockstar Games account to start setup",
            defaultMessage: "Sign in to Rockstar Games account to start setup"
          },
          twitch_drops_action_card_sign_in_button: {
            id: "twitch_drops_action_card_sign_in_button",
            description: "Sign In",
            defaultMessage: "Sign In"
          },
          twitch_icon: {
            id: "twitch_icon",
            description: "Twitch Logo",
            defaultMessage: "Twitch Logo"
          }
        }),
        P = () => {
          const t = (0, i.useIntl)(),
            {
              track: e
            } = (0, _.useGtmTrack)(),
            a = A(),
            o = window.location.pathname,
            {
              signInUrl: c
            } = (0, n.useScAuthLinks)(o);
          if (!a) return;
          const {
            isLoggedIn: s,
            trackingParent: d
          } = a;
          return (0, r.jsxs)(y, {
            state: "default",
            children: [(0, r.jsxs)(k, {
              children: [(0, r.jsx)(x, {
                icon: "Rockstar",
                label: "Rockstar"
              }), (0, r.jsx)(j, {
                children: t.formatMessage(D.twitch_drops_auth_state_action_card_title)
              })]
            }), (0, r.jsx)(T, {
              asChild: !0,
              children: (0, r.jsx)("a", {
                href: c,
                onClick: () => {
                  e({
                    event: "cta_login",
                    text: D.twitch_drops_auth_state_action_card_cta_label.defaultMessage.toLowerCase(),
                    section_layout: s ? "signed in" : "signed out",
                    element_placement: d
                  })
                },
                children: t.formatMessage(D.twitch_drops_auth_state_action_card_cta_label)
              })
            })]
          })
        },
        C = () => {
          const t = (0, i.useIntl)(),
            {
              track: e
            } = (0, _.useGtmTrack)(),
            a = A(),
            {
              scBase: o
            } = (0, n.getConfigForDomain)(),
            s = (0, n.useRockstarTokenPing)(),
            d = window.location.pathname,
            l = `${o}settings/linkedaccounts`,
            p = (0, c.useMemo)((() => a?.linkedAccounts?.find((t => "twitch" === t?.onlineService))), [a?.linkedAccounts]);
          if (!a) return null;
          const {
            isTwitchLinked: h,
            trackingParent: u
          } = a;
          return (0, r.jsxs)(y, {
            state: h ? "success" : "default",
            children: [(0, r.jsxs)(k, {
              children: [(0, r.jsx)(x, {
                icon: h ? "Check" : "Twitch",
                label: h ? "Check" : "Twitch"
              }), (0, r.jsx)(j, {
                children: h ? t.formatMessage(D.twitch_drops_twitch_state_action_card_linked_title) : t.formatMessage(D.twitch_drops_twitch_state_action_card_unlinked_title)
              })]
            }), h ? (0, r.jsx)(T, {
              iconLeft: "Twitch",
              appearance: "monochrome",
              asChild: !0,
              children: (0, r.jsx)("a", {
                href: l,
                "data-testid": "twitch-profile-link",
                target: "_blank",
                rel: "noreferrer",
                onClick: () => {
                  e({
                    event: "cta_link_account",
                    text: "link another account",
                    element_placement: u
                  })
                },
                children: p?.userName || ""
              })
            }) : (0, r.jsx)(T, {
              "data-testid": "twitch-connect-link",
              onClick: async () => {
                e({
                  event: "cta_link_account",
                  text: "link twitch",
                  element_placement: u?.toLowerCase()
                });
                const t = await (0, n.generateTpaLink)({
                  pingBearer: s,
                  returnUrl: d,
                  service: "twitch"
                });
                window.location.href = t.href
              },
              children: t.formatMessage(D.twitch_drops_twitch_state_action_card_unlinked_cta_label)
            })]
          })
        };
      var M = a(63405);
      const z = (0, c.createContext)({
          closeProps: {
            ref: (0, c.createRef)()
          },
          setCloseProps: () => {}
        }),
        E = ({
          testId: t,
          ...e
        }) => {
          const a = (0, c.useRef)(null),
            [i, o] = (0, c.useState)({
              ref: a
            }),
            n = (0, g.v6)(e, {
              "data-testid": t
            });
          return (0, r.jsx)(z.Provider, {
            value: {
              closeProps: i,
              setCloseProps: o
            },
            children: (0, r.jsx)(M.bL, {
              ...n
            })
          })
        },
        G = (0, c.forwardRef)((function({
          testId: t,
          ...e
        }, a) {
          const i = (0, g.v6)(e, {
            asChild: !0,
            "data-testid": t
          });
          return (0, r.jsx)(M.l9, {
            ref: a,
            ...i
          })
        })),
        O = ({
          testId: t,
          ...e
        }) => {
          const a = (0, g.v6)(e, {
            "data-testid": t
          });
          return (0, r.jsx)(M.ZL, {
            ...a
          })
        },
        L = (0, c.forwardRef)((function({
          testId: t,
          ...e
        }, a) {
          const i = (0, g.v6)(e, {
            "data-testid": t,
            className: "rockstargames-sites-gta-gen9a4f82184864de494be7bba0adebc65dc"
          });
          return (0, r.jsx)(M.hJ, {
            ref: a,
            ...i
          })
        })),
        N = (0, c.forwardRef)((function({
          testId: t,
          ...e
        }, a) {
          const i = (0, g.v6)(e, {
            asChild: !0,
            "data-testid": t
          });
          return (0, r.jsx)(M.bm, {
            ref: a,
            ...i
          })
        })),
        I = (0, c.forwardRef)((function({
          children: t,
          testId: e,
          ...a
        }, i) {
          const o = (0, g.v6)(a, {
            "data-testid": e,
            className: "rockstargames-sites-gta-gen9f62947059d0ce17aef7e4307e3e49b66"
          });
          return (0, r.jsx)(M.UC, {
            ref: i,
            ...o,
            children: (0, r.jsx)(w.xV, {
              children: t
            })
          })
        })),
        S = (0, c.forwardRef)((function({
          testId: t,
          ...e
        }, a) {
          const i = (0, g.v6)(e, {
            "data-testid": t
          });
          return (0, r.jsx)(M.hE, {
            ref: a,
            ...i
          })
        }));
      var X = a(83550),
        R = a(69055);
      const B = ({
          children: t
        }) => (0, r.jsx)(R.bL, {
          children: t
        }),
        Z = {
          alert: "rockstargames-sites-gta-gen9bcfaced142f6fe094166ec2512f9e46b",
          closeButton: "rockstargames-sites-gta-gen9d1b7b447c16cefbdee5ad59e7b68f86b",
          contentBlock: "rockstargames-sites-gta-gen9dbc4ca3357c35d3e0e19ed8ad95a0345",
          ctas: "rockstargames-sites-gta-gen9b1044cdb0d8f05dd2f587b5577310883",
          description: "rockstargames-sites-gta-gen9d5023e95d1cc2d3bfbb4c34517f60f3a",
          header: "rockstargames-sites-gta-gen9a6b70255a1d5a519713ba1539f4625d8",
          icon: "rockstargames-sites-gta-gen9f1d1638e526c51005f37452d53c31151",
          link: "rockstargames-sites-gta-gen9cd6940a133bd1efebacdb7faaaf08880",
          okButton: "rockstargames-sites-gta-gen9df2cc2bc42c544f355bf29403197e46a",
          pc: "rockstargames-sites-gta-gen9f61e7995428d7de7138b74ae344f7eaa",
          pillBtn: "rockstargames-sites-gta-gen9d8ce457b8fc1a70cac48c1d2ab8748ad",
          ps: "rockstargames-sites-gta-gen9b39dd1e36922daeabdd78108545a94c5",
          selected: "rockstargames-sites-gta-gen9d454b594b73c1538f820b0e4bdaa2ee0",
          title: "rockstargames-sites-gta-gen9f683b3575745dd20581d9ab64cbd79ff",
          triggerButton: "rockstargames-sites-gta-gen9bd3758fd41a44d885478bc015af58466",
          xbox: "rockstargames-sites-gta-gen9d87840fcba9d29d24298c6b3be10887b"
        },
        Y = () => {
          const t = (0, n.useRockstarTokenPing)(),
            e = (0, i.useIntl)(),
            {
              track: a
            } = (0, _.useGtmTrack)(),
            o = A(),
            s = window.location.pathname,
            [d, l] = (0, c.useState)(!1),
            [p, h] = (0, c.useState)(!1),
            {
              trackingParent: u
            } = o,
            w = (0, c.useRef)(null),
            g = [{
              label: "PlayStation",
              platform: (0, n.findPlatform)("ps")
            }, {
              label: "Xbox",
              platform: (0, n.findPlatform)("xbox")
            }, {
              label: "PC",
              platform: (0, n.findPlatform)("pc")
            }],
            b = () => {
              a({
                event: "modal_close",
                text: D.twitch_drops_platform_dialog_close_btn_label.defaultMessage.toLowerCase(),
                element_placement: u?.toLowerCase()
              })
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(E, {
              open: d,
              onOpenChange: l,
              children: [(0, r.jsx)(G, {
                children: (0, r.jsx)(m.Button, {
                  appearance: "primary",
                  size: "MD",
                  className: Z.triggerButton,
                  onPress: () => {
                    a({
                      event: "cta_link_account",
                      text: D.twitch_drops_gaming_state_action_card_unlinked_title.defaultMessage.toLowerCase(),
                      element_placement: u?.toLowerCase()
                    })
                  },
                  children: e.formatMessage(D.twitch_drops_gaming_state_action_card_unlinked_title)
                })
              }), (0, r.jsxs)(O, {
                children: [(0, r.jsx)(L, {}), (0, r.jsxs)(I, {
                  "data-testid": "tw-platform-selector-dialog",
                  onOpenAutoFocus: t => {
                    t.preventDefault(), w.current?.focus()
                  },
                  children: [(0, r.jsx)(N, {
                    "aria-label": e.formatMessage(D.twitch_drops_platform_dialog_close_btn_label),
                    onClick: b,
                    ref: w,
                    children: (0, r.jsx)(m.IconButton, {
                      size: "MD",
                      appearance: "ghost",
                      icon: "X",
                      label: e.formatMessage(D.twitch_drops_platform_dialog_close_btn_label),
                      className: Z.closeButton
                    })
                  }), (0, r.jsx)(B, {
                    children: (0, r.jsx)(S, {
                      children: e.formatMessage(D.twitch_drops_platform_options_title)
                    })
                  }), (0, r.jsxs)("div", {
                    className: Z.contentBlock,
                    children: [(0, r.jsxs)("div", {
                      className: Z.header,
                      children: [(0, r.jsx)("h3", {
                        className: Z.title,
                        children: e.formatMessage(D.twitch_drops_platform_options_title)
                      }), (0, r.jsx)("p", {
                        className: Z.description,
                        children: e.formatMessage(D.twitch_drops_platform_options_description)
                      })]
                    }), (0, r.jsx)("div", {
                      className: Z.wrapper,
                      children: (0, r.jsx)("div", {
                        className: Z.ctas,
                        children: g.map(((e, i) => (0, r.jsx)(m.Button, {
                          appearance: "primary",
                          size: "MD",
                          className: f()(Z.link, Z[e.platform.name]),
                          onPress: () => (async e => {
                            if (a({
                                event: "select_platform",
                                text: e.name.toLowerCase(),
                                element_placement: u?.toLowerCase()
                              }), "pc" === e.name) a({
                              event: "alert_error",
                              text: D.twitch_drops_dialog_no_character_found_description.defaultMessage.toLowerCase(),
                              element_placement: u?.toLowerCase()
                            }), l(!1), setTimeout((() => h(!0)), 100);
                            else {
                              l(!1), a({
                                element_placement: u?.toLowerCase(),
                                event: "cta_link_account",
                                text: `link ${e.onlineService}`
                              });
                              const r = await (0, n.generateTpaLink)({
                                pingBearer: t,
                                returnUrl: s || window.location.pathname,
                                service: e.onlineService
                              });
                              window.location.href = r.href
                            }
                          })(e.platform),
                          children: (0, r.jsx)("img", {
                            className: Z.icon,
                            src: (0, X.A)(e.platform.name) || "",
                            alt: e.label
                          })
                        }, i)))
                      })
                    })]
                  })]
                })]
              })]
            }), (0, r.jsx)(E, {
              open: p,
              onOpenChange: h,
              children: (0, r.jsxs)(O, {
                children: [(0, r.jsx)(L, {}), (0, r.jsxs)(I, {
                  "data-testid": "tw-platform-selector-dialog",
                  children: [(0, r.jsx)(N, {
                    "aria-label": e.formatMessage(D.twitch_drops_platform_dialog_close_btn_label),
                    onClick: b,
                    children: (0, r.jsx)(m.IconButton, {
                      size: "MD",
                      appearance: "ghost",
                      icon: "X",
                      label: "Close",
                      className: Z.closeButton
                    })
                  }), (0, r.jsx)(B, {
                    children: (0, r.jsx)(S, {
                      children: e.formatMessage(D.twitch_drops_platform_options_title)
                    })
                  }), (0, r.jsxs)("div", {
                    className: Z.contentBlock,
                    children: [(0, r.jsxs)("div", {
                      className: Z.header,
                      children: [(0, r.jsx)(v.TriangleAlert, {
                        className: Z.alert,
                        label: e.formatMessage(D.twitch_drops_dialog_no_character_found_title),
                        size: "XL",
                        color: "var(--foundry-alias-color-icon-warning)"
                      }), (0, r.jsx)("h3", {
                        className: Z.title,
                        children: e.formatMessage(D.twitch_drops_dialog_no_character_found_title)
                      }), (0, r.jsx)("p", {
                        className: Z.description,
                        children: e.formatMessage(D.twitch_drops_dialog_no_character_found_description)
                      })]
                    }), (0, r.jsx)(N, {
                      "aria-label": e.formatMessage(D.twitch_drops_platform_dialog_close_btn_label),
                      onClick: b,
                      children: (0, r.jsx)(m.Button, {
                        appearance: "primary",
                        size: "MD",
                        className: Z.okButton,
                        children: e.formatMessage(D.twitch_drops_platform_dialog_ok_btn_label)
                      })
                    })]
                  })]
                })]
              })
            })]
          })
        },
        H = () => {
          const t = (0, i.useIntl)(),
            {
              track: e
            } = (0, _.useGtmTrack)(),
            {
              scBase: a
            } = (0, n.getConfigForDomain)(),
            o = A(),
            {
              hasValidGamingAccount: s,
              isTwitchLinked: d,
              trackingParent: l,
              linkedAccounts: p,
              filteredLinkedAccounts: h,
              characters: u
            } = o,
            [f, w] = (0, c.useState)("default"),
            g = `${a}settings/linkedaccounts`,
            m = h?.length > 0 || u?.length > 0,
            b = () => {
              e({
                event: "cta_manage_account",
                text: D.twitch_drops_gaming_state_action_card_linked_manage_account_label.defaultMessage.toLowerCase(),
                element_placement: l
              })
            };
          return (0, c.useEffect)((() => {
            w(d && 0 === u?.length ? 0 === p?.length ? "disabled" : "alert" : 0 === u?.length ? 0 === h?.length ? "disabled" : "alert" : p?.length > 0 && u?.length > 0 ? "success" : "disabled")
          }), [d, u?.length, h?.length]), (0, c.useEffect)((() => {
            s && p?.length > 0 && e({
              event: "alert_update",
              text: D.twitch_drops_can_claim_title.defaultMessage.toLowerCase(),
              element_placement: l
            })
          }), [s, p]), void 0 === s ? null : (0, r.jsxs)(y, {
            state: f,
            children: ["success" === f && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)(k, {
                children: [(0, r.jsx)(x, {
                  icon: "Check",
                  label: t.formatMessage(D.twitch_drops_gaming_state_action_card_verified)
                }), (0, r.jsx)(j, {
                  children: t.formatMessage(D.twitch_drops_gaming_state_action_card_linked_title)
                })]
              }), (0, r.jsx)(T, {
                appearance: "monochrome",
                asChild: !0,
                children: (0, r.jsx)("a", {
                  href: g,
                  "data-testid": "tw-manage-account",
                  target: "_blank",
                  rel: "noreferrer",
                  onClick: b,
                  children: t.formatMessage(D.twitch_drops_gaming_state_action_card_linked_manage_account_label)
                })
              })]
            }), "alert" === f && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)(k, {
                children: [(0, r.jsx)(x, {
                  icon: "TriangleAlert",
                  label: t.formatMessage(D.twitch_drops_gaming_state_action_card_warning),
                  color: "var(--foundry-alias-color-icon-warning)"
                }), (0, r.jsx)(j, {
                  children: m ? t.formatMessage(D.twitch_drops_gaming_state_action_card_link_valid_character_account) : t.formatMessage(D.twitch_drops_no_gaming_account_linked)
                })]
              }), m ? (0, r.jsx)(T, {
                appearance: "secondary",
                asChild: !0,
                children: (0, r.jsx)("a", {
                  href: g,
                  "data-testid": "tw-manage-account",
                  target: "_blank",
                  rel: "noreferrer",
                  onClick: b,
                  children: t.formatMessage(D.twitch_drops_gaming_state_action_card_linked_manage_account_label)
                })
              }) : (0, r.jsx)(Y, {})]
            }), "disabled" === f && (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)(k, {
                children: [(0, r.jsx)(x, {
                  icon: "TriangleAlert",
                  label: t.formatMessage(D.twitch_drops_gaming_state_action_card_warning),
                  color: "var(--foundry-alias-color-icon-disabled)"
                }), (0, r.jsx)(j, {
                  children: t.formatMessage(D.twitch_drops_no_gaming_account_linked)
                })]
              })
            })]
          })
        };
      var J = a(24162),
        W = a(7545),
        Q = a(91);
      const V = "rockstargames-sites-gta-gen9ea4642de554a3d7eb8e92a6c16611e3c",
        F = () => {
          const [t, e] = (0, c.useState)(null), a = (0, i.useIntl)(), {
            track: o
          } = (0, _.useGtmTrack)(), s = A(), {
            scBase: d
          } = (0, n.getConfigForDomain)(), {
            isMobile: l
          } = (0, n.useWindowResize)(), p = `${d}settings/linkedaccounts`, {
            filteredLinkedAccounts: h,
            trackingParent: u,
            tutorialCompletion: f,
            characters: w
          } = s;
          (0, c.useEffect)((() => {
            0 === w.length && h.length > 0 && h.forEach((() => {
              o({
                event: "alert_error",
                text: "linked account has no character data",
                element_placement: u?.toLowerCase()
              })
            }))
          }), [w, h]);
          const g = e => () => {
            t?.slideTo(e)
          };
          return w.length || h?.length ? (0, r.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cce69027d1d4ddda405accc300b4ca94",
            children: [(0, r.jsx)("h4", {
              className: "rockstargames-sites-gta-gen9c42c619e85996f282a5b2d82490e968d",
              children: a.formatMessage(D.twitch_drops_linked_account_title)
            }), (0, r.jsxs)(J.RC, {
              onSwiper: e,
              modules: [W.Vx, W.dK],
              slidesPerView: "auto",
              spaceBetween: 16,
              navigation: !0,
              children: [h.map(((t, e) => (0, r.jsx)(J.qr, {
                tabIndex: 0,
                onFocus: g(e),
                children: (0, r.jsxs)(Q.Root, {
                  children: [(0, r.jsx)(Q.Avatar, {}), (0, r.jsxs)(Q.Content, {
                    className: V,
                    children: [(0, r.jsxs)(Q.TopRow, {
                      children: [(0, r.jsx)(Q.PlatformTag, {
                        tagSize: Q.PlatformTagSizes.large,
                        platform: t.onlineService
                      }), (0, r.jsxs)(m.Tooltip.Root, {
                        children: [(0, r.jsx)(m.Tooltip.Trigger, {
                          children: (0, r.jsx)(v.TriangleAlert, {
                            label: a.formatMessage(D.twitch_drops_character_card_icon_label),
                            color: "#CE8903"
                          })
                        }), (0, r.jsx)(m.Tooltip.Portal, {
                          children: (0, r.jsxs)(m.Tooltip.Content, {
                            side: "right",
                            children: [a.formatMessage(D.twitch_drops_character_card_error_message), (0, r.jsx)(m.Tooltip.Arrow, {})]
                          })
                        })]
                      })]
                    }), (0, r.jsx)(Q.UserName, {
                      children: t.userName
                    }), (0, r.jsx)(Q.TextContent, {
                      asChild: !0,
                      children: (0, r.jsx)("span", {
                        children: a.formatMessage(D.twitch_drops_dialog_no_data_found_title)
                      })
                    })]
                  })]
                })
              }, e))), w.map(((t, e) => (0, r.jsx)(J.qr, {
                tabIndex: 0,
                onFocus: g(h.length + e),
                children: (0, r.jsxs)(Q.Root, {
                  children: [(0, r.jsx)(Q.Avatar, {
                    src: t.mugshotUrl
                  }), (0, r.jsxs)(Q.Content, {
                    className: V,
                    children: [(0, r.jsxs)(Q.TopRow, {
                      children: [(0, r.jsx)(Q.PlatformTag, {
                        tagSize: Q.PlatformTagSizes.large,
                        platform: t.platform
                      }), !f[t.platform] && (0, r.jsxs)(m.Tooltip.Root, {
                        children: [(0, r.jsx)(m.Tooltip.Trigger, {
                          children: (0, r.jsx)(v.TriangleAlert, {
                            label: a.formatMessage(D.twitch_drops_character_card_icon_label),
                            color: "#CE8903"
                          })
                        }), (0, r.jsx)(m.Tooltip.Portal, {
                          children: (0, r.jsxs)(m.Tooltip.Content, {
                            side: "right",
                            children: [a.formatMessage(D.twitch_drops_character_card_error_message), (0, r.jsx)(m.Tooltip.Arrow, {})]
                          })
                        })]
                      })]
                    }), (0, r.jsx)(Q.UserName, {
                      children: t.platformUsername
                    }), f[t.platform] ? (0, r.jsx)(Q.RankContent, {
                      children: (0, r.jsx)(Q.RpCategory, {
                        rank: parseInt(t.stats.overview.rank.value)
                      })
                    }) : (0, r.jsx)(Q.TextContent, {
                      asChild: !0,
                      children: (0, r.jsx)("span", {
                        children: a.formatMessage(D.twitch_drops_dialog_no_data_found_title)
                      })
                    })]
                  })]
                })
              }, `${t?.platform}-${t.characterSlot}`))), (0, r.jsx)(J.qr, {
                children: (0, r.jsx)(m.Button, {
                  appearance: "secondary",
                  size: "LG",
                  asChild: !0,
                  onPress: () => {
                    o({
                      event: "cta_link_account",
                      text: D.twitch_drops_link_another_account_title.defaultMessage.toLowerCase(),
                      element_placement: u?.toLowerCase()
                    })
                  },
                  children: (0, r.jsxs)("a", {
                    href: p,
                    className: "rockstargames-sites-gta-gen9f19299f57f1ed76caa6896c7a813ecaf",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [(0, r.jsx)("span", {
                      children: a.formatMessage(D.twitch_drops_link_another_account_title)
                    }), (0, r.jsx)(v.ArrowRight, {
                      size: "MD",
                      label: ""
                    })]
                  })
                })
              })]
            })]
          }) : null
        },
        q = "rockstargames-sites-gta-gen9b176bb10e7cfc23e56431b0d6f607ad3",
        U = "rockstargames-sites-gta-gen9d7648ab9f8b9b1ab2e010c482b3727bc",
        K = () => {
          const t = (0, i.useIntl)(),
            {
              track: e
            } = (0, _.useGtmTrack)(),
            a = A(),
            o = "https://www.twitch.tv/drops/inventory",
            {
              activeStreams: n,
              canClaim: s,
              trackingParent: d
            } = a,
            l = () => {
              e({
                event: "site_link_click",
                text: D.twitch_drops_view_drops_title.defaultMessage.toLowerCase(),
                element_placement: d,
                link_url: "/gta-online/twitch-drops"
              })
            };
          return (0, c.useEffect)((() => {
            s && e({
              event: "alert_update",
              text: D.twitch_drops_can_claim_title.defaultMessage.toLowerCase(),
              element_placement: d
            })
          }), [s]), (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: "rockstargames-sites-gta-gen9feefda525c6d8eae28b3689890dc3f61",
              children: n ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(m.Button, {
                  size: "LG",
                  appearance: "primary",
                  allCaps: !0,
                  className: f()(q, "rockstargames-sites-gta-gen9c1d8d9cbb5bf81284c34f752f3b6d561"),
                  asChild: !0,
                  children: (0, r.jsx)("a", {
                    href: "https://www.twitch.tv/directory/category/grand-theft-auto-v?filter=drops",
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: () => {
                      e({
                        event: "site_link_click",
                        text: D.twitch_drops_find_stream_title.defaultMessage.toLowerCase(),
                        element_placement: d,
                        link_url: "/gta-online/twitch-drops"
                      })
                    },
                    children: t.formatMessage(D.twitch_drops_find_stream_title)
                  })
                }), (0, r.jsx)(m.Button, {
                  size: "LG",
                  appearance: "secondary",
                  allCaps: !0,
                  className: U,
                  asChild: !0,
                  children: (0, r.jsx)("a", {
                    href: o,
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: l,
                    children: t.formatMessage(D.twitch_drops_view_drops_title)
                  })
                })]
              }) : (0, r.jsx)(m.Button, {
                size: "LG",
                appearance: "primary",
                allCaps: !0,
                className: f()(q, U),
                asChild: !0,
                children: (0, r.jsx)("a", {
                  href: o,
                  target: "_blank",
                  rel: "noreferrer",
                  onClick: l,
                  children: t.formatMessage(D.twitch_drops_view_drops_title)
                })
              })
            })
          })
        },
        $ = {
          header: "rockstargames-sites-gta-gen9bedaa0fd151691ec98fa36e2ca814543",
          icon: "rockstargames-sites-gta-gen9c4ef17f93492a1455c0cdb3d84c50c4d",
          pillBtn: "rockstargames-sites-gta-gen9bfe22be95b4fa0ec28c10bbc2dffb46a",
          selected: "rockstargames-sites-gta-gen9c9f7ed9a32a4968e794ffac9666c39bf",
          title: "rockstargames-sites-gta-gen9e9b8b87dbb93a2f9e01bb20c7fd7dde0"
        },
        tt = ({
          message: t
        }) => {
          const e = (0, i.useIntl)();
          return (0, r.jsxs)("div", {
            className: $.title,
            children: [(0, r.jsx)(v.Check, {
              size: "MD",
              label: e.formatMessage(D.twitch_drops_check_icon_label),
              className: $.icon
            }), (0, r.jsx)("h3", {
              className: $.headerText,
              children: e.formatMessage(t)
            })]
          })
        },
        et = () => {
          const t = (0, i.useIntl)(),
            e = A();
          if (!e) return null;
          const {
            activeStreams: a,
            canClaim: o,
            characters: c,
            filteredLinkedAccounts: n,
            hasValidGamingAccount: _,
            isLoggedIn: s,
            isTwitchLinked: d,
            linkedAccounts: l
          } = e, p = l?.length > 0, h = (n?.length ?? 0) > 0, u = c?.length > 0, f = u && c.some((t => "pc" === t.platform || "pcalt" === t.platform)), w = s ? !s || !d || _ || !h && !f || _ || u && !f ? s && p ? o ? "canClaim" : "linked" : "general" : "createCharacters" : "loggedOut", g = "createCharacters" === w, m = ["loggedOut", "linked", "general"].includes(w);
          return (0, r.jsxs)("div", {
            className: $.header,
            children: [!g && (0, r.jsxs)(r.Fragment, {
              children: [m && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("h3", {
                  children: a ? t.formatMessage(D.twitch_drops_title) : t.formatMessage(D.twitch_drops_with_characters_title)
                }), (0, r.jsx)("p", {
                  children: t.formatMessage(D.twitch_drops_body)
                })]
              }), "canClaim" === w && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(tt, {
                  message: D.twitch_drops_can_claim_title
                }), (0, r.jsx)("p", {
                  children: a ? t.formatMessage(D.twitch_drops_can_claim_body) : t.formatMessage(D.twitch_drops_inactive_streams_body)
                })]
              })]
            }), g && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("h3", {
                children: a ? t.formatMessage(D.twitch_drops_create_your_character_for_future_rewards_header_active) : t.formatMessage(D.twitch_drops_create_your_character_for_future_rewards_header_inactive)
              }), (0, r.jsx)("p", {
                children: a ? t.formatMessage(D.twitch_drops_create_your_character_for_future_rewards_body_active) : t.formatMessage(D.twitch_drops_create_your_character_for_future_rewards_body_inactive)
              })]
            })]
          })
        },
        at = ({
          width: t = 96,
          height: e = 40,
          className: a = ""
        }) => (0, r.jsxs)("svg", {
          className: f()([a, "rockstargames-sites-gta-gen9ddd2d5ebaa09dce343d0c1b5abcff346"]),
          width: t,
          height: e,
          viewBox: `0 0 ${t} ${e}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          children: [(0, r.jsx)("rect", {
            width: t,
            height: e,
            fill: "url(#pattern0_12586_7572)"
          }), (0, r.jsxs)("defs", {
            children: [(0, r.jsx)("pattern", {
              id: "pattern0_12586_7572",
              patternContentUnits: "objectBoundingBox",
              width: "1",
              height: "1",
              children: (0, r.jsx)("use", {
                xlinkHref: "#image0_12586_7572",
                transform: "matrix(0.000625 0 0 0.0015 0 0.09875)"
              })
            }), (0, r.jsx)("image", {
              id: "image0_12586_7572",
              width: "1600",
              height: "535",
              xlinkHref: "data:image/png;base64,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"
            })]
          })]
        }),
        rt = ({
          enableActiveStreams: t = !1
        }) => {
          const e = (0, l.useNavigate)(),
            a = (0, l.useLocation)(),
            {
              track: i
            } = (0, _.useGtmTrack)(),
            o = A(),
            {
              activeStreams: n,
              canClaim: s,
              characters: d,
              filteredLinkedAccounts: u,
              hasValidGamingAccount: f,
              isFetching: w,
              isLoggedIn: g,
              isTwitchLinked: m,
              setActiveStreams: b,
              setShowCharacterCards: v,
              showCharacterCards: y,
              trackingParent: k
            } = o,
            x = !0 === g ? !w && null != n && null != m && null != u && null != f && null != s : !1 === g && !w && null != n && null != m,
            {
              ref: j
            } = (0, p.useInView)({
              threshold: .6,
              triggerOnce: !0,
              onChange: t => {
                t && i({
                  event: "page_section_impression",
                  section_layout: g ? "signed in" : "signed out",
                  element_placement: k?.toLowerCase()
                })
              }
            });
          return (0, c.useEffect)((() => {
            n !== t && b(t);
            const e = u?.length > 0 || d?.length > 0;
            y !== e && v(e)
          }), [n, t, u, d, b, v, y]), (0, c.useEffect)((() => {
            const t = new URLSearchParams(a.search);
            if ("SUCCESS" === t.get("ScAuthLinkingStatus")) {
              t.delete("ScAuthLinkingStatus");
              const r = t.toString(),
                i = a.pathname + (r ? `?${r}` : "");
              e(i, {
                replace: !0
              })
            }
          }), [a, e]), x ? (0, r.jsxs)("div", {
            ref: j,
            className: "rockstargames-sites-gta-gen9fea773bf7b714ce65ef7db9a080ee205",
            children: [(0, r.jsx)(at, {}), (0, r.jsx)(et, {}), !1 === g && (0, r.jsx)(P, {}), s && (0, r.jsx)(K, {}), g && !1 === s && (0, r.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dcd2ef1d0cbfb4f6afcc3796e00c7be8",
              children: [(0, r.jsx)(C, {}), (0, r.jsx)(H, {})]
            }), g && y && (0, r.jsx)(F, {})]
          }) : (0, r.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d91043320bc3ae5daef84bf9ef72402d",
            children: (0, r.jsx)(h.A, {
              type: "SPINNING"
            })
          })
        };
      var it;
      const ot = (it = ({
        enableActiveStreams: t
      }) => (0, r.jsx)(d, {
        children: (0, r.jsx)(rt, {
          enableActiveStreams: t
        })
      }), (0, i.withIntl)(it, o))
    },
    78322: (t, e, a) => {
      a.r(e), a.d(e, {
        __addDisposableResource: () => L,
        __assign: () => o,
        __asyncDelegator: () => j,
        __asyncGenerator: () => x,
        __asyncValues: () => T,
        __await: () => k,
        __awaiter: () => h,
        __classPrivateFieldGet: () => E,
        __classPrivateFieldIn: () => O,
        __classPrivateFieldSet: () => G,
        __createBinding: () => f,
        __decorate: () => n,
        __disposeResources: () => I,
        __esDecorate: () => s,
        __exportStar: () => w,
        __extends: () => i,
        __generator: () => u,
        __importDefault: () => z,
        __importStar: () => M,
        __makeTemplateObject: () => D,
        __metadata: () => p,
        __param: () => _,
        __propKey: () => A,
        __read: () => m,
        __rest: () => c,
        __rewriteRelativeImportExtension: () => S,
        __runInitializers: () => d,
        __setFunctionName: () => l,
        __spread: () => b,
        __spreadArray: () => y,
        __spreadArrays: () => v,
        __values: () => g,
        default: () => X
      });
      var r = function(t, e) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(t, e) {
          t.__proto__ = e
        } || function(t, e) {
          for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }, r(t, e)
      };

      function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function a() {
          this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
      }
      var o = function() {
        return o = Object.assign || function(t) {
          for (var e, a = 1, r = arguments.length; a < r; a++)
            for (var i in e = arguments[a]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t
        }, o.apply(this, arguments)
      };

      function c(t, e) {
        var a = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (a[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (a[r[i]] = t[r[i]])
        }
        return a
      }

      function n(t, e, a, r) {
        var i, o = arguments.length,
          c = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, a) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, a, r);
        else
          for (var n = t.length - 1; n >= 0; n--)(i = t[n]) && (c = (o < 3 ? i(c) : o > 3 ? i(e, a, c) : i(e, a)) || c);
        return o > 3 && c && Object.defineProperty(e, a, c), c
      }

      function _(t, e) {
        return function(a, r) {
          e(a, r, t)
        }
      }

      function s(t, e, a, r, i, o) {
        function c(t) {
          if (void 0 !== t && "function" != typeof t) throw new TypeError("Function expected");
          return t
        }
        for (var n, _ = r.kind, s = "getter" === _ ? "get" : "setter" === _ ? "set" : "value", d = !e && t ? r.static ? t : t.prototype : null, A = e || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), l = !1, p = a.length - 1; p >= 0; p--) {
          var h = {};
          for (var u in r) h[u] = "access" === u ? {} : r[u];
          for (var u in r.access) h.access[u] = r.access[u];
          h.addInitializer = function(t) {
            if (l) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(c(t || null))
          };
          var f = (0, a[p])("accessor" === _ ? {
            get: A.get,
            set: A.set
          } : A[s], h);
          if ("accessor" === _) {
            if (void 0 === f) continue;
            if (null === f || "object" != typeof f) throw new TypeError("Object expected");
            (n = c(f.get)) && (A.get = n), (n = c(f.set)) && (A.set = n), (n = c(f.init)) && i.unshift(n)
          } else(n = c(f)) && ("field" === _ ? i.unshift(n) : A[s] = n)
        }
        d && Object.defineProperty(d, r.name, A), l = !0
      }

      function d(t, e, a) {
        for (var r = arguments.length > 2, i = 0; i < e.length; i++) a = r ? e[i].call(t, a) : e[i].call(t);
        return r ? a : void 0
      }

      function A(t) {
        return "symbol" == typeof t ? t : "".concat(t)
      }

      function l(t, e, a) {
        return "symbol" == typeof e && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", {
          configurable: !0,
          value: a ? "".concat(a, " ", e) : e
        })
      }

      function p(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
      }

      function h(t, e, a, r) {
        return new(a || (a = Promise))((function(i, o) {
          function c(t) {
            try {
              _(r.next(t))
            } catch (t) {
              o(t)
            }
          }

          function n(t) {
            try {
              _(r.throw(t))
            } catch (t) {
              o(t)
            }
          }

          function _(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof a ? e : new a((function(t) {
              t(e)
            }))).then(c, n)
          }
          _((r = r.apply(t, e || [])).next())
        }))
      }

      function u(t, e) {
        var a, r, i, o = {
            label: 0,
            sent: function() {
              if (1 & i[0]) throw i[1];
              return i[1]
            },
            trys: [],
            ops: []
          },
          c = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return c.next = n(0), c.throw = n(1), c.return = n(2), "function" == typeof Symbol && (c[Symbol.iterator] = function() {
          return this
        }), c;

        function n(n) {
          return function(_) {
            return function(n) {
              if (a) throw new TypeError("Generator is already executing.");
              for (; c && (c = 0, n[0] && (o = 0)), o;) try {
                if (a = 1, r && (i = 2 & n[0] ? r.return : n[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, n[1])).done) return i;
                switch (r = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                  case 0:
                  case 1:
                    i = n;
                    break;
                  case 4:
                    return o.label++, {
                      value: n[1],
                      done: !1
                    };
                  case 5:
                    o.label++, r = n[1], n = [0];
                    continue;
                  case 7:
                    n = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                      o.label = n[1];
                      break
                    }
                    if (6 === n[0] && o.label < i[1]) {
                      o.label = i[1], i = n;
                      break
                    }
                    if (i && o.label < i[2]) {
                      o.label = i[2], o.ops.push(n);
                      break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                n = e.call(t, o)
              } catch (t) {
                n = [6, t], r = 0
              } finally {
                a = i = 0
              }
              if (5 & n[0]) throw n[1];
              return {
                value: n[0] ? n[1] : void 0,
                done: !0
              }
            }([n, _])
          }
        }
      }
      var f = Object.create ? function(t, e, a, r) {
        void 0 === r && (r = a);
        var i = Object.getOwnPropertyDescriptor(e, a);
        i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
          enumerable: !0,
          get: function() {
            return e[a]
          }
        }), Object.defineProperty(t, r, i)
      } : function(t, e, a, r) {
        void 0 === r && (r = a), t[r] = e[a]
      };

      function w(t, e) {
        for (var a in t) "default" === a || Object.prototype.hasOwnProperty.call(e, a) || f(e, t, a)
      }

      function g(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          a = e && t[e],
          r = 0;
        if (a) return a.call(t);
        if (t && "number" == typeof t.length) return {
          next: function() {
            return t && r >= t.length && (t = void 0), {
              value: t && t[r++],
              done: !t
            }
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function m(t, e) {
        var a = "function" == typeof Symbol && t[Symbol.iterator];
        if (!a) return t;
        var r, i, o = a.call(t),
          c = [];
        try {
          for (;
            (void 0 === e || e-- > 0) && !(r = o.next()).done;) c.push(r.value)
        } catch (t) {
          i = {
            error: t
          }
        } finally {
          try {
            r && !r.done && (a = o.return) && a.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return c
      }

      function b() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(m(arguments[e]));
        return t
      }

      function v() {
        for (var t = 0, e = 0, a = arguments.length; e < a; e++) t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < a; e++)
          for (var o = arguments[e], c = 0, n = o.length; c < n; c++, i++) r[i] = o[c];
        return r
      }

      function y(t, e, a) {
        if (a || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
      }

      function k(t) {
        return this instanceof k ? (this.v = t, this) : new k(t)
      }

      function x(t, e, a) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, i = a.apply(t, e || []),
          o = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", (function(t) {
          return function(e) {
            return Promise.resolve(e).then(t, s)
          }
        })), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function c(t, e) {
          i[t] && (r[t] = function(e) {
            return new Promise((function(a, r) {
              o.push([t, e, a, r]) > 1 || n(t, e)
            }))
          }, e && (r[t] = e(r[t])))
        }

        function n(t, e) {
          try {
            (a = i[t](e)).value instanceof k ? Promise.resolve(a.value.v).then(_, s) : d(o[0][2], a)
          } catch (t) {
            d(o[0][3], t)
          }
          var a
        }

        function _(t) {
          n("next", t)
        }

        function s(t) {
          n("throw", t)
        }

        function d(t, e) {
          t(e), o.shift(), o.length && n(o[0][0], o[0][1])
        }
      }

      function j(t) {
        var e, a;
        return e = {}, r("next"), r("throw", (function(t) {
          throw t
        })), r("return"), e[Symbol.iterator] = function() {
          return this
        }, e;

        function r(r, i) {
          e[r] = t[r] ? function(e) {
            return (a = !a) ? {
              value: k(t[r](e)),
              done: !1
            } : i ? i(e) : e
          } : i
        }
      }

      function T(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, a = t[Symbol.asyncIterator];
        return a ? a.call(t) : (t = g(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
          return this
        }, e);

        function r(a) {
          e[a] = t[a] && function(e) {
            return new Promise((function(r, i) {
              ! function(t, e, a, r) {
                Promise.resolve(r).then((function(e) {
                  t({
                    value: e,
                    done: a
                  })
                }), e)
              }(r, i, (e = t[a](e)).done, e.value)
            }))
          }
        }
      }

      function D(t, e) {
        return Object.defineProperty ? Object.defineProperty(t, "raw", {
          value: e
        }) : t.raw = e, t
      }
      var P = Object.create ? function(t, e) {
          Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
          })
        } : function(t, e) {
          t.default = e
        },
        C = function(t) {
          return C = Object.getOwnPropertyNames || function(t) {
            var e = [];
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[e.length] = a);
            return e
          }, C(t)
        };

      function M(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var a = C(t), r = 0; r < a.length; r++) "default" !== a[r] && f(e, t, a[r]);
        return P(e, t), e
      }

      function z(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function E(t, e, a, r) {
        if ("a" === a && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === a ? r : "a" === a ? r.call(t) : r ? r.value : e.get(t)
      }

      function G(t, e, a, r, i) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? i.call(t, a) : i ? i.value = a : e.set(t, a), a
      }

      function O(t, e) {
        if (null === e || "object" != typeof e && "function" != typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof t ? e === t : t.has(e)
      }

      function L(t, e, a) {
        if (null != e) {
          if ("object" != typeof e && "function" != typeof e) throw new TypeError("Object expected.");
          var r, i;
          if (a) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose]
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose], a && (i = r)
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          i && (r = function() {
            try {
              i.call(this)
            } catch (t) {
              return Promise.reject(t)
            }
          }), t.stack.push({
            value: e,
            dispose: r,
            async: a
          })
        } else a && t.stack.push({
          async: !0
        });
        return e
      }
      var N = "function" == typeof SuppressedError ? SuppressedError : function(t, e, a) {
        var r = new Error(a);
        return r.name = "SuppressedError", r.error = t, r.suppressed = e, r
      };

      function I(t) {
        function e(e) {
          t.error = t.hasError ? new N(e, t.error, "An error was suppressed during disposal.") : e, t.hasError = !0
        }
        var a, r = 0;
        return function i() {
          for (; a = t.stack.pop();) try {
            if (!a.async && 1 === r) return r = 0, t.stack.push(a), Promise.resolve().then(i);
            if (a.dispose) {
              var o = a.dispose.call(a.value);
              if (a.async) return r |= 2, Promise.resolve(o).then(i, (function(t) {
                return e(t), i()
              }))
            } else r |= 1
          } catch (t) {
            e(t)
          }
          if (1 === r) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
          if (t.hasError) throw t.error
        }()
      }

      function S(t, e) {
        return "string" == typeof t && /^\.\.?\//.test(t) ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(t, a, r, i, o) {
          return a ? e ? ".jsx" : ".js" : !r || i && o ? r + i + "." + o.toLowerCase() + "js" : t
        })) : t
      }
      const X = {
        __extends: i,
        __assign: o,
        __rest: c,
        __decorate: n,
        __param: _,
        __esDecorate: s,
        __runInitializers: d,
        __propKey: A,
        __setFunctionName: l,
        __metadata: p,
        __awaiter: h,
        __generator: u,
        __createBinding: f,
        __exportStar: w,
        __values: g,
        __read: m,
        __spread: b,
        __spreadArrays: v,
        __spreadArray: y,
        __await: k,
        __asyncGenerator: x,
        __asyncDelegator: j,
        __asyncValues: T,
        __makeTemplateObject: D,
        __importStar: M,
        __importDefault: z,
        __classPrivateFieldGet: E,
        __classPrivateFieldSet: G,
        __classPrivateFieldIn: O,
        __addDisposableResource: L,
        __disposeResources: I,
        __rewriteRelativeImportExtension: S
      }
    },
    80391: t => {
      t.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    81715: t => {
      t.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    83550: (t, e, a) => {
      a.d(e, {
        A: () => A
      });
      var r = a(80391),
        i = a(28985),
        o = a(47240),
        c = a(32903),
        n = a(81715),
        _ = a(49429),
        s = a(11008);
      const d = {
          ps: r,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: i,
          ps5: o,
          switch: s,
          nintendoswitch: s,
          xbox: c,
          xboxone: _,
          xboxseriesxs: n,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: a(85719),
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        A = t => d[t] || null
    },
    85719: t => {
      t.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    95386: (t, e, a) => {
      a.r(e), a.d(e, {
        RpCategory: () => d,
        rpCategoryTestIds: () => s
      });
      var r = a(42295),
        i = a(62229),
        o = a(973);
      var c = a(4572),
        n = a.n(c);
      const _ = t => t < 100 ? "#2d6eb9" : t > 99 && t < 500 ? "#b48261" : t > 499 && t < 750 ? "#9699a1" : "#D6B563",
        s = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        d = (0, i.forwardRef)((function({
          rank: t,
          size: e = "large",
          className: a,
          alt: i,
          testId: c,
          ...d
        }, A) {
          const l = _(t),
            p = (0, o.v6)(d, {
              className: n()("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", a),
              "data-testid": c
            });
          return (0, r.jsxs)("div", {
            "data-size": e,
            ref: A,
            ...p,
            children: [(0, r.jsx)("svg", {
              role: "svg",
              "aria-label": i,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": _(t),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: l
              })
            }), (0, r.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d9ea5cdf174033003a8670f31ae66a59",
              "data-testid": s.RANK_VALUE,
              children: t
            })]
          })
        }))
    },
    96117: (t, e, a) => {
      a.d(e, {
        A: () => o
      });
      var r = a(42295),
        i = a(14200);
      const o = ({
        disableLink: t,
        className: e,
        "data-testid": a
      }) => {
        const o = t ? "span" : i.A;
        return (0, r.jsx)(o, {
          className: [t ? "rockstargames-sites-gta-gen9b28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-gta-gen9a3d920a1139575706b914bc3a0100970", e || ""].join(" "),
          "data-testid": a,
          alt: "Rockstar Games Home",
          ...!t && {
            to: "/"
          }
        })
      }
    }
  }
]);