! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ad32638e-f082-4cf0-937c-20e73861f11b", e._sentryDebugIdIdentifier = "sentry-dbid-ad32638e-f082-4cf0-937c-20e73861f11b")
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
  [89], {
    689: (e, a, t) => {
      var s = t(605).Symbol;
      e.exports = s
    },
    5192: (e, a, t) => {
      var s = t(689),
        r = t(4915),
        n = t(8150),
        i = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? r(e) : n(e)
      }
    },
    2368: (e, a, t) => {
      var s = t(9896),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, s(e) + 1).replace(r, "") : e
      }
    },
    8888: (e, a, t) => {
      var s = "object" == typeof t.g && t.g && t.g.Object === Object && t.g;
      e.exports = s
    },
    4915: (e, a, t) => {
      var s = t(689),
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
    8150: e => {
      var a = Object.prototype.toString;
      e.exports = function(e) {
        return a.call(e)
      }
    },
    605: (e, a, t) => {
      var s = t(8888),
        r = "object" == typeof self && self && self.Object === Object && self,
        n = s || r || Function("return this")();
      e.exports = n
    },
    9896: e => {
      var a = /\s/;
      e.exports = function(e) {
        for (var t = e.length; t-- && a.test(e.charAt(t)););
        return t
      }
    },
    5757: (e, a, t) => {
      var s = t(3693),
        r = t(2204),
        n = t(9902),
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
    3693: e => {
      e.exports = function(e) {
        var a = typeof e;
        return null != e && ("object" == a || "function" == a)
      }
    },
    6490: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    9978: (e, a, t) => {
      var s = t(5192),
        r = t(6490);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == s(e)
      }
    },
    2204: (e, a, t) => {
      var s = t(605);
      e.exports = function() {
        return s.Date.now()
      }
    },
    9902: (e, a, t) => {
      var s = t(2368),
        r = t(3693),
        n = t(9978),
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
    7089: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        CharacterCard: () => _,
        LanguageSelector: () => x,
        Menu: () => ce,
        MenuButton: () => de,
        ProfileSwitcher: () => ue
      });
      var s = t(2229),
        r = t(1788);
      const n = JSON.parse('{"us":{"rp_icon":"RP Category","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        i = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(702),
                alt: "PC"
              } : {
                src: t(2864),
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
                src: t(2124),
                alt: "PS5"
              } : {
                src: t(2541),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(1070),
                alt: "Xbox One"
              } : {
                src: t(7024),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(3777),
                alt: "Xbox Series X|S"
              } : {
                src: t(4963),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        c = e => t(e < 100 ? 5917 : e > 99 && e < 500 ? 9697 : e > 499 && e < 750 ? 8662 : 6563),
        o = (0, r.defineMessages)({
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
        l = {
          pillBtn: "rockstargames-modules-core-headerb618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-modules-core-headere1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-modules-core-headerb5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-modules-core-headerd6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-modules-core-headercb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-modules-core-headera68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-modules-core-headerad1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-modules-core-headeraf42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-modules-core-headerf9a042c11d2e6a8ed1d5e78f40abd88d"
        };
      var d = t(8096);
      const _ = (0, r.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const n = (0, r.useIntl)(),
            {
              platform: _,
              platformUsername: u,
              mugshotUrl: m,
              stats: f
            } = a,
            [g, b] = (0, s.useState)(m),
            p = i(_, "large");
          return (0, d.jsxs)("div", {
            className: l.scCharacterCard,
            children: [(0, d.jsx)("div", {
              className: l.avatar,
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: g,
                alt: n.formatMessage(o.profile_selector_mugshot, {
                  userName: u
                }),
                onError: () => {
                  b(t(5931))
                }
              })
            }), (0, d.jsx)("div", {
              className: l.scCharacterStats,
              children: (0, d.jsxs)("div", {
                className: l.scCharNames,
                children: [(0, d.jsx)("img", {
                  src: p.src,
                  alt: p.alt
                }), (0, d.jsx)("div", {
                  className: l.scUserName,
                  "data-size": "small",
                  children: u
                }), (0, d.jsx)("div", {
                  className: l.scRp,
                  children: (0, d.jsxs)("div", {
                    className: l.scRpLevel,
                    children: [(0, d.jsx)("img", {
                      className: l.scRpIcon,
                      src: c(f.overview.rank.value),
                      alt: n.formatMessage(o.profile_selector_rp_icon)
                    }), (0, d.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), n),
        u = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"Okay","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_error_generic_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Comprueba tu correo","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmer votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認する","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        m = (0, r.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var f = t(9623);
      const g = "rockstargames-modules-core-headerea8cf4797c830e5b5dad68b2ec814e67",
        b = (0, r.withIntl)((e => {
          let {
            children: a,
            to: t = "#",
            reloadDocument: n = !1,
            alt: i = "",
            autoBlank: c = !1,
            onClick: o = (() => {}),
            focused: l = !1,
            ..._
          } = e;
          const u = (0, s.useRef)(null),
            b = (0, r.useIntl)(),
            p = !/^(https?|mailto):/i.test(t),
            h = /^#/.test(t),
            k = _?.target ?? (c ? "_blank" : "_self"),
            {
              ...v
            } = _;
          let x = "";
          if ("aria-label" in v && v["aria-label"] && (x = "_blank" === k ? `${v["aria-label"]} ${b.formatMessage(m.aria_label_open_new_window)}` : v["aria-label"]), (0, s.useEffect)((() => {
              l && u?.current && u.current.focus()
            }), [u?.current, l]), h) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), o && o(e)
            };
            return (0, d.jsxs)("a", {
              title: i,
              href: t,
              onClick: e,
              ...v,
              "aria-label": x,
              ref: u,
              children: [a, "_blank" === k && !x && (0, d.jsx)("span", {
                className: g,
                children: b.formatMessage(m.aria_label_open_new_window)
              })]
            })
          }
          if (p) return (0, d.jsxs)(f.NavLink, {
            title: i,
            to: t,
            onClick: o,
            ...v,
            "aria-label": x,
            ref: u,
            reloadDocument: n,
            children: [a, "_blank" === k && !x && (0, d.jsx)("span", {
              className: g,
              children: b.formatMessage(m.aria_label_open_new_window)
            })]
          });
          const w = Object.keys(v).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: _[a]
          })), {});
          return "function" == typeof w?.className && delete w.className, (0, d.jsxs)("a", {
            href: t,
            title: i,
            onClick: o,
            target: k,
            ...w,
            "aria-label": x,
            ref: u,
            children: [a, "_blank" === k && !x && (0, d.jsx)("span", {
              className: g,
              children: b.formatMessage(m.aria_label_open_new_window)
            })]
          })
        }), u);
      var p = t(2918),
        h = t(5138);
      const k = (0, r.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        v = {
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
        x = (0, r.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: n,
            location: i,
            parent: c = "footer"
          } = e;
          const {
            track: o
          } = (0, p.useGtmTrack)(), l = (0, r.useIntl)(), [_, u] = (0, r.getLocale)(), [m, f] = (0, s.useState)(!1), g = (0, s.useMemo)((() => (0, h.A)()), []), x = (0, s.useCallback)((e => {
            let a = i.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return r.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), g.currentSite?.site === h.C.www ? "en" === e ? `${window.location.origin}/${a}${i.search}` : `${window.location.origin}/${e}/${a}${i.search}` : `${window.location.origin}/${a}${i.search}`
          }), [i]), w = (0, s.useRef)(null), [y, S] = (0, s.useState)(0), j = matchMedia("(hover: none) and (pointer: coarse)").matches, N = e => {
            if (n && n(!1), _.subdomaincom === e || "none" === e) return void(n && n(!1));
            const a = r.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = x(e);
              o({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: c
              }), u(a.iso), window.location.href = t
            }
          };
          return (0, s.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === m && f(!1)
          }), [t]), (0, s.useEffect)((() => {
            w.current && S(w.current.scrollHeight)
          }), [w]), (0, d.jsxs)("div", {
            className: [v.languageSelector, m ? v.open : ""].join(" "),
            "data-theme": a,
            children: [j && "sc-menu" === a && (0, d.jsx)("div", {
              className: v.selectBoxWrapper,
              children: (0, d.jsxs)("select", {
                className: v.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  N(a)
                },
                "aria-label": l.formatMessage(k.language_selector_default),
                children: [(0, d.jsx)("option", {
                  className: v.selectBoxOption,
                  value: "none",
                  children: (0, d.jsx)(r.FormattedMessage, {
                    ...k.language_selector_default
                  })
                }), r.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, d.jsx)("option", {
                    className: v.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!j || "sc-menu" !== a) && (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), n && n(!m), f(!m)
                },
                type: "button",
                "aria-label": l.formatMessage(k.language_selector_default),
                children: [(0, d.jsx)("i", {}), (0, d.jsx)("span", {
                  children: (0, d.jsx)(r.FormattedMessage, {
                    ...k.language_selector_default
                  })
                })]
              }), (0, d.jsx)("div", {
                className: v.linkWrapper,
                ref: w,
                style: {
                  "--ls-linkWrapper-opened-height": `${y}px`
                },
                children: (0, d.jsx)("div", {
                  className: v.links,
                  children: r.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, d.jsx)(b, {
                      to: x(a),
                      onClick: (s = a, () => {
                        N(s)
                      }),
                      tabIndex: m ? 0 : -1,
                      children: t
                    }, `desktop-${a}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), n);
      var w = t(4269),
        y = t(5966);
      const S = (0, y.makeVar)(!1),
        j = e => S(e),
        N = (0, y.makeVar)(-1),
        C = e => N(e),
        M = (0, y.makeVar)(-1),
        z = e => M(e),
        I = (0, y.makeVar)(!0),
        R = e => I(e),
        E = (0, y.makeVar)(!0),
        L = e => E(e),
        P = () => {
          const e = (0, y.useReactiveVar)(S),
            a = (0, y.useReactiveVar)(N),
            t = (0, y.useReactiveVar)(M),
            r = (0, y.useReactiveVar)(I),
            n = (0, y.useReactiveVar)(E);
          return (0, s.useEffect)((() => {
            n || (e && j(!1), r && (R(!1), C(-1)))
          }), [n]), (0, s.useEffect)((() => {
            !e && n && (r || R(!0))
          }), [e, n]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: j,
            activeSubNavId: a,
            setActiveSubNavId: C,
            subNavExtraHeight: t,
            setSubNavExtraHeight: z,
            navOpened: r,
            setScNavOpened: R,
            charListHidden: n,
            setCharListHidden: L
          })), [e, a, t, r, n])
        };
      var G = t(5757),
        T = t.n(G);
      const O = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        A = e => ({
          text: e.formatMessage(o.sc_link_help),
          target: "_self",
          ga: {
            ...O,
            text: o.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(o.sc_link_support),
            location: {
              domain: h.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...O,
              text: o.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(o.sc_link_legal),
            location: {
              domain: h.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...O,
              text: o.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(o.sc_link_privacy_policy),
            location: {
              domain: h.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...O,
              text: o.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(o.sc_link_cookies_policy),
            location: {
              domain: h.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...O,
              text: o.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(o.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...O,
              text: o.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(o.sc_link_do_not_sell_my_information),
            location: {
              domain: h.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...O,
              text: o.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var U = t(901);
      const B = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: n,
            ga: i,
            dataTestId: c,
            isSubLink: l,
            hasNotifications: _ = !1,
            onClickCallback: u = (() => {}),
            tabIndex: m,
            reloadDocument: f = !1,
            onNavigate: g
          } = e;
          const {
            track: b
          } = (0, p.useGtmTrack)(), k = (0, h.A)(), v = (0, r.useIntl)();
          let x = s;
          n && (x = n.domain === k.currentSite?.site ? n.path : `https://${k.sites[n.domain]}.rockstargames.com${n.path}`);
          const w = {
            ...i,
            link_url: x
          };
          return (0, d.jsxs)(U.A, {
            className: l ? "rockstargames-modules-core-headerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-headerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": c || "menuLink",
            title: a,
            to: x,
            target: t,
            rel: "noreferrer",
            reloadDocument: f,
            tabIndex: m,
            onClick: e => {
              b(w), u(e)
            },
            onNavigate: g,
            children: [a, _ && (0, d.jsx)("div", {
              className: "rockstargames-modules-core-headerf5178077f8a32e83d71d4e80b551903d",
              children: (0, d.jsx)("span", {
                className: "rockstargames-modules-core-headere49e290899be3c888ca5a4b6b13736a1",
                children: v.formatMessage(o.nofications_new)
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
            children: _ = [],
            activeSubNavId: u,
            setActiveSubNavId: m,
            setSubNavExtraHeight: f,
            reloadDocument: g = !1,
            onClickCallback: b = (() => {}),
            onNavigate: h
          } = e;
          const {
            windowWidth: k,
            windowHeight: v
          } = (0, y.useWindowResize)(), {
            track: x
          } = (0, p.useGtmTrack)(), {
            navOpen: w
          } = (0, p.useRockstarUserState)(), S = (0, s.useRef)(null), [j, N] = (0, s.useState)(0), [C, M] = (0, s.useState)(0), [z, I] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            u !== a && !1 === z && I(!0), u === a && I(!1)
          }), [u]), (0, s.useEffect)((() => {
            if (!S.current) return;
            N(S?.current?.scrollHeight);
            const e = window.getComputedStyle(S.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), M(a)
            }
          }), [S, k, v]), _.length > 0 ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("button", {
              className: "rockstargames-modules-core-headerab99be57ff98f572ec19be5191046577",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: w ? 0 : -1,
              "data-children-hidden": z,
              onClick: e => {
                e.stopPropagation(), x(c), u === a ? (m(-1), f(0)) : (m(a), f(j + C + C))
              },
              children: [(0, d.jsx)("span", {
                className: "rockstargames-modules-core-headere5caaa3aab68c5526a84b01ef0db0a8a",
                children: t
              }), (0, d.jsx)("span", {
                className: "rockstargames-modules-core-headerbb9e4df34c9ecbe29c9886426e64ed12"
              })]
            }, t), (0, d.jsx)("nav", {
              className: "rockstargames-modules-core-headere482683a0cb805002f8bd41b8ef81537",
              ref: S,
              "aria-hidden": z,
              style: {
                height: z ? 0 : `${j}px`
              },
              children: _.map((e => (0, s.createElement)(B, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: z || !w ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, d.jsx)(B, {
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
            onNavigate: h
          })
        },
        D = e => {
          let {
            sc: a,
            location: t,
            onNavigate: n
          } = e;
          const {
            windowWidth: i,
            windowHeight: c
          } = (0, y.useWindowResize)(), l = (0, r.useIntl)(), {
            languageSelectorOpened: _,
            setLanguageSelectorOpened: u,
            activeSubNavId: m,
            setActiveSubNavId: f,
            subNavExtraHeight: g,
            setSubNavExtraHeight: b
          } = P(), {
            setSelectedCharacterTuple: k,
            navOpen: v
          } = (0, p.useRockstarUserState)(), w = (0, y.useLocale)(), S = (0, y.toScLocaleString)(w), [j, N] = (0, s.useState)(""), C = `${a.login}?returnUrl=${j}&lang=${S}`, M = `${a.signup}&returnUrl=${j}&lang=${S}`, z = (0, s.useMemo)((() => (0, h.A)()), []), I = (0, s.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(o.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: o.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(o.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: o.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, A(e)])(l, C, M);
            return e
          }), [l, C, M, z]), [R, E] = (0, s.useState)(0), L = (0, s.createRef)(), G = () => {
            if (L.current) {
              const {
                current: e
              } = L, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), E(a + e)
              } else E(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            N(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            k(!1)
          }), []), (0, s.useEffect)((() => {
            G(), T()((() => {
              setTimeout(G, 0)
            }), 300)
          }), [i, c]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("nav", {
              className: "rockstargames-modules-core-headerf300d66bd02f52ac564238ca6125a091",
              children: (0, d.jsx)("div", {
                className: "rockstargames-modules-core-headerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: L,
                style: {
                  "--navWrap-max-height": `${g+R}px`
                },
                children: I.map((e => (0, s.createElement)(q, {
                  ...e,
                  activeSubNavId: m,
                  setActiveSubNavId: f,
                  setSubNavExtraHeight: b,
                  onNavigate: n,
                  key: e.text
                })))
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-modules-core-headerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: v ? null : "hidden"
              },
              children: (0, d.jsx)(x, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: _,
                setLanguageSelectorOpened: e => {
                  f(-1), u(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        };
      var H = t(6082);
      const $ = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        W = "CharacterButton:characterName",
        V = "CharacterButton:platform",
        F = "CharacterButton:avatar",
        X = "CharacterButton:rankValue",
        K = e => {
          let {
            characterData: a,
            setMobileCardWidth: n,
            tabIndex: l
          } = e;
          const _ = (0, r.useIntl)(),
            {
              currentCharId: u,
              setCurrentCharId: m
            } = (0, p.useRockstarUserState)(),
            {
              track: f
            } = (0, p.useGtmTrack)(),
            g = (0, s.createRef)(),
            {
              platform: b,
              platformUsername: h,
              mugshotUrl: k,
              stats: v
            } = a,
            [x, w] = (0, s.useState)(k),
            [y] = (0, s.useState)(a.index),
            S = i(b, "large"),
            j = u === a.index;
          return (0, s.useEffect)((() => {
            g.current && n && n(g?.current?.offsetWidth)
          }), [g]), (0, d.jsxs)("button", {
            className: "rockstargames-modules-core-headerb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": j,
            onClick: e => {
              e.stopPropagation(), m(y), f({
                event: "character_selector_select",
                text: $[b] ?? "",
                position: y
              })
            },
            ref: g,
            tabIndex: l,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-modules-core-headerd79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: x,
                alt: _.formatMessage(o.profile_selector_mugshot, {
                  userName: h
                }),
                onError: () => {
                  w(t(5931))
                },
                "data-testid": F
              })
            }), (0, d.jsxs)("div", {
              className: "rockstargames-modules-core-headered30f2b92b3fc2937e7278409208872f",
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-modules-core-headera6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, d.jsx)("img", {
                  src: S.src,
                  alt: S.alt,
                  "data-testid": V
                }), (0, d.jsx)("div", {
                  className: "rockstargames-modules-core-headerc3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": W,
                  children: h
                })]
              }), (0, d.jsx)("div", {
                className: "rockstargames-modules-core-headerf5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, d.jsxs)("div", {
                  className: "rockstargames-modules-core-headerc9300f34b82bbdffb7006ff32247adff",
                  children: [(0, d.jsx)("img", {
                    className: "rockstargames-modules-core-headerfaa7b2808fb96fa02fd2e99be36df8e6",
                    src: c(parseInt(v.overview.rank.value)),
                    alt: _.formatMessage(o.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    "data-testid": X,
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Y = {
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
        J = "ProfileCard:characterName",
        Z = "ProfileCard:avatar",
        Q = "ProfileCard:bankValue",
        ee = "ProfileCard:cashValue",
        ae = "ProfileCard:rankValue",
        te = e => {
          let {
            character: a,
            platformTag: n
          } = e;
          const {
            data: i
          } = (0, p.useRockstarUser)(), {
            track: l
          } = (0, p.useGtmTrack)(), _ = (0, r.useIntl)(), [u, m] = (0, s.useState)([]), [f, g] = (0, s.useState)(null), [b, h] = (0, s.useState)(null), [k, v] = (0, s.useState)(!1), [x, w] = (0, s.useState)(-1), [y, S] = (0, s.useState)([]), [j, N] = (0, s.useState)(0), C = t(5931), [M, z] = (0, s.useState)("0"), [I, R] = (0, s.useState)("0"), E = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), L = () => {
            G((0, d.jsx)("img", {
              src: C,
              alt: _.formatMessage(o.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [P, G] = (0, s.useState)((0, d.jsx)("img", {
            className: Y.avatarImg,
            src: a.mugshotUrl,
            alt: _.formatMessage(o.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: L,
            "data-testid": Z
          }));
          (0, s.useEffect)((() => {
            m(i.crews ?? [])
          }), [i.crews]), (0, s.useEffect)((() => {
            G((0, d.jsx)("img", {
              src: a.mugshotUrl,
              alt: i.nickname,
              onError: L,
              "data-testid": Z
            })), z(E(a.stats.overview.bank.value)), R(E(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, i.nickname]), (0, s.useEffect)((() => {
            u && u.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), h(e.crewColour), w(e.rankOrder), v(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && v(!0))
            }))
          }), [u]), (0, s.useEffect)((() => {
            const e = [];
            if (!k && x > -1)
              for (let a = 5; a > x; a -= 1) e.push((0, d.jsx)("div", {
                className: Y.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== b ? b : ""
                }
              }, `crewrankbar-${a}`));
            S(e)
          }), [x, k, b]);
          const T = e => {
            e.stopPropagation(), l({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, d.jsxs)("div", {
            className: Y.profileDetails,
            onClick: T,
            onKeyUp: T,
            role: "button",
            tabIndex: -1,
            children: [(0, d.jsxs)("div", {
              className: Y.avatar,
              children: [P, (0, d.jsx)("div", {
                className: Y.avatarPlatform,
                "data-platform": a.platform,
                children: (0, d.jsx)("img", {
                  src: n.src,
                  alt: n.alt
                })
              })]
            }), (0, d.jsxs)("div", {
              className: Y.profileStats,
              children: [(0, d.jsx)("div", {
                className: Y.scNames,
                children: (0, d.jsxs)("div", {
                  className: Y.scTagsNames,
                  children: [(0, d.jsx)("span", {
                    className: Y.scUserName,
                    "data-testid": J,
                    children: a.platformUsername
                  }), f && (0, d.jsxs)("span", {
                    className: Y.scCrewName,
                    "data-arrow-tag": k,
                    children: [f, !k && (0, d.jsx)("div", {
                      className: Y.scCrewRankBar,
                      children: y
                    })]
                  })]
                })
              }), (0, d.jsxs)("div", {
                className: Y.scProgress,
                children: [(0, d.jsxs)("div", {
                  className: Y.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: Y.scRpIcon,
                    src: c(j),
                    alt: _.formatMessage(o.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    "data-testid": ae,
                    children: a.stats.overview.rank.value
                  })]
                }), (0, d.jsxs)("div", {
                  className: Y.scMoney,
                  children: [(0, d.jsxs)("span", {
                    className: Y.scCash,
                    "data-testid": ee,
                    children: ["$", I]
                  }), (0, d.jsxs)("span", {
                    className: Y.scBank,
                    "data-testid": Q,
                    children: ["$", M]
                  })]
                })]
              })]
            })]
          })
        },
        se = e => {
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
          const _ = (0, s.createRef)(),
            u = (0, H.ri)(_, !1),
            [m, f] = (0, s.useState)(!1),
            [g, b] = (0, s.useState)(0),
            [p, h] = (0, s.useState)(0),
            [k, v] = (0, s.useState)([r]),
            [x, w] = (0, s.useState)(k[0]),
            [y, S] = (0, s.useState)(252),
            [j, N] = (0, s.useState)(0),
            [C, M] = (0, s.useState)([]),
            [z, I] = (0, s.useState)([]),
            [R, E] = (0, s.useState)(!1),
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
            if (C.length < 1) return;
            S(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            N(t + a)
          }), [C]), (0, s.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              f(!1)
            }), t)
          }), [m, t]), (0, s.useEffect)((() => {
            v(c.map(((e, a) => (e => {
              let a = 0;
              const t = c.length;
              return 1 === t ? .5 * u - .5 * y - 2 * r + j : (0 === e && (a = r - e * y), e === t - 1 && t > 1 && (a = t * y * -1 + (u - (r - j))), e > 0 && e < t - 1 && (a = e * y * -1 + (.5 * u - .5 * y + .5 * j)), a)
            })(a)))), 1 === c.length ? E(!0) : E(!1)
          }), [_.current, c, u]), (0, s.useEffect)((() => {
            const e = (a = g, c.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            I(e)
          }), [c, g]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== l || w(k[0])
          }), [l, o, k]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "rockstargames-modules-core-headerb794a0e12537ad5fd506353133b9d60a",
              ref: _,
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
              children: (0, d.jsx)("div", {
                className: "rockstargames-modules-core-headerc1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": m,
                "data-single-item": R,
                style: {
                  transform: R ? null : `translateX(${x}px)`
                },
                children: c.map(((e, a) => (0, d.jsx)("div", {
                  className: "rockstargames-modules-core-headerdd4bcd955436c8a6982ee16756f7fd8b",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), z.length > 1 && !1 === o && (0, d.jsx)("div", {
              className: "rockstargames-modules-core-headere8e5249dac92a2bc76788d0fe7d7dfb7",
              children: z.map((e => (0, d.jsx)("div", {
                className: "rockstargames-modules-core-headerf64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        re = {
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
        ne = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: n,
            refCharacterListDesktop: c,
            menuPadding: l,
            longCharList: _,
            setLongCharList: u,
            isMobileMode: m,
            setIsMobileMode: f,
            location: g,
            onNavigate: b
          } = e;
          const {
            windowWidth: k,
            windowHeight: v
          } = (0, y.useWindowResize)(), w = (0, r.useIntl)(), {
            languageSelectorOpened: S,
            setLanguageSelectorOpened: j,
            activeSubNavId: N,
            setActiveSubNavId: C,
            subNavExtraHeight: M,
            setSubNavExtraHeight: z,
            navOpened: I,
            setScNavOpened: R
          } = P(), [E, L] = (0, s.useState)(""), {
            lsSettings: G
          } = (0, y.useRockstarWebLSSettings)(), {
            track: U
          } = (0, p.useGtmTrack)(), B = (0, y.useRockstarTokenPing)(), {
            data: D,
            loggedIn: $
          } = (0, p.useRockstarUser)(), {
            charactersNeeded: W,
            currentCharId: V,
            hasNotifications: F,
            navOpen: X,
            setCurrentCharId: Y,
            setHasNotifications: J,
            setSelectedCharacterTuple: Z,
            setUserData: Q
          } = (0, p.useRockstarUserState)(), [ee, ae] = (0, s.useState)(null), [ne, ie] = (0, s.useState)(null), [ce, oe] = (0, s.useState)(!1), [le, de] = (0, s.useState)(!1), [_e, ue] = (0, s.useState)(0), me = (0, s.createRef)(), fe = (0, H.ri)(me, !1), ge = (0, s.createRef)(), [be, pe] = (0, s.useState)(0), [he, ke] = (0, s.useState)([]), [ve, xe] = (0, s.useState)(244), we = (0, s.useRef)(null), ye = (0, s.useMemo)((() => (0, h.A)()), []), Se = (0, s.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage(o.sc_link_activity_feed),
            location: {
              domain: h.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...O,
              text: o.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(o.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(o.sc_link_settings),
              location: {
                domain: h.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...O,
                text: o.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(o.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...O,
                text: o.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(o.sc_link_messages),
              location: {
                domain: h.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...O,
                text: o.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(o.sc_link_game_activation),
              location: {
                domain: h.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...O,
                text: o.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(o.sc_link_notifications),
            location: {
              domain: h.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...O,
              text: o.sc_link_notifications.defaultMessage,
              location: {
                domain: h.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(o.sc_link_crews),
            location: {
              domain: h.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...O,
              text: o.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(o.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(o.sc_link_my_friends),
              location: {
                domain: h.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...O,
                text: o.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(o.sc_link_import_friends),
              location: {
                domain: h.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...O,
                text: o.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(o.sc_link_find_friends),
              location: {
                domain: h.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...O,
                text: o.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, A(e), {
            text: e.formatMessage(o.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...O,
              text: o.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(w, a, D, F, E, window)), [w, a, D, F, E, ye]), je = () => {
            de(l + ve * _e < fe)
          }, Ne = () => {
            if (ge.current) {
              const {
                current: e
              } = ge, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), pe(a + e)
              } else pe(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ye.currentSite?.site === h.C.socialClub && (e = encodeURIComponent("/")), L(e)
          }), [g]), (0, s.useEffect)((() => {
            ke(D.characters[W] ?? [])
          }), [D, W]), (0, s.useEffect)((() => {
            D && Q(D)
          }), [D]), (0, s.useEffect)((() => {
            const e = D?.characters.gtao;
            if (null !== $ && !e.length) return void Z(!1);
            if (null == V || !e.length) return;
            const a = e?.[V] ?? e?.[0] ?? null;
            Z(!!a?.platform && [a.platform, a.characterSlot])
          }), [V, D, $]), (0, s.useEffect)((() => {
            (async () => {
              if (!D?.id) return;
              const {
                count: e
              } = await (0, y.coreScApiFetch)("notification/count", {
                pingBearer: B
              });
              J(e > 0)
            })()
          }), [D]), (0, s.useEffect)((() => {
            je()
          }), [ve]), (0, s.useEffect)((() => {
            n(!0), f(k < 768), f(k < 768 || v < 649)
          }), [k, v]), (0, s.useEffect)((() => {
            let e = he.length - 1;
            e < 0 && (e = 0), ue(e);
            const a = he.length > 0 ? he[V] ?? he[0] : null;
            if (!a) return;
            const t = null !== a ? i(a.platform, "large") : null;
            ie(t), ae(a), he.length > 1 ? oe(!0) : oe(!1), u(he.length - 1 > 3)
          }), [V, he]), (0, s.useEffect)((() => {
            je()
          }), [_e, m, k, he]), (0, s.useEffect)((() => {
            Ne(), T()((() => {
              setTimeout(Ne, 0)
            }), 300)
          }), [k, v]), (0, s.useEffect)((() => {
            const e = G?.currentCharId ?? 0;
            e !== V && Y(Math.max(0, Math.min(e, he.length - 1)))
          }), [he, G]), (0, d.jsxs)(d.Fragment, {
            children: [null !== ee && "gtao" === W && (0, d.jsxs)("div", {
              className: re.scProfile,
              ref: we,
              tabIndex: -1,
              "aria-label": w.formatMessage(o.profile_selector_profile_card),
              children: [(0, d.jsx)(te, {
                s: re,
                character: ee,
                platformTag: ne
              }), !0 === ce && (0, d.jsxs)("div", {
                className: re.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: re.scCharacterSelectBtn,
                  "aria-hidden": !X,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    n(a), U({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, d.jsx)("span", {
                    children: (0, d.jsx)(r.FormattedMessage, {
                      ...o.profile_selector_switch_character
                    })
                  })
                }), !1 === m && (0, d.jsx)("div", {
                  className: re.scCharacterList,
                  "data-long-list": _,
                  "aria-hidden": t,
                  ref: c,
                  children: he.map((e => (0, d.jsx)(K, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: xe
                  }, e.mugshotUrl)))
                }), !0 === m && (0, d.jsx)("div", {
                  className: re.scCharacterList,
                  "data-single-item": 2 === he.length,
                  "data-swiper-disabled": le,
                  "aria-hidden": t,
                  ref: me,
                  children: (0, d.jsx)(se, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      U({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: le,
                    disableSwiper: le,
                    children: he.filter(((e, a) => a !== V)).map((e => (0, s.createElement)(K, {
                      characterData: e,
                      setMobileCardWidth: xe,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, d.jsxs)("nav", {
              className: re.nav,
              "aria-hidden": !X,
              children: [(0, d.jsx)("button", {
                className: re.navHeader,
                type: "button",
                "data-opened": I,
                "data-nav-opened": X,
                tabIndex: I ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), I || R(!0)
                },
                "data-testid": "playerButton",
                children: (0, d.jsx)("span", {
                  children: D.nickname
                })
              }), (0, d.jsx)("div", {
                className: re.navWrap,
                "data-opened": I,
                "data-logged-in": "true",
                ref: ge,
                style: {
                  "--navWrap-max-height": `${be+M}px`
                },
                children: Se.map(((e, a) => (0, s.createElement)(q, {
                  ...e,
                  id: a,
                  activeSubNavId: N,
                  setActiveSubNavId: C,
                  setSubNavExtraHeight: z,
                  onNavigate: b,
                  key: e.text
                })))
              })]
            }), (0, d.jsx)("div", {
              className: re.scLanguageSelector,
              style: {
                visibility: X ? null : "hidden"
              },
              children: (0, d.jsx)(x, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: S,
                setLanguageSelectorOpened: j,
                location: g
              })
            })]
          })
        },
        ie = {
          menu: "rockstargames-modules-core-headerc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-modules-core-headerc31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-modules-core-headerc5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-modules-core-headerb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-modules-core-headerff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-headerb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-modules-core-headereff8c1d4bf675accdb7d952aba0174dc"
        },
        ce = (0, r.withIntl)((e => {
          let {
            location: a,
            onNavigate: n
          } = e;
          const {
            windowHeight: i
          } = (0, y.useWindowResize)(), c = (0, r.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: _,
            setActiveSubNavId: u,
            navOpened: m,
            setScNavOpened: f,
            charListHidden: g,
            setCharListHidden: b
          } = P(), [h, k] = (0, s.useState)(!1), {
            navHidden: v = !1
          } = (0, y.useState)(), {
            loggedIn: x
          } = (0, p.useRockstarUser)(), {
            currentCharId: S,
            navOpen: j,
            setNavOpen: N,
            userData: C
          } = (0, p.useRockstarUserState)(), {
            track: M
          } = (0, p.useGtmTrack)(), [z, I] = (0, s.useState)(!1), R = (0, y.useReactiveVar)(p.scConfig), E = (0, s.useRef)(), [L, G] = (0, s.useState)(0), T = (0, s.createRef)(), [O, A] = (0, s.useState)(!1), [U, B] = (0, s.useState)(0), [q, H] = (0, s.useState)(!1), {
            mutateLSSettings: $,
            lsSettings: W
          } = (0, y.useRockstarWebLSSettings)(), V = (0, s.useCallback)((e => {
            b(e), E.current && !0 === e && (E.current.scrollTop = 0)
          }), [E]);
          return (0, s.useEffect)((() => {
            null !== S && W.currentCharId !== S && $({
              key: "currentCharId",
              value: S
            }), !1 === x ? $({
              key: "currentCharId",
              value: null
            }) : x && !C && M({
              event: "account_synced"
            })
          }), [S, x]), (0, s.useEffect)((() => {
            E.current && (!1 === g && !1 === z && (E.current.style.height = `${E.current.scrollHeight}px`), !0 === g && (E.current.style.height = null))
          }), [g, E, z]), (0, s.useEffect)((() => {
            const e = () => {
                N(!1), V(!0)
              },
              a = a => {
                const t = T?.current && a?.composedPath().includes(T.current);
                j && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [T]), (0, s.useEffect)((() => {
            N(!1), V(!0)
          }), [v]), (0, s.useEffect)((() => {
            if (T.current) {
              const {
                current: e
              } = T, a = window.getComputedStyle(e);
              G(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [T]), (0, s.useEffect)((() => {
            H(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            T.current && k(T?.current?.scrollHeight >= i)
          }), [T, i]), (0, s.useEffect)((() => {
            j || (u(-1), _(!1))
          }), [j]), (0, s.useEffect)((() => {
            l && (g || V(!0), m && (f(!1), u(-1)))
          }), [l]), (0, s.useEffect)((() => {
            m && (l && _(!1), g || V(!0))
          }), [m]), null === x ? null : (0, d.jsxs)(w.RemoveScroll, {
            enabled: !!j,
            removeScrollBar: !1,
            children: [(0, d.jsxs)("div", {
              className: [ie.menu, j ? ie.navOpen : ""].join(" "),
              "data-logged-in": x,
              "data-mac-browser": q,
              "data-scroll-mode": h,
              ref: T,
              "aria-hidden": !j,
              children: [(0, d.jsx)("button", {
                className: ie.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  B(a)
                },
                onTouchMove: e => {
                  if (0 === U) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(U - a) > 1 && (B(0), N(!1))
                },
                children: (0, d.jsx)("img", {
                  className: ie.dragHandle,
                  src: t(5902),
                  alt: c.formatMessage(o.sc_menu_drag_handle)
                })
              }), x ? (0, d.jsx)(ne, {
                sc: R,
                charListHidden: g,
                hideCharacterList: V,
                refCharacterListDesktop: E,
                menuPadding: L,
                longCharList: z,
                setLongCharList: I,
                isMobileMode: O,
                setIsMobileMode: A,
                location: a,
                onNavigate: n
              }) : (0, d.jsx)(D, {
                sc: R,
                navOpen: j,
                location: a,
                onNavigate: n
              })]
            }), (0, d.jsx)("div", {
              className: [ie.scOverlay, j ? ie.navOpen : ""].join(" "),
              "data-logged-in": x
            })]
          })
        }), n),
        oe = t(5931),
        le = t(2810),
        de = (0, r.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, r.useIntl)(),
            {
              data: n
            } = (0, p.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: l,
              navOpen: _,
              setNavOpen: u
            } = (0, p.useRockstarUserState)(),
            {
              track: m
            } = (0, p.useGtmTrack)(),
            [f, g] = (0, s.useState)(null),
            [b, h] = (0, s.useState)(!1),
            [k, v] = (0, s.useState)(null),
            [x, w] = (0, s.useState)(!1),
            [y, S] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            S(n.characters[c] ?? [])
          }), [n, c]);
          const j = (0, s.useCallback)((e => {
            e.stopPropagation(), u(!_), 1 == !_ && a(null), m({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: _ ? "close" : "open"
            })
          }), [_]);
          return (0, s.useEffect)((() => {
            const e = n?.id ?? !1,
              a = e ? (y?.[l]?.mugshotUrl ?? n?.avatar) || oe : le,
              t = i(y?.[l]?.platform, "small") ?? null;
            v(t), g(a), h(e), w(!!y?.[l]?.mugshotUrl)
          }), [n, y, l, oe, le]), f ? (0, d.jsxs)("button", {
            className: "rockstargames-modules-core-headeree811a1fa8b17eb47afb419dd08ffb03",
            "data-img-set": x,
            "aria-label": t.formatMessage(_ ? o.sc_menu_close : o.sc_menu_open),
            "aria-expanded": _,
            type: "button",
            onClick: j,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(b),
            children: [(0, d.jsx)("img", {
              className: "rockstargames-modules-core-headera917b58ca28b68550a1aa5d99c7eb998",
              src: f || "",
              onError: () => {
                g(oe)
              },
              alt: n?.nickname || ""
            }), b && null !== k && (0, d.jsx)("img", {
              className: "rockstargames-modules-core-headerc06123ceae7ca4759ec8b1a5197823db",
              src: k.src,
              alt: k.alt
            }), b && (0, d.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-headerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": y?.[l]?.platform ?? null
            })]
          }) : null
        }), n),
        _e = {
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
        ue = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: n,
            menuPadding: c,
            longCharList: l,
            setLongCharList: _,
            isMobileMode: u
          } = e;
          const m = (0, r.useIntl)(),
            {
              windowWidth: f
            } = (0, y.useWindowResize)(),
            {
              track: g
            } = (0, p.useGtmTrack)(),
            {
              charactersNeeded: b,
              currentCharId: h,
              navOpen: k,
              setCurrentCharId: v,
              setSelectedCharacterTuple: x,
              setUserData: w,
              setCharacterAvatar: S,
              setCharacterPlatform: j
            } = (0, p.useRockstarUserState)(),
            [N, C] = (0, s.useState)(null),
            [M, z] = (0, s.useState)([]),
            [I, R] = (0, s.useState)(!1),
            [E, L] = (0, s.useState)(0),
            [P, G] = (0, s.useState)(244),
            [T, O] = (0, s.useState)(!1),
            [A, U] = (0, s.useState)(null),
            B = (0, s.useRef)(null),
            q = (0, s.createRef)(),
            D = (0, H.ri)(q, !1),
            {
              lsSettings: $
            } = (0, y.useRockstarWebLSSettings)(),
            {
              data: W,
              loggedIn: V
            } = (0, p.useRockstarUser)({
              fetchCharacters: !0
            }),
            F = () => {
              O(c + P * E < D)
            };
          return (0, s.useEffect)((() => {
            F()
          }), [P]), (0, s.useEffect)((() => {
            F()
          }), [E, u, f, M]), (0, s.useEffect)((() => {
            z(W.characters?.[b] ?? [])
          }), [W, b]), (0, s.useEffect)((() => {
            W && w(W)
          }), [W]), (0, s.useEffect)((() => {
            const e = W?.characters?.gtao;
            if (null !== V && !e?.length) return void x(!1);
            if (null == h || !e?.length) return;
            const a = e?.[h] ?? e?.[0] ?? null;
            x(!!a?.platform && [a.platform, a.characterSlot])
          }), [h, W, V]), (0, s.useEffect)((() => {
            let e = M.length - 1;
            e < 0 && (e = 0), L(e);
            const a = M.length > 0 ? M[h] ?? M[0] : null;
            if (!a) return;
            const t = null !== a ? i(a.platform, "large") : null;
            return U(t), C(a), S(a.mugshotUrl), j(a.platform), M.length > 1 ? R(!0) : R(!1), _(M.length - 1 > 3), () => {
              S(""), j("")
            }
          }), [h, M]), (0, s.useEffect)((() => {
            const e = $?.currentCharId ?? 0;
            e !== h && v(Math.max(0, Math.min(e, M.length - 1)))
          }), [M, $]), N && "gtao" === b ? (0, d.jsxs)("div", {
            className: _e.profile,
            ref: B,
            tabIndex: -1,
            "aria-label": m.formatMessage(o.profile_selector_profile_card),
            children: [(0, d.jsx)(te, {
              s: _e,
              character: N,
              platformTag: A
            }), !0 === I && (0, d.jsxs)("div", {
              className: _e.scCharacterSelector,
              children: [(0, d.jsx)("button", {
                className: _e.scCharacterSelectBtn,
                "aria-hidden": !k,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !a;
                  t(s), g({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, d.jsx)("span", {
                  children: (0, d.jsx)(r.FormattedMessage, {
                    ...o.profile_selector_switch_character
                  })
                })
              }), !1 === u && (0, d.jsx)("div", {
                className: _e.scCharacterList,
                "data-long-list": l,
                "aria-hidden": a,
                ref: n,
                children: M.map((e => (0, d.jsx)(K, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: G
                }, e.mugshotUrl)))
              }), !0 === u && (0, d.jsx)("div", {
                className: _e.scCharacterList,
                "data-single-item": 2 === M.length,
                "data-swiper-disabled": T,
                "aria-hidden": a,
                ref: q,
                children: (0, d.jsx)(se, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    g({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: T,
                  disableSwiper: T,
                  children: M.filter(((e, a) => a !== h)).map((e => (0, s.createElement)(K, {
                    characterData: e,
                    setMobileCardWidth: G,
                    key: e.mugshotUrl,
                    tabIndex: a ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }
    },
    5902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    2810: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    5931: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    702: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    7166: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    2124: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    1070: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    3777: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    2864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    348: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    2541: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    7024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    4963: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    5917: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    9697: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    6563: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    8662: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);