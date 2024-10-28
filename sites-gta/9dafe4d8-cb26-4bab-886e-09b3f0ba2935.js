! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "9dafe4d8-cb26-4bab-886e-09b3f0ba2935", e._sentryDebugIdIdentifier = "sentry-dbid-9dafe4d8-cb26-4bab-886e-09b3f0ba2935")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [325], {
    6516: (e, s, i) => {
      "use strict";
      var t = i(1403),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function _(e, s, i) {
        var t, n = {},
          _ = null,
          l = null;
        for (t in void 0 !== i && (_ = "" + i), void 0 !== s.key && (_ = "" + s.key), void 0 !== s.ref && (l = s.ref), s) r.call(s, t) && !c.hasOwnProperty(t) && (n[t] = s[t]);
        if (e && e.defaultProps)
          for (t in s = e.defaultProps) void 0 === n[t] && (n[t] = s[t]);
        return {
          $$typeof: a,
          type: e,
          key: _,
          ref: l,
          props: n,
          _owner: o.current
        }
      }
      s.Fragment = n, s.jsx = _, s.jsxs = _
    },
    6632: (e, s, i) => {
      "use strict";
      e.exports = i(6516)
    },
    6817: (e, s, i) => {
      "use strict";
      i.r(s), i.d(s, {
        default: () => W
      });
      var t = i(1403),
        a = i(6040),
        n = i(4781),
        r = i(8281),
        o = i(3134),
        c = i(6524),
        _ = i(2756),
        l = i(207),
        d = i(5190);
      var m = i(6632);
      const u = e => {
        let {
          children: s,
          showModal: i = !1,
          dialogRef: n,
          onClose: r = (() => {})
        } = e;
        return (0, t.useEffect)((() => {
          i && n.current && (n.current.showModal(), setTimeout((() => {
            a.gsap.set(window, {
              scrollTo: 0
            })
          }), 300))
        }), [i]), (0, m.jsxs)("dialog", {
          ref: n,
          className: "rockstargames-sites-gtaf9e43e4fb6047fea4c181b2685e6a31f",
          onClick: e => (e => {
            e.currentTarget && (e.currentTarget.close(), r(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation())
          })(e),
          children: [(0, m.jsx)("button", {
            className: "rockstargames-sites-gtaf32ab0b8f2b383c67fa243b02bf04344",
            onClick: () => (n.current?.close(), void r()),
            type: "button",
            value: "cancel",
            "aria-label": "close",
            children: (0, m.jsx)("div", {
              className: "rockstargames-sites-gtacd8d83408c5caf82b34b82ba9d5815bc"
            })
          }), (0, m.jsx)("div", {
            className: "rockstargames-sites-gtad2f4f5cebf82138c2ba6b42325a7d718",
            children: s
          })]
        })
      };
      var g = i(5186);
      const f = e => {
          let {
            alt: s = "",
            className: i = "",
            clipRule: t = "evenodd",
            fill: a = "white",
            fillRule: n = "evenodd"
          } = e;
          return (0, m.jsxs)("svg", {
            className: i,
            fill: a,
            version: "1.1",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, m.jsx)("title", {
              children: s
            }), (0, m.jsx)("path", {
              fillRule: n,
              clipRule: t,
              d: "M4.52081 2.12229C4.84189 1.947 5.23305 1.96101 5.54076 2.15882L19.5408 11.1588C19.827 11.3428 20 11.6597 20 12C20 12.3403 19.827 12.6572 19.5408 12.8412L5.54076 21.8412C5.23305 22.039 4.84189 22.053 4.52081 21.8777C4.19974 21.7024 4 21.3658 4 21V3C4 2.63419 4.19974 2.29758 4.52081 2.12229Z"
            })]
          })
        },
        p = {
          pillBtn: "rockstargames-sites-gtaa3256dd861609a52e1b54835f22e0578",
          selected: "rockstargames-sites-gtac4ae2f823c44540aa5db5e0b06d1e2c5",
          infoSection: "rockstargames-sites-gtac1c30faa6c9f49b7ceee4caf32fd9b45",
          logo: "rockstargames-sites-gtaca8f6a169617af3fc7b90e396b382b80",
          content: "rockstargames-sites-gtafa96ee91cc2f2721933253834876a0af",
          text: "rockstargames-sites-gtaf9ec79fe3eae9c71837a40b17f88b98b",
          header: "rockstargames-sites-gtabc7ad0da65fb8d5933bd29feb81efbcd",
          blurb: "rockstargames-sites-gtace0ecd491f888f26193d7958cd292b57",
          button: "rockstargames-sites-gtaa79e91c631e549f3af7e691c87aa42a2",
          buttonIcon: "rockstargames-sites-gtaac8072b64972c11ee294ad2a351c3667",
          platforms: "rockstargames-sites-gtafec2f360e23ebef8b2ca689e3c2dc5c5"
        };
      a.gsap.registerPlugin(n.u, o.I);
      const k = (0, t.forwardRef)(((e, s) => {
        let {
          blurb: t,
          buttonText: a,
          className: n = "",
          image: r = "logo_secondary_color.png",
          header: o
        } = e;
        const {
          setIsModalOpen: c
        } = (0, g.I2)(), {
          track: _
        } = (0, l.useGtmTrack)();
        return (0, m.jsxs)("div", {
          className: [p.infoSection, n || ""].join(" "),
          ref: s,
          children: [(0, m.jsx)("img", {
            className: p.logo,
            src: i(9877)(`./${r}`),
            alt: ""
          }), (0, m.jsxs)("div", {
            className: p.content,
            children: [(0, m.jsxs)("div", {
              className: p.text,
              children: [(0, m.jsx)("h1", {
                className: p.header,
                children: o
              }), (0, m.jsx)("div", {
                className: p.blurb,
                dangerouslySetInnerHTML: {
                  __html: (d = t, d.split(/\r\n|\r|\n/).reduce(((e, s) => {
                    let i = e;
                    return s.trim().length && (i += `<p>${s}</p>`), i
                  })))
                }
              })]
            }), (0, m.jsxs)("button", {
              type: "button",
              className: p.button,
              onClick: () => {
                _({
                  event: "video_play",
                  element_placement: "landing_page_description",
                  video_id: "promo_video",
                  video_title: "promo_video"
                }), c(!0)
              },
              children: [(0, m.jsx)(f, {
                className: p.buttonIcon
              }), a]
            })]
          })]
        });
        var d
      }));
      k.displayName = "InfoSection";
      const b = k;
      var v = i(6717);
      const h = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"Okay","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_error_generic_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscríbete","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Comprueba tu correo","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmer votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","pl_card_badge_content_complete":"Completa","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認する","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter na Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать мою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        y = (0, v.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var w = i(9779);
      const x = "rockstargames-sites-gtaff481c537a56a6fcdb1be85dfbc8944e",
        z = (0, v.withIntl)((e => {
          let {
            children: s,
            to: i = "#",
            alt: a = "",
            autoBlank: n = !1,
            onClick: r = (() => {}),
            focused: o = !1,
            ...c
          } = e;
          const _ = (0, t.useRef)(null),
            l = (0, v.useIntl)(),
            d = !/^(https?|mailto):/i.test(i),
            u = /^#/.test(i),
            g = c?.target ?? (n ? "_blank" : "_self");
          let {
            ...f
          } = c, p = "";
          if ("aria-label" in f && f["aria-label"] && (p = "_blank" === g ? `${f["aria-label"]} ${l.formatMessage(y.aria_label_open_new_window)}` : f["aria-label"]), (0, t.useEffect)((() => {
              o && _?.current && _.current.focus()
            }), [_?.current, o]), u) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${i.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), r && r(e)
            };
            return (0, m.jsxs)("a", {
              title: a,
              href: i,
              onClick: e,
              ...f,
              "aria-label": p,
              ref: _,
              children: [s, "_blank" === g && !p && (0, m.jsx)("span", {
                className: x,
                children: l.formatMessage(y.aria_label_open_new_window)
              })]
            })
          }
          if (d) return (0, m.jsxs)(w.NavLink, {
            title: a,
            to: i,
            onClick: r,
            ...f,
            "aria-label": p,
            ref: _,
            children: [s, "_blank" === g && !p && (0, m.jsx)("span", {
              className: x,
              children: l.formatMessage(y.aria_label_open_new_window)
            })]
          });
          const k = Object.keys(f).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, s) => ({
            ...e,
            [s]: c[s]
          })), {});
          return "function" == typeof k?.className && delete k.className, (0, m.jsxs)("a", {
            href: i,
            title: a,
            onClick: r,
            target: g,
            ...k,
            "aria-label": p,
            ref: _,
            children: [s, "_blank" === g && !p && (0, m.jsx)("span", {
              className: x,
              children: l.formatMessage(y.aria_label_open_new_window)
            })]
          })
        }), h);
      var j = i(8407),
        N = (Object.defineProperty, new Map),
        R = new WeakMap,
        S = 0;

      function C(e, s, i = {}, t = undefined) {
        if (void 0 === window.IntersectionObserver && void 0 !== t) {
          const a = e.getBoundingClientRect();
          return s(t, {
            isIntersecting: t,
            target: e,
            intersectionRatio: "number" == typeof i.threshold ? i.threshold : 0,
            time: 0,
            boundingClientRect: a,
            intersectionRect: a,
            rootBounds: a
          }), () => {}
        }
        const {
          id: a,
          observer: n,
          elements: r
        } = function(e) {
          const s = function(e) {
            return Object.keys(e).sort().filter((s => void 0 !== e[s])).map((s => {
              return `${s}_${"root"===s?(i=e.root,i?(R.has(i)||(S+=1,R.set(i,S.toString())),R.get(i)):"0"):e[s]}`;
              var i
            })).toString()
          }(e);
          let i = N.get(s);
          if (!i) {
            const t = new Map;
            let a;
            const n = new IntersectionObserver((s => {
              s.forEach((s => {
                var i;
                const n = s.isIntersecting && a.some((e => s.intersectionRatio >= e));
                e.trackVisibility && void 0 === s.isVisible && (s.isVisible = n), null == (i = t.get(s.target)) || i.forEach((e => {
                  e(n, s)
                }))
              }))
            }), e);
            a = n.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
              id: s,
              observer: n,
              elements: t
            }, N.set(s, i)
          }
          return i
        }(i), o = r.get(e) || [];
        return r.has(e) || r.set(e, o), o.push(s), n.observe(e),
          function() {
            o.splice(o.indexOf(s), 1), 0 === o.length && (r.delete(e), n.unobserve(e)), 0 === r.size && (n.disconnect(), N.delete(a))
          }
      }
      t.Component;
      class P extends t.Component {
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
          return this?.state?.error?.message ? (0, m.jsxs)("div", {
            className: "rockstargames-sites-gtaf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, m.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, m.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const M = {
          rating: "rockstargames-sites-gtaa1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-gtacba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-gtaff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-gtad47cd2b7c7415cb44cddef00b1c9b35f"
        },
        E = (0, v.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var A = i(5913);
      const I = void 0 !== A.GameData ? A.GameData : GameDataDefault;
      (0, _.importAll)(i(4905));
      const G = function(e) {
        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(i) {
          return (0, m.jsx)(P, {
            header: s,
            children: (0, m.jsx)(e, {
              ...i
            })
          })
        }
      }((0, v.withIntl)((e => {
        let {
          descriptors: s = null,
          footer: a = null,
          href: n,
          img: r = null,
          titleSlug: o = null,
          style: c = {},
          className: d
        } = e;
        const [u, g] = (0, t.useState)(!1), {
          inView: f
        } = function({
          threshold: e,
          delay: s,
          trackVisibility: i,
          rootMargin: a,
          root: n,
          triggerOnce: r,
          skip: o,
          initialInView: c,
          fallbackInView: _,
          onChange: l
        } = {}) {
          var d;
          const [m, u] = t.useState(null), g = t.useRef(), [f, p] = t.useState({
            inView: !!c,
            entry: void 0
          });
          g.current = l, t.useEffect((() => {
            if (o || !m) return;
            let t;
            return t = C(m, ((e, s) => {
              p({
                inView: e,
                entry: s
              }), g.current && g.current(e, s), s.isIntersecting && r && t && (t(), t = void 0)
            }), {
              root: n,
              rootMargin: a,
              threshold: e,
              trackVisibility: i,
              delay: s
            }, _), () => {
              t && t()
            }
          }), [Array.isArray(e) ? e.toString() : e, m, n, a, r, o, i, _, s]);
          const k = null == (d = f.entry) ? void 0 : d.target,
            b = t.useRef();
          m || !k || r || o || b.current === k || (b.current = k, p({
            inView: !!c,
            entry: void 0
          }));
          const v = [u, f.inView, f.entry];
          return v.ref = v[0], v.inView = v[1], v.entry = v[2], v
        }({
          threshold: .6
        }), [p, k] = (0, t.useState)({
          ratingDescriptors: s,
          ratingFooter: a,
          ratingImg: r,
          ratingUrl: n
        }), {
          track: b
        } = (0, l.useGtmTrack)(), h = (0, v.useIntl)(), {
          data: y
        } = (0, j.useQuery)(I, {
          variables: {
            titleSlug: o
          },
          skip: !o
        });
        if ((0, t.useEffect)((() => {
            y && k(y?.game)
          }), [y]), (0, t.useEffect)((() => {
            f && !u && p.img_rating && (b({
              event: "page_section_impression",
              element_placement: "rating"
            }), g(!0))
          }), [f]), !p.ratingImg) return null;
        const w = !!p.ratingDescriptors;
        return (0, m.jsxs)("div", {
          className: [M.rating, w ? M.withDescriptors : M.withOutDescriptors, d || ""].join(" "),
          style: (0, _.safeStyles)(c),
          children: [(0, m.jsx)(z, {
            to: p.ratingUrl,
            target: "_blank",
            children: (0, m.jsx)("img", {
              alt: h.formatMessage(E.components_ratings_link_alt, {
                rating: (x = p.ratingImg, x.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: i(3983)(`./${p.ratingImg}`)
            })
          }), w && (0, m.jsxs)("div", {
            className: M.text,
            children: [(0, m.jsx)("p", {
              className: M.descriptors,
              dangerouslySetInnerHTML: {
                __html: p?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), p.ratingFooter && (0, m.jsx)("hr", {}), p.ratingFooter && (0, m.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: p.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var x
      }), h));
      var T = i(9395);
      const q = {
          pillBtn: "rockstargames-sites-gtaf13b9179a06214eff961cc6b79e9221c",
          selected: "rockstargames-sites-gtac6d9bc8d82f9ddcc6494b70d979b4a60",
          infoSectionFooter: "rockstargames-sites-gtaa6534d16de3de0cad30f0cc18bef18ce",
          logo: "rockstargames-sites-gtad5e76dfe433e84eeb3f450cdb02d64f8",
          platforms: "rockstargames-sites-gtaa5a6a6858bae074d7a93de089b73cd2a",
          rating: "rockstargames-sites-gtaff1b0cadd8996e1e7c9529fe7ada9ec0",
          withoutBorder: "rockstargames-sites-gtaa747edf520af07704d6be4f93c40e226"
        },
        V = {
          rating_img: "pegi_rp.png",
          rating_link: "https://pegi.info/"
        },
        D = {
          rating_img: "esrb_rp.svg",
          rating_link: "https://www.esrb.org/"
        },
        O = (0, v.createDevLocaleHook)({
          br: {
            rating_img: "vaci_rp.png",
            rating_link: "https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
          },
          de: {
            rating_img: "usk_rp.svg",
            rating_link: "http://www.usk.de"
          },
          es: V,
          fr: V,
          hans: D,
          it: V,
          jp: {
            rating_img: "cero_rp.png",
            rating_link: "https://www.cero.gr.jp/"
          },
          kr: D,
          mx: D,
          pl: V,
          ru: D,
          tw: D,
          us: D
        }),
        F = (0, t.forwardRef)(((e, s) => {
          let {
            className: t = "",
            titleSlug: a = "",
            platforms: n = [{
              name: "PlayStation 5",
              url: "playstation.svg"
            }, {
              name: "Xbox Series X|S",
              url: "xbox.svg"
            }]
          } = e;
          const r = (0, v.useIntl)(),
            o = O(),
            c = "esrb_rp.svg" === o.rating_img ? "<p>May contain content inappropriate for children.</p>" : void 0,
            _ = "esrb_rp.svg" === o.rating_img ? '<p>Visit <a href="https://esrb.org" target="_blank">esrb.org</a> for rating information.</p>' : void 0;
          return (0, m.jsxs)("div", {
            className: [q.infoSectionFooter, t || ""].join(" "),
            ref: s,
            children: [(0, m.jsx)("div", {
              className: q.rating,
              children: (0, m.jsx)(G, {
                className: [q.mobileRating, q.rating, q.withoutBorder].join(" "),
                titleSlug: a || null,
                img: o.rating_img,
                descriptors: c,
                href: o.rating_link,
                footer: _
              })
            }), n.length && (0, m.jsx)("div", {
              className: [q.platforms, q.hideOnMobile].join(" "),
              children: n.map((e => {
                let {
                  name: s,
                  url: t
                } = e;
                return (0, m.jsx)("img", {
                  src: i(9877)(`./${t}`),
                  alt: s
                }, t)
              }))
            }), (0, m.jsx)(z, {
              to: "/",
              "aria-label": r.formatMessage(T.A.home_text),
              children: (0, m.jsx)("img", {
                className: [q.logo, q.hideOnMobile].join(" "),
                src: i(1677),
                alt: r.formatMessage(T.A.rockstar_games_logo_alt_text)
              })
            })]
          })
        }));
      F.displayName = "InfoSectionFooter";
      const L = F;
      var $ = i(336);
      const B = {
        pillBtn: "rockstargames-sites-gtac338d0e08e9400269820b3c4a45b5525",
        selected: "rockstargames-sites-gtaced4661d63665e45336e2e2187753209",
        destinationPage: "rockstargames-sites-gtabc6ca598d5a617f9d5de3b64fe313f03",
        footerContainer: "rockstargames-sites-gtaf1c7372665fda23e3ab90506aa5d0020",
        destinationContainer: "rockstargames-sites-gtaa3e59fbf2597d85b4fd294987f069625",
        active: "rockstargames-sites-gtacca34a9fd64948f177503882c7e50aae",
        hero: "rockstargames-sites-gtacccdbd1e2d26d8f97046287bbf957bee",
        infoSectionContainer: "rockstargames-sites-gtae57de03b5c8c667b1771e43a0c067a9a",
        videoDialog: "rockstargames-sites-gtaf00e2cd130e8bce484a2813d0993e2ca",
        videoDialogContent: "rockstargames-sites-gtae4a0e6055c593cb409ff99ac4d435967"
      };
      a.gsap.registerPlugin(n.u, r.R, o.I);
      const U = () => {
          const {
            timelines: e,
            setIsStandalone: s,
            isVideoPlayerActive: i,
            createYouTubePlayer: o,
            dialogPlayerRef: f,
            isModalOpen: p,
            setIsModalOpen: k,
            setIsVideoPlayerActive: v,
            resetVideo: h
          } = (0, g.I2)(), {
            setStandalone: y
          } = (0, _.useRockstarLocalState)(), w = (0, t.useRef)(), x = (0, t.useRef)(null), z = (0, t.useRef)(null), j = (0, t.useRef)(null), N = (0, t.useRef)(null), R = (0, t.useRef)(null), S = (0, t.useRef)(null), C = (0, t.useRef)(null), P = (0, t.useRef)(i), M = (0, t.useRef)(null), {
            loading: E,
            translation: A
          } = (0, g.c3)(), {
            track: I
          } = (0, l.useGtmTrack)();
          (0, t.useEffect)((() => {
            a.gsap.set(window, {
              scrollTo: 0
            })
          }), []);
          const G = e => {
            const s = e.relatedTarget;
            x.current && (z?.current?.heroUIRef?.current.contains(s) ? a.gsap.set(window, {
              scrollTo: 0
            }) : x.current.contains(s) && a.gsap.set(window, {
              scrollTo: s
            }))
          };
          return (0, t.useEffect)((() => (s(!0), y(!0), window.document.body.style.overflowY = "hidden", window.document.addEventListener("focusout", G), () => {
            window.document.body.style.overflowY = "unset", window.document.removeEventListener("focusout", G), y(!1)
          })), []), (0, t.useEffect)((() => {
            P.current = i, w.current && w.current.paused(i)
          }), [i]), (0, t.useEffect)((() => (R.current && (w.current = r.R.create({
            content: R.current,
            smooth: .5,
            normalizeScroll: !0
          }), w.current.paused(!0)), () => {
            w.current?.kill()
          })), [R.current]), (0, t.useLayoutEffect)((() => {
            const s = a.gsap.matchMedia();
            e?.introTimeline && s.add({
              isVerticalLayout: "(max-width: 1279px)",
              isHorizontalLayout: "(min-width: 1280px)"
            }, (s => (e.introTimeline.eventCallback("onComplete", (() => {
              w.current && w.current.paused(!1);
              const e = z?.current?.heroUIRef?.current,
                s = z?.current?.heroImagesRefs?.current?.heroImagesRef?.current,
                i = n.u.isTouch ? .75 : 100,
                t = n.u.isTouch ? a.Expo.easeInOut : "none";
              C.current && C.current.progress(0).kill(), C.current = a.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: i,
                  force3D: !0
                },
                scrollTrigger: {
                  trigger: x.current,
                  toggleActions: "play none none reverse",
                  toggleClass: `${B.active}`,
                  pin: !0,
                  start: n.u.isTouch ? "top +=-1" : "top top",
                  end: n.u.isTouch ? "+=50" : "+=300",
                  scrub: !n.u.isTouch && .5,
                  invalidateOnRefresh: !0,
                  snap: !n.u.isTouch && {
                    snapTo: 1,
                    duration: {
                      min: .05,
                      max: .3
                    },
                    ease: a.Power3.easeIn
                  },
                  onLeaveBack: () => {
                    a.gsap.set(S?.current, {
                      display: "none"
                    })
                  },
                  onToggle: e => {
                    w.current && (a.gsap.set(S?.current, {
                      display: e.isActive ? "none" : "block"
                    }), -1 !== e.direction && (P.current || (w.current.paused(!0), setTimeout((() => {
                      P.current || w?.current?.paused(!1)
                    }), 500))))
                  }
                },
                onComplete: () => {
                  1 === n.u.isTouch && a.gsap.set(S?.current, {
                    display: "block"
                  })
                },
                onReverseComplete: () => {
                  1 === n.u.isTouch && a.gsap.set(S?.current, {
                    display: "none"
                  })
                }
              }).set(x.current, {
                height: () => N?.current?.clientHeight,
                maxHeight: () => N?.current?.clientHeight
              }).fromTo(e, {
                opacity: 1
              }, {
                opacity: 0,
                duration: n.u.isTouch ? .4 * i : .2 * i,
                ease: n.u.isTouch ? a.Sine.easeInOut : "sine.easeInOut",
                immediateRender: !1
              }).fromTo(z?.current?.heroRef?.current, {
                backgroundSize: () => 10 * window.innerWidth + "px",
                maskSize: () => 10 * window.innerWidth + "px",
                backgroundPosition: () => n.u.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`,
                maskPosition: () => n.u.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`
              }, {
                backgroundSize: () => j?.current?.children[0].clientWidth || j?.current?.children[0].scrollWidth || 0,
                maskSize: () => j?.current?.children[0].clientWidth || j?.current?.children[0].scrollWidth || 0,
                backgroundPosition: () => {
                  const e = j?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                maskPosition: () => {
                  const e = j?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                ease: n.u.isTouch ? t : "power2.easeInOut"
              }, "<").to(s, {
                "--hero-image-width": n.u.isTouch ? "110%" : "105%",
                "--hero-image-height": n.u.isTouch ? "110%" : "105%",
                "--hero-image-offset-bottom": n.u.isTouch ? "110%" : "105%",
                ease: n.u.isTouch ? t : "none"
              }, "<").to(s, {
                opacity: 0,
                duration: .2 * i,
                ease: "power2.easeInOut"
              }, "<85%").fromTo(j.current, {
                opacity: 0,
                pointerEvents: "none"
              }, {
                opacity: 1,
                pointerEvents: "auto",
                duration: .2 * i,
                ease: n.u.isTouch ? a.Power1.easeInOut : "power1.easeInOut"
              }, "<20%")
            }), []), () => {})))
          }), [i, e?.introTimeline, x?.current, z?.current?.heroRef?.current, z?.current?.heroUIRef?.current, z?.current?.heroImagesRef?.current, j?.current, S?.current]), (0, t.useEffect)((() => {
            p && f.current && o({
              target: f,
              id: "dialog"
            })
          }), [f, p]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)(u, {
              showModal: p,
              onClose: () => (k(!1), v(!1), h(), void I({
                event: "takeover_close",
                element_placement: "info_section"
              })),
              dialogRef: M,
              children: p && (0, m.jsx)("div", {
                className: B.videoDialog,
                children: (0, m.jsx)("div", {
                  className: B.videoDialogContent,
                  ref: f
                })
              })
            }), (0, m.jsxs)("div", {
              className: B.destinationPage,
              ref: R,
              children: [(0, m.jsxs)("div", {
                className: B.destinationContainer,
                ref: x,
                children: [(0, m.jsx)(d.A, {
                  ref: z,
                  className: B.hero,
                  standalone: !0
                }), (0, m.jsx)("div", {
                  ref: N,
                  className: B.infoSectionContainer,
                  children: (0, m.jsx)(b, {
                    blurb: E ? "" : A("d2.destDescription"),
                    buttonText: E ? "" : A("d2.playbackCTA"),
                    header: E ? "" : A("d2.destHeadline"),
                    className: B.infoSection,
                    ref: j
                  })
                })]
              }), (0, m.jsx)($.A, {
                showCloseButton: !0
              }), (0, m.jsxs)("div", {
                ref: S,
                className: B.footerContainer,
                children: [(0, m.jsx)(L, {
                  platforms: [{
                    name: "PlayStation 5",
                    url: "playstation.svg"
                  }, {
                    name: "Xbox Series X|S",
                    url: "xbox.svg"
                  }]
                }), (0, m.jsx)(c.FooterNav, {})]
              })]
            })]
          })
        },
        W = () => (0, m.jsx)(g.Yd, {
          children: (0, m.jsx)("span", {
            children: (0, m.jsx)(U, {})
          })
        })
    },
    5913: e => {
      var s = {
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
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
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

      function i(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && s.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, s)
        }))
      }
      s.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function a(e, s) {
        for (var i = 0; i < e.definitions.length; i++) {
          var t = e.definitions[i];
          if (t.name && t.name.value == s) return t
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          i(e, s), t[e.name.value] = s
        }
      })), e.exports = s, e.exports.GameData = function(e, s) {
        var i = {
          kind: e.kind,
          definitions: [a(e, s)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = t[s] || new Set,
          r = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(s) {
          var t = a(e, s);
          t && i.definitions.push(t)
        })), i
      }(s, "GameData")
    },
    4905: (e, s, i) => {
      var t = {
        "./cero_a.png": 1229,
        "./cero_b.svg": 7073,
        "./cero_c.svg": 1536,
        "./cero_d.svg": 1071,
        "./cero_rp.png": 2628,
        "./cero_z.svg": 393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 3953,
        "./djctq_14.svg": 6623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 9835,
        "./djctq_er.svg": 7173,
        "./djctq_l.svg": 1524,
        "./esrb_ao.svg": 5521,
        "./esrb_e.svg": 8287,
        "./esrb_e10plus.svg": 3396,
        "./esrb_m.svg": 871,
        "./esrb_m_ao.svg": 6938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 8473,
        "./esrb_t.svg": 1470,
        "./fpb_13.svg": 908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 3175,
        "./fpb_pg.svg": 5219,
        "./grac_12.svg": 1482,
        "./grac_15.svg": 8341,
        "./grac_18.svg": 1824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 5120,
        "./gsrr_12.svg": 4465,
        "./gsrr_15.svg": 2638,
        "./gsrr_18.svg": 2875,
        "./gsrr_6.svg": 2574,
        "./nmc_12.svg": 3911,
        "./nmc_16.svg": 7675,
        "./nmc_18.svg": 8157,
        "./nmc_21.svg": 8525,
        "./nmc_3.svg": 9109,
        "./nmc_7.svg": 2569,
        "./oflc_g.svg": 9809,
        "./oflc_m.svg": 8219,
        "./oflc_ma15.svg": 8718,
        "./oflc_pg.svg": 4509,
        "./oflc_r18.svg": 615,
        "./pegi_12.svg": 7620,
        "./pegi_16.svg": 7880,
        "./pegi_18.svg": 3454,
        "./pegi_3.svg": 3672,
        "./pegi_4.svg": 6071,
        "./pegi_6.svg": 9493,
        "./pegi_7.svg": 7860,
        "./pegi_rp.png": 7852,
        "./rars_0.svg": 247,
        "./rars_12.svg": 5757,
        "./rars_16.svg": 513,
        "./rars_18.svg": 9959,
        "./rars_6.svg": 1514,
        "./usk_0.svg": 507,
        "./usk_12.svg": 6196,
        "./usk_16.svg": 2008,
        "./usk_18.svg": 7582,
        "./usk_6.svg": 3813,
        "./usk_rp.svg": 7579,
        "./vaci_rp.png": 2674
      };

      function a(e) {
        var s = n(e);
        return i(s)
      }

      function n(e) {
        if (!i.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      a.keys = function() {
        return Object.keys(t)
      }, a.resolve = n, e.exports = a, a.id = 4905
    },
    3983: (e, s, i) => {
      var t = {
        "./cero_a.png": 1229,
        "./cero_b.svg": 7073,
        "./cero_c.svg": 1536,
        "./cero_d.svg": 1071,
        "./cero_rp.png": 2628,
        "./cero_z.svg": 393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 3953,
        "./djctq_14.svg": 6623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 9835,
        "./djctq_er.svg": 7173,
        "./djctq_l.svg": 1524,
        "./esrb_ao.svg": 5521,
        "./esrb_e.svg": 8287,
        "./esrb_e10plus.svg": 3396,
        "./esrb_m.svg": 871,
        "./esrb_m_ao.svg": 6938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 8473,
        "./esrb_t.svg": 1470,
        "./fpb_13.svg": 908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 3175,
        "./fpb_pg.svg": 5219,
        "./grac_12.svg": 1482,
        "./grac_15.svg": 8341,
        "./grac_18.svg": 1824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 5120,
        "./gsrr_12.svg": 4465,
        "./gsrr_15.svg": 2638,
        "./gsrr_18.svg": 2875,
        "./gsrr_6.svg": 2574,
        "./nmc_12.svg": 3911,
        "./nmc_16.svg": 7675,
        "./nmc_18.svg": 8157,
        "./nmc_21.svg": 8525,
        "./nmc_3.svg": 9109,
        "./nmc_7.svg": 2569,
        "./oflc_g.svg": 9809,
        "./oflc_m.svg": 8219,
        "./oflc_ma15.svg": 8718,
        "./oflc_pg.svg": 4509,
        "./oflc_r18.svg": 615,
        "./pegi_12.svg": 7620,
        "./pegi_16.svg": 7880,
        "./pegi_18.svg": 3454,
        "./pegi_3.svg": 3672,
        "./pegi_4.svg": 6071,
        "./pegi_6.svg": 9493,
        "./pegi_7.svg": 7860,
        "./pegi_rp.png": 7852,
        "./rars_0.svg": 247,
        "./rars_12.svg": 5757,
        "./rars_16.svg": 513,
        "./rars_18.svg": 9959,
        "./rars_6.svg": 1514,
        "./usk_0.svg": 507,
        "./usk_12.svg": 6196,
        "./usk_16.svg": 2008,
        "./usk_18.svg": 7582,
        "./usk_6.svg": 3813,
        "./usk_rp.svg": 7579,
        "./vaci_rp.png": 2674
      };

      function a(e) {
        var s = n(e);
        return i(s)
      }

      function n(e) {
        if (!i.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      a.keys = function() {
        return Object.keys(t)
      }, a.resolve = n, e.exports = a, a.id = 3983
    },
    1229: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    7073: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    1536: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    1071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    2628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    5251: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    3953: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    6623: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    6141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    9835: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    7173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    1524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    5521: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    8287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    3396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    871: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    6938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    6960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    8473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    1470: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    908: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    497: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    3175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    5219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    1482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    8341: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    1824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    7361: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    5560: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    5120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    4465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    2638: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    2875: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    2574: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    3911: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    7675: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    8157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    8525: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    2569: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    9809: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    8219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    8718: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    4509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    615: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    7620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    7880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    3454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    3672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    6071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    9493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    7860: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    7852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    247: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    5757: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    513: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    9959: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    1514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    6196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    2008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    7582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    3813: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    7579: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    2674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    }
  }
]);