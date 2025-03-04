! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0233c17f-8b1a-4d33-a484-b01c2b062e27", e._sentryDebugIdIdentifier = "sentry-dbid-0233c17f-8b1a-4d33-a484-b01c2b062e27")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3227, 5523, 7904], {
    36205: (e, a, t) => {
      t.d(a, {
        A: () => i
      });
      var s = t(62229),
        o = t(9623),
        r = t(95966);
      var n = t(91029);
      const i = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, s.useState)(""), i = (0, o.useNavigate)(), c = (0, r.useMutateState)();
        return (0, n.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), c({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            i(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, n.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, n.jsx)("input", {
            autoComplete: "off",
            defaultValue: t,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    12363: (e, a, t) => {
      t.d(a, {
        A: () => l
      });
      var s = t(62229),
        o = t(81788);
      const r = (0, o.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var n = t(9623);
      const i = "rockstargames-sites-rockstargamesea8cf4797c830e5b5dad68b2ec814e67";
      var c = t(65555),
        _ = t(91029);
      const l = (0, c.g)((e => {
        let {
          children: a,
          to: t = "#",
          reloadDocument: c = !1,
          alt: l = "",
          autoBlank: d = !1,
          onClick: u = (() => {}),
          focused: m = !1,
          ...p
        } = e;
        const f = (0, s.useRef)(null),
          g = (0, o.useIntl)(),
          b = !/^(https?|mailto):/i.test(t),
          k = /^#/.test(t),
          h = p?.target ?? (d ? "_blank" : "_self"),
          {
            ...y
          } = p;
        let w = "";
        if ("aria-label" in y && y["aria-label"] && (w = "_blank" === h ? `${y["aria-label"]} ${g.formatMessage(r.aria_label_open_new_window)}` : y["aria-label"]), (0, s.useEffect)((() => {
            m && f?.current && f.current.focus()
          }), [f?.current, m]), k) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), u && u(e)
          };
          return (0, _.jsxs)("a", {
            title: l,
            href: t,
            onClick: e,
            ...y,
            "aria-label": w,
            ref: f,
            children: [a, "_blank" === h && !w && (0, _.jsx)("span", {
              className: i,
              children: g.formatMessage(r.aria_label_open_new_window)
            })]
          })
        }
        if (b) return (0, _.jsxs)(n.NavLink, {
          title: l,
          to: t,
          onClick: u,
          ...y,
          "aria-label": w,
          ref: f,
          reloadDocument: c,
          children: [a, "_blank" === h && !w && (0, _.jsx)("span", {
            className: i,
            children: g.formatMessage(r.aria_label_open_new_window)
          })]
        });
        const v = Object.keys(y).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: p[a]
        })), {});
        return "function" == typeof v?.className && delete v.className, (0, _.jsxs)("a", {
          href: t,
          title: l,
          onClick: u,
          target: h,
          ...v,
          "aria-label": w,
          ref: f,
          children: [a, "_blank" === h && !w && (0, _.jsx)("span", {
            className: i,
            children: g.formatMessage(r.aria_label_open_new_window)
          })]
        })
      }))
    },
    3025: (e, a, t) => {
      t.d(a, {
        A: () => i
      });
      var s = t(62229),
        o = t(74309),
        r = t(91029);
      class n extends s.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e?.message ? e.toString() : "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        render() {
          return null !== this.state.error.code ? (0, r.jsx)(o.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const i = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, r.jsx)(n, {
            header: a,
            children: (0, r.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    74309: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => c
      });
      var s = t(62229),
        o = t(95966),
        r = t(12363),
        n = t(36205);
      var i = t(91029);
      const c = (0, o.withTranslations)((e => {
        let {
          error: a,
          t,
          domain: o = ""
        } = e;
        console.error({
          error: a
        });
        let c = a?.message ?? t("error-404-new");
        c = t("error-404-new");
        const _ = a?.code ?? 398,
          l = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          l && l?.current && l.current.focus()
        }), [l]), (0, i.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e",
          children: [(0, i.jsx)("h3", {
            tabIndex: -1,
            ref: l,
            children: `${c} (${_})`
          }), (0, i.jsx)(r.A, {
            to: "/",
            children: t("Home")
          }), "clr" !== o && (0, i.jsx)(n.A, {})]
        })
      }))
    },
    65555: (e, a, t) => {
      t.d(a, {
        g: () => r
      });
      var s = t(81788);
      const o = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","rp_icon":"RP-Kategorie"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","profile_silhouette_mugshot":"Silhouette mugshot","rp_icon":"RP Category"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","profile_silhouette_mugshot":"Foto de silueta","rp_icon":"Categoría de RP"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","profile_silhouette_mugshot":"Foto de una silueta","rp_icon":"Categoría de RP"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","profile_silhouette_mugshot":"Photo d\'identité : silhouette","rp_icon":"Catégorie : RP"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","profile_silhouette_mugshot":"Foto segnaletica silhouette","rp_icon":"Categoria RP"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","profile_silhouette_mugshot":"シルエット顔写真","rp_icon":"RPカテゴリー"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","profile_silhouette_mugshot":"실루엣 머그샷","rp_icon":"RP 카테고리"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","profile_silhouette_mugshot":"Zdjęcie sylwetki","rp_icon":"Poziom RP"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","profile_silhouette_mugshot":"Foto da silhueta","rp_icon":"Categoria de RP"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","profile_silhouette_mugshot":"Силуэт игрока","rp_icon":"Категория опыта"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","profile_silhouette_mugshot":"剪影面部照片","rp_icon":"声望值类别"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","profile_silhouette_mugshot":"罪犯檔案照剪影","rp_icon":"聲望值類別"}}'),
        r = e => (0, s.withIntl)(e, o)
    },
    18372: (e, a, t) => {
      t.d(a, {
        A: () => w,
        K: () => p
      });
      var s = t(95966);
      const o = (0, s.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, s.makeVar)(null)
        }),
        r = e => o(e),
        n = (0, s.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, s.makeVar)(!1)
        }),
        i = e => n(e),
        c = (0, s.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, s.makeVar)(!1)
        }),
        _ = e => c(e),
        l = (0, s.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, s.makeVar)((0, s.webSettingsReactive)()?.currentCharId)
        }),
        d = e => l(e),
        u = (0, s.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, s.makeVar)(null)
        }),
        m = e => u(e),
        p = (0, s.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, s.makeVar)(null)
        }),
        f = (0, s.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        g = e => f(e),
        b = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        k = e => b(e),
        h = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        y = e => h(e),
        w = () => {
          const e = (0, s.useReactiveVar)(f),
            a = (0, s.useReactiveVar)(b),
            t = (0, s.useReactiveVar)(l),
            p = (0, s.useReactiveVar)(o),
            w = (0, s.useReactiveVar)(c),
            v = (0, s.useReactiveVar)(u);
          return {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: t,
            hasNotifications: w,
            navOpen: p,
            userData: (0, s.useReactiveVar)(h),
            selectedCharacterTuple: v,
            jumpScMenuFocus: (0, s.useReactiveVar)(n),
            setCharactersNeeded: g,
            setCrewsNeeded: k,
            setCurrentCharId: d,
            setHasNotifications: _,
            setNavOpen: r,
            setSelectedCharacterTuple: m,
            setUserData: y,
            setJumpScMenuFocus: i
          }
        }
    },
    7607: (e, a, t) => {
      t.r(a), t.d(a, {
        GtmProvider: () => s.UN,
        RockstarUserProvider: () => s.iR,
        useGtmTrack: () => s.h,
        useRockstarUser: () => s.Wx,
        useRockstarUserState: () => o.A
      });
      var s = t(57269),
        o = t(18372)
    },
    57269: (e, a, t) => {
      t.d(a, {
        UN: () => l,
        iR: () => w,
        h: () => u,
        Wx: () => v
      });
      var s = t(62229),
        o = t(95966),
        r = t(7607),
        n = t(2894);
      const i = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var c = t(91029);
      const _ = (0, o.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        l = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const l = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, s.useState)([]), [c, _] = (0, s.useState)([]), [l, d] = (0, s.useState)(null), {
                data: u,
                loggedIn: m
              } = (0, r.useRockstarUser)(), {
                hasGtaPlus: p
              } = u ?? {}, f = (0, n.bn)(), g = (e, s) => {
                const r = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = s ?? {};
                    (0, o.track)({
                      ...e,
                      ...a
                    }), r.push(e)
                  }
                })), t([...a, ...r])
              };
              (0, s.useEffect)((() => {
                if (u && null !== m) {
                  const e = b(u);
                  c.length && e && g(c, e), d(e)
                } else e || c.length && g(c)
              }), [u, m, c]), (0, s.useEffect)((() => {
                const e = c.filter((e => -1 === a.indexOf(e)));
                _(e)
              }), [a]);
              const b = e => {
                const a = [],
                  t = [],
                  s = [],
                  o = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [r, n] = e;
                  n.length && n.forEach((e => {
                    const n = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === r) {
                      t.includes(n) || t.push(n), s.includes(n) || "1" !== e.stats?.overview?.hasGtaPlus?.value || s.push(n);
                      const a = `${r}_${e.platform}`;
                      o.includes(a) || o.push(a)
                    }
                    a.includes(n) || a.push(n)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [t, s] = e;
                  o.push(`${t}_${s}`), a.includes(s) || a.push(s)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: m ?? !1,
                  gta_plus_active: !!m && Boolean(p),
                  platforms_played: a.length ? a.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: o.length ? o.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: t.length ? t.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: s.length ? s.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: f
                }
              };
              return {
                track: e => {
                  if (void 0 === m || !u || !l) {
                    const a = [...c];
                    return a.push({
                      ...e
                    }), _(a)
                  }
                  return (0, o.track)({
                    ...e,
                    ...l
                  })
                }
              }
            }(a),
            d = (0, s.useMemo)((() => l), [l, a]);
          return (0, c.jsx)(_.Provider, {
            value: d,
            children: t
          })
        },
        d = {
          track: () => null
        },
        u = () => (0, s.useContext)(_) ?? d;
      var m = t(18372);
      var p = t(43425),
        f = t.n(p);
      var g = t(29830),
        b = t(48004);
      const k = () => {
          const {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: t
          } = (0, m.A)(), r = (0, o.useRockstarToken)(), [n, i] = (0, s.useState)(), [c, _] = (0, o.useRockstarTokenReactive)(), l = (0, o.useRockstarTokenPing)(), [d, u] = (0, s.useState)(), [p, k] = (0, s.useState)(!1), [h, y] = (0, s.useState)(), w = void 0 === d, [v, x] = (0, s.useState)(1);
          return (0, s.useEffect)((() => {
            e && x((e => e + 1))
          }), [e]), (0, s.useEffect)((() => {
            a && x((e => e + 1))
          }), [a]), (0, s.useEffect)((() => {
            0 === v && i({
              ...n,
              accountSynced: !0
            })
          }), [v]), (0, s.useEffect)((() => {
            e && y("1" === n?.characters?.[e]?.[t]?.stats?.overview?.hasGtaPlus?.value)
          }), [e, t, n]), (0, s.useEffect)((() => {
            i({
              ...n,
              hasGtaPlus: h
            })
          }), [h]), (0, s.useEffect)((() => {
            if (null === r) return void l();
            const e = !!r;
            if (e || p || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: a,
                      tokenPingExpires: t
                    } = e;
                    const {
                      gateway: s,
                      silentCheck: r
                    } = (0, o.getConfigForDomain)(), n = {
                      method: "POST",
                      body: `fingerprint=${await f().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, i = await fetch(r, n);
                    if (200 !== i.status) return void a(!1);
                    const c = `${s}?code=${await i.json()}`,
                      _ = await fetch(c, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: l,
                        tokenExpiresTime: d
                      } = await _.json();
                    return a(l), t(d), l
                  })({
                    token: c,
                    tokenPingExpires: _
                  })
                } catch (e) {}
              })(), k(!0)), !e && p && u(!1), e) {
              const a = (e => {
                let {
                  bearerToken: a
                } = e;
                const t = (0, g.s)(a),
                  {
                    host: s
                  } = (0, o.getConfigForDomain)(),
                  r = parseInt(t.nameid),
                  n = t["scAuth.Nickname"],
                  i = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  c = new Date(t["scAuth.MemberSince"]),
                  _ = new Date,
                  l = (0, b.M)(_, c) < 12;
                return {
                  id: r,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: i,
                  isNewAccount: l,
                  nickname: n,
                  profile_link: `https://${s}.rockstargames.com/member/${n}?id=${r}`
                }
              })({
                bearerToken: r
              });
              i({
                ...n,
                ...a
              }), u(e), (0, m.K)(a.id)
            }
          }), [r, p]), (0, s.useEffect)((() => {
            (async () => {
              if (d && n && a && !n?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: t
                  } = e;
                  const {
                    crews: s
                  } = await (0, o.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: t
                    }
                  });
                  return s
                })({
                  pingBearer: l,
                  rockstarId: n.id
                });
                i({
                  ...n,
                  crews: e
                }), x((e => e - 1))
              }
            })()
          }), [n?.nickname, a, d]), (0, s.useEffect)((() => {
            (async () => {
              if (d && n && !n?.gamesPlayed) {
                const e = await (async e => {
                  let {
                    pingBearer: a
                  } = e;
                  const {
                    all: t
                  } = await (0, o.coreScApiFetch)("profile/lastPlayed", {
                    pingBearer: a
                  });
                  return t
                })({
                  pingBearer: l
                });
                i({
                  ...n,
                  gamesPlayed: e
                }), x((e => e - 1))
              }
            })()
          }), [n?.nickname, d]), (0, s.useEffect)((() => {
            (async () => {
              if (d && n && "gtao" === e && !n?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: a
                } = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: t,
                    rockstarId: s
                  } = e;
                  const r = [],
                    n = await (0, o.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  await (n?.platforms?.reduce((async (e, t) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                    const s = await (0, o.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                      pingBearer: a
                    });
                    s?.status && s?.result?.map((e => {
                      const {
                        stats: a
                      } = e, {
                        overview: s
                      } = a, {
                        rank: o
                      } = s;
                      if ("0" === o.value) return;
                      const n = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return r.push({
                        ...e,
                        mugshotUrl: n,
                        platform: t
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: i,
                    accounts: c
                  } = await (0, o.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  if (!i || !c.length) return {
                    gtaoCharacters: r,
                    linkedAccounts: []
                  };
                  const _ = c[0],
                    {
                      rockstarAccount: l,
                      linkedAccounts: d
                    } = _;
                  if (l?.rockstarId !== s) return {
                    gtaoCharacters: r,
                    linkedAccounts: []
                  };
                  if (!r.length) return {
                    gtaoCharacters: r,
                    linkedAccounts: _.linkedAccounts
                  };
                  const u = t;
                  let m = "",
                    p = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? m = e.userName : "np" === e?.onlineService && (p = e.userName), e))), r.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), r.map(((e, a) => (e.platformUsername = u, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = p || u), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = m || u), e))), {
                    gtaoCharacters: r,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: l,
                  nickname: n.nickname,
                  rockstarId: n.id
                });
                i({
                  ...n,
                  characters: {
                    ...n.characters,
                    gtao: e
                  },
                  linkedAccounts: a
                }), x((e => e - 1))
              }
            })()
          }), [e, n?.nickname, d]), {
            data: n,
            loggedIn: d,
            loading: w
          }
        },
        h = {},
        y = (0, o.setContextItem)({
          context: (0, s.createContext)(h),
          key: "userContext"
        }),
        w = e => {
          let {
            children: a
          } = e;
          const t = k(),
            o = (0, s.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, c.jsx)(y.Provider, {
            value: o,
            children: a
          })
        },
        v = () => (0, s.useContext)(y)
    },
    53227: (e, a, t) => {
      t.r(a), t(11138), t(10206), t(75177), t(34554), t(87065), t(15222), t(77655), t(8075), t(13950), t(66699), t(15980), t(28681), t(62563), t(11416), t(86670), t(47934), t(42555), t(17982), t(63761);
      var s = t(95966),
        o = t(14070),
        r = t(62229),
        n = t(9623),
        i = t(60188),
        c = t(41263),
        _ = t.n(c),
        l = t(91029);
      const d = e => {
        let {
          navigationData: a,
          searchConfig: t,
          globalNavigationComponent: s
        } = e;
        const o = (0, n.useLocation)(),
          i = (0, n.useNavigate)(),
          c = s,
          _ = e => {
            e?.startsWith("http") ? window.location.href = e : i(e)
          },
          d = (0, r.useMemo)((() => a.reduce(((e, a) => a.appearancePaths ? [...e, ...a.appearancePaths.map((e => ({
            element: (0, l.jsx)(c, {
              navData: a,
              location: o,
              onNavigate: _,
              searchConfig: t,
              routeOptions: e.options
            }),
            path: e.path
          })))] : e), [])), [o, a, t]);
        return (0, n.useRoutes)(d)
      };
      var u = t(55274),
        m = t.n(u),
        p = t(90);
      const f = "__MFE_GLOBAL_HOOK__",
        g = () => {
          const e = window;
          e[f]?.history || (e[f] = Object.assign(e[f] || {}, {
            history: (0, p.createBrowserHistory)()
          }))
        },
        b = () => {
          const {
            pathname: e
          } = (0, n.useLocation)();
          return (0, r.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var k = t(2918);
      const h = (0, r.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: s,
          children: o,
          requireUser: n
        } = e, {
          track: i
        } = (0, k.useGtmTrack)(n), [c, _] = (0, r.useState)(a?.current);
        return (0, r.useEffect)((() => {
          a?.current && _(a.current)
        }), [a]), ((e, a, t) => {
          const [s, o] = (0, r.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: n,
            scrollY: i
          } = s;
          (0, r.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && o((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, r.useEffect)((() => {
            o({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const c = (0, r.useCallback)((() => {
            const e = document.documentElement,
              r = document.body,
              i = t?.scrollTop || e.scrollTop || r.scrollTop,
              _ = t?.scrollHeight || e.scrollHeight || r.scrollHeight,
              {
                clientHeight: l
              } = e,
              d = i / (_ - l) * 100;
            if (n) {
              const e = Math.min(...n, _);
              if (d >= e) {
                const s = n.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", c), a && a({
                  scrollY: e,
                  scrollPercent: d,
                  remainingDepths: s
                }), o({
                  scrollY: e,
                  scrollDepths: s
                })
              }
            } else o({
              ...s,
              scrollY: d
            })
          }), [n, t, a]);
          (0, r.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
          }), [c])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          i({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof s && s(a)
        }), c), o
      }));
      h.displayName = "ScrollTracker";
      const y = h;
      var w = t(95945),
        v = t.n(w),
        x = t(63582);
      const z = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: o,
            height: i,
            onClose: c,
            rect: _ = {
              left: 0,
              top: 0
            },
            contentStyle: d = {},
            contentClassName: u = "",
            width: m,
            fadeIn: p = !0,
            cardIds: f,
            activeId: g,
            theme: b,
            title: h,
            gtm: y = {},
            aspectRatio: w = "default",
            cardDimensions: z
          } = a, {
            left: R,
            top: j
          } = _, S = f?.indexOf(g), [C, G] = (0, r.useState)(f?.length || 0), {
            track: P
          } = (0, k.useGtmTrack)(), E = null !== f && (f?.length || 0) > 1 && ("flag_bg" === b || "fob" === z?.size), N = window.location.href.includes("cms5"), [, I] = (0, n.useSearchParams)(), [M, A] = (0, r.useState)(!1), [V, B] = (0, r.useState)(!1), [T, q] = (0, r.useState)(), L = e => {
            "number" == typeof e && f && e < f.length && e > -1 && I({
              info: f[e].toString()
            })
          }, D = () => {
            const e = "number" == typeof S && S > -1 ? S - 1 : 0;
            L(e), P({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: h,
              position: S
            })
          }, U = () => {
            const e = "number" == typeof S && S > -1 ? S + 1 : 0;
            L(e), P({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: h,
              position: S
            })
          };
          (0, r.useEffect)((() => {
            G(f?.length || 0)
          }), [f?.length]), (0, r.useEffect)((() => {
            null !== S && null !== f && L(S)
          }), [S, f]), (0, r.useEffect)((() => {
            const e = f?.findIndex((e => e === g));
            "number" == typeof e && (B(e <= 0), A(e >= C - 1))
          }), [f, g, C]);
          const [H] = (0, r.useState)({
            y: j,
            x: R,
            top: 0,
            left: 0,
            width: m,
            height: i,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: E ? "0" : ""
          }), O = {
            opacity: 1
          }, F = (0, r.useRef)(null), K = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, Y = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [$] = (0, r.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: E ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: K,
              y: K,
              top: K,
              left: K,
              width: K,
              height: K,
              border: K,
              background: {
                delay: .3
              }
            }
          }), [X, W] = (0, r.useState)({
            initial: H,
            shown: $
          });
          (0, r.useEffect)((() => {
            W({
              initial: H,
              shown: $
            })
          }), [H, $]), (0, r.useEffect)((() => {
            const e = e => {
              "function" == typeof c && "Escape" === e.key && (c(), P({
                event: "modal_close",
                element_placement: h,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const J = () => {
              "function" == typeof c && (c(), P({
                event: "modal_close",
                element_placement: h,
                ...y
              }))
            },
            Q = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const o = Q(s, a - 1);
                if (o) return o
              }
              return null
            },
            Z = e => {
              if (ae?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return T?.queried ? a = T.element : (a = Q(e, 2), q({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = p ? 0 : 1,
            ae = (0, r.useRef)(null),
            te = (0, l.jsx)(x.motion.button, {
              className: "rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: Y,
              onClick: () => {
                J()
              },
              onKeyDown: Z,
              onKeyUp: Z
            });
          let se = null;
          return se = N ? r.Fragment : v(), (0, r.useMemo)((() => (0, l.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": E,
            "data-aspect-ratio": w,
            children: (0, l.jsx)(se, {
              children: (0, l.jsxs)("div", {
                children: [(0, l.jsx)(x.motion.div, {
                  className: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: O,
                  transition: K,
                  onClick: () => J()
                }), E && (0, l.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, l.jsxs)(x.motion.div, {
                    className: "rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: Y,
                    children: [(0, l.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: D,
                      disabled: V,
                      onKeyDown: Z,
                      onKeyUp: Z
                    }), (0, l.jsxs)("div", {
                      className: "rockstargames-sites-rockstargamese316695281c4c56337307741bda1371f",
                      "data-theme": b,
                      children: [" ", (S ?? 0) + 1, (0, l.jsx)("div", {
                        className: "rockstargames-sites-rockstargamesc1ee424eae15f7b789c86e634df9e28d"
                      }), f?.length, " "]
                    }), (0, l.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: U,
                      disabled: M,
                      onKeyDown: Z,
                      onKeyUp: Z,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, l.jsx)(x.motion.div, {
                  className: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
                  ref: F,
                  initial: "initial",
                  animate: "shown",
                  variants: X,
                  transition: K,
                  style: d,
                  children: (0, l.jsxs)(x.motion.div, {
                    className: (0, s.classList)("rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0", o),
                    children: [!E && te, (0, l.jsx)(x.motion.div, {
                      className: (0, s.classList)("rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714", u),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: Y,
                      ref: ae,
                      children: t
                    }), (0, l.jsx)("button", {
                      className: "rockstargames-sites-rockstargamesea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [t, S, d])
        },
        R = [null, () => null],
        j = (0, s.setContextItem)({
          context: (0, r.createContext)(R),
          key: "modalContext"
        }),
        S = e => {
          let {
            children: a
          } = e;
          const [t, o] = (0, r.useState)(R), {
            setBodyIsLocked: n
          } = (0, s.useBodyScrollable)("ModalProvider"), i = (0, r.useMemo)((() => t?.content ? (0, l.jsx)(z, {
            modal: t
          }) : null), [t]), c = () => n(!1);
          return (0, r.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, r.useEffect)((() => {
            n(!!i)
          }), [i]), (0, l.jsx)(j.Provider, {
            value: [i, o],
            children: a
          })
        };
      var C = t(57269),
        G = t(60028),
        P = t(37059),
        E = t(81788),
        N = t(3025),
        I = t(49323),
        M = t(39848),
        A = t.n(M);
      const V = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const t = (0, r.lazy)(e);
          return (0, r.useMemo)((() => (0, l.jsx)(r.Suspense, {
            fallback: "",
            children: (0, l.jsx)(t, {
              ...a
            })
          })), [])
        },
        B = (0, N.A)((() => {
          const {
            setError: e,
            state: a
          } = (0, I.b)(), {
            error: s
          } = a, {
            pathname: o
          } = (0, n.useLocation)();
          (0, r.useEffect)((() => {
            e()
          }), [o]), (0, r.useEffect)((() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }), []);
          const i = {
            path: "*",
            element: V((() => Promise.resolve().then(t.bind(t, 74309))), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let c = [{
            path: "/",
            element: V((() => Promise.all([t.e(3112), t.e(5409), t.e(7851), t.e(6711), t.e(1885), t.e(176), t.e(6958)]).then(t.bind(t, 86958))))
          }, {
            path: "/careers-privacy",
            element: V((() => Promise.all([t.e(9641), t.e(4771)]).then(t.bind(t, 44771))))
          }, {
            path: "/ccpa",
            element: V((() => Promise.all([t.e(9641), t.e(4499)]).then(t.bind(t, 24499))))
          }, {
            path: "/community-guidelines",
            element: V((() => Promise.all([t.e(3112), t.e(6711), t.e(9031), t.e(8077)]).then(t.bind(t, 45992))))
          }, {
            path: "/community-guidelines/resources",
            element: V((() => Promise.all([t.e(3112), t.e(6711), t.e(9031), t.e(9379)]).then(t.bind(t, 80964))))
          }, {
            path: "/conduct",
            element: (0, l.jsx)(n.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: V((() => t.e(1325).then(t.bind(t, 71325))))
          }, {
            path: "/cookies",
            element: V((() => Promise.all([t.e(9641), t.e(2749)]).then(t.bind(t, 32749))))
          }, {
            path: "/corpinfo",
            element: V((() => Promise.all([t.e(9641), t.e(7912)]).then(t.bind(t, 97912))))
          }, {
            path: "/VI",
            element: V((() => t.e(3326).then(t.t.bind(t, 43326, 23))), {
              footer: (0, l.jsx)(A(), {
                onLanguageChange: E.onLanguageChange
              })
            })
          }, {
            path: "/games",
            element: V((() => Promise.all([t.e(3112), t.e(7851), t.e(6711), t.e(1885), t.e(8817)]).then(t.bind(t, 48817))))
          }, {
            path: "/games/:gameTitlelug",
            element: V((() => Promise.all([t.e(7851), t.e(6850)]).then(t.bind(t, 36850))))
          }, {
            path: "/legal",
            element: V((() => Promise.all([t.e(9641), t.e(3891)]).then(t.bind(t, 23891))))
          }, {
            path: "/gta-v/thankyou",
            element: V((() => t.e(8165).then(t.bind(t, 88165))), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: V((() => t.e(9053).then(t.bind(t, 89053))))
          }, {
            path: "/community_event",
            element: V((() => Promise.all([t.e(7851), t.e(8853)]).then(t.bind(t, 88853))))
          }, {
            path: "/reddeadredemption2/*",
            element: V((() => t.e(9147).then(t.t.bind(t, 29147, 23))))
          }, {
            path: "/reddeadredemption/*",
            element: V((() => t.e(7538).then(t.t.bind(t, 47538, 23))))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, l.jsx)(n.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: V((() => t.e(5202).then(t.t.bind(t, 35202, 23))))
          }, {
            path: "/reddeadonline/thankyou",
            element: V((() => t.e(8165).then(t.bind(t, 88165))), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: V((() => t.e(3137).then(t.t.bind(t, 53137, 23))))
          }, {
            path: "/downloads/*",
            element: V((() => Promise.all([t.e(2973), t.e(1739)]).then(t.bind(t, 91739))))
          }, {
            path: "/reddeadonline/*",
            element: V((() => t.e(3416).then(t.t.bind(t, 33416, 23))))
          }, {
            path: "/gifs/:hashId",
            element: V((() => t.e(1626).then(t.t.bind(t, 41626, 23))))
          }, {
            path: "/gta-v/*",
            element: V((() => t.e(6766).then(t.t.bind(t, 36766, 23))), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: V((() => t.e(6766).then(t.t.bind(t, 36766, 23))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: V((() => t.e(2828).then(t.bind(t, 72828))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: V((() => t.e(6766).then(t.t.bind(t, 36766, 23))), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: V((() => t.e(2405).then(t.t.bind(t, 12405, 23))))
          }, {
            path: "/gtatv/*",
            element: V((() => t.e(8987).then(t.t.bind(t, 88987, 23))))
          }, {
            path: "/manuals",
            element: V((() => Promise.all([t.e(4466), t.e(324)]).then(t.bind(t, 30324))))
          }, {
            path: "/manuals/music",
            element: V((() => Promise.all([t.e(4466), t.e(2973), t.e(541)]).then(t.bind(t, 30541))))
          }, {
            path: "/newswire",
            element: V((() => Promise.all([t.e(3112), t.e(7851), t.e(6711), t.e(1885), t.e(176), t.e(5976)]).then(t.bind(t, 95976))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: V((() => t.e(8781).then(t.bind(t, 88781))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: V((() => t.e(8781).then(t.bind(t, 88781))))
          }, {
            path: "/privacy",
            element: V((() => Promise.all([t.e(9641), t.e(9572)]).then(t.bind(t, 99572))))
          }, {
            path: "/refund-policy",
            element: V((() => t.e(6773).then(t.bind(t, 26773))))
          }, {
            path: "/rockstartv/*",
            element: V((() => t.e(8778).then(t.t.bind(t, 78778, 23))))
          }, {
            path: "/screenshot-viewer/*",
            element: V((() => t.e(582).then(t.t.bind(t, 90582, 23))))
          }, {
            path: "/search",
            element: V((() => t.e(7992).then(t.bind(t, 77992))))
          }, {
            path: "/socialclubmaintenance",
            element: V((() => t.e(4680).then(t.bind(t, 54680))))
          }, {
            path: "/south-korean-privacy-addendum",
            element: V((() => Promise.all([t.e(9641), t.e(8595)]).then(t.bind(t, 8595))))
          }, {
            path: "/unsubscribe",
            element: V((() => Promise.all([t.e(3112), t.e(3701)]).then(t.bind(t, 83701))))
          }, {
            path: "/videos",
            element: V((() => Promise.all([t.e(1278), t.e(5409), t.e(7094)]).then(t.bind(t, 17094))))
          }, {
            path: "/videos/:videoId",
            element: V((() => Promise.all([t.e(1278), t.e(6039)]).then(t.bind(t, 46039))))
          }, {
            ...i
          }];
          return isNaN(parseInt(s?.code)) || 200 === s?.code || (c = [i]), (0, n.useRoutes)(c)
        })),
        T = {
          main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e",
          headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516"
        },
        q = (0, s.withAutoRouteTracking)((e => {
          let {
            headerHidden: a
          } = e;
          return (0, l.jsx)("main", {
            role: "main",
            id: "main",
            className: [T.main, a ? T.headerHidden : ""].join(" "),
            children: (0, l.jsx)(B, {})
          })
        }));
      var L = t(253),
        D = t(52542);
      g();
      const U = (() => {
          const e = window;
          if (e[f]?.history || g(), e[f]?.history) return e[f].history;
          throw new Error("Browser History has not been initialised")
        })(),
        H = (0, E.withIntl)((() => {
          const {
            setFooterHidden: e,
            setHeaderHidden: a,
            state: t
          } = (0, I.b)(), {
            footerHidden: s,
            headerHidden: o
          } = t, [u] = (0, r.useContext)(j), m = (0, n.useLocation)(), {
            data: p
          } = (0, C.Wx)();
          return (0, r.useEffect)((() => {
            const t = (0, L.Ek)({
                path: m.pathname
              }),
              s = (0, L.UN)({
                path: m.pathname
              });
            e(t), a(s)
          }), [m]), (0, l.jsx)(i.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: (0, l.jsx)(C.UN, {
              children: (0, l.jsxs)(y, {
                threshold: [25, 50, 75, 90, 100],
                children: [!o && (0, l.jsx)(l.Fragment, {
                  children: (0, l.jsx)(c.NavigationWrapper, {
                    globalNavLoaderComponent: d,
                    globalNavComponent: _()
                  })
                }), u, (0, l.jsx)(b, {}), (0, l.jsx)(q, {
                  headerHidden: o
                }), !s && (0, l.jsx)(A(), {
                  onLanguageChange: E.onLanguageChange
                })]
              })
            })
          })
        }), D),
        O = (0, s.withRockstarGraph)((0, s.withReactiveState)((() => {
          const e = (0, s.useBase)(),
            {
              setTitle: a
            } = (0, I.b)();
          return (0, r.useEffect)((() => {
            window.addEventListener("message", (e => {
              "graph.titleUpdate" === (e.data?.type ?? null) && a(e.data.title)
            }))
          }), []), (0, l.jsx)(G.uU, {
            children: (0, l.jsx)(P.N2, {
              children: (0, l.jsx)(C.iR, {
                children: (0, l.jsx)(m(), {
                  history: U,
                  basename: e,
                  children: (0, l.jsx)(S, {
                    children: (0, l.jsx)(H, {})
                  })
                })
              })
            })
          })
        }), {
          state: L.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        F = window?.env?.oneTrustId ?? null,
        K = window?.env?.gtmId ?? null;
      (0, s.gtmInit)({
        id: K
      }), (0, s.oneTrustInit)({
        id: F,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, o.H)(e).render((0, l.jsx)(O, {}))
        }
      })
    },
    49323: (e, a, t) => {
      t.d(a, {
        b: () => s.b$
      });
      var s = t(253)
    },
    253: (e, a, t) => {
      t.d(a, {
        Ek: () => r,
        UN: () => o,
        b$: () => i,
        wk: () => n
      });
      var s = t(95966);
      const o = e => {
          let {
            path: a
          } = e;
          return window.self !== window.top || (["/gifs", "/screenshot-viewer", "/VI", "/videoplayer"].find((e => a.includes(e))) ?? []).length > 0
        },
        r = e => {
          let {
            path: a
          } = e;
          return (["/gta-online/license-plates", "/VI"].find((e => a.includes(e))) ?? []).length > 0
        },
        n = (0, s.makeVar)({
          breadcrumb: {
            links: [],
            filter: ""
          },
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          gameSiteNavOpen: !1,
          loading: !1,
          navOpen: !1,
          headerHidden: o({
            path: document.location.pathname
          }),
          footerHidden: r({
            path: document.location.pathname
          }),
          normalLogo: !0,
          search: ""
        }),
        i = () => {
          const e = (0, s.useState)(),
            a = (0, s.useMutateState)();
          return {
            state: e,
            toggleNavOpen: function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              const {
                navOpen: s
              } = e;
              a({
                navOpen: null !== t ? t : !s
              })
            },
            clearError: () => {
              a({
                error: {
                  code: null,
                  message: null
                }
              })
            },
            setBreadcrumb: function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              a({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: t,
                  filter: s
                }
              })
            },
            setLoading: e => {
              a({
                loading: e
              })
            },
            setNavHidden: e => {
              a({
                navHidden: e
              })
            },
            setNormalLogo: e => {
              a({
                normalLogo: e
              })
            },
            setSearch: e => {
              a({
                search: e
              })
            },
            setTitle: e => {
              const t = "Rockstar Games";
              let s = e;
              e.endsWith(t) || (s = `${e} - ${t}`), document.title = s, a({
                title: s
              })
            },
            setError: function() {
              let {
                code: e,
                message: t
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              a({
                error: {
                  code: e,
                  message: t
                }
              })
            },
            setFooterHidden: e => {
              a({
                footerHidden: e
              })
            },
            setHeaderHidden: e => {
              a({
                headerHidden: e
              })
            },
            updateGameData: t => {
              let {
                base: s = null,
                navOpen: o = !1
              } = t;
              const r = {
                ...e.gameData
              };
              null !== s && (r.base = s.replace(/\/$/, "")), null !== o && (r.navOpen = o), a({
                gameData: r
              })
            }
          }
        }
    },
    52542: e => {
      e.exports = JSON.parse('{"de-DE":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community-Richtlinien","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Diese Richtlinien beschreiben die Werte, die wir voraussetzen, und die Regeln, die wir anwenden, um sicherzustellen, dass alle Spieler ein faires, respektvolles und sicheres Spielerlebnis haben.","community_guidelines_tile_header":"Community-Richtlinien anschauen","email_settings_cta":"Präferenzen aktualisieren","footer_community_guidelines_label_text":"Community-Richtlinien","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Cookie-Richtlinie","footer_cookie_settings_label_text":"Cookie-Einstellungen","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Symbol: Händeschütteln","heartbook_icon_alt_text":"Symbol: Buch mit Herz","resources_last_updated_date":"18. November 2024","resources_tile_description":"Finde schnell Ressourcen, falls du oder jemand, den du kennst, Probleme hat und Hilfe braucht.","resources_tile_header":"Sicherheitsressourcen anschauen","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","rsg_no_results":"Diese Suche ergab leider keine Treffer.","rsg_total_results_message":"Suche nach {Tab}, gefiltert nach {Query}","safety_get_support_button":"Support kontaktieren","safety_learn_more_button":"Mehr erfahren","support_chat_icon_alt_text":"Symbol: Support-Chat","support_tile_description":"Besuche unsere Kundendienst-Website, wenn du zusätzliche Hilfe mit der Verwaltung deines Kontos oder den Datenschutz- und Privatsphäreeinstellungen benötigst.","support_tile_header":"Brauchst du Hilfe mit deinem Konto?","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"en-US":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community Guidelines","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe.","community_guidelines_tile_header":"Explore Community Guidelines","email_settings_cta":"Update Preferences","footer_community_guidelines_label_text":"Community Guidelines","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Handshake icon","heartbook_icon_alt_text":"Book with heart icon","resources_last_updated_date":"November 18, 2024","resources_tile_description":"Quickly find resources if you or someone you know is struggling and in need of help.","resources_tile_header":"Explore Safety Resources","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","rsg_no_results":"Sorry, there were no results.","rsg_total_results_message":"Showing {Tab} filtered by {Query}","safety_get_support_button":"Get Support","safety_learn_more_button":"Learn More","support_chat_icon_alt_text":"Support chat icon","support_tile_description":"For additional assistance with managing your account or data and privacy settings, visit our Customer Support page.","support_tile_header":"Need account assistance?","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"es-ES":{"community_guidelines_hero_aria_label":"¡Pide perdón, respeta a los demás!","community_guidelines_hero_title":"Directrices de la comunidad","community_guidelines_image_alt_text":"Say sorry, be nice (pide perdón, sé amable)","community_guidelines_tile_description":"Estas directrices resumen los valores que defendemos y las políticas que aplicamos para asegurarnos de que nuestros jugadores disfrutan de una experiencia justa, respetuosa y segura.","community_guidelines_tile_header":"Ver las directrices de la comunidad","email_settings_cta":"Cambiar tus preferencias","footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Ajustes de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nueva York","footer_locations_paris":"París","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Icono de un apretón de manos","heartbook_icon_alt_text":"Icono de un libro con un corazón","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra ayuda rápidamente en caso de que tú o alguien que conoces esté pasando por dificultades y necesite apoyo.","resources_tile_header":"Ver los servicios de ayuda","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","rsg_no_results":"Lo sentimos, no hay resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Obtén asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Icono de chat de asistencia","support_tile_description":"Si necesitas ayuda adicional para gestionar tu cuenta o tus ajustes de datos o privacidad, visita nuestro sitio web de asistencia técnica.","support_tile_header":"¿Necesitas ayuda con tu cuenta?","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"es-MX":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Directrices de la comunidad","community_guidelines_image_alt_text":"Imagen con el mensaje: Say Sorry, Be Nice","community_guidelines_tile_description":"Estas directrices describen nuestros valores y las políticas que imponemos para asegurar que las experiencias de los jugadores sean justas, respetuosas y seguras.","community_guidelines_tile_header":"Directrices de la comunidad","email_settings_cta":"Actualizar preferencias","footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configuración de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Ícono de un apretón de manos","heartbook_icon_alt_text":"Ícono de un libro con un corazón","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra recursos rápidamente si tú o alguien que conoces necesita ayuda.","resources_tile_header":"Recursos de seguridad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","rsg_no_results":"Lo lamentamos, pero no se encontraron resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Recibir asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Ícono de chat de soporte","support_tile_description":"Para recibir asistencia adicional de tu cuenta, datos o ajustes de privacidad, visita nuestra página de soporte.","support_tile_header":"Asistencia de tu cuenta","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr-FR":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Règles de la communauté","community_guidelines_image_alt_text":"Image avec le texte en anglais Say Sorry, Be Nice","community_guidelines_tile_description":"Ces règles décrivent nos valeurs et les politiques que nous faisons appliquer pour assurer à tous les joueurs une expérience juste, respectueuse et sûre.","community_guidelines_tile_header":"Explorez nos Règles de la communauté","email_settings_cta":"Mettre vos préférences à jour","footer_community_guidelines_label_text":"Règles de la communauté","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Politique en matière de cookies","footer_cookie_settings_label_text":"Paramètres des cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londres","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Icône de poignée de main","heartbook_icon_alt_text":"Icône de livre avec un cœur","resources_last_updated_date":"Le 18 novembre 2024","resources_tile_description":"Trouvez rapidement des ressources si vous, ou une personne que vous connaissez, êtes en difficulté et avez besoin d\'aide.","resources_tile_header":"Explorez nos ressources relatives à la sécurité","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","rsg_no_results":"Désolé, aucun résultat n\'a été trouvé.","rsg_total_results_message":"Résultats : {Tab} Filtres : {Query}","safety_get_support_button":"Obtenir de l\'aide","safety_learn_more_button":"En savoir plus","support_chat_icon_alt_text":"Icône de discussion de l\'assistance","support_tile_description":"Si vous avez besoin d\'aide supplémentaire pour gérer votre compte ou les paramètres de vos données et de votre confidentialité, rendez-vous sur notre page d\'assistance à la clientèle.","support_tile_header":"Besoin d\'aide pour votre compte ?","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors de la désinscription","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désinscrit(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désinscription a été prise en compte"},"it-IT":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Linee guida della comunità","community_guidelines_image_alt_text":"Immagine con logo “Say Sorry, Be Nice”.","community_guidelines_tile_description":"Queste linee guida definiscono i valori che sosteniamo e le politiche che applichiamo per assicurare ai giocatori un’esperienza positiva, rispettosa e sicura.","community_guidelines_tile_header":"Scopri le Linee guida della comunità","email_settings_cta":"Aggiorna le preferenze","footer_community_guidelines_label_text":"Linee guida della comunità","footer_contact_label_text":"Contattaci","footer_cookie_policy_label_text":"Politica sui cookie","footer_cookie_settings_label_text":"Impostazioni dei cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londra","footer_locations_new_york":"New York","footer_locations_paris":"Parigi","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Icona della stretta di mano","heartbook_icon_alt_text":"Icona di un libro con un cuore","resources_last_updated_date":"18 novembre 2024","resources_tile_description":"Trova velocemente le risorse che cerchi se tu o qualcuno che conosci è in difficoltà e ha bisogno di aiuto.","resources_tile_header":"Scopri le risorse per la sicurezza","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Paesi Bassi","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","rsg_no_results":"Spiacente, nessun risultato trovato.","rsg_total_results_message":"Scheda {Tab} filtrata per {Query}","safety_get_support_button":"Chiedi assistenza","safety_learn_more_button":"Altre informazioni","support_chat_icon_alt_text":"Icona della chat di assistenza","support_tile_description":"Per ulteriore assistenza sulla gestione del tuo account o dei tuoi data e sulle impostazioni della privacy, visita la nostra pagina del supporto clienti.","support_tile_header":"Hai bisogno di aiuto con il tuo account?","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"ja-JP":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"コミュニティガイドライン","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"このガイドラインでは、プレイヤーの体験が公平で、尊重され、安全であることを保証するため弊社が強化する方針ならびに、弊社が支持する価値観を説明しています。","community_guidelines_tile_header":"コミュニティガイドラインをチェックする","email_settings_cta":"設定を更新","footer_community_guidelines_label_text":"コミュニティガイドライン","footer_contact_label_text":"お問い合せ","footer_cookie_policy_label_text":"クッキーポリシー","footer_cookie_settings_label_text":"クッキー設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"握手のアイコン","heartbook_icon_alt_text":"ハートのついた本のアイコン","resources_last_updated_date":"2024年11月18日","resources_tile_description":"あなた自身もしくは知人が困っており、助けが必要な場合の情報を見つける。","resources_tile_header":"安全性に関する情報をチェックする","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","rsg_no_results":"申し訳ありません、結果が見つかりませんでした。","rsg_total_results_message":"{Query}でフィルターした{Tab}を表示中","safety_get_support_button":"サポートを依頼する","safety_learn_more_button":"詳細を見る","support_chat_icon_alt_text":"サポートチャットのアイコン","support_tile_description":"アカウントやデータ、プライバシー設定の管理についての追加アシストはカスタマーサポートページをご覧ください。","support_tile_header":"アカウントアシストが必要ですか？","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"ko-KR":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"커뮤니티 가이드라인","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"공정, 상호 존중, 안전을 바탕으로 한 플레이어 경험을 제공하기 위해 당사에서 추구하는 가치 및 시행하는 정책을 정리한 가이드라인입니다.","community_guidelines_tile_header":"커뮤니티 가이드라인 살펴보기","email_settings_cta":"설정 변경","footer_community_guidelines_label_text":"커뮤니티 가이드라인","footer_contact_label_text":"문의","footer_cookie_policy_label_text":"쿠키 정책","footer_cookie_settings_label_text":"쿠키 설정","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"악수 모양 아이콘","heartbook_icon_alt_text":"책과 하트 아이콘","resources_last_updated_date":"2024년 11월 18일","resources_tile_description":"본인 및 주변인에게 도움이 필요하다면 이곳에서 관련 정보를 빠르게 찾아보실 수 있습니다.","resources_tile_header":"안전 관련 정보 살펴보기","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","rsg_no_results":"죄송합니다, 결과가 없습니다.","rsg_total_results_message":"{Query} 필터를 적용한 {Tab} 보기","safety_get_support_button":"도움 요청하기","safety_learn_more_button":"더 알아보기","support_chat_icon_alt_text":"지원 채팅 아이콘","support_tile_description":"계정, 데이터, 개인 정보 보호 설정을 관리하는 데 추가로 도움이 필요하시다면 저희의 고객 지원 페이지를 방문해주세요.","support_tile_header":"계정 관련 도움이 필요하신가요?","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_success_header":"구독 취소 완료"},"pl-PL":{"community_guidelines_hero_aria_label":"Zachowuj się grzecznie!","community_guidelines_hero_title":"Regulamin społeczności","community_guidelines_image_alt_text":"Zachowuj się grzecznie!","community_guidelines_tile_description":"Ten regulamin opisuje wartości, jakimi się kierujemy, jak również zasady, których przestrzegamy, aby zapewnić graczom sprawiedliwe, bezpieczne i pełne szacunku doświadczenia.","community_guidelines_tile_header":"Przeglądaj regulamin społeczności","email_settings_cta":"Aktualizuj swoje preferencje","footer_community_guidelines_label_text":"Regulamin społeczności","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Polityka plików cookie","footer_cookie_settings_label_text":"Ustawienia plików cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londyn","footer_locations_new_york":"Nowy Jork","footer_locations_paris":"Paryż","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Ikona uścisku dłoni","heartbook_icon_alt_text":"Zapisz przy pomocy ikony serca","resources_last_updated_date":"18 listopada 2024","resources_tile_description":"Odszukaj szybko informacje, jeżeli ty lub ktoś, kogo znasz, potrzebuje pomocy.","resources_tile_header":"Przeglądaj informacje dotyczące bezpieczeństwa","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","rsg_no_results":"Brak wyników.","rsg_total_results_message":"Wyświetlono: {Tab} filtrowanie: {Query}","safety_get_support_button":"Uzyskaj wsparcie","safety_learn_more_button":"Dowiedz się więcej","support_chat_icon_alt_text":"Ikona kontaku ze wsparciem","support_tile_description":"W celu uzyskania dodatkowej pomocy dotyczącej obsługi konta lub ustawień prywatności odwiedź naszą stronę wsparcia.","support_tile_header":"Potrzebujesz wsparcia dotyczącego konta?","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"pt-BR":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Diretrizes da Comunidade","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Estas regras detalham os valores e políticas que mantêm a experiência de jogo justa, respeitosa e segura.","community_guidelines_tile_header":"Explore as Regras da Comunidade","email_settings_cta":"Atualizar preferências","footer_community_guidelines_label_text":"Diretrizes da Comunidade","footer_contact_label_text":"Entre em contato","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configurações de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nova York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Ícone de aperto de mão","heartbook_icon_alt_text":"Ícone de livro com coração","resources_last_updated_date":"18 de novembro de 2024","resources_tile_description":"Encontre recursos rapidamente se você ou alguém que você conhece precisa de ajuda.","resources_tile_header":"Explore os recursos de segurança","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","rsg_no_results":"Nenhum resultado foi encontrado.","rsg_total_results_message":"Mostrando {Tab} com o filtro {Query}","safety_get_support_button":"Acionar suporte","safety_learn_more_button":"Saiba mais","support_chat_icon_alt_text":"Ícone de chat de suporte","support_tile_description":"Para mais ajuda com o gerenciamento da sua conta, dados e configurações de privacidade, acesse a página de suporte.","support_tile_header":"Precisa de ajuda com a sua conta?","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru-RU":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Правила сообщества","community_guidelines_image_alt_text":"Надпись Say Sorry, Be Nice","community_guidelines_tile_description":"В этих правилах изложены ценности, которых мы придерживаемся, и политики, которые мы применяем для обеспечения честной, уважительной и безопасной игры для всех.","community_guidelines_tile_header":"Ознакомьтесь с правилами сообщества","email_settings_cta":"Изменить настройки","footer_community_guidelines_label_text":"Правила сообщества","footer_contact_label_text":"Связаться с нами","footer_cookie_policy_label_text":"Политика использования файлов Cookie","footer_cookie_settings_label_text":"Настройки файлов Cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Богота","footer_locations_london":"Лондон","footer_locations_new_york":"Нью-Йорк","footer_locations_paris":"Париж","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Значок рукопожатия","heartbook_icon_alt_text":"Значок книги с сердцем","resources_last_updated_date":"18 ноября 2024 года","resources_tile_description":"Быстро найдите интернет-ресурсы, если вы или кто-то из ваших знакомых испытывает трудности и нуждается в помощи.","resources_tile_header":"Ознакомьтесь с ресурсами по психологической поддержке","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","rsg_no_results":"Результаты не найдены.","rsg_total_results_message":"Поиск в категории {Tab} с фильтром «{Query}»","safety_get_support_button":"Обратиться в службу поддержки","safety_learn_more_button":"Подробности","support_chat_icon_alt_text":"Значок службы поддержки","support_tile_description":"Для получения дополнительной помощи по управлению вашей учетной записью или данными и настройками конфиденциальности посетите нашу страницу поддержки клиентов.","support_tile_header":"Нужна помощь с учетной записью?","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"zh-CN":{"community_guidelines_hero_aria_label":"说声对不起，做个好人！","community_guidelines_hero_title":"社区指南","community_guidelines_image_alt_text":"说声对不起，做个好人","community_guidelines_tile_description":"指南中列出了我们秉持的价值观和遵循的政策原则，为玩家营造公平、尊重和安全的游玩体验。","community_guidelines_tile_header":"查看社区指南","email_settings_cta":"更新偏好设置","footer_community_guidelines_label_text":"社区指南","footer_contact_label_text":"联系我们","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 设置","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"伦敦","footer_locations_new_york":"纽约","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"握手图标","heartbook_icon_alt_text":"书上印着一颗心的图标","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"如果您自己，或者您知道的其他人需要帮助，在这里可以快速找到相关内容。","resources_tile_header":"查看“安全”相关内容","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","rsg_no_results":"抱歉，没有搜索结果。","rsg_total_results_message":"按 {filterList} 筛选显示 {type}","safety_get_support_button":"寻求支持","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支持对话图标","support_tile_description":"如果您在管理账户或数据，或者设置隐私选项时需要额外的帮助，请前往客户支持页面。","support_tile_header":"需要账户相关的帮助吗？","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"zh-TW":{"community_guidelines_hero_aria_label":"敢於道歉，友善待人！","community_guidelines_hero_title":"社群守則","community_guidelines_image_alt_text":"敢於道歉，友善待人","community_guidelines_tile_description":"我們以此守則簡述所遵循的價值觀，以及我們為了確保公平、尊重與安全的玩家體驗所執行的政策。","community_guidelines_tile_header":"探索社群守則","email_settings_cta":"更新偏好設定","footer_community_guidelines_label_text":"社群守則","footer_contact_label_text":"聯絡方式","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"倫敦","footer_locations_new_york":"紐約","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"握手圖示","heartbook_icon_alt_text":"書本上有心形的圖示","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"若您或您認識的人遭逢困難或需要協助，您可以快速尋找資源。","resources_tile_header":"探索安全資源","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","rsg_no_results":"很抱歉，無相符的搜尋結果。","rsg_total_results_message":"正在顯示 {Tab}，搜尋條件為 {Query}","safety_get_support_button":"取得支援","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支援文字對話圖示","support_tile_description":"如需管理您帳戶、資料或隱私權設定的額外協助，請造訪我們的客戶支援頁面。","support_tile_header":"需要帳戶協助？","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    }
  }
]);