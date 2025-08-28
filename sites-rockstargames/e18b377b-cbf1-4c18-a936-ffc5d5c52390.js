try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e18b377b-cbf1-4c18-a936-ffc5d5c52390", e._sentryDebugIdIdentifier = "sentry-dbid-e18b377b-cbf1-4c18-a936-ffc5d5c52390")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [686, 1634, 6175], {
    21861: (e, a, t) => {
      t.d(a, {
        A: () => v,
        K: () => p
      });
      var s = t(95966);
      const n = (0, s.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, s.makeVar)(null)
        }),
        r = e => n(e),
        o = (0, s.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, s.makeVar)(!1)
        }),
        i = e => o(e),
        c = (0, s.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, s.makeVar)(!1)
        }),
        l = e => c(e),
        _ = (0, s.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, s.makeVar)((0, s.webSettingsReactive)()?.currentCharId)
        }),
        u = e => _(e),
        d = (0, s.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, s.makeVar)(null)
        }),
        m = e => d(e),
        p = (0, s.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, s.makeVar)(null)
        }),
        g = (0, s.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        h = e => g(e),
        k = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        f = e => k(e),
        b = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        y = e => b(e),
        v = () => {
          const e = (0, s.useReactiveVar)(g),
            a = (0, s.useReactiveVar)(k),
            t = (0, s.useReactiveVar)(_),
            p = (0, s.useReactiveVar)(n),
            v = (0, s.useReactiveVar)(c),
            w = (0, s.useReactiveVar)(d);
          return {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: t,
            hasNotifications: v,
            navOpen: p,
            userData: (0, s.useReactiveVar)(b),
            selectedCharacterTuple: w,
            jumpScMenuFocus: (0, s.useReactiveVar)(o),
            setCharactersNeeded: h,
            setCrewsNeeded: f,
            setCurrentCharId: u,
            setHasNotifications: l,
            setNavOpen: r,
            setSelectedCharacterTuple: m,
            setUserData: y,
            setJumpScMenuFocus: i
          }
        }
    },
    32436: (e, a, t) => {
      t.d(a, {
        Ek: () => r,
        UN: () => n,
        b$: () => i,
        wk: () => o
      });
      var s = t(95966);
      const n = e => {
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
        o = (0, s.makeVar)({
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
          headerHidden: n({
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
                navOpen: n = !1
              } = t;
              const r = {
                ...e.gameData
              };
              null !== s && (r.base = s.replace(/\/$/, "")), null !== n && (r.navOpen = n), a({
                gameData: r
              })
            }
          }
        }
    },
    33918: (e, a, t) => {
      t.d(a, {
        b: () => s.b$
      });
      var s = t(32436)
    },
    43885: (e, a, t) => {
      t.d(a, {
        A: () => i
      });
      var s = t(62229),
        n = t(9623),
        r = t(95966);
      var o = t(70954);
      const i = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, s.useState)(""), i = (0, n.useNavigate)(), c = (0, r.useMutateState)();
        return (0, o.jsxs)("form", {
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
          children: [(0, o.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, o.jsx)("input", {
            autoComplete: "off",
            defaultValue: t,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    52542: e => {
      e.exports = JSON.parse('{"de-DE":{"avatarmenu_logout":"Abmelden","avatarmenu_selectlanguage":"Eine Sprache auswählen","avatarmenu_signin":"Anmelden","avatarmenu_signup":"Registrieren","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Diese Richtlinien beschreiben die Werte, die wir voraussetzen, und die Regeln, die wir anwenden, um sicherzustellen, dass alle Spieler ein faires, respektvolles und sicheres Spielerlebnis haben.","community_guidelines_tile_header":"Community-Richtlinien anschauen","email_settings_cta":"Präferenzen aktualisieren","handshake_icon_alt_text":"Symbol: Händeschütteln","heartbook_icon_alt_text":"Symbol: Buch mit Herz","quickmenu_games":"Spiele","quickmenu_home":"Startseite","quickmenu_newswire":"Newswire","resources_last_updated_date":"18. November 2024","resources_tile_description":"Finde schnell Ressourcen, falls du oder jemand, den du kennst, Probleme hat und Hilfe braucht.","resources_tile_header":"Sicherheitsressourcen anschauen","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","rsg_no_results":"Diese Suche ergab leider keine Treffer.","rsg_total_results_message":"Suche nach {Tab}, gefiltert nach {Query}","safety_get_support_button":"Support kontaktieren","safety_learn_more_button":"Mehr erfahren","support_chat_icon_alt_text":"Symbol: Support-Chat","support_tile_description":"Besuche unsere Kundendienst-Website, wenn du zusätzliche Hilfe mit der Verwaltung deines Kontos oder den Datenschutz- und Privatsphäreeinstellungen benötigst.","support_tile_header":"Brauchst du Hilfe mit deinem Konto?","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"en-US":{"avatarmenu_logout":"Log Out","avatarmenu_selectlanguage":"Select a Language","avatarmenu_signin":"Sign In","avatarmenu_signup":"Sign Up","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe.","community_guidelines_tile_header":"Explore Community Guidelines","email_settings_cta":"Update Preferences","handshake_icon_alt_text":"Handshake icon","heartbook_icon_alt_text":"Book with heart icon","quickmenu_games":"Games","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"November 18, 2024","resources_tile_description":"Quickly find resources if you or someone you know is struggling and in need of help.","resources_tile_header":"Explore Safety Resources","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","rsg_no_results":"Sorry, there were no results.","rsg_total_results_message":"Showing {Tab} filtered by {Query}","safety_get_support_button":"Get Support","safety_learn_more_button":"Learn More","support_chat_icon_alt_text":"Support chat icon","support_tile_description":"For additional assistance with managing your account or data and privacy settings, visit our Customer Support page.","support_tile_header":"Need account assistance?","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"es-ES":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Selecciona un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Say sorry, be nice (pide perdón, sé amable)","community_guidelines_tile_description":"Estas directrices resumen los valores que defendemos y las políticas que aplicamos para asegurarnos de que nuestros jugadores disfrutan de una experiencia justa, respetuosa y segura.","community_guidelines_tile_header":"Ver las directrices de la comunidad","email_settings_cta":"Cambiar tus preferencias","handshake_icon_alt_text":"Icono de un apretón de manos","heartbook_icon_alt_text":"Icono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 De noviembre de 2024","resources_tile_description":"Encuentra ayuda rápidamente en caso de que tú o alguien que conoces esté pasando por dificultades y necesite apoyo.","resources_tile_header":"Ver los servicios de ayuda","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","rsg_no_results":"Lo sentimos, no hay resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Obtén asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Icono de chat de asistencia","support_tile_description":"Si necesitas ayuda adicional para gestionar tu cuenta o tus ajustes de datos o privacidad, visita nuestro sitio web de asistencia técnica.","support_tile_header":"¿Necesitas ayuda con tu cuenta?","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"es-MX":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Seleccionar un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Imagen con el mensaje: Say Sorry, Be Nice","community_guidelines_tile_description":"Estas directrices describen nuestros valores y las políticas que imponemos para asegurar que las experiencias de los jugadores sean justas, respetuosas y seguras.","community_guidelines_tile_header":"Directrices de la comunidad","email_settings_cta":"Actualizar preferencias","handshake_icon_alt_text":"Ícono de un apretón de manos","heartbook_icon_alt_text":"Ícono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Canal de noticias","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra recursos rápidamente si tú o alguien que conoces necesita ayuda.","resources_tile_header":"Recursos de seguridad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","rsg_no_results":"Lo lamentamos, pero no se encontraron resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Recibir asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Ícono de chat de soporte","support_tile_description":"Para recibir asistencia adicional de tu cuenta, datos o ajustes de privacidad, visita nuestra página de soporte.","support_tile_header":"Asistencia de tu cuenta","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr-FR":{"avatarmenu_logout":"Se déconnecter","avatarmenu_selectlanguage":"Sélectionner une langue","avatarmenu_signin":"Se connecter","avatarmenu_signup":"S’abonner","community_guidelines_image_alt_text":"Image avec le texte en anglais Say Sorry, Be Nice","community_guidelines_tile_description":"Ces règles décrivent nos valeurs et les politiques que nous faisons appliquer pour assurer à tous les joueurs une expérience juste, respectueuse et sûre.","community_guidelines_tile_header":"Explorez nos Règles de la communauté","email_settings_cta":"Mettre vos préférences à jour","handshake_icon_alt_text":"Icône de poignée de main","heartbook_icon_alt_text":"Icône de livre avec un cœur","quickmenu_games":"Jeux","quickmenu_home":"Accueil","quickmenu_newswire":"Newswire","resources_last_updated_date":"Le 18 novembre 2024","resources_tile_description":"Trouvez rapidement des ressources si vous, ou une personne que vous connaissez, êtes en difficulté et avez besoin d\'aide.","resources_tile_header":"Explorez nos ressources relatives à la sécurité","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","rsg_no_results":"Désolé, aucun résultat n\'a été trouvé.","rsg_total_results_message":"Résultats : {Tab} Filtres : {Query}","safety_get_support_button":"Obtenir de l\'aide","safety_learn_more_button":"En savoir plus","support_chat_icon_alt_text":"Icône de discussion de l\'assistance","support_tile_description":"Si vous avez besoin d\'aide supplémentaire pour gérer votre compte ou les paramètres de vos données et de votre confidentialité, rendez-vous sur notre page d\'assistance à la clientèle.","support_tile_header":"Besoin d\'aide pour votre compte ?","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors du désabonnement","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désabonné(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désabonnement a été pris en compte"},"it-IT":{"avatarmenu_logout":"Esci","avatarmenu_selectlanguage":"Seleziona una lingua","avatarmenu_signin":"Accedi","avatarmenu_signup":"Registrati","community_guidelines_image_alt_text":"Immagine con logo “Say Sorry, Be Nice”.","community_guidelines_tile_description":"Queste linee guida definiscono i valori che sosteniamo e le politiche che applichiamo per assicurare ai giocatori un’esperienza positiva, rispettosa e sicura.","community_guidelines_tile_header":"Scopri le Linee guida della comunità","email_settings_cta":"Aggiorna le preferenze","handshake_icon_alt_text":"Icona della stretta di mano","heartbook_icon_alt_text":"Icona di un libro con un cuore","quickmenu_games":"Giochi","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Novembre 2024","resources_tile_description":"Trova velocemente le risorse che cerchi se tu o qualcuno che conosci è in difficoltà e ha bisogno di aiuto.","resources_tile_header":"Scopri le risorse per la sicurezza","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Paesi Bassi","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","rsg_no_results":"Spiacente, nessun risultato trovato.","rsg_total_results_message":"Scheda {Tab} filtrata per {Query}","safety_get_support_button":"Chiedi assistenza","safety_learn_more_button":"Altre informazioni","support_chat_icon_alt_text":"Icona della chat di assistenza","support_tile_description":"Per ulteriore assistenza sulla gestione del tuo account o dei tuoi data e sulle impostazioni della privacy, visita la nostra pagina del supporto clienti.","support_tile_header":"Hai bisogno di aiuto con il tuo account?","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"ja-JP":{"avatarmenu_logout":"ログアウト","avatarmenu_selectlanguage":"言語を選択","avatarmenu_signin":"サインイン","avatarmenu_signup":"サインアップ","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"このガイドラインでは、プレイヤーの体験が公平で、尊重され、安全であることを保証するため弊社が強化する方針ならびに、弊社が支持する価値観を説明しています。","community_guidelines_tile_header":"コミュニティガイドラインをチェックする","email_settings_cta":"設定を更新","handshake_icon_alt_text":"握手のアイコン","heartbook_icon_alt_text":"ハートのついた本のアイコン","quickmenu_games":"ゲーム","quickmenu_home":"ホーム","quickmenu_newswire":"Newswire","resources_last_updated_date":"2024年11月18日","resources_tile_description":"あなた自身もしくは知人が困っており、ヘルプが必要な場合の情報を見つける。","resources_tile_header":"安全性に関する情報をチェックする","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{Country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","rsg_no_results":"申し訳ありません、結果が見つかりませんでした。","rsg_total_results_message":"{Query}でフィルターした{Tab}を表示中","safety_get_support_button":"サポートを依頼する","safety_learn_more_button":"詳細を見る","support_chat_icon_alt_text":"サポートチャットのアイコン","support_tile_description":"アカウントやデータ、プライバシー設定の管理についての追加アシストはカスタマーサポートページをご覧ください。","support_tile_header":"アカウントアシストが必要ですか？","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"ko-KR":{"avatarmenu_logout":"로그아웃","avatarmenu_selectlanguage":"언어 선택","avatarmenu_signin":"로그인","avatarmenu_signup":"가입","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"공정, 상호 존중, 안전을 바탕으로 한 플레이어 경험을 제공하기 위해 당사에서 추구하는 가치 및 시행하는 정책을 정리한 가이드라인입니다.","community_guidelines_tile_header":"커뮤니티 가이드라인 살펴보기","email_settings_cta":"설정 변경","handshake_icon_alt_text":"악수 모양 아이콘","heartbook_icon_alt_text":"책과 하트 아이콘","quickmenu_games":"게임","quickmenu_home":"홈","quickmenu_newswire":"뉴스와이어","resources_last_updated_date":"2024년 11월 18일","resources_tile_description":"본인 및 주변인에게 도움이 필요하다면 이곳에서 관련 정보를 빠르게 찾아보실 수 있습니다.","resources_tile_header":"안전 관련 정보 살펴보기","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","rsg_no_results":"죄송합니다, 결과가 없습니다.","rsg_total_results_message":"{Query} 필터를 적용한 {Tab} 보기","safety_get_support_button":"도움 요청하기","safety_learn_more_button":"더 알아보기","support_chat_icon_alt_text":"지원 채팅 아이콘","support_tile_description":"계정, 데이터, 개인 정보 보호 설정을 관리하는 데 추가로 도움이 필요하시다면 저희의 고객 지원 페이지를 방문해주세요.","support_tile_header":"계정 관련 도움이 필요하신가요?","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_success_header":"구독 취소 완료"},"pl-PL":{"avatarmenu_logout":"Wyloguj się","avatarmenu_selectlanguage":"Wybierz język","avatarmenu_signin":"Zaloguj się","avatarmenu_signup":"Zarejestruj się","community_guidelines_image_alt_text":"Zachowuj się grzecznie!","community_guidelines_tile_description":"Ten regulamin opisuje wartości, jakimi się kierujemy, jak również zasady, których przestrzegamy, aby zapewnić graczom sprawiedliwe, bezpieczne i pełne szacunku doświadczenia.","community_guidelines_tile_header":"Przeglądaj regulamin społeczności","email_settings_cta":"Aktualizuj swoje preferencje","handshake_icon_alt_text":"Ikona uścisku dłoni","heartbook_icon_alt_text":"Zapisz przy pomocy ikony serca","quickmenu_games":"Gry","quickmenu_home":"Strona główna","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Listopada 2024","resources_tile_description":"Odszukaj szybko informacje, jeżeli ty lub ktoś, kogo znasz, potrzebuje pomocy.","resources_tile_header":"Przeglądaj informacje dotyczące bezpieczeństwa","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","rsg_no_results":"Brak wyników.","rsg_total_results_message":"Wyświetlono: {Tab} filtrowanie: {Query}","safety_get_support_button":"Uzyskaj wsparcie","safety_learn_more_button":"Dowiedz się więcej","support_chat_icon_alt_text":"Ikona kontaku ze wsparciem","support_tile_description":"W celu uzyskania dodatkowej pomocy dotyczącej obsługi konta lub ustawień prywatności odwiedź naszą stronę wsparcia.","support_tile_header":"Potrzebujesz wsparcia dotyczącego konta?","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"pt-BR":{"avatarmenu_logout":"Sair","avatarmenu_selectlanguage":"Selecione um idioma","avatarmenu_signin":"Iniciar sessão","avatarmenu_signup":"Inscrever-se","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Estas regras detalham os valores e políticas que mantêm a experiência de jogo justa, respeitosa e segura.","community_guidelines_tile_header":"Explore as Regras da Comunidade","email_settings_cta":"Atualizar preferências","handshake_icon_alt_text":"Ícone de aperto de mão","heartbook_icon_alt_text":"Ícone de livro com coração","quickmenu_games":"Jogos","quickmenu_home":"Início","quickmenu_newswire":"Boletim","resources_last_updated_date":"18 de novembro de 2024","resources_tile_description":"Encontre recursos rapidamente se você ou alguém que você conhece precisa de ajuda.","resources_tile_header":"Explore os recursos de segurança","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","rsg_no_results":"Nenhum resultado foi encontrado.","rsg_total_results_message":"Mostrando {Tab} com o filtro {Query}","safety_get_support_button":"Acionar suporte","safety_learn_more_button":"Saiba mais","support_chat_icon_alt_text":"Ícone de chat de suporte","support_tile_description":"Para mais ajuda com o gerenciamento da sua conta, dados e configurações de privacidade, acesse a página de suporte.","support_tile_header":"Precisa de ajuda com a sua conta?","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru-RU":{"avatarmenu_logout":"Выход","avatarmenu_selectlanguage":"Выбрать язык","avatarmenu_signin":"Войти","avatarmenu_signup":"Регистрация","community_guidelines_image_alt_text":"Надпись Say Sorry, Be Nice","community_guidelines_tile_description":"В этих правилах изложены ценности, которых мы придерживаемся, и политики, которые мы применяем для обеспечения честной, уважительной и безопасной игры для всех.","community_guidelines_tile_header":"Ознакомьтесь с правилами сообщества","email_settings_cta":"Изменить настройки","handshake_icon_alt_text":"Значок рукопожатия","heartbook_icon_alt_text":"Значок книги с сердцем","quickmenu_games":"Игры","quickmenu_home":"Главная страница","quickmenu_newswire":"Новостная лента","resources_last_updated_date":"18 ноября 2024 года","resources_tile_description":"Быстро найдите интернет-ресурсы, если вы или кто-то из ваших знакомых испытывает трудности и нуждается в помощи.","resources_tile_header":"Ознакомьтесь с ресурсами по психологической поддержке","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","rsg_no_results":"Результаты не найдены.","rsg_total_results_message":"Поиск в категории {Tab} с фильтром «{Query}»","safety_get_support_button":"Обратиться в службу поддержки","safety_learn_more_button":"Подробности","support_chat_icon_alt_text":"Значок службы поддержки","support_tile_description":"Для получения дополнительной помощи по управлению вашей учетной записью или данными и настройками конфиденциальности посетите нашу страницу поддержки клиентов.","support_tile_header":"Нужна помощь с учетной записью?","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"zh-CN":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"选择一种语言","avatarmenu_signin":"登录","avatarmenu_signup":"注册","community_guidelines_image_alt_text":"说声对不起，做个好人","community_guidelines_tile_description":"指南中列出了我们秉持的价值观和遵循的政策原则，为玩家营造公平、尊重和安全的游玩体验。","community_guidelines_tile_header":"查看《社区指南》","email_settings_cta":"更新偏好设置","handshake_icon_alt_text":"握手图标","heartbook_icon_alt_text":"书上印着一颗心的图标","quickmenu_games":"游戏","quickmenu_home":"主页","quickmenu_newswire":"新闻专线","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"如果您自己，或者您知道的其他人需要帮助，在这里可以快速找到相关内容。","resources_tile_header":"查看“安全”相关内容","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","rsg_no_results":"抱歉，没有搜索结果。","rsg_total_results_message":"按 {filterList} 筛选显示 {type}","safety_get_support_button":"寻求支持","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支持对话图标","support_tile_description":"如果您在管理账户或数据，或者设置隐私选项时需要额外的帮助，请前往客户支持页面。","support_tile_header":"需要账户相关的帮助吗？","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"zh-TW":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"選擇語言","avatarmenu_signin":"登入","avatarmenu_signup":"註冊","community_guidelines_image_alt_text":"敢於道歉，友善待人","community_guidelines_tile_description":"我們以此守則簡述所遵循的價值觀，以及我們為了確保公平、尊重與安全的玩家體驗所執行的政策。","community_guidelines_tile_header":"探索社群守則","email_settings_cta":"更新偏好設定","handshake_icon_alt_text":"握手圖示","heartbook_icon_alt_text":"書本上有心形的圖示","quickmenu_games":"遊戲","quickmenu_home":"首頁","quickmenu_newswire":"新聞放送","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"若您或您認識的人遭逢困難或需要協助，您可以快速尋找資源。","resources_tile_header":"探索安全資源","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","rsg_no_results":"很抱歉，無相符的搜尋結果。","rsg_total_results_message":"正在顯示 {Tab}，搜尋條件為 {Query}","safety_get_support_button":"取得支援","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支援文字對話圖示","support_tile_description":"如需管理您帳戶、資料或隱私權設定的額外協助，請造訪我們的客戶支援頁面。","support_tile_header":"需要帳戶協助？","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    },
    58720: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => l
      });
      var s = t(62229),
        n = t(81788),
        r = t(18444),
        o = t(43885);
      const i = (0, n.defineMessages)({
        wasted_error_404_new: {
          id: "wasted_error_404_new",
          defaultMessage: "The page you're looking for doesn't exist or another error occurred."
        },
        wasted_home: {
          id: "wasted_home",
          defaultMessage: "Home"
        }
      });
      var c = t(70954);
      const l = e => {
        let {
          error: a,
          domain: t = ""
        } = e;
        console.error({
          error: a
        });
        const {
          formatMessage: l
        } = (0, n.useIntl)();
        let _ = a?.message ?? l(i.wasted_error_404_new);
        _ = l(i.wasted_error_404_new);
        const u = a?.code ?? 398,
          d = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          d && d?.current && d.current.focus()
        }), [d]), (0, c.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e",
          children: [(0, c.jsx)("h3", {
            tabIndex: -1,
            ref: d,
            children: `${_} (${u})`
          }), (0, c.jsx)(r.A, {
            to: "/",
            reloadDocument: !1,
            children: l(i.wasted_home)
          }), "clr" !== t && (0, c.jsx)(o.A, {})]
        })
      }
    },
    69466: (e, a, t) => {
      t.d(a, {
        A: () => c
      });
      var s = t(62229),
        n = t(87592),
        r = t(58720),
        o = t(70954);
      class i extends s.Component {
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
          const a = {
            message: e?.message ? e.toString() : "Something has gone horribly awry.",
            code: e?.code ?? 399
          };
          return 399 === a.code && ((0, n.captureMessage)("Notorious 399 Error", n.Severity.Error), (0, n.addBreadcrumb)({
            category: "ErrorBoundary",
            message: "E399 triggered",
            data: a
          })), {
            error: a
          }
        }
        render() {
          return null !== this.state.error.code ? (0, o.jsx)(r.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, o.jsx)(i, {
            header: a,
            children: (0, o.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    70344: (e, a, t) => {
      t.r(a), t.d(a, {
        GtmProvider: () => s.UN,
        RockstarUserProvider: () => s.iR,
        useGtmTrack: () => s.h,
        useRockstarUser: () => s.Wx,
        useRockstarUserState: () => n.A
      });
      var s = t(83098),
        n = t(21861)
    },
    83098: (e, a, t) => {
      t.d(a, {
        UN: () => _,
        iR: () => v,
        h: () => d,
        Wx: () => w
      });
      var s = t(62229),
        n = t(95966),
        r = t(70344),
        o = t(48539);
      const i = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var c = t(70954);
      const l = (0, n.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        _ = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const _ = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, s.useState)([]), [c, l] = (0, s.useState)([]), [_, u] = (0, s.useState)(null), {
                data: d,
                loggedIn: m
              } = (0, r.useRockstarUser)(), {
                hasGtaPlus: p
              } = d ?? {}, g = (0, o.bn)(), h = (e, s) => {
                const r = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = s ?? {};
                    (0, n.track)({
                      ...e,
                      ...a
                    }), r.push(e)
                  }
                })), t([...a, ...r])
              };
              (0, s.useEffect)((() => {
                if (d && null !== m) {
                  const e = k(d);
                  c.length && e && h(c, e), u(e)
                } else e || c.length && h(c)
              }), [d, m, c]), (0, s.useEffect)((() => {
                const e = c.filter((e => -1 === a.indexOf(e)));
                l(e)
              }), [a]);
              const k = e => {
                const a = [],
                  t = [],
                  s = [],
                  n = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [r, o] = e;
                  o.length && o.forEach((e => {
                    const o = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === r) {
                      t.includes(o) || t.push(o), s.includes(o) || "1" !== e.stats?.overview?.hasGtaPlus?.value || s.push(o);
                      const a = `${r}_${e.platform}`;
                      n.includes(a) || n.push(a)
                    }
                    a.includes(o) || a.push(o)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [t, s] = e;
                  n.push(`${t}_${s}`), a.includes(s) || a.push(s)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: m ?? !1,
                  gta_plus_active: !!m && Boolean(p),
                  platforms_played: a.length ? a.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: n.length ? n.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: t.length ? t.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: s.length ? s.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: g
                }
              };
              return {
                track: e => {
                  const a = "boolean" == typeof m,
                    t = Boolean(d && _);
                  if (!a || !0 === m && !t) {
                    const a = [...c];
                    return a.push({
                      ...e
                    }), l(a)
                  }
                  return (0, n.track)({
                    ...e,
                    ..._
                  })
                }
              }
            }(a),
            u = (0, s.useMemo)((() => _), [_, a]);
          return (0, c.jsx)(l.Provider, {
            value: u,
            children: t
          })
        },
        u = {
          track: () => null
        },
        d = () => (0, s.useContext)(l) ?? u;
      var m = t(21861);
      var p = t(17330),
        g = t.n(p);
      var h = t(39445),
        k = t(53643);
      const f = e => {
          let {
            privateToken: a
          } = e;
          const {
            charactersNeeded: t,
            crewsNeeded: r,
            currentCharId: o
          } = (0, m.A)(), i = (0, n.useRockstarToken)(), [c, l] = (0, s.useState)(), [_] = (0, n.useRockstarTokenReactive)(), u = (0, n.useRockstarTokenPing)(), [d, p] = (0, s.useState)(), [f, b] = (0, s.useState)(!1), y = void 0 === d, [v, w] = (0, s.useState)(1);
          return (0, s.useEffect)((() => {
            "gtao" !== t || c?.characters?.gtao || (l({
              ...c,
              accountSynced: !1
            }), w((e => e + 1)))
          }), [t, c?.characters?.gtao]), (0, s.useEffect)((() => {
            r && !c?.crews && (l({
              ...c,
              accountSynced: !1
            }), w((e => e + 1)))
          }), [r, c?.crews]), (0, s.useEffect)((() => {
            0 === v && l({
              ...c,
              accountSynced: !0
            })
          }), [v]), (0, s.useEffect)((() => {
            a && _(a)
          }), [a]), (0, s.useEffect)((() => {
            "" !== i || u()
          }), [i]), (0, s.useEffect)((() => {
            if ("" === i) return;
            const e = !!i;
            if (e || f || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: a
                    } = e;
                    const {
                      gateway: t,
                      silentCheck: s
                    } = (0, n.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await g().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(s, r);
                    if (200 !== o.status) return void a(!1);
                    const i = `${t}?code=${await o.json()}`,
                      c = await fetch(i, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: l
                      } = await c.json();
                    return a(l), l
                  })({
                    token: _
                  })
                } catch (e) {}
              })(), b(!0)), !e && f && p(!1), e) {
              const e = (e => {
                let {
                  bearerToken: a
                } = e;
                const t = (0, h.s)(a),
                  {
                    host: s
                  } = (0, n.getConfigForDomain)(),
                  r = parseInt(t.nameid),
                  o = t["scAuth.Nickname"],
                  i = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  c = new Date(t["scAuth.MemberSince"]),
                  l = new Date,
                  _ = (0, k.M)(l, c) < 12,
                  u = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (t?.exp ?? 0) - u > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: i,
                  isNewAccount: _,
                  nickname: o,
                  profile_link: `https://${s}.rockstargames.com/member/${o}?id=${r}`
                }
              })({
                bearerToken: i
              });
              l({
                ...c,
                ...e
              })
            }
          }), [i, f]), (0, s.useEffect)((() => {
            (async () => {
              if (d && c && r && !c?.crews && c?.characters) {
                const e = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: t
                  } = e;
                  const {
                    crews: s
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: t
                    }
                  });
                  return s
                })({
                  pingBearer: u,
                  rockstarId: c.id
                });
                l({
                  ...c,
                  crews: e
                }), w((e => e - 1))
              }
            })()
          }), [c?.nickname, r, d, c?.characters]), (0, s.useEffect)((() => {
            (async () => {
              if (!d || !c || c?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: a
                } = e;
                const {
                  all: t
                } = await (0, n.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: a
                });
                return t
              })({
                pingBearer: u
              });
              l({
                ...c,
                gamesPlayed: e
              }), w((e => e - 1))
            })()
          }), [c?.nickname, d]), (0, s.useEffect)((() => {
            (async () => {
              if (d && c && "gtao" === t && !c?.characters?.gtao) {
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
                    o = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  await (o?.platforms?.reduce((async (e, t) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                    const s = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                      pingBearer: a
                    });
                    s?.status && s?.result?.map((e => {
                      const {
                        stats: a
                      } = e, {
                        overview: s
                      } = a, {
                        rank: n
                      } = s;
                      if ("0" === n.value) return;
                      const o = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return r.push({
                        ...e,
                        mugshotUrl: o,
                        platform: t
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: i,
                    accounts: c
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  if (!i || !c.length) return {
                    gtaoCharacters: r,
                    linkedAccounts: []
                  };
                  const l = c[0],
                    {
                      rockstarAccount: _,
                      linkedAccounts: u
                    } = l;
                  if (_?.rockstarId !== s) return {
                    gtaoCharacters: r,
                    linkedAccounts: []
                  };
                  if (!r.length) return {
                    gtaoCharacters: r,
                    linkedAccounts: l.linkedAccounts
                  };
                  const d = t;
                  let m = "",
                    p = "";
                  return u?.map((e => ("xbl" === e?.onlineService ? m = e.userName : "np" === e?.onlineService && (p = e.userName), e))), r.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), r.map(((e, a) => (e.platformUsername = d, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = p || d), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = m || d), e))), {
                    gtaoCharacters: r,
                    linkedAccounts: u
                  }
                })({
                  pingBearer: u,
                  nickname: c.nickname,
                  rockstarId: c.id
                });
                l({
                  ...c,
                  characters: {
                    ...c.characters,
                    gtao: e
                  },
                  linkedAccounts: a,
                  hasGtaPlus: "1" === e?.[o]?.stats?.overview?.hasGtaPlus?.value
                }), w((e => e - 1))
              }
            })()
          }), [t, c?.nickname, d]), (0, s.useEffect)((() => {
            c?.id && c?.nonExpiredToken && (p(!0), (0, m.K)(c.id))
          }), [JSON.stringify(c)]), {
            data: c,
            loggedIn: d,
            loading: y
          }
        },
        b = {},
        y = (0, n.setContextItem)({
          context: (0, s.createContext)(b),
          key: "userContext"
        }),
        v = e => {
          let {
            children: a,
            privateToken: t
          } = e;
          const n = f({
              privateToken: t
            }),
            r = (0, s.useMemo)((() => ({
              ...n,
              privateToken: t,
              hasProvider: !0
            })), [n]);
          return (0, c.jsx)(y.Provider, {
            value: r,
            children: a
          })
        },
        w = () => (0, s.useContext)(y)
    },
    95159: (e, a, t) => {
      t(10790), t(75826), t(58533), t(79910), t(6637), t(19954), t(86099), t(85311), t(7250), t(83711), t(81016), t(38069), t(95303), t(32372), t(15674), t(35610), t(73783), t(29090), t(24165);
      var s = t(95966),
        n = t(40748),
        r = t(62229),
        o = t(9623),
        i = t(20074),
        c = t(41263),
        l = t(78618),
        _ = t(81788),
        u = t(2918),
        d = t(20270);
      const m = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        p = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg",
        g = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg";
      var h = t(52542),
        k = t(70954);
      let f = "rockstargames-sites-rockstargamesaf71a274ec221dd5496e00f0129fe119";
      const b = "nav-dropdown",
        y = (e, a, t, s) => ({
          event: e || "nav_click",
          link_url: a,
          text: t,
          element_placement: `Global Nav > ${s}`?.toLowerCase()
        }),
        v = e => {
          let {
            globalNavigationComponent: a,
            gamesMenuComponent: t,
            link: n,
            gaEvent: r,
            gaBreadCrumb: i
          } = e;
          const c = (0, o.useNavigate)(),
            {
              dispatch: l
            } = (0, s.useRockstarEventDispatcher)(),
            {
              track: _
            } = (0, u.useGtmTrack)(),
            d = a,
            m = t,
            p = `${n?.location?.domain}${n?.location?.path}`,
            g = i ? `${i} > ${n.gaText}` : n.gaText;
          if (!n.location && "nav-no-link" === n.type) {
            const e = e => {
              n.dataTestId && (_(y(r, "", n.gaText, g)), l(n.dataTestId)), n.onClickCallback?.(e)
            };
            return (0, k.jsx)(d.MenuItem, {
              children: (0, k.jsx)(d.MenuLink, {
                asChild: !0,
                children: (0, k.jsx)("button", {
                  onClick: e,
                  "data-testid": n.dataTestId,
                  children: n.text
                })
              })
            }, n.text)
          }
          if ("games-menu" === n.type && m) {
            const e = (e, a, t) => {
              _(y(void 0, t, e, a))
            };
            return (0, k.jsx)(m.GamesMenuItem, {
              onNavigate: c,
              onClick: e,
              dataTestId: n.dataTestId
            }, "games-menu")
          }
          return n.type === b ? (0, k.jsxs)(d.MenuItem, {
            children: [(0, k.jsx)(d.MenuTrigger, {
              "data-testid": n.dataTestId,
              children: n.text
            }), (0, k.jsx)(d.MenuContent, {
              children: (0, k.jsx)(d.MenuSub, {
                children: (0, k.jsx)(d.MenuList, {
                  children: n.children?.map((e => (0, k.jsx)(v, {
                    globalNavigationComponent: a,
                    link: e,
                    gaBreadCrumb: g
                  }, e.text)))
                })
              })
            })]
          }) : n?.location?.domain || n.isLegacy ? (0, k.jsx)(d.MenuItem, {
            children: (0, k.jsx)(d.MenuLink, {
              external: "nav-external" === n.type,
              active: (0, o.matchPath)(p, location.pathname),
              target: n.target,
              href: p,
              "data-testid": n.dataTestId,
              children: n.text
            })
          }, n.text) : (0, k.jsx)(d.MenuItem, {
            children: (0, k.jsx)(d.MenuLink, {
              external: "nav-external" === n.type,
              active: (0, o.matchPath)(p, location.pathname),
              asChild: !0,
              children: (0, k.jsx)(o.Link, {
                target: n.target,
                to: p,
                onClick: n.onClickCallback,
                "data-testid": n.dataTestId,
                children: n.text
              })
            })
          }, n.text)
        },
        w = e => {
          let {
            globalNavigationComponent: a
          } = e;
          const t = a,
            {
              charactersNeeded: s
            } = (0, u.useRockstarUserState)(),
            {
              data: n
            } = (0, u.useRockstarUser)();
          return "gtao" !== s || 0 === (n.characters?.gtao ?? []).length ? null : (0, k.jsx)(t.AvatarMenuSection, {
            value: "open",
            children: (0, k.jsx)(d.CharacterProfile, {})
          })
        },
        x = e => {
          let {
            globalNavigationComponent: a,
            target: t
          } = e;
          const s = a;
          return t.type === b ? (0, k.jsx)(s.SearchTargetDropdown, {
            title: t.text,
            value: t.value,
            children: t.targets.map((e => (0, k.jsx)(x, {
              globalNavigationComponent: a,
              target: e
            }, e.text)))
          }) : (0, k.jsx)(s.SearchTarget, {
            value: t.value,
            title: t.text,
            children: t.text
          })
        },
        j = e => {
          let {
            globalNavigationComponent: a,
            searchConfig: t,
            onSearch: s,
            getQueryFromUrl: n,
            isSearchPage: i
          } = e;
          const [c, l] = (0, r.useState)(""), [_, u] = (0, r.useState)(t.targets[0].value ?? ""), {
            search: d,
            pathname: m
          } = (0, o.useLocation)(), p = (0, o.useNavigate)(), g = a;
          (0, r.useEffect)((() => {
            if (i && (d || m)) {
              const [e, a] = n();
              l(e), u(a?.value || "")
            }
          }), [n, i, d, m]);
          const h = (e, a, t) => {
            if (!e) return;
            const n = s(e, a);
            n && (t?.(), n.startsWith("http") ? window.location.href = n : p(n))
          };
          return (0, k.jsx)(g.SearchBar, {
            onSearch: h,
            query: c,
            onQueryChange: l,
            target: _,
            onTargetChange: e => {
              h(c, e), u(e)
            },
            queryMin: 3,
            isSearchPage: i,
            children: (0, k.jsx)(g.SearchFilters, {
              children: t.targets.map((e => (0, k.jsx)(x, {
                globalNavigationComponent: a,
                target: e
              }, e.text)))
            })
          })
        },
        S = e => {
          let {
            brand: a,
            site: t
          } = e;
          return (0, k.jsx)("img", {
            className: f,
            src: a,
            alt: t,
            "data-brand": t
          })
        },
        C = (0, _.withIntl)((e => {
          let {
            navigationData: a,
            globalNavigationComponent: t,
            gamesMenuComponent: n,
            avatarMenuData: i,
            searchConfig: c,
            onSearch: d,
            getQueryFromUrl: h,
            errorMessage: f,
            localisedStrings: b
          } = e;
          const x = t,
            C = (0, s.useLocale)(),
            R = (0, o.useLocation)(),
            {
              loggedIn: M,
              data: z
            } = (0, u.useRockstarUser)(),
            {
              track: I
            } = (0, u.useGtmTrack)(),
            N = (e, a, t, s) => () => {
              I(y(e, s, a, t))
            },
            E = (0, r.useMemo)((() => (0, s.getConfigForDomain)()), []),
            {
              currentCharId: P,
              setSelectedCharacterTuple: T
            } = (0, u.useRockstarUserState)(),
            L = (0, r.useMemo)((() => {
              const e = a.reduce(((e, a) => {
                const t = a.appearancePaths.find((e => (0, o.matchPath)(e, R.pathname)));
                return t && void 0 === e ? {
                  ...a,
                  matchedPath: t
                } : void 0 === e ? void 0 : e
              }), void 0);
              return e
            }), [a, R.pathname]);
          (0, r.useEffect)((() => {
            const e = z?.characters?.gtao ?? [];
            if (null !== M && !e.length) return void T(!1);
            if (null == P || !e.length) return;
            const a = e?.[P] ?? e?.[0] ?? null;
            T(!!a?.platform && [a.platform, a.characterSlot])
          }), [P, z, M]);
          const G = L?.matchedPath.options.isSearchPage || !1,
            A = (0, r.useMemo)((() => _.locales.find((e => e.iso.toLowerCase() === (0, s.toScLocaleString)(C)))?.label), [_.locales]);
          return (0, k.jsx)(x.Root, {
            brand: L?.brand ? (0, k.jsx)(S, {
              brand: L.brand,
              site: L.site
            }) : null,
            children: (0, k.jsxs)(x.Header, {
              children: [(0, k.jsx)(x.SiteTitle, {
                quickAccessHidden: L?.hideQuickAccess,
                href: (0, s.getBase)(),
                children: R.pathname.length > 0 && !L?.hideQuickAccess && (0, k.jsxs)(x.QuickMenu, {
                  children: [(0, k.jsx)(x.MenuItem, {
                    children: (0, k.jsx)(x.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/",
                        children: [(0, k.jsx)(x.MenuIcon, {
                          src: m,
                          alt: b.quickMenuHome
                        }), b.quickMenuHome]
                      })
                    })
                  }), (0, k.jsx)(x.MenuItem, {
                    children: (0, k.jsx)(x.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/games",
                        children: [(0, k.jsx)(x.MenuIcon, {
                          src: p,
                          alt: b.quickMenuGames
                        }), b.quickMenuGames]
                      })
                    })
                  }), (0, k.jsx)(x.MenuItem, {
                    children: (0, k.jsx)(x.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/newswire",
                        children: [(0, k.jsx)(x.MenuIcon, {
                          src: g,
                          alt: b.quickMenuNewswire
                        }), b.quickMenuNewswire]
                      })
                    })
                  })]
                })
              }), (0, k.jsxs)(x.MobileMenu, {
                children: ["careers" !== L.site && (0, k.jsxs)(k.Fragment, {
                  children: [(0, k.jsx)(j, {
                    globalNavigationComponent: t,
                    searchConfig: c,
                    onSearch: d,
                    getQueryFromUrl: h,
                    isSearchPage: G,
                    errorMessage: f
                  }), (0, k.jsx)(x.SearchError, {
                    errorMessage: f
                  })]
                }), (0, k.jsx)(x.MobileMenuNav, {
                  children: L?.links.map((e => (0, k.jsx)(v, {
                    globalNavigationComponent: x,
                    gamesMenuComponent: n,
                    link: e
                  }, e.text)))
                }), L?.cta && (0, k.jsx)(x.CallToAction, {
                  ...L.cta,
                  asChild: !0,
                  onClick: N(L.cta.ga, L.cta.gaText, L.cta.gaText, `${L.cta.location.domain}${L.cta.location.path}`),
                  size: "LG",
                  children: (0, k.jsx)(o.Link, {
                    to: `${L.cta.location.domain}${L.cta.location.path}`,
                    reloadDocument: Boolean(L.cta.location.domain),
                    children: L.cta.text
                  })
                }), !L?.hideQuickAccess && (0, k.jsxs)(x.QuickMenu, {
                  children: [(0, k.jsx)(x.MenuItem, {
                    children: (0, k.jsx)(x.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/",
                        children: [(0, k.jsx)(x.MenuIcon, {
                          src: m,
                          alt: b.quickMenuHome
                        }), b.quickMenuHome]
                      })
                    })
                  }), (0, k.jsx)(x.MenuItem, {
                    children: (0, k.jsx)(x.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/games",
                        children: [(0, k.jsx)(x.MenuIcon, {
                          src: p,
                          alt: b.quickMenuGames
                        }), b.quickMenuGames]
                      })
                    })
                  }), (0, k.jsx)(x.MenuItem, {
                    children: (0, k.jsx)(x.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/newswire",
                        children: [(0, k.jsx)(x.MenuIcon, {
                          src: g,
                          alt: b.quickMenuNewswire
                        }), b.quickMenuNewswire]
                      })
                    })
                  })]
                })]
              }), (0, k.jsx)(x.Menu, {
                children: L?.links.map((e => (0, k.jsx)(v, {
                  globalNavigationComponent: x,
                  gamesMenuComponent: n,
                  link: e
                }, e.text)))
              }), (0, k.jsxs)(x.Actions, {
                children: [(0, k.jsx)(x.Breakpoint, {
                  showOn: "desktop",
                  children: L?.cta && (0, k.jsx)(x.CallToAction, {
                    ...L.cta,
                    asChild: !0,
                    onClick: N(L.cta.ga, L.cta.gaText, L.cta.gaText, `${L.cta.location.domain}${L.cta.location.path}`),
                    children: (0, k.jsx)(o.Link, {
                      to: `${L.cta.location.domain}${L.cta.location.path}`,
                      reloadDocument: Boolean(L.cta.location.domain),
                      children: L.cta.text
                    })
                  })
                }), "careers" !== L.site && (0, k.jsxs)(x.Search, {
                  isSearchPage: G,
                  children: [(0, k.jsx)(x.SearchContainer, {
                    children: (0, k.jsx)(j, {
                      globalNavigationComponent: t,
                      searchConfig: c,
                      onSearch: d,
                      getQueryFromUrl: h,
                      isSearchPage: G,
                      errorMessage: f
                    })
                  }), (0, k.jsx)(x.SearchError, {
                    errorMessage: f
                  })]
                }), (0, k.jsxs)(x.AvatarMenu, {
                  avatarIconUrl: z?.avatar,
                  nickname: z?.nickname,
                  isLoggedIn: M,
                  children: [M && (0, k.jsx)(w, {
                    globalNavigationComponent: t
                  }), (0, k.jsx)(x.AvatarMenuSection, {
                    value: "open",
                    children: (0, k.jsx)(x.AvatarMenuSectionContent, {
                      children: (0, k.jsx)(x.MenuList, {
                        children: M ? (0, k.jsxs)(k.Fragment, {
                          children: [z.nickname && (0, k.jsx)(x.AvatarMenuSectionHeader, {
                            children: z.nickname
                          }), i.loggedInLinks.map((e => (0, k.jsx)(v, {
                            globalNavigationComponent: x,
                            link: e
                          }, e.text))), (0, k.jsx)(v, {
                            globalNavigationComponent: x,
                            link: i.helpItem
                          }), (0, k.jsx)(x.MenuItem, {
                            children: (0, k.jsx)(x.MenuLink, {
                              href: `${E.logout}?returnUrl=${R.pathname}`,
                              "data-testid": "logoutButton",
                              children: b.avatarMenuSignOut
                            })
                          })]
                        }) : (0, k.jsxs)(k.Fragment, {
                          children: [(0, k.jsx)(x.MenuItem, {
                            children: (0, k.jsx)(x.MenuLink, {
                              href: `${E.login}?returnUrl=${R.pathname}&lang=${(0,s.toScLocaleString)(C)}`,
                              "data-testid": "loginLink",
                              children: b.avatarMenuSignIn
                            })
                          }), (0, k.jsx)(x.MenuItem, {
                            children: (0, k.jsx)(x.MenuLink, {
                              href: `${E.signup}&returnUrl=${R.pathname}&lang=${(0,s.toScLocaleString)(C)}`,
                              "data-testid": "signUpLink",
                              children: b.avatarMenuSignUp
                            })
                          }), (0, k.jsx)(v, {
                            globalNavigationComponent: x,
                            link: i.helpItem
                          })]
                        })
                      })
                    })
                  }), (0, k.jsxs)(x.AvatarMenuSection, {
                    children: [(0, k.jsx)(x.AvatarMenuSectionHeaderDropdown, {
                      children: (0, k.jsxs)(x.AvatarMenuLanguageLabel, {
                        children: [(0, k.jsx)(l.Globe, {
                          label: b.avatarMenuSelectLanguage
                        }), (0, k.jsx)("span", {
                          "data-testid": "header-language-current",
                          children: A ?? b.avatarMenuSelectLanguage
                        })]
                      })
                    }), (0, k.jsx)(x.AvatarMenuSectionContent, {
                      children: (0, k.jsx)(x.MenuList, {
                        children: _.locales.map((e => (0, k.jsx)(x.MenuItem, {
                          testId: `header-language-selector-${e.subdomaincom}`,
                          children: (0, k.jsx)(x.MenuLink, {
                            onClick: () => (0, _.onLanguageChange)({
                              selectedLocale: e
                            }),
                            children: e.label
                          })
                        }, e.label)))
                      })
                    })]
                  })]
                })]
              })]
            })
          })
        }), h);
      var R = t(55274),
        M = t.n(R),
        z = t(90);
      const I = "__MFE_GLOBAL_HOOK__",
        N = () => {
          const e = window;
          e[I]?.history || (e[I] = Object.assign(e[I] || {}, {
            history: (0, z.createBrowserHistory)()
          }))
        },
        E = () => {
          const {
            pathname: e
          } = (0, o.useLocation)();
          return (0, r.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        },
        P = (0, r.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: s,
            children: n,
            requireUser: o
          } = e, {
            track: i
          } = (0, u.useGtmTrack)(o), [c, l] = (0, r.useState)(a?.current);
          return (0, r.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, t) => {
            const [s, n] = (0, r.useState)({
              scrollDepths: e,
              scrollY: 0,
              scrollLength: 0
            }), {
              scrollDepths: o,
              scrollY: i,
              scrollLength: c
            } = s;
            (0, r.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && n((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, r.useEffect)((() => {
              n({
                scrollDepths: e,
                scrollY: 0,
                scrollLength: 0
              })
            }), [window.location.pathname]);
            const l = (0, r.useCallback)((() => {
              const e = document.documentElement,
                r = document.body,
                i = t?.scrollTop || e.scrollTop || r.scrollTop,
                c = t?.scrollHeight || e.scrollHeight || r.scrollHeight,
                {
                  clientHeight: _
                } = e,
                u = i / (c - _) * 100;
              if (o) {
                const e = Math.min(...o, c);
                if (u >= e) {
                  const s = o.filter((a => a !== e));
                  0 === s.length && (t ?? window).removeEventListener("scroll", l), a && a({
                    scrollY: e,
                    scrollPercent: u,
                    scrollLength: c * (.01 * e),
                    remainingDepths: s
                  }), n({
                    scrollY: e,
                    scrollDepths: s,
                    scrollLength: c * (.01 * e)
                  })
                }
              } else n({
                ...s,
                scrollY: u
              })
            }), [o, t, a]);
            (0, r.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", l), () => e.removeEventListener("scroll", l)
            }), [l])
          })(t, (e => {
            let {
              scrollY: a,
              scrollLength: t
            } = e;
            i({
              event: "page_scroll",
              scroll_depth: a,
              page_length: `${t}px`
            }), "function" == typeof s && s(a)
          }), c), n
        }));
      P.displayName = "ScrollTracker";
      const T = P;
      var L = t(2765),
        G = t.n(L),
        A = t(63582);
      const q = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: n,
            height: i,
            onClose: c,
            rect: l = {
              left: 0,
              top: 0
            },
            contentStyle: _ = {},
            contentClassName: d = "",
            width: m,
            fadeIn: p = !0,
            cardIds: g,
            activeId: h,
            theme: f,
            title: b,
            gtm: y = {},
            aspectRatio: v = "default",
            cardDimensions: w
          } = a, {
            left: x,
            top: j
          } = l, S = g?.indexOf(h), [C, R] = (0, r.useState)(g?.length || 0), {
            track: M
          } = (0, u.useGtmTrack)(), z = null !== g && (g?.length || 0) > 1 && ("flag_bg" === f || "fob" === w?.size), I = window.location.href.includes("cms5"), [N, E] = (0, o.useSearchParams)(), [P, T] = (0, r.useState)(!1), [L, q] = (0, r.useState)(!1), [U, B] = (0, r.useState)(), D = e => {
            "number" == typeof e && g && e < g.length && e > -1 && E({
              info: g[e].toString()
            })
          }, H = () => {
            const e = "number" == typeof S && S > -1 ? S - 1 : 0;
            D(e), M({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: b?.toLowerCase(),
              position: S
            })
          }, V = () => {
            const e = "number" == typeof S && S > -1 ? S + 1 : 0;
            D(e), M({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: b?.toLowerCase(),
              position: S
            })
          };
          (0, r.useEffect)((() => {
            R(g?.length || 0)
          }), [g?.length]), (0, r.useEffect)((() => {
            null !== S && null !== g && D(S)
          }), [S, g]), (0, r.useEffect)((() => {
            const e = g?.findIndex((e => e === h));
            "number" == typeof e && (q(e <= 0), T(e >= C - 1))
          }), [g, h, C, N]);
          const [F] = (0, r.useState)({
            y: j,
            x,
            top: 0,
            left: 0,
            width: m,
            height: i,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: z ? "0" : ""
          }), $ = {
            opacity: 1
          }, O = (0, r.useRef)(null), Q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, K = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [Y] = (0, r.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: z ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: Q,
              y: Q,
              top: Q,
              left: Q,
              width: Q,
              height: Q,
              border: Q,
              background: {
                delay: .3
              }
            }
          }), [W, J] = (0, r.useState)({
            initial: F,
            shown: Y
          });
          (0, r.useEffect)((() => {
            J({
              initial: F,
              shown: Y
            })
          }), [F, Y]), (0, r.useEffect)((() => {
            const e = e => {
              "function" == typeof c && "Escape" === e.key && (c(), M({
                event: "modal_close",
                element_placement: b?.toLowerCase(),
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const X = () => {
              "function" == typeof c && (c(), M({
                event: "modal_close",
                element_placement: b?.toLowerCase(),
                ...y
              }))
            },
            Z = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const n = Z(s, a - 1);
                if (n) return n
              }
              return null
            },
            ee = e => {
              if (te?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return U?.queried ? a = U.element : (a = Z(e, 2), B({
                        queried: !0,
                        element: a
                      })), a
                    })(te.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ae = p ? 0 : 1,
            te = (0, r.useRef)(null),
            se = (0, k.jsx)(A.motion.button, {
              className: "rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: K,
              onClick: () => {
                X()
              },
              onKeyDown: ee,
              onKeyUp: ee
            });
          let ne = null;
          return ne = I ? r.Fragment : G(), (0, r.useMemo)((() => (0, k.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": z,
            "data-aspect-ratio": v,
            children: (0, k.jsx)(ne, {
              children: (0, k.jsxs)("div", {
                children: [(0, k.jsx)(A.motion.div, {
                  className: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: $,
                  transition: Q,
                  onClick: () => X()
                }), z && (0, k.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, k.jsxs)(A.motion.div, {
                    className: "rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: K,
                    children: [(0, k.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: H,
                      disabled: L,
                      onKeyDown: ee,
                      onKeyUp: ee
                    }), (0, k.jsxs)("div", {
                      className: "rockstargames-sites-rockstargamese316695281c4c56337307741bda1371f",
                      "data-theme": f,
                      children: [" ", (S ?? 0) + 1, (0, k.jsx)("div", {
                        className: "rockstargames-sites-rockstargamesc1ee424eae15f7b789c86e634df9e28d"
                      }), g?.length, " "]
                    }), (0, k.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: V,
                      disabled: P,
                      onKeyDown: ee,
                      onKeyUp: ee,
                      "data-autofocus": !0
                    })]
                  }), se]
                }), (0, k.jsx)(A.motion.div, {
                  className: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
                  ref: O,
                  initial: "initial",
                  animate: "shown",
                  variants: W,
                  transition: Q,
                  style: _,
                  children: (0, k.jsxs)(A.motion.div, {
                    className: (0, s.classList)("rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0", n),
                    id: "modal",
                    "data-testid": "modal",
                    role: "dialog",
                    children: [!z && se, (0, k.jsx)(A.motion.div, {
                      className: (0, s.classList)("rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714", d),
                      initial: {
                        opacity: ae
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: K,
                      ref: te,
                      children: t
                    }), (0, k.jsx)("button", {
                      className: "rockstargames-sites-rockstargamesea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [t, S, _])
        },
        U = [null, () => null],
        B = (0, s.setContextItem)({
          context: (0, r.createContext)(U),
          key: "modalContext"
        }),
        D = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, r.useState)(U), {
            setBodyIsLocked: o
          } = (0, s.useBodyScrollable)("ModalProvider"), i = (0, r.useMemo)((() => t?.content ? (0, k.jsx)(q, {
            modal: t
          }) : null), [t]), c = () => o(!1);
          return (0, r.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, r.useEffect)((() => {
            o(!!i)
          }), [i]), (0, k.jsx)(B.Provider, {
            value: [i, n],
            children: a
          })
        };
      var H = t(83098),
        V = t(55925),
        F = t(6590),
        $ = t(69466),
        O = t(33918);
      const Q = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const t = (0, r.lazy)(e);
          return (0, r.useMemo)((() => (0, k.jsx)(r.Suspense, {
            fallback: "",
            children: (0, k.jsx)(t, {
              ...a
            })
          })), [])
        },
        K = (0, $.A)((() => {
          const {
            setError: e,
            state: a
          } = (0, O.b)(), {
            error: s
          } = a, {
            pathname: n
          } = (0, o.useLocation)();
          (0, r.useEffect)((() => {
            e()
          }), [n]), (0, r.useEffect)((() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }), []);
          const i = {
            path: "*",
            element: Q((() => Promise.resolve().then(t.bind(t, 58720))), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let c = [{
            path: "/",
            element: Q((() => Promise.all([t.e(4045), t.e(2698), t.e(4283), t.e(5636), t.e(9829), t.e(9393), t.e(1784)]).then(t.bind(t, 81784))))
          }, {
            path: "/careers-privacy",
            element: Q((() => Promise.all([t.e(8135), t.e(5718)]).then(t.bind(t, 85718))))
          }, {
            path: "/ccpa",
            element: Q((() => Promise.all([t.e(8135), t.e(6934)]).then(t.bind(t, 46934))))
          }, {
            path: "/community-resources",
            element: Q((() => Promise.all([t.e(4283), t.e(5636), t.e(5462), t.e(9614)]).then(t.bind(t, 99174))))
          }, {
            path: "/community-resources/guidelines",
            element: Q((() => Promise.all([t.e(4045), t.e(4283), t.e(5636), t.e(5462), t.e(7746)]).then(t.bind(t, 62778))))
          }, {
            path: "/community-resources/additional-resources",
            element: Q((() => Promise.all([t.e(4045), t.e(4283), t.e(5636), t.e(5462), t.e(614)]).then(t.bind(t, 44686))))
          }, {
            path: "/community-resources/online-comms-privacy",
            element: Q((() => Promise.all([t.e(4045), t.e(4283), t.e(5636), t.e(5462), t.e(6672)]).then(t.bind(t, 6012))))
          }, {
            path: "/community-resources/how-to-report",
            element: Q((() => Promise.all([t.e(4045), t.e(4283), t.e(5636), t.e(5462), t.e(5825)]).then(t.bind(t, 10843))))
          }, {
            path: "/conduct",
            element: (0, k.jsx)(o.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: Q((() => t.e(8510).then(t.bind(t, 18510))))
          }, {
            path: "/cookies",
            element: Q((() => Promise.all([t.e(8135), t.e(2554)]).then(t.bind(t, 22554))))
          }, {
            path: "/corpinfo",
            element: Q((() => Promise.all([t.e(8135), t.e(3721)]).then(t.bind(t, 83721))))
          }, {
            path: "/VI",
            element: (0, k.jsx)(o.Navigate, {
              to: "/VI",
              replace: !0
            })
          }, {
            path: "/games",
            element: Q((() => Promise.all([t.e(4045), t.e(4283), t.e(5636), t.e(9829), t.e(4986)]).then(t.bind(t, 94279))))
          }, {
            path: "/games/:gameTitlelug",
            element: Q((() => Promise.all([t.e(4283), t.e(3947)]).then(t.bind(t, 3947))))
          }, {
            path: "/legal",
            element: Q((() => Promise.all([t.e(8135), t.e(8756)]).then(t.bind(t, 18756))))
          }, {
            path: "/gta-v/thankyou",
            element: Q((() => t.e(3144).then(t.bind(t, 23144))), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: Q((() => t.e(5342).then(t.bind(t, 45342))))
          }, {
            path: "/community_event",
            element: Q((() => Promise.all([t.e(4283), t.e(967)]).then(t.bind(t, 10967))))
          }, {
            path: "/reddeadredemption2/*",
            element: Q((() => t.e(9147).then(t.t.bind(t, 29147, 23))))
          }, {
            path: "/reddeadredemption/*",
            element: Q((() => t.e(7538).then(t.t.bind(t, 47538, 23))))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, k.jsx)(o.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: Q((() => t.e(5202).then(t.t.bind(t, 35202, 23))))
          }, {
            path: "/reddeadonline/thankyou",
            element: Q((() => t.e(3144).then(t.bind(t, 23144))), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: Q((() => t.e(3137).then(t.t.bind(t, 53137, 23))))
          }, {
            path: "/downloads/*",
            element: Q((() => Promise.all([t.e(2973), t.e(8030)]).then(t.bind(t, 98030))))
          }, {
            path: "/reddeadonline/*",
            element: Q((() => t.e(3416).then(t.t.bind(t, 33416, 23))))
          }, {
            path: "/gifs/:hashId",
            element: Q((() => t.e(1626).then(t.t.bind(t, 41626, 23))))
          }, {
            path: "/gta-v/*",
            element: Q((() => t.e(6766).then(t.t.bind(t, 36766, 23))), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: Q((() => t.e(6766).then(t.t.bind(t, 36766, 23))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: Q((() => t.e(3653).then(t.bind(t, 63653))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: Q((() => t.e(6766).then(t.t.bind(t, 36766, 23))), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: Q((() => t.e(2405).then(t.t.bind(t, 12405, 23))))
          }, {
            path: "/gtatv/*",
            element: Q((() => t.e(8987).then(t.t.bind(t, 88987, 23))))
          }, {
            path: "/manuals",
            element: Q((() => Promise.all([t.e(1143), t.e(9499)]).then(t.bind(t, 99499))))
          }, {
            path: "/manuals/music",
            element: Q((() => Promise.all([t.e(1143), t.e(2973), t.e(8841)]).then(t.bind(t, 38841))))
          }, {
            path: "/newswire",
            element: Q((() => Promise.all([t.e(4045), t.e(4283), t.e(5636), t.e(9829), t.e(9393), t.e(4088)]).then(t.bind(t, 4088))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: Q((() => t.e(8136).then(t.bind(t, 5755))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: Q((() => t.e(8136).then(t.bind(t, 5755))))
          }, {
            path: "/privacy",
            element: Q((() => Promise.all([t.e(8135), t.e(4831)]).then(t.bind(t, 4831))))
          }, {
            path: "/refund-policy",
            element: Q((() => t.e(8763).then(t.bind(t, 28763))))
          }, {
            path: "/rockstartv/*",
            element: Q((() => t.e(8778).then(t.t.bind(t, 78778, 23))))
          }, {
            path: "/screenshot-viewer/*",
            element: Q((() => t.e(582).then(t.t.bind(t, 90582, 23))))
          }, {
            path: "/search",
            element: Q((() => t.e(544).then(t.bind(t, 50544))))
          }, {
            path: "/socialclubmaintenance",
            element: Q((() => t.e(8395).then(t.bind(t, 38395))))
          }, {
            path: "/south-korean-privacy-addendum",
            element: Q((() => Promise.all([t.e(8135), t.e(3094)]).then(t.bind(t, 63094))))
          }, {
            path: "/unsubscribe",
            element: Q((() => Promise.all([t.e(4045), t.e(3784)]).then(t.bind(t, 73784))))
          }, {
            path: "/videos",
            element: Q((() => Promise.all([t.e(7575), t.e(2698), t.e(1913), t.e(650)]).then(t.bind(t, 80650))))
          }, {
            path: "/videos/:videoId",
            element: Q((() => Promise.all([t.e(7575), t.e(1913), t.e(7728)]).then(t.bind(t, 87728))))
          }, {
            ...i
          }];
          return isNaN(parseInt(s?.code)) || 200 === s?.code || (c = [i]), (0, o.useRoutes)(c)
        })),
        Y = {
          main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e",
          headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516"
        },
        W = (0, s.withAutoRouteTracking)((e => {
          let {
            headerHidden: a
          } = e;
          return (0, k.jsx)("main", {
            role: "main",
            id: "main",
            className: [Y.main, a ? Y.headerHidden : ""].join(" "),
            children: (0, k.jsx)(K, {})
          })
        }));
      var J = t(32436),
        X = t(39848),
        Z = t.n(X);
      N();
      const ee = (() => {
          const e = window;
          if (e[I]?.history || N(), e[I]?.history) return e[I].history;
          throw new Error("Browser History has not been initialised")
        })(),
        ae = (0, _.withIntl)((() => {
          const {
            setFooterHidden: e,
            setHeaderHidden: a,
            state: t
          } = (0, O.b)(), {
            footerHidden: s,
            headerHidden: n
          } = t, [l] = (0, r.useContext)(B), d = (0, o.useLocation)(), {
            data: m
          } = (0, H.Wx)(), {
            hasNotifications: p
          } = (0, u.useRockstarUserState)();
          return (0, r.useEffect)((() => {
            const t = (0, J.Ek)({
                path: d.pathname
              }),
              s = (0, J.UN)({
                path: d.pathname
              });
            e(t), a(s)
          }), [d]), (0, k.jsx)(i.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: (0, k.jsx)(H.UN, {
              children: (0, k.jsxs)(T, {
                threshold: [25, 50, 75, 90, 100],
                children: [!n && (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(c.NavigationWrapper, {
                    globalNavLoaderComponent: C,
                    globalNavComponent: c,
                    username: m?.nickname,
                    userProfileLink: m?.profile_link,
                    hasNotifications: p
                  })
                }), l, (0, k.jsx)(E, {}), (0, k.jsx)(W, {
                  headerHidden: n
                }), !s && (0, k.jsx)(Z(), {
                  onLanguageChange: _.onLanguageChange
                })]
              })
            })
          })
        }), h),
        te = (0, s.withRockstarGraph)((0, s.withReactiveState)((() => {
          const e = (0, s.useBase)(),
            {
              setTitle: a
            } = (0, O.b)();
          return (0, r.useEffect)((() => {
            window.addEventListener("message", (e => {
              "graph.titleUpdate" === (e.data?.type ?? null) && a(e.data.title)
            }))
          }), []), (0, k.jsx)(V.uU, {
            children: (0, k.jsx)(F.N2, {
              children: (0, k.jsx)(H.iR, {
                children: (0, k.jsx)(M(), {
                  history: ee,
                  basename: e,
                  children: (0, k.jsx)(D, {
                    children: (0, k.jsx)(ae, {})
                  })
                })
              })
            })
          })
        }), {
          state: J.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        se = window?.env?.oneTrustId ?? null,
        ne = window?.env?.gtmId ?? null;
      (0, s.gtmInit)({
        id: ne
      }), (0, s.oneTrustInit)({
        id: se,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, n.H)(e).render((0, k.jsx)(te, {}))
        }
      })
    }
  }
]);