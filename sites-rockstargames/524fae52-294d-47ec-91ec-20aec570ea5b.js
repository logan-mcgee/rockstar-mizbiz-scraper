! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "524fae52-294d-47ec-91ec-20aec570ea5b", e._sentryDebugIdIdentifier = "sentry-dbid-524fae52-294d-47ec-91ec-20aec570ea5b")
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
  [5388, 7344, 4963], {
    38438: (e, n, a) => {
      a.d(n, {
        A: () => k
      });
      var t = a(62229),
        r = a(9623),
        o = a(95966),
        i = a(53178),
        s = a.n(i),
        l = a(27835),
        d = a.n(l),
        c = a(17529),
        m = a.n(c),
        g = a(72162),
        p = a.n(g),
        u = a(82510),
        f = a.n(u),
        _ = a(90675),
        h = a.n(_),
        b = a(82602),
        A = {};
      A.styleTagTransform = h(), A.setAttributes = p(), A.insert = m().bind(null, "head"), A.domAPI = d(), A.insertStyleElement = f(), s()(b.A, A);
      const v = b.A && b.A.locals ? b.A.locals : void 0;
      var w = a(73855);
      const k = (0, o.withTranslations)((e => {
        let {
          t: n
        } = e;
        const [a] = (0, t.useState)(""), i = (0, r.useNavigate)(), s = (0, o.useMutateState)();
        return (0, w.jsxs)("form", {
          action: "#",
          className: v.searchBox,
          onSubmit: e => {
            e.preventDefault(), s({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const n = e.currentTarget.elements.namedItem("q").value;
            i(`/search?q=${n}`)
          },
          role: "search",
          children: [(0, w.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, w.jsx)("input", {
            autoComplete: "off",
            defaultValue: a,
            enterKeyHint: "search",
            name: "q",
            placeholder: n("Search Rockstar Games")
          })]
        })
      }))
    },
    45768: (e, n, a) => {
      a.d(n, {
        A: () => x
      });
      var t = a(62229),
        r = a(81788);
      const o = (0, r.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var i = a(9623),
        s = a(53178),
        l = a.n(s),
        d = a(27835),
        c = a.n(d),
        m = a(17529),
        g = a.n(m),
        p = a(72162),
        u = a.n(p),
        f = a(82510),
        _ = a.n(f),
        h = a(90675),
        b = a.n(h),
        A = a(11835),
        v = {};
      v.styleTagTransform = b(), v.setAttributes = u(), v.insert = g().bind(null, "head"), v.domAPI = c(), v.insertStyleElement = _(), l()(A.A, v);
      const w = A.A && A.A.locals ? A.A.locals : void 0;
      var k = a(94997),
        y = a(73855);
      const x = (0, k.g)((e => {
        let {
          children: n,
          to: a = "#",
          reloadDocument: s = !1,
          alt: l = "",
          autoBlank: d = !1,
          role: c = "link",
          onClick: m = (() => {}),
          focused: g = !1,
          ...p
        } = e;
        const u = (0, t.useRef)(null),
          f = (0, r.useIntl)(),
          _ = !/^(https?|mailto):/i.test(a),
          h = /^#/.test(a),
          b = p?.target ?? (d ? "_blank" : "_self"),
          {
            ...A
          } = p;
        let v = "";
        if ("aria-label" in A && A["aria-label"] && (v = "_blank" === b ? `${A["aria-label"]} ${f.formatMessage(o.aria_label_open_new_window)}` : A["aria-label"]), (0, t.useEffect)((() => {
            g && u?.current && u.current.focus()
          }), [u?.current, g]), h) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), m && m(e)
          };
          return (0, y.jsxs)("a", {
            title: l,
            href: a,
            onClick: e,
            ...A,
            "aria-label": v,
            ref: u,
            role: c,
            children: [n, "_blank" === b && !v && (0, y.jsx)("span", {
              className: w.visuallyHidden,
              children: f.formatMessage(o.aria_label_open_new_window)
            })]
          })
        }
        if (_) return (0, y.jsxs)(i.NavLink, {
          title: l,
          to: a,
          onClick: m,
          ...A,
          "aria-label": v,
          ref: u,
          reloadDocument: s,
          children: [n, "_blank" === b && !v && (0, y.jsx)("span", {
            className: w.visuallyHidden,
            children: f.formatMessage(o.aria_label_open_new_window)
          })]
        });
        const k = Object.keys(A).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, n) => ({
          ...e,
          [n]: p[n]
        })), {});
        return "function" == typeof k?.className && delete k.className, (0, y.jsxs)("a", {
          href: a,
          title: l,
          onClick: m,
          target: b,
          ...k,
          "aria-label": v,
          ref: u,
          role: c,
          children: [n, "_blank" === b && !v && (0, y.jsx)("span", {
            className: w.visuallyHidden,
            children: f.formatMessage(o.aria_label_open_new_window)
          })]
        })
      }))
    },
    28223: (e, n, a) => {
      a.d(n, {
        A: () => l
      });
      var t = a(62229),
        r = a(95412),
        o = a(14681),
        i = a(73855);
      class s extends t.Component {
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
          const n = {
            message: e?.message ? e.toString() : "Something has gone horribly awry.",
            code: e?.code ?? 399
          };
          return 399 === n.code && ((0, r.captureMessage)("Notorious 399 Error", r.Severity.Error), (0, r.addBreadcrumb)({
            category: "ErrorBoundary",
            message: "E399 triggered",
            data: {
              error: n
            }
          })), {
            error: n
          }
        }
        render() {
          return null !== this.state.error.code ? (0, i.jsx)(o.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const l = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(a) {
          return (0, i.jsx)(s, {
            header: n,
            children: (0, i.jsx)(e, {
              ...a
            })
          })
        }
      }
    },
    14681: (e, n, a) => {
      a.r(n), a.d(n, {
        default: () => x
      });
      var t = a(62229),
        r = a(81788),
        o = a(45768),
        i = a(38438);
      const s = (0, r.defineMessages)({
        wasted_error_404_new: {
          id: "wasted_error_404_new",
          defaultMessage: "The page you're looking for doesn't exist or another error occurred."
        },
        wasted_home: {
          id: "wasted_home",
          defaultMessage: "Home"
        }
      });
      var l = a(53178),
        d = a.n(l),
        c = a(27835),
        m = a.n(c),
        g = a(17529),
        p = a.n(g),
        u = a(72162),
        f = a.n(u),
        _ = a(82510),
        h = a.n(_),
        b = a(90675),
        A = a.n(b),
        v = a(72760),
        w = {};
      w.styleTagTransform = A(), w.setAttributes = f(), w.insert = p().bind(null, "head"), w.domAPI = m(), w.insertStyleElement = h(), d()(v.A, w);
      const k = v.A && v.A.locals ? v.A.locals : void 0;
      var y = a(73855);
      const x = e => {
        let {
          error: n,
          domain: a = ""
        } = e;
        console.error({
          error: n
        });
        const {
          formatMessage: l
        } = (0, r.useIntl)();
        let d = n?.message ?? l(s.wasted_error_404_new);
        d = l(s.wasted_error_404_new);
        const c = n?.code ?? 398,
          m = (0, t.useRef)(null);
        return (0, t.useEffect)((() => {
          m && m?.current && m.current.focus()
        }), [m]), (0, y.jsxs)("div", {
          className: k.error,
          children: [(0, y.jsx)("h3", {
            tabIndex: -1,
            ref: m,
            children: `${d} (${c})`
          }), (0, y.jsx)(o.A, {
            to: "/",
            reloadDocument: !1,
            children: l(s.wasted_home)
          }), "clr" !== a && (0, y.jsx)(i.A, {})]
        })
      }
    },
    94997: (e, n, a) => {
      a.d(n, {
        g: () => o
      });
      var t = a(81788);
      const r = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","rp_icon":"RP-Kategorie","wasted_error_404_new":"Die von dir angeforderte Seite existiert nicht oder ein Fehler ist aufgetreten.","wasted_home":"Home"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","profile_silhouette_mugshot":"Silhouette mugshot","rp_icon":"RP Category","wasted_error_404_new":"The page you\'re looking for doesn\'t exist or another error occurred.","wasted_home":"Home"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","profile_silhouette_mugshot":"Foto de silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o ha ocurrido un error.","wasted_home":"Inicio"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","profile_silhouette_mugshot":"Foto de una silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o sucedió otro error.","wasted_home":"Inicio"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","profile_silhouette_mugshot":"Photo d\'identité : silhouette","rp_icon":"Catégorie : RP","wasted_error_404_new":"Soit la page que vous cherchez n\'existe pas, soit une autre erreur est survenue.","wasted_home":"Accueil"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","profile_silhouette_mugshot":"Foto segnaletica silhouette","rp_icon":"Categoria RP","wasted_error_404_new":"La pagina richiesta non è stata trovata, oppure si è verificato un errore.","wasted_home":"Home"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","profile_silhouette_mugshot":"シルエット顔写真","rp_icon":"RPカテゴリー","wasted_error_404_new":"お探しのページは存在しないか、別のエラーが発生しました。","wasted_home":"トップ"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","profile_silhouette_mugshot":"실루엣 머그샷","rp_icon":"RP 카테고리","wasted_error_404_new":"찾고 있는 페이지가 존재하지 않거나 오류가 발생하였습니다.","wasted_home":"홈"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","profile_silhouette_mugshot":"Zdjęcie sylwetki","rp_icon":"Poziom RP","wasted_error_404_new":"Poszukiwana strona nie istnieje lub wystąpił inny błąd.","wasted_home":"Główna"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","profile_silhouette_mugshot":"Foto da silhueta","rp_icon":"Categoria de RP","wasted_error_404_new":"A página requisitada não existe ou ocorreu um outro erro.","wasted_home":"Página Inicial"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","profile_silhouette_mugshot":"Силуэт игрока","rp_icon":"Категория опыта","wasted_error_404_new":"Такой страницы не существует, либо произошла иная ошибка.","wasted_home":"Главная"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_cta_title_twitchdrops":"不要错过下一份 GTA 在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","profile_silhouette_mugshot":"剪影面部照片","rp_icon":"声望值类别","wasted_error_404_new":"您查找的页面不存在或出现错误。","wasted_home":"主页"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","profile_silhouette_mugshot":"罪犯檔案照剪影","rp_icon":"聲望值類別","wasted_error_404_new":"您要搜尋的頁面不存在或發生了其他的錯誤。","wasted_home":"首頁"}}'),
        o = e => (0, t.withIntl)(e, r)
    },
    4066: (e, n, a) => {
      a.d(n, {
        A: () => w,
        K: () => u
      });
      var t = a(95966);
      const r = (0, t.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, t.makeVar)(null)
        }),
        o = e => r(e),
        i = (0, t.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, t.makeVar)(!1)
        }),
        s = e => i(e),
        l = (0, t.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, t.makeVar)(!1)
        }),
        d = e => l(e),
        c = (0, t.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, t.makeVar)((0, t.webSettingsReactive)()?.currentCharId)
        }),
        m = e => c(e),
        g = (0, t.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, t.makeVar)(null)
        }),
        p = e => g(e),
        u = (0, t.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, t.makeVar)(null)
        }),
        f = (0, t.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, t.makeVar)(!1)
        }),
        _ = e => f(e),
        h = (0, t.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, t.makeVar)(!1)
        }),
        b = e => h(e),
        A = (0, t.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, t.makeVar)(null)
        }),
        v = e => A(e),
        w = () => {
          const e = (0, t.useReactiveVar)(f),
            n = (0, t.useReactiveVar)(h),
            a = (0, t.useReactiveVar)(c),
            u = (0, t.useReactiveVar)(r),
            w = (0, t.useReactiveVar)(l),
            k = (0, t.useReactiveVar)(g);
          return {
            charactersNeeded: e,
            crewsNeeded: n,
            currentCharId: a,
            hasNotifications: w,
            navOpen: u,
            userData: (0, t.useReactiveVar)(A),
            selectedCharacterTuple: k,
            jumpScMenuFocus: (0, t.useReactiveVar)(i),
            setCharactersNeeded: _,
            setCrewsNeeded: b,
            setCurrentCharId: m,
            setHasNotifications: d,
            setNavOpen: o,
            setSelectedCharacterTuple: p,
            setUserData: v,
            setJumpScMenuFocus: s
          }
        }
    },
    66369: (e, n, a) => {
      a.r(n), a.d(n, {
        GtmProvider: () => t.UN,
        RockstarUserProvider: () => t.iR,
        useGtmTrack: () => t.h,
        useRockstarUser: () => t.Wx,
        useRockstarUserState: () => r.A
      });
      var t = a(85712),
        r = a(4066)
    },
    85712: (e, n, a) => {
      a.d(n, {
        UN: () => c,
        iR: () => w,
        h: () => g,
        Wx: () => k
      });
      var t = a(62229),
        r = a(95966),
        o = a(66369),
        i = a(40296);
      const s = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var l = a(73855);
      const d = (0, r.setContextItem)({
          context: (0, t.createContext)(void 0),
          key: "gtmContext22"
        }),
        c = e => {
          let {
            checkUser: n,
            children: a
          } = e;
          const c = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [n, a] = (0, t.useState)([]), [l, d] = (0, t.useState)([]), [c, m] = (0, t.useState)(null), {
                data: g,
                loggedIn: p
              } = (0, o.useRockstarUser)(), {
                hasGtaPlus: u
              } = g ?? {}, f = (0, i.bn)(), _ = (e, t) => {
                const o = [];
                e.forEach((e => {
                  if (-1 === n.indexOf(e)) {
                    const n = t ?? {};
                    (0, r.track)({
                      ...e,
                      ...n
                    }), o.push(e)
                  }
                })), a([...n, ...o])
              };
              (0, t.useEffect)((() => {
                if (g && null !== p) {
                  const e = h(g);
                  l.length && e && _(l, e), m(e)
                } else e || l.length && _(l)
              }), [g, p, l]), (0, t.useEffect)((() => {
                const e = l.filter((e => -1 === n.indexOf(e)));
                d(e)
              }), [n]);
              const h = e => {
                const n = [],
                  a = [],
                  t = [],
                  r = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [o, i] = e;
                  i.length && i.forEach((e => {
                    const i = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === o) {
                      a.includes(i) || a.push(i), t.includes(i) || "1" !== e.stats?.overview?.hasGtaPlus?.value || t.push(i);
                      const n = `${o}_${e.platform}`;
                      r.includes(n) || r.push(n)
                    }
                    n.includes(i) || n.push(i)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [a, t] = e;
                  r.push(`${a}_${t}`), n.includes(t) || n.push(t)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: p ?? !1,
                  gta_plus_active: !!p && Boolean(u),
                  platforms_played: n.length ? n.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: r.length ? r.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: t.length ? t.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: f
                }
              };
              return {
                track: e => {
                  if (void 0 === p || !g || !c) {
                    const n = [...l];
                    return n.push({
                      ...e
                    }), d(n)
                  }
                  return (0, r.track)({
                    ...e,
                    ...c
                  })
                }
              }
            }(n),
            m = (0, t.useMemo)((() => c), [c, n]);
          return (0, l.jsx)(d.Provider, {
            value: m,
            children: a
          })
        },
        m = {
          track: () => null
        },
        g = () => (0, t.useContext)(d) ?? m;
      var p = a(4066);
      var u = a(17531),
        f = a.n(u);
      var _ = a(37240),
        h = a(35422);
      const b = e => {
          let {
            privateToken: n
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: o,
            currentCharId: i
          } = (0, p.A)(), s = (0, r.useRockstarToken)(), [l, d] = (0, t.useState)(), [c] = (0, r.useRockstarTokenReactive)(), m = (0, r.useRockstarTokenPing)(), [g, u] = (0, t.useState)(), [b, A] = (0, t.useState)(!1), v = void 0 === g, [w, k] = (0, t.useState)(1);
          return (0, t.useEffect)((() => {
            "gtao" !== a || l?.characters?.gtao || (d({
              ...l,
              accountSynced: !1
            }), k((e => e + 1)))
          }), [a, l?.characters?.gtao]), (0, t.useEffect)((() => {
            o && !l?.crews && (d({
              ...l,
              accountSynced: !1
            }), k((e => e + 1)))
          }), [o, l?.crews]), (0, t.useEffect)((() => {
            0 === w && d({
              ...l,
              accountSynced: !0
            })
          }), [w]), (0, t.useEffect)((() => {
            n && c(n)
          }), [n]), (0, t.useEffect)((() => {
            "" !== s || m()
          }), [s]), (0, t.useEffect)((() => {
            if ("" === s) return;
            const e = !!s;
            if (e || b || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: n
                    } = e;
                    const {
                      gateway: a,
                      silentCheck: t
                    } = (0, r.getConfigForDomain)(), o = {
                      method: "POST",
                      body: `fingerprint=${await f().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, i = await fetch(t, o);
                    if (200 !== i.status) return void n(!1);
                    const s = `${a}?code=${await i.json()}`,
                      l = await fetch(s, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: d
                      } = await l.json();
                    return n(d), d
                  })({
                    token: c
                  })
                } catch (e) {}
              })(), A(!0)), !e && b && u(!1), e) {
              const e = (e => {
                let {
                  bearerToken: n
                } = e;
                const a = (0, _.s)(n),
                  {
                    host: t
                  } = (0, r.getConfigForDomain)(),
                  o = parseInt(a.nameid),
                  i = a["scAuth.Nickname"],
                  s = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  l = new Date(a["scAuth.MemberSince"]),
                  d = new Date,
                  c = (0, h.M)(d, l) < 12,
                  m = (new Date).getTime() / 1e3;
                return {
                  id: o,
                  nonExpiredToken: (a?.exp ?? 0) - m > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: s,
                  isNewAccount: c,
                  nickname: i,
                  profile_link: `https://${t}.rockstargames.com/member/${i}?id=${o}`
                }
              })({
                bearerToken: s
              });
              d({
                ...l,
                ...e
              })
            }
          }), [s, b]), (0, t.useEffect)((() => {
            (async () => {
              if (g && l && o && !l?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: n,
                    rockstarId: a
                  } = e;
                  const {
                    crews: t
                  } = await (0, r.coreScApiFetch)("crew/forMember", {
                    pingBearer: n,
                    query: {
                      userId: a
                    }
                  });
                  return t
                })({
                  pingBearer: m,
                  rockstarId: l.id
                });
                d({
                  ...l,
                  crews: e
                }), k((e => e - 1))
              }
            })()
          }), [l?.nickname, o, g]), (0, t.useEffect)((() => {
            (async () => {
              if (!g || !l || l?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: n
                } = e;
                const {
                  all: a
                } = await (0, r.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: n
                });
                return a
              })({
                pingBearer: m
              });
              d({
                ...l,
                gamesPlayed: e
              }), k((e => e - 1))
            })()
          }), [l?.nickname, g]), (0, t.useEffect)((() => {
            (async () => {
              if (g && l && "gtao" === a && !l?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: n
                } = await (async e => {
                  let {
                    pingBearer: n,
                    nickname: a,
                    rockstarId: t
                  } = e;
                  const o = [],
                    i = await (0, r.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: n
                    });
                  await (i?.platforms?.reduce((async (e, a) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(a)) return;
                    const t = await (0, r.coreScApiFetch)(`games/gtao/characters?platform=${a}`, {
                      pingBearer: n
                    });
                    t?.status && t?.result?.map((e => {
                      const {
                        stats: n
                      } = e, {
                        overview: t
                      } = n, {
                        rank: r
                      } = t;
                      if ("0" === r.value) return;
                      const i = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return o.push({
                        ...e,
                        mugshotUrl: i,
                        platform: a
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: s,
                    accounts: l
                  } = await (0, r.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: n
                  });
                  if (!s || !l.length) return {
                    gtaoCharacters: o,
                    linkedAccounts: []
                  };
                  const d = l[0],
                    {
                      rockstarAccount: c,
                      linkedAccounts: m
                    } = d;
                  if (c?.rockstarId !== t) return {
                    gtaoCharacters: o,
                    linkedAccounts: []
                  };
                  if (!o.length) return {
                    gtaoCharacters: o,
                    linkedAccounts: d.linkedAccounts
                  };
                  const g = a;
                  let p = "",
                    u = "";
                  return m?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (u = e.userName), e))), o.sort(((e, n) => Number(n.activeCharacter) - Number(e.activeCharacter))), o.map(((e, n) => (e.platformUsername = g, e.index = n, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = u || g), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || g), e))), {
                    gtaoCharacters: o,
                    linkedAccounts: m
                  }
                })({
                  pingBearer: m,
                  nickname: l.nickname,
                  rockstarId: l.id
                });
                d({
                  ...l,
                  characters: {
                    ...l.characters,
                    gtao: e
                  },
                  linkedAccounts: n,
                  hasGtaPlus: "1" === e?.[i]?.stats?.overview?.hasGtaPlus?.value
                }), k((e => e - 1))
              }
            })()
          }), [a, l?.nickname, g]), (0, t.useEffect)((() => {
            l?.id && l?.nonExpiredToken && (u(!0), (0, p.K)(l.id))
          }), [JSON.stringify(l)]), {
            data: l,
            loggedIn: g,
            loading: v
          }
        },
        A = {},
        v = (0, r.setContextItem)({
          context: (0, t.createContext)(A),
          key: "userContext"
        }),
        w = e => {
          let {
            children: n,
            privateToken: a
          } = e;
          const r = b({
              privateToken: a
            }),
            o = (0, t.useMemo)((() => ({
              ...r,
              privateToken: a,
              hasProvider: !0
            })), [r]);
          return (0, l.jsx)(v.Provider, {
            value: o,
            children: n
          })
        },
        k = () => (0, t.useContext)(v)
    },
    85388: (e, n, a) => {
      a.r(n), a(44980), a(2876), a(74395), a(93180), a(43759), a(54936), a(66945), a(38585), a(71436), a(98073), a(30014), a(94323), a(6929), a(99598), a(26804), a(76580), a(32033), a(63612), a(62567);
      var t = a(95966),
        r = a(40347),
        o = a(62229),
        i = a(9623),
        s = a(72974),
        l = a(41263),
        d = a.n(l),
        c = a(73855);
      const m = e => {
        let {
          navigationData: n,
          searchConfig: a
        } = e;
        const t = (0, i.useLocation)(),
          r = (0, i.useNavigate)(),
          s = e => {
            e?.startsWith("http") ? window.location.href = e : r(e)
          },
          l = (0, o.useMemo)((() => n.reduce(((e, n) => n.appearancePaths ? [...e, ...n.appearancePaths.map((e => ({
            element: (0, c.jsx)(d(), {
              navData: n,
              location: t,
              onNavigate: s,
              searchConfig: a,
              routeOptions: e.options
            }),
            path: e.path
          })))] : e), [])), [t, n, a]);
        return (0, i.useRoutes)(l)
      };
      var g = a(55274),
        p = a.n(g),
        u = a(90);
      const f = "__MFE_GLOBAL_HOOK__",
        _ = () => {
          const e = window;
          e[f]?.history || (e[f] = Object.assign(e[f] || {}, {
            history: (0, u.createBrowserHistory)()
          }))
        },
        h = () => {
          const {
            pathname: e
          } = (0, i.useLocation)();
          return (0, o.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var b = a(2918);
      const A = (0, o.forwardRef)(((e, n) => {
        const {
          threshold: a,
          callback: t,
          children: r,
          requireUser: i
        } = e, {
          track: s
        } = (0, b.useGtmTrack)(i), [l, d] = (0, o.useState)(n?.current);
        return (0, o.useEffect)((() => {
          n?.current && d(n.current)
        }), [n]), ((e, n, a) => {
          const [t, r] = (0, o.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: i,
            scrollY: s
          } = t;
          (0, o.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, o.useEffect)((() => {
            r({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const l = (0, o.useCallback)((() => {
            const e = document.documentElement,
              o = document.body,
              s = a?.scrollTop || e.scrollTop || o.scrollTop,
              d = a?.scrollHeight || e.scrollHeight || o.scrollHeight,
              {
                clientHeight: c
              } = e,
              m = s / (d - c) * 100;
            if (i) {
              const e = Math.min(...i, d);
              if (m >= e) {
                const t = i.filter((n => n !== e));
                0 === t.length && (a ?? window).removeEventListener("scroll", l), n && n({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: t
                }), r({
                  scrollY: e,
                  scrollDepths: t
                })
              }
            } else r({
              ...t,
              scrollY: m
            })
          }), [i, a, n]);
          (0, o.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = a ?? window;
            return e.addEventListener("scroll", l), () => e.removeEventListener("scroll", l)
          }), [l])
        })(a, (e => {
          let {
            scrollY: n
          } = e;
          s({
            event: "page_scroll",
            scroll_depth: n
          }), "function" == typeof t && t(n)
        }), l), r
      }));
      A.displayName = "ScrollTracker";
      const v = A;
      var w = a(95945),
        k = a.n(w),
        y = a(63582),
        x = a(53178),
        C = a.n(x),
        z = a(27835),
        B = a.n(z),
        R = a(17529),
        I = a.n(R),
        S = a(72162),
        E = a.n(S),
        G = a(82510),
        j = a.n(G),
        N = a(90675),
        D = a.n(N),
        F = a(37327),
        M = {};
      M.styleTagTransform = D(), M.setAttributes = E(), M.insert = I().bind(null, "head"), M.domAPI = B(), M.insertStyleElement = j(), C()(F.A, M);
      const P = F.A && F.A.locals ? F.A.locals : void 0,
        T = e => {
          let {
            modal: n
          } = e;
          const {
            content: a,
            className: r,
            height: s,
            onClose: l,
            rect: d = {
              left: 0,
              top: 0
            },
            contentStyle: m = {},
            contentClassName: g = "",
            width: p,
            fadeIn: u = !0,
            cardIds: f,
            activeId: _,
            theme: h,
            title: A,
            gtm: v = {},
            aspectRatio: w = "default",
            cardDimensions: x
          } = n, {
            left: C,
            top: z
          } = d, B = f?.indexOf(_), [R, I] = (0, o.useState)(f?.length || 0), {
            track: S
          } = (0, b.useGtmTrack)(), E = null !== f && (f?.length || 0) > 1 && ("flag_bg" === h || "fob" === x?.size), G = window.location.href.includes("cms5"), [j, N] = (0, i.useSearchParams)(), [D, F] = (0, o.useState)(!1), [M, T] = (0, o.useState)(!1), [H, W] = (0, o.useState)(), U = e => {
            "number" == typeof e && f && e < f.length && e > -1 && N({
              info: f[e].toString()
            })
          }, L = () => {
            const e = "number" == typeof B && B > -1 ? B - 1 : 0;
            U(e), S({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: A,
              position: B
            })
          }, O = () => {
            const e = "number" == typeof B && B > -1 ? B + 1 : 0;
            U(e), S({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: A,
              position: B
            })
          };
          (0, o.useEffect)((() => {
            I(f?.length || 0)
          }), [f?.length]), (0, o.useEffect)((() => {
            null !== B && null !== f && U(B)
          }), [B, f]), (0, o.useEffect)((() => {
            const e = f?.findIndex((e => e === _));
            "number" == typeof e && (T(e <= 0), F(e >= R - 1))
          }), [f, _, R, j]);
          const [V] = (0, o.useState)({
            y: z,
            x: C,
            top: 0,
            left: 0,
            width: p,
            height: s,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: E ? "0" : ""
          }), q = {
            opacity: 1
          }, J = (0, o.useRef)(null), Y = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, Q = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [K] = (0, o.useState)({
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
              x: Y,
              y: Y,
              top: Y,
              left: Y,
              width: Y,
              height: Y,
              border: Y,
              background: {
                delay: .3
              }
            }
          }), [$, Z] = (0, o.useState)({
            initial: V,
            shown: K
          });
          (0, o.useEffect)((() => {
            Z({
              initial: V,
              shown: K
            })
          }), [V, K]), (0, o.useEffect)((() => {
            const e = e => {
              "function" == typeof l && "Escape" === e.key && (l(), S({
                event: "modal_close",
                element_placement: A,
                ...v
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const X = () => {
              "function" == typeof l && (l(), S({
                event: "modal_close",
                element_placement: A,
                ...v
              }))
            },
            ee = (e, n) => {
              if (!e || !e.children || n < 0) return null;
              for (let a = 0; a < e.children.length; a++) {
                const t = e.children[a];
                if (t.scrollHeight > t.clientHeight) return t;
                const r = ee(t, n - 1);
                if (r) return r
              }
              return null
            },
            ne = e => {
              if (te?.current?.children) {
                let n = null;
                const a = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    n = (e => {
                      let n = null;
                      return H?.queried ? n = H.element : (n = ee(e, 2), W({
                        queried: !0,
                        element: n
                      })), n
                    })(te.current), e.preventDefault(), n && (n.scrollTop += a)
                }
              }
            },
            ae = u ? 0 : 1,
            te = (0, o.useRef)(null),
            re = (0, c.jsx)(y.motion.button, {
              className: P.closeButton,
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: Q,
              onClick: () => {
                X()
              },
              onKeyDown: ne,
              onKeyUp: ne
            });
          let oe = null;
          return oe = G ? o.Fragment : k(), (0, o.useMemo)((() => (0, c.jsx)("div", {
            className: P.modalRoot,
            "data-show-nav": E,
            "data-aspect-ratio": w,
            children: (0, c.jsx)(oe, {
              children: (0, c.jsxs)("div", {
                children: [(0, c.jsx)(y.motion.div, {
                  className: P.modalBackdrop,
                  initial: {
                    opacity: 0
                  },
                  animate: q,
                  transition: Y,
                  onClick: () => X()
                }), E && (0, c.jsxs)("div", {
                  className: P.modalNav,
                  children: [(0, c.jsxs)(y.motion.div, {
                    className: P.modalControls,
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: Q,
                    children: [(0, c.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: L,
                      disabled: M,
                      onKeyDown: ne,
                      onKeyUp: ne
                    }), (0, c.jsxs)("div", {
                      className: P.pager,
                      "data-theme": h,
                      children: [" ", (B ?? 0) + 1, (0, c.jsx)("div", {
                        className: P.pagerDivider
                      }), f?.length, " "]
                    }), (0, c.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: O,
                      disabled: D,
                      onKeyDown: ne,
                      onKeyUp: ne,
                      "data-autofocus": !0
                    })]
                  }), re]
                }), (0, c.jsx)(y.motion.div, {
                  className: P.motionWrapper,
                  ref: J,
                  initial: "initial",
                  animate: "shown",
                  variants: $,
                  transition: Y,
                  style: m,
                  children: (0, c.jsxs)(y.motion.div, {
                    className: (0, t.classList)(P.modal, r),
                    id: "modal",
                    "data-testid": "modal",
                    role: "dialog",
                    children: [!E && re, (0, c.jsx)(y.motion.div, {
                      className: (0, t.classList)(P.modalContent, g),
                      initial: {
                        opacity: ae
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: Q,
                      ref: te,
                      children: a
                    }), (0, c.jsx)("button", {
                      className: P.endOfModal,
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [a, B, m])
        },
        H = [null, () => null],
        W = (0, t.setContextItem)({
          context: (0, o.createContext)(H),
          key: "modalContext"
        }),
        U = e => {
          let {
            children: n
          } = e;
          const [a, r] = (0, o.useState)(H), {
            setBodyIsLocked: i
          } = (0, t.useBodyScrollable)("ModalProvider"), s = (0, o.useMemo)((() => a?.content ? (0, c.jsx)(T, {
            modal: a
          }) : null), [a]), l = () => i(!1);
          return (0, o.useEffect)((() => (window.addEventListener("popstate", l), () => {
            window.removeEventListener("popstate", l)
          })), []), (0, o.useEffect)((() => {
            i(!!s)
          }), [s]), (0, c.jsx)(W.Provider, {
            value: [s, r],
            children: n
          })
        };
      var L = a(85712),
        O = a(42582),
        V = a(20025),
        q = a(81788),
        J = a(28223),
        Y = a(70241),
        Q = a(39848),
        K = a.n(Q);
      const $ = function(e) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const a = (0, o.lazy)(e);
          return (0, o.useMemo)((() => (0, c.jsx)(o.Suspense, {
            fallback: "",
            children: (0, c.jsx)(a, {
              ...n
            })
          })), [])
        },
        Z = (0, J.A)((() => {
          const {
            setError: e,
            state: n
          } = (0, Y.b)(), {
            error: t
          } = n, {
            pathname: r
          } = (0, i.useLocation)();
          (0, o.useEffect)((() => {
            e()
          }), [r]), (0, o.useEffect)((() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }), []);
          const s = {
            path: "*",
            element: $((() => Promise.resolve().then(a.bind(a, 14681))), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let l = [{
            path: "/",
            element: $((() => Promise.all([a.e(8786), a.e(9323), a.e(6893), a.e(2824), a.e(5981), a.e(7057), a.e(7851), a.e(4459), a.e(7587), a.e(633), a.e(4505), a.e(3733), a.e(2718)]).then(a.bind(a, 52718))))
          }, {
            path: "/careers-privacy",
            element: $((() => Promise.all([a.e(6893), a.e(6274), a.e(5765)]).then(a.bind(a, 65765))))
          }, {
            path: "/ccpa",
            element: $((() => Promise.all([a.e(6893), a.e(6274), a.e(6401)]).then(a.bind(a, 46401))))
          }, {
            path: "/community-guidelines",
            element: $((() => Promise.all([a.e(8786), a.e(4459), a.e(220), a.e(8386)]).then(a.bind(a, 29140))))
          }, {
            path: "/community-guidelines/resources",
            element: $((() => Promise.all([a.e(8786), a.e(4459), a.e(220), a.e(1794)]).then(a.bind(a, 81794))))
          }, {
            path: "/conduct",
            element: (0, c.jsx)(i.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: $((() => a.e(6973).then(a.bind(a, 6973))))
          }, {
            path: "/cookies",
            element: $((() => Promise.all([a.e(6893), a.e(6274), a.e(1235)]).then(a.bind(a, 51235))))
          }, {
            path: "/corpinfo",
            element: $((() => Promise.all([a.e(6893), a.e(6274), a.e(7214)]).then(a.bind(a, 7214))))
          }, {
            path: "/VI",
            element: $((() => a.e(3326).then(a.t.bind(a, 43326, 23))), {
              footer: (0, c.jsx)(K(), {
                onLanguageChange: q.onLanguageChange
              })
            })
          }, {
            path: "/games",
            element: $((() => Promise.all([a.e(8786), a.e(2824), a.e(5981), a.e(7851), a.e(4459), a.e(633), a.e(3037)]).then(a.bind(a, 83037))))
          }, {
            path: "/games/:gameTitlelug",
            element: $((() => Promise.all([a.e(6893), a.e(2824), a.e(5981), a.e(7057), a.e(7851), a.e(7587), a.e(2843), a.e(1144), a.e(8069)]).then(a.bind(a, 88069))))
          }, {
            path: "/legal",
            element: $((() => Promise.all([a.e(6893), a.e(6274), a.e(9081)]).then(a.bind(a, 99081))))
          }, {
            path: "/gta-v/thankyou",
            element: $((() => a.e(7269).then(a.bind(a, 27269))), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: $((() => a.e(5045).then(a.bind(a, 35045))))
          }, {
            path: "/community_event",
            element: $((() => Promise.all([a.e(7851), a.e(2843), a.e(5633)]).then(a.bind(a, 95633))))
          }, {
            path: "/reddeadredemption2/*",
            element: $((() => a.e(9147).then(a.t.bind(a, 29147, 23))))
          }, {
            path: "/reddeadredemption/*",
            element: $((() => a.e(7538).then(a.t.bind(a, 47538, 23))))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, c.jsx)(i.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: $((() => a.e(5202).then(a.t.bind(a, 35202, 23))))
          }, {
            path: "/reddeadonline/thankyou",
            element: $((() => a.e(7269).then(a.bind(a, 27269))), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: $((() => a.e(3137).then(a.t.bind(a, 53137, 23))))
          }, {
            path: "/downloads/*",
            element: $((() => Promise.all([a.e(6893), a.e(2824), a.e(2973), a.e(1723)]).then(a.bind(a, 41723))))
          }, {
            path: "/reddeadonline/*",
            element: $((() => a.e(3416).then(a.t.bind(a, 33416, 23))))
          }, {
            path: "/gifs/:hashId",
            element: $((() => a.e(1626).then(a.t.bind(a, 41626, 23))))
          }, {
            path: "/gta-v/*",
            element: $((() => a.e(6766).then(a.t.bind(a, 36766, 23))), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: $((() => a.e(6766).then(a.t.bind(a, 36766, 23))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: $((() => a.e(5918).then(a.bind(a, 45918))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: $((() => a.e(6766).then(a.t.bind(a, 36766, 23))), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: $((() => a.e(2405).then(a.t.bind(a, 12405, 23))))
          }, {
            path: "/gtatv/*",
            element: $((() => a.e(8987).then(a.t.bind(a, 88987, 23))))
          }, {
            path: "/manuals",
            element: $((() => Promise.all([a.e(2824), a.e(2681), a.e(1144), a.e(2234)]).then(a.bind(a, 52234))))
          }, {
            path: "/manuals/music",
            element: $((() => Promise.all([a.e(2681), a.e(2973), a.e(7547)]).then(a.bind(a, 17547))))
          }, {
            path: "/newswire",
            element: $((() => Promise.all([a.e(8786), a.e(6893), a.e(7851), a.e(4459), a.e(7587), a.e(633), a.e(4505), a.e(6840)]).then(a.bind(a, 26840))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: $((() => a.e(3511).then(a.bind(a, 33511))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: $((() => a.e(3511).then(a.bind(a, 33511))))
          }, {
            path: "/privacy",
            element: $((() => Promise.all([a.e(6893), a.e(6274), a.e(3914)]).then(a.bind(a, 73914))))
          }, {
            path: "/refund-policy",
            element: $((() => a.e(40).then(a.bind(a, 10040))))
          }, {
            path: "/rockstartv/*",
            element: $((() => a.e(8778).then(a.t.bind(a, 78778, 23))))
          }, {
            path: "/screenshot-viewer/*",
            element: $((() => a.e(582).then(a.t.bind(a, 90582, 23))))
          }, {
            path: "/search",
            element: $((() => Promise.all([a.e(2824), a.e(5981), a.e(7057), a.e(7587), a.e(4783)]).then(a.bind(a, 84783))))
          }, {
            path: "/socialclubmaintenance",
            element: $((() => a.e(1212).then(a.bind(a, 11212))))
          }, {
            path: "/south-korean-privacy-addendum",
            element: $((() => Promise.all([a.e(6893), a.e(6274), a.e(4841)]).then(a.bind(a, 54841))))
          }, {
            path: "/unsubscribe",
            element: $((() => Promise.all([a.e(8786), a.e(6893), a.e(3274)]).then(a.bind(a, 63274))))
          }, {
            path: "/videos",
            element: $((() => Promise.all([a.e(7575), a.e(9323), a.e(6893), a.e(2824), a.e(5981), a.e(7057), a.e(3733), a.e(5881), a.e(2202)]).then(a.bind(a, 12202))))
          }, {
            path: "/videos/:videoId",
            element: $((() => Promise.all([a.e(7575), a.e(2824), a.e(5981), a.e(7057), a.e(5881), a.e(2185)]).then(a.bind(a, 72185))))
          }, {
            ...s
          }];
          return isNaN(parseInt(t?.code)) || 200 === t?.code || (l = [s]), (0, i.useRoutes)(l)
        }));
      var X = a(63683),
        ee = {};
      ee.styleTagTransform = D(), ee.setAttributes = E(), ee.insert = I().bind(null, "head"), ee.domAPI = B(), ee.insertStyleElement = j(), C()(X.A, ee);
      const ne = X.A && X.A.locals ? X.A.locals : void 0,
        ae = (0, t.withAutoRouteTracking)((e => {
          let {
            headerHidden: n
          } = e;
          return (0, c.jsx)("main", {
            role: "main",
            id: "main",
            className: [ne.main, n ? ne.headerHidden : ""].join(" "),
            children: (0, c.jsx)(Z, {})
          })
        }));
      var te = a(43967),
        re = a(52542);
      _();
      const oe = (() => {
          const e = window;
          if (e[f]?.history || _(), e[f]?.history) return e[f].history;
          throw new Error("Browser History has not been initialised")
        })(),
        ie = (0, q.withIntl)((() => {
          const {
            setFooterHidden: e,
            setHeaderHidden: n,
            state: a
          } = (0, Y.b)(), {
            footerHidden: t,
            headerHidden: r
          } = a, [g] = (0, o.useContext)(W), p = (0, i.useLocation)(), {
            data: u
          } = (0, L.Wx)();
          return (0, o.useEffect)((() => {
            const a = (0, te.Ek)({
                path: p.pathname
              }),
              t = (0, te.UN)({
                path: p.pathname
              });
            e(a), n(t)
          }), [p]), (0, c.jsx)(s.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: (0, c.jsx)(L.UN, {
              children: (0, c.jsxs)(v, {
                threshold: [25, 50, 75, 90, 100],
                children: [!r && (0, c.jsx)(c.Fragment, {
                  children: (0, c.jsx)(l.NavigationWrapper, {
                    globalNavLoaderComponent: m,
                    globalNavComponent: d()
                  })
                }), g, (0, c.jsx)(h, {}), (0, c.jsx)(ae, {
                  headerHidden: r
                }), !t && (0, c.jsx)(K(), {
                  onLanguageChange: q.onLanguageChange
                })]
              })
            })
          })
        }), re),
        se = (0, t.withRockstarGraph)((0, t.withReactiveState)((() => {
          const e = (0, t.useBase)(),
            {
              setTitle: n
            } = (0, Y.b)();
          return (0, o.useEffect)((() => {
            window.addEventListener("message", (e => {
              "graph.titleUpdate" === (e.data?.type ?? null) && n(e.data.title)
            }))
          }), []), (0, c.jsx)(O.uU, {
            children: (0, c.jsx)(V.N2, {
              children: (0, c.jsx)(L.iR, {
                children: (0, c.jsx)(p(), {
                  history: oe,
                  basename: e,
                  children: (0, c.jsx)(U, {
                    children: (0, c.jsx)(ie, {})
                  })
                })
              })
            })
          })
        }), {
          state: te.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        le = window?.env?.oneTrustId ?? null,
        de = window?.env?.gtmId ?? null;
      (0, t.gtmInit)({
        id: de
      }), (0, t.oneTrustInit)({
        id: le,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, r.H)(e).render((0, c.jsx)(se, {}))
        }
      })
    },
    70241: (e, n, a) => {
      a.d(n, {
        b: () => t.b$
      });
      var t = a(43967)
    },
    43967: (e, n, a) => {
      a.d(n, {
        Ek: () => o,
        UN: () => r,
        b$: () => s,
        wk: () => i
      });
      var t = a(95966);
      const r = e => {
          let {
            path: n
          } = e;
          return window.self !== window.top || (["/gifs", "/screenshot-viewer", "/VI", "/videoplayer"].find((e => n.includes(e))) ?? []).length > 0
        },
        o = e => {
          let {
            path: n
          } = e;
          return (["/gta-online/license-plates", "/VI"].find((e => n.includes(e))) ?? []).length > 0
        },
        i = (0, t.makeVar)({
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
          headerHidden: r({
            path: document.location.pathname
          }),
          footerHidden: o({
            path: document.location.pathname
          }),
          normalLogo: !0,
          search: ""
        }),
        s = () => {
          const e = (0, t.useState)(),
            n = (0, t.useMutateState)();
          return {
            state: e,
            toggleNavOpen: function() {
              let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              const {
                navOpen: t
              } = e;
              n({
                navOpen: null !== a ? a : !t
              })
            },
            clearError: () => {
              n({
                error: {
                  code: null,
                  message: null
                }
              })
            },
            setBreadcrumb: function() {
              let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              n({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: a,
                  filter: t
                }
              })
            },
            setLoading: e => {
              n({
                loading: e
              })
            },
            setNavHidden: e => {
              n({
                navHidden: e
              })
            },
            setNormalLogo: e => {
              n({
                normalLogo: e
              })
            },
            setSearch: e => {
              n({
                search: e
              })
            },
            setTitle: e => {
              const a = "Rockstar Games";
              let t = e;
              e.endsWith(a) || (t = `${e} - ${a}`), document.title = t, n({
                title: t
              })
            },
            setError: function() {
              let {
                code: e,
                message: a
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              n({
                error: {
                  code: e,
                  message: a
                }
              })
            },
            setFooterHidden: e => {
              n({
                footerHidden: e
              })
            },
            setHeaderHidden: e => {
              n({
                headerHidden: e
              })
            },
            updateGameData: a => {
              let {
                base: t = null,
                navOpen: r = !1
              } = a;
              const o = {
                ...e.gameData
              };
              null !== t && (o.base = t.replace(/\/$/, "")), null !== r && (o.navOpen = r), n({
                gameData: o
              })
            }
          }
        }
    },
    82602: (e, n, a) => {
      a.d(n, {
        A: () => g
      });
      var t = a(42587),
        r = a.n(t),
        o = a(15081),
        i = a.n(o),
        s = a(79908),
        l = a.n(s),
        d = new URL(a(37241), a.b),
        c = i()(r()),
        m = l()(d);
      c.push([e.id, `form.rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b{background:#111;border-radius:var(--image-rounding-static-xs);display:flex;position:relative}@media (min-width:768px){form.rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b{min-width:20rem}}form.rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b input{background-color:initial;border:none;color:#fff;outline:none;padding:var(--grid-gap-static-sm);width:100%}form.rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b input::-webkit-input-placeholder{color:hsla(0,0%,100%,.65);font-style:normal;letter-spacing:var(--letter-spacing-std)}form.rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b input:-moz-placeholder,form.rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b input::-moz-placeholder{color:hsla(0,0%,100%,.65);font-style:normal;letter-spacing:var(--letter-spacing-std)}form.rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b input:-ms-input-placeholder{color:hsla(0,0%,100%,.65);font-style:normal;letter-spacing:var(--letter-spacing-std)}form.rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b button{background-color:initial;background-image:url(${m});background-origin:content-box;background-position:0;background-repeat:no-repeat;border:none;content:"";cursor:pointer;margin:0 0 0 var(--grid-gap-static-sm);width:36px}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/SearchBox/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,uEACI,eAAA,CACA,6CAAA,CAEA,YAAA,CADA,iBA+BJ,CCoBI,yBAAA,uEDhDI,eAgCN,CACF,CAvCA,6EAYQ,wBAAA,CACA,WAAA,CAJA,UAAA,CAKA,YAAA,CAJA,iCAAA,CACA,UAoCR,CCsgBI,wGDtiBkB,yBAAA,CAAmC,iBAAA,CAAoB,wCAqC7E,CCugBI,6LD5iBkB,yBAAA,CAAmC,iBAAA,CAAoB,wCA+C7E,CCggBI,mGD/iBkB,yBAAA,CAAmC,iBAAA,CAAoB,wCAoD7E,CAnEA,8EAsBQ,wBAAA,CACA,wDAAA,CAGA,6BAAA,CAFA,qBAAA,CACA,2BAAA,CAJA,WAAA,CAHA,UAAA,CAEA,cAAA,CAOA,sCAAA,CARA,UA4DR",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\nform.searchBox {\n    background: #111;\n    border-radius: var(--image-rounding-static-xs);\n    position: relative;\n    display: flex;\n    .mdMin ({\n        min-width: 20rem;\n    });;\n    input {\n        color: white;\n        padding: var(--grid-gap-static-sm);\n        width: 100%;\n        background-color: transparent;\n        border: none;\n        outline: none;\n        .placeholder({color: rgba(255, 255, 255, 0.65) ; font-style: normal; letter-spacing: var(--letter-spacing-std);});\n    }\n    button {\n        content: '';\n        width: 36px;\n        cursor: pointer;\n        border: none;\n        background-color: transparent;\n        background-image: data-uri('./img/search.svg');\n        background-position: left center;\n        background-repeat: no-repeat;\n        background-origin: content-box;\n        margin: 0 0 0 var(--grid-gap-static-sm);\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), c.locals = {
        searchBox: "rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b"
      };
      const g = c
    },
    11835: (e, n, a) => {
      a.d(n, {
        A: () => s
      });
      var t = a(42587),
        r = a.n(t),
        o = a(15081),
        i = a.n(o)()(r());
      i.push([e.id, ".rockstargames-sites-rockstargamesedb30438bec02a28ec1d06d071bcf836{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-rockstargamesedb30438bec02a28ec1d06d071bcf836 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-rockstargamesedb30438bec02a28ec1d06d071bcf836:focus,.rockstargames-sites-rockstargamesedb30438bec02a28ec1d06d071bcf836:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-rockstargamesedb30438bec02a28ec1d06d071bcf836.rockstargames-sites-rockstargamesc1ac4227ecc3c60c4a623f13dd4609b6{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-rockstargamesedb30438bec02a28ec1d06d071bcf836.rockstargames-sites-rockstargamesc1ac4227ecc3c60c4a623f13dd4609b6 img{filter:invert()}.rockstargames-sites-rockstargamesea8cf4797c830e5b5dad68b2ec814e67{clip:rect(0 0 0 0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./../../buildtime/components/src/dom/A/index.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAjEA,mEDwYI,kBAAA,CADA,QAAA,CAEA,UAAA,CACA,eAAA,CACA,SAAA,CACA,iBAAA,CACA,kBAAA,CACA,SCnUJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.visuallyHidden {\n    .visuallyHidden();\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-sites-rockstargamesedb30438bec02a28ec1d06d071bcf836",
        selected: "rockstargames-sites-rockstargamesc1ac4227ecc3c60c4a623f13dd4609b6",
        visuallyHidden: "rockstargames-sites-rockstargamesea8cf4797c830e5b5dad68b2ec814e67"
      };
      const s = i
    },
    72760: (e, n, a) => {
      a.d(n, {
        A: () => s
      });
      var t = a(42587),
        r = a.n(t),
        o = a(15081),
        i = a.n(o)()(r());
      i.push([e.id, '.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e{align-items:center;display:flex;flex:1;flex-flow:column;justify-content:center;margin:0 auto;max-width:var(--max-width);padding:var(--padding-top-bottom) var(--padding-sides);width:100%}.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e>:not(:last-child){margin-bottom:var(--padding-top-bottom)}.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e a{background:transparent;padding:0;position:relative;z-index:1}@media (min-width:0px){.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e a,.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e a:before{transition:all .2s ease}.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e a:before{background:var(--body-color);border-radius:.25rem;bottom:0;content:"";display:block;height:2px;left:-.1rem;position:absolute;width:calc(100% + .2rem);z-index:-1}.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e a:hover{color:#161616}.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e a:hover:before{height:100%;left:-.25rem;width:calc(100% + .5rem)}}.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e a img{display:block}.rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e form{border-top:1px solid gray;max-width:450px;width:100%}', "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/error/Wasted/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,mEAMI,kBAAA,CAHA,YAAA,CADA,MAAA,CAEA,gBAAA,CACA,sBAAA,CCmYA,aAAA,CAFA,0BAAA,CAyUA,sDAAA,CAxUA,UD7VJ,CA1CA,qFASQ,uCAoCR,CA7CA,qECkmBI,sBAAA,CACA,SAAA,CAFA,iBAAA,CAGA,SDjjBJ,CCkjBI,uBAEI,iJADA,uBDliBN,CCmiBM,4EAQI,4BAAA,CAGA,oBAAA,CAPA,QAAA,CAHA,UAAA,CACA,aAAA,CAKA,UAAA,CAFA,WAAA,CAFA,iBAAA,CAGA,wBAAA,CAIA,UD7iBV,CCgjBM,2EACI,aD9iBV,CCgjBU,kFAGI,WAAA,CAFA,YAAA,CACA,wBD7iBd,CACF,CA7EA,yEC+nBQ,aD/iBR,CAhFA,wEAiBQ,yBAAA,CADA,eAAA,CADA,UAsER",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.error {\n    .standardPage;\n    flex: 1;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n\n    > *:not(:last-child) {\n        margin-bottom: var(--padding-top-bottom);\n    }\n    a {\n        .fancyLink;\n    }\n    form {\n        width: 100%;\n        max-width: 450px;\n        border-top: 1px solid gray;\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        error: "rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e"
      };
      const s = i
    },
    37327: (e, n, a) => {
      a.d(n, {
        A: () => ie
      });
      var t = a(42587),
        r = a.n(t),
        o = a(15081),
        i = a.n(o),
        s = a(79908),
        l = a.n(s),
        d = new URL(a(50228), a.b),
        c = new URL(a(304), a.b),
        m = new URL(a(79539), a.b),
        g = new URL(a(61494), a.b),
        p = new URL(a(313), a.b),
        u = new URL(a(94904), a.b),
        f = new URL(a(49027), a.b),
        _ = new URL(a(83493), a.b),
        h = new URL(a(53037), a.b),
        b = new URL(a(93803), a.b),
        A = new URL(a(69400), a.b),
        v = new URL(a(44840), a.b),
        w = new URL(a(28168), a.b),
        k = new URL(a(40792), a.b),
        y = new URL(a(31431), a.b),
        x = new URL(a(51594), a.b),
        C = new URL(a(21130), a.b),
        z = new URL(a(57390), a.b),
        B = new URL(a(36606), a.b),
        R = new URL(a(73075), a.b),
        I = new URL(a(16183), a.b),
        S = new URL(a(28255), a.b),
        E = new URL(a(94436), a.b),
        G = new URL(a(16465), a.b),
        j = new URL(a(69308), a.b),
        N = i()(r()),
        D = l()(d),
        F = l()(c),
        M = l()(m),
        P = l()(g),
        T = l()(p),
        H = l()(u),
        W = l()(f),
        U = l()(_),
        L = l()(h),
        O = l()(b),
        V = l()(A),
        q = l()(v),
        J = l()(w),
        Y = l()(k),
        Q = l()(y),
        K = l()(x),
        $ = l()(C),
        Z = l()(z),
        X = l()(B),
        ee = l()(R),
        ne = l()(I),
        ae = l()(S),
        te = l()(E),
        re = l()(G),
        oe = l()(j);
      N.push([e.id, `.rockstargames-sites-rockstargamesefe4ed4cfd87f552a137f6c716a274c7{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-rockstargamesefe4ed4cfd87f552a137f6c716a274c7 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-rockstargamesefe4ed4cfd87f552a137f6c716a274c7:focus,.rockstargames-sites-rockstargamesefe4ed4cfd87f552a137f6c716a274c7:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-rockstargamesefe4ed4cfd87f552a137f6c716a274c7.rockstargames-sites-rockstargamesbd8c836e1ee4b30e86ec5405e3c00390{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-rockstargamesefe4ed4cfd87f552a137f6c716a274c7.rockstargames-sites-rockstargamesbd8c836e1ee4b30e86ec5405e3c00390 img{filter:invert()}[data-theme=rockstar_default_deck]{--font-family-h:HelveticaNowDisplayBold;--font-family-body:HelveticaNowText;--letter-spacing-h:-0.025em}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e{--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--text-light:#e8e8e8;--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;--modal-controlsHeight:3rem;--modal-padding:var(--padding-sm,1rem);--modal-heightDesired:calc((100vh - var(--promo-banner-height, 0px)) - (var(--modal-padding) * 2));--modal-height:min(var(--modal-heightDesired),50vw);--modal-heightMax:calc((100vh - var(--promo-banner-height, 0px)) - var(--modal-controlsHeight) - (var(--modal-padding) * 4));--modal-heightActual:min(var(--modal-height),var(--modal-heightMax));--fob-image-width:calc((var(--modal-heightActual) / 79) * 64);--modal-fob-maxwidth:calc((var(--modal-heightActual) / 360) * 569);--modal-fob-desired:79vw;--modal-fob-actual:min(var(--modal-fob-maxwidth),var(--modal-fob-desired));height:100%;left:0;overflow:hidden;position:fixed;top:0;width:100%;z-index:1000}@media (min-width:2560px){.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e{--spacing-lg:2rem;--spacing-xl:4rem}}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:400;src:url(${D}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:700;src:url(${F}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:400;src:url(${M}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:700;src:url(${P}) format("woff")}@font-face{font-family:Pricedown;font-style:normal;font-weight:700;src:url(${T}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:400;src:url(${H}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:700;src:url(${W}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:900;src:url(${U}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:400;src:url(${L}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:400;src:url(${O}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:700;src:url(${V}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:700;src:url(${q}) format("woff")}@font-face{font-family:CorporateW05;font-style:normal;font-weight:400;src:url(${J}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:400;src:url(${Y}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:700;src:url(${Q}) format("woff")}@font-face{font-family:EurostileNextW05;font-style:normal;font-weight:700;src:url(${K}) format("woff")}@font-face{font-family:Diploma;font-style:normal;font-weight:400;src:url(${$}) format("woff")}@font-face{font-family:BrushScriptMT;font-style:normal;font-weight:400;src:url(${Z}) format("woff")}@font-face{font-family:BankGothicBT;font-style:normal;font-weight:400;src:url(${X}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:italic;font-weight:700;src:url(${ee}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:normal;font-weight:700;src:url(${ne}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:normal;font-weight:400;src:url(${ae}) format("woff")}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e :lang(pl_pl){--font-family-h:NeueHelveticaPaneuropean;--font-family-std:NeueHelveticaPaneuropean}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e :lang(ru_ru){--font-family-h:NeueHelveticaPaneuropean}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e [data-type-lang=pl],.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e [data-type-lang=ru]{font-family:NeueHelveticaPaneuropean!important}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e :lang(zh_hans){--font-family-h:ChaletComprime,NotoSansSC;--font-family-body:NotoSansSC}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e [data-type-lang=zh]{font-family:ChaletComprime,NotoSansSC!important}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e :lang(zh_tw){--font-family-h:ChaletComprime,NotoSansTC;--font-family-body:NotoSansTC}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e [data-type-lang=tw]{font-family:ChaletComprime,NotoSansTC!important}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e :lang(ja_jp){--font-family-h:ChaletComprime,NotoSansJP;--font-family-body:NotoSansJP}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e [data-type-lang=jp]{font-family:ChaletComprime,NotoSansJP!important}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e :lang(ko_kr){--font-family-h:ChaletComprime,NotoSansKR;--font-family-body:NotoSansKR}.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e [data-type-lang=kr]{font-family:ChaletComprime,NotoSansKR!important}@supports (height:100dvh){.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e{--modal-heightDesired:calc((100dvh - var(--promo-banner-height, 0px)) - (var(--modal-padding) * 2))}}@media (max-width:1024px),(orientation:portrait){.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e[data-show-nav=true]{--modal-heightDesired:calc((100vh - var(--promo-banner-height, 0px)) - (var(--modal-controlsHeight)) - (var(--modal-padding) * 3))}@supports (height:100dvh){.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e[data-show-nav=true]{--modal-heightDesired:calc((100dvh - var(--promo-banner-height, 0px)) - (var(--modal-controlsHeight)) - (var(--modal-padding) * 3))}}}@supports (height:100dvh){.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e{--modal-heightMax:calc((100dvh - var(--promo-banner-height, 0px)) - var(--modal-controlsHeight) - (var(--modal-padding) * 3))}}@media (min-width:1920px){.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e{--modal-heightActual:min(1080px,50vw)}}@media (orientation:landscape) and (min-width:1024px) and (max-height:1210px){.rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e{--modal-halfScreenWidth:50vw;--modal-heightActual:min(var(--modal-heightMax),var(--modal-halfScreenWidth))}}.rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0{display:flex;height:100%;justify-content:center;width:100%;z-index:10}.rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714{--modal-content-padding:calc(var(--modal-padding) + var(--padding-xl)) 0;display:flex;flex:1;overflow-x:hidden;overflow-y:auto;padding:var(--modal-content-padding,0)}@media (min-width:768px){.rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714{--modal-content-padding:calc(var(--modal-padding) + var(--padding-lg)) 0}}@media (min-width:1024px){.rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714{--modal-content-padding:calc(var(--modal-padding) + var(--padding-md)) 0}}@media (min-width:1920px){.rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714{--modal-content-padding:calc(var(--modal-padding) + var(--padding-md)) var(--padding-lg) var(--padding-lg)}}@media (min-width:2560px){.rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714{--modal-content-padding:calc(var(--modal-padding) + var(--padding-md)) 0}}@media (min-width:1920px){.rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714{max-width:var(--modal-content-max-width,none)}}.rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714>*{flex:1}.rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d{background:var(--black-65,rgba(0,0,0,.65));border:1px solid var(--white-100,#fff);border-radius:50%;cursor:pointer;height:2rem;padding:0;position:relative;position:absolute;right:var(--padding-sm,1rem);top:var(--padding-sm,1rem);transition:background .3s ease-in-out;width:2rem;z-index:2}.rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d:after{background:url(${te}) no-repeat 50%/1rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}.rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d:focus{border:none;outline:none}@media (pointer:coarse){.rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d:active{background:var(--white-100,#fff)}.rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d:active:after{filter:invert(1)}}@media not ((pointer:coarse)){.rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d:focus,.rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d:hover{background:var(--white-100,#fff)}.rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d:focus:after,.rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d:hover:after{filter:invert(1)}}[data-show-nav=true] .rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d{top:50%;transform:translateY(-50%)}@media (min-width:1024px){[data-show-nav=false] .rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d{right:var(--padding-md,1rem);top:var(--padding-md,1rem)}}@media (min-width:1920px){[data-show-nav=true] .rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d{right:0}}[data-aspect-ratio=fob] .rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d{right:0}.rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{--black-100:#121212;border:1px solid var(--border-color,#2d2d2d);border-radius:var(--border-radius-lg,16px);bottom:0;left:0;overflow:hidden;position:fixed;top:0;z-index:1000}[data-show-nav=true] .rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{margin-top:var(--modal-controlsHeight);transition:margin-top .3s ease-in .1s}@media (orientation:landscape) and (min-width:1024px){.rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{max-height:var(--modal-heightMax);max-width:200vh}}@media (orientation:landscape) and (min-width:1024px) and (max-width:1439px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{height:660px;max-width:1284px}}@media (orientation:landscape) and (min-width:1024px) and (min-width:1440px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{max-width:var(--modal-fob-actual)}}@media (orientation:landscape) and (min-width:1920px){.rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{max-height:1080px;max-width:1920px}}@media (orientation:landscape) and (min-width:1920px) and (max-width:1439px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{height:660px;max-width:1284px}}@media (orientation:landscape) and (min-width:1024px) and (max-height:1210px){.rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{max-height:var(--modal-heightMax);max-width:200vh}}@media (orientation:landscape) and (min-width:1024px) and (max-height:1210px) and (max-width:1439px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{height:660px;max-width:1284px}}@media (orientation:landscape) and (min-width:1024px) and (max-height:1210px) and (min-width:1440px) and (min-height:800px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{max-width:var(--modal-fob-actual)}}@media (orientation:landscape) and (min-width:1440px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{min-width:calc(var(--fob-image-width) + var(--max-width-static))}}@media (max-width:1024px),(orientation:portrait){.rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366{height:var(--modal-heightDesired)!important}}.rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342{background:rgba(0,0,0,.9);height:100vh;opacity:0;position:fixed;width:100vw;z-index:1000}.rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{height:var(--modal-controlsHeight);left:50%;margin-top:calc((var(--modal-heightActual) * .5) * -1);position:fixed;top:calc(50% + (var(--modal-controlsHeight) - var(--modal-padding)));transform:translate(-50%,calc(-100% - var(--spacing-sm)));width:100%;z-index:1001}@media (max-width:1024px),(orientation:portrait){.rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{margin-top:0;top:var(--modal-padding);transform:translateX(-50%)}}@media (orientation:landscape) and (min-width:1024px){.rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{max-width:200vh}}@media (min-width:1920px){.rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{left:50%;max-width:1920px;transform:translate(-50%,calc(-100% - var(--spacing-sm)));width:calc(100vw - (var(--modal-padding) * 2))}}[data-aspect-ratio=fob] .rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{width:calc(100vw - (var(--modal-padding) * 2))}@media (orientation:landscape) and (min-width:1024px) and (max-width:1439px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{max-width:1284px}}@media (orientation:landscape) and (min-width:1024px) and (min-width:1440px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{max-width:var(--modal-fob-actual)}}@media (orientation:landscape) and (min-width:1920px) and (max-width:1439px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{max-width:1284px}}@media (orientation:landscape) and (min-width:1024px) and (max-height:1210px) and (max-width:1439px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{max-width:1284px}}@media (orientation:landscape) and (min-width:1024px) and (max-height:1210px) and (min-width:1440px) and (min-height:800px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{max-width:var(--modal-fob-actual)}}@media (orientation:landscape) and (min-width:1440px){[data-aspect-ratio=fob] .rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b{min-width:calc(var(--fob-image-width) + var(--max-width-static))}}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8{align-items:center;background-color:var(--black-200);border:1px solid var(--border-color);border-radius:var(--border-radius-sm);display:flex;left:50%;overflow:hidden;position:fixed;transform:translateX(-50%)}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button{border:none;cursor:pointer}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child{background:var(--black-65,rgba(0,0,0,.65));background:var(--black-200);background-color:initial;border:none;border-radius:50%;border-radius:0;cursor:pointer;height:3rem;padding:0;position:relative;transition:background .3s ease-in-out;width:3rem}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child:after{background:url(${re}) no-repeat 50%/1rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child:focus{border:none;outline:none}@media (pointer:coarse){.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child:active{background:var(--white-100,#fff)}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child:active:after{filter:invert(1)}}@media not ((pointer:coarse)){.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child:focus,.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child:hover{background:var(--white-100,#fff)}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child:focus:after,.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child:hover:after{filter:invert(1)}}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:first-child:after{background-size:1.5rem}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child{background:var(--black-65,rgba(0,0,0,.65));background:var(--black-200);background-color:initial;border:none;border-radius:50%;border-radius:0;cursor:pointer;height:3rem;padding:0;position:relative;transition:background .3s ease-in-out;width:3rem}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child:after{background:url(${oe}) no-repeat 50%/1rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child:focus{border:none;outline:none}@media (pointer:coarse){.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child:active{background:var(--white-100,#fff)}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child:active:after{filter:invert(1)}}@media not ((pointer:coarse)){.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child:focus,.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child:hover{background:var(--white-100,#fff)}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child:focus:after,.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child:hover:after{filter:invert(1)}}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button:last-child:after{background-size:1.5rem}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button[disabled]{background-color:var(--black-200);pointer-events:none}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 button[disabled]:after{filter:none!important;opacity:.15}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 .rockstargames-sites-rockstargamese316695281c4c56337307741bda1371f{align-items:center;color:var(--color-override,var(--color-h));display:flex;font-family:var(--font-family-h);font-size:calc(var(--font-size-4) * var(--header-multiplier));font-weight:var(--font-weight-regular);justify-content:center;letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-md);padding:.1875rem var(--padding-xs) 0}.rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8 .rockstargames-sites-rockstargamesc1ee424eae15f7b789c86e634df9e28d{background-color:var(--white-100);border-radius:1px;height:1rem;margin:0 .3rem;transform:rotate(15deg);width:.1rem}.rockstargames-sites-rockstargamesea8f15b1bfbda9f3efef89dc0d2ebc89{bottom:0;opacity:0;pointer-events:none;position:absolute;right:0}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./../../buildtime/components/src/providers/modal/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-typography.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CA3DC,mCACG,uCAAA,CACA,mCAAA,CACA,2BA6DJ,CA7CA,mEC1BA,2BAAA,CACA,gCAAA,CAGA,yBAAA,CACA,sBAAA,CAGA,uBAAA,CACA,oBAAA,CAGA,kBAAA,CACA,oBAAA,CACA,oBAAA,CAGA,gBAAA,CACA,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CAEA,gBAAA,CACA,8BAAA,CACA,6BAAA,CACA,8BAAA,CACA,oBAAA,CAEA,qBAAA,CACA,aAAA,CACA,uBAAA,CACA,uBAAA,CACA,0BAAA,CACA,yBAAA,CACA,mBAAA,CAEA,qBAAA,CAGA,0BAAA,CACA,8BAAA,CAEA,qBAAA,CACA,oBAAA,CAGA,4BAAA,CACA,gCAAA,CAGA,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAIA,iCAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CAGA,gCAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CAGA,+BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CAGA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,uBAAA,CAGA,sGAAA,CAMA,2EAAA,CAOA,4BAAA,CDlFI,2BAAA,CACA,sCAAA,CAGA,kGAAA,CAuBA,mDAAA,CAGA,4HAAA,CAYA,oEAAA,CAYA,6DAAA,CACA,kEAAA,CACA,wBAAA,CACA,0EAAA,CAUA,WAAA,CAFA,MAAA,CAIA,eAAA,CANA,cAAA,CACA,KAAA,CAEA,UAAA,CAEA,YAmEJ,CExDI,0BAAA,mEDpDE,qBDgHJ,CACF,CEhII,yBAAA,mEDwBI,iBAAA,CAAoB,iBD6G1B,CACF,CE0TI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFxTR,CEoTI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFlTR,CE8SI,WACI,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF5SR,CEwSI,WACI,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFtSR,CEkSI,WACI,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFhSR,CE4RI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF1RR,CEsRI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFpRR,CEgRI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF9QR,CE0QI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFxQR,CEoQI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFlQR,CE8PI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF5PR,CEwPI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFtPR,CEkPI,WACI,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFhPR,CE4OI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF1OR,CEsOI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFpOR,CEgOI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF9NR,CE0NI,WACI,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFxNR,CEoNI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFlNR,CE8MI,WACI,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF5MR,CEwMI,WACI,oCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFtMR,CEkMI,WACI,oCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFhMR,CE4LI,WACI,oCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF1LR,CA1RA,gFGMI,wCAAA,CACA,0CHuRJ,CA9RA,gFGWI,wCHsRJ,CAjSA,8KGgBI,8CHqRJ,CArSA,kFGqBI,yCAAA,CACA,6BHmRJ,CAzSA,uFGyBI,+CHmRJ,CA5SA,gFG8BI,yCAAA,CACA,6BHiRJ,CAhTA,uFGkCI,+CHiRJ,CAnTA,gFGuCI,yCAAA,CACA,6BH+QJ,CAvTA,uFG2CI,+CH+QJ,CA1TA,gFGgDI,yCAAA,CACA,6BH6QJ,CA9TA,uFGoDI,+CH6QJ,CAtTI,0BAAA,mEACI,mGAyTN,CACF,CAjVI,iDA6BI,uFACI,kIAuTV,CAnTU,0BAAA,uFACI,mIAsTZ,CACF,CACF,CA1SI,0BAAA,mEACI,6HA6SN,CACF,CEpRI,0BAAA,mEFjBI,qCAySN,CACF,CA/VI,8EAAA,mEAyDQ,4BAAA,CACA,6EA0SV,CACF,CApRA,mEACI,YAAA,CACA,WAAA,CACA,sBAAA,CACA,UAAA,CACA,UAsRJ,CAnRA,mEACI,wEAAA,CAcA,YAAA,CACA,MAAA,CAKA,iBAAA,CACA,eAAA,CALA,sCA0QJ,CElVI,yBAAA,mEF0DI,wEA4RN,CACF,CErUI,0BAAA,mEF2CI,wEA8RN,CACF,CExTI,0BAAA,mEF4BI,0GAgSN,CACF,CE3SI,0BAAA,mEFaI,wEAkSN,CACF,CElUI,0BAAA,mEFsCI,6CAgSN,CACF,CApTA,qEAyBQ,MA8RR,CA1RA,mEDwDI,0CAAA,CACA,sCAAA,CACA,iBAAA,CAHA,cAAA,CAFA,WAAA,CAMA,SAAA,CALA,iBAAA,CCpDA,iBAAA,CAEA,4BAAA,CADA,0BAAA,CDyDA,qCAAA,CARA,UAAA,CC/CA,SAoSJ,CD5OI,yEAvBA,sEAAA,CAyBI,UAAA,CACA,aAAA,CACA,WAAA,CAGA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,0BAAA,CAJA,UCkPR,CD3OI,yEAEI,WAAA,CADA,YC8OR,CD/FI,wBA1II,0EACI,gCC4OV,CD3OU,gFACI,gBC6Od,CACF,CDpGI,8BAtII,kJAEI,gCC6OV,CD5OU,8JACI,gBC+Od,CACF,CAnUI,wFACI,OAAA,CACA,0BAqUR,CEhZI,0BF+EI,yFAEI,4BAAA,CADA,0BAqUV,CACF,CEpYI,0BFoEI,wFACI,OAmUV,CACF,CAhUI,2FACI,OAkUR,CA1TA,mEACI,mBAAA,CAEA,4CAAA,CADA,0CAAA,CAMA,QAAA,CADA,MAAA,CAEA,eAAA,CALA,cAAA,CAEA,KAAA,CADA,YAgUJ,CA1TI,wFAEI,sCAAA,CADA,qCA6TR,CE7aI,sDAAA,mEFsHQ,iCAAA,CACA,eA2TV,CACF,CAzTgB,6EAAA,2FAEI,YAAA,CADA,gBA6TlB,CACF,CA3TgB,6EAAA,2FACI,iCA8TlB,CACF,CE5aI,sDAAA,mEFmHQ,iBAAA,CADA,gBA+TV,CACF,CA5TgB,6EAAA,2FAEI,YAAA,CADA,gBAgUlB,CACF,CA9fI,8EAAA,mEAmMQ,iCAAA,CACA,eA+TV,CACF,CA7TgB,qGAAA,2FAEI,YAAA,CADA,gBAiUlB,CACF,CA/TgB,4HAAA,2FACI,iCAkUlB,CACF,CA/TQ,sDACI,2FACI,gEAiUd,CACF,CA1hBI,iDAAA,mEAgOI,2CA8TN,CACF,CA3TA,mEAII,yBAAA,CAFA,YAAA,CAGA,SAAA,CAFA,cAAA,CAFA,WAAA,CAKA,YA6TJ,CA1TA,mEAOI,kCAAA,CADA,QAAA,CAFA,sDAAA,CAFA,cAAA,CAGA,oEAAA,CAFA,yDAAA,CAKA,UAAA,CAPA,YAmUJ,CAjjBI,iDAAA,mEAyPI,YAAA,CADA,wBAAA,CAEA,0BA6TN,CACF,CE9fI,sDAAA,mEFqMQ,eA6TV,CACF,CEjfI,0BAAA,mEF2LI,QAAA,CADA,gBAAA,CAFA,yDAAA,CACA,8CA+TN,CACF,CA3TI,2FACI,8CA6TR,CAzTgB,6EAAA,2FACI,gBA4TlB,CACF,CA3TgB,6EAAA,2FACI,iCA8TlB,CACF,CA3TgB,6EAAA,2FACI,gBA8TlB,CACF,CA3TgB,qGAAA,2FACI,gBA8TlB,CACF,CA7TgB,4HAAA,2FACI,iCAgUlB,CACF,CA9TY,sDAAA,2FACI,gEAiUd,CACF,CA1TA,mEAEI,kBAAA,CACA,iCAAA,CACA,oCAAA,CACA,qCAAA,CAJA,YAAA,CAMA,QAAA,CACA,eAAA,CAFA,cAAA,CAGA,0BA4TJ,CArUA,0EAYQ,WAAA,CACA,cA4TR,CAzTQ,sFDxIJ,0CAAA,CA+DA,2BAAA,CC2EQ,wBAAA,CDzER,WAAA,CA/DA,iBAAA,CA8DA,eAAA,CAjEA,cAAA,CAFA,WAAA,CAMA,SAAA,CALA,iBAAA,CAMA,qCAAA,CARA,UCodJ,CD3cI,4FAvBA,sEAAA,CAyBI,UAAA,CACA,aAAA,CACA,WAAA,CAGA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,0BAAA,CAJA,UCidR,CD1cI,4FAEI,WAAA,CADA,YC6cR,CD9TI,wBA1II,6FACI,gCC2cV,CD1cU,mGACI,gBC4cd,CACF,CDnUI,8BAtII,wLAEI,gCC4cV,CD3cU,oMACI,gBC8cd,CACF,CD/aI,4FACI,sBCibR,CAtWQ,qFD9IJ,0CAAA,CA+DA,2BAAA,CCiFQ,wBAAA,CD/ER,WAAA,CA/DA,iBAAA,CA8DA,eAAA,CAjEA,cAAA,CAFA,WAAA,CAMA,SAAA,CALA,iBAAA,CAMA,qCAAA,CARA,UCugBJ,CD9fI,2FAvBA,sEAAA,CAyBI,UAAA,CACA,aAAA,CACA,WAAA,CAGA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,0BAAA,CAJA,UCogBR,CD7fI,2FAEI,WAAA,CADA,YCggBR,CDjXI,wBA1II,4FACI,gCC8fV,CD7fU,kGACI,gBC+fd,CACF,CDtXI,8BAtII,sLAEI,gCC+fV,CD9fU,kMACI,gBCigBd,CACF,CDleI,2FACI,sBCoeR,CApZQ,oFAEI,iCAAA,CADA,mBAuZZ,CAnZY,0FAEI,qBAAA,CADA,WAsZhB,CAvbA,sIA2CQ,kBAAA,CDrVJ,0CAAA,CCmVI,YAAA,CDvVJ,gCAAA,CADA,6DAAA,CAGA,sCAAA,CCsVI,sBAAA,CDrVJ,sCAAA,CAFA,iCAAA,CCyVI,oCAuZR,CAncA,sIAgDQ,iCAAA,CAIA,iBAAA,CAFA,WAAA,CAGA,cAAA,CAFA,uBAAA,CAFA,WA0ZR,CAlZA,mEAEI,QAAA,CAEA,SAAA,CACA,mBAAA,CAJA,iBAAA,CAEA,OAsZJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n// Variables\n@modalLargeStaticWidth: @screen-xl;\n@modalLargeStaticHeight: @modalLargeStaticWidth * 0.5625;\n@modalBackdrop--zIndex: 1000;\n\n&[data-theme='rockstar_default_deck'] {\n    --font-family-h: HelveticaNowDisplayBold;\n    --font-family-body: HelveticaNowText;\n    --letter-spacing-h: -0.025em;\n}\n\n// Breakpoints\n.modalBreakpointMobile(@rules) {\n    @media (orientation: portrait), (max-width: @screen-lg) {\n        @rules();\n    }\n}\n\n.modalBreakpointLargeShort(@rules) {\n    @media (min-width: @lg-min-width) and (max-height: 1210px) {\n        @rules();\n    }\n}\n\n.modalRoot {\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-typography.less';\n    // General vars\n    --modal-controlsHeight: 3rem;\n    --modal-padding: var(--padding-sm, 1rem);\n\n    // Height\n    --modal-heightDesired: calc(\n        (100vh - var(--promo-banner-height, 0px)) - (var(--modal-padding) * 2)\n    );\n    @supports (height: 100dvh) {\n        --modal-heightDesired: calc(\n            (100dvh - var(--promo-banner-height, 0px)) -\n                (var(--modal-padding) * 2)\n        );\n    }\n    .modalBreakpointMobile({\n        &[data-show-nav='true'] {\n            --modal-heightDesired: calc(\n                (100vh - var(--promo-banner-height, 0px)) - (var(--modal-controlsHeight)) -\n                    (var(--modal-padding) * 3)\n            );            \n            @supports (height: 100dvh) {\n                --modal-heightDesired: calc(\n                    (100dvh - var(--promo-banner-height, 0px)) - (var(--modal-controlsHeight)) -\n                        (var(--modal-padding) * 3)\n                );\n            }\n        }\n    });\n    --modal-height: min(var(--modal-heightDesired), 50vw);\n\n    // Max-height\n    --modal-heightMax: calc(\n        (100vh - var(--promo-banner-height, 0px)) - var(--modal-controlsHeight) -\n            (var(--modal-padding) * 4)\n    );\n    @supports (height: 100dvh) {\n        --modal-heightMax: calc(\n            (100dvh - var(--promo-banner-height, 0px)) -\n                var(--modal-controlsHeight) - (var(--modal-padding) * 3)\n        );\n    }\n\n    // Determines what height is being used\n    --modal-heightActual: min(var(--modal-height), var(--modal-heightMax));\n    .xl ({\n        --modal-heightActual: min(@modalLargeStaticHeight, 50vw);\n    });;\n    @media (orientation: landscape) {\n        .modalBreakpointLargeShort({\n            --modal-halfScreenWidth: 50vw;\n            --modal-heightActual: min(var(--modal-heightMax), var(--modal-halfScreenWidth));\n        });\n    }\n\n    // Front-of-Box vars\n    --fob-image-width: calc((var(--modal-heightActual) / 79) * 64);\n    --modal-fob-maxwidth: calc((var(--modal-heightActual) / 360) * 569);\n    --modal-fob-desired: 79vw;\n    --modal-fob-actual: min(\n        var(--modal-fob-maxwidth),\n        var(--modal-fob-desired)\n    );\n\n    // Window Styling\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1000;\n    overflow: hidden;\n}\n\n.modal {\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    width: 100%;\n    z-index: 10;\n}\n\n.modalContent {\n    --modal-content-padding: calc(var(--modal-padding) + var(--padding-xl)) 0;\n    .md ({\n        --modal-content-padding: calc(var(--modal-padding) + var(--padding-lg)) 0;\n    });;\n    .lg ({\n        --modal-content-padding: calc(var(--modal-padding) + var(--padding-md)) 0;\n    });;\n    .xl ({\n        --modal-content-padding: calc(var(--modal-padding) + var(--padding-md)) var(--padding-lg) var(--padding-lg);\n    });;\n    .xxl ({\n        --modal-content-padding: calc(var(--modal-padding) + var(--padding-md)) 0;\n    });;\n\n    display: flex;\n    flex: 1;\n    padding: var(--modal-content-padding, 0);\n    .xl ({\n        max-width: var(--modal-content-max-width, none);\n    });;\n    overflow-x: hidden;\n    overflow-y: auto;\n\n    > * {\n        flex: 1;\n    }\n}\n\n.closeButton {\n    .iconBtn('x');\n    position: absolute;\n    top: var(--padding-sm, 1rem);\n    right: var(--padding-sm, 1rem);\n    z-index: 2;\n\n    [data-show-nav='true'] & {\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    .lg ({\n        [data-show-nav=\"false\"] & {\n            top: var(--padding-md, 1rem);\n            right: var(--padding-md, 1rem);\n        }\n    });;\n\n    .xl ({\n        [data-show-nav=\"true\"] & {\n            right: 0;\n        }\n    });;\n\n    [data-aspect-ratio='fob'] & {\n        right: 0;\n    }\n}\n\n.motionWrapper {\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n}\n\n.motionWrapper {\n    --black-100: rgb(18, 18, 18);\n    border-radius: var(--border-radius-lg, 16px);\n    border: 1px solid var(--border-color, #2d2d2d);\n    position: fixed;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    overflow: hidden;\n\n    [data-show-nav='true'] & {\n        transition: margin-top 0.3s ease-in 0.1s;\n        margin-top: var(--modal-controlsHeight);\n    }\n\n    @media (orientation: landscape) {\n        .lg ({\n            max-height: var(--modal-heightMax) ; \n            max-width: 200vh;\n            \n            [data-aspect-ratio=\"fob\"] & {                \n                @media (max-width: 1439px) {\n                    max-width: 1284px;\n                    height: 660px\n                }\n                @media (min-width: 1440px) {\n                    max-width: var(--modal-fob-actual);\n                }\n            }\n        });;\n        .xl ({\n            max-width: @modalLargeStaticWidth;\n            max-height: @modalLargeStaticHeight;\n\n            [data-aspect-ratio='fob'] & {\n                @media (max-width: 1439px) {\n                    max-width: 1284px;\n                    height: 660px\n                }\n            }\n        });;\n        .modalBreakpointLargeShort({\n            max-height: var(--modal-heightMax);\n            max-width: 200vh;\n\n            [data-aspect-ratio='fob'] & {\n                @media (max-width: 1439px) {\n                    max-width: 1284px;\n                    height: 660px\n                }\n                @media (min-width: 1440px) and (min-height: 800px) {\n                    max-width: var(--modal-fob-actual);\n                }\n            }\n        });\n        @media (min-width: 1440px) {\n            [data-aspect-ratio='fob'] & {\n                min-width: calc(\n                    var(--fob-image-width) + var(--max-width-static)\n                );\n            }\n        }\n    }\n\n    .modalBreakpointMobile({\n        height: var(--modal-heightDesired) !important;\n    });\n}\n\n.modalBackdrop {\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    background: rgba(0, 0, 0, 0.9);\n    opacity: 0;\n    z-index: @modalBackdrop--zIndex;\n}\n\n.modalNav {\n    z-index: @modalBackdrop--zIndex + 1;\n    position: fixed;\n    transform: translate(-50%, calc(-100% - var(--spacing-sm)));\n    margin-top: calc((var(--modal-heightActual) * 0.5) * -1);\n    top: calc(50% + (var(--modal-controlsHeight) - var(--modal-padding)));\n    left: 50%;\n    height: var(--modal-controlsHeight);\n    width: 100%;\n\n    .modalBreakpointMobile({\n        top: var(--modal-padding);\n        margin-top: 0;\n        transform: translateX(-50%);\n    });\n\n    @media (orientation: landscape) {\n        .lg({\n            max-width: 200vh;\n        });\n    }\n\n    .xl ({\n        transform: translate(-50%, calc(-100% - var(--spacing-sm)));\n        width: calc(100vw - (var(--modal-padding) * 2));\n        max-width: @modalLargeStaticWidth;\n        left: 50%;\n    });;\n\n    [data-aspect-ratio='fob'] & {\n        width: calc(100vw - (var(--modal-padding) * 2));\n\n        @media (orientation: landscape) {\n            .lg ({\n                @media (max-width: 1439px) {\n                    max-width: 1284px;\n                }\n                @media (min-width: 1440px) {\n                    max-width: var(--modal-fob-actual);\n                }\n            });;\n            .xl ({\n                @media (max-width: 1439px) {\n                    max-width: 1284px;\n                }\n            });;\n            .modalBreakpointLargeShort({\n                @media (max-width: 1439px) {\n                    max-width: 1284px;\n                }\n                @media (min-width: 1440px) and (min-height: 800px) {\n                    max-width: var(--modal-fob-actual);\n                }\n            });\n            @media (min-width: 1440px) {\n                min-width: calc(\n                    var(--fob-image-width) + var(--max-width-static)\n                );\n            }\n        }\n    }\n}\n\n.modalControls {\n    display: flex;\n    align-items: center;\n    background-color: var(--black-200);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-sm);\n    position: fixed;\n    left: 50%;\n    overflow: hidden;\n    transform: translateX(-50%);\n\n    button {\n        border: none;\n        cursor: pointer;\n\n        // Previous button.\n        &:first-child {\n            .swiperBtn('chevron-left');\n            background-color: transparent;\n        }\n\n        // Next button.\n        &:last-child {\n            .swiperBtn('chevron-right');\n            background-color: transparent;\n        }\n\n        &[disabled] {\n            pointer-events: none;\n            background-color: var(--black-200);\n\n            // Arrow.\n            &::after {\n                opacity: 0.15;\n                filter: none !important;\n            }\n        }\n    }\n\n    .pager {\n        .headline-5();\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 0.1875rem var(--padding-xs) 0;\n    }\n\n    .pagerDivider {\n        background-color: var(--white-100);\n        width: 0.1rem;\n        height: 1rem;\n        transform: rotate(15deg);\n        border-radius: 1px;\n        margin: 0 0.3rem;\n    }\n}\n\n.endOfModal {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    opacity: 0;\n    pointer-events: none;\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n", "/*\nThis CSS resource incorporates links to web font and font software which is the valuable copyrighted property of House Industries and/or its suppliers. You expressly agree to not copy, install, redistribute, convert, modify, or reverse engineer this font software or the fonts rendered thereby. Please contact House Industries with any questions regarding Web Fonts: http://www.houseind.com\n*/\n\n@import './gen9-mixins.less';\n\n// GTA Fonts\n.loadFont(ChaletComprime, 400, normal, CHALETCOMPRIME-COLOGNESIXTYSC);\n.loadFont(ChaletComprime, 700, normal, ChaletComprime-HongKongSixty);\n.loadFont(Chalet, 400, normal, Chalet-LondonSixty);\n.loadFont(Chalet, 700, normal, Chalet-NewYorkSixty);\n.loadFont(Pricedown, 700, normal, Pricedown);\n.loadFont(NeueHelveticaW05, 400, normal, NeueHelveticaW05-Condensed);\n.loadFont(NeueHelveticaW05, 700, normal, NeueHelveticaW05-CondensedBold);\n.loadFont(NeueHelveticaW05, 900, normal, NeueHelveticaW05-CondensedExtraBlack);\n.loadFont(FrizQuadrataW05, 400, normal, FrizQuadrataW05-Regular);\n.loadFont(FrizQuadrataW05, 400, italic, FrizQuadrataW05-Italic);\n.loadFont(FrizQuadrataW05, 700, normal, FrizQuadrataW05-Bold);\n.loadFont(FrizQuadrataW05, 700, italic, FrizQuadrataW05-BoldItalic);\n.loadFont(CorporateW05, 400, normal, CorporateURWRegW05-Regular);\n.loadFont(NimbusSansW05, 400, normal, NimbusSansW05-Regular);\n.loadFont(NimbusSansW05, 700, normal, NimbusSansW05-Bold);\n.loadFont(EurostileNextW05, 700, normal, EurostileNextW05-ExtBold);\n.loadFont(Diploma, 400, normal, Diploma);\n.loadFont(BrushScriptMT, 400, normal, BrushScriptMT);\n.loadFont(BankGothicBT, 400, normal, BankGothicBT-Medium);\n.loadFont(NeueHelveticaPaneuropean, 700, italic, NeueHelveticaPaneuropean87CondensedHeavyOblique_italic_condensed);\n.loadFont(NeueHelveticaPaneuropean, 700, normal, NeueHelveticaPaneuropean87CondensedHeavy_normal_condensed);\n.loadFont(NeueHelveticaPaneuropean, 400, normal, HelveticaPanEuro-Md);\n\n// Localized Fonts\n// Polish\n:lang(pl_pl) {\n    --font-family-h: NeueHelveticaPaneuropean;\n    --font-family-std: NeueHelveticaPaneuropean;\n}\n// Russian\n:lang(ru_ru) {\n    --font-family-h: NeueHelveticaPaneuropean;\n}\n\n[data-type-lang='pl'],\n[data-type-lang='ru'] {\n    font-family: NeueHelveticaPaneuropean !important;\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    --font-family-h: ChaletComprime, NotoSansSC;\n    --font-family-body: NotoSansSC;\n}\n[data-type-lang='zh'] {\n    font-family: ChaletComprime, NotoSansSC !important;\n}\n\n// Chinese (Traditional)\n:lang(zh_tw) {\n    --font-family-h: ChaletComprime, NotoSansTC;\n    --font-family-body: NotoSansTC;\n}\n[data-type-lang='tw'] {\n    font-family: ChaletComprime, NotoSansTC !important;\n}\n\n// Japanese\n:lang(ja_jp) {\n    --font-family-h: ChaletComprime, NotoSansJP;\n    --font-family-body: NotoSansJP;\n}\n[data-type-lang='jp'] {\n    font-family: ChaletComprime, NotoSansJP !important;\n}\n\n// Korean\n:lang(ko_kr) {\n    --font-family-h: ChaletComprime, NotoSansKR;\n    --font-family-body: NotoSansKR;\n}\n[data-type-lang='kr'] {\n    font-family: ChaletComprime, NotoSansKR !important;\n}\n"],
        sourceRoot: ""
      }]), N.locals = {
        pillBtn: "rockstargames-sites-rockstargamesefe4ed4cfd87f552a137f6c716a274c7",
        selected: "rockstargames-sites-rockstargamesbd8c836e1ee4b30e86ec5405e3c00390",
        modalRoot: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
        modal: "rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0",
        modalContent: "rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714",
        closeButton: "rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d",
        motionWrapper: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
        modalBackdrop: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
        modalNav: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
        modalControls: "rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8",
        pager: "rockstargames-sites-rockstargamese316695281c4c56337307741bda1371f",
        pagerDivider: "rockstargames-sites-rockstargamesc1ee424eae15f7b789c86e634df9e28d",
        endOfModal: "rockstargames-sites-rockstargamesea8f15b1bfbda9f3efef89dc0d2ebc89"
      };
      const ie = N
    },
    63683: (e, n, a) => {
      a.d(n, {
        A: () => s
      });
      var t = a(42587),
        r = a.n(t),
        o = a(15081),
        i = a.n(o)()(r());
      i.push([e.id, ".rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e{color:var(--body-color);display:flex;flex:1;flex-flow:column;justify-content:flex-start;min-height:calc(100vh - var(--header-height));opacity:1;transition:transform .3s;width:100%}.rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516{--header-height:0px}", "", {
        version: 3,
        sources: ["webpack://./src/components/Main/index.less"],
        names: [],
        mappings: "AAAA,mEASI,uBAAA,CAHA,YAAA,CAEA,MAAA,CADA,gBAAA,CAGA,0BAAA,CAPA,6CAAA,CACA,SAAA,CACA,wBAAA,CAJA,UASJ,CAGA,mEACI,mBADJ",
        sourcesContent: [".main {\n    width: 100%;\n    flex: 1;\n    min-height: calc(100vh - var(--header-height));\n    opacity: 1;\n    transition: transform 0.3s;\n    display: flex;\n    flex-flow: column;\n    flex: 1;\n    color: var(--body-color);\n    justify-content: flex-start;\n}\n\n.headerHidden {\n    --header-height: 0px;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e",
        headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516"
      };
      const s = i
    },
    37241: e => {
      e.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27none%27%3E%3Cpath stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm9.998 2-4.35-4.35%27/%3E%3C/svg%3E"
    },
    36606: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/59de0d7e9b43e1cc0cab80a770e9efe6.woff"
    },
    57390: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ab64825965d1d9e6e8721c549ca9b65a.woff"
    },
    50228: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/95ca59e1c2cf140daa8b024c6a139e4c.woff"
    },
    79539: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ee9fe642d516bd426445b83dfe08cd39.woff"
    },
    61494: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ef44f43ca79bb1aee29fbc2d457e7dee.woff"
    },
    304: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/aa2a7321d65db9f2de3cafabeb37e354.woff"
    },
    28168: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a8da93d3b93aa6f5b995c8fca0a49d56.woff"
    },
    21130: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/bc4df074e2a0a7a841c564dba3e08fe8.woff"
    },
    51594: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/63234fb79c05a628350bb714e8b70f1d.woff"
    },
    69400: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/202c95f3c4658c54223b0f4166bd3825.woff"
    },
    44840: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a5e4e77906b6b4b3cbf21f4c26271861.woff"
    },
    93803: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/db765ccb047ec8429212c1a913914694.woff"
    },
    53037: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/e4be9aed1e8beccc21ffb995f0a89da0.woff"
    },
    28255: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/bf1c99f9a5316689221de8a3540abf38.woff"
    },
    73075: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/b2ebeec4803f0df250c5e20b396162b4.woff"
    },
    16183: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c02857e0585008d14d216e4a43b8c746.woff"
    },
    94904: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a531a5aaeac0ada2930fd697606d7e9e.woff"
    },
    49027: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/0c60fa85dfc771ab4d15d175246263b5.woff"
    },
    83493: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/acbb38cbe0ae2cdfc5f72a96cd32fe86.woff"
    },
    31431: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c70a0570c2d0687a208d5612623a9fdc.woff"
    },
    40792: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/f09f2d938e708e14f4211b5c41b1ae2c.woff"
    },
    313: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/099c158b47220bfa6b52c3aaf2ff3753.woff"
    },
    16465: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05f9a77c98ced3942631978d7672ad20.svg"
    },
    69308: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23bdc67ffcc24a66b8fe01ae5c40a7ed.svg"
    },
    94436: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edd74b31c8db281779029448248f466b.svg"
    },
    52542: e => {
      e.exports = JSON.parse('{"de-DE":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community-Richtlinien","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Diese Richtlinien beschreiben die Werte, die wir voraussetzen, und die Regeln, die wir anwenden, um sicherzustellen, dass alle Spieler ein faires, respektvolles und sicheres Spielerlebnis haben.","community_guidelines_tile_header":"Community-Richtlinien anschauen","email_settings_cta":"Präferenzen aktualisieren","footer_community_guidelines_label_text":"Community-Richtlinien","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Cookie-Richtlinie","footer_cookie_settings_label_text":"Cookie-Einstellungen","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Symbol: Händeschütteln","heartbook_icon_alt_text":"Symbol: Buch mit Herz","resources_last_updated_date":"18. November 2024","resources_tile_description":"Finde schnell Ressourcen, falls du oder jemand, den du kennst, Probleme hat und Hilfe braucht.","resources_tile_header":"Sicherheitsressourcen anschauen","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","rsg_no_results":"Diese Suche ergab leider keine Treffer.","rsg_total_results_message":"Suche nach {Tab}, gefiltert nach {Query}","safety_get_support_button":"Support kontaktieren","safety_learn_more_button":"Mehr erfahren","support_chat_icon_alt_text":"Symbol: Support-Chat","support_tile_description":"Besuche unsere Kundendienst-Website, wenn du zusätzliche Hilfe mit der Verwaltung deines Kontos oder den Datenschutz- und Privatsphäreeinstellungen benötigst.","support_tile_header":"Brauchst du Hilfe mit deinem Konto?","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"en-US":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community Guidelines","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe.","community_guidelines_tile_header":"Explore Community Guidelines","email_settings_cta":"Update Preferences","footer_community_guidelines_label_text":"Community Guidelines","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Handshake icon","heartbook_icon_alt_text":"Book with heart icon","resources_last_updated_date":"November 18, 2024","resources_tile_description":"Quickly find resources if you or someone you know is struggling and in need of help.","resources_tile_header":"Explore Safety Resources","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","rsg_no_results":"Sorry, there were no results.","rsg_total_results_message":"Showing {Tab} filtered by {Query}","safety_get_support_button":"Get Support","safety_learn_more_button":"Learn More","support_chat_icon_alt_text":"Support chat icon","support_tile_description":"For additional assistance with managing your account or data and privacy settings, visit our Customer Support page.","support_tile_header":"Need account assistance?","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"es-ES":{"community_guidelines_hero_aria_label":"¡Pide perdón, respeta a los demás!","community_guidelines_hero_title":"Directrices de la comunidad","community_guidelines_image_alt_text":"Say sorry, be nice (pide perdón, sé amable)","community_guidelines_tile_description":"Estas directrices resumen los valores que defendemos y las políticas que aplicamos para asegurarnos de que nuestros jugadores disfrutan de una experiencia justa, respetuosa y segura.","community_guidelines_tile_header":"Ver las directrices de la comunidad","email_settings_cta":"Cambiar tus preferencias","footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Ajustes de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nueva York","footer_locations_paris":"París","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Icono de un apretón de manos","heartbook_icon_alt_text":"Icono de un libro con un corazón","resources_last_updated_date":"18 De noviembre de 2024","resources_tile_description":"Encuentra ayuda rápidamente en caso de que tú o alguien que conoces esté pasando por dificultades y necesite apoyo.","resources_tile_header":"Ver los servicios de ayuda","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","rsg_no_results":"Lo sentimos, no hay resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Obtén asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Icono de chat de asistencia","support_tile_description":"Si necesitas ayuda adicional para gestionar tu cuenta o tus ajustes de datos o privacidad, visita nuestro sitio web de asistencia técnica.","support_tile_header":"¿Necesitas ayuda con tu cuenta?","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"es-MX":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Directrices de la comunidad","community_guidelines_image_alt_text":"Imagen con el mensaje: Say Sorry, Be Nice","community_guidelines_tile_description":"Estas directrices describen nuestros valores y las políticas que imponemos para asegurar que las experiencias de los jugadores sean justas, respetuosas y seguras.","community_guidelines_tile_header":"Directrices de la comunidad","email_settings_cta":"Actualizar preferencias","footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configuración de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Ícono de un apretón de manos","heartbook_icon_alt_text":"Ícono de un libro con un corazón","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra recursos rápidamente si tú o alguien que conoces necesita ayuda.","resources_tile_header":"Recursos de seguridad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","rsg_no_results":"Lo lamentamos, pero no se encontraron resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Recibir asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Ícono de chat de soporte","support_tile_description":"Para recibir asistencia adicional de tu cuenta, datos o ajustes de privacidad, visita nuestra página de soporte.","support_tile_header":"Asistencia de tu cuenta","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr-FR":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Règles de la communauté","community_guidelines_image_alt_text":"Image avec le texte en anglais Say Sorry, Be Nice","community_guidelines_tile_description":"Ces règles décrivent nos valeurs et les politiques que nous faisons appliquer pour assurer à tous les joueurs une expérience juste, respectueuse et sûre.","community_guidelines_tile_header":"Explorez nos Règles de la communauté","email_settings_cta":"Mettre vos préférences à jour","footer_community_guidelines_label_text":"Règles de la communauté","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Politique en matière de cookies","footer_cookie_settings_label_text":"Paramètres des cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londres","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Icône de poignée de main","heartbook_icon_alt_text":"Icône de livre avec un cœur","resources_last_updated_date":"Le 18 novembre 2024","resources_tile_description":"Trouvez rapidement des ressources si vous, ou une personne que vous connaissez, êtes en difficulté et avez besoin d\'aide.","resources_tile_header":"Explorez nos ressources relatives à la sécurité","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","rsg_no_results":"Désolé, aucun résultat n\'a été trouvé.","rsg_total_results_message":"Résultats : {Tab} Filtres : {Query}","safety_get_support_button":"Obtenir de l\'aide","safety_learn_more_button":"En savoir plus","support_chat_icon_alt_text":"Icône de discussion de l\'assistance","support_tile_description":"Si vous avez besoin d\'aide supplémentaire pour gérer votre compte ou les paramètres de vos données et de votre confidentialité, rendez-vous sur notre page d\'assistance à la clientèle.","support_tile_header":"Besoin d\'aide pour votre compte ?","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors du désabonnement","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désabonné(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désabonnement a été pris en compte"},"it-IT":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Linee guida della comunità","community_guidelines_image_alt_text":"Immagine con logo “Say Sorry, Be Nice”.","community_guidelines_tile_description":"Queste linee guida definiscono i valori che sosteniamo e le politiche che applichiamo per assicurare ai giocatori un’esperienza positiva, rispettosa e sicura.","community_guidelines_tile_header":"Scopri le Linee guida della comunità","email_settings_cta":"Aggiorna le preferenze","footer_community_guidelines_label_text":"Linee guida della comunità","footer_contact_label_text":"Contattaci","footer_cookie_policy_label_text":"Politica sui cookie","footer_cookie_settings_label_text":"Impostazioni dei cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londra","footer_locations_new_york":"New York","footer_locations_paris":"Parigi","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Icona della stretta di mano","heartbook_icon_alt_text":"Icona di un libro con un cuore","resources_last_updated_date":"18 Novembre 2024","resources_tile_description":"Trova velocemente le risorse che cerchi se tu o qualcuno che conosci è in difficoltà e ha bisogno di aiuto.","resources_tile_header":"Scopri le risorse per la sicurezza","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Paesi Bassi","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","rsg_no_results":"Spiacente, nessun risultato trovato.","rsg_total_results_message":"Scheda {Tab} filtrata per {Query}","safety_get_support_button":"Chiedi assistenza","safety_learn_more_button":"Altre informazioni","support_chat_icon_alt_text":"Icona della chat di assistenza","support_tile_description":"Per ulteriore assistenza sulla gestione del tuo account o dei tuoi data e sulle impostazioni della privacy, visita la nostra pagina del supporto clienti.","support_tile_header":"Hai bisogno di aiuto con il tuo account?","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"ja-JP":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"コミュニティガイドライン","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"このガイドラインでは、プレイヤーの体験が公平で、尊重され、安全であることを保証するため弊社が強化する方針ならびに、弊社が支持する価値観を説明しています。","community_guidelines_tile_header":"コミュニティガイドラインをチェックする","email_settings_cta":"設定を更新","footer_community_guidelines_label_text":"コミュニティガイドライン","footer_contact_label_text":"お問い合せ","footer_cookie_policy_label_text":"クッキーポリシー","footer_cookie_settings_label_text":"クッキー設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"ボゴタ","footer_locations_london":"ロンドン","footer_locations_new_york":"ニューヨーク","footer_locations_paris":"パリ","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"握手のアイコン","heartbook_icon_alt_text":"ハートのついた本のアイコン","resources_last_updated_date":"2024年11月18日","resources_tile_description":"あなた自身もしくは知人が困っており、ヘルプが必要な場合の情報を見つける。","resources_tile_header":"安全性に関する情報をチェックする","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{Country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","rsg_no_results":"申し訳ありません、結果が見つかりませんでした。","rsg_total_results_message":"{Query}でフィルターした{Tab}を表示中","safety_get_support_button":"サポートを依頼する","safety_learn_more_button":"詳細を見る","support_chat_icon_alt_text":"サポートチャットのアイコン","support_tile_description":"アカウントやデータ、プライバシー設定の管理についての追加アシストはカスタマーサポートページをご覧ください。","support_tile_header":"アカウントアシストが必要ですか？","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"ko-KR":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"커뮤니티 가이드라인","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"공정, 상호 존중, 안전을 바탕으로 한 플레이어 경험을 제공하기 위해 당사에서 추구하는 가치 및 시행하는 정책을 정리한 가이드라인입니다.","community_guidelines_tile_header":"커뮤니티 가이드라인 살펴보기","email_settings_cta":"설정 변경","footer_community_guidelines_label_text":"커뮤니티 가이드라인","footer_contact_label_text":"문의","footer_cookie_policy_label_text":"쿠키 정책","footer_cookie_settings_label_text":"쿠키 설정","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"악수 모양 아이콘","heartbook_icon_alt_text":"책과 하트 아이콘","resources_last_updated_date":"2024년 11월 18일","resources_tile_description":"본인 및 주변인에게 도움이 필요하다면 이곳에서 관련 정보를 빠르게 찾아보실 수 있습니다.","resources_tile_header":"안전 관련 정보 살펴보기","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","rsg_no_results":"죄송합니다, 결과가 없습니다.","rsg_total_results_message":"{Query} 필터를 적용한 {Tab} 보기","safety_get_support_button":"도움 요청하기","safety_learn_more_button":"더 알아보기","support_chat_icon_alt_text":"지원 채팅 아이콘","support_tile_description":"계정, 데이터, 개인 정보 보호 설정을 관리하는 데 추가로 도움이 필요하시다면 저희의 고객 지원 페이지를 방문해주세요.","support_tile_header":"계정 관련 도움이 필요하신가요?","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_success_header":"구독 취소 완료"},"pl-PL":{"community_guidelines_hero_aria_label":"Zachowuj się grzecznie!","community_guidelines_hero_title":"Regulamin społeczności","community_guidelines_image_alt_text":"Zachowuj się grzecznie!","community_guidelines_tile_description":"Ten regulamin opisuje wartości, jakimi się kierujemy, jak również zasady, których przestrzegamy, aby zapewnić graczom sprawiedliwe, bezpieczne i pełne szacunku doświadczenia.","community_guidelines_tile_header":"Przeglądaj regulamin społeczności","email_settings_cta":"Aktualizuj swoje preferencje","footer_community_guidelines_label_text":"Regulamin społeczności","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Polityka plików cookie","footer_cookie_settings_label_text":"Ustawienia plików cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londyn","footer_locations_new_york":"Nowy Jork","footer_locations_paris":"Paryż","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Ikona uścisku dłoni","heartbook_icon_alt_text":"Zapisz przy pomocy ikony serca","resources_last_updated_date":"18 Listopada 2024","resources_tile_description":"Odszukaj szybko informacje, jeżeli ty lub ktoś, kogo znasz, potrzebuje pomocy.","resources_tile_header":"Przeglądaj informacje dotyczące bezpieczeństwa","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","rsg_no_results":"Brak wyników.","rsg_total_results_message":"Wyświetlono: {Tab} filtrowanie: {Query}","safety_get_support_button":"Uzyskaj wsparcie","safety_learn_more_button":"Dowiedz się więcej","support_chat_icon_alt_text":"Ikona kontaku ze wsparciem","support_tile_description":"W celu uzyskania dodatkowej pomocy dotyczącej obsługi konta lub ustawień prywatności odwiedź naszą stronę wsparcia.","support_tile_header":"Potrzebujesz wsparcia dotyczącego konta?","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"pt-BR":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Diretrizes da Comunidade","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Estas regras detalham os valores e políticas que mantêm a experiência de jogo justa, respeitosa e segura.","community_guidelines_tile_header":"Explore as Regras da Comunidade","email_settings_cta":"Atualizar preferências","footer_community_guidelines_label_text":"Diretrizes da Comunidade","footer_contact_label_text":"Entre em contato","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configurações de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nova York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Ícone de aperto de mão","heartbook_icon_alt_text":"Ícone de livro com coração","resources_last_updated_date":"18 de novembro de 2024","resources_tile_description":"Encontre recursos rapidamente se você ou alguém que você conhece precisa de ajuda.","resources_tile_header":"Explore os recursos de segurança","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","rsg_no_results":"Nenhum resultado foi encontrado.","rsg_total_results_message":"Mostrando {Tab} com o filtro {Query}","safety_get_support_button":"Acionar suporte","safety_learn_more_button":"Saiba mais","support_chat_icon_alt_text":"Ícone de chat de suporte","support_tile_description":"Para mais ajuda com o gerenciamento da sua conta, dados e configurações de privacidade, acesse a página de suporte.","support_tile_header":"Precisa de ajuda com a sua conta?","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru-RU":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Правила сообщества","community_guidelines_image_alt_text":"Надпись Say Sorry, Be Nice","community_guidelines_tile_description":"В этих правилах изложены ценности, которых мы придерживаемся, и политики, которые мы применяем для обеспечения честной, уважительной и безопасной игры для всех.","community_guidelines_tile_header":"Ознакомьтесь с правилами сообщества","email_settings_cta":"Изменить настройки","footer_community_guidelines_label_text":"Правила сообщества","footer_contact_label_text":"Связаться с нами","footer_cookie_policy_label_text":"Политика использования файлов Cookie","footer_cookie_settings_label_text":"Настройки файлов Cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Богота","footer_locations_london":"Лондон","footer_locations_new_york":"Нью-Йорк","footer_locations_paris":"Париж","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Значок рукопожатия","heartbook_icon_alt_text":"Значок книги с сердцем","resources_last_updated_date":"18 ноября 2024 года","resources_tile_description":"Быстро найдите интернет-ресурсы, если вы или кто-то из ваших знакомых испытывает трудности и нуждается в помощи.","resources_tile_header":"Ознакомьтесь с ресурсами по психологической поддержке","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","rsg_no_results":"Результаты не найдены.","rsg_total_results_message":"Поиск в категории {Tab} с фильтром «{Query}»","safety_get_support_button":"Обратиться в службу поддержки","safety_learn_more_button":"Подробности","support_chat_icon_alt_text":"Значок службы поддержки","support_tile_description":"Для получения дополнительной помощи по управлению вашей учетной записью или данными и настройками конфиденциальности посетите нашу страницу поддержки клиентов.","support_tile_header":"Нужна помощь с учетной записью?","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"zh-CN":{"community_guidelines_hero_aria_label":"说声对不起，做个好人！","community_guidelines_hero_title":"社区指南","community_guidelines_image_alt_text":"说声对不起，做个好人","community_guidelines_tile_description":"指南中列出了我们秉持的价值观和遵循的政策原则，为玩家营造公平、尊重和安全的游玩体验。","community_guidelines_tile_header":"查看《社区指南》","email_settings_cta":"更新偏好设置","footer_community_guidelines_label_text":"社区指南","footer_contact_label_text":"联系我们","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 设置","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"伦敦","footer_locations_new_york":"纽约","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"握手图标","heartbook_icon_alt_text":"书上印着一颗心的图标","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"如果您自己，或者您知道的其他人需要帮助，在这里可以快速找到相关内容。","resources_tile_header":"查看“安全”相关内容","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","rsg_no_results":"抱歉，没有搜索结果。","rsg_total_results_message":"按 {filterList} 筛选显示 {type}","safety_get_support_button":"寻求支持","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支持对话图标","support_tile_description":"如果您在管理账户或数据，或者设置隐私选项时需要额外的帮助，请前往客户支持页面。","support_tile_header":"需要账户相关的帮助吗？","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"zh-TW":{"community_guidelines_hero_aria_label":"敢於道歉，友善待人！","community_guidelines_hero_title":"社群守則","community_guidelines_image_alt_text":"敢於道歉，友善待人","community_guidelines_tile_description":"我們以此守則簡述所遵循的價值觀，以及我們為了確保公平、尊重與安全的玩家體驗所執行的政策。","community_guidelines_tile_header":"探索社群守則","email_settings_cta":"更新偏好設定","footer_community_guidelines_label_text":"社群守則","footer_contact_label_text":"聯絡方式","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"倫敦","footer_locations_new_york":"紐約","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"握手圖示","heartbook_icon_alt_text":"書本上有心形的圖示","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"若您或您認識的人遭逢困難或需要協助，您可以快速尋找資源。","resources_tile_header":"探索安全資源","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","rsg_no_results":"很抱歉，無相符的搜尋結果。","rsg_total_results_message":"正在顯示 {Tab}，搜尋條件為 {Query}","safety_get_support_button":"取得支援","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支援文字對話圖示","support_tile_description":"如需管理您帳戶、資料或隱私權設定的額外協助，請造訪我們的客戶支援頁面。","support_tile_header":"需要帳戶協助？","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    }
  }
]);