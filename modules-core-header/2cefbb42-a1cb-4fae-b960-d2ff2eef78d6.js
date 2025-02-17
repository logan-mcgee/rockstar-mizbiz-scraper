! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2cefbb42-a1cb-4fae-b960-d2ff2eef78d6", e._sentryDebugIdIdentifier = "sentry-dbid-2cefbb42-a1cb-4fae-b960-d2ff2eef78d6")
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
  [9525], {
    44970: (e, a, t) => {
      var s = t(45590).Symbol;
      e.exports = s
    },
    56203: (e, a, t) => {
      var s = t(44970),
        r = t(97390),
        n = t(65461),
        i = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? r(e) : n(e)
      }
    },
    50811: (e, a, t) => {
      var s = t(72089),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, s(e) + 1).replace(r, "") : e
      }
    },
    94239: (e, a, t) => {
      var s = "object" == typeof t.g && t.g && t.g.Object === Object && t.g;
      e.exports = s
    },
    97390: (e, a, t) => {
      var s = t(44970),
        r = Object.prototype,
        n = r.hasOwnProperty,
        i = r.toString,
        c = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        var a = n.call(e, c),
          t = e[c];
        try {
          e[c] = void 0;
          var s = !0
        } catch (e) {}
        var r = i.call(e);
        return s && (a ? e[c] = t : delete e[c]), r
      }
    },
    65461: e => {
      var a = Object.prototype.toString;
      e.exports = function(e) {
        return a.call(e)
      }
    },
    45590: (e, a, t) => {
      var s = t(94239),
        r = "object" == typeof self && self && self.Object === Object && self,
        n = s || r || Function("return this")();
      e.exports = n
    },
    72089: e => {
      var a = /\s/;
      e.exports = function(e) {
        for (var t = e.length; t-- && a.test(e.charAt(t)););
        return t
      }
    },
    12296: (e, a, t) => {
      var s = t(88660),
        r = t(21383),
        n = t(48635),
        i = Math.max,
        c = Math.min;
      e.exports = function(e, a, t) {
        var o, l, d, _, u, m, f = 0,
          g = !1,
          b = !1,
          p = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(a) {
          var t = o,
            s = l;
          return o = l = void 0, f = a, _ = e.apply(s, t)
        }

        function k(e) {
          var t = e - m;
          return void 0 === m || t >= a || t < 0 || b && e - f >= d
        }

        function v() {
          var e = r();
          if (k(e)) return x(e);
          u = setTimeout(v, function(e) {
            var t = a - (e - m);
            return b ? c(t, d - (e - f)) : t
          }(e))
        }

        function x(e) {
          return u = void 0, p && o ? h(e) : (o = l = void 0, _)
        }

        function w() {
          var e = r(),
            t = k(e);
          if (o = arguments, l = this, m = e, t) {
            if (void 0 === u) return function(e) {
              return f = e, u = setTimeout(v, a), g ? h(e) : _
            }(m);
            if (b) return clearTimeout(u), u = setTimeout(v, a), h(m)
          }
          return void 0 === u && (u = setTimeout(v, a)), _
        }
        return a = n(a) || 0, s(t) && (g = !!t.leading, d = (b = "maxWait" in t) ? i(n(t.maxWait) || 0, a) : d, p = "trailing" in t ? !!t.trailing : p), w.cancel = function() {
          void 0 !== u && clearTimeout(u), f = 0, o = m = l = u = void 0
        }, w.flush = function() {
          return void 0 === u ? _ : x(r())
        }, w
      }
    },
    88660: e => {
      e.exports = function(e) {
        var a = typeof e;
        return null != e && ("object" == a || "function" == a)
      }
    },
    10939: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    23771: (e, a, t) => {
      var s = t(56203),
        r = t(10939);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == s(e)
      }
    },
    21383: (e, a, t) => {
      var s = t(45590);
      e.exports = function() {
        return s.Date.now()
      }
    },
    48635: (e, a, t) => {
      var s = t(50811),
        r = t(88660),
        n = t(23771),
        i = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        o = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (n(e)) return NaN;
        if (r(e)) {
          var a = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = r(a) ? a + "" : a
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = s(e);
        var t = c.test(e);
        return t || o.test(e) ? l(e.slice(2), t ? 2 : 8) : i.test(e) ? NaN : +e
      }
    },
    22457: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        CharacterCard: () => u,
        LanguageSelector: () => y,
        Menu: () => me,
        MenuButton: () => fe,
        ProfileSwitcher: () => be
      });
      var s = t(62229),
        r = t(81788);
      const n = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(50702),
                alt: "PC"
              } : {
                src: t(82864),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(7166),
                alt: "PS4"
              } : {
                src: t(348),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(69743),
                alt: "PS5"
              } : {
                src: t(12541),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(71070),
                alt: "Xbox One"
              } : {
                src: t(17024),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(43777),
                alt: "Xbox Series X|S"
              } : {
                src: t(24963),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        i = e => t(e < 100 ? 15917 : e > 99 && e < 500 ? 89697 : e > 499 && e < 750 ? 58662 : 26563),
        c = (0, r.defineMessages)({
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
        o = {
          pillBtn: "rockstargames-modules-core-headerb618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-modules-core-headere1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-modules-core-headerb5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-modules-core-headerd6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-modules-core-headercb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-modules-core-headera68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-modules-core-headerad1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-modules-core-headeraf42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-modules-core-headerf9a042c11d2e6a8ed1d5e78f40abd88d"
        },
        l = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","rp_icon":"RP Category","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        d = e => (0, r.withIntl)(e, l);
      var _ = t(91029);
      const u = d((e => {
        let {
          characterData: a
        } = e;
        const l = (0, r.useIntl)(),
          {
            platform: d,
            platformUsername: u,
            mugshotUrl: m,
            stats: f
          } = a,
          [g, b] = (0, s.useState)(m),
          p = n(d, "large");
        return (0, _.jsxs)("div", {
          className: o.scCharacterCard,
          children: [(0, _.jsx)("div", {
            className: o.avatar,
            "data-size": "small",
            children: (0, _.jsx)("img", {
              src: g,
              alt: l.formatMessage(c.profile_selector_mugshot, {
                userName: u
              }),
              onError: () => {
                b(t(5931))
              }
            })
          }), (0, _.jsx)("div", {
            className: o.scCharacterStats,
            children: (0, _.jsxs)("div", {
              className: o.scCharNames,
              children: [(0, _.jsx)("img", {
                src: p.src,
                alt: p.alt
              }), (0, _.jsx)("div", {
                className: o.scUserName,
                "data-size": "small",
                children: u
              }), (0, _.jsx)("div", {
                className: o.scRp,
                children: (0, _.jsxs)("div", {
                  className: o.scRpLevel,
                  children: [(0, _.jsx)("img", {
                    className: o.scRpIcon,
                    src: i(f.overview.rank.value),
                    alt: l.formatMessage(c.profile_selector_rp_icon)
                  }), (0, _.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }));
      var m = t(6400);
      const f = (0, r.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var g = t(9623);
      const b = "rockstargames-modules-core-headerea8cf4797c830e5b5dad68b2ec814e67",
        p = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"Okay","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_error_generic_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Comprueba tu correo","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmer votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認する","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面"}}'),
        h = (k = e => {
          let {
            children: a,
            to: t = "#",
            reloadDocument: n = !1,
            alt: i = "",
            autoBlank: c = !1,
            onClick: o = (() => {}),
            focused: l = !1,
            ...d
          } = e;
          const u = (0, s.useRef)(null),
            m = (0, r.useIntl)(),
            p = !/^(https?|mailto):/i.test(t),
            h = /^#/.test(t),
            k = d?.target ?? (c ? "_blank" : "_self"),
            {
              ...v
            } = d;
          let x = "";
          if ("aria-label" in v && v["aria-label"] && (x = "_blank" === k ? `${v["aria-label"]} ${m.formatMessage(f.aria_label_open_new_window)}` : v["aria-label"]), (0, s.useEffect)((() => {
              l && u?.current && u.current.focus()
            }), [u?.current, l]), h) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), o && o(e)
            };
            return (0, _.jsxs)("a", {
              title: i,
              href: t,
              onClick: e,
              ...v,
              "aria-label": x,
              ref: u,
              children: [a, "_blank" === k && !x && (0, _.jsx)("span", {
                className: b,
                children: m.formatMessage(f.aria_label_open_new_window)
              })]
            })
          }
          if (p) return (0, _.jsxs)(g.NavLink, {
            title: i,
            to: t,
            onClick: o,
            ...v,
            "aria-label": x,
            ref: u,
            reloadDocument: n,
            children: [a, "_blank" === k && !x && (0, _.jsx)("span", {
              className: b,
              children: m.formatMessage(f.aria_label_open_new_window)
            })]
          });
          const w = Object.keys(v).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: d[a]
          })), {});
          return "function" == typeof w?.className && delete w.className, (0, _.jsxs)("a", {
            href: t,
            title: i,
            onClick: o,
            target: k,
            ...w,
            "aria-label": x,
            ref: u,
            children: [a, "_blank" === k && !x && (0, _.jsx)("span", {
              className: b,
              children: m.formatMessage(f.aria_label_open_new_window)
            })]
          })
        }, (0, r.withIntl)(k, p));
      var k, v = t(2918);
      const x = (0, r.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        w = {
          pillBtn: "rockstargames-modules-core-headere34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-modules-core-headere1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-modules-core-headerb641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-modules-core-headera9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-modules-core-headeraa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-modules-core-headerb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-core-headerc64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-modules-core-headerdb1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-modules-core-headerfe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-core-headerae32febd9789e79c804b2679d25e8a65"
        },
        y = d((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: n,
            location: i,
            parent: c = "footer",
            onLangChange: o
          } = e;
          const {
            track: l
          } = (0, v.useGtmTrack)(), d = (0, r.useIntl)(), [u, f] = (0, r.getLocale)(), [g, b] = (0, s.useState)(!1), p = (0, s.useRef)(null), [k, y] = (0, s.useState)(0), S = matchMedia("(hover: none) and (pointer: coarse)").matches, j = (0, s.useMemo)((() => (0, m.A)()), []), C = (0, s.useCallback)((e => {
            let a = i.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return r.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), j.currentSite?.site === m.C.www ? "en" === e ? `${window.location.origin}/${a}${i.search}` : `${window.location.origin}/${e}/${a}${i.search}` : `${window.location.origin}/${a}${i.search}`
          }), [i]), N = e => {
            if (n && n(!1), u.subdomaincom === e || "none" === e) return void(n && n(!1));
            const a = r.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = C(e);
              l({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: c
              }), f(a.iso), window.location.href = t, o?.({
                selectedLocale: a,
                track: l,
                parent: c
              })
            }
          };
          return (0, s.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === g && b(!1)
          }), [t]), (0, s.useEffect)((() => {
            p.current && y(p.current.scrollHeight)
          }), [p]), (0, _.jsxs)("div", {
            className: [w.languageSelector, g ? w.open : ""].join(" "),
            "data-theme": a,
            children: [S && "sc-menu" === a && (0, _.jsx)("div", {
              className: w.selectBoxWrapper,
              children: (0, _.jsxs)("select", {
                className: w.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  N(a)
                },
                "aria-label": d.formatMessage(x.language_selector_default),
                children: [(0, _.jsx)("option", {
                  className: w.selectBoxOption,
                  value: "none",
                  children: (0, _.jsx)(r.FormattedMessage, {
                    ...x.language_selector_default
                  })
                }), r.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, _.jsx)("option", {
                    className: w.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!S || "sc-menu" !== a) && (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), n && n(!g), b(!g)
                },
                type: "button",
                "aria-label": d.formatMessage(x.language_selector_default),
                children: [(0, _.jsx)("i", {}), (0, _.jsx)("span", {
                  children: (0, _.jsx)(r.FormattedMessage, {
                    ...x.language_selector_default
                  })
                })]
              }), (0, _.jsx)("div", {
                className: w.linkWrapper,
                ref: p,
                style: {
                  "--ls-linkWrapper-opened-height": `${k}px`
                },
                children: (0, _.jsx)("div", {
                  className: w.links,
                  children: r.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, _.jsx)(s.Fragment, {
                      children: (0, _.jsx)(h, {
                        to: C(a),
                        onClick: (r = a, () => {
                          N(r)
                        }),
                        tabIndex: g ? 0 : -1,
                        children: t
                      })
                    }, t);
                    var r
                  }))
                })
              })]
            })]
          })
        }));
      var S = t(84269),
        j = t(95966);
      const C = (0, j.makeVar)(!1),
        N = e => C(e),
        M = (0, j.makeVar)(-1),
        z = e => M(e),
        R = (0, j.makeVar)(-1),
        I = e => R(e),
        E = (0, j.makeVar)(!0),
        L = e => E(e),
        P = (0, j.makeVar)(!0),
        G = e => P(e),
        T = () => {
          const e = (0, j.useReactiveVar)(C),
            a = (0, j.useReactiveVar)(M),
            t = (0, j.useReactiveVar)(R),
            r = (0, j.useReactiveVar)(E),
            n = (0, j.useReactiveVar)(P);
          return (0, s.useEffect)((() => {
            n || (e && N(!1), r && (L(!1), z(-1)))
          }), [n]), (0, s.useEffect)((() => {
            !e && n && (r || L(!0))
          }), [e, n]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: N,
            activeSubNavId: a,
            setActiveSubNavId: z,
            subNavExtraHeight: t,
            setSubNavExtraHeight: I,
            navOpened: r,
            setAccountNavOpened: L,
            charListHidden: n,
            setCharListHidden: G
          })), [e, a, t, r, n])
        };
      var O = t(12296),
        A = t.n(O);
      const U = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        $ = e => ({
          text: e.formatMessage(c.sc_link_help),
          target: "_self",
          ga: {
            ...U,
            text: c.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(c.sc_link_support),
            location: {
              domain: m.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...U,
              text: c.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(c.sc_link_legal),
            location: {
              domain: m.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...U,
              text: c.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(c.sc_link_privacy_policy),
            location: {
              domain: m.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...U,
              text: c.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(c.sc_link_cookies_policy),
            location: {
              domain: m.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...U,
              text: c.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(c.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...U,
              text: c.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(c.sc_link_do_not_sell_my_information),
            location: {
              domain: m.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...U,
              text: c.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var B = t(35127);
      const D = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: n,
            ga: i,
            dataTestId: o,
            isSubLink: l,
            hasNotifications: d = !1,
            onClickCallback: u = (() => {}),
            tabIndex: f,
            reloadDocument: g = !1,
            onNavigate: b
          } = e;
          const {
            track: p
          } = (0, v.useGtmTrack)(), h = (0, m.A)(), k = (0, r.useIntl)();
          let x = s;
          n && (x = n.domain === h.currentSite?.site ? n.path : `https://${h.sites[n.domain]}.rockstargames.com${n.path}`);
          const w = {
            ...i,
            link_url: x
          };
          return (0, _.jsxs)(B.A, {
            className: l ? "rockstargames-modules-core-headerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-headerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": o || "menuLink",
            title: a,
            to: x,
            target: t,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: f,
            onClick: e => {
              p(w), u(e)
            },
            onNavigate: b,
            children: [a, d && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headeradbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, _.jsx)("span", {
                className: "rockstargames-modules-core-headere49e290899be3c888ca5a4b6b13736a1",
                children: k.formatMessage(c.nofications_new)
              })
            })]
          })
        },
        q = e => {
          let {
            id: a,
            text: t,
            target: r,
            href: n,
            location: i,
            ga: c,
            hasNotifications: o = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: u,
            setActiveSubNavId: m,
            setSubNavExtraHeight: f,
            reloadDocument: g = !1,
            onClickCallback: b = (() => {}),
            onNavigate: p
          } = e;
          const {
            windowWidth: h,
            windowHeight: k
          } = (0, j.useWindowResize)(), {
            track: x
          } = (0, v.useGtmTrack)(), {
            navOpen: w
          } = (0, v.useRockstarUserState)(), y = (0, s.useRef)(null), [S, C] = (0, s.useState)(0), [N, M] = (0, s.useState)(0), [z, R] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            u !== a && !1 === z && R(!0), u === a && R(!1)
          }), [u]), (0, s.useEffect)((() => {
            if (!y.current) return;
            C(y?.current?.scrollHeight);
            const e = window.getComputedStyle(y.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), M(a)
            }
          }), [y, h, k]), d.length > 0 ? (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("button", {
              className: "rockstargames-modules-core-headercc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: w ? 0 : -1,
              "data-children-hidden": z,
              onClick: e => {
                e.stopPropagation(), x(c), u === a ? (m(-1), f(0)) : (m(a), f(S + N + N))
              },
              children: [(0, _.jsx)("span", {
                className: "rockstargames-modules-core-headerb94730a01d5e9223b69cbc2f20f23bcd",
                children: t
              }), (0, _.jsx)("span", {
                className: "rockstargames-modules-core-headerff271a72fe259d74068b4f4d90db08bd"
              })]
            }, t), (0, _.jsx)("nav", {
              className: "rockstargames-modules-core-headercbf6e64eadb6f965877129d539aa2dcd",
              ref: y,
              "aria-hidden": z,
              style: {
                height: z ? 0 : `${S}px`
              },
              children: d.map((e => (0, s.createElement)(D, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: z || !w ? -1 : 0,
                onNavigate: p
              })))
            })]
          }) : (0, _.jsx)(D, {
            text: t,
            target: r,
            href: n,
            location: i,
            ga: c,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: b,
            tabIndex: w ? 0 : -1,
            reloadDocument: g,
            onNavigate: p
          })
        },
        H = e => {
          let {
            sc: a,
            location: t,
            onNavigate: n
          } = e;
          const {
            windowWidth: i,
            windowHeight: o
          } = (0, j.useWindowResize)(), l = (0, r.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: u,
            activeSubNavId: f,
            setActiveSubNavId: g,
            subNavExtraHeight: b,
            setSubNavExtraHeight: p
          } = T(), {
            setSelectedCharacterTuple: h,
            navOpen: k
          } = (0, v.useRockstarUserState)(), x = (0, j.useLocale)(), w = (0, j.toScLocaleString)(x), [S, C] = (0, s.useState)(""), N = `${a.login}?returnUrl=${S}&lang=${w}`, M = `${a.signup}&returnUrl=${S}&lang=${w}`, z = (0, s.useMemo)((() => (0, m.A)()), []), R = (0, s.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(c.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: c.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(c.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: c.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, $(e)])(l, N, M);
            return e
          }), [l, N, M, z]), [I, E] = (0, s.useState)(0), L = (0, s.createRef)(), P = () => {
            if (L.current) {
              const {
                current: e
              } = L, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), E(a + e)
              } else E(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            C(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            h(!1)
          }), []), (0, s.useEffect)((() => {
            P(), A()((() => {
              setTimeout(P, 0)
            }), 300)
          }), [i, o]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("nav", {
              className: "rockstargames-modules-core-headerf300d66bd02f52ac564238ca6125a091",
              children: (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: L,
                style: {
                  "--navWrap-max-height": `${b+I}px`
                },
                children: R.map((e => (0, s.createElement)(q, {
                  ...e,
                  activeSubNavId: f,
                  setActiveSubNavId: g,
                  setSubNavExtraHeight: p,
                  onNavigate: n,
                  key: e.text
                })))
              })
            }), (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: k ? null : "hidden"
              },
              children: (0, _.jsx)(y, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  g(-1), u(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        };
      var W = t(5315);
      const V = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        F = "CharacterButton:characterName",
        X = "CharacterButton:platform",
        K = "CharacterButton:avatar",
        Y = "CharacterButton:rankValue",
        J = e => {
          let {
            characterData: a,
            setMobileCardWidth: o,
            tabIndex: l
          } = e;
          const d = (0, r.useIntl)(),
            {
              currentCharId: u,
              setCurrentCharId: m
            } = (0, v.useRockstarUserState)(),
            {
              track: f
            } = (0, v.useGtmTrack)(),
            g = (0, s.createRef)(),
            {
              platform: b,
              platformUsername: p,
              mugshotUrl: h,
              stats: k
            } = a,
            [x, w] = (0, s.useState)(h),
            [y] = (0, s.useState)(a.index),
            S = n(b, "large"),
            j = u === a.index;
          return (0, s.useEffect)((() => {
            g.current && o && o(g?.current?.offsetWidth)
          }), [g]), (0, _.jsxs)("button", {
            className: "rockstargames-modules-core-headerb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": j,
            onClick: e => {
              e.stopPropagation(), m(y), f({
                event: "character_selector_select",
                text: V[b] ?? "",
                position: y
              })
            },
            ref: g,
            tabIndex: l,
            children: [(0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerd79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, _.jsx)("img", {
                src: x,
                alt: d.formatMessage(c.profile_selector_mugshot, {
                  userName: p
                }),
                onError: () => {
                  w(t(5931))
                },
                "data-testid": K
              })
            }), (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-headered30f2b92b3fc2937e7278409208872f",
              children: [(0, _.jsxs)("div", {
                className: "rockstargames-modules-core-headera6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, _.jsx)("img", {
                  src: S.src,
                  alt: S.alt,
                  "data-testid": X
                }), (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-headerc3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": F,
                  children: p
                })]
              }), (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerf5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, _.jsxs)("div", {
                  className: "rockstargames-modules-core-headerc9300f34b82bbdffb7006ff32247adff",
                  children: [(0, _.jsx)("img", {
                    className: "rockstargames-modules-core-headerfaa7b2808fb96fa02fd2e99be36df8e6",
                    src: i(parseInt(k.overview.rank.value)),
                    alt: d.formatMessage(c.profile_selector_rp_icon)
                  }), (0, _.jsx)("span", {
                    "data-testid": Y,
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        };
      let Z = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        Q = function(e) {
          return e.pc = "pc", e.ps4 = "ps4", e.ps5 = "ps5", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e
        }({});
      const ee = e => {
          let {
            tagSize: a,
            platform: t
          } = e;
          const {
            src: s,
            alt: r
          } = ((e, a) => {
            const t = a === Z.small;
            switch (e) {
              case Q.pc:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg", alt: "PC"
                };
              case Q.ps4:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
                };
              case Q.ps5:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
                };
              case Q.xboxOne:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
                };
              case Q.xboxSeries:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
                };
              default:
                return {
                  src: "", alt: ""
                }
            }
          })(t, a);
          return (0, _.jsx)("img", {
            className: "rockstargames-modules-core-headerea83a9d30b1ce0442bd3f94257fc0905",
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": a,
            src: s,
            alt: r
          })
        },
        ae = {
          pillBtn: "rockstargames-modules-core-headerc094ee9992658964204dbc3c55063187",
          selected: "rockstargames-modules-core-headerf68f5558f3bacb6ab2f0f6e52b7c4d3d",
          profileDetails: "rockstargames-modules-core-headerc7a6cdc85906179aeadfbea13a491277",
          avatar: "rockstargames-modules-core-headere1ed133f04d4201de6c787667fe46939",
          avatarPlatform: "rockstargames-modules-core-headerb061d8f050dd255669342700ddbe9f94",
          profileStats: "rockstargames-modules-core-headera4a23edaf47f301893d88f6e233907b3",
          scNames: "rockstargames-modules-core-headerc6a703613ae9abf4927cf1f023878d9c",
          scTagsNames: "rockstargames-modules-core-headerac56f06be77872b6f7ba074189a2ec36",
          scUserName: "rockstargames-modules-core-headera829077ec05e5b83560be13ff3604c8e",
          scCrewName: "rockstargames-modules-core-headerc3c644cc20da4e904a7f4e5e3850bf7b",
          scCrewRankBar: "rockstargames-modules-core-headercacefbe6235792c328eabdb72c7e812c",
          scCrewRankBarItem: "rockstargames-modules-core-headerf9fc60f5d92cda504e6a40d09ec34429",
          scProgress: "rockstargames-modules-core-headerb1230619acc50d561a73b55a185e782e",
          scRpLevel: "rockstargames-modules-core-headere3dcece76ffe0dcd864d13ada6a4c532",
          scRpIcon: "rockstargames-modules-core-headerfd047e239c2b7adafe8729ad8e7ae646",
          scMoney: "rockstargames-modules-core-headerffc96f13a79073f795d296415f874263",
          scCash: "rockstargames-modules-core-headerf21a08a90936d208b236a20d5893ab50",
          scBank: "rockstargames-modules-core-headeree0f3a44274a32b7c03d50d1f8e23578"
        },
        te = "ProfileCard:characterName",
        se = "ProfileCard:avatar",
        re = "ProfileCard:bankValue",
        ne = "ProfileCard:cashValue",
        ie = "ProfileCard:rankValue",
        ce = e => {
          let {
            character: a
          } = e;
          const {
            data: n
          } = (0, v.useRockstarUser)(), {
            track: o
          } = (0, v.useGtmTrack)(), l = (0, r.useIntl)(), [d, u] = (0, s.useState)([]), [m, f] = (0, s.useState)(null), [g, b] = (0, s.useState)(null), [p, h] = (0, s.useState)(!1), [k, x] = (0, s.useState)(-1), [w, y] = (0, s.useState)([]), [S, j] = (0, s.useState)(0), C = t(5931), {
            platform: N
          } = a, [M, z] = (0, s.useState)("0"), [R, I] = (0, s.useState)("0"), E = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), L = () => {
            G((0, _.jsx)("img", {
              src: C,
              alt: l.formatMessage(c.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          }, [P, G] = (0, s.useState)((0, _.jsx)("img", {
            className: ae.avatarImg,
            src: a.mugshotUrl,
            alt: l.formatMessage(c.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: L,
            "data-testid": se
          }));
          (0, s.useEffect)((() => {
            u(n.crews ?? [])
          }), [n.crews]), (0, s.useEffect)((() => {
            G((0, _.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: L,
              "data-testid": se
            })), z(E(a.stats.overview.bank.value)), I(E(a.stats.overview.cash.value)), j(parseInt(a.stats.overview.rank.value))
          }), [a, n.nickname]), (0, s.useEffect)((() => {
            d && d.forEach((e => {
              !0 === e.isPrimary && (f(e.crewTag), b(e.crewColour), x(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [d]), (0, s.useEffect)((() => {
            const e = [];
            if (!p && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, _.jsx)("div", {
                className: ae.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            y(e)
          }), [k, p, g]);
          const T = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, _.jsxs)("div", {
            className: ae.profileDetails,
            onClick: T,
            onKeyUp: T,
            role: "button",
            tabIndex: -1,
            children: [(0, _.jsxs)("div", {
              className: ae.avatar,
              children: [P, (0, _.jsx)("div", {
                className: ae.avatarPlatform,
                "data-platform": a.platform,
                children: (0, _.jsx)(ee, {
                  platform: N,
                  tagSize: Z.large
                })
              })]
            }), (0, _.jsxs)("div", {
              className: ae.profileStats,
              children: [(0, _.jsx)("div", {
                className: ae.scNames,
                children: (0, _.jsxs)("div", {
                  className: ae.scTagsNames,
                  children: [(0, _.jsx)("span", {
                    className: ae.scUserName,
                    "data-testid": te,
                    children: a.platformUsername
                  }), m && (0, _.jsxs)("span", {
                    className: ae.scCrewName,
                    "data-arrow-tag": p,
                    children: [m, !p && (0, _.jsx)("div", {
                      className: ae.scCrewRankBar,
                      children: w
                    })]
                  })]
                })
              }), (0, _.jsxs)("div", {
                className: ae.scProgress,
                children: [(0, _.jsxs)("div", {
                  className: ae.scRpLevel,
                  children: [(0, _.jsx)("img", {
                    className: ae.scRpIcon,
                    src: i(S),
                    alt: l.formatMessage(c.profile_selector_rp_icon)
                  }), (0, _.jsx)("span", {
                    "data-testid": ie,
                    children: a.stats.overview.rank.value
                  })]
                }), (0, _.jsxs)("div", {
                  className: ae.scMoney,
                  children: [(0, _.jsxs)("span", {
                    className: ae.scCash,
                    "data-testid": ne,
                    children: ["$", R]
                  }), (0, _.jsxs)("span", {
                    className: ae.scBank,
                    "data-testid": re,
                    children: ["$", M]
                  })]
                })]
              })]
            })]
          })
        },
        oe = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: r = 17,
            slideChangeCallback: n = null,
            slideClickCallback: i = null,
            children: c = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, s.createRef)(),
            u = (0, W.ri)(d, !1),
            [m, f] = (0, s.useState)(!1),
            [g, b] = (0, s.useState)(0),
            [p, h] = (0, s.useState)(0),
            [k, v] = (0, s.useState)([r]),
            [x, w] = (0, s.useState)(k[0]),
            [y, S] = (0, s.useState)(252),
            [j, C] = (0, s.useState)(0),
            [N, M] = (0, s.useState)([]),
            [z, R] = (0, s.useState)([]),
            [I, E] = (0, s.useState)(!1),
            L = e => {
              if (!0 === m || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(a)
            },
            P = e => {
              if (!0 === m || 0 === p || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > p ? 1 : -1,
                r = Math.abs(p - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === m) return;
                f(!0);
                const e = g - 1 < 0 ? 0 : g - 1;
                b(e), w(k[e]), n && n(e)
              })() : (() => {
                if (!0 === m) return;
                f(!0);
                let e = g + 1 >= k.length ? k.length - 1 : g + 1;
                e < 0 && (e = 0), b(e), w(k[e]), n && n(e)
              })(), h(0)) : w(k[g] + r * s)
            },
            G = () => {
              !0 !== m && !0 !== l && (f(!0), !0 !== m && (w(k[g]), h(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            c.forEach((() => {
              e.push((0, s.createRef)())
            })), M(e)
          }), [c]), (0, s.useEffect)((() => {
            if (N.length < 1) return;
            S(N[0]?.current?.clientWidth || 0);
            const e = N[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            C(t + a)
          }), [N]), (0, s.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              f(!1)
            }), t)
          }), [m, t]), (0, s.useEffect)((() => {
            v(c.map(((e, a) => (e => {
              let a = 0;
              const t = c.length;
              return 1 === t ? .5 * u - .5 * y - 2 * r + j : (0 === e && (a = r - e * y), e === t - 1 && t > 1 && (a = t * y * -1 + (u - (r - j))), e > 0 && e < t - 1 && (a = e * y * -1 + (.5 * u - .5 * y + .5 * j)), a)
            })(a)))), 1 === c.length ? E(!0) : E(!1)
          }), [d.current, c, u]), (0, s.useEffect)((() => {
            const e = (a = g, c.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            R(e)
          }), [c, g]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== l || w(k[0])
          }), [l, o, k]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerb794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: L,
              onTouchMove: P,
              onTouchEnd: G,
              onMouseDown: L,
              onMouseMove: P,
              onMouseUp: G,
              onClick: () => {
                null !== i && i(g)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerc1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": m,
                "data-single-item": I,
                style: {
                  transform: I ? null : `translateX(${x}px)`
                },
                children: c.map(((e, a) => (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-headerdd4bcd955436c8a6982ee16756f7fd8b",
                  ref: N[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), z.length > 1 && !1 === o && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headere8e5249dac92a2bc76788d0fe7d7dfb7",
              children: z.map(((e, a) => (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerf64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, a)))
            })]
          })
        },
        le = {
          pillBtn: "rockstargames-modules-core-headerb4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-modules-core-headered6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-modules-core-headere506a7deb95c0b0c9988325cc857ea9a",
          scCharacterSelector: "rockstargames-modules-core-headerc3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-modules-core-headerea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-modules-core-headerc5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-modules-core-headera84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-modules-core-headerca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-modules-core-headerb71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-modules-core-headerfa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-core-headerce91ee6ebb491174a4ccb4be628aaae7"
        },
        de = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: n,
            refCharacterListDesktop: i,
            menuPadding: o,
            longCharList: l,
            setLongCharList: d,
            isMobileMode: u,
            setIsMobileMode: f,
            location: g,
            onNavigate: b
          } = e;
          const {
            windowWidth: p,
            windowHeight: h
          } = (0, j.useWindowResize)(), k = (0, r.useIntl)(), {
            languageSelectorOpened: x,
            setLanguageSelectorOpened: w,
            activeSubNavId: S,
            setActiveSubNavId: C,
            subNavExtraHeight: N,
            setSubNavExtraHeight: M,
            navOpened: z,
            setScNavOpened: R
          } = T(), [I, E] = (0, s.useState)(""), {
            webSettings: L
          } = (0, j.useRockstarWebSettings)(), {
            track: P
          } = (0, v.useGtmTrack)(), G = (0, j.useRockstarTokenPing)(), {
            data: O,
            loggedIn: B
          } = (0, v.useRockstarUser)(), {
            charactersNeeded: D,
            currentCharId: H,
            hasNotifications: V,
            navOpen: F,
            setCurrentCharId: X,
            setHasNotifications: K,
            setSelectedCharacterTuple: Y,
            setUserData: Z
          } = (0, v.useRockstarUserState)(), [Q, ee] = (0, s.useState)(null), [ae, te] = (0, s.useState)(!1), [se, re] = (0, s.useState)(!1), [ne, ie] = (0, s.useState)(0), de = (0, s.createRef)(), _e = (0, W.ri)(de, !1), ue = (0, s.createRef)(), [me, fe] = (0, s.useState)(0), [ge, be] = (0, s.useState)([]), [pe, he] = (0, s.useState)(244), ke = (0, s.useRef)(null), ve = (0, s.useMemo)((() => (0, m.A)()), []), xe = (0, s.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage(c.sc_link_activity_feed),
            location: {
              domain: m.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...U,
              text: c.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(c.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(c.sc_link_settings),
              location: {
                domain: m.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...U,
                text: c.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(c.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...U,
                text: c.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(c.sc_link_messages),
              location: {
                domain: m.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...U,
                text: c.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(c.sc_link_game_activation),
              location: {
                domain: m.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...U,
                text: c.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(c.sc_link_notifications),
            location: {
              domain: m.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...U,
              text: c.sc_link_notifications.defaultMessage,
              location: {
                domain: m.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(c.sc_link_crews),
            location: {
              domain: m.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...U,
              text: c.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(c.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(c.sc_link_my_friends),
              location: {
                domain: m.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...U,
                text: c.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(c.sc_link_import_friends),
              location: {
                domain: m.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...U,
                text: c.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(c.sc_link_find_friends),
              location: {
                domain: m.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...U,
                text: c.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, $(e), {
            text: e.formatMessage(c.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...U,
              text: c.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(k, a, O, V, I, window)), [k, a, O, V, I, ve]), we = () => {
            re(o + pe * ne < _e)
          }, ye = () => {
            if (ue.current) {
              const {
                current: e
              } = ue, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), fe(a + e)
              } else fe(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ve.currentSite?.site === m.C.socialClub && (e = encodeURIComponent("/")), E(e)
          }), [g]), (0, s.useEffect)((() => {
            be(O?.characters?.[D] ?? [])
          }), [O, D]), (0, s.useEffect)((() => {
            O && Z(O)
          }), [O]), (0, s.useEffect)((() => {
            const e = O?.characters?.gtao ?? [];
            if (null !== B && !e.length) return void Y(!1);
            if (null == H || !e.length) return;
            const a = e?.[H] ?? e?.[0] ?? null;
            Y(!!a?.platform && [a.platform, a.characterSlot])
          }), [H, O, B]), (0, s.useEffect)((() => {
            (async () => {
              if (!O?.id || !F) return;
              const {
                count: e
              } = await (0, j.coreScApiFetch)("notification/count", {
                pingBearer: G
              });
              K(e > 0)
            })()
          }), [O, F]), (0, s.useEffect)((() => {
            we()
          }), [pe]), (0, s.useEffect)((() => {
            n(!0), f(p < 768), f(p < 768 || h < 649)
          }), [p, h]), (0, s.useEffect)((() => {
            let e = ge.length - 1;
            e < 0 && (e = 0), ie(e);
            const a = ge.length > 0 ? ge[H] ?? ge[0] : null;
            a && (ee(a), ge.length > 1 ? te(!0) : te(!1), d(ge.length - 1 > 3))
          }), [H, ge]), (0, s.useEffect)((() => {
            we()
          }), [ne, u, p, ge]), (0, s.useEffect)((() => {
            ye(), A()((() => {
              setTimeout(ye, 0)
            }), 300)
          }), [p, h]), (0, s.useEffect)((() => {
            const e = L?.currentCharId ?? 0;
            e !== H && X(Math.max(0, Math.min(e, ge.length - 1)))
          }), [ge, L]), (0, _.jsxs)(_.Fragment, {
            children: [null !== Q && "gtao" === D && (0, _.jsxs)("div", {
              className: le.scProfile,
              ref: ke,
              tabIndex: -1,
              "aria-label": k.formatMessage(c.profile_selector_profile_card),
              children: [(0, _.jsx)(ce, {
                s: le,
                character: Q
              }), !0 === ae && (0, _.jsxs)("div", {
                className: le.scCharacterSelector,
                children: [(0, _.jsx)("button", {
                  className: le.scCharacterSelectBtn,
                  "aria-hidden": !F,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    n(a), P({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, _.jsx)("span", {
                    children: (0, _.jsx)(r.FormattedMessage, {
                      ...c.profile_selector_switch_character
                    })
                  })
                }), !u && (0, _.jsx)("div", {
                  className: le.scCharacterList,
                  "data-long-list": l,
                  "aria-hidden": t,
                  ref: i,
                  children: ge.map((e => (0, _.jsx)(J, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: he
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), u && (0, _.jsx)("div", {
                  className: le.scCharacterList,
                  "data-single-item": 2 === ge.length,
                  "data-swiper-disabled": se,
                  "aria-hidden": t,
                  ref: de,
                  children: (0, _.jsx)(oe, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      P({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: se,
                    disableSwiper: se,
                    children: ge.filter(((e, a) => a !== H)).map((e => (0, s.createElement)(J, {
                      characterData: e,
                      setMobileCardWidth: he,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, _.jsxs)("nav", {
              className: le.nav,
              "aria-hidden": !F,
              children: [(0, _.jsx)("button", {
                className: le.navHeader,
                type: "button",
                "data-opened": z,
                "data-nav-opened": F,
                tabIndex: z ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), z || R(!0)
                },
                "data-testid": "playerButton",
                children: (0, _.jsx)("span", {
                  children: O.nickname
                })
              }), (0, _.jsx)("div", {
                className: le.navWrap,
                "data-opened": z,
                "data-logged-in": "true",
                ref: ue,
                style: {
                  "--navWrap-max-height": `${me+N}px`
                },
                children: xe.map(((e, a) => (0, s.createElement)(q, {
                  ...e,
                  id: a,
                  activeSubNavId: S,
                  setActiveSubNavId: C,
                  setSubNavExtraHeight: M,
                  onNavigate: b,
                  key: e.text
                })))
              })]
            }), (0, _.jsx)("div", {
              className: le.scLanguageSelector,
              style: {
                visibility: F ? null : "hidden"
              },
              children: (0, _.jsx)(y, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: x,
                setLanguageSelectorOpened: w,
                location: g
              })
            })]
          })
        },
        _e = {
          menu: "rockstargames-modules-core-headerc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-modules-core-headerc31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-modules-core-headerc5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-modules-core-headerb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-modules-core-headerff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-headerb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-modules-core-headereff8c1d4bf675accdb7d952aba0174dc"
        },
        ue = (0, j.getConfigForDomain)(),
        me = d((e => {
          let {
            location: a,
            onNavigate: n
          } = e;
          const {
            windowHeight: i
          } = (0, j.useWindowResize)(), o = (0, r.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: u,
            navOpened: m,
            setAccountNavOpened: f,
            charListHidden: g,
            setCharListHidden: b
          } = T(), [p, h] = (0, s.useState)(!1), {
            navHidden: k = !1
          } = (0, j.useState)(), {
            loggedIn: x
          } = (0, v.useRockstarUser)(), {
            currentCharId: w,
            navOpen: y,
            setNavOpen: C,
            userData: N
          } = (0, v.useRockstarUserState)(), {
            track: M
          } = (0, v.useGtmTrack)(), [z, R] = (0, s.useState)(!1), I = (0, s.useRef)(), [E, L] = (0, s.useState)(0), P = (0, s.createRef)(), [G, O] = (0, s.useState)(!1), [A, U] = (0, s.useState)(0), [$, B] = (0, s.useState)(!1), {
            mutateWebSettings: D,
            webSettings: q
          } = (0, j.useRockstarWebSettings)(), W = (0, s.useCallback)((e => {
            b(e), I.current && !0 === e && (I.current.scrollTop = 0)
          }), [I]);
          return (0, s.useEffect)((() => {
            null !== w && q.currentCharId !== w && D({
              key: "currentCharId",
              value: w
            }), !1 === x ? D({
              key: "currentCharId",
              value: null
            }) : x && !N && M({
              event: "account_synced"
            })
          }), [w, x]), (0, s.useEffect)((() => {
            I.current && (!1 === g && !1 === z && (I.current.style.height = `${I.current.scrollHeight}px`), !0 === g && (I.current.style.height = null))
          }), [g, I, z]), (0, s.useEffect)((() => {
            const e = () => {
                C(!1), W(!0)
              },
              a = a => {
                const t = P?.current && a?.composedPath().includes(P.current);
                y && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [P]), (0, s.useEffect)((() => {
            C(!1), W(!0)
          }), [k]), (0, s.useEffect)((() => {
            if (P.current) {
              const {
                current: e
              } = P, a = window.getComputedStyle(e);
              L(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [P]), (0, s.useEffect)((() => {
            B(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            P.current && h(P?.current?.scrollHeight >= i)
          }), [P, i]), (0, s.useEffect)((() => {
            y || (u(-1), d(!1))
          }), [y]), (0, s.useEffect)((() => {
            l && (g || W(!0), m && (f(!1), u(-1)))
          }), [l]), (0, s.useEffect)((() => {
            m && (l && d(!1), g || W(!0))
          }), [m]), void 0 === x ? null : (0, _.jsxs)(S.RemoveScroll, {
            enabled: !!y,
            removeScrollBar: !1,
            children: [(0, _.jsxs)("div", {
              className: [_e.menu, y ? _e.navOpen : ""].join(" "),
              "data-logged-in": x,
              "data-mac-browser": $,
              "data-scroll-mode": p,
              ref: P,
              "aria-hidden": !y,
              children: [(0, _.jsx)("button", {
                className: _e.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  U(a)
                },
                onTouchMove: e => {
                  if (0 === A) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(A - a) > 1 && (U(0), C(!1))
                },
                children: (0, _.jsx)("img", {
                  className: _e.dragHandle,
                  src: t(35902),
                  alt: o.formatMessage(c.sc_menu_drag_handle)
                })
              }), x ? (0, _.jsx)(de, {
                sc: ue,
                charListHidden: g,
                hideCharacterList: W,
                refCharacterListDesktop: I,
                menuPadding: E,
                longCharList: z,
                setLongCharList: R,
                isMobileMode: G,
                setIsMobileMode: O,
                location: a,
                onNavigate: n
              }) : (0, _.jsx)(H, {
                sc: ue,
                navOpen: y,
                location: a,
                onNavigate: n
              })]
            }), (0, _.jsx)("div", {
              className: [_e.scOverlay, y ? _e.navOpen : ""].join(" "),
              "data-logged-in": x
            })]
          })
        })),
        fe = d((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const n = (0, r.useIntl)(),
            {
              data: i,
              loggedIn: o
            } = (0, v.useRockstarUser)(),
            {
              charactersNeeded: l,
              currentCharId: d,
              navOpen: u,
              setNavOpen: m
            } = (0, v.useRockstarUserState)(),
            {
              track: f
            } = (0, v.useGtmTrack)(),
            [g, b] = (0, s.useState)(),
            [p, h] = (0, s.useState)(!1),
            [k, x] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            x(i?.characters?.[l] ?? [])
          }), [i, l]);
          const w = (0, s.useCallback)((e => {
            e.stopPropagation(), m(!u), 1 == !u && a(null), f({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: u ? "close" : "open"
            })
          }), [u]);
          return (0, s.useEffect)((() => {
            h(!!k?.[d]?.mugshotUrl)
          }), [k, d]), (0, s.useEffect)((() => {
            b((() => {
              switch (o) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return k?.[d]?.mugshotUrl ?? i?.avatar
              }
            })())
          }), [i, k, d, o]), g ? (0, _.jsxs)("button", {
            className: "rockstargames-modules-core-headeree811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": n.formatMessage(u ? c.sc_menu_close : c.sc_menu_open),
            "aria-expanded": u,
            type: "button",
            onClick: w,
            "data-mugshot": p,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(o),
            children: [(0, _.jsx)("img", {
              className: "rockstargames-modules-core-headera917b58ca28b68550a1aa5d99c7eb998",
              src: g,
              alt: i?.nickname || ""
            }), o && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerc06123ceae7ca4759ec8b1a5197823db",
              children: (0, _.jsx)(ee, {
                platform: k?.[d]?.platform,
                tagSize: Z.small
              })
            }), o && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": k?.[d]?.platform ?? null
            })]
          }) : null
        })),
        ge = {
          pillBtn: "rockstargames-modules-core-headerd56685560c26cb74e41c0e7efbff2324",
          selected: "rockstargames-modules-core-headeraf2c4e1e0c4a0665c4844045ac59a1a5",
          profile: "rockstargames-modules-core-headercc0f17f755cfd87ea1140528dcff6218",
          scCharacterSelector: "rockstargames-modules-core-headerad02e9d1ab679ad0544665c4a1463f79",
          scCharacterSelectBtn: "rockstargames-modules-core-headerccc058e17b53baa907a8d380400a1b81",
          open: "rockstargames-modules-core-headere4d379e3b26def224a6777e254d96718",
          scCharacterList: "rockstargames-modules-core-headera3cb8b5052cdb657b91ccbd293f3ac0f",
          nav: "rockstargames-modules-core-headerf4119915eed1b4ec0bd34cd98e2cffef",
          scLanguageSelector: "rockstargames-modules-core-headerec69e723cd1f4082f4bc3f5656f21b7c",
          navHeader: "rockstargames-modules-core-headerd8efae6b36b65fb512bfff18bc891678",
          navWrap: "rockstargames-modules-core-headera9396b9942eedcf0e129b7f6fd3f69ec"
        },
        be = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: n,
            menuPadding: i,
            longCharList: o,
            setLongCharList: l,
            isMobileMode: d
          } = e;
          const u = (0, r.useIntl)(),
            {
              windowWidth: m
            } = (0, j.useWindowResize)(),
            {
              track: f
            } = (0, v.useGtmTrack)(),
            {
              charactersNeeded: g,
              currentCharId: b,
              navOpen: p,
              setCurrentCharId: h,
              setSelectedCharacterTuple: k,
              setUserData: x,
              setCharacterAvatar: w,
              setCharacterPlatform: y
            } = (0, v.useRockstarUserState)(),
            [S, C] = (0, s.useState)(null),
            [N, M] = (0, s.useState)([]),
            [z, R] = (0, s.useState)(!1),
            [I, E] = (0, s.useState)(0),
            [L, P] = (0, s.useState)(244),
            [G, T] = (0, s.useState)(!1),
            O = (0, s.useRef)(null),
            A = (0, s.createRef)(),
            U = (0, W.ri)(A, !1),
            {
              webSettings: $
            } = (0, j.useRockstarWebSettings)(),
            {
              data: B,
              loggedIn: D
            } = (0, v.useRockstarUser)({
              fetchCharacters: !0
            }),
            q = () => {
              T(i + L * I < U)
            };
          return (0, s.useEffect)((() => {
            q()
          }), [L]), (0, s.useEffect)((() => {
            q()
          }), [I, d, m, N]), (0, s.useEffect)((() => {
            M(B.characters?.[g] ?? [])
          }), [B, g]), (0, s.useEffect)((() => {
            B && x(B)
          }), [B]), (0, s.useEffect)((() => {
            const e = B?.characters?.gtao;
            if (null !== D && !e?.length) return void k(!1);
            if (null == b || !e?.length) return;
            const a = e?.[b] ?? e?.[0] ?? null;
            k(!!a?.platform && [a.platform, a.characterSlot])
          }), [b, B, D]), (0, s.useEffect)((() => {
            let e = N.length - 1;
            e < 0 && (e = 0), E(e);
            const a = N.length > 0 ? N[b] ?? N[0] : null;
            if (a) return C(a), w(a.mugshotUrl), y(a.platform), N.length > 1 ? R(!0) : R(!1), l(N.length - 1 > 3), () => {
              w(""), y("")
            }
          }), [b, N]), (0, s.useEffect)((() => {
            const e = $?.currentCharId ?? 0;
            e !== b && h(Math.max(0, Math.min(e, N.length - 1)))
          }), [N, $]), S && "gtao" === g ? (0, _.jsxs)("div", {
            className: ge.profile,
            ref: O,
            tabIndex: -1,
            "aria-label": u.formatMessage(c.profile_selector_profile_card),
            children: [(0, _.jsx)(ce, {
              s: ge,
              character: S
            }), !0 === z && (0, _.jsxs)("div", {
              className: ge.scCharacterSelector,
              children: [(0, _.jsx)("button", {
                className: ge.scCharacterSelectBtn,
                "aria-hidden": !p,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !a;
                  t(s), f({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, _.jsx)("span", {
                  children: (0, _.jsx)(r.FormattedMessage, {
                    ...c.profile_selector_switch_character
                  })
                })
              }), !1 === d && (0, _.jsx)("div", {
                className: ge.scCharacterList,
                "data-long-list": o,
                "aria-hidden": a,
                ref: n,
                children: N.map((e => (0, _.jsx)(J, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: P
                }, e.mugshotUrl)))
              }), !0 === d && (0, _.jsx)("div", {
                className: ge.scCharacterList,
                "data-single-item": 2 === N.length,
                "data-swiper-disabled": G,
                "aria-hidden": a,
                ref: A,
                children: (0, _.jsx)(oe, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    f({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: G,
                  disableSwiper: G,
                  children: N.filter(((e, a) => a !== b)).map((e => (0, s.createElement)(J, {
                    characterData: e,
                    setMobileCardWidth: P,
                    key: e.mugshotUrl,
                    tabIndex: a ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }
    },
    35902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    32810: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    5931: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    50702: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    7166: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    69743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    71070: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    43777: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    82864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    348: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    12541: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    17024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    24963: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    15917: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    89697: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    26563: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    58662: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);