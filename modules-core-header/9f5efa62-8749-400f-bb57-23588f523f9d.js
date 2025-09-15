try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9f5efa62-8749-400f-bb57-23588f523f9d", e._sentryDebugIdIdentifier = "sentry-dbid-9f5efa62-8749-400f-bb57-23588f523f9d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5879], {
    5931: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    9738: (e, a, t) => {
      var s = t(56130),
        r = t(28593),
        n = t(22909),
        o = Math.max,
        i = Math.min;
      e.exports = function(e, a, t) {
        var c, l, d, _, u, m, f = 0,
          g = !1,
          p = !1,
          b = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(a) {
          var t = c,
            s = l;
          return c = l = void 0, f = a, _ = e.apply(s, t)
        }

        function k(e) {
          var t = e - m;
          return void 0 === m || t >= a || t < 0 || p && e - f >= d
        }

        function v() {
          var e = r();
          if (k(e)) return w(e);
          u = setTimeout(v, function(e) {
            var t = a - (e - m);
            return p ? i(t, d - (e - f)) : t
          }(e))
        }

        function w(e) {
          return u = void 0, b && c ? h(e) : (c = l = void 0, _)
        }

        function x() {
          var e = r(),
            t = k(e);
          if (c = arguments, l = this, m = e, t) {
            if (void 0 === u) return function(e) {
              return f = e, u = setTimeout(v, a), g ? h(e) : _
            }(m);
            if (p) return clearTimeout(u), u = setTimeout(v, a), h(m)
          }
          return void 0 === u && (u = setTimeout(v, a)), _
        }
        return a = n(a) || 0, s(t) && (g = !!t.leading, d = (p = "maxWait" in t) ? o(n(t.maxWait) || 0, a) : d, b = "trailing" in t ? !!t.trailing : b), x.cancel = function() {
          void 0 !== u && clearTimeout(u), f = 0, c = m = l = u = void 0
        }, x.flush = function() {
          return void 0 === u ? _ : w(r())
        }, x
      }
    },
    15036: (e, a, t) => {
      var s = t(28565),
        r = "object" == typeof self && self && self.Object === Object && self,
        n = s || r || Function("return this")();
      e.exports = n
    },
    22909: (e, a, t) => {
      var s = t(87625),
        r = t(56130),
        n = t(25733),
        o = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
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
        var t = i.test(e);
        return t || c.test(e) ? l(e.slice(2), t ? 2 : 8) : o.test(e) ? NaN : +e
      }
    },
    24189: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    25733: (e, a, t) => {
      var s = t(46077),
        r = t(24189);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == s(e)
      }
    },
    28565: (e, a, t) => {
      var s = "object" == typeof t.g && t.g && t.g.Object === Object && t.g;
      e.exports = s
    },
    28593: (e, a, t) => {
      var s = t(15036);
      e.exports = function() {
        return s.Date.now()
      }
    },
    32810: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    35902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    43371: e => {
      var a = Object.prototype.toString;
      e.exports = function(e) {
        return a.call(e)
      }
    },
    46077: (e, a, t) => {
      var s = t(77432),
        r = t(64444),
        n = t(43371),
        o = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? r(e) : n(e)
      }
    },
    56130: e => {
      e.exports = function(e) {
        var a = typeof e;
        return null != e && ("object" == a || "function" == a)
      }
    },
    64444: (e, a, t) => {
      var s = t(77432),
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = r.toString,
        i = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        var a = n.call(e, i),
          t = e[i];
        try {
          e[i] = void 0;
          var s = !0
        } catch (e) {}
        var r = o.call(e);
        return s && (a ? e[i] = t : delete e[i]), r
      }
    },
    66615: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        CharacterProfile: () => we,
        LanguageSelector: () => k,
        Menu: () => be,
        MenuButton: () => he
      });
      var s = t(42295),
        r = t(71127),
        n = t(86695),
        o = t(57365),
        i = t(81788);
      const c = (0, i.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          description: "Aria label to indicate when a link opens in new window/tab",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var l = t(9623);
      const d = "rockstargames-modules-core-headerea8cf4797c830e5b5dad68b2ec814e67",
        _ = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","carousel_learn_more":"Mehr erfahren","carousel_watch_more":"Jetzt anschauen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","rp_icon":"RP-Kategorie","wasted_error_404_new":"Die Seite, die du suchst, existiert nicht, oder es ist ein anderer Fehler aufgetreten.","wasted_home":"Startseite"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","carousel_learn_more":"Learn More","carousel_watch_more":"Watch Now","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","profile_silhouette_mugshot":"Silhouette mugshot","rp_icon":"RP Category","wasted_error_404_new":"The page you\'re looking for doesn\'t exist or another error occurred.","wasted_home":"Home"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","profile_silhouette_mugshot":"Foto de silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o ha habido otro error.","wasted_home":"Inicio"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","profile_silhouette_mugshot":"Foto de una silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"Ocurrió un problema o la página que estás buscando no existe.","wasted_home":"Inicio"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","carousel_learn_more":"En savoir plus","carousel_watch_more":"Visionner maintenant","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","profile_silhouette_mugshot":"Photo d\'identité : silhouette","rp_icon":"Catégorie : RP","wasted_error_404_new":"La page que vous recherchez n\'existe pas ou une autre erreur est survenue.","wasted_home":"Accueil"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","carousel_learn_more":"Altre informazioni","carousel_watch_more":"Guarda ora","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","profile_silhouette_mugshot":"Foto segnaletica silhouette","rp_icon":"Categoria RP","wasted_error_404_new":"La pagina che stai cercando non esiste o si è verificato un altro errore.","wasted_home":"Home"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","carousel_learn_more":"詳細を見る","carousel_watch_more":"今すぐ視聴","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","profile_silhouette_mugshot":"シルエット顔写真","rp_icon":"RPカテゴリー","wasted_error_404_new":"お探しのページが存在しない、もしくはエラーが起こりました。","wasted_home":"ホーム"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","carousel_learn_more":"더 알아보기","carousel_watch_more":"지금 감상하기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","profile_silhouette_mugshot":"실루엣 머그샷","rp_icon":"RP 카테고리","wasted_error_404_new":"찾고 계신 페이지가 존재하지 않거나 오류가 발생했습니다.","wasted_home":"홈"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","carousel_learn_more":"Dowiedz się więcej","carousel_watch_more":"Obejrzyj","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","profile_silhouette_mugshot":"Zdjęcie sylwetki","rp_icon":"Poziom RP","wasted_error_404_new":"Strona, której szukasz, nie istnieje lub wystąpił inny błąd.","wasted_home":"Strona główna"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","carousel_learn_more":"Saiba mais","carousel_watch_more":"Assistir agora","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","profile_silhouette_mugshot":"Foto da silhueta","rp_icon":"Categoria de RP","wasted_error_404_new":"A página que você procura não existe ou ocorreu um erro.","wasted_home":"Início"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","carousel_learn_more":"Подробности","carousel_watch_more":"Смотреть сейчас","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","profile_silhouette_mugshot":"Силуэт игрока","rp_icon":"Категория опыта","wasted_error_404_new":"Запрашиваемой вами страницы не существует, или возникла ошибка.","wasted_home":"Главная страница"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","carousel_learn_more":"了解更多","carousel_watch_more":"马上观看","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_cta_title_twitchdrops":"不要错过下一份 GTA 在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","profile_silhouette_mugshot":"剪影面部照片","rp_icon":"声望值类别","wasted_error_404_new":"您想找的页面不存在，或者出现了其他错误。","wasted_home":"主页"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","carousel_learn_more":"了解更多","carousel_watch_more":"馬上觀看","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","profile_silhouette_mugshot":"罪犯檔案照剪影","rp_icon":"聲望值類別","wasted_error_404_new":"您所找的頁面不存在，或者發生了其他錯誤。","wasted_home":"首頁"}}'),
        u = (m = ({
          children: e,
          to: a = "#",
          reloadDocument: t = !1,
          alt: n = "",
          autoBlank: o = !1,
          role: _ = "link",
          onClick: u = () => {},
          focused: m = !1,
          ...f
        }) => {
          const g = (0, r.useRef)(null),
            p = (0, i.useIntl)(),
            b = !/^(https?|mailto):/i.test(a),
            h = /^#/.test(a),
            k = f?.target ?? (o ? "_blank" : "_self"),
            {
              ...v
            } = f;
          let w = "";
          if ("aria-label" in v && v["aria-label"] && (w = "_blank" === k ? `${v["aria-label"]} ${p.formatMessage(c.aria_label_open_new_window)}` : v["aria-label"]), (0, r.useEffect)((() => {
              m && g?.current && g.current.focus()
            }), [g?.current, m]), h) {
            const t = e => {
              e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), u && u(e)
            };
            return (0, s.jsxs)("a", {
              title: n,
              href: a,
              onClick: t,
              ...v,
              "aria-label": w,
              ref: g,
              role: _,
              children: [e, "_blank" === k && !w && (0, s.jsx)("span", {
                className: d,
                children: p.formatMessage(c.aria_label_open_new_window)
              })]
            })
          }
          if (b) return (0, s.jsxs)(l.NavLink, {
            title: n,
            to: a,
            onClick: u,
            ...v,
            "aria-label": w,
            ref: g,
            reloadDocument: t,
            children: [e, "_blank" === k && !w && (0, s.jsx)("span", {
              className: d,
              children: p.formatMessage(c.aria_label_open_new_window)
            })]
          });
          const x = Object.keys(v).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: f[a]
          })), {});
          return "function" == typeof x?.className && delete x.className, (0, s.jsxs)("a", {
            href: a,
            title: n,
            onClick: u,
            target: k,
            ...x,
            "aria-label": w,
            ref: g,
            role: _,
            children: [e, "_blank" === k && !w && (0, s.jsx)("span", {
              className: d,
              children: p.formatMessage(c.aria_label_open_new_window)
            })]
          })
        }, (0, i.withIntl)(m, _));
      var m, f = t(2918);
      const g = (0, i.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          }
        }),
        p = {
          dropdown: "rockstargames-modules-core-headercb93b1e1dbe15862e05455dc78f5ec25",
          dropdownContainer: "rockstargames-modules-core-headerab0cc073180383d3d5e4bee00eaa311f",
          languageSelector: "rockstargames-modules-core-headera9dd8a9cb7334e205df4ac3b4392916d",
          linkWrapper: "rockstargames-modules-core-headerb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-core-headerc64b05a604b1a6be373d35cf01edba2e",
          menuStyles: "rockstargames-modules-core-headerb641fac428f473cbb4593cd058a01953",
          open: "rockstargames-modules-core-headeraa1d94595080f833a35e29fbbe8fd01c",
          pillBtn: "rockstargames-modules-core-headere34929a5bcdda554c66b47a858ddd966",
          selectBox: "rockstargames-modules-core-headerfe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-core-headerae32febd9789e79c804b2679d25e8a65",
          selectBoxWrapper: "rockstargames-modules-core-headerdb1aead5717ba9dae1e272c3b7e6e801",
          selected: "rockstargames-modules-core-headere1ba906f108faeb297753d39a8d21b8b"
        },
        b = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        h = e => (0, i.withIntl)(e, b),
        k = h((({
          theme: e,
          languageSelectorOpened: a,
          setLanguageSelectorOpened: t,
          location: c,
          parent: l = "element",
          onLanguageChange: d,
          ..._
        }) => {
          const {
            track: m
          } = (0, f.useGtmTrack)(), b = (0, i.useIntl)(), [h] = (0, i.getLocale)(), [k, v] = (0, r.useState)(!1), w = (0, r.useRef)(null), [x, y] = (0, r.useState)(0), C = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, S = e => {
            if (t && t(!1), h.subdomaincom === e || "none" === e) return void(t && t(!1));
            const a = i.locales.find((a => a.subdomaincom === e));
            a && d?.({
              selectedLocale: a,
              track: m,
              parent: l
            })
          };
          return (0, r.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === k && v(!1)
          }), [a]), (0, r.useEffect)((() => {
            w.current && y(w.current.scrollHeight)
          }), [w]), "function" != typeof d ? null : (0, s.jsxs)(s.Fragment, {
            children: [C && "sc-menu" === e && (0, s.jsx)("div", {
              className: [p.languageSelector, k ? p.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${l}-language-selector`,
              ..._,
              children: (0, s.jsx)("div", {
                className: p.selectBoxWrapper,
                children: (0, s.jsxs)("select", {
                  className: p.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    S(a)
                  },
                  "aria-label": b.formatMessage(g.language_selector_default),
                  "data-testid": `${l}-language-selector-button`,
                  children: [(0, s.jsx)("option", {
                    className: p.selectBoxOption,
                    value: "none",
                    "data-testid": `${l}-language-selector-current`,
                    children: i.locales.find((e => e.subdomaincom === h.subdomaincom))?.label ?? (0, s.jsx)(i.FormattedMessage, {
                      ...g.language_selector_default
                    })
                  }), i.locales.map((({
                    label: e,
                    subdomaincom: a
                  }) => (0, s.jsx)("option", {
                    className: p.selectBoxOption,
                    value: a,
                    children: e
                  }, `mobile-${a}`)))]
                })
              })
            }), (!C || "sc-menu" !== e) && "footer" !== e && (0, s.jsxs)("div", {
              className: [p.languageSelector, k ? p.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${l}-language-selector`,
              ..._,
              children: [(0, s.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), t && t(!k), v(!k)
                },
                "data-testid": `${l}-language-selector-button`,
                type: "button",
                "aria-label": b.formatMessage(g.language_selector_default),
                children: [(0, s.jsx)("i", {}), (0, s.jsx)("span", {
                  "data-testid": `${l}-language-selector-current`,
                  children: i.locales.find((e => e.subdomaincom === h.subdomaincom))?.label ?? (0, s.jsx)(i.FormattedMessage, {
                    ...g.language_selector_default
                  })
                })]
              }), (0, s.jsx)("div", {
                className: p.linkWrapper,
                ref: w,
                style: {
                  "--ls-linkWrapper-opened-height": `${x}px`
                },
                children: (0, s.jsx)("div", {
                  className: p.links,
                  children: i.locales.map((({
                    subdomaincom: e,
                    label: a
                  }) => (0, s.jsx)(u, {
                    onClick: a => {
                      a.preventDefault(), S(e)
                    },
                    tabIndex: k ? 0 : -1,
                    "data-testid": `${l}-language-selector-${e}`,
                    children: a
                  }, a)))
                })
              })]
            }), "footer" === e && (0, s.jsxs)("div", {
              className: p.dropdownContainer,
              "data-testid": `${l}-language-selector`,
              ..._,
              children: [(0, s.jsx)(o.Globe, {
                size: "MD",
                label: ""
              }), (0, s.jsxs)(n.Dropdown.Root, {
                className: p.dropdown,
                onValueChange: e => {
                  S(e)
                },
                defaultValue: i.locales.find((e => e.subdomaincom === h.subdomaincom))?.subdomaincom,
                children: [(0, s.jsxs)(n.Dropdown.Trigger, {
                  children: [(0, s.jsx)(n.Dropdown.TriggerText, {
                    placeholder: b.formatMessage(g.language_selector_default)
                  }), (0, s.jsx)(n.Dropdown.TriggerIcon, {})]
                }), (0, s.jsx)(n.Dropdown.Portal, {
                  children: (0, s.jsx)(n.Dropdown.Content, {
                    children: (0, s.jsx)(n.Dropdown.ScrollArea, {
                      children: i.locales.map((({
                        subdomaincom: e,
                        label: a
                      }) => (0, s.jsx)(n.Dropdown.Option, {
                        value: e,
                        testId: `${l}-language-selector-${e}`,
                        children: (0, s.jsx)(n.Dropdown.OptionText, {
                          children: a
                        })
                      }, a)))
                    })
                  })
                })]
              })]
            })]
          })
        }));
      var v = t(19690),
        w = t(95966);
      const x = (0, w.makeVar)(!1),
        y = e => x(e),
        C = (0, w.makeVar)(-1),
        S = e => C(e),
        j = (0, w.makeVar)(-1),
        N = e => j(e),
        M = (0, w.makeVar)(!0),
        z = e => M(e),
        R = (0, w.makeVar)(!0),
        E = e => R(e),
        I = () => {
          const e = (0, w.useReactiveVar)(x),
            a = (0, w.useReactiveVar)(C),
            t = (0, w.useReactiveVar)(j),
            s = (0, w.useReactiveVar)(M),
            n = (0, w.useReactiveVar)(R);
          return (0, r.useEffect)((() => {
            n || (e && y(!1), s && (z(!1), S(-1)))
          }), [n]), (0, r.useEffect)((() => {
            !e && n && (s || z(!0))
          }), [e, n]), (0, r.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: y,
            activeSubNavId: a,
            setActiveSubNavId: S,
            subNavExtraHeight: t,
            setSubNavExtraHeight: N,
            navOpened: s,
            setAccountNavOpened: z,
            charListHidden: n,
            setCharListHidden: E
          })), [e, a, t, s, n])
        },
        T = (0, i.defineMessages)({
          sc_link_account: {
            id: "sc_link_account",
            description: "A button that opens the account drop-down.",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            description: "A link to the social club profile page.",
            defaultMessage: "View My Profile"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            description: "A link to the social club game activation page.",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            description: "A link to the social club notifications page.",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            description: "A link to the social club crews page.",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            description: "A button that openes the friends drop-down.",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            description: "A link to the social club friends page.",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            description: "A link to the social club import friends page.",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            description: "A link to the social club find friends page.",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            description: "A link to the social club find settings page.",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            description: "A link to the social club find help page.",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            description: "A link to the social club find support page.",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            description: "A link to the social club find legal page.",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            description: "A link to the social club find privacy policy page.",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            description: "A link to the social club find cookies policy page.",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            description: "A link to the social club find cookies settings page.",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            description: "A link to the social club find do not sell my information page.",
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          sc_link_log_out: {
            id: "sc_link_log_out",
            description: "A link to log out of social club.",
            defaultMessage: "Log Out"
          },
          sc_link_sign_in: {
            id: "sc_link_sign_in",
            description: "A link to log in to social club.",
            defaultMessage: "Sign In"
          },
          sc_link_join_social_club: {
            id: "sc_link_join_social_club",
            description: "A link to join social club.",
            defaultMessage: "Sign Up"
          },
          profile_selector_switch_character: {
            id: "profile_selector_switch_character",
            description: "A top level button that opens up the list that shows what characters you have to choose from.",
            defaultMessage: "Switch Character"
          },
          profile_selector_profile_card: {
            id: "profile_selector_profile_card",
            description: "An aria-label description of the card that displays the users mugshot, username and stats.",
            defaultMessage: "Profile Card"
          },
          profile_selector_mugshot: {
            id: "profile_selector_mugshot",
            description: "The alt attribute for the player characters mugshot.",
            defaultMessage: "{userName} mugshot"
          },
          profile_silhouette_mugshot: {
            id: "profile_silhouette_mugshot",
            description: "The alt attribute for the silhouette characters mugshot.",
            defaultMessage: "Silhouette mugshot"
          },
          profile_selector_rp_icon: {
            id: "profile_selector_rp_icon",
            description: "The alt attribute for the players RP score.",
            defaultMessage: "RP Category"
          },
          sc_menu_drag_handle: {
            id: "sc_menu_drag_handle",
            description: "The alt attribute for icon for the drag handle image.",
            defaultMessage: "Drag Menu Handle"
          },
          sc_menu_open: {
            id: "sc_menu_open",
            description: "The open aria-label for button that allow users to open/close the menu.",
            defaultMessage: "Open player menu"
          },
          sc_menu_close: {
            id: "sc_menu_close",
            description: "The close aria-label for button that allow users to open/close the menu.",
            defaultMessage: "Close player menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          },
          nofications_new: {
            id: "nofications_new",
            description: "Aria label for new notifications icon.",
            defaultMessage: "New notifications"
          }
        });
      var P = t(9738),
        G = t.n(P),
        L = t(79867);
      const A = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        O = e => ({
          text: e.formatMessage(T.sc_link_help),
          target: "_self",
          ga: {
            ...A,
            text: T.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(T.sc_link_support),
            location: {
              domain: L.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...A,
              text: T.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(T.sc_link_legal),
            location: {
              domain: L.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...A,
              text: T.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(T.sc_link_privacy_policy),
            location: {
              domain: L.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...A,
              text: T.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(T.sc_link_cookies_policy),
            location: {
              domain: L.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...A,
              text: T.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(T.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...A,
              text: T.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(T.sc_link_do_not_sell_my_information),
            location: {
              domain: L.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...A,
              text: T.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var D = t(3860);
      const H = ({
          text: e,
          target: a,
          href: t,
          location: r,
          ga: n,
          dataTestId: o,
          isSubLink: c,
          hasNotifications: l = !1,
          onClickCallback: d = () => {},
          tabIndex: _,
          reloadDocument: u = !1,
          onNavigate: m
        }) => {
          const {
            track: g
          } = (0, f.useGtmTrack)(), p = (0, L.A)(), b = (0, i.useIntl)();
          let h = t;
          r && (h = r.domain === p.currentSite?.site ? r.path : `https://${p.sites[r.domain]}.rockstargames.com${r.path}`);
          const k = {
            ...n,
            link_url: h
          };
          return (0, s.jsxs)(D.A, {
            className: c ? "rockstargames-modules-core-headerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-headerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": o || "menuLink",
            title: e,
            to: h,
            target: a,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: _,
            onClick: e => {
              g(k), d(e)
            },
            onNavigate: m,
            children: [e, l && (0, s.jsx)("div", {
              className: "rockstargames-modules-core-headeradbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, s.jsx)("span", {
                className: "rockstargames-modules-core-headere49e290899be3c888ca5a4b6b13736a1",
                children: b.formatMessage(T.nofications_new)
              })
            })]
          })
        },
        B = ({
          id: e,
          text: a,
          target: t,
          href: n,
          location: o,
          ga: i,
          hasNotifications: c = !1,
          dataTestId: l,
          children: d = [],
          activeSubNavId: _,
          setActiveSubNavId: u,
          setSubNavExtraHeight: m,
          reloadDocument: g = !1,
          onClickCallback: p = () => {},
          onNavigate: b
        }) => {
          const {
            windowWidth: h,
            windowHeight: k
          } = (0, w.useWindowResize)(), {
            track: v
          } = (0, f.useGtmTrack)(), {
            navOpen: x
          } = (0, f.useRockstarUserState)(), y = (0, r.useRef)(null), [C, S] = (0, r.useState)(0), [j, N] = (0, r.useState)(0), [M, z] = (0, r.useState)(!0);
          return (0, r.useEffect)((() => {
            _ !== e && !1 === M && z(!0), _ === e && z(!1)
          }), [_]), (0, r.useEffect)((() => {
            if (!y.current) return;
            S(y?.current?.scrollHeight);
            const e = window.getComputedStyle(y.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), N(a)
            }
          }), [y, h, k]), d.length > 0 ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("button", {
              className: "rockstargames-modules-core-headercc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: x ? 0 : -1,
              "data-children-hidden": M,
              onClick: a => {
                a.stopPropagation(), v(i), _ === e ? (u(-1), m(0)) : (u(e), m(C + j + j))
              },
              children: [(0, s.jsx)("span", {
                className: "rockstargames-modules-core-headerb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, s.jsx)("span", {
                className: "rockstargames-modules-core-headerff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, s.jsx)("nav", {
              className: "rockstargames-modules-core-headercbf6e64eadb6f965877129d539aa2dcd",
              ref: y,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${C}px`
              },
              children: d.map((e => (0, r.createElement)(H, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !x ? -1 : 0,
                onNavigate: b
              })))
            })]
          }) : (0, s.jsx)(H, {
            text: a,
            target: t,
            href: n,
            location: o,
            ga: i,
            hasNotifications: c,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: x ? 0 : -1,
            reloadDocument: g,
            onNavigate: b
          })
        },
        $ = ({
          sc: e,
          location: a,
          onNavigate: t
        }) => {
          const {
            windowWidth: n,
            windowHeight: o
          } = (0, w.useWindowResize)(), c = (0, i.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            activeSubNavId: _,
            setActiveSubNavId: u,
            subNavExtraHeight: m,
            setSubNavExtraHeight: g
          } = I(), {
            setSelectedCharacterTuple: p,
            navOpen: b
          } = (0, f.useRockstarUserState)(), h = (0, w.useLocale)(), v = (0, w.toScLocaleString)(h), [x, y] = (0, r.useState)(""), C = `${e.login}?returnUrl=${x}&lang=${v}`, S = `${e.signup}&returnUrl=${x}&lang=${v}`, j = (0, r.useMemo)((() => (0, L.A)()), []), N = (0, r.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(T.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: T.sc_link_sign_in.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(T.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: T.sc_link_join_social_club.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "signUpLink"
            }, O(e)])(c, C, S);
            return e
          }), [c, C, S, j]), [M, z] = (0, r.useState)(0), R = (0, r.createRef)(), E = () => {
            if (R.current) {
              const {
                current: e
              } = R, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), z(a + e)
              } else z(a)
            }
          };
          return (0, r.useEffect)((() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            y(e)
          }), [JSON.stringify(a)]), (0, r.useEffect)((() => {
            p(!1)
          }), []), (0, r.useEffect)((() => {
            E(), G()((() => {
              setTimeout(E, 0)
            }), 300)
          }), [n, o]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("nav", {
              className: "rockstargames-modules-core-headerf300d66bd02f52ac564238ca6125a091",
              children: (0, s.jsx)("div", {
                className: "rockstargames-modules-core-headerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: R,
                style: {
                  "--navWrap-max-height": `${m+M}px`
                },
                children: N.map((e => (0, r.createElement)(B, {
                  ...e,
                  activeSubNavId: _,
                  setActiveSubNavId: u,
                  setSubNavExtraHeight: g,
                  onNavigate: t,
                  key: e.text
                })))
              })
            }), (0, s.jsx)("div", {
              className: "rockstargames-modules-core-headerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: b ? null : "hidden"
              },
              children: (0, s.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: l,
                setLanguageSelectorOpened: e => {
                  u(-1), d(e)
                },
                location: a,
                onLanguageChange: i.onLanguageChange
              })
            })]
          })
        };
      var q = t(72148),
        U = t(43467);
      var V = t(4572),
        W = t.n(V);
      const F = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        K = (0, r.forwardRef)((function({
          rank: e,
          size: a = "large",
          className: t,
          alt: r,
          testId: n,
          ...o
        }, i) {
          const c = F(e),
            l = (0, U.mergeProps)(o, {
              className: W()("rockstargames-modules-core-headerf54750ef62f8600000c94f0caba85986", t),
              "data-testid": n
            });
          return (0, s.jsxs)("div", {
            "data-size": a,
            ref: i,
            ...l,
            children: [(0, s.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-modules-core-headera3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": F(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: c
              })
            }), (0, s.jsx)("span", {
              className: "rockstargames-modules-core-headerd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        }));
      var X = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const Z = ({
        tagSize: e,
        platform: a,
        className: t = ""
      }) => {
        const {
          src: r,
          alt: n
        } = ((e, a) => {
          const t = "small" === a;
          switch (e) {
            case "pc":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
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
        })(a, e);
        return (0, s.jsx)("img", {
          className: W()("rockstargames-modules-core-headerb0ff0045ed0326a46ca1e0867d2050c1", t),
          "data-testid": "platform-tag",
          "data-platform": a,
          "data-tag-size": e,
          src: r,
          alt: n
        })
      };
      let Y = {
        avatar: "rockstargames-modules-core-headerd79f37fd31c0943cbf4368215dfc79a0",
        characterBtn: "rockstargames-modules-core-headerb26daf00eb7def0a82a3c1481316acb0",
        characterBtnStats: "rockstargames-modules-core-headered30f2b92b3fc2937e7278409208872f",
        scCharBtnNames: "rockstargames-modules-core-headera6009feaf97e98d18c6efc2de47ba8b4",
        scRp: "rockstargames-modules-core-headerf5cab6371f4fcd1aa1ce14c0f97d1e7a",
        scRpIcon: "rockstargames-modules-core-headerfaa7b2808fb96fa02fd2e99be36df8e6",
        scRpLevel: "rockstargames-modules-core-headerc9300f34b82bbdffb7006ff32247adff",
        scUserName: "rockstargames-modules-core-headerc3ab062db0e9e0f75e0598eec5022de5"
      };
      const J = "CharacterButton:characterName",
        Q = "CharacterButton:avatar",
        ee = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: n,
          onClick: o = () => {}
        }) => {
          const c = (0, i.useIntl)(),
            {
              currentCharId: l,
              setCurrentCharId: d
            } = (0, f.useRockstarUserState)(),
            _ = (0, r.createRef)(),
            {
              platform: u,
              platformUsername: m,
              mugshotUrl: g,
              stats: p
            } = e,
            [b, h] = (0, r.useState)(g),
            k = l === e.index;
          return (0, r.useEffect)((() => {
            _.current && a && a(_?.current?.offsetWidth)
          }), [_]), (0, s.jsxs)("button", {
            className: Y.characterBtn,
            type: "button",
            "aria-hidden": k,
            ref: _,
            tabIndex: n,
            onClick: () => o(-1),
            children: [(0, s.jsx)("div", {
              className: Y.avatarFrame,
              children: (0, s.jsx)("div", {
                className: Y.avatar,
                "data-size": "small",
                children: (0, s.jsx)("img", {
                  className: Y.avatarImg,
                  src: b,
                  alt: c.formatMessage(T.profile_selector_mugshot, {
                    userName: m
                  }),
                  onError: () => {
                    h(t(5931))
                  },
                  "data-testid": Q
                })
              })
            }), (0, s.jsxs)("div", {
              className: Y.characterBtnStats,
              children: [(0, s.jsxs)("div", {
                className: Y.scCharBtnNames,
                children: [(0, s.jsx)(Z, {
                  tagSize: X.large,
                  platform: u
                }), (0, s.jsx)("div", {
                  className: Y.scUserName,
                  "data-size": "small",
                  "data-testid": J,
                  children: m
                })]
              }), (0, s.jsx)("div", {
                className: Y.scRp,
                children: (0, s.jsx)(K, {
                  size: "small",
                  rank: parseInt(p.overview.rank.value)
                })
              })]
            })]
          })
        };
      let ae;
      ae = {
        avatar: "rockstargames-modules-core-headere1ed133f04d4201de6c787667fe46939",
        avatarPlatform: "rockstargames-modules-core-headerb061d8f050dd255669342700ddbe9f94",
        pillBtn: "rockstargames-modules-core-headerc094ee9992658964204dbc3c55063187",
        profileDetails: "rockstargames-modules-core-headerc7a6cdc85906179aeadfbea13a491277",
        profileStats: "rockstargames-modules-core-headera4a23edaf47f301893d88f6e233907b3",
        scBank: "rockstargames-modules-core-headeree0f3a44274a32b7c03d50d1f8e23578",
        scCash: "rockstargames-modules-core-headerf21a08a90936d208b236a20d5893ab50",
        scCrewName: "rockstargames-modules-core-headerc3c644cc20da4e904a7f4e5e3850bf7b",
        scCrewRankBar: "rockstargames-modules-core-headercacefbe6235792c328eabdb72c7e812c",
        scCrewRankBarItem: "rockstargames-modules-core-headerf9fc60f5d92cda504e6a40d09ec34429",
        scMoney: "rockstargames-modules-core-headerffc96f13a79073f795d296415f874263",
        scNames: "rockstargames-modules-core-headerc6a703613ae9abf4927cf1f023878d9c",
        scProgress: "rockstargames-modules-core-headerb1230619acc50d561a73b55a185e782e",
        scRpIcon: "rockstargames-modules-core-headerfd047e239c2b7adafe8729ad8e7ae646",
        scRpLevel: "rockstargames-modules-core-headere3dcece76ffe0dcd864d13ada6a4c532",
        scTagsNames: "rockstargames-modules-core-headerac56f06be77872b6f7ba074189a2ec36",
        scUserName: "rockstargames-modules-core-headera829077ec05e5b83560be13ff3604c8e",
        selected: "rockstargames-modules-core-headerf68f5558f3bacb6ab2f0f6e52b7c4d3d"
      };
      const te = "ProfileCard:characterName",
        se = "ProfileCard:avatar",
        re = "ProfileCard:bankValue",
        ne = "ProfileCard:cashValue",
        oe = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, f.useRockstarUser)(), {
            track: n
          } = (0, f.useGtmTrack)(), o = (0, i.useIntl)(), [c, l] = (0, r.useState)([]), [d, _] = (0, r.useState)(null), [u, m] = (0, r.useState)(null), [g, p] = (0, r.useState)(!1), [b, h] = (0, r.useState)(-1), [k, v] = (0, r.useState)([]), [w, x] = (0, r.useState)(0), y = t(5931), {
            platform: C
          } = e, [S, j] = (0, r.useState)("0"), [N, M] = (0, r.useState)("0"), z = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), R = () => {
            I((0, s.jsx)("img", {
              src: y,
              alt: o.formatMessage(T.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [E, I] = (0, r.useState)((0, s.jsx)("img", {
            className: ae.avatarImg,
            src: e.mugshotUrl,
            alt: o.formatMessage(T.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: R,
            "data-testid": se
          }));
          (0, r.useEffect)((() => {
            l(a.crews ?? [])
          }), [a.crews]), (0, r.useEffect)((() => {
            I((0, s.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: R,
              "data-testid": se
            })), j(z(e.stats.overview.bank.value)), M(z(e.stats.overview.cash.value)), x(parseInt(e.stats.overview.rank.value))
          }), [e, a.nickname]), (0, r.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (_(e.crewTag), m(e.crewColour), h(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [c]), (0, r.useEffect)((() => {
            const e = [];
            if (!g && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, s.jsx)("div", {
                className: ae.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }), [b, g, u]);
          const P = e => {
            e.stopPropagation(), n({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, s.jsxs)("div", {
            className: ae.profileDetails,
            onClick: P,
            onKeyUp: P,
            role: "button",
            tabIndex: -1,
            children: [(0, s.jsxs)("div", {
              className: ae.avatar,
              children: [E, (0, s.jsx)("div", {
                className: ae.avatarPlatform,
                "data-platform": C,
                children: (0, s.jsx)(Z, {
                  className: ae.platformTag,
                  tagSize: X.large,
                  platform: C
                })
              })]
            }), (0, s.jsxs)("div", {
              className: ae.profileStats,
              children: [(0, s.jsx)("div", {
                className: ae.scNames,
                children: (0, s.jsxs)("div", {
                  className: ae.scTagsNames,
                  children: [(0, s.jsx)("span", {
                    className: ae.scUserName,
                    "data-testid": te,
                    children: e.platformUsername
                  }), d && (0, s.jsxs)("span", {
                    className: ae.scCrewName,
                    "data-arrow-tag": g,
                    children: [d, !g && (0, s.jsx)("div", {
                      className: ae.scCrewRankBar,
                      children: k
                    })]
                  })]
                })
              }), (0, s.jsxs)("div", {
                className: ae.scProgress,
                children: [(0, s.jsx)(K, {
                  className: ae.scRpLevel,
                  rank: w
                }), (0, s.jsxs)("div", {
                  className: ae.scMoney,
                  children: [(0, s.jsxs)("span", {
                    className: ae.scCash,
                    "data-testid": ne,
                    children: ["$", N]
                  }), (0, s.jsxs)("span", {
                    className: ae.scBank,
                    "data-testid": re,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        };
      let ie = "rockstargames-modules-core-headerb794a0e12537ad5fd506353133b9d60a",
        ce = "rockstargames-modules-core-headerdd4bcd955436c8a6982ee16756f7fd8b",
        le = "rockstargames-modules-core-headerc1e8d8d5b52081b34283a5ac0d377362",
        de = "rockstargames-modules-core-headere8e5249dac92a2bc76788d0fe7d7dfb7",
        _e = "rockstargames-modules-core-headerf64d91c845a3931140b8b2c6a47da81f";
      const ue = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: t = 17,
          slideChangeCallback: n = null,
          slideClickCallback: o = null,
          children: i = [],
          disablePager: c = !1,
          disableSwiper: l = !1
        }) => {
          const d = (0, r.createRef)(),
            _ = (0, q.ri)(d, !1),
            [u, m] = (0, r.useState)(!1),
            [f, g] = (0, r.useState)(!1),
            [p, b] = (0, r.useState)(0),
            [h, k] = (0, r.useState)(0),
            [v, w] = (0, r.useState)([t]),
            [x, y] = (0, r.useState)(v[0]),
            [C, S] = (0, r.useState)(252),
            [j, N] = (0, r.useState)(0),
            [M, z] = (0, r.useState)([]),
            [R, E] = (0, r.useState)([]),
            [I, T] = (0, r.useState)(!1),
            P = e => {
              if (!0 === u || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(a)
            },
            G = a => {
              if (!0 === u || 0 === h || !0 === l) return;
              g(!0);
              const t = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                s = t > h ? 1 : -1,
                r = Math.abs(h - t);
              r > e ? (s > 0 ? (() => {
                if (!0 === u) return;
                m(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                b(e), y(v[e]), n && n(e)
              })() : (() => {
                if (!0 === u) return;
                m(!0);
                let e = p + 1 >= v.length ? v.length - 1 : p + 1;
                e < 0 && (e = 0), b(e), y(v[e]), n && n(e)
              })(), k(0)) : y(v[p] + r * s)
            },
            L = () => {
              !0 !== u && !0 !== l && (m(!0), !0 !== u && (y(v[p]), k(0)), g(!1))
            };
          return (0, r.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, r.createRef)())
            })), z(e)
          }), [i]), (0, r.useEffect)((() => {
            if (M.length < 1) return;
            S(M[0]?.current?.clientWidth || 0);
            const e = M[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            N(t + a)
          }), [M]), (0, r.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              m(!1)
            }), a)
          }), [u, a]), (0, r.useEffect)((() => {
            w(i.map(((e, a) => (e => {
              let a = 0;
              const s = i.length;
              return 1 === s ? .5 * _ - .5 * C - 2 * t + j : (0 === e && (a = t - e * C), e === s - 1 && s > 1 && (a = s * C * -1 + (_ - (t - j))), e > 0 && e < s - 1 && (a = e * C * -1 + (.5 * _ - .5 * C + .5 * j)), a)
            })(a)))), 1 === i.length ? T(!0) : T(!1)
          }), [d.current, i, _]), (0, r.useEffect)((() => {
            const e = (a = p, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            E(e)
          }), [i, p]), (0, r.useEffect)((() => {
            !0 !== c && !0 !== l || y(v[0])
          }), [l, c, v]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("div", {
              className: ie,
              ref: d,
              onTouchStart: P,
              onTouchMove: G,
              onTouchEnd: L,
              onMouseDown: P,
              onMouseMove: G,
              onMouseUp: L,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, s.jsx)("div", {
                className: le,
                "data-interaction-blocked": u,
                "data-single-item": I,
                style: {
                  transform: I ? null : `translateX(${x}px)`
                },
                children: i.map(((e, a) => (0, s.jsx)("div", {
                  onClick: () => (e => {
                    null === o || f || o(e)
                  })(a),
                  className: ce,
                  ref: M[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), R.length > 1 && !1 === c && (0, s.jsx)("div", {
              className: de,
              children: R.map(((e, a) => (0, s.jsx)("div", {
                className: _e,
                "data-active": e.active
              }, a)))
            })]
          })
        },
        me = {
          languageSelector: "rockstargames-modules-core-headerb71a5b5521e679bcab20ec6302253996",
          nav: "rockstargames-modules-core-headerca9118e28091523e6679a3b95054fe93",
          navHeader: "rockstargames-modules-core-headerfa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-core-headerce91ee6ebb491174a4ccb4be628aaae7",
          open: "rockstargames-modules-core-headerc5ffa3cbaa36329b72b3d928f9739849",
          pillBtn: "rockstargames-modules-core-headerb4f0b55680e047d303f82f34594abd96",
          profile: "rockstargames-modules-core-headere506a7deb95c0b0c9988325cc857ea9a",
          scCharacterList: "rockstargames-modules-core-headera84bbdd60e615baed0172e6b960c5d32",
          scCharacterSelectBtn: "rockstargames-modules-core-headerea15428b850bf436adda6f1dd8ac1af9",
          scCharacterSelector: "rockstargames-modules-core-headerc3ea8d575c892277f23ad5b589977862",
          scProfile: "rockstargames-modules-core-headerfb20979fe4aa7955196d74baf7d19379",
          selected: "rockstargames-modules-core-headered6126bd2f36579f2b8035e7c6579eb7"
        },
        fe = ({
          sc: e,
          charListHidden: a,
          hideCharacterList: t,
          refCharacterListDesktop: n,
          menuPadding: o,
          longCharList: c,
          setLongCharList: l,
          isMobileMode: d,
          setIsMobileMode: _,
          location: u,
          onNavigate: m
        }) => {
          const {
            windowWidth: g,
            windowHeight: p
          } = (0, w.useWindowResize)(), b = (0, i.useIntl)(), {
            languageSelectorOpened: h,
            setLanguageSelectorOpened: v,
            activeSubNavId: x,
            setActiveSubNavId: y,
            subNavExtraHeight: C,
            setSubNavExtraHeight: S,
            navOpened: j,
            setScNavOpened: N
          } = I(), [M, z] = (0, r.useState)(""), {
            webSettings: R
          } = (0, w.useRockstarWebSettings)(), {
            track: E
          } = (0, f.useGtmTrack)(), P = (0, w.useRockstarTokenPing)(), {
            data: D,
            loggedIn: H
          } = (0, f.useRockstarUser)(), {
            charactersNeeded: $,
            currentCharId: U,
            hasNotifications: V,
            navOpen: W,
            setCurrentCharId: F,
            setHasNotifications: K,
            setSelectedCharacterTuple: X,
            setUserData: Z
          } = (0, f.useRockstarUserState)(), [Y, J] = (0, r.useState)(null), [Q, ae] = (0, r.useState)(!1), [te, se] = (0, r.useState)(!1), [re, ne] = (0, r.useState)(0), ie = (0, r.createRef)(), ce = (0, q.ri)(ie, !1), le = (0, r.createRef)(), [de, _e] = (0, r.useState)(0), [fe, ge] = (0, r.useState)([]), [pe, be] = (0, r.useState)(244), he = (0, r.useRef)(null), ke = (0, r.useMemo)((() => (0, L.A)()), []), ve = (0, r.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage(T.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(T.sc_link_settings),
              location: {
                domain: L.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...A,
                text: T.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(T.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...A,
                text: T.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(T.sc_link_game_activation),
              location: {
                domain: L.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...A,
                text: T.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(T.sc_link_notifications),
            location: {
              domain: L.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...A,
              text: T.sc_link_notifications.defaultMessage,
              location: {
                domain: L.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(T.sc_link_crews),
            location: {
              domain: L.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...A,
              text: T.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(T.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(T.sc_link_my_friends),
              location: {
                domain: L.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...A,
                text: T.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(T.sc_link_import_friends),
              location: {
                domain: L.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...A,
                text: T.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(T.sc_link_find_friends),
              location: {
                domain: L.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...A,
                text: T.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, O(e), {
            text: e.formatMessage(T.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...A,
              text: T.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(b, e, D, V, M, window)), [b, e, D, V, M, ke]), we = () => {
            se(o + pe * re < ce)
          }, xe = () => {
            if (le.current) {
              const {
                current: e
              } = le, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), _e(a + e)
              } else _e(a)
            }
          };
          return (0, r.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ke.currentSite?.site === L.C.socialClub && (e = encodeURIComponent("/")), z(e)
          }), [u]), (0, r.useEffect)((() => {
            ge(D?.characters?.[$] ?? [])
          }), [D, $]), (0, r.useEffect)((() => {
            D && Z(D)
          }), [D]), (0, r.useEffect)((() => {
            const e = D?.characters?.gtao ?? [];
            if (null !== H && !e.length) return void X(!1);
            if (null == U || !e.length) return;
            const a = e?.[U] ?? e?.[0] ?? null;
            X(!!a?.platform && [a.platform, a.characterSlot])
          }), [U, D, H]), (0, r.useEffect)((() => {
            (async () => {
              if (!D?.id || !W) return;
              const {
                count: e
              } = await (0, w.coreScApiFetch)("notification/count", {
                pingBearer: P
              });
              K(e > 0)
            })()
          }), [D, W]), (0, r.useEffect)((() => {
            we()
          }), [pe]), (0, r.useEffect)((() => {
            t(!0), _(g < 768), _(g < 768 || p < 649)
          }), [g, p]), (0, r.useEffect)((() => {
            let e = fe.length - 1;
            e < 0 && (e = 0), ne(e);
            const a = fe.length > 0 ? fe[U] ?? fe[0] : null;
            a && (J(a), fe.length > 1 ? ae(!0) : ae(!1), l(fe.length - 1 > 3))
          }), [U, fe]), (0, r.useEffect)((() => {
            we()
          }), [re, d, g, fe]), (0, r.useEffect)((() => {
            xe(), G()((() => {
              setTimeout(xe, 0)
            }), 300)
          }), [g, p]), (0, r.useEffect)((() => {
            const e = R?.currentCharId ?? 0;
            e !== U && F(Math.max(0, Math.min(e, fe.length - 1)))
          }), [fe, R]), (0, s.jsxs)(s.Fragment, {
            children: [null !== Y && "gtao" === $ && (0, s.jsxs)("div", {
              className: me.scProfile,
              ref: he,
              tabIndex: -1,
              "aria-label": b.formatMessage(T.profile_selector_profile_card),
              children: [(0, s.jsx)(oe, {
                s: me,
                character: Y
              }), !0 === Q && (0, s.jsxs)("div", {
                className: me.scCharacterSelector,
                children: [(0, s.jsx)("button", {
                  className: me.scCharacterSelectBtn,
                  "aria-hidden": !W,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const s = !a;
                    t(s), E({
                      event: s ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, s.jsx)("span", {
                    children: (0, s.jsx)(i.FormattedMessage, {
                      ...T.profile_selector_switch_character
                    })
                  })
                }), !d && (0, s.jsx)("div", {
                  className: me.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": a,
                  ref: n,
                  children: fe.map((e => (0, s.jsx)(ee, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: be
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), d && (0, s.jsx)("div", {
                  className: me.scCharacterList,
                  "data-single-item": 2 === fe.length,
                  "data-swiper-disabled": te,
                  "aria-hidden": a,
                  ref: ie,
                  children: (0, s.jsx)(ue, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      E({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: te,
                    disableSwiper: te,
                    children: fe.filter(((e, a) => a !== U)).map((e => (0, r.createElement)(ee, {
                      characterData: e,
                      setMobileCardWidth: be,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, s.jsxs)("nav", {
              className: me.nav,
              "aria-hidden": !W,
              children: [(0, s.jsx)("button", {
                className: me.navHeader,
                type: "button",
                "data-opened": j,
                "data-nav-opened": W,
                tabIndex: j ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), j || N(!0)
                },
                "data-testid": "playerButton",
                children: (0, s.jsx)("span", {
                  className: me.navHeaderText,
                  children: D.nickname
                })
              }), (0, s.jsx)("div", {
                className: me.navWrap,
                "data-opened": j,
                "data-logged-in": "true",
                ref: le,
                style: {
                  "--navWrap-max-height": `${de+C}px`
                },
                children: ve.map(((e, a) => (0, r.createElement)(B, {
                  ...e,
                  id: a,
                  activeSubNavId: x,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: S,
                  onNavigate: m,
                  key: e.text
                })))
              })]
            }), (0, s.jsx)("div", {
              className: me.scLanguageSelector,
              style: {
                visibility: W ? null : "hidden"
              },
              children: (0, s.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: h,
                setLanguageSelectorOpened: v,
                location: u,
                onLanguageChange: i.onLanguageChange
              })
            })]
          })
        },
        ge = {
          dragHandle: "rockstargames-modules-core-headerff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-headerb49ca12d5334ed642d4359aa44105834",
          menu: "rockstargames-modules-core-headerc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          navOpen: "rockstargames-modules-core-headerb8b5590986941337aa51e2eb7ff12f78",
          pillBtn: "rockstargames-modules-core-headerc31a4663e3c088e8d1095331ba8cafc8",
          scOverlay: "rockstargames-modules-core-headereff8c1d4bf675accdb7d952aba0174dc",
          selected: "rockstargames-modules-core-headerc5f6868e76307ee73276f140c2f988df"
        },
        pe = (0, w.getConfigForDomain)(),
        be = h((({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: n
          } = (0, w.useWindowResize)(), o = (0, i.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: l,
            setActiveSubNavId: d,
            navOpened: _,
            setAccountNavOpened: u,
            charListHidden: m,
            setCharListHidden: g
          } = I(), [p, b] = (0, r.useState)(!1), {
            navHidden: h = !1
          } = (0, w.useState)(), {
            loggedIn: k
          } = (0, f.useRockstarUser)(), {
            currentCharId: x,
            navOpen: y,
            setNavOpen: C,
            userData: S
          } = (0, f.useRockstarUserState)(), {
            track: j
          } = (0, f.useGtmTrack)(), [N, M] = (0, r.useState)(!1), z = (0, r.useRef)(), [R, E] = (0, r.useState)(0), P = (0, r.createRef)(), [G, L] = (0, r.useState)(!1), [A, O] = (0, r.useState)(0), [D, H] = (0, r.useState)(!1), {
            mutateWebSettings: B,
            webSettings: q
          } = (0, w.useRockstarWebSettings)(), U = (0, r.useCallback)((e => {
            g(e), z.current && !0 === e && (z.current.scrollTop = 0)
          }), [z]);
          return (0, r.useEffect)((() => {
            null !== x && q.currentCharId !== x && B({
              key: "currentCharId",
              value: x
            }), !1 === k ? B({
              key: "currentCharId",
              value: null
            }) : k && S && S?.accountSynced && j({
              event: "account_synced"
            })
          }), [x, k, S?.accountSynced]), (0, r.useEffect)((() => {
            z.current && (!1 === m && !1 === N && (z.current.style.height = `${z.current.scrollHeight}px`), !0 === m && (z.current.style.height = null))
          }), [m, z, N]), (0, r.useEffect)((() => {
            const e = () => {
                C(!1), U(!0)
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
          }), [P]), (0, r.useEffect)((() => {
            C(!1), U(!0)
          }), [h]), (0, r.useEffect)((() => {
            if (P.current) {
              const {
                current: e
              } = P, a = window.getComputedStyle(e);
              E(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [P]), (0, r.useEffect)((() => {
            H(window.navigator.userAgent.includes("Mac"))
          }), []), (0, r.useEffect)((() => {
            P.current && b(P?.current?.scrollHeight >= n)
          }), [P, n]), (0, r.useEffect)((() => {
            y || (d(-1), l(!1))
          }), [y]), (0, r.useEffect)((() => {
            c && (m || U(!0), _ && (u(!1), d(-1)))
          }), [c]), (0, r.useEffect)((() => {
            _ && (c && l(!1), m || U(!0))
          }), [_]), void 0 === k ? null : (0, s.jsxs)(v.RemoveScroll, {
            enabled: !!y,
            removeScrollBar: !1,
            children: [(0, s.jsxs)("div", {
              className: [ge.menu, y ? ge.navOpen : ""].join(" "),
              "data-logged-in": k,
              "data-mac-browser": D,
              "data-scroll-mode": p,
              ref: P,
              "aria-hidden": !y,
              children: [(0, s.jsx)("button", {
                className: ge.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  O(a)
                },
                onTouchMove: e => {
                  if (0 === A) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(A - a) > 1 && (O(0), C(!1))
                },
                children: (0, s.jsx)("img", {
                  className: ge.dragHandle,
                  src: t(35902),
                  alt: o.formatMessage(T.sc_menu_drag_handle)
                })
              }), k ? (0, s.jsx)(fe, {
                sc: pe,
                charListHidden: m,
                hideCharacterList: U,
                refCharacterListDesktop: z,
                menuPadding: R,
                longCharList: N,
                setLongCharList: M,
                isMobileMode: G,
                setIsMobileMode: L,
                location: e,
                onNavigate: a
              }) : (0, s.jsx)($, {
                sc: pe,
                navOpen: y,
                location: e,
                onNavigate: a
              })]
            }), (0, s.jsx)("div", {
              className: [ge.scOverlay, y ? ge.navOpen : ""].join(" "),
              "data-logged-in": k
            })]
          })
        })),
        he = h((({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, i.useIntl)(),
            {
              data: n,
              loggedIn: o
            } = (0, f.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: l,
              navOpen: d,
              setNavOpen: _
            } = (0, f.useRockstarUserState)(),
            {
              track: u
            } = (0, f.useGtmTrack)(),
            [m, g] = (0, r.useState)(),
            [p, b] = (0, r.useState)(!1),
            [h, k] = (0, r.useState)([]);
          (0, r.useEffect)((() => {
            k(n?.characters?.[c] ?? [])
          }), [n, c]);
          const v = (0, r.useCallback)((a => {
            a.stopPropagation(), _(!d), 1 == !d && e(null), u({
              event: "account_menu_click",
              element_placement: "account menu",
              text: d ? "close" : "open"
            })
          }), [d]);
          return (0, r.useEffect)((() => {
            b(!!h?.[l]?.mugshotUrl)
          }), [h, l]), (0, r.useEffect)((() => {
            g((() => {
              switch (o) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return h?.[l]?.mugshotUrl ?? n?.avatar
              }
            })())
          }), [n, h, l, o]), (0, s.jsxs)("button", {
            className: "rockstargames-modules-core-headeree811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(d ? T.sc_menu_close : T.sc_menu_open),
            "aria-expanded": d,
            type: "button",
            onClick: v,
            "data-mugshot": p,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(o),
            children: [(0, s.jsx)("img", {
              className: "rockstargames-modules-core-headera917b58ca28b68550a1aa5d99c7eb998",
              src: m,
              alt: n?.nickname || "",
              onError: () => {
                let e = null;
                e = t(p ? 5931 : 73091), g(e)
              }
            }), o && p && (0, s.jsx)("div", {
              className: "rockstargames-modules-core-headerc06123ceae7ca4759ec8b1a5197823db",
              children: (0, s.jsx)(Z, {
                platform: h?.[l]?.platform,
                tagSize: X.small
              })
            }), o && (0, s.jsx)("div", {
              className: "rockstargames-modules-core-headerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": h?.[l]?.platform ?? null
            })]
          })
        }));
      let ke = {
        open: "rockstargames-modules-core-headerd815312ad6eebc2c651f8554dc6c0bb7",
        pillBtn: "rockstargames-modules-core-headerc5adbe3b8adfa45115608e536f6e0384",
        scCharacterList: "rockstargames-modules-core-headerdedb11e25dddfe561c538a370f5028e2",
        scCharacterSelectBtn: "rockstargames-modules-core-headerd3991df21bf29ec01662910e116a6ff5",
        scCharacterSelector: "rockstargames-modules-core-headerefcb26b13bae0546c71d0b9f88e335a9",
        selected: "rockstargames-modules-core-headerc7c3f92d1fdd021a5cd665583ac79d89"
      };
      const ve = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        we = () => {
          const e = (0, i.useIntl)(),
            {
              track: a
            } = (0, f.useGtmTrack)(),
            [t, n] = (0, r.useState)(null),
            [o, c] = (0, r.useState)(0),
            [l, d] = (0, r.useState)(!1),
            [_, u] = (0, r.useState)(!1),
            m = (0, r.createRef)(),
            [g, p] = (0, r.useState)([]),
            [b, h] = (0, r.useState)(244),
            {
              windowWidth: k
            } = (0, w.useWindowResize)(),
            [v, x] = (0, r.useState)(!1),
            y = (0, q.ri)(m, !1),
            {
              data: C,
              loggedIn: S
            } = (0, f.useRockstarUser)(),
            {
              charactersNeeded: j,
              currentCharId: N,
              setCurrentCharId: M
            } = (0, f.useRockstarUserState)(),
            {
              charListHidden: z,
              setCharListHidden: R
            } = I();
          (0, r.useEffect)((() => {
            void 0 === N && M(0)
          }), [N]), (0, r.useEffect)((() => {
            let e = g.length - 1;
            e < 0 && (e = 0), c(e);
            const a = g.length > 0 ? g[N] ?? g[0] : null;
            a && (n(a), g.length > 1 ? u(!0) : u(!1))
          }), [N, g]), (0, r.useEffect)((() => {
            p(C?.characters?.[j] ?? [])
          }), [C, j]), (0, r.useEffect)((() => {
            E()
          }), [b, o, v, k, g]), (0, r.useEffect)((() => {
            x(k < 1024)
          }), [k]);
          const E = () => {
              d(b * o < y)
            },
            P = e => {
              const t = g.filter(((e, a) => a !== N)).map((e => e));
              M(t[e].index), a({
                event: "character_selector_select",
                text: ve[t[e].platform],
                position: t[e].index
              })
            };
          return null !== t && "gtao" === j && S ? (0, s.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(T.profile_selector_profile_card),
            children: [(0, s.jsx)(oe, {
              s: ke,
              character: t
            }), !0 === _ && (0, s.jsxs)("div", {
              className: ke.scCharacterSelector,
              children: [(0, s.jsx)("button", {
                className: ke.scCharacterSelectBtn,
                "data-list-closed": z,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const t = !z;
                  R(t), a({
                    event: t ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: (0, s.jsx)("span", {
                  className: ke.scCharacterBtnText,
                  children: (0, s.jsx)(i.FormattedMessage, {
                    ...T.profile_selector_switch_character
                  })
                })
              }), !v && (0, s.jsx)("div", {
                className: ke.scCharacterList,
                "aria-hidden": z,
                children: g.filter(((e, a) => a !== N)).map(((e, a) => (0, s.jsx)(ee, {
                  tabIndex: z ? -1 : 0,
                  onClick: () => P(a),
                  characterData: e,
                  setMobileCardWidth: h
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
              }), v && (0, s.jsx)("div", {
                className: ke.scCharacterList,
                "data-single-item": 2 === g.length,
                "data-swiper-disabled": l,
                "aria-hidden": z,
                ref: m,
                children: (0, s.jsx)(ue, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    a({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  slideClickCallback: P,
                  disablePager: l,
                  disableSwiper: l,
                  children: g.filter(((e, a) => a !== N)).map((e => (0, r.createElement)(ee, {
                    characterData: e,
                    setMobileCardWidth: h,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: z ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }
    },
    73091: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f97af80b5511804c9842052dacb20f2a.png"
    },
    77432: (e, a, t) => {
      var s = t(15036).Symbol;
      e.exports = s
    },
    85531: e => {
      var a = /\s/;
      e.exports = function(e) {
        for (var t = e.length; t-- && a.test(e.charAt(t)););
        return t
      }
    },
    87625: (e, a, t) => {
      var s = t(85531),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, s(e) + 1).replace(r, "") : e
      }
    }
  }
]);