try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8611a428-5dc9-4e17-a1e8-acba72011436", e._sentryDebugIdIdentifier = "sentry-dbid-8611a428-5dc9-4e17-a1e8-acba72011436")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5879], {
    5931: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    9738: (e, a, s) => {
      var t = s(56130),
        r = s(28593),
        i = s(22909),
        n = Math.max,
        o = Math.min;
      e.exports = function(e, a, s) {
        var c, l, _, d, u, m, f = 0,
          g = !1,
          p = !1,
          h = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function k(a) {
          var s = c,
            t = l;
          return c = l = void 0, f = a, d = e.apply(t, s)
        }

        function b(e) {
          var s = e - m;
          return void 0 === m || s >= a || s < 0 || p && e - f >= _
        }

        function v() {
          var e = r();
          if (b(e)) return w(e);
          u = setTimeout(v, function(e) {
            var s = a - (e - m);
            return p ? o(s, _ - (e - f)) : s
          }(e))
        }

        function w(e) {
          return u = void 0, h && c ? k(e) : (c = l = void 0, d)
        }

        function y() {
          var e = r(),
            s = b(e);
          if (c = arguments, l = this, m = e, s) {
            if (void 0 === u) return function(e) {
              return f = e, u = setTimeout(v, a), g ? k(e) : d
            }(m);
            if (p) return clearTimeout(u), u = setTimeout(v, a), k(m)
          }
          return void 0 === u && (u = setTimeout(v, a)), d
        }
        return a = i(a) || 0, t(s) && (g = !!s.leading, _ = (p = "maxWait" in s) ? n(i(s.maxWait) || 0, a) : _, h = "trailing" in s ? !!s.trailing : h), y.cancel = function() {
          void 0 !== u && clearTimeout(u), f = 0, c = m = l = u = void 0
        }, y.flush = function() {
          return void 0 === u ? d : w(r())
        }, y
      }
    },
    15036: (e, a, s) => {
      var t = s(28565),
        r = "object" == typeof self && self && self.Object === Object && self,
        i = t || r || Function("return this")();
      e.exports = i
    },
    22909: (e, a, s) => {
      var t = s(87625),
        r = s(56130),
        i = s(25733),
        n = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (r(e)) {
          var a = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = r(a) ? a + "" : a
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = t(e);
        var s = o.test(e);
        return s || c.test(e) ? l(e.slice(2), s ? 2 : 8) : n.test(e) ? NaN : +e
      }
    },
    24189: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    25733: (e, a, s) => {
      var t = s(46077),
        r = s(24189);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == t(e)
      }
    },
    28565: (e, a, s) => {
      var t = "object" == typeof s.g && s.g && s.g.Object === Object && s.g;
      e.exports = t
    },
    28593: (e, a, s) => {
      var t = s(15036);
      e.exports = function() {
        return t.Date.now()
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
    46077: (e, a, s) => {
      var t = s(77432),
        r = s(64444),
        i = s(43371),
        n = t ? t.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : n && n in Object(e) ? r(e) : i(e)
      }
    },
    56130: e => {
      e.exports = function(e) {
        var a = typeof e;
        return null != e && ("object" == a || "function" == a)
      }
    },
    64444: (e, a, s) => {
      var t = s(77432),
        r = Object.prototype,
        i = r.hasOwnProperty,
        n = r.toString,
        o = t ? t.toStringTag : void 0;
      e.exports = function(e) {
        var a = i.call(e, o),
          s = e[o];
        try {
          e[o] = void 0;
          var t = !0
        } catch (e) {}
        var r = n.call(e);
        return t && (a ? e[o] = s : delete e[o]), r
      }
    },
    66615: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        CharacterProfile: () => we,
        LanguageSelector: () => b,
        Menu: () => he,
        MenuButton: () => ke
      });
      var t = s(42295),
        r = s(71127),
        i = s(42686),
        n = s(64324),
        o = s(81788);
      const c = (0, o.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          description: "Aria label to indicate when a link opens in new window/tab",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var l = s(9623);
      const _ = "rockstargames-modules-core-headerea8cf4797c830e5b5dad68b2ec814e67",
        d = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","carousel_learn_more":"Mehr erfahren","carousel_watch_more":"Jetzt anschauen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","rp_icon":"RP-Kategorie","wasted_error_404_new":"Die Seite, die du suchst, existiert nicht, oder es ist ein anderer Fehler aufgetreten.","wasted_home":"Startseite"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","carousel_learn_more":"Learn More","carousel_watch_more":"Watch Now","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","profile_silhouette_mugshot":"Silhouette mugshot","rp_icon":"RP Category","wasted_error_404_new":"The page you\'re looking for doesn\'t exist or another error occurred.","wasted_home":"Home"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","profile_silhouette_mugshot":"Foto de silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o ha habido otro error.","wasted_home":"Inicio"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","profile_silhouette_mugshot":"Foto de una silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"Ocurrió un problema o la página que estás buscando no existe.","wasted_home":"Inicio"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","carousel_learn_more":"En savoir plus","carousel_watch_more":"Visionner maintenant","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","profile_silhouette_mugshot":"Photo d\'identité : silhouette","rp_icon":"Catégorie : RP","wasted_error_404_new":"La page que vous recherchez n\'existe pas ou une autre erreur est survenue.","wasted_home":"Accueil"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","carousel_learn_more":"Altre informazioni","carousel_watch_more":"Guarda ora","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","profile_silhouette_mugshot":"Foto segnaletica silhouette","rp_icon":"Categoria RP","wasted_error_404_new":"La pagina che stai cercando non esiste o si è verificato un altro errore.","wasted_home":"Home"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","carousel_learn_more":"詳細を見る","carousel_watch_more":"今すぐ視聴","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","profile_silhouette_mugshot":"シルエット顔写真","rp_icon":"RPカテゴリー","wasted_error_404_new":"お探しのページが存在しない、もしくはエラーが起こりました。","wasted_home":"ホーム"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","carousel_learn_more":"더 알아보기","carousel_watch_more":"지금 감상하기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","profile_silhouette_mugshot":"실루엣 머그샷","rp_icon":"RP 카테고리","wasted_error_404_new":"찾고 계신 페이지가 존재하지 않거나 오류가 발생했습니다.","wasted_home":"홈"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","carousel_learn_more":"Dowiedz się więcej","carousel_watch_more":"Obejrzyj","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","profile_silhouette_mugshot":"Zdjęcie sylwetki","rp_icon":"Poziom RP","wasted_error_404_new":"Strona, której szukasz, nie istnieje lub wystąpił inny błąd.","wasted_home":"Strona główna"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","carousel_learn_more":"Saiba mais","carousel_watch_more":"Assistir agora","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","profile_silhouette_mugshot":"Foto da silhueta","rp_icon":"Categoria de RP","wasted_error_404_new":"A página que você procura não existe ou ocorreu um erro.","wasted_home":"Início"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","carousel_learn_more":"Подробности","carousel_watch_more":"Смотреть сейчас","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","profile_silhouette_mugshot":"Силуэт игрока","rp_icon":"Категория опыта","wasted_error_404_new":"Запрашиваемой вами страницы не существует, или возникла ошибка.","wasted_home":"Главная страница"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","carousel_learn_more":"了解更多","carousel_watch_more":"马上观看","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_cta_title_twitchdrops":"不要错过下一份 GTA 在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","profile_silhouette_mugshot":"剪影面部照片","rp_icon":"声望值类别","wasted_error_404_new":"您想找的页面不存在，或者出现了其他错误。","wasted_home":"主页"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","carousel_learn_more":"了解更多","carousel_watch_more":"馬上觀看","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","profile_silhouette_mugshot":"罪犯檔案照剪影","rp_icon":"聲望值類別","wasted_error_404_new":"您所找的頁面不存在，或者發生了其他錯誤。","wasted_home":"首頁"}}'),
        u = (m = ({
          children: e,
          to: a = "#",
          reloadDocument: s = !1,
          alt: i = "",
          autoBlank: n = !1,
          role: d = "link",
          onClick: u = () => {},
          focused: m = !1,
          ...f
        }) => {
          const g = (0, r.useRef)(null),
            p = (0, o.useIntl)(),
            h = !/^(https?|mailto):/i.test(a),
            k = /^#/.test(a),
            b = f?.target ?? (n ? "_blank" : "_self"),
            {
              ...v
            } = f;
          let w = "";
          if ("aria-label" in v && v["aria-label"] && (w = "_blank" === b ? `${v["aria-label"]} ${p.formatMessage(c.aria_label_open_new_window)}` : v["aria-label"]), (0, r.useEffect)((() => {
              m && g?.current && g.current.focus()
            }), [g?.current, m]), k) {
            const s = e => {
              e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), u && u(e)
            };
            return (0, t.jsxs)("a", {
              title: i,
              href: a,
              onClick: s,
              ...v,
              "aria-label": w,
              ref: g,
              role: d,
              children: [e, "_blank" === b && !w && (0, t.jsx)("span", {
                className: _,
                children: p.formatMessage(c.aria_label_open_new_window)
              })]
            })
          }
          if (h) return (0, t.jsxs)(l.NavLink, {
            title: i,
            to: a,
            onClick: u,
            ...v,
            "aria-label": w,
            ref: g,
            reloadDocument: s,
            children: [e, "_blank" === b && !w && (0, t.jsx)("span", {
              className: _,
              children: p.formatMessage(c.aria_label_open_new_window)
            })]
          });
          const y = Object.keys(v).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: f[a]
          })), {});
          return "function" == typeof y?.className && delete y.className, (0, t.jsxs)("a", {
            href: a,
            title: i,
            onClick: u,
            target: b,
            ...y,
            "aria-label": w,
            ref: g,
            role: d,
            children: [e, "_blank" === b && !w && (0, t.jsx)("span", {
              className: _,
              children: p.formatMessage(c.aria_label_open_new_window)
            })]
          })
        }, (0, o.withIntl)(m, d));
      var m, f = s(2918);
      const g = (0, o.defineMessages)({
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
        h = JSON.parse('{"de-DE":{"language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen"},"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"},"es-ES":{"language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador"},"es-MX":{"language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de una silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador"},"fr-FR":{"language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","profile_silhouette_mugshot":"Photo d\'identité : silhouette","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur"},"it-IT":{"language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","profile_silhouette_mugshot":"Foto segnaletica silhouette","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore"},"ja-JP":{"language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","profile_silhouette_mugshot":"シルエット顔写真","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く"},"ko-KR":{"language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","profile_silhouette_mugshot":"실루엣 머그샷","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기"},"pl-PL":{"language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","profile_silhouette_mugshot":"Zdjęcie sylwetki","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza"},"pt-BR":{"language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","profile_silhouette_mugshot":"Foto da silhueta","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador"},"ru-RU":{"language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","profile_silhouette_mugshot":"Силуэт игрока","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока"},"zh-CN":{"language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","profile_silhouette_mugshot":"剪影面部照片","sc_link_account":"账户","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单"},"zh-TW":{"language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","profile_silhouette_mugshot":"罪犯檔案照剪影","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單"}}'),
        k = e => (0, o.withIntl)(e, h),
        b = k((({
          theme: e,
          languageSelectorOpened: a,
          setLanguageSelectorOpened: s,
          location: c,
          parent: l = "element",
          onLanguageChange: _,
          ...d
        }) => {
          const {
            track: m
          } = (0, f.useGtmTrack)(), h = (0, o.useIntl)(), [k] = (0, o.getLocale)(), [b, v] = (0, r.useState)(!1), w = (0, r.useRef)(null), [y, x] = (0, r.useState)(0), j = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, C = e => {
            if (s && s(!1), k.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = o.locales.find((a => a.subdomaincom === e));
            a && _?.({
              selectedLocale: a,
              track: m,
              parent: l
            })
          };
          return (0, r.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === b && v(!1)
          }), [a]), (0, r.useEffect)((() => {
            w.current && x(w.current.scrollHeight)
          }), [w]), "function" != typeof _ ? null : (0, t.jsxs)(t.Fragment, {
            children: [j && "sc-menu" === e && (0, t.jsx)("div", {
              className: [p.languageSelector, b ? p.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${l}-language-selector`,
              ...d,
              children: (0, t.jsx)("div", {
                className: p.selectBoxWrapper,
                children: (0, t.jsxs)("select", {
                  className: p.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    C(a)
                  },
                  "aria-label": h.formatMessage(g.language_selector_default),
                  "data-testid": `${l}-language-selector-button`,
                  children: [(0, t.jsx)("option", {
                    className: p.selectBoxOption,
                    value: "none",
                    "data-testid": `${l}-language-selector-current`,
                    children: o.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? (0, t.jsx)(o.FormattedMessage, {
                      ...g.language_selector_default
                    })
                  }), o.locales.map((({
                    label: e,
                    subdomaincom: a
                  }) => (0, t.jsx)("option", {
                    className: p.selectBoxOption,
                    value: a,
                    children: e
                  }, `mobile-${a}`)))]
                })
              })
            }), (!j || "sc-menu" !== e) && "footer" !== e && (0, t.jsxs)("div", {
              className: [p.languageSelector, b ? p.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${l}-language-selector`,
              ...d,
              children: [(0, t.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!b), v(!b)
                },
                "data-testid": `${l}-language-selector-button`,
                type: "button",
                "aria-label": h.formatMessage(g.language_selector_default),
                children: [(0, t.jsx)("i", {}), (0, t.jsx)("span", {
                  "data-testid": `${l}-language-selector-current`,
                  children: o.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? (0, t.jsx)(o.FormattedMessage, {
                    ...g.language_selector_default
                  })
                })]
              }), (0, t.jsx)("div", {
                className: p.linkWrapper,
                ref: w,
                style: {
                  "--ls-linkWrapper-opened-height": `${y}px`
                },
                children: (0, t.jsx)("div", {
                  className: p.links,
                  children: o.locales.map((({
                    subdomaincom: e,
                    label: a
                  }) => (0, t.jsx)(u, {
                    onClick: a => {
                      a.preventDefault(), C(e)
                    },
                    tabIndex: b ? 0 : -1,
                    "data-testid": `${l}-language-selector-${e}`,
                    children: a
                  }, a)))
                })
              })]
            }), "footer" === e && (0, t.jsxs)("div", {
              className: p.dropdownContainer,
              "data-testid": `${l}-language-selector`,
              ...d,
              children: [(0, t.jsx)(n.Globe, {
                size: "MD",
                label: ""
              }), (0, t.jsxs)(i.Dropdown.Root, {
                className: p.dropdown,
                onValueChange: e => {
                  C(e)
                },
                defaultValue: o.locales.find((e => e.subdomaincom === k.subdomaincom))?.subdomaincom,
                children: [(0, t.jsxs)(i.Dropdown.Trigger, {
                  children: [(0, t.jsx)(i.Dropdown.TriggerText, {
                    placeholder: h.formatMessage(g.language_selector_default)
                  }), (0, t.jsx)(i.Dropdown.TriggerIcon, {})]
                }), (0, t.jsx)(i.Dropdown.Portal, {
                  children: (0, t.jsx)(i.Dropdown.Content, {
                    children: (0, t.jsx)(i.Dropdown.ScrollArea, {
                      children: o.locales.map((({
                        subdomaincom: e,
                        label: a
                      }) => (0, t.jsx)(i.Dropdown.Option, {
                        value: e,
                        testId: `${l}-language-selector-${e}`,
                        children: (0, t.jsx)(i.Dropdown.OptionText, {
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
      var v = s(19690),
        w = s(95966);
      const y = (0, w.makeVar)(!1),
        x = e => y(e),
        j = (0, w.makeVar)(-1),
        C = e => j(e),
        S = (0, w.makeVar)(-1),
        N = e => S(e),
        M = (0, w.makeVar)(!0),
        z = e => M(e),
        R = (0, w.makeVar)(!0),
        I = e => R(e),
        E = () => {
          const e = (0, w.useReactiveVar)(y),
            a = (0, w.useReactiveVar)(j),
            s = (0, w.useReactiveVar)(S),
            t = (0, w.useReactiveVar)(M),
            i = (0, w.useReactiveVar)(R);
          return (0, r.useEffect)((() => {
            i || (e && x(!1), t && (z(!1), C(-1)))
          }), [i]), (0, r.useEffect)((() => {
            !e && i && (t || z(!0))
          }), [e, i]), (0, r.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: x,
            activeSubNavId: a,
            setActiveSubNavId: C,
            subNavExtraHeight: s,
            setSubNavExtraHeight: N,
            navOpened: t,
            setAccountNavOpened: z,
            charListHidden: i,
            setCharListHidden: I
          })), [e, a, s, t, i])
        },
        P = (0, o.defineMessages)({
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
      var T = s(9738),
        A = s.n(T),
        L = s(79867);
      const G = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        O = e => ({
          text: e.formatMessage(P.sc_link_help),
          target: "_self",
          ga: {
            ...G,
            text: P.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(P.sc_link_support),
            location: {
              domain: L.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...G,
              text: P.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(P.sc_link_legal),
            location: {
              domain: L.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...G,
              text: P.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(P.sc_link_privacy_policy),
            location: {
              domain: L.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...G,
              text: P.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(P.sc_link_cookies_policy),
            location: {
              domain: L.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...G,
              text: P.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(P.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...G,
              text: P.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(P.sc_link_do_not_sell_my_information),
            location: {
              domain: L.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...G,
              text: P.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var D = s(3860);
      const H = ({
          text: e,
          target: a,
          href: s,
          location: r,
          ga: i,
          dataTestId: n,
          isSubLink: c,
          hasNotifications: l = !1,
          onClickCallback: _ = () => {},
          tabIndex: d,
          reloadDocument: u = !1,
          onNavigate: m
        }) => {
          const {
            track: g
          } = (0, f.useGtmTrack)(), p = (0, L.A)(), h = (0, o.useIntl)();
          let k = s;
          r && (k = r.domain === p.currentSite?.site ? r.path : `https://${p.sites[r.domain]}.rockstargames.com${r.path}`);
          const b = {
            ...i,
            link_url: k
          };
          return (0, t.jsxs)(D.A, {
            className: c ? "rockstargames-modules-core-headerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-headerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": n || "menuLink",
            title: e,
            to: k,
            target: a,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: d,
            onClick: e => {
              g(b), _(e)
            },
            onNavigate: m,
            children: [e, l && (0, t.jsx)("div", {
              className: "rockstargames-modules-core-headeradbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, t.jsx)("span", {
                className: "rockstargames-modules-core-headere49e290899be3c888ca5a4b6b13736a1",
                children: h.formatMessage(P.nofications_new)
              })
            })]
          })
        },
        B = ({
          id: e,
          text: a,
          target: s,
          href: i,
          location: n,
          ga: o,
          hasNotifications: c = !1,
          dataTestId: l,
          children: _ = [],
          activeSubNavId: d,
          setActiveSubNavId: u,
          setSubNavExtraHeight: m,
          reloadDocument: g = !1,
          onClickCallback: p = () => {},
          onNavigate: h
        }) => {
          const {
            windowWidth: k,
            windowHeight: b
          } = (0, w.useWindowResize)(), {
            track: v
          } = (0, f.useGtmTrack)(), {
            navOpen: y
          } = (0, f.useRockstarUserState)(), x = (0, r.useRef)(null), [j, C] = (0, r.useState)(0), [S, N] = (0, r.useState)(0), [M, z] = (0, r.useState)(!0);
          return (0, r.useEffect)((() => {
            d !== e && !1 === M && z(!0), d === e && z(!1)
          }), [d]), (0, r.useEffect)((() => {
            if (!x.current) return;
            C(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), N(a)
            }
          }), [x, k, b]), _.length > 0 ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("button", {
              className: "rockstargames-modules-core-headercc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": M,
              onClick: a => {
                a.stopPropagation(), v(o), d === e ? (u(-1), m(0)) : (u(e), m(j + S + S))
              },
              children: [(0, t.jsx)("span", {
                className: "rockstargames-modules-core-headerb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, t.jsx)("span", {
                className: "rockstargames-modules-core-headerff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, t.jsx)("nav", {
              className: "rockstargames-modules-core-headercbf6e64eadb6f965877129d539aa2dcd",
              ref: x,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${j}px`
              },
              children: _.map((e => (0, r.createElement)(H, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !y ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, t.jsx)(H, {
            text: a,
            target: s,
            href: i,
            location: n,
            ga: o,
            hasNotifications: c,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: y ? 0 : -1,
            reloadDocument: g,
            onNavigate: h
          })
        },
        $ = ({
          sc: e,
          location: a,
          onNavigate: s
        }) => {
          const {
            windowWidth: i,
            windowHeight: n
          } = (0, w.useWindowResize)(), c = (0, o.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: _,
            activeSubNavId: d,
            setActiveSubNavId: u,
            subNavExtraHeight: m,
            setSubNavExtraHeight: g
          } = E(), {
            setSelectedCharacterTuple: p,
            navOpen: h
          } = (0, f.useRockstarUserState)(), k = (0, w.useLocale)(), v = (0, w.toScLocaleString)(k), [y, x] = (0, r.useState)(""), j = `${e.login}?returnUrl=${y}&lang=${v}`, C = `${e.signup}&returnUrl=${y}&lang=${v}`, S = (0, r.useMemo)((() => (0, L.A)()), []), N = (0, r.useMemo)((() => {
            const e = ((e, a, s) => [{
              text: e.formatMessage(P.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: P.sc_link_sign_in.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(P.sc_link_join_social_club),
              href: s,
              ga: {
                event: "cta_signup",
                text: P.sc_link_join_social_club.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "signUpLink"
            }, O(e)])(c, j, C);
            return e
          }), [c, j, C, S]), [M, z] = (0, r.useState)(0), R = (0, r.createRef)(), I = () => {
            if (R.current) {
              const {
                current: e
              } = R, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), z(a + e)
              } else z(a)
            }
          };
          return (0, r.useEffect)((() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            x(e)
          }), [JSON.stringify(a)]), (0, r.useEffect)((() => {
            p(!1)
          }), []), (0, r.useEffect)((() => {
            I(), A()((() => {
              setTimeout(I, 0)
            }), 300)
          }), [i, n]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("nav", {
              className: "rockstargames-modules-core-headerf300d66bd02f52ac564238ca6125a091",
              children: (0, t.jsx)("div", {
                className: "rockstargames-modules-core-headerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: R,
                style: {
                  "--navWrap-max-height": `${m+M}px`
                },
                children: N.map((e => (0, r.createElement)(B, {
                  ...e,
                  activeSubNavId: d,
                  setActiveSubNavId: u,
                  setSubNavExtraHeight: g,
                  onNavigate: s,
                  key: e.text
                })))
              })
            }), (0, t.jsx)("div", {
              className: "rockstargames-modules-core-headerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, t.jsx)(b, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: l,
                setLanguageSelectorOpened: e => {
                  u(-1), _(e)
                },
                location: a,
                onLanguageChange: o.onLanguageChange
              })
            })]
          })
        };
      var V = s(72148),
        q = s(99280);
      var F = s(4572),
        U = s.n(F);
      const W = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        K = (0, r.forwardRef)((function({
          rank: e,
          size: a = "large",
          className: s,
          alt: r,
          testId: i,
          ...n
        }, o) {
          const c = W(e),
            l = (0, q.mergeProps)(n, {
              className: U()("rockstargames-modules-core-headerf54750ef62f8600000c94f0caba85986", s),
              "data-testid": i
            });
          return (0, t.jsxs)("div", {
            "data-size": a,
            ref: o,
            ...l,
            children: [(0, t.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-modules-core-headera3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": W(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: c
              })
            }), (0, t.jsx)("span", {
              className: "rockstargames-modules-core-headerd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        }));
      var Z = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const X = ({
        tagSize: e,
        platform: a,
        className: s = ""
      }) => {
        const {
          src: r,
          alt: i
        } = ((e, a) => {
          const s = "small" === a;
          switch (e) {
            case "pc":
              return {
                src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
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
        return (0, t.jsx)("img", {
          className: U()("rockstargames-modules-core-headerb0ff0045ed0326a46ca1e0867d2050c1", s),
          "data-testid": "platform-tag",
          "data-platform": a,
          "data-tag-size": e,
          src: r,
          alt: i
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
          tabIndex: i,
          onClick: n = () => {}
        }) => {
          const c = (0, o.useIntl)(),
            {
              currentCharId: l,
              setCurrentCharId: _
            } = (0, f.useRockstarUserState)(),
            d = (0, r.createRef)(),
            {
              platform: u,
              platformUsername: m,
              mugshotUrl: g,
              stats: p
            } = e,
            [h, k] = (0, r.useState)(g),
            b = l === e.index;
          return (0, r.useEffect)((() => {
            d.current && a && a(d?.current?.offsetWidth)
          }), [d]), (0, t.jsxs)("button", {
            className: Y.characterBtn,
            type: "button",
            "aria-hidden": b,
            ref: d,
            tabIndex: i,
            onClick: () => n(-1),
            children: [(0, t.jsx)("div", {
              className: Y.avatarFrame,
              children: (0, t.jsx)("div", {
                className: Y.avatar,
                "data-size": "small",
                children: (0, t.jsx)("img", {
                  className: Y.avatarImg,
                  src: h,
                  alt: c.formatMessage(P.profile_selector_mugshot, {
                    userName: m
                  }),
                  onError: () => {
                    k(s(5931))
                  },
                  "data-testid": Q
                })
              })
            }), (0, t.jsxs)("div", {
              className: Y.characterBtnStats,
              children: [(0, t.jsxs)("div", {
                className: Y.scCharBtnNames,
                children: [(0, t.jsx)(X, {
                  tagSize: Z.large,
                  platform: u
                }), (0, t.jsx)("div", {
                  className: Y.scUserName,
                  "data-size": "small",
                  "data-testid": J,
                  children: m
                })]
              }), (0, t.jsx)("div", {
                className: Y.scRp,
                children: (0, t.jsx)(K, {
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
      const se = "ProfileCard:characterName",
        te = "ProfileCard:avatar",
        re = "ProfileCard:bankValue",
        ie = "ProfileCard:cashValue",
        ne = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, f.useRockstarUser)(), {
            track: i
          } = (0, f.useGtmTrack)(), n = (0, o.useIntl)(), [c, l] = (0, r.useState)([]), [_, d] = (0, r.useState)(null), [u, m] = (0, r.useState)(null), [g, p] = (0, r.useState)(!1), [h, k] = (0, r.useState)(-1), [b, v] = (0, r.useState)([]), [w, y] = (0, r.useState)(0), x = s(5931), {
            platform: j
          } = e, [C, S] = (0, r.useState)("0"), [N, M] = (0, r.useState)("0"), z = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), R = () => {
            E((0, t.jsx)("img", {
              src: x,
              alt: n.formatMessage(P.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [I, E] = (0, r.useState)((0, t.jsx)("img", {
            className: ae.avatarImg,
            src: e.mugshotUrl,
            alt: n.formatMessage(P.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: R,
            "data-testid": te
          }));
          (0, r.useEffect)((() => {
            l(a.crews ?? [])
          }), [a.crews]), (0, r.useEffect)((() => {
            E((0, t.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: R,
              "data-testid": te
            })), S(z(e.stats.overview.bank.value)), M(z(e.stats.overview.cash.value)), y(parseInt(e.stats.overview.rank.value))
          }), [e, a.nickname]), (0, r.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (d(e.crewTag), m(e.crewColour), k(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [c]), (0, r.useEffect)((() => {
            const e = [];
            if (!g && h > -1)
              for (let a = 5; a > h; a -= 1) e.push((0, t.jsx)("div", {
                className: ae.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }), [h, g, u]);
          const T = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, t.jsxs)("div", {
            className: ae.profileDetails,
            onClick: T,
            onKeyUp: T,
            role: "button",
            tabIndex: -1,
            children: [(0, t.jsxs)("div", {
              className: ae.avatar,
              children: [I, (0, t.jsx)("div", {
                className: ae.avatarPlatform,
                "data-platform": j,
                children: (0, t.jsx)(X, {
                  className: ae.platformTag,
                  tagSize: Z.large,
                  platform: j
                })
              })]
            }), (0, t.jsxs)("div", {
              className: ae.profileStats,
              children: [(0, t.jsx)("div", {
                className: ae.scNames,
                children: (0, t.jsxs)("div", {
                  className: ae.scTagsNames,
                  children: [(0, t.jsx)("span", {
                    className: ae.scUserName,
                    "data-testid": se,
                    children: e.platformUsername
                  }), _ && (0, t.jsxs)("span", {
                    className: ae.scCrewName,
                    "data-arrow-tag": g,
                    children: [_, !g && (0, t.jsx)("div", {
                      className: ae.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, t.jsxs)("div", {
                className: ae.scProgress,
                children: [(0, t.jsx)(K, {
                  className: ae.scRpLevel,
                  rank: w
                }), (0, t.jsxs)("div", {
                  className: ae.scMoney,
                  children: [(0, t.jsxs)("span", {
                    className: ae.scCash,
                    "data-testid": ie,
                    children: ["$", N]
                  }), (0, t.jsxs)("span", {
                    className: ae.scBank,
                    "data-testid": re,
                    children: ["$", C]
                  })]
                })]
              })]
            })]
          })
        };
      let oe = "rockstargames-modules-core-headerb794a0e12537ad5fd506353133b9d60a",
        ce = "rockstargames-modules-core-headerdd4bcd955436c8a6982ee16756f7fd8b",
        le = "rockstargames-modules-core-headerc1e8d8d5b52081b34283a5ac0d377362",
        _e = "rockstargames-modules-core-headere8e5249dac92a2bc76788d0fe7d7dfb7",
        de = "rockstargames-modules-core-headerf64d91c845a3931140b8b2c6a47da81f";
      const ue = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: s = 17,
          slideChangeCallback: i = null,
          slideClickCallback: n = null,
          children: o = [],
          disablePager: c = !1,
          disableSwiper: l = !1
        }) => {
          const _ = (0, r.createRef)(),
            d = (0, V.ri)(_, !1),
            [u, m] = (0, r.useState)(!1),
            [f, g] = (0, r.useState)(!1),
            [p, h] = (0, r.useState)(0),
            [k, b] = (0, r.useState)(0),
            [v, w] = (0, r.useState)([s]),
            [y, x] = (0, r.useState)(v[0]),
            [j, C] = (0, r.useState)(252),
            [S, N] = (0, r.useState)(0),
            [M, z] = (0, r.useState)([]),
            [R, I] = (0, r.useState)([]),
            [E, P] = (0, r.useState)(!1),
            T = e => {
              if (!0 === u || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            A = a => {
              if (!0 === u || 0 === k || !0 === l) return;
              g(!0);
              const s = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                t = s > k ? 1 : -1,
                r = Math.abs(k - s);
              r > e ? (t > 0 ? (() => {
                if (!0 === u) return;
                m(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                h(e), x(v[e]), i && i(e)
              })() : (() => {
                if (!0 === u) return;
                m(!0);
                let e = p + 1 >= v.length ? v.length - 1 : p + 1;
                e < 0 && (e = 0), h(e), x(v[e]), i && i(e)
              })(), b(0)) : x(v[p] + r * t)
            },
            L = () => {
              !0 !== u && !0 !== l && (m(!0), !0 !== u && (x(v[p]), b(0)), g(!1))
            };
          return (0, r.useEffect)((() => {
            const e = [];
            o.forEach((() => {
              e.push((0, r.createRef)())
            })), z(e)
          }), [o]), (0, r.useEffect)((() => {
            if (M.length < 1) return;
            C(M[0]?.current?.clientWidth || 0);
            const e = M[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            N(s + a)
          }), [M]), (0, r.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              m(!1)
            }), a)
          }), [u, a]), (0, r.useEffect)((() => {
            w(o.map(((e, a) => (e => {
              let a = 0;
              const t = o.length;
              return 1 === t ? .5 * d - .5 * j - 2 * s + S : (0 === e && (a = s - e * j), e === t - 1 && t > 1 && (a = t * j * -1 + (d - (s - S))), e > 0 && e < t - 1 && (a = e * j * -1 + (.5 * d - .5 * j + .5 * S)), a)
            })(a)))), 1 === o.length ? P(!0) : P(!1)
          }), [_.current, o, d]), (0, r.useEffect)((() => {
            const e = (a = p, o.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            I(e)
          }), [o, p]), (0, r.useEffect)((() => {
            !0 !== c && !0 !== l || x(v[0])
          }), [l, c, v]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
              className: oe,
              ref: _,
              onTouchStart: T,
              onTouchMove: A,
              onTouchEnd: L,
              onMouseDown: T,
              onMouseMove: A,
              onMouseUp: L,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, t.jsx)("div", {
                className: le,
                "data-interaction-blocked": u,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${y}px)`
                },
                children: o.map(((e, a) => (0, t.jsx)("div", {
                  onClick: () => (e => {
                    null === n || f || n(e)
                  })(a),
                  className: ce,
                  ref: M[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), R.length > 1 && !1 === c && (0, t.jsx)("div", {
              className: _e,
              children: R.map(((e, a) => (0, t.jsx)("div", {
                className: de,
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
          hideCharacterList: s,
          refCharacterListDesktop: i,
          menuPadding: n,
          longCharList: c,
          setLongCharList: l,
          isMobileMode: _,
          setIsMobileMode: d,
          location: u,
          onNavigate: m
        }) => {
          const {
            windowWidth: g,
            windowHeight: p
          } = (0, w.useWindowResize)(), h = (0, o.useIntl)(), {
            languageSelectorOpened: k,
            setLanguageSelectorOpened: v,
            activeSubNavId: y,
            setActiveSubNavId: x,
            subNavExtraHeight: j,
            setSubNavExtraHeight: C,
            navOpened: S,
            setScNavOpened: N
          } = E(), [M, z] = (0, r.useState)(""), {
            webSettings: R
          } = (0, w.useRockstarWebSettings)(), {
            track: I
          } = (0, f.useGtmTrack)(), T = (0, w.useRockstarTokenPing)(), {
            data: D,
            loggedIn: H
          } = (0, f.useRockstarUser)(), {
            charactersNeeded: $,
            currentCharId: q,
            hasNotifications: F,
            navOpen: U,
            setCurrentCharId: W,
            setHasNotifications: K,
            setSelectedCharacterTuple: Z,
            setUserData: X
          } = (0, f.useRockstarUserState)(), [Y, J] = (0, r.useState)(null), [Q, ae] = (0, r.useState)(!1), [se, te] = (0, r.useState)(!1), [re, ie] = (0, r.useState)(0), oe = (0, r.createRef)(), ce = (0, V.ri)(oe, !1), le = (0, r.createRef)(), [_e, de] = (0, r.useState)(0), [fe, ge] = (0, r.useState)([]), [pe, he] = (0, r.useState)(244), ke = (0, r.useRef)(null), be = (0, r.useMemo)((() => (0, L.A)()), []), ve = (0, r.useMemo)((() => ((e, a, s, t, r) => [{
            text: e.formatMessage(P.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(P.sc_link_settings),
              location: {
                domain: L.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...G,
                text: P.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(P.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...G,
                text: P.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(P.sc_link_game_activation),
              location: {
                domain: L.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...G,
                text: P.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(P.sc_link_notifications),
            location: {
              domain: L.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: t,
            ga: {
              ...G,
              text: P.sc_link_notifications.defaultMessage,
              location: {
                domain: L.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(P.sc_link_crews),
            location: {
              domain: L.C.socialClub,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...G,
              text: P.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(P.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(P.sc_link_my_friends),
              location: {
                domain: L.C.socialClub,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...G,
                text: P.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(P.sc_link_import_friends),
              location: {
                domain: L.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...G,
                text: P.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(P.sc_link_find_friends),
              location: {
                domain: L.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...G,
                text: P.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, O(e), {
            text: e.formatMessage(P.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...G,
              text: P.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(h, e, D, F, M, window)), [h, e, D, F, M, be]), we = () => {
            te(n + pe * re < ce)
          }, ye = () => {
            if (le.current) {
              const {
                current: e
              } = le, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), de(a + e)
              } else de(a)
            }
          };
          return (0, r.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            be.currentSite?.site === L.C.socialClub && (e = encodeURIComponent("/")), z(e)
          }), [u]), (0, r.useEffect)((() => {
            ge(D?.characters?.[$] ?? [])
          }), [D, $]), (0, r.useEffect)((() => {
            D && X(D)
          }), [D]), (0, r.useEffect)((() => {
            const e = D?.characters?.gtao ?? [];
            if (null !== H && !e.length) return void Z(!1);
            if (null == q || !e.length) return;
            const a = e?.[q] ?? e?.[0] ?? null;
            Z(!!a?.platform && [a.platform, a.characterSlot])
          }), [q, D, H]), (0, r.useEffect)((() => {
            (async () => {
              if (!D?.id || !U) return;
              const {
                count: e
              } = await (0, w.coreScApiFetch)("notification/count", {
                pingBearer: T
              });
              K(e > 0)
            })()
          }), [D, U]), (0, r.useEffect)((() => {
            we()
          }), [pe]), (0, r.useEffect)((() => {
            s(!0), d(g < 768), d(g < 768 || p < 649)
          }), [g, p]), (0, r.useEffect)((() => {
            let e = fe.length - 1;
            e < 0 && (e = 0), ie(e);
            const a = fe.length > 0 ? fe[q] ?? fe[0] : null;
            a && (J(a), fe.length > 1 ? ae(!0) : ae(!1), l(fe.length - 1 > 3))
          }), [q, fe]), (0, r.useEffect)((() => {
            we()
          }), [re, _, g, fe]), (0, r.useEffect)((() => {
            ye(), A()((() => {
              setTimeout(ye, 0)
            }), 300)
          }), [g, p]), (0, r.useEffect)((() => {
            const e = R?.currentCharId ?? 0;
            e !== q && W(Math.max(0, Math.min(e, fe.length - 1)))
          }), [fe, R]), (0, t.jsxs)(t.Fragment, {
            children: [null !== Y && "gtao" === $ && (0, t.jsxs)("div", {
              className: me.scProfile,
              ref: ke,
              tabIndex: -1,
              "aria-label": h.formatMessage(P.profile_selector_profile_card),
              children: [(0, t.jsx)(ne, {
                s: me,
                character: Y
              }), !0 === Q && (0, t.jsxs)("div", {
                className: me.scCharacterSelector,
                children: [(0, t.jsx)("button", {
                  className: me.scCharacterSelectBtn,
                  "aria-hidden": !U,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !a;
                    s(t), I({
                      event: t ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, t.jsx)("span", {
                    children: (0, t.jsx)(o.FormattedMessage, {
                      ...P.profile_selector_switch_character
                    })
                  })
                }), !_ && (0, t.jsx)("div", {
                  className: me.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": a,
                  ref: i,
                  children: fe.map((e => (0, t.jsx)(ee, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: he
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), _ && (0, t.jsx)("div", {
                  className: me.scCharacterList,
                  "data-single-item": 2 === fe.length,
                  "data-swiper-disabled": se,
                  "aria-hidden": a,
                  ref: oe,
                  children: (0, t.jsx)(ue, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      I({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: se,
                    disableSwiper: se,
                    children: fe.filter(((e, a) => a !== q)).map((e => (0, r.createElement)(ee, {
                      characterData: e,
                      setMobileCardWidth: he,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, t.jsxs)("nav", {
              className: me.nav,
              "aria-hidden": !U,
              children: [(0, t.jsx)("button", {
                className: me.navHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": U,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || N(!0)
                },
                "data-testid": "playerButton",
                children: (0, t.jsx)("span", {
                  className: me.navHeaderText,
                  children: D.nickname
                })
              }), (0, t.jsx)("div", {
                className: me.navWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: le,
                style: {
                  "--navWrap-max-height": `${_e+j}px`
                },
                children: ve.map(((e, a) => (0, r.createElement)(B, {
                  ...e,
                  id: a,
                  activeSubNavId: y,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: C,
                  onNavigate: m,
                  key: e.text
                })))
              })]
            }), (0, t.jsx)("div", {
              className: me.scLanguageSelector,
              style: {
                visibility: U ? null : "hidden"
              },
              children: (0, t.jsx)(b, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: k,
                setLanguageSelectorOpened: v,
                location: u,
                onLanguageChange: o.onLanguageChange
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
        he = k((({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: i
          } = (0, w.useWindowResize)(), n = (0, o.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: l,
            setActiveSubNavId: _,
            navOpened: d,
            setAccountNavOpened: u,
            charListHidden: m,
            setCharListHidden: g
          } = E(), [p, h] = (0, r.useState)(!1), {
            navHidden: k = !1
          } = (0, w.useState)(), {
            loggedIn: b
          } = (0, f.useRockstarUser)(), {
            currentCharId: y,
            navOpen: x,
            setNavOpen: j,
            userData: C
          } = (0, f.useRockstarUserState)(), {
            track: S
          } = (0, f.useGtmTrack)(), [N, M] = (0, r.useState)(!1), z = (0, r.useRef)(), [R, I] = (0, r.useState)(0), T = (0, r.createRef)(), [A, L] = (0, r.useState)(!1), [G, O] = (0, r.useState)(0), [D, H] = (0, r.useState)(!1), {
            mutateWebSettings: B,
            webSettings: V
          } = (0, w.useRockstarWebSettings)(), q = (0, r.useCallback)((e => {
            g(e), z.current && !0 === e && (z.current.scrollTop = 0)
          }), [z]);
          return (0, r.useEffect)((() => {
            null !== y && V.currentCharId !== y && B({
              key: "currentCharId",
              value: y
            }), !1 === b ? B({
              key: "currentCharId",
              value: null
            }) : b && C && C?.accountSynced && S({
              event: "account_synced"
            })
          }), [y, b, C?.accountSynced]), (0, r.useEffect)((() => {
            z.current && (!1 === m && !1 === N && (z.current.style.height = `${z.current.scrollHeight}px`), !0 === m && (z.current.style.height = null))
          }), [m, z, N]), (0, r.useEffect)((() => {
            const e = () => {
                j(!1), q(!0)
              },
              a = a => {
                const s = T?.current && a?.composedPath().includes(T.current);
                x && !s && e()
              },
              s = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", s), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", s)
            }
          }), [T]), (0, r.useEffect)((() => {
            j(!1), q(!0)
          }), [k]), (0, r.useEffect)((() => {
            if (T.current) {
              const {
                current: e
              } = T, a = window.getComputedStyle(e);
              I(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [T]), (0, r.useEffect)((() => {
            H(window.navigator.userAgent.includes("Mac"))
          }), []), (0, r.useEffect)((() => {
            T.current && h(T?.current?.scrollHeight >= i)
          }), [T, i]), (0, r.useEffect)((() => {
            x || (_(-1), l(!1))
          }), [x]), (0, r.useEffect)((() => {
            c && (m || q(!0), d && (u(!1), _(-1)))
          }), [c]), (0, r.useEffect)((() => {
            d && (c && l(!1), m || q(!0))
          }), [d]), void 0 === b ? null : (0, t.jsxs)(v.RemoveScroll, {
            enabled: !!x,
            removeScrollBar: !1,
            children: [(0, t.jsxs)("div", {
              className: [ge.menu, x ? ge.navOpen : ""].join(" "),
              "data-logged-in": b,
              "data-mac-browser": D,
              "data-scroll-mode": p,
              ref: T,
              "aria-hidden": !x,
              children: [(0, t.jsx)("button", {
                className: ge.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  O(a)
                },
                onTouchMove: e => {
                  if (0 === G) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(G - a) > 1 && (O(0), j(!1))
                },
                children: (0, t.jsx)("img", {
                  className: ge.dragHandle,
                  src: s(35902),
                  alt: n.formatMessage(P.sc_menu_drag_handle)
                })
              }), b ? (0, t.jsx)(fe, {
                sc: pe,
                charListHidden: m,
                hideCharacterList: q,
                refCharacterListDesktop: z,
                menuPadding: R,
                longCharList: N,
                setLongCharList: M,
                isMobileMode: A,
                setIsMobileMode: L,
                location: e,
                onNavigate: a
              }) : (0, t.jsx)($, {
                sc: pe,
                navOpen: x,
                location: e,
                onNavigate: a
              })]
            }), (0, t.jsx)("div", {
              className: [ge.scOverlay, x ? ge.navOpen : ""].join(" "),
              "data-logged-in": b
            })]
          })
        })),
        ke = k((({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, o.useIntl)(),
            {
              data: i,
              loggedIn: n
            } = (0, f.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: l,
              navOpen: _,
              setNavOpen: d
            } = (0, f.useRockstarUserState)(),
            {
              track: u
            } = (0, f.useGtmTrack)(),
            [m, g] = (0, r.useState)(),
            [p, h] = (0, r.useState)(!1),
            [k, b] = (0, r.useState)([]);
          (0, r.useEffect)((() => {
            b(i?.characters?.[c] ?? [])
          }), [i, c]);
          const v = (0, r.useCallback)((a => {
            a.stopPropagation(), d(!_), 1 == !_ && e(null), u({
              event: "account_menu_click",
              element_placement: "account menu",
              text: _ ? "close" : "open"
            })
          }), [_]);
          return (0, r.useEffect)((() => {
            h(!!k?.[l]?.mugshotUrl)
          }), [k, l]), (0, r.useEffect)((() => {
            g((() => {
              switch (n) {
                case void 0:
                  return s(5931);
                case !1:
                  return s(32810);
                case !0:
                  return k?.[l]?.mugshotUrl ?? i?.avatar
              }
            })())
          }), [i, k, l, n]), (0, t.jsxs)("button", {
            className: "rockstargames-modules-core-headeree811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(_ ? P.sc_menu_close : P.sc_menu_open),
            "aria-expanded": _,
            type: "button",
            onClick: v,
            "data-mugshot": p,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(n),
            children: [(0, t.jsx)("img", {
              className: "rockstargames-modules-core-headera917b58ca28b68550a1aa5d99c7eb998",
              src: m,
              alt: i?.nickname || "",
              onError: () => {
                let e = null;
                e = s(p ? 5931 : 73091), g(e)
              }
            }), n && p && (0, t.jsx)("div", {
              className: "rockstargames-modules-core-headerc06123ceae7ca4759ec8b1a5197823db",
              children: (0, t.jsx)(X, {
                platform: k?.[l]?.platform,
                tagSize: Z.small
              })
            }), n && (0, t.jsx)("div", {
              className: "rockstargames-modules-core-headerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": k?.[l]?.platform ?? null
            })]
          })
        }));
      let be = {
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
        we = k((() => {
          const e = (0, o.useIntl)(),
            {
              track: a
            } = (0, f.useGtmTrack)(),
            [s, i] = (0, r.useState)(null),
            [n, c] = (0, r.useState)(0),
            [l, _] = (0, r.useState)(!1),
            [d, u] = (0, r.useState)(!1),
            m = (0, r.createRef)(),
            [g, p] = (0, r.useState)([]),
            [h, k] = (0, r.useState)(244),
            {
              windowWidth: b
            } = (0, w.useWindowResize)(),
            [v, y] = (0, r.useState)(!1),
            x = (0, V.ri)(m, !1),
            {
              data: j,
              loggedIn: C
            } = (0, f.useRockstarUser)(),
            {
              charactersNeeded: S,
              currentCharId: N,
              setCurrentCharId: M
            } = (0, f.useRockstarUserState)(),
            {
              charListHidden: z,
              setCharListHidden: R
            } = E();
          (0, r.useEffect)((() => {
            void 0 === N && M(0)
          }), [N]), (0, r.useEffect)((() => {
            let e = g.length - 1;
            e < 0 && (e = 0), c(e);
            const a = g.length > 0 ? g[N] ?? g[0] : null;
            a && (i(a), g.length > 1 ? u(!0) : u(!1))
          }), [N, g]), (0, r.useEffect)((() => {
            p(j?.characters?.[S] ?? [])
          }), [j, S]), (0, r.useEffect)((() => {
            I()
          }), [h, n, v, b, g]), (0, r.useEffect)((() => {
            y(b < 1024)
          }), [b]);
          const I = () => {
              _(h * n < x)
            },
            T = e => {
              const s = g.filter(((e, a) => a !== N)).map((e => e));
              M(s[e].index), a({
                event: "character_selector_select",
                text: ve[s[e].platform],
                position: s[e].index
              })
            };
          return null !== s && "gtao" === S && C ? (0, t.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(P.profile_selector_profile_card),
            children: [(0, t.jsx)(ne, {
              s: be,
              character: s
            }), !0 === d && (0, t.jsxs)("div", {
              className: be.scCharacterSelector,
              children: [(0, t.jsx)("button", {
                className: be.scCharacterSelectBtn,
                "data-list-closed": z,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !z;
                  R(s), a({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: (0, t.jsx)("span", {
                  className: be.scCharacterBtnText,
                  children: (0, t.jsx)(o.FormattedMessage, {
                    ...P.profile_selector_switch_character
                  })
                })
              }), !v && (0, t.jsx)("div", {
                className: be.scCharacterList,
                "aria-hidden": z,
                children: g.filter(((e, a) => a !== N)).map(((e, a) => (0, t.jsx)(ee, {
                  tabIndex: z ? -1 : 0,
                  onClick: () => T(a),
                  characterData: e,
                  setMobileCardWidth: k
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
              }), v && (0, t.jsx)("div", {
                className: be.scCharacterList,
                "data-single-item": 2 === g.length,
                "data-swiper-disabled": l,
                "aria-hidden": z,
                ref: m,
                children: (0, t.jsx)(ue, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    a({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  slideClickCallback: T,
                  disablePager: l,
                  disableSwiper: l,
                  children: g.filter(((e, a) => a !== N)).map((e => (0, r.createElement)(ee, {
                    characterData: e,
                    setMobileCardWidth: k,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: z ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }))
    },
    73091: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f97af80b5511804c9842052dacb20f2a.png"
    },
    77432: (e, a, s) => {
      var t = s(15036).Symbol;
      e.exports = t
    },
    85531: e => {
      var a = /\s/;
      e.exports = function(e) {
        for (var s = e.length; s-- && a.test(e.charAt(s)););
        return s
      }
    },
    87625: (e, a, s) => {
      var t = s(85531),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, t(e) + 1).replace(r, "") : e
      }
    }
  }
]);